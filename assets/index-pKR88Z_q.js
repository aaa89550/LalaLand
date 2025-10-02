var ow=Object.defineProperty;var aw=(t,e,n)=>e in t?ow(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var qh=(t,e,n)=>aw(t,typeof e!="symbol"?e+"":e,n);function lw(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Fm(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var $m={exports:{}},Ya={},zm={exports:{}},F={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ks=Symbol.for("react.element"),cw=Symbol.for("react.portal"),uw=Symbol.for("react.fragment"),dw=Symbol.for("react.strict_mode"),hw=Symbol.for("react.profiler"),fw=Symbol.for("react.provider"),pw=Symbol.for("react.context"),mw=Symbol.for("react.forward_ref"),gw=Symbol.for("react.suspense"),_w=Symbol.for("react.memo"),vw=Symbol.for("react.lazy"),Qh=Symbol.iterator;function yw(t){return t===null||typeof t!="object"?null:(t=Qh&&t[Qh]||t["@@iterator"],typeof t=="function"?t:null)}var Bm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Wm=Object.assign,Vm={};function Ei(t,e,n){this.props=t,this.context=e,this.refs=Vm,this.updater=n||Bm}Ei.prototype.isReactComponent={};Ei.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ei.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Hm(){}Hm.prototype=Ei.prototype;function Ju(t,e,n){this.props=t,this.context=e,this.refs=Vm,this.updater=n||Bm}var Zu=Ju.prototype=new Hm;Zu.constructor=Ju;Wm(Zu,Ei.prototype);Zu.isPureReactComponent=!0;var Yh=Array.isArray,Gm=Object.prototype.hasOwnProperty,ed={current:null},Km={key:!0,ref:!0,__self:!0,__source:!0};function qm(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Gm.call(e,r)&&!Km.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ks,type:t,key:s,ref:o,props:i,_owner:ed.current}}function ww(t,e){return{$$typeof:Ks,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function td(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ks}function Ew(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Xh=/\/+/g;function $l(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Ew(""+t.key):e.toString(36)}function Mo(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ks:case cw:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+$l(o,0):r,Yh(i)?(n="",t!=null&&(n=t.replace(Xh,"$&/")+"/"),Mo(i,e,n,"",function(c){return c})):i!=null&&(td(i)&&(i=ww(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Xh,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Yh(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+$l(s,a);o+=Mo(s,e,n,l,i)}else if(l=yw(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+$l(s,a++),o+=Mo(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function fo(t,e,n){if(t==null)return t;var r=[],i=0;return Mo(t,r,"","",function(s){return e.call(n,s,i++)}),r}function xw(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var We={current:null},jo={transition:null},kw={ReactCurrentDispatcher:We,ReactCurrentBatchConfig:jo,ReactCurrentOwner:ed};function Qm(){throw Error("act(...) is not supported in production builds of React.")}F.Children={map:fo,forEach:function(t,e,n){fo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return fo(t,function(){e++}),e},toArray:function(t){return fo(t,function(e){return e})||[]},only:function(t){if(!td(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};F.Component=Ei;F.Fragment=uw;F.Profiler=hw;F.PureComponent=Ju;F.StrictMode=dw;F.Suspense=gw;F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kw;F.act=Qm;F.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Wm({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=ed.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Gm.call(e,l)&&!Km.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Ks,type:t.type,key:i,ref:s,props:r,_owner:o}};F.createContext=function(t){return t={$$typeof:pw,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:fw,_context:t},t.Consumer=t};F.createElement=qm;F.createFactory=function(t){var e=qm.bind(null,t);return e.type=t,e};F.createRef=function(){return{current:null}};F.forwardRef=function(t){return{$$typeof:mw,render:t}};F.isValidElement=td;F.lazy=function(t){return{$$typeof:vw,_payload:{_status:-1,_result:t},_init:xw}};F.memo=function(t,e){return{$$typeof:_w,type:t,compare:e===void 0?null:e}};F.startTransition=function(t){var e=jo.transition;jo.transition={};try{t()}finally{jo.transition=e}};F.unstable_act=Qm;F.useCallback=function(t,e){return We.current.useCallback(t,e)};F.useContext=function(t){return We.current.useContext(t)};F.useDebugValue=function(){};F.useDeferredValue=function(t){return We.current.useDeferredValue(t)};F.useEffect=function(t,e){return We.current.useEffect(t,e)};F.useId=function(){return We.current.useId()};F.useImperativeHandle=function(t,e,n){return We.current.useImperativeHandle(t,e,n)};F.useInsertionEffect=function(t,e){return We.current.useInsertionEffect(t,e)};F.useLayoutEffect=function(t,e){return We.current.useLayoutEffect(t,e)};F.useMemo=function(t,e){return We.current.useMemo(t,e)};F.useReducer=function(t,e,n){return We.current.useReducer(t,e,n)};F.useRef=function(t){return We.current.useRef(t)};F.useState=function(t){return We.current.useState(t)};F.useSyncExternalStore=function(t,e,n){return We.current.useSyncExternalStore(t,e,n)};F.useTransition=function(){return We.current.useTransition()};F.version="18.3.1";zm.exports=F;var E=zm.exports;const Xa=Fm(E),Cw=lw({__proto__:null,default:Xa},[E]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sw=E,Iw=Symbol.for("react.element"),Tw=Symbol.for("react.fragment"),Nw=Object.prototype.hasOwnProperty,bw=Sw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Rw={key:!0,ref:!0,__self:!0,__source:!0};function Ym(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Nw.call(e,r)&&!Rw.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Iw,type:t,key:s,ref:o,props:i,_owner:bw.current}}Ya.Fragment=Tw;Ya.jsx=Ym;Ya.jsxs=Ym;$m.exports=Ya;var h=$m.exports,Ac={},Xm={exports:{}},rt={},Jm={exports:{}},Zm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(b,D){var M=b.length;b.push(D);e:for(;0<M;){var le=M-1>>>1,we=b[le];if(0<i(we,D))b[le]=D,b[M]=we,M=le;else break e}}function n(b){return b.length===0?null:b[0]}function r(b){if(b.length===0)return null;var D=b[0],M=b.pop();if(M!==D){b[0]=M;e:for(var le=0,we=b.length,uo=we>>>1;le<uo;){var Zn=2*(le+1)-1,Fl=b[Zn],er=Zn+1,ho=b[er];if(0>i(Fl,M))er<we&&0>i(ho,Fl)?(b[le]=ho,b[er]=M,le=er):(b[le]=Fl,b[Zn]=M,le=Zn);else if(er<we&&0>i(ho,M))b[le]=ho,b[er]=M,le=er;else break e}}return D}function i(b,D){var M=b.sortIndex-D.sortIndex;return M!==0?M:b.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,u=null,f=3,m=!1,g=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(b){for(var D=n(c);D!==null;){if(D.callback===null)r(c);else if(D.startTime<=b)r(c),D.sortIndex=D.expirationTime,e(l,D);else break;D=n(c)}}function w(b){if(y=!1,v(b),!g)if(n(l)!==null)g=!0,jl(C);else{var D=n(c);D!==null&&Ul(w,D.startTime-b)}}function C(b,D){g=!1,y&&(y=!1,_(R),R=-1),m=!0;var M=f;try{for(v(D),u=n(l);u!==null&&(!(u.expirationTime>D)||b&&!Ae());){var le=u.callback;if(typeof le=="function"){u.callback=null,f=u.priorityLevel;var we=le(u.expirationTime<=D);D=t.unstable_now(),typeof we=="function"?u.callback=we:u===n(l)&&r(l),v(D)}else r(l);u=n(l)}if(u!==null)var uo=!0;else{var Zn=n(c);Zn!==null&&Ul(w,Zn.startTime-D),uo=!1}return uo}finally{u=null,f=M,m=!1}}var I=!1,T=null,R=-1,B=5,O=-1;function Ae(){return!(t.unstable_now()-O<B)}function W(){if(T!==null){var b=t.unstable_now();O=b;var D=!0;try{D=T(!0,b)}finally{D?Ie():(I=!1,T=null)}}else I=!1}var Ie;if(typeof p=="function")Ie=function(){p(W)};else if(typeof MessageChannel<"u"){var Te=new MessageChannel,Ml=Te.port2;Te.port1.onmessage=W,Ie=function(){Ml.postMessage(null)}}else Ie=function(){x(W,0)};function jl(b){T=b,I||(I=!0,Ie())}function Ul(b,D){R=x(function(){b(t.unstable_now())},D)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(b){b.callback=null},t.unstable_continueExecution=function(){g||m||(g=!0,jl(C))},t.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<b?Math.floor(1e3/b):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(b){switch(f){case 1:case 2:case 3:var D=3;break;default:D=f}var M=f;f=D;try{return b()}finally{f=M}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(b,D){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var M=f;f=b;try{return D()}finally{f=M}},t.unstable_scheduleCallback=function(b,D,M){var le=t.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?le+M:le):M=le,b){case 1:var we=-1;break;case 2:we=250;break;case 5:we=1073741823;break;case 4:we=1e4;break;default:we=5e3}return we=M+we,b={id:d++,callback:D,priorityLevel:b,startTime:M,expirationTime:we,sortIndex:-1},M>le?(b.sortIndex=M,e(c,b),n(l)===null&&b===n(c)&&(y?(_(R),R=-1):y=!0,Ul(w,M-le))):(b.sortIndex=we,e(l,b),g||m||(g=!0,jl(C))),b},t.unstable_shouldYield=Ae,t.unstable_wrapCallback=function(b){var D=f;return function(){var M=f;f=D;try{return b.apply(this,arguments)}finally{f=M}}}})(Zm);Jm.exports=Zm;var Pw=Jm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Aw=E,nt=Pw;function k(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var eg=new Set,ms={};function Ir(t,e){si(t,e),si(t+"Capture",e)}function si(t,e){for(ms[t]=e,t=0;t<e.length;t++)eg.add(e[t])}var Jt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Oc=Object.prototype.hasOwnProperty,Ow=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Jh={},Zh={};function Dw(t){return Oc.call(Zh,t)?!0:Oc.call(Jh,t)?!1:Ow.test(t)?Zh[t]=!0:(Jh[t]=!0,!1)}function Lw(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Mw(t,e,n,r){if(e===null||typeof e>"u"||Lw(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ve(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Pe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Pe[t]=new Ve(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Pe[e]=new Ve(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Pe[t]=new Ve(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Pe[t]=new Ve(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Pe[t]=new Ve(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Pe[t]=new Ve(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Pe[t]=new Ve(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Pe[t]=new Ve(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Pe[t]=new Ve(t,5,!1,t.toLowerCase(),null,!1,!1)});var nd=/[\-:]([a-z])/g;function rd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(nd,rd);Pe[e]=new Ve(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(nd,rd);Pe[e]=new Ve(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(nd,rd);Pe[e]=new Ve(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Pe[t]=new Ve(t,1,!1,t.toLowerCase(),null,!1,!1)});Pe.xlinkHref=new Ve("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Pe[t]=new Ve(t,1,!1,t.toLowerCase(),null,!0,!0)});function id(t,e,n,r){var i=Pe.hasOwnProperty(e)?Pe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Mw(e,n,i,r)&&(n=null),r||i===null?Dw(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var ln=Aw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,po=Symbol.for("react.element"),Or=Symbol.for("react.portal"),Dr=Symbol.for("react.fragment"),sd=Symbol.for("react.strict_mode"),Dc=Symbol.for("react.profiler"),tg=Symbol.for("react.provider"),ng=Symbol.for("react.context"),od=Symbol.for("react.forward_ref"),Lc=Symbol.for("react.suspense"),Mc=Symbol.for("react.suspense_list"),ad=Symbol.for("react.memo"),pn=Symbol.for("react.lazy"),rg=Symbol.for("react.offscreen"),ef=Symbol.iterator;function Ai(t){return t===null||typeof t!="object"?null:(t=ef&&t[ef]||t["@@iterator"],typeof t=="function"?t:null)}var re=Object.assign,zl;function Hi(t){if(zl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);zl=e&&e[1]||""}return`
`+zl+t}var Bl=!1;function Wl(t,e){if(!t||Bl)return"";Bl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Bl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Hi(t):""}function jw(t){switch(t.tag){case 5:return Hi(t.type);case 16:return Hi("Lazy");case 13:return Hi("Suspense");case 19:return Hi("SuspenseList");case 0:case 2:case 15:return t=Wl(t.type,!1),t;case 11:return t=Wl(t.type.render,!1),t;case 1:return t=Wl(t.type,!0),t;default:return""}}function jc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Dr:return"Fragment";case Or:return"Portal";case Dc:return"Profiler";case sd:return"StrictMode";case Lc:return"Suspense";case Mc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case ng:return(t.displayName||"Context")+".Consumer";case tg:return(t._context.displayName||"Context")+".Provider";case od:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ad:return e=t.displayName||null,e!==null?e:jc(t.type)||"Memo";case pn:e=t._payload,t=t._init;try{return jc(t(e))}catch{}}return null}function Uw(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return jc(e);case 8:return e===sd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function zn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ig(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Fw(t){var e=ig(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function mo(t){t._valueTracker||(t._valueTracker=Fw(t))}function sg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=ig(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ea(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Uc(t,e){var n=e.checked;return re({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function tf(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=zn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function og(t,e){e=e.checked,e!=null&&id(t,"checked",e,!1)}function Fc(t,e){og(t,e);var n=zn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?$c(t,e.type,n):e.hasOwnProperty("defaultValue")&&$c(t,e.type,zn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function nf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function $c(t,e,n){(e!=="number"||ea(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Gi=Array.isArray;function qr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+zn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function zc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(k(91));return re({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function rf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(k(92));if(Gi(n)){if(1<n.length)throw Error(k(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:zn(n)}}function ag(t,e){var n=zn(e.value),r=zn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function sf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function lg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Bc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?lg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var go,cg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(go=go||document.createElement("div"),go.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=go.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function gs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ji={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},$w=["Webkit","ms","Moz","O"];Object.keys(Ji).forEach(function(t){$w.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ji[e]=Ji[t]})});function ug(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ji.hasOwnProperty(t)&&Ji[t]?(""+e).trim():e+"px"}function dg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=ug(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var zw=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Wc(t,e){if(e){if(zw[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(k(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(k(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(k(61))}if(e.style!=null&&typeof e.style!="object")throw Error(k(62))}}function Vc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hc=null;function ld(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Gc=null,Qr=null,Yr=null;function of(t){if(t=Ys(t)){if(typeof Gc!="function")throw Error(k(280));var e=t.stateNode;e&&(e=nl(e),Gc(t.stateNode,t.type,e))}}function hg(t){Qr?Yr?Yr.push(t):Yr=[t]:Qr=t}function fg(){if(Qr){var t=Qr,e=Yr;if(Yr=Qr=null,of(t),e)for(t=0;t<e.length;t++)of(e[t])}}function pg(t,e){return t(e)}function mg(){}var Vl=!1;function gg(t,e,n){if(Vl)return t(e,n);Vl=!0;try{return pg(t,e,n)}finally{Vl=!1,(Qr!==null||Yr!==null)&&(mg(),fg())}}function _s(t,e){var n=t.stateNode;if(n===null)return null;var r=nl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(k(231,e,typeof n));return n}var Kc=!1;if(Jt)try{var Oi={};Object.defineProperty(Oi,"passive",{get:function(){Kc=!0}}),window.addEventListener("test",Oi,Oi),window.removeEventListener("test",Oi,Oi)}catch{Kc=!1}function Bw(t,e,n,r,i,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Zi=!1,ta=null,na=!1,qc=null,Ww={onError:function(t){Zi=!0,ta=t}};function Vw(t,e,n,r,i,s,o,a,l){Zi=!1,ta=null,Bw.apply(Ww,arguments)}function Hw(t,e,n,r,i,s,o,a,l){if(Vw.apply(this,arguments),Zi){if(Zi){var c=ta;Zi=!1,ta=null}else throw Error(k(198));na||(na=!0,qc=c)}}function Tr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function _g(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function af(t){if(Tr(t)!==t)throw Error(k(188))}function Gw(t){var e=t.alternate;if(!e){if(e=Tr(t),e===null)throw Error(k(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return af(i),t;if(s===r)return af(i),e;s=s.sibling}throw Error(k(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?t:e}function vg(t){return t=Gw(t),t!==null?yg(t):null}function yg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=yg(t);if(e!==null)return e;t=t.sibling}return null}var wg=nt.unstable_scheduleCallback,lf=nt.unstable_cancelCallback,Kw=nt.unstable_shouldYield,qw=nt.unstable_requestPaint,ce=nt.unstable_now,Qw=nt.unstable_getCurrentPriorityLevel,cd=nt.unstable_ImmediatePriority,Eg=nt.unstable_UserBlockingPriority,ra=nt.unstable_NormalPriority,Yw=nt.unstable_LowPriority,xg=nt.unstable_IdlePriority,Ja=null,Rt=null;function Xw(t){if(Rt&&typeof Rt.onCommitFiberRoot=="function")try{Rt.onCommitFiberRoot(Ja,t,void 0,(t.current.flags&128)===128)}catch{}}var wt=Math.clz32?Math.clz32:eE,Jw=Math.log,Zw=Math.LN2;function eE(t){return t>>>=0,t===0?32:31-(Jw(t)/Zw|0)|0}var _o=64,vo=4194304;function Ki(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ia(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Ki(a):(s&=o,s!==0&&(r=Ki(s)))}else o=n&~i,o!==0?r=Ki(o):s!==0&&(r=Ki(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-wt(e),i=1<<n,r|=t[n],e&=~i;return r}function tE(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nE(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-wt(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=tE(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Qc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function kg(){var t=_o;return _o<<=1,!(_o&4194240)&&(_o=64),t}function Hl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function qs(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-wt(e),t[e]=n}function rE(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-wt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function ud(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-wt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var V=0;function Cg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Sg,dd,Ig,Tg,Ng,Yc=!1,yo=[],Nn=null,bn=null,Rn=null,vs=new Map,ys=new Map,gn=[],iE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function cf(t,e){switch(t){case"focusin":case"focusout":Nn=null;break;case"dragenter":case"dragleave":bn=null;break;case"mouseover":case"mouseout":Rn=null;break;case"pointerover":case"pointerout":vs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ys.delete(e.pointerId)}}function Di(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ys(e),e!==null&&dd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function sE(t,e,n,r,i){switch(e){case"focusin":return Nn=Di(Nn,t,e,n,r,i),!0;case"dragenter":return bn=Di(bn,t,e,n,r,i),!0;case"mouseover":return Rn=Di(Rn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return vs.set(s,Di(vs.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ys.set(s,Di(ys.get(s)||null,t,e,n,r,i)),!0}return!1}function bg(t){var e=sr(t.target);if(e!==null){var n=Tr(e);if(n!==null){if(e=n.tag,e===13){if(e=_g(n),e!==null){t.blockedOn=e,Ng(t.priority,function(){Ig(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Uo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Xc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Hc=r,n.target.dispatchEvent(r),Hc=null}else return e=Ys(n),e!==null&&dd(e),t.blockedOn=n,!1;e.shift()}return!0}function uf(t,e,n){Uo(t)&&n.delete(e)}function oE(){Yc=!1,Nn!==null&&Uo(Nn)&&(Nn=null),bn!==null&&Uo(bn)&&(bn=null),Rn!==null&&Uo(Rn)&&(Rn=null),vs.forEach(uf),ys.forEach(uf)}function Li(t,e){t.blockedOn===e&&(t.blockedOn=null,Yc||(Yc=!0,nt.unstable_scheduleCallback(nt.unstable_NormalPriority,oE)))}function ws(t){function e(i){return Li(i,t)}if(0<yo.length){Li(yo[0],t);for(var n=1;n<yo.length;n++){var r=yo[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Nn!==null&&Li(Nn,t),bn!==null&&Li(bn,t),Rn!==null&&Li(Rn,t),vs.forEach(e),ys.forEach(e),n=0;n<gn.length;n++)r=gn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<gn.length&&(n=gn[0],n.blockedOn===null);)bg(n),n.blockedOn===null&&gn.shift()}var Xr=ln.ReactCurrentBatchConfig,sa=!0;function aE(t,e,n,r){var i=V,s=Xr.transition;Xr.transition=null;try{V=1,hd(t,e,n,r)}finally{V=i,Xr.transition=s}}function lE(t,e,n,r){var i=V,s=Xr.transition;Xr.transition=null;try{V=4,hd(t,e,n,r)}finally{V=i,Xr.transition=s}}function hd(t,e,n,r){if(sa){var i=Xc(t,e,n,r);if(i===null)tc(t,e,r,oa,n),cf(t,r);else if(sE(i,t,e,n,r))r.stopPropagation();else if(cf(t,r),e&4&&-1<iE.indexOf(t)){for(;i!==null;){var s=Ys(i);if(s!==null&&Sg(s),s=Xc(t,e,n,r),s===null&&tc(t,e,r,oa,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else tc(t,e,r,null,n)}}var oa=null;function Xc(t,e,n,r){if(oa=null,t=ld(r),t=sr(t),t!==null)if(e=Tr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=_g(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return oa=t,null}function Rg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Qw()){case cd:return 1;case Eg:return 4;case ra:case Yw:return 16;case xg:return 536870912;default:return 16}default:return 16}}var Cn=null,fd=null,Fo=null;function Pg(){if(Fo)return Fo;var t,e=fd,n=e.length,r,i="value"in Cn?Cn.value:Cn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Fo=i.slice(t,1<r?1-r:void 0)}function $o(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function wo(){return!0}function df(){return!1}function it(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?wo:df,this.isPropagationStopped=df,this}return re(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=wo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=wo)},persist:function(){},isPersistent:wo}),e}var xi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pd=it(xi),Qs=re({},xi,{view:0,detail:0}),cE=it(Qs),Gl,Kl,Mi,Za=re({},Qs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:md,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Mi&&(Mi&&t.type==="mousemove"?(Gl=t.screenX-Mi.screenX,Kl=t.screenY-Mi.screenY):Kl=Gl=0,Mi=t),Gl)},movementY:function(t){return"movementY"in t?t.movementY:Kl}}),hf=it(Za),uE=re({},Za,{dataTransfer:0}),dE=it(uE),hE=re({},Qs,{relatedTarget:0}),ql=it(hE),fE=re({},xi,{animationName:0,elapsedTime:0,pseudoElement:0}),pE=it(fE),mE=re({},xi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),gE=it(mE),_E=re({},xi,{data:0}),ff=it(_E),vE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},wE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function EE(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=wE[t])?!!e[t]:!1}function md(){return EE}var xE=re({},Qs,{key:function(t){if(t.key){var e=vE[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=$o(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?yE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:md,charCode:function(t){return t.type==="keypress"?$o(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?$o(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),kE=it(xE),CE=re({},Za,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),pf=it(CE),SE=re({},Qs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:md}),IE=it(SE),TE=re({},xi,{propertyName:0,elapsedTime:0,pseudoElement:0}),NE=it(TE),bE=re({},Za,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),RE=it(bE),PE=[9,13,27,32],gd=Jt&&"CompositionEvent"in window,es=null;Jt&&"documentMode"in document&&(es=document.documentMode);var AE=Jt&&"TextEvent"in window&&!es,Ag=Jt&&(!gd||es&&8<es&&11>=es),mf=" ",gf=!1;function Og(t,e){switch(t){case"keyup":return PE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Dg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Lr=!1;function OE(t,e){switch(t){case"compositionend":return Dg(e);case"keypress":return e.which!==32?null:(gf=!0,mf);case"textInput":return t=e.data,t===mf&&gf?null:t;default:return null}}function DE(t,e){if(Lr)return t==="compositionend"||!gd&&Og(t,e)?(t=Pg(),Fo=fd=Cn=null,Lr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ag&&e.locale!=="ko"?null:e.data;default:return null}}var LE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _f(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!LE[t.type]:e==="textarea"}function Lg(t,e,n,r){hg(r),e=aa(e,"onChange"),0<e.length&&(n=new pd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ts=null,Es=null;function ME(t){Gg(t,0)}function el(t){var e=Ur(t);if(sg(e))return t}function jE(t,e){if(t==="change")return e}var Mg=!1;if(Jt){var Ql;if(Jt){var Yl="oninput"in document;if(!Yl){var vf=document.createElement("div");vf.setAttribute("oninput","return;"),Yl=typeof vf.oninput=="function"}Ql=Yl}else Ql=!1;Mg=Ql&&(!document.documentMode||9<document.documentMode)}function yf(){ts&&(ts.detachEvent("onpropertychange",jg),Es=ts=null)}function jg(t){if(t.propertyName==="value"&&el(Es)){var e=[];Lg(e,Es,t,ld(t)),gg(ME,e)}}function UE(t,e,n){t==="focusin"?(yf(),ts=e,Es=n,ts.attachEvent("onpropertychange",jg)):t==="focusout"&&yf()}function FE(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return el(Es)}function $E(t,e){if(t==="click")return el(e)}function zE(t,e){if(t==="input"||t==="change")return el(e)}function BE(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var kt=typeof Object.is=="function"?Object.is:BE;function xs(t,e){if(kt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Oc.call(e,i)||!kt(t[i],e[i]))return!1}return!0}function wf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ef(t,e){var n=wf(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=wf(n)}}function Ug(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Ug(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Fg(){for(var t=window,e=ea();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ea(t.document)}return e}function _d(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function WE(t){var e=Fg(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Ug(n.ownerDocument.documentElement,n)){if(r!==null&&_d(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Ef(n,s);var o=Ef(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var VE=Jt&&"documentMode"in document&&11>=document.documentMode,Mr=null,Jc=null,ns=null,Zc=!1;function xf(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Zc||Mr==null||Mr!==ea(r)||(r=Mr,"selectionStart"in r&&_d(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ns&&xs(ns,r)||(ns=r,r=aa(Jc,"onSelect"),0<r.length&&(e=new pd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Mr)))}function Eo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var jr={animationend:Eo("Animation","AnimationEnd"),animationiteration:Eo("Animation","AnimationIteration"),animationstart:Eo("Animation","AnimationStart"),transitionend:Eo("Transition","TransitionEnd")},Xl={},$g={};Jt&&($g=document.createElement("div").style,"AnimationEvent"in window||(delete jr.animationend.animation,delete jr.animationiteration.animation,delete jr.animationstart.animation),"TransitionEvent"in window||delete jr.transitionend.transition);function tl(t){if(Xl[t])return Xl[t];if(!jr[t])return t;var e=jr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in $g)return Xl[t]=e[n];return t}var zg=tl("animationend"),Bg=tl("animationiteration"),Wg=tl("animationstart"),Vg=tl("transitionend"),Hg=new Map,kf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Kn(t,e){Hg.set(t,e),Ir(e,[t])}for(var Jl=0;Jl<kf.length;Jl++){var Zl=kf[Jl],HE=Zl.toLowerCase(),GE=Zl[0].toUpperCase()+Zl.slice(1);Kn(HE,"on"+GE)}Kn(zg,"onAnimationEnd");Kn(Bg,"onAnimationIteration");Kn(Wg,"onAnimationStart");Kn("dblclick","onDoubleClick");Kn("focusin","onFocus");Kn("focusout","onBlur");Kn(Vg,"onTransitionEnd");si("onMouseEnter",["mouseout","mouseover"]);si("onMouseLeave",["mouseout","mouseover"]);si("onPointerEnter",["pointerout","pointerover"]);si("onPointerLeave",["pointerout","pointerover"]);Ir("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ir("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ir("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ir("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ir("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ir("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),KE=new Set("cancel close invalid load scroll toggle".split(" ").concat(qi));function Cf(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Hw(r,e,void 0,t),t.currentTarget=null}function Gg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Cf(i,a,c),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Cf(i,a,c),s=l}}}if(na)throw t=qc,na=!1,qc=null,t}function Q(t,e){var n=e[iu];n===void 0&&(n=e[iu]=new Set);var r=t+"__bubble";n.has(r)||(Kg(e,t,2,!1),n.add(r))}function ec(t,e,n){var r=0;e&&(r|=4),Kg(n,t,r,e)}var xo="_reactListening"+Math.random().toString(36).slice(2);function ks(t){if(!t[xo]){t[xo]=!0,eg.forEach(function(n){n!=="selectionchange"&&(KE.has(n)||ec(n,!1,t),ec(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[xo]||(e[xo]=!0,ec("selectionchange",!1,e))}}function Kg(t,e,n,r){switch(Rg(e)){case 1:var i=aE;break;case 4:i=lE;break;default:i=hd}n=i.bind(null,e,n,t),i=void 0,!Kc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function tc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=sr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}gg(function(){var c=s,d=ld(n),u=[];e:{var f=Hg.get(t);if(f!==void 0){var m=pd,g=t;switch(t){case"keypress":if($o(n)===0)break e;case"keydown":case"keyup":m=kE;break;case"focusin":g="focus",m=ql;break;case"focusout":g="blur",m=ql;break;case"beforeblur":case"afterblur":m=ql;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=hf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=dE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=IE;break;case zg:case Bg:case Wg:m=pE;break;case Vg:m=NE;break;case"scroll":m=cE;break;case"wheel":m=RE;break;case"copy":case"cut":case"paste":m=gE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=pf}var y=(e&4)!==0,x=!y&&t==="scroll",_=y?f!==null?f+"Capture":null:f;y=[];for(var p=c,v;p!==null;){v=p;var w=v.stateNode;if(v.tag===5&&w!==null&&(v=w,_!==null&&(w=_s(p,_),w!=null&&y.push(Cs(p,w,v)))),x)break;p=p.return}0<y.length&&(f=new m(f,g,null,n,d),u.push({event:f,listeners:y}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",f&&n!==Hc&&(g=n.relatedTarget||n.fromElement)&&(sr(g)||g[Zt]))break e;if((m||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,m?(g=n.relatedTarget||n.toElement,m=c,g=g?sr(g):null,g!==null&&(x=Tr(g),g!==x||g.tag!==5&&g.tag!==6)&&(g=null)):(m=null,g=c),m!==g)){if(y=hf,w="onMouseLeave",_="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(y=pf,w="onPointerLeave",_="onPointerEnter",p="pointer"),x=m==null?f:Ur(m),v=g==null?f:Ur(g),f=new y(w,p+"leave",m,n,d),f.target=x,f.relatedTarget=v,w=null,sr(d)===c&&(y=new y(_,p+"enter",g,n,d),y.target=v,y.relatedTarget=x,w=y),x=w,m&&g)t:{for(y=m,_=g,p=0,v=y;v;v=Pr(v))p++;for(v=0,w=_;w;w=Pr(w))v++;for(;0<p-v;)y=Pr(y),p--;for(;0<v-p;)_=Pr(_),v--;for(;p--;){if(y===_||_!==null&&y===_.alternate)break t;y=Pr(y),_=Pr(_)}y=null}else y=null;m!==null&&Sf(u,f,m,y,!1),g!==null&&x!==null&&Sf(u,x,g,y,!0)}}e:{if(f=c?Ur(c):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var C=jE;else if(_f(f))if(Mg)C=zE;else{C=FE;var I=UE}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=$E);if(C&&(C=C(t,c))){Lg(u,C,n,d);break e}I&&I(t,f,c),t==="focusout"&&(I=f._wrapperState)&&I.controlled&&f.type==="number"&&$c(f,"number",f.value)}switch(I=c?Ur(c):window,t){case"focusin":(_f(I)||I.contentEditable==="true")&&(Mr=I,Jc=c,ns=null);break;case"focusout":ns=Jc=Mr=null;break;case"mousedown":Zc=!0;break;case"contextmenu":case"mouseup":case"dragend":Zc=!1,xf(u,n,d);break;case"selectionchange":if(VE)break;case"keydown":case"keyup":xf(u,n,d)}var T;if(gd)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Lr?Og(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(Ag&&n.locale!=="ko"&&(Lr||R!=="onCompositionStart"?R==="onCompositionEnd"&&Lr&&(T=Pg()):(Cn=d,fd="value"in Cn?Cn.value:Cn.textContent,Lr=!0)),I=aa(c,R),0<I.length&&(R=new ff(R,t,null,n,d),u.push({event:R,listeners:I}),T?R.data=T:(T=Dg(n),T!==null&&(R.data=T)))),(T=AE?OE(t,n):DE(t,n))&&(c=aa(c,"onBeforeInput"),0<c.length&&(d=new ff("onBeforeInput","beforeinput",null,n,d),u.push({event:d,listeners:c}),d.data=T))}Gg(u,e)})}function Cs(t,e,n){return{instance:t,listener:e,currentTarget:n}}function aa(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=_s(t,n),s!=null&&r.unshift(Cs(t,s,i)),s=_s(t,e),s!=null&&r.push(Cs(t,s,i))),t=t.return}return r}function Pr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Sf(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=_s(n,s),l!=null&&o.unshift(Cs(n,l,a))):i||(l=_s(n,s),l!=null&&o.push(Cs(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var qE=/\r\n?/g,QE=/\u0000|\uFFFD/g;function If(t){return(typeof t=="string"?t:""+t).replace(qE,`
`).replace(QE,"")}function ko(t,e,n){if(e=If(e),If(t)!==e&&n)throw Error(k(425))}function la(){}var eu=null,tu=null;function nu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ru=typeof setTimeout=="function"?setTimeout:void 0,YE=typeof clearTimeout=="function"?clearTimeout:void 0,Tf=typeof Promise=="function"?Promise:void 0,XE=typeof queueMicrotask=="function"?queueMicrotask:typeof Tf<"u"?function(t){return Tf.resolve(null).then(t).catch(JE)}:ru;function JE(t){setTimeout(function(){throw t})}function nc(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ws(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ws(e)}function Pn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Nf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ki=Math.random().toString(36).slice(2),Tt="__reactFiber$"+ki,Ss="__reactProps$"+ki,Zt="__reactContainer$"+ki,iu="__reactEvents$"+ki,ZE="__reactListeners$"+ki,ex="__reactHandles$"+ki;function sr(t){var e=t[Tt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Zt]||n[Tt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Nf(t);t!==null;){if(n=t[Tt])return n;t=Nf(t)}return e}t=n,n=t.parentNode}return null}function Ys(t){return t=t[Tt]||t[Zt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ur(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(k(33))}function nl(t){return t[Ss]||null}var su=[],Fr=-1;function qn(t){return{current:t}}function X(t){0>Fr||(t.current=su[Fr],su[Fr]=null,Fr--)}function q(t,e){Fr++,su[Fr]=t.current,t.current=e}var Bn={},Me=qn(Bn),qe=qn(!1),pr=Bn;function oi(t,e){var n=t.type.contextTypes;if(!n)return Bn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Qe(t){return t=t.childContextTypes,t!=null}function ca(){X(qe),X(Me)}function bf(t,e,n){if(Me.current!==Bn)throw Error(k(168));q(Me,e),q(qe,n)}function qg(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(k(108,Uw(t)||"Unknown",i));return re({},n,r)}function ua(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Bn,pr=Me.current,q(Me,t),q(qe,qe.current),!0}function Rf(t,e,n){var r=t.stateNode;if(!r)throw Error(k(169));n?(t=qg(t,e,pr),r.__reactInternalMemoizedMergedChildContext=t,X(qe),X(Me),q(Me,t)):X(qe),q(qe,n)}var zt=null,rl=!1,rc=!1;function Qg(t){zt===null?zt=[t]:zt.push(t)}function tx(t){rl=!0,Qg(t)}function Qn(){if(!rc&&zt!==null){rc=!0;var t=0,e=V;try{var n=zt;for(V=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}zt=null,rl=!1}catch(i){throw zt!==null&&(zt=zt.slice(t+1)),wg(cd,Qn),i}finally{V=e,rc=!1}}return null}var $r=[],zr=0,da=null,ha=0,ot=[],at=0,mr=null,Wt=1,Vt="";function tr(t,e){$r[zr++]=ha,$r[zr++]=da,da=t,ha=e}function Yg(t,e,n){ot[at++]=Wt,ot[at++]=Vt,ot[at++]=mr,mr=t;var r=Wt;t=Vt;var i=32-wt(r)-1;r&=~(1<<i),n+=1;var s=32-wt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Wt=1<<32-wt(e)+i|n<<i|r,Vt=s+t}else Wt=1<<s|n<<i|r,Vt=t}function vd(t){t.return!==null&&(tr(t,1),Yg(t,1,0))}function yd(t){for(;t===da;)da=$r[--zr],$r[zr]=null,ha=$r[--zr],$r[zr]=null;for(;t===mr;)mr=ot[--at],ot[at]=null,Vt=ot[--at],ot[at]=null,Wt=ot[--at],ot[at]=null}var tt=null,Ze=null,Z=!1,gt=null;function Xg(t,e){var n=lt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Pf(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,tt=t,Ze=Pn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,tt=t,Ze=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=mr!==null?{id:Wt,overflow:Vt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=lt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,tt=t,Ze=null,!0):!1;default:return!1}}function ou(t){return(t.mode&1)!==0&&(t.flags&128)===0}function au(t){if(Z){var e=Ze;if(e){var n=e;if(!Pf(t,e)){if(ou(t))throw Error(k(418));e=Pn(n.nextSibling);var r=tt;e&&Pf(t,e)?Xg(r,n):(t.flags=t.flags&-4097|2,Z=!1,tt=t)}}else{if(ou(t))throw Error(k(418));t.flags=t.flags&-4097|2,Z=!1,tt=t}}}function Af(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;tt=t}function Co(t){if(t!==tt)return!1;if(!Z)return Af(t),Z=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!nu(t.type,t.memoizedProps)),e&&(e=Ze)){if(ou(t))throw Jg(),Error(k(418));for(;e;)Xg(t,e),e=Pn(e.nextSibling)}if(Af(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(k(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ze=Pn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ze=null}}else Ze=tt?Pn(t.stateNode.nextSibling):null;return!0}function Jg(){for(var t=Ze;t;)t=Pn(t.nextSibling)}function ai(){Ze=tt=null,Z=!1}function wd(t){gt===null?gt=[t]:gt.push(t)}var nx=ln.ReactCurrentBatchConfig;function ji(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,t))}return t}function So(t,e){throw t=Object.prototype.toString.call(e),Error(k(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Of(t){var e=t._init;return e(t._payload)}function Zg(t){function e(_,p){if(t){var v=_.deletions;v===null?(_.deletions=[p],_.flags|=16):v.push(p)}}function n(_,p){if(!t)return null;for(;p!==null;)e(_,p),p=p.sibling;return null}function r(_,p){for(_=new Map;p!==null;)p.key!==null?_.set(p.key,p):_.set(p.index,p),p=p.sibling;return _}function i(_,p){return _=Ln(_,p),_.index=0,_.sibling=null,_}function s(_,p,v){return _.index=v,t?(v=_.alternate,v!==null?(v=v.index,v<p?(_.flags|=2,p):v):(_.flags|=2,p)):(_.flags|=1048576,p)}function o(_){return t&&_.alternate===null&&(_.flags|=2),_}function a(_,p,v,w){return p===null||p.tag!==6?(p=uc(v,_.mode,w),p.return=_,p):(p=i(p,v),p.return=_,p)}function l(_,p,v,w){var C=v.type;return C===Dr?d(_,p,v.props.children,w,v.key):p!==null&&(p.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===pn&&Of(C)===p.type)?(w=i(p,v.props),w.ref=ji(_,p,v),w.return=_,w):(w=Ko(v.type,v.key,v.props,null,_.mode,w),w.ref=ji(_,p,v),w.return=_,w)}function c(_,p,v,w){return p===null||p.tag!==4||p.stateNode.containerInfo!==v.containerInfo||p.stateNode.implementation!==v.implementation?(p=dc(v,_.mode,w),p.return=_,p):(p=i(p,v.children||[]),p.return=_,p)}function d(_,p,v,w,C){return p===null||p.tag!==7?(p=dr(v,_.mode,w,C),p.return=_,p):(p=i(p,v),p.return=_,p)}function u(_,p,v){if(typeof p=="string"&&p!==""||typeof p=="number")return p=uc(""+p,_.mode,v),p.return=_,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case po:return v=Ko(p.type,p.key,p.props,null,_.mode,v),v.ref=ji(_,null,p),v.return=_,v;case Or:return p=dc(p,_.mode,v),p.return=_,p;case pn:var w=p._init;return u(_,w(p._payload),v)}if(Gi(p)||Ai(p))return p=dr(p,_.mode,v,null),p.return=_,p;So(_,p)}return null}function f(_,p,v,w){var C=p!==null?p.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return C!==null?null:a(_,p,""+v,w);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case po:return v.key===C?l(_,p,v,w):null;case Or:return v.key===C?c(_,p,v,w):null;case pn:return C=v._init,f(_,p,C(v._payload),w)}if(Gi(v)||Ai(v))return C!==null?null:d(_,p,v,w,null);So(_,v)}return null}function m(_,p,v,w,C){if(typeof w=="string"&&w!==""||typeof w=="number")return _=_.get(v)||null,a(p,_,""+w,C);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case po:return _=_.get(w.key===null?v:w.key)||null,l(p,_,w,C);case Or:return _=_.get(w.key===null?v:w.key)||null,c(p,_,w,C);case pn:var I=w._init;return m(_,p,v,I(w._payload),C)}if(Gi(w)||Ai(w))return _=_.get(v)||null,d(p,_,w,C,null);So(p,w)}return null}function g(_,p,v,w){for(var C=null,I=null,T=p,R=p=0,B=null;T!==null&&R<v.length;R++){T.index>R?(B=T,T=null):B=T.sibling;var O=f(_,T,v[R],w);if(O===null){T===null&&(T=B);break}t&&T&&O.alternate===null&&e(_,T),p=s(O,p,R),I===null?C=O:I.sibling=O,I=O,T=B}if(R===v.length)return n(_,T),Z&&tr(_,R),C;if(T===null){for(;R<v.length;R++)T=u(_,v[R],w),T!==null&&(p=s(T,p,R),I===null?C=T:I.sibling=T,I=T);return Z&&tr(_,R),C}for(T=r(_,T);R<v.length;R++)B=m(T,_,R,v[R],w),B!==null&&(t&&B.alternate!==null&&T.delete(B.key===null?R:B.key),p=s(B,p,R),I===null?C=B:I.sibling=B,I=B);return t&&T.forEach(function(Ae){return e(_,Ae)}),Z&&tr(_,R),C}function y(_,p,v,w){var C=Ai(v);if(typeof C!="function")throw Error(k(150));if(v=C.call(v),v==null)throw Error(k(151));for(var I=C=null,T=p,R=p=0,B=null,O=v.next();T!==null&&!O.done;R++,O=v.next()){T.index>R?(B=T,T=null):B=T.sibling;var Ae=f(_,T,O.value,w);if(Ae===null){T===null&&(T=B);break}t&&T&&Ae.alternate===null&&e(_,T),p=s(Ae,p,R),I===null?C=Ae:I.sibling=Ae,I=Ae,T=B}if(O.done)return n(_,T),Z&&tr(_,R),C;if(T===null){for(;!O.done;R++,O=v.next())O=u(_,O.value,w),O!==null&&(p=s(O,p,R),I===null?C=O:I.sibling=O,I=O);return Z&&tr(_,R),C}for(T=r(_,T);!O.done;R++,O=v.next())O=m(T,_,R,O.value,w),O!==null&&(t&&O.alternate!==null&&T.delete(O.key===null?R:O.key),p=s(O,p,R),I===null?C=O:I.sibling=O,I=O);return t&&T.forEach(function(W){return e(_,W)}),Z&&tr(_,R),C}function x(_,p,v,w){if(typeof v=="object"&&v!==null&&v.type===Dr&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case po:e:{for(var C=v.key,I=p;I!==null;){if(I.key===C){if(C=v.type,C===Dr){if(I.tag===7){n(_,I.sibling),p=i(I,v.props.children),p.return=_,_=p;break e}}else if(I.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===pn&&Of(C)===I.type){n(_,I.sibling),p=i(I,v.props),p.ref=ji(_,I,v),p.return=_,_=p;break e}n(_,I);break}else e(_,I);I=I.sibling}v.type===Dr?(p=dr(v.props.children,_.mode,w,v.key),p.return=_,_=p):(w=Ko(v.type,v.key,v.props,null,_.mode,w),w.ref=ji(_,p,v),w.return=_,_=w)}return o(_);case Or:e:{for(I=v.key;p!==null;){if(p.key===I)if(p.tag===4&&p.stateNode.containerInfo===v.containerInfo&&p.stateNode.implementation===v.implementation){n(_,p.sibling),p=i(p,v.children||[]),p.return=_,_=p;break e}else{n(_,p);break}else e(_,p);p=p.sibling}p=dc(v,_.mode,w),p.return=_,_=p}return o(_);case pn:return I=v._init,x(_,p,I(v._payload),w)}if(Gi(v))return g(_,p,v,w);if(Ai(v))return y(_,p,v,w);So(_,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,p!==null&&p.tag===6?(n(_,p.sibling),p=i(p,v),p.return=_,_=p):(n(_,p),p=uc(v,_.mode,w),p.return=_,_=p),o(_)):n(_,p)}return x}var li=Zg(!0),e_=Zg(!1),fa=qn(null),pa=null,Br=null,Ed=null;function xd(){Ed=Br=pa=null}function kd(t){var e=fa.current;X(fa),t._currentValue=e}function lu(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Jr(t,e){pa=t,Ed=Br=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ge=!0),t.firstContext=null)}function dt(t){var e=t._currentValue;if(Ed!==t)if(t={context:t,memoizedValue:e,next:null},Br===null){if(pa===null)throw Error(k(308));Br=t,pa.dependencies={lanes:0,firstContext:t}}else Br=Br.next=t;return e}var or=null;function Cd(t){or===null?or=[t]:or.push(t)}function t_(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Cd(e)):(n.next=i.next,i.next=n),e.interleaved=n,en(t,r)}function en(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var mn=!1;function Sd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function n_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Qt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function An(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,$&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,en(t,n)}return i=r.interleaved,i===null?(e.next=e,Cd(r)):(e.next=i.next,i.next=e),r.interleaved=e,en(t,n)}function zo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ud(t,n)}}function Df(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ma(t,e,n,r){var i=t.updateQueue;mn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(s!==null){var u=i.baseState;o=0,d=c=l=null,a=s;do{var f=a.lane,m=a.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,y=a;switch(f=e,m=n,y.tag){case 1:if(g=y.payload,typeof g=="function"){u=g.call(m,u,f);break e}u=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=y.payload,f=typeof g=="function"?g.call(m,u,f):g,f==null)break e;u=re({},u,f);break e;case 2:mn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else m={eventTime:m,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=m,l=u):d=d.next=m,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(d===null&&(l=u),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);_r|=o,t.lanes=o,t.memoizedState=u}}function Lf(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(k(191,i));i.call(r)}}}var Xs={},Pt=qn(Xs),Is=qn(Xs),Ts=qn(Xs);function ar(t){if(t===Xs)throw Error(k(174));return t}function Id(t,e){switch(q(Ts,e),q(Is,t),q(Pt,Xs),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Bc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Bc(e,t)}X(Pt),q(Pt,e)}function ci(){X(Pt),X(Is),X(Ts)}function r_(t){ar(Ts.current);var e=ar(Pt.current),n=Bc(e,t.type);e!==n&&(q(Is,t),q(Pt,n))}function Td(t){Is.current===t&&(X(Pt),X(Is))}var ee=qn(0);function ga(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ic=[];function Nd(){for(var t=0;t<ic.length;t++)ic[t]._workInProgressVersionPrimary=null;ic.length=0}var Bo=ln.ReactCurrentDispatcher,sc=ln.ReactCurrentBatchConfig,gr=0,ne=null,fe=null,xe=null,_a=!1,rs=!1,Ns=0,rx=0;function Oe(){throw Error(k(321))}function bd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!kt(t[n],e[n]))return!1;return!0}function Rd(t,e,n,r,i,s){if(gr=s,ne=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Bo.current=t===null||t.memoizedState===null?ax:lx,t=n(r,i),rs){s=0;do{if(rs=!1,Ns=0,25<=s)throw Error(k(301));s+=1,xe=fe=null,e.updateQueue=null,Bo.current=cx,t=n(r,i)}while(rs)}if(Bo.current=va,e=fe!==null&&fe.next!==null,gr=0,xe=fe=ne=null,_a=!1,e)throw Error(k(300));return t}function Pd(){var t=Ns!==0;return Ns=0,t}function It(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xe===null?ne.memoizedState=xe=t:xe=xe.next=t,xe}function ht(){if(fe===null){var t=ne.alternate;t=t!==null?t.memoizedState:null}else t=fe.next;var e=xe===null?ne.memoizedState:xe.next;if(e!==null)xe=e,fe=t;else{if(t===null)throw Error(k(310));fe=t,t={memoizedState:fe.memoizedState,baseState:fe.baseState,baseQueue:fe.baseQueue,queue:fe.queue,next:null},xe===null?ne.memoizedState=xe=t:xe=xe.next=t}return xe}function bs(t,e){return typeof e=="function"?e(t):e}function oc(t){var e=ht(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=fe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,c=s;do{var d=c.lane;if((gr&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var u={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=u,o=r):l=l.next=u,ne.lanes|=d,_r|=d}c=c.next}while(c!==null&&c!==s);l===null?o=r:l.next=a,kt(r,e.memoizedState)||(Ge=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ne.lanes|=s,_r|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ac(t){var e=ht(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);kt(s,e.memoizedState)||(Ge=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function i_(){}function s_(t,e){var n=ne,r=ht(),i=e(),s=!kt(r.memoizedState,i);if(s&&(r.memoizedState=i,Ge=!0),r=r.queue,Ad(l_.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||xe!==null&&xe.memoizedState.tag&1){if(n.flags|=2048,Rs(9,a_.bind(null,n,r,i,e),void 0,null),Se===null)throw Error(k(349));gr&30||o_(n,e,i)}return i}function o_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ne.updateQueue,e===null?(e={lastEffect:null,stores:null},ne.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function a_(t,e,n,r){e.value=n,e.getSnapshot=r,c_(e)&&u_(t)}function l_(t,e,n){return n(function(){c_(e)&&u_(t)})}function c_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!kt(t,n)}catch{return!0}}function u_(t){var e=en(t,1);e!==null&&Et(e,t,1,-1)}function Mf(t){var e=It();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:bs,lastRenderedState:t},e.queue=t,t=t.dispatch=ox.bind(null,ne,t),[e.memoizedState,t]}function Rs(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ne.updateQueue,e===null?(e={lastEffect:null,stores:null},ne.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function d_(){return ht().memoizedState}function Wo(t,e,n,r){var i=It();ne.flags|=t,i.memoizedState=Rs(1|e,n,void 0,r===void 0?null:r)}function il(t,e,n,r){var i=ht();r=r===void 0?null:r;var s=void 0;if(fe!==null){var o=fe.memoizedState;if(s=o.destroy,r!==null&&bd(r,o.deps)){i.memoizedState=Rs(e,n,s,r);return}}ne.flags|=t,i.memoizedState=Rs(1|e,n,s,r)}function jf(t,e){return Wo(8390656,8,t,e)}function Ad(t,e){return il(2048,8,t,e)}function h_(t,e){return il(4,2,t,e)}function f_(t,e){return il(4,4,t,e)}function p_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function m_(t,e,n){return n=n!=null?n.concat([t]):null,il(4,4,p_.bind(null,e,t),n)}function Od(){}function g_(t,e){var n=ht();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&bd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function __(t,e){var n=ht();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&bd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function v_(t,e,n){return gr&21?(kt(n,e)||(n=kg(),ne.lanes|=n,_r|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ge=!0),t.memoizedState=n)}function ix(t,e){var n=V;V=n!==0&&4>n?n:4,t(!0);var r=sc.transition;sc.transition={};try{t(!1),e()}finally{V=n,sc.transition=r}}function y_(){return ht().memoizedState}function sx(t,e,n){var r=Dn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},w_(t))E_(e,n);else if(n=t_(t,e,n,r),n!==null){var i=ze();Et(n,t,r,i),x_(n,e,r)}}function ox(t,e,n){var r=Dn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(w_(t))E_(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,kt(a,o)){var l=e.interleaved;l===null?(i.next=i,Cd(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=t_(t,e,i,r),n!==null&&(i=ze(),Et(n,t,r,i),x_(n,e,r))}}function w_(t){var e=t.alternate;return t===ne||e!==null&&e===ne}function E_(t,e){rs=_a=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function x_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ud(t,n)}}var va={readContext:dt,useCallback:Oe,useContext:Oe,useEffect:Oe,useImperativeHandle:Oe,useInsertionEffect:Oe,useLayoutEffect:Oe,useMemo:Oe,useReducer:Oe,useRef:Oe,useState:Oe,useDebugValue:Oe,useDeferredValue:Oe,useTransition:Oe,useMutableSource:Oe,useSyncExternalStore:Oe,useId:Oe,unstable_isNewReconciler:!1},ax={readContext:dt,useCallback:function(t,e){return It().memoizedState=[t,e===void 0?null:e],t},useContext:dt,useEffect:jf,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Wo(4194308,4,p_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Wo(4194308,4,t,e)},useInsertionEffect:function(t,e){return Wo(4,2,t,e)},useMemo:function(t,e){var n=It();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=It();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=sx.bind(null,ne,t),[r.memoizedState,t]},useRef:function(t){var e=It();return t={current:t},e.memoizedState=t},useState:Mf,useDebugValue:Od,useDeferredValue:function(t){return It().memoizedState=t},useTransition:function(){var t=Mf(!1),e=t[0];return t=ix.bind(null,t[1]),It().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ne,i=It();if(Z){if(n===void 0)throw Error(k(407));n=n()}else{if(n=e(),Se===null)throw Error(k(349));gr&30||o_(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,jf(l_.bind(null,r,s,t),[t]),r.flags|=2048,Rs(9,a_.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=It(),e=Se.identifierPrefix;if(Z){var n=Vt,r=Wt;n=(r&~(1<<32-wt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ns++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=rx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},lx={readContext:dt,useCallback:g_,useContext:dt,useEffect:Ad,useImperativeHandle:m_,useInsertionEffect:h_,useLayoutEffect:f_,useMemo:__,useReducer:oc,useRef:d_,useState:function(){return oc(bs)},useDebugValue:Od,useDeferredValue:function(t){var e=ht();return v_(e,fe.memoizedState,t)},useTransition:function(){var t=oc(bs)[0],e=ht().memoizedState;return[t,e]},useMutableSource:i_,useSyncExternalStore:s_,useId:y_,unstable_isNewReconciler:!1},cx={readContext:dt,useCallback:g_,useContext:dt,useEffect:Ad,useImperativeHandle:m_,useInsertionEffect:h_,useLayoutEffect:f_,useMemo:__,useReducer:ac,useRef:d_,useState:function(){return ac(bs)},useDebugValue:Od,useDeferredValue:function(t){var e=ht();return fe===null?e.memoizedState=t:v_(e,fe.memoizedState,t)},useTransition:function(){var t=ac(bs)[0],e=ht().memoizedState;return[t,e]},useMutableSource:i_,useSyncExternalStore:s_,useId:y_,unstable_isNewReconciler:!1};function pt(t,e){if(t&&t.defaultProps){e=re({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function cu(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:re({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var sl={isMounted:function(t){return(t=t._reactInternals)?Tr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ze(),i=Dn(t),s=Qt(r,i);s.payload=e,n!=null&&(s.callback=n),e=An(t,s,i),e!==null&&(Et(e,t,i,r),zo(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ze(),i=Dn(t),s=Qt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=An(t,s,i),e!==null&&(Et(e,t,i,r),zo(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ze(),r=Dn(t),i=Qt(n,r);i.tag=2,e!=null&&(i.callback=e),e=An(t,i,r),e!==null&&(Et(e,t,r,n),zo(e,t,r))}};function Uf(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!xs(n,r)||!xs(i,s):!0}function k_(t,e,n){var r=!1,i=Bn,s=e.contextType;return typeof s=="object"&&s!==null?s=dt(s):(i=Qe(e)?pr:Me.current,r=e.contextTypes,s=(r=r!=null)?oi(t,i):Bn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=sl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Ff(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&sl.enqueueReplaceState(e,e.state,null)}function uu(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Sd(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=dt(s):(s=Qe(e)?pr:Me.current,i.context=oi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(cu(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&sl.enqueueReplaceState(i,i.state,null),ma(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ui(t,e){try{var n="",r=e;do n+=jw(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function lc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function du(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var ux=typeof WeakMap=="function"?WeakMap:Map;function C_(t,e,n){n=Qt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){wa||(wa=!0,Eu=r),du(t,e)},n}function S_(t,e,n){n=Qt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){du(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){du(t,e),typeof r!="function"&&(On===null?On=new Set([this]):On.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function $f(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new ux;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Cx.bind(null,t,e,n),e.then(t,t))}function zf(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Bf(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Qt(-1,1),e.tag=2,An(n,e,1))),n.lanes|=1),t)}var dx=ln.ReactCurrentOwner,Ge=!1;function Fe(t,e,n,r){e.child=t===null?e_(e,null,n,r):li(e,t.child,n,r)}function Wf(t,e,n,r,i){n=n.render;var s=e.ref;return Jr(e,i),r=Rd(t,e,n,r,s,i),n=Pd(),t!==null&&!Ge?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,tn(t,e,i)):(Z&&n&&vd(e),e.flags|=1,Fe(t,e,r,i),e.child)}function Vf(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!zd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,I_(t,e,s,r,i)):(t=Ko(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:xs,n(o,r)&&t.ref===e.ref)return tn(t,e,i)}return e.flags|=1,t=Ln(s,r),t.ref=e.ref,t.return=e,e.child=t}function I_(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(xs(s,r)&&t.ref===e.ref)if(Ge=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Ge=!0);else return e.lanes=t.lanes,tn(t,e,i)}return hu(t,e,n,r,i)}function T_(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},q(Vr,Je),Je|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,q(Vr,Je),Je|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,q(Vr,Je),Je|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,q(Vr,Je),Je|=r;return Fe(t,e,i,n),e.child}function N_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function hu(t,e,n,r,i){var s=Qe(n)?pr:Me.current;return s=oi(e,s),Jr(e,i),n=Rd(t,e,n,r,s,i),r=Pd(),t!==null&&!Ge?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,tn(t,e,i)):(Z&&r&&vd(e),e.flags|=1,Fe(t,e,n,i),e.child)}function Hf(t,e,n,r,i){if(Qe(n)){var s=!0;ua(e)}else s=!1;if(Jr(e,i),e.stateNode===null)Vo(t,e),k_(e,n,r),uu(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=dt(c):(c=Qe(n)?pr:Me.current,c=oi(e,c));var d=n.getDerivedStateFromProps,u=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";u||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==c)&&Ff(e,o,r,c),mn=!1;var f=e.memoizedState;o.state=f,ma(e,r,o,i),l=e.memoizedState,a!==r||f!==l||qe.current||mn?(typeof d=="function"&&(cu(e,n,d,r),l=e.memoizedState),(a=mn||Uf(e,n,a,r,f,l,c))?(u||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,n_(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:pt(e.type,a),o.props=c,u=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=dt(l):(l=Qe(n)?pr:Me.current,l=oi(e,l));var m=n.getDerivedStateFromProps;(d=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==u||f!==l)&&Ff(e,o,r,l),mn=!1,f=e.memoizedState,o.state=f,ma(e,r,o,i);var g=e.memoizedState;a!==u||f!==g||qe.current||mn?(typeof m=="function"&&(cu(e,n,m,r),g=e.memoizedState),(c=mn||Uf(e,n,c,r,f,g,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=g),o.props=r,o.state=g,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return fu(t,e,n,r,s,i)}function fu(t,e,n,r,i,s){N_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Rf(e,n,!1),tn(t,e,s);r=e.stateNode,dx.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=li(e,t.child,null,s),e.child=li(e,null,a,s)):Fe(t,e,a,s),e.memoizedState=r.state,i&&Rf(e,n,!0),e.child}function b_(t){var e=t.stateNode;e.pendingContext?bf(t,e.pendingContext,e.pendingContext!==e.context):e.context&&bf(t,e.context,!1),Id(t,e.containerInfo)}function Gf(t,e,n,r,i){return ai(),wd(i),e.flags|=256,Fe(t,e,n,r),e.child}var pu={dehydrated:null,treeContext:null,retryLane:0};function mu(t){return{baseLanes:t,cachePool:null,transitions:null}}function R_(t,e,n){var r=e.pendingProps,i=ee.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),q(ee,i&1),t===null)return au(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ll(o,r,0,null),t=dr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=mu(n),e.memoizedState=pu,t):Dd(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return hx(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Ln(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Ln(a,s):(s=dr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?mu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=pu,r}return s=t.child,t=s.sibling,r=Ln(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Dd(t,e){return e=ll({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Io(t,e,n,r){return r!==null&&wd(r),li(e,t.child,null,n),t=Dd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function hx(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=lc(Error(k(422))),Io(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=ll({mode:"visible",children:r.children},i,0,null),s=dr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&li(e,t.child,null,o),e.child.memoizedState=mu(o),e.memoizedState=pu,s);if(!(e.mode&1))return Io(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(k(419)),r=lc(s,r,void 0),Io(t,e,o,r)}if(a=(o&t.childLanes)!==0,Ge||a){if(r=Se,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,en(t,i),Et(r,t,i,-1))}return $d(),r=lc(Error(k(421))),Io(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Sx.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ze=Pn(i.nextSibling),tt=e,Z=!0,gt=null,t!==null&&(ot[at++]=Wt,ot[at++]=Vt,ot[at++]=mr,Wt=t.id,Vt=t.overflow,mr=e),e=Dd(e,r.children),e.flags|=4096,e)}function Kf(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),lu(t.return,e,n)}function cc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function P_(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Fe(t,e,r.children,n),r=ee.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Kf(t,n,e);else if(t.tag===19)Kf(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(q(ee,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&ga(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),cc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&ga(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}cc(e,!0,n,null,s);break;case"together":cc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Vo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function tn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),_r|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(k(153));if(e.child!==null){for(t=e.child,n=Ln(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ln(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function fx(t,e,n){switch(e.tag){case 3:b_(e),ai();break;case 5:r_(e);break;case 1:Qe(e.type)&&ua(e);break;case 4:Id(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;q(fa,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(q(ee,ee.current&1),e.flags|=128,null):n&e.child.childLanes?R_(t,e,n):(q(ee,ee.current&1),t=tn(t,e,n),t!==null?t.sibling:null);q(ee,ee.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return P_(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),q(ee,ee.current),r)break;return null;case 22:case 23:return e.lanes=0,T_(t,e,n)}return tn(t,e,n)}var A_,gu,O_,D_;A_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};gu=function(){};O_=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ar(Pt.current);var s=null;switch(n){case"input":i=Uc(t,i),r=Uc(t,r),s=[];break;case"select":i=re({},i,{value:void 0}),r=re({},r,{value:void 0}),s=[];break;case"textarea":i=zc(t,i),r=zc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=la)}Wc(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ms.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ms.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Q("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};D_=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ui(t,e){if(!Z)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function De(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function px(t,e,n){var r=e.pendingProps;switch(yd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return De(e),null;case 1:return Qe(e.type)&&ca(),De(e),null;case 3:return r=e.stateNode,ci(),X(qe),X(Me),Nd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Co(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,gt!==null&&(Cu(gt),gt=null))),gu(t,e),De(e),null;case 5:Td(e);var i=ar(Ts.current);if(n=e.type,t!==null&&e.stateNode!=null)O_(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(k(166));return De(e),null}if(t=ar(Pt.current),Co(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Tt]=e,r[Ss]=s,t=(e.mode&1)!==0,n){case"dialog":Q("cancel",r),Q("close",r);break;case"iframe":case"object":case"embed":Q("load",r);break;case"video":case"audio":for(i=0;i<qi.length;i++)Q(qi[i],r);break;case"source":Q("error",r);break;case"img":case"image":case"link":Q("error",r),Q("load",r);break;case"details":Q("toggle",r);break;case"input":tf(r,s),Q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Q("invalid",r);break;case"textarea":rf(r,s),Q("invalid",r)}Wc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&ko(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ko(r.textContent,a,t),i=["children",""+a]):ms.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Q("scroll",r)}switch(n){case"input":mo(r),nf(r,s,!0);break;case"textarea":mo(r),sf(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=la)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=lg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Tt]=e,t[Ss]=r,A_(t,e,!1,!1),e.stateNode=t;e:{switch(o=Vc(n,r),n){case"dialog":Q("cancel",t),Q("close",t),i=r;break;case"iframe":case"object":case"embed":Q("load",t),i=r;break;case"video":case"audio":for(i=0;i<qi.length;i++)Q(qi[i],t);i=r;break;case"source":Q("error",t),i=r;break;case"img":case"image":case"link":Q("error",t),Q("load",t),i=r;break;case"details":Q("toggle",t),i=r;break;case"input":tf(t,r),i=Uc(t,r),Q("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=re({},r,{value:void 0}),Q("invalid",t);break;case"textarea":rf(t,r),i=zc(t,r),Q("invalid",t);break;default:i=r}Wc(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?dg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&cg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&gs(t,l):typeof l=="number"&&gs(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ms.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Q("scroll",t):l!=null&&id(t,s,l,o))}switch(n){case"input":mo(t),nf(t,r,!1);break;case"textarea":mo(t),sf(t);break;case"option":r.value!=null&&t.setAttribute("value",""+zn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?qr(t,!!r.multiple,s,!1):r.defaultValue!=null&&qr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=la)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return De(e),null;case 6:if(t&&e.stateNode!=null)D_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(k(166));if(n=ar(Ts.current),ar(Pt.current),Co(e)){if(r=e.stateNode,n=e.memoizedProps,r[Tt]=e,(s=r.nodeValue!==n)&&(t=tt,t!==null))switch(t.tag){case 3:ko(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ko(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Tt]=e,e.stateNode=r}return De(e),null;case 13:if(X(ee),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Z&&Ze!==null&&e.mode&1&&!(e.flags&128))Jg(),ai(),e.flags|=98560,s=!1;else if(s=Co(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(k(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(k(317));s[Tt]=e}else ai(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;De(e),s=!1}else gt!==null&&(Cu(gt),gt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ee.current&1?ge===0&&(ge=3):$d())),e.updateQueue!==null&&(e.flags|=4),De(e),null);case 4:return ci(),gu(t,e),t===null&&ks(e.stateNode.containerInfo),De(e),null;case 10:return kd(e.type._context),De(e),null;case 17:return Qe(e.type)&&ca(),De(e),null;case 19:if(X(ee),s=e.memoizedState,s===null)return De(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ui(s,!1);else{if(ge!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ga(t),o!==null){for(e.flags|=128,Ui(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return q(ee,ee.current&1|2),e.child}t=t.sibling}s.tail!==null&&ce()>di&&(e.flags|=128,r=!0,Ui(s,!1),e.lanes=4194304)}else{if(!r)if(t=ga(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ui(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Z)return De(e),null}else 2*ce()-s.renderingStartTime>di&&n!==1073741824&&(e.flags|=128,r=!0,Ui(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ce(),e.sibling=null,n=ee.current,q(ee,r?n&1|2:n&1),e):(De(e),null);case 22:case 23:return Fd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Je&1073741824&&(De(e),e.subtreeFlags&6&&(e.flags|=8192)):De(e),null;case 24:return null;case 25:return null}throw Error(k(156,e.tag))}function mx(t,e){switch(yd(e),e.tag){case 1:return Qe(e.type)&&ca(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ci(),X(qe),X(Me),Nd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Td(e),null;case 13:if(X(ee),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(k(340));ai()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return X(ee),null;case 4:return ci(),null;case 10:return kd(e.type._context),null;case 22:case 23:return Fd(),null;case 24:return null;default:return null}}var To=!1,Le=!1,gx=typeof WeakSet=="function"?WeakSet:Set,N=null;function Wr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ie(t,e,r)}else n.current=null}function _u(t,e,n){try{n()}catch(r){ie(t,e,r)}}var qf=!1;function _x(t,e){if(eu=sa,t=Fg(),_d(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,d=0,u=t,f=null;t:for(;;){for(var m;u!==n||i!==0&&u.nodeType!==3||(a=o+i),u!==s||r!==0&&u.nodeType!==3||(l=o+r),u.nodeType===3&&(o+=u.nodeValue.length),(m=u.firstChild)!==null;)f=u,u=m;for(;;){if(u===t)break t;if(f===n&&++c===i&&(a=o),f===s&&++d===r&&(l=o),(m=u.nextSibling)!==null)break;u=f,f=u.parentNode}u=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(tu={focusedElem:t,selectionRange:n},sa=!1,N=e;N!==null;)if(e=N,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,N=t;else for(;N!==null;){e=N;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var y=g.memoizedProps,x=g.memoizedState,_=e.stateNode,p=_.getSnapshotBeforeUpdate(e.elementType===e.type?y:pt(e.type,y),x);_.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(w){ie(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,N=t;break}N=e.return}return g=qf,qf=!1,g}function is(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&_u(e,n,s)}i=i.next}while(i!==r)}}function ol(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function vu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function L_(t){var e=t.alternate;e!==null&&(t.alternate=null,L_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Tt],delete e[Ss],delete e[iu],delete e[ZE],delete e[ex])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function M_(t){return t.tag===5||t.tag===3||t.tag===4}function Qf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||M_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function yu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=la));else if(r!==4&&(t=t.child,t!==null))for(yu(t,e,n),t=t.sibling;t!==null;)yu(t,e,n),t=t.sibling}function wu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(wu(t,e,n),t=t.sibling;t!==null;)wu(t,e,n),t=t.sibling}var Ne=null,mt=!1;function hn(t,e,n){for(n=n.child;n!==null;)j_(t,e,n),n=n.sibling}function j_(t,e,n){if(Rt&&typeof Rt.onCommitFiberUnmount=="function")try{Rt.onCommitFiberUnmount(Ja,n)}catch{}switch(n.tag){case 5:Le||Wr(n,e);case 6:var r=Ne,i=mt;Ne=null,hn(t,e,n),Ne=r,mt=i,Ne!==null&&(mt?(t=Ne,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ne.removeChild(n.stateNode));break;case 18:Ne!==null&&(mt?(t=Ne,n=n.stateNode,t.nodeType===8?nc(t.parentNode,n):t.nodeType===1&&nc(t,n),ws(t)):nc(Ne,n.stateNode));break;case 4:r=Ne,i=mt,Ne=n.stateNode.containerInfo,mt=!0,hn(t,e,n),Ne=r,mt=i;break;case 0:case 11:case 14:case 15:if(!Le&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&_u(n,e,o),i=i.next}while(i!==r)}hn(t,e,n);break;case 1:if(!Le&&(Wr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ie(n,e,a)}hn(t,e,n);break;case 21:hn(t,e,n);break;case 22:n.mode&1?(Le=(r=Le)||n.memoizedState!==null,hn(t,e,n),Le=r):hn(t,e,n);break;default:hn(t,e,n)}}function Yf(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new gx),e.forEach(function(r){var i=Ix.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function ft(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ne=a.stateNode,mt=!1;break e;case 3:Ne=a.stateNode.containerInfo,mt=!0;break e;case 4:Ne=a.stateNode.containerInfo,mt=!0;break e}a=a.return}if(Ne===null)throw Error(k(160));j_(s,o,i),Ne=null,mt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){ie(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)U_(e,t),e=e.sibling}function U_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ft(e,t),St(t),r&4){try{is(3,t,t.return),ol(3,t)}catch(y){ie(t,t.return,y)}try{is(5,t,t.return)}catch(y){ie(t,t.return,y)}}break;case 1:ft(e,t),St(t),r&512&&n!==null&&Wr(n,n.return);break;case 5:if(ft(e,t),St(t),r&512&&n!==null&&Wr(n,n.return),t.flags&32){var i=t.stateNode;try{gs(i,"")}catch(y){ie(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&og(i,s),Vc(a,o);var c=Vc(a,s);for(o=0;o<l.length;o+=2){var d=l[o],u=l[o+1];d==="style"?dg(i,u):d==="dangerouslySetInnerHTML"?cg(i,u):d==="children"?gs(i,u):id(i,d,u,c)}switch(a){case"input":Fc(i,s);break;case"textarea":ag(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?qr(i,!!s.multiple,m,!1):f!==!!s.multiple&&(s.defaultValue!=null?qr(i,!!s.multiple,s.defaultValue,!0):qr(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ss]=s}catch(y){ie(t,t.return,y)}}break;case 6:if(ft(e,t),St(t),r&4){if(t.stateNode===null)throw Error(k(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(y){ie(t,t.return,y)}}break;case 3:if(ft(e,t),St(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ws(e.containerInfo)}catch(y){ie(t,t.return,y)}break;case 4:ft(e,t),St(t);break;case 13:ft(e,t),St(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(jd=ce())),r&4&&Yf(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Le=(c=Le)||d,ft(e,t),Le=c):ft(e,t),St(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(N=t,d=t.child;d!==null;){for(u=N=d;N!==null;){switch(f=N,m=f.child,f.tag){case 0:case 11:case 14:case 15:is(4,f,f.return);break;case 1:Wr(f,f.return);var g=f.stateNode;if(typeof g.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(y){ie(r,n,y)}}break;case 5:Wr(f,f.return);break;case 22:if(f.memoizedState!==null){Jf(u);continue}}m!==null?(m.return=f,N=m):Jf(u)}d=d.sibling}e:for(d=null,u=t;;){if(u.tag===5){if(d===null){d=u;try{i=u.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=u.stateNode,l=u.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=ug("display",o))}catch(y){ie(t,t.return,y)}}}else if(u.tag===6){if(d===null)try{u.stateNode.nodeValue=c?"":u.memoizedProps}catch(y){ie(t,t.return,y)}}else if((u.tag!==22&&u.tag!==23||u.memoizedState===null||u===t)&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===t)break e;for(;u.sibling===null;){if(u.return===null||u.return===t)break e;d===u&&(d=null),u=u.return}d===u&&(d=null),u.sibling.return=u.return,u=u.sibling}}break;case 19:ft(e,t),St(t),r&4&&Yf(t);break;case 21:break;default:ft(e,t),St(t)}}function St(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(M_(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(gs(i,""),r.flags&=-33);var s=Qf(t);wu(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Qf(t);yu(t,a,o);break;default:throw Error(k(161))}}catch(l){ie(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function vx(t,e,n){N=t,F_(t)}function F_(t,e,n){for(var r=(t.mode&1)!==0;N!==null;){var i=N,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||To;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Le;a=To;var c=Le;if(To=o,(Le=l)&&!c)for(N=i;N!==null;)o=N,l=o.child,o.tag===22&&o.memoizedState!==null?Zf(i):l!==null?(l.return=o,N=l):Zf(i);for(;s!==null;)N=s,F_(s),s=s.sibling;N=i,To=a,Le=c}Xf(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,N=s):Xf(t)}}function Xf(t){for(;N!==null;){var e=N;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Le||ol(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Le)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:pt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Lf(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Lf(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var u=d.dehydrated;u!==null&&ws(u)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}Le||e.flags&512&&vu(e)}catch(f){ie(e,e.return,f)}}if(e===t){N=null;break}if(n=e.sibling,n!==null){n.return=e.return,N=n;break}N=e.return}}function Jf(t){for(;N!==null;){var e=N;if(e===t){N=null;break}var n=e.sibling;if(n!==null){n.return=e.return,N=n;break}N=e.return}}function Zf(t){for(;N!==null;){var e=N;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ol(4,e)}catch(l){ie(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){ie(e,i,l)}}var s=e.return;try{vu(e)}catch(l){ie(e,s,l)}break;case 5:var o=e.return;try{vu(e)}catch(l){ie(e,o,l)}}}catch(l){ie(e,e.return,l)}if(e===t){N=null;break}var a=e.sibling;if(a!==null){a.return=e.return,N=a;break}N=e.return}}var yx=Math.ceil,ya=ln.ReactCurrentDispatcher,Ld=ln.ReactCurrentOwner,ut=ln.ReactCurrentBatchConfig,$=0,Se=null,he=null,Re=0,Je=0,Vr=qn(0),ge=0,Ps=null,_r=0,al=0,Md=0,ss=null,He=null,jd=0,di=1/0,$t=null,wa=!1,Eu=null,On=null,No=!1,Sn=null,Ea=0,os=0,xu=null,Ho=-1,Go=0;function ze(){return $&6?ce():Ho!==-1?Ho:Ho=ce()}function Dn(t){return t.mode&1?$&2&&Re!==0?Re&-Re:nx.transition!==null?(Go===0&&(Go=kg()),Go):(t=V,t!==0||(t=window.event,t=t===void 0?16:Rg(t.type)),t):1}function Et(t,e,n,r){if(50<os)throw os=0,xu=null,Error(k(185));qs(t,n,r),(!($&2)||t!==Se)&&(t===Se&&(!($&2)&&(al|=n),ge===4&&_n(t,Re)),Ye(t,r),n===1&&$===0&&!(e.mode&1)&&(di=ce()+500,rl&&Qn()))}function Ye(t,e){var n=t.callbackNode;nE(t,e);var r=ia(t,t===Se?Re:0);if(r===0)n!==null&&lf(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&lf(n),e===1)t.tag===0?tx(ep.bind(null,t)):Qg(ep.bind(null,t)),XE(function(){!($&6)&&Qn()}),n=null;else{switch(Cg(r)){case 1:n=cd;break;case 4:n=Eg;break;case 16:n=ra;break;case 536870912:n=xg;break;default:n=ra}n=K_(n,$_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function $_(t,e){if(Ho=-1,Go=0,$&6)throw Error(k(327));var n=t.callbackNode;if(Zr()&&t.callbackNode!==n)return null;var r=ia(t,t===Se?Re:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=xa(t,r);else{e=r;var i=$;$|=2;var s=B_();(Se!==t||Re!==e)&&($t=null,di=ce()+500,ur(t,e));do try{xx();break}catch(a){z_(t,a)}while(!0);xd(),ya.current=s,$=i,he!==null?e=0:(Se=null,Re=0,e=ge)}if(e!==0){if(e===2&&(i=Qc(t),i!==0&&(r=i,e=ku(t,i))),e===1)throw n=Ps,ur(t,0),_n(t,r),Ye(t,ce()),n;if(e===6)_n(t,r);else{if(i=t.current.alternate,!(r&30)&&!wx(i)&&(e=xa(t,r),e===2&&(s=Qc(t),s!==0&&(r=s,e=ku(t,s))),e===1))throw n=Ps,ur(t,0),_n(t,r),Ye(t,ce()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(k(345));case 2:nr(t,He,$t);break;case 3:if(_n(t,r),(r&130023424)===r&&(e=jd+500-ce(),10<e)){if(ia(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ze(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=ru(nr.bind(null,t,He,$t),e);break}nr(t,He,$t);break;case 4:if(_n(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-wt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*yx(r/1960))-r,10<r){t.timeoutHandle=ru(nr.bind(null,t,He,$t),r);break}nr(t,He,$t);break;case 5:nr(t,He,$t);break;default:throw Error(k(329))}}}return Ye(t,ce()),t.callbackNode===n?$_.bind(null,t):null}function ku(t,e){var n=ss;return t.current.memoizedState.isDehydrated&&(ur(t,e).flags|=256),t=xa(t,e),t!==2&&(e=He,He=n,e!==null&&Cu(e)),t}function Cu(t){He===null?He=t:He.push.apply(He,t)}function wx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!kt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function _n(t,e){for(e&=~Md,e&=~al,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-wt(e),r=1<<n;t[n]=-1,e&=~r}}function ep(t){if($&6)throw Error(k(327));Zr();var e=ia(t,0);if(!(e&1))return Ye(t,ce()),null;var n=xa(t,e);if(t.tag!==0&&n===2){var r=Qc(t);r!==0&&(e=r,n=ku(t,r))}if(n===1)throw n=Ps,ur(t,0),_n(t,e),Ye(t,ce()),n;if(n===6)throw Error(k(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,nr(t,He,$t),Ye(t,ce()),null}function Ud(t,e){var n=$;$|=1;try{return t(e)}finally{$=n,$===0&&(di=ce()+500,rl&&Qn())}}function vr(t){Sn!==null&&Sn.tag===0&&!($&6)&&Zr();var e=$;$|=1;var n=ut.transition,r=V;try{if(ut.transition=null,V=1,t)return t()}finally{V=r,ut.transition=n,$=e,!($&6)&&Qn()}}function Fd(){Je=Vr.current,X(Vr)}function ur(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,YE(n)),he!==null)for(n=he.return;n!==null;){var r=n;switch(yd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ca();break;case 3:ci(),X(qe),X(Me),Nd();break;case 5:Td(r);break;case 4:ci();break;case 13:X(ee);break;case 19:X(ee);break;case 10:kd(r.type._context);break;case 22:case 23:Fd()}n=n.return}if(Se=t,he=t=Ln(t.current,null),Re=Je=e,ge=0,Ps=null,Md=al=_r=0,He=ss=null,or!==null){for(e=0;e<or.length;e++)if(n=or[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}or=null}return t}function z_(t,e){do{var n=he;try{if(xd(),Bo.current=va,_a){for(var r=ne.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}_a=!1}if(gr=0,xe=fe=ne=null,rs=!1,Ns=0,Ld.current=null,n===null||n.return===null){ge=1,Ps=e,he=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Re,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,u=d.tag;if(!(d.mode&1)&&(u===0||u===11||u===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=zf(o);if(m!==null){m.flags&=-257,Bf(m,o,a,s,e),m.mode&1&&$f(s,c,e),e=m,l=c;var g=e.updateQueue;if(g===null){var y=new Set;y.add(l),e.updateQueue=y}else g.add(l);break e}else{if(!(e&1)){$f(s,c,e),$d();break e}l=Error(k(426))}}else if(Z&&a.mode&1){var x=zf(o);if(x!==null){!(x.flags&65536)&&(x.flags|=256),Bf(x,o,a,s,e),wd(ui(l,a));break e}}s=l=ui(l,a),ge!==4&&(ge=2),ss===null?ss=[s]:ss.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var _=C_(s,l,e);Df(s,_);break e;case 1:a=l;var p=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(On===null||!On.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=S_(s,a,e);Df(s,w);break e}}s=s.return}while(s!==null)}V_(n)}catch(C){e=C,he===n&&n!==null&&(he=n=n.return);continue}break}while(!0)}function B_(){var t=ya.current;return ya.current=va,t===null?va:t}function $d(){(ge===0||ge===3||ge===2)&&(ge=4),Se===null||!(_r&268435455)&&!(al&268435455)||_n(Se,Re)}function xa(t,e){var n=$;$|=2;var r=B_();(Se!==t||Re!==e)&&($t=null,ur(t,e));do try{Ex();break}catch(i){z_(t,i)}while(!0);if(xd(),$=n,ya.current=r,he!==null)throw Error(k(261));return Se=null,Re=0,ge}function Ex(){for(;he!==null;)W_(he)}function xx(){for(;he!==null&&!Kw();)W_(he)}function W_(t){var e=G_(t.alternate,t,Je);t.memoizedProps=t.pendingProps,e===null?V_(t):he=e,Ld.current=null}function V_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=mx(n,e),n!==null){n.flags&=32767,he=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ge=6,he=null;return}}else if(n=px(n,e,Je),n!==null){he=n;return}if(e=e.sibling,e!==null){he=e;return}he=e=t}while(e!==null);ge===0&&(ge=5)}function nr(t,e,n){var r=V,i=ut.transition;try{ut.transition=null,V=1,kx(t,e,n,r)}finally{ut.transition=i,V=r}return null}function kx(t,e,n,r){do Zr();while(Sn!==null);if($&6)throw Error(k(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(k(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(rE(t,s),t===Se&&(he=Se=null,Re=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||No||(No=!0,K_(ra,function(){return Zr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=ut.transition,ut.transition=null;var o=V;V=1;var a=$;$|=4,Ld.current=null,_x(t,n),U_(n,t),WE(tu),sa=!!eu,tu=eu=null,t.current=n,vx(n),qw(),$=a,V=o,ut.transition=s}else t.current=n;if(No&&(No=!1,Sn=t,Ea=i),s=t.pendingLanes,s===0&&(On=null),Xw(n.stateNode),Ye(t,ce()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(wa)throw wa=!1,t=Eu,Eu=null,t;return Ea&1&&t.tag!==0&&Zr(),s=t.pendingLanes,s&1?t===xu?os++:(os=0,xu=t):os=0,Qn(),null}function Zr(){if(Sn!==null){var t=Cg(Ea),e=ut.transition,n=V;try{if(ut.transition=null,V=16>t?16:t,Sn===null)var r=!1;else{if(t=Sn,Sn=null,Ea=0,$&6)throw Error(k(331));var i=$;for($|=4,N=t.current;N!==null;){var s=N,o=s.child;if(N.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(N=c;N!==null;){var d=N;switch(d.tag){case 0:case 11:case 15:is(8,d,s)}var u=d.child;if(u!==null)u.return=d,N=u;else for(;N!==null;){d=N;var f=d.sibling,m=d.return;if(L_(d),d===c){N=null;break}if(f!==null){f.return=m,N=f;break}N=m}}}var g=s.alternate;if(g!==null){var y=g.child;if(y!==null){g.child=null;do{var x=y.sibling;y.sibling=null,y=x}while(y!==null)}}N=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,N=o;else e:for(;N!==null;){if(s=N,s.flags&2048)switch(s.tag){case 0:case 11:case 15:is(9,s,s.return)}var _=s.sibling;if(_!==null){_.return=s.return,N=_;break e}N=s.return}}var p=t.current;for(N=p;N!==null;){o=N;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,N=v;else e:for(o=p;N!==null;){if(a=N,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ol(9,a)}}catch(C){ie(a,a.return,C)}if(a===o){N=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,N=w;break e}N=a.return}}if($=i,Qn(),Rt&&typeof Rt.onPostCommitFiberRoot=="function")try{Rt.onPostCommitFiberRoot(Ja,t)}catch{}r=!0}return r}finally{V=n,ut.transition=e}}return!1}function tp(t,e,n){e=ui(n,e),e=C_(t,e,1),t=An(t,e,1),e=ze(),t!==null&&(qs(t,1,e),Ye(t,e))}function ie(t,e,n){if(t.tag===3)tp(t,t,n);else for(;e!==null;){if(e.tag===3){tp(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(On===null||!On.has(r))){t=ui(n,t),t=S_(e,t,1),e=An(e,t,1),t=ze(),e!==null&&(qs(e,1,t),Ye(e,t));break}}e=e.return}}function Cx(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ze(),t.pingedLanes|=t.suspendedLanes&n,Se===t&&(Re&n)===n&&(ge===4||ge===3&&(Re&130023424)===Re&&500>ce()-jd?ur(t,0):Md|=n),Ye(t,e)}function H_(t,e){e===0&&(t.mode&1?(e=vo,vo<<=1,!(vo&130023424)&&(vo=4194304)):e=1);var n=ze();t=en(t,e),t!==null&&(qs(t,e,n),Ye(t,n))}function Sx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),H_(t,n)}function Ix(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(e),H_(t,n)}var G_;G_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||qe.current)Ge=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ge=!1,fx(t,e,n);Ge=!!(t.flags&131072)}else Ge=!1,Z&&e.flags&1048576&&Yg(e,ha,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Vo(t,e),t=e.pendingProps;var i=oi(e,Me.current);Jr(e,n),i=Rd(null,e,r,t,i,n);var s=Pd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Qe(r)?(s=!0,ua(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Sd(e),i.updater=sl,e.stateNode=i,i._reactInternals=e,uu(e,r,t,n),e=fu(null,e,r,!0,s,n)):(e.tag=0,Z&&s&&vd(e),Fe(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Vo(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Nx(r),t=pt(r,t),i){case 0:e=hu(null,e,r,t,n);break e;case 1:e=Hf(null,e,r,t,n);break e;case 11:e=Wf(null,e,r,t,n);break e;case 14:e=Vf(null,e,r,pt(r.type,t),n);break e}throw Error(k(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:pt(r,i),hu(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:pt(r,i),Hf(t,e,r,i,n);case 3:e:{if(b_(e),t===null)throw Error(k(387));r=e.pendingProps,s=e.memoizedState,i=s.element,n_(t,e),ma(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ui(Error(k(423)),e),e=Gf(t,e,r,n,i);break e}else if(r!==i){i=ui(Error(k(424)),e),e=Gf(t,e,r,n,i);break e}else for(Ze=Pn(e.stateNode.containerInfo.firstChild),tt=e,Z=!0,gt=null,n=e_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ai(),r===i){e=tn(t,e,n);break e}Fe(t,e,r,n)}e=e.child}return e;case 5:return r_(e),t===null&&au(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,nu(r,i)?o=null:s!==null&&nu(r,s)&&(e.flags|=32),N_(t,e),Fe(t,e,o,n),e.child;case 6:return t===null&&au(e),null;case 13:return R_(t,e,n);case 4:return Id(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=li(e,null,r,n):Fe(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:pt(r,i),Wf(t,e,r,i,n);case 7:return Fe(t,e,e.pendingProps,n),e.child;case 8:return Fe(t,e,e.pendingProps.children,n),e.child;case 12:return Fe(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,q(fa,r._currentValue),r._currentValue=o,s!==null)if(kt(s.value,o)){if(s.children===i.children&&!qe.current){e=tn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Qt(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),lu(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(k(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),lu(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Fe(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Jr(e,n),i=dt(i),r=r(i),e.flags|=1,Fe(t,e,r,n),e.child;case 14:return r=e.type,i=pt(r,e.pendingProps),i=pt(r.type,i),Vf(t,e,r,i,n);case 15:return I_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:pt(r,i),Vo(t,e),e.tag=1,Qe(r)?(t=!0,ua(e)):t=!1,Jr(e,n),k_(e,r,i),uu(e,r,i,n),fu(null,e,r,!0,t,n);case 19:return P_(t,e,n);case 22:return T_(t,e,n)}throw Error(k(156,e.tag))};function K_(t,e){return wg(t,e)}function Tx(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function lt(t,e,n,r){return new Tx(t,e,n,r)}function zd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Nx(t){if(typeof t=="function")return zd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===od)return 11;if(t===ad)return 14}return 2}function Ln(t,e){var n=t.alternate;return n===null?(n=lt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ko(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")zd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Dr:return dr(n.children,i,s,e);case sd:o=8,i|=8;break;case Dc:return t=lt(12,n,e,i|2),t.elementType=Dc,t.lanes=s,t;case Lc:return t=lt(13,n,e,i),t.elementType=Lc,t.lanes=s,t;case Mc:return t=lt(19,n,e,i),t.elementType=Mc,t.lanes=s,t;case rg:return ll(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case tg:o=10;break e;case ng:o=9;break e;case od:o=11;break e;case ad:o=14;break e;case pn:o=16,r=null;break e}throw Error(k(130,t==null?t:typeof t,""))}return e=lt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function dr(t,e,n,r){return t=lt(7,t,r,e),t.lanes=n,t}function ll(t,e,n,r){return t=lt(22,t,r,e),t.elementType=rg,t.lanes=n,t.stateNode={isHidden:!1},t}function uc(t,e,n){return t=lt(6,t,null,e),t.lanes=n,t}function dc(t,e,n){return e=lt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function bx(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Hl(0),this.expirationTimes=Hl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Hl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Bd(t,e,n,r,i,s,o,a,l){return t=new bx(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=lt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Sd(s),t}function Rx(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Or,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function q_(t){if(!t)return Bn;t=t._reactInternals;e:{if(Tr(t)!==t||t.tag!==1)throw Error(k(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Qe(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(k(171))}if(t.tag===1){var n=t.type;if(Qe(n))return qg(t,n,e)}return e}function Q_(t,e,n,r,i,s,o,a,l){return t=Bd(n,r,!0,t,i,s,o,a,l),t.context=q_(null),n=t.current,r=ze(),i=Dn(n),s=Qt(r,i),s.callback=e??null,An(n,s,i),t.current.lanes=i,qs(t,i,r),Ye(t,r),t}function cl(t,e,n,r){var i=e.current,s=ze(),o=Dn(i);return n=q_(n),e.context===null?e.context=n:e.pendingContext=n,e=Qt(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=An(i,e,o),t!==null&&(Et(t,i,o,s),zo(t,i,o)),o}function ka(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function np(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Wd(t,e){np(t,e),(t=t.alternate)&&np(t,e)}function Px(){return null}var Y_=typeof reportError=="function"?reportError:function(t){console.error(t)};function Vd(t){this._internalRoot=t}ul.prototype.render=Vd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(k(409));cl(t,e,null,null)};ul.prototype.unmount=Vd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;vr(function(){cl(null,t,null,null)}),e[Zt]=null}};function ul(t){this._internalRoot=t}ul.prototype.unstable_scheduleHydration=function(t){if(t){var e=Tg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<gn.length&&e!==0&&e<gn[n].priority;n++);gn.splice(n,0,t),n===0&&bg(t)}};function Hd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function dl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function rp(){}function Ax(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=ka(o);s.call(c)}}var o=Q_(e,r,t,0,null,!1,!1,"",rp);return t._reactRootContainer=o,t[Zt]=o.current,ks(t.nodeType===8?t.parentNode:t),vr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=ka(l);a.call(c)}}var l=Bd(t,0,!1,null,null,!1,!1,"",rp);return t._reactRootContainer=l,t[Zt]=l.current,ks(t.nodeType===8?t.parentNode:t),vr(function(){cl(e,l,n,r)}),l}function hl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=ka(o);a.call(l)}}cl(e,o,t,i)}else o=Ax(n,e,t,i,r);return ka(o)}Sg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ki(e.pendingLanes);n!==0&&(ud(e,n|1),Ye(e,ce()),!($&6)&&(di=ce()+500,Qn()))}break;case 13:vr(function(){var r=en(t,1);if(r!==null){var i=ze();Et(r,t,1,i)}}),Wd(t,1)}};dd=function(t){if(t.tag===13){var e=en(t,134217728);if(e!==null){var n=ze();Et(e,t,134217728,n)}Wd(t,134217728)}};Ig=function(t){if(t.tag===13){var e=Dn(t),n=en(t,e);if(n!==null){var r=ze();Et(n,t,e,r)}Wd(t,e)}};Tg=function(){return V};Ng=function(t,e){var n=V;try{return V=t,e()}finally{V=n}};Gc=function(t,e,n){switch(e){case"input":if(Fc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=nl(r);if(!i)throw Error(k(90));sg(r),Fc(r,i)}}}break;case"textarea":ag(t,n);break;case"select":e=n.value,e!=null&&qr(t,!!n.multiple,e,!1)}};pg=Ud;mg=vr;var Ox={usingClientEntryPoint:!1,Events:[Ys,Ur,nl,hg,fg,Ud]},Fi={findFiberByHostInstance:sr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Dx={bundleType:Fi.bundleType,version:Fi.version,rendererPackageName:Fi.rendererPackageName,rendererConfig:Fi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ln.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=vg(t),t===null?null:t.stateNode},findFiberByHostInstance:Fi.findFiberByHostInstance||Px,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bo.isDisabled&&bo.supportsFiber)try{Ja=bo.inject(Dx),Rt=bo}catch{}}rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ox;rt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hd(e))throw Error(k(200));return Rx(t,e,null,n)};rt.createRoot=function(t,e){if(!Hd(t))throw Error(k(299));var n=!1,r="",i=Y_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Bd(t,1,!1,null,null,n,!1,r,i),t[Zt]=e.current,ks(t.nodeType===8?t.parentNode:t),new Vd(e)};rt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(k(188)):(t=Object.keys(t).join(","),Error(k(268,t)));return t=vg(e),t=t===null?null:t.stateNode,t};rt.flushSync=function(t){return vr(t)};rt.hydrate=function(t,e,n){if(!dl(e))throw Error(k(200));return hl(null,t,e,!0,n)};rt.hydrateRoot=function(t,e,n){if(!Hd(t))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Y_;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Q_(e,null,t,1,n??null,i,!1,s,o),t[Zt]=e.current,ks(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new ul(e)};rt.render=function(t,e,n){if(!dl(e))throw Error(k(200));return hl(null,t,e,!1,n)};rt.unmountComponentAtNode=function(t){if(!dl(t))throw Error(k(40));return t._reactRootContainer?(vr(function(){hl(null,null,t,!1,function(){t._reactRootContainer=null,t[Zt]=null})}),!0):!1};rt.unstable_batchedUpdates=Ud;rt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!dl(n))throw Error(k(200));if(t==null||t._reactInternals===void 0)throw Error(k(38));return hl(t,e,n,!1,r)};rt.version="18.3.1-next-f1338f8080-20240426";function X_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(X_)}catch(t){console.error(t)}}X_(),Xm.exports=rt;var Lx=Xm.exports,ip=Lx;Ac.createRoot=ip.createRoot,Ac.hydrateRoot=ip.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function As(){return As=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},As.apply(this,arguments)}var In;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(In||(In={}));const sp="popstate";function Mx(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Su("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Z_(i)}return Ux(e,n,null,t)}function ye(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function J_(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function jx(){return Math.random().toString(36).substr(2,8)}function op(t,e){return{usr:t.state,key:t.key,idx:e}}function Su(t,e,n,r){return n===void 0&&(n=null),As({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Ci(e):e,{state:n,key:e&&e.key||r||jx()})}function Z_(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Ci(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function Ux(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=In.Pop,l=null,c=d();c==null&&(c=0,o.replaceState(As({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function u(){a=In.Pop;let x=d(),_=x==null?null:x-c;c=x,l&&l({action:a,location:y.location,delta:_})}function f(x,_){a=In.Push;let p=Su(y.location,x,_);c=d()+1;let v=op(p,c),w=y.createHref(p);try{o.pushState(v,"",w)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;i.location.assign(w)}s&&l&&l({action:a,location:y.location,delta:1})}function m(x,_){a=In.Replace;let p=Su(y.location,x,_);c=d();let v=op(p,c),w=y.createHref(p);o.replaceState(v,"",w),s&&l&&l({action:a,location:y.location,delta:0})}function g(x){let _=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof x=="string"?x:Z_(x);return p=p.replace(/ $/,"%20"),ye(_,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,_)}let y={get action(){return a},get location(){return t(i,o)},listen(x){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(sp,u),l=x,()=>{i.removeEventListener(sp,u),l=null}},createHref(x){return e(i,x)},createURL:g,encodeLocation(x){let _=g(x);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:f,replace:m,go(x){return o.go(x)}};return y}var ap;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(ap||(ap={}));function Fx(t,e,n){return n===void 0&&(n="/"),$x(t,e,n)}function $x(t,e,n,r){let i=typeof e=="string"?Ci(e):e,s=nv(i.pathname||"/",n);if(s==null)return null;let o=ev(t);zx(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let c=Zx(s);a=Yx(o[l],c)}return a}function ev(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(ye(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=hr([r,l.relativePath]),d=n.concat(l);s.children&&s.children.length>0&&(ye(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),ev(s.children,e,d,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:qx(c,s.index),routesMeta:d})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of tv(s.path))i(s,o,l)}),e}function tv(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=tv(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function zx(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:Qx(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Bx=/^:[\w-]+$/,Wx=3,Vx=2,Hx=1,Gx=10,Kx=-2,lp=t=>t==="*";function qx(t,e){let n=t.split("/"),r=n.length;return n.some(lp)&&(r+=Kx),e&&(r+=Vx),n.filter(i=>!lp(i)).reduce((i,s)=>i+(Bx.test(s)?Wx:s===""?Hx:Gx),r)}function Qx(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function Yx(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let l=r[a],c=a===r.length-1,d=s==="/"?e:e.slice(s.length)||"/",u=Xx({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},d),f=l.route;if(!u)return null;Object.assign(i,u.params),o.push({params:i,pathname:hr([s,u.pathname]),pathnameBase:sk(hr([s,u.pathnameBase])),route:f}),u.pathnameBase!=="/"&&(s=hr([s,u.pathnameBase]))}return o}function Xx(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=Jx(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,d,u)=>{let{paramName:f,isOptional:m}=d;if(f==="*"){let y=a[u]||"";o=s.slice(0,s.length-y.length).replace(/(.)\/+$/,"$1")}const g=a[u];return m&&!g?c[f]=void 0:c[f]=(g||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function Jx(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),J_(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function Zx(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return J_(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function nv(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function ek(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Ci(t):t;return{pathname:n?n.startsWith("/")?n:tk(n,e):e,search:ok(r),hash:ak(i)}}function tk(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function hc(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function nk(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function rk(t,e){let n=nk(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function ik(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Ci(t):(i=As({},t),ye(!i.pathname||!i.pathname.includes("?"),hc("?","pathname","search",i)),ye(!i.pathname||!i.pathname.includes("#"),hc("#","pathname","hash",i)),ye(!i.search||!i.search.includes("#"),hc("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let u=e.length-1;if(!r&&o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),u-=1;i.pathname=f.join("/")}a=u>=0?e[u]:"/"}let l=ek(i,a),c=o&&o!=="/"&&o.endsWith("/"),d=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||d)&&(l.pathname+="/"),l}const hr=t=>t.join("/").replace(/\/\/+/g,"/"),sk=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),ok=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,ak=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function lk(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const rv=["post","put","patch","delete"];new Set(rv);const ck=["get",...rv];new Set(ck);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Os(){return Os=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Os.apply(this,arguments)}const Gd=E.createContext(null),uk=E.createContext(null),fl=E.createContext(null),pl=E.createContext(null),Si=E.createContext({outlet:null,matches:[],isDataRoute:!1}),iv=E.createContext(null);function ml(){return E.useContext(pl)!=null}function sv(){return ml()||ye(!1),E.useContext(pl).location}function ov(t){E.useContext(fl).static||E.useLayoutEffect(t)}function av(){let{isDataRoute:t}=E.useContext(Si);return t?kk():dk()}function dk(){ml()||ye(!1);let t=E.useContext(Gd),{basename:e,future:n,navigator:r}=E.useContext(fl),{matches:i}=E.useContext(Si),{pathname:s}=sv(),o=JSON.stringify(rk(i,n.v7_relativeSplatPath)),a=E.useRef(!1);return ov(()=>{a.current=!0}),E.useCallback(function(c,d){if(d===void 0&&(d={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let u=ik(c,JSON.parse(o),s,d.relative==="path");t==null&&e!=="/"&&(u.pathname=u.pathname==="/"?e:hr([e,u.pathname])),(d.replace?r.replace:r.push)(u,d.state,d)},[e,r,o,s,t])}function hk(t,e){return fk(t,e)}function fk(t,e,n,r){ml()||ye(!1);let{navigator:i}=E.useContext(fl),{matches:s}=E.useContext(Si),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let c=sv(),d;if(e){var u;let x=typeof e=="string"?Ci(e):e;l==="/"||(u=x.pathname)!=null&&u.startsWith(l)||ye(!1),d=x}else d=c;let f=d.pathname||"/",m=f;if(l!=="/"){let x=l.replace(/^\//,"").split("/");m="/"+f.replace(/^\//,"").split("/").slice(x.length).join("/")}let g=Fx(t,{pathname:m}),y=vk(g&&g.map(x=>Object.assign({},x,{params:Object.assign({},a,x.params),pathname:hr([l,i.encodeLocation?i.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?l:hr([l,i.encodeLocation?i.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),s,n,r);return e&&y?E.createElement(pl.Provider,{value:{location:Os({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:In.Pop}},y):y}function pk(){let t=xk(),e=lk(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},e),n?E.createElement("pre",{style:i},n):null,null)}const mk=E.createElement(pk,null);class gk extends E.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?E.createElement(Si.Provider,{value:this.props.routeContext},E.createElement(iv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function _k(t){let{routeContext:e,match:n,children:r}=t,i=E.useContext(Gd);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),E.createElement(Si.Provider,{value:e},r)}function vk(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let d=o.findIndex(u=>u.route.id&&(a==null?void 0:a[u.route.id])!==void 0);d>=0||ye(!1),o=o.slice(0,Math.min(o.length,d+1))}let l=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let u=o[d];if((u.route.HydrateFallback||u.route.hydrateFallbackElement)&&(c=d),u.route.id){let{loaderData:f,errors:m}=n,g=u.route.loader&&f[u.route.id]===void 0&&(!m||m[u.route.id]===void 0);if(u.route.lazy||g){l=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,u,f)=>{let m,g=!1,y=null,x=null;n&&(m=a&&u.route.id?a[u.route.id]:void 0,y=u.route.errorElement||mk,l&&(c<0&&f===0?(Ck("route-fallback"),g=!0,x=null):c===f&&(g=!0,x=u.route.hydrateFallbackElement||null)));let _=e.concat(o.slice(0,f+1)),p=()=>{let v;return m?v=y:g?v=x:u.route.Component?v=E.createElement(u.route.Component,null):u.route.element?v=u.route.element:v=d,E.createElement(_k,{match:u,routeContext:{outlet:d,matches:_,isDataRoute:n!=null},children:v})};return n&&(u.route.ErrorBoundary||u.route.errorElement||f===0)?E.createElement(gk,{location:n.location,revalidation:n.revalidation,component:y,error:m,children:p(),routeContext:{outlet:null,matches:_,isDataRoute:!0}}):p()},null)}var lv=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(lv||{}),cv=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(cv||{});function yk(t){let e=E.useContext(Gd);return e||ye(!1),e}function wk(t){let e=E.useContext(uk);return e||ye(!1),e}function Ek(t){let e=E.useContext(Si);return e||ye(!1),e}function uv(t){let e=Ek(),n=e.matches[e.matches.length-1];return n.route.id||ye(!1),n.route.id}function xk(){var t;let e=E.useContext(iv),n=wk(),r=uv();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function kk(){let{router:t}=yk(lv.UseNavigateStable),e=uv(cv.UseNavigateStable),n=E.useRef(!1);return ov(()=>{n.current=!0}),E.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Os({fromRouteId:e},s)))},[t,e])}const cp={};function Ck(t,e,n){cp[t]||(cp[t]=!0)}function Sk(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function Qi(t){ye(!1)}function Ik(t){let{basename:e="/",children:n=null,location:r,navigationType:i=In.Pop,navigator:s,static:o=!1,future:a}=t;ml()&&ye(!1);let l=e.replace(/^\/*/,"/"),c=E.useMemo(()=>({basename:l,navigator:s,static:o,future:Os({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=Ci(r));let{pathname:d="/",search:u="",hash:f="",state:m=null,key:g="default"}=r,y=E.useMemo(()=>{let x=nv(d,l);return x==null?null:{location:{pathname:x,search:u,hash:f,state:m,key:g},navigationType:i}},[l,d,u,f,m,g,i]);return y==null?null:E.createElement(fl.Provider,{value:c},E.createElement(pl.Provider,{children:n,value:y}))}function Tk(t){let{children:e,location:n}=t;return hk(Iu(e),n)}new Promise(()=>{});function Iu(t,e){e===void 0&&(e=[]);let n=[];return E.Children.forEach(t,(r,i)=>{if(!E.isValidElement(r))return;let s=[...e,i];if(r.type===E.Fragment){n.push.apply(n,Iu(r.props.children,s));return}r.type!==Qi&&ye(!1),!r.props.index||!r.props.children||ye(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Iu(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Nk="6";try{window.__reactRouterVersion=Nk}catch{}const bk="startTransition",up=Cw[bk];function Rk(t){let{basename:e,children:n,future:r,window:i}=t,s=E.useRef();s.current==null&&(s.current=Mx({window:i,v5Compat:!0}));let o=s.current,[a,l]=E.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},d=E.useCallback(u=>{c&&up?up(()=>l(u)):l(u)},[l,c]);return E.useLayoutEffect(()=>o.listen(d),[o,d]),E.useEffect(()=>Sk(r),[r]),E.createElement(Ik,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}var dp;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(dp||(dp={}));var hp;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(hp||(hp={}));let Pk={data:""},Ak=t=>typeof window=="object"?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||Pk,Ok=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Dk=/\/\*[^]*?\*\/|  +/g,fp=/\n+/g,vn=(t,e)=>{let n="",r="",i="";for(let s in t){let o=t[s];s[0]=="@"?s[1]=="i"?n=s+" "+o+";":r+=s[1]=="f"?vn(o,s):s+"{"+vn(o,s[1]=="k"?"":e)+"}":typeof o=="object"?r+=vn(o,e?e.replace(/([^,])+/g,a=>s.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,a):a?a+" "+l:l)):s):o!=null&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=vn.p?vn.p(s,o):s+":"+o+";")}return n+(e&&i?e+"{"+i+"}":i)+r},Ft={},dv=t=>{if(typeof t=="object"){let e="";for(let n in t)e+=n+dv(t[n]);return e}return t},Lk=(t,e,n,r,i)=>{let s=dv(t),o=Ft[s]||(Ft[s]=(l=>{let c=0,d=11;for(;c<l.length;)d=101*d+l.charCodeAt(c++)>>>0;return"go"+d})(s));if(!Ft[o]){let l=s!==t?t:(c=>{let d,u,f=[{}];for(;d=Ok.exec(c.replace(Dk,""));)d[4]?f.shift():d[3]?(u=d[3].replace(fp," ").trim(),f.unshift(f[0][u]=f[0][u]||{})):f[0][d[1]]=d[2].replace(fp," ").trim();return f[0]})(t);Ft[o]=vn(i?{["@keyframes "+o]:l}:l,n?"":"."+o)}let a=n&&Ft.g?Ft.g:null;return n&&(Ft.g=Ft[o]),((l,c,d,u)=>{u?c.data=c.data.replace(u,l):c.data.indexOf(l)===-1&&(c.data=d?l+c.data:c.data+l)})(Ft[o],e,r,a),o},Mk=(t,e,n)=>t.reduce((r,i,s)=>{let o=e[s];if(o&&o.call){let a=o(n),l=a&&a.props&&a.props.className||/^go/.test(a)&&a;o=l?"."+l:a&&typeof a=="object"?a.props?"":vn(a,""):a===!1?"":a}return r+i+(o??"")},"");function gl(t){let e=this||{},n=t.call?t(e.p):t;return Lk(n.unshift?n.raw?Mk(n,[].slice.call(arguments,1),e.p):n.reduce((r,i)=>Object.assign(r,i&&i.call?i(e.p):i),{}):n,Ak(e.target),e.g,e.o,e.k)}let hv,Tu,Nu;gl.bind({g:1});let nn=gl.bind({k:1});function jk(t,e,n,r){vn.p=e,hv=t,Tu=n,Nu=r}function Yn(t,e){let n=this||{};return function(){let r=arguments;function i(s,o){let a=Object.assign({},s),l=a.className||i.className;n.p=Object.assign({theme:Tu&&Tu()},a),n.o=/ *go\d+/.test(l),a.className=gl.apply(n,r)+(l?" "+l:"");let c=t;return t[0]&&(c=a.as||t,delete a.as),Nu&&c[0]&&Nu(a),hv(c,a)}return i}}var Uk=t=>typeof t=="function",Ca=(t,e)=>Uk(t)?t(e):t,Fk=(()=>{let t=0;return()=>(++t).toString()})(),fv=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),$k=20,Kd="default",pv=(t,e)=>{let{toastLimit:n}=t.settings;switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,n)};case 1:return{...t,toasts:t.toasts.map(o=>o.id===e.toast.id?{...o,...e.toast}:o)};case 2:let{toast:r}=e;return pv(t,{type:t.toasts.find(o=>o.id===r.id)?1:0,toast:r});case 3:let{toastId:i}=e;return{...t,toasts:t.toasts.map(o=>o.id===i||i===void 0?{...o,dismissed:!0,visible:!1}:o)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(o=>o.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let s=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(o=>({...o,pauseDuration:o.pauseDuration+s}))}}},qo=[],mv={toasts:[],pausedAt:void 0,settings:{toastLimit:$k}},Nt={},gv=(t,e=Kd)=>{Nt[e]=pv(Nt[e]||mv,t),qo.forEach(([n,r])=>{n===e&&r(Nt[e])})},_v=t=>Object.keys(Nt).forEach(e=>gv(t,e)),zk=t=>Object.keys(Nt).find(e=>Nt[e].toasts.some(n=>n.id===t)),_l=(t=Kd)=>e=>{gv(e,t)},Bk={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},Wk=(t={},e=Kd)=>{let[n,r]=E.useState(Nt[e]||mv),i=E.useRef(Nt[e]);E.useEffect(()=>(i.current!==Nt[e]&&r(Nt[e]),qo.push([e,r]),()=>{let o=qo.findIndex(([a])=>a===e);o>-1&&qo.splice(o,1)}),[e]);let s=n.toasts.map(o=>{var a,l,c;return{...t,...t[o.type],...o,removeDelay:o.removeDelay||((a=t[o.type])==null?void 0:a.removeDelay)||(t==null?void 0:t.removeDelay),duration:o.duration||((l=t[o.type])==null?void 0:l.duration)||(t==null?void 0:t.duration)||Bk[o.type],style:{...t.style,...(c=t[o.type])==null?void 0:c.style,...o.style}}});return{...n,toasts:s}},Vk=(t,e="blank",n)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...n,id:(n==null?void 0:n.id)||Fk()}),Js=t=>(e,n)=>{let r=Vk(e,t,n);return _l(r.toasterId||zk(r.id))({type:2,toast:r}),r.id},pe=(t,e)=>Js("blank")(t,e);pe.error=Js("error");pe.success=Js("success");pe.loading=Js("loading");pe.custom=Js("custom");pe.dismiss=(t,e)=>{let n={type:3,toastId:t};e?_l(e)(n):_v(n)};pe.dismissAll=t=>pe.dismiss(void 0,t);pe.remove=(t,e)=>{let n={type:4,toastId:t};e?_l(e)(n):_v(n)};pe.removeAll=t=>pe.remove(void 0,t);pe.promise=(t,e,n)=>{let r=pe.loading(e.loading,{...n,...n==null?void 0:n.loading});return typeof t=="function"&&(t=t()),t.then(i=>{let s=e.success?Ca(e.success,i):void 0;return s?pe.success(s,{id:r,...n,...n==null?void 0:n.success}):pe.dismiss(r),i}).catch(i=>{let s=e.error?Ca(e.error,i):void 0;s?pe.error(s,{id:r,...n,...n==null?void 0:n.error}):pe.dismiss(r)}),t};var Hk=1e3,Gk=(t,e="default")=>{let{toasts:n,pausedAt:r}=Wk(t,e),i=E.useRef(new Map).current,s=E.useCallback((u,f=Hk)=>{if(i.has(u))return;let m=setTimeout(()=>{i.delete(u),o({type:4,toastId:u})},f);i.set(u,m)},[]);E.useEffect(()=>{if(r)return;let u=Date.now(),f=n.map(m=>{if(m.duration===1/0)return;let g=(m.duration||0)+m.pauseDuration-(u-m.createdAt);if(g<0){m.visible&&pe.dismiss(m.id);return}return setTimeout(()=>pe.dismiss(m.id,e),g)});return()=>{f.forEach(m=>m&&clearTimeout(m))}},[n,r,e]);let o=E.useCallback(_l(e),[e]),a=E.useCallback(()=>{o({type:5,time:Date.now()})},[o]),l=E.useCallback((u,f)=>{o({type:1,toast:{id:u,height:f}})},[o]),c=E.useCallback(()=>{r&&o({type:6,time:Date.now()})},[r,o]),d=E.useCallback((u,f)=>{let{reverseOrder:m=!1,gutter:g=8,defaultPosition:y}=f||{},x=n.filter(v=>(v.position||y)===(u.position||y)&&v.height),_=x.findIndex(v=>v.id===u.id),p=x.filter((v,w)=>w<_&&v.visible).length;return x.filter(v=>v.visible).slice(...m?[p+1]:[0,p]).reduce((v,w)=>v+(w.height||0)+g,0)},[n]);return E.useEffect(()=>{n.forEach(u=>{if(u.dismissed)s(u.id,u.removeDelay);else{let f=i.get(u.id);f&&(clearTimeout(f),i.delete(u.id))}})},[n,s]),{toasts:n,handlers:{updateHeight:l,startPause:a,endPause:c,calculateOffset:d}}},Kk=nn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,qk=nn`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Qk=nn`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,Yk=Yn("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Kk} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${qk} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${t=>t.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${Qk} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,Xk=nn`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Jk=Yn("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${Xk} 1s linear infinite;
`,Zk=nn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,eC=nn`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,tC=Yn("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Zk} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${eC} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${t=>t.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,nC=Yn("div")`
  position: absolute;
`,rC=Yn("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,iC=nn`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,sC=Yn("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${iC} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,oC=({toast:t})=>{let{icon:e,type:n,iconTheme:r}=t;return e!==void 0?typeof e=="string"?E.createElement(sC,null,e):e:n==="blank"?null:E.createElement(rC,null,E.createElement(Jk,{...r}),n!=="loading"&&E.createElement(nC,null,n==="error"?E.createElement(Yk,{...r}):E.createElement(tC,{...r})))},aC=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,lC=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,cC="0%{opacity:0;} 100%{opacity:1;}",uC="0%{opacity:1;} 100%{opacity:0;}",dC=Yn("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,hC=Yn("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,fC=(t,e)=>{let n=t.includes("top")?1:-1,[r,i]=fv()?[cC,uC]:[aC(n),lC(n)];return{animation:e?`${nn(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${nn(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},pC=E.memo(({toast:t,position:e,style:n,children:r})=>{let i=t.height?fC(t.position||e||"top-center",t.visible):{opacity:0},s=E.createElement(oC,{toast:t}),o=E.createElement(hC,{...t.ariaProps},Ca(t.message,t));return E.createElement(dC,{className:t.className,style:{...i,...n,...t.style}},typeof r=="function"?r({icon:s,message:o}):E.createElement(E.Fragment,null,s,o))});jk(E.createElement);var mC=({id:t,className:e,style:n,onHeightUpdate:r,children:i})=>{let s=E.useCallback(o=>{if(o){let a=()=>{let l=o.getBoundingClientRect().height;r(t,l)};a(),new MutationObserver(a).observe(o,{subtree:!0,childList:!0,characterData:!0})}},[t,r]);return E.createElement("div",{ref:s,className:e,style:n},i)},gC=(t,e)=>{let n=t.includes("top"),r=n?{top:0}:{bottom:0},i=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:fv()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(n?1:-1)}px)`,...r,...i}},_C=gl`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Ro=16,vC=({reverseOrder:t,position:e="top-center",toastOptions:n,gutter:r,children:i,toasterId:s,containerStyle:o,containerClassName:a})=>{let{toasts:l,handlers:c}=Gk(n,s);return E.createElement("div",{"data-rht-toaster":s||"",style:{position:"fixed",zIndex:9999,top:Ro,left:Ro,right:Ro,bottom:Ro,pointerEvents:"none",...o},className:a,onMouseEnter:c.startPause,onMouseLeave:c.endPause},l.map(d=>{let u=d.position||e,f=c.calculateOffset(d,{reverseOrder:t,gutter:r,defaultPosition:e}),m=gC(u,f);return E.createElement(mC,{id:d.id,key:d.id,onHeightUpdate:c.updateHeight,className:d.visible?_C:"",style:m},d.type==="custom"?Ca(d.message,d):i?i(d):E.createElement(pC,{toast:d,position:u}))}))},ke=pe;const yC={},pp=t=>{let e;const n=new Set,r=(d,u)=>{const f=typeof d=="function"?d(e):d;if(!Object.is(f,e)){const m=e;e=u??(typeof f!="object"||f===null)?f:Object.assign({},e,f),n.forEach(g=>g(e,m))}},i=()=>e,l={setState:r,getState:i,getInitialState:()=>c,subscribe:d=>(n.add(d),()=>n.delete(d)),destroy:()=>{(yC?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},c=e=t(r,i,l);return l},wC=t=>t?pp(t):pp;var vv={exports:{}},yv={},wv={exports:{}},Ev={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hi=E;function EC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var xC=typeof Object.is=="function"?Object.is:EC,kC=hi.useState,CC=hi.useEffect,SC=hi.useLayoutEffect,IC=hi.useDebugValue;function TC(t,e){var n=e(),r=kC({inst:{value:n,getSnapshot:e}}),i=r[0].inst,s=r[1];return SC(function(){i.value=n,i.getSnapshot=e,fc(i)&&s({inst:i})},[t,n,e]),CC(function(){return fc(i)&&s({inst:i}),t(function(){fc(i)&&s({inst:i})})},[t]),IC(n),n}function fc(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!xC(t,n)}catch{return!0}}function NC(t,e){return e()}var bC=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?NC:TC;Ev.useSyncExternalStore=hi.useSyncExternalStore!==void 0?hi.useSyncExternalStore:bC;wv.exports=Ev;var RC=wv.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vl=E,PC=RC;function AC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var OC=typeof Object.is=="function"?Object.is:AC,DC=PC.useSyncExternalStore,LC=vl.useRef,MC=vl.useEffect,jC=vl.useMemo,UC=vl.useDebugValue;yv.useSyncExternalStoreWithSelector=function(t,e,n,r,i){var s=LC(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=jC(function(){function l(m){if(!c){if(c=!0,d=m,m=r(m),i!==void 0&&o.hasValue){var g=o.value;if(i(g,m))return u=g}return u=m}if(g=u,OC(d,m))return g;var y=r(m);return i!==void 0&&i(g,y)?(d=m,g):(d=m,u=y)}var c=!1,d,u,f=n===void 0?null:n;return[function(){return l(e())},f===null?void 0:function(){return l(f())}]},[e,n,r,i]);var a=DC(t,s[0],s[1]);return MC(function(){o.hasValue=!0,o.value=a},[a]),UC(a),a};vv.exports=yv;var FC=vv.exports;const $C=Fm(FC),xv={},{useDebugValue:zC}=Xa,{useSyncExternalStoreWithSelector:BC}=$C;let mp=!1;const WC=t=>t;function VC(t,e=WC,n){(xv?"production":void 0)!=="production"&&n&&!mp&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),mp=!0);const r=BC(t.subscribe,t.getState,t.getServerState||t.getInitialState,e,n);return zC(r),r}const gp=t=>{(xv?"production":void 0)!=="production"&&typeof t!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const e=typeof t=="function"?wC(t):t,n=(r,i)=>VC(e,r,i);return Object.assign(n,e),n},kv=t=>t?gp(t):gp,st=kv(t=>({user:null,loading:!0,setUser:e=>t({user:e}),setLoading:e=>t({loading:e}),logout:()=>t({user:null})}));var _p={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cv={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S=function(t,e){if(!t)throw Ii(e)},Ii=function(t){return new Error("Firebase Database ("+Cv.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},HC=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},qd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,d=s>>2,u=(s&3)<<4|a>>4;let f=(a&15)<<2|c>>6,m=c&63;l||(m=64,o||(f=64)),r.push(n[d],n[u],n[f],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Sv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):HC(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const u=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||u==null)throw new GC;const f=s<<2|a>>4;if(r.push(f),c!==64){const m=a<<4&240|c>>2;if(r.push(m),u!==64){const g=c<<6&192|u;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class GC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Iv=function(t){const e=Sv(t);return qd.encodeByteArray(e,!0)},Sa=function(t){return Iv(t).replace(/\./g,"")},Ia=function(t){try{return qd.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KC(t){return Tv(void 0,t)}function Tv(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!qC(n)||(t[n]=Tv(t[n],e[n]));return t}function qC(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YC=()=>QC().__FIREBASE_DEFAULTS__,XC=()=>{if(typeof process>"u"||typeof _p>"u")return;const t=_p.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},JC=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ia(t[1]);return e&&JSON.parse(e)},Qd=()=>{try{return YC()||XC()||JC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Nv=t=>{var e,n;return(n=(e=Qd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},bv=t=>{const e=Nv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Rv=()=>{var t;return(t=Qd())===null||t===void 0?void 0:t.config},Pv=t=>{var e;return(e=Qd())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Av(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Sa(JSON.stringify(n)),Sa(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Yd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Be())}function ZC(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function eS(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Ov(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function tS(){const t=Be();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function nS(){return Cv.NODE_ADMIN===!0}function rS(){try{return typeof indexedDB=="object"}catch{return!1}}function iS(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sS="FirebaseError";class cn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=sS,Object.setPrototypeOf(this,cn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Zs.prototype.create)}}class Zs{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?oS(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new cn(i,a,r)}}function oS(t,e){return t.replace(aS,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const aS=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ds(t){return JSON.parse(t)}function me(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dv=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Ds(Ia(s[0])||""),n=Ds(Ia(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},lS=function(t){const e=Dv(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},cS=function(t){const e=Dv(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function fi(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Ta(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Na(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function ba(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(vp(s)&&vp(o)){if(!ba(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function vp(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ti(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Yi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Xi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uS{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)r[u]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let u=0;u<16;u++)r[u]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let u=16;u<80;u++){const f=r[u-3]^r[u-8]^r[u-14]^r[u-16];r[u]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,d;for(let u=0;u<80;u++){u<40?u<20?(c=a^s&(o^a),d=1518500249):(c=s^o^a,d=1859775393):u<60?(c=s&o|a&(s|o),d=2400959708):(c=s^o^a,d=3395469782);const f=(i<<5|i>>>27)+c+l+d+r[u]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function dS(t,e){const n=new hS(t,e);return n.subscribe.bind(n)}class hS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");fS(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=pc),i.error===void 0&&(i.error=pc),i.complete===void 0&&(i.complete=pc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function fS(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function pc(){}function pi(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pS=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,S(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},yl=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(t){return t&&t._delegate?t._delegate:t}class Wn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mS{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Bt;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(_S(e))try{this.getOrInitializeService({instanceIdentifier:rr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=rr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=rr){return this.instances.has(e)}getOptions(e=rr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:gS(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=rr){return this.component?this.component.multipleInstances?e:rr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function gS(t){return t===rr?void 0:t}function _S(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new mS(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var G;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(G||(G={}));const yS={debug:G.DEBUG,verbose:G.VERBOSE,info:G.INFO,warn:G.WARN,error:G.ERROR,silent:G.SILENT},wS=G.INFO,ES={[G.DEBUG]:"log",[G.VERBOSE]:"log",[G.INFO]:"info",[G.WARN]:"warn",[G.ERROR]:"error"},xS=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=ES[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Xd{constructor(e){this.name=e,this._logLevel=wS,this._logHandler=xS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in G))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?yS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,G.DEBUG,...e),this._logHandler(this,G.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,G.VERBOSE,...e),this._logHandler(this,G.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,G.INFO,...e),this._logHandler(this,G.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,G.WARN,...e),this._logHandler(this,G.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,G.ERROR,...e),this._logHandler(this,G.ERROR,...e)}}const kS=(t,e)=>e.some(n=>t instanceof n);let yp,wp;function CS(){return yp||(yp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function SS(){return wp||(wp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Lv=new WeakMap,bu=new WeakMap,Mv=new WeakMap,mc=new WeakMap,Jd=new WeakMap;function IS(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Mn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Lv.set(n,t)}).catch(()=>{}),Jd.set(e,t),e}function TS(t){if(bu.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});bu.set(t,e)}let Ru={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return bu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Mv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Mn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function NS(t){Ru=t(Ru)}function bS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(gc(this),e,...n);return Mv.set(r,e.sort?e.sort():[e]),Mn(r)}:SS().includes(t)?function(...e){return t.apply(gc(this),e),Mn(Lv.get(this))}:function(...e){return Mn(t.apply(gc(this),e))}}function RS(t){return typeof t=="function"?bS(t):(t instanceof IDBTransaction&&TS(t),kS(t,CS())?new Proxy(t,Ru):t)}function Mn(t){if(t instanceof IDBRequest)return IS(t);if(mc.has(t))return mc.get(t);const e=RS(t);return e!==t&&(mc.set(t,e),Jd.set(e,t)),e}const gc=t=>Jd.get(t);function PS(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Mn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Mn(o.result),l.oldVersion,l.newVersion,Mn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const AS=["get","getKey","getAll","getAllKeys","count"],OS=["put","add","delete","clear"],_c=new Map;function Ep(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(_c.get(e))return _c.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=OS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||AS.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return _c.set(e,s),s}NS(t=>({...t,get:(e,n,r)=>Ep(e,n)||t.get(e,n,r),has:(e,n)=>!!Ep(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(LS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function LS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Pu="@firebase/app",xp="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rn=new Xd("@firebase/app"),MS="@firebase/app-compat",jS="@firebase/analytics-compat",US="@firebase/analytics",FS="@firebase/app-check-compat",$S="@firebase/app-check",zS="@firebase/auth",BS="@firebase/auth-compat",WS="@firebase/database",VS="@firebase/data-connect",HS="@firebase/database-compat",GS="@firebase/functions",KS="@firebase/functions-compat",qS="@firebase/installations",QS="@firebase/installations-compat",YS="@firebase/messaging",XS="@firebase/messaging-compat",JS="@firebase/performance",ZS="@firebase/performance-compat",e1="@firebase/remote-config",t1="@firebase/remote-config-compat",n1="@firebase/storage",r1="@firebase/storage-compat",i1="@firebase/firestore",s1="@firebase/vertexai-preview",o1="@firebase/firestore-compat",a1="firebase",l1="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Au="[DEFAULT]",c1={[Pu]:"fire-core",[MS]:"fire-core-compat",[US]:"fire-analytics",[jS]:"fire-analytics-compat",[$S]:"fire-app-check",[FS]:"fire-app-check-compat",[zS]:"fire-auth",[BS]:"fire-auth-compat",[WS]:"fire-rtdb",[VS]:"fire-data-connect",[HS]:"fire-rtdb-compat",[GS]:"fire-fn",[KS]:"fire-fn-compat",[qS]:"fire-iid",[QS]:"fire-iid-compat",[YS]:"fire-fcm",[XS]:"fire-fcm-compat",[JS]:"fire-perf",[ZS]:"fire-perf-compat",[e1]:"fire-rc",[t1]:"fire-rc-compat",[n1]:"fire-gcs",[r1]:"fire-gcs-compat",[i1]:"fire-fst",[o1]:"fire-fst-compat",[s1]:"fire-vertex","fire-js":"fire-js",[a1]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ra=new Map,u1=new Map,Ou=new Map;function kp(t,e){try{t.container.addComponent(e)}catch(n){rn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function yr(t){const e=t.name;if(Ou.has(e))return rn.debug(`There were multiple attempts to register component ${e}.`),!1;Ou.set(e,t);for(const n of Ra.values())kp(n,t);for(const n of u1.values())kp(n,t);return!0}function wl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function vt(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},jn=new Zs("app","Firebase",d1);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h1{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Wn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw jn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nr=l1;function jv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Au,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw jn.create("bad-app-name",{appName:String(i)});if(n||(n=Rv()),!n)throw jn.create("no-options");const s=Ra.get(i);if(s){if(ba(n,s.options)&&ba(r,s.config))return s;throw jn.create("duplicate-app",{appName:i})}const o=new vS(i);for(const l of Ou.values())o.addComponent(l);const a=new h1(n,r,o);return Ra.set(i,a),a}function Zd(t=Au){const e=Ra.get(t);if(!e&&t===Au&&Rv())return jv();if(!e)throw jn.create("no-app",{appName:t});return e}function At(t,e,n){var r;let i=(r=c1[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),rn.warn(a.join(" "));return}yr(new Wn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f1="firebase-heartbeat-database",p1=1,Ls="firebase-heartbeat-store";let vc=null;function Uv(){return vc||(vc=PS(f1,p1,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ls)}catch(n){console.warn(n)}}}}).catch(t=>{throw jn.create("idb-open",{originalErrorMessage:t.message})})),vc}async function m1(t){try{const n=(await Uv()).transaction(Ls),r=await n.objectStore(Ls).get(Fv(t));return await n.done,r}catch(e){if(e instanceof cn)rn.warn(e.message);else{const n=jn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});rn.warn(n.message)}}}async function Cp(t,e){try{const r=(await Uv()).transaction(Ls,"readwrite");await r.objectStore(Ls).put(e,Fv(t)),await r.done}catch(n){if(n instanceof cn)rn.warn(n.message);else{const r=jn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});rn.warn(r.message)}}}function Fv(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g1=1024,_1=30*24*60*60*1e3;class v1{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new w1(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Sp();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=_1}),this._storage.overwrite(this._heartbeatsCache))}catch(r){rn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Sp(),{heartbeatsToSend:r,unsentEntries:i}=y1(this._heartbeatsCache.heartbeats),s=Sa(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return rn.warn(n),""}}}function Sp(){return new Date().toISOString().substring(0,10)}function y1(t,e=g1){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Ip(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Ip(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class w1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return rS()?iS().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await m1(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Cp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Cp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ip(t){return Sa(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E1(t){yr(new Wn("platform-logger",e=>new DS(e),"PRIVATE")),yr(new Wn("heartbeat",e=>new v1(e),"PRIVATE")),At(Pu,xp,t),At(Pu,xp,"esm2017"),At("fire-js","")}E1("");var x1="firebase",k1="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */At(x1,k1,"app");function eh(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function $v(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const C1=$v,zv=new Zs("auth","Firebase",$v());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pa=new Xd("@firebase/auth");function S1(t,...e){Pa.logLevel<=G.WARN&&Pa.warn(`Auth (${Nr}): ${t}`,...e)}function Qo(t,...e){Pa.logLevel<=G.ERROR&&Pa.error(`Auth (${Nr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(t,...e){throw th(t,...e)}function Ot(t,...e){return th(t,...e)}function Bv(t,e,n){const r=Object.assign(Object.assign({},C1()),{[e]:n});return new Zs("auth","Firebase",r).create(e,{appName:t.name})}function Dt(t){return Bv(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function th(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return zv.create(t,...e)}function A(t,e,...n){if(!t)throw th(e,...n)}function Ht(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Qo(e),new Error(e)}function sn(t,e){t||Ht(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Du(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function I1(){return Tp()==="http:"||Tp()==="https:"}function Tp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(I1()||eS()||"connection"in navigator)?navigator.onLine:!0}function N1(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(e,n){this.shortDelay=e,this.longDelay=n,sn(n>e,"Short delay should be less than long delay!"),this.isMobile=Yd()||Ov()}get(){return T1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nh(t,e){sn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wv{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ht("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ht("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ht("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R1=new eo(3e4,6e4);function Xn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function un(t,e,n,r,i={}){return Vv(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Ti(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:l},s);return ZC()||(c.referrerPolicy="no-referrer"),Wv.fetch()(Hv(t,t.config.apiHost,n,a),c)})}async function Vv(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},b1),e);try{const i=new A1(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Po(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Po(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Po(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Po(t,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Bv(t,d,c);Ct(t,d)}}catch(i){if(i instanceof cn)throw i;Ct(t,"network-request-failed",{message:String(i)})}}async function to(t,e,n,r,i={}){const s=await un(t,e,n,r,i);return"mfaPendingCredential"in s&&Ct(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Hv(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?nh(t.config,i):`${t.config.apiScheme}://${i}`}function P1(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class A1{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ot(this.auth,"network-request-failed")),R1.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Po(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ot(t,e,r);return i.customData._tokenResponse=n,i}function Np(t){return t!==void 0&&t.enterprise!==void 0}class O1{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return P1(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function D1(t,e){return un(t,"GET","/v2/recaptchaConfig",Xn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L1(t,e){return un(t,"POST","/v1/accounts:delete",e)}async function Gv(t,e){return un(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function as(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function M1(t,e=!1){const n=oe(t),r=await n.getIdToken(e),i=rh(r);A(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:as(yc(i.auth_time)),issuedAtTime:as(yc(i.iat)),expirationTime:as(yc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function yc(t){return Number(t)*1e3}function rh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Qo("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ia(n);return i?JSON.parse(i):(Qo("Failed to decode base64 JWT payload"),null)}catch(i){return Qo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function bp(t){const e=rh(t);return A(e,"internal-error"),A(typeof e.exp<"u","internal-error"),A(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof cn&&j1(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function j1({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=as(this.lastLoginAt),this.creationTime=as(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Aa(t){var e;const n=t.auth,r=await t.getIdToken(),i=await mi(t,Gv(n,{idToken:r}));A(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Kv(s.providerUserInfo):[],a=$1(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),d=l?c:!1,u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Lu(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,u)}async function F1(t){const e=oe(t);await Aa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function $1(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Kv(t){return t.map(e=>{var{providerId:n}=e,r=eh(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z1(t,e){const n=await Vv(t,{},async()=>{const r=Ti({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Hv(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Wv.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function B1(t,e){return un(t,"POST","/v2/accounts:revokeToken",Xn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){A(e.idToken,"internal-error"),A(typeof e.idToken<"u","internal-error"),A(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):bp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){A(e.length!==0,"internal-error");const n=bp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(A(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await z1(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ei;return r&&(A(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(A(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(A(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ei,this.toJSON())}_performRefresh(){return Ht("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(t,e){A(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Gt{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=eh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new U1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Lu(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await mi(this,this.stsTokenManager.getToken(this.auth,e));return A(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return M1(this,e)}reload(){return F1(this)}_assign(e){this!==e&&(A(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Gt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){A(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Aa(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(vt(this.auth.app))return Promise.reject(Dt(this.auth));const e=await this.getIdToken();return await mi(this,L1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,c,d;const u=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,x=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,_=(c=n.createdAt)!==null&&c!==void 0?c:void 0,p=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:v,emailVerified:w,isAnonymous:C,providerData:I,stsTokenManager:T}=n;A(v&&T,e,"internal-error");const R=ei.fromJSON(this.name,T);A(typeof v=="string",e,"internal-error"),fn(u,e.name),fn(f,e.name),A(typeof w=="boolean",e,"internal-error"),A(typeof C=="boolean",e,"internal-error"),fn(m,e.name),fn(g,e.name),fn(y,e.name),fn(x,e.name),fn(_,e.name),fn(p,e.name);const B=new Gt({uid:v,auth:e,email:f,emailVerified:w,displayName:u,isAnonymous:C,photoURL:g,phoneNumber:m,tenantId:y,stsTokenManager:R,createdAt:_,lastLoginAt:p});return I&&Array.isArray(I)&&(B.providerData=I.map(O=>Object.assign({},O))),x&&(B._redirectEventId=x),B}static async _fromIdTokenResponse(e,n,r=!1){const i=new ei;i.updateFromServerResponse(n);const s=new Gt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Aa(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];A(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Kv(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new ei;a.updateFromIdToken(r);const l=new Gt({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Lu(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rp=new Map;function Kt(t){sn(t instanceof Function,"Expected a class definition");let e=Rp.get(t);return e?(sn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Rp.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}qv.type="NONE";const Pp=qv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yo(t,e,n){return`firebase:${t}:${e}:${n}`}class ti{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Yo(this.userKey,i.apiKey,s),this.fullPersistenceKey=Yo("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Gt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ti(Kt(Pp),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||Kt(Pp);const o=Yo(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const d=await c._get(o);if(d){const u=Gt._fromJSON(e,d);c!==s&&(a=u),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new ti(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new ti(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ap(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Jv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Qv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ey(e))return"Blackberry";if(ty(e))return"Webos";if(Yv(e))return"Safari";if((e.includes("chrome/")||Xv(e))&&!e.includes("edge/"))return"Chrome";if(Zv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Qv(t=Be()){return/firefox\//i.test(t)}function Yv(t=Be()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Xv(t=Be()){return/crios\//i.test(t)}function Jv(t=Be()){return/iemobile/i.test(t)}function Zv(t=Be()){return/android/i.test(t)}function ey(t=Be()){return/blackberry/i.test(t)}function ty(t=Be()){return/webos/i.test(t)}function ih(t=Be()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function W1(t=Be()){var e;return ih(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function V1(){return tS()&&document.documentMode===10}function ny(t=Be()){return ih(t)||Zv(t)||ty(t)||ey(t)||/windows phone/i.test(t)||Jv(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ry(t,e=[]){let n;switch(t){case"Browser":n=Ap(Be());break;case"Worker":n=`${Ap(Be())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Nr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G1(t,e={}){return un(t,"GET","/v2/passwordPolicy",Xn(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K1=6;class q1{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:K1,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q1{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Op(this),this.idTokenSubscription=new Op(this),this.beforeStateQueue=new H1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=zv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Kt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ti.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Gv(this,{idToken:e}),r=await Gt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(vt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return A(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Aa(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=N1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(vt(this.app))return Promise.reject(Dt(this));const n=e?oe(e):null;return n&&A(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&A(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return vt(this.app)?Promise.reject(Dt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return vt(this.app)?Promise.reject(Dt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Kt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await G1(this),n=new q1(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Zs("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await B1(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Kt(e)||this._popupRedirectResolver;A(n,this,"argument-error"),this.redirectPersistenceManager=await ti.create(this,[Kt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(A(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return A(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ry(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&S1(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Jn(t){return oe(t)}class Op{constructor(e){this.auth=e,this.observer=null,this.addObserver=dS(n=>this.observer=n)}get next(){return A(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let El={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Y1(t){El=t}function iy(t){return El.loadJS(t)}function X1(){return El.recaptchaEnterpriseScript}function J1(){return El.gapiScript}function Z1(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const eI="recaptcha-enterprise",tI="NO_RECAPTCHA";class nI{constructor(e){this.type=eI,this.auth=Jn(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{D1(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new O1(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;Np(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(tI)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&Np(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=X1();l.length!==0&&(l+=a),iy(l).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Dp(t,e,n,r=!1){const i=new nI(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Mu(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Dp(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Dp(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rI(t,e){const n=wl(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ba(s,e??{}))return i;Ct(i,"already-initialized")}return n.initialize({options:e})}function iI(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Kt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function sI(t,e,n){const r=Jn(t);A(r._canInitEmulator,r,"emulator-config-failed"),A(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=sy(e),{host:o,port:a}=oI(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),aI()}function sy(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function oI(t){const e=sy(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Lp(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Lp(o)}}}function Lp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function aI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Ht("not implemented")}_getIdTokenResponse(e){return Ht("not implemented")}_linkToIdToken(e,n){return Ht("not implemented")}_getReauthenticationResolver(e){return Ht("not implemented")}}async function lI(t,e){return un(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cI(t,e){return to(t,"POST","/v1/accounts:signInWithPassword",Xn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uI(t,e){return to(t,"POST","/v1/accounts:signInWithEmailLink",Xn(t,e))}async function dI(t,e){return to(t,"POST","/v1/accounts:signInWithEmailLink",Xn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms extends sh{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ms(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ms(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Mu(e,n,"signInWithPassword",cI);case"emailLink":return uI(e,{email:this._email,oobCode:this._password});default:Ct(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Mu(e,r,"signUpPassword",lI);case"emailLink":return dI(e,{idToken:n,email:this._email,oobCode:this._password});default:Ct(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ni(t,e){return to(t,"POST","/v1/accounts:signInWithIdp",Xn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hI="http://localhost";class wr extends sh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new wr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ct("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=eh(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new wr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ni(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ni(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ni(e,n)}buildRequest(){const e={requestUri:hI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ti(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fI(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function pI(t){const e=Yi(Xi(t)).link,n=e?Yi(Xi(e)).deep_link_id:null,r=Yi(Xi(t)).deep_link_id;return(r?Yi(Xi(r)).link:null)||r||n||e||t}class oh{constructor(e){var n,r,i,s,o,a;const l=Yi(Xi(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,u=fI((i=l.mode)!==null&&i!==void 0?i:null);A(c&&d&&u,"argument-error"),this.apiKey=c,this.operation=u,this.code=d,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=pI(e);try{return new oh(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(){this.providerId=Ni.PROVIDER_ID}static credential(e,n){return Ms._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=oh.parseLink(n);return A(r,"argument-error"),Ms._fromEmailAndCode(e,r.code,r.tenantId)}}Ni.PROVIDER_ID="password";Ni.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ni.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no extends oy{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn extends no{constructor(){super("facebook.com")}static credential(e){return wr._fromParams({providerId:yn.PROVIDER_ID,signInMethod:yn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yn.credentialFromTaggedObject(e)}static credentialFromError(e){return yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yn.credential(e.oauthAccessToken)}catch{return null}}}yn.FACEBOOK_SIGN_IN_METHOD="facebook.com";yn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn extends no{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return wr._fromParams({providerId:wn.PROVIDER_ID,signInMethod:wn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return wn.credentialFromTaggedObject(e)}static credentialFromError(e){return wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return wn.credential(n,r)}catch{return null}}}wn.GOOGLE_SIGN_IN_METHOD="google.com";wn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En extends no{constructor(){super("github.com")}static credential(e){return wr._fromParams({providerId:En.PROVIDER_ID,signInMethod:En.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return En.credentialFromTaggedObject(e)}static credentialFromError(e){return En.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return En.credential(e.oauthAccessToken)}catch{return null}}}En.GITHUB_SIGN_IN_METHOD="github.com";En.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn extends no{constructor(){super("twitter.com")}static credential(e,n){return wr._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return xn.credentialFromTaggedObject(e)}static credentialFromError(e){return xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return xn.credential(n,r)}catch{return null}}}xn.TWITTER_SIGN_IN_METHOD="twitter.com";xn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ay(t,e){return to(t,"POST","/v1/accounts:signUp",Xn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Gt._fromIdTokenResponse(e,r,i),o=Mp(r);return new on({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Mp(r);return new on({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Mp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mI(t){var e;if(vt(t.app))return Promise.reject(Dt(t));const n=Jn(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new on({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await ay(n,{returnSecureToken:!0}),i=await on._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa extends cn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Oa.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Oa(e,n,r,i)}}function ly(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Oa._fromErrorAndOperation(t,s,e,r):s})}async function gI(t,e,n=!1){const r=await mi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return on._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _I(t,e,n=!1){const{auth:r}=t;if(vt(r.app))return Promise.reject(Dt(r));const i="reauthenticate";try{const s=await mi(t,ly(r,i,e,t),n);A(s.idToken,r,"internal-error");const o=rh(s.idToken);A(o,r,"internal-error");const{sub:a}=o;return A(t.uid===a,r,"user-mismatch"),on._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ct(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cy(t,e,n=!1){if(vt(t.app))return Promise.reject(Dt(t));const r="signIn",i=await ly(t,r,e),s=await on._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function vI(t,e){return cy(Jn(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uy(t){const e=Jn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function yI(t,e,n){if(vt(t.app))return Promise.reject(Dt(t));const r=Jn(t),o=await Mu(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",ay).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&uy(t),l}),a=await on._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function wI(t,e,n){return vt(t.app)?Promise.reject(Dt(t)):vI(oe(t),Ni.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&uy(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EI(t,e){return un(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jp(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=oe(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await mi(r,EI(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function xI(t,e,n,r){return oe(t).onIdTokenChanged(e,n,r)}function kI(t,e,n){return oe(t).beforeAuthStateChanged(e,n)}function CI(t,e,n,r){return oe(t).onAuthStateChanged(e,n,r)}function SI(t){return oe(t).signOut()}const Da="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dy{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Da,"1"),this.storage.removeItem(Da),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const II=1e3,TI=10;class hy extends dy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=ny(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);V1()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,TI):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},II)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}hy.type="LOCAL";const NI=hy;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fy extends dy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}fy.type="SESSION";const py=fy;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bI(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new xl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await bI(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}xl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ah(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=ah("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(u){const f=u;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(d),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(){return window}function PI(t){Lt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function my(){return typeof Lt().WorkerGlobalScope<"u"&&typeof Lt().importScripts=="function"}async function AI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function OI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function DI(){return my()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gy="firebaseLocalStorageDb",LI=1,La="firebaseLocalStorage",_y="fbase_key";class ro{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function kl(t,e){return t.transaction([La],e?"readwrite":"readonly").objectStore(La)}function MI(){const t=indexedDB.deleteDatabase(gy);return new ro(t).toPromise()}function ju(){const t=indexedDB.open(gy,LI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(La,{keyPath:_y})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(La)?e(r):(r.close(),await MI(),e(await ju()))})})}async function Up(t,e,n){const r=kl(t,!0).put({[_y]:e,value:n});return new ro(r).toPromise()}async function jI(t,e){const n=kl(t,!1).get(e),r=await new ro(n).toPromise();return r===void 0?null:r.value}function Fp(t,e){const n=kl(t,!0).delete(e);return new ro(n).toPromise()}const UI=800,FI=3;class vy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ju(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>FI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return my()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=xl._getInstance(DI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await AI(),!this.activeServiceWorker)return;this.sender=new RI(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||OI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ju();return await Up(e,Da,"1"),await Fp(e,Da),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Up(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>jI(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Fp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=kl(i,!1).getAll();return new ro(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),UI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}vy.type="LOCAL";const $I=vy;new eo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zI(t,e){return e?Kt(e):(A(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh extends sh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ni(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ni(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ni(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function BI(t){return cy(t.auth,new lh(t),t.bypassAuthState)}function WI(t){const{auth:e,user:n}=t;return A(n,e,"internal-error"),_I(n,new lh(t),t.bypassAuthState)}async function VI(t){const{auth:e,user:n}=t;return A(n,e,"internal-error"),gI(n,new lh(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yy{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return BI;case"linkViaPopup":case"linkViaRedirect":return VI;case"reauthViaPopup":case"reauthViaRedirect":return WI;default:Ct(this.auth,"internal-error")}}resolve(e){sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HI=new eo(2e3,1e4);class Hr extends yy{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Hr.currentPopupAction&&Hr.currentPopupAction.cancel(),Hr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return A(e,this.auth,"internal-error"),e}async onExecution(){sn(this.filter.length===1,"Popup operations only handle one event");const e=ah();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ot(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ot(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Hr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ot(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,HI.get())};e()}}Hr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GI="pendingRedirect",Xo=new Map;class KI extends yy{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Xo.get(this.auth._key());if(!e){try{const r=await qI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Xo.set(this.auth._key(),e)}return this.bypassAuthState||Xo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function qI(t,e){const n=XI(e),r=YI(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function QI(t,e){Xo.set(t._key(),e)}function YI(t){return Kt(t._redirectPersistence)}function XI(t){return Yo(GI,t.config.apiKey,t.name)}async function JI(t,e,n=!1){if(vt(t.app))return Promise.reject(Dt(t));const r=Jn(t),i=zI(r,e),o=await new KI(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZI=10*60*1e3;class eT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!tT(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!wy(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ot(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ZI&&this.cachedEventUids.clear(),this.cachedEventUids.has($p(e))}saveEventToCache(e){this.cachedEventUids.add($p(e)),this.lastProcessedEventTime=Date.now()}}function $p(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function wy({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function tT(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return wy(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nT(t,e={}){return un(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,iT=/^https?/;async function sT(t){if(t.config.emulator)return;const{authorizedDomains:e}=await nT(t);for(const n of e)try{if(oT(n))return}catch{}Ct(t,"unauthorized-domain")}function oT(t){const e=Du(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!iT.test(n))return!1;if(rT.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aT=new eo(3e4,6e4);function zp(){const t=Lt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function lT(t){return new Promise((e,n)=>{var r,i,s;function o(){zp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{zp(),n(Ot(t,"network-request-failed"))},timeout:aT.get()})}if(!((i=(r=Lt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Lt().gapi)===null||s===void 0)&&s.load)o();else{const a=Z1("iframefcb");return Lt()[a]=()=>{gapi.load?o():n(Ot(t,"network-request-failed"))},iy(`${J1()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Jo=null,e})}let Jo=null;function cT(t){return Jo=Jo||lT(t),Jo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uT=new eo(5e3,15e3),dT="__/auth/iframe",hT="emulator/auth/iframe",fT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},pT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function mT(t){const e=t.config;A(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?nh(e,hT):`https://${t.config.authDomain}/${dT}`,r={apiKey:e.apiKey,appName:t.name,v:Nr},i=pT.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ti(r).slice(1)}`}async function gT(t){const e=await cT(t),n=Lt().gapi;return A(n,t,"internal-error"),e.open({where:document.body,url:mT(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:fT,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Ot(t,"network-request-failed"),a=Lt().setTimeout(()=>{s(o)},uT.get());function l(){Lt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _T={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},vT=500,yT=600,wT="_blank",ET="http://localhost";class Bp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function xT(t,e,n,r=vT,i=yT){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},_T),{width:r.toString(),height:i.toString(),top:s,left:o}),c=Be().toLowerCase();n&&(a=Xv(c)?wT:n),Qv(c)&&(e=e||ET,l.scrollbars="yes");const d=Object.entries(l).reduce((f,[m,g])=>`${f}${m}=${g},`,"");if(W1(c)&&a!=="_self")return kT(e||"",a),new Bp(null);const u=window.open(e||"",a,d);A(u,t,"popup-blocked");try{u.focus()}catch{}return new Bp(u)}function kT(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CT="__/auth/handler",ST="emulator/auth/handler",IT=encodeURIComponent("fac");async function Wp(t,e,n,r,i,s){A(t.config.authDomain,t,"auth-domain-config-required"),A(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Nr,eventId:i};if(e instanceof oy){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Ta(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,u]of Object.entries({}))o[d]=u}if(e instanceof no){const d=e.getScopes().filter(u=>u!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await t._getAppCheckToken(),c=l?`#${IT}=${encodeURIComponent(l)}`:"";return`${TT(t)}?${Ti(a).slice(1)}${c}`}function TT({config:t}){return t.emulator?nh(t,ST):`https://${t.authDomain}/${CT}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wc="webStorageSupport";class NT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=py,this._completeRedirectFn=JI,this._overrideRedirectResult=QI}async _openPopup(e,n,r,i){var s;sn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Wp(e,n,r,Du(),i);return xT(e,o,ah())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Wp(e,n,r,Du(),i);return PI(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(sn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await gT(e),r=new eT(e);return n.register("authEvent",i=>(A(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(wc,{type:wc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[wc];o!==void 0&&n(!!o),Ct(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=sT(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ny()||Yv()||ih()}}const bT=NT;var Vp="@firebase/auth",Hp="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){A(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PT(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function AT(t){yr(new Wn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;A(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ry(t)},c=new Q1(r,i,s,l);return iI(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),yr(new Wn("auth-internal",e=>{const n=Jn(e.getProvider("auth").getImmediate());return(r=>new RT(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),At(Vp,Hp,PT(t)),At(Vp,Hp,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OT=5*60,DT=Pv("authIdTokenMaxAge")||OT;let Gp=null;const LT=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>DT)return;const i=n==null?void 0:n.token;Gp!==i&&(Gp=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function MT(t=Zd()){const e=wl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=rI(t,{popupRedirectResolver:bT,persistence:[$I,NI,py]}),r=Pv("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=LT(s.toString());kI(n,o,()=>o(n.currentUser)),xI(n,a=>o(a))}}const i=Nv("auth");return i&&sI(n,`http://${i}`),n}function jT(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Y1({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Ot("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",jT().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});AT("Browser");var Kp={};const qp="@firebase/database",Qp="1.0.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ey="";function UT(t){Ey=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FT{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),me(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Ds(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $T{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return jt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xy=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new FT(e)}}catch{}return new $T},lr=xy("localStorage"),zT=xy("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ri=new Xd("@firebase/database"),BT=function(){let t=1;return function(){return t++}}(),ky=function(t){const e=pS(t),n=new uS;n.update(e);const r=n.digest();return qd.encodeByteArray(r)},io=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=io.apply(null,r):typeof r=="object"?e+=me(r):e+=r,e+=" "}return e};let ls=null,Yp=!0;const WT=function(t,e){S(!0,"Can't turn on custom loggers persistently."),ri.logLevel=G.VERBOSE,ls=ri.log.bind(ri)},be=function(...t){if(Yp===!0&&(Yp=!1,ls===null&&zT.get("logging_enabled")===!0&&WT()),ls){const e=io.apply(null,t);ls(e)}},so=function(t){return function(...e){be(t,...e)}},Uu=function(...t){const e="FIREBASE INTERNAL ERROR: "+io(...t);ri.error(e)},an=function(...t){const e=`FIREBASE FATAL ERROR: ${io(...t)}`;throw ri.error(e),new Error(e)},Xe=function(...t){const e="FIREBASE WARNING: "+io(...t);ri.warn(e)},VT=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Xe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Cl=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},HT=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},gi="[MIN_NAME]",Er="[MAX_NAME]",br=function(t,e){if(t===e)return 0;if(t===gi||e===Er)return-1;if(e===gi||t===Er)return 1;{const n=Xp(t),r=Xp(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},GT=function(t,e){return t===e?0:t<e?-1:1},$i=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+me(e))},ch=function(t){if(typeof t!="object"||t===null)return me(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=me(e[r]),n+=":",n+=ch(t[e[r]]);return n+="}",n},Cy=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function je(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Sy=function(t){S(!Cl(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const d=c.join("");let u="";for(l=0;l<64;l+=8){let f=parseInt(d.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),u=u+f}return u.toLowerCase()},KT=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},qT=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function QT(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const YT=new RegExp("^-?(0*)\\d{1,10}$"),XT=-2147483648,JT=2147483647,Xp=function(t){if(YT.test(t)){const e=Number(t);if(e>=XT&&e<=JT)return e}return null},bi=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Xe("Exception was thrown by user callback.",n),e},Math.floor(0))}},ZT=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},cs=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eN{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Xe(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tN{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(be("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Xe(e)}}class Zo{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Zo.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uh="5",Iy="v",Ty="s",Ny="r",by="f",Ry=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Py="ls",Ay="p",Fu="ac",Oy="websocket",Dy="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ly{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=lr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&lr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function nN(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function My(t,e,n){S(typeof e=="string","typeof type must == string"),S(typeof n=="object","typeof params must == object");let r;if(e===Oy)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Dy)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);nN(t)&&(n.ns=t.namespace);const i=[];return je(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rN{constructor(){this.counters_={}}incrementCounter(e,n=1){jt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return KC(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ec={},xc={};function dh(t){const e=t.toString();return Ec[e]||(Ec[e]=new rN),Ec[e]}function iN(t,e){const n=t.toString();return xc[n]||(xc[n]=e()),xc[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sN{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&bi(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jp="start",oN="close",aN="pLPCommand",lN="pRTLPCB",jy="id",Uy="pw",Fy="ser",cN="cb",uN="seg",dN="ts",hN="d",fN="dframe",$y=1870,zy=30,pN=$y-zy,mN=25e3,gN=3e4;class Gr{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=so(e),this.stats_=dh(n),this.urlFn=l=>(this.appCheckToken&&(l[Fu]=this.appCheckToken),My(n,Dy,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new sN(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(gN)),HT(()=>{if(this.isClosed_)return;this.scriptTagHolder=new hh((...s)=>{const[o,a,l,c,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Jp)this.id=a,this.password=l;else if(o===oN)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Jp]="t",r[Fy]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[cN]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Iy]=uh,this.transportSessionId&&(r[Ty]=this.transportSessionId),this.lastSessionId&&(r[Py]=this.lastSessionId),this.applicationId&&(r[Ay]=this.applicationId),this.appCheckToken&&(r[Fu]=this.appCheckToken),typeof location<"u"&&location.hostname&&Ry.test(location.hostname)&&(r[Ny]=by);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Gr.forceAllow_=!0}static forceDisallow(){Gr.forceDisallow_=!0}static isAvailable(){return Gr.forceAllow_?!0:!Gr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!KT()&&!qT()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=me(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Iv(n),i=Cy(r,pN);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[fN]="t",r[jy]=e,r[Uy]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=me(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class hh{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=BT(),window[aN+this.uniqueCallbackIdentifier]=e,window[lN+this.uniqueCallbackIdentifier]=n,this.myIFrame=hh.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){be("frame writing exception"),a.stack&&be(a.stack),be(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||be("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[jy]=this.myID,e[Uy]=this.myPW,e[Fy]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+zy+r.length<=$y;){const o=this.pendingSegs.shift();r=r+"&"+uN+i+"="+o.seg+"&"+dN+i+"="+o.ts+"&"+hN+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(mN)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{be("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _N=16384,vN=45e3;let Ma=null;typeof MozWebSocket<"u"?Ma=MozWebSocket:typeof WebSocket<"u"&&(Ma=WebSocket);class _t{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=so(this.connId),this.stats_=dh(n),this.connURL=_t.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[Iy]=uh,typeof location<"u"&&location.hostname&&Ry.test(location.hostname)&&(o[Ny]=by),n&&(o[Ty]=n),r&&(o[Py]=r),i&&(o[Fu]=i),s&&(o[Ay]=s),My(e,Oy,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,lr.set("previous_websocket_failure",!0);try{let r;nS(),this.mySock=new Ma(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){_t.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Ma!==null&&!_t.forceDisallow_}static previouslyFailed(){return lr.isInMemoryStorage||lr.get("previous_websocket_failure")===!0}markConnectionHealthy(){lr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Ds(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(S(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=me(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Cy(n,_N);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(vN))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}_t.responsesRequiredToBeHealthy=2;_t.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Gr,_t]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=_t&&_t.isAvailable();let r=n&&!_t.previouslyFailed();if(e.webSocketOnly&&(n||Xe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[_t];else{const i=this.transports_=[];for(const s of js.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);js.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}js.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yN=6e4,wN=5e3,EN=10*1024,xN=100*1024,kc="t",Zp="d",kN="s",em="r",CN="e",tm="o",nm="a",rm="n",im="p",SN="h";class IN{constructor(e,n,r,i,s,o,a,l,c,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=so("c:"+this.id+":"),this.transportManager_=new js(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=cs(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>xN?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>EN?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(kc in e){const n=e[kc];n===nm?this.upgradeIfSecondaryHealthy_():n===em?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===tm&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=$i("t",e),r=$i("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:im,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:nm,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:rm,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=$i("t",e),r=$i("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=$i(kc,e);if(Zp in e){const r=e[Zp];if(n===SN){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===rm){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===kN?this.onConnectionShutdown_(r):n===em?this.onReset_(r):n===CN?Uu("Server Error: "+r):n===tm?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Uu("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),uh!==r&&Xe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),cs(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(yN))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):cs(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(wN))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:im,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(lr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class By{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wy{constructor(e){this.allowedEvents_=e,this.listeners_={},S(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){S(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja extends Wy{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Yd()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ja}getInitialEvent(e){return S(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sm=32,om=768;class H{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function z(){return new H("")}function L(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Vn(t){return t.pieces_.length-t.pieceNum_}function K(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new H(t.pieces_,e)}function fh(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function TN(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Us(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Vy(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new H(e,0)}function de(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof H)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new H(n,0)}function j(t){return t.pieceNum_>=t.pieces_.length}function $e(t,e){const n=L(t),r=L(e);if(n===null)return e;if(n===r)return $e(K(t),K(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function NN(t,e){const n=Us(t,0),r=Us(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=br(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function ph(t,e){if(Vn(t)!==Vn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function ct(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Vn(t)>Vn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class bN{constructor(e,n){this.errorPrefix_=n,this.parts_=Us(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=yl(this.parts_[r]);Hy(this)}}function RN(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=yl(e),Hy(t)}function PN(t){const e=t.parts_.pop();t.byteLength_-=yl(e),t.parts_.length>0&&(t.byteLength_-=1)}function Hy(t){if(t.byteLength_>om)throw new Error(t.errorPrefix_+"has a key path longer than "+om+" bytes ("+t.byteLength_+").");if(t.parts_.length>sm)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+sm+") or object contains a cycle "+ir(t))}function ir(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh extends Wy{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new mh}getInitialEvent(e){return S(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zi=1e3,AN=60*5*1e3,am=30*1e3,ON=1.3,DN=3e4,LN="server_kill",lm=3;class Yt extends By{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Yt.nextPersistentConnectionId_++,this.log_=so("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=zi,this.maxReconnectDelay_=AN,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");mh.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ja.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(me(s)),S(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Bt,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),S(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;Yt.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&jt(e,"w")){const r=fi(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Xe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||cS(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=am)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=lS(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+me(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Uu("Unrecognized action received from server: "+me(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){S(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=zi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=zi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>DN&&(this.reconnectDelay_=zi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*ON)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Yt.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(u){S(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(u)};this.realtime_={close:l,sendRequest:c};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,f]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?be("getToken() completed but was canceled"):(be("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=f&&f.token,a=new IN(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,m=>{Xe(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(LN)},s))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&Xe(u),l())}}}interrupt(e){be("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){be("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ta(this.interruptReasons_)&&(this.reconnectDelay_=zi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>ch(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new H(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){be("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=lm&&(this.reconnectDelay_=am,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){be("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=lm&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Ey.replace(/\./g,"-")]=1,Yd()?e["framework.cordova"]=1:Ov()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ja.getInstance().currentlyOnline();return Ta(this.interruptReasons_)&&e}}Yt.nextPersistentConnectionId_=0;Yt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new U(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new U(gi,e),i=new U(gi,n);return this.compare(r,i)!==0}minPost(){return U.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ao;class Gy extends Sl{static get __EMPTY_NODE(){return Ao}static set __EMPTY_NODE(e){Ao=e}compare(e,n){return br(e.name,n.name)}isDefinedOn(e){throw Ii("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return U.MIN}maxPost(){return new U(Er,Ao)}makePost(e,n){return S(typeof e=="string","KeyIndex indexValue must always be a string."),new U(e,Ao)}toString(){return".key"}}const ii=new Gy;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ce{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ce.RED,this.left=i??Ke.EMPTY_NODE,this.right=s??Ke.EMPTY_NODE}copy(e,n,r,i,s){return new Ce(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ke.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Ke.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ce.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ce.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ce.RED=!0;Ce.BLACK=!1;class MN{copy(e,n,r,i,s){return this}insert(e,n,r){return new Ce(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ke{constructor(e,n=Ke.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ke(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ce.BLACK,null,null))}remove(e){return new Ke(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ce.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Oo(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Oo(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Oo(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Oo(this.root_,null,this.comparator_,!0,e)}}Ke.EMPTY_NODE=new MN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jN(t,e){return br(t.name,e.name)}function gh(t,e){return br(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $u;function UN(t){$u=t}const Ky=function(t){return typeof t=="number"?"number:"+Sy(t):"string:"+t},qy=function(t){if(t.isLeafNode()){const e=t.val();S(typeof e=="string"||typeof e=="number"||typeof e=="object"&&jt(e,".sv"),"Priority must be a string or number.")}else S(t===$u||t.isEmpty(),"priority of unexpected type.");S(t===$u||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cm;class Ee{constructor(e,n=Ee.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,S(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),qy(this.priorityNode_)}static set __childrenNodeConstructor(e){cm=e}static get __childrenNodeConstructor(){return cm}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ee(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ee.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return j(e)?this:L(e)===".priority"?this.priorityNode_:Ee.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ee.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=L(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(S(r!==".priority"||Vn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Ee.__childrenNodeConstructor.EMPTY_NODE.updateChild(K(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Ky(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Sy(this.value_):e+=this.value_,this.lazyHash_=ky(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ee.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ee.__childrenNodeConstructor?-1:(S(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Ee.VALUE_TYPE_ORDER.indexOf(n),s=Ee.VALUE_TYPE_ORDER.indexOf(r);return S(i>=0,"Unknown leaf type: "+n),S(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ee.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qy,Yy;function FN(t){Qy=t}function $N(t){Yy=t}class zN extends Sl{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?br(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return U.MIN}maxPost(){return new U(Er,new Ee("[PRIORITY-POST]",Yy))}makePost(e,n){const r=Qy(e);return new U(n,new Ee("[PRIORITY-POST]",r))}toString(){return".priority"}}const te=new zN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BN=Math.log(2);class WN{constructor(e){const n=s=>parseInt(Math.log(s)/BN,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ua=function(t,e,n,r){t.sort(e);const i=function(l,c){const d=c-l;let u,f;if(d===0)return null;if(d===1)return u=t[l],f=n?n(u):u,new Ce(f,u.node,Ce.BLACK,null,null);{const m=parseInt(d/2,10)+l,g=i(l,m),y=i(m+1,c);return u=t[m],f=n?n(u):u,new Ce(f,u.node,Ce.BLACK,g,y)}},s=function(l){let c=null,d=null,u=t.length;const f=function(g,y){const x=u-g,_=u;u-=g;const p=i(x+1,_),v=t[x],w=n?n(v):v;m(new Ce(w,v.node,y,null,p))},m=function(g){c?(c.left=g,c=g):(d=g,c=g)};for(let g=0;g<l.count;++g){const y=l.nextBitIsOne(),x=Math.pow(2,l.count-(g+1));y?f(x,Ce.BLACK):(f(x,Ce.BLACK),f(x,Ce.RED))}return d},o=new WN(t.length),a=s(o);return new Ke(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cc;const Ar={};class qt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return S(Ar&&te,"ChildrenNode.ts has not been loaded"),Cc=Cc||new qt({".priority":Ar},{".priority":te}),Cc}get(e){const n=fi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ke?n:null}hasIndex(e){return jt(this.indexSet_,e.toString())}addIndex(e,n){S(e!==ii,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(U.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Ua(r,e.getCompare()):a=Ar;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const d=Object.assign({},this.indexes_);return d[l]=a,new qt(d,c)}addToIndexes(e,n){const r=Na(this.indexes_,(i,s)=>{const o=fi(this.indexSet_,s);if(S(o,"Missing index implementation for "+s),i===Ar)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(U.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Ua(a,o.getCompare())}else return Ar;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new U(e.name,a))),l.insert(e,e.node)}});return new qt(r,this.indexSet_)}removeFromIndexes(e,n){const r=Na(this.indexes_,i=>{if(i===Ar)return i;{const s=n.get(e.name);return s?i.remove(new U(e.name,s)):i}});return new qt(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bi;class P{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&qy(this.priorityNode_),this.children_.isEmpty()&&S(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Bi||(Bi=new P(new Ke(gh),null,qt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Bi}updatePriority(e){return this.children_.isEmpty()?this:new P(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Bi:n}}getChild(e){const n=L(e);return n===null?this:this.getImmediateChild(n).getChild(K(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(S(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new U(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Bi:this.priorityNode_;return new P(i,o,s)}}updateChild(e,n){const r=L(e);if(r===null)return n;{S(L(e)!==".priority"||Vn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(K(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(te,(o,a)=>{n[o]=a.val(e),r++,s&&P.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Ky(this.getPriority().val())+":"),this.forEachChild(te,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":ky(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new U(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new U(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new U(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,U.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,U.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===oo?-1:0}withIndex(e){if(e===ii||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new P(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===ii||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(te),i=n.getIterator(te);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ii?null:this.indexMap_.get(e.toString())}}P.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class VN extends P{constructor(){super(new Ke(gh),P.EMPTY_NODE,qt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return P.EMPTY_NODE}isEmpty(){return!1}}const oo=new VN;Object.defineProperties(U,{MIN:{value:new U(gi,P.EMPTY_NODE)},MAX:{value:new U(Er,oo)}});Gy.__EMPTY_NODE=P.EMPTY_NODE;Ee.__childrenNodeConstructor=P;UN(oo);$N(oo);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HN=!0;function ue(t,e=null){if(t===null)return P.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),S(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ee(n,ue(e))}if(!(t instanceof Array)&&HN){const n=[];let r=!1;if(je(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=ue(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new U(o,l)))}}),n.length===0)return P.EMPTY_NODE;const s=Ua(n,jN,o=>o.name,gh);if(r){const o=Ua(n,te.getCompare());return new P(s,ue(e),new qt({".priority":o},{".priority":te}))}else return new P(s,ue(e),qt.Default)}else{let n=P.EMPTY_NODE;return je(t,(r,i)=>{if(jt(t,r)&&r.substring(0,1)!=="."){const s=ue(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(ue(e))}}FN(ue);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GN extends Sl{constructor(e){super(),this.indexPath_=e,S(!j(e)&&L(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?br(e.name,n.name):s}makePost(e,n){const r=ue(e),i=P.EMPTY_NODE.updateChild(this.indexPath_,r);return new U(n,i)}maxPost(){const e=P.EMPTY_NODE.updateChild(this.indexPath_,oo);return new U(Er,e)}toString(){return Us(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KN extends Sl{compare(e,n){const r=e.node.compareTo(n.node);return r===0?br(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return U.MIN}maxPost(){return U.MAX}makePost(e,n){const r=ue(e);return new U(n,r)}toString(){return".value"}}const qN=new KN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xy(t){return{type:"value",snapshotNode:t}}function _i(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Fs(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function $s(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function QN(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){S(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Fs(n,a)):S(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(_i(n,r)):o.trackChildChange($s(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(te,(i,s)=>{n.hasChild(i)||r.trackChildChange(Fs(i,s))}),n.isLeafNode()||n.forEachChild(te,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange($s(i,s,o))}else r.trackChildChange(_i(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?P.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(e){this.indexedFilter_=new _h(e.getIndex()),this.index_=e.getIndex(),this.startPost_=zs.getStartPost_(e),this.endPost_=zs.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new U(n,r))||(r=P.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=P.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(P.EMPTY_NODE);const s=this;return n.forEachChild(te,(o,a)=>{s.matches(new U(o,a))||(i=i.updateImmediateChild(o,P.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YN{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new zs(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new U(n,r))||(r=P.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=P.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=P.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(P.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,P.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const u=this.index_.getCompare();o=(f,m)=>u(m,f)}else o=this.index_.getCompare();const a=e;S(a.numChildren()===this.limit_,"");const l=new U(n,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(l);if(a.hasChild(n)){const u=a.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const m=f==null?1:o(f,l);if(d&&!r.isEmpty()&&m>=0)return s!=null&&s.trackChildChange($s(n,r,u)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(Fs(n,u));const y=a.updateImmediateChild(n,P.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(s!=null&&s.trackChildChange(_i(f.name,f.node)),y.updateImmediateChild(f.name,f.node)):y}}else return r.isEmpty()?e:d&&o(c,l)>=0?(s!=null&&(s.trackChildChange(Fs(c.name,c.node)),s.trackChildChange(_i(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(c.name,P.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vh{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=te}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return S(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return S(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:gi}hasEnd(){return this.endSet_}getIndexEndValue(){return S(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return S(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Er}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return S(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===te}copy(){const e=new vh;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function XN(t){return t.loadsAllData()?new _h(t.getIndex()):t.hasLimit()?new YN(t):new zs(t)}function um(t){const e={};if(t.isDefault())return e;let n;if(t.index_===te?n="$priority":t.index_===qN?n="$value":t.index_===ii?n="$key":(S(t.index_ instanceof GN,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=me(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=me(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+me(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=me(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+me(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function dm(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==te&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa extends By{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=so("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(S(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Fa.getListenId_(e,r),a={};this.listens_[o]=a;const l=um(e._queryParams);this.restRequest_(s+".json",l,(c,d)=>{let u=d;if(c===404&&(u=null,c=null),c===null&&this.onDataUpdate_(s,u,!1,r),fi(this.listens_,o)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",i(f,null)}})}unlisten(e,n){const r=Fa.getListenId_(e,n);delete this.listens_[r]}get(e){const n=um(e._queryParams),r=e._path.toString(),i=new Bt;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ti(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Ds(a.responseText)}catch{Xe("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&Xe("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JN{constructor(){this.rootNode_=P.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $a(){return{value:null,children:new Map}}function Ri(t,e,n){if(j(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=L(e);t.children.has(r)||t.children.set(r,$a());const i=t.children.get(r);e=K(e),Ri(i,e,n)}}function zu(t,e){if(j(e))return t.value=null,t.children.clear(),!0;if(t.value!==null){if(t.value.isLeafNode())return!1;{const n=t.value;return t.value=null,n.forEachChild(te,(r,i)=>{Ri(t,new H(r),i)}),zu(t,e)}}else if(t.children.size>0){const n=L(e);return e=K(e),t.children.has(n)&&zu(t.children.get(n),e)&&t.children.delete(n),t.children.size===0}else return!0}function Bu(t,e,n){t.value!==null?n(e,t.value):ZN(t,(r,i)=>{const s=new H(e.toString()+"/"+r);Bu(i,s,n)})}function ZN(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eb{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&je(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hm=10*1e3,tb=30*1e3,nb=5*60*1e3;class rb{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new eb(e);const r=hm+(tb-hm)*Math.random();cs(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;je(e,(i,s)=>{s>0&&jt(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),cs(this.reportStats_.bind(this),Math.floor(Math.random()*2*nb))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var yt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(yt||(yt={}));function Jy(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function yh(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function wh(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=yt.ACK_USER_WRITE,this.source=Jy()}operationForChild(e){if(j(this.path)){if(this.affectedTree.value!=null)return S(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new H(e));return new za(z(),n,this.revert)}}else return S(L(this.path)===e,"operationForChild called for unrelated child."),new za(K(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e,n){this.source=e,this.path=n,this.type=yt.LISTEN_COMPLETE}operationForChild(e){return j(this.path)?new Bs(this.source,z()):new Bs(this.source,K(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=yt.OVERWRITE}operationForChild(e){return j(this.path)?new xr(this.source,z(),this.snap.getImmediateChild(e)):new xr(this.source,K(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=yt.MERGE}operationForChild(e){if(j(this.path)){const n=this.children.subtree(new H(e));return n.isEmpty()?null:n.value?new xr(this.source,z(),n.value):new Ws(this.source,z(),n)}else return S(L(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ws(this.source,K(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(j(e))return this.isFullyInitialized()&&!this.filtered_;const n=L(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ib{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function sb(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(QN(o.childName,o.snapshotNode))}),Wi(t,i,"child_removed",e,r,n),Wi(t,i,"child_added",e,r,n),Wi(t,i,"child_moved",s,r,n),Wi(t,i,"child_changed",e,r,n),Wi(t,i,"value",e,r,n),i}function Wi(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>ab(t,a,l)),o.forEach(a=>{const l=ob(t,a,s);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function ob(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function ab(t,e,n){if(e.childName==null||n.childName==null)throw Ii("Should only compare child_ events.");const r=new U(e.childName,e.snapshotNode),i=new U(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Il(t,e){return{eventCache:t,serverCache:e}}function us(t,e,n,r){return Il(new Hn(e,n,r),t.serverCache)}function Zy(t,e,n,r){return Il(t.eventCache,new Hn(e,n,r))}function Ba(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function kr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sc;const lb=()=>(Sc||(Sc=new Ke(GT)),Sc);class Y{constructor(e,n=lb()){this.value=e,this.children=n}static fromObject(e){let n=new Y(null);return je(e,(r,i)=>{n=n.set(new H(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:z(),value:this.value};if(j(e))return null;{const r=L(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(K(e),n);return s!=null?{path:de(new H(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(j(e))return this;{const n=L(e),r=this.children.get(n);return r!==null?r.subtree(K(e)):new Y(null)}}set(e,n){if(j(e))return new Y(n,this.children);{const r=L(e),s=(this.children.get(r)||new Y(null)).set(K(e),n),o=this.children.insert(r,s);return new Y(this.value,o)}}remove(e){if(j(e))return this.children.isEmpty()?new Y(null):new Y(null,this.children);{const n=L(e),r=this.children.get(n);if(r){const i=r.remove(K(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new Y(null):new Y(this.value,s)}else return this}}get(e){if(j(e))return this.value;{const n=L(e),r=this.children.get(n);return r?r.get(K(e)):null}}setTree(e,n){if(j(e))return n;{const r=L(e),s=(this.children.get(r)||new Y(null)).setTree(K(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new Y(this.value,o)}}fold(e){return this.fold_(z(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(de(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,z(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(j(e))return null;{const s=L(e),o=this.children.get(s);return o?o.findOnPath_(K(e),de(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,z(),n)}foreachOnPath_(e,n,r){if(j(e))return this;{this.value&&r(n,this.value);const i=L(e),s=this.children.get(i);return s?s.foreachOnPath_(K(e),de(n,i),r):new Y(null)}}foreach(e){this.foreach_(z(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(de(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.writeTree_=e}static empty(){return new xt(new Y(null))}}function ds(t,e,n){if(j(e))return new xt(new Y(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=$e(i,e);return s=s.updateChild(o,n),new xt(t.writeTree_.set(i,s))}else{const i=new Y(n),s=t.writeTree_.setTree(e,i);return new xt(s)}}}function fm(t,e,n){let r=t;return je(n,(i,s)=>{r=ds(r,de(e,i),s)}),r}function pm(t,e){if(j(e))return xt.empty();{const n=t.writeTree_.setTree(e,new Y(null));return new xt(n)}}function Wu(t,e){return Rr(t,e)!=null}function Rr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild($e(n.path,e)):null}function mm(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(te,(r,i)=>{e.push(new U(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new U(r,i.value))}),e}function Un(t,e){if(j(e))return t;{const n=Rr(t,e);return n!=null?new xt(new Y(n)):new xt(t.writeTree_.subtree(e))}}function Vu(t){return t.writeTree_.isEmpty()}function vi(t,e){return e0(z(),t.writeTree_,e)}function e0(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(S(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=e0(de(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(de(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tl(t,e){return i0(e,t)}function cb(t,e,n,r,i){S(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=ds(t.visibleWrites,e,n)),t.lastWriteId=r}function ub(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function db(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);S(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&hb(a,r.path)?i=!1:ct(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return fb(t),!0;if(r.snap)t.visibleWrites=pm(t.visibleWrites,r.path);else{const a=r.children;je(a,l=>{t.visibleWrites=pm(t.visibleWrites,de(r.path,l))})}return!0}else return!1}function hb(t,e){if(t.snap)return ct(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&ct(de(t.path,n),e))return!0;return!1}function fb(t){t.visibleWrites=t0(t.allWrites,pb,z()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function pb(t){return t.visible}function t0(t,e,n){let r=xt.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)ct(n,o)?(a=$e(n,o),r=ds(r,a,s.snap)):ct(o,n)&&(a=$e(o,n),r=ds(r,z(),s.snap.getChild(a)));else if(s.children){if(ct(n,o))a=$e(n,o),r=fm(r,a,s.children);else if(ct(o,n))if(a=$e(o,n),j(a))r=fm(r,z(),s.children);else{const l=fi(s.children,L(a));if(l){const c=l.getChild(K(a));r=ds(r,z(),c)}}}else throw Ii("WriteRecord should have .snap or .children")}}return r}function n0(t,e,n,r,i){if(!r&&!i){const s=Rr(t.visibleWrites,e);if(s!=null)return s;{const o=Un(t.visibleWrites,e);if(Vu(o))return n;if(n==null&&!Wu(o,z()))return null;{const a=n||P.EMPTY_NODE;return vi(o,a)}}}else{const s=Un(t.visibleWrites,e);if(!i&&Vu(s))return n;if(!i&&n==null&&!Wu(s,z()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(ct(c.path,e)||ct(e,c.path))},a=t0(t.allWrites,o,e),l=n||P.EMPTY_NODE;return vi(a,l)}}}function mb(t,e,n){let r=P.EMPTY_NODE;const i=Rr(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(te,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Un(t.visibleWrites,e);return n.forEachChild(te,(o,a)=>{const l=vi(Un(s,new H(o)),a);r=r.updateImmediateChild(o,l)}),mm(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Un(t.visibleWrites,e);return mm(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function gb(t,e,n,r,i){S(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=de(e,n);if(Wu(t.visibleWrites,s))return null;{const o=Un(t.visibleWrites,s);return Vu(o)?i.getChild(n):vi(o,i.getChild(n))}}function _b(t,e,n,r){const i=de(e,n),s=Rr(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Un(t.visibleWrites,i);return vi(o,r.getNode().getImmediateChild(n))}else return null}function vb(t,e){return Rr(t.visibleWrites,e)}function yb(t,e,n,r,i,s,o){let a;const l=Un(t.visibleWrites,e),c=Rr(l,z());if(c!=null)a=c;else if(n!=null)a=vi(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],u=o.getCompare(),f=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let m=f.getNext();for(;m&&d.length<i;)u(m,r)!==0&&d.push(m),m=f.getNext();return d}else return[]}function wb(){return{visibleWrites:xt.empty(),allWrites:[],lastWriteId:-1}}function Wa(t,e,n,r){return n0(t.writeTree,t.treePath,e,n,r)}function Eh(t,e){return mb(t.writeTree,t.treePath,e)}function gm(t,e,n,r){return gb(t.writeTree,t.treePath,e,n,r)}function Va(t,e){return vb(t.writeTree,de(t.treePath,e))}function Eb(t,e,n,r,i,s){return yb(t.writeTree,t.treePath,e,n,r,i,s)}function xh(t,e,n){return _b(t.writeTree,t.treePath,e,n)}function r0(t,e){return i0(de(t.treePath,e),t.writeTree)}function i0(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xb{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;S(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),S(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,$s(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Fs(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,_i(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,$s(r,e.snapshotNode,i.oldSnap));else throw Ii("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kb{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const s0=new kb;class kh{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Hn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return xh(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:kr(this.viewCache_),s=Eb(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cb(t){return{filter:t}}function Sb(t,e){S(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),S(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function Ib(t,e,n,r,i){const s=new xb;let o,a;if(n.type===yt.OVERWRITE){const c=n;c.source.fromUser?o=Hu(t,e,c.path,c.snap,r,i,s):(S(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!j(c.path),o=Ha(t,e,c.path,c.snap,r,i,a,s))}else if(n.type===yt.MERGE){const c=n;c.source.fromUser?o=Nb(t,e,c.path,c.children,r,i,s):(S(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Gu(t,e,c.path,c.children,r,i,a,s))}else if(n.type===yt.ACK_USER_WRITE){const c=n;c.revert?o=Pb(t,e,c.path,r,i,s):o=bb(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===yt.LISTEN_COMPLETE)o=Rb(t,e,n.path,r,s);else throw Ii("Unknown operation type: "+n.type);const l=s.getChanges();return Tb(e,o,l),{viewCache:o,changes:l}}function Tb(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Ba(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(Xy(Ba(e)))}}function o0(t,e,n,r,i,s){const o=e.eventCache;if(Va(r,n)!=null)return e;{let a,l;if(j(n))if(S(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=kr(e),d=c instanceof P?c:P.EMPTY_NODE,u=Eh(r,d);a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const c=Wa(r,kr(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=L(n);if(c===".priority"){S(Vn(n)===1,"Can't have a priority with additional path components");const d=o.getNode();l=e.serverCache.getNode();const u=gm(r,n,d,l);u!=null?a=t.filter.updatePriority(d,u):a=o.getNode()}else{const d=K(n);let u;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const f=gm(r,n,o.getNode(),l);f!=null?u=o.getNode().getImmediateChild(c).updateChild(d,f):u=o.getNode().getImmediateChild(c)}else u=xh(r,c,e.serverCache);u!=null?a=t.filter.updateChild(o.getNode(),c,u,d,i,s):a=o.getNode()}}return us(e,a,o.isFullyInitialized()||j(n),t.filter.filtersNodes())}}function Ha(t,e,n,r,i,s,o,a){const l=e.serverCache;let c;const d=o?t.filter:t.filter.getIndexedFilter();if(j(n))c=d.updateFullNode(l.getNode(),r,null);else if(d.filtersNodes()&&!l.isFiltered()){const m=l.getNode().updateChild(n,r);c=d.updateFullNode(l.getNode(),m,null)}else{const m=L(n);if(!l.isCompleteForPath(n)&&Vn(n)>1)return e;const g=K(n),x=l.getNode().getImmediateChild(m).updateChild(g,r);m===".priority"?c=d.updatePriority(l.getNode(),x):c=d.updateChild(l.getNode(),m,x,g,s0,null)}const u=Zy(e,c,l.isFullyInitialized()||j(n),d.filtersNodes()),f=new kh(i,u,s);return o0(t,u,n,i,f,a)}function Hu(t,e,n,r,i,s,o){const a=e.eventCache;let l,c;const d=new kh(i,e,s);if(j(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=us(e,c,!0,t.filter.filtersNodes());else{const u=L(n);if(u===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),l=us(e,c,a.isFullyInitialized(),a.isFiltered());else{const f=K(n),m=a.getNode().getImmediateChild(u);let g;if(j(f))g=r;else{const y=d.getCompleteChild(u);y!=null?fh(f)===".priority"&&y.getChild(Vy(f)).isEmpty()?g=y:g=y.updateChild(f,r):g=P.EMPTY_NODE}if(m.equals(g))l=e;else{const y=t.filter.updateChild(a.getNode(),u,g,f,d,o);l=us(e,y,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function _m(t,e){return t.eventCache.isCompleteForChild(e)}function Nb(t,e,n,r,i,s,o){let a=e;return r.foreach((l,c)=>{const d=de(n,l);_m(e,L(d))&&(a=Hu(t,a,d,c,i,s,o))}),r.foreach((l,c)=>{const d=de(n,l);_m(e,L(d))||(a=Hu(t,a,d,c,i,s,o))}),a}function vm(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Gu(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;j(n)?c=r:c=new Y(null).setTree(n,r);const d=e.serverCache.getNode();return c.children.inorderTraversal((u,f)=>{if(d.hasChild(u)){const m=e.serverCache.getNode().getImmediateChild(u),g=vm(t,m,f);l=Ha(t,l,new H(u),g,i,s,o,a)}}),c.children.inorderTraversal((u,f)=>{const m=!e.serverCache.isCompleteForChild(u)&&f.value===null;if(!d.hasChild(u)&&!m){const g=e.serverCache.getNode().getImmediateChild(u),y=vm(t,g,f);l=Ha(t,l,new H(u),y,i,s,o,a)}}),l}function bb(t,e,n,r,i,s,o){if(Va(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(j(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Ha(t,e,n,l.getNode().getChild(n),i,s,a,o);if(j(n)){let c=new Y(null);return l.getNode().forEachChild(ii,(d,u)=>{c=c.set(new H(d),u)}),Gu(t,e,n,c,i,s,a,o)}else return e}else{let c=new Y(null);return r.foreach((d,u)=>{const f=de(n,d);l.isCompleteForPath(f)&&(c=c.set(d,l.getNode().getChild(f)))}),Gu(t,e,n,c,i,s,a,o)}}function Rb(t,e,n,r,i){const s=e.serverCache,o=Zy(e,s.getNode(),s.isFullyInitialized()||j(n),s.isFiltered());return o0(t,o,n,r,s0,i)}function Pb(t,e,n,r,i,s){let o;if(Va(r,n)!=null)return e;{const a=new kh(r,e,i),l=e.eventCache.getNode();let c;if(j(n)||L(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=Wa(r,kr(e));else{const u=e.serverCache.getNode();S(u instanceof P,"serverChildren would be complete if leaf node"),d=Eh(r,u)}d=d,c=t.filter.updateFullNode(l,d,s)}else{const d=L(n);let u=xh(r,d,e.serverCache);u==null&&e.serverCache.isCompleteForChild(d)&&(u=l.getImmediateChild(d)),u!=null?c=t.filter.updateChild(l,d,u,K(n),a,s):e.eventCache.getNode().hasChild(d)?c=t.filter.updateChild(l,d,P.EMPTY_NODE,K(n),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Wa(r,kr(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||Va(r,z())!=null,us(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ab{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new _h(r.getIndex()),s=XN(r);this.processor_=Cb(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(P.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(P.EMPTY_NODE,a.getNode(),null),d=new Hn(l,o.isFullyInitialized(),i.filtersNodes()),u=new Hn(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=Il(u,d),this.eventGenerator_=new ib(this.query_)}get query(){return this.query_}}function Ob(t){return t.viewCache_.serverCache.getNode()}function Db(t){return Ba(t.viewCache_)}function Lb(t,e){const n=kr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!j(e)&&!n.getImmediateChild(L(e)).isEmpty())?n.getChild(e):null}function ym(t){return t.eventRegistrations_.length===0}function Mb(t,e){t.eventRegistrations_.push(e)}function wm(t,e,n){const r=[];if(n){S(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function Em(t,e,n,r){e.type===yt.MERGE&&e.source.queryId!==null&&(S(kr(t.viewCache_),"We should always have a full cache before handling merges"),S(Ba(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=Ib(t.processor_,i,e,n,r);return Sb(t.processor_,s.viewCache),S(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,a0(t,s.changes,s.viewCache.eventCache.getNode(),null)}function jb(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(te,(s,o)=>{r.push(_i(s,o))}),n.isFullyInitialized()&&r.push(Xy(n.getNode())),a0(t,r,n.getNode(),e)}function a0(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return sb(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ga;class l0{constructor(){this.views=new Map}}function Ub(t){S(!Ga,"__referenceConstructor has already been defined"),Ga=t}function Fb(){return S(Ga,"Reference.ts has not been loaded"),Ga}function $b(t){return t.views.size===0}function Ch(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return S(s!=null,"SyncTree gave us an op for an invalid query."),Em(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Em(o,e,n,r));return s}}function c0(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=Wa(n,i?r:null),l=!1;a?l=!0:r instanceof P?(a=Eh(n,r),l=!1):(a=P.EMPTY_NODE,l=!1);const c=Il(new Hn(a,l,!1),new Hn(r,i,!1));return new Ab(e,c)}return o}function zb(t,e,n,r,i,s){const o=c0(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),Mb(o,n),jb(o,n)}function Bb(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=Gn(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(wm(c,n,r)),ym(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(wm(l,n,r)),ym(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!Gn(t)&&s.push(new(Fb())(e._repo,e._path)),{removed:s,events:o}}function u0(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Fn(t,e){let n=null;for(const r of t.views.values())n=n||Lb(r,e);return n}function d0(t,e){if(e._queryParams.loadsAllData())return Nl(t);{const r=e._queryIdentifier;return t.views.get(r)}}function h0(t,e){return d0(t,e)!=null}function Gn(t){return Nl(t)!=null}function Nl(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ka;function Wb(t){S(!Ka,"__referenceConstructor has already been defined"),Ka=t}function Vb(){return S(Ka,"Reference.ts has not been loaded"),Ka}let Hb=1;class xm{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Y(null),this.pendingWriteTree_=wb(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function f0(t,e,n,r,i){return cb(t.pendingWriteTree_,e,n,r,i),i?lo(t,new xr(Jy(),e,n)):[]}function cr(t,e,n=!1){const r=ub(t.pendingWriteTree_,e);if(db(t.pendingWriteTree_,e)){let s=new Y(null);return r.snap!=null?s=s.set(z(),!0):je(r.children,o=>{s=s.set(new H(o),!0)}),lo(t,new za(r.path,s,n))}else return[]}function ao(t,e,n){return lo(t,new xr(yh(),e,n))}function Gb(t,e,n){const r=Y.fromObject(n);return lo(t,new Ws(yh(),e,r))}function Kb(t,e){return lo(t,new Bs(yh(),e))}function qb(t,e,n){const r=Ih(t,n);if(r){const i=Th(r),s=i.path,o=i.queryId,a=$e(s,e),l=new Bs(wh(o),a);return Nh(t,s,l)}else return[]}function qa(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||h0(o,e))){const l=Bb(o,e,n,r);$b(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=l.removed;if(a=l.events,!i){const d=c.findIndex(f=>f._queryParams.loadsAllData())!==-1,u=t.syncPointTree_.findOnPath(s,(f,m)=>Gn(m));if(d&&!u){const f=t.syncPointTree_.subtree(s);if(!f.isEmpty()){const m=Xb(f);for(let g=0;g<m.length;++g){const y=m[g],x=y.query,_=_0(t,y);t.listenProvider_.startListening(hs(x),Vs(t,x),_.hashFn,_.onComplete)}}}!u&&c.length>0&&!r&&(d?t.listenProvider_.stopListening(hs(e),null):c.forEach(f=>{const m=t.queryToTagMap.get(bl(f));t.listenProvider_.stopListening(hs(f),m)}))}Jb(t,c)}return a}function p0(t,e,n,r){const i=Ih(t,r);if(i!=null){const s=Th(i),o=s.path,a=s.queryId,l=$e(o,e),c=new xr(wh(a),l,n);return Nh(t,o,c)}else return[]}function Qb(t,e,n,r){const i=Ih(t,r);if(i){const s=Th(i),o=s.path,a=s.queryId,l=$e(o,e),c=Y.fromObject(n),d=new Ws(wh(a),l,c);return Nh(t,o,d)}else return[]}function Ku(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,m)=>{const g=$e(f,i);s=s||Fn(m,g),o=o||Gn(m)});let a=t.syncPointTree_.get(i);a?(o=o||Gn(a),s=s||Fn(a,z())):(a=new l0,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=P.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((m,g)=>{const y=Fn(g,z());y&&(s=s.updateImmediateChild(m,y))}));const c=h0(a,e);if(!c&&!e._queryParams.loadsAllData()){const f=bl(e);S(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const m=Zb();t.queryToTagMap.set(f,m),t.tagToQueryMap.set(m,f)}const d=Tl(t.pendingWriteTree_,i);let u=zb(a,e,n,d,s,l);if(!c&&!o&&!r){const f=d0(a,e);u=u.concat(eR(t,e,f))}return u}function Sh(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=$e(o,e),c=Fn(a,l);if(c)return c});return n0(i,e,s,n,!0)}function Yb(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(c,d)=>{const u=$e(c,n);r=r||Fn(d,u)});let i=t.syncPointTree_.get(n);i?r=r||Fn(i,z()):(i=new l0,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new Hn(r,!0,!1):null,a=Tl(t.pendingWriteTree_,e._path),l=c0(i,e,a,s?o.getNode():P.EMPTY_NODE,s);return Db(l)}function lo(t,e){return m0(e,t.syncPointTree_,null,Tl(t.pendingWriteTree_,z()))}function m0(t,e,n,r){if(j(t.path))return g0(t,e,n,r);{const i=e.get(z());n==null&&i!=null&&(n=Fn(i,z()));let s=[];const o=L(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,d=r0(r,o);s=s.concat(m0(a,l,c,d))}return i&&(s=s.concat(Ch(i,t,r,n))),s}}function g0(t,e,n,r){const i=e.get(z());n==null&&i!=null&&(n=Fn(i,z()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=r0(r,o),d=t.operationForChild(o);d&&(s=s.concat(g0(d,a,l,c)))}),i&&(s=s.concat(Ch(i,t,r,n))),s}function _0(t,e){const n=e.query,r=Vs(t,n);return{hashFn:()=>(Ob(e)||P.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?qb(t,n._path,r):Kb(t,n._path);{const s=QT(i,n);return qa(t,n,null,s)}}}}function Vs(t,e){const n=bl(e);return t.queryToTagMap.get(n)}function bl(t){return t._path.toString()+"$"+t._queryIdentifier}function Ih(t,e){return t.tagToQueryMap.get(e)}function Th(t){const e=t.indexOf("$");return S(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new H(t.substr(0,e))}}function Nh(t,e,n){const r=t.syncPointTree_.get(e);S(r,"Missing sync point for query tag that we're tracking");const i=Tl(t.pendingWriteTree_,e);return Ch(r,n,i,null)}function Xb(t){return t.fold((e,n,r)=>{if(n&&Gn(n))return[Nl(n)];{let i=[];return n&&(i=u0(n)),je(r,(s,o)=>{i=i.concat(o)}),i}})}function hs(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Vb())(t._repo,t._path):t}function Jb(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=bl(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function Zb(){return Hb++}function eR(t,e,n){const r=e._path,i=Vs(t,e),s=_0(t,n),o=t.listenProvider_.startListening(hs(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)S(!Gn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,d,u)=>{if(!j(c)&&d&&Gn(d))return[Nl(d).query];{let f=[];return d&&(f=f.concat(u0(d).map(m=>m.query))),je(u,(m,g)=>{f=f.concat(g)}),f}});for(let c=0;c<l.length;++c){const d=l[c];t.listenProvider_.stopListening(hs(d),Vs(t,d))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new bh(n)}node(){return this.node_}}class Rh{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=de(this.path_,e);return new Rh(this.syncTree_,n)}node(){return Sh(this.syncTree_,this.path_)}}const tR=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},km=function(t,e,n){if(!t||typeof t!="object")return t;if(S(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return nR(t[".sv"],e,n);if(typeof t[".sv"]=="object")return rR(t[".sv"],e);S(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},nR=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:S(!1,"Unexpected server value: "+t)}},rR=function(t,e,n){t.hasOwnProperty("increment")||S(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&S(!1,"Unexpected increment value: "+r);const i=e.node();if(S(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},iR=function(t,e,n,r){return Ph(e,new Rh(n,t),r)},v0=function(t,e,n){return Ph(t,new bh(e),n)};function Ph(t,e,n){const r=t.getPriority().val(),i=km(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=km(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Ee(a,ue(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Ee(i))),o.forEachChild(te,(a,l)=>{const c=Ph(l,e.getImmediateChild(a),n);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Oh(t,e){let n=e instanceof H?e:new H(e),r=t,i=L(n);for(;i!==null;){const s=fi(r.node.children,i)||{children:{},childCount:0};r=new Ah(i,r,s),n=K(n),i=L(n)}return r}function Pi(t){return t.node.value}function y0(t,e){t.node.value=e,qu(t)}function w0(t){return t.node.childCount>0}function sR(t){return Pi(t)===void 0&&!w0(t)}function Rl(t,e){je(t.node.children,(n,r)=>{e(new Ah(n,t,r))})}function E0(t,e,n,r){n&&e(t),Rl(t,i=>{E0(i,e,!0)})}function oR(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function co(t){return new H(t.parent===null?t.name:co(t.parent)+"/"+t.name)}function qu(t){t.parent!==null&&aR(t.parent,t.name,t)}function aR(t,e,n){const r=sR(n),i=jt(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,qu(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,qu(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lR=/[\[\].#$\/\u0000-\u001F\u007F]/,cR=/[\[\].#$\u0000-\u001F\u007F]/,Ic=10*1024*1024,Dh=function(t){return typeof t=="string"&&t.length!==0&&!lR.test(t)},x0=function(t){return typeof t=="string"&&t.length!==0&&!cR.test(t)},uR=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),x0(t)},k0=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Cl(t)||t&&typeof t=="object"&&jt(t,".sv")},Qa=function(t,e,n,r){r&&e===void 0||Pl(pi(t,"value"),e,n)},Pl=function(t,e,n){const r=n instanceof H?new bN(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+ir(r));if(typeof e=="function")throw new Error(t+"contains a function "+ir(r)+" with contents = "+e.toString());if(Cl(e))throw new Error(t+"contains "+e.toString()+" "+ir(r));if(typeof e=="string"&&e.length>Ic/3&&yl(e)>Ic)throw new Error(t+"contains a string greater than "+Ic+" utf8 bytes "+ir(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(je(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Dh(o)))throw new Error(t+" contains an invalid key ("+o+") "+ir(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);RN(r,o),Pl(t,a,r),PN(r)}),i&&s)throw new Error(t+' contains ".value" child '+ir(r)+" in addition to actual children.")}},dR=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=Us(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!Dh(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(NN);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&ct(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},hR=function(t,e,n,r){const i=pi(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];je(e,(o,a)=>{const l=new H(o);if(Pl(i,a,de(n,l)),fh(l)===".priority"&&!k0(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(l)}),dR(i,s)},fR=function(t,e,n){if(Cl(e))throw new Error(pi(t,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!k0(e))throw new Error(pi(t,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},C0=function(t,e,n,r){if(!x0(n))throw new Error(pi(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},pR=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),C0(t,e,n)},Kr=function(t,e){if(L(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},mR=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Dh(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!uR(n))throw new Error(pi(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gR{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Lh(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!ph(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function S0(t,e,n){Lh(t,n),I0(t,r=>ph(r,e))}function Mt(t,e,n){Lh(t,n),I0(t,r=>ct(r,e)||ct(e,r))}function I0(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(_R(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function _R(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();ls&&be("event: "+n.toString()),bi(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vR="repo_interrupt",yR=25;class wR{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new gR,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=$a(),this.transactionQueueTree_=new Ah,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function ER(t,e,n){if(t.stats_=dh(t.repoInfo_),t.forceRestClient_||ZT())t.server_=new Fa(t.repoInfo_,(r,i,s,o)=>{Cm(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Sm(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{me(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Yt(t.repoInfo_,e,(r,i,s,o)=>{Cm(t,r,i,s,o)},r=>{Sm(t,r)},r=>{xR(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=iN(t.repoInfo_,()=>new rb(t.stats_,t.server_)),t.infoData_=new JN,t.infoSyncTree_=new xm({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=ao(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),jh(t,"connected",!1),t.serverSyncTree_=new xm({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const c=o(a,l);Mt(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function T0(t){const n=t.infoData_.getNode(new H(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Mh(t){return tR({timestamp:T0(t)})}function Cm(t,e,n,r,i){t.dataUpdateCount++;const s=new H(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=Na(n,c=>ue(c));o=Qb(t.serverSyncTree_,s,l,i)}else{const l=ue(n);o=p0(t.serverSyncTree_,s,l,i)}else if(r){const l=Na(n,c=>ue(c));o=Gb(t.serverSyncTree_,s,l)}else{const l=ue(n);o=ao(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=Ol(t,s)),Mt(t.eventQueue_,a,o)}function Sm(t,e){jh(t,"connected",e),e===!1&&SR(t)}function xR(t,e){je(e,(n,r)=>{jh(t,n,r)})}function jh(t,e,n){const r=new H("/.info/"+e),i=ue(n);t.infoData_.updateSnapshot(r,i);const s=ao(t.infoSyncTree_,r,i);Mt(t.eventQueue_,r,s)}function N0(t){return t.nextWriteId_++}function kR(t,e,n){const r=Yb(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=ue(i).withIndex(e._queryParams.getIndex());Ku(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=ao(t.serverSyncTree_,e._path,s);else{const a=Vs(t.serverSyncTree_,e);o=p0(t.serverSyncTree_,e._path,s,a)}return Mt(t.eventQueue_,e._path,o),qa(t.serverSyncTree_,e,n,null,!0),s},i=>(Al(t,"get for query "+me(e)+" failed: "+i),Promise.reject(new Error(i))))}function CR(t,e,n,r,i){Al(t,"set",{path:e.toString(),value:n,priority:r});const s=Mh(t),o=ue(n,r),a=Sh(t.serverSyncTree_,e),l=v0(o,a,s),c=N0(t),d=f0(t.serverSyncTree_,e,l,c,!0);Lh(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(f,m)=>{const g=f==="ok";g||Xe("set at "+e+" failed: "+f);const y=cr(t.serverSyncTree_,c,!g);Mt(t.eventQueue_,e,y),yi(t,i,f,m)});const u=O0(t,e);Ol(t,u),Mt(t.eventQueue_,u,[])}function SR(t){Al(t,"onDisconnectEvents");const e=Mh(t),n=$a();Bu(t.onDisconnect_,z(),(i,s)=>{const o=iR(i,s,t.serverSyncTree_,e);Ri(n,i,o)});let r=[];Bu(n,z(),(i,s)=>{r=r.concat(ao(t.serverSyncTree_,i,s));const o=O0(t,i);Ol(t,o)}),t.onDisconnect_=$a(),Mt(t.eventQueue_,z(),r)}function IR(t,e,n){t.server_.onDisconnectCancel(e.toString(),(r,i)=>{r==="ok"&&zu(t.onDisconnect_,e),yi(t,n,r,i)})}function Im(t,e,n,r){const i=ue(n);t.server_.onDisconnectPut(e.toString(),i.val(!0),(s,o)=>{s==="ok"&&Ri(t.onDisconnect_,e,i),yi(t,r,s,o)})}function TR(t,e,n,r,i){const s=ue(n,r);t.server_.onDisconnectPut(e.toString(),s.val(!0),(o,a)=>{o==="ok"&&Ri(t.onDisconnect_,e,s),yi(t,i,o,a)})}function NR(t,e,n,r){if(Ta(n)){be("onDisconnect().update() called with empty data.  Don't do anything."),yi(t,r,"ok",void 0);return}t.server_.onDisconnectMerge(e.toString(),n,(i,s)=>{i==="ok"&&je(n,(o,a)=>{const l=ue(a);Ri(t.onDisconnect_,de(e,o),l)}),yi(t,r,i,s)})}function bR(t,e,n){let r;L(e._path)===".info"?r=Ku(t.infoSyncTree_,e,n):r=Ku(t.serverSyncTree_,e,n),S0(t.eventQueue_,e._path,r)}function Tm(t,e,n){let r;L(e._path)===".info"?r=qa(t.infoSyncTree_,e,n):r=qa(t.serverSyncTree_,e,n),S0(t.eventQueue_,e._path,r)}function RR(t){t.persistentConnection_&&t.persistentConnection_.interrupt(vR)}function Al(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),be(n,...e)}function yi(t,e,n,r){e&&bi(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function b0(t,e,n){return Sh(t.serverSyncTree_,e,n)||P.EMPTY_NODE}function Uh(t,e=t.transactionQueueTree_){if(e||Dl(t,e),Pi(e)){const n=P0(t,e);S(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&PR(t,co(e),n)}else w0(e)&&Rl(e,n=>{Uh(t,n)})}function PR(t,e,n){const r=n.map(c=>c.currentWriteId),i=b0(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const d=n[c];S(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const u=$e(e,d.path);s=s.updateChild(u,d.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Al(t,"transaction put response",{path:l.toString(),status:c});let d=[];if(c==="ok"){const u=[];for(let f=0;f<n.length;f++)n[f].status=2,d=d.concat(cr(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&u.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Dl(t,Oh(t.transactionQueueTree_,e)),Uh(t,t.transactionQueueTree_),Mt(t.eventQueue_,e,d);for(let f=0;f<u.length;f++)bi(u[f])}else{if(c==="datastale")for(let u=0;u<n.length;u++)n[u].status===3?n[u].status=4:n[u].status=0;else{Xe("transaction at "+l.toString()+" failed: "+c);for(let u=0;u<n.length;u++)n[u].status=4,n[u].abortReason=c}Ol(t,e)}},o)}function Ol(t,e){const n=R0(t,e),r=co(n),i=P0(t,n);return AR(t,i,r),r}function AR(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=$e(n,l.path);let d=!1,u;if(S(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)d=!0,u=l.abortReason,i=i.concat(cr(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=yR)d=!0,u="maxretry",i=i.concat(cr(t.serverSyncTree_,l.currentWriteId,!0));else{const f=b0(t,l.path,o);l.currentInputSnapshot=f;const m=e[a].update(f.val());if(m!==void 0){Pl("transaction failed: Data returned ",m,l.path);let g=ue(m);typeof m=="object"&&m!=null&&jt(m,".priority")||(g=g.updatePriority(f.getPriority()));const x=l.currentWriteId,_=Mh(t),p=v0(g,f,_);l.currentOutputSnapshotRaw=g,l.currentOutputSnapshotResolved=p,l.currentWriteId=N0(t),o.splice(o.indexOf(x),1),i=i.concat(f0(t.serverSyncTree_,l.path,p,l.currentWriteId,l.applyLocally)),i=i.concat(cr(t.serverSyncTree_,x,!0))}else d=!0,u="nodata",i=i.concat(cr(t.serverSyncTree_,l.currentWriteId,!0))}Mt(t.eventQueue_,n,i),i=[],d&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(u==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(u),!1,null))))}Dl(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)bi(r[a]);Uh(t,t.transactionQueueTree_)}function R0(t,e){let n,r=t.transactionQueueTree_;for(n=L(e);n!==null&&Pi(r)===void 0;)r=Oh(r,n),e=K(e),n=L(e);return r}function P0(t,e){const n=[];return A0(t,e,n),n.sort((r,i)=>r.order-i.order),n}function A0(t,e,n){const r=Pi(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Rl(e,i=>{A0(t,i,n)})}function Dl(t,e){const n=Pi(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,y0(e,n.length>0?n:void 0)}Rl(e,r=>{Dl(t,r)})}function O0(t,e){const n=co(R0(t,e)),r=Oh(t.transactionQueueTree_,e);return oR(r,i=>{Tc(t,i)}),Tc(t,r),E0(r,i=>{Tc(t,i)}),n}function Tc(t,e){const n=Pi(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(S(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(S(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(cr(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?y0(e,void 0):n.length=s+1,Mt(t.eventQueue_,co(e),i);for(let o=0;o<r.length;o++)bi(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OR(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function DR(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Xe(`Invalid query segment '${n}' in query '${t}'`)}return e}const Nm=function(t,e){const n=LR(t),r=n.namespace;n.domain==="firebase.com"&&an(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&an("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||VT();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Ly(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new H(n.pathString)}},LR=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let d=t.indexOf("/");d===-1&&(d=t.length);let u=t.indexOf("?");u===-1&&(u=t.length),e=t.substring(0,Math.min(d,u)),d<u&&(i=OR(t.substring(d,u)));const f=DR(t.substring(Math.min(t.length,u)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const m=e.slice(0,c);if(m.toLowerCase()==="localhost")n="localhost";else if(m.split(".").length<=2)n=m;else{const g=e.indexOf(".");r=e.substring(0,g).toLowerCase(),n=e.substring(g+1),s=r}"ns"in f&&(s=f.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bm="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",MR=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=bm.charAt(n%64),n=Math.floor(n/64);S(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=bm.charAt(e[i]);return S(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jR{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+me(this.snapshot.exportVal())}}class UR{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D0{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return S(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FR{constructor(e,n){this._repo=e,this._path=n}cancel(){const e=new Bt;return IR(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){Kr("OnDisconnect.remove",this._path);const e=new Bt;return Im(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){Kr("OnDisconnect.set",this._path),Qa("OnDisconnect.set",e,this._path,!1);const n=new Bt;return Im(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}setWithPriority(e,n){Kr("OnDisconnect.setWithPriority",this._path),Qa("OnDisconnect.setWithPriority",e,this._path,!1),fR("OnDisconnect.setWithPriority",n);const r=new Bt;return TR(this._repo,this._path,e,n,r.wrapCallback(()=>{})),r.promise}update(e){Kr("OnDisconnect.update",this._path),hR("OnDisconnect.update",e,this._path);const n=new Bt;return NR(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return j(this._path)?null:fh(this._path)}get ref(){return new dn(this._repo,this._path)}get _queryIdentifier(){const e=dm(this._queryParams),n=ch(e);return n==="{}"?"default":n}get _queryObject(){return dm(this._queryParams)}isEqual(e){if(e=oe(e),!(e instanceof Fh))return!1;const n=this._repo===e._repo,r=ph(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+TN(this._path)}}class dn extends Fh{constructor(e,n){super(e,n,new vh,!1)}get parent(){const e=Vy(this._path);return e===null?null:new dn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Hs{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new H(e),r=Gs(this.ref,e);return new Hs(this._node.getChild(n),r,te)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Hs(i,Gs(this.ref,r),te)))}hasChild(e){const n=new H(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function _e(t,e){return t=oe(t),t._checkNotDeleted("ref"),e!==void 0?Gs(t._root,e):t._root}function Gs(t,e){return t=oe(t),L(t._path)===null?pR("child","path",e):C0("child","path",e),new dn(t._repo,de(t._path,e))}function Rm(t){return t=oe(t),new FR(t._repo,t._path)}function L0(t,e){t=oe(t),Kr("push",t._path),Qa("push",e,t._path,!0);const n=T0(t._repo),r=MR(n),i=Gs(t,r),s=Gs(t,r);let o;return e!=null?o=Tn(s,e).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function Tn(t,e){t=oe(t),Kr("set",t._path),Qa("set",e,t._path,!1);const n=new Bt;return CR(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function $n(t){t=oe(t);const e=new D0(()=>{}),n=new Ll(e);return kR(t._repo,t,n).then(r=>new Hs(r,new dn(t._repo,t._path),t._queryParams.getIndex()))}class Ll{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new jR("value",this,new Hs(e.snapshotNode,new dn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new UR(this,e,n):null}matches(e){return e instanceof Ll?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function $R(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,c=(d,u)=>{Tm(t._repo,t,a),l(d,u)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new D0(n,s||void 0),a=new Ll(o);return bR(t._repo,t,a),()=>Tm(t._repo,t,a)}function $h(t,e,n,r){return $R(t,"value",e,n,r)}Ub(dn);Wb(dn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zR="FIREBASE_DATABASE_EMULATOR_HOST",Qu={};let BR=!1;function WR(t,e,n,r){t.repoInfo_=new Ly(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function VR(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||an("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),be("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Nm(s,i),a=o.repoInfo,l;typeof process<"u"&&Kp&&(l=Kp[zR]),l?(s=`http://${l}?ns=${a.namespace}`,o=Nm(s,i),a=o.repoInfo):o.repoInfo.secure;const c=new tN(t.name,t.options,e);mR("Invalid Firebase Database URL",o),j(o.path)||an("Database URL must point to the root of a Firebase Database (not including a child path).");const d=GR(a,t,c,new eN(t.name,n));return new KR(d,t)}function HR(t,e){const n=Qu[e];(!n||n[t.key]!==t)&&an(`Database ${e}(${t.repoInfo_}) has already been deleted.`),RR(t),delete n[t.key]}function GR(t,e,n,r){let i=Qu[e.name];i||(i={},Qu[e.name]=i);let s=i[t.toURLString()];return s&&an("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new wR(t,BR,n,r),i[t.toURLString()]=s,s}class KR{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(ER(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new dn(this._repo,z())),this._rootInternal}_delete(){return this._rootInternal!==null&&(HR(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&an("Cannot call "+e+" on a deleted database.")}}function qR(t=Zd(),e){const n=wl(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=bv("database");r&&QR(n,...r)}return n}function QR(t,e,n,r={}){t=oe(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&an("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&an('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Zo(Zo.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:Av(r.mockUserToken,t.app.options.projectId);s=new Zo(o)}WR(i,e,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YR(t){UT(Nr),yr(new Wn("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return VR(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),At(qp,Qp,t),At(qp,Qp,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XR={".sv":"timestamp"};function Nc(){return XR}Yt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Yt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};YR();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M0="firebasestorage.googleapis.com",j0="storageBucket",JR=2*60*1e3,ZR=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae extends cn{constructor(e,n,r=0){super(bc(e),`Firebase Storage: ${n} (${bc(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ae.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return bc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var se;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(se||(se={}));function bc(t){return"storage/"+t}function zh(){const t="An unknown error occurred, please check the error payload for server response.";return new ae(se.UNKNOWN,t)}function eP(t){return new ae(se.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function tP(t){return new ae(se.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function nP(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ae(se.UNAUTHENTICATED,t)}function rP(){return new ae(se.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function iP(t){return new ae(se.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function sP(){return new ae(se.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function oP(){return new ae(se.CANCELED,"User canceled the upload/download.")}function aP(t){return new ae(se.INVALID_URL,"Invalid URL '"+t+"'.")}function lP(t){return new ae(se.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function cP(){return new ae(se.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+j0+"' property when initializing the app?")}function uP(){return new ae(se.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function dP(){return new ae(se.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function hP(t){return new ae(se.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Yu(t){return new ae(se.INVALID_ARGUMENT,t)}function U0(){return new ae(se.APP_DELETED,"The Firebase app was deleted.")}function fP(t){return new ae(se.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function fs(t,e){return new ae(se.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Vi(t){throw new ae(se.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=et.makeFromUrl(e,n)}catch{return new et(e,"")}if(r.path==="")return r;throw lP(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(w){w.path.charAt(w.path.length-1)==="/"&&(w.path_=w.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(w){w.path_=decodeURIComponent(w.path)}const d="v[A-Za-z0-9_]+",u=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",m=new RegExp(`^https?://${u}/${d}/b/${i}/o${f}`,"i"),g={bucket:1,path:3},y=n===M0?"(?:storage.googleapis.com|storage.cloud.google.com)":n,x="([^?#]*)",_=new RegExp(`^https?://${y}/${i}/${x}`,"i"),v=[{regex:a,indices:l,postModify:s},{regex:m,indices:g,postModify:c},{regex:_,indices:{bucket:1,path:2},postModify:c}];for(let w=0;w<v.length;w++){const C=v[w],I=C.regex.exec(e);if(I){const T=I[C.indices.bucket];let R=I[C.indices.path];R||(R=""),r=new et(T,R),C.postModify(r);break}}if(r==null)throw aP(e);return r}}class pP{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mP(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let c=!1;function d(...x){c||(c=!0,e.apply(null,x))}function u(x){i=setTimeout(()=>{i=null,t(m,l())},x)}function f(){s&&clearTimeout(s)}function m(x,..._){if(c){f();return}if(x){f(),d.call(null,x,..._);return}if(l()||o){f(),d.call(null,x,..._);return}r<64&&(r*=2);let v;a===1?(a=2,v=0):v=(r+Math.random())*1e3,u(v)}let g=!1;function y(x){g||(g=!0,f(),!c&&(i!==null?(x||(a=2),clearTimeout(i),u(0)):x||(a=1)))}return u(0),s=setTimeout(()=>{o=!0,y(!0)},n),y}function gP(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _P(t){return t!==void 0}function vP(t){return typeof t=="object"&&!Array.isArray(t)}function Bh(t){return typeof t=="string"||t instanceof String}function Pm(t){return Wh()&&t instanceof Blob}function Wh(){return typeof Blob<"u"}function Am(t,e,n,r){if(r<e)throw Yu(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Yu(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vh(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function F0(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var fr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(fr||(fr={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yP(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wP{constructor(e,n,r,i,s,o,a,l,c,d,u,f=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=d,this.connectionFactory_=u,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((m,g)=>{this.resolve_=m,this.reject_=g,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Do(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===fr.NO_ERROR,l=s.getStatus();if(!a||yP(l,this.additionalRetryCodes_)&&this.retry){const d=s.getErrorCode()===fr.ABORT;r(!1,new Do(!1,null,d));return}const c=this.successCodes_.indexOf(l)!==-1;r(!0,new Do(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());_P(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=zh();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?U0():oP();o(l)}else{const l=sP();o(l)}};this.canceled_?n(!1,new Do(!1,null,!0)):this.backoffId_=mP(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&gP(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Do{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function EP(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function xP(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function kP(t,e){e&&(t["X-Firebase-GMPID"]=e)}function CP(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function SP(t,e,n,r,i,s,o=!0){const a=F0(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return kP(c,e),EP(c,n),xP(c,s),CP(c,r),new wP(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IP(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function TP(...t){const e=IP();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Wh())return new Blob(t);throw new ae(se.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function NP(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bP(t){if(typeof atob>"u")throw hP("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Rc{constructor(e,n){this.data=e,this.contentType=n||null}}function RP(t,e){switch(t){case bt.RAW:return new Rc($0(e));case bt.BASE64:case bt.BASE64URL:return new Rc(z0(t,e));case bt.DATA_URL:return new Rc(AP(e),OP(e))}throw zh()}function $0(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function PP(t){let e;try{e=decodeURIComponent(t)}catch{throw fs(bt.DATA_URL,"Malformed data URL.")}return $0(e)}function z0(t,e){switch(t){case bt.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw fs(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case bt.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw fs(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=bP(e)}catch(i){throw i.message.includes("polyfill")?i:fs(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class B0{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw fs(bt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=DP(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function AP(t){const e=new B0(t);return e.base64?z0(bt.BASE64,e.rest):PP(e.rest)}function OP(t){return new B0(t).contentType}function DP(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(e,n){let r=0,i="";Pm(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(Pm(this.data_)){const r=this.data_,i=NP(r,e,n);return i===null?null:new kn(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new kn(r,!0)}}static getBlob(...e){if(Wh()){const n=e.map(r=>r instanceof kn?r.data_:r);return new kn(TP.apply(null,n))}else{const n=e.map(o=>Bh(o)?RP(bt.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new kn(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W0(t){let e;try{e=JSON.parse(t)}catch{return null}return vP(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LP(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function MP(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function V0(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jP(t,e){return e}class Ue{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||jP}}let Lo=null;function UP(t){return!Bh(t)||t.length<2?t:V0(t)}function H0(){if(Lo)return Lo;const t=[];t.push(new Ue("bucket")),t.push(new Ue("generation")),t.push(new Ue("metageneration")),t.push(new Ue("name","fullPath",!0));function e(s,o){return UP(o)}const n=new Ue("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new Ue("size");return i.xform=r,t.push(i),t.push(new Ue("timeCreated")),t.push(new Ue("updated")),t.push(new Ue("md5Hash",null,!0)),t.push(new Ue("cacheControl",null,!0)),t.push(new Ue("contentDisposition",null,!0)),t.push(new Ue("contentEncoding",null,!0)),t.push(new Ue("contentLanguage",null,!0)),t.push(new Ue("contentType",null,!0)),t.push(new Ue("metadata","customMetadata",!0)),Lo=t,Lo}function FP(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new et(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function $P(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return FP(r,t),r}function G0(t,e,n){const r=W0(e);return r===null?null:$P(t,r,n)}function zP(t,e,n,r){const i=W0(e);if(i===null||!Bh(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const d=t.bucket,u=t.fullPath,f="/b/"+o(d)+"/o/"+o(u),m=Vh(f,n,r),g=F0({alt:"media",token:c});return m+g})[0]}function BP(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class K0{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q0(t){if(!t)throw zh()}function WP(t,e){function n(r,i){const s=G0(t,i,e);return q0(s!==null),s}return n}function VP(t,e){function n(r,i){const s=G0(t,i,e);return q0(s!==null),zP(s,i,t.host,t._protocol)}return n}function Q0(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=rP():i=nP():n.getStatus()===402?i=tP(t.bucket):n.getStatus()===403?i=iP(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function HP(t){const e=Q0(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=eP(t.path)),s.serverResponse=i.serverResponse,s}return n}function GP(t,e,n){const r=e.fullServerUrl(),i=Vh(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new K0(i,s,VP(t,n),o);return a.errorHandler=HP(e),a}function KP(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function qP(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=KP(null,e)),r}function QP(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let v="";for(let w=0;w<2;w++)v=v+Math.random().toString().slice(2);return v}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const c=qP(e,r,i),d=BP(c,n),u="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+l+`\r
Content-Type: `+c.contentType+`\r
\r
`,f=`\r
--`+l+"--",m=kn.getBlob(u,r,f);if(m===null)throw uP();const g={name:c.fullPath},y=Vh(s,t.host,t._protocol),x="POST",_=t.maxUploadRetryTime,p=new K0(y,x,WP(t,n),_);return p.urlParams=g,p.headers=o,p.body=m.uploadData(),p.errorHandler=Q0(e),p}class YP{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=fr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=fr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=fr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw Vi("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Vi("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Vi("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Vi("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Vi("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class XP extends YP{initXhr(){this.xhr_.responseType="text"}}function Y0(){return new XP}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(e,n){this._service=e,n instanceof et?this._location=n:this._location=et.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Cr(e,n)}get root(){const e=new et(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return V0(this._location.path)}get storage(){return this._service}get parent(){const e=LP(this._location.path);if(e===null)return null;const n=new et(this._location.bucket,e);return new Cr(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw fP(e)}}function JP(t,e,n){t._throwIfRoot("uploadBytes");const r=QP(t.storage,t._location,H0(),new kn(e,!0),n);return t.storage.makeRequestWithTokens(r,Y0).then(i=>({metadata:i,ref:t}))}function ZP(t){t._throwIfRoot("getDownloadURL");const e=GP(t.storage,t._location,H0());return t.storage.makeRequestWithTokens(e,Y0).then(n=>{if(n===null)throw dP();return n})}function eA(t,e){const n=MP(t._location.path,e),r=new et(t._location.bucket,n);return new Cr(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tA(t){return/^[A-Za-z]+:\/\//.test(t)}function nA(t,e){return new Cr(t,e)}function X0(t,e){if(t instanceof Hh){const n=t;if(n._bucket==null)throw cP();const r=new Cr(n,n._bucket);return e!=null?X0(r,e):r}else return e!==void 0?eA(t,e):t}function rA(t,e){if(e&&tA(e)){if(t instanceof Hh)return nA(t,e);throw Yu("To use ref(service, url), the first argument must be a Storage instance.")}else return X0(t,e)}function Om(t,e){const n=e==null?void 0:e[j0];return n==null?null:et.makeFromBucketSpec(n,t)}function iA(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:Av(i,t.app.options.projectId))}class Hh{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=M0,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=JR,this._maxUploadRetryTime=ZR,this._requests=new Set,i!=null?this._bucket=et.makeFromBucketSpec(i,this._host):this._bucket=Om(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=et.makeFromBucketSpec(this._url,e):this._bucket=Om(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Am("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Am("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Cr(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new pP(U0());{const o=SP(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const Dm="@firebase/storage",Lm="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J0="storage";function sA(t,e,n){return t=oe(t),JP(t,e,n)}function oA(t){return t=oe(t),ZP(t)}function aA(t,e){return t=oe(t),rA(t,e)}function lA(t=Zd(),e){t=oe(t);const r=wl(t,J0).getImmediate({identifier:e}),i=bv("storage");return i&&cA(r,...i),r}function cA(t,e,n,r={}){iA(t,e,n,r)}function uA(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Hh(n,r,i,e,Nr)}function dA(){yr(new Wn(J0,uA,"PUBLIC").setMultipleInstances(!0)),At(Dm,Lm,""),At(Dm,Lm,"esm2017")}dA();const hA={apiKey:"AIzaSyD9-_GYLQabcC3SPMTOG9zj2CcaPqzfOrI",authDomain:"lalaland-24931.firebaseapp.com",databaseURL:"https://lalaland-24931-default-rtdb.firebaseio.com",projectId:"lalaland-24931",storageBucket:"lalaland-24931.firebasestorage.app",messagingSenderId:"45134876312",appId:"1:45134876312:web:9e33e46c54cb7c9bfc8aed",measurementId:"G-M04NRCY9FQ"},Gh=jv(hA),ps=MT(Gh),ve=qR(Gh),fA=lA(Gh);class pA{constructor(){this.permission=null,this.isSupported="Notification"in window,this.isEnabled=!1}async init(){return this.isSupported?(this.permission=Notification.permission,this.permission==="granted"?(this.isEnabled=!0,console.log("✅ 通知權限已獲得"),!0):this.permission==="denied"?(console.warn("❌ 通知權限被拒絕"),!1):await this.requestPermission()):(console.warn("🔔 此瀏覽器不支援桌面通知"),!1)}async requestPermission(){try{const e=await Notification.requestPermission();return this.permission=e,e==="granted"?(this.isEnabled=!0,console.log("✅ 用戶授予了通知權限"),!0):(console.log("❌ 用戶拒絕了通知權限"),!1)}catch(e){return console.error("🚨 請求通知權限時出錯:",e),!1}}showNotification(e,n={}){if(!this.isEnabled||!this.isSupported)return console.log("🔕 通知未啟用或不支援"),null;const r={icon:"/icon-512.png",badge:"/icon-512.png",tag:"lalaland-message",renotify:!0,requireInteraction:!1,silent:!1,...n};try{const i=new Notification(e,r);return i.onclick=()=>{window.focus(),n.onClick&&n.onClick(),i.close()},setTimeout(()=>{i.close()},5e3),i}catch(i){return console.error("🚨 顯示通知時出錯:",i),null}}showPrivateMessageNotification(e,n,r){const i=`💬 ${e} 發送了私訊`,s={body:n.length>50?n.substring(0,50)+"...":n,icon:"/icon-512.png",tag:"private-message",onClick:r};return this.showNotification(i,s)}showGroupMessageNotification(e,n,r,i){const s=`🏠 ${n} - ${e}`,o={body:r.length>50?r.substring(0,50)+"...":r,icon:"/icon-512.png",tag:"group-message",onClick:i};return this.showNotification(s,o)}vibrate(e=[200,100,200]){"vibrate"in navigator&&navigator.vibrate(e)}playNotificationSound(){try{const e=new(window.AudioContext||window.webkitAudioContext),n=e.createOscillator(),r=e.createGain();n.connect(r),r.connect(e.destination),n.frequency.setValueAtTime(800,e.currentTime),n.frequency.setValueAtTime(600,e.currentTime+.1),r.gain.setValueAtTime(.1,e.currentTime),r.gain.exponentialRampToValueAtTime(.01,e.currentTime+.2),n.start(e.currentTime),n.stop(e.currentTime+.2)}catch(e){console.log("🔇 無法播放通知音效:",e)}}getPermissionStatus(){return{supported:this.isSupported,permission:this.permission,enabled:this.isEnabled}}}const Xt=new pA,mA=async()=>await Xt.init(),gA=async()=>await Xt.requestPermission(),_A=async()=>{console.log("🔍 開始偵錯 Firebase 資料庫...");try{console.log("📡 檢查群組聊天資料...");const t=_e(ve,"groupChats"),e=await $n(t);if(e.exists()){const o=e.val();console.log("✅ 群組聊天資料:",o),Object.keys(o).forEach(a=>{var l;if((l=o[a])!=null&&l.messages){const c=Object.keys(o[a].messages).length;console.log(`📝 房間 ${a} 有 ${c} 條訊息`)}else console.log(`📝 房間 ${a} 沒有訊息`)})}else console.log("❌ 沒有找到群組聊天資料");console.log("👥 檢查用戶資料...");const n=_e(ve,"users"),r=await $n(n);if(r.exists()){const o=r.val();console.log("✅ 用戶資料:",o),Object.keys(o).forEach(a=>{var l,c;if((l=o[a])!=null&&l.friends){const d=Object.keys(o[a].friends).length;console.log(`👨‍👩‍👧‍👦 用戶 ${a} (${o[a].nickname||"匿名"}) 有 ${d} 個好友`)}else console.log(`👨‍👩‍👧‍👦 用戶 ${a} (${((c=o[a])==null?void 0:c.nickname)||"匿名"}) 沒有好友`)})}else console.log("❌ 沒有找到用戶資料");console.log("💬 檢查私人聊天資料...");const i=_e(ve,"privateChats"),s=await $n(i);if(s.exists()){const o=s.val();console.log("✅ 私人聊天資料:",o),Object.keys(o).forEach(a=>{var l;if((l=o[a])!=null&&l.messages){const c=Object.keys(o[a].messages).length;console.log(`💌 私聊 ${a} 有 ${c} 條訊息`)}})}else console.log("❌ 沒有找到私人聊天資料")}catch(t){console.error("🚨 Firebase 偵錯失敗:",t),console.error("錯誤詳情:",t.message),t.code==="PERMISSION_DENIED"&&(console.error("❌ 權限被拒絕 - 需要更新 Firebase 安全規則!"),console.log("📋 請參考 FIREBASE_SETUP.md 文件更新規則"))}},vA=async t=>{console.log(`🔍 偵錯房間 ${t} 的訊息...`);try{const e=_e(ve,`groupChats/${t}/messages`),n=await $n(e);if(n.exists()){const r=n.val();return console.log(`✅ 房間 ${t} 找到 ${Object.keys(r).length} 條訊息:`,r),r}else return console.log(`❌ 房間 ${t} 沒有訊息`),null}catch(e){return console.error(`🚨 無法讀取房間 ${t} 的訊息:`,e),null}};/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yA=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Z0=(...t)=>t.filter((e,n,r)=>!!e&&r.indexOf(e)===n).join(" ");/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var wA={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EA=E.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:o,...a},l)=>E.createElement("svg",{ref:l,...wA,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:Z0("lucide",i),...a},[...o.map(([c,d])=>E.createElement(c,d)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J=(t,e)=>{const n=E.forwardRef(({className:r,...i},s)=>E.createElement(EA,{ref:s,iconNode:e,className:Z0(`lucide-${yA(t)}`,r),...i}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ew=J("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xA=J("BarChart3",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kA=J("BellOff",[["path",{d:"M8.7 3A6 6 0 0 1 18 8a21.3 21.3 0 0 0 .6 5",key:"o7mx20"}],["path",{d:"M17 17H3s3-2 3-9a4.67 4.67 0 0 1 .3-1.7",key:"16f1lm"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CA=J("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SA=J("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IA=J("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TA=J("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kh=J("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NA=J("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xu=J("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bA=J("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RA=J("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PA=J("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sr=J("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tw=J("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AA=J("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OA=J("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nw=J("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DA=J("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LA=J("Smile",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rw=J("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MA=J("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mm=J("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iw=J("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wi=J("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),jA=()=>{const t=av(),e=[{icon:h.jsx(Sr,{className:"w-8 h-8"}),title:"即時聊天",description:"與志同道合的朋友即時對話交流"},{icon:h.jsx(Kh,{className:"w-8 h-8"}),title:"安全友善",description:"專為女性LGBTQ+社群設計的安全空間"},{icon:h.jsx(iw,{className:"w-8 h-8"}),title:"多元社群",description:"閒聊、找伴、交友，滿足不同需求"},{icon:h.jsx(Xu,{className:"w-8 h-8"}),title:"隱私保護",description:"匿名模式與隱私設定保護你的安全"}];return h.jsxs("div",{className:"min-h-screen flex flex-col",children:[h.jsx("header",{className:"bg-white/70 backdrop-blur-sm border-b border-gray-200",children:h.jsxs("div",{className:"max-w-6xl mx-auto px-4 py-4 flex justify-between items-center",children:[h.jsxs("div",{className:"flex items-center gap-3",children:[h.jsx("img",{src:"/icon-512.png",alt:"LalaLand",className:"w-10 h-10 rounded-lg"}),h.jsx("h1",{className:"text-2xl font-bold text-sea-dark",children:"LalaLand"})]}),h.jsx("button",{onClick:()=>t("/login"),className:"btn-primary",children:"登入 / 註冊"})]})}),h.jsx("main",{className:"flex-1 flex flex-col items-center justify-center px-4 py-12",children:h.jsxs("div",{className:"text-center max-w-4xl mx-auto",children:[h.jsx("img",{src:"/icon-512.png",alt:"LalaLand Logo",className:"w-32 h-32 mx-auto mb-8 animate-float"}),h.jsxs("h2",{className:"text-4xl md:text-5xl font-bold text-gray-800 mb-6",children:["歡迎來到",h.jsx("span",{className:"text-sea-blue",children:" LalaLand"})]}),h.jsxs("p",{className:"text-xl text-gray-600 mb-8 leading-relaxed",children:["專為女同性戀者設計的安全聊天平台",h.jsx("br",{}),"在這裡，你可以安心做自己，與志同道合的朋友建立真摯連結"]}),h.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center mb-16",children:[h.jsx("button",{onClick:()=>t("/login"),className:"btn-primary text-lg px-8 py-4",children:"開始聊天"}),h.jsx("button",{onClick:()=>t("/login"),className:"btn-secondary text-lg px-8 py-4",children:"匿名體驗"})]}),h.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-4 gap-8",children:e.map((n,r)=>h.jsxs("div",{className:"card text-center hover:shadow-medium transition-shadow",children:[h.jsx("div",{className:"text-sea-blue mb-4 flex justify-center",children:n.icon}),h.jsx("h3",{className:"font-semibold text-lg mb-2",children:n.title}),h.jsx("p",{className:"text-gray-600 text-sm",children:n.description})]},r))})]})}),h.jsx("footer",{className:"bg-white/70 backdrop-blur-sm border-t border-gray-200 py-8",children:h.jsx("div",{className:"max-w-6xl mx-auto px-4 text-center text-gray-500",children:h.jsx("p",{children:"© 2025 LalaLand. 致力於為女性LGBTQ+社群提供安全友善的交流空間"})})})]})},jm=()=>{const t=av(),[e,n]=E.useState("login"),[r,i]=E.useState(!1),[s,o]=E.useState(!1),[a,l]=E.useState({email:"",password:"",confirmPassword:"",nickname:""}),c=m=>{l(g=>({...g,[m.target.name]:m.target.value}))},d=async m=>{m.preventDefault(),o(!0);try{await wI(ps,a.email,a.password),ke.success("登入成功！"),t("/chat")}catch(g){ke.error("登入失敗："+(g.message||"請檢查帳號密碼"))}finally{o(!1)}},u=async m=>{if(m.preventDefault(),o(!0),a.password!==a.confirmPassword){ke.error("密碼確認不一致"),o(!1);return}if(a.password.length<6){ke.error("密碼至少需要6個字元"),o(!1);return}try{const g=await yI(ps,a.email,a.password);await jp(g.user,{displayName:a.nickname||"新用戶"}),await Tn(_e(ve,`users/${g.user.uid}`),{nickname:a.nickname||"新用戶",email:a.email,avatar:null,joinedAt:Date.now(),isOnline:!0}),ke.success("註冊成功！歡迎加入 LalaLand！"),t("/chat")}catch(g){ke.error("註冊失敗："+(g.message||"請稍後再試"))}finally{o(!1)}},f=async()=>{o(!0);try{const m=await mI(ps),g=a.nickname||`訪客_${Math.floor(Math.random()*1e3)}`;await jp(m.user,{displayName:g}),await Tn(_e(ve,`users/${m.user.uid}`),{nickname:g,email:null,avatar:null,joinedAt:Date.now(),isOnline:!0,isAnonymous:!0}),ke.success("匿名登入成功！"),t("/chat")}catch(m){ke.error("匿名登入失敗："+(m.message||"請稍後再試"))}finally{o(!1)}};return h.jsx("div",{className:"min-h-screen flex items-center justify-center px-4 py-8",children:h.jsxs("div",{className:"w-full max-w-md",children:[h.jsxs("button",{onClick:()=>t("/"),className:"flex items-center gap-2 text-gray-600 hover:text-sea-blue mb-6 transition-colors",children:[h.jsx(ew,{className:"w-4 h-4"}),"返回首頁"]}),h.jsxs("div",{className:"card",children:[h.jsxs("div",{className:"text-center mb-8",children:[h.jsx("img",{src:"/icon-512.png",alt:"LalaLand",className:"w-16 h-16 mx-auto mb-4"}),h.jsxs("h2",{className:"text-2xl font-bold text-gray-800",children:[e==="login"&&"登入 LalaLand",e==="register"&&"註冊 LalaLand",e==="anonymous"&&"匿名體驗"]})]}),h.jsxs("div",{className:"flex bg-gray-100 rounded-lg p-1 mb-6",children:[h.jsx("button",{className:`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${e==="login"?"bg-white text-sea-blue shadow-sm":"text-gray-600 hover:text-gray-800"}`,onClick:()=>n("login"),children:"登入"}),h.jsx("button",{className:`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${e==="register"?"bg-white text-sea-blue shadow-sm":"text-gray-600 hover:text-gray-800"}`,onClick:()=>n("register"),children:"註冊"}),h.jsx("button",{className:`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${e==="anonymous"?"bg-white text-sea-blue shadow-sm":"text-gray-600 hover:text-gray-800"}`,onClick:()=>n("anonymous"),children:"匿名"})]}),e!=="anonymous"?h.jsxs("form",{onSubmit:e==="login"?d:u,children:[e==="register"&&h.jsxs("div",{className:"mb-4",children:[h.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"暱稱"}),h.jsxs("div",{className:"relative",children:[h.jsx(Mm,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"}),h.jsx("input",{type:"text",name:"nickname",value:a.nickname,onChange:c,className:"input-field pl-10",placeholder:"輸入你的暱稱",required:!0})]})]}),h.jsxs("div",{className:"mb-4",children:[h.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"電子郵件"}),h.jsxs("div",{className:"relative",children:[h.jsx(RA,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"}),h.jsx("input",{type:"email",name:"email",value:a.email,onChange:c,className:"input-field pl-10",placeholder:"輸入你的電子郵件",required:!0})]})]}),h.jsxs("div",{className:"mb-4",children:[h.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"密碼"}),h.jsxs("div",{className:"relative",children:[h.jsx(Xu,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"}),h.jsx("input",{type:r?"text":"password",name:"password",value:a.password,onChange:c,className:"input-field pl-10 pr-10",placeholder:"輸入密碼",required:!0}),h.jsx("button",{type:"button",onClick:()=>i(!r),className:"absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600",children:r?h.jsx(IA,{className:"w-5 h-5"}):h.jsx(TA,{className:"w-5 h-5"})})]})]}),e==="register"&&h.jsxs("div",{className:"mb-6",children:[h.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"確認密碼"}),h.jsxs("div",{className:"relative",children:[h.jsx(Xu,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"}),h.jsx("input",{type:r?"text":"password",name:"confirmPassword",value:a.confirmPassword,onChange:c,className:"input-field pl-10",placeholder:"再次輸入密碼",required:!0})]})]}),h.jsx("button",{type:"submit",disabled:s,className:"btn-primary w-full text-center disabled:opacity-50 disabled:cursor-not-allowed",children:s?"處理中...":e==="login"?"登入":"註冊"})]}):h.jsxs("div",{children:[h.jsxs("div",{className:"mb-6",children:[h.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"暱稱（選填）"}),h.jsxs("div",{className:"relative",children:[h.jsx(Mm,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"}),h.jsx("input",{type:"text",name:"nickname",value:a.nickname,onChange:c,className:"input-field pl-10",placeholder:"輸入暱稱或留空使用隨機名稱"})]})]}),h.jsx("button",{onClick:f,disabled:s,className:"btn-primary w-full text-center disabled:opacity-50 disabled:cursor-not-allowed",children:s?"處理中...":"匿名進入聊天室"}),h.jsx("p",{className:"text-xs text-gray-500 mt-4 text-center",children:"匿名模式不需要註冊，但資料不會被保存"})]})]})]})})},Ut=kv((t,e)=>({currentRoom:"chat",currentPrivateChat:null,messages:[],onlineUsers:{},friends:[],privateChatsList:[],sidebarOpen:!1,darkMode:localStorage.getItem("darkMode")==="yes",setCurrentRoom:n=>t({currentRoom:n}),setCurrentPrivateChat:n=>t({currentPrivateChat:n}),setMessages:n=>t({messages:n}),addMessage:n=>t(r=>({messages:[...r.messages,n]})),setOnlineUsers:n=>t({onlineUsers:n}),setFriends:n=>t({friends:n}),setPrivateChatsList:n=>t({privateChatsList:n}),setSidebarOpen:n=>t({sidebarOpen:n}),toggleDarkMode:()=>{const n=!e().darkMode;localStorage.setItem("darkMode",n?"yes":"no"),t({darkMode:n}),n?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},clearMessages:()=>t({messages:[]})})),UA=async t=>{if(t!=null&&t.uid)try{console.log("正在為用戶創建範例資料:",t.nickname);const e=_e(ve,`users/${t.uid}`),n={nickname:t.nickname||"匿名用戶",avatar:t.avatar||null,email:t.email||null,isAnonymous:t.isAnonymous||!1,lastSeen:Date.now(),isOnline:!0,joinedAt:Date.now()};await Tn(e,n),console.log("✅ 用戶資料已更新")}catch(e){console.error("❌ 創建範例資料失敗:",e)}},FA=({isOpen:t,onClose:e})=>{const{user:n,setUser:r}=st(),[i,s]=E.useState(!1),[o,a]=E.useState((n==null?void 0:n.nickname)||""),[l,c]=E.useState((n==null?void 0:n.avatar)||""),[d,u]=E.useState(o);if(E.useEffect(()=>{const{enabled:y}=Xt.getPermissionStatus();s(y)},[t]),!t)return null;const f=async()=>{try{const y={...n,nickname:d||"匿名用戶",avatar:l};r(y),console.log("💾 保存設定:",{nickname:d,avatar:l,notifications:i}),e()}catch(y){console.error("保存設定失敗:",y)}},m=async()=>{i?ke("🔕 請在瀏覽器設定中禁用通知",{duration:4e3,icon:"⚠️"}):await gA()?(s(!0),ke.success("🔔 通知已啟用！")):ke.error("❌ 通知權限被拒絕")},g=()=>{const y=`https://ui-avatars.com/api/?name=${encodeURIComponent(d||"匿名")}&background=56c596&color=fff&size=128`;c(y)};return h.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4",children:h.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto",children:[h.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700",children:[h.jsx("h2",{className:"text-xl font-semibold text-gray-900 dark:text-white",children:"設定"}),h.jsx("button",{onClick:e,className:"p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors",children:h.jsx(wi,{className:"w-5 h-5 text-gray-500"})})]}),h.jsxs("div",{className:"p-6 space-y-6",children:[h.jsxs("div",{children:[h.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white mb-4",children:"個人資料"}),h.jsxs("div",{className:"flex items-center gap-4 mb-4",children:[h.jsx("img",{src:l||`https://ui-avatars.com/api/?name=${encodeURIComponent(d||"匿名")}&background=56c596&color=fff&size=64`,alt:"頭像",className:"w-16 h-16 rounded-full"}),h.jsxs("div",{children:[h.jsxs("button",{onClick:g,className:"flex items-center gap-2 px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors",children:[h.jsx(SA,{className:"w-4 h-4"}),"更換頭像"]}),h.jsx("p",{className:"text-xs text-gray-500 mt-1",children:"點擊生成新的頭像"})]})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",children:"暱稱"}),h.jsx("input",{type:"text",value:d,onChange:y=>u(y.target.value),className:"w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white",placeholder:"輸入你的暱稱",maxLength:20})]})]}),h.jsxs("div",{children:[h.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white mb-4",children:"通知設定"}),h.jsxs("div",{className:"flex items-center justify-between",children:[h.jsxs("div",{className:"flex items-center gap-3",children:[i?h.jsx(CA,{className:"w-5 h-5 text-green-500"}):h.jsx(kA,{className:"w-5 h-5 text-gray-400"}),h.jsxs("div",{children:[h.jsx("p",{className:"font-medium text-gray-900 dark:text-white",children:"推送通知"}),h.jsx("p",{className:"text-sm text-gray-500",children:"接收新訊息通知"})]})]}),h.jsx("button",{onClick:m,className:`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${i?"bg-blue-500":"bg-gray-300"}`,children:h.jsx("span",{className:`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${i?"translate-x-6":"translate-x-1"}`})})]})]}),h.jsxs("div",{children:[h.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white mb-4",children:"其他"}),h.jsxs("div",{className:"space-y-2 text-sm text-gray-600 dark:text-gray-400",children:[h.jsx("p",{children:"• 版本: 1.0.0"}),h.jsx("p",{children:"• React 聊天室"}),h.jsx("p",{children:"• 支援即時通訊和檔案分享"})]})]})]}),h.jsxs("div",{className:"flex gap-3 p-6 border-t border-gray-200 dark:border-gray-700",children:[h.jsx("button",{onClick:e,className:"flex-1 px-4 py-2 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors",children:"取消"}),h.jsx("button",{onClick:f,className:"flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors",children:"保存"})]})]})})},$A=()=>{const{user:t}=st(),{currentRoom:e,setCurrentRoom:n,sidebarOpen:r,setSidebarOpen:i,darkMode:s,toggleDarkMode:o,onlineUsers:a}=Ut(),[l,c]=E.useState(!1),d=async()=>{try{await SI(ps),ke.success("已登出")}catch{ke.error("登出失敗")}},u=[{id:"chat",name:"閒聊區",icon:Sr,tip:"歡迎隨意聊聊、發問、抒發生活大小事"},{id:"love",name:"找伴區",icon:Kh,tip:"你正在找伴專區，請多用心互動，彼此尊重"},{id:"sex",name:"約炮區",icon:iw,tip:"匿名聊性、約炮自由，但請勿冒犯他人"}],f=`
    ${r?"translate-x-0":"-translate-x-full"}
    md:translate-x-0 fixed md:relative left-0 top-0 h-full w-80 bg-white/80 dark:bg-dark-card/80 
    backdrop-blur-sm border-r border-gray-200 dark:border-gray-700 z-30 transition-transform duration-300
    pt-16 md:pt-0
  `;return h.jsxs(h.Fragment,{children:[r&&h.jsx("div",{className:"md:hidden fixed inset-0 bg-black/50 z-20",onClick:()=>i(!1)}),h.jsx("div",{className:f,children:h.jsxs("div",{className:"flex flex-col h-full",children:[h.jsxs("div",{className:"p-6 border-b border-gray-200 dark:border-gray-700",children:[h.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[h.jsx("img",{src:(t==null?void 0:t.avatar)||`https://ui-avatars.com/api/?name=${t==null?void 0:t.nickname}&background=2877b9&color=fff`,alt:t==null?void 0:t.nickname,className:"w-12 h-12 rounded-full border-2 border-sea-blue"}),h.jsxs("div",{children:[h.jsx("h3",{className:"font-semibold text-gray-800 dark:text-dark-text",children:(t==null?void 0:t.nickname)||"用戶"}),h.jsx("p",{className:"text-sm text-gray-500",children:t!=null&&t.isAnonymous?"匿名用戶":"已註冊用戶"})]})]}),h.jsxs("div",{className:"text-sm text-gray-600 dark:text-gray-400",children:["在線成員: ",Object.keys(a).length," 人"]})]}),h.jsxs("div",{className:"flex-1 overflow-y-auto",children:[h.jsxs("div",{className:"p-4",children:[h.jsx("h4",{className:"text-sm font-medium text-gray-500 dark:text-gray-400 mb-3",children:"聊天室"}),h.jsxs("div",{className:"space-y-1",children:[u.map(m=>h.jsxs("button",{onClick:()=>{n(m.id),i(!1)},className:`sidebar-item w-full ${e===m.id?"active":""}`,children:[h.jsx(m.icon,{className:"w-5 h-5"}),h.jsx("span",{className:"font-medium",children:m.name})]},m.id)),h.jsxs("button",{onClick:()=>{n("private"),i(!1)},className:`sidebar-item w-full ${e==="private"?"active":""}`,children:[h.jsx(Sr,{className:"w-5 h-5"}),h.jsx("span",{className:"font-medium",children:"私人訊息"})]})]})]}),h.jsxs("div",{className:"p-4 border-t border-gray-200 dark:border-gray-700",children:[h.jsx("h4",{className:"text-sm font-medium text-gray-500 dark:text-gray-400 mb-3",children:"在線成員"}),h.jsx("div",{className:"space-y-2",children:Object.entries(a).map(([m,g])=>h.jsxs("div",{className:"flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700",children:[h.jsx("img",{src:g.avatar||`https://ui-avatars.com/api/?name=${g.nickname}&background=56c596&color=fff`,alt:g.nickname,className:"w-8 h-8 rounded-full"}),h.jsxs("div",{children:[h.jsx("p",{className:"text-sm font-medium text-gray-700 dark:text-gray-300",children:g.nickname}),h.jsxs("div",{className:"flex items-center gap-1",children:[h.jsx("div",{className:"w-2 h-2 bg-accent-green rounded-full"}),h.jsx("span",{className:"text-xs text-gray-500",children:"在線"})]})]})]},m))})]})]}),h.jsx("div",{className:"p-4 border-t border-gray-200 dark:border-gray-700",children:h.jsxs("div",{className:"space-y-1",children:[h.jsxs("button",{onClick:o,className:"sidebar-item w-full",children:[s?h.jsx(rw,{className:"w-5 h-5"}):h.jsx(tw,{className:"w-5 h-5"}),h.jsx("span",{children:s?"淺色模式":"深色模式"})]}),h.jsxs("button",{onClick:()=>c(!0),className:"sidebar-item w-full",children:[h.jsx(DA,{className:"w-5 h-5"}),h.jsx("span",{children:"設定"})]}),h.jsxs("button",{onClick:d,className:"sidebar-item w-full text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20",children:[h.jsx(bA,{className:"w-5 h-5"}),h.jsx("span",{children:"登出"})]})]})})]})}),h.jsx(FA,{isOpen:l,onClose:()=>c(!1)})]})},zA=t=>({casual:"日常閒聊",dating:"約會交友",hookup:"約砲專區",confession:"匿名告白",general:"一般討論",random:"隨機聊天"})[t]||`聊天室 ${t}`,BA=t=>{const{user:e}=st(),{setMessages:n,addMessage:r,clearMessages:i}=Ut(),s=E.useRef(0);return E.useEffect(()=>{if(!e||!t){console.log("⚠️ useFirebaseChat: 缺少必要參數",{user:!!e,roomId:t});return}console.log(`🚀 開始監聽房間 ${t} 的訊息...`),i();const a=_e(ve,`groupChats/${t}/messages`),l=$h(a,c=>{try{const d=c.val();if(console.log(`📝 房間 ${t} 收到資料:`,d),d){const u=Object.entries(d).map(([g,y])=>(Math.random()<.1&&console.log(`⏰ 訊息 ${g} 時間戳:`,{timestamp:y.timestamp,time:y.time,rawMessage:y}),{id:g,...y,timestamp:y.timestamp||y.time||Date.now()}));u.sort((g,y)=>{const x=g.timestamp||g.time||0,_=y.timestamp||y.time||0;return x-_});const f=u.length,m=s.current;f>m&&m>0&&u.slice(m).forEach(y=>{if((y.from||y.userId||y.uid)!==e.uid){const _=y.user||y.nickname||"匿名用戶",p=zA(t);console.log(`🔔 收到來自 ${_} 的新群組訊息 (${p}):`,y.text),Xt.showGroupMessageNotification(_,p,y.text,()=>{window.focus()}),Xt.vibrate([100]),Math.random()<.3&&Xt.playNotificationSound()}}),s.current=f,console.log(`✅ 房間 ${t} 載入了 ${u.length} 條訊息`),n(u)}else console.log(`📭 房間 ${t} 沒有訊息`),s.current=0,n([])}catch(d){console.error(`❌ 房間 ${t} 載入訊息時出錯:`,d),n([])}},c=>{console.error(`❌ Firebase onValue 錯誤 (房間 ${t}):`,c),c.code==="PERMISSION_DENIED"&&console.error("🚫 權限被拒絕 - 請檢查 Firebase 安全規則!")});return()=>{try{console.log(`🛑 停止監聽房間 ${t} 的訊息`),l()}catch(c){console.error("Firebase unsubscribe error:",c)}}},[e,t,n,i]),{sendMessage:async a=>{if(!e||!t)return;const l=_e(ve,`groupChats/${t}/messages`),c={...a,sender:{uid:e.uid,nickname:e.nickname||"匿名用戶",avatar:e.avatar||null},timestamp:Date.now(),room:t};try{await L0(l,c)}catch(d){throw console.error("發送訊息失敗:",d),d}}}},WA=()=>{const{user:t}=st(),{setOnlineUsers:e}=Ut();E.useEffect(()=>{if(!t||!t.uid)return;console.log("🟢 設定用戶在線狀態:",t.nickname),_e(ve,`users/${t.uid}`);const n=_e(ve,`users/${t.uid}/online`),r=_e(ve,`users/${t.uid}/lastSeen`);(async()=>{try{await Tn(n,!0),await Tn(r,Nc()),await Rm(n).set(!1),await Rm(r).set(Nc()),console.log("✅ 在線狀態設定完成")}catch(a){console.error("❌ 設定在線狀態失敗:",a)}})();const s=_e(ve,"users"),o=$h(s,a=>{try{const l=a.val();if(l){const c={};Object.entries(l).forEach(([d,u])=>{u.online&&(c[d]={uid:d,nickname:u.nickname||"匿名用戶",avatar:u.avatar||null,isOnline:u.online,lastSeen:u.lastSeen})}),console.log(`👥 找到 ${Object.keys(c).length} 個在線用戶`),e(c)}else e({})}catch(l){console.error("❌ 載入在線用戶失敗:",l),e({})}},a=>{console.error("❌ Firebase onValue 錯誤 (在線用戶):",a)});return()=>{console.log("🔄 清理在線用戶監聽器"),o(),Tn(n,!1).catch(console.error),Tn(r,Nc()).catch(console.error)}},[t,e])},VA=async t=>{if(!t)throw new Error("沒有選擇檔案");if(t.size>5*1024*1024)throw new Error("圖片檔案不能超過 5MB");if(!t.type.startsWith("image/"))throw new Error("請選擇圖片檔案");const e=Date.now(),n=Math.random().toString(36).substr(2,9),r=`chatImages/${e}_${n}_${t.name.replace(/[^a-zA-Z0-9.-]/g,"_")}`;try{const i=aA(fA,r),s=await sA(i,t);return await oA(s.ref)}catch(i){throw console.error("上傳圖片失敗:",i),new Error("上傳失敗，請稍後再試")}},HA=t=>new Promise(e=>{const n=new FileReader;n.onload=r=>e(r.target.result),n.readAsDataURL(t)}),sw=({message:t,isOwn:e,onReply:n})=>{const{setCurrentPrivateChat:r,setCurrentRoom:i}=Ut(),{user:s}=st(),[o,a]=E.useState(!1),[l,c]=E.useState(t.liked||!1),d=p=>{p.preventDefault(),p.stopPropagation();const v=u();v.uid!==(s==null?void 0:s.uid)&&(console.log("👆 頭像點擊 - 開始私聊:",v),r({roomId:`private_${v.uid}`,recipientId:v.uid,nickname:v.nickname,avatar:v.avatar,isOnline:!1}),i("private"))},u=()=>t.sender?{nickname:t.sender.nickname||t.sender.displayName||t.sender.name,avatar:t.sender.avatar||t.sender.photoURL,uid:t.sender.uid}:{nickname:t.user||t.senderName||t.nickname||t.userName||"匿名用戶",avatar:t.avatar||t.senderAvatar,uid:t.from||t.senderId||t.userId||t.uid},f=p=>{p.stopPropagation(),c(!l),console.log("💖 按讚訊息:",t.id,!l)},m=p=>{p.stopPropagation();try{if(n&&typeof n=="function"){const v=t.text||t.content||t.message||t.msg||"",w=u();n({id:t.id,text:v,sender:w.nickname}),console.log("💬 回覆訊息:",t.id)}else console.warn("⚠️ onReply 函數未提供或不是函數")}catch(v){console.error("回覆功能錯誤:",v),alert("回覆功能暫時無法使用，請稍後再試")}};if(!t)return null;const g=u();!g.nickname&&!g.uid&&console.warn("訊息缺少發送者信息:",t);const y=p=>{if(!p)return"";const v=/(https?:\/\/[^\s]+)/g;return p.split(v).map((C,I)=>C.match(v)?h.jsx("a",{href:C,target:"_blank",rel:"noopener noreferrer",className:"text-blue-500 hover:text-blue-600 underline break-all",onClick:T=>T.stopPropagation(),children:C},I):C)},x=p=>{const v=p||t.timestamp||t.time;if(!v)return"未知時間";let w;return typeof v=="number"?w=v:typeof v=="string"?w=new Date(v).getTime():v&&typeof v=="object"&&v.seconds?w=v.seconds*1e3+(v.nanoseconds||0)/1e6:w=Date.now(),isNaN(w)?"時間錯誤":new Date(w).toLocaleString("zh-TW",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1})},_=()=>{if(t.type==="vote")return h.jsx(GA,{voteData:t.content});const p=t.text||t.content||t.message||t.msg||"";return h.jsxs("div",{children:[t.image&&h.jsx("img",{src:t.image,alt:"分享的圖片",className:"max-w-sm rounded-lg mb-2 cursor-pointer hover:opacity-90 transition-opacity",onClick:()=>window.open(t.image,"_blank")}),p&&h.jsx("div",{className:"break-words",children:y(p)})]})};return h.jsx("div",{className:`flex ${e?"justify-end":"justify-start"} group`,onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),children:h.jsxs("div",{className:`flex items-start gap-3 max-w-[70%] ${e?"flex-row-reverse":""}`,children:[h.jsx("img",{src:g.avatar||`https://ui-avatars.com/api/?name=${encodeURIComponent(g.nickname||"匿名")}&background=56c596&color=fff`,alt:g.nickname||"匿名用戶",className:`w-8 h-8 rounded-full flex-shrink-0 mt-1 ${g.uid!==(s==null?void 0:s.uid)?"cursor-pointer hover:ring-2 hover:ring-sea-blue/50 transition-all duration-200":""}`,onClick:g.uid!==(s==null?void 0:s.uid)?d:void 0,title:g.uid!==(s==null?void 0:s.uid)?`點擊與 ${g.nickname} 私聊`:""}),h.jsxs("div",{className:`flex flex-col ${e?"items-end":"items-start"}`,children:[h.jsxs("p",{className:"text-xs text-gray-500 mb-1 px-1",children:[g.nickname||"匿名用戶",e&&h.jsx("span",{className:"text-blue-500",children:" (你)"})]}),h.jsxs("div",{className:`
              message-bubble relative
              ${e?"message-self bg-sea-blue text-white":"message-other bg-white text-gray-700 border border-gray-200"}
            `,children:[_(),h.jsx("div",{className:`text-xs mt-1 ${e?"text-sea-light":"text-gray-400"}`,children:x(t.timestamp||t.time)})]}),o&&h.jsxs("div",{className:`flex items-center gap-1 mt-1 opacity-0 group-hover:opacity-100 transition-opacity ${e?"flex-row-reverse":""}`,children:[h.jsx("button",{className:"p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors",onClick:f,title:"按讚",children:h.jsx(Kh,{className:`w-3 h-3 transition-colors ${l?"text-red-500 fill-red-500":"text-gray-400 hover:text-red-500"}`})}),h.jsx("button",{className:"p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors",onClick:m,title:"回覆",children:h.jsx(Sr,{className:"w-3 h-3 text-gray-400 hover:text-blue-500"})})]})]})]})})},GA=({voteData:t})=>{const[e,n]=E.useState(null),r=(t==null?void 0:t.votes)||[],i=(t==null?void 0:t.options)||[],s=(t==null?void 0:t.question)||"投票問題",o=r.reduce((l,c)=>l+(c||0),0),a=l=>{e===null&&n(l)};return h.jsxs("div",{className:"bg-gray-50 dark:bg-gray-800 rounded-lg p-4 min-w-[250px]",children:[h.jsxs("h4",{className:"font-medium mb-3 text-gray-800 dark:text-gray-200",children:["📊 ",s]}),h.jsx("div",{className:"space-y-2",children:i.map((l,c)=>{const d=r[c]||0,u=o>0?d/o*100:0,f=e===c;return h.jsxs("button",{onClick:()=>a(c),disabled:e!==null,className:`
                w-full text-left p-3 rounded-lg border transition-colors relative overflow-hidden
                ${f?"border-sea-blue bg-sea-light text-sea-dark":"border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500"}
                ${e!==null?"cursor-default":"cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"}
              `,children:[e!==null&&h.jsx("div",{className:"absolute inset-0 bg-sea-blue/10 transition-all duration-500",style:{width:`${u}%`}}),h.jsxs("div",{className:"relative flex justify-between items-center",children:[h.jsx("span",{children:l}),e!==null&&h.jsxs("span",{className:"text-sm font-medium",children:[d," (",u.toFixed(1),"%)"]})]})]},c)})}),e!==null&&h.jsxs("p",{className:"text-xs text-gray-500 mt-2 text-center",children:["總投票數: ",o]})]})},KA=({onEmojiSelect:t,onClose:e})=>{const n=["😀","😃","😄","😁","😆","😅","😂","🤣","😊","😇","🙂","🙃","😉","😌","😍","🥰","😘","😗","😙","😚","😋","😛","😝","😜","🤪","🤨","🧐","🤓","😎","🤩","🥳","😏","😒","😞","😔","😟","😕","🙁","☹️","😣","😖","😫","😩","🥺","😢","😭","😤","😠","😡","🤬","🤯","😳","🥵","🥶","😱","😨","😰","😥","😓","🤗","🤔","🤭","🤫","🤥","😶","😐","😑","😬","🙄","😯","😦","😧","😮","😲","🥱","😴","🤤","😪","😵","🤐","🥴","🤢","🤮","🤧","😷","🤒","🤕","🤑","🤠","😈","👿","👹","👺","🤡","💩","👻","💀","☠️","👽","👾","🤖","🎃","😺","😸","😹","😻","😼","😽","🙀","😿","😾","❤️","🧡","💛","💚","💙","💜","🖤","🤍","🤎","💔","❣️","💕","💞","💓","💗","💖","💘","💝","💟","☮️","✝️","☪️","🕉️","☸️","✡️","🔯","🕎","☯️","☦️","🛐","⛎","♈","♉","♊","♋","♌","♍","♎","♏","♐","♑"];return h.jsxs("div",{className:"absolute bottom-full left-0 mb-2 bg-white dark:bg-dark-card rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-4 z-50",children:[h.jsx("div",{className:"grid grid-cols-8 gap-2 max-w-xs max-h-40 overflow-y-auto custom-scrollbar",children:n.map((r,i)=>h.jsx("button",{onClick:()=>t(r),className:"text-xl hover:bg-gray-100 dark:hover:bg-gray-700 rounded p-1 transition-colors",children:r},i))}),h.jsx("button",{onClick:e,className:"mt-2 text-xs text-gray-500 hover:text-gray-700 dark:hover:text-gray-300",children:"關閉"})]})},qA=({onSubmit:t,onClose:e})=>{const[n,r]=E.useState(""),[i,s]=E.useState(["",""]),o=()=>{i.length<6&&s([...i,""])},a=(d,u)=>{const f=[...i];f[d]=u,s(f)},l=d=>{if(i.length>2){const u=i.filter((f,m)=>m!==d);s(u)}},c=()=>{const d=i.filter(u=>u.trim());if(!n.trim()){alert("請輸入投票問題");return}if(d.length<2){alert("至少需要兩個選項");return}t({question:n.trim(),options:d,votes:new Array(d.length).fill(0),voters:{}})};return h.jsxs("div",{className:"absolute bottom-full left-0 right-0 mb-2 bg-white dark:bg-dark-card rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-4 z-50",children:[h.jsxs("div",{className:"flex justify-between items-center mb-4",children:[h.jsx("h3",{className:"font-semibold text-gray-800 dark:text-gray-200",children:"建立投票"}),h.jsx("button",{onClick:e,className:"text-gray-500 hover:text-gray-700 dark:hover:text-gray-300",children:h.jsx(wi,{className:"w-5 h-5"})})]}),h.jsxs("div",{className:"mb-4",children:[h.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",children:"投票問題"}),h.jsx("input",{type:"text",value:n,onChange:d=>r(d.target.value),placeholder:"輸入你的問題...",className:`w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                     focus:ring-2 focus:ring-sea-blue/20 focus:border-sea-blue 
                     bg-white dark:bg-gray-700 dark:text-gray-200 outline-none`})]}),h.jsxs("div",{className:"mb-4",children:[h.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",children:"選項"}),h.jsx("div",{className:"space-y-2",children:i.map((d,u)=>h.jsxs("div",{className:"flex gap-2",children:[h.jsx("input",{type:"text",value:d,onChange:f=>a(u,f.target.value),placeholder:`選項 ${u+1}`,className:`flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                           focus:ring-2 focus:ring-sea-blue/20 focus:border-sea-blue 
                           bg-white dark:bg-gray-700 dark:text-gray-200 outline-none`}),i.length>2&&h.jsx("button",{onClick:()=>l(u),className:`px-3 py-2 text-red-500 hover:text-red-700 hover:bg-red-50 
                             dark:hover:bg-red-900/20 rounded-lg transition-colors`,children:h.jsx(wi,{className:"w-4 h-4"})})]},u))}),i.length<6&&h.jsxs("button",{onClick:o,className:"mt-2 flex items-center gap-2 text-sm text-sea-blue hover:text-sea-dark transition-colors",children:[h.jsx(AA,{className:"w-4 h-4"}),"新增選項"]})]}),h.jsxs("div",{className:"flex gap-2 justify-end",children:[h.jsx("button",{onClick:e,className:`px-4 py-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 
                     dark:hover:text-gray-200 border border-gray-300 dark:border-gray-600 
                     rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors`,children:"取消"}),h.jsx("button",{onClick:c,className:`px-4 py-2 bg-sea-blue hover:bg-sea-dark text-white rounded-lg 
                     transition-colors font-medium`,children:"建立投票"})]})]})},QA=({roomId:t})=>{var O,Ae;const{user:e}=st(),{messages:n}=Ut(),{sendMessage:r}=BA(t),[i,s]=E.useState(""),[o,a]=E.useState(!1),[l,c]=E.useState(!1),[d,u]=E.useState(null),[f,m]=E.useState(!1),[g,y]=E.useState(null),x=E.useRef(null),_=E.useRef(null);E.useEffect(()=>{const Ie=setTimeout(()=>{if(x.current){const Te=x.current.parentElement;Te&&(Te.scrollTop=Te.scrollHeight)}},100);return()=>clearTimeout(Ie)},[n]),WA();const p={chat:{name:"閒聊區",tip:"歡迎隨意聊聊、發問、抒發生活大小事。"},love:{name:"找伴區",tip:"你正在找伴專區，請多用心互動，彼此尊重。"},sex:{name:"約炮區",tip:"匿名聊性、約炮自由，但請勿冒犯他人。"}},v=()=>{var W;(W=x.current)==null||W.scrollIntoView({behavior:"smooth"})};E.useEffect(()=>{v()},[n]);const w=async W=>{var Ie;if(W.preventDefault(),!(!i.trim()&&!d))try{let Te=null;d&&((Ie=_.current)!=null&&Ie.files[0])&&(m(!0),Te=await VA(_.current.files[0]));const Ml={type:"text",content:i.trim(),image:Te};await r(Ml),s(""),u(null),a(!1),_.current&&(_.current.value=""),ke.success("訊息已發送")}catch(Te){ke.error("發送失敗: "+Te.message)}finally{m(!1)}},C=async W=>{const Ie=W.target.files[0];if(Ie)try{const Te=await HA(Ie);u(Te)}catch{ke.error("圖片預覽失敗")}},I=W=>{s(Ie=>Ie+W),a(!1)},T=W=>{y(W),s(`@${W.sender} `)},R=()=>{y(null),s("")},B=n;return h.jsxs("div",{className:"flex flex-col h-screen pt-16 md:pt-0",children:[h.jsxs("div",{className:"bg-white/70 dark:bg-dark-card/70 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 p-4",children:[h.jsx("h2",{className:"text-xl font-semibold text-gray-800 dark:text-dark-text mb-1",children:((O=p[t])==null?void 0:O.name)||"聊天室"}),((Ae=p[t])==null?void 0:Ae.tip)&&h.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:p[t].tip})]}),h.jsxs("div",{className:"flex-1 overflow-y-auto overflow-x-hidden p-4 space-y-4 custom-scrollbar",children:[B.length===0?h.jsx("div",{className:"text-center text-gray-500 mt-8",children:h.jsx("p",{children:"還沒有訊息，開始聊天吧！"})}):B.map((W,Ie)=>{var Te;return h.jsx(sw,{message:W,isOwn:((Te=W.sender)==null?void 0:Te.uid)===(e==null?void 0:e.uid)||W.from===(e==null?void 0:e.uid),onReply:T},W.id)}),h.jsx("div",{ref:x})]}),d&&h.jsx("div",{className:"p-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700",children:h.jsxs("div",{className:"relative inline-block",children:[h.jsx("img",{src:d,alt:"Preview",className:"max-w-xs rounded-lg"}),h.jsx("button",{onClick:()=>u(null),className:"absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600",children:h.jsx(wi,{className:"w-4 h-4"})})]})}),g&&h.jsx("div",{className:"bg-blue-50 dark:bg-blue-900/20 border-t border-blue-200 dark:border-blue-700 p-3",children:h.jsxs("div",{className:"flex items-center justify-between",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx(Sr,{className:"w-4 h-4 text-blue-500"}),h.jsxs("span",{className:"text-sm text-blue-600 dark:text-blue-400",children:["回覆 ",g.sender]}),h.jsx("span",{className:"text-sm text-gray-500 truncate max-w-xs",children:g.text})]}),h.jsx("button",{onClick:R,className:"p-1 hover:bg-blue-200 dark:hover:bg-blue-800 rounded transition-colors",children:h.jsx(wi,{className:"w-4 h-4 text-blue-500"})})]})}),h.jsxs("div",{className:"bg-white/70 dark:bg-dark-card/70 backdrop-blur-sm border-t border-gray-200 dark:border-gray-700 p-4",children:[h.jsxs("form",{onSubmit:w,className:"flex items-end gap-2",children:[h.jsxs("div",{className:"flex gap-1",children:[h.jsx("button",{type:"button",onClick:()=>{var W;return(W=_.current)==null?void 0:W.click()},className:"p-2 rounded-lg text-gray-500 hover:text-sea-blue hover:bg-sea-light/50 transition-colors",title:"上傳圖片",children:h.jsx(NA,{className:"w-5 h-5"})}),h.jsx("button",{type:"button",onClick:()=>a(!o),className:"p-2 rounded-lg text-gray-500 hover:text-sea-blue hover:bg-sea-light/50 transition-colors",title:"表情符號",children:h.jsx(LA,{className:"w-5 h-5"})}),h.jsx("button",{type:"button",onClick:()=>c(!l),className:"p-2 rounded-lg text-gray-500 hover:text-sea-blue hover:bg-sea-light/50 transition-colors",title:"建立投票",children:h.jsx(xA,{className:"w-5 h-5"})})]}),h.jsx("div",{className:"flex-1",children:h.jsx("input",{type:"text",value:i,onChange:W=>s(W.target.value),placeholder:"輸入訊息...",className:`w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 
                         focus:ring-2 focus:ring-sea-blue/20 focus:border-sea-blue 
                         bg-white dark:bg-dark-card dark:text-dark-text outline-none`})}),h.jsx("button",{type:"submit",disabled:!i.trim()&&!d||f,className:`p-3 bg-sea-blue hover:bg-sea-dark text-white rounded-lg 
                     disabled:opacity-50 disabled:cursor-not-allowed transition-colors`,children:f?h.jsx("div",{className:"w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"}):h.jsx(nw,{className:"w-5 h-5"})}),h.jsx("input",{ref:_,type:"file",accept:"image/*",onChange:C,className:"hidden"})]}),o&&h.jsx(KA,{onEmojiSelect:I,onClose:()=>a(!1)}),l&&h.jsx(qA,{onSubmit:async W=>{try{await r({type:"vote",content:W}),c(!1),ke.success("投票已建立")}catch{ke.error("建立投票失敗")}},onClose:()=>c(!1)})]})]})},YA=t=>{const{user:e}=st(),{setMessages:n,clearMessages:r}=Ut(),i=E.useRef(0);return E.useEffect(()=>{if(console.log("🔍 usePrivateChat 參數檢查:"),console.log("  - hasUser:",!!e),console.log("  - userUid:",e==null?void 0:e.uid),console.log("  - recipientId:",t),console.log("  - recipientIdType:",typeof t),console.log("  - recipientIdValue:",String(t)),!e||!t){console.log("⚠️ usePrivateChat: 缺少必要參數"),console.log("  - user exists:",!!e),console.log("  - recipientId:",t);return}const o=[e.uid,t].sort(),a=`${o[0]}_${o[1]}`,l=`privateChats/${a}/messages`;console.log("🚀 開始監聽私聊:",{userUid:e.uid,recipientId:t,chatId:a,fullPath:l,sortedIds:o}),r(),console.log("🧹 已清空現有訊息，準備載入私聊訊息");const c=_e(ve,`privateChats/${a}/messages`),d=$h(c,u=>{try{const f=u.val();if(console.log(`💌 私聊 ${a} 收到資料:`,f),f){const m=Object.entries(f).map(([x,_])=>({id:x,text:_.text,user:_.user,from:_.from,avatar:_.avatar,time:_.time,timestamp:_.time||_.timestamp||Date.now()}));m.sort((x,_)=>(x.time||x.timestamp||0)-(_.time||_.timestamp||0));const g=m.length,y=i.current;g>y&&y>0&&m.slice(y).forEach(_=>{if(_.from!==e.uid){const p=_.user||"匿名用戶";console.log(`🔔 收到來自 ${p} 的新私訊:`,_.text),Xt.showPrivateMessageNotification(p,_.text,()=>{window.focus()}),Xt.vibrate([200,100,200]),Xt.playNotificationSound()}}),i.current=g,console.log(`✅ 私聊 ${a} 載入了 ${m.length} 條訊息`),n(m)}else console.log(`📭 私聊 ${a} 沒有訊息`),i.current=0,n([])}catch(f){console.error(`❌ 私聊 ${a} 載入訊息時出錯:`,f),n([])}},u=>{console.error(`❌ Firebase onValue 錯誤 (私聊 ${a}):`,u),u.code==="PERMISSION_DENIED"&&console.error("🚫 權限被拒絕 - 請檢查 Firebase 安全規則!")});return()=>{try{console.log(`🛑 停止監聽私聊 ${a} 的訊息`),d()}catch(u){console.error("Firebase unsubscribe error:",u)}}},[e,t,n,r]),{sendPrivateMessage:async o=>{if(!e||!t)return;const a=[e.uid,t].sort(),l=`${a[0]}_${a[1]}`,c=_e(ve,`privateChats/${l}/messages`),d={text:o.text||o.message,user:e.nickname||e.displayName||"匿名用戶",from:e.uid,avatar:e.avatar||null,time:Date.now()};try{console.log(`📤 發送私人訊息到 ${l}:`,d),await L0(c,d)}catch(u){throw console.error(`❌ 發送私人訊息失敗 (${l}):`,u),u}}}},XA=()=>{const{user:t}=st(),[e,n]=E.useState([]),[r,i]=E.useState(!0);return E.useEffect(()=>{if(!(t!=null&&t.uid)){console.log("⚠️ usePrivateChatsList: 沒有用戶 UID"),n([]),i(!1);return}console.log(`🚀 開始載入用戶 ${t.uid} 的私聊列表...`),(async()=>{try{i(!0);const o=_e(ve,"privateChats"),a=await $n(o);if(!a.exists()){console.log("📭 沒有找到任何私聊房間"),n([]),i(!1);return}const l=a.val(),d=Object.keys(l).filter(g=>g.includes(t.uid));if(console.log(`💬 找到 ${d.length} 個包含用戶的私聊房間:`,d.slice(0,5),"..."),d.length===0){n([]),i(!1);return}console.log(`🚀 開始處理全部 ${d.length} 個私聊房間...`);const u=d.map(async g=>{try{const x=g.split("_").find(I=>I!==t.uid);if(!x)return console.log(`⚠️ 無法解析私聊房間 ${g} 的對方用戶`),null;const[_,p]=await Promise.all([$n(_e(ve,`users/${x}`)),$n(_e(ve,`privateChats/${g}/messages`))]);if(!_.exists())return console.log(`⚠️ 對方用戶 ${x} 不存在`),null;const v=_.val();let w="開始對話...",C=null;if(p.exists()){const I=p.val(),T=Object.entries(I);if(T.length>0){const R=T.sort(([,O],[,Ae])=>(Ae.time||0)-(O.time||0)),[,B]=R[0];w=B.text||"訊息",C=B.time}}return{id:g,recipientId:x,nickname:v.nickname||"匿名用戶",avatar:v.avatar,isOnline:v.online||!1,lastMessage:w,lastMessageTime:C}}catch(y){return console.error(`❌ 處理私聊房間 ${g} 時出錯:`,y),null}}),m=(await Promise.all(u)).filter(g=>g!==null);m.sort((g,y)=>(y.lastMessageTime||0)-(g.lastMessageTime||0)),console.log(`✅ 成功載入 ${m.length} 個私聊對話`),n(m)}catch(o){console.error("❌ 載入私聊列表失敗:",o),n([])}finally{i(!1)}})()},[t==null?void 0:t.uid]),{privateChatsList:e,loading:r,refreshList:()=>{t!=null&&t.uid&&(i(!0),n([]))}}},Um=()=>{const{user:t}=st(),{currentPrivateChat:e,setCurrentPrivateChat:n,setCurrentRoom:r,messages:i}=Ut(),{privateChatsList:s,loading:o,refreshList:a}=XA(),[l,c]=E.useState(""),d=E.useRef(null),{sendPrivateMessage:u}=YA(e==null?void 0:e.recipientId);console.log("💬 PrivateChat 狀態:",{currentPrivateChat:!!e,nickname:e==null?void 0:e.nickname,messagesCount:i.length,privateChatsListCount:s.length,chatsLoading:o}),E.useEffect(()=>{d.current&&d.current.scrollIntoView({behavior:"smooth"})},[i]);const f=()=>{n(null)},m=async()=>{if(!(!l.trim()||!e))try{await u({text:l.trim(),type:"text"}),c("")}catch(g){console.error("發送私訊失敗:",g)}};return e?h.jsxs("div",{className:"flex flex-col h-screen pt-16 md:pt-0",children:[h.jsx("div",{className:"bg-white/70 dark:bg-dark-card/70 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 p-4",children:h.jsx("div",{className:"flex items-center justify-between",children:h.jsxs("div",{className:"flex items-center gap-3",children:[h.jsx("button",{onClick:f,className:"p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors",title:"返回私聊列表",children:h.jsx(ew,{className:"w-5 h-5"})}),h.jsx("img",{src:e.avatar||`https://ui-avatars.com/api/?name=${e.nickname}&background=56c596&color=fff`,alt:e.nickname,className:"w-10 h-10 rounded-full"}),h.jsxs("div",{children:[h.jsx("h2",{className:"font-semibold text-gray-800 dark:text-dark-text",children:e.nickname}),h.jsx("p",{className:"text-sm text-gray-500",children:"私人對話"})]})]})})}),h.jsxs("div",{className:"flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar",children:[i.length===0?h.jsxs("div",{className:"text-center text-gray-500 mt-8",children:[h.jsx(Sr,{className:"w-16 h-16 mx-auto mb-4 text-gray-300"}),h.jsx("p",{children:"還沒有私訊記錄"}),h.jsxs("p",{className:"text-sm",children:["開始和 ",e.nickname," 聊天吧！"]})]}):i.map(g=>{var y;return h.jsx(sw,{message:g,isOwn:((y=g.sender)==null?void 0:y.uid)===(t==null?void 0:t.uid)||g.from===(t==null?void 0:t.uid)},g.id)}),h.jsx("div",{ref:d})]}),h.jsx("div",{className:"bg-white/70 dark:bg-dark-card/70 backdrop-blur-sm border-t border-gray-200 dark:border-gray-700 p-4",children:h.jsxs("div",{className:"flex gap-2",children:[h.jsx("input",{type:"text",value:l,onChange:g=>c(g.target.value),onKeyPress:g=>g.key==="Enter"&&m(),placeholder:`傳訊息給 ${e.nickname}...`,className:`flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 
                         focus:ring-2 focus:ring-sea-blue/20 focus:border-sea-blue 
                         bg-white dark:bg-dark-card dark:text-dark-text outline-none`}),h.jsxs("button",{onClick:m,disabled:!l.trim(),className:"px-6 py-3 bg-sea-blue hover:bg-sea-dark disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg transition-colors flex items-center gap-2",children:[h.jsx(nw,{className:"w-4 h-4"}),"發送"]})]})})]}):h.jsxs("div",{className:"flex flex-col h-screen pt-16 md:pt-0",children:[h.jsx("div",{className:"bg-white/70 dark:bg-dark-card/70 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 p-4",children:h.jsxs("div",{className:"flex items-center justify-between",children:[h.jsxs("div",{children:[h.jsxs("h2",{className:"text-xl font-semibold text-gray-800 dark:text-dark-text mb-1",children:["私人訊息 (",s.length,")"]}),h.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"點選對話開始私訊"})]}),h.jsx("button",{onClick:()=>{console.log("🔄 重新載入私聊列表..."),a()},className:"px-3 py-1 text-xs bg-sea-blue text-white rounded-lg hover:bg-sea-dark transition-colors",children:"🔄 重新載入"})]})}),h.jsx("div",{className:"flex-1 overflow-y-auto",children:o?h.jsxs("div",{className:"flex items-center justify-center h-64",children:[h.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-sea-blue"}),h.jsx("span",{className:"ml-2 text-gray-500",children:"載入私聊列表中..."})]}):s.length===0?h.jsxs("div",{className:"flex flex-col items-center justify-center h-full text-gray-500",children:[h.jsx(Sr,{className:"w-16 h-16 mb-4 text-gray-300"}),h.jsx("p",{className:"text-lg mb-2",children:"還沒有私訊"}),h.jsxs("p",{className:"text-sm text-center px-4 mb-4",children:["在聊天室中點擊其他用戶的頭像",h.jsx("br",{}),"就可以開始私人對話"]})]}):h.jsx("div",{className:"p-4 space-y-2",children:s.map(g=>h.jsxs("div",{onClick:()=>n(g),className:"flex items-center gap-3 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer transition-colors",children:[h.jsx("img",{src:g.avatar||`https://ui-avatars.com/api/?name=${g.nickname}&background=56c596&color=fff`,alt:g.nickname,className:"w-12 h-12 rounded-full"}),h.jsxs("div",{className:"flex-1",children:[h.jsx("h3",{className:"font-medium text-gray-800 dark:text-gray-200",children:g.nickname}),h.jsx("p",{className:"text-sm text-gray-500 truncate",children:g.lastMessage||"開始對話..."})]}),h.jsx("div",{className:"text-xs text-gray-400",children:g.lastMessageTime&&new Date(g.lastMessageTime).toLocaleTimeString("zh-TW",{hour:"2-digit",minute:"2-digit"})})]},g.id))})})]})},JA=()=>{const{currentRoom:t,currentPrivateChat:e}=Ut(),n=()=>t==="private"?e?h.jsx(Um,{}):h.jsx(Um,{}):h.jsx(QA,{roomId:t});return h.jsx("div",{className:"flex-1 flex flex-col",children:n()})},ZA=()=>{const{sidebarOpen:t,setSidebarOpen:e,darkMode:n,toggleDarkMode:r}=Ut(),{user:i}=st();return h.jsx("div",{className:"md:hidden fixed top-0 left-0 right-0 z-40 bg-white/90 dark:bg-dark-card/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700",children:h.jsxs("div",{className:"flex items-center justify-between px-4 py-3",children:[h.jsxs("div",{className:"flex items-center gap-3",children:[h.jsx("button",{onClick:()=>e(!t),className:"p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors",children:t?h.jsx(wi,{className:"w-5 h-5"}):h.jsx(PA,{className:"w-5 h-5"})}),h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("img",{src:"/icon-512.png",alt:"LalaLand",className:"w-8 h-8 rounded-lg"}),h.jsx("h1",{className:"font-semibold text-gray-800 dark:text-dark-text",children:"LalaLand"})]})]}),h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("button",{onClick:r,className:"p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors",children:n?h.jsx(rw,{className:"w-5 h-5"}):h.jsx(tw,{className:"w-5 h-5"})}),i&&h.jsx("img",{src:i.avatar||`https://ui-avatars.com/api/?name=${i.nickname}&background=2877b9&color=fff`,alt:i.nickname,className:"w-8 h-8 rounded-full border-2 border-sea-blue"})]})]})})},Pc=()=>{const{darkMode:t}=Ut(),{user:e}=st();return E.useEffect(()=>{t?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},[t]),E.useEffect(()=>{e&&UA(e)},[e]),h.jsxs("div",{className:"h-screen flex bg-earth-beige dark:bg-dark-bg",children:[h.jsx(ZA,{}),h.jsx($A,{}),h.jsx(JA,{})]})},eO=()=>{const{user:t}=st(),[e,n]=E.useState(""),[r,i]=E.useState(!1),s=async()=>{i(!0),n("");try{console.log("🔍 開始完整偵錯..."),await _A(),n("偵錯完成，請檢查瀏覽器控制台查看詳細結果")}catch(a){n(`偵錯失敗: ${a.message}`)}finally{i(!1)}},o=async()=>{const a=prompt("請輸入房間 ID (如: casual, dating, hookup):");if(a){i(!0);try{const l=await vA(a);n(l?`房間 ${a} 找到 ${Object.keys(l).length} 條訊息`:`房間 ${a} 沒有訊息`)}catch(l){n(`偵錯房間失敗: ${l.message}`)}finally{i(!1)}}};return h.jsx("div",{className:"min-h-screen bg-gray-100 dark:bg-gray-900 p-4",children:h.jsxs("div",{className:"max-w-2xl mx-auto",children:[h.jsx("h1",{className:"text-2xl font-bold text-gray-900 dark:text-white mb-6",children:"Firebase 偵錯工具"}),t&&h.jsxs("div",{className:"mb-6 p-4 bg-white dark:bg-gray-800 rounded-lg shadow",children:[h.jsx("h2",{className:"text-lg font-semibold text-gray-900 dark:text-white mb-2",children:"當前用戶"}),h.jsxs("p",{className:"text-gray-600 dark:text-gray-300",children:["UID: ",t.uid]}),h.jsxs("p",{className:"text-gray-600 dark:text-gray-300",children:["暱稱: ",t.nickname]})]}),h.jsxs("div",{className:"space-y-4",children:[h.jsx("button",{onClick:s,disabled:r,className:"w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50",children:r?"偵錯中...":"完整偵錯 (檢查控制台)"}),h.jsx("button",{onClick:o,disabled:r,className:"w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50",children:"偵錯特定房間"})]}),e&&h.jsxs("div",{className:"mt-6 p-4 bg-white dark:bg-gray-800 rounded-lg shadow",children:[h.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-white mb-2",children:"偵錯結果"}),h.jsx("pre",{className:"text-sm text-gray-600 dark:text-gray-300 whitespace-pre-wrap",children:e})]}),h.jsxs("div",{className:"mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg",children:[h.jsx("h3",{className:"text-lg font-semibold text-yellow-800 dark:text-yellow-200 mb-2",children:"說明"}),h.jsx("p",{className:"text-yellow-700 dark:text-yellow-300 text-sm",children:'如果看到 "permission_denied" 錯誤，請在 Firebase Console 中更新安全規則。 參考專案中的 FIREBASE_SETUP.md 文件。'})]})]})})},tO=()=>h.jsx("div",{className:"fixed inset-0 bg-gradient-to-br from-earth-beige to-white flex items-center justify-center z-50",children:h.jsxs("div",{className:"text-center",children:[h.jsx("img",{src:"/icon-512.png",alt:"LalaLand",className:"w-32 h-32 mx-auto mb-6 animate-float"}),h.jsx("h1",{className:"text-3xl font-bold text-sea-dark mb-2",children:"LalaLand"}),h.jsx("p",{className:"text-gray-600",children:"載入中..."}),h.jsx("div",{className:"mt-6",children:h.jsxs("div",{className:"flex justify-center space-x-1",children:[h.jsx("div",{className:"w-2 h-2 bg-sea-blue rounded-full animate-bounce"}),h.jsx("div",{className:"w-2 h-2 bg-sea-blue rounded-full animate-bounce",style:{animationDelay:"0.1s"}}),h.jsx("div",{className:"w-2 h-2 bg-sea-blue rounded-full animate-bounce",style:{animationDelay:"0.2s"}})]})})]})});class nO extends Xa.Component{constructor(n){super(n);qh(this,"handleReload",()=>{window.location.reload()});this.state={hasError:!1,error:null,errorInfo:null}}static getDerivedStateFromError(n){return{hasError:!0}}componentDidCatch(n,r){console.error("ErrorBoundary caught an error:",n,r),this.setState({error:n,errorInfo:r})}render(){return this.state.hasError?h.jsx("div",{className:"min-h-screen flex items-center justify-center bg-earth-beige p-4",children:h.jsxs("div",{className:"max-w-md w-full bg-white rounded-xl shadow-soft p-6 text-center",children:[h.jsxs("div",{className:"mb-6",children:[h.jsx(MA,{className:"w-16 h-16 text-red-500 mx-auto mb-4"}),h.jsx("h1",{className:"text-2xl font-bold text-gray-800 mb-2",children:"哎呀，出錯了！"}),h.jsx("p",{className:"text-gray-600",children:"應用程式發生了未預期的錯誤"})]}),h.jsxs("div",{className:"space-y-4",children:[h.jsxs("button",{onClick:this.handleReload,className:"w-full btn-primary flex items-center justify-center gap-2",children:[h.jsx(OA,{className:"w-4 h-4"}),"重新載入"]}),h.jsx("button",{onClick:()=>window.location.href="/",className:"w-full btn-secondary",children:"回到首頁"})]}),!1]})}):this.props.children}}function rO(){const{user:t,setUser:e,loading:n,setLoading:r}=st();return E.useEffect(()=>{mA();const i=CI(ps,async s=>{if(s){let o=s.displayName||"匿名用戶",a=s.photoURL||null;try{const l=_e(ve,`users/${s.uid}`),c=await $n(l);if(c.exists()){const d=c.val();o=d.nickname||o,a=d.avatar||a}}catch(l){console.warn("無法讀取用戶資料:",l)}e({uid:s.uid,email:s.email,nickname:o,avatar:a,isAnonymous:s.isAnonymous}),console.log("✅ 用戶已登入:",s.uid,"暱稱:",o)}else e(null);r(!1)});return()=>i()},[e,r]),n?h.jsx(tO,{}):h.jsx(nO,{children:h.jsx(Rk,{future:{v7_startTransition:!0,v7_relativeSplatPath:!0},children:h.jsxs("div",{className:"min-h-screen",children:[h.jsxs(Tk,{children:[h.jsx(Qi,{path:"/",element:t?h.jsx(Pc,{}):h.jsx(jA,{})}),h.jsx(Qi,{path:"/login",element:t?h.jsx(Pc,{}):h.jsx(jm,{})}),h.jsx(Qi,{path:"/chat",element:t?h.jsx(Pc,{}):h.jsx(jm,{})}),h.jsx(Qi,{path:"/debug",element:h.jsx(eO,{})})]}),h.jsx(vC,{position:"top-center",toastOptions:{duration:3e3,style:{background:"#2877b9",color:"#fff",borderRadius:"12px"}}})]})})})}Ac.createRoot(document.getElementById("root")).render(h.jsx(Xa.StrictMode,{children:h.jsx(rO,{})}));
//# sourceMappingURL=index-pKR88Z_q.js.map
