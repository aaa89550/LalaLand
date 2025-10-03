var wE=Object.defineProperty;var EE=(t,e,n)=>e in t?wE(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var jf=(t,e,n)=>EE(t,typeof e!="symbol"?e+"":e,n);function kE(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Ag(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Og={exports:{}},pl={},Dg={exports:{}},U={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var so=Symbol.for("react.element"),SE=Symbol.for("react.portal"),xE=Symbol.for("react.fragment"),CE=Symbol.for("react.strict_mode"),IE=Symbol.for("react.profiler"),TE=Symbol.for("react.provider"),NE=Symbol.for("react.context"),bE=Symbol.for("react.forward_ref"),RE=Symbol.for("react.suspense"),PE=Symbol.for("react.memo"),AE=Symbol.for("react.lazy"),Ff=Symbol.iterator;function OE(t){return t===null||typeof t!="object"?null:(t=Ff&&t[Ff]||t["@@iterator"],typeof t=="function"?t:null)}var Mg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Lg=Object.assign,jg={};function Ai(t,e,n){this.props=t,this.context=e,this.refs=jg,this.updater=n||Mg}Ai.prototype.isReactComponent={};Ai.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ai.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Fg(){}Fg.prototype=Ai.prototype;function Ad(t,e,n){this.props=t,this.context=e,this.refs=jg,this.updater=n||Mg}var Od=Ad.prototype=new Fg;Od.constructor=Ad;Lg(Od,Ai.prototype);Od.isPureReactComponent=!0;var Uf=Array.isArray,Ug=Object.prototype.hasOwnProperty,Dd={current:null},$g={key:!0,ref:!0,__self:!0,__source:!0};function zg(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Ug.call(e,r)&&!$g.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:so,type:t,key:s,ref:o,props:i,_owner:Dd.current}}function DE(t,e){return{$$typeof:so,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Md(t){return typeof t=="object"&&t!==null&&t.$$typeof===so}function ME(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var $f=/\/+/g;function uc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?ME(""+t.key):e.toString(36)}function Xo(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case so:case SE:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+uc(o,0):r,Uf(i)?(n="",t!=null&&(n=t.replace($f,"$&/")+"/"),Xo(i,e,n,"",function(c){return c})):i!=null&&(Md(i)&&(i=DE(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace($f,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Uf(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+uc(s,a);o+=Xo(s,e,n,l,i)}else if(l=OE(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+uc(s,a++),o+=Xo(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function To(t,e,n){if(t==null)return t;var r=[],i=0;return Xo(t,r,"","",function(s){return e.call(n,s,i++)}),r}function LE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var He={current:null},Jo={transition:null},jE={ReactCurrentDispatcher:He,ReactCurrentBatchConfig:Jo,ReactCurrentOwner:Dd};function Bg(){throw Error("act(...) is not supported in production builds of React.")}U.Children={map:To,forEach:function(t,e,n){To(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return To(t,function(){e++}),e},toArray:function(t){return To(t,function(e){return e})||[]},only:function(t){if(!Md(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};U.Component=Ai;U.Fragment=xE;U.Profiler=IE;U.PureComponent=Ad;U.StrictMode=CE;U.Suspense=RE;U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jE;U.act=Bg;U.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Lg({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Dd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Ug.call(e,l)&&!$g.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:so,type:t.type,key:i,ref:s,props:r,_owner:o}};U.createContext=function(t){return t={$$typeof:NE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:TE,_context:t},t.Consumer=t};U.createElement=zg;U.createFactory=function(t){var e=zg.bind(null,t);return e.type=t,e};U.createRef=function(){return{current:null}};U.forwardRef=function(t){return{$$typeof:bE,render:t}};U.isValidElement=Md;U.lazy=function(t){return{$$typeof:AE,_payload:{_status:-1,_result:t},_init:LE}};U.memo=function(t,e){return{$$typeof:PE,type:t,compare:e===void 0?null:e}};U.startTransition=function(t){var e=Jo.transition;Jo.transition={};try{t()}finally{Jo.transition=e}};U.unstable_act=Bg;U.useCallback=function(t,e){return He.current.useCallback(t,e)};U.useContext=function(t){return He.current.useContext(t)};U.useDebugValue=function(){};U.useDeferredValue=function(t){return He.current.useDeferredValue(t)};U.useEffect=function(t,e){return He.current.useEffect(t,e)};U.useId=function(){return He.current.useId()};U.useImperativeHandle=function(t,e,n){return He.current.useImperativeHandle(t,e,n)};U.useInsertionEffect=function(t,e){return He.current.useInsertionEffect(t,e)};U.useLayoutEffect=function(t,e){return He.current.useLayoutEffect(t,e)};U.useMemo=function(t,e){return He.current.useMemo(t,e)};U.useReducer=function(t,e,n){return He.current.useReducer(t,e,n)};U.useRef=function(t){return He.current.useRef(t)};U.useState=function(t){return He.current.useState(t)};U.useSyncExternalStore=function(t,e,n){return He.current.useSyncExternalStore(t,e,n)};U.useTransition=function(){return He.current.useTransition()};U.version="18.3.1";Dg.exports=U;var k=Dg.exports;const ml=Ag(k),FE=kE({__proto__:null,default:ml},[k]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var UE=k,$E=Symbol.for("react.element"),zE=Symbol.for("react.fragment"),BE=Object.prototype.hasOwnProperty,WE=UE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,VE={key:!0,ref:!0,__self:!0,__source:!0};function Wg(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)BE.call(e,r)&&!VE.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:$E,type:t,key:s,ref:o,props:i,_owner:WE.current}}pl.Fragment=zE;pl.jsx=Wg;pl.jsxs=Wg;Og.exports=pl;var h=Og.exports,lu={},Vg={exports:{}},at={},Hg={exports:{}},Kg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(b,D){var L=b.length;b.push(D);e:for(;0<L;){var fe=L-1>>>1,Ee=b[fe];if(0<i(Ee,D))b[fe]=D,b[L]=Ee,L=fe;else break e}}function n(b){return b.length===0?null:b[0]}function r(b){if(b.length===0)return null;var D=b[0],L=b.pop();if(L!==D){b[0]=L;e:for(var fe=0,Ee=b.length,Co=Ee>>>1;fe<Co;){var nr=2*(fe+1)-1,cc=b[nr],rr=nr+1,Io=b[rr];if(0>i(cc,L))rr<Ee&&0>i(Io,cc)?(b[fe]=Io,b[rr]=L,fe=rr):(b[fe]=cc,b[nr]=L,fe=nr);else if(rr<Ee&&0>i(Io,L))b[fe]=Io,b[rr]=L,fe=rr;else break e}}return D}function i(b,D){var L=b.sortIndex-D.sortIndex;return L!==0?L:b.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,d=null,f=3,m=!1,y=!1,_=!1,w=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(b){for(var D=n(c);D!==null;){if(D.callback===null)r(c);else if(D.startTime<=b)r(c),D.sortIndex=D.expirationTime,e(l,D);else break;D=n(c)}}function E(b){if(_=!1,g(b),!y)if(n(l)!==null)y=!0,ac(C);else{var D=n(c);D!==null&&lc(E,D.startTime-b)}}function C(b,D){y=!1,_&&(_=!1,v(R),R=-1),m=!0;var L=f;try{for(g(D),d=n(l);d!==null&&(!(d.expirationTime>D)||b&&!Oe());){var fe=d.callback;if(typeof fe=="function"){d.callback=null,f=d.priorityLevel;var Ee=fe(d.expirationTime<=D);D=t.unstable_now(),typeof Ee=="function"?d.callback=Ee:d===n(l)&&r(l),g(D)}else r(l);d=n(l)}if(d!==null)var Co=!0;else{var nr=n(c);nr!==null&&lc(E,nr.startTime-D),Co=!1}return Co}finally{d=null,f=L,m=!1}}var S=!1,T=null,R=-1,B=5,O=-1;function Oe(){return!(t.unstable_now()-O<B)}function W(){if(T!==null){var b=t.unstable_now();O=b;var D=!0;try{D=T(!0,b)}finally{D?Ne():(S=!1,T=null)}}else S=!1}var Ne;if(typeof p=="function")Ne=function(){p(W)};else if(typeof MessageChannel<"u"){var be=new MessageChannel,oc=be.port2;be.port1.onmessage=W,Ne=function(){oc.postMessage(null)}}else Ne=function(){w(W,0)};function ac(b){T=b,S||(S=!0,Ne())}function lc(b,D){R=w(function(){b(t.unstable_now())},D)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(b){b.callback=null},t.unstable_continueExecution=function(){y||m||(y=!0,ac(C))},t.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<b?Math.floor(1e3/b):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(b){switch(f){case 1:case 2:case 3:var D=3;break;default:D=f}var L=f;f=D;try{return b()}finally{f=L}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(b,D){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var L=f;f=b;try{return D()}finally{f=L}},t.unstable_scheduleCallback=function(b,D,L){var fe=t.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?fe+L:fe):L=fe,b){case 1:var Ee=-1;break;case 2:Ee=250;break;case 5:Ee=1073741823;break;case 4:Ee=1e4;break;default:Ee=5e3}return Ee=L+Ee,b={id:u++,callback:D,priorityLevel:b,startTime:L,expirationTime:Ee,sortIndex:-1},L>fe?(b.sortIndex=L,e(c,b),n(l)===null&&b===n(c)&&(_?(v(R),R=-1):_=!0,lc(E,L-fe))):(b.sortIndex=Ee,e(l,b),y||m||(y=!0,ac(C))),b},t.unstable_shouldYield=Oe,t.unstable_wrapCallback=function(b){var D=f;return function(){var L=f;f=D;try{return b.apply(this,arguments)}finally{f=L}}}})(Kg);Hg.exports=Kg;var HE=Hg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var KE=k,st=HE;function x(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Gg=new Set,Ts={};function Ar(t,e){mi(t,e),mi(t+"Capture",e)}function mi(t,e){for(Ts[t]=e,t=0;t<e.length;t++)Gg.add(e[t])}var an=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),cu=Object.prototype.hasOwnProperty,GE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,zf={},Bf={};function qE(t){return cu.call(Bf,t)?!0:cu.call(zf,t)?!1:GE.test(t)?Bf[t]=!0:(zf[t]=!0,!1)}function QE(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function YE(t,e,n,r){if(e===null||typeof e>"u"||QE(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ke(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ae={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ae[t]=new Ke(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ae[e]=new Ke(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ae[t]=new Ke(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ae[t]=new Ke(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ae[t]=new Ke(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ae[t]=new Ke(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ae[t]=new Ke(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ae[t]=new Ke(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ae[t]=new Ke(t,5,!1,t.toLowerCase(),null,!1,!1)});var Ld=/[\-:]([a-z])/g;function jd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Ld,jd);Ae[e]=new Ke(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Ld,jd);Ae[e]=new Ke(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Ld,jd);Ae[e]=new Ke(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ae[t]=new Ke(t,1,!1,t.toLowerCase(),null,!1,!1)});Ae.xlinkHref=new Ke("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ae[t]=new Ke(t,1,!1,t.toLowerCase(),null,!0,!0)});function Fd(t,e,n,r){var i=Ae.hasOwnProperty(e)?Ae[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(YE(e,n,i,r)&&(n=null),r||i===null?qE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var mn=KE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,No=Symbol.for("react.element"),Wr=Symbol.for("react.portal"),Vr=Symbol.for("react.fragment"),Ud=Symbol.for("react.strict_mode"),uu=Symbol.for("react.profiler"),qg=Symbol.for("react.provider"),Qg=Symbol.for("react.context"),$d=Symbol.for("react.forward_ref"),du=Symbol.for("react.suspense"),hu=Symbol.for("react.suspense_list"),zd=Symbol.for("react.memo"),_n=Symbol.for("react.lazy"),Yg=Symbol.for("react.offscreen"),Wf=Symbol.iterator;function Vi(t){return t===null||typeof t!="object"?null:(t=Wf&&t[Wf]||t["@@iterator"],typeof t=="function"?t:null)}var ce=Object.assign,dc;function rs(t){if(dc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);dc=e&&e[1]||""}return`
`+dc+t}var hc=!1;function fc(t,e){if(!t||hc)return"";hc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{hc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?rs(t):""}function XE(t){switch(t.tag){case 5:return rs(t.type);case 16:return rs("Lazy");case 13:return rs("Suspense");case 19:return rs("SuspenseList");case 0:case 2:case 15:return t=fc(t.type,!1),t;case 11:return t=fc(t.type.render,!1),t;case 1:return t=fc(t.type,!0),t;default:return""}}function fu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Vr:return"Fragment";case Wr:return"Portal";case uu:return"Profiler";case Ud:return"StrictMode";case du:return"Suspense";case hu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Qg:return(t.displayName||"Context")+".Consumer";case qg:return(t._context.displayName||"Context")+".Provider";case $d:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case zd:return e=t.displayName||null,e!==null?e:fu(t.type)||"Memo";case _n:e=t._payload,t=t._init;try{return fu(t(e))}catch{}}return null}function JE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fu(e);case 8:return e===Ud?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Hn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Xg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function ZE(t){var e=Xg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function bo(t){t._valueTracker||(t._valueTracker=ZE(t))}function Jg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Xg(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ma(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function pu(t,e){var n=e.checked;return ce({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Vf(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Hn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Zg(t,e){e=e.checked,e!=null&&Fd(t,"checked",e,!1)}function mu(t,e){Zg(t,e);var n=Hn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?gu(t,e.type,n):e.hasOwnProperty("defaultValue")&&gu(t,e.type,Hn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Hf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function gu(t,e,n){(e!=="number"||ma(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var is=Array.isArray;function ii(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Hn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function yu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(x(91));return ce({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Kf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(x(92));if(is(n)){if(1<n.length)throw Error(x(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Hn(n)}}function ey(t,e){var n=Hn(e.value),r=Hn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Gf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function ty(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function vu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?ty(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ro,ny=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ro=Ro||document.createElement("div"),Ro.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ro.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ns(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var us={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ek=["Webkit","ms","Moz","O"];Object.keys(us).forEach(function(t){ek.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),us[e]=us[t]})});function ry(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||us.hasOwnProperty(t)&&us[t]?(""+e).trim():e+"px"}function iy(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=ry(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var tk=ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _u(t,e){if(e){if(tk[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(x(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(x(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(x(61))}if(e.style!=null&&typeof e.style!="object")throw Error(x(62))}}function wu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Eu=null;function Bd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ku=null,si=null,oi=null;function qf(t){if(t=lo(t)){if(typeof ku!="function")throw Error(x(280));var e=t.stateNode;e&&(e=wl(e),ku(t.stateNode,t.type,e))}}function sy(t){si?oi?oi.push(t):oi=[t]:si=t}function oy(){if(si){var t=si,e=oi;if(oi=si=null,qf(t),e)for(t=0;t<e.length;t++)qf(e[t])}}function ay(t,e){return t(e)}function ly(){}var pc=!1;function cy(t,e,n){if(pc)return t(e,n);pc=!0;try{return ay(t,e,n)}finally{pc=!1,(si!==null||oi!==null)&&(ly(),oy())}}function bs(t,e){var n=t.stateNode;if(n===null)return null;var r=wl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(x(231,e,typeof n));return n}var Su=!1;if(an)try{var Hi={};Object.defineProperty(Hi,"passive",{get:function(){Su=!0}}),window.addEventListener("test",Hi,Hi),window.removeEventListener("test",Hi,Hi)}catch{Su=!1}function nk(t,e,n,r,i,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var ds=!1,ga=null,ya=!1,xu=null,rk={onError:function(t){ds=!0,ga=t}};function ik(t,e,n,r,i,s,o,a,l){ds=!1,ga=null,nk.apply(rk,arguments)}function sk(t,e,n,r,i,s,o,a,l){if(ik.apply(this,arguments),ds){if(ds){var c=ga;ds=!1,ga=null}else throw Error(x(198));ya||(ya=!0,xu=c)}}function Or(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function uy(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Qf(t){if(Or(t)!==t)throw Error(x(188))}function ok(t){var e=t.alternate;if(!e){if(e=Or(t),e===null)throw Error(x(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Qf(i),t;if(s===r)return Qf(i),e;s=s.sibling}throw Error(x(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(x(189))}}if(n.alternate!==r)throw Error(x(190))}if(n.tag!==3)throw Error(x(188));return n.stateNode.current===n?t:e}function dy(t){return t=ok(t),t!==null?hy(t):null}function hy(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=hy(t);if(e!==null)return e;t=t.sibling}return null}var fy=st.unstable_scheduleCallback,Yf=st.unstable_cancelCallback,ak=st.unstable_shouldYield,lk=st.unstable_requestPaint,pe=st.unstable_now,ck=st.unstable_getCurrentPriorityLevel,Wd=st.unstable_ImmediatePriority,py=st.unstable_UserBlockingPriority,va=st.unstable_NormalPriority,uk=st.unstable_LowPriority,my=st.unstable_IdlePriority,gl=null,Ft=null;function dk(t){if(Ft&&typeof Ft.onCommitFiberRoot=="function")try{Ft.onCommitFiberRoot(gl,t,void 0,(t.current.flags&128)===128)}catch{}}var xt=Math.clz32?Math.clz32:pk,hk=Math.log,fk=Math.LN2;function pk(t){return t>>>=0,t===0?32:31-(hk(t)/fk|0)|0}var Po=64,Ao=4194304;function ss(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function _a(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=ss(a):(s&=o,s!==0&&(r=ss(s)))}else o=n&~i,o!==0?r=ss(o):s!==0&&(r=ss(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-xt(e),i=1<<n,r|=t[n],e&=~i;return r}function mk(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gk(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-xt(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=mk(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Cu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function gy(){var t=Po;return Po<<=1,!(Po&4194240)&&(Po=64),t}function mc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function oo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-xt(e),t[e]=n}function yk(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-xt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Vd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-xt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var V=0;function yy(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var vy,Hd,_y,wy,Ey,Iu=!1,Oo=[],Dn=null,Mn=null,Ln=null,Rs=new Map,Ps=new Map,En=[],vk="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xf(t,e){switch(t){case"focusin":case"focusout":Dn=null;break;case"dragenter":case"dragleave":Mn=null;break;case"mouseover":case"mouseout":Ln=null;break;case"pointerover":case"pointerout":Rs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ps.delete(e.pointerId)}}function Ki(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=lo(e),e!==null&&Hd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function _k(t,e,n,r,i){switch(e){case"focusin":return Dn=Ki(Dn,t,e,n,r,i),!0;case"dragenter":return Mn=Ki(Mn,t,e,n,r,i),!0;case"mouseover":return Ln=Ki(Ln,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Rs.set(s,Ki(Rs.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Ps.set(s,Ki(Ps.get(s)||null,t,e,n,r,i)),!0}return!1}function ky(t){var e=lr(t.target);if(e!==null){var n=Or(e);if(n!==null){if(e=n.tag,e===13){if(e=uy(n),e!==null){t.blockedOn=e,Ey(t.priority,function(){_y(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Zo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Tu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Eu=r,n.target.dispatchEvent(r),Eu=null}else return e=lo(n),e!==null&&Hd(e),t.blockedOn=n,!1;e.shift()}return!0}function Jf(t,e,n){Zo(t)&&n.delete(e)}function wk(){Iu=!1,Dn!==null&&Zo(Dn)&&(Dn=null),Mn!==null&&Zo(Mn)&&(Mn=null),Ln!==null&&Zo(Ln)&&(Ln=null),Rs.forEach(Jf),Ps.forEach(Jf)}function Gi(t,e){t.blockedOn===e&&(t.blockedOn=null,Iu||(Iu=!0,st.unstable_scheduleCallback(st.unstable_NormalPriority,wk)))}function As(t){function e(i){return Gi(i,t)}if(0<Oo.length){Gi(Oo[0],t);for(var n=1;n<Oo.length;n++){var r=Oo[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Dn!==null&&Gi(Dn,t),Mn!==null&&Gi(Mn,t),Ln!==null&&Gi(Ln,t),Rs.forEach(e),Ps.forEach(e),n=0;n<En.length;n++)r=En[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<En.length&&(n=En[0],n.blockedOn===null);)ky(n),n.blockedOn===null&&En.shift()}var ai=mn.ReactCurrentBatchConfig,wa=!0;function Ek(t,e,n,r){var i=V,s=ai.transition;ai.transition=null;try{V=1,Kd(t,e,n,r)}finally{V=i,ai.transition=s}}function kk(t,e,n,r){var i=V,s=ai.transition;ai.transition=null;try{V=4,Kd(t,e,n,r)}finally{V=i,ai.transition=s}}function Kd(t,e,n,r){if(wa){var i=Tu(t,e,n,r);if(i===null)Cc(t,e,r,Ea,n),Xf(t,r);else if(_k(i,t,e,n,r))r.stopPropagation();else if(Xf(t,r),e&4&&-1<vk.indexOf(t)){for(;i!==null;){var s=lo(i);if(s!==null&&vy(s),s=Tu(t,e,n,r),s===null&&Cc(t,e,r,Ea,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Cc(t,e,r,null,n)}}var Ea=null;function Tu(t,e,n,r){if(Ea=null,t=Bd(r),t=lr(t),t!==null)if(e=Or(t),e===null)t=null;else if(n=e.tag,n===13){if(t=uy(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ea=t,null}function Sy(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ck()){case Wd:return 1;case py:return 4;case va:case uk:return 16;case my:return 536870912;default:return 16}default:return 16}}var bn=null,Gd=null,ea=null;function xy(){if(ea)return ea;var t,e=Gd,n=e.length,r,i="value"in bn?bn.value:bn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return ea=i.slice(t,1<r?1-r:void 0)}function ta(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Do(){return!0}function Zf(){return!1}function lt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Do:Zf,this.isPropagationStopped=Zf,this}return ce(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Do)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Do)},persist:function(){},isPersistent:Do}),e}var Oi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qd=lt(Oi),ao=ce({},Oi,{view:0,detail:0}),Sk=lt(ao),gc,yc,qi,yl=ce({},ao,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==qi&&(qi&&t.type==="mousemove"?(gc=t.screenX-qi.screenX,yc=t.screenY-qi.screenY):yc=gc=0,qi=t),gc)},movementY:function(t){return"movementY"in t?t.movementY:yc}}),ep=lt(yl),xk=ce({},yl,{dataTransfer:0}),Ck=lt(xk),Ik=ce({},ao,{relatedTarget:0}),vc=lt(Ik),Tk=ce({},Oi,{animationName:0,elapsedTime:0,pseudoElement:0}),Nk=lt(Tk),bk=ce({},Oi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Rk=lt(bk),Pk=ce({},Oi,{data:0}),tp=lt(Pk),Ak={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ok={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Dk={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Mk(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Dk[t])?!!e[t]:!1}function Qd(){return Mk}var Lk=ce({},ao,{key:function(t){if(t.key){var e=Ak[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ta(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ok[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qd,charCode:function(t){return t.type==="keypress"?ta(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ta(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),jk=lt(Lk),Fk=ce({},yl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),np=lt(Fk),Uk=ce({},ao,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qd}),$k=lt(Uk),zk=ce({},Oi,{propertyName:0,elapsedTime:0,pseudoElement:0}),Bk=lt(zk),Wk=ce({},yl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Vk=lt(Wk),Hk=[9,13,27,32],Yd=an&&"CompositionEvent"in window,hs=null;an&&"documentMode"in document&&(hs=document.documentMode);var Kk=an&&"TextEvent"in window&&!hs,Cy=an&&(!Yd||hs&&8<hs&&11>=hs),rp=" ",ip=!1;function Iy(t,e){switch(t){case"keyup":return Hk.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ty(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Hr=!1;function Gk(t,e){switch(t){case"compositionend":return Ty(e);case"keypress":return e.which!==32?null:(ip=!0,rp);case"textInput":return t=e.data,t===rp&&ip?null:t;default:return null}}function qk(t,e){if(Hr)return t==="compositionend"||!Yd&&Iy(t,e)?(t=xy(),ea=Gd=bn=null,Hr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Cy&&e.locale!=="ko"?null:e.data;default:return null}}var Qk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Qk[t.type]:e==="textarea"}function Ny(t,e,n,r){sy(r),e=ka(e,"onChange"),0<e.length&&(n=new qd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var fs=null,Os=null;function Yk(t){Uy(t,0)}function vl(t){var e=qr(t);if(Jg(e))return t}function Xk(t,e){if(t==="change")return e}var by=!1;if(an){var _c;if(an){var wc="oninput"in document;if(!wc){var op=document.createElement("div");op.setAttribute("oninput","return;"),wc=typeof op.oninput=="function"}_c=wc}else _c=!1;by=_c&&(!document.documentMode||9<document.documentMode)}function ap(){fs&&(fs.detachEvent("onpropertychange",Ry),Os=fs=null)}function Ry(t){if(t.propertyName==="value"&&vl(Os)){var e=[];Ny(e,Os,t,Bd(t)),cy(Yk,e)}}function Jk(t,e,n){t==="focusin"?(ap(),fs=e,Os=n,fs.attachEvent("onpropertychange",Ry)):t==="focusout"&&ap()}function Zk(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return vl(Os)}function eS(t,e){if(t==="click")return vl(e)}function tS(t,e){if(t==="input"||t==="change")return vl(e)}function nS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Tt=typeof Object.is=="function"?Object.is:nS;function Ds(t,e){if(Tt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!cu.call(e,i)||!Tt(t[i],e[i]))return!1}return!0}function lp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function cp(t,e){var n=lp(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=lp(n)}}function Py(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Py(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Ay(){for(var t=window,e=ma();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ma(t.document)}return e}function Xd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function rS(t){var e=Ay(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Py(n.ownerDocument.documentElement,n)){if(r!==null&&Xd(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=cp(n,s);var o=cp(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var iS=an&&"documentMode"in document&&11>=document.documentMode,Kr=null,Nu=null,ps=null,bu=!1;function up(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;bu||Kr==null||Kr!==ma(r)||(r=Kr,"selectionStart"in r&&Xd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ps&&Ds(ps,r)||(ps=r,r=ka(Nu,"onSelect"),0<r.length&&(e=new qd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Kr)))}function Mo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Gr={animationend:Mo("Animation","AnimationEnd"),animationiteration:Mo("Animation","AnimationIteration"),animationstart:Mo("Animation","AnimationStart"),transitionend:Mo("Transition","TransitionEnd")},Ec={},Oy={};an&&(Oy=document.createElement("div").style,"AnimationEvent"in window||(delete Gr.animationend.animation,delete Gr.animationiteration.animation,delete Gr.animationstart.animation),"TransitionEvent"in window||delete Gr.transitionend.transition);function _l(t){if(Ec[t])return Ec[t];if(!Gr[t])return t;var e=Gr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Oy)return Ec[t]=e[n];return t}var Dy=_l("animationend"),My=_l("animationiteration"),Ly=_l("animationstart"),jy=_l("transitionend"),Fy=new Map,dp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Xn(t,e){Fy.set(t,e),Ar(e,[t])}for(var kc=0;kc<dp.length;kc++){var Sc=dp[kc],sS=Sc.toLowerCase(),oS=Sc[0].toUpperCase()+Sc.slice(1);Xn(sS,"on"+oS)}Xn(Dy,"onAnimationEnd");Xn(My,"onAnimationIteration");Xn(Ly,"onAnimationStart");Xn("dblclick","onDoubleClick");Xn("focusin","onFocus");Xn("focusout","onBlur");Xn(jy,"onTransitionEnd");mi("onMouseEnter",["mouseout","mouseover"]);mi("onMouseLeave",["mouseout","mouseover"]);mi("onPointerEnter",["pointerout","pointerover"]);mi("onPointerLeave",["pointerout","pointerover"]);Ar("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ar("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ar("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ar("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ar("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ar("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var os="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),aS=new Set("cancel close invalid load scroll toggle".split(" ").concat(os));function hp(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,sk(r,e,void 0,t),t.currentTarget=null}function Uy(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;hp(i,a,c),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;hp(i,a,c),s=l}}}if(ya)throw t=xu,ya=!1,xu=null,t}function te(t,e){var n=e[Du];n===void 0&&(n=e[Du]=new Set);var r=t+"__bubble";n.has(r)||($y(e,t,2,!1),n.add(r))}function xc(t,e,n){var r=0;e&&(r|=4),$y(n,t,r,e)}var Lo="_reactListening"+Math.random().toString(36).slice(2);function Ms(t){if(!t[Lo]){t[Lo]=!0,Gg.forEach(function(n){n!=="selectionchange"&&(aS.has(n)||xc(n,!1,t),xc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Lo]||(e[Lo]=!0,xc("selectionchange",!1,e))}}function $y(t,e,n,r){switch(Sy(e)){case 1:var i=Ek;break;case 4:i=kk;break;default:i=Kd}n=i.bind(null,e,n,t),i=void 0,!Su||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Cc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=lr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}cy(function(){var c=s,u=Bd(n),d=[];e:{var f=Fy.get(t);if(f!==void 0){var m=qd,y=t;switch(t){case"keypress":if(ta(n)===0)break e;case"keydown":case"keyup":m=jk;break;case"focusin":y="focus",m=vc;break;case"focusout":y="blur",m=vc;break;case"beforeblur":case"afterblur":m=vc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=ep;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=Ck;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=$k;break;case Dy:case My:case Ly:m=Nk;break;case jy:m=Bk;break;case"scroll":m=Sk;break;case"wheel":m=Vk;break;case"copy":case"cut":case"paste":m=Rk;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=np}var _=(e&4)!==0,w=!_&&t==="scroll",v=_?f!==null?f+"Capture":null:f;_=[];for(var p=c,g;p!==null;){g=p;var E=g.stateNode;if(g.tag===5&&E!==null&&(g=E,v!==null&&(E=bs(p,v),E!=null&&_.push(Ls(p,E,g)))),w)break;p=p.return}0<_.length&&(f=new m(f,y,null,n,u),d.push({event:f,listeners:_}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",f&&n!==Eu&&(y=n.relatedTarget||n.fromElement)&&(lr(y)||y[ln]))break e;if((m||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,m?(y=n.relatedTarget||n.toElement,m=c,y=y?lr(y):null,y!==null&&(w=Or(y),y!==w||y.tag!==5&&y.tag!==6)&&(y=null)):(m=null,y=c),m!==y)){if(_=ep,E="onMouseLeave",v="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(_=np,E="onPointerLeave",v="onPointerEnter",p="pointer"),w=m==null?f:qr(m),g=y==null?f:qr(y),f=new _(E,p+"leave",m,n,u),f.target=w,f.relatedTarget=g,E=null,lr(u)===c&&(_=new _(v,p+"enter",y,n,u),_.target=g,_.relatedTarget=w,E=_),w=E,m&&y)t:{for(_=m,v=y,p=0,g=_;g;g=zr(g))p++;for(g=0,E=v;E;E=zr(E))g++;for(;0<p-g;)_=zr(_),p--;for(;0<g-p;)v=zr(v),g--;for(;p--;){if(_===v||v!==null&&_===v.alternate)break t;_=zr(_),v=zr(v)}_=null}else _=null;m!==null&&fp(d,f,m,_,!1),y!==null&&w!==null&&fp(d,w,y,_,!0)}}e:{if(f=c?qr(c):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var C=Xk;else if(sp(f))if(by)C=tS;else{C=Zk;var S=Jk}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=eS);if(C&&(C=C(t,c))){Ny(d,C,n,u);break e}S&&S(t,f,c),t==="focusout"&&(S=f._wrapperState)&&S.controlled&&f.type==="number"&&gu(f,"number",f.value)}switch(S=c?qr(c):window,t){case"focusin":(sp(S)||S.contentEditable==="true")&&(Kr=S,Nu=c,ps=null);break;case"focusout":ps=Nu=Kr=null;break;case"mousedown":bu=!0;break;case"contextmenu":case"mouseup":case"dragend":bu=!1,up(d,n,u);break;case"selectionchange":if(iS)break;case"keydown":case"keyup":up(d,n,u)}var T;if(Yd)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Hr?Iy(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(Cy&&n.locale!=="ko"&&(Hr||R!=="onCompositionStart"?R==="onCompositionEnd"&&Hr&&(T=xy()):(bn=u,Gd="value"in bn?bn.value:bn.textContent,Hr=!0)),S=ka(c,R),0<S.length&&(R=new tp(R,t,null,n,u),d.push({event:R,listeners:S}),T?R.data=T:(T=Ty(n),T!==null&&(R.data=T)))),(T=Kk?Gk(t,n):qk(t,n))&&(c=ka(c,"onBeforeInput"),0<c.length&&(u=new tp("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=T))}Uy(d,e)})}function Ls(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ka(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=bs(t,n),s!=null&&r.unshift(Ls(t,s,i)),s=bs(t,e),s!=null&&r.push(Ls(t,s,i))),t=t.return}return r}function zr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function fp(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=bs(n,s),l!=null&&o.unshift(Ls(n,l,a))):i||(l=bs(n,s),l!=null&&o.push(Ls(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var lS=/\r\n?/g,cS=/\u0000|\uFFFD/g;function pp(t){return(typeof t=="string"?t:""+t).replace(lS,`
`).replace(cS,"")}function jo(t,e,n){if(e=pp(e),pp(t)!==e&&n)throw Error(x(425))}function Sa(){}var Ru=null,Pu=null;function Au(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ou=typeof setTimeout=="function"?setTimeout:void 0,uS=typeof clearTimeout=="function"?clearTimeout:void 0,mp=typeof Promise=="function"?Promise:void 0,dS=typeof queueMicrotask=="function"?queueMicrotask:typeof mp<"u"?function(t){return mp.resolve(null).then(t).catch(hS)}:Ou;function hS(t){setTimeout(function(){throw t})}function Ic(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),As(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);As(e)}function jn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function gp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Di=Math.random().toString(36).slice(2),Dt="__reactFiber$"+Di,js="__reactProps$"+Di,ln="__reactContainer$"+Di,Du="__reactEvents$"+Di,fS="__reactListeners$"+Di,pS="__reactHandles$"+Di;function lr(t){var e=t[Dt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ln]||n[Dt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=gp(t);t!==null;){if(n=t[Dt])return n;t=gp(t)}return e}t=n,n=t.parentNode}return null}function lo(t){return t=t[Dt]||t[ln],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function qr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(x(33))}function wl(t){return t[js]||null}var Mu=[],Qr=-1;function Jn(t){return{current:t}}function ne(t){0>Qr||(t.current=Mu[Qr],Mu[Qr]=null,Qr--)}function Z(t,e){Qr++,Mu[Qr]=t.current,t.current=e}var Kn={},Fe=Jn(Kn),Ye=Jn(!1),yr=Kn;function gi(t,e){var n=t.type.contextTypes;if(!n)return Kn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Xe(t){return t=t.childContextTypes,t!=null}function xa(){ne(Ye),ne(Fe)}function yp(t,e,n){if(Fe.current!==Kn)throw Error(x(168));Z(Fe,e),Z(Ye,n)}function zy(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(x(108,JE(t)||"Unknown",i));return ce({},n,r)}function Ca(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Kn,yr=Fe.current,Z(Fe,t),Z(Ye,Ye.current),!0}function vp(t,e,n){var r=t.stateNode;if(!r)throw Error(x(169));n?(t=zy(t,e,yr),r.__reactInternalMemoizedMergedChildContext=t,ne(Ye),ne(Fe),Z(Fe,t)):ne(Ye),Z(Ye,n)}var Qt=null,El=!1,Tc=!1;function By(t){Qt===null?Qt=[t]:Qt.push(t)}function mS(t){El=!0,By(t)}function Zn(){if(!Tc&&Qt!==null){Tc=!0;var t=0,e=V;try{var n=Qt;for(V=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Qt=null,El=!1}catch(i){throw Qt!==null&&(Qt=Qt.slice(t+1)),fy(Wd,Zn),i}finally{V=e,Tc=!1}}return null}var Yr=[],Xr=0,Ia=null,Ta=0,ct=[],ut=0,vr=null,Yt=1,Xt="";function ir(t,e){Yr[Xr++]=Ta,Yr[Xr++]=Ia,Ia=t,Ta=e}function Wy(t,e,n){ct[ut++]=Yt,ct[ut++]=Xt,ct[ut++]=vr,vr=t;var r=Yt;t=Xt;var i=32-xt(r)-1;r&=~(1<<i),n+=1;var s=32-xt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Yt=1<<32-xt(e)+i|n<<i|r,Xt=s+t}else Yt=1<<s|n<<i|r,Xt=t}function Jd(t){t.return!==null&&(ir(t,1),Wy(t,1,0))}function Zd(t){for(;t===Ia;)Ia=Yr[--Xr],Yr[Xr]=null,Ta=Yr[--Xr],Yr[Xr]=null;for(;t===vr;)vr=ct[--ut],ct[ut]=null,Xt=ct[--ut],ct[ut]=null,Yt=ct[--ut],ct[ut]=null}var it=null,nt=null,re=!1,wt=null;function Vy(t,e){var n=dt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function _p(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,it=t,nt=jn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,it=t,nt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=vr!==null?{id:Yt,overflow:Xt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=dt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,it=t,nt=null,!0):!1;default:return!1}}function Lu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ju(t){if(re){var e=nt;if(e){var n=e;if(!_p(t,e)){if(Lu(t))throw Error(x(418));e=jn(n.nextSibling);var r=it;e&&_p(t,e)?Vy(r,n):(t.flags=t.flags&-4097|2,re=!1,it=t)}}else{if(Lu(t))throw Error(x(418));t.flags=t.flags&-4097|2,re=!1,it=t}}}function wp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;it=t}function Fo(t){if(t!==it)return!1;if(!re)return wp(t),re=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Au(t.type,t.memoizedProps)),e&&(e=nt)){if(Lu(t))throw Hy(),Error(x(418));for(;e;)Vy(t,e),e=jn(e.nextSibling)}if(wp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(x(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){nt=jn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}nt=null}}else nt=it?jn(t.stateNode.nextSibling):null;return!0}function Hy(){for(var t=nt;t;)t=jn(t.nextSibling)}function yi(){nt=it=null,re=!1}function eh(t){wt===null?wt=[t]:wt.push(t)}var gS=mn.ReactCurrentBatchConfig;function Qi(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(x(309));var r=n.stateNode}if(!r)throw Error(x(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(x(284));if(!n._owner)throw Error(x(290,t))}return t}function Uo(t,e){throw t=Object.prototype.toString.call(e),Error(x(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Ep(t){var e=t._init;return e(t._payload)}function Ky(t){function e(v,p){if(t){var g=v.deletions;g===null?(v.deletions=[p],v.flags|=16):g.push(p)}}function n(v,p){if(!t)return null;for(;p!==null;)e(v,p),p=p.sibling;return null}function r(v,p){for(v=new Map;p!==null;)p.key!==null?v.set(p.key,p):v.set(p.index,p),p=p.sibling;return v}function i(v,p){return v=zn(v,p),v.index=0,v.sibling=null,v}function s(v,p,g){return v.index=g,t?(g=v.alternate,g!==null?(g=g.index,g<p?(v.flags|=2,p):g):(v.flags|=2,p)):(v.flags|=1048576,p)}function o(v){return t&&v.alternate===null&&(v.flags|=2),v}function a(v,p,g,E){return p===null||p.tag!==6?(p=Dc(g,v.mode,E),p.return=v,p):(p=i(p,g),p.return=v,p)}function l(v,p,g,E){var C=g.type;return C===Vr?u(v,p,g.props.children,E,g.key):p!==null&&(p.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===_n&&Ep(C)===p.type)?(E=i(p,g.props),E.ref=Qi(v,p,g),E.return=v,E):(E=la(g.type,g.key,g.props,null,v.mode,E),E.ref=Qi(v,p,g),E.return=v,E)}function c(v,p,g,E){return p===null||p.tag!==4||p.stateNode.containerInfo!==g.containerInfo||p.stateNode.implementation!==g.implementation?(p=Mc(g,v.mode,E),p.return=v,p):(p=i(p,g.children||[]),p.return=v,p)}function u(v,p,g,E,C){return p===null||p.tag!==7?(p=pr(g,v.mode,E,C),p.return=v,p):(p=i(p,g),p.return=v,p)}function d(v,p,g){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Dc(""+p,v.mode,g),p.return=v,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case No:return g=la(p.type,p.key,p.props,null,v.mode,g),g.ref=Qi(v,null,p),g.return=v,g;case Wr:return p=Mc(p,v.mode,g),p.return=v,p;case _n:var E=p._init;return d(v,E(p._payload),g)}if(is(p)||Vi(p))return p=pr(p,v.mode,g,null),p.return=v,p;Uo(v,p)}return null}function f(v,p,g,E){var C=p!==null?p.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return C!==null?null:a(v,p,""+g,E);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case No:return g.key===C?l(v,p,g,E):null;case Wr:return g.key===C?c(v,p,g,E):null;case _n:return C=g._init,f(v,p,C(g._payload),E)}if(is(g)||Vi(g))return C!==null?null:u(v,p,g,E,null);Uo(v,g)}return null}function m(v,p,g,E,C){if(typeof E=="string"&&E!==""||typeof E=="number")return v=v.get(g)||null,a(p,v,""+E,C);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case No:return v=v.get(E.key===null?g:E.key)||null,l(p,v,E,C);case Wr:return v=v.get(E.key===null?g:E.key)||null,c(p,v,E,C);case _n:var S=E._init;return m(v,p,g,S(E._payload),C)}if(is(E)||Vi(E))return v=v.get(g)||null,u(p,v,E,C,null);Uo(p,E)}return null}function y(v,p,g,E){for(var C=null,S=null,T=p,R=p=0,B=null;T!==null&&R<g.length;R++){T.index>R?(B=T,T=null):B=T.sibling;var O=f(v,T,g[R],E);if(O===null){T===null&&(T=B);break}t&&T&&O.alternate===null&&e(v,T),p=s(O,p,R),S===null?C=O:S.sibling=O,S=O,T=B}if(R===g.length)return n(v,T),re&&ir(v,R),C;if(T===null){for(;R<g.length;R++)T=d(v,g[R],E),T!==null&&(p=s(T,p,R),S===null?C=T:S.sibling=T,S=T);return re&&ir(v,R),C}for(T=r(v,T);R<g.length;R++)B=m(T,v,R,g[R],E),B!==null&&(t&&B.alternate!==null&&T.delete(B.key===null?R:B.key),p=s(B,p,R),S===null?C=B:S.sibling=B,S=B);return t&&T.forEach(function(Oe){return e(v,Oe)}),re&&ir(v,R),C}function _(v,p,g,E){var C=Vi(g);if(typeof C!="function")throw Error(x(150));if(g=C.call(g),g==null)throw Error(x(151));for(var S=C=null,T=p,R=p=0,B=null,O=g.next();T!==null&&!O.done;R++,O=g.next()){T.index>R?(B=T,T=null):B=T.sibling;var Oe=f(v,T,O.value,E);if(Oe===null){T===null&&(T=B);break}t&&T&&Oe.alternate===null&&e(v,T),p=s(Oe,p,R),S===null?C=Oe:S.sibling=Oe,S=Oe,T=B}if(O.done)return n(v,T),re&&ir(v,R),C;if(T===null){for(;!O.done;R++,O=g.next())O=d(v,O.value,E),O!==null&&(p=s(O,p,R),S===null?C=O:S.sibling=O,S=O);return re&&ir(v,R),C}for(T=r(v,T);!O.done;R++,O=g.next())O=m(T,v,R,O.value,E),O!==null&&(t&&O.alternate!==null&&T.delete(O.key===null?R:O.key),p=s(O,p,R),S===null?C=O:S.sibling=O,S=O);return t&&T.forEach(function(W){return e(v,W)}),re&&ir(v,R),C}function w(v,p,g,E){if(typeof g=="object"&&g!==null&&g.type===Vr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case No:e:{for(var C=g.key,S=p;S!==null;){if(S.key===C){if(C=g.type,C===Vr){if(S.tag===7){n(v,S.sibling),p=i(S,g.props.children),p.return=v,v=p;break e}}else if(S.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===_n&&Ep(C)===S.type){n(v,S.sibling),p=i(S,g.props),p.ref=Qi(v,S,g),p.return=v,v=p;break e}n(v,S);break}else e(v,S);S=S.sibling}g.type===Vr?(p=pr(g.props.children,v.mode,E,g.key),p.return=v,v=p):(E=la(g.type,g.key,g.props,null,v.mode,E),E.ref=Qi(v,p,g),E.return=v,v=E)}return o(v);case Wr:e:{for(S=g.key;p!==null;){if(p.key===S)if(p.tag===4&&p.stateNode.containerInfo===g.containerInfo&&p.stateNode.implementation===g.implementation){n(v,p.sibling),p=i(p,g.children||[]),p.return=v,v=p;break e}else{n(v,p);break}else e(v,p);p=p.sibling}p=Mc(g,v.mode,E),p.return=v,v=p}return o(v);case _n:return S=g._init,w(v,p,S(g._payload),E)}if(is(g))return y(v,p,g,E);if(Vi(g))return _(v,p,g,E);Uo(v,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,p!==null&&p.tag===6?(n(v,p.sibling),p=i(p,g),p.return=v,v=p):(n(v,p),p=Dc(g,v.mode,E),p.return=v,v=p),o(v)):n(v,p)}return w}var vi=Ky(!0),Gy=Ky(!1),Na=Jn(null),ba=null,Jr=null,th=null;function nh(){th=Jr=ba=null}function rh(t){var e=Na.current;ne(Na),t._currentValue=e}function Fu(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function li(t,e){ba=t,th=Jr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(qe=!0),t.firstContext=null)}function pt(t){var e=t._currentValue;if(th!==t)if(t={context:t,memoizedValue:e,next:null},Jr===null){if(ba===null)throw Error(x(308));Jr=t,ba.dependencies={lanes:0,firstContext:t}}else Jr=Jr.next=t;return e}var cr=null;function ih(t){cr===null?cr=[t]:cr.push(t)}function qy(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,ih(e)):(n.next=i.next,i.next=n),e.interleaved=n,cn(t,r)}function cn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var wn=!1;function sh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Qy(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function nn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Fn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,$&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,cn(t,n)}return i=r.interleaved,i===null?(e.next=e,ih(r)):(e.next=i.next,i.next=e),r.interleaved=e,cn(t,n)}function na(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Vd(t,n)}}function kp(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ra(t,e,n,r){var i=t.updateQueue;wn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,u=c=l=null,a=s;do{var f=a.lane,m=a.eventTime;if((r&f)===f){u!==null&&(u=u.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,_=a;switch(f=e,m=n,_.tag){case 1:if(y=_.payload,typeof y=="function"){d=y.call(m,d,f);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=_.payload,f=typeof y=="function"?y.call(m,d,f):y,f==null)break e;d=ce({},d,f);break e;case 2:wn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else m={eventTime:m,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=m,l=d):u=u.next=m,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(u===null&&(l=d),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=u,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);wr|=o,t.lanes=o,t.memoizedState=d}}function Sp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(x(191,i));i.call(r)}}}var co={},Ut=Jn(co),Fs=Jn(co),Us=Jn(co);function ur(t){if(t===co)throw Error(x(174));return t}function oh(t,e){switch(Z(Us,e),Z(Fs,t),Z(Ut,co),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:vu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=vu(e,t)}ne(Ut),Z(Ut,e)}function _i(){ne(Ut),ne(Fs),ne(Us)}function Yy(t){ur(Us.current);var e=ur(Ut.current),n=vu(e,t.type);e!==n&&(Z(Fs,t),Z(Ut,n))}function ah(t){Fs.current===t&&(ne(Ut),ne(Fs))}var se=Jn(0);function Pa(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Nc=[];function lh(){for(var t=0;t<Nc.length;t++)Nc[t]._workInProgressVersionPrimary=null;Nc.length=0}var ra=mn.ReactCurrentDispatcher,bc=mn.ReactCurrentBatchConfig,_r=0,le=null,ge=null,Se=null,Aa=!1,ms=!1,$s=0,yS=0;function De(){throw Error(x(321))}function ch(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Tt(t[n],e[n]))return!1;return!0}function uh(t,e,n,r,i,s){if(_r=s,le=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ra.current=t===null||t.memoizedState===null?ES:kS,t=n(r,i),ms){s=0;do{if(ms=!1,$s=0,25<=s)throw Error(x(301));s+=1,Se=ge=null,e.updateQueue=null,ra.current=SS,t=n(r,i)}while(ms)}if(ra.current=Oa,e=ge!==null&&ge.next!==null,_r=0,Se=ge=le=null,Aa=!1,e)throw Error(x(300));return t}function dh(){var t=$s!==0;return $s=0,t}function Ot(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Se===null?le.memoizedState=Se=t:Se=Se.next=t,Se}function mt(){if(ge===null){var t=le.alternate;t=t!==null?t.memoizedState:null}else t=ge.next;var e=Se===null?le.memoizedState:Se.next;if(e!==null)Se=e,ge=t;else{if(t===null)throw Error(x(310));ge=t,t={memoizedState:ge.memoizedState,baseState:ge.baseState,baseQueue:ge.baseQueue,queue:ge.queue,next:null},Se===null?le.memoizedState=Se=t:Se=Se.next=t}return Se}function zs(t,e){return typeof e=="function"?e(t):e}function Rc(t){var e=mt(),n=e.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=t;var r=ge,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((_r&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,le.lanes|=u,wr|=u}c=c.next}while(c!==null&&c!==s);l===null?o=r:l.next=a,Tt(r,e.memoizedState)||(qe=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,le.lanes|=s,wr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Pc(t){var e=mt(),n=e.queue;if(n===null)throw Error(x(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Tt(s,e.memoizedState)||(qe=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Xy(){}function Jy(t,e){var n=le,r=mt(),i=e(),s=!Tt(r.memoizedState,i);if(s&&(r.memoizedState=i,qe=!0),r=r.queue,hh(tv.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Se!==null&&Se.memoizedState.tag&1){if(n.flags|=2048,Bs(9,ev.bind(null,n,r,i,e),void 0,null),Ie===null)throw Error(x(349));_r&30||Zy(n,e,i)}return i}function Zy(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=le.updateQueue,e===null?(e={lastEffect:null,stores:null},le.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function ev(t,e,n,r){e.value=n,e.getSnapshot=r,nv(e)&&rv(t)}function tv(t,e,n){return n(function(){nv(e)&&rv(t)})}function nv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Tt(t,n)}catch{return!0}}function rv(t){var e=cn(t,1);e!==null&&Ct(e,t,1,-1)}function xp(t){var e=Ot();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:zs,lastRenderedState:t},e.queue=t,t=t.dispatch=wS.bind(null,le,t),[e.memoizedState,t]}function Bs(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=le.updateQueue,e===null?(e={lastEffect:null,stores:null},le.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function iv(){return mt().memoizedState}function ia(t,e,n,r){var i=Ot();le.flags|=t,i.memoizedState=Bs(1|e,n,void 0,r===void 0?null:r)}function kl(t,e,n,r){var i=mt();r=r===void 0?null:r;var s=void 0;if(ge!==null){var o=ge.memoizedState;if(s=o.destroy,r!==null&&ch(r,o.deps)){i.memoizedState=Bs(e,n,s,r);return}}le.flags|=t,i.memoizedState=Bs(1|e,n,s,r)}function Cp(t,e){return ia(8390656,8,t,e)}function hh(t,e){return kl(2048,8,t,e)}function sv(t,e){return kl(4,2,t,e)}function ov(t,e){return kl(4,4,t,e)}function av(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function lv(t,e,n){return n=n!=null?n.concat([t]):null,kl(4,4,av.bind(null,e,t),n)}function fh(){}function cv(t,e){var n=mt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ch(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function uv(t,e){var n=mt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ch(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function dv(t,e,n){return _r&21?(Tt(n,e)||(n=gy(),le.lanes|=n,wr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,qe=!0),t.memoizedState=n)}function vS(t,e){var n=V;V=n!==0&&4>n?n:4,t(!0);var r=bc.transition;bc.transition={};try{t(!1),e()}finally{V=n,bc.transition=r}}function hv(){return mt().memoizedState}function _S(t,e,n){var r=$n(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},fv(t))pv(e,n);else if(n=qy(t,e,n,r),n!==null){var i=Be();Ct(n,t,r,i),mv(n,e,r)}}function wS(t,e,n){var r=$n(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(fv(t))pv(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Tt(a,o)){var l=e.interleaved;l===null?(i.next=i,ih(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=qy(t,e,i,r),n!==null&&(i=Be(),Ct(n,t,r,i),mv(n,e,r))}}function fv(t){var e=t.alternate;return t===le||e!==null&&e===le}function pv(t,e){ms=Aa=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function mv(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Vd(t,n)}}var Oa={readContext:pt,useCallback:De,useContext:De,useEffect:De,useImperativeHandle:De,useInsertionEffect:De,useLayoutEffect:De,useMemo:De,useReducer:De,useRef:De,useState:De,useDebugValue:De,useDeferredValue:De,useTransition:De,useMutableSource:De,useSyncExternalStore:De,useId:De,unstable_isNewReconciler:!1},ES={readContext:pt,useCallback:function(t,e){return Ot().memoizedState=[t,e===void 0?null:e],t},useContext:pt,useEffect:Cp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ia(4194308,4,av.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ia(4194308,4,t,e)},useInsertionEffect:function(t,e){return ia(4,2,t,e)},useMemo:function(t,e){var n=Ot();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Ot();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=_S.bind(null,le,t),[r.memoizedState,t]},useRef:function(t){var e=Ot();return t={current:t},e.memoizedState=t},useState:xp,useDebugValue:fh,useDeferredValue:function(t){return Ot().memoizedState=t},useTransition:function(){var t=xp(!1),e=t[0];return t=vS.bind(null,t[1]),Ot().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=le,i=Ot();if(re){if(n===void 0)throw Error(x(407));n=n()}else{if(n=e(),Ie===null)throw Error(x(349));_r&30||Zy(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Cp(tv.bind(null,r,s,t),[t]),r.flags|=2048,Bs(9,ev.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=Ot(),e=Ie.identifierPrefix;if(re){var n=Xt,r=Yt;n=(r&~(1<<32-xt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=$s++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=yS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},kS={readContext:pt,useCallback:cv,useContext:pt,useEffect:hh,useImperativeHandle:lv,useInsertionEffect:sv,useLayoutEffect:ov,useMemo:uv,useReducer:Rc,useRef:iv,useState:function(){return Rc(zs)},useDebugValue:fh,useDeferredValue:function(t){var e=mt();return dv(e,ge.memoizedState,t)},useTransition:function(){var t=Rc(zs)[0],e=mt().memoizedState;return[t,e]},useMutableSource:Xy,useSyncExternalStore:Jy,useId:hv,unstable_isNewReconciler:!1},SS={readContext:pt,useCallback:cv,useContext:pt,useEffect:hh,useImperativeHandle:lv,useInsertionEffect:sv,useLayoutEffect:ov,useMemo:uv,useReducer:Pc,useRef:iv,useState:function(){return Pc(zs)},useDebugValue:fh,useDeferredValue:function(t){var e=mt();return ge===null?e.memoizedState=t:dv(e,ge.memoizedState,t)},useTransition:function(){var t=Pc(zs)[0],e=mt().memoizedState;return[t,e]},useMutableSource:Xy,useSyncExternalStore:Jy,useId:hv,unstable_isNewReconciler:!1};function vt(t,e){if(t&&t.defaultProps){e=ce({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Uu(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ce({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Sl={isMounted:function(t){return(t=t._reactInternals)?Or(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Be(),i=$n(t),s=nn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Fn(t,s,i),e!==null&&(Ct(e,t,i,r),na(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Be(),i=$n(t),s=nn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Fn(t,s,i),e!==null&&(Ct(e,t,i,r),na(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Be(),r=$n(t),i=nn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Fn(t,i,r),e!==null&&(Ct(e,t,r,n),na(e,t,r))}};function Ip(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ds(n,r)||!Ds(i,s):!0}function gv(t,e,n){var r=!1,i=Kn,s=e.contextType;return typeof s=="object"&&s!==null?s=pt(s):(i=Xe(e)?yr:Fe.current,r=e.contextTypes,s=(r=r!=null)?gi(t,i):Kn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Sl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Tp(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Sl.enqueueReplaceState(e,e.state,null)}function $u(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},sh(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=pt(s):(s=Xe(e)?yr:Fe.current,i.context=gi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Uu(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Sl.enqueueReplaceState(i,i.state,null),Ra(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function wi(t,e){try{var n="",r=e;do n+=XE(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Ac(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function zu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var xS=typeof WeakMap=="function"?WeakMap:Map;function yv(t,e,n){n=nn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ma||(Ma=!0,Xu=r),zu(t,e)},n}function vv(t,e,n){n=nn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){zu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){zu(t,e),typeof r!="function"&&(Un===null?Un=new Set([this]):Un.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Np(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new xS;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=FS.bind(null,t,e,n),e.then(t,t))}function bp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Rp(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=nn(-1,1),e.tag=2,Fn(n,e,1))),n.lanes|=1),t)}var CS=mn.ReactCurrentOwner,qe=!1;function $e(t,e,n,r){e.child=t===null?Gy(e,null,n,r):vi(e,t.child,n,r)}function Pp(t,e,n,r,i){n=n.render;var s=e.ref;return li(e,i),r=uh(t,e,n,r,s,i),n=dh(),t!==null&&!qe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,un(t,e,i)):(re&&n&&Jd(e),e.flags|=1,$e(t,e,r,i),e.child)}function Ap(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Eh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,_v(t,e,s,r,i)):(t=la(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ds,n(o,r)&&t.ref===e.ref)return un(t,e,i)}return e.flags|=1,t=zn(s,r),t.ref=e.ref,t.return=e,e.child=t}function _v(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Ds(s,r)&&t.ref===e.ref)if(qe=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(qe=!0);else return e.lanes=t.lanes,un(t,e,i)}return Bu(t,e,n,r,i)}function wv(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Z(ei,tt),tt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Z(ei,tt),tt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Z(ei,tt),tt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Z(ei,tt),tt|=r;return $e(t,e,i,n),e.child}function Ev(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Bu(t,e,n,r,i){var s=Xe(n)?yr:Fe.current;return s=gi(e,s),li(e,i),n=uh(t,e,n,r,s,i),r=dh(),t!==null&&!qe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,un(t,e,i)):(re&&r&&Jd(e),e.flags|=1,$e(t,e,n,i),e.child)}function Op(t,e,n,r,i){if(Xe(n)){var s=!0;Ca(e)}else s=!1;if(li(e,i),e.stateNode===null)sa(t,e),gv(e,n,r),$u(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=pt(c):(c=Xe(n)?yr:Fe.current,c=gi(e,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==c)&&Tp(e,o,r,c),wn=!1;var f=e.memoizedState;o.state=f,Ra(e,r,o,i),l=e.memoizedState,a!==r||f!==l||Ye.current||wn?(typeof u=="function"&&(Uu(e,n,u,r),l=e.memoizedState),(a=wn||Ip(e,n,a,r,f,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Qy(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:vt(e.type,a),o.props=c,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=pt(l):(l=Xe(n)?yr:Fe.current,l=gi(e,l));var m=n.getDerivedStateFromProps;(u=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&Tp(e,o,r,l),wn=!1,f=e.memoizedState,o.state=f,Ra(e,r,o,i);var y=e.memoizedState;a!==d||f!==y||Ye.current||wn?(typeof m=="function"&&(Uu(e,n,m,r),y=e.memoizedState),(c=wn||Ip(e,n,c,r,f,y,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return Wu(t,e,n,r,s,i)}function Wu(t,e,n,r,i,s){Ev(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&vp(e,n,!1),un(t,e,s);r=e.stateNode,CS.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=vi(e,t.child,null,s),e.child=vi(e,null,a,s)):$e(t,e,a,s),e.memoizedState=r.state,i&&vp(e,n,!0),e.child}function kv(t){var e=t.stateNode;e.pendingContext?yp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&yp(t,e.context,!1),oh(t,e.containerInfo)}function Dp(t,e,n,r,i){return yi(),eh(i),e.flags|=256,$e(t,e,n,r),e.child}var Vu={dehydrated:null,treeContext:null,retryLane:0};function Hu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Sv(t,e,n){var r=e.pendingProps,i=se.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Z(se,i&1),t===null)return ju(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Il(o,r,0,null),t=pr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Hu(n),e.memoizedState=Vu,t):ph(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return IS(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=zn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=zn(a,s):(s=pr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Hu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Vu,r}return s=t.child,t=s.sibling,r=zn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function ph(t,e){return e=Il({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function $o(t,e,n,r){return r!==null&&eh(r),vi(e,t.child,null,n),t=ph(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function IS(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Ac(Error(x(422))),$o(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Il({mode:"visible",children:r.children},i,0,null),s=pr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&vi(e,t.child,null,o),e.child.memoizedState=Hu(o),e.memoizedState=Vu,s);if(!(e.mode&1))return $o(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(x(419)),r=Ac(s,r,void 0),$o(t,e,o,r)}if(a=(o&t.childLanes)!==0,qe||a){if(r=Ie,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,cn(t,i),Ct(r,t,i,-1))}return wh(),r=Ac(Error(x(421))),$o(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=US.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,nt=jn(i.nextSibling),it=e,re=!0,wt=null,t!==null&&(ct[ut++]=Yt,ct[ut++]=Xt,ct[ut++]=vr,Yt=t.id,Xt=t.overflow,vr=e),e=ph(e,r.children),e.flags|=4096,e)}function Mp(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Fu(t.return,e,n)}function Oc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function xv(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if($e(t,e,r.children,n),r=se.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Mp(t,n,e);else if(t.tag===19)Mp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Z(se,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Pa(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Oc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Pa(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Oc(e,!0,n,null,s);break;case"together":Oc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function sa(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function un(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),wr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(x(153));if(e.child!==null){for(t=e.child,n=zn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=zn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function TS(t,e,n){switch(e.tag){case 3:kv(e),yi();break;case 5:Yy(e);break;case 1:Xe(e.type)&&Ca(e);break;case 4:oh(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Z(Na,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Z(se,se.current&1),e.flags|=128,null):n&e.child.childLanes?Sv(t,e,n):(Z(se,se.current&1),t=un(t,e,n),t!==null?t.sibling:null);Z(se,se.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return xv(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Z(se,se.current),r)break;return null;case 22:case 23:return e.lanes=0,wv(t,e,n)}return un(t,e,n)}var Cv,Ku,Iv,Tv;Cv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ku=function(){};Iv=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ur(Ut.current);var s=null;switch(n){case"input":i=pu(t,i),r=pu(t,r),s=[];break;case"select":i=ce({},i,{value:void 0}),r=ce({},r,{value:void 0}),s=[];break;case"textarea":i=yu(t,i),r=yu(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Sa)}_u(n,r);var o;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ts.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ts.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&te("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Tv=function(t,e,n,r){n!==r&&(e.flags|=4)};function Yi(t,e){if(!re)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Me(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function NS(t,e,n){var r=e.pendingProps;switch(Zd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Me(e),null;case 1:return Xe(e.type)&&xa(),Me(e),null;case 3:return r=e.stateNode,_i(),ne(Ye),ne(Fe),lh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Fo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,wt!==null&&(ed(wt),wt=null))),Ku(t,e),Me(e),null;case 5:ah(e);var i=ur(Us.current);if(n=e.type,t!==null&&e.stateNode!=null)Iv(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(x(166));return Me(e),null}if(t=ur(Ut.current),Fo(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Dt]=e,r[js]=s,t=(e.mode&1)!==0,n){case"dialog":te("cancel",r),te("close",r);break;case"iframe":case"object":case"embed":te("load",r);break;case"video":case"audio":for(i=0;i<os.length;i++)te(os[i],r);break;case"source":te("error",r);break;case"img":case"image":case"link":te("error",r),te("load",r);break;case"details":te("toggle",r);break;case"input":Vf(r,s),te("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},te("invalid",r);break;case"textarea":Kf(r,s),te("invalid",r)}_u(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&jo(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&jo(r.textContent,a,t),i=["children",""+a]):Ts.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&te("scroll",r)}switch(n){case"input":bo(r),Hf(r,s,!0);break;case"textarea":bo(r),Gf(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Sa)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ty(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Dt]=e,t[js]=r,Cv(t,e,!1,!1),e.stateNode=t;e:{switch(o=wu(n,r),n){case"dialog":te("cancel",t),te("close",t),i=r;break;case"iframe":case"object":case"embed":te("load",t),i=r;break;case"video":case"audio":for(i=0;i<os.length;i++)te(os[i],t);i=r;break;case"source":te("error",t),i=r;break;case"img":case"image":case"link":te("error",t),te("load",t),i=r;break;case"details":te("toggle",t),i=r;break;case"input":Vf(t,r),i=pu(t,r),te("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ce({},r,{value:void 0}),te("invalid",t);break;case"textarea":Kf(t,r),i=yu(t,r),te("invalid",t);break;default:i=r}_u(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?iy(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&ny(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ns(t,l):typeof l=="number"&&Ns(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ts.hasOwnProperty(s)?l!=null&&s==="onScroll"&&te("scroll",t):l!=null&&Fd(t,s,l,o))}switch(n){case"input":bo(t),Hf(t,r,!1);break;case"textarea":bo(t),Gf(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Hn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ii(t,!!r.multiple,s,!1):r.defaultValue!=null&&ii(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Sa)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Me(e),null;case 6:if(t&&e.stateNode!=null)Tv(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(x(166));if(n=ur(Us.current),ur(Ut.current),Fo(e)){if(r=e.stateNode,n=e.memoizedProps,r[Dt]=e,(s=r.nodeValue!==n)&&(t=it,t!==null))switch(t.tag){case 3:jo(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&jo(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Dt]=e,e.stateNode=r}return Me(e),null;case 13:if(ne(se),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(re&&nt!==null&&e.mode&1&&!(e.flags&128))Hy(),yi(),e.flags|=98560,s=!1;else if(s=Fo(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(x(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(x(317));s[Dt]=e}else yi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Me(e),s=!1}else wt!==null&&(ed(wt),wt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||se.current&1?_e===0&&(_e=3):wh())),e.updateQueue!==null&&(e.flags|=4),Me(e),null);case 4:return _i(),Ku(t,e),t===null&&Ms(e.stateNode.containerInfo),Me(e),null;case 10:return rh(e.type._context),Me(e),null;case 17:return Xe(e.type)&&xa(),Me(e),null;case 19:if(ne(se),s=e.memoizedState,s===null)return Me(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Yi(s,!1);else{if(_e!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Pa(t),o!==null){for(e.flags|=128,Yi(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Z(se,se.current&1|2),e.child}t=t.sibling}s.tail!==null&&pe()>Ei&&(e.flags|=128,r=!0,Yi(s,!1),e.lanes=4194304)}else{if(!r)if(t=Pa(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Yi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!re)return Me(e),null}else 2*pe()-s.renderingStartTime>Ei&&n!==1073741824&&(e.flags|=128,r=!0,Yi(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=pe(),e.sibling=null,n=se.current,Z(se,r?n&1|2:n&1),e):(Me(e),null);case 22:case 23:return _h(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?tt&1073741824&&(Me(e),e.subtreeFlags&6&&(e.flags|=8192)):Me(e),null;case 24:return null;case 25:return null}throw Error(x(156,e.tag))}function bS(t,e){switch(Zd(e),e.tag){case 1:return Xe(e.type)&&xa(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return _i(),ne(Ye),ne(Fe),lh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return ah(e),null;case 13:if(ne(se),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(x(340));yi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ne(se),null;case 4:return _i(),null;case 10:return rh(e.type._context),null;case 22:case 23:return _h(),null;case 24:return null;default:return null}}var zo=!1,Le=!1,RS=typeof WeakSet=="function"?WeakSet:Set,N=null;function Zr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ue(t,e,r)}else n.current=null}function Gu(t,e,n){try{n()}catch(r){ue(t,e,r)}}var Lp=!1;function PS(t,e){if(Ru=wa,t=Ay(),Xd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,d=t,f=null;t:for(;;){for(var m;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(m=d.firstChild)!==null;)f=d,d=m;for(;;){if(d===t)break t;if(f===n&&++c===i&&(a=o),f===s&&++u===r&&(l=o),(m=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Pu={focusedElem:t,selectionRange:n},wa=!1,N=e;N!==null;)if(e=N,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,N=t;else for(;N!==null;){e=N;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var _=y.memoizedProps,w=y.memoizedState,v=e.stateNode,p=v.getSnapshotBeforeUpdate(e.elementType===e.type?_:vt(e.type,_),w);v.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(x(163))}}catch(E){ue(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,N=t;break}N=e.return}return y=Lp,Lp=!1,y}function gs(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Gu(e,n,s)}i=i.next}while(i!==r)}}function xl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function qu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Nv(t){var e=t.alternate;e!==null&&(t.alternate=null,Nv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Dt],delete e[js],delete e[Du],delete e[fS],delete e[pS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function bv(t){return t.tag===5||t.tag===3||t.tag===4}function jp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||bv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Qu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Sa));else if(r!==4&&(t=t.child,t!==null))for(Qu(t,e,n),t=t.sibling;t!==null;)Qu(t,e,n),t=t.sibling}function Yu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Yu(t,e,n),t=t.sibling;t!==null;)Yu(t,e,n),t=t.sibling}var Re=null,_t=!1;function yn(t,e,n){for(n=n.child;n!==null;)Rv(t,e,n),n=n.sibling}function Rv(t,e,n){if(Ft&&typeof Ft.onCommitFiberUnmount=="function")try{Ft.onCommitFiberUnmount(gl,n)}catch{}switch(n.tag){case 5:Le||Zr(n,e);case 6:var r=Re,i=_t;Re=null,yn(t,e,n),Re=r,_t=i,Re!==null&&(_t?(t=Re,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Re.removeChild(n.stateNode));break;case 18:Re!==null&&(_t?(t=Re,n=n.stateNode,t.nodeType===8?Ic(t.parentNode,n):t.nodeType===1&&Ic(t,n),As(t)):Ic(Re,n.stateNode));break;case 4:r=Re,i=_t,Re=n.stateNode.containerInfo,_t=!0,yn(t,e,n),Re=r,_t=i;break;case 0:case 11:case 14:case 15:if(!Le&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Gu(n,e,o),i=i.next}while(i!==r)}yn(t,e,n);break;case 1:if(!Le&&(Zr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ue(n,e,a)}yn(t,e,n);break;case 21:yn(t,e,n);break;case 22:n.mode&1?(Le=(r=Le)||n.memoizedState!==null,yn(t,e,n),Le=r):yn(t,e,n);break;default:yn(t,e,n)}}function Fp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new RS),e.forEach(function(r){var i=$S.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function yt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Re=a.stateNode,_t=!1;break e;case 3:Re=a.stateNode.containerInfo,_t=!0;break e;case 4:Re=a.stateNode.containerInfo,_t=!0;break e}a=a.return}if(Re===null)throw Error(x(160));Rv(s,o,i),Re=null,_t=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){ue(i,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Pv(e,t),e=e.sibling}function Pv(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(yt(e,t),Pt(t),r&4){try{gs(3,t,t.return),xl(3,t)}catch(_){ue(t,t.return,_)}try{gs(5,t,t.return)}catch(_){ue(t,t.return,_)}}break;case 1:yt(e,t),Pt(t),r&512&&n!==null&&Zr(n,n.return);break;case 5:if(yt(e,t),Pt(t),r&512&&n!==null&&Zr(n,n.return),t.flags&32){var i=t.stateNode;try{Ns(i,"")}catch(_){ue(t,t.return,_)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Zg(i,s),wu(a,o);var c=wu(a,s);for(o=0;o<l.length;o+=2){var u=l[o],d=l[o+1];u==="style"?iy(i,d):u==="dangerouslySetInnerHTML"?ny(i,d):u==="children"?Ns(i,d):Fd(i,u,d,c)}switch(a){case"input":mu(i,s);break;case"textarea":ey(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?ii(i,!!s.multiple,m,!1):f!==!!s.multiple&&(s.defaultValue!=null?ii(i,!!s.multiple,s.defaultValue,!0):ii(i,!!s.multiple,s.multiple?[]:"",!1))}i[js]=s}catch(_){ue(t,t.return,_)}}break;case 6:if(yt(e,t),Pt(t),r&4){if(t.stateNode===null)throw Error(x(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(_){ue(t,t.return,_)}}break;case 3:if(yt(e,t),Pt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{As(e.containerInfo)}catch(_){ue(t,t.return,_)}break;case 4:yt(e,t),Pt(t);break;case 13:yt(e,t),Pt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(yh=pe())),r&4&&Fp(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(Le=(c=Le)||u,yt(e,t),Le=c):yt(e,t),Pt(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(N=t,u=t.child;u!==null;){for(d=N=u;N!==null;){switch(f=N,m=f.child,f.tag){case 0:case 11:case 14:case 15:gs(4,f,f.return);break;case 1:Zr(f,f.return);var y=f.stateNode;if(typeof y.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(_){ue(r,n,_)}}break;case 5:Zr(f,f.return);break;case 22:if(f.memoizedState!==null){$p(d);continue}}m!==null?(m.return=f,N=m):$p(d)}u=u.sibling}e:for(u=null,d=t;;){if(d.tag===5){if(u===null){u=d;try{i=d.stateNode,c?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=ry("display",o))}catch(_){ue(t,t.return,_)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(_){ue(t,t.return,_)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:yt(e,t),Pt(t),r&4&&Fp(t);break;case 21:break;default:yt(e,t),Pt(t)}}function Pt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(bv(n)){var r=n;break e}n=n.return}throw Error(x(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ns(i,""),r.flags&=-33);var s=jp(t);Yu(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=jp(t);Qu(t,a,o);break;default:throw Error(x(161))}}catch(l){ue(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function AS(t,e,n){N=t,Av(t)}function Av(t,e,n){for(var r=(t.mode&1)!==0;N!==null;){var i=N,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||zo;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Le;a=zo;var c=Le;if(zo=o,(Le=l)&&!c)for(N=i;N!==null;)o=N,l=o.child,o.tag===22&&o.memoizedState!==null?zp(i):l!==null?(l.return=o,N=l):zp(i);for(;s!==null;)N=s,Av(s),s=s.sibling;N=i,zo=a,Le=c}Up(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,N=s):Up(t)}}function Up(t){for(;N!==null;){var e=N;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Le||xl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Le)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:vt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Sp(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Sp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&As(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(x(163))}Le||e.flags&512&&qu(e)}catch(f){ue(e,e.return,f)}}if(e===t){N=null;break}if(n=e.sibling,n!==null){n.return=e.return,N=n;break}N=e.return}}function $p(t){for(;N!==null;){var e=N;if(e===t){N=null;break}var n=e.sibling;if(n!==null){n.return=e.return,N=n;break}N=e.return}}function zp(t){for(;N!==null;){var e=N;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{xl(4,e)}catch(l){ue(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){ue(e,i,l)}}var s=e.return;try{qu(e)}catch(l){ue(e,s,l)}break;case 5:var o=e.return;try{qu(e)}catch(l){ue(e,o,l)}}}catch(l){ue(e,e.return,l)}if(e===t){N=null;break}var a=e.sibling;if(a!==null){a.return=e.return,N=a;break}N=e.return}}var OS=Math.ceil,Da=mn.ReactCurrentDispatcher,mh=mn.ReactCurrentOwner,ft=mn.ReactCurrentBatchConfig,$=0,Ie=null,me=null,Pe=0,tt=0,ei=Jn(0),_e=0,Ws=null,wr=0,Cl=0,gh=0,ys=null,Ge=null,yh=0,Ei=1/0,Gt=null,Ma=!1,Xu=null,Un=null,Bo=!1,Rn=null,La=0,vs=0,Ju=null,oa=-1,aa=0;function Be(){return $&6?pe():oa!==-1?oa:oa=pe()}function $n(t){return t.mode&1?$&2&&Pe!==0?Pe&-Pe:gS.transition!==null?(aa===0&&(aa=gy()),aa):(t=V,t!==0||(t=window.event,t=t===void 0?16:Sy(t.type)),t):1}function Ct(t,e,n,r){if(50<vs)throw vs=0,Ju=null,Error(x(185));oo(t,n,r),(!($&2)||t!==Ie)&&(t===Ie&&(!($&2)&&(Cl|=n),_e===4&&kn(t,Pe)),Je(t,r),n===1&&$===0&&!(e.mode&1)&&(Ei=pe()+500,El&&Zn()))}function Je(t,e){var n=t.callbackNode;gk(t,e);var r=_a(t,t===Ie?Pe:0);if(r===0)n!==null&&Yf(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Yf(n),e===1)t.tag===0?mS(Bp.bind(null,t)):By(Bp.bind(null,t)),dS(function(){!($&6)&&Zn()}),n=null;else{switch(yy(r)){case 1:n=Wd;break;case 4:n=py;break;case 16:n=va;break;case 536870912:n=my;break;default:n=va}n=$v(n,Ov.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Ov(t,e){if(oa=-1,aa=0,$&6)throw Error(x(327));var n=t.callbackNode;if(ci()&&t.callbackNode!==n)return null;var r=_a(t,t===Ie?Pe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ja(t,r);else{e=r;var i=$;$|=2;var s=Mv();(Ie!==t||Pe!==e)&&(Gt=null,Ei=pe()+500,fr(t,e));do try{LS();break}catch(a){Dv(t,a)}while(!0);nh(),Da.current=s,$=i,me!==null?e=0:(Ie=null,Pe=0,e=_e)}if(e!==0){if(e===2&&(i=Cu(t),i!==0&&(r=i,e=Zu(t,i))),e===1)throw n=Ws,fr(t,0),kn(t,r),Je(t,pe()),n;if(e===6)kn(t,r);else{if(i=t.current.alternate,!(r&30)&&!DS(i)&&(e=ja(t,r),e===2&&(s=Cu(t),s!==0&&(r=s,e=Zu(t,s))),e===1))throw n=Ws,fr(t,0),kn(t,r),Je(t,pe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(x(345));case 2:sr(t,Ge,Gt);break;case 3:if(kn(t,r),(r&130023424)===r&&(e=yh+500-pe(),10<e)){if(_a(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Be(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Ou(sr.bind(null,t,Ge,Gt),e);break}sr(t,Ge,Gt);break;case 4:if(kn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-xt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=pe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*OS(r/1960))-r,10<r){t.timeoutHandle=Ou(sr.bind(null,t,Ge,Gt),r);break}sr(t,Ge,Gt);break;case 5:sr(t,Ge,Gt);break;default:throw Error(x(329))}}}return Je(t,pe()),t.callbackNode===n?Ov.bind(null,t):null}function Zu(t,e){var n=ys;return t.current.memoizedState.isDehydrated&&(fr(t,e).flags|=256),t=ja(t,e),t!==2&&(e=Ge,Ge=n,e!==null&&ed(e)),t}function ed(t){Ge===null?Ge=t:Ge.push.apply(Ge,t)}function DS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Tt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function kn(t,e){for(e&=~gh,e&=~Cl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-xt(e),r=1<<n;t[n]=-1,e&=~r}}function Bp(t){if($&6)throw Error(x(327));ci();var e=_a(t,0);if(!(e&1))return Je(t,pe()),null;var n=ja(t,e);if(t.tag!==0&&n===2){var r=Cu(t);r!==0&&(e=r,n=Zu(t,r))}if(n===1)throw n=Ws,fr(t,0),kn(t,e),Je(t,pe()),n;if(n===6)throw Error(x(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,sr(t,Ge,Gt),Je(t,pe()),null}function vh(t,e){var n=$;$|=1;try{return t(e)}finally{$=n,$===0&&(Ei=pe()+500,El&&Zn())}}function Er(t){Rn!==null&&Rn.tag===0&&!($&6)&&ci();var e=$;$|=1;var n=ft.transition,r=V;try{if(ft.transition=null,V=1,t)return t()}finally{V=r,ft.transition=n,$=e,!($&6)&&Zn()}}function _h(){tt=ei.current,ne(ei)}function fr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,uS(n)),me!==null)for(n=me.return;n!==null;){var r=n;switch(Zd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&xa();break;case 3:_i(),ne(Ye),ne(Fe),lh();break;case 5:ah(r);break;case 4:_i();break;case 13:ne(se);break;case 19:ne(se);break;case 10:rh(r.type._context);break;case 22:case 23:_h()}n=n.return}if(Ie=t,me=t=zn(t.current,null),Pe=tt=e,_e=0,Ws=null,gh=Cl=wr=0,Ge=ys=null,cr!==null){for(e=0;e<cr.length;e++)if(n=cr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}cr=null}return t}function Dv(t,e){do{var n=me;try{if(nh(),ra.current=Oa,Aa){for(var r=le.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Aa=!1}if(_r=0,Se=ge=le=null,ms=!1,$s=0,mh.current=null,n===null||n.return===null){_e=1,Ws=e,me=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Pe,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var m=bp(o);if(m!==null){m.flags&=-257,Rp(m,o,a,s,e),m.mode&1&&Np(s,c,e),e=m,l=c;var y=e.updateQueue;if(y===null){var _=new Set;_.add(l),e.updateQueue=_}else y.add(l);break e}else{if(!(e&1)){Np(s,c,e),wh();break e}l=Error(x(426))}}else if(re&&a.mode&1){var w=bp(o);if(w!==null){!(w.flags&65536)&&(w.flags|=256),Rp(w,o,a,s,e),eh(wi(l,a));break e}}s=l=wi(l,a),_e!==4&&(_e=2),ys===null?ys=[s]:ys.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var v=yv(s,l,e);kp(s,v);break e;case 1:a=l;var p=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Un===null||!Un.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=vv(s,a,e);kp(s,E);break e}}s=s.return}while(s!==null)}jv(n)}catch(C){e=C,me===n&&n!==null&&(me=n=n.return);continue}break}while(!0)}function Mv(){var t=Da.current;return Da.current=Oa,t===null?Oa:t}function wh(){(_e===0||_e===3||_e===2)&&(_e=4),Ie===null||!(wr&268435455)&&!(Cl&268435455)||kn(Ie,Pe)}function ja(t,e){var n=$;$|=2;var r=Mv();(Ie!==t||Pe!==e)&&(Gt=null,fr(t,e));do try{MS();break}catch(i){Dv(t,i)}while(!0);if(nh(),$=n,Da.current=r,me!==null)throw Error(x(261));return Ie=null,Pe=0,_e}function MS(){for(;me!==null;)Lv(me)}function LS(){for(;me!==null&&!ak();)Lv(me)}function Lv(t){var e=Uv(t.alternate,t,tt);t.memoizedProps=t.pendingProps,e===null?jv(t):me=e,mh.current=null}function jv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=bS(n,e),n!==null){n.flags&=32767,me=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{_e=6,me=null;return}}else if(n=NS(n,e,tt),n!==null){me=n;return}if(e=e.sibling,e!==null){me=e;return}me=e=t}while(e!==null);_e===0&&(_e=5)}function sr(t,e,n){var r=V,i=ft.transition;try{ft.transition=null,V=1,jS(t,e,n,r)}finally{ft.transition=i,V=r}return null}function jS(t,e,n,r){do ci();while(Rn!==null);if($&6)throw Error(x(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(x(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(yk(t,s),t===Ie&&(me=Ie=null,Pe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Bo||(Bo=!0,$v(va,function(){return ci(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=ft.transition,ft.transition=null;var o=V;V=1;var a=$;$|=4,mh.current=null,PS(t,n),Pv(n,t),rS(Pu),wa=!!Ru,Pu=Ru=null,t.current=n,AS(n),lk(),$=a,V=o,ft.transition=s}else t.current=n;if(Bo&&(Bo=!1,Rn=t,La=i),s=t.pendingLanes,s===0&&(Un=null),dk(n.stateNode),Je(t,pe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ma)throw Ma=!1,t=Xu,Xu=null,t;return La&1&&t.tag!==0&&ci(),s=t.pendingLanes,s&1?t===Ju?vs++:(vs=0,Ju=t):vs=0,Zn(),null}function ci(){if(Rn!==null){var t=yy(La),e=ft.transition,n=V;try{if(ft.transition=null,V=16>t?16:t,Rn===null)var r=!1;else{if(t=Rn,Rn=null,La=0,$&6)throw Error(x(331));var i=$;for($|=4,N=t.current;N!==null;){var s=N,o=s.child;if(N.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(N=c;N!==null;){var u=N;switch(u.tag){case 0:case 11:case 15:gs(8,u,s)}var d=u.child;if(d!==null)d.return=u,N=d;else for(;N!==null;){u=N;var f=u.sibling,m=u.return;if(Nv(u),u===c){N=null;break}if(f!==null){f.return=m,N=f;break}N=m}}}var y=s.alternate;if(y!==null){var _=y.child;if(_!==null){y.child=null;do{var w=_.sibling;_.sibling=null,_=w}while(_!==null)}}N=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,N=o;else e:for(;N!==null;){if(s=N,s.flags&2048)switch(s.tag){case 0:case 11:case 15:gs(9,s,s.return)}var v=s.sibling;if(v!==null){v.return=s.return,N=v;break e}N=s.return}}var p=t.current;for(N=p;N!==null;){o=N;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,N=g;else e:for(o=p;N!==null;){if(a=N,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:xl(9,a)}}catch(C){ue(a,a.return,C)}if(a===o){N=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,N=E;break e}N=a.return}}if($=i,Zn(),Ft&&typeof Ft.onPostCommitFiberRoot=="function")try{Ft.onPostCommitFiberRoot(gl,t)}catch{}r=!0}return r}finally{V=n,ft.transition=e}}return!1}function Wp(t,e,n){e=wi(n,e),e=yv(t,e,1),t=Fn(t,e,1),e=Be(),t!==null&&(oo(t,1,e),Je(t,e))}function ue(t,e,n){if(t.tag===3)Wp(t,t,n);else for(;e!==null;){if(e.tag===3){Wp(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Un===null||!Un.has(r))){t=wi(n,t),t=vv(e,t,1),e=Fn(e,t,1),t=Be(),e!==null&&(oo(e,1,t),Je(e,t));break}}e=e.return}}function FS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Be(),t.pingedLanes|=t.suspendedLanes&n,Ie===t&&(Pe&n)===n&&(_e===4||_e===3&&(Pe&130023424)===Pe&&500>pe()-yh?fr(t,0):gh|=n),Je(t,e)}function Fv(t,e){e===0&&(t.mode&1?(e=Ao,Ao<<=1,!(Ao&130023424)&&(Ao=4194304)):e=1);var n=Be();t=cn(t,e),t!==null&&(oo(t,e,n),Je(t,n))}function US(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Fv(t,n)}function $S(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(x(314))}r!==null&&r.delete(e),Fv(t,n)}var Uv;Uv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ye.current)qe=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return qe=!1,TS(t,e,n);qe=!!(t.flags&131072)}else qe=!1,re&&e.flags&1048576&&Wy(e,Ta,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;sa(t,e),t=e.pendingProps;var i=gi(e,Fe.current);li(e,n),i=uh(null,e,r,t,i,n);var s=dh();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Xe(r)?(s=!0,Ca(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,sh(e),i.updater=Sl,e.stateNode=i,i._reactInternals=e,$u(e,r,t,n),e=Wu(null,e,r,!0,s,n)):(e.tag=0,re&&s&&Jd(e),$e(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(sa(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=BS(r),t=vt(r,t),i){case 0:e=Bu(null,e,r,t,n);break e;case 1:e=Op(null,e,r,t,n);break e;case 11:e=Pp(null,e,r,t,n);break e;case 14:e=Ap(null,e,r,vt(r.type,t),n);break e}throw Error(x(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:vt(r,i),Bu(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:vt(r,i),Op(t,e,r,i,n);case 3:e:{if(kv(e),t===null)throw Error(x(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Qy(t,e),Ra(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=wi(Error(x(423)),e),e=Dp(t,e,r,n,i);break e}else if(r!==i){i=wi(Error(x(424)),e),e=Dp(t,e,r,n,i);break e}else for(nt=jn(e.stateNode.containerInfo.firstChild),it=e,re=!0,wt=null,n=Gy(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(yi(),r===i){e=un(t,e,n);break e}$e(t,e,r,n)}e=e.child}return e;case 5:return Yy(e),t===null&&ju(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Au(r,i)?o=null:s!==null&&Au(r,s)&&(e.flags|=32),Ev(t,e),$e(t,e,o,n),e.child;case 6:return t===null&&ju(e),null;case 13:return Sv(t,e,n);case 4:return oh(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=vi(e,null,r,n):$e(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:vt(r,i),Pp(t,e,r,i,n);case 7:return $e(t,e,e.pendingProps,n),e.child;case 8:return $e(t,e,e.pendingProps.children,n),e.child;case 12:return $e(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Z(Na,r._currentValue),r._currentValue=o,s!==null)if(Tt(s.value,o)){if(s.children===i.children&&!Ye.current){e=un(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=nn(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Fu(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(x(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Fu(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}$e(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,li(e,n),i=pt(i),r=r(i),e.flags|=1,$e(t,e,r,n),e.child;case 14:return r=e.type,i=vt(r,e.pendingProps),i=vt(r.type,i),Ap(t,e,r,i,n);case 15:return _v(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:vt(r,i),sa(t,e),e.tag=1,Xe(r)?(t=!0,Ca(e)):t=!1,li(e,n),gv(e,r,i),$u(e,r,i,n),Wu(null,e,r,!0,t,n);case 19:return xv(t,e,n);case 22:return wv(t,e,n)}throw Error(x(156,e.tag))};function $v(t,e){return fy(t,e)}function zS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function dt(t,e,n,r){return new zS(t,e,n,r)}function Eh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function BS(t){if(typeof t=="function")return Eh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===$d)return 11;if(t===zd)return 14}return 2}function zn(t,e){var n=t.alternate;return n===null?(n=dt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function la(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Eh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Vr:return pr(n.children,i,s,e);case Ud:o=8,i|=8;break;case uu:return t=dt(12,n,e,i|2),t.elementType=uu,t.lanes=s,t;case du:return t=dt(13,n,e,i),t.elementType=du,t.lanes=s,t;case hu:return t=dt(19,n,e,i),t.elementType=hu,t.lanes=s,t;case Yg:return Il(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case qg:o=10;break e;case Qg:o=9;break e;case $d:o=11;break e;case zd:o=14;break e;case _n:o=16,r=null;break e}throw Error(x(130,t==null?t:typeof t,""))}return e=dt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function pr(t,e,n,r){return t=dt(7,t,r,e),t.lanes=n,t}function Il(t,e,n,r){return t=dt(22,t,r,e),t.elementType=Yg,t.lanes=n,t.stateNode={isHidden:!1},t}function Dc(t,e,n){return t=dt(6,t,null,e),t.lanes=n,t}function Mc(t,e,n){return e=dt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function WS(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=mc(0),this.expirationTimes=mc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function kh(t,e,n,r,i,s,o,a,l){return t=new WS(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=dt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},sh(s),t}function VS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Wr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function zv(t){if(!t)return Kn;t=t._reactInternals;e:{if(Or(t)!==t||t.tag!==1)throw Error(x(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Xe(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(x(171))}if(t.tag===1){var n=t.type;if(Xe(n))return zy(t,n,e)}return e}function Bv(t,e,n,r,i,s,o,a,l){return t=kh(n,r,!0,t,i,s,o,a,l),t.context=zv(null),n=t.current,r=Be(),i=$n(n),s=nn(r,i),s.callback=e??null,Fn(n,s,i),t.current.lanes=i,oo(t,i,r),Je(t,r),t}function Tl(t,e,n,r){var i=e.current,s=Be(),o=$n(i);return n=zv(n),e.context===null?e.context=n:e.pendingContext=n,e=nn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Fn(i,e,o),t!==null&&(Ct(t,i,o,s),na(t,i,o)),o}function Fa(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Vp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Sh(t,e){Vp(t,e),(t=t.alternate)&&Vp(t,e)}function HS(){return null}var Wv=typeof reportError=="function"?reportError:function(t){console.error(t)};function xh(t){this._internalRoot=t}Nl.prototype.render=xh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(x(409));Tl(t,e,null,null)};Nl.prototype.unmount=xh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Er(function(){Tl(null,t,null,null)}),e[ln]=null}};function Nl(t){this._internalRoot=t}Nl.prototype.unstable_scheduleHydration=function(t){if(t){var e=wy();t={blockedOn:null,target:t,priority:e};for(var n=0;n<En.length&&e!==0&&e<En[n].priority;n++);En.splice(n,0,t),n===0&&ky(t)}};function Ch(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function bl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Hp(){}function KS(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var c=Fa(o);s.call(c)}}var o=Bv(e,r,t,0,null,!1,!1,"",Hp);return t._reactRootContainer=o,t[ln]=o.current,Ms(t.nodeType===8?t.parentNode:t),Er(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Fa(l);a.call(c)}}var l=kh(t,0,!1,null,null,!1,!1,"",Hp);return t._reactRootContainer=l,t[ln]=l.current,Ms(t.nodeType===8?t.parentNode:t),Er(function(){Tl(e,l,n,r)}),l}function Rl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Fa(o);a.call(l)}}Tl(e,o,t,i)}else o=KS(n,e,t,i,r);return Fa(o)}vy=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ss(e.pendingLanes);n!==0&&(Vd(e,n|1),Je(e,pe()),!($&6)&&(Ei=pe()+500,Zn()))}break;case 13:Er(function(){var r=cn(t,1);if(r!==null){var i=Be();Ct(r,t,1,i)}}),Sh(t,1)}};Hd=function(t){if(t.tag===13){var e=cn(t,134217728);if(e!==null){var n=Be();Ct(e,t,134217728,n)}Sh(t,134217728)}};_y=function(t){if(t.tag===13){var e=$n(t),n=cn(t,e);if(n!==null){var r=Be();Ct(n,t,e,r)}Sh(t,e)}};wy=function(){return V};Ey=function(t,e){var n=V;try{return V=t,e()}finally{V=n}};ku=function(t,e,n){switch(e){case"input":if(mu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=wl(r);if(!i)throw Error(x(90));Jg(r),mu(r,i)}}}break;case"textarea":ey(t,n);break;case"select":e=n.value,e!=null&&ii(t,!!n.multiple,e,!1)}};ay=vh;ly=Er;var GS={usingClientEntryPoint:!1,Events:[lo,qr,wl,sy,oy,vh]},Xi={findFiberByHostInstance:lr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},qS={bundleType:Xi.bundleType,version:Xi.version,rendererPackageName:Xi.rendererPackageName,rendererConfig:Xi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:mn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=dy(t),t===null?null:t.stateNode},findFiberByHostInstance:Xi.findFiberByHostInstance||HS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wo.isDisabled&&Wo.supportsFiber)try{gl=Wo.inject(qS),Ft=Wo}catch{}}at.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=GS;at.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ch(e))throw Error(x(200));return VS(t,e,null,n)};at.createRoot=function(t,e){if(!Ch(t))throw Error(x(299));var n=!1,r="",i=Wv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=kh(t,1,!1,null,null,n,!1,r,i),t[ln]=e.current,Ms(t.nodeType===8?t.parentNode:t),new xh(e)};at.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(x(188)):(t=Object.keys(t).join(","),Error(x(268,t)));return t=dy(e),t=t===null?null:t.stateNode,t};at.flushSync=function(t){return Er(t)};at.hydrate=function(t,e,n){if(!bl(e))throw Error(x(200));return Rl(null,t,e,!0,n)};at.hydrateRoot=function(t,e,n){if(!Ch(t))throw Error(x(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Wv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Bv(e,null,t,1,n??null,i,!1,s,o),t[ln]=e.current,Ms(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Nl(e)};at.render=function(t,e,n){if(!bl(e))throw Error(x(200));return Rl(null,t,e,!1,n)};at.unmountComponentAtNode=function(t){if(!bl(t))throw Error(x(40));return t._reactRootContainer?(Er(function(){Rl(null,null,t,!1,function(){t._reactRootContainer=null,t[ln]=null})}),!0):!1};at.unstable_batchedUpdates=vh;at.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!bl(n))throw Error(x(200));if(t==null||t._reactInternals===void 0)throw Error(x(38));return Rl(t,e,n,!1,r)};at.version="18.3.1-next-f1338f8080-20240426";function Vv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Vv)}catch(t){console.error(t)}}Vv(),Vg.exports=at;var QS=Vg.exports,Kp=QS;lu.createRoot=Kp.createRoot,lu.hydrateRoot=Kp.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Vs(){return Vs=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Vs.apply(this,arguments)}var Pn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Pn||(Pn={}));const Gp="popstate";function YS(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return td("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Kv(i)}return JS(e,n,null,t)}function we(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Hv(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function XS(){return Math.random().toString(36).substr(2,8)}function qp(t,e){return{usr:t.state,key:t.key,idx:e}}function td(t,e,n,r){return n===void 0&&(n=null),Vs({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Mi(e):e,{state:n,key:e&&e.key||r||XS()})}function Kv(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Mi(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function JS(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Pn.Pop,l=null,c=u();c==null&&(c=0,o.replaceState(Vs({},o.state,{idx:c}),""));function u(){return(o.state||{idx:null}).idx}function d(){a=Pn.Pop;let w=u(),v=w==null?null:w-c;c=w,l&&l({action:a,location:_.location,delta:v})}function f(w,v){a=Pn.Push;let p=td(_.location,w,v);c=u()+1;let g=qp(p,c),E=_.createHref(p);try{o.pushState(g,"",E)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;i.location.assign(E)}s&&l&&l({action:a,location:_.location,delta:1})}function m(w,v){a=Pn.Replace;let p=td(_.location,w,v);c=u();let g=qp(p,c),E=_.createHref(p);o.replaceState(g,"",E),s&&l&&l({action:a,location:_.location,delta:0})}function y(w){let v=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof w=="string"?w:Kv(w);return p=p.replace(/ $/,"%20"),we(v,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,v)}let _={get action(){return a},get location(){return t(i,o)},listen(w){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Gp,d),l=w,()=>{i.removeEventListener(Gp,d),l=null}},createHref(w){return e(i,w)},createURL:y,encodeLocation(w){let v=y(w);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:f,replace:m,go(w){return o.go(w)}};return _}var Qp;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Qp||(Qp={}));function ZS(t,e,n){return n===void 0&&(n="/"),ex(t,e,n)}function ex(t,e,n,r){let i=typeof e=="string"?Mi(e):e,s=Qv(i.pathname||"/",n);if(s==null)return null;let o=Gv(t);tx(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let c=fx(s);a=ux(o[l],c)}return a}function Gv(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(we(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=mr([r,l.relativePath]),u=n.concat(l);s.children&&s.children.length>0&&(we(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Gv(s.children,e,u,c)),!(s.path==null&&!s.index)&&e.push({path:c,score:lx(c,s.index),routesMeta:u})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of qv(s.path))i(s,o,l)}),e}function qv(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=qv(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function tx(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:cx(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const nx=/^:[\w-]+$/,rx=3,ix=2,sx=1,ox=10,ax=-2,Yp=t=>t==="*";function lx(t,e){let n=t.split("/"),r=n.length;return n.some(Yp)&&(r+=ax),e&&(r+=ix),n.filter(i=>!Yp(i)).reduce((i,s)=>i+(nx.test(s)?rx:s===""?sx:ox),r)}function cx(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function ux(t,e,n){let{routesMeta:r}=t,i={},s="/",o=[];for(let a=0;a<r.length;++a){let l=r[a],c=a===r.length-1,u=s==="/"?e:e.slice(s.length)||"/",d=dx({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},u),f=l.route;if(!d)return null;Object.assign(i,d.params),o.push({params:i,pathname:mr([s,d.pathname]),pathnameBase:_x(mr([s,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(s=mr([s,d.pathnameBase]))}return o}function dx(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=hx(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((c,u,d)=>{let{paramName:f,isOptional:m}=u;if(f==="*"){let _=a[d]||"";o=s.slice(0,s.length-_.length).replace(/(.)\/+$/,"$1")}const y=a[d];return m&&!y?c[f]=void 0:c[f]=(y||"").replace(/%2F/g,"/"),c},{}),pathname:s,pathnameBase:o,pattern:t}}function hx(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Hv(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function fx(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Hv(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Qv(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function px(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Mi(t):t;return{pathname:n?n.startsWith("/")?n:mx(n,e):e,search:wx(r),hash:Ex(i)}}function mx(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Lc(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function gx(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function yx(t,e){let n=gx(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function vx(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Mi(t):(i=Vs({},t),we(!i.pathname||!i.pathname.includes("?"),Lc("?","pathname","search",i)),we(!i.pathname||!i.pathname.includes("#"),Lc("#","pathname","hash",i)),we(!i.search||!i.search.includes("#"),Lc("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let d=e.length-1;if(!r&&o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),d-=1;i.pathname=f.join("/")}a=d>=0?e[d]:"/"}let l=px(i,a),c=o&&o!=="/"&&o.endsWith("/"),u=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||u)&&(l.pathname+="/"),l}const mr=t=>t.join("/").replace(/\/\/+/g,"/"),_x=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),wx=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Ex=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function kx(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Yv=["post","put","patch","delete"];new Set(Yv);const Sx=["get",...Yv];new Set(Sx);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Hs(){return Hs=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Hs.apply(this,arguments)}const Ih=k.createContext(null),xx=k.createContext(null),Pl=k.createContext(null),Al=k.createContext(null),Li=k.createContext({outlet:null,matches:[],isDataRoute:!1}),Xv=k.createContext(null);function Ol(){return k.useContext(Al)!=null}function Jv(){return Ol()||we(!1),k.useContext(Al).location}function Zv(t){k.useContext(Pl).static||k.useLayoutEffect(t)}function e_(){let{isDataRoute:t}=k.useContext(Li);return t?jx():Cx()}function Cx(){Ol()||we(!1);let t=k.useContext(Ih),{basename:e,future:n,navigator:r}=k.useContext(Pl),{matches:i}=k.useContext(Li),{pathname:s}=Jv(),o=JSON.stringify(yx(i,n.v7_relativeSplatPath)),a=k.useRef(!1);return Zv(()=>{a.current=!0}),k.useCallback(function(c,u){if(u===void 0&&(u={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let d=vx(c,JSON.parse(o),s,u.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:mr([e,d.pathname])),(u.replace?r.replace:r.push)(d,u.state,u)},[e,r,o,s,t])}function Ix(t,e){return Tx(t,e)}function Tx(t,e,n,r){Ol()||we(!1);let{navigator:i}=k.useContext(Pl),{matches:s}=k.useContext(Li),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let c=Jv(),u;if(e){var d;let w=typeof e=="string"?Mi(e):e;l==="/"||(d=w.pathname)!=null&&d.startsWith(l)||we(!1),u=w}else u=c;let f=u.pathname||"/",m=f;if(l!=="/"){let w=l.replace(/^\//,"").split("/");m="/"+f.replace(/^\//,"").split("/").slice(w.length).join("/")}let y=ZS(t,{pathname:m}),_=Ax(y&&y.map(w=>Object.assign({},w,{params:Object.assign({},a,w.params),pathname:mr([l,i.encodeLocation?i.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?l:mr([l,i.encodeLocation?i.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),s,n,r);return e&&_?k.createElement(Al.Provider,{value:{location:Hs({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Pn.Pop}},_):_}function Nx(){let t=Lx(),e=kx(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},e),n?k.createElement("pre",{style:i},n):null,null)}const bx=k.createElement(Nx,null);class Rx extends k.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?k.createElement(Li.Provider,{value:this.props.routeContext},k.createElement(Xv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Px(t){let{routeContext:e,match:n,children:r}=t,i=k.useContext(Ih);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),k.createElement(Li.Provider,{value:e},r)}function Ax(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let u=o.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id])!==void 0);u>=0||we(!1),o=o.slice(0,Math.min(o.length,u+1))}let l=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let u=0;u<o.length;u++){let d=o[u];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(c=u),d.route.id){let{loaderData:f,errors:m}=n,y=d.route.loader&&f[d.route.id]===void 0&&(!m||m[d.route.id]===void 0);if(d.route.lazy||y){l=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((u,d,f)=>{let m,y=!1,_=null,w=null;n&&(m=a&&d.route.id?a[d.route.id]:void 0,_=d.route.errorElement||bx,l&&(c<0&&f===0?(Fx("route-fallback"),y=!0,w=null):c===f&&(y=!0,w=d.route.hydrateFallbackElement||null)));let v=e.concat(o.slice(0,f+1)),p=()=>{let g;return m?g=_:y?g=w:d.route.Component?g=k.createElement(d.route.Component,null):d.route.element?g=d.route.element:g=u,k.createElement(Px,{match:d,routeContext:{outlet:u,matches:v,isDataRoute:n!=null},children:g})};return n&&(d.route.ErrorBoundary||d.route.errorElement||f===0)?k.createElement(Rx,{location:n.location,revalidation:n.revalidation,component:_,error:m,children:p(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):p()},null)}var t_=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(t_||{}),n_=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(n_||{});function Ox(t){let e=k.useContext(Ih);return e||we(!1),e}function Dx(t){let e=k.useContext(xx);return e||we(!1),e}function Mx(t){let e=k.useContext(Li);return e||we(!1),e}function r_(t){let e=Mx(),n=e.matches[e.matches.length-1];return n.route.id||we(!1),n.route.id}function Lx(){var t;let e=k.useContext(Xv),n=Dx(),r=r_();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function jx(){let{router:t}=Ox(t_.UseNavigateStable),e=r_(n_.UseNavigateStable),n=k.useRef(!1);return Zv(()=>{n.current=!0}),k.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Hs({fromRouteId:e},s)))},[t,e])}const Xp={};function Fx(t,e,n){Xp[t]||(Xp[t]=!0)}function Ux(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function as(t){we(!1)}function $x(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Pn.Pop,navigator:s,static:o=!1,future:a}=t;Ol()&&we(!1);let l=e.replace(/^\/*/,"/"),c=k.useMemo(()=>({basename:l,navigator:s,static:o,future:Hs({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=Mi(r));let{pathname:u="/",search:d="",hash:f="",state:m=null,key:y="default"}=r,_=k.useMemo(()=>{let w=Qv(u,l);return w==null?null:{location:{pathname:w,search:d,hash:f,state:m,key:y},navigationType:i}},[l,u,d,f,m,y,i]);return _==null?null:k.createElement(Pl.Provider,{value:c},k.createElement(Al.Provider,{children:n,value:_}))}function zx(t){let{children:e,location:n}=t;return Ix(nd(e),n)}new Promise(()=>{});function nd(t,e){e===void 0&&(e=[]);let n=[];return k.Children.forEach(t,(r,i)=>{if(!k.isValidElement(r))return;let s=[...e,i];if(r.type===k.Fragment){n.push.apply(n,nd(r.props.children,s));return}r.type!==as&&we(!1),!r.props.index||!r.props.children||we(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=nd(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Bx="6";try{window.__reactRouterVersion=Bx}catch{}const Wx="startTransition",Jp=FE[Wx];function Vx(t){let{basename:e,children:n,future:r,window:i}=t,s=k.useRef();s.current==null&&(s.current=YS({window:i,v5Compat:!0}));let o=s.current,[a,l]=k.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},u=k.useCallback(d=>{c&&Jp?Jp(()=>l(d)):l(d)},[l,c]);return k.useLayoutEffect(()=>o.listen(u),[o,u]),k.useEffect(()=>Ux(r),[r]),k.createElement($x,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}var Zp;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Zp||(Zp={}));var em;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(em||(em={}));let Hx={data:""},Kx=t=>typeof window=="object"?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||Hx,Gx=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,qx=/\/\*[^]*?\*\/|  +/g,tm=/\n+/g,Sn=(t,e)=>{let n="",r="",i="";for(let s in t){let o=t[s];s[0]=="@"?s[1]=="i"?n=s+" "+o+";":r+=s[1]=="f"?Sn(o,s):s+"{"+Sn(o,s[1]=="k"?"":e)+"}":typeof o=="object"?r+=Sn(o,e?e.replace(/([^,])+/g,a=>s.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,a):a?a+" "+l:l)):s):o!=null&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=Sn.p?Sn.p(s,o):s+":"+o+";")}return n+(e&&i?e+"{"+i+"}":i)+r},Kt={},i_=t=>{if(typeof t=="object"){let e="";for(let n in t)e+=n+i_(t[n]);return e}return t},Qx=(t,e,n,r,i)=>{let s=i_(t),o=Kt[s]||(Kt[s]=(l=>{let c=0,u=11;for(;c<l.length;)u=101*u+l.charCodeAt(c++)>>>0;return"go"+u})(s));if(!Kt[o]){let l=s!==t?t:(c=>{let u,d,f=[{}];for(;u=Gx.exec(c.replace(qx,""));)u[4]?f.shift():u[3]?(d=u[3].replace(tm," ").trim(),f.unshift(f[0][d]=f[0][d]||{})):f[0][u[1]]=u[2].replace(tm," ").trim();return f[0]})(t);Kt[o]=Sn(i?{["@keyframes "+o]:l}:l,n?"":"."+o)}let a=n&&Kt.g?Kt.g:null;return n&&(Kt.g=Kt[o]),((l,c,u,d)=>{d?c.data=c.data.replace(d,l):c.data.indexOf(l)===-1&&(c.data=u?l+c.data:c.data+l)})(Kt[o],e,r,a),o},Yx=(t,e,n)=>t.reduce((r,i,s)=>{let o=e[s];if(o&&o.call){let a=o(n),l=a&&a.props&&a.props.className||/^go/.test(a)&&a;o=l?"."+l:a&&typeof a=="object"?a.props?"":Sn(a,""):a===!1?"":a}return r+i+(o??"")},"");function Dl(t){let e=this||{},n=t.call?t(e.p):t;return Qx(n.unshift?n.raw?Yx(n,[].slice.call(arguments,1),e.p):n.reduce((r,i)=>Object.assign(r,i&&i.call?i(e.p):i),{}):n,Kx(e.target),e.g,e.o,e.k)}let s_,rd,id;Dl.bind({g:1});let dn=Dl.bind({k:1});function Xx(t,e,n,r){Sn.p=e,s_=t,rd=n,id=r}function er(t,e){let n=this||{};return function(){let r=arguments;function i(s,o){let a=Object.assign({},s),l=a.className||i.className;n.p=Object.assign({theme:rd&&rd()},a),n.o=/ *go\d+/.test(l),a.className=Dl.apply(n,r)+(l?" "+l:"");let c=t;return t[0]&&(c=a.as||t,delete a.as),id&&c[0]&&id(a),s_(c,a)}return i}}var Jx=t=>typeof t=="function",Ua=(t,e)=>Jx(t)?t(e):t,Zx=(()=>{let t=0;return()=>(++t).toString()})(),o_=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),eC=20,Th="default",a_=(t,e)=>{let{toastLimit:n}=t.settings;switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,n)};case 1:return{...t,toasts:t.toasts.map(o=>o.id===e.toast.id?{...o,...e.toast}:o)};case 2:let{toast:r}=e;return a_(t,{type:t.toasts.find(o=>o.id===r.id)?1:0,toast:r});case 3:let{toastId:i}=e;return{...t,toasts:t.toasts.map(o=>o.id===i||i===void 0?{...o,dismissed:!0,visible:!1}:o)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(o=>o.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let s=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(o=>({...o,pauseDuration:o.pauseDuration+s}))}}},ca=[],l_={toasts:[],pausedAt:void 0,settings:{toastLimit:eC}},Mt={},c_=(t,e=Th)=>{Mt[e]=a_(Mt[e]||l_,t),ca.forEach(([n,r])=>{n===e&&r(Mt[e])})},u_=t=>Object.keys(Mt).forEach(e=>c_(t,e)),tC=t=>Object.keys(Mt).find(e=>Mt[e].toasts.some(n=>n.id===t)),Ml=(t=Th)=>e=>{c_(e,t)},nC={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},rC=(t={},e=Th)=>{let[n,r]=k.useState(Mt[e]||l_),i=k.useRef(Mt[e]);k.useEffect(()=>(i.current!==Mt[e]&&r(Mt[e]),ca.push([e,r]),()=>{let o=ca.findIndex(([a])=>a===e);o>-1&&ca.splice(o,1)}),[e]);let s=n.toasts.map(o=>{var a,l,c;return{...t,...t[o.type],...o,removeDelay:o.removeDelay||((a=t[o.type])==null?void 0:a.removeDelay)||(t==null?void 0:t.removeDelay),duration:o.duration||((l=t[o.type])==null?void 0:l.duration)||(t==null?void 0:t.duration)||nC[o.type],style:{...t.style,...(c=t[o.type])==null?void 0:c.style,...o.style}}});return{...n,toasts:s}},iC=(t,e="blank",n)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...n,id:(n==null?void 0:n.id)||Zx()}),uo=t=>(e,n)=>{let r=iC(e,t,n);return Ml(r.toasterId||tC(r.id))({type:2,toast:r}),r.id},ye=(t,e)=>uo("blank")(t,e);ye.error=uo("error");ye.success=uo("success");ye.loading=uo("loading");ye.custom=uo("custom");ye.dismiss=(t,e)=>{let n={type:3,toastId:t};e?Ml(e)(n):u_(n)};ye.dismissAll=t=>ye.dismiss(void 0,t);ye.remove=(t,e)=>{let n={type:4,toastId:t};e?Ml(e)(n):u_(n)};ye.removeAll=t=>ye.remove(void 0,t);ye.promise=(t,e,n)=>{let r=ye.loading(e.loading,{...n,...n==null?void 0:n.loading});return typeof t=="function"&&(t=t()),t.then(i=>{let s=e.success?Ua(e.success,i):void 0;return s?ye.success(s,{id:r,...n,...n==null?void 0:n.success}):ye.dismiss(r),i}).catch(i=>{let s=e.error?Ua(e.error,i):void 0;s?ye.error(s,{id:r,...n,...n==null?void 0:n.error}):ye.dismiss(r)}),t};var sC=1e3,oC=(t,e="default")=>{let{toasts:n,pausedAt:r}=rC(t,e),i=k.useRef(new Map).current,s=k.useCallback((d,f=sC)=>{if(i.has(d))return;let m=setTimeout(()=>{i.delete(d),o({type:4,toastId:d})},f);i.set(d,m)},[]);k.useEffect(()=>{if(r)return;let d=Date.now(),f=n.map(m=>{if(m.duration===1/0)return;let y=(m.duration||0)+m.pauseDuration-(d-m.createdAt);if(y<0){m.visible&&ye.dismiss(m.id);return}return setTimeout(()=>ye.dismiss(m.id,e),y)});return()=>{f.forEach(m=>m&&clearTimeout(m))}},[n,r,e]);let o=k.useCallback(Ml(e),[e]),a=k.useCallback(()=>{o({type:5,time:Date.now()})},[o]),l=k.useCallback((d,f)=>{o({type:1,toast:{id:d,height:f}})},[o]),c=k.useCallback(()=>{r&&o({type:6,time:Date.now()})},[r,o]),u=k.useCallback((d,f)=>{let{reverseOrder:m=!1,gutter:y=8,defaultPosition:_}=f||{},w=n.filter(g=>(g.position||_)===(d.position||_)&&g.height),v=w.findIndex(g=>g.id===d.id),p=w.filter((g,E)=>E<v&&g.visible).length;return w.filter(g=>g.visible).slice(...m?[p+1]:[0,p]).reduce((g,E)=>g+(E.height||0)+y,0)},[n]);return k.useEffect(()=>{n.forEach(d=>{if(d.dismissed)s(d.id,d.removeDelay);else{let f=i.get(d.id);f&&(clearTimeout(f),i.delete(d.id))}})},[n,s]),{toasts:n,handlers:{updateHeight:l,startPause:a,endPause:c,calculateOffset:u}}},aC=dn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,lC=dn`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,cC=dn`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,uC=er("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${aC} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${lC} 0.15s ease-out forwards;
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
    animation: ${cC} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,dC=dn`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,hC=er("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${dC} 1s linear infinite;
`,fC=dn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,pC=dn`
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
}`,mC=er("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${fC} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${pC} 0.2s ease-out forwards;
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
`,gC=er("div")`
  position: absolute;
`,yC=er("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,vC=dn`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,_C=er("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${vC} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,wC=({toast:t})=>{let{icon:e,type:n,iconTheme:r}=t;return e!==void 0?typeof e=="string"?k.createElement(_C,null,e):e:n==="blank"?null:k.createElement(yC,null,k.createElement(hC,{...r}),n!=="loading"&&k.createElement(gC,null,n==="error"?k.createElement(uC,{...r}):k.createElement(mC,{...r})))},EC=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,kC=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,SC="0%{opacity:0;} 100%{opacity:1;}",xC="0%{opacity:1;} 100%{opacity:0;}",CC=er("div")`
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
`,IC=er("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,TC=(t,e)=>{let n=t.includes("top")?1:-1,[r,i]=o_()?[SC,xC]:[EC(n),kC(n)];return{animation:e?`${dn(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${dn(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},NC=k.memo(({toast:t,position:e,style:n,children:r})=>{let i=t.height?TC(t.position||e||"top-center",t.visible):{opacity:0},s=k.createElement(wC,{toast:t}),o=k.createElement(IC,{...t.ariaProps},Ua(t.message,t));return k.createElement(CC,{className:t.className,style:{...i,...n,...t.style}},typeof r=="function"?r({icon:s,message:o}):k.createElement(k.Fragment,null,s,o))});Xx(k.createElement);var bC=({id:t,className:e,style:n,onHeightUpdate:r,children:i})=>{let s=k.useCallback(o=>{if(o){let a=()=>{let l=o.getBoundingClientRect().height;r(t,l)};a(),new MutationObserver(a).observe(o,{subtree:!0,childList:!0,characterData:!0})}},[t,r]);return k.createElement("div",{ref:s,className:e,style:n},i)},RC=(t,e)=>{let n=t.includes("top"),r=n?{top:0}:{bottom:0},i=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:o_()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(n?1:-1)}px)`,...r,...i}},PC=Dl`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Vo=16,AC=({reverseOrder:t,position:e="top-center",toastOptions:n,gutter:r,children:i,toasterId:s,containerStyle:o,containerClassName:a})=>{let{toasts:l,handlers:c}=oC(n,s);return k.createElement("div",{"data-rht-toaster":s||"",style:{position:"fixed",zIndex:9999,top:Vo,left:Vo,right:Vo,bottom:Vo,pointerEvents:"none",...o},className:a,onMouseEnter:c.startPause,onMouseLeave:c.endPause},l.map(u=>{let d=u.position||e,f=c.calculateOffset(u,{reverseOrder:t,gutter:r,defaultPosition:e}),m=RC(d,f);return k.createElement(bC,{id:u.id,key:u.id,onHeightUpdate:c.updateHeight,className:u.visible?PC:"",style:m},u.type==="custom"?Ua(u.message,u):i?i(u):k.createElement(NC,{toast:u,position:d}))}))},J=ye;const OC={},nm=t=>{let e;const n=new Set,r=(u,d)=>{const f=typeof u=="function"?u(e):u;if(!Object.is(f,e)){const m=e;e=d??(typeof f!="object"||f===null)?f:Object.assign({},e,f),n.forEach(y=>y(e,m))}},i=()=>e,l={setState:r,getState:i,getInitialState:()=>c,subscribe:u=>(n.add(u),()=>n.delete(u)),destroy:()=>{(OC?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},c=e=t(r,i,l);return l},DC=t=>t?nm(t):nm;var d_={exports:{}},h_={},f_={exports:{}},p_={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ki=k;function MC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var LC=typeof Object.is=="function"?Object.is:MC,jC=ki.useState,FC=ki.useEffect,UC=ki.useLayoutEffect,$C=ki.useDebugValue;function zC(t,e){var n=e(),r=jC({inst:{value:n,getSnapshot:e}}),i=r[0].inst,s=r[1];return UC(function(){i.value=n,i.getSnapshot=e,jc(i)&&s({inst:i})},[t,n,e]),FC(function(){return jc(i)&&s({inst:i}),t(function(){jc(i)&&s({inst:i})})},[t]),$C(n),n}function jc(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!LC(t,n)}catch{return!0}}function BC(t,e){return e()}var WC=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?BC:zC;p_.useSyncExternalStore=ki.useSyncExternalStore!==void 0?ki.useSyncExternalStore:WC;f_.exports=p_;var VC=f_.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ll=k,HC=VC;function KC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var GC=typeof Object.is=="function"?Object.is:KC,qC=HC.useSyncExternalStore,QC=Ll.useRef,YC=Ll.useEffect,XC=Ll.useMemo,JC=Ll.useDebugValue;h_.useSyncExternalStoreWithSelector=function(t,e,n,r,i){var s=QC(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=XC(function(){function l(m){if(!c){if(c=!0,u=m,m=r(m),i!==void 0&&o.hasValue){var y=o.value;if(i(y,m))return d=y}return d=m}if(y=d,GC(u,m))return y;var _=r(m);return i!==void 0&&i(y,_)?(u=m,y):(u=m,d=_)}var c=!1,u,d,f=n===void 0?null:n;return[function(){return l(e())},f===null?void 0:function(){return l(f())}]},[e,n,r,i]);var a=qC(t,s[0],s[1]);return YC(function(){o.hasValue=!0,o.value=a},[a]),JC(a),a};d_.exports=h_;var ZC=d_.exports;const e1=Ag(ZC),m_={},{useDebugValue:t1}=ml,{useSyncExternalStoreWithSelector:n1}=e1;let rm=!1;const r1=t=>t;function i1(t,e=r1,n){(m_?"production":void 0)!=="production"&&n&&!rm&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),rm=!0);const r=n1(t.subscribe,t.getState,t.getServerState||t.getInitialState,e,n);return t1(r),r}const im=t=>{(m_?"production":void 0)!=="production"&&typeof t!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const e=typeof t=="function"?DC(t):t,n=(r,i)=>i1(e,r,i);return Object.assign(n,e),n},g_=t=>t?im(t):im,et=g_(t=>({user:null,loading:!0,setUser:e=>t({user:e}),setLoading:e=>t({loading:e}),logout:()=>t({user:null})}));var sm={};/**
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
 */const y_={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const I=function(t,e){if(!t)throw ji(e)},ji=function(t){return new Error("Firebase Database ("+y_.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const v_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},s1=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Nh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=s>>2,d=(s&3)<<4|a>>4;let f=(a&15)<<2|c>>6,m=c&63;l||(m=64,o||(f=64)),r.push(n[u],n[d],n[f],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(v_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):s1(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||c==null||d==null)throw new o1;const f=s<<2|a>>4;if(r.push(f),c!==64){const m=a<<4&240|c>>2;if(r.push(m),d!==64){const y=c<<6&192|d;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class o1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const __=function(t){const e=v_(t);return Nh.encodeByteArray(e,!0)},$a=function(t){return __(t).replace(/\./g,"")},za=function(t){try{return Nh.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function a1(t){return w_(void 0,t)}function w_(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!l1(n)||(t[n]=w_(t[n],e[n]));return t}function l1(t){return t!=="__proto__"}/**
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
 */function c1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const u1=()=>c1().__FIREBASE_DEFAULTS__,d1=()=>{if(typeof process>"u"||typeof sm>"u")return;const t=sm.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},h1=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&za(t[1]);return e&&JSON.parse(e)},bh=()=>{try{return u1()||d1()||h1()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},E_=t=>{var e,n;return(n=(e=bh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},k_=t=>{const e=E_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},S_=()=>{var t;return(t=bh())===null||t===void 0?void 0:t.config},x_=t=>{var e;return(e=bh())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Et{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function C_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[$a(JSON.stringify(n)),$a(JSON.stringify(o)),""].join(".")}/**
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
 */function Ve(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Rh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ve())}function f1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function p1(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function I_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function m1(){const t=Ve();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function g1(){return y_.NODE_ADMIN===!0}function T_(){try{return typeof indexedDB=="object"}catch{return!1}}function N_(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function y1(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const v1="FirebaseError";class Wt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=v1,Object.setPrototypeOf(this,Wt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Dr.prototype.create)}}class Dr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?_1(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Wt(i,a,r)}}function _1(t,e){return t.replace(w1,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const w1=/\{\$([^}]+)}/g;/**
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
 */function Ks(t){return JSON.parse(t)}function ve(t){return JSON.stringify(t)}/**
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
 */const b_=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Ks(za(s[0])||""),n=Ks(za(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},E1=function(t){const e=b_(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},k1=function(t){const e=b_(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Rt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function kr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Ba(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Wa(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function Va(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(om(s)&&om(o)){if(!Va(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function om(t){return t!==null&&typeof t=="object"}/**
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
 */function Fi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ls(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function cs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class S1{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const f=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let d=0;d<80;d++){d<40?d<20?(c=a^s&(o^a),u=1518500249):(c=s^o^a,u=1859775393):d<60?(c=s&o|a&(s|o),u=2400959708):(c=s^o^a,u=3395469782);const f=(i<<5|i>>>27)+c+l+u+r[d]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function x1(t,e){const n=new C1(t,e);return n.subscribe.bind(n)}class C1{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");I1(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Fc),i.error===void 0&&(i.error=Fc),i.complete===void 0&&(i.complete=Fc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function I1(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Fc(){}function Si(t,e){return`${t} failed: ${e} argument `}/**
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
 */const T1=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,I(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},jl=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function ee(t){return t&&t._delegate?t._delegate:t}class gt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const or="[DEFAULT]";/**
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
 */class N1{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Et;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(R1(e))try{this.getOrInitializeService({instanceIdentifier:or})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=or){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=or){return this.instances.has(e)}getOptions(e=or){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:b1(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=or){return this.component?this.component.multipleInstances?e:or:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function b1(t){return t===or?void 0:t}function R1(t){return t.instantiationMode==="EAGER"}/**
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
 */class P1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new N1(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var K;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(K||(K={}));const A1={debug:K.DEBUG,verbose:K.VERBOSE,info:K.INFO,warn:K.WARN,error:K.ERROR,silent:K.SILENT},O1=K.INFO,D1={[K.DEBUG]:"log",[K.VERBOSE]:"log",[K.INFO]:"info",[K.WARN]:"warn",[K.ERROR]:"error"},M1=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=D1[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ph{constructor(e){this.name=e,this._logLevel=O1,this._logHandler=M1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in K))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?A1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,K.DEBUG,...e),this._logHandler(this,K.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,K.VERBOSE,...e),this._logHandler(this,K.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,K.INFO,...e),this._logHandler(this,K.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,K.WARN,...e),this._logHandler(this,K.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,K.ERROR,...e),this._logHandler(this,K.ERROR,...e)}}const L1=(t,e)=>e.some(n=>t instanceof n);let am,lm;function j1(){return am||(am=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function F1(){return lm||(lm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const R_=new WeakMap,sd=new WeakMap,P_=new WeakMap,Uc=new WeakMap,Ah=new WeakMap;function U1(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(rn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&R_.set(n,t)}).catch(()=>{}),Ah.set(e,t),e}function $1(t){if(sd.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});sd.set(t,e)}let od={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return sd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||P_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return rn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function z1(t){od=t(od)}function B1(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call($c(this),e,...n);return P_.set(r,e.sort?e.sort():[e]),rn(r)}:F1().includes(t)?function(...e){return t.apply($c(this),e),rn(R_.get(this))}:function(...e){return rn(t.apply($c(this),e))}}function W1(t){return typeof t=="function"?B1(t):(t instanceof IDBTransaction&&$1(t),L1(t,j1())?new Proxy(t,od):t)}function rn(t){if(t instanceof IDBRequest)return U1(t);if(Uc.has(t))return Uc.get(t);const e=W1(t);return e!==t&&(Uc.set(t,e),Ah.set(e,t)),e}const $c=t=>Ah.get(t);function Fl(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=rn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(rn(o.result),l.oldVersion,l.newVersion,rn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}function zc(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",r=>e(r.oldVersion,r)),rn(n).then(()=>{})}const V1=["get","getKey","getAll","getAllKeys","count"],H1=["put","add","delete","clear"],Bc=new Map;function cm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Bc.get(e))return Bc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=H1.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||V1.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Bc.set(e,s),s}z1(t=>({...t,get:(e,n,r)=>cm(e,n)||t.get(e,n,r),has:(e,n)=>!!cm(e,n)||t.has(e,n)}));/**
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
 */class K1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(G1(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function G1(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ad="@firebase/app",um="0.10.13";/**
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
 */const hn=new Ph("@firebase/app"),q1="@firebase/app-compat",Q1="@firebase/analytics-compat",Y1="@firebase/analytics",X1="@firebase/app-check-compat",J1="@firebase/app-check",Z1="@firebase/auth",eI="@firebase/auth-compat",tI="@firebase/database",nI="@firebase/data-connect",rI="@firebase/database-compat",iI="@firebase/functions",sI="@firebase/functions-compat",oI="@firebase/installations",aI="@firebase/installations-compat",lI="@firebase/messaging",cI="@firebase/messaging-compat",uI="@firebase/performance",dI="@firebase/performance-compat",hI="@firebase/remote-config",fI="@firebase/remote-config-compat",pI="@firebase/storage",mI="@firebase/storage-compat",gI="@firebase/firestore",yI="@firebase/vertexai-preview",vI="@firebase/firestore-compat",_I="firebase",wI="10.14.1";/**
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
 */const ld="[DEFAULT]",EI={[ad]:"fire-core",[q1]:"fire-core-compat",[Y1]:"fire-analytics",[Q1]:"fire-analytics-compat",[J1]:"fire-app-check",[X1]:"fire-app-check-compat",[Z1]:"fire-auth",[eI]:"fire-auth-compat",[tI]:"fire-rtdb",[nI]:"fire-data-connect",[rI]:"fire-rtdb-compat",[iI]:"fire-fn",[sI]:"fire-fn-compat",[oI]:"fire-iid",[aI]:"fire-iid-compat",[lI]:"fire-fcm",[cI]:"fire-fcm-compat",[uI]:"fire-perf",[dI]:"fire-perf-compat",[hI]:"fire-rc",[fI]:"fire-rc-compat",[pI]:"fire-gcs",[mI]:"fire-gcs-compat",[gI]:"fire-fst",[vI]:"fire-fst-compat",[yI]:"fire-vertex","fire-js":"fire-js",[_I]:"fire-js-all"};/**
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
 */const Ha=new Map,kI=new Map,cd=new Map;function dm(t,e){try{t.container.addComponent(e)}catch(n){hn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Nt(t){const e=t.name;if(cd.has(e))return hn.debug(`There were multiple attempts to register component ${e}.`),!1;cd.set(e,t);for(const n of Ha.values())dm(n,t);for(const n of kI.values())dm(n,t);return!0}function Mr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Lt(t){return t.settings!==void 0}/**
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
 */const SI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Bn=new Dr("app","Firebase",SI);/**
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
 */class xI{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new gt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Bn.create("app-deleted",{appName:this._name})}}/**
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
 */const Lr=wI;function A_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ld,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Bn.create("bad-app-name",{appName:String(i)});if(n||(n=S_()),!n)throw Bn.create("no-options");const s=Ha.get(i);if(s){if(Va(n,s.options)&&Va(r,s.config))return s;throw Bn.create("duplicate-app",{appName:i})}const o=new P1(i);for(const l of cd.values())o.addComponent(l);const a=new xI(n,r,o);return Ha.set(i,a),a}function Ul(t=ld){const e=Ha.get(t);if(!e&&t===ld&&S_())return A_();if(!e)throw Bn.create("no-app",{appName:t});return e}function Ze(t,e,n){var r;let i=(r=EI[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),hn.warn(a.join(" "));return}Nt(new gt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const CI="firebase-heartbeat-database",II=1,Gs="firebase-heartbeat-store";let Wc=null;function O_(){return Wc||(Wc=Fl(CI,II,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Gs)}catch(n){console.warn(n)}}}}).catch(t=>{throw Bn.create("idb-open",{originalErrorMessage:t.message})})),Wc}async function TI(t){try{const n=(await O_()).transaction(Gs),r=await n.objectStore(Gs).get(D_(t));return await n.done,r}catch(e){if(e instanceof Wt)hn.warn(e.message);else{const n=Bn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});hn.warn(n.message)}}}async function hm(t,e){try{const r=(await O_()).transaction(Gs,"readwrite");await r.objectStore(Gs).put(e,D_(t)),await r.done}catch(n){if(n instanceof Wt)hn.warn(n.message);else{const r=Bn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});hn.warn(r.message)}}}function D_(t){return`${t.name}!${t.options.appId}`}/**
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
 */const NI=1024,bI=30*24*60*60*1e3;class RI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new AI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=fm();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=bI}),this._storage.overwrite(this._heartbeatsCache))}catch(r){hn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=fm(),{heartbeatsToSend:r,unsentEntries:i}=PI(this._heartbeatsCache.heartbeats),s=$a(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return hn.warn(n),""}}}function fm(){return new Date().toISOString().substring(0,10)}function PI(t,e=NI){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),pm(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),pm(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class AI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return T_()?N_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await TI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return hm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return hm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function pm(t){return $a(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function OI(t){Nt(new gt("platform-logger",e=>new K1(e),"PRIVATE")),Nt(new gt("heartbeat",e=>new RI(e),"PRIVATE")),Ze(ad,um,t),Ze(ad,um,"esm2017"),Ze("fire-js","")}OI("");var DI="firebase",MI="10.14.1";/**
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
 */Ze(DI,MI,"app");function Oh(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function M_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const LI=M_,L_=new Dr("auth","Firebase",M_());/**
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
 */const Ka=new Ph("@firebase/auth");function jI(t,...e){Ka.logLevel<=K.WARN&&Ka.warn(`Auth (${Lr}): ${t}`,...e)}function ua(t,...e){Ka.logLevel<=K.ERROR&&Ka.error(`Auth (${Lr}): ${t}`,...e)}/**
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
 */function bt(t,...e){throw Dh(t,...e)}function $t(t,...e){return Dh(t,...e)}function j_(t,e,n){const r=Object.assign(Object.assign({},LI()),{[e]:n});return new Dr("auth","Firebase",r).create(e,{appName:t.name})}function sn(t){return j_(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Dh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return L_.create(t,...e)}function A(t,e,...n){if(!t)throw Dh(e,...n)}function Jt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ua(e),new Error(e)}function fn(t,e){t||Jt(e)}/**
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
 */function ud(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function FI(){return mm()==="http:"||mm()==="https:"}function mm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function UI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(FI()||p1()||"connection"in navigator)?navigator.onLine:!0}function $I(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ho{constructor(e,n){this.shortDelay=e,this.longDelay=n,fn(n>e,"Short delay should be less than long delay!"),this.isMobile=Rh()||I_()}get(){return UI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Mh(t,e){fn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class F_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Jt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Jt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Jt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const zI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const BI=new ho(3e4,6e4);function tr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function gn(t,e,n,r,i={}){return U_(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Fi(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:l},s);return f1()||(c.referrerPolicy="no-referrer"),F_.fetch()($_(t,t.config.apiHost,n,a),c)})}async function U_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},zI),e);try{const i=new VI(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ho(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ho(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ho(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ho(t,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw j_(t,u,c);bt(t,u)}}catch(i){if(i instanceof Wt)throw i;bt(t,"network-request-failed",{message:String(i)})}}async function fo(t,e,n,r,i={}){const s=await gn(t,e,n,r,i);return"mfaPendingCredential"in s&&bt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function $_(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Mh(t.config,i):`${t.config.apiScheme}://${i}`}function WI(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class VI{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r($t(this.auth,"network-request-failed")),BI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ho(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=$t(t,e,r);return i.customData._tokenResponse=n,i}function gm(t){return t!==void 0&&t.enterprise!==void 0}class HI{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return WI(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function KI(t,e){return gn(t,"GET","/v2/recaptchaConfig",tr(t,e))}/**
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
 */async function GI(t,e){return gn(t,"POST","/v1/accounts:delete",e)}async function z_(t,e){return gn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function _s(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function qI(t,e=!1){const n=ee(t),r=await n.getIdToken(e),i=Lh(r);A(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:_s(Vc(i.auth_time)),issuedAtTime:_s(Vc(i.iat)),expirationTime:_s(Vc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Vc(t){return Number(t)*1e3}function Lh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ua("JWT malformed, contained fewer than 3 sections"),null;try{const i=za(n);return i?JSON.parse(i):(ua("Failed to decode base64 JWT payload"),null)}catch(i){return ua("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function ym(t){const e=Lh(t);return A(e,"internal-error"),A(typeof e.exp<"u","internal-error"),A(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function xi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Wt&&QI(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function QI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class YI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class dd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=_s(this.lastLoginAt),this.creationTime=_s(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ga(t){var e;const n=t.auth,r=await t.getIdToken(),i=await xi(t,z_(n,{idToken:r}));A(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?B_(s.providerUserInfo):[],a=JI(t.providerData,o),l=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new dd(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function XI(t){const e=ee(t);await Ga(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function JI(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function B_(t){return t.map(e=>{var{providerId:n}=e,r=Oh(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function ZI(t,e){const n=await U_(t,{},async()=>{const r=Fi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=$_(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",F_.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function eT(t,e){return gn(t,"POST","/v2/accounts:revokeToken",tr(t,e))}/**
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
 */class ui{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){A(e.idToken,"internal-error"),A(typeof e.idToken<"u","internal-error"),A(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ym(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){A(e.length!==0,"internal-error");const n=ym(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(A(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await ZI(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ui;return r&&(A(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(A(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(A(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ui,this.toJSON())}_performRefresh(){return Jt("not implemented")}}/**
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
 */function vn(t,e){A(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Zt{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Oh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new YI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new dd(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await xi(this,this.stsTokenManager.getToken(this.auth,e));return A(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return qI(this,e)}reload(){return XI(this)}_assign(e){this!==e&&(A(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Zt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){A(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ga(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Lt(this.auth.app))return Promise.reject(sn(this.auth));const e=await this.getIdToken();return await xi(this,GI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,c,u;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,v=(c=n.createdAt)!==null&&c!==void 0?c:void 0,p=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:g,emailVerified:E,isAnonymous:C,providerData:S,stsTokenManager:T}=n;A(g&&T,e,"internal-error");const R=ui.fromJSON(this.name,T);A(typeof g=="string",e,"internal-error"),vn(d,e.name),vn(f,e.name),A(typeof E=="boolean",e,"internal-error"),A(typeof C=="boolean",e,"internal-error"),vn(m,e.name),vn(y,e.name),vn(_,e.name),vn(w,e.name),vn(v,e.name),vn(p,e.name);const B=new Zt({uid:g,auth:e,email:f,emailVerified:E,displayName:d,isAnonymous:C,photoURL:y,phoneNumber:m,tenantId:_,stsTokenManager:R,createdAt:v,lastLoginAt:p});return S&&Array.isArray(S)&&(B.providerData=S.map(O=>Object.assign({},O))),w&&(B._redirectEventId=w),B}static async _fromIdTokenResponse(e,n,r=!1){const i=new ui;i.updateFromServerResponse(n);const s=new Zt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ga(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];A(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?B_(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),a=new ui;a.updateFromIdToken(r);const l=new Zt({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new dd(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(l,c),l}}/**
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
 */const vm=new Map;function en(t){fn(t instanceof Function,"Expected a class definition");let e=vm.get(t);return e?(fn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,vm.set(t,e),e)}/**
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
 */class W_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}W_.type="NONE";const _m=W_;/**
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
 */function da(t,e,n){return`firebase:${t}:${e}:${n}`}class di{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=da(this.userKey,i.apiKey,s),this.fullPersistenceKey=da("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Zt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new di(en(_m),e,r);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=i[0]||en(_m);const o=da(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const d=Zt._fromJSON(e,u);c!==s&&(a=d),s=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new di(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(o)}catch{}})),new di(s,e,r))}}/**
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
 */function wm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(G_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(V_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Q_(e))return"Blackberry";if(Y_(e))return"Webos";if(H_(e))return"Safari";if((e.includes("chrome/")||K_(e))&&!e.includes("edge/"))return"Chrome";if(q_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function V_(t=Ve()){return/firefox\//i.test(t)}function H_(t=Ve()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function K_(t=Ve()){return/crios\//i.test(t)}function G_(t=Ve()){return/iemobile/i.test(t)}function q_(t=Ve()){return/android/i.test(t)}function Q_(t=Ve()){return/blackberry/i.test(t)}function Y_(t=Ve()){return/webos/i.test(t)}function jh(t=Ve()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function tT(t=Ve()){var e;return jh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function nT(){return m1()&&document.documentMode===10}function X_(t=Ve()){return jh(t)||q_(t)||Y_(t)||Q_(t)||/windows phone/i.test(t)||G_(t)}/**
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
 */function J_(t,e=[]){let n;switch(t){case"Browser":n=wm(Ve());break;case"Worker":n=`${wm(Ve())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Lr}/${r}`}/**
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
 */class rT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function iT(t,e={}){return gn(t,"GET","/v2/passwordPolicy",tr(t,e))}/**
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
 */const sT=6;class oT{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:sT,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class aT{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Em(this),this.idTokenSubscription=new Em(this),this.beforeStateQueue=new rT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=L_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=en(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await di.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await z_(this,{idToken:e}),r=await Zt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Lt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return A(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ga(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=$I()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Lt(this.app))return Promise.reject(sn(this));const n=e?ee(e):null;return n&&A(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&A(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Lt(this.app)?Promise.reject(sn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Lt(this.app)?Promise.reject(sn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(en(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await iT(this),n=new oT(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Dr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await eT(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&en(e)||this._popupRedirectResolver;A(n,this,"argument-error"),this.redirectPersistenceManager=await di.create(this,[en(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(A(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return A(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=J_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&jI(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function jr(t){return ee(t)}class Em{constructor(e){this.auth=e,this.observer=null,this.addObserver=x1(n=>this.observer=n)}get next(){return A(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let $l={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function lT(t){$l=t}function Z_(t){return $l.loadJS(t)}function cT(){return $l.recaptchaEnterpriseScript}function uT(){return $l.gapiScript}function dT(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const hT="recaptcha-enterprise",fT="NO_RECAPTCHA";class pT{constructor(e){this.type=hT,this.auth=jr(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{KI(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new HI(l);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;gm(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(c=>{o(c)}).catch(()=>{o(fT)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&gm(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=cT();l.length!==0&&(l+=a),Z_(l).then(()=>{i(a,s,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function km(t,e,n,r=!1){const i=new pT(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function hd(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await km(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await km(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
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
 */function mT(t,e){const n=Mr(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Va(s,e??{}))return i;bt(i,"already-initialized")}return n.initialize({options:e})}function gT(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(en);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function yT(t,e,n){const r=jr(t);A(r._canInitEmulator,r,"emulator-config-failed"),A(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=e0(e),{host:o,port:a}=vT(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),_T()}function e0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function vT(t){const e=e0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Sm(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Sm(o)}}}function Sm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function _T(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Fh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Jt("not implemented")}_getIdTokenResponse(e){return Jt("not implemented")}_linkToIdToken(e,n){return Jt("not implemented")}_getReauthenticationResolver(e){return Jt("not implemented")}}async function wT(t,e){return gn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function ET(t,e){return fo(t,"POST","/v1/accounts:signInWithPassword",tr(t,e))}/**
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
 */async function kT(t,e){return fo(t,"POST","/v1/accounts:signInWithEmailLink",tr(t,e))}async function ST(t,e){return fo(t,"POST","/v1/accounts:signInWithEmailLink",tr(t,e))}/**
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
 */class qs extends Fh{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new qs(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new qs(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return hd(e,n,"signInWithPassword",ET);case"emailLink":return kT(e,{email:this._email,oobCode:this._password});default:bt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return hd(e,r,"signUpPassword",wT);case"emailLink":return ST(e,{idToken:n,email:this._email,oobCode:this._password});default:bt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function hi(t,e){return fo(t,"POST","/v1/accounts:signInWithIdp",tr(t,e))}/**
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
 */const xT="http://localhost";class Sr extends Fh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Sr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):bt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Oh(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Sr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return hi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,hi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,hi(e,n)}buildRequest(){const e={requestUri:xT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Fi(n)}return e}}/**
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
 */function CT(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function IT(t){const e=ls(cs(t)).link,n=e?ls(cs(e)).deep_link_id:null,r=ls(cs(t)).deep_link_id;return(r?ls(cs(r)).link:null)||r||n||e||t}class Uh{constructor(e){var n,r,i,s,o,a;const l=ls(cs(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(r=l.oobCode)!==null&&r!==void 0?r:null,d=CT((i=l.mode)!==null&&i!==void 0?i:null);A(c&&u&&d,"argument-error"),this.apiKey=c,this.operation=d,this.code=u,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=IT(e);try{return new Uh(n)}catch{return null}}}/**
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
 */class Ui{constructor(){this.providerId=Ui.PROVIDER_ID}static credential(e,n){return qs._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Uh.parseLink(n);return A(r,"argument-error"),qs._fromEmailAndCode(e,r.code,r.tenantId)}}Ui.PROVIDER_ID="password";Ui.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ui.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class t0{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class po extends t0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class xn extends po{constructor(){super("facebook.com")}static credential(e){return Sr._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xn.credentialFromTaggedObject(e)}static credentialFromError(e){return xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xn.credential(e.oauthAccessToken)}catch{return null}}}xn.FACEBOOK_SIGN_IN_METHOD="facebook.com";xn.PROVIDER_ID="facebook.com";/**
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
 */class Cn extends po{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Sr._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Cn.credentialFromTaggedObject(e)}static credentialFromError(e){return Cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Cn.credential(n,r)}catch{return null}}}Cn.GOOGLE_SIGN_IN_METHOD="google.com";Cn.PROVIDER_ID="google.com";/**
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
 */class In extends po{constructor(){super("github.com")}static credential(e){return Sr._fromParams({providerId:In.PROVIDER_ID,signInMethod:In.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return In.credentialFromTaggedObject(e)}static credentialFromError(e){return In.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return In.credential(e.oauthAccessToken)}catch{return null}}}In.GITHUB_SIGN_IN_METHOD="github.com";In.PROVIDER_ID="github.com";/**
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
 */class Tn extends po{constructor(){super("twitter.com")}static credential(e,n){return Sr._fromParams({providerId:Tn.PROVIDER_ID,signInMethod:Tn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Tn.credentialFromTaggedObject(e)}static credentialFromError(e){return Tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Tn.credential(n,r)}catch{return null}}}Tn.TWITTER_SIGN_IN_METHOD="twitter.com";Tn.PROVIDER_ID="twitter.com";/**
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
 */async function TT(t,e){return fo(t,"POST","/v1/accounts:signUp",tr(t,e))}/**
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
 */class xr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Zt._fromIdTokenResponse(e,r,i),o=xm(r);return new xr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=xm(r);return new xr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function xm(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class qa extends Wt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,qa.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new qa(e,n,r,i)}}function n0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?qa._fromErrorAndOperation(t,s,e,r):s})}async function NT(t,e,n=!1){const r=await xi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return xr._forOperation(t,"link",r)}/**
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
 */async function bT(t,e,n=!1){const{auth:r}=t;if(Lt(r.app))return Promise.reject(sn(r));const i="reauthenticate";try{const s=await xi(t,n0(r,i,e,t),n);A(s.idToken,r,"internal-error");const o=Lh(s.idToken);A(o,r,"internal-error");const{sub:a}=o;return A(t.uid===a,r,"user-mismatch"),xr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&bt(r,"user-mismatch"),s}}/**
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
 */async function r0(t,e,n=!1){if(Lt(t.app))return Promise.reject(sn(t));const r="signIn",i=await n0(t,r,e),s=await xr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function RT(t,e){return r0(jr(t),e)}/**
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
 */async function i0(t){const e=jr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function PT(t,e,n){if(Lt(t.app))return Promise.reject(sn(t));const r=jr(t),o=await hd(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",TT).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&i0(t),l}),a=await xr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function AT(t,e,n){return Lt(t.app)?Promise.reject(sn(t)):RT(ee(t),Ui.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&i0(t),r})}/**
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
 */async function OT(t,e){return gn(t,"POST","/v1/accounts:update",e)}/**
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
 */async function DT(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=ee(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await xi(r,OT(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function MT(t,e,n,r){return ee(t).onIdTokenChanged(e,n,r)}function LT(t,e,n){return ee(t).beforeAuthStateChanged(e,n)}function jT(t,e,n,r){return ee(t).onAuthStateChanged(e,n,r)}function FT(t){return ee(t).signOut()}const Qa="__sak";/**
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
 */class s0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Qa,"1"),this.storage.removeItem(Qa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const UT=1e3,$T=10;class o0 extends s0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=X_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);nT()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,$T):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},UT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}o0.type="LOCAL";const zT=o0;/**
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
 */class a0 extends s0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}a0.type="SESSION";const l0=a0;/**
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
 */function BT(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class zl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new zl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,s)),l=await BT(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}zl.receivers=[];/**
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
 */function $h(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class WT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const c=$h("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const f=d;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(u),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function zt(){return window}function VT(t){zt().location.href=t}/**
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
 */function c0(){return typeof zt().WorkerGlobalScope<"u"&&typeof zt().importScripts=="function"}async function HT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function KT(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function GT(){return c0()?self:null}/**
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
 */const u0="firebaseLocalStorageDb",qT=1,Ya="firebaseLocalStorage",d0="fbase_key";class mo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Bl(t,e){return t.transaction([Ya],e?"readwrite":"readonly").objectStore(Ya)}function QT(){const t=indexedDB.deleteDatabase(u0);return new mo(t).toPromise()}function fd(){const t=indexedDB.open(u0,qT);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ya,{keyPath:d0})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ya)?e(r):(r.close(),await QT(),e(await fd()))})})}async function Cm(t,e,n){const r=Bl(t,!0).put({[d0]:e,value:n});return new mo(r).toPromise()}async function YT(t,e){const n=Bl(t,!1).get(e),r=await new mo(n).toPromise();return r===void 0?null:r.value}function Im(t,e){const n=Bl(t,!0).delete(e);return new mo(n).toPromise()}const XT=800,JT=3;class h0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await fd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>JT)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return c0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=zl._getInstance(GT()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await HT(),!this.activeServiceWorker)return;this.sender=new WT(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||KT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await fd();return await Cm(e,Qa,"1"),await Im(e,Qa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Cm(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>YT(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Im(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Bl(i,!1).getAll();return new mo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),XT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}h0.type="LOCAL";const ZT=h0;new ho(3e4,6e4);/**
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
 */function eN(t,e){return e?en(e):(A(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class zh extends Fh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return hi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return hi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return hi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function tN(t){return r0(t.auth,new zh(t),t.bypassAuthState)}function nN(t){const{auth:e,user:n}=t;return A(n,e,"internal-error"),bT(n,new zh(t),t.bypassAuthState)}async function rN(t){const{auth:e,user:n}=t;return A(n,e,"internal-error"),NT(n,new zh(t),t.bypassAuthState)}/**
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
 */class f0{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return tN;case"linkViaPopup":case"linkViaRedirect":return rN;case"reauthViaPopup":case"reauthViaRedirect":return nN;default:bt(this.auth,"internal-error")}}resolve(e){fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const iN=new ho(2e3,1e4);class ti extends f0{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,ti.currentPopupAction&&ti.currentPopupAction.cancel(),ti.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return A(e,this.auth,"internal-error"),e}async onExecution(){fn(this.filter.length===1,"Popup operations only handle one event");const e=$h();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject($t(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject($t(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ti.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject($t(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,iN.get())};e()}}ti.currentPopupAction=null;/**
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
 */const sN="pendingRedirect",ha=new Map;class oN extends f0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ha.get(this.auth._key());if(!e){try{const r=await aN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ha.set(this.auth._key(),e)}return this.bypassAuthState||ha.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function aN(t,e){const n=uN(e),r=cN(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function lN(t,e){ha.set(t._key(),e)}function cN(t){return en(t._redirectPersistence)}function uN(t){return da(sN,t.config.apiKey,t.name)}async function dN(t,e,n=!1){if(Lt(t.app))return Promise.reject(sn(t));const r=jr(t),i=eN(r,e),o=await new oN(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const hN=10*60*1e3;class fN{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!pN(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!p0(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError($t(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=hN&&this.cachedEventUids.clear(),this.cachedEventUids.has(Tm(e))}saveEventToCache(e){this.cachedEventUids.add(Tm(e)),this.lastProcessedEventTime=Date.now()}}function Tm(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function p0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function pN(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return p0(t);default:return!1}}/**
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
 */async function mN(t,e={}){return gn(t,"GET","/v1/projects",e)}/**
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
 */const gN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,yN=/^https?/;async function vN(t){if(t.config.emulator)return;const{authorizedDomains:e}=await mN(t);for(const n of e)try{if(_N(n))return}catch{}bt(t,"unauthorized-domain")}function _N(t){const e=ud(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!yN.test(n))return!1;if(gN.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const wN=new ho(3e4,6e4);function Nm(){const t=zt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function EN(t){return new Promise((e,n)=>{var r,i,s;function o(){Nm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Nm(),n($t(t,"network-request-failed"))},timeout:wN.get()})}if(!((i=(r=zt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=zt().gapi)===null||s===void 0)&&s.load)o();else{const a=dT("iframefcb");return zt()[a]=()=>{gapi.load?o():n($t(t,"network-request-failed"))},Z_(`${uT()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw fa=null,e})}let fa=null;function kN(t){return fa=fa||EN(t),fa}/**
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
 */const SN=new ho(5e3,15e3),xN="__/auth/iframe",CN="emulator/auth/iframe",IN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},TN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function NN(t){const e=t.config;A(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Mh(e,CN):`https://${t.config.authDomain}/${xN}`,r={apiKey:e.apiKey,appName:t.name,v:Lr},i=TN.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Fi(r).slice(1)}`}async function bN(t){const e=await kN(t),n=zt().gapi;return A(n,t,"internal-error"),e.open({where:document.body,url:NN(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:IN,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=$t(t,"network-request-failed"),a=zt().setTimeout(()=>{s(o)},SN.get());function l(){zt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const RN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},PN=500,AN=600,ON="_blank",DN="http://localhost";class bm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function MN(t,e,n,r=PN,i=AN){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},RN),{width:r.toString(),height:i.toString(),top:s,left:o}),c=Ve().toLowerCase();n&&(a=K_(c)?ON:n),V_(c)&&(e=e||DN,l.scrollbars="yes");const u=Object.entries(l).reduce((f,[m,y])=>`${f}${m}=${y},`,"");if(tT(c)&&a!=="_self")return LN(e||"",a),new bm(null);const d=window.open(e||"",a,u);A(d,t,"popup-blocked");try{d.focus()}catch{}return new bm(d)}function LN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const jN="__/auth/handler",FN="emulator/auth/handler",UN=encodeURIComponent("fac");async function Rm(t,e,n,r,i,s){A(t.config.authDomain,t,"auth-domain-config-required"),A(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Lr,eventId:i};if(e instanceof t0){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Ba(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries({}))o[u]=d}if(e instanceof po){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${UN}=${encodeURIComponent(l)}`:"";return`${$N(t)}?${Fi(a).slice(1)}${c}`}function $N({config:t}){return t.emulator?Mh(t,FN):`https://${t.authDomain}/${jN}`}/**
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
 */const Hc="webStorageSupport";class zN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=l0,this._completeRedirectFn=dN,this._overrideRedirectResult=lN}async _openPopup(e,n,r,i){var s;fn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Rm(e,n,r,ud(),i);return MN(e,o,$h())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Rm(e,n,r,ud(),i);return VT(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(fn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await bN(e),r=new fN(e);return n.register("authEvent",i=>(A(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Hc,{type:Hc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Hc];o!==void 0&&n(!!o),bt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=vN(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return X_()||H_()||jh()}}const BN=zN;var Pm="@firebase/auth",Am="1.7.9";/**
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
 */class WN{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){A(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function VN(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function HN(t){Nt(new gt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;A(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:J_(t)},c=new aT(r,i,s,l);return gT(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Nt(new gt("auth-internal",e=>{const n=jr(e.getProvider("auth").getImmediate());return(r=>new WN(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ze(Pm,Am,VN(t)),Ze(Pm,Am,"esm2017")}/**
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
 */const KN=5*60,GN=x_("authIdTokenMaxAge")||KN;let Om=null;const qN=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>GN)return;const i=n==null?void 0:n.token;Om!==i&&(Om=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function QN(t=Ul()){const e=Mr(t,"auth");if(e.isInitialized())return e.getImmediate();const n=mT(t,{popupRedirectResolver:BN,persistence:[ZT,zT,l0]}),r=x_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=qN(s.toString());LT(n,o,()=>o(n.currentUser)),MT(n,a=>o(a))}}const i=E_("auth");return i&&yT(n,`http://${i}`),n}function YN(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}lT({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=$t("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",YN().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});HN("Browser");var Dm={};const Mm="@firebase/database",Lm="1.0.8";/**
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
 */let m0="";function XN(t){m0=t}/**
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
 */class JN{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ve(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Ks(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class ZN{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Rt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const g0=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new JN(e)}}catch{}return new ZN},dr=g0("localStorage"),eb=g0("sessionStorage");/**
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
 */const fi=new Ph("@firebase/database"),y0=function(){let t=1;return function(){return t++}}(),v0=function(t){const e=T1(t),n=new S1;n.update(e);const r=n.digest();return Nh.encodeByteArray(r)},go=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=go.apply(null,r):typeof r=="object"?e+=ve(r):e+=r,e+=" "}return e};let ws=null,jm=!0;const tb=function(t,e){I(!0,"Can't turn on custom loggers persistently."),fi.logLevel=K.VERBOSE,ws=fi.log.bind(fi)},Ce=function(...t){if(jm===!0&&(jm=!1,ws===null&&eb.get("logging_enabled")===!0&&tb()),ws){const e=go.apply(null,t);ws(e)}},yo=function(t){return function(...e){Ce(t,...e)}},pd=function(...t){const e="FIREBASE INTERNAL ERROR: "+go(...t);fi.error(e)},pn=function(...t){const e=`FIREBASE FATAL ERROR: ${go(...t)}`;throw fi.error(e),new Error(e)},We=function(...t){const e="FIREBASE WARNING: "+go(...t);fi.warn(e)},nb=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&We("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Wl=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},rb=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Ci="[MIN_NAME]",Cr="[MAX_NAME]",Fr=function(t,e){if(t===e)return 0;if(t===Ci||e===Cr)return-1;if(e===Ci||t===Cr)return 1;{const n=Fm(t),r=Fm(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},ib=function(t,e){return t===e?0:t<e?-1:1},Ji=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ve(e))},Bh=function(t){if(typeof t!="object"||t===null)return ve(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=ve(e[r]),n+=":",n+=Bh(t[e[r]]);return n+="}",n},_0=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Te(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const w0=function(t){I(!Wl(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(s%2?1:0),s=Math.floor(s/2);c.push(i?1:0),c.reverse();const u=c.join("");let d="";for(l=0;l<64;l+=8){let f=parseInt(u.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),d=d+f}return d.toLowerCase()},sb=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},ob=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function ab(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const lb=new RegExp("^-?(0*)\\d{1,10}$"),cb=-2147483648,ub=2147483647,Fm=function(t){if(lb.test(t)){const e=Number(t);if(e>=cb&&e<=ub)return e}return null},$i=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw We("Exception was thrown by user callback.",n),e},Math.floor(0))}},db=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Es=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class hb{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){We(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class fb{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ce("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',We(e)}}class pa{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}pa.OWNER="owner";/**
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
 */const Wh="5",E0="v",k0="s",S0="r",x0="f",C0=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,I0="ls",T0="p",md="ac",N0="websocket",b0="long_polling";/**
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
 */class R0{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=dr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&dr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function pb(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function P0(t,e,n){I(typeof e=="string","typeof type must == string"),I(typeof n=="object","typeof params must == object");let r;if(e===N0)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===b0)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);pb(t)&&(n.ns=t.namespace);const i=[];return Te(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class mb{constructor(){this.counters_={}}incrementCounter(e,n=1){Rt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return a1(this.counters_)}}/**
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
 */const Kc={},Gc={};function Vh(t){const e=t.toString();return Kc[e]||(Kc[e]=new mb),Kc[e]}function gb(t,e){const n=t.toString();return Gc[n]||(Gc[n]=e()),Gc[n]}/**
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
 */class yb{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&$i(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Um="start",vb="close",_b="pLPCommand",wb="pRTLPCB",A0="id",O0="pw",D0="ser",Eb="cb",kb="seg",Sb="ts",xb="d",Cb="dframe",M0=1870,L0=30,Ib=M0-L0,Tb=25e3,Nb=3e4;class ni{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=yo(e),this.stats_=Vh(n),this.urlFn=l=>(this.appCheckToken&&(l[md]=this.appCheckToken),P0(n,b0,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new yb(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Nb)),rb(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Hh((...s)=>{const[o,a,l,c,u]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Um)this.id=a,this.password=l;else if(o===vb)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Um]="t",r[D0]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[Eb]=this.scriptTagHolder.uniqueCallbackIdentifier),r[E0]=Wh,this.transportSessionId&&(r[k0]=this.transportSessionId),this.lastSessionId&&(r[I0]=this.lastSessionId),this.applicationId&&(r[T0]=this.applicationId),this.appCheckToken&&(r[md]=this.appCheckToken),typeof location<"u"&&location.hostname&&C0.test(location.hostname)&&(r[S0]=x0);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ni.forceAllow_=!0}static forceDisallow(){ni.forceDisallow_=!0}static isAvailable(){return ni.forceAllow_?!0:!ni.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!sb()&&!ob()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ve(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=__(n),i=_0(r,Ib);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[Cb]="t",r[A0]=e,r[O0]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ve(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Hh{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=y0(),window[_b+this.uniqueCallbackIdentifier]=e,window[wb+this.uniqueCallbackIdentifier]=n,this.myIFrame=Hh.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ce("frame writing exception"),a.stack&&Ce(a.stack),Ce(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ce("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[A0]=this.myID,e[O0]=this.myPW,e[D0]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+L0+r.length<=M0;){const o=this.pendingSegs.shift();r=r+"&"+kb+i+"="+o.seg+"&"+Sb+i+"="+o.ts+"&"+xb+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(Tb)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Ce("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const bb=16384,Rb=45e3;let Xa=null;typeof MozWebSocket<"u"?Xa=MozWebSocket:typeof WebSocket<"u"&&(Xa=WebSocket);class kt{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=yo(this.connId),this.stats_=Vh(n),this.connURL=kt.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[E0]=Wh,typeof location<"u"&&location.hostname&&C0.test(location.hostname)&&(o[S0]=x0),n&&(o[k0]=n),r&&(o[I0]=r),i&&(o[md]=i),s&&(o[T0]=s),P0(e,N0,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,dr.set("previous_websocket_failure",!0);try{let r;g1(),this.mySock=new Xa(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){kt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Xa!==null&&!kt.forceDisallow_}static previouslyFailed(){return dr.isInMemoryStorage||dr.get("previous_websocket_failure")===!0}markConnectionHealthy(){dr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Ks(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(I(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=ve(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=_0(n,bb);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Rb))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}kt.responsesRequiredToBeHealthy=2;kt.healthyTimeout=3e4;/**
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
 */class Qs{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ni,kt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=kt&&kt.isAvailable();let r=n&&!kt.previouslyFailed();if(e.webSocketOnly&&(n||We("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[kt];else{const i=this.transports_=[];for(const s of Qs.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Qs.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Qs.globalTransportInitialized_=!1;/**
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
 */const Pb=6e4,Ab=5e3,Ob=10*1024,Db=100*1024,qc="t",$m="d",Mb="s",zm="r",Lb="e",Bm="o",Wm="a",Vm="n",Hm="p",jb="h";class Fb{constructor(e,n,r,i,s,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=yo("c:"+this.id+":"),this.transportManager_=new Qs(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Es(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Db?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Ob?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(qc in e){const n=e[qc];n===Wm?this.upgradeIfSecondaryHealthy_():n===zm?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Bm&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ji("t",e),r=Ji("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Hm,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Wm,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Vm,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ji("t",e),r=Ji("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ji(qc,e);if($m in e){const r=e[$m];if(n===jb){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Vm){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Mb?this.onConnectionShutdown_(r):n===zm?this.onReset_(r):n===Lb?pd("Server Error: "+r):n===Bm?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):pd("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Wh!==r&&We("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Es(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Pb))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Es(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Ab))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Hm,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(dr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class j0{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class F0{constructor(e){this.allowedEvents_=e,this.listeners_={},I(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){I(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Ja extends F0{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Rh()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Ja}getInitialEvent(e){return I(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Km=32,Gm=768;class H{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function z(){return new H("")}function M(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Gn(t){return t.pieces_.length-t.pieceNum_}function q(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new H(t.pieces_,e)}function Kh(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Ub(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Ys(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function U0(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new H(e,0)}function ae(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof H)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new H(n,0)}function j(t){return t.pieceNum_>=t.pieces_.length}function ze(t,e){const n=M(t),r=M(e);if(n===null)return e;if(n===r)return ze(q(t),q(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function $b(t,e){const n=Ys(t,0),r=Ys(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=Fr(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function Gh(t,e){if(Gn(t)!==Gn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function ht(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Gn(t)>Gn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class zb{constructor(e,n){this.errorPrefix_=n,this.parts_=Ys(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=jl(this.parts_[r]);$0(this)}}function Bb(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=jl(e),$0(t)}function Wb(t){const e=t.parts_.pop();t.byteLength_-=jl(e),t.parts_.length>0&&(t.byteLength_-=1)}function $0(t){if(t.byteLength_>Gm)throw new Error(t.errorPrefix_+"has a key path longer than "+Gm+" bytes ("+t.byteLength_+").");if(t.parts_.length>Km)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Km+") or object contains a cycle "+ar(t))}function ar(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class qh extends F0{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new qh}getInitialEvent(e){return I(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Zi=1e3,Vb=60*5*1e3,qm=30*1e3,Hb=1.3,Kb=3e4,Gb="server_kill",Qm=3;class on extends j0{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=on.nextPersistentConnectionId_++,this.log_=yo("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Zi,this.maxReconnectDelay_=Vb,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");qh.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ja.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(ve(s)),I(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Et,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),I(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,c=a.s;on.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Rt(e,"w")){const r=kr(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();We(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||k1(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=qm)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=E1(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ve(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):pd("Unrecognized action received from server: "+ve(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){I(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Zi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Zi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Kb&&(this.reconnectDelay_=Zi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Hb)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+on.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(d){I(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Ce("getToken() completed but was canceled"):(Ce("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=f&&f.token,a=new Fb(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,m=>{We(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(Gb)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&We(d),l())}}}interrupt(e){Ce("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ce("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ba(this.interruptReasons_)&&(this.reconnectDelay_=Zi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Bh(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new H(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){Ce("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Qm&&(this.reconnectDelay_=qm,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ce("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Qm&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+m0.replace(/\./g,"-")]=1,Rh()?e["framework.cordova"]=1:I_()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ja.getInstance().currentlyOnline();return Ba(this.interruptReasons_)&&e}}on.nextPersistentConnectionId_=0;on.nextConnectionId_=0;/**
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
 */class F{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new F(e,n)}}/**
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
 */class Vl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new F(Ci,e),i=new F(Ci,n);return this.compare(r,i)!==0}minPost(){return F.MIN}}/**
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
 */let Ko;class z0 extends Vl{static get __EMPTY_NODE(){return Ko}static set __EMPTY_NODE(e){Ko=e}compare(e,n){return Fr(e.name,n.name)}isDefinedOn(e){throw ji("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return F.MIN}maxPost(){return new F(Cr,Ko)}makePost(e,n){return I(typeof e=="string","KeyIndex indexValue must always be a string."),new F(e,Ko)}toString(){return".key"}}const pi=new z0;/**
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
 */class Go{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class xe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??xe.RED,this.left=i??Qe.EMPTY_NODE,this.right=s??Qe.EMPTY_NODE}copy(e,n,r,i,s){return new xe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Qe.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Qe.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}xe.RED=!0;xe.BLACK=!1;class qb{copy(e,n,r,i,s){return this}insert(e,n,r){return new xe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Qe{constructor(e,n=Qe.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Qe(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,xe.BLACK,null,null))}remove(e){return new Qe(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,xe.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Go(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Go(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Go(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Go(this.root_,null,this.comparator_,!0,e)}}Qe.EMPTY_NODE=new qb;/**
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
 */function Qb(t,e){return Fr(t.name,e.name)}function Qh(t,e){return Fr(t,e)}/**
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
 */let gd;function Yb(t){gd=t}const B0=function(t){return typeof t=="number"?"number:"+w0(t):"string:"+t},W0=function(t){if(t.isLeafNode()){const e=t.val();I(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Rt(e,".sv"),"Priority must be a string or number.")}else I(t===gd||t.isEmpty(),"priority of unexpected type.");I(t===gd||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Ym;class ke{constructor(e,n=ke.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,I(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),W0(this.priorityNode_)}static set __childrenNodeConstructor(e){Ym=e}static get __childrenNodeConstructor(){return Ym}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ke(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ke.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return j(e)?this:M(e)===".priority"?this.priorityNode_:ke.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ke.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=M(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(I(r!==".priority"||Gn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,ke.__childrenNodeConstructor.EMPTY_NODE.updateChild(q(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+B0(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=w0(this.value_):e+=this.value_,this.lazyHash_=v0(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ke.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ke.__childrenNodeConstructor?-1:(I(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=ke.VALUE_TYPE_ORDER.indexOf(n),s=ke.VALUE_TYPE_ORDER.indexOf(r);return I(i>=0,"Unknown leaf type: "+n),I(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ke.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let V0,H0;function Xb(t){V0=t}function Jb(t){H0=t}class Zb extends Vl{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Fr(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return F.MIN}maxPost(){return new F(Cr,new ke("[PRIORITY-POST]",H0))}makePost(e,n){const r=V0(e);return new F(n,new ke("[PRIORITY-POST]",r))}toString(){return".priority"}}const ie=new Zb;/**
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
 */const eR=Math.log(2);class tR{constructor(e){const n=s=>parseInt(Math.log(s)/eR,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Za=function(t,e,n,r){t.sort(e);const i=function(l,c){const u=c-l;let d,f;if(u===0)return null;if(u===1)return d=t[l],f=n?n(d):d,new xe(f,d.node,xe.BLACK,null,null);{const m=parseInt(u/2,10)+l,y=i(l,m),_=i(m+1,c);return d=t[m],f=n?n(d):d,new xe(f,d.node,xe.BLACK,y,_)}},s=function(l){let c=null,u=null,d=t.length;const f=function(y,_){const w=d-y,v=d;d-=y;const p=i(w+1,v),g=t[w],E=n?n(g):g;m(new xe(E,g.node,_,null,p))},m=function(y){c?(c.left=y,c=y):(u=y,c=y)};for(let y=0;y<l.count;++y){const _=l.nextBitIsOne(),w=Math.pow(2,l.count-(y+1));_?f(w,xe.BLACK):(f(w,xe.BLACK),f(w,xe.RED))}return u},o=new tR(t.length),a=s(o);return new Qe(r||e,a)};/**
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
 */let Qc;const Br={};class tn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return I(Br&&ie,"ChildrenNode.ts has not been loaded"),Qc=Qc||new tn({".priority":Br},{".priority":ie}),Qc}get(e){const n=kr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Qe?n:null}hasIndex(e){return Rt(this.indexSet_,e.toString())}addIndex(e,n){I(e!==pi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(F.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=Za(r,e.getCompare()):a=Br;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new tn(u,c)}addToIndexes(e,n){const r=Wa(this.indexes_,(i,s)=>{const o=kr(this.indexSet_,s);if(I(o,"Missing index implementation for "+s),i===Br)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(F.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Za(a,o.getCompare())}else return Br;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new F(e.name,a))),l.insert(e,e.node)}});return new tn(r,this.indexSet_)}removeFromIndexes(e,n){const r=Wa(this.indexes_,i=>{if(i===Br)return i;{const s=n.get(e.name);return s?i.remove(new F(e.name,s)):i}});return new tn(r,this.indexSet_)}}/**
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
 */let es;class P{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&W0(this.priorityNode_),this.children_.isEmpty()&&I(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return es||(es=new P(new Qe(Qh),null,tn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||es}updatePriority(e){return this.children_.isEmpty()?this:new P(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?es:n}}getChild(e){const n=M(e);return n===null?this:this.getImmediateChild(n).getChild(q(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(I(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new F(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?es:this.priorityNode_;return new P(i,o,s)}}updateChild(e,n){const r=M(e);if(r===null)return n;{I(M(e)!==".priority"||Gn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(q(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(ie,(o,a)=>{n[o]=a.val(e),r++,s&&P.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+B0(this.getPriority().val())+":"),this.forEachChild(ie,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":v0(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new F(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new F(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new F(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,F.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,F.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===vo?-1:0}withIndex(e){if(e===pi||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new P(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===pi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(ie),i=n.getIterator(ie);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===pi?null:this.indexMap_.get(e.toString())}}P.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class nR extends P{constructor(){super(new Qe(Qh),P.EMPTY_NODE,tn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return P.EMPTY_NODE}isEmpty(){return!1}}const vo=new nR;Object.defineProperties(F,{MIN:{value:new F(Ci,P.EMPTY_NODE)},MAX:{value:new F(Cr,vo)}});z0.__EMPTY_NODE=P.EMPTY_NODE;ke.__childrenNodeConstructor=P;Yb(vo);Jb(vo);/**
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
 */const rR=!0;function oe(t,e=null){if(t===null)return P.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),I(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ke(n,oe(e))}if(!(t instanceof Array)&&rR){const n=[];let r=!1;if(Te(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=oe(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new F(o,l)))}}),n.length===0)return P.EMPTY_NODE;const s=Za(n,Qb,o=>o.name,Qh);if(r){const o=Za(n,ie.getCompare());return new P(s,oe(e),new tn({".priority":o},{".priority":ie}))}else return new P(s,oe(e),tn.Default)}else{let n=P.EMPTY_NODE;return Te(t,(r,i)=>{if(Rt(t,r)&&r.substring(0,1)!=="."){const s=oe(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(oe(e))}}Xb(oe);/**
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
 */class iR extends Vl{constructor(e){super(),this.indexPath_=e,I(!j(e)&&M(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Fr(e.name,n.name):s}makePost(e,n){const r=oe(e),i=P.EMPTY_NODE.updateChild(this.indexPath_,r);return new F(n,i)}maxPost(){const e=P.EMPTY_NODE.updateChild(this.indexPath_,vo);return new F(Cr,e)}toString(){return Ys(this.indexPath_,0).join("/")}}/**
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
 */class sR extends Vl{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Fr(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return F.MIN}maxPost(){return F.MAX}makePost(e,n){const r=oe(e);return new F(n,r)}toString(){return".value"}}const oR=new sR;/**
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
 */function K0(t){return{type:"value",snapshotNode:t}}function Ii(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Xs(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Js(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function aR(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Yh{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){I(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Xs(n,a)):I(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Ii(n,r)):o.trackChildChange(Js(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(ie,(i,s)=>{n.hasChild(i)||r.trackChildChange(Xs(i,s))}),n.isLeafNode()||n.forEachChild(ie,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(Js(i,s,o))}else r.trackChildChange(Ii(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?P.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Zs{constructor(e){this.indexedFilter_=new Yh(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Zs.getStartPost_(e),this.endPost_=Zs.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new F(n,r))||(r=P.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=P.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(P.EMPTY_NODE);const s=this;return n.forEachChild(ie,(o,a)=>{s.matches(new F(o,a))||(i=i.updateImmediateChild(o,P.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class lR{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Zs(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new F(n,r))||(r=P.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=P.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=P.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(P.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,P.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(f,m)=>d(m,f)}else o=this.index_.getCompare();const a=e;I(a.numChildren()===this.limit_,"");const l=new F(n,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const m=f==null?1:o(f,l);if(u&&!r.isEmpty()&&m>=0)return s!=null&&s.trackChildChange(Js(n,r,d)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(Xs(n,d));const _=a.updateImmediateChild(n,P.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(s!=null&&s.trackChildChange(Ii(f.name,f.node)),_.updateImmediateChild(f.name,f.node)):_}}else return r.isEmpty()?e:u&&o(c,l)>=0?(s!=null&&(s.trackChildChange(Xs(c.name,c.node)),s.trackChildChange(Ii(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(c.name,P.EMPTY_NODE)):e}}/**
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
 */class Xh{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ie}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return I(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return I(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ci}hasEnd(){return this.endSet_}getIndexEndValue(){return I(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return I(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Cr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return I(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ie}copy(){const e=new Xh;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function cR(t){return t.loadsAllData()?new Yh(t.getIndex()):t.hasLimit()?new lR(t):new Zs(t)}function Xm(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ie?n="$priority":t.index_===oR?n="$value":t.index_===pi?n="$key":(I(t.index_ instanceof iR,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ve(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=ve(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+ve(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=ve(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+ve(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Jm(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ie&&(e.i=t.index_.toString()),e}/**
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
 */class el extends j0{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=yo("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(I(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=el.getListenId_(e,r),a={};this.listens_[o]=a;const l=Xm(e._queryParams);this.restRequest_(s+".json",l,(c,u)=>{let d=u;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(s,d,!1,r),kr(this.listens_,o)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",i(f,null)}})}unlisten(e,n){const r=el.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Xm(e._queryParams),r=e._path.toString(),i=new Et;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Fi(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Ks(a.responseText)}catch{We("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&We("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class uR{constructor(){this.rootNode_=P.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function tl(){return{value:null,children:new Map}}function zi(t,e,n){if(j(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=M(e);t.children.has(r)||t.children.set(r,tl());const i=t.children.get(r);e=q(e),zi(i,e,n)}}function yd(t,e){if(j(e))return t.value=null,t.children.clear(),!0;if(t.value!==null){if(t.value.isLeafNode())return!1;{const n=t.value;return t.value=null,n.forEachChild(ie,(r,i)=>{zi(t,new H(r),i)}),yd(t,e)}}else if(t.children.size>0){const n=M(e);return e=q(e),t.children.has(n)&&yd(t.children.get(n),e)&&t.children.delete(n),t.children.size===0}else return!0}function vd(t,e,n){t.value!==null?n(e,t.value):dR(t,(r,i)=>{const s=new H(e.toString()+"/"+r);vd(i,s,n)})}function dR(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class hR{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Te(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const Zm=10*1e3,fR=30*1e3,pR=5*60*1e3;class mR{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new hR(e);const r=Zm+(fR-Zm)*Math.random();Es(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Te(e,(i,s)=>{s>0&&Rt(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Es(this.reportStats_.bind(this),Math.floor(Math.random()*2*pR))}}/**
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
 */var St;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(St||(St={}));function Jh(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Zh(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function ef(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class nl{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=St.ACK_USER_WRITE,this.source=Jh()}operationForChild(e){if(j(this.path)){if(this.affectedTree.value!=null)return I(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new H(e));return new nl(z(),n,this.revert)}}else return I(M(this.path)===e,"operationForChild called for unrelated child."),new nl(q(this.path),this.affectedTree,this.revert)}}/**
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
 */class eo{constructor(e,n){this.source=e,this.path=n,this.type=St.LISTEN_COMPLETE}operationForChild(e){return j(this.path)?new eo(this.source,z()):new eo(this.source,q(this.path))}}/**
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
 */class Ir{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=St.OVERWRITE}operationForChild(e){return j(this.path)?new Ir(this.source,z(),this.snap.getImmediateChild(e)):new Ir(this.source,q(this.path),this.snap)}}/**
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
 */class Ti{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=St.MERGE}operationForChild(e){if(j(this.path)){const n=this.children.subtree(new H(e));return n.isEmpty()?null:n.value?new Ir(this.source,z(),n.value):new Ti(this.source,z(),n)}else return I(M(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ti(this.source,q(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class qn{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(j(e))return this.isFullyInitialized()&&!this.filtered_;const n=M(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class gR{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function yR(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(aR(o.childName,o.snapshotNode))}),ts(t,i,"child_removed",e,r,n),ts(t,i,"child_added",e,r,n),ts(t,i,"child_moved",s,r,n),ts(t,i,"child_changed",e,r,n),ts(t,i,"value",e,r,n),i}function ts(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>_R(t,a,l)),o.forEach(a=>{const l=vR(t,a,s);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function vR(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function _R(t,e,n){if(e.childName==null||n.childName==null)throw ji("Should only compare child_ events.");const r=new F(e.childName,e.snapshotNode),i=new F(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function Hl(t,e){return{eventCache:t,serverCache:e}}function ks(t,e,n,r){return Hl(new qn(e,n,r),t.serverCache)}function G0(t,e,n,r){return Hl(t.eventCache,new qn(e,n,r))}function rl(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Tr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Yc;const wR=()=>(Yc||(Yc=new Qe(ib)),Yc);class X{constructor(e,n=wR()){this.value=e,this.children=n}static fromObject(e){let n=new X(null);return Te(e,(r,i)=>{n=n.set(new H(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:z(),value:this.value};if(j(e))return null;{const r=M(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(q(e),n);return s!=null?{path:ae(new H(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(j(e))return this;{const n=M(e),r=this.children.get(n);return r!==null?r.subtree(q(e)):new X(null)}}set(e,n){if(j(e))return new X(n,this.children);{const r=M(e),s=(this.children.get(r)||new X(null)).set(q(e),n),o=this.children.insert(r,s);return new X(this.value,o)}}remove(e){if(j(e))return this.children.isEmpty()?new X(null):new X(null,this.children);{const n=M(e),r=this.children.get(n);if(r){const i=r.remove(q(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new X(null):new X(this.value,s)}else return this}}get(e){if(j(e))return this.value;{const n=M(e),r=this.children.get(n);return r?r.get(q(e)):null}}setTree(e,n){if(j(e))return n;{const r=M(e),s=(this.children.get(r)||new X(null)).setTree(q(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new X(this.value,o)}}fold(e){return this.fold_(z(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(ae(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,z(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(j(e))return null;{const s=M(e),o=this.children.get(s);return o?o.findOnPath_(q(e),ae(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,z(),n)}foreachOnPath_(e,n,r){if(j(e))return this;{this.value&&r(n,this.value);const i=M(e),s=this.children.get(i);return s?s.foreachOnPath_(q(e),ae(n,i),r):new X(null)}}foreach(e){this.foreach_(z(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(ae(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class It{constructor(e){this.writeTree_=e}static empty(){return new It(new X(null))}}function Ss(t,e,n){if(j(e))return new It(new X(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=ze(i,e);return s=s.updateChild(o,n),new It(t.writeTree_.set(i,s))}else{const i=new X(n),s=t.writeTree_.setTree(e,i);return new It(s)}}}function _d(t,e,n){let r=t;return Te(n,(i,s)=>{r=Ss(r,ae(e,i),s)}),r}function eg(t,e){if(j(e))return It.empty();{const n=t.writeTree_.setTree(e,new X(null));return new It(n)}}function wd(t,e){return Ur(t,e)!=null}function Ur(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(ze(n.path,e)):null}function tg(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ie,(r,i)=>{e.push(new F(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new F(r,i.value))}),e}function Wn(t,e){if(j(e))return t;{const n=Ur(t,e);return n!=null?new It(new X(n)):new It(t.writeTree_.subtree(e))}}function Ed(t){return t.writeTree_.isEmpty()}function Ni(t,e){return q0(z(),t.writeTree_,e)}function q0(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(I(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=q0(ae(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(ae(t,".priority"),r)),n}}/**
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
 */function Kl(t,e){return J0(e,t)}function ER(t,e,n,r,i){I(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Ss(t.visibleWrites,e,n)),t.lastWriteId=r}function kR(t,e,n,r){I(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=_d(t.visibleWrites,e,n),t.lastWriteId=r}function SR(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function xR(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);I(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&CR(a,r.path)?i=!1:ht(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return IR(t),!0;if(r.snap)t.visibleWrites=eg(t.visibleWrites,r.path);else{const a=r.children;Te(a,l=>{t.visibleWrites=eg(t.visibleWrites,ae(r.path,l))})}return!0}else return!1}function CR(t,e){if(t.snap)return ht(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&ht(ae(t.path,n),e))return!0;return!1}function IR(t){t.visibleWrites=Q0(t.allWrites,TR,z()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function TR(t){return t.visible}function Q0(t,e,n){let r=It.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)ht(n,o)?(a=ze(n,o),r=Ss(r,a,s.snap)):ht(o,n)&&(a=ze(o,n),r=Ss(r,z(),s.snap.getChild(a)));else if(s.children){if(ht(n,o))a=ze(n,o),r=_d(r,a,s.children);else if(ht(o,n))if(a=ze(o,n),j(a))r=_d(r,z(),s.children);else{const l=kr(s.children,M(a));if(l){const c=l.getChild(q(a));r=Ss(r,z(),c)}}}else throw ji("WriteRecord should have .snap or .children")}}return r}function Y0(t,e,n,r,i){if(!r&&!i){const s=Ur(t.visibleWrites,e);if(s!=null)return s;{const o=Wn(t.visibleWrites,e);if(Ed(o))return n;if(n==null&&!wd(o,z()))return null;{const a=n||P.EMPTY_NODE;return Ni(o,a)}}}else{const s=Wn(t.visibleWrites,e);if(!i&&Ed(s))return n;if(!i&&n==null&&!wd(s,z()))return null;{const o=function(c){return(c.visible||i)&&(!r||!~r.indexOf(c.writeId))&&(ht(c.path,e)||ht(e,c.path))},a=Q0(t.allWrites,o,e),l=n||P.EMPTY_NODE;return Ni(a,l)}}}function NR(t,e,n){let r=P.EMPTY_NODE;const i=Ur(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ie,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Wn(t.visibleWrites,e);return n.forEachChild(ie,(o,a)=>{const l=Ni(Wn(s,new H(o)),a);r=r.updateImmediateChild(o,l)}),tg(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Wn(t.visibleWrites,e);return tg(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function bR(t,e,n,r,i){I(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=ae(e,n);if(wd(t.visibleWrites,s))return null;{const o=Wn(t.visibleWrites,s);return Ed(o)?i.getChild(n):Ni(o,i.getChild(n))}}function RR(t,e,n,r){const i=ae(e,n),s=Ur(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Wn(t.visibleWrites,i);return Ni(o,r.getNode().getImmediateChild(n))}else return null}function PR(t,e){return Ur(t.visibleWrites,e)}function AR(t,e,n,r,i,s,o){let a;const l=Wn(t.visibleWrites,e),c=Ur(l,z());if(c!=null)a=c;else if(n!=null)a=Ni(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],d=o.getCompare(),f=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let m=f.getNext();for(;m&&u.length<i;)d(m,r)!==0&&u.push(m),m=f.getNext();return u}else return[]}function OR(){return{visibleWrites:It.empty(),allWrites:[],lastWriteId:-1}}function il(t,e,n,r){return Y0(t.writeTree,t.treePath,e,n,r)}function tf(t,e){return NR(t.writeTree,t.treePath,e)}function ng(t,e,n,r){return bR(t.writeTree,t.treePath,e,n,r)}function sl(t,e){return PR(t.writeTree,ae(t.treePath,e))}function DR(t,e,n,r,i,s){return AR(t.writeTree,t.treePath,e,n,r,i,s)}function nf(t,e,n){return RR(t.writeTree,t.treePath,e,n)}function X0(t,e){return J0(ae(t.treePath,e),t.writeTree)}function J0(t,e){return{treePath:t,writeTree:e}}/**
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
 */class MR{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;I(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),I(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Js(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Xs(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,Ii(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Js(r,e.snapshotNode,i.oldSnap));else throw ji("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class LR{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const Z0=new LR;class rf{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new qn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return nf(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Tr(this.viewCache_),s=DR(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function jR(t){return{filter:t}}function FR(t,e){I(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),I(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function UR(t,e,n,r,i){const s=new MR;let o,a;if(n.type===St.OVERWRITE){const c=n;c.source.fromUser?o=kd(t,e,c.path,c.snap,r,i,s):(I(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!j(c.path),o=ol(t,e,c.path,c.snap,r,i,a,s))}else if(n.type===St.MERGE){const c=n;c.source.fromUser?o=zR(t,e,c.path,c.children,r,i,s):(I(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Sd(t,e,c.path,c.children,r,i,a,s))}else if(n.type===St.ACK_USER_WRITE){const c=n;c.revert?o=VR(t,e,c.path,r,i,s):o=BR(t,e,c.path,c.affectedTree,r,i,s)}else if(n.type===St.LISTEN_COMPLETE)o=WR(t,e,n.path,r,s);else throw ji("Unknown operation type: "+n.type);const l=s.getChanges();return $R(e,o,l),{viewCache:o,changes:l}}function $R(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=rl(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(K0(rl(e)))}}function ew(t,e,n,r,i,s){const o=e.eventCache;if(sl(r,n)!=null)return e;{let a,l;if(j(n))if(I(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Tr(e),u=c instanceof P?c:P.EMPTY_NODE,d=tf(r,u);a=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const c=il(r,Tr(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,s)}else{const c=M(n);if(c===".priority"){I(Gn(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const d=ng(r,n,u,l);d!=null?a=t.filter.updatePriority(u,d):a=o.getNode()}else{const u=q(n);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const f=ng(r,n,o.getNode(),l);f!=null?d=o.getNode().getImmediateChild(c).updateChild(u,f):d=o.getNode().getImmediateChild(c)}else d=nf(r,c,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),c,d,u,i,s):a=o.getNode()}}return ks(e,a,o.isFullyInitialized()||j(n),t.filter.filtersNodes())}}function ol(t,e,n,r,i,s,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(j(n))c=u.updateFullNode(l.getNode(),r,null);else if(u.filtersNodes()&&!l.isFiltered()){const m=l.getNode().updateChild(n,r);c=u.updateFullNode(l.getNode(),m,null)}else{const m=M(n);if(!l.isCompleteForPath(n)&&Gn(n)>1)return e;const y=q(n),w=l.getNode().getImmediateChild(m).updateChild(y,r);m===".priority"?c=u.updatePriority(l.getNode(),w):c=u.updateChild(l.getNode(),m,w,y,Z0,null)}const d=G0(e,c,l.isFullyInitialized()||j(n),u.filtersNodes()),f=new rf(i,d,s);return ew(t,d,n,i,f,a)}function kd(t,e,n,r,i,s,o){const a=e.eventCache;let l,c;const u=new rf(i,e,s);if(j(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=ks(e,c,!0,t.filter.filtersNodes());else{const d=M(n);if(d===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),l=ks(e,c,a.isFullyInitialized(),a.isFiltered());else{const f=q(n),m=a.getNode().getImmediateChild(d);let y;if(j(f))y=r;else{const _=u.getCompleteChild(d);_!=null?Kh(f)===".priority"&&_.getChild(U0(f)).isEmpty()?y=_:y=_.updateChild(f,r):y=P.EMPTY_NODE}if(m.equals(y))l=e;else{const _=t.filter.updateChild(a.getNode(),d,y,f,u,o);l=ks(e,_,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function rg(t,e){return t.eventCache.isCompleteForChild(e)}function zR(t,e,n,r,i,s,o){let a=e;return r.foreach((l,c)=>{const u=ae(n,l);rg(e,M(u))&&(a=kd(t,a,u,c,i,s,o))}),r.foreach((l,c)=>{const u=ae(n,l);rg(e,M(u))||(a=kd(t,a,u,c,i,s,o))}),a}function ig(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Sd(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;j(n)?c=r:c=new X(null).setTree(n,r);const u=e.serverCache.getNode();return c.children.inorderTraversal((d,f)=>{if(u.hasChild(d)){const m=e.serverCache.getNode().getImmediateChild(d),y=ig(t,m,f);l=ol(t,l,new H(d),y,i,s,o,a)}}),c.children.inorderTraversal((d,f)=>{const m=!e.serverCache.isCompleteForChild(d)&&f.value===null;if(!u.hasChild(d)&&!m){const y=e.serverCache.getNode().getImmediateChild(d),_=ig(t,y,f);l=ol(t,l,new H(d),_,i,s,o,a)}}),l}function BR(t,e,n,r,i,s,o){if(sl(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(j(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return ol(t,e,n,l.getNode().getChild(n),i,s,a,o);if(j(n)){let c=new X(null);return l.getNode().forEachChild(pi,(u,d)=>{c=c.set(new H(u),d)}),Sd(t,e,n,c,i,s,a,o)}else return e}else{let c=new X(null);return r.foreach((u,d)=>{const f=ae(n,u);l.isCompleteForPath(f)&&(c=c.set(u,l.getNode().getChild(f)))}),Sd(t,e,n,c,i,s,a,o)}}function WR(t,e,n,r,i){const s=e.serverCache,o=G0(e,s.getNode(),s.isFullyInitialized()||j(n),s.isFiltered());return ew(t,o,n,r,Z0,i)}function VR(t,e,n,r,i,s){let o;if(sl(r,n)!=null)return e;{const a=new rf(r,e,i),l=e.eventCache.getNode();let c;if(j(n)||M(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=il(r,Tr(e));else{const d=e.serverCache.getNode();I(d instanceof P,"serverChildren would be complete if leaf node"),u=tf(r,d)}u=u,c=t.filter.updateFullNode(l,u,s)}else{const u=M(n);let d=nf(r,u,e.serverCache);d==null&&e.serverCache.isCompleteForChild(u)&&(d=l.getImmediateChild(u)),d!=null?c=t.filter.updateChild(l,u,d,q(n),a,s):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,P.EMPTY_NODE,q(n),a,s):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=il(r,Tr(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,s)))}return o=e.serverCache.isFullyInitialized()||sl(r,z())!=null,ks(e,c,o,t.filter.filtersNodes())}}/**
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
 */class HR{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Yh(r.getIndex()),s=cR(r);this.processor_=jR(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(P.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(P.EMPTY_NODE,a.getNode(),null),u=new qn(l,o.isFullyInitialized(),i.filtersNodes()),d=new qn(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=Hl(d,u),this.eventGenerator_=new gR(this.query_)}get query(){return this.query_}}function KR(t){return t.viewCache_.serverCache.getNode()}function GR(t){return rl(t.viewCache_)}function qR(t,e){const n=Tr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!j(e)&&!n.getImmediateChild(M(e)).isEmpty())?n.getChild(e):null}function sg(t){return t.eventRegistrations_.length===0}function QR(t,e){t.eventRegistrations_.push(e)}function og(t,e,n){const r=[];if(n){I(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function ag(t,e,n,r){e.type===St.MERGE&&e.source.queryId!==null&&(I(Tr(t.viewCache_),"We should always have a full cache before handling merges"),I(rl(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=UR(t.processor_,i,e,n,r);return FR(t.processor_,s.viewCache),I(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,tw(t,s.changes,s.viewCache.eventCache.getNode(),null)}function YR(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ie,(s,o)=>{r.push(Ii(s,o))}),n.isFullyInitialized()&&r.push(K0(n.getNode())),tw(t,r,n.getNode(),e)}function tw(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return yR(t.eventGenerator_,e,n,i)}/**
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
 */let al;class nw{constructor(){this.views=new Map}}function XR(t){I(!al,"__referenceConstructor has already been defined"),al=t}function JR(){return I(al,"Reference.ts has not been loaded"),al}function ZR(t){return t.views.size===0}function sf(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return I(s!=null,"SyncTree gave us an op for an invalid query."),ag(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(ag(o,e,n,r));return s}}function rw(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=il(n,i?r:null),l=!1;a?l=!0:r instanceof P?(a=tf(n,r),l=!1):(a=P.EMPTY_NODE,l=!1);const c=Hl(new qn(a,l,!1),new qn(r,i,!1));return new HR(e,c)}return o}function eP(t,e,n,r,i,s){const o=rw(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),QR(o,n),YR(o,n)}function tP(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=Qn(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(og(c,n,r)),sg(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||s.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(og(l,n,r)),sg(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!Qn(t)&&s.push(new(JR())(e._repo,e._path)),{removed:s,events:o}}function iw(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Vn(t,e){let n=null;for(const r of t.views.values())n=n||qR(r,e);return n}function sw(t,e){if(e._queryParams.loadsAllData())return Gl(t);{const r=e._queryIdentifier;return t.views.get(r)}}function ow(t,e){return sw(t,e)!=null}function Qn(t){return Gl(t)!=null}function Gl(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let ll;function nP(t){I(!ll,"__referenceConstructor has already been defined"),ll=t}function rP(){return I(ll,"Reference.ts has not been loaded"),ll}let iP=1;class lg{constructor(e){this.listenProvider_=e,this.syncPointTree_=new X(null),this.pendingWriteTree_=OR(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function of(t,e,n,r,i){return ER(t.pendingWriteTree_,e,n,r,i),i?Bi(t,new Ir(Jh(),e,n)):[]}function sP(t,e,n,r){kR(t.pendingWriteTree_,e,n,r);const i=X.fromObject(n);return Bi(t,new Ti(Jh(),e,i))}function An(t,e,n=!1){const r=SR(t.pendingWriteTree_,e);if(xR(t.pendingWriteTree_,e)){let s=new X(null);return r.snap!=null?s=s.set(z(),!0):Te(r.children,o=>{s=s.set(new H(o),!0)}),Bi(t,new nl(r.path,s,n))}else return[]}function _o(t,e,n){return Bi(t,new Ir(Zh(),e,n))}function oP(t,e,n){const r=X.fromObject(n);return Bi(t,new Ti(Zh(),e,r))}function aP(t,e){return Bi(t,new eo(Zh(),e))}function lP(t,e,n){const r=af(t,n);if(r){const i=lf(r),s=i.path,o=i.queryId,a=ze(s,e),l=new eo(ef(o),a);return cf(t,s,l)}else return[]}function cl(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||ow(o,e))){const l=tP(o,e,n,r);ZR(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(f=>f._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(s,(f,m)=>Qn(m));if(u&&!d){const f=t.syncPointTree_.subtree(s);if(!f.isEmpty()){const m=dP(f);for(let y=0;y<m.length;++y){const _=m[y],w=_.query,v=uw(t,_);t.listenProvider_.startListening(xs(w),to(t,w),v.hashFn,v.onComplete)}}}!d&&c.length>0&&!r&&(u?t.listenProvider_.stopListening(xs(e),null):c.forEach(f=>{const m=t.queryToTagMap.get(Ql(f));t.listenProvider_.stopListening(xs(f),m)}))}hP(t,c)}return a}function aw(t,e,n,r){const i=af(t,r);if(i!=null){const s=lf(i),o=s.path,a=s.queryId,l=ze(o,e),c=new Ir(ef(a),l,n);return cf(t,o,c)}else return[]}function cP(t,e,n,r){const i=af(t,r);if(i){const s=lf(i),o=s.path,a=s.queryId,l=ze(o,e),c=X.fromObject(n),u=new Ti(ef(a),l,c);return cf(t,o,u)}else return[]}function xd(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,m)=>{const y=ze(f,i);s=s||Vn(m,y),o=o||Qn(m)});let a=t.syncPointTree_.get(i);a?(o=o||Qn(a),s=s||Vn(a,z())):(a=new nw,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=P.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((m,y)=>{const _=Vn(y,z());_&&(s=s.updateImmediateChild(m,_))}));const c=ow(a,e);if(!c&&!e._queryParams.loadsAllData()){const f=Ql(e);I(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const m=fP();t.queryToTagMap.set(f,m),t.tagToQueryMap.set(m,f)}const u=Kl(t.pendingWriteTree_,i);let d=eP(a,e,n,u,s,l);if(!c&&!o&&!r){const f=sw(a,e);d=d.concat(pP(t,e,f))}return d}function ql(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=ze(o,e),c=Vn(a,l);if(c)return c});return Y0(i,e,s,n,!0)}function uP(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const d=ze(c,n);r=r||Vn(u,d)});let i=t.syncPointTree_.get(n);i?r=r||Vn(i,z()):(i=new nw,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new qn(r,!0,!1):null,a=Kl(t.pendingWriteTree_,e._path),l=rw(i,e,a,s?o.getNode():P.EMPTY_NODE,s);return GR(l)}function Bi(t,e){return lw(e,t.syncPointTree_,null,Kl(t.pendingWriteTree_,z()))}function lw(t,e,n,r){if(j(t.path))return cw(t,e,n,r);{const i=e.get(z());n==null&&i!=null&&(n=Vn(i,z()));let s=[];const o=M(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=X0(r,o);s=s.concat(lw(a,l,c,u))}return i&&(s=s.concat(sf(i,t,r,n))),s}}function cw(t,e,n,r){const i=e.get(z());n==null&&i!=null&&(n=Vn(i,z()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=X0(r,o),u=t.operationForChild(o);u&&(s=s.concat(cw(u,a,l,c)))}),i&&(s=s.concat(sf(i,t,r,n))),s}function uw(t,e){const n=e.query,r=to(t,n);return{hashFn:()=>(KR(e)||P.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?lP(t,n._path,r):aP(t,n._path);{const s=ab(i,n);return cl(t,n,null,s)}}}}function to(t,e){const n=Ql(e);return t.queryToTagMap.get(n)}function Ql(t){return t._path.toString()+"$"+t._queryIdentifier}function af(t,e){return t.tagToQueryMap.get(e)}function lf(t){const e=t.indexOf("$");return I(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new H(t.substr(0,e))}}function cf(t,e,n){const r=t.syncPointTree_.get(e);I(r,"Missing sync point for query tag that we're tracking");const i=Kl(t.pendingWriteTree_,e);return sf(r,n,i,null)}function dP(t){return t.fold((e,n,r)=>{if(n&&Qn(n))return[Gl(n)];{let i=[];return n&&(i=iw(n)),Te(r,(s,o)=>{i=i.concat(o)}),i}})}function xs(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(rP())(t._repo,t._path):t}function hP(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Ql(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function fP(){return iP++}function pP(t,e,n){const r=e._path,i=to(t,e),s=uw(t,n),o=t.listenProvider_.startListening(xs(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)I(!Qn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,d)=>{if(!j(c)&&u&&Qn(u))return[Gl(u).query];{let f=[];return u&&(f=f.concat(iw(u).map(m=>m.query))),Te(d,(m,y)=>{f=f.concat(y)}),f}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(xs(u),to(t,u))}}return o}/**
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
 */class uf{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new uf(n)}node(){return this.node_}}class df{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ae(this.path_,e);return new df(this.syncTree_,n)}node(){return ql(this.syncTree_,this.path_)}}const mP=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},cg=function(t,e,n){if(!t||typeof t!="object")return t;if(I(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return gP(t[".sv"],e,n);if(typeof t[".sv"]=="object")return yP(t[".sv"],e);I(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},gP=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:I(!1,"Unexpected server value: "+t)}},yP=function(t,e,n){t.hasOwnProperty("increment")||I(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&I(!1,"Unexpected increment value: "+r);const i=e.node();if(I(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},dw=function(t,e,n,r){return ff(e,new df(n,t),r)},hf=function(t,e,n){return ff(t,new uf(e),n)};function ff(t,e,n){const r=t.getPriority().val(),i=cg(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=cg(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new ke(a,oe(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new ke(i))),o.forEachChild(ie,(a,l)=>{const c=ff(l,e.getImmediateChild(a),n);c!==l&&(s=s.updateImmediateChild(a,c))}),s}}/**
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
 */class pf{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Yl(t,e){let n=e instanceof H?e:new H(e),r=t,i=M(n);for(;i!==null;){const s=kr(r.node.children,i)||{children:{},childCount:0};r=new pf(i,r,s),n=q(n),i=M(n)}return r}function $r(t){return t.node.value}function mf(t,e){t.node.value=e,Cd(t)}function hw(t){return t.node.childCount>0}function vP(t){return $r(t)===void 0&&!hw(t)}function Xl(t,e){Te(t.node.children,(n,r)=>{e(new pf(n,t,r))})}function fw(t,e,n,r){n&&e(t),Xl(t,i=>{fw(i,e,!0)})}function _P(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function wo(t){return new H(t.parent===null?t.name:wo(t.parent)+"/"+t.name)}function Cd(t){t.parent!==null&&wP(t.parent,t.name,t)}function wP(t,e,n){const r=vP(n),i=Rt(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Cd(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Cd(t))}/**
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
 */const EP=/[\[\].#$\/\u0000-\u001F\u007F]/,kP=/[\[\].#$\u0000-\u001F\u007F]/,Xc=10*1024*1024,gf=function(t){return typeof t=="string"&&t.length!==0&&!EP.test(t)},pw=function(t){return typeof t=="string"&&t.length!==0&&!kP.test(t)},SP=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),pw(t)},yf=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Wl(t)||t&&typeof t=="object"&&Rt(t,".sv")},ul=function(t,e,n,r){r&&e===void 0||Eo(Si(t,"value"),e,n)},Eo=function(t,e,n){const r=n instanceof H?new zb(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+ar(r));if(typeof e=="function")throw new Error(t+"contains a function "+ar(r)+" with contents = "+e.toString());if(Wl(e))throw new Error(t+"contains "+e.toString()+" "+ar(r));if(typeof e=="string"&&e.length>Xc/3&&jl(e)>Xc)throw new Error(t+"contains a string greater than "+Xc+" utf8 bytes "+ar(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Te(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!gf(o)))throw new Error(t+" contains an invalid key ("+o+") "+ar(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Bb(r,o),Eo(t,a,r),Wb(r)}),i&&s)throw new Error(t+' contains ".value" child '+ar(r)+" in addition to actual children.")}},xP=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=Ys(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!gf(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort($b);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&ht(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},mw=function(t,e,n,r){const i=Si(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];Te(e,(o,a)=>{const l=new H(o);if(Eo(i,a,ae(n,l)),Kh(l)===".priority"&&!yf(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(l)}),xP(i,s)},CP=function(t,e,n){if(Wl(e))throw new Error(Si(t,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!yf(e))throw new Error(Si(t,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},gw=function(t,e,n,r){if(!pw(n))throw new Error(Si(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},IP=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),gw(t,e,n)},On=function(t,e){if(M(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},TP=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!gf(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!SP(n))throw new Error(Si(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class NP{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Jl(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Gh(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function yw(t,e,n){Jl(t,n),vw(t,r=>Gh(r,e))}function ot(t,e,n){Jl(t,n),vw(t,r=>ht(r,e)||ht(e,r))}function vw(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(bP(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function bP(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();ws&&Ce("event: "+n.toString()),$i(r)}}}/**
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
 */const RP="repo_interrupt",PP=25;class AP{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new NP,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=tl(),this.transactionQueueTree_=new pf,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function OP(t,e,n){if(t.stats_=Vh(t.repoInfo_),t.forceRestClient_||db())t.server_=new el(t.repoInfo_,(r,i,s,o)=>{ug(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>dg(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ve(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new on(t.repoInfo_,e,(r,i,s,o)=>{ug(t,r,i,s,o)},r=>{dg(t,r)},r=>{DP(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=gb(t.repoInfo_,()=>new mR(t.stats_,t.server_)),t.infoData_=new uR,t.infoSyncTree_=new lg({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=_o(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),vf(t,"connected",!1),t.serverSyncTree_=new lg({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const c=o(a,l);ot(t.eventQueue_,r._path,c)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function _w(t){const n=t.infoData_.getNode(new H(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function ko(t){return mP({timestamp:_w(t)})}function ug(t,e,n,r,i){t.dataUpdateCount++;const s=new H(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=Wa(n,c=>oe(c));o=cP(t.serverSyncTree_,s,l,i)}else{const l=oe(n);o=aw(t.serverSyncTree_,s,l,i)}else if(r){const l=Wa(n,c=>oe(c));o=oP(t.serverSyncTree_,s,l)}else{const l=oe(n);o=_o(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=bi(t,s)),ot(t.eventQueue_,a,o)}function dg(t,e){vf(t,"connected",e),e===!1&&FP(t)}function DP(t,e){Te(e,(n,r)=>{vf(t,n,r)})}function vf(t,e,n){const r=new H("/.info/"+e),i=oe(n);t.infoData_.updateSnapshot(r,i);const s=_o(t.infoSyncTree_,r,i);ot(t.eventQueue_,r,s)}function Zl(t){return t.nextWriteId_++}function MP(t,e,n){const r=uP(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=oe(i).withIndex(e._queryParams.getIndex());xd(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=_o(t.serverSyncTree_,e._path,s);else{const a=to(t.serverSyncTree_,e);o=aw(t.serverSyncTree_,e._path,s,a)}return ot(t.eventQueue_,e._path,o),cl(t.serverSyncTree_,e,n,null,!0),s},i=>(Wi(t,"get for query "+ve(e)+" failed: "+i),Promise.reject(new Error(i))))}function LP(t,e,n,r,i){Wi(t,"set",{path:e.toString(),value:n,priority:r});const s=ko(t),o=oe(n,r),a=ql(t.serverSyncTree_,e),l=hf(o,a,s),c=Zl(t),u=of(t.serverSyncTree_,e,l,c,!0);Jl(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(f,m)=>{const y=f==="ok";y||We("set at "+e+" failed: "+f);const _=An(t.serverSyncTree_,c,!y);ot(t.eventQueue_,e,_),Yn(t,i,f,m)});const d=wf(t,e);bi(t,d),ot(t.eventQueue_,d,[])}function jP(t,e,n,r){Wi(t,"update",{path:e.toString(),value:n});let i=!0;const s=ko(t),o={};if(Te(n,(a,l)=>{i=!1,o[a]=dw(ae(e,a),oe(l),t.serverSyncTree_,s)}),i)Ce("update() called with empty data.  Don't do anything."),Yn(t,r,"ok",void 0);else{const a=Zl(t),l=sP(t.serverSyncTree_,e,o,a);Jl(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,u)=>{const d=c==="ok";d||We("update at "+e+" failed: "+c);const f=An(t.serverSyncTree_,a,!d),m=f.length>0?bi(t,e):e;ot(t.eventQueue_,m,f),Yn(t,r,c,u)}),Te(n,c=>{const u=wf(t,ae(e,c));bi(t,u)}),ot(t.eventQueue_,e,[])}}function FP(t){Wi(t,"onDisconnectEvents");const e=ko(t),n=tl();vd(t.onDisconnect_,z(),(i,s)=>{const o=dw(i,s,t.serverSyncTree_,e);zi(n,i,o)});let r=[];vd(n,z(),(i,s)=>{r=r.concat(_o(t.serverSyncTree_,i,s));const o=wf(t,i);bi(t,o)}),t.onDisconnect_=tl(),ot(t.eventQueue_,z(),r)}function UP(t,e,n){t.server_.onDisconnectCancel(e.toString(),(r,i)=>{r==="ok"&&yd(t.onDisconnect_,e),Yn(t,n,r,i)})}function hg(t,e,n,r){const i=oe(n);t.server_.onDisconnectPut(e.toString(),i.val(!0),(s,o)=>{s==="ok"&&zi(t.onDisconnect_,e,i),Yn(t,r,s,o)})}function $P(t,e,n,r,i){const s=oe(n,r);t.server_.onDisconnectPut(e.toString(),s.val(!0),(o,a)=>{o==="ok"&&zi(t.onDisconnect_,e,s),Yn(t,i,o,a)})}function zP(t,e,n,r){if(Ba(n)){Ce("onDisconnect().update() called with empty data.  Don't do anything."),Yn(t,r,"ok",void 0);return}t.server_.onDisconnectMerge(e.toString(),n,(i,s)=>{i==="ok"&&Te(n,(o,a)=>{const l=oe(a);zi(t.onDisconnect_,ae(e,o),l)}),Yn(t,r,i,s)})}function BP(t,e,n){let r;M(e._path)===".info"?r=xd(t.infoSyncTree_,e,n):r=xd(t.serverSyncTree_,e,n),yw(t.eventQueue_,e._path,r)}function Id(t,e,n){let r;M(e._path)===".info"?r=cl(t.infoSyncTree_,e,n):r=cl(t.serverSyncTree_,e,n),yw(t.eventQueue_,e._path,r)}function WP(t){t.persistentConnection_&&t.persistentConnection_.interrupt(RP)}function Wi(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ce(n,...e)}function Yn(t,e,n,r){e&&$i(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function VP(t,e,n,r,i,s){Wi(t,"transaction on "+e);const o={path:e,update:n,onComplete:r,status:null,order:y0(),applyLocally:s,retryCount:0,unwatcher:i,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},a=_f(t,e,void 0);o.currentInputSnapshot=a;const l=o.update(a.val());if(l===void 0)o.unwatcher(),o.currentOutputSnapshotRaw=null,o.currentOutputSnapshotResolved=null,o.onComplete&&o.onComplete(null,!1,o.currentInputSnapshot);else{Eo("transaction failed: Data returned ",l,o.path),o.status=0;const c=Yl(t.transactionQueueTree_,e),u=$r(c)||[];u.push(o),mf(c,u);let d;typeof l=="object"&&l!==null&&Rt(l,".priority")?(d=kr(l,".priority"),I(yf(d),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):d=(ql(t.serverSyncTree_,e)||P.EMPTY_NODE).getPriority().val();const f=ko(t),m=oe(l,d),y=hf(m,a,f);o.currentOutputSnapshotRaw=m,o.currentOutputSnapshotResolved=y,o.currentWriteId=Zl(t);const _=of(t.serverSyncTree_,e,y,o.currentWriteId,o.applyLocally);ot(t.eventQueue_,e,_),ec(t,t.transactionQueueTree_)}}function _f(t,e,n){return ql(t.serverSyncTree_,e,n)||P.EMPTY_NODE}function ec(t,e=t.transactionQueueTree_){if(e||tc(t,e),$r(e)){const n=Ew(t,e);I(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&HP(t,wo(e),n)}else hw(e)&&Xl(e,n=>{ec(t,n)})}function HP(t,e,n){const r=n.map(c=>c.currentWriteId),i=_f(t,e,r);let s=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];I(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=ze(e,u.path);s=s.updateChild(d,u.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Wi(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const d=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(An(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&d.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();tc(t,Yl(t.transactionQueueTree_,e)),ec(t,t.transactionQueueTree_),ot(t.eventQueue_,e,u);for(let f=0;f<d.length;f++)$i(d[f])}else{if(c==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{We("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=c}bi(t,e)}},o)}function bi(t,e){const n=ww(t,e),r=wo(n),i=Ew(t,n);return KP(t,i,r),r}function KP(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=ze(n,l.path);let u=!1,d;if(I(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,d=l.abortReason,i=i.concat(An(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=PP)u=!0,d="maxretry",i=i.concat(An(t.serverSyncTree_,l.currentWriteId,!0));else{const f=_f(t,l.path,o);l.currentInputSnapshot=f;const m=e[a].update(f.val());if(m!==void 0){Eo("transaction failed: Data returned ",m,l.path);let y=oe(m);typeof m=="object"&&m!=null&&Rt(m,".priority")||(y=y.updatePriority(f.getPriority()));const w=l.currentWriteId,v=ko(t),p=hf(y,f,v);l.currentOutputSnapshotRaw=y,l.currentOutputSnapshotResolved=p,l.currentWriteId=Zl(t),o.splice(o.indexOf(w),1),i=i.concat(of(t.serverSyncTree_,l.path,p,l.currentWriteId,l.applyLocally)),i=i.concat(An(t.serverSyncTree_,w,!0))}else u=!0,d="nodata",i=i.concat(An(t.serverSyncTree_,l.currentWriteId,!0))}ot(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(d),!1,null))))}tc(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)$i(r[a]);ec(t,t.transactionQueueTree_)}function ww(t,e){let n,r=t.transactionQueueTree_;for(n=M(e);n!==null&&$r(r)===void 0;)r=Yl(r,n),e=q(e),n=M(e);return r}function Ew(t,e){const n=[];return kw(t,e,n),n.sort((r,i)=>r.order-i.order),n}function kw(t,e,n){const r=$r(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);Xl(e,i=>{kw(t,i,n)})}function tc(t,e){const n=$r(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,mf(e,n.length>0?n:void 0)}Xl(e,r=>{tc(t,r)})}function wf(t,e){const n=wo(ww(t,e)),r=Yl(t.transactionQueueTree_,e);return _P(r,i=>{Jc(t,i)}),Jc(t,r),fw(r,i=>{Jc(t,i)}),n}function Jc(t,e){const n=$r(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(I(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(I(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(An(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?mf(e,void 0):n.length=s+1,ot(t.eventQueue_,wo(e),i);for(let o=0;o<r.length;o++)$i(r[o])}}/**
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
 */function GP(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function qP(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):We(`Invalid query segment '${n}' in query '${t}'`)}return e}const fg=function(t,e){const n=QP(t),r=n.namespace;n.domain==="firebase.com"&&pn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&pn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||nb();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new R0(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new H(n.pathString)}},QP=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(u,d)),u<d&&(i=GP(t.substring(u,d)));const f=qP(t.substring(Math.min(t.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const m=e.slice(0,c);if(m.toLowerCase()==="localhost")n="localhost";else if(m.split(".").length<=2)n=m;else{const y=e.indexOf(".");r=e.substring(0,y).toLowerCase(),n=e.substring(y+1),s=r}"ns"in f&&(s=f.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
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
 */const pg="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",YP=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=pg.charAt(n%64),n=Math.floor(n/64);I(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=pg.charAt(e[i]);return I(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class XP{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ve(this.snapshot.exportVal())}}class JP{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class Sw{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return I(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class ZP{constructor(e,n){this._repo=e,this._path=n}cancel(){const e=new Et;return UP(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){On("OnDisconnect.remove",this._path);const e=new Et;return hg(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){On("OnDisconnect.set",this._path),ul("OnDisconnect.set",e,this._path,!1);const n=new Et;return hg(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}setWithPriority(e,n){On("OnDisconnect.setWithPriority",this._path),ul("OnDisconnect.setWithPriority",e,this._path,!1),CP("OnDisconnect.setWithPriority",n);const r=new Et;return $P(this._repo,this._path,e,n,r.wrapCallback(()=>{})),r.promise}update(e){On("OnDisconnect.update",this._path),mw("OnDisconnect.update",e,this._path);const n=new Et;return zP(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}}/**
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
 */class Ef{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return j(this._path)?null:Kh(this._path)}get ref(){return new Vt(this._repo,this._path)}get _queryIdentifier(){const e=Jm(this._queryParams),n=Bh(e);return n==="{}"?"default":n}get _queryObject(){return Jm(this._queryParams)}isEqual(e){if(e=ee(e),!(e instanceof Ef))return!1;const n=this._repo===e._repo,r=Gh(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Ub(this._path)}}class Vt extends Ef{constructor(e,n){super(e,n,new Xh,!1)}get parent(){const e=U0(this._path);return e===null?null:new Vt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ri{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new H(e),r=no(this.ref,e);return new Ri(this._node.getChild(n),r,ie)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Ri(i,no(this.ref,r),ie)))}hasChild(e){const n=new H(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Q(t,e){return t=ee(t),t._checkNotDeleted("ref"),e!==void 0?no(t._root,e):t._root}function no(t,e){return t=ee(t),M(t._path)===null?IP("child","path",e):gw("child","path",e),new Vt(t._repo,ae(t._path,e))}function Zc(t){return t=ee(t),new ZP(t._repo,t._path)}function xw(t,e){t=ee(t),On("push",t._path),ul("push",e,t._path,!0);const n=_w(t._repo),r=YP(n),i=no(t,r),s=no(t,r);let o;return e!=null?o=So(s,e).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function kf(t){return On("remove",t._path),So(t,null)}function So(t,e){t=ee(t),On("set",t._path),ul("set",e,t._path,!1);const n=new Et;return LP(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function Td(t,e){mw("update",e,t._path);const n=new Et;return jP(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function Bt(t){t=ee(t);const e=new Sw(()=>{}),n=new nc(e);return MP(t._repo,t,n).then(r=>new Ri(r,new Vt(t._repo,t._path),t._queryParams.getIndex()))}class nc{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new XP("value",this,new Ri(e.snapshotNode,new Vt(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new JP(this,e,n):null}matches(e){return e instanceof nc?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function eA(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,c=(u,d)=>{Id(t._repo,t,a),l(u,d)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new Sw(n,s||void 0),a=new nc(o);return BP(t._repo,t,a),()=>Id(t._repo,t,a)}function xo(t,e,n,r){return eA(t,"value",e,n,r)}function tA(t,e,n){Id(t._repo,t,null)}XR(Vt);nP(Vt);/**
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
 */const nA="FIREBASE_DATABASE_EMULATOR_HOST",Nd={};let rA=!1;function iA(t,e,n,r){t.repoInfo_=new R0(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function sA(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||pn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ce("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=fg(s,i),a=o.repoInfo,l;typeof process<"u"&&Dm&&(l=Dm[nA]),l?(s=`http://${l}?ns=${a.namespace}`,o=fg(s,i),a=o.repoInfo):o.repoInfo.secure;const c=new fb(t.name,t.options,e);TP("Invalid Firebase Database URL",o),j(o.path)||pn("Database URL must point to the root of a Firebase Database (not including a child path).");const u=aA(a,t,c,new hb(t.name,n));return new lA(u,t)}function oA(t,e){const n=Nd[e];(!n||n[t.key]!==t)&&pn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),WP(t),delete n[t.key]}function aA(t,e,n,r){let i=Nd[e.name];i||(i={},Nd[e.name]=i);let s=i[t.toURLString()];return s&&pn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new AP(t,rA,n,r),i[t.toURLString()]=s,s}class lA{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(OP(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Vt(this._repo,z())),this._rootInternal}_delete(){return this._rootInternal!==null&&(oA(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&pn("Cannot call "+e+" on a deleted database.")}}function cA(t=Ul(),e){const n=Mr(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=k_("database");r&&uA(n,...r)}return n}function uA(t,e,n,r={}){t=ee(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&pn("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&pn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new pa(pa.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:C_(r.mockUserToken,t.app.options.projectId);s=new pa(o)}iA(i,e,n,s)}/**
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
 */function dA(t){XN(Lr),Nt(new gt("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return sA(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Ze(Mm,Lm,t),Ze(Mm,Lm,"esm2017")}/**
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
 */const hA={".sv":"timestamp"};function mg(){return hA}/**
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
 */class fA{constructor(e,n){this.committed=e,this.snapshot=n}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}}function pA(t,e,n){var r;if(t=ee(t),On("Reference.transaction",t._path),t.key===".length"||t.key===".keys")throw"Reference.transaction failed: "+t.key+" is a read-only object.";const i=(r=void 0)!==null&&r!==void 0?r:!0,s=new Et,o=(l,c,u)=>{let d=null;l?s.reject(l):(d=new Ri(u,new Vt(t._repo,t._path),ie),s.resolve(new fA(c,d)))},a=xo(t,()=>{});return VP(t._repo,t._path,e,o,a,i),s.promise}on.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};on.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};dA();/**
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
 */const Cw="firebasestorage.googleapis.com",Iw="storageBucket",mA=2*60*1e3,gA=10*60*1e3;/**
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
 */class he extends Wt{constructor(e,n,r=0){super(eu(e),`Firebase Storage: ${n} (${eu(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,he.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return eu(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var de;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(de||(de={}));function eu(t){return"storage/"+t}function Sf(){const t="An unknown error occurred, please check the error payload for server response.";return new he(de.UNKNOWN,t)}function yA(t){return new he(de.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function vA(t){return new he(de.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function _A(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new he(de.UNAUTHENTICATED,t)}function wA(){return new he(de.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function EA(t){return new he(de.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function kA(){return new he(de.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function SA(){return new he(de.CANCELED,"User canceled the upload/download.")}function xA(t){return new he(de.INVALID_URL,"Invalid URL '"+t+"'.")}function CA(t){return new he(de.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function IA(){return new he(de.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Iw+"' property when initializing the app?")}function TA(){return new he(de.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function NA(){return new he(de.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function bA(t){return new he(de.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function bd(t){return new he(de.INVALID_ARGUMENT,t)}function Tw(){return new he(de.APP_DELETED,"The Firebase app was deleted.")}function RA(t){return new he(de.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Cs(t,e){return new he(de.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function ns(t){throw new he(de.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class rt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=rt.makeFromUrl(e,n)}catch{return new rt(e,"")}if(r.path==="")return r;throw CA(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(E){E.path.charAt(E.path.length-1)==="/"&&(E.path_=E.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(E){E.path_=decodeURIComponent(E.path)}const u="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",m=new RegExp(`^https?://${d}/${u}/b/${i}/o${f}`,"i"),y={bucket:1,path:3},_=n===Cw?"(?:storage.googleapis.com|storage.cloud.google.com)":n,w="([^?#]*)",v=new RegExp(`^https?://${_}/${i}/${w}`,"i"),g=[{regex:a,indices:l,postModify:s},{regex:m,indices:y,postModify:c},{regex:v,indices:{bucket:1,path:2},postModify:c}];for(let E=0;E<g.length;E++){const C=g[E],S=C.regex.exec(e);if(S){const T=S[C.indices.bucket];let R=S[C.indices.path];R||(R=""),r=new rt(T,R),C.postModify(r);break}}if(r==null)throw xA(e);return r}}class PA{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function AA(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...w){c||(c=!0,e.apply(null,w))}function d(w){i=setTimeout(()=>{i=null,t(m,l())},w)}function f(){s&&clearTimeout(s)}function m(w,...v){if(c){f();return}if(w){f(),u.call(null,w,...v);return}if(l()||o){f(),u.call(null,w,...v);return}r<64&&(r*=2);let g;a===1?(a=2,g=0):g=(r+Math.random())*1e3,d(g)}let y=!1;function _(w){y||(y=!0,f(),!c&&(i!==null?(w||(a=2),clearTimeout(i),d(0)):w||(a=1)))}return d(0),s=setTimeout(()=>{o=!0,_(!0)},n),_}function OA(t){t(!1)}/**
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
 */function DA(t){return t!==void 0}function MA(t){return typeof t=="object"&&!Array.isArray(t)}function xf(t){return typeof t=="string"||t instanceof String}function gg(t){return Cf()&&t instanceof Blob}function Cf(){return typeof Blob<"u"}function yg(t,e,n,r){if(r<e)throw bd(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw bd(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function If(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function Nw(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var gr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(gr||(gr={}));/**
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
 */function LA(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
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
 */class jA{constructor(e,n,r,i,s,o,a,l,c,u,d,f=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=d,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((m,y)=>{this.resolve_=m,this.reject_=y,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new qo(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===gr.NO_ERROR,l=s.getStatus();if(!a||LA(l,this.additionalRetryCodes_)&&this.retry){const u=s.getErrorCode()===gr.ABORT;r(!1,new qo(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;r(!0,new qo(c,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());DA(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=Sf();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?Tw():SA();o(l)}else{const l=kA();o(l)}};this.canceled_?n(!1,new qo(!1,null,!0)):this.backoffId_=AA(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&OA(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class qo{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function FA(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function UA(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function $A(t,e){e&&(t["X-Firebase-GMPID"]=e)}function zA(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function BA(t,e,n,r,i,s,o=!0){const a=Nw(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return $A(c,e),FA(c,n),UA(c,s),zA(c,r),new jA(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
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
 */function WA(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function VA(...t){const e=WA();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Cf())return new Blob(t);throw new he(de.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function HA(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function KA(t){if(typeof atob>"u")throw bA("base-64");return atob(t)}/**
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
 */const jt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class tu{constructor(e,n){this.data=e,this.contentType=n||null}}function GA(t,e){switch(t){case jt.RAW:return new tu(bw(e));case jt.BASE64:case jt.BASE64URL:return new tu(Rw(t,e));case jt.DATA_URL:return new tu(QA(e),YA(e))}throw Sf()}function bw(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function qA(t){let e;try{e=decodeURIComponent(t)}catch{throw Cs(jt.DATA_URL,"Malformed data URL.")}return bw(e)}function Rw(t,e){switch(t){case jt.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Cs(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case jt.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Cs(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=KA(e)}catch(i){throw i.message.includes("polyfill")?i:Cs(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class Pw{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Cs(jt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=XA(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function QA(t){const e=new Pw(t);return e.base64?Rw(jt.BASE64,e.rest):qA(e.rest)}function YA(t){return new Pw(t).contentType}function XA(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class Nn{constructor(e,n){let r=0,i="";gg(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(gg(this.data_)){const r=this.data_,i=HA(r,e,n);return i===null?null:new Nn(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Nn(r,!0)}}static getBlob(...e){if(Cf()){const n=e.map(r=>r instanceof Nn?r.data_:r);return new Nn(VA.apply(null,n))}else{const n=e.map(o=>xf(o)?GA(jt.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Nn(i,!0)}}uploadData(){return this.data_}}/**
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
 */function Aw(t){let e;try{e=JSON.parse(t)}catch{return null}return MA(e)?e:null}/**
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
 */function JA(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function ZA(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function Ow(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function eO(t,e){return e}class Ue{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||eO}}let Qo=null;function tO(t){return!xf(t)||t.length<2?t:Ow(t)}function Dw(){if(Qo)return Qo;const t=[];t.push(new Ue("bucket")),t.push(new Ue("generation")),t.push(new Ue("metageneration")),t.push(new Ue("name","fullPath",!0));function e(s,o){return tO(o)}const n=new Ue("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new Ue("size");return i.xform=r,t.push(i),t.push(new Ue("timeCreated")),t.push(new Ue("updated")),t.push(new Ue("md5Hash",null,!0)),t.push(new Ue("cacheControl",null,!0)),t.push(new Ue("contentDisposition",null,!0)),t.push(new Ue("contentEncoding",null,!0)),t.push(new Ue("contentLanguage",null,!0)),t.push(new Ue("contentType",null,!0)),t.push(new Ue("metadata","customMetadata",!0)),Qo=t,Qo}function nO(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new rt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function rO(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return nO(r,t),r}function Mw(t,e,n){const r=Aw(e);return r===null?null:rO(t,r,n)}function iO(t,e,n,r){const i=Aw(e);if(i===null||!xf(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(c=>{const u=t.bucket,d=t.fullPath,f="/b/"+o(u)+"/o/"+o(d),m=If(f,n,r),y=Nw({alt:"media",token:c});return m+y})[0]}function sO(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class Lw{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function jw(t){if(!t)throw Sf()}function oO(t,e){function n(r,i){const s=Mw(t,i,e);return jw(s!==null),s}return n}function aO(t,e){function n(r,i){const s=Mw(t,i,e);return jw(s!==null),iO(s,i,t.host,t._protocol)}return n}function Fw(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=wA():i=_A():n.getStatus()===402?i=vA(t.bucket):n.getStatus()===403?i=EA(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function lO(t){const e=Fw(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=yA(t.path)),s.serverResponse=i.serverResponse,s}return n}function cO(t,e,n){const r=e.fullServerUrl(),i=If(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new Lw(i,s,aO(t,n),o);return a.errorHandler=lO(e),a}function uO(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function dO(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=uO(null,e)),r}function hO(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let g="";for(let E=0;E<2;E++)g=g+Math.random().toString().slice(2);return g}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const c=dO(e,r,i),u=sO(c,n),d="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+l+`\r
Content-Type: `+c.contentType+`\r
\r
`,f=`\r
--`+l+"--",m=Nn.getBlob(d,r,f);if(m===null)throw TA();const y={name:c.fullPath},_=If(s,t.host,t._protocol),w="POST",v=t.maxUploadRetryTime,p=new Lw(_,w,oO(t,n),v);return p.urlParams=y,p.headers=o,p.body=m.uploadData(),p.errorHandler=Fw(e),p}class fO{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=gr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=gr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=gr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw ns("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ns("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ns("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ns("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ns("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class pO extends fO{initXhr(){this.xhr_.responseType="text"}}function Uw(){return new pO}/**
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
 */class Nr{constructor(e,n){this._service=e,n instanceof rt?this._location=n:this._location=rt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Nr(e,n)}get root(){const e=new rt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Ow(this._location.path)}get storage(){return this._service}get parent(){const e=JA(this._location.path);if(e===null)return null;const n=new rt(this._location.bucket,e);return new Nr(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw RA(e)}}function mO(t,e,n){t._throwIfRoot("uploadBytes");const r=hO(t.storage,t._location,Dw(),new Nn(e,!0),n);return t.storage.makeRequestWithTokens(r,Uw).then(i=>({metadata:i,ref:t}))}function gO(t){t._throwIfRoot("getDownloadURL");const e=cO(t.storage,t._location,Dw());return t.storage.makeRequestWithTokens(e,Uw).then(n=>{if(n===null)throw NA();return n})}function yO(t,e){const n=ZA(t._location.path,e),r=new rt(t._location.bucket,n);return new Nr(t.storage,r)}/**
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
 */function vO(t){return/^[A-Za-z]+:\/\//.test(t)}function _O(t,e){return new Nr(t,e)}function $w(t,e){if(t instanceof Tf){const n=t;if(n._bucket==null)throw IA();const r=new Nr(n,n._bucket);return e!=null?$w(r,e):r}else return e!==void 0?yO(t,e):t}function wO(t,e){if(e&&vO(e)){if(t instanceof Tf)return _O(t,e);throw bd("To use ref(service, url), the first argument must be a Storage instance.")}else return $w(t,e)}function vg(t,e){const n=e==null?void 0:e[Iw];return n==null?null:rt.makeFromBucketSpec(n,t)}function EO(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:C_(i,t.app.options.projectId))}class Tf{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=Cw,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=mA,this._maxUploadRetryTime=gA,this._requests=new Set,i!=null?this._bucket=rt.makeFromBucketSpec(i,this._host):this._bucket=vg(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=rt.makeFromBucketSpec(this._url,e):this._bucket=vg(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){yg("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){yg("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Nr(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new PA(Tw());{const o=BA(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const _g="@firebase/storage",wg="0.13.2";/**
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
 */const zw="storage";function kO(t,e,n){return t=ee(t),mO(t,e,n)}function SO(t){return t=ee(t),gO(t)}function xO(t,e){return t=ee(t),wO(t,e)}function CO(t=Ul(),e){t=ee(t);const r=Mr(t,zw).getImmediate({identifier:e}),i=k_("storage");return i&&IO(r,...i),r}function IO(t,e,n,r={}){EO(t,e,n,r)}function TO(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Tf(n,r,i,e,Lr)}function NO(){Nt(new gt(zw,TO,"PUBLIC").setMultipleInstances(!0)),Ze(_g,wg,""),Ze(_g,wg,"esm2017")}NO();const Bw="@firebase/installations",Nf="0.6.9";/**
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
 */const Ww=1e4,Vw=`w:${Nf}`,Hw="FIS_v2",bO="https://firebaseinstallations.googleapis.com/v1",RO=60*60*1e3,PO="installations",AO="Installations";/**
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
 */const OO={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},br=new Dr(PO,AO,OO);function Kw(t){return t instanceof Wt&&t.code.includes("request-failed")}/**
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
 */function Gw({projectId:t}){return`${bO}/projects/${t}/installations`}function qw(t){return{token:t.token,requestStatus:2,expiresIn:MO(t.expiresIn),creationTime:Date.now()}}async function Qw(t,e){const r=(await e.json()).error;return br.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Yw({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function DO(t,{refreshToken:e}){const n=Yw(t);return n.append("Authorization",LO(e)),n}async function Xw(t){const e=await t();return e.status>=500&&e.status<600?t():e}function MO(t){return Number(t.replace("s","000"))}function LO(t){return`${Hw} ${t}`}/**
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
 */async function jO({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=Gw(t),i=Yw(t),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={fid:n,authVersion:Hw,appId:t.appId,sdkVersion:Vw},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await Xw(()=>fetch(r,a));if(l.ok){const c=await l.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:qw(c.authToken)}}else throw await Qw("Create Installation",l)}/**
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
 */function Jw(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function FO(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const UO=/^[cdef][\w-]{21}$/,Rd="";function $O(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=zO(t);return UO.test(n)?n:Rd}catch{return Rd}}function zO(t){return FO(t).substr(0,22)}/**
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
 */function rc(t){return`${t.appName}!${t.appId}`}/**
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
 */const Zw=new Map;function eE(t,e){const n=rc(t);tE(n,e),BO(n,e)}function tE(t,e){const n=Zw.get(t);if(n)for(const r of n)r(e)}function BO(t,e){const n=WO();n&&n.postMessage({key:t,fid:e}),VO()}let hr=null;function WO(){return!hr&&"BroadcastChannel"in self&&(hr=new BroadcastChannel("[Firebase] FID Change"),hr.onmessage=t=>{tE(t.data.key,t.data.fid)}),hr}function VO(){Zw.size===0&&hr&&(hr.close(),hr=null)}/**
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
 */const HO="firebase-installations-database",KO=1,Rr="firebase-installations-store";let nu=null;function bf(){return nu||(nu=Fl(HO,KO,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Rr)}}})),nu}async function dl(t,e){const n=rc(t),i=(await bf()).transaction(Rr,"readwrite"),s=i.objectStore(Rr),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&eE(t,e.fid),e}async function nE(t){const e=rc(t),r=(await bf()).transaction(Rr,"readwrite");await r.objectStore(Rr).delete(e),await r.done}async function ic(t,e){const n=rc(t),i=(await bf()).transaction(Rr,"readwrite"),s=i.objectStore(Rr),o=await s.get(n),a=e(o);return a===void 0?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&eE(t,a.fid),a}/**
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
 */async function Rf(t){let e;const n=await ic(t.appConfig,r=>{const i=GO(r),s=qO(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Rd?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function GO(t){const e=t||{fid:$O(),registrationStatus:0};return rE(e)}function qO(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(br.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=QO(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:YO(t)}:{installationEntry:e}}async function QO(t,e){try{const n=await jO(t,e);return dl(t.appConfig,n)}catch(n){throw Kw(n)&&n.customData.serverCode===409?await nE(t.appConfig):await dl(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function YO(t){let e=await Eg(t.appConfig);for(;e.registrationStatus===1;)await Jw(100),e=await Eg(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Rf(t);return r||n}return e}function Eg(t){return ic(t,e=>{if(!e)throw br.create("installation-not-found");return rE(e)})}function rE(t){return XO(t)?{fid:t.fid,registrationStatus:0}:t}function XO(t){return t.registrationStatus===1&&t.registrationTime+Ww<Date.now()}/**
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
 */async function JO({appConfig:t,heartbeatServiceProvider:e},n){const r=ZO(t,n),i=DO(t,n),s=e.getImmediate({optional:!0});if(s){const c=await s.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const o={installation:{sdkVersion:Vw,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await Xw(()=>fetch(r,a));if(l.ok){const c=await l.json();return qw(c)}else throw await Qw("Generate Auth Token",l)}function ZO(t,{fid:e}){return`${Gw(t)}/${e}/authTokens:generate`}/**
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
 */async function Pf(t,e=!1){let n;const r=await ic(t.appConfig,s=>{if(!iE(s))throw br.create("not-registered");const o=s.authToken;if(!e&&n2(o))return s;if(o.requestStatus===1)return n=e2(t,e),s;{if(!navigator.onLine)throw br.create("app-offline");const a=i2(s);return n=t2(t,a),a}});return n?await n:r.authToken}async function e2(t,e){let n=await kg(t.appConfig);for(;n.authToken.requestStatus===1;)await Jw(100),n=await kg(t.appConfig);const r=n.authToken;return r.requestStatus===0?Pf(t,e):r}function kg(t){return ic(t,e=>{if(!iE(e))throw br.create("not-registered");const n=e.authToken;return s2(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function t2(t,e){try{const n=await JO(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await dl(t.appConfig,r),n}catch(n){if(Kw(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await nE(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await dl(t.appConfig,r)}throw n}}function iE(t){return t!==void 0&&t.registrationStatus===2}function n2(t){return t.requestStatus===2&&!r2(t)}function r2(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+RO}function i2(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function s2(t){return t.requestStatus===1&&t.requestTime+Ww<Date.now()}/**
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
 */async function o2(t){const e=t,{installationEntry:n,registrationPromise:r}=await Rf(e);return r?r.catch(console.error):Pf(e).catch(console.error),n.fid}/**
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
 */async function a2(t,e=!1){const n=t;return await l2(n),(await Pf(n,e)).token}async function l2(t){const{registrationPromise:e}=await Rf(t);e&&await e}/**
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
 */function c2(t){if(!t||!t.options)throw ru("App Configuration");if(!t.name)throw ru("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw ru(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function ru(t){return br.create("missing-app-config-values",{valueName:t})}/**
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
 */const sE="installations",u2="installations-internal",d2=t=>{const e=t.getProvider("app").getImmediate(),n=c2(e),r=Mr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},h2=t=>{const e=t.getProvider("app").getImmediate(),n=Mr(e,sE).getImmediate();return{getId:()=>o2(n),getToken:i=>a2(n,i)}};function f2(){Nt(new gt(sE,d2,"PUBLIC")),Nt(new gt(u2,h2,"PRIVATE"))}f2();Ze(Bw,Nf);Ze(Bw,Nf,"esm2017");/**
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
 */const p2="/firebase-messaging-sw.js",m2="/firebase-cloud-messaging-push-scope",oE="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",g2="https://fcmregistrations.googleapis.com/v1",aE="google.c.a.c_id",y2="google.c.a.c_l",v2="google.c.a.ts",_2="google.c.a.e";var Sg;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Sg||(Sg={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var ro;(function(t){t.PUSH_RECEIVED="push-received",t.NOTIFICATION_CLICKED="notification-clicked"})(ro||(ro={}));/**
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
 */function qt(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function w2(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),i=new Uint8Array(r.length);for(let s=0;s<r.length;++s)i[s]=r.charCodeAt(s);return i}/**
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
 */const iu="fcm_token_details_db",E2=5,xg="fcm_token_object_Store";async function k2(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(s=>s.name).includes(iu))return null;let e=null;return(await Fl(iu,E2,{upgrade:async(r,i,s,o)=>{var a;if(i<2||!r.objectStoreNames.contains(xg))return;const l=o.objectStore(xg),c=await l.index("fcmSenderId").get(t);if(await l.clear(),!!c){if(i===2){const u=c;if(!u.auth||!u.p256dh||!u.endpoint)return;e={token:u.fcmToken,createTime:(a=u.createTime)!==null&&a!==void 0?a:Date.now(),subscriptionOptions:{auth:u.auth,p256dh:u.p256dh,endpoint:u.endpoint,swScope:u.swScope,vapidKey:typeof u.vapidKey=="string"?u.vapidKey:qt(u.vapidKey)}}}else if(i===3){const u=c;e={token:u.fcmToken,createTime:u.createTime,subscriptionOptions:{auth:qt(u.auth),p256dh:qt(u.p256dh),endpoint:u.endpoint,swScope:u.swScope,vapidKey:qt(u.vapidKey)}}}else if(i===4){const u=c;e={token:u.fcmToken,createTime:u.createTime,subscriptionOptions:{auth:qt(u.auth),p256dh:qt(u.p256dh),endpoint:u.endpoint,swScope:u.swScope,vapidKey:qt(u.vapidKey)}}}}}})).close(),await zc(iu),await zc("fcm_vapid_details_db"),await zc("undefined"),S2(e)?e:null}function S2(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const x2="firebase-messaging-database",C2=1,io="firebase-messaging-store";let su=null;function lE(){return su||(su=Fl(x2,C2,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(io)}}})),su}async function I2(t){const e=cE(t),r=await(await lE()).transaction(io).objectStore(io).get(e);if(r)return r;{const i=await k2(t.appConfig.senderId);if(i)return await Af(t,i),i}}async function Af(t,e){const n=cE(t),i=(await lE()).transaction(io,"readwrite");return await i.objectStore(io).put(e,n),await i.done,e}function cE({appConfig:t}){return t.appId}/**
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
 */const T2={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},je=new Dr("messaging","Messaging",T2);/**
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
 */async function N2(t,e){const n=await Df(t),r=uE(e),i={method:"POST",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(Of(t.appConfig),i)).json()}catch(o){throw je.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw je.create("token-subscribe-failed",{errorInfo:o})}if(!s.token)throw je.create("token-subscribe-no-token");return s.token}async function b2(t,e){const n=await Df(t),r=uE(e.subscriptionOptions),i={method:"PATCH",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(`${Of(t.appConfig)}/${e.token}`,i)).json()}catch(o){throw je.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw je.create("token-update-failed",{errorInfo:o})}if(!s.token)throw je.create("token-update-no-token");return s.token}async function R2(t,e){const r={method:"DELETE",headers:await Df(t)};try{const s=await(await fetch(`${Of(t.appConfig)}/${e}`,r)).json();if(s.error){const o=s.error.message;throw je.create("token-unsubscribe-failed",{errorInfo:o})}}catch(i){throw je.create("token-unsubscribe-failed",{errorInfo:i==null?void 0:i.toString()})}}function Of({projectId:t}){return`${g2}/projects/${t}/registrations`}async function Df({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function uE({p256dh:t,auth:e,endpoint:n,vapidKey:r}){const i={web:{endpoint:n,auth:e,p256dh:t}};return r!==oE&&(i.web.applicationPubKey=r),i}/**
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
 */const P2=7*24*60*60*1e3;async function A2(t){const e=await D2(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:qt(e.getKey("auth")),p256dh:qt(e.getKey("p256dh"))},r=await I2(t.firebaseDependencies);if(r){if(M2(r.subscriptionOptions,n))return Date.now()>=r.createTime+P2?O2(t,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await R2(t.firebaseDependencies,r.token)}catch(i){console.warn(i)}return Cg(t.firebaseDependencies,n)}else return Cg(t.firebaseDependencies,n)}async function O2(t,e){try{const n=await b2(t.firebaseDependencies,e),r=Object.assign(Object.assign({},e),{token:n,createTime:Date.now()});return await Af(t.firebaseDependencies,r),n}catch(n){throw n}}async function Cg(t,e){const r={token:await N2(t,e),createTime:Date.now(),subscriptionOptions:e};return await Af(t,r),r.token}async function D2(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:w2(e)})}function M2(t,e){const n=e.vapidKey===t.vapidKey,r=e.endpoint===t.endpoint,i=e.auth===t.auth,s=e.p256dh===t.p256dh;return n&&r&&i&&s}/**
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
 */function Ig(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return L2(e,t),j2(e,t),F2(e,t),e}function L2(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const r=e.notification.body;r&&(t.notification.body=r);const i=e.notification.image;i&&(t.notification.image=i);const s=e.notification.icon;s&&(t.notification.icon=s)}function j2(t,e){e.data&&(t.data=e.data)}function F2(t,e){var n,r,i,s,o;if(!e.fcmOptions&&!(!((n=e.notification)===null||n===void 0)&&n.click_action))return;t.fcmOptions={};const a=(i=(r=e.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&i!==void 0?i:(s=e.notification)===null||s===void 0?void 0:s.click_action;a&&(t.fcmOptions.link=a);const l=(o=e.fcmOptions)===null||o===void 0?void 0:o.analytics_label;l&&(t.fcmOptions.analyticsLabel=l)}/**
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
 */function U2(t){return typeof t=="object"&&!!t&&aE in t}/**
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
 */function $2(t){if(!t||!t.options)throw ou("App Configuration Object");if(!t.name)throw ou("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const r of e)if(!n[r])throw ou(r);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function ou(t){return je.create("missing-app-config-values",{valueName:t})}/**
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
 */class z2{constructor(e,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=$2(e);this.firebaseDependencies={app:e,appConfig:i,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
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
 */async function B2(t){try{t.swRegistration=await navigator.serviceWorker.register(p2,{scope:m2}),t.swRegistration.update().catch(()=>{})}catch(e){throw je.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}/**
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
 */async function W2(t,e){if(!e&&!t.swRegistration&&await B2(t),!(!e&&t.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw je.create("invalid-sw-registration");t.swRegistration=e}}/**
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
 */async function V2(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=oE)}/**
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
 */async function dE(t,e){if(!navigator)throw je.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw je.create("permission-blocked");return await V2(t,e==null?void 0:e.vapidKey),await W2(t,e==null?void 0:e.serviceWorkerRegistration),A2(t)}/**
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
 */async function H2(t,e,n){const r=K2(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[aE],message_name:n[y2],message_time:n[v2],message_device_time:Math.floor(Date.now()/1e3)})}function K2(t){switch(t){case ro.NOTIFICATION_CLICKED:return"notification_open";case ro.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function G2(t,e){const n=e.data;if(!n.isFirebaseMessaging)return;t.onMessageHandler&&n.messageType===ro.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(Ig(n)):t.onMessageHandler.next(Ig(n)));const r=n.data;U2(r)&&r[_2]==="1"&&await H2(t,n.messageType,r)}const Tg="@firebase/messaging",Ng="0.12.12";/**
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
 */const q2=t=>{const e=new z2(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>G2(e,n)),e},Q2=t=>{const e=t.getProvider("messaging").getImmediate();return{getToken:r=>dE(e,r)}};function Y2(){Nt(new gt("messaging",q2,"PUBLIC")),Nt(new gt("messaging-internal",Q2,"PRIVATE")),Ze(Tg,Ng),Ze(Tg,Ng,"esm2017")}/**
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
 */async function X2(){try{await N_()}catch{return!1}return typeof window<"u"&&T_()&&y1()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */function J2(t,e){if(!navigator)throw je.create("only-available-in-window");return t.onMessageHandler=e,()=>{t.onMessageHandler=null}}/**
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
 */function Z2(t=Ul()){return X2().then(e=>{if(!e)throw je.create("unsupported-browser")},e=>{throw je.create("indexed-db-unsupported")}),Mr(ee(t),"messaging").getImmediate()}async function eD(t,e){return t=ee(t),dE(t,e)}function tD(t,e){return t=ee(t),J2(t,e)}Y2();const nD={apiKey:"AIzaSyD9-_GYLQabcC3SPMTOG9zj2CcaPqzfOrI",authDomain:"lalaland-24931.firebaseapp.com",databaseURL:"https://lalaland-24931-default-rtdb.firebaseio.com",projectId:"lalaland-24931",storageBucket:"lalaland-24931.firebasestorage.app",messagingSenderId:"45134876312",appId:"1:45134876312:web:9e33e46c54cb7c9bfc8aed",measurementId:"G-M04NRCY9FQ"},sc=A_(nD),hl=QN(sc),Y=cA(sc),rD=CO(sc);let At=null;try{typeof window<"u"&&"serviceWorker"in navigator&&(At=Z2(sc))}catch(t){console.log("FCM 不支援或初始化失敗:",t)}class iD{constructor(){this.isSupported="Notification"in window}get hasPermission(){return this.isSupported&&Notification.permission==="granted"}async requestPermission(){if(!this.isSupported)return console.warn("🔔 此瀏覽器不支援桌面通知"),!1;try{return await Notification.requestPermission()==="granted"}catch(e){return console.error("🚨 請求通知權限時出錯:",e),!1}}showNotification(e,n="",r=null){if(!this.hasPermission)return window.showNotification&&window.showNotification(`${e}: ${n}`,"info"),null;const i={body:n,icon:"/icon-512.png",tag:"lalaland-message",requireInteraction:!1,silent:!1};try{const s=new Notification(e,i);return s.onclick=()=>{window.focus(),r&&r(),s.close()},setTimeout(()=>{s.close()},5e3),s}catch(s){return console.error("🚨 顯示通知時出錯:",s),window.showNotification&&window.showNotification(`${e}: ${n}`,"info"),null}}showMessageNotification(e,n,r="private"){const i=r==="private"?`💬 ${e} 發送了私訊`:`🏠 ${e} 發送了訊息`,s=n.length>50?n.substring(0,50)+"...":n;return this.showNotification(i,s,()=>{window.focus()})}playNotificationSound(){if(localStorage.getItem("notificationSound")!=="false")try{const n=new(window.AudioContext||window.webkitAudioContext),r=n.createOscillator(),i=n.createGain();r.connect(i),i.connect(n.destination),r.frequency.value=800,r.type="sine",i.gain.setValueAtTime(.1,n.currentTime),i.gain.exponentialRampToValueAtTime(.01,n.currentTime+.3),r.start(),r.stop(n.currentTime+.3)}catch(n){console.log("🔇 無法播放通知音效:",n)}}}const Is=new iD,Yo="BPkxFDyty7orkmlIPl7B8xl1A8rY1rQuqDWM03HdXOj1fvVWrXHc3mJX99iQl7GGHIk1Nj7rZK3bhCu0os7h8Mw";class sD{constructor(){this.fcmToken=null,this.isSupported=this.checkFCMSupport(),this.isInitialized=!1}checkFCMSupport(){return!!(At&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window)}async initialize(){if(!this.isSupported)return console.warn("🚫 FCM 不支援此瀏覽器"),!1;try{return await this.registerServiceWorker(),this.setupForegroundListener(),this.isInitialized=!0,console.log("✅ FCM 初始化成功"),!0}catch(e){return console.error("❌ FCM 初始化失敗:",e),!1}}async registerServiceWorker(){if("serviceWorker"in navigator)try{const e=await navigator.serviceWorker.register("/firebase-messaging-sw.js");return console.log("✅ FCM Service Worker 註冊成功:",e),e}catch(e){throw console.error("❌ FCM Service Worker 註冊失敗:",e),e}}async diagnoseEnvironment(){const e={https:location.protocol==="https:"||location.hostname==="localhost",serviceWorker:"serviceWorker"in navigator,pushManager:"PushManager"in window,notification:"Notification"in window,messaging:!!At,permission:Notification.permission,userAgent:navigator.userAgent,url:window.location.href,vapidKey:`${Yo.substring(0,10)}...`,platform:navigator.platform,language:navigator.language,cookieEnabled:navigator.cookieEnabled,onLine:navigator.onLine};if("serviceWorker"in navigator)try{const n=await navigator.serviceWorker.getRegistration();e.swRegistered=!!n,e.swActive=!!(n&&n.active)}catch(n){e.swError=n.message}return Notification.permission==="denied"?e.permissionAdvice="通知權限被永久拒絕，需要手動在瀏覽器設定中重新啟用":Notification.permission==="default"?e.permissionAdvice="尚未請求通知權限":Notification.permission==="granted"&&(e.permissionAdvice="通知權限已獲得"),console.log("🔍 FCM 環境診斷:",e),e}async requestPermission(e=null){const n=await this.diagnoseEnvironment();if(!this.isSupported){const r=[];throw n.serviceWorker||r.push("Service Worker"),n.pushManager||r.push("Push Manager"),n.notification||r.push("Notification API"),n.messaging||r.push("Firebase Messaging"),console.error("🚫 FCM 不支援，缺少功能:",r.join(", ")),new Error(`瀏覽器不支援推播通知，缺少: ${r.join(", ")}`)}if(!this.isInitialized&&(console.warn("🚫 FCM 未初始化，嘗試重新初始化..."),!await this.initialize()))throw new Error("FCM 初始化失敗");if(!n.https)throw new Error("推播通知需要 HTTPS 環境或 localhost");try{if(console.log("📋 當前通知權限狀態:",Notification.permission),Notification.permission==="denied")throw new Error("通知權限已被拒絕。請在瀏覽器設定中重新允許通知權限。");console.log("🔔 請求通知權限...");const r=await Notification.requestPermission();if(console.log("📋 權限請求結果:",r),r!=="granted")throw r==="denied"?new Error("通知權限被拒絕。請檢查瀏覽器設定並重新允許通知。"):new Error("通知權限未獲得授予。");console.log("🎫 取得 FCM Token...");try{const i=await eD(At,{vapidKey:Yo});return i?(console.log("✅ FCM Token 取得成功:",i.substring(0,30)+"..."),this.fcmToken=i,e&&await this.saveFCMToken(e,i),i):(console.warn("⚠️ 無法取得 FCM Token - 可能是瀏覽器不支援或配置問題"),null)}catch(i){throw console.warn("⚠️ FCM Token 取得失敗:",i.message),i.code==="messaging/token-subscribe-failed"?new Error("FCM 服務訂閱失敗，請檢查網路連線和 VAPID 金鑰設定"):i.code==="messaging/invalid-vapid-key"?new Error("VAPID 金鑰無效，請檢查 Firebase 專案設定"):i.code==="messaging/registration-token-not-registered"?new Error("註冊 Token 無效，請清除瀏覽器資料後重試"):new Error(`FCM Token 取得失敗: ${i.message}`)}}catch(r){throw console.error("❌ FCM 權限請求流程失敗:",r.message),r}}async requestPermissionSilently(e=null){try{return await this.requestPermission(e)}catch(n){return console.log("ℹ️ 靜默權限請求結果:",n.message),null}}async saveFCMToken(e,n){try{const r=Q(Y,`fcmTokens/${e}`);await So(r,{token:n,timestamp:Date.now(),userAgent:navigator.userAgent}),console.log("✅ FCM Token 已儲存到資料庫")}catch(r){console.error("❌ 儲存 FCM Token 失敗:",r)}}setupForegroundListener(){At&&tD(At,e=>{console.log("🔔 FCM 前景訊息:",e);const{title:n,body:r}=e.notification||{};window.showNotification&&window.showNotification(n?`${n}: ${r}`:r||"新訊息","info",6e3),this.playNotificationSound(),(document.hidden||document.visibilityState==="hidden")&&this.showDesktopNotification(n||"新訊息",r||"您有新的訊息")})}showDesktopNotification(e,n){if(Notification.permission==="granted"){const r=new Notification(e,{body:n,icon:"/icon-512.png",badge:"/icon-512.png",tag:"lalaland-fcm"});r.onclick=()=>{window.focus(),r.close()},setTimeout(()=>{r.close()},5e3)}}playNotificationSound(){if(localStorage.getItem("notificationSound")!=="false")try{const n=new(window.AudioContext||window.webkitAudioContext),r=n.createOscillator(),i=n.createGain();r.connect(i),i.connect(n.destination),r.frequency.value=800,r.type="sine",i.gain.setValueAtTime(.1,n.currentTime),i.gain.exponentialRampToValueAtTime(.01,n.currentTime+.3),r.start(),r.stop(n.currentTime+.3)}catch(n){console.log("🔇 無法播放通知音效:",n)}}getCurrentToken(){return this.fcmToken}isEnabled(){return!!(this.fcmToken&&Notification.permission==="granted")}async validateVAPIDKey(){console.log("🔍 驗證 VAPID 金鑰設定...");const e={vapidKey:Yo,projectId:"lalaland-24931",messagingSenderId:"45134876312",publicKey:"BPkxFDyty7orkmlIPl7B8xl1A8rY1rQuqDWM03HdXOj1fvVWrXHc3mJX99iQl7GGHIk1Nj7rZK3bhCu0os7h8Mw"};if(console.log("📋 預期的 VAPID 設定:",e),At&&At.app){const n=At.app.options;if(console.log("🔧 Firebase 專案設定:",{projectId:n.projectId,messagingSenderId:n.messagingSenderId,authDomain:n.authDomain}),n.projectId!==e.projectId)return console.error("❌ Firebase Project ID 不匹配!"),console.log("   預期:",e.projectId),console.log("   實際:",n.projectId),!1;if(n.messagingSenderId!==e.messagingSenderId)return console.error("❌ Messaging Sender ID 不匹配!"),console.log("   預期:",e.messagingSenderId),console.log("   實際:",n.messagingSenderId),!1}return Yo.length<40?(console.error("❌ VAPID 金鑰格式無效"),!1):(console.log("✅ VAPID 金鑰設定驗證通過"),!0)}async disable(){try{At&&this.fcmToken&&console.log("🔕 FCM 已停用"),this.fcmToken=null}catch(e){console.error("❌ 停用 FCM 失敗:",e)}}}const ri=new sD,oD=async()=>{console.log("🔍 開始偵錯 Firebase 資料庫...");try{console.log("📡 檢查群組聊天資料...");const t=Q(Y,"groupChats"),e=await Bt(t);if(e.exists()){const o=e.val();console.log("✅ 群組聊天資料:",o),Object.keys(o).forEach(a=>{var l;if((l=o[a])!=null&&l.messages){const c=Object.keys(o[a].messages).length;console.log(`📝 房間 ${a} 有 ${c} 條訊息`)}else console.log(`📝 房間 ${a} 沒有訊息`)})}else console.log("❌ 沒有找到群組聊天資料");console.log("👥 檢查用戶資料...");const n=Q(Y,"users"),r=await Bt(n);if(r.exists()){const o=r.val();console.log("✅ 用戶資料:",o),Object.keys(o).forEach(a=>{var l,c;if((l=o[a])!=null&&l.friends){const u=Object.keys(o[a].friends).length;console.log(`👨‍👩‍👧‍👦 用戶 ${a} (${o[a].nickname||"匿名"}) 有 ${u} 個好友`)}else console.log(`👨‍👩‍👧‍👦 用戶 ${a} (${((c=o[a])==null?void 0:c.nickname)||"匿名"}) 沒有好友`)})}else console.log("❌ 沒有找到用戶資料");console.log("💬 檢查私人聊天資料...");const i=Q(Y,"privateChats"),s=await Bt(i);if(s.exists()){const o=s.val();console.log("✅ 私人聊天資料:",o),Object.keys(o).forEach(a=>{var l;if((l=o[a])!=null&&l.messages){const c=Object.keys(o[a].messages).length;console.log(`💌 私聊 ${a} 有 ${c} 條訊息`)}})}else console.log("❌ 沒有找到私人聊天資料")}catch(t){console.error("🚨 Firebase 偵錯失敗:",t),console.error("錯誤詳情:",t.message),t.code==="PERMISSION_DENIED"&&(console.error("❌ 權限被拒絕 - 需要更新 Firebase 安全規則!"),console.log("📋 請參考 FIREBASE_SETUP.md 文件更新規則"))}},aD=async t=>{console.log(`🔍 偵錯房間 ${t} 的訊息...`);try{const e=Q(Y,`groupChats/${t}/messages`),n=await Bt(e);if(n.exists()){const r=n.val();return console.log(`✅ 房間 ${t} 找到 ${Object.keys(r).length} 條訊息:`,r),r}else return console.log(`❌ 房間 ${t} 沒有訊息`),null}catch(e){return console.error(`🚨 無法讀取房間 ${t} 的訊息:`,e),null}};/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lD=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),hE=(...t)=>t.filter((e,n,r)=>!!e&&r.indexOf(e)===n).join(" ");/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var cD={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uD=k.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:o,...a},l)=>k.createElement("svg",{ref:l,...cD,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:hE("lucide",i),...a},[...o.map(([c,u])=>k.createElement(c,u)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G=(t,e)=>{const n=k.forwardRef(({className:r,...i},s)=>k.createElement(uD,{ref:s,iconNode:e,className:hE(`lucide-${lD(t)}`,r),...i}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fE=G("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dD=G("BarChart3",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hD=G("BellOff",[["path",{d:"M8.7 3A6 6 0 0 1 18 8a21.3 21.3 0 0 0 .6 5",key:"o7mx20"}],["path",{d:"M17 17H3s3-2 3-9a4.67 4.67 0 0 1 .3-1.7",key:"16f1lm"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fD=G("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pD=G("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mD=G("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gD=G("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mf=G("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yD=G("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pd=G("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vD=G("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _D=G("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wD=G("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pr=G("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pE=G("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ED=G("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kD=G("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mE=G("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SD=G("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bg=G("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xD=G("Smile",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gE=G("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CD=G("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ID=G("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yE=G("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TD=G("Volume2",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ND=G("VolumeX",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pi=G("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),bD=()=>{const t=e_(),e=[{icon:h.jsx(Pr,{className:"w-8 h-8"}),title:"即時聊天",description:"與志同道合的朋友即時對話交流"},{icon:h.jsx(Mf,{className:"w-8 h-8"}),title:"安全友善",description:"專為女性LGBTQ+社群設計的安全空間"},{icon:h.jsx(yE,{className:"w-8 h-8"}),title:"多元社群",description:"閒聊、找伴、交友，滿足不同需求"},{icon:h.jsx(Pd,{className:"w-8 h-8"}),title:"隱私保護",description:"匿名模式與隱私設定保護你的安全"}];return h.jsxs("div",{className:"min-h-screen flex flex-col",children:[h.jsx("header",{className:"bg-white/70 backdrop-blur-sm border-b border-gray-200",children:h.jsxs("div",{className:"max-w-6xl mx-auto px-4 py-4 flex justify-between items-center",children:[h.jsxs("div",{className:"flex items-center gap-3",children:[h.jsx("img",{src:"/icon-512.png",alt:"LalaLand",className:"w-10 h-10 rounded-lg"}),h.jsx("h1",{className:"text-2xl font-bold text-sea-dark",children:"LalaLand"})]}),h.jsx("button",{onClick:()=>t("/login"),className:"btn-primary",children:"登入 / 註冊"})]})}),h.jsx("main",{className:"flex-1 flex flex-col items-center justify-center px-4 py-12",children:h.jsxs("div",{className:"text-center max-w-4xl mx-auto",children:[h.jsx("img",{src:"/icon-512.png",alt:"LalaLand Logo",className:"w-32 h-32 mx-auto mb-8 animate-float"}),h.jsxs("h2",{className:"text-4xl md:text-5xl font-bold text-gray-800 mb-6",children:["歡迎來到",h.jsx("span",{className:"text-sea-blue",children:" LalaLand"})]}),h.jsxs("p",{className:"text-xl text-gray-600 mb-8 leading-relaxed",children:["專為女同志設計的安全聊天平台",h.jsx("br",{}),"在這裡，你可以安心做自己，與志同道合的朋友建立真摯連結"]}),h.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center mb-16",children:[h.jsx("button",{onClick:()=>t("/login"),className:"btn-primary text-lg px-8 py-4",children:"開始聊天"}),h.jsx("button",{onClick:()=>t("/login"),className:"btn-secondary text-lg px-8 py-4",children:"匿名體驗"})]}),h.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-4 gap-8",children:e.map((n,r)=>h.jsxs("div",{className:"card text-center hover:shadow-medium transition-shadow",children:[h.jsx("div",{className:"text-sea-blue mb-4 flex justify-center",children:n.icon}),h.jsx("h3",{className:"font-semibold text-lg mb-2",children:n.title}),h.jsx("p",{className:"text-gray-600 text-sm",children:n.description})]},r))})]})}),h.jsx("footer",{className:"bg-white/70 backdrop-blur-sm border-t border-gray-200 py-8",children:h.jsx("div",{className:"max-w-6xl mx-auto px-4 text-center text-gray-500",children:h.jsx("p",{children:"© 2025 LalaLand. 致力於為女性LGBTQ+社群提供安全友善的交流空間"})})})]})},Rg=()=>{const t=e_(),[e,n]=k.useState("login"),[r,i]=k.useState(!1),[s,o]=k.useState(!1),[a,l]=k.useState({email:"",password:"",confirmPassword:"",nickname:""}),c=f=>{l(m=>({...m,[f.target.name]:f.target.value}))},u=async f=>{f.preventDefault(),o(!0);try{await AT(hl,a.email,a.password),J.success("登入成功！"),t("/chat")}catch(m){J.error("登入失敗："+(m.message||"請檢查帳號密碼"))}finally{o(!1)}},d=async f=>{if(f.preventDefault(),o(!0),a.password!==a.confirmPassword){J.error("密碼確認不一致"),o(!1);return}if(a.password.length<6){J.error("密碼至少需要6個字元"),o(!1);return}try{const m=await PT(hl,a.email,a.password);await DT(m.user,{displayName:a.nickname||"新用戶"}),await set(ref(database,`users/${m.user.uid}`),{nickname:a.nickname||"新用戶",email:a.email,avatar:null,joinedAt:Date.now(),isOnline:!0}),J.success("註冊成功！歡迎加入 LalaLand！"),t("/chat")}catch(m){J.error("註冊失敗："+(m.message||"請稍後再試"))}finally{o(!1)}};return h.jsx("div",{className:"min-h-screen flex items-center justify-center px-4 py-8",children:h.jsxs("div",{className:"w-full max-w-md",children:[h.jsxs("button",{onClick:()=>t("/"),className:"flex items-center gap-2 text-gray-600 hover:text-sea-blue mb-6 transition-colors",children:[h.jsx(fE,{className:"w-4 h-4"}),"返回首頁"]}),h.jsxs("div",{className:"card",children:[h.jsxs("div",{className:"text-center mb-8",children:[h.jsx("img",{src:"/icon-512.png",alt:"LalaLand",className:"w-16 h-16 mx-auto mb-4"}),h.jsxs("h2",{className:"text-2xl font-bold text-gray-900 mb-2 text-center",children:[e==="login"&&"歡迎回來",e==="register"&&"建立帳號"]})]}),h.jsxs("div",{className:"flex bg-gray-100 rounded-lg p-1 mb-6",children:[h.jsx("button",{className:`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${e==="login"?"bg-white text-sea-blue shadow-sm":"text-gray-600 hover:text-gray-800"}`,onClick:()=>n("login"),children:"登入"}),h.jsx("button",{className:`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${e==="register"?"bg-white text-sea-blue shadow-sm":"text-gray-600 hover:text-gray-800"}`,onClick:()=>n("register"),children:"註冊"})]}),h.jsxs("form",{onSubmit:e==="login"?u:d,children:[e==="register"&&h.jsxs("div",{className:"mb-4",children:[h.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"暱稱"}),h.jsxs("div",{className:"relative",children:[h.jsx(ID,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"}),h.jsx("input",{type:"text",name:"nickname",value:a.nickname,onChange:c,className:"input-field pl-10",placeholder:"輸入你的暱稱",required:!0})]})]}),h.jsxs("div",{className:"mb-4",children:[h.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"電子郵件"}),h.jsxs("div",{className:"relative",children:[h.jsx(_D,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"}),h.jsx("input",{type:"email",name:"email",value:a.email,onChange:c,className:"input-field pl-10",placeholder:"輸入你的電子郵件",required:!0})]})]}),h.jsxs("div",{className:"mb-4",children:[h.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"密碼"}),h.jsxs("div",{className:"relative",children:[h.jsx(Pd,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"}),h.jsx("input",{type:r?"text":"password",name:"password",value:a.password,onChange:c,className:"input-field pl-10 pr-10",placeholder:"輸入密碼",required:!0}),h.jsx("button",{type:"button",onClick:()=>i(!r),className:"absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600",children:r?h.jsx(mD,{className:"w-5 h-5"}):h.jsx(gD,{className:"w-5 h-5"})})]})]}),e==="register"&&h.jsxs("div",{className:"mb-6",children:[h.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"確認密碼"}),h.jsxs("div",{className:"relative",children:[h.jsx(Pd,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"}),h.jsx("input",{type:r?"text":"password",name:"confirmPassword",value:a.confirmPassword,onChange:c,className:"input-field pl-10",placeholder:"再次輸入密碼",required:!0})]})]}),h.jsx("button",{type:"submit",disabled:s,className:"btn-primary w-full text-center disabled:opacity-50 disabled:cursor-not-allowed",children:s?"處理中...":e==="login"?"登入":"註冊"})]})]})]})})},Ht=g_((t,e)=>({currentRoom:"chat",currentPrivateChat:null,messages:[],onlineUsers:{},friends:[],privateChatsList:[],sidebarOpen:!1,darkMode:localStorage.getItem("darkMode")==="yes",setCurrentRoom:n=>t({currentRoom:n}),setCurrentPrivateChat:n=>t({currentPrivateChat:n}),setMessages:n=>t({messages:n}),addMessage:n=>t(r=>({messages:[...r.messages,n]})),setOnlineUsers:n=>t({onlineUsers:n}),setFriends:n=>t({friends:n}),setPrivateChatsList:n=>t({privateChatsList:n}),setSidebarOpen:n=>t({sidebarOpen:n}),toggleDarkMode:()=>{const n=!e().darkMode;localStorage.setItem("darkMode",n?"yes":"no"),t({darkMode:n}),n?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},clearMessages:()=>t({messages:[]})})),RD=async t=>{if(t!=null&&t.uid)try{console.log("正在為用戶創建範例資料:",t.nickname);const e=Q(Y,`users/${t.uid}`),n={nickname:t.nickname||"匿名用戶",avatar:t.avatar||null,email:t.email||null,isAnonymous:t.isAnonymous||!1,lastSeen:Date.now(),isOnline:!0,joinedAt:Date.now()};await So(e,n),console.log("✅ 用戶資料已更新")}catch(e){console.error("❌ 創建範例資料失敗:",e)}},PD=({isOpen:t,onClose:e})=>{const{user:n,setUser:r}=et(),[i,s]=k.useState((n==null?void 0:n.nickname)||""),[o,a]=k.useState((n==null?void 0:n.avatar)||""),[l,c]=k.useState(i),[u,d]=k.useState(localStorage.getItem("notificationSound")!=="false"),[f,m]=k.useState(localStorage.getItem("desktopNotification")!=="false"),[y,_]=k.useState(!1);if(k.useEffect(()=>{t&&_(ri.isEnabled())},[t]),k.useEffect(()=>{t&&(c((n==null?void 0:n.nickname)||""),a((n==null?void 0:n.avatar)||""))},[t,n]),!t)return null;const w=async()=>{try{const S={...n,nickname:l||"匿名用戶",avatar:o};r(S),console.log("💾 保存設定:",{nickname:l,avatar:o,notifications:notificationsEnabled}),e()}catch(S){console.error("保存設定失敗:",S)}},v=()=>{const S=!u;d(S),localStorage.setItem("notificationSound",S.toString()),J.success(S?"🔊 提示音已開啟":"🔇 提示音已關閉")},p=async()=>{try{if(f)m(!1),localStorage.setItem("desktopNotification","false"),J.success("🔕 桌面通知已關閉");else{if(!("Notification"in window)){J.error("❌ 此瀏覽器不支援通知");return}if(await Notification.requestPermission()!=="granted"){J.error("❌ 通知權限被拒絕");return}m(!0),localStorage.setItem("desktopNotification","true"),J.success("🔔 桌面通知已啟用"),window.showNotification&&window.showNotification("桌面通知已啟用！","success")}}catch(S){console.error("切換桌面通知設定失敗:",S),J.error("❌ 桌面通知設定失敗")}},g=async()=>{try{y?(await ri.disable(),_(!1),J.success("🔕 推播通知已關閉")):(console.log("🚀 開始啟用 FCM 推播通知..."),await ri.requestPermission(n==null?void 0:n.uid)?(_(!0),J.success("🚀 推播通知已啟用！",{duration:5e3}),window.showNotification&&window.showNotification("🚀 FCM 推播通知已啟用！現在即使關閉瀏覽器也能收到通知。","success",8e3)):J.error("❌ 推播通知 Token 獲取失敗"))}catch(S){console.error("FCM 推播設定失敗:",S);let T="❌ 推播通知設定失敗";S.message.includes("權限")?(T=`❌ ${S.message}`,window.showNotification&&window.showNotification("💡 如需重新啟用推播：請點擊網址列左側的鎖頭圖示 → 通知 → 允許","warning",1e4)):S.message.includes("HTTPS")?T="❌ 推播通知需要 HTTPS 環境":S.message.includes("不支援")?T=`❌ ${S.message}`:T=`❌ 推播通知設定失敗：${S.message}`,J.error(T,{duration:6e3})}},E=()=>{const S=`
🔧 重設推播通知權限步驟：

1. 點擊瀏覽器網址列左側的鎖頭/資訊圖示
2. 找到「通知」設定
3. 選擇「允許」或「詢問」
4. 重新整理頁面
5. 再次嘗試啟用推播通知

或者：
- Chrome: 設定 → 隱私權和安全性 → 網站設定 → 通知
- Firefox: 設定 → 隱私權與安全性 → 權限 → 通知
- Safari: 偏好設定 → 網站 → 通知
    `.trim();window.showNotification?window.showNotification(S,"info",15e3):alert(S)},C=()=>{const S=`https://ui-avatars.com/api/?name=${encodeURIComponent(l||"匿名")}&background=56c596&color=fff&size=128`;a(S)};return h.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4",children:h.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto",children:[h.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700",children:[h.jsx("h2",{className:"text-xl font-semibold text-gray-900 dark:text-white",children:"設定"}),h.jsx("button",{onClick:e,className:"p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors",children:h.jsx(Pi,{className:"w-5 h-5 text-gray-500"})})]}),h.jsxs("div",{className:"p-6 space-y-6",children:[h.jsxs("div",{children:[h.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white mb-4",children:"個人資料"}),h.jsxs("div",{className:"flex items-center gap-4 mb-4",children:[h.jsx("img",{src:o||`https://ui-avatars.com/api/?name=${encodeURIComponent(l||"匿名")}&background=56c596&color=fff&size=64`,alt:"頭像",className:"w-16 h-16 rounded-full"}),h.jsxs("div",{children:[h.jsxs("button",{onClick:C,className:"flex items-center gap-2 px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors",children:[h.jsx(pD,{className:"w-4 h-4"}),"更換頭像"]}),h.jsx("p",{className:"text-xs text-gray-500 mt-1",children:"點擊生成新的頭像"})]})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",children:"暱稱"}),h.jsx("input",{type:"text",value:l,onChange:S=>c(S.target.value),className:"w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white",placeholder:"輸入你的暱稱",maxLength:20})]})]}),h.jsxs("div",{children:[h.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white mb-4",children:"通知設定"}),h.jsxs("div",{className:"flex items-center justify-between mb-4",children:[h.jsxs("div",{className:"flex items-center gap-3",children:[u?h.jsx(TD,{className:"w-5 h-5 text-green-500"}):h.jsx(ND,{className:"w-5 h-5 text-gray-400"}),h.jsxs("div",{children:[h.jsx("p",{className:"font-medium text-gray-900 dark:text-white",children:"提示音"}),h.jsx("p",{className:"text-sm text-gray-500",children:"收到新訊息時播放提示音"})]})]}),h.jsx("button",{onClick:v,className:`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${u?"bg-blue-500":"bg-gray-300"}`,children:h.jsx("span",{className:`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${u?"translate-x-6":"translate-x-1"}`})})]}),h.jsxs("div",{className:"flex items-center justify-between",children:[h.jsxs("div",{className:"flex items-center gap-3",children:[f?h.jsx(fD,{className:"w-5 h-5 text-green-500"}):h.jsx(hD,{className:"w-5 h-5 text-gray-400"}),h.jsxs("div",{children:[h.jsx("p",{className:"font-medium text-gray-900 dark:text-white",children:"桌面通知"}),h.jsx("p",{className:"text-sm text-gray-500",children:"在瀏覽器中顯示通知泡泡"})]})]}),h.jsx("button",{onClick:p,className:`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${f?"bg-blue-500":"bg-gray-300"}`,children:h.jsx("span",{className:`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${f?"translate-x-6":"translate-x-1"}`})})]}),h.jsxs("div",{className:"mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg",children:[h.jsxs("div",{className:"flex items-center justify-between mb-3",children:[h.jsxs("div",{className:"flex items-center gap-3",children:[y?h.jsx(bg,{className:"w-5 h-5 text-blue-500"}):h.jsx(bg,{className:"w-5 h-5 text-gray-400"}),h.jsxs("div",{children:[h.jsx("p",{className:"font-medium text-gray-900 dark:text-white",children:"推播通知 (FCM)"}),h.jsx("p",{className:"text-sm text-gray-500",children:"即使關閉瀏覽器也能收到通知"})]})]}),h.jsx("button",{onClick:g,className:`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${y?"bg-blue-500":"bg-gray-300"}`,children:h.jsx("span",{className:`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${y?"translate-x-6":"translate-x-1"}`})})]}),h.jsxs("div",{className:"flex gap-2 text-xs",children:[h.jsx("button",{onClick:E,className:"px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors",children:"📖 權限指引"}),h.jsx("button",{onClick:async()=>{const S=await ri.diagnoseEnvironment(),T=`
🔍 推播通知環境檢查：

✅ HTTPS: ${S.https?"是":"❌ 否"}
✅ Service Worker: ${S.serviceWorker?"支援":"❌ 不支援"}
✅ 推播管理: ${S.pushManager?"支援":"❌ 不支援"}  
✅ 通知 API: ${S.notification?"支援":"❌ 不支援"}
✅ Firebase Messaging: ${S.messaging?"已載入":"❌ 未載入"}
📋 權限狀態: ${S.permission}
🌐 瀏覽器: ${S.userAgent.includes("Chrome")?"Chrome":S.userAgent.includes("Firefox")?"Firefox":S.userAgent.includes("Safari")?"Safari":"其他"}
                    `.trim();window.showNotification?window.showNotification(T,"info",1e4):alert(T)},className:"px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors",children:"🔍 環境檢查"})]})]})]}),h.jsxs("div",{children:[h.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white mb-4",children:"其他"}),h.jsxs("div",{className:"space-y-2 text-sm text-gray-600 dark:text-gray-400",children:[h.jsx("p",{children:"• 版本: 1.0.0"}),h.jsx("p",{children:"• React 聊天室"}),h.jsx("p",{children:"• 支援即時通訊和檔案分享"})]})]})]}),h.jsxs("div",{className:"flex gap-3 p-6 border-t border-gray-200 dark:border-gray-700",children:[h.jsx("button",{onClick:e,className:"flex-1 px-4 py-2 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors",children:"取消"}),h.jsx("button",{onClick:w,className:"flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors",children:"保存"})]})]})})},fl=async()=>{console.log("🧹 開始清理過期的在線用戶...");try{const t=Q(Y,"users"),e=await Bt(t);if(!e.exists()){console.log("📭 沒有找到任何用戶資料");return}const n=e.val(),r=Date.now(),i=5*60*1e3;let s=0;for(const[o,a]of Object.entries(n)){if(!a)continue;const l=!a.lastSeen||r-a.lastSeen>i;a.isOnline&&l&&(console.log(`🗑️ 清理過期用戶: ${o} (${a.nickname||"未知"})`),a.isAnonymous?(await kf(Q(Y,`users/${o}`)),console.log(`✅ 已刪除匿名用戶: ${o}`)):(await Td(Q(Y,`users/${o}`),{isOnline:!1,lastSeen:r}),console.log(`✅ 已將註冊用戶設為離線: ${o}`)),s++)}return console.log(`🎉 清理完成！共清理了 ${s} 個過期用戶`),s}catch(t){throw console.error("❌ 清理過期用戶失敗:",t),t}},AD=()=>{console.log("⏰ 啟動定期清理服務..."),fl();const t=setInterval(fl,5*60*1e3);return()=>{console.log("🛑 停止定期清理服務"),clearInterval(t)}},Lf=()=>{const{user:t}=et(),[e,n]=k.useState({}),[r,i]=k.useState(0);return k.useEffect(()=>{if(!(t!=null&&t.uid)){n({}),i(0);return}const a=Q(Y,`userUnreadCounts/${t.uid}`);return xo(a,l=>{if(!l.exists()){n({}),i(0);return}const c=l.val(),u={};let d=0;Object.entries(c).forEach(([f,m])=>{const y=parseInt(m)||0;u[f]=y,d+=y}),console.log("📊 未讀訊息更新:",{counts:u,total:d}),n(u),i(d)}),()=>{tA(a)}},[t==null?void 0:t.uid]),{unreadCounts:e,totalUnread:r,markAsRead:async a=>{if(!(!(t!=null&&t.uid)||!a))try{console.log(`🔄 標記與 ${a} 的對話為已讀`);const l=Q(Y,`userUnreadCounts/${t.uid}/${a}`);await Td(l,{".sv":"delete"});const c=Q(Y,`userLastRead/${t.uid}/${a}`);await Td(c,{timestamp:Date.now()})}catch(l){console.error("標記已讀失敗:",l)}},incrementUnread:async a=>{if(!(!(t!=null&&t.uid)||!a))try{console.log(`📈 增加與 ${a} 的未讀數量`);const l=Q(Y,`userUnreadCounts/${t.uid}/${a}`);await pA(l,c=>{const u=(c||0)+1;return console.log(`  舊數量: ${c}, 新數量: ${u}`),u})}catch(l){console.error("增加未讀數量失敗:",l)}},getUnreadCount:a=>e[a]||0}};function vE({count:t=0,className:e=""}){if(t===0)return null;const n=t>99?"99+":t.toString();return h.jsx("span",{className:`absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold 
                  min-w-[18px] h-[18px] rounded-full flex items-center justify-center 
                  px-1 ${e}`,style:{fontSize:"10px"},children:n})}const OD=()=>{const{user:t}=et(),{currentRoom:e,setCurrentRoom:n,sidebarOpen:r,setSidebarOpen:i,darkMode:s,toggleDarkMode:o,onlineUsers:a}=Ht(),[l,c]=k.useState(!1),{totalUnread:u}=Lf(),d=async()=>{try{if(t&&t.isAnonymous){console.log("🗑️ 匿名用戶登出 - 清理所有資料");const _=Q(Y,`users/${t.uid}`);await kf(_),console.log("✅ 匿名用戶資料已刪除")}await FT(hl),J.success("已登出")}catch(_){console.error("登出失敗:",_),J.error("登出失敗")}},f=async()=>{try{J.loading("正在清理過期用戶...",{id:"cleanup"});const _=await fl();J.success(`已清理 ${_} 個過期用戶`,{id:"cleanup"})}catch{J.error("清理失敗",{id:"cleanup"})}},m=[{id:"chat",name:"閒聊區",icon:Pr,tip:"歡迎隨意聊聊、發問、抒發生活大小事"},{id:"love",name:"找伴區",icon:Mf,tip:"你正在找伴專區，請多用心互動，彼此尊重"},{id:"sex",name:"約炮區",icon:yE,tip:"匿名聊性、約炮自由，但請勿冒犯他人"}],y=`
    ${r?"translate-x-0":"-translate-x-full"}
    md:translate-x-0 fixed md:relative left-0 top-0 h-full w-80 bg-white/80 dark:bg-dark-card/80 
    backdrop-blur-sm border-r border-gray-200 dark:border-gray-700 z-30 transition-transform duration-300
    pt-16 md:pt-0
  `;return h.jsxs(h.Fragment,{children:[r&&h.jsx("div",{className:"md:hidden fixed inset-0 bg-black/50 z-20",onClick:()=>i(!1)}),h.jsx("div",{className:y,children:h.jsxs("div",{className:"flex flex-col h-full",children:[h.jsxs("div",{className:"p-6 border-b border-gray-200 dark:border-gray-700",children:[h.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[h.jsx("img",{src:(t==null?void 0:t.avatar)||`https://ui-avatars.com/api/?name=${t==null?void 0:t.nickname}&background=2877b9&color=fff`,alt:t==null?void 0:t.nickname,className:"w-12 h-12 rounded-full border-2 border-sea-blue"}),h.jsxs("div",{children:[h.jsx("h3",{className:"font-semibold text-gray-800 dark:text-dark-text",children:(t==null?void 0:t.nickname)||"用戶"}),h.jsx("p",{className:"text-sm text-gray-500",children:t!=null&&t.isAnonymous?"匿名用戶":"已註冊用戶"})]})]}),h.jsxs("div",{className:"text-sm text-gray-600 dark:text-gray-400",children:["在線成員: ",Object.keys(a).length," 人"]})]}),h.jsxs("div",{className:"flex-1 overflow-y-auto",children:[h.jsxs("div",{className:"p-4",children:[h.jsx("h4",{className:"text-sm font-medium text-gray-500 dark:text-gray-400 mb-3",children:"聊天室"}),h.jsxs("div",{className:"space-y-1",children:[m.map(_=>h.jsxs("button",{onClick:()=>{n(_.id),i(!1)},className:`sidebar-item w-full ${e===_.id?"active":""}`,children:[h.jsx(_.icon,{className:"w-5 h-5"}),h.jsx("span",{className:"font-medium",children:_.name})]},_.id)),h.jsxs("button",{onClick:()=>{n("private"),i(!1)},className:`sidebar-item w-full ${e==="private"?"active":""} relative`,children:[h.jsx(Pr,{className:"w-5 h-5"}),h.jsx("span",{className:"font-medium",children:"私人訊息"}),h.jsx(vE,{count:u})]})]})]}),h.jsxs("div",{className:"p-4 border-t border-gray-200 dark:border-gray-700",children:[h.jsxs("div",{className:"flex items-center justify-between mb-3",children:[h.jsx("h4",{className:"text-sm font-medium text-gray-500 dark:text-gray-400",children:"在線成員"}),h.jsx("button",{onClick:f,className:"text-xs px-2 py-1 rounded bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-600 dark:text-gray-400",title:"清理過期用戶",children:"🧹"})]}),h.jsx("div",{className:"space-y-2",children:Object.entries(a).map(([_,w])=>h.jsxs("div",{className:"flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700",children:[h.jsx("img",{src:w.avatar||`https://ui-avatars.com/api/?name=${w.nickname}&background=56c596&color=fff`,alt:w.nickname,className:"w-8 h-8 rounded-full"}),h.jsxs("div",{children:[h.jsx("p",{className:"text-sm font-medium text-gray-700 dark:text-gray-300",children:w.nickname}),h.jsxs("div",{className:"flex items-center gap-1",children:[h.jsx("div",{className:"w-2 h-2 bg-accent-green rounded-full"}),h.jsx("span",{className:"text-xs text-gray-500",children:"在線"})]})]})]},_))})]})]}),h.jsx("div",{className:"p-4 border-t border-gray-200 dark:border-gray-700",children:h.jsxs("div",{className:"space-y-1",children:[h.jsxs("button",{onClick:o,className:"sidebar-item w-full",children:[s?h.jsx(gE,{className:"w-5 h-5"}):h.jsx(pE,{className:"w-5 h-5"}),h.jsx("span",{children:s?"淺色模式":"深色模式"})]}),h.jsxs("button",{onClick:()=>c(!0),className:"sidebar-item w-full",children:[h.jsx(SD,{className:"w-5 h-5"}),h.jsx("span",{children:"設定"})]}),h.jsxs("button",{onClick:d,className:"sidebar-item w-full text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20",children:[h.jsx(vD,{className:"w-5 h-5"}),h.jsx("span",{children:"登出"})]})]})})]})}),h.jsx(PD,{isOpen:l,onClose:()=>c(!1)})]})},DD=t=>({casual:"日常閒聊",dating:"約會交友",hookup:"約砲專區",confession:"匿名告白",general:"一般討論",random:"隨機聊天"})[t]||`聊天室 ${t}`,MD=t=>{const{user:e}=et(),{setMessages:n,addMessage:r,clearMessages:i,currentRoom:s}=Ht(),o=k.useRef(0);return k.useEffect(()=>{if(!e||!t){console.log("⚠️ useFirebaseChat: 缺少必要參數",{user:!!e,roomId:t});return}console.log(`🚀 開始監聽房間 ${t} 的訊息...`),i();const l=Q(Y,`groupChats/${t}/messages`),c=xo(l,u=>{try{const d=u.val();if(console.log(`📝 房間 ${t} 收到資料:`,d),d){const f=Object.entries(d).map(([_,w])=>(Math.random()<.1&&console.log(`⏰ 訊息 ${_} 時間戳:`,{timestamp:w.timestamp,time:w.time,rawMessage:w}),{id:_,...w,timestamp:w.timestamp||w.time||Date.now()}));f.sort((_,w)=>{const v=_.timestamp||_.time||0,p=w.timestamp||w.time||0;return v-p});const m=f.length,y=o.current;m>y&&y>0&&f.slice(y).forEach(w=>{const v=w.from||w.userId||w.uid;if(v!==e.uid){const p=s===t,g=w.user||w.nickname||"匿名用戶",E=DD(t);console.log("� 檢查群組通知條件:",{currentRoom:s,roomId:t,isCurrentlyInThisRoom:p,messageFrom:v,senderName:g}),p?console.log(`🔇 不顯示通知 - 用戶正在 ${E} 房間`):(console.log(`�🔔 收到來自 ${g} 的新群組訊息 (非當前房間 ${E}):`,w.text),Is.showMessageNotification(`${g} (${E})`,w.text,"group"),Is.playNotificationSound(),window.showNotification&&window.showNotification(`🏠 ${g} (${E}): ${w.text}`,"info",6e3),Math.random()<.3&&Is.playNotificationSound())}}),o.current=m,console.log(`✅ 房間 ${t} 載入了 ${f.length} 條訊息`),n(f)}else console.log(`📭 房間 ${t} 沒有訊息`),o.current=0,n([])}catch(d){console.error(`❌ 房間 ${t} 載入訊息時出錯:`,d),n([])}},u=>{console.error(`❌ Firebase onValue 錯誤 (房間 ${t}):`,u),u.code==="PERMISSION_DENIED"&&console.error("🚫 權限被拒絕 - 請檢查 Firebase 安全規則!")});return()=>{try{console.log(`🛑 停止監聽房間 ${t} 的訊息`),c()}catch(u){console.error("Firebase unsubscribe error:",u)}}},[e,t,n,i]),{sendMessage:async l=>{if(!e||!t)return;const c=Q(Y,`groupChats/${t}/messages`),u={...l,sender:{uid:e.uid,nickname:e.nickname||"匿名用戶",avatar:e.avatar||null},timestamp:Date.now(),room:t};try{await xw(c,u)}catch(d){throw console.error("發送訊息失敗:",d),d}}}},LD=()=>{const{user:t}=et(),{setOnlineUsers:e}=Ht();k.useEffect(()=>{const n=async()=>{if(!t){console.log("❌ 沒有登入用戶，無法設定在線狀態");return}console.log("👤 開始為用戶設定在線狀態:",t.uid,t.email||"匿名用戶"),await(async()=>{try{const l=Q(Y,`users/${t.uid}`),c=Q(Y,`users/${t.uid}/isOnline`),u=Q(Y,`users/${t.uid}/lastSeen`);console.log("📖 讀取用戶現有資料...");const f=(await Bt(l)).val()||{};console.log("📝 現有用戶資料:",f),console.log("📝 當前登入用戶資料:",{uid:t.uid,email:t.email,nickname:t.nickname||t.displayName,isAnonymous:t.isAnonymous}),await So(l,{...f,isOnline:!0,lastSeen:mg(),email:t.email||f.email||"",nickname:t.nickname||t.displayName||f.nickname||"匿名用戶",uid:t.uid,isAnonymous:t.isAnonymous||!1}),console.log("✅ 用戶在線狀態已設定"),t.isAnonymous?(console.log("🔒 匿名用戶 - 離線時將自動刪除所有資料"),await Zc(l).remove()):(console.log("👤 註冊用戶 - 離線時保留資料但設為離線"),await Zc(c).set(!1),await Zc(u).set(mg()))}catch(l){console.error("❌ 設定在線狀態失敗:",l)}})(),await fl();const s=AD(),o=Q(Y,"users"),a=xo(o,l=>{try{const c=l.val();if(c){const u={},d=Date.now(),f=2*60*1e3;Object.entries(c).forEach(([m,y])=>{y&&y.isOnline&&(y.lastSeen&&d-y.lastSeen<f?(console.log(`👥 發現活躍在線用戶: ${m} - ${y.nickname||y.email||"匿名"}`),u[m]={uid:m,nickname:y.nickname||y.email||"匿名用戶",email:y.email||"",isOnline:y.isOnline,lastSeen:y.lastSeen,isAnonymous:y.isAnonymous||!1}):console.log(`⏰ 用戶 ${m} 標示在線但非活躍狀態，跳過顯示`))}),console.log("📊 所有在線用戶:",Object.keys(u)),e(u)}else console.log("📭 沒有找到任何用戶資料"),e({})}catch(c){console.error("❌ 處理在線用戶資料失敗:",c)}});return()=>{console.log("🧹 清理在線用戶監聽器和定期清理服務"),a(),s()}};let r=null;return n().then(i=>{r=i}),()=>{r&&typeof r=="function"&&r()}},[t==null?void 0:t.uid,e])},jD=async t=>{if(!t)throw new Error("沒有選擇檔案");if(t.size>5*1024*1024)throw new Error("圖片檔案不能超過 5MB");if(!t.type.startsWith("image/"))throw new Error("請選擇圖片檔案");const e=Date.now(),n=Math.random().toString(36).substr(2,9),r=`chatImages/${e}_${n}_${t.name.replace(/[^a-zA-Z0-9.-]/g,"_")}`;try{const i=xO(rD,r),s=await kO(i,t);return await SO(s.ref)}catch(i){throw console.error("上傳圖片失敗:",i),new Error("上傳失敗，請稍後再試")}},FD=t=>new Promise(e=>{const n=new FileReader;n.onload=r=>e(r.target.result),n.readAsDataURL(t)}),_E=({message:t,isOwn:e,onReply:n})=>{const{setCurrentPrivateChat:r,setCurrentRoom:i}=Ht(),{user:s}=et(),[o,a]=k.useState(!1),[l,c]=k.useState(t.liked||!1),u=p=>{p.preventDefault(),p.stopPropagation();const g=d();g.uid!==(s==null?void 0:s.uid)&&(console.log("👆 頭像點擊 - 開始私聊:",g),r({roomId:`private_${g.uid}`,recipientId:g.uid,nickname:g.nickname,avatar:g.avatar,isOnline:!1}),i("private"))},d=()=>t.sender?{nickname:t.sender.nickname||t.sender.displayName||t.sender.name,avatar:t.sender.avatar||t.sender.photoURL,uid:t.sender.uid}:{nickname:t.user||t.senderName||t.nickname||t.userName||"匿名用戶",avatar:t.avatar||t.senderAvatar,uid:t.from||t.senderId||t.userId||t.uid},f=p=>{p.stopPropagation(),c(!l),console.log("💖 按讚訊息:",t.id,!l)},m=p=>{p.stopPropagation();try{if(n&&typeof n=="function"){const g=t.text||t.content||t.message||t.msg||"",E=d();n({id:t.id,text:g,sender:E.nickname}),console.log("💬 回覆訊息:",t.id)}else console.warn("⚠️ onReply 函數未提供或不是函數")}catch(g){console.error("回覆功能錯誤:",g),alert("回覆功能暫時無法使用，請稍後再試")}};if(!t)return null;const y=d();!y.nickname&&!y.uid&&console.warn("訊息缺少發送者信息:",t);const _=p=>{if(!p)return"";const g=/(https?:\/\/[^\s]+)/g;return p.split(g).map((C,S)=>C.match(g)?h.jsx("a",{href:C,target:"_blank",rel:"noopener noreferrer",className:"text-blue-500 hover:text-blue-600 underline break-all",onClick:T=>T.stopPropagation(),children:C},S):C)},w=p=>{const g=p||t.timestamp||t.time;if(!g)return"未知時間";let E;return typeof g=="number"?E=g:typeof g=="string"?E=new Date(g).getTime():g&&typeof g=="object"&&g.seconds?E=g.seconds*1e3+(g.nanoseconds||0)/1e6:E=Date.now(),isNaN(E)?"時間錯誤":new Date(E).toLocaleString("zh-TW",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1})},v=()=>{if(t.type==="vote")return h.jsx(UD,{voteData:t.content});const p=t.text||t.content||t.message||t.msg||"";return h.jsxs("div",{children:[t.image&&h.jsx("img",{src:t.image,alt:"分享的圖片",className:"max-w-sm rounded-lg mb-2 cursor-pointer hover:opacity-90 transition-opacity",onClick:()=>window.open(t.image,"_blank")}),p&&h.jsx("div",{className:"break-words",children:_(p)})]})};return h.jsx("div",{className:`flex ${e?"justify-end":"justify-start"} group`,onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),children:h.jsxs("div",{className:`flex items-start gap-3 max-w-[70%] ${e?"flex-row-reverse":""}`,children:[h.jsx("img",{src:y.avatar||`https://ui-avatars.com/api/?name=${encodeURIComponent(y.nickname||"匿名")}&background=56c596&color=fff`,alt:y.nickname||"匿名用戶",className:`w-8 h-8 rounded-full flex-shrink-0 mt-1 ${y.uid!==(s==null?void 0:s.uid)?"cursor-pointer hover:ring-2 hover:ring-sea-blue/50 transition-all duration-200":""}`,onClick:y.uid!==(s==null?void 0:s.uid)?u:void 0,title:y.uid!==(s==null?void 0:s.uid)?`點擊與 ${y.nickname} 私聊`:""}),h.jsxs("div",{className:`flex flex-col ${e?"items-end":"items-start"}`,children:[h.jsxs("p",{className:"text-xs text-gray-500 mb-1 px-1",children:[y.nickname||"匿名用戶",e&&h.jsx("span",{className:"text-blue-500",children:" (你)"})]}),h.jsxs("div",{className:`
              message-bubble relative
              ${e?"message-self bg-sea-blue dark:bg-green-600 text-white":"message-other bg-white dark:bg-green-700 text-gray-700 dark:text-green-100 border border-gray-200 dark:border-green-600"}
            `,children:[v(),h.jsx("div",{className:`text-xs mt-1 ${e?"text-sea-light dark:text-green-200":"text-gray-400 dark:text-green-300"}`,children:w(t.timestamp||t.time)})]}),o&&h.jsxs("div",{className:`flex items-center gap-1 mt-1 opacity-0 group-hover:opacity-100 transition-opacity ${e?"flex-row-reverse":""}`,children:[h.jsx("button",{className:"p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors",onClick:f,title:"按讚",children:h.jsx(Mf,{className:`w-3 h-3 transition-colors ${l?"text-red-500 fill-red-500":"text-gray-400 hover:text-red-500"}`})}),h.jsx("button",{className:"p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors",onClick:m,title:"回覆",children:h.jsx(Pr,{className:"w-3 h-3 text-gray-400 hover:text-blue-500"})})]})]})]})})},UD=({voteData:t})=>{const[e,n]=k.useState(null),r=(t==null?void 0:t.votes)||[],i=(t==null?void 0:t.options)||[],s=(t==null?void 0:t.question)||"投票問題",o=r.reduce((l,c)=>l+(c||0),0),a=l=>{e===null&&n(l)};return h.jsxs("div",{className:"bg-gray-50 dark:bg-green-900/30 rounded-lg p-4 min-w-[250px]",children:[h.jsxs("h4",{className:"font-medium mb-3 text-gray-800 dark:text-gray-200",children:["📊 ",s]}),h.jsx("div",{className:"space-y-2",children:i.map((l,c)=>{const u=r[c]||0,d=o>0?u/o*100:0,f=e===c;return h.jsxs("button",{onClick:()=>a(c),disabled:e!==null,className:`
                w-full text-left p-3 rounded-lg border transition-colors relative overflow-hidden
                ${f?"border-sea-blue dark:border-green-400 bg-sea-light dark:bg-green-800 text-sea-dark dark:text-green-100":"border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500"}
                ${e!==null?"cursor-default":"cursor-pointer hover:bg-gray-100 dark:hover:bg-green-800/50"}
              `,children:[e!==null&&h.jsx("div",{className:"absolute inset-0 bg-sea-blue/10 dark:bg-green-500/20 transition-all duration-500",style:{width:`${d}%`}}),h.jsxs("div",{className:"relative flex justify-between items-center",children:[h.jsx("span",{children:l}),e!==null&&h.jsxs("span",{className:"text-sm font-medium",children:[u," (",d.toFixed(1),"%)"]})]})]},c)})}),e!==null&&h.jsxs("p",{className:"text-xs text-gray-500 mt-2 text-center",children:["總投票數: ",o]})]})},$D=({onEmojiSelect:t,onClose:e})=>{const n=["😀","😃","😄","😁","😆","😅","😂","🤣","😊","😇","🙂","🙃","😉","😌","😍","🥰","😘","😗","😙","😚","😋","😛","😝","😜","🤪","🤨","🧐","🤓","😎","🤩","🥳","😏","😒","😞","😔","😟","😕","🙁","☹️","😣","😖","😫","😩","🥺","😢","😭","😤","😠","😡","🤬","🤯","😳","🥵","🥶","😱","😨","😰","😥","😓","🤗","🤔","🤭","🤫","🤥","😶","😐","😑","😬","🙄","😯","😦","😧","😮","😲","🥱","😴","🤤","😪","😵","🤐","🥴","🤢","🤮","🤧","😷","🤒","🤕","🤑","🤠","😈","👿","👹","👺","🤡","💩","👻","💀","☠️","👽","👾","🤖","🎃","😺","😸","😹","😻","😼","😽","🙀","😿","😾","❤️","🧡","💛","💚","💙","💜","🖤","🤍","🤎","💔","❣️","💕","💞","💓","💗","💖","💘","💝","💟","☮️","✝️","☪️","🕉️","☸️","✡️","🔯","🕎","☯️","☦️","🛐","⛎","♈","♉","♊","♋","♌","♍","♎","♏","♐","♑"];return h.jsxs("div",{className:"absolute bottom-full left-0 mb-2 bg-white dark:bg-dark-card rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-4 z-50",children:[h.jsx("div",{className:"grid grid-cols-8 gap-2 max-w-xs max-h-40 overflow-y-auto custom-scrollbar",children:n.map((r,i)=>h.jsx("button",{onClick:()=>t(r),className:"text-xl hover:bg-gray-100 dark:hover:bg-gray-700 rounded p-1 transition-colors",children:r},i))}),h.jsx("button",{onClick:e,className:"mt-2 text-xs text-gray-500 hover:text-gray-700 dark:hover:text-gray-300",children:"關閉"})]})},zD=({onSubmit:t,onClose:e})=>{const[n,r]=k.useState(""),[i,s]=k.useState(["",""]),o=()=>{i.length<6&&s([...i,""])},a=(u,d)=>{const f=[...i];f[u]=d,s(f)},l=u=>{if(i.length>2){const d=i.filter((f,m)=>m!==u);s(d)}},c=()=>{const u=i.filter(d=>d.trim());if(!n.trim()){alert("請輸入投票問題");return}if(u.length<2){alert("至少需要兩個選項");return}t({question:n.trim(),options:u,votes:new Array(u.length).fill(0),voters:{}})};return h.jsxs("div",{className:"absolute bottom-full left-0 right-0 mb-2 bg-white dark:bg-dark-card rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-4 z-50",children:[h.jsxs("div",{className:"flex justify-between items-center mb-4",children:[h.jsx("h3",{className:"font-semibold text-gray-800 dark:text-gray-200",children:"建立投票"}),h.jsx("button",{onClick:e,className:"text-gray-500 hover:text-gray-700 dark:hover:text-gray-300",children:h.jsx(Pi,{className:"w-5 h-5"})})]}),h.jsxs("div",{className:"mb-4",children:[h.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",children:"投票問題"}),h.jsx("input",{type:"text",value:n,onChange:u=>r(u.target.value),placeholder:"輸入你的問題...",className:`w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                     focus:ring-2 focus:ring-sea-blue/20 focus:border-sea-blue 
                     bg-white dark:bg-gray-700 dark:text-gray-200 outline-none`})]}),h.jsxs("div",{className:"mb-4",children:[h.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",children:"選項"}),h.jsx("div",{className:"space-y-2",children:i.map((u,d)=>h.jsxs("div",{className:"flex gap-2",children:[h.jsx("input",{type:"text",value:u,onChange:f=>a(d,f.target.value),placeholder:`選項 ${d+1}`,className:`flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                           focus:ring-2 focus:ring-sea-blue/20 focus:border-sea-blue 
                           bg-white dark:bg-gray-700 dark:text-gray-200 outline-none`}),i.length>2&&h.jsx("button",{onClick:()=>l(d),className:`px-3 py-2 text-red-500 hover:text-red-700 hover:bg-red-50 
                             dark:hover:bg-red-900/20 rounded-lg transition-colors`,children:h.jsx(Pi,{className:"w-4 h-4"})})]},d))}),i.length<6&&h.jsxs("button",{onClick:o,className:"mt-2 flex items-center gap-2 text-sm text-sea-blue hover:text-sea-dark transition-colors",children:[h.jsx(ED,{className:"w-4 h-4"}),"新增選項"]})]}),h.jsxs("div",{className:"flex gap-2 justify-end",children:[h.jsx("button",{onClick:e,className:`px-4 py-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 
                     dark:hover:text-gray-200 border border-gray-300 dark:border-gray-600 
                     rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors`,children:"取消"}),h.jsx("button",{onClick:c,className:`px-4 py-2 bg-sea-blue hover:bg-sea-dark text-white rounded-lg 
                     transition-colors font-medium`,children:"建立投票"})]})]})},BD=({roomId:t})=>{var O,Oe;const{user:e}=et(),{messages:n}=Ht(),{sendMessage:r}=MD(t),[i,s]=k.useState(""),[o,a]=k.useState(!1),[l,c]=k.useState(!1),[u,d]=k.useState(null),[f,m]=k.useState(!1),[y,_]=k.useState(null),w=k.useRef(null),v=k.useRef(null);k.useEffect(()=>{const Ne=setTimeout(()=>{if(w.current){const be=w.current.parentElement;be&&(be.scrollTop=be.scrollHeight)}},100);return()=>clearTimeout(Ne)},[n]),LD();const p={chat:{name:"閒聊區",tip:"歡迎隨意聊聊、發問、抒發生活大小事。"},love:{name:"找伴區",tip:"你正在找伴專區，請多用心互動，彼此尊重。"},sex:{name:"約炮區",tip:"匿名聊性、約炮自由，但請勿冒犯他人。"}},g=()=>{var W;(W=w.current)==null||W.scrollIntoView({behavior:"smooth"})};k.useEffect(()=>{g()},[n]);const E=async W=>{var Ne;if(W.preventDefault(),!(!i.trim()&&!u))try{let be=null;u&&((Ne=v.current)!=null&&Ne.files[0])&&(m(!0),be=await jD(v.current.files[0]));const oc={type:"text",content:i.trim(),image:be};await r(oc),s(""),d(null),a(!1),v.current&&(v.current.value=""),J.success("訊息已發送")}catch(be){J.error("發送失敗: "+be.message)}finally{m(!1)}},C=async W=>{const Ne=W.target.files[0];if(Ne)try{const be=await FD(Ne);d(be)}catch{J.error("圖片預覽失敗")}},S=W=>{s(Ne=>Ne+W),a(!1)},T=W=>{_(W),s(`@${W.sender} `)},R=()=>{_(null),s("")},B=n;return h.jsxs("div",{className:"flex flex-col h-screen pt-16 md:pt-0",children:[h.jsxs("div",{className:"bg-white/70 dark:bg-dark-card/70 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 p-4",children:[h.jsx("h2",{className:"text-xl font-semibold text-gray-800 dark:text-dark-text mb-1",children:((O=p[t])==null?void 0:O.name)||"聊天室"}),((Oe=p[t])==null?void 0:Oe.tip)&&h.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:p[t].tip})]}),h.jsxs("div",{className:"flex-1 overflow-y-auto overflow-x-hidden p-4 space-y-4 custom-scrollbar",children:[B.length===0?h.jsx("div",{className:"text-center text-gray-500 mt-8",children:h.jsx("p",{children:"還沒有訊息，開始聊天吧！"})}):B.map((W,Ne)=>{var be;return h.jsx(_E,{message:W,isOwn:((be=W.sender)==null?void 0:be.uid)===(e==null?void 0:e.uid)||W.from===(e==null?void 0:e.uid),onReply:T},W.id)}),h.jsx("div",{ref:w})]}),u&&h.jsx("div",{className:"p-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700",children:h.jsxs("div",{className:"relative inline-block",children:[h.jsx("img",{src:u,alt:"Preview",className:"max-w-xs rounded-lg"}),h.jsx("button",{onClick:()=>d(null),className:"absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600",children:h.jsx(Pi,{className:"w-4 h-4"})})]})}),y&&h.jsx("div",{className:"bg-blue-50 dark:bg-blue-900/20 border-t border-blue-200 dark:border-blue-700 p-3",children:h.jsxs("div",{className:"flex items-center justify-between",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx(Pr,{className:"w-4 h-4 text-blue-500"}),h.jsxs("span",{className:"text-sm text-blue-600 dark:text-blue-400",children:["回覆 ",y.sender]}),h.jsx("span",{className:"text-sm text-gray-500 truncate max-w-xs",children:y.text})]}),h.jsx("button",{onClick:R,className:"p-1 hover:bg-blue-200 dark:hover:bg-blue-800 rounded transition-colors",children:h.jsx(Pi,{className:"w-4 h-4 text-blue-500"})})]})}),h.jsxs("div",{className:"bg-white/70 dark:bg-dark-card/70 backdrop-blur-sm border-t border-gray-200 dark:border-gray-700 p-4",children:[h.jsxs("form",{onSubmit:E,className:"flex items-end gap-2",children:[h.jsxs("div",{className:"flex gap-1",children:[h.jsx("button",{type:"button",onClick:()=>{var W;return(W=v.current)==null?void 0:W.click()},className:"p-2 rounded-lg text-gray-500 hover:text-sea-blue hover:bg-sea-light/50 transition-colors",title:"上傳圖片",children:h.jsx(yD,{className:"w-5 h-5"})}),h.jsx("button",{type:"button",onClick:()=>a(!o),className:"p-2 rounded-lg text-gray-500 hover:text-sea-blue hover:bg-sea-light/50 transition-colors",title:"表情符號",children:h.jsx(xD,{className:"w-5 h-5"})}),h.jsx("button",{type:"button",onClick:()=>c(!l),className:"p-2 rounded-lg text-gray-500 hover:text-sea-blue hover:bg-sea-light/50 transition-colors",title:"建立投票",children:h.jsx(dD,{className:"w-5 h-5"})})]}),h.jsx("div",{className:"flex-1",children:h.jsx("input",{type:"text",value:i,onChange:W=>s(W.target.value),placeholder:"輸入訊息...",className:`w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 
                         focus:ring-2 focus:ring-sea-blue/20 focus:border-sea-blue 
                         bg-white dark:bg-dark-card dark:text-dark-text outline-none`})}),h.jsx("button",{type:"submit",disabled:!i.trim()&&!u||f,className:`p-3 bg-sea-blue hover:bg-sea-dark text-white rounded-lg 
                     disabled:opacity-50 disabled:cursor-not-allowed transition-colors`,children:f?h.jsx("div",{className:"w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"}):h.jsx(mE,{className:"w-5 h-5"})}),h.jsx("input",{ref:v,type:"file",accept:"image/*",onChange:C,className:"hidden"})]}),o&&h.jsx($D,{onEmojiSelect:S,onClose:()=>a(!1)}),l&&h.jsx(zD,{onSubmit:async W=>{try{await r({type:"vote",content:W}),c(!1),J.success("投票已建立")}catch{J.error("建立投票失敗")}},onClose:()=>c(!1)})]})]})},WD=t=>{const{user:e}=et(),{setMessages:n,clearMessages:r,currentRoom:i,currentPrivateChat:s}=Ht(),{incrementUnread:o}=Lf(),a=k.useRef(0);return k.useEffect(()=>{if(console.log("🔍 usePrivateChat 參數檢查:"),console.log("  - hasUser:",!!e),console.log("  - userUid:",e==null?void 0:e.uid),console.log("  - recipientId:",t),console.log("  - recipientIdType:",typeof t),console.log("  - recipientIdValue:",String(t)),!e||!t){console.log("⚠️ usePrivateChat: 缺少必要參數"),console.log("  - user exists:",!!e),console.log("  - recipientId:",t);return}const c=[e.uid,t].sort(),u=`${c[0]}_${c[1]}`,d=`privateChats/${u}/messages`;console.log("🚀 開始監聽私聊:",{userUid:e.uid,recipientId:t,chatId:u,fullPath:d,sortedIds:c}),r(),console.log("🧹 已清空現有訊息，準備載入私聊訊息");const f=Q(Y,`privateChats/${u}/messages`),m=xo(f,y=>{try{const _=y.val();if(console.log(`💌 私聊 ${u} 收到資料:`,_),_){const w=Object.entries(_).map(([g,E])=>({id:g,text:E.text,user:E.user,from:E.from,avatar:E.avatar,time:E.time,timestamp:E.time||E.timestamp||Date.now()}));w.sort((g,E)=>(g.time||g.timestamp||0)-(E.time||E.timestamp||0));const v=w.length,p=a.current;v>p&&p>0&&w.slice(p).forEach(E=>{if(E.from!==e.uid){const C=i==="private"&&s&&s.recipientId===E.from,S=E.user||"匿名用戶";console.log("🔍 檢查通知條件:",{currentRoom:i,currentPrivateChat:s,recipientId:t,messageFrom:E.from,isCurrentlyChattingWithSender:C}),C?console.log(`🔇 不顯示通知 - 用戶正在與 ${S} 聊天`):(console.log(`🔔 收到來自 ${S} 的新私訊 (非當前聊天):`,E.text),Is.showMessageNotification(S,E.text,"private"),Is.playNotificationSound(),window.showNotification&&window.showNotification(`💬 ${S}: ${E.text}`,"info",6e3),o(E.from))}}),a.current=v,console.log(`✅ 私聊 ${u} 載入了 ${w.length} 條訊息`),n(w)}else console.log(`📭 私聊 ${u} 沒有訊息`),a.current=0,n([])}catch(_){console.error(`❌ 私聊 ${u} 載入訊息時出錯:`,_),n([])}},y=>{console.error(`❌ Firebase onValue 錯誤 (私聊 ${u}):`,y),y.code==="PERMISSION_DENIED"&&console.error("🚫 權限被拒絕 - 請檢查 Firebase 安全規則!")});return()=>{try{console.log(`🛑 停止監聽私聊 ${u} 的訊息`),m()}catch(y){console.error("Firebase unsubscribe error:",y)}}},[e,t,n,r]),{sendPrivateMessage:async c=>{if(!e||!t)return;const u=[e.uid,t].sort(),d=`${u[0]}_${u[1]}`,f=Q(Y,`privateChats/${d}/messages`),m={text:c.text||c.message,user:e.nickname||e.displayName||"匿名用戶",from:e.uid,avatar:e.avatar||null,time:Date.now()};try{console.log(`📤 發送私人訊息到 ${d}:`,m),await xw(f,m)}catch(y){throw console.error(`❌ 發送私人訊息失敗 (${d}):`,y),y}}}},VD=()=>{const{user:t}=et(),[e,n]=k.useState([]),[r,i]=k.useState(!0);return k.useEffect(()=>{if(!(t!=null&&t.uid)){console.log("⚠️ usePrivateChatsList: 沒有用戶 UID"),n([]),i(!1);return}console.log(`🚀 開始載入用戶 ${t.uid} 的私聊列表...`),(async()=>{try{i(!0);const o=Q(Y,"privateChats"),a=await Bt(o);if(!a.exists()){console.log("📭 沒有找到任何私聊房間"),n([]),i(!1);return}const l=a.val(),u=Object.keys(l).filter(y=>y.includes(t.uid));if(console.log(`💬 找到 ${u.length} 個包含用戶的私聊房間:`,u.slice(0,5),"..."),u.length===0){n([]),i(!1);return}console.log(`🚀 開始處理全部 ${u.length} 個私聊房間...`);const d=u.map(async y=>{try{const w=y.split("_").find(S=>S!==t.uid);if(!w)return console.log(`⚠️ 無法解析私聊房間 ${y} 的對方用戶`),null;const[v,p]=await Promise.all([Bt(Q(Y,`users/${w}`)),Bt(Q(Y,`privateChats/${y}/messages`))]);if(!v.exists())return console.log(`⚠️ 對方用戶 ${w} 不存在`),null;const g=v.val();let E="開始對話...",C=null;if(p.exists()){const S=p.val(),T=Object.entries(S);if(T.length>0){const R=T.sort(([,O],[,Oe])=>(Oe.time||0)-(O.time||0)),[,B]=R[0];E=B.text||"訊息",C=B.time}}return{id:y,recipientId:w,nickname:g.nickname||"匿名用戶",avatar:g.avatar,isOnline:g.online||!1,lastMessage:E,lastMessageTime:C}}catch(_){return console.error(`❌ 處理私聊房間 ${y} 時出錯:`,_),null}}),m=(await Promise.all(d)).filter(y=>y!==null);m.sort((y,_)=>(_.lastMessageTime||0)-(y.lastMessageTime||0)),console.log(`✅ 成功載入 ${m.length} 個私聊對話`),n(m)}catch(o){console.error("❌ 載入私聊列表失敗:",o),n([])}finally{i(!1)}})()},[t==null?void 0:t.uid]),{privateChatsList:e,loading:r,refreshList:()=>{t!=null&&t.uid&&(i(!0),n([]))}}},Pg=()=>{const{user:t}=et(),{currentPrivateChat:e,setCurrentPrivateChat:n,setCurrentRoom:r,messages:i}=Ht(),{privateChatsList:s,loading:o,refreshList:a}=VD(),[l,c]=k.useState(""),u=k.useRef(null),{sendPrivateMessage:d}=WD(e==null?void 0:e.recipientId),{getUnreadCount:f,markAsRead:m}=Lf();console.log("💬 PrivateChat 狀態:",{currentPrivateChat:!!e,nickname:e==null?void 0:e.nickname,messagesCount:i.length,privateChatsListCount:s.length,chatsLoading:o}),k.useEffect(()=>{u.current&&u.current.scrollIntoView({behavior:"smooth"})},[i]),k.useEffect(()=>{e!=null&&e.recipientId&&(console.log(`📖 進入與 ${e.nickname} 的聊天，標記為已讀`),m(e.recipientId))},[e==null?void 0:e.recipientId,m]);const y=()=>{n(null)},_=async()=>{if(!(!l.trim()||!e))try{await d({text:l.trim(),type:"text"}),c("")}catch(w){console.error("發送私訊失敗:",w)}};return e?h.jsxs("div",{className:"flex flex-col h-screen pt-16 md:pt-0",children:[h.jsx("div",{className:"bg-white/70 dark:bg-dark-card/70 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 p-4",children:h.jsx("div",{className:"flex items-center justify-between",children:h.jsxs("div",{className:"flex items-center gap-3",children:[h.jsx("button",{onClick:y,className:"p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors",title:"返回私聊列表",children:h.jsx(fE,{className:"w-5 h-5"})}),h.jsx("img",{src:e.avatar||`https://ui-avatars.com/api/?name=${e.nickname}&background=56c596&color=fff`,alt:e.nickname,className:"w-10 h-10 rounded-full"}),h.jsxs("div",{children:[h.jsx("h2",{className:"font-semibold text-gray-800 dark:text-dark-text",children:e.nickname}),h.jsx("p",{className:"text-sm text-gray-500",children:"私人對話"})]})]})})}),h.jsxs("div",{className:"flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar",children:[i.length===0?h.jsxs("div",{className:"text-center text-gray-500 mt-8",children:[h.jsx(Pr,{className:"w-16 h-16 mx-auto mb-4 text-gray-300"}),h.jsx("p",{children:"還沒有私訊記錄"}),h.jsxs("p",{className:"text-sm",children:["開始和 ",e.nickname," 聊天吧！"]})]}):i.map(w=>{var v;return h.jsx(_E,{message:w,isOwn:((v=w.sender)==null?void 0:v.uid)===(t==null?void 0:t.uid)||w.from===(t==null?void 0:t.uid)},w.id)}),h.jsx("div",{ref:u})]}),h.jsx("div",{className:"bg-white/70 dark:bg-dark-card/70 backdrop-blur-sm border-t border-gray-200 dark:border-gray-700 p-4",children:h.jsxs("div",{className:"flex gap-2",children:[h.jsx("input",{type:"text",value:l,onChange:w=>c(w.target.value),onKeyPress:w=>w.key==="Enter"&&_(),placeholder:`傳訊息給 ${e.nickname}...`,className:`flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 
                         focus:ring-2 focus:ring-sea-blue/20 focus:border-sea-blue 
                         bg-white dark:bg-dark-card dark:text-dark-text outline-none`}),h.jsxs("button",{onClick:_,disabled:!l.trim(),className:"px-6 py-3 bg-sea-blue hover:bg-sea-dark disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg transition-colors flex items-center gap-2",children:[h.jsx(mE,{className:"w-4 h-4"}),"發送"]})]})})]}):h.jsxs("div",{className:"flex flex-col h-screen pt-16 md:pt-0",children:[h.jsx("div",{className:"bg-white/70 dark:bg-dark-card/70 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 p-4",children:h.jsxs("div",{className:"flex items-center justify-between",children:[h.jsxs("div",{children:[h.jsxs("h2",{className:"text-xl font-semibold text-gray-800 dark:text-dark-text mb-1",children:["私人訊息 (",s.length,")"]}),h.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"點選對話開始私訊"})]}),h.jsx("button",{onClick:()=>{console.log("🔄 重新載入私聊列表..."),a()},className:"px-3 py-1 text-xs bg-sea-blue text-white rounded-lg hover:bg-sea-dark transition-colors",children:"🔄 重新載入"})]})}),h.jsx("div",{className:"flex-1 overflow-y-auto",children:o?h.jsxs("div",{className:"flex items-center justify-center h-64",children:[h.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-sea-blue"}),h.jsx("span",{className:"ml-2 text-gray-500",children:"載入私聊列表中..."})]}):s.length===0?h.jsxs("div",{className:"flex flex-col items-center justify-center h-full text-gray-500",children:[h.jsx(Pr,{className:"w-16 h-16 mb-4 text-gray-300"}),h.jsx("p",{className:"text-lg mb-2",children:"還沒有私訊"}),h.jsxs("p",{className:"text-sm text-center px-4 mb-4",children:["在聊天室中點擊其他用戶的頭像",h.jsx("br",{}),"就可以開始私人對話"]})]}):h.jsx("div",{className:"p-4 space-y-2",children:s.map(w=>h.jsxs("div",{onClick:()=>{n(w),m(w.recipientId)},className:"flex items-center gap-3 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer transition-colors relative",children:[h.jsxs("div",{className:"relative",children:[h.jsx("img",{src:w.avatar||`https://ui-avatars.com/api/?name=${w.nickname}&background=56c596&color=fff`,alt:w.nickname,className:"w-12 h-12 rounded-full"}),h.jsx(vE,{count:f(w.recipientId),className:"absolute -top-1 -right-1"})]}),h.jsxs("div",{className:"flex-1",children:[h.jsx("h3",{className:"font-medium text-gray-800 dark:text-gray-200",children:w.nickname}),h.jsx("p",{className:"text-sm text-gray-500 truncate",children:w.lastMessage||"開始對話..."})]}),h.jsx("div",{className:"text-xs text-gray-400",children:w.lastMessageTime&&new Date(w.lastMessageTime).toLocaleTimeString("zh-TW",{hour:"2-digit",minute:"2-digit"})})]},w.id))})})]})},HD=()=>{const{currentRoom:t,currentPrivateChat:e}=Ht(),n=()=>t==="private"?e?h.jsx(Pg,{}):h.jsx(Pg,{}):h.jsx(BD,{roomId:t});return h.jsx("div",{className:"flex-1 flex flex-col",children:n()})},KD=()=>{const{sidebarOpen:t,setSidebarOpen:e,darkMode:n,toggleDarkMode:r}=Ht(),{user:i}=et();return h.jsx("div",{className:"md:hidden fixed top-0 left-0 right-0 z-40 bg-white/90 dark:bg-dark-card/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700",children:h.jsxs("div",{className:"flex items-center justify-between px-4 py-3",children:[h.jsxs("div",{className:"flex items-center gap-3",children:[h.jsx("button",{onClick:()=>e(!t),className:"p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors",children:t?h.jsx(Pi,{className:"w-5 h-5"}):h.jsx(wD,{className:"w-5 h-5"})}),h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("img",{src:"/icon-512.png",alt:"LalaLand",className:"w-8 h-8 rounded-lg"}),h.jsx("h1",{className:"font-semibold text-gray-800 dark:text-dark-text",children:"LalaLand"})]})]}),h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("button",{onClick:r,className:"p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors",children:n?h.jsx(gE,{className:"w-5 h-5"}):h.jsx(pE,{className:"w-5 h-5"})}),i&&h.jsx("img",{src:i.avatar||`https://ui-avatars.com/api/?name=${i.nickname}&background=2877b9&color=fff`,alt:i.nickname,className:"w-8 h-8 rounded-full border-2 border-sea-blue"})]})]})})},au=()=>{const{darkMode:t}=Ht(),{user:e}=et();return k.useEffect(()=>{t?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},[t]),k.useEffect(()=>{e&&RD(e)},[e]),h.jsxs("div",{className:"h-screen flex bg-earth-beige dark:bg-dark-bg",children:[h.jsx(KD,{}),h.jsx(OD,{}),h.jsx(HD,{})]})},GD=()=>{const{user:t}=et(),[e,n]=k.useState(""),[r,i]=k.useState(!1),s=async()=>{i(!0),n("");try{console.log("🔍 開始完整偵錯..."),await oD(),n("偵錯完成，請檢查瀏覽器控制台查看詳細結果")}catch(a){n(`偵錯失敗: ${a.message}`)}finally{i(!1)}},o=async()=>{const a=prompt("請輸入房間 ID (如: casual, dating, hookup):");if(a){i(!0);try{const l=await aD(a);n(l?`房間 ${a} 找到 ${Object.keys(l).length} 條訊息`:`房間 ${a} 沒有訊息`)}catch(l){n(`偵錯房間失敗: ${l.message}`)}finally{i(!1)}}};return h.jsx("div",{className:"min-h-screen bg-gray-100 dark:bg-gray-900 p-4",children:h.jsxs("div",{className:"max-w-2xl mx-auto",children:[h.jsx("h1",{className:"text-2xl font-bold text-gray-900 dark:text-white mb-6",children:"Firebase 偵錯工具"}),t&&h.jsxs("div",{className:"mb-6 p-4 bg-white dark:bg-gray-800 rounded-lg shadow",children:[h.jsx("h2",{className:"text-lg font-semibold text-gray-900 dark:text-white mb-2",children:"當前用戶"}),h.jsxs("p",{className:"text-gray-600 dark:text-gray-300",children:["UID: ",t.uid]}),h.jsxs("p",{className:"text-gray-600 dark:text-gray-300",children:["暱稱: ",t.nickname]})]}),h.jsxs("div",{className:"space-y-4",children:[h.jsx("button",{onClick:s,disabled:r,className:"w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50",children:r?"偵錯中...":"完整偵錯 (檢查控制台)"}),h.jsx("button",{onClick:o,disabled:r,className:"w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50",children:"偵錯特定房間"})]}),e&&h.jsxs("div",{className:"mt-6 p-4 bg-white dark:bg-gray-800 rounded-lg shadow",children:[h.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-white mb-2",children:"偵錯結果"}),h.jsx("pre",{className:"text-sm text-gray-600 dark:text-gray-300 whitespace-pre-wrap",children:e})]}),h.jsxs("div",{className:"mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg",children:[h.jsx("h3",{className:"text-lg font-semibold text-yellow-800 dark:text-yellow-200 mb-2",children:"說明"}),h.jsx("p",{className:"text-yellow-700 dark:text-yellow-300 text-sm",children:'如果看到 "permission_denied" 錯誤，請在 Firebase Console 中更新安全規則。 參考專案中的 FIREBASE_SETUP.md 文件。'})]})]})})},qD=()=>h.jsx("div",{className:"fixed inset-0 bg-gradient-to-br from-earth-beige to-white flex items-center justify-center z-50",children:h.jsxs("div",{className:"text-center",children:[h.jsx("img",{src:"/icon-512.png",alt:"LalaLand",className:"w-32 h-32 mx-auto mb-6 animate-float"}),h.jsx("h1",{className:"text-3xl font-bold text-sea-dark mb-2",children:"LalaLand"}),h.jsx("p",{className:"text-gray-600",children:"載入中..."}),h.jsx("div",{className:"mt-6",children:h.jsxs("div",{className:"flex justify-center space-x-1",children:[h.jsx("div",{className:"w-2 h-2 bg-sea-blue rounded-full animate-bounce"}),h.jsx("div",{className:"w-2 h-2 bg-sea-blue rounded-full animate-bounce",style:{animationDelay:"0.1s"}}),h.jsx("div",{className:"w-2 h-2 bg-sea-blue rounded-full animate-bounce",style:{animationDelay:"0.2s"}})]})})]})});class QD extends ml.Component{constructor(n){super(n);jf(this,"handleReload",()=>{window.location.reload()});this.state={hasError:!1,error:null,errorInfo:null}}static getDerivedStateFromError(n){return{hasError:!0}}componentDidCatch(n,r){console.error("ErrorBoundary caught an error:",n,r),this.setState({error:n,errorInfo:r})}render(){return this.state.hasError?h.jsx("div",{className:"min-h-screen flex items-center justify-center bg-earth-beige p-4",children:h.jsxs("div",{className:"max-w-md w-full bg-white rounded-xl shadow-soft p-6 text-center",children:[h.jsxs("div",{className:"mb-6",children:[h.jsx(CD,{className:"w-16 h-16 text-red-500 mx-auto mb-4"}),h.jsx("h1",{className:"text-2xl font-bold text-gray-800 mb-2",children:"哎呀，出錯了！"}),h.jsx("p",{className:"text-gray-600",children:"應用程式發生了未預期的錯誤"})]}),h.jsxs("div",{className:"space-y-4",children:[h.jsxs("button",{onClick:this.handleReload,className:"w-full btn-primary flex items-center justify-center gap-2",children:[h.jsx(kD,{className:"w-4 h-4"}),"重新載入"]}),h.jsx("button",{onClick:()=>window.location.href="/",className:"w-full btn-secondary",children:"回到首頁"})]}),!1]})}):this.props.children}}let YD=0;function XD(){const[t,e]=k.useState([]),[n,r]=k.useState(localStorage.getItem("notificationSound")!=="false"),i=k.useCallback((c,u="info",d=5e3)=>{const f=++YD,m={id:f,message:c,type:u,timestamp:Date.now()};return e(y=>[...y,m]),n&&u!=="info"&&o(),d>0&&setTimeout(()=>{s(f)},d),f},[n]),s=k.useCallback(c=>{e(u=>u.filter(d=>d.id!==c))},[]),o=()=>{try{const c=new(window.AudioContext||window.webkitAudioContext),u=c.createOscillator(),d=c.createGain();u.connect(d),d.connect(c.destination),u.frequency.value=800,u.type="sine",d.gain.setValueAtTime(.1,c.currentTime),d.gain.exponentialRampToValueAtTime(.01,c.currentTime+.3),u.start(),u.stop(c.currentTime+.3)}catch(c){console.log("無法播放提示音:",c)}},a=()=>{const c=!n;r(c),localStorage.setItem("notificationSound",c.toString())};k.useEffect(()=>(window.showNotification=i,()=>{delete window.showNotification}),[i]);const l=c=>{const u="mb-2 p-3 rounded-lg shadow-lg transform transition-all duration-300 ease-in-out",d={info:"bg-blue-500 text-white",success:"bg-green-500 text-white",warning:"bg-yellow-500 text-black",error:"bg-red-500 text-white"};return`${u} ${d[c]||d.info}`};return h.jsxs(h.Fragment,{children:[h.jsx("div",{className:"fixed top-4 right-4 z-50 max-w-sm w-full",children:t.map(c=>h.jsx("div",{className:l(c.type),onClick:()=>s(c.id),children:h.jsxs("div",{className:"flex justify-between items-start",children:[h.jsx("p",{className:"flex-1 text-sm font-medium",children:c.message}),h.jsx("button",{className:"ml-2 text-lg leading-none opacity-70 hover:opacity-100",onClick:u=>{u.stopPropagation(),s(c.id)},children:"×"})]})},c.id))}),h.jsx("div",{className:"notification-settings",style:{display:"none"},children:h.jsxs("label",{className:"flex items-center gap-2",children:[h.jsx("input",{type:"checkbox",checked:n,onChange:a}),h.jsx("span",{children:"啟用通知提示音"})]})})]})}function JD(){const{user:t,setUser:e,loading:n,setLoading:r}=et();return k.useEffect(()=>{(async()=>{try{await ri.initialize(),console.log("✅ FCM 系統已初始化")}catch(o){console.error("❌ FCM 初始化失敗:",o)}})(),"serviceWorker"in navigator&&navigator.serviceWorker.register("/sw.js").then(()=>console.log("📱 Service Worker 註冊成功")).catch(o=>console.log("📱 Service Worker 註冊失敗:",o));const s=jT(hl,async o=>{if(o){let a=o.displayName||"匿名用戶",l=o.photoURL||null;try{const c=Q(Y,`users/${o.uid}`),u=await Bt(c);if(u.exists()){const d=u.val();a=d.nickname||a,l=d.avatar||l}}catch(c){console.warn("無法讀取用戶資料:",c)}e({uid:o.uid,email:o.email,nickname:a,avatar:l,isAnonymous:o.isAnonymous}),console.log("✅ 用戶已登入:",o.uid,"暱稱:",a),setTimeout(async()=>{console.log("🔔 自動請求通知權限...");const c=await ri.requestPermissionSilently(o.uid);c?console.log("✅ 通知權限已獲得，FCM Token:",c.substring(0,20)+"..."):console.log("ℹ️ 通知權限未獲得或瀏覽器不支援 FCM")},2e3)}else e(null);r(!1)});return()=>s()},[e,r]),k.useEffect(()=>{const i=async s=>{if(t&&t.isAnonymous){console.log("🗑️ 匿名用戶關閉頁面 - 嘗試清理資料");try{const o=Q(Y,`users/${t.uid}`);await kf(o),console.log("✅ 匿名用戶資料已清理")}catch(o){console.error("❌ 清理匿名用戶資料失敗:",o)}}};return window.addEventListener("beforeunload",i),()=>{window.removeEventListener("beforeunload",i)}},[t]),n?h.jsx(qD,{}):h.jsx(QD,{children:h.jsx(Vx,{future:{v7_startTransition:!0,v7_relativeSplatPath:!0},children:h.jsxs("div",{className:"min-h-screen",children:[h.jsxs(zx,{children:[h.jsx(as,{path:"/",element:t?h.jsx(au,{}):h.jsx(bD,{})}),h.jsx(as,{path:"/login",element:t?h.jsx(au,{}):h.jsx(Rg,{})}),h.jsx(as,{path:"/chat",element:t?h.jsx(au,{}):h.jsx(Rg,{})}),h.jsx(as,{path:"/debug",element:h.jsx(GD,{})})]}),h.jsx(AC,{position:"top-center",toastOptions:{duration:3e3,style:{background:"#2877b9",color:"#fff",borderRadius:"12px"}}}),h.jsx(XD,{})]})})})}lu.createRoot(document.getElementById("root")).render(h.jsx(ml.StrictMode,{children:h.jsx(JD,{})}));
//# sourceMappingURL=index-CJro2Tjv.js.map
