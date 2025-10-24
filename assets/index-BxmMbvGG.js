var $x=Object.defineProperty;var Wx=(t,e,n)=>e in t?$x(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Gf=(t,e,n)=>Wx(t,typeof e!="symbol"?e+"":e,n);function zx(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const s in r)if(s!=="default"&&!(s in t)){const i=Object.getOwnPropertyDescriptor(r,s);i&&Object.defineProperty(t,s,i.get?i:{enumerable:!0,get:()=>r[s]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Hg(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Kg={exports:{}},Sl={},Gg={exports:{}},B={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var go=Symbol.for("react.element"),Bx=Symbol.for("react.portal"),Vx=Symbol.for("react.fragment"),Hx=Symbol.for("react.strict_mode"),Kx=Symbol.for("react.profiler"),Gx=Symbol.for("react.provider"),qx=Symbol.for("react.context"),Qx=Symbol.for("react.forward_ref"),Yx=Symbol.for("react.suspense"),Xx=Symbol.for("react.memo"),Jx=Symbol.for("react.lazy"),qf=Symbol.iterator;function Zx(t){return t===null||typeof t!="object"?null:(t=qf&&t[qf]||t["@@iterator"],typeof t=="function"?t:null)}var qg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Qg=Object.assign,Yg={};function Fs(t,e,n){this.props=t,this.context=e,this.refs=Yg,this.updater=n||qg}Fs.prototype.isReactComponent={};Fs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Fs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Xg(){}Xg.prototype=Fs.prototype;function Bd(t,e,n){this.props=t,this.context=e,this.refs=Yg,this.updater=n||qg}var Vd=Bd.prototype=new Xg;Vd.constructor=Bd;Qg(Vd,Fs.prototype);Vd.isPureReactComponent=!0;var Qf=Array.isArray,Jg=Object.prototype.hasOwnProperty,Hd={current:null},Zg={key:!0,ref:!0,__self:!0,__source:!0};function ey(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)Jg.call(e,r)&&!Zg.hasOwnProperty(r)&&(s[r]=e[r]);var a=arguments.length-2;if(a===1)s.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];s.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)s[r]===void 0&&(s[r]=a[r]);return{$$typeof:go,type:t,key:i,ref:o,props:s,_owner:Hd.current}}function ek(t,e){return{$$typeof:go,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Kd(t){return typeof t=="object"&&t!==null&&t.$$typeof===go}function tk(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Yf=/\/+/g;function vc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?tk(""+t.key):e.toString(36)}function oa(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case go:case Bx:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+vc(o,0):r,Qf(s)?(n="",t!=null&&(n=t.replace(Yf,"$&/")+"/"),oa(s,e,n,"",function(c){return c})):s!=null&&(Kd(s)&&(s=ek(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(Yf,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",Qf(t))for(var a=0;a<t.length;a++){i=t[a];var l=r+vc(i,a);o+=oa(i,e,n,l,s)}else if(l=Zx(t),typeof l=="function")for(t=l.call(t),a=0;!(i=t.next()).done;)i=i.value,l=r+vc(i,a++),o+=oa(i,e,n,l,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Lo(t,e,n){if(t==null)return t;var r=[],s=0;return oa(t,r,"","",function(i){return e.call(n,i,s++)}),r}function nk(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var He={current:null},aa={transition:null},rk={ReactCurrentDispatcher:He,ReactCurrentBatchConfig:aa,ReactCurrentOwner:Hd};function ty(){throw Error("act(...) is not supported in production builds of React.")}B.Children={map:Lo,forEach:function(t,e,n){Lo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Lo(t,function(){e++}),e},toArray:function(t){return Lo(t,function(e){return e})||[]},only:function(t){if(!Kd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};B.Component=Fs;B.Fragment=Vx;B.Profiler=Kx;B.PureComponent=Bd;B.StrictMode=Hx;B.Suspense=Yx;B.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rk;B.act=ty;B.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Qg({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=Hd.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Jg.call(e,l)&&!Zg.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:go,type:t.type,key:s,ref:i,props:r,_owner:o}};B.createContext=function(t){return t={$$typeof:qx,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Gx,_context:t},t.Consumer=t};B.createElement=ey;B.createFactory=function(t){var e=ey.bind(null,t);return e.type=t,e};B.createRef=function(){return{current:null}};B.forwardRef=function(t){return{$$typeof:Qx,render:t}};B.isValidElement=Kd;B.lazy=function(t){return{$$typeof:Jx,_payload:{_status:-1,_result:t},_init:nk}};B.memo=function(t,e){return{$$typeof:Xx,type:t,compare:e===void 0?null:e}};B.startTransition=function(t){var e=aa.transition;aa.transition={};try{t()}finally{aa.transition=e}};B.unstable_act=ty;B.useCallback=function(t,e){return He.current.useCallback(t,e)};B.useContext=function(t){return He.current.useContext(t)};B.useDebugValue=function(){};B.useDeferredValue=function(t){return He.current.useDeferredValue(t)};B.useEffect=function(t,e){return He.current.useEffect(t,e)};B.useId=function(){return He.current.useId()};B.useImperativeHandle=function(t,e,n){return He.current.useImperativeHandle(t,e,n)};B.useInsertionEffect=function(t,e){return He.current.useInsertionEffect(t,e)};B.useLayoutEffect=function(t,e){return He.current.useLayoutEffect(t,e)};B.useMemo=function(t,e){return He.current.useMemo(t,e)};B.useReducer=function(t,e,n){return He.current.useReducer(t,e,n)};B.useRef=function(t){return He.current.useRef(t)};B.useState=function(t){return He.current.useState(t)};B.useSyncExternalStore=function(t,e,n){return He.current.useSyncExternalStore(t,e,n)};B.useTransition=function(){return He.current.useTransition()};B.version="18.3.1";Gg.exports=B;var x=Gg.exports;const bl=Hg(x),sk=zx({__proto__:null,default:bl},[x]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ik=x,ok=Symbol.for("react.element"),ak=Symbol.for("react.fragment"),lk=Object.prototype.hasOwnProperty,ck=ik.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,uk={key:!0,ref:!0,__self:!0,__source:!0};function ny(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)lk.call(e,r)&&!uk.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:ok,type:t,key:i,ref:o,props:s,_owner:ck.current}}Sl.Fragment=ak;Sl.jsx=ny;Sl.jsxs=ny;Kg.exports=Sl;var u=Kg.exports,gu={},ry={exports:{}},ot={},sy={exports:{}},iy={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(T,R){var I=T.length;T.push(R);e:for(;0<I;){var j=I-1>>>1,Q=T[j];if(0<s(Q,R))T[j]=R,T[I]=Q,I=j;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var R=T[0],I=T.pop();if(I!==R){T[0]=I;e:for(var j=0,Q=T.length,Mo=Q>>>1;j<Mo;){var dr=2*(j+1)-1,yc=T[dr],hr=dr+1,jo=T[hr];if(0>s(yc,I))hr<Q&&0>s(jo,yc)?(T[j]=jo,T[hr]=I,j=hr):(T[j]=yc,T[dr]=I,j=dr);else if(hr<Q&&0>s(jo,I))T[j]=jo,T[hr]=I,j=hr;else break e}}return R}function s(T,R){var I=T.sortIndex-R.sortIndex;return I!==0?I:T.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,h=null,f=3,g=!1,y=!1,w=!1,k=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(T){for(var R=n(c);R!==null;){if(R.callback===null)r(c);else if(R.startTime<=T)r(c),R.sortIndex=R.expirationTime,e(l,R);else break;R=n(c)}}function _(T){if(w=!1,m(T),!y)if(n(l)!==null)y=!0,At(S);else{var R=n(c);R!==null&&gt(_,R.startTime-T)}}function S(T,R){y=!1,w&&(w=!1,v(C),C=-1),g=!0;var I=f;try{for(m(R),h=n(l);h!==null&&(!(h.expirationTime>R)||T&&!U());){var j=h.callback;if(typeof j=="function"){h.callback=null,f=h.priorityLevel;var Q=j(h.expirationTime<=R);R=t.unstable_now(),typeof Q=="function"?h.callback=Q:h===n(l)&&r(l),m(R)}else r(l);h=n(l)}if(h!==null)var Mo=!0;else{var dr=n(c);dr!==null&&gt(_,dr.startTime-R),Mo=!1}return Mo}finally{h=null,f=I,g=!1}}var E=!1,b=null,C=-1,A=5,M=-1;function U(){return!(t.unstable_now()-M<A)}function oe(){if(b!==null){var T=t.unstable_now();M=T;var R=!0;try{R=b(!0,T)}finally{R?Te():(E=!1,b=null)}}else E=!1}var Te;if(typeof p=="function")Te=function(){p(oe)};else if(typeof MessageChannel<"u"){var Gt=new MessageChannel,qt=Gt.port2;Gt.port1.onmessage=oe,Te=function(){qt.postMessage(null)}}else Te=function(){k(oe,0)};function At(T){b=T,E||(E=!0,Te())}function gt(T,R){C=k(function(){T(t.unstable_now())},R)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(T){T.callback=null},t.unstable_continueExecution=function(){y||g||(y=!0,At(S))},t.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<T?Math.floor(1e3/T):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(T){switch(f){case 1:case 2:case 3:var R=3;break;default:R=f}var I=f;f=R;try{return T()}finally{f=I}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(T,R){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var I=f;f=T;try{return R()}finally{f=I}},t.unstable_scheduleCallback=function(T,R,I){var j=t.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?j+I:j):I=j,T){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=I+Q,T={id:d++,callback:R,priorityLevel:T,startTime:I,expirationTime:Q,sortIndex:-1},I>j?(T.sortIndex=I,e(c,T),n(l)===null&&T===n(c)&&(w?(v(C),C=-1):w=!0,gt(_,I-j))):(T.sortIndex=Q,e(l,T),y||g||(y=!0,At(S))),T},t.unstable_shouldYield=U,t.unstable_wrapCallback=function(T){var R=f;return function(){var I=f;f=R;try{return T.apply(this,arguments)}finally{f=I}}}})(iy);sy.exports=iy;var dk=sy.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hk=x,st=dk;function N(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var oy=new Set,Mi={};function $r(t,e){Es(t,e),Es(t+"Capture",e)}function Es(t,e){for(Mi[t]=e,t=0;t<e.length;t++)oy.add(e[t])}var un=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),yu=Object.prototype.hasOwnProperty,fk=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Xf={},Jf={};function pk(t){return yu.call(Jf,t)?!0:yu.call(Xf,t)?!1:fk.test(t)?Jf[t]=!0:(Xf[t]=!0,!1)}function mk(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function gk(t,e,n,r){if(e===null||typeof e>"u"||mk(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ke(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var Ae={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ae[t]=new Ke(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ae[e]=new Ke(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ae[t]=new Ke(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ae[t]=new Ke(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ae[t]=new Ke(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ae[t]=new Ke(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ae[t]=new Ke(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ae[t]=new Ke(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ae[t]=new Ke(t,5,!1,t.toLowerCase(),null,!1,!1)});var Gd=/[\-:]([a-z])/g;function qd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Gd,qd);Ae[e]=new Ke(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Gd,qd);Ae[e]=new Ke(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Gd,qd);Ae[e]=new Ke(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ae[t]=new Ke(t,1,!1,t.toLowerCase(),null,!1,!1)});Ae.xlinkHref=new Ke("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ae[t]=new Ke(t,1,!1,t.toLowerCase(),null,!0,!0)});function Qd(t,e,n,r){var s=Ae.hasOwnProperty(e)?Ae[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(gk(e,n,s,r)&&(n=null),r||s===null?pk(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var vn=hk.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Do=Symbol.for("react.element"),Jr=Symbol.for("react.portal"),Zr=Symbol.for("react.fragment"),Yd=Symbol.for("react.strict_mode"),vu=Symbol.for("react.profiler"),ay=Symbol.for("react.provider"),ly=Symbol.for("react.context"),Xd=Symbol.for("react.forward_ref"),_u=Symbol.for("react.suspense"),wu=Symbol.for("react.suspense_list"),Jd=Symbol.for("react.memo"),kn=Symbol.for("react.lazy"),cy=Symbol.for("react.offscreen"),Zf=Symbol.iterator;function Xs(t){return t===null||typeof t!="object"?null:(t=Zf&&t[Zf]||t["@@iterator"],typeof t=="function"?t:null)}var he=Object.assign,_c;function di(t){if(_c===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);_c=e&&e[1]||""}return`
`+_c+t}var wc=!1;function xc(t,e){if(!t||wc)return"";wc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var s=c.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,a=i.length-1;1<=o&&0<=a&&s[o]!==i[a];)a--;for(;1<=o&&0<=a;o--,a--)if(s[o]!==i[a]){if(o!==1||a!==1)do if(o--,a--,0>a||s[o]!==i[a]){var l=`
`+s[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{wc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?di(t):""}function yk(t){switch(t.tag){case 5:return di(t.type);case 16:return di("Lazy");case 13:return di("Suspense");case 19:return di("SuspenseList");case 0:case 2:case 15:return t=xc(t.type,!1),t;case 11:return t=xc(t.type.render,!1),t;case 1:return t=xc(t.type,!0),t;default:return""}}function xu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Zr:return"Fragment";case Jr:return"Portal";case vu:return"Profiler";case Yd:return"StrictMode";case _u:return"Suspense";case wu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case ly:return(t.displayName||"Context")+".Consumer";case ay:return(t._context.displayName||"Context")+".Provider";case Xd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Jd:return e=t.displayName||null,e!==null?e:xu(t.type)||"Memo";case kn:e=t._payload,t=t._init;try{return xu(t(e))}catch{}}return null}function vk(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xu(e);case 8:return e===Yd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Jn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function uy(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function _k(t){var e=uy(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Fo(t){t._valueTracker||(t._valueTracker=_k(t))}function dy(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=uy(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ba(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ku(t,e){var n=e.checked;return he({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function ep(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Jn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function hy(t,e){e=e.checked,e!=null&&Qd(t,"checked",e,!1)}function Eu(t,e){hy(t,e);var n=Jn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Su(t,e.type,n):e.hasOwnProperty("defaultValue")&&Su(t,e.type,Jn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function tp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Su(t,e,n){(e!=="number"||ba(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var hi=Array.isArray;function fs(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Jn(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function bu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(N(91));return he({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function np(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(N(92));if(hi(n)){if(1<n.length)throw Error(N(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Jn(n)}}function fy(t,e){var n=Jn(e.value),r=Jn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function rp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function py(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Cu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?py(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Uo,my=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Uo=Uo||document.createElement("div"),Uo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Uo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ji(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var yi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},wk=["Webkit","ms","Moz","O"];Object.keys(yi).forEach(function(t){wk.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),yi[e]=yi[t]})});function gy(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||yi.hasOwnProperty(t)&&yi[t]?(""+e).trim():e+"px"}function yy(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=gy(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var xk=he({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Iu(t,e){if(e){if(xk[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(N(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(N(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(N(61))}if(e.style!=null&&typeof e.style!="object")throw Error(N(62))}}function Nu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tu=null;function Zd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ru=null,ps=null,ms=null;function sp(t){if(t=_o(t)){if(typeof Ru!="function")throw Error(N(280));var e=t.stateNode;e&&(e=Rl(e),Ru(t.stateNode,t.type,e))}}function vy(t){ps?ms?ms.push(t):ms=[t]:ps=t}function _y(){if(ps){var t=ps,e=ms;if(ms=ps=null,sp(t),e)for(t=0;t<e.length;t++)sp(e[t])}}function wy(t,e){return t(e)}function xy(){}var kc=!1;function ky(t,e,n){if(kc)return t(e,n);kc=!0;try{return wy(t,e,n)}finally{kc=!1,(ps!==null||ms!==null)&&(xy(),_y())}}function Li(t,e){var n=t.stateNode;if(n===null)return null;var r=Rl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(N(231,e,typeof n));return n}var Pu=!1;if(un)try{var Js={};Object.defineProperty(Js,"passive",{get:function(){Pu=!0}}),window.addEventListener("test",Js,Js),window.removeEventListener("test",Js,Js)}catch{Pu=!1}function kk(t,e,n,r,s,i,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var vi=!1,Ca=null,Ia=!1,Au=null,Ek={onError:function(t){vi=!0,Ca=t}};function Sk(t,e,n,r,s,i,o,a,l){vi=!1,Ca=null,kk.apply(Ek,arguments)}function bk(t,e,n,r,s,i,o,a,l){if(Sk.apply(this,arguments),vi){if(vi){var c=Ca;vi=!1,Ca=null}else throw Error(N(198));Ia||(Ia=!0,Au=c)}}function Wr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Ey(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ip(t){if(Wr(t)!==t)throw Error(N(188))}function Ck(t){var e=t.alternate;if(!e){if(e=Wr(t),e===null)throw Error(N(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return ip(s),t;if(i===r)return ip(s),e;i=i.sibling}throw Error(N(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o){for(a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o)throw Error(N(189))}}if(n.alternate!==r)throw Error(N(190))}if(n.tag!==3)throw Error(N(188));return n.stateNode.current===n?t:e}function Sy(t){return t=Ck(t),t!==null?by(t):null}function by(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=by(t);if(e!==null)return e;t=t.sibling}return null}var Cy=st.unstable_scheduleCallback,op=st.unstable_cancelCallback,Ik=st.unstable_shouldYield,Nk=st.unstable_requestPaint,ge=st.unstable_now,Tk=st.unstable_getCurrentPriorityLevel,eh=st.unstable_ImmediatePriority,Iy=st.unstable_UserBlockingPriority,Na=st.unstable_NormalPriority,Rk=st.unstable_LowPriority,Ny=st.unstable_IdlePriority,Cl=null,$t=null;function Pk(t){if($t&&typeof $t.onCommitFiberRoot=="function")try{$t.onCommitFiberRoot(Cl,t,void 0,(t.current.flags&128)===128)}catch{}}var St=Math.clz32?Math.clz32:Mk,Ak=Math.log,Ok=Math.LN2;function Mk(t){return t>>>=0,t===0?32:31-(Ak(t)/Ok|0)|0}var $o=64,Wo=4194304;function fi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ta(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~s;a!==0?r=fi(a):(i&=o,i!==0&&(r=fi(i)))}else o=n&~s,o!==0?r=fi(o):i!==0&&(r=fi(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-St(e),s=1<<n,r|=t[n],e&=~s;return r}function jk(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Lk(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-St(i),a=1<<o,l=s[o];l===-1?(!(a&n)||a&r)&&(s[o]=jk(a,e)):l<=e&&(t.expiredLanes|=a),i&=~a}}function Ou(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ty(){var t=$o;return $o<<=1,!($o&4194240)&&($o=64),t}function Ec(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function yo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-St(e),t[e]=n}function Dk(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-St(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function th(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-St(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var Y=0;function Ry(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Py,nh,Ay,Oy,My,Mu=!1,zo=[],Dn=null,Fn=null,Un=null,Di=new Map,Fi=new Map,Sn=[],Fk="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ap(t,e){switch(t){case"focusin":case"focusout":Dn=null;break;case"dragenter":case"dragleave":Fn=null;break;case"mouseover":case"mouseout":Un=null;break;case"pointerover":case"pointerout":Di.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fi.delete(e.pointerId)}}function Zs(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=_o(e),e!==null&&nh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function Uk(t,e,n,r,s){switch(e){case"focusin":return Dn=Zs(Dn,t,e,n,r,s),!0;case"dragenter":return Fn=Zs(Fn,t,e,n,r,s),!0;case"mouseover":return Un=Zs(Un,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return Di.set(i,Zs(Di.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,Fi.set(i,Zs(Fi.get(i)||null,t,e,n,r,s)),!0}return!1}function jy(t){var e=yr(t.target);if(e!==null){var n=Wr(e);if(n!==null){if(e=n.tag,e===13){if(e=Ey(n),e!==null){t.blockedOn=e,My(t.priority,function(){Ay(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function la(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ju(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Tu=r,n.target.dispatchEvent(r),Tu=null}else return e=_o(n),e!==null&&nh(e),t.blockedOn=n,!1;e.shift()}return!0}function lp(t,e,n){la(t)&&n.delete(e)}function $k(){Mu=!1,Dn!==null&&la(Dn)&&(Dn=null),Fn!==null&&la(Fn)&&(Fn=null),Un!==null&&la(Un)&&(Un=null),Di.forEach(lp),Fi.forEach(lp)}function ei(t,e){t.blockedOn===e&&(t.blockedOn=null,Mu||(Mu=!0,st.unstable_scheduleCallback(st.unstable_NormalPriority,$k)))}function Ui(t){function e(s){return ei(s,t)}if(0<zo.length){ei(zo[0],t);for(var n=1;n<zo.length;n++){var r=zo[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Dn!==null&&ei(Dn,t),Fn!==null&&ei(Fn,t),Un!==null&&ei(Un,t),Di.forEach(e),Fi.forEach(e),n=0;n<Sn.length;n++)r=Sn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Sn.length&&(n=Sn[0],n.blockedOn===null);)jy(n),n.blockedOn===null&&Sn.shift()}var gs=vn.ReactCurrentBatchConfig,Ra=!0;function Wk(t,e,n,r){var s=Y,i=gs.transition;gs.transition=null;try{Y=1,rh(t,e,n,r)}finally{Y=s,gs.transition=i}}function zk(t,e,n,r){var s=Y,i=gs.transition;gs.transition=null;try{Y=4,rh(t,e,n,r)}finally{Y=s,gs.transition=i}}function rh(t,e,n,r){if(Ra){var s=ju(t,e,n,r);if(s===null)Oc(t,e,r,Pa,n),ap(t,r);else if(Uk(s,t,e,n,r))r.stopPropagation();else if(ap(t,r),e&4&&-1<Fk.indexOf(t)){for(;s!==null;){var i=_o(s);if(i!==null&&Py(i),i=ju(t,e,n,r),i===null&&Oc(t,e,r,Pa,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else Oc(t,e,r,null,n)}}var Pa=null;function ju(t,e,n,r){if(Pa=null,t=Zd(r),t=yr(t),t!==null)if(e=Wr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Ey(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Pa=t,null}function Ly(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Tk()){case eh:return 1;case Iy:return 4;case Na:case Rk:return 16;case Ny:return 536870912;default:return 16}default:return 16}}var An=null,sh=null,ca=null;function Dy(){if(ca)return ca;var t,e=sh,n=e.length,r,s="value"in An?An.value:An.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return ca=s.slice(t,1<r?1-r:void 0)}function ua(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Bo(){return!0}function cp(){return!1}function at(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Bo:cp,this.isPropagationStopped=cp,this}return he(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Bo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Bo)},persist:function(){},isPersistent:Bo}),e}var Us={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ih=at(Us),vo=he({},Us,{view:0,detail:0}),Bk=at(vo),Sc,bc,ti,Il=he({},vo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:oh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ti&&(ti&&t.type==="mousemove"?(Sc=t.screenX-ti.screenX,bc=t.screenY-ti.screenY):bc=Sc=0,ti=t),Sc)},movementY:function(t){return"movementY"in t?t.movementY:bc}}),up=at(Il),Vk=he({},Il,{dataTransfer:0}),Hk=at(Vk),Kk=he({},vo,{relatedTarget:0}),Cc=at(Kk),Gk=he({},Us,{animationName:0,elapsedTime:0,pseudoElement:0}),qk=at(Gk),Qk=he({},Us,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Yk=at(Qk),Xk=he({},Us,{data:0}),dp=at(Xk),Jk={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Zk={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},eE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function tE(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=eE[t])?!!e[t]:!1}function oh(){return tE}var nE=he({},vo,{key:function(t){if(t.key){var e=Jk[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ua(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Zk[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:oh,charCode:function(t){return t.type==="keypress"?ua(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ua(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),rE=at(nE),sE=he({},Il,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hp=at(sE),iE=he({},vo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:oh}),oE=at(iE),aE=he({},Us,{propertyName:0,elapsedTime:0,pseudoElement:0}),lE=at(aE),cE=he({},Il,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),uE=at(cE),dE=[9,13,27,32],ah=un&&"CompositionEvent"in window,_i=null;un&&"documentMode"in document&&(_i=document.documentMode);var hE=un&&"TextEvent"in window&&!_i,Fy=un&&(!ah||_i&&8<_i&&11>=_i),fp=" ",pp=!1;function Uy(t,e){switch(t){case"keyup":return dE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $y(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var es=!1;function fE(t,e){switch(t){case"compositionend":return $y(e);case"keypress":return e.which!==32?null:(pp=!0,fp);case"textInput":return t=e.data,t===fp&&pp?null:t;default:return null}}function pE(t,e){if(es)return t==="compositionend"||!ah&&Uy(t,e)?(t=Dy(),ca=sh=An=null,es=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Fy&&e.locale!=="ko"?null:e.data;default:return null}}var mE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!mE[t.type]:e==="textarea"}function Wy(t,e,n,r){vy(r),e=Aa(e,"onChange"),0<e.length&&(n=new ih("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var wi=null,$i=null;function gE(t){Jy(t,0)}function Nl(t){var e=rs(t);if(dy(e))return t}function yE(t,e){if(t==="change")return e}var zy=!1;if(un){var Ic;if(un){var Nc="oninput"in document;if(!Nc){var gp=document.createElement("div");gp.setAttribute("oninput","return;"),Nc=typeof gp.oninput=="function"}Ic=Nc}else Ic=!1;zy=Ic&&(!document.documentMode||9<document.documentMode)}function yp(){wi&&(wi.detachEvent("onpropertychange",By),$i=wi=null)}function By(t){if(t.propertyName==="value"&&Nl($i)){var e=[];Wy(e,$i,t,Zd(t)),ky(gE,e)}}function vE(t,e,n){t==="focusin"?(yp(),wi=e,$i=n,wi.attachEvent("onpropertychange",By)):t==="focusout"&&yp()}function _E(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Nl($i)}function wE(t,e){if(t==="click")return Nl(e)}function xE(t,e){if(t==="input"||t==="change")return Nl(e)}function kE(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var It=typeof Object.is=="function"?Object.is:kE;function Wi(t,e){if(It(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!yu.call(e,s)||!It(t[s],e[s]))return!1}return!0}function vp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function _p(t,e){var n=vp(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=vp(n)}}function Vy(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Vy(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Hy(){for(var t=window,e=ba();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ba(t.document)}return e}function lh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function EE(t){var e=Hy(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Vy(n.ownerDocument.documentElement,n)){if(r!==null&&lh(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=_p(n,i);var o=_p(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var SE=un&&"documentMode"in document&&11>=document.documentMode,ts=null,Lu=null,xi=null,Du=!1;function wp(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Du||ts==null||ts!==ba(r)||(r=ts,"selectionStart"in r&&lh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),xi&&Wi(xi,r)||(xi=r,r=Aa(Lu,"onSelect"),0<r.length&&(e=new ih("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ts)))}function Vo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ns={animationend:Vo("Animation","AnimationEnd"),animationiteration:Vo("Animation","AnimationIteration"),animationstart:Vo("Animation","AnimationStart"),transitionend:Vo("Transition","TransitionEnd")},Tc={},Ky={};un&&(Ky=document.createElement("div").style,"AnimationEvent"in window||(delete ns.animationend.animation,delete ns.animationiteration.animation,delete ns.animationstart.animation),"TransitionEvent"in window||delete ns.transitionend.transition);function Tl(t){if(Tc[t])return Tc[t];if(!ns[t])return t;var e=ns[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Ky)return Tc[t]=e[n];return t}var Gy=Tl("animationend"),qy=Tl("animationiteration"),Qy=Tl("animationstart"),Yy=Tl("transitionend"),Xy=new Map,xp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function or(t,e){Xy.set(t,e),$r(e,[t])}for(var Rc=0;Rc<xp.length;Rc++){var Pc=xp[Rc],bE=Pc.toLowerCase(),CE=Pc[0].toUpperCase()+Pc.slice(1);or(bE,"on"+CE)}or(Gy,"onAnimationEnd");or(qy,"onAnimationIteration");or(Qy,"onAnimationStart");or("dblclick","onDoubleClick");or("focusin","onFocus");or("focusout","onBlur");or(Yy,"onTransitionEnd");Es("onMouseEnter",["mouseout","mouseover"]);Es("onMouseLeave",["mouseout","mouseover"]);Es("onPointerEnter",["pointerout","pointerover"]);Es("onPointerLeave",["pointerout","pointerover"]);$r("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));$r("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));$r("onBeforeInput",["compositionend","keypress","textInput","paste"]);$r("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));$r("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));$r("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var pi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),IE=new Set("cancel close invalid load scroll toggle".split(" ").concat(pi));function kp(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,bk(r,e,void 0,t),t.currentTarget=null}function Jy(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==i&&s.isPropagationStopped())break e;kp(s,a,c),i=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==i&&s.isPropagationStopped())break e;kp(s,a,c),i=l}}}if(Ia)throw t=Au,Ia=!1,Au=null,t}function re(t,e){var n=e[zu];n===void 0&&(n=e[zu]=new Set);var r=t+"__bubble";n.has(r)||(Zy(e,t,2,!1),n.add(r))}function Ac(t,e,n){var r=0;e&&(r|=4),Zy(n,t,r,e)}var Ho="_reactListening"+Math.random().toString(36).slice(2);function zi(t){if(!t[Ho]){t[Ho]=!0,oy.forEach(function(n){n!=="selectionchange"&&(IE.has(n)||Ac(n,!1,t),Ac(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ho]||(e[Ho]=!0,Ac("selectionchange",!1,e))}}function Zy(t,e,n,r){switch(Ly(e)){case 1:var s=Wk;break;case 4:s=zk;break;default:s=rh}n=s.bind(null,e,n,t),s=void 0,!Pu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function Oc(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===s||a.nodeType===8&&a.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===s||l.nodeType===8&&l.parentNode===s))return;o=o.return}for(;a!==null;){if(o=yr(a),o===null)return;if(l=o.tag,l===5||l===6){r=i=o;continue e}a=a.parentNode}}r=r.return}ky(function(){var c=i,d=Zd(n),h=[];e:{var f=Xy.get(t);if(f!==void 0){var g=ih,y=t;switch(t){case"keypress":if(ua(n)===0)break e;case"keydown":case"keyup":g=rE;break;case"focusin":y="focus",g=Cc;break;case"focusout":y="blur",g=Cc;break;case"beforeblur":case"afterblur":g=Cc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=up;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=Hk;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=oE;break;case Gy:case qy:case Qy:g=qk;break;case Yy:g=lE;break;case"scroll":g=Bk;break;case"wheel":g=uE;break;case"copy":case"cut":case"paste":g=Yk;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=hp}var w=(e&4)!==0,k=!w&&t==="scroll",v=w?f!==null?f+"Capture":null:f;w=[];for(var p=c,m;p!==null;){m=p;var _=m.stateNode;if(m.tag===5&&_!==null&&(m=_,v!==null&&(_=Li(p,v),_!=null&&w.push(Bi(p,_,m)))),k)break;p=p.return}0<w.length&&(f=new g(f,y,null,n,d),h.push({event:f,listeners:w}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",f&&n!==Tu&&(y=n.relatedTarget||n.fromElement)&&(yr(y)||y[dn]))break e;if((g||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=c,y=y?yr(y):null,y!==null&&(k=Wr(y),y!==k||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=c),g!==y)){if(w=up,_="onMouseLeave",v="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(w=hp,_="onPointerLeave",v="onPointerEnter",p="pointer"),k=g==null?f:rs(g),m=y==null?f:rs(y),f=new w(_,p+"leave",g,n,d),f.target=k,f.relatedTarget=m,_=null,yr(d)===c&&(w=new w(v,p+"enter",y,n,d),w.target=m,w.relatedTarget=k,_=w),k=_,g&&y)t:{for(w=g,v=y,p=0,m=w;m;m=Yr(m))p++;for(m=0,_=v;_;_=Yr(_))m++;for(;0<p-m;)w=Yr(w),p--;for(;0<m-p;)v=Yr(v),m--;for(;p--;){if(w===v||v!==null&&w===v.alternate)break t;w=Yr(w),v=Yr(v)}w=null}else w=null;g!==null&&Ep(h,f,g,w,!1),y!==null&&k!==null&&Ep(h,k,y,w,!0)}}e:{if(f=c?rs(c):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var S=yE;else if(mp(f))if(zy)S=xE;else{S=_E;var E=vE}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(S=wE);if(S&&(S=S(t,c))){Wy(h,S,n,d);break e}E&&E(t,f,c),t==="focusout"&&(E=f._wrapperState)&&E.controlled&&f.type==="number"&&Su(f,"number",f.value)}switch(E=c?rs(c):window,t){case"focusin":(mp(E)||E.contentEditable==="true")&&(ts=E,Lu=c,xi=null);break;case"focusout":xi=Lu=ts=null;break;case"mousedown":Du=!0;break;case"contextmenu":case"mouseup":case"dragend":Du=!1,wp(h,n,d);break;case"selectionchange":if(SE)break;case"keydown":case"keyup":wp(h,n,d)}var b;if(ah)e:{switch(t){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else es?Uy(t,n)&&(C="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(Fy&&n.locale!=="ko"&&(es||C!=="onCompositionStart"?C==="onCompositionEnd"&&es&&(b=Dy()):(An=d,sh="value"in An?An.value:An.textContent,es=!0)),E=Aa(c,C),0<E.length&&(C=new dp(C,t,null,n,d),h.push({event:C,listeners:E}),b?C.data=b:(b=$y(n),b!==null&&(C.data=b)))),(b=hE?fE(t,n):pE(t,n))&&(c=Aa(c,"onBeforeInput"),0<c.length&&(d=new dp("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:c}),d.data=b))}Jy(h,e)})}function Bi(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Aa(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=Li(t,n),i!=null&&r.unshift(Bi(t,i,s)),i=Li(t,e),i!=null&&r.push(Bi(t,i,s))),t=t.return}return r}function Yr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ep(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,s?(l=Li(n,i),l!=null&&o.unshift(Bi(n,l,a))):s||(l=Li(n,i),l!=null&&o.push(Bi(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var NE=/\r\n?/g,TE=/\u0000|\uFFFD/g;function Sp(t){return(typeof t=="string"?t:""+t).replace(NE,`
`).replace(TE,"")}function Ko(t,e,n){if(e=Sp(e),Sp(t)!==e&&n)throw Error(N(425))}function Oa(){}var Fu=null,Uu=null;function $u(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Wu=typeof setTimeout=="function"?setTimeout:void 0,RE=typeof clearTimeout=="function"?clearTimeout:void 0,bp=typeof Promise=="function"?Promise:void 0,PE=typeof queueMicrotask=="function"?queueMicrotask:typeof bp<"u"?function(t){return bp.resolve(null).then(t).catch(AE)}:Wu;function AE(t){setTimeout(function(){throw t})}function Mc(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),Ui(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);Ui(e)}function $n(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Cp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var $s=Math.random().toString(36).slice(2),Lt="__reactFiber$"+$s,Vi="__reactProps$"+$s,dn="__reactContainer$"+$s,zu="__reactEvents$"+$s,OE="__reactListeners$"+$s,ME="__reactHandles$"+$s;function yr(t){var e=t[Lt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[dn]||n[Lt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Cp(t);t!==null;){if(n=t[Lt])return n;t=Cp(t)}return e}t=n,n=t.parentNode}return null}function _o(t){return t=t[Lt]||t[dn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function rs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(N(33))}function Rl(t){return t[Vi]||null}var Bu=[],ss=-1;function ar(t){return{current:t}}function se(t){0>ss||(t.current=Bu[ss],Bu[ss]=null,ss--)}function ne(t,e){ss++,Bu[ss]=t.current,t.current=e}var Zn={},De=ar(Zn),Ye=ar(!1),Cr=Zn;function Ss(t,e){var n=t.type.contextTypes;if(!n)return Zn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function Xe(t){return t=t.childContextTypes,t!=null}function Ma(){se(Ye),se(De)}function Ip(t,e,n){if(De.current!==Zn)throw Error(N(168));ne(De,e),ne(Ye,n)}function ev(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(N(108,vk(t)||"Unknown",s));return he({},n,r)}function ja(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Zn,Cr=De.current,ne(De,t),ne(Ye,Ye.current),!0}function Np(t,e,n){var r=t.stateNode;if(!r)throw Error(N(169));n?(t=ev(t,e,Cr),r.__reactInternalMemoizedMergedChildContext=t,se(Ye),se(De),ne(De,t)):se(Ye),ne(Ye,n)}var Jt=null,Pl=!1,jc=!1;function tv(t){Jt===null?Jt=[t]:Jt.push(t)}function jE(t){Pl=!0,tv(t)}function lr(){if(!jc&&Jt!==null){jc=!0;var t=0,e=Y;try{var n=Jt;for(Y=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Jt=null,Pl=!1}catch(s){throw Jt!==null&&(Jt=Jt.slice(t+1)),Cy(eh,lr),s}finally{Y=e,jc=!1}}return null}var is=[],os=0,La=null,Da=0,lt=[],ct=0,Ir=null,Zt=1,en="";function fr(t,e){is[os++]=Da,is[os++]=La,La=t,Da=e}function nv(t,e,n){lt[ct++]=Zt,lt[ct++]=en,lt[ct++]=Ir,Ir=t;var r=Zt;t=en;var s=32-St(r)-1;r&=~(1<<s),n+=1;var i=32-St(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,Zt=1<<32-St(e)+s|n<<s|r,en=i+t}else Zt=1<<i|n<<s|r,en=t}function ch(t){t.return!==null&&(fr(t,1),nv(t,1,0))}function uh(t){for(;t===La;)La=is[--os],is[os]=null,Da=is[--os],is[os]=null;for(;t===Ir;)Ir=lt[--ct],lt[ct]=null,en=lt[--ct],lt[ct]=null,Zt=lt[--ct],lt[ct]=null}var rt=null,tt=null,ae=!1,wt=null;function rv(t,e){var n=ut(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Tp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,rt=t,tt=$n(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,rt=t,tt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ir!==null?{id:Zt,overflow:en}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=ut(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,rt=t,tt=null,!0):!1;default:return!1}}function Vu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Hu(t){if(ae){var e=tt;if(e){var n=e;if(!Tp(t,e)){if(Vu(t))throw Error(N(418));e=$n(n.nextSibling);var r=rt;e&&Tp(t,e)?rv(r,n):(t.flags=t.flags&-4097|2,ae=!1,rt=t)}}else{if(Vu(t))throw Error(N(418));t.flags=t.flags&-4097|2,ae=!1,rt=t}}}function Rp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;rt=t}function Go(t){if(t!==rt)return!1;if(!ae)return Rp(t),ae=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!$u(t.type,t.memoizedProps)),e&&(e=tt)){if(Vu(t))throw sv(),Error(N(418));for(;e;)rv(t,e),e=$n(e.nextSibling)}if(Rp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(N(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){tt=$n(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}tt=null}}else tt=rt?$n(t.stateNode.nextSibling):null;return!0}function sv(){for(var t=tt;t;)t=$n(t.nextSibling)}function bs(){tt=rt=null,ae=!1}function dh(t){wt===null?wt=[t]:wt.push(t)}var LE=vn.ReactCurrentBatchConfig;function ni(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(N(309));var r=n.stateNode}if(!r)throw Error(N(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var a=s.refs;o===null?delete a[i]:a[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(N(284));if(!n._owner)throw Error(N(290,t))}return t}function qo(t,e){throw t=Object.prototype.toString.call(e),Error(N(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Pp(t){var e=t._init;return e(t._payload)}function iv(t){function e(v,p){if(t){var m=v.deletions;m===null?(v.deletions=[p],v.flags|=16):m.push(p)}}function n(v,p){if(!t)return null;for(;p!==null;)e(v,p),p=p.sibling;return null}function r(v,p){for(v=new Map;p!==null;)p.key!==null?v.set(p.key,p):v.set(p.index,p),p=p.sibling;return v}function s(v,p){return v=Vn(v,p),v.index=0,v.sibling=null,v}function i(v,p,m){return v.index=m,t?(m=v.alternate,m!==null?(m=m.index,m<p?(v.flags|=2,p):m):(v.flags|=2,p)):(v.flags|=1048576,p)}function o(v){return t&&v.alternate===null&&(v.flags|=2),v}function a(v,p,m,_){return p===null||p.tag!==6?(p=zc(m,v.mode,_),p.return=v,p):(p=s(p,m),p.return=v,p)}function l(v,p,m,_){var S=m.type;return S===Zr?d(v,p,m.props.children,_,m.key):p!==null&&(p.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===kn&&Pp(S)===p.type)?(_=s(p,m.props),_.ref=ni(v,p,m),_.return=v,_):(_=ya(m.type,m.key,m.props,null,v.mode,_),_.ref=ni(v,p,m),_.return=v,_)}function c(v,p,m,_){return p===null||p.tag!==4||p.stateNode.containerInfo!==m.containerInfo||p.stateNode.implementation!==m.implementation?(p=Bc(m,v.mode,_),p.return=v,p):(p=s(p,m.children||[]),p.return=v,p)}function d(v,p,m,_,S){return p===null||p.tag!==7?(p=Er(m,v.mode,_,S),p.return=v,p):(p=s(p,m),p.return=v,p)}function h(v,p,m){if(typeof p=="string"&&p!==""||typeof p=="number")return p=zc(""+p,v.mode,m),p.return=v,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Do:return m=ya(p.type,p.key,p.props,null,v.mode,m),m.ref=ni(v,null,p),m.return=v,m;case Jr:return p=Bc(p,v.mode,m),p.return=v,p;case kn:var _=p._init;return h(v,_(p._payload),m)}if(hi(p)||Xs(p))return p=Er(p,v.mode,m,null),p.return=v,p;qo(v,p)}return null}function f(v,p,m,_){var S=p!==null?p.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return S!==null?null:a(v,p,""+m,_);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Do:return m.key===S?l(v,p,m,_):null;case Jr:return m.key===S?c(v,p,m,_):null;case kn:return S=m._init,f(v,p,S(m._payload),_)}if(hi(m)||Xs(m))return S!==null?null:d(v,p,m,_,null);qo(v,m)}return null}function g(v,p,m,_,S){if(typeof _=="string"&&_!==""||typeof _=="number")return v=v.get(m)||null,a(p,v,""+_,S);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Do:return v=v.get(_.key===null?m:_.key)||null,l(p,v,_,S);case Jr:return v=v.get(_.key===null?m:_.key)||null,c(p,v,_,S);case kn:var E=_._init;return g(v,p,m,E(_._payload),S)}if(hi(_)||Xs(_))return v=v.get(m)||null,d(p,v,_,S,null);qo(p,_)}return null}function y(v,p,m,_){for(var S=null,E=null,b=p,C=p=0,A=null;b!==null&&C<m.length;C++){b.index>C?(A=b,b=null):A=b.sibling;var M=f(v,b,m[C],_);if(M===null){b===null&&(b=A);break}t&&b&&M.alternate===null&&e(v,b),p=i(M,p,C),E===null?S=M:E.sibling=M,E=M,b=A}if(C===m.length)return n(v,b),ae&&fr(v,C),S;if(b===null){for(;C<m.length;C++)b=h(v,m[C],_),b!==null&&(p=i(b,p,C),E===null?S=b:E.sibling=b,E=b);return ae&&fr(v,C),S}for(b=r(v,b);C<m.length;C++)A=g(b,v,C,m[C],_),A!==null&&(t&&A.alternate!==null&&b.delete(A.key===null?C:A.key),p=i(A,p,C),E===null?S=A:E.sibling=A,E=A);return t&&b.forEach(function(U){return e(v,U)}),ae&&fr(v,C),S}function w(v,p,m,_){var S=Xs(m);if(typeof S!="function")throw Error(N(150));if(m=S.call(m),m==null)throw Error(N(151));for(var E=S=null,b=p,C=p=0,A=null,M=m.next();b!==null&&!M.done;C++,M=m.next()){b.index>C?(A=b,b=null):A=b.sibling;var U=f(v,b,M.value,_);if(U===null){b===null&&(b=A);break}t&&b&&U.alternate===null&&e(v,b),p=i(U,p,C),E===null?S=U:E.sibling=U,E=U,b=A}if(M.done)return n(v,b),ae&&fr(v,C),S;if(b===null){for(;!M.done;C++,M=m.next())M=h(v,M.value,_),M!==null&&(p=i(M,p,C),E===null?S=M:E.sibling=M,E=M);return ae&&fr(v,C),S}for(b=r(v,b);!M.done;C++,M=m.next())M=g(b,v,C,M.value,_),M!==null&&(t&&M.alternate!==null&&b.delete(M.key===null?C:M.key),p=i(M,p,C),E===null?S=M:E.sibling=M,E=M);return t&&b.forEach(function(oe){return e(v,oe)}),ae&&fr(v,C),S}function k(v,p,m,_){if(typeof m=="object"&&m!==null&&m.type===Zr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case Do:e:{for(var S=m.key,E=p;E!==null;){if(E.key===S){if(S=m.type,S===Zr){if(E.tag===7){n(v,E.sibling),p=s(E,m.props.children),p.return=v,v=p;break e}}else if(E.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===kn&&Pp(S)===E.type){n(v,E.sibling),p=s(E,m.props),p.ref=ni(v,E,m),p.return=v,v=p;break e}n(v,E);break}else e(v,E);E=E.sibling}m.type===Zr?(p=Er(m.props.children,v.mode,_,m.key),p.return=v,v=p):(_=ya(m.type,m.key,m.props,null,v.mode,_),_.ref=ni(v,p,m),_.return=v,v=_)}return o(v);case Jr:e:{for(E=m.key;p!==null;){if(p.key===E)if(p.tag===4&&p.stateNode.containerInfo===m.containerInfo&&p.stateNode.implementation===m.implementation){n(v,p.sibling),p=s(p,m.children||[]),p.return=v,v=p;break e}else{n(v,p);break}else e(v,p);p=p.sibling}p=Bc(m,v.mode,_),p.return=v,v=p}return o(v);case kn:return E=m._init,k(v,p,E(m._payload),_)}if(hi(m))return y(v,p,m,_);if(Xs(m))return w(v,p,m,_);qo(v,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,p!==null&&p.tag===6?(n(v,p.sibling),p=s(p,m),p.return=v,v=p):(n(v,p),p=zc(m,v.mode,_),p.return=v,v=p),o(v)):n(v,p)}return k}var Cs=iv(!0),ov=iv(!1),Fa=ar(null),Ua=null,as=null,hh=null;function fh(){hh=as=Ua=null}function ph(t){var e=Fa.current;se(Fa),t._currentValue=e}function Ku(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ys(t,e){Ua=t,hh=as=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(qe=!0),t.firstContext=null)}function ft(t){var e=t._currentValue;if(hh!==t)if(t={context:t,memoizedValue:e,next:null},as===null){if(Ua===null)throw Error(N(308));as=t,Ua.dependencies={lanes:0,firstContext:t}}else as=as.next=t;return e}var vr=null;function mh(t){vr===null?vr=[t]:vr.push(t)}function av(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,mh(e)):(n.next=s.next,s.next=n),e.interleaved=n,hn(t,r)}function hn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var En=!1;function gh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function lv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function on(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Wn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,H&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,hn(t,n)}return s=r.interleaved,s===null?(e.next=e,mh(r)):(e.next=s.next,s.next=e),r.interleaved=e,hn(t,n)}function da(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,th(t,n)}}function Ap(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function $a(t,e,n,r){var s=t.updateQueue;En=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,a=s.shared.pending;if(a!==null){s.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?i=c:o.next=c,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(i!==null){var h=s.baseState;o=0,d=c=l=null,a=i;do{var f=a.lane,g=a.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,w=a;switch(f=e,g=n,w.tag){case 1:if(y=w.payload,typeof y=="function"){h=y.call(g,h,f);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,f=typeof y=="function"?y.call(g,h,f):y,f==null)break e;h=he({},h,f);break e;case 2:En=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=s.effects,f===null?s.effects=[a]:f.push(a))}else g={eventTime:g,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=g,l=h):d=d.next=g,o|=f;if(a=a.next,a===null){if(a=s.shared.pending,a===null)break;f=a,a=f.next,f.next=null,s.lastBaseUpdate=f,s.shared.pending=null}}while(!0);if(d===null&&(l=h),s.baseState=l,s.firstBaseUpdate=c,s.lastBaseUpdate=d,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);Tr|=o,t.lanes=o,t.memoizedState=h}}function Op(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(N(191,s));s.call(r)}}}var wo={},Wt=ar(wo),Hi=ar(wo),Ki=ar(wo);function _r(t){if(t===wo)throw Error(N(174));return t}function yh(t,e){switch(ne(Ki,e),ne(Hi,t),ne(Wt,wo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Cu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Cu(e,t)}se(Wt),ne(Wt,e)}function Is(){se(Wt),se(Hi),se(Ki)}function cv(t){_r(Ki.current);var e=_r(Wt.current),n=Cu(e,t.type);e!==n&&(ne(Hi,t),ne(Wt,n))}function vh(t){Hi.current===t&&(se(Wt),se(Hi))}var le=ar(0);function Wa(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Lc=[];function _h(){for(var t=0;t<Lc.length;t++)Lc[t]._workInProgressVersionPrimary=null;Lc.length=0}var ha=vn.ReactCurrentDispatcher,Dc=vn.ReactCurrentBatchConfig,Nr=0,de=null,ve=null,Se=null,za=!1,ki=!1,Gi=0,DE=0;function Oe(){throw Error(N(321))}function wh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!It(t[n],e[n]))return!1;return!0}function xh(t,e,n,r,s,i){if(Nr=i,de=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ha.current=t===null||t.memoizedState===null?WE:zE,t=n(r,s),ki){i=0;do{if(ki=!1,Gi=0,25<=i)throw Error(N(301));i+=1,Se=ve=null,e.updateQueue=null,ha.current=BE,t=n(r,s)}while(ki)}if(ha.current=Ba,e=ve!==null&&ve.next!==null,Nr=0,Se=ve=de=null,za=!1,e)throw Error(N(300));return t}function kh(){var t=Gi!==0;return Gi=0,t}function jt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Se===null?de.memoizedState=Se=t:Se=Se.next=t,Se}function pt(){if(ve===null){var t=de.alternate;t=t!==null?t.memoizedState:null}else t=ve.next;var e=Se===null?de.memoizedState:Se.next;if(e!==null)Se=e,ve=t;else{if(t===null)throw Error(N(310));ve=t,t={memoizedState:ve.memoizedState,baseState:ve.baseState,baseQueue:ve.baseQueue,queue:ve.queue,next:null},Se===null?de.memoizedState=Se=t:Se=Se.next=t}return Se}function qi(t,e){return typeof e=="function"?e(t):e}function Fc(t){var e=pt(),n=e.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=t;var r=ve,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var a=o=null,l=null,c=i;do{var d=c.lane;if((Nr&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var h={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,de.lanes|=d,Tr|=d}c=c.next}while(c!==null&&c!==i);l===null?o=r:l.next=a,It(r,e.memoizedState)||(qe=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,de.lanes|=i,Tr|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Uc(t){var e=pt(),n=e.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);It(i,e.memoizedState)||(qe=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function uv(){}function dv(t,e){var n=de,r=pt(),s=e(),i=!It(r.memoizedState,s);if(i&&(r.memoizedState=s,qe=!0),r=r.queue,Eh(pv.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||Se!==null&&Se.memoizedState.tag&1){if(n.flags|=2048,Qi(9,fv.bind(null,n,r,s,e),void 0,null),Ie===null)throw Error(N(349));Nr&30||hv(n,e,s)}return s}function hv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=de.updateQueue,e===null?(e={lastEffect:null,stores:null},de.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function fv(t,e,n,r){e.value=n,e.getSnapshot=r,mv(e)&&gv(t)}function pv(t,e,n){return n(function(){mv(e)&&gv(t)})}function mv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!It(t,n)}catch{return!0}}function gv(t){var e=hn(t,1);e!==null&&bt(e,t,1,-1)}function Mp(t){var e=jt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:t},e.queue=t,t=t.dispatch=$E.bind(null,de,t),[e.memoizedState,t]}function Qi(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=de.updateQueue,e===null?(e={lastEffect:null,stores:null},de.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function yv(){return pt().memoizedState}function fa(t,e,n,r){var s=jt();de.flags|=t,s.memoizedState=Qi(1|e,n,void 0,r===void 0?null:r)}function Al(t,e,n,r){var s=pt();r=r===void 0?null:r;var i=void 0;if(ve!==null){var o=ve.memoizedState;if(i=o.destroy,r!==null&&wh(r,o.deps)){s.memoizedState=Qi(e,n,i,r);return}}de.flags|=t,s.memoizedState=Qi(1|e,n,i,r)}function jp(t,e){return fa(8390656,8,t,e)}function Eh(t,e){return Al(2048,8,t,e)}function vv(t,e){return Al(4,2,t,e)}function _v(t,e){return Al(4,4,t,e)}function wv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function xv(t,e,n){return n=n!=null?n.concat([t]):null,Al(4,4,wv.bind(null,e,t),n)}function Sh(){}function kv(t,e){var n=pt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&wh(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Ev(t,e){var n=pt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&wh(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Sv(t,e,n){return Nr&21?(It(n,e)||(n=Ty(),de.lanes|=n,Tr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,qe=!0),t.memoizedState=n)}function FE(t,e){var n=Y;Y=n!==0&&4>n?n:4,t(!0);var r=Dc.transition;Dc.transition={};try{t(!1),e()}finally{Y=n,Dc.transition=r}}function bv(){return pt().memoizedState}function UE(t,e,n){var r=Bn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Cv(t))Iv(e,n);else if(n=av(t,e,n,r),n!==null){var s=ze();bt(n,t,r,s),Nv(n,e,r)}}function $E(t,e,n){var r=Bn(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Cv(t))Iv(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,a=i(o,n);if(s.hasEagerState=!0,s.eagerState=a,It(a,o)){var l=e.interleaved;l===null?(s.next=s,mh(e)):(s.next=l.next,l.next=s),e.interleaved=s;return}}catch{}finally{}n=av(t,e,s,r),n!==null&&(s=ze(),bt(n,t,r,s),Nv(n,e,r))}}function Cv(t){var e=t.alternate;return t===de||e!==null&&e===de}function Iv(t,e){ki=za=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Nv(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,th(t,n)}}var Ba={readContext:ft,useCallback:Oe,useContext:Oe,useEffect:Oe,useImperativeHandle:Oe,useInsertionEffect:Oe,useLayoutEffect:Oe,useMemo:Oe,useReducer:Oe,useRef:Oe,useState:Oe,useDebugValue:Oe,useDeferredValue:Oe,useTransition:Oe,useMutableSource:Oe,useSyncExternalStore:Oe,useId:Oe,unstable_isNewReconciler:!1},WE={readContext:ft,useCallback:function(t,e){return jt().memoizedState=[t,e===void 0?null:e],t},useContext:ft,useEffect:jp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,fa(4194308,4,wv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return fa(4194308,4,t,e)},useInsertionEffect:function(t,e){return fa(4,2,t,e)},useMemo:function(t,e){var n=jt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=jt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=UE.bind(null,de,t),[r.memoizedState,t]},useRef:function(t){var e=jt();return t={current:t},e.memoizedState=t},useState:Mp,useDebugValue:Sh,useDeferredValue:function(t){return jt().memoizedState=t},useTransition:function(){var t=Mp(!1),e=t[0];return t=FE.bind(null,t[1]),jt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=de,s=jt();if(ae){if(n===void 0)throw Error(N(407));n=n()}else{if(n=e(),Ie===null)throw Error(N(349));Nr&30||hv(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,jp(pv.bind(null,r,i,t),[t]),r.flags|=2048,Qi(9,fv.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=jt(),e=Ie.identifierPrefix;if(ae){var n=en,r=Zt;n=(r&~(1<<32-St(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Gi++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=DE++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},zE={readContext:ft,useCallback:kv,useContext:ft,useEffect:Eh,useImperativeHandle:xv,useInsertionEffect:vv,useLayoutEffect:_v,useMemo:Ev,useReducer:Fc,useRef:yv,useState:function(){return Fc(qi)},useDebugValue:Sh,useDeferredValue:function(t){var e=pt();return Sv(e,ve.memoizedState,t)},useTransition:function(){var t=Fc(qi)[0],e=pt().memoizedState;return[t,e]},useMutableSource:uv,useSyncExternalStore:dv,useId:bv,unstable_isNewReconciler:!1},BE={readContext:ft,useCallback:kv,useContext:ft,useEffect:Eh,useImperativeHandle:xv,useInsertionEffect:vv,useLayoutEffect:_v,useMemo:Ev,useReducer:Uc,useRef:yv,useState:function(){return Uc(qi)},useDebugValue:Sh,useDeferredValue:function(t){var e=pt();return ve===null?e.memoizedState=t:Sv(e,ve.memoizedState,t)},useTransition:function(){var t=Uc(qi)[0],e=pt().memoizedState;return[t,e]},useMutableSource:uv,useSyncExternalStore:dv,useId:bv,unstable_isNewReconciler:!1};function vt(t,e){if(t&&t.defaultProps){e=he({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Gu(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:he({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ol={isMounted:function(t){return(t=t._reactInternals)?Wr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ze(),s=Bn(t),i=on(r,s);i.payload=e,n!=null&&(i.callback=n),e=Wn(t,i,s),e!==null&&(bt(e,t,s,r),da(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ze(),s=Bn(t),i=on(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=Wn(t,i,s),e!==null&&(bt(e,t,s,r),da(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ze(),r=Bn(t),s=on(n,r);s.tag=2,e!=null&&(s.callback=e),e=Wn(t,s,r),e!==null&&(bt(e,t,r,n),da(e,t,r))}};function Lp(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!Wi(n,r)||!Wi(s,i):!0}function Tv(t,e,n){var r=!1,s=Zn,i=e.contextType;return typeof i=="object"&&i!==null?i=ft(i):(s=Xe(e)?Cr:De.current,r=e.contextTypes,i=(r=r!=null)?Ss(t,s):Zn),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ol,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function Dp(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ol.enqueueReplaceState(e,e.state,null)}function qu(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},gh(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=ft(i):(i=Xe(e)?Cr:De.current,s.context=Ss(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(Gu(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&Ol.enqueueReplaceState(s,s.state,null),$a(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function Ns(t,e){try{var n="",r=e;do n+=yk(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function $c(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Qu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var VE=typeof WeakMap=="function"?WeakMap:Map;function Rv(t,e,n){n=on(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ha||(Ha=!0,id=r),Qu(t,e)},n}function Pv(t,e,n){n=on(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){Qu(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Qu(t,e),typeof r!="function"&&(zn===null?zn=new Set([this]):zn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Fp(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new VE;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=sS.bind(null,t,e,n),e.then(t,t))}function Up(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function $p(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=on(-1,1),e.tag=2,Wn(n,e,1))),n.lanes|=1),t)}var HE=vn.ReactCurrentOwner,qe=!1;function $e(t,e,n,r){e.child=t===null?ov(e,null,n,r):Cs(e,t.child,n,r)}function Wp(t,e,n,r,s){n=n.render;var i=e.ref;return ys(e,s),r=xh(t,e,n,r,i,s),n=kh(),t!==null&&!qe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,fn(t,e,s)):(ae&&n&&ch(e),e.flags|=1,$e(t,e,r,s),e.child)}function zp(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!Ah(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,Av(t,e,i,r,s)):(t=ya(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Wi,n(o,r)&&t.ref===e.ref)return fn(t,e,s)}return e.flags|=1,t=Vn(i,r),t.ref=e.ref,t.return=e,e.child=t}function Av(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(Wi(i,r)&&t.ref===e.ref)if(qe=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(qe=!0);else return e.lanes=t.lanes,fn(t,e,s)}return Yu(t,e,n,r,s)}function Ov(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ne(cs,et),et|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ne(cs,et),et|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,ne(cs,et),et|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,ne(cs,et),et|=r;return $e(t,e,s,n),e.child}function Mv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Yu(t,e,n,r,s){var i=Xe(n)?Cr:De.current;return i=Ss(e,i),ys(e,s),n=xh(t,e,n,r,i,s),r=kh(),t!==null&&!qe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,fn(t,e,s)):(ae&&r&&ch(e),e.flags|=1,$e(t,e,n,s),e.child)}function Bp(t,e,n,r,s){if(Xe(n)){var i=!0;ja(e)}else i=!1;if(ys(e,s),e.stateNode===null)pa(t,e),Tv(e,n,r),qu(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=ft(c):(c=Xe(n)?Cr:De.current,c=Ss(e,c));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==c)&&Dp(e,o,r,c),En=!1;var f=e.memoizedState;o.state=f,$a(e,r,o,s),l=e.memoizedState,a!==r||f!==l||Ye.current||En?(typeof d=="function"&&(Gu(e,n,d,r),l=e.memoizedState),(a=En||Lp(e,n,a,r,f,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,lv(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:vt(e.type,a),o.props=c,h=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=ft(l):(l=Xe(n)?Cr:De.current,l=Ss(e,l));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||f!==l)&&Dp(e,o,r,l),En=!1,f=e.memoizedState,o.state=f,$a(e,r,o,s);var y=e.memoizedState;a!==h||f!==y||Ye.current||En?(typeof g=="function"&&(Gu(e,n,g,r),y=e.memoizedState),(c=En||Lp(e,n,c,r,f,y,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return Xu(t,e,n,r,i,s)}function Xu(t,e,n,r,s,i){Mv(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&Np(e,n,!1),fn(t,e,i);r=e.stateNode,HE.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Cs(e,t.child,null,i),e.child=Cs(e,null,a,i)):$e(t,e,a,i),e.memoizedState=r.state,s&&Np(e,n,!0),e.child}function jv(t){var e=t.stateNode;e.pendingContext?Ip(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Ip(t,e.context,!1),yh(t,e.containerInfo)}function Vp(t,e,n,r,s){return bs(),dh(s),e.flags|=256,$e(t,e,n,r),e.child}var Ju={dehydrated:null,treeContext:null,retryLane:0};function Zu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Lv(t,e,n){var r=e.pendingProps,s=le.current,i=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(s&2)!==0),a?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),ne(le,s&1),t===null)return Hu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Ll(o,r,0,null),t=Er(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=Zu(n),e.memoizedState=Ju,t):bh(e,o));if(s=t.memoizedState,s!==null&&(a=s.dehydrated,a!==null))return KE(t,e,o,r,a,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,a=s.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Vn(s,l),r.subtreeFlags=s.subtreeFlags&14680064),a!==null?i=Vn(a,i):(i=Er(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?Zu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=Ju,r}return i=t.child,t=i.sibling,r=Vn(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function bh(t,e){return e=Ll({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Qo(t,e,n,r){return r!==null&&dh(r),Cs(e,t.child,null,n),t=bh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function KE(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=$c(Error(N(422))),Qo(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=Ll({mode:"visible",children:r.children},s,0,null),i=Er(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&Cs(e,t.child,null,o),e.child.memoizedState=Zu(o),e.memoizedState=Ju,i);if(!(e.mode&1))return Qo(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(N(419)),r=$c(i,r,void 0),Qo(t,e,o,r)}if(a=(o&t.childLanes)!==0,qe||a){if(r=Ie,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,hn(t,s),bt(r,t,s,-1))}return Ph(),r=$c(Error(N(421))),Qo(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=iS.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,tt=$n(s.nextSibling),rt=e,ae=!0,wt=null,t!==null&&(lt[ct++]=Zt,lt[ct++]=en,lt[ct++]=Ir,Zt=t.id,en=t.overflow,Ir=e),e=bh(e,r.children),e.flags|=4096,e)}function Hp(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Ku(t.return,e,n)}function Wc(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function Dv(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if($e(t,e,r.children,n),r=le.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Hp(t,n,e);else if(t.tag===19)Hp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ne(le,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&Wa(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),Wc(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&Wa(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}Wc(e,!0,n,null,i);break;case"together":Wc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function pa(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function fn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Tr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(N(153));if(e.child!==null){for(t=e.child,n=Vn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Vn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function GE(t,e,n){switch(e.tag){case 3:jv(e),bs();break;case 5:cv(e);break;case 1:Xe(e.type)&&ja(e);break;case 4:yh(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;ne(Fa,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ne(le,le.current&1),e.flags|=128,null):n&e.child.childLanes?Lv(t,e,n):(ne(le,le.current&1),t=fn(t,e,n),t!==null?t.sibling:null);ne(le,le.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Dv(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),ne(le,le.current),r)break;return null;case 22:case 23:return e.lanes=0,Ov(t,e,n)}return fn(t,e,n)}var Fv,ed,Uv,$v;Fv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ed=function(){};Uv=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,_r(Wt.current);var i=null;switch(n){case"input":s=ku(t,s),r=ku(t,r),i=[];break;case"select":s=he({},s,{value:void 0}),r=he({},r,{value:void 0}),i=[];break;case"textarea":s=bu(t,s),r=bu(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Oa)}Iu(n,r);var o;n=null;for(c in s)if(!r.hasOwnProperty(c)&&s.hasOwnProperty(c)&&s[c]!=null)if(c==="style"){var a=s[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Mi.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var l=r[c];if(a=s!=null?s[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(i||(i=[]),i.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(i=i||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(i=i||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Mi.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&re("scroll",t),i||a===l||(i=[])):(i=i||[]).push(c,l))}n&&(i=i||[]).push("style",n);var c=i;(e.updateQueue=c)&&(e.flags|=4)}};$v=function(t,e,n,r){n!==r&&(e.flags|=4)};function ri(t,e){if(!ae)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Me(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function qE(t,e,n){var r=e.pendingProps;switch(uh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Me(e),null;case 1:return Xe(e.type)&&Ma(),Me(e),null;case 3:return r=e.stateNode,Is(),se(Ye),se(De),_h(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Go(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,wt!==null&&(ld(wt),wt=null))),ed(t,e),Me(e),null;case 5:vh(e);var s=_r(Ki.current);if(n=e.type,t!==null&&e.stateNode!=null)Uv(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(N(166));return Me(e),null}if(t=_r(Wt.current),Go(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[Lt]=e,r[Vi]=i,t=(e.mode&1)!==0,n){case"dialog":re("cancel",r),re("close",r);break;case"iframe":case"object":case"embed":re("load",r);break;case"video":case"audio":for(s=0;s<pi.length;s++)re(pi[s],r);break;case"source":re("error",r);break;case"img":case"image":case"link":re("error",r),re("load",r);break;case"details":re("toggle",r);break;case"input":ep(r,i),re("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},re("invalid",r);break;case"textarea":np(r,i),re("invalid",r)}Iu(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var a=i[o];o==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&Ko(r.textContent,a,t),s=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&Ko(r.textContent,a,t),s=["children",""+a]):Mi.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&re("scroll",r)}switch(n){case"input":Fo(r),tp(r,i,!0);break;case"textarea":Fo(r),rp(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Oa)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=py(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Lt]=e,t[Vi]=r,Fv(t,e,!1,!1),e.stateNode=t;e:{switch(o=Nu(n,r),n){case"dialog":re("cancel",t),re("close",t),s=r;break;case"iframe":case"object":case"embed":re("load",t),s=r;break;case"video":case"audio":for(s=0;s<pi.length;s++)re(pi[s],t);s=r;break;case"source":re("error",t),s=r;break;case"img":case"image":case"link":re("error",t),re("load",t),s=r;break;case"details":re("toggle",t),s=r;break;case"input":ep(t,r),s=ku(t,r),re("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=he({},r,{value:void 0}),re("invalid",t);break;case"textarea":np(t,r),s=bu(t,r),re("invalid",t);break;default:s=r}Iu(n,s),a=s;for(i in a)if(a.hasOwnProperty(i)){var l=a[i];i==="style"?yy(t,l):i==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&my(t,l)):i==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ji(t,l):typeof l=="number"&&ji(t,""+l):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Mi.hasOwnProperty(i)?l!=null&&i==="onScroll"&&re("scroll",t):l!=null&&Qd(t,i,l,o))}switch(n){case"input":Fo(t),tp(t,r,!1);break;case"textarea":Fo(t),rp(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Jn(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?fs(t,!!r.multiple,i,!1):r.defaultValue!=null&&fs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=Oa)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Me(e),null;case 6:if(t&&e.stateNode!=null)$v(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(N(166));if(n=_r(Ki.current),_r(Wt.current),Go(e)){if(r=e.stateNode,n=e.memoizedProps,r[Lt]=e,(i=r.nodeValue!==n)&&(t=rt,t!==null))switch(t.tag){case 3:Ko(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ko(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Lt]=e,e.stateNode=r}return Me(e),null;case 13:if(se(le),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ae&&tt!==null&&e.mode&1&&!(e.flags&128))sv(),bs(),e.flags|=98560,i=!1;else if(i=Go(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(N(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(N(317));i[Lt]=e}else bs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Me(e),i=!1}else wt!==null&&(ld(wt),wt=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||le.current&1?xe===0&&(xe=3):Ph())),e.updateQueue!==null&&(e.flags|=4),Me(e),null);case 4:return Is(),ed(t,e),t===null&&zi(e.stateNode.containerInfo),Me(e),null;case 10:return ph(e.type._context),Me(e),null;case 17:return Xe(e.type)&&Ma(),Me(e),null;case 19:if(se(le),i=e.memoizedState,i===null)return Me(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)ri(i,!1);else{if(xe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Wa(t),o!==null){for(e.flags|=128,ri(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ne(le,le.current&1|2),e.child}t=t.sibling}i.tail!==null&&ge()>Ts&&(e.flags|=128,r=!0,ri(i,!1),e.lanes=4194304)}else{if(!r)if(t=Wa(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ri(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!ae)return Me(e),null}else 2*ge()-i.renderingStartTime>Ts&&n!==1073741824&&(e.flags|=128,r=!0,ri(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=ge(),e.sibling=null,n=le.current,ne(le,r?n&1|2:n&1),e):(Me(e),null);case 22:case 23:return Rh(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?et&1073741824&&(Me(e),e.subtreeFlags&6&&(e.flags|=8192)):Me(e),null;case 24:return null;case 25:return null}throw Error(N(156,e.tag))}function QE(t,e){switch(uh(e),e.tag){case 1:return Xe(e.type)&&Ma(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Is(),se(Ye),se(De),_h(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return vh(e),null;case 13:if(se(le),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(N(340));bs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return se(le),null;case 4:return Is(),null;case 10:return ph(e.type._context),null;case 22:case 23:return Rh(),null;case 24:return null;default:return null}}var Yo=!1,je=!1,YE=typeof WeakSet=="function"?WeakSet:Set,O=null;function ls(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){fe(t,e,r)}else n.current=null}function td(t,e,n){try{n()}catch(r){fe(t,e,r)}}var Kp=!1;function XE(t,e){if(Fu=Ra,t=Hy(),lh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,d=0,h=t,f=null;t:for(;;){for(var g;h!==n||s!==0&&h.nodeType!==3||(a=o+s),h!==i||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(g=h.firstChild)!==null;)f=h,h=g;for(;;){if(h===t)break t;if(f===n&&++c===s&&(a=o),f===i&&++d===r&&(l=o),(g=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Uu={focusedElem:t,selectionRange:n},Ra=!1,O=e;O!==null;)if(e=O,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,O=t;else for(;O!==null;){e=O;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,k=y.memoizedState,v=e.stateNode,p=v.getSnapshotBeforeUpdate(e.elementType===e.type?w:vt(e.type,w),k);v.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(_){fe(e,e.return,_)}if(t=e.sibling,t!==null){t.return=e.return,O=t;break}O=e.return}return y=Kp,Kp=!1,y}function Ei(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&td(e,n,i)}s=s.next}while(s!==r)}}function Ml(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function nd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Wv(t){var e=t.alternate;e!==null&&(t.alternate=null,Wv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Lt],delete e[Vi],delete e[zu],delete e[OE],delete e[ME])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function zv(t){return t.tag===5||t.tag===3||t.tag===4}function Gp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||zv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function rd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Oa));else if(r!==4&&(t=t.child,t!==null))for(rd(t,e,n),t=t.sibling;t!==null;)rd(t,e,n),t=t.sibling}function sd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(sd(t,e,n),t=t.sibling;t!==null;)sd(t,e,n),t=t.sibling}var Re=null,_t=!1;function wn(t,e,n){for(n=n.child;n!==null;)Bv(t,e,n),n=n.sibling}function Bv(t,e,n){if($t&&typeof $t.onCommitFiberUnmount=="function")try{$t.onCommitFiberUnmount(Cl,n)}catch{}switch(n.tag){case 5:je||ls(n,e);case 6:var r=Re,s=_t;Re=null,wn(t,e,n),Re=r,_t=s,Re!==null&&(_t?(t=Re,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Re.removeChild(n.stateNode));break;case 18:Re!==null&&(_t?(t=Re,n=n.stateNode,t.nodeType===8?Mc(t.parentNode,n):t.nodeType===1&&Mc(t,n),Ui(t)):Mc(Re,n.stateNode));break;case 4:r=Re,s=_t,Re=n.stateNode.containerInfo,_t=!0,wn(t,e,n),Re=r,_t=s;break;case 0:case 11:case 14:case 15:if(!je&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&td(n,e,o),s=s.next}while(s!==r)}wn(t,e,n);break;case 1:if(!je&&(ls(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){fe(n,e,a)}wn(t,e,n);break;case 21:wn(t,e,n);break;case 22:n.mode&1?(je=(r=je)||n.memoizedState!==null,wn(t,e,n),je=r):wn(t,e,n);break;default:wn(t,e,n)}}function qp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new YE),e.forEach(function(r){var s=oS.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function yt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Re=a.stateNode,_t=!1;break e;case 3:Re=a.stateNode.containerInfo,_t=!0;break e;case 4:Re=a.stateNode.containerInfo,_t=!0;break e}a=a.return}if(Re===null)throw Error(N(160));Bv(i,o,s),Re=null,_t=!1;var l=s.alternate;l!==null&&(l.return=null),s.return=null}catch(c){fe(s,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Vv(e,t),e=e.sibling}function Vv(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(yt(e,t),Ot(t),r&4){try{Ei(3,t,t.return),Ml(3,t)}catch(w){fe(t,t.return,w)}try{Ei(5,t,t.return)}catch(w){fe(t,t.return,w)}}break;case 1:yt(e,t),Ot(t),r&512&&n!==null&&ls(n,n.return);break;case 5:if(yt(e,t),Ot(t),r&512&&n!==null&&ls(n,n.return),t.flags&32){var s=t.stateNode;try{ji(s,"")}catch(w){fe(t,t.return,w)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&hy(s,i),Nu(a,o);var c=Nu(a,i);for(o=0;o<l.length;o+=2){var d=l[o],h=l[o+1];d==="style"?yy(s,h):d==="dangerouslySetInnerHTML"?my(s,h):d==="children"?ji(s,h):Qd(s,d,h,c)}switch(a){case"input":Eu(s,i);break;case"textarea":fy(s,i);break;case"select":var f=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var g=i.value;g!=null?fs(s,!!i.multiple,g,!1):f!==!!i.multiple&&(i.defaultValue!=null?fs(s,!!i.multiple,i.defaultValue,!0):fs(s,!!i.multiple,i.multiple?[]:"",!1))}s[Vi]=i}catch(w){fe(t,t.return,w)}}break;case 6:if(yt(e,t),Ot(t),r&4){if(t.stateNode===null)throw Error(N(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(w){fe(t,t.return,w)}}break;case 3:if(yt(e,t),Ot(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ui(e.containerInfo)}catch(w){fe(t,t.return,w)}break;case 4:yt(e,t),Ot(t);break;case 13:yt(e,t),Ot(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(Nh=ge())),r&4&&qp(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(je=(c=je)||d,yt(e,t),je=c):yt(e,t),Ot(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(O=t,d=t.child;d!==null;){for(h=O=d;O!==null;){switch(f=O,g=f.child,f.tag){case 0:case 11:case 14:case 15:Ei(4,f,f.return);break;case 1:ls(f,f.return);var y=f.stateNode;if(typeof y.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(w){fe(r,n,w)}}break;case 5:ls(f,f.return);break;case 22:if(f.memoizedState!==null){Yp(h);continue}}g!==null?(g.return=f,O=g):Yp(h)}d=d.sibling}e:for(d=null,h=t;;){if(h.tag===5){if(d===null){d=h;try{s=h.stateNode,c?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=gy("display",o))}catch(w){fe(t,t.return,w)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(w){fe(t,t.return,w)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:yt(e,t),Ot(t),r&4&&qp(t);break;case 21:break;default:yt(e,t),Ot(t)}}function Ot(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(zv(n)){var r=n;break e}n=n.return}throw Error(N(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(ji(s,""),r.flags&=-33);var i=Gp(t);sd(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Gp(t);rd(t,a,o);break;default:throw Error(N(161))}}catch(l){fe(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function JE(t,e,n){O=t,Hv(t)}function Hv(t,e,n){for(var r=(t.mode&1)!==0;O!==null;){var s=O,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||Yo;if(!o){var a=s.alternate,l=a!==null&&a.memoizedState!==null||je;a=Yo;var c=je;if(Yo=o,(je=l)&&!c)for(O=s;O!==null;)o=O,l=o.child,o.tag===22&&o.memoizedState!==null?Xp(s):l!==null?(l.return=o,O=l):Xp(s);for(;i!==null;)O=i,Hv(i),i=i.sibling;O=s,Yo=a,je=c}Qp(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,O=i):Qp(t)}}function Qp(t){for(;O!==null;){var e=O;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:je||Ml(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!je)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:vt(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&Op(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Op(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&Ui(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}je||e.flags&512&&nd(e)}catch(f){fe(e,e.return,f)}}if(e===t){O=null;break}if(n=e.sibling,n!==null){n.return=e.return,O=n;break}O=e.return}}function Yp(t){for(;O!==null;){var e=O;if(e===t){O=null;break}var n=e.sibling;if(n!==null){n.return=e.return,O=n;break}O=e.return}}function Xp(t){for(;O!==null;){var e=O;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ml(4,e)}catch(l){fe(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(l){fe(e,s,l)}}var i=e.return;try{nd(e)}catch(l){fe(e,i,l)}break;case 5:var o=e.return;try{nd(e)}catch(l){fe(e,o,l)}}}catch(l){fe(e,e.return,l)}if(e===t){O=null;break}var a=e.sibling;if(a!==null){a.return=e.return,O=a;break}O=e.return}}var ZE=Math.ceil,Va=vn.ReactCurrentDispatcher,Ch=vn.ReactCurrentOwner,ht=vn.ReactCurrentBatchConfig,H=0,Ie=null,ye=null,Pe=0,et=0,cs=ar(0),xe=0,Yi=null,Tr=0,jl=0,Ih=0,Si=null,Ge=null,Nh=0,Ts=1/0,Yt=null,Ha=!1,id=null,zn=null,Xo=!1,On=null,Ka=0,bi=0,od=null,ma=-1,ga=0;function ze(){return H&6?ge():ma!==-1?ma:ma=ge()}function Bn(t){return t.mode&1?H&2&&Pe!==0?Pe&-Pe:LE.transition!==null?(ga===0&&(ga=Ty()),ga):(t=Y,t!==0||(t=window.event,t=t===void 0?16:Ly(t.type)),t):1}function bt(t,e,n,r){if(50<bi)throw bi=0,od=null,Error(N(185));yo(t,n,r),(!(H&2)||t!==Ie)&&(t===Ie&&(!(H&2)&&(jl|=n),xe===4&&bn(t,Pe)),Je(t,r),n===1&&H===0&&!(e.mode&1)&&(Ts=ge()+500,Pl&&lr()))}function Je(t,e){var n=t.callbackNode;Lk(t,e);var r=Ta(t,t===Ie?Pe:0);if(r===0)n!==null&&op(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&op(n),e===1)t.tag===0?jE(Jp.bind(null,t)):tv(Jp.bind(null,t)),PE(function(){!(H&6)&&lr()}),n=null;else{switch(Ry(r)){case 1:n=eh;break;case 4:n=Iy;break;case 16:n=Na;break;case 536870912:n=Ny;break;default:n=Na}n=Zv(n,Kv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Kv(t,e){if(ma=-1,ga=0,H&6)throw Error(N(327));var n=t.callbackNode;if(vs()&&t.callbackNode!==n)return null;var r=Ta(t,t===Ie?Pe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Ga(t,r);else{e=r;var s=H;H|=2;var i=qv();(Ie!==t||Pe!==e)&&(Yt=null,Ts=ge()+500,kr(t,e));do try{nS();break}catch(a){Gv(t,a)}while(!0);fh(),Va.current=i,H=s,ye!==null?e=0:(Ie=null,Pe=0,e=xe)}if(e!==0){if(e===2&&(s=Ou(t),s!==0&&(r=s,e=ad(t,s))),e===1)throw n=Yi,kr(t,0),bn(t,r),Je(t,ge()),n;if(e===6)bn(t,r);else{if(s=t.current.alternate,!(r&30)&&!eS(s)&&(e=Ga(t,r),e===2&&(i=Ou(t),i!==0&&(r=i,e=ad(t,i))),e===1))throw n=Yi,kr(t,0),bn(t,r),Je(t,ge()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(N(345));case 2:pr(t,Ge,Yt);break;case 3:if(bn(t,r),(r&130023424)===r&&(e=Nh+500-ge(),10<e)){if(Ta(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){ze(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=Wu(pr.bind(null,t,Ge,Yt),e);break}pr(t,Ge,Yt);break;case 4:if(bn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-St(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=ge()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ZE(r/1960))-r,10<r){t.timeoutHandle=Wu(pr.bind(null,t,Ge,Yt),r);break}pr(t,Ge,Yt);break;case 5:pr(t,Ge,Yt);break;default:throw Error(N(329))}}}return Je(t,ge()),t.callbackNode===n?Kv.bind(null,t):null}function ad(t,e){var n=Si;return t.current.memoizedState.isDehydrated&&(kr(t,e).flags|=256),t=Ga(t,e),t!==2&&(e=Ge,Ge=n,e!==null&&ld(e)),t}function ld(t){Ge===null?Ge=t:Ge.push.apply(Ge,t)}function eS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!It(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function bn(t,e){for(e&=~Ih,e&=~jl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-St(e),r=1<<n;t[n]=-1,e&=~r}}function Jp(t){if(H&6)throw Error(N(327));vs();var e=Ta(t,0);if(!(e&1))return Je(t,ge()),null;var n=Ga(t,e);if(t.tag!==0&&n===2){var r=Ou(t);r!==0&&(e=r,n=ad(t,r))}if(n===1)throw n=Yi,kr(t,0),bn(t,e),Je(t,ge()),n;if(n===6)throw Error(N(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,pr(t,Ge,Yt),Je(t,ge()),null}function Th(t,e){var n=H;H|=1;try{return t(e)}finally{H=n,H===0&&(Ts=ge()+500,Pl&&lr())}}function Rr(t){On!==null&&On.tag===0&&!(H&6)&&vs();var e=H;H|=1;var n=ht.transition,r=Y;try{if(ht.transition=null,Y=1,t)return t()}finally{Y=r,ht.transition=n,H=e,!(H&6)&&lr()}}function Rh(){et=cs.current,se(cs)}function kr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,RE(n)),ye!==null)for(n=ye.return;n!==null;){var r=n;switch(uh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ma();break;case 3:Is(),se(Ye),se(De),_h();break;case 5:vh(r);break;case 4:Is();break;case 13:se(le);break;case 19:se(le);break;case 10:ph(r.type._context);break;case 22:case 23:Rh()}n=n.return}if(Ie=t,ye=t=Vn(t.current,null),Pe=et=e,xe=0,Yi=null,Ih=jl=Tr=0,Ge=Si=null,vr!==null){for(e=0;e<vr.length;e++)if(n=vr[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}vr=null}return t}function Gv(t,e){do{var n=ye;try{if(fh(),ha.current=Ba,za){for(var r=de.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}za=!1}if(Nr=0,Se=ve=de=null,ki=!1,Gi=0,Ch.current=null,n===null||n.return===null){xe=1,Yi=e,ye=null;break}e:{var i=t,o=n.return,a=n,l=e;if(e=Pe,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=Up(o);if(g!==null){g.flags&=-257,$p(g,o,a,i,e),g.mode&1&&Fp(i,c,e),e=g,l=c;var y=e.updateQueue;if(y===null){var w=new Set;w.add(l),e.updateQueue=w}else y.add(l);break e}else{if(!(e&1)){Fp(i,c,e),Ph();break e}l=Error(N(426))}}else if(ae&&a.mode&1){var k=Up(o);if(k!==null){!(k.flags&65536)&&(k.flags|=256),$p(k,o,a,i,e),dh(Ns(l,a));break e}}i=l=Ns(l,a),xe!==4&&(xe=2),Si===null?Si=[i]:Si.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var v=Rv(i,l,e);Ap(i,v);break e;case 1:a=l;var p=i.type,m=i.stateNode;if(!(i.flags&128)&&(typeof p.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(zn===null||!zn.has(m)))){i.flags|=65536,e&=-e,i.lanes|=e;var _=Pv(i,a,e);Ap(i,_);break e}}i=i.return}while(i!==null)}Yv(n)}catch(S){e=S,ye===n&&n!==null&&(ye=n=n.return);continue}break}while(!0)}function qv(){var t=Va.current;return Va.current=Ba,t===null?Ba:t}function Ph(){(xe===0||xe===3||xe===2)&&(xe=4),Ie===null||!(Tr&268435455)&&!(jl&268435455)||bn(Ie,Pe)}function Ga(t,e){var n=H;H|=2;var r=qv();(Ie!==t||Pe!==e)&&(Yt=null,kr(t,e));do try{tS();break}catch(s){Gv(t,s)}while(!0);if(fh(),H=n,Va.current=r,ye!==null)throw Error(N(261));return Ie=null,Pe=0,xe}function tS(){for(;ye!==null;)Qv(ye)}function nS(){for(;ye!==null&&!Ik();)Qv(ye)}function Qv(t){var e=Jv(t.alternate,t,et);t.memoizedProps=t.pendingProps,e===null?Yv(t):ye=e,Ch.current=null}function Yv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=QE(n,e),n!==null){n.flags&=32767,ye=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{xe=6,ye=null;return}}else if(n=qE(n,e,et),n!==null){ye=n;return}if(e=e.sibling,e!==null){ye=e;return}ye=e=t}while(e!==null);xe===0&&(xe=5)}function pr(t,e,n){var r=Y,s=ht.transition;try{ht.transition=null,Y=1,rS(t,e,n,r)}finally{ht.transition=s,Y=r}return null}function rS(t,e,n,r){do vs();while(On!==null);if(H&6)throw Error(N(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(N(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(Dk(t,i),t===Ie&&(ye=Ie=null,Pe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Xo||(Xo=!0,Zv(Na,function(){return vs(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=ht.transition,ht.transition=null;var o=Y;Y=1;var a=H;H|=4,Ch.current=null,XE(t,n),Vv(n,t),EE(Uu),Ra=!!Fu,Uu=Fu=null,t.current=n,JE(n),Nk(),H=a,Y=o,ht.transition=i}else t.current=n;if(Xo&&(Xo=!1,On=t,Ka=s),i=t.pendingLanes,i===0&&(zn=null),Pk(n.stateNode),Je(t,ge()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(Ha)throw Ha=!1,t=id,id=null,t;return Ka&1&&t.tag!==0&&vs(),i=t.pendingLanes,i&1?t===od?bi++:(bi=0,od=t):bi=0,lr(),null}function vs(){if(On!==null){var t=Ry(Ka),e=ht.transition,n=Y;try{if(ht.transition=null,Y=16>t?16:t,On===null)var r=!1;else{if(t=On,On=null,Ka=0,H&6)throw Error(N(331));var s=H;for(H|=4,O=t.current;O!==null;){var i=O,o=i.child;if(O.flags&16){var a=i.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(O=c;O!==null;){var d=O;switch(d.tag){case 0:case 11:case 15:Ei(8,d,i)}var h=d.child;if(h!==null)h.return=d,O=h;else for(;O!==null;){d=O;var f=d.sibling,g=d.return;if(Wv(d),d===c){O=null;break}if(f!==null){f.return=g,O=f;break}O=g}}}var y=i.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var k=w.sibling;w.sibling=null,w=k}while(w!==null)}}O=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,O=o;else e:for(;O!==null;){if(i=O,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Ei(9,i,i.return)}var v=i.sibling;if(v!==null){v.return=i.return,O=v;break e}O=i.return}}var p=t.current;for(O=p;O!==null;){o=O;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,O=m;else e:for(o=p;O!==null;){if(a=O,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ml(9,a)}}catch(S){fe(a,a.return,S)}if(a===o){O=null;break e}var _=a.sibling;if(_!==null){_.return=a.return,O=_;break e}O=a.return}}if(H=s,lr(),$t&&typeof $t.onPostCommitFiberRoot=="function")try{$t.onPostCommitFiberRoot(Cl,t)}catch{}r=!0}return r}finally{Y=n,ht.transition=e}}return!1}function Zp(t,e,n){e=Ns(n,e),e=Rv(t,e,1),t=Wn(t,e,1),e=ze(),t!==null&&(yo(t,1,e),Je(t,e))}function fe(t,e,n){if(t.tag===3)Zp(t,t,n);else for(;e!==null;){if(e.tag===3){Zp(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(zn===null||!zn.has(r))){t=Ns(n,t),t=Pv(e,t,1),e=Wn(e,t,1),t=ze(),e!==null&&(yo(e,1,t),Je(e,t));break}}e=e.return}}function sS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ze(),t.pingedLanes|=t.suspendedLanes&n,Ie===t&&(Pe&n)===n&&(xe===4||xe===3&&(Pe&130023424)===Pe&&500>ge()-Nh?kr(t,0):Ih|=n),Je(t,e)}function Xv(t,e){e===0&&(t.mode&1?(e=Wo,Wo<<=1,!(Wo&130023424)&&(Wo=4194304)):e=1);var n=ze();t=hn(t,e),t!==null&&(yo(t,e,n),Je(t,n))}function iS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Xv(t,n)}function oS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(N(314))}r!==null&&r.delete(e),Xv(t,n)}var Jv;Jv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ye.current)qe=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return qe=!1,GE(t,e,n);qe=!!(t.flags&131072)}else qe=!1,ae&&e.flags&1048576&&nv(e,Da,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;pa(t,e),t=e.pendingProps;var s=Ss(e,De.current);ys(e,n),s=xh(null,e,r,t,s,n);var i=kh();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Xe(r)?(i=!0,ja(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,gh(e),s.updater=Ol,e.stateNode=s,s._reactInternals=e,qu(e,r,t,n),e=Xu(null,e,r,!0,i,n)):(e.tag=0,ae&&i&&ch(e),$e(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(pa(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=lS(r),t=vt(r,t),s){case 0:e=Yu(null,e,r,t,n);break e;case 1:e=Bp(null,e,r,t,n);break e;case 11:e=Wp(null,e,r,t,n);break e;case 14:e=zp(null,e,r,vt(r.type,t),n);break e}throw Error(N(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:vt(r,s),Yu(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:vt(r,s),Bp(t,e,r,s,n);case 3:e:{if(jv(e),t===null)throw Error(N(387));r=e.pendingProps,i=e.memoizedState,s=i.element,lv(t,e),$a(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=Ns(Error(N(423)),e),e=Vp(t,e,r,n,s);break e}else if(r!==s){s=Ns(Error(N(424)),e),e=Vp(t,e,r,n,s);break e}else for(tt=$n(e.stateNode.containerInfo.firstChild),rt=e,ae=!0,wt=null,n=ov(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(bs(),r===s){e=fn(t,e,n);break e}$e(t,e,r,n)}e=e.child}return e;case 5:return cv(e),t===null&&Hu(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,$u(r,s)?o=null:i!==null&&$u(r,i)&&(e.flags|=32),Mv(t,e),$e(t,e,o,n),e.child;case 6:return t===null&&Hu(e),null;case 13:return Lv(t,e,n);case 4:return yh(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Cs(e,null,r,n):$e(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:vt(r,s),Wp(t,e,r,s,n);case 7:return $e(t,e,e.pendingProps,n),e.child;case 8:return $e(t,e,e.pendingProps.children,n),e.child;case 12:return $e(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,ne(Fa,r._currentValue),r._currentValue=o,i!==null)if(It(i.value,o)){if(i.children===s.children&&!Ye.current){e=fn(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var a=i.dependencies;if(a!==null){o=i.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(i.tag===1){l=on(-1,n&-n),l.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}i.lanes|=n,l=i.alternate,l!==null&&(l.lanes|=n),Ku(i.return,n,e),a.lanes|=n;break}l=l.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(N(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Ku(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}$e(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,ys(e,n),s=ft(s),r=r(s),e.flags|=1,$e(t,e,r,n),e.child;case 14:return r=e.type,s=vt(r,e.pendingProps),s=vt(r.type,s),zp(t,e,r,s,n);case 15:return Av(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:vt(r,s),pa(t,e),e.tag=1,Xe(r)?(t=!0,ja(e)):t=!1,ys(e,n),Tv(e,r,s),qu(e,r,s,n),Xu(null,e,r,!0,t,n);case 19:return Dv(t,e,n);case 22:return Ov(t,e,n)}throw Error(N(156,e.tag))};function Zv(t,e){return Cy(t,e)}function aS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ut(t,e,n,r){return new aS(t,e,n,r)}function Ah(t){return t=t.prototype,!(!t||!t.isReactComponent)}function lS(t){if(typeof t=="function")return Ah(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Xd)return 11;if(t===Jd)return 14}return 2}function Vn(t,e){var n=t.alternate;return n===null?(n=ut(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ya(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")Ah(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Zr:return Er(n.children,s,i,e);case Yd:o=8,s|=8;break;case vu:return t=ut(12,n,e,s|2),t.elementType=vu,t.lanes=i,t;case _u:return t=ut(13,n,e,s),t.elementType=_u,t.lanes=i,t;case wu:return t=ut(19,n,e,s),t.elementType=wu,t.lanes=i,t;case cy:return Ll(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ay:o=10;break e;case ly:o=9;break e;case Xd:o=11;break e;case Jd:o=14;break e;case kn:o=16,r=null;break e}throw Error(N(130,t==null?t:typeof t,""))}return e=ut(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function Er(t,e,n,r){return t=ut(7,t,r,e),t.lanes=n,t}function Ll(t,e,n,r){return t=ut(22,t,r,e),t.elementType=cy,t.lanes=n,t.stateNode={isHidden:!1},t}function zc(t,e,n){return t=ut(6,t,null,e),t.lanes=n,t}function Bc(t,e,n){return e=ut(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function cS(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ec(0),this.expirationTimes=Ec(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ec(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Oh(t,e,n,r,s,i,o,a,l){return t=new cS(t,e,n,a,l),e===1?(e=1,i===!0&&(e|=8)):e=0,i=ut(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},gh(i),t}function uS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Jr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function e0(t){if(!t)return Zn;t=t._reactInternals;e:{if(Wr(t)!==t||t.tag!==1)throw Error(N(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Xe(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(N(171))}if(t.tag===1){var n=t.type;if(Xe(n))return ev(t,n,e)}return e}function t0(t,e,n,r,s,i,o,a,l){return t=Oh(n,r,!0,t,s,i,o,a,l),t.context=e0(null),n=t.current,r=ze(),s=Bn(n),i=on(r,s),i.callback=e??null,Wn(n,i,s),t.current.lanes=s,yo(t,s,r),Je(t,r),t}function Dl(t,e,n,r){var s=e.current,i=ze(),o=Bn(s);return n=e0(n),e.context===null?e.context=n:e.pendingContext=n,e=on(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Wn(s,e,o),t!==null&&(bt(t,s,o,i),da(t,s,o)),o}function qa(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function em(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Mh(t,e){em(t,e),(t=t.alternate)&&em(t,e)}function dS(){return null}var n0=typeof reportError=="function"?reportError:function(t){console.error(t)};function jh(t){this._internalRoot=t}Fl.prototype.render=jh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(N(409));Dl(t,e,null,null)};Fl.prototype.unmount=jh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Rr(function(){Dl(null,t,null,null)}),e[dn]=null}};function Fl(t){this._internalRoot=t}Fl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Oy();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Sn.length&&e!==0&&e<Sn[n].priority;n++);Sn.splice(n,0,t),n===0&&jy(t)}};function Lh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ul(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function tm(){}function hS(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var c=qa(o);i.call(c)}}var o=t0(e,r,t,0,null,!1,!1,"",tm);return t._reactRootContainer=o,t[dn]=o.current,zi(t.nodeType===8?t.parentNode:t),Rr(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var a=r;r=function(){var c=qa(l);a.call(c)}}var l=Oh(t,0,!1,null,null,!1,!1,"",tm);return t._reactRootContainer=l,t[dn]=l.current,zi(t.nodeType===8?t.parentNode:t),Rr(function(){Dl(e,l,n,r)}),l}function $l(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var a=s;s=function(){var l=qa(o);a.call(l)}}Dl(e,o,t,s)}else o=hS(n,e,t,s,r);return qa(o)}Py=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=fi(e.pendingLanes);n!==0&&(th(e,n|1),Je(e,ge()),!(H&6)&&(Ts=ge()+500,lr()))}break;case 13:Rr(function(){var r=hn(t,1);if(r!==null){var s=ze();bt(r,t,1,s)}}),Mh(t,1)}};nh=function(t){if(t.tag===13){var e=hn(t,134217728);if(e!==null){var n=ze();bt(e,t,134217728,n)}Mh(t,134217728)}};Ay=function(t){if(t.tag===13){var e=Bn(t),n=hn(t,e);if(n!==null){var r=ze();bt(n,t,e,r)}Mh(t,e)}};Oy=function(){return Y};My=function(t,e){var n=Y;try{return Y=t,e()}finally{Y=n}};Ru=function(t,e,n){switch(e){case"input":if(Eu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=Rl(r);if(!s)throw Error(N(90));dy(r),Eu(r,s)}}}break;case"textarea":fy(t,n);break;case"select":e=n.value,e!=null&&fs(t,!!n.multiple,e,!1)}};wy=Th;xy=Rr;var fS={usingClientEntryPoint:!1,Events:[_o,rs,Rl,vy,_y,Th]},si={findFiberByHostInstance:yr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},pS={bundleType:si.bundleType,version:si.version,rendererPackageName:si.rendererPackageName,rendererConfig:si.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:vn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Sy(t),t===null?null:t.stateNode},findFiberByHostInstance:si.findFiberByHostInstance||dS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Jo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jo.isDisabled&&Jo.supportsFiber)try{Cl=Jo.inject(pS),$t=Jo}catch{}}ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fS;ot.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Lh(e))throw Error(N(200));return uS(t,e,null,n)};ot.createRoot=function(t,e){if(!Lh(t))throw Error(N(299));var n=!1,r="",s=n0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=Oh(t,1,!1,null,null,n,!1,r,s),t[dn]=e.current,zi(t.nodeType===8?t.parentNode:t),new jh(e)};ot.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(N(188)):(t=Object.keys(t).join(","),Error(N(268,t)));return t=Sy(e),t=t===null?null:t.stateNode,t};ot.flushSync=function(t){return Rr(t)};ot.hydrate=function(t,e,n){if(!Ul(e))throw Error(N(200));return $l(null,t,e,!0,n)};ot.hydrateRoot=function(t,e,n){if(!Lh(t))throw Error(N(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=n0;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=t0(e,null,t,1,n??null,s,!1,i,o),t[dn]=e.current,zi(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new Fl(e)};ot.render=function(t,e,n){if(!Ul(e))throw Error(N(200));return $l(null,t,e,!1,n)};ot.unmountComponentAtNode=function(t){if(!Ul(t))throw Error(N(40));return t._reactRootContainer?(Rr(function(){$l(null,null,t,!1,function(){t._reactRootContainer=null,t[dn]=null})}),!0):!1};ot.unstable_batchedUpdates=Th;ot.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Ul(n))throw Error(N(200));if(t==null||t._reactInternals===void 0)throw Error(N(38));return $l(t,e,n,!1,r)};ot.version="18.3.1-next-f1338f8080-20240426";function r0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r0)}catch(t){console.error(t)}}r0(),ry.exports=ot;var mS=ry.exports,nm=mS;gu.createRoot=nm.createRoot,gu.hydrateRoot=nm.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xi(){return Xi=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Xi.apply(this,arguments)}var Mn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Mn||(Mn={}));const rm="popstate";function gS(t){t===void 0&&(t={});function e(r,s){let{pathname:i,search:o,hash:a}=r.location;return cd("",{pathname:i,search:o,hash:a},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(r,s){return typeof s=="string"?s:i0(s)}return vS(e,n,null,t)}function ke(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function s0(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function yS(){return Math.random().toString(36).substr(2,8)}function sm(t,e){return{usr:t.state,key:t.key,idx:e}}function cd(t,e,n,r){return n===void 0&&(n=null),Xi({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Ws(e):e,{state:n,key:e&&e.key||r||yS()})}function i0(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Ws(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function vS(t,e,n,r){r===void 0&&(r={});let{window:s=document.defaultView,v5Compat:i=!1}=r,o=s.history,a=Mn.Pop,l=null,c=d();c==null&&(c=0,o.replaceState(Xi({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function h(){a=Mn.Pop;let k=d(),v=k==null?null:k-c;c=k,l&&l({action:a,location:w.location,delta:v})}function f(k,v){a=Mn.Push;let p=cd(w.location,k,v);c=d()+1;let m=sm(p,c),_=w.createHref(p);try{o.pushState(m,"",_)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;s.location.assign(_)}i&&l&&l({action:a,location:w.location,delta:1})}function g(k,v){a=Mn.Replace;let p=cd(w.location,k,v);c=d();let m=sm(p,c),_=w.createHref(p);o.replaceState(m,"",_),i&&l&&l({action:a,location:w.location,delta:0})}function y(k){let v=s.location.origin!=="null"?s.location.origin:s.location.href,p=typeof k=="string"?k:i0(k);return p=p.replace(/ $/,"%20"),ke(v,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,v)}let w={get action(){return a},get location(){return t(s,o)},listen(k){if(l)throw new Error("A history only accepts one active listener");return s.addEventListener(rm,h),l=k,()=>{s.removeEventListener(rm,h),l=null}},createHref(k){return e(s,k)},createURL:y,encodeLocation(k){let v=y(k);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:f,replace:g,go(k){return o.go(k)}};return w}var im;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(im||(im={}));function _S(t,e,n){return n===void 0&&(n="/"),wS(t,e,n)}function wS(t,e,n,r){let s=typeof e=="string"?Ws(e):e,i=l0(s.pathname||"/",n);if(i==null)return null;let o=o0(t);xS(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let c=OS(i);a=RS(o[l],c)}return a}function o0(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let s=(i,o,a)=>{let l={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};l.relativePath.startsWith("/")&&(ke(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=Sr([r,l.relativePath]),d=n.concat(l);i.children&&i.children.length>0&&(ke(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),o0(i.children,e,d,c)),!(i.path==null&&!i.index)&&e.push({path:c,score:NS(c,i.index),routesMeta:d})};return t.forEach((i,o)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))s(i,o);else for(let l of a0(i.path))s(i,o,l)}),e}function a0(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,s=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return s?[i,""]:[i];let o=a0(r.join("/")),a=[];return a.push(...o.map(l=>l===""?i:[i,l].join("/"))),s&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function xS(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:TS(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const kS=/^:[\w-]+$/,ES=3,SS=2,bS=1,CS=10,IS=-2,om=t=>t==="*";function NS(t,e){let n=t.split("/"),r=n.length;return n.some(om)&&(r+=IS),e&&(r+=SS),n.filter(s=>!om(s)).reduce((s,i)=>s+(kS.test(i)?ES:i===""?bS:CS),r)}function TS(t,e){return t.length===e.length&&t.slice(0,-1).every((r,s)=>r===e[s])?t[t.length-1]-e[e.length-1]:0}function RS(t,e,n){let{routesMeta:r}=t,s={},i="/",o=[];for(let a=0;a<r.length;++a){let l=r[a],c=a===r.length-1,d=i==="/"?e:e.slice(i.length)||"/",h=PS({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},d),f=l.route;if(!h)return null;Object.assign(s,h.params),o.push({params:s,pathname:Sr([i,h.pathname]),pathnameBase:US(Sr([i,h.pathnameBase])),route:f}),h.pathnameBase!=="/"&&(i=Sr([i,h.pathnameBase]))}return o}function PS(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=AS(t.path,t.caseSensitive,t.end),s=e.match(n);if(!s)return null;let i=s[0],o=i.replace(/(.)\/+$/,"$1"),a=s.slice(1);return{params:r.reduce((c,d,h)=>{let{paramName:f,isOptional:g}=d;if(f==="*"){let w=a[h]||"";o=i.slice(0,i.length-w.length).replace(/(.)\/+$/,"$1")}const y=a[h];return g&&!y?c[f]=void 0:c[f]=(y||"").replace(/%2F/g,"/"),c},{}),pathname:i,pathnameBase:o,pattern:t}}function AS(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),s0(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],s="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),s+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?s+="\\/*$":t!==""&&t!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),r]}function OS(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return s0(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function l0(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function MS(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:s=""}=typeof t=="string"?Ws(t):t;return{pathname:n?n.startsWith("/")?n:jS(n,e):e,search:$S(r),hash:WS(s)}}function jS(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(s=>{s===".."?n.length>1&&n.pop():s!=="."&&n.push(s)}),n.length>1?n.join("/"):"/"}function Vc(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function LS(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function DS(t,e){let n=LS(t);return e?n.map((r,s)=>s===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function FS(t,e,n,r){r===void 0&&(r=!1);let s;typeof t=="string"?s=Ws(t):(s=Xi({},t),ke(!s.pathname||!s.pathname.includes("?"),Vc("?","pathname","search",s)),ke(!s.pathname||!s.pathname.includes("#"),Vc("#","pathname","hash",s)),ke(!s.search||!s.search.includes("#"),Vc("#","search","hash",s)));let i=t===""||s.pathname==="",o=i?"/":s.pathname,a;if(o==null)a=n;else{let h=e.length-1;if(!r&&o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),h-=1;s.pathname=f.join("/")}a=h>=0?e[h]:"/"}let l=MS(s,a),c=o&&o!=="/"&&o.endsWith("/"),d=(i||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||d)&&(l.pathname+="/"),l}const Sr=t=>t.join("/").replace(/\/\/+/g,"/"),US=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),$S=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,WS=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function zS(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const c0=["post","put","patch","delete"];new Set(c0);const BS=["get",...c0];new Set(BS);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ji(){return Ji=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ji.apply(this,arguments)}const Dh=x.createContext(null),VS=x.createContext(null),Wl=x.createContext(null),zl=x.createContext(null),zs=x.createContext({outlet:null,matches:[],isDataRoute:!1}),u0=x.createContext(null);function Bl(){return x.useContext(zl)!=null}function d0(){return Bl()||ke(!1),x.useContext(zl).location}function h0(t){x.useContext(Wl).static||x.useLayoutEffect(t)}function xo(){let{isDataRoute:t}=x.useContext(zs);return t?rb():HS()}function HS(){Bl()||ke(!1);let t=x.useContext(Dh),{basename:e,future:n,navigator:r}=x.useContext(Wl),{matches:s}=x.useContext(zs),{pathname:i}=d0(),o=JSON.stringify(DS(s,n.v7_relativeSplatPath)),a=x.useRef(!1);return h0(()=>{a.current=!0}),x.useCallback(function(c,d){if(d===void 0&&(d={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let h=FS(c,JSON.parse(o),i,d.relative==="path");t==null&&e!=="/"&&(h.pathname=h.pathname==="/"?e:Sr([e,h.pathname])),(d.replace?r.replace:r.push)(h,d.state,d)},[e,r,o,i,t])}function KS(t,e){return GS(t,e)}function GS(t,e,n,r){Bl()||ke(!1);let{navigator:s}=x.useContext(Wl),{matches:i}=x.useContext(zs),o=i[i.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let c=d0(),d;if(e){var h;let k=typeof e=="string"?Ws(e):e;l==="/"||(h=k.pathname)!=null&&h.startsWith(l)||ke(!1),d=k}else d=c;let f=d.pathname||"/",g=f;if(l!=="/"){let k=l.replace(/^\//,"").split("/");g="/"+f.replace(/^\//,"").split("/").slice(k.length).join("/")}let y=_S(t,{pathname:g}),w=JS(y&&y.map(k=>Object.assign({},k,{params:Object.assign({},a,k.params),pathname:Sr([l,s.encodeLocation?s.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?l:Sr([l,s.encodeLocation?s.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),i,n,r);return e&&w?x.createElement(zl.Provider,{value:{location:Ji({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Mn.Pop}},w):w}function qS(){let t=nb(),e=zS(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},e),n?x.createElement("pre",{style:s},n):null,null)}const QS=x.createElement(qS,null);class YS extends x.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?x.createElement(zs.Provider,{value:this.props.routeContext},x.createElement(u0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function XS(t){let{routeContext:e,match:n,children:r}=t,s=x.useContext(Dh);return s&&s.static&&s.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=n.route.id),x.createElement(zs.Provider,{value:e},r)}function JS(t,e,n,r){var s;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var i;if(!n)return null;if(n.errors)t=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(s=n)==null?void 0:s.errors;if(a!=null){let d=o.findIndex(h=>h.route.id&&(a==null?void 0:a[h.route.id])!==void 0);d>=0||ke(!1),o=o.slice(0,Math.min(o.length,d+1))}let l=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let h=o[d];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(c=d),h.route.id){let{loaderData:f,errors:g}=n,y=h.route.loader&&f[h.route.id]===void 0&&(!g||g[h.route.id]===void 0);if(h.route.lazy||y){l=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,h,f)=>{let g,y=!1,w=null,k=null;n&&(g=a&&h.route.id?a[h.route.id]:void 0,w=h.route.errorElement||QS,l&&(c<0&&f===0?(sb("route-fallback"),y=!0,k=null):c===f&&(y=!0,k=h.route.hydrateFallbackElement||null)));let v=e.concat(o.slice(0,f+1)),p=()=>{let m;return g?m=w:y?m=k:h.route.Component?m=x.createElement(h.route.Component,null):h.route.element?m=h.route.element:m=d,x.createElement(XS,{match:h,routeContext:{outlet:d,matches:v,isDataRoute:n!=null},children:m})};return n&&(h.route.ErrorBoundary||h.route.errorElement||f===0)?x.createElement(YS,{location:n.location,revalidation:n.revalidation,component:w,error:g,children:p(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):p()},null)}var f0=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(f0||{}),p0=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(p0||{});function ZS(t){let e=x.useContext(Dh);return e||ke(!1),e}function eb(t){let e=x.useContext(VS);return e||ke(!1),e}function tb(t){let e=x.useContext(zs);return e||ke(!1),e}function m0(t){let e=tb(),n=e.matches[e.matches.length-1];return n.route.id||ke(!1),n.route.id}function nb(){var t;let e=x.useContext(u0),n=eb(),r=m0();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function rb(){let{router:t}=ZS(f0.UseNavigateStable),e=m0(p0.UseNavigateStable),n=x.useRef(!1);return h0(()=>{n.current=!0}),x.useCallback(function(s,i){i===void 0&&(i={}),n.current&&(typeof s=="number"?t.navigate(s):t.navigate(s,Ji({fromRouteId:e},i)))},[t,e])}const am={};function sb(t,e,n){am[t]||(am[t]=!0)}function ib(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function va(t){ke(!1)}function ob(t){let{basename:e="/",children:n=null,location:r,navigationType:s=Mn.Pop,navigator:i,static:o=!1,future:a}=t;Bl()&&ke(!1);let l=e.replace(/^\/*/,"/"),c=x.useMemo(()=>({basename:l,navigator:i,static:o,future:Ji({v7_relativeSplatPath:!1},a)}),[l,a,i,o]);typeof r=="string"&&(r=Ws(r));let{pathname:d="/",search:h="",hash:f="",state:g=null,key:y="default"}=r,w=x.useMemo(()=>{let k=l0(d,l);return k==null?null:{location:{pathname:k,search:h,hash:f,state:g,key:y},navigationType:s}},[l,d,h,f,g,y,s]);return w==null?null:x.createElement(Wl.Provider,{value:c},x.createElement(zl.Provider,{children:n,value:w}))}function ab(t){let{children:e,location:n}=t;return KS(ud(e),n)}new Promise(()=>{});function ud(t,e){e===void 0&&(e=[]);let n=[];return x.Children.forEach(t,(r,s)=>{if(!x.isValidElement(r))return;let i=[...e,s];if(r.type===x.Fragment){n.push.apply(n,ud(r.props.children,i));return}r.type!==va&&ke(!1),!r.props.index||!r.props.children||ke(!1);let o={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=ud(r.props.children,i)),n.push(o)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const lb="6";try{window.__reactRouterVersion=lb}catch{}const cb="startTransition",lm=sk[cb];function ub(t){let{basename:e,children:n,future:r,window:s}=t,i=x.useRef();i.current==null&&(i.current=gS({window:s,v5Compat:!0}));let o=i.current,[a,l]=x.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},d=x.useCallback(h=>{c&&lm?lm(()=>l(h)):l(h)},[l,c]);return x.useLayoutEffect(()=>o.listen(d),[o,d]),x.useEffect(()=>ib(r),[r]),x.createElement(ob,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}var cm;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(cm||(cm={}));var um;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(um||(um={}));let db={data:""},hb=t=>typeof window=="object"?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||db,fb=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,pb=/\/\*[^]*?\*\/|  +/g,dm=/\n+/g,Cn=(t,e)=>{let n="",r="",s="";for(let i in t){let o=t[i];i[0]=="@"?i[1]=="i"?n=i+" "+o+";":r+=i[1]=="f"?Cn(o,i):i+"{"+Cn(o,i[1]=="k"?"":e)+"}":typeof o=="object"?r+=Cn(o,e?e.replace(/([^,])+/g,a=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,a):a?a+" "+l:l)):i):o!=null&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=Cn.p?Cn.p(i,o):i+":"+o+";")}return n+(e&&s?e+"{"+s+"}":s)+r},Qt={},g0=t=>{if(typeof t=="object"){let e="";for(let n in t)e+=n+g0(t[n]);return e}return t},mb=(t,e,n,r,s)=>{let i=g0(t),o=Qt[i]||(Qt[i]=(l=>{let c=0,d=11;for(;c<l.length;)d=101*d+l.charCodeAt(c++)>>>0;return"go"+d})(i));if(!Qt[o]){let l=i!==t?t:(c=>{let d,h,f=[{}];for(;d=fb.exec(c.replace(pb,""));)d[4]?f.shift():d[3]?(h=d[3].replace(dm," ").trim(),f.unshift(f[0][h]=f[0][h]||{})):f[0][d[1]]=d[2].replace(dm," ").trim();return f[0]})(t);Qt[o]=Cn(s?{["@keyframes "+o]:l}:l,n?"":"."+o)}let a=n&&Qt.g?Qt.g:null;return n&&(Qt.g=Qt[o]),((l,c,d,h)=>{h?c.data=c.data.replace(h,l):c.data.indexOf(l)===-1&&(c.data=d?l+c.data:c.data+l)})(Qt[o],e,r,a),o},gb=(t,e,n)=>t.reduce((r,s,i)=>{let o=e[i];if(o&&o.call){let a=o(n),l=a&&a.props&&a.props.className||/^go/.test(a)&&a;o=l?"."+l:a&&typeof a=="object"?a.props?"":Cn(a,""):a===!1?"":a}return r+s+(o??"")},"");function Vl(t){let e=this||{},n=t.call?t(e.p):t;return mb(n.unshift?n.raw?gb(n,[].slice.call(arguments,1),e.p):n.reduce((r,s)=>Object.assign(r,s&&s.call?s(e.p):s),{}):n,hb(e.target),e.g,e.o,e.k)}let y0,dd,hd;Vl.bind({g:1});let pn=Vl.bind({k:1});function yb(t,e,n,r){Cn.p=e,y0=t,dd=n,hd=r}function cr(t,e){let n=this||{};return function(){let r=arguments;function s(i,o){let a=Object.assign({},i),l=a.className||s.className;n.p=Object.assign({theme:dd&&dd()},a),n.o=/ *go\d+/.test(l),a.className=Vl.apply(n,r)+(l?" "+l:"");let c=t;return t[0]&&(c=a.as||t,delete a.as),hd&&c[0]&&hd(a),y0(c,a)}return s}}var vb=t=>typeof t=="function",Qa=(t,e)=>vb(t)?t(e):t,_b=(()=>{let t=0;return()=>(++t).toString()})(),v0=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),wb=20,Fh="default",_0=(t,e)=>{let{toastLimit:n}=t.settings;switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,n)};case 1:return{...t,toasts:t.toasts.map(o=>o.id===e.toast.id?{...o,...e.toast}:o)};case 2:let{toast:r}=e;return _0(t,{type:t.toasts.find(o=>o.id===r.id)?1:0,toast:r});case 3:let{toastId:s}=e;return{...t,toasts:t.toasts.map(o=>o.id===s||s===void 0?{...o,dismissed:!0,visible:!1}:o)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(o=>o.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let i=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(o=>({...o,pauseDuration:o.pauseDuration+i}))}}},_a=[],w0={toasts:[],pausedAt:void 0,settings:{toastLimit:wb}},Dt={},x0=(t,e=Fh)=>{Dt[e]=_0(Dt[e]||w0,t),_a.forEach(([n,r])=>{n===e&&r(Dt[e])})},k0=t=>Object.keys(Dt).forEach(e=>x0(t,e)),xb=t=>Object.keys(Dt).find(e=>Dt[e].toasts.some(n=>n.id===t)),Hl=(t=Fh)=>e=>{x0(e,t)},kb={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},Eb=(t={},e=Fh)=>{let[n,r]=x.useState(Dt[e]||w0),s=x.useRef(Dt[e]);x.useEffect(()=>(s.current!==Dt[e]&&r(Dt[e]),_a.push([e,r]),()=>{let o=_a.findIndex(([a])=>a===e);o>-1&&_a.splice(o,1)}),[e]);let i=n.toasts.map(o=>{var a,l,c;return{...t,...t[o.type],...o,removeDelay:o.removeDelay||((a=t[o.type])==null?void 0:a.removeDelay)||(t==null?void 0:t.removeDelay),duration:o.duration||((l=t[o.type])==null?void 0:l.duration)||(t==null?void 0:t.duration)||kb[o.type],style:{...t.style,...(c=t[o.type])==null?void 0:c.style,...o.style}}});return{...n,toasts:i}},Sb=(t,e="blank",n)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...n,id:(n==null?void 0:n.id)||_b()}),ko=t=>(e,n)=>{let r=Sb(e,t,n);return Hl(r.toasterId||xb(r.id))({type:2,toast:r}),r.id},_e=(t,e)=>ko("blank")(t,e);_e.error=ko("error");_e.success=ko("success");_e.loading=ko("loading");_e.custom=ko("custom");_e.dismiss=(t,e)=>{let n={type:3,toastId:t};e?Hl(e)(n):k0(n)};_e.dismissAll=t=>_e.dismiss(void 0,t);_e.remove=(t,e)=>{let n={type:4,toastId:t};e?Hl(e)(n):k0(n)};_e.removeAll=t=>_e.remove(void 0,t);_e.promise=(t,e,n)=>{let r=_e.loading(e.loading,{...n,...n==null?void 0:n.loading});return typeof t=="function"&&(t=t()),t.then(s=>{let i=e.success?Qa(e.success,s):void 0;return i?_e.success(i,{id:r,...n,...n==null?void 0:n.success}):_e.dismiss(r),s}).catch(s=>{let i=e.error?Qa(e.error,s):void 0;i?_e.error(i,{id:r,...n,...n==null?void 0:n.error}):_e.dismiss(r)}),t};var bb=1e3,Cb=(t,e="default")=>{let{toasts:n,pausedAt:r}=Eb(t,e),s=x.useRef(new Map).current,i=x.useCallback((h,f=bb)=>{if(s.has(h))return;let g=setTimeout(()=>{s.delete(h),o({type:4,toastId:h})},f);s.set(h,g)},[]);x.useEffect(()=>{if(r)return;let h=Date.now(),f=n.map(g=>{if(g.duration===1/0)return;let y=(g.duration||0)+g.pauseDuration-(h-g.createdAt);if(y<0){g.visible&&_e.dismiss(g.id);return}return setTimeout(()=>_e.dismiss(g.id,e),y)});return()=>{f.forEach(g=>g&&clearTimeout(g))}},[n,r,e]);let o=x.useCallback(Hl(e),[e]),a=x.useCallback(()=>{o({type:5,time:Date.now()})},[o]),l=x.useCallback((h,f)=>{o({type:1,toast:{id:h,height:f}})},[o]),c=x.useCallback(()=>{r&&o({type:6,time:Date.now()})},[r,o]),d=x.useCallback((h,f)=>{let{reverseOrder:g=!1,gutter:y=8,defaultPosition:w}=f||{},k=n.filter(m=>(m.position||w)===(h.position||w)&&m.height),v=k.findIndex(m=>m.id===h.id),p=k.filter((m,_)=>_<v&&m.visible).length;return k.filter(m=>m.visible).slice(...g?[p+1]:[0,p]).reduce((m,_)=>m+(_.height||0)+y,0)},[n]);return x.useEffect(()=>{n.forEach(h=>{if(h.dismissed)i(h.id,h.removeDelay);else{let f=s.get(h.id);f&&(clearTimeout(f),s.delete(h.id))}})},[n,i]),{toasts:n,handlers:{updateHeight:l,startPause:a,endPause:c,calculateOffset:d}}},Ib=pn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,Nb=pn`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Tb=pn`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,Rb=cr("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Ib} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Nb} 0.15s ease-out forwards;
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
    animation: ${Tb} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,Pb=pn`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Ab=cr("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${Pb} 1s linear infinite;
`,Ob=pn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Mb=pn`
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
}`,jb=cr("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Ob} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Mb} 0.2s ease-out forwards;
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
`,Lb=cr("div")`
  position: absolute;
`,Db=cr("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Fb=pn`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Ub=cr("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Fb} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,$b=({toast:t})=>{let{icon:e,type:n,iconTheme:r}=t;return e!==void 0?typeof e=="string"?x.createElement(Ub,null,e):e:n==="blank"?null:x.createElement(Db,null,x.createElement(Ab,{...r}),n!=="loading"&&x.createElement(Lb,null,n==="error"?x.createElement(Rb,{...r}):x.createElement(jb,{...r})))},Wb=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,zb=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,Bb="0%{opacity:0;} 100%{opacity:1;}",Vb="0%{opacity:1;} 100%{opacity:0;}",Hb=cr("div")`
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
`,Kb=cr("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Gb=(t,e)=>{let n=t.includes("top")?1:-1,[r,s]=v0()?[Bb,Vb]:[Wb(n),zb(n)];return{animation:e?`${pn(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${pn(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},qb=x.memo(({toast:t,position:e,style:n,children:r})=>{let s=t.height?Gb(t.position||e||"top-center",t.visible):{opacity:0},i=x.createElement($b,{toast:t}),o=x.createElement(Kb,{...t.ariaProps},Qa(t.message,t));return x.createElement(Hb,{className:t.className,style:{...s,...n,...t.style}},typeof r=="function"?r({icon:i,message:o}):x.createElement(x.Fragment,null,i,o))});yb(x.createElement);var Qb=({id:t,className:e,style:n,onHeightUpdate:r,children:s})=>{let i=x.useCallback(o=>{if(o){let a=()=>{let l=o.getBoundingClientRect().height;r(t,l)};a(),new MutationObserver(a).observe(o,{subtree:!0,childList:!0,characterData:!0})}},[t,r]);return x.createElement("div",{ref:i,className:e,style:n},s)},Yb=(t,e)=>{let n=t.includes("top"),r=n?{top:0}:{bottom:0},s=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:v0()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(n?1:-1)}px)`,...r,...s}},Xb=Vl`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Zo=16,Jb=({reverseOrder:t,position:e="top-center",toastOptions:n,gutter:r,children:s,toasterId:i,containerStyle:o,containerClassName:a})=>{let{toasts:l,handlers:c}=Cb(n,i);return x.createElement("div",{"data-rht-toaster":i||"",style:{position:"fixed",zIndex:9999,top:Zo,left:Zo,right:Zo,bottom:Zo,pointerEvents:"none",...o},className:a,onMouseEnter:c.startPause,onMouseLeave:c.endPause},l.map(d=>{let h=d.position||e,f=c.calculateOffset(d,{reverseOrder:t,gutter:r,defaultPosition:e}),g=Yb(h,f);return x.createElement(Qb,{id:d.id,key:d.id,onHeightUpdate:c.updateHeight,className:d.visible?Xb:"",style:g},d.type==="custom"?Qa(d.message,d):s?s(d):x.createElement(qb,{toast:d,position:h}))}))},F=_e;const Zb={},hm=t=>{let e;const n=new Set,r=(d,h)=>{const f=typeof d=="function"?d(e):d;if(!Object.is(f,e)){const g=e;e=h??(typeof f!="object"||f===null)?f:Object.assign({},e,f),n.forEach(y=>y(e,g))}},s=()=>e,l={setState:r,getState:s,getInitialState:()=>c,subscribe:d=>(n.add(d),()=>n.delete(d)),destroy:()=>{(Zb?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},c=e=t(r,s,l);return l},eC=t=>t?hm(t):hm;var E0={exports:{}},S0={},b0={exports:{}},C0={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rs=x;function tC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var nC=typeof Object.is=="function"?Object.is:tC,rC=Rs.useState,sC=Rs.useEffect,iC=Rs.useLayoutEffect,oC=Rs.useDebugValue;function aC(t,e){var n=e(),r=rC({inst:{value:n,getSnapshot:e}}),s=r[0].inst,i=r[1];return iC(function(){s.value=n,s.getSnapshot=e,Hc(s)&&i({inst:s})},[t,n,e]),sC(function(){return Hc(s)&&i({inst:s}),t(function(){Hc(s)&&i({inst:s})})},[t]),oC(n),n}function Hc(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!nC(t,n)}catch{return!0}}function lC(t,e){return e()}var cC=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?lC:aC;C0.useSyncExternalStore=Rs.useSyncExternalStore!==void 0?Rs.useSyncExternalStore:cC;b0.exports=C0;var uC=b0.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kl=x,dC=uC;function hC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var fC=typeof Object.is=="function"?Object.is:hC,pC=dC.useSyncExternalStore,mC=Kl.useRef,gC=Kl.useEffect,yC=Kl.useMemo,vC=Kl.useDebugValue;S0.useSyncExternalStoreWithSelector=function(t,e,n,r,s){var i=mC(null);if(i.current===null){var o={hasValue:!1,value:null};i.current=o}else o=i.current;i=yC(function(){function l(g){if(!c){if(c=!0,d=g,g=r(g),s!==void 0&&o.hasValue){var y=o.value;if(s(y,g))return h=y}return h=g}if(y=h,fC(d,g))return y;var w=r(g);return s!==void 0&&s(y,w)?(d=g,y):(d=g,h=w)}var c=!1,d,h,f=n===void 0?null:n;return[function(){return l(e())},f===null?void 0:function(){return l(f())}]},[e,n,r,s]);var a=pC(t,i[0],i[1]);return gC(function(){o.hasValue=!0,o.value=a},[a]),vC(a),a};E0.exports=S0;var _C=E0.exports;const wC=Hg(_C),I0={},{useDebugValue:xC}=bl,{useSyncExternalStoreWithSelector:kC}=wC;let fm=!1;const EC=t=>t;function SC(t,e=EC,n){(I0?"production":void 0)!=="production"&&n&&!fm&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),fm=!0);const r=kC(t.subscribe,t.getState,t.getServerState||t.getInitialState,e,n);return xC(r),r}const pm=t=>{(I0?"production":void 0)!=="production"&&typeof t!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const e=typeof t=="function"?eC(t):t,n=(r,s)=>SC(e,r,s);return Object.assign(n,e),n},N0=t=>t?pm(t):pm,Fe=N0((t,e)=>({user:null,loading:!0,setUser:n=>t({user:n}),setLoading:n=>t({loading:n}),logout:()=>t({user:null}),createAnonymousUser:()=>{const n={uid:`anonymous_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,displayName:"匿名訪客",isAnonymous:!0,isFirstLogin:!1,avatar:null,email:null};return t({user:n}),n},isAnonymousUser:()=>{const{user:n}=e();return(n==null?void 0:n.isAnonymous)===!0}}));var mm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T0={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P=function(t,e){if(!t)throw Bs(e)},Bs=function(t){return new Error("Firebase Database ("+T0.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},bC=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Uh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,d=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|c>>6,g=c&63;l||(g=64,o||(f=64)),r.push(n[d],n[h],n[f],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(R0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):bC(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||c==null||h==null)throw new CC;const f=i<<2|a>>4;if(r.push(f),c!==64){const g=a<<4&240|c>>2;if(r.push(g),h!==64){const y=c<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class CC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const P0=function(t){const e=R0(t);return Uh.encodeByteArray(e,!0)},Ya=function(t){return P0(t).replace(/\./g,"")},Xa=function(t){try{return Uh.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IC(t){return A0(void 0,t)}function A0(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!NC(n)||(t[n]=A0(t[n],e[n]));return t}function NC(t){return t!=="__proto__"}/**
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
 */function TC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const RC=()=>TC().__FIREBASE_DEFAULTS__,PC=()=>{if(typeof process>"u"||typeof mm>"u")return;const t=mm.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},AC=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Xa(t[1]);return e&&JSON.parse(e)},$h=()=>{try{return RC()||PC()||AC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},O0=t=>{var e,n;return(n=(e=$h())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},M0=t=>{const e=O0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},j0=()=>{var t;return(t=$h())===null||t===void 0?void 0:t.config},L0=t=>{var e;return(e=$h())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function D0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ya(JSON.stringify(n)),Ya(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ve(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Wh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ve())}function OC(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function MC(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function F0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function jC(){const t=Ve();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function LC(){return T0.NODE_ADMIN===!0}function U0(){try{return typeof indexedDB=="object"}catch{return!1}}function $0(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function DC(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FC="FirebaseError";class Ht extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=FC,Object.setPrototypeOf(this,Ht.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,zr.prototype.create)}}class zr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?UC(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Ht(s,a,r)}}function UC(t,e){return t.replace($C,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const $C=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zi(t){return JSON.parse(t)}function we(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W0=function(t){let e={},n={},r={},s="";try{const i=t.split(".");e=Zi(Xa(i[0])||""),n=Zi(Xa(i[1])||""),s=i[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:s}},WC=function(t){const e=W0(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},zC=function(t){const e=W0(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Pr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Ja(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Za(t,e,n){const r={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=e.call(n,t[s],s,t));return r}function el(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(gm(i)&&gm(o)){if(!el(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function gm(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vs(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function mi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function gi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BC{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)r[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)r[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const f=r[h-3]^r[h-8]^r[h-14]^r[h-16];r[h]=(f<<1|f>>>31)&4294967295}let s=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,d;for(let h=0;h<80;h++){h<40?h<20?(c=a^i&(o^a),d=1518500249):(c=i^o^a,d=1859775393):h<60?(c=i&o|a&(i|o),d=2400959708):(c=i^o^a,d=3395469782);const f=(s<<5|s>>>27)+c+l+d+r[h]&4294967295;l=a,a=o,o=(i<<30|i>>>2)&4294967295,i=s,s=f}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let s=0;const i=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=r;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(i[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}else for(;s<n;)if(i[o]=e[s],++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let i=24;i>=0;i-=8)e[r]=this.chain_[s]>>i&255,++r;return e}}function VC(t,e){const n=new HC(t,e);return n.subscribe.bind(n)}class HC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");KC(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Kc),s.error===void 0&&(s.error=Kc),s.complete===void 0&&(s.complete=Kc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function KC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Kc(){}function Ps(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GC=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);if(s>=55296&&s<=56319){const i=s-55296;r++,P(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;s=65536+(i<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Gl=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function ee(t){return t&&t._delegate?t._delegate:t}class mt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const mr="[DEFAULT]";/**
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
 */class qC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new xt;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(YC(e))try{this.getOrInitializeService({instanceIdentifier:mr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=mr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=mr){return this.instances.has(e)}getOptions(e=mr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:QC(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=mr){return this.component?this.component.multipleInstances?e:mr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function QC(t){return t===mr?void 0:t}function YC(t){return t.instantiationMode==="EAGER"}/**
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
 */class XC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new qC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var X;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(X||(X={}));const JC={debug:X.DEBUG,verbose:X.VERBOSE,info:X.INFO,warn:X.WARN,error:X.ERROR,silent:X.SILENT},ZC=X.INFO,e1={[X.DEBUG]:"log",[X.VERBOSE]:"log",[X.INFO]:"info",[X.WARN]:"warn",[X.ERROR]:"error"},t1=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=e1[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class zh{constructor(e){this.name=e,this._logLevel=ZC,this._logHandler=t1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in X))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?JC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,X.DEBUG,...e),this._logHandler(this,X.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,X.VERBOSE,...e),this._logHandler(this,X.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,X.INFO,...e),this._logHandler(this,X.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,X.WARN,...e),this._logHandler(this,X.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,X.ERROR,...e),this._logHandler(this,X.ERROR,...e)}}const n1=(t,e)=>e.some(n=>t instanceof n);let ym,vm;function r1(){return ym||(ym=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function s1(){return vm||(vm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const z0=new WeakMap,fd=new WeakMap,B0=new WeakMap,Gc=new WeakMap,Bh=new WeakMap;function i1(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(an(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&z0.set(n,t)}).catch(()=>{}),Bh.set(e,t),e}function o1(t){if(fd.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});fd.set(t,e)}let pd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return fd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||B0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return an(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function a1(t){pd=t(pd)}function l1(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(qc(this),e,...n);return B0.set(r,e.sort?e.sort():[e]),an(r)}:s1().includes(t)?function(...e){return t.apply(qc(this),e),an(z0.get(this))}:function(...e){return an(t.apply(qc(this),e))}}function c1(t){return typeof t=="function"?l1(t):(t instanceof IDBTransaction&&o1(t),n1(t,r1())?new Proxy(t,pd):t)}function an(t){if(t instanceof IDBRequest)return i1(t);if(Gc.has(t))return Gc.get(t);const e=c1(t);return e!==t&&(Gc.set(t,e),Bh.set(e,t)),e}const qc=t=>Bh.get(t);function ql(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=an(o);return r&&o.addEventListener("upgradeneeded",l=>{r(an(o.result),l.oldVersion,l.newVersion,an(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}function Qc(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",r=>e(r.oldVersion,r)),an(n).then(()=>{})}const u1=["get","getKey","getAll","getAllKeys","count"],d1=["put","add","delete","clear"],Yc=new Map;function _m(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Yc.get(e))return Yc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=d1.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||u1.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return Yc.set(e,i),i}a1(t=>({...t,get:(e,n,r)=>_m(e,n)||t.get(e,n,r),has:(e,n)=>!!_m(e,n)||t.has(e,n)}));/**
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
 */class h1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(f1(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function f1(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const md="@firebase/app",wm="0.10.13";/**
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
 */const mn=new zh("@firebase/app"),p1="@firebase/app-compat",m1="@firebase/analytics-compat",g1="@firebase/analytics",y1="@firebase/app-check-compat",v1="@firebase/app-check",_1="@firebase/auth",w1="@firebase/auth-compat",x1="@firebase/database",k1="@firebase/data-connect",E1="@firebase/database-compat",S1="@firebase/functions",b1="@firebase/functions-compat",C1="@firebase/installations",I1="@firebase/installations-compat",N1="@firebase/messaging",T1="@firebase/messaging-compat",R1="@firebase/performance",P1="@firebase/performance-compat",A1="@firebase/remote-config",O1="@firebase/remote-config-compat",M1="@firebase/storage",j1="@firebase/storage-compat",L1="@firebase/firestore",D1="@firebase/vertexai-preview",F1="@firebase/firestore-compat",U1="firebase",$1="10.14.1";/**
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
 */const gd="[DEFAULT]",W1={[md]:"fire-core",[p1]:"fire-core-compat",[g1]:"fire-analytics",[m1]:"fire-analytics-compat",[v1]:"fire-app-check",[y1]:"fire-app-check-compat",[_1]:"fire-auth",[w1]:"fire-auth-compat",[x1]:"fire-rtdb",[k1]:"fire-data-connect",[E1]:"fire-rtdb-compat",[S1]:"fire-fn",[b1]:"fire-fn-compat",[C1]:"fire-iid",[I1]:"fire-iid-compat",[N1]:"fire-fcm",[T1]:"fire-fcm-compat",[R1]:"fire-perf",[P1]:"fire-perf-compat",[A1]:"fire-rc",[O1]:"fire-rc-compat",[M1]:"fire-gcs",[j1]:"fire-gcs-compat",[L1]:"fire-fst",[F1]:"fire-fst-compat",[D1]:"fire-vertex","fire-js":"fire-js",[U1]:"fire-js-all"};/**
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
 */const tl=new Map,z1=new Map,yd=new Map;function xm(t,e){try{t.container.addComponent(e)}catch(n){mn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Nt(t){const e=t.name;if(yd.has(e))return mn.debug(`There were multiple attempts to register component ${e}.`),!1;yd.set(e,t);for(const n of tl.values())xm(n,t);for(const n of z1.values())xm(n,t);return!0}function Br(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ft(t){return t.settings!==void 0}/**
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
 */const B1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Hn=new zr("app","Firebase",B1);/**
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
 */class V1{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new mt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Hn.create("app-deleted",{appName:this._name})}}/**
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
 */const Vr=$1;function V0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:gd,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Hn.create("bad-app-name",{appName:String(s)});if(n||(n=j0()),!n)throw Hn.create("no-options");const i=tl.get(s);if(i){if(el(n,i.options)&&el(r,i.config))return i;throw Hn.create("duplicate-app",{appName:s})}const o=new XC(s);for(const l of yd.values())o.addComponent(l);const a=new V1(n,r,o);return tl.set(s,a),a}function Ql(t=gd){const e=tl.get(t);if(!e&&t===gd&&j0())return V0();if(!e)throw Hn.create("no-app",{appName:t});return e}function Ze(t,e,n){var r;let s=(r=W1[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),mn.warn(a.join(" "));return}Nt(new mt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const H1="firebase-heartbeat-database",K1=1,eo="firebase-heartbeat-store";let Xc=null;function H0(){return Xc||(Xc=ql(H1,K1,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(eo)}catch(n){console.warn(n)}}}}).catch(t=>{throw Hn.create("idb-open",{originalErrorMessage:t.message})})),Xc}async function G1(t){try{const n=(await H0()).transaction(eo),r=await n.objectStore(eo).get(K0(t));return await n.done,r}catch(e){if(e instanceof Ht)mn.warn(e.message);else{const n=Hn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});mn.warn(n.message)}}}async function km(t,e){try{const r=(await H0()).transaction(eo,"readwrite");await r.objectStore(eo).put(e,K0(t)),await r.done}catch(n){if(n instanceof Ht)mn.warn(n.message);else{const r=Hn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});mn.warn(r.message)}}}function K0(t){return`${t.name}!${t.options.appId}`}/**
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
 */const q1=1024,Q1=30*24*60*60*1e3;class Y1{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new J1(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Em();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=Q1}),this._storage.overwrite(this._heartbeatsCache))}catch(r){mn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Em(),{heartbeatsToSend:r,unsentEntries:s}=X1(this._heartbeatsCache.heartbeats),i=Ya(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return mn.warn(n),""}}}function Em(){return new Date().toISOString().substring(0,10)}function X1(t,e=q1){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Sm(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Sm(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class J1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return U0()?$0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await G1(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return km(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return km(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Sm(t){return Ya(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Z1(t){Nt(new mt("platform-logger",e=>new h1(e),"PRIVATE")),Nt(new mt("heartbeat",e=>new Y1(e),"PRIVATE")),Ze(md,wm,t),Ze(md,wm,"esm2017"),Ze("fire-js","")}Z1("");var eI="firebase",tI="10.14.1";/**
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
 */Ze(eI,tI,"app");function Vh(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function G0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const nI=G0,q0=new zr("auth","Firebase",G0());/**
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
 */const nl=new zh("@firebase/auth");function rI(t,...e){nl.logLevel<=X.WARN&&nl.warn(`Auth (${Vr}): ${t}`,...e)}function wa(t,...e){nl.logLevel<=X.ERROR&&nl.error(`Auth (${Vr}): ${t}`,...e)}/**
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
 */function Tt(t,...e){throw Hh(t,...e)}function zt(t,...e){return Hh(t,...e)}function Q0(t,e,n){const r=Object.assign(Object.assign({},nI()),{[e]:n});return new zr("auth","Firebase",r).create(e,{appName:t.name})}function ln(t){return Q0(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Hh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return q0.create(t,...e)}function D(t,e,...n){if(!t)throw Hh(e,...n)}function tn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw wa(e),new Error(e)}function gn(t,e){t||tn(e)}/**
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
 */function vd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function sI(){return bm()==="http:"||bm()==="https:"}function bm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function iI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(sI()||MC()||"connection"in navigator)?navigator.onLine:!0}function oI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Eo{constructor(e,n){this.shortDelay=e,this.longDelay=n,gn(n>e,"Short delay should be less than long delay!"),this.isMobile=Wh()||F0()}get(){return iI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Kh(t,e){gn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Y0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;tn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;tn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;tn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const aI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const lI=new Eo(3e4,6e4);function ur(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function _n(t,e,n,r,s={}){return X0(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Vs(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:l},i);return OC()||(c.referrerPolicy="no-referrer"),Y0.fetch()(J0(t,t.config.apiHost,n,a),c)})}async function X0(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},aI),e);try{const s=new uI(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ea(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ea(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ea(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw ea(t,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Q0(t,d,c);Tt(t,d)}}catch(s){if(s instanceof Ht)throw s;Tt(t,"network-request-failed",{message:String(s)})}}async function So(t,e,n,r,s={}){const i=await _n(t,e,n,r,s);return"mfaPendingCredential"in i&&Tt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function J0(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Kh(t.config,s):`${t.config.apiScheme}://${s}`}function cI(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class uI{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(zt(this.auth,"network-request-failed")),lI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ea(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=zt(t,e,r);return s.customData._tokenResponse=n,s}function Cm(t){return t!==void 0&&t.enterprise!==void 0}class dI{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return cI(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function hI(t,e){return _n(t,"GET","/v2/recaptchaConfig",ur(t,e))}/**
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
 */async function fI(t,e){return _n(t,"POST","/v1/accounts:delete",e)}async function Z0(t,e){return _n(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ci(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function pI(t,e=!1){const n=ee(t),r=await n.getIdToken(e),s=Gh(r);D(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ci(Jc(s.auth_time)),issuedAtTime:Ci(Jc(s.iat)),expirationTime:Ci(Jc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Jc(t){return Number(t)*1e3}function Gh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return wa("JWT malformed, contained fewer than 3 sections"),null;try{const s=Xa(n);return s?JSON.parse(s):(wa("Failed to decode base64 JWT payload"),null)}catch(s){return wa("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Im(t){const e=Gh(t);return D(e,"internal-error"),D(typeof e.exp<"u","internal-error"),D(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function As(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ht&&mI(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function mI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class gI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class _d{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ci(this.lastLoginAt),this.creationTime=Ci(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function rl(t){var e;const n=t.auth,r=await t.getIdToken(),s=await As(t,Z0(n,{idToken:r}));D(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?e_(i.providerUserInfo):[],a=vI(t.providerData,o),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),d=l?c:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new _d(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,h)}async function yI(t){const e=ee(t);await rl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function vI(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function e_(t){return t.map(e=>{var{providerId:n}=e,r=Vh(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function _I(t,e){const n=await X0(t,{},async()=>{const r=Vs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=J0(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Y0.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function wI(t,e){return _n(t,"POST","/v2/accounts:revokeToken",ur(t,e))}/**
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
 */class _s{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){D(e.idToken,"internal-error"),D(typeof e.idToken<"u","internal-error"),D(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Im(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){D(e.length!==0,"internal-error");const n=Im(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(D(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await _I(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new _s;return r&&(D(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(D(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(D(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new _s,this.toJSON())}_performRefresh(){return tn("not implemented")}}/**
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
 */function xn(t,e){D(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class nn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Vh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new gI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new _d(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await As(this,this.stsTokenManager.getToken(this.auth,e));return D(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return pI(this,e)}reload(){return yI(this)}_assign(e){this!==e&&(D(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new nn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){D(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await rl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ft(this.auth.app))return Promise.reject(ln(this.auth));const e=await this.getIdToken();return await As(this,fI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,l,c,d;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,k=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,v=(c=n.createdAt)!==null&&c!==void 0?c:void 0,p=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:m,emailVerified:_,isAnonymous:S,providerData:E,stsTokenManager:b}=n;D(m&&b,e,"internal-error");const C=_s.fromJSON(this.name,b);D(typeof m=="string",e,"internal-error"),xn(h,e.name),xn(f,e.name),D(typeof _=="boolean",e,"internal-error"),D(typeof S=="boolean",e,"internal-error"),xn(g,e.name),xn(y,e.name),xn(w,e.name),xn(k,e.name),xn(v,e.name),xn(p,e.name);const A=new nn({uid:m,auth:e,email:f,emailVerified:_,displayName:h,isAnonymous:S,photoURL:y,phoneNumber:g,tenantId:w,stsTokenManager:C,createdAt:v,lastLoginAt:p});return E&&Array.isArray(E)&&(A.providerData=E.map(M=>Object.assign({},M))),k&&(A._redirectEventId=k),A}static async _fromIdTokenResponse(e,n,r=!1){const s=new _s;s.updateFromServerResponse(n);const i=new nn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await rl(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];D(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?e_(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new _s;a.updateFromIdToken(r);const l=new nn({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new _d(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,c),l}}/**
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
 */const Nm=new Map;function rn(t){gn(t instanceof Function,"Expected a class definition");let e=Nm.get(t);return e?(gn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Nm.set(t,e),e)}/**
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
 */class t_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}t_.type="NONE";const Tm=t_;/**
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
 */function xa(t,e,n){return`firebase:${t}:${e}:${n}`}class ws{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=xa(this.userKey,s.apiKey,i),this.fullPersistenceKey=xa("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?nn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ws(rn(Tm),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||rn(Tm);const o=xa(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const d=await c._get(o);if(d){const h=nn._fromJSON(e,d);c!==i&&(a=h),i=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new ws(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new ws(i,e,r))}}/**
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
 */function Rm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(i_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(n_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(a_(e))return"Blackberry";if(l_(e))return"Webos";if(r_(e))return"Safari";if((e.includes("chrome/")||s_(e))&&!e.includes("edge/"))return"Chrome";if(o_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function n_(t=Ve()){return/firefox\//i.test(t)}function r_(t=Ve()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function s_(t=Ve()){return/crios\//i.test(t)}function i_(t=Ve()){return/iemobile/i.test(t)}function o_(t=Ve()){return/android/i.test(t)}function a_(t=Ve()){return/blackberry/i.test(t)}function l_(t=Ve()){return/webos/i.test(t)}function qh(t=Ve()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function xI(t=Ve()){var e;return qh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function kI(){return jC()&&document.documentMode===10}function c_(t=Ve()){return qh(t)||o_(t)||l_(t)||a_(t)||/windows phone/i.test(t)||i_(t)}/**
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
 */function u_(t,e=[]){let n;switch(t){case"Browser":n=Rm(Ve());break;case"Worker":n=`${Rm(Ve())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Vr}/${r}`}/**
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
 */class EI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function SI(t,e={}){return _n(t,"GET","/v2/passwordPolicy",ur(t,e))}/**
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
 */const bI=6;class CI{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:bI,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class II{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Pm(this),this.idTokenSubscription=new Pm(this),this.beforeStateQueue=new EI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=q0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=rn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await ws.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Z0(this,{idToken:e}),r=await nn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Ft(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return D(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await rl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=oI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ft(this.app))return Promise.reject(ln(this));const n=e?ee(e):null;return n&&D(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&D(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ft(this.app)?Promise.reject(ln(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ft(this.app)?Promise.reject(ln(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(rn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await SI(this),n=new CI(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new zr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await wI(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&rn(e)||this._popupRedirectResolver;D(n,this,"argument-error"),this.redirectPersistenceManager=await ws.create(this,[rn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(D(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return D(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=u_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&rI(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Hr(t){return ee(t)}class Pm{constructor(e){this.auth=e,this.observer=null,this.addObserver=VC(n=>this.observer=n)}get next(){return D(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Yl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function NI(t){Yl=t}function d_(t){return Yl.loadJS(t)}function TI(){return Yl.recaptchaEnterpriseScript}function RI(){return Yl.gapiScript}function PI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const AI="recaptcha-enterprise",OI="NO_RECAPTCHA";class MI{constructor(e){this.type=AI,this.auth=Hr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{hI(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new dI(l);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function s(i,o,a){const l=window.grecaptcha;Cm(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(c=>{o(c)}).catch(()=>{o(OI)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&Cm(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=TI();l.length!==0&&(l+=a),d_(l).then(()=>{s(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Am(t,e,n,r=!1){const s=new MI(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function wd(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Am(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Am(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
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
 */function jI(t,e){const n=Br(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(el(i,e??{}))return s;Tt(s,"already-initialized")}return n.initialize({options:e})}function LI(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(rn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function DI(t,e,n){const r=Hr(t);D(r._canInitEmulator,r,"emulator-config-failed"),D(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=h_(e),{host:o,port:a}=FI(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),UI()}function h_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function FI(t){const e=h_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Om(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Om(o)}}}function Om(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function UI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Qh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return tn("not implemented")}_getIdTokenResponse(e){return tn("not implemented")}_linkToIdToken(e,n){return tn("not implemented")}_getReauthenticationResolver(e){return tn("not implemented")}}async function $I(t,e){return _n(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function WI(t,e){return So(t,"POST","/v1/accounts:signInWithPassword",ur(t,e))}/**
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
 */async function zI(t,e){return So(t,"POST","/v1/accounts:signInWithEmailLink",ur(t,e))}async function BI(t,e){return So(t,"POST","/v1/accounts:signInWithEmailLink",ur(t,e))}/**
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
 */class to extends Qh{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new to(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new to(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return wd(e,n,"signInWithPassword",WI);case"emailLink":return zI(e,{email:this._email,oobCode:this._password});default:Tt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return wd(e,r,"signUpPassword",$I);case"emailLink":return BI(e,{idToken:n,email:this._email,oobCode:this._password});default:Tt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function xs(t,e){return So(t,"POST","/v1/accounts:signInWithIdp",ur(t,e))}/**
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
 */const VI="http://localhost";class Ar extends Qh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ar(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Tt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Vh(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Ar(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return xs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,xs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,xs(e,n)}buildRequest(){const e={requestUri:VI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Vs(n)}return e}}/**
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
 */function HI(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function KI(t){const e=mi(gi(t)).link,n=e?mi(gi(e)).deep_link_id:null,r=mi(gi(t)).deep_link_id;return(r?mi(gi(r)).link:null)||r||n||e||t}class Yh{constructor(e){var n,r,s,i,o,a;const l=mi(gi(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,h=HI((s=l.mode)!==null&&s!==void 0?s:null);D(c&&d&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=d,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=KI(e);try{return new Yh(n)}catch{return null}}}/**
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
 */class Hs{constructor(){this.providerId=Hs.PROVIDER_ID}static credential(e,n){return to._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Yh.parseLink(n);return D(r,"argument-error"),to._fromEmailAndCode(e,r.code,r.tenantId)}}Hs.PROVIDER_ID="password";Hs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Hs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class f_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class bo extends f_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class In extends bo{constructor(){super("facebook.com")}static credential(e){return Ar._fromParams({providerId:In.PROVIDER_ID,signInMethod:In.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return In.credentialFromTaggedObject(e)}static credentialFromError(e){return In.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return In.credential(e.oauthAccessToken)}catch{return null}}}In.FACEBOOK_SIGN_IN_METHOD="facebook.com";In.PROVIDER_ID="facebook.com";/**
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
 */class Nn extends bo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ar._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Nn.credential(n,r)}catch{return null}}}Nn.GOOGLE_SIGN_IN_METHOD="google.com";Nn.PROVIDER_ID="google.com";/**
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
 */class Tn extends bo{constructor(){super("github.com")}static credential(e){return Ar._fromParams({providerId:Tn.PROVIDER_ID,signInMethod:Tn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Tn.credentialFromTaggedObject(e)}static credentialFromError(e){return Tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Tn.credential(e.oauthAccessToken)}catch{return null}}}Tn.GITHUB_SIGN_IN_METHOD="github.com";Tn.PROVIDER_ID="github.com";/**
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
 */class Rn extends bo{constructor(){super("twitter.com")}static credential(e,n){return Ar._fromParams({providerId:Rn.PROVIDER_ID,signInMethod:Rn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Rn.credentialFromTaggedObject(e)}static credentialFromError(e){return Rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Rn.credential(n,r)}catch{return null}}}Rn.TWITTER_SIGN_IN_METHOD="twitter.com";Rn.PROVIDER_ID="twitter.com";/**
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
 */async function GI(t,e){return So(t,"POST","/v1/accounts:signUp",ur(t,e))}/**
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
 */class Or{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await nn._fromIdTokenResponse(e,r,s),o=Mm(r);return new Or({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Mm(r);return new Or({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Mm(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class sl extends Ht{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,sl.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new sl(e,n,r,s)}}function p_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?sl._fromErrorAndOperation(t,i,e,r):i})}async function qI(t,e,n=!1){const r=await As(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Or._forOperation(t,"link",r)}/**
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
 */async function QI(t,e,n=!1){const{auth:r}=t;if(Ft(r.app))return Promise.reject(ln(r));const s="reauthenticate";try{const i=await As(t,p_(r,s,e,t),n);D(i.idToken,r,"internal-error");const o=Gh(i.idToken);D(o,r,"internal-error");const{sub:a}=o;return D(t.uid===a,r,"user-mismatch"),Or._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Tt(r,"user-mismatch"),i}}/**
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
 */async function m_(t,e,n=!1){if(Ft(t.app))return Promise.reject(ln(t));const r="signIn",s=await p_(t,r,e),i=await Or._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function YI(t,e){return m_(Hr(t),e)}/**
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
 */async function g_(t){const e=Hr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function XI(t,e,n){if(Ft(t.app))return Promise.reject(ln(t));const r=Hr(t),o=await wd(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",GI).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&g_(t),l}),a=await Or._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function JI(t,e,n){return Ft(t.app)?Promise.reject(ln(t)):YI(ee(t),Hs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&g_(t),r})}/**
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
 */async function ZI(t,e){return _n(t,"POST","/v1/accounts:update",e)}/**
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
 */async function eN(t,{displayName:e,photoURL:n}){const r=ee(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await As(r,ZI(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function tN(t,e,n,r){return ee(t).onIdTokenChanged(e,n,r)}function nN(t,e,n){return ee(t).beforeAuthStateChanged(e,n)}function rN(t,e,n,r){return ee(t).onAuthStateChanged(e,n,r)}function sN(t){return ee(t).signOut()}const il="__sak";/**
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
 */class y_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(il,"1"),this.storage.removeItem(il),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const iN=1e3,oN=10;class v_ extends y_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=c_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);kI()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,oN):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},iN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}v_.type="LOCAL";const aN=v_;/**
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
 */class __ extends y_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}__.type="SESSION";const w_=__;/**
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
 */function lN(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Xl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Xl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,i)),l=await lN(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Xl.receivers=[];/**
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
 */function Xh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class cN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const c=Xh("",20);s.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const f=h;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(d),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Bt(){return window}function uN(t){Bt().location.href=t}/**
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
 */function x_(){return typeof Bt().WorkerGlobalScope<"u"&&typeof Bt().importScripts=="function"}async function dN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function hN(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function fN(){return x_()?self:null}/**
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
 */const k_="firebaseLocalStorageDb",pN=1,ol="firebaseLocalStorage",E_="fbase_key";class Co{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Jl(t,e){return t.transaction([ol],e?"readwrite":"readonly").objectStore(ol)}function mN(){const t=indexedDB.deleteDatabase(k_);return new Co(t).toPromise()}function xd(){const t=indexedDB.open(k_,pN);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ol,{keyPath:E_})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ol)?e(r):(r.close(),await mN(),e(await xd()))})})}async function jm(t,e,n){const r=Jl(t,!0).put({[E_]:e,value:n});return new Co(r).toPromise()}async function gN(t,e){const n=Jl(t,!1).get(e),r=await new Co(n).toPromise();return r===void 0?null:r.value}function Lm(t,e){const n=Jl(t,!0).delete(e);return new Co(n).toPromise()}const yN=800,vN=3;class S_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await xd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>vN)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return x_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Xl._getInstance(fN()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await dN(),!this.activeServiceWorker)return;this.sender=new cN(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||hN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await xd();return await jm(e,il,"1"),await Lm(e,il),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>jm(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>gN(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Lm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Jl(s,!1).getAll();return new Co(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),yN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}S_.type="LOCAL";const _N=S_;new Eo(3e4,6e4);/**
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
 */function wN(t,e){return e?rn(e):(D(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Jh extends Qh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return xs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return xs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return xs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function xN(t){return m_(t.auth,new Jh(t),t.bypassAuthState)}function kN(t){const{auth:e,user:n}=t;return D(n,e,"internal-error"),QI(n,new Jh(t),t.bypassAuthState)}async function EN(t){const{auth:e,user:n}=t;return D(n,e,"internal-error"),qI(n,new Jh(t),t.bypassAuthState)}/**
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
 */class b_{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return xN;case"linkViaPopup":case"linkViaRedirect":return EN;case"reauthViaPopup":case"reauthViaRedirect":return kN;default:Tt(this.auth,"internal-error")}}resolve(e){gn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){gn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const SN=new Eo(2e3,1e4);class us extends b_{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,us.currentPopupAction&&us.currentPopupAction.cancel(),us.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return D(e,this.auth,"internal-error"),e}async onExecution(){gn(this.filter.length===1,"Popup operations only handle one event");const e=Xh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(zt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(zt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,us.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(zt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,SN.get())};e()}}us.currentPopupAction=null;/**
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
 */const bN="pendingRedirect",ka=new Map;class CN extends b_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ka.get(this.auth._key());if(!e){try{const r=await IN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ka.set(this.auth._key(),e)}return this.bypassAuthState||ka.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function IN(t,e){const n=RN(e),r=TN(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function NN(t,e){ka.set(t._key(),e)}function TN(t){return rn(t._redirectPersistence)}function RN(t){return xa(bN,t.config.apiKey,t.name)}async function PN(t,e,n=!1){if(Ft(t.app))return Promise.reject(ln(t));const r=Hr(t),s=wN(r,e),o=await new CN(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const AN=10*60*1e3;class ON{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!MN(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!C_(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(zt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=AN&&this.cachedEventUids.clear(),this.cachedEventUids.has(Dm(e))}saveEventToCache(e){this.cachedEventUids.add(Dm(e)),this.lastProcessedEventTime=Date.now()}}function Dm(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function C_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function MN(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return C_(t);default:return!1}}/**
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
 */async function jN(t,e={}){return _n(t,"GET","/v1/projects",e)}/**
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
 */const LN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,DN=/^https?/;async function FN(t){if(t.config.emulator)return;const{authorizedDomains:e}=await jN(t);for(const n of e)try{if(UN(n))return}catch{}Tt(t,"unauthorized-domain")}function UN(t){const e=vd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!DN.test(n))return!1;if(LN.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const $N=new Eo(3e4,6e4);function Fm(){const t=Bt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function WN(t){return new Promise((e,n)=>{var r,s,i;function o(){Fm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Fm(),n(zt(t,"network-request-failed"))},timeout:$N.get()})}if(!((s=(r=Bt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Bt().gapi)===null||i===void 0)&&i.load)o();else{const a=PI("iframefcb");return Bt()[a]=()=>{gapi.load?o():n(zt(t,"network-request-failed"))},d_(`${RI()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Ea=null,e})}let Ea=null;function zN(t){return Ea=Ea||WN(t),Ea}/**
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
 */const BN=new Eo(5e3,15e3),VN="__/auth/iframe",HN="emulator/auth/iframe",KN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},GN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function qN(t){const e=t.config;D(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Kh(e,HN):`https://${t.config.authDomain}/${VN}`,r={apiKey:e.apiKey,appName:t.name,v:Vr},s=GN.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Vs(r).slice(1)}`}async function QN(t){const e=await zN(t),n=Bt().gapi;return D(n,t,"internal-error"),e.open({where:document.body,url:qN(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:KN,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=zt(t,"network-request-failed"),a=Bt().setTimeout(()=>{i(o)},BN.get());function l(){Bt().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const YN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},XN=500,JN=600,ZN="_blank",eT="http://localhost";class Um{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function tT(t,e,n,r=XN,s=JN){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},YN),{width:r.toString(),height:s.toString(),top:i,left:o}),c=Ve().toLowerCase();n&&(a=s_(c)?ZN:n),n_(c)&&(e=e||eT,l.scrollbars="yes");const d=Object.entries(l).reduce((f,[g,y])=>`${f}${g}=${y},`,"");if(xI(c)&&a!=="_self")return nT(e||"",a),new Um(null);const h=window.open(e||"",a,d);D(h,t,"popup-blocked");try{h.focus()}catch{}return new Um(h)}function nT(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const rT="__/auth/handler",sT="emulator/auth/handler",iT=encodeURIComponent("fac");async function $m(t,e,n,r,s,i){D(t.config.authDomain,t,"auth-domain-config-required"),D(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Vr,eventId:s};if(e instanceof f_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Ja(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,h]of Object.entries({}))o[d]=h}if(e instanceof bo){const d=e.getScopes().filter(h=>h!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await t._getAppCheckToken(),c=l?`#${iT}=${encodeURIComponent(l)}`:"";return`${oT(t)}?${Vs(a).slice(1)}${c}`}function oT({config:t}){return t.emulator?Kh(t,sT):`https://${t.authDomain}/${rT}`}/**
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
 */const Zc="webStorageSupport";class aT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=w_,this._completeRedirectFn=PN,this._overrideRedirectResult=NN}async _openPopup(e,n,r,s){var i;gn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await $m(e,n,r,vd(),s);return tT(e,o,Xh())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await $m(e,n,r,vd(),s);return uN(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(gn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await QN(e),r=new ON(e);return n.register("authEvent",s=>(D(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Zc,{type:Zc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Zc];o!==void 0&&n(!!o),Tt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=FN(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return c_()||r_()||qh()}}const lT=aT;var Wm="@firebase/auth",zm="1.7.9";/**
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
 */class cT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){D(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function uT(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function dT(t){Nt(new mt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;D(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:u_(t)},c=new II(r,s,i,l);return LI(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Nt(new mt("auth-internal",e=>{const n=Hr(e.getProvider("auth").getImmediate());return(r=>new cT(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ze(Wm,zm,uT(t)),Ze(Wm,zm,"esm2017")}/**
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
 */const hT=5*60,fT=L0("authIdTokenMaxAge")||hT;let Bm=null;const pT=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>fT)return;const s=n==null?void 0:n.token;Bm!==s&&(Bm=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function mT(t=Ql()){const e=Br(t,"auth");if(e.isInitialized())return e.getImmediate();const n=jI(t,{popupRedirectResolver:lT,persistence:[_N,aN,w_]}),r=L0("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=pT(i.toString());nN(n,o,()=>o(n.currentUser)),tN(n,a=>o(a))}}const s=O0("auth");return s&&DI(n,`http://${s}`),n}function gT(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}NI({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=zt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",gT().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});dT("Browser");var Vm={};const Hm="@firebase/database",Km="1.0.8";/**
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
 */let I_="";function yT(t){I_=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vT{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),we(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Zi(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _T{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Rt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N_=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new vT(e)}}catch{}return new _T},wr=N_("localStorage"),wT=N_("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ks=new zh("@firebase/database"),T_=function(){let t=1;return function(){return t++}}(),R_=function(t){const e=GC(t),n=new BC;n.update(e);const r=n.digest();return Uh.encodeByteArray(r)},Io=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Io.apply(null,r):typeof r=="object"?e+=we(r):e+=r,e+=" "}return e};let Ii=null,Gm=!0;const xT=function(t,e){P(!0,"Can't turn on custom loggers persistently."),ks.logLevel=X.VERBOSE,Ii=ks.log.bind(ks)},Ce=function(...t){if(Gm===!0&&(Gm=!1,Ii===null&&wT.get("logging_enabled")===!0&&xT()),Ii){const e=Io.apply(null,t);Ii(e)}},No=function(t){return function(...e){Ce(t,...e)}},kd=function(...t){const e="FIREBASE INTERNAL ERROR: "+Io(...t);ks.error(e)},yn=function(...t){const e=`FIREBASE FATAL ERROR: ${Io(...t)}`;throw ks.error(e),new Error(e)},Be=function(...t){const e="FIREBASE WARNING: "+Io(...t);ks.warn(e)},kT=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Be("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Zl=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},ET=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},er="[MIN_NAME]",tr="[MAX_NAME]",Kr=function(t,e){if(t===e)return 0;if(t===er||e===tr)return-1;if(e===er||t===tr)return 1;{const n=qm(t),r=qm(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},ST=function(t,e){return t===e?0:t<e?-1:1},ii=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+we(e))},Zh=function(t){if(typeof t!="object"||t===null)return we(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=we(e[r]),n+=":",n+=Zh(t[e[r]]);return n+="}",n},P_=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let s=0;s<n;s+=e)s+e>n?r.push(t.substring(s,n)):r.push(t.substring(s,s+e));return r};function Ne(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const A_=function(t){P(!Zl(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let s,i,o,a,l;t===0?(i=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),i=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(i=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(i%2?1:0),i=Math.floor(i/2);c.push(s?1:0),c.reverse();const d=c.join("");let h="";for(l=0;l<64;l+=8){let f=parseInt(d.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},bT=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},CT=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function IT(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const NT=new RegExp("^-?(0*)\\d{1,10}$"),TT=-2147483648,RT=2147483647,qm=function(t){if(NT.test(t)){const e=Number(t);if(e>=TT&&e<=RT)return e}return null},Ks=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Be("Exception was thrown by user callback.",n),e},Math.floor(0))}},PT=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ni=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class AT{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Be(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OT{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ce("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Be(e)}}class Sa{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Sa.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ef="5",O_="v",M_="s",j_="r",L_="f",D_=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,F_="ls",U_="p",Ed="ac",$_="websocket",W_="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_{constructor(e,n,r,s,i=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=s,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=wr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&wr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function MT(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function B_(t,e,n){P(typeof e=="string","typeof type must == string"),P(typeof n=="object","typeof params must == object");let r;if(e===$_)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===W_)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);MT(t)&&(n.ns=t.namespace);const s=[];return Ne(n,(i,o)=>{s.push(i+"="+o)}),r+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jT{constructor(){this.counters_={}}incrementCounter(e,n=1){Rt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return IC(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eu={},tu={};function tf(t){const e=t.toString();return eu[e]||(eu[e]=new jT),eu[e]}function LT(t,e){const n=t.toString();return tu[n]||(tu[n]=e()),tu[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DT{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<r.length;++s)r[s]&&Ks(()=>{this.onMessage_(r[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qm="start",FT="close",UT="pLPCommand",$T="pRTLPCB",V_="id",H_="pw",K_="ser",WT="cb",zT="seg",BT="ts",VT="d",HT="dframe",G_=1870,q_=30,KT=G_-q_,GT=25e3,qT=3e4;class ds{constructor(e,n,r,s,i,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=No(e),this.stats_=tf(n),this.urlFn=l=>(this.appCheckToken&&(l[Ed]=this.appCheckToken),B_(n,W_,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new DT(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(qT)),ET(()=>{if(this.isClosed_)return;this.scriptTagHolder=new nf((...i)=>{const[o,a,l,c,d]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Qm)this.id=a,this.password=l;else if(o===FT)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Qm]="t",r[K_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[WT]=this.scriptTagHolder.uniqueCallbackIdentifier),r[O_]=ef,this.transportSessionId&&(r[M_]=this.transportSessionId),this.lastSessionId&&(r[F_]=this.lastSessionId),this.applicationId&&(r[U_]=this.applicationId),this.appCheckToken&&(r[Ed]=this.appCheckToken),typeof location<"u"&&location.hostname&&D_.test(location.hostname)&&(r[j_]=L_);const s=this.urlFn(r);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ds.forceAllow_=!0}static forceDisallow(){ds.forceDisallow_=!0}static isAvailable(){return ds.forceAllow_?!0:!ds.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!bT()&&!CT()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=we(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=P0(n),s=P_(r,KT);for(let i=0;i<s.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[i]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[HT]="t",r[V_]=e,r[H_]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=we(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class nf{constructor(e,n,r,s){this.onDisconnect=r,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=T_(),window[UT+this.uniqueCallbackIdentifier]=e,window[$T+this.uniqueCallbackIdentifier]=n,this.myIFrame=nf.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ce("frame writing exception"),a.stack&&Ce(a.stack),Ce(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ce("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[V_]=this.myID,e[H_]=this.myPW,e[K_]=this.currentSerial;let n=this.urlFn(e),r="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+q_+r.length<=G_;){const o=this.pendingSegs.shift();r=r+"&"+zT+s+"="+o.seg+"&"+BT+s+"="+o.ts+"&"+VT+s+"="+o.d,s++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(r,Math.floor(GT)),i=()=>{clearTimeout(s),r()};this.addTag(e,i)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const s=r.readyState;(!s||s==="loaded"||s==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Ce("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QT=16384,YT=45e3;let al=null;typeof MozWebSocket<"u"?al=MozWebSocket:typeof WebSocket<"u"&&(al=WebSocket);class kt{constructor(e,n,r,s,i,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=No(this.connId),this.stats_=tf(n),this.connURL=kt.connectionURL_(n,o,a,s,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,s,i){const o={};return o[O_]=ef,typeof location<"u"&&location.hostname&&D_.test(location.hostname)&&(o[j_]=L_),n&&(o[M_]=n),r&&(o[F_]=r),s&&(o[Ed]=s),i&&(o[U_]=i),B_(e,$_,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,wr.set("previous_websocket_failure",!0);try{let r;LC(),this.mySock=new al(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){kt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&al!==null&&!kt.forceDisallow_}static previouslyFailed(){return wr.isInMemoryStorage||wr.get("previous_websocket_failure")===!0}markConnectionHealthy(){wr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Zi(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(P(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=we(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=P_(n,QT);r.length>1&&this.sendString_(String(r.length));for(let s=0;s<r.length;s++)this.sendString_(r[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(YT))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}kt.responsesRequiredToBeHealthy=2;kt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[ds,kt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=kt&&kt.isAvailable();let r=n&&!kt.previouslyFailed();if(e.webSocketOnly&&(n||Be("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[kt];else{const s=this.transports_=[];for(const i of no.ALL_TRANSPORTS)i&&i.isAvailable()&&s.push(i);no.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}no.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XT=6e4,JT=5e3,ZT=10*1024,eR=100*1024,nu="t",Ym="d",tR="s",Xm="r",nR="e",Jm="o",Zm="a",eg="n",tg="p",rR="h";class sR{constructor(e,n,r,s,i,o,a,l,c,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=s,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=No("c:"+this.id+":"),this.transportManager_=new no(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Ni(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>eR?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>ZT?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(nu in e){const n=e[nu];n===Zm?this.upgradeIfSecondaryHealthy_():n===Xm?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Jm&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ii("t",e),r=ii("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:tg,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Zm,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:eg,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ii("t",e),r=ii("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ii(nu,e);if(Ym in e){const r=e[Ym];if(n===rR){const s=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===eg){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===tR?this.onConnectionShutdown_(r):n===Xm?this.onReset_(r):n===nR?kd("Server Error: "+r):n===Jm?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):kd("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),ef!==r&&Be("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Ni(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(XT))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ni(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(JT))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:tg,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(wr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q_{put(e,n,r,s){}merge(e,n,r,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y_{constructor(e){this.allowedEvents_=e,this.listeners_={},P(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let s=0;s<r.length;s++)r[s].callback.apply(r[s].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const s=this.getInitialEvent(e);s&&n.apply(r,s)}off(e,n,r){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let i=0;i<s.length;i++)if(s[i].callback===n&&(!r||r===s[i].context)){s.splice(i,1);return}}validateEventType_(e){P(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll extends Y_{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Wh()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ll}getInitialEvent(e){return P(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ng=32,rg=768;class q{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[r]=this.pieces_[s],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function K(){return new q("")}function $(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function nr(t){return t.pieces_.length-t.pieceNum_}function Z(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new q(t.pieces_,e)}function rf(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function iR(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function ro(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function X_(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new q(e,0)}function ue(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof q)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let s=0;s<r.length;s++)r[s].length>0&&n.push(r[s])}return new q(n,0)}function W(t){return t.pieceNum_>=t.pieces_.length}function We(t,e){const n=$(t),r=$(e);if(n===null)return e;if(n===r)return We(Z(t),Z(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function oR(t,e){const n=ro(t,0),r=ro(e,0);for(let s=0;s<n.length&&s<r.length;s++){const i=Kr(n[s],r[s]);if(i!==0)return i}return n.length===r.length?0:n.length<r.length?-1:1}function sf(t,e){if(nr(t)!==nr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function dt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(nr(t)>nr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class aR{constructor(e,n){this.errorPrefix_=n,this.parts_=ro(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Gl(this.parts_[r]);J_(this)}}function lR(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Gl(e),J_(t)}function cR(t){const e=t.parts_.pop();t.byteLength_-=Gl(e),t.parts_.length>0&&(t.byteLength_-=1)}function J_(t){if(t.byteLength_>rg)throw new Error(t.errorPrefix_+"has a key path longer than "+rg+" bytes ("+t.byteLength_+").");if(t.parts_.length>ng)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+ng+") or object contains a cycle "+gr(t))}function gr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of extends Y_{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new of}getInitialEvent(e){return P(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oi=1e3,uR=60*5*1e3,sg=30*1e3,dR=1.3,hR=3e4,fR="server_kill",ig=3;class cn extends Q_{constructor(e,n,r,s,i,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=s,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=cn.nextPersistentConnectionId_++,this.log_=No("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=oi,this.maxReconnectDelay_=uR,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");of.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ll.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const s=++this.requestNumber_,i={r:s,a:e,b:n};this.log_(we(i)),P(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),r&&(this.requestCBHash_[s]=r)}get(e){this.initConnection_();const n=new xt,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),n.promise}listen(e,n,r,s){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),P(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),P(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:r};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+r+" for "+s);const i={p:r},o="q";e.tag&&(i.q=n._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const l=a.d,c=a.s;cn.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Rt(e,"w")){const r=Pr(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',i=n._path.toString();Be(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||zC(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=sg)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=WC(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,s=>{const i=s.s,o=s.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+s),P(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,s)&&this.connected_&&this.sendUnlisten_(r,s,e._queryObject,n)}sendUnlisten_(e,n,r,s){this.log_("Unlisten on "+e+" for "+n);const i={p:e},o="n";s&&(i.q=r,i.t=s),this.sendRequest(o,i)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,s){const i={p:n,d:r};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,r,s){this.putInternal("p",e,n,r,s)}merge(e,n,r,s){this.putInternal("m",e,n,r,s)}putInternal(e,n,r,s,i){this.initConnection_();const o={p:n,d:r};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,i=>{this.log_(n+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(i.s,i.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const i=r.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+we(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):kd("Unrecognized action received from server: "+we(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){P(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=oi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=oi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>hR&&(this.reconnectDelay_=oi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*dR)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+cn.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(h){P(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?Ce("getToken() completed but was canceled"):(Ce("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,a=new sR(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,g=>{Be(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(fR)},i))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Be(h),l())}}}interrupt(e){Ce("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ce("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ja(this.interruptReasons_)&&(this.reconnectDelay_=oi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(i=>Zh(i)).join("$"):r="default";const s=this.removeListen_(e,r);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const r=new q(e).toString();let s;if(this.listens.has(r)){const i=this.listens.get(r);s=i.get(n),i.delete(n),i.size===0&&this.listens.delete(r)}else s=void 0;return s}onAuthRevoked_(e,n){Ce("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ig&&(this.reconnectDelay_=sg,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ce("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ig&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+I_.replace(/\./g,"-")]=1,Wh()?e["framework.cordova"]=1:F0()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ll.getInstance().currentlyOnline();return Ja(this.interruptReasons_)&&e}}cn.nextPersistentConnectionId_=0;cn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new z(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new z(er,e),s=new z(er,n);return this.compare(r,s)!==0}minPost(){return z.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ta;class Z_ extends ec{static get __EMPTY_NODE(){return ta}static set __EMPTY_NODE(e){ta=e}compare(e,n){return Kr(e.name,n.name)}isDefinedOn(e){throw Bs("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return z.MIN}maxPost(){return new z(tr,ta)}makePost(e,n){return P(typeof e=="string","KeyIndex indexValue must always be a string."),new z(e,ta)}toString(){return".key"}}const Kn=new Z_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(e,n,r,s,i=null){this.isReverse_=s,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class be{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??be.RED,this.left=s??Qe.EMPTY_NODE,this.right=i??Qe.EMPTY_NODE}copy(e,n,r,s,i){return new be(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return i<0?s=s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Qe.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,s;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Qe.EMPTY_NODE;s=r.right.min_(),r=r.copy(s.key,s.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,be.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,be.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}be.RED=!0;be.BLACK=!1;class pR{copy(e,n,r,s,i){return this}insert(e,n,r){return new be(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Qe{constructor(e,n=Qe.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Qe(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,be.BLACK,null,null))}remove(e){return new Qe(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,be.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,s=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return s?s.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(s=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new na(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new na(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new na(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new na(this.root_,null,this.comparator_,!0,e)}}Qe.EMPTY_NODE=new pR;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mR(t,e){return Kr(t.name,e.name)}function af(t,e){return Kr(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sd;function gR(t){Sd=t}const ew=function(t){return typeof t=="number"?"number:"+A_(t):"string:"+t},tw=function(t){if(t.isLeafNode()){const e=t.val();P(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Rt(e,".sv"),"Priority must be a string or number.")}else P(t===Sd||t.isEmpty(),"priority of unexpected type.");P(t===Sd||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let og;class Ee{constructor(e,n=Ee.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,P(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),tw(this.priorityNode_)}static set __childrenNodeConstructor(e){og=e}static get __childrenNodeConstructor(){return og}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ee(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ee.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return W(e)?this:$(e)===".priority"?this.priorityNode_:Ee.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ee.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=$(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(P(r!==".priority"||nr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Ee.__childrenNodeConstructor.EMPTY_NODE.updateChild(Z(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+ew(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=A_(this.value_):e+=this.value_,this.lazyHash_=R_(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ee.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ee.__childrenNodeConstructor?-1:(P(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,s=Ee.VALUE_TYPE_ORDER.indexOf(n),i=Ee.VALUE_TYPE_ORDER.indexOf(r);return P(s>=0,"Unknown leaf type: "+n),P(i>=0,"Unknown leaf type: "+r),s===i?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ee.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nw,rw;function yR(t){nw=t}function vR(t){rw=t}class _R extends ec{compare(e,n){const r=e.node.getPriority(),s=n.node.getPriority(),i=r.compareTo(s);return i===0?Kr(e.name,n.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return z.MIN}maxPost(){return new z(tr,new Ee("[PRIORITY-POST]",rw))}makePost(e,n){const r=nw(e);return new z(n,new Ee("[PRIORITY-POST]",r))}toString(){return".priority"}}const ie=new _R;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wR=Math.log(2);class xR{constructor(e){const n=i=>parseInt(Math.log(i)/wR,10),r=i=>parseInt(Array(i+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=r(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const cl=function(t,e,n,r){t.sort(e);const s=function(l,c){const d=c-l;let h,f;if(d===0)return null;if(d===1)return h=t[l],f=n?n(h):h,new be(f,h.node,be.BLACK,null,null);{const g=parseInt(d/2,10)+l,y=s(l,g),w=s(g+1,c);return h=t[g],f=n?n(h):h,new be(f,h.node,be.BLACK,y,w)}},i=function(l){let c=null,d=null,h=t.length;const f=function(y,w){const k=h-y,v=h;h-=y;const p=s(k+1,v),m=t[k],_=n?n(m):m;g(new be(_,m.node,w,null,p))},g=function(y){c?(c.left=y,c=y):(d=y,c=y)};for(let y=0;y<l.count;++y){const w=l.nextBitIsOne(),k=Math.pow(2,l.count-(y+1));w?f(k,be.BLACK):(f(k,be.BLACK),f(k,be.RED))}return d},o=new xR(t.length),a=i(o);return new Qe(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ru;const Xr={};class sn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return P(Xr&&ie,"ChildrenNode.ts has not been loaded"),ru=ru||new sn({".priority":Xr},{".priority":ie}),ru}get(e){const n=Pr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Qe?n:null}hasIndex(e){return Rt(this.indexSet_,e.toString())}addIndex(e,n){P(e!==Kn,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let s=!1;const i=n.getIterator(z.Wrap);let o=i.getNext();for(;o;)s=s||e.isDefinedOn(o.node),r.push(o),o=i.getNext();let a;s?a=cl(r,e.getCompare()):a=Xr;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const d=Object.assign({},this.indexes_);return d[l]=a,new sn(d,c)}addToIndexes(e,n){const r=Za(this.indexes_,(s,i)=>{const o=Pr(this.indexSet_,i);if(P(o,"Missing index implementation for "+i),s===Xr)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(z.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),cl(a,o.getCompare())}else return Xr;else{const a=n.get(e.name);let l=s;return a&&(l=l.remove(new z(e.name,a))),l.insert(e,e.node)}});return new sn(r,this.indexSet_)}removeFromIndexes(e,n){const r=Za(this.indexes_,s=>{if(s===Xr)return s;{const i=n.get(e.name);return i?s.remove(new z(e.name,i)):s}});return new sn(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ai;class L{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&tw(this.priorityNode_),this.children_.isEmpty()&&P(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ai||(ai=new L(new Qe(af),null,sn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ai}updatePriority(e){return this.children_.isEmpty()?this:new L(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ai:n}}getChild(e){const n=$(e);return n===null?this:this.getImmediateChild(n).getChild(Z(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(P(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new z(e,n);let s,i;n.isEmpty()?(s=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(r,this.children_)):(s=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(r,this.children_));const o=s.isEmpty()?ai:this.priorityNode_;return new L(s,o,i)}}updateChild(e,n){const r=$(e);if(r===null)return n;{P($(e)!==".priority"||nr(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(r).updateChild(Z(e),n);return this.updateImmediateChild(r,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,s=0,i=!0;if(this.forEachChild(ie,(o,a)=>{n[o]=a.val(e),r++,i&&L.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):i=!1}),!e&&i&&s<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+ew(this.getPriority().val())+":"),this.forEachChild(ie,(n,r)=>{const s=r.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":R_(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const s=this.resolveIndex_(r);if(s){const i=s.getPredecessorKey(new z(e,n));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new z(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new z(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,z.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)<0;)s.getNext(),i=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,z.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)>0;)s.getNext(),i=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===To?-1:0}withIndex(e){if(e===Kn||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new L(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Kn||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(ie),s=n.getIterator(ie);let i=r.getNext(),o=s.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=r.getNext(),o=s.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Kn?null:this.indexMap_.get(e.toString())}}L.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class kR extends L{constructor(){super(new Qe(af),L.EMPTY_NODE,sn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return L.EMPTY_NODE}isEmpty(){return!1}}const To=new kR;Object.defineProperties(z,{MIN:{value:new z(er,L.EMPTY_NODE)},MAX:{value:new z(tr,To)}});Z_.__EMPTY_NODE=L.EMPTY_NODE;Ee.__childrenNodeConstructor=L;gR(To);vR(To);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ER=!0;function ce(t,e=null){if(t===null)return L.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),P(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ee(n,ce(e))}if(!(t instanceof Array)&&ER){const n=[];let r=!1;if(Ne(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=ce(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new z(o,l)))}}),n.length===0)return L.EMPTY_NODE;const i=cl(n,mR,o=>o.name,af);if(r){const o=cl(n,ie.getCompare());return new L(i,ce(e),new sn({".priority":o},{".priority":ie}))}else return new L(i,ce(e),sn.Default)}else{let n=L.EMPTY_NODE;return Ne(t,(r,s)=>{if(Rt(t,r)&&r.substring(0,1)!=="."){const i=ce(s);(i.isLeafNode()||!i.isEmpty())&&(n=n.updateImmediateChild(r,i))}}),n.updatePriority(ce(e))}}yR(ce);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf extends ec{constructor(e){super(),this.indexPath_=e,P(!W(e)&&$(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),s=this.extractChild(n.node),i=r.compareTo(s);return i===0?Kr(e.name,n.name):i}makePost(e,n){const r=ce(e),s=L.EMPTY_NODE.updateChild(this.indexPath_,r);return new z(n,s)}maxPost(){const e=L.EMPTY_NODE.updateChild(this.indexPath_,To);return new z(tr,e)}toString(){return ro(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SR extends ec{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Kr(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return z.MIN}maxPost(){return z.MAX}makePost(e,n){const r=ce(e);return new z(n,r)}toString(){return".value"}}const sw=new SR;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iw(t){return{type:"value",snapshotNode:t}}function Os(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function so(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function io(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function bR(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(e){this.index_=e}updateChild(e,n,r,s,i,o){P(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(s).equals(r.getChild(s))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(so(n,a)):P(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Os(n,r)):o.trackChildChange(io(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(ie,(s,i)=>{n.hasChild(s)||r.trackChildChange(so(s,i))}),n.isLeafNode()||n.forEachChild(ie,(s,i)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(i)||r.trackChildChange(io(s,i,o))}else r.trackChildChange(Os(s,i))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?L.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(e){this.indexedFilter_=new cf(e.getIndex()),this.index_=e.getIndex(),this.startPost_=oo.getStartPost_(e),this.endPost_=oo.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,s,i,o){return this.matches(new z(n,r))||(r=L.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,s,i,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=L.EMPTY_NODE);let s=n.withIndex(this.index_);s=s.updatePriority(L.EMPTY_NODE);const i=this;return n.forEachChild(ie,(o,a)=>{i.matches(new z(o,a))||(s=s.updateImmediateChild(o,L.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CR{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new oo(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,s,i,o){return this.rangedFilter_.matches(new z(n,r))||(r=L.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,s,i,o):this.fullLimitUpdateChild_(e,n,r,i,o)}updateFullNode(e,n,r){let s;if(n.isLeafNode()||n.isEmpty())s=L.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){s=L.EMPTY_NODE.withIndex(this.index_);let i;this.reverse_?i=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):i=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;i.hasNext()&&o<this.limit_;){const a=i.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=n.withIndex(this.index_),s=s.updatePriority(L.EMPTY_NODE);let i;this.reverse_?i=s.getReverseIterator(this.index_):i=s.getIterator(this.index_);let o=0;for(;i.hasNext();){const a=i.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,L.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,s,i){let o;if(this.reverse_){const h=this.index_.getCompare();o=(f,g)=>h(g,f)}else o=this.index_.getCompare();const a=e;P(a.numChildren()===this.limit_,"");const l=new z(n,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(l);if(a.hasChild(n)){const h=a.getImmediateChild(n);let f=s.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=s.getChildAfterChild(this.index_,f,this.reverse_);const g=f==null?1:o(f,l);if(d&&!r.isEmpty()&&g>=0)return i!=null&&i.trackChildChange(io(n,r,h)),a.updateImmediateChild(n,r);{i!=null&&i.trackChildChange(so(n,h));const w=a.updateImmediateChild(n,L.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(i!=null&&i.trackChildChange(Os(f.name,f.node)),w.updateImmediateChild(f.name,f.node)):w}}else return r.isEmpty()?e:d&&o(c,l)>=0?(i!=null&&(i.trackChildChange(so(c.name,c.node)),i.trackChildChange(Os(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(c.name,L.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ie}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return P(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return P(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:er}hasEnd(){return this.endSet_}getIndexEndValue(){return P(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return P(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:tr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return P(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ie}copy(){const e=new uf;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function IR(t){return t.loadsAllData()?new cf(t.getIndex()):t.hasLimit()?new CR(t):new oo(t)}function NR(t,e){const n=t.copy();return n.limitSet_=!0,n.limit_=e,n.viewFrom_="r",n}function ag(t,e,n){const r=t.copy();return r.endSet_=!0,e===void 0&&(e=null),r.indexEndValue_=e,n!==void 0?(r.endNameSet_=!0,r.indexEndName_=n):(r.endNameSet_=!1,r.indexEndName_=""),r}function TR(t,e,n){let r;return t.index_===Kn||n?r=ag(t,e,n):r=ag(t,e,er),r.endBeforeSet_=!0,r}function RR(t,e){const n=t.copy();return n.index_=e,n}function lg(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ie?n="$priority":t.index_===sw?n="$value":t.index_===Kn?n="$key":(P(t.index_ instanceof lf,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=we(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=we(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+we(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=we(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+we(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function cg(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ie&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul extends Q_{constructor(e,n,r,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.log_=No("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(P(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,s){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=ul.getListenId_(e,r),a={};this.listens_[o]=a;const l=lg(e._queryParams);this.restRequest_(i+".json",l,(c,d)=>{let h=d;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(i,h,!1,r),Pr(this.listens_,o)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",s(f,null)}})}unlisten(e,n){const r=ul.getListenId_(e,n);delete this.listens_[r]}get(e){const n=lg(e._queryParams),r=e._path.toString(),s=new xt;return this.restRequest_(r+".json",n,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(r,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,i])=>{s&&s.accessToken&&(n.auth=s.accessToken),i&&i.token&&(n.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Vs(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Zi(a.responseText)}catch{Be("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&Be("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PR{constructor(){this.rootNode_=L.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dl(){return{value:null,children:new Map}}function Gs(t,e,n){if(W(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=$(e);t.children.has(r)||t.children.set(r,dl());const s=t.children.get(r);e=Z(e),Gs(s,e,n)}}function bd(t,e){if(W(e))return t.value=null,t.children.clear(),!0;if(t.value!==null){if(t.value.isLeafNode())return!1;{const n=t.value;return t.value=null,n.forEachChild(ie,(r,s)=>{Gs(t,new q(r),s)}),bd(t,e)}}else if(t.children.size>0){const n=$(e);return e=Z(e),t.children.has(n)&&bd(t.children.get(n),e)&&t.children.delete(n),t.children.size===0}else return!0}function Cd(t,e,n){t.value!==null?n(e,t.value):AR(t,(r,s)=>{const i=new q(e.toString()+"/"+r);Cd(s,i,n)})}function AR(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OR{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ne(this.last_,(r,s)=>{n[r]=n[r]-s}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ug=10*1e3,MR=30*1e3,jR=5*60*1e3;class LR{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new OR(e);const r=ug+(MR-ug)*Math.random();Ni(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Ne(e,(s,i)=>{i>0&&Rt(this.statsToReport_,s)&&(n[s]=i,r=!0)}),r&&this.server_.reportStats(n),Ni(this.reportStats_.bind(this),Math.floor(Math.random()*2*jR))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Et;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Et||(Et={}));function df(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function hf(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function ff(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Et.ACK_USER_WRITE,this.source=df()}operationForChild(e){if(W(this.path)){if(this.affectedTree.value!=null)return P(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new q(e));return new hl(K(),n,this.revert)}}else return P($(this.path)===e,"operationForChild called for unrelated child."),new hl(Z(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(e,n){this.source=e,this.path=n,this.type=Et.LISTEN_COMPLETE}operationForChild(e){return W(this.path)?new ao(this.source,K()):new ao(this.source,Z(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Et.OVERWRITE}operationForChild(e){return W(this.path)?new Mr(this.source,K(),this.snap.getImmediateChild(e)):new Mr(this.source,Z(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Et.MERGE}operationForChild(e){if(W(this.path)){const n=this.children.subtree(new q(e));return n.isEmpty()?null:n.value?new Mr(this.source,K(),n.value):new Ms(this.source,K(),n)}else return P($(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ms(this.source,Z(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(W(e))return this.isFullyInitialized()&&!this.filtered_;const n=$(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DR{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function FR(t,e,n,r){const s=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(bR(o.childName,o.snapshotNode))}),li(t,s,"child_removed",e,r,n),li(t,s,"child_added",e,r,n),li(t,s,"child_moved",i,r,n),li(t,s,"child_changed",e,r,n),li(t,s,"value",e,r,n),s}function li(t,e,n,r,s,i){const o=r.filter(a=>a.type===n);o.sort((a,l)=>$R(t,a,l)),o.forEach(a=>{const l=UR(t,a,i);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function UR(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function $R(t,e,n){if(e.childName==null||n.childName==null)throw Bs("Should only compare child_ events.");const r=new z(e.childName,e.snapshotNode),s=new z(n.childName,n.snapshotNode);return t.index_.compare(r,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tc(t,e){return{eventCache:t,serverCache:e}}function Ti(t,e,n,r){return tc(new rr(e,n,r),t.serverCache)}function ow(t,e,n,r){return tc(t.eventCache,new rr(e,n,r))}function fl(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function jr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let su;const WR=()=>(su||(su=new Qe(ST)),su);class te{constructor(e,n=WR()){this.value=e,this.children=n}static fromObject(e){let n=new te(null);return Ne(e,(r,s)=>{n=n.set(new q(r),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:K(),value:this.value};if(W(e))return null;{const r=$(e),s=this.children.get(r);if(s!==null){const i=s.findRootMostMatchingPathAndValue(Z(e),n);return i!=null?{path:ue(new q(r),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(W(e))return this;{const n=$(e),r=this.children.get(n);return r!==null?r.subtree(Z(e)):new te(null)}}set(e,n){if(W(e))return new te(n,this.children);{const r=$(e),i=(this.children.get(r)||new te(null)).set(Z(e),n),o=this.children.insert(r,i);return new te(this.value,o)}}remove(e){if(W(e))return this.children.isEmpty()?new te(null):new te(null,this.children);{const n=$(e),r=this.children.get(n);if(r){const s=r.remove(Z(e));let i;return s.isEmpty()?i=this.children.remove(n):i=this.children.insert(n,s),this.value===null&&i.isEmpty()?new te(null):new te(this.value,i)}else return this}}get(e){if(W(e))return this.value;{const n=$(e),r=this.children.get(n);return r?r.get(Z(e)):null}}setTree(e,n){if(W(e))return n;{const r=$(e),i=(this.children.get(r)||new te(null)).setTree(Z(e),n);let o;return i.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,i),new te(this.value,o)}}fold(e){return this.fold_(K(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((s,i)=>{r[s]=i.fold_(ue(e,s),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,K(),n)}findOnPath_(e,n,r){const s=this.value?r(n,this.value):!1;if(s)return s;if(W(e))return null;{const i=$(e),o=this.children.get(i);return o?o.findOnPath_(Z(e),ue(n,i),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,K(),n)}foreachOnPath_(e,n,r){if(W(e))return this;{this.value&&r(n,this.value);const s=$(e),i=this.children.get(s);return i?i.foreachOnPath_(Z(e),ue(n,s),r):new te(null)}}foreach(e){this.foreach_(K(),e)}foreach_(e,n){this.children.inorderTraversal((r,s)=>{s.foreach_(ue(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.writeTree_=e}static empty(){return new Ct(new te(null))}}function Ri(t,e,n){if(W(e))return new Ct(new te(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const s=r.path;let i=r.value;const o=We(s,e);return i=i.updateChild(o,n),new Ct(t.writeTree_.set(s,i))}else{const s=new te(n),i=t.writeTree_.setTree(e,s);return new Ct(i)}}}function Id(t,e,n){let r=t;return Ne(n,(s,i)=>{r=Ri(r,ue(e,s),i)}),r}function dg(t,e){if(W(e))return Ct.empty();{const n=t.writeTree_.setTree(e,new te(null));return new Ct(n)}}function Nd(t,e){return Gr(t,e)!=null}function Gr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(We(n.path,e)):null}function hg(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ie,(r,s)=>{e.push(new z(r,s))}):t.writeTree_.children.inorderTraversal((r,s)=>{s.value!=null&&e.push(new z(r,s.value))}),e}function Gn(t,e){if(W(e))return t;{const n=Gr(t,e);return n!=null?new Ct(new te(n)):new Ct(t.writeTree_.subtree(e))}}function Td(t){return t.writeTree_.isEmpty()}function js(t,e){return aw(K(),t.writeTree_,e)}function aw(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((s,i)=>{s===".priority"?(P(i.value!==null,"Priority writes must always be leaf nodes"),r=i.value):n=aw(ue(t,s),i,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(ue(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nc(t,e){return dw(e,t)}function zR(t,e,n,r,s){P(r>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:s}),s&&(t.visibleWrites=Ri(t.visibleWrites,e,n)),t.lastWriteId=r}function BR(t,e,n,r){P(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=Id(t.visibleWrites,e,n),t.lastWriteId=r}function VR(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function HR(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);P(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let s=r.visible,i=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&KR(a,r.path)?s=!1:dt(r.path,a.path)&&(i=!0)),o--}if(s){if(i)return GR(t),!0;if(r.snap)t.visibleWrites=dg(t.visibleWrites,r.path);else{const a=r.children;Ne(a,l=>{t.visibleWrites=dg(t.visibleWrites,ue(r.path,l))})}return!0}else return!1}function KR(t,e){if(t.snap)return dt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&dt(ue(t.path,n),e))return!0;return!1}function GR(t){t.visibleWrites=lw(t.allWrites,qR,K()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function qR(t){return t.visible}function lw(t,e,n){let r=Ct.empty();for(let s=0;s<t.length;++s){const i=t[s];if(e(i)){const o=i.path;let a;if(i.snap)dt(n,o)?(a=We(n,o),r=Ri(r,a,i.snap)):dt(o,n)&&(a=We(o,n),r=Ri(r,K(),i.snap.getChild(a)));else if(i.children){if(dt(n,o))a=We(n,o),r=Id(r,a,i.children);else if(dt(o,n))if(a=We(o,n),W(a))r=Id(r,K(),i.children);else{const l=Pr(i.children,$(a));if(l){const c=l.getChild(Z(a));r=Ri(r,K(),c)}}}else throw Bs("WriteRecord should have .snap or .children")}}return r}function cw(t,e,n,r,s){if(!r&&!s){const i=Gr(t.visibleWrites,e);if(i!=null)return i;{const o=Gn(t.visibleWrites,e);if(Td(o))return n;if(n==null&&!Nd(o,K()))return null;{const a=n||L.EMPTY_NODE;return js(o,a)}}}else{const i=Gn(t.visibleWrites,e);if(!s&&Td(i))return n;if(!s&&n==null&&!Nd(i,K()))return null;{const o=function(c){return(c.visible||s)&&(!r||!~r.indexOf(c.writeId))&&(dt(c.path,e)||dt(e,c.path))},a=lw(t.allWrites,o,e),l=n||L.EMPTY_NODE;return js(a,l)}}}function QR(t,e,n){let r=L.EMPTY_NODE;const s=Gr(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(ie,(i,o)=>{r=r.updateImmediateChild(i,o)}),r;if(n){const i=Gn(t.visibleWrites,e);return n.forEachChild(ie,(o,a)=>{const l=js(Gn(i,new q(o)),a);r=r.updateImmediateChild(o,l)}),hg(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const i=Gn(t.visibleWrites,e);return hg(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function YR(t,e,n,r,s){P(r||s,"Either existingEventSnap or existingServerSnap must exist");const i=ue(e,n);if(Nd(t.visibleWrites,i))return null;{const o=Gn(t.visibleWrites,i);return Td(o)?s.getChild(n):js(o,s.getChild(n))}}function XR(t,e,n,r){const s=ue(e,n),i=Gr(t.visibleWrites,s);if(i!=null)return i;if(r.isCompleteForChild(n)){const o=Gn(t.visibleWrites,s);return js(o,r.getNode().getImmediateChild(n))}else return null}function JR(t,e){return Gr(t.visibleWrites,e)}function ZR(t,e,n,r,s,i,o){let a;const l=Gn(t.visibleWrites,e),c=Gr(l,K());if(c!=null)a=c;else if(n!=null)a=js(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],h=o.getCompare(),f=i?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let g=f.getNext();for(;g&&d.length<s;)h(g,r)!==0&&d.push(g),g=f.getNext();return d}else return[]}function eP(){return{visibleWrites:Ct.empty(),allWrites:[],lastWriteId:-1}}function pl(t,e,n,r){return cw(t.writeTree,t.treePath,e,n,r)}function pf(t,e){return QR(t.writeTree,t.treePath,e)}function fg(t,e,n,r){return YR(t.writeTree,t.treePath,e,n,r)}function ml(t,e){return JR(t.writeTree,ue(t.treePath,e))}function tP(t,e,n,r,s,i){return ZR(t.writeTree,t.treePath,e,n,r,s,i)}function mf(t,e,n){return XR(t.writeTree,t.treePath,e,n)}function uw(t,e){return dw(ue(t.treePath,e),t.writeTree)}function dw(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nP{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;P(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),P(r!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const i=s.type;if(n==="child_added"&&i==="child_removed")this.changeMap.set(r,io(r,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&i==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&i==="child_changed")this.changeMap.set(r,so(r,s.oldSnap));else if(n==="child_changed"&&i==="child_added")this.changeMap.set(r,Os(r,e.snapshotNode));else if(n==="child_changed"&&i==="child_changed")this.changeMap.set(r,io(r,e.snapshotNode,s.oldSnap));else throw Bs("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rP{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const hw=new rP;class gf{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new rr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return mf(this.writes_,e,r)}}getChildAfterChild(e,n,r){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:jr(this.viewCache_),i=tP(this.writes_,s,n,1,r,e);return i.length===0?null:i[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sP(t){return{filter:t}}function iP(t,e){P(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),P(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function oP(t,e,n,r,s){const i=new nP;let o,a;if(n.type===Et.OVERWRITE){const c=n;c.source.fromUser?o=Rd(t,e,c.path,c.snap,r,s,i):(P(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!W(c.path),o=gl(t,e,c.path,c.snap,r,s,a,i))}else if(n.type===Et.MERGE){const c=n;c.source.fromUser?o=lP(t,e,c.path,c.children,r,s,i):(P(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Pd(t,e,c.path,c.children,r,s,a,i))}else if(n.type===Et.ACK_USER_WRITE){const c=n;c.revert?o=dP(t,e,c.path,r,s,i):o=cP(t,e,c.path,c.affectedTree,r,s,i)}else if(n.type===Et.LISTEN_COMPLETE)o=uP(t,e,n.path,r,i);else throw Bs("Unknown operation type: "+n.type);const l=i.getChanges();return aP(e,o,l),{viewCache:o,changes:l}}function aP(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),i=fl(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!r.getNode().equals(i)||!r.getNode().getPriority().equals(i.getPriority()))&&n.push(iw(fl(e)))}}function fw(t,e,n,r,s,i){const o=e.eventCache;if(ml(r,n)!=null)return e;{let a,l;if(W(n))if(P(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=jr(e),d=c instanceof L?c:L.EMPTY_NODE,h=pf(r,d);a=t.filter.updateFullNode(e.eventCache.getNode(),h,i)}else{const c=pl(r,jr(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,i)}else{const c=$(n);if(c===".priority"){P(nr(n)===1,"Can't have a priority with additional path components");const d=o.getNode();l=e.serverCache.getNode();const h=fg(r,n,d,l);h!=null?a=t.filter.updatePriority(d,h):a=o.getNode()}else{const d=Z(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const f=fg(r,n,o.getNode(),l);f!=null?h=o.getNode().getImmediateChild(c).updateChild(d,f):h=o.getNode().getImmediateChild(c)}else h=mf(r,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,d,s,i):a=o.getNode()}}return Ti(e,a,o.isFullyInitialized()||W(n),t.filter.filtersNodes())}}function gl(t,e,n,r,s,i,o,a){const l=e.serverCache;let c;const d=o?t.filter:t.filter.getIndexedFilter();if(W(n))c=d.updateFullNode(l.getNode(),r,null);else if(d.filtersNodes()&&!l.isFiltered()){const g=l.getNode().updateChild(n,r);c=d.updateFullNode(l.getNode(),g,null)}else{const g=$(n);if(!l.isCompleteForPath(n)&&nr(n)>1)return e;const y=Z(n),k=l.getNode().getImmediateChild(g).updateChild(y,r);g===".priority"?c=d.updatePriority(l.getNode(),k):c=d.updateChild(l.getNode(),g,k,y,hw,null)}const h=ow(e,c,l.isFullyInitialized()||W(n),d.filtersNodes()),f=new gf(s,h,i);return fw(t,h,n,s,f,a)}function Rd(t,e,n,r,s,i,o){const a=e.eventCache;let l,c;const d=new gf(s,e,i);if(W(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Ti(e,c,!0,t.filter.filtersNodes());else{const h=$(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),l=Ti(e,c,a.isFullyInitialized(),a.isFiltered());else{const f=Z(n),g=a.getNode().getImmediateChild(h);let y;if(W(f))y=r;else{const w=d.getCompleteChild(h);w!=null?rf(f)===".priority"&&w.getChild(X_(f)).isEmpty()?y=w:y=w.updateChild(f,r):y=L.EMPTY_NODE}if(g.equals(y))l=e;else{const w=t.filter.updateChild(a.getNode(),h,y,f,d,o);l=Ti(e,w,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function pg(t,e){return t.eventCache.isCompleteForChild(e)}function lP(t,e,n,r,s,i,o){let a=e;return r.foreach((l,c)=>{const d=ue(n,l);pg(e,$(d))&&(a=Rd(t,a,d,c,s,i,o))}),r.foreach((l,c)=>{const d=ue(n,l);pg(e,$(d))||(a=Rd(t,a,d,c,s,i,o))}),a}function mg(t,e,n){return n.foreach((r,s)=>{e=e.updateChild(r,s)}),e}function Pd(t,e,n,r,s,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;W(n)?c=r:c=new te(null).setTree(n,r);const d=e.serverCache.getNode();return c.children.inorderTraversal((h,f)=>{if(d.hasChild(h)){const g=e.serverCache.getNode().getImmediateChild(h),y=mg(t,g,f);l=gl(t,l,new q(h),y,s,i,o,a)}}),c.children.inorderTraversal((h,f)=>{const g=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!d.hasChild(h)&&!g){const y=e.serverCache.getNode().getImmediateChild(h),w=mg(t,y,f);l=gl(t,l,new q(h),w,s,i,o,a)}}),l}function cP(t,e,n,r,s,i,o){if(ml(s,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(W(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return gl(t,e,n,l.getNode().getChild(n),s,i,a,o);if(W(n)){let c=new te(null);return l.getNode().forEachChild(Kn,(d,h)=>{c=c.set(new q(d),h)}),Pd(t,e,n,c,s,i,a,o)}else return e}else{let c=new te(null);return r.foreach((d,h)=>{const f=ue(n,d);l.isCompleteForPath(f)&&(c=c.set(d,l.getNode().getChild(f)))}),Pd(t,e,n,c,s,i,a,o)}}function uP(t,e,n,r,s){const i=e.serverCache,o=ow(e,i.getNode(),i.isFullyInitialized()||W(n),i.isFiltered());return fw(t,o,n,r,hw,s)}function dP(t,e,n,r,s,i){let o;if(ml(r,n)!=null)return e;{const a=new gf(r,e,s),l=e.eventCache.getNode();let c;if(W(n)||$(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=pl(r,jr(e));else{const h=e.serverCache.getNode();P(h instanceof L,"serverChildren would be complete if leaf node"),d=pf(r,h)}d=d,c=t.filter.updateFullNode(l,d,i)}else{const d=$(n);let h=mf(r,d,e.serverCache);h==null&&e.serverCache.isCompleteForChild(d)&&(h=l.getImmediateChild(d)),h!=null?c=t.filter.updateChild(l,d,h,Z(n),a,i):e.eventCache.getNode().hasChild(d)?c=t.filter.updateChild(l,d,L.EMPTY_NODE,Z(n),a,i):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=pl(r,jr(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,i)))}return o=e.serverCache.isFullyInitialized()||ml(r,K())!=null,Ti(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hP{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,s=new cf(r.getIndex()),i=IR(r);this.processor_=sP(i);const o=n.serverCache,a=n.eventCache,l=s.updateFullNode(L.EMPTY_NODE,o.getNode(),null),c=i.updateFullNode(L.EMPTY_NODE,a.getNode(),null),d=new rr(l,o.isFullyInitialized(),s.filtersNodes()),h=new rr(c,a.isFullyInitialized(),i.filtersNodes());this.viewCache_=tc(h,d),this.eventGenerator_=new DR(this.query_)}get query(){return this.query_}}function fP(t){return t.viewCache_.serverCache.getNode()}function pP(t){return fl(t.viewCache_)}function mP(t,e){const n=jr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!W(e)&&!n.getImmediateChild($(e)).isEmpty())?n.getChild(e):null}function gg(t){return t.eventRegistrations_.length===0}function gP(t,e){t.eventRegistrations_.push(e)}function yg(t,e,n){const r=[];if(n){P(e==null,"A cancel should cancel all event registrations.");const s=t.query._path;t.eventRegistrations_.forEach(i=>{const o=i.createCancelEvent(n,s);o&&r.push(o)})}if(e){let s=[];for(let i=0;i<t.eventRegistrations_.length;++i){const o=t.eventRegistrations_[i];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(t.eventRegistrations_.slice(i+1));break}}t.eventRegistrations_=s}else t.eventRegistrations_=[];return r}function vg(t,e,n,r){e.type===Et.MERGE&&e.source.queryId!==null&&(P(jr(t.viewCache_),"We should always have a full cache before handling merges"),P(fl(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,i=oP(t.processor_,s,e,n,r);return iP(t.processor_,i.viewCache),P(i.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=i.viewCache,pw(t,i.changes,i.viewCache.eventCache.getNode(),null)}function yP(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ie,(i,o)=>{r.push(Os(i,o))}),n.isFullyInitialized()&&r.push(iw(n.getNode())),pw(t,r,n.getNode(),e)}function pw(t,e,n,r){const s=r?[r]:t.eventRegistrations_;return FR(t.eventGenerator_,e,n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yl;class mw{constructor(){this.views=new Map}}function vP(t){P(!yl,"__referenceConstructor has already been defined"),yl=t}function _P(){return P(yl,"Reference.ts has not been loaded"),yl}function wP(t){return t.views.size===0}function yf(t,e,n,r){const s=e.source.queryId;if(s!==null){const i=t.views.get(s);return P(i!=null,"SyncTree gave us an op for an invalid query."),vg(i,e,n,r)}else{let i=[];for(const o of t.views.values())i=i.concat(vg(o,e,n,r));return i}}function gw(t,e,n,r,s){const i=e._queryIdentifier,o=t.views.get(i);if(!o){let a=pl(n,s?r:null),l=!1;a?l=!0:r instanceof L?(a=pf(n,r),l=!1):(a=L.EMPTY_NODE,l=!1);const c=tc(new rr(a,l,!1),new rr(r,s,!1));return new hP(e,c)}return o}function xP(t,e,n,r,s,i){const o=gw(t,e,r,s,i);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),gP(o,n),yP(o,n)}function kP(t,e,n,r){const s=e._queryIdentifier,i=[];let o=[];const a=sr(t);if(s==="default")for(const[l,c]of t.views.entries())o=o.concat(yg(c,n,r)),gg(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||i.push(c.query));else{const l=t.views.get(s);l&&(o=o.concat(yg(l,n,r)),gg(l)&&(t.views.delete(s),l.query._queryParams.loadsAllData()||i.push(l.query)))}return a&&!sr(t)&&i.push(new(_P())(e._repo,e._path)),{removed:i,events:o}}function yw(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function qn(t,e){let n=null;for(const r of t.views.values())n=n||mP(r,e);return n}function vw(t,e){if(e._queryParams.loadsAllData())return rc(t);{const r=e._queryIdentifier;return t.views.get(r)}}function _w(t,e){return vw(t,e)!=null}function sr(t){return rc(t)!=null}function rc(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vl;function EP(t){P(!vl,"__referenceConstructor has already been defined"),vl=t}function SP(){return P(vl,"Reference.ts has not been loaded"),vl}let bP=1;class _g{constructor(e){this.listenProvider_=e,this.syncPointTree_=new te(null),this.pendingWriteTree_=eP(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function vf(t,e,n,r,s){return zR(t.pendingWriteTree_,e,n,r,s),s?qs(t,new Mr(df(),e,n)):[]}function CP(t,e,n,r){BR(t.pendingWriteTree_,e,n,r);const s=te.fromObject(n);return qs(t,new Ms(df(),e,s))}function jn(t,e,n=!1){const r=VR(t.pendingWriteTree_,e);if(HR(t.pendingWriteTree_,e)){let i=new te(null);return r.snap!=null?i=i.set(K(),!0):Ne(r.children,o=>{i=i.set(new q(o),!0)}),qs(t,new hl(r.path,i,n))}else return[]}function Ro(t,e,n){return qs(t,new Mr(hf(),e,n))}function IP(t,e,n){const r=te.fromObject(n);return qs(t,new Ms(hf(),e,r))}function NP(t,e){return qs(t,new ao(hf(),e))}function TP(t,e,n){const r=_f(t,n);if(r){const s=wf(r),i=s.path,o=s.queryId,a=We(i,e),l=new ao(ff(o),a);return xf(t,i,l)}else return[]}function _l(t,e,n,r,s=!1){const i=e._path,o=t.syncPointTree_.get(i);let a=[];if(o&&(e._queryIdentifier==="default"||_w(o,e))){const l=kP(o,e,n,r);wP(o)&&(t.syncPointTree_=t.syncPointTree_.remove(i));const c=l.removed;if(a=l.events,!s){const d=c.findIndex(f=>f._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(i,(f,g)=>sr(g));if(d&&!h){const f=t.syncPointTree_.subtree(i);if(!f.isEmpty()){const g=AP(f);for(let y=0;y<g.length;++y){const w=g[y],k=w.query,v=Ew(t,w);t.listenProvider_.startListening(Pi(k),lo(t,k),v.hashFn,v.onComplete)}}}!h&&c.length>0&&!r&&(d?t.listenProvider_.stopListening(Pi(e),null):c.forEach(f=>{const g=t.queryToTagMap.get(ic(f));t.listenProvider_.stopListening(Pi(f),g)}))}OP(t,c)}return a}function ww(t,e,n,r){const s=_f(t,r);if(s!=null){const i=wf(s),o=i.path,a=i.queryId,l=We(o,e),c=new Mr(ff(a),l,n);return xf(t,o,c)}else return[]}function RP(t,e,n,r){const s=_f(t,r);if(s){const i=wf(s),o=i.path,a=i.queryId,l=We(o,e),c=te.fromObject(n),d=new Ms(ff(a),l,c);return xf(t,o,d)}else return[]}function Ad(t,e,n,r=!1){const s=e._path;let i=null,o=!1;t.syncPointTree_.foreachOnPath(s,(f,g)=>{const y=We(f,s);i=i||qn(g,y),o=o||sr(g)});let a=t.syncPointTree_.get(s);a?(o=o||sr(a),i=i||qn(a,K())):(a=new mw,t.syncPointTree_=t.syncPointTree_.set(s,a));let l;i!=null?l=!0:(l=!1,i=L.EMPTY_NODE,t.syncPointTree_.subtree(s).foreachChild((g,y)=>{const w=qn(y,K());w&&(i=i.updateImmediateChild(g,w))}));const c=_w(a,e);if(!c&&!e._queryParams.loadsAllData()){const f=ic(e);P(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const g=MP();t.queryToTagMap.set(f,g),t.tagToQueryMap.set(g,f)}const d=nc(t.pendingWriteTree_,s);let h=xP(a,e,n,d,i,l);if(!c&&!o&&!r){const f=vw(a,e);h=h.concat(jP(t,e,f))}return h}function sc(t,e,n){const s=t.pendingWriteTree_,i=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=We(o,e),c=qn(a,l);if(c)return c});return cw(s,e,i,n,!0)}function PP(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(c,d)=>{const h=We(c,n);r=r||qn(d,h)});let s=t.syncPointTree_.get(n);s?r=r||qn(s,K()):(s=new mw,t.syncPointTree_=t.syncPointTree_.set(n,s));const i=r!=null,o=i?new rr(r,!0,!1):null,a=nc(t.pendingWriteTree_,e._path),l=gw(s,e,a,i?o.getNode():L.EMPTY_NODE,i);return pP(l)}function qs(t,e){return xw(e,t.syncPointTree_,null,nc(t.pendingWriteTree_,K()))}function xw(t,e,n,r){if(W(t.path))return kw(t,e,n,r);{const s=e.get(K());n==null&&s!=null&&(n=qn(s,K()));let i=[];const o=$(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,d=uw(r,o);i=i.concat(xw(a,l,c,d))}return s&&(i=i.concat(yf(s,t,r,n))),i}}function kw(t,e,n,r){const s=e.get(K());n==null&&s!=null&&(n=qn(s,K()));let i=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=uw(r,o),d=t.operationForChild(o);d&&(i=i.concat(kw(d,a,l,c)))}),s&&(i=i.concat(yf(s,t,r,n))),i}function Ew(t,e){const n=e.query,r=lo(t,n);return{hashFn:()=>(fP(e)||L.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return r?TP(t,n._path,r):NP(t,n._path);{const i=IT(s,n);return _l(t,n,null,i)}}}}function lo(t,e){const n=ic(e);return t.queryToTagMap.get(n)}function ic(t){return t._path.toString()+"$"+t._queryIdentifier}function _f(t,e){return t.tagToQueryMap.get(e)}function wf(t){const e=t.indexOf("$");return P(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new q(t.substr(0,e))}}function xf(t,e,n){const r=t.syncPointTree_.get(e);P(r,"Missing sync point for query tag that we're tracking");const s=nc(t.pendingWriteTree_,e);return yf(r,n,s,null)}function AP(t){return t.fold((e,n,r)=>{if(n&&sr(n))return[rc(n)];{let s=[];return n&&(s=yw(n)),Ne(r,(i,o)=>{s=s.concat(o)}),s}})}function Pi(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(SP())(t._repo,t._path):t}function OP(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const s=ic(r),i=t.queryToTagMap.get(s);t.queryToTagMap.delete(s),t.tagToQueryMap.delete(i)}}}function MP(){return bP++}function jP(t,e,n){const r=e._path,s=lo(t,e),i=Ew(t,n),o=t.listenProvider_.startListening(Pi(e),s,i.hashFn,i.onComplete),a=t.syncPointTree_.subtree(r);if(s)P(!sr(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,d,h)=>{if(!W(c)&&d&&sr(d))return[rc(d).query];{let f=[];return d&&(f=f.concat(yw(d).map(g=>g.query))),Ne(h,(g,y)=>{f=f.concat(y)}),f}});for(let c=0;c<l.length;++c){const d=l[c];t.listenProvider_.stopListening(Pi(d),lo(t,d))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new kf(n)}node(){return this.node_}}class Ef{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ue(this.path_,e);return new Ef(this.syncTree_,n)}node(){return sc(this.syncTree_,this.path_)}}const LP=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},wg=function(t,e,n){if(!t||typeof t!="object")return t;if(P(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return DP(t[".sv"],e,n);if(typeof t[".sv"]=="object")return FP(t[".sv"],e);P(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},DP=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:P(!1,"Unexpected server value: "+t)}},FP=function(t,e,n){t.hasOwnProperty("increment")||P(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&P(!1,"Unexpected increment value: "+r);const s=e.node();if(P(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const o=s.getValue();return typeof o!="number"?r:o+r},Sw=function(t,e,n,r){return bf(e,new Ef(n,t),r)},Sf=function(t,e,n){return bf(t,new kf(e),n)};function bf(t,e,n){const r=t.getPriority().val(),s=wg(r,e.getImmediateChild(".priority"),n);let i;if(t.isLeafNode()){const o=t,a=wg(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new Ee(a,ce(s)):t}else{const o=t;return i=o,s!==o.getPriority().val()&&(i=i.updatePriority(new Ee(s))),o.forEachChild(ie,(a,l)=>{const c=bf(l,e.getImmediateChild(a),n);c!==l&&(i=i.updateImmediateChild(a,c))}),i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function oc(t,e){let n=e instanceof q?e:new q(e),r=t,s=$(n);for(;s!==null;){const i=Pr(r.node.children,s)||{children:{},childCount:0};r=new Cf(s,r,i),n=Z(n),s=$(n)}return r}function qr(t){return t.node.value}function If(t,e){t.node.value=e,Od(t)}function bw(t){return t.node.childCount>0}function UP(t){return qr(t)===void 0&&!bw(t)}function ac(t,e){Ne(t.node.children,(n,r)=>{e(new Cf(n,t,r))})}function Cw(t,e,n,r){n&&e(t),ac(t,s=>{Cw(s,e,!0)})}function $P(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Po(t){return new q(t.parent===null?t.name:Po(t.parent)+"/"+t.name)}function Od(t){t.parent!==null&&WP(t.parent,t.name,t)}function WP(t,e,n){const r=UP(n),s=Rt(t.node.children,e);r&&s?(delete t.node.children[e],t.node.childCount--,Od(t)):!r&&!s&&(t.node.children[e]=n.node,t.node.childCount++,Od(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zP=/[\[\].#$\/\u0000-\u001F\u007F]/,BP=/[\[\].#$\u0000-\u001F\u007F]/,iu=10*1024*1024,Nf=function(t){return typeof t=="string"&&t.length!==0&&!zP.test(t)},Iw=function(t){return typeof t=="string"&&t.length!==0&&!BP.test(t)},VP=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Iw(t)},co=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Zl(t)||t&&typeof t=="object"&&Rt(t,".sv")},uo=function(t,e,n,r){r&&e===void 0||Ao(Ps(t,"value"),e,n)},Ao=function(t,e,n){const r=n instanceof q?new aR(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+gr(r));if(typeof e=="function")throw new Error(t+"contains a function "+gr(r)+" with contents = "+e.toString());if(Zl(e))throw new Error(t+"contains "+e.toString()+" "+gr(r));if(typeof e=="string"&&e.length>iu/3&&Gl(e)>iu)throw new Error(t+"contains a string greater than "+iu+" utf8 bytes "+gr(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,i=!1;if(Ne(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!Nf(o)))throw new Error(t+" contains an invalid key ("+o+") "+gr(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);lR(r,o),Ao(t,a,r),cR(r)}),s&&i)throw new Error(t+' contains ".value" child '+gr(r)+" in addition to actual children.")}},HP=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const i=ro(r);for(let o=0;o<i.length;o++)if(!(i[o]===".priority"&&o===i.length-1)){if(!Nf(i[o]))throw new Error(t+"contains an invalid key ("+i[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(oR);let s=null;for(n=0;n<e.length;n++){if(r=e[n],s!==null&&dt(s,r))throw new Error(t+"contains a path "+s.toString()+" that is ancestor of another path "+r.toString());s=r}},Nw=function(t,e,n,r){const s=Ps(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const i=[];Ne(e,(o,a)=>{const l=new q(o);if(Ao(s,a,ue(n,l)),rf(l)===".priority"&&!co(a))throw new Error(s+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");i.push(l)}),HP(s,i)},KP=function(t,e,n){if(Zl(e))throw new Error(Ps(t,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!co(e))throw new Error(Ps(t,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},Tf=function(t,e,n,r){if(!Iw(n))throw new Error(Ps(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},GP=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Tf(t,e,n)},Ln=function(t,e){if($(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},qP=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Nf(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!VP(n))throw new Error(Ps(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QP{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function lc(t,e){let n=null;for(let r=0;r<e.length;r++){const s=e[r],i=s.getPath();n!==null&&!sf(i,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:i}),n.events.push(s)}n&&t.eventLists_.push(n)}function Tw(t,e,n){lc(t,n),Rw(t,r=>sf(r,e))}function it(t,e,n){lc(t,n),Rw(t,r=>dt(r,e)||dt(e,r))}function Rw(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const s=t.eventLists_[r];if(s){const i=s.path;e(i)?(YP(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function YP(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Ii&&Ce("event: "+n.toString()),Ks(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XP="repo_interrupt",JP=25;class ZP{constructor(e,n,r,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new QP,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=dl(),this.transactionQueueTree_=new Cf,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function e2(t,e,n){if(t.stats_=tf(t.repoInfo_),t.forceRestClient_||PT())t.server_=new ul(t.repoInfo_,(r,s,i,o)=>{xg(t,r,s,i,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>kg(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{we(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new cn(t.repoInfo_,e,(r,s,i,o)=>{xg(t,r,s,i,o)},r=>{kg(t,r)},r=>{t2(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=LT(t.repoInfo_,()=>new LR(t.stats_,t.server_)),t.infoData_=new PR,t.infoSyncTree_=new _g({startListening:(r,s,i,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=Ro(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Rf(t,"connected",!1),t.serverSyncTree_=new _g({startListening:(r,s,i,o)=>(t.server_.listen(r,i,s,(a,l)=>{const c=o(a,l);it(t.eventQueue_,r._path,c)}),[]),stopListening:(r,s)=>{t.server_.unlisten(r,s)}})}function Pw(t){const n=t.infoData_.getNode(new q(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Oo(t){return LP({timestamp:Pw(t)})}function xg(t,e,n,r,s){t.dataUpdateCount++;const i=new q(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(r){const l=Za(n,c=>ce(c));o=RP(t.serverSyncTree_,i,l,s)}else{const l=ce(n);o=ww(t.serverSyncTree_,i,l,s)}else if(r){const l=Za(n,c=>ce(c));o=IP(t.serverSyncTree_,i,l)}else{const l=ce(n);o=Ro(t.serverSyncTree_,i,l)}let a=i;o.length>0&&(a=Ls(t,i)),it(t.eventQueue_,a,o)}function kg(t,e){Rf(t,"connected",e),e===!1&&i2(t)}function t2(t,e){Ne(e,(n,r)=>{Rf(t,n,r)})}function Rf(t,e,n){const r=new q("/.info/"+e),s=ce(n);t.infoData_.updateSnapshot(r,s);const i=Ro(t.infoSyncTree_,r,s);it(t.eventQueue_,r,i)}function cc(t){return t.nextWriteId_++}function n2(t,e,n){const r=PP(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(s=>{const i=ce(s).withIndex(e._queryParams.getIndex());Ad(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Ro(t.serverSyncTree_,e._path,i);else{const a=lo(t.serverSyncTree_,e);o=ww(t.serverSyncTree_,e._path,i,a)}return it(t.eventQueue_,e._path,o),_l(t.serverSyncTree_,e,n,null,!0),i},s=>(Qs(t,"get for query "+we(e)+" failed: "+s),Promise.reject(new Error(s))))}function r2(t,e,n,r,s){Qs(t,"set",{path:e.toString(),value:n,priority:r});const i=Oo(t),o=ce(n,r),a=sc(t.serverSyncTree_,e),l=Sf(o,a,i),c=cc(t),d=vf(t.serverSyncTree_,e,l,c,!0);lc(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(f,g)=>{const y=f==="ok";y||Be("set at "+e+" failed: "+f);const w=jn(t.serverSyncTree_,c,!y);it(t.eventQueue_,e,w),ir(t,s,f,g)});const h=Af(t,e);Ls(t,h),it(t.eventQueue_,h,[])}function s2(t,e,n,r){Qs(t,"update",{path:e.toString(),value:n});let s=!0;const i=Oo(t),o={};if(Ne(n,(a,l)=>{s=!1,o[a]=Sw(ue(e,a),ce(l),t.serverSyncTree_,i)}),s)Ce("update() called with empty data.  Don't do anything."),ir(t,r,"ok",void 0);else{const a=cc(t),l=CP(t.serverSyncTree_,e,o,a);lc(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,d)=>{const h=c==="ok";h||Be("update at "+e+" failed: "+c);const f=jn(t.serverSyncTree_,a,!h),g=f.length>0?Ls(t,e):e;it(t.eventQueue_,g,f),ir(t,r,c,d)}),Ne(n,c=>{const d=Af(t,ue(e,c));Ls(t,d)}),it(t.eventQueue_,e,[])}}function i2(t){Qs(t,"onDisconnectEvents");const e=Oo(t),n=dl();Cd(t.onDisconnect_,K(),(s,i)=>{const o=Sw(s,i,t.serverSyncTree_,e);Gs(n,s,o)});let r=[];Cd(n,K(),(s,i)=>{r=r.concat(Ro(t.serverSyncTree_,s,i));const o=Af(t,s);Ls(t,o)}),t.onDisconnect_=dl(),it(t.eventQueue_,K(),r)}function o2(t,e,n){t.server_.onDisconnectCancel(e.toString(),(r,s)=>{r==="ok"&&bd(t.onDisconnect_,e),ir(t,n,r,s)})}function Eg(t,e,n,r){const s=ce(n);t.server_.onDisconnectPut(e.toString(),s.val(!0),(i,o)=>{i==="ok"&&Gs(t.onDisconnect_,e,s),ir(t,r,i,o)})}function a2(t,e,n,r,s){const i=ce(n,r);t.server_.onDisconnectPut(e.toString(),i.val(!0),(o,a)=>{o==="ok"&&Gs(t.onDisconnect_,e,i),ir(t,s,o,a)})}function l2(t,e,n,r){if(Ja(n)){Ce("onDisconnect().update() called with empty data.  Don't do anything."),ir(t,r,"ok",void 0);return}t.server_.onDisconnectMerge(e.toString(),n,(s,i)=>{s==="ok"&&Ne(n,(o,a)=>{const l=ce(a);Gs(t.onDisconnect_,ue(e,o),l)}),ir(t,r,s,i)})}function c2(t,e,n){let r;$(e._path)===".info"?r=Ad(t.infoSyncTree_,e,n):r=Ad(t.serverSyncTree_,e,n),Tw(t.eventQueue_,e._path,r)}function Md(t,e,n){let r;$(e._path)===".info"?r=_l(t.infoSyncTree_,e,n):r=_l(t.serverSyncTree_,e,n),Tw(t.eventQueue_,e._path,r)}function u2(t){t.persistentConnection_&&t.persistentConnection_.interrupt(XP)}function Qs(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ce(n,...e)}function ir(t,e,n,r){e&&Ks(()=>{if(n==="ok")e(null);else{const s=(n||"error").toUpperCase();let i=s;r&&(i+=": "+r);const o=new Error(i);o.code=s,e(o)}})}function d2(t,e,n,r,s,i){Qs(t,"transaction on "+e);const o={path:e,update:n,onComplete:r,status:null,order:T_(),applyLocally:i,retryCount:0,unwatcher:s,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},a=Pf(t,e,void 0);o.currentInputSnapshot=a;const l=o.update(a.val());if(l===void 0)o.unwatcher(),o.currentOutputSnapshotRaw=null,o.currentOutputSnapshotResolved=null,o.onComplete&&o.onComplete(null,!1,o.currentInputSnapshot);else{Ao("transaction failed: Data returned ",l,o.path),o.status=0;const c=oc(t.transactionQueueTree_,e),d=qr(c)||[];d.push(o),If(c,d);let h;typeof l=="object"&&l!==null&&Rt(l,".priority")?(h=Pr(l,".priority"),P(co(h),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):h=(sc(t.serverSyncTree_,e)||L.EMPTY_NODE).getPriority().val();const f=Oo(t),g=ce(l,h),y=Sf(g,a,f);o.currentOutputSnapshotRaw=g,o.currentOutputSnapshotResolved=y,o.currentWriteId=cc(t);const w=vf(t.serverSyncTree_,e,y,o.currentWriteId,o.applyLocally);it(t.eventQueue_,e,w),uc(t,t.transactionQueueTree_)}}function Pf(t,e,n){return sc(t.serverSyncTree_,e,n)||L.EMPTY_NODE}function uc(t,e=t.transactionQueueTree_){if(e||dc(t,e),qr(e)){const n=Ow(t,e);P(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&h2(t,Po(e),n)}else bw(e)&&ac(e,n=>{uc(t,n)})}function h2(t,e,n){const r=n.map(c=>c.currentWriteId),s=Pf(t,e,r);let i=s;const o=s.hash();for(let c=0;c<n.length;c++){const d=n[c];P(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const h=We(e,d.path);i=i.updateChild(h,d.currentOutputSnapshotRaw)}const a=i.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Qs(t,"transaction put response",{path:l.toString(),status:c});let d=[];if(c==="ok"){const h=[];for(let f=0;f<n.length;f++)n[f].status=2,d=d.concat(jn(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&h.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();dc(t,oc(t.transactionQueueTree_,e)),uc(t,t.transactionQueueTree_),it(t.eventQueue_,e,d);for(let f=0;f<h.length;f++)Ks(h[f])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Be("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}Ls(t,e)}},o)}function Ls(t,e){const n=Aw(t,e),r=Po(n),s=Ow(t,n);return f2(t,s,r),r}function f2(t,e,n){if(e.length===0)return;const r=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=We(n,l.path);let d=!1,h;if(P(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)d=!0,h=l.abortReason,s=s.concat(jn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=JP)d=!0,h="maxretry",s=s.concat(jn(t.serverSyncTree_,l.currentWriteId,!0));else{const f=Pf(t,l.path,o);l.currentInputSnapshot=f;const g=e[a].update(f.val());if(g!==void 0){Ao("transaction failed: Data returned ",g,l.path);let y=ce(g);typeof g=="object"&&g!=null&&Rt(g,".priority")||(y=y.updatePriority(f.getPriority()));const k=l.currentWriteId,v=Oo(t),p=Sf(y,f,v);l.currentOutputSnapshotRaw=y,l.currentOutputSnapshotResolved=p,l.currentWriteId=cc(t),o.splice(o.indexOf(k),1),s=s.concat(vf(t.serverSyncTree_,l.path,p,l.currentWriteId,l.applyLocally)),s=s.concat(jn(t.serverSyncTree_,k,!0))}else d=!0,h="nodata",s=s.concat(jn(t.serverSyncTree_,l.currentWriteId,!0))}it(t.eventQueue_,n,s),s=[],d&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(h),!1,null))))}dc(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Ks(r[a]);uc(t,t.transactionQueueTree_)}function Aw(t,e){let n,r=t.transactionQueueTree_;for(n=$(e);n!==null&&qr(r)===void 0;)r=oc(r,n),e=Z(e),n=$(e);return r}function Ow(t,e){const n=[];return Mw(t,e,n),n.sort((r,s)=>r.order-s.order),n}function Mw(t,e,n){const r=qr(e);if(r)for(let s=0;s<r.length;s++)n.push(r[s]);ac(e,s=>{Mw(t,s,n)})}function dc(t,e){const n=qr(e);if(n){let r=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[r]=n[s],r++);n.length=r,If(e,n.length>0?n:void 0)}ac(e,r=>{dc(t,r)})}function Af(t,e){const n=Po(Aw(t,e)),r=oc(t.transactionQueueTree_,e);return $P(r,s=>{ou(t,s)}),ou(t,r),Cw(r,s=>{ou(t,s)}),n}function ou(t,e){const n=qr(e);if(n){const r=[];let s=[],i=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(P(i===o-1,"All SENT items should be at beginning of queue."),i=o,n[o].status=3,n[o].abortReason="set"):(P(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(jn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?If(e,void 0):n.length=i+1,it(t.eventQueue_,Po(e),s);for(let o=0;o<r.length;o++)Ks(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p2(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let s=n[r];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function m2(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Be(`Invalid query segment '${n}' in query '${t}'`)}return e}const Sg=function(t,e){const n=g2(t),r=n.namespace;n.domain==="firebase.com"&&yn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&yn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||kT();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new z_(n.host,n.secure,r,s,e,"",r!==n.subdomain),path:new q(n.pathString)}},g2=function(t){let e="",n="",r="",s="",i="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let d=t.indexOf("/");d===-1&&(d=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(d,h)),d<h&&(s=p2(t.substring(d,h)));const f=m2(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const g=e.slice(0,c);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const y=e.indexOf(".");r=e.substring(0,y).toLowerCase(),n=e.substring(y+1),i=r}"ns"in f&&(i=f.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:s,namespace:i}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bg="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",y2=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let s;const i=new Array(8);for(s=7;s>=0;s--)i[s]=bg.charAt(n%64),n=Math.floor(n/64);P(n===0,"Cannot push at time == 0");let o=i.join("");if(r){for(s=11;s>=0&&e[s]===63;s--)e[s]=0;e[s]++}else for(s=0;s<12;s++)e[s]=Math.floor(Math.random()*64);for(s=0;s<12;s++)o+=bg.charAt(e[s]);return P(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v2{constructor(e,n,r,s){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+we(this.snapshot.exportVal())}}class _2{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jw{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return P(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class w2{constructor(e,n){this._repo=e,this._path=n}cancel(){const e=new xt;return o2(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){Ln("OnDisconnect.remove",this._path);const e=new xt;return Eg(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){Ln("OnDisconnect.set",this._path),uo("OnDisconnect.set",e,this._path,!1);const n=new xt;return Eg(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}setWithPriority(e,n){Ln("OnDisconnect.setWithPriority",this._path),uo("OnDisconnect.setWithPriority",e,this._path,!1),KP("OnDisconnect.setWithPriority",n);const r=new xt;return a2(this._repo,this._path,e,n,r.wrapCallback(()=>{})),r.promise}update(e){Ln("OnDisconnect.update",this._path),Nw("OnDisconnect.update",e,this._path);const n=new xt;return l2(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}}/**
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
 */class Ys{constructor(e,n,r,s){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=s}get key(){return W(this._path)?null:rf(this._path)}get ref(){return new Kt(this._repo,this._path)}get _queryIdentifier(){const e=cg(this._queryParams),n=Zh(e);return n==="{}"?"default":n}get _queryObject(){return cg(this._queryParams)}isEqual(e){if(e=ee(e),!(e instanceof Ys))return!1;const n=this._repo===e._repo,r=sf(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&r&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+iR(this._path)}}function x2(t,e){if(t._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function Lw(t){let e=null,n=null;if(t.hasStart()&&(e=t.getIndexStartValue()),t.hasEnd()&&(n=t.getIndexEndValue()),t.getIndex()===Kn){const r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",s="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(t.hasStart()){if(t.getIndexStartName()!==er)throw new Error(r);if(typeof e!="string")throw new Error(s)}if(t.hasEnd()){if(t.getIndexEndName()!==tr)throw new Error(r);if(typeof n!="string")throw new Error(s)}}else if(t.getIndex()===ie){if(e!=null&&!co(e)||n!=null&&!co(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(P(t.getIndex()instanceof lf||t.getIndex()===sw,"unknown index type."),e!=null&&typeof e=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function k2(t){if(t.hasStart()&&t.hasEnd()&&t.hasLimit()&&!t.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class Kt extends Ys{constructor(e,n){super(e,n,new uf,!1)}get parent(){const e=X_(this._path);return e===null?null:new Kt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ds{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new q(e),r=ho(this.ref,e);return new Ds(this._node.getChild(n),r,ie)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,s)=>e(new Ds(s,ho(this.ref,r),ie)))}hasChild(e){const n=new q(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function J(t,e){return t=ee(t),t._checkNotDeleted("ref"),e!==void 0?ho(t._root,e):t._root}function ho(t,e){return t=ee(t),$(t._path)===null?GP("child","path",e):Tf("child","path",e),new Kt(t._repo,ue(t._path,e))}function au(t){return t=ee(t),new w2(t._repo,t._path)}function Dw(t,e){t=ee(t),Ln("push",t._path),uo("push",e,t._path,!0);const n=Pw(t._repo),r=y2(n),s=ho(t,r),i=ho(t,r);let o;return e!=null?o=Qr(i,e).then(()=>i):o=Promise.resolve(i),s.then=o.then.bind(o),s.catch=o.then.bind(o,void 0),s}function hc(t){return Ln("remove",t._path),Qr(t,null)}function Qr(t,e){t=ee(t),Ln("set",t._path),uo("set",e,t._path,!1);const n=new xt;return r2(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function E2(t,e){Nw("update",e,t._path);const n=new xt;return s2(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function Qn(t){t=ee(t);const e=new jw(()=>{}),n=new fc(e);return n2(t._repo,t,n).then(r=>new Ds(r,new Kt(t._repo,t._path),t._queryParams.getIndex()))}class fc{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new v2("value",this,new Ds(e.snapshotNode,new Kt(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new _2(this,e,n):null}matches(e){return e instanceof fc?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function S2(t,e,n,r,s){let i;if(typeof r=="object"&&(i=void 0,s=r),typeof r=="function"&&(i=r),s&&s.onlyOnce){const l=n,c=(d,h)=>{Md(t._repo,t,a),l(d,h)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new jw(n,i||void 0),a=new fc(o);return c2(t._repo,t,a),()=>Md(t._repo,t,a)}function Lr(t,e,n,r){return S2(t,"value",e,n,r)}function Fw(t,e,n){Md(t._repo,t,null)}class Of{}class b2 extends Of{constructor(e,n){super(),this._value=e,this._key=n,this.type="endBefore"}_apply(e){uo("endBefore",this._value,e._path,!1);const n=TR(e._queryParams,this._value,this._key);if(k2(n),Lw(n),e._queryParams.hasEnd())throw new Error("endBefore: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new Ys(e._repo,e._path,n,e._orderByCalled)}}function C2(t,e){return new b2(t,e)}class I2 extends Of{constructor(e){super(),this._limit=e,this.type="limitToLast"}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new Ys(e._repo,e._path,NR(e._queryParams,this._limit),e._orderByCalled)}}function jd(t){if(typeof t!="number"||Math.floor(t)!==t||t<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new I2(t)}class N2 extends Of{constructor(e){super(),this._path=e,this.type="orderByChild"}_apply(e){x2(e,"orderByChild");const n=new q(this._path);if(W(n))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const r=new lf(n),s=RR(e._queryParams,r);return Lw(s),new Ys(e._repo,e._path,s,!0)}}function Ld(t){if(t==="$key")throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if(t==="$priority")throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if(t==="$value")throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return Tf("orderByChild","path",t),new N2(t)}function Dd(t,...e){let n=ee(t);for(const r of e)n=r._apply(n);return n}vP(Kt);EP(Kt);/**
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
 */const T2="FIREBASE_DATABASE_EMULATOR_HOST",Fd={};let R2=!1;function P2(t,e,n,r){t.repoInfo_=new z_(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function A2(t,e,n,r,s){let i=r||t.options.databaseURL;i===void 0&&(t.options.projectId||yn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ce("Using default host for project ",t.options.projectId),i=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Sg(i,s),a=o.repoInfo,l;typeof process<"u"&&Vm&&(l=Vm[T2]),l?(i=`http://${l}?ns=${a.namespace}`,o=Sg(i,s),a=o.repoInfo):o.repoInfo.secure;const c=new OT(t.name,t.options,e);qP("Invalid Firebase Database URL",o),W(o.path)||yn("Database URL must point to the root of a Firebase Database (not including a child path).");const d=M2(a,t,c,new AT(t.name,n));return new j2(d,t)}function O2(t,e){const n=Fd[e];(!n||n[t.key]!==t)&&yn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),u2(t),delete n[t.key]}function M2(t,e,n,r){let s=Fd[e.name];s||(s={},Fd[e.name]=s);let i=s[t.toURLString()];return i&&yn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new ZP(t,R2,n,r),s[t.toURLString()]=i,i}class j2{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(e2(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Kt(this._repo,K())),this._rootInternal}_delete(){return this._rootInternal!==null&&(O2(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&yn("Cannot call "+e+" on a deleted database.")}}function L2(t=Ql(),e){const n=Br(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=M0("database");r&&D2(n,...r)}return n}function D2(t,e,n,r={}){t=ee(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&yn("Cannot call useEmulator() after instance has already been initialized.");const s=t._repoInternal;let i;if(s.repoInfo_.nodeAdmin)r.mockUserToken&&yn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),i=new Sa(Sa.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:D0(r.mockUserToken,t.app.options.projectId);i=new Sa(o)}P2(s,e,n,i)}/**
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
 */function F2(t){yT(Vr),Nt(new mt("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return A2(r,s,i,n)},"PUBLIC").setMultipleInstances(!0)),Ze(Hm,Km,t),Ze(Hm,Km,"esm2017")}/**
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
 */const U2={".sv":"timestamp"};function Cg(){return U2}/**
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
 */class $2{constructor(e,n){this.committed=e,this.snapshot=n}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}}function W2(t,e,n){var r;if(t=ee(t),Ln("Reference.transaction",t._path),t.key===".length"||t.key===".keys")throw"Reference.transaction failed: "+t.key+" is a read-only object.";const s=(r=void 0)!==null&&r!==void 0?r:!0,i=new xt,o=(l,c,d)=>{let h=null;l?i.reject(l):(h=new Ds(d,new Kt(t._repo,t._path),ie),i.resolve(new $2(c,h)))},a=Lr(t,()=>{});return d2(t._repo,t._path,e,o,a,s),i.promise}cn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};cn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};F2();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uw="firebasestorage.googleapis.com",$w="storageBucket",z2=2*60*1e3,B2=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me extends Ht{constructor(e,n,r=0){super(lu(e),`Firebase Storage: ${n} (${lu(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,me.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return lu(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var pe;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(pe||(pe={}));function lu(t){return"storage/"+t}function Mf(){const t="An unknown error occurred, please check the error payload for server response.";return new me(pe.UNKNOWN,t)}function V2(t){return new me(pe.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function H2(t){return new me(pe.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function K2(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new me(pe.UNAUTHENTICATED,t)}function G2(){return new me(pe.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function q2(t){return new me(pe.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function Q2(){return new me(pe.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Y2(){return new me(pe.CANCELED,"User canceled the upload/download.")}function X2(t){return new me(pe.INVALID_URL,"Invalid URL '"+t+"'.")}function J2(t){return new me(pe.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Z2(){return new me(pe.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+$w+"' property when initializing the app?")}function eA(){return new me(pe.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function tA(){return new me(pe.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function nA(t){return new me(pe.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Ud(t){return new me(pe.INVALID_ARGUMENT,t)}function Ww(){return new me(pe.APP_DELETED,"The Firebase app was deleted.")}function rA(t){return new me(pe.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ai(t,e){return new me(pe.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function ci(t){throw new me(pe.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=nt.makeFromUrl(e,n)}catch{return new nt(e,"")}if(r.path==="")return r;throw J2(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(_){_.path.charAt(_.path.length-1)==="/"&&(_.path_=_.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function c(_){_.path_=decodeURIComponent(_.path)}const d="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",g=new RegExp(`^https?://${h}/${d}/b/${s}/o${f}`,"i"),y={bucket:1,path:3},w=n===Uw?"(?:storage.googleapis.com|storage.cloud.google.com)":n,k="([^?#]*)",v=new RegExp(`^https?://${w}/${s}/${k}`,"i"),m=[{regex:a,indices:l,postModify:i},{regex:g,indices:y,postModify:c},{regex:v,indices:{bucket:1,path:2},postModify:c}];for(let _=0;_<m.length;_++){const S=m[_],E=S.regex.exec(e);if(E){const b=E[S.indices.bucket];let C=E[S.indices.path];C||(C=""),r=new nt(b,C),S.postModify(r);break}}if(r==null)throw X2(e);return r}}class sA{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iA(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function l(){return a===2}let c=!1;function d(...k){c||(c=!0,e.apply(null,k))}function h(k){s=setTimeout(()=>{s=null,t(g,l())},k)}function f(){i&&clearTimeout(i)}function g(k,...v){if(c){f();return}if(k){f(),d.call(null,k,...v);return}if(l()||o){f(),d.call(null,k,...v);return}r<64&&(r*=2);let m;a===1?(a=2,m=0):m=(r+Math.random())*1e3,h(m)}let y=!1;function w(k){y||(y=!0,f(),!c&&(s!==null?(k||(a=2),clearTimeout(s),h(0)):k||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,w(!0)},n),w}function oA(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aA(t){return t!==void 0}function lA(t){return typeof t=="object"&&!Array.isArray(t)}function jf(t){return typeof t=="string"||t instanceof String}function Ig(t){return Lf()&&t instanceof Blob}function Lf(){return typeof Blob<"u"}function Ng(t,e,n,r){if(r<e)throw Ud(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Ud(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Df(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function zw(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var br;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(br||(br={}));/**
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
 */function cA(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uA{constructor(e,n,r,s,i,o,a,l,c,d,h,f=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=d,this.connectionFactory_=h,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,y)=>{this.resolve_=g,this.reject_=y,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new ra(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===br.NO_ERROR,l=i.getStatus();if(!a||cA(l,this.additionalRetryCodes_)&&this.retry){const d=i.getErrorCode()===br.ABORT;r(!1,new ra(!1,null,d));return}const c=this.successCodes_.indexOf(l)!==-1;r(!0,new ra(c,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());aA(l)?i(l):i()}catch(l){o(l)}else if(a!==null){const l=Mf();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(s.canceled){const l=this.appDelete_?Ww():Y2();o(l)}else{const l=Q2();o(l)}};this.canceled_?n(!1,new ra(!1,null,!0)):this.backoffId_=iA(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&oA(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ra{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function dA(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function hA(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function fA(t,e){e&&(t["X-Firebase-GMPID"]=e)}function pA(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function mA(t,e,n,r,s,i,o=!0){const a=zw(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return fA(c,e),dA(c,n),hA(c,i),pA(c,r),new uA(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gA(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function yA(...t){const e=gA();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Lf())return new Blob(t);throw new me(pe.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function vA(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function _A(t){if(typeof atob>"u")throw nA("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ut={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class cu{constructor(e,n){this.data=e,this.contentType=n||null}}function wA(t,e){switch(t){case Ut.RAW:return new cu(Bw(e));case Ut.BASE64:case Ut.BASE64URL:return new cu(Vw(t,e));case Ut.DATA_URL:return new cu(kA(e),EA(e))}throw Mf()}function Bw(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function xA(t){let e;try{e=decodeURIComponent(t)}catch{throw Ai(Ut.DATA_URL,"Malformed data URL.")}return Bw(e)}function Vw(t,e){switch(t){case Ut.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw Ai(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Ut.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw Ai(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=_A(e)}catch(s){throw s.message.includes("polyfill")?s:Ai(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class Hw{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Ai(Ut.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=SA(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function kA(t){const e=new Hw(t);return e.base64?Vw(Ut.BASE64,e.rest):xA(e.rest)}function EA(t){return new Hw(t).contentType}function SA(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e,n){let r=0,s="";Ig(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(Ig(this.data_)){const r=this.data_,s=vA(r,e,n);return s===null?null:new Pn(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Pn(r,!0)}}static getBlob(...e){if(Lf()){const n=e.map(r=>r instanceof Pn?r.data_:r);return new Pn(yA.apply(null,n))}else{const n=e.map(o=>jf(o)?wA(Ut.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new Pn(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kw(t){let e;try{e=JSON.parse(t)}catch{return null}return lA(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bA(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function CA(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function Gw(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IA(t,e){return e}class Ue{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||IA}}let sa=null;function NA(t){return!jf(t)||t.length<2?t:Gw(t)}function qw(){if(sa)return sa;const t=[];t.push(new Ue("bucket")),t.push(new Ue("generation")),t.push(new Ue("metageneration")),t.push(new Ue("name","fullPath",!0));function e(i,o){return NA(o)}const n=new Ue("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new Ue("size");return s.xform=r,t.push(s),t.push(new Ue("timeCreated")),t.push(new Ue("updated")),t.push(new Ue("md5Hash",null,!0)),t.push(new Ue("cacheControl",null,!0)),t.push(new Ue("contentDisposition",null,!0)),t.push(new Ue("contentEncoding",null,!0)),t.push(new Ue("contentLanguage",null,!0)),t.push(new Ue("contentType",null,!0)),t.push(new Ue("metadata","customMetadata",!0)),sa=t,sa}function TA(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new nt(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function RA(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return TA(r,t),r}function Qw(t,e,n){const r=Kw(e);return r===null?null:RA(t,r,n)}function PA(t,e,n,r){const s=Kw(e);if(s===null||!jf(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(c=>{const d=t.bucket,h=t.fullPath,f="/b/"+o(d)+"/o/"+o(h),g=Df(f,n,r),y=zw({alt:"media",token:c});return g+y})[0]}function AA(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class Yw{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xw(t){if(!t)throw Mf()}function OA(t,e){function n(r,s){const i=Qw(t,s,e);return Xw(i!==null),i}return n}function MA(t,e){function n(r,s){const i=Qw(t,s,e);return Xw(i!==null),PA(i,s,t.host,t._protocol)}return n}function Jw(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=G2():s=K2():n.getStatus()===402?s=H2(t.bucket):n.getStatus()===403?s=q2(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function jA(t){const e=Jw(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=V2(t.path)),i.serverResponse=s.serverResponse,i}return n}function LA(t,e,n){const r=e.fullServerUrl(),s=Df(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new Yw(s,i,MA(t,n),o);return a.errorHandler=jA(e),a}function DA(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function FA(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=DA(null,e)),r}function UA(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let m="";for(let _=0;_<2;_++)m=m+Math.random().toString().slice(2);return m}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const c=FA(e,r,s),d=AA(c,n),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+l+`\r
Content-Type: `+c.contentType+`\r
\r
`,f=`\r
--`+l+"--",g=Pn.getBlob(h,r,f);if(g===null)throw eA();const y={name:c.fullPath},w=Df(i,t.host,t._protocol),k="POST",v=t.maxUploadRetryTime,p=new Yw(w,k,OA(t,n),v);return p.urlParams=y,p.headers=o,p.body=g.uploadData(),p.errorHandler=Jw(e),p}class $A{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=br.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=br.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=br.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw ci("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ci("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ci("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ci("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ci("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class WA extends $A{initXhr(){this.xhr_.responseType="text"}}function Zw(){return new WA}/**
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
 */class Dr{constructor(e,n){this._service=e,n instanceof nt?this._location=n:this._location=nt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Dr(e,n)}get root(){const e=new nt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Gw(this._location.path)}get storage(){return this._service}get parent(){const e=bA(this._location.path);if(e===null)return null;const n=new nt(this._location.bucket,e);return new Dr(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw rA(e)}}function zA(t,e,n){t._throwIfRoot("uploadBytes");const r=UA(t.storage,t._location,qw(),new Pn(e,!0),n);return t.storage.makeRequestWithTokens(r,Zw).then(s=>({metadata:s,ref:t}))}function BA(t){t._throwIfRoot("getDownloadURL");const e=LA(t.storage,t._location,qw());return t.storage.makeRequestWithTokens(e,Zw).then(n=>{if(n===null)throw tA();return n})}function VA(t,e){const n=CA(t._location.path,e),r=new nt(t._location.bucket,n);return new Dr(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HA(t){return/^[A-Za-z]+:\/\//.test(t)}function KA(t,e){return new Dr(t,e)}function ex(t,e){if(t instanceof Ff){const n=t;if(n._bucket==null)throw Z2();const r=new Dr(n,n._bucket);return e!=null?ex(r,e):r}else return e!==void 0?VA(t,e):t}function GA(t,e){if(e&&HA(e)){if(t instanceof Ff)return KA(t,e);throw Ud("To use ref(service, url), the first argument must be a Storage instance.")}else return ex(t,e)}function Tg(t,e){const n=e==null?void 0:e[$w];return n==null?null:nt.makeFromBucketSpec(n,t)}function qA(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:D0(s,t.app.options.projectId))}class Ff{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=Uw,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=z2,this._maxUploadRetryTime=B2,this._requests=new Set,s!=null?this._bucket=nt.makeFromBucketSpec(s,this._host):this._bucket=Tg(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=nt.makeFromBucketSpec(this._url,e):this._bucket=Tg(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Ng("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Ng("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Dr(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new sA(Ww());{const o=mA(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const Rg="@firebase/storage",Pg="0.13.2";/**
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
 */const tx="storage";function QA(t,e,n){return t=ee(t),zA(t,e,n)}function YA(t){return t=ee(t),BA(t)}function XA(t,e){return t=ee(t),GA(t,e)}function JA(t=Ql(),e){t=ee(t);const r=Br(t,tx).getImmediate({identifier:e}),s=M0("storage");return s&&ZA(r,...s),r}function ZA(t,e,n,r={}){qA(t,e,n,r)}function eO(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Ff(n,r,s,e,Vr)}function tO(){Nt(new mt(tx,eO,"PUBLIC").setMultipleInstances(!0)),Ze(Rg,Pg,""),Ze(Rg,Pg,"esm2017")}tO();const nx="@firebase/installations",Uf="0.6.9";/**
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
 */const rx=1e4,sx=`w:${Uf}`,ix="FIS_v2",nO="https://firebaseinstallations.googleapis.com/v1",rO=60*60*1e3,sO="installations",iO="Installations";/**
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
 */const oO={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Fr=new zr(sO,iO,oO);function ox(t){return t instanceof Ht&&t.code.includes("request-failed")}/**
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
 */function ax({projectId:t}){return`${nO}/projects/${t}/installations`}function lx(t){return{token:t.token,requestStatus:2,expiresIn:lO(t.expiresIn),creationTime:Date.now()}}async function cx(t,e){const r=(await e.json()).error;return Fr.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function ux({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function aO(t,{refreshToken:e}){const n=ux(t);return n.append("Authorization",cO(e)),n}async function dx(t){const e=await t();return e.status>=500&&e.status<600?t():e}function lO(t){return Number(t.replace("s","000"))}function cO(t){return`${ix} ${t}`}/**
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
 */async function uO({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=ax(t),s=ux(t),i=e.getImmediate({optional:!0});if(i){const c=await i.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={fid:n,authVersion:ix,appId:t.appId,sdkVersion:sx},a={method:"POST",headers:s,body:JSON.stringify(o)},l=await dx(()=>fetch(r,a));if(l.ok){const c=await l.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:lx(c.authToken)}}else throw await cx("Create Installation",l)}/**
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
 */function hx(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function dO(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const hO=/^[cdef][\w-]{21}$/,$d="";function fO(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=pO(t);return hO.test(n)?n:$d}catch{return $d}}function pO(t){return dO(t).substr(0,22)}/**
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
 */function pc(t){return`${t.appName}!${t.appId}`}/**
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
 */const fx=new Map;function px(t,e){const n=pc(t);mx(n,e),mO(n,e)}function mx(t,e){const n=fx.get(t);if(n)for(const r of n)r(e)}function mO(t,e){const n=gO();n&&n.postMessage({key:t,fid:e}),yO()}let xr=null;function gO(){return!xr&&"BroadcastChannel"in self&&(xr=new BroadcastChannel("[Firebase] FID Change"),xr.onmessage=t=>{mx(t.data.key,t.data.fid)}),xr}function yO(){fx.size===0&&xr&&(xr.close(),xr=null)}/**
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
 */const vO="firebase-installations-database",_O=1,Ur="firebase-installations-store";let uu=null;function $f(){return uu||(uu=ql(vO,_O,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ur)}}})),uu}async function wl(t,e){const n=pc(t),s=(await $f()).transaction(Ur,"readwrite"),i=s.objectStore(Ur),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&px(t,e.fid),e}async function gx(t){const e=pc(t),r=(await $f()).transaction(Ur,"readwrite");await r.objectStore(Ur).delete(e),await r.done}async function mc(t,e){const n=pc(t),s=(await $f()).transaction(Ur,"readwrite"),i=s.objectStore(Ur),o=await i.get(n),a=e(o);return a===void 0?await i.delete(n):await i.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&px(t,a.fid),a}/**
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
 */async function Wf(t){let e;const n=await mc(t.appConfig,r=>{const s=wO(r),i=xO(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===$d?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function wO(t){const e=t||{fid:fO(),registrationStatus:0};return yx(e)}function xO(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Fr.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=kO(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:EO(t)}:{installationEntry:e}}async function kO(t,e){try{const n=await uO(t,e);return wl(t.appConfig,n)}catch(n){throw ox(n)&&n.customData.serverCode===409?await gx(t.appConfig):await wl(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function EO(t){let e=await Ag(t.appConfig);for(;e.registrationStatus===1;)await hx(100),e=await Ag(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Wf(t);return r||n}return e}function Ag(t){return mc(t,e=>{if(!e)throw Fr.create("installation-not-found");return yx(e)})}function yx(t){return SO(t)?{fid:t.fid,registrationStatus:0}:t}function SO(t){return t.registrationStatus===1&&t.registrationTime+rx<Date.now()}/**
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
 */async function bO({appConfig:t,heartbeatServiceProvider:e},n){const r=CO(t,n),s=aO(t,n),i=e.getImmediate({optional:!0});if(i){const c=await i.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={installation:{sdkVersion:sx,appId:t.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},l=await dx(()=>fetch(r,a));if(l.ok){const c=await l.json();return lx(c)}else throw await cx("Generate Auth Token",l)}function CO(t,{fid:e}){return`${ax(t)}/${e}/authTokens:generate`}/**
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
 */async function zf(t,e=!1){let n;const r=await mc(t.appConfig,i=>{if(!vx(i))throw Fr.create("not-registered");const o=i.authToken;if(!e&&TO(o))return i;if(o.requestStatus===1)return n=IO(t,e),i;{if(!navigator.onLine)throw Fr.create("app-offline");const a=PO(i);return n=NO(t,a),a}});return n?await n:r.authToken}async function IO(t,e){let n=await Og(t.appConfig);for(;n.authToken.requestStatus===1;)await hx(100),n=await Og(t.appConfig);const r=n.authToken;return r.requestStatus===0?zf(t,e):r}function Og(t){return mc(t,e=>{if(!vx(e))throw Fr.create("not-registered");const n=e.authToken;return AO(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function NO(t,e){try{const n=await bO(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await wl(t.appConfig,r),n}catch(n){if(ox(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await gx(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await wl(t.appConfig,r)}throw n}}function vx(t){return t!==void 0&&t.registrationStatus===2}function TO(t){return t.requestStatus===2&&!RO(t)}function RO(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+rO}function PO(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function AO(t){return t.requestStatus===1&&t.requestTime+rx<Date.now()}/**
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
 */async function OO(t){const e=t,{installationEntry:n,registrationPromise:r}=await Wf(e);return r?r.catch(console.error):zf(e).catch(console.error),n.fid}/**
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
 */async function MO(t,e=!1){const n=t;return await jO(n),(await zf(n,e)).token}async function jO(t){const{registrationPromise:e}=await Wf(t);e&&await e}/**
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
 */function LO(t){if(!t||!t.options)throw du("App Configuration");if(!t.name)throw du("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw du(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function du(t){return Fr.create("missing-app-config-values",{valueName:t})}/**
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
 */const _x="installations",DO="installations-internal",FO=t=>{const e=t.getProvider("app").getImmediate(),n=LO(e),r=Br(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},UO=t=>{const e=t.getProvider("app").getImmediate(),n=Br(e,_x).getImmediate();return{getId:()=>OO(n),getToken:s=>MO(n,s)}};function $O(){Nt(new mt(_x,FO,"PUBLIC")),Nt(new mt(DO,UO,"PRIVATE"))}$O();Ze(nx,Uf);Ze(nx,Uf,"esm2017");/**
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
 */const WO="/firebase-messaging-sw.js",zO="/firebase-cloud-messaging-push-scope",wx="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",BO="https://fcmregistrations.googleapis.com/v1",xx="google.c.a.c_id",VO="google.c.a.c_l",HO="google.c.a.ts",KO="google.c.a.e";var Mg;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Mg||(Mg={}));/**
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
 */var fo;(function(t){t.PUSH_RECEIVED="push-received",t.NOTIFICATION_CLICKED="notification-clicked"})(fo||(fo={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function GO(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),s=new Uint8Array(r.length);for(let i=0;i<r.length;++i)s[i]=r.charCodeAt(i);return s}/**
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
 */const hu="fcm_token_details_db",qO=5,jg="fcm_token_object_Store";async function QO(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(i=>i.name).includes(hu))return null;let e=null;return(await ql(hu,qO,{upgrade:async(r,s,i,o)=>{var a;if(s<2||!r.objectStoreNames.contains(jg))return;const l=o.objectStore(jg),c=await l.index("fcmSenderId").get(t);if(await l.clear(),!!c){if(s===2){const d=c;if(!d.auth||!d.p256dh||!d.endpoint)return;e={token:d.fcmToken,createTime:(a=d.createTime)!==null&&a!==void 0?a:Date.now(),subscriptionOptions:{auth:d.auth,p256dh:d.p256dh,endpoint:d.endpoint,swScope:d.swScope,vapidKey:typeof d.vapidKey=="string"?d.vapidKey:Xt(d.vapidKey)}}}else if(s===3){const d=c;e={token:d.fcmToken,createTime:d.createTime,subscriptionOptions:{auth:Xt(d.auth),p256dh:Xt(d.p256dh),endpoint:d.endpoint,swScope:d.swScope,vapidKey:Xt(d.vapidKey)}}}else if(s===4){const d=c;e={token:d.fcmToken,createTime:d.createTime,subscriptionOptions:{auth:Xt(d.auth),p256dh:Xt(d.p256dh),endpoint:d.endpoint,swScope:d.swScope,vapidKey:Xt(d.vapidKey)}}}}}})).close(),await Qc(hu),await Qc("fcm_vapid_details_db"),await Qc("undefined"),YO(e)?e:null}function YO(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const XO="firebase-messaging-database",JO=1,po="firebase-messaging-store";let fu=null;function kx(){return fu||(fu=ql(XO,JO,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(po)}}})),fu}async function ZO(t){const e=Ex(t),r=await(await kx()).transaction(po).objectStore(po).get(e);if(r)return r;{const s=await QO(t.appConfig.senderId);if(s)return await Bf(t,s),s}}async function Bf(t,e){const n=Ex(t),s=(await kx()).transaction(po,"readwrite");return await s.objectStore(po).put(e,n),await s.done,e}function Ex({appConfig:t}){return t.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eM={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},Le=new zr("messaging","Messaging",eM);/**
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
 */async function tM(t,e){const n=await Hf(t),r=Sx(e),s={method:"POST",headers:n,body:JSON.stringify(r)};let i;try{i=await(await fetch(Vf(t.appConfig),s)).json()}catch(o){throw Le.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(i.error){const o=i.error.message;throw Le.create("token-subscribe-failed",{errorInfo:o})}if(!i.token)throw Le.create("token-subscribe-no-token");return i.token}async function nM(t,e){const n=await Hf(t),r=Sx(e.subscriptionOptions),s={method:"PATCH",headers:n,body:JSON.stringify(r)};let i;try{i=await(await fetch(`${Vf(t.appConfig)}/${e.token}`,s)).json()}catch(o){throw Le.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(i.error){const o=i.error.message;throw Le.create("token-update-failed",{errorInfo:o})}if(!i.token)throw Le.create("token-update-no-token");return i.token}async function rM(t,e){const r={method:"DELETE",headers:await Hf(t)};try{const i=await(await fetch(`${Vf(t.appConfig)}/${e}`,r)).json();if(i.error){const o=i.error.message;throw Le.create("token-unsubscribe-failed",{errorInfo:o})}}catch(s){throw Le.create("token-unsubscribe-failed",{errorInfo:s==null?void 0:s.toString()})}}function Vf({projectId:t}){return`${BO}/projects/${t}/registrations`}async function Hf({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function Sx({p256dh:t,auth:e,endpoint:n,vapidKey:r}){const s={web:{endpoint:n,auth:e,p256dh:t}};return r!==wx&&(s.web.applicationPubKey=r),s}/**
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
 */const sM=7*24*60*60*1e3;async function iM(t){const e=await aM(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:Xt(e.getKey("auth")),p256dh:Xt(e.getKey("p256dh"))},r=await ZO(t.firebaseDependencies);if(r){if(lM(r.subscriptionOptions,n))return Date.now()>=r.createTime+sM?oM(t,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await rM(t.firebaseDependencies,r.token)}catch(s){console.warn(s)}return Lg(t.firebaseDependencies,n)}else return Lg(t.firebaseDependencies,n)}async function oM(t,e){try{const n=await nM(t.firebaseDependencies,e),r=Object.assign(Object.assign({},e),{token:n,createTime:Date.now()});return await Bf(t.firebaseDependencies,r),n}catch(n){throw n}}async function Lg(t,e){const r={token:await tM(t,e),createTime:Date.now(),subscriptionOptions:e};return await Bf(t,r),r.token}async function aM(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:GO(e)})}function lM(t,e){const n=e.vapidKey===t.vapidKey,r=e.endpoint===t.endpoint,s=e.auth===t.auth,i=e.p256dh===t.p256dh;return n&&r&&s&&i}/**
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
 */function Dg(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return cM(e,t),uM(e,t),dM(e,t),e}function cM(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const r=e.notification.body;r&&(t.notification.body=r);const s=e.notification.image;s&&(t.notification.image=s);const i=e.notification.icon;i&&(t.notification.icon=i)}function uM(t,e){e.data&&(t.data=e.data)}function dM(t,e){var n,r,s,i,o;if(!e.fcmOptions&&!(!((n=e.notification)===null||n===void 0)&&n.click_action))return;t.fcmOptions={};const a=(s=(r=e.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&s!==void 0?s:(i=e.notification)===null||i===void 0?void 0:i.click_action;a&&(t.fcmOptions.link=a);const l=(o=e.fcmOptions)===null||o===void 0?void 0:o.analytics_label;l&&(t.fcmOptions.analyticsLabel=l)}/**
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
 */function hM(t){return typeof t=="object"&&!!t&&xx in t}/**
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
 */function fM(t){if(!t||!t.options)throw pu("App Configuration Object");if(!t.name)throw pu("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const r of e)if(!n[r])throw pu(r);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function pu(t){return Le.create("missing-app-config-values",{valueName:t})}/**
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
 */class pM{constructor(e,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const s=fM(e);this.firebaseDependencies={app:e,appConfig:s,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
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
 */async function mM(t){try{t.swRegistration=await navigator.serviceWorker.register(WO,{scope:zO}),t.swRegistration.update().catch(()=>{})}catch(e){throw Le.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}/**
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
 */async function gM(t,e){if(!e&&!t.swRegistration&&await mM(t),!(!e&&t.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw Le.create("invalid-sw-registration");t.swRegistration=e}}/**
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
 */async function yM(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=wx)}/**
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
 */async function bx(t,e){if(!navigator)throw Le.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw Le.create("permission-blocked");return await yM(t,e==null?void 0:e.vapidKey),await gM(t,e==null?void 0:e.serviceWorkerRegistration),iM(t)}/**
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
 */async function vM(t,e,n){const r=_M(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[xx],message_name:n[VO],message_time:n[HO],message_device_time:Math.floor(Date.now()/1e3)})}function _M(t){switch(t){case fo.NOTIFICATION_CLICKED:return"notification_open";case fo.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wM(t,e){const n=e.data;if(!n.isFirebaseMessaging)return;t.onMessageHandler&&n.messageType===fo.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(Dg(n)):t.onMessageHandler.next(Dg(n)));const r=n.data;hM(r)&&r[KO]==="1"&&await vM(t,n.messageType,r)}const Fg="@firebase/messaging",Ug="0.12.12";/**
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
 */const xM=t=>{const e=new pM(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>wM(e,n)),e},kM=t=>{const e=t.getProvider("messaging").getImmediate();return{getToken:r=>bx(e,r)}};function EM(){Nt(new mt("messaging",xM,"PUBLIC")),Nt(new mt("messaging-internal",kM,"PRIVATE")),Ze(Fg,Ug),Ze(Fg,Ug,"esm2017")}/**
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
 */async function SM(){try{await $0()}catch{return!1}return typeof window<"u"&&U0()&&DC()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */function bM(t,e){if(!navigator)throw Le.create("only-available-in-window");return t.onMessageHandler=e,()=>{t.onMessageHandler=null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CM(t=Ql()){return SM().then(e=>{if(!e)throw Le.create("unsupported-browser")},e=>{throw Le.create("indexed-db-unsupported")}),Br(ee(t),"messaging").getImmediate()}async function IM(t,e){return t=ee(t),bx(t,e)}function NM(t,e){return t=ee(t),bM(t,e)}EM();const TM={apiKey:"AIzaSyD9-_GYLQabcC3SPMTOG9zj2CcaPqzfOrI",authDomain:"lalaland-24931.firebaseapp.com",databaseURL:"https://lalaland-24931-default-rtdb.firebaseio.com",projectId:"lalaland-24931",storageBucket:"lalaland-24931.firebasestorage.app",messagingSenderId:"45134876312",appId:"1:45134876312:web:9e33e46c54cb7c9bfc8aed",measurementId:"G-M04NRCY9FQ"};let RM=!1,ui=null,Yn=null,G=null,xl=null,Mt=null;const PM=()=>{try{console.log("🚀 正在初始化 Firebase..."),ui=V0(TM),console.log("✅ Firebase App 初始化成功");try{Yn=mT(ui),console.log("✅ Firebase Auth 初始化成功")}catch(t){throw console.error("❌ Firebase Auth 初始化失敗:",t),t}try{G=L2(ui),console.log("✅ Firebase Database 初始化成功")}catch(t){throw console.error("❌ Firebase Database 初始化失敗:",t),t}try{xl=JA(ui),console.log("✅ Firebase Storage 初始化成功")}catch(t){throw console.error("❌ Firebase Storage 初始化失敗:",t),t}try{typeof window<"u"&&"serviceWorker"in navigator?(Mt=CM(ui),console.log("✅ Firebase Messaging 初始化成功")):console.log("ℹ️ Firebase Messaging 不支援此環境")}catch(t){console.warn("⚠️ Firebase Messaging 初始化失敗:",t)}RM=!0,console.log("🎉 Firebase 完全初始化成功")}catch(t){console.error("💥 Firebase 初始化失敗:",t),AM()}},AM=()=>{console.warn("⚠️ 創建 Firebase 模擬服務，部分功能可能不可用"),Yn||(Yn={currentUser:null,onAuthStateChanged:t=>(console.warn("模擬 Auth: onAuthStateChanged 被調用"),t(null),()=>{}),signOut:()=>Promise.reject(new Error("Firebase 未初始化")),signInWithEmailAndPassword:()=>Promise.reject(new Error("Firebase 未初始化")),createUserWithEmailAndPassword:()=>Promise.reject(new Error("Firebase 未初始化"))}),G||(G={ref:()=>({on:()=>console.warn("模擬 Database: ref.on 被調用"),off:()=>console.warn("模擬 Database: ref.off 被調用"),push:()=>Promise.reject(new Error("Firebase 未初始化")),set:()=>Promise.reject(new Error("Firebase 未初始化"))})}),xl||(xl={ref:()=>({put:()=>Promise.reject(new Error("Firebase 未初始化")),getDownloadURL:()=>Promise.reject(new Error("Firebase 未初始化"))})})};PM();class OM{constructor(){this.isSupported="Notification"in window}get hasPermission(){return this.isSupported&&Notification.permission==="granted"}async requestPermission(){if(!this.isSupported)return console.warn("🔔 此瀏覽器不支援桌面通知"),!1;try{return await Notification.requestPermission()==="granted"}catch(e){return console.error("🚨 請求通知權限時出錯:",e),!1}}showNotification(e,n="",r=null){if(!this.hasPermission)return window.showNotification&&window.showNotification(`${e}: ${n}`,"info"),null;const s={body:n,icon:"/icon-512.png",tag:"lalaland-message",requireInteraction:!1,silent:!1};try{const i=new Notification(e,s);return i.onclick=()=>{window.focus(),r&&r(),i.close()},setTimeout(()=>{i.close()},5e3),i}catch(i){return console.error("🚨 顯示通知時出錯:",i),null}}playNotificationSound(){if(localStorage.getItem("notificationSound")!=="false")try{const n=new(window.AudioContext||window.webkitAudioContext),r=n.createOscillator(),s=n.createGain();r.connect(s),s.connect(n.destination),r.frequency.value=800,r.type="sine",s.gain.setValueAtTime(.1,n.currentTime),s.gain.exponentialRampToValueAtTime(.01,n.currentTime+.3),r.start(),r.stop(n.currentTime+.3)}catch(n){console.log("🔇 無法播放通知音效:",n)}}}const Oi=new OM,ia="BPkxFDyty7orkmlIPl7B8xl1A8rY1rQuqDWM03HdXOj1fvVWrXHc3mJX99iQl7GGHIk1Nj7rZK3bhCu0os7h8Mw";class MM{constructor(){this.fcmToken=null,this.isSupported=this.checkFCMSupport(),this.isInitialized=!1}checkFCMSupport(){return!!(Mt&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window)}async initialize(){if(!this.isSupported)return console.warn("🚫 FCM 不支援此瀏覽器"),!1;try{return await this.registerServiceWorker(),this.setupForegroundListener(),this.isInitialized=!0,console.log("✅ FCM 初始化成功"),!0}catch(e){return console.error("❌ FCM 初始化失敗:",e),!1}}async registerServiceWorker(){if("serviceWorker"in navigator)try{const e=await navigator.serviceWorker.register("/firebase-messaging-sw.js");return console.log("✅ FCM Service Worker 註冊成功:",e),e}catch(e){throw console.error("❌ FCM Service Worker 註冊失敗:",e),e}}async diagnoseEnvironment(){const e={https:location.protocol==="https:"||location.hostname==="localhost",serviceWorker:"serviceWorker"in navigator,pushManager:"PushManager"in window,notification:"Notification"in window,messaging:!!Mt,permission:Notification.permission,userAgent:navigator.userAgent,url:window.location.href,vapidKey:`${ia.substring(0,10)}...`,platform:navigator.platform,language:navigator.language,cookieEnabled:navigator.cookieEnabled,onLine:navigator.onLine};if("serviceWorker"in navigator)try{const n=await navigator.serviceWorker.getRegistration();e.swRegistered=!!n,e.swActive=!!(n&&n.active)}catch(n){e.swError=n.message}return Notification.permission==="denied"?e.permissionAdvice="通知權限被永久拒絕，需要手動在瀏覽器設定中重新啟用":Notification.permission==="default"?e.permissionAdvice="尚未請求通知權限":Notification.permission==="granted"&&(e.permissionAdvice="通知權限已獲得"),console.log("🔍 FCM 環境診斷:",e),e}async requestPermission(e=null){const n=await this.diagnoseEnvironment();if(!this.isSupported){const r=[];throw n.serviceWorker||r.push("Service Worker"),n.pushManager||r.push("Push Manager"),n.notification||r.push("Notification API"),n.messaging||r.push("Firebase Messaging"),console.error("🚫 FCM 不支援，缺少功能:",r.join(", ")),new Error(`瀏覽器不支援推播通知，缺少: ${r.join(", ")}`)}if(!this.isInitialized&&(console.warn("🚫 FCM 未初始化，嘗試重新初始化..."),!await this.initialize()))throw new Error("FCM 初始化失敗");if(!n.https)throw new Error("推播通知需要 HTTPS 環境或 localhost");try{if(console.log("📋 當前通知權限狀態:",Notification.permission),Notification.permission==="denied")throw new Error("通知權限已被拒絕。請在瀏覽器設定中重新允許通知權限。");console.log("🔔 請求通知權限...");const r=await Notification.requestPermission();if(console.log("📋 權限請求結果:",r),r!=="granted")throw r==="denied"?new Error("通知權限被拒絕。請檢查瀏覽器設定並重新允許通知。"):new Error("通知權限未獲得授予。");console.log("🎫 取得 FCM Token...");try{const s=await IM(Mt,{vapidKey:ia});return s?(console.log("✅ FCM Token 取得成功:",s.substring(0,30)+"..."),this.fcmToken=s,e&&await this.saveFCMToken(e,s),s):(console.warn("⚠️ 無法取得 FCM Token - 可能是瀏覽器不支援或配置問題"),null)}catch(s){throw console.warn("⚠️ FCM Token 取得失敗:",s.message),s.code==="messaging/token-subscribe-failed"?new Error("FCM 服務訂閱失敗，請檢查網路連線和 VAPID 金鑰設定"):s.code==="messaging/invalid-vapid-key"?new Error("VAPID 金鑰無效，請檢查 Firebase 專案設定"):s.code==="messaging/registration-token-not-registered"?new Error("註冊 Token 無效，請清除瀏覽器資料後重試"):new Error(`FCM Token 取得失敗: ${s.message}`)}}catch(r){throw console.error("❌ FCM 權限請求流程失敗:",r.message),r}}async requestPermissionSilently(e=null){try{return await this.requestPermission(e)}catch(n){return console.log("ℹ️ 靜默權限請求結果:",n.message),null}}async saveFCMToken(e,n){try{const r=J(G,`fcmTokens/${e}`);await Qr(r,{token:n,timestamp:Date.now(),userAgent:navigator.userAgent}),console.log("✅ FCM Token 已儲存到資料庫")}catch(r){console.error("❌ 儲存 FCM Token 失敗:",r)}}setupForegroundListener(){Mt&&NM(Mt,e=>{console.log("🔔 FCM 前景訊息:",e);const{title:n,body:r}=e.notification||{};window.showNotification&&window.showNotification(n?`${n}: ${r}`:r||"新訊息","info",6e3),this.playNotificationSound(),(document.hidden||document.visibilityState==="hidden")&&this.showDesktopNotification(n||"新訊息",r||"您有新的訊息")})}showDesktopNotification(e,n){if(Notification.permission==="granted"){const r=new Notification(e,{body:n,icon:"/icon-512.png",badge:"/icon-512.png",tag:"lalaland-fcm"});r.onclick=()=>{window.focus(),r.close()},setTimeout(()=>{r.close()},5e3)}}playNotificationSound(){if(localStorage.getItem("notificationSound")!=="false")try{const n=new(window.AudioContext||window.webkitAudioContext),r=n.createOscillator(),s=n.createGain();r.connect(s),s.connect(n.destination),r.frequency.value=800,r.type="sine",s.gain.setValueAtTime(.1,n.currentTime),s.gain.exponentialRampToValueAtTime(.01,n.currentTime+.3),r.start(),r.stop(n.currentTime+.3)}catch(n){console.log("🔇 無法播放通知音效:",n)}}getCurrentToken(){return this.fcmToken}isEnabled(){return!!(this.fcmToken&&Notification.permission==="granted")}async validateVAPIDKey(){console.log("🔍 驗證 VAPID 金鑰設定...");const e={vapidKey:ia,projectId:"lalaland-24931",messagingSenderId:"45134876312",publicKey:"BPkxFDyty7orkmlIPl7B8xl1A8rY1rQuqDWM03HdXOj1fvVWrXHc3mJX99iQl7GGHIk1Nj7rZK3bhCu0os7h8Mw"};if(console.log("📋 預期的 VAPID 設定:",e),Mt&&Mt.app){const n=Mt.app.options;if(console.log("🔧 Firebase 專案設定:",{projectId:n.projectId,messagingSenderId:n.messagingSenderId,authDomain:n.authDomain}),n.projectId!==e.projectId)return console.error("❌ Firebase Project ID 不匹配!"),console.log("   預期:",e.projectId),console.log("   實際:",n.projectId),!1;if(n.messagingSenderId!==e.messagingSenderId)return console.error("❌ Messaging Sender ID 不匹配!"),console.log("   預期:",e.messagingSenderId),console.log("   實際:",n.messagingSenderId),!1}return ia.length<40?(console.error("❌ VAPID 金鑰格式無效"),!1):(console.log("✅ VAPID 金鑰設定驗證通過"),!0)}async disable(){try{Mt&&this.fcmToken&&console.log("🔕 FCM 已停用"),this.fcmToken=null}catch(e){console.error("❌ 停用 FCM 失敗:",e)}}}const hs=new MM;/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jM=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Cx=(...t)=>t.filter((e,n,r)=>!!e&&r.indexOf(e)===n).join(" ");/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var LM={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DM=x.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:s="",children:i,iconNode:o,...a},l)=>x.createElement("svg",{ref:l,...LM,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:Cx("lucide",s),...a},[...o.map(([c,d])=>x.createElement(c,d)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=(t,e)=>{const n=x.forwardRef(({className:r,...s},i)=>x.createElement(DM,{ref:i,iconNode:e,className:Cx(`lucide-${jM(t)}`,r),...s}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ix=V("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FM=V("BarChart3",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UM=V("BellOff",[["path",{d:"M8.7 3A6 6 0 0 1 18 8a21.3 21.3 0 0 0 .6 5",key:"o7mx20"}],["path",{d:"M17 17H3s3-2 3-9a4.67 4.67 0 0 1 .3-1.7",key:"16f1lm"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $M=V("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wd=V("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WM=V("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zM=V("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kf=V("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nx=V("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zd=V("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BM=V("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VM=V("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HM=V("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xn=V("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KM=V("MicOff",[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M18.89 13.23A7.12 7.12 0 0 0 19 12v-2",key:"80xlxr"}],["path",{d:"M5 10v2a7 7 0 0 0 12 5",key:"p2k8kg"}],["path",{d:"M15 9.34V5a3 3 0 0 0-5.68-1.33",key:"1gzdoj"}],["path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12",key:"r2i35w"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GM=V("Mic",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tx=V("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $g=V("PhoneOff",[["path",{d:"M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91",key:"z86iuo"}],["line",{x1:"22",x2:"2",y1:"2",y2:"22",key:"11kh81"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qM=V("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QM=V("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YM=V("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rx=V("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XM=V("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wg=V("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JM=V("Smile",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Px=V("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ax=V("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZM=V("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mo=V("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ej=V("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ox=V("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mx=V("Volume2",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jx=V("VolumeX",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vt=V("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),tj=()=>{const t=xo(),{createAnonymousUser:e}=Fe(),n=[{icon:u.jsx(Xn,{className:"w-8 h-8"}),title:"即時聊天",description:"與志同道合的朋友即時對話交流"},{icon:u.jsx(Kf,{className:"w-8 h-8"}),title:"安全友善",description:"專為女性LGBTQ+社群設計的安全空間"},{icon:u.jsx(Ox,{className:"w-8 h-8"}),title:"多元社群",description:"閒聊、找伴、交友，滿足不同需求"},{icon:u.jsx(zd,{className:"w-8 h-8"}),title:"隱私保護",description:"匿名模式與隱私設定保護你的安全"}];return u.jsxs("div",{className:"min-h-screen flex flex-col",children:[u.jsx("header",{className:"bg-white/70 backdrop-blur-sm border-b border-gray-200",children:u.jsxs("div",{className:"max-w-6xl mx-auto px-4 py-4 flex justify-between items-center",children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx("img",{src:"/icon-512.png",alt:"LalaLand",className:"w-10 h-10 rounded-lg"}),u.jsx("h1",{className:"text-2xl font-bold text-sea-dark",children:"LalaLand"})]}),u.jsx("button",{onClick:()=>t("/login"),className:"btn-primary",children:"登入 / 註冊"})]})}),u.jsx("main",{className:"flex-1 flex flex-col items-center justify-center px-4 py-12",children:u.jsxs("div",{className:"text-center max-w-4xl mx-auto",children:[u.jsx("img",{src:"/icon-512.png",alt:"LalaLand Logo",className:"w-32 h-32 mx-auto mb-8 animate-float"}),u.jsxs("h2",{className:"text-4xl md:text-5xl font-bold text-gray-800 mb-6",children:["歡迎來到",u.jsx("span",{className:"text-sea-blue",children:" LalaLand"})]}),u.jsxs("p",{className:"text-xl text-gray-600 mb-8 leading-relaxed",children:["專為女同志設計的安全聊天平台",u.jsx("br",{}),"在這裡，你可以安心做自己，與志同道合的朋友建立真摯連結"]}),u.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center mb-16",children:[u.jsx("button",{onClick:()=>t("/login"),className:"btn-primary text-lg px-8 py-4",children:"開始聊天"}),u.jsx("button",{onClick:()=>{try{e(),F.success("歡迎匿名體驗 LalaLand！你可以查看聊天記錄，但需要註冊才能發送訊息。"),t("/chat")}catch{F.error("匿名體驗啟動失敗")}},className:"btn-secondary text-lg px-8 py-4",children:"匿名體驗"})]}),u.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-4 gap-8",children:n.map((r,s)=>u.jsxs("div",{className:"card text-center hover:shadow-medium transition-shadow",children:[u.jsx("div",{className:"text-sea-blue mb-4 flex justify-center",children:r.icon}),u.jsx("h3",{className:"font-semibold text-lg mb-2",children:r.title}),u.jsx("p",{className:"text-gray-600 text-sm",children:r.description})]},s))})]})}),u.jsx("footer",{className:"bg-white/70 backdrop-blur-sm border-t border-gray-200 py-8",children:u.jsx("div",{className:"max-w-6xl mx-auto px-4 text-center text-gray-500",children:u.jsx("p",{children:"© 2025 LalaLand. 致力於為女性LGBTQ+社群提供安全友善的交流空間"})})})]})},zg=()=>{const t=xo(),{user:e,isAnonymousUser:n}=Fe(),r=n(),[s,i]=x.useState("login"),[o,a]=x.useState(!1),[l,c]=x.useState(!1),[d,h]=x.useState({email:"",password:"",confirmPassword:""}),f=w=>{h(k=>({...k,[w.target.name]:w.target.value}))},g=async w=>{w.preventDefault(),c(!0);try{console.log("🔄 開始登入流程...",{email:d.email,authInstance:!!Yn});const k=await JI(Yn,d.email,d.password);console.log("✅ Firebase 登入成功:",{uid:k.user.uid,email:k.user.email,isAnonymous:k.user.isAnonymous}),await new Promise(v=>setTimeout(v,300)),console.log("🎉 準備顯示登入成功通知..."),F.success("登入成功！"),console.log("✅ 登入流程完成，準備導航到聊天室"),t("/chat",{replace:!0})}catch(k){console.error("❌ 登入過程發生錯誤:",k),console.error("錯誤代碼:",k.code),console.error("錯誤訊息:",k.message);let v="登入失敗，請檢查帳號密碼";k.code==="auth/user-not-found"?v="找不到此帳號，請確認電子郵件是否正確":k.code==="auth/wrong-password"?v="密碼錯誤，請重新輸入":k.code==="auth/invalid-email"?v="電子郵件格式不正確":k.code==="auth/too-many-requests"&&(v="登入嘗試次數過多，請稍後再試"),F.error(v)}finally{c(!1)}},y=async w=>{if(w.preventDefault(),c(!0),d.password!==d.confirmPassword){F.error("密碼確認不一致"),c(!1);return}if(d.password.length<6){F.error("密碼至少需要6個字元"),c(!1);return}try{console.log("🔄 開始註冊流程...",{email:d.email});const k=await XI(Yn,d.email,d.password);console.log("✅ Firebase 帳號創建成功:",k.user.uid);try{await eN(k.user,{displayName:"新用戶"}),console.log("✅ 用戶 Profile 更新成功")}catch(v){console.warn("⚠️ Profile 更新失敗，但註冊流程繼續:",v)}try{await Qr(J(G,`users/${k.user.uid}`),{nickname:"新用戶",email:d.email,avatar:null,joinedAt:Date.now(),isOnline:!0,isFirstLogin:!0}),console.log("✅ 用戶資料儲存到資料庫成功")}catch(v){console.warn("⚠️ 資料庫儲存失敗，但註冊流程繼續:",v)}await new Promise(v=>setTimeout(v,500)),console.log("🎉 準備顯示成功通知..."),F.success("註冊成功！請至設定更新頭貼與暱稱。"),console.log("✅ 註冊流程完成，準備導航到聊天室"),t("/chat",{replace:!0})}catch(k){console.error("❌ 註冊過程發生錯誤:",k),console.error("錯誤代碼:",k.code),console.error("錯誤訊息:",k.message);let v="註冊失敗，請稍後再試";k.code==="auth/email-already-in-use"?v="此電子郵件已被註冊":k.code==="auth/weak-password"?v="密碼強度不足":k.code==="auth/invalid-email"&&(v="電子郵件格式不正確"),F.error(v)}finally{c(!1)}};return u.jsx("div",{className:"min-h-screen flex items-center justify-center px-4 py-8",children:u.jsxs("div",{className:"w-full max-w-md",children:[u.jsxs("button",{onClick:()=>t("/"),className:"flex items-center gap-2 text-gray-600 hover:text-sea-blue mb-6 transition-colors",children:[u.jsx(Ix,{className:"w-4 h-4"}),"返回首頁"]}),u.jsxs("div",{className:"card",children:[u.jsxs("div",{className:"text-center mb-8",children:[u.jsx("img",{src:"/icon-512.png",alt:"LalaLand",className:"w-16 h-16 mx-auto mb-4"}),u.jsxs("h2",{className:"text-2xl font-bold text-gray-900 mb-2 text-center",children:[s==="login"&&"歡迎回來",s==="register"&&"建立帳號"]}),r&&u.jsxs("div",{className:"mt-4 p-4 bg-gradient-to-r from-amber-50 to-amber-100 border border-amber-200 rounded-lg",children:[u.jsxs("div",{className:"flex items-center justify-center gap-2 mb-2",children:[u.jsx(mo,{className:"w-5 h-5 text-amber-600"}),u.jsx("span",{className:"font-medium text-amber-800",children:"升級你的帳號"})]}),u.jsx("p",{className:"text-sm text-amber-700",children:"你目前是匿名訪客，註冊後可以發送訊息、使用私訊、上傳圖片等完整功能"})]})]}),u.jsxs("div",{className:"flex bg-gray-100 rounded-lg p-1 mb-6",children:[u.jsx("button",{className:`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${s==="login"?"bg-white text-sea-blue shadow-sm":"text-gray-600 hover:text-gray-800"}`,onClick:()=>i("login"),children:"登入"}),u.jsx("button",{className:`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${s==="register"?"bg-white text-sea-blue shadow-sm":"text-gray-600 hover:text-gray-800"}`,onClick:()=>i("register"),children:"註冊"})]}),u.jsxs("form",{onSubmit:s==="login"?g:y,children:[u.jsxs("div",{className:"mb-4",children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"電子郵件"}),u.jsxs("div",{className:"relative",children:[u.jsx(VM,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"}),u.jsx("input",{type:"email",name:"email",value:d.email,onChange:f,className:"input-field pl-10",placeholder:"輸入你的電子郵件",required:!0})]})]}),u.jsxs("div",{className:"mb-4",children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"密碼"}),u.jsxs("div",{className:"relative",children:[u.jsx(zd,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"}),u.jsx("input",{type:o?"text":"password",name:"password",value:d.password,onChange:f,className:"input-field pl-10 pr-10",placeholder:"輸入密碼",required:!0}),u.jsx("button",{type:"button",onClick:()=>a(!o),className:"absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600",children:o?u.jsx(WM,{className:"w-5 h-5"}):u.jsx(zM,{className:"w-5 h-5"})})]})]}),s==="register"&&u.jsxs("div",{className:"mb-6",children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"確認密碼"}),u.jsxs("div",{className:"relative",children:[u.jsx(zd,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"}),u.jsx("input",{type:o?"text":"password",name:"confirmPassword",value:d.confirmPassword,onChange:f,className:"input-field pl-10",placeholder:"再次輸入密碼",required:!0})]})]}),u.jsx("button",{type:"submit",disabled:l,className:"btn-primary w-full text-center disabled:opacity-50 disabled:cursor-not-allowed",children:l?"處理中...":s==="login"?"登入":"註冊"})]})]})]})})},Pt=N0((t,e)=>({currentRoom:"chat",currentPrivateChat:null,messages:[],onlineUsers:{},friends:[],privateChatsList:[],sidebarOpen:!1,darkMode:localStorage.getItem("darkMode")==="yes",setCurrentRoom:n=>t({currentRoom:n}),setCurrentPrivateChat:n=>t({currentPrivateChat:n}),setMessages:n=>t({messages:n}),addMessage:n=>t(r=>({messages:[...r.messages,n]})),setOnlineUsers:n=>t({onlineUsers:n}),setFriends:n=>t({friends:n}),setPrivateChatsList:n=>t({privateChatsList:n}),setSidebarOpen:n=>t({sidebarOpen:n}),toggleDarkMode:()=>{const n=!e().darkMode;localStorage.setItem("darkMode",n?"yes":"no"),t({darkMode:n}),n?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},clearMessages:()=>t({messages:[]})})),nj=async t=>{if(t!=null&&t.uid)try{console.log("正在為用戶創建範例資料:",t.nickname);const e=J(G,`users/${t.uid}`),n={nickname:t.nickname||"匿名用戶",avatar:t.avatar||null,email:t.email||null,isAnonymous:t.isAnonymous||!1,lastSeen:Date.now(),isOnline:!0,joinedAt:Date.now()};await Qr(e,n),console.log("✅ 用戶資料已更新")}catch(e){console.error("❌ 創建範例資料失敗:",e)}};class rj{constructor(){this.maxFileSize=5*1024*1024,this.allowedTypes=["image/jpeg","image/jpg","image/png","image/gif","image/webp"],this.maxWidth=400,this.maxHeight=400}validateFile(e){const n=[];if(!e)return n.push("請選擇一個文件"),{valid:!1,errors:n};if(this.allowedTypes.includes(e.type)||n.push("只支援 JPG、PNG、GIF、WebP 格式的圖片"),e.size>this.maxFileSize){const r=this.maxFileSize/1048576;n.push(`文件大小不能超過 ${r}MB`)}return{valid:n.length===0,errors:n}}async compressImage(e,n=this.maxWidth,r=this.maxHeight,s=.8){return new Promise((i,o)=>{const a=document.createElement("canvas"),l=a.getContext("2d"),c=new Image;c.onload=()=>{let{width:d,height:h}=this.calculateDimensions(c.width,c.height,n,r);a.width=d,a.height=h,l.drawImage(c,0,0,d,h),a.toBlob(f=>{i(f)},e.type,s)},c.onerror=()=>{o(new Error("圖片載入失敗"))},c.src=URL.createObjectURL(e)})}calculateDimensions(e,n,r,s){if(e<=r&&n<=s)return{width:e,height:n};const i=e/n;return e>n?(e=r,n=e/i):(n=s,e=n*i),{width:Math.round(e),height:Math.round(n)}}async fileToBase64(e){return new Promise((n,r)=>{const s=new FileReader;s.onload=()=>{n(s.result)},s.onerror=()=>{r(new Error("文件讀取失敗"))},s.readAsDataURL(e)})}async processImage(e){try{console.log("🖼️ 開始處理圖片:",e.name);const n=this.validateFile(e);if(!n.valid)throw new Error(n.errors.join(", "));console.log("📐 壓縮圖片...");const r=await this.compressImage(e);console.log("🔤 轉換為 Base64...");const s=await this.fileToBase64(r);return console.log("✅ 圖片處理完成",{originalSize:(e.size/1024).toFixed(1)+"KB",compressedSize:(r.size/1024).toFixed(1)+"KB",reduction:((1-r.size/e.size)*100).toFixed(1)+"%"}),{success:!0,base64:s,blob:r,originalFile:e,stats:{originalSize:e.size,compressedSize:r.size,reduction:((1-r.size/e.size)*100).toFixed(1)}}}catch(n){return console.error("❌ 圖片處理失敗:",n),{success:!1,error:n.message}}}createAvatarPreview(e,n=80){const r=document.createElement("canvas"),s=r.getContext("2d"),i=new Image;return new Promise(o=>{i.onload=()=>{r.width=n,r.height=n,s.beginPath(),s.arc(n/2,n/2,n/2,0,Math.PI*2,!0),s.closePath(),s.clip(),s.drawImage(i,0,0,n,n),o(r.toDataURL())},i.src=e})}}const kl=new rj,sj=({currentAvatar:t="",onAvatarChange:e=()=>{},size:n="large"})=>{const[r,s]=x.useState(!1),[i,o]=x.useState(t),[a,l]=x.useState(!1),c=x.useRef(null),d=x.useRef(null),f={small:{container:"w-16 h-16",icon:"w-4 h-4",button:"w-5 h-5"},medium:{container:"w-20 h-20",icon:"w-5 h-5",button:"w-6 h-6"},large:{container:"w-24 h-24",icon:"w-6 h-6",button:"w-7 h-7"}}[n],g=async p=>{if(p){s(!0);try{console.log("📸 處理頭像上傳:",p.name);const m=await kl.processImage(p);if(m.success){const _=await kl.createAvatarPreview(m.base64);o(_),e(m.base64,m.stats),console.log("✅ 頭像上傳成功")}else throw new Error(m.error)}catch(m){console.error("❌ 頭像上傳失敗:",m),window.showNotification&&window.showNotification(`頭像上傳失敗: ${m.message}`,"error",5e3)}finally{s(!1),l(!1)}}},y=p=>{const m=p.target.files[0];g(m),p.target.value=""},w=p=>{p.preventDefault();const m=p.dataTransfer.files[0];g(m)},k=p=>{p.preventDefault()},v=()=>{o(""),e(""),l(!1)};return u.jsxs("div",{className:"relative",children:[u.jsxs("div",{className:`${f.container} relative rounded-full overflow-hidden bg-gray-100 dark:bg-gray-700 cursor-pointer group border-2 border-gray-200 dark:border-gray-600 hover:border-primary-400 dark:hover:border-primary-400 transition-colors`,onClick:()=>l(!a),onDrop:w,onDragOver:k,children:[i?u.jsx("img",{src:i,alt:"頭像",className:"w-full h-full object-cover"}):u.jsx("div",{className:"w-full h-full flex items-center justify-center text-gray-400 dark:text-gray-500",children:u.jsx(ej,{className:f.icon})}),r?u.jsx("div",{className:"absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center",children:u.jsx("div",{className:"animate-spin rounded-full h-6 w-6 border-2 border-white border-t-transparent"})}):u.jsx("div",{className:"absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-200 flex items-center justify-center",children:u.jsx(Wd,{className:`${f.icon} text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200`})})]}),a&&u.jsxs("div",{className:"absolute top-full left-0 mt-2 z-50 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden min-w-48",children:[u.jsxs("button",{onClick:()=>{var p;(p=c.current)==null||p.click(),l(!1)},className:"w-full px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-3 text-sm",children:[u.jsx(ZM,{className:"w-4 h-4 text-gray-500"}),u.jsx("span",{children:"從相簿選擇"})]}),u.jsxs("button",{onClick:()=>{var p;(p=d.current)==null||p.click(),l(!1)},className:"w-full px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-3 text-sm md:hidden",children:[u.jsx(Wd,{className:"w-4 h-4 text-gray-500"}),u.jsx("span",{children:"拍照上傳"})]}),i&&u.jsxs("button",{onClick:v,className:"w-full px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-3 text-sm text-red-600 border-t border-gray-200 dark:border-gray-700",children:[u.jsx(Vt,{className:"w-4 h-4"}),u.jsx("span",{children:"移除頭像"})]})]}),u.jsx("input",{ref:c,type:"file",accept:"image/*",onChange:y,className:"hidden"}),u.jsx("input",{ref:d,type:"file",accept:"image/*",capture:"environment",onChange:y,className:"hidden"}),a&&u.jsx("div",{className:"fixed inset-0 z-40",onClick:()=>l(!1)})]})},ij=({isOpen:t,onClose:e})=>{const{user:n,setUser:r}=Fe(),[s,i]=x.useState((n==null?void 0:n.nickname)||""),[o,a]=x.useState((n==null?void 0:n.avatar)||""),[l,c]=x.useState(s),[d,h]=x.useState(localStorage.getItem("notificationSound")!=="false"),[f,g]=x.useState(localStorage.getItem("desktopNotification")!=="false"),[y,w]=x.useState(!1);if(x.useEffect(()=>{t&&w(hs.isEnabled())},[t]),x.useEffect(()=>{t&&(c((n==null?void 0:n.nickname)||""),a((n==null?void 0:n.avatar)||""))},[t,n]),!t)return null;const k=async()=>{try{const E={...n,nickname:l||"匿名用戶",avatar:o};r(E),console.log("💾 保存設定:",{nickname:l,avatar:o,notifications:notificationsEnabled}),e()}catch(E){console.error("保存設定失敗:",E)}},v=()=>{const E=!d;h(E),localStorage.setItem("notificationSound",E.toString()),F.success(E?"🔊 提示音已開啟":"🔇 提示音已關閉")},p=async()=>{try{if(f)g(!1),localStorage.setItem("desktopNotification","false"),F.success("🔕 桌面通知已關閉");else{if(!("Notification"in window)){F.error("❌ 此瀏覽器不支援通知");return}if(await Notification.requestPermission()!=="granted"){F.error("❌ 通知權限被拒絕");return}g(!0),localStorage.setItem("desktopNotification","true"),F.success("🔔 桌面通知已啟用"),window.showNotification&&window.showNotification("桌面通知已啟用！","success")}}catch(E){console.error("切換桌面通知設定失敗:",E),F.error("❌ 桌面通知設定失敗")}},m=async()=>{try{y?(await hs.disable(),w(!1),F.success("🔕 推播通知已關閉")):(console.log("🚀 開始啟用 FCM 推播通知..."),await hs.requestPermission(n==null?void 0:n.uid)?(w(!0),F.success("🚀 推播通知已啟用！",{duration:5e3}),window.showNotification&&window.showNotification("🚀 FCM 推播通知已啟用！現在即使關閉瀏覽器也能收到通知。","success",8e3)):F.error("❌ 推播通知 Token 獲取失敗"))}catch(E){console.error("FCM 推播設定失敗:",E);let b="❌ 推播通知設定失敗";E.message.includes("權限")?(b=`❌ ${E.message}`,window.showNotification&&window.showNotification("💡 如需重新啟用推播：請點擊網址列左側的鎖頭圖示 → 通知 → 允許","warning",1e4)):E.message.includes("HTTPS")?b="❌ 推播通知需要 HTTPS 環境":E.message.includes("不支援")?b=`❌ ${E.message}`:b=`❌ 推播通知設定失敗：${E.message}`,F.error(b,{duration:6e3})}},_=()=>{const E=`
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
    `.trim();window.showNotification?window.showNotification(E,"info",15e3):alert(E)},S=()=>{const E=`https://ui-avatars.com/api/?name=${encodeURIComponent(l||"匿名")}&background=56c596&color=fff&size=128`;a(E)};return u.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4",children:u.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto",children:[u.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700",children:[u.jsx("h2",{className:"text-xl font-semibold text-gray-900 dark:text-white",children:"設定"}),u.jsx("button",{onClick:e,className:"p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors",children:u.jsx(Vt,{className:"w-5 h-5 text-gray-500"})})]}),u.jsxs("div",{className:"p-6 space-y-6",children:[u.jsxs("div",{children:[u.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white mb-4",children:"個人資料"}),u.jsxs("div",{className:"flex items-center gap-4 mb-4",children:[u.jsx(sj,{currentAvatar:o||`https://ui-avatars.com/api/?name=${encodeURIComponent(l||"匿名")}&background=56c596&color=fff&size=96`,onAvatarChange:(E,b)=>{console.log("🖼️ 頭像已更新:",{stats:b}),a(E),window.showNotification&&b&&window.showNotification(`頭像已更新！壓縮率 ${b.reduction}%`,"success",3e3)},size:"large"}),u.jsxs("div",{className:"flex-1",children:[u.jsx("h4",{className:"font-medium text-gray-900 dark:text-white mb-1",children:"個人頭像"}),u.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400 mb-2",children:"點擊頭像上傳新圖片，支援拖拽上傳"}),u.jsx("div",{className:"flex gap-2",children:u.jsxs("button",{onClick:S,className:"flex items-center gap-2 px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-sm",children:[u.jsx(Wd,{className:"w-3 h-3"}),"生成隨機頭像"]})}),u.jsx("p",{className:"text-xs text-gray-400 dark:text-gray-500 mt-1",children:"支援 JPG、PNG、GIF、WebP，最大 5MB"})]})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",children:"暱稱"}),u.jsx("input",{type:"text",value:l,onChange:E=>c(E.target.value),className:"w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white",placeholder:"輸入你的暱稱",maxLength:20})]})]}),u.jsxs("div",{children:[u.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white mb-4",children:"通知設定"}),u.jsxs("div",{className:"flex items-center justify-between mb-4",children:[u.jsxs("div",{className:"flex items-center gap-3",children:[d?u.jsx(Mx,{className:"w-5 h-5 text-green-500"}):u.jsx(jx,{className:"w-5 h-5 text-gray-400"}),u.jsxs("div",{children:[u.jsx("p",{className:"font-medium text-gray-900 dark:text-white",children:"提示音"}),u.jsx("p",{className:"text-sm text-gray-500",children:"收到新訊息時播放提示音"})]})]}),u.jsx("button",{onClick:v,className:`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${d?"bg-blue-500":"bg-gray-300"}`,children:u.jsx("span",{className:`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${d?"translate-x-6":"translate-x-1"}`})})]}),u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs("div",{className:"flex items-center gap-3",children:[f?u.jsx($M,{className:"w-5 h-5 text-green-500"}):u.jsx(UM,{className:"w-5 h-5 text-gray-400"}),u.jsxs("div",{children:[u.jsx("p",{className:"font-medium text-gray-900 dark:text-white",children:"桌面通知"}),u.jsx("p",{className:"text-sm text-gray-500",children:"在瀏覽器中顯示通知泡泡"})]})]}),u.jsx("button",{onClick:p,className:`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${f?"bg-blue-500":"bg-gray-300"}`,children:u.jsx("span",{className:`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${f?"translate-x-6":"translate-x-1"}`})})]}),u.jsxs("div",{className:"mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg",children:[u.jsxs("div",{className:"flex items-center justify-between mb-3",children:[u.jsxs("div",{className:"flex items-center gap-3",children:[y?u.jsx(Wg,{className:"w-5 h-5 text-blue-500"}):u.jsx(Wg,{className:"w-5 h-5 text-gray-400"}),u.jsxs("div",{children:[u.jsx("p",{className:"font-medium text-gray-900 dark:text-white",children:"推播通知 (FCM)"}),u.jsx("p",{className:"text-sm text-gray-500",children:"即使關閉瀏覽器也能收到通知"})]})]}),u.jsx("button",{onClick:m,className:`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${y?"bg-blue-500":"bg-gray-300"}`,children:u.jsx("span",{className:`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${y?"translate-x-6":"translate-x-1"}`})})]}),u.jsxs("div",{className:"flex gap-2 text-xs",children:[u.jsx("button",{onClick:_,className:"px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors",children:"📖 權限指引"}),u.jsx("button",{onClick:async()=>{const E=await hs.diagnoseEnvironment(),b=`
🔍 推播通知環境檢查：

✅ HTTPS: ${E.https?"是":"❌ 否"}
✅ Service Worker: ${E.serviceWorker?"支援":"❌ 不支援"}
✅ 推播管理: ${E.pushManager?"支援":"❌ 不支援"}  
✅ 通知 API: ${E.notification?"支援":"❌ 不支援"}
✅ Firebase Messaging: ${E.messaging?"已載入":"❌ 未載入"}
📋 權限狀態: ${E.permission}
🌐 瀏覽器: ${E.userAgent.includes("Chrome")?"Chrome":E.userAgent.includes("Firefox")?"Firefox":E.userAgent.includes("Safari")?"Safari":"其他"}
                    `.trim();window.showNotification?window.showNotification(b,"info",1e4):alert(b)},className:"px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors",children:"🔍 環境檢查"})]})]})]}),u.jsxs("div",{children:[u.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white mb-4",children:"其他"}),u.jsxs("div",{className:"space-y-2 text-sm text-gray-600 dark:text-gray-400",children:[u.jsx("p",{children:"• 版本: 1.0.0"}),u.jsx("p",{children:"• React 聊天室"}),u.jsx("p",{children:"• 支援即時通訊和檔案分享"})]})]})]}),u.jsxs("div",{className:"flex gap-3 p-6 border-t border-gray-200 dark:border-gray-700",children:[u.jsx("button",{onClick:e,className:"flex-1 px-4 py-2 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors",children:"取消"}),u.jsx("button",{onClick:k,className:"flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors",children:"保存"})]})]})})},oj=({isOpen:t,onConfirm:e,onReject:n,onClose:r})=>{const[s,i]=x.useState(!1);if(!t)return null;const o=()=>{i(!0),setTimeout(()=>{n(),i(!1)},200)},a=()=>{i(!0),setTimeout(()=>{e(),i(!1)},200)},l=()=>{i(!0),setTimeout(()=>{r(),i(!1)},200)};return u.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center",children:[u.jsx("div",{className:`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-200 ${s?"opacity-0":"opacity-100"}`,onClick:l}),u.jsxs("div",{className:`relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 mx-4 max-w-md w-full transform transition-all duration-200 ${s?"scale-95 opacity-0":"scale-100 opacity-100"}`,children:[u.jsx("button",{onClick:l,className:"absolute top-4 right-4 p-2 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors",children:u.jsx(Vt,{className:"w-5 h-5"})}),u.jsx("div",{className:"flex justify-center mb-6",children:u.jsx("div",{className:"w-20 h-20 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center",children:u.jsx(Ax,{className:"w-10 h-10 text-amber-600 dark:text-amber-400"})})}),u.jsx("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white text-center mb-4",children:"年齡驗證"}),u.jsxs("div",{className:"text-center mb-8",children:[u.jsx("p",{className:"text-gray-600 dark:text-gray-300 mb-4 leading-relaxed",children:"你即將進入約炮區，此區域包含成人內容。"}),u.jsx("p",{className:"text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2",children:"請確認你是否已滿 18 歲？"}),u.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:"未滿 18 歲的用戶將自動跳轉至閒聊區"})]}),u.jsxs("div",{className:"flex gap-4",children:[u.jsx("button",{onClick:o,className:"flex-1 px-6 py-3 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-semibold rounded-xl transition-colors duration-200",children:"否，未滿 18 歲"}),u.jsx("button",{onClick:a,className:"flex-1 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl transition-colors duration-200",children:"是，已滿 18 歲"})]}),u.jsx("p",{className:"text-xs text-gray-400 dark:text-gray-500 text-center mt-4",children:"LalaLand 致力於為用戶提供安全的交流環境"})]})]})},El=async()=>{console.log("🧹 開始清理過期的在線用戶...");try{const t=J(G,"users"),e=await Qn(t);if(!e.exists()){console.log("📭 沒有找到任何用戶資料");return}const n=e.val(),r=Date.now(),s=5*60*1e3;let i=0;for(const[o,a]of Object.entries(n)){if(!a)continue;const l=!a.lastSeen||r-a.lastSeen>s;a.isOnline&&l&&(console.log(`🗑️ 清理過期用戶: ${o} (${a.nickname||"未知"})`),a.isAnonymous?(await hc(J(G,`users/${o}`)),console.log(`✅ 已刪除匿名用戶: ${o}`)):(await E2(J(G,`users/${o}`),{isOnline:!1,lastSeen:r}),console.log(`✅ 已將註冊用戶設為離線: ${o}`)),i++)}return console.log(`🎉 清理完成！共清理了 ${i} 個過期用戶`),i}catch(t){throw console.error("❌ 清理過期用戶失敗:",t),t}},aj=()=>{console.log("⏰ 啟動定期清理服務..."),El();const t=setInterval(El,5*60*1e3);return()=>{console.log("🛑 停止定期清理服務"),clearInterval(t)}},gc=()=>{const{user:t}=Fe(),[e,n]=x.useState({}),[r,s]=x.useState(0),i=c=>Object.values(c).reduce((d,h)=>d+(parseInt(h)||0),0);x.useEffect(()=>{if(!(t!=null&&t.uid)){n({}),s(0);return}const c=J(G,`userUnreadCounts/${t.uid}`);return Lr(c,d=>{if(!d.exists()){n({}),s(0);return}const h=d.val(),f={};let g=0;Object.entries(h).forEach(([y,w])=>{const k=parseInt(w)||0;f[y]=k,g+=k}),console.log("📊 未讀訊息更新:",{counts:f,total:g}),n(f),s(y=>{const w=i(f);return y===0&&w===0?0:y>0&&w===0?y:w}),setTimeout(()=>{const y=Object.values(f).reduce((w,k)=>w+(parseInt(k)||0),0);y!==g&&(console.warn("⚠️ Firebase監聽器數據不一致，重新同步"),s(y))},100)}),()=>{Fw(c)}},[t==null?void 0:t.uid]);const o=async c=>{if(!(t!=null&&t.uid)||!c){console.warn("❌ markAsRead: 缺少必要參數",{userUid:t==null?void 0:t.uid,chatPartnerId:c});return}const d=e[c]||0;if(console.log(`🔄 開始標記 ${c} 為已讀:`,{currentCount:d,unreadCountsKeys:Object.keys(e),totalUnread:r}),d===0){console.log(`⏭️ ${c} 已經沒有未讀訊息，跳過處理`);return}try{const h=J(G,`userUnreadCounts/${t.uid}/${c}`);await hc(h);const f=J(G,`userLastRead/${t.uid}/${c}`);await Qr(f,{timestamp:Date.now()}),n(g=>{console.log(`📝 更新本地狀態 - 刪除 ${c}:`,{beforeDelete:g,targetKey:c,targetCount:g[c]});const y={...g};delete y[c];const w=i(y);return console.log("🔢 重新計算總數:",{oldCounts:g,newCounts:y,oldTotal:r,newTotal:w}),s(w),y}),console.log(`✅ 已讀標記完成: ${c}`)}catch(h){console.error(`❌ 標記已讀失敗 (${c}):`,h),h.code&&console.error("錯誤代碼:",h.code)}},a=async c=>{if(!(!(t!=null&&t.uid)||!c))try{console.log(`📈 增加與 ${c} 的未讀數量`);const d=J(G,`userUnreadCounts/${t.uid}/${c}`);let h=0;await W2(d,f=>(h=(f||0)+1,console.log(`  舊數量: ${f}, 新數量: ${h}`),h)),n(f=>{const g={...f,[c]:h},y=i(g);return console.log(`� 更新未讀計數: ${c} -> ${h}, 總數: ${y}`),s(y),g})}catch(d){console.error("增加未讀數量失敗:",d),(d==null?void 0:d.code)==="PERMISSION_DENIED"&&console.warn("⚠️ Firebase 規則拒絕寫入 userUnreadCounts，請確認規則允許: /userUnreadCounts/${user.uid}/${chatPartnerId}")}},l=()=>{const c=Object.values(e).reduce((d,h)=>d+(parseInt(h)||0),0);return console.log("🔄 重新計算總未讀數:",{unreadCounts:e,calculatedTotal:c,currentTotal:r}),c!==r&&(console.log(`⚠️ 總未讀數不一致，修正: ${r} -> ${c}`),s(c)),c};return x.useEffect(()=>{if(typeof window<"u")return window.recalculateTotal=l,window.debugUnreadCounts=()=>{const c={unreadCounts:e,unreadCountsEntries:Object.entries(e),totalUnread:r,calculatedTotal:i(e)};return console.log("🔍 未讀計數調試:",c),console.table(e),c},window.clearAllUnread=()=>(console.log("🧹 強制清空所有未讀計數"),n({}),s(0),{success:!0,message:"已清空所有未讀計數"}),window.clearSpecificUnread=c=>(console.log(`🎯 清除特定用戶 ${c} 的未讀計數`),n(d=>{const h={...d};delete h[c];const f=i(h);return s(f),console.log("清除後狀態:",{newCounts:h,newTotal:f}),h}),{success:!0,message:`已清除 ${c} 的未讀計數`}),console.log("✅ 調試函數已設置到 window 物件:",{recalculateTotal:typeof window.recalculateTotal,debugUnreadCounts:typeof window.debugUnreadCounts}),()=>{delete window.recalculateTotal,delete window.debugUnreadCounts}},[e,r,l]),{unreadCounts:e,totalUnread:r,markAsRead:o,incrementUnread:a,getUnreadCount:c=>e[c]||0,recalculateTotal:l}};function Lx({count:t=0,className:e=""}){if(t===0)return null;const n=t>99?"99+":t.toString();return u.jsx("span",{className:`absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold 
                  min-w-[18px] h-[18px] rounded-full flex items-center justify-center 
                  px-1 ${e}`,style:{fontSize:"10px"},children:n})}const lj=()=>{const{user:t,isAnonymousUser:e}=Fe(),{currentRoom:n,setCurrentRoom:r,sidebarOpen:s,setSidebarOpen:i,darkMode:o,toggleDarkMode:a,onlineUsers:l}=Pt(),c=xo(),d=e(),[h,f]=x.useState(!1),[g,y]=x.useState(!1),{totalUnread:w}=gc(),k=async()=>{try{if(t&&t.isAnonymous){console.log("🗑️ 匿名用戶登出 - 清理所有資料");const C=J(G,`users/${t.uid}`);await hc(C),console.log("✅ 匿名用戶資料已刪除")}await sN(Yn),F.success("已登出")}catch(C){console.error("登出失敗:",C),F.error("登出失敗")}},v=async()=>{try{F.loading("正在清理過期用戶...",{id:"cleanup"});const C=await El();F.success(`已清理 ${C} 個過期用戶`,{id:"cleanup"})}catch{F.error("清理失敗",{id:"cleanup"})}},p=C=>{if(C==="sex"&&!sessionStorage.getItem("ageVerified")){y(!0);return}r(C),i(!1)},m=()=>{sessionStorage.setItem("ageVerified","true"),y(!1),r("sex"),i(!1),F.success("歡迎進入約炮區！請遵守社區守則。")},_=()=>{y(!1),r("chat"),i(!1),F.error("未滿18歲無法進入約炮區，已自動跳轉至閒聊區。")},S=()=>{y(!1),r("chat"),i(!1),F.info("已跳轉至閒聊區。")},E=[{id:"chat",name:"閒聊區",icon:Xn,tip:"歡迎隨意聊聊、發問、抒發生活大小事"},{id:"love",name:"找伴區",icon:Kf,tip:"你正在找伴專區，請多用心互動，彼此尊重"},{id:"sex",name:"約炮區",icon:Ox,tip:"匿名聊性、約炮自由，但請勿冒犯他人"}],b=`
    ${s?"translate-x-0":"-translate-x-full"}
    md:translate-x-0 fixed md:relative left-0 top-0 h-full w-80 bg-white/80 dark:bg-dark-card/80 
    backdrop-blur-sm border-r border-gray-200 dark:border-gray-700 z-30 transition-transform duration-300
    pt-16 md:pt-0
  `;return u.jsxs(u.Fragment,{children:[s&&u.jsx("div",{className:"md:hidden fixed inset-0 bg-black/50 z-20",onClick:()=>i(!1)}),u.jsx("div",{className:b,children:u.jsxs("div",{className:"flex flex-col h-full",children:[u.jsxs("div",{className:"p-6 border-b border-gray-200 dark:border-gray-700",children:[u.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[u.jsx("img",{src:(t==null?void 0:t.avatar)||`https://ui-avatars.com/api/?name=${t==null?void 0:t.nickname}&background=2877b9&color=fff`,alt:t==null?void 0:t.nickname,className:"w-12 h-12 rounded-full border-2 border-sea-blue"}),u.jsxs("div",{children:[u.jsx("h3",{className:"font-semibold text-gray-800 dark:text-dark-text",children:(t==null?void 0:t.nickname)||"用戶"}),u.jsx("p",{className:"text-sm text-gray-500",children:t!=null&&t.isAnonymous?"匿名用戶":"已註冊用戶"})]})]}),u.jsxs("div",{className:"text-sm text-gray-600 dark:text-gray-400",children:["在線成員: ",Object.keys(l).length," 人"]}),d&&u.jsxs("div",{className:"mt-4 p-4 bg-gradient-to-r from-sea-light to-accent-orange rounded-lg border border-sea-blue/20",children:[u.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[u.jsx(mo,{className:"w-5 h-5 text-sea-blue"}),u.jsx("span",{className:"font-medium text-sea-dark",children:"升級你的體驗"})]}),u.jsx("p",{className:"text-xs text-sea-dark/80 mb-3",children:"註冊帳號解鎖完整功能：發送訊息、私訊、上傳圖片等"}),u.jsx("button",{onClick:()=>c("/login"),className:"w-full px-3 py-2 bg-sea-blue hover:bg-sea-dark text-white text-sm font-medium rounded-lg transition-colors",children:"立即註冊/登入"})]})]}),u.jsxs("div",{className:"flex-1 overflow-y-auto",children:[u.jsxs("div",{className:"p-4",children:[u.jsx("h4",{className:"text-sm font-medium text-gray-500 dark:text-gray-400 mb-3",children:"聊天室"}),u.jsxs("div",{className:"space-y-1",children:[E.map(C=>u.jsxs("button",{onClick:()=>p(C.id),className:`sidebar-item w-full ${n===C.id?"active":""}`,children:[u.jsx(C.icon,{className:"w-5 h-5"}),u.jsx("span",{className:"font-medium",children:C.name})]},C.id)),u.jsxs("button",{onClick:()=>{r("private"),i(!1)},className:`sidebar-item w-full ${n==="private"?"active":""} relative`,children:[u.jsx(Xn,{className:"w-5 h-5"}),u.jsx("span",{className:"font-medium",children:"私人訊息"}),u.jsx(Lx,{count:w})]})]})]}),u.jsxs("div",{className:"p-4 border-t border-gray-200 dark:border-gray-700",children:[u.jsxs("div",{className:"flex items-center justify-between mb-3",children:[u.jsx("h4",{className:"text-sm font-medium text-gray-500 dark:text-gray-400",children:"在線成員"}),u.jsx("button",{onClick:v,className:"text-xs px-2 py-1 rounded bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-600 dark:text-gray-400",title:"清理過期用戶",children:"🧹"})]}),u.jsx("div",{className:"space-y-2",children:Object.entries(l).map(([C,A])=>u.jsxs("div",{className:"flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700",children:[u.jsx("img",{src:A.avatar||`https://ui-avatars.com/api/?name=${A.nickname}&background=56c596&color=fff`,alt:A.nickname,className:"w-8 h-8 rounded-full"}),u.jsxs("div",{children:[u.jsx("p",{className:"text-sm font-medium text-gray-700 dark:text-gray-300",children:A.nickname}),u.jsxs("div",{className:"flex items-center gap-1",children:[u.jsx("div",{className:"w-2 h-2 bg-accent-green rounded-full"}),u.jsx("span",{className:"text-xs text-gray-500",children:"在線"})]})]})]},C))})]})]}),u.jsx("div",{className:"p-4 border-t border-gray-200 dark:border-gray-700",children:u.jsxs("div",{className:"space-y-1",children:[u.jsxs("button",{onClick:a,className:"sidebar-item w-full",children:[o?u.jsx(Px,{className:"w-5 h-5"}):u.jsx(Tx,{className:"w-5 h-5"}),u.jsx("span",{children:o?"淺色模式":"深色模式"})]}),u.jsxs("button",{onClick:()=>f(!0),className:"sidebar-item w-full transition-all duration-300","data-settings-button":!0,children:[u.jsx(XM,{className:"w-5 h-5"}),u.jsx("span",{children:"設定"})]}),u.jsxs("button",{onClick:k,className:"sidebar-item w-full text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20",children:[u.jsx(BM,{className:"w-5 h-5"}),u.jsx("span",{children:"登出"})]})]})})]})}),u.jsx(ij,{isOpen:h,onClose:()=>f(!1)}),u.jsx(oj,{isOpen:g,onConfirm:m,onReject:_,onClose:S})]})},cj=t=>({casual:"日常閒聊",dating:"約會交友",hookup:"約砲專區",confession:"匿名告白",general:"一般討論",random:"隨機聊天"})[t]||`聊天室 ${t}`,uj=t=>{const{user:e}=Fe(),{setMessages:n,addMessage:r,clearMessages:s,currentRoom:i}=Pt(),o=x.useRef(0);return x.useEffect(()=>{if(!e||!t){console.log("⚠️ useFirebaseChat: 缺少必要參數",{user:!!e,roomId:t});return}s();const l=Dd(J(G,`groupChats/${t}/messages`),Ld("timestamp"),jd(15)),c=Lr(l,d=>{try{const h=d.val();if(h){const f=Object.entries(h).map(([w,k])=>({id:w,...k,timestamp:k.timestamp||k.time||Date.now()}));f.sort((w,k)=>{const v=w.timestamp||w.time||0,p=k.timestamp||k.time||0;return v-p});const g=f.length,y=o.current;g>y&&y>0&&f.slice(y).forEach(k=>{const v=k.from||k.userId||k.uid;if(v!==e.uid){const p=i===t,m=k.user||k.nickname||"匿名用戶",_=cj(t);console.log("� 檢查群組通知條件:",{currentRoom:i,roomId:t,isCurrentlyInThisRoom:p,messageFrom:v,senderName:m}),p?console.log(`🔇 不顯示通知 - 用戶正在 ${_} 房間`):(console.log(`�🔔 收到來自 ${m} 的新群組訊息 (非當前房間 ${_}):`,k.text),Oi.showMessageNotification(`${m} (${_})`,k.text,"group"),Oi.playNotificationSound(),window.showNotification&&window.showNotification(`🏠 ${m} (${_}): ${k.text}`,"info",6e3),Math.random()<.3&&Oi.playNotificationSound())}}),o.current=g,console.log(`✅ 房間 ${t} 載入了 ${f.length} 條訊息`),n(f)}else console.log(`📭 房間 ${t} 沒有訊息`),o.current=0,n([])}catch(h){console.error(`❌ 房間 ${t} 載入訊息時出錯:`,h),n([])}},d=>{console.error(`❌ Firebase onValue 錯誤 (房間 ${t}):`,d),d.code==="PERMISSION_DENIED"&&console.error("🚫 權限被拒絕 - 請檢查 Firebase 安全規則!")});return()=>{try{console.log(`🛑 停止監聽房間 ${t} 的訊息`),c()}catch(d){console.error("Firebase unsubscribe error:",d)}}},[e,t,n,s]),{sendMessage:async l=>{if(!e||!t)return;const c=J(G,`groupChats/${t}/messages`),d={...l,sender:{uid:e.uid,nickname:e.nickname||"匿名用戶",avatar:e.avatar||null},timestamp:Date.now(),room:t};try{const h=JSON.parse(JSON.stringify(d));JSON.stringify(d)!==JSON.stringify(h)&&console.debug("useFirebaseChat: removed undefined fields from message before push",{original:d,cleaned:h}),await Dw(c,h)}catch(h){throw console.error("發送訊息失敗:",h),console.error("訊息內容詳情:",{roomId:t,messageDataInput:l,finalMessage:d,userUid:e==null?void 0:e.uid,errorCode:h.code,errorMessage:h.message}),h}}}},dj=()=>{const{user:t}=Fe(),{setOnlineUsers:e}=Pt();x.useEffect(()=>{const n=async()=>{if(!t){console.log("❌ 沒有登入用戶，無法設定在線狀態");return}console.log("👤 開始為用戶設定在線狀態:",t.uid,t.email||"匿名用戶"),await(async()=>{try{const l=J(G,`users/${t.uid}`),c=J(G,`users/${t.uid}/isOnline`),d=J(G,`users/${t.uid}/lastSeen`);console.log("📖 讀取用戶現有資料...");const f=(await Qn(l)).val()||{};console.log("📝 現有用戶資料:",f),console.log("📝 當前登入用戶資料:",{uid:t.uid,email:t.email,nickname:t.nickname||t.displayName,isAnonymous:t.isAnonymous}),await Qr(l,{...f,isOnline:!0,lastSeen:Cg(),email:t.email||f.email||"",nickname:t.nickname||t.displayName||f.nickname||"匿名用戶",uid:t.uid,isAnonymous:t.isAnonymous||!1}),console.log("✅ 用戶在線狀態已設定"),t.isAnonymous?(console.log("🔒 匿名用戶 - 離線時將自動刪除所有資料"),await au(l).remove()):(console.log("👤 註冊用戶 - 離線時保留資料但設為離線"),await au(c).set(!1),await au(d).set(Cg()))}catch(l){console.error("❌ 設定在線狀態失敗:",l)}})(),await El();const i=aj(),o=J(G,"users"),a=Lr(o,l=>{try{const c=l.val();if(c){const d={},h=Date.now(),f=2*60*1e3;Object.entries(c).forEach(([g,y])=>{y&&y.isOnline&&(y.lastSeen&&h-y.lastSeen<f?(console.log(`👥 發現活躍在線用戶: ${g} - ${y.nickname||y.email||"匿名"}`),d[g]={uid:g,nickname:y.nickname||y.email||"匿名用戶",email:y.email||"",isOnline:y.isOnline,lastSeen:y.lastSeen,isAnonymous:y.isAnonymous||!1}):console.log(`⏰ 用戶 ${g} 標示在線但非活躍狀態，跳過顯示`))}),console.log("📊 所有在線用戶:",Object.keys(d)),e(d)}else console.log("📭 沒有找到任何用戶資料"),e({})}catch(c){console.error("❌ 處理在線用戶資料失敗:",c)}});return()=>{console.log("🧹 清理在線用戶監聽器和定期清理服務"),a(),i()}};let r=null;return n().then(s=>{r=s}),()=>{r&&typeof r=="function"&&r()}},[t==null?void 0:t.uid,e])},Dx=async t=>{if(!t)throw new Error("沒有選擇檔案");console.log("📸 開始處理聊天圖片:",t.name,(t.size/1024).toFixed(1)+"KB");try{const e=await kl.processImage(t);if(!e.success)throw new Error(e.error);console.log("📐 圖片壓縮完成:",{原始大小:(t.size/1024).toFixed(1)+"KB",壓縮後:(e.blob.size/1024).toFixed(1)+"KB",壓縮率:e.stats.reduction+"%"});const n=/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);let r=e.blob;n&&e.blob.size>200*1024&&(console.log("📱 手機環境，進行額外壓縮"),r=await kl.compressImage(e.originalFile,300,300,.6),console.log("📱 手機壓縮後大小:",(r.size/1024).toFixed(1)+"KB"));const s=Date.now(),i=Math.random().toString(36).substr(2,9),o=`chatImages/${s}_${i}_compressed.jpg`,a=XA(xl,o),l=await QA(a,r),c=await YA(l.ref);if(console.log("✅ 圖片上傳成功:",c),window.showNotification){const d=((1-r.size/t.size)*100).toFixed(1);window.showNotification(`圖片已壓縮 ${d}% 並上傳成功`,"success",3e3)}return c}catch(e){throw console.error("❌ 上傳圖片失敗:",e),new Error(e.message||"上傳失敗，請稍後再試")}},Fx=t=>new Promise(e=>{const n=new FileReader;n.onload=r=>e(r.target.result),n.readAsDataURL(t)}),Ux=({message:t,isOwn:e,onReply:n,onScrollToMessage:r})=>{const{setCurrentPrivateChat:s,setCurrentRoom:i}=Pt(),{user:o}=Fe(),[a,l]=x.useState(!1),[c,d]=x.useState(t.liked||!1),h=_=>{_.preventDefault(),_.stopPropagation();const S=f();S.uid!==(o==null?void 0:o.uid)&&(console.log("👆 頭像點擊 - 開始私聊:",S),s({roomId:`private_${S.uid}`,recipientId:S.uid,nickname:S.nickname,avatar:S.avatar,isOnline:!1}),i("private"))},f=()=>t.sender?{nickname:t.sender.nickname||t.sender.displayName||t.sender.name,avatar:t.sender.avatar||t.sender.photoURL,uid:t.sender.uid}:{nickname:t.user||t.senderName||t.nickname||t.userName||"匿名用戶",avatar:t.avatar||t.senderAvatar,uid:t.from||t.senderId||t.userId||t.uid},g=_=>{_.stopPropagation(),d(!c),console.log("💖 按讚訊息:",t.id,!c)},y=_=>{_.stopPropagation();try{if(n&&typeof n=="function"){const S=t.text||t.content||t.message||t.msg||"",E=f();n({id:t.id,text:S,sender:E.nickname}),console.log("💬 回覆訊息:",t.id)}else console.warn("⚠️ onReply 函數未提供或不是函數")}catch(S){console.error("回覆功能錯誤:",S),alert("回覆功能暫時無法使用，請稍後再試")}},w=_=>{var S;_.stopPropagation(),r&&((S=t.replyTo)!=null&&S.id)&&(r(t.replyTo.id),console.log("🎯 跳轉到原始訊息:",t.replyTo.id))};if(!t)return null;const k=f();!k.nickname&&!k.uid&&console.warn("訊息缺少發送者信息:",t);const v=_=>{if(!_)return"";const S=/(https?:\/\/[^\s]+)/g;return _.split(S).map((b,C)=>b.match(S)?u.jsx("a",{href:b,target:"_blank",rel:"noopener noreferrer",className:"text-blue-500 hover:text-blue-600 underline break-all",onClick:A=>A.stopPropagation(),children:b},C):b)},p=_=>{const S=_||t.timestamp||t.time;if(!S)return"未知時間";let E;return typeof S=="number"?E=S:typeof S=="string"?E=new Date(S).getTime():S&&typeof S=="object"&&S.seconds?E=S.seconds*1e3+(S.nanoseconds||0)/1e6:E=Date.now(),isNaN(E)?"時間錯誤":new Date(E).toLocaleString("zh-TW",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1})},m=()=>{if(t.type==="vote")return u.jsx(hj,{voteData:t.content});const _=t.text||t.content||t.message||t.msg||"";return u.jsxs("div",{children:[t.image&&u.jsx("img",{src:t.image,alt:"分享的圖片",className:"max-w-sm rounded-lg mb-2 cursor-pointer hover:opacity-90 transition-opacity",onClick:()=>window.open(t.image,"_blank")}),_&&u.jsx("div",{className:"break-words",children:v(_)})]})};return u.jsx("div",{className:`flex ${e?"justify-end":"justify-start"} group`,onMouseEnter:()=>l(!0),onMouseLeave:()=>l(!1),children:u.jsxs("div",{className:`flex items-start gap-3 max-w-[70%] ${e?"flex-row-reverse":""}`,children:[u.jsx("img",{src:k.avatar||`https://ui-avatars.com/api/?name=${encodeURIComponent(k.nickname||"匿名")}&background=56c596&color=fff`,alt:k.nickname||"匿名用戶",className:`w-8 h-8 rounded-full flex-shrink-0 mt-1 ${k.uid!==(o==null?void 0:o.uid)?"cursor-pointer hover:ring-2 hover:ring-sea-blue/50 transition-all duration-200":""}`,onClick:k.uid!==(o==null?void 0:o.uid)?h:void 0,title:k.uid!==(o==null?void 0:o.uid)?`點擊與 ${k.nickname} 私聊`:""}),u.jsxs("div",{className:`flex flex-col ${e?"items-end":"items-start"}`,children:[u.jsxs("p",{className:"text-xs text-gray-500 mb-1 px-1",children:[k.nickname||"匿名用戶",e&&u.jsx("span",{className:"text-blue-500",children:" (你)"})]}),t.replyTo&&u.jsx("div",{className:`mb-2 cursor-pointer hover:opacity-80 transition-opacity w-full ${e?"flex justify-end":"flex justify-start"}`,onClick:w,children:u.jsxs("div",{className:`
                text-xs p-2 rounded-lg border-l-4 max-w-[80%] sm:max-w-xs
                ${e?"bg-sea-light/20 border-sea-light text-sea-dark":"bg-gray-100 dark:bg-gray-700 border-sea-blue dark:border-green-400 text-gray-600 dark:text-gray-300"}
              `,children:[u.jsxs("div",{className:"font-medium text-sea-blue dark:text-green-400 mb-1",children:["回覆給 ",t.replyTo.sender]}),u.jsx("div",{className:"truncate",children:t.replyTo.text||"訊息內容"})]})}),u.jsxs("div",{className:`
              message-bubble relative
              ${e?"message-self bg-sea-blue dark:bg-green-600 text-white":"message-other bg-white dark:bg-green-700 text-gray-700 dark:text-green-100 border border-gray-200 dark:border-green-600"}
            `,children:[m(),u.jsx("div",{className:`text-xs mt-1 ${e?"text-sea-light dark:text-green-200":"text-gray-400 dark:text-green-300"}`,children:p(t.timestamp||t.time)})]}),a&&u.jsxs("div",{className:`flex items-center gap-1 mt-1 opacity-0 group-hover:opacity-100 transition-opacity ${e?"flex-row-reverse":""}`,children:[u.jsx("button",{className:"p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors",onClick:g,title:"按讚",children:u.jsx(Kf,{className:`w-3 h-3 transition-colors ${c?"text-red-500 fill-red-500":"text-gray-400 hover:text-red-500"}`})}),u.jsx("button",{className:"p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors",onClick:y,title:"回覆",children:u.jsx(Xn,{className:"w-3 h-3 text-gray-400 hover:text-blue-500"})})]})]})]})})},hj=({voteData:t})=>{const[e,n]=x.useState(null),r=(t==null?void 0:t.votes)||[],s=(t==null?void 0:t.options)||[],i=(t==null?void 0:t.question)||"投票問題",o=r.reduce((l,c)=>l+(c||0),0),a=l=>{e===null&&n(l)};return u.jsxs("div",{className:"bg-gray-50 dark:bg-green-900/30 rounded-lg p-4 min-w-[250px]",children:[u.jsxs("h4",{className:"font-medium mb-3 text-gray-800 dark:text-gray-200",children:["📊 ",i]}),u.jsx("div",{className:"space-y-2",children:s.map((l,c)=>{const d=r[c]||0,h=o>0?d/o*100:0,f=e===c;return u.jsxs("button",{onClick:()=>a(c),disabled:e!==null,className:`
                w-full text-left p-3 rounded-lg border transition-colors relative overflow-hidden
                ${f?"border-sea-blue dark:border-green-400 bg-sea-light dark:bg-green-800 text-sea-dark dark:text-green-100":"border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500"}
                ${e!==null?"cursor-default":"cursor-pointer hover:bg-gray-100 dark:hover:bg-green-800/50"}
              `,children:[e!==null&&u.jsx("div",{className:"absolute inset-0 bg-sea-blue/10 dark:bg-green-500/20 transition-all duration-500",style:{width:`${h}%`}}),u.jsxs("div",{className:"relative flex justify-between items-center",children:[u.jsx("span",{children:l}),e!==null&&u.jsxs("span",{className:"text-sm font-medium",children:[d," (",h.toFixed(1),"%)"]})]})]},c)})}),e!==null&&u.jsxs("p",{className:"text-xs text-gray-500 mt-2 text-center",children:["總投票數: ",o]})]})},fj=({onEmojiSelect:t,onClose:e})=>{const n=["😀","😃","😄","😁","😆","😅","😂","🤣","😊","😇","🙂","🙃","😉","😌","😍","🥰","😘","😗","😙","😚","😋","😛","😝","😜","🤪","🤨","🧐","🤓","😎","🤩","🥳","😏","😒","😞","😔","😟","😕","🙁","☹️","😣","😖","😫","😩","🥺","😢","😭","😤","😠","😡","🤬","🤯","😳","🥵","🥶","😱","😨","😰","😥","😓","🤗","🤔","🤭","🤫","🤥","😶","😐","😑","😬","🙄","😯","😦","😧","😮","😲","🥱","😴","🤤","😪","😵","🤐","🥴","🤢","🤮","🤧","😷","🤒","🤕","🤑","🤠","😈","👿","👹","👺","🤡","💩","👻","💀","☠️","👽","👾","🤖","🎃","😺","😸","😹","😻","😼","😽","🙀","😿","😾","❤️","🧡","💛","💚","💙","💜","🖤","🤍","🤎","💔","❣️","💕","💞","💓","💗","💖","💘","💝","💟","☮️","✝️","☪️","🕉️","☸️","✡️","🔯","🕎","☯️","☦️","🛐","⛎","♈","♉","♊","♋","♌","♍","♎","♏","♐","♑"];return u.jsxs("div",{className:"absolute bottom-full left-0 mb-2 bg-white dark:bg-dark-card rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-4 z-50",children:[u.jsx("div",{className:"grid grid-cols-8 gap-2 max-w-xs max-h-40 overflow-y-auto custom-scrollbar",children:n.map((r,s)=>u.jsx("button",{onClick:()=>t(r),className:"text-xl hover:bg-gray-100 dark:hover:bg-gray-700 rounded p-1 transition-colors",children:r},s))}),u.jsx("button",{onClick:e,className:"mt-2 text-xs text-gray-500 hover:text-gray-700 dark:hover:text-gray-300",children:"關閉"})]})},pj=({onSubmit:t,onClose:e})=>{const[n,r]=x.useState(""),[s,i]=x.useState(["",""]),o=()=>{s.length<6&&i([...s,""])},a=(d,h)=>{const f=[...s];f[d]=h,i(f)},l=d=>{if(s.length>2){const h=s.filter((f,g)=>g!==d);i(h)}},c=()=>{const d=s.filter(h=>h.trim());if(!n.trim()){alert("請輸入投票問題");return}if(d.length<2){alert("至少需要兩個選項");return}t({question:n.trim(),options:d,votes:new Array(d.length).fill(0),voters:{}})};return u.jsxs("div",{className:"absolute bottom-full left-0 right-0 mb-2 bg-white dark:bg-dark-card rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-4 z-50",children:[u.jsxs("div",{className:"flex justify-between items-center mb-4",children:[u.jsx("h3",{className:"font-semibold text-gray-800 dark:text-gray-200",children:"建立投票"}),u.jsx("button",{onClick:e,className:"text-gray-500 hover:text-gray-700 dark:hover:text-gray-300",children:u.jsx(Vt,{className:"w-5 h-5"})})]}),u.jsxs("div",{className:"mb-4",children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",children:"投票問題"}),u.jsx("input",{type:"text",value:n,onChange:d=>r(d.target.value),placeholder:"輸入你的問題...",className:`w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                     focus:ring-2 focus:ring-sea-blue/20 focus:border-sea-blue 
                     bg-white dark:bg-gray-700 dark:text-gray-200 outline-none`})]}),u.jsxs("div",{className:"mb-4",children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",children:"選項"}),u.jsx("div",{className:"space-y-2",children:s.map((d,h)=>u.jsxs("div",{className:"flex gap-2",children:[u.jsx("input",{type:"text",value:d,onChange:f=>a(h,f.target.value),placeholder:`選項 ${h+1}`,className:`flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                           focus:ring-2 focus:ring-sea-blue/20 focus:border-sea-blue 
                           bg-white dark:bg-gray-700 dark:text-gray-200 outline-none`}),s.length>2&&u.jsx("button",{onClick:()=>l(h),className:`px-3 py-2 text-red-500 hover:text-red-700 hover:bg-red-50 
                             dark:hover:bg-red-900/20 rounded-lg transition-colors`,children:u.jsx(Vt,{className:"w-4 h-4"})})]},h))}),s.length<6&&u.jsxs("button",{onClick:o,className:"mt-2 flex items-center gap-2 text-sm text-sea-blue hover:text-sea-dark transition-colors",children:[u.jsx(QM,{className:"w-4 h-4"}),"新增選項"]})]}),u.jsxs("div",{className:"flex gap-2 justify-end",children:[u.jsx("button",{onClick:e,className:`px-4 py-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 
                     dark:hover:text-gray-200 border border-gray-300 dark:border-gray-600 
                     rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors`,children:"取消"}),u.jsx("button",{onClick:c,className:`px-4 py-2 bg-sea-blue hover:bg-sea-dark text-white rounded-lg 
                     transition-colors font-medium`,children:"建立投票"})]})]})},mj=({roomId:t})=>{var gt,T;const{user:e,isAnonymousUser:n}=Fe(),{messages:r}=Pt(),{sendMessage:s}=uj(t),i=xo(),o=n(),[a,l]=x.useState(""),[c,d]=x.useState(!1),[h,f]=x.useState(!1),[g,y]=x.useState(null),[w,k]=x.useState(!1),[v,p]=x.useState(null),[m,_]=x.useState(!1),S=x.useRef(null),E=x.useRef(null),b=x.useRef({});x.useEffect(()=>{const I=setTimeout(()=>{if(S.current){const j=S.current.parentElement;j&&(j.scrollTop=j.scrollHeight)}},100);return()=>clearTimeout(I)},[r]),dj();const C={chat:{name:"閒聊區",tip:"歡迎隨意聊聊、發問、抒發生活大小事。"},love:{name:"找伴區",tip:"你正在找伴專區，請多用心互動，彼此尊重。"},sex:{name:"約炮區",tip:"匿名聊性、約炮自由，但請勿冒犯他人。"}},A=()=>{var R;(R=S.current)==null||R.scrollIntoView({behavior:"smooth"})};x.useEffect(()=>{A()},[r]);const M=async R=>{var I;if(R.preventDefault(),!(!a.trim()&&!g)&&!m){_(!0);try{let j=null;g&&((I=E.current)!=null&&I.files[0])&&(k(!0),j=await Dx(E.current.files[0]));const Q={type:"text",content:a.trim(),image:j,...v&&{replyTo:v}};await s(Q),l(""),y(null),d(!1),p(null),E.current&&(E.current.value=""),F.success("訊息已發送")}catch(j){F.error("發送失敗: "+j.message)}finally{k(!1),_(!1)}}},U=async R=>{const I=R.target.files[0];if(I)try{const j=await Fx(I);y(j)}catch{F.error("圖片預覽失敗")}},oe=R=>{l(I=>I+R),d(!1)},Te=R=>{p(R),console.log("💬 準備回覆訊息:",R)},Gt=()=>{p(null),l(""),console.log("❌ 取消回覆")},qt=R=>{const I=b.current[R];I?(I.scrollIntoView({behavior:"smooth",block:"center"}),I.classList.add("highlight-message"),setTimeout(()=>{I.classList.remove("highlight-message")},2e3),console.log("🎯 已跳轉到訊息:",R)):console.warn("⚠️ 找不到指定的訊息元素:",R)},At=r;return u.jsxs("div",{className:"flex flex-col h-screen pt-16 md:pt-0",children:[u.jsxs("div",{className:"bg-white/70 dark:bg-dark-card/70 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 p-4",children:[u.jsxs("div",{className:"flex items-center gap-3 mb-1",children:[u.jsxs("div",{className:"hidden md:flex items-center gap-2",children:[u.jsx("img",{src:"/icon-512.png",alt:"LalaLand",className:"w-8 h-8 rounded-lg"}),u.jsx("span",{className:"text-lg font-bold text-sea-blue",children:"LalaLand"}),u.jsx("div",{className:"w-px h-6 bg-gray-300 dark:bg-gray-600 mx-2"})]}),u.jsx("h2",{className:"text-xl font-semibold text-gray-800 dark:text-dark-text",children:((gt=C[t])==null?void 0:gt.name)||"聊天室"})]}),((T=C[t])==null?void 0:T.tip)&&u.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:C[t].tip})]}),u.jsxs("div",{className:"flex-1 overflow-y-auto overflow-x-hidden p-4 space-y-4 custom-scrollbar",children:[At.length===0?u.jsx("div",{className:"text-center text-gray-500 mt-8",children:u.jsx("p",{children:"還沒有訊息，開始聊天吧！"})}):At.map((R,I)=>{var j;return u.jsx("div",{ref:Q=>{Q&&(b.current[R.id]=Q)},children:u.jsx(Ux,{message:R,isOwn:((j=R.sender)==null?void 0:j.uid)===(e==null?void 0:e.uid)||R.from===(e==null?void 0:e.uid),onReply:Te,onScrollToMessage:qt})},R.id)}),u.jsx("div",{ref:S})]}),g&&u.jsx("div",{className:"p-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700",children:u.jsxs("div",{className:"relative inline-block",children:[u.jsx("img",{src:g,alt:"Preview",className:"max-w-xs rounded-lg"}),u.jsx("button",{onClick:()=>y(null),className:"absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600",children:u.jsx(Vt,{className:"w-4 h-4"})})]})}),v&&u.jsx("div",{className:"bg-blue-50 dark:bg-blue-900/20 border-t border-blue-200 dark:border-blue-700 p-3",children:u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx(Xn,{className:"w-4 h-4 text-blue-500"}),u.jsxs("span",{className:"text-sm text-blue-600 dark:text-blue-400",children:["回覆 ",v.sender]}),u.jsx("span",{className:"text-sm text-gray-500 truncate max-w-xs",children:v.text})]}),u.jsx("button",{onClick:Gt,className:"p-1 hover:bg-blue-200 dark:hover:bg-blue-800 rounded transition-colors",children:u.jsx(Vt,{className:"w-4 h-4 text-blue-500"})})]})}),u.jsxs("div",{className:"bg-white/70 dark:bg-dark-card/70 backdrop-blur-sm border-t border-gray-200 dark:border-gray-700 p-4",children:[o?u.jsxs("div",{className:"flex items-center justify-between p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-lg",children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx(mo,{className:"w-6 h-6 text-amber-600 dark:text-amber-400"}),u.jsxs("div",{children:[u.jsx("p",{className:"text-amber-800 dark:text-amber-200 font-medium",children:"你正在以匿名模式瀏覽"}),u.jsx("p",{className:"text-amber-600 dark:text-amber-400 text-sm",children:"註冊帳號即可發送訊息、上傳圖片、建立投票等功能"})]})]}),u.jsx("button",{onClick:()=>i("/login"),className:"px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-medium transition-colors",children:"立即註冊"})]}):u.jsxs("form",{onSubmit:M,className:"flex items-end gap-2",children:[u.jsxs("div",{className:"flex gap-1",children:[u.jsx("button",{type:"button",onClick:()=>{var R;return(R=E.current)==null?void 0:R.click()},className:"p-2 rounded-lg text-gray-500 hover:text-sea-blue hover:bg-sea-light/50 transition-colors",title:"上傳圖片",children:u.jsx(Nx,{className:"w-5 h-5"})}),u.jsx("button",{type:"button",onClick:()=>d(!c),className:"p-2 rounded-lg text-gray-500 hover:text-sea-blue hover:bg-sea-light/50 transition-colors",title:"表情符號",children:u.jsx(JM,{className:"w-5 h-5"})}),u.jsx("button",{type:"button",onClick:()=>f(!h),className:"p-2 rounded-lg text-gray-500 hover:text-sea-blue hover:bg-sea-light/50 transition-colors",title:"建立投票",children:u.jsx(FM,{className:"w-5 h-5"})})]}),u.jsx("div",{className:"flex-1",children:u.jsx("input",{type:"text",value:a,onChange:R=>l(R.target.value),placeholder:"輸入訊息...",className:`w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 
                           focus:ring-2 focus:ring-sea-blue/20 focus:border-sea-blue 
                           bg-white dark:bg-dark-card dark:text-dark-text outline-none`})}),u.jsx("button",{type:"submit",disabled:!a.trim()&&!g||w||m,className:`p-3 bg-sea-blue hover:bg-sea-dark text-white rounded-lg 
                       disabled:opacity-50 disabled:cursor-not-allowed transition-colors`,children:w||m?u.jsx("div",{className:"w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"}):u.jsx(Rx,{className:"w-5 h-5"})}),u.jsx("input",{ref:E,type:"file",accept:"image/*",onChange:U,className:"hidden"})]}),!o&&c&&u.jsx(fj,{onEmojiSelect:oe,onClose:()=>d(!1)}),!o&&h&&u.jsx(pj,{onSubmit:async R=>{try{await s({type:"vote",content:R}),f(!1),F.success("投票已建立")}catch{F.error("建立投票失敗")}},onClose:()=>f(!1)})]})]})},gj=t=>{const{user:e}=Fe(),{setMessages:n,clearMessages:r,currentRoom:s,currentPrivateChat:i}=Pt(),{incrementUnread:o}=gc();x.useRef(0);const a=x.useRef(!1),[l,c]=x.useState(!1),[d,h]=x.useState(!0),f=x.useRef([]),g=x.useRef(null),y=10,w=x.useCallback(async()=>{if(!e||!t)return;const p=[e.uid,t].sort(),m=`${p[0]}_${p[1]}`;r(),f.current=[],g.current=null,h(!0),c(!0),a.current=!1;try{const _=Dd(J(G,`privateChats/${m}/messages`),Ld("time"),jd(y)),E=(await Qn(_)).val();if(E){const b=Object.entries(E).map(([C,A])=>({id:C,text:A.text,user:A.user,from:A.from,avatar:A.avatar,time:A.time,timestamp:A.time||A.timestamp||Date.now()}));b.sort((C,A)=>(C.time||C.timestamp||0)-(A.time||A.timestamp||0)),f.current=b,g.current=b.length>0?b[0].time:null,console.log(`✅ 載入了 ${b.length} 條初始私訊`),n(b),b.length<y&&h(!1)}else console.log(`📭 私聊 ${m} 沒有訊息`),h(!1)}catch(_){console.error("❌ 載入初始私訊失敗:",_)}finally{c(!1),a.current=!0}},[e,t,r,n]);x.useEffect(()=>{w()},[w]),x.useEffect(()=>{if(!e||!t)return;const p=[e.uid,t].sort(),m=`${p[0]}_${p[1]}`;console.log(`🔄 設定私聊 ${m} 的即時監聽器`);const _=J(G,`privateChats/${m}/messages`),S=Lr(_,E=>{const b=E.val();if(!b)return;const C=Object.entries(b).map(([M,U])=>({id:M,text:U.text,user:U.user,from:U.from,avatar:U.avatar,time:U.time,timestamp:U.time||U.timestamp||Date.now()}));C.sort((M,U)=>(M.time||M.timestamp||0)-(U.time||U.timestamp||0));const A=f.current;if(A.length>0&&a.current){const M=A[A.length-1].time,U=C.filter(oe=>oe.time>M);if(U.length>0){console.log(`📨 收到 ${U.length} 條新私訊`);const oe=[...A,...U];f.current=oe,n(oe),U.forEach(Te=>{if(Te.from!==e.uid&&!(s==="private"&&i&&i.recipientId===Te.from)){console.log(`📈 增加未讀數量 - 收到來自 ${Te.user} 的新私訊`);try{o(Te.from)}catch(qt){console.error("❌ incrementUnread 調用失敗:",qt)}}})}}},E=>{console.error(`❌ Firebase onValue 錯誤 (私聊 ${m}):`,E)});return()=>{console.log(`🛑 停止監聽私聊 ${m}`),S()}},[e,t,s,i,n,o]);const k=x.useCallback(async()=>{if(!e||!t||l||!d||!g.current){console.log("⚠️ 無法載入更多私訊:",{loading:l,hasMore:d,oldestTime:g.current});return}const p=[e.uid,t].sort(),m=`${p[0]}_${p[1]}`;console.log("📜 載入更多私聊歷史訊息..."),c(!0);try{const _=Dd(J(G,`privateChats/${m}/messages`),Ld("time"),C2(g.current),jd(y)),E=(await Qn(_)).val();if(E){const b=Object.entries(E).map(([C,A])=>({id:C,text:A.text,user:A.user,from:A.from,avatar:A.avatar,time:A.time,timestamp:A.time||A.timestamp||Date.now()}));if(b.sort((C,A)=>(C.time||C.timestamp||0)-(A.time||A.timestamp||0)),b.length>0){const C=[...b,...f.current];f.current=C,g.current=b[0].time,console.log(`✅ 載入了 ${b.length} 條歷史私訊`),n(C),b.length<y&&h(!1)}else h(!1)}else console.log("📭 沒有更多私聊歷史訊息"),h(!1)}catch(_){console.error("❌ 載入私聊歷史訊息失敗:",_)}finally{c(!1)}},[e,t,l,d,n]);return{sendPrivateMessage:async p=>{if(!e||!t)return;const m=[e.uid,t].sort(),_=`${m[0]}_${m[1]}`,S=J(G,`privateChats/${_}/messages`),E={text:p.text||p.message,user:e.nickname||e.displayName||"匿名用戶",from:e.uid,avatar:e.avatar||null,time:Date.now(),type:p.type||"text"};p.image&&(E.image=p.image,console.log(`📷 私訊包含圖片: ${p.image}`)),p.replyTo&&(E.replyTo=p.replyTo);try{const b=JSON.parse(JSON.stringify(E));JSON.stringify(E)!==JSON.stringify(b)&&console.debug("usePrivateChat: removed undefined fields from message before push",{original:E,cleaned:b}),console.log(`📤 發送私人訊息到 ${_}:`,b),await Dw(S,b)}catch(b){throw console.error(`❌ 發送私人訊息失敗 (${_}):`,b),console.error("私訊內容詳情:",{chatId:_,recipientId:t,messageDataInput:p,finalMessage:E,userUid:e==null?void 0:e.uid,errorCode:b.code,errorMessage:b.message}),b}},loadMoreMessages:k,loading:l,hasMore:d}},yj=()=>{const{user:t}=Fe(),[e,n]=x.useState([]),[r,s]=x.useState(!0);return x.useEffect(()=>{if(!(t!=null&&t.uid)){console.log("⚠️ usePrivateChatsList: 沒有用戶 UID"),n([]),s(!1);return}console.log(`🚀 開始載入用戶 ${t.uid} 的私聊列表...`),(async()=>{try{s(!0);const o=J(G,"privateChats"),a=await Qn(o);if(!a.exists()){console.log("📭 沒有找到任何私聊房間"),n([]),s(!1);return}const l=a.val(),d=Object.keys(l).filter(y=>y.includes(t.uid));if(console.log(`💬 找到 ${d.length} 個包含用戶的私聊房間:`,d.slice(0,5),"..."),d.length===0){n([]),s(!1);return}console.log(`🚀 開始處理全部 ${d.length} 個私聊房間...`);const h=d.map(async y=>{try{const k=y.split("_").find(E=>E!==t.uid);if(!k)return console.log(`⚠️ 無法解析私聊房間 ${y} 的對方用戶`),null;const[v,p]=await Promise.all([Qn(J(G,`users/${k}`)),Qn(J(G,`privateChats/${y}/messages`))]);if(!v.exists())return console.log(`⚠️ 對方用戶 ${k} 不存在`),null;const m=v.val();let _="開始對話...",S=null;if(p.exists()){const E=p.val(),b=Object.entries(E);if(b.length>0){const C=b.sort(([,M],[,U])=>(U.time||0)-(M.time||0)),[,A]=C[0];_=A.text||"訊息",S=A.time}}return{id:y,recipientId:k,nickname:m.nickname||"匿名用戶",avatar:m.avatar,isOnline:m.online||!1,lastMessage:_,lastMessageTime:S}}catch(w){return console.error(`❌ 處理私聊房間 ${y} 時出錯:`,w),null}}),g=(await Promise.all(h)).filter(y=>y!==null);g.sort((y,w)=>(w.lastMessageTime||0)-(y.lastMessageTime||0)),console.log(`✅ 成功載入 ${g.length} 個私聊對話`),n(g)}catch(o){console.error("❌ 載入私聊列表失敗:",o),n([])}finally{s(!1)}})()},[t==null?void 0:t.uid]),{privateChatsList:e,loading:r,refreshList:()=>{t!=null&&t.uid&&(s(!0),n([]))}}},vj=({isVisible:t,onClose:e,recipientName:n,recipientId:r,isIncoming:s=!1,onAnswer:i=null,onReject:o=null})=>{const[a,l]=x.useState(!1),[c,d]=x.useState(!1),[h,f]=x.useState(!1),[g,y]=x.useState(!0),[w,k]=x.useState(0),[v,p]=x.useState("connecting"),m=x.useRef(null),_=x.useRef(null),S=x.useRef(null),E=x.useRef(null),b=x.useRef(null),C={iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:"stun:stun1.l.google.com:19302"}]},A=async()=>{try{console.log("🔊 初始化語音通話...");const T=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!0,noiseSuppression:!0,autoGainControl:!0}});E.current=T,m.current&&(m.current.srcObject=T),S.current=new RTCPeerConnection(C),T.getTracks().forEach(R=>{S.current.addTrack(R,T)}),S.current.ontrack=R=>{console.log("📻 收到遠端音頻流"),_.current&&(_.current.srcObject=R.streams[0]),d(!0),p("connected"),F.success("語音通話已連接")},S.current.onconnectionstatechange=()=>{const R=S.current.connectionState;console.log("🔗 連接狀態:",R),p(R),R==="connected"?(d(!0),U()):(R==="disconnected"||R==="failed")&&(d(!1),oe())},S.current.onicecandidate=R=>{R.candidate&&(console.log("🧊 ICE 候選:",R.candidate),M(R.candidate))},l(!0),p("connecting"),F.success("正在建立語音連接...")}catch(T){console.error("❌ 語音通話初始化失敗:",T),F.error("無法訪問麥克風，請檢查權限設置"),e()}},M=T=>{console.log("📤 發送 ICE 候選:",T)},U=()=>{b.current=setInterval(()=>{k(T=>T+1)},1e3)},oe=()=>{b.current&&(clearInterval(b.current),b.current=null)},Te=T=>{const R=Math.floor(T/60),I=T%60;return`${R.toString().padStart(2,"0")}:${I.toString().padStart(2,"0")}`},Gt=()=>{if(E.current){const T=E.current.getAudioTracks()[0];T&&(T.enabled=h,f(!h),F.success(h?"麥克風已開啟":"麥克風已關閉"))}},qt=()=>{y(!g),F.success(g?"揚聲器已關閉":"揚聲器已開啟")},At=async()=>{try{await A(),F.success("通話已接聽"),i&&await i()}catch(T){console.error("接聽失敗:",T),F.error("接聽失敗")}},gt=()=>{console.log("📞 掛斷通話"),oe(),E.current&&E.current.getTracks().forEach(T=>T.stop()),S.current&&S.current.close(),l(!1),d(!1),k(0),F.success("通話已結束"),e()};return x.useEffect(()=>(t&&!s&&A(),()=>{oe(),E.current&&E.current.getTracks().forEach(T=>T.stop()),S.current&&S.current.close()}),[t]),console.log("🎬 VoiceCall 渲染狀態:",{isVisible:t,recipientName:n,isIncoming:s,isCallActive:a,isCallConnected:c}),t?(console.log("✅ VoiceCall 顯示中"),u.jsx("div",{className:"fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center",children:u.jsxs("div",{className:"bg-white dark:bg-dark-card rounded-2xl p-8 max-w-sm w-full mx-4 shadow-2xl",children:[u.jsxs("div",{className:"text-center mb-6",children:[u.jsx("img",{src:`https://ui-avatars.com/api/?name=${n}&background=56c596&color=fff&size=120`,alt:n,className:"w-24 h-24 rounded-full mx-auto mb-4"}),u.jsx("h3",{className:"text-xl font-semibold text-gray-800 dark:text-dark-text",children:n}),u.jsx("div",{className:"mt-2",children:s?u.jsx("p",{className:"text-green-600 font-medium animate-pulse",children:"來電中..."}):v==="connecting"?u.jsx("p",{className:"text-blue-600 font-medium animate-pulse",children:"連接中..."}):c?u.jsxs("p",{className:"text-green-600 font-medium",children:["通話中 ",Te(w)]}):u.jsx("p",{className:"text-gray-500",children:"語音通話"})})]}),u.jsxs("div",{className:"flex justify-center gap-4 mb-4",children:[(a||c)&&u.jsx("button",{onClick:Gt,className:`p-4 rounded-full transition-colors ${h?"bg-red-500 text-white":"bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300"}`,title:h?"開啟麥克風":"關閉麥克風",children:h?u.jsx(KM,{className:"w-6 h-6"}):u.jsx(GM,{className:"w-6 h-6"})}),(a||c)&&u.jsx("button",{onClick:qt,className:`p-4 rounded-full transition-colors ${g?"bg-blue-500 text-white":"bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300"}`,title:g?"關閉揚聲器":"開啟揚聲器",children:g?u.jsx(Mx,{className:"w-6 h-6"}):u.jsx(jx,{className:"w-6 h-6"})})]}),u.jsx("div",{className:"flex justify-center gap-8",children:s?u.jsxs(u.Fragment,{children:[u.jsx("button",{onClick:At,className:"p-4 bg-green-500 hover:bg-green-600 text-white rounded-full transition-colors",title:"接聽",children:u.jsx(qM,{className:"w-8 h-8"})}),u.jsx("button",{onClick:()=>{o?o():gt()},className:"p-4 bg-red-500 hover:bg-red-600 text-white rounded-full transition-colors",title:"拒接",children:u.jsx($g,{className:"w-8 h-8"})})]}):u.jsx("button",{onClick:gt,className:"p-4 bg-red-500 hover:bg-red-600 text-white rounded-full transition-colors",title:"掛斷",children:u.jsx($g,{className:"w-8 h-8"})})}),u.jsx("audio",{ref:m,autoPlay:!0,muted:!0}),u.jsx("audio",{ref:_,autoPlay:!0}),u.jsx("div",{className:"mt-6 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg",children:u.jsxs("p",{className:"text-sm text-blue-600 dark:text-blue-400 text-center",children:["🚧 語音通話功能正在開發中",u.jsx("br",{}),"需要實現 Firebase 信令服務器"]})})]})})):(console.log("❌ VoiceCall 隱藏中"),null)},Bg=()=>{var R;const{user:t,isAnonymousUser:e}=Fe(),{currentPrivateChat:n,setCurrentPrivateChat:r,setCurrentRoom:s,messages:i}=Pt(),o=xo(),a=e(),{privateChatsList:l,loading:c,refreshList:d}=yj(),[h,f]=x.useState(""),[g,y]=x.useState(null),[w,k]=x.useState(!1),[v,p]=x.useState(!1),[m,_]=x.useState(null),S=x.useRef(null),E=x.useRef(null),b=x.useRef({}),{sendPrivateMessage:C}=gj(n==null?void 0:n.recipientId),{getUnreadCount:A,markAsRead:M,recalculateTotal:U}=gc();x.useEffect(()=>{console.log("🏠 設定私訊房間狀態"),s("private"),n||console.log("📝 清空當前私聊狀態")},[s]),console.log("💬 PrivateChat 狀態:",{currentPrivateChat:!!n,nickname:n==null?void 0:n.nickname,recipientId:n==null?void 0:n.recipientId,messagesCount:i.length,privateChatsListCount:l.length,chatsLoading:c,hasMessages:i.length>0,firstMessagePreview:i[0]?{text:(R=i[0].text)==null?void 0:R.substring(0,30),from:i[0].from,user:i[0].user}:null}),x.useEffect(()=>{var I;(I=S.current)==null||I.scrollIntoView({behavior:"smooth"})},[i]);const oe=()=>{console.log("⬅️  返回私聊列表"),r(null),U()},Te=async()=>{var I;if(!(!h.trim()&&!g))try{let j=null;g&&((I=E.current)!=null&&I.files[0])&&(k(!0),F.loading("正在上傳圖片..."),j=await Dx(E.current.files[0]),F.dismiss()),await C({text:h.trim(),type:"text",image:j,...m&&{replyTo:m}}),f(""),y(null),_(null),E.current&&(E.current.value=""),j&&F.success("圖片已發送")}catch(j){console.error("發送私訊失敗:",j),F.error("發送失敗: "+j.message)}finally{k(!1)}},Gt=I=>{_(I),console.log("💬 準備回覆私訊:",I)},qt=()=>{_(null),f(""),console.log("❌ 取消回覆")},At=I=>{const j=b.current[I];j?(j.scrollIntoView({behavior:"smooth",block:"center"}),j.classList.add("highlight-message"),setTimeout(()=>{j.classList.remove("highlight-message")},2e3),console.log("🎯 已跳轉到私訊:",I)):console.warn("⚠️ 找不到指定的私訊元素:",I)},gt=async I=>{const j=I.target.files[0];if(j)try{const Q=await Fx(j);y(Q),F.success("圖片已選擇，將自動壓縮")}catch{F.error("圖片預覽失敗")}},T=()=>{p(!1)};return n?u.jsxs("div",{className:"flex flex-col h-screen pt-16 md:pt-0",children:[u.jsx("div",{className:"bg-white/70 dark:bg-dark-card/70 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 p-4",children:u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx("button",{onClick:oe,className:"p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors",title:"返回私聊列表",children:u.jsx(Ix,{className:"w-5 h-5"})}),u.jsx("img",{src:n.avatar||`https://ui-avatars.com/api/?name=${n.nickname}&background=56c596&color=fff`,alt:n.nickname,className:"w-10 h-10 rounded-full"}),u.jsxs("div",{children:[u.jsx("h2",{className:"font-semibold text-gray-800 dark:text-dark-text",children:n.nickname}),u.jsx("p",{className:"text-sm text-gray-500",children:"私人對話"})]})]}),!1]})}),u.jsxs("div",{className:"flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar",children:[!1,i.length===0?u.jsxs("div",{className:"text-center text-gray-500 mt-8",children:[u.jsx(Xn,{className:"w-16 h-16 mx-auto mb-4 text-gray-300"}),u.jsx("p",{children:"還沒有私訊記錄"}),u.jsxs("p",{className:"text-sm",children:["開始和 ",n.nickname," 聊天吧！"]})]}):i.map(I=>{var j;return u.jsx("div",{ref:Q=>{Q&&(b.current[I.id]=Q)},children:u.jsx(Ux,{message:I,isOwn:((j=I.sender)==null?void 0:j.uid)===(t==null?void 0:t.uid)||I.from===(t==null?void 0:t.uid),onReply:Gt,onScrollToMessage:At})},I.id)}),u.jsx("div",{ref:S})]}),g&&u.jsxs("div",{className:"p-3 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700",children:[u.jsxs("div",{className:"relative inline-block",children:[u.jsx("img",{src:g,alt:"Preview",className:"max-w-32 md:max-w-xs rounded-lg"}),u.jsx("button",{onClick:()=>{y(null),E.current&&(E.current.value="")},className:"absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors",children:u.jsx(Vt,{className:"w-4 h-4"})})]}),u.jsx("p",{className:"text-xs text-gray-500 mt-2",children:"點擊 X 移除圖片"})]}),m&&u.jsx("div",{className:"bg-blue-50 dark:bg-blue-900/20 border-t border-blue-200 dark:border-blue-700 p-3",children:u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx(Xn,{className:"w-4 h-4 text-blue-500"}),u.jsxs("span",{className:"text-sm text-blue-600 dark:text-blue-400",children:["回覆 ",m.sender]}),u.jsx("span",{className:"text-sm text-gray-500 truncate max-w-xs",children:m.text})]}),u.jsx("button",{onClick:qt,className:"p-1 hover:bg-blue-200 dark:hover:bg-blue-800 rounded transition-colors",children:u.jsx(Vt,{className:"w-4 h-4 text-blue-500"})})]})}),u.jsx("div",{className:"bg-white/70 dark:bg-dark-card/70 backdrop-blur-sm border-t border-gray-200 dark:border-gray-700 p-4",children:a?u.jsxs("div",{className:"flex items-center justify-between p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-lg",children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx(mo,{className:"w-6 h-6 text-amber-600 dark:text-amber-400"}),u.jsxs("div",{children:[u.jsx("p",{className:"text-amber-800 dark:text-amber-200 font-medium",children:"匿名模式無法發送私訊"}),u.jsx("p",{className:"text-amber-600 dark:text-amber-400 text-sm",children:"註冊帳號即可使用私訊功能"})]})]}),u.jsx("button",{onClick:()=>o("/login"),className:"px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-medium transition-colors",children:"立即註冊"})]}):u.jsxs("div",{className:"flex items-end gap-2",children:[u.jsx("div",{className:"flex gap-1",children:u.jsx("button",{onClick:()=>{var I;return(I=E.current)==null?void 0:I.click()},disabled:w,className:"p-2 rounded-lg text-gray-500 hover:text-sea-blue hover:bg-sea-light/50 transition-colors disabled:opacity-50",title:"上傳圖片",children:u.jsx(Nx,{className:"w-5 h-5"})})}),u.jsx("div",{className:"flex-1",children:u.jsx("input",{type:"text",value:h,onChange:I=>f(I.target.value),onKeyPress:I=>I.key==="Enter"&&Te(),placeholder:`傳訊息給 ${n.nickname}...`,className:`w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                             focus:ring-2 focus:ring-sea-blue/20 focus:border-sea-blue 
                             bg-white dark:bg-dark-card dark:text-dark-text outline-none`})}),u.jsx("button",{onClick:Te,disabled:!h.trim()&&!g||w,className:`px-3 py-2 bg-sea-blue hover:bg-sea-dark text-white rounded-lg 
                         disabled:opacity-50 disabled:cursor-not-allowed transition-colors`,title:w?"上傳中...":"發送",children:w?u.jsx("div",{className:"w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"}):u.jsx(Rx,{className:"w-4 h-4"})}),u.jsx("input",{ref:E,type:"file",accept:"image/*",onChange:gt,className:"hidden"})]})}),u.jsx(vj,{isVisible:v,onClose:T,recipientName:n.nickname,recipientId:n.recipientId,isIncoming:!1})]}):a?u.jsxs("div",{className:"flex flex-col h-screen pt-16 md:pt-0",children:[u.jsx("div",{className:"bg-white/70 dark:bg-dark-card/70 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 p-4",children:u.jsx("div",{className:"flex items-center justify-between",children:u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsxs("div",{className:"hidden md:flex items-center gap-2",children:[u.jsx("img",{src:"/icon-512.png",alt:"LalaLand",className:"w-8 h-8 rounded-lg"}),u.jsx("span",{className:"text-lg font-bold text-sea-blue",children:"LalaLand"}),u.jsx("div",{className:"w-px h-6 bg-gray-300 dark:bg-gray-600 mx-2"})]}),u.jsxs("div",{children:[u.jsx("h2",{className:"text-xl font-semibold text-gray-800 dark:text-dark-text mb-1",children:"私人訊息"}),u.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"匿名模式無法使用私訊功能"})]})]})})}),u.jsx("div",{className:"flex-1 flex items-center justify-center p-8",children:u.jsxs("div",{className:"text-center max-w-md",children:[u.jsxs("div",{className:"mb-6",children:[u.jsx(mo,{className:"w-24 h-24 mx-auto text-amber-400 mb-4"}),u.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2",children:"私訊功能需要註冊"}),u.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-6",children:"為了保護用戶隱私和安全，私訊功能僅對註冊用戶開放。 註冊後你可以："}),u.jsxs("ul",{className:"text-left text-gray-600 dark:text-gray-400 mb-6 space-y-2",children:[u.jsxs("li",{className:"flex items-center gap-2",children:[u.jsx("span",{className:"w-2 h-2 bg-sea-blue rounded-full"}),"發送私人訊息"]}),u.jsxs("li",{className:"flex items-center gap-2",children:[u.jsx("span",{className:"w-2 h-2 bg-sea-blue rounded-full"}),"上傳分享圖片"]}),u.jsxs("li",{className:"flex items-center gap-2",children:[u.jsx("span",{className:"w-2 h-2 bg-sea-blue rounded-full"}),"建立投票和互動"]}),u.jsxs("li",{className:"flex items-center gap-2",children:[u.jsx("span",{className:"w-2 h-2 bg-sea-blue rounded-full"}),"自定義頭像和暱稱"]})]})]}),u.jsx("button",{onClick:()=>o("/login"),className:"px-6 py-3 bg-sea-blue hover:bg-sea-dark text-white rounded-lg font-medium transition-colors",children:"立即註冊/登入"})]})})]}):u.jsxs("div",{className:"flex flex-col h-screen pt-16 md:pt-0",children:[u.jsx("div",{className:"bg-white/70 dark:bg-dark-card/70 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 p-4",children:u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsxs("div",{className:"hidden md:flex items-center gap-2",children:[u.jsx("img",{src:"/icon-512.png",alt:"LalaLand",className:"w-8 h-8 rounded-lg"}),u.jsx("span",{className:"text-lg font-bold text-sea-blue",children:"LalaLand"}),u.jsx("div",{className:"w-px h-6 bg-gray-300 dark:bg-gray-600 mx-2"})]}),u.jsxs("div",{children:[u.jsxs("h2",{className:"text-xl font-semibold text-gray-800 dark:text-dark-text mb-1",children:["私人訊息 (",l.length,")"]}),u.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"點選對話開始私訊"})]})]}),u.jsx("div",{className:"flex gap-2",children:u.jsx("button",{onClick:()=>{console.log("🔄 重新載入私聊列表..."),d()},className:"px-3 py-1 text-xs bg-sea-blue text-white rounded-lg hover:bg-sea-dark transition-colors",children:"🔄 重新載入"})})]})}),u.jsx("div",{className:"flex-1 overflow-y-auto",children:c?u.jsxs("div",{className:"flex items-center justify-center h-64",children:[u.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-sea-blue"}),u.jsx("span",{className:"ml-2 text-gray-500",children:"載入私聊列表中..."})]}):l.length===0?u.jsxs("div",{className:"flex flex-col items-center justify-center h-full text-gray-500",children:[u.jsx(Xn,{className:"w-16 h-16 mb-4 text-gray-300"}),u.jsx("p",{className:"text-lg mb-2",children:"還沒有私訊"}),u.jsxs("p",{className:"text-sm text-center px-4 mb-4",children:["在聊天室中點擊其他用戶的頭像",u.jsx("br",{}),"就可以開始私人對話"]})]}):u.jsx("div",{className:"p-4 space-y-2",children:l.map(I=>u.jsxs("div",{onClick:()=>{console.log(`🔄 切換到私聊: ${I.nickname} (ID: ${I.recipientId})`),r(I),s("private"),M(I.recipientId)},className:"flex items-center gap-3 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer transition-colors relative",children:[u.jsxs("div",{className:"relative",children:[u.jsx("img",{src:I.avatar||`https://ui-avatars.com/api/?name=${I.nickname}&background=56c596&color=fff`,alt:I.nickname,className:"w-12 h-12 rounded-full"}),u.jsx(Lx,{count:A(I.recipientId),className:"absolute -top-1 -right-1"})]}),u.jsxs("div",{className:"flex-1",children:[u.jsx("h3",{className:"font-medium text-gray-800 dark:text-gray-200",children:I.nickname}),u.jsx("p",{className:"text-sm text-gray-500 truncate",children:I.lastMessage||"開始對話..."})]}),u.jsx("div",{className:"text-xs text-gray-400",children:I.lastMessageTime&&new Date(I.lastMessageTime).toLocaleTimeString("zh-TW",{hour:"2-digit",minute:"2-digit"})})]},I.id))})})]})},_j=()=>{const{currentRoom:t,currentPrivateChat:e}=Pt(),n=()=>t==="private"?e?u.jsx(Bg,{}):u.jsx(Bg,{}):u.jsx(mj,{roomId:t});return u.jsx("div",{className:"flex-1 flex flex-col",children:n()})},wj=()=>{const{sidebarOpen:t,setSidebarOpen:e,darkMode:n,toggleDarkMode:r}=Pt(),{user:s}=Fe();return u.jsx("div",{className:"md:hidden fixed top-0 left-0 right-0 z-40 bg-white/90 dark:bg-dark-card/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700",children:u.jsxs("div",{className:"flex items-center justify-between px-4 py-3",children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx("button",{onClick:()=>e(!t),className:"p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors",children:t?u.jsx(Vt,{className:"w-5 h-5"}):u.jsx(HM,{className:"w-5 h-5"})}),u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("img",{src:"/icon-512.png",alt:"LalaLand",className:"w-8 h-8 rounded-lg"}),u.jsx("h1",{className:"font-semibold text-gray-800 dark:text-dark-text",children:"LalaLand"})]})]}),u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("button",{onClick:r,className:"p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors",children:n?u.jsx(Px,{className:"w-5 h-5"}):u.jsx(Tx,{className:"w-5 h-5"})}),s&&u.jsx("img",{src:s.avatar||`https://ui-avatars.com/api/?name=${s.nickname}&background=2877b9&color=fff`,alt:s.nickname,className:"w-8 h-8 rounded-full border-2 border-sea-blue"})]})]})})},xj=()=>{const{user:t}=Fe(),{currentPrivateChat:e,currentRoom:n}=Pt(),{incrementUnread:r}=gc(),s=x.useRef({}),i=x.useRef({});x.useEffect(()=>{if(!(t!=null&&t.uid))return;const o=J(G,"privateChats");return console.log("🛰️ 啟動全域私訊通知監聽..."),Lr(o,a=>{const l=a.val()||{},c=t.uid,d=Object.keys(l).filter(f=>f.split("_").includes(c));Object.keys(s.current).forEach(f=>{if(!d.includes(f)){console.log("🧹 清理不相關監聽器:",f);try{s.current[f]()}catch{}delete s.current[f],delete i.current[f]}}),d.forEach(f=>{if(s.current[f])return;const g=J(G,`privateChats/${f}/messages`);console.log("👂 設定私聊監聽:",f);const y=Lr(g,w=>{var M;const k=w.val();if(!k){i.current[f]||(i.current[f]=Date.now());return}const v=Object.entries(k).map(([U,oe])=>({id:U,...oe,timestamp:oe.time||oe.timestamp||0})).sort((U,oe)=>U.timestamp-oe.timestamp);if(v.length===0)return;const p=v[v.length-1],m=i.current[f];if(!m){i.current[f]=p.timestamp||Date.now(),console.log(`🔄 初次載入私聊 ${f}，記錄最後訊息時間: ${p.timestamp}`);return}if(p.timestamp&&p.timestamp<=m||(i.current[f]=p.timestamp||Date.now(),p.from===c))return;const S=e==null?void 0:e.recipientId,E=f.split("_").find(U=>U!==c),b=n==="private"&&S&&E===S;if(console.log("🔍 檢查是否正在查看私聊:",{chatId:f,currentRoom:n,activePartnerId:S,partnerId:E,isActive:b,messageFrom:p.from,messageSender:p.user}),b){console.log("🟢 正在查看此私聊，跳過通知和未讀計數",{chatId:f,partnerId:E});return}const C=p.user||"匿名用戶",A=((M=p.text)==null?void 0:M.slice(0,80))||"";console.log("🔔 觸發全域私訊通知:",{chatId:f,from:p.from,senderName:C,preview:A,isActive:b}),r(p.from),window.showNotification&&window.showNotification(`💬 ${C}: ${A}`,"info",6e3),Oi.showNotification(`💬 ${C}`,A),Oi.playNotificationSound()});s.current[f]=y})}),()=>{console.log("🛑 停止全域私訊通知監聽"),Object.values(s.current).forEach(a=>{try{a()}catch{}}),s.current={},Fw(o)}},[t==null?void 0:t.uid,e==null?void 0:e.recipientId,n])},mu=()=>{const{darkMode:t}=Pt(),{user:e}=Fe();return xj(),x.useEffect(()=>{t?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},[t]),x.useEffect(()=>{e&&nj(e)},[e]),u.jsxs("div",{className:"h-screen flex bg-earth-beige dark:bg-dark-bg",children:[u.jsx(wj,{}),u.jsx(lj,{}),u.jsx(_j,{})]})},kj=()=>u.jsx("div",{className:"fixed inset-0 bg-gradient-to-br from-earth-beige to-white flex items-center justify-center z-50",children:u.jsxs("div",{className:"text-center",children:[u.jsx("img",{src:"/icon-512.png?v=2",alt:"LalaLand",className:"w-32 h-32 mx-auto mb-6 animate-float"}),u.jsx("h1",{className:"text-3xl font-bold text-sea-dark mb-2",children:"LalaLand"}),u.jsx("p",{className:"text-gray-600",children:"載入中..."}),u.jsx("div",{className:"mt-6",children:u.jsxs("div",{className:"flex justify-center space-x-1",children:[u.jsx("div",{className:"w-2 h-2 bg-sea-blue rounded-full animate-bounce"}),u.jsx("div",{className:"w-2 h-2 bg-sea-blue rounded-full animate-bounce",style:{animationDelay:"0.1s"}}),u.jsx("div",{className:"w-2 h-2 bg-sea-blue rounded-full animate-bounce",style:{animationDelay:"0.2s"}})]})})]})});class Ej extends bl.Component{constructor(n){super(n);Gf(this,"handleReload",()=>{window.location.reload()});this.state={hasError:!1,error:null,errorInfo:null}}static getDerivedStateFromError(n){return{hasError:!0}}componentDidCatch(n,r){console.error("ErrorBoundary caught an error:",n,r),this.setState({error:n,errorInfo:r})}render(){return this.state.hasError?u.jsx("div",{className:"min-h-screen flex items-center justify-center bg-earth-beige p-4",children:u.jsxs("div",{className:"max-w-md w-full bg-white rounded-xl shadow-soft p-6 text-center",children:[u.jsxs("div",{className:"mb-6",children:[u.jsx(Ax,{className:"w-16 h-16 text-red-500 mx-auto mb-4"}),u.jsx("h1",{className:"text-2xl font-bold text-gray-800 mb-2",children:"哎呀，出錯了！"}),u.jsx("p",{className:"text-gray-600",children:"應用程式發生了未預期的錯誤"})]}),u.jsxs("div",{className:"space-y-4",children:[u.jsxs("button",{onClick:this.handleReload,className:"w-full btn-primary flex items-center justify-center gap-2",children:[u.jsx(YM,{className:"w-4 h-4"}),"重新載入"]}),u.jsx("button",{onClick:()=>window.location.href="/",className:"w-full btn-secondary",children:"回到首頁"})]}),!1]})}):this.props.children}}let Sj=0;function bj(){const[t,e]=x.useState([]),[n,r]=x.useState(localStorage.getItem("notificationSound")!=="false"),s=x.useCallback((c,d="info",h=5e3)=>{const f=++Sj,g={id:f,message:c,type:d,timestamp:Date.now()};return e(y=>[...y,g]),n&&d!=="info"&&o(),h>0&&setTimeout(()=>{i(f)},h),f},[n]),i=x.useCallback(c=>{e(d=>d.filter(h=>h.id!==c))},[]),o=()=>{try{const c=new(window.AudioContext||window.webkitAudioContext),d=c.createOscillator(),h=c.createGain();d.connect(h),h.connect(c.destination),d.frequency.value=800,d.type="sine",h.gain.setValueAtTime(.1,c.currentTime),h.gain.exponentialRampToValueAtTime(.01,c.currentTime+.3),d.start(),d.stop(c.currentTime+.3)}catch(c){console.log("無法播放提示音:",c)}},a=()=>{const c=!n;r(c),localStorage.setItem("notificationSound",c.toString())};x.useEffect(()=>(window.showNotification=s,()=>{delete window.showNotification}),[s]);const l=c=>{const d="mb-2 p-3 rounded-lg shadow-lg transform transition-all duration-300 ease-in-out",h={info:"bg-blue-500 text-white",success:"bg-green-500 text-white",warning:"bg-yellow-500 text-black",error:"bg-red-500 text-white"};return`${d} ${h[c]||h.info}`};return u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"fixed top-4 right-4 z-50 max-w-sm w-full",children:t.map(c=>u.jsx("div",{className:l(c.type),onClick:()=>i(c.id),children:u.jsxs("div",{className:"flex justify-between items-start",children:[u.jsx("p",{className:"flex-1 text-sm font-medium",children:c.message}),u.jsx("button",{className:"ml-2 text-lg leading-none opacity-70 hover:opacity-100",onClick:d=>{d.stopPropagation(),i(c.id)},children:"×"})]})},c.id))}),u.jsx("div",{className:"notification-settings",style:{display:"none"},children:u.jsxs("label",{className:"flex items-center gap-2",children:[u.jsx("input",{type:"checkbox",checked:n,onChange:a}),u.jsx("span",{children:"啟用通知提示音"})]})})]})}const Cj=({user:t=null})=>{const[e,n]=x.useState(null),[r,s]=x.useState(!1),[i,o]=x.useState(!1),[a,l]=x.useState(!1),[c,d]=x.useState(!1),[h,f]=x.useState(!1);x.useEffect(()=>{const m=()=>{const b=window.navigator.userAgent.toLowerCase(),C=/ipad|iphone|ipod/.test(b),A=window.navigator.standalone||window.matchMedia("(display-mode: standalone)").matches;l(C),d(A),o(A)},_=b=>{console.log("💻 PWA 安裝提示事件觸發"),b.preventDefault(),n(b)},S=()=>{console.log("✅ PWA 已安裝"),o(!0),s(!1),n(null)};m(),console.log("🔍 PWA 安裝提示初始化:",{isIOSDevice:/ipad|iphone|ipod/.test(window.navigator.userAgent.toLowerCase()),isStandaloneMode:window.navigator.standalone||window.matchMedia("(display-mode: standalone)").matches,hostname:window.location.hostname});const E=setTimeout(()=>{!i&&!c?(console.log("💡 顯示 PWA 安裝提示（登入後推薦）"),s(!0)):console.log("ℹ️ PWA 已安裝或在獨立模式，不顯示安裝提示")},3e3);return window.addEventListener("beforeinstallprompt",_),window.addEventListener("appinstalled",S),()=>{clearTimeout(E),window.removeEventListener("beforeinstallprompt",_),window.removeEventListener("appinstalled",S)}},[i,c]),x.useEffect(()=>{if(console.log("🔍 PWA 安裝提示狀態檢查:",{user:!!t,userName:(t==null?void 0:t.displayName)||(t==null?void 0:t.email)||"未知",isInstalled:i,isStandalone:c,showInstallPrompt:r,deferredPrompt:!!e}),t&&!i&&!c){console.log("👤 用戶登入，準備觸發 PWA 安裝提示");const m=setTimeout(()=>{const _=localStorage.getItem("pwa-install-dismissed");if(console.log("💾 檢查本地存儲:",{dismissed:_,timestamp:_?new Date(parseInt(_)).toLocaleString():"無"}),_){const S=parseInt(_),E=(Date.now()-S)/(1e3*60*60);if(console.log("⏰ 距離上次關閉:",E.toFixed(1),"小時"),E<1){console.log("⏰ 最近已顯示過安裝提示，暫不重複顯示");return}}console.log("💡 用戶登入後顯示 PWA 安裝提示"),s(!0)},2e3);return()=>clearTimeout(m)}},[t,i,c,e]);const g=async()=>{if(console.log("🖱️ 安裝按鈕被點擊",{isIOS:a,deferredPrompt:!!e,isInstalled:i,isStandalone:c}),a){console.log("📱 iOS 設備，顯示安裝說明"),f(!0);return}if(!e){console.log("⚠️ 無法觸發安裝提示，可能原因:"),console.log("1. 瀏覽器不支援 PWA 安裝"),console.log("2. 應用程式已經安裝"),console.log("3. beforeinstallprompt 事件未觸發"),console.log("4. Service Worker 未正確註冊"),console.log("5. manifest.json 有問題"),console.log("6. 不在 HTTPS 環境下（除了 localhost）"),window.checkPWAStatus&&(console.log("� 執行 PWA 狀態診斷..."),window.checkPWAStatus());let m=`PWA 安裝提示未準備就緒。

`;window.location.protocol==="https:"||window.location.hostname==="localhost"?(m+=`手動安裝方式：
`,m+=`1. Chrome：點擊網址列右側的安裝圖示 📱
`,m+=`2. Edge：選單 > 應用程式 > 安裝此網站
`,m+=`3. Safari (iOS)：分享 > 加入主畫面

`,m+="或等待幾秒鐘讓瀏覽器準備安裝提示。"):m+="⚠️ 需要 HTTPS 協議才能安裝 PWA",alert(m);return}try{console.log("🚀 開始 PWA 安裝流程");const m=await e.prompt();console.log("📱 用戶選擇:",m.outcome),m.outcome==="accepted"?console.log("✅ 用戶接受 PWA 安裝"):console.log("❌ 用戶拒絕 PWA 安裝"),n(null),s(!1)}catch(m){console.error("❌ PWA 安裝失敗:",m)}},y=()=>{s(!1),localStorage.setItem("pwa-install-dismissed",Date.now().toString()),console.log("📱 PWA 安裝提示已關閉，30分鐘後可重新顯示")},w=()=>{console.log("🧪 強制顯示 PWA 安裝提示"),localStorage.removeItem("pwa-install-dismissed"),s(!0)},k=async()=>{console.log("🔍 檢查 PWA 安裝條件...");const m={https:window.location.protocol==="https:"||window.location.hostname==="localhost",manifest:!!document.querySelector('link[rel="manifest"]'),serviceWorker:"serviceWorker"in navigator,swRegistered:!1,deferredPrompt:!!e};if(m.serviceWorker)try{const S=await navigator.serviceWorker.getRegistrations();m.swRegistered=S.length>0}catch(S){console.error("❌ 檢查 Service Worker 失敗:",S)}console.log("📋 PWA 安裝條件檢查結果:",m);const _=Object.values(m).every(Boolean);return console.log(_?"✅ 所有條件滿足":"❌ 部分條件不滿足"),m};x.useEffect(()=>{typeof window<"u"&&(window.forcePWAPrompt=w,window.pwaPromptStatus={user:!!t,isInstalled:i,isStandalone:c,showInstallPrompt:r,deferredPrompt:!!e,isIOS:a},window.checkPWAStatus=()=>{console.log("🔍 PWA 狀態檢查:",{protocol:window.location.protocol,hostname:window.location.hostname,isHTTPS:window.location.protocol==="https:",isLocalhost:window.location.hostname==="localhost",hasServiceWorker:"serviceWorker"in navigator,swRegistrations:navigator.serviceWorker?navigator.serviceWorker.getRegistrations():"N/A",hasManifest:!!document.querySelector('link[rel="manifest"]'),deferredPrompt:!!e,isStandalone:window.matchMedia("(display-mode: standalone)").matches,userAgent:navigator.userAgent})},window.checkInstallability=k)},[t,i,c,r,e,a]);const p=(()=>{if(console.log("🔍 shouldShowPrompt 檢查:",{isInstalled:i,isStandalone:c,showInstallPrompt:r,isIOS:a,user:!!t}),i||c)return console.log("❌ 已安裝或已在獨立模式"),!1;const m=localStorage.getItem("pwa-install-dismissed");if(m){const S=parseInt(m),E=(Date.now()-S)/(1e3*60*60);if(console.log("⏰ 距離上次關閉:",E.toFixed(1),"小時"),E<.5)return console.log("❌ 太早重複顯示"),!1}const _=r||a&&t;return console.log("✅ shouldShowPrompt 結果:",_),_})();return console.log("🎯 最終顯示決定:",p),p?u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-sm",children:u.jsx("div",{className:"bg-white dark:bg-dark-card rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-4 animate-slide-up",children:u.jsxs("div",{className:"flex items-start gap-3",children:[u.jsx("div",{className:"flex-shrink-0",children:u.jsx("div",{className:"w-12 h-12 bg-gradient-to-r from-sea-blue to-sea-blue-dark rounded-lg flex items-center justify-center",children:u.jsx("svg",{className:"w-6 h-6 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"})})})}),u.jsxs("div",{className:"flex-1 min-w-0",children:[u.jsx("h3",{className:"text-sm font-semibold text-gray-900 dark:text-white mb-1",children:t?`歡迎 ${t.displayName||t.nickname||"朋友"}！`:"安裝 LalaLand 應用程式"}),u.jsx("p",{className:"text-xs text-gray-600 dark:text-gray-300 mb-3",children:a?"安裝到主畫面以獲得更好的聊天體驗和通知功能":"將 LalaLand 安裝為應用程式，享受更流暢的聊天體驗"}),u.jsxs("div",{className:"flex gap-2",children:[u.jsx("button",{onClick:g,className:"flex-1 bg-gradient-to-r from-sea-blue to-sea-blue-dark text-white text-xs font-medium py-2 px-3 rounded-md hover:opacity-90 transition-opacity",disabled:!e&&!a,children:a?"查看安裝步驟":"立即安裝"}),u.jsx("button",{onClick:y,className:"flex-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium py-2 px-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors",children:"稍後再說"})]})]}),u.jsx("button",{onClick:y,className:"flex-shrink-0 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors",children:u.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]})})}),h&&u.jsx("div",{className:"fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-4",children:u.jsxs("div",{className:"bg-white dark:bg-dark-card rounded-2xl p-6 max-w-sm w-full mx-4 shadow-2xl relative",children:[u.jsx("button",{onClick:()=>f(!1),className:"absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors",children:u.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})}),u.jsxs("div",{className:"text-center mb-6",children:[u.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-sea-blue to-sea-blue-dark rounded-full flex items-center justify-center mx-auto mb-4",children:u.jsx("svg",{className:"w-8 h-8 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"})})}),u.jsx("h2",{className:"text-xl font-bold text-gray-900 dark:text-white mb-2",children:"在 iPhone/iPad 上安裝"})]}),u.jsxs("div",{className:"space-y-4 mb-6",children:[u.jsxs("div",{className:"flex items-start space-x-3",children:[u.jsx("div",{className:"flex-shrink-0 w-6 h-6 bg-sea-blue text-white rounded-full flex items-center justify-center text-sm font-bold",children:"1"}),u.jsxs("div",{className:"text-sm text-gray-600 dark:text-gray-300",children:["點擊瀏覽器底部的 ",u.jsx("strong",{children:"分享按鈕"})," (",u.jsx("svg",{className:"w-4 h-4 inline mx-1",fill:"currentColor",viewBox:"0 0 20 20",children:u.jsx("path",{d:"M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"})}),")"]})]}),u.jsxs("div",{className:"flex items-start space-x-3",children:[u.jsx("div",{className:"flex-shrink-0 w-6 h-6 bg-sea-blue text-white rounded-full flex items-center justify-center text-sm font-bold",children:"2"}),u.jsxs("div",{className:"text-sm text-gray-600 dark:text-gray-300",children:["選擇 ",u.jsx("strong",{children:"「加入主畫面」"})]})]}),u.jsxs("div",{className:"flex items-start space-x-3",children:[u.jsx("div",{className:"flex-shrink-0 w-6 h-6 bg-sea-blue text-white rounded-full flex items-center justify-center text-sm font-bold",children:"3"}),u.jsxs("div",{className:"text-sm text-gray-600 dark:text-gray-300",children:["點擊 ",u.jsx("strong",{children:"「加入」"})," 完成安裝"]})]})]}),u.jsx("button",{onClick:()=>f(!1),className:"w-full bg-gradient-to-r from-sea-blue to-sea-blue-dark text-white py-3 px-4 rounded-lg font-medium hover:opacity-90 transition-opacity",children:"我知道了"})]})})]}):null};class Ij{constructor(){this.isInstalled=!1,this.isStandalone=!1,this.deferredPrompt=null,this.init()}init(){this.detectPWAStatus(),this.setupEventListeners(),this.checkForUpdates()}detectPWAStatus(){this.isStandalone=window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone===!0,this.isInstalled=this.isStandalone,console.log("📱 PWA 狀態檢測:",{isInstalled:this.isInstalled,isStandalone:this.isStandalone,displayMode:this.getDisplayMode(),userAgent:navigator.userAgent})}getDisplayMode(){const e=["fullscreen","standalone","minimal-ui","browser"];for(const n of e)if(window.matchMedia(`(display-mode: ${n})`).matches)return n;return"browser"}setupEventListeners(){window.addEventListener("beforeinstallprompt",e=>{console.log("💻 PWA 安裝提示事件"),e.preventDefault(),this.deferredPrompt=e}),window.addEventListener("appinstalled",()=>{console.log("✅ PWA 安裝完成"),this.isInstalled=!0,this.deferredPrompt=null}),window.matchMedia("(display-mode: standalone)").addEventListener("change",e=>{console.log("🔄 顯示模式變更:",e.matches?"standalone":"browser"),this.isStandalone=e.matches})}async checkForUpdates(){if("serviceWorker"in navigator)try{const e=await navigator.serviceWorker.getRegistration();e&&(await e.update(),e.addEventListener("updatefound",()=>{const n=e.installing;console.log("🔄 發現 Service Worker 更新"),n.addEventListener("statechange",()=>{n.state==="installed"&&navigator.serviceWorker.controller&&(console.log("📦 新版本可用，建議重新載入"),this.showUpdatePrompt())})}))}catch(e){console.error("❌ Service Worker 更新檢查失敗:",e)}}showUpdatePrompt(){window.showNotification&&window.showNotification("🔄 發現新版本，建議重新載入以獲得最新功能","info",1e4)}async promptInstall(){if(!this.deferredPrompt)return console.warn("⚠️ 無法觸發安裝：沒有 beforeinstallprompt 事件"),!1;try{console.log("🚀 觸發 PWA 安裝");const e=await this.deferredPrompt.prompt();return console.log("📱 用戶選擇:",e.outcome),this.deferredPrompt=null,e.outcome==="accepted"}catch(e){return console.error("❌ PWA 安裝失敗:",e),!1}}getInstallInstructions(){const e=navigator.userAgent.toLowerCase();return/ipad|iphone|ipod/.test(e)?{platform:"iOS",browser:"Safari",steps:["點擊瀏覽器底部的分享按鈕 📤","在彈出選單中選擇「加入主畫面」","確認應用程式名稱並點擊「新增」","在主畫面找到 LalaLand 圖示並點擊開啟"]}:/android/.test(e)?/chrome/.test(e)?{platform:"Android",browser:"Chrome",steps:["點擊瀏覽器右上角的選單按鈕 ⋮","選擇「安裝應用程式」或「加入主畫面」","確認安裝並等待完成","在主畫面或應用程式清單中找到 LalaLand"]}:{platform:"Android",browser:"其他瀏覽器",steps:["建議使用 Chrome 瀏覽器獲得最佳體驗","或檢查瀏覽器選單中的「加入主畫面」選項"]}:{platform:"桌面",browser:"瀏覽器",steps:["點擊網址列右側的安裝圖示 💻","或檢查瀏覽器選單中的安裝選項","確認安裝並等待完成"]}}checkPWAFeatures(){const e={serviceWorker:"serviceWorker"in navigator,notifications:"Notification"in window,pushManager:"PushManager"in window,backgroundSync:"serviceWorker"in navigator&&"sync"in window.ServiceWorkerRegistration.prototype,webShare:"share"in navigator,installPrompt:!!this.deferredPrompt,standalone:this.isStandalone};return console.log("🔍 PWA 功能支援:",e),e}getPWAStats(){return{isInstalled:this.isInstalled,isStandalone:this.isStandalone,displayMode:this.getDisplayMode(),canInstall:!!this.deferredPrompt,features:this.checkPWAFeatures(),installInstructions:this.getInstallInstructions()}}}const Nj=new Ij;typeof window<"u"&&(window.pwaManager=Nj);function Tj(){const{user:t,setUser:e,loading:n,setLoading:r}=Fe();return x.useEffect(()=>{(async()=>{try{await hs.initialize(),console.log("✅ FCM 系統已初始化")}catch(o){console.error("❌ FCM 初始化失敗:",o)}})(),"serviceWorker"in navigator&&navigator.serviceWorker.register("/sw.js").then(()=>console.log("📱 Service Worker 註冊成功")).catch(o=>console.log("📱 Service Worker 註冊失敗:",o));const i=rN(Yn,async o=>{if(o){let a=o.displayName||"匿名用戶",l=o.photoURL||null;try{const c=J(G,`users/${o.uid}`),d=await Qn(c);if(d.exists()){const h=d.val();a=h.nickname||a,l=h.avatar||l}}catch(c){console.warn("無法讀取用戶資料:",c)}e({uid:o.uid,email:o.email,nickname:a,avatar:l,isAnonymous:o.isAnonymous}),console.log("✅ 用戶已登入:",o.uid,"暱稱:",a),setTimeout(async()=>{console.log("🔔 自動請求通知權限...");const c=await hs.requestPermissionSilently(o.uid);c?console.log("✅ 通知權限已獲得，FCM Token:",c.substring(0,20)+"..."):console.log("ℹ️ 通知權限未獲得或瀏覽器不支援 FCM")},2e3)}else e(null);r(!1)});return()=>i()},[e,r]),x.useEffect(()=>{const s=async i=>{if(t&&t.isAnonymous){console.log("🗑️ 匿名用戶關閉頁面 - 嘗試清理資料");try{const o=J(G,`users/${t.uid}`);await hc(o),console.log("✅ 匿名用戶資料已清理")}catch(o){console.error("❌ 清理匿名用戶資料失敗:",o)}}};return window.addEventListener("beforeunload",s),()=>{window.removeEventListener("beforeunload",s)}},[t]),n?u.jsx(kj,{}):u.jsx(Ej,{children:u.jsx(ub,{future:{v7_startTransition:!0,v7_relativeSplatPath:!0},children:u.jsxs("div",{className:"min-h-screen",children:[u.jsxs(ab,{children:[u.jsx(va,{path:"/",element:t?u.jsx(mu,{}):u.jsx(tj,{})}),u.jsx(va,{path:"/login",element:t&&!t.isAnonymous?u.jsx(mu,{}):u.jsx(zg,{})}),u.jsx(va,{path:"/chat",element:t?u.jsx(mu,{}):u.jsx(zg,{})})]}),u.jsx(Jb,{position:"top-center",toastOptions:{duration:3e3,style:{background:"#2877b9",color:"#fff",borderRadius:"12px"}}}),u.jsx(bj,{}),u.jsx(Cj,{user:t})]})})})}class Rj{constructor(){this.initialized=!1,this.maxRetries=3,this.retryDelay=1e3}async initialize(){if(this.initialized){console.log("✅ PWA 已初始化");return}console.log("🚀 開始初始化 PWA...");try{await this.checkCompatibility(),await this.initServiceWorker(),await this.handleAndroidIssues(),this.setupErrorHandlers(),this.initialized=!0,console.log("✅ PWA 初始化完成")}catch(e){console.error("❌ PWA 初始化失敗:",e)}}async checkCompatibility(){const e={serviceWorker:"serviceWorker"in navigator,localStorage:this.checkLocalStorage(),sessionStorage:this.checkSessionStorage(),indexedDB:"indexedDB"in window,fetch:"fetch"in window,promises:"Promise"in window};console.log("🔍 兼容性檢查:",e);const n=Object.entries(e).filter(([r,s])=>!s).map(([r])=>r);return n.length>0&&console.warn("⚠️ 以下功能不支援:",n),e}checkLocalStorage(){try{const e="__pwa_test__";return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch{return!1}}checkSessionStorage(){try{const e="__pwa_test__";return sessionStorage.setItem(e,e),sessionStorage.removeItem(e),!0}catch{return!1}}async initServiceWorker(){if(!("serviceWorker"in navigator)){console.warn("⚠️ Service Worker 不支援");return}let e=0;for(;e<this.maxRetries;)try{console.log(`🔄 註冊 Service Worker (第 ${e+1} 次嘗試)`);const n=await navigator.serviceWorker.register("/sw.js",{scope:"/",updateViaCache:"none"});return console.log("✅ Service Worker 註冊成功:",n.scope),n.addEventListener("updatefound",()=>{console.log("📦 發現 Service Worker 更新");const r=n.installing;r&&r.addEventListener("statechange",()=>{r.state==="installed"&&navigator.serviceWorker.controller&&console.log("🔄 Service Worker 已更新，建議重新載入")})}),n}catch(n){if(e++,console.warn(`❌ Service Worker 註冊失敗 (第 ${e} 次):`,n),e<this.maxRetries)await this.delay(this.retryDelay*e);else throw n}}async handleAndroidIssues(){const e=/Android/i.test(navigator.userAgent),n=/Chrome/i.test(navigator.userAgent);if(e){console.log("📱 檢測到 Android 設備，套用優化設置"),document.body&&(document.body.style.touchAction="manipulation");const r=document.querySelector("meta[name=viewport]");r&&(r.content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"),n&&(document.documentElement.style.transform="translateZ(0)",document.documentElement.style.overflowScrolling="touch"),this.setupMemoryManagement()}}setupMemoryManagement(){"memory"in performance&&setInterval(()=>{const n=performance.memory,r=n.usedJSHeapSize/n.jsHeapSizeLimit*100;r>80&&(console.warn("⚠️ 記憶體使用率過高:",`${r.toFixed(1)}%`),this.cleanupMemory())},3e4),document.addEventListener("visibilitychange",()=>{document.hidden&&this.cleanupMemory()})}cleanupMemory(){console.log("🧹 執行記憶體清理..."),console.clear&&console.clear(),window.gc&&window.gc()}setupErrorHandlers(){window.addEventListener("beforeinstallprompt",e=>{console.log("📲 PWA 安裝提示準備就緒")}),window.addEventListener("appinstalled",()=>{console.log("✅ PWA 安裝成功")}),window.addEventListener("online",()=>{console.log("🌐 網路已連接")}),window.addEventListener("offline",()=>{console.log("📴 網路已斷線")})}delay(e){return new Promise(n=>setTimeout(n,e))}isInitialized(){return this.initialized}}const Vg=new Rj;document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>{Vg.initialize()}):Vg.initialize();const Pj=()=>{try{gu.createRoot(document.getElementById("root")).render(u.jsx(bl.StrictMode,{children:u.jsx(Tj,{})})),console.log("✅ 應用程式渲染成功")}catch(t){console.error("❌ 應用程式渲染失敗:",t);const e=document.getElementById("root");e&&(e.innerHTML=`
        <div style="
          display: flex; 
          flex-direction: column; 
          align-items: center; 
          justify-content: center; 
          height: 100vh; 
          font-family: system-ui, -apple-system, sans-serif;
          background: #f7f1e1;
          color: #333;
          text-align: center;
          padding: 20px;
        ">
          <div style="
            background: white; 
            padding: 2rem; 
            border-radius: 12px; 
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            max-width: 400px;
          ">
            <h1 style="color: #dc2626; margin-bottom: 1rem;">應用程式啟動失敗</h1>
            <p style="margin-bottom: 1.5rem; color: #666;">
              很抱歉，應用程式無法正常啟動。請嘗試以下解決方案：
            </p>
            <button 
              onclick="window.location.reload()" 
              style="
                background: #2563eb; 
                color: white; 
                border: none; 
                padding: 12px 24px; 
                border-radius: 6px; 
                cursor: pointer; 
                font-size: 16px;
                margin: 0 8px;
              "
            >
              重新載入
            </button>
            <button 
              onclick="
                localStorage.clear(); 
                sessionStorage.clear(); 
                window.location.reload();
              " 
              style="
                background: #dc2626; 
                color: white; 
                border: none; 
                padding: 12px 24px; 
                border-radius: 6px; 
                cursor: pointer; 
                font-size: 16px;
                margin: 0 8px;
              "
            >
              清除資料並重新載入
            </button>
          </div>
        </div>
      `)}};Pj();
//# sourceMappingURL=index-BxmMbvGG.js.map
