var tw=Object.defineProperty;var nw=(t,e,n)=>e in t?tw(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Uh=(t,e,n)=>nw(t,typeof e!="symbol"?e+"":e,n);function rw(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const s in r)if(s!=="default"&&!(s in t)){const i=Object.getOwnPropertyDescriptor(r,s);i&&Object.defineProperty(t,s,i.get?i:{enumerable:!0,get:()=>r[s]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Tm(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var bm={exports:{}},za={},Rm={exports:{}},U={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $i=Symbol.for("react.element"),sw=Symbol.for("react.portal"),iw=Symbol.for("react.fragment"),ow=Symbol.for("react.strict_mode"),aw=Symbol.for("react.profiler"),lw=Symbol.for("react.provider"),cw=Symbol.for("react.context"),uw=Symbol.for("react.forward_ref"),dw=Symbol.for("react.suspense"),hw=Symbol.for("react.memo"),fw=Symbol.for("react.lazy"),$h=Symbol.iterator;function pw(t){return t===null||typeof t!="object"?null:(t=$h&&t[$h]||t["@@iterator"],typeof t=="function"?t:null)}var Pm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Om=Object.assign,Am={};function ps(t,e,n){this.props=t,this.context=e,this.refs=Am,this.updater=n||Pm}ps.prototype.isReactComponent={};ps.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ps.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Lm(){}Lm.prototype=ps.prototype;function Bu(t,e,n){this.props=t,this.context=e,this.refs=Am,this.updater=n||Pm}var Wu=Bu.prototype=new Lm;Wu.constructor=Bu;Om(Wu,ps.prototype);Wu.isPureReactComponent=!0;var zh=Array.isArray,Dm=Object.prototype.hasOwnProperty,Vu={current:null},Mm={key:!0,ref:!0,__self:!0,__source:!0};function jm(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)Dm.call(e,r)&&!Mm.hasOwnProperty(r)&&(s[r]=e[r]);var a=arguments.length-2;if(a===1)s.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];s.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)s[r]===void 0&&(s[r]=a[r]);return{$$typeof:$i,type:t,key:i,ref:o,props:s,_owner:Vu.current}}function mw(t,e){return{$$typeof:$i,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Hu(t){return typeof t=="object"&&t!==null&&t.$$typeof===$i}function gw(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Bh=/\/+/g;function Rl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?gw(""+t.key):e.toString(36)}function bo(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case $i:case sw:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+Rl(o,0):r,zh(s)?(n="",t!=null&&(n=t.replace(Bh,"$&/")+"/"),bo(s,e,n,"",function(c){return c})):s!=null&&(Hu(s)&&(s=mw(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(Bh,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",zh(t))for(var a=0;a<t.length;a++){i=t[a];var l=r+Rl(i,a);o+=bo(i,e,n,l,s)}else if(l=pw(t),typeof l=="function")for(t=l.call(t),a=0;!(i=t.next()).done;)i=i.value,l=r+Rl(i,a++),o+=bo(i,e,n,l,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function io(t,e,n){if(t==null)return t;var r=[],s=0;return bo(t,r,"","",function(i){return e.call(n,i,s++)}),r}function _w(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var We={current:null},Ro={transition:null},vw={ReactCurrentDispatcher:We,ReactCurrentBatchConfig:Ro,ReactCurrentOwner:Vu};function Fm(){throw Error("act(...) is not supported in production builds of React.")}U.Children={map:io,forEach:function(t,e,n){io(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return io(t,function(){e++}),e},toArray:function(t){return io(t,function(e){return e})||[]},only:function(t){if(!Hu(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};U.Component=ps;U.Fragment=iw;U.Profiler=aw;U.PureComponent=Bu;U.StrictMode=ow;U.Suspense=dw;U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vw;U.act=Fm;U.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Om({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=Vu.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Dm.call(e,l)&&!Mm.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:$i,type:t.type,key:s,ref:i,props:r,_owner:o}};U.createContext=function(t){return t={$$typeof:cw,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:lw,_context:t},t.Consumer=t};U.createElement=jm;U.createFactory=function(t){var e=jm.bind(null,t);return e.type=t,e};U.createRef=function(){return{current:null}};U.forwardRef=function(t){return{$$typeof:uw,render:t}};U.isValidElement=Hu;U.lazy=function(t){return{$$typeof:fw,_payload:{_status:-1,_result:t},_init:_w}};U.memo=function(t,e){return{$$typeof:hw,type:t,compare:e===void 0?null:e}};U.startTransition=function(t){var e=Ro.transition;Ro.transition={};try{t()}finally{Ro.transition=e}};U.unstable_act=Fm;U.useCallback=function(t,e){return We.current.useCallback(t,e)};U.useContext=function(t){return We.current.useContext(t)};U.useDebugValue=function(){};U.useDeferredValue=function(t){return We.current.useDeferredValue(t)};U.useEffect=function(t,e){return We.current.useEffect(t,e)};U.useId=function(){return We.current.useId()};U.useImperativeHandle=function(t,e,n){return We.current.useImperativeHandle(t,e,n)};U.useInsertionEffect=function(t,e){return We.current.useInsertionEffect(t,e)};U.useLayoutEffect=function(t,e){return We.current.useLayoutEffect(t,e)};U.useMemo=function(t,e){return We.current.useMemo(t,e)};U.useReducer=function(t,e,n){return We.current.useReducer(t,e,n)};U.useRef=function(t){return We.current.useRef(t)};U.useState=function(t){return We.current.useState(t)};U.useSyncExternalStore=function(t,e,n){return We.current.useSyncExternalStore(t,e,n)};U.useTransition=function(){return We.current.useTransition()};U.version="18.3.1";Rm.exports=U;var E=Rm.exports;const Ba=Tm(E),yw=rw({__proto__:null,default:Ba},[E]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ww=E,xw=Symbol.for("react.element"),Ew=Symbol.for("react.fragment"),kw=Object.prototype.hasOwnProperty,Cw=ww.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Sw={key:!0,ref:!0,__self:!0,__source:!0};function Um(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)kw.call(e,r)&&!Sw.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:xw,type:t,key:i,ref:o,props:s,_owner:Cw.current}}za.Fragment=Ew;za.jsx=Um;za.jsxs=Um;bm.exports=za;var h=bm.exports,xc={},$m={exports:{}},it={},zm={exports:{}},Bm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(b,L){var D=b.length;b.push(L);e:for(;0<D;){var ce=D-1>>>1,ye=b[ce];if(0<s(ye,L))b[ce]=L,b[D]=ye,D=ce;else break e}}function n(b){return b.length===0?null:b[0]}function r(b){if(b.length===0)return null;var L=b[0],D=b.pop();if(D!==L){b[0]=D;e:for(var ce=0,ye=b.length,ro=ye>>>1;ce<ro;){var Xn=2*(ce+1)-1,bl=b[Xn],Jn=Xn+1,so=b[Jn];if(0>s(bl,D))Jn<ye&&0>s(so,bl)?(b[ce]=so,b[Jn]=D,ce=Jn):(b[ce]=bl,b[Xn]=D,ce=Xn);else if(Jn<ye&&0>s(so,D))b[ce]=so,b[Jn]=D,ce=Jn;else break e}}return L}function s(b,L){var D=b.sortIndex-L.sortIndex;return D!==0?D:b.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,u=null,f=3,p=!1,g=!1,y=!1,w=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(b){for(var L=n(c);L!==null;){if(L.callback===null)r(c);else if(L.startTime<=b)r(c),L.sortIndex=L.expirationTime,e(l,L);else break;L=n(c)}}function x(b){if(y=!1,_(b),!g)if(n(l)!==null)g=!0,Nl(C);else{var L=n(c);L!==null&&Tl(x,L.startTime-b)}}function C(b,L){g=!1,y&&(y=!1,v(R),R=-1),p=!0;var D=f;try{for(_(L),u=n(l);u!==null&&(!(u.expirationTime>L)||b&&!Pe());){var ce=u.callback;if(typeof ce=="function"){u.callback=null,f=u.priorityLevel;var ye=ce(u.expirationTime<=L);L=t.unstable_now(),typeof ye=="function"?u.callback=ye:u===n(l)&&r(l),_(L)}else r(l);u=n(l)}if(u!==null)var ro=!0;else{var Xn=n(c);Xn!==null&&Tl(x,Xn.startTime-L),ro=!1}return ro}finally{u=null,f=D,p=!1}}var I=!1,N=null,R=-1,B=5,A=-1;function Pe(){return!(t.unstable_now()-A<B)}function W(){if(N!==null){var b=t.unstable_now();A=b;var L=!0;try{L=N(!0,b)}finally{L?Ie():(I=!1,N=null)}}else I=!1}var Ie;if(typeof m=="function")Ie=function(){m(W)};else if(typeof MessageChannel<"u"){var Ne=new MessageChannel,Il=Ne.port2;Ne.port1.onmessage=W,Ie=function(){Il.postMessage(null)}}else Ie=function(){w(W,0)};function Nl(b){N=b,I||(I=!0,Ie())}function Tl(b,L){R=w(function(){b(t.unstable_now())},L)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(b){b.callback=null},t.unstable_continueExecution=function(){g||p||(g=!0,Nl(C))},t.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<b?Math.floor(1e3/b):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(b){switch(f){case 1:case 2:case 3:var L=3;break;default:L=f}var D=f;f=L;try{return b()}finally{f=D}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(b,L){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var D=f;f=b;try{return L()}finally{f=D}},t.unstable_scheduleCallback=function(b,L,D){var ce=t.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?ce+D:ce):D=ce,b){case 1:var ye=-1;break;case 2:ye=250;break;case 5:ye=1073741823;break;case 4:ye=1e4;break;default:ye=5e3}return ye=D+ye,b={id:d++,callback:L,priorityLevel:b,startTime:D,expirationTime:ye,sortIndex:-1},D>ce?(b.sortIndex=D,e(c,b),n(l)===null&&b===n(c)&&(y?(v(R),R=-1):y=!0,Tl(x,D-ce))):(b.sortIndex=ye,e(l,b),g||p||(g=!0,Nl(C))),b},t.unstable_shouldYield=Pe,t.unstable_wrapCallback=function(b){var L=f;return function(){var D=f;f=L;try{return b.apply(this,arguments)}finally{f=D}}}})(Bm);zm.exports=Bm;var Iw=zm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nw=E,st=Iw;function k(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Wm=new Set,li={};function kr(t,e){es(t,e),es(t+"Capture",e)}function es(t,e){for(li[t]=e,t=0;t<e.length;t++)Wm.add(e[t])}var Yt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ec=Object.prototype.hasOwnProperty,Tw=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Wh={},Vh={};function bw(t){return Ec.call(Vh,t)?!0:Ec.call(Wh,t)?!1:Tw.test(t)?Vh[t]=!0:(Wh[t]=!0,!1)}function Rw(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Pw(t,e,n,r){if(e===null||typeof e>"u"||Rw(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ve(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var Re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Re[t]=new Ve(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Re[e]=new Ve(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Re[t]=new Ve(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Re[t]=new Ve(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Re[t]=new Ve(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Re[t]=new Ve(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Re[t]=new Ve(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Re[t]=new Ve(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Re[t]=new Ve(t,5,!1,t.toLowerCase(),null,!1,!1)});var Gu=/[\-:]([a-z])/g;function Ku(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Gu,Ku);Re[e]=new Ve(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Gu,Ku);Re[e]=new Ve(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Gu,Ku);Re[e]=new Ve(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Re[t]=new Ve(t,1,!1,t.toLowerCase(),null,!1,!1)});Re.xlinkHref=new Ve("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Re[t]=new Ve(t,1,!1,t.toLowerCase(),null,!0,!0)});function qu(t,e,n,r){var s=Re.hasOwnProperty(e)?Re[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Pw(e,n,s,r)&&(n=null),r||s===null?bw(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var on=Nw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,oo=Symbol.for("react.element"),br=Symbol.for("react.portal"),Rr=Symbol.for("react.fragment"),Qu=Symbol.for("react.strict_mode"),kc=Symbol.for("react.profiler"),Vm=Symbol.for("react.provider"),Hm=Symbol.for("react.context"),Yu=Symbol.for("react.forward_ref"),Cc=Symbol.for("react.suspense"),Sc=Symbol.for("react.suspense_list"),Xu=Symbol.for("react.memo"),fn=Symbol.for("react.lazy"),Gm=Symbol.for("react.offscreen"),Hh=Symbol.iterator;function Ss(t){return t===null||typeof t!="object"?null:(t=Hh&&t[Hh]||t["@@iterator"],typeof t=="function"?t:null)}var ne=Object.assign,Pl;function Fs(t){if(Pl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Pl=e&&e[1]||""}return`
`+Pl+t}var Ol=!1;function Al(t,e){if(!t||Ol)return"";Ol=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var s=c.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,a=i.length-1;1<=o&&0<=a&&s[o]!==i[a];)a--;for(;1<=o&&0<=a;o--,a--)if(s[o]!==i[a]){if(o!==1||a!==1)do if(o--,a--,0>a||s[o]!==i[a]){var l=`
`+s[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Ol=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Fs(t):""}function Ow(t){switch(t.tag){case 5:return Fs(t.type);case 16:return Fs("Lazy");case 13:return Fs("Suspense");case 19:return Fs("SuspenseList");case 0:case 2:case 15:return t=Al(t.type,!1),t;case 11:return t=Al(t.type.render,!1),t;case 1:return t=Al(t.type,!0),t;default:return""}}function Ic(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Rr:return"Fragment";case br:return"Portal";case kc:return"Profiler";case Qu:return"StrictMode";case Cc:return"Suspense";case Sc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Hm:return(t.displayName||"Context")+".Consumer";case Vm:return(t._context.displayName||"Context")+".Provider";case Yu:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Xu:return e=t.displayName||null,e!==null?e:Ic(t.type)||"Memo";case fn:e=t._payload,t=t._init;try{return Ic(t(e))}catch{}}return null}function Aw(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ic(e);case 8:return e===Qu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Fn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Km(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Lw(t){var e=Km(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ao(t){t._valueTracker||(t._valueTracker=Lw(t))}function qm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Km(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ko(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Nc(t,e){var n=e.checked;return ne({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Gh(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Fn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Qm(t,e){e=e.checked,e!=null&&qu(t,"checked",e,!1)}function Tc(t,e){Qm(t,e);var n=Fn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?bc(t,e.type,n):e.hasOwnProperty("defaultValue")&&bc(t,e.type,Fn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Kh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function bc(t,e,n){(e!=="number"||Ko(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Us=Array.isArray;function Wr(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Fn(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function Rc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(k(91));return ne({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function qh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(k(92));if(Us(n)){if(1<n.length)throw Error(k(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Fn(n)}}function Ym(t,e){var n=Fn(e.value),r=Fn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Qh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Xm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Pc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Xm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var lo,Jm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(lo=lo||document.createElement("div"),lo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=lo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ci(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Hs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Dw=["Webkit","ms","Moz","O"];Object.keys(Hs).forEach(function(t){Dw.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Hs[e]=Hs[t]})});function Zm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Hs.hasOwnProperty(t)&&Hs[t]?(""+e).trim():e+"px"}function eg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=Zm(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var Mw=ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Oc(t,e){if(e){if(Mw[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(k(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(k(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(k(61))}if(e.style!=null&&typeof e.style!="object")throw Error(k(62))}}function Ac(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Lc=null;function Ju(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Dc=null,Vr=null,Hr=null;function Yh(t){if(t=Wi(t)){if(typeof Dc!="function")throw Error(k(280));var e=t.stateNode;e&&(e=Ka(e),Dc(t.stateNode,t.type,e))}}function tg(t){Vr?Hr?Hr.push(t):Hr=[t]:Vr=t}function ng(){if(Vr){var t=Vr,e=Hr;if(Hr=Vr=null,Yh(t),e)for(t=0;t<e.length;t++)Yh(e[t])}}function rg(t,e){return t(e)}function sg(){}var Ll=!1;function ig(t,e,n){if(Ll)return t(e,n);Ll=!0;try{return rg(t,e,n)}finally{Ll=!1,(Vr!==null||Hr!==null)&&(sg(),ng())}}function ui(t,e){var n=t.stateNode;if(n===null)return null;var r=Ka(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(k(231,e,typeof n));return n}var Mc=!1;if(Yt)try{var Is={};Object.defineProperty(Is,"passive",{get:function(){Mc=!0}}),window.addEventListener("test",Is,Is),window.removeEventListener("test",Is,Is)}catch{Mc=!1}function jw(t,e,n,r,s,i,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Gs=!1,qo=null,Qo=!1,jc=null,Fw={onError:function(t){Gs=!0,qo=t}};function Uw(t,e,n,r,s,i,o,a,l){Gs=!1,qo=null,jw.apply(Fw,arguments)}function $w(t,e,n,r,s,i,o,a,l){if(Uw.apply(this,arguments),Gs){if(Gs){var c=qo;Gs=!1,qo=null}else throw Error(k(198));Qo||(Qo=!0,jc=c)}}function Cr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function og(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Xh(t){if(Cr(t)!==t)throw Error(k(188))}function zw(t){var e=t.alternate;if(!e){if(e=Cr(t),e===null)throw Error(k(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return Xh(s),t;if(i===r)return Xh(s),e;i=i.sibling}throw Error(k(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o){for(a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?t:e}function ag(t){return t=zw(t),t!==null?lg(t):null}function lg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=lg(t);if(e!==null)return e;t=t.sibling}return null}var cg=st.unstable_scheduleCallback,Jh=st.unstable_cancelCallback,Bw=st.unstable_shouldYield,Ww=st.unstable_requestPaint,ue=st.unstable_now,Vw=st.unstable_getCurrentPriorityLevel,Zu=st.unstable_ImmediatePriority,ug=st.unstable_UserBlockingPriority,Yo=st.unstable_NormalPriority,Hw=st.unstable_LowPriority,dg=st.unstable_IdlePriority,Wa=null,Ot=null;function Gw(t){if(Ot&&typeof Ot.onCommitFiberRoot=="function")try{Ot.onCommitFiberRoot(Wa,t,void 0,(t.current.flags&128)===128)}catch{}}var xt=Math.clz32?Math.clz32:Qw,Kw=Math.log,qw=Math.LN2;function Qw(t){return t>>>=0,t===0?32:31-(Kw(t)/qw|0)|0}var co=64,uo=4194304;function $s(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Xo(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~s;a!==0?r=$s(a):(i&=o,i!==0&&(r=$s(i)))}else o=n&~s,o!==0?r=$s(o):i!==0&&(r=$s(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-xt(e),s=1<<n,r|=t[n],e&=~s;return r}function Yw(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xw(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-xt(i),a=1<<o,l=s[o];l===-1?(!(a&n)||a&r)&&(s[o]=Yw(a,e)):l<=e&&(t.expiredLanes|=a),i&=~a}}function Fc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function hg(){var t=co;return co<<=1,!(co&4194240)&&(co=64),t}function Dl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function zi(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-xt(e),t[e]=n}function Jw(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-xt(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function ed(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-xt(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var V=0;function fg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var pg,td,mg,gg,_g,Uc=!1,ho=[],In=null,Nn=null,Tn=null,di=new Map,hi=new Map,mn=[],Zw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Zh(t,e){switch(t){case"focusin":case"focusout":In=null;break;case"dragenter":case"dragleave":Nn=null;break;case"mouseover":case"mouseout":Tn=null;break;case"pointerover":case"pointerout":di.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":hi.delete(e.pointerId)}}function Ns(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=Wi(e),e!==null&&td(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function ex(t,e,n,r,s){switch(e){case"focusin":return In=Ns(In,t,e,n,r,s),!0;case"dragenter":return Nn=Ns(Nn,t,e,n,r,s),!0;case"mouseover":return Tn=Ns(Tn,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return di.set(i,Ns(di.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,hi.set(i,Ns(hi.get(i)||null,t,e,n,r,s)),!0}return!1}function vg(t){var e=rr(t.target);if(e!==null){var n=Cr(e);if(n!==null){if(e=n.tag,e===13){if(e=og(n),e!==null){t.blockedOn=e,_g(t.priority,function(){mg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Po(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=$c(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Lc=r,n.target.dispatchEvent(r),Lc=null}else return e=Wi(n),e!==null&&td(e),t.blockedOn=n,!1;e.shift()}return!0}function ef(t,e,n){Po(t)&&n.delete(e)}function tx(){Uc=!1,In!==null&&Po(In)&&(In=null),Nn!==null&&Po(Nn)&&(Nn=null),Tn!==null&&Po(Tn)&&(Tn=null),di.forEach(ef),hi.forEach(ef)}function Ts(t,e){t.blockedOn===e&&(t.blockedOn=null,Uc||(Uc=!0,st.unstable_scheduleCallback(st.unstable_NormalPriority,tx)))}function fi(t){function e(s){return Ts(s,t)}if(0<ho.length){Ts(ho[0],t);for(var n=1;n<ho.length;n++){var r=ho[n];r.blockedOn===t&&(r.blockedOn=null)}}for(In!==null&&Ts(In,t),Nn!==null&&Ts(Nn,t),Tn!==null&&Ts(Tn,t),di.forEach(e),hi.forEach(e),n=0;n<mn.length;n++)r=mn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<mn.length&&(n=mn[0],n.blockedOn===null);)vg(n),n.blockedOn===null&&mn.shift()}var Gr=on.ReactCurrentBatchConfig,Jo=!0;function nx(t,e,n,r){var s=V,i=Gr.transition;Gr.transition=null;try{V=1,nd(t,e,n,r)}finally{V=s,Gr.transition=i}}function rx(t,e,n,r){var s=V,i=Gr.transition;Gr.transition=null;try{V=4,nd(t,e,n,r)}finally{V=s,Gr.transition=i}}function nd(t,e,n,r){if(Jo){var s=$c(t,e,n,r);if(s===null)Hl(t,e,r,Zo,n),Zh(t,r);else if(ex(s,t,e,n,r))r.stopPropagation();else if(Zh(t,r),e&4&&-1<Zw.indexOf(t)){for(;s!==null;){var i=Wi(s);if(i!==null&&pg(i),i=$c(t,e,n,r),i===null&&Hl(t,e,r,Zo,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else Hl(t,e,r,null,n)}}var Zo=null;function $c(t,e,n,r){if(Zo=null,t=Ju(r),t=rr(t),t!==null)if(e=Cr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=og(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Zo=t,null}function yg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Vw()){case Zu:return 1;case ug:return 4;case Yo:case Hw:return 16;case dg:return 536870912;default:return 16}default:return 16}}var kn=null,rd=null,Oo=null;function wg(){if(Oo)return Oo;var t,e=rd,n=e.length,r,s="value"in kn?kn.value:kn.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return Oo=s.slice(t,1<r?1-r:void 0)}function Ao(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function fo(){return!0}function tf(){return!1}function ot(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?fo:tf,this.isPropagationStopped=tf,this}return ne(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=fo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=fo)},persist:function(){},isPersistent:fo}),e}var ms={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sd=ot(ms),Bi=ne({},ms,{view:0,detail:0}),sx=ot(Bi),Ml,jl,bs,Va=ne({},Bi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:id,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==bs&&(bs&&t.type==="mousemove"?(Ml=t.screenX-bs.screenX,jl=t.screenY-bs.screenY):jl=Ml=0,bs=t),Ml)},movementY:function(t){return"movementY"in t?t.movementY:jl}}),nf=ot(Va),ix=ne({},Va,{dataTransfer:0}),ox=ot(ix),ax=ne({},Bi,{relatedTarget:0}),Fl=ot(ax),lx=ne({},ms,{animationName:0,elapsedTime:0,pseudoElement:0}),cx=ot(lx),ux=ne({},ms,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),dx=ot(ux),hx=ne({},ms,{data:0}),rf=ot(hx),fx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},px={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=mx[t])?!!e[t]:!1}function id(){return gx}var _x=ne({},Bi,{key:function(t){if(t.key){var e=fx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ao(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?px[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:id,charCode:function(t){return t.type==="keypress"?Ao(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ao(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),vx=ot(_x),yx=ne({},Va,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sf=ot(yx),wx=ne({},Bi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:id}),xx=ot(wx),Ex=ne({},ms,{propertyName:0,elapsedTime:0,pseudoElement:0}),kx=ot(Ex),Cx=ne({},Va,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Sx=ot(Cx),Ix=[9,13,27,32],od=Yt&&"CompositionEvent"in window,Ks=null;Yt&&"documentMode"in document&&(Ks=document.documentMode);var Nx=Yt&&"TextEvent"in window&&!Ks,xg=Yt&&(!od||Ks&&8<Ks&&11>=Ks),of=" ",af=!1;function Eg(t,e){switch(t){case"keyup":return Ix.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function kg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Pr=!1;function Tx(t,e){switch(t){case"compositionend":return kg(e);case"keypress":return e.which!==32?null:(af=!0,of);case"textInput":return t=e.data,t===of&&af?null:t;default:return null}}function bx(t,e){if(Pr)return t==="compositionend"||!od&&Eg(t,e)?(t=wg(),Oo=rd=kn=null,Pr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return xg&&e.locale!=="ko"?null:e.data;default:return null}}var Rx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function lf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Rx[t.type]:e==="textarea"}function Cg(t,e,n,r){tg(r),e=ea(e,"onChange"),0<e.length&&(n=new sd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var qs=null,pi=null;function Px(t){Dg(t,0)}function Ha(t){var e=Lr(t);if(qm(e))return t}function Ox(t,e){if(t==="change")return e}var Sg=!1;if(Yt){var Ul;if(Yt){var $l="oninput"in document;if(!$l){var cf=document.createElement("div");cf.setAttribute("oninput","return;"),$l=typeof cf.oninput=="function"}Ul=$l}else Ul=!1;Sg=Ul&&(!document.documentMode||9<document.documentMode)}function uf(){qs&&(qs.detachEvent("onpropertychange",Ig),pi=qs=null)}function Ig(t){if(t.propertyName==="value"&&Ha(pi)){var e=[];Cg(e,pi,t,Ju(t)),ig(Px,e)}}function Ax(t,e,n){t==="focusin"?(uf(),qs=e,pi=n,qs.attachEvent("onpropertychange",Ig)):t==="focusout"&&uf()}function Lx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ha(pi)}function Dx(t,e){if(t==="click")return Ha(e)}function Mx(t,e){if(t==="input"||t==="change")return Ha(e)}function jx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ct=typeof Object.is=="function"?Object.is:jx;function mi(t,e){if(Ct(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!Ec.call(e,s)||!Ct(t[s],e[s]))return!1}return!0}function df(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function hf(t,e){var n=df(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=df(n)}}function Ng(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Ng(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Tg(){for(var t=window,e=Ko();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ko(t.document)}return e}function ad(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Fx(t){var e=Tg(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Ng(n.ownerDocument.documentElement,n)){if(r!==null&&ad(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=hf(n,i);var o=hf(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Ux=Yt&&"documentMode"in document&&11>=document.documentMode,Or=null,zc=null,Qs=null,Bc=!1;function ff(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Bc||Or==null||Or!==Ko(r)||(r=Or,"selectionStart"in r&&ad(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Qs&&mi(Qs,r)||(Qs=r,r=ea(zc,"onSelect"),0<r.length&&(e=new sd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Or)))}function po(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ar={animationend:po("Animation","AnimationEnd"),animationiteration:po("Animation","AnimationIteration"),animationstart:po("Animation","AnimationStart"),transitionend:po("Transition","TransitionEnd")},zl={},bg={};Yt&&(bg=document.createElement("div").style,"AnimationEvent"in window||(delete Ar.animationend.animation,delete Ar.animationiteration.animation,delete Ar.animationstart.animation),"TransitionEvent"in window||delete Ar.transitionend.transition);function Ga(t){if(zl[t])return zl[t];if(!Ar[t])return t;var e=Ar[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in bg)return zl[t]=e[n];return t}var Rg=Ga("animationend"),Pg=Ga("animationiteration"),Og=Ga("animationstart"),Ag=Ga("transitionend"),Lg=new Map,pf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Hn(t,e){Lg.set(t,e),kr(e,[t])}for(var Bl=0;Bl<pf.length;Bl++){var Wl=pf[Bl],$x=Wl.toLowerCase(),zx=Wl[0].toUpperCase()+Wl.slice(1);Hn($x,"on"+zx)}Hn(Rg,"onAnimationEnd");Hn(Pg,"onAnimationIteration");Hn(Og,"onAnimationStart");Hn("dblclick","onDoubleClick");Hn("focusin","onFocus");Hn("focusout","onBlur");Hn(Ag,"onTransitionEnd");es("onMouseEnter",["mouseout","mouseover"]);es("onMouseLeave",["mouseout","mouseover"]);es("onPointerEnter",["pointerout","pointerover"]);es("onPointerLeave",["pointerout","pointerover"]);kr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));kr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));kr("onBeforeInput",["compositionend","keypress","textInput","paste"]);kr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));kr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));kr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bx=new Set("cancel close invalid load scroll toggle".split(" ").concat(zs));function mf(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,$w(r,e,void 0,t),t.currentTarget=null}function Dg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==i&&s.isPropagationStopped())break e;mf(s,a,c),i=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==i&&s.isPropagationStopped())break e;mf(s,a,c),i=l}}}if(Qo)throw t=jc,Qo=!1,jc=null,t}function Y(t,e){var n=e[Kc];n===void 0&&(n=e[Kc]=new Set);var r=t+"__bubble";n.has(r)||(Mg(e,t,2,!1),n.add(r))}function Vl(t,e,n){var r=0;e&&(r|=4),Mg(n,t,r,e)}var mo="_reactListening"+Math.random().toString(36).slice(2);function gi(t){if(!t[mo]){t[mo]=!0,Wm.forEach(function(n){n!=="selectionchange"&&(Bx.has(n)||Vl(n,!1,t),Vl(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[mo]||(e[mo]=!0,Vl("selectionchange",!1,e))}}function Mg(t,e,n,r){switch(yg(e)){case 1:var s=nx;break;case 4:s=rx;break;default:s=nd}n=s.bind(null,e,n,t),s=void 0,!Mc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function Hl(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===s||a.nodeType===8&&a.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===s||l.nodeType===8&&l.parentNode===s))return;o=o.return}for(;a!==null;){if(o=rr(a),o===null)return;if(l=o.tag,l===5||l===6){r=i=o;continue e}a=a.parentNode}}r=r.return}ig(function(){var c=i,d=Ju(n),u=[];e:{var f=Lg.get(t);if(f!==void 0){var p=sd,g=t;switch(t){case"keypress":if(Ao(n)===0)break e;case"keydown":case"keyup":p=vx;break;case"focusin":g="focus",p=Fl;break;case"focusout":g="blur",p=Fl;break;case"beforeblur":case"afterblur":p=Fl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=nf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=ox;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=xx;break;case Rg:case Pg:case Og:p=cx;break;case Ag:p=kx;break;case"scroll":p=sx;break;case"wheel":p=Sx;break;case"copy":case"cut":case"paste":p=dx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=sf}var y=(e&4)!==0,w=!y&&t==="scroll",v=y?f!==null?f+"Capture":null:f;y=[];for(var m=c,_;m!==null;){_=m;var x=_.stateNode;if(_.tag===5&&x!==null&&(_=x,v!==null&&(x=ui(m,v),x!=null&&y.push(_i(m,x,_)))),w)break;m=m.return}0<y.length&&(f=new p(f,g,null,n,d),u.push({event:f,listeners:y}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==Lc&&(g=n.relatedTarget||n.fromElement)&&(rr(g)||g[Xt]))break e;if((p||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=c,g=g?rr(g):null,g!==null&&(w=Cr(g),g!==w||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=c),p!==g)){if(y=nf,x="onMouseLeave",v="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(y=sf,x="onPointerLeave",v="onPointerEnter",m="pointer"),w=p==null?f:Lr(p),_=g==null?f:Lr(g),f=new y(x,m+"leave",p,n,d),f.target=w,f.relatedTarget=_,x=null,rr(d)===c&&(y=new y(v,m+"enter",g,n,d),y.target=_,y.relatedTarget=w,x=y),w=x,p&&g)t:{for(y=p,v=g,m=0,_=y;_;_=Nr(_))m++;for(_=0,x=v;x;x=Nr(x))_++;for(;0<m-_;)y=Nr(y),m--;for(;0<_-m;)v=Nr(v),_--;for(;m--;){if(y===v||v!==null&&y===v.alternate)break t;y=Nr(y),v=Nr(v)}y=null}else y=null;p!==null&&gf(u,f,p,y,!1),g!==null&&w!==null&&gf(u,w,g,y,!0)}}e:{if(f=c?Lr(c):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var C=Ox;else if(lf(f))if(Sg)C=Mx;else{C=Lx;var I=Ax}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=Dx);if(C&&(C=C(t,c))){Cg(u,C,n,d);break e}I&&I(t,f,c),t==="focusout"&&(I=f._wrapperState)&&I.controlled&&f.type==="number"&&bc(f,"number",f.value)}switch(I=c?Lr(c):window,t){case"focusin":(lf(I)||I.contentEditable==="true")&&(Or=I,zc=c,Qs=null);break;case"focusout":Qs=zc=Or=null;break;case"mousedown":Bc=!0;break;case"contextmenu":case"mouseup":case"dragend":Bc=!1,ff(u,n,d);break;case"selectionchange":if(Ux)break;case"keydown":case"keyup":ff(u,n,d)}var N;if(od)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Pr?Eg(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(xg&&n.locale!=="ko"&&(Pr||R!=="onCompositionStart"?R==="onCompositionEnd"&&Pr&&(N=wg()):(kn=d,rd="value"in kn?kn.value:kn.textContent,Pr=!0)),I=ea(c,R),0<I.length&&(R=new rf(R,t,null,n,d),u.push({event:R,listeners:I}),N?R.data=N:(N=kg(n),N!==null&&(R.data=N)))),(N=Nx?Tx(t,n):bx(t,n))&&(c=ea(c,"onBeforeInput"),0<c.length&&(d=new rf("onBeforeInput","beforeinput",null,n,d),u.push({event:d,listeners:c}),d.data=N))}Dg(u,e)})}function _i(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ea(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=ui(t,n),i!=null&&r.unshift(_i(t,i,s)),i=ui(t,e),i!=null&&r.push(_i(t,i,s))),t=t.return}return r}function Nr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function gf(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,s?(l=ui(n,i),l!=null&&o.unshift(_i(n,l,a))):s||(l=ui(n,i),l!=null&&o.push(_i(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Wx=/\r\n?/g,Vx=/\u0000|\uFFFD/g;function _f(t){return(typeof t=="string"?t:""+t).replace(Wx,`
`).replace(Vx,"")}function go(t,e,n){if(e=_f(e),_f(t)!==e&&n)throw Error(k(425))}function ta(){}var Wc=null,Vc=null;function Hc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Gc=typeof setTimeout=="function"?setTimeout:void 0,Hx=typeof clearTimeout=="function"?clearTimeout:void 0,vf=typeof Promise=="function"?Promise:void 0,Gx=typeof queueMicrotask=="function"?queueMicrotask:typeof vf<"u"?function(t){return vf.resolve(null).then(t).catch(Kx)}:Gc;function Kx(t){setTimeout(function(){throw t})}function Gl(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),fi(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);fi(e)}function bn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function yf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var gs=Math.random().toString(36).slice(2),bt="__reactFiber$"+gs,vi="__reactProps$"+gs,Xt="__reactContainer$"+gs,Kc="__reactEvents$"+gs,qx="__reactListeners$"+gs,Qx="__reactHandles$"+gs;function rr(t){var e=t[bt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Xt]||n[bt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=yf(t);t!==null;){if(n=t[bt])return n;t=yf(t)}return e}t=n,n=t.parentNode}return null}function Wi(t){return t=t[bt]||t[Xt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Lr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(k(33))}function Ka(t){return t[vi]||null}var qc=[],Dr=-1;function Gn(t){return{current:t}}function J(t){0>Dr||(t.current=qc[Dr],qc[Dr]=null,Dr--)}function Q(t,e){Dr++,qc[Dr]=t.current,t.current=e}var Un={},Me=Gn(Un),qe=Gn(!1),hr=Un;function ts(t,e){var n=t.type.contextTypes;if(!n)return Un;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function Qe(t){return t=t.childContextTypes,t!=null}function na(){J(qe),J(Me)}function wf(t,e,n){if(Me.current!==Un)throw Error(k(168));Q(Me,e),Q(qe,n)}function jg(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(k(108,Aw(t)||"Unknown",s));return ne({},n,r)}function ra(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Un,hr=Me.current,Q(Me,t),Q(qe,qe.current),!0}function xf(t,e,n){var r=t.stateNode;if(!r)throw Error(k(169));n?(t=jg(t,e,hr),r.__reactInternalMemoizedMergedChildContext=t,J(qe),J(Me),Q(Me,t)):J(qe),Q(qe,n)}var zt=null,qa=!1,Kl=!1;function Fg(t){zt===null?zt=[t]:zt.push(t)}function Yx(t){qa=!0,Fg(t)}function Kn(){if(!Kl&&zt!==null){Kl=!0;var t=0,e=V;try{var n=zt;for(V=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}zt=null,qa=!1}catch(s){throw zt!==null&&(zt=zt.slice(t+1)),cg(Zu,Kn),s}finally{V=e,Kl=!1}}return null}var Mr=[],jr=0,sa=null,ia=0,at=[],lt=0,fr=null,Bt=1,Wt="";function Zn(t,e){Mr[jr++]=ia,Mr[jr++]=sa,sa=t,ia=e}function Ug(t,e,n){at[lt++]=Bt,at[lt++]=Wt,at[lt++]=fr,fr=t;var r=Bt;t=Wt;var s=32-xt(r)-1;r&=~(1<<s),n+=1;var i=32-xt(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,Bt=1<<32-xt(e)+s|n<<s|r,Wt=i+t}else Bt=1<<i|n<<s|r,Wt=t}function ld(t){t.return!==null&&(Zn(t,1),Ug(t,1,0))}function cd(t){for(;t===sa;)sa=Mr[--jr],Mr[jr]=null,ia=Mr[--jr],Mr[jr]=null;for(;t===fr;)fr=at[--lt],at[lt]=null,Wt=at[--lt],at[lt]=null,Bt=at[--lt],at[lt]=null}var rt=null,et=null,Z=!1,gt=null;function $g(t,e){var n=ct(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Ef(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,rt=t,et=bn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,rt=t,et=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=fr!==null?{id:Bt,overflow:Wt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=ct(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,rt=t,et=null,!0):!1;default:return!1}}function Qc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Yc(t){if(Z){var e=et;if(e){var n=e;if(!Ef(t,e)){if(Qc(t))throw Error(k(418));e=bn(n.nextSibling);var r=rt;e&&Ef(t,e)?$g(r,n):(t.flags=t.flags&-4097|2,Z=!1,rt=t)}}else{if(Qc(t))throw Error(k(418));t.flags=t.flags&-4097|2,Z=!1,rt=t}}}function kf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;rt=t}function _o(t){if(t!==rt)return!1;if(!Z)return kf(t),Z=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Hc(t.type,t.memoizedProps)),e&&(e=et)){if(Qc(t))throw zg(),Error(k(418));for(;e;)$g(t,e),e=bn(e.nextSibling)}if(kf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(k(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){et=bn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}et=null}}else et=rt?bn(t.stateNode.nextSibling):null;return!0}function zg(){for(var t=et;t;)t=bn(t.nextSibling)}function ns(){et=rt=null,Z=!1}function ud(t){gt===null?gt=[t]:gt.push(t)}var Xx=on.ReactCurrentBatchConfig;function Rs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var a=s.refs;o===null?delete a[i]:a[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,t))}return t}function vo(t,e){throw t=Object.prototype.toString.call(e),Error(k(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Cf(t){var e=t._init;return e(t._payload)}function Bg(t){function e(v,m){if(t){var _=v.deletions;_===null?(v.deletions=[m],v.flags|=16):_.push(m)}}function n(v,m){if(!t)return null;for(;m!==null;)e(v,m),m=m.sibling;return null}function r(v,m){for(v=new Map;m!==null;)m.key!==null?v.set(m.key,m):v.set(m.index,m),m=m.sibling;return v}function s(v,m){return v=An(v,m),v.index=0,v.sibling=null,v}function i(v,m,_){return v.index=_,t?(_=v.alternate,_!==null?(_=_.index,_<m?(v.flags|=2,m):_):(v.flags|=2,m)):(v.flags|=1048576,m)}function o(v){return t&&v.alternate===null&&(v.flags|=2),v}function a(v,m,_,x){return m===null||m.tag!==6?(m=ec(_,v.mode,x),m.return=v,m):(m=s(m,_),m.return=v,m)}function l(v,m,_,x){var C=_.type;return C===Rr?d(v,m,_.props.children,x,_.key):m!==null&&(m.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===fn&&Cf(C)===m.type)?(x=s(m,_.props),x.ref=Rs(v,m,_),x.return=v,x):(x=$o(_.type,_.key,_.props,null,v.mode,x),x.ref=Rs(v,m,_),x.return=v,x)}function c(v,m,_,x){return m===null||m.tag!==4||m.stateNode.containerInfo!==_.containerInfo||m.stateNode.implementation!==_.implementation?(m=tc(_,v.mode,x),m.return=v,m):(m=s(m,_.children||[]),m.return=v,m)}function d(v,m,_,x,C){return m===null||m.tag!==7?(m=cr(_,v.mode,x,C),m.return=v,m):(m=s(m,_),m.return=v,m)}function u(v,m,_){if(typeof m=="string"&&m!==""||typeof m=="number")return m=ec(""+m,v.mode,_),m.return=v,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case oo:return _=$o(m.type,m.key,m.props,null,v.mode,_),_.ref=Rs(v,null,m),_.return=v,_;case br:return m=tc(m,v.mode,_),m.return=v,m;case fn:var x=m._init;return u(v,x(m._payload),_)}if(Us(m)||Ss(m))return m=cr(m,v.mode,_,null),m.return=v,m;vo(v,m)}return null}function f(v,m,_,x){var C=m!==null?m.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return C!==null?null:a(v,m,""+_,x);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case oo:return _.key===C?l(v,m,_,x):null;case br:return _.key===C?c(v,m,_,x):null;case fn:return C=_._init,f(v,m,C(_._payload),x)}if(Us(_)||Ss(_))return C!==null?null:d(v,m,_,x,null);vo(v,_)}return null}function p(v,m,_,x,C){if(typeof x=="string"&&x!==""||typeof x=="number")return v=v.get(_)||null,a(m,v,""+x,C);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case oo:return v=v.get(x.key===null?_:x.key)||null,l(m,v,x,C);case br:return v=v.get(x.key===null?_:x.key)||null,c(m,v,x,C);case fn:var I=x._init;return p(v,m,_,I(x._payload),C)}if(Us(x)||Ss(x))return v=v.get(_)||null,d(m,v,x,C,null);vo(m,x)}return null}function g(v,m,_,x){for(var C=null,I=null,N=m,R=m=0,B=null;N!==null&&R<_.length;R++){N.index>R?(B=N,N=null):B=N.sibling;var A=f(v,N,_[R],x);if(A===null){N===null&&(N=B);break}t&&N&&A.alternate===null&&e(v,N),m=i(A,m,R),I===null?C=A:I.sibling=A,I=A,N=B}if(R===_.length)return n(v,N),Z&&Zn(v,R),C;if(N===null){for(;R<_.length;R++)N=u(v,_[R],x),N!==null&&(m=i(N,m,R),I===null?C=N:I.sibling=N,I=N);return Z&&Zn(v,R),C}for(N=r(v,N);R<_.length;R++)B=p(N,v,R,_[R],x),B!==null&&(t&&B.alternate!==null&&N.delete(B.key===null?R:B.key),m=i(B,m,R),I===null?C=B:I.sibling=B,I=B);return t&&N.forEach(function(Pe){return e(v,Pe)}),Z&&Zn(v,R),C}function y(v,m,_,x){var C=Ss(_);if(typeof C!="function")throw Error(k(150));if(_=C.call(_),_==null)throw Error(k(151));for(var I=C=null,N=m,R=m=0,B=null,A=_.next();N!==null&&!A.done;R++,A=_.next()){N.index>R?(B=N,N=null):B=N.sibling;var Pe=f(v,N,A.value,x);if(Pe===null){N===null&&(N=B);break}t&&N&&Pe.alternate===null&&e(v,N),m=i(Pe,m,R),I===null?C=Pe:I.sibling=Pe,I=Pe,N=B}if(A.done)return n(v,N),Z&&Zn(v,R),C;if(N===null){for(;!A.done;R++,A=_.next())A=u(v,A.value,x),A!==null&&(m=i(A,m,R),I===null?C=A:I.sibling=A,I=A);return Z&&Zn(v,R),C}for(N=r(v,N);!A.done;R++,A=_.next())A=p(N,v,R,A.value,x),A!==null&&(t&&A.alternate!==null&&N.delete(A.key===null?R:A.key),m=i(A,m,R),I===null?C=A:I.sibling=A,I=A);return t&&N.forEach(function(W){return e(v,W)}),Z&&Zn(v,R),C}function w(v,m,_,x){if(typeof _=="object"&&_!==null&&_.type===Rr&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case oo:e:{for(var C=_.key,I=m;I!==null;){if(I.key===C){if(C=_.type,C===Rr){if(I.tag===7){n(v,I.sibling),m=s(I,_.props.children),m.return=v,v=m;break e}}else if(I.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===fn&&Cf(C)===I.type){n(v,I.sibling),m=s(I,_.props),m.ref=Rs(v,I,_),m.return=v,v=m;break e}n(v,I);break}else e(v,I);I=I.sibling}_.type===Rr?(m=cr(_.props.children,v.mode,x,_.key),m.return=v,v=m):(x=$o(_.type,_.key,_.props,null,v.mode,x),x.ref=Rs(v,m,_),x.return=v,v=x)}return o(v);case br:e:{for(I=_.key;m!==null;){if(m.key===I)if(m.tag===4&&m.stateNode.containerInfo===_.containerInfo&&m.stateNode.implementation===_.implementation){n(v,m.sibling),m=s(m,_.children||[]),m.return=v,v=m;break e}else{n(v,m);break}else e(v,m);m=m.sibling}m=tc(_,v.mode,x),m.return=v,v=m}return o(v);case fn:return I=_._init,w(v,m,I(_._payload),x)}if(Us(_))return g(v,m,_,x);if(Ss(_))return y(v,m,_,x);vo(v,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,m!==null&&m.tag===6?(n(v,m.sibling),m=s(m,_),m.return=v,v=m):(n(v,m),m=ec(_,v.mode,x),m.return=v,v=m),o(v)):n(v,m)}return w}var rs=Bg(!0),Wg=Bg(!1),oa=Gn(null),aa=null,Fr=null,dd=null;function hd(){dd=Fr=aa=null}function fd(t){var e=oa.current;J(oa),t._currentValue=e}function Xc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Kr(t,e){aa=t,dd=Fr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ge=!0),t.firstContext=null)}function dt(t){var e=t._currentValue;if(dd!==t)if(t={context:t,memoizedValue:e,next:null},Fr===null){if(aa===null)throw Error(k(308));Fr=t,aa.dependencies={lanes:0,firstContext:t}}else Fr=Fr.next=t;return e}var sr=null;function pd(t){sr===null?sr=[t]:sr.push(t)}function Vg(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,pd(e)):(n.next=s.next,s.next=n),e.interleaved=n,Jt(t,r)}function Jt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var pn=!1;function md(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Hg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function qt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Rn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,$&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,Jt(t,n)}return s=r.interleaved,s===null?(e.next=e,pd(r)):(e.next=s.next,s.next=e),r.interleaved=e,Jt(t,n)}function Lo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ed(t,n)}}function Sf(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function la(t,e,n,r){var s=t.updateQueue;pn=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,a=s.shared.pending;if(a!==null){s.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?i=c:o.next=c,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(i!==null){var u=s.baseState;o=0,d=c=l=null,a=i;do{var f=a.lane,p=a.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,y=a;switch(f=e,p=n,y.tag){case 1:if(g=y.payload,typeof g=="function"){u=g.call(p,u,f);break e}u=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=y.payload,f=typeof g=="function"?g.call(p,u,f):g,f==null)break e;u=ne({},u,f);break e;case 2:pn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=s.effects,f===null?s.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=p,l=u):d=d.next=p,o|=f;if(a=a.next,a===null){if(a=s.shared.pending,a===null)break;f=a,a=f.next,f.next=null,s.lastBaseUpdate=f,s.shared.pending=null}}while(!0);if(d===null&&(l=u),s.baseState=l,s.firstBaseUpdate=c,s.lastBaseUpdate=d,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);mr|=o,t.lanes=o,t.memoizedState=u}}function If(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(k(191,s));s.call(r)}}}var Vi={},At=Gn(Vi),yi=Gn(Vi),wi=Gn(Vi);function ir(t){if(t===Vi)throw Error(k(174));return t}function gd(t,e){switch(Q(wi,e),Q(yi,t),Q(At,Vi),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Pc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Pc(e,t)}J(At),Q(At,e)}function ss(){J(At),J(yi),J(wi)}function Gg(t){ir(wi.current);var e=ir(At.current),n=Pc(e,t.type);e!==n&&(Q(yi,t),Q(At,n))}function _d(t){yi.current===t&&(J(At),J(yi))}var ee=Gn(0);function ca(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ql=[];function vd(){for(var t=0;t<ql.length;t++)ql[t]._workInProgressVersionPrimary=null;ql.length=0}var Do=on.ReactCurrentDispatcher,Ql=on.ReactCurrentBatchConfig,pr=0,te=null,fe=null,xe=null,ua=!1,Ys=!1,xi=0,Jx=0;function Oe(){throw Error(k(321))}function yd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ct(t[n],e[n]))return!1;return!0}function wd(t,e,n,r,s,i){if(pr=i,te=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Do.current=t===null||t.memoizedState===null?nE:rE,t=n(r,s),Ys){i=0;do{if(Ys=!1,xi=0,25<=i)throw Error(k(301));i+=1,xe=fe=null,e.updateQueue=null,Do.current=sE,t=n(r,s)}while(Ys)}if(Do.current=da,e=fe!==null&&fe.next!==null,pr=0,xe=fe=te=null,ua=!1,e)throw Error(k(300));return t}function xd(){var t=xi!==0;return xi=0,t}function Tt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xe===null?te.memoizedState=xe=t:xe=xe.next=t,xe}function ht(){if(fe===null){var t=te.alternate;t=t!==null?t.memoizedState:null}else t=fe.next;var e=xe===null?te.memoizedState:xe.next;if(e!==null)xe=e,fe=t;else{if(t===null)throw Error(k(310));fe=t,t={memoizedState:fe.memoizedState,baseState:fe.baseState,baseQueue:fe.baseQueue,queue:fe.queue,next:null},xe===null?te.memoizedState=xe=t:xe=xe.next=t}return xe}function Ei(t,e){return typeof e=="function"?e(t):e}function Yl(t){var e=ht(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=fe,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var a=o=null,l=null,c=i;do{var d=c.lane;if((pr&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var u={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=u,o=r):l=l.next=u,te.lanes|=d,mr|=d}c=c.next}while(c!==null&&c!==i);l===null?o=r:l.next=a,Ct(r,e.memoizedState)||(Ge=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,te.lanes|=i,mr|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Xl(t){var e=ht(),n=e.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);Ct(i,e.memoizedState)||(Ge=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function Kg(){}function qg(t,e){var n=te,r=ht(),s=e(),i=!Ct(r.memoizedState,s);if(i&&(r.memoizedState=s,Ge=!0),r=r.queue,Ed(Xg.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||xe!==null&&xe.memoizedState.tag&1){if(n.flags|=2048,ki(9,Yg.bind(null,n,r,s,e),void 0,null),Se===null)throw Error(k(349));pr&30||Qg(n,e,s)}return s}function Qg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=te.updateQueue,e===null?(e={lastEffect:null,stores:null},te.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Yg(t,e,n,r){e.value=n,e.getSnapshot=r,Jg(e)&&Zg(t)}function Xg(t,e,n){return n(function(){Jg(e)&&Zg(t)})}function Jg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ct(t,n)}catch{return!0}}function Zg(t){var e=Jt(t,1);e!==null&&Et(e,t,1,-1)}function Nf(t){var e=Tt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ei,lastRenderedState:t},e.queue=t,t=t.dispatch=tE.bind(null,te,t),[e.memoizedState,t]}function ki(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=te.updateQueue,e===null?(e={lastEffect:null,stores:null},te.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function e_(){return ht().memoizedState}function Mo(t,e,n,r){var s=Tt();te.flags|=t,s.memoizedState=ki(1|e,n,void 0,r===void 0?null:r)}function Qa(t,e,n,r){var s=ht();r=r===void 0?null:r;var i=void 0;if(fe!==null){var o=fe.memoizedState;if(i=o.destroy,r!==null&&yd(r,o.deps)){s.memoizedState=ki(e,n,i,r);return}}te.flags|=t,s.memoizedState=ki(1|e,n,i,r)}function Tf(t,e){return Mo(8390656,8,t,e)}function Ed(t,e){return Qa(2048,8,t,e)}function t_(t,e){return Qa(4,2,t,e)}function n_(t,e){return Qa(4,4,t,e)}function r_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function s_(t,e,n){return n=n!=null?n.concat([t]):null,Qa(4,4,r_.bind(null,e,t),n)}function kd(){}function i_(t,e){var n=ht();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&yd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function o_(t,e){var n=ht();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&yd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function a_(t,e,n){return pr&21?(Ct(n,e)||(n=hg(),te.lanes|=n,mr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ge=!0),t.memoizedState=n)}function Zx(t,e){var n=V;V=n!==0&&4>n?n:4,t(!0);var r=Ql.transition;Ql.transition={};try{t(!1),e()}finally{V=n,Ql.transition=r}}function l_(){return ht().memoizedState}function eE(t,e,n){var r=On(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},c_(t))u_(e,n);else if(n=Vg(t,e,n,r),n!==null){var s=ze();Et(n,t,r,s),d_(n,e,r)}}function tE(t,e,n){var r=On(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(c_(t))u_(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,a=i(o,n);if(s.hasEagerState=!0,s.eagerState=a,Ct(a,o)){var l=e.interleaved;l===null?(s.next=s,pd(e)):(s.next=l.next,l.next=s),e.interleaved=s;return}}catch{}finally{}n=Vg(t,e,s,r),n!==null&&(s=ze(),Et(n,t,r,s),d_(n,e,r))}}function c_(t){var e=t.alternate;return t===te||e!==null&&e===te}function u_(t,e){Ys=ua=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function d_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,ed(t,n)}}var da={readContext:dt,useCallback:Oe,useContext:Oe,useEffect:Oe,useImperativeHandle:Oe,useInsertionEffect:Oe,useLayoutEffect:Oe,useMemo:Oe,useReducer:Oe,useRef:Oe,useState:Oe,useDebugValue:Oe,useDeferredValue:Oe,useTransition:Oe,useMutableSource:Oe,useSyncExternalStore:Oe,useId:Oe,unstable_isNewReconciler:!1},nE={readContext:dt,useCallback:function(t,e){return Tt().memoizedState=[t,e===void 0?null:e],t},useContext:dt,useEffect:Tf,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Mo(4194308,4,r_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Mo(4194308,4,t,e)},useInsertionEffect:function(t,e){return Mo(4,2,t,e)},useMemo:function(t,e){var n=Tt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Tt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=eE.bind(null,te,t),[r.memoizedState,t]},useRef:function(t){var e=Tt();return t={current:t},e.memoizedState=t},useState:Nf,useDebugValue:kd,useDeferredValue:function(t){return Tt().memoizedState=t},useTransition:function(){var t=Nf(!1),e=t[0];return t=Zx.bind(null,t[1]),Tt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=te,s=Tt();if(Z){if(n===void 0)throw Error(k(407));n=n()}else{if(n=e(),Se===null)throw Error(k(349));pr&30||Qg(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,Tf(Xg.bind(null,r,i,t),[t]),r.flags|=2048,ki(9,Yg.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=Tt(),e=Se.identifierPrefix;if(Z){var n=Wt,r=Bt;n=(r&~(1<<32-xt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=xi++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Jx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},rE={readContext:dt,useCallback:i_,useContext:dt,useEffect:Ed,useImperativeHandle:s_,useInsertionEffect:t_,useLayoutEffect:n_,useMemo:o_,useReducer:Yl,useRef:e_,useState:function(){return Yl(Ei)},useDebugValue:kd,useDeferredValue:function(t){var e=ht();return a_(e,fe.memoizedState,t)},useTransition:function(){var t=Yl(Ei)[0],e=ht().memoizedState;return[t,e]},useMutableSource:Kg,useSyncExternalStore:qg,useId:l_,unstable_isNewReconciler:!1},sE={readContext:dt,useCallback:i_,useContext:dt,useEffect:Ed,useImperativeHandle:s_,useInsertionEffect:t_,useLayoutEffect:n_,useMemo:o_,useReducer:Xl,useRef:e_,useState:function(){return Xl(Ei)},useDebugValue:kd,useDeferredValue:function(t){var e=ht();return fe===null?e.memoizedState=t:a_(e,fe.memoizedState,t)},useTransition:function(){var t=Xl(Ei)[0],e=ht().memoizedState;return[t,e]},useMutableSource:Kg,useSyncExternalStore:qg,useId:l_,unstable_isNewReconciler:!1};function pt(t,e){if(t&&t.defaultProps){e=ne({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Jc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ne({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ya={isMounted:function(t){return(t=t._reactInternals)?Cr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ze(),s=On(t),i=qt(r,s);i.payload=e,n!=null&&(i.callback=n),e=Rn(t,i,s),e!==null&&(Et(e,t,s,r),Lo(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ze(),s=On(t),i=qt(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=Rn(t,i,s),e!==null&&(Et(e,t,s,r),Lo(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ze(),r=On(t),s=qt(n,r);s.tag=2,e!=null&&(s.callback=e),e=Rn(t,s,r),e!==null&&(Et(e,t,r,n),Lo(e,t,r))}};function bf(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!mi(n,r)||!mi(s,i):!0}function h_(t,e,n){var r=!1,s=Un,i=e.contextType;return typeof i=="object"&&i!==null?i=dt(i):(s=Qe(e)?hr:Me.current,r=e.contextTypes,i=(r=r!=null)?ts(t,s):Un),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ya,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function Rf(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ya.enqueueReplaceState(e,e.state,null)}function Zc(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},md(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=dt(i):(i=Qe(e)?hr:Me.current,s.context=ts(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(Jc(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&Ya.enqueueReplaceState(s,s.state,null),la(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function is(t,e){try{var n="",r=e;do n+=Ow(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function Jl(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function eu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var iE=typeof WeakMap=="function"?WeakMap:Map;function f_(t,e,n){n=qt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){fa||(fa=!0,uu=r),eu(t,e)},n}function p_(t,e,n){n=qt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){eu(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){eu(t,e),typeof r!="function"&&(Pn===null?Pn=new Set([this]):Pn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Pf(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new iE;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=yE.bind(null,t,e,n),e.then(t,t))}function Of(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Af(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=qt(-1,1),e.tag=2,Rn(n,e,1))),n.lanes|=1),t)}var oE=on.ReactCurrentOwner,Ge=!1;function Ue(t,e,n,r){e.child=t===null?Wg(e,null,n,r):rs(e,t.child,n,r)}function Lf(t,e,n,r,s){n=n.render;var i=e.ref;return Kr(e,s),r=wd(t,e,n,r,i,s),n=xd(),t!==null&&!Ge?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Zt(t,e,s)):(Z&&n&&ld(e),e.flags|=1,Ue(t,e,r,s),e.child)}function Df(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!Pd(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,m_(t,e,i,r,s)):(t=$o(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:mi,n(o,r)&&t.ref===e.ref)return Zt(t,e,s)}return e.flags|=1,t=An(i,r),t.ref=e.ref,t.return=e,e.child=t}function m_(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(mi(i,r)&&t.ref===e.ref)if(Ge=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(Ge=!0);else return e.lanes=t.lanes,Zt(t,e,s)}return tu(t,e,n,r,s)}function g_(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Q($r,Ze),Ze|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Q($r,Ze),Ze|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,Q($r,Ze),Ze|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,Q($r,Ze),Ze|=r;return Ue(t,e,s,n),e.child}function __(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function tu(t,e,n,r,s){var i=Qe(n)?hr:Me.current;return i=ts(e,i),Kr(e,s),n=wd(t,e,n,r,i,s),r=xd(),t!==null&&!Ge?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Zt(t,e,s)):(Z&&r&&ld(e),e.flags|=1,Ue(t,e,n,s),e.child)}function Mf(t,e,n,r,s){if(Qe(n)){var i=!0;ra(e)}else i=!1;if(Kr(e,s),e.stateNode===null)jo(t,e),h_(e,n,r),Zc(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=dt(c):(c=Qe(n)?hr:Me.current,c=ts(e,c));var d=n.getDerivedStateFromProps,u=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";u||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==c)&&Rf(e,o,r,c),pn=!1;var f=e.memoizedState;o.state=f,la(e,r,o,s),l=e.memoizedState,a!==r||f!==l||qe.current||pn?(typeof d=="function"&&(Jc(e,n,d,r),l=e.memoizedState),(a=pn||bf(e,n,a,r,f,l,c))?(u||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Hg(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:pt(e.type,a),o.props=c,u=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=dt(l):(l=Qe(n)?hr:Me.current,l=ts(e,l));var p=n.getDerivedStateFromProps;(d=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==u||f!==l)&&Rf(e,o,r,l),pn=!1,f=e.memoizedState,o.state=f,la(e,r,o,s);var g=e.memoizedState;a!==u||f!==g||qe.current||pn?(typeof p=="function"&&(Jc(e,n,p,r),g=e.memoizedState),(c=pn||bf(e,n,c,r,f,g,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=g),o.props=r,o.state=g,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return nu(t,e,n,r,i,s)}function nu(t,e,n,r,s,i){__(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&xf(e,n,!1),Zt(t,e,i);r=e.stateNode,oE.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=rs(e,t.child,null,i),e.child=rs(e,null,a,i)):Ue(t,e,a,i),e.memoizedState=r.state,s&&xf(e,n,!0),e.child}function v_(t){var e=t.stateNode;e.pendingContext?wf(t,e.pendingContext,e.pendingContext!==e.context):e.context&&wf(t,e.context,!1),gd(t,e.containerInfo)}function jf(t,e,n,r,s){return ns(),ud(s),e.flags|=256,Ue(t,e,n,r),e.child}var ru={dehydrated:null,treeContext:null,retryLane:0};function su(t){return{baseLanes:t,cachePool:null,transitions:null}}function y_(t,e,n){var r=e.pendingProps,s=ee.current,i=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(s&2)!==0),a?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),Q(ee,s&1),t===null)return Yc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Za(o,r,0,null),t=cr(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=su(n),e.memoizedState=ru,t):Cd(e,o));if(s=t.memoizedState,s!==null&&(a=s.dehydrated,a!==null))return aE(t,e,o,r,a,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,a=s.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=An(s,l),r.subtreeFlags=s.subtreeFlags&14680064),a!==null?i=An(a,i):(i=cr(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?su(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=ru,r}return i=t.child,t=i.sibling,r=An(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Cd(t,e){return e=Za({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function yo(t,e,n,r){return r!==null&&ud(r),rs(e,t.child,null,n),t=Cd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function aE(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=Jl(Error(k(422))),yo(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=Za({mode:"visible",children:r.children},s,0,null),i=cr(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&rs(e,t.child,null,o),e.child.memoizedState=su(o),e.memoizedState=ru,i);if(!(e.mode&1))return yo(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(k(419)),r=Jl(i,r,void 0),yo(t,e,o,r)}if(a=(o&t.childLanes)!==0,Ge||a){if(r=Se,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,Jt(t,s),Et(r,t,s,-1))}return Rd(),r=Jl(Error(k(421))),yo(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=wE.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,et=bn(s.nextSibling),rt=e,Z=!0,gt=null,t!==null&&(at[lt++]=Bt,at[lt++]=Wt,at[lt++]=fr,Bt=t.id,Wt=t.overflow,fr=e),e=Cd(e,r.children),e.flags|=4096,e)}function Ff(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Xc(t.return,e,n)}function Zl(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function w_(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(Ue(t,e,r.children,n),r=ee.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ff(t,n,e);else if(t.tag===19)Ff(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Q(ee,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&ca(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),Zl(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&ca(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}Zl(e,!0,n,null,i);break;case"together":Zl(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function jo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Zt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),mr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(k(153));if(e.child!==null){for(t=e.child,n=An(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=An(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function lE(t,e,n){switch(e.tag){case 3:v_(e),ns();break;case 5:Gg(e);break;case 1:Qe(e.type)&&ra(e);break;case 4:gd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;Q(oa,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Q(ee,ee.current&1),e.flags|=128,null):n&e.child.childLanes?y_(t,e,n):(Q(ee,ee.current&1),t=Zt(t,e,n),t!==null?t.sibling:null);Q(ee,ee.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return w_(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Q(ee,ee.current),r)break;return null;case 22:case 23:return e.lanes=0,g_(t,e,n)}return Zt(t,e,n)}var x_,iu,E_,k_;x_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};iu=function(){};E_=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,ir(At.current);var i=null;switch(n){case"input":s=Nc(t,s),r=Nc(t,r),i=[];break;case"select":s=ne({},s,{value:void 0}),r=ne({},r,{value:void 0}),i=[];break;case"textarea":s=Rc(t,s),r=Rc(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=ta)}Oc(n,r);var o;n=null;for(c in s)if(!r.hasOwnProperty(c)&&s.hasOwnProperty(c)&&s[c]!=null)if(c==="style"){var a=s[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(li.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var l=r[c];if(a=s!=null?s[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(i||(i=[]),i.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(i=i||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(i=i||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(li.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&Y("scroll",t),i||a===l||(i=[])):(i=i||[]).push(c,l))}n&&(i=i||[]).push("style",n);var c=i;(e.updateQueue=c)&&(e.flags|=4)}};k_=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ps(t,e){if(!Z)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ae(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function cE(t,e,n){var r=e.pendingProps;switch(cd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ae(e),null;case 1:return Qe(e.type)&&na(),Ae(e),null;case 3:return r=e.stateNode,ss(),J(qe),J(Me),vd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(_o(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,gt!==null&&(fu(gt),gt=null))),iu(t,e),Ae(e),null;case 5:_d(e);var s=ir(wi.current);if(n=e.type,t!==null&&e.stateNode!=null)E_(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(k(166));return Ae(e),null}if(t=ir(At.current),_o(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[bt]=e,r[vi]=i,t=(e.mode&1)!==0,n){case"dialog":Y("cancel",r),Y("close",r);break;case"iframe":case"object":case"embed":Y("load",r);break;case"video":case"audio":for(s=0;s<zs.length;s++)Y(zs[s],r);break;case"source":Y("error",r);break;case"img":case"image":case"link":Y("error",r),Y("load",r);break;case"details":Y("toggle",r);break;case"input":Gh(r,i),Y("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Y("invalid",r);break;case"textarea":qh(r,i),Y("invalid",r)}Oc(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var a=i[o];o==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&go(r.textContent,a,t),s=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&go(r.textContent,a,t),s=["children",""+a]):li.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Y("scroll",r)}switch(n){case"input":ao(r),Kh(r,i,!0);break;case"textarea":ao(r),Qh(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=ta)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Xm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[bt]=e,t[vi]=r,x_(t,e,!1,!1),e.stateNode=t;e:{switch(o=Ac(n,r),n){case"dialog":Y("cancel",t),Y("close",t),s=r;break;case"iframe":case"object":case"embed":Y("load",t),s=r;break;case"video":case"audio":for(s=0;s<zs.length;s++)Y(zs[s],t);s=r;break;case"source":Y("error",t),s=r;break;case"img":case"image":case"link":Y("error",t),Y("load",t),s=r;break;case"details":Y("toggle",t),s=r;break;case"input":Gh(t,r),s=Nc(t,r),Y("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=ne({},r,{value:void 0}),Y("invalid",t);break;case"textarea":qh(t,r),s=Rc(t,r),Y("invalid",t);break;default:s=r}Oc(n,s),a=s;for(i in a)if(a.hasOwnProperty(i)){var l=a[i];i==="style"?eg(t,l):i==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Jm(t,l)):i==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ci(t,l):typeof l=="number"&&ci(t,""+l):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(li.hasOwnProperty(i)?l!=null&&i==="onScroll"&&Y("scroll",t):l!=null&&qu(t,i,l,o))}switch(n){case"input":ao(t),Kh(t,r,!1);break;case"textarea":ao(t),Qh(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Fn(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?Wr(t,!!r.multiple,i,!1):r.defaultValue!=null&&Wr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=ta)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ae(e),null;case 6:if(t&&e.stateNode!=null)k_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(k(166));if(n=ir(wi.current),ir(At.current),_o(e)){if(r=e.stateNode,n=e.memoizedProps,r[bt]=e,(i=r.nodeValue!==n)&&(t=rt,t!==null))switch(t.tag){case 3:go(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&go(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[bt]=e,e.stateNode=r}return Ae(e),null;case 13:if(J(ee),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Z&&et!==null&&e.mode&1&&!(e.flags&128))zg(),ns(),e.flags|=98560,i=!1;else if(i=_o(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(k(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(k(317));i[bt]=e}else ns(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ae(e),i=!1}else gt!==null&&(fu(gt),gt=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ee.current&1?_e===0&&(_e=3):Rd())),e.updateQueue!==null&&(e.flags|=4),Ae(e),null);case 4:return ss(),iu(t,e),t===null&&gi(e.stateNode.containerInfo),Ae(e),null;case 10:return fd(e.type._context),Ae(e),null;case 17:return Qe(e.type)&&na(),Ae(e),null;case 19:if(J(ee),i=e.memoizedState,i===null)return Ae(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)Ps(i,!1);else{if(_e!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ca(t),o!==null){for(e.flags|=128,Ps(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Q(ee,ee.current&1|2),e.child}t=t.sibling}i.tail!==null&&ue()>os&&(e.flags|=128,r=!0,Ps(i,!1),e.lanes=4194304)}else{if(!r)if(t=ca(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ps(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!Z)return Ae(e),null}else 2*ue()-i.renderingStartTime>os&&n!==1073741824&&(e.flags|=128,r=!0,Ps(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=ue(),e.sibling=null,n=ee.current,Q(ee,r?n&1|2:n&1),e):(Ae(e),null);case 22:case 23:return bd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ze&1073741824&&(Ae(e),e.subtreeFlags&6&&(e.flags|=8192)):Ae(e),null;case 24:return null;case 25:return null}throw Error(k(156,e.tag))}function uE(t,e){switch(cd(e),e.tag){case 1:return Qe(e.type)&&na(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ss(),J(qe),J(Me),vd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return _d(e),null;case 13:if(J(ee),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(k(340));ns()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return J(ee),null;case 4:return ss(),null;case 10:return fd(e.type._context),null;case 22:case 23:return bd(),null;case 24:return null;default:return null}}var wo=!1,Le=!1,dE=typeof WeakSet=="function"?WeakSet:Set,T=null;function Ur(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){re(t,e,r)}else n.current=null}function ou(t,e,n){try{n()}catch(r){re(t,e,r)}}var Uf=!1;function hE(t,e){if(Wc=Jo,t=Tg(),ad(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,d=0,u=t,f=null;t:for(;;){for(var p;u!==n||s!==0&&u.nodeType!==3||(a=o+s),u!==i||r!==0&&u.nodeType!==3||(l=o+r),u.nodeType===3&&(o+=u.nodeValue.length),(p=u.firstChild)!==null;)f=u,u=p;for(;;){if(u===t)break t;if(f===n&&++c===s&&(a=o),f===i&&++d===r&&(l=o),(p=u.nextSibling)!==null)break;u=f,f=u.parentNode}u=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Vc={focusedElem:t,selectionRange:n},Jo=!1,T=e;T!==null;)if(e=T,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,T=t;else for(;T!==null;){e=T;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var y=g.memoizedProps,w=g.memoizedState,v=e.stateNode,m=v.getSnapshotBeforeUpdate(e.elementType===e.type?y:pt(e.type,y),w);v.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(x){re(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,T=t;break}T=e.return}return g=Uf,Uf=!1,g}function Xs(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&ou(e,n,i)}s=s.next}while(s!==r)}}function Xa(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function au(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function C_(t){var e=t.alternate;e!==null&&(t.alternate=null,C_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[bt],delete e[vi],delete e[Kc],delete e[qx],delete e[Qx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function S_(t){return t.tag===5||t.tag===3||t.tag===4}function $f(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||S_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function lu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ta));else if(r!==4&&(t=t.child,t!==null))for(lu(t,e,n),t=t.sibling;t!==null;)lu(t,e,n),t=t.sibling}function cu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(cu(t,e,n),t=t.sibling;t!==null;)cu(t,e,n),t=t.sibling}var Te=null,mt=!1;function dn(t,e,n){for(n=n.child;n!==null;)I_(t,e,n),n=n.sibling}function I_(t,e,n){if(Ot&&typeof Ot.onCommitFiberUnmount=="function")try{Ot.onCommitFiberUnmount(Wa,n)}catch{}switch(n.tag){case 5:Le||Ur(n,e);case 6:var r=Te,s=mt;Te=null,dn(t,e,n),Te=r,mt=s,Te!==null&&(mt?(t=Te,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Te.removeChild(n.stateNode));break;case 18:Te!==null&&(mt?(t=Te,n=n.stateNode,t.nodeType===8?Gl(t.parentNode,n):t.nodeType===1&&Gl(t,n),fi(t)):Gl(Te,n.stateNode));break;case 4:r=Te,s=mt,Te=n.stateNode.containerInfo,mt=!0,dn(t,e,n),Te=r,mt=s;break;case 0:case 11:case 14:case 15:if(!Le&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&ou(n,e,o),s=s.next}while(s!==r)}dn(t,e,n);break;case 1:if(!Le&&(Ur(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){re(n,e,a)}dn(t,e,n);break;case 21:dn(t,e,n);break;case 22:n.mode&1?(Le=(r=Le)||n.memoizedState!==null,dn(t,e,n),Le=r):dn(t,e,n);break;default:dn(t,e,n)}}function zf(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new dE),e.forEach(function(r){var s=xE.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function ft(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Te=a.stateNode,mt=!1;break e;case 3:Te=a.stateNode.containerInfo,mt=!0;break e;case 4:Te=a.stateNode.containerInfo,mt=!0;break e}a=a.return}if(Te===null)throw Error(k(160));I_(i,o,s),Te=null,mt=!1;var l=s.alternate;l!==null&&(l.return=null),s.return=null}catch(c){re(s,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)N_(e,t),e=e.sibling}function N_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ft(e,t),Nt(t),r&4){try{Xs(3,t,t.return),Xa(3,t)}catch(y){re(t,t.return,y)}try{Xs(5,t,t.return)}catch(y){re(t,t.return,y)}}break;case 1:ft(e,t),Nt(t),r&512&&n!==null&&Ur(n,n.return);break;case 5:if(ft(e,t),Nt(t),r&512&&n!==null&&Ur(n,n.return),t.flags&32){var s=t.stateNode;try{ci(s,"")}catch(y){re(t,t.return,y)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&Qm(s,i),Ac(a,o);var c=Ac(a,i);for(o=0;o<l.length;o+=2){var d=l[o],u=l[o+1];d==="style"?eg(s,u):d==="dangerouslySetInnerHTML"?Jm(s,u):d==="children"?ci(s,u):qu(s,d,u,c)}switch(a){case"input":Tc(s,i);break;case"textarea":Ym(s,i);break;case"select":var f=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var p=i.value;p!=null?Wr(s,!!i.multiple,p,!1):f!==!!i.multiple&&(i.defaultValue!=null?Wr(s,!!i.multiple,i.defaultValue,!0):Wr(s,!!i.multiple,i.multiple?[]:"",!1))}s[vi]=i}catch(y){re(t,t.return,y)}}break;case 6:if(ft(e,t),Nt(t),r&4){if(t.stateNode===null)throw Error(k(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(y){re(t,t.return,y)}}break;case 3:if(ft(e,t),Nt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{fi(e.containerInfo)}catch(y){re(t,t.return,y)}break;case 4:ft(e,t),Nt(t);break;case 13:ft(e,t),Nt(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(Nd=ue())),r&4&&zf(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Le=(c=Le)||d,ft(e,t),Le=c):ft(e,t),Nt(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(T=t,d=t.child;d!==null;){for(u=T=d;T!==null;){switch(f=T,p=f.child,f.tag){case 0:case 11:case 14:case 15:Xs(4,f,f.return);break;case 1:Ur(f,f.return);var g=f.stateNode;if(typeof g.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(y){re(r,n,y)}}break;case 5:Ur(f,f.return);break;case 22:if(f.memoizedState!==null){Wf(u);continue}}p!==null?(p.return=f,T=p):Wf(u)}d=d.sibling}e:for(d=null,u=t;;){if(u.tag===5){if(d===null){d=u;try{s=u.stateNode,c?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=u.stateNode,l=u.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Zm("display",o))}catch(y){re(t,t.return,y)}}}else if(u.tag===6){if(d===null)try{u.stateNode.nodeValue=c?"":u.memoizedProps}catch(y){re(t,t.return,y)}}else if((u.tag!==22&&u.tag!==23||u.memoizedState===null||u===t)&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===t)break e;for(;u.sibling===null;){if(u.return===null||u.return===t)break e;d===u&&(d=null),u=u.return}d===u&&(d=null),u.sibling.return=u.return,u=u.sibling}}break;case 19:ft(e,t),Nt(t),r&4&&zf(t);break;case 21:break;default:ft(e,t),Nt(t)}}function Nt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(S_(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(ci(s,""),r.flags&=-33);var i=$f(t);cu(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,a=$f(t);lu(t,a,o);break;default:throw Error(k(161))}}catch(l){re(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function fE(t,e,n){T=t,T_(t)}function T_(t,e,n){for(var r=(t.mode&1)!==0;T!==null;){var s=T,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||wo;if(!o){var a=s.alternate,l=a!==null&&a.memoizedState!==null||Le;a=wo;var c=Le;if(wo=o,(Le=l)&&!c)for(T=s;T!==null;)o=T,l=o.child,o.tag===22&&o.memoizedState!==null?Vf(s):l!==null?(l.return=o,T=l):Vf(s);for(;i!==null;)T=i,T_(i),i=i.sibling;T=s,wo=a,Le=c}Bf(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,T=i):Bf(t)}}function Bf(t){for(;T!==null;){var e=T;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Le||Xa(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Le)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:pt(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&If(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}If(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var u=d.dehydrated;u!==null&&fi(u)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}Le||e.flags&512&&au(e)}catch(f){re(e,e.return,f)}}if(e===t){T=null;break}if(n=e.sibling,n!==null){n.return=e.return,T=n;break}T=e.return}}function Wf(t){for(;T!==null;){var e=T;if(e===t){T=null;break}var n=e.sibling;if(n!==null){n.return=e.return,T=n;break}T=e.return}}function Vf(t){for(;T!==null;){var e=T;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Xa(4,e)}catch(l){re(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(l){re(e,s,l)}}var i=e.return;try{au(e)}catch(l){re(e,i,l)}break;case 5:var o=e.return;try{au(e)}catch(l){re(e,o,l)}}}catch(l){re(e,e.return,l)}if(e===t){T=null;break}var a=e.sibling;if(a!==null){a.return=e.return,T=a;break}T=e.return}}var pE=Math.ceil,ha=on.ReactCurrentDispatcher,Sd=on.ReactCurrentOwner,ut=on.ReactCurrentBatchConfig,$=0,Se=null,he=null,be=0,Ze=0,$r=Gn(0),_e=0,Ci=null,mr=0,Ja=0,Id=0,Js=null,He=null,Nd=0,os=1/0,$t=null,fa=!1,uu=null,Pn=null,xo=!1,Cn=null,pa=0,Zs=0,du=null,Fo=-1,Uo=0;function ze(){return $&6?ue():Fo!==-1?Fo:Fo=ue()}function On(t){return t.mode&1?$&2&&be!==0?be&-be:Xx.transition!==null?(Uo===0&&(Uo=hg()),Uo):(t=V,t!==0||(t=window.event,t=t===void 0?16:yg(t.type)),t):1}function Et(t,e,n,r){if(50<Zs)throw Zs=0,du=null,Error(k(185));zi(t,n,r),(!($&2)||t!==Se)&&(t===Se&&(!($&2)&&(Ja|=n),_e===4&&gn(t,be)),Ye(t,r),n===1&&$===0&&!(e.mode&1)&&(os=ue()+500,qa&&Kn()))}function Ye(t,e){var n=t.callbackNode;Xw(t,e);var r=Xo(t,t===Se?be:0);if(r===0)n!==null&&Jh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Jh(n),e===1)t.tag===0?Yx(Hf.bind(null,t)):Fg(Hf.bind(null,t)),Gx(function(){!($&6)&&Kn()}),n=null;else{switch(fg(r)){case 1:n=Zu;break;case 4:n=ug;break;case 16:n=Yo;break;case 536870912:n=dg;break;default:n=Yo}n=M_(n,b_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function b_(t,e){if(Fo=-1,Uo=0,$&6)throw Error(k(327));var n=t.callbackNode;if(qr()&&t.callbackNode!==n)return null;var r=Xo(t,t===Se?be:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ma(t,r);else{e=r;var s=$;$|=2;var i=P_();(Se!==t||be!==e)&&($t=null,os=ue()+500,lr(t,e));do try{_E();break}catch(a){R_(t,a)}while(!0);hd(),ha.current=i,$=s,he!==null?e=0:(Se=null,be=0,e=_e)}if(e!==0){if(e===2&&(s=Fc(t),s!==0&&(r=s,e=hu(t,s))),e===1)throw n=Ci,lr(t,0),gn(t,r),Ye(t,ue()),n;if(e===6)gn(t,r);else{if(s=t.current.alternate,!(r&30)&&!mE(s)&&(e=ma(t,r),e===2&&(i=Fc(t),i!==0&&(r=i,e=hu(t,i))),e===1))throw n=Ci,lr(t,0),gn(t,r),Ye(t,ue()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(k(345));case 2:er(t,He,$t);break;case 3:if(gn(t,r),(r&130023424)===r&&(e=Nd+500-ue(),10<e)){if(Xo(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){ze(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=Gc(er.bind(null,t,He,$t),e);break}er(t,He,$t);break;case 4:if(gn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-xt(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=ue()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*pE(r/1960))-r,10<r){t.timeoutHandle=Gc(er.bind(null,t,He,$t),r);break}er(t,He,$t);break;case 5:er(t,He,$t);break;default:throw Error(k(329))}}}return Ye(t,ue()),t.callbackNode===n?b_.bind(null,t):null}function hu(t,e){var n=Js;return t.current.memoizedState.isDehydrated&&(lr(t,e).flags|=256),t=ma(t,e),t!==2&&(e=He,He=n,e!==null&&fu(e)),t}function fu(t){He===null?He=t:He.push.apply(He,t)}function mE(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!Ct(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function gn(t,e){for(e&=~Id,e&=~Ja,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-xt(e),r=1<<n;t[n]=-1,e&=~r}}function Hf(t){if($&6)throw Error(k(327));qr();var e=Xo(t,0);if(!(e&1))return Ye(t,ue()),null;var n=ma(t,e);if(t.tag!==0&&n===2){var r=Fc(t);r!==0&&(e=r,n=hu(t,r))}if(n===1)throw n=Ci,lr(t,0),gn(t,e),Ye(t,ue()),n;if(n===6)throw Error(k(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,er(t,He,$t),Ye(t,ue()),null}function Td(t,e){var n=$;$|=1;try{return t(e)}finally{$=n,$===0&&(os=ue()+500,qa&&Kn())}}function gr(t){Cn!==null&&Cn.tag===0&&!($&6)&&qr();var e=$;$|=1;var n=ut.transition,r=V;try{if(ut.transition=null,V=1,t)return t()}finally{V=r,ut.transition=n,$=e,!($&6)&&Kn()}}function bd(){Ze=$r.current,J($r)}function lr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Hx(n)),he!==null)for(n=he.return;n!==null;){var r=n;switch(cd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&na();break;case 3:ss(),J(qe),J(Me),vd();break;case 5:_d(r);break;case 4:ss();break;case 13:J(ee);break;case 19:J(ee);break;case 10:fd(r.type._context);break;case 22:case 23:bd()}n=n.return}if(Se=t,he=t=An(t.current,null),be=Ze=e,_e=0,Ci=null,Id=Ja=mr=0,He=Js=null,sr!==null){for(e=0;e<sr.length;e++)if(n=sr[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}sr=null}return t}function R_(t,e){do{var n=he;try{if(hd(),Do.current=da,ua){for(var r=te.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}ua=!1}if(pr=0,xe=fe=te=null,Ys=!1,xi=0,Sd.current=null,n===null||n.return===null){_e=1,Ci=e,he=null;break}e:{var i=t,o=n.return,a=n,l=e;if(e=be,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,u=d.tag;if(!(d.mode&1)&&(u===0||u===11||u===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=Of(o);if(p!==null){p.flags&=-257,Af(p,o,a,i,e),p.mode&1&&Pf(i,c,e),e=p,l=c;var g=e.updateQueue;if(g===null){var y=new Set;y.add(l),e.updateQueue=y}else g.add(l);break e}else{if(!(e&1)){Pf(i,c,e),Rd();break e}l=Error(k(426))}}else if(Z&&a.mode&1){var w=Of(o);if(w!==null){!(w.flags&65536)&&(w.flags|=256),Af(w,o,a,i,e),ud(is(l,a));break e}}i=l=is(l,a),_e!==4&&(_e=2),Js===null?Js=[i]:Js.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var v=f_(i,l,e);Sf(i,v);break e;case 1:a=l;var m=i.type,_=i.stateNode;if(!(i.flags&128)&&(typeof m.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Pn===null||!Pn.has(_)))){i.flags|=65536,e&=-e,i.lanes|=e;var x=p_(i,a,e);Sf(i,x);break e}}i=i.return}while(i!==null)}A_(n)}catch(C){e=C,he===n&&n!==null&&(he=n=n.return);continue}break}while(!0)}function P_(){var t=ha.current;return ha.current=da,t===null?da:t}function Rd(){(_e===0||_e===3||_e===2)&&(_e=4),Se===null||!(mr&268435455)&&!(Ja&268435455)||gn(Se,be)}function ma(t,e){var n=$;$|=2;var r=P_();(Se!==t||be!==e)&&($t=null,lr(t,e));do try{gE();break}catch(s){R_(t,s)}while(!0);if(hd(),$=n,ha.current=r,he!==null)throw Error(k(261));return Se=null,be=0,_e}function gE(){for(;he!==null;)O_(he)}function _E(){for(;he!==null&&!Bw();)O_(he)}function O_(t){var e=D_(t.alternate,t,Ze);t.memoizedProps=t.pendingProps,e===null?A_(t):he=e,Sd.current=null}function A_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=uE(n,e),n!==null){n.flags&=32767,he=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{_e=6,he=null;return}}else if(n=cE(n,e,Ze),n!==null){he=n;return}if(e=e.sibling,e!==null){he=e;return}he=e=t}while(e!==null);_e===0&&(_e=5)}function er(t,e,n){var r=V,s=ut.transition;try{ut.transition=null,V=1,vE(t,e,n,r)}finally{ut.transition=s,V=r}return null}function vE(t,e,n,r){do qr();while(Cn!==null);if($&6)throw Error(k(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(k(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(Jw(t,i),t===Se&&(he=Se=null,be=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||xo||(xo=!0,M_(Yo,function(){return qr(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=ut.transition,ut.transition=null;var o=V;V=1;var a=$;$|=4,Sd.current=null,hE(t,n),N_(n,t),Fx(Vc),Jo=!!Wc,Vc=Wc=null,t.current=n,fE(n),Ww(),$=a,V=o,ut.transition=i}else t.current=n;if(xo&&(xo=!1,Cn=t,pa=s),i=t.pendingLanes,i===0&&(Pn=null),Gw(n.stateNode),Ye(t,ue()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(fa)throw fa=!1,t=uu,uu=null,t;return pa&1&&t.tag!==0&&qr(),i=t.pendingLanes,i&1?t===du?Zs++:(Zs=0,du=t):Zs=0,Kn(),null}function qr(){if(Cn!==null){var t=fg(pa),e=ut.transition,n=V;try{if(ut.transition=null,V=16>t?16:t,Cn===null)var r=!1;else{if(t=Cn,Cn=null,pa=0,$&6)throw Error(k(331));var s=$;for($|=4,T=t.current;T!==null;){var i=T,o=i.child;if(T.flags&16){var a=i.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(T=c;T!==null;){var d=T;switch(d.tag){case 0:case 11:case 15:Xs(8,d,i)}var u=d.child;if(u!==null)u.return=d,T=u;else for(;T!==null;){d=T;var f=d.sibling,p=d.return;if(C_(d),d===c){T=null;break}if(f!==null){f.return=p,T=f;break}T=p}}}var g=i.alternate;if(g!==null){var y=g.child;if(y!==null){g.child=null;do{var w=y.sibling;y.sibling=null,y=w}while(y!==null)}}T=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,T=o;else e:for(;T!==null;){if(i=T,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Xs(9,i,i.return)}var v=i.sibling;if(v!==null){v.return=i.return,T=v;break e}T=i.return}}var m=t.current;for(T=m;T!==null;){o=T;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,T=_;else e:for(o=m;T!==null;){if(a=T,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Xa(9,a)}}catch(C){re(a,a.return,C)}if(a===o){T=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,T=x;break e}T=a.return}}if($=s,Kn(),Ot&&typeof Ot.onPostCommitFiberRoot=="function")try{Ot.onPostCommitFiberRoot(Wa,t)}catch{}r=!0}return r}finally{V=n,ut.transition=e}}return!1}function Gf(t,e,n){e=is(n,e),e=f_(t,e,1),t=Rn(t,e,1),e=ze(),t!==null&&(zi(t,1,e),Ye(t,e))}function re(t,e,n){if(t.tag===3)Gf(t,t,n);else for(;e!==null;){if(e.tag===3){Gf(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Pn===null||!Pn.has(r))){t=is(n,t),t=p_(e,t,1),e=Rn(e,t,1),t=ze(),e!==null&&(zi(e,1,t),Ye(e,t));break}}e=e.return}}function yE(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ze(),t.pingedLanes|=t.suspendedLanes&n,Se===t&&(be&n)===n&&(_e===4||_e===3&&(be&130023424)===be&&500>ue()-Nd?lr(t,0):Id|=n),Ye(t,e)}function L_(t,e){e===0&&(t.mode&1?(e=uo,uo<<=1,!(uo&130023424)&&(uo=4194304)):e=1);var n=ze();t=Jt(t,e),t!==null&&(zi(t,e,n),Ye(t,n))}function wE(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),L_(t,n)}function xE(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(e),L_(t,n)}var D_;D_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||qe.current)Ge=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ge=!1,lE(t,e,n);Ge=!!(t.flags&131072)}else Ge=!1,Z&&e.flags&1048576&&Ug(e,ia,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;jo(t,e),t=e.pendingProps;var s=ts(e,Me.current);Kr(e,n),s=wd(null,e,r,t,s,n);var i=xd();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Qe(r)?(i=!0,ra(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,md(e),s.updater=Ya,e.stateNode=s,s._reactInternals=e,Zc(e,r,t,n),e=nu(null,e,r,!0,i,n)):(e.tag=0,Z&&i&&ld(e),Ue(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(jo(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=kE(r),t=pt(r,t),s){case 0:e=tu(null,e,r,t,n);break e;case 1:e=Mf(null,e,r,t,n);break e;case 11:e=Lf(null,e,r,t,n);break e;case 14:e=Df(null,e,r,pt(r.type,t),n);break e}throw Error(k(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:pt(r,s),tu(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:pt(r,s),Mf(t,e,r,s,n);case 3:e:{if(v_(e),t===null)throw Error(k(387));r=e.pendingProps,i=e.memoizedState,s=i.element,Hg(t,e),la(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=is(Error(k(423)),e),e=jf(t,e,r,n,s);break e}else if(r!==s){s=is(Error(k(424)),e),e=jf(t,e,r,n,s);break e}else for(et=bn(e.stateNode.containerInfo.firstChild),rt=e,Z=!0,gt=null,n=Wg(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ns(),r===s){e=Zt(t,e,n);break e}Ue(t,e,r,n)}e=e.child}return e;case 5:return Gg(e),t===null&&Yc(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,Hc(r,s)?o=null:i!==null&&Hc(r,i)&&(e.flags|=32),__(t,e),Ue(t,e,o,n),e.child;case 6:return t===null&&Yc(e),null;case 13:return y_(t,e,n);case 4:return gd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=rs(e,null,r,n):Ue(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:pt(r,s),Lf(t,e,r,s,n);case 7:return Ue(t,e,e.pendingProps,n),e.child;case 8:return Ue(t,e,e.pendingProps.children,n),e.child;case 12:return Ue(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,Q(oa,r._currentValue),r._currentValue=o,i!==null)if(Ct(i.value,o)){if(i.children===s.children&&!qe.current){e=Zt(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var a=i.dependencies;if(a!==null){o=i.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(i.tag===1){l=qt(-1,n&-n),l.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}i.lanes|=n,l=i.alternate,l!==null&&(l.lanes|=n),Xc(i.return,n,e),a.lanes|=n;break}l=l.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(k(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Xc(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}Ue(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,Kr(e,n),s=dt(s),r=r(s),e.flags|=1,Ue(t,e,r,n),e.child;case 14:return r=e.type,s=pt(r,e.pendingProps),s=pt(r.type,s),Df(t,e,r,s,n);case 15:return m_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:pt(r,s),jo(t,e),e.tag=1,Qe(r)?(t=!0,ra(e)):t=!1,Kr(e,n),h_(e,r,s),Zc(e,r,s,n),nu(null,e,r,!0,t,n);case 19:return w_(t,e,n);case 22:return g_(t,e,n)}throw Error(k(156,e.tag))};function M_(t,e){return cg(t,e)}function EE(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ct(t,e,n,r){return new EE(t,e,n,r)}function Pd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function kE(t){if(typeof t=="function")return Pd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Yu)return 11;if(t===Xu)return 14}return 2}function An(t,e){var n=t.alternate;return n===null?(n=ct(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function $o(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")Pd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Rr:return cr(n.children,s,i,e);case Qu:o=8,s|=8;break;case kc:return t=ct(12,n,e,s|2),t.elementType=kc,t.lanes=i,t;case Cc:return t=ct(13,n,e,s),t.elementType=Cc,t.lanes=i,t;case Sc:return t=ct(19,n,e,s),t.elementType=Sc,t.lanes=i,t;case Gm:return Za(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Vm:o=10;break e;case Hm:o=9;break e;case Yu:o=11;break e;case Xu:o=14;break e;case fn:o=16,r=null;break e}throw Error(k(130,t==null?t:typeof t,""))}return e=ct(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function cr(t,e,n,r){return t=ct(7,t,r,e),t.lanes=n,t}function Za(t,e,n,r){return t=ct(22,t,r,e),t.elementType=Gm,t.lanes=n,t.stateNode={isHidden:!1},t}function ec(t,e,n){return t=ct(6,t,null,e),t.lanes=n,t}function tc(t,e,n){return e=ct(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function CE(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Dl(0),this.expirationTimes=Dl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Dl(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Od(t,e,n,r,s,i,o,a,l){return t=new CE(t,e,n,a,l),e===1?(e=1,i===!0&&(e|=8)):e=0,i=ct(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},md(i),t}function SE(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:br,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function j_(t){if(!t)return Un;t=t._reactInternals;e:{if(Cr(t)!==t||t.tag!==1)throw Error(k(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Qe(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(k(171))}if(t.tag===1){var n=t.type;if(Qe(n))return jg(t,n,e)}return e}function F_(t,e,n,r,s,i,o,a,l){return t=Od(n,r,!0,t,s,i,o,a,l),t.context=j_(null),n=t.current,r=ze(),s=On(n),i=qt(r,s),i.callback=e??null,Rn(n,i,s),t.current.lanes=s,zi(t,s,r),Ye(t,r),t}function el(t,e,n,r){var s=e.current,i=ze(),o=On(s);return n=j_(n),e.context===null?e.context=n:e.pendingContext=n,e=qt(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Rn(s,e,o),t!==null&&(Et(t,s,o,i),Lo(t,s,o)),o}function ga(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Kf(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ad(t,e){Kf(t,e),(t=t.alternate)&&Kf(t,e)}function IE(){return null}var U_=typeof reportError=="function"?reportError:function(t){console.error(t)};function Ld(t){this._internalRoot=t}tl.prototype.render=Ld.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(k(409));el(t,e,null,null)};tl.prototype.unmount=Ld.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;gr(function(){el(null,t,null,null)}),e[Xt]=null}};function tl(t){this._internalRoot=t}tl.prototype.unstable_scheduleHydration=function(t){if(t){var e=gg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<mn.length&&e!==0&&e<mn[n].priority;n++);mn.splice(n,0,t),n===0&&vg(t)}};function Dd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function nl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function qf(){}function NE(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var c=ga(o);i.call(c)}}var o=F_(e,r,t,0,null,!1,!1,"",qf);return t._reactRootContainer=o,t[Xt]=o.current,gi(t.nodeType===8?t.parentNode:t),gr(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var a=r;r=function(){var c=ga(l);a.call(c)}}var l=Od(t,0,!1,null,null,!1,!1,"",qf);return t._reactRootContainer=l,t[Xt]=l.current,gi(t.nodeType===8?t.parentNode:t),gr(function(){el(e,l,n,r)}),l}function rl(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var a=s;s=function(){var l=ga(o);a.call(l)}}el(e,o,t,s)}else o=NE(n,e,t,s,r);return ga(o)}pg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=$s(e.pendingLanes);n!==0&&(ed(e,n|1),Ye(e,ue()),!($&6)&&(os=ue()+500,Kn()))}break;case 13:gr(function(){var r=Jt(t,1);if(r!==null){var s=ze();Et(r,t,1,s)}}),Ad(t,1)}};td=function(t){if(t.tag===13){var e=Jt(t,134217728);if(e!==null){var n=ze();Et(e,t,134217728,n)}Ad(t,134217728)}};mg=function(t){if(t.tag===13){var e=On(t),n=Jt(t,e);if(n!==null){var r=ze();Et(n,t,e,r)}Ad(t,e)}};gg=function(){return V};_g=function(t,e){var n=V;try{return V=t,e()}finally{V=n}};Dc=function(t,e,n){switch(e){case"input":if(Tc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=Ka(r);if(!s)throw Error(k(90));qm(r),Tc(r,s)}}}break;case"textarea":Ym(t,n);break;case"select":e=n.value,e!=null&&Wr(t,!!n.multiple,e,!1)}};rg=Td;sg=gr;var TE={usingClientEntryPoint:!1,Events:[Wi,Lr,Ka,tg,ng,Td]},Os={findFiberByHostInstance:rr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},bE={bundleType:Os.bundleType,version:Os.version,rendererPackageName:Os.rendererPackageName,rendererConfig:Os.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:on.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=ag(t),t===null?null:t.stateNode},findFiberByHostInstance:Os.findFiberByHostInstance||IE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Eo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Eo.isDisabled&&Eo.supportsFiber)try{Wa=Eo.inject(bE),Ot=Eo}catch{}}it.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=TE;it.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Dd(e))throw Error(k(200));return SE(t,e,null,n)};it.createRoot=function(t,e){if(!Dd(t))throw Error(k(299));var n=!1,r="",s=U_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=Od(t,1,!1,null,null,n,!1,r,s),t[Xt]=e.current,gi(t.nodeType===8?t.parentNode:t),new Ld(e)};it.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(k(188)):(t=Object.keys(t).join(","),Error(k(268,t)));return t=ag(e),t=t===null?null:t.stateNode,t};it.flushSync=function(t){return gr(t)};it.hydrate=function(t,e,n){if(!nl(e))throw Error(k(200));return rl(null,t,e,!0,n)};it.hydrateRoot=function(t,e,n){if(!Dd(t))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=U_;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=F_(e,null,t,1,n??null,s,!1,i,o),t[Xt]=e.current,gi(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new tl(e)};it.render=function(t,e,n){if(!nl(e))throw Error(k(200));return rl(null,t,e,!1,n)};it.unmountComponentAtNode=function(t){if(!nl(t))throw Error(k(40));return t._reactRootContainer?(gr(function(){rl(null,null,t,!1,function(){t._reactRootContainer=null,t[Xt]=null})}),!0):!1};it.unstable_batchedUpdates=Td;it.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!nl(n))throw Error(k(200));if(t==null||t._reactInternals===void 0)throw Error(k(38));return rl(t,e,n,!1,r)};it.version="18.3.1-next-f1338f8080-20240426";function $_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($_)}catch(t){console.error(t)}}$_(),$m.exports=it;var RE=$m.exports,Qf=RE;xc.createRoot=Qf.createRoot,xc.hydrateRoot=Qf.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Si(){return Si=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Si.apply(this,arguments)}var Sn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Sn||(Sn={}));const Yf="popstate";function PE(t){t===void 0&&(t={});function e(r,s){let{pathname:i,search:o,hash:a}=r.location;return pu("",{pathname:i,search:o,hash:a},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(r,s){return typeof s=="string"?s:B_(s)}return AE(e,n,null,t)}function ve(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function z_(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function OE(){return Math.random().toString(36).substr(2,8)}function Xf(t,e){return{usr:t.state,key:t.key,idx:e}}function pu(t,e,n,r){return n===void 0&&(n=null),Si({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?_s(e):e,{state:n,key:e&&e.key||r||OE()})}function B_(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function _s(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function AE(t,e,n,r){r===void 0&&(r={});let{window:s=document.defaultView,v5Compat:i=!1}=r,o=s.history,a=Sn.Pop,l=null,c=d();c==null&&(c=0,o.replaceState(Si({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function u(){a=Sn.Pop;let w=d(),v=w==null?null:w-c;c=w,l&&l({action:a,location:y.location,delta:v})}function f(w,v){a=Sn.Push;let m=pu(y.location,w,v);c=d()+1;let _=Xf(m,c),x=y.createHref(m);try{o.pushState(_,"",x)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;s.location.assign(x)}i&&l&&l({action:a,location:y.location,delta:1})}function p(w,v){a=Sn.Replace;let m=pu(y.location,w,v);c=d();let _=Xf(m,c),x=y.createHref(m);o.replaceState(_,"",x),i&&l&&l({action:a,location:y.location,delta:0})}function g(w){let v=s.location.origin!=="null"?s.location.origin:s.location.href,m=typeof w=="string"?w:B_(w);return m=m.replace(/ $/,"%20"),ve(v,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,v)}let y={get action(){return a},get location(){return t(s,o)},listen(w){if(l)throw new Error("A history only accepts one active listener");return s.addEventListener(Yf,u),l=w,()=>{s.removeEventListener(Yf,u),l=null}},createHref(w){return e(s,w)},createURL:g,encodeLocation(w){let v=g(w);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:f,replace:p,go(w){return o.go(w)}};return y}var Jf;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Jf||(Jf={}));function LE(t,e,n){return n===void 0&&(n="/"),DE(t,e,n)}function DE(t,e,n,r){let s=typeof e=="string"?_s(e):e,i=H_(s.pathname||"/",n);if(i==null)return null;let o=W_(t);ME(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let c=qE(i);a=HE(o[l],c)}return a}function W_(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let s=(i,o,a)=>{let l={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};l.relativePath.startsWith("/")&&(ve(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=ur([r,l.relativePath]),d=n.concat(l);i.children&&i.children.length>0&&(ve(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),W_(i.children,e,d,c)),!(i.path==null&&!i.index)&&e.push({path:c,score:WE(c,i.index),routesMeta:d})};return t.forEach((i,o)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))s(i,o);else for(let l of V_(i.path))s(i,o,l)}),e}function V_(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,s=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return s?[i,""]:[i];let o=V_(r.join("/")),a=[];return a.push(...o.map(l=>l===""?i:[i,l].join("/"))),s&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function ME(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:VE(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const jE=/^:[\w-]+$/,FE=3,UE=2,$E=1,zE=10,BE=-2,Zf=t=>t==="*";function WE(t,e){let n=t.split("/"),r=n.length;return n.some(Zf)&&(r+=BE),e&&(r+=UE),n.filter(s=>!Zf(s)).reduce((s,i)=>s+(jE.test(i)?FE:i===""?$E:zE),r)}function VE(t,e){return t.length===e.length&&t.slice(0,-1).every((r,s)=>r===e[s])?t[t.length-1]-e[e.length-1]:0}function HE(t,e,n){let{routesMeta:r}=t,s={},i="/",o=[];for(let a=0;a<r.length;++a){let l=r[a],c=a===r.length-1,d=i==="/"?e:e.slice(i.length)||"/",u=GE({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},d),f=l.route;if(!u)return null;Object.assign(s,u.params),o.push({params:s,pathname:ur([i,u.pathname]),pathnameBase:ek(ur([i,u.pathnameBase])),route:f}),u.pathnameBase!=="/"&&(i=ur([i,u.pathnameBase]))}return o}function GE(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=KE(t.path,t.caseSensitive,t.end),s=e.match(n);if(!s)return null;let i=s[0],o=i.replace(/(.)\/+$/,"$1"),a=s.slice(1);return{params:r.reduce((c,d,u)=>{let{paramName:f,isOptional:p}=d;if(f==="*"){let y=a[u]||"";o=i.slice(0,i.length-y.length).replace(/(.)\/+$/,"$1")}const g=a[u];return p&&!g?c[f]=void 0:c[f]=(g||"").replace(/%2F/g,"/"),c},{}),pathname:i,pathnameBase:o,pattern:t}}function KE(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),z_(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],s="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),s+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?s+="\\/*$":t!==""&&t!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),r]}function qE(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return z_(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function H_(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function QE(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:s=""}=typeof t=="string"?_s(t):t;return{pathname:n?n.startsWith("/")?n:YE(n,e):e,search:tk(r),hash:nk(s)}}function YE(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(s=>{s===".."?n.length>1&&n.pop():s!=="."&&n.push(s)}),n.length>1?n.join("/"):"/"}function nc(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function XE(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function JE(t,e){let n=XE(t);return e?n.map((r,s)=>s===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function ZE(t,e,n,r){r===void 0&&(r=!1);let s;typeof t=="string"?s=_s(t):(s=Si({},t),ve(!s.pathname||!s.pathname.includes("?"),nc("?","pathname","search",s)),ve(!s.pathname||!s.pathname.includes("#"),nc("#","pathname","hash",s)),ve(!s.search||!s.search.includes("#"),nc("#","search","hash",s)));let i=t===""||s.pathname==="",o=i?"/":s.pathname,a;if(o==null)a=n;else{let u=e.length-1;if(!r&&o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),u-=1;s.pathname=f.join("/")}a=u>=0?e[u]:"/"}let l=QE(s,a),c=o&&o!=="/"&&o.endsWith("/"),d=(i||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||d)&&(l.pathname+="/"),l}const ur=t=>t.join("/").replace(/\/\/+/g,"/"),ek=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),tk=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,nk=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function rk(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const G_=["post","put","patch","delete"];new Set(G_);const sk=["get",...G_];new Set(sk);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ii(){return Ii=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ii.apply(this,arguments)}const Md=E.createContext(null),ik=E.createContext(null),sl=E.createContext(null),il=E.createContext(null),vs=E.createContext({outlet:null,matches:[],isDataRoute:!1}),K_=E.createContext(null);function ol(){return E.useContext(il)!=null}function q_(){return ol()||ve(!1),E.useContext(il).location}function Q_(t){E.useContext(sl).static||E.useLayoutEffect(t)}function Y_(){let{isDataRoute:t}=E.useContext(vs);return t?vk():ok()}function ok(){ol()||ve(!1);let t=E.useContext(Md),{basename:e,future:n,navigator:r}=E.useContext(sl),{matches:s}=E.useContext(vs),{pathname:i}=q_(),o=JSON.stringify(JE(s,n.v7_relativeSplatPath)),a=E.useRef(!1);return Q_(()=>{a.current=!0}),E.useCallback(function(c,d){if(d===void 0&&(d={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let u=ZE(c,JSON.parse(o),i,d.relative==="path");t==null&&e!=="/"&&(u.pathname=u.pathname==="/"?e:ur([e,u.pathname])),(d.replace?r.replace:r.push)(u,d.state,d)},[e,r,o,i,t])}function ak(t,e){return lk(t,e)}function lk(t,e,n,r){ol()||ve(!1);let{navigator:s}=E.useContext(sl),{matches:i}=E.useContext(vs),o=i[i.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let c=q_(),d;if(e){var u;let w=typeof e=="string"?_s(e):e;l==="/"||(u=w.pathname)!=null&&u.startsWith(l)||ve(!1),d=w}else d=c;let f=d.pathname||"/",p=f;if(l!=="/"){let w=l.replace(/^\//,"").split("/");p="/"+f.replace(/^\//,"").split("/").slice(w.length).join("/")}let g=LE(t,{pathname:p}),y=fk(g&&g.map(w=>Object.assign({},w,{params:Object.assign({},a,w.params),pathname:ur([l,s.encodeLocation?s.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?l:ur([l,s.encodeLocation?s.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),i,n,r);return e&&y?E.createElement(il.Provider,{value:{location:Ii({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Sn.Pop}},y):y}function ck(){let t=_k(),e=rk(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return E.createElement(E.Fragment,null,E.createElement("h2",null,"Unexpected Application Error!"),E.createElement("h3",{style:{fontStyle:"italic"}},e),n?E.createElement("pre",{style:s},n):null,null)}const uk=E.createElement(ck,null);class dk extends E.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?E.createElement(vs.Provider,{value:this.props.routeContext},E.createElement(K_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function hk(t){let{routeContext:e,match:n,children:r}=t,s=E.useContext(Md);return s&&s.static&&s.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=n.route.id),E.createElement(vs.Provider,{value:e},r)}function fk(t,e,n,r){var s;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var i;if(!n)return null;if(n.errors)t=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(s=n)==null?void 0:s.errors;if(a!=null){let d=o.findIndex(u=>u.route.id&&(a==null?void 0:a[u.route.id])!==void 0);d>=0||ve(!1),o=o.slice(0,Math.min(o.length,d+1))}let l=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let u=o[d];if((u.route.HydrateFallback||u.route.hydrateFallbackElement)&&(c=d),u.route.id){let{loaderData:f,errors:p}=n,g=u.route.loader&&f[u.route.id]===void 0&&(!p||p[u.route.id]===void 0);if(u.route.lazy||g){l=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,u,f)=>{let p,g=!1,y=null,w=null;n&&(p=a&&u.route.id?a[u.route.id]:void 0,y=u.route.errorElement||uk,l&&(c<0&&f===0?(yk("route-fallback"),g=!0,w=null):c===f&&(g=!0,w=u.route.hydrateFallbackElement||null)));let v=e.concat(o.slice(0,f+1)),m=()=>{let _;return p?_=y:g?_=w:u.route.Component?_=E.createElement(u.route.Component,null):u.route.element?_=u.route.element:_=d,E.createElement(hk,{match:u,routeContext:{outlet:d,matches:v,isDataRoute:n!=null},children:_})};return n&&(u.route.ErrorBoundary||u.route.errorElement||f===0)?E.createElement(dk,{location:n.location,revalidation:n.revalidation,component:y,error:p,children:m(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):m()},null)}var X_=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(X_||{}),J_=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(J_||{});function pk(t){let e=E.useContext(Md);return e||ve(!1),e}function mk(t){let e=E.useContext(ik);return e||ve(!1),e}function gk(t){let e=E.useContext(vs);return e||ve(!1),e}function Z_(t){let e=gk(),n=e.matches[e.matches.length-1];return n.route.id||ve(!1),n.route.id}function _k(){var t;let e=E.useContext(K_),n=mk(),r=Z_();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function vk(){let{router:t}=pk(X_.UseNavigateStable),e=Z_(J_.UseNavigateStable),n=E.useRef(!1);return Q_(()=>{n.current=!0}),E.useCallback(function(s,i){i===void 0&&(i={}),n.current&&(typeof s=="number"?t.navigate(s):t.navigate(s,Ii({fromRouteId:e},i)))},[t,e])}const ep={};function yk(t,e,n){ep[t]||(ep[t]=!0)}function wk(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function Bs(t){ve(!1)}function xk(t){let{basename:e="/",children:n=null,location:r,navigationType:s=Sn.Pop,navigator:i,static:o=!1,future:a}=t;ol()&&ve(!1);let l=e.replace(/^\/*/,"/"),c=E.useMemo(()=>({basename:l,navigator:i,static:o,future:Ii({v7_relativeSplatPath:!1},a)}),[l,a,i,o]);typeof r=="string"&&(r=_s(r));let{pathname:d="/",search:u="",hash:f="",state:p=null,key:g="default"}=r,y=E.useMemo(()=>{let w=H_(d,l);return w==null?null:{location:{pathname:w,search:u,hash:f,state:p,key:g},navigationType:s}},[l,d,u,f,p,g,s]);return y==null?null:E.createElement(sl.Provider,{value:c},E.createElement(il.Provider,{children:n,value:y}))}function Ek(t){let{children:e,location:n}=t;return ak(mu(e),n)}new Promise(()=>{});function mu(t,e){e===void 0&&(e=[]);let n=[];return E.Children.forEach(t,(r,s)=>{if(!E.isValidElement(r))return;let i=[...e,s];if(r.type===E.Fragment){n.push.apply(n,mu(r.props.children,i));return}r.type!==Bs&&ve(!1),!r.props.index||!r.props.children||ve(!1);let o={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=mu(r.props.children,i)),n.push(o)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const kk="6";try{window.__reactRouterVersion=kk}catch{}const Ck="startTransition",tp=yw[Ck];function Sk(t){let{basename:e,children:n,future:r,window:s}=t,i=E.useRef();i.current==null&&(i.current=PE({window:s,v5Compat:!0}));let o=i.current,[a,l]=E.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},d=E.useCallback(u=>{c&&tp?tp(()=>l(u)):l(u)},[l,c]);return E.useLayoutEffect(()=>o.listen(d),[o,d]),E.useEffect(()=>wk(r),[r]),E.createElement(xk,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}var np;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(np||(np={}));var rp;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(rp||(rp={}));let Ik={data:""},Nk=t=>typeof window=="object"?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||Ik,Tk=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,bk=/\/\*[^]*?\*\/|  +/g,sp=/\n+/g,_n=(t,e)=>{let n="",r="",s="";for(let i in t){let o=t[i];i[0]=="@"?i[1]=="i"?n=i+" "+o+";":r+=i[1]=="f"?_n(o,i):i+"{"+_n(o,i[1]=="k"?"":e)+"}":typeof o=="object"?r+=_n(o,e?e.replace(/([^,])+/g,a=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,a):a?a+" "+l:l)):i):o!=null&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=_n.p?_n.p(i,o):i+":"+o+";")}return n+(e&&s?e+"{"+s+"}":s)+r},Ut={},ev=t=>{if(typeof t=="object"){let e="";for(let n in t)e+=n+ev(t[n]);return e}return t},Rk=(t,e,n,r,s)=>{let i=ev(t),o=Ut[i]||(Ut[i]=(l=>{let c=0,d=11;for(;c<l.length;)d=101*d+l.charCodeAt(c++)>>>0;return"go"+d})(i));if(!Ut[o]){let l=i!==t?t:(c=>{let d,u,f=[{}];for(;d=Tk.exec(c.replace(bk,""));)d[4]?f.shift():d[3]?(u=d[3].replace(sp," ").trim(),f.unshift(f[0][u]=f[0][u]||{})):f[0][d[1]]=d[2].replace(sp," ").trim();return f[0]})(t);Ut[o]=_n(s?{["@keyframes "+o]:l}:l,n?"":"."+o)}let a=n&&Ut.g?Ut.g:null;return n&&(Ut.g=Ut[o]),((l,c,d,u)=>{u?c.data=c.data.replace(u,l):c.data.indexOf(l)===-1&&(c.data=d?l+c.data:c.data+l)})(Ut[o],e,r,a),o},Pk=(t,e,n)=>t.reduce((r,s,i)=>{let o=e[i];if(o&&o.call){let a=o(n),l=a&&a.props&&a.props.className||/^go/.test(a)&&a;o=l?"."+l:a&&typeof a=="object"?a.props?"":_n(a,""):a===!1?"":a}return r+s+(o??"")},"");function al(t){let e=this||{},n=t.call?t(e.p):t;return Rk(n.unshift?n.raw?Pk(n,[].slice.call(arguments,1),e.p):n.reduce((r,s)=>Object.assign(r,s&&s.call?s(e.p):s),{}):n,Nk(e.target),e.g,e.o,e.k)}let tv,gu,_u;al.bind({g:1});let en=al.bind({k:1});function Ok(t,e,n,r){_n.p=e,tv=t,gu=n,_u=r}function qn(t,e){let n=this||{};return function(){let r=arguments;function s(i,o){let a=Object.assign({},i),l=a.className||s.className;n.p=Object.assign({theme:gu&&gu()},a),n.o=/ *go\d+/.test(l),a.className=al.apply(n,r)+(l?" "+l:"");let c=t;return t[0]&&(c=a.as||t,delete a.as),_u&&c[0]&&_u(a),tv(c,a)}return s}}var Ak=t=>typeof t=="function",_a=(t,e)=>Ak(t)?t(e):t,Lk=(()=>{let t=0;return()=>(++t).toString()})(),nv=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),Dk=20,jd="default",rv=(t,e)=>{let{toastLimit:n}=t.settings;switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,n)};case 1:return{...t,toasts:t.toasts.map(o=>o.id===e.toast.id?{...o,...e.toast}:o)};case 2:let{toast:r}=e;return rv(t,{type:t.toasts.find(o=>o.id===r.id)?1:0,toast:r});case 3:let{toastId:s}=e;return{...t,toasts:t.toasts.map(o=>o.id===s||s===void 0?{...o,dismissed:!0,visible:!1}:o)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(o=>o.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let i=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(o=>({...o,pauseDuration:o.pauseDuration+i}))}}},zo=[],sv={toasts:[],pausedAt:void 0,settings:{toastLimit:Dk}},Rt={},iv=(t,e=jd)=>{Rt[e]=rv(Rt[e]||sv,t),zo.forEach(([n,r])=>{n===e&&r(Rt[e])})},ov=t=>Object.keys(Rt).forEach(e=>iv(t,e)),Mk=t=>Object.keys(Rt).find(e=>Rt[e].toasts.some(n=>n.id===t)),ll=(t=jd)=>e=>{iv(e,t)},jk={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},Fk=(t={},e=jd)=>{let[n,r]=E.useState(Rt[e]||sv),s=E.useRef(Rt[e]);E.useEffect(()=>(s.current!==Rt[e]&&r(Rt[e]),zo.push([e,r]),()=>{let o=zo.findIndex(([a])=>a===e);o>-1&&zo.splice(o,1)}),[e]);let i=n.toasts.map(o=>{var a,l,c;return{...t,...t[o.type],...o,removeDelay:o.removeDelay||((a=t[o.type])==null?void 0:a.removeDelay)||(t==null?void 0:t.removeDelay),duration:o.duration||((l=t[o.type])==null?void 0:l.duration)||(t==null?void 0:t.duration)||jk[o.type],style:{...t.style,...(c=t[o.type])==null?void 0:c.style,...o.style}}});return{...n,toasts:i}},Uk=(t,e="blank",n)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...n,id:(n==null?void 0:n.id)||Lk()}),Hi=t=>(e,n)=>{let r=Uk(e,t,n);return ll(r.toasterId||Mk(r.id))({type:2,toast:r}),r.id},pe=(t,e)=>Hi("blank")(t,e);pe.error=Hi("error");pe.success=Hi("success");pe.loading=Hi("loading");pe.custom=Hi("custom");pe.dismiss=(t,e)=>{let n={type:3,toastId:t};e?ll(e)(n):ov(n)};pe.dismissAll=t=>pe.dismiss(void 0,t);pe.remove=(t,e)=>{let n={type:4,toastId:t};e?ll(e)(n):ov(n)};pe.removeAll=t=>pe.remove(void 0,t);pe.promise=(t,e,n)=>{let r=pe.loading(e.loading,{...n,...n==null?void 0:n.loading});return typeof t=="function"&&(t=t()),t.then(s=>{let i=e.success?_a(e.success,s):void 0;return i?pe.success(i,{id:r,...n,...n==null?void 0:n.success}):pe.dismiss(r),s}).catch(s=>{let i=e.error?_a(e.error,s):void 0;i?pe.error(i,{id:r,...n,...n==null?void 0:n.error}):pe.dismiss(r)}),t};var $k=1e3,zk=(t,e="default")=>{let{toasts:n,pausedAt:r}=Fk(t,e),s=E.useRef(new Map).current,i=E.useCallback((u,f=$k)=>{if(s.has(u))return;let p=setTimeout(()=>{s.delete(u),o({type:4,toastId:u})},f);s.set(u,p)},[]);E.useEffect(()=>{if(r)return;let u=Date.now(),f=n.map(p=>{if(p.duration===1/0)return;let g=(p.duration||0)+p.pauseDuration-(u-p.createdAt);if(g<0){p.visible&&pe.dismiss(p.id);return}return setTimeout(()=>pe.dismiss(p.id,e),g)});return()=>{f.forEach(p=>p&&clearTimeout(p))}},[n,r,e]);let o=E.useCallback(ll(e),[e]),a=E.useCallback(()=>{o({type:5,time:Date.now()})},[o]),l=E.useCallback((u,f)=>{o({type:1,toast:{id:u,height:f}})},[o]),c=E.useCallback(()=>{r&&o({type:6,time:Date.now()})},[r,o]),d=E.useCallback((u,f)=>{let{reverseOrder:p=!1,gutter:g=8,defaultPosition:y}=f||{},w=n.filter(_=>(_.position||y)===(u.position||y)&&_.height),v=w.findIndex(_=>_.id===u.id),m=w.filter((_,x)=>x<v&&_.visible).length;return w.filter(_=>_.visible).slice(...p?[m+1]:[0,m]).reduce((_,x)=>_+(x.height||0)+g,0)},[n]);return E.useEffect(()=>{n.forEach(u=>{if(u.dismissed)i(u.id,u.removeDelay);else{let f=s.get(u.id);f&&(clearTimeout(f),s.delete(u.id))}})},[n,i]),{toasts:n,handlers:{updateHeight:l,startPause:a,endPause:c,calculateOffset:d}}},Bk=en`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,Wk=en`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Vk=en`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,Hk=qn("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Bk} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Wk} 0.15s ease-out forwards;
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
    animation: ${Vk} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,Gk=en`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Kk=qn("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${Gk} 1s linear infinite;
`,qk=en`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Qk=en`
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
}`,Yk=qn("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${qk} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Qk} 0.2s ease-out forwards;
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
`,Xk=qn("div")`
  position: absolute;
`,Jk=qn("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Zk=en`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,eC=qn("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Zk} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,tC=({toast:t})=>{let{icon:e,type:n,iconTheme:r}=t;return e!==void 0?typeof e=="string"?E.createElement(eC,null,e):e:n==="blank"?null:E.createElement(Jk,null,E.createElement(Kk,{...r}),n!=="loading"&&E.createElement(Xk,null,n==="error"?E.createElement(Hk,{...r}):E.createElement(Yk,{...r})))},nC=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,rC=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,sC="0%{opacity:0;} 100%{opacity:1;}",iC="0%{opacity:1;} 100%{opacity:0;}",oC=qn("div")`
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
`,aC=qn("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,lC=(t,e)=>{let n=t.includes("top")?1:-1,[r,s]=nv()?[sC,iC]:[nC(n),rC(n)];return{animation:e?`${en(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${en(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},cC=E.memo(({toast:t,position:e,style:n,children:r})=>{let s=t.height?lC(t.position||e||"top-center",t.visible):{opacity:0},i=E.createElement(tC,{toast:t}),o=E.createElement(aC,{...t.ariaProps},_a(t.message,t));return E.createElement(oC,{className:t.className,style:{...s,...n,...t.style}},typeof r=="function"?r({icon:i,message:o}):E.createElement(E.Fragment,null,i,o))});Ok(E.createElement);var uC=({id:t,className:e,style:n,onHeightUpdate:r,children:s})=>{let i=E.useCallback(o=>{if(o){let a=()=>{let l=o.getBoundingClientRect().height;r(t,l)};a(),new MutationObserver(a).observe(o,{subtree:!0,childList:!0,characterData:!0})}},[t,r]);return E.createElement("div",{ref:i,className:e,style:n},s)},dC=(t,e)=>{let n=t.includes("top"),r=n?{top:0}:{bottom:0},s=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:nv()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(n?1:-1)}px)`,...r,...s}},hC=al`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,ko=16,fC=({reverseOrder:t,position:e="top-center",toastOptions:n,gutter:r,children:s,toasterId:i,containerStyle:o,containerClassName:a})=>{let{toasts:l,handlers:c}=zk(n,i);return E.createElement("div",{"data-rht-toaster":i||"",style:{position:"fixed",zIndex:9999,top:ko,left:ko,right:ko,bottom:ko,pointerEvents:"none",...o},className:a,onMouseEnter:c.startPause,onMouseLeave:c.endPause},l.map(d=>{let u=d.position||e,f=c.calculateOffset(d,{reverseOrder:t,gutter:r,defaultPosition:e}),p=dC(u,f);return E.createElement(uC,{id:d.id,key:d.id,onHeightUpdate:c.updateHeight,className:d.visible?hC:"",style:p},d.type==="custom"?_a(d.message,d):s?s(d):E.createElement(cC,{toast:d,position:u}))}))},Ee=pe;const pC={},ip=t=>{let e;const n=new Set,r=(d,u)=>{const f=typeof d=="function"?d(e):d;if(!Object.is(f,e)){const p=e;e=u??(typeof f!="object"||f===null)?f:Object.assign({},e,f),n.forEach(g=>g(e,p))}},s=()=>e,l={setState:r,getState:s,getInitialState:()=>c,subscribe:d=>(n.add(d),()=>n.delete(d)),destroy:()=>{(pC?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},c=e=t(r,s,l);return l},mC=t=>t?ip(t):ip;var av={exports:{}},lv={},cv={exports:{}},uv={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var as=E;function gC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var _C=typeof Object.is=="function"?Object.is:gC,vC=as.useState,yC=as.useEffect,wC=as.useLayoutEffect,xC=as.useDebugValue;function EC(t,e){var n=e(),r=vC({inst:{value:n,getSnapshot:e}}),s=r[0].inst,i=r[1];return wC(function(){s.value=n,s.getSnapshot=e,rc(s)&&i({inst:s})},[t,n,e]),yC(function(){return rc(s)&&i({inst:s}),t(function(){rc(s)&&i({inst:s})})},[t]),xC(n),n}function rc(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!_C(t,n)}catch{return!0}}function kC(t,e){return e()}var CC=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?kC:EC;uv.useSyncExternalStore=as.useSyncExternalStore!==void 0?as.useSyncExternalStore:CC;cv.exports=uv;var SC=cv.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cl=E,IC=SC;function NC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var TC=typeof Object.is=="function"?Object.is:NC,bC=IC.useSyncExternalStore,RC=cl.useRef,PC=cl.useEffect,OC=cl.useMemo,AC=cl.useDebugValue;lv.useSyncExternalStoreWithSelector=function(t,e,n,r,s){var i=RC(null);if(i.current===null){var o={hasValue:!1,value:null};i.current=o}else o=i.current;i=OC(function(){function l(p){if(!c){if(c=!0,d=p,p=r(p),s!==void 0&&o.hasValue){var g=o.value;if(s(g,p))return u=g}return u=p}if(g=u,TC(d,p))return g;var y=r(p);return s!==void 0&&s(g,y)?(d=p,g):(d=p,u=y)}var c=!1,d,u,f=n===void 0?null:n;return[function(){return l(e())},f===null?void 0:function(){return l(f())}]},[e,n,r,s]);var a=bC(t,i[0],i[1]);return PC(function(){o.hasValue=!0,o.value=a},[a]),AC(a),a};av.exports=lv;var LC=av.exports;const DC=Tm(LC),dv={},{useDebugValue:MC}=Ba,{useSyncExternalStoreWithSelector:jC}=DC;let op=!1;const FC=t=>t;function UC(t,e=FC,n){(dv?"production":void 0)!=="production"&&n&&!op&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),op=!0);const r=jC(t.subscribe,t.getState,t.getServerState||t.getInitialState,e,n);return MC(r),r}const ap=t=>{(dv?"production":void 0)!=="production"&&typeof t!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const e=typeof t=="function"?mC(t):t,n=(r,s)=>UC(e,r,s);return Object.assign(n,e),n},hv=t=>t?ap(t):ap,je=hv(t=>({user:null,loading:!0,setUser:e=>t({user:e}),setLoading:e=>t({loading:e}),logout:()=>t({user:null})}));var lp={};/**
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
 */const fv={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const S=function(t,e){if(!t)throw ys(e)},ys=function(t){return new Error("Firebase Database ("+fv.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const pv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},$C=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Fd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,d=i>>2,u=(i&3)<<4|a>>4;let f=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(f=64)),r.push(n[d],n[u],n[f],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(pv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):$C(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const u=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||c==null||u==null)throw new zC;const f=i<<2|a>>4;if(r.push(f),c!==64){const p=a<<4&240|c>>2;if(r.push(p),u!==64){const g=c<<6&192|u;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class zC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const mv=function(t){const e=pv(t);return Fd.encodeByteArray(e,!0)},va=function(t){return mv(t).replace(/\./g,"")},ya=function(t){try{return Fd.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function BC(t){return gv(void 0,t)}function gv(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!WC(n)||(t[n]=gv(t[n],e[n]));return t}function WC(t){return t!=="__proto__"}/**
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
 */function VC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const HC=()=>VC().__FIREBASE_DEFAULTS__,GC=()=>{if(typeof process>"u"||typeof lp>"u")return;const t=lp.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},KC=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ya(t[1]);return e&&JSON.parse(e)},Ud=()=>{try{return HC()||GC()||KC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},_v=t=>{var e,n;return(n=(e=Ud())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},vv=t=>{const e=_v(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},yv=()=>{var t;return(t=Ud())===null||t===void 0?void 0:t.config},wv=t=>{var e;return(e=Ud())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class ul{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function xv(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[va(JSON.stringify(n)),va(JSON.stringify(o)),""].join(".")}/**
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
 */function Be(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function $d(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Be())}function qC(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function QC(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Ev(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function YC(){const t=Be();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function XC(){return fv.NODE_ADMIN===!0}function JC(){try{return typeof indexedDB=="object"}catch{return!1}}function ZC(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const eS="FirebaseError";class an extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=eS,Object.setPrototypeOf(this,an.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Gi.prototype.create)}}class Gi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?tS(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new an(s,a,r)}}function tS(t,e){return t.replace(nS,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const nS=/\{\$([^}]+)}/g;/**
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
 */function Ni(t){return JSON.parse(t)}function me(t){return JSON.stringify(t)}/**
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
 */const kv=function(t){let e={},n={},r={},s="";try{const i=t.split(".");e=Ni(ya(i[0])||""),n=Ni(ya(i[1])||""),s=i[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:s}},rS=function(t){const e=kv(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},sS=function(t){const e=kv(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function ln(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ls(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function vu(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function wa(t,e,n){const r={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=e.call(n,t[s],s,t));return r}function xa(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(cp(i)&&cp(o)){if(!xa(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function cp(t){return t!==null&&typeof t=="object"}/**
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
 */function ws(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ws(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Vs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class iS{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)r[u]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let u=0;u<16;u++)r[u]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let u=16;u<80;u++){const f=r[u-3]^r[u-8]^r[u-14]^r[u-16];r[u]=(f<<1|f>>>31)&4294967295}let s=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,d;for(let u=0;u<80;u++){u<40?u<20?(c=a^i&(o^a),d=1518500249):(c=i^o^a,d=1859775393):u<60?(c=i&o|a&(i|o),d=2400959708):(c=i^o^a,d=3395469782);const f=(s<<5|s>>>27)+c+l+d+r[u]&4294967295;l=a,a=o,o=(i<<30|i>>>2)&4294967295,i=s,s=f}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let s=0;const i=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=r;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(i[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}else for(;s<n;)if(i[o]=e[s],++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let i=24;i>=0;i-=8)e[r]=this.chain_[s]>>i&255,++r;return e}}function oS(t,e){const n=new aS(t,e);return n.subscribe.bind(n)}class aS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");lS(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=sc),s.error===void 0&&(s.error=sc),s.complete===void 0&&(s.complete=sc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function lS(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function sc(){}function zd(t,e){return`${t} failed: ${e} argument `}/**
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
 */const cS=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);if(s>=55296&&s<=56319){const i=s-55296;r++,S(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;s=65536+(i<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},dl=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function de(t){return t&&t._delegate?t._delegate:t}class $n{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const tr="[DEFAULT]";/**
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
 */class uS{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ul;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(hS(e))try{this.getOrInitializeService({instanceIdentifier:tr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=tr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=tr){return this.instances.has(e)}getOptions(e=tr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:dS(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=tr){return this.component?this.component.multipleInstances?e:tr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function dS(t){return t===tr?void 0:t}function hS(t){return t.instantiationMode==="EAGER"}/**
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
 */class fS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new uS(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var H;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(H||(H={}));const pS={debug:H.DEBUG,verbose:H.VERBOSE,info:H.INFO,warn:H.WARN,error:H.ERROR,silent:H.SILENT},mS=H.INFO,gS={[H.DEBUG]:"log",[H.VERBOSE]:"log",[H.INFO]:"info",[H.WARN]:"warn",[H.ERROR]:"error"},_S=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=gS[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Bd{constructor(e){this.name=e,this._logLevel=mS,this._logHandler=_S,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in H))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?pS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,H.DEBUG,...e),this._logHandler(this,H.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,H.VERBOSE,...e),this._logHandler(this,H.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,H.INFO,...e),this._logHandler(this,H.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,H.WARN,...e),this._logHandler(this,H.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,H.ERROR,...e),this._logHandler(this,H.ERROR,...e)}}const vS=(t,e)=>e.some(n=>t instanceof n);let up,dp;function yS(){return up||(up=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function wS(){return dp||(dp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Cv=new WeakMap,yu=new WeakMap,Sv=new WeakMap,ic=new WeakMap,Wd=new WeakMap;function xS(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Ln(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Cv.set(n,t)}).catch(()=>{}),Wd.set(e,t),e}function ES(t){if(yu.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});yu.set(t,e)}let wu={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return yu.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Sv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ln(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function kS(t){wu=t(wu)}function CS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(oc(this),e,...n);return Sv.set(r,e.sort?e.sort():[e]),Ln(r)}:wS().includes(t)?function(...e){return t.apply(oc(this),e),Ln(Cv.get(this))}:function(...e){return Ln(t.apply(oc(this),e))}}function SS(t){return typeof t=="function"?CS(t):(t instanceof IDBTransaction&&ES(t),vS(t,yS())?new Proxy(t,wu):t)}function Ln(t){if(t instanceof IDBRequest)return xS(t);if(ic.has(t))return ic.get(t);const e=SS(t);return e!==t&&(ic.set(t,e),Wd.set(e,t)),e}const oc=t=>Wd.get(t);function IS(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Ln(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Ln(o.result),l.oldVersion,l.newVersion,Ln(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const NS=["get","getKey","getAll","getAllKeys","count"],TS=["put","add","delete","clear"],ac=new Map;function hp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ac.get(e))return ac.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=TS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||NS.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return ac.set(e,i),i}kS(t=>({...t,get:(e,n,r)=>hp(e,n)||t.get(e,n,r),has:(e,n)=>!!hp(e,n)||t.has(e,n)}));/**
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
 */class bS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(RS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function RS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const xu="@firebase/app",fp="0.10.13";/**
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
 */const tn=new Bd("@firebase/app"),PS="@firebase/app-compat",OS="@firebase/analytics-compat",AS="@firebase/analytics",LS="@firebase/app-check-compat",DS="@firebase/app-check",MS="@firebase/auth",jS="@firebase/auth-compat",FS="@firebase/database",US="@firebase/data-connect",$S="@firebase/database-compat",zS="@firebase/functions",BS="@firebase/functions-compat",WS="@firebase/installations",VS="@firebase/installations-compat",HS="@firebase/messaging",GS="@firebase/messaging-compat",KS="@firebase/performance",qS="@firebase/performance-compat",QS="@firebase/remote-config",YS="@firebase/remote-config-compat",XS="@firebase/storage",JS="@firebase/storage-compat",ZS="@firebase/firestore",e1="@firebase/vertexai-preview",t1="@firebase/firestore-compat",n1="firebase",r1="10.14.1";/**
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
 */const Eu="[DEFAULT]",s1={[xu]:"fire-core",[PS]:"fire-core-compat",[AS]:"fire-analytics",[OS]:"fire-analytics-compat",[DS]:"fire-app-check",[LS]:"fire-app-check-compat",[MS]:"fire-auth",[jS]:"fire-auth-compat",[FS]:"fire-rtdb",[US]:"fire-data-connect",[$S]:"fire-rtdb-compat",[zS]:"fire-fn",[BS]:"fire-fn-compat",[WS]:"fire-iid",[VS]:"fire-iid-compat",[HS]:"fire-fcm",[GS]:"fire-fcm-compat",[KS]:"fire-perf",[qS]:"fire-perf-compat",[QS]:"fire-rc",[YS]:"fire-rc-compat",[XS]:"fire-gcs",[JS]:"fire-gcs-compat",[ZS]:"fire-fst",[t1]:"fire-fst-compat",[e1]:"fire-vertex","fire-js":"fire-js",[n1]:"fire-js-all"};/**
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
 */const Ea=new Map,i1=new Map,ku=new Map;function pp(t,e){try{t.container.addComponent(e)}catch(n){tn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function _r(t){const e=t.name;if(ku.has(e))return tn.debug(`There were multiple attempts to register component ${e}.`),!1;ku.set(e,t);for(const n of Ea.values())pp(n,t);for(const n of i1.values())pp(n,t);return!0}function hl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function vt(t){return t.settings!==void 0}/**
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
 */const o1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Dn=new Gi("app","Firebase",o1);/**
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
 */class a1{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new $n("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Dn.create("app-deleted",{appName:this._name})}}/**
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
 */const Sr=r1;function Iv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Eu,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Dn.create("bad-app-name",{appName:String(s)});if(n||(n=yv()),!n)throw Dn.create("no-options");const i=Ea.get(s);if(i){if(xa(n,i.options)&&xa(r,i.config))return i;throw Dn.create("duplicate-app",{appName:s})}const o=new fS(s);for(const l of ku.values())o.addComponent(l);const a=new a1(n,r,o);return Ea.set(s,a),a}function Vd(t=Eu){const e=Ea.get(t);if(!e&&t===Eu&&yv())return Iv();if(!e)throw Dn.create("no-app",{appName:t});return e}function Lt(t,e,n){var r;let s=(r=s1[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),tn.warn(a.join(" "));return}_r(new $n(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const l1="firebase-heartbeat-database",c1=1,Ti="firebase-heartbeat-store";let lc=null;function Nv(){return lc||(lc=IS(l1,c1,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ti)}catch(n){console.warn(n)}}}}).catch(t=>{throw Dn.create("idb-open",{originalErrorMessage:t.message})})),lc}async function u1(t){try{const n=(await Nv()).transaction(Ti),r=await n.objectStore(Ti).get(Tv(t));return await n.done,r}catch(e){if(e instanceof an)tn.warn(e.message);else{const n=Dn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});tn.warn(n.message)}}}async function mp(t,e){try{const r=(await Nv()).transaction(Ti,"readwrite");await r.objectStore(Ti).put(e,Tv(t)),await r.done}catch(n){if(n instanceof an)tn.warn(n.message);else{const r=Dn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});tn.warn(r.message)}}}function Tv(t){return`${t.name}!${t.options.appId}`}/**
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
 */const d1=1024,h1=30*24*60*60*1e3;class f1{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new m1(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=gp();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=h1}),this._storage.overwrite(this._heartbeatsCache))}catch(r){tn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=gp(),{heartbeatsToSend:r,unsentEntries:s}=p1(this._heartbeatsCache.heartbeats),i=va(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return tn.warn(n),""}}}function gp(){return new Date().toISOString().substring(0,10)}function p1(t,e=d1){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),_p(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),_p(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class m1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return JC()?ZC().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await u1(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return mp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return mp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function _p(t){return va(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function g1(t){_r(new $n("platform-logger",e=>new bS(e),"PRIVATE")),_r(new $n("heartbeat",e=>new f1(e),"PRIVATE")),Lt(xu,fp,t),Lt(xu,fp,"esm2017"),Lt("fire-js","")}g1("");var _1="firebase",v1="10.14.1";/**
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
 */Lt(_1,v1,"app");function Hd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function bv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const y1=bv,Rv=new Gi("auth","Firebase",bv());/**
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
 */const ka=new Bd("@firebase/auth");function w1(t,...e){ka.logLevel<=H.WARN&&ka.warn(`Auth (${Sr}): ${t}`,...e)}function Bo(t,...e){ka.logLevel<=H.ERROR&&ka.error(`Auth (${Sr}): ${t}`,...e)}/**
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
 */function St(t,...e){throw Gd(t,...e)}function Dt(t,...e){return Gd(t,...e)}function Pv(t,e,n){const r=Object.assign(Object.assign({},y1()),{[e]:n});return new Gi("auth","Firebase",r).create(e,{appName:t.name})}function Mt(t){return Pv(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Gd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Rv.create(t,...e)}function O(t,e,...n){if(!t)throw Gd(e,...n)}function Vt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Bo(e),new Error(e)}function nn(t,e){t||Vt(e)}/**
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
 */function Cu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function x1(){return vp()==="http:"||vp()==="https:"}function vp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function E1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(x1()||QC()||"connection"in navigator)?navigator.onLine:!0}function k1(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ki{constructor(e,n){this.shortDelay=e,this.longDelay=n,nn(n>e,"Short delay should be less than long delay!"),this.isMobile=$d()||Ev()}get(){return E1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Kd(t,e){nn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Ov{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Vt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Vt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Vt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const C1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const S1=new Ki(3e4,6e4);function Qn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function cn(t,e,n,r,s={}){return Av(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=ws(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:l},i);return qC()||(c.referrerPolicy="no-referrer"),Ov.fetch()(Lv(t,t.config.apiHost,n,a),c)})}async function Av(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},C1),e);try{const s=new N1(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Co(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Co(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Co(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Co(t,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Pv(t,d,c);St(t,d)}}catch(s){if(s instanceof an)throw s;St(t,"network-request-failed",{message:String(s)})}}async function qi(t,e,n,r,s={}){const i=await cn(t,e,n,r,s);return"mfaPendingCredential"in i&&St(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Lv(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Kd(t.config,s):`${t.config.apiScheme}://${s}`}function I1(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class N1{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Dt(this.auth,"network-request-failed")),S1.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Co(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Dt(t,e,r);return s.customData._tokenResponse=n,s}function yp(t){return t!==void 0&&t.enterprise!==void 0}class T1{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return I1(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function b1(t,e){return cn(t,"GET","/v2/recaptchaConfig",Qn(t,e))}/**
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
 */async function R1(t,e){return cn(t,"POST","/v1/accounts:delete",e)}async function Dv(t,e){return cn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ei(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function P1(t,e=!1){const n=de(t),r=await n.getIdToken(e),s=qd(r);O(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:ei(cc(s.auth_time)),issuedAtTime:ei(cc(s.iat)),expirationTime:ei(cc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function cc(t){return Number(t)*1e3}function qd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Bo("JWT malformed, contained fewer than 3 sections"),null;try{const s=ya(n);return s?JSON.parse(s):(Bo("Failed to decode base64 JWT payload"),null)}catch(s){return Bo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function wp(t){const e=qd(t);return O(e,"internal-error"),O(typeof e.exp<"u","internal-error"),O(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function cs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof an&&O1(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function O1({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class A1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Su{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ei(this.lastLoginAt),this.creationTime=ei(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ca(t){var e;const n=t.auth,r=await t.getIdToken(),s=await cs(t,Dv(n,{idToken:r}));O(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Mv(i.providerUserInfo):[],a=D1(t.providerData,o),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),d=l?c:!1,u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Su(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,u)}async function L1(t){const e=de(t);await Ca(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function D1(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Mv(t){return t.map(e=>{var{providerId:n}=e,r=Hd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function M1(t,e){const n=await Av(t,{},async()=>{const r=ws({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Lv(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Ov.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function j1(t,e){return cn(t,"POST","/v2/accounts:revokeToken",Qn(t,e))}/**
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
 */class Qr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){O(e.idToken,"internal-error"),O(typeof e.idToken<"u","internal-error"),O(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):wp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){O(e.length!==0,"internal-error");const n=wp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(O(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await M1(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Qr;return r&&(O(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(O(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(O(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Qr,this.toJSON())}_performRefresh(){return Vt("not implemented")}}/**
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
 */function hn(t,e){O(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ht{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Hd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new A1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Su(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await cs(this,this.stsTokenManager.getToken(this.auth,e));return O(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return P1(this,e)}reload(){return L1(this)}_assign(e){this!==e&&(O(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ht(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){O(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ca(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(vt(this.auth.app))return Promise.reject(Mt(this.auth));const e=await this.getIdToken();return await cs(this,R1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,l,c,d;const u=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(s=n.email)!==null&&s!==void 0?s:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,v=(c=n.createdAt)!==null&&c!==void 0?c:void 0,m=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:_,emailVerified:x,isAnonymous:C,providerData:I,stsTokenManager:N}=n;O(_&&N,e,"internal-error");const R=Qr.fromJSON(this.name,N);O(typeof _=="string",e,"internal-error"),hn(u,e.name),hn(f,e.name),O(typeof x=="boolean",e,"internal-error"),O(typeof C=="boolean",e,"internal-error"),hn(p,e.name),hn(g,e.name),hn(y,e.name),hn(w,e.name),hn(v,e.name),hn(m,e.name);const B=new Ht({uid:_,auth:e,email:f,emailVerified:x,displayName:u,isAnonymous:C,photoURL:g,phoneNumber:p,tenantId:y,stsTokenManager:R,createdAt:v,lastLoginAt:m});return I&&Array.isArray(I)&&(B.providerData=I.map(A=>Object.assign({},A))),w&&(B._redirectEventId=w),B}static async _fromIdTokenResponse(e,n,r=!1){const s=new Qr;s.updateFromServerResponse(n);const i=new Ht({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ca(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];O(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Mv(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new Qr;a.updateFromIdToken(r);const l=new Ht({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Su(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,c),l}}/**
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
 */const xp=new Map;function Gt(t){nn(t instanceof Function,"Expected a class definition");let e=xp.get(t);return e?(nn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,xp.set(t,e),e)}/**
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
 */class jv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}jv.type="NONE";const Ep=jv;/**
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
 */function Wo(t,e,n){return`firebase:${t}:${e}:${n}`}class Yr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Wo(this.userKey,s.apiKey,i),this.fullPersistenceKey=Wo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ht._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Yr(Gt(Ep),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||Gt(Ep);const o=Wo(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const d=await c._get(o);if(d){const u=Ht._fromJSON(e,d);c!==i&&(a=u),i=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Yr(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new Yr(i,e,r))}}/**
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
 */function kp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(zv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Fv(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Wv(e))return"Blackberry";if(Vv(e))return"Webos";if(Uv(e))return"Safari";if((e.includes("chrome/")||$v(e))&&!e.includes("edge/"))return"Chrome";if(Bv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Fv(t=Be()){return/firefox\//i.test(t)}function Uv(t=Be()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function $v(t=Be()){return/crios\//i.test(t)}function zv(t=Be()){return/iemobile/i.test(t)}function Bv(t=Be()){return/android/i.test(t)}function Wv(t=Be()){return/blackberry/i.test(t)}function Vv(t=Be()){return/webos/i.test(t)}function Qd(t=Be()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function F1(t=Be()){var e;return Qd(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function U1(){return YC()&&document.documentMode===10}function Hv(t=Be()){return Qd(t)||Bv(t)||Vv(t)||Wv(t)||/windows phone/i.test(t)||zv(t)}/**
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
 */function Gv(t,e=[]){let n;switch(t){case"Browser":n=kp(Be());break;case"Worker":n=`${kp(Be())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Sr}/${r}`}/**
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
 */class $1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function z1(t,e={}){return cn(t,"GET","/v2/passwordPolicy",Qn(t,e))}/**
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
 */const B1=6;class W1{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:B1,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class V1{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Cp(this),this.idTokenSubscription=new Cp(this),this.beforeStateQueue=new $1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Rv,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Gt(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Yr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Dv(this,{idToken:e}),r=await Ht._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(vt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return O(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ca(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=k1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(vt(this.app))return Promise.reject(Mt(this));const n=e?de(e):null;return n&&O(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&O(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return vt(this.app)?Promise.reject(Mt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return vt(this.app)?Promise.reject(Mt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Gt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await z1(this),n=new W1(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Gi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await j1(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Gt(e)||this._popupRedirectResolver;O(n,this,"argument-error"),this.redirectPersistenceManager=await Yr.create(this,[Gt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(O(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return O(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Gv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&w1(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Yn(t){return de(t)}class Cp{constructor(e){this.auth=e,this.observer=null,this.addObserver=oS(n=>this.observer=n)}get next(){return O(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let fl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function H1(t){fl=t}function Kv(t){return fl.loadJS(t)}function G1(){return fl.recaptchaEnterpriseScript}function K1(){return fl.gapiScript}function q1(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Q1="recaptcha-enterprise",Y1="NO_RECAPTCHA";class X1{constructor(e){this.type=Q1,this.auth=Yn(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{b1(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new T1(l);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function s(i,o,a){const l=window.grecaptcha;yp(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(c=>{o(c)}).catch(()=>{o(Y1)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&yp(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=G1();l.length!==0&&(l+=a),Kv(l).then(()=>{s(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Sp(t,e,n,r=!1){const s=new X1(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Iu(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Sp(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Sp(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
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
 */function J1(t,e){const n=hl(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(xa(i,e??{}))return s;St(s,"already-initialized")}return n.initialize({options:e})}function Z1(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Gt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function eI(t,e,n){const r=Yn(t);O(r._canInitEmulator,r,"emulator-config-failed"),O(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=qv(e),{host:o,port:a}=tI(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),nI()}function qv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function tI(t){const e=qv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Ip(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Ip(o)}}}function Ip(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function nI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Yd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Vt("not implemented")}_getIdTokenResponse(e){return Vt("not implemented")}_linkToIdToken(e,n){return Vt("not implemented")}_getReauthenticationResolver(e){return Vt("not implemented")}}async function rI(t,e){return cn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function sI(t,e){return qi(t,"POST","/v1/accounts:signInWithPassword",Qn(t,e))}/**
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
 */async function iI(t,e){return qi(t,"POST","/v1/accounts:signInWithEmailLink",Qn(t,e))}async function oI(t,e){return qi(t,"POST","/v1/accounts:signInWithEmailLink",Qn(t,e))}/**
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
 */class bi extends Yd{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new bi(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new bi(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Iu(e,n,"signInWithPassword",sI);case"emailLink":return iI(e,{email:this._email,oobCode:this._password});default:St(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Iu(e,r,"signUpPassword",rI);case"emailLink":return oI(e,{idToken:n,email:this._email,oobCode:this._password});default:St(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Xr(t,e){return qi(t,"POST","/v1/accounts:signInWithIdp",Qn(t,e))}/**
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
 */const aI="http://localhost";class vr extends Yd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new vr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):St("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Hd(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new vr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Xr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Xr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Xr(e,n)}buildRequest(){const e={requestUri:aI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ws(n)}return e}}/**
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
 */function lI(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function cI(t){const e=Ws(Vs(t)).link,n=e?Ws(Vs(e)).deep_link_id:null,r=Ws(Vs(t)).deep_link_id;return(r?Ws(Vs(r)).link:null)||r||n||e||t}class Xd{constructor(e){var n,r,s,i,o,a;const l=Ws(Vs(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,u=lI((s=l.mode)!==null&&s!==void 0?s:null);O(c&&d&&u,"argument-error"),this.apiKey=c,this.operation=u,this.code=d,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=cI(e);try{return new Xd(n)}catch{return null}}}/**
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
 */class xs{constructor(){this.providerId=xs.PROVIDER_ID}static credential(e,n){return bi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Xd.parseLink(n);return O(r,"argument-error"),bi._fromEmailAndCode(e,r.code,r.tenantId)}}xs.PROVIDER_ID="password";xs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";xs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Qv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Qi extends Qv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class vn extends Qi{constructor(){super("facebook.com")}static credential(e){return vr._fromParams({providerId:vn.PROVIDER_ID,signInMethod:vn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vn.credentialFromTaggedObject(e)}static credentialFromError(e){return vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vn.credential(e.oauthAccessToken)}catch{return null}}}vn.FACEBOOK_SIGN_IN_METHOD="facebook.com";vn.PROVIDER_ID="facebook.com";/**
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
 */class yn extends Qi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return vr._fromParams({providerId:yn.PROVIDER_ID,signInMethod:yn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return yn.credentialFromTaggedObject(e)}static credentialFromError(e){return yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return yn.credential(n,r)}catch{return null}}}yn.GOOGLE_SIGN_IN_METHOD="google.com";yn.PROVIDER_ID="google.com";/**
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
 */class wn extends Qi{constructor(){super("github.com")}static credential(e){return vr._fromParams({providerId:wn.PROVIDER_ID,signInMethod:wn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wn.credentialFromTaggedObject(e)}static credentialFromError(e){return wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wn.credential(e.oauthAccessToken)}catch{return null}}}wn.GITHUB_SIGN_IN_METHOD="github.com";wn.PROVIDER_ID="github.com";/**
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
 */class xn extends Qi{constructor(){super("twitter.com")}static credential(e,n){return vr._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return xn.credentialFromTaggedObject(e)}static credentialFromError(e){return xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return xn.credential(n,r)}catch{return null}}}xn.TWITTER_SIGN_IN_METHOD="twitter.com";xn.PROVIDER_ID="twitter.com";/**
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
 */async function Yv(t,e){return qi(t,"POST","/v1/accounts:signUp",Qn(t,e))}/**
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
 */class rn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Ht._fromIdTokenResponse(e,r,s),o=Np(r);return new rn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Np(r);return new rn({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Np(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function uI(t){var e;if(vt(t.app))return Promise.reject(Mt(t));const n=Yn(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new rn({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await Yv(n,{returnSecureToken:!0}),s=await rn._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(s.user),s}/**
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
 */class Sa extends an{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Sa.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Sa(e,n,r,s)}}function Xv(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Sa._fromErrorAndOperation(t,i,e,r):i})}async function dI(t,e,n=!1){const r=await cs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return rn._forOperation(t,"link",r)}/**
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
 */async function hI(t,e,n=!1){const{auth:r}=t;if(vt(r.app))return Promise.reject(Mt(r));const s="reauthenticate";try{const i=await cs(t,Xv(r,s,e,t),n);O(i.idToken,r,"internal-error");const o=qd(i.idToken);O(o,r,"internal-error");const{sub:a}=o;return O(t.uid===a,r,"user-mismatch"),rn._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&St(r,"user-mismatch"),i}}/**
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
 */async function Jv(t,e,n=!1){if(vt(t.app))return Promise.reject(Mt(t));const r="signIn",s=await Xv(t,r,e),i=await rn._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function fI(t,e){return Jv(Yn(t),e)}/**
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
 */async function Zv(t){const e=Yn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function pI(t,e,n){if(vt(t.app))return Promise.reject(Mt(t));const r=Yn(t),o=await Iu(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Yv).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Zv(t),l}),a=await rn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function mI(t,e,n){return vt(t.app)?Promise.reject(Mt(t)):fI(de(t),xs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Zv(t),r})}/**
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
 */async function gI(t,e){return cn(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Tp(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=de(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await cs(r,gI(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function _I(t,e,n,r){return de(t).onIdTokenChanged(e,n,r)}function vI(t,e,n){return de(t).beforeAuthStateChanged(e,n)}function yI(t,e,n,r){return de(t).onAuthStateChanged(e,n,r)}function wI(t){return de(t).signOut()}const Ia="__sak";/**
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
 */class ey{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ia,"1"),this.storage.removeItem(Ia),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const xI=1e3,EI=10;class ty extends ey{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Hv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);U1()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,EI):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},xI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ty.type="LOCAL";const kI=ty;/**
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
 */class ny extends ey{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ny.type="SESSION";const ry=ny;/**
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
 */function CI(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class pl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new pl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,i)),l=await CI(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}pl.receivers=[];/**
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
 */function Jd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class SI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const c=Jd("",20);s.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(u){const f=u;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(d),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function jt(){return window}function II(t){jt().location.href=t}/**
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
 */function sy(){return typeof jt().WorkerGlobalScope<"u"&&typeof jt().importScripts=="function"}async function NI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function TI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function bI(){return sy()?self:null}/**
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
 */const iy="firebaseLocalStorageDb",RI=1,Na="firebaseLocalStorage",oy="fbase_key";class Yi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ml(t,e){return t.transaction([Na],e?"readwrite":"readonly").objectStore(Na)}function PI(){const t=indexedDB.deleteDatabase(iy);return new Yi(t).toPromise()}function Nu(){const t=indexedDB.open(iy,RI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Na,{keyPath:oy})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Na)?e(r):(r.close(),await PI(),e(await Nu()))})})}async function bp(t,e,n){const r=ml(t,!0).put({[oy]:e,value:n});return new Yi(r).toPromise()}async function OI(t,e){const n=ml(t,!1).get(e),r=await new Yi(n).toPromise();return r===void 0?null:r.value}function Rp(t,e){const n=ml(t,!0).delete(e);return new Yi(n).toPromise()}const AI=800,LI=3;class ay{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Nu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>LI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return sy()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=pl._getInstance(bI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await NI(),!this.activeServiceWorker)return;this.sender=new SI(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||TI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Nu();return await bp(e,Ia,"1"),await Rp(e,Ia),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>bp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>OI(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Rp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ml(s,!1).getAll();return new Yi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),AI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ay.type="LOCAL";const DI=ay;new Ki(3e4,6e4);/**
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
 */function MI(t,e){return e?Gt(e):(O(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Zd extends Yd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Xr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Xr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Xr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function jI(t){return Jv(t.auth,new Zd(t),t.bypassAuthState)}function FI(t){const{auth:e,user:n}=t;return O(n,e,"internal-error"),hI(n,new Zd(t),t.bypassAuthState)}async function UI(t){const{auth:e,user:n}=t;return O(n,e,"internal-error"),dI(n,new Zd(t),t.bypassAuthState)}/**
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
 */class ly{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return jI;case"linkViaPopup":case"linkViaRedirect":return UI;case"reauthViaPopup":case"reauthViaRedirect":return FI;default:St(this.auth,"internal-error")}}resolve(e){nn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){nn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const $I=new Ki(2e3,1e4);class zr extends ly{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,zr.currentPopupAction&&zr.currentPopupAction.cancel(),zr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return O(e,this.auth,"internal-error"),e}async onExecution(){nn(this.filter.length===1,"Popup operations only handle one event");const e=Jd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Dt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Dt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,zr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Dt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,$I.get())};e()}}zr.currentPopupAction=null;/**
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
 */const zI="pendingRedirect",Vo=new Map;class BI extends ly{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Vo.get(this.auth._key());if(!e){try{const r=await WI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Vo.set(this.auth._key(),e)}return this.bypassAuthState||Vo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function WI(t,e){const n=GI(e),r=HI(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function VI(t,e){Vo.set(t._key(),e)}function HI(t){return Gt(t._redirectPersistence)}function GI(t){return Wo(zI,t.config.apiKey,t.name)}async function KI(t,e,n=!1){if(vt(t.app))return Promise.reject(Mt(t));const r=Yn(t),s=MI(r,e),o=await new BI(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const qI=10*60*1e3;class QI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!YI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!cy(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Dt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=qI&&this.cachedEventUids.clear(),this.cachedEventUids.has(Pp(e))}saveEventToCache(e){this.cachedEventUids.add(Pp(e)),this.lastProcessedEventTime=Date.now()}}function Pp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function cy({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function YI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return cy(t);default:return!1}}/**
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
 */async function XI(t,e={}){return cn(t,"GET","/v1/projects",e)}/**
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
 */const JI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ZI=/^https?/;async function eN(t){if(t.config.emulator)return;const{authorizedDomains:e}=await XI(t);for(const n of e)try{if(tN(n))return}catch{}St(t,"unauthorized-domain")}function tN(t){const e=Cu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!ZI.test(n))return!1;if(JI.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const nN=new Ki(3e4,6e4);function Op(){const t=jt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function rN(t){return new Promise((e,n)=>{var r,s,i;function o(){Op(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Op(),n(Dt(t,"network-request-failed"))},timeout:nN.get()})}if(!((s=(r=jt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=jt().gapi)===null||i===void 0)&&i.load)o();else{const a=q1("iframefcb");return jt()[a]=()=>{gapi.load?o():n(Dt(t,"network-request-failed"))},Kv(`${K1()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Ho=null,e})}let Ho=null;function sN(t){return Ho=Ho||rN(t),Ho}/**
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
 */const iN=new Ki(5e3,15e3),oN="__/auth/iframe",aN="emulator/auth/iframe",lN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},cN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function uN(t){const e=t.config;O(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Kd(e,aN):`https://${t.config.authDomain}/${oN}`,r={apiKey:e.apiKey,appName:t.name,v:Sr},s=cN.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${ws(r).slice(1)}`}async function dN(t){const e=await sN(t),n=jt().gapi;return O(n,t,"internal-error"),e.open({where:document.body,url:uN(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:lN,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Dt(t,"network-request-failed"),a=jt().setTimeout(()=>{i(o)},iN.get());function l(){jt().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const hN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},fN=500,pN=600,mN="_blank",gN="http://localhost";class Ap{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function _N(t,e,n,r=fN,s=pN){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},hN),{width:r.toString(),height:s.toString(),top:i,left:o}),c=Be().toLowerCase();n&&(a=$v(c)?mN:n),Fv(c)&&(e=e||gN,l.scrollbars="yes");const d=Object.entries(l).reduce((f,[p,g])=>`${f}${p}=${g},`,"");if(F1(c)&&a!=="_self")return vN(e||"",a),new Ap(null);const u=window.open(e||"",a,d);O(u,t,"popup-blocked");try{u.focus()}catch{}return new Ap(u)}function vN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const yN="__/auth/handler",wN="emulator/auth/handler",xN=encodeURIComponent("fac");async function Lp(t,e,n,r,s,i){O(t.config.authDomain,t,"auth-domain-config-required"),O(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Sr,eventId:s};if(e instanceof Qv){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",vu(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,u]of Object.entries({}))o[d]=u}if(e instanceof Qi){const d=e.getScopes().filter(u=>u!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await t._getAppCheckToken(),c=l?`#${xN}=${encodeURIComponent(l)}`:"";return`${EN(t)}?${ws(a).slice(1)}${c}`}function EN({config:t}){return t.emulator?Kd(t,wN):`https://${t.authDomain}/${yN}`}/**
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
 */const uc="webStorageSupport";class kN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ry,this._completeRedirectFn=KI,this._overrideRedirectResult=VI}async _openPopup(e,n,r,s){var i;nn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Lp(e,n,r,Cu(),s);return _N(e,o,Jd())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Lp(e,n,r,Cu(),s);return II(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(nn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await dN(e),r=new QI(e);return n.register("authEvent",s=>(O(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(uc,{type:uc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[uc];o!==void 0&&n(!!o),St(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=eN(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Hv()||Uv()||Qd()}}const CN=kN;var Dp="@firebase/auth",Mp="1.7.9";/**
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
 */class SN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){O(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function IN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function NN(t){_r(new $n("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;O(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Gv(t)},c=new V1(r,s,i,l);return Z1(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),_r(new $n("auth-internal",e=>{const n=Yn(e.getProvider("auth").getImmediate());return(r=>new SN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Lt(Dp,Mp,IN(t)),Lt(Dp,Mp,"esm2017")}/**
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
 */const TN=5*60,bN=wv("authIdTokenMaxAge")||TN;let jp=null;const RN=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>bN)return;const s=n==null?void 0:n.token;jp!==s&&(jp=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function PN(t=Vd()){const e=hl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=J1(t,{popupRedirectResolver:CN,persistence:[DI,kI,ry]}),r=wv("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=RN(i.toString());vI(n,o,()=>o(n.currentUser)),_I(n,a=>o(a))}}const s=_v("auth");return s&&eI(n,`http://${s}`),n}function ON(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}H1({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Dt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",ON().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});NN("Browser");var Fp={};const Up="@firebase/database",$p="1.0.8";/**
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
 */let uy="";function AN(t){uy=t}/**
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
 */class LN{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),me(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Ni(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class DN{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return ln(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const dy=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new LN(e)}}catch{}return new DN},or=dy("localStorage"),MN=dy("sessionStorage");/**
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
 */const Jr=new Bd("@firebase/database"),jN=function(){let t=1;return function(){return t++}}(),hy=function(t){const e=cS(t),n=new iS;n.update(e);const r=n.digest();return Fd.encodeByteArray(r)},Xi=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Xi.apply(null,r):typeof r=="object"?e+=me(r):e+=r,e+=" "}return e};let ti=null,zp=!0;const FN=function(t,e){S(!0,"Can't turn on custom loggers persistently."),Jr.logLevel=H.VERBOSE,ti=Jr.log.bind(Jr)},De=function(...t){if(zp===!0&&(zp=!1,ti===null&&MN.get("logging_enabled")===!0&&FN()),ti){const e=Xi.apply(null,t);ti(e)}},Ji=function(t){return function(...e){De(t,...e)}},Tu=function(...t){const e="FIREBASE INTERNAL ERROR: "+Xi(...t);Jr.error(e)},sn=function(...t){const e=`FIREBASE FATAL ERROR: ${Xi(...t)}`;throw Jr.error(e),new Error(e)},Xe=function(...t){const e="FIREBASE WARNING: "+Xi(...t);Jr.warn(e)},UN=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Xe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},fy=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},$N=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},us="[MIN_NAME]",yr="[MAX_NAME]",Es=function(t,e){if(t===e)return 0;if(t===us||e===yr)return-1;if(e===us||t===yr)return 1;{const n=Bp(t),r=Bp(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},zN=function(t,e){return t===e?0:t<e?-1:1},As=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+me(e))},eh=function(t){if(typeof t!="object"||t===null)return me(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=me(e[r]),n+=":",n+=eh(t[e[r]]);return n+="}",n},py=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let s=0;s<n;s+=e)s+e>n?r.push(t.substring(s,n)):r.push(t.substring(s,s+e));return r};function Je(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const my=function(t){S(!fy(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let s,i,o,a,l;t===0?(i=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),i=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(i=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(i%2?1:0),i=Math.floor(i/2);c.push(s?1:0),c.reverse();const d=c.join("");let u="";for(l=0;l<64;l+=8){let f=parseInt(d.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),u=u+f}return u.toLowerCase()},BN=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},WN=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function VN(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const HN=new RegExp("^-?(0*)\\d{1,10}$"),GN=-2147483648,KN=2147483647,Bp=function(t){if(HN.test(t)){const e=Number(t);if(e>=GN&&e<=KN)return e}return null},ks=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Xe("Exception was thrown by user callback.",n),e},Math.floor(0))}},qN=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},ni=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class QN{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Xe(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class YN{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(De("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Xe(e)}}class Go{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Go.OWNER="owner";/**
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
 */const th="5",gy="v",_y="s",vy="r",yy="f",wy=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,xy="ls",Ey="p",bu="ac",ky="websocket",Cy="long_polling";/**
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
 */class Sy{constructor(e,n,r,s,i=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=s,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=or.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&or.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function XN(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Iy(t,e,n){S(typeof e=="string","typeof type must == string"),S(typeof n=="object","typeof params must == object");let r;if(e===ky)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Cy)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);XN(t)&&(n.ns=t.namespace);const s=[];return Je(n,(i,o)=>{s.push(i+"="+o)}),r+s.join("&")}/**
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
 */class JN{constructor(){this.counters_={}}incrementCounter(e,n=1){ln(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return BC(this.counters_)}}/**
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
 */const dc={},hc={};function nh(t){const e=t.toString();return dc[e]||(dc[e]=new JN),dc[e]}function ZN(t,e){const n=t.toString();return hc[n]||(hc[n]=e()),hc[n]}/**
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
 */class eT{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<r.length;++s)r[s]&&ks(()=>{this.onMessage_(r[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Wp="start",tT="close",nT="pLPCommand",rT="pRTLPCB",Ny="id",Ty="pw",by="ser",sT="cb",iT="seg",oT="ts",aT="d",lT="dframe",Ry=1870,Py=30,cT=Ry-Py,uT=25e3,dT=3e4;class Br{constructor(e,n,r,s,i,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ji(e),this.stats_=nh(n),this.urlFn=l=>(this.appCheckToken&&(l[bu]=this.appCheckToken),Iy(n,Cy,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new eT(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(dT)),$N(()=>{if(this.isClosed_)return;this.scriptTagHolder=new rh((...i)=>{const[o,a,l,c,d]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Wp)this.id=a,this.password=l;else if(o===tT)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Wp]="t",r[by]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[sT]=this.scriptTagHolder.uniqueCallbackIdentifier),r[gy]=th,this.transportSessionId&&(r[_y]=this.transportSessionId),this.lastSessionId&&(r[xy]=this.lastSessionId),this.applicationId&&(r[Ey]=this.applicationId),this.appCheckToken&&(r[bu]=this.appCheckToken),typeof location<"u"&&location.hostname&&wy.test(location.hostname)&&(r[vy]=yy);const s=this.urlFn(r);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Br.forceAllow_=!0}static forceDisallow(){Br.forceDisallow_=!0}static isAvailable(){return Br.forceAllow_?!0:!Br.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!BN()&&!WN()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=me(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=mv(n),s=py(r,cT);for(let i=0;i<s.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[i]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[lT]="t",r[Ny]=e,r[Ty]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=me(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class rh{constructor(e,n,r,s){this.onDisconnect=r,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=jN(),window[nT+this.uniqueCallbackIdentifier]=e,window[rT+this.uniqueCallbackIdentifier]=n,this.myIFrame=rh.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){De("frame writing exception"),a.stack&&De(a.stack),De(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||De("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Ny]=this.myID,e[Ty]=this.myPW,e[by]=this.currentSerial;let n=this.urlFn(e),r="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Py+r.length<=Ry;){const o=this.pendingSegs.shift();r=r+"&"+iT+s+"="+o.seg+"&"+oT+s+"="+o.ts+"&"+aT+s+"="+o.d,s++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(r,Math.floor(uT)),i=()=>{clearTimeout(s),r()};this.addTag(e,i)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const s=r.readyState;(!s||s==="loaded"||s==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{De("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const hT=16384,fT=45e3;let Ta=null;typeof MozWebSocket<"u"?Ta=MozWebSocket:typeof WebSocket<"u"&&(Ta=WebSocket);class _t{constructor(e,n,r,s,i,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ji(this.connId),this.stats_=nh(n),this.connURL=_t.connectionURL_(n,o,a,s,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,s,i){const o={};return o[gy]=th,typeof location<"u"&&location.hostname&&wy.test(location.hostname)&&(o[vy]=yy),n&&(o[_y]=n),r&&(o[xy]=r),s&&(o[bu]=s),i&&(o[Ey]=i),Iy(e,ky,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,or.set("previous_websocket_failure",!0);try{let r;XC(),this.mySock=new Ta(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){_t.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Ta!==null&&!_t.forceDisallow_}static previouslyFailed(){return or.isInMemoryStorage||or.get("previous_websocket_failure")===!0}markConnectionHealthy(){or.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Ni(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(S(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=me(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=py(n,hT);r.length>1&&this.sendString_(String(r.length));for(let s=0;s<r.length;s++)this.sendString_(r[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(fT))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}_t.responsesRequiredToBeHealthy=2;_t.healthyTimeout=3e4;/**
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
 */class Ri{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Br,_t]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=_t&&_t.isAvailable();let r=n&&!_t.previouslyFailed();if(e.webSocketOnly&&(n||Xe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[_t];else{const s=this.transports_=[];for(const i of Ri.ALL_TRANSPORTS)i&&i.isAvailable()&&s.push(i);Ri.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ri.globalTransportInitialized_=!1;/**
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
 */const pT=6e4,mT=5e3,gT=10*1024,_T=100*1024,fc="t",Vp="d",vT="s",Hp="r",yT="e",Gp="o",Kp="a",qp="n",Qp="p",wT="h";class xT{constructor(e,n,r,s,i,o,a,l,c,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=s,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ji("c:"+this.id+":"),this.transportManager_=new Ri(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=ni(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>_T?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>gT?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(fc in e){const n=e[fc];n===Kp?this.upgradeIfSecondaryHealthy_():n===Hp?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Gp&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=As("t",e),r=As("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Qp,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Kp,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:qp,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=As("t",e),r=As("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=As(fc,e);if(Vp in e){const r=e[Vp];if(n===wT){const s=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===qp){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===vT?this.onConnectionShutdown_(r):n===Hp?this.onReset_(r):n===yT?Tu("Server Error: "+r):n===Gp?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Tu("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),th!==r&&Xe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),ni(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(pT))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):ni(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(mT))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Qp,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(or.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Oy{put(e,n,r,s){}merge(e,n,r,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class Ay{constructor(e){this.allowedEvents_=e,this.listeners_={},S(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let s=0;s<r.length;s++)r[s].callback.apply(r[s].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const s=this.getInitialEvent(e);s&&n.apply(r,s)}off(e,n,r){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let i=0;i<s.length;i++)if(s[i].callback===n&&(!r||r===s[i].context)){s.splice(i,1);return}}validateEventType_(e){S(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class ba extends Ay{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!$d()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ba}getInitialEvent(e){return S(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Yp=32,Xp=768;class G{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[r]=this.pieces_[s],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function z(){return new G("")}function M(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function zn(t){return t.pieces_.length-t.pieceNum_}function q(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new G(t.pieces_,e)}function Ly(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function ET(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Dy(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function My(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new G(e,0)}function ge(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof G)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let s=0;s<r.length;s++)r[s].length>0&&n.push(r[s])}return new G(n,0)}function F(t){return t.pieceNum_>=t.pieces_.length}function $e(t,e){const n=M(t),r=M(e);if(n===null)return e;if(n===r)return $e(q(t),q(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function sh(t,e){if(zn(t)!==zn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function yt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(zn(t)>zn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class kT{constructor(e,n){this.errorPrefix_=n,this.parts_=Dy(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=dl(this.parts_[r]);jy(this)}}function CT(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=dl(e),jy(t)}function ST(t){const e=t.parts_.pop();t.byteLength_-=dl(e),t.parts_.length>0&&(t.byteLength_-=1)}function jy(t){if(t.byteLength_>Xp)throw new Error(t.errorPrefix_+"has a key path longer than "+Xp+" bytes ("+t.byteLength_+").");if(t.parts_.length>Yp)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Yp+") or object contains a cycle "+nr(t))}function nr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class ih extends Ay{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new ih}getInitialEvent(e){return S(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Ls=1e3,IT=60*5*1e3,Jp=30*1e3,NT=1.3,TT=3e4,bT="server_kill",Zp=3;class Qt extends Oy{constructor(e,n,r,s,i,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=s,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Qt.nextPersistentConnectionId_++,this.log_=Ji("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ls,this.maxReconnectDelay_=IT,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");ih.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ba.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const s=++this.requestNumber_,i={r:s,a:e,b:n};this.log_(me(i)),S(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),r&&(this.requestCBHash_[s]=r)}get(e){this.initConnection_();const n=new ul,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),n.promise}listen(e,n,r,s){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),S(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:r};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+r+" for "+s);const i={p:r},o="q";e.tag&&(i.q=n._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const l=a.d,c=a.s;Qt.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&ln(e,"w")){const r=ls(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',i=n._path.toString();Xe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||sS(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Jp)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=rS(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,s=>{const i=s.s,o=s.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+s),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,s)&&this.connected_&&this.sendUnlisten_(r,s,e._queryObject,n)}sendUnlisten_(e,n,r,s){this.log_("Unlisten on "+e+" for "+n);const i={p:e},o="n";s&&(i.q=r,i.t=s),this.sendRequest(o,i)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,s){const i={p:n,d:r};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,r,s){this.putInternal("p",e,n,r,s)}merge(e,n,r,s){this.putInternal("m",e,n,r,s)}putInternal(e,n,r,s,i){this.initConnection_();const o={p:n,d:r};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,i=>{this.log_(n+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(i.s,i.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const i=r.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+me(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Tu("Unrecognized action received from server: "+me(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){S(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ls,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ls,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>TT&&(this.reconnectDelay_=Ls),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*NT)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Qt.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(u){S(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(u)};this.realtime_={close:l,sendRequest:c};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,f]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?De("getToken() completed but was canceled"):(De("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=f&&f.token,a=new xT(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,p=>{Xe(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(bT)},i))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&Xe(u),l())}}}interrupt(e){De("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){De("Resuming connection for reason: "+e),delete this.interruptReasons_[e],vu(this.interruptReasons_)&&(this.reconnectDelay_=Ls,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(i=>eh(i)).join("$"):r="default";const s=this.removeListen_(e,r);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const r=new G(e).toString();let s;if(this.listens.has(r)){const i=this.listens.get(r);s=i.get(n),i.delete(n),i.size===0&&this.listens.delete(r)}else s=void 0;return s}onAuthRevoked_(e,n){De("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Zp&&(this.reconnectDelay_=Jp,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){De("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Zp&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+uy.replace(/\./g,"-")]=1,$d()?e["framework.cordova"]=1:Ev()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ba.getInstance().currentlyOnline();return vu(this.interruptReasons_)&&e}}Qt.nextPersistentConnectionId_=0;Qt.nextConnectionId_=0;/**
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
 */class j{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new j(e,n)}}/**
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
 */class gl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new j(us,e),s=new j(us,n);return this.compare(r,s)!==0}minPost(){return j.MIN}}/**
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
 */let So;class Fy extends gl{static get __EMPTY_NODE(){return So}static set __EMPTY_NODE(e){So=e}compare(e,n){return Es(e.name,n.name)}isDefinedOn(e){throw ys("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return j.MIN}maxPost(){return new j(yr,So)}makePost(e,n){return S(typeof e=="string","KeyIndex indexValue must always be a string."),new j(e,So)}toString(){return".key"}}const Zr=new Fy;/**
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
 */class Io{constructor(e,n,r,s,i=null){this.isReverse_=s,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ke{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??ke.RED,this.left=s??Ke.EMPTY_NODE,this.right=i??Ke.EMPTY_NODE}copy(e,n,r,s,i){return new ke(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return i<0?s=s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ke.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,s;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Ke.EMPTY_NODE;s=r.right.min_(),r=r.copy(s.key,s.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ke.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ke.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ke.RED=!0;ke.BLACK=!1;class RT{copy(e,n,r,s,i){return this}insert(e,n,r){return new ke(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ke{constructor(e,n=Ke.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ke(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ke.BLACK,null,null))}remove(e){return new Ke(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ke.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,s=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return s?s.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(s=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Io(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Io(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Io(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Io(this.root_,null,this.comparator_,!0,e)}}Ke.EMPTY_NODE=new RT;/**
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
 */function PT(t,e){return Es(t.name,e.name)}function oh(t,e){return Es(t,e)}/**
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
 */let Ru;function OT(t){Ru=t}const Uy=function(t){return typeof t=="number"?"number:"+my(t):"string:"+t},$y=function(t){if(t.isLeafNode()){const e=t.val();S(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ln(e,".sv"),"Priority must be a string or number.")}else S(t===Ru||t.isEmpty(),"priority of unexpected type.");S(t===Ru||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let em;class we{constructor(e,n=we.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,S(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),$y(this.priorityNode_)}static set __childrenNodeConstructor(e){em=e}static get __childrenNodeConstructor(){return em}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new we(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:we.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return F(e)?this:M(e)===".priority"?this.priorityNode_:we.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:we.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=M(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(S(r!==".priority"||zn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,we.__childrenNodeConstructor.EMPTY_NODE.updateChild(q(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Uy(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=my(this.value_):e+=this.value_,this.lazyHash_=hy(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===we.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof we.__childrenNodeConstructor?-1:(S(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,s=we.VALUE_TYPE_ORDER.indexOf(n),i=we.VALUE_TYPE_ORDER.indexOf(r);return S(s>=0,"Unknown leaf type: "+n),S(i>=0,"Unknown leaf type: "+r),s===i?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}we.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let zy,By;function AT(t){zy=t}function LT(t){By=t}class DT extends gl{compare(e,n){const r=e.node.getPriority(),s=n.node.getPriority(),i=r.compareTo(s);return i===0?Es(e.name,n.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return j.MIN}maxPost(){return new j(yr,new we("[PRIORITY-POST]",By))}makePost(e,n){const r=zy(e);return new j(n,new we("[PRIORITY-POST]",r))}toString(){return".priority"}}const se=new DT;/**
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
 */const MT=Math.log(2);class jT{constructor(e){const n=i=>parseInt(Math.log(i)/MT,10),r=i=>parseInt(Array(i+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=r(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ra=function(t,e,n,r){t.sort(e);const s=function(l,c){const d=c-l;let u,f;if(d===0)return null;if(d===1)return u=t[l],f=n?n(u):u,new ke(f,u.node,ke.BLACK,null,null);{const p=parseInt(d/2,10)+l,g=s(l,p),y=s(p+1,c);return u=t[p],f=n?n(u):u,new ke(f,u.node,ke.BLACK,g,y)}},i=function(l){let c=null,d=null,u=t.length;const f=function(g,y){const w=u-g,v=u;u-=g;const m=s(w+1,v),_=t[w],x=n?n(_):_;p(new ke(x,_.node,y,null,m))},p=function(g){c?(c.left=g,c=g):(d=g,c=g)};for(let g=0;g<l.count;++g){const y=l.nextBitIsOne(),w=Math.pow(2,l.count-(g+1));y?f(w,ke.BLACK):(f(w,ke.BLACK),f(w,ke.RED))}return d},o=new jT(t.length),a=i(o);return new Ke(r||e,a)};/**
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
 */let pc;const Tr={};class Kt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return S(Tr&&se,"ChildrenNode.ts has not been loaded"),pc=pc||new Kt({".priority":Tr},{".priority":se}),pc}get(e){const n=ls(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ke?n:null}hasIndex(e){return ln(this.indexSet_,e.toString())}addIndex(e,n){S(e!==Zr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let s=!1;const i=n.getIterator(j.Wrap);let o=i.getNext();for(;o;)s=s||e.isDefinedOn(o.node),r.push(o),o=i.getNext();let a;s?a=Ra(r,e.getCompare()):a=Tr;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const d=Object.assign({},this.indexes_);return d[l]=a,new Kt(d,c)}addToIndexes(e,n){const r=wa(this.indexes_,(s,i)=>{const o=ls(this.indexSet_,i);if(S(o,"Missing index implementation for "+i),s===Tr)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(j.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Ra(a,o.getCompare())}else return Tr;else{const a=n.get(e.name);let l=s;return a&&(l=l.remove(new j(e.name,a))),l.insert(e,e.node)}});return new Kt(r,this.indexSet_)}removeFromIndexes(e,n){const r=wa(this.indexes_,s=>{if(s===Tr)return s;{const i=n.get(e.name);return i?s.remove(new j(e.name,i)):s}});return new Kt(r,this.indexSet_)}}/**
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
 */let Ds;class P{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&$y(this.priorityNode_),this.children_.isEmpty()&&S(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ds||(Ds=new P(new Ke(oh),null,Kt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ds}updatePriority(e){return this.children_.isEmpty()?this:new P(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ds:n}}getChild(e){const n=M(e);return n===null?this:this.getImmediateChild(n).getChild(q(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(S(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new j(e,n);let s,i;n.isEmpty()?(s=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(r,this.children_)):(s=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(r,this.children_));const o=s.isEmpty()?Ds:this.priorityNode_;return new P(s,o,i)}}updateChild(e,n){const r=M(e);if(r===null)return n;{S(M(e)!==".priority"||zn(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(r).updateChild(q(e),n);return this.updateImmediateChild(r,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,s=0,i=!0;if(this.forEachChild(se,(o,a)=>{n[o]=a.val(e),r++,i&&P.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):i=!1}),!e&&i&&s<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Uy(this.getPriority().val())+":"),this.forEachChild(se,(n,r)=>{const s=r.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":hy(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const s=this.resolveIndex_(r);if(s){const i=s.getPredecessorKey(new j(e,n));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new j(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new j(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,j.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)<0;)s.getNext(),i=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,j.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)>0;)s.getNext(),i=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Zi?-1:0}withIndex(e){if(e===Zr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new P(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Zr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(se),s=n.getIterator(se);let i=r.getNext(),o=s.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=r.getNext(),o=s.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Zr?null:this.indexMap_.get(e.toString())}}P.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class FT extends P{constructor(){super(new Ke(oh),P.EMPTY_NODE,Kt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return P.EMPTY_NODE}isEmpty(){return!1}}const Zi=new FT;Object.defineProperties(j,{MIN:{value:new j(us,P.EMPTY_NODE)},MAX:{value:new j(yr,Zi)}});Fy.__EMPTY_NODE=P.EMPTY_NODE;we.__childrenNodeConstructor=P;OT(Zi);LT(Zi);/**
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
 */const UT=!0;function Ce(t,e=null){if(t===null)return P.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),S(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new we(n,Ce(e))}if(!(t instanceof Array)&&UT){const n=[];let r=!1;if(Je(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Ce(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new j(o,l)))}}),n.length===0)return P.EMPTY_NODE;const i=Ra(n,PT,o=>o.name,oh);if(r){const o=Ra(n,se.getCompare());return new P(i,Ce(e),new Kt({".priority":o},{".priority":se}))}else return new P(i,Ce(e),Kt.Default)}else{let n=P.EMPTY_NODE;return Je(t,(r,s)=>{if(ln(t,r)&&r.substring(0,1)!=="."){const i=Ce(s);(i.isLeafNode()||!i.isEmpty())&&(n=n.updateImmediateChild(r,i))}}),n.updatePriority(Ce(e))}}AT(Ce);/**
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
 */class $T extends gl{constructor(e){super(),this.indexPath_=e,S(!F(e)&&M(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),s=this.extractChild(n.node),i=r.compareTo(s);return i===0?Es(e.name,n.name):i}makePost(e,n){const r=Ce(e),s=P.EMPTY_NODE.updateChild(this.indexPath_,r);return new j(n,s)}maxPost(){const e=P.EMPTY_NODE.updateChild(this.indexPath_,Zi);return new j(yr,e)}toString(){return Dy(this.indexPath_,0).join("/")}}/**
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
 */class zT extends gl{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Es(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return j.MIN}maxPost(){return j.MAX}makePost(e,n){const r=Ce(e);return new j(n,r)}toString(){return".value"}}const BT=new zT;/**
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
 */function Wy(t){return{type:"value",snapshotNode:t}}function ds(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Pi(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Oi(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function WT(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class ah{constructor(e){this.index_=e}updateChild(e,n,r,s,i,o){S(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(s).equals(r.getChild(s))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Pi(n,a)):S(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(ds(n,r)):o.trackChildChange(Oi(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(se,(s,i)=>{n.hasChild(s)||r.trackChildChange(Pi(s,i))}),n.isLeafNode()||n.forEachChild(se,(s,i)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(i)||r.trackChildChange(Oi(s,i,o))}else r.trackChildChange(ds(s,i))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?P.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Ai{constructor(e){this.indexedFilter_=new ah(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ai.getStartPost_(e),this.endPost_=Ai.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,s,i,o){return this.matches(new j(n,r))||(r=P.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,s,i,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=P.EMPTY_NODE);let s=n.withIndex(this.index_);s=s.updatePriority(P.EMPTY_NODE);const i=this;return n.forEachChild(se,(o,a)=>{i.matches(new j(o,a))||(s=s.updateImmediateChild(o,P.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class VT{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Ai(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,s,i,o){return this.rangedFilter_.matches(new j(n,r))||(r=P.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,s,i,o):this.fullLimitUpdateChild_(e,n,r,i,o)}updateFullNode(e,n,r){let s;if(n.isLeafNode()||n.isEmpty())s=P.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){s=P.EMPTY_NODE.withIndex(this.index_);let i;this.reverse_?i=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):i=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;i.hasNext()&&o<this.limit_;){const a=i.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=n.withIndex(this.index_),s=s.updatePriority(P.EMPTY_NODE);let i;this.reverse_?i=s.getReverseIterator(this.index_):i=s.getIterator(this.index_);let o=0;for(;i.hasNext();){const a=i.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,P.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,s,i){let o;if(this.reverse_){const u=this.index_.getCompare();o=(f,p)=>u(p,f)}else o=this.index_.getCompare();const a=e;S(a.numChildren()===this.limit_,"");const l=new j(n,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(l);if(a.hasChild(n)){const u=a.getImmediateChild(n);let f=s.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=s.getChildAfterChild(this.index_,f,this.reverse_);const p=f==null?1:o(f,l);if(d&&!r.isEmpty()&&p>=0)return i!=null&&i.trackChildChange(Oi(n,r,u)),a.updateImmediateChild(n,r);{i!=null&&i.trackChildChange(Pi(n,u));const y=a.updateImmediateChild(n,P.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(i!=null&&i.trackChildChange(ds(f.name,f.node)),y.updateImmediateChild(f.name,f.node)):y}}else return r.isEmpty()?e:d&&o(c,l)>=0?(i!=null&&(i.trackChildChange(Pi(c.name,c.node)),i.trackChildChange(ds(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(c.name,P.EMPTY_NODE)):e}}/**
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
 */class lh{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=se}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return S(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return S(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:us}hasEnd(){return this.endSet_}getIndexEndValue(){return S(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return S(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:yr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return S(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===se}copy(){const e=new lh;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function HT(t){return t.loadsAllData()?new ah(t.getIndex()):t.hasLimit()?new VT(t):new Ai(t)}function tm(t){const e={};if(t.isDefault())return e;let n;if(t.index_===se?n="$priority":t.index_===BT?n="$value":t.index_===Zr?n="$key":(S(t.index_ instanceof $T,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=me(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=me(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+me(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=me(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+me(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function nm(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==se&&(e.i=t.index_.toString()),e}/**
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
 */class Pa extends Oy{constructor(e,n,r,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.log_=Ji("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(S(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,s){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=Pa.getListenId_(e,r),a={};this.listens_[o]=a;const l=tm(e._queryParams);this.restRequest_(i+".json",l,(c,d)=>{let u=d;if(c===404&&(u=null,c=null),c===null&&this.onDataUpdate_(i,u,!1,r),ls(this.listens_,o)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",s(f,null)}})}unlisten(e,n){const r=Pa.getListenId_(e,n);delete this.listens_[r]}get(e){const n=tm(e._queryParams),r=e._path.toString(),s=new ul;return this.restRequest_(r+".json",n,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(r,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,i])=>{s&&s.accessToken&&(n.auth=s.accessToken),i&&i.token&&(n.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ws(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Ni(a.responseText)}catch{Xe("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&Xe("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class GT{constructor(){this.rootNode_=P.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Oa(){return{value:null,children:new Map}}function Vy(t,e,n){if(F(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=M(e);t.children.has(r)||t.children.set(r,Oa());const s=t.children.get(r);e=q(e),Vy(s,e,n)}}function Pu(t,e,n){t.value!==null?n(e,t.value):KT(t,(r,s)=>{const i=new G(e.toString()+"/"+r);Pu(s,i,n)})}function KT(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class qT{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Je(this.last_,(r,s)=>{n[r]=n[r]-s}),this.last_=e,n}}/**
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
 */const rm=10*1e3,QT=30*1e3,YT=5*60*1e3;class XT{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new qT(e);const r=rm+(QT-rm)*Math.random();ni(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Je(e,(s,i)=>{i>0&&ln(this.statsToReport_,s)&&(n[s]=i,r=!0)}),r&&this.server_.reportStats(n),ni(this.reportStats_.bind(this),Math.floor(Math.random()*2*YT))}}/**
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
 */var wt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(wt||(wt={}));function Hy(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function ch(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function uh(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Aa{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=wt.ACK_USER_WRITE,this.source=Hy()}operationForChild(e){if(F(this.path)){if(this.affectedTree.value!=null)return S(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new G(e));return new Aa(z(),n,this.revert)}}else return S(M(this.path)===e,"operationForChild called for unrelated child."),new Aa(q(this.path),this.affectedTree,this.revert)}}/**
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
 */class Li{constructor(e,n){this.source=e,this.path=n,this.type=wt.LISTEN_COMPLETE}operationForChild(e){return F(this.path)?new Li(this.source,z()):new Li(this.source,q(this.path))}}/**
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
 */class wr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=wt.OVERWRITE}operationForChild(e){return F(this.path)?new wr(this.source,z(),this.snap.getImmediateChild(e)):new wr(this.source,q(this.path),this.snap)}}/**
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
 */class Di{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=wt.MERGE}operationForChild(e){if(F(this.path)){const n=this.children.subtree(new G(e));return n.isEmpty()?null:n.value?new wr(this.source,z(),n.value):new Di(this.source,z(),n)}else return S(M(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Di(this.source,q(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Bn{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(F(e))return this.isFullyInitialized()&&!this.filtered_;const n=M(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class JT{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function ZT(t,e,n,r){const s=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(WT(o.childName,o.snapshotNode))}),Ms(t,s,"child_removed",e,r,n),Ms(t,s,"child_added",e,r,n),Ms(t,s,"child_moved",i,r,n),Ms(t,s,"child_changed",e,r,n),Ms(t,s,"value",e,r,n),s}function Ms(t,e,n,r,s,i){const o=r.filter(a=>a.type===n);o.sort((a,l)=>tb(t,a,l)),o.forEach(a=>{const l=eb(t,a,i);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function eb(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function tb(t,e,n){if(e.childName==null||n.childName==null)throw ys("Should only compare child_ events.");const r=new j(e.childName,e.snapshotNode),s=new j(n.childName,n.snapshotNode);return t.index_.compare(r,s)}/**
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
 */function _l(t,e){return{eventCache:t,serverCache:e}}function ri(t,e,n,r){return _l(new Bn(e,n,r),t.serverCache)}function Gy(t,e,n,r){return _l(t.eventCache,new Bn(e,n,r))}function La(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function xr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let mc;const nb=()=>(mc||(mc=new Ke(zN)),mc);class X{constructor(e,n=nb()){this.value=e,this.children=n}static fromObject(e){let n=new X(null);return Je(e,(r,s)=>{n=n.set(new G(r),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:z(),value:this.value};if(F(e))return null;{const r=M(e),s=this.children.get(r);if(s!==null){const i=s.findRootMostMatchingPathAndValue(q(e),n);return i!=null?{path:ge(new G(r),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(F(e))return this;{const n=M(e),r=this.children.get(n);return r!==null?r.subtree(q(e)):new X(null)}}set(e,n){if(F(e))return new X(n,this.children);{const r=M(e),i=(this.children.get(r)||new X(null)).set(q(e),n),o=this.children.insert(r,i);return new X(this.value,o)}}remove(e){if(F(e))return this.children.isEmpty()?new X(null):new X(null,this.children);{const n=M(e),r=this.children.get(n);if(r){const s=r.remove(q(e));let i;return s.isEmpty()?i=this.children.remove(n):i=this.children.insert(n,s),this.value===null&&i.isEmpty()?new X(null):new X(this.value,i)}else return this}}get(e){if(F(e))return this.value;{const n=M(e),r=this.children.get(n);return r?r.get(q(e)):null}}setTree(e,n){if(F(e))return n;{const r=M(e),i=(this.children.get(r)||new X(null)).setTree(q(e),n);let o;return i.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,i),new X(this.value,o)}}fold(e){return this.fold_(z(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((s,i)=>{r[s]=i.fold_(ge(e,s),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,z(),n)}findOnPath_(e,n,r){const s=this.value?r(n,this.value):!1;if(s)return s;if(F(e))return null;{const i=M(e),o=this.children.get(i);return o?o.findOnPath_(q(e),ge(n,i),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,z(),n)}foreachOnPath_(e,n,r){if(F(e))return this;{this.value&&r(n,this.value);const s=M(e),i=this.children.get(s);return i?i.foreachOnPath_(q(e),ge(n,s),r):new X(null)}}foreach(e){this.foreach_(z(),e)}foreach_(e,n){this.children.inorderTraversal((r,s)=>{s.foreach_(ge(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class kt{constructor(e){this.writeTree_=e}static empty(){return new kt(new X(null))}}function si(t,e,n){if(F(e))return new kt(new X(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const s=r.path;let i=r.value;const o=$e(s,e);return i=i.updateChild(o,n),new kt(t.writeTree_.set(s,i))}else{const s=new X(n),i=t.writeTree_.setTree(e,s);return new kt(i)}}}function sm(t,e,n){let r=t;return Je(n,(s,i)=>{r=si(r,ge(e,s),i)}),r}function im(t,e){if(F(e))return kt.empty();{const n=t.writeTree_.setTree(e,new X(null));return new kt(n)}}function Ou(t,e){return Ir(t,e)!=null}function Ir(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild($e(n.path,e)):null}function om(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(se,(r,s)=>{e.push(new j(r,s))}):t.writeTree_.children.inorderTraversal((r,s)=>{s.value!=null&&e.push(new j(r,s.value))}),e}function Mn(t,e){if(F(e))return t;{const n=Ir(t,e);return n!=null?new kt(new X(n)):new kt(t.writeTree_.subtree(e))}}function Au(t){return t.writeTree_.isEmpty()}function hs(t,e){return Ky(z(),t.writeTree_,e)}function Ky(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((s,i)=>{s===".priority"?(S(i.value!==null,"Priority writes must always be leaf nodes"),r=i.value):n=Ky(ge(t,s),i,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(ge(t,".priority"),r)),n}}/**
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
 */function vl(t,e){return Xy(e,t)}function rb(t,e,n,r,s){S(r>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:s}),s&&(t.visibleWrites=si(t.visibleWrites,e,n)),t.lastWriteId=r}function sb(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function ib(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);S(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let s=r.visible,i=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&ob(a,r.path)?s=!1:yt(r.path,a.path)&&(i=!0)),o--}if(s){if(i)return ab(t),!0;if(r.snap)t.visibleWrites=im(t.visibleWrites,r.path);else{const a=r.children;Je(a,l=>{t.visibleWrites=im(t.visibleWrites,ge(r.path,l))})}return!0}else return!1}function ob(t,e){if(t.snap)return yt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&yt(ge(t.path,n),e))return!0;return!1}function ab(t){t.visibleWrites=qy(t.allWrites,lb,z()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function lb(t){return t.visible}function qy(t,e,n){let r=kt.empty();for(let s=0;s<t.length;++s){const i=t[s];if(e(i)){const o=i.path;let a;if(i.snap)yt(n,o)?(a=$e(n,o),r=si(r,a,i.snap)):yt(o,n)&&(a=$e(o,n),r=si(r,z(),i.snap.getChild(a)));else if(i.children){if(yt(n,o))a=$e(n,o),r=sm(r,a,i.children);else if(yt(o,n))if(a=$e(o,n),F(a))r=sm(r,z(),i.children);else{const l=ls(i.children,M(a));if(l){const c=l.getChild(q(a));r=si(r,z(),c)}}}else throw ys("WriteRecord should have .snap or .children")}}return r}function Qy(t,e,n,r,s){if(!r&&!s){const i=Ir(t.visibleWrites,e);if(i!=null)return i;{const o=Mn(t.visibleWrites,e);if(Au(o))return n;if(n==null&&!Ou(o,z()))return null;{const a=n||P.EMPTY_NODE;return hs(o,a)}}}else{const i=Mn(t.visibleWrites,e);if(!s&&Au(i))return n;if(!s&&n==null&&!Ou(i,z()))return null;{const o=function(c){return(c.visible||s)&&(!r||!~r.indexOf(c.writeId))&&(yt(c.path,e)||yt(e,c.path))},a=qy(t.allWrites,o,e),l=n||P.EMPTY_NODE;return hs(a,l)}}}function cb(t,e,n){let r=P.EMPTY_NODE;const s=Ir(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(se,(i,o)=>{r=r.updateImmediateChild(i,o)}),r;if(n){const i=Mn(t.visibleWrites,e);return n.forEachChild(se,(o,a)=>{const l=hs(Mn(i,new G(o)),a);r=r.updateImmediateChild(o,l)}),om(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const i=Mn(t.visibleWrites,e);return om(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function ub(t,e,n,r,s){S(r||s,"Either existingEventSnap or existingServerSnap must exist");const i=ge(e,n);if(Ou(t.visibleWrites,i))return null;{const o=Mn(t.visibleWrites,i);return Au(o)?s.getChild(n):hs(o,s.getChild(n))}}function db(t,e,n,r){const s=ge(e,n),i=Ir(t.visibleWrites,s);if(i!=null)return i;if(r.isCompleteForChild(n)){const o=Mn(t.visibleWrites,s);return hs(o,r.getNode().getImmediateChild(n))}else return null}function hb(t,e){return Ir(t.visibleWrites,e)}function fb(t,e,n,r,s,i,o){let a;const l=Mn(t.visibleWrites,e),c=Ir(l,z());if(c!=null)a=c;else if(n!=null)a=hs(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],u=o.getCompare(),f=i?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let p=f.getNext();for(;p&&d.length<s;)u(p,r)!==0&&d.push(p),p=f.getNext();return d}else return[]}function pb(){return{visibleWrites:kt.empty(),allWrites:[],lastWriteId:-1}}function Da(t,e,n,r){return Qy(t.writeTree,t.treePath,e,n,r)}function dh(t,e){return cb(t.writeTree,t.treePath,e)}function am(t,e,n,r){return ub(t.writeTree,t.treePath,e,n,r)}function Ma(t,e){return hb(t.writeTree,ge(t.treePath,e))}function mb(t,e,n,r,s,i){return fb(t.writeTree,t.treePath,e,n,r,s,i)}function hh(t,e,n){return db(t.writeTree,t.treePath,e,n)}function Yy(t,e){return Xy(ge(t.treePath,e),t.writeTree)}function Xy(t,e){return{treePath:t,writeTree:e}}/**
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
 */class gb{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;S(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),S(r!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const i=s.type;if(n==="child_added"&&i==="child_removed")this.changeMap.set(r,Oi(r,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&i==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&i==="child_changed")this.changeMap.set(r,Pi(r,s.oldSnap));else if(n==="child_changed"&&i==="child_added")this.changeMap.set(r,ds(r,e.snapshotNode));else if(n==="child_changed"&&i==="child_changed")this.changeMap.set(r,Oi(r,e.snapshotNode,s.oldSnap));else throw ys("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class _b{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const Jy=new _b;class fh{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Bn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return hh(this.writes_,e,r)}}getChildAfterChild(e,n,r){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:xr(this.viewCache_),i=mb(this.writes_,s,n,1,r,e);return i.length===0?null:i[0]}}/**
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
 */function vb(t){return{filter:t}}function yb(t,e){S(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),S(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function wb(t,e,n,r,s){const i=new gb;let o,a;if(n.type===wt.OVERWRITE){const c=n;c.source.fromUser?o=Lu(t,e,c.path,c.snap,r,s,i):(S(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!F(c.path),o=ja(t,e,c.path,c.snap,r,s,a,i))}else if(n.type===wt.MERGE){const c=n;c.source.fromUser?o=Eb(t,e,c.path,c.children,r,s,i):(S(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Du(t,e,c.path,c.children,r,s,a,i))}else if(n.type===wt.ACK_USER_WRITE){const c=n;c.revert?o=Sb(t,e,c.path,r,s,i):o=kb(t,e,c.path,c.affectedTree,r,s,i)}else if(n.type===wt.LISTEN_COMPLETE)o=Cb(t,e,n.path,r,i);else throw ys("Unknown operation type: "+n.type);const l=i.getChanges();return xb(e,o,l),{viewCache:o,changes:l}}function xb(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),i=La(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!r.getNode().equals(i)||!r.getNode().getPriority().equals(i.getPriority()))&&n.push(Wy(La(e)))}}function Zy(t,e,n,r,s,i){const o=e.eventCache;if(Ma(r,n)!=null)return e;{let a,l;if(F(n))if(S(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=xr(e),d=c instanceof P?c:P.EMPTY_NODE,u=dh(r,d);a=t.filter.updateFullNode(e.eventCache.getNode(),u,i)}else{const c=Da(r,xr(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,i)}else{const c=M(n);if(c===".priority"){S(zn(n)===1,"Can't have a priority with additional path components");const d=o.getNode();l=e.serverCache.getNode();const u=am(r,n,d,l);u!=null?a=t.filter.updatePriority(d,u):a=o.getNode()}else{const d=q(n);let u;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const f=am(r,n,o.getNode(),l);f!=null?u=o.getNode().getImmediateChild(c).updateChild(d,f):u=o.getNode().getImmediateChild(c)}else u=hh(r,c,e.serverCache);u!=null?a=t.filter.updateChild(o.getNode(),c,u,d,s,i):a=o.getNode()}}return ri(e,a,o.isFullyInitialized()||F(n),t.filter.filtersNodes())}}function ja(t,e,n,r,s,i,o,a){const l=e.serverCache;let c;const d=o?t.filter:t.filter.getIndexedFilter();if(F(n))c=d.updateFullNode(l.getNode(),r,null);else if(d.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(n,r);c=d.updateFullNode(l.getNode(),p,null)}else{const p=M(n);if(!l.isCompleteForPath(n)&&zn(n)>1)return e;const g=q(n),w=l.getNode().getImmediateChild(p).updateChild(g,r);p===".priority"?c=d.updatePriority(l.getNode(),w):c=d.updateChild(l.getNode(),p,w,g,Jy,null)}const u=Gy(e,c,l.isFullyInitialized()||F(n),d.filtersNodes()),f=new fh(s,u,i);return Zy(t,u,n,s,f,a)}function Lu(t,e,n,r,s,i,o){const a=e.eventCache;let l,c;const d=new fh(s,e,i);if(F(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=ri(e,c,!0,t.filter.filtersNodes());else{const u=M(n);if(u===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),l=ri(e,c,a.isFullyInitialized(),a.isFiltered());else{const f=q(n),p=a.getNode().getImmediateChild(u);let g;if(F(f))g=r;else{const y=d.getCompleteChild(u);y!=null?Ly(f)===".priority"&&y.getChild(My(f)).isEmpty()?g=y:g=y.updateChild(f,r):g=P.EMPTY_NODE}if(p.equals(g))l=e;else{const y=t.filter.updateChild(a.getNode(),u,g,f,d,o);l=ri(e,y,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function lm(t,e){return t.eventCache.isCompleteForChild(e)}function Eb(t,e,n,r,s,i,o){let a=e;return r.foreach((l,c)=>{const d=ge(n,l);lm(e,M(d))&&(a=Lu(t,a,d,c,s,i,o))}),r.foreach((l,c)=>{const d=ge(n,l);lm(e,M(d))||(a=Lu(t,a,d,c,s,i,o))}),a}function cm(t,e,n){return n.foreach((r,s)=>{e=e.updateChild(r,s)}),e}function Du(t,e,n,r,s,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;F(n)?c=r:c=new X(null).setTree(n,r);const d=e.serverCache.getNode();return c.children.inorderTraversal((u,f)=>{if(d.hasChild(u)){const p=e.serverCache.getNode().getImmediateChild(u),g=cm(t,p,f);l=ja(t,l,new G(u),g,s,i,o,a)}}),c.children.inorderTraversal((u,f)=>{const p=!e.serverCache.isCompleteForChild(u)&&f.value===null;if(!d.hasChild(u)&&!p){const g=e.serverCache.getNode().getImmediateChild(u),y=cm(t,g,f);l=ja(t,l,new G(u),y,s,i,o,a)}}),l}function kb(t,e,n,r,s,i,o){if(Ma(s,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(F(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return ja(t,e,n,l.getNode().getChild(n),s,i,a,o);if(F(n)){let c=new X(null);return l.getNode().forEachChild(Zr,(d,u)=>{c=c.set(new G(d),u)}),Du(t,e,n,c,s,i,a,o)}else return e}else{let c=new X(null);return r.foreach((d,u)=>{const f=ge(n,d);l.isCompleteForPath(f)&&(c=c.set(d,l.getNode().getChild(f)))}),Du(t,e,n,c,s,i,a,o)}}function Cb(t,e,n,r,s){const i=e.serverCache,o=Gy(e,i.getNode(),i.isFullyInitialized()||F(n),i.isFiltered());return Zy(t,o,n,r,Jy,s)}function Sb(t,e,n,r,s,i){let o;if(Ma(r,n)!=null)return e;{const a=new fh(r,e,s),l=e.eventCache.getNode();let c;if(F(n)||M(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=Da(r,xr(e));else{const u=e.serverCache.getNode();S(u instanceof P,"serverChildren would be complete if leaf node"),d=dh(r,u)}d=d,c=t.filter.updateFullNode(l,d,i)}else{const d=M(n);let u=hh(r,d,e.serverCache);u==null&&e.serverCache.isCompleteForChild(d)&&(u=l.getImmediateChild(d)),u!=null?c=t.filter.updateChild(l,d,u,q(n),a,i):e.eventCache.getNode().hasChild(d)?c=t.filter.updateChild(l,d,P.EMPTY_NODE,q(n),a,i):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Da(r,xr(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,i)))}return o=e.serverCache.isFullyInitialized()||Ma(r,z())!=null,ri(e,c,o,t.filter.filtersNodes())}}/**
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
 */class Ib{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,s=new ah(r.getIndex()),i=HT(r);this.processor_=vb(i);const o=n.serverCache,a=n.eventCache,l=s.updateFullNode(P.EMPTY_NODE,o.getNode(),null),c=i.updateFullNode(P.EMPTY_NODE,a.getNode(),null),d=new Bn(l,o.isFullyInitialized(),s.filtersNodes()),u=new Bn(c,a.isFullyInitialized(),i.filtersNodes());this.viewCache_=_l(u,d),this.eventGenerator_=new JT(this.query_)}get query(){return this.query_}}function Nb(t){return t.viewCache_.serverCache.getNode()}function Tb(t){return La(t.viewCache_)}function bb(t,e){const n=xr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!F(e)&&!n.getImmediateChild(M(e)).isEmpty())?n.getChild(e):null}function um(t){return t.eventRegistrations_.length===0}function Rb(t,e){t.eventRegistrations_.push(e)}function dm(t,e,n){const r=[];if(n){S(e==null,"A cancel should cancel all event registrations.");const s=t.query._path;t.eventRegistrations_.forEach(i=>{const o=i.createCancelEvent(n,s);o&&r.push(o)})}if(e){let s=[];for(let i=0;i<t.eventRegistrations_.length;++i){const o=t.eventRegistrations_[i];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(t.eventRegistrations_.slice(i+1));break}}t.eventRegistrations_=s}else t.eventRegistrations_=[];return r}function hm(t,e,n,r){e.type===wt.MERGE&&e.source.queryId!==null&&(S(xr(t.viewCache_),"We should always have a full cache before handling merges"),S(La(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,i=wb(t.processor_,s,e,n,r);return yb(t.processor_,i.viewCache),S(i.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=i.viewCache,e0(t,i.changes,i.viewCache.eventCache.getNode(),null)}function Pb(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(se,(i,o)=>{r.push(ds(i,o))}),n.isFullyInitialized()&&r.push(Wy(n.getNode())),e0(t,r,n.getNode(),e)}function e0(t,e,n,r){const s=r?[r]:t.eventRegistrations_;return ZT(t.eventGenerator_,e,n,s)}/**
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
 */let Fa;class t0{constructor(){this.views=new Map}}function Ob(t){S(!Fa,"__referenceConstructor has already been defined"),Fa=t}function Ab(){return S(Fa,"Reference.ts has not been loaded"),Fa}function Lb(t){return t.views.size===0}function ph(t,e,n,r){const s=e.source.queryId;if(s!==null){const i=t.views.get(s);return S(i!=null,"SyncTree gave us an op for an invalid query."),hm(i,e,n,r)}else{let i=[];for(const o of t.views.values())i=i.concat(hm(o,e,n,r));return i}}function n0(t,e,n,r,s){const i=e._queryIdentifier,o=t.views.get(i);if(!o){let a=Da(n,s?r:null),l=!1;a?l=!0:r instanceof P?(a=dh(n,r),l=!1):(a=P.EMPTY_NODE,l=!1);const c=_l(new Bn(a,l,!1),new Bn(r,s,!1));return new Ib(e,c)}return o}function Db(t,e,n,r,s,i){const o=n0(t,e,r,s,i);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),Rb(o,n),Pb(o,n)}function Mb(t,e,n,r){const s=e._queryIdentifier,i=[];let o=[];const a=Wn(t);if(s==="default")for(const[l,c]of t.views.entries())o=o.concat(dm(c,n,r)),um(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||i.push(c.query));else{const l=t.views.get(s);l&&(o=o.concat(dm(l,n,r)),um(l)&&(t.views.delete(s),l.query._queryParams.loadsAllData()||i.push(l.query)))}return a&&!Wn(t)&&i.push(new(Ab())(e._repo,e._path)),{removed:i,events:o}}function r0(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function jn(t,e){let n=null;for(const r of t.views.values())n=n||bb(r,e);return n}function s0(t,e){if(e._queryParams.loadsAllData())return yl(t);{const r=e._queryIdentifier;return t.views.get(r)}}function i0(t,e){return s0(t,e)!=null}function Wn(t){return yl(t)!=null}function yl(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Ua;function jb(t){S(!Ua,"__referenceConstructor has already been defined"),Ua=t}function Fb(){return S(Ua,"Reference.ts has not been loaded"),Ua}let Ub=1;class fm{constructor(e){this.listenProvider_=e,this.syncPointTree_=new X(null),this.pendingWriteTree_=pb(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function o0(t,e,n,r,s){return rb(t.pendingWriteTree_,e,n,r,s),s?to(t,new wr(Hy(),e,n)):[]}function ar(t,e,n=!1){const r=sb(t.pendingWriteTree_,e);if(ib(t.pendingWriteTree_,e)){let i=new X(null);return r.snap!=null?i=i.set(z(),!0):Je(r.children,o=>{i=i.set(new G(o),!0)}),to(t,new Aa(r.path,i,n))}else return[]}function eo(t,e,n){return to(t,new wr(ch(),e,n))}function $b(t,e,n){const r=X.fromObject(n);return to(t,new Di(ch(),e,r))}function zb(t,e){return to(t,new Li(ch(),e))}function Bb(t,e,n){const r=gh(t,n);if(r){const s=_h(r),i=s.path,o=s.queryId,a=$e(i,e),l=new Li(uh(o),a);return vh(t,i,l)}else return[]}function $a(t,e,n,r,s=!1){const i=e._path,o=t.syncPointTree_.get(i);let a=[];if(o&&(e._queryIdentifier==="default"||i0(o,e))){const l=Mb(o,e,n,r);Lb(o)&&(t.syncPointTree_=t.syncPointTree_.remove(i));const c=l.removed;if(a=l.events,!s){const d=c.findIndex(f=>f._queryParams.loadsAllData())!==-1,u=t.syncPointTree_.findOnPath(i,(f,p)=>Wn(p));if(d&&!u){const f=t.syncPointTree_.subtree(i);if(!f.isEmpty()){const p=Hb(f);for(let g=0;g<p.length;++g){const y=p[g],w=y.query,v=u0(t,y);t.listenProvider_.startListening(ii(w),Mi(t,w),v.hashFn,v.onComplete)}}}!u&&c.length>0&&!r&&(d?t.listenProvider_.stopListening(ii(e),null):c.forEach(f=>{const p=t.queryToTagMap.get(wl(f));t.listenProvider_.stopListening(ii(f),p)}))}Gb(t,c)}return a}function a0(t,e,n,r){const s=gh(t,r);if(s!=null){const i=_h(s),o=i.path,a=i.queryId,l=$e(o,e),c=new wr(uh(a),l,n);return vh(t,o,c)}else return[]}function Wb(t,e,n,r){const s=gh(t,r);if(s){const i=_h(s),o=i.path,a=i.queryId,l=$e(o,e),c=X.fromObject(n),d=new Di(uh(a),l,c);return vh(t,o,d)}else return[]}function Mu(t,e,n,r=!1){const s=e._path;let i=null,o=!1;t.syncPointTree_.foreachOnPath(s,(f,p)=>{const g=$e(f,s);i=i||jn(p,g),o=o||Wn(p)});let a=t.syncPointTree_.get(s);a?(o=o||Wn(a),i=i||jn(a,z())):(a=new t0,t.syncPointTree_=t.syncPointTree_.set(s,a));let l;i!=null?l=!0:(l=!1,i=P.EMPTY_NODE,t.syncPointTree_.subtree(s).foreachChild((p,g)=>{const y=jn(g,z());y&&(i=i.updateImmediateChild(p,y))}));const c=i0(a,e);if(!c&&!e._queryParams.loadsAllData()){const f=wl(e);S(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const p=Kb();t.queryToTagMap.set(f,p),t.tagToQueryMap.set(p,f)}const d=vl(t.pendingWriteTree_,s);let u=Db(a,e,n,d,i,l);if(!c&&!o&&!r){const f=s0(a,e);u=u.concat(qb(t,e,f))}return u}function mh(t,e,n){const s=t.pendingWriteTree_,i=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=$e(o,e),c=jn(a,l);if(c)return c});return Qy(s,e,i,n,!0)}function Vb(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(c,d)=>{const u=$e(c,n);r=r||jn(d,u)});let s=t.syncPointTree_.get(n);s?r=r||jn(s,z()):(s=new t0,t.syncPointTree_=t.syncPointTree_.set(n,s));const i=r!=null,o=i?new Bn(r,!0,!1):null,a=vl(t.pendingWriteTree_,e._path),l=n0(s,e,a,i?o.getNode():P.EMPTY_NODE,i);return Tb(l)}function to(t,e){return l0(e,t.syncPointTree_,null,vl(t.pendingWriteTree_,z()))}function l0(t,e,n,r){if(F(t.path))return c0(t,e,n,r);{const s=e.get(z());n==null&&s!=null&&(n=jn(s,z()));let i=[];const o=M(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,d=Yy(r,o);i=i.concat(l0(a,l,c,d))}return s&&(i=i.concat(ph(s,t,r,n))),i}}function c0(t,e,n,r){const s=e.get(z());n==null&&s!=null&&(n=jn(s,z()));let i=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=Yy(r,o),d=t.operationForChild(o);d&&(i=i.concat(c0(d,a,l,c)))}),s&&(i=i.concat(ph(s,t,r,n))),i}function u0(t,e){const n=e.query,r=Mi(t,n);return{hashFn:()=>(Nb(e)||P.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return r?Bb(t,n._path,r):zb(t,n._path);{const i=VN(s,n);return $a(t,n,null,i)}}}}function Mi(t,e){const n=wl(e);return t.queryToTagMap.get(n)}function wl(t){return t._path.toString()+"$"+t._queryIdentifier}function gh(t,e){return t.tagToQueryMap.get(e)}function _h(t){const e=t.indexOf("$");return S(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new G(t.substr(0,e))}}function vh(t,e,n){const r=t.syncPointTree_.get(e);S(r,"Missing sync point for query tag that we're tracking");const s=vl(t.pendingWriteTree_,e);return ph(r,n,s,null)}function Hb(t){return t.fold((e,n,r)=>{if(n&&Wn(n))return[yl(n)];{let s=[];return n&&(s=r0(n)),Je(r,(i,o)=>{s=s.concat(o)}),s}})}function ii(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Fb())(t._repo,t._path):t}function Gb(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const s=wl(r),i=t.queryToTagMap.get(s);t.queryToTagMap.delete(s),t.tagToQueryMap.delete(i)}}}function Kb(){return Ub++}function qb(t,e,n){const r=e._path,s=Mi(t,e),i=u0(t,n),o=t.listenProvider_.startListening(ii(e),s,i.hashFn,i.onComplete),a=t.syncPointTree_.subtree(r);if(s)S(!Wn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,d,u)=>{if(!F(c)&&d&&Wn(d))return[yl(d).query];{let f=[];return d&&(f=f.concat(r0(d).map(p=>p.query))),Je(u,(p,g)=>{f=f.concat(g)}),f}});for(let c=0;c<l.length;++c){const d=l[c];t.listenProvider_.stopListening(ii(d),Mi(t,d))}}return o}/**
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
 */class yh{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new yh(n)}node(){return this.node_}}class wh{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ge(this.path_,e);return new wh(this.syncTree_,n)}node(){return mh(this.syncTree_,this.path_)}}const Qb=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},pm=function(t,e,n){if(!t||typeof t!="object")return t;if(S(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return Yb(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Xb(t[".sv"],e);S(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},Yb=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:S(!1,"Unexpected server value: "+t)}},Xb=function(t,e,n){t.hasOwnProperty("increment")||S(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&S(!1,"Unexpected increment value: "+r);const s=e.node();if(S(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const o=s.getValue();return typeof o!="number"?r:o+r},Jb=function(t,e,n,r){return xh(e,new wh(n,t),r)},d0=function(t,e,n){return xh(t,new yh(e),n)};function xh(t,e,n){const r=t.getPriority().val(),s=pm(r,e.getImmediateChild(".priority"),n);let i;if(t.isLeafNode()){const o=t,a=pm(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new we(a,Ce(s)):t}else{const o=t;return i=o,s!==o.getPriority().val()&&(i=i.updatePriority(new we(s))),o.forEachChild(se,(a,l)=>{const c=xh(l,e.getImmediateChild(a),n);c!==l&&(i=i.updateImmediateChild(a,c))}),i}}/**
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
 */class Eh{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function kh(t,e){let n=e instanceof G?e:new G(e),r=t,s=M(n);for(;s!==null;){const i=ls(r.node.children,s)||{children:{},childCount:0};r=new Eh(s,r,i),n=q(n),s=M(n)}return r}function Cs(t){return t.node.value}function h0(t,e){t.node.value=e,ju(t)}function f0(t){return t.node.childCount>0}function Zb(t){return Cs(t)===void 0&&!f0(t)}function xl(t,e){Je(t.node.children,(n,r)=>{e(new Eh(n,t,r))})}function p0(t,e,n,r){n&&e(t),xl(t,s=>{p0(s,e,!0)})}function eR(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function no(t){return new G(t.parent===null?t.name:no(t.parent)+"/"+t.name)}function ju(t){t.parent!==null&&tR(t.parent,t.name,t)}function tR(t,e,n){const r=Zb(n),s=ln(t.node.children,e);r&&s?(delete t.node.children[e],t.node.childCount--,ju(t)):!r&&!s&&(t.node.children[e]=n.node,t.node.childCount++,ju(t))}/**
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
 */const nR=/[\[\].#$\/\u0000-\u001F\u007F]/,rR=/[\[\].#$\u0000-\u001F\u007F]/,gc=10*1024*1024,m0=function(t){return typeof t=="string"&&t.length!==0&&!nR.test(t)},g0=function(t){return typeof t=="string"&&t.length!==0&&!rR.test(t)},sR=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),g0(t)},_0=function(t,e,n,r){r&&e===void 0||Ch(zd(t,"value"),e,n)},Ch=function(t,e,n){const r=n instanceof G?new kT(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+nr(r));if(typeof e=="function")throw new Error(t+"contains a function "+nr(r)+" with contents = "+e.toString());if(fy(e))throw new Error(t+"contains "+e.toString()+" "+nr(r));if(typeof e=="string"&&e.length>gc/3&&dl(e)>gc)throw new Error(t+"contains a string greater than "+gc+" utf8 bytes "+nr(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,i=!1;if(Je(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!m0(o)))throw new Error(t+" contains an invalid key ("+o+") "+nr(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);CT(r,o),Ch(t,a,r),ST(r)}),s&&i)throw new Error(t+' contains ".value" child '+nr(r)+" in addition to actual children.")}},v0=function(t,e,n,r){if(!g0(n))throw new Error(zd(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},iR=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),v0(t,e,n)},y0=function(t,e){if(M(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},oR=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!m0(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!sR(n))throw new Error(zd(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class aR{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Sh(t,e){let n=null;for(let r=0;r<e.length;r++){const s=e[r],i=s.getPath();n!==null&&!sh(i,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:i}),n.events.push(s)}n&&t.eventLists_.push(n)}function w0(t,e,n){Sh(t,n),x0(t,r=>sh(r,e))}function Ft(t,e,n){Sh(t,n),x0(t,r=>yt(r,e)||yt(e,r))}function x0(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const s=t.eventLists_[r];if(s){const i=s.path;e(i)?(lR(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function lR(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();ti&&De("event: "+n.toString()),ks(r)}}}/**
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
 */const cR="repo_interrupt",uR=25;class dR{constructor(e,n,r,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new aR,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Oa(),this.transactionQueueTree_=new Eh,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function hR(t,e,n){if(t.stats_=nh(t.repoInfo_),t.forceRestClient_||qN())t.server_=new Pa(t.repoInfo_,(r,s,i,o)=>{mm(t,r,s,i,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>gm(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{me(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Qt(t.repoInfo_,e,(r,s,i,o)=>{mm(t,r,s,i,o)},r=>{gm(t,r)},r=>{fR(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=ZN(t.repoInfo_,()=>new XT(t.stats_,t.server_)),t.infoData_=new GT,t.infoSyncTree_=new fm({startListening:(r,s,i,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=eo(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Nh(t,"connected",!1),t.serverSyncTree_=new fm({startListening:(r,s,i,o)=>(t.server_.listen(r,i,s,(a,l)=>{const c=o(a,l);Ft(t.eventQueue_,r._path,c)}),[]),stopListening:(r,s)=>{t.server_.unlisten(r,s)}})}function E0(t){const n=t.infoData_.getNode(new G(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Ih(t){return Qb({timestamp:E0(t)})}function mm(t,e,n,r,s){t.dataUpdateCount++;const i=new G(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(r){const l=wa(n,c=>Ce(c));o=Wb(t.serverSyncTree_,i,l,s)}else{const l=Ce(n);o=a0(t.serverSyncTree_,i,l,s)}else if(r){const l=wa(n,c=>Ce(c));o=$b(t.serverSyncTree_,i,l)}else{const l=Ce(n);o=eo(t.serverSyncTree_,i,l)}let a=i;o.length>0&&(a=kl(t,i)),Ft(t.eventQueue_,a,o)}function gm(t,e){Nh(t,"connected",e),e===!1&&gR(t)}function fR(t,e){Je(e,(n,r)=>{Nh(t,n,r)})}function Nh(t,e,n){const r=new G("/.info/"+e),s=Ce(n);t.infoData_.updateSnapshot(r,s);const i=eo(t.infoSyncTree_,r,s);Ft(t.eventQueue_,r,i)}function k0(t){return t.nextWriteId_++}function pR(t,e,n){const r=Vb(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(s=>{const i=Ce(s).withIndex(e._queryParams.getIndex());Mu(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=eo(t.serverSyncTree_,e._path,i);else{const a=Mi(t.serverSyncTree_,e);o=a0(t.serverSyncTree_,e._path,i,a)}return Ft(t.eventQueue_,e._path,o),$a(t.serverSyncTree_,e,n,null,!0),i},s=>(El(t,"get for query "+me(e)+" failed: "+s),Promise.reject(new Error(s))))}function mR(t,e,n,r,s){El(t,"set",{path:e.toString(),value:n,priority:r});const i=Ih(t),o=Ce(n,r),a=mh(t.serverSyncTree_,e),l=d0(o,a,i),c=k0(t),d=o0(t.serverSyncTree_,e,l,c,!0);Sh(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(f,p)=>{const g=f==="ok";g||Xe("set at "+e+" failed: "+f);const y=ar(t.serverSyncTree_,c,!g);Ft(t.eventQueue_,e,y),yR(t,s,f,p)});const u=T0(t,e);kl(t,u),Ft(t.eventQueue_,u,[])}function gR(t){El(t,"onDisconnectEvents");const e=Ih(t),n=Oa();Pu(t.onDisconnect_,z(),(s,i)=>{const o=Jb(s,i,t.serverSyncTree_,e);Vy(n,s,o)});let r=[];Pu(n,z(),(s,i)=>{r=r.concat(eo(t.serverSyncTree_,s,i));const o=T0(t,s);kl(t,o)}),t.onDisconnect_=Oa(),Ft(t.eventQueue_,z(),r)}function _R(t,e,n){let r;M(e._path)===".info"?r=Mu(t.infoSyncTree_,e,n):r=Mu(t.serverSyncTree_,e,n),w0(t.eventQueue_,e._path,r)}function _m(t,e,n){let r;M(e._path)===".info"?r=$a(t.infoSyncTree_,e,n):r=$a(t.serverSyncTree_,e,n),w0(t.eventQueue_,e._path,r)}function vR(t){t.persistentConnection_&&t.persistentConnection_.interrupt(cR)}function El(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),De(n,...e)}function yR(t,e,n,r){e&&ks(()=>{if(n==="ok")e(null);else{const s=(n||"error").toUpperCase();let i=s;r&&(i+=": "+r);const o=new Error(i);o.code=s,e(o)}})}function C0(t,e,n){return mh(t.serverSyncTree_,e,n)||P.EMPTY_NODE}function Th(t,e=t.transactionQueueTree_){if(e||Cl(t,e),Cs(e)){const n=I0(t,e);S(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&wR(t,no(e),n)}else f0(e)&&xl(e,n=>{Th(t,n)})}function wR(t,e,n){const r=n.map(c=>c.currentWriteId),s=C0(t,e,r);let i=s;const o=s.hash();for(let c=0;c<n.length;c++){const d=n[c];S(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const u=$e(e,d.path);i=i.updateChild(u,d.currentOutputSnapshotRaw)}const a=i.val(!0),l=e;t.server_.put(l.toString(),a,c=>{El(t,"transaction put response",{path:l.toString(),status:c});let d=[];if(c==="ok"){const u=[];for(let f=0;f<n.length;f++)n[f].status=2,d=d.concat(ar(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&u.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Cl(t,kh(t.transactionQueueTree_,e)),Th(t,t.transactionQueueTree_),Ft(t.eventQueue_,e,d);for(let f=0;f<u.length;f++)ks(u[f])}else{if(c==="datastale")for(let u=0;u<n.length;u++)n[u].status===3?n[u].status=4:n[u].status=0;else{Xe("transaction at "+l.toString()+" failed: "+c);for(let u=0;u<n.length;u++)n[u].status=4,n[u].abortReason=c}kl(t,e)}},o)}function kl(t,e){const n=S0(t,e),r=no(n),s=I0(t,n);return xR(t,s,r),r}function xR(t,e,n){if(e.length===0)return;const r=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=$e(n,l.path);let d=!1,u;if(S(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)d=!0,u=l.abortReason,s=s.concat(ar(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=uR)d=!0,u="maxretry",s=s.concat(ar(t.serverSyncTree_,l.currentWriteId,!0));else{const f=C0(t,l.path,o);l.currentInputSnapshot=f;const p=e[a].update(f.val());if(p!==void 0){Ch("transaction failed: Data returned ",p,l.path);let g=Ce(p);typeof p=="object"&&p!=null&&ln(p,".priority")||(g=g.updatePriority(f.getPriority()));const w=l.currentWriteId,v=Ih(t),m=d0(g,f,v);l.currentOutputSnapshotRaw=g,l.currentOutputSnapshotResolved=m,l.currentWriteId=k0(t),o.splice(o.indexOf(w),1),s=s.concat(o0(t.serverSyncTree_,l.path,m,l.currentWriteId,l.applyLocally)),s=s.concat(ar(t.serverSyncTree_,w,!0))}else d=!0,u="nodata",s=s.concat(ar(t.serverSyncTree_,l.currentWriteId,!0))}Ft(t.eventQueue_,n,s),s=[],d&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(u==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(u),!1,null))))}Cl(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)ks(r[a]);Th(t,t.transactionQueueTree_)}function S0(t,e){let n,r=t.transactionQueueTree_;for(n=M(e);n!==null&&Cs(r)===void 0;)r=kh(r,n),e=q(e),n=M(e);return r}function I0(t,e){const n=[];return N0(t,e,n),n.sort((r,s)=>r.order-s.order),n}function N0(t,e,n){const r=Cs(e);if(r)for(let s=0;s<r.length;s++)n.push(r[s]);xl(e,s=>{N0(t,s,n)})}function Cl(t,e){const n=Cs(e);if(n){let r=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[r]=n[s],r++);n.length=r,h0(e,n.length>0?n:void 0)}xl(e,r=>{Cl(t,r)})}function T0(t,e){const n=no(S0(t,e)),r=kh(t.transactionQueueTree_,e);return eR(r,s=>{_c(t,s)}),_c(t,r),p0(r,s=>{_c(t,s)}),n}function _c(t,e){const n=Cs(e);if(n){const r=[];let s=[],i=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(S(i===o-1,"All SENT items should be at beginning of queue."),i=o,n[o].status=3,n[o].abortReason="set"):(S(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(ar(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?h0(e,void 0):n.length=i+1,Ft(t.eventQueue_,no(e),s);for(let o=0;o<r.length;o++)ks(r[o])}}/**
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
 */function ER(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let s=n[r];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function kR(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Xe(`Invalid query segment '${n}' in query '${t}'`)}return e}const vm=function(t,e){const n=CR(t),r=n.namespace;n.domain==="firebase.com"&&sn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&sn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||UN();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Sy(n.host,n.secure,r,s,e,"",r!==n.subdomain),path:new G(n.pathString)}},CR=function(t){let e="",n="",r="",s="",i="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let d=t.indexOf("/");d===-1&&(d=t.length);let u=t.indexOf("?");u===-1&&(u=t.length),e=t.substring(0,Math.min(d,u)),d<u&&(s=ER(t.substring(d,u)));const f=kR(t.substring(Math.min(t.length,u)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const p=e.slice(0,c);if(p.toLowerCase()==="localhost")n="localhost";else if(p.split(".").length<=2)n=p;else{const g=e.indexOf(".");r=e.substring(0,g).toLowerCase(),n=e.substring(g+1),i=r}"ns"in f&&(i=f.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:s,namespace:i}};/**
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
 */const ym="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",SR=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let s;const i=new Array(8);for(s=7;s>=0;s--)i[s]=ym.charAt(n%64),n=Math.floor(n/64);S(n===0,"Cannot push at time == 0");let o=i.join("");if(r){for(s=11;s>=0&&e[s]===63;s--)e[s]=0;e[s]++}else for(s=0;s<12;s++)e[s]=Math.floor(Math.random()*64);for(s=0;s<12;s++)o+=ym.charAt(e[s]);return S(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class IR{constructor(e,n,r,s){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+me(this.snapshot.exportVal())}}class NR{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class b0{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return S(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class bh{constructor(e,n,r,s){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=s}get key(){return F(this._path)?null:Ly(this._path)}get ref(){return new un(this._repo,this._path)}get _queryIdentifier(){const e=nm(this._queryParams),n=eh(e);return n==="{}"?"default":n}get _queryObject(){return nm(this._queryParams)}isEqual(e){if(e=de(e),!(e instanceof bh))return!1;const n=this._repo===e._repo,r=sh(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&r&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+ET(this._path)}}class un extends bh{constructor(e,n){super(e,n,new lh,!1)}get parent(){const e=My(this._path);return e===null?null:new un(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class ji{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new G(e),r=Fi(this.ref,e);return new ji(this._node.getChild(n),r,se)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,s)=>e(new ji(s,Fi(this.ref,r),se)))}hasChild(e){const n=new G(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function ie(t,e){return t=de(t),t._checkNotDeleted("ref"),e!==void 0?Fi(t._root,e):t._root}function Fi(t,e){return t=de(t),M(t._path)===null?iR("child","path",e):v0("child","path",e),new un(t._repo,ge(t._path,e))}function R0(t,e){t=de(t),y0("push",t._path),_0("push",e,t._path,!0);const n=E0(t._repo),r=SR(n),s=Fi(t,r),i=Fi(t,r);let o;return e!=null?o=Ui(i,e).then(()=>i):o=Promise.resolve(i),s.then=o.then.bind(o),s.catch=o.then.bind(o,void 0),s}function Ui(t,e){t=de(t),y0("set",t._path),_0("set",e,t._path,!1);const n=new ul;return mR(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function tt(t){t=de(t);const e=new b0(()=>{}),n=new Sl(e);return pR(t._repo,t,n).then(r=>new ji(r,new un(t._repo,t._path),t._queryParams.getIndex()))}class Sl{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new IR("value",this,new ji(e.snapshotNode,new un(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new NR(this,e,n):null}matches(e){return e instanceof Sl?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function TR(t,e,n,r,s){let i;if(typeof r=="object"&&(i=void 0,s=r),typeof r=="function"&&(i=r),s&&s.onlyOnce){const l=n,c=(d,u)=>{_m(t._repo,t,a),l(d,u)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new b0(n,i||void 0),a=new Sl(o);return _R(t._repo,t,a),()=>_m(t._repo,t,a)}function Rh(t,e,n,r){return TR(t,"value",e,n,r)}Ob(un);jb(un);/**
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
 */const bR="FIREBASE_DATABASE_EMULATOR_HOST",Fu={};let RR=!1;function PR(t,e,n,r){t.repoInfo_=new Sy(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function OR(t,e,n,r,s){let i=r||t.options.databaseURL;i===void 0&&(t.options.projectId||sn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),De("Using default host for project ",t.options.projectId),i=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=vm(i,s),a=o.repoInfo,l;typeof process<"u"&&Fp&&(l=Fp[bR]),l?(i=`http://${l}?ns=${a.namespace}`,o=vm(i,s),a=o.repoInfo):o.repoInfo.secure;const c=new YN(t.name,t.options,e);oR("Invalid Firebase Database URL",o),F(o.path)||sn("Database URL must point to the root of a Firebase Database (not including a child path).");const d=LR(a,t,c,new QN(t.name,n));return new DR(d,t)}function AR(t,e){const n=Fu[e];(!n||n[t.key]!==t)&&sn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),vR(t),delete n[t.key]}function LR(t,e,n,r){let s=Fu[e.name];s||(s={},Fu[e.name]=s);let i=s[t.toURLString()];return i&&sn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new dR(t,RR,n,r),s[t.toURLString()]=i,i}class DR{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(hR(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new un(this._repo,z())),this._rootInternal}_delete(){return this._rootInternal!==null&&(AR(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&sn("Cannot call "+e+" on a deleted database.")}}function MR(t=Vd(),e){const n=hl(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=vv("database");r&&jR(n,...r)}return n}function jR(t,e,n,r={}){t=de(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&sn("Cannot call useEmulator() after instance has already been initialized.");const s=t._repoInternal;let i;if(s.repoInfo_.nodeAdmin)r.mockUserToken&&sn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),i=new Go(Go.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:xv(r.mockUserToken,t.app.options.projectId);i=new Go(o)}PR(s,e,n,i)}/**
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
 */function FR(t){AN(Sr),_r(new $n("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return OR(r,s,i,n)},"PUBLIC").setMultipleInstances(!0)),Lt(Up,$p,t),Lt(Up,$p,"esm2017")}Qt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Qt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};FR();/**
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
 */const P0="firebasestorage.googleapis.com",O0="storageBucket",UR=2*60*1e3,$R=10*60*1e3;/**
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
 */class le extends an{constructor(e,n,r=0){super(vc(e),`Firebase Storage: ${n} (${vc(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,le.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return vc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ae;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ae||(ae={}));function vc(t){return"storage/"+t}function Ph(){const t="An unknown error occurred, please check the error payload for server response.";return new le(ae.UNKNOWN,t)}function zR(t){return new le(ae.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function BR(t){return new le(ae.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function WR(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new le(ae.UNAUTHENTICATED,t)}function VR(){return new le(ae.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function HR(t){return new le(ae.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function GR(){return new le(ae.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function KR(){return new le(ae.CANCELED,"User canceled the upload/download.")}function qR(t){return new le(ae.INVALID_URL,"Invalid URL '"+t+"'.")}function QR(t){return new le(ae.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function YR(){return new le(ae.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+O0+"' property when initializing the app?")}function XR(){return new le(ae.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function JR(){return new le(ae.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function ZR(t){return new le(ae.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Uu(t){return new le(ae.INVALID_ARGUMENT,t)}function A0(){return new le(ae.APP_DELETED,"The Firebase app was deleted.")}function eP(t){return new le(ae.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function oi(t,e){return new le(ae.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function js(t){throw new le(ae.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class nt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=nt.makeFromUrl(e,n)}catch{return new nt(e,"")}if(r.path==="")return r;throw QR(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(x){x.path.charAt(x.path.length-1)==="/"&&(x.path_=x.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function c(x){x.path_=decodeURIComponent(x.path)}const d="v[A-Za-z0-9_]+",u=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",p=new RegExp(`^https?://${u}/${d}/b/${s}/o${f}`,"i"),g={bucket:1,path:3},y=n===P0?"(?:storage.googleapis.com|storage.cloud.google.com)":n,w="([^?#]*)",v=new RegExp(`^https?://${y}/${s}/${w}`,"i"),_=[{regex:a,indices:l,postModify:i},{regex:p,indices:g,postModify:c},{regex:v,indices:{bucket:1,path:2},postModify:c}];for(let x=0;x<_.length;x++){const C=_[x],I=C.regex.exec(e);if(I){const N=I[C.indices.bucket];let R=I[C.indices.path];R||(R=""),r=new nt(N,R),C.postModify(r);break}}if(r==null)throw qR(e);return r}}class tP{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function nP(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function l(){return a===2}let c=!1;function d(...w){c||(c=!0,e.apply(null,w))}function u(w){s=setTimeout(()=>{s=null,t(p,l())},w)}function f(){i&&clearTimeout(i)}function p(w,...v){if(c){f();return}if(w){f(),d.call(null,w,...v);return}if(l()||o){f(),d.call(null,w,...v);return}r<64&&(r*=2);let _;a===1?(a=2,_=0):_=(r+Math.random())*1e3,u(_)}let g=!1;function y(w){g||(g=!0,f(),!c&&(s!==null?(w||(a=2),clearTimeout(s),u(0)):w||(a=1)))}return u(0),i=setTimeout(()=>{o=!0,y(!0)},n),y}function rP(t){t(!1)}/**
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
 */function sP(t){return t!==void 0}function iP(t){return typeof t=="object"&&!Array.isArray(t)}function Oh(t){return typeof t=="string"||t instanceof String}function wm(t){return Ah()&&t instanceof Blob}function Ah(){return typeof Blob<"u"}function xm(t,e,n,r){if(r<e)throw Uu(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Uu(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function Lh(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function L0(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var dr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(dr||(dr={}));/**
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
 */function oP(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
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
 */class aP{constructor(e,n,r,s,i,o,a,l,c,d,u,f=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=d,this.connectionFactory_=u,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,g)=>{this.resolve_=p,this.reject_=g,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new No(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===dr.NO_ERROR,l=i.getStatus();if(!a||oP(l,this.additionalRetryCodes_)&&this.retry){const d=i.getErrorCode()===dr.ABORT;r(!1,new No(!1,null,d));return}const c=this.successCodes_.indexOf(l)!==-1;r(!0,new No(c,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());sP(l)?i(l):i()}catch(l){o(l)}else if(a!==null){const l=Ph();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(s.canceled){const l=this.appDelete_?A0():KR();o(l)}else{const l=GR();o(l)}};this.canceled_?n(!1,new No(!1,null,!0)):this.backoffId_=nP(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&rP(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class No{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function lP(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function cP(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function uP(t,e){e&&(t["X-Firebase-GMPID"]=e)}function dP(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function hP(t,e,n,r,s,i,o=!0){const a=L0(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return uP(c,e),lP(c,n),cP(c,i),dP(c,r),new aP(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
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
 */function fP(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function pP(...t){const e=fP();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Ah())return new Blob(t);throw new le(ae.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function mP(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function gP(t){if(typeof atob>"u")throw ZR("base-64");return atob(t)}/**
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
 */const Pt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class yc{constructor(e,n){this.data=e,this.contentType=n||null}}function _P(t,e){switch(t){case Pt.RAW:return new yc(D0(e));case Pt.BASE64:case Pt.BASE64URL:return new yc(M0(t,e));case Pt.DATA_URL:return new yc(yP(e),wP(e))}throw Ph()}function D0(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function vP(t){let e;try{e=decodeURIComponent(t)}catch{throw oi(Pt.DATA_URL,"Malformed data URL.")}return D0(e)}function M0(t,e){switch(t){case Pt.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw oi(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Pt.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw oi(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=gP(e)}catch(s){throw s.message.includes("polyfill")?s:oi(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class j0{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw oi(Pt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=xP(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function yP(t){const e=new j0(t);return e.base64?M0(Pt.BASE64,e.rest):vP(e.rest)}function wP(t){return new j0(t).contentType}function xP(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class En{constructor(e,n){let r=0,s="";wm(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(wm(this.data_)){const r=this.data_,s=mP(r,e,n);return s===null?null:new En(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new En(r,!0)}}static getBlob(...e){if(Ah()){const n=e.map(r=>r instanceof En?r.data_:r);return new En(pP.apply(null,n))}else{const n=e.map(o=>Oh(o)?_P(Pt.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new En(s,!0)}}uploadData(){return this.data_}}/**
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
 */function F0(t){let e;try{e=JSON.parse(t)}catch{return null}return iP(e)?e:null}/**
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
 */function EP(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function kP(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function U0(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function CP(t,e){return e}class Fe{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||CP}}let To=null;function SP(t){return!Oh(t)||t.length<2?t:U0(t)}function $0(){if(To)return To;const t=[];t.push(new Fe("bucket")),t.push(new Fe("generation")),t.push(new Fe("metageneration")),t.push(new Fe("name","fullPath",!0));function e(i,o){return SP(o)}const n=new Fe("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new Fe("size");return s.xform=r,t.push(s),t.push(new Fe("timeCreated")),t.push(new Fe("updated")),t.push(new Fe("md5Hash",null,!0)),t.push(new Fe("cacheControl",null,!0)),t.push(new Fe("contentDisposition",null,!0)),t.push(new Fe("contentEncoding",null,!0)),t.push(new Fe("contentLanguage",null,!0)),t.push(new Fe("contentType",null,!0)),t.push(new Fe("metadata","customMetadata",!0)),To=t,To}function IP(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new nt(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function NP(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return IP(r,t),r}function z0(t,e,n){const r=F0(e);return r===null?null:NP(t,r,n)}function TP(t,e,n,r){const s=F0(e);if(s===null||!Oh(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(c=>{const d=t.bucket,u=t.fullPath,f="/b/"+o(d)+"/o/"+o(u),p=Lh(f,n,r),g=L0({alt:"media",token:c});return p+g})[0]}function bP(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class B0{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function W0(t){if(!t)throw Ph()}function RP(t,e){function n(r,s){const i=z0(t,s,e);return W0(i!==null),i}return n}function PP(t,e){function n(r,s){const i=z0(t,s,e);return W0(i!==null),TP(i,s,t.host,t._protocol)}return n}function V0(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=VR():s=WR():n.getStatus()===402?s=BR(t.bucket):n.getStatus()===403?s=HR(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function OP(t){const e=V0(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=zR(t.path)),i.serverResponse=s.serverResponse,i}return n}function AP(t,e,n){const r=e.fullServerUrl(),s=Lh(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new B0(s,i,PP(t,n),o);return a.errorHandler=OP(e),a}function LP(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function DP(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=LP(null,e)),r}function MP(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let _="";for(let x=0;x<2;x++)_=_+Math.random().toString().slice(2);return _}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const c=DP(e,r,s),d=bP(c,n),u="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+l+`\r
Content-Type: `+c.contentType+`\r
\r
`,f=`\r
--`+l+"--",p=En.getBlob(u,r,f);if(p===null)throw XR();const g={name:c.fullPath},y=Lh(i,t.host,t._protocol),w="POST",v=t.maxUploadRetryTime,m=new B0(y,w,RP(t,n),v);return m.urlParams=g,m.headers=o,m.body=p.uploadData(),m.errorHandler=V0(e),m}class jP{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=dr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=dr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=dr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw js("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw js("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw js("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw js("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw js("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class FP extends jP{initXhr(){this.xhr_.responseType="text"}}function H0(){return new FP}/**
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
 */class Er{constructor(e,n){this._service=e,n instanceof nt?this._location=n:this._location=nt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Er(e,n)}get root(){const e=new nt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return U0(this._location.path)}get storage(){return this._service}get parent(){const e=EP(this._location.path);if(e===null)return null;const n=new nt(this._location.bucket,e);return new Er(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw eP(e)}}function UP(t,e,n){t._throwIfRoot("uploadBytes");const r=MP(t.storage,t._location,$0(),new En(e,!0),n);return t.storage.makeRequestWithTokens(r,H0).then(s=>({metadata:s,ref:t}))}function $P(t){t._throwIfRoot("getDownloadURL");const e=AP(t.storage,t._location,$0());return t.storage.makeRequestWithTokens(e,H0).then(n=>{if(n===null)throw JR();return n})}function zP(t,e){const n=kP(t._location.path,e),r=new nt(t._location.bucket,n);return new Er(t.storage,r)}/**
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
 */function BP(t){return/^[A-Za-z]+:\/\//.test(t)}function WP(t,e){return new Er(t,e)}function G0(t,e){if(t instanceof Dh){const n=t;if(n._bucket==null)throw YR();const r=new Er(n,n._bucket);return e!=null?G0(r,e):r}else return e!==void 0?zP(t,e):t}function VP(t,e){if(e&&BP(e)){if(t instanceof Dh)return WP(t,e);throw Uu("To use ref(service, url), the first argument must be a Storage instance.")}else return G0(t,e)}function Em(t,e){const n=e==null?void 0:e[O0];return n==null?null:nt.makeFromBucketSpec(n,t)}function HP(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:xv(s,t.app.options.projectId))}class Dh{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=P0,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=UR,this._maxUploadRetryTime=$R,this._requests=new Set,s!=null?this._bucket=nt.makeFromBucketSpec(s,this._host):this._bucket=Em(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=nt.makeFromBucketSpec(this._url,e):this._bucket=Em(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){xm("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){xm("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Er(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new tP(A0());{const o=hP(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const km="@firebase/storage",Cm="0.13.2";/**
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
 */const K0="storage";function GP(t,e,n){return t=de(t),UP(t,e,n)}function KP(t){return t=de(t),$P(t)}function qP(t,e){return t=de(t),VP(t,e)}function QP(t=Vd(),e){t=de(t);const r=hl(t,K0).getImmediate({identifier:e}),s=vv("storage");return s&&YP(r,...s),r}function YP(t,e,n,r={}){HP(t,e,n,r)}function XP(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Dh(n,r,s,e,Sr)}function JP(){_r(new $n(K0,XP,"PUBLIC").setMultipleInstances(!0)),Lt(km,Cm,""),Lt(km,Cm,"esm2017")}JP();const ZP={apiKey:"AIzaSyD9-_GYLQabcC3SPMTOG9zj2CcaPqzfOrI",authDomain:"lalaland-24931.firebaseapp.com",databaseURL:"https://lalaland-24931-default-rtdb.firebaseio.com",projectId:"lalaland-24931",storageBucket:"lalaland-24931.firebasestorage.app",messagingSenderId:"45134876312",appId:"1:45134876312:web:9e33e46c54cb7c9bfc8aed",measurementId:"G-M04NRCY9FQ"},Mh=Iv(ZP),ai=PN(Mh),oe=MR(Mh),e2=QP(Mh),t2=async()=>{console.log("🔍 開始偵錯 Firebase 資料庫...");try{console.log("📡 檢查群組聊天資料...");const t=ie(oe,"groupChats"),e=await tt(t);if(e.exists()){const o=e.val();console.log("✅ 群組聊天資料:",o),Object.keys(o).forEach(a=>{var l;if((l=o[a])!=null&&l.messages){const c=Object.keys(o[a].messages).length;console.log(`📝 房間 ${a} 有 ${c} 條訊息`)}else console.log(`📝 房間 ${a} 沒有訊息`)})}else console.log("❌ 沒有找到群組聊天資料");console.log("👥 檢查用戶資料...");const n=ie(oe,"users"),r=await tt(n);if(r.exists()){const o=r.val();console.log("✅ 用戶資料:",o),Object.keys(o).forEach(a=>{var l,c;if((l=o[a])!=null&&l.friends){const d=Object.keys(o[a].friends).length;console.log(`👨‍👩‍👧‍👦 用戶 ${a} (${o[a].nickname||"匿名"}) 有 ${d} 個好友`)}else console.log(`👨‍👩‍👧‍👦 用戶 ${a} (${((c=o[a])==null?void 0:c.nickname)||"匿名"}) 沒有好友`)})}else console.log("❌ 沒有找到用戶資料");console.log("💬 檢查私人聊天資料...");const s=ie(oe,"privateChats"),i=await tt(s);if(i.exists()){const o=i.val();console.log("✅ 私人聊天資料:",o),Object.keys(o).forEach(a=>{var l;if((l=o[a])!=null&&l.messages){const c=Object.keys(o[a].messages).length;console.log(`💌 私聊 ${a} 有 ${c} 條訊息`)}})}else console.log("❌ 沒有找到私人聊天資料")}catch(t){console.error("🚨 Firebase 偵錯失敗:",t),console.error("錯誤詳情:",t.message),t.code==="PERMISSION_DENIED"&&(console.error("❌ 權限被拒絕 - 需要更新 Firebase 安全規則!"),console.log("📋 請參考 FIREBASE_SETUP.md 文件更新規則"))}},n2=async t=>{console.log(`🔍 偵錯房間 ${t} 的訊息...`);try{const e=ie(oe,`groupChats/${t}/messages`),n=await tt(e);if(n.exists()){const r=n.val();return console.log(`✅ 房間 ${t} 找到 ${Object.keys(r).length} 條訊息:`,r),r}else return console.log(`❌ 房間 ${t} 沒有訊息`),null}catch(e){return console.error(`🚨 無法讀取房間 ${t} 的訊息:`,e),null}},r2=async t=>{console.log(`🔍 偵錯用戶 ${t} 的好友...`);try{const e=ie(oe,`users/${t}/friends`),n=await tt(e);if(n.exists()){const r=n.val();return console.log(`✅ 用戶 ${t} 找到 ${Object.keys(r).length} 個好友:`,r),r}else return console.log(`❌ 用戶 ${t} 沒有好友`),null}catch(e){return console.error(`🚨 無法讀取用戶 ${t} 的好友:`,e),null}};/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s2=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),q0=(...t)=>t.filter((e,n,r)=>!!e&&r.indexOf(e)===n).join(" ");/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var i2={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o2=E.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:s="",children:i,iconNode:o,...a},l)=>E.createElement("svg",{ref:l,...i2,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:q0("lucide",s),...a},[...o.map(([c,d])=>E.createElement(c,d)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K=(t,e)=>{const n=E.forwardRef(({className:r,...s},i)=>E.createElement(o2,{ref:i,iconNode:e,className:q0(`lucide-${s2(t)}`,r),...s}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q0=K("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a2=K("BarChart3",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l2=K("BellOff",[["path",{d:"M8.7 3A6 6 0 0 1 18 8a21.3 21.3 0 0 0 .6 5",key:"o7mx20"}],["path",{d:"M17 17H3s3-2 3-9a4.67 4.67 0 0 1 .3-1.7",key:"16f1lm"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c2=K("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u2=K("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d2=K("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h2=K("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jh=K("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f2=K("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p2=K("Loader",[["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m16.2 7.8 2.9-2.9",key:"r700ao"}],["path",{d:"M18 12h4",key:"wj9ykh"}],["path",{d:"m16.2 16.2 2.9 2.9",key:"1bxg5t"}],["path",{d:"M12 18v4",key:"jadmvz"}],["path",{d:"m4.9 19.1 2.9-2.9",key:"bwix9q"}],["path",{d:"M2 12h4",key:"j09sii"}],["path",{d:"m4.9 4.9 2.9 2.9",key:"giyufr"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $u=K("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m2=K("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g2=K("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _2=K("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vn=K("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y0=K("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v2=K("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y2=K("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X0=K("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w2=K("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x2=K("Smile",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J0=K("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E2=K("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zu=K("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sm=K("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fh=K("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fs=K("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),k2=()=>{const t=Y_(),e=[{icon:h.jsx(Vn,{className:"w-8 h-8"}),title:"即時聊天",description:"與志同道合的朋友即時對話交流"},{icon:h.jsx(jh,{className:"w-8 h-8"}),title:"安全友善",description:"專為女性LGBTQ+社群設計的安全空間"},{icon:h.jsx(Fh,{className:"w-8 h-8"}),title:"多元社群",description:"閒聊、找伴、交友，滿足不同需求"},{icon:h.jsx($u,{className:"w-8 h-8"}),title:"隱私保護",description:"匿名模式與隱私設定保護你的安全"}];return h.jsxs("div",{className:"min-h-screen flex flex-col",children:[h.jsx("header",{className:"bg-white/70 backdrop-blur-sm border-b border-gray-200",children:h.jsxs("div",{className:"max-w-6xl mx-auto px-4 py-4 flex justify-between items-center",children:[h.jsxs("div",{className:"flex items-center gap-3",children:[h.jsx("img",{src:"/icon-512.png",alt:"LalaLand",className:"w-10 h-10 rounded-lg"}),h.jsx("h1",{className:"text-2xl font-bold text-sea-dark",children:"LalaLand"})]}),h.jsx("button",{onClick:()=>t("/login"),className:"btn-primary",children:"登入 / 註冊"})]})}),h.jsx("main",{className:"flex-1 flex flex-col items-center justify-center px-4 py-12",children:h.jsxs("div",{className:"text-center max-w-4xl mx-auto",children:[h.jsx("img",{src:"/icon-512.png",alt:"LalaLand Logo",className:"w-32 h-32 mx-auto mb-8 animate-float"}),h.jsxs("h2",{className:"text-4xl md:text-5xl font-bold text-gray-800 mb-6",children:["歡迎來到",h.jsx("span",{className:"text-sea-blue",children:" LalaLand"})]}),h.jsxs("p",{className:"text-xl text-gray-600 mb-8 leading-relaxed",children:["專為女同性戀者設計的安全聊天平台",h.jsx("br",{}),"在這裡，你可以安心做自己，與志同道合的朋友建立真摯連結"]}),h.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center mb-16",children:[h.jsx("button",{onClick:()=>t("/login"),className:"btn-primary text-lg px-8 py-4",children:"開始聊天"}),h.jsx("button",{onClick:()=>t("/login"),className:"btn-secondary text-lg px-8 py-4",children:"匿名體驗"})]}),h.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-4 gap-8",children:e.map((n,r)=>h.jsxs("div",{className:"card text-center hover:shadow-medium transition-shadow",children:[h.jsx("div",{className:"text-sea-blue mb-4 flex justify-center",children:n.icon}),h.jsx("h3",{className:"font-semibold text-lg mb-2",children:n.title}),h.jsx("p",{className:"text-gray-600 text-sm",children:n.description})]},r))})]})}),h.jsx("footer",{className:"bg-white/70 backdrop-blur-sm border-t border-gray-200 py-8",children:h.jsx("div",{className:"max-w-6xl mx-auto px-4 text-center text-gray-500",children:h.jsx("p",{children:"© 2025 LalaLand. 致力於為女性LGBTQ+社群提供安全友善的交流空間"})})})]})},Im=()=>{const t=Y_(),[e,n]=E.useState("login"),[r,s]=E.useState(!1),[i,o]=E.useState(!1),[a,l]=E.useState({email:"",password:"",confirmPassword:"",nickname:""}),c=p=>{l(g=>({...g,[p.target.name]:p.target.value}))},d=async p=>{p.preventDefault(),o(!0);try{await mI(ai,a.email,a.password),Ee.success("登入成功！"),t("/chat")}catch(g){Ee.error("登入失敗："+(g.message||"請檢查帳號密碼"))}finally{o(!1)}},u=async p=>{if(p.preventDefault(),o(!0),a.password!==a.confirmPassword){Ee.error("密碼確認不一致"),o(!1);return}if(a.password.length<6){Ee.error("密碼至少需要6個字元"),o(!1);return}try{const g=await pI(ai,a.email,a.password);await Tp(g.user,{displayName:a.nickname||"新用戶"}),await Ui(ie(oe,`users/${g.user.uid}`),{nickname:a.nickname||"新用戶",email:a.email,avatar:null,joinedAt:Date.now(),isOnline:!0}),Ee.success("註冊成功！歡迎加入 LalaLand！"),t("/chat")}catch(g){Ee.error("註冊失敗："+(g.message||"請稍後再試"))}finally{o(!1)}},f=async()=>{o(!0);try{const p=await uI(ai),g=a.nickname||`訪客_${Math.floor(Math.random()*1e3)}`;await Tp(p.user,{displayName:g}),await Ui(ie(oe,`users/${p.user.uid}`),{nickname:g,email:null,avatar:null,joinedAt:Date.now(),isOnline:!0,isAnonymous:!0}),Ee.success("匿名登入成功！"),t("/chat")}catch(p){Ee.error("匿名登入失敗："+(p.message||"請稍後再試"))}finally{o(!1)}};return h.jsx("div",{className:"min-h-screen flex items-center justify-center px-4 py-8",children:h.jsxs("div",{className:"w-full max-w-md",children:[h.jsxs("button",{onClick:()=>t("/"),className:"flex items-center gap-2 text-gray-600 hover:text-sea-blue mb-6 transition-colors",children:[h.jsx(Q0,{className:"w-4 h-4"}),"返回首頁"]}),h.jsxs("div",{className:"card",children:[h.jsxs("div",{className:"text-center mb-8",children:[h.jsx("img",{src:"/icon-512.png",alt:"LalaLand",className:"w-16 h-16 mx-auto mb-4"}),h.jsxs("h2",{className:"text-2xl font-bold text-gray-800",children:[e==="login"&&"登入 LalaLand",e==="register"&&"註冊 LalaLand",e==="anonymous"&&"匿名體驗"]})]}),h.jsxs("div",{className:"flex bg-gray-100 rounded-lg p-1 mb-6",children:[h.jsx("button",{className:`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${e==="login"?"bg-white text-sea-blue shadow-sm":"text-gray-600 hover:text-gray-800"}`,onClick:()=>n("login"),children:"登入"}),h.jsx("button",{className:`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${e==="register"?"bg-white text-sea-blue shadow-sm":"text-gray-600 hover:text-gray-800"}`,onClick:()=>n("register"),children:"註冊"}),h.jsx("button",{className:`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${e==="anonymous"?"bg-white text-sea-blue shadow-sm":"text-gray-600 hover:text-gray-800"}`,onClick:()=>n("anonymous"),children:"匿名"})]}),e!=="anonymous"?h.jsxs("form",{onSubmit:e==="login"?d:u,children:[e==="register"&&h.jsxs("div",{className:"mb-4",children:[h.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"暱稱"}),h.jsxs("div",{className:"relative",children:[h.jsx(Sm,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"}),h.jsx("input",{type:"text",name:"nickname",value:a.nickname,onChange:c,className:"input-field pl-10",placeholder:"輸入你的暱稱",required:!0})]})]}),h.jsxs("div",{className:"mb-4",children:[h.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"電子郵件"}),h.jsxs("div",{className:"relative",children:[h.jsx(g2,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"}),h.jsx("input",{type:"email",name:"email",value:a.email,onChange:c,className:"input-field pl-10",placeholder:"輸入你的電子郵件",required:!0})]})]}),h.jsxs("div",{className:"mb-4",children:[h.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"密碼"}),h.jsxs("div",{className:"relative",children:[h.jsx($u,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"}),h.jsx("input",{type:r?"text":"password",name:"password",value:a.password,onChange:c,className:"input-field pl-10 pr-10",placeholder:"輸入密碼",required:!0}),h.jsx("button",{type:"button",onClick:()=>s(!r),className:"absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600",children:r?h.jsx(d2,{className:"w-5 h-5"}):h.jsx(h2,{className:"w-5 h-5"})})]})]}),e==="register"&&h.jsxs("div",{className:"mb-6",children:[h.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"確認密碼"}),h.jsxs("div",{className:"relative",children:[h.jsx($u,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"}),h.jsx("input",{type:r?"text":"password",name:"confirmPassword",value:a.confirmPassword,onChange:c,className:"input-field pl-10",placeholder:"再次輸入密碼",required:!0})]})]}),h.jsx("button",{type:"submit",disabled:i,className:"btn-primary w-full text-center disabled:opacity-50 disabled:cursor-not-allowed",children:i?"處理中...":e==="login"?"登入":"註冊"})]}):h.jsxs("div",{children:[h.jsxs("div",{className:"mb-6",children:[h.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"暱稱（選填）"}),h.jsxs("div",{className:"relative",children:[h.jsx(Sm,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"}),h.jsx("input",{type:"text",name:"nickname",value:a.nickname,onChange:c,className:"input-field pl-10",placeholder:"輸入暱稱或留空使用隨機名稱"})]})]}),h.jsx("button",{onClick:f,disabled:i,className:"btn-primary w-full text-center disabled:opacity-50 disabled:cursor-not-allowed",children:i?"處理中...":"匿名進入聊天室"}),h.jsx("p",{className:"text-xs text-gray-500 mt-4 text-center",children:"匿名模式不需要註冊，但資料不會被保存"})]})]})]})})},It=hv((t,e)=>({currentRoom:"chat",currentPrivateChat:null,messages:[],onlineUsers:{},friends:[],privateChatsList:[],sidebarOpen:!1,darkMode:localStorage.getItem("darkMode")==="yes",setCurrentRoom:n=>t({currentRoom:n}),setCurrentPrivateChat:n=>t({currentPrivateChat:n}),setMessages:n=>t({messages:n}),addMessage:n=>t(r=>({messages:[...r.messages,n]})),setOnlineUsers:n=>t({onlineUsers:n}),setFriends:n=>t({friends:n}),setPrivateChatsList:n=>t({privateChatsList:n}),setSidebarOpen:n=>t({sidebarOpen:n}),toggleDarkMode:()=>{const n=!e().darkMode;localStorage.setItem("darkMode",n?"yes":"no"),t({darkMode:n}),n?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},clearMessages:()=>t({messages:[]})})),C2=async t=>{if(t!=null&&t.uid)try{console.log("正在為用戶創建範例資料:",t.nickname);const e=ie(oe,`users/${t.uid}`),n={nickname:t.nickname||"匿名用戶",avatar:t.avatar||null,email:t.email||null,isAnonymous:t.isAnonymous||!1,lastSeen:Date.now(),isOnline:!0,joinedAt:Date.now()};await Ui(e,n),console.log("✅ 用戶資料已更新")}catch(e){console.error("❌ 創建範例資料失敗:",e)}},S2=({isOpen:t,onClose:e})=>{const{user:n,setUser:r}=je(),[s,i]=E.useState(!0),[o,a]=E.useState((n==null?void 0:n.nickname)||""),[l,c]=E.useState((n==null?void 0:n.avatar)||""),[d,u]=E.useState(o);if(!t)return null;const f=async()=>{try{const y={...n,nickname:d||"匿名用戶",avatar:l};r(y),console.log("💾 保存設定:",{nickname:d,avatar:l,notifications:s}),e()}catch(y){console.error("保存設定失敗:",y)}},p=()=>{i(!s),s||"Notification"in window&&Notification.requestPermission().then(y=>{y==="granted"&&console.log("✅ 通知權限已授予")})},g=()=>{const y=`https://ui-avatars.com/api/?name=${encodeURIComponent(d||"匿名")}&background=56c596&color=fff&size=128`;c(y)};return h.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4",children:h.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto",children:[h.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700",children:[h.jsx("h2",{className:"text-xl font-semibold text-gray-900 dark:text-white",children:"設定"}),h.jsx("button",{onClick:e,className:"p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors",children:h.jsx(fs,{className:"w-5 h-5 text-gray-500"})})]}),h.jsxs("div",{className:"p-6 space-y-6",children:[h.jsxs("div",{children:[h.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white mb-4",children:"個人資料"}),h.jsxs("div",{className:"flex items-center gap-4 mb-4",children:[h.jsx("img",{src:l||`https://ui-avatars.com/api/?name=${encodeURIComponent(d||"匿名")}&background=56c596&color=fff&size=64`,alt:"頭像",className:"w-16 h-16 rounded-full"}),h.jsxs("div",{children:[h.jsxs("button",{onClick:g,className:"flex items-center gap-2 px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors",children:[h.jsx(u2,{className:"w-4 h-4"}),"更換頭像"]}),h.jsx("p",{className:"text-xs text-gray-500 mt-1",children:"點擊生成新的頭像"})]})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",children:"暱稱"}),h.jsx("input",{type:"text",value:d,onChange:y=>u(y.target.value),className:"w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white",placeholder:"輸入你的暱稱",maxLength:20})]})]}),h.jsxs("div",{children:[h.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white mb-4",children:"通知設定"}),h.jsxs("div",{className:"flex items-center justify-between",children:[h.jsxs("div",{className:"flex items-center gap-3",children:[s?h.jsx(c2,{className:"w-5 h-5 text-green-500"}):h.jsx(l2,{className:"w-5 h-5 text-gray-400"}),h.jsxs("div",{children:[h.jsx("p",{className:"font-medium text-gray-900 dark:text-white",children:"推送通知"}),h.jsx("p",{className:"text-sm text-gray-500",children:"接收新訊息通知"})]})]}),h.jsx("button",{onClick:p,className:`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${s?"bg-blue-500":"bg-gray-300"}`,children:h.jsx("span",{className:`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${s?"translate-x-6":"translate-x-1"}`})})]})]}),h.jsxs("div",{children:[h.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white mb-4",children:"其他"}),h.jsxs("div",{className:"space-y-2 text-sm text-gray-600 dark:text-gray-400",children:[h.jsx("p",{children:"• 版本: 1.0.0"}),h.jsx("p",{children:"• React 聊天室"}),h.jsx("p",{children:"• 支援即時通訊和檔案分享"})]})]})]}),h.jsxs("div",{className:"flex gap-3 p-6 border-t border-gray-200 dark:border-gray-700",children:[h.jsx("button",{onClick:e,className:"flex-1 px-4 py-2 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors",children:"取消"}),h.jsx("button",{onClick:f,className:"flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors",children:"保存"})]})]})})},I2=()=>{const{user:t}=je(),{currentRoom:e,setCurrentRoom:n,sidebarOpen:r,setSidebarOpen:s,darkMode:i,toggleDarkMode:o,onlineUsers:a}=It(),[l,c]=E.useState(!1),d=async()=>{try{await wI(ai),Ee.success("已登出")}catch{Ee.error("登出失敗")}},u=[{id:"chat",name:"閒聊區",icon:Vn,tip:"歡迎隨意聊聊、發問、抒發生活大小事"},{id:"love",name:"找伴區",icon:jh,tip:"你正在找伴專區，請多用心互動，彼此尊重"},{id:"sex",name:"約炮區",icon:Fh,tip:"匿名聊性、約炮自由，但請勿冒犯他人"}],f=`
    ${r?"translate-x-0":"-translate-x-full"}
    md:translate-x-0 fixed md:relative left-0 top-0 h-full w-80 bg-white/80 dark:bg-dark-card/80 
    backdrop-blur-sm border-r border-gray-200 dark:border-gray-700 z-30 transition-transform duration-300
    pt-16 md:pt-0
  `;return h.jsxs(h.Fragment,{children:[r&&h.jsx("div",{className:"md:hidden fixed inset-0 bg-black/50 z-20",onClick:()=>s(!1)}),h.jsx("div",{className:f,children:h.jsxs("div",{className:"flex flex-col h-full",children:[h.jsxs("div",{className:"p-6 border-b border-gray-200 dark:border-gray-700",children:[h.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[h.jsx("img",{src:(t==null?void 0:t.avatar)||`https://ui-avatars.com/api/?name=${t==null?void 0:t.nickname}&background=2877b9&color=fff`,alt:t==null?void 0:t.nickname,className:"w-12 h-12 rounded-full border-2 border-sea-blue"}),h.jsxs("div",{children:[h.jsx("h3",{className:"font-semibold text-gray-800 dark:text-dark-text",children:(t==null?void 0:t.nickname)||"用戶"}),h.jsx("p",{className:"text-sm text-gray-500",children:t!=null&&t.isAnonymous?"匿名用戶":"已註冊用戶"})]})]}),h.jsxs("div",{className:"text-sm text-gray-600 dark:text-gray-400",children:["在線成員: ",Object.keys(a).length," 人"]})]}),h.jsxs("div",{className:"flex-1 overflow-y-auto",children:[h.jsxs("div",{className:"p-4",children:[h.jsx("h4",{className:"text-sm font-medium text-gray-500 dark:text-gray-400 mb-3",children:"聊天室"}),h.jsxs("div",{className:"space-y-1",children:[u.map(p=>h.jsxs("button",{onClick:()=>{n(p.id),s(!1)},className:`sidebar-item w-full ${e===p.id?"active":""}`,children:[h.jsx(p.icon,{className:"w-5 h-5"}),h.jsx("span",{className:"font-medium",children:p.name})]},p.id)),h.jsxs("button",{onClick:()=>{n("private"),s(!1)},className:`sidebar-item w-full ${e==="private"?"active":""}`,children:[h.jsx(Vn,{className:"w-5 h-5"}),h.jsx("span",{className:"font-medium",children:"私人訊息"})]}),h.jsxs("button",{onClick:()=>{n("friends"),s(!1)},className:`sidebar-item w-full ${e==="friends"?"active":""}`,children:[h.jsx(zu,{className:"w-5 h-5"}),h.jsx("span",{className:"font-medium",children:"我的好友"})]})]})]}),h.jsxs("div",{className:"p-4 border-t border-gray-200 dark:border-gray-700",children:[h.jsx("h4",{className:"text-sm font-medium text-gray-500 dark:text-gray-400 mb-3",children:"在線成員"}),h.jsx("div",{className:"space-y-2",children:Object.entries(a).map(([p,g])=>h.jsxs("div",{className:"flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700",children:[h.jsx("img",{src:g.avatar||`https://ui-avatars.com/api/?name=${g.nickname}&background=56c596&color=fff`,alt:g.nickname,className:"w-8 h-8 rounded-full"}),h.jsxs("div",{children:[h.jsx("p",{className:"text-sm font-medium text-gray-700 dark:text-gray-300",children:g.nickname}),h.jsxs("div",{className:"flex items-center gap-1",children:[h.jsx("div",{className:"w-2 h-2 bg-accent-green rounded-full"}),h.jsx("span",{className:"text-xs text-gray-500",children:"在線"})]})]})]},p))})]})]}),h.jsx("div",{className:"p-4 border-t border-gray-200 dark:border-gray-700",children:h.jsxs("div",{className:"space-y-1",children:[h.jsxs("button",{onClick:o,className:"sidebar-item w-full",children:[i?h.jsx(J0,{className:"w-5 h-5"}):h.jsx(Y0,{className:"w-5 h-5"}),h.jsx("span",{children:i?"淺色模式":"深色模式"})]}),h.jsxs("button",{onClick:()=>c(!0),className:"sidebar-item w-full",children:[h.jsx(w2,{className:"w-5 h-5"}),h.jsx("span",{children:"設定"})]}),h.jsxs("button",{onClick:d,className:"sidebar-item w-full text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20",children:[h.jsx(m2,{className:"w-5 h-5"}),h.jsx("span",{children:"登出"})]})]})})]})}),h.jsx(S2,{isOpen:l,onClose:()=>c(!1)})]})},N2=t=>{const{user:e}=je(),{setMessages:n,addMessage:r,clearMessages:s}=It();return E.useEffect(()=>{if(!e||!t){console.log("⚠️ useFirebaseChat: 缺少必要參數",{user:!!e,roomId:t});return}console.log(`🚀 開始監聽房間 ${t} 的訊息...`),s();const o=ie(oe,`groupChats/${t}/messages`),a=Rh(o,l=>{try{const c=l.val();if(console.log(`📝 房間 ${t} 收到資料:`,c),c){const d=Object.entries(c).map(([u,f])=>(Math.random()<.1&&console.log(`⏰ 訊息 ${u} 時間戳:`,{timestamp:f.timestamp,time:f.time,rawMessage:f}),{id:u,...f,timestamp:f.timestamp||f.time||Date.now()}));d.sort((u,f)=>{const p=u.timestamp||u.time||0,g=f.timestamp||f.time||0;return p-g}),console.log(`✅ 房間 ${t} 載入了 ${d.length} 條訊息`),n(d)}else console.log(`📭 房間 ${t} 沒有訊息`),n([])}catch(c){console.error(`❌ 房間 ${t} 載入訊息時出錯:`,c),n([])}},l=>{console.error(`❌ Firebase onValue 錯誤 (房間 ${t}):`,l),l.code==="PERMISSION_DENIED"&&console.error("🚫 權限被拒絕 - 請檢查 Firebase 安全規則!")});return()=>{try{console.log(`🛑 停止監聽房間 ${t} 的訊息`),a()}catch(l){console.error("Firebase unsubscribe error:",l)}}},[e,t,n,s]),{sendMessage:async o=>{if(!e||!t)return;const a=ie(oe,`groupChats/${t}/messages`),l={...o,sender:{uid:e.uid,nickname:e.nickname||"匿名用戶",avatar:e.avatar||null},timestamp:Date.now(),room:t};try{await R0(a,l)}catch(c){throw console.error("發送訊息失敗:",c),c}}}},T2=()=>{const{user:t}=je(),{setOnlineUsers:e}=It();E.useEffect(()=>{if(!t||!t.uid)return;console.log("User logged in:",t.nickname);const n={[t.uid]:{nickname:t.nickname||"匿名用戶",avatar:t.avatar||null,isOnline:!0,lastSeen:Date.now()}};return e(n),()=>{console.log("Cleanup online users")}},[t,e])},b2=async t=>{if(!t)throw new Error("沒有選擇檔案");if(t.size>5*1024*1024)throw new Error("圖片檔案不能超過 5MB");if(!t.type.startsWith("image/"))throw new Error("請選擇圖片檔案");const e=Date.now(),n=Math.random().toString(36).substr(2,9),r=`chatImages/${e}_${n}_${t.name.replace(/[^a-zA-Z0-9.-]/g,"_")}`;try{const s=qP(e2,r),i=await GP(s,t);return await KP(i.ref)}catch(s){throw console.error("上傳圖片失敗:",s),new Error("上傳失敗，請稍後再試")}},R2=t=>new Promise(e=>{const n=new FileReader;n.onload=r=>e(r.target.result),n.readAsDataURL(t)}),Z0=({message:t,isOwn:e,onReply:n})=>{const{setCurrentPrivateChat:r,setCurrentRoom:s}=It(),{user:i}=je(),[o,a]=E.useState(!1),[l,c]=E.useState(t.liked||!1),d=m=>{m.preventDefault(),m.stopPropagation();const _=u();_.uid!==(i==null?void 0:i.uid)&&(console.log("👆 頭像點擊 - 開始私聊:",_),r({roomId:`private_${_.uid}`,recipientId:_.uid,nickname:_.nickname,avatar:_.avatar,isOnline:!1}),s("private"))},u=()=>t.sender?{nickname:t.sender.nickname||t.sender.displayName||t.sender.name,avatar:t.sender.avatar||t.sender.photoURL,uid:t.sender.uid}:{nickname:t.user||t.senderName||t.nickname||t.userName||"匿名用戶",avatar:t.avatar||t.senderAvatar,uid:t.from||t.senderId||t.userId||t.uid},f=m=>{m.stopPropagation(),c(!l),console.log("💖 按讚訊息:",t.id,!l)},p=m=>{m.stopPropagation();try{if(n&&typeof n=="function"){const _=t.text||t.content||t.message||t.msg||"",x=u();n({id:t.id,text:_,sender:x.nickname}),console.log("💬 回覆訊息:",t.id)}else console.warn("⚠️ onReply 函數未提供或不是函數")}catch(_){console.error("回覆功能錯誤:",_),alert("回覆功能暫時無法使用，請稍後再試")}};if(!t)return null;const g=u();!g.nickname&&!g.uid&&console.warn("訊息缺少發送者信息:",t);const y=m=>{if(!m)return"";const _=/(https?:\/\/[^\s]+)/g;return m.split(_).map((C,I)=>C.match(_)?h.jsx("a",{href:C,target:"_blank",rel:"noopener noreferrer",className:"text-blue-500 hover:text-blue-600 underline break-all",onClick:N=>N.stopPropagation(),children:C},I):C)},w=m=>{const _=m||t.timestamp||t.time;if(!_)return"未知時間";let x;return typeof _=="number"?x=_:typeof _=="string"?x=new Date(_).getTime():_&&typeof _=="object"&&_.seconds?x=_.seconds*1e3+(_.nanoseconds||0)/1e6:x=Date.now(),isNaN(x)?"時間錯誤":new Date(x).toLocaleString("zh-TW",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1})},v=()=>{if(t.type==="vote")return h.jsx(P2,{voteData:t.content});const m=t.text||t.content||t.message||t.msg||"";return h.jsxs("div",{children:[t.image&&h.jsx("img",{src:t.image,alt:"分享的圖片",className:"max-w-sm rounded-lg mb-2 cursor-pointer hover:opacity-90 transition-opacity",onClick:()=>window.open(t.image,"_blank")}),m&&h.jsx("div",{className:"break-words",children:y(m)})]})};return h.jsx("div",{className:`flex ${e?"justify-end":"justify-start"} group`,onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),children:h.jsxs("div",{className:`flex items-start gap-3 max-w-[70%] ${e?"flex-row-reverse":""}`,children:[h.jsx("img",{src:g.avatar||`https://ui-avatars.com/api/?name=${encodeURIComponent(g.nickname||"匿名")}&background=56c596&color=fff`,alt:g.nickname||"匿名用戶",className:`w-8 h-8 rounded-full flex-shrink-0 mt-1 ${g.uid!==(i==null?void 0:i.uid)?"cursor-pointer hover:ring-2 hover:ring-sea-blue/50 transition-all duration-200":""}`,onClick:g.uid!==(i==null?void 0:i.uid)?d:void 0,title:g.uid!==(i==null?void 0:i.uid)?`點擊與 ${g.nickname} 私聊`:""}),h.jsxs("div",{className:`flex flex-col ${e?"items-end":"items-start"}`,children:[h.jsxs("p",{className:"text-xs text-gray-500 mb-1 px-1",children:[g.nickname||"匿名用戶",e&&h.jsx("span",{className:"text-blue-500",children:" (你)"})]}),h.jsxs("div",{className:`
              message-bubble relative
              ${e?"message-self bg-sea-blue text-white":"message-other bg-white text-gray-700 border border-gray-200"}
            `,children:[v(),h.jsx("div",{className:`text-xs mt-1 ${e?"text-sea-light":"text-gray-400"}`,children:w(t.timestamp||t.time)})]}),o&&h.jsxs("div",{className:`flex items-center gap-1 mt-1 opacity-0 group-hover:opacity-100 transition-opacity ${e?"flex-row-reverse":""}`,children:[h.jsx("button",{className:"p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors",onClick:f,title:"按讚",children:h.jsx(jh,{className:`w-3 h-3 transition-colors ${l?"text-red-500 fill-red-500":"text-gray-400 hover:text-red-500"}`})}),h.jsx("button",{className:"p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors",onClick:p,title:"回覆",children:h.jsx(Vn,{className:"w-3 h-3 text-gray-400 hover:text-blue-500"})})]})]})]})})},P2=({voteData:t})=>{const[e,n]=E.useState(null),r=(t==null?void 0:t.votes)||[],s=(t==null?void 0:t.options)||[],i=(t==null?void 0:t.question)||"投票問題",o=r.reduce((l,c)=>l+(c||0),0),a=l=>{e===null&&n(l)};return h.jsxs("div",{className:"bg-gray-50 dark:bg-gray-800 rounded-lg p-4 min-w-[250px]",children:[h.jsxs("h4",{className:"font-medium mb-3 text-gray-800 dark:text-gray-200",children:["📊 ",i]}),h.jsx("div",{className:"space-y-2",children:s.map((l,c)=>{const d=r[c]||0,u=o>0?d/o*100:0,f=e===c;return h.jsxs("button",{onClick:()=>a(c),disabled:e!==null,className:`
                w-full text-left p-3 rounded-lg border transition-colors relative overflow-hidden
                ${f?"border-sea-blue bg-sea-light text-sea-dark":"border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500"}
                ${e!==null?"cursor-default":"cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"}
              `,children:[e!==null&&h.jsx("div",{className:"absolute inset-0 bg-sea-blue/10 transition-all duration-500",style:{width:`${u}%`}}),h.jsxs("div",{className:"relative flex justify-between items-center",children:[h.jsx("span",{children:l}),e!==null&&h.jsxs("span",{className:"text-sm font-medium",children:[d," (",u.toFixed(1),"%)"]})]})]},c)})}),e!==null&&h.jsxs("p",{className:"text-xs text-gray-500 mt-2 text-center",children:["總投票數: ",o]})]})},O2=({onEmojiSelect:t,onClose:e})=>{const n=["😀","😃","😄","😁","😆","😅","😂","🤣","😊","😇","🙂","🙃","😉","😌","😍","🥰","😘","😗","😙","😚","😋","😛","😝","😜","🤪","🤨","🧐","🤓","😎","🤩","🥳","😏","😒","😞","😔","😟","😕","🙁","☹️","😣","😖","😫","😩","🥺","😢","😭","😤","😠","😡","🤬","🤯","😳","🥵","🥶","😱","😨","😰","😥","😓","🤗","🤔","🤭","🤫","🤥","😶","😐","😑","😬","🙄","😯","😦","😧","😮","😲","🥱","😴","🤤","😪","😵","🤐","🥴","🤢","🤮","🤧","😷","🤒","🤕","🤑","🤠","😈","👿","👹","👺","🤡","💩","👻","💀","☠️","👽","👾","🤖","🎃","😺","😸","😹","😻","😼","😽","🙀","😿","😾","❤️","🧡","💛","💚","💙","💜","🖤","🤍","🤎","💔","❣️","💕","💞","💓","💗","💖","💘","💝","💟","☮️","✝️","☪️","🕉️","☸️","✡️","🔯","🕎","☯️","☦️","🛐","⛎","♈","♉","♊","♋","♌","♍","♎","♏","♐","♑"];return h.jsxs("div",{className:"absolute bottom-full left-0 mb-2 bg-white dark:bg-dark-card rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-4 z-50",children:[h.jsx("div",{className:"grid grid-cols-8 gap-2 max-w-xs max-h-40 overflow-y-auto custom-scrollbar",children:n.map((r,s)=>h.jsx("button",{onClick:()=>t(r),className:"text-xl hover:bg-gray-100 dark:hover:bg-gray-700 rounded p-1 transition-colors",children:r},s))}),h.jsx("button",{onClick:e,className:"mt-2 text-xs text-gray-500 hover:text-gray-700 dark:hover:text-gray-300",children:"關閉"})]})},A2=({onSubmit:t,onClose:e})=>{const[n,r]=E.useState(""),[s,i]=E.useState(["",""]),o=()=>{s.length<6&&i([...s,""])},a=(d,u)=>{const f=[...s];f[d]=u,i(f)},l=d=>{if(s.length>2){const u=s.filter((f,p)=>p!==d);i(u)}},c=()=>{const d=s.filter(u=>u.trim());if(!n.trim()){alert("請輸入投票問題");return}if(d.length<2){alert("至少需要兩個選項");return}t({question:n.trim(),options:d,votes:new Array(d.length).fill(0),voters:{}})};return h.jsxs("div",{className:"absolute bottom-full left-0 right-0 mb-2 bg-white dark:bg-dark-card rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-4 z-50",children:[h.jsxs("div",{className:"flex justify-between items-center mb-4",children:[h.jsx("h3",{className:"font-semibold text-gray-800 dark:text-gray-200",children:"建立投票"}),h.jsx("button",{onClick:e,className:"text-gray-500 hover:text-gray-700 dark:hover:text-gray-300",children:h.jsx(fs,{className:"w-5 h-5"})})]}),h.jsxs("div",{className:"mb-4",children:[h.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",children:"投票問題"}),h.jsx("input",{type:"text",value:n,onChange:d=>r(d.target.value),placeholder:"輸入你的問題...",className:`w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                     focus:ring-2 focus:ring-sea-blue/20 focus:border-sea-blue 
                     bg-white dark:bg-gray-700 dark:text-gray-200 outline-none`})]}),h.jsxs("div",{className:"mb-4",children:[h.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",children:"選項"}),h.jsx("div",{className:"space-y-2",children:s.map((d,u)=>h.jsxs("div",{className:"flex gap-2",children:[h.jsx("input",{type:"text",value:d,onChange:f=>a(u,f.target.value),placeholder:`選項 ${u+1}`,className:`flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                           focus:ring-2 focus:ring-sea-blue/20 focus:border-sea-blue 
                           bg-white dark:bg-gray-700 dark:text-gray-200 outline-none`}),s.length>2&&h.jsx("button",{onClick:()=>l(u),className:`px-3 py-2 text-red-500 hover:text-red-700 hover:bg-red-50 
                             dark:hover:bg-red-900/20 rounded-lg transition-colors`,children:h.jsx(fs,{className:"w-4 h-4"})})]},u))}),s.length<6&&h.jsxs("button",{onClick:o,className:"mt-2 flex items-center gap-2 text-sm text-sea-blue hover:text-sea-dark transition-colors",children:[h.jsx(v2,{className:"w-4 h-4"}),"新增選項"]})]}),h.jsxs("div",{className:"flex gap-2 justify-end",children:[h.jsx("button",{onClick:e,className:`px-4 py-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 
                     dark:hover:text-gray-200 border border-gray-300 dark:border-gray-600 
                     rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors`,children:"取消"}),h.jsx("button",{onClick:c,className:`px-4 py-2 bg-sea-blue hover:bg-sea-dark text-white rounded-lg 
                     transition-colors font-medium`,children:"建立投票"})]})]})},L2=({roomId:t})=>{var A,Pe;const{user:e}=je(),{messages:n}=It(),{sendMessage:r}=N2(t),[s,i]=E.useState(""),[o,a]=E.useState(!1),[l,c]=E.useState(!1),[d,u]=E.useState(null),[f,p]=E.useState(!1),[g,y]=E.useState(null),w=E.useRef(null),v=E.useRef(null);E.useEffect(()=>{const Ie=setTimeout(()=>{if(w.current){const Ne=w.current.parentElement;Ne&&(Ne.scrollTop=Ne.scrollHeight)}},100);return()=>clearTimeout(Ie)},[n]),T2();const m={chat:{name:"閒聊區",tip:"歡迎隨意聊聊、發問、抒發生活大小事。"},love:{name:"找伴區",tip:"你正在找伴專區，請多用心互動，彼此尊重。"},sex:{name:"約炮區",tip:"匿名聊性、約炮自由，但請勿冒犯他人。"}},_=()=>{var W;(W=w.current)==null||W.scrollIntoView({behavior:"smooth"})};E.useEffect(()=>{_()},[n]);const x=async W=>{var Ie;if(W.preventDefault(),!(!s.trim()&&!d))try{let Ne=null;d&&((Ie=v.current)!=null&&Ie.files[0])&&(p(!0),Ne=await b2(v.current.files[0]));const Il={type:"text",content:s.trim(),image:Ne};await r(Il),i(""),u(null),a(!1),v.current&&(v.current.value=""),Ee.success("訊息已發送")}catch(Ne){Ee.error("發送失敗: "+Ne.message)}finally{p(!1)}},C=async W=>{const Ie=W.target.files[0];if(Ie)try{const Ne=await R2(Ie);u(Ne)}catch{Ee.error("圖片預覽失敗")}},I=W=>{i(Ie=>Ie+W),a(!1)},N=W=>{y(W),i(`@${W.sender} `)},R=()=>{y(null),i("")},B=n;return h.jsxs("div",{className:"flex flex-col h-screen pt-16 md:pt-0",children:[h.jsxs("div",{className:"bg-white/70 dark:bg-dark-card/70 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 p-4",children:[h.jsx("h2",{className:"text-xl font-semibold text-gray-800 dark:text-dark-text mb-1",children:((A=m[t])==null?void 0:A.name)||"聊天室"}),((Pe=m[t])==null?void 0:Pe.tip)&&h.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:m[t].tip})]}),h.jsxs("div",{className:"flex-1 overflow-y-auto overflow-x-hidden p-4 space-y-4 custom-scrollbar",children:[B.length===0?h.jsx("div",{className:"text-center text-gray-500 mt-8",children:h.jsx("p",{children:"還沒有訊息，開始聊天吧！"})}):B.map((W,Ie)=>{var Ne;return h.jsx(Z0,{message:W,isOwn:((Ne=W.sender)==null?void 0:Ne.uid)===(e==null?void 0:e.uid)||W.from===(e==null?void 0:e.uid),onReply:N},W.id)}),h.jsx("div",{ref:w})]}),d&&h.jsx("div",{className:"p-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700",children:h.jsxs("div",{className:"relative inline-block",children:[h.jsx("img",{src:d,alt:"Preview",className:"max-w-xs rounded-lg"}),h.jsx("button",{onClick:()=>u(null),className:"absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600",children:h.jsx(fs,{className:"w-4 h-4"})})]})}),g&&h.jsx("div",{className:"bg-blue-50 dark:bg-blue-900/20 border-t border-blue-200 dark:border-blue-700 p-3",children:h.jsxs("div",{className:"flex items-center justify-between",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx(Vn,{className:"w-4 h-4 text-blue-500"}),h.jsxs("span",{className:"text-sm text-blue-600 dark:text-blue-400",children:["回覆 ",g.sender]}),h.jsx("span",{className:"text-sm text-gray-500 truncate max-w-xs",children:g.text})]}),h.jsx("button",{onClick:R,className:"p-1 hover:bg-blue-200 dark:hover:bg-blue-800 rounded transition-colors",children:h.jsx(fs,{className:"w-4 h-4 text-blue-500"})})]})}),h.jsxs("div",{className:"bg-white/70 dark:bg-dark-card/70 backdrop-blur-sm border-t border-gray-200 dark:border-gray-700 p-4",children:[h.jsxs("form",{onSubmit:x,className:"flex items-end gap-2",children:[h.jsxs("div",{className:"flex gap-1",children:[h.jsx("button",{type:"button",onClick:()=>{var W;return(W=v.current)==null?void 0:W.click()},className:"p-2 rounded-lg text-gray-500 hover:text-sea-blue hover:bg-sea-light/50 transition-colors",title:"上傳圖片",children:h.jsx(f2,{className:"w-5 h-5"})}),h.jsx("button",{type:"button",onClick:()=>a(!o),className:"p-2 rounded-lg text-gray-500 hover:text-sea-blue hover:bg-sea-light/50 transition-colors",title:"表情符號",children:h.jsx(x2,{className:"w-5 h-5"})}),h.jsx("button",{type:"button",onClick:()=>c(!l),className:"p-2 rounded-lg text-gray-500 hover:text-sea-blue hover:bg-sea-light/50 transition-colors",title:"建立投票",children:h.jsx(a2,{className:"w-5 h-5"})})]}),h.jsx("div",{className:"flex-1",children:h.jsx("input",{type:"text",value:s,onChange:W=>i(W.target.value),placeholder:"輸入訊息...",className:`w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 
                         focus:ring-2 focus:ring-sea-blue/20 focus:border-sea-blue 
                         bg-white dark:bg-dark-card dark:text-dark-text outline-none`})}),h.jsx("button",{type:"submit",disabled:!s.trim()&&!d||f,className:`p-3 bg-sea-blue hover:bg-sea-dark text-white rounded-lg 
                     disabled:opacity-50 disabled:cursor-not-allowed transition-colors`,children:f?h.jsx("div",{className:"w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"}):h.jsx(X0,{className:"w-5 h-5"})}),h.jsx("input",{ref:v,type:"file",accept:"image/*",onChange:C,className:"hidden"})]}),o&&h.jsx(O2,{onEmojiSelect:I,onClose:()=>a(!1)}),l&&h.jsx(A2,{onSubmit:async W=>{try{await r({type:"vote",content:W}),c(!1),Ee.success("投票已建立")}catch{Ee.error("建立投票失敗")}},onClose:()=>c(!1)})]})]})},D2=t=>{const{user:e}=je(),{setMessages:n,clearMessages:r}=It();return E.useEffect(()=>{if(console.log("🔍 usePrivateChat 參數檢查:"),console.log("  - hasUser:",!!e),console.log("  - userUid:",e==null?void 0:e.uid),console.log("  - recipientId:",t),console.log("  - recipientIdType:",typeof t),console.log("  - recipientIdValue:",String(t)),!e||!t){console.log("⚠️ usePrivateChat: 缺少必要參數"),console.log("  - user exists:",!!e),console.log("  - recipientId:",t);return}const i=[e.uid,t].sort(),o=`${i[0]}_${i[1]}`,a=`privateChats/${o}/messages`;console.log("🚀 開始監聽私聊:",{userUid:e.uid,recipientId:t,chatId:o,fullPath:a,sortedIds:i}),r(),console.log("🧹 已清空現有訊息，準備載入私聊訊息");const l=ie(oe,`privateChats/${o}/messages`),c=Rh(l,d=>{try{const u=d.val();if(console.log(`💌 私聊 ${o} 收到資料:`,u),u){const f=Object.entries(u).map(([p,g])=>({id:p,text:g.text,user:g.user,from:g.from,avatar:g.avatar,time:g.time,timestamp:g.time||g.timestamp||Date.now()}));f.sort((p,g)=>(p.time||p.timestamp||0)-(g.time||g.timestamp||0)),console.log(`✅ 私聊 ${o} 載入了 ${f.length} 條訊息`),n(f)}else console.log(`📭 私聊 ${o} 沒有訊息`),n([])}catch(u){console.error(`❌ 私聊 ${o} 載入訊息時出錯:`,u),n([])}},d=>{console.error(`❌ Firebase onValue 錯誤 (私聊 ${o}):`,d),d.code==="PERMISSION_DENIED"&&console.error("🚫 權限被拒絕 - 請檢查 Firebase 安全規則!")});return()=>{try{console.log(`🛑 停止監聽私聊 ${o} 的訊息`),c()}catch(d){console.error("Firebase unsubscribe error:",d)}}},[e,t,n,r]),{sendPrivateMessage:async i=>{if(!e||!t)return;const o=[e.uid,t].sort(),a=`${o[0]}_${o[1]}`,l=ie(oe,`privateChats/${a}/messages`),c={text:i.text||i.message,user:e.nickname||e.displayName||"匿名用戶",from:e.uid,avatar:e.avatar||null,time:Date.now()};try{console.log(`📤 發送私人訊息到 ${a}:`,c),await R0(l,c)}catch(d){throw console.error(`❌ 發送私人訊息失敗 (${a}):`,d),d}}}},M2=()=>{const{user:t}=je();return{testFirebaseConnection:async()=>{if(!t){console.log("❌ 沒有登入用戶");return}console.log("🧪 開始 Firebase 連接測試..."),console.log("👤 當前用戶:",t.uid);try{console.log("🧪 測試 1: 檢查用戶基本資料");const n=ie(oe,`users/${t.uid}`),r=await tt(n);console.log("📊 用戶資料存在:",r.exists()),r.exists()&&console.log("📋 用戶資料:",r.val()),console.log("🧪 測試 2: 檢查好友資料");const s=ie(oe,`users/${t.uid}/friends`),i=await tt(s);console.log("👥 好友資料存在:",i.exists()),i.exists()&&console.log("📋 好友資料:",i.val()),console.log("🧪 測試 3: 檢查所有用戶");const o=ie(oe,"users"),a=await tt(o);if(a.exists()){const d=a.val();console.log("👥 所有用戶列表:",Object.keys(d));const u="ykw8Q4X6sMNFKNhCeXw5SwUORwd2";d[u]&&console.log("✅ 找到示例用戶:",d[u])}console.log("🧪 測試 4: 檢查私聊資料");const l=ie(oe,"privateChats"),c=await tt(l);if(c.exists()){const d=c.val();console.log("💬 所有私聊房間:",Object.keys(d));const u=Object.keys(d).filter(p=>p.includes(t.uid));console.log("💬 包含當前用戶的私聊:",u);const f=Object.keys(d).find(p=>p.includes("ykw8Q4X6sMNFKNhCeXw5SwUORwd2"));if(f){console.log("💬 找到示例私聊房間:",f);const p=d[f];p.messages&&console.log("📝 示例房間訊息數量:",Object.keys(p.messages).length)}}}catch(n){console.error("❌ Firebase 測試失敗:",n),n.code==="PERMISSION_DENIED"&&console.error("🚫 權限被拒絕 - 用戶可能沒有正確認證")}}}},ew=()=>{const{user:t}=je(),[e,n]=E.useState([]),[r,s]=E.useState(!0);return E.useEffect(()=>{if(!(t!=null&&t.uid)){console.log("⚠️ usePrivateChatsList: 沒有用戶 UID"),n([]),s(!1);return}console.log(`🚀 開始載入用戶 ${t.uid} 的私聊列表...`),(async()=>{try{s(!0);const o=ie(oe,"privateChats"),a=await tt(o);if(!a.exists()){console.log("📭 沒有找到任何私聊房間"),n([]),s(!1);return}const l=a.val(),d=Object.keys(l).filter(g=>g.includes(t.uid));if(console.log(`💬 找到 ${d.length} 個包含用戶的私聊房間:`,d.slice(0,5),"..."),d.length===0){n([]),s(!1);return}console.log(`🚀 開始處理全部 ${d.length} 個私聊房間...`);const u=d.map(async g=>{try{const w=g.split("_").find(I=>I!==t.uid);if(!w)return console.log(`⚠️ 無法解析私聊房間 ${g} 的對方用戶`),null;const[v,m]=await Promise.all([tt(ie(oe,`users/${w}`)),tt(ie(oe,`privateChats/${g}/messages`))]);if(!v.exists())return console.log(`⚠️ 對方用戶 ${w} 不存在`),null;const _=v.val();let x="開始對話...",C=null;if(m.exists()){const I=m.val(),N=Object.entries(I);if(N.length>0){const R=N.sort(([,A],[,Pe])=>(Pe.time||0)-(A.time||0)),[,B]=R[0];x=B.text||"訊息",C=B.time}}return{id:g,recipientId:w,nickname:_.nickname||"匿名用戶",avatar:_.avatar,isOnline:_.online||!1,lastMessage:x,lastMessageTime:C}}catch(y){return console.error(`❌ 處理私聊房間 ${g} 時出錯:`,y),null}}),p=(await Promise.all(u)).filter(g=>g!==null);p.sort((g,y)=>(y.lastMessageTime||0)-(g.lastMessageTime||0)),console.log(`✅ 成功載入 ${p.length} 個私聊對話`),n(p)}catch(o){console.error("❌ 載入私聊列表失敗:",o),n([])}finally{s(!1)}})()},[t==null?void 0:t.uid]),{privateChatsList:e,loading:r,refreshList:()=>{t!=null&&t.uid&&(s(!0),n([]))}}},j2=async(t,e)=>{if(!t||!e)throw new Error("用戶ID不能為空");if(t===e)throw new Error("不能加自己為好友");try{console.log(`發送好友請求: ${t} -> ${e}`),await Ui(ie(oe,`users/${e}/friendRequests/${t}`),!0),console.log("✅ 好友請求已發送")}catch(n){throw console.error("❌ 發送好友請求失敗:",n),n}},Nm=()=>{const{user:t}=je(),{currentPrivateChat:e,setCurrentPrivateChat:n,setCurrentRoom:r,messages:s}=It(),{privateChatsList:i,loading:o,refreshList:a}=ew(),[l,c]=E.useState(""),d=E.useRef(null),{sendPrivateMessage:u}=D2(e==null?void 0:e.recipientId),{testFirebaseConnection:f}=M2();console.log("💬 PrivateChat 狀態:",{currentPrivateChat:!!e,nickname:e==null?void 0:e.nickname,messagesCount:s.length,privateChatsListCount:i.length,chatsLoading:o}),E.useEffect(()=>{d.current&&d.current.scrollIntoView({behavior:"smooth"})},[s]);const p=async()=>{if(!(!(t!=null&&t.uid)||!(e!=null&&e.recipientId)))try{await j2(t.uid,e.recipientId),Ee.success(`好友請求已發送給 ${e.nickname}！`)}catch(w){console.error("發送好友請求失敗:",w),w.message.includes("不能加自己")?Ee.error("不能加自己為好友"):Ee.error("發送好友請求失敗: "+w.message)}},g=()=>{n(null)},y=async()=>{if(!(!l.trim()||!e))try{await u({text:l.trim(),type:"text"}),c("")}catch(w){console.error("發送私訊失敗:",w)}};return e?h.jsxs("div",{className:"flex flex-col h-screen pt-16 md:pt-0",children:[h.jsx("div",{className:"bg-white/70 dark:bg-dark-card/70 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 p-4",children:h.jsxs("div",{className:"flex items-center justify-between",children:[h.jsxs("div",{className:"flex items-center gap-3",children:[h.jsx("button",{onClick:g,className:"p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors",title:"返回私聊列表",children:h.jsx(Q0,{className:"w-5 h-5"})}),h.jsx("img",{src:e.avatar||`https://ui-avatars.com/api/?name=${e.nickname}&background=56c596&color=fff`,alt:e.nickname,className:"w-10 h-10 rounded-full"}),h.jsxs("div",{children:[h.jsx("h2",{className:"font-semibold text-gray-800 dark:text-dark-text",children:e.nickname}),h.jsx("p",{className:"text-sm text-gray-500",children:"私人對話"})]})]}),h.jsx("button",{onClick:p,className:"px-3 py-1 text-sm bg-sea-blue text-white rounded-lg hover:bg-sea-blue/90 transition-colors",title:"加為好友",children:"➕ 加好友"})]})}),h.jsxs("div",{className:"flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar",children:[s.length===0?h.jsxs("div",{className:"text-center text-gray-500 mt-8",children:[h.jsx(Vn,{className:"w-16 h-16 mx-auto mb-4 text-gray-300"}),h.jsx("p",{children:"還沒有私訊記錄"}),h.jsxs("p",{className:"text-sm",children:["開始和 ",e.nickname," 聊天吧！"]})]}):s.map(w=>{var v;return h.jsx(Z0,{message:w,isOwn:((v=w.sender)==null?void 0:v.uid)===(t==null?void 0:t.uid)||w.from===(t==null?void 0:t.uid)},w.id)}),h.jsx("div",{ref:d})]}),h.jsx("div",{className:"bg-white/70 dark:bg-dark-card/70 backdrop-blur-sm border-t border-gray-200 dark:border-gray-700 p-4",children:h.jsxs("div",{className:"flex gap-2",children:[h.jsx("input",{type:"text",value:l,onChange:w=>c(w.target.value),onKeyPress:w=>w.key==="Enter"&&y(),placeholder:`傳訊息給 ${e.nickname}...`,className:`flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 
                         focus:ring-2 focus:ring-sea-blue/20 focus:border-sea-blue 
                         bg-white dark:bg-dark-card dark:text-dark-text outline-none`}),h.jsxs("button",{onClick:y,disabled:!l.trim(),className:"px-6 py-3 bg-sea-blue hover:bg-sea-dark disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg transition-colors flex items-center gap-2",children:[h.jsx(X0,{className:"w-4 h-4"}),"發送"]})]})})]}):h.jsxs("div",{className:"flex flex-col h-screen pt-16 md:pt-0",children:[h.jsx("div",{className:"bg-white/70 dark:bg-dark-card/70 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 p-4",children:h.jsxs("div",{className:"flex items-center justify-between",children:[h.jsxs("div",{children:[h.jsxs("h2",{className:"text-xl font-semibold text-gray-800 dark:text-dark-text mb-1",children:["私人訊息 (",i.length,")"]}),h.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"點選對話開始私訊"})]}),h.jsx("button",{onClick:()=>{console.log("🔄 重新載入私聊列表..."),a()},className:"px-3 py-1 text-xs bg-sea-blue text-white rounded-lg hover:bg-sea-dark transition-colors",children:"🔄 重新載入"})]})}),h.jsx("div",{className:"flex-1 overflow-y-auto",children:o?h.jsxs("div",{className:"flex items-center justify-center h-64",children:[h.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-sea-blue"}),h.jsx("span",{className:"ml-2 text-gray-500",children:"載入私聊列表中..."})]}):i.length===0?h.jsxs("div",{className:"flex flex-col items-center justify-center h-full text-gray-500",children:[h.jsx(Vn,{className:"w-16 h-16 mb-4 text-gray-300"}),h.jsx("p",{className:"text-lg mb-2",children:"還沒有私訊"}),h.jsxs("p",{className:"text-sm text-center px-4 mb-4",children:["在聊天室中點擊其他用戶的頭像",h.jsx("br",{}),"就可以開始私人對話"]}),h.jsxs("div",{className:"flex flex-col gap-2",children:[h.jsx("button",{onClick:()=>{const w={uid:"ykw8Q4X6sMNFKNhCeXw5SwUORwd2",nickname:"hand",avatar:"https://firebasestorage.googleapis.com/v0/b/lalaland-24931.firebasestorage.app/o/avatars%2F1750609471297_14FA7E2F-A644-4D66-9586-C274F37B3E56.png?alt=media&token=f1b79a53-5061-4941-9ec9-9ca132e0fbb9"};console.log("🧪 測試私聊 - 當前用戶:",t.uid),console.log("🧪 測試私聊 - 目標用戶:",w.uid),console.log("🧪 預期房間ID:",`${[t.uid,w.uid].sort().join("_")}`);const v={roomId:`private_${w.uid}`,recipientId:w.uid,nickname:w.nickname,avatar:w.avatar,isOnline:!1};console.log("🧪 設置私聊狀態:",v),n(v)},className:"px-4 py-2 bg-sea-blue text-white rounded-lg hover:bg-sea-dark transition-colors",children:"🧪 測試私聊功能"}),h.jsx("button",{onClick:f,className:"px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors",children:"🔧 診斷 Firebase 連接"}),h.jsx("button",{onClick:async()=>{const w=await addFriendForTesting(t.uid,"ykw8Q4X6sMNFKNhCeXw5SwUORwd2");alert(w?"✅ 成功添加測試好友！請重新載入頁面查看好友列表。":"❌ 添加好友失敗，請查看控制台錯誤訊息。")},className:"px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors",children:"👥 添加測試好友"})]})]}):h.jsx("div",{className:"p-4 space-y-2",children:i.map(w=>h.jsxs("div",{onClick:()=>n(w),className:"flex items-center gap-3 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer transition-colors",children:[h.jsx("img",{src:w.avatar||`https://ui-avatars.com/api/?name=${w.nickname}&background=56c596&color=fff`,alt:w.nickname,className:"w-12 h-12 rounded-full"}),h.jsxs("div",{className:"flex-1",children:[h.jsx("h3",{className:"font-medium text-gray-800 dark:text-gray-200",children:w.nickname}),h.jsx("p",{className:"text-sm text-gray-500 truncate",children:w.lastMessage||"開始對話..."})]}),h.jsx("div",{className:"text-xs text-gray-400",children:w.lastMessageTime&&new Date(w.lastMessageTime).toLocaleTimeString("zh-TW",{hour:"2-digit",minute:"2-digit"})})]},w.id))})}),h.jsx("div",{className:"p-4 text-center",children:h.jsx("button",{onClick:()=>r("friends"),className:"text-sea-blue hover:text-sea-dark text-sm font-medium transition-colors",children:"前往好友列表 →"})})]})},F2=()=>{const{user:t}=je(),[e,n]=E.useState([]),[r,s]=E.useState(!0);return E.useEffect(()=>{if(!(t!=null&&t.uid)){console.log("⚠️ useFriends: 沒有用戶 UID"),n([]),s(!1);return}console.log(`🚀 開始載入用戶 ${t.uid} 的好友列表...`),console.log(`🔍 好友資料路徑: users/${t.uid}/friends`);const i=ie(oe,`users/${t.uid}/friends`),o=Rh(i,async a=>{try{s(!0);const l=a.val()||{};if(console.log(`👥 用戶 ${t.uid} 的好友資料:`,l),console.log(`👥 Snapshot exists: ${a.exists()}, friendsData keys:`,Object.keys(l)),Object.keys(l).length>0){const c=Object.keys(l);console.log(`📋 找到 ${c.length} 個好友 ID:`,c);const d=[];for(const u of c){const f=await tt(ie(oe,`users/${u}`));if(f.exists()){const p=f.val();console.log(`✅ 載入好友 ${u} 的資料:`,p),d.push({uid:u,nickname:p.nickname||"匿名用戶",avatar:p.avatar,online:p.online||!1,lastActive:p.lastActive})}else console.log(`⚠️ 好友 ${u} 的資料不存在`)}console.log(`✅ 成功載入 ${d.length} 個好友`),n(d)}else console.log(`📭 用戶 ${t.uid} 沒有好友欄位`),n([])}catch(l){console.error("❌ 載入好友列表失敗:",l),console.error("🔍 錯誤詳細資訊:",{code:l.code,message:l.message,stack:l.stack}),l.code==="PERMISSION_DENIED"&&console.error("🚫 權限被拒絕 - 請檢查 Firebase 安全規則!"),n([])}finally{s(!1)}},a=>{console.error("❌ Firebase onValue 錯誤 (好友列表):",a),s(!1)});return()=>o()},[t==null?void 0:t.uid]),{friends:e,loading:r}},U2=()=>{const{setCurrentRoom:t,setCurrentPrivateChat:e}=It(),{user:n}=je(),{friends:r,loading:s}=F2();ew(),console.log("👥 FriendsList 狀態:",{friendsCount:r.length,loading:s,friends:r});const i=o=>{console.log("🚀 開始私聊:",o),e({roomId:`private_${o.uid}`,recipientId:o.uid,nickname:o.nickname,avatar:o.avatar,isOnline:o.isOnline}),t("private")};return h.jsxs("div",{className:"flex flex-col h-screen pt-16 md:pt-0",children:[h.jsxs("div",{className:"bg-white/70 dark:bg-dark-card/70 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 p-4",children:[h.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[h.jsx(Fh,{className:"w-6 h-6 text-sea-blue"}),h.jsx("h2",{className:"text-xl font-semibold text-gray-800 dark:text-dark-text",children:"我的好友"})]}),h.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"點選好友開始私人對話"})]}),h.jsx("div",{className:"flex-1 overflow-y-auto",children:s?h.jsxs("div",{className:"flex flex-col items-center justify-center h-full text-gray-500",children:[h.jsx(p2,{className:"w-8 h-8 animate-spin mb-4"}),h.jsx("p",{children:"載入好友列表中..."})]}):r.length===0?h.jsxs("div",{className:"flex flex-col items-center justify-center h-full text-gray-500",children:[h.jsx(zu,{className:"w-16 h-16 mb-4 text-gray-300"}),h.jsx("p",{className:"text-lg mb-2",children:"還沒有好友"}),h.jsxs("p",{className:"text-sm text-center px-4",children:["在聊天室中點擊其他用戶頭像",h.jsx("br",{}),"可以加為好友"]})]}):h.jsxs("div",{className:"p-4",children:[h.jsx("div",{className:"space-y-3",children:r.map(o=>h.jsxs("div",{className:"flex items-center gap-4 p-4 bg-white dark:bg-dark-card rounded-xl shadow-soft hover:shadow-medium transition-all cursor-pointer group",onClick:()=>i(o),children:[h.jsxs("div",{className:"relative",children:[h.jsx("img",{src:o.avatar||`https://ui-avatars.com/api/?name=${encodeURIComponent(o.nickname||"用戶")}&background=56c596&color=fff`,alt:o.nickname||"用戶",className:"w-14 h-14 rounded-full border-3 border-accent-green shadow-medium"}),h.jsx("div",{className:`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${o.isOnline?"bg-accent-green":"bg-gray-400"}`})]}),h.jsxs("div",{className:"flex-1",children:[h.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[h.jsx("h3",{className:"font-semibold text-gray-800 dark:text-gray-200 text-lg",children:o.nickname}),o.isOnline&&h.jsx("span",{className:"text-xs px-2 py-1 bg-accent-green/20 text-accent-green rounded-full",children:"在線"})]}),h.jsxs("div",{className:"flex items-center gap-1 text-sm text-gray-500",children:[h.jsx("span",{className:`w-2 h-2 rounded-full ${o.isOnline?"bg-accent-green":"bg-gray-400"}`}),h.jsx("span",{children:o.isOnline?"在線中":`最後上線: ${new Date(o.lastSeen).toLocaleString("zh-TW")}`})]})]}),h.jsx("div",{className:"opacity-0 group-hover:opacity-100 transition-opacity",children:h.jsxs("button",{onClick:a=>{a.stopPropagation(),i(o)},className:"flex items-center gap-2 px-4 py-2 bg-sea-blue hover:bg-sea-dark text-white rounded-lg transition-colors font-medium shadow-soft",children:[h.jsx(Vn,{className:"w-4 h-4"}),"聊天"]})})]},o.uid))}),h.jsx("div",{className:"mt-8 p-6 bg-gradient-to-r from-sea-light to-accent-green/20 rounded-xl border border-sea-light",children:h.jsxs("div",{className:"text-center",children:[h.jsx(zu,{className:"w-12 h-12 text-sea-blue mx-auto mb-3"}),h.jsx("h4",{className:"font-semibold text-gray-800 mb-2",children:"想要更多好友？"}),h.jsx("p",{className:"text-sm text-gray-600 mb-4",children:"前往聊天室與其他用戶互動，點擊他們的頭像即可加為好友"}),h.jsxs("div",{className:"space-y-2",children:[h.jsx("button",{onClick:()=>t("chat"),className:"btn-primary w-full",children:"前往聊天室"}),h.jsx("button",{onClick:handleAddSampleFriends,className:"btn-secondary w-full text-sm",children:"📝 添加範例好友"})]})]})})]})})]})},$2=()=>{const{currentRoom:t,currentPrivateChat:e}=It(),n=()=>t==="friends"?h.jsx(U2,{}):t==="private"?e?h.jsx(Nm,{}):h.jsx(Nm,{}):h.jsx(L2,{roomId:t});return h.jsx("div",{className:"flex-1 flex flex-col",children:n()})},z2=()=>{const{sidebarOpen:t,setSidebarOpen:e,darkMode:n,toggleDarkMode:r}=It(),{user:s}=je();return h.jsx("div",{className:"md:hidden fixed top-0 left-0 right-0 z-40 bg-white/90 dark:bg-dark-card/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700",children:h.jsxs("div",{className:"flex items-center justify-between px-4 py-3",children:[h.jsxs("div",{className:"flex items-center gap-3",children:[h.jsx("button",{onClick:()=>e(!t),className:"p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors",children:t?h.jsx(fs,{className:"w-5 h-5"}):h.jsx(_2,{className:"w-5 h-5"})}),h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("img",{src:"/icon-512.png",alt:"LalaLand",className:"w-8 h-8 rounded-lg"}),h.jsx("h1",{className:"font-semibold text-gray-800 dark:text-dark-text",children:"LalaLand"})]})]}),h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("button",{onClick:r,className:"p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors",children:n?h.jsx(J0,{className:"w-5 h-5"}):h.jsx(Y0,{className:"w-5 h-5"})}),s&&h.jsx("img",{src:s.avatar||`https://ui-avatars.com/api/?name=${s.nickname}&background=2877b9&color=fff`,alt:s.nickname,className:"w-8 h-8 rounded-full border-2 border-sea-blue"})]})]})})},wc=()=>{const{darkMode:t}=It(),{user:e}=je();return E.useEffect(()=>{t?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},[t]),E.useEffect(()=>{e&&C2(e)},[e]),h.jsxs("div",{className:"h-screen flex bg-earth-beige dark:bg-dark-bg",children:[h.jsx(z2,{}),h.jsx(I2,{}),h.jsx($2,{})]})},B2=()=>{const{user:t}=je(),[e,n]=E.useState(""),[r,s]=E.useState(!1),i=async()=>{s(!0),n("");try{console.log("🔍 開始完整偵錯..."),await t2(),n("偵錯完成，請檢查瀏覽器控制台查看詳細結果")}catch(l){n(`偵錯失敗: ${l.message}`)}finally{s(!1)}},o=async()=>{const l=prompt("請輸入房間 ID (如: casual, dating, hookup):");if(l){s(!0);try{const c=await n2(l);n(c?`房間 ${l} 找到 ${Object.keys(c).length} 條訊息`:`房間 ${l} 沒有訊息`)}catch(c){n(`偵錯房間失敗: ${c.message}`)}finally{s(!1)}}},a=async()=>{if(!(t!=null&&t.uid)){n("請先登入");return}s(!0);try{const l=await r2(t.uid);n(l?`用戶 ${t.uid} 有 ${Object.keys(l).length} 個好友`:`用戶 ${t.uid} 沒有好友`)}catch(l){n(`偵錯好友失敗: ${l.message}`)}finally{s(!1)}};return h.jsx("div",{className:"min-h-screen bg-gray-100 dark:bg-gray-900 p-4",children:h.jsxs("div",{className:"max-w-2xl mx-auto",children:[h.jsx("h1",{className:"text-2xl font-bold text-gray-900 dark:text-white mb-6",children:"Firebase 偵錯工具"}),t&&h.jsxs("div",{className:"mb-6 p-4 bg-white dark:bg-gray-800 rounded-lg shadow",children:[h.jsx("h2",{className:"text-lg font-semibold text-gray-900 dark:text-white mb-2",children:"當前用戶"}),h.jsxs("p",{className:"text-gray-600 dark:text-gray-300",children:["UID: ",t.uid]}),h.jsxs("p",{className:"text-gray-600 dark:text-gray-300",children:["暱稱: ",t.nickname]})]}),h.jsxs("div",{className:"space-y-4",children:[h.jsx("button",{onClick:i,disabled:r,className:"w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50",children:r?"偵錯中...":"完整偵錯 (檢查控制台)"}),h.jsx("button",{onClick:o,disabled:r,className:"w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50",children:"偵錯特定房間"}),t&&h.jsx("button",{onClick:a,disabled:r,className:"w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50",children:"偵錯我的好友"})]}),e&&h.jsxs("div",{className:"mt-6 p-4 bg-white dark:bg-gray-800 rounded-lg shadow",children:[h.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-white mb-2",children:"偵錯結果"}),h.jsx("pre",{className:"text-sm text-gray-600 dark:text-gray-300 whitespace-pre-wrap",children:e})]}),h.jsxs("div",{className:"mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg",children:[h.jsx("h3",{className:"text-lg font-semibold text-yellow-800 dark:text-yellow-200 mb-2",children:"說明"}),h.jsx("p",{className:"text-yellow-700 dark:text-yellow-300 text-sm",children:'如果看到 "permission_denied" 錯誤，請在 Firebase Console 中更新安全規則。 參考專案中的 FIREBASE_SETUP.md 文件。'})]})]})})},W2=()=>h.jsx("div",{className:"fixed inset-0 bg-gradient-to-br from-earth-beige to-white flex items-center justify-center z-50",children:h.jsxs("div",{className:"text-center",children:[h.jsx("img",{src:"/icon-512.png",alt:"LalaLand",className:"w-32 h-32 mx-auto mb-6 animate-float"}),h.jsx("h1",{className:"text-3xl font-bold text-sea-dark mb-2",children:"LalaLand"}),h.jsx("p",{className:"text-gray-600",children:"載入中..."}),h.jsx("div",{className:"mt-6",children:h.jsxs("div",{className:"flex justify-center space-x-1",children:[h.jsx("div",{className:"w-2 h-2 bg-sea-blue rounded-full animate-bounce"}),h.jsx("div",{className:"w-2 h-2 bg-sea-blue rounded-full animate-bounce",style:{animationDelay:"0.1s"}}),h.jsx("div",{className:"w-2 h-2 bg-sea-blue rounded-full animate-bounce",style:{animationDelay:"0.2s"}})]})})]})});class V2 extends Ba.Component{constructor(n){super(n);Uh(this,"handleReload",()=>{window.location.reload()});this.state={hasError:!1,error:null,errorInfo:null}}static getDerivedStateFromError(n){return{hasError:!0}}componentDidCatch(n,r){console.error("ErrorBoundary caught an error:",n,r),this.setState({error:n,errorInfo:r})}render(){return this.state.hasError?h.jsx("div",{className:"min-h-screen flex items-center justify-center bg-earth-beige p-4",children:h.jsxs("div",{className:"max-w-md w-full bg-white rounded-xl shadow-soft p-6 text-center",children:[h.jsxs("div",{className:"mb-6",children:[h.jsx(E2,{className:"w-16 h-16 text-red-500 mx-auto mb-4"}),h.jsx("h1",{className:"text-2xl font-bold text-gray-800 mb-2",children:"哎呀，出錯了！"}),h.jsx("p",{className:"text-gray-600",children:"應用程式發生了未預期的錯誤"})]}),h.jsxs("div",{className:"space-y-4",children:[h.jsxs("button",{onClick:this.handleReload,className:"w-full btn-primary flex items-center justify-center gap-2",children:[h.jsx(y2,{className:"w-4 h-4"}),"重新載入"]}),h.jsx("button",{onClick:()=>window.location.href="/",className:"w-full btn-secondary",children:"回到首頁"})]}),!1]})}):this.props.children}}function H2(){const{user:t,setUser:e,loading:n,setLoading:r}=je();return E.useEffect(()=>{const s=yI(ai,async i=>{i?(e({uid:i.uid,email:i.email,nickname:i.displayName||"匿名用戶",avatar:i.photoURL||null,isAnonymous:i.isAnonymous}),console.log("✅ 用戶已登入:",i.uid)):e(null),r(!1)});return()=>s()},[e,r]),n?h.jsx(W2,{}):h.jsx(V2,{children:h.jsx(Sk,{future:{v7_startTransition:!0,v7_relativeSplatPath:!0},children:h.jsxs("div",{className:"min-h-screen",children:[h.jsxs(Ek,{children:[h.jsx(Bs,{path:"/",element:t?h.jsx(wc,{}):h.jsx(k2,{})}),h.jsx(Bs,{path:"/login",element:t?h.jsx(wc,{}):h.jsx(Im,{})}),h.jsx(Bs,{path:"/chat",element:t?h.jsx(wc,{}):h.jsx(Im,{})}),h.jsx(Bs,{path:"/debug",element:h.jsx(B2,{})})]}),h.jsx(fC,{position:"top-center",toastOptions:{duration:3e3,style:{background:"#2877b9",color:"#fff",borderRadius:"12px"}}})]})})})}xc.createRoot(document.getElementById("root")).render(h.jsx(Ba.StrictMode,{children:h.jsx(H2,{})}));
//# sourceMappingURL=index-DzUp9tWW.js.map
