var Pk=Object.defineProperty;var Ak=(t,e,n)=>e in t?Pk(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Uf=(t,e,n)=>Ak(t,typeof e!="symbol"?e+"":e,n);function Ok(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const s in r)if(s!=="default"&&!(s in t)){const i=Object.getOwnPropertyDescriptor(r,s);i&&Object.defineProperty(t,s,i.get?i:{enumerable:!0,get:()=>r[s]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Mg(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Lg={exports:{}},wl={},jg={exports:{}},W={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ho=Symbol.for("react.element"),Dk=Symbol.for("react.portal"),Mk=Symbol.for("react.fragment"),Lk=Symbol.for("react.strict_mode"),jk=Symbol.for("react.profiler"),Fk=Symbol.for("react.provider"),Uk=Symbol.for("react.context"),$k=Symbol.for("react.forward_ref"),zk=Symbol.for("react.suspense"),Wk=Symbol.for("react.memo"),Bk=Symbol.for("react.lazy"),$f=Symbol.iterator;function Vk(t){return t===null||typeof t!="object"?null:(t=$f&&t[$f]||t["@@iterator"],typeof t=="function"?t:null)}var Fg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ug=Object.assign,$g={};function Ms(t,e,n){this.props=t,this.context=e,this.refs=$g,this.updater=n||Fg}Ms.prototype.isReactComponent={};Ms.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ms.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function zg(){}zg.prototype=Ms.prototype;function Ld(t,e,n){this.props=t,this.context=e,this.refs=$g,this.updater=n||Fg}var jd=Ld.prototype=new zg;jd.constructor=Ld;Ug(jd,Ms.prototype);jd.isPureReactComponent=!0;var zf=Array.isArray,Wg=Object.prototype.hasOwnProperty,Fd={current:null},Bg={key:!0,ref:!0,__self:!0,__source:!0};function Vg(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)Wg.call(e,r)&&!Bg.hasOwnProperty(r)&&(s[r]=e[r]);var a=arguments.length-2;if(a===1)s.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];s.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)s[r]===void 0&&(s[r]=a[r]);return{$$typeof:ho,type:t,key:i,ref:o,props:s,_owner:Fd.current}}function Hk(t,e){return{$$typeof:ho,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ud(t){return typeof t=="object"&&t!==null&&t.$$typeof===ho}function Kk(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Wf=/\/+/g;function pc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Kk(""+t.key):e.toString(36)}function na(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ho:case Dk:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+pc(o,0):r,zf(s)?(n="",t!=null&&(n=t.replace(Wf,"$&/")+"/"),na(s,e,n,"",function(c){return c})):s!=null&&(Ud(s)&&(s=Hk(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(Wf,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",zf(t))for(var a=0;a<t.length;a++){i=t[a];var l=r+pc(i,a);o+=na(i,e,n,l,s)}else if(l=Vk(t),typeof l=="function")for(t=l.call(t),a=0;!(i=t.next()).done;)i=i.value,l=r+pc(i,a++),o+=na(i,e,n,l,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ao(t,e,n){if(t==null)return t;var r=[],s=0;return na(t,r,"","",function(i){return e.call(n,i,s++)}),r}function Gk(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ke={current:null},ra={transition:null},qk={ReactCurrentDispatcher:Ke,ReactCurrentBatchConfig:ra,ReactCurrentOwner:Fd};function Hg(){throw Error("act(...) is not supported in production builds of React.")}W.Children={map:Ao,forEach:function(t,e,n){Ao(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ao(t,function(){e++}),e},toArray:function(t){return Ao(t,function(e){return e})||[]},only:function(t){if(!Ud(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};W.Component=Ms;W.Fragment=Mk;W.Profiler=jk;W.PureComponent=Ld;W.StrictMode=Lk;W.Suspense=zk;W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qk;W.act=Hg;W.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Ug({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=Fd.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Wg.call(e,l)&&!Bg.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:ho,type:t.type,key:s,ref:i,props:r,_owner:o}};W.createContext=function(t){return t={$$typeof:Uk,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Fk,_context:t},t.Consumer=t};W.createElement=Vg;W.createFactory=function(t){var e=Vg.bind(null,t);return e.type=t,e};W.createRef=function(){return{current:null}};W.forwardRef=function(t){return{$$typeof:$k,render:t}};W.isValidElement=Ud;W.lazy=function(t){return{$$typeof:Bk,_payload:{_status:-1,_result:t},_init:Gk}};W.memo=function(t,e){return{$$typeof:Wk,type:t,compare:e===void 0?null:e}};W.startTransition=function(t){var e=ra.transition;ra.transition={};try{t()}finally{ra.transition=e}};W.unstable_act=Hg;W.useCallback=function(t,e){return Ke.current.useCallback(t,e)};W.useContext=function(t){return Ke.current.useContext(t)};W.useDebugValue=function(){};W.useDeferredValue=function(t){return Ke.current.useDeferredValue(t)};W.useEffect=function(t,e){return Ke.current.useEffect(t,e)};W.useId=function(){return Ke.current.useId()};W.useImperativeHandle=function(t,e,n){return Ke.current.useImperativeHandle(t,e,n)};W.useInsertionEffect=function(t,e){return Ke.current.useInsertionEffect(t,e)};W.useLayoutEffect=function(t,e){return Ke.current.useLayoutEffect(t,e)};W.useMemo=function(t,e){return Ke.current.useMemo(t,e)};W.useReducer=function(t,e,n){return Ke.current.useReducer(t,e,n)};W.useRef=function(t){return Ke.current.useRef(t)};W.useState=function(t){return Ke.current.useState(t)};W.useSyncExternalStore=function(t,e,n){return Ke.current.useSyncExternalStore(t,e,n)};W.useTransition=function(){return Ke.current.useTransition()};W.version="18.3.1";jg.exports=W;var w=jg.exports;const kl=Mg(w),Qk=Ok({__proto__:null,default:kl},[w]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yk=w,Xk=Symbol.for("react.element"),Jk=Symbol.for("react.fragment"),Zk=Object.prototype.hasOwnProperty,ex=Yk.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,tx={key:!0,ref:!0,__self:!0,__source:!0};function Kg(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Zk.call(e,r)&&!tx.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:Xk,type:t,key:i,ref:o,props:s,_owner:ex.current}}wl.Fragment=Jk;wl.jsx=Kg;wl.jsxs=Kg;Lg.exports=wl;var h=Lg.exports,hu={},Gg={exports:{}},at={},qg={exports:{}},Qg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,A){var F=N.length;N.push(A);e:for(;0<F;){var ge=F-1>>>1,Se=N[ge];if(0<s(Se,A))N[ge]=A,N[F]=Se,F=ge;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var A=N[0],F=N.pop();if(F!==A){N[0]=F;e:for(var ge=0,Se=N.length,Ro=Se>>>1;ge<Ro;){var ir=2*(ge+1)-1,fc=N[ir],or=ir+1,Po=N[or];if(0>s(fc,F))or<Se&&0>s(Po,fc)?(N[ge]=Po,N[or]=F,ge=or):(N[ge]=fc,N[ir]=F,ge=ir);else if(or<Se&&0>s(Po,F))N[ge]=Po,N[or]=F,ge=or;else break e}}return A}function s(N,A){var F=N.sortIndex-A.sortIndex;return F!==0?F:N.id-A.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,d=null,f=3,m=!1,y=!1,_=!1,k=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(N){for(var A=n(c);A!==null;){if(A.callback===null)r(c);else if(A.startTime<=N)r(c),A.sortIndex=A.expirationTime,e(l,A);else break;A=n(c)}}function x(N){if(_=!1,g(N),!y)if(n(l)!==null)y=!0,qs(S);else{var A=n(c);A!==null&&Vr(x,A.startTime-N)}}function S(N,A){y=!1,_&&(_=!1,v(R),R=-1),m=!0;var F=f;try{for(g(A),d=n(l);d!==null&&(!(d.expirationTime>A)||N&&!Q());){var ge=d.callback;if(typeof ge=="function"){d.callback=null,f=d.priorityLevel;var Se=ge(d.expirationTime<=A);A=t.unstable_now(),typeof Se=="function"?d.callback=Se:d===n(l)&&r(l),g(A)}else r(l);d=n(l)}if(d!==null)var Ro=!0;else{var ir=n(c);ir!==null&&Vr(x,ir.startTime-A),Ro=!1}return Ro}finally{d=null,f=F,m=!1}}var E=!1,C=null,R=-1,j=5,O=-1;function Q(){return!(t.unstable_now()-O<j)}function T(){if(C!==null){var N=t.unstable_now();O=N;var A=!0;try{A=C(!0,N)}finally{A?B():(E=!1,C=null)}}else E=!1}var B;if(typeof p=="function")B=function(){p(T)};else if(typeof MessageChannel<"u"){var Z=new MessageChannel,yn=Z.port2;Z.port1.onmessage=T,B=function(){yn.postMessage(null)}}else B=function(){k(T,0)};function qs(N){C=N,E||(E=!0,B())}function Vr(N,A){R=k(function(){N(t.unstable_now())},A)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){y||m||(y=!0,qs(S))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(f){case 1:case 2:case 3:var A=3;break;default:A=f}var F=f;f=A;try{return N()}finally{f=F}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,A){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var F=f;f=N;try{return A()}finally{f=F}},t.unstable_scheduleCallback=function(N,A,F){var ge=t.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?ge+F:ge):F=ge,N){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=F+Se,N={id:u++,callback:A,priorityLevel:N,startTime:F,expirationTime:Se,sortIndex:-1},F>ge?(N.sortIndex=F,e(c,N),n(l)===null&&N===n(c)&&(_?(v(R),R=-1):_=!0,Vr(x,F-ge))):(N.sortIndex=Se,e(l,N),y||m||(y=!0,qs(S))),N},t.unstable_shouldYield=Q,t.unstable_wrapCallback=function(N){var A=f;return function(){var F=f;f=A;try{return N.apply(this,arguments)}finally{f=F}}}})(Qg);qg.exports=Qg;var nx=qg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rx=w,it=nx;function b(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Yg=new Set,Ai={};function Mr(t,e){_s(t,e),_s(t+"Capture",e)}function _s(t,e){for(Ai[t]=e,t=0;t<e.length;t++)Yg.add(e[t])}var an=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fu=Object.prototype.hasOwnProperty,sx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Bf={},Vf={};function ix(t){return fu.call(Vf,t)?!0:fu.call(Bf,t)?!1:sx.test(t)?Vf[t]=!0:(Bf[t]=!0,!1)}function ox(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function ax(t,e,n,r){if(e===null||typeof e>"u"||ox(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ge(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var Oe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Oe[t]=new Ge(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Oe[e]=new Ge(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Oe[t]=new Ge(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Oe[t]=new Ge(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Oe[t]=new Ge(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Oe[t]=new Ge(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Oe[t]=new Ge(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Oe[t]=new Ge(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Oe[t]=new Ge(t,5,!1,t.toLowerCase(),null,!1,!1)});var $d=/[\-:]([a-z])/g;function zd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace($d,zd);Oe[e]=new Ge(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace($d,zd);Oe[e]=new Ge(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace($d,zd);Oe[e]=new Ge(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Oe[t]=new Ge(t,1,!1,t.toLowerCase(),null,!1,!1)});Oe.xlinkHref=new Ge("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Oe[t]=new Ge(t,1,!1,t.toLowerCase(),null,!0,!0)});function Wd(t,e,n,r){var s=Oe.hasOwnProperty(e)?Oe[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(ax(e,n,s,r)&&(n=null),r||s===null?ix(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var mn=rx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Oo=Symbol.for("react.element"),Gr=Symbol.for("react.portal"),qr=Symbol.for("react.fragment"),Bd=Symbol.for("react.strict_mode"),pu=Symbol.for("react.profiler"),Xg=Symbol.for("react.provider"),Jg=Symbol.for("react.context"),Vd=Symbol.for("react.forward_ref"),mu=Symbol.for("react.suspense"),gu=Symbol.for("react.suspense_list"),Hd=Symbol.for("react.memo"),wn=Symbol.for("react.lazy"),Zg=Symbol.for("react.offscreen"),Hf=Symbol.iterator;function Qs(t){return t===null||typeof t!="object"?null:(t=Hf&&t[Hf]||t["@@iterator"],typeof t=="function"?t:null)}var he=Object.assign,mc;function li(t){if(mc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);mc=e&&e[1]||""}return`
`+mc+t}var gc=!1;function yc(t,e){if(!t||gc)return"";gc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var s=c.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,a=i.length-1;1<=o&&0<=a&&s[o]!==i[a];)a--;for(;1<=o&&0<=a;o--,a--)if(s[o]!==i[a]){if(o!==1||a!==1)do if(o--,a--,0>a||s[o]!==i[a]){var l=`
`+s[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{gc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?li(t):""}function lx(t){switch(t.tag){case 5:return li(t.type);case 16:return li("Lazy");case 13:return li("Suspense");case 19:return li("SuspenseList");case 0:case 2:case 15:return t=yc(t.type,!1),t;case 11:return t=yc(t.type.render,!1),t;case 1:return t=yc(t.type,!0),t;default:return""}}function yu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case qr:return"Fragment";case Gr:return"Portal";case pu:return"Profiler";case Bd:return"StrictMode";case mu:return"Suspense";case gu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Jg:return(t.displayName||"Context")+".Consumer";case Xg:return(t._context.displayName||"Context")+".Provider";case Vd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Hd:return e=t.displayName||null,e!==null?e:yu(t.type)||"Memo";case wn:e=t._payload,t=t._init;try{return yu(t(e))}catch{}}return null}function cx(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return yu(e);case 8:return e===Bd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Kn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ey(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function ux(t){var e=ey(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Do(t){t._valueTracker||(t._valueTracker=ux(t))}function ty(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=ey(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function wa(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function vu(t,e){var n=e.checked;return he({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Kf(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Kn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function ny(t,e){e=e.checked,e!=null&&Wd(t,"checked",e,!1)}function _u(t,e){ny(t,e);var n=Kn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?wu(t,e.type,n):e.hasOwnProperty("defaultValue")&&wu(t,e.type,Kn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Gf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function wu(t,e,n){(e!=="number"||wa(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ci=Array.isArray;function ls(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Kn(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function ku(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(b(91));return he({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function qf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(b(92));if(ci(n)){if(1<n.length)throw Error(b(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Kn(n)}}function ry(t,e){var n=Kn(e.value),r=Kn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Qf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function sy(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?sy(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Mo,iy=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Mo=Mo||document.createElement("div"),Mo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Mo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Oi(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var mi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},dx=["Webkit","ms","Moz","O"];Object.keys(mi).forEach(function(t){dx.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),mi[e]=mi[t]})});function oy(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||mi.hasOwnProperty(t)&&mi[t]?(""+e).trim():e+"px"}function ay(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=oy(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var hx=he({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Eu(t,e){if(e){if(hx[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(b(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(b(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(b(61))}if(e.style!=null&&typeof e.style!="object")throw Error(b(62))}}function Su(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Cu=null;function Kd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var bu=null,cs=null,us=null;function Yf(t){if(t=mo(t)){if(typeof bu!="function")throw Error(b(280));var e=t.stateNode;e&&(e=bl(e),bu(t.stateNode,t.type,e))}}function ly(t){cs?us?us.push(t):us=[t]:cs=t}function cy(){if(cs){var t=cs,e=us;if(us=cs=null,Yf(t),e)for(t=0;t<e.length;t++)Yf(e[t])}}function uy(t,e){return t(e)}function dy(){}var vc=!1;function hy(t,e,n){if(vc)return t(e,n);vc=!0;try{return uy(t,e,n)}finally{vc=!1,(cs!==null||us!==null)&&(dy(),cy())}}function Di(t,e){var n=t.stateNode;if(n===null)return null;var r=bl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(b(231,e,typeof n));return n}var Iu=!1;if(an)try{var Ys={};Object.defineProperty(Ys,"passive",{get:function(){Iu=!0}}),window.addEventListener("test",Ys,Ys),window.removeEventListener("test",Ys,Ys)}catch{Iu=!1}function fx(t,e,n,r,s,i,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var gi=!1,ka=null,xa=!1,Nu=null,px={onError:function(t){gi=!0,ka=t}};function mx(t,e,n,r,s,i,o,a,l){gi=!1,ka=null,fx.apply(px,arguments)}function gx(t,e,n,r,s,i,o,a,l){if(mx.apply(this,arguments),gi){if(gi){var c=ka;gi=!1,ka=null}else throw Error(b(198));xa||(xa=!0,Nu=c)}}function Lr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function fy(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Xf(t){if(Lr(t)!==t)throw Error(b(188))}function yx(t){var e=t.alternate;if(!e){if(e=Lr(t),e===null)throw Error(b(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return Xf(s),t;if(i===r)return Xf(s),e;i=i.sibling}throw Error(b(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o){for(a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o)throw Error(b(189))}}if(n.alternate!==r)throw Error(b(190))}if(n.tag!==3)throw Error(b(188));return n.stateNode.current===n?t:e}function py(t){return t=yx(t),t!==null?my(t):null}function my(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=my(t);if(e!==null)return e;t=t.sibling}return null}var gy=it.unstable_scheduleCallback,Jf=it.unstable_cancelCallback,vx=it.unstable_shouldYield,_x=it.unstable_requestPaint,ye=it.unstable_now,wx=it.unstable_getCurrentPriorityLevel,Gd=it.unstable_ImmediatePriority,yy=it.unstable_UserBlockingPriority,Ea=it.unstable_NormalPriority,kx=it.unstable_LowPriority,vy=it.unstable_IdlePriority,xl=null,Ut=null;function xx(t){if(Ut&&typeof Ut.onCommitFiberRoot=="function")try{Ut.onCommitFiberRoot(xl,t,void 0,(t.current.flags&128)===128)}catch{}}var St=Math.clz32?Math.clz32:Cx,Ex=Math.log,Sx=Math.LN2;function Cx(t){return t>>>=0,t===0?32:31-(Ex(t)/Sx|0)|0}var Lo=64,jo=4194304;function ui(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Sa(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~s;a!==0?r=ui(a):(i&=o,i!==0&&(r=ui(i)))}else o=n&~s,o!==0?r=ui(o):i!==0&&(r=ui(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-St(e),s=1<<n,r|=t[n],e&=~s;return r}function bx(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ix(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-St(i),a=1<<o,l=s[o];l===-1?(!(a&n)||a&r)&&(s[o]=bx(a,e)):l<=e&&(t.expiredLanes|=a),i&=~a}}function Tu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function _y(){var t=Lo;return Lo<<=1,!(Lo&4194240)&&(Lo=64),t}function _c(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function fo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-St(e),t[e]=n}function Nx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-St(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function qd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-St(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var Y=0;function wy(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var ky,Qd,xy,Ey,Sy,Ru=!1,Fo=[],Mn=null,Ln=null,jn=null,Mi=new Map,Li=new Map,xn=[],Tx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Zf(t,e){switch(t){case"focusin":case"focusout":Mn=null;break;case"dragenter":case"dragleave":Ln=null;break;case"mouseover":case"mouseout":jn=null;break;case"pointerover":case"pointerout":Mi.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Li.delete(e.pointerId)}}function Xs(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=mo(e),e!==null&&Qd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function Rx(t,e,n,r,s){switch(e){case"focusin":return Mn=Xs(Mn,t,e,n,r,s),!0;case"dragenter":return Ln=Xs(Ln,t,e,n,r,s),!0;case"mouseover":return jn=Xs(jn,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return Mi.set(i,Xs(Mi.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,Li.set(i,Xs(Li.get(i)||null,t,e,n,r,s)),!0}return!1}function Cy(t){var e=dr(t.target);if(e!==null){var n=Lr(e);if(n!==null){if(e=n.tag,e===13){if(e=fy(n),e!==null){t.blockedOn=e,Sy(t.priority,function(){xy(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function sa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Pu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Cu=r,n.target.dispatchEvent(r),Cu=null}else return e=mo(n),e!==null&&Qd(e),t.blockedOn=n,!1;e.shift()}return!0}function ep(t,e,n){sa(t)&&n.delete(e)}function Px(){Ru=!1,Mn!==null&&sa(Mn)&&(Mn=null),Ln!==null&&sa(Ln)&&(Ln=null),jn!==null&&sa(jn)&&(jn=null),Mi.forEach(ep),Li.forEach(ep)}function Js(t,e){t.blockedOn===e&&(t.blockedOn=null,Ru||(Ru=!0,it.unstable_scheduleCallback(it.unstable_NormalPriority,Px)))}function ji(t){function e(s){return Js(s,t)}if(0<Fo.length){Js(Fo[0],t);for(var n=1;n<Fo.length;n++){var r=Fo[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Mn!==null&&Js(Mn,t),Ln!==null&&Js(Ln,t),jn!==null&&Js(jn,t),Mi.forEach(e),Li.forEach(e),n=0;n<xn.length;n++)r=xn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<xn.length&&(n=xn[0],n.blockedOn===null);)Cy(n),n.blockedOn===null&&xn.shift()}var ds=mn.ReactCurrentBatchConfig,Ca=!0;function Ax(t,e,n,r){var s=Y,i=ds.transition;ds.transition=null;try{Y=1,Yd(t,e,n,r)}finally{Y=s,ds.transition=i}}function Ox(t,e,n,r){var s=Y,i=ds.transition;ds.transition=null;try{Y=4,Yd(t,e,n,r)}finally{Y=s,ds.transition=i}}function Yd(t,e,n,r){if(Ca){var s=Pu(t,e,n,r);if(s===null)Tc(t,e,r,ba,n),Zf(t,r);else if(Rx(s,t,e,n,r))r.stopPropagation();else if(Zf(t,r),e&4&&-1<Tx.indexOf(t)){for(;s!==null;){var i=mo(s);if(i!==null&&ky(i),i=Pu(t,e,n,r),i===null&&Tc(t,e,r,ba,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else Tc(t,e,r,null,n)}}var ba=null;function Pu(t,e,n,r){if(ba=null,t=Kd(r),t=dr(t),t!==null)if(e=Lr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=fy(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ba=t,null}function by(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(wx()){case Gd:return 1;case yy:return 4;case Ea:case kx:return 16;case vy:return 536870912;default:return 16}default:return 16}}var Rn=null,Xd=null,ia=null;function Iy(){if(ia)return ia;var t,e=Xd,n=e.length,r,s="value"in Rn?Rn.value:Rn.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return ia=s.slice(t,1<r?1-r:void 0)}function oa(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Uo(){return!0}function tp(){return!1}function lt(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Uo:tp,this.isPropagationStopped=tp,this}return he(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Uo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Uo)},persist:function(){},isPersistent:Uo}),e}var Ls={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jd=lt(Ls),po=he({},Ls,{view:0,detail:0}),Dx=lt(po),wc,kc,Zs,El=he({},po,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Zd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Zs&&(Zs&&t.type==="mousemove"?(wc=t.screenX-Zs.screenX,kc=t.screenY-Zs.screenY):kc=wc=0,Zs=t),wc)},movementY:function(t){return"movementY"in t?t.movementY:kc}}),np=lt(El),Mx=he({},El,{dataTransfer:0}),Lx=lt(Mx),jx=he({},po,{relatedTarget:0}),xc=lt(jx),Fx=he({},Ls,{animationName:0,elapsedTime:0,pseudoElement:0}),Ux=lt(Fx),$x=he({},Ls,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),zx=lt($x),Wx=he({},Ls,{data:0}),rp=lt(Wx),Bx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Vx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Kx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Hx[t])?!!e[t]:!1}function Zd(){return Kx}var Gx=he({},po,{key:function(t){if(t.key){var e=Bx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=oa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Vx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Zd,charCode:function(t){return t.type==="keypress"?oa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?oa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),qx=lt(Gx),Qx=he({},El,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),sp=lt(Qx),Yx=he({},po,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Zd}),Xx=lt(Yx),Jx=he({},Ls,{propertyName:0,elapsedTime:0,pseudoElement:0}),Zx=lt(Jx),eE=he({},El,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),tE=lt(eE),nE=[9,13,27,32],eh=an&&"CompositionEvent"in window,yi=null;an&&"documentMode"in document&&(yi=document.documentMode);var rE=an&&"TextEvent"in window&&!yi,Ny=an&&(!eh||yi&&8<yi&&11>=yi),ip=" ",op=!1;function Ty(t,e){switch(t){case"keyup":return nE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ry(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Qr=!1;function sE(t,e){switch(t){case"compositionend":return Ry(e);case"keypress":return e.which!==32?null:(op=!0,ip);case"textInput":return t=e.data,t===ip&&op?null:t;default:return null}}function iE(t,e){if(Qr)return t==="compositionend"||!eh&&Ty(t,e)?(t=Iy(),ia=Xd=Rn=null,Qr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ny&&e.locale!=="ko"?null:e.data;default:return null}}var oE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ap(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!oE[t.type]:e==="textarea"}function Py(t,e,n,r){ly(r),e=Ia(e,"onChange"),0<e.length&&(n=new Jd("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var vi=null,Fi=null;function aE(t){Wy(t,0)}function Sl(t){var e=Jr(t);if(ty(e))return t}function lE(t,e){if(t==="change")return e}var Ay=!1;if(an){var Ec;if(an){var Sc="oninput"in document;if(!Sc){var lp=document.createElement("div");lp.setAttribute("oninput","return;"),Sc=typeof lp.oninput=="function"}Ec=Sc}else Ec=!1;Ay=Ec&&(!document.documentMode||9<document.documentMode)}function cp(){vi&&(vi.detachEvent("onpropertychange",Oy),Fi=vi=null)}function Oy(t){if(t.propertyName==="value"&&Sl(Fi)){var e=[];Py(e,Fi,t,Kd(t)),hy(aE,e)}}function cE(t,e,n){t==="focusin"?(cp(),vi=e,Fi=n,vi.attachEvent("onpropertychange",Oy)):t==="focusout"&&cp()}function uE(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Sl(Fi)}function dE(t,e){if(t==="click")return Sl(e)}function hE(t,e){if(t==="input"||t==="change")return Sl(e)}function fE(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var It=typeof Object.is=="function"?Object.is:fE;function Ui(t,e){if(It(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!fu.call(e,s)||!It(t[s],e[s]))return!1}return!0}function up(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function dp(t,e){var n=up(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=up(n)}}function Dy(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Dy(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function My(){for(var t=window,e=wa();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=wa(t.document)}return e}function th(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function pE(t){var e=My(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Dy(n.ownerDocument.documentElement,n)){if(r!==null&&th(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=dp(n,i);var o=dp(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var mE=an&&"documentMode"in document&&11>=document.documentMode,Yr=null,Au=null,_i=null,Ou=!1;function hp(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ou||Yr==null||Yr!==wa(r)||(r=Yr,"selectionStart"in r&&th(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),_i&&Ui(_i,r)||(_i=r,r=Ia(Au,"onSelect"),0<r.length&&(e=new Jd("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Yr)))}function $o(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Xr={animationend:$o("Animation","AnimationEnd"),animationiteration:$o("Animation","AnimationIteration"),animationstart:$o("Animation","AnimationStart"),transitionend:$o("Transition","TransitionEnd")},Cc={},Ly={};an&&(Ly=document.createElement("div").style,"AnimationEvent"in window||(delete Xr.animationend.animation,delete Xr.animationiteration.animation,delete Xr.animationstart.animation),"TransitionEvent"in window||delete Xr.transitionend.transition);function Cl(t){if(Cc[t])return Cc[t];if(!Xr[t])return t;var e=Xr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Ly)return Cc[t]=e[n];return t}var jy=Cl("animationend"),Fy=Cl("animationiteration"),Uy=Cl("animationstart"),$y=Cl("transitionend"),zy=new Map,fp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function er(t,e){zy.set(t,e),Mr(e,[t])}for(var bc=0;bc<fp.length;bc++){var Ic=fp[bc],gE=Ic.toLowerCase(),yE=Ic[0].toUpperCase()+Ic.slice(1);er(gE,"on"+yE)}er(jy,"onAnimationEnd");er(Fy,"onAnimationIteration");er(Uy,"onAnimationStart");er("dblclick","onDoubleClick");er("focusin","onFocus");er("focusout","onBlur");er($y,"onTransitionEnd");_s("onMouseEnter",["mouseout","mouseover"]);_s("onMouseLeave",["mouseout","mouseover"]);_s("onPointerEnter",["pointerout","pointerover"]);_s("onPointerLeave",["pointerout","pointerover"]);Mr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Mr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Mr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Mr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Mr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Mr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var di="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vE=new Set("cancel close invalid load scroll toggle".split(" ").concat(di));function pp(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,gx(r,e,void 0,t),t.currentTarget=null}function Wy(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==i&&s.isPropagationStopped())break e;pp(s,a,c),i=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==i&&s.isPropagationStopped())break e;pp(s,a,c),i=l}}}if(xa)throw t=Nu,xa=!1,Nu=null,t}function se(t,e){var n=e[Fu];n===void 0&&(n=e[Fu]=new Set);var r=t+"__bubble";n.has(r)||(By(e,t,2,!1),n.add(r))}function Nc(t,e,n){var r=0;e&&(r|=4),By(n,t,r,e)}var zo="_reactListening"+Math.random().toString(36).slice(2);function $i(t){if(!t[zo]){t[zo]=!0,Yg.forEach(function(n){n!=="selectionchange"&&(vE.has(n)||Nc(n,!1,t),Nc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[zo]||(e[zo]=!0,Nc("selectionchange",!1,e))}}function By(t,e,n,r){switch(by(e)){case 1:var s=Ax;break;case 4:s=Ox;break;default:s=Yd}n=s.bind(null,e,n,t),s=void 0,!Iu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function Tc(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===s||a.nodeType===8&&a.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===s||l.nodeType===8&&l.parentNode===s))return;o=o.return}for(;a!==null;){if(o=dr(a),o===null)return;if(l=o.tag,l===5||l===6){r=i=o;continue e}a=a.parentNode}}r=r.return}hy(function(){var c=i,u=Kd(n),d=[];e:{var f=zy.get(t);if(f!==void 0){var m=Jd,y=t;switch(t){case"keypress":if(oa(n)===0)break e;case"keydown":case"keyup":m=qx;break;case"focusin":y="focus",m=xc;break;case"focusout":y="blur",m=xc;break;case"beforeblur":case"afterblur":m=xc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=np;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=Lx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Xx;break;case jy:case Fy:case Uy:m=Ux;break;case $y:m=Zx;break;case"scroll":m=Dx;break;case"wheel":m=tE;break;case"copy":case"cut":case"paste":m=zx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=sp}var _=(e&4)!==0,k=!_&&t==="scroll",v=_?f!==null?f+"Capture":null:f;_=[];for(var p=c,g;p!==null;){g=p;var x=g.stateNode;if(g.tag===5&&x!==null&&(g=x,v!==null&&(x=Di(p,v),x!=null&&_.push(zi(p,x,g)))),k)break;p=p.return}0<_.length&&(f=new m(f,y,null,n,u),d.push({event:f,listeners:_}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",f&&n!==Cu&&(y=n.relatedTarget||n.fromElement)&&(dr(y)||y[ln]))break e;if((m||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,m?(y=n.relatedTarget||n.toElement,m=c,y=y?dr(y):null,y!==null&&(k=Lr(y),y!==k||y.tag!==5&&y.tag!==6)&&(y=null)):(m=null,y=c),m!==y)){if(_=np,x="onMouseLeave",v="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(_=sp,x="onPointerLeave",v="onPointerEnter",p="pointer"),k=m==null?f:Jr(m),g=y==null?f:Jr(y),f=new _(x,p+"leave",m,n,u),f.target=k,f.relatedTarget=g,x=null,dr(u)===c&&(_=new _(v,p+"enter",y,n,u),_.target=g,_.relatedTarget=k,x=_),k=x,m&&y)t:{for(_=m,v=y,p=0,g=_;g;g=Hr(g))p++;for(g=0,x=v;x;x=Hr(x))g++;for(;0<p-g;)_=Hr(_),p--;for(;0<g-p;)v=Hr(v),g--;for(;p--;){if(_===v||v!==null&&_===v.alternate)break t;_=Hr(_),v=Hr(v)}_=null}else _=null;m!==null&&mp(d,f,m,_,!1),y!==null&&k!==null&&mp(d,k,y,_,!0)}}e:{if(f=c?Jr(c):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var S=lE;else if(ap(f))if(Ay)S=hE;else{S=uE;var E=cE}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(S=dE);if(S&&(S=S(t,c))){Py(d,S,n,u);break e}E&&E(t,f,c),t==="focusout"&&(E=f._wrapperState)&&E.controlled&&f.type==="number"&&wu(f,"number",f.value)}switch(E=c?Jr(c):window,t){case"focusin":(ap(E)||E.contentEditable==="true")&&(Yr=E,Au=c,_i=null);break;case"focusout":_i=Au=Yr=null;break;case"mousedown":Ou=!0;break;case"contextmenu":case"mouseup":case"dragend":Ou=!1,hp(d,n,u);break;case"selectionchange":if(mE)break;case"keydown":case"keyup":hp(d,n,u)}var C;if(eh)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Qr?Ty(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(Ny&&n.locale!=="ko"&&(Qr||R!=="onCompositionStart"?R==="onCompositionEnd"&&Qr&&(C=Iy()):(Rn=u,Xd="value"in Rn?Rn.value:Rn.textContent,Qr=!0)),E=Ia(c,R),0<E.length&&(R=new rp(R,t,null,n,u),d.push({event:R,listeners:E}),C?R.data=C:(C=Ry(n),C!==null&&(R.data=C)))),(C=rE?sE(t,n):iE(t,n))&&(c=Ia(c,"onBeforeInput"),0<c.length&&(u=new rp("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=C))}Wy(d,e)})}function zi(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ia(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=Di(t,n),i!=null&&r.unshift(zi(t,i,s)),i=Di(t,e),i!=null&&r.push(zi(t,i,s))),t=t.return}return r}function Hr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function mp(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,s?(l=Di(n,i),l!=null&&o.unshift(zi(n,l,a))):s||(l=Di(n,i),l!=null&&o.push(zi(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var _E=/\r\n?/g,wE=/\u0000|\uFFFD/g;function gp(t){return(typeof t=="string"?t:""+t).replace(_E,`
`).replace(wE,"")}function Wo(t,e,n){if(e=gp(e),gp(t)!==e&&n)throw Error(b(425))}function Na(){}var Du=null,Mu=null;function Lu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ju=typeof setTimeout=="function"?setTimeout:void 0,kE=typeof clearTimeout=="function"?clearTimeout:void 0,yp=typeof Promise=="function"?Promise:void 0,xE=typeof queueMicrotask=="function"?queueMicrotask:typeof yp<"u"?function(t){return yp.resolve(null).then(t).catch(EE)}:ju;function EE(t){setTimeout(function(){throw t})}function Rc(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),ji(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);ji(e)}function Fn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function vp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var js=Math.random().toString(36).slice(2),Mt="__reactFiber$"+js,Wi="__reactProps$"+js,ln="__reactContainer$"+js,Fu="__reactEvents$"+js,SE="__reactListeners$"+js,CE="__reactHandles$"+js;function dr(t){var e=t[Mt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ln]||n[Mt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=vp(t);t!==null;){if(n=t[Mt])return n;t=vp(t)}return e}t=n,n=t.parentNode}return null}function mo(t){return t=t[Mt]||t[ln],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Jr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(b(33))}function bl(t){return t[Wi]||null}var Uu=[],Zr=-1;function tr(t){return{current:t}}function ie(t){0>Zr||(t.current=Uu[Zr],Uu[Zr]=null,Zr--)}function ne(t,e){Zr++,Uu[Zr]=t.current,t.current=e}var Gn={},Fe=tr(Gn),Xe=tr(!1),wr=Gn;function ws(t,e){var n=t.type.contextTypes;if(!n)return Gn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function Je(t){return t=t.childContextTypes,t!=null}function Ta(){ie(Xe),ie(Fe)}function _p(t,e,n){if(Fe.current!==Gn)throw Error(b(168));ne(Fe,e),ne(Xe,n)}function Vy(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(b(108,cx(t)||"Unknown",s));return he({},n,r)}function Ra(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Gn,wr=Fe.current,ne(Fe,t),ne(Xe,Xe.current),!0}function wp(t,e,n){var r=t.stateNode;if(!r)throw Error(b(169));n?(t=Vy(t,e,wr),r.__reactInternalMemoizedMergedChildContext=t,ie(Xe),ie(Fe),ne(Fe,t)):ie(Xe),ne(Xe,n)}var Qt=null,Il=!1,Pc=!1;function Hy(t){Qt===null?Qt=[t]:Qt.push(t)}function bE(t){Il=!0,Hy(t)}function nr(){if(!Pc&&Qt!==null){Pc=!0;var t=0,e=Y;try{var n=Qt;for(Y=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Qt=null,Il=!1}catch(s){throw Qt!==null&&(Qt=Qt.slice(t+1)),gy(Gd,nr),s}finally{Y=e,Pc=!1}}return null}var es=[],ts=0,Pa=null,Aa=0,ct=[],ut=0,kr=null,Yt=1,Xt="";function ar(t,e){es[ts++]=Aa,es[ts++]=Pa,Pa=t,Aa=e}function Ky(t,e,n){ct[ut++]=Yt,ct[ut++]=Xt,ct[ut++]=kr,kr=t;var r=Yt;t=Xt;var s=32-St(r)-1;r&=~(1<<s),n+=1;var i=32-St(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,Yt=1<<32-St(e)+s|n<<s|r,Xt=i+t}else Yt=1<<i|n<<s|r,Xt=t}function nh(t){t.return!==null&&(ar(t,1),Ky(t,1,0))}function rh(t){for(;t===Pa;)Pa=es[--ts],es[ts]=null,Aa=es[--ts],es[ts]=null;for(;t===kr;)kr=ct[--ut],ct[ut]=null,Xt=ct[--ut],ct[ut]=null,Yt=ct[--ut],ct[ut]=null}var st=null,nt=null,oe=!1,wt=null;function Gy(t,e){var n=dt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function kp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,st=t,nt=Fn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,st=t,nt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=kr!==null?{id:Yt,overflow:Xt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=dt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,st=t,nt=null,!0):!1;default:return!1}}function $u(t){return(t.mode&1)!==0&&(t.flags&128)===0}function zu(t){if(oe){var e=nt;if(e){var n=e;if(!kp(t,e)){if($u(t))throw Error(b(418));e=Fn(n.nextSibling);var r=st;e&&kp(t,e)?Gy(r,n):(t.flags=t.flags&-4097|2,oe=!1,st=t)}}else{if($u(t))throw Error(b(418));t.flags=t.flags&-4097|2,oe=!1,st=t}}}function xp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;st=t}function Bo(t){if(t!==st)return!1;if(!oe)return xp(t),oe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Lu(t.type,t.memoizedProps)),e&&(e=nt)){if($u(t))throw qy(),Error(b(418));for(;e;)Gy(t,e),e=Fn(e.nextSibling)}if(xp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(b(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){nt=Fn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}nt=null}}else nt=st?Fn(t.stateNode.nextSibling):null;return!0}function qy(){for(var t=nt;t;)t=Fn(t.nextSibling)}function ks(){nt=st=null,oe=!1}function sh(t){wt===null?wt=[t]:wt.push(t)}var IE=mn.ReactCurrentBatchConfig;function ei(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(b(309));var r=n.stateNode}if(!r)throw Error(b(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var a=s.refs;o===null?delete a[i]:a[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(b(284));if(!n._owner)throw Error(b(290,t))}return t}function Vo(t,e){throw t=Object.prototype.toString.call(e),Error(b(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Ep(t){var e=t._init;return e(t._payload)}function Qy(t){function e(v,p){if(t){var g=v.deletions;g===null?(v.deletions=[p],v.flags|=16):g.push(p)}}function n(v,p){if(!t)return null;for(;p!==null;)e(v,p),p=p.sibling;return null}function r(v,p){for(v=new Map;p!==null;)p.key!==null?v.set(p.key,p):v.set(p.index,p),p=p.sibling;return v}function s(v,p){return v=Wn(v,p),v.index=0,v.sibling=null,v}function i(v,p,g){return v.index=g,t?(g=v.alternate,g!==null?(g=g.index,g<p?(v.flags|=2,p):g):(v.flags|=2,p)):(v.flags|=1048576,p)}function o(v){return t&&v.alternate===null&&(v.flags|=2),v}function a(v,p,g,x){return p===null||p.tag!==6?(p=Fc(g,v.mode,x),p.return=v,p):(p=s(p,g),p.return=v,p)}function l(v,p,g,x){var S=g.type;return S===qr?u(v,p,g.props.children,x,g.key):p!==null&&(p.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===wn&&Ep(S)===p.type)?(x=s(p,g.props),x.ref=ei(v,p,g),x.return=v,x):(x=fa(g.type,g.key,g.props,null,v.mode,x),x.ref=ei(v,p,g),x.return=v,x)}function c(v,p,g,x){return p===null||p.tag!==4||p.stateNode.containerInfo!==g.containerInfo||p.stateNode.implementation!==g.implementation?(p=Uc(g,v.mode,x),p.return=v,p):(p=s(p,g.children||[]),p.return=v,p)}function u(v,p,g,x,S){return p===null||p.tag!==7?(p=yr(g,v.mode,x,S),p.return=v,p):(p=s(p,g),p.return=v,p)}function d(v,p,g){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Fc(""+p,v.mode,g),p.return=v,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Oo:return g=fa(p.type,p.key,p.props,null,v.mode,g),g.ref=ei(v,null,p),g.return=v,g;case Gr:return p=Uc(p,v.mode,g),p.return=v,p;case wn:var x=p._init;return d(v,x(p._payload),g)}if(ci(p)||Qs(p))return p=yr(p,v.mode,g,null),p.return=v,p;Vo(v,p)}return null}function f(v,p,g,x){var S=p!==null?p.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return S!==null?null:a(v,p,""+g,x);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Oo:return g.key===S?l(v,p,g,x):null;case Gr:return g.key===S?c(v,p,g,x):null;case wn:return S=g._init,f(v,p,S(g._payload),x)}if(ci(g)||Qs(g))return S!==null?null:u(v,p,g,x,null);Vo(v,g)}return null}function m(v,p,g,x,S){if(typeof x=="string"&&x!==""||typeof x=="number")return v=v.get(g)||null,a(p,v,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Oo:return v=v.get(x.key===null?g:x.key)||null,l(p,v,x,S);case Gr:return v=v.get(x.key===null?g:x.key)||null,c(p,v,x,S);case wn:var E=x._init;return m(v,p,g,E(x._payload),S)}if(ci(x)||Qs(x))return v=v.get(g)||null,u(p,v,x,S,null);Vo(p,x)}return null}function y(v,p,g,x){for(var S=null,E=null,C=p,R=p=0,j=null;C!==null&&R<g.length;R++){C.index>R?(j=C,C=null):j=C.sibling;var O=f(v,C,g[R],x);if(O===null){C===null&&(C=j);break}t&&C&&O.alternate===null&&e(v,C),p=i(O,p,R),E===null?S=O:E.sibling=O,E=O,C=j}if(R===g.length)return n(v,C),oe&&ar(v,R),S;if(C===null){for(;R<g.length;R++)C=d(v,g[R],x),C!==null&&(p=i(C,p,R),E===null?S=C:E.sibling=C,E=C);return oe&&ar(v,R),S}for(C=r(v,C);R<g.length;R++)j=m(C,v,R,g[R],x),j!==null&&(t&&j.alternate!==null&&C.delete(j.key===null?R:j.key),p=i(j,p,R),E===null?S=j:E.sibling=j,E=j);return t&&C.forEach(function(Q){return e(v,Q)}),oe&&ar(v,R),S}function _(v,p,g,x){var S=Qs(g);if(typeof S!="function")throw Error(b(150));if(g=S.call(g),g==null)throw Error(b(151));for(var E=S=null,C=p,R=p=0,j=null,O=g.next();C!==null&&!O.done;R++,O=g.next()){C.index>R?(j=C,C=null):j=C.sibling;var Q=f(v,C,O.value,x);if(Q===null){C===null&&(C=j);break}t&&C&&Q.alternate===null&&e(v,C),p=i(Q,p,R),E===null?S=Q:E.sibling=Q,E=Q,C=j}if(O.done)return n(v,C),oe&&ar(v,R),S;if(C===null){for(;!O.done;R++,O=g.next())O=d(v,O.value,x),O!==null&&(p=i(O,p,R),E===null?S=O:E.sibling=O,E=O);return oe&&ar(v,R),S}for(C=r(v,C);!O.done;R++,O=g.next())O=m(C,v,R,O.value,x),O!==null&&(t&&O.alternate!==null&&C.delete(O.key===null?R:O.key),p=i(O,p,R),E===null?S=O:E.sibling=O,E=O);return t&&C.forEach(function(T){return e(v,T)}),oe&&ar(v,R),S}function k(v,p,g,x){if(typeof g=="object"&&g!==null&&g.type===qr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Oo:e:{for(var S=g.key,E=p;E!==null;){if(E.key===S){if(S=g.type,S===qr){if(E.tag===7){n(v,E.sibling),p=s(E,g.props.children),p.return=v,v=p;break e}}else if(E.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===wn&&Ep(S)===E.type){n(v,E.sibling),p=s(E,g.props),p.ref=ei(v,E,g),p.return=v,v=p;break e}n(v,E);break}else e(v,E);E=E.sibling}g.type===qr?(p=yr(g.props.children,v.mode,x,g.key),p.return=v,v=p):(x=fa(g.type,g.key,g.props,null,v.mode,x),x.ref=ei(v,p,g),x.return=v,v=x)}return o(v);case Gr:e:{for(E=g.key;p!==null;){if(p.key===E)if(p.tag===4&&p.stateNode.containerInfo===g.containerInfo&&p.stateNode.implementation===g.implementation){n(v,p.sibling),p=s(p,g.children||[]),p.return=v,v=p;break e}else{n(v,p);break}else e(v,p);p=p.sibling}p=Uc(g,v.mode,x),p.return=v,v=p}return o(v);case wn:return E=g._init,k(v,p,E(g._payload),x)}if(ci(g))return y(v,p,g,x);if(Qs(g))return _(v,p,g,x);Vo(v,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,p!==null&&p.tag===6?(n(v,p.sibling),p=s(p,g),p.return=v,v=p):(n(v,p),p=Fc(g,v.mode,x),p.return=v,v=p),o(v)):n(v,p)}return k}var xs=Qy(!0),Yy=Qy(!1),Oa=tr(null),Da=null,ns=null,ih=null;function oh(){ih=ns=Da=null}function ah(t){var e=Oa.current;ie(Oa),t._currentValue=e}function Wu(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function hs(t,e){Da=t,ih=ns=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Qe=!0),t.firstContext=null)}function pt(t){var e=t._currentValue;if(ih!==t)if(t={context:t,memoizedValue:e,next:null},ns===null){if(Da===null)throw Error(b(308));ns=t,Da.dependencies={lanes:0,firstContext:t}}else ns=ns.next=t;return e}var hr=null;function lh(t){hr===null?hr=[t]:hr.push(t)}function Xy(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,lh(e)):(n.next=s.next,s.next=n),e.interleaved=n,cn(t,r)}function cn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var kn=!1;function ch(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Jy(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function nn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Un(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,K&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,cn(t,n)}return s=r.interleaved,s===null?(e.next=e,lh(r)):(e.next=s.next,s.next=e),r.interleaved=e,cn(t,n)}function aa(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,qd(t,n)}}function Sp(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ma(t,e,n,r){var s=t.updateQueue;kn=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,a=s.shared.pending;if(a!==null){s.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?i=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(i!==null){var d=s.baseState;o=0,u=c=l=null,a=i;do{var f=a.lane,m=a.eventTime;if((r&f)===f){u!==null&&(u=u.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var y=t,_=a;switch(f=e,m=n,_.tag){case 1:if(y=_.payload,typeof y=="function"){d=y.call(m,d,f);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=_.payload,f=typeof y=="function"?y.call(m,d,f):y,f==null)break e;d=he({},d,f);break e;case 2:kn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=s.effects,f===null?s.effects=[a]:f.push(a))}else m={eventTime:m,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=m,l=d):u=u.next=m,o|=f;if(a=a.next,a===null){if(a=s.shared.pending,a===null)break;f=a,a=f.next,f.next=null,s.lastBaseUpdate=f,s.shared.pending=null}}while(!0);if(u===null&&(l=d),s.baseState=l,s.firstBaseUpdate=c,s.lastBaseUpdate=u,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);Er|=o,t.lanes=o,t.memoizedState=d}}function Cp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(b(191,s));s.call(r)}}}var go={},$t=tr(go),Bi=tr(go),Vi=tr(go);function fr(t){if(t===go)throw Error(b(174));return t}function uh(t,e){switch(ne(Vi,e),ne(Bi,t),ne($t,go),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:xu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=xu(e,t)}ie($t),ne($t,e)}function Es(){ie($t),ie(Bi),ie(Vi)}function Zy(t){fr(Vi.current);var e=fr($t.current),n=xu(e,t.type);e!==n&&(ne(Bi,t),ne($t,n))}function dh(t){Bi.current===t&&(ie($t),ie(Bi))}var le=tr(0);function La(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ac=[];function hh(){for(var t=0;t<Ac.length;t++)Ac[t]._workInProgressVersionPrimary=null;Ac.length=0}var la=mn.ReactCurrentDispatcher,Oc=mn.ReactCurrentBatchConfig,xr=0,de=null,_e=null,be=null,ja=!1,wi=!1,Hi=0,NE=0;function De(){throw Error(b(321))}function fh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!It(t[n],e[n]))return!1;return!0}function ph(t,e,n,r,s,i){if(xr=i,de=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,la.current=t===null||t.memoizedState===null?AE:OE,t=n(r,s),wi){i=0;do{if(wi=!1,Hi=0,25<=i)throw Error(b(301));i+=1,be=_e=null,e.updateQueue=null,la.current=DE,t=n(r,s)}while(wi)}if(la.current=Fa,e=_e!==null&&_e.next!==null,xr=0,be=_e=de=null,ja=!1,e)throw Error(b(300));return t}function mh(){var t=Hi!==0;return Hi=0,t}function Dt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return be===null?de.memoizedState=be=t:be=be.next=t,be}function mt(){if(_e===null){var t=de.alternate;t=t!==null?t.memoizedState:null}else t=_e.next;var e=be===null?de.memoizedState:be.next;if(e!==null)be=e,_e=t;else{if(t===null)throw Error(b(310));_e=t,t={memoizedState:_e.memoizedState,baseState:_e.baseState,baseQueue:_e.baseQueue,queue:_e.queue,next:null},be===null?de.memoizedState=be=t:be=be.next=t}return be}function Ki(t,e){return typeof e=="function"?e(t):e}function Dc(t){var e=mt(),n=e.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=t;var r=_e,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var a=o=null,l=null,c=i;do{var u=c.lane;if((xr&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,de.lanes|=u,Er|=u}c=c.next}while(c!==null&&c!==i);l===null?o=r:l.next=a,It(r,e.memoizedState)||(Qe=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,de.lanes|=i,Er|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Mc(t){var e=mt(),n=e.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);It(i,e.memoizedState)||(Qe=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function ev(){}function tv(t,e){var n=de,r=mt(),s=e(),i=!It(r.memoizedState,s);if(i&&(r.memoizedState=s,Qe=!0),r=r.queue,gh(sv.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||be!==null&&be.memoizedState.tag&1){if(n.flags|=2048,Gi(9,rv.bind(null,n,r,s,e),void 0,null),Te===null)throw Error(b(349));xr&30||nv(n,e,s)}return s}function nv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=de.updateQueue,e===null?(e={lastEffect:null,stores:null},de.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function rv(t,e,n,r){e.value=n,e.getSnapshot=r,iv(e)&&ov(t)}function sv(t,e,n){return n(function(){iv(e)&&ov(t)})}function iv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!It(t,n)}catch{return!0}}function ov(t){var e=cn(t,1);e!==null&&Ct(e,t,1,-1)}function bp(t){var e=Dt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:t},e.queue=t,t=t.dispatch=PE.bind(null,de,t),[e.memoizedState,t]}function Gi(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=de.updateQueue,e===null?(e={lastEffect:null,stores:null},de.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function av(){return mt().memoizedState}function ca(t,e,n,r){var s=Dt();de.flags|=t,s.memoizedState=Gi(1|e,n,void 0,r===void 0?null:r)}function Nl(t,e,n,r){var s=mt();r=r===void 0?null:r;var i=void 0;if(_e!==null){var o=_e.memoizedState;if(i=o.destroy,r!==null&&fh(r,o.deps)){s.memoizedState=Gi(e,n,i,r);return}}de.flags|=t,s.memoizedState=Gi(1|e,n,i,r)}function Ip(t,e){return ca(8390656,8,t,e)}function gh(t,e){return Nl(2048,8,t,e)}function lv(t,e){return Nl(4,2,t,e)}function cv(t,e){return Nl(4,4,t,e)}function uv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function dv(t,e,n){return n=n!=null?n.concat([t]):null,Nl(4,4,uv.bind(null,e,t),n)}function yh(){}function hv(t,e){var n=mt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&fh(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function fv(t,e){var n=mt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&fh(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function pv(t,e,n){return xr&21?(It(n,e)||(n=_y(),de.lanes|=n,Er|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Qe=!0),t.memoizedState=n)}function TE(t,e){var n=Y;Y=n!==0&&4>n?n:4,t(!0);var r=Oc.transition;Oc.transition={};try{t(!1),e()}finally{Y=n,Oc.transition=r}}function mv(){return mt().memoizedState}function RE(t,e,n){var r=zn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},gv(t))yv(e,n);else if(n=Xy(t,e,n,r),n!==null){var s=Be();Ct(n,t,r,s),vv(n,e,r)}}function PE(t,e,n){var r=zn(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(gv(t))yv(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,a=i(o,n);if(s.hasEagerState=!0,s.eagerState=a,It(a,o)){var l=e.interleaved;l===null?(s.next=s,lh(e)):(s.next=l.next,l.next=s),e.interleaved=s;return}}catch{}finally{}n=Xy(t,e,s,r),n!==null&&(s=Be(),Ct(n,t,r,s),vv(n,e,r))}}function gv(t){var e=t.alternate;return t===de||e!==null&&e===de}function yv(t,e){wi=ja=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function vv(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,qd(t,n)}}var Fa={readContext:pt,useCallback:De,useContext:De,useEffect:De,useImperativeHandle:De,useInsertionEffect:De,useLayoutEffect:De,useMemo:De,useReducer:De,useRef:De,useState:De,useDebugValue:De,useDeferredValue:De,useTransition:De,useMutableSource:De,useSyncExternalStore:De,useId:De,unstable_isNewReconciler:!1},AE={readContext:pt,useCallback:function(t,e){return Dt().memoizedState=[t,e===void 0?null:e],t},useContext:pt,useEffect:Ip,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ca(4194308,4,uv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ca(4194308,4,t,e)},useInsertionEffect:function(t,e){return ca(4,2,t,e)},useMemo:function(t,e){var n=Dt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Dt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=RE.bind(null,de,t),[r.memoizedState,t]},useRef:function(t){var e=Dt();return t={current:t},e.memoizedState=t},useState:bp,useDebugValue:yh,useDeferredValue:function(t){return Dt().memoizedState=t},useTransition:function(){var t=bp(!1),e=t[0];return t=TE.bind(null,t[1]),Dt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=de,s=Dt();if(oe){if(n===void 0)throw Error(b(407));n=n()}else{if(n=e(),Te===null)throw Error(b(349));xr&30||nv(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,Ip(sv.bind(null,r,i,t),[t]),r.flags|=2048,Gi(9,rv.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=Dt(),e=Te.identifierPrefix;if(oe){var n=Xt,r=Yt;n=(r&~(1<<32-St(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Hi++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=NE++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},OE={readContext:pt,useCallback:hv,useContext:pt,useEffect:gh,useImperativeHandle:dv,useInsertionEffect:lv,useLayoutEffect:cv,useMemo:fv,useReducer:Dc,useRef:av,useState:function(){return Dc(Ki)},useDebugValue:yh,useDeferredValue:function(t){var e=mt();return pv(e,_e.memoizedState,t)},useTransition:function(){var t=Dc(Ki)[0],e=mt().memoizedState;return[t,e]},useMutableSource:ev,useSyncExternalStore:tv,useId:mv,unstable_isNewReconciler:!1},DE={readContext:pt,useCallback:hv,useContext:pt,useEffect:gh,useImperativeHandle:dv,useInsertionEffect:lv,useLayoutEffect:cv,useMemo:fv,useReducer:Mc,useRef:av,useState:function(){return Mc(Ki)},useDebugValue:yh,useDeferredValue:function(t){var e=mt();return _e===null?e.memoizedState=t:pv(e,_e.memoizedState,t)},useTransition:function(){var t=Mc(Ki)[0],e=mt().memoizedState;return[t,e]},useMutableSource:ev,useSyncExternalStore:tv,useId:mv,unstable_isNewReconciler:!1};function vt(t,e){if(t&&t.defaultProps){e=he({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Bu(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:he({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Tl={isMounted:function(t){return(t=t._reactInternals)?Lr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Be(),s=zn(t),i=nn(r,s);i.payload=e,n!=null&&(i.callback=n),e=Un(t,i,s),e!==null&&(Ct(e,t,s,r),aa(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Be(),s=zn(t),i=nn(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=Un(t,i,s),e!==null&&(Ct(e,t,s,r),aa(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Be(),r=zn(t),s=nn(n,r);s.tag=2,e!=null&&(s.callback=e),e=Un(t,s,r),e!==null&&(Ct(e,t,r,n),aa(e,t,r))}};function Np(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!Ui(n,r)||!Ui(s,i):!0}function _v(t,e,n){var r=!1,s=Gn,i=e.contextType;return typeof i=="object"&&i!==null?i=pt(i):(s=Je(e)?wr:Fe.current,r=e.contextTypes,i=(r=r!=null)?ws(t,s):Gn),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Tl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function Tp(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Tl.enqueueReplaceState(e,e.state,null)}function Vu(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},ch(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=pt(i):(i=Je(e)?wr:Fe.current,s.context=ws(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(Bu(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&Tl.enqueueReplaceState(s,s.state,null),Ma(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function Ss(t,e){try{var n="",r=e;do n+=lx(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function Lc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Hu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var ME=typeof WeakMap=="function"?WeakMap:Map;function wv(t,e,n){n=nn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){$a||($a=!0,td=r),Hu(t,e)},n}function kv(t,e,n){n=nn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){Hu(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Hu(t,e),typeof r!="function"&&($n===null?$n=new Set([this]):$n.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Rp(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new ME;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=QE.bind(null,t,e,n),e.then(t,t))}function Pp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Ap(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=nn(-1,1),e.tag=2,Un(n,e,1))),n.lanes|=1),t)}var LE=mn.ReactCurrentOwner,Qe=!1;function ze(t,e,n,r){e.child=t===null?Yy(e,null,n,r):xs(e,t.child,n,r)}function Op(t,e,n,r,s){n=n.render;var i=e.ref;return hs(e,s),r=ph(t,e,n,r,i,s),n=mh(),t!==null&&!Qe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,un(t,e,s)):(oe&&n&&nh(e),e.flags|=1,ze(t,e,r,s),e.child)}function Dp(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!Ch(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,xv(t,e,i,r,s)):(t=fa(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Ui,n(o,r)&&t.ref===e.ref)return un(t,e,s)}return e.flags|=1,t=Wn(i,r),t.ref=e.ref,t.return=e,e.child=t}function xv(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(Ui(i,r)&&t.ref===e.ref)if(Qe=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(Qe=!0);else return e.lanes=t.lanes,un(t,e,s)}return Ku(t,e,n,r,s)}function Ev(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ne(ss,tt),tt|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ne(ss,tt),tt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,ne(ss,tt),tt|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,ne(ss,tt),tt|=r;return ze(t,e,s,n),e.child}function Sv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ku(t,e,n,r,s){var i=Je(n)?wr:Fe.current;return i=ws(e,i),hs(e,s),n=ph(t,e,n,r,i,s),r=mh(),t!==null&&!Qe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,un(t,e,s)):(oe&&r&&nh(e),e.flags|=1,ze(t,e,n,s),e.child)}function Mp(t,e,n,r,s){if(Je(n)){var i=!0;Ra(e)}else i=!1;if(hs(e,s),e.stateNode===null)ua(t,e),_v(e,n,r),Vu(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=pt(c):(c=Je(n)?wr:Fe.current,c=ws(e,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==c)&&Tp(e,o,r,c),kn=!1;var f=e.memoizedState;o.state=f,Ma(e,r,o,s),l=e.memoizedState,a!==r||f!==l||Xe.current||kn?(typeof u=="function"&&(Bu(e,n,u,r),l=e.memoizedState),(a=kn||Np(e,n,a,r,f,l,c))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Jy(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:vt(e.type,a),o.props=c,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=pt(l):(l=Je(n)?wr:Fe.current,l=ws(e,l));var m=n.getDerivedStateFromProps;(u=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&Tp(e,o,r,l),kn=!1,f=e.memoizedState,o.state=f,Ma(e,r,o,s);var y=e.memoizedState;a!==d||f!==y||Xe.current||kn?(typeof m=="function"&&(Bu(e,n,m,r),y=e.memoizedState),(c=kn||Np(e,n,c,r,f,y,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return Gu(t,e,n,r,i,s)}function Gu(t,e,n,r,s,i){Sv(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&wp(e,n,!1),un(t,e,i);r=e.stateNode,LE.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=xs(e,t.child,null,i),e.child=xs(e,null,a,i)):ze(t,e,a,i),e.memoizedState=r.state,s&&wp(e,n,!0),e.child}function Cv(t){var e=t.stateNode;e.pendingContext?_p(t,e.pendingContext,e.pendingContext!==e.context):e.context&&_p(t,e.context,!1),uh(t,e.containerInfo)}function Lp(t,e,n,r,s){return ks(),sh(s),e.flags|=256,ze(t,e,n,r),e.child}var qu={dehydrated:null,treeContext:null,retryLane:0};function Qu(t){return{baseLanes:t,cachePool:null,transitions:null}}function bv(t,e,n){var r=e.pendingProps,s=le.current,i=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(s&2)!==0),a?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),ne(le,s&1),t===null)return zu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Al(o,r,0,null),t=yr(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=Qu(n),e.memoizedState=qu,t):vh(e,o));if(s=t.memoizedState,s!==null&&(a=s.dehydrated,a!==null))return jE(t,e,o,r,a,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,a=s.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Wn(s,l),r.subtreeFlags=s.subtreeFlags&14680064),a!==null?i=Wn(a,i):(i=yr(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?Qu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=qu,r}return i=t.child,t=i.sibling,r=Wn(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function vh(t,e){return e=Al({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ho(t,e,n,r){return r!==null&&sh(r),xs(e,t.child,null,n),t=vh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function jE(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=Lc(Error(b(422))),Ho(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=Al({mode:"visible",children:r.children},s,0,null),i=yr(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&xs(e,t.child,null,o),e.child.memoizedState=Qu(o),e.memoizedState=qu,i);if(!(e.mode&1))return Ho(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(b(419)),r=Lc(i,r,void 0),Ho(t,e,o,r)}if(a=(o&t.childLanes)!==0,Qe||a){if(r=Te,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,cn(t,s),Ct(r,t,s,-1))}return Sh(),r=Lc(Error(b(421))),Ho(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=YE.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,nt=Fn(s.nextSibling),st=e,oe=!0,wt=null,t!==null&&(ct[ut++]=Yt,ct[ut++]=Xt,ct[ut++]=kr,Yt=t.id,Xt=t.overflow,kr=e),e=vh(e,r.children),e.flags|=4096,e)}function jp(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Wu(t.return,e,n)}function jc(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function Iv(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(ze(t,e,r.children,n),r=le.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&jp(t,n,e);else if(t.tag===19)jp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ne(le,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&La(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),jc(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&La(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}jc(e,!0,n,null,i);break;case"together":jc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ua(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function un(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Er|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(b(153));if(e.child!==null){for(t=e.child,n=Wn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Wn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function FE(t,e,n){switch(e.tag){case 3:Cv(e),ks();break;case 5:Zy(e);break;case 1:Je(e.type)&&Ra(e);break;case 4:uh(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;ne(Oa,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ne(le,le.current&1),e.flags|=128,null):n&e.child.childLanes?bv(t,e,n):(ne(le,le.current&1),t=un(t,e,n),t!==null?t.sibling:null);ne(le,le.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Iv(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),ne(le,le.current),r)break;return null;case 22:case 23:return e.lanes=0,Ev(t,e,n)}return un(t,e,n)}var Nv,Yu,Tv,Rv;Nv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Yu=function(){};Tv=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,fr($t.current);var i=null;switch(n){case"input":s=vu(t,s),r=vu(t,r),i=[];break;case"select":s=he({},s,{value:void 0}),r=he({},r,{value:void 0}),i=[];break;case"textarea":s=ku(t,s),r=ku(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Na)}Eu(n,r);var o;n=null;for(c in s)if(!r.hasOwnProperty(c)&&s.hasOwnProperty(c)&&s[c]!=null)if(c==="style"){var a=s[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ai.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var l=r[c];if(a=s!=null?s[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(i||(i=[]),i.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(i=i||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(i=i||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ai.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&se("scroll",t),i||a===l||(i=[])):(i=i||[]).push(c,l))}n&&(i=i||[]).push("style",n);var c=i;(e.updateQueue=c)&&(e.flags|=4)}};Rv=function(t,e,n,r){n!==r&&(e.flags|=4)};function ti(t,e){if(!oe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Me(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function UE(t,e,n){var r=e.pendingProps;switch(rh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Me(e),null;case 1:return Je(e.type)&&Ta(),Me(e),null;case 3:return r=e.stateNode,Es(),ie(Xe),ie(Fe),hh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Bo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,wt!==null&&(sd(wt),wt=null))),Yu(t,e),Me(e),null;case 5:dh(e);var s=fr(Vi.current);if(n=e.type,t!==null&&e.stateNode!=null)Tv(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(b(166));return Me(e),null}if(t=fr($t.current),Bo(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[Mt]=e,r[Wi]=i,t=(e.mode&1)!==0,n){case"dialog":se("cancel",r),se("close",r);break;case"iframe":case"object":case"embed":se("load",r);break;case"video":case"audio":for(s=0;s<di.length;s++)se(di[s],r);break;case"source":se("error",r);break;case"img":case"image":case"link":se("error",r),se("load",r);break;case"details":se("toggle",r);break;case"input":Kf(r,i),se("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},se("invalid",r);break;case"textarea":qf(r,i),se("invalid",r)}Eu(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var a=i[o];o==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&Wo(r.textContent,a,t),s=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&Wo(r.textContent,a,t),s=["children",""+a]):Ai.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&se("scroll",r)}switch(n){case"input":Do(r),Gf(r,i,!0);break;case"textarea":Do(r),Qf(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Na)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=sy(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Mt]=e,t[Wi]=r,Nv(t,e,!1,!1),e.stateNode=t;e:{switch(o=Su(n,r),n){case"dialog":se("cancel",t),se("close",t),s=r;break;case"iframe":case"object":case"embed":se("load",t),s=r;break;case"video":case"audio":for(s=0;s<di.length;s++)se(di[s],t);s=r;break;case"source":se("error",t),s=r;break;case"img":case"image":case"link":se("error",t),se("load",t),s=r;break;case"details":se("toggle",t),s=r;break;case"input":Kf(t,r),s=vu(t,r),se("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=he({},r,{value:void 0}),se("invalid",t);break;case"textarea":qf(t,r),s=ku(t,r),se("invalid",t);break;default:s=r}Eu(n,s),a=s;for(i in a)if(a.hasOwnProperty(i)){var l=a[i];i==="style"?ay(t,l):i==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&iy(t,l)):i==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Oi(t,l):typeof l=="number"&&Oi(t,""+l):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Ai.hasOwnProperty(i)?l!=null&&i==="onScroll"&&se("scroll",t):l!=null&&Wd(t,i,l,o))}switch(n){case"input":Do(t),Gf(t,r,!1);break;case"textarea":Do(t),Qf(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Kn(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?ls(t,!!r.multiple,i,!1):r.defaultValue!=null&&ls(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=Na)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Me(e),null;case 6:if(t&&e.stateNode!=null)Rv(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(b(166));if(n=fr(Vi.current),fr($t.current),Bo(e)){if(r=e.stateNode,n=e.memoizedProps,r[Mt]=e,(i=r.nodeValue!==n)&&(t=st,t!==null))switch(t.tag){case 3:Wo(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Wo(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Mt]=e,e.stateNode=r}return Me(e),null;case 13:if(ie(le),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(oe&&nt!==null&&e.mode&1&&!(e.flags&128))qy(),ks(),e.flags|=98560,i=!1;else if(i=Bo(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(b(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(b(317));i[Mt]=e}else ks(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Me(e),i=!1}else wt!==null&&(sd(wt),wt=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||le.current&1?xe===0&&(xe=3):Sh())),e.updateQueue!==null&&(e.flags|=4),Me(e),null);case 4:return Es(),Yu(t,e),t===null&&$i(e.stateNode.containerInfo),Me(e),null;case 10:return ah(e.type._context),Me(e),null;case 17:return Je(e.type)&&Ta(),Me(e),null;case 19:if(ie(le),i=e.memoizedState,i===null)return Me(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)ti(i,!1);else{if(xe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=La(t),o!==null){for(e.flags|=128,ti(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ne(le,le.current&1|2),e.child}t=t.sibling}i.tail!==null&&ye()>Cs&&(e.flags|=128,r=!0,ti(i,!1),e.lanes=4194304)}else{if(!r)if(t=La(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ti(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!oe)return Me(e),null}else 2*ye()-i.renderingStartTime>Cs&&n!==1073741824&&(e.flags|=128,r=!0,ti(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=ye(),e.sibling=null,n=le.current,ne(le,r?n&1|2:n&1),e):(Me(e),null);case 22:case 23:return Eh(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?tt&1073741824&&(Me(e),e.subtreeFlags&6&&(e.flags|=8192)):Me(e),null;case 24:return null;case 25:return null}throw Error(b(156,e.tag))}function $E(t,e){switch(rh(e),e.tag){case 1:return Je(e.type)&&Ta(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Es(),ie(Xe),ie(Fe),hh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return dh(e),null;case 13:if(ie(le),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(b(340));ks()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ie(le),null;case 4:return Es(),null;case 10:return ah(e.type._context),null;case 22:case 23:return Eh(),null;case 24:return null;default:return null}}var Ko=!1,Le=!1,zE=typeof WeakSet=="function"?WeakSet:Set,P=null;function rs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){fe(t,e,r)}else n.current=null}function Xu(t,e,n){try{n()}catch(r){fe(t,e,r)}}var Fp=!1;function WE(t,e){if(Du=Ca,t=My(),th(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,d=t,f=null;t:for(;;){for(var m;d!==n||s!==0&&d.nodeType!==3||(a=o+s),d!==i||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(m=d.firstChild)!==null;)f=d,d=m;for(;;){if(d===t)break t;if(f===n&&++c===s&&(a=o),f===i&&++u===r&&(l=o),(m=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Mu={focusedElem:t,selectionRange:n},Ca=!1,P=e;P!==null;)if(e=P,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,P=t;else for(;P!==null;){e=P;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var _=y.memoizedProps,k=y.memoizedState,v=e.stateNode,p=v.getSnapshotBeforeUpdate(e.elementType===e.type?_:vt(e.type,_),k);v.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(b(163))}}catch(x){fe(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,P=t;break}P=e.return}return y=Fp,Fp=!1,y}function ki(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&Xu(e,n,i)}s=s.next}while(s!==r)}}function Rl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Ju(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Pv(t){var e=t.alternate;e!==null&&(t.alternate=null,Pv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Mt],delete e[Wi],delete e[Fu],delete e[SE],delete e[CE])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Av(t){return t.tag===5||t.tag===3||t.tag===4}function Up(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Av(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Zu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Na));else if(r!==4&&(t=t.child,t!==null))for(Zu(t,e,n),t=t.sibling;t!==null;)Zu(t,e,n),t=t.sibling}function ed(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(ed(t,e,n),t=t.sibling;t!==null;)ed(t,e,n),t=t.sibling}var Pe=null,_t=!1;function vn(t,e,n){for(n=n.child;n!==null;)Ov(t,e,n),n=n.sibling}function Ov(t,e,n){if(Ut&&typeof Ut.onCommitFiberUnmount=="function")try{Ut.onCommitFiberUnmount(xl,n)}catch{}switch(n.tag){case 5:Le||rs(n,e);case 6:var r=Pe,s=_t;Pe=null,vn(t,e,n),Pe=r,_t=s,Pe!==null&&(_t?(t=Pe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Pe.removeChild(n.stateNode));break;case 18:Pe!==null&&(_t?(t=Pe,n=n.stateNode,t.nodeType===8?Rc(t.parentNode,n):t.nodeType===1&&Rc(t,n),ji(t)):Rc(Pe,n.stateNode));break;case 4:r=Pe,s=_t,Pe=n.stateNode.containerInfo,_t=!0,vn(t,e,n),Pe=r,_t=s;break;case 0:case 11:case 14:case 15:if(!Le&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Xu(n,e,o),s=s.next}while(s!==r)}vn(t,e,n);break;case 1:if(!Le&&(rs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){fe(n,e,a)}vn(t,e,n);break;case 21:vn(t,e,n);break;case 22:n.mode&1?(Le=(r=Le)||n.memoizedState!==null,vn(t,e,n),Le=r):vn(t,e,n);break;default:vn(t,e,n)}}function $p(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new zE),e.forEach(function(r){var s=XE.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function yt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Pe=a.stateNode,_t=!1;break e;case 3:Pe=a.stateNode.containerInfo,_t=!0;break e;case 4:Pe=a.stateNode.containerInfo,_t=!0;break e}a=a.return}if(Pe===null)throw Error(b(160));Ov(i,o,s),Pe=null,_t=!1;var l=s.alternate;l!==null&&(l.return=null),s.return=null}catch(c){fe(s,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Dv(e,t),e=e.sibling}function Dv(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(yt(e,t),At(t),r&4){try{ki(3,t,t.return),Rl(3,t)}catch(_){fe(t,t.return,_)}try{ki(5,t,t.return)}catch(_){fe(t,t.return,_)}}break;case 1:yt(e,t),At(t),r&512&&n!==null&&rs(n,n.return);break;case 5:if(yt(e,t),At(t),r&512&&n!==null&&rs(n,n.return),t.flags&32){var s=t.stateNode;try{Oi(s,"")}catch(_){fe(t,t.return,_)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&ny(s,i),Su(a,o);var c=Su(a,i);for(o=0;o<l.length;o+=2){var u=l[o],d=l[o+1];u==="style"?ay(s,d):u==="dangerouslySetInnerHTML"?iy(s,d):u==="children"?Oi(s,d):Wd(s,u,d,c)}switch(a){case"input":_u(s,i);break;case"textarea":ry(s,i);break;case"select":var f=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var m=i.value;m!=null?ls(s,!!i.multiple,m,!1):f!==!!i.multiple&&(i.defaultValue!=null?ls(s,!!i.multiple,i.defaultValue,!0):ls(s,!!i.multiple,i.multiple?[]:"",!1))}s[Wi]=i}catch(_){fe(t,t.return,_)}}break;case 6:if(yt(e,t),At(t),r&4){if(t.stateNode===null)throw Error(b(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(_){fe(t,t.return,_)}}break;case 3:if(yt(e,t),At(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ji(e.containerInfo)}catch(_){fe(t,t.return,_)}break;case 4:yt(e,t),At(t);break;case 13:yt(e,t),At(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(kh=ye())),r&4&&$p(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(Le=(c=Le)||u,yt(e,t),Le=c):yt(e,t),At(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(P=t,u=t.child;u!==null;){for(d=P=u;P!==null;){switch(f=P,m=f.child,f.tag){case 0:case 11:case 14:case 15:ki(4,f,f.return);break;case 1:rs(f,f.return);var y=f.stateNode;if(typeof y.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(_){fe(r,n,_)}}break;case 5:rs(f,f.return);break;case 22:if(f.memoizedState!==null){Wp(d);continue}}m!==null?(m.return=f,P=m):Wp(d)}u=u.sibling}e:for(u=null,d=t;;){if(d.tag===5){if(u===null){u=d;try{s=d.stateNode,c?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=oy("display",o))}catch(_){fe(t,t.return,_)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(_){fe(t,t.return,_)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:yt(e,t),At(t),r&4&&$p(t);break;case 21:break;default:yt(e,t),At(t)}}function At(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Av(n)){var r=n;break e}n=n.return}throw Error(b(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(Oi(s,""),r.flags&=-33);var i=Up(t);ed(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Up(t);Zu(t,a,o);break;default:throw Error(b(161))}}catch(l){fe(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function BE(t,e,n){P=t,Mv(t)}function Mv(t,e,n){for(var r=(t.mode&1)!==0;P!==null;){var s=P,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||Ko;if(!o){var a=s.alternate,l=a!==null&&a.memoizedState!==null||Le;a=Ko;var c=Le;if(Ko=o,(Le=l)&&!c)for(P=s;P!==null;)o=P,l=o.child,o.tag===22&&o.memoizedState!==null?Bp(s):l!==null?(l.return=o,P=l):Bp(s);for(;i!==null;)P=i,Mv(i),i=i.sibling;P=s,Ko=a,Le=c}zp(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,P=i):zp(t)}}function zp(t){for(;P!==null;){var e=P;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Le||Rl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Le)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:vt(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&Cp(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Cp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&ji(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(b(163))}Le||e.flags&512&&Ju(e)}catch(f){fe(e,e.return,f)}}if(e===t){P=null;break}if(n=e.sibling,n!==null){n.return=e.return,P=n;break}P=e.return}}function Wp(t){for(;P!==null;){var e=P;if(e===t){P=null;break}var n=e.sibling;if(n!==null){n.return=e.return,P=n;break}P=e.return}}function Bp(t){for(;P!==null;){var e=P;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Rl(4,e)}catch(l){fe(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(l){fe(e,s,l)}}var i=e.return;try{Ju(e)}catch(l){fe(e,i,l)}break;case 5:var o=e.return;try{Ju(e)}catch(l){fe(e,o,l)}}}catch(l){fe(e,e.return,l)}if(e===t){P=null;break}var a=e.sibling;if(a!==null){a.return=e.return,P=a;break}P=e.return}}var VE=Math.ceil,Ua=mn.ReactCurrentDispatcher,_h=mn.ReactCurrentOwner,ft=mn.ReactCurrentBatchConfig,K=0,Te=null,ve=null,Ae=0,tt=0,ss=tr(0),xe=0,qi=null,Er=0,Pl=0,wh=0,xi=null,qe=null,kh=0,Cs=1/0,Gt=null,$a=!1,td=null,$n=null,Go=!1,Pn=null,za=0,Ei=0,nd=null,da=-1,ha=0;function Be(){return K&6?ye():da!==-1?da:da=ye()}function zn(t){return t.mode&1?K&2&&Ae!==0?Ae&-Ae:IE.transition!==null?(ha===0&&(ha=_y()),ha):(t=Y,t!==0||(t=window.event,t=t===void 0?16:by(t.type)),t):1}function Ct(t,e,n,r){if(50<Ei)throw Ei=0,nd=null,Error(b(185));fo(t,n,r),(!(K&2)||t!==Te)&&(t===Te&&(!(K&2)&&(Pl|=n),xe===4&&En(t,Ae)),Ze(t,r),n===1&&K===0&&!(e.mode&1)&&(Cs=ye()+500,Il&&nr()))}function Ze(t,e){var n=t.callbackNode;Ix(t,e);var r=Sa(t,t===Te?Ae:0);if(r===0)n!==null&&Jf(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Jf(n),e===1)t.tag===0?bE(Vp.bind(null,t)):Hy(Vp.bind(null,t)),xE(function(){!(K&6)&&nr()}),n=null;else{switch(wy(r)){case 1:n=Gd;break;case 4:n=yy;break;case 16:n=Ea;break;case 536870912:n=vy;break;default:n=Ea}n=Bv(n,Lv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Lv(t,e){if(da=-1,ha=0,K&6)throw Error(b(327));var n=t.callbackNode;if(fs()&&t.callbackNode!==n)return null;var r=Sa(t,t===Te?Ae:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Wa(t,r);else{e=r;var s=K;K|=2;var i=Fv();(Te!==t||Ae!==e)&&(Gt=null,Cs=ye()+500,gr(t,e));do try{GE();break}catch(a){jv(t,a)}while(!0);oh(),Ua.current=i,K=s,ve!==null?e=0:(Te=null,Ae=0,e=xe)}if(e!==0){if(e===2&&(s=Tu(t),s!==0&&(r=s,e=rd(t,s))),e===1)throw n=qi,gr(t,0),En(t,r),Ze(t,ye()),n;if(e===6)En(t,r);else{if(s=t.current.alternate,!(r&30)&&!HE(s)&&(e=Wa(t,r),e===2&&(i=Tu(t),i!==0&&(r=i,e=rd(t,i))),e===1))throw n=qi,gr(t,0),En(t,r),Ze(t,ye()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(b(345));case 2:lr(t,qe,Gt);break;case 3:if(En(t,r),(r&130023424)===r&&(e=kh+500-ye(),10<e)){if(Sa(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){Be(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=ju(lr.bind(null,t,qe,Gt),e);break}lr(t,qe,Gt);break;case 4:if(En(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-St(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=ye()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*VE(r/1960))-r,10<r){t.timeoutHandle=ju(lr.bind(null,t,qe,Gt),r);break}lr(t,qe,Gt);break;case 5:lr(t,qe,Gt);break;default:throw Error(b(329))}}}return Ze(t,ye()),t.callbackNode===n?Lv.bind(null,t):null}function rd(t,e){var n=xi;return t.current.memoizedState.isDehydrated&&(gr(t,e).flags|=256),t=Wa(t,e),t!==2&&(e=qe,qe=n,e!==null&&sd(e)),t}function sd(t){qe===null?qe=t:qe.push.apply(qe,t)}function HE(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!It(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function En(t,e){for(e&=~wh,e&=~Pl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-St(e),r=1<<n;t[n]=-1,e&=~r}}function Vp(t){if(K&6)throw Error(b(327));fs();var e=Sa(t,0);if(!(e&1))return Ze(t,ye()),null;var n=Wa(t,e);if(t.tag!==0&&n===2){var r=Tu(t);r!==0&&(e=r,n=rd(t,r))}if(n===1)throw n=qi,gr(t,0),En(t,e),Ze(t,ye()),n;if(n===6)throw Error(b(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,lr(t,qe,Gt),Ze(t,ye()),null}function xh(t,e){var n=K;K|=1;try{return t(e)}finally{K=n,K===0&&(Cs=ye()+500,Il&&nr())}}function Sr(t){Pn!==null&&Pn.tag===0&&!(K&6)&&fs();var e=K;K|=1;var n=ft.transition,r=Y;try{if(ft.transition=null,Y=1,t)return t()}finally{Y=r,ft.transition=n,K=e,!(K&6)&&nr()}}function Eh(){tt=ss.current,ie(ss)}function gr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,kE(n)),ve!==null)for(n=ve.return;n!==null;){var r=n;switch(rh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ta();break;case 3:Es(),ie(Xe),ie(Fe),hh();break;case 5:dh(r);break;case 4:Es();break;case 13:ie(le);break;case 19:ie(le);break;case 10:ah(r.type._context);break;case 22:case 23:Eh()}n=n.return}if(Te=t,ve=t=Wn(t.current,null),Ae=tt=e,xe=0,qi=null,wh=Pl=Er=0,qe=xi=null,hr!==null){for(e=0;e<hr.length;e++)if(n=hr[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}hr=null}return t}function jv(t,e){do{var n=ve;try{if(oh(),la.current=Fa,ja){for(var r=de.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}ja=!1}if(xr=0,be=_e=de=null,wi=!1,Hi=0,_h.current=null,n===null||n.return===null){xe=1,qi=e,ve=null;break}e:{var i=t,o=n.return,a=n,l=e;if(e=Ae,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var m=Pp(o);if(m!==null){m.flags&=-257,Ap(m,o,a,i,e),m.mode&1&&Rp(i,c,e),e=m,l=c;var y=e.updateQueue;if(y===null){var _=new Set;_.add(l),e.updateQueue=_}else y.add(l);break e}else{if(!(e&1)){Rp(i,c,e),Sh();break e}l=Error(b(426))}}else if(oe&&a.mode&1){var k=Pp(o);if(k!==null){!(k.flags&65536)&&(k.flags|=256),Ap(k,o,a,i,e),sh(Ss(l,a));break e}}i=l=Ss(l,a),xe!==4&&(xe=2),xi===null?xi=[i]:xi.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var v=wv(i,l,e);Sp(i,v);break e;case 1:a=l;var p=i.type,g=i.stateNode;if(!(i.flags&128)&&(typeof p.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&($n===null||!$n.has(g)))){i.flags|=65536,e&=-e,i.lanes|=e;var x=kv(i,a,e);Sp(i,x);break e}}i=i.return}while(i!==null)}$v(n)}catch(S){e=S,ve===n&&n!==null&&(ve=n=n.return);continue}break}while(!0)}function Fv(){var t=Ua.current;return Ua.current=Fa,t===null?Fa:t}function Sh(){(xe===0||xe===3||xe===2)&&(xe=4),Te===null||!(Er&268435455)&&!(Pl&268435455)||En(Te,Ae)}function Wa(t,e){var n=K;K|=2;var r=Fv();(Te!==t||Ae!==e)&&(Gt=null,gr(t,e));do try{KE();break}catch(s){jv(t,s)}while(!0);if(oh(),K=n,Ua.current=r,ve!==null)throw Error(b(261));return Te=null,Ae=0,xe}function KE(){for(;ve!==null;)Uv(ve)}function GE(){for(;ve!==null&&!vx();)Uv(ve)}function Uv(t){var e=Wv(t.alternate,t,tt);t.memoizedProps=t.pendingProps,e===null?$v(t):ve=e,_h.current=null}function $v(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=$E(n,e),n!==null){n.flags&=32767,ve=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{xe=6,ve=null;return}}else if(n=UE(n,e,tt),n!==null){ve=n;return}if(e=e.sibling,e!==null){ve=e;return}ve=e=t}while(e!==null);xe===0&&(xe=5)}function lr(t,e,n){var r=Y,s=ft.transition;try{ft.transition=null,Y=1,qE(t,e,n,r)}finally{ft.transition=s,Y=r}return null}function qE(t,e,n,r){do fs();while(Pn!==null);if(K&6)throw Error(b(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(b(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(Nx(t,i),t===Te&&(ve=Te=null,Ae=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Go||(Go=!0,Bv(Ea,function(){return fs(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=ft.transition,ft.transition=null;var o=Y;Y=1;var a=K;K|=4,_h.current=null,WE(t,n),Dv(n,t),pE(Mu),Ca=!!Du,Mu=Du=null,t.current=n,BE(n),_x(),K=a,Y=o,ft.transition=i}else t.current=n;if(Go&&(Go=!1,Pn=t,za=s),i=t.pendingLanes,i===0&&($n=null),xx(n.stateNode),Ze(t,ye()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if($a)throw $a=!1,t=td,td=null,t;return za&1&&t.tag!==0&&fs(),i=t.pendingLanes,i&1?t===nd?Ei++:(Ei=0,nd=t):Ei=0,nr(),null}function fs(){if(Pn!==null){var t=wy(za),e=ft.transition,n=Y;try{if(ft.transition=null,Y=16>t?16:t,Pn===null)var r=!1;else{if(t=Pn,Pn=null,za=0,K&6)throw Error(b(331));var s=K;for(K|=4,P=t.current;P!==null;){var i=P,o=i.child;if(P.flags&16){var a=i.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(P=c;P!==null;){var u=P;switch(u.tag){case 0:case 11:case 15:ki(8,u,i)}var d=u.child;if(d!==null)d.return=u,P=d;else for(;P!==null;){u=P;var f=u.sibling,m=u.return;if(Pv(u),u===c){P=null;break}if(f!==null){f.return=m,P=f;break}P=m}}}var y=i.alternate;if(y!==null){var _=y.child;if(_!==null){y.child=null;do{var k=_.sibling;_.sibling=null,_=k}while(_!==null)}}P=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,P=o;else e:for(;P!==null;){if(i=P,i.flags&2048)switch(i.tag){case 0:case 11:case 15:ki(9,i,i.return)}var v=i.sibling;if(v!==null){v.return=i.return,P=v;break e}P=i.return}}var p=t.current;for(P=p;P!==null;){o=P;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,P=g;else e:for(o=p;P!==null;){if(a=P,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Rl(9,a)}}catch(S){fe(a,a.return,S)}if(a===o){P=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,P=x;break e}P=a.return}}if(K=s,nr(),Ut&&typeof Ut.onPostCommitFiberRoot=="function")try{Ut.onPostCommitFiberRoot(xl,t)}catch{}r=!0}return r}finally{Y=n,ft.transition=e}}return!1}function Hp(t,e,n){e=Ss(n,e),e=wv(t,e,1),t=Un(t,e,1),e=Be(),t!==null&&(fo(t,1,e),Ze(t,e))}function fe(t,e,n){if(t.tag===3)Hp(t,t,n);else for(;e!==null;){if(e.tag===3){Hp(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&($n===null||!$n.has(r))){t=Ss(n,t),t=kv(e,t,1),e=Un(e,t,1),t=Be(),e!==null&&(fo(e,1,t),Ze(e,t));break}}e=e.return}}function QE(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Be(),t.pingedLanes|=t.suspendedLanes&n,Te===t&&(Ae&n)===n&&(xe===4||xe===3&&(Ae&130023424)===Ae&&500>ye()-kh?gr(t,0):wh|=n),Ze(t,e)}function zv(t,e){e===0&&(t.mode&1?(e=jo,jo<<=1,!(jo&130023424)&&(jo=4194304)):e=1);var n=Be();t=cn(t,e),t!==null&&(fo(t,e,n),Ze(t,n))}function YE(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),zv(t,n)}function XE(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(b(314))}r!==null&&r.delete(e),zv(t,n)}var Wv;Wv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Xe.current)Qe=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Qe=!1,FE(t,e,n);Qe=!!(t.flags&131072)}else Qe=!1,oe&&e.flags&1048576&&Ky(e,Aa,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;ua(t,e),t=e.pendingProps;var s=ws(e,Fe.current);hs(e,n),s=ph(null,e,r,t,s,n);var i=mh();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Je(r)?(i=!0,Ra(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,ch(e),s.updater=Tl,e.stateNode=s,s._reactInternals=e,Vu(e,r,t,n),e=Gu(null,e,r,!0,i,n)):(e.tag=0,oe&&i&&nh(e),ze(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(ua(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=ZE(r),t=vt(r,t),s){case 0:e=Ku(null,e,r,t,n);break e;case 1:e=Mp(null,e,r,t,n);break e;case 11:e=Op(null,e,r,t,n);break e;case 14:e=Dp(null,e,r,vt(r.type,t),n);break e}throw Error(b(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:vt(r,s),Ku(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:vt(r,s),Mp(t,e,r,s,n);case 3:e:{if(Cv(e),t===null)throw Error(b(387));r=e.pendingProps,i=e.memoizedState,s=i.element,Jy(t,e),Ma(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=Ss(Error(b(423)),e),e=Lp(t,e,r,n,s);break e}else if(r!==s){s=Ss(Error(b(424)),e),e=Lp(t,e,r,n,s);break e}else for(nt=Fn(e.stateNode.containerInfo.firstChild),st=e,oe=!0,wt=null,n=Yy(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ks(),r===s){e=un(t,e,n);break e}ze(t,e,r,n)}e=e.child}return e;case 5:return Zy(e),t===null&&zu(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,Lu(r,s)?o=null:i!==null&&Lu(r,i)&&(e.flags|=32),Sv(t,e),ze(t,e,o,n),e.child;case 6:return t===null&&zu(e),null;case 13:return bv(t,e,n);case 4:return uh(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=xs(e,null,r,n):ze(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:vt(r,s),Op(t,e,r,s,n);case 7:return ze(t,e,e.pendingProps,n),e.child;case 8:return ze(t,e,e.pendingProps.children,n),e.child;case 12:return ze(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,ne(Oa,r._currentValue),r._currentValue=o,i!==null)if(It(i.value,o)){if(i.children===s.children&&!Xe.current){e=un(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var a=i.dependencies;if(a!==null){o=i.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(i.tag===1){l=nn(-1,n&-n),l.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}i.lanes|=n,l=i.alternate,l!==null&&(l.lanes|=n),Wu(i.return,n,e),a.lanes|=n;break}l=l.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(b(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Wu(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}ze(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,hs(e,n),s=pt(s),r=r(s),e.flags|=1,ze(t,e,r,n),e.child;case 14:return r=e.type,s=vt(r,e.pendingProps),s=vt(r.type,s),Dp(t,e,r,s,n);case 15:return xv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:vt(r,s),ua(t,e),e.tag=1,Je(r)?(t=!0,Ra(e)):t=!1,hs(e,n),_v(e,r,s),Vu(e,r,s,n),Gu(null,e,r,!0,t,n);case 19:return Iv(t,e,n);case 22:return Ev(t,e,n)}throw Error(b(156,e.tag))};function Bv(t,e){return gy(t,e)}function JE(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function dt(t,e,n,r){return new JE(t,e,n,r)}function Ch(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ZE(t){if(typeof t=="function")return Ch(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Vd)return 11;if(t===Hd)return 14}return 2}function Wn(t,e){var n=t.alternate;return n===null?(n=dt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function fa(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")Ch(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case qr:return yr(n.children,s,i,e);case Bd:o=8,s|=8;break;case pu:return t=dt(12,n,e,s|2),t.elementType=pu,t.lanes=i,t;case mu:return t=dt(13,n,e,s),t.elementType=mu,t.lanes=i,t;case gu:return t=dt(19,n,e,s),t.elementType=gu,t.lanes=i,t;case Zg:return Al(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Xg:o=10;break e;case Jg:o=9;break e;case Vd:o=11;break e;case Hd:o=14;break e;case wn:o=16,r=null;break e}throw Error(b(130,t==null?t:typeof t,""))}return e=dt(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function yr(t,e,n,r){return t=dt(7,t,r,e),t.lanes=n,t}function Al(t,e,n,r){return t=dt(22,t,r,e),t.elementType=Zg,t.lanes=n,t.stateNode={isHidden:!1},t}function Fc(t,e,n){return t=dt(6,t,null,e),t.lanes=n,t}function Uc(t,e,n){return e=dt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function eS(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_c(0),this.expirationTimes=_c(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_c(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function bh(t,e,n,r,s,i,o,a,l){return t=new eS(t,e,n,a,l),e===1?(e=1,i===!0&&(e|=8)):e=0,i=dt(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ch(i),t}function tS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Gr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Vv(t){if(!t)return Gn;t=t._reactInternals;e:{if(Lr(t)!==t||t.tag!==1)throw Error(b(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Je(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(b(171))}if(t.tag===1){var n=t.type;if(Je(n))return Vy(t,n,e)}return e}function Hv(t,e,n,r,s,i,o,a,l){return t=bh(n,r,!0,t,s,i,o,a,l),t.context=Vv(null),n=t.current,r=Be(),s=zn(n),i=nn(r,s),i.callback=e??null,Un(n,i,s),t.current.lanes=s,fo(t,s,r),Ze(t,r),t}function Ol(t,e,n,r){var s=e.current,i=Be(),o=zn(s);return n=Vv(n),e.context===null?e.context=n:e.pendingContext=n,e=nn(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Un(s,e,o),t!==null&&(Ct(t,s,o,i),aa(t,s,o)),o}function Ba(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Kp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ih(t,e){Kp(t,e),(t=t.alternate)&&Kp(t,e)}function nS(){return null}var Kv=typeof reportError=="function"?reportError:function(t){console.error(t)};function Nh(t){this._internalRoot=t}Dl.prototype.render=Nh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(b(409));Ol(t,e,null,null)};Dl.prototype.unmount=Nh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Sr(function(){Ol(null,t,null,null)}),e[ln]=null}};function Dl(t){this._internalRoot=t}Dl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Ey();t={blockedOn:null,target:t,priority:e};for(var n=0;n<xn.length&&e!==0&&e<xn[n].priority;n++);xn.splice(n,0,t),n===0&&Cy(t)}};function Th(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ml(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Gp(){}function rS(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var c=Ba(o);i.call(c)}}var o=Hv(e,r,t,0,null,!1,!1,"",Gp);return t._reactRootContainer=o,t[ln]=o.current,$i(t.nodeType===8?t.parentNode:t),Sr(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var a=r;r=function(){var c=Ba(l);a.call(c)}}var l=bh(t,0,!1,null,null,!1,!1,"",Gp);return t._reactRootContainer=l,t[ln]=l.current,$i(t.nodeType===8?t.parentNode:t),Sr(function(){Ol(e,l,n,r)}),l}function Ll(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var a=s;s=function(){var l=Ba(o);a.call(l)}}Ol(e,o,t,s)}else o=rS(n,e,t,s,r);return Ba(o)}ky=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ui(e.pendingLanes);n!==0&&(qd(e,n|1),Ze(e,ye()),!(K&6)&&(Cs=ye()+500,nr()))}break;case 13:Sr(function(){var r=cn(t,1);if(r!==null){var s=Be();Ct(r,t,1,s)}}),Ih(t,1)}};Qd=function(t){if(t.tag===13){var e=cn(t,134217728);if(e!==null){var n=Be();Ct(e,t,134217728,n)}Ih(t,134217728)}};xy=function(t){if(t.tag===13){var e=zn(t),n=cn(t,e);if(n!==null){var r=Be();Ct(n,t,e,r)}Ih(t,e)}};Ey=function(){return Y};Sy=function(t,e){var n=Y;try{return Y=t,e()}finally{Y=n}};bu=function(t,e,n){switch(e){case"input":if(_u(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=bl(r);if(!s)throw Error(b(90));ty(r),_u(r,s)}}}break;case"textarea":ry(t,n);break;case"select":e=n.value,e!=null&&ls(t,!!n.multiple,e,!1)}};uy=xh;dy=Sr;var sS={usingClientEntryPoint:!1,Events:[mo,Jr,bl,ly,cy,xh]},ni={findFiberByHostInstance:dr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},iS={bundleType:ni.bundleType,version:ni.version,rendererPackageName:ni.rendererPackageName,rendererConfig:ni.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:mn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=py(t),t===null?null:t.stateNode},findFiberByHostInstance:ni.findFiberByHostInstance||nS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var qo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!qo.isDisabled&&qo.supportsFiber)try{xl=qo.inject(iS),Ut=qo}catch{}}at.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sS;at.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Th(e))throw Error(b(200));return tS(t,e,null,n)};at.createRoot=function(t,e){if(!Th(t))throw Error(b(299));var n=!1,r="",s=Kv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=bh(t,1,!1,null,null,n,!1,r,s),t[ln]=e.current,$i(t.nodeType===8?t.parentNode:t),new Nh(e)};at.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(b(188)):(t=Object.keys(t).join(","),Error(b(268,t)));return t=py(e),t=t===null?null:t.stateNode,t};at.flushSync=function(t){return Sr(t)};at.hydrate=function(t,e,n){if(!Ml(e))throw Error(b(200));return Ll(null,t,e,!0,n)};at.hydrateRoot=function(t,e,n){if(!Th(t))throw Error(b(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=Kv;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Hv(e,null,t,1,n??null,s,!1,i,o),t[ln]=e.current,$i(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new Dl(e)};at.render=function(t,e,n){if(!Ml(e))throw Error(b(200));return Ll(null,t,e,!1,n)};at.unmountComponentAtNode=function(t){if(!Ml(t))throw Error(b(40));return t._reactRootContainer?(Sr(function(){Ll(null,null,t,!1,function(){t._reactRootContainer=null,t[ln]=null})}),!0):!1};at.unstable_batchedUpdates=xh;at.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Ml(n))throw Error(b(200));if(t==null||t._reactInternals===void 0)throw Error(b(38));return Ll(t,e,n,!1,r)};at.version="18.3.1-next-f1338f8080-20240426";function Gv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Gv)}catch(t){console.error(t)}}Gv(),Gg.exports=at;var oS=Gg.exports,qp=oS;hu.createRoot=qp.createRoot,hu.hydrateRoot=qp.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Qi(){return Qi=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Qi.apply(this,arguments)}var An;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(An||(An={}));const Qp="popstate";function aS(t){t===void 0&&(t={});function e(r,s){let{pathname:i,search:o,hash:a}=r.location;return id("",{pathname:i,search:o,hash:a},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(r,s){return typeof s=="string"?s:Qv(s)}return cS(e,n,null,t)}function Ee(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function qv(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function lS(){return Math.random().toString(36).substr(2,8)}function Yp(t,e){return{usr:t.state,key:t.key,idx:e}}function id(t,e,n,r){return n===void 0&&(n=null),Qi({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Fs(e):e,{state:n,key:e&&e.key||r||lS()})}function Qv(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Fs(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function cS(t,e,n,r){r===void 0&&(r={});let{window:s=document.defaultView,v5Compat:i=!1}=r,o=s.history,a=An.Pop,l=null,c=u();c==null&&(c=0,o.replaceState(Qi({},o.state,{idx:c}),""));function u(){return(o.state||{idx:null}).idx}function d(){a=An.Pop;let k=u(),v=k==null?null:k-c;c=k,l&&l({action:a,location:_.location,delta:v})}function f(k,v){a=An.Push;let p=id(_.location,k,v);c=u()+1;let g=Yp(p,c),x=_.createHref(p);try{o.pushState(g,"",x)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;s.location.assign(x)}i&&l&&l({action:a,location:_.location,delta:1})}function m(k,v){a=An.Replace;let p=id(_.location,k,v);c=u();let g=Yp(p,c),x=_.createHref(p);o.replaceState(g,"",x),i&&l&&l({action:a,location:_.location,delta:0})}function y(k){let v=s.location.origin!=="null"?s.location.origin:s.location.href,p=typeof k=="string"?k:Qv(k);return p=p.replace(/ $/,"%20"),Ee(v,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,v)}let _={get action(){return a},get location(){return t(s,o)},listen(k){if(l)throw new Error("A history only accepts one active listener");return s.addEventListener(Qp,d),l=k,()=>{s.removeEventListener(Qp,d),l=null}},createHref(k){return e(s,k)},createURL:y,encodeLocation(k){let v=y(k);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:f,replace:m,go(k){return o.go(k)}};return _}var Xp;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Xp||(Xp={}));function uS(t,e,n){return n===void 0&&(n="/"),dS(t,e,n)}function dS(t,e,n,r){let s=typeof e=="string"?Fs(e):e,i=Jv(s.pathname||"/",n);if(i==null)return null;let o=Yv(t);hS(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let c=SS(i);a=kS(o[l],c)}return a}function Yv(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let s=(i,o,a)=>{let l={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};l.relativePath.startsWith("/")&&(Ee(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=vr([r,l.relativePath]),u=n.concat(l);i.children&&i.children.length>0&&(Ee(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Yv(i.children,e,u,c)),!(i.path==null&&!i.index)&&e.push({path:c,score:_S(c,i.index),routesMeta:u})};return t.forEach((i,o)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))s(i,o);else for(let l of Xv(i.path))s(i,o,l)}),e}function Xv(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,s=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return s?[i,""]:[i];let o=Xv(r.join("/")),a=[];return a.push(...o.map(l=>l===""?i:[i,l].join("/"))),s&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function hS(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:wS(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const fS=/^:[\w-]+$/,pS=3,mS=2,gS=1,yS=10,vS=-2,Jp=t=>t==="*";function _S(t,e){let n=t.split("/"),r=n.length;return n.some(Jp)&&(r+=vS),e&&(r+=mS),n.filter(s=>!Jp(s)).reduce((s,i)=>s+(fS.test(i)?pS:i===""?gS:yS),r)}function wS(t,e){return t.length===e.length&&t.slice(0,-1).every((r,s)=>r===e[s])?t[t.length-1]-e[e.length-1]:0}function kS(t,e,n){let{routesMeta:r}=t,s={},i="/",o=[];for(let a=0;a<r.length;++a){let l=r[a],c=a===r.length-1,u=i==="/"?e:e.slice(i.length)||"/",d=xS({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},u),f=l.route;if(!d)return null;Object.assign(s,d.params),o.push({params:s,pathname:vr([i,d.pathname]),pathnameBase:RS(vr([i,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(i=vr([i,d.pathnameBase]))}return o}function xS(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=ES(t.path,t.caseSensitive,t.end),s=e.match(n);if(!s)return null;let i=s[0],o=i.replace(/(.)\/+$/,"$1"),a=s.slice(1);return{params:r.reduce((c,u,d)=>{let{paramName:f,isOptional:m}=u;if(f==="*"){let _=a[d]||"";o=i.slice(0,i.length-_.length).replace(/(.)\/+$/,"$1")}const y=a[d];return m&&!y?c[f]=void 0:c[f]=(y||"").replace(/%2F/g,"/"),c},{}),pathname:i,pathnameBase:o,pattern:t}}function ES(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),qv(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],s="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),s+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?s+="\\/*$":t!==""&&t!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),r]}function SS(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return qv(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Jv(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function CS(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:s=""}=typeof t=="string"?Fs(t):t;return{pathname:n?n.startsWith("/")?n:bS(n,e):e,search:PS(r),hash:AS(s)}}function bS(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(s=>{s===".."?n.length>1&&n.pop():s!=="."&&n.push(s)}),n.length>1?n.join("/"):"/"}function $c(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function IS(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function NS(t,e){let n=IS(t);return e?n.map((r,s)=>s===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function TS(t,e,n,r){r===void 0&&(r=!1);let s;typeof t=="string"?s=Fs(t):(s=Qi({},t),Ee(!s.pathname||!s.pathname.includes("?"),$c("?","pathname","search",s)),Ee(!s.pathname||!s.pathname.includes("#"),$c("#","pathname","hash",s)),Ee(!s.search||!s.search.includes("#"),$c("#","search","hash",s)));let i=t===""||s.pathname==="",o=i?"/":s.pathname,a;if(o==null)a=n;else{let d=e.length-1;if(!r&&o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),d-=1;s.pathname=f.join("/")}a=d>=0?e[d]:"/"}let l=CS(s,a),c=o&&o!=="/"&&o.endsWith("/"),u=(i||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||u)&&(l.pathname+="/"),l}const vr=t=>t.join("/").replace(/\/\/+/g,"/"),RS=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),PS=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,AS=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function OS(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Zv=["post","put","patch","delete"];new Set(Zv);const DS=["get",...Zv];new Set(DS);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Yi(){return Yi=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Yi.apply(this,arguments)}const Rh=w.createContext(null),MS=w.createContext(null),jl=w.createContext(null),Fl=w.createContext(null),Us=w.createContext({outlet:null,matches:[],isDataRoute:!1}),e_=w.createContext(null);function Ul(){return w.useContext(Fl)!=null}function t_(){return Ul()||Ee(!1),w.useContext(Fl).location}function n_(t){w.useContext(jl).static||w.useLayoutEffect(t)}function r_(){let{isDataRoute:t}=w.useContext(Us);return t?qS():LS()}function LS(){Ul()||Ee(!1);let t=w.useContext(Rh),{basename:e,future:n,navigator:r}=w.useContext(jl),{matches:s}=w.useContext(Us),{pathname:i}=t_(),o=JSON.stringify(NS(s,n.v7_relativeSplatPath)),a=w.useRef(!1);return n_(()=>{a.current=!0}),w.useCallback(function(c,u){if(u===void 0&&(u={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let d=TS(c,JSON.parse(o),i,u.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:vr([e,d.pathname])),(u.replace?r.replace:r.push)(d,u.state,u)},[e,r,o,i,t])}function jS(t,e){return FS(t,e)}function FS(t,e,n,r){Ul()||Ee(!1);let{navigator:s}=w.useContext(jl),{matches:i}=w.useContext(Us),o=i[i.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let c=t_(),u;if(e){var d;let k=typeof e=="string"?Fs(e):e;l==="/"||(d=k.pathname)!=null&&d.startsWith(l)||Ee(!1),u=k}else u=c;let f=u.pathname||"/",m=f;if(l!=="/"){let k=l.replace(/^\//,"").split("/");m="/"+f.replace(/^\//,"").split("/").slice(k.length).join("/")}let y=uS(t,{pathname:m}),_=BS(y&&y.map(k=>Object.assign({},k,{params:Object.assign({},a,k.params),pathname:vr([l,s.encodeLocation?s.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?l:vr([l,s.encodeLocation?s.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),i,n,r);return e&&_?w.createElement(Fl.Provider,{value:{location:Yi({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:An.Pop}},_):_}function US(){let t=GS(),e=OS(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},e),n?w.createElement("pre",{style:s},n):null,null)}const $S=w.createElement(US,null);class zS extends w.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?w.createElement(Us.Provider,{value:this.props.routeContext},w.createElement(e_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function WS(t){let{routeContext:e,match:n,children:r}=t,s=w.useContext(Rh);return s&&s.static&&s.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=n.route.id),w.createElement(Us.Provider,{value:e},r)}function BS(t,e,n,r){var s;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var i;if(!n)return null;if(n.errors)t=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(s=n)==null?void 0:s.errors;if(a!=null){let u=o.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id])!==void 0);u>=0||Ee(!1),o=o.slice(0,Math.min(o.length,u+1))}let l=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let u=0;u<o.length;u++){let d=o[u];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(c=u),d.route.id){let{loaderData:f,errors:m}=n,y=d.route.loader&&f[d.route.id]===void 0&&(!m||m[d.route.id]===void 0);if(d.route.lazy||y){l=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((u,d,f)=>{let m,y=!1,_=null,k=null;n&&(m=a&&d.route.id?a[d.route.id]:void 0,_=d.route.errorElement||$S,l&&(c<0&&f===0?(QS("route-fallback"),y=!0,k=null):c===f&&(y=!0,k=d.route.hydrateFallbackElement||null)));let v=e.concat(o.slice(0,f+1)),p=()=>{let g;return m?g=_:y?g=k:d.route.Component?g=w.createElement(d.route.Component,null):d.route.element?g=d.route.element:g=u,w.createElement(WS,{match:d,routeContext:{outlet:u,matches:v,isDataRoute:n!=null},children:g})};return n&&(d.route.ErrorBoundary||d.route.errorElement||f===0)?w.createElement(zS,{location:n.location,revalidation:n.revalidation,component:_,error:m,children:p(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):p()},null)}var s_=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(s_||{}),i_=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(i_||{});function VS(t){let e=w.useContext(Rh);return e||Ee(!1),e}function HS(t){let e=w.useContext(MS);return e||Ee(!1),e}function KS(t){let e=w.useContext(Us);return e||Ee(!1),e}function o_(t){let e=KS(),n=e.matches[e.matches.length-1];return n.route.id||Ee(!1),n.route.id}function GS(){var t;let e=w.useContext(e_),n=HS(),r=o_();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function qS(){let{router:t}=VS(s_.UseNavigateStable),e=o_(i_.UseNavigateStable),n=w.useRef(!1);return n_(()=>{n.current=!0}),w.useCallback(function(s,i){i===void 0&&(i={}),n.current&&(typeof s=="number"?t.navigate(s):t.navigate(s,Yi({fromRouteId:e},i)))},[t,e])}const Zp={};function QS(t,e,n){Zp[t]||(Zp[t]=!0)}function YS(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function hi(t){Ee(!1)}function XS(t){let{basename:e="/",children:n=null,location:r,navigationType:s=An.Pop,navigator:i,static:o=!1,future:a}=t;Ul()&&Ee(!1);let l=e.replace(/^\/*/,"/"),c=w.useMemo(()=>({basename:l,navigator:i,static:o,future:Yi({v7_relativeSplatPath:!1},a)}),[l,a,i,o]);typeof r=="string"&&(r=Fs(r));let{pathname:u="/",search:d="",hash:f="",state:m=null,key:y="default"}=r,_=w.useMemo(()=>{let k=Jv(u,l);return k==null?null:{location:{pathname:k,search:d,hash:f,state:m,key:y},navigationType:s}},[l,u,d,f,m,y,s]);return _==null?null:w.createElement(jl.Provider,{value:c},w.createElement(Fl.Provider,{children:n,value:_}))}function JS(t){let{children:e,location:n}=t;return jS(od(e),n)}new Promise(()=>{});function od(t,e){e===void 0&&(e=[]);let n=[];return w.Children.forEach(t,(r,s)=>{if(!w.isValidElement(r))return;let i=[...e,s];if(r.type===w.Fragment){n.push.apply(n,od(r.props.children,i));return}r.type!==hi&&Ee(!1),!r.props.index||!r.props.children||Ee(!1);let o={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=od(r.props.children,i)),n.push(o)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const ZS="6";try{window.__reactRouterVersion=ZS}catch{}const eC="startTransition",em=Qk[eC];function tC(t){let{basename:e,children:n,future:r,window:s}=t,i=w.useRef();i.current==null&&(i.current=aS({window:s,v5Compat:!0}));let o=i.current,[a,l]=w.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},u=w.useCallback(d=>{c&&em?em(()=>l(d)):l(d)},[l,c]);return w.useLayoutEffect(()=>o.listen(u),[o,u]),w.useEffect(()=>YS(r),[r]),w.createElement(XS,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}var tm;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(tm||(tm={}));var nm;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(nm||(nm={}));let nC={data:""},rC=t=>typeof window=="object"?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||nC,sC=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,iC=/\/\*[^]*?\*\/|  +/g,rm=/\n+/g,Sn=(t,e)=>{let n="",r="",s="";for(let i in t){let o=t[i];i[0]=="@"?i[1]=="i"?n=i+" "+o+";":r+=i[1]=="f"?Sn(o,i):i+"{"+Sn(o,i[1]=="k"?"":e)+"}":typeof o=="object"?r+=Sn(o,e?e.replace(/([^,])+/g,a=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,a):a?a+" "+l:l)):i):o!=null&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=Sn.p?Sn.p(i,o):i+":"+o+";")}return n+(e&&s?e+"{"+s+"}":s)+r},Kt={},a_=t=>{if(typeof t=="object"){let e="";for(let n in t)e+=n+a_(t[n]);return e}return t},oC=(t,e,n,r,s)=>{let i=a_(t),o=Kt[i]||(Kt[i]=(l=>{let c=0,u=11;for(;c<l.length;)u=101*u+l.charCodeAt(c++)>>>0;return"go"+u})(i));if(!Kt[o]){let l=i!==t?t:(c=>{let u,d,f=[{}];for(;u=sC.exec(c.replace(iC,""));)u[4]?f.shift():u[3]?(d=u[3].replace(rm," ").trim(),f.unshift(f[0][d]=f[0][d]||{})):f[0][u[1]]=u[2].replace(rm," ").trim();return f[0]})(t);Kt[o]=Sn(s?{["@keyframes "+o]:l}:l,n?"":"."+o)}let a=n&&Kt.g?Kt.g:null;return n&&(Kt.g=Kt[o]),((l,c,u,d)=>{d?c.data=c.data.replace(d,l):c.data.indexOf(l)===-1&&(c.data=u?l+c.data:c.data+l)})(Kt[o],e,r,a),o},aC=(t,e,n)=>t.reduce((r,s,i)=>{let o=e[i];if(o&&o.call){let a=o(n),l=a&&a.props&&a.props.className||/^go/.test(a)&&a;o=l?"."+l:a&&typeof a=="object"?a.props?"":Sn(a,""):a===!1?"":a}return r+s+(o??"")},"");function $l(t){let e=this||{},n=t.call?t(e.p):t;return oC(n.unshift?n.raw?aC(n,[].slice.call(arguments,1),e.p):n.reduce((r,s)=>Object.assign(r,s&&s.call?s(e.p):s),{}):n,rC(e.target),e.g,e.o,e.k)}let l_,ad,ld;$l.bind({g:1});let dn=$l.bind({k:1});function lC(t,e,n,r){Sn.p=e,l_=t,ad=n,ld=r}function rr(t,e){let n=this||{};return function(){let r=arguments;function s(i,o){let a=Object.assign({},i),l=a.className||s.className;n.p=Object.assign({theme:ad&&ad()},a),n.o=/ *go\d+/.test(l),a.className=$l.apply(n,r)+(l?" "+l:"");let c=t;return t[0]&&(c=a.as||t,delete a.as),ld&&c[0]&&ld(a),l_(c,a)}return s}}var cC=t=>typeof t=="function",Va=(t,e)=>cC(t)?t(e):t,uC=(()=>{let t=0;return()=>(++t).toString()})(),c_=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),dC=20,Ph="default",u_=(t,e)=>{let{toastLimit:n}=t.settings;switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,n)};case 1:return{...t,toasts:t.toasts.map(o=>o.id===e.toast.id?{...o,...e.toast}:o)};case 2:let{toast:r}=e;return u_(t,{type:t.toasts.find(o=>o.id===r.id)?1:0,toast:r});case 3:let{toastId:s}=e;return{...t,toasts:t.toasts.map(o=>o.id===s||s===void 0?{...o,dismissed:!0,visible:!1}:o)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(o=>o.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let i=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(o=>({...o,pauseDuration:o.pauseDuration+i}))}}},pa=[],d_={toasts:[],pausedAt:void 0,settings:{toastLimit:dC}},Lt={},h_=(t,e=Ph)=>{Lt[e]=u_(Lt[e]||d_,t),pa.forEach(([n,r])=>{n===e&&r(Lt[e])})},f_=t=>Object.keys(Lt).forEach(e=>h_(t,e)),hC=t=>Object.keys(Lt).find(e=>Lt[e].toasts.some(n=>n.id===t)),zl=(t=Ph)=>e=>{h_(e,t)},fC={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},pC=(t={},e=Ph)=>{let[n,r]=w.useState(Lt[e]||d_),s=w.useRef(Lt[e]);w.useEffect(()=>(s.current!==Lt[e]&&r(Lt[e]),pa.push([e,r]),()=>{let o=pa.findIndex(([a])=>a===e);o>-1&&pa.splice(o,1)}),[e]);let i=n.toasts.map(o=>{var a,l,c;return{...t,...t[o.type],...o,removeDelay:o.removeDelay||((a=t[o.type])==null?void 0:a.removeDelay)||(t==null?void 0:t.removeDelay),duration:o.duration||((l=t[o.type])==null?void 0:l.duration)||(t==null?void 0:t.duration)||fC[o.type],style:{...t.style,...(c=t[o.type])==null?void 0:c.style,...o.style}}});return{...n,toasts:i}},mC=(t,e="blank",n)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...n,id:(n==null?void 0:n.id)||uC()}),yo=t=>(e,n)=>{let r=mC(e,t,n);return zl(r.toasterId||hC(r.id))({type:2,toast:r}),r.id},we=(t,e)=>yo("blank")(t,e);we.error=yo("error");we.success=yo("success");we.loading=yo("loading");we.custom=yo("custom");we.dismiss=(t,e)=>{let n={type:3,toastId:t};e?zl(e)(n):f_(n)};we.dismissAll=t=>we.dismiss(void 0,t);we.remove=(t,e)=>{let n={type:4,toastId:t};e?zl(e)(n):f_(n)};we.removeAll=t=>we.remove(void 0,t);we.promise=(t,e,n)=>{let r=we.loading(e.loading,{...n,...n==null?void 0:n.loading});return typeof t=="function"&&(t=t()),t.then(s=>{let i=e.success?Va(e.success,s):void 0;return i?we.success(i,{id:r,...n,...n==null?void 0:n.success}):we.dismiss(r),s}).catch(s=>{let i=e.error?Va(e.error,s):void 0;i?we.error(i,{id:r,...n,...n==null?void 0:n.error}):we.dismiss(r)}),t};var gC=1e3,yC=(t,e="default")=>{let{toasts:n,pausedAt:r}=pC(t,e),s=w.useRef(new Map).current,i=w.useCallback((d,f=gC)=>{if(s.has(d))return;let m=setTimeout(()=>{s.delete(d),o({type:4,toastId:d})},f);s.set(d,m)},[]);w.useEffect(()=>{if(r)return;let d=Date.now(),f=n.map(m=>{if(m.duration===1/0)return;let y=(m.duration||0)+m.pauseDuration-(d-m.createdAt);if(y<0){m.visible&&we.dismiss(m.id);return}return setTimeout(()=>we.dismiss(m.id,e),y)});return()=>{f.forEach(m=>m&&clearTimeout(m))}},[n,r,e]);let o=w.useCallback(zl(e),[e]),a=w.useCallback(()=>{o({type:5,time:Date.now()})},[o]),l=w.useCallback((d,f)=>{o({type:1,toast:{id:d,height:f}})},[o]),c=w.useCallback(()=>{r&&o({type:6,time:Date.now()})},[r,o]),u=w.useCallback((d,f)=>{let{reverseOrder:m=!1,gutter:y=8,defaultPosition:_}=f||{},k=n.filter(g=>(g.position||_)===(d.position||_)&&g.height),v=k.findIndex(g=>g.id===d.id),p=k.filter((g,x)=>x<v&&g.visible).length;return k.filter(g=>g.visible).slice(...m?[p+1]:[0,p]).reduce((g,x)=>g+(x.height||0)+y,0)},[n]);return w.useEffect(()=>{n.forEach(d=>{if(d.dismissed)i(d.id,d.removeDelay);else{let f=s.get(d.id);f&&(clearTimeout(f),s.delete(d.id))}})},[n,i]),{toasts:n,handlers:{updateHeight:l,startPause:a,endPause:c,calculateOffset:u}}},vC=dn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,_C=dn`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,wC=dn`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,kC=rr("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${vC} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${_C} 0.15s ease-out forwards;
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
    animation: ${wC} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,xC=dn`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,EC=rr("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${xC} 1s linear infinite;
`,SC=dn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,CC=dn`
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
}`,bC=rr("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${SC} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${CC} 0.2s ease-out forwards;
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
`,IC=rr("div")`
  position: absolute;
`,NC=rr("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,TC=dn`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,RC=rr("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${TC} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,PC=({toast:t})=>{let{icon:e,type:n,iconTheme:r}=t;return e!==void 0?typeof e=="string"?w.createElement(RC,null,e):e:n==="blank"?null:w.createElement(NC,null,w.createElement(EC,{...r}),n!=="loading"&&w.createElement(IC,null,n==="error"?w.createElement(kC,{...r}):w.createElement(bC,{...r})))},AC=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,OC=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,DC="0%{opacity:0;} 100%{opacity:1;}",MC="0%{opacity:1;} 100%{opacity:0;}",LC=rr("div")`
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
`,jC=rr("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,FC=(t,e)=>{let n=t.includes("top")?1:-1,[r,s]=c_()?[DC,MC]:[AC(n),OC(n)];return{animation:e?`${dn(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${dn(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},UC=w.memo(({toast:t,position:e,style:n,children:r})=>{let s=t.height?FC(t.position||e||"top-center",t.visible):{opacity:0},i=w.createElement(PC,{toast:t}),o=w.createElement(jC,{...t.ariaProps},Va(t.message,t));return w.createElement(LC,{className:t.className,style:{...s,...n,...t.style}},typeof r=="function"?r({icon:i,message:o}):w.createElement(w.Fragment,null,i,o))});lC(w.createElement);var $C=({id:t,className:e,style:n,onHeightUpdate:r,children:s})=>{let i=w.useCallback(o=>{if(o){let a=()=>{let l=o.getBoundingClientRect().height;r(t,l)};a(),new MutationObserver(a).observe(o,{subtree:!0,childList:!0,characterData:!0})}},[t,r]);return w.createElement("div",{ref:i,className:e,style:n},s)},zC=(t,e)=>{let n=t.includes("top"),r=n?{top:0}:{bottom:0},s=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:c_()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(n?1:-1)}px)`,...r,...s}},WC=$l`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Qo=16,BC=({reverseOrder:t,position:e="top-center",toastOptions:n,gutter:r,children:s,toasterId:i,containerStyle:o,containerClassName:a})=>{let{toasts:l,handlers:c}=yC(n,i);return w.createElement("div",{"data-rht-toaster":i||"",style:{position:"fixed",zIndex:9999,top:Qo,left:Qo,right:Qo,bottom:Qo,pointerEvents:"none",...o},className:a,onMouseEnter:c.startPause,onMouseLeave:c.endPause},l.map(u=>{let d=u.position||e,f=c.calculateOffset(u,{reverseOrder:t,gutter:r,defaultPosition:e}),m=zC(d,f);return w.createElement($C,{id:u.id,key:u.id,onHeightUpdate:c.updateHeight,className:u.visible?WC:"",style:m},u.type==="custom"?Va(u.message,u):s?s(u):w.createElement(UC,{toast:u,position:d}))}))},L=we;const VC={},sm=t=>{let e;const n=new Set,r=(u,d)=>{const f=typeof u=="function"?u(e):u;if(!Object.is(f,e)){const m=e;e=d??(typeof f!="object"||f===null)?f:Object.assign({},e,f),n.forEach(y=>y(e,m))}},s=()=>e,l={setState:r,getState:s,getInitialState:()=>c,subscribe:u=>(n.add(u),()=>n.delete(u)),destroy:()=>{(VC?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},c=e=t(r,s,l);return l},HC=t=>t?sm(t):sm;var p_={exports:{}},m_={},g_={exports:{}},y_={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bs=w;function KC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var GC=typeof Object.is=="function"?Object.is:KC,qC=bs.useState,QC=bs.useEffect,YC=bs.useLayoutEffect,XC=bs.useDebugValue;function JC(t,e){var n=e(),r=qC({inst:{value:n,getSnapshot:e}}),s=r[0].inst,i=r[1];return YC(function(){s.value=n,s.getSnapshot=e,zc(s)&&i({inst:s})},[t,n,e]),QC(function(){return zc(s)&&i({inst:s}),t(function(){zc(s)&&i({inst:s})})},[t]),XC(n),n}function zc(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!GC(t,n)}catch{return!0}}function ZC(t,e){return e()}var e1=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?ZC:JC;y_.useSyncExternalStore=bs.useSyncExternalStore!==void 0?bs.useSyncExternalStore:e1;g_.exports=y_;var t1=g_.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wl=w,n1=t1;function r1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var s1=typeof Object.is=="function"?Object.is:r1,i1=n1.useSyncExternalStore,o1=Wl.useRef,a1=Wl.useEffect,l1=Wl.useMemo,c1=Wl.useDebugValue;m_.useSyncExternalStoreWithSelector=function(t,e,n,r,s){var i=o1(null);if(i.current===null){var o={hasValue:!1,value:null};i.current=o}else o=i.current;i=l1(function(){function l(m){if(!c){if(c=!0,u=m,m=r(m),s!==void 0&&o.hasValue){var y=o.value;if(s(y,m))return d=y}return d=m}if(y=d,s1(u,m))return y;var _=r(m);return s!==void 0&&s(y,_)?(u=m,y):(u=m,d=_)}var c=!1,u,d,f=n===void 0?null:n;return[function(){return l(e())},f===null?void 0:function(){return l(f())}]},[e,n,r,s]);var a=i1(t,i[0],i[1]);return a1(function(){o.hasValue=!0,o.value=a},[a]),c1(a),a};p_.exports=m_;var u1=p_.exports;const d1=Mg(u1),v_={},{useDebugValue:h1}=kl,{useSyncExternalStoreWithSelector:f1}=d1;let im=!1;const p1=t=>t;function m1(t,e=p1,n){(v_?"production":void 0)!=="production"&&n&&!im&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),im=!0);const r=f1(t.subscribe,t.getState,t.getServerState||t.getInitialState,e,n);return h1(r),r}const om=t=>{(v_?"production":void 0)!=="production"&&typeof t!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const e=typeof t=="function"?HC(t):t,n=(r,s)=>m1(e,r,s);return Object.assign(n,e),n},__=t=>t?om(t):om,Ue=__(t=>({user:null,loading:!0,setUser:e=>t({user:e}),setLoading:e=>t({loading:e}),logout:()=>t({user:null})}));var am={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w_={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I=function(t,e){if(!t)throw $s(e)},$s=function(t){return new Error("Firebase Database ("+w_.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},g1=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Ah={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,u=i>>2,d=(i&3)<<4|a>>4;let f=(a&15)<<2|c>>6,m=c&63;l||(m=64,o||(f=64)),r.push(n[u],n[d],n[f],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(k_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):g1(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||c==null||d==null)throw new y1;const f=i<<2|a>>4;if(r.push(f),c!==64){const m=a<<4&240|c>>2;if(r.push(m),d!==64){const y=c<<6&192|d;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class y1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const x_=function(t){const e=k_(t);return Ah.encodeByteArray(e,!0)},Ha=function(t){return x_(t).replace(/\./g,"")},Ka=function(t){try{return Ah.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v1(t){return E_(void 0,t)}function E_(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!_1(n)||(t[n]=E_(t[n],e[n]));return t}function _1(t){return t!=="__proto__"}/**
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
 */function w1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const k1=()=>w1().__FIREBASE_DEFAULTS__,x1=()=>{if(typeof process>"u"||typeof am>"u")return;const t=am.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},E1=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ka(t[1]);return e&&JSON.parse(e)},Oh=()=>{try{return k1()||x1()||E1()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},S_=t=>{var e,n;return(n=(e=Oh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},C_=t=>{const e=S_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},b_=()=>{var t;return(t=Oh())===null||t===void 0?void 0:t.config},I_=t=>{var e;return(e=Oh())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function N_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ha(JSON.stringify(n)),Ha(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Dh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(He())}function S1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function C1(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function T_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function b1(){const t=He();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function I1(){return w_.NODE_ADMIN===!0}function R_(){try{return typeof indexedDB=="object"}catch{return!1}}function P_(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function N1(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T1="FirebaseError";class Vt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=T1,Object.setPrototypeOf(this,Vt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,jr.prototype.create)}}class jr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?R1(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Vt(s,a,r)}}function R1(t,e){return t.replace(P1,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const P1=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xi(t){return JSON.parse(t)}function ke(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A_=function(t){let e={},n={},r={},s="";try{const i=t.split(".");e=Xi(Ka(i[0])||""),n=Xi(Ka(i[1])||""),s=i[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:s}},A1=function(t){const e=A_(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},O1=function(t){const e=A_(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Cr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Ga(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function qa(t,e,n){const r={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=e.call(n,t[s],s,t));return r}function Qa(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(lm(i)&&lm(o)){if(!Qa(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function lm(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zs(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function fi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function pi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D1{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const f=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(f<<1|f>>>31)&4294967295}let s=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let d=0;d<80;d++){d<40?d<20?(c=a^i&(o^a),u=1518500249):(c=i^o^a,u=1859775393):d<60?(c=i&o|a&(i|o),u=2400959708):(c=i^o^a,u=3395469782);const f=(s<<5|s>>>27)+c+l+u+r[d]&4294967295;l=a,a=o,o=(i<<30|i>>>2)&4294967295,i=s,s=f}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let s=0;const i=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=r;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(i[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}else for(;s<n;)if(i[o]=e[s],++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let i=24;i>=0;i-=8)e[r]=this.chain_[s]>>i&255,++r;return e}}function M1(t,e){const n=new L1(t,e);return n.subscribe.bind(n)}class L1{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");j1(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Wc),s.error===void 0&&(s.error=Wc),s.complete===void 0&&(s.complete=Wc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function j1(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Wc(){}function Is(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F1=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);if(s>=55296&&s<=56319){const i=s-55296;r++,I(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;s=65536+(i<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Bl=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function re(t){return t&&t._delegate?t._delegate:t}class gt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const cr="[DEFAULT]";/**
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
 */class U1{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new kt;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(z1(e))try{this.getOrInitializeService({instanceIdentifier:cr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=cr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=cr){return this.instances.has(e)}getOptions(e=cr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:$1(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=cr){return this.component?this.component.multipleInstances?e:cr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function $1(t){return t===cr?void 0:t}function z1(t){return t.instantiationMode==="EAGER"}/**
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
 */class W1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new U1(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var J;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(J||(J={}));const B1={debug:J.DEBUG,verbose:J.VERBOSE,info:J.INFO,warn:J.WARN,error:J.ERROR,silent:J.SILENT},V1=J.INFO,H1={[J.DEBUG]:"log",[J.VERBOSE]:"log",[J.INFO]:"info",[J.WARN]:"warn",[J.ERROR]:"error"},K1=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=H1[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Mh{constructor(e){this.name=e,this._logLevel=V1,this._logHandler=K1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in J))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?B1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,J.DEBUG,...e),this._logHandler(this,J.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,J.VERBOSE,...e),this._logHandler(this,J.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,J.INFO,...e),this._logHandler(this,J.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,J.WARN,...e),this._logHandler(this,J.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,J.ERROR,...e),this._logHandler(this,J.ERROR,...e)}}const G1=(t,e)=>e.some(n=>t instanceof n);let cm,um;function q1(){return cm||(cm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Q1(){return um||(um=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const O_=new WeakMap,cd=new WeakMap,D_=new WeakMap,Bc=new WeakMap,Lh=new WeakMap;function Y1(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(rn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&O_.set(n,t)}).catch(()=>{}),Lh.set(e,t),e}function X1(t){if(cd.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});cd.set(t,e)}let ud={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return cd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||D_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return rn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function J1(t){ud=t(ud)}function Z1(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Vc(this),e,...n);return D_.set(r,e.sort?e.sort():[e]),rn(r)}:Q1().includes(t)?function(...e){return t.apply(Vc(this),e),rn(O_.get(this))}:function(...e){return rn(t.apply(Vc(this),e))}}function eb(t){return typeof t=="function"?Z1(t):(t instanceof IDBTransaction&&X1(t),G1(t,q1())?new Proxy(t,ud):t)}function rn(t){if(t instanceof IDBRequest)return Y1(t);if(Bc.has(t))return Bc.get(t);const e=eb(t);return e!==t&&(Bc.set(t,e),Lh.set(e,t)),e}const Vc=t=>Lh.get(t);function Vl(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=rn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(rn(o.result),l.oldVersion,l.newVersion,rn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}function Hc(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",r=>e(r.oldVersion,r)),rn(n).then(()=>{})}const tb=["get","getKey","getAll","getAllKeys","count"],nb=["put","add","delete","clear"],Kc=new Map;function dm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Kc.get(e))return Kc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=nb.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||tb.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return Kc.set(e,i),i}J1(t=>({...t,get:(e,n,r)=>dm(e,n)||t.get(e,n,r),has:(e,n)=>!!dm(e,n)||t.has(e,n)}));/**
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
 */class rb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(sb(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function sb(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const dd="@firebase/app",hm="0.10.13";/**
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
 */const hn=new Mh("@firebase/app"),ib="@firebase/app-compat",ob="@firebase/analytics-compat",ab="@firebase/analytics",lb="@firebase/app-check-compat",cb="@firebase/app-check",ub="@firebase/auth",db="@firebase/auth-compat",hb="@firebase/database",fb="@firebase/data-connect",pb="@firebase/database-compat",mb="@firebase/functions",gb="@firebase/functions-compat",yb="@firebase/installations",vb="@firebase/installations-compat",_b="@firebase/messaging",wb="@firebase/messaging-compat",kb="@firebase/performance",xb="@firebase/performance-compat",Eb="@firebase/remote-config",Sb="@firebase/remote-config-compat",Cb="@firebase/storage",bb="@firebase/storage-compat",Ib="@firebase/firestore",Nb="@firebase/vertexai-preview",Tb="@firebase/firestore-compat",Rb="firebase",Pb="10.14.1";/**
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
 */const hd="[DEFAULT]",Ab={[dd]:"fire-core",[ib]:"fire-core-compat",[ab]:"fire-analytics",[ob]:"fire-analytics-compat",[cb]:"fire-app-check",[lb]:"fire-app-check-compat",[ub]:"fire-auth",[db]:"fire-auth-compat",[hb]:"fire-rtdb",[fb]:"fire-data-connect",[pb]:"fire-rtdb-compat",[mb]:"fire-fn",[gb]:"fire-fn-compat",[yb]:"fire-iid",[vb]:"fire-iid-compat",[_b]:"fire-fcm",[wb]:"fire-fcm-compat",[kb]:"fire-perf",[xb]:"fire-perf-compat",[Eb]:"fire-rc",[Sb]:"fire-rc-compat",[Cb]:"fire-gcs",[bb]:"fire-gcs-compat",[Ib]:"fire-fst",[Tb]:"fire-fst-compat",[Nb]:"fire-vertex","fire-js":"fire-js",[Rb]:"fire-js-all"};/**
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
 */const Ya=new Map,Ob=new Map,fd=new Map;function fm(t,e){try{t.container.addComponent(e)}catch(n){hn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Nt(t){const e=t.name;if(fd.has(e))return hn.debug(`There were multiple attempts to register component ${e}.`),!1;fd.set(e,t);for(const n of Ya.values())fm(n,t);for(const n of Ob.values())fm(n,t);return!0}function Fr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function jt(t){return t.settings!==void 0}/**
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
 */const Db={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Bn=new jr("app","Firebase",Db);/**
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
 */class Mb{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new gt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Bn.create("app-deleted",{appName:this._name})}}/**
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
 */const Ur=Pb;function M_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:hd,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Bn.create("bad-app-name",{appName:String(s)});if(n||(n=b_()),!n)throw Bn.create("no-options");const i=Ya.get(s);if(i){if(Qa(n,i.options)&&Qa(r,i.config))return i;throw Bn.create("duplicate-app",{appName:s})}const o=new W1(s);for(const l of fd.values())o.addComponent(l);const a=new Mb(n,r,o);return Ya.set(s,a),a}function Hl(t=hd){const e=Ya.get(t);if(!e&&t===hd&&b_())return M_();if(!e)throw Bn.create("no-app",{appName:t});return e}function et(t,e,n){var r;let s=(r=Ab[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),hn.warn(a.join(" "));return}Nt(new gt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Lb="firebase-heartbeat-database",jb=1,Ji="firebase-heartbeat-store";let Gc=null;function L_(){return Gc||(Gc=Vl(Lb,jb,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ji)}catch(n){console.warn(n)}}}}).catch(t=>{throw Bn.create("idb-open",{originalErrorMessage:t.message})})),Gc}async function Fb(t){try{const n=(await L_()).transaction(Ji),r=await n.objectStore(Ji).get(j_(t));return await n.done,r}catch(e){if(e instanceof Vt)hn.warn(e.message);else{const n=Bn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});hn.warn(n.message)}}}async function pm(t,e){try{const r=(await L_()).transaction(Ji,"readwrite");await r.objectStore(Ji).put(e,j_(t)),await r.done}catch(n){if(n instanceof Vt)hn.warn(n.message);else{const r=Bn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});hn.warn(r.message)}}}function j_(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Ub=1024,$b=30*24*60*60*1e3;class zb{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Bb(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=mm();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=$b}),this._storage.overwrite(this._heartbeatsCache))}catch(r){hn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=mm(),{heartbeatsToSend:r,unsentEntries:s}=Wb(this._heartbeatsCache.heartbeats),i=Ha(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return hn.warn(n),""}}}function mm(){return new Date().toISOString().substring(0,10)}function Wb(t,e=Ub){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),gm(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),gm(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Bb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return R_()?P_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Fb(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return pm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return pm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function gm(t){return Ha(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Vb(t){Nt(new gt("platform-logger",e=>new rb(e),"PRIVATE")),Nt(new gt("heartbeat",e=>new zb(e),"PRIVATE")),et(dd,hm,t),et(dd,hm,"esm2017"),et("fire-js","")}Vb("");var Hb="firebase",Kb="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */et(Hb,Kb,"app");function jh(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function F_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Gb=F_,U_=new jr("auth","Firebase",F_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xa=new Mh("@firebase/auth");function qb(t,...e){Xa.logLevel<=J.WARN&&Xa.warn(`Auth (${Ur}): ${t}`,...e)}function ma(t,...e){Xa.logLevel<=J.ERROR&&Xa.error(`Auth (${Ur}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(t,...e){throw Fh(t,...e)}function zt(t,...e){return Fh(t,...e)}function $_(t,e,n){const r=Object.assign(Object.assign({},Gb()),{[e]:n});return new jr("auth","Firebase",r).create(e,{appName:t.name})}function sn(t){return $_(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Fh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return U_.create(t,...e)}function M(t,e,...n){if(!t)throw Fh(e,...n)}function Jt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ma(e),new Error(e)}function fn(t,e){t||Jt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Qb(){return ym()==="http:"||ym()==="https:"}function ym(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Qb()||C1()||"connection"in navigator)?navigator.onLine:!0}function Xb(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(e,n){this.shortDelay=e,this.longDelay=n,fn(n>e,"Short delay should be less than long delay!"),this.isMobile=Dh()||T_()}get(){return Yb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uh(t,e){fn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Jt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Jt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Jt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zb=new vo(3e4,6e4);function sr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function gn(t,e,n,r,s={}){return W_(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=zs(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:l},i);return S1()||(c.referrerPolicy="no-referrer"),z_.fetch()(B_(t,t.config.apiHost,n,a),c)})}async function W_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Jb),e);try{const s=new tI(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Yo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Yo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Yo(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Yo(t,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw $_(t,u,c);Tt(t,u)}}catch(s){if(s instanceof Vt)throw s;Tt(t,"network-request-failed",{message:String(s)})}}async function _o(t,e,n,r,s={}){const i=await gn(t,e,n,r,s);return"mfaPendingCredential"in i&&Tt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function B_(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Uh(t.config,s):`${t.config.apiScheme}://${s}`}function eI(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class tI{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(zt(this.auth,"network-request-failed")),Zb.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Yo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=zt(t,e,r);return s.customData._tokenResponse=n,s}function vm(t){return t!==void 0&&t.enterprise!==void 0}class nI{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return eI(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function rI(t,e){return gn(t,"GET","/v2/recaptchaConfig",sr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sI(t,e){return gn(t,"POST","/v1/accounts:delete",e)}async function V_(t,e){return gn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Si(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function iI(t,e=!1){const n=re(t),r=await n.getIdToken(e),s=$h(r);M(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Si(qc(s.auth_time)),issuedAtTime:Si(qc(s.iat)),expirationTime:Si(qc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function qc(t){return Number(t)*1e3}function $h(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ma("JWT malformed, contained fewer than 3 sections"),null;try{const s=Ka(n);return s?JSON.parse(s):(ma("Failed to decode base64 JWT payload"),null)}catch(s){return ma("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function _m(t){const e=$h(t);return M(e,"internal-error"),M(typeof e.exp<"u","internal-error"),M(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ns(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Vt&&oI(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function oI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Si(this.lastLoginAt),this.creationTime=Si(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ja(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Ns(t,V_(n,{idToken:r}));M(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?H_(i.providerUserInfo):[],a=cI(t.providerData,o),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new md(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function lI(t){const e=re(t);await Ja(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function cI(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function H_(t){return t.map(e=>{var{providerId:n}=e,r=jh(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uI(t,e){const n=await W_(t,{},async()=>{const r=zs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=B_(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",z_.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function dI(t,e){return gn(t,"POST","/v2/accounts:revokeToken",sr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){M(e.idToken,"internal-error"),M(typeof e.idToken<"u","internal-error"),M(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):_m(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){M(e.length!==0,"internal-error");const n=_m(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(M(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await uI(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new ps;return r&&(M(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(M(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(M(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ps,this.toJSON())}_performRefresh(){return Jt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _n(t,e){M(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Zt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=jh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new aI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new md(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Ns(this,this.stsTokenManager.getToken(this.auth,e));return M(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return iI(this,e)}reload(){return lI(this)}_assign(e){this!==e&&(M(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Zt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){M(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ja(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(jt(this.auth.app))return Promise.reject(sn(this.auth));const e=await this.getIdToken();return await Ns(this,sI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,l,c,u;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(s=n.email)!==null&&s!==void 0?s:void 0,m=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,k=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,v=(c=n.createdAt)!==null&&c!==void 0?c:void 0,p=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:g,emailVerified:x,isAnonymous:S,providerData:E,stsTokenManager:C}=n;M(g&&C,e,"internal-error");const R=ps.fromJSON(this.name,C);M(typeof g=="string",e,"internal-error"),_n(d,e.name),_n(f,e.name),M(typeof x=="boolean",e,"internal-error"),M(typeof S=="boolean",e,"internal-error"),_n(m,e.name),_n(y,e.name),_n(_,e.name),_n(k,e.name),_n(v,e.name),_n(p,e.name);const j=new Zt({uid:g,auth:e,email:f,emailVerified:x,displayName:d,isAnonymous:S,photoURL:y,phoneNumber:m,tenantId:_,stsTokenManager:R,createdAt:v,lastLoginAt:p});return E&&Array.isArray(E)&&(j.providerData=E.map(O=>Object.assign({},O))),k&&(j._redirectEventId=k),j}static async _fromIdTokenResponse(e,n,r=!1){const s=new ps;s.updateFromServerResponse(n);const i=new Zt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ja(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];M(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?H_(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new ps;a.updateFromIdToken(r);const l=new Zt({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new md(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wm=new Map;function en(t){fn(t instanceof Function,"Expected a class definition");let e=wm.get(t);return e?(fn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,wm.set(t,e),e)}/**
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
 */class K_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}K_.type="NONE";const km=K_;/**
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
 */function ga(t,e,n){return`firebase:${t}:${e}:${n}`}class ms{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ga(this.userKey,s.apiKey,i),this.fullPersistenceKey=ga("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Zt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ms(en(km),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||en(km);const o=ga(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const d=Zt._fromJSON(e,u);c!==i&&(a=d),i=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new ms(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new ms(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Y_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(G_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(J_(e))return"Blackberry";if(Z_(e))return"Webos";if(q_(e))return"Safari";if((e.includes("chrome/")||Q_(e))&&!e.includes("edge/"))return"Chrome";if(X_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function G_(t=He()){return/firefox\//i.test(t)}function q_(t=He()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Q_(t=He()){return/crios\//i.test(t)}function Y_(t=He()){return/iemobile/i.test(t)}function X_(t=He()){return/android/i.test(t)}function J_(t=He()){return/blackberry/i.test(t)}function Z_(t=He()){return/webos/i.test(t)}function zh(t=He()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function hI(t=He()){var e;return zh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function fI(){return b1()&&document.documentMode===10}function e0(t=He()){return zh(t)||X_(t)||Z_(t)||J_(t)||/windows phone/i.test(t)||Y_(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t0(t,e=[]){let n;switch(t){case"Browser":n=xm(He());break;case"Worker":n=`${xm(He())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ur}/${r}`}/**
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
 */class pI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function mI(t,e={}){return gn(t,"GET","/v2/passwordPolicy",sr(t,e))}/**
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
 */const gI=6;class yI{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:gI,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vI{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Em(this),this.idTokenSubscription=new Em(this),this.beforeStateQueue=new pI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=U_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=en(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await ms.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await V_(this,{idToken:e}),r=await Zt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(jt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return M(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ja(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Xb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(jt(this.app))return Promise.reject(sn(this));const n=e?re(e):null;return n&&M(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&M(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return jt(this.app)?Promise.reject(sn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return jt(this.app)?Promise.reject(sn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(en(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await mI(this),n=new yI(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new jr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await dI(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&en(e)||this._popupRedirectResolver;M(n,this,"argument-error"),this.redirectPersistenceManager=await ms.create(this,[en(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(M(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return M(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=t0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&qb(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function $r(t){return re(t)}class Em{constructor(e){this.auth=e,this.observer=null,this.addObserver=M1(n=>this.observer=n)}get next(){return M(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function _I(t){Kl=t}function n0(t){return Kl.loadJS(t)}function wI(){return Kl.recaptchaEnterpriseScript}function kI(){return Kl.gapiScript}function xI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const EI="recaptcha-enterprise",SI="NO_RECAPTCHA";class CI{constructor(e){this.type=EI,this.auth=$r(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{rI(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new nI(l);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function s(i,o,a){const l=window.grecaptcha;vm(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(c=>{o(c)}).catch(()=>{o(SI)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&vm(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=wI();l.length!==0&&(l+=a),n0(l).then(()=>{s(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Sm(t,e,n,r=!1){const s=new CI(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function gd(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Sm(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Sm(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bI(t,e){const n=Fr(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Qa(i,e??{}))return s;Tt(s,"already-initialized")}return n.initialize({options:e})}function II(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(en);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function NI(t,e,n){const r=$r(t);M(r._canInitEmulator,r,"emulator-config-failed"),M(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=r0(e),{host:o,port:a}=TI(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),RI()}function r0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function TI(t){const e=r0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Cm(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Cm(o)}}}function Cm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function RI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Jt("not implemented")}_getIdTokenResponse(e){return Jt("not implemented")}_linkToIdToken(e,n){return Jt("not implemented")}_getReauthenticationResolver(e){return Jt("not implemented")}}async function PI(t,e){return gn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AI(t,e){return _o(t,"POST","/v1/accounts:signInWithPassword",sr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OI(t,e){return _o(t,"POST","/v1/accounts:signInWithEmailLink",sr(t,e))}async function DI(t,e){return _o(t,"POST","/v1/accounts:signInWithEmailLink",sr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi extends Wh{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Zi(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Zi(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return gd(e,n,"signInWithPassword",AI);case"emailLink":return OI(e,{email:this._email,oobCode:this._password});default:Tt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return gd(e,r,"signUpPassword",PI);case"emailLink":return DI(e,{idToken:n,email:this._email,oobCode:this._password});default:Tt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gs(t,e){return _o(t,"POST","/v1/accounts:signInWithIdp",sr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MI="http://localhost";class br extends Wh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new br(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Tt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=jh(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new br(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return gs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,gs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,gs(e,n)}buildRequest(){const e={requestUri:MI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=zs(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LI(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function jI(t){const e=fi(pi(t)).link,n=e?fi(pi(e)).deep_link_id:null,r=fi(pi(t)).deep_link_id;return(r?fi(pi(r)).link:null)||r||n||e||t}class Bh{constructor(e){var n,r,s,i,o,a;const l=fi(pi(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(r=l.oobCode)!==null&&r!==void 0?r:null,d=LI((s=l.mode)!==null&&s!==void 0?s:null);M(c&&u&&d,"argument-error"),this.apiKey=c,this.operation=d,this.code=u,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=jI(e);try{return new Bh(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(){this.providerId=Ws.PROVIDER_ID}static credential(e,n){return Zi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Bh.parseLink(n);return M(r,"argument-error"),Zi._fromEmailAndCode(e,r.code,r.tenantId)}}Ws.PROVIDER_ID="password";Ws.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ws.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s0{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class wo extends s0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn extends wo{constructor(){super("facebook.com")}static credential(e){return br._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Cn.credentialFromTaggedObject(e)}static credentialFromError(e){return Cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Cn.credential(e.oauthAccessToken)}catch{return null}}}Cn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Cn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn extends wo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return br._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return bn.credential(n,r)}catch{return null}}}bn.GOOGLE_SIGN_IN_METHOD="google.com";bn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In extends wo{constructor(){super("github.com")}static credential(e){return br._fromParams({providerId:In.PROVIDER_ID,signInMethod:In.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return In.credentialFromTaggedObject(e)}static credentialFromError(e){return In.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return In.credential(e.oauthAccessToken)}catch{return null}}}In.GITHUB_SIGN_IN_METHOD="github.com";In.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn extends wo{constructor(){super("twitter.com")}static credential(e,n){return br._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Nn.credential(n,r)}catch{return null}}}Nn.TWITTER_SIGN_IN_METHOD="twitter.com";Nn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FI(t,e){return _o(t,"POST","/v1/accounts:signUp",sr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Zt._fromIdTokenResponse(e,r,s),o=bm(r);return new Ir({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=bm(r);return new Ir({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function bm(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za extends Vt{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Za.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Za(e,n,r,s)}}function i0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Za._fromErrorAndOperation(t,i,e,r):i})}async function UI(t,e,n=!1){const r=await Ns(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ir._forOperation(t,"link",r)}/**
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
 */async function $I(t,e,n=!1){const{auth:r}=t;if(jt(r.app))return Promise.reject(sn(r));const s="reauthenticate";try{const i=await Ns(t,i0(r,s,e,t),n);M(i.idToken,r,"internal-error");const o=$h(i.idToken);M(o,r,"internal-error");const{sub:a}=o;return M(t.uid===a,r,"user-mismatch"),Ir._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Tt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function o0(t,e,n=!1){if(jt(t.app))return Promise.reject(sn(t));const r="signIn",s=await i0(t,r,e),i=await Ir._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function zI(t,e){return o0($r(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function a0(t){const e=$r(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function WI(t,e,n){if(jt(t.app))return Promise.reject(sn(t));const r=$r(t),o=await gd(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",FI).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&a0(t),l}),a=await Ir._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function BI(t,e,n){return jt(t.app)?Promise.reject(sn(t)):zI(re(t),Ws.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&a0(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VI(t,e){return gn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HI(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=re(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Ns(r,VI(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function KI(t,e,n,r){return re(t).onIdTokenChanged(e,n,r)}function GI(t,e,n){return re(t).beforeAuthStateChanged(e,n)}function qI(t,e,n,r){return re(t).onAuthStateChanged(e,n,r)}function QI(t){return re(t).signOut()}const el="__sak";/**
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
 */class l0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(el,"1"),this.storage.removeItem(el),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YI=1e3,XI=10;class c0 extends l0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=e0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);fI()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,XI):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},YI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}c0.type="LOCAL";const JI=c0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u0 extends l0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}u0.type="SESSION";const d0=u0;/**
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
 */function ZI(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Gl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Gl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,i)),l=await ZI(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Gl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class eN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const c=Vh("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(d){const f=d;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(u),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(){return window}function tN(t){Wt().location.href=t}/**
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
 */function h0(){return typeof Wt().WorkerGlobalScope<"u"&&typeof Wt().importScripts=="function"}async function nN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function rN(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function sN(){return h0()?self:null}/**
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
 */const f0="firebaseLocalStorageDb",iN=1,tl="firebaseLocalStorage",p0="fbase_key";class ko{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ql(t,e){return t.transaction([tl],e?"readwrite":"readonly").objectStore(tl)}function oN(){const t=indexedDB.deleteDatabase(f0);return new ko(t).toPromise()}function yd(){const t=indexedDB.open(f0,iN);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(tl,{keyPath:p0})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(tl)?e(r):(r.close(),await oN(),e(await yd()))})})}async function Im(t,e,n){const r=ql(t,!0).put({[p0]:e,value:n});return new ko(r).toPromise()}async function aN(t,e){const n=ql(t,!1).get(e),r=await new ko(n).toPromise();return r===void 0?null:r.value}function Nm(t,e){const n=ql(t,!0).delete(e);return new ko(n).toPromise()}const lN=800,cN=3;class m0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await yd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>cN)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return h0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Gl._getInstance(sN()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await nN(),!this.activeServiceWorker)return;this.sender=new eN(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||rN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await yd();return await Im(e,el,"1"),await Nm(e,el),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Im(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>aN(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Nm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ql(s,!1).getAll();return new ko(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),lN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}m0.type="LOCAL";const uN=m0;new vo(3e4,6e4);/**
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
 */function dN(t,e){return e?en(e):(M(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Hh extends Wh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return gs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return gs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return gs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function hN(t){return o0(t.auth,new Hh(t),t.bypassAuthState)}function fN(t){const{auth:e,user:n}=t;return M(n,e,"internal-error"),$I(n,new Hh(t),t.bypassAuthState)}async function pN(t){const{auth:e,user:n}=t;return M(n,e,"internal-error"),UI(n,new Hh(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g0{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return hN;case"linkViaPopup":case"linkViaRedirect":return pN;case"reauthViaPopup":case"reauthViaRedirect":return fN;default:Tt(this.auth,"internal-error")}}resolve(e){fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mN=new vo(2e3,1e4);class is extends g0{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,is.currentPopupAction&&is.currentPopupAction.cancel(),is.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return M(e,this.auth,"internal-error"),e}async onExecution(){fn(this.filter.length===1,"Popup operations only handle one event");const e=Vh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(zt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(zt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,is.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(zt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,mN.get())};e()}}is.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gN="pendingRedirect",ya=new Map;class yN extends g0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ya.get(this.auth._key());if(!e){try{const r=await vN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ya.set(this.auth._key(),e)}return this.bypassAuthState||ya.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function vN(t,e){const n=kN(e),r=wN(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function _N(t,e){ya.set(t._key(),e)}function wN(t){return en(t._redirectPersistence)}function kN(t){return ga(gN,t.config.apiKey,t.name)}async function xN(t,e,n=!1){if(jt(t.app))return Promise.reject(sn(t));const r=$r(t),s=dN(r,e),o=await new yN(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EN=10*60*1e3;class SN{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!CN(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!y0(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(zt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=EN&&this.cachedEventUids.clear(),this.cachedEventUids.has(Tm(e))}saveEventToCache(e){this.cachedEventUids.add(Tm(e)),this.lastProcessedEventTime=Date.now()}}function Tm(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function y0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function CN(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return y0(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bN(t,e={}){return gn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,NN=/^https?/;async function TN(t){if(t.config.emulator)return;const{authorizedDomains:e}=await bN(t);for(const n of e)try{if(RN(n))return}catch{}Tt(t,"unauthorized-domain")}function RN(t){const e=pd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!NN.test(n))return!1;if(IN.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const PN=new vo(3e4,6e4);function Rm(){const t=Wt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function AN(t){return new Promise((e,n)=>{var r,s,i;function o(){Rm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Rm(),n(zt(t,"network-request-failed"))},timeout:PN.get()})}if(!((s=(r=Wt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Wt().gapi)===null||i===void 0)&&i.load)o();else{const a=xI("iframefcb");return Wt()[a]=()=>{gapi.load?o():n(zt(t,"network-request-failed"))},n0(`${kI()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw va=null,e})}let va=null;function ON(t){return va=va||AN(t),va}/**
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
 */const DN=new vo(5e3,15e3),MN="__/auth/iframe",LN="emulator/auth/iframe",jN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},FN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function UN(t){const e=t.config;M(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Uh(e,LN):`https://${t.config.authDomain}/${MN}`,r={apiKey:e.apiKey,appName:t.name,v:Ur},s=FN.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${zs(r).slice(1)}`}async function $N(t){const e=await ON(t),n=Wt().gapi;return M(n,t,"internal-error"),e.open({where:document.body,url:UN(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:jN,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=zt(t,"network-request-failed"),a=Wt().setTimeout(()=>{i(o)},DN.get());function l(){Wt().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const zN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},WN=500,BN=600,VN="_blank",HN="http://localhost";class Pm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function KN(t,e,n,r=WN,s=BN){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},zN),{width:r.toString(),height:s.toString(),top:i,left:o}),c=He().toLowerCase();n&&(a=Q_(c)?VN:n),G_(c)&&(e=e||HN,l.scrollbars="yes");const u=Object.entries(l).reduce((f,[m,y])=>`${f}${m}=${y},`,"");if(hI(c)&&a!=="_self")return GN(e||"",a),new Pm(null);const d=window.open(e||"",a,u);M(d,t,"popup-blocked");try{d.focus()}catch{}return new Pm(d)}function GN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const qN="__/auth/handler",QN="emulator/auth/handler",YN=encodeURIComponent("fac");async function Am(t,e,n,r,s,i){M(t.config.authDomain,t,"auth-domain-config-required"),M(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ur,eventId:s};if(e instanceof s0){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Ga(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries({}))o[u]=d}if(e instanceof wo){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${YN}=${encodeURIComponent(l)}`:"";return`${XN(t)}?${zs(a).slice(1)}${c}`}function XN({config:t}){return t.emulator?Uh(t,QN):`https://${t.authDomain}/${qN}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qc="webStorageSupport";class JN{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=d0,this._completeRedirectFn=xN,this._overrideRedirectResult=_N}async _openPopup(e,n,r,s){var i;fn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Am(e,n,r,pd(),s);return KN(e,o,Vh())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Am(e,n,r,pd(),s);return tN(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(fn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await $N(e),r=new SN(e);return n.register("authEvent",s=>(M(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Qc,{type:Qc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Qc];o!==void 0&&n(!!o),Tt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=TN(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return e0()||q_()||zh()}}const ZN=JN;var Om="@firebase/auth",Dm="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){M(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tT(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function nT(t){Nt(new gt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;M(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:t0(t)},c=new vI(r,s,i,l);return II(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Nt(new gt("auth-internal",e=>{const n=$r(e.getProvider("auth").getImmediate());return(r=>new eT(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),et(Om,Dm,tT(t)),et(Om,Dm,"esm2017")}/**
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
 */const rT=5*60,sT=I_("authIdTokenMaxAge")||rT;let Mm=null;const iT=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>sT)return;const s=n==null?void 0:n.token;Mm!==s&&(Mm=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function oT(t=Hl()){const e=Fr(t,"auth");if(e.isInitialized())return e.getImmediate();const n=bI(t,{popupRedirectResolver:ZN,persistence:[uN,JI,d0]}),r=I_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=iT(i.toString());GI(n,o,()=>o(n.currentUser)),KI(n,a=>o(a))}}const s=S_("auth");return s&&NI(n,`http://${s}`),n}function aT(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}_I({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=zt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",aT().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});nT("Browser");var Lm={};const jm="@firebase/database",Fm="1.0.8";/**
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
 */let v0="";function lT(t){v0=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cT{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ke(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Xi(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uT{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Rt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _0=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new cT(e)}}catch{}return new uT},pr=_0("localStorage"),dT=_0("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ys=new Mh("@firebase/database"),w0=function(){let t=1;return function(){return t++}}(),k0=function(t){const e=F1(t),n=new D1;n.update(e);const r=n.digest();return Ah.encodeByteArray(r)},xo=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=xo.apply(null,r):typeof r=="object"?e+=ke(r):e+=r,e+=" "}return e};let Ci=null,Um=!0;const hT=function(t,e){I(!0,"Can't turn on custom loggers persistently."),ys.logLevel=J.VERBOSE,Ci=ys.log.bind(ys)},Ne=function(...t){if(Um===!0&&(Um=!1,Ci===null&&dT.get("logging_enabled")===!0&&hT()),Ci){const e=xo.apply(null,t);Ci(e)}},Eo=function(t){return function(...e){Ne(t,...e)}},vd=function(...t){const e="FIREBASE INTERNAL ERROR: "+xo(...t);ys.error(e)},pn=function(...t){const e=`FIREBASE FATAL ERROR: ${xo(...t)}`;throw ys.error(e),new Error(e)},Ve=function(...t){const e="FIREBASE WARNING: "+xo(...t);ys.warn(e)},fT=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ve("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Ql=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},pT=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Ts="[MIN_NAME]",Nr="[MAX_NAME]",zr=function(t,e){if(t===e)return 0;if(t===Ts||e===Nr)return-1;if(e===Ts||t===Nr)return 1;{const n=$m(t),r=$m(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},mT=function(t,e){return t===e?0:t<e?-1:1},ri=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ke(e))},Kh=function(t){if(typeof t!="object"||t===null)return ke(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=ke(e[r]),n+=":",n+=Kh(t[e[r]]);return n+="}",n},x0=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let s=0;s<n;s+=e)s+e>n?r.push(t.substring(s,n)):r.push(t.substring(s,s+e));return r};function Re(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const E0=function(t){I(!Ql(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let s,i,o,a,l;t===0?(i=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),i=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(i=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(i%2?1:0),i=Math.floor(i/2);c.push(s?1:0),c.reverse();const u=c.join("");let d="";for(l=0;l<64;l+=8){let f=parseInt(u.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),d=d+f}return d.toLowerCase()},gT=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},yT=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function vT(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const _T=new RegExp("^-?(0*)\\d{1,10}$"),wT=-2147483648,kT=2147483647,$m=function(t){if(_T.test(t)){const e=Number(t);if(e>=wT&&e<=kT)return e}return null},Bs=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ve("Exception was thrown by user callback.",n),e},Math.floor(0))}},xT=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},bi=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class ET{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Ve(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ST{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ne("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ve(e)}}class _a{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}_a.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gh="5",S0="v",C0="s",b0="r",I0="f",N0=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,T0="ls",R0="p",_d="ac",P0="websocket",A0="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O0{constructor(e,n,r,s,i=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=s,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=pr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&pr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function CT(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function D0(t,e,n){I(typeof e=="string","typeof type must == string"),I(typeof n=="object","typeof params must == object");let r;if(e===P0)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===A0)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);CT(t)&&(n.ns=t.namespace);const s=[];return Re(n,(i,o)=>{s.push(i+"="+o)}),r+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bT{constructor(){this.counters_={}}incrementCounter(e,n=1){Rt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return v1(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yc={},Xc={};function qh(t){const e=t.toString();return Yc[e]||(Yc[e]=new bT),Yc[e]}function IT(t,e){const n=t.toString();return Xc[n]||(Xc[n]=e()),Xc[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NT{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<r.length;++s)r[s]&&Bs(()=>{this.onMessage_(r[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zm="start",TT="close",RT="pLPCommand",PT="pRTLPCB",M0="id",L0="pw",j0="ser",AT="cb",OT="seg",DT="ts",MT="d",LT="dframe",F0=1870,U0=30,jT=F0-U0,FT=25e3,UT=3e4;class os{constructor(e,n,r,s,i,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Eo(e),this.stats_=qh(n),this.urlFn=l=>(this.appCheckToken&&(l[_d]=this.appCheckToken),D0(n,A0,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new NT(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(UT)),pT(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Qh((...i)=>{const[o,a,l,c,u]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===zm)this.id=a,this.password=l;else if(o===TT)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[zm]="t",r[j0]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[AT]=this.scriptTagHolder.uniqueCallbackIdentifier),r[S0]=Gh,this.transportSessionId&&(r[C0]=this.transportSessionId),this.lastSessionId&&(r[T0]=this.lastSessionId),this.applicationId&&(r[R0]=this.applicationId),this.appCheckToken&&(r[_d]=this.appCheckToken),typeof location<"u"&&location.hostname&&N0.test(location.hostname)&&(r[b0]=I0);const s=this.urlFn(r);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){os.forceAllow_=!0}static forceDisallow(){os.forceDisallow_=!0}static isAvailable(){return os.forceAllow_?!0:!os.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!gT()&&!yT()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ke(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=x_(n),s=x0(r,jT);for(let i=0;i<s.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[i]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[LT]="t",r[M0]=e,r[L0]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ke(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Qh{constructor(e,n,r,s){this.onDisconnect=r,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=w0(),window[RT+this.uniqueCallbackIdentifier]=e,window[PT+this.uniqueCallbackIdentifier]=n,this.myIFrame=Qh.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Ne("frame writing exception"),a.stack&&Ne(a.stack),Ne(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Ne("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[M0]=this.myID,e[L0]=this.myPW,e[j0]=this.currentSerial;let n=this.urlFn(e),r="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+U0+r.length<=F0;){const o=this.pendingSegs.shift();r=r+"&"+OT+s+"="+o.seg+"&"+DT+s+"="+o.ts+"&"+MT+s+"="+o.d,s++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(r,Math.floor(FT)),i=()=>{clearTimeout(s),r()};this.addTag(e,i)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const s=r.readyState;(!s||s==="loaded"||s==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Ne("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $T=16384,zT=45e3;let nl=null;typeof MozWebSocket<"u"?nl=MozWebSocket:typeof WebSocket<"u"&&(nl=WebSocket);class xt{constructor(e,n,r,s,i,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Eo(this.connId),this.stats_=qh(n),this.connURL=xt.connectionURL_(n,o,a,s,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,s,i){const o={};return o[S0]=Gh,typeof location<"u"&&location.hostname&&N0.test(location.hostname)&&(o[b0]=I0),n&&(o[C0]=n),r&&(o[T0]=r),s&&(o[_d]=s),i&&(o[R0]=i),D0(e,P0,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,pr.set("previous_websocket_failure",!0);try{let r;I1(),this.mySock=new nl(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){xt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&nl!==null&&!xt.forceDisallow_}static previouslyFailed(){return pr.isInMemoryStorage||pr.get("previous_websocket_failure")===!0}markConnectionHealthy(){pr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Xi(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(I(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=ke(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=x0(n,$T);r.length>1&&this.sendString_(String(r.length));for(let s=0;s<r.length;s++)this.sendString_(r[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(zT))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}xt.responsesRequiredToBeHealthy=2;xt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[os,xt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=xt&&xt.isAvailable();let r=n&&!xt.previouslyFailed();if(e.webSocketOnly&&(n||Ve("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[xt];else{const s=this.transports_=[];for(const i of eo.ALL_TRANSPORTS)i&&i.isAvailable()&&s.push(i);eo.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}eo.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WT=6e4,BT=5e3,VT=10*1024,HT=100*1024,Jc="t",Wm="d",KT="s",Bm="r",GT="e",Vm="o",Hm="a",Km="n",Gm="p",qT="h";class QT{constructor(e,n,r,s,i,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=s,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Eo("c:"+this.id+":"),this.transportManager_=new eo(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=bi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>HT?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>VT?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Jc in e){const n=e[Jc];n===Hm?this.upgradeIfSecondaryHealthy_():n===Bm?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Vm&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ri("t",e),r=ri("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Gm,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Hm,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Km,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ri("t",e),r=ri("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ri(Jc,e);if(Wm in e){const r=e[Wm];if(n===qT){const s=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===Km){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===KT?this.onConnectionShutdown_(r):n===Bm?this.onReset_(r):n===GT?vd("Server Error: "+r):n===Vm?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):vd("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Gh!==r&&Ve("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),bi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(WT))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):bi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(BT))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Gm,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(pr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $0{put(e,n,r,s){}merge(e,n,r,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z0{constructor(e){this.allowedEvents_=e,this.listeners_={},I(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let s=0;s<r.length;s++)r[s].callback.apply(r[s].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const s=this.getInitialEvent(e);s&&n.apply(r,s)}off(e,n,r){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let i=0;i<s.length;i++)if(s[i].callback===n&&(!r||r===s[i].context)){s.splice(i,1);return}}validateEventType_(e){I(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl extends z0{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Dh()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new rl}getInitialEvent(e){return I(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qm=32,Qm=768;class X{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[r]=this.pieces_[s],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function q(){return new X("")}function U(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function qn(t){return t.pieces_.length-t.pieceNum_}function ee(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new X(t.pieces_,e)}function Yh(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function YT(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function to(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function W0(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new X(e,0)}function ue(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof X)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let s=0;s<r.length;s++)r[s].length>0&&n.push(r[s])}return new X(n,0)}function $(t){return t.pieceNum_>=t.pieces_.length}function We(t,e){const n=U(t),r=U(e);if(n===null)return e;if(n===r)return We(ee(t),ee(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function XT(t,e){const n=to(t,0),r=to(e,0);for(let s=0;s<n.length&&s<r.length;s++){const i=zr(n[s],r[s]);if(i!==0)return i}return n.length===r.length?0:n.length<r.length?-1:1}function Xh(t,e){if(qn(t)!==qn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function ht(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(qn(t)>qn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class JT{constructor(e,n){this.errorPrefix_=n,this.parts_=to(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Bl(this.parts_[r]);B0(this)}}function ZT(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Bl(e),B0(t)}function eR(t){const e=t.parts_.pop();t.byteLength_-=Bl(e),t.parts_.length>0&&(t.byteLength_-=1)}function B0(t){if(t.byteLength_>Qm)throw new Error(t.errorPrefix_+"has a key path longer than "+Qm+" bytes ("+t.byteLength_+").");if(t.parts_.length>qm)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+qm+") or object contains a cycle "+ur(t))}function ur(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh extends z0{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Jh}getInitialEvent(e){return I(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const si=1e3,tR=60*5*1e3,Ym=30*1e3,nR=1.3,rR=3e4,sR="server_kill",Xm=3;class on extends $0{constructor(e,n,r,s,i,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=s,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=on.nextPersistentConnectionId_++,this.log_=Eo("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=si,this.maxReconnectDelay_=tR,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Jh.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&rl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const s=++this.requestNumber_,i={r:s,a:e,b:n};this.log_(ke(i)),I(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),r&&(this.requestCBHash_[s]=r)}get(e){this.initConnection_();const n=new kt,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),n.promise}listen(e,n,r,s){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),I(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:r};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+r+" for "+s);const i={p:r},o="q";e.tag&&(i.q=n._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const l=a.d,c=a.s;on.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Rt(e,"w")){const r=Cr(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',i=n._path.toString();Ve(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||O1(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Ym)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=A1(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,s=>{const i=s.s,o=s.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+s),I(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,s)&&this.connected_&&this.sendUnlisten_(r,s,e._queryObject,n)}sendUnlisten_(e,n,r,s){this.log_("Unlisten on "+e+" for "+n);const i={p:e},o="n";s&&(i.q=r,i.t=s),this.sendRequest(o,i)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,s){const i={p:n,d:r};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,r,s){this.putInternal("p",e,n,r,s)}merge(e,n,r,s){this.putInternal("m",e,n,r,s)}putInternal(e,n,r,s,i){this.initConnection_();const o={p:n,d:r};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,i=>{this.log_(n+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(i.s,i.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const i=r.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ke(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):vd("Unrecognized action received from server: "+ke(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){I(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=si,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=si,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>rR&&(this.reconnectDelay_=si),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*nR)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+on.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(d){I(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Ne("getToken() completed but was canceled"):(Ne("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=f&&f.token,a=new QT(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,m=>{Ve(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(sR)},i))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&Ve(d),l())}}}interrupt(e){Ne("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Ne("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ga(this.interruptReasons_)&&(this.reconnectDelay_=si,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(i=>Kh(i)).join("$"):r="default";const s=this.removeListen_(e,r);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const r=new X(e).toString();let s;if(this.listens.has(r)){const i=this.listens.get(r);s=i.get(n),i.delete(n),i.size===0&&this.listens.delete(r)}else s=void 0;return s}onAuthRevoked_(e,n){Ne("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Xm&&(this.reconnectDelay_=Ym,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Ne("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Xm&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+v0.replace(/\./g,"-")]=1,Dh()?e["framework.cordova"]=1:T_()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=rl.getInstance().currentlyOnline();return Ga(this.interruptReasons_)&&e}}on.nextPersistentConnectionId_=0;on.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Yl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new z(Ts,e),s=new z(Ts,n);return this.compare(r,s)!==0}minPost(){return z.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xo;class V0 extends Yl{static get __EMPTY_NODE(){return Xo}static set __EMPTY_NODE(e){Xo=e}compare(e,n){return zr(e.name,n.name)}isDefinedOn(e){throw $s("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return z.MIN}maxPost(){return new z(Nr,Xo)}makePost(e,n){return I(typeof e=="string","KeyIndex indexValue must always be a string."),new z(e,Xo)}toString(){return".key"}}const vs=new V0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(e,n,r,s,i=null){this.isReverse_=s,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ie{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Ie.RED,this.left=s??Ye.EMPTY_NODE,this.right=i??Ye.EMPTY_NODE}copy(e,n,r,s,i){return new Ie(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return i<0?s=s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ye.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,s;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Ye.EMPTY_NODE;s=r.right.min_(),r=r.copy(s.key,s.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ie.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ie.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ie.RED=!0;Ie.BLACK=!1;class iR{copy(e,n,r,s,i){return this}insert(e,n,r){return new Ie(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ye{constructor(e,n=Ye.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Ye(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ie.BLACK,null,null))}remove(e){return new Ye(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ie.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,s=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return s?s.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(s=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Jo(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Jo(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Jo(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Jo(this.root_,null,this.comparator_,!0,e)}}Ye.EMPTY_NODE=new iR;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oR(t,e){return zr(t.name,e.name)}function Zh(t,e){return zr(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wd;function aR(t){wd=t}const H0=function(t){return typeof t=="number"?"number:"+E0(t):"string:"+t},K0=function(t){if(t.isLeafNode()){const e=t.val();I(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Rt(e,".sv"),"Priority must be a string or number.")}else I(t===wd||t.isEmpty(),"priority of unexpected type.");I(t===wd||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jm;class Ce{constructor(e,n=Ce.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,I(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),K0(this.priorityNode_)}static set __childrenNodeConstructor(e){Jm=e}static get __childrenNodeConstructor(){return Jm}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ce(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ce.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return $(e)?this:U(e)===".priority"?this.priorityNode_:Ce.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ce.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=U(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(I(r!==".priority"||qn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Ce.__childrenNodeConstructor.EMPTY_NODE.updateChild(ee(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+H0(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=E0(this.value_):e+=this.value_,this.lazyHash_=k0(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ce.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ce.__childrenNodeConstructor?-1:(I(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,s=Ce.VALUE_TYPE_ORDER.indexOf(n),i=Ce.VALUE_TYPE_ORDER.indexOf(r);return I(s>=0,"Unknown leaf type: "+n),I(i>=0,"Unknown leaf type: "+r),s===i?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ce.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let G0,q0;function lR(t){G0=t}function cR(t){q0=t}class uR extends Yl{compare(e,n){const r=e.node.getPriority(),s=n.node.getPriority(),i=r.compareTo(s);return i===0?zr(e.name,n.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return z.MIN}maxPost(){return new z(Nr,new Ce("[PRIORITY-POST]",q0))}makePost(e,n){const r=G0(e);return new z(n,new Ce("[PRIORITY-POST]",r))}toString(){return".priority"}}const ae=new uR;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dR=Math.log(2);class hR{constructor(e){const n=i=>parseInt(Math.log(i)/dR,10),r=i=>parseInt(Array(i+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=r(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const sl=function(t,e,n,r){t.sort(e);const s=function(l,c){const u=c-l;let d,f;if(u===0)return null;if(u===1)return d=t[l],f=n?n(d):d,new Ie(f,d.node,Ie.BLACK,null,null);{const m=parseInt(u/2,10)+l,y=s(l,m),_=s(m+1,c);return d=t[m],f=n?n(d):d,new Ie(f,d.node,Ie.BLACK,y,_)}},i=function(l){let c=null,u=null,d=t.length;const f=function(y,_){const k=d-y,v=d;d-=y;const p=s(k+1,v),g=t[k],x=n?n(g):g;m(new Ie(x,g.node,_,null,p))},m=function(y){c?(c.left=y,c=y):(u=y,c=y)};for(let y=0;y<l.count;++y){const _=l.nextBitIsOne(),k=Math.pow(2,l.count-(y+1));_?f(k,Ie.BLACK):(f(k,Ie.BLACK),f(k,Ie.RED))}return u},o=new hR(t.length),a=i(o);return new Ye(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zc;const Kr={};class tn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return I(Kr&&ae,"ChildrenNode.ts has not been loaded"),Zc=Zc||new tn({".priority":Kr},{".priority":ae}),Zc}get(e){const n=Cr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Ye?n:null}hasIndex(e){return Rt(this.indexSet_,e.toString())}addIndex(e,n){I(e!==vs,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let s=!1;const i=n.getIterator(z.Wrap);let o=i.getNext();for(;o;)s=s||e.isDefinedOn(o.node),r.push(o),o=i.getNext();let a;s?a=sl(r,e.getCompare()):a=Kr;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new tn(u,c)}addToIndexes(e,n){const r=qa(this.indexes_,(s,i)=>{const o=Cr(this.indexSet_,i);if(I(o,"Missing index implementation for "+i),s===Kr)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(z.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),sl(a,o.getCompare())}else return Kr;else{const a=n.get(e.name);let l=s;return a&&(l=l.remove(new z(e.name,a))),l.insert(e,e.node)}});return new tn(r,this.indexSet_)}removeFromIndexes(e,n){const r=qa(this.indexes_,s=>{if(s===Kr)return s;{const i=n.get(e.name);return i?s.remove(new z(e.name,i)):s}});return new tn(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ii;class D{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&K0(this.priorityNode_),this.children_.isEmpty()&&I(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ii||(ii=new D(new Ye(Zh),null,tn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ii}updatePriority(e){return this.children_.isEmpty()?this:new D(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ii:n}}getChild(e){const n=U(e);return n===null?this:this.getImmediateChild(n).getChild(ee(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(I(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new z(e,n);let s,i;n.isEmpty()?(s=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(r,this.children_)):(s=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(r,this.children_));const o=s.isEmpty()?ii:this.priorityNode_;return new D(s,o,i)}}updateChild(e,n){const r=U(e);if(r===null)return n;{I(U(e)!==".priority"||qn(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(r).updateChild(ee(e),n);return this.updateImmediateChild(r,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,s=0,i=!0;if(this.forEachChild(ae,(o,a)=>{n[o]=a.val(e),r++,i&&D.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):i=!1}),!e&&i&&s<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+H0(this.getPriority().val())+":"),this.forEachChild(ae,(n,r)=>{const s=r.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":k0(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const s=this.resolveIndex_(r);if(s){const i=s.getPredecessorKey(new z(e,n));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new z(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new z(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,z.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)<0;)s.getNext(),i=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,z.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)>0;)s.getNext(),i=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===So?-1:0}withIndex(e){if(e===vs||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new D(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===vs||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(ae),s=n.getIterator(ae);let i=r.getNext(),o=s.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=r.getNext(),o=s.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===vs?null:this.indexMap_.get(e.toString())}}D.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class fR extends D{constructor(){super(new Ye(Zh),D.EMPTY_NODE,tn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return D.EMPTY_NODE}isEmpty(){return!1}}const So=new fR;Object.defineProperties(z,{MIN:{value:new z(Ts,D.EMPTY_NODE)},MAX:{value:new z(Nr,So)}});V0.__EMPTY_NODE=D.EMPTY_NODE;Ce.__childrenNodeConstructor=D;aR(So);cR(So);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pR=!0;function ce(t,e=null){if(t===null)return D.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),I(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ce(n,ce(e))}if(!(t instanceof Array)&&pR){const n=[];let r=!1;if(Re(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=ce(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new z(o,l)))}}),n.length===0)return D.EMPTY_NODE;const i=sl(n,oR,o=>o.name,Zh);if(r){const o=sl(n,ae.getCompare());return new D(i,ce(e),new tn({".priority":o},{".priority":ae}))}else return new D(i,ce(e),tn.Default)}else{let n=D.EMPTY_NODE;return Re(t,(r,s)=>{if(Rt(t,r)&&r.substring(0,1)!=="."){const i=ce(s);(i.isLeafNode()||!i.isEmpty())&&(n=n.updateImmediateChild(r,i))}}),n.updatePriority(ce(e))}}lR(ce);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mR extends Yl{constructor(e){super(),this.indexPath_=e,I(!$(e)&&U(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),s=this.extractChild(n.node),i=r.compareTo(s);return i===0?zr(e.name,n.name):i}makePost(e,n){const r=ce(e),s=D.EMPTY_NODE.updateChild(this.indexPath_,r);return new z(n,s)}maxPost(){const e=D.EMPTY_NODE.updateChild(this.indexPath_,So);return new z(Nr,e)}toString(){return to(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gR extends Yl{compare(e,n){const r=e.node.compareTo(n.node);return r===0?zr(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return z.MIN}maxPost(){return z.MAX}makePost(e,n){const r=ce(e);return new z(n,r)}toString(){return".value"}}const yR=new gR;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q0(t){return{type:"value",snapshotNode:t}}function Rs(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function no(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ro(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function vR(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(e){this.index_=e}updateChild(e,n,r,s,i,o){I(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(s).equals(r.getChild(s))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(no(n,a)):I(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Rs(n,r)):o.trackChildChange(ro(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(ae,(s,i)=>{n.hasChild(s)||r.trackChildChange(no(s,i))}),n.isLeafNode()||n.forEachChild(ae,(s,i)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(i)||r.trackChildChange(ro(s,i,o))}else r.trackChildChange(Rs(s,i))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?D.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e){this.indexedFilter_=new ef(e.getIndex()),this.index_=e.getIndex(),this.startPost_=so.getStartPost_(e),this.endPost_=so.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,s,i,o){return this.matches(new z(n,r))||(r=D.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,s,i,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=D.EMPTY_NODE);let s=n.withIndex(this.index_);s=s.updatePriority(D.EMPTY_NODE);const i=this;return n.forEachChild(ae,(o,a)=>{i.matches(new z(o,a))||(s=s.updateImmediateChild(o,D.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _R{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new so(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,s,i,o){return this.rangedFilter_.matches(new z(n,r))||(r=D.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,s,i,o):this.fullLimitUpdateChild_(e,n,r,i,o)}updateFullNode(e,n,r){let s;if(n.isLeafNode()||n.isEmpty())s=D.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){s=D.EMPTY_NODE.withIndex(this.index_);let i;this.reverse_?i=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):i=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;i.hasNext()&&o<this.limit_;){const a=i.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=n.withIndex(this.index_),s=s.updatePriority(D.EMPTY_NODE);let i;this.reverse_?i=s.getReverseIterator(this.index_):i=s.getIterator(this.index_);let o=0;for(;i.hasNext();){const a=i.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,D.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,s,i){let o;if(this.reverse_){const d=this.index_.getCompare();o=(f,m)=>d(m,f)}else o=this.index_.getCompare();const a=e;I(a.numChildren()===this.limit_,"");const l=new z(n,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let f=s.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=s.getChildAfterChild(this.index_,f,this.reverse_);const m=f==null?1:o(f,l);if(u&&!r.isEmpty()&&m>=0)return i!=null&&i.trackChildChange(ro(n,r,d)),a.updateImmediateChild(n,r);{i!=null&&i.trackChildChange(no(n,d));const _=a.updateImmediateChild(n,D.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(i!=null&&i.trackChildChange(Rs(f.name,f.node)),_.updateImmediateChild(f.name,f.node)):_}}else return r.isEmpty()?e:u&&o(c,l)>=0?(i!=null&&(i.trackChildChange(no(c.name,c.node)),i.trackChildChange(Rs(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(c.name,D.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ae}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return I(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return I(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ts}hasEnd(){return this.endSet_}getIndexEndValue(){return I(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return I(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Nr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return I(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ae}copy(){const e=new tf;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function wR(t){return t.loadsAllData()?new ef(t.getIndex()):t.hasLimit()?new _R(t):new so(t)}function Zm(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ae?n="$priority":t.index_===yR?n="$value":t.index_===vs?n="$key":(I(t.index_ instanceof mR,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ke(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=ke(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+ke(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=ke(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+ke(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function eg(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ae&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il extends $0{constructor(e,n,r,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.log_=Eo("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(I(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,s){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=il.getListenId_(e,r),a={};this.listens_[o]=a;const l=Zm(e._queryParams);this.restRequest_(i+".json",l,(c,u)=>{let d=u;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(i,d,!1,r),Cr(this.listens_,o)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",s(f,null)}})}unlisten(e,n){const r=il.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Zm(e._queryParams),r=e._path.toString(),s=new kt;return this.restRequest_(r+".json",n,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(r,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,i])=>{s&&s.accessToken&&(n.auth=s.accessToken),i&&i.token&&(n.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+zs(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Xi(a.responseText)}catch{Ve("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&Ve("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kR{constructor(){this.rootNode_=D.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ol(){return{value:null,children:new Map}}function Vs(t,e,n){if($(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=U(e);t.children.has(r)||t.children.set(r,ol());const s=t.children.get(r);e=ee(e),Vs(s,e,n)}}function kd(t,e){if($(e))return t.value=null,t.children.clear(),!0;if(t.value!==null){if(t.value.isLeafNode())return!1;{const n=t.value;return t.value=null,n.forEachChild(ae,(r,s)=>{Vs(t,new X(r),s)}),kd(t,e)}}else if(t.children.size>0){const n=U(e);return e=ee(e),t.children.has(n)&&kd(t.children.get(n),e)&&t.children.delete(n),t.children.size===0}else return!0}function xd(t,e,n){t.value!==null?n(e,t.value):xR(t,(r,s)=>{const i=new X(e.toString()+"/"+r);xd(s,i,n)})}function xR(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ER{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Re(this.last_,(r,s)=>{n[r]=n[r]-s}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tg=10*1e3,SR=30*1e3,CR=5*60*1e3;class bR{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new ER(e);const r=tg+(SR-tg)*Math.random();bi(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Re(e,(s,i)=>{i>0&&Rt(this.statsToReport_,s)&&(n[s]=i,r=!0)}),r&&this.server_.reportStats(n),bi(this.reportStats_.bind(this),Math.floor(Math.random()*2*CR))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Et;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Et||(Et={}));function nf(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function rf(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function sf(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Et.ACK_USER_WRITE,this.source=nf()}operationForChild(e){if($(this.path)){if(this.affectedTree.value!=null)return I(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new X(e));return new al(q(),n,this.revert)}}else return I(U(this.path)===e,"operationForChild called for unrelated child."),new al(ee(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(e,n){this.source=e,this.path=n,this.type=Et.LISTEN_COMPLETE}operationForChild(e){return $(this.path)?new io(this.source,q()):new io(this.source,ee(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Et.OVERWRITE}operationForChild(e){return $(this.path)?new Tr(this.source,q(),this.snap.getImmediateChild(e)):new Tr(this.source,ee(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Et.MERGE}operationForChild(e){if($(this.path)){const n=this.children.subtree(new X(e));return n.isEmpty()?null:n.value?new Tr(this.source,q(),n.value):new Ps(this.source,q(),n)}else return I(U(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ps(this.source,ee(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if($(e))return this.isFullyInitialized()&&!this.filtered_;const n=U(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IR{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function NR(t,e,n,r){const s=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(vR(o.childName,o.snapshotNode))}),oi(t,s,"child_removed",e,r,n),oi(t,s,"child_added",e,r,n),oi(t,s,"child_moved",i,r,n),oi(t,s,"child_changed",e,r,n),oi(t,s,"value",e,r,n),s}function oi(t,e,n,r,s,i){const o=r.filter(a=>a.type===n);o.sort((a,l)=>RR(t,a,l)),o.forEach(a=>{const l=TR(t,a,i);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function TR(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function RR(t,e,n){if(e.childName==null||n.childName==null)throw $s("Should only compare child_ events.");const r=new z(e.childName,e.snapshotNode),s=new z(n.childName,n.snapshotNode);return t.index_.compare(r,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xl(t,e){return{eventCache:t,serverCache:e}}function Ii(t,e,n,r){return Xl(new Qn(e,n,r),t.serverCache)}function Y0(t,e,n,r){return Xl(t.eventCache,new Qn(e,n,r))}function ll(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Rr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eu;const PR=()=>(eu||(eu=new Ye(mT)),eu);class te{constructor(e,n=PR()){this.value=e,this.children=n}static fromObject(e){let n=new te(null);return Re(e,(r,s)=>{n=n.set(new X(r),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:q(),value:this.value};if($(e))return null;{const r=U(e),s=this.children.get(r);if(s!==null){const i=s.findRootMostMatchingPathAndValue(ee(e),n);return i!=null?{path:ue(new X(r),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if($(e))return this;{const n=U(e),r=this.children.get(n);return r!==null?r.subtree(ee(e)):new te(null)}}set(e,n){if($(e))return new te(n,this.children);{const r=U(e),i=(this.children.get(r)||new te(null)).set(ee(e),n),o=this.children.insert(r,i);return new te(this.value,o)}}remove(e){if($(e))return this.children.isEmpty()?new te(null):new te(null,this.children);{const n=U(e),r=this.children.get(n);if(r){const s=r.remove(ee(e));let i;return s.isEmpty()?i=this.children.remove(n):i=this.children.insert(n,s),this.value===null&&i.isEmpty()?new te(null):new te(this.value,i)}else return this}}get(e){if($(e))return this.value;{const n=U(e),r=this.children.get(n);return r?r.get(ee(e)):null}}setTree(e,n){if($(e))return n;{const r=U(e),i=(this.children.get(r)||new te(null)).setTree(ee(e),n);let o;return i.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,i),new te(this.value,o)}}fold(e){return this.fold_(q(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((s,i)=>{r[s]=i.fold_(ue(e,s),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,q(),n)}findOnPath_(e,n,r){const s=this.value?r(n,this.value):!1;if(s)return s;if($(e))return null;{const i=U(e),o=this.children.get(i);return o?o.findOnPath_(ee(e),ue(n,i),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,q(),n)}foreachOnPath_(e,n,r){if($(e))return this;{this.value&&r(n,this.value);const s=U(e),i=this.children.get(s);return i?i.foreachOnPath_(ee(e),ue(n,s),r):new te(null)}}foreach(e){this.foreach_(q(),e)}foreach_(e,n){this.children.inorderTraversal((r,s)=>{s.foreach_(ue(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this.writeTree_=e}static empty(){return new bt(new te(null))}}function Ni(t,e,n){if($(e))return new bt(new te(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const s=r.path;let i=r.value;const o=We(s,e);return i=i.updateChild(o,n),new bt(t.writeTree_.set(s,i))}else{const s=new te(n),i=t.writeTree_.setTree(e,s);return new bt(i)}}}function Ed(t,e,n){let r=t;return Re(n,(s,i)=>{r=Ni(r,ue(e,s),i)}),r}function ng(t,e){if($(e))return bt.empty();{const n=t.writeTree_.setTree(e,new te(null));return new bt(n)}}function Sd(t,e){return Wr(t,e)!=null}function Wr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(We(n.path,e)):null}function rg(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ae,(r,s)=>{e.push(new z(r,s))}):t.writeTree_.children.inorderTraversal((r,s)=>{s.value!=null&&e.push(new z(r,s.value))}),e}function Vn(t,e){if($(e))return t;{const n=Wr(t,e);return n!=null?new bt(new te(n)):new bt(t.writeTree_.subtree(e))}}function Cd(t){return t.writeTree_.isEmpty()}function As(t,e){return X0(q(),t.writeTree_,e)}function X0(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((s,i)=>{s===".priority"?(I(i.value!==null,"Priority writes must always be leaf nodes"),r=i.value):n=X0(ue(t,s),i,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(ue(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jl(t,e){return tw(e,t)}function AR(t,e,n,r,s){I(r>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:s}),s&&(t.visibleWrites=Ni(t.visibleWrites,e,n)),t.lastWriteId=r}function OR(t,e,n,r){I(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=Ed(t.visibleWrites,e,n),t.lastWriteId=r}function DR(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function MR(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);I(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let s=r.visible,i=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&LR(a,r.path)?s=!1:ht(r.path,a.path)&&(i=!0)),o--}if(s){if(i)return jR(t),!0;if(r.snap)t.visibleWrites=ng(t.visibleWrites,r.path);else{const a=r.children;Re(a,l=>{t.visibleWrites=ng(t.visibleWrites,ue(r.path,l))})}return!0}else return!1}function LR(t,e){if(t.snap)return ht(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&ht(ue(t.path,n),e))return!0;return!1}function jR(t){t.visibleWrites=J0(t.allWrites,FR,q()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function FR(t){return t.visible}function J0(t,e,n){let r=bt.empty();for(let s=0;s<t.length;++s){const i=t[s];if(e(i)){const o=i.path;let a;if(i.snap)ht(n,o)?(a=We(n,o),r=Ni(r,a,i.snap)):ht(o,n)&&(a=We(o,n),r=Ni(r,q(),i.snap.getChild(a)));else if(i.children){if(ht(n,o))a=We(n,o),r=Ed(r,a,i.children);else if(ht(o,n))if(a=We(o,n),$(a))r=Ed(r,q(),i.children);else{const l=Cr(i.children,U(a));if(l){const c=l.getChild(ee(a));r=Ni(r,q(),c)}}}else throw $s("WriteRecord should have .snap or .children")}}return r}function Z0(t,e,n,r,s){if(!r&&!s){const i=Wr(t.visibleWrites,e);if(i!=null)return i;{const o=Vn(t.visibleWrites,e);if(Cd(o))return n;if(n==null&&!Sd(o,q()))return null;{const a=n||D.EMPTY_NODE;return As(o,a)}}}else{const i=Vn(t.visibleWrites,e);if(!s&&Cd(i))return n;if(!s&&n==null&&!Sd(i,q()))return null;{const o=function(c){return(c.visible||s)&&(!r||!~r.indexOf(c.writeId))&&(ht(c.path,e)||ht(e,c.path))},a=J0(t.allWrites,o,e),l=n||D.EMPTY_NODE;return As(a,l)}}}function UR(t,e,n){let r=D.EMPTY_NODE;const s=Wr(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(ae,(i,o)=>{r=r.updateImmediateChild(i,o)}),r;if(n){const i=Vn(t.visibleWrites,e);return n.forEachChild(ae,(o,a)=>{const l=As(Vn(i,new X(o)),a);r=r.updateImmediateChild(o,l)}),rg(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const i=Vn(t.visibleWrites,e);return rg(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function $R(t,e,n,r,s){I(r||s,"Either existingEventSnap or existingServerSnap must exist");const i=ue(e,n);if(Sd(t.visibleWrites,i))return null;{const o=Vn(t.visibleWrites,i);return Cd(o)?s.getChild(n):As(o,s.getChild(n))}}function zR(t,e,n,r){const s=ue(e,n),i=Wr(t.visibleWrites,s);if(i!=null)return i;if(r.isCompleteForChild(n)){const o=Vn(t.visibleWrites,s);return As(o,r.getNode().getImmediateChild(n))}else return null}function WR(t,e){return Wr(t.visibleWrites,e)}function BR(t,e,n,r,s,i,o){let a;const l=Vn(t.visibleWrites,e),c=Wr(l,q());if(c!=null)a=c;else if(n!=null)a=As(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],d=o.getCompare(),f=i?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let m=f.getNext();for(;m&&u.length<s;)d(m,r)!==0&&u.push(m),m=f.getNext();return u}else return[]}function VR(){return{visibleWrites:bt.empty(),allWrites:[],lastWriteId:-1}}function cl(t,e,n,r){return Z0(t.writeTree,t.treePath,e,n,r)}function of(t,e){return UR(t.writeTree,t.treePath,e)}function sg(t,e,n,r){return $R(t.writeTree,t.treePath,e,n,r)}function ul(t,e){return WR(t.writeTree,ue(t.treePath,e))}function HR(t,e,n,r,s,i){return BR(t.writeTree,t.treePath,e,n,r,s,i)}function af(t,e,n){return zR(t.writeTree,t.treePath,e,n)}function ew(t,e){return tw(ue(t.treePath,e),t.writeTree)}function tw(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KR{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;I(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),I(r!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const i=s.type;if(n==="child_added"&&i==="child_removed")this.changeMap.set(r,ro(r,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&i==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&i==="child_changed")this.changeMap.set(r,no(r,s.oldSnap));else if(n==="child_changed"&&i==="child_added")this.changeMap.set(r,Rs(r,e.snapshotNode));else if(n==="child_changed"&&i==="child_changed")this.changeMap.set(r,ro(r,e.snapshotNode,s.oldSnap));else throw $s("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GR{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const nw=new GR;class lf{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Qn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return af(this.writes_,e,r)}}getChildAfterChild(e,n,r){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Rr(this.viewCache_),i=HR(this.writes_,s,n,1,r,e);return i.length===0?null:i[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qR(t){return{filter:t}}function QR(t,e){I(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),I(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function YR(t,e,n,r,s){const i=new KR;let o,a;if(n.type===Et.OVERWRITE){const c=n;c.source.fromUser?o=bd(t,e,c.path,c.snap,r,s,i):(I(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!$(c.path),o=dl(t,e,c.path,c.snap,r,s,a,i))}else if(n.type===Et.MERGE){const c=n;c.source.fromUser?o=JR(t,e,c.path,c.children,r,s,i):(I(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Id(t,e,c.path,c.children,r,s,a,i))}else if(n.type===Et.ACK_USER_WRITE){const c=n;c.revert?o=tP(t,e,c.path,r,s,i):o=ZR(t,e,c.path,c.affectedTree,r,s,i)}else if(n.type===Et.LISTEN_COMPLETE)o=eP(t,e,n.path,r,i);else throw $s("Unknown operation type: "+n.type);const l=i.getChanges();return XR(e,o,l),{viewCache:o,changes:l}}function XR(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),i=ll(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!r.getNode().equals(i)||!r.getNode().getPriority().equals(i.getPriority()))&&n.push(Q0(ll(e)))}}function rw(t,e,n,r,s,i){const o=e.eventCache;if(ul(r,n)!=null)return e;{let a,l;if($(n))if(I(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Rr(e),u=c instanceof D?c:D.EMPTY_NODE,d=of(r,u);a=t.filter.updateFullNode(e.eventCache.getNode(),d,i)}else{const c=cl(r,Rr(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,i)}else{const c=U(n);if(c===".priority"){I(qn(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const d=sg(r,n,u,l);d!=null?a=t.filter.updatePriority(u,d):a=o.getNode()}else{const u=ee(n);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const f=sg(r,n,o.getNode(),l);f!=null?d=o.getNode().getImmediateChild(c).updateChild(u,f):d=o.getNode().getImmediateChild(c)}else d=af(r,c,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),c,d,u,s,i):a=o.getNode()}}return Ii(e,a,o.isFullyInitialized()||$(n),t.filter.filtersNodes())}}function dl(t,e,n,r,s,i,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if($(n))c=u.updateFullNode(l.getNode(),r,null);else if(u.filtersNodes()&&!l.isFiltered()){const m=l.getNode().updateChild(n,r);c=u.updateFullNode(l.getNode(),m,null)}else{const m=U(n);if(!l.isCompleteForPath(n)&&qn(n)>1)return e;const y=ee(n),k=l.getNode().getImmediateChild(m).updateChild(y,r);m===".priority"?c=u.updatePriority(l.getNode(),k):c=u.updateChild(l.getNode(),m,k,y,nw,null)}const d=Y0(e,c,l.isFullyInitialized()||$(n),u.filtersNodes()),f=new lf(s,d,i);return rw(t,d,n,s,f,a)}function bd(t,e,n,r,s,i,o){const a=e.eventCache;let l,c;const u=new lf(s,e,i);if($(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Ii(e,c,!0,t.filter.filtersNodes());else{const d=U(n);if(d===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),l=Ii(e,c,a.isFullyInitialized(),a.isFiltered());else{const f=ee(n),m=a.getNode().getImmediateChild(d);let y;if($(f))y=r;else{const _=u.getCompleteChild(d);_!=null?Yh(f)===".priority"&&_.getChild(W0(f)).isEmpty()?y=_:y=_.updateChild(f,r):y=D.EMPTY_NODE}if(m.equals(y))l=e;else{const _=t.filter.updateChild(a.getNode(),d,y,f,u,o);l=Ii(e,_,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function ig(t,e){return t.eventCache.isCompleteForChild(e)}function JR(t,e,n,r,s,i,o){let a=e;return r.foreach((l,c)=>{const u=ue(n,l);ig(e,U(u))&&(a=bd(t,a,u,c,s,i,o))}),r.foreach((l,c)=>{const u=ue(n,l);ig(e,U(u))||(a=bd(t,a,u,c,s,i,o))}),a}function og(t,e,n){return n.foreach((r,s)=>{e=e.updateChild(r,s)}),e}function Id(t,e,n,r,s,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;$(n)?c=r:c=new te(null).setTree(n,r);const u=e.serverCache.getNode();return c.children.inorderTraversal((d,f)=>{if(u.hasChild(d)){const m=e.serverCache.getNode().getImmediateChild(d),y=og(t,m,f);l=dl(t,l,new X(d),y,s,i,o,a)}}),c.children.inorderTraversal((d,f)=>{const m=!e.serverCache.isCompleteForChild(d)&&f.value===null;if(!u.hasChild(d)&&!m){const y=e.serverCache.getNode().getImmediateChild(d),_=og(t,y,f);l=dl(t,l,new X(d),_,s,i,o,a)}}),l}function ZR(t,e,n,r,s,i,o){if(ul(s,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if($(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return dl(t,e,n,l.getNode().getChild(n),s,i,a,o);if($(n)){let c=new te(null);return l.getNode().forEachChild(vs,(u,d)=>{c=c.set(new X(u),d)}),Id(t,e,n,c,s,i,a,o)}else return e}else{let c=new te(null);return r.foreach((u,d)=>{const f=ue(n,u);l.isCompleteForPath(f)&&(c=c.set(u,l.getNode().getChild(f)))}),Id(t,e,n,c,s,i,a,o)}}function eP(t,e,n,r,s){const i=e.serverCache,o=Y0(e,i.getNode(),i.isFullyInitialized()||$(n),i.isFiltered());return rw(t,o,n,r,nw,s)}function tP(t,e,n,r,s,i){let o;if(ul(r,n)!=null)return e;{const a=new lf(r,e,s),l=e.eventCache.getNode();let c;if($(n)||U(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=cl(r,Rr(e));else{const d=e.serverCache.getNode();I(d instanceof D,"serverChildren would be complete if leaf node"),u=of(r,d)}u=u,c=t.filter.updateFullNode(l,u,i)}else{const u=U(n);let d=af(r,u,e.serverCache);d==null&&e.serverCache.isCompleteForChild(u)&&(d=l.getImmediateChild(u)),d!=null?c=t.filter.updateChild(l,u,d,ee(n),a,i):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,D.EMPTY_NODE,ee(n),a,i):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=cl(r,Rr(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,i)))}return o=e.serverCache.isFullyInitialized()||ul(r,q())!=null,Ii(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nP{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,s=new ef(r.getIndex()),i=wR(r);this.processor_=qR(i);const o=n.serverCache,a=n.eventCache,l=s.updateFullNode(D.EMPTY_NODE,o.getNode(),null),c=i.updateFullNode(D.EMPTY_NODE,a.getNode(),null),u=new Qn(l,o.isFullyInitialized(),s.filtersNodes()),d=new Qn(c,a.isFullyInitialized(),i.filtersNodes());this.viewCache_=Xl(d,u),this.eventGenerator_=new IR(this.query_)}get query(){return this.query_}}function rP(t){return t.viewCache_.serverCache.getNode()}function sP(t){return ll(t.viewCache_)}function iP(t,e){const n=Rr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!$(e)&&!n.getImmediateChild(U(e)).isEmpty())?n.getChild(e):null}function ag(t){return t.eventRegistrations_.length===0}function oP(t,e){t.eventRegistrations_.push(e)}function lg(t,e,n){const r=[];if(n){I(e==null,"A cancel should cancel all event registrations.");const s=t.query._path;t.eventRegistrations_.forEach(i=>{const o=i.createCancelEvent(n,s);o&&r.push(o)})}if(e){let s=[];for(let i=0;i<t.eventRegistrations_.length;++i){const o=t.eventRegistrations_[i];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(t.eventRegistrations_.slice(i+1));break}}t.eventRegistrations_=s}else t.eventRegistrations_=[];return r}function cg(t,e,n,r){e.type===Et.MERGE&&e.source.queryId!==null&&(I(Rr(t.viewCache_),"We should always have a full cache before handling merges"),I(ll(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,i=YR(t.processor_,s,e,n,r);return QR(t.processor_,i.viewCache),I(i.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=i.viewCache,sw(t,i.changes,i.viewCache.eventCache.getNode(),null)}function aP(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ae,(i,o)=>{r.push(Rs(i,o))}),n.isFullyInitialized()&&r.push(Q0(n.getNode())),sw(t,r,n.getNode(),e)}function sw(t,e,n,r){const s=r?[r]:t.eventRegistrations_;return NR(t.eventGenerator_,e,n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hl;class iw{constructor(){this.views=new Map}}function lP(t){I(!hl,"__referenceConstructor has already been defined"),hl=t}function cP(){return I(hl,"Reference.ts has not been loaded"),hl}function uP(t){return t.views.size===0}function cf(t,e,n,r){const s=e.source.queryId;if(s!==null){const i=t.views.get(s);return I(i!=null,"SyncTree gave us an op for an invalid query."),cg(i,e,n,r)}else{let i=[];for(const o of t.views.values())i=i.concat(cg(o,e,n,r));return i}}function ow(t,e,n,r,s){const i=e._queryIdentifier,o=t.views.get(i);if(!o){let a=cl(n,s?r:null),l=!1;a?l=!0:r instanceof D?(a=of(n,r),l=!1):(a=D.EMPTY_NODE,l=!1);const c=Xl(new Qn(a,l,!1),new Qn(r,s,!1));return new nP(e,c)}return o}function dP(t,e,n,r,s,i){const o=ow(t,e,r,s,i);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),oP(o,n),aP(o,n)}function hP(t,e,n,r){const s=e._queryIdentifier,i=[];let o=[];const a=Yn(t);if(s==="default")for(const[l,c]of t.views.entries())o=o.concat(lg(c,n,r)),ag(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||i.push(c.query));else{const l=t.views.get(s);l&&(o=o.concat(lg(l,n,r)),ag(l)&&(t.views.delete(s),l.query._queryParams.loadsAllData()||i.push(l.query)))}return a&&!Yn(t)&&i.push(new(cP())(e._repo,e._path)),{removed:i,events:o}}function aw(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Hn(t,e){let n=null;for(const r of t.views.values())n=n||iP(r,e);return n}function lw(t,e){if(e._queryParams.loadsAllData())return Zl(t);{const r=e._queryIdentifier;return t.views.get(r)}}function cw(t,e){return lw(t,e)!=null}function Yn(t){return Zl(t)!=null}function Zl(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fl;function fP(t){I(!fl,"__referenceConstructor has already been defined"),fl=t}function pP(){return I(fl,"Reference.ts has not been loaded"),fl}let mP=1;class ug{constructor(e){this.listenProvider_=e,this.syncPointTree_=new te(null),this.pendingWriteTree_=VR(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function uf(t,e,n,r,s){return AR(t.pendingWriteTree_,e,n,r,s),s?Hs(t,new Tr(nf(),e,n)):[]}function gP(t,e,n,r){OR(t.pendingWriteTree_,e,n,r);const s=te.fromObject(n);return Hs(t,new Ps(nf(),e,s))}function On(t,e,n=!1){const r=DR(t.pendingWriteTree_,e);if(MR(t.pendingWriteTree_,e)){let i=new te(null);return r.snap!=null?i=i.set(q(),!0):Re(r.children,o=>{i=i.set(new X(o),!0)}),Hs(t,new al(r.path,i,n))}else return[]}function Co(t,e,n){return Hs(t,new Tr(rf(),e,n))}function yP(t,e,n){const r=te.fromObject(n);return Hs(t,new Ps(rf(),e,r))}function vP(t,e){return Hs(t,new io(rf(),e))}function _P(t,e,n){const r=df(t,n);if(r){const s=hf(r),i=s.path,o=s.queryId,a=We(i,e),l=new io(sf(o),a);return ff(t,i,l)}else return[]}function pl(t,e,n,r,s=!1){const i=e._path,o=t.syncPointTree_.get(i);let a=[];if(o&&(e._queryIdentifier==="default"||cw(o,e))){const l=hP(o,e,n,r);uP(o)&&(t.syncPointTree_=t.syncPointTree_.remove(i));const c=l.removed;if(a=l.events,!s){const u=c.findIndex(f=>f._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(i,(f,m)=>Yn(m));if(u&&!d){const f=t.syncPointTree_.subtree(i);if(!f.isEmpty()){const m=xP(f);for(let y=0;y<m.length;++y){const _=m[y],k=_.query,v=fw(t,_);t.listenProvider_.startListening(Ti(k),oo(t,k),v.hashFn,v.onComplete)}}}!d&&c.length>0&&!r&&(u?t.listenProvider_.stopListening(Ti(e),null):c.forEach(f=>{const m=t.queryToTagMap.get(tc(f));t.listenProvider_.stopListening(Ti(f),m)}))}EP(t,c)}return a}function uw(t,e,n,r){const s=df(t,r);if(s!=null){const i=hf(s),o=i.path,a=i.queryId,l=We(o,e),c=new Tr(sf(a),l,n);return ff(t,o,c)}else return[]}function wP(t,e,n,r){const s=df(t,r);if(s){const i=hf(s),o=i.path,a=i.queryId,l=We(o,e),c=te.fromObject(n),u=new Ps(sf(a),l,c);return ff(t,o,u)}else return[]}function Nd(t,e,n,r=!1){const s=e._path;let i=null,o=!1;t.syncPointTree_.foreachOnPath(s,(f,m)=>{const y=We(f,s);i=i||Hn(m,y),o=o||Yn(m)});let a=t.syncPointTree_.get(s);a?(o=o||Yn(a),i=i||Hn(a,q())):(a=new iw,t.syncPointTree_=t.syncPointTree_.set(s,a));let l;i!=null?l=!0:(l=!1,i=D.EMPTY_NODE,t.syncPointTree_.subtree(s).foreachChild((m,y)=>{const _=Hn(y,q());_&&(i=i.updateImmediateChild(m,_))}));const c=cw(a,e);if(!c&&!e._queryParams.loadsAllData()){const f=tc(e);I(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const m=SP();t.queryToTagMap.set(f,m),t.tagToQueryMap.set(m,f)}const u=Jl(t.pendingWriteTree_,s);let d=dP(a,e,n,u,i,l);if(!c&&!o&&!r){const f=lw(a,e);d=d.concat(CP(t,e,f))}return d}function ec(t,e,n){const s=t.pendingWriteTree_,i=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=We(o,e),c=Hn(a,l);if(c)return c});return Z0(s,e,i,n,!0)}function kP(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const d=We(c,n);r=r||Hn(u,d)});let s=t.syncPointTree_.get(n);s?r=r||Hn(s,q()):(s=new iw,t.syncPointTree_=t.syncPointTree_.set(n,s));const i=r!=null,o=i?new Qn(r,!0,!1):null,a=Jl(t.pendingWriteTree_,e._path),l=ow(s,e,a,i?o.getNode():D.EMPTY_NODE,i);return sP(l)}function Hs(t,e){return dw(e,t.syncPointTree_,null,Jl(t.pendingWriteTree_,q()))}function dw(t,e,n,r){if($(t.path))return hw(t,e,n,r);{const s=e.get(q());n==null&&s!=null&&(n=Hn(s,q()));let i=[];const o=U(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=ew(r,o);i=i.concat(dw(a,l,c,u))}return s&&(i=i.concat(cf(s,t,r,n))),i}}function hw(t,e,n,r){const s=e.get(q());n==null&&s!=null&&(n=Hn(s,q()));let i=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=ew(r,o),u=t.operationForChild(o);u&&(i=i.concat(hw(u,a,l,c)))}),s&&(i=i.concat(cf(s,t,r,n))),i}function fw(t,e){const n=e.query,r=oo(t,n);return{hashFn:()=>(rP(e)||D.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return r?_P(t,n._path,r):vP(t,n._path);{const i=vT(s,n);return pl(t,n,null,i)}}}}function oo(t,e){const n=tc(e);return t.queryToTagMap.get(n)}function tc(t){return t._path.toString()+"$"+t._queryIdentifier}function df(t,e){return t.tagToQueryMap.get(e)}function hf(t){const e=t.indexOf("$");return I(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new X(t.substr(0,e))}}function ff(t,e,n){const r=t.syncPointTree_.get(e);I(r,"Missing sync point for query tag that we're tracking");const s=Jl(t.pendingWriteTree_,e);return cf(r,n,s,null)}function xP(t){return t.fold((e,n,r)=>{if(n&&Yn(n))return[Zl(n)];{let s=[];return n&&(s=aw(n)),Re(r,(i,o)=>{s=s.concat(o)}),s}})}function Ti(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(pP())(t._repo,t._path):t}function EP(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const s=tc(r),i=t.queryToTagMap.get(s);t.queryToTagMap.delete(s),t.tagToQueryMap.delete(i)}}}function SP(){return mP++}function CP(t,e,n){const r=e._path,s=oo(t,e),i=fw(t,n),o=t.listenProvider_.startListening(Ti(e),s,i.hashFn,i.onComplete),a=t.syncPointTree_.subtree(r);if(s)I(!Yn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,d)=>{if(!$(c)&&u&&Yn(u))return[Zl(u).query];{let f=[];return u&&(f=f.concat(aw(u).map(m=>m.query))),Re(d,(m,y)=>{f=f.concat(y)}),f}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(Ti(u),oo(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new pf(n)}node(){return this.node_}}class mf{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ue(this.path_,e);return new mf(this.syncTree_,n)}node(){return ec(this.syncTree_,this.path_)}}const bP=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},dg=function(t,e,n){if(!t||typeof t!="object")return t;if(I(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return IP(t[".sv"],e,n);if(typeof t[".sv"]=="object")return NP(t[".sv"],e);I(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},IP=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:I(!1,"Unexpected server value: "+t)}},NP=function(t,e,n){t.hasOwnProperty("increment")||I(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&I(!1,"Unexpected increment value: "+r);const s=e.node();if(I(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const o=s.getValue();return typeof o!="number"?r:o+r},pw=function(t,e,n,r){return yf(e,new mf(n,t),r)},gf=function(t,e,n){return yf(t,new pf(e),n)};function yf(t,e,n){const r=t.getPriority().val(),s=dg(r,e.getImmediateChild(".priority"),n);let i;if(t.isLeafNode()){const o=t,a=dg(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new Ce(a,ce(s)):t}else{const o=t;return i=o,s!==o.getPriority().val()&&(i=i.updatePriority(new Ce(s))),o.forEachChild(ae,(a,l)=>{const c=yf(l,e.getImmediateChild(a),n);c!==l&&(i=i.updateImmediateChild(a,c))}),i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function nc(t,e){let n=e instanceof X?e:new X(e),r=t,s=U(n);for(;s!==null;){const i=Cr(r.node.children,s)||{children:{},childCount:0};r=new vf(s,r,i),n=ee(n),s=U(n)}return r}function Br(t){return t.node.value}function _f(t,e){t.node.value=e,Td(t)}function mw(t){return t.node.childCount>0}function TP(t){return Br(t)===void 0&&!mw(t)}function rc(t,e){Re(t.node.children,(n,r)=>{e(new vf(n,t,r))})}function gw(t,e,n,r){n&&e(t),rc(t,s=>{gw(s,e,!0)})}function RP(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function bo(t){return new X(t.parent===null?t.name:bo(t.parent)+"/"+t.name)}function Td(t){t.parent!==null&&PP(t.parent,t.name,t)}function PP(t,e,n){const r=TP(n),s=Rt(t.node.children,e);r&&s?(delete t.node.children[e],t.node.childCount--,Td(t)):!r&&!s&&(t.node.children[e]=n.node,t.node.childCount++,Td(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AP=/[\[\].#$\/\u0000-\u001F\u007F]/,OP=/[\[\].#$\u0000-\u001F\u007F]/,tu=10*1024*1024,wf=function(t){return typeof t=="string"&&t.length!==0&&!AP.test(t)},yw=function(t){return typeof t=="string"&&t.length!==0&&!OP.test(t)},DP=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),yw(t)},kf=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Ql(t)||t&&typeof t=="object"&&Rt(t,".sv")},ml=function(t,e,n,r){r&&e===void 0||Io(Is(t,"value"),e,n)},Io=function(t,e,n){const r=n instanceof X?new JT(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+ur(r));if(typeof e=="function")throw new Error(t+"contains a function "+ur(r)+" with contents = "+e.toString());if(Ql(e))throw new Error(t+"contains "+e.toString()+" "+ur(r));if(typeof e=="string"&&e.length>tu/3&&Bl(e)>tu)throw new Error(t+"contains a string greater than "+tu+" utf8 bytes "+ur(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,i=!1;if(Re(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!wf(o)))throw new Error(t+" contains an invalid key ("+o+") "+ur(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);ZT(r,o),Io(t,a,r),eR(r)}),s&&i)throw new Error(t+' contains ".value" child '+ur(r)+" in addition to actual children.")}},MP=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const i=to(r);for(let o=0;o<i.length;o++)if(!(i[o]===".priority"&&o===i.length-1)){if(!wf(i[o]))throw new Error(t+"contains an invalid key ("+i[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(XT);let s=null;for(n=0;n<e.length;n++){if(r=e[n],s!==null&&ht(s,r))throw new Error(t+"contains a path "+s.toString()+" that is ancestor of another path "+r.toString());s=r}},vw=function(t,e,n,r){const s=Is(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const i=[];Re(e,(o,a)=>{const l=new X(o);if(Io(s,a,ue(n,l)),Yh(l)===".priority"&&!kf(a))throw new Error(s+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");i.push(l)}),MP(s,i)},LP=function(t,e,n){if(Ql(e))throw new Error(Is(t,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!kf(e))throw new Error(Is(t,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},_w=function(t,e,n,r){if(!yw(n))throw new Error(Is(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},jP=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),_w(t,e,n)},Dn=function(t,e){if(U(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},FP=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!wf(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!DP(n))throw new Error(Is(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UP{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function sc(t,e){let n=null;for(let r=0;r<e.length;r++){const s=e[r],i=s.getPath();n!==null&&!Xh(i,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:i}),n.events.push(s)}n&&t.eventLists_.push(n)}function ww(t,e,n){sc(t,n),kw(t,r=>Xh(r,e))}function ot(t,e,n){sc(t,n),kw(t,r=>ht(r,e)||ht(e,r))}function kw(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const s=t.eventLists_[r];if(s){const i=s.path;e(i)?($P(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function $P(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Ci&&Ne("event: "+n.toString()),Bs(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zP="repo_interrupt",WP=25;class BP{constructor(e,n,r,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new UP,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ol(),this.transactionQueueTree_=new vf,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function VP(t,e,n){if(t.stats_=qh(t.repoInfo_),t.forceRestClient_||xT())t.server_=new il(t.repoInfo_,(r,s,i,o)=>{hg(t,r,s,i,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>fg(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ke(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new on(t.repoInfo_,e,(r,s,i,o)=>{hg(t,r,s,i,o)},r=>{fg(t,r)},r=>{HP(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=IT(t.repoInfo_,()=>new bR(t.stats_,t.server_)),t.infoData_=new kR,t.infoSyncTree_=new ug({startListening:(r,s,i,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=Co(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),xf(t,"connected",!1),t.serverSyncTree_=new ug({startListening:(r,s,i,o)=>(t.server_.listen(r,i,s,(a,l)=>{const c=o(a,l);ot(t.eventQueue_,r._path,c)}),[]),stopListening:(r,s)=>{t.server_.unlisten(r,s)}})}function xw(t){const n=t.infoData_.getNode(new X(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function No(t){return bP({timestamp:xw(t)})}function hg(t,e,n,r,s){t.dataUpdateCount++;const i=new X(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(r){const l=qa(n,c=>ce(c));o=wP(t.serverSyncTree_,i,l,s)}else{const l=ce(n);o=uw(t.serverSyncTree_,i,l,s)}else if(r){const l=qa(n,c=>ce(c));o=yP(t.serverSyncTree_,i,l)}else{const l=ce(n);o=Co(t.serverSyncTree_,i,l)}let a=i;o.length>0&&(a=Os(t,i)),ot(t.eventQueue_,a,o)}function fg(t,e){xf(t,"connected",e),e===!1&&QP(t)}function HP(t,e){Re(e,(n,r)=>{xf(t,n,r)})}function xf(t,e,n){const r=new X("/.info/"+e),s=ce(n);t.infoData_.updateSnapshot(r,s);const i=Co(t.infoSyncTree_,r,s);ot(t.eventQueue_,r,i)}function ic(t){return t.nextWriteId_++}function KP(t,e,n){const r=kP(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(s=>{const i=ce(s).withIndex(e._queryParams.getIndex());Nd(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Co(t.serverSyncTree_,e._path,i);else{const a=oo(t.serverSyncTree_,e);o=uw(t.serverSyncTree_,e._path,i,a)}return ot(t.eventQueue_,e._path,o),pl(t.serverSyncTree_,e,n,null,!0),i},s=>(Ks(t,"get for query "+ke(e)+" failed: "+s),Promise.reject(new Error(s))))}function GP(t,e,n,r,s){Ks(t,"set",{path:e.toString(),value:n,priority:r});const i=No(t),o=ce(n,r),a=ec(t.serverSyncTree_,e),l=gf(o,a,i),c=ic(t),u=uf(t.serverSyncTree_,e,l,c,!0);sc(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(f,m)=>{const y=f==="ok";y||Ve("set at "+e+" failed: "+f);const _=On(t.serverSyncTree_,c,!y);ot(t.eventQueue_,e,_),Xn(t,s,f,m)});const d=Sf(t,e);Os(t,d),ot(t.eventQueue_,d,[])}function qP(t,e,n,r){Ks(t,"update",{path:e.toString(),value:n});let s=!0;const i=No(t),o={};if(Re(n,(a,l)=>{s=!1,o[a]=pw(ue(e,a),ce(l),t.serverSyncTree_,i)}),s)Ne("update() called with empty data.  Don't do anything."),Xn(t,r,"ok",void 0);else{const a=ic(t),l=gP(t.serverSyncTree_,e,o,a);sc(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,u)=>{const d=c==="ok";d||Ve("update at "+e+" failed: "+c);const f=On(t.serverSyncTree_,a,!d),m=f.length>0?Os(t,e):e;ot(t.eventQueue_,m,f),Xn(t,r,c,u)}),Re(n,c=>{const u=Sf(t,ue(e,c));Os(t,u)}),ot(t.eventQueue_,e,[])}}function QP(t){Ks(t,"onDisconnectEvents");const e=No(t),n=ol();xd(t.onDisconnect_,q(),(s,i)=>{const o=pw(s,i,t.serverSyncTree_,e);Vs(n,s,o)});let r=[];xd(n,q(),(s,i)=>{r=r.concat(Co(t.serverSyncTree_,s,i));const o=Sf(t,s);Os(t,o)}),t.onDisconnect_=ol(),ot(t.eventQueue_,q(),r)}function YP(t,e,n){t.server_.onDisconnectCancel(e.toString(),(r,s)=>{r==="ok"&&kd(t.onDisconnect_,e),Xn(t,n,r,s)})}function pg(t,e,n,r){const s=ce(n);t.server_.onDisconnectPut(e.toString(),s.val(!0),(i,o)=>{i==="ok"&&Vs(t.onDisconnect_,e,s),Xn(t,r,i,o)})}function XP(t,e,n,r,s){const i=ce(n,r);t.server_.onDisconnectPut(e.toString(),i.val(!0),(o,a)=>{o==="ok"&&Vs(t.onDisconnect_,e,i),Xn(t,s,o,a)})}function JP(t,e,n,r){if(Ga(n)){Ne("onDisconnect().update() called with empty data.  Don't do anything."),Xn(t,r,"ok",void 0);return}t.server_.onDisconnectMerge(e.toString(),n,(s,i)=>{s==="ok"&&Re(n,(o,a)=>{const l=ce(a);Vs(t.onDisconnect_,ue(e,o),l)}),Xn(t,r,s,i)})}function ZP(t,e,n){let r;U(e._path)===".info"?r=Nd(t.infoSyncTree_,e,n):r=Nd(t.serverSyncTree_,e,n),ww(t.eventQueue_,e._path,r)}function Rd(t,e,n){let r;U(e._path)===".info"?r=pl(t.infoSyncTree_,e,n):r=pl(t.serverSyncTree_,e,n),ww(t.eventQueue_,e._path,r)}function eA(t){t.persistentConnection_&&t.persistentConnection_.interrupt(zP)}function Ks(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Ne(n,...e)}function Xn(t,e,n,r){e&&Bs(()=>{if(n==="ok")e(null);else{const s=(n||"error").toUpperCase();let i=s;r&&(i+=": "+r);const o=new Error(i);o.code=s,e(o)}})}function tA(t,e,n,r,s,i){Ks(t,"transaction on "+e);const o={path:e,update:n,onComplete:r,status:null,order:w0(),applyLocally:i,retryCount:0,unwatcher:s,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},a=Ef(t,e,void 0);o.currentInputSnapshot=a;const l=o.update(a.val());if(l===void 0)o.unwatcher(),o.currentOutputSnapshotRaw=null,o.currentOutputSnapshotResolved=null,o.onComplete&&o.onComplete(null,!1,o.currentInputSnapshot);else{Io("transaction failed: Data returned ",l,o.path),o.status=0;const c=nc(t.transactionQueueTree_,e),u=Br(c)||[];u.push(o),_f(c,u);let d;typeof l=="object"&&l!==null&&Rt(l,".priority")?(d=Cr(l,".priority"),I(kf(d),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):d=(ec(t.serverSyncTree_,e)||D.EMPTY_NODE).getPriority().val();const f=No(t),m=ce(l,d),y=gf(m,a,f);o.currentOutputSnapshotRaw=m,o.currentOutputSnapshotResolved=y,o.currentWriteId=ic(t);const _=uf(t.serverSyncTree_,e,y,o.currentWriteId,o.applyLocally);ot(t.eventQueue_,e,_),oc(t,t.transactionQueueTree_)}}function Ef(t,e,n){return ec(t.serverSyncTree_,e,n)||D.EMPTY_NODE}function oc(t,e=t.transactionQueueTree_){if(e||ac(t,e),Br(e)){const n=Sw(t,e);I(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&nA(t,bo(e),n)}else mw(e)&&rc(e,n=>{oc(t,n)})}function nA(t,e,n){const r=n.map(c=>c.currentWriteId),s=Ef(t,e,r);let i=s;const o=s.hash();for(let c=0;c<n.length;c++){const u=n[c];I(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=We(e,u.path);i=i.updateChild(d,u.currentOutputSnapshotRaw)}const a=i.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Ks(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const d=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(On(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&d.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();ac(t,nc(t.transactionQueueTree_,e)),oc(t,t.transactionQueueTree_),ot(t.eventQueue_,e,u);for(let f=0;f<d.length;f++)Bs(d[f])}else{if(c==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{Ve("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=c}Os(t,e)}},o)}function Os(t,e){const n=Ew(t,e),r=bo(n),s=Sw(t,n);return rA(t,s,r),r}function rA(t,e,n){if(e.length===0)return;const r=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=We(n,l.path);let u=!1,d;if(I(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,d=l.abortReason,s=s.concat(On(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=WP)u=!0,d="maxretry",s=s.concat(On(t.serverSyncTree_,l.currentWriteId,!0));else{const f=Ef(t,l.path,o);l.currentInputSnapshot=f;const m=e[a].update(f.val());if(m!==void 0){Io("transaction failed: Data returned ",m,l.path);let y=ce(m);typeof m=="object"&&m!=null&&Rt(m,".priority")||(y=y.updatePriority(f.getPriority()));const k=l.currentWriteId,v=No(t),p=gf(y,f,v);l.currentOutputSnapshotRaw=y,l.currentOutputSnapshotResolved=p,l.currentWriteId=ic(t),o.splice(o.indexOf(k),1),s=s.concat(uf(t.serverSyncTree_,l.path,p,l.currentWriteId,l.applyLocally)),s=s.concat(On(t.serverSyncTree_,k,!0))}else u=!0,d="nodata",s=s.concat(On(t.serverSyncTree_,l.currentWriteId,!0))}ot(t.eventQueue_,n,s),s=[],u&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(d),!1,null))))}ac(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Bs(r[a]);oc(t,t.transactionQueueTree_)}function Ew(t,e){let n,r=t.transactionQueueTree_;for(n=U(e);n!==null&&Br(r)===void 0;)r=nc(r,n),e=ee(e),n=U(e);return r}function Sw(t,e){const n=[];return Cw(t,e,n),n.sort((r,s)=>r.order-s.order),n}function Cw(t,e,n){const r=Br(e);if(r)for(let s=0;s<r.length;s++)n.push(r[s]);rc(e,s=>{Cw(t,s,n)})}function ac(t,e){const n=Br(e);if(n){let r=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[r]=n[s],r++);n.length=r,_f(e,n.length>0?n:void 0)}rc(e,r=>{ac(t,r)})}function Sf(t,e){const n=bo(Ew(t,e)),r=nc(t.transactionQueueTree_,e);return RP(r,s=>{nu(t,s)}),nu(t,r),gw(r,s=>{nu(t,s)}),n}function nu(t,e){const n=Br(e);if(n){const r=[];let s=[],i=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(I(i===o-1,"All SENT items should be at beginning of queue."),i=o,n[o].status=3,n[o].abortReason="set"):(I(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(On(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?_f(e,void 0):n.length=i+1,ot(t.eventQueue_,bo(e),s);for(let o=0;o<r.length;o++)Bs(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sA(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let s=n[r];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function iA(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Ve(`Invalid query segment '${n}' in query '${t}'`)}return e}const mg=function(t,e){const n=oA(t),r=n.namespace;n.domain==="firebase.com"&&pn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&pn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||fT();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new O0(n.host,n.secure,r,s,e,"",r!==n.subdomain),path:new X(n.pathString)}},oA=function(t){let e="",n="",r="",s="",i="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(u,d)),u<d&&(s=sA(t.substring(u,d)));const f=iA(t.substring(Math.min(t.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const m=e.slice(0,c);if(m.toLowerCase()==="localhost")n="localhost";else if(m.split(".").length<=2)n=m;else{const y=e.indexOf(".");r=e.substring(0,y).toLowerCase(),n=e.substring(y+1),i=r}"ns"in f&&(i=f.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:s,namespace:i}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gg="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",aA=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let s;const i=new Array(8);for(s=7;s>=0;s--)i[s]=gg.charAt(n%64),n=Math.floor(n/64);I(n===0,"Cannot push at time == 0");let o=i.join("");if(r){for(s=11;s>=0&&e[s]===63;s--)e[s]=0;e[s]++}else for(s=0;s<12;s++)e[s]=Math.floor(Math.random()*64);for(s=0;s<12;s++)o+=gg.charAt(e[s]);return I(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lA{constructor(e,n,r,s){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ke(this.snapshot.exportVal())}}class cA{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bw{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return I(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class uA{constructor(e,n){this._repo=e,this._path=n}cancel(){const e=new kt;return YP(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){Dn("OnDisconnect.remove",this._path);const e=new kt;return pg(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){Dn("OnDisconnect.set",this._path),ml("OnDisconnect.set",e,this._path,!1);const n=new kt;return pg(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}setWithPriority(e,n){Dn("OnDisconnect.setWithPriority",this._path),ml("OnDisconnect.setWithPriority",e,this._path,!1),LP("OnDisconnect.setWithPriority",n);const r=new kt;return XP(this._repo,this._path,e,n,r.wrapCallback(()=>{})),r.promise}update(e){Dn("OnDisconnect.update",this._path),vw("OnDisconnect.update",e,this._path);const n=new kt;return JP(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf{constructor(e,n,r,s){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=s}get key(){return $(this._path)?null:Yh(this._path)}get ref(){return new Ht(this._repo,this._path)}get _queryIdentifier(){const e=eg(this._queryParams),n=Kh(e);return n==="{}"?"default":n}get _queryObject(){return eg(this._queryParams)}isEqual(e){if(e=re(e),!(e instanceof Cf))return!1;const n=this._repo===e._repo,r=Xh(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&r&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+YT(this._path)}}class Ht extends Cf{constructor(e,n){super(e,n,new tf,!1)}get parent(){const e=W0(this._path);return e===null?null:new Ht(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ds{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new X(e),r=ao(this.ref,e);return new Ds(this._node.getChild(n),r,ae)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,s)=>e(new Ds(s,ao(this.ref,r),ae)))}hasChild(e){const n=new X(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function V(t,e){return t=re(t),t._checkNotDeleted("ref"),e!==void 0?ao(t._root,e):t._root}function ao(t,e){return t=re(t),U(t._path)===null?jP("child","path",e):_w("child","path",e),new Ht(t._repo,ue(t._path,e))}function ru(t){return t=re(t),new uA(t._repo,t._path)}function lo(t,e){t=re(t),Dn("push",t._path),ml("push",e,t._path,!0);const n=xw(t._repo),r=aA(n),s=ao(t,r),i=ao(t,r);let o;return e!=null?o=Gs(i,e).then(()=>i):o=Promise.resolve(i),s.then=o.then.bind(o),s.catch=o.then.bind(o,void 0),s}function To(t){return Dn("remove",t._path),Gs(t,null)}function Gs(t,e){t=re(t),Dn("set",t._path),ml("set",e,t._path,!1);const n=new kt;return GP(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function dA(t,e){vw("update",e,t._path);const n=new kt;return qP(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function Bt(t){t=re(t);const e=new bw(()=>{}),n=new lc(e);return KP(t._repo,t,n).then(r=>new Ds(r,new Ht(t._repo,t._path),t._queryParams.getIndex()))}class lc{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new lA("value",this,new Ds(e.snapshotNode,new Ht(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new cA(this,e,n):null}matches(e){return e instanceof lc?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function hA(t,e,n,r,s){let i;if(typeof r=="object"&&(i=void 0,s=r),typeof r=="function"&&(i=r),s&&s.onlyOnce){const l=n,c=(u,d)=>{Rd(t._repo,t,a),l(u,d)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new bw(n,i||void 0),a=new lc(o);return ZP(t._repo,t,a),()=>Rd(t._repo,t,a)}function Jn(t,e,n,r){return hA(t,"value",e,n,r)}function Iw(t,e,n){Rd(t._repo,t,null)}lP(Ht);fP(Ht);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fA="FIREBASE_DATABASE_EMULATOR_HOST",Pd={};let pA=!1;function mA(t,e,n,r){t.repoInfo_=new O0(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function gA(t,e,n,r,s){let i=r||t.options.databaseURL;i===void 0&&(t.options.projectId||pn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ne("Using default host for project ",t.options.projectId),i=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=mg(i,s),a=o.repoInfo,l;typeof process<"u"&&Lm&&(l=Lm[fA]),l?(i=`http://${l}?ns=${a.namespace}`,o=mg(i,s),a=o.repoInfo):o.repoInfo.secure;const c=new ST(t.name,t.options,e);FP("Invalid Firebase Database URL",o),$(o.path)||pn("Database URL must point to the root of a Firebase Database (not including a child path).");const u=vA(a,t,c,new ET(t.name,n));return new _A(u,t)}function yA(t,e){const n=Pd[e];(!n||n[t.key]!==t)&&pn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),eA(t),delete n[t.key]}function vA(t,e,n,r){let s=Pd[e.name];s||(s={},Pd[e.name]=s);let i=s[t.toURLString()];return i&&pn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new BP(t,pA,n,r),s[t.toURLString()]=i,i}class _A{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(VP(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ht(this._repo,q())),this._rootInternal}_delete(){return this._rootInternal!==null&&(yA(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&pn("Cannot call "+e+" on a deleted database.")}}function wA(t=Hl(),e){const n=Fr(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=C_("database");r&&kA(n,...r)}return n}function kA(t,e,n,r={}){t=re(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&pn("Cannot call useEmulator() after instance has already been initialized.");const s=t._repoInternal;let i;if(s.repoInfo_.nodeAdmin)r.mockUserToken&&pn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),i=new _a(_a.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:N_(r.mockUserToken,t.app.options.projectId);i=new _a(o)}mA(s,e,n,i)}/**
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
 */function xA(t){lT(Ur),Nt(new gt("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return gA(r,s,i,n)},"PUBLIC").setMultipleInstances(!0)),et(jm,Fm,t),et(jm,Fm,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EA={".sv":"timestamp"};function yg(){return EA}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SA{constructor(e,n){this.committed=e,this.snapshot=n}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}}function CA(t,e,n){var r;if(t=re(t),Dn("Reference.transaction",t._path),t.key===".length"||t.key===".keys")throw"Reference.transaction failed: "+t.key+" is a read-only object.";const s=(r=void 0)!==null&&r!==void 0?r:!0,i=new kt,o=(l,c,u)=>{let d=null;l?i.reject(l):(d=new Ds(u,new Ht(t._repo,t._path),ae),i.resolve(new SA(c,d)))},a=Jn(t,()=>{});return tA(t._repo,t._path,e,o,a,s),i.promise}on.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};on.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};xA();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nw="firebasestorage.googleapis.com",Tw="storageBucket",bA=2*60*1e3,IA=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me extends Vt{constructor(e,n,r=0){super(su(e),`Firebase Storage: ${n} (${su(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,me.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return su(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var pe;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(pe||(pe={}));function su(t){return"storage/"+t}function bf(){const t="An unknown error occurred, please check the error payload for server response.";return new me(pe.UNKNOWN,t)}function NA(t){return new me(pe.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function TA(t){return new me(pe.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function RA(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new me(pe.UNAUTHENTICATED,t)}function PA(){return new me(pe.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function AA(t){return new me(pe.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function OA(){return new me(pe.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function DA(){return new me(pe.CANCELED,"User canceled the upload/download.")}function MA(t){return new me(pe.INVALID_URL,"Invalid URL '"+t+"'.")}function LA(t){return new me(pe.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function jA(){return new me(pe.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Tw+"' property when initializing the app?")}function FA(){return new me(pe.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function UA(){return new me(pe.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function $A(t){return new me(pe.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Ad(t){return new me(pe.INVALID_ARGUMENT,t)}function Rw(){return new me(pe.APP_DELETED,"The Firebase app was deleted.")}function zA(t){return new me(pe.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ri(t,e){return new me(pe.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function ai(t){throw new me(pe.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=rt.makeFromUrl(e,n)}catch{return new rt(e,"")}if(r.path==="")return r;throw LA(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(x){x.path.charAt(x.path.length-1)==="/"&&(x.path_=x.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function c(x){x.path_=decodeURIComponent(x.path)}const u="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",m=new RegExp(`^https?://${d}/${u}/b/${s}/o${f}`,"i"),y={bucket:1,path:3},_=n===Nw?"(?:storage.googleapis.com|storage.cloud.google.com)":n,k="([^?#]*)",v=new RegExp(`^https?://${_}/${s}/${k}`,"i"),g=[{regex:a,indices:l,postModify:i},{regex:m,indices:y,postModify:c},{regex:v,indices:{bucket:1,path:2},postModify:c}];for(let x=0;x<g.length;x++){const S=g[x],E=S.regex.exec(e);if(E){const C=E[S.indices.bucket];let R=E[S.indices.path];R||(R=""),r=new rt(C,R),S.postModify(r);break}}if(r==null)throw MA(e);return r}}class WA{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BA(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...k){c||(c=!0,e.apply(null,k))}function d(k){s=setTimeout(()=>{s=null,t(m,l())},k)}function f(){i&&clearTimeout(i)}function m(k,...v){if(c){f();return}if(k){f(),u.call(null,k,...v);return}if(l()||o){f(),u.call(null,k,...v);return}r<64&&(r*=2);let g;a===1?(a=2,g=0):g=(r+Math.random())*1e3,d(g)}let y=!1;function _(k){y||(y=!0,f(),!c&&(s!==null?(k||(a=2),clearTimeout(s),d(0)):k||(a=1)))}return d(0),i=setTimeout(()=>{o=!0,_(!0)},n),_}function VA(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HA(t){return t!==void 0}function KA(t){return typeof t=="object"&&!Array.isArray(t)}function If(t){return typeof t=="string"||t instanceof String}function vg(t){return Nf()&&t instanceof Blob}function Nf(){return typeof Blob<"u"}function _g(t,e,n,r){if(r<e)throw Ad(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Ad(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tf(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function Pw(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var _r;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(_r||(_r={}));/**
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
 */function GA(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qA{constructor(e,n,r,s,i,o,a,l,c,u,d,f=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=d,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((m,y)=>{this.resolve_=m,this.reject_=y,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Zo(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===_r.NO_ERROR,l=i.getStatus();if(!a||GA(l,this.additionalRetryCodes_)&&this.retry){const u=i.getErrorCode()===_r.ABORT;r(!1,new Zo(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;r(!0,new Zo(c,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());HA(l)?i(l):i()}catch(l){o(l)}else if(a!==null){const l=bf();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(s.canceled){const l=this.appDelete_?Rw():DA();o(l)}else{const l=OA();o(l)}};this.canceled_?n(!1,new Zo(!1,null,!0)):this.backoffId_=BA(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&VA(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Zo{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function QA(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function YA(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function XA(t,e){e&&(t["X-Firebase-GMPID"]=e)}function JA(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function ZA(t,e,n,r,s,i,o=!0){const a=Pw(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return XA(c,e),QA(c,n),YA(c,i),JA(c,r),new qA(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e2(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function t2(...t){const e=e2();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Nf())return new Blob(t);throw new me(pe.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function n2(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function r2(t){if(typeof atob>"u")throw $A("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class iu{constructor(e,n){this.data=e,this.contentType=n||null}}function s2(t,e){switch(t){case Ft.RAW:return new iu(Aw(e));case Ft.BASE64:case Ft.BASE64URL:return new iu(Ow(t,e));case Ft.DATA_URL:return new iu(o2(e),a2(e))}throw bf()}function Aw(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function i2(t){let e;try{e=decodeURIComponent(t)}catch{throw Ri(Ft.DATA_URL,"Malformed data URL.")}return Aw(e)}function Ow(t,e){switch(t){case Ft.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw Ri(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Ft.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw Ri(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=r2(e)}catch(s){throw s.message.includes("polyfill")?s:Ri(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class Dw{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Ri(Ft.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=l2(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function o2(t){const e=new Dw(t);return e.base64?Ow(Ft.BASE64,e.rest):i2(e.rest)}function a2(t){return new Dw(t).contentType}function l2(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(e,n){let r=0,s="";vg(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(vg(this.data_)){const r=this.data_,s=n2(r,e,n);return s===null?null:new Tn(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Tn(r,!0)}}static getBlob(...e){if(Nf()){const n=e.map(r=>r instanceof Tn?r.data_:r);return new Tn(t2.apply(null,n))}else{const n=e.map(o=>If(o)?s2(Ft.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new Tn(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mw(t){let e;try{e=JSON.parse(t)}catch{return null}return KA(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c2(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function u2(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function Lw(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d2(t,e){return e}class $e{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||d2}}let ea=null;function h2(t){return!If(t)||t.length<2?t:Lw(t)}function jw(){if(ea)return ea;const t=[];t.push(new $e("bucket")),t.push(new $e("generation")),t.push(new $e("metageneration")),t.push(new $e("name","fullPath",!0));function e(i,o){return h2(o)}const n=new $e("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new $e("size");return s.xform=r,t.push(s),t.push(new $e("timeCreated")),t.push(new $e("updated")),t.push(new $e("md5Hash",null,!0)),t.push(new $e("cacheControl",null,!0)),t.push(new $e("contentDisposition",null,!0)),t.push(new $e("contentEncoding",null,!0)),t.push(new $e("contentLanguage",null,!0)),t.push(new $e("contentType",null,!0)),t.push(new $e("metadata","customMetadata",!0)),ea=t,ea}function f2(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new rt(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function p2(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return f2(r,t),r}function Fw(t,e,n){const r=Mw(e);return r===null?null:p2(t,r,n)}function m2(t,e,n,r){const s=Mw(e);if(s===null||!If(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(c=>{const u=t.bucket,d=t.fullPath,f="/b/"+o(u)+"/o/"+o(d),m=Tf(f,n,r),y=Pw({alt:"media",token:c});return m+y})[0]}function g2(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class Uw{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $w(t){if(!t)throw bf()}function y2(t,e){function n(r,s){const i=Fw(t,s,e);return $w(i!==null),i}return n}function v2(t,e){function n(r,s){const i=Fw(t,s,e);return $w(i!==null),m2(i,s,t.host,t._protocol)}return n}function zw(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=PA():s=RA():n.getStatus()===402?s=TA(t.bucket):n.getStatus()===403?s=AA(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function _2(t){const e=zw(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=NA(t.path)),i.serverResponse=s.serverResponse,i}return n}function w2(t,e,n){const r=e.fullServerUrl(),s=Tf(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new Uw(s,i,v2(t,n),o);return a.errorHandler=_2(e),a}function k2(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function x2(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=k2(null,e)),r}function E2(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let g="";for(let x=0;x<2;x++)g=g+Math.random().toString().slice(2);return g}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const c=x2(e,r,s),u=g2(c,n),d="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+l+`\r
Content-Type: `+c.contentType+`\r
\r
`,f=`\r
--`+l+"--",m=Tn.getBlob(d,r,f);if(m===null)throw FA();const y={name:c.fullPath},_=Tf(i,t.host,t._protocol),k="POST",v=t.maxUploadRetryTime,p=new Uw(_,k,y2(t,n),v);return p.urlParams=y,p.headers=o,p.body=m.uploadData(),p.errorHandler=zw(e),p}class S2{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=_r.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=_r.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=_r.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw ai("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ai("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ai("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ai("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ai("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class C2 extends S2{initXhr(){this.xhr_.responseType="text"}}function Ww(){return new C2}/**
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
 */class Pr{constructor(e,n){this._service=e,n instanceof rt?this._location=n:this._location=rt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Pr(e,n)}get root(){const e=new rt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Lw(this._location.path)}get storage(){return this._service}get parent(){const e=c2(this._location.path);if(e===null)return null;const n=new rt(this._location.bucket,e);return new Pr(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw zA(e)}}function b2(t,e,n){t._throwIfRoot("uploadBytes");const r=E2(t.storage,t._location,jw(),new Tn(e,!0),n);return t.storage.makeRequestWithTokens(r,Ww).then(s=>({metadata:s,ref:t}))}function I2(t){t._throwIfRoot("getDownloadURL");const e=w2(t.storage,t._location,jw());return t.storage.makeRequestWithTokens(e,Ww).then(n=>{if(n===null)throw UA();return n})}function N2(t,e){const n=u2(t._location.path,e),r=new rt(t._location.bucket,n);return new Pr(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T2(t){return/^[A-Za-z]+:\/\//.test(t)}function R2(t,e){return new Pr(t,e)}function Bw(t,e){if(t instanceof Rf){const n=t;if(n._bucket==null)throw jA();const r=new Pr(n,n._bucket);return e!=null?Bw(r,e):r}else return e!==void 0?N2(t,e):t}function P2(t,e){if(e&&T2(e)){if(t instanceof Rf)return R2(t,e);throw Ad("To use ref(service, url), the first argument must be a Storage instance.")}else return Bw(t,e)}function wg(t,e){const n=e==null?void 0:e[Tw];return n==null?null:rt.makeFromBucketSpec(n,t)}function A2(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:N_(s,t.app.options.projectId))}class Rf{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=Nw,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=bA,this._maxUploadRetryTime=IA,this._requests=new Set,s!=null?this._bucket=rt.makeFromBucketSpec(s,this._host):this._bucket=wg(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=rt.makeFromBucketSpec(this._url,e):this._bucket=wg(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){_g("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){_g("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Pr(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new WA(Rw());{const o=ZA(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const kg="@firebase/storage",xg="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vw="storage";function O2(t,e,n){return t=re(t),b2(t,e,n)}function D2(t){return t=re(t),I2(t)}function M2(t,e){return t=re(t),P2(t,e)}function L2(t=Hl(),e){t=re(t);const r=Fr(t,Vw).getImmediate({identifier:e}),s=C_("storage");return s&&j2(r,...s),r}function j2(t,e,n,r={}){A2(t,e,n,r)}function F2(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Rf(n,r,s,e,Ur)}function U2(){Nt(new gt(Vw,F2,"PUBLIC").setMultipleInstances(!0)),et(kg,xg,""),et(kg,xg,"esm2017")}U2();const Hw="@firebase/installations",Pf="0.6.9";/**
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
 */const Kw=1e4,Gw=`w:${Pf}`,qw="FIS_v2",$2="https://firebaseinstallations.googleapis.com/v1",z2=60*60*1e3,W2="installations",B2="Installations";/**
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
 */const V2={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Ar=new jr(W2,B2,V2);function Qw(t){return t instanceof Vt&&t.code.includes("request-failed")}/**
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
 */function Yw({projectId:t}){return`${$2}/projects/${t}/installations`}function Xw(t){return{token:t.token,requestStatus:2,expiresIn:K2(t.expiresIn),creationTime:Date.now()}}async function Jw(t,e){const r=(await e.json()).error;return Ar.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Zw({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function H2(t,{refreshToken:e}){const n=Zw(t);return n.append("Authorization",G2(e)),n}async function ek(t){const e=await t();return e.status>=500&&e.status<600?t():e}function K2(t){return Number(t.replace("s","000"))}function G2(t){return`${qw} ${t}`}/**
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
 */async function q2({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=Yw(t),s=Zw(t),i=e.getImmediate({optional:!0});if(i){const c=await i.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={fid:n,authVersion:qw,appId:t.appId,sdkVersion:Gw},a={method:"POST",headers:s,body:JSON.stringify(o)},l=await ek(()=>fetch(r,a));if(l.ok){const c=await l.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:Xw(c.authToken)}}else throw await Jw("Create Installation",l)}/**
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
 */function tk(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function Q2(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Y2=/^[cdef][\w-]{21}$/,Od="";function X2(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=J2(t);return Y2.test(n)?n:Od}catch{return Od}}function J2(t){return Q2(t).substr(0,22)}/**
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
 */function cc(t){return`${t.appName}!${t.appId}`}/**
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
 */const nk=new Map;function rk(t,e){const n=cc(t);sk(n,e),Z2(n,e)}function sk(t,e){const n=nk.get(t);if(n)for(const r of n)r(e)}function Z2(t,e){const n=eO();n&&n.postMessage({key:t,fid:e}),tO()}let mr=null;function eO(){return!mr&&"BroadcastChannel"in self&&(mr=new BroadcastChannel("[Firebase] FID Change"),mr.onmessage=t=>{sk(t.data.key,t.data.fid)}),mr}function tO(){nk.size===0&&mr&&(mr.close(),mr=null)}/**
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
 */const nO="firebase-installations-database",rO=1,Or="firebase-installations-store";let ou=null;function Af(){return ou||(ou=Vl(nO,rO,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Or)}}})),ou}async function gl(t,e){const n=cc(t),s=(await Af()).transaction(Or,"readwrite"),i=s.objectStore(Or),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&rk(t,e.fid),e}async function ik(t){const e=cc(t),r=(await Af()).transaction(Or,"readwrite");await r.objectStore(Or).delete(e),await r.done}async function uc(t,e){const n=cc(t),s=(await Af()).transaction(Or,"readwrite"),i=s.objectStore(Or),o=await i.get(n),a=e(o);return a===void 0?await i.delete(n):await i.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&rk(t,a.fid),a}/**
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
 */async function Of(t){let e;const n=await uc(t.appConfig,r=>{const s=sO(r),i=iO(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===Od?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function sO(t){const e=t||{fid:X2(),registrationStatus:0};return ok(e)}function iO(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Ar.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=oO(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:aO(t)}:{installationEntry:e}}async function oO(t,e){try{const n=await q2(t,e);return gl(t.appConfig,n)}catch(n){throw Qw(n)&&n.customData.serverCode===409?await ik(t.appConfig):await gl(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function aO(t){let e=await Eg(t.appConfig);for(;e.registrationStatus===1;)await tk(100),e=await Eg(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Of(t);return r||n}return e}function Eg(t){return uc(t,e=>{if(!e)throw Ar.create("installation-not-found");return ok(e)})}function ok(t){return lO(t)?{fid:t.fid,registrationStatus:0}:t}function lO(t){return t.registrationStatus===1&&t.registrationTime+Kw<Date.now()}/**
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
 */async function cO({appConfig:t,heartbeatServiceProvider:e},n){const r=uO(t,n),s=H2(t,n),i=e.getImmediate({optional:!0});if(i){const c=await i.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={installation:{sdkVersion:Gw,appId:t.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},l=await ek(()=>fetch(r,a));if(l.ok){const c=await l.json();return Xw(c)}else throw await Jw("Generate Auth Token",l)}function uO(t,{fid:e}){return`${Yw(t)}/${e}/authTokens:generate`}/**
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
 */async function Df(t,e=!1){let n;const r=await uc(t.appConfig,i=>{if(!ak(i))throw Ar.create("not-registered");const o=i.authToken;if(!e&&fO(o))return i;if(o.requestStatus===1)return n=dO(t,e),i;{if(!navigator.onLine)throw Ar.create("app-offline");const a=mO(i);return n=hO(t,a),a}});return n?await n:r.authToken}async function dO(t,e){let n=await Sg(t.appConfig);for(;n.authToken.requestStatus===1;)await tk(100),n=await Sg(t.appConfig);const r=n.authToken;return r.requestStatus===0?Df(t,e):r}function Sg(t){return uc(t,e=>{if(!ak(e))throw Ar.create("not-registered");const n=e.authToken;return gO(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function hO(t,e){try{const n=await cO(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await gl(t.appConfig,r),n}catch(n){if(Qw(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await ik(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await gl(t.appConfig,r)}throw n}}function ak(t){return t!==void 0&&t.registrationStatus===2}function fO(t){return t.requestStatus===2&&!pO(t)}function pO(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+z2}function mO(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function gO(t){return t.requestStatus===1&&t.requestTime+Kw<Date.now()}/**
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
 */async function yO(t){const e=t,{installationEntry:n,registrationPromise:r}=await Of(e);return r?r.catch(console.error):Df(e).catch(console.error),n.fid}/**
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
 */async function vO(t,e=!1){const n=t;return await _O(n),(await Df(n,e)).token}async function _O(t){const{registrationPromise:e}=await Of(t);e&&await e}/**
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
 */function wO(t){if(!t||!t.options)throw au("App Configuration");if(!t.name)throw au("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw au(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function au(t){return Ar.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lk="installations",kO="installations-internal",xO=t=>{const e=t.getProvider("app").getImmediate(),n=wO(e),r=Fr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},EO=t=>{const e=t.getProvider("app").getImmediate(),n=Fr(e,lk).getImmediate();return{getId:()=>yO(n),getToken:s=>vO(n,s)}};function SO(){Nt(new gt(lk,xO,"PUBLIC")),Nt(new gt(kO,EO,"PRIVATE"))}SO();et(Hw,Pf);et(Hw,Pf,"esm2017");/**
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
 */const CO="/firebase-messaging-sw.js",bO="/firebase-cloud-messaging-push-scope",ck="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",IO="https://fcmregistrations.googleapis.com/v1",uk="google.c.a.c_id",NO="google.c.a.c_l",TO="google.c.a.ts",RO="google.c.a.e";var Cg;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Cg||(Cg={}));/**
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
 */var co;(function(t){t.PUSH_RECEIVED="push-received",t.NOTIFICATION_CLICKED="notification-clicked"})(co||(co={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function PO(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),s=new Uint8Array(r.length);for(let i=0;i<r.length;++i)s[i]=r.charCodeAt(i);return s}/**
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
 */const lu="fcm_token_details_db",AO=5,bg="fcm_token_object_Store";async function OO(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(i=>i.name).includes(lu))return null;let e=null;return(await Vl(lu,AO,{upgrade:async(r,s,i,o)=>{var a;if(s<2||!r.objectStoreNames.contains(bg))return;const l=o.objectStore(bg),c=await l.index("fcmSenderId").get(t);if(await l.clear(),!!c){if(s===2){const u=c;if(!u.auth||!u.p256dh||!u.endpoint)return;e={token:u.fcmToken,createTime:(a=u.createTime)!==null&&a!==void 0?a:Date.now(),subscriptionOptions:{auth:u.auth,p256dh:u.p256dh,endpoint:u.endpoint,swScope:u.swScope,vapidKey:typeof u.vapidKey=="string"?u.vapidKey:qt(u.vapidKey)}}}else if(s===3){const u=c;e={token:u.fcmToken,createTime:u.createTime,subscriptionOptions:{auth:qt(u.auth),p256dh:qt(u.p256dh),endpoint:u.endpoint,swScope:u.swScope,vapidKey:qt(u.vapidKey)}}}else if(s===4){const u=c;e={token:u.fcmToken,createTime:u.createTime,subscriptionOptions:{auth:qt(u.auth),p256dh:qt(u.p256dh),endpoint:u.endpoint,swScope:u.swScope,vapidKey:qt(u.vapidKey)}}}}}})).close(),await Hc(lu),await Hc("fcm_vapid_details_db"),await Hc("undefined"),DO(e)?e:null}function DO(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const MO="firebase-messaging-database",LO=1,uo="firebase-messaging-store";let cu=null;function dk(){return cu||(cu=Vl(MO,LO,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(uo)}}})),cu}async function jO(t){const e=hk(t),r=await(await dk()).transaction(uo).objectStore(uo).get(e);if(r)return r;{const s=await OO(t.appConfig.senderId);if(s)return await Mf(t,s),s}}async function Mf(t,e){const n=hk(t),s=(await dk()).transaction(uo,"readwrite");return await s.objectStore(uo).put(e,n),await s.done,e}function hk({appConfig:t}){return t.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FO={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},je=new jr("messaging","Messaging",FO);/**
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
 */async function UO(t,e){const n=await jf(t),r=fk(e),s={method:"POST",headers:n,body:JSON.stringify(r)};let i;try{i=await(await fetch(Lf(t.appConfig),s)).json()}catch(o){throw je.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(i.error){const o=i.error.message;throw je.create("token-subscribe-failed",{errorInfo:o})}if(!i.token)throw je.create("token-subscribe-no-token");return i.token}async function $O(t,e){const n=await jf(t),r=fk(e.subscriptionOptions),s={method:"PATCH",headers:n,body:JSON.stringify(r)};let i;try{i=await(await fetch(`${Lf(t.appConfig)}/${e.token}`,s)).json()}catch(o){throw je.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(i.error){const o=i.error.message;throw je.create("token-update-failed",{errorInfo:o})}if(!i.token)throw je.create("token-update-no-token");return i.token}async function zO(t,e){const r={method:"DELETE",headers:await jf(t)};try{const i=await(await fetch(`${Lf(t.appConfig)}/${e}`,r)).json();if(i.error){const o=i.error.message;throw je.create("token-unsubscribe-failed",{errorInfo:o})}}catch(s){throw je.create("token-unsubscribe-failed",{errorInfo:s==null?void 0:s.toString()})}}function Lf({projectId:t}){return`${IO}/projects/${t}/registrations`}async function jf({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function fk({p256dh:t,auth:e,endpoint:n,vapidKey:r}){const s={web:{endpoint:n,auth:e,p256dh:t}};return r!==ck&&(s.web.applicationPubKey=r),s}/**
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
 */const WO=7*24*60*60*1e3;async function BO(t){const e=await HO(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:qt(e.getKey("auth")),p256dh:qt(e.getKey("p256dh"))},r=await jO(t.firebaseDependencies);if(r){if(KO(r.subscriptionOptions,n))return Date.now()>=r.createTime+WO?VO(t,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await zO(t.firebaseDependencies,r.token)}catch(s){console.warn(s)}return Ig(t.firebaseDependencies,n)}else return Ig(t.firebaseDependencies,n)}async function VO(t,e){try{const n=await $O(t.firebaseDependencies,e),r=Object.assign(Object.assign({},e),{token:n,createTime:Date.now()});return await Mf(t.firebaseDependencies,r),n}catch(n){throw n}}async function Ig(t,e){const r={token:await UO(t,e),createTime:Date.now(),subscriptionOptions:e};return await Mf(t,r),r.token}async function HO(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:PO(e)})}function KO(t,e){const n=e.vapidKey===t.vapidKey,r=e.endpoint===t.endpoint,s=e.auth===t.auth,i=e.p256dh===t.p256dh;return n&&r&&s&&i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ng(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return GO(e,t),qO(e,t),QO(e,t),e}function GO(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const r=e.notification.body;r&&(t.notification.body=r);const s=e.notification.image;s&&(t.notification.image=s);const i=e.notification.icon;i&&(t.notification.icon=i)}function qO(t,e){e.data&&(t.data=e.data)}function QO(t,e){var n,r,s,i,o;if(!e.fcmOptions&&!(!((n=e.notification)===null||n===void 0)&&n.click_action))return;t.fcmOptions={};const a=(s=(r=e.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&s!==void 0?s:(i=e.notification)===null||i===void 0?void 0:i.click_action;a&&(t.fcmOptions.link=a);const l=(o=e.fcmOptions)===null||o===void 0?void 0:o.analytics_label;l&&(t.fcmOptions.analyticsLabel=l)}/**
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
 */function YO(t){return typeof t=="object"&&!!t&&uk in t}/**
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
 */function XO(t){if(!t||!t.options)throw uu("App Configuration Object");if(!t.name)throw uu("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const r of e)if(!n[r])throw uu(r);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function uu(t){return je.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JO{constructor(e,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const s=XO(e);this.firebaseDependencies={app:e,appConfig:s,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZO(t){try{t.swRegistration=await navigator.serviceWorker.register(CO,{scope:bO}),t.swRegistration.update().catch(()=>{})}catch(e){throw je.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eD(t,e){if(!e&&!t.swRegistration&&await ZO(t),!(!e&&t.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw je.create("invalid-sw-registration");t.swRegistration=e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tD(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=ck)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pk(t,e){if(!navigator)throw je.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw je.create("permission-blocked");return await tD(t,e==null?void 0:e.vapidKey),await eD(t,e==null?void 0:e.serviceWorkerRegistration),BO(t)}/**
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
 */async function nD(t,e,n){const r=rD(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[uk],message_name:n[NO],message_time:n[TO],message_device_time:Math.floor(Date.now()/1e3)})}function rD(t){switch(t){case co.NOTIFICATION_CLICKED:return"notification_open";case co.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sD(t,e){const n=e.data;if(!n.isFirebaseMessaging)return;t.onMessageHandler&&n.messageType===co.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(Ng(n)):t.onMessageHandler.next(Ng(n)));const r=n.data;YO(r)&&r[RO]==="1"&&await nD(t,n.messageType,r)}const Tg="@firebase/messaging",Rg="0.12.12";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iD=t=>{const e=new JO(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>sD(e,n)),e},oD=t=>{const e=t.getProvider("messaging").getImmediate();return{getToken:r=>pk(e,r)}};function aD(){Nt(new gt("messaging",iD,"PUBLIC")),Nt(new gt("messaging-internal",oD,"PRIVATE")),et(Tg,Rg),et(Tg,Rg,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lD(){try{await P_()}catch{return!1}return typeof window<"u"&&R_()&&N1()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cD(t,e){if(!navigator)throw je.create("only-available-in-window");return t.onMessageHandler=e,()=>{t.onMessageHandler=null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uD(t=Hl()){return lD().then(e=>{if(!e)throw je.create("unsupported-browser")},e=>{throw je.create("indexed-db-unsupported")}),Fr(re(t),"messaging").getImmediate()}async function dD(t,e){return t=re(t),pk(t,e)}function hD(t,e){return t=re(t),cD(t,e)}aD();const fD={apiKey:"AIzaSyD9-_GYLQabcC3SPMTOG9zj2CcaPqzfOrI",authDomain:"lalaland-24931.firebaseapp.com",databaseURL:"https://lalaland-24931-default-rtdb.firebaseio.com",projectId:"lalaland-24931",storageBucket:"lalaland-24931.firebasestorage.app",messagingSenderId:"45134876312",appId:"1:45134876312:web:9e33e46c54cb7c9bfc8aed",measurementId:"G-M04NRCY9FQ"},dc=M_(fD),yl=oT(dc),H=wA(dc),pD=L2(dc);let Ot=null;try{typeof window<"u"&&"serviceWorker"in navigator&&(Ot=uD(dc))}catch(t){console.log("FCM 不支援或初始化失敗:",t)}class mD{constructor(){this.isSupported="Notification"in window}get hasPermission(){return this.isSupported&&Notification.permission==="granted"}async requestPermission(){if(!this.isSupported)return console.warn("🔔 此瀏覽器不支援桌面通知"),!1;try{return await Notification.requestPermission()==="granted"}catch(e){return console.error("🚨 請求通知權限時出錯:",e),!1}}showNotification(e,n="",r=null){if(!this.hasPermission)return window.showNotification&&window.showNotification(`${e}: ${n}`,"info"),null;const s={body:n,icon:"/icon-512.png",tag:"lalaland-message",requireInteraction:!1,silent:!1};try{const i=new Notification(e,s);return i.onclick=()=>{window.focus(),r&&r(),i.close()},setTimeout(()=>{i.close()},5e3),i}catch(i){return console.error("🚨 顯示通知時出錯:",i),null}}playNotificationSound(){if(localStorage.getItem("notificationSound")!=="false")try{const n=new(window.AudioContext||window.webkitAudioContext),r=n.createOscillator(),s=n.createGain();r.connect(s),s.connect(n.destination),r.frequency.value=800,r.type="sine",s.gain.setValueAtTime(.1,n.currentTime),s.gain.exponentialRampToValueAtTime(.01,n.currentTime+.3),r.start(),r.stop(n.currentTime+.3)}catch(n){console.log("🔇 無法播放通知音效:",n)}}}const Pi=new mD,ta="BPkxFDyty7orkmlIPl7B8xl1A8rY1rQuqDWM03HdXOj1fvVWrXHc3mJX99iQl7GGHIk1Nj7rZK3bhCu0os7h8Mw";class gD{constructor(){this.fcmToken=null,this.isSupported=this.checkFCMSupport(),this.isInitialized=!1}checkFCMSupport(){return!!(Ot&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window)}async initialize(){if(!this.isSupported)return console.warn("🚫 FCM 不支援此瀏覽器"),!1;try{return await this.registerServiceWorker(),this.setupForegroundListener(),this.isInitialized=!0,console.log("✅ FCM 初始化成功"),!0}catch(e){return console.error("❌ FCM 初始化失敗:",e),!1}}async registerServiceWorker(){if("serviceWorker"in navigator)try{const e=await navigator.serviceWorker.register("/firebase-messaging-sw.js");return console.log("✅ FCM Service Worker 註冊成功:",e),e}catch(e){throw console.error("❌ FCM Service Worker 註冊失敗:",e),e}}async diagnoseEnvironment(){const e={https:location.protocol==="https:"||location.hostname==="localhost",serviceWorker:"serviceWorker"in navigator,pushManager:"PushManager"in window,notification:"Notification"in window,messaging:!!Ot,permission:Notification.permission,userAgent:navigator.userAgent,url:window.location.href,vapidKey:`${ta.substring(0,10)}...`,platform:navigator.platform,language:navigator.language,cookieEnabled:navigator.cookieEnabled,onLine:navigator.onLine};if("serviceWorker"in navigator)try{const n=await navigator.serviceWorker.getRegistration();e.swRegistered=!!n,e.swActive=!!(n&&n.active)}catch(n){e.swError=n.message}return Notification.permission==="denied"?e.permissionAdvice="通知權限被永久拒絕，需要手動在瀏覽器設定中重新啟用":Notification.permission==="default"?e.permissionAdvice="尚未請求通知權限":Notification.permission==="granted"&&(e.permissionAdvice="通知權限已獲得"),console.log("🔍 FCM 環境診斷:",e),e}async requestPermission(e=null){const n=await this.diagnoseEnvironment();if(!this.isSupported){const r=[];throw n.serviceWorker||r.push("Service Worker"),n.pushManager||r.push("Push Manager"),n.notification||r.push("Notification API"),n.messaging||r.push("Firebase Messaging"),console.error("🚫 FCM 不支援，缺少功能:",r.join(", ")),new Error(`瀏覽器不支援推播通知，缺少: ${r.join(", ")}`)}if(!this.isInitialized&&(console.warn("🚫 FCM 未初始化，嘗試重新初始化..."),!await this.initialize()))throw new Error("FCM 初始化失敗");if(!n.https)throw new Error("推播通知需要 HTTPS 環境或 localhost");try{if(console.log("📋 當前通知權限狀態:",Notification.permission),Notification.permission==="denied")throw new Error("通知權限已被拒絕。請在瀏覽器設定中重新允許通知權限。");console.log("🔔 請求通知權限...");const r=await Notification.requestPermission();if(console.log("📋 權限請求結果:",r),r!=="granted")throw r==="denied"?new Error("通知權限被拒絕。請檢查瀏覽器設定並重新允許通知。"):new Error("通知權限未獲得授予。");console.log("🎫 取得 FCM Token...");try{const s=await dD(Ot,{vapidKey:ta});return s?(console.log("✅ FCM Token 取得成功:",s.substring(0,30)+"..."),this.fcmToken=s,e&&await this.saveFCMToken(e,s),s):(console.warn("⚠️ 無法取得 FCM Token - 可能是瀏覽器不支援或配置問題"),null)}catch(s){throw console.warn("⚠️ FCM Token 取得失敗:",s.message),s.code==="messaging/token-subscribe-failed"?new Error("FCM 服務訂閱失敗，請檢查網路連線和 VAPID 金鑰設定"):s.code==="messaging/invalid-vapid-key"?new Error("VAPID 金鑰無效，請檢查 Firebase 專案設定"):s.code==="messaging/registration-token-not-registered"?new Error("註冊 Token 無效，請清除瀏覽器資料後重試"):new Error(`FCM Token 取得失敗: ${s.message}`)}}catch(r){throw console.error("❌ FCM 權限請求流程失敗:",r.message),r}}async requestPermissionSilently(e=null){try{return await this.requestPermission(e)}catch(n){return console.log("ℹ️ 靜默權限請求結果:",n.message),null}}async saveFCMToken(e,n){try{const r=V(H,`fcmTokens/${e}`);await Gs(r,{token:n,timestamp:Date.now(),userAgent:navigator.userAgent}),console.log("✅ FCM Token 已儲存到資料庫")}catch(r){console.error("❌ 儲存 FCM Token 失敗:",r)}}setupForegroundListener(){Ot&&hD(Ot,e=>{console.log("🔔 FCM 前景訊息:",e);const{title:n,body:r}=e.notification||{};window.showNotification&&window.showNotification(n?`${n}: ${r}`:r||"新訊息","info",6e3),this.playNotificationSound(),(document.hidden||document.visibilityState==="hidden")&&this.showDesktopNotification(n||"新訊息",r||"您有新的訊息")})}showDesktopNotification(e,n){if(Notification.permission==="granted"){const r=new Notification(e,{body:n,icon:"/icon-512.png",badge:"/icon-512.png",tag:"lalaland-fcm"});r.onclick=()=>{window.focus(),r.close()},setTimeout(()=>{r.close()},5e3)}}playNotificationSound(){if(localStorage.getItem("notificationSound")!=="false")try{const n=new(window.AudioContext||window.webkitAudioContext),r=n.createOscillator(),s=n.createGain();r.connect(s),s.connect(n.destination),r.frequency.value=800,r.type="sine",s.gain.setValueAtTime(.1,n.currentTime),s.gain.exponentialRampToValueAtTime(.01,n.currentTime+.3),r.start(),r.stop(n.currentTime+.3)}catch(n){console.log("🔇 無法播放通知音效:",n)}}getCurrentToken(){return this.fcmToken}isEnabled(){return!!(this.fcmToken&&Notification.permission==="granted")}async validateVAPIDKey(){console.log("🔍 驗證 VAPID 金鑰設定...");const e={vapidKey:ta,projectId:"lalaland-24931",messagingSenderId:"45134876312",publicKey:"BPkxFDyty7orkmlIPl7B8xl1A8rY1rQuqDWM03HdXOj1fvVWrXHc3mJX99iQl7GGHIk1Nj7rZK3bhCu0os7h8Mw"};if(console.log("📋 預期的 VAPID 設定:",e),Ot&&Ot.app){const n=Ot.app.options;if(console.log("🔧 Firebase 專案設定:",{projectId:n.projectId,messagingSenderId:n.messagingSenderId,authDomain:n.authDomain}),n.projectId!==e.projectId)return console.error("❌ Firebase Project ID 不匹配!"),console.log("   預期:",e.projectId),console.log("   實際:",n.projectId),!1;if(n.messagingSenderId!==e.messagingSenderId)return console.error("❌ Messaging Sender ID 不匹配!"),console.log("   預期:",e.messagingSenderId),console.log("   實際:",n.messagingSenderId),!1}return ta.length<40?(console.error("❌ VAPID 金鑰格式無效"),!1):(console.log("✅ VAPID 金鑰設定驗證通過"),!0)}async disable(){try{Ot&&this.fcmToken&&console.log("🔕 FCM 已停用"),this.fcmToken=null}catch(e){console.error("❌ 停用 FCM 失敗:",e)}}}const as=new gD,yD=async()=>{console.log("🔍 開始偵錯 Firebase 資料庫...");try{console.log("📡 檢查群組聊天資料...");const t=V(H,"groupChats"),e=await Bt(t);if(e.exists()){const o=e.val();console.log("✅ 群組聊天資料:",o),Object.keys(o).forEach(a=>{var l;if((l=o[a])!=null&&l.messages){const c=Object.keys(o[a].messages).length;console.log(`📝 房間 ${a} 有 ${c} 條訊息`)}else console.log(`📝 房間 ${a} 沒有訊息`)})}else console.log("❌ 沒有找到群組聊天資料");console.log("👥 檢查用戶資料...");const n=V(H,"users"),r=await Bt(n);if(r.exists()){const o=r.val();console.log("✅ 用戶資料:",o),Object.keys(o).forEach(a=>{var l,c;if((l=o[a])!=null&&l.friends){const u=Object.keys(o[a].friends).length;console.log(`👨‍👩‍👧‍👦 用戶 ${a} (${o[a].nickname||"匿名"}) 有 ${u} 個好友`)}else console.log(`👨‍👩‍👧‍👦 用戶 ${a} (${((c=o[a])==null?void 0:c.nickname)||"匿名"}) 沒有好友`)})}else console.log("❌ 沒有找到用戶資料");console.log("💬 檢查私人聊天資料...");const s=V(H,"privateChats"),i=await Bt(s);if(i.exists()){const o=i.val();console.log("✅ 私人聊天資料:",o),Object.keys(o).forEach(a=>{var l;if((l=o[a])!=null&&l.messages){const c=Object.keys(o[a].messages).length;console.log(`💌 私聊 ${a} 有 ${c} 條訊息`)}})}else console.log("❌ 沒有找到私人聊天資料")}catch(t){console.error("🚨 Firebase 偵錯失敗:",t),console.error("錯誤詳情:",t.message),t.code==="PERMISSION_DENIED"&&(console.error("❌ 權限被拒絕 - 需要更新 Firebase 安全規則!"),console.log("📋 請參考 FIREBASE_SETUP.md 文件更新規則"))}},vD=async t=>{console.log(`🔍 偵錯房間 ${t} 的訊息...`);try{const e=V(H,`groupChats/${t}/messages`),n=await Bt(e);if(n.exists()){const r=n.val();return console.log(`✅ 房間 ${t} 找到 ${Object.keys(r).length} 條訊息:`,r),r}else return console.log(`❌ 房間 ${t} 沒有訊息`),null}catch(e){return console.error(`🚨 無法讀取房間 ${t} 的訊息:`,e),null}};/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _D=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),mk=(...t)=>t.filter((e,n,r)=>!!e&&r.indexOf(e)===n).join(" ");/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var wD={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kD=w.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:s="",children:i,iconNode:o,...a},l)=>w.createElement("svg",{ref:l,...wD,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:mk("lucide",s),...a},[...o.map(([c,u])=>w.createElement(c,u)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G=(t,e)=>{const n=w.forwardRef(({className:r,...s},i)=>w.createElement(kD,{ref:i,iconNode:e,className:mk(`lucide-${_D(t)}`,r),...s}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gk=G("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xD=G("BarChart3",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ED=G("BellOff",[["path",{d:"M8.7 3A6 6 0 0 1 18 8a21.3 21.3 0 0 0 .6 5",key:"o7mx20"}],["path",{d:"M17 17H3s3-2 3-9a4.67 4.67 0 0 1 .3-1.7",key:"16f1lm"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SD=G("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dd=G("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CD=G("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bD=G("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ff=G("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yk=G("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Md=G("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ID=G("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ND=G("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TD=G("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dr=G("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RD=G("MicOff",[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M18.89 13.23A7.12 7.12 0 0 0 19 12v-2",key:"80xlxr"}],["path",{d:"M5 10v2a7 7 0 0 0 12 5",key:"p2k8kg"}],["path",{d:"M15 9.34V5a3 3 0 0 0-5.68-1.33",key:"1gzdoj"}],["path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12",key:"r2i35w"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PD=G("Mic",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vk=G("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pg=G("PhoneOff",[["path",{d:"M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91",key:"z86iuo"}],["line",{x1:"22",x2:"2",y1:"2",y2:"22",key:"11kh81"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _k=G("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AD=G("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OD=G("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wk=G("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DD=G("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ag=G("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MD=G("Smile",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kk=G("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LD=G("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jD=G("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xk=G("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ek=G("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sk=G("Volume2",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ck=G("VolumeX",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zn=G("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),FD=()=>{const t=r_(),e=[{icon:h.jsx(Dr,{className:"w-8 h-8"}),title:"即時聊天",description:"與志同道合的朋友即時對話交流"},{icon:h.jsx(Ff,{className:"w-8 h-8"}),title:"安全友善",description:"專為女性LGBTQ+社群設計的安全空間"},{icon:h.jsx(Ek,{className:"w-8 h-8"}),title:"多元社群",description:"閒聊、找伴、交友，滿足不同需求"},{icon:h.jsx(Md,{className:"w-8 h-8"}),title:"隱私保護",description:"匿名模式與隱私設定保護你的安全"}];return h.jsxs("div",{className:"min-h-screen flex flex-col",children:[h.jsx("header",{className:"bg-white/70 backdrop-blur-sm border-b border-gray-200",children:h.jsxs("div",{className:"max-w-6xl mx-auto px-4 py-4 flex justify-between items-center",children:[h.jsxs("div",{className:"flex items-center gap-3",children:[h.jsx("img",{src:"/icon-512.png",alt:"LalaLand",className:"w-10 h-10 rounded-lg"}),h.jsx("h1",{className:"text-2xl font-bold text-sea-dark",children:"LalaLand"})]}),h.jsx("button",{onClick:()=>t("/login"),className:"btn-primary",children:"登入 / 註冊"})]})}),h.jsx("main",{className:"flex-1 flex flex-col items-center justify-center px-4 py-12",children:h.jsxs("div",{className:"text-center max-w-4xl mx-auto",children:[h.jsx("img",{src:"/icon-512.png",alt:"LalaLand Logo",className:"w-32 h-32 mx-auto mb-8 animate-float"}),h.jsxs("h2",{className:"text-4xl md:text-5xl font-bold text-gray-800 mb-6",children:["歡迎來到",h.jsx("span",{className:"text-sea-blue",children:" LalaLand"})]}),h.jsxs("p",{className:"text-xl text-gray-600 mb-8 leading-relaxed",children:["專為女同志設計的安全聊天平台",h.jsx("br",{}),"在這裡，你可以安心做自己，與志同道合的朋友建立真摯連結"]}),h.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center mb-16",children:[h.jsx("button",{onClick:()=>t("/login"),className:"btn-primary text-lg px-8 py-4",children:"開始聊天"}),h.jsx("button",{onClick:()=>t("/login"),className:"btn-secondary text-lg px-8 py-4",children:"匿名體驗"})]}),h.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-4 gap-8",children:e.map((n,r)=>h.jsxs("div",{className:"card text-center hover:shadow-medium transition-shadow",children:[h.jsx("div",{className:"text-sea-blue mb-4 flex justify-center",children:n.icon}),h.jsx("h3",{className:"font-semibold text-lg mb-2",children:n.title}),h.jsx("p",{className:"text-gray-600 text-sm",children:n.description})]},r))})]})}),h.jsx("footer",{className:"bg-white/70 backdrop-blur-sm border-t border-gray-200 py-8",children:h.jsx("div",{className:"max-w-6xl mx-auto px-4 text-center text-gray-500",children:h.jsx("p",{children:"© 2025 LalaLand. 致力於為女性LGBTQ+社群提供安全友善的交流空間"})})})]})},Og=()=>{const t=r_(),[e,n]=w.useState("login"),[r,s]=w.useState(!1),[i,o]=w.useState(!1),[a,l]=w.useState({email:"",password:"",confirmPassword:"",nickname:""}),c=f=>{l(m=>({...m,[f.target.name]:f.target.value}))},u=async f=>{f.preventDefault(),o(!0);try{await BI(yl,a.email,a.password),L.success("登入成功！"),t("/chat")}catch(m){L.error("登入失敗："+(m.message||"請檢查帳號密碼"))}finally{o(!1)}},d=async f=>{if(f.preventDefault(),o(!0),a.password!==a.confirmPassword){L.error("密碼確認不一致"),o(!1);return}if(a.password.length<6){L.error("密碼至少需要6個字元"),o(!1);return}try{const m=await WI(yl,a.email,a.password);await HI(m.user,{displayName:a.nickname||"新用戶"}),await set(ref(database,`users/${m.user.uid}`),{nickname:a.nickname||"新用戶",email:a.email,avatar:null,joinedAt:Date.now(),isOnline:!0}),L.success("註冊成功！歡迎加入 LalaLand！"),t("/chat")}catch(m){L.error("註冊失敗："+(m.message||"請稍後再試"))}finally{o(!1)}};return h.jsx("div",{className:"min-h-screen flex items-center justify-center px-4 py-8",children:h.jsxs("div",{className:"w-full max-w-md",children:[h.jsxs("button",{onClick:()=>t("/"),className:"flex items-center gap-2 text-gray-600 hover:text-sea-blue mb-6 transition-colors",children:[h.jsx(gk,{className:"w-4 h-4"}),"返回首頁"]}),h.jsxs("div",{className:"card",children:[h.jsxs("div",{className:"text-center mb-8",children:[h.jsx("img",{src:"/icon-512.png",alt:"LalaLand",className:"w-16 h-16 mx-auto mb-4"}),h.jsxs("h2",{className:"text-2xl font-bold text-gray-900 mb-2 text-center",children:[e==="login"&&"歡迎回來",e==="register"&&"建立帳號"]})]}),h.jsxs("div",{className:"flex bg-gray-100 rounded-lg p-1 mb-6",children:[h.jsx("button",{className:`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${e==="login"?"bg-white text-sea-blue shadow-sm":"text-gray-600 hover:text-gray-800"}`,onClick:()=>n("login"),children:"登入"}),h.jsx("button",{className:`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${e==="register"?"bg-white text-sea-blue shadow-sm":"text-gray-600 hover:text-gray-800"}`,onClick:()=>n("register"),children:"註冊"})]}),h.jsxs("form",{onSubmit:e==="login"?u:d,children:[e==="register"&&h.jsxs("div",{className:"mb-4",children:[h.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"暱稱"}),h.jsxs("div",{className:"relative",children:[h.jsx(xk,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"}),h.jsx("input",{type:"text",name:"nickname",value:a.nickname,onChange:c,className:"input-field pl-10",placeholder:"輸入你的暱稱",required:!0})]})]}),h.jsxs("div",{className:"mb-4",children:[h.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"電子郵件"}),h.jsxs("div",{className:"relative",children:[h.jsx(ND,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"}),h.jsx("input",{type:"email",name:"email",value:a.email,onChange:c,className:"input-field pl-10",placeholder:"輸入你的電子郵件",required:!0})]})]}),h.jsxs("div",{className:"mb-4",children:[h.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"密碼"}),h.jsxs("div",{className:"relative",children:[h.jsx(Md,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"}),h.jsx("input",{type:r?"text":"password",name:"password",value:a.password,onChange:c,className:"input-field pl-10 pr-10",placeholder:"輸入密碼",required:!0}),h.jsx("button",{type:"button",onClick:()=>s(!r),className:"absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600",children:r?h.jsx(CD,{className:"w-5 h-5"}):h.jsx(bD,{className:"w-5 h-5"})})]})]}),e==="register"&&h.jsxs("div",{className:"mb-6",children:[h.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"確認密碼"}),h.jsxs("div",{className:"relative",children:[h.jsx(Md,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"}),h.jsx("input",{type:r?"text":"password",name:"confirmPassword",value:a.confirmPassword,onChange:c,className:"input-field pl-10",placeholder:"再次輸入密碼",required:!0})]})]}),h.jsx("button",{type:"submit",disabled:i,className:"btn-primary w-full text-center disabled:opacity-50 disabled:cursor-not-allowed",children:i?"處理中...":e==="login"?"登入":"註冊"})]})]})]})})},Pt=__((t,e)=>({currentRoom:"chat",currentPrivateChat:null,messages:[],onlineUsers:{},friends:[],privateChatsList:[],sidebarOpen:!1,darkMode:localStorage.getItem("darkMode")==="yes",setCurrentRoom:n=>t({currentRoom:n}),setCurrentPrivateChat:n=>t({currentPrivateChat:n}),setMessages:n=>t({messages:n}),addMessage:n=>t(r=>({messages:[...r.messages,n]})),setOnlineUsers:n=>t({onlineUsers:n}),setFriends:n=>t({friends:n}),setPrivateChatsList:n=>t({privateChatsList:n}),setSidebarOpen:n=>t({sidebarOpen:n}),toggleDarkMode:()=>{const n=!e().darkMode;localStorage.setItem("darkMode",n?"yes":"no"),t({darkMode:n}),n?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},clearMessages:()=>t({messages:[]})})),UD=async t=>{if(t!=null&&t.uid)try{console.log("正在為用戶創建範例資料:",t.nickname);const e=V(H,`users/${t.uid}`),n={nickname:t.nickname||"匿名用戶",avatar:t.avatar||null,email:t.email||null,isAnonymous:t.isAnonymous||!1,lastSeen:Date.now(),isOnline:!0,joinedAt:Date.now()};await Gs(e,n),console.log("✅ 用戶資料已更新")}catch(e){console.error("❌ 創建範例資料失敗:",e)}};class $D{constructor(){this.maxFileSize=5*1024*1024,this.allowedTypes=["image/jpeg","image/jpg","image/png","image/gif","image/webp"],this.maxWidth=400,this.maxHeight=400}validateFile(e){const n=[];if(!e)return n.push("請選擇一個文件"),{valid:!1,errors:n};if(this.allowedTypes.includes(e.type)||n.push("只支援 JPG、PNG、GIF、WebP 格式的圖片"),e.size>this.maxFileSize){const r=this.maxFileSize/1048576;n.push(`文件大小不能超過 ${r}MB`)}return{valid:n.length===0,errors:n}}async compressImage(e,n=this.maxWidth,r=this.maxHeight,s=.8){return new Promise((i,o)=>{const a=document.createElement("canvas"),l=a.getContext("2d"),c=new Image;c.onload=()=>{let{width:u,height:d}=this.calculateDimensions(c.width,c.height,n,r);a.width=u,a.height=d,l.drawImage(c,0,0,u,d),a.toBlob(f=>{i(f)},e.type,s)},c.onerror=()=>{o(new Error("圖片載入失敗"))},c.src=URL.createObjectURL(e)})}calculateDimensions(e,n,r,s){if(e<=r&&n<=s)return{width:e,height:n};const i=e/n;return e>n?(e=r,n=e/i):(n=s,e=n*i),{width:Math.round(e),height:Math.round(n)}}async fileToBase64(e){return new Promise((n,r)=>{const s=new FileReader;s.onload=()=>{n(s.result)},s.onerror=()=>{r(new Error("文件讀取失敗"))},s.readAsDataURL(e)})}async processImage(e){try{console.log("🖼️ 開始處理圖片:",e.name);const n=this.validateFile(e);if(!n.valid)throw new Error(n.errors.join(", "));console.log("📐 壓縮圖片...");const r=await this.compressImage(e);console.log("🔤 轉換為 Base64...");const s=await this.fileToBase64(r);return console.log("✅ 圖片處理完成",{originalSize:(e.size/1024).toFixed(1)+"KB",compressedSize:(r.size/1024).toFixed(1)+"KB",reduction:((1-r.size/e.size)*100).toFixed(1)+"%"}),{success:!0,base64:s,blob:r,originalFile:e,stats:{originalSize:e.size,compressedSize:r.size,reduction:((1-r.size/e.size)*100).toFixed(1)}}}catch(n){return console.error("❌ 圖片處理失敗:",n),{success:!1,error:n.message}}}createAvatarPreview(e,n=80){const r=document.createElement("canvas"),s=r.getContext("2d"),i=new Image;return new Promise(o=>{i.onload=()=>{r.width=n,r.height=n,s.beginPath(),s.arc(n/2,n/2,n/2,0,Math.PI*2,!0),s.closePath(),s.clip(),s.drawImage(i,0,0,n,n),o(r.toDataURL())},i.src=e})}}const vl=new $D,zD=({currentAvatar:t="",onAvatarChange:e=()=>{},size:n="large"})=>{const[r,s]=w.useState(!1),[i,o]=w.useState(t),[a,l]=w.useState(!1),c=w.useRef(null),u=w.useRef(null),f={small:{container:"w-16 h-16",icon:"w-4 h-4",button:"w-5 h-5"},medium:{container:"w-20 h-20",icon:"w-5 h-5",button:"w-6 h-6"},large:{container:"w-24 h-24",icon:"w-6 h-6",button:"w-7 h-7"}}[n],m=async p=>{if(p){s(!0);try{console.log("📸 處理頭像上傳:",p.name);const g=await vl.processImage(p);if(g.success){const x=await vl.createAvatarPreview(g.base64);o(x),e(g.base64,g.stats),console.log("✅ 頭像上傳成功")}else throw new Error(g.error)}catch(g){console.error("❌ 頭像上傳失敗:",g),window.showNotification&&window.showNotification(`頭像上傳失敗: ${g.message}`,"error",5e3)}finally{s(!1),l(!1)}}},y=p=>{const g=p.target.files[0];m(g),p.target.value=""},_=p=>{p.preventDefault();const g=p.dataTransfer.files[0];m(g)},k=p=>{p.preventDefault()},v=()=>{o(""),e(""),l(!1)};return h.jsxs("div",{className:"relative",children:[h.jsxs("div",{className:`${f.container} relative rounded-full overflow-hidden bg-gray-100 dark:bg-gray-700 cursor-pointer group border-2 border-gray-200 dark:border-gray-600 hover:border-primary-400 dark:hover:border-primary-400 transition-colors`,onClick:()=>l(!a),onDrop:_,onDragOver:k,children:[i?h.jsx("img",{src:i,alt:"頭像",className:"w-full h-full object-cover"}):h.jsx("div",{className:"w-full h-full flex items-center justify-center text-gray-400 dark:text-gray-500",children:h.jsx(xk,{className:f.icon})}),r?h.jsx("div",{className:"absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center",children:h.jsx("div",{className:"animate-spin rounded-full h-6 w-6 border-2 border-white border-t-transparent"})}):h.jsx("div",{className:"absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-200 flex items-center justify-center",children:h.jsx(Dd,{className:`${f.icon} text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200`})})]}),a&&h.jsxs("div",{className:"absolute top-full left-0 mt-2 z-50 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden min-w-48",children:[h.jsxs("button",{onClick:()=>{var p;(p=c.current)==null||p.click(),l(!1)},className:"w-full px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-3 text-sm",children:[h.jsx(jD,{className:"w-4 h-4 text-gray-500"}),h.jsx("span",{children:"從相簿選擇"})]}),h.jsxs("button",{onClick:()=>{var p;(p=u.current)==null||p.click(),l(!1)},className:"w-full px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-3 text-sm md:hidden",children:[h.jsx(Dd,{className:"w-4 h-4 text-gray-500"}),h.jsx("span",{children:"拍照上傳"})]}),i&&h.jsxs("button",{onClick:v,className:"w-full px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-3 text-sm text-red-600 border-t border-gray-200 dark:border-gray-700",children:[h.jsx(Zn,{className:"w-4 h-4"}),h.jsx("span",{children:"移除頭像"})]})]}),h.jsx("input",{ref:c,type:"file",accept:"image/*",onChange:y,className:"hidden"}),h.jsx("input",{ref:u,type:"file",accept:"image/*",capture:"environment",onChange:y,className:"hidden"}),a&&h.jsx("div",{className:"fixed inset-0 z-40",onClick:()=>l(!1)})]})},WD=({isOpen:t,onClose:e})=>{const{user:n,setUser:r}=Ue(),[s,i]=w.useState((n==null?void 0:n.nickname)||""),[o,a]=w.useState((n==null?void 0:n.avatar)||""),[l,c]=w.useState(s),[u,d]=w.useState(localStorage.getItem("notificationSound")!=="false"),[f,m]=w.useState(localStorage.getItem("desktopNotification")!=="false"),[y,_]=w.useState(!1);if(w.useEffect(()=>{t&&_(as.isEnabled())},[t]),w.useEffect(()=>{t&&(c((n==null?void 0:n.nickname)||""),a((n==null?void 0:n.avatar)||""))},[t,n]),!t)return null;const k=async()=>{try{const E={...n,nickname:l||"匿名用戶",avatar:o};r(E),console.log("💾 保存設定:",{nickname:l,avatar:o,notifications:notificationsEnabled}),e()}catch(E){console.error("保存設定失敗:",E)}},v=()=>{const E=!u;d(E),localStorage.setItem("notificationSound",E.toString()),L.success(E?"🔊 提示音已開啟":"🔇 提示音已關閉")},p=async()=>{try{if(f)m(!1),localStorage.setItem("desktopNotification","false"),L.success("🔕 桌面通知已關閉");else{if(!("Notification"in window)){L.error("❌ 此瀏覽器不支援通知");return}if(await Notification.requestPermission()!=="granted"){L.error("❌ 通知權限被拒絕");return}m(!0),localStorage.setItem("desktopNotification","true"),L.success("🔔 桌面通知已啟用"),window.showNotification&&window.showNotification("桌面通知已啟用！","success")}}catch(E){console.error("切換桌面通知設定失敗:",E),L.error("❌ 桌面通知設定失敗")}},g=async()=>{try{y?(await as.disable(),_(!1),L.success("🔕 推播通知已關閉")):(console.log("🚀 開始啟用 FCM 推播通知..."),await as.requestPermission(n==null?void 0:n.uid)?(_(!0),L.success("🚀 推播通知已啟用！",{duration:5e3}),window.showNotification&&window.showNotification("🚀 FCM 推播通知已啟用！現在即使關閉瀏覽器也能收到通知。","success",8e3)):L.error("❌ 推播通知 Token 獲取失敗"))}catch(E){console.error("FCM 推播設定失敗:",E);let C="❌ 推播通知設定失敗";E.message.includes("權限")?(C=`❌ ${E.message}`,window.showNotification&&window.showNotification("💡 如需重新啟用推播：請點擊網址列左側的鎖頭圖示 → 通知 → 允許","warning",1e4)):E.message.includes("HTTPS")?C="❌ 推播通知需要 HTTPS 環境":E.message.includes("不支援")?C=`❌ ${E.message}`:C=`❌ 推播通知設定失敗：${E.message}`,L.error(C,{duration:6e3})}},x=()=>{const E=`
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
    `.trim();window.showNotification?window.showNotification(E,"info",15e3):alert(E)},S=()=>{const E=`https://ui-avatars.com/api/?name=${encodeURIComponent(l||"匿名")}&background=56c596&color=fff&size=128`;a(E)};return h.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4",children:h.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto",children:[h.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700",children:[h.jsx("h2",{className:"text-xl font-semibold text-gray-900 dark:text-white",children:"設定"}),h.jsx("button",{onClick:e,className:"p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors",children:h.jsx(Zn,{className:"w-5 h-5 text-gray-500"})})]}),h.jsxs("div",{className:"p-6 space-y-6",children:[h.jsxs("div",{children:[h.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white mb-4",children:"個人資料"}),h.jsxs("div",{className:"flex items-center gap-4 mb-4",children:[h.jsx(zD,{currentAvatar:o||`https://ui-avatars.com/api/?name=${encodeURIComponent(l||"匿名")}&background=56c596&color=fff&size=96`,onAvatarChange:(E,C)=>{console.log("🖼️ 頭像已更新:",{stats:C}),a(E),window.showNotification&&C&&window.showNotification(`頭像已更新！壓縮率 ${C.reduction}%`,"success",3e3)},size:"large"}),h.jsxs("div",{className:"flex-1",children:[h.jsx("h4",{className:"font-medium text-gray-900 dark:text-white mb-1",children:"個人頭像"}),h.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400 mb-2",children:"點擊頭像上傳新圖片，支援拖拽上傳"}),h.jsx("div",{className:"flex gap-2",children:h.jsxs("button",{onClick:S,className:"flex items-center gap-2 px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-sm",children:[h.jsx(Dd,{className:"w-3 h-3"}),"生成隨機頭像"]})}),h.jsx("p",{className:"text-xs text-gray-400 dark:text-gray-500 mt-1",children:"支援 JPG、PNG、GIF、WebP，最大 5MB"})]})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",children:"暱稱"}),h.jsx("input",{type:"text",value:l,onChange:E=>c(E.target.value),className:"w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white",placeholder:"輸入你的暱稱",maxLength:20})]})]}),h.jsxs("div",{children:[h.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white mb-4",children:"通知設定"}),h.jsxs("div",{className:"flex items-center justify-between mb-4",children:[h.jsxs("div",{className:"flex items-center gap-3",children:[u?h.jsx(Sk,{className:"w-5 h-5 text-green-500"}):h.jsx(Ck,{className:"w-5 h-5 text-gray-400"}),h.jsxs("div",{children:[h.jsx("p",{className:"font-medium text-gray-900 dark:text-white",children:"提示音"}),h.jsx("p",{className:"text-sm text-gray-500",children:"收到新訊息時播放提示音"})]})]}),h.jsx("button",{onClick:v,className:`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${u?"bg-blue-500":"bg-gray-300"}`,children:h.jsx("span",{className:`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${u?"translate-x-6":"translate-x-1"}`})})]}),h.jsxs("div",{className:"flex items-center justify-between",children:[h.jsxs("div",{className:"flex items-center gap-3",children:[f?h.jsx(SD,{className:"w-5 h-5 text-green-500"}):h.jsx(ED,{className:"w-5 h-5 text-gray-400"}),h.jsxs("div",{children:[h.jsx("p",{className:"font-medium text-gray-900 dark:text-white",children:"桌面通知"}),h.jsx("p",{className:"text-sm text-gray-500",children:"在瀏覽器中顯示通知泡泡"})]})]}),h.jsx("button",{onClick:p,className:`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${f?"bg-blue-500":"bg-gray-300"}`,children:h.jsx("span",{className:`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${f?"translate-x-6":"translate-x-1"}`})})]}),h.jsxs("div",{className:"mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg",children:[h.jsxs("div",{className:"flex items-center justify-between mb-3",children:[h.jsxs("div",{className:"flex items-center gap-3",children:[y?h.jsx(Ag,{className:"w-5 h-5 text-blue-500"}):h.jsx(Ag,{className:"w-5 h-5 text-gray-400"}),h.jsxs("div",{children:[h.jsx("p",{className:"font-medium text-gray-900 dark:text-white",children:"推播通知 (FCM)"}),h.jsx("p",{className:"text-sm text-gray-500",children:"即使關閉瀏覽器也能收到通知"})]})]}),h.jsx("button",{onClick:g,className:`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${y?"bg-blue-500":"bg-gray-300"}`,children:h.jsx("span",{className:`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${y?"translate-x-6":"translate-x-1"}`})})]}),h.jsxs("div",{className:"flex gap-2 text-xs",children:[h.jsx("button",{onClick:x,className:"px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors",children:"📖 權限指引"}),h.jsx("button",{onClick:async()=>{const E=await as.diagnoseEnvironment(),C=`
🔍 推播通知環境檢查：

✅ HTTPS: ${E.https?"是":"❌ 否"}
✅ Service Worker: ${E.serviceWorker?"支援":"❌ 不支援"}
✅ 推播管理: ${E.pushManager?"支援":"❌ 不支援"}  
✅ 通知 API: ${E.notification?"支援":"❌ 不支援"}
✅ Firebase Messaging: ${E.messaging?"已載入":"❌ 未載入"}
📋 權限狀態: ${E.permission}
🌐 瀏覽器: ${E.userAgent.includes("Chrome")?"Chrome":E.userAgent.includes("Firefox")?"Firefox":E.userAgent.includes("Safari")?"Safari":"其他"}
                    `.trim();window.showNotification?window.showNotification(C,"info",1e4):alert(C)},className:"px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors",children:"🔍 環境檢查"})]})]})]}),h.jsxs("div",{children:[h.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white mb-4",children:"其他"}),h.jsxs("div",{className:"space-y-2 text-sm text-gray-600 dark:text-gray-400",children:[h.jsx("p",{children:"• 版本: 1.0.0"}),h.jsx("p",{children:"• React 聊天室"}),h.jsx("p",{children:"• 支援即時通訊和檔案分享"})]})]})]}),h.jsxs("div",{className:"flex gap-3 p-6 border-t border-gray-200 dark:border-gray-700",children:[h.jsx("button",{onClick:e,className:"flex-1 px-4 py-2 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors",children:"取消"}),h.jsx("button",{onClick:k,className:"flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors",children:"保存"})]})]})})},_l=async()=>{console.log("🧹 開始清理過期的在線用戶...");try{const t=V(H,"users"),e=await Bt(t);if(!e.exists()){console.log("📭 沒有找到任何用戶資料");return}const n=e.val(),r=Date.now(),s=5*60*1e3;let i=0;for(const[o,a]of Object.entries(n)){if(!a)continue;const l=!a.lastSeen||r-a.lastSeen>s;a.isOnline&&l&&(console.log(`🗑️ 清理過期用戶: ${o} (${a.nickname||"未知"})`),a.isAnonymous?(await To(V(H,`users/${o}`)),console.log(`✅ 已刪除匿名用戶: ${o}`)):(await dA(V(H,`users/${o}`),{isOnline:!1,lastSeen:r}),console.log(`✅ 已將註冊用戶設為離線: ${o}`)),i++)}return console.log(`🎉 清理完成！共清理了 ${i} 個過期用戶`),i}catch(t){throw console.error("❌ 清理過期用戶失敗:",t),t}},BD=()=>{console.log("⏰ 啟動定期清理服務..."),_l();const t=setInterval(_l,5*60*1e3);return()=>{console.log("🛑 停止定期清理服務"),clearInterval(t)}},hc=()=>{const{user:t}=Ue(),[e,n]=w.useState({}),[r,s]=w.useState(0),i=c=>Object.values(c).reduce((u,d)=>u+(parseInt(d)||0),0);w.useEffect(()=>{if(!(t!=null&&t.uid)){n({}),s(0);return}const c=V(H,`userUnreadCounts/${t.uid}`);return Jn(c,u=>{if(!u.exists()){n({}),s(0);return}const d=u.val(),f={};let m=0;Object.entries(d).forEach(([y,_])=>{const k=parseInt(_)||0;f[y]=k,m+=k}),console.log("📊 未讀訊息更新:",{counts:f,total:m}),n(f),s(y=>{const _=i(f);return y===0&&_===0?0:y>0&&_===0?y:_}),setTimeout(()=>{const y=Object.values(f).reduce((_,k)=>_+(parseInt(k)||0),0);y!==m&&(console.warn("⚠️ Firebase監聽器數據不一致，重新同步"),s(y))},100)}),()=>{Iw(c)}},[t==null?void 0:t.uid]);const o=async c=>{if(!(t!=null&&t.uid)||!c){console.warn("❌ markAsRead: 缺少必要參數",{userUid:t==null?void 0:t.uid,chatPartnerId:c});return}const u=e[c]||0;if(console.log(`🔄 開始標記 ${c} 為已讀:`,{currentCount:u,unreadCountsKeys:Object.keys(e),totalUnread:r}),u===0){console.log(`⏭️ ${c} 已經沒有未讀訊息，跳過處理`);return}try{const d=V(H,`userUnreadCounts/${t.uid}/${c}`);await To(d);const f=V(H,`userLastRead/${t.uid}/${c}`);await Gs(f,{timestamp:Date.now()}),n(m=>{console.log(`📝 更新本地狀態 - 刪除 ${c}:`,{beforeDelete:m,targetKey:c,targetCount:m[c]});const y={...m};delete y[c];const _=i(y);return console.log("🔢 重新計算總數:",{oldCounts:m,newCounts:y,oldTotal:r,newTotal:_}),s(_),y}),console.log(`✅ 已讀標記完成: ${c}`)}catch(d){console.error(`❌ 標記已讀失敗 (${c}):`,d),d.code&&console.error("錯誤代碼:",d.code)}},a=async c=>{if(!(!(t!=null&&t.uid)||!c))try{console.log(`📈 增加與 ${c} 的未讀數量`);const u=V(H,`userUnreadCounts/${t.uid}/${c}`);let d=0;await CA(u,f=>(d=(f||0)+1,console.log(`  舊數量: ${f}, 新數量: ${d}`),d)),n(f=>{const m={...f,[c]:d},y=i(m);return console.log(`� 更新未讀計數: ${c} -> ${d}, 總數: ${y}`),s(y),m})}catch(u){console.error("增加未讀數量失敗:",u),(u==null?void 0:u.code)==="PERMISSION_DENIED"&&console.warn("⚠️ Firebase 規則拒絕寫入 userUnreadCounts，請確認規則允許: /userUnreadCounts/${user.uid}/${chatPartnerId}")}},l=()=>{const c=Object.values(e).reduce((u,d)=>u+(parseInt(d)||0),0);return console.log("🔄 重新計算總未讀數:",{unreadCounts:e,calculatedTotal:c,currentTotal:r}),c!==r&&(console.log(`⚠️ 總未讀數不一致，修正: ${r} -> ${c}`),s(c)),c};return w.useEffect(()=>{if(typeof window<"u")return window.recalculateTotal=l,window.debugUnreadCounts=()=>{const c={unreadCounts:e,unreadCountsEntries:Object.entries(e),totalUnread:r,calculatedTotal:i(e)};return console.log("🔍 未讀計數調試:",c),console.table(e),c},window.clearAllUnread=()=>(console.log("🧹 強制清空所有未讀計數"),n({}),s(0),{success:!0,message:"已清空所有未讀計數"}),window.clearSpecificUnread=c=>(console.log(`🎯 清除特定用戶 ${c} 的未讀計數`),n(u=>{const d={...u};delete d[c];const f=i(d);return s(f),console.log("清除後狀態:",{newCounts:d,newTotal:f}),d}),{success:!0,message:`已清除 ${c} 的未讀計數`}),console.log("✅ 調試函數已設置到 window 物件:",{recalculateTotal:typeof window.recalculateTotal,debugUnreadCounts:typeof window.debugUnreadCounts}),()=>{delete window.recalculateTotal,delete window.debugUnreadCounts}},[e,r,l]),{unreadCounts:e,totalUnread:r,markAsRead:o,incrementUnread:a,getUnreadCount:c=>e[c]||0,recalculateTotal:l}};function bk({count:t=0,className:e=""}){if(t===0)return null;const n=t>99?"99+":t.toString();return h.jsx("span",{className:`absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold 
                  min-w-[18px] h-[18px] rounded-full flex items-center justify-center 
                  px-1 ${e}`,style:{fontSize:"10px"},children:n})}const VD=()=>{const{user:t}=Ue(),{currentRoom:e,setCurrentRoom:n,sidebarOpen:r,setSidebarOpen:s,darkMode:i,toggleDarkMode:o,onlineUsers:a}=Pt(),[l,c]=w.useState(!1),{totalUnread:u}=hc(),d=async()=>{try{if(t&&t.isAnonymous){console.log("🗑️ 匿名用戶登出 - 清理所有資料");const _=V(H,`users/${t.uid}`);await To(_),console.log("✅ 匿名用戶資料已刪除")}await QI(yl),L.success("已登出")}catch(_){console.error("登出失敗:",_),L.error("登出失敗")}},f=async()=>{try{L.loading("正在清理過期用戶...",{id:"cleanup"});const _=await _l();L.success(`已清理 ${_} 個過期用戶`,{id:"cleanup"})}catch{L.error("清理失敗",{id:"cleanup"})}},m=[{id:"chat",name:"閒聊區",icon:Dr,tip:"歡迎隨意聊聊、發問、抒發生活大小事"},{id:"love",name:"找伴區",icon:Ff,tip:"你正在找伴專區，請多用心互動，彼此尊重"},{id:"sex",name:"約炮區",icon:Ek,tip:"匿名聊性、約炮自由，但請勿冒犯他人"}],y=`
    ${r?"translate-x-0":"-translate-x-full"}
    md:translate-x-0 fixed md:relative left-0 top-0 h-full w-80 bg-white/80 dark:bg-dark-card/80 
    backdrop-blur-sm border-r border-gray-200 dark:border-gray-700 z-30 transition-transform duration-300
    pt-16 md:pt-0
  `;return h.jsxs(h.Fragment,{children:[r&&h.jsx("div",{className:"md:hidden fixed inset-0 bg-black/50 z-20",onClick:()=>s(!1)}),h.jsx("div",{className:y,children:h.jsxs("div",{className:"flex flex-col h-full",children:[h.jsxs("div",{className:"p-6 border-b border-gray-200 dark:border-gray-700",children:[h.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[h.jsx("img",{src:(t==null?void 0:t.avatar)||`https://ui-avatars.com/api/?name=${t==null?void 0:t.nickname}&background=2877b9&color=fff`,alt:t==null?void 0:t.nickname,className:"w-12 h-12 rounded-full border-2 border-sea-blue"}),h.jsxs("div",{children:[h.jsx("h3",{className:"font-semibold text-gray-800 dark:text-dark-text",children:(t==null?void 0:t.nickname)||"用戶"}),h.jsx("p",{className:"text-sm text-gray-500",children:t!=null&&t.isAnonymous?"匿名用戶":"已註冊用戶"})]})]}),h.jsxs("div",{className:"text-sm text-gray-600 dark:text-gray-400",children:["在線成員: ",Object.keys(a).length," 人"]})]}),h.jsxs("div",{className:"flex-1 overflow-y-auto",children:[h.jsxs("div",{className:"p-4",children:[h.jsx("h4",{className:"text-sm font-medium text-gray-500 dark:text-gray-400 mb-3",children:"聊天室"}),h.jsxs("div",{className:"space-y-1",children:[m.map(_=>h.jsxs("button",{onClick:()=>{n(_.id),s(!1)},className:`sidebar-item w-full ${e===_.id?"active":""}`,children:[h.jsx(_.icon,{className:"w-5 h-5"}),h.jsx("span",{className:"font-medium",children:_.name})]},_.id)),h.jsxs("button",{onClick:()=>{n("private"),s(!1)},className:`sidebar-item w-full ${e==="private"?"active":""} relative`,children:[h.jsx(Dr,{className:"w-5 h-5"}),h.jsx("span",{className:"font-medium",children:"私人訊息"}),h.jsx(bk,{count:u})]})]})]}),h.jsxs("div",{className:"p-4 border-t border-gray-200 dark:border-gray-700",children:[h.jsxs("div",{className:"flex items-center justify-between mb-3",children:[h.jsx("h4",{className:"text-sm font-medium text-gray-500 dark:text-gray-400",children:"在線成員"}),h.jsx("button",{onClick:f,className:"text-xs px-2 py-1 rounded bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-600 dark:text-gray-400",title:"清理過期用戶",children:"🧹"})]}),h.jsx("div",{className:"space-y-2",children:Object.entries(a).map(([_,k])=>h.jsxs("div",{className:"flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700",children:[h.jsx("img",{src:k.avatar||`https://ui-avatars.com/api/?name=${k.nickname}&background=56c596&color=fff`,alt:k.nickname,className:"w-8 h-8 rounded-full"}),h.jsxs("div",{children:[h.jsx("p",{className:"text-sm font-medium text-gray-700 dark:text-gray-300",children:k.nickname}),h.jsxs("div",{className:"flex items-center gap-1",children:[h.jsx("div",{className:"w-2 h-2 bg-accent-green rounded-full"}),h.jsx("span",{className:"text-xs text-gray-500",children:"在線"})]})]})]},_))})]})]}),h.jsx("div",{className:"p-4 border-t border-gray-200 dark:border-gray-700",children:h.jsxs("div",{className:"space-y-1",children:[h.jsxs("button",{onClick:o,className:"sidebar-item w-full",children:[i?h.jsx(kk,{className:"w-5 h-5"}):h.jsx(vk,{className:"w-5 h-5"}),h.jsx("span",{children:i?"淺色模式":"深色模式"})]}),h.jsxs("button",{onClick:()=>c(!0),className:"sidebar-item w-full",children:[h.jsx(DD,{className:"w-5 h-5"}),h.jsx("span",{children:"設定"})]}),h.jsxs("button",{onClick:d,className:"sidebar-item w-full text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20",children:[h.jsx(ID,{className:"w-5 h-5"}),h.jsx("span",{children:"登出"})]})]})})]})}),h.jsx(WD,{isOpen:l,onClose:()=>c(!1)})]})},HD=t=>({casual:"日常閒聊",dating:"約會交友",hookup:"約砲專區",confession:"匿名告白",general:"一般討論",random:"隨機聊天"})[t]||`聊天室 ${t}`,KD=t=>{const{user:e}=Ue(),{setMessages:n,addMessage:r,clearMessages:s,currentRoom:i}=Pt(),o=w.useRef(0);return w.useEffect(()=>{if(!e||!t){console.log("⚠️ useFirebaseChat: 缺少必要參數",{user:!!e,roomId:t});return}console.log(`🚀 開始監聽房間 ${t} 的訊息...`),s();const l=V(H,`groupChats/${t}/messages`),c=Jn(l,u=>{try{const d=u.val();if(console.log(`📝 房間 ${t} 收到資料:`,d),d){const f=Object.entries(d).map(([_,k])=>(Math.random()<.1&&console.log(`⏰ 訊息 ${_} 時間戳:`,{timestamp:k.timestamp,time:k.time,rawMessage:k}),{id:_,...k,timestamp:k.timestamp||k.time||Date.now()}));f.sort((_,k)=>{const v=_.timestamp||_.time||0,p=k.timestamp||k.time||0;return v-p});const m=f.length,y=o.current;m>y&&y>0&&f.slice(y).forEach(k=>{const v=k.from||k.userId||k.uid;if(v!==e.uid){const p=i===t,g=k.user||k.nickname||"匿名用戶",x=HD(t);console.log("� 檢查群組通知條件:",{currentRoom:i,roomId:t,isCurrentlyInThisRoom:p,messageFrom:v,senderName:g}),p?console.log(`🔇 不顯示通知 - 用戶正在 ${x} 房間`):(console.log(`�🔔 收到來自 ${g} 的新群組訊息 (非當前房間 ${x}):`,k.text),Pi.showMessageNotification(`${g} (${x})`,k.text,"group"),Pi.playNotificationSound(),window.showNotification&&window.showNotification(`🏠 ${g} (${x}): ${k.text}`,"info",6e3),Math.random()<.3&&Pi.playNotificationSound())}}),o.current=m,console.log(`✅ 房間 ${t} 載入了 ${f.length} 條訊息`),n(f)}else console.log(`📭 房間 ${t} 沒有訊息`),o.current=0,n([])}catch(d){console.error(`❌ 房間 ${t} 載入訊息時出錯:`,d),n([])}},u=>{console.error(`❌ Firebase onValue 錯誤 (房間 ${t}):`,u),u.code==="PERMISSION_DENIED"&&console.error("🚫 權限被拒絕 - 請檢查 Firebase 安全規則!")});return()=>{try{console.log(`🛑 停止監聽房間 ${t} 的訊息`),c()}catch(u){console.error("Firebase unsubscribe error:",u)}}},[e,t,n,s]),{sendMessage:async l=>{if(!e||!t)return;const c=V(H,`groupChats/${t}/messages`),u={...l,sender:{uid:e.uid,nickname:e.nickname||"匿名用戶",avatar:e.avatar||null},timestamp:Date.now(),room:t};try{await lo(c,u)}catch(d){throw console.error("發送訊息失敗:",d),d}}}},GD=()=>{const{user:t}=Ue(),{setOnlineUsers:e}=Pt();w.useEffect(()=>{const n=async()=>{if(!t){console.log("❌ 沒有登入用戶，無法設定在線狀態");return}console.log("👤 開始為用戶設定在線狀態:",t.uid,t.email||"匿名用戶"),await(async()=>{try{const l=V(H,`users/${t.uid}`),c=V(H,`users/${t.uid}/isOnline`),u=V(H,`users/${t.uid}/lastSeen`);console.log("📖 讀取用戶現有資料...");const f=(await Bt(l)).val()||{};console.log("📝 現有用戶資料:",f),console.log("📝 當前登入用戶資料:",{uid:t.uid,email:t.email,nickname:t.nickname||t.displayName,isAnonymous:t.isAnonymous}),await Gs(l,{...f,isOnline:!0,lastSeen:yg(),email:t.email||f.email||"",nickname:t.nickname||t.displayName||f.nickname||"匿名用戶",uid:t.uid,isAnonymous:t.isAnonymous||!1}),console.log("✅ 用戶在線狀態已設定"),t.isAnonymous?(console.log("🔒 匿名用戶 - 離線時將自動刪除所有資料"),await ru(l).remove()):(console.log("👤 註冊用戶 - 離線時保留資料但設為離線"),await ru(c).set(!1),await ru(u).set(yg()))}catch(l){console.error("❌ 設定在線狀態失敗:",l)}})(),await _l();const i=BD(),o=V(H,"users"),a=Jn(o,l=>{try{const c=l.val();if(c){const u={},d=Date.now(),f=2*60*1e3;Object.entries(c).forEach(([m,y])=>{y&&y.isOnline&&(y.lastSeen&&d-y.lastSeen<f?(console.log(`👥 發現活躍在線用戶: ${m} - ${y.nickname||y.email||"匿名"}`),u[m]={uid:m,nickname:y.nickname||y.email||"匿名用戶",email:y.email||"",isOnline:y.isOnline,lastSeen:y.lastSeen,isAnonymous:y.isAnonymous||!1}):console.log(`⏰ 用戶 ${m} 標示在線但非活躍狀態，跳過顯示`))}),console.log("📊 所有在線用戶:",Object.keys(u)),e(u)}else console.log("📭 沒有找到任何用戶資料"),e({})}catch(c){console.error("❌ 處理在線用戶資料失敗:",c)}});return()=>{console.log("🧹 清理在線用戶監聽器和定期清理服務"),a(),i()}};let r=null;return n().then(s=>{r=s}),()=>{r&&typeof r=="function"&&r()}},[t==null?void 0:t.uid,e])},Ik=async t=>{if(!t)throw new Error("沒有選擇檔案");console.log("📸 開始處理聊天圖片:",t.name,(t.size/1024).toFixed(1)+"KB");try{const e=await vl.processImage(t);if(!e.success)throw new Error(e.error);console.log("📐 圖片壓縮完成:",{原始大小:(t.size/1024).toFixed(1)+"KB",壓縮後:(e.blob.size/1024).toFixed(1)+"KB",壓縮率:e.stats.reduction+"%"});const n=/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);let r=e.blob;n&&e.blob.size>200*1024&&(console.log("📱 手機環境，進行額外壓縮"),r=await vl.compressImage(e.originalFile,300,300,.6),console.log("📱 手機壓縮後大小:",(r.size/1024).toFixed(1)+"KB"));const s=Date.now(),i=Math.random().toString(36).substr(2,9),o=`chatImages/${s}_${i}_compressed.jpg`,a=M2(pD,o),l=await O2(a,r),c=await D2(l.ref);if(console.log("✅ 圖片上傳成功:",c),window.showNotification){const u=((1-r.size/t.size)*100).toFixed(1);window.showNotification(`圖片已壓縮 ${u}% 並上傳成功`,"success",3e3)}return c}catch(e){throw console.error("❌ 上傳圖片失敗:",e),new Error(e.message||"上傳失敗，請稍後再試")}},Nk=t=>new Promise(e=>{const n=new FileReader;n.onload=r=>e(r.target.result),n.readAsDataURL(t)}),Tk=({message:t,isOwn:e,onReply:n})=>{const{setCurrentPrivateChat:r,setCurrentRoom:s}=Pt(),{user:i}=Ue(),[o,a]=w.useState(!1),[l,c]=w.useState(t.liked||!1),u=p=>{p.preventDefault(),p.stopPropagation();const g=d();g.uid!==(i==null?void 0:i.uid)&&(console.log("👆 頭像點擊 - 開始私聊:",g),r({roomId:`private_${g.uid}`,recipientId:g.uid,nickname:g.nickname,avatar:g.avatar,isOnline:!1}),s("private"))},d=()=>t.sender?{nickname:t.sender.nickname||t.sender.displayName||t.sender.name,avatar:t.sender.avatar||t.sender.photoURL,uid:t.sender.uid}:{nickname:t.user||t.senderName||t.nickname||t.userName||"匿名用戶",avatar:t.avatar||t.senderAvatar,uid:t.from||t.senderId||t.userId||t.uid},f=p=>{p.stopPropagation(),c(!l),console.log("💖 按讚訊息:",t.id,!l)},m=p=>{p.stopPropagation();try{if(n&&typeof n=="function"){const g=t.text||t.content||t.message||t.msg||"",x=d();n({id:t.id,text:g,sender:x.nickname}),console.log("💬 回覆訊息:",t.id)}else console.warn("⚠️ onReply 函數未提供或不是函數")}catch(g){console.error("回覆功能錯誤:",g),alert("回覆功能暫時無法使用，請稍後再試")}};if(!t)return null;const y=d();!y.nickname&&!y.uid&&console.warn("訊息缺少發送者信息:",t);const _=p=>{if(!p)return"";const g=/(https?:\/\/[^\s]+)/g;return p.split(g).map((S,E)=>S.match(g)?h.jsx("a",{href:S,target:"_blank",rel:"noopener noreferrer",className:"text-blue-500 hover:text-blue-600 underline break-all",onClick:C=>C.stopPropagation(),children:S},E):S)},k=p=>{const g=p||t.timestamp||t.time;if(!g)return"未知時間";let x;return typeof g=="number"?x=g:typeof g=="string"?x=new Date(g).getTime():g&&typeof g=="object"&&g.seconds?x=g.seconds*1e3+(g.nanoseconds||0)/1e6:x=Date.now(),isNaN(x)?"時間錯誤":new Date(x).toLocaleString("zh-TW",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1})},v=()=>{if(t.type==="vote")return h.jsx(qD,{voteData:t.content});const p=t.text||t.content||t.message||t.msg||"";return h.jsxs("div",{children:[t.image&&h.jsx("img",{src:t.image,alt:"分享的圖片",className:"max-w-sm rounded-lg mb-2 cursor-pointer hover:opacity-90 transition-opacity",onClick:()=>window.open(t.image,"_blank")}),p&&h.jsx("div",{className:"break-words",children:_(p)})]})};return h.jsx("div",{className:`flex ${e?"justify-end":"justify-start"} group`,onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),children:h.jsxs("div",{className:`flex items-start gap-3 max-w-[70%] ${e?"flex-row-reverse":""}`,children:[h.jsx("img",{src:y.avatar||`https://ui-avatars.com/api/?name=${encodeURIComponent(y.nickname||"匿名")}&background=56c596&color=fff`,alt:y.nickname||"匿名用戶",className:`w-8 h-8 rounded-full flex-shrink-0 mt-1 ${y.uid!==(i==null?void 0:i.uid)?"cursor-pointer hover:ring-2 hover:ring-sea-blue/50 transition-all duration-200":""}`,onClick:y.uid!==(i==null?void 0:i.uid)?u:void 0,title:y.uid!==(i==null?void 0:i.uid)?`點擊與 ${y.nickname} 私聊`:""}),h.jsxs("div",{className:`flex flex-col ${e?"items-end":"items-start"}`,children:[h.jsxs("p",{className:"text-xs text-gray-500 mb-1 px-1",children:[y.nickname||"匿名用戶",e&&h.jsx("span",{className:"text-blue-500",children:" (你)"})]}),h.jsxs("div",{className:`
              message-bubble relative
              ${e?"message-self bg-sea-blue dark:bg-green-600 text-white":"message-other bg-white dark:bg-green-700 text-gray-700 dark:text-green-100 border border-gray-200 dark:border-green-600"}
            `,children:[v(),h.jsx("div",{className:`text-xs mt-1 ${e?"text-sea-light dark:text-green-200":"text-gray-400 dark:text-green-300"}`,children:k(t.timestamp||t.time)})]}),o&&h.jsxs("div",{className:`flex items-center gap-1 mt-1 opacity-0 group-hover:opacity-100 transition-opacity ${e?"flex-row-reverse":""}`,children:[h.jsx("button",{className:"p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors",onClick:f,title:"按讚",children:h.jsx(Ff,{className:`w-3 h-3 transition-colors ${l?"text-red-500 fill-red-500":"text-gray-400 hover:text-red-500"}`})}),h.jsx("button",{className:"p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors",onClick:m,title:"回覆",children:h.jsx(Dr,{className:"w-3 h-3 text-gray-400 hover:text-blue-500"})})]})]})]})})},qD=({voteData:t})=>{const[e,n]=w.useState(null),r=(t==null?void 0:t.votes)||[],s=(t==null?void 0:t.options)||[],i=(t==null?void 0:t.question)||"投票問題",o=r.reduce((l,c)=>l+(c||0),0),a=l=>{e===null&&n(l)};return h.jsxs("div",{className:"bg-gray-50 dark:bg-green-900/30 rounded-lg p-4 min-w-[250px]",children:[h.jsxs("h4",{className:"font-medium mb-3 text-gray-800 dark:text-gray-200",children:["📊 ",i]}),h.jsx("div",{className:"space-y-2",children:s.map((l,c)=>{const u=r[c]||0,d=o>0?u/o*100:0,f=e===c;return h.jsxs("button",{onClick:()=>a(c),disabled:e!==null,className:`
                w-full text-left p-3 rounded-lg border transition-colors relative overflow-hidden
                ${f?"border-sea-blue dark:border-green-400 bg-sea-light dark:bg-green-800 text-sea-dark dark:text-green-100":"border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500"}
                ${e!==null?"cursor-default":"cursor-pointer hover:bg-gray-100 dark:hover:bg-green-800/50"}
              `,children:[e!==null&&h.jsx("div",{className:"absolute inset-0 bg-sea-blue/10 dark:bg-green-500/20 transition-all duration-500",style:{width:`${d}%`}}),h.jsxs("div",{className:"relative flex justify-between items-center",children:[h.jsx("span",{children:l}),e!==null&&h.jsxs("span",{className:"text-sm font-medium",children:[u," (",d.toFixed(1),"%)"]})]})]},c)})}),e!==null&&h.jsxs("p",{className:"text-xs text-gray-500 mt-2 text-center",children:["總投票數: ",o]})]})},QD=({onEmojiSelect:t,onClose:e})=>{const n=["😀","😃","😄","😁","😆","😅","😂","🤣","😊","😇","🙂","🙃","😉","😌","😍","🥰","😘","😗","😙","😚","😋","😛","😝","😜","🤪","🤨","🧐","🤓","😎","🤩","🥳","😏","😒","😞","😔","😟","😕","🙁","☹️","😣","😖","😫","😩","🥺","😢","😭","😤","😠","😡","🤬","🤯","😳","🥵","🥶","😱","😨","😰","😥","😓","🤗","🤔","🤭","🤫","🤥","😶","😐","😑","😬","🙄","😯","😦","😧","😮","😲","🥱","😴","🤤","😪","😵","🤐","🥴","🤢","🤮","🤧","😷","🤒","🤕","🤑","🤠","😈","👿","👹","👺","🤡","💩","👻","💀","☠️","👽","👾","🤖","🎃","😺","😸","😹","😻","😼","😽","🙀","😿","😾","❤️","🧡","💛","💚","💙","💜","🖤","🤍","🤎","💔","❣️","💕","💞","💓","💗","💖","💘","💝","💟","☮️","✝️","☪️","🕉️","☸️","✡️","🔯","🕎","☯️","☦️","🛐","⛎","♈","♉","♊","♋","♌","♍","♎","♏","♐","♑"];return h.jsxs("div",{className:"absolute bottom-full left-0 mb-2 bg-white dark:bg-dark-card rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-4 z-50",children:[h.jsx("div",{className:"grid grid-cols-8 gap-2 max-w-xs max-h-40 overflow-y-auto custom-scrollbar",children:n.map((r,s)=>h.jsx("button",{onClick:()=>t(r),className:"text-xl hover:bg-gray-100 dark:hover:bg-gray-700 rounded p-1 transition-colors",children:r},s))}),h.jsx("button",{onClick:e,className:"mt-2 text-xs text-gray-500 hover:text-gray-700 dark:hover:text-gray-300",children:"關閉"})]})},YD=({onSubmit:t,onClose:e})=>{const[n,r]=w.useState(""),[s,i]=w.useState(["",""]),o=()=>{s.length<6&&i([...s,""])},a=(u,d)=>{const f=[...s];f[u]=d,i(f)},l=u=>{if(s.length>2){const d=s.filter((f,m)=>m!==u);i(d)}},c=()=>{const u=s.filter(d=>d.trim());if(!n.trim()){alert("請輸入投票問題");return}if(u.length<2){alert("至少需要兩個選項");return}t({question:n.trim(),options:u,votes:new Array(u.length).fill(0),voters:{}})};return h.jsxs("div",{className:"absolute bottom-full left-0 right-0 mb-2 bg-white dark:bg-dark-card rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-4 z-50",children:[h.jsxs("div",{className:"flex justify-between items-center mb-4",children:[h.jsx("h3",{className:"font-semibold text-gray-800 dark:text-gray-200",children:"建立投票"}),h.jsx("button",{onClick:e,className:"text-gray-500 hover:text-gray-700 dark:hover:text-gray-300",children:h.jsx(Zn,{className:"w-5 h-5"})})]}),h.jsxs("div",{className:"mb-4",children:[h.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",children:"投票問題"}),h.jsx("input",{type:"text",value:n,onChange:u=>r(u.target.value),placeholder:"輸入你的問題...",className:`w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                     focus:ring-2 focus:ring-sea-blue/20 focus:border-sea-blue 
                     bg-white dark:bg-gray-700 dark:text-gray-200 outline-none`})]}),h.jsxs("div",{className:"mb-4",children:[h.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",children:"選項"}),h.jsx("div",{className:"space-y-2",children:s.map((u,d)=>h.jsxs("div",{className:"flex gap-2",children:[h.jsx("input",{type:"text",value:u,onChange:f=>a(d,f.target.value),placeholder:`選項 ${d+1}`,className:`flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                           focus:ring-2 focus:ring-sea-blue/20 focus:border-sea-blue 
                           bg-white dark:bg-gray-700 dark:text-gray-200 outline-none`}),s.length>2&&h.jsx("button",{onClick:()=>l(d),className:`px-3 py-2 text-red-500 hover:text-red-700 hover:bg-red-50 
                             dark:hover:bg-red-900/20 rounded-lg transition-colors`,children:h.jsx(Zn,{className:"w-4 h-4"})})]},d))}),s.length<6&&h.jsxs("button",{onClick:o,className:"mt-2 flex items-center gap-2 text-sm text-sea-blue hover:text-sea-dark transition-colors",children:[h.jsx(AD,{className:"w-4 h-4"}),"新增選項"]})]}),h.jsxs("div",{className:"flex gap-2 justify-end",children:[h.jsx("button",{onClick:e,className:`px-4 py-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 
                     dark:hover:text-gray-200 border border-gray-300 dark:border-gray-600 
                     rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors`,children:"取消"}),h.jsx("button",{onClick:c,className:`px-4 py-2 bg-sea-blue hover:bg-sea-dark text-white rounded-lg 
                     transition-colors font-medium`,children:"建立投票"})]})]})},XD=({roomId:t})=>{var O,Q;const{user:e}=Ue(),{messages:n}=Pt(),{sendMessage:r}=KD(t),[s,i]=w.useState(""),[o,a]=w.useState(!1),[l,c]=w.useState(!1),[u,d]=w.useState(null),[f,m]=w.useState(!1),[y,_]=w.useState(null),k=w.useRef(null),v=w.useRef(null);w.useEffect(()=>{const B=setTimeout(()=>{if(k.current){const Z=k.current.parentElement;Z&&(Z.scrollTop=Z.scrollHeight)}},100);return()=>clearTimeout(B)},[n]),GD();const p={chat:{name:"閒聊區",tip:"歡迎隨意聊聊、發問、抒發生活大小事。"},love:{name:"找伴區",tip:"你正在找伴專區，請多用心互動，彼此尊重。"},sex:{name:"約炮區",tip:"匿名聊性、約炮自由，但請勿冒犯他人。"}},g=()=>{var T;(T=k.current)==null||T.scrollIntoView({behavior:"smooth"})};w.useEffect(()=>{g()},[n]);const x=async T=>{var B;if(T.preventDefault(),!(!s.trim()&&!u))try{let Z=null;u&&((B=v.current)!=null&&B.files[0])&&(m(!0),Z=await Ik(v.current.files[0]));const yn={type:"text",content:s.trim(),image:Z};await r(yn),i(""),d(null),a(!1),v.current&&(v.current.value=""),L.success("訊息已發送")}catch(Z){L.error("發送失敗: "+Z.message)}finally{m(!1)}},S=async T=>{const B=T.target.files[0];if(B)try{const Z=await Nk(B);d(Z)}catch{L.error("圖片預覽失敗")}},E=T=>{i(B=>B+T),a(!1)},C=T=>{_(T),i(`@${T.sender} `)},R=()=>{_(null),i("")},j=n;return h.jsxs("div",{className:"flex flex-col h-screen pt-16 md:pt-0",children:[h.jsxs("div",{className:"bg-white/70 dark:bg-dark-card/70 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 p-4",children:[h.jsx("h2",{className:"text-xl font-semibold text-gray-800 dark:text-dark-text mb-1",children:((O=p[t])==null?void 0:O.name)||"聊天室"}),((Q=p[t])==null?void 0:Q.tip)&&h.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:p[t].tip})]}),h.jsxs("div",{className:"flex-1 overflow-y-auto overflow-x-hidden p-4 space-y-4 custom-scrollbar",children:[j.length===0?h.jsx("div",{className:"text-center text-gray-500 mt-8",children:h.jsx("p",{children:"還沒有訊息，開始聊天吧！"})}):j.map((T,B)=>{var Z;return h.jsx(Tk,{message:T,isOwn:((Z=T.sender)==null?void 0:Z.uid)===(e==null?void 0:e.uid)||T.from===(e==null?void 0:e.uid),onReply:C},T.id)}),h.jsx("div",{ref:k})]}),u&&h.jsx("div",{className:"p-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700",children:h.jsxs("div",{className:"relative inline-block",children:[h.jsx("img",{src:u,alt:"Preview",className:"max-w-xs rounded-lg"}),h.jsx("button",{onClick:()=>d(null),className:"absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600",children:h.jsx(Zn,{className:"w-4 h-4"})})]})}),y&&h.jsx("div",{className:"bg-blue-50 dark:bg-blue-900/20 border-t border-blue-200 dark:border-blue-700 p-3",children:h.jsxs("div",{className:"flex items-center justify-between",children:[h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx(Dr,{className:"w-4 h-4 text-blue-500"}),h.jsxs("span",{className:"text-sm text-blue-600 dark:text-blue-400",children:["回覆 ",y.sender]}),h.jsx("span",{className:"text-sm text-gray-500 truncate max-w-xs",children:y.text})]}),h.jsx("button",{onClick:R,className:"p-1 hover:bg-blue-200 dark:hover:bg-blue-800 rounded transition-colors",children:h.jsx(Zn,{className:"w-4 h-4 text-blue-500"})})]})}),h.jsxs("div",{className:"bg-white/70 dark:bg-dark-card/70 backdrop-blur-sm border-t border-gray-200 dark:border-gray-700 p-4",children:[h.jsxs("form",{onSubmit:x,className:"flex items-end gap-2",children:[h.jsxs("div",{className:"flex gap-1",children:[h.jsx("button",{type:"button",onClick:()=>{var T;return(T=v.current)==null?void 0:T.click()},className:"p-2 rounded-lg text-gray-500 hover:text-sea-blue hover:bg-sea-light/50 transition-colors",title:"上傳圖片",children:h.jsx(yk,{className:"w-5 h-5"})}),h.jsx("button",{type:"button",onClick:()=>a(!o),className:"p-2 rounded-lg text-gray-500 hover:text-sea-blue hover:bg-sea-light/50 transition-colors",title:"表情符號",children:h.jsx(MD,{className:"w-5 h-5"})}),h.jsx("button",{type:"button",onClick:()=>c(!l),className:"p-2 rounded-lg text-gray-500 hover:text-sea-blue hover:bg-sea-light/50 transition-colors",title:"建立投票",children:h.jsx(xD,{className:"w-5 h-5"})})]}),h.jsx("div",{className:"flex-1",children:h.jsx("input",{type:"text",value:s,onChange:T=>i(T.target.value),placeholder:"輸入訊息...",className:`w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 
                         focus:ring-2 focus:ring-sea-blue/20 focus:border-sea-blue 
                         bg-white dark:bg-dark-card dark:text-dark-text outline-none`})}),h.jsx("button",{type:"submit",disabled:!s.trim()&&!u||f,className:`p-3 bg-sea-blue hover:bg-sea-dark text-white rounded-lg 
                     disabled:opacity-50 disabled:cursor-not-allowed transition-colors`,children:f?h.jsx("div",{className:"w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"}):h.jsx(wk,{className:"w-5 h-5"})}),h.jsx("input",{ref:v,type:"file",accept:"image/*",onChange:S,className:"hidden"})]}),o&&h.jsx(QD,{onEmojiSelect:E,onClose:()=>a(!1)}),l&&h.jsx(YD,{onSubmit:async T=>{try{await r({type:"vote",content:T}),c(!1),L.success("投票已建立")}catch{L.error("建立投票失敗")}},onClose:()=>c(!1)})]})]})},JD=t=>{const{user:e}=Ue(),{setMessages:n,clearMessages:r,currentRoom:s,currentPrivateChat:i}=Pt(),{incrementUnread:o}=hc(),a=w.useRef(0),l=w.useRef(!1);return w.useEffect(()=>{if(console.log("🔍 usePrivateChat 參數檢查:"),console.log("  - hasUser:",!!e),console.log("  - userUid:",e==null?void 0:e.uid),console.log("  - recipientId:",t),console.log("  - recipientIdType:",typeof t),console.log("  - recipientIdValue:",String(t)),!e||!t){console.log("⚠️ usePrivateChat: 缺少必要參數"),console.log("  - user exists:",!!e),console.log("  - recipientId:",t);return}const u=[e.uid,t].sort(),d=`${u[0]}_${u[1]}`,f=`privateChats/${d}/messages`;console.log("🚀 開始監聽私聊:",{userUid:e.uid,recipientId:t,chatId:d,fullPath:f,sortedIds:u}),r(),console.log("🧹 已清空現有訊息，準備載入私聊訊息"),a.current=0,l.current=!1;const m=V(H,`privateChats/${d}/messages`),y=Jn(m,_=>{try{const k=_.val();if(console.log(`💌 私聊 ${d} 收到資料:`,k),k){const v=Object.entries(k).map(([S,E])=>({id:S,text:E.text,user:E.user,from:E.from,avatar:E.avatar,time:E.time,timestamp:E.time||E.timestamp||Date.now()}));v.sort((S,E)=>(S.time||S.timestamp||0)-(E.time||E.timestamp||0));const p=v.length,g=a.current,x=!l.current;if(console.log("📊 訊息計數檢查:",{currentMessageCount:p,previousMessageCount:g,isFirstLoad:x,hasLoadedOnce:l.current,shouldCheckForNewMessages:p>g&&l.current}),p>g&&l.current){const S=v.slice(g);console.log(`🆕 檢查 ${S.length} 條新訊息:`),S.forEach((E,C)=>{var R,j;if(console.log(`  訊息 ${C+1}:`,{from:E.from,user:E.user,text:((R=E.text)==null?void 0:R.substring(0,50))+"...",currentUserUid:e.uid,isFromOtherUser:E.from!==e.uid}),E.from!==e.uid){const O=s==="private"&&i&&i.recipientId===E.from,Q=E.user||"匿名用戶";if(console.log("🔍 檢查通知條件:",{currentRoom:s,currentPrivateChat:i,currentPrivateChatRecipientId:i==null?void 0:i.recipientId,recipientId:t,messageFrom:E.from,isCurrentlyChattingWithSender:O,shouldShowNotification:!O}),O)console.log(`🔇 ❌ 不顯示通知 - 用戶正在與 ${Q} 聊天`,{reason:"isCurrentlyChattingWithSender = true",currentRoom:s,currentPrivateChat:i==null?void 0:i.nickname,messageFromUser:Q});else{console.log(`� usePrivateChat: 增加未讀數量 - 收到來自 ${Q} 的新私訊`),console.log(`📈 準備調用 incrementUnread(${E.from})`);try{o(E.from),console.log("✅ incrementUnread 調用成功")}catch(T){console.error("❌ incrementUnread 調用失敗:",T)}console.log("📢 通知將由 usePrivateChatNotifications 統一處理")}}else console.log(`⏭️ 跳過自己的訊息: ${(j=E.text)==null?void 0:j.substring(0,30)}...`)})}a.current=p,l.current=!0,console.log(`✅ 私聊 ${d} 載入了 ${v.length} 條訊息`),n(v)}else console.log(`📭 私聊 ${d} 沒有訊息`),a.current=0,l.current=!0,n([])}catch(k){console.error(`❌ 私聊 ${d} 載入訊息時出錯:`,k),n([])}},_=>{console.error(`❌ Firebase onValue 錯誤 (私聊 ${d}):`,_),_.code==="PERMISSION_DENIED"&&console.error("🚫 權限被拒絕 - 請檢查 Firebase 安全規則!")});return()=>{try{console.log(`🛑 停止監聽私聊 ${d} 的訊息`),y()}catch(_){console.error("Firebase unsubscribe error:",_)}}},[e,t,n,r]),{sendPrivateMessage:async u=>{if(!e||!t)return;const d=[e.uid,t].sort(),f=`${d[0]}_${d[1]}`,m=V(H,`privateChats/${f}/messages`),y={text:u.text||u.message,user:e.nickname||e.displayName||"匿名用戶",from:e.uid,avatar:e.avatar||null,time:Date.now(),type:u.type||"text"};u.image&&(y.image=u.image,console.log(`📷 私訊包含圖片: ${u.image}`));try{console.log(`📤 發送私人訊息到 ${f}:`,y),await lo(m,y)}catch(_){throw console.error(`❌ 發送私人訊息失敗 (${f}):`,_),_}}}},ZD=()=>{const{user:t}=Ue(),[e,n]=w.useState([]),[r,s]=w.useState(!0);return w.useEffect(()=>{if(!(t!=null&&t.uid)){console.log("⚠️ usePrivateChatsList: 沒有用戶 UID"),n([]),s(!1);return}console.log(`🚀 開始載入用戶 ${t.uid} 的私聊列表...`),(async()=>{try{s(!0);const o=V(H,"privateChats"),a=await Bt(o);if(!a.exists()){console.log("📭 沒有找到任何私聊房間"),n([]),s(!1);return}const l=a.val(),u=Object.keys(l).filter(y=>y.includes(t.uid));if(console.log(`💬 找到 ${u.length} 個包含用戶的私聊房間:`,u.slice(0,5),"..."),u.length===0){n([]),s(!1);return}console.log(`🚀 開始處理全部 ${u.length} 個私聊房間...`);const d=u.map(async y=>{try{const k=y.split("_").find(E=>E!==t.uid);if(!k)return console.log(`⚠️ 無法解析私聊房間 ${y} 的對方用戶`),null;const[v,p]=await Promise.all([Bt(V(H,`users/${k}`)),Bt(V(H,`privateChats/${y}/messages`))]);if(!v.exists())return console.log(`⚠️ 對方用戶 ${k} 不存在`),null;const g=v.val();let x="開始對話...",S=null;if(p.exists()){const E=p.val(),C=Object.entries(E);if(C.length>0){const R=C.sort(([,O],[,Q])=>(Q.time||0)-(O.time||0)),[,j]=R[0];x=j.text||"訊息",S=j.time}}return{id:y,recipientId:k,nickname:g.nickname||"匿名用戶",avatar:g.avatar,isOnline:g.online||!1,lastMessage:x,lastMessageTime:S}}catch(_){return console.error(`❌ 處理私聊房間 ${y} 時出錯:`,_),null}}),m=(await Promise.all(d)).filter(y=>y!==null);m.sort((y,_)=>(_.lastMessageTime||0)-(y.lastMessageTime||0)),console.log(`✅ 成功載入 ${m.length} 個私聊對話`),n(m)}catch(o){console.error("❌ 載入私聊列表失敗:",o),n([])}finally{s(!1)}})()},[t==null?void 0:t.uid]),{privateChatsList:e,loading:r,refreshList:()=>{t!=null&&t.uid&&(s(!0),n([]))}}},Rk=({isVisible:t,onClose:e,recipientName:n,recipientId:r,isIncoming:s=!1,onAnswer:i=null,onReject:o=null})=>{const[a,l]=w.useState(!1),[c,u]=w.useState(!1),[d,f]=w.useState(!1),[m,y]=w.useState(!0),[_,k]=w.useState(0),[v,p]=w.useState("connecting"),g=w.useRef(null),x=w.useRef(null),S=w.useRef(null),E=w.useRef(null),C=w.useRef(null),R={iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:"stun:stun1.l.google.com:19302"}]},j=async()=>{try{console.log("🔊 初始化語音通話...");const N=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!0,noiseSuppression:!0,autoGainControl:!0}});E.current=N,g.current&&(g.current.srcObject=N),S.current=new RTCPeerConnection(R),N.getTracks().forEach(A=>{S.current.addTrack(A,N)}),S.current.ontrack=A=>{console.log("📻 收到遠端音頻流"),x.current&&(x.current.srcObject=A.streams[0]),u(!0),p("connected"),L.success("語音通話已連接")},S.current.onconnectionstatechange=()=>{const A=S.current.connectionState;console.log("🔗 連接狀態:",A),p(A),A==="connected"?(u(!0),Q()):(A==="disconnected"||A==="failed")&&(u(!1),T())},S.current.onicecandidate=A=>{A.candidate&&(console.log("🧊 ICE 候選:",A.candidate),O(A.candidate))},l(!0),p("connecting"),L.success("正在建立語音連接...")}catch(N){console.error("❌ 語音通話初始化失敗:",N),L.error("無法訪問麥克風，請檢查權限設置"),e()}},O=N=>{console.log("📤 發送 ICE 候選:",N)},Q=()=>{C.current=setInterval(()=>{k(N=>N+1)},1e3)},T=()=>{C.current&&(clearInterval(C.current),C.current=null)},B=N=>{const A=Math.floor(N/60),F=N%60;return`${A.toString().padStart(2,"0")}:${F.toString().padStart(2,"0")}`},Z=()=>{if(E.current){const N=E.current.getAudioTracks()[0];N&&(N.enabled=d,f(!d),L.success(d?"麥克風已開啟":"麥克風已關閉"))}},yn=()=>{y(!m),L.success(m?"揚聲器已關閉":"揚聲器已開啟")},qs=async()=>{try{await j(),L.success("通話已接聽"),i&&await i()}catch(N){console.error("接聽失敗:",N),L.error("接聽失敗")}},Vr=()=>{console.log("📞 掛斷通話"),T(),E.current&&E.current.getTracks().forEach(N=>N.stop()),S.current&&S.current.close(),l(!1),u(!1),k(0),L.success("通話已結束"),e()};return w.useEffect(()=>(t&&!s&&j(),()=>{T(),E.current&&E.current.getTracks().forEach(N=>N.stop()),S.current&&S.current.close()}),[t]),t?h.jsx("div",{className:"fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center",children:h.jsxs("div",{className:"bg-white dark:bg-dark-card rounded-2xl p-8 max-w-sm w-full mx-4 shadow-2xl",children:[h.jsxs("div",{className:"text-center mb-6",children:[h.jsx("img",{src:`https://ui-avatars.com/api/?name=${n}&background=56c596&color=fff&size=120`,alt:n,className:"w-24 h-24 rounded-full mx-auto mb-4"}),h.jsx("h3",{className:"text-xl font-semibold text-gray-800 dark:text-dark-text",children:n}),h.jsx("div",{className:"mt-2",children:s?h.jsx("p",{className:"text-green-600 font-medium animate-pulse",children:"來電中..."}):v==="connecting"?h.jsx("p",{className:"text-blue-600 font-medium animate-pulse",children:"連接中..."}):c?h.jsxs("p",{className:"text-green-600 font-medium",children:["通話中 ",B(_)]}):h.jsx("p",{className:"text-gray-500",children:"語音通話"})})]}),h.jsxs("div",{className:"flex justify-center gap-4 mb-4",children:[(a||c)&&h.jsx("button",{onClick:Z,className:`p-4 rounded-full transition-colors ${d?"bg-red-500 text-white":"bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300"}`,title:d?"開啟麥克風":"關閉麥克風",children:d?h.jsx(RD,{className:"w-6 h-6"}):h.jsx(PD,{className:"w-6 h-6"})}),(a||c)&&h.jsx("button",{onClick:yn,className:`p-4 rounded-full transition-colors ${m?"bg-blue-500 text-white":"bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300"}`,title:m?"關閉揚聲器":"開啟揚聲器",children:m?h.jsx(Sk,{className:"w-6 h-6"}):h.jsx(Ck,{className:"w-6 h-6"})})]}),h.jsx("div",{className:"flex justify-center gap-8",children:s?h.jsxs(h.Fragment,{children:[h.jsx("button",{onClick:qs,className:"p-4 bg-green-500 hover:bg-green-600 text-white rounded-full transition-colors",title:"接聽",children:h.jsx(_k,{className:"w-8 h-8"})}),h.jsx("button",{onClick:()=>{o?o():Vr()},className:"p-4 bg-red-500 hover:bg-red-600 text-white rounded-full transition-colors",title:"拒接",children:h.jsx(Pg,{className:"w-8 h-8"})})]}):h.jsx("button",{onClick:Vr,className:"p-4 bg-red-500 hover:bg-red-600 text-white rounded-full transition-colors",title:"掛斷",children:h.jsx(Pg,{className:"w-8 h-8"})})}),h.jsx("audio",{ref:g,autoPlay:!0,muted:!0}),h.jsx("audio",{ref:x,autoPlay:!0}),h.jsx("div",{className:"mt-6 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg",children:h.jsxs("p",{className:"text-sm text-blue-600 dark:text-blue-400 text-center",children:["🚧 語音通話功能正在開發中",h.jsx("br",{}),"需要實現 Firebase 信令服務器"]})})]})}):null},Dg=()=>{const{user:t}=Ue(),{currentPrivateChat:e,setCurrentPrivateChat:n,setCurrentRoom:r,messages:s}=Pt(),{privateChatsList:i,loading:o,refreshList:a}=ZD(),[l,c]=w.useState(""),[u,d]=w.useState(null),[f,m]=w.useState(!1),[y,_]=w.useState(!1),k=w.useRef(null),v=w.useRef(null),{sendPrivateMessage:p}=JD(e==null?void 0:e.recipientId),{getUnreadCount:g,markAsRead:x,recalculateTotal:S}=hc();w.useEffect(()=>{console.log("🏠 設定私訊房間狀態"),r("private"),e||console.log("📝 清空當前私聊狀態")},[r]),console.log("💬 PrivateChat 狀態:",{currentPrivateChat:!!e,nickname:e==null?void 0:e.nickname,messagesCount:s.length,privateChatsListCount:i.length,chatsLoading:o}),w.useEffect(()=>{var T;(T=k.current)==null||T.scrollIntoView({behavior:"smooth"})},[s]);const E=()=>{console.log("⬅️  返回私聊列表"),n(null),S()},C=async()=>{var T;if(!(!l.trim()&&!u))try{let B=null;u&&((T=v.current)!=null&&T.files[0])&&(m(!0),L.loading("正在上傳圖片..."),B=await Ik(v.current.files[0]),L.dismiss()),await p({text:l.trim(),type:"text",image:B}),c(""),d(null),v.current&&(v.current.value=""),B&&L.success("圖片已發送")}catch(B){console.error("發送私訊失敗:",B),L.error("發送失敗: "+B.message)}finally{m(!1)}},R=async T=>{const B=T.target.files[0];if(B)try{const Z=await Nk(B);d(Z),L.success("圖片已選擇，將自動壓縮")}catch{L.error("圖片預覽失敗")}},j=async()=>{try{_(!0),L.success(`正在呼叫 ${e.nickname}...`),await Q(e.recipientId,{type:"incoming_call",from:t.uid,fromName:t.nickname||t.displayName||"匿名用戶",fromAvatar:t.avatar,timestamp:Date.now()}),console.log("📞 語音通話邀請已發送給:",e.nickname)}catch(T){console.error("發送語音通話邀請失敗:",T),L.error("無法發起通話，請稍後再試"),_(!1)}},O=()=>{_(!1)},Q=async(T,B)=>{try{const Z=V(H,`notifications/${T}`),yn={...B,id:`call_${Date.now()}`,read:!1,createdAt:Date.now()};await lo(Z,yn),console.log("📢 通知已發送:",yn),await p({text:`📞 ${t.nickname||"用戶"} 向您發起了語音通話`,type:"system",callData:B})}catch(Z){throw console.error("發送通知失敗:",Z),Z}};return e?h.jsxs("div",{className:"flex flex-col h-screen pt-16 md:pt-0",children:[h.jsx("div",{className:"bg-white/70 dark:bg-dark-card/70 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 p-4",children:h.jsxs("div",{className:"flex items-center justify-between",children:[h.jsxs("div",{className:"flex items-center gap-3",children:[h.jsx("button",{onClick:E,className:"p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors",title:"返回私聊列表",children:h.jsx(gk,{className:"w-5 h-5"})}),h.jsx("img",{src:e.avatar||`https://ui-avatars.com/api/?name=${e.nickname}&background=56c596&color=fff`,alt:e.nickname,className:"w-10 h-10 rounded-full"}),h.jsxs("div",{children:[h.jsx("h2",{className:"font-semibold text-gray-800 dark:text-dark-text",children:e.nickname}),h.jsx("p",{className:"text-sm text-gray-500",children:"私人對話"})]})]}),h.jsx("button",{onClick:j,className:"p-3 rounded-lg bg-green-500 hover:bg-green-600 text-white transition-colors",title:"語音通話",children:h.jsx(_k,{className:"w-5 h-5"})})]})}),h.jsxs("div",{className:"flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar",children:[s.length===0?h.jsxs("div",{className:"text-center text-gray-500 mt-8",children:[h.jsx(Dr,{className:"w-16 h-16 mx-auto mb-4 text-gray-300"}),h.jsx("p",{children:"還沒有私訊記錄"}),h.jsxs("p",{className:"text-sm",children:["開始和 ",e.nickname," 聊天吧！"]})]}):s.map(T=>{var B;return h.jsx(Tk,{message:T,isOwn:((B=T.sender)==null?void 0:B.uid)===(t==null?void 0:t.uid)||T.from===(t==null?void 0:t.uid)},T.id)}),h.jsx("div",{ref:k})]}),u&&h.jsxs("div",{className:"p-3 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700",children:[h.jsxs("div",{className:"relative inline-block",children:[h.jsx("img",{src:u,alt:"Preview",className:"max-w-32 md:max-w-xs rounded-lg"}),h.jsx("button",{onClick:()=>{d(null),v.current&&(v.current.value="")},className:"absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors",children:h.jsx(Zn,{className:"w-4 h-4"})})]}),h.jsx("p",{className:"text-xs text-gray-500 mt-2",children:"點擊 X 移除圖片"})]}),h.jsx("div",{className:"bg-white/70 dark:bg-dark-card/70 backdrop-blur-sm border-t border-gray-200 dark:border-gray-700 p-4",children:h.jsxs("div",{className:"flex items-end gap-2",children:[h.jsx("div",{className:"flex gap-1",children:h.jsx("button",{onClick:()=>{var T;return(T=v.current)==null?void 0:T.click()},disabled:f,className:"p-2 rounded-lg text-gray-500 hover:text-sea-blue hover:bg-sea-light/50 transition-colors disabled:opacity-50",title:"上傳圖片",children:h.jsx(yk,{className:"w-5 h-5"})})}),h.jsx("div",{className:"flex-1",children:h.jsx("input",{type:"text",value:l,onChange:T=>c(T.target.value),onKeyPress:T=>T.key==="Enter"&&C(),placeholder:`傳訊息給 ${e.nickname}...`,className:`w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                           focus:ring-2 focus:ring-sea-blue/20 focus:border-sea-blue 
                           bg-white dark:bg-dark-card dark:text-dark-text outline-none`})}),h.jsx("button",{onClick:C,disabled:!l.trim()&&!u||f,className:`px-3 py-2 bg-sea-blue hover:bg-sea-dark text-white rounded-lg 
                       disabled:opacity-50 disabled:cursor-not-allowed transition-colors`,title:f?"上傳中...":"發送",children:f?h.jsx("div",{className:"w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"}):h.jsx(wk,{className:"w-4 h-4"})}),h.jsx("input",{ref:v,type:"file",accept:"image/*",onChange:R,className:"hidden"})]})}),h.jsx(Rk,{isVisible:y,onClose:O,recipientName:e.nickname,recipientId:e.recipientId,isIncoming:!1})]}):h.jsxs("div",{className:"flex flex-col h-screen pt-16 md:pt-0",children:[h.jsx("div",{className:"bg-white/70 dark:bg-dark-card/70 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 p-4",children:h.jsxs("div",{className:"flex items-center justify-between",children:[h.jsxs("div",{children:[h.jsxs("h2",{className:"text-xl font-semibold text-gray-800 dark:text-dark-text mb-1",children:["私人訊息 (",i.length,")"]}),h.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"點選對話開始私訊"})]}),h.jsx("div",{className:"flex gap-2",children:h.jsx("button",{onClick:()=>{console.log("🔄 重新載入私聊列表..."),a()},className:"px-3 py-1 text-xs bg-sea-blue text-white rounded-lg hover:bg-sea-dark transition-colors",children:"🔄 重新載入"})})]})}),h.jsx("div",{className:"flex-1 overflow-y-auto",children:o?h.jsxs("div",{className:"flex items-center justify-center h-64",children:[h.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-sea-blue"}),h.jsx("span",{className:"ml-2 text-gray-500",children:"載入私聊列表中..."})]}):i.length===0?h.jsxs("div",{className:"flex flex-col items-center justify-center h-full text-gray-500",children:[h.jsx(Dr,{className:"w-16 h-16 mb-4 text-gray-300"}),h.jsx("p",{className:"text-lg mb-2",children:"還沒有私訊"}),h.jsxs("p",{className:"text-sm text-center px-4 mb-4",children:["在聊天室中點擊其他用戶的頭像",h.jsx("br",{}),"就可以開始私人對話"]})]}):h.jsx("div",{className:"p-4 space-y-2",children:i.map(T=>h.jsxs("div",{onClick:()=>{console.log(`🔄 切換到私聊: ${T.nickname} (ID: ${T.recipientId})`),n(T),r("private"),x(T.recipientId)},className:"flex items-center gap-3 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer transition-colors relative",children:[h.jsxs("div",{className:"relative",children:[h.jsx("img",{src:T.avatar||`https://ui-avatars.com/api/?name=${T.nickname}&background=56c596&color=fff`,alt:T.nickname,className:"w-12 h-12 rounded-full"}),h.jsx(bk,{count:g(T.recipientId),className:"absolute -top-1 -right-1"})]}),h.jsxs("div",{className:"flex-1",children:[h.jsx("h3",{className:"font-medium text-gray-800 dark:text-gray-200",children:T.nickname}),h.jsx("p",{className:"text-sm text-gray-500 truncate",children:T.lastMessage||"開始對話..."})]}),h.jsx("div",{className:"text-xs text-gray-400",children:T.lastMessageTime&&new Date(T.lastMessageTime).toLocaleTimeString("zh-TW",{hour:"2-digit",minute:"2-digit"})})]},T.id))})})]})},eM=()=>{const{currentRoom:t,currentPrivateChat:e}=Pt(),n=()=>t==="private"?e?h.jsx(Dg,{}):h.jsx(Dg,{}):h.jsx(XD,{roomId:t});return h.jsx("div",{className:"flex-1 flex flex-col",children:n()})},tM=()=>{const{sidebarOpen:t,setSidebarOpen:e,darkMode:n,toggleDarkMode:r}=Pt(),{user:s}=Ue();return h.jsx("div",{className:"md:hidden fixed top-0 left-0 right-0 z-40 bg-white/90 dark:bg-dark-card/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700",children:h.jsxs("div",{className:"flex items-center justify-between px-4 py-3",children:[h.jsxs("div",{className:"flex items-center gap-3",children:[h.jsx("button",{onClick:()=>e(!t),className:"p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors",children:t?h.jsx(Zn,{className:"w-5 h-5"}):h.jsx(TD,{className:"w-5 h-5"})}),h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("img",{src:"/icon-512.png",alt:"LalaLand",className:"w-8 h-8 rounded-lg"}),h.jsx("h1",{className:"font-semibold text-gray-800 dark:text-dark-text",children:"LalaLand"})]})]}),h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("button",{onClick:r,className:"p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors",children:n?h.jsx(kk,{className:"w-5 h-5"}):h.jsx(vk,{className:"w-5 h-5"})}),s&&h.jsx("img",{src:s.avatar||`https://ui-avatars.com/api/?name=${s.nickname}&background=2877b9&color=fff`,alt:s.nickname,className:"w-8 h-8 rounded-full border-2 border-sea-blue"})]})]})})},nM=()=>{const{user:t}=Ue(),{currentPrivateChat:e,currentRoom:n}=Pt(),{incrementUnread:r}=hc(),s=w.useRef({}),i=w.useRef({});w.useEffect(()=>{if(!(t!=null&&t.uid))return;const o=V(H,"privateChats");return console.log("🛰️ 啟動全域私訊通知監聽..."),Jn(o,a=>{const l=a.val()||{},c=t.uid,u=Object.keys(l).filter(f=>f.split("_").includes(c));Object.keys(s.current).forEach(f=>{if(!u.includes(f)){console.log("🧹 清理不相關監聽器:",f);try{s.current[f]()}catch{}delete s.current[f],delete i.current[f]}}),u.forEach(f=>{if(s.current[f])return;const m=V(H,`privateChats/${f}/messages`);console.log("👂 設定私聊監聽:",f);const y=Jn(m,_=>{var O;const k=_.val();if(!k){i.current[f]||(i.current[f]=Date.now());return}const v=Object.entries(k).map(([Q,T])=>({id:Q,...T,timestamp:T.time||T.timestamp||0})).sort((Q,T)=>Q.timestamp-T.timestamp);if(v.length===0)return;const p=v[v.length-1],g=i.current[f];if(!g){i.current[f]=p.timestamp||Date.now(),console.log(`🔄 初次載入私聊 ${f}，記錄最後訊息時間: ${p.timestamp}`);return}if(p.timestamp&&p.timestamp<=g||(i.current[f]=p.timestamp||Date.now(),p.from===c))return;const S=e==null?void 0:e.recipientId,E=f.split("_").find(Q=>Q!==c),C=n==="private"&&S&&E===S;if(console.log("🔍 檢查是否正在查看私聊:",{chatId:f,currentRoom:n,activePartnerId:S,partnerId:E,isActive:C,messageFrom:p.from,messageSender:p.user}),C){console.log("🟢 正在查看此私聊，跳過通知和未讀計數",{chatId:f,partnerId:E});return}const R=p.user||"匿名用戶",j=((O=p.text)==null?void 0:O.slice(0,80))||"";console.log("🔔 觸發全域私訊通知:",{chatId:f,from:p.from,senderName:R,preview:j,isActive:C}),r(p.from),window.showNotification&&window.showNotification(`💬 ${R}: ${j}`,"info",6e3),Pi.showNotification(`💬 ${R}`,j),Pi.playNotificationSound()});s.current[f]=y})}),()=>{console.log("🛑 停止全域私訊通知監聽"),Object.values(s.current).forEach(a=>{try{a()}catch{}}),s.current={},Iw(o)}},[t==null?void 0:t.uid,e==null?void 0:e.recipientId,n])},du=()=>{const{darkMode:t}=Pt(),{user:e}=Ue();return nM(),w.useEffect(()=>{t?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},[t]),w.useEffect(()=>{e&&UD(e)},[e]),h.jsxs("div",{className:"h-screen flex bg-earth-beige dark:bg-dark-bg",children:[h.jsx(tM,{}),h.jsx(VD,{}),h.jsx(eM,{})]})},rM=()=>{const{user:t}=Ue(),[e,n]=w.useState(""),[r,s]=w.useState(!1),i=async()=>{s(!0),n("");try{console.log("🔍 開始完整偵錯..."),await yD(),n("偵錯完成，請檢查瀏覽器控制台查看詳細結果")}catch(a){n(`偵錯失敗: ${a.message}`)}finally{s(!1)}},o=async()=>{const a=prompt("請輸入房間 ID (如: casual, dating, hookup):");if(a){s(!0);try{const l=await vD(a);n(l?`房間 ${a} 找到 ${Object.keys(l).length} 條訊息`:`房間 ${a} 沒有訊息`)}catch(l){n(`偵錯房間失敗: ${l.message}`)}finally{s(!1)}}};return h.jsx("div",{className:"min-h-screen bg-gray-100 dark:bg-gray-900 p-4",children:h.jsxs("div",{className:"max-w-2xl mx-auto",children:[h.jsx("h1",{className:"text-2xl font-bold text-gray-900 dark:text-white mb-6",children:"Firebase 偵錯工具"}),t&&h.jsxs("div",{className:"mb-6 p-4 bg-white dark:bg-gray-800 rounded-lg shadow",children:[h.jsx("h2",{className:"text-lg font-semibold text-gray-900 dark:text-white mb-2",children:"當前用戶"}),h.jsxs("p",{className:"text-gray-600 dark:text-gray-300",children:["UID: ",t.uid]}),h.jsxs("p",{className:"text-gray-600 dark:text-gray-300",children:["暱稱: ",t.nickname]})]}),h.jsxs("div",{className:"space-y-4",children:[h.jsx("button",{onClick:i,disabled:r,className:"w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50",children:r?"偵錯中...":"完整偵錯 (檢查控制台)"}),h.jsx("button",{onClick:o,disabled:r,className:"w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50",children:"偵錯特定房間"})]}),e&&h.jsxs("div",{className:"mt-6 p-4 bg-white dark:bg-gray-800 rounded-lg shadow",children:[h.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-white mb-2",children:"偵錯結果"}),h.jsx("pre",{className:"text-sm text-gray-600 dark:text-gray-300 whitespace-pre-wrap",children:e})]}),h.jsxs("div",{className:"mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg",children:[h.jsx("h3",{className:"text-lg font-semibold text-yellow-800 dark:text-yellow-200 mb-2",children:"說明"}),h.jsx("p",{className:"text-yellow-700 dark:text-yellow-300 text-sm",children:'如果看到 "permission_denied" 錯誤，請在 Firebase Console 中更新安全規則。 參考專案中的 FIREBASE_SETUP.md 文件。'})]})]})})},sM=()=>h.jsx("div",{className:"fixed inset-0 bg-gradient-to-br from-earth-beige to-white flex items-center justify-center z-50",children:h.jsxs("div",{className:"text-center",children:[h.jsx("img",{src:"/icon-512.png",alt:"LalaLand",className:"w-32 h-32 mx-auto mb-6 animate-float"}),h.jsx("h1",{className:"text-3xl font-bold text-sea-dark mb-2",children:"LalaLand"}),h.jsx("p",{className:"text-gray-600",children:"載入中..."}),h.jsx("div",{className:"mt-6",children:h.jsxs("div",{className:"flex justify-center space-x-1",children:[h.jsx("div",{className:"w-2 h-2 bg-sea-blue rounded-full animate-bounce"}),h.jsx("div",{className:"w-2 h-2 bg-sea-blue rounded-full animate-bounce",style:{animationDelay:"0.1s"}}),h.jsx("div",{className:"w-2 h-2 bg-sea-blue rounded-full animate-bounce",style:{animationDelay:"0.2s"}})]})})]})});class iM extends kl.Component{constructor(n){super(n);Uf(this,"handleReload",()=>{window.location.reload()});this.state={hasError:!1,error:null,errorInfo:null}}static getDerivedStateFromError(n){return{hasError:!0}}componentDidCatch(n,r){console.error("ErrorBoundary caught an error:",n,r),this.setState({error:n,errorInfo:r})}render(){return this.state.hasError?h.jsx("div",{className:"min-h-screen flex items-center justify-center bg-earth-beige p-4",children:h.jsxs("div",{className:"max-w-md w-full bg-white rounded-xl shadow-soft p-6 text-center",children:[h.jsxs("div",{className:"mb-6",children:[h.jsx(LD,{className:"w-16 h-16 text-red-500 mx-auto mb-4"}),h.jsx("h1",{className:"text-2xl font-bold text-gray-800 mb-2",children:"哎呀，出錯了！"}),h.jsx("p",{className:"text-gray-600",children:"應用程式發生了未預期的錯誤"})]}),h.jsxs("div",{className:"space-y-4",children:[h.jsxs("button",{onClick:this.handleReload,className:"w-full btn-primary flex items-center justify-center gap-2",children:[h.jsx(OD,{className:"w-4 h-4"}),"重新載入"]}),h.jsx("button",{onClick:()=>window.location.href="/",className:"w-full btn-secondary",children:"回到首頁"})]}),!1]})}):this.props.children}}let oM=0;function aM(){const[t,e]=w.useState([]),[n,r]=w.useState(localStorage.getItem("notificationSound")!=="false"),s=w.useCallback((c,u="info",d=5e3)=>{const f=++oM,m={id:f,message:c,type:u,timestamp:Date.now()};return e(y=>[...y,m]),n&&u!=="info"&&o(),d>0&&setTimeout(()=>{i(f)},d),f},[n]),i=w.useCallback(c=>{e(u=>u.filter(d=>d.id!==c))},[]),o=()=>{try{const c=new(window.AudioContext||window.webkitAudioContext),u=c.createOscillator(),d=c.createGain();u.connect(d),d.connect(c.destination),u.frequency.value=800,u.type="sine",d.gain.setValueAtTime(.1,c.currentTime),d.gain.exponentialRampToValueAtTime(.01,c.currentTime+.3),u.start(),u.stop(c.currentTime+.3)}catch(c){console.log("無法播放提示音:",c)}},a=()=>{const c=!n;r(c),localStorage.setItem("notificationSound",c.toString())};w.useEffect(()=>(window.showNotification=s,()=>{delete window.showNotification}),[s]);const l=c=>{const u="mb-2 p-3 rounded-lg shadow-lg transform transition-all duration-300 ease-in-out",d={info:"bg-blue-500 text-white",success:"bg-green-500 text-white",warning:"bg-yellow-500 text-black",error:"bg-red-500 text-white"};return`${u} ${d[c]||d.info}`};return h.jsxs(h.Fragment,{children:[h.jsx("div",{className:"fixed top-4 right-4 z-50 max-w-sm w-full",children:t.map(c=>h.jsx("div",{className:l(c.type),onClick:()=>i(c.id),children:h.jsxs("div",{className:"flex justify-between items-start",children:[h.jsx("p",{className:"flex-1 text-sm font-medium",children:c.message}),h.jsx("button",{className:"ml-2 text-lg leading-none opacity-70 hover:opacity-100",onClick:u=>{u.stopPropagation(),i(c.id)},children:"×"})]})},c.id))}),h.jsx("div",{className:"notification-settings",style:{display:"none"},children:h.jsxs("label",{className:"flex items-center gap-2",children:[h.jsx("input",{type:"checkbox",checked:n,onChange:a}),h.jsx("span",{children:"啟用通知提示音"})]})})]})}const lM=({user:t=null})=>{const[e,n]=w.useState(null),[r,s]=w.useState(!1),[i,o]=w.useState(!1),[a,l]=w.useState(!1),[c,u]=w.useState(!1);w.useEffect(()=>{const k=()=>{const x=window.navigator.userAgent.toLowerCase(),S=/ipad|iphone|ipod/.test(x),E=window.navigator.standalone||window.matchMedia("(display-mode: standalone)").matches;l(S),u(E),o(E)},v=x=>{console.log("💻 PWA 安裝提示事件觸發"),x.preventDefault(),n(x),s(!0)},p=()=>{console.log("✅ PWA 已安裝"),o(!0),s(!1),n(null)};k();const g=setTimeout(()=>{!i&&!c&&(console.log("💡 顯示 PWA 安裝提示（登入後推薦）"),s(!0))},2e3);return window.addEventListener("beforeinstallprompt",v),window.addEventListener("appinstalled",p),()=>{clearTimeout(g),window.removeEventListener("beforeinstallprompt",v),window.removeEventListener("appinstalled",p)}},[i,c]),w.useEffect(()=>{if(console.log("🔍 PWA 安裝提示狀態檢查:",{user:!!t,userName:(t==null?void 0:t.displayName)||(t==null?void 0:t.email)||"未知",isInstalled:i,isStandalone:c,showInstallPrompt:r,deferredPrompt:!!e}),t&&!i&&!c){console.log("👤 用戶登入，準備觸發 PWA 安裝提示");const k=setTimeout(()=>{const v=localStorage.getItem("pwa-install-dismissed");if(console.log("💾 檢查本地存儲:",{dismissed:v,timestamp:v?new Date(parseInt(v)).toLocaleString():"無"}),v){const p=parseInt(v),g=(Date.now()-p)/(1e3*60*60);if(console.log("⏰ 距離上次關閉:",g.toFixed(1),"小時"),g<.5){console.log("⏰ 最近已顯示過安裝提示，暫不重複顯示");return}}console.log("💡 強制顯示 PWA 安裝提示"),s(!0)},2e3);return()=>clearTimeout(k)}},[t,i,c,e]);const d=async()=>{if(e)try{console.log("🚀 開始 PWA 安裝流程");const k=await e.prompt();console.log("📱 用戶選擇:",k.outcome),k.outcome==="accepted"?console.log("✅ 用戶接受 PWA 安裝"):console.log("❌ 用戶拒絕 PWA 安裝"),n(null),s(!1)}catch(k){console.error("❌ PWA 安裝失敗:",k)}},f=()=>{s(!1),localStorage.setItem("pwa-install-dismissed",Date.now().toString()),console.log("📱 PWA 安裝提示已關閉，30分鐘後可重新顯示")},m=()=>{console.log("🧪 強制顯示 PWA 安裝提示"),localStorage.removeItem("pwa-install-dismissed"),s(!0)};w.useEffect(()=>{typeof window<"u"&&(window.forcePWAPrompt=m,window.pwaPromptStatus={user:!!t,isInstalled:i,isStandalone:c,showInstallPrompt:r,deferredPrompt:!!e,isIOS:a})},[t,i,c,r,e,a]);const _=(()=>{if(console.log("🔍 shouldShowPrompt 檢查:",{isInstalled:i,isStandalone:c,showInstallPrompt:r,isIOS:a,user:!!t}),i||c)return console.log("❌ 已安裝或已在獨立模式"),!1;const k=localStorage.getItem("pwa-install-dismissed");if(k){const p=parseInt(k),g=(Date.now()-p)/(1e3*60*60);if(console.log("⏰ 距離上次關閉:",g.toFixed(1),"小時"),g<.5)return console.log("❌ 太早重複顯示"),!1}const v=r||a&&t;return console.log("✅ shouldShowPrompt 結果:",v),v})();return console.log("🎯 最終顯示決定:",_),_?h.jsx("div",{className:"fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-sm",children:h.jsx("div",{className:"bg-white dark:bg-dark-card rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-4 animate-slide-up",children:h.jsxs("div",{className:"flex items-start gap-3",children:[h.jsx("div",{className:"flex-shrink-0",children:h.jsx("div",{className:"w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center",children:h.jsx("svg",{className:"w-6 h-6 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:h.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"})})})}),h.jsxs("div",{className:"flex-1 min-w-0",children:[h.jsx("h3",{className:"text-sm font-semibold text-gray-900 dark:text-white mb-1",children:t?`歡迎 ${t.displayName||"朋友"}！`:"安裝 LalaLand 應用程式"}),t?h.jsx("p",{className:"text-xs text-gray-600 dark:text-gray-300 mb-3",children:a?"安裝到主畫面以獲得更好的聊天體驗和通知功能":"將 LalaLand 安裝為應用程式，享受更流暢的聊天體驗"}):a?h.jsxs("p",{className:"text-xs text-gray-600 dark:text-gray-300 mb-3",children:["在 Safari 中點選 ",h.jsx("span",{className:"font-semibold",children:"分享按鈕"}),"，然後選擇",h.jsx("span",{className:"font-semibold",children:"「加入主畫面」"})," 以獲得更好的通知體驗"]}):h.jsx("p",{className:"text-xs text-gray-600 dark:text-gray-300 mb-3",children:"安裝為應用程式，享受更快的載入速度和更可靠的通知功能"}),h.jsxs("div",{className:"flex gap-2",children:[!a&&h.jsx("button",{onClick:d,className:"flex-1 bg-primary-600 text-white text-xs font-medium py-2 px-3 rounded-md hover:bg-primary-700 transition-colors",disabled:!e,children:"立即安裝"}),h.jsx("button",{onClick:f,className:"flex-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium py-2 px-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors",children:"稍後再說"})]})]}),h.jsx("button",{onClick:f,className:"flex-shrink-0 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors",children:h.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:h.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]})})}):null},cM=()=>{const{user:t}=Ue(),[e,n]=w.useState(null),[r,s]=w.useState(!1);w.useEffect(()=>{if(!(t!=null&&t.uid))return;console.log("🔔 開始監聽語音通話通知:",t.uid);const u=V(H,`notifications/${t.uid}`),d=Jn(u,f=>{if(f.exists()){const m=f.val();Object.entries(m).forEach(([y,_])=>{_.type==="incoming_call"&&!_.read&&_.from!==t.uid&&(console.log("📞 收到來電通知:",_),n({..._,notificationId:y,callId:_.id}),s(!0),i(),o(_),a(y))})}});return()=>{console.log("🔕 停止監聽語音通話通知"),d()}},[t==null?void 0:t.uid]);const i=()=>{try{const u=new(window.AudioContext||window.webkitAudioContext),d=u.createOscillator(),f=u.createGain();d.connect(f),f.connect(u.destination),d.frequency.setValueAtTime(800,u.currentTime),d.frequency.setValueAtTime(600,u.currentTime+.5),f.gain.setValueAtTime(.3,u.currentTime),f.gain.exponentialRampToValueAtTime(.01,u.currentTime+1),d.start(u.currentTime),d.stop(u.currentTime+1)}catch(u){console.log("無法播放鈴聲:",u)}},o=u=>{"Notification"in window&&Notification.permission==="granted"?new Notification(`來自 ${u.fromName} 的語音通話`,{body:"點擊接聽通話",icon:u.fromAvatar||"/icon-512.png",tag:"voice-call",requireInteraction:!0}):"Notification"in window&&Notification.permission==="default"&&Notification.requestPermission().then(d=>{d==="granted"&&o(u)})},a=async u=>{try{const d=V(H,`notifications/${t.uid}/${u}`);await To(d),console.log("📋 通知已清除:",u)}catch(d){console.error("清除通知失敗:",d)}},l=async()=>{if(e)try{const u=V(H,`notifications/${e.from}`);await lo(u,{type:"call_rejected",from:t.uid,fromName:t.nickname||t.displayName||"匿名用戶",originalCallId:e.callId,timestamp:Date.now(),read:!1}),L.info(`已拒接 ${e.fromName} 的通話`)}catch(u){console.error("發送拒接通知失敗:",u)}s(!1),n(null)},c=async()=>{if(e)try{const u=V(H,`notifications/${e.from}`);await lo(u,{type:"call_answered",from:t.uid,fromName:t.nickname||t.displayName||"匿名用戶",originalCallId:e.callId,timestamp:Date.now(),read:!1}),L.success(`正在與 ${e.fromName} 建立通話...`)}catch(u){console.error("發送接聽通知失敗:",u)}};return h.jsx(h.Fragment,{children:r&&e&&h.jsx(Rk,{isVisible:r,onClose:l,recipientName:e.fromName,recipientId:e.from,isIncoming:!0,onAnswer:c,onReject:l})})};class uM{constructor(){this.isInstalled=!1,this.isStandalone=!1,this.deferredPrompt=null,this.init()}init(){this.detectPWAStatus(),this.setupEventListeners(),this.checkForUpdates()}detectPWAStatus(){this.isStandalone=window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone===!0,this.isInstalled=this.isStandalone,console.log("📱 PWA 狀態檢測:",{isInstalled:this.isInstalled,isStandalone:this.isStandalone,displayMode:this.getDisplayMode(),userAgent:navigator.userAgent})}getDisplayMode(){const e=["fullscreen","standalone","minimal-ui","browser"];for(const n of e)if(window.matchMedia(`(display-mode: ${n})`).matches)return n;return"browser"}setupEventListeners(){window.addEventListener("beforeinstallprompt",e=>{console.log("💻 PWA 安裝提示事件"),e.preventDefault(),this.deferredPrompt=e}),window.addEventListener("appinstalled",()=>{console.log("✅ PWA 安裝完成"),this.isInstalled=!0,this.deferredPrompt=null}),window.matchMedia("(display-mode: standalone)").addEventListener("change",e=>{console.log("🔄 顯示模式變更:",e.matches?"standalone":"browser"),this.isStandalone=e.matches})}async checkForUpdates(){if("serviceWorker"in navigator)try{const e=await navigator.serviceWorker.getRegistration();e&&(await e.update(),e.addEventListener("updatefound",()=>{const n=e.installing;console.log("🔄 發現 Service Worker 更新"),n.addEventListener("statechange",()=>{n.state==="installed"&&navigator.serviceWorker.controller&&(console.log("📦 新版本可用，建議重新載入"),this.showUpdatePrompt())})}))}catch(e){console.error("❌ Service Worker 更新檢查失敗:",e)}}showUpdatePrompt(){window.showNotification&&window.showNotification("🔄 發現新版本，建議重新載入以獲得最新功能","info",1e4)}async promptInstall(){if(!this.deferredPrompt)return console.warn("⚠️ 無法觸發安裝：沒有 beforeinstallprompt 事件"),!1;try{console.log("🚀 觸發 PWA 安裝");const e=await this.deferredPrompt.prompt();return console.log("📱 用戶選擇:",e.outcome),this.deferredPrompt=null,e.outcome==="accepted"}catch(e){return console.error("❌ PWA 安裝失敗:",e),!1}}getInstallInstructions(){const e=navigator.userAgent.toLowerCase();return/ipad|iphone|ipod/.test(e)?{platform:"iOS",browser:"Safari",steps:["點擊瀏覽器底部的分享按鈕 📤","在彈出選單中選擇「加入主畫面」","確認應用程式名稱並點擊「新增」","在主畫面找到 LalaLand 圖示並點擊開啟"]}:/android/.test(e)?/chrome/.test(e)?{platform:"Android",browser:"Chrome",steps:["點擊瀏覽器右上角的選單按鈕 ⋮","選擇「安裝應用程式」或「加入主畫面」","確認安裝並等待完成","在主畫面或應用程式清單中找到 LalaLand"]}:{platform:"Android",browser:"其他瀏覽器",steps:["建議使用 Chrome 瀏覽器獲得最佳體驗","或檢查瀏覽器選單中的「加入主畫面」選項"]}:{platform:"桌面",browser:"瀏覽器",steps:["點擊網址列右側的安裝圖示 💻","或檢查瀏覽器選單中的安裝選項","確認安裝並等待完成"]}}checkPWAFeatures(){const e={serviceWorker:"serviceWorker"in navigator,notifications:"Notification"in window,pushManager:"PushManager"in window,backgroundSync:"serviceWorker"in navigator&&"sync"in window.ServiceWorkerRegistration.prototype,webShare:"share"in navigator,installPrompt:!!this.deferredPrompt,standalone:this.isStandalone};return console.log("🔍 PWA 功能支援:",e),e}getPWAStats(){return{isInstalled:this.isInstalled,isStandalone:this.isStandalone,displayMode:this.getDisplayMode(),canInstall:!!this.deferredPrompt,features:this.checkPWAFeatures(),installInstructions:this.getInstallInstructions()}}}const dM=new uM;typeof window<"u"&&(window.pwaManager=dM);function hM(){const{user:t,setUser:e,loading:n,setLoading:r}=Ue();return w.useEffect(()=>{(async()=>{try{await as.initialize(),console.log("✅ FCM 系統已初始化")}catch(o){console.error("❌ FCM 初始化失敗:",o)}})(),"serviceWorker"in navigator&&navigator.serviceWorker.register("/sw.js").then(()=>console.log("📱 Service Worker 註冊成功")).catch(o=>console.log("📱 Service Worker 註冊失敗:",o));const i=qI(yl,async o=>{if(o){let a=o.displayName||"匿名用戶",l=o.photoURL||null;try{const c=V(H,`users/${o.uid}`),u=await Bt(c);if(u.exists()){const d=u.val();a=d.nickname||a,l=d.avatar||l}}catch(c){console.warn("無法讀取用戶資料:",c)}e({uid:o.uid,email:o.email,nickname:a,avatar:l,isAnonymous:o.isAnonymous}),console.log("✅ 用戶已登入:",o.uid,"暱稱:",a),setTimeout(async()=>{console.log("🔔 自動請求通知權限...");const c=await as.requestPermissionSilently(o.uid);c?console.log("✅ 通知權限已獲得，FCM Token:",c.substring(0,20)+"..."):console.log("ℹ️ 通知權限未獲得或瀏覽器不支援 FCM")},2e3)}else e(null);r(!1)});return()=>i()},[e,r]),w.useEffect(()=>{const s=async i=>{if(t&&t.isAnonymous){console.log("🗑️ 匿名用戶關閉頁面 - 嘗試清理資料");try{const o=V(H,`users/${t.uid}`);await To(o),console.log("✅ 匿名用戶資料已清理")}catch(o){console.error("❌ 清理匿名用戶資料失敗:",o)}}};return window.addEventListener("beforeunload",s),()=>{window.removeEventListener("beforeunload",s)}},[t]),n?h.jsx(sM,{}):h.jsx(iM,{children:h.jsx(tC,{future:{v7_startTransition:!0,v7_relativeSplatPath:!0},children:h.jsxs("div",{className:"min-h-screen",children:[h.jsxs(JS,{children:[h.jsx(hi,{path:"/",element:t?h.jsx(du,{}):h.jsx(FD,{})}),h.jsx(hi,{path:"/login",element:t?h.jsx(du,{}):h.jsx(Og,{})}),h.jsx(hi,{path:"/chat",element:t?h.jsx(du,{}):h.jsx(Og,{})}),h.jsx(hi,{path:"/debug",element:h.jsx(rM,{})})]}),h.jsx(BC,{position:"top-center",toastOptions:{duration:3e3,style:{background:"#2877b9",color:"#fff",borderRadius:"12px"}}}),h.jsx(aM,{}),h.jsx(lM,{user:t}),h.jsx(cM,{})]})})})}hu.createRoot(document.getElementById("root")).render(h.jsx(kl.StrictMode,{children:h.jsx(hM,{})}));
//# sourceMappingURL=index-DuxgfA_B.js.map
