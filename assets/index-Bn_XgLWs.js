var Ax=Object.defineProperty;var Ox=(t,e,n)=>e in t?Ax(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Wf=(t,e,n)=>Ox(t,typeof e!="symbol"?e+"":e,n);function Mx(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const s in r)if(s!=="default"&&!(s in t)){const i=Object.getOwnPropertyDescriptor(r,s);i&&Object.defineProperty(t,s,i.get?i:{enumerable:!0,get:()=>r[s]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Fg(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Ug={exports:{}},El={},$g={exports:{}},z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var po=Symbol.for("react.element"),jx=Symbol.for("react.portal"),Dx=Symbol.for("react.fragment"),Lx=Symbol.for("react.strict_mode"),Fx=Symbol.for("react.profiler"),Ux=Symbol.for("react.provider"),$x=Symbol.for("react.context"),Wx=Symbol.for("react.forward_ref"),zx=Symbol.for("react.suspense"),Bx=Symbol.for("react.memo"),Vx=Symbol.for("react.lazy"),zf=Symbol.iterator;function Hx(t){return t===null||typeof t!="object"?null:(t=zf&&t[zf]||t["@@iterator"],typeof t=="function"?t:null)}var Wg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},zg=Object.assign,Bg={};function Fs(t,e,n){this.props=t,this.context=e,this.refs=Bg,this.updater=n||Wg}Fs.prototype.isReactComponent={};Fs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Fs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Vg(){}Vg.prototype=Fs.prototype;function Fd(t,e,n){this.props=t,this.context=e,this.refs=Bg,this.updater=n||Wg}var Ud=Fd.prototype=new Vg;Ud.constructor=Fd;zg(Ud,Fs.prototype);Ud.isPureReactComponent=!0;var Bf=Array.isArray,Hg=Object.prototype.hasOwnProperty,$d={current:null},Kg={key:!0,ref:!0,__self:!0,__source:!0};function Gg(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)Hg.call(e,r)&&!Kg.hasOwnProperty(r)&&(s[r]=e[r]);var a=arguments.length-2;if(a===1)s.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];s.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)s[r]===void 0&&(s[r]=a[r]);return{$$typeof:po,type:t,key:i,ref:o,props:s,_owner:$d.current}}function Kx(t,e){return{$$typeof:po,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Wd(t){return typeof t=="object"&&t!==null&&t.$$typeof===po}function Gx(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Vf=/\/+/g;function yc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Gx(""+t.key):e.toString(36)}function sa(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case po:case jx:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+yc(o,0):r,Bf(s)?(n="",t!=null&&(n=t.replace(Vf,"$&/")+"/"),sa(s,e,n,"",function(c){return c})):s!=null&&(Wd(s)&&(s=Kx(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(Vf,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",Bf(t))for(var a=0;a<t.length;a++){i=t[a];var l=r+yc(i,a);o+=sa(i,e,n,l,s)}else if(l=Hx(t),typeof l=="function")for(t=l.call(t),a=0;!(i=t.next()).done;)i=i.value,l=r+yc(i,a++),o+=sa(i,e,n,l,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Mo(t,e,n){if(t==null)return t;var r=[],s=0;return sa(t,r,"","",function(i){return e.call(n,i,s++)}),r}function qx(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var qe={current:null},ia={transition:null},Qx={ReactCurrentDispatcher:qe,ReactCurrentBatchConfig:ia,ReactCurrentOwner:$d};function qg(){throw Error("act(...) is not supported in production builds of React.")}z.Children={map:Mo,forEach:function(t,e,n){Mo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Mo(t,function(){e++}),e},toArray:function(t){return Mo(t,function(e){return e})||[]},only:function(t){if(!Wd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};z.Component=Fs;z.Fragment=Dx;z.Profiler=Fx;z.PureComponent=Fd;z.StrictMode=Lx;z.Suspense=zx;z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qx;z.act=qg;z.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=zg({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=$d.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Hg.call(e,l)&&!Kg.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:po,type:t.type,key:s,ref:i,props:r,_owner:o}};z.createContext=function(t){return t={$$typeof:$x,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Ux,_context:t},t.Consumer=t};z.createElement=Gg;z.createFactory=function(t){var e=Gg.bind(null,t);return e.type=t,e};z.createRef=function(){return{current:null}};z.forwardRef=function(t){return{$$typeof:Wx,render:t}};z.isValidElement=Wd;z.lazy=function(t){return{$$typeof:Vx,_payload:{_status:-1,_result:t},_init:qx}};z.memo=function(t,e){return{$$typeof:Bx,type:t,compare:e===void 0?null:e}};z.startTransition=function(t){var e=ia.transition;ia.transition={};try{t()}finally{ia.transition=e}};z.unstable_act=qg;z.useCallback=function(t,e){return qe.current.useCallback(t,e)};z.useContext=function(t){return qe.current.useContext(t)};z.useDebugValue=function(){};z.useDeferredValue=function(t){return qe.current.useDeferredValue(t)};z.useEffect=function(t,e){return qe.current.useEffect(t,e)};z.useId=function(){return qe.current.useId()};z.useImperativeHandle=function(t,e,n){return qe.current.useImperativeHandle(t,e,n)};z.useInsertionEffect=function(t,e){return qe.current.useInsertionEffect(t,e)};z.useLayoutEffect=function(t,e){return qe.current.useLayoutEffect(t,e)};z.useMemo=function(t,e){return qe.current.useMemo(t,e)};z.useReducer=function(t,e,n){return qe.current.useReducer(t,e,n)};z.useRef=function(t){return qe.current.useRef(t)};z.useState=function(t){return qe.current.useState(t)};z.useSyncExternalStore=function(t,e,n){return qe.current.useSyncExternalStore(t,e,n)};z.useTransition=function(){return qe.current.useTransition()};z.version="18.3.1";$g.exports=z;var x=$g.exports;const Sl=Fg(x),Yx=Mx({__proto__:null,default:Sl},[x]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xx=x,Jx=Symbol.for("react.element"),Zx=Symbol.for("react.fragment"),ek=Object.prototype.hasOwnProperty,tk=Xx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,nk={key:!0,ref:!0,__self:!0,__source:!0};function Qg(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)ek.call(e,r)&&!nk.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:Jx,type:t,key:i,ref:o,props:s,_owner:tk.current}}El.Fragment=Zx;El.jsx=Qg;El.jsxs=Qg;Ug.exports=El;var u=Ug.exports,mu={},Yg={exports:{}},ut={},Xg={exports:{}},Jg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(b,P){var F=b.length;b.push(P);e:for(;0<F;){var ge=F-1>>>1,Ce=b[ge];if(0<s(Ce,P))b[ge]=P,b[F]=Ce,F=ge;else break e}}function n(b){return b.length===0?null:b[0]}function r(b){if(b.length===0)return null;var P=b[0],F=b.pop();if(F!==P){b[0]=F;e:for(var ge=0,Ce=b.length,Ao=Ce>>>1;ge<Ao;){var lr=2*(ge+1)-1,gc=b[lr],cr=lr+1,Oo=b[cr];if(0>s(gc,F))cr<Ce&&0>s(Oo,gc)?(b[ge]=Oo,b[cr]=F,ge=cr):(b[ge]=gc,b[lr]=F,ge=lr);else if(cr<Ce&&0>s(Oo,F))b[ge]=Oo,b[cr]=F,ge=cr;else break e}}return P}function s(b,P){var F=b.sortIndex-P.sortIndex;return F!==0?F:b.id-P.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,h=null,f=3,y=!1,g=!1,_=!1,k=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(b){for(var P=n(c);P!==null;){if(P.callback===null)r(c);else if(P.startTime<=b)r(c),P.sortIndex=P.expirationTime,e(l,P);else break;P=n(c)}}function w(b){if(_=!1,m(b),!g)if(n(l)!==null)g=!0,V(S);else{var P=n(c);P!==null&&be(w,P.startTime-b)}}function S(b,P){g=!1,_&&(_=!1,v(T),T=-1),y=!0;var F=f;try{for(m(P),h=n(l);h!==null&&(!(h.expirationTime>P)||b&&!Q());){var ge=h.callback;if(typeof ge=="function"){h.callback=null,f=h.priorityLevel;var Ce=ge(h.expirationTime<=P);P=t.unstable_now(),typeof Ce=="function"?h.callback=Ce:h===n(l)&&r(l),m(P)}else r(l);h=n(l)}if(h!==null)var Ao=!0;else{var lr=n(c);lr!==null&&be(w,lr.startTime-P),Ao=!1}return Ao}finally{h=null,f=F,y=!1}}var E=!1,C=null,T=-1,D=5,A=-1;function Q(){return!(t.unstable_now()-A<D)}function me(){if(C!==null){var b=t.unstable_now();A=b;var P=!0;try{P=C(!0,b)}finally{P?rt():(E=!1,C=null)}}else E=!1}var rt;if(typeof p=="function")rt=function(){p(me)};else if(typeof MessageChannel<"u"){var L=new MessageChannel,_e=L.port2;L.port1.onmessage=me,rt=function(){_e.postMessage(null)}}else rt=function(){k(me,0)};function V(b){C=b,E||(E=!0,rt())}function be(b,P){T=k(function(){b(t.unstable_now())},P)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(b){b.callback=null},t.unstable_continueExecution=function(){g||y||(g=!0,V(S))},t.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<b?Math.floor(1e3/b):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(b){switch(f){case 1:case 2:case 3:var P=3;break;default:P=f}var F=f;f=P;try{return b()}finally{f=F}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(b,P){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var F=f;f=b;try{return P()}finally{f=F}},t.unstable_scheduleCallback=function(b,P,F){var ge=t.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?ge+F:ge):F=ge,b){case 1:var Ce=-1;break;case 2:Ce=250;break;case 5:Ce=1073741823;break;case 4:Ce=1e4;break;default:Ce=5e3}return Ce=F+Ce,b={id:d++,callback:P,priorityLevel:b,startTime:F,expirationTime:Ce,sortIndex:-1},F>ge?(b.sortIndex=F,e(c,b),n(l)===null&&b===n(c)&&(_?(v(T),T=-1):_=!0,be(w,F-ge))):(b.sortIndex=Ce,e(l,b),g||y||(g=!0,V(S))),b},t.unstable_shouldYield=Q,t.unstable_wrapCallback=function(b){var P=f;return function(){var F=f;f=P;try{return b.apply(this,arguments)}finally{f=F}}}})(Jg);Xg.exports=Jg;var rk=Xg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sk=x,lt=rk;function I(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Zg=new Set,Mi={};function Ur(t,e){ks(t,e),ks(t+"Capture",e)}function ks(t,e){for(Mi[t]=e,t=0;t<e.length;t++)Zg.add(e[t])}var hn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),gu=Object.prototype.hasOwnProperty,ik=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Hf={},Kf={};function ok(t){return gu.call(Kf,t)?!0:gu.call(Hf,t)?!1:ik.test(t)?Kf[t]=!0:(Hf[t]=!0,!1)}function ak(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function lk(t,e,n,r){if(e===null||typeof e>"u"||ak(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Qe(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var je={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){je[t]=new Qe(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];je[e]=new Qe(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){je[t]=new Qe(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){je[t]=new Qe(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){je[t]=new Qe(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){je[t]=new Qe(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){je[t]=new Qe(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){je[t]=new Qe(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){je[t]=new Qe(t,5,!1,t.toLowerCase(),null,!1,!1)});var zd=/[\-:]([a-z])/g;function Bd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(zd,Bd);je[e]=new Qe(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(zd,Bd);je[e]=new Qe(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(zd,Bd);je[e]=new Qe(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){je[t]=new Qe(t,1,!1,t.toLowerCase(),null,!1,!1)});je.xlinkHref=new Qe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){je[t]=new Qe(t,1,!1,t.toLowerCase(),null,!0,!0)});function Vd(t,e,n,r){var s=je.hasOwnProperty(e)?je[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(lk(e,n,s,r)&&(n=null),r||s===null?ok(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var xn=sk.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,jo=Symbol.for("react.element"),Yr=Symbol.for("react.portal"),Xr=Symbol.for("react.fragment"),Hd=Symbol.for("react.strict_mode"),yu=Symbol.for("react.profiler"),ey=Symbol.for("react.provider"),ty=Symbol.for("react.context"),Kd=Symbol.for("react.forward_ref"),vu=Symbol.for("react.suspense"),_u=Symbol.for("react.suspense_list"),Gd=Symbol.for("react.memo"),bn=Symbol.for("react.lazy"),ny=Symbol.for("react.offscreen"),Gf=Symbol.iterator;function Ys(t){return t===null||typeof t!="object"?null:(t=Gf&&t[Gf]||t["@@iterator"],typeof t=="function"?t:null)}var de=Object.assign,vc;function ui(t){if(vc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);vc=e&&e[1]||""}return`
`+vc+t}var _c=!1;function wc(t,e){if(!t||_c)return"";_c=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var s=c.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,a=i.length-1;1<=o&&0<=a&&s[o]!==i[a];)a--;for(;1<=o&&0<=a;o--,a--)if(s[o]!==i[a]){if(o!==1||a!==1)do if(o--,a--,0>a||s[o]!==i[a]){var l=`
`+s[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{_c=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ui(t):""}function ck(t){switch(t.tag){case 5:return ui(t.type);case 16:return ui("Lazy");case 13:return ui("Suspense");case 19:return ui("SuspenseList");case 0:case 2:case 15:return t=wc(t.type,!1),t;case 11:return t=wc(t.type.render,!1),t;case 1:return t=wc(t.type,!0),t;default:return""}}function wu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Xr:return"Fragment";case Yr:return"Portal";case yu:return"Profiler";case Hd:return"StrictMode";case vu:return"Suspense";case _u:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case ty:return(t.displayName||"Context")+".Consumer";case ey:return(t._context.displayName||"Context")+".Provider";case Kd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Gd:return e=t.displayName||null,e!==null?e:wu(t.type)||"Memo";case bn:e=t._payload,t=t._init;try{return wu(t(e))}catch{}}return null}function uk(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return wu(e);case 8:return e===Hd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Xn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ry(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function dk(t){var e=ry(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Do(t){t._valueTracker||(t._valueTracker=dk(t))}function sy(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=ry(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ka(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function xu(t,e){var n=e.checked;return de({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function qf(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Xn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function iy(t,e){e=e.checked,e!=null&&Vd(t,"checked",e,!1)}function ku(t,e){iy(t,e);var n=Xn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Eu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Eu(t,e.type,Xn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Qf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Eu(t,e,n){(e!=="number"||ka(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var di=Array.isArray;function ds(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Xn(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function Su(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(I(91));return de({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Yf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(I(92));if(di(n)){if(1<n.length)throw Error(I(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Xn(n)}}function oy(t,e){var n=Xn(e.value),r=Xn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Xf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function ay(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function bu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?ay(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Lo,ly=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Lo=Lo||document.createElement("div"),Lo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Lo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ji(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var yi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},hk=["Webkit","ms","Moz","O"];Object.keys(yi).forEach(function(t){hk.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),yi[e]=yi[t]})});function cy(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||yi.hasOwnProperty(t)&&yi[t]?(""+e).trim():e+"px"}function uy(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=cy(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var fk=de({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Cu(t,e){if(e){if(fk[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(I(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(I(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(I(61))}if(e.style!=null&&typeof e.style!="object")throw Error(I(62))}}function Iu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nu=null;function qd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Tu=null,hs=null,fs=null;function Jf(t){if(t=yo(t)){if(typeof Tu!="function")throw Error(I(280));var e=t.stateNode;e&&(e=Tl(e),Tu(t.stateNode,t.type,e))}}function dy(t){hs?fs?fs.push(t):fs=[t]:hs=t}function hy(){if(hs){var t=hs,e=fs;if(fs=hs=null,Jf(t),e)for(t=0;t<e.length;t++)Jf(e[t])}}function fy(t,e){return t(e)}function py(){}var xc=!1;function my(t,e,n){if(xc)return t(e,n);xc=!0;try{return fy(t,e,n)}finally{xc=!1,(hs!==null||fs!==null)&&(py(),hy())}}function Di(t,e){var n=t.stateNode;if(n===null)return null;var r=Tl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(I(231,e,typeof n));return n}var Ru=!1;if(hn)try{var Xs={};Object.defineProperty(Xs,"passive",{get:function(){Ru=!0}}),window.addEventListener("test",Xs,Xs),window.removeEventListener("test",Xs,Xs)}catch{Ru=!1}function pk(t,e,n,r,s,i,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var vi=!1,Ea=null,Sa=!1,Pu=null,mk={onError:function(t){vi=!0,Ea=t}};function gk(t,e,n,r,s,i,o,a,l){vi=!1,Ea=null,pk.apply(mk,arguments)}function yk(t,e,n,r,s,i,o,a,l){if(gk.apply(this,arguments),vi){if(vi){var c=Ea;vi=!1,Ea=null}else throw Error(I(198));Sa||(Sa=!0,Pu=c)}}function $r(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function gy(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Zf(t){if($r(t)!==t)throw Error(I(188))}function vk(t){var e=t.alternate;if(!e){if(e=$r(t),e===null)throw Error(I(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return Zf(s),t;if(i===r)return Zf(s),e;i=i.sibling}throw Error(I(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o){for(a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o)throw Error(I(189))}}if(n.alternate!==r)throw Error(I(190))}if(n.tag!==3)throw Error(I(188));return n.stateNode.current===n?t:e}function yy(t){return t=vk(t),t!==null?vy(t):null}function vy(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=vy(t);if(e!==null)return e;t=t.sibling}return null}var _y=lt.unstable_scheduleCallback,ep=lt.unstable_cancelCallback,_k=lt.unstable_shouldYield,wk=lt.unstable_requestPaint,ye=lt.unstable_now,xk=lt.unstable_getCurrentPriorityLevel,Qd=lt.unstable_ImmediatePriority,wy=lt.unstable_UserBlockingPriority,ba=lt.unstable_NormalPriority,kk=lt.unstable_LowPriority,xy=lt.unstable_IdlePriority,bl=null,zt=null;function Ek(t){if(zt&&typeof zt.onCommitFiberRoot=="function")try{zt.onCommitFiberRoot(bl,t,void 0,(t.current.flags&128)===128)}catch{}}var It=Math.clz32?Math.clz32:Ck,Sk=Math.log,bk=Math.LN2;function Ck(t){return t>>>=0,t===0?32:31-(Sk(t)/bk|0)|0}var Fo=64,Uo=4194304;function hi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ca(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~s;a!==0?r=hi(a):(i&=o,i!==0&&(r=hi(i)))}else o=n&~s,o!==0?r=hi(o):i!==0&&(r=hi(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-It(e),s=1<<n,r|=t[n],e&=~s;return r}function Ik(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Nk(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-It(i),a=1<<o,l=s[o];l===-1?(!(a&n)||a&r)&&(s[o]=Ik(a,e)):l<=e&&(t.expiredLanes|=a),i&=~a}}function Au(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ky(){var t=Fo;return Fo<<=1,!(Fo&4194240)&&(Fo=64),t}function kc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function mo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-It(e),t[e]=n}function Tk(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-It(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function Yd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-It(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var Y=0;function Ey(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Sy,Xd,by,Cy,Iy,Ou=!1,$o=[],$n=null,Wn=null,zn=null,Li=new Map,Fi=new Map,In=[],Rk="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function tp(t,e){switch(t){case"focusin":case"focusout":$n=null;break;case"dragenter":case"dragleave":Wn=null;break;case"mouseover":case"mouseout":zn=null;break;case"pointerover":case"pointerout":Li.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fi.delete(e.pointerId)}}function Js(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=yo(e),e!==null&&Xd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function Pk(t,e,n,r,s){switch(e){case"focusin":return $n=Js($n,t,e,n,r,s),!0;case"dragenter":return Wn=Js(Wn,t,e,n,r,s),!0;case"mouseover":return zn=Js(zn,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return Li.set(i,Js(Li.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,Fi.set(i,Js(Fi.get(i)||null,t,e,n,r,s)),!0}return!1}function Ny(t){var e=pr(t.target);if(e!==null){var n=$r(e);if(n!==null){if(e=n.tag,e===13){if(e=gy(n),e!==null){t.blockedOn=e,Iy(t.priority,function(){by(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function oa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Mu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Nu=r,n.target.dispatchEvent(r),Nu=null}else return e=yo(n),e!==null&&Xd(e),t.blockedOn=n,!1;e.shift()}return!0}function np(t,e,n){oa(t)&&n.delete(e)}function Ak(){Ou=!1,$n!==null&&oa($n)&&($n=null),Wn!==null&&oa(Wn)&&(Wn=null),zn!==null&&oa(zn)&&(zn=null),Li.forEach(np),Fi.forEach(np)}function Zs(t,e){t.blockedOn===e&&(t.blockedOn=null,Ou||(Ou=!0,lt.unstable_scheduleCallback(lt.unstable_NormalPriority,Ak)))}function Ui(t){function e(s){return Zs(s,t)}if(0<$o.length){Zs($o[0],t);for(var n=1;n<$o.length;n++){var r=$o[n];r.blockedOn===t&&(r.blockedOn=null)}}for($n!==null&&Zs($n,t),Wn!==null&&Zs(Wn,t),zn!==null&&Zs(zn,t),Li.forEach(e),Fi.forEach(e),n=0;n<In.length;n++)r=In[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<In.length&&(n=In[0],n.blockedOn===null);)Ny(n),n.blockedOn===null&&In.shift()}var ps=xn.ReactCurrentBatchConfig,Ia=!0;function Ok(t,e,n,r){var s=Y,i=ps.transition;ps.transition=null;try{Y=1,Jd(t,e,n,r)}finally{Y=s,ps.transition=i}}function Mk(t,e,n,r){var s=Y,i=ps.transition;ps.transition=null;try{Y=4,Jd(t,e,n,r)}finally{Y=s,ps.transition=i}}function Jd(t,e,n,r){if(Ia){var s=Mu(t,e,n,r);if(s===null)Ac(t,e,r,Na,n),tp(t,r);else if(Pk(s,t,e,n,r))r.stopPropagation();else if(tp(t,r),e&4&&-1<Rk.indexOf(t)){for(;s!==null;){var i=yo(s);if(i!==null&&Sy(i),i=Mu(t,e,n,r),i===null&&Ac(t,e,r,Na,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else Ac(t,e,r,null,n)}}var Na=null;function Mu(t,e,n,r){if(Na=null,t=qd(r),t=pr(t),t!==null)if(e=$r(t),e===null)t=null;else if(n=e.tag,n===13){if(t=gy(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Na=t,null}function Ty(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(xk()){case Qd:return 1;case wy:return 4;case ba:case kk:return 16;case xy:return 536870912;default:return 16}default:return 16}}var jn=null,Zd=null,aa=null;function Ry(){if(aa)return aa;var t,e=Zd,n=e.length,r,s="value"in jn?jn.value:jn.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return aa=s.slice(t,1<r?1-r:void 0)}function la(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Wo(){return!0}function rp(){return!1}function dt(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Wo:rp,this.isPropagationStopped=rp,this}return de(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Wo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Wo)},persist:function(){},isPersistent:Wo}),e}var Us={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},eh=dt(Us),go=de({},Us,{view:0,detail:0}),jk=dt(go),Ec,Sc,ei,Cl=de({},go,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:th,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ei&&(ei&&t.type==="mousemove"?(Ec=t.screenX-ei.screenX,Sc=t.screenY-ei.screenY):Sc=Ec=0,ei=t),Ec)},movementY:function(t){return"movementY"in t?t.movementY:Sc}}),sp=dt(Cl),Dk=de({},Cl,{dataTransfer:0}),Lk=dt(Dk),Fk=de({},go,{relatedTarget:0}),bc=dt(Fk),Uk=de({},Us,{animationName:0,elapsedTime:0,pseudoElement:0}),$k=dt(Uk),Wk=de({},Us,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),zk=dt(Wk),Bk=de({},Us,{data:0}),ip=dt(Bk),Vk={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Hk={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Kk={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Gk(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Kk[t])?!!e[t]:!1}function th(){return Gk}var qk=de({},go,{key:function(t){if(t.key){var e=Vk[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=la(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Hk[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:th,charCode:function(t){return t.type==="keypress"?la(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?la(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Qk=dt(qk),Yk=de({},Cl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),op=dt(Yk),Xk=de({},go,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:th}),Jk=dt(Xk),Zk=de({},Us,{propertyName:0,elapsedTime:0,pseudoElement:0}),eE=dt(Zk),tE=de({},Cl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),nE=dt(tE),rE=[9,13,27,32],nh=hn&&"CompositionEvent"in window,_i=null;hn&&"documentMode"in document&&(_i=document.documentMode);var sE=hn&&"TextEvent"in window&&!_i,Py=hn&&(!nh||_i&&8<_i&&11>=_i),ap=" ",lp=!1;function Ay(t,e){switch(t){case"keyup":return rE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Oy(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Jr=!1;function iE(t,e){switch(t){case"compositionend":return Oy(e);case"keypress":return e.which!==32?null:(lp=!0,ap);case"textInput":return t=e.data,t===ap&&lp?null:t;default:return null}}function oE(t,e){if(Jr)return t==="compositionend"||!nh&&Ay(t,e)?(t=Ry(),aa=Zd=jn=null,Jr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Py&&e.locale!=="ko"?null:e.data;default:return null}}var aE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!aE[t.type]:e==="textarea"}function My(t,e,n,r){dy(r),e=Ta(e,"onChange"),0<e.length&&(n=new eh("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var wi=null,$i=null;function lE(t){Hy(t,0)}function Il(t){var e=ts(t);if(sy(e))return t}function cE(t,e){if(t==="change")return e}var jy=!1;if(hn){var Cc;if(hn){var Ic="oninput"in document;if(!Ic){var up=document.createElement("div");up.setAttribute("oninput","return;"),Ic=typeof up.oninput=="function"}Cc=Ic}else Cc=!1;jy=Cc&&(!document.documentMode||9<document.documentMode)}function dp(){wi&&(wi.detachEvent("onpropertychange",Dy),$i=wi=null)}function Dy(t){if(t.propertyName==="value"&&Il($i)){var e=[];My(e,$i,t,qd(t)),my(lE,e)}}function uE(t,e,n){t==="focusin"?(dp(),wi=e,$i=n,wi.attachEvent("onpropertychange",Dy)):t==="focusout"&&dp()}function dE(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Il($i)}function hE(t,e){if(t==="click")return Il(e)}function fE(t,e){if(t==="input"||t==="change")return Il(e)}function pE(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Rt=typeof Object.is=="function"?Object.is:pE;function Wi(t,e){if(Rt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!gu.call(e,s)||!Rt(t[s],e[s]))return!1}return!0}function hp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function fp(t,e){var n=hp(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=hp(n)}}function Ly(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Ly(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Fy(){for(var t=window,e=ka();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ka(t.document)}return e}function rh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function mE(t){var e=Fy(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Ly(n.ownerDocument.documentElement,n)){if(r!==null&&rh(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=fp(n,i);var o=fp(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var gE=hn&&"documentMode"in document&&11>=document.documentMode,Zr=null,ju=null,xi=null,Du=!1;function pp(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Du||Zr==null||Zr!==ka(r)||(r=Zr,"selectionStart"in r&&rh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),xi&&Wi(xi,r)||(xi=r,r=Ta(ju,"onSelect"),0<r.length&&(e=new eh("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Zr)))}function zo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var es={animationend:zo("Animation","AnimationEnd"),animationiteration:zo("Animation","AnimationIteration"),animationstart:zo("Animation","AnimationStart"),transitionend:zo("Transition","TransitionEnd")},Nc={},Uy={};hn&&(Uy=document.createElement("div").style,"AnimationEvent"in window||(delete es.animationend.animation,delete es.animationiteration.animation,delete es.animationstart.animation),"TransitionEvent"in window||delete es.transitionend.transition);function Nl(t){if(Nc[t])return Nc[t];if(!es[t])return t;var e=es[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Uy)return Nc[t]=e[n];return t}var $y=Nl("animationend"),Wy=Nl("animationiteration"),zy=Nl("animationstart"),By=Nl("transitionend"),Vy=new Map,mp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function rr(t,e){Vy.set(t,e),Ur(e,[t])}for(var Tc=0;Tc<mp.length;Tc++){var Rc=mp[Tc],yE=Rc.toLowerCase(),vE=Rc[0].toUpperCase()+Rc.slice(1);rr(yE,"on"+vE)}rr($y,"onAnimationEnd");rr(Wy,"onAnimationIteration");rr(zy,"onAnimationStart");rr("dblclick","onDoubleClick");rr("focusin","onFocus");rr("focusout","onBlur");rr(By,"onTransitionEnd");ks("onMouseEnter",["mouseout","mouseover"]);ks("onMouseLeave",["mouseout","mouseover"]);ks("onPointerEnter",["pointerout","pointerover"]);ks("onPointerLeave",["pointerout","pointerover"]);Ur("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ur("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ur("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ur("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ur("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ur("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_E=new Set("cancel close invalid load scroll toggle".split(" ").concat(fi));function gp(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,yk(r,e,void 0,t),t.currentTarget=null}function Hy(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==i&&s.isPropagationStopped())break e;gp(s,a,c),i=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==i&&s.isPropagationStopped())break e;gp(s,a,c),i=l}}}if(Sa)throw t=Pu,Sa=!1,Pu=null,t}function re(t,e){var n=e[Wu];n===void 0&&(n=e[Wu]=new Set);var r=t+"__bubble";n.has(r)||(Ky(e,t,2,!1),n.add(r))}function Pc(t,e,n){var r=0;e&&(r|=4),Ky(n,t,r,e)}var Bo="_reactListening"+Math.random().toString(36).slice(2);function zi(t){if(!t[Bo]){t[Bo]=!0,Zg.forEach(function(n){n!=="selectionchange"&&(_E.has(n)||Pc(n,!1,t),Pc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Bo]||(e[Bo]=!0,Pc("selectionchange",!1,e))}}function Ky(t,e,n,r){switch(Ty(e)){case 1:var s=Ok;break;case 4:s=Mk;break;default:s=Jd}n=s.bind(null,e,n,t),s=void 0,!Ru||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function Ac(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===s||a.nodeType===8&&a.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===s||l.nodeType===8&&l.parentNode===s))return;o=o.return}for(;a!==null;){if(o=pr(a),o===null)return;if(l=o.tag,l===5||l===6){r=i=o;continue e}a=a.parentNode}}r=r.return}my(function(){var c=i,d=qd(n),h=[];e:{var f=Vy.get(t);if(f!==void 0){var y=eh,g=t;switch(t){case"keypress":if(la(n)===0)break e;case"keydown":case"keyup":y=Qk;break;case"focusin":g="focus",y=bc;break;case"focusout":g="blur",y=bc;break;case"beforeblur":case"afterblur":y=bc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=sp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Lk;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Jk;break;case $y:case Wy:case zy:y=$k;break;case By:y=eE;break;case"scroll":y=jk;break;case"wheel":y=nE;break;case"copy":case"cut":case"paste":y=zk;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=op}var _=(e&4)!==0,k=!_&&t==="scroll",v=_?f!==null?f+"Capture":null:f;_=[];for(var p=c,m;p!==null;){m=p;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,v!==null&&(w=Di(p,v),w!=null&&_.push(Bi(p,w,m)))),k)break;p=p.return}0<_.length&&(f=new y(f,g,null,n,d),h.push({event:f,listeners:_}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",f&&n!==Nu&&(g=n.relatedTarget||n.fromElement)&&(pr(g)||g[fn]))break e;if((y||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,y?(g=n.relatedTarget||n.toElement,y=c,g=g?pr(g):null,g!==null&&(k=$r(g),g!==k||g.tag!==5&&g.tag!==6)&&(g=null)):(y=null,g=c),y!==g)){if(_=sp,w="onMouseLeave",v="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(_=op,w="onPointerLeave",v="onPointerEnter",p="pointer"),k=y==null?f:ts(y),m=g==null?f:ts(g),f=new _(w,p+"leave",y,n,d),f.target=k,f.relatedTarget=m,w=null,pr(d)===c&&(_=new _(v,p+"enter",g,n,d),_.target=m,_.relatedTarget=k,w=_),k=w,y&&g)t:{for(_=y,v=g,p=0,m=_;m;m=qr(m))p++;for(m=0,w=v;w;w=qr(w))m++;for(;0<p-m;)_=qr(_),p--;for(;0<m-p;)v=qr(v),m--;for(;p--;){if(_===v||v!==null&&_===v.alternate)break t;_=qr(_),v=qr(v)}_=null}else _=null;y!==null&&yp(h,f,y,_,!1),g!==null&&k!==null&&yp(h,k,g,_,!0)}}e:{if(f=c?ts(c):window,y=f.nodeName&&f.nodeName.toLowerCase(),y==="select"||y==="input"&&f.type==="file")var S=cE;else if(cp(f))if(jy)S=fE;else{S=dE;var E=uE}else(y=f.nodeName)&&y.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(S=hE);if(S&&(S=S(t,c))){My(h,S,n,d);break e}E&&E(t,f,c),t==="focusout"&&(E=f._wrapperState)&&E.controlled&&f.type==="number"&&Eu(f,"number",f.value)}switch(E=c?ts(c):window,t){case"focusin":(cp(E)||E.contentEditable==="true")&&(Zr=E,ju=c,xi=null);break;case"focusout":xi=ju=Zr=null;break;case"mousedown":Du=!0;break;case"contextmenu":case"mouseup":case"dragend":Du=!1,pp(h,n,d);break;case"selectionchange":if(gE)break;case"keydown":case"keyup":pp(h,n,d)}var C;if(nh)e:{switch(t){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else Jr?Ay(t,n)&&(T="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(Py&&n.locale!=="ko"&&(Jr||T!=="onCompositionStart"?T==="onCompositionEnd"&&Jr&&(C=Ry()):(jn=d,Zd="value"in jn?jn.value:jn.textContent,Jr=!0)),E=Ta(c,T),0<E.length&&(T=new ip(T,t,null,n,d),h.push({event:T,listeners:E}),C?T.data=C:(C=Oy(n),C!==null&&(T.data=C)))),(C=sE?iE(t,n):oE(t,n))&&(c=Ta(c,"onBeforeInput"),0<c.length&&(d=new ip("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:c}),d.data=C))}Hy(h,e)})}function Bi(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ta(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=Di(t,n),i!=null&&r.unshift(Bi(t,i,s)),i=Di(t,e),i!=null&&r.push(Bi(t,i,s))),t=t.return}return r}function qr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function yp(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,s?(l=Di(n,i),l!=null&&o.unshift(Bi(n,l,a))):s||(l=Di(n,i),l!=null&&o.push(Bi(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var wE=/\r\n?/g,xE=/\u0000|\uFFFD/g;function vp(t){return(typeof t=="string"?t:""+t).replace(wE,`
`).replace(xE,"")}function Vo(t,e,n){if(e=vp(e),vp(t)!==e&&n)throw Error(I(425))}function Ra(){}var Lu=null,Fu=null;function Uu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var $u=typeof setTimeout=="function"?setTimeout:void 0,kE=typeof clearTimeout=="function"?clearTimeout:void 0,_p=typeof Promise=="function"?Promise:void 0,EE=typeof queueMicrotask=="function"?queueMicrotask:typeof _p<"u"?function(t){return _p.resolve(null).then(t).catch(SE)}:$u;function SE(t){setTimeout(function(){throw t})}function Oc(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),Ui(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);Ui(e)}function Bn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function wp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var $s=Math.random().toString(36).slice(2),Ft="__reactFiber$"+$s,Vi="__reactProps$"+$s,fn="__reactContainer$"+$s,Wu="__reactEvents$"+$s,bE="__reactListeners$"+$s,CE="__reactHandles$"+$s;function pr(t){var e=t[Ft];if(e)return e;for(var n=t.parentNode;n;){if(e=n[fn]||n[Ft]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=wp(t);t!==null;){if(n=t[Ft])return n;t=wp(t)}return e}t=n,n=t.parentNode}return null}function yo(t){return t=t[Ft]||t[fn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ts(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(I(33))}function Tl(t){return t[Vi]||null}var zu=[],ns=-1;function sr(t){return{current:t}}function se(t){0>ns||(t.current=zu[ns],zu[ns]=null,ns--)}function te(t,e){ns++,zu[ns]=t.current,t.current=e}var Jn={},We=sr(Jn),Ze=sr(!1),Er=Jn;function Es(t,e){var n=t.type.contextTypes;if(!n)return Jn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function et(t){return t=t.childContextTypes,t!=null}function Pa(){se(Ze),se(We)}function xp(t,e,n){if(We.current!==Jn)throw Error(I(168));te(We,e),te(Ze,n)}function Gy(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(I(108,uk(t)||"Unknown",s));return de({},n,r)}function Aa(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Jn,Er=We.current,te(We,t),te(Ze,Ze.current),!0}function kp(t,e,n){var r=t.stateNode;if(!r)throw Error(I(169));n?(t=Gy(t,e,Er),r.__reactInternalMemoizedMergedChildContext=t,se(Ze),se(We),te(We,t)):se(Ze),te(Ze,n)}var Zt=null,Rl=!1,Mc=!1;function qy(t){Zt===null?Zt=[t]:Zt.push(t)}function IE(t){Rl=!0,qy(t)}function ir(){if(!Mc&&Zt!==null){Mc=!0;var t=0,e=Y;try{var n=Zt;for(Y=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Zt=null,Rl=!1}catch(s){throw Zt!==null&&(Zt=Zt.slice(t+1)),_y(Qd,ir),s}finally{Y=e,Mc=!1}}return null}var rs=[],ss=0,Oa=null,Ma=0,ht=[],ft=0,Sr=null,en=1,tn="";function ur(t,e){rs[ss++]=Ma,rs[ss++]=Oa,Oa=t,Ma=e}function Qy(t,e,n){ht[ft++]=en,ht[ft++]=tn,ht[ft++]=Sr,Sr=t;var r=en;t=tn;var s=32-It(r)-1;r&=~(1<<s),n+=1;var i=32-It(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,en=1<<32-It(e)+s|n<<s|r,tn=i+t}else en=1<<i|n<<s|r,tn=t}function sh(t){t.return!==null&&(ur(t,1),Qy(t,1,0))}function ih(t){for(;t===Oa;)Oa=rs[--ss],rs[ss]=null,Ma=rs[--ss],rs[ss]=null;for(;t===Sr;)Sr=ht[--ft],ht[ft]=null,tn=ht[--ft],ht[ft]=null,en=ht[--ft],ht[ft]=null}var at=null,it=null,ie=!1,Et=null;function Yy(t,e){var n=pt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Ep(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,at=t,it=Bn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,at=t,it=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Sr!==null?{id:en,overflow:tn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=pt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,at=t,it=null,!0):!1;default:return!1}}function Bu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Vu(t){if(ie){var e=it;if(e){var n=e;if(!Ep(t,e)){if(Bu(t))throw Error(I(418));e=Bn(n.nextSibling);var r=at;e&&Ep(t,e)?Yy(r,n):(t.flags=t.flags&-4097|2,ie=!1,at=t)}}else{if(Bu(t))throw Error(I(418));t.flags=t.flags&-4097|2,ie=!1,at=t}}}function Sp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;at=t}function Ho(t){if(t!==at)return!1;if(!ie)return Sp(t),ie=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Uu(t.type,t.memoizedProps)),e&&(e=it)){if(Bu(t))throw Xy(),Error(I(418));for(;e;)Yy(t,e),e=Bn(e.nextSibling)}if(Sp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(I(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){it=Bn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}it=null}}else it=at?Bn(t.stateNode.nextSibling):null;return!0}function Xy(){for(var t=it;t;)t=Bn(t.nextSibling)}function Ss(){it=at=null,ie=!1}function oh(t){Et===null?Et=[t]:Et.push(t)}var NE=xn.ReactCurrentBatchConfig;function ti(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(I(309));var r=n.stateNode}if(!r)throw Error(I(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var a=s.refs;o===null?delete a[i]:a[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(I(284));if(!n._owner)throw Error(I(290,t))}return t}function Ko(t,e){throw t=Object.prototype.toString.call(e),Error(I(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function bp(t){var e=t._init;return e(t._payload)}function Jy(t){function e(v,p){if(t){var m=v.deletions;m===null?(v.deletions=[p],v.flags|=16):m.push(p)}}function n(v,p){if(!t)return null;for(;p!==null;)e(v,p),p=p.sibling;return null}function r(v,p){for(v=new Map;p!==null;)p.key!==null?v.set(p.key,p):v.set(p.index,p),p=p.sibling;return v}function s(v,p){return v=Gn(v,p),v.index=0,v.sibling=null,v}function i(v,p,m){return v.index=m,t?(m=v.alternate,m!==null?(m=m.index,m<p?(v.flags|=2,p):m):(v.flags|=2,p)):(v.flags|=1048576,p)}function o(v){return t&&v.alternate===null&&(v.flags|=2),v}function a(v,p,m,w){return p===null||p.tag!==6?(p=Wc(m,v.mode,w),p.return=v,p):(p=s(p,m),p.return=v,p)}function l(v,p,m,w){var S=m.type;return S===Xr?d(v,p,m.props.children,w,m.key):p!==null&&(p.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===bn&&bp(S)===p.type)?(w=s(p,m.props),w.ref=ti(v,p,m),w.return=v,w):(w=ma(m.type,m.key,m.props,null,v.mode,w),w.ref=ti(v,p,m),w.return=v,w)}function c(v,p,m,w){return p===null||p.tag!==4||p.stateNode.containerInfo!==m.containerInfo||p.stateNode.implementation!==m.implementation?(p=zc(m,v.mode,w),p.return=v,p):(p=s(p,m.children||[]),p.return=v,p)}function d(v,p,m,w,S){return p===null||p.tag!==7?(p=wr(m,v.mode,w,S),p.return=v,p):(p=s(p,m),p.return=v,p)}function h(v,p,m){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Wc(""+p,v.mode,m),p.return=v,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case jo:return m=ma(p.type,p.key,p.props,null,v.mode,m),m.ref=ti(v,null,p),m.return=v,m;case Yr:return p=zc(p,v.mode,m),p.return=v,p;case bn:var w=p._init;return h(v,w(p._payload),m)}if(di(p)||Ys(p))return p=wr(p,v.mode,m,null),p.return=v,p;Ko(v,p)}return null}function f(v,p,m,w){var S=p!==null?p.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return S!==null?null:a(v,p,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case jo:return m.key===S?l(v,p,m,w):null;case Yr:return m.key===S?c(v,p,m,w):null;case bn:return S=m._init,f(v,p,S(m._payload),w)}if(di(m)||Ys(m))return S!==null?null:d(v,p,m,w,null);Ko(v,m)}return null}function y(v,p,m,w,S){if(typeof w=="string"&&w!==""||typeof w=="number")return v=v.get(m)||null,a(p,v,""+w,S);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case jo:return v=v.get(w.key===null?m:w.key)||null,l(p,v,w,S);case Yr:return v=v.get(w.key===null?m:w.key)||null,c(p,v,w,S);case bn:var E=w._init;return y(v,p,m,E(w._payload),S)}if(di(w)||Ys(w))return v=v.get(m)||null,d(p,v,w,S,null);Ko(p,w)}return null}function g(v,p,m,w){for(var S=null,E=null,C=p,T=p=0,D=null;C!==null&&T<m.length;T++){C.index>T?(D=C,C=null):D=C.sibling;var A=f(v,C,m[T],w);if(A===null){C===null&&(C=D);break}t&&C&&A.alternate===null&&e(v,C),p=i(A,p,T),E===null?S=A:E.sibling=A,E=A,C=D}if(T===m.length)return n(v,C),ie&&ur(v,T),S;if(C===null){for(;T<m.length;T++)C=h(v,m[T],w),C!==null&&(p=i(C,p,T),E===null?S=C:E.sibling=C,E=C);return ie&&ur(v,T),S}for(C=r(v,C);T<m.length;T++)D=y(C,v,T,m[T],w),D!==null&&(t&&D.alternate!==null&&C.delete(D.key===null?T:D.key),p=i(D,p,T),E===null?S=D:E.sibling=D,E=D);return t&&C.forEach(function(Q){return e(v,Q)}),ie&&ur(v,T),S}function _(v,p,m,w){var S=Ys(m);if(typeof S!="function")throw Error(I(150));if(m=S.call(m),m==null)throw Error(I(151));for(var E=S=null,C=p,T=p=0,D=null,A=m.next();C!==null&&!A.done;T++,A=m.next()){C.index>T?(D=C,C=null):D=C.sibling;var Q=f(v,C,A.value,w);if(Q===null){C===null&&(C=D);break}t&&C&&Q.alternate===null&&e(v,C),p=i(Q,p,T),E===null?S=Q:E.sibling=Q,E=Q,C=D}if(A.done)return n(v,C),ie&&ur(v,T),S;if(C===null){for(;!A.done;T++,A=m.next())A=h(v,A.value,w),A!==null&&(p=i(A,p,T),E===null?S=A:E.sibling=A,E=A);return ie&&ur(v,T),S}for(C=r(v,C);!A.done;T++,A=m.next())A=y(C,v,T,A.value,w),A!==null&&(t&&A.alternate!==null&&C.delete(A.key===null?T:A.key),p=i(A,p,T),E===null?S=A:E.sibling=A,E=A);return t&&C.forEach(function(me){return e(v,me)}),ie&&ur(v,T),S}function k(v,p,m,w){if(typeof m=="object"&&m!==null&&m.type===Xr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case jo:e:{for(var S=m.key,E=p;E!==null;){if(E.key===S){if(S=m.type,S===Xr){if(E.tag===7){n(v,E.sibling),p=s(E,m.props.children),p.return=v,v=p;break e}}else if(E.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===bn&&bp(S)===E.type){n(v,E.sibling),p=s(E,m.props),p.ref=ti(v,E,m),p.return=v,v=p;break e}n(v,E);break}else e(v,E);E=E.sibling}m.type===Xr?(p=wr(m.props.children,v.mode,w,m.key),p.return=v,v=p):(w=ma(m.type,m.key,m.props,null,v.mode,w),w.ref=ti(v,p,m),w.return=v,v=w)}return o(v);case Yr:e:{for(E=m.key;p!==null;){if(p.key===E)if(p.tag===4&&p.stateNode.containerInfo===m.containerInfo&&p.stateNode.implementation===m.implementation){n(v,p.sibling),p=s(p,m.children||[]),p.return=v,v=p;break e}else{n(v,p);break}else e(v,p);p=p.sibling}p=zc(m,v.mode,w),p.return=v,v=p}return o(v);case bn:return E=m._init,k(v,p,E(m._payload),w)}if(di(m))return g(v,p,m,w);if(Ys(m))return _(v,p,m,w);Ko(v,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,p!==null&&p.tag===6?(n(v,p.sibling),p=s(p,m),p.return=v,v=p):(n(v,p),p=Wc(m,v.mode,w),p.return=v,v=p),o(v)):n(v,p)}return k}var bs=Jy(!0),Zy=Jy(!1),ja=sr(null),Da=null,is=null,ah=null;function lh(){ah=is=Da=null}function ch(t){var e=ja.current;se(ja),t._currentValue=e}function Hu(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ms(t,e){Da=t,ah=is=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Xe=!0),t.firstContext=null)}function yt(t){var e=t._currentValue;if(ah!==t)if(t={context:t,memoizedValue:e,next:null},is===null){if(Da===null)throw Error(I(308));is=t,Da.dependencies={lanes:0,firstContext:t}}else is=is.next=t;return e}var mr=null;function uh(t){mr===null?mr=[t]:mr.push(t)}function ev(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,uh(e)):(n.next=s.next,s.next=n),e.interleaved=n,pn(t,r)}function pn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Cn=!1;function dh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function tv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ln(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Vn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,H&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,pn(t,n)}return s=r.interleaved,s===null?(e.next=e,uh(r)):(e.next=s.next,s.next=e),r.interleaved=e,pn(t,n)}function ca(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Yd(t,n)}}function Cp(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function La(t,e,n,r){var s=t.updateQueue;Cn=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,a=s.shared.pending;if(a!==null){s.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?i=c:o.next=c,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(i!==null){var h=s.baseState;o=0,d=c=l=null,a=i;do{var f=a.lane,y=a.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,_=a;switch(f=e,y=n,_.tag){case 1:if(g=_.payload,typeof g=="function"){h=g.call(y,h,f);break e}h=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=_.payload,f=typeof g=="function"?g.call(y,h,f):g,f==null)break e;h=de({},h,f);break e;case 2:Cn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=s.effects,f===null?s.effects=[a]:f.push(a))}else y={eventTime:y,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=y,l=h):d=d.next=y,o|=f;if(a=a.next,a===null){if(a=s.shared.pending,a===null)break;f=a,a=f.next,f.next=null,s.lastBaseUpdate=f,s.shared.pending=null}}while(!0);if(d===null&&(l=h),s.baseState=l,s.firstBaseUpdate=c,s.lastBaseUpdate=d,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);Cr|=o,t.lanes=o,t.memoizedState=h}}function Ip(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(I(191,s));s.call(r)}}}var vo={},Bt=sr(vo),Hi=sr(vo),Ki=sr(vo);function gr(t){if(t===vo)throw Error(I(174));return t}function hh(t,e){switch(te(Ki,e),te(Hi,t),te(Bt,vo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:bu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=bu(e,t)}se(Bt),te(Bt,e)}function Cs(){se(Bt),se(Hi),se(Ki)}function nv(t){gr(Ki.current);var e=gr(Bt.current),n=bu(e,t.type);e!==n&&(te(Hi,t),te(Bt,n))}function fh(t){Hi.current===t&&(se(Bt),se(Hi))}var ae=sr(0);function Fa(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var jc=[];function ph(){for(var t=0;t<jc.length;t++)jc[t]._workInProgressVersionPrimary=null;jc.length=0}var ua=xn.ReactCurrentDispatcher,Dc=xn.ReactCurrentBatchConfig,br=0,ue=null,we=null,Ne=null,Ua=!1,ki=!1,Gi=0,TE=0;function Le(){throw Error(I(321))}function mh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Rt(t[n],e[n]))return!1;return!0}function gh(t,e,n,r,s,i){if(br=i,ue=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ua.current=t===null||t.memoizedState===null?OE:ME,t=n(r,s),ki){i=0;do{if(ki=!1,Gi=0,25<=i)throw Error(I(301));i+=1,Ne=we=null,e.updateQueue=null,ua.current=jE,t=n(r,s)}while(ki)}if(ua.current=$a,e=we!==null&&we.next!==null,br=0,Ne=we=ue=null,Ua=!1,e)throw Error(I(300));return t}function yh(){var t=Gi!==0;return Gi=0,t}function Lt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ne===null?ue.memoizedState=Ne=t:Ne=Ne.next=t,Ne}function vt(){if(we===null){var t=ue.alternate;t=t!==null?t.memoizedState:null}else t=we.next;var e=Ne===null?ue.memoizedState:Ne.next;if(e!==null)Ne=e,we=t;else{if(t===null)throw Error(I(310));we=t,t={memoizedState:we.memoizedState,baseState:we.baseState,baseQueue:we.baseQueue,queue:we.queue,next:null},Ne===null?ue.memoizedState=Ne=t:Ne=Ne.next=t}return Ne}function qi(t,e){return typeof e=="function"?e(t):e}function Lc(t){var e=vt(),n=e.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=t;var r=we,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var a=o=null,l=null,c=i;do{var d=c.lane;if((br&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var h={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,ue.lanes|=d,Cr|=d}c=c.next}while(c!==null&&c!==i);l===null?o=r:l.next=a,Rt(r,e.memoizedState)||(Xe=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,ue.lanes|=i,Cr|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Fc(t){var e=vt(),n=e.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);Rt(i,e.memoizedState)||(Xe=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function rv(){}function sv(t,e){var n=ue,r=vt(),s=e(),i=!Rt(r.memoizedState,s);if(i&&(r.memoizedState=s,Xe=!0),r=r.queue,vh(av.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||Ne!==null&&Ne.memoizedState.tag&1){if(n.flags|=2048,Qi(9,ov.bind(null,n,r,s,e),void 0,null),Pe===null)throw Error(I(349));br&30||iv(n,e,s)}return s}function iv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ue.updateQueue,e===null?(e={lastEffect:null,stores:null},ue.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function ov(t,e,n,r){e.value=n,e.getSnapshot=r,lv(e)&&cv(t)}function av(t,e,n){return n(function(){lv(e)&&cv(t)})}function lv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Rt(t,n)}catch{return!0}}function cv(t){var e=pn(t,1);e!==null&&Nt(e,t,1,-1)}function Np(t){var e=Lt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:t},e.queue=t,t=t.dispatch=AE.bind(null,ue,t),[e.memoizedState,t]}function Qi(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ue.updateQueue,e===null?(e={lastEffect:null,stores:null},ue.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function uv(){return vt().memoizedState}function da(t,e,n,r){var s=Lt();ue.flags|=t,s.memoizedState=Qi(1|e,n,void 0,r===void 0?null:r)}function Pl(t,e,n,r){var s=vt();r=r===void 0?null:r;var i=void 0;if(we!==null){var o=we.memoizedState;if(i=o.destroy,r!==null&&mh(r,o.deps)){s.memoizedState=Qi(e,n,i,r);return}}ue.flags|=t,s.memoizedState=Qi(1|e,n,i,r)}function Tp(t,e){return da(8390656,8,t,e)}function vh(t,e){return Pl(2048,8,t,e)}function dv(t,e){return Pl(4,2,t,e)}function hv(t,e){return Pl(4,4,t,e)}function fv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function pv(t,e,n){return n=n!=null?n.concat([t]):null,Pl(4,4,fv.bind(null,e,t),n)}function _h(){}function mv(t,e){var n=vt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&mh(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function gv(t,e){var n=vt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&mh(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function yv(t,e,n){return br&21?(Rt(n,e)||(n=ky(),ue.lanes|=n,Cr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Xe=!0),t.memoizedState=n)}function RE(t,e){var n=Y;Y=n!==0&&4>n?n:4,t(!0);var r=Dc.transition;Dc.transition={};try{t(!1),e()}finally{Y=n,Dc.transition=r}}function vv(){return vt().memoizedState}function PE(t,e,n){var r=Kn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},_v(t))wv(e,n);else if(n=ev(t,e,n,r),n!==null){var s=He();Nt(n,t,r,s),xv(n,e,r)}}function AE(t,e,n){var r=Kn(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(_v(t))wv(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,a=i(o,n);if(s.hasEagerState=!0,s.eagerState=a,Rt(a,o)){var l=e.interleaved;l===null?(s.next=s,uh(e)):(s.next=l.next,l.next=s),e.interleaved=s;return}}catch{}finally{}n=ev(t,e,s,r),n!==null&&(s=He(),Nt(n,t,r,s),xv(n,e,r))}}function _v(t){var e=t.alternate;return t===ue||e!==null&&e===ue}function wv(t,e){ki=Ua=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function xv(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Yd(t,n)}}var $a={readContext:yt,useCallback:Le,useContext:Le,useEffect:Le,useImperativeHandle:Le,useInsertionEffect:Le,useLayoutEffect:Le,useMemo:Le,useReducer:Le,useRef:Le,useState:Le,useDebugValue:Le,useDeferredValue:Le,useTransition:Le,useMutableSource:Le,useSyncExternalStore:Le,useId:Le,unstable_isNewReconciler:!1},OE={readContext:yt,useCallback:function(t,e){return Lt().memoizedState=[t,e===void 0?null:e],t},useContext:yt,useEffect:Tp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,da(4194308,4,fv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return da(4194308,4,t,e)},useInsertionEffect:function(t,e){return da(4,2,t,e)},useMemo:function(t,e){var n=Lt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Lt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=PE.bind(null,ue,t),[r.memoizedState,t]},useRef:function(t){var e=Lt();return t={current:t},e.memoizedState=t},useState:Np,useDebugValue:_h,useDeferredValue:function(t){return Lt().memoizedState=t},useTransition:function(){var t=Np(!1),e=t[0];return t=RE.bind(null,t[1]),Lt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ue,s=Lt();if(ie){if(n===void 0)throw Error(I(407));n=n()}else{if(n=e(),Pe===null)throw Error(I(349));br&30||iv(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,Tp(av.bind(null,r,i,t),[t]),r.flags|=2048,Qi(9,ov.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=Lt(),e=Pe.identifierPrefix;if(ie){var n=tn,r=en;n=(r&~(1<<32-It(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Gi++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=TE++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},ME={readContext:yt,useCallback:mv,useContext:yt,useEffect:vh,useImperativeHandle:pv,useInsertionEffect:dv,useLayoutEffect:hv,useMemo:gv,useReducer:Lc,useRef:uv,useState:function(){return Lc(qi)},useDebugValue:_h,useDeferredValue:function(t){var e=vt();return yv(e,we.memoizedState,t)},useTransition:function(){var t=Lc(qi)[0],e=vt().memoizedState;return[t,e]},useMutableSource:rv,useSyncExternalStore:sv,useId:vv,unstable_isNewReconciler:!1},jE={readContext:yt,useCallback:mv,useContext:yt,useEffect:vh,useImperativeHandle:pv,useInsertionEffect:dv,useLayoutEffect:hv,useMemo:gv,useReducer:Fc,useRef:uv,useState:function(){return Fc(qi)},useDebugValue:_h,useDeferredValue:function(t){var e=vt();return we===null?e.memoizedState=t:yv(e,we.memoizedState,t)},useTransition:function(){var t=Fc(qi)[0],e=vt().memoizedState;return[t,e]},useMutableSource:rv,useSyncExternalStore:sv,useId:vv,unstable_isNewReconciler:!1};function xt(t,e){if(t&&t.defaultProps){e=de({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Ku(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:de({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Al={isMounted:function(t){return(t=t._reactInternals)?$r(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=He(),s=Kn(t),i=ln(r,s);i.payload=e,n!=null&&(i.callback=n),e=Vn(t,i,s),e!==null&&(Nt(e,t,s,r),ca(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=He(),s=Kn(t),i=ln(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=Vn(t,i,s),e!==null&&(Nt(e,t,s,r),ca(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=He(),r=Kn(t),s=ln(n,r);s.tag=2,e!=null&&(s.callback=e),e=Vn(t,s,r),e!==null&&(Nt(e,t,r,n),ca(e,t,r))}};function Rp(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!Wi(n,r)||!Wi(s,i):!0}function kv(t,e,n){var r=!1,s=Jn,i=e.contextType;return typeof i=="object"&&i!==null?i=yt(i):(s=et(e)?Er:We.current,r=e.contextTypes,i=(r=r!=null)?Es(t,s):Jn),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Al,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function Pp(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Al.enqueueReplaceState(e,e.state,null)}function Gu(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},dh(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=yt(i):(i=et(e)?Er:We.current,s.context=Es(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(Ku(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&Al.enqueueReplaceState(s,s.state,null),La(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function Is(t,e){try{var n="",r=e;do n+=ck(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function Uc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function qu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var DE=typeof WeakMap=="function"?WeakMap:Map;function Ev(t,e,n){n=ln(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){za||(za=!0,sd=r),qu(t,e)},n}function Sv(t,e,n){n=ln(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){qu(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){qu(t,e),typeof r!="function"&&(Hn===null?Hn=new Set([this]):Hn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Ap(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new DE;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=YE.bind(null,t,e,n),e.then(t,t))}function Op(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Mp(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=ln(-1,1),e.tag=2,Vn(n,e,1))),n.lanes|=1),t)}var LE=xn.ReactCurrentOwner,Xe=!1;function Be(t,e,n,r){e.child=t===null?Zy(e,null,n,r):bs(e,t.child,n,r)}function jp(t,e,n,r,s){n=n.render;var i=e.ref;return ms(e,s),r=gh(t,e,n,r,i,s),n=yh(),t!==null&&!Xe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,mn(t,e,s)):(ie&&n&&sh(e),e.flags|=1,Be(t,e,r,s),e.child)}function Dp(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!Ih(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,bv(t,e,i,r,s)):(t=ma(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:Wi,n(o,r)&&t.ref===e.ref)return mn(t,e,s)}return e.flags|=1,t=Gn(i,r),t.ref=e.ref,t.return=e,e.child=t}function bv(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(Wi(i,r)&&t.ref===e.ref)if(Xe=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(Xe=!0);else return e.lanes=t.lanes,mn(t,e,s)}return Qu(t,e,n,r,s)}function Cv(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},te(as,st),st|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,te(as,st),st|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,te(as,st),st|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,te(as,st),st|=r;return Be(t,e,s,n),e.child}function Iv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Qu(t,e,n,r,s){var i=et(n)?Er:We.current;return i=Es(e,i),ms(e,s),n=gh(t,e,n,r,i,s),r=yh(),t!==null&&!Xe?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,mn(t,e,s)):(ie&&r&&sh(e),e.flags|=1,Be(t,e,n,s),e.child)}function Lp(t,e,n,r,s){if(et(n)){var i=!0;Aa(e)}else i=!1;if(ms(e,s),e.stateNode===null)ha(t,e),kv(e,n,r),Gu(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=yt(c):(c=et(n)?Er:We.current,c=Es(e,c));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==c)&&Pp(e,o,r,c),Cn=!1;var f=e.memoizedState;o.state=f,La(e,r,o,s),l=e.memoizedState,a!==r||f!==l||Ze.current||Cn?(typeof d=="function"&&(Ku(e,n,d,r),l=e.memoizedState),(a=Cn||Rp(e,n,a,r,f,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,tv(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:xt(e.type,a),o.props=c,h=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=yt(l):(l=et(n)?Er:We.current,l=Es(e,l));var y=n.getDerivedStateFromProps;(d=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||f!==l)&&Pp(e,o,r,l),Cn=!1,f=e.memoizedState,o.state=f,La(e,r,o,s);var g=e.memoizedState;a!==h||f!==g||Ze.current||Cn?(typeof y=="function"&&(Ku(e,n,y,r),g=e.memoizedState),(c=Cn||Rp(e,n,c,r,f,g,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=g),o.props=r,o.state=g,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return Yu(t,e,n,r,i,s)}function Yu(t,e,n,r,s,i){Iv(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&kp(e,n,!1),mn(t,e,i);r=e.stateNode,LE.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=bs(e,t.child,null,i),e.child=bs(e,null,a,i)):Be(t,e,a,i),e.memoizedState=r.state,s&&kp(e,n,!0),e.child}function Nv(t){var e=t.stateNode;e.pendingContext?xp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&xp(t,e.context,!1),hh(t,e.containerInfo)}function Fp(t,e,n,r,s){return Ss(),oh(s),e.flags|=256,Be(t,e,n,r),e.child}var Xu={dehydrated:null,treeContext:null,retryLane:0};function Ju(t){return{baseLanes:t,cachePool:null,transitions:null}}function Tv(t,e,n){var r=e.pendingProps,s=ae.current,i=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(s&2)!==0),a?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),te(ae,s&1),t===null)return Vu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=jl(o,r,0,null),t=wr(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=Ju(n),e.memoizedState=Xu,t):wh(e,o));if(s=t.memoizedState,s!==null&&(a=s.dehydrated,a!==null))return FE(t,e,o,r,a,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,a=s.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Gn(s,l),r.subtreeFlags=s.subtreeFlags&14680064),a!==null?i=Gn(a,i):(i=wr(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?Ju(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=Xu,r}return i=t.child,t=i.sibling,r=Gn(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function wh(t,e){return e=jl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Go(t,e,n,r){return r!==null&&oh(r),bs(e,t.child,null,n),t=wh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function FE(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=Uc(Error(I(422))),Go(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=jl({mode:"visible",children:r.children},s,0,null),i=wr(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&bs(e,t.child,null,o),e.child.memoizedState=Ju(o),e.memoizedState=Xu,i);if(!(e.mode&1))return Go(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(I(419)),r=Uc(i,r,void 0),Go(t,e,o,r)}if(a=(o&t.childLanes)!==0,Xe||a){if(r=Pe,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,pn(t,s),Nt(r,t,s,-1))}return Ch(),r=Uc(Error(I(421))),Go(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=XE.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,it=Bn(s.nextSibling),at=e,ie=!0,Et=null,t!==null&&(ht[ft++]=en,ht[ft++]=tn,ht[ft++]=Sr,en=t.id,tn=t.overflow,Sr=e),e=wh(e,r.children),e.flags|=4096,e)}function Up(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Hu(t.return,e,n)}function $c(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function Rv(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(Be(t,e,r.children,n),r=ae.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Up(t,n,e);else if(t.tag===19)Up(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(te(ae,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&Fa(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),$c(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&Fa(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}$c(e,!0,n,null,i);break;case"together":$c(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ha(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function mn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Cr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(I(153));if(e.child!==null){for(t=e.child,n=Gn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Gn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function UE(t,e,n){switch(e.tag){case 3:Nv(e),Ss();break;case 5:nv(e);break;case 1:et(e.type)&&Aa(e);break;case 4:hh(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;te(ja,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(te(ae,ae.current&1),e.flags|=128,null):n&e.child.childLanes?Tv(t,e,n):(te(ae,ae.current&1),t=mn(t,e,n),t!==null?t.sibling:null);te(ae,ae.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Rv(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),te(ae,ae.current),r)break;return null;case 22:case 23:return e.lanes=0,Cv(t,e,n)}return mn(t,e,n)}var Pv,Zu,Av,Ov;Pv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Zu=function(){};Av=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,gr(Bt.current);var i=null;switch(n){case"input":s=xu(t,s),r=xu(t,r),i=[];break;case"select":s=de({},s,{value:void 0}),r=de({},r,{value:void 0}),i=[];break;case"textarea":s=Su(t,s),r=Su(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ra)}Cu(n,r);var o;n=null;for(c in s)if(!r.hasOwnProperty(c)&&s.hasOwnProperty(c)&&s[c]!=null)if(c==="style"){var a=s[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Mi.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var l=r[c];if(a=s!=null?s[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(i||(i=[]),i.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(i=i||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(i=i||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Mi.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&re("scroll",t),i||a===l||(i=[])):(i=i||[]).push(c,l))}n&&(i=i||[]).push("style",n);var c=i;(e.updateQueue=c)&&(e.flags|=4)}};Ov=function(t,e,n,r){n!==r&&(e.flags|=4)};function ni(t,e){if(!ie)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Fe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function $E(t,e,n){var r=e.pendingProps;switch(ih(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Fe(e),null;case 1:return et(e.type)&&Pa(),Fe(e),null;case 3:return r=e.stateNode,Cs(),se(Ze),se(We),ph(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ho(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Et!==null&&(ad(Et),Et=null))),Zu(t,e),Fe(e),null;case 5:fh(e);var s=gr(Ki.current);if(n=e.type,t!==null&&e.stateNode!=null)Av(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(I(166));return Fe(e),null}if(t=gr(Bt.current),Ho(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[Ft]=e,r[Vi]=i,t=(e.mode&1)!==0,n){case"dialog":re("cancel",r),re("close",r);break;case"iframe":case"object":case"embed":re("load",r);break;case"video":case"audio":for(s=0;s<fi.length;s++)re(fi[s],r);break;case"source":re("error",r);break;case"img":case"image":case"link":re("error",r),re("load",r);break;case"details":re("toggle",r);break;case"input":qf(r,i),re("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},re("invalid",r);break;case"textarea":Yf(r,i),re("invalid",r)}Cu(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var a=i[o];o==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&Vo(r.textContent,a,t),s=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&Vo(r.textContent,a,t),s=["children",""+a]):Mi.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&re("scroll",r)}switch(n){case"input":Do(r),Qf(r,i,!0);break;case"textarea":Do(r),Xf(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Ra)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ay(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Ft]=e,t[Vi]=r,Pv(t,e,!1,!1),e.stateNode=t;e:{switch(o=Iu(n,r),n){case"dialog":re("cancel",t),re("close",t),s=r;break;case"iframe":case"object":case"embed":re("load",t),s=r;break;case"video":case"audio":for(s=0;s<fi.length;s++)re(fi[s],t);s=r;break;case"source":re("error",t),s=r;break;case"img":case"image":case"link":re("error",t),re("load",t),s=r;break;case"details":re("toggle",t),s=r;break;case"input":qf(t,r),s=xu(t,r),re("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=de({},r,{value:void 0}),re("invalid",t);break;case"textarea":Yf(t,r),s=Su(t,r),re("invalid",t);break;default:s=r}Cu(n,s),a=s;for(i in a)if(a.hasOwnProperty(i)){var l=a[i];i==="style"?uy(t,l):i==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&ly(t,l)):i==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ji(t,l):typeof l=="number"&&ji(t,""+l):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Mi.hasOwnProperty(i)?l!=null&&i==="onScroll"&&re("scroll",t):l!=null&&Vd(t,i,l,o))}switch(n){case"input":Do(t),Qf(t,r,!1);break;case"textarea":Do(t),Xf(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Xn(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?ds(t,!!r.multiple,i,!1):r.defaultValue!=null&&ds(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=Ra)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Fe(e),null;case 6:if(t&&e.stateNode!=null)Ov(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(I(166));if(n=gr(Ki.current),gr(Bt.current),Ho(e)){if(r=e.stateNode,n=e.memoizedProps,r[Ft]=e,(i=r.nodeValue!==n)&&(t=at,t!==null))switch(t.tag){case 3:Vo(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Vo(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ft]=e,e.stateNode=r}return Fe(e),null;case 13:if(se(ae),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ie&&it!==null&&e.mode&1&&!(e.flags&128))Xy(),Ss(),e.flags|=98560,i=!1;else if(i=Ho(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(I(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(I(317));i[Ft]=e}else Ss(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Fe(e),i=!1}else Et!==null&&(ad(Et),Et=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ae.current&1?Ee===0&&(Ee=3):Ch())),e.updateQueue!==null&&(e.flags|=4),Fe(e),null);case 4:return Cs(),Zu(t,e),t===null&&zi(e.stateNode.containerInfo),Fe(e),null;case 10:return ch(e.type._context),Fe(e),null;case 17:return et(e.type)&&Pa(),Fe(e),null;case 19:if(se(ae),i=e.memoizedState,i===null)return Fe(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)ni(i,!1);else{if(Ee!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Fa(t),o!==null){for(e.flags|=128,ni(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return te(ae,ae.current&1|2),e.child}t=t.sibling}i.tail!==null&&ye()>Ns&&(e.flags|=128,r=!0,ni(i,!1),e.lanes=4194304)}else{if(!r)if(t=Fa(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ni(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!ie)return Fe(e),null}else 2*ye()-i.renderingStartTime>Ns&&n!==1073741824&&(e.flags|=128,r=!0,ni(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=ye(),e.sibling=null,n=ae.current,te(ae,r?n&1|2:n&1),e):(Fe(e),null);case 22:case 23:return bh(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?st&1073741824&&(Fe(e),e.subtreeFlags&6&&(e.flags|=8192)):Fe(e),null;case 24:return null;case 25:return null}throw Error(I(156,e.tag))}function WE(t,e){switch(ih(e),e.tag){case 1:return et(e.type)&&Pa(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Cs(),se(Ze),se(We),ph(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return fh(e),null;case 13:if(se(ae),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(I(340));Ss()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return se(ae),null;case 4:return Cs(),null;case 10:return ch(e.type._context),null;case 22:case 23:return bh(),null;case 24:return null;default:return null}}var qo=!1,Ue=!1,zE=typeof WeakSet=="function"?WeakSet:Set,R=null;function os(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){he(t,e,r)}else n.current=null}function ed(t,e,n){try{n()}catch(r){he(t,e,r)}}var $p=!1;function BE(t,e){if(Lu=Ia,t=Fy(),rh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,d=0,h=t,f=null;t:for(;;){for(var y;h!==n||s!==0&&h.nodeType!==3||(a=o+s),h!==i||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(y=h.firstChild)!==null;)f=h,h=y;for(;;){if(h===t)break t;if(f===n&&++c===s&&(a=o),f===i&&++d===r&&(l=o),(y=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=y}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Fu={focusedElem:t,selectionRange:n},Ia=!1,R=e;R!==null;)if(e=R,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,R=t;else for(;R!==null;){e=R;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var _=g.memoizedProps,k=g.memoizedState,v=e.stateNode,p=v.getSnapshotBeforeUpdate(e.elementType===e.type?_:xt(e.type,_),k);v.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(I(163))}}catch(w){he(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,R=t;break}R=e.return}return g=$p,$p=!1,g}function Ei(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&ed(e,n,i)}s=s.next}while(s!==r)}}function Ol(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function td(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Mv(t){var e=t.alternate;e!==null&&(t.alternate=null,Mv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ft],delete e[Vi],delete e[Wu],delete e[bE],delete e[CE])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function jv(t){return t.tag===5||t.tag===3||t.tag===4}function Wp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||jv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function nd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ra));else if(r!==4&&(t=t.child,t!==null))for(nd(t,e,n),t=t.sibling;t!==null;)nd(t,e,n),t=t.sibling}function rd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(rd(t,e,n),t=t.sibling;t!==null;)rd(t,e,n),t=t.sibling}var Oe=null,kt=!1;function En(t,e,n){for(n=n.child;n!==null;)Dv(t,e,n),n=n.sibling}function Dv(t,e,n){if(zt&&typeof zt.onCommitFiberUnmount=="function")try{zt.onCommitFiberUnmount(bl,n)}catch{}switch(n.tag){case 5:Ue||os(n,e);case 6:var r=Oe,s=kt;Oe=null,En(t,e,n),Oe=r,kt=s,Oe!==null&&(kt?(t=Oe,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Oe.removeChild(n.stateNode));break;case 18:Oe!==null&&(kt?(t=Oe,n=n.stateNode,t.nodeType===8?Oc(t.parentNode,n):t.nodeType===1&&Oc(t,n),Ui(t)):Oc(Oe,n.stateNode));break;case 4:r=Oe,s=kt,Oe=n.stateNode.containerInfo,kt=!0,En(t,e,n),Oe=r,kt=s;break;case 0:case 11:case 14:case 15:if(!Ue&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&ed(n,e,o),s=s.next}while(s!==r)}En(t,e,n);break;case 1:if(!Ue&&(os(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){he(n,e,a)}En(t,e,n);break;case 21:En(t,e,n);break;case 22:n.mode&1?(Ue=(r=Ue)||n.memoizedState!==null,En(t,e,n),Ue=r):En(t,e,n);break;default:En(t,e,n)}}function zp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new zE),e.forEach(function(r){var s=JE.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function wt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Oe=a.stateNode,kt=!1;break e;case 3:Oe=a.stateNode.containerInfo,kt=!0;break e;case 4:Oe=a.stateNode.containerInfo,kt=!0;break e}a=a.return}if(Oe===null)throw Error(I(160));Dv(i,o,s),Oe=null,kt=!1;var l=s.alternate;l!==null&&(l.return=null),s.return=null}catch(c){he(s,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Lv(e,t),e=e.sibling}function Lv(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(wt(e,t),jt(t),r&4){try{Ei(3,t,t.return),Ol(3,t)}catch(_){he(t,t.return,_)}try{Ei(5,t,t.return)}catch(_){he(t,t.return,_)}}break;case 1:wt(e,t),jt(t),r&512&&n!==null&&os(n,n.return);break;case 5:if(wt(e,t),jt(t),r&512&&n!==null&&os(n,n.return),t.flags&32){var s=t.stateNode;try{ji(s,"")}catch(_){he(t,t.return,_)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&iy(s,i),Iu(a,o);var c=Iu(a,i);for(o=0;o<l.length;o+=2){var d=l[o],h=l[o+1];d==="style"?uy(s,h):d==="dangerouslySetInnerHTML"?ly(s,h):d==="children"?ji(s,h):Vd(s,d,h,c)}switch(a){case"input":ku(s,i);break;case"textarea":oy(s,i);break;case"select":var f=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?ds(s,!!i.multiple,y,!1):f!==!!i.multiple&&(i.defaultValue!=null?ds(s,!!i.multiple,i.defaultValue,!0):ds(s,!!i.multiple,i.multiple?[]:"",!1))}s[Vi]=i}catch(_){he(t,t.return,_)}}break;case 6:if(wt(e,t),jt(t),r&4){if(t.stateNode===null)throw Error(I(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(_){he(t,t.return,_)}}break;case 3:if(wt(e,t),jt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ui(e.containerInfo)}catch(_){he(t,t.return,_)}break;case 4:wt(e,t),jt(t);break;case 13:wt(e,t),jt(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(Eh=ye())),r&4&&zp(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Ue=(c=Ue)||d,wt(e,t),Ue=c):wt(e,t),jt(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(R=t,d=t.child;d!==null;){for(h=R=d;R!==null;){switch(f=R,y=f.child,f.tag){case 0:case 11:case 14:case 15:Ei(4,f,f.return);break;case 1:os(f,f.return);var g=f.stateNode;if(typeof g.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(_){he(r,n,_)}}break;case 5:os(f,f.return);break;case 22:if(f.memoizedState!==null){Vp(h);continue}}y!==null?(y.return=f,R=y):Vp(h)}d=d.sibling}e:for(d=null,h=t;;){if(h.tag===5){if(d===null){d=h;try{s=h.stateNode,c?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=cy("display",o))}catch(_){he(t,t.return,_)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(_){he(t,t.return,_)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:wt(e,t),jt(t),r&4&&zp(t);break;case 21:break;default:wt(e,t),jt(t)}}function jt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(jv(n)){var r=n;break e}n=n.return}throw Error(I(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(ji(s,""),r.flags&=-33);var i=Wp(t);rd(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Wp(t);nd(t,a,o);break;default:throw Error(I(161))}}catch(l){he(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function VE(t,e,n){R=t,Fv(t)}function Fv(t,e,n){for(var r=(t.mode&1)!==0;R!==null;){var s=R,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||qo;if(!o){var a=s.alternate,l=a!==null&&a.memoizedState!==null||Ue;a=qo;var c=Ue;if(qo=o,(Ue=l)&&!c)for(R=s;R!==null;)o=R,l=o.child,o.tag===22&&o.memoizedState!==null?Hp(s):l!==null?(l.return=o,R=l):Hp(s);for(;i!==null;)R=i,Fv(i),i=i.sibling;R=s,qo=a,Ue=c}Bp(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,R=i):Bp(t)}}function Bp(t){for(;R!==null;){var e=R;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ue||Ol(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ue)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:xt(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&Ip(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Ip(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&Ui(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(I(163))}Ue||e.flags&512&&td(e)}catch(f){he(e,e.return,f)}}if(e===t){R=null;break}if(n=e.sibling,n!==null){n.return=e.return,R=n;break}R=e.return}}function Vp(t){for(;R!==null;){var e=R;if(e===t){R=null;break}var n=e.sibling;if(n!==null){n.return=e.return,R=n;break}R=e.return}}function Hp(t){for(;R!==null;){var e=R;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ol(4,e)}catch(l){he(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(l){he(e,s,l)}}var i=e.return;try{td(e)}catch(l){he(e,i,l)}break;case 5:var o=e.return;try{td(e)}catch(l){he(e,o,l)}}}catch(l){he(e,e.return,l)}if(e===t){R=null;break}var a=e.sibling;if(a!==null){a.return=e.return,R=a;break}R=e.return}}var HE=Math.ceil,Wa=xn.ReactCurrentDispatcher,xh=xn.ReactCurrentOwner,gt=xn.ReactCurrentBatchConfig,H=0,Pe=null,ve=null,Me=0,st=0,as=sr(0),Ee=0,Yi=null,Cr=0,Ml=0,kh=0,Si=null,Ye=null,Eh=0,Ns=1/0,Xt=null,za=!1,sd=null,Hn=null,Qo=!1,Dn=null,Ba=0,bi=0,id=null,fa=-1,pa=0;function He(){return H&6?ye():fa!==-1?fa:fa=ye()}function Kn(t){return t.mode&1?H&2&&Me!==0?Me&-Me:NE.transition!==null?(pa===0&&(pa=ky()),pa):(t=Y,t!==0||(t=window.event,t=t===void 0?16:Ty(t.type)),t):1}function Nt(t,e,n,r){if(50<bi)throw bi=0,id=null,Error(I(185));mo(t,n,r),(!(H&2)||t!==Pe)&&(t===Pe&&(!(H&2)&&(Ml|=n),Ee===4&&Nn(t,Me)),tt(t,r),n===1&&H===0&&!(e.mode&1)&&(Ns=ye()+500,Rl&&ir()))}function tt(t,e){var n=t.callbackNode;Nk(t,e);var r=Ca(t,t===Pe?Me:0);if(r===0)n!==null&&ep(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&ep(n),e===1)t.tag===0?IE(Kp.bind(null,t)):qy(Kp.bind(null,t)),EE(function(){!(H&6)&&ir()}),n=null;else{switch(Ey(r)){case 1:n=Qd;break;case 4:n=wy;break;case 16:n=ba;break;case 536870912:n=xy;break;default:n=ba}n=Kv(n,Uv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Uv(t,e){if(fa=-1,pa=0,H&6)throw Error(I(327));var n=t.callbackNode;if(gs()&&t.callbackNode!==n)return null;var r=Ca(t,t===Pe?Me:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Va(t,r);else{e=r;var s=H;H|=2;var i=Wv();(Pe!==t||Me!==e)&&(Xt=null,Ns=ye()+500,_r(t,e));do try{qE();break}catch(a){$v(t,a)}while(!0);lh(),Wa.current=i,H=s,ve!==null?e=0:(Pe=null,Me=0,e=Ee)}if(e!==0){if(e===2&&(s=Au(t),s!==0&&(r=s,e=od(t,s))),e===1)throw n=Yi,_r(t,0),Nn(t,r),tt(t,ye()),n;if(e===6)Nn(t,r);else{if(s=t.current.alternate,!(r&30)&&!KE(s)&&(e=Va(t,r),e===2&&(i=Au(t),i!==0&&(r=i,e=od(t,i))),e===1))throw n=Yi,_r(t,0),Nn(t,r),tt(t,ye()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(I(345));case 2:dr(t,Ye,Xt);break;case 3:if(Nn(t,r),(r&130023424)===r&&(e=Eh+500-ye(),10<e)){if(Ca(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){He(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=$u(dr.bind(null,t,Ye,Xt),e);break}dr(t,Ye,Xt);break;case 4:if(Nn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-It(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=ye()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*HE(r/1960))-r,10<r){t.timeoutHandle=$u(dr.bind(null,t,Ye,Xt),r);break}dr(t,Ye,Xt);break;case 5:dr(t,Ye,Xt);break;default:throw Error(I(329))}}}return tt(t,ye()),t.callbackNode===n?Uv.bind(null,t):null}function od(t,e){var n=Si;return t.current.memoizedState.isDehydrated&&(_r(t,e).flags|=256),t=Va(t,e),t!==2&&(e=Ye,Ye=n,e!==null&&ad(e)),t}function ad(t){Ye===null?Ye=t:Ye.push.apply(Ye,t)}function KE(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!Rt(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Nn(t,e){for(e&=~kh,e&=~Ml,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-It(e),r=1<<n;t[n]=-1,e&=~r}}function Kp(t){if(H&6)throw Error(I(327));gs();var e=Ca(t,0);if(!(e&1))return tt(t,ye()),null;var n=Va(t,e);if(t.tag!==0&&n===2){var r=Au(t);r!==0&&(e=r,n=od(t,r))}if(n===1)throw n=Yi,_r(t,0),Nn(t,e),tt(t,ye()),n;if(n===6)throw Error(I(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,dr(t,Ye,Xt),tt(t,ye()),null}function Sh(t,e){var n=H;H|=1;try{return t(e)}finally{H=n,H===0&&(Ns=ye()+500,Rl&&ir())}}function Ir(t){Dn!==null&&Dn.tag===0&&!(H&6)&&gs();var e=H;H|=1;var n=gt.transition,r=Y;try{if(gt.transition=null,Y=1,t)return t()}finally{Y=r,gt.transition=n,H=e,!(H&6)&&ir()}}function bh(){st=as.current,se(as)}function _r(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,kE(n)),ve!==null)for(n=ve.return;n!==null;){var r=n;switch(ih(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Pa();break;case 3:Cs(),se(Ze),se(We),ph();break;case 5:fh(r);break;case 4:Cs();break;case 13:se(ae);break;case 19:se(ae);break;case 10:ch(r.type._context);break;case 22:case 23:bh()}n=n.return}if(Pe=t,ve=t=Gn(t.current,null),Me=st=e,Ee=0,Yi=null,kh=Ml=Cr=0,Ye=Si=null,mr!==null){for(e=0;e<mr.length;e++)if(n=mr[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}mr=null}return t}function $v(t,e){do{var n=ve;try{if(lh(),ua.current=$a,Ua){for(var r=ue.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}Ua=!1}if(br=0,Ne=we=ue=null,ki=!1,Gi=0,xh.current=null,n===null||n.return===null){Ee=1,Yi=e,ve=null;break}e:{var i=t,o=n.return,a=n,l=e;if(e=Me,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var y=Op(o);if(y!==null){y.flags&=-257,Mp(y,o,a,i,e),y.mode&1&&Ap(i,c,e),e=y,l=c;var g=e.updateQueue;if(g===null){var _=new Set;_.add(l),e.updateQueue=_}else g.add(l);break e}else{if(!(e&1)){Ap(i,c,e),Ch();break e}l=Error(I(426))}}else if(ie&&a.mode&1){var k=Op(o);if(k!==null){!(k.flags&65536)&&(k.flags|=256),Mp(k,o,a,i,e),oh(Is(l,a));break e}}i=l=Is(l,a),Ee!==4&&(Ee=2),Si===null?Si=[i]:Si.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var v=Ev(i,l,e);Cp(i,v);break e;case 1:a=l;var p=i.type,m=i.stateNode;if(!(i.flags&128)&&(typeof p.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Hn===null||!Hn.has(m)))){i.flags|=65536,e&=-e,i.lanes|=e;var w=Sv(i,a,e);Cp(i,w);break e}}i=i.return}while(i!==null)}Bv(n)}catch(S){e=S,ve===n&&n!==null&&(ve=n=n.return);continue}break}while(!0)}function Wv(){var t=Wa.current;return Wa.current=$a,t===null?$a:t}function Ch(){(Ee===0||Ee===3||Ee===2)&&(Ee=4),Pe===null||!(Cr&268435455)&&!(Ml&268435455)||Nn(Pe,Me)}function Va(t,e){var n=H;H|=2;var r=Wv();(Pe!==t||Me!==e)&&(Xt=null,_r(t,e));do try{GE();break}catch(s){$v(t,s)}while(!0);if(lh(),H=n,Wa.current=r,ve!==null)throw Error(I(261));return Pe=null,Me=0,Ee}function GE(){for(;ve!==null;)zv(ve)}function qE(){for(;ve!==null&&!_k();)zv(ve)}function zv(t){var e=Hv(t.alternate,t,st);t.memoizedProps=t.pendingProps,e===null?Bv(t):ve=e,xh.current=null}function Bv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=WE(n,e),n!==null){n.flags&=32767,ve=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ee=6,ve=null;return}}else if(n=$E(n,e,st),n!==null){ve=n;return}if(e=e.sibling,e!==null){ve=e;return}ve=e=t}while(e!==null);Ee===0&&(Ee=5)}function dr(t,e,n){var r=Y,s=gt.transition;try{gt.transition=null,Y=1,QE(t,e,n,r)}finally{gt.transition=s,Y=r}return null}function QE(t,e,n,r){do gs();while(Dn!==null);if(H&6)throw Error(I(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(I(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(Tk(t,i),t===Pe&&(ve=Pe=null,Me=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Qo||(Qo=!0,Kv(ba,function(){return gs(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=gt.transition,gt.transition=null;var o=Y;Y=1;var a=H;H|=4,xh.current=null,BE(t,n),Lv(n,t),mE(Fu),Ia=!!Lu,Fu=Lu=null,t.current=n,VE(n),wk(),H=a,Y=o,gt.transition=i}else t.current=n;if(Qo&&(Qo=!1,Dn=t,Ba=s),i=t.pendingLanes,i===0&&(Hn=null),Ek(n.stateNode),tt(t,ye()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(za)throw za=!1,t=sd,sd=null,t;return Ba&1&&t.tag!==0&&gs(),i=t.pendingLanes,i&1?t===id?bi++:(bi=0,id=t):bi=0,ir(),null}function gs(){if(Dn!==null){var t=Ey(Ba),e=gt.transition,n=Y;try{if(gt.transition=null,Y=16>t?16:t,Dn===null)var r=!1;else{if(t=Dn,Dn=null,Ba=0,H&6)throw Error(I(331));var s=H;for(H|=4,R=t.current;R!==null;){var i=R,o=i.child;if(R.flags&16){var a=i.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(R=c;R!==null;){var d=R;switch(d.tag){case 0:case 11:case 15:Ei(8,d,i)}var h=d.child;if(h!==null)h.return=d,R=h;else for(;R!==null;){d=R;var f=d.sibling,y=d.return;if(Mv(d),d===c){R=null;break}if(f!==null){f.return=y,R=f;break}R=y}}}var g=i.alternate;if(g!==null){var _=g.child;if(_!==null){g.child=null;do{var k=_.sibling;_.sibling=null,_=k}while(_!==null)}}R=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,R=o;else e:for(;R!==null;){if(i=R,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Ei(9,i,i.return)}var v=i.sibling;if(v!==null){v.return=i.return,R=v;break e}R=i.return}}var p=t.current;for(R=p;R!==null;){o=R;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,R=m;else e:for(o=p;R!==null;){if(a=R,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ol(9,a)}}catch(S){he(a,a.return,S)}if(a===o){R=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,R=w;break e}R=a.return}}if(H=s,ir(),zt&&typeof zt.onPostCommitFiberRoot=="function")try{zt.onPostCommitFiberRoot(bl,t)}catch{}r=!0}return r}finally{Y=n,gt.transition=e}}return!1}function Gp(t,e,n){e=Is(n,e),e=Ev(t,e,1),t=Vn(t,e,1),e=He(),t!==null&&(mo(t,1,e),tt(t,e))}function he(t,e,n){if(t.tag===3)Gp(t,t,n);else for(;e!==null;){if(e.tag===3){Gp(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Hn===null||!Hn.has(r))){t=Is(n,t),t=Sv(e,t,1),e=Vn(e,t,1),t=He(),e!==null&&(mo(e,1,t),tt(e,t));break}}e=e.return}}function YE(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=He(),t.pingedLanes|=t.suspendedLanes&n,Pe===t&&(Me&n)===n&&(Ee===4||Ee===3&&(Me&130023424)===Me&&500>ye()-Eh?_r(t,0):kh|=n),tt(t,e)}function Vv(t,e){e===0&&(t.mode&1?(e=Uo,Uo<<=1,!(Uo&130023424)&&(Uo=4194304)):e=1);var n=He();t=pn(t,e),t!==null&&(mo(t,e,n),tt(t,n))}function XE(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Vv(t,n)}function JE(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(I(314))}r!==null&&r.delete(e),Vv(t,n)}var Hv;Hv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ze.current)Xe=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Xe=!1,UE(t,e,n);Xe=!!(t.flags&131072)}else Xe=!1,ie&&e.flags&1048576&&Qy(e,Ma,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;ha(t,e),t=e.pendingProps;var s=Es(e,We.current);ms(e,n),s=gh(null,e,r,t,s,n);var i=yh();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,et(r)?(i=!0,Aa(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,dh(e),s.updater=Al,e.stateNode=s,s._reactInternals=e,Gu(e,r,t,n),e=Yu(null,e,r,!0,i,n)):(e.tag=0,ie&&i&&sh(e),Be(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(ha(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=eS(r),t=xt(r,t),s){case 0:e=Qu(null,e,r,t,n);break e;case 1:e=Lp(null,e,r,t,n);break e;case 11:e=jp(null,e,r,t,n);break e;case 14:e=Dp(null,e,r,xt(r.type,t),n);break e}throw Error(I(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:xt(r,s),Qu(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:xt(r,s),Lp(t,e,r,s,n);case 3:e:{if(Nv(e),t===null)throw Error(I(387));r=e.pendingProps,i=e.memoizedState,s=i.element,tv(t,e),La(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=Is(Error(I(423)),e),e=Fp(t,e,r,n,s);break e}else if(r!==s){s=Is(Error(I(424)),e),e=Fp(t,e,r,n,s);break e}else for(it=Bn(e.stateNode.containerInfo.firstChild),at=e,ie=!0,Et=null,n=Zy(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ss(),r===s){e=mn(t,e,n);break e}Be(t,e,r,n)}e=e.child}return e;case 5:return nv(e),t===null&&Vu(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,Uu(r,s)?o=null:i!==null&&Uu(r,i)&&(e.flags|=32),Iv(t,e),Be(t,e,o,n),e.child;case 6:return t===null&&Vu(e),null;case 13:return Tv(t,e,n);case 4:return hh(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=bs(e,null,r,n):Be(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:xt(r,s),jp(t,e,r,s,n);case 7:return Be(t,e,e.pendingProps,n),e.child;case 8:return Be(t,e,e.pendingProps.children,n),e.child;case 12:return Be(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,te(ja,r._currentValue),r._currentValue=o,i!==null)if(Rt(i.value,o)){if(i.children===s.children&&!Ze.current){e=mn(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var a=i.dependencies;if(a!==null){o=i.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(i.tag===1){l=ln(-1,n&-n),l.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}i.lanes|=n,l=i.alternate,l!==null&&(l.lanes|=n),Hu(i.return,n,e),a.lanes|=n;break}l=l.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(I(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Hu(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}Be(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,ms(e,n),s=yt(s),r=r(s),e.flags|=1,Be(t,e,r,n),e.child;case 14:return r=e.type,s=xt(r,e.pendingProps),s=xt(r.type,s),Dp(t,e,r,s,n);case 15:return bv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:xt(r,s),ha(t,e),e.tag=1,et(r)?(t=!0,Aa(e)):t=!1,ms(e,n),kv(e,r,s),Gu(e,r,s,n),Yu(null,e,r,!0,t,n);case 19:return Rv(t,e,n);case 22:return Cv(t,e,n)}throw Error(I(156,e.tag))};function Kv(t,e){return _y(t,e)}function ZE(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pt(t,e,n,r){return new ZE(t,e,n,r)}function Ih(t){return t=t.prototype,!(!t||!t.isReactComponent)}function eS(t){if(typeof t=="function")return Ih(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Kd)return 11;if(t===Gd)return 14}return 2}function Gn(t,e){var n=t.alternate;return n===null?(n=pt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ma(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")Ih(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Xr:return wr(n.children,s,i,e);case Hd:o=8,s|=8;break;case yu:return t=pt(12,n,e,s|2),t.elementType=yu,t.lanes=i,t;case vu:return t=pt(13,n,e,s),t.elementType=vu,t.lanes=i,t;case _u:return t=pt(19,n,e,s),t.elementType=_u,t.lanes=i,t;case ny:return jl(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ey:o=10;break e;case ty:o=9;break e;case Kd:o=11;break e;case Gd:o=14;break e;case bn:o=16,r=null;break e}throw Error(I(130,t==null?t:typeof t,""))}return e=pt(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function wr(t,e,n,r){return t=pt(7,t,r,e),t.lanes=n,t}function jl(t,e,n,r){return t=pt(22,t,r,e),t.elementType=ny,t.lanes=n,t.stateNode={isHidden:!1},t}function Wc(t,e,n){return t=pt(6,t,null,e),t.lanes=n,t}function zc(t,e,n){return e=pt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function tS(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=kc(0),this.expirationTimes=kc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=kc(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Nh(t,e,n,r,s,i,o,a,l){return t=new tS(t,e,n,a,l),e===1?(e=1,i===!0&&(e|=8)):e=0,i=pt(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},dh(i),t}function nS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Yr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Gv(t){if(!t)return Jn;t=t._reactInternals;e:{if($r(t)!==t||t.tag!==1)throw Error(I(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(et(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(I(171))}if(t.tag===1){var n=t.type;if(et(n))return Gy(t,n,e)}return e}function qv(t,e,n,r,s,i,o,a,l){return t=Nh(n,r,!0,t,s,i,o,a,l),t.context=Gv(null),n=t.current,r=He(),s=Kn(n),i=ln(r,s),i.callback=e??null,Vn(n,i,s),t.current.lanes=s,mo(t,s,r),tt(t,r),t}function Dl(t,e,n,r){var s=e.current,i=He(),o=Kn(s);return n=Gv(n),e.context===null?e.context=n:e.pendingContext=n,e=ln(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Vn(s,e,o),t!==null&&(Nt(t,s,o,i),ca(t,s,o)),o}function Ha(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function qp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Th(t,e){qp(t,e),(t=t.alternate)&&qp(t,e)}function rS(){return null}var Qv=typeof reportError=="function"?reportError:function(t){console.error(t)};function Rh(t){this._internalRoot=t}Ll.prototype.render=Rh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(I(409));Dl(t,e,null,null)};Ll.prototype.unmount=Rh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ir(function(){Dl(null,t,null,null)}),e[fn]=null}};function Ll(t){this._internalRoot=t}Ll.prototype.unstable_scheduleHydration=function(t){if(t){var e=Cy();t={blockedOn:null,target:t,priority:e};for(var n=0;n<In.length&&e!==0&&e<In[n].priority;n++);In.splice(n,0,t),n===0&&Ny(t)}};function Ph(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Fl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Qp(){}function sS(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var c=Ha(o);i.call(c)}}var o=qv(e,r,t,0,null,!1,!1,"",Qp);return t._reactRootContainer=o,t[fn]=o.current,zi(t.nodeType===8?t.parentNode:t),Ir(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var a=r;r=function(){var c=Ha(l);a.call(c)}}var l=Nh(t,0,!1,null,null,!1,!1,"",Qp);return t._reactRootContainer=l,t[fn]=l.current,zi(t.nodeType===8?t.parentNode:t),Ir(function(){Dl(e,l,n,r)}),l}function Ul(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var a=s;s=function(){var l=Ha(o);a.call(l)}}Dl(e,o,t,s)}else o=sS(n,e,t,s,r);return Ha(o)}Sy=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=hi(e.pendingLanes);n!==0&&(Yd(e,n|1),tt(e,ye()),!(H&6)&&(Ns=ye()+500,ir()))}break;case 13:Ir(function(){var r=pn(t,1);if(r!==null){var s=He();Nt(r,t,1,s)}}),Th(t,1)}};Xd=function(t){if(t.tag===13){var e=pn(t,134217728);if(e!==null){var n=He();Nt(e,t,134217728,n)}Th(t,134217728)}};by=function(t){if(t.tag===13){var e=Kn(t),n=pn(t,e);if(n!==null){var r=He();Nt(n,t,e,r)}Th(t,e)}};Cy=function(){return Y};Iy=function(t,e){var n=Y;try{return Y=t,e()}finally{Y=n}};Tu=function(t,e,n){switch(e){case"input":if(ku(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=Tl(r);if(!s)throw Error(I(90));sy(r),ku(r,s)}}}break;case"textarea":oy(t,n);break;case"select":e=n.value,e!=null&&ds(t,!!n.multiple,e,!1)}};fy=Sh;py=Ir;var iS={usingClientEntryPoint:!1,Events:[yo,ts,Tl,dy,hy,Sh]},ri={findFiberByHostInstance:pr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},oS={bundleType:ri.bundleType,version:ri.version,rendererPackageName:ri.rendererPackageName,rendererConfig:ri.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:xn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=yy(t),t===null?null:t.stateNode},findFiberByHostInstance:ri.findFiberByHostInstance||rS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yo.isDisabled&&Yo.supportsFiber)try{bl=Yo.inject(oS),zt=Yo}catch{}}ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=iS;ut.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ph(e))throw Error(I(200));return nS(t,e,null,n)};ut.createRoot=function(t,e){if(!Ph(t))throw Error(I(299));var n=!1,r="",s=Qv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=Nh(t,1,!1,null,null,n,!1,r,s),t[fn]=e.current,zi(t.nodeType===8?t.parentNode:t),new Rh(e)};ut.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(I(188)):(t=Object.keys(t).join(","),Error(I(268,t)));return t=yy(e),t=t===null?null:t.stateNode,t};ut.flushSync=function(t){return Ir(t)};ut.hydrate=function(t,e,n){if(!Fl(e))throw Error(I(200));return Ul(null,t,e,!0,n)};ut.hydrateRoot=function(t,e,n){if(!Ph(t))throw Error(I(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=Qv;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=qv(e,null,t,1,n??null,s,!1,i,o),t[fn]=e.current,zi(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new Ll(e)};ut.render=function(t,e,n){if(!Fl(e))throw Error(I(200));return Ul(null,t,e,!1,n)};ut.unmountComponentAtNode=function(t){if(!Fl(t))throw Error(I(40));return t._reactRootContainer?(Ir(function(){Ul(null,null,t,!1,function(){t._reactRootContainer=null,t[fn]=null})}),!0):!1};ut.unstable_batchedUpdates=Sh;ut.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Fl(n))throw Error(I(200));if(t==null||t._reactInternals===void 0)throw Error(I(38));return Ul(t,e,n,!1,r)};ut.version="18.3.1-next-f1338f8080-20240426";function Yv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Yv)}catch(t){console.error(t)}}Yv(),Yg.exports=ut;var aS=Yg.exports,Yp=aS;mu.createRoot=Yp.createRoot,mu.hydrateRoot=Yp.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xi(){return Xi=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Xi.apply(this,arguments)}var Ln;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Ln||(Ln={}));const Xp="popstate";function lS(t){t===void 0&&(t={});function e(r,s){let{pathname:i,search:o,hash:a}=r.location;return ld("",{pathname:i,search:o,hash:a},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(r,s){return typeof s=="string"?s:Jv(s)}return uS(e,n,null,t)}function Se(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Xv(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function cS(){return Math.random().toString(36).substr(2,8)}function Jp(t,e){return{usr:t.state,key:t.key,idx:e}}function ld(t,e,n,r){return n===void 0&&(n=null),Xi({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Ws(e):e,{state:n,key:e&&e.key||r||cS()})}function Jv(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Ws(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function uS(t,e,n,r){r===void 0&&(r={});let{window:s=document.defaultView,v5Compat:i=!1}=r,o=s.history,a=Ln.Pop,l=null,c=d();c==null&&(c=0,o.replaceState(Xi({},o.state,{idx:c}),""));function d(){return(o.state||{idx:null}).idx}function h(){a=Ln.Pop;let k=d(),v=k==null?null:k-c;c=k,l&&l({action:a,location:_.location,delta:v})}function f(k,v){a=Ln.Push;let p=ld(_.location,k,v);c=d()+1;let m=Jp(p,c),w=_.createHref(p);try{o.pushState(m,"",w)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;s.location.assign(w)}i&&l&&l({action:a,location:_.location,delta:1})}function y(k,v){a=Ln.Replace;let p=ld(_.location,k,v);c=d();let m=Jp(p,c),w=_.createHref(p);o.replaceState(m,"",w),i&&l&&l({action:a,location:_.location,delta:0})}function g(k){let v=s.location.origin!=="null"?s.location.origin:s.location.href,p=typeof k=="string"?k:Jv(k);return p=p.replace(/ $/,"%20"),Se(v,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,v)}let _={get action(){return a},get location(){return t(s,o)},listen(k){if(l)throw new Error("A history only accepts one active listener");return s.addEventListener(Xp,h),l=k,()=>{s.removeEventListener(Xp,h),l=null}},createHref(k){return e(s,k)},createURL:g,encodeLocation(k){let v=g(k);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:f,replace:y,go(k){return o.go(k)}};return _}var Zp;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Zp||(Zp={}));function dS(t,e,n){return n===void 0&&(n="/"),hS(t,e,n)}function hS(t,e,n,r){let s=typeof e=="string"?Ws(e):e,i=t0(s.pathname||"/",n);if(i==null)return null;let o=Zv(t);fS(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let c=bS(i);a=kS(o[l],c)}return a}function Zv(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let s=(i,o,a)=>{let l={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};l.relativePath.startsWith("/")&&(Se(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=xr([r,l.relativePath]),d=n.concat(l);i.children&&i.children.length>0&&(Se(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Zv(i.children,e,d,c)),!(i.path==null&&!i.index)&&e.push({path:c,score:wS(c,i.index),routesMeta:d})};return t.forEach((i,o)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))s(i,o);else for(let l of e0(i.path))s(i,o,l)}),e}function e0(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,s=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return s?[i,""]:[i];let o=e0(r.join("/")),a=[];return a.push(...o.map(l=>l===""?i:[i,l].join("/"))),s&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function fS(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:xS(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const pS=/^:[\w-]+$/,mS=3,gS=2,yS=1,vS=10,_S=-2,em=t=>t==="*";function wS(t,e){let n=t.split("/"),r=n.length;return n.some(em)&&(r+=_S),e&&(r+=gS),n.filter(s=>!em(s)).reduce((s,i)=>s+(pS.test(i)?mS:i===""?yS:vS),r)}function xS(t,e){return t.length===e.length&&t.slice(0,-1).every((r,s)=>r===e[s])?t[t.length-1]-e[e.length-1]:0}function kS(t,e,n){let{routesMeta:r}=t,s={},i="/",o=[];for(let a=0;a<r.length;++a){let l=r[a],c=a===r.length-1,d=i==="/"?e:e.slice(i.length)||"/",h=ES({path:l.relativePath,caseSensitive:l.caseSensitive,end:c},d),f=l.route;if(!h)return null;Object.assign(s,h.params),o.push({params:s,pathname:xr([i,h.pathname]),pathnameBase:PS(xr([i,h.pathnameBase])),route:f}),h.pathnameBase!=="/"&&(i=xr([i,h.pathnameBase]))}return o}function ES(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=SS(t.path,t.caseSensitive,t.end),s=e.match(n);if(!s)return null;let i=s[0],o=i.replace(/(.)\/+$/,"$1"),a=s.slice(1);return{params:r.reduce((c,d,h)=>{let{paramName:f,isOptional:y}=d;if(f==="*"){let _=a[h]||"";o=i.slice(0,i.length-_.length).replace(/(.)\/+$/,"$1")}const g=a[h];return y&&!g?c[f]=void 0:c[f]=(g||"").replace(/%2F/g,"/"),c},{}),pathname:i,pathnameBase:o,pattern:t}}function SS(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Xv(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],s="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),s+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?s+="\\/*$":t!==""&&t!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),r]}function bS(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Xv(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function t0(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function CS(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:s=""}=typeof t=="string"?Ws(t):t;return{pathname:n?n.startsWith("/")?n:IS(n,e):e,search:AS(r),hash:OS(s)}}function IS(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(s=>{s===".."?n.length>1&&n.pop():s!=="."&&n.push(s)}),n.length>1?n.join("/"):"/"}function Bc(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function NS(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function TS(t,e){let n=NS(t);return e?n.map((r,s)=>s===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function RS(t,e,n,r){r===void 0&&(r=!1);let s;typeof t=="string"?s=Ws(t):(s=Xi({},t),Se(!s.pathname||!s.pathname.includes("?"),Bc("?","pathname","search",s)),Se(!s.pathname||!s.pathname.includes("#"),Bc("#","pathname","hash",s)),Se(!s.search||!s.search.includes("#"),Bc("#","search","hash",s)));let i=t===""||s.pathname==="",o=i?"/":s.pathname,a;if(o==null)a=n;else{let h=e.length-1;if(!r&&o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),h-=1;s.pathname=f.join("/")}a=h>=0?e[h]:"/"}let l=CS(s,a),c=o&&o!=="/"&&o.endsWith("/"),d=(i||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||d)&&(l.pathname+="/"),l}const xr=t=>t.join("/").replace(/\/\/+/g,"/"),PS=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),AS=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,OS=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function MS(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const n0=["post","put","patch","delete"];new Set(n0);const jS=["get",...n0];new Set(jS);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ji(){return Ji=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ji.apply(this,arguments)}const Ah=x.createContext(null),DS=x.createContext(null),$l=x.createContext(null),Wl=x.createContext(null),zs=x.createContext({outlet:null,matches:[],isDataRoute:!1}),r0=x.createContext(null);function zl(){return x.useContext(Wl)!=null}function s0(){return zl()||Se(!1),x.useContext(Wl).location}function i0(t){x.useContext($l).static||x.useLayoutEffect(t)}function _o(){let{isDataRoute:t}=x.useContext(zs);return t?QS():LS()}function LS(){zl()||Se(!1);let t=x.useContext(Ah),{basename:e,future:n,navigator:r}=x.useContext($l),{matches:s}=x.useContext(zs),{pathname:i}=s0(),o=JSON.stringify(TS(s,n.v7_relativeSplatPath)),a=x.useRef(!1);return i0(()=>{a.current=!0}),x.useCallback(function(c,d){if(d===void 0&&(d={}),!a.current)return;if(typeof c=="number"){r.go(c);return}let h=RS(c,JSON.parse(o),i,d.relative==="path");t==null&&e!=="/"&&(h.pathname=h.pathname==="/"?e:xr([e,h.pathname])),(d.replace?r.replace:r.push)(h,d.state,d)},[e,r,o,i,t])}function FS(t,e){return US(t,e)}function US(t,e,n,r){zl()||Se(!1);let{navigator:s}=x.useContext($l),{matches:i}=x.useContext(zs),o=i[i.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let c=s0(),d;if(e){var h;let k=typeof e=="string"?Ws(e):e;l==="/"||(h=k.pathname)!=null&&h.startsWith(l)||Se(!1),d=k}else d=c;let f=d.pathname||"/",y=f;if(l!=="/"){let k=l.replace(/^\//,"").split("/");y="/"+f.replace(/^\//,"").split("/").slice(k.length).join("/")}let g=dS(t,{pathname:y}),_=VS(g&&g.map(k=>Object.assign({},k,{params:Object.assign({},a,k.params),pathname:xr([l,s.encodeLocation?s.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?l:xr([l,s.encodeLocation?s.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),i,n,r);return e&&_?x.createElement(Wl.Provider,{value:{location:Ji({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Ln.Pop}},_):_}function $S(){let t=qS(),e=MS(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return x.createElement(x.Fragment,null,x.createElement("h2",null,"Unexpected Application Error!"),x.createElement("h3",{style:{fontStyle:"italic"}},e),n?x.createElement("pre",{style:s},n):null,null)}const WS=x.createElement($S,null);class zS extends x.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?x.createElement(zs.Provider,{value:this.props.routeContext},x.createElement(r0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function BS(t){let{routeContext:e,match:n,children:r}=t,s=x.useContext(Ah);return s&&s.static&&s.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=n.route.id),x.createElement(zs.Provider,{value:e},r)}function VS(t,e,n,r){var s;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var i;if(!n)return null;if(n.errors)t=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,a=(s=n)==null?void 0:s.errors;if(a!=null){let d=o.findIndex(h=>h.route.id&&(a==null?void 0:a[h.route.id])!==void 0);d>=0||Se(!1),o=o.slice(0,Math.min(o.length,d+1))}let l=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<o.length;d++){let h=o[d];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(c=d),h.route.id){let{loaderData:f,errors:y}=n,g=h.route.loader&&f[h.route.id]===void 0&&(!y||y[h.route.id]===void 0);if(h.route.lazy||g){l=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((d,h,f)=>{let y,g=!1,_=null,k=null;n&&(y=a&&h.route.id?a[h.route.id]:void 0,_=h.route.errorElement||WS,l&&(c<0&&f===0?(YS("route-fallback"),g=!0,k=null):c===f&&(g=!0,k=h.route.hydrateFallbackElement||null)));let v=e.concat(o.slice(0,f+1)),p=()=>{let m;return y?m=_:g?m=k:h.route.Component?m=x.createElement(h.route.Component,null):h.route.element?m=h.route.element:m=d,x.createElement(BS,{match:h,routeContext:{outlet:d,matches:v,isDataRoute:n!=null},children:m})};return n&&(h.route.ErrorBoundary||h.route.errorElement||f===0)?x.createElement(zS,{location:n.location,revalidation:n.revalidation,component:_,error:y,children:p(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):p()},null)}var o0=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(o0||{}),a0=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(a0||{});function HS(t){let e=x.useContext(Ah);return e||Se(!1),e}function KS(t){let e=x.useContext(DS);return e||Se(!1),e}function GS(t){let e=x.useContext(zs);return e||Se(!1),e}function l0(t){let e=GS(),n=e.matches[e.matches.length-1];return n.route.id||Se(!1),n.route.id}function qS(){var t;let e=x.useContext(r0),n=KS(),r=l0();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function QS(){let{router:t}=HS(o0.UseNavigateStable),e=l0(a0.UseNavigateStable),n=x.useRef(!1);return i0(()=>{n.current=!0}),x.useCallback(function(s,i){i===void 0&&(i={}),n.current&&(typeof s=="number"?t.navigate(s):t.navigate(s,Ji({fromRouteId:e},i)))},[t,e])}const tm={};function YS(t,e,n){tm[t]||(tm[t]=!0)}function XS(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function pi(t){Se(!1)}function JS(t){let{basename:e="/",children:n=null,location:r,navigationType:s=Ln.Pop,navigator:i,static:o=!1,future:a}=t;zl()&&Se(!1);let l=e.replace(/^\/*/,"/"),c=x.useMemo(()=>({basename:l,navigator:i,static:o,future:Ji({v7_relativeSplatPath:!1},a)}),[l,a,i,o]);typeof r=="string"&&(r=Ws(r));let{pathname:d="/",search:h="",hash:f="",state:y=null,key:g="default"}=r,_=x.useMemo(()=>{let k=t0(d,l);return k==null?null:{location:{pathname:k,search:h,hash:f,state:y,key:g},navigationType:s}},[l,d,h,f,y,g,s]);return _==null?null:x.createElement($l.Provider,{value:c},x.createElement(Wl.Provider,{children:n,value:_}))}function ZS(t){let{children:e,location:n}=t;return FS(cd(e),n)}new Promise(()=>{});function cd(t,e){e===void 0&&(e=[]);let n=[];return x.Children.forEach(t,(r,s)=>{if(!x.isValidElement(r))return;let i=[...e,s];if(r.type===x.Fragment){n.push.apply(n,cd(r.props.children,i));return}r.type!==pi&&Se(!1),!r.props.index||!r.props.children||Se(!1);let o={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=cd(r.props.children,i)),n.push(o)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const eb="6";try{window.__reactRouterVersion=eb}catch{}const tb="startTransition",nm=Yx[tb];function nb(t){let{basename:e,children:n,future:r,window:s}=t,i=x.useRef();i.current==null&&(i.current=lS({window:s,v5Compat:!0}));let o=i.current,[a,l]=x.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},d=x.useCallback(h=>{c&&nm?nm(()=>l(h)):l(h)},[l,c]);return x.useLayoutEffect(()=>o.listen(d),[o,d]),x.useEffect(()=>XS(r),[r]),x.createElement(JS,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}var rm;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(rm||(rm={}));var sm;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(sm||(sm={}));let rb={data:""},sb=t=>typeof window=="object"?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||rb,ib=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,ob=/\/\*[^]*?\*\/|  +/g,im=/\n+/g,Tn=(t,e)=>{let n="",r="",s="";for(let i in t){let o=t[i];i[0]=="@"?i[1]=="i"?n=i+" "+o+";":r+=i[1]=="f"?Tn(o,i):i+"{"+Tn(o,i[1]=="k"?"":e)+"}":typeof o=="object"?r+=Tn(o,e?e.replace(/([^,])+/g,a=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,a):a?a+" "+l:l)):i):o!=null&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=Tn.p?Tn.p(i,o):i+":"+o+";")}return n+(e&&s?e+"{"+s+"}":s)+r},Yt={},c0=t=>{if(typeof t=="object"){let e="";for(let n in t)e+=n+c0(t[n]);return e}return t},ab=(t,e,n,r,s)=>{let i=c0(t),o=Yt[i]||(Yt[i]=(l=>{let c=0,d=11;for(;c<l.length;)d=101*d+l.charCodeAt(c++)>>>0;return"go"+d})(i));if(!Yt[o]){let l=i!==t?t:(c=>{let d,h,f=[{}];for(;d=ib.exec(c.replace(ob,""));)d[4]?f.shift():d[3]?(h=d[3].replace(im," ").trim(),f.unshift(f[0][h]=f[0][h]||{})):f[0][d[1]]=d[2].replace(im," ").trim();return f[0]})(t);Yt[o]=Tn(s?{["@keyframes "+o]:l}:l,n?"":"."+o)}let a=n&&Yt.g?Yt.g:null;return n&&(Yt.g=Yt[o]),((l,c,d,h)=>{h?c.data=c.data.replace(h,l):c.data.indexOf(l)===-1&&(c.data=d?l+c.data:c.data+l)})(Yt[o],e,r,a),o},lb=(t,e,n)=>t.reduce((r,s,i)=>{let o=e[i];if(o&&o.call){let a=o(n),l=a&&a.props&&a.props.className||/^go/.test(a)&&a;o=l?"."+l:a&&typeof a=="object"?a.props?"":Tn(a,""):a===!1?"":a}return r+s+(o??"")},"");function Bl(t){let e=this||{},n=t.call?t(e.p):t;return ab(n.unshift?n.raw?lb(n,[].slice.call(arguments,1),e.p):n.reduce((r,s)=>Object.assign(r,s&&s.call?s(e.p):s),{}):n,sb(e.target),e.g,e.o,e.k)}let u0,ud,dd;Bl.bind({g:1});let gn=Bl.bind({k:1});function cb(t,e,n,r){Tn.p=e,u0=t,ud=n,dd=r}function or(t,e){let n=this||{};return function(){let r=arguments;function s(i,o){let a=Object.assign({},i),l=a.className||s.className;n.p=Object.assign({theme:ud&&ud()},a),n.o=/ *go\d+/.test(l),a.className=Bl.apply(n,r)+(l?" "+l:"");let c=t;return t[0]&&(c=a.as||t,delete a.as),dd&&c[0]&&dd(a),u0(c,a)}return s}}var ub=t=>typeof t=="function",Ka=(t,e)=>ub(t)?t(e):t,db=(()=>{let t=0;return()=>(++t).toString()})(),d0=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),hb=20,Oh="default",h0=(t,e)=>{let{toastLimit:n}=t.settings;switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,n)};case 1:return{...t,toasts:t.toasts.map(o=>o.id===e.toast.id?{...o,...e.toast}:o)};case 2:let{toast:r}=e;return h0(t,{type:t.toasts.find(o=>o.id===r.id)?1:0,toast:r});case 3:let{toastId:s}=e;return{...t,toasts:t.toasts.map(o=>o.id===s||s===void 0?{...o,dismissed:!0,visible:!1}:o)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(o=>o.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let i=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(o=>({...o,pauseDuration:o.pauseDuration+i}))}}},ga=[],f0={toasts:[],pausedAt:void 0,settings:{toastLimit:hb}},Ut={},p0=(t,e=Oh)=>{Ut[e]=h0(Ut[e]||f0,t),ga.forEach(([n,r])=>{n===e&&r(Ut[e])})},m0=t=>Object.keys(Ut).forEach(e=>p0(t,e)),fb=t=>Object.keys(Ut).find(e=>Ut[e].toasts.some(n=>n.id===t)),Vl=(t=Oh)=>e=>{p0(e,t)},pb={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},mb=(t={},e=Oh)=>{let[n,r]=x.useState(Ut[e]||f0),s=x.useRef(Ut[e]);x.useEffect(()=>(s.current!==Ut[e]&&r(Ut[e]),ga.push([e,r]),()=>{let o=ga.findIndex(([a])=>a===e);o>-1&&ga.splice(o,1)}),[e]);let i=n.toasts.map(o=>{var a,l,c;return{...t,...t[o.type],...o,removeDelay:o.removeDelay||((a=t[o.type])==null?void 0:a.removeDelay)||(t==null?void 0:t.removeDelay),duration:o.duration||((l=t[o.type])==null?void 0:l.duration)||(t==null?void 0:t.duration)||pb[o.type],style:{...t.style,...(c=t[o.type])==null?void 0:c.style,...o.style}}});return{...n,toasts:i}},gb=(t,e="blank",n)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...n,id:(n==null?void 0:n.id)||db()}),wo=t=>(e,n)=>{let r=gb(e,t,n);return Vl(r.toasterId||fb(r.id))({type:2,toast:r}),r.id},xe=(t,e)=>wo("blank")(t,e);xe.error=wo("error");xe.success=wo("success");xe.loading=wo("loading");xe.custom=wo("custom");xe.dismiss=(t,e)=>{let n={type:3,toastId:t};e?Vl(e)(n):m0(n)};xe.dismissAll=t=>xe.dismiss(void 0,t);xe.remove=(t,e)=>{let n={type:4,toastId:t};e?Vl(e)(n):m0(n)};xe.removeAll=t=>xe.remove(void 0,t);xe.promise=(t,e,n)=>{let r=xe.loading(e.loading,{...n,...n==null?void 0:n.loading});return typeof t=="function"&&(t=t()),t.then(s=>{let i=e.success?Ka(e.success,s):void 0;return i?xe.success(i,{id:r,...n,...n==null?void 0:n.success}):xe.dismiss(r),s}).catch(s=>{let i=e.error?Ka(e.error,s):void 0;i?xe.error(i,{id:r,...n,...n==null?void 0:n.error}):xe.dismiss(r)}),t};var yb=1e3,vb=(t,e="default")=>{let{toasts:n,pausedAt:r}=mb(t,e),s=x.useRef(new Map).current,i=x.useCallback((h,f=yb)=>{if(s.has(h))return;let y=setTimeout(()=>{s.delete(h),o({type:4,toastId:h})},f);s.set(h,y)},[]);x.useEffect(()=>{if(r)return;let h=Date.now(),f=n.map(y=>{if(y.duration===1/0)return;let g=(y.duration||0)+y.pauseDuration-(h-y.createdAt);if(g<0){y.visible&&xe.dismiss(y.id);return}return setTimeout(()=>xe.dismiss(y.id,e),g)});return()=>{f.forEach(y=>y&&clearTimeout(y))}},[n,r,e]);let o=x.useCallback(Vl(e),[e]),a=x.useCallback(()=>{o({type:5,time:Date.now()})},[o]),l=x.useCallback((h,f)=>{o({type:1,toast:{id:h,height:f}})},[o]),c=x.useCallback(()=>{r&&o({type:6,time:Date.now()})},[r,o]),d=x.useCallback((h,f)=>{let{reverseOrder:y=!1,gutter:g=8,defaultPosition:_}=f||{},k=n.filter(m=>(m.position||_)===(h.position||_)&&m.height),v=k.findIndex(m=>m.id===h.id),p=k.filter((m,w)=>w<v&&m.visible).length;return k.filter(m=>m.visible).slice(...y?[p+1]:[0,p]).reduce((m,w)=>m+(w.height||0)+g,0)},[n]);return x.useEffect(()=>{n.forEach(h=>{if(h.dismissed)i(h.id,h.removeDelay);else{let f=s.get(h.id);f&&(clearTimeout(f),s.delete(h.id))}})},[n,i]),{toasts:n,handlers:{updateHeight:l,startPause:a,endPause:c,calculateOffset:d}}},_b=gn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,wb=gn`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,xb=gn`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,kb=or("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${_b} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${wb} 0.15s ease-out forwards;
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
    animation: ${xb} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,Eb=gn`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Sb=or("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${Eb} 1s linear infinite;
`,bb=gn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Cb=gn`
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
}`,Ib=or("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${bb} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Cb} 0.2s ease-out forwards;
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
`,Nb=or("div")`
  position: absolute;
`,Tb=or("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Rb=gn`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Pb=or("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Rb} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Ab=({toast:t})=>{let{icon:e,type:n,iconTheme:r}=t;return e!==void 0?typeof e=="string"?x.createElement(Pb,null,e):e:n==="blank"?null:x.createElement(Tb,null,x.createElement(Sb,{...r}),n!=="loading"&&x.createElement(Nb,null,n==="error"?x.createElement(kb,{...r}):x.createElement(Ib,{...r})))},Ob=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Mb=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,jb="0%{opacity:0;} 100%{opacity:1;}",Db="0%{opacity:1;} 100%{opacity:0;}",Lb=or("div")`
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
`,Fb=or("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Ub=(t,e)=>{let n=t.includes("top")?1:-1,[r,s]=d0()?[jb,Db]:[Ob(n),Mb(n)];return{animation:e?`${gn(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${gn(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},$b=x.memo(({toast:t,position:e,style:n,children:r})=>{let s=t.height?Ub(t.position||e||"top-center",t.visible):{opacity:0},i=x.createElement(Ab,{toast:t}),o=x.createElement(Fb,{...t.ariaProps},Ka(t.message,t));return x.createElement(Lb,{className:t.className,style:{...s,...n,...t.style}},typeof r=="function"?r({icon:i,message:o}):x.createElement(x.Fragment,null,i,o))});cb(x.createElement);var Wb=({id:t,className:e,style:n,onHeightUpdate:r,children:s})=>{let i=x.useCallback(o=>{if(o){let a=()=>{let l=o.getBoundingClientRect().height;r(t,l)};a(),new MutationObserver(a).observe(o,{subtree:!0,childList:!0,characterData:!0})}},[t,r]);return x.createElement("div",{ref:i,className:e,style:n},s)},zb=(t,e)=>{let n=t.includes("top"),r=n?{top:0}:{bottom:0},s=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:d0()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(n?1:-1)}px)`,...r,...s}},Bb=Bl`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Xo=16,Vb=({reverseOrder:t,position:e="top-center",toastOptions:n,gutter:r,children:s,toasterId:i,containerStyle:o,containerClassName:a})=>{let{toasts:l,handlers:c}=vb(n,i);return x.createElement("div",{"data-rht-toaster":i||"",style:{position:"fixed",zIndex:9999,top:Xo,left:Xo,right:Xo,bottom:Xo,pointerEvents:"none",...o},className:a,onMouseEnter:c.startPause,onMouseLeave:c.endPause},l.map(d=>{let h=d.position||e,f=c.calculateOffset(d,{reverseOrder:t,gutter:r,defaultPosition:e}),y=zb(h,f);return x.createElement(Wb,{id:d.id,key:d.id,onHeightUpdate:c.updateHeight,className:d.visible?Bb:"",style:y},d.type==="custom"?Ka(d.message,d):s?s(d):x.createElement($b,{toast:d,position:h}))}))},j=xe;const Hb={},om=t=>{let e;const n=new Set,r=(d,h)=>{const f=typeof d=="function"?d(e):d;if(!Object.is(f,e)){const y=e;e=h??(typeof f!="object"||f===null)?f:Object.assign({},e,f),n.forEach(g=>g(e,y))}},s=()=>e,l={setState:r,getState:s,getInitialState:()=>c,subscribe:d=>(n.add(d),()=>n.delete(d)),destroy:()=>{(Hb?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},c=e=t(r,s,l);return l},Kb=t=>t?om(t):om;var g0={exports:{}},y0={},v0={exports:{}},_0={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ts=x;function Gb(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var qb=typeof Object.is=="function"?Object.is:Gb,Qb=Ts.useState,Yb=Ts.useEffect,Xb=Ts.useLayoutEffect,Jb=Ts.useDebugValue;function Zb(t,e){var n=e(),r=Qb({inst:{value:n,getSnapshot:e}}),s=r[0].inst,i=r[1];return Xb(function(){s.value=n,s.getSnapshot=e,Vc(s)&&i({inst:s})},[t,n,e]),Yb(function(){return Vc(s)&&i({inst:s}),t(function(){Vc(s)&&i({inst:s})})},[t]),Jb(n),n}function Vc(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!qb(t,n)}catch{return!0}}function eC(t,e){return e()}var tC=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?eC:Zb;_0.useSyncExternalStore=Ts.useSyncExternalStore!==void 0?Ts.useSyncExternalStore:tC;v0.exports=_0;var nC=v0.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hl=x,rC=nC;function sC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var iC=typeof Object.is=="function"?Object.is:sC,oC=rC.useSyncExternalStore,aC=Hl.useRef,lC=Hl.useEffect,cC=Hl.useMemo,uC=Hl.useDebugValue;y0.useSyncExternalStoreWithSelector=function(t,e,n,r,s){var i=aC(null);if(i.current===null){var o={hasValue:!1,value:null};i.current=o}else o=i.current;i=cC(function(){function l(y){if(!c){if(c=!0,d=y,y=r(y),s!==void 0&&o.hasValue){var g=o.value;if(s(g,y))return h=g}return h=y}if(g=h,iC(d,y))return g;var _=r(y);return s!==void 0&&s(g,_)?(d=y,g):(d=y,h=_)}var c=!1,d,h,f=n===void 0?null:n;return[function(){return l(e())},f===null?void 0:function(){return l(f())}]},[e,n,r,s]);var a=oC(t,i[0],i[1]);return lC(function(){o.hasValue=!0,o.value=a},[a]),uC(a),a};g0.exports=y0;var dC=g0.exports;const hC=Fg(dC),w0={},{useDebugValue:fC}=Sl,{useSyncExternalStoreWithSelector:pC}=hC;let am=!1;const mC=t=>t;function gC(t,e=mC,n){(w0?"production":void 0)!=="production"&&n&&!am&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),am=!0);const r=pC(t.subscribe,t.getState,t.getServerState||t.getInitialState,e,n);return fC(r),r}const lm=t=>{(w0?"production":void 0)!=="production"&&typeof t!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const e=typeof t=="function"?Kb(t):t,n=(r,s)=>gC(e,r,s);return Object.assign(n,e),n},x0=t=>t?lm(t):lm,De=x0((t,e)=>({user:null,loading:!0,setUser:n=>t({user:n}),setLoading:n=>t({loading:n}),logout:()=>t({user:null}),createAnonymousUser:()=>{const n={uid:`anonymous_${Date.now()}_${Math.random().toString(36).substr(2,9)}`,displayName:"匿名訪客",isAnonymous:!0,isFirstLogin:!1,avatar:null,email:null};return t({user:n}),n},isAnonymousUser:()=>{const{user:n}=e();return(n==null?void 0:n.isAnonymous)===!0}}));var cm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k0={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N=function(t,e){if(!t)throw Bs(e)},Bs=function(t){return new Error("Firebase Database ("+k0.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},yC=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Mh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,d=i>>2,h=(i&3)<<4|a>>4;let f=(a&15)<<2|c>>6,y=c&63;l||(y=64,o||(f=64)),r.push(n[d],n[h],n[f],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(E0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):yC(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||c==null||h==null)throw new vC;const f=i<<2|a>>4;if(r.push(f),c!==64){const y=a<<4&240|c>>2;if(r.push(y),h!==64){const g=c<<6&192|h;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class vC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const S0=function(t){const e=E0(t);return Mh.encodeByteArray(e,!0)},Ga=function(t){return S0(t).replace(/\./g,"")},qa=function(t){try{return Mh.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _C(t){return b0(void 0,t)}function b0(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!wC(n)||(t[n]=b0(t[n],e[n]));return t}function wC(t){return t!=="__proto__"}/**
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
 */function xC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const kC=()=>xC().__FIREBASE_DEFAULTS__,EC=()=>{if(typeof process>"u"||typeof cm>"u")return;const t=cm.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},SC=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&qa(t[1]);return e&&JSON.parse(e)},jh=()=>{try{return kC()||EC()||SC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},C0=t=>{var e,n;return(n=(e=jh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},I0=t=>{const e=C0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},N0=()=>{var t;return(t=jh())===null||t===void 0?void 0:t.config},T0=t=>{var e;return(e=jh())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function R0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ga(JSON.stringify(n)),Ga(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Dh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ge())}function bC(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function CC(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function P0(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function IC(){const t=Ge();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function NC(){return k0.NODE_ADMIN===!0}function A0(){try{return typeof indexedDB=="object"}catch{return!1}}function O0(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function TC(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RC="FirebaseError";class Gt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=RC,Object.setPrototypeOf(this,Gt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Wr.prototype.create)}}class Wr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?PC(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Gt(s,a,r)}}function PC(t,e){return t.replace(AC,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const AC=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zi(t){return JSON.parse(t)}function ke(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M0=function(t){let e={},n={},r={},s="";try{const i=t.split(".");e=Zi(qa(i[0])||""),n=Zi(qa(i[1])||""),s=i[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:s}},OC=function(t){const e=M0(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},MC=function(t){const e=M0(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Nr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Qa(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ya(t,e,n){const r={};for(const s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=e.call(n,t[s],s,t));return r}function Xa(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(um(i)&&um(o)){if(!Xa(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function um(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class jC{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)r[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)r[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const f=r[h-3]^r[h-8]^r[h-14]^r[h-16];r[h]=(f<<1|f>>>31)&4294967295}let s=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,d;for(let h=0;h<80;h++){h<40?h<20?(c=a^i&(o^a),d=1518500249):(c=i^o^a,d=1859775393):h<60?(c=i&o|a&(i|o),d=2400959708):(c=i^o^a,d=3395469782);const f=(s<<5|s>>>27)+c+l+d+r[h]&4294967295;l=a,a=o,o=(i<<30|i>>>2)&4294967295,i=s,s=f}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let s=0;const i=this.buf_;let o=this.inbuf_;for(;s<n;){if(o===0)for(;s<=r;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<n;)if(i[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}else for(;s<n;)if(i[o]=e[s],++o,++s,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let s=0;s<5;s++)for(let i=24;i>=0;i-=8)e[r]=this.chain_[s]>>i&255,++r;return e}}function DC(t,e){const n=new LC(t,e);return n.subscribe.bind(n)}class LC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");FC(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Hc),s.error===void 0&&(s.error=Hc),s.complete===void 0&&(s.complete=Hc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function FC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Hc(){}function Rs(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UC=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);if(s>=55296&&s<=56319){const i=s-55296;r++,N(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;s=65536+(i<<10)+o}s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):s<65536?(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Kl=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function ne(t){return t&&t._delegate?t._delegate:t}class _t{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const hr="[DEFAULT]";/**
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
 */class $C{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new St;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(zC(e))try{this.getOrInitializeService({instanceIdentifier:hr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=hr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=hr){return this.instances.has(e)}getOptions(e=hr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:WC(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=hr){return this.component?this.component.multipleInstances?e:hr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function WC(t){return t===hr?void 0:t}function zC(t){return t.instantiationMode==="EAGER"}/**
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
 */class BC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new $C(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var J;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(J||(J={}));const VC={debug:J.DEBUG,verbose:J.VERBOSE,info:J.INFO,warn:J.WARN,error:J.ERROR,silent:J.SILENT},HC=J.INFO,KC={[J.DEBUG]:"log",[J.VERBOSE]:"log",[J.INFO]:"info",[J.WARN]:"warn",[J.ERROR]:"error"},GC=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=KC[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Lh{constructor(e){this.name=e,this._logLevel=HC,this._logHandler=GC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in J))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?VC[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,J.DEBUG,...e),this._logHandler(this,J.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,J.VERBOSE,...e),this._logHandler(this,J.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,J.INFO,...e),this._logHandler(this,J.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,J.WARN,...e),this._logHandler(this,J.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,J.ERROR,...e),this._logHandler(this,J.ERROR,...e)}}const qC=(t,e)=>e.some(n=>t instanceof n);let dm,hm;function QC(){return dm||(dm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function YC(){return hm||(hm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const j0=new WeakMap,hd=new WeakMap,D0=new WeakMap,Kc=new WeakMap,Fh=new WeakMap;function XC(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(cn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&j0.set(n,t)}).catch(()=>{}),Fh.set(e,t),e}function JC(t){if(hd.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});hd.set(t,e)}let fd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return hd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||D0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return cn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ZC(t){fd=t(fd)}function e1(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Gc(this),e,...n);return D0.set(r,e.sort?e.sort():[e]),cn(r)}:YC().includes(t)?function(...e){return t.apply(Gc(this),e),cn(j0.get(this))}:function(...e){return cn(t.apply(Gc(this),e))}}function t1(t){return typeof t=="function"?e1(t):(t instanceof IDBTransaction&&JC(t),qC(t,QC())?new Proxy(t,fd):t)}function cn(t){if(t instanceof IDBRequest)return XC(t);if(Kc.has(t))return Kc.get(t);const e=t1(t);return e!==t&&(Kc.set(t,e),Fh.set(e,t)),e}const Gc=t=>Fh.get(t);function Gl(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=cn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(cn(o.result),l.oldVersion,l.newVersion,cn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}function qc(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",r=>e(r.oldVersion,r)),cn(n).then(()=>{})}const n1=["get","getKey","getAll","getAllKeys","count"],r1=["put","add","delete","clear"],Qc=new Map;function fm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Qc.get(e))return Qc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=r1.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||n1.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return Qc.set(e,i),i}ZC(t=>({...t,get:(e,n,r)=>fm(e,n)||t.get(e,n,r),has:(e,n)=>!!fm(e,n)||t.has(e,n)}));/**
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
 */class s1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(i1(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function i1(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const pd="@firebase/app",pm="0.10.13";/**
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
 */const yn=new Lh("@firebase/app"),o1="@firebase/app-compat",a1="@firebase/analytics-compat",l1="@firebase/analytics",c1="@firebase/app-check-compat",u1="@firebase/app-check",d1="@firebase/auth",h1="@firebase/auth-compat",f1="@firebase/database",p1="@firebase/data-connect",m1="@firebase/database-compat",g1="@firebase/functions",y1="@firebase/functions-compat",v1="@firebase/installations",_1="@firebase/installations-compat",w1="@firebase/messaging",x1="@firebase/messaging-compat",k1="@firebase/performance",E1="@firebase/performance-compat",S1="@firebase/remote-config",b1="@firebase/remote-config-compat",C1="@firebase/storage",I1="@firebase/storage-compat",N1="@firebase/firestore",T1="@firebase/vertexai-preview",R1="@firebase/firestore-compat",P1="firebase",A1="10.14.1";/**
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
 */const md="[DEFAULT]",O1={[pd]:"fire-core",[o1]:"fire-core-compat",[l1]:"fire-analytics",[a1]:"fire-analytics-compat",[u1]:"fire-app-check",[c1]:"fire-app-check-compat",[d1]:"fire-auth",[h1]:"fire-auth-compat",[f1]:"fire-rtdb",[p1]:"fire-data-connect",[m1]:"fire-rtdb-compat",[g1]:"fire-fn",[y1]:"fire-fn-compat",[v1]:"fire-iid",[_1]:"fire-iid-compat",[w1]:"fire-fcm",[x1]:"fire-fcm-compat",[k1]:"fire-perf",[E1]:"fire-perf-compat",[S1]:"fire-rc",[b1]:"fire-rc-compat",[C1]:"fire-gcs",[I1]:"fire-gcs-compat",[N1]:"fire-fst",[R1]:"fire-fst-compat",[T1]:"fire-vertex","fire-js":"fire-js",[P1]:"fire-js-all"};/**
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
 */const Ja=new Map,M1=new Map,gd=new Map;function mm(t,e){try{t.container.addComponent(e)}catch(n){yn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Pt(t){const e=t.name;if(gd.has(e))return yn.debug(`There were multiple attempts to register component ${e}.`),!1;gd.set(e,t);for(const n of Ja.values())mm(n,t);for(const n of M1.values())mm(n,t);return!0}function zr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function $t(t){return t.settings!==void 0}/**
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
 */const j1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},qn=new Wr("app","Firebase",j1);/**
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
 */class D1{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new _t("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw qn.create("app-deleted",{appName:this._name})}}/**
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
 */const Br=A1;function L0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:md,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw qn.create("bad-app-name",{appName:String(s)});if(n||(n=N0()),!n)throw qn.create("no-options");const i=Ja.get(s);if(i){if(Xa(n,i.options)&&Xa(r,i.config))return i;throw qn.create("duplicate-app",{appName:s})}const o=new BC(s);for(const l of gd.values())o.addComponent(l);const a=new D1(n,r,o);return Ja.set(s,a),a}function ql(t=md){const e=Ja.get(t);if(!e&&t===md&&N0())return L0();if(!e)throw qn.create("no-app",{appName:t});return e}function nt(t,e,n){var r;let s=(r=O1[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),yn.warn(a.join(" "));return}Pt(new _t(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const L1="firebase-heartbeat-database",F1=1,eo="firebase-heartbeat-store";let Yc=null;function F0(){return Yc||(Yc=Gl(L1,F1,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(eo)}catch(n){console.warn(n)}}}}).catch(t=>{throw qn.create("idb-open",{originalErrorMessage:t.message})})),Yc}async function U1(t){try{const n=(await F0()).transaction(eo),r=await n.objectStore(eo).get(U0(t));return await n.done,r}catch(e){if(e instanceof Gt)yn.warn(e.message);else{const n=qn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});yn.warn(n.message)}}}async function gm(t,e){try{const r=(await F0()).transaction(eo,"readwrite");await r.objectStore(eo).put(e,U0(t)),await r.done}catch(n){if(n instanceof Gt)yn.warn(n.message);else{const r=qn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});yn.warn(r.message)}}}function U0(t){return`${t.name}!${t.options.appId}`}/**
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
 */const $1=1024,W1=30*24*60*60*1e3;class z1{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new V1(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ym();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=W1}),this._storage.overwrite(this._heartbeatsCache))}catch(r){yn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ym(),{heartbeatsToSend:r,unsentEntries:s}=B1(this._heartbeatsCache.heartbeats),i=Ga(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return yn.warn(n),""}}}function ym(){return new Date().toISOString().substring(0,10)}function B1(t,e=$1){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),vm(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),vm(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class V1{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return A0()?O0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await U1(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return gm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return gm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function vm(t){return Ga(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function H1(t){Pt(new _t("platform-logger",e=>new s1(e),"PRIVATE")),Pt(new _t("heartbeat",e=>new z1(e),"PRIVATE")),nt(pd,pm,t),nt(pd,pm,"esm2017"),nt("fire-js","")}H1("");var K1="firebase",G1="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */nt(K1,G1,"app");function Uh(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function $0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const q1=$0,W0=new Wr("auth","Firebase",$0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Za=new Lh("@firebase/auth");function Q1(t,...e){Za.logLevel<=J.WARN&&Za.warn(`Auth (${Br}): ${t}`,...e)}function ya(t,...e){Za.logLevel<=J.ERROR&&Za.error(`Auth (${Br}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(t,...e){throw $h(t,...e)}function Vt(t,...e){return $h(t,...e)}function z0(t,e,n){const r=Object.assign(Object.assign({},q1()),{[e]:n});return new Wr("auth","Firebase",r).create(e,{appName:t.name})}function un(t){return z0(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function $h(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return W0.create(t,...e)}function M(t,e,...n){if(!t)throw $h(e,...n)}function nn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ya(e),new Error(e)}function vn(t,e){t||nn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Y1(){return _m()==="http:"||_m()==="https:"}function _m(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Y1()||CC()||"connection"in navigator)?navigator.onLine:!0}function J1(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(e,n){this.shortDelay=e,this.longDelay=n,vn(n>e,"Short delay should be less than long delay!"),this.isMobile=Dh()||P0()}get(){return X1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wh(t,e){vn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;nn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;nn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;nn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eI=new xo(3e4,6e4);function kn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function qt(t,e,n,r,s={}){return V0(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Vs(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:l},i);return bC()||(c.referrerPolicy="no-referrer"),B0.fetch()(H0(t,t.config.apiHost,n,a),c)})}async function V0(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Z1),e);try{const s=new nI(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Jo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Jo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Jo(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Jo(t,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw z0(t,d,c);At(t,d)}}catch(s){if(s instanceof Gt)throw s;At(t,"network-request-failed",{message:String(s)})}}async function ko(t,e,n,r,s={}){const i=await qt(t,e,n,r,s);return"mfaPendingCredential"in i&&At(t,"multi-factor-auth-required",{_serverResponse:i}),i}function H0(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Wh(t.config,s):`${t.config.apiScheme}://${s}`}function tI(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class nI{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Vt(this.auth,"network-request-failed")),eI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Jo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Vt(t,e,r);return s.customData._tokenResponse=n,s}function wm(t){return t!==void 0&&t.enterprise!==void 0}class rI{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return tI(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function sI(t,e){return qt(t,"GET","/v2/recaptchaConfig",kn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iI(t,e){return qt(t,"POST","/v1/accounts:delete",e)}async function K0(t,e){return qt(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ci(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function oI(t,e=!1){const n=ne(t),r=await n.getIdToken(e),s=zh(r);M(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ci(Xc(s.auth_time)),issuedAtTime:Ci(Xc(s.iat)),expirationTime:Ci(Xc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Xc(t){return Number(t)*1e3}function zh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ya("JWT malformed, contained fewer than 3 sections"),null;try{const s=qa(n);return s?JSON.parse(s):(ya("Failed to decode base64 JWT payload"),null)}catch(s){return ya("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function xm(t){const e=zh(t);return M(e,"internal-error"),M(typeof e.exp<"u","internal-error"),M(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ps(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Gt&&aI(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function aI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ci(this.lastLoginAt),this.creationTime=Ci(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function el(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Ps(t,K0(n,{idToken:r}));M(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?G0(i.providerUserInfo):[],a=uI(t.providerData,o),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),d=l?c:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new vd(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,h)}async function cI(t){const e=ne(t);await el(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function uI(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function G0(t){return t.map(e=>{var{providerId:n}=e,r=Uh(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dI(t,e){const n=await V0(t,{},async()=>{const r=Vs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=H0(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",B0.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function hI(t,e){return qt(t,"POST","/v2/accounts:revokeToken",kn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){M(e.idToken,"internal-error"),M(typeof e.idToken<"u","internal-error"),M(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):xm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){M(e.length!==0,"internal-error");const n=xm(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(M(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await dI(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new ys;return r&&(M(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(M(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(M(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ys,this.toJSON())}_performRefresh(){return nn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sn(t,e){M(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class rn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Uh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new lI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new vd(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Ps(this,this.stsTokenManager.getToken(this.auth,e));return M(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return oI(this,e)}reload(){return cI(this)}_assign(e){this!==e&&(M(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new rn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){M(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await el(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if($t(this.auth.app))return Promise.reject(un(this.auth));const e=await this.getIdToken();return await Ps(this,iI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,l,c,d;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(s=n.email)!==null&&s!==void 0?s:void 0,y=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,k=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,v=(c=n.createdAt)!==null&&c!==void 0?c:void 0,p=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:m,emailVerified:w,isAnonymous:S,providerData:E,stsTokenManager:C}=n;M(m&&C,e,"internal-error");const T=ys.fromJSON(this.name,C);M(typeof m=="string",e,"internal-error"),Sn(h,e.name),Sn(f,e.name),M(typeof w=="boolean",e,"internal-error"),M(typeof S=="boolean",e,"internal-error"),Sn(y,e.name),Sn(g,e.name),Sn(_,e.name),Sn(k,e.name),Sn(v,e.name),Sn(p,e.name);const D=new rn({uid:m,auth:e,email:f,emailVerified:w,displayName:h,isAnonymous:S,photoURL:g,phoneNumber:y,tenantId:_,stsTokenManager:T,createdAt:v,lastLoginAt:p});return E&&Array.isArray(E)&&(D.providerData=E.map(A=>Object.assign({},A))),k&&(D._redirectEventId=k),D}static async _fromIdTokenResponse(e,n,r=!1){const s=new ys;s.updateFromServerResponse(n);const i=new rn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await el(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];M(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?G0(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new ys;a.updateFromIdToken(r);const l=new rn({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new vd(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const km=new Map;function sn(t){vn(t instanceof Function,"Expected a class definition");let e=km.get(t);return e?(vn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,km.set(t,e),e)}/**
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
 */class q0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}q0.type="NONE";const Em=q0;/**
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
 */function va(t,e,n){return`firebase:${t}:${e}:${n}`}class vs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=va(this.userKey,s.apiKey,i),this.fullPersistenceKey=va("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?rn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new vs(sn(Em),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||sn(Em);const o=va(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const d=await c._get(o);if(d){const h=rn._fromJSON(e,d);c!==i&&(a=h),i=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new vs(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new vs(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(J0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Q0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(e_(e))return"Blackberry";if(t_(e))return"Webos";if(Y0(e))return"Safari";if((e.includes("chrome/")||X0(e))&&!e.includes("edge/"))return"Chrome";if(Z0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Q0(t=Ge()){return/firefox\//i.test(t)}function Y0(t=Ge()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function X0(t=Ge()){return/crios\//i.test(t)}function J0(t=Ge()){return/iemobile/i.test(t)}function Z0(t=Ge()){return/android/i.test(t)}function e_(t=Ge()){return/blackberry/i.test(t)}function t_(t=Ge()){return/webos/i.test(t)}function Bh(t=Ge()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function fI(t=Ge()){var e;return Bh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function pI(){return IC()&&document.documentMode===10}function n_(t=Ge()){return Bh(t)||Z0(t)||t_(t)||e_(t)||/windows phone/i.test(t)||J0(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r_(t,e=[]){let n;switch(t){case"Browser":n=Sm(Ge());break;case"Worker":n=`${Sm(Ge())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Br}/${r}`}/**
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
 */class mI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function gI(t,e={}){return qt(t,"GET","/v2/passwordPolicy",kn(t,e))}/**
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
 */const yI=6;class vI{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:yI,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _I{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new bm(this),this.idTokenSubscription=new bm(this),this.beforeStateQueue=new mI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=W0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=sn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await vs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await K0(this,{idToken:e}),r=await rn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if($t(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return M(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await el(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=J1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if($t(this.app))return Promise.reject(un(this));const n=e?ne(e):null;return n&&M(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&M(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return $t(this.app)?Promise.reject(un(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return $t(this.app)?Promise.reject(un(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(sn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await gI(this),n=new vI(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Wr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await hI(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&sn(e)||this._popupRedirectResolver;M(n,this,"argument-error"),this.redirectPersistenceManager=await vs.create(this,[sn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(M(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return M(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=r_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Q1(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ar(t){return ne(t)}class bm{constructor(e){this.auth=e,this.observer=null,this.addObserver=DC(n=>this.observer=n)}get next(){return M(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ql={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function wI(t){Ql=t}function s_(t){return Ql.loadJS(t)}function xI(){return Ql.recaptchaEnterpriseScript}function kI(){return Ql.gapiScript}function EI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const SI="recaptcha-enterprise",bI="NO_RECAPTCHA";class CI{constructor(e){this.type=SI,this.auth=ar(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{sI(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new rI(l);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function s(i,o,a){const l=window.grecaptcha;wm(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(c=>{o(c)}).catch(()=>{o(bI)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&wm(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=xI();l.length!==0&&(l+=a),s_(l).then(()=>{s(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Cm(t,e,n,r=!1){const s=new CI(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function tl(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Cm(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Cm(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function II(t,e){const n=zr(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Xa(i,e??{}))return s;At(s,"already-initialized")}return n.initialize({options:e})}function NI(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(sn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function TI(t,e,n){const r=ar(t);M(r._canInitEmulator,r,"emulator-config-failed"),M(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=i_(e),{host:o,port:a}=RI(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),PI()}function i_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function RI(t){const e=i_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Im(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Im(o)}}}function Im(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function PI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return nn("not implemented")}_getIdTokenResponse(e){return nn("not implemented")}_linkToIdToken(e,n){return nn("not implemented")}_getReauthenticationResolver(e){return nn("not implemented")}}async function AI(t,e){return qt(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OI(t,e){return ko(t,"POST","/v1/accounts:signInWithPassword",kn(t,e))}async function MI(t,e){return qt(t,"POST","/v1/accounts:sendOobCode",kn(t,e))}async function jI(t,e){return MI(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DI(t,e){return ko(t,"POST","/v1/accounts:signInWithEmailLink",kn(t,e))}async function LI(t,e){return ko(t,"POST","/v1/accounts:signInWithEmailLink",kn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to extends Vh{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new to(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new to(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return tl(e,n,"signInWithPassword",OI);case"emailLink":return DI(e,{email:this._email,oobCode:this._password});default:At(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return tl(e,r,"signUpPassword",AI);case"emailLink":return LI(e,{idToken:n,email:this._email,oobCode:this._password});default:At(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _s(t,e){return ko(t,"POST","/v1/accounts:signInWithIdp",kn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FI="http://localhost";class Tr extends Vh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Tr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):At("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Uh(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Tr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return _s(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,_s(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,_s(e,n)}buildRequest(){const e={requestUri:FI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Vs(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UI(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function $I(t){const e=mi(gi(t)).link,n=e?mi(gi(e)).deep_link_id:null,r=mi(gi(t)).deep_link_id;return(r?mi(gi(r)).link:null)||r||n||e||t}class Hh{constructor(e){var n,r,s,i,o,a;const l=mi(gi(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,h=UI((s=l.mode)!==null&&s!==void 0?s:null);M(c&&d&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=d,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=$I(e);try{return new Hh(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(){this.providerId=Hs.PROVIDER_ID}static credential(e,n){return to._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Hh.parseLink(n);return M(r,"argument-error"),to._fromEmailAndCode(e,r.code,r.tenantId)}}Hs.PROVIDER_ID="password";Hs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Hs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Eo extends o_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn extends Eo{constructor(){super("facebook.com")}static credential(e){return Tr._fromParams({providerId:Rn.PROVIDER_ID,signInMethod:Rn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Rn.credentialFromTaggedObject(e)}static credentialFromError(e){return Rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Rn.credential(e.oauthAccessToken)}catch{return null}}}Rn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Rn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn extends Eo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Tr._fromParams({providerId:Pn.PROVIDER_ID,signInMethod:Pn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Pn.credentialFromTaggedObject(e)}static credentialFromError(e){return Pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Pn.credential(n,r)}catch{return null}}}Pn.GOOGLE_SIGN_IN_METHOD="google.com";Pn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An extends Eo{constructor(){super("github.com")}static credential(e){return Tr._fromParams({providerId:An.PROVIDER_ID,signInMethod:An.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return An.credentialFromTaggedObject(e)}static credentialFromError(e){return An.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return An.credential(e.oauthAccessToken)}catch{return null}}}An.GITHUB_SIGN_IN_METHOD="github.com";An.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On extends Eo{constructor(){super("twitter.com")}static credential(e,n){return Tr._fromParams({providerId:On.PROVIDER_ID,signInMethod:On.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return On.credentialFromTaggedObject(e)}static credentialFromError(e){return On.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return On.credential(n,r)}catch{return null}}}On.TWITTER_SIGN_IN_METHOD="twitter.com";On.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WI(t,e){return ko(t,"POST","/v1/accounts:signUp",kn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await rn._fromIdTokenResponse(e,r,s),o=Nm(r);return new Rr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Nm(r);return new Rr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Nm(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl extends Gt{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,nl.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new nl(e,n,r,s)}}function a_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?nl._fromErrorAndOperation(t,i,e,r):i})}async function zI(t,e,n=!1){const r=await Ps(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Rr._forOperation(t,"link",r)}/**
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
 */async function BI(t,e,n=!1){const{auth:r}=t;if($t(r.app))return Promise.reject(un(r));const s="reauthenticate";try{const i=await Ps(t,a_(r,s,e,t),n);M(i.idToken,r,"internal-error");const o=zh(i.idToken);M(o,r,"internal-error");const{sub:a}=o;return M(t.uid===a,r,"user-mismatch"),Rr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&At(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function l_(t,e,n=!1){if($t(t.app))return Promise.reject(un(t));const r="signIn",s=await a_(t,r,e),i=await Rr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function VI(t,e){return l_(ar(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function c_(t){const e=ar(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function HI(t,e,n){const r=ar(t);await tl(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",jI)}async function KI(t,e,n){if($t(t.app))return Promise.reject(un(t));const r=ar(t),o=await tl(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",WI).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&c_(t),l}),a=await Rr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function GI(t,e,n){return $t(t.app)?Promise.reject(un(t)):VI(ne(t),Hs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&c_(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qI(t,e){return qt(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QI(t,{displayName:e,photoURL:n}){const r=ne(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Ps(r,qI(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function YI(t,e,n,r){return ne(t).onIdTokenChanged(e,n,r)}function XI(t,e,n){return ne(t).beforeAuthStateChanged(e,n)}function JI(t,e,n,r){return ne(t).onAuthStateChanged(e,n,r)}function ZI(t){return ne(t).signOut()}const rl="__sak";/**
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
 */class u_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(rl,"1"),this.storage.removeItem(rl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eN=1e3,tN=10;class d_ extends u_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=n_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);pI()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,tN):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},eN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}d_.type="LOCAL";const nN=d_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h_ extends u_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}h_.type="SESSION";const f_=h_;/**
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
 */function rN(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Yl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Yl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,i)),l=await rN(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Yl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class sN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const c=Kh("",20);s.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const f=h;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(f.data.response);break;default:clearTimeout(d),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(){return window}function iN(t){Ht().location.href=t}/**
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
 */function p_(){return typeof Ht().WorkerGlobalScope<"u"&&typeof Ht().importScripts=="function"}async function oN(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function aN(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function lN(){return p_()?self:null}/**
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
 */const m_="firebaseLocalStorageDb",cN=1,sl="firebaseLocalStorage",g_="fbase_key";class So{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Xl(t,e){return t.transaction([sl],e?"readwrite":"readonly").objectStore(sl)}function uN(){const t=indexedDB.deleteDatabase(m_);return new So(t).toPromise()}function _d(){const t=indexedDB.open(m_,cN);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(sl,{keyPath:g_})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(sl)?e(r):(r.close(),await uN(),e(await _d()))})})}async function Tm(t,e,n){const r=Xl(t,!0).put({[g_]:e,value:n});return new So(r).toPromise()}async function dN(t,e){const n=Xl(t,!1).get(e),r=await new So(n).toPromise();return r===void 0?null:r.value}function Rm(t,e){const n=Xl(t,!0).delete(e);return new So(n).toPromise()}const hN=800,fN=3;class y_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await _d(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>fN)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return p_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Yl._getInstance(lN()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await oN(),!this.activeServiceWorker)return;this.sender=new sN(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||aN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await _d();return await Tm(e,rl,"1"),await Rm(e,rl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Tm(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>dN(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Rm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Xl(s,!1).getAll();return new So(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),hN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}y_.type="LOCAL";const pN=y_;new xo(3e4,6e4);/**
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
 */function mN(t,e){return e?sn(e):(M(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Gh extends Vh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return _s(e,this._buildIdpRequest())}_linkToIdToken(e,n){return _s(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return _s(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function gN(t){return l_(t.auth,new Gh(t),t.bypassAuthState)}function yN(t){const{auth:e,user:n}=t;return M(n,e,"internal-error"),BI(n,new Gh(t),t.bypassAuthState)}async function vN(t){const{auth:e,user:n}=t;return M(n,e,"internal-error"),zI(n,new Gh(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v_{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return gN;case"linkViaPopup":case"linkViaRedirect":return vN;case"reauthViaPopup":case"reauthViaRedirect":return yN;default:At(this.auth,"internal-error")}}resolve(e){vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _N=new xo(2e3,1e4);class ls extends v_{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ls.currentPopupAction&&ls.currentPopupAction.cancel(),ls.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return M(e,this.auth,"internal-error"),e}async onExecution(){vn(this.filter.length===1,"Popup operations only handle one event");const e=Kh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Vt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Vt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ls.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Vt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,_N.get())};e()}}ls.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wN="pendingRedirect",_a=new Map;class xN extends v_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=_a.get(this.auth._key());if(!e){try{const r=await kN(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}_a.set(this.auth._key(),e)}return this.bypassAuthState||_a.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function kN(t,e){const n=bN(e),r=SN(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function EN(t,e){_a.set(t._key(),e)}function SN(t){return sn(t._redirectPersistence)}function bN(t){return va(wN,t.config.apiKey,t.name)}async function CN(t,e,n=!1){if($t(t.app))return Promise.reject(un(t));const r=ar(t),s=mN(r,e),o=await new xN(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IN=10*60*1e3;class NN{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!TN(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!__(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Vt(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=IN&&this.cachedEventUids.clear(),this.cachedEventUids.has(Pm(e))}saveEventToCache(e){this.cachedEventUids.add(Pm(e)),this.lastProcessedEventTime=Date.now()}}function Pm(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function __({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function TN(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return __(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RN(t,e={}){return qt(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PN=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,AN=/^https?/;async function ON(t){if(t.config.emulator)return;const{authorizedDomains:e}=await RN(t);for(const n of e)try{if(MN(n))return}catch{}At(t,"unauthorized-domain")}function MN(t){const e=yd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!AN.test(n))return!1;if(PN.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const jN=new xo(3e4,6e4);function Am(){const t=Ht().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function DN(t){return new Promise((e,n)=>{var r,s,i;function o(){Am(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Am(),n(Vt(t,"network-request-failed"))},timeout:jN.get()})}if(!((s=(r=Ht().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Ht().gapi)===null||i===void 0)&&i.load)o();else{const a=EI("iframefcb");return Ht()[a]=()=>{gapi.load?o():n(Vt(t,"network-request-failed"))},s_(`${kI()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw wa=null,e})}let wa=null;function LN(t){return wa=wa||DN(t),wa}/**
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
 */const FN=new xo(5e3,15e3),UN="__/auth/iframe",$N="emulator/auth/iframe",WN={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},zN=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function BN(t){const e=t.config;M(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Wh(e,$N):`https://${t.config.authDomain}/${UN}`,r={apiKey:e.apiKey,appName:t.name,v:Br},s=zN.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Vs(r).slice(1)}`}async function VN(t){const e=await LN(t),n=Ht().gapi;return M(n,t,"internal-error"),e.open({where:document.body,url:BN(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:WN,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Vt(t,"network-request-failed"),a=Ht().setTimeout(()=>{i(o)},FN.get());function l(){Ht().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const HN={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},KN=500,GN=600,qN="_blank",QN="http://localhost";class Om{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function YN(t,e,n,r=KN,s=GN){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},HN),{width:r.toString(),height:s.toString(),top:i,left:o}),c=Ge().toLowerCase();n&&(a=X0(c)?qN:n),Q0(c)&&(e=e||QN,l.scrollbars="yes");const d=Object.entries(l).reduce((f,[y,g])=>`${f}${y}=${g},`,"");if(fI(c)&&a!=="_self")return XN(e||"",a),new Om(null);const h=window.open(e||"",a,d);M(h,t,"popup-blocked");try{h.focus()}catch{}return new Om(h)}function XN(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const JN="__/auth/handler",ZN="emulator/auth/handler",eT=encodeURIComponent("fac");async function Mm(t,e,n,r,s,i){M(t.config.authDomain,t,"auth-domain-config-required"),M(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Br,eventId:s};if(e instanceof o_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Qa(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,h]of Object.entries({}))o[d]=h}if(e instanceof Eo){const d=e.getScopes().filter(h=>h!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await t._getAppCheckToken(),c=l?`#${eT}=${encodeURIComponent(l)}`:"";return`${tT(t)}?${Vs(a).slice(1)}${c}`}function tT({config:t}){return t.emulator?Wh(t,ZN):`https://${t.authDomain}/${JN}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jc="webStorageSupport";class nT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=f_,this._completeRedirectFn=CN,this._overrideRedirectResult=EN}async _openPopup(e,n,r,s){var i;vn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Mm(e,n,r,yd(),s);return YN(e,o,Kh())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Mm(e,n,r,yd(),s);return iN(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(vn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await VN(e),r=new NN(e);return n.register("authEvent",s=>(M(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Jc,{type:Jc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Jc];o!==void 0&&n(!!o),At(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ON(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return n_()||Y0()||Bh()}}const rT=nT;var jm="@firebase/auth",Dm="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){M(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iT(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function oT(t){Pt(new _t("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;M(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:r_(t)},c=new _I(r,s,i,l);return NI(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Pt(new _t("auth-internal",e=>{const n=ar(e.getProvider("auth").getImmediate());return(r=>new sT(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),nt(jm,Dm,iT(t)),nt(jm,Dm,"esm2017")}/**
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
 */const aT=5*60,lT=T0("authIdTokenMaxAge")||aT;let Lm=null;const cT=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>lT)return;const s=n==null?void 0:n.token;Lm!==s&&(Lm=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function uT(t=ql()){const e=zr(t,"auth");if(e.isInitialized())return e.getImmediate();const n=II(t,{popupRedirectResolver:rT,persistence:[pN,nN,f_]}),r=T0("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=cT(i.toString());XI(n,o,()=>o(n.currentUser)),YI(n,a=>o(a))}}const s=C0("auth");return s&&TI(n,`http://${s}`),n}function dT(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}wI({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Vt("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",dT().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});oT("Browser");var Fm={};const Um="@firebase/database",$m="1.0.8";/**
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
 */let w_="";function hT(t){w_=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fT{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ke(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Zi(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pT{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Ot(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x_=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new fT(e)}}catch{}return new pT},yr=x_("localStorage"),mT=x_("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ws=new Lh("@firebase/database"),k_=function(){let t=1;return function(){return t++}}(),E_=function(t){const e=UC(t),n=new jC;n.update(e);const r=n.digest();return Mh.encodeByteArray(r)},bo=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=bo.apply(null,r):typeof r=="object"?e+=ke(r):e+=r,e+=" "}return e};let Ii=null,Wm=!0;const gT=function(t,e){N(!0,"Can't turn on custom loggers persistently."),ws.logLevel=J.VERBOSE,Ii=ws.log.bind(ws)},Re=function(...t){if(Wm===!0&&(Wm=!1,Ii===null&&mT.get("logging_enabled")===!0&&gT()),Ii){const e=bo.apply(null,t);Ii(e)}},Co=function(t){return function(...e){Re(t,...e)}},wd=function(...t){const e="FIREBASE INTERNAL ERROR: "+bo(...t);ws.error(e)},_n=function(...t){const e=`FIREBASE FATAL ERROR: ${bo(...t)}`;throw ws.error(e),new Error(e)},Ke=function(...t){const e="FIREBASE WARNING: "+bo(...t);ws.warn(e)},yT=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Ke("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Jl=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},vT=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},As="[MIN_NAME]",Pr="[MAX_NAME]",Vr=function(t,e){if(t===e)return 0;if(t===As||e===Pr)return-1;if(e===As||t===Pr)return 1;{const n=zm(t),r=zm(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},_T=function(t,e){return t===e?0:t<e?-1:1},si=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ke(e))},qh=function(t){if(typeof t!="object"||t===null)return ke(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=ke(e[r]),n+=":",n+=qh(t[e[r]]);return n+="}",n},S_=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let s=0;s<n;s+=e)s+e>n?r.push(t.substring(s,n)):r.push(t.substring(s,s+e));return r};function Ae(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const b_=function(t){N(!Jl(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let s,i,o,a,l;t===0?(i=0,o=0,s=1/t===-1/0?1:0):(s=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),i=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(i=0,o=Math.round(t/Math.pow(2,1-r-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(i%2?1:0),i=Math.floor(i/2);c.push(s?1:0),c.reverse();const d=c.join("");let h="";for(l=0;l<64;l+=8){let f=parseInt(d.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},wT=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},xT=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function kT(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const ET=new RegExp("^-?(0*)\\d{1,10}$"),ST=-2147483648,bT=2147483647,zm=function(t){if(ET.test(t)){const e=Number(t);if(e>=ST&&e<=bT)return e}return null},Ks=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Ke("Exception was thrown by user callback.",n),e},Math.floor(0))}},CT=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ni=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class IT{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Ke(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NT{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Re("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Ke(e)}}class xa{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}xa.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qh="5",C_="v",I_="s",N_="r",T_="f",R_=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,P_="ls",A_="p",xd="ac",O_="websocket",M_="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{constructor(e,n,r,s,i=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=s,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=yr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&yr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function TT(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function D_(t,e,n){N(typeof e=="string","typeof type must == string"),N(typeof n=="object","typeof params must == object");let r;if(e===O_)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===M_)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);TT(t)&&(n.ns=t.namespace);const s=[];return Ae(n,(i,o)=>{s.push(i+"="+o)}),r+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RT{constructor(){this.counters_={}}incrementCounter(e,n=1){Ot(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return _C(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zc={},eu={};function Yh(t){const e=t.toString();return Zc[e]||(Zc[e]=new RT),Zc[e]}function PT(t,e){const n=t.toString();return eu[n]||(eu[n]=e()),eu[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AT{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<r.length;++s)r[s]&&Ks(()=>{this.onMessage_(r[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bm="start",OT="close",MT="pLPCommand",jT="pRTLPCB",L_="id",F_="pw",U_="ser",DT="cb",LT="seg",FT="ts",UT="d",$T="dframe",$_=1870,W_=30,WT=$_-W_,zT=25e3,BT=3e4;class cs{constructor(e,n,r,s,i,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Co(e),this.stats_=Yh(n),this.urlFn=l=>(this.appCheckToken&&(l[xd]=this.appCheckToken),D_(n,M_,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new AT(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(BT)),vT(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Xh((...i)=>{const[o,a,l,c,d]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Bm)this.id=a,this.password=l;else if(o===OT)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Bm]="t",r[U_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[DT]=this.scriptTagHolder.uniqueCallbackIdentifier),r[C_]=Qh,this.transportSessionId&&(r[I_]=this.transportSessionId),this.lastSessionId&&(r[P_]=this.lastSessionId),this.applicationId&&(r[A_]=this.applicationId),this.appCheckToken&&(r[xd]=this.appCheckToken),typeof location<"u"&&location.hostname&&R_.test(location.hostname)&&(r[N_]=T_);const s=this.urlFn(r);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){cs.forceAllow_=!0}static forceDisallow(){cs.forceDisallow_=!0}static isAvailable(){return cs.forceAllow_?!0:!cs.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!wT()&&!xT()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ke(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=S0(n),s=S_(r,WT);for(let i=0;i<s.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[i]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[$T]="t",r[L_]=e,r[F_]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ke(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Xh{constructor(e,n,r,s){this.onDisconnect=r,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=k_(),window[MT+this.uniqueCallbackIdentifier]=e,window[jT+this.uniqueCallbackIdentifier]=n,this.myIFrame=Xh.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Re("frame writing exception"),a.stack&&Re(a.stack),Re(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Re("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[L_]=this.myID,e[F_]=this.myPW,e[U_]=this.currentSerial;let n=this.urlFn(e),r="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+W_+r.length<=$_;){const o=this.pendingSegs.shift();r=r+"&"+LT+s+"="+o.seg+"&"+FT+s+"="+o.ts+"&"+UT+s+"="+o.d,s++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},s=setTimeout(r,Math.floor(zT)),i=()=>{clearTimeout(s),r()};this.addTag(e,i)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const s=r.readyState;(!s||s==="loaded"||s==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Re("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VT=16384,HT=45e3;let il=null;typeof MozWebSocket<"u"?il=MozWebSocket:typeof WebSocket<"u"&&(il=WebSocket);class bt{constructor(e,n,r,s,i,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=s,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Co(this.connId),this.stats_=Yh(n),this.connURL=bt.connectionURL_(n,o,a,s,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,s,i){const o={};return o[C_]=Qh,typeof location<"u"&&location.hostname&&R_.test(location.hostname)&&(o[N_]=T_),n&&(o[I_]=n),r&&(o[P_]=r),s&&(o[xd]=s),i&&(o[A_]=i),D_(e,O_,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,yr.set("previous_websocket_failure",!0);try{let r;NC(),this.mySock=new il(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const s=r.message||r.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){bt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&il!==null&&!bt.forceDisallow_}static previouslyFailed(){return yr.isInMemoryStorage||yr.get("previous_websocket_failure")===!0}markConnectionHealthy(){yr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Zi(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(N(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=ke(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=S_(n,VT);r.length>1&&this.sendString_(String(r.length));for(let s=0;s<r.length;s++)this.sendString_(r[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(HT))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}bt.responsesRequiredToBeHealthy=2;bt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[cs,bt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=bt&&bt.isAvailable();let r=n&&!bt.previouslyFailed();if(e.webSocketOnly&&(n||Ke("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[bt];else{const s=this.transports_=[];for(const i of no.ALL_TRANSPORTS)i&&i.isAvailable()&&s.push(i);no.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}no.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KT=6e4,GT=5e3,qT=10*1024,QT=100*1024,tu="t",Vm="d",YT="s",Hm="r",XT="e",Km="o",Gm="a",qm="n",Qm="p",JT="h";class ZT{constructor(e,n,r,s,i,o,a,l,c,d){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=s,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Co("c:"+this.id+":"),this.transportManager_=new no(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Ni(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>QT?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>qT?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(tu in e){const n=e[tu];n===Gm?this.upgradeIfSecondaryHealthy_():n===Hm?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Km&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=si("t",e),r=si("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Qm,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Gm,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:qm,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=si("t",e),r=si("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=si(tu,e);if(Vm in e){const r=e[Vm];if(n===JT){const s=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(n===qm){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===YT?this.onConnectionShutdown_(r):n===Hm?this.onReset_(r):n===XT?wd("Server Error: "+r):n===Km?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):wd("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Qh!==r&&Ke("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Ni(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(KT))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ni(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(GT))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Qm,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(yr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_{put(e,n,r,s){}merge(e,n,r,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B_{constructor(e){this.allowedEvents_=e,this.listeners_={},N(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let s=0;s<r.length;s++)r[s].callback.apply(r[s].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const s=this.getInitialEvent(e);s&&n.apply(r,s)}off(e,n,r){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let i=0;i<s.length;i++)if(s[i].callback===n&&(!r||r===s[i].context)){s.splice(i,1);return}}validateEventType_(e){N(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol extends B_{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Dh()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ol}getInitialEvent(e){return N(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ym=32,Xm=768;class X{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[r]=this.pieces_[s],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function G(){return new X("")}function U(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Zn(t){return t.pieces_.length-t.pieceNum_}function Z(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new X(t.pieces_,e)}function Jh(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function eR(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function ro(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function V_(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new X(e,0)}function ce(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof X)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let s=0;s<r.length;s++)r[s].length>0&&n.push(r[s])}return new X(n,0)}function $(t){return t.pieceNum_>=t.pieces_.length}function Ve(t,e){const n=U(t),r=U(e);if(n===null)return e;if(n===r)return Ve(Z(t),Z(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function tR(t,e){const n=ro(t,0),r=ro(e,0);for(let s=0;s<n.length&&s<r.length;s++){const i=Vr(n[s],r[s]);if(i!==0)return i}return n.length===r.length?0:n.length<r.length?-1:1}function Zh(t,e){if(Zn(t)!==Zn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function mt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Zn(t)>Zn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class nR{constructor(e,n){this.errorPrefix_=n,this.parts_=ro(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Kl(this.parts_[r]);H_(this)}}function rR(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Kl(e),H_(t)}function sR(t){const e=t.parts_.pop();t.byteLength_-=Kl(e),t.parts_.length>0&&(t.byteLength_-=1)}function H_(t){if(t.byteLength_>Xm)throw new Error(t.errorPrefix_+"has a key path longer than "+Xm+" bytes ("+t.byteLength_+").");if(t.parts_.length>Ym)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Ym+") or object contains a cycle "+fr(t))}function fr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef extends B_{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new ef}getInitialEvent(e){return N(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ii=1e3,iR=60*5*1e3,Jm=30*1e3,oR=1.3,aR=3e4,lR="server_kill",Zm=3;class dn extends z_{constructor(e,n,r,s,i,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=s,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=dn.nextPersistentConnectionId_++,this.log_=Co("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ii,this.maxReconnectDelay_=iR,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");ef.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ol.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const s=++this.requestNumber_,i={r:s,a:e,b:n};this.log_(ke(i)),N(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),r&&(this.requestCBHash_[s]=r)}get(e){this.initConnection_();const n=new St,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),n.promise}listen(e,n,r,s){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),N(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),N(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:n,query:e,tag:r};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),s=n._queryIdentifier;this.log_("Listen on "+r+" for "+s);const i={p:r},o="q";e.tag&&(i.q=n._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const l=a.d,c=a.s;dn.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(r,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Ot(e,"w")){const r=Nr(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const s='".indexOn": "'+n._queryParams.getIndex().toString()+'"',i=n._path.toString();Ke(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||MC(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Jm)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=OC(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,s=>{const i=s.s,o=s.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+s),N(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,s)&&this.connected_&&this.sendUnlisten_(r,s,e._queryObject,n)}sendUnlisten_(e,n,r,s){this.log_("Unlisten on "+e+" for "+n);const i={p:e},o="n";s&&(i.q=r,i.t=s),this.sendRequest(o,i)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,s){const i={p:n,d:r};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,n,r,s){this.putInternal("p",e,n,r,s)}merge(e,n,r,s){this.putInternal("m",e,n,r,s)}putInternal(e,n,r,s,i){this.initConnection_();const o={p:n,d:r};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,i=>{this.log_(n+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(i.s,i.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const i=r.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ke(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):wd("Unrecognized action received from server: "+ke(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){N(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ii,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ii,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>aR&&(this.reconnectDelay_=ii),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*oR)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+dn.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},c=function(h){N(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?Re("getToken() completed but was canceled"):(Re("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,a=new ZT(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,y=>{Ke(y+" ("+this.repoInfo_.toString()+")"),this.interrupt(lR)},i))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&Ke(h),l())}}}interrupt(e){Re("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Re("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Qa(this.interruptReasons_)&&(this.reconnectDelay_=ii,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(i=>qh(i)).join("$"):r="default";const s=this.removeListen_(e,r);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,n){const r=new X(e).toString();let s;if(this.listens.has(r)){const i=this.listens.get(r);s=i.get(n),i.delete(n),i.size===0&&this.listens.delete(r)}else s=void 0;return s}onAuthRevoked_(e,n){Re("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Zm&&(this.reconnectDelay_=Jm,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Re("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Zm&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+w_.replace(/\./g,"-")]=1,Dh()?e["framework.cordova"]=1:P0()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ol.getInstance().currentlyOnline();return Qa(this.interruptReasons_)&&e}}dn.nextPersistentConnectionId_=0;dn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new W(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new W(As,e),s=new W(As,n);return this.compare(r,s)!==0}minPost(){return W.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zo;class K_ extends Zl{static get __EMPTY_NODE(){return Zo}static set __EMPTY_NODE(e){Zo=e}compare(e,n){return Vr(e.name,n.name)}isDefinedOn(e){throw Bs("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return W.MIN}maxPost(){return new W(Pr,Zo)}makePost(e,n){return N(typeof e=="string","KeyIndex indexValue must always be a string."),new W(e,Zo)}toString(){return".key"}}const xs=new K_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(e,n,r,s,i=null){this.isReverse_=s,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Te{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Te.RED,this.left=s??Je.EMPTY_NODE,this.right=i??Je.EMPTY_NODE}copy(e,n,r,s,i){return new Te(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return i<0?s=s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s=s.copy(null,n,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return Je.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,s;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return Je.EMPTY_NODE;s=r.right.min_(),r=r.copy(s.key,s.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Te.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Te.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Te.RED=!0;Te.BLACK=!1;class cR{copy(e,n,r,s,i){return this}insert(e,n,r){return new Te(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Je{constructor(e,n=Je.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new Je(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Te.BLACK,null,null))}remove(e){return new Je(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Te.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,s=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return s?s.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(s=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ea(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new ea(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new ea(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new ea(this.root_,null,this.comparator_,!0,e)}}Je.EMPTY_NODE=new cR;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uR(t,e){return Vr(t.name,e.name)}function tf(t,e){return Vr(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kd;function dR(t){kd=t}const G_=function(t){return typeof t=="number"?"number:"+b_(t):"string:"+t},q_=function(t){if(t.isLeafNode()){const e=t.val();N(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ot(e,".sv"),"Priority must be a string or number.")}else N(t===kd||t.isEmpty(),"priority of unexpected type.");N(t===kd||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eg;class Ie{constructor(e,n=Ie.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,N(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),q_(this.priorityNode_)}static set __childrenNodeConstructor(e){eg=e}static get __childrenNodeConstructor(){return eg}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ie(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ie.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return $(e)?this:U(e)===".priority"?this.priorityNode_:Ie.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ie.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=U(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(N(r!==".priority"||Zn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Ie.__childrenNodeConstructor.EMPTY_NODE.updateChild(Z(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+G_(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=b_(this.value_):e+=this.value_,this.lazyHash_=E_(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ie.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ie.__childrenNodeConstructor?-1:(N(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,s=Ie.VALUE_TYPE_ORDER.indexOf(n),i=Ie.VALUE_TYPE_ORDER.indexOf(r);return N(s>=0,"Unknown leaf type: "+n),N(i>=0,"Unknown leaf type: "+r),s===i?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ie.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Q_,Y_;function hR(t){Q_=t}function fR(t){Y_=t}class pR extends Zl{compare(e,n){const r=e.node.getPriority(),s=n.node.getPriority(),i=r.compareTo(s);return i===0?Vr(e.name,n.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return W.MIN}maxPost(){return new W(Pr,new Ie("[PRIORITY-POST]",Y_))}makePost(e,n){const r=Q_(e);return new W(n,new Ie("[PRIORITY-POST]",r))}toString(){return".priority"}}const oe=new pR;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mR=Math.log(2);class gR{constructor(e){const n=i=>parseInt(Math.log(i)/mR,10),r=i=>parseInt(Array(i+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const s=r(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const al=function(t,e,n,r){t.sort(e);const s=function(l,c){const d=c-l;let h,f;if(d===0)return null;if(d===1)return h=t[l],f=n?n(h):h,new Te(f,h.node,Te.BLACK,null,null);{const y=parseInt(d/2,10)+l,g=s(l,y),_=s(y+1,c);return h=t[y],f=n?n(h):h,new Te(f,h.node,Te.BLACK,g,_)}},i=function(l){let c=null,d=null,h=t.length;const f=function(g,_){const k=h-g,v=h;h-=g;const p=s(k+1,v),m=t[k],w=n?n(m):m;y(new Te(w,m.node,_,null,p))},y=function(g){c?(c.left=g,c=g):(d=g,c=g)};for(let g=0;g<l.count;++g){const _=l.nextBitIsOne(),k=Math.pow(2,l.count-(g+1));_?f(k,Te.BLACK):(f(k,Te.BLACK),f(k,Te.RED))}return d},o=new gR(t.length),a=i(o);return new Je(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nu;const Qr={};class on{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return N(Qr&&oe,"ChildrenNode.ts has not been loaded"),nu=nu||new on({".priority":Qr},{".priority":oe}),nu}get(e){const n=Nr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Je?n:null}hasIndex(e){return Ot(this.indexSet_,e.toString())}addIndex(e,n){N(e!==xs,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let s=!1;const i=n.getIterator(W.Wrap);let o=i.getNext();for(;o;)s=s||e.isDefinedOn(o.node),r.push(o),o=i.getNext();let a;s?a=al(r,e.getCompare()):a=Qr;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const d=Object.assign({},this.indexes_);return d[l]=a,new on(d,c)}addToIndexes(e,n){const r=Ya(this.indexes_,(s,i)=>{const o=Nr(this.indexSet_,i);if(N(o,"Missing index implementation for "+i),s===Qr)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(W.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),al(a,o.getCompare())}else return Qr;else{const a=n.get(e.name);let l=s;return a&&(l=l.remove(new W(e.name,a))),l.insert(e,e.node)}});return new on(r,this.indexSet_)}removeFromIndexes(e,n){const r=Ya(this.indexes_,s=>{if(s===Qr)return s;{const i=n.get(e.name);return i?s.remove(new W(e.name,i)):s}});return new on(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let oi;class O{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&q_(this.priorityNode_),this.children_.isEmpty()&&N(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return oi||(oi=new O(new Je(tf),null,on.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||oi}updatePriority(e){return this.children_.isEmpty()?this:new O(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?oi:n}}getChild(e){const n=U(e);return n===null?this:this.getImmediateChild(n).getChild(Z(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(N(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new W(e,n);let s,i;n.isEmpty()?(s=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(r,this.children_)):(s=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(r,this.children_));const o=s.isEmpty()?oi:this.priorityNode_;return new O(s,o,i)}}updateChild(e,n){const r=U(e);if(r===null)return n;{N(U(e)!==".priority"||Zn(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(r).updateChild(Z(e),n);return this.updateImmediateChild(r,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,s=0,i=!0;if(this.forEachChild(oe,(o,a)=>{n[o]=a.val(e),r++,i&&O.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):i=!1}),!e&&i&&s<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+G_(this.getPriority().val())+":"),this.forEachChild(oe,(n,r)=>{const s=r.hash();s!==""&&(e+=":"+n+":"+s)}),this.lazyHash_=e===""?"":E_(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const s=this.resolveIndex_(r);if(s){const i=s.getPredecessorKey(new W(e,n));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new W(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new W(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(s=>n(s.name,s.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,W.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)<0;)s.getNext(),i=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,W.Wrap);let i=s.peek();for(;i!=null&&n.compare(i,e)>0;)s.getNext(),i=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Io?-1:0}withIndex(e){if(e===xs||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new O(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===xs||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(oe),s=n.getIterator(oe);let i=r.getNext(),o=s.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=r.getNext(),o=s.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===xs?null:this.indexMap_.get(e.toString())}}O.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class yR extends O{constructor(){super(new Je(tf),O.EMPTY_NODE,on.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return O.EMPTY_NODE}isEmpty(){return!1}}const Io=new yR;Object.defineProperties(W,{MIN:{value:new W(As,O.EMPTY_NODE)},MAX:{value:new W(Pr,Io)}});K_.__EMPTY_NODE=O.EMPTY_NODE;Ie.__childrenNodeConstructor=O;dR(Io);fR(Io);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vR=!0;function le(t,e=null){if(t===null)return O.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),N(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ie(n,le(e))}if(!(t instanceof Array)&&vR){const n=[];let r=!1;if(Ae(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=le(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new W(o,l)))}}),n.length===0)return O.EMPTY_NODE;const i=al(n,uR,o=>o.name,tf);if(r){const o=al(n,oe.getCompare());return new O(i,le(e),new on({".priority":o},{".priority":oe}))}else return new O(i,le(e),on.Default)}else{let n=O.EMPTY_NODE;return Ae(t,(r,s)=>{if(Ot(t,r)&&r.substring(0,1)!=="."){const i=le(s);(i.isLeafNode()||!i.isEmpty())&&(n=n.updateImmediateChild(r,i))}}),n.updatePriority(le(e))}}hR(le);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _R extends Zl{constructor(e){super(),this.indexPath_=e,N(!$(e)&&U(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),s=this.extractChild(n.node),i=r.compareTo(s);return i===0?Vr(e.name,n.name):i}makePost(e,n){const r=le(e),s=O.EMPTY_NODE.updateChild(this.indexPath_,r);return new W(n,s)}maxPost(){const e=O.EMPTY_NODE.updateChild(this.indexPath_,Io);return new W(Pr,e)}toString(){return ro(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wR extends Zl{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Vr(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return W.MIN}maxPost(){return W.MAX}makePost(e,n){const r=le(e);return new W(n,r)}toString(){return".value"}}const xR=new wR;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X_(t){return{type:"value",snapshotNode:t}}function Os(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function so(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function io(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function kR(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nf{constructor(e){this.index_=e}updateChild(e,n,r,s,i,o){N(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(s).equals(r.getChild(s))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(so(n,a)):N(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Os(n,r)):o.trackChildChange(io(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(oe,(s,i)=>{n.hasChild(s)||r.trackChildChange(so(s,i))}),n.isLeafNode()||n.forEachChild(oe,(s,i)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(i)||r.trackChildChange(io(s,i,o))}else r.trackChildChange(Os(s,i))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?O.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(e){this.indexedFilter_=new nf(e.getIndex()),this.index_=e.getIndex(),this.startPost_=oo.getStartPost_(e),this.endPost_=oo.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,s,i,o){return this.matches(new W(n,r))||(r=O.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,s,i,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=O.EMPTY_NODE);let s=n.withIndex(this.index_);s=s.updatePriority(O.EMPTY_NODE);const i=this;return n.forEachChild(oe,(o,a)=>{i.matches(new W(o,a))||(s=s.updateImmediateChild(o,O.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ER{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new oo(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,s,i,o){return this.rangedFilter_.matches(new W(n,r))||(r=O.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,s,i,o):this.fullLimitUpdateChild_(e,n,r,i,o)}updateFullNode(e,n,r){let s;if(n.isLeafNode()||n.isEmpty())s=O.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){s=O.EMPTY_NODE.withIndex(this.index_);let i;this.reverse_?i=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):i=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;i.hasNext()&&o<this.limit_;){const a=i.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=n.withIndex(this.index_),s=s.updatePriority(O.EMPTY_NODE);let i;this.reverse_?i=s.getReverseIterator(this.index_):i=s.getIterator(this.index_);let o=0;for(;i.hasNext();){const a=i.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,O.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,s,i){let o;if(this.reverse_){const h=this.index_.getCompare();o=(f,y)=>h(y,f)}else o=this.index_.getCompare();const a=e;N(a.numChildren()===this.limit_,"");const l=new W(n,r),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),d=this.rangedFilter_.matches(l);if(a.hasChild(n)){const h=a.getImmediateChild(n);let f=s.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=s.getChildAfterChild(this.index_,f,this.reverse_);const y=f==null?1:o(f,l);if(d&&!r.isEmpty()&&y>=0)return i!=null&&i.trackChildChange(io(n,r,h)),a.updateImmediateChild(n,r);{i!=null&&i.trackChildChange(so(n,h));const _=a.updateImmediateChild(n,O.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(i!=null&&i.trackChildChange(Os(f.name,f.node)),_.updateImmediateChild(f.name,f.node)):_}}else return r.isEmpty()?e:d&&o(c,l)>=0?(i!=null&&(i.trackChildChange(so(c.name,c.node)),i.trackChildChange(Os(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(c.name,O.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rf{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=oe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return N(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return N(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:As}hasEnd(){return this.endSet_}getIndexEndValue(){return N(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return N(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Pr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return N(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===oe}copy(){const e=new rf;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function SR(t){return t.loadsAllData()?new nf(t.getIndex()):t.hasLimit()?new ER(t):new oo(t)}function tg(t){const e={};if(t.isDefault())return e;let n;if(t.index_===oe?n="$priority":t.index_===xR?n="$value":t.index_===xs?n="$key":(N(t.index_ instanceof _R,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ke(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=ke(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+ke(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=ke(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+ke(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function ng(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==oe&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll extends z_{constructor(e,n,r,s){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=s,this.log_=Co("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(N(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,s){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=ll.getListenId_(e,r),a={};this.listens_[o]=a;const l=tg(e._queryParams);this.restRequest_(i+".json",l,(c,d)=>{let h=d;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(i,h,!1,r),Nr(this.listens_,o)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",s(f,null)}})}unlisten(e,n){const r=ll.getListenId_(e,n);delete this.listens_[r]}get(e){const n=tg(e._queryParams),r=e._path.toString(),s=new St;return this.restRequest_(r+".json",n,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(r,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,i])=>{s&&s.accessToken&&(n.auth=s.accessToken),i&&i.token&&(n.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Vs(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Zi(a.responseText)}catch{Ke("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&Ke("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bR{constructor(){this.rootNode_=O.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cl(){return{value:null,children:new Map}}function Gs(t,e,n){if($(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=U(e);t.children.has(r)||t.children.set(r,cl());const s=t.children.get(r);e=Z(e),Gs(s,e,n)}}function Ed(t,e){if($(e))return t.value=null,t.children.clear(),!0;if(t.value!==null){if(t.value.isLeafNode())return!1;{const n=t.value;return t.value=null,n.forEachChild(oe,(r,s)=>{Gs(t,new X(r),s)}),Ed(t,e)}}else if(t.children.size>0){const n=U(e);return e=Z(e),t.children.has(n)&&Ed(t.children.get(n),e)&&t.children.delete(n),t.children.size===0}else return!0}function Sd(t,e,n){t.value!==null?n(e,t.value):CR(t,(r,s)=>{const i=new X(e.toString()+"/"+r);Sd(s,i,n)})}function CR(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IR{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ae(this.last_,(r,s)=>{n[r]=n[r]-s}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rg=10*1e3,NR=30*1e3,TR=5*60*1e3;class RR{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new IR(e);const r=rg+(NR-rg)*Math.random();Ni(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Ae(e,(s,i)=>{i>0&&Ot(this.statsToReport_,s)&&(n[s]=i,r=!0)}),r&&this.server_.reportStats(n),Ni(this.reportStats_.bind(this),Math.floor(Math.random()*2*TR))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ct;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ct||(Ct={}));function sf(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function of(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function af(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Ct.ACK_USER_WRITE,this.source=sf()}operationForChild(e){if($(this.path)){if(this.affectedTree.value!=null)return N(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new X(e));return new ul(G(),n,this.revert)}}else return N(U(this.path)===e,"operationForChild called for unrelated child."),new ul(Z(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(e,n){this.source=e,this.path=n,this.type=Ct.LISTEN_COMPLETE}operationForChild(e){return $(this.path)?new ao(this.source,G()):new ao(this.source,Z(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Ct.OVERWRITE}operationForChild(e){return $(this.path)?new Ar(this.source,G(),this.snap.getImmediateChild(e)):new Ar(this.source,Z(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Ct.MERGE}operationForChild(e){if($(this.path)){const n=this.children.subtree(new X(e));return n.isEmpty()?null:n.value?new Ar(this.source,G(),n.value):new Ms(this.source,G(),n)}else return N(U(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ms(this.source,Z(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if($(e))return this.isFullyInitialized()&&!this.filtered_;const n=U(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PR{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function AR(t,e,n,r){const s=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(kR(o.childName,o.snapshotNode))}),ai(t,s,"child_removed",e,r,n),ai(t,s,"child_added",e,r,n),ai(t,s,"child_moved",i,r,n),ai(t,s,"child_changed",e,r,n),ai(t,s,"value",e,r,n),s}function ai(t,e,n,r,s,i){const o=r.filter(a=>a.type===n);o.sort((a,l)=>MR(t,a,l)),o.forEach(a=>{const l=OR(t,a,i);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function OR(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function MR(t,e,n){if(e.childName==null||n.childName==null)throw Bs("Should only compare child_ events.");const r=new W(e.childName,e.snapshotNode),s=new W(n.childName,n.snapshotNode);return t.index_.compare(r,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ec(t,e){return{eventCache:t,serverCache:e}}function Ti(t,e,n,r){return ec(new er(e,n,r),t.serverCache)}function J_(t,e,n,r){return ec(t.eventCache,new er(e,n,r))}function dl(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Or(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ru;const jR=()=>(ru||(ru=new Je(_T)),ru);class ee{constructor(e,n=jR()){this.value=e,this.children=n}static fromObject(e){let n=new ee(null);return Ae(e,(r,s)=>{n=n.set(new X(r),s)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:G(),value:this.value};if($(e))return null;{const r=U(e),s=this.children.get(r);if(s!==null){const i=s.findRootMostMatchingPathAndValue(Z(e),n);return i!=null?{path:ce(new X(r),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if($(e))return this;{const n=U(e),r=this.children.get(n);return r!==null?r.subtree(Z(e)):new ee(null)}}set(e,n){if($(e))return new ee(n,this.children);{const r=U(e),i=(this.children.get(r)||new ee(null)).set(Z(e),n),o=this.children.insert(r,i);return new ee(this.value,o)}}remove(e){if($(e))return this.children.isEmpty()?new ee(null):new ee(null,this.children);{const n=U(e),r=this.children.get(n);if(r){const s=r.remove(Z(e));let i;return s.isEmpty()?i=this.children.remove(n):i=this.children.insert(n,s),this.value===null&&i.isEmpty()?new ee(null):new ee(this.value,i)}else return this}}get(e){if($(e))return this.value;{const n=U(e),r=this.children.get(n);return r?r.get(Z(e)):null}}setTree(e,n){if($(e))return n;{const r=U(e),i=(this.children.get(r)||new ee(null)).setTree(Z(e),n);let o;return i.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,i),new ee(this.value,o)}}fold(e){return this.fold_(G(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((s,i)=>{r[s]=i.fold_(ce(e,s),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,G(),n)}findOnPath_(e,n,r){const s=this.value?r(n,this.value):!1;if(s)return s;if($(e))return null;{const i=U(e),o=this.children.get(i);return o?o.findOnPath_(Z(e),ce(n,i),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,G(),n)}foreachOnPath_(e,n,r){if($(e))return this;{this.value&&r(n,this.value);const s=U(e),i=this.children.get(s);return i?i.foreachOnPath_(Z(e),ce(n,s),r):new ee(null)}}foreach(e){this.foreach_(G(),e)}foreach_(e,n){this.children.inorderTraversal((r,s)=>{s.foreach_(ce(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e){this.writeTree_=e}static empty(){return new Tt(new ee(null))}}function Ri(t,e,n){if($(e))return new Tt(new ee(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const s=r.path;let i=r.value;const o=Ve(s,e);return i=i.updateChild(o,n),new Tt(t.writeTree_.set(s,i))}else{const s=new ee(n),i=t.writeTree_.setTree(e,s);return new Tt(i)}}}function bd(t,e,n){let r=t;return Ae(n,(s,i)=>{r=Ri(r,ce(e,s),i)}),r}function sg(t,e){if($(e))return Tt.empty();{const n=t.writeTree_.setTree(e,new ee(null));return new Tt(n)}}function Cd(t,e){return Hr(t,e)!=null}function Hr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ve(n.path,e)):null}function ig(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(oe,(r,s)=>{e.push(new W(r,s))}):t.writeTree_.children.inorderTraversal((r,s)=>{s.value!=null&&e.push(new W(r,s.value))}),e}function Qn(t,e){if($(e))return t;{const n=Hr(t,e);return n!=null?new Tt(new ee(n)):new Tt(t.writeTree_.subtree(e))}}function Id(t){return t.writeTree_.isEmpty()}function js(t,e){return Z_(G(),t.writeTree_,e)}function Z_(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((s,i)=>{s===".priority"?(N(i.value!==null,"Priority writes must always be leaf nodes"),r=i.value):n=Z_(ce(t,s),i,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(ce(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tc(t,e){return rw(e,t)}function DR(t,e,n,r,s){N(r>t.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:s}),s&&(t.visibleWrites=Ri(t.visibleWrites,e,n)),t.lastWriteId=r}function LR(t,e,n,r){N(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=bd(t.visibleWrites,e,n),t.lastWriteId=r}function FR(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function UR(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);N(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let s=r.visible,i=!1,o=t.allWrites.length-1;for(;s&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&$R(a,r.path)?s=!1:mt(r.path,a.path)&&(i=!0)),o--}if(s){if(i)return WR(t),!0;if(r.snap)t.visibleWrites=sg(t.visibleWrites,r.path);else{const a=r.children;Ae(a,l=>{t.visibleWrites=sg(t.visibleWrites,ce(r.path,l))})}return!0}else return!1}function $R(t,e){if(t.snap)return mt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&mt(ce(t.path,n),e))return!0;return!1}function WR(t){t.visibleWrites=ew(t.allWrites,zR,G()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function zR(t){return t.visible}function ew(t,e,n){let r=Tt.empty();for(let s=0;s<t.length;++s){const i=t[s];if(e(i)){const o=i.path;let a;if(i.snap)mt(n,o)?(a=Ve(n,o),r=Ri(r,a,i.snap)):mt(o,n)&&(a=Ve(o,n),r=Ri(r,G(),i.snap.getChild(a)));else if(i.children){if(mt(n,o))a=Ve(n,o),r=bd(r,a,i.children);else if(mt(o,n))if(a=Ve(o,n),$(a))r=bd(r,G(),i.children);else{const l=Nr(i.children,U(a));if(l){const c=l.getChild(Z(a));r=Ri(r,G(),c)}}}else throw Bs("WriteRecord should have .snap or .children")}}return r}function tw(t,e,n,r,s){if(!r&&!s){const i=Hr(t.visibleWrites,e);if(i!=null)return i;{const o=Qn(t.visibleWrites,e);if(Id(o))return n;if(n==null&&!Cd(o,G()))return null;{const a=n||O.EMPTY_NODE;return js(o,a)}}}else{const i=Qn(t.visibleWrites,e);if(!s&&Id(i))return n;if(!s&&n==null&&!Cd(i,G()))return null;{const o=function(c){return(c.visible||s)&&(!r||!~r.indexOf(c.writeId))&&(mt(c.path,e)||mt(e,c.path))},a=ew(t.allWrites,o,e),l=n||O.EMPTY_NODE;return js(a,l)}}}function BR(t,e,n){let r=O.EMPTY_NODE;const s=Hr(t.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(oe,(i,o)=>{r=r.updateImmediateChild(i,o)}),r;if(n){const i=Qn(t.visibleWrites,e);return n.forEachChild(oe,(o,a)=>{const l=js(Qn(i,new X(o)),a);r=r.updateImmediateChild(o,l)}),ig(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const i=Qn(t.visibleWrites,e);return ig(i).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function VR(t,e,n,r,s){N(r||s,"Either existingEventSnap or existingServerSnap must exist");const i=ce(e,n);if(Cd(t.visibleWrites,i))return null;{const o=Qn(t.visibleWrites,i);return Id(o)?s.getChild(n):js(o,s.getChild(n))}}function HR(t,e,n,r){const s=ce(e,n),i=Hr(t.visibleWrites,s);if(i!=null)return i;if(r.isCompleteForChild(n)){const o=Qn(t.visibleWrites,s);return js(o,r.getNode().getImmediateChild(n))}else return null}function KR(t,e){return Hr(t.visibleWrites,e)}function GR(t,e,n,r,s,i,o){let a;const l=Qn(t.visibleWrites,e),c=Hr(l,G());if(c!=null)a=c;else if(n!=null)a=js(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const d=[],h=o.getCompare(),f=i?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let y=f.getNext();for(;y&&d.length<s;)h(y,r)!==0&&d.push(y),y=f.getNext();return d}else return[]}function qR(){return{visibleWrites:Tt.empty(),allWrites:[],lastWriteId:-1}}function hl(t,e,n,r){return tw(t.writeTree,t.treePath,e,n,r)}function lf(t,e){return BR(t.writeTree,t.treePath,e)}function og(t,e,n,r){return VR(t.writeTree,t.treePath,e,n,r)}function fl(t,e){return KR(t.writeTree,ce(t.treePath,e))}function QR(t,e,n,r,s,i){return GR(t.writeTree,t.treePath,e,n,r,s,i)}function cf(t,e,n){return HR(t.writeTree,t.treePath,e,n)}function nw(t,e){return rw(ce(t.treePath,e),t.writeTree)}function rw(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YR{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;N(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),N(r!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(r);if(s){const i=s.type;if(n==="child_added"&&i==="child_removed")this.changeMap.set(r,io(r,e.snapshotNode,s.snapshotNode));else if(n==="child_removed"&&i==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&i==="child_changed")this.changeMap.set(r,so(r,s.oldSnap));else if(n==="child_changed"&&i==="child_added")this.changeMap.set(r,Os(r,e.snapshotNode));else if(n==="child_changed"&&i==="child_changed")this.changeMap.set(r,io(r,e.snapshotNode,s.oldSnap));else throw Bs("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XR{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const sw=new XR;class uf{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new er(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return cf(this.writes_,e,r)}}getChildAfterChild(e,n,r){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Or(this.viewCache_),i=QR(this.writes_,s,n,1,r,e);return i.length===0?null:i[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JR(t){return{filter:t}}function ZR(t,e){N(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),N(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function eP(t,e,n,r,s){const i=new YR;let o,a;if(n.type===Ct.OVERWRITE){const c=n;c.source.fromUser?o=Nd(t,e,c.path,c.snap,r,s,i):(N(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!$(c.path),o=pl(t,e,c.path,c.snap,r,s,a,i))}else if(n.type===Ct.MERGE){const c=n;c.source.fromUser?o=nP(t,e,c.path,c.children,r,s,i):(N(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Td(t,e,c.path,c.children,r,s,a,i))}else if(n.type===Ct.ACK_USER_WRITE){const c=n;c.revert?o=iP(t,e,c.path,r,s,i):o=rP(t,e,c.path,c.affectedTree,r,s,i)}else if(n.type===Ct.LISTEN_COMPLETE)o=sP(t,e,n.path,r,i);else throw Bs("Unknown operation type: "+n.type);const l=i.getChanges();return tP(e,o,l),{viewCache:o,changes:l}}function tP(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const s=r.getNode().isLeafNode()||r.getNode().isEmpty(),i=dl(t);(n.length>0||!t.eventCache.isFullyInitialized()||s&&!r.getNode().equals(i)||!r.getNode().getPriority().equals(i.getPriority()))&&n.push(X_(dl(e)))}}function iw(t,e,n,r,s,i){const o=e.eventCache;if(fl(r,n)!=null)return e;{let a,l;if($(n))if(N(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Or(e),d=c instanceof O?c:O.EMPTY_NODE,h=lf(r,d);a=t.filter.updateFullNode(e.eventCache.getNode(),h,i)}else{const c=hl(r,Or(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,i)}else{const c=U(n);if(c===".priority"){N(Zn(n)===1,"Can't have a priority with additional path components");const d=o.getNode();l=e.serverCache.getNode();const h=og(r,n,d,l);h!=null?a=t.filter.updatePriority(d,h):a=o.getNode()}else{const d=Z(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const f=og(r,n,o.getNode(),l);f!=null?h=o.getNode().getImmediateChild(c).updateChild(d,f):h=o.getNode().getImmediateChild(c)}else h=cf(r,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,d,s,i):a=o.getNode()}}return Ti(e,a,o.isFullyInitialized()||$(n),t.filter.filtersNodes())}}function pl(t,e,n,r,s,i,o,a){const l=e.serverCache;let c;const d=o?t.filter:t.filter.getIndexedFilter();if($(n))c=d.updateFullNode(l.getNode(),r,null);else if(d.filtersNodes()&&!l.isFiltered()){const y=l.getNode().updateChild(n,r);c=d.updateFullNode(l.getNode(),y,null)}else{const y=U(n);if(!l.isCompleteForPath(n)&&Zn(n)>1)return e;const g=Z(n),k=l.getNode().getImmediateChild(y).updateChild(g,r);y===".priority"?c=d.updatePriority(l.getNode(),k):c=d.updateChild(l.getNode(),y,k,g,sw,null)}const h=J_(e,c,l.isFullyInitialized()||$(n),d.filtersNodes()),f=new uf(s,h,i);return iw(t,h,n,s,f,a)}function Nd(t,e,n,r,s,i,o){const a=e.eventCache;let l,c;const d=new uf(s,e,i);if($(n))c=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=Ti(e,c,!0,t.filter.filtersNodes());else{const h=U(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),r),l=Ti(e,c,a.isFullyInitialized(),a.isFiltered());else{const f=Z(n),y=a.getNode().getImmediateChild(h);let g;if($(f))g=r;else{const _=d.getCompleteChild(h);_!=null?Jh(f)===".priority"&&_.getChild(V_(f)).isEmpty()?g=_:g=_.updateChild(f,r):g=O.EMPTY_NODE}if(y.equals(g))l=e;else{const _=t.filter.updateChild(a.getNode(),h,g,f,d,o);l=Ti(e,_,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function ag(t,e){return t.eventCache.isCompleteForChild(e)}function nP(t,e,n,r,s,i,o){let a=e;return r.foreach((l,c)=>{const d=ce(n,l);ag(e,U(d))&&(a=Nd(t,a,d,c,s,i,o))}),r.foreach((l,c)=>{const d=ce(n,l);ag(e,U(d))||(a=Nd(t,a,d,c,s,i,o))}),a}function lg(t,e,n){return n.foreach((r,s)=>{e=e.updateChild(r,s)}),e}function Td(t,e,n,r,s,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;$(n)?c=r:c=new ee(null).setTree(n,r);const d=e.serverCache.getNode();return c.children.inorderTraversal((h,f)=>{if(d.hasChild(h)){const y=e.serverCache.getNode().getImmediateChild(h),g=lg(t,y,f);l=pl(t,l,new X(h),g,s,i,o,a)}}),c.children.inorderTraversal((h,f)=>{const y=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!d.hasChild(h)&&!y){const g=e.serverCache.getNode().getImmediateChild(h),_=lg(t,g,f);l=pl(t,l,new X(h),_,s,i,o,a)}}),l}function rP(t,e,n,r,s,i,o){if(fl(s,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if($(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return pl(t,e,n,l.getNode().getChild(n),s,i,a,o);if($(n)){let c=new ee(null);return l.getNode().forEachChild(xs,(d,h)=>{c=c.set(new X(d),h)}),Td(t,e,n,c,s,i,a,o)}else return e}else{let c=new ee(null);return r.foreach((d,h)=>{const f=ce(n,d);l.isCompleteForPath(f)&&(c=c.set(d,l.getNode().getChild(f)))}),Td(t,e,n,c,s,i,a,o)}}function sP(t,e,n,r,s){const i=e.serverCache,o=J_(e,i.getNode(),i.isFullyInitialized()||$(n),i.isFiltered());return iw(t,o,n,r,sw,s)}function iP(t,e,n,r,s,i){let o;if(fl(r,n)!=null)return e;{const a=new uf(r,e,s),l=e.eventCache.getNode();let c;if($(n)||U(n)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=hl(r,Or(e));else{const h=e.serverCache.getNode();N(h instanceof O,"serverChildren would be complete if leaf node"),d=lf(r,h)}d=d,c=t.filter.updateFullNode(l,d,i)}else{const d=U(n);let h=cf(r,d,e.serverCache);h==null&&e.serverCache.isCompleteForChild(d)&&(h=l.getImmediateChild(d)),h!=null?c=t.filter.updateChild(l,d,h,Z(n),a,i):e.eventCache.getNode().hasChild(d)?c=t.filter.updateChild(l,d,O.EMPTY_NODE,Z(n),a,i):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=hl(r,Or(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,i)))}return o=e.serverCache.isFullyInitialized()||fl(r,G())!=null,Ti(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oP{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,s=new nf(r.getIndex()),i=SR(r);this.processor_=JR(i);const o=n.serverCache,a=n.eventCache,l=s.updateFullNode(O.EMPTY_NODE,o.getNode(),null),c=i.updateFullNode(O.EMPTY_NODE,a.getNode(),null),d=new er(l,o.isFullyInitialized(),s.filtersNodes()),h=new er(c,a.isFullyInitialized(),i.filtersNodes());this.viewCache_=ec(h,d),this.eventGenerator_=new PR(this.query_)}get query(){return this.query_}}function aP(t){return t.viewCache_.serverCache.getNode()}function lP(t){return dl(t.viewCache_)}function cP(t,e){const n=Or(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!$(e)&&!n.getImmediateChild(U(e)).isEmpty())?n.getChild(e):null}function cg(t){return t.eventRegistrations_.length===0}function uP(t,e){t.eventRegistrations_.push(e)}function ug(t,e,n){const r=[];if(n){N(e==null,"A cancel should cancel all event registrations.");const s=t.query._path;t.eventRegistrations_.forEach(i=>{const o=i.createCancelEvent(n,s);o&&r.push(o)})}if(e){let s=[];for(let i=0;i<t.eventRegistrations_.length;++i){const o=t.eventRegistrations_[i];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(t.eventRegistrations_.slice(i+1));break}}t.eventRegistrations_=s}else t.eventRegistrations_=[];return r}function dg(t,e,n,r){e.type===Ct.MERGE&&e.source.queryId!==null&&(N(Or(t.viewCache_),"We should always have a full cache before handling merges"),N(dl(t.viewCache_),"Missing event cache, even though we have a server cache"));const s=t.viewCache_,i=eP(t.processor_,s,e,n,r);return ZR(t.processor_,i.viewCache),N(i.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=i.viewCache,ow(t,i.changes,i.viewCache.eventCache.getNode(),null)}function dP(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(oe,(i,o)=>{r.push(Os(i,o))}),n.isFullyInitialized()&&r.push(X_(n.getNode())),ow(t,r,n.getNode(),e)}function ow(t,e,n,r){const s=r?[r]:t.eventRegistrations_;return AR(t.eventGenerator_,e,n,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ml;class aw{constructor(){this.views=new Map}}function hP(t){N(!ml,"__referenceConstructor has already been defined"),ml=t}function fP(){return N(ml,"Reference.ts has not been loaded"),ml}function pP(t){return t.views.size===0}function df(t,e,n,r){const s=e.source.queryId;if(s!==null){const i=t.views.get(s);return N(i!=null,"SyncTree gave us an op for an invalid query."),dg(i,e,n,r)}else{let i=[];for(const o of t.views.values())i=i.concat(dg(o,e,n,r));return i}}function lw(t,e,n,r,s){const i=e._queryIdentifier,o=t.views.get(i);if(!o){let a=hl(n,s?r:null),l=!1;a?l=!0:r instanceof O?(a=lf(n,r),l=!1):(a=O.EMPTY_NODE,l=!1);const c=ec(new er(a,l,!1),new er(r,s,!1));return new oP(e,c)}return o}function mP(t,e,n,r,s,i){const o=lw(t,e,r,s,i);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),uP(o,n),dP(o,n)}function gP(t,e,n,r){const s=e._queryIdentifier,i=[];let o=[];const a=tr(t);if(s==="default")for(const[l,c]of t.views.entries())o=o.concat(ug(c,n,r)),cg(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||i.push(c.query));else{const l=t.views.get(s);l&&(o=o.concat(ug(l,n,r)),cg(l)&&(t.views.delete(s),l.query._queryParams.loadsAllData()||i.push(l.query)))}return a&&!tr(t)&&i.push(new(fP())(e._repo,e._path)),{removed:i,events:o}}function cw(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Yn(t,e){let n=null;for(const r of t.views.values())n=n||cP(r,e);return n}function uw(t,e){if(e._queryParams.loadsAllData())return nc(t);{const r=e._queryIdentifier;return t.views.get(r)}}function dw(t,e){return uw(t,e)!=null}function tr(t){return nc(t)!=null}function nc(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gl;function yP(t){N(!gl,"__referenceConstructor has already been defined"),gl=t}function vP(){return N(gl,"Reference.ts has not been loaded"),gl}let _P=1;class hg{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ee(null),this.pendingWriteTree_=qR(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function hf(t,e,n,r,s){return DR(t.pendingWriteTree_,e,n,r,s),s?qs(t,new Ar(sf(),e,n)):[]}function wP(t,e,n,r){LR(t.pendingWriteTree_,e,n,r);const s=ee.fromObject(n);return qs(t,new Ms(sf(),e,s))}function Fn(t,e,n=!1){const r=FR(t.pendingWriteTree_,e);if(UR(t.pendingWriteTree_,e)){let i=new ee(null);return r.snap!=null?i=i.set(G(),!0):Ae(r.children,o=>{i=i.set(new X(o),!0)}),qs(t,new ul(r.path,i,n))}else return[]}function No(t,e,n){return qs(t,new Ar(of(),e,n))}function xP(t,e,n){const r=ee.fromObject(n);return qs(t,new Ms(of(),e,r))}function kP(t,e){return qs(t,new ao(of(),e))}function EP(t,e,n){const r=ff(t,n);if(r){const s=pf(r),i=s.path,o=s.queryId,a=Ve(i,e),l=new ao(af(o),a);return mf(t,i,l)}else return[]}function yl(t,e,n,r,s=!1){const i=e._path,o=t.syncPointTree_.get(i);let a=[];if(o&&(e._queryIdentifier==="default"||dw(o,e))){const l=gP(o,e,n,r);pP(o)&&(t.syncPointTree_=t.syncPointTree_.remove(i));const c=l.removed;if(a=l.events,!s){const d=c.findIndex(f=>f._queryParams.loadsAllData())!==-1,h=t.syncPointTree_.findOnPath(i,(f,y)=>tr(y));if(d&&!h){const f=t.syncPointTree_.subtree(i);if(!f.isEmpty()){const y=CP(f);for(let g=0;g<y.length;++g){const _=y[g],k=_.query,v=mw(t,_);t.listenProvider_.startListening(Pi(k),lo(t,k),v.hashFn,v.onComplete)}}}!h&&c.length>0&&!r&&(d?t.listenProvider_.stopListening(Pi(e),null):c.forEach(f=>{const y=t.queryToTagMap.get(sc(f));t.listenProvider_.stopListening(Pi(f),y)}))}IP(t,c)}return a}function hw(t,e,n,r){const s=ff(t,r);if(s!=null){const i=pf(s),o=i.path,a=i.queryId,l=Ve(o,e),c=new Ar(af(a),l,n);return mf(t,o,c)}else return[]}function SP(t,e,n,r){const s=ff(t,r);if(s){const i=pf(s),o=i.path,a=i.queryId,l=Ve(o,e),c=ee.fromObject(n),d=new Ms(af(a),l,c);return mf(t,o,d)}else return[]}function Rd(t,e,n,r=!1){const s=e._path;let i=null,o=!1;t.syncPointTree_.foreachOnPath(s,(f,y)=>{const g=Ve(f,s);i=i||Yn(y,g),o=o||tr(y)});let a=t.syncPointTree_.get(s);a?(o=o||tr(a),i=i||Yn(a,G())):(a=new aw,t.syncPointTree_=t.syncPointTree_.set(s,a));let l;i!=null?l=!0:(l=!1,i=O.EMPTY_NODE,t.syncPointTree_.subtree(s).foreachChild((y,g)=>{const _=Yn(g,G());_&&(i=i.updateImmediateChild(y,_))}));const c=dw(a,e);if(!c&&!e._queryParams.loadsAllData()){const f=sc(e);N(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const y=NP();t.queryToTagMap.set(f,y),t.tagToQueryMap.set(y,f)}const d=tc(t.pendingWriteTree_,s);let h=mP(a,e,n,d,i,l);if(!c&&!o&&!r){const f=uw(a,e);h=h.concat(TP(t,e,f))}return h}function rc(t,e,n){const s=t.pendingWriteTree_,i=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Ve(o,e),c=Yn(a,l);if(c)return c});return tw(s,e,i,n,!0)}function bP(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(c,d)=>{const h=Ve(c,n);r=r||Yn(d,h)});let s=t.syncPointTree_.get(n);s?r=r||Yn(s,G()):(s=new aw,t.syncPointTree_=t.syncPointTree_.set(n,s));const i=r!=null,o=i?new er(r,!0,!1):null,a=tc(t.pendingWriteTree_,e._path),l=lw(s,e,a,i?o.getNode():O.EMPTY_NODE,i);return lP(l)}function qs(t,e){return fw(e,t.syncPointTree_,null,tc(t.pendingWriteTree_,G()))}function fw(t,e,n,r){if($(t.path))return pw(t,e,n,r);{const s=e.get(G());n==null&&s!=null&&(n=Yn(s,G()));let i=[];const o=U(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,d=nw(r,o);i=i.concat(fw(a,l,c,d))}return s&&(i=i.concat(df(s,t,r,n))),i}}function pw(t,e,n,r){const s=e.get(G());n==null&&s!=null&&(n=Yn(s,G()));let i=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=nw(r,o),d=t.operationForChild(o);d&&(i=i.concat(pw(d,a,l,c)))}),s&&(i=i.concat(df(s,t,r,n))),i}function mw(t,e){const n=e.query,r=lo(t,n);return{hashFn:()=>(aP(e)||O.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return r?EP(t,n._path,r):kP(t,n._path);{const i=kT(s,n);return yl(t,n,null,i)}}}}function lo(t,e){const n=sc(e);return t.queryToTagMap.get(n)}function sc(t){return t._path.toString()+"$"+t._queryIdentifier}function ff(t,e){return t.tagToQueryMap.get(e)}function pf(t){const e=t.indexOf("$");return N(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new X(t.substr(0,e))}}function mf(t,e,n){const r=t.syncPointTree_.get(e);N(r,"Missing sync point for query tag that we're tracking");const s=tc(t.pendingWriteTree_,e);return df(r,n,s,null)}function CP(t){return t.fold((e,n,r)=>{if(n&&tr(n))return[nc(n)];{let s=[];return n&&(s=cw(n)),Ae(r,(i,o)=>{s=s.concat(o)}),s}})}function Pi(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(vP())(t._repo,t._path):t}function IP(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const s=sc(r),i=t.queryToTagMap.get(s);t.queryToTagMap.delete(s),t.tagToQueryMap.delete(i)}}}function NP(){return _P++}function TP(t,e,n){const r=e._path,s=lo(t,e),i=mw(t,n),o=t.listenProvider_.startListening(Pi(e),s,i.hashFn,i.onComplete),a=t.syncPointTree_.subtree(r);if(s)N(!tr(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,d,h)=>{if(!$(c)&&d&&tr(d))return[nc(d).query];{let f=[];return d&&(f=f.concat(cw(d).map(y=>y.query))),Ae(h,(y,g)=>{f=f.concat(g)}),f}});for(let c=0;c<l.length;++c){const d=l[c];t.listenProvider_.stopListening(Pi(d),lo(t,d))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new gf(n)}node(){return this.node_}}class yf{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ce(this.path_,e);return new yf(this.syncTree_,n)}node(){return rc(this.syncTree_,this.path_)}}const RP=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},fg=function(t,e,n){if(!t||typeof t!="object")return t;if(N(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return PP(t[".sv"],e,n);if(typeof t[".sv"]=="object")return AP(t[".sv"],e);N(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},PP=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:N(!1,"Unexpected server value: "+t)}},AP=function(t,e,n){t.hasOwnProperty("increment")||N(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&N(!1,"Unexpected increment value: "+r);const s=e.node();if(N(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return r;const o=s.getValue();return typeof o!="number"?r:o+r},gw=function(t,e,n,r){return _f(e,new yf(n,t),r)},vf=function(t,e,n){return _f(t,new gf(e),n)};function _f(t,e,n){const r=t.getPriority().val(),s=fg(r,e.getImmediateChild(".priority"),n);let i;if(t.isLeafNode()){const o=t,a=fg(o.getValue(),e,n);return a!==o.getValue()||s!==o.getPriority().val()?new Ie(a,le(s)):t}else{const o=t;return i=o,s!==o.getPriority().val()&&(i=i.updatePriority(new Ie(s))),o.forEachChild(oe,(a,l)=>{const c=_f(l,e.getImmediateChild(a),n);c!==l&&(i=i.updateImmediateChild(a,c))}),i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function ic(t,e){let n=e instanceof X?e:new X(e),r=t,s=U(n);for(;s!==null;){const i=Nr(r.node.children,s)||{children:{},childCount:0};r=new wf(s,r,i),n=Z(n),s=U(n)}return r}function Kr(t){return t.node.value}function xf(t,e){t.node.value=e,Pd(t)}function yw(t){return t.node.childCount>0}function OP(t){return Kr(t)===void 0&&!yw(t)}function oc(t,e){Ae(t.node.children,(n,r)=>{e(new wf(n,t,r))})}function vw(t,e,n,r){n&&e(t),oc(t,s=>{vw(s,e,!0)})}function MP(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function To(t){return new X(t.parent===null?t.name:To(t.parent)+"/"+t.name)}function Pd(t){t.parent!==null&&jP(t.parent,t.name,t)}function jP(t,e,n){const r=OP(n),s=Ot(t.node.children,e);r&&s?(delete t.node.children[e],t.node.childCount--,Pd(t)):!r&&!s&&(t.node.children[e]=n.node,t.node.childCount++,Pd(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DP=/[\[\].#$\/\u0000-\u001F\u007F]/,LP=/[\[\].#$\u0000-\u001F\u007F]/,su=10*1024*1024,kf=function(t){return typeof t=="string"&&t.length!==0&&!DP.test(t)},_w=function(t){return typeof t=="string"&&t.length!==0&&!LP.test(t)},FP=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),_w(t)},Ef=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Jl(t)||t&&typeof t=="object"&&Ot(t,".sv")},vl=function(t,e,n,r){r&&e===void 0||Ro(Rs(t,"value"),e,n)},Ro=function(t,e,n){const r=n instanceof X?new nR(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+fr(r));if(typeof e=="function")throw new Error(t+"contains a function "+fr(r)+" with contents = "+e.toString());if(Jl(e))throw new Error(t+"contains "+e.toString()+" "+fr(r));if(typeof e=="string"&&e.length>su/3&&Kl(e)>su)throw new Error(t+"contains a string greater than "+su+" utf8 bytes "+fr(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,i=!1;if(Ae(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!kf(o)))throw new Error(t+" contains an invalid key ("+o+") "+fr(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);rR(r,o),Ro(t,a,r),sR(r)}),s&&i)throw new Error(t+' contains ".value" child '+fr(r)+" in addition to actual children.")}},UP=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const i=ro(r);for(let o=0;o<i.length;o++)if(!(i[o]===".priority"&&o===i.length-1)){if(!kf(i[o]))throw new Error(t+"contains an invalid key ("+i[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(tR);let s=null;for(n=0;n<e.length;n++){if(r=e[n],s!==null&&mt(s,r))throw new Error(t+"contains a path "+s.toString()+" that is ancestor of another path "+r.toString());s=r}},ww=function(t,e,n,r){const s=Rs(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(s+" must be an object containing the children to replace.");const i=[];Ae(e,(o,a)=>{const l=new X(o);if(Ro(s,a,ce(n,l)),Jh(l)===".priority"&&!Ef(a))throw new Error(s+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");i.push(l)}),UP(s,i)},$P=function(t,e,n){if(Jl(e))throw new Error(Rs(t,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!Ef(e))throw new Error(Rs(t,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")},xw=function(t,e,n,r){if(!_w(n))throw new Error(Rs(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},WP=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),xw(t,e,n)},Un=function(t,e){if(U(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},zP=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!kf(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!FP(n))throw new Error(Rs(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BP{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ac(t,e){let n=null;for(let r=0;r<e.length;r++){const s=e[r],i=s.getPath();n!==null&&!Zh(i,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:i}),n.events.push(s)}n&&t.eventLists_.push(n)}function kw(t,e,n){ac(t,n),Ew(t,r=>Zh(r,e))}function ct(t,e,n){ac(t,n),Ew(t,r=>mt(r,e)||mt(e,r))}function Ew(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const s=t.eventLists_[r];if(s){const i=s.path;e(i)?(VP(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function VP(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Ii&&Re("event: "+n.toString()),Ks(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HP="repo_interrupt",KP=25;class GP{constructor(e,n,r,s){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new BP,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=cl(),this.transactionQueueTree_=new wf,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function qP(t,e,n){if(t.stats_=Yh(t.repoInfo_),t.forceRestClient_||CT())t.server_=new ll(t.repoInfo_,(r,s,i,o)=>{pg(t,r,s,i,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>mg(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ke(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new dn(t.repoInfo_,e,(r,s,i,o)=>{pg(t,r,s,i,o)},r=>{mg(t,r)},r=>{QP(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=PT(t.repoInfo_,()=>new RR(t.stats_,t.server_)),t.infoData_=new bR,t.infoSyncTree_=new hg({startListening:(r,s,i,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=No(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Sf(t,"connected",!1),t.serverSyncTree_=new hg({startListening:(r,s,i,o)=>(t.server_.listen(r,i,s,(a,l)=>{const c=o(a,l);ct(t.eventQueue_,r._path,c)}),[]),stopListening:(r,s)=>{t.server_.unlisten(r,s)}})}function Sw(t){const n=t.infoData_.getNode(new X(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Po(t){return RP({timestamp:Sw(t)})}function pg(t,e,n,r,s){t.dataUpdateCount++;const i=new X(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(s)if(r){const l=Ya(n,c=>le(c));o=SP(t.serverSyncTree_,i,l,s)}else{const l=le(n);o=hw(t.serverSyncTree_,i,l,s)}else if(r){const l=Ya(n,c=>le(c));o=xP(t.serverSyncTree_,i,l)}else{const l=le(n);o=No(t.serverSyncTree_,i,l)}let a=i;o.length>0&&(a=Ds(t,i)),ct(t.eventQueue_,a,o)}function mg(t,e){Sf(t,"connected",e),e===!1&&ZP(t)}function QP(t,e){Ae(e,(n,r)=>{Sf(t,n,r)})}function Sf(t,e,n){const r=new X("/.info/"+e),s=le(n);t.infoData_.updateSnapshot(r,s);const i=No(t.infoSyncTree_,r,s);ct(t.eventQueue_,r,i)}function lc(t){return t.nextWriteId_++}function YP(t,e,n){const r=bP(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(s=>{const i=le(s).withIndex(e._queryParams.getIndex());Rd(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=No(t.serverSyncTree_,e._path,i);else{const a=lo(t.serverSyncTree_,e);o=hw(t.serverSyncTree_,e._path,i,a)}return ct(t.eventQueue_,e._path,o),yl(t.serverSyncTree_,e,n,null,!0),i},s=>(Qs(t,"get for query "+ke(e)+" failed: "+s),Promise.reject(new Error(s))))}function XP(t,e,n,r,s){Qs(t,"set",{path:e.toString(),value:n,priority:r});const i=Po(t),o=le(n,r),a=rc(t.serverSyncTree_,e),l=vf(o,a,i),c=lc(t),d=hf(t.serverSyncTree_,e,l,c,!0);ac(t.eventQueue_,d),t.server_.put(e.toString(),o.val(!0),(f,y)=>{const g=f==="ok";g||Ke("set at "+e+" failed: "+f);const _=Fn(t.serverSyncTree_,c,!g);ct(t.eventQueue_,e,_),nr(t,s,f,y)});const h=Cf(t,e);Ds(t,h),ct(t.eventQueue_,h,[])}function JP(t,e,n,r){Qs(t,"update",{path:e.toString(),value:n});let s=!0;const i=Po(t),o={};if(Ae(n,(a,l)=>{s=!1,o[a]=gw(ce(e,a),le(l),t.serverSyncTree_,i)}),s)Re("update() called with empty data.  Don't do anything."),nr(t,r,"ok",void 0);else{const a=lc(t),l=wP(t.serverSyncTree_,e,o,a);ac(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,d)=>{const h=c==="ok";h||Ke("update at "+e+" failed: "+c);const f=Fn(t.serverSyncTree_,a,!h),y=f.length>0?Ds(t,e):e;ct(t.eventQueue_,y,f),nr(t,r,c,d)}),Ae(n,c=>{const d=Cf(t,ce(e,c));Ds(t,d)}),ct(t.eventQueue_,e,[])}}function ZP(t){Qs(t,"onDisconnectEvents");const e=Po(t),n=cl();Sd(t.onDisconnect_,G(),(s,i)=>{const o=gw(s,i,t.serverSyncTree_,e);Gs(n,s,o)});let r=[];Sd(n,G(),(s,i)=>{r=r.concat(No(t.serverSyncTree_,s,i));const o=Cf(t,s);Ds(t,o)}),t.onDisconnect_=cl(),ct(t.eventQueue_,G(),r)}function e2(t,e,n){t.server_.onDisconnectCancel(e.toString(),(r,s)=>{r==="ok"&&Ed(t.onDisconnect_,e),nr(t,n,r,s)})}function gg(t,e,n,r){const s=le(n);t.server_.onDisconnectPut(e.toString(),s.val(!0),(i,o)=>{i==="ok"&&Gs(t.onDisconnect_,e,s),nr(t,r,i,o)})}function t2(t,e,n,r,s){const i=le(n,r);t.server_.onDisconnectPut(e.toString(),i.val(!0),(o,a)=>{o==="ok"&&Gs(t.onDisconnect_,e,i),nr(t,s,o,a)})}function n2(t,e,n,r){if(Qa(n)){Re("onDisconnect().update() called with empty data.  Don't do anything."),nr(t,r,"ok",void 0);return}t.server_.onDisconnectMerge(e.toString(),n,(s,i)=>{s==="ok"&&Ae(n,(o,a)=>{const l=le(a);Gs(t.onDisconnect_,ce(e,o),l)}),nr(t,r,s,i)})}function r2(t,e,n){let r;U(e._path)===".info"?r=Rd(t.infoSyncTree_,e,n):r=Rd(t.serverSyncTree_,e,n),kw(t.eventQueue_,e._path,r)}function Ad(t,e,n){let r;U(e._path)===".info"?r=yl(t.infoSyncTree_,e,n):r=yl(t.serverSyncTree_,e,n),kw(t.eventQueue_,e._path,r)}function s2(t){t.persistentConnection_&&t.persistentConnection_.interrupt(HP)}function Qs(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Re(n,...e)}function nr(t,e,n,r){e&&Ks(()=>{if(n==="ok")e(null);else{const s=(n||"error").toUpperCase();let i=s;r&&(i+=": "+r);const o=new Error(i);o.code=s,e(o)}})}function i2(t,e,n,r,s,i){Qs(t,"transaction on "+e);const o={path:e,update:n,onComplete:r,status:null,order:k_(),applyLocally:i,retryCount:0,unwatcher:s,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},a=bf(t,e,void 0);o.currentInputSnapshot=a;const l=o.update(a.val());if(l===void 0)o.unwatcher(),o.currentOutputSnapshotRaw=null,o.currentOutputSnapshotResolved=null,o.onComplete&&o.onComplete(null,!1,o.currentInputSnapshot);else{Ro("transaction failed: Data returned ",l,o.path),o.status=0;const c=ic(t.transactionQueueTree_,e),d=Kr(c)||[];d.push(o),xf(c,d);let h;typeof l=="object"&&l!==null&&Ot(l,".priority")?(h=Nr(l,".priority"),N(Ef(h),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):h=(rc(t.serverSyncTree_,e)||O.EMPTY_NODE).getPriority().val();const f=Po(t),y=le(l,h),g=vf(y,a,f);o.currentOutputSnapshotRaw=y,o.currentOutputSnapshotResolved=g,o.currentWriteId=lc(t);const _=hf(t.serverSyncTree_,e,g,o.currentWriteId,o.applyLocally);ct(t.eventQueue_,e,_),cc(t,t.transactionQueueTree_)}}function bf(t,e,n){return rc(t.serverSyncTree_,e,n)||O.EMPTY_NODE}function cc(t,e=t.transactionQueueTree_){if(e||uc(t,e),Kr(e)){const n=Cw(t,e);N(n.length>0,"Sending zero length transaction queue"),n.every(s=>s.status===0)&&o2(t,To(e),n)}else yw(e)&&oc(e,n=>{cc(t,n)})}function o2(t,e,n){const r=n.map(c=>c.currentWriteId),s=bf(t,e,r);let i=s;const o=s.hash();for(let c=0;c<n.length;c++){const d=n[c];N(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const h=Ve(e,d.path);i=i.updateChild(h,d.currentOutputSnapshotRaw)}const a=i.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Qs(t,"transaction put response",{path:l.toString(),status:c});let d=[];if(c==="ok"){const h=[];for(let f=0;f<n.length;f++)n[f].status=2,d=d.concat(Fn(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&h.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();uc(t,ic(t.transactionQueueTree_,e)),cc(t,t.transactionQueueTree_),ct(t.eventQueue_,e,d);for(let f=0;f<h.length;f++)Ks(h[f])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{Ke("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}Ds(t,e)}},o)}function Ds(t,e){const n=bw(t,e),r=To(n),s=Cw(t,n);return a2(t,s,r),r}function a2(t,e,n){if(e.length===0)return;const r=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Ve(n,l.path);let d=!1,h;if(N(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)d=!0,h=l.abortReason,s=s.concat(Fn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=KP)d=!0,h="maxretry",s=s.concat(Fn(t.serverSyncTree_,l.currentWriteId,!0));else{const f=bf(t,l.path,o);l.currentInputSnapshot=f;const y=e[a].update(f.val());if(y!==void 0){Ro("transaction failed: Data returned ",y,l.path);let g=le(y);typeof y=="object"&&y!=null&&Ot(y,".priority")||(g=g.updatePriority(f.getPriority()));const k=l.currentWriteId,v=Po(t),p=vf(g,f,v);l.currentOutputSnapshotRaw=g,l.currentOutputSnapshotResolved=p,l.currentWriteId=lc(t),o.splice(o.indexOf(k),1),s=s.concat(hf(t.serverSyncTree_,l.path,p,l.currentWriteId,l.applyLocally)),s=s.concat(Fn(t.serverSyncTree_,k,!0))}else d=!0,h="nodata",s=s.concat(Fn(t.serverSyncTree_,l.currentWriteId,!0))}ct(t.eventQueue_,n,s),s=[],d&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(h),!1,null))))}uc(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Ks(r[a]);cc(t,t.transactionQueueTree_)}function bw(t,e){let n,r=t.transactionQueueTree_;for(n=U(e);n!==null&&Kr(r)===void 0;)r=ic(r,n),e=Z(e),n=U(e);return r}function Cw(t,e){const n=[];return Iw(t,e,n),n.sort((r,s)=>r.order-s.order),n}function Iw(t,e,n){const r=Kr(e);if(r)for(let s=0;s<r.length;s++)n.push(r[s]);oc(e,s=>{Iw(t,s,n)})}function uc(t,e){const n=Kr(e);if(n){let r=0;for(let s=0;s<n.length;s++)n[s].status!==2&&(n[r]=n[s],r++);n.length=r,xf(e,n.length>0?n:void 0)}oc(e,r=>{uc(t,r)})}function Cf(t,e){const n=To(bw(t,e)),r=ic(t.transactionQueueTree_,e);return MP(r,s=>{iu(t,s)}),iu(t,r),vw(r,s=>{iu(t,s)}),n}function iu(t,e){const n=Kr(e);if(n){const r=[];let s=[],i=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(N(i===o-1,"All SENT items should be at beginning of queue."),i=o,n[o].status=3,n[o].abortReason="set"):(N(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),s=s.concat(Fn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?xf(e,void 0):n.length=i+1,ct(t.eventQueue_,To(e),s);for(let o=0;o<r.length;o++)Ks(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l2(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let s=n[r];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function c2(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Ke(`Invalid query segment '${n}' in query '${t}'`)}return e}const yg=function(t,e){const n=u2(t),r=n.namespace;n.domain==="firebase.com"&&_n(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&_n("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||yT();const s=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new j_(n.host,n.secure,r,s,e,"",r!==n.subdomain),path:new X(n.pathString)}},u2=function(t){let e="",n="",r="",s="",i="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let d=t.indexOf("/");d===-1&&(d=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(d,h)),d<h&&(s=l2(t.substring(d,h)));const f=c2(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const y=e.slice(0,c);if(y.toLowerCase()==="localhost")n="localhost";else if(y.split(".").length<=2)n=y;else{const g=e.indexOf(".");r=e.substring(0,g).toLowerCase(),n=e.substring(g+1),i=r}"ns"in f&&(i=f.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:s,namespace:i}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vg="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",d2=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let s;const i=new Array(8);for(s=7;s>=0;s--)i[s]=vg.charAt(n%64),n=Math.floor(n/64);N(n===0,"Cannot push at time == 0");let o=i.join("");if(r){for(s=11;s>=0&&e[s]===63;s--)e[s]=0;e[s]++}else for(s=0;s<12;s++)e[s]=Math.floor(Math.random()*64);for(s=0;s<12;s++)o+=vg.charAt(e[s]);return N(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h2{constructor(e,n,r,s){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ke(this.snapshot.exportVal())}}class f2{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nw{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return N(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class p2{constructor(e,n){this._repo=e,this._path=n}cancel(){const e=new St;return e2(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){Un("OnDisconnect.remove",this._path);const e=new St;return gg(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){Un("OnDisconnect.set",this._path),vl("OnDisconnect.set",e,this._path,!1);const n=new St;return gg(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}setWithPriority(e,n){Un("OnDisconnect.setWithPriority",this._path),vl("OnDisconnect.setWithPriority",e,this._path,!1),$P("OnDisconnect.setWithPriority",n);const r=new St;return t2(this._repo,this._path,e,n,r.wrapCallback(()=>{})),r.promise}update(e){Un("OnDisconnect.update",this._path),ww("OnDisconnect.update",e,this._path);const n=new St;return n2(this._repo,this._path,e,n.wrapCallback(()=>{})),n.promise}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(e,n,r,s){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=s}get key(){return $(this._path)?null:Jh(this._path)}get ref(){return new Qt(this._repo,this._path)}get _queryIdentifier(){const e=ng(this._queryParams),n=qh(e);return n==="{}"?"default":n}get _queryObject(){return ng(this._queryParams)}isEqual(e){if(e=ne(e),!(e instanceof If))return!1;const n=this._repo===e._repo,r=Zh(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return n&&r&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+eR(this._path)}}class Qt extends If{constructor(e,n){super(e,n,new rf,!1)}get parent(){const e=V_(this._path);return e===null?null:new Qt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ls{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new X(e),r=co(this.ref,e);return new Ls(this._node.getChild(n),r,oe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,s)=>e(new Ls(s,co(this.ref,r),oe)))}hasChild(e){const n=new X(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function q(t,e){return t=ne(t),t._checkNotDeleted("ref"),e!==void 0?co(t._root,e):t._root}function co(t,e){return t=ne(t),U(t._path)===null?WP("child","path",e):xw("child","path",e),new Qt(t._repo,ce(t._path,e))}function ou(t){return t=ne(t),new p2(t._repo,t._path)}function Tw(t,e){t=ne(t),Un("push",t._path),vl("push",e,t._path,!0);const n=Sw(t._repo),r=d2(n),s=co(t,r),i=co(t,r);let o;return e!=null?o=Gr(i,e).then(()=>i):o=Promise.resolve(i),s.then=o.then.bind(o),s.catch=o.then.bind(o,void 0),s}function dc(t){return Un("remove",t._path),Gr(t,null)}function Gr(t,e){t=ne(t),Un("set",t._path),vl("set",e,t._path,!1);const n=new St;return XP(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function m2(t,e){ww("update",e,t._path);const n=new St;return JP(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function Kt(t){t=ne(t);const e=new Nw(()=>{}),n=new hc(e);return YP(t._repo,t,n).then(r=>new Ls(r,new Qt(t._repo,t._path),t._queryParams.getIndex()))}class hc{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new h2("value",this,new Ls(e.snapshotNode,new Qt(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new f2(this,e,n):null}matches(e){return e instanceof hc?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function g2(t,e,n,r,s){let i;if(typeof r=="object"&&(i=void 0,s=r),typeof r=="function"&&(i=r),s&&s.onlyOnce){const l=n,c=(d,h)=>{Ad(t._repo,t,a),l(d,h)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new Nw(n,i||void 0),a=new hc(o);return r2(t._repo,t,a),()=>Ad(t._repo,t,a)}function Mr(t,e,n,r){return g2(t,"value",e,n,r)}function Rw(t,e,n){Ad(t._repo,t,null)}hP(Qt);yP(Qt);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y2="FIREBASE_DATABASE_EMULATOR_HOST",Od={};let v2=!1;function _2(t,e,n,r){t.repoInfo_=new j_(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function w2(t,e,n,r,s){let i=r||t.options.databaseURL;i===void 0&&(t.options.projectId||_n("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Re("Using default host for project ",t.options.projectId),i=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=yg(i,s),a=o.repoInfo,l;typeof process<"u"&&Fm&&(l=Fm[y2]),l?(i=`http://${l}?ns=${a.namespace}`,o=yg(i,s),a=o.repoInfo):o.repoInfo.secure;const c=new NT(t.name,t.options,e);zP("Invalid Firebase Database URL",o),$(o.path)||_n("Database URL must point to the root of a Firebase Database (not including a child path).");const d=k2(a,t,c,new IT(t.name,n));return new E2(d,t)}function x2(t,e){const n=Od[e];(!n||n[t.key]!==t)&&_n(`Database ${e}(${t.repoInfo_}) has already been deleted.`),s2(t),delete n[t.key]}function k2(t,e,n,r){let s=Od[e.name];s||(s={},Od[e.name]=s);let i=s[t.toURLString()];return i&&_n("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new GP(t,v2,n,r),s[t.toURLString()]=i,i}class E2{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(qP(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Qt(this._repo,G())),this._rootInternal}_delete(){return this._rootInternal!==null&&(x2(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&_n("Cannot call "+e+" on a deleted database.")}}function S2(t=ql(),e){const n=zr(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=I0("database");r&&b2(n,...r)}return n}function b2(t,e,n,r={}){t=ne(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&_n("Cannot call useEmulator() after instance has already been initialized.");const s=t._repoInternal;let i;if(s.repoInfo_.nodeAdmin)r.mockUserToken&&_n('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),i=new xa(xa.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:R0(r.mockUserToken,t.app.options.projectId);i=new xa(o)}_2(s,e,n,i)}/**
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
 */function C2(t){hT(Br),Pt(new _t("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return w2(r,s,i,n)},"PUBLIC").setMultipleInstances(!0)),nt(Um,$m,t),nt(Um,$m,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I2={".sv":"timestamp"};function _g(){return I2}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N2{constructor(e,n){this.committed=e,this.snapshot=n}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}}function T2(t,e,n){var r;if(t=ne(t),Un("Reference.transaction",t._path),t.key===".length"||t.key===".keys")throw"Reference.transaction failed: "+t.key+" is a read-only object.";const s=(r=void 0)!==null&&r!==void 0?r:!0,i=new St,o=(l,c,d)=>{let h=null;l?i.reject(l):(h=new Ls(d,new Qt(t._repo,t._path),oe),i.resolve(new N2(c,h)))},a=Mr(t,()=>{});return i2(t._repo,t._path,e,o,a,s),i.promise}dn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};dn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};C2();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pw="firebasestorage.googleapis.com",Aw="storageBucket",R2=2*60*1e3,P2=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe extends Gt{constructor(e,n,r=0){super(au(e),`Firebase Storage: ${n} (${au(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,pe.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return au(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var fe;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(fe||(fe={}));function au(t){return"storage/"+t}function Nf(){const t="An unknown error occurred, please check the error payload for server response.";return new pe(fe.UNKNOWN,t)}function A2(t){return new pe(fe.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function O2(t){return new pe(fe.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function M2(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new pe(fe.UNAUTHENTICATED,t)}function j2(){return new pe(fe.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function D2(t){return new pe(fe.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function L2(){return new pe(fe.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function F2(){return new pe(fe.CANCELED,"User canceled the upload/download.")}function U2(t){return new pe(fe.INVALID_URL,"Invalid URL '"+t+"'.")}function $2(t){return new pe(fe.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function W2(){return new pe(fe.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Aw+"' property when initializing the app?")}function z2(){return new pe(fe.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function B2(){return new pe(fe.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function V2(t){return new pe(fe.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Md(t){return new pe(fe.INVALID_ARGUMENT,t)}function Ow(){return new pe(fe.APP_DELETED,"The Firebase app was deleted.")}function H2(t){return new pe(fe.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ai(t,e){return new pe(fe.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function li(t){throw new pe(fe.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=ot.makeFromUrl(e,n)}catch{return new ot(e,"")}if(r.path==="")return r;throw $2(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(w){w.path.charAt(w.path.length-1)==="/"&&(w.path_=w.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function c(w){w.path_=decodeURIComponent(w.path)}const d="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",y=new RegExp(`^https?://${h}/${d}/b/${s}/o${f}`,"i"),g={bucket:1,path:3},_=n===Pw?"(?:storage.googleapis.com|storage.cloud.google.com)":n,k="([^?#]*)",v=new RegExp(`^https?://${_}/${s}/${k}`,"i"),m=[{regex:a,indices:l,postModify:i},{regex:y,indices:g,postModify:c},{regex:v,indices:{bucket:1,path:2},postModify:c}];for(let w=0;w<m.length;w++){const S=m[w],E=S.regex.exec(e);if(E){const C=E[S.indices.bucket];let T=E[S.indices.path];T||(T=""),r=new ot(C,T),S.postModify(r);break}}if(r==null)throw U2(e);return r}}class K2{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G2(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function l(){return a===2}let c=!1;function d(...k){c||(c=!0,e.apply(null,k))}function h(k){s=setTimeout(()=>{s=null,t(y,l())},k)}function f(){i&&clearTimeout(i)}function y(k,...v){if(c){f();return}if(k){f(),d.call(null,k,...v);return}if(l()||o){f(),d.call(null,k,...v);return}r<64&&(r*=2);let m;a===1?(a=2,m=0):m=(r+Math.random())*1e3,h(m)}let g=!1;function _(k){g||(g=!0,f(),!c&&(s!==null?(k||(a=2),clearTimeout(s),h(0)):k||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,_(!0)},n),_}function q2(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q2(t){return t!==void 0}function Y2(t){return typeof t=="object"&&!Array.isArray(t)}function Tf(t){return typeof t=="string"||t instanceof String}function wg(t){return Rf()&&t instanceof Blob}function Rf(){return typeof Blob<"u"}function xg(t,e,n,r){if(r<e)throw Md(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Md(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pf(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function Mw(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}var kr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(kr||(kr={}));/**
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
 */function X2(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J2{constructor(e,n,r,s,i,o,a,l,c,d,h,f=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=d,this.connectionFactory_=h,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((y,g)=>{this.resolve_=y,this.reject_=g,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new ta(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===kr.NO_ERROR,l=i.getStatus();if(!a||X2(l,this.additionalRetryCodes_)&&this.retry){const d=i.getErrorCode()===kr.ABORT;r(!1,new ta(!1,null,d));return}const c=this.successCodes_.indexOf(l)!==-1;r(!0,new ta(c,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());Q2(l)?i(l):i()}catch(l){o(l)}else if(a!==null){const l=Nf();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(s.canceled){const l=this.appDelete_?Ow():F2();o(l)}else{const l=L2();o(l)}};this.canceled_?n(!1,new ta(!1,null,!0)):this.backoffId_=G2(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&q2(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ta{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function Z2(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function eA(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function tA(t,e){e&&(t["X-Firebase-GMPID"]=e)}function nA(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function rA(t,e,n,r,s,i,o=!0){const a=Mw(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return tA(c,e),Z2(c,n),eA(c,i),nA(c,r),new J2(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sA(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function iA(...t){const e=sA();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Rf())return new Blob(t);throw new pe(fe.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function oA(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function aA(t){if(typeof atob>"u")throw V2("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class lu{constructor(e,n){this.data=e,this.contentType=n||null}}function lA(t,e){switch(t){case Wt.RAW:return new lu(jw(e));case Wt.BASE64:case Wt.BASE64URL:return new lu(Dw(t,e));case Wt.DATA_URL:return new lu(uA(e),dA(e))}throw Nf()}function jw(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function cA(t){let e;try{e=decodeURIComponent(t)}catch{throw Ai(Wt.DATA_URL,"Malformed data URL.")}return jw(e)}function Dw(t,e){switch(t){case Wt.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw Ai(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Wt.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw Ai(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=aA(e)}catch(s){throw s.message.includes("polyfill")?s:Ai(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class Lw{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Ai(Wt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=hA(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function uA(t){const e=new Lw(t);return e.base64?Dw(Wt.BASE64,e.rest):cA(e.rest)}function dA(t){return new Lw(t).contentType}function hA(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e,n){let r=0,s="";wg(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(wg(this.data_)){const r=this.data_,s=oA(r,e,n);return s===null?null:new Mn(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Mn(r,!0)}}static getBlob(...e){if(Rf()){const n=e.map(r=>r instanceof Mn?r.data_:r);return new Mn(iA.apply(null,n))}else{const n=e.map(o=>Tf(o)?lA(Wt.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new Mn(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fw(t){let e;try{e=JSON.parse(t)}catch{return null}return Y2(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fA(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function pA(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function Uw(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mA(t,e){return e}class ze{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||mA}}let na=null;function gA(t){return!Tf(t)||t.length<2?t:Uw(t)}function $w(){if(na)return na;const t=[];t.push(new ze("bucket")),t.push(new ze("generation")),t.push(new ze("metageneration")),t.push(new ze("name","fullPath",!0));function e(i,o){return gA(o)}const n=new ze("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new ze("size");return s.xform=r,t.push(s),t.push(new ze("timeCreated")),t.push(new ze("updated")),t.push(new ze("md5Hash",null,!0)),t.push(new ze("cacheControl",null,!0)),t.push(new ze("contentDisposition",null,!0)),t.push(new ze("contentEncoding",null,!0)),t.push(new ze("contentLanguage",null,!0)),t.push(new ze("contentType",null,!0)),t.push(new ze("metadata","customMetadata",!0)),na=t,na}function yA(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new ot(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function vA(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return yA(r,t),r}function Ww(t,e,n){const r=Fw(e);return r===null?null:vA(t,r,n)}function _A(t,e,n,r){const s=Fw(e);if(s===null||!Tf(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(c=>{const d=t.bucket,h=t.fullPath,f="/b/"+o(d)+"/o/"+o(h),y=Pf(f,n,r),g=Mw({alt:"media",token:c});return y+g})[0]}function wA(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class zw{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bw(t){if(!t)throw Nf()}function xA(t,e){function n(r,s){const i=Ww(t,s,e);return Bw(i!==null),i}return n}function kA(t,e){function n(r,s){const i=Ww(t,s,e);return Bw(i!==null),_A(i,s,t.host,t._protocol)}return n}function Vw(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=j2():s=M2():n.getStatus()===402?s=O2(t.bucket):n.getStatus()===403?s=D2(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function EA(t){const e=Vw(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=A2(t.path)),i.serverResponse=s.serverResponse,i}return n}function SA(t,e,n){const r=e.fullServerUrl(),s=Pf(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new zw(s,i,kA(t,n),o);return a.errorHandler=EA(e),a}function bA(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function CA(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=bA(null,e)),r}function IA(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let m="";for(let w=0;w<2;w++)m=m+Math.random().toString().slice(2);return m}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const c=CA(e,r,s),d=wA(c,n),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+d+`\r
--`+l+`\r
Content-Type: `+c.contentType+`\r
\r
`,f=`\r
--`+l+"--",y=Mn.getBlob(h,r,f);if(y===null)throw z2();const g={name:c.fullPath},_=Pf(i,t.host,t._protocol),k="POST",v=t.maxUploadRetryTime,p=new zw(_,k,xA(t,n),v);return p.urlParams=g,p.headers=o,p.body=y.uploadData(),p.errorHandler=Vw(e),p}class NA{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=kr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=kr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=kr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw li("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw li("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw li("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw li("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw li("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class TA extends NA{initXhr(){this.xhr_.responseType="text"}}function Hw(){return new TA}/**
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
 */class jr{constructor(e,n){this._service=e,n instanceof ot?this._location=n:this._location=ot.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new jr(e,n)}get root(){const e=new ot(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Uw(this._location.path)}get storage(){return this._service}get parent(){const e=fA(this._location.path);if(e===null)return null;const n=new ot(this._location.bucket,e);return new jr(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw H2(e)}}function RA(t,e,n){t._throwIfRoot("uploadBytes");const r=IA(t.storage,t._location,$w(),new Mn(e,!0),n);return t.storage.makeRequestWithTokens(r,Hw).then(s=>({metadata:s,ref:t}))}function PA(t){t._throwIfRoot("getDownloadURL");const e=SA(t.storage,t._location,$w());return t.storage.makeRequestWithTokens(e,Hw).then(n=>{if(n===null)throw B2();return n})}function AA(t,e){const n=pA(t._location.path,e),r=new ot(t._location.bucket,n);return new jr(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OA(t){return/^[A-Za-z]+:\/\//.test(t)}function MA(t,e){return new jr(t,e)}function Kw(t,e){if(t instanceof Af){const n=t;if(n._bucket==null)throw W2();const r=new jr(n,n._bucket);return e!=null?Kw(r,e):r}else return e!==void 0?AA(t,e):t}function jA(t,e){if(e&&OA(e)){if(t instanceof Af)return MA(t,e);throw Md("To use ref(service, url), the first argument must be a Storage instance.")}else return Kw(t,e)}function kg(t,e){const n=e==null?void 0:e[Aw];return n==null?null:ot.makeFromBucketSpec(n,t)}function DA(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:R0(s,t.app.options.projectId))}class Af{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=Pw,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=R2,this._maxUploadRetryTime=P2,this._requests=new Set,s!=null?this._bucket=ot.makeFromBucketSpec(s,this._host):this._bucket=kg(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=ot.makeFromBucketSpec(this._url,e):this._bucket=kg(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){xg("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){xg("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new jr(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new K2(Ow());{const o=rA(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const Eg="@firebase/storage",Sg="0.13.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gw="storage";function LA(t,e,n){return t=ne(t),RA(t,e,n)}function FA(t){return t=ne(t),PA(t)}function UA(t,e){return t=ne(t),jA(t,e)}function $A(t=ql(),e){t=ne(t);const r=zr(t,Gw).getImmediate({identifier:e}),s=I0("storage");return s&&WA(r,...s),r}function WA(t,e,n,r={}){DA(t,e,n,r)}function zA(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Af(n,r,s,e,Br)}function BA(){Pt(new _t(Gw,zA,"PUBLIC").setMultipleInstances(!0)),nt(Eg,Sg,""),nt(Eg,Sg,"esm2017")}BA();const qw="@firebase/installations",Of="0.6.9";/**
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
 */const Qw=1e4,Yw=`w:${Of}`,Xw="FIS_v2",VA="https://firebaseinstallations.googleapis.com/v1",HA=60*60*1e3,KA="installations",GA="Installations";/**
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
 */const qA={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Dr=new Wr(KA,GA,qA);function Jw(t){return t instanceof Gt&&t.code.includes("request-failed")}/**
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
 */function Zw({projectId:t}){return`${VA}/projects/${t}/installations`}function ex(t){return{token:t.token,requestStatus:2,expiresIn:YA(t.expiresIn),creationTime:Date.now()}}async function tx(t,e){const r=(await e.json()).error;return Dr.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function nx({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function QA(t,{refreshToken:e}){const n=nx(t);return n.append("Authorization",XA(e)),n}async function rx(t){const e=await t();return e.status>=500&&e.status<600?t():e}function YA(t){return Number(t.replace("s","000"))}function XA(t){return`${Xw} ${t}`}/**
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
 */async function JA({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=Zw(t),s=nx(t),i=e.getImmediate({optional:!0});if(i){const c=await i.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={fid:n,authVersion:Xw,appId:t.appId,sdkVersion:Yw},a={method:"POST",headers:s,body:JSON.stringify(o)},l=await rx(()=>fetch(r,a));if(l.ok){const c=await l.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:ex(c.authToken)}}else throw await tx("Create Installation",l)}/**
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
 */function sx(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function ZA(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const eO=/^[cdef][\w-]{21}$/,jd="";function tO(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=nO(t);return eO.test(n)?n:jd}catch{return jd}}function nO(t){return ZA(t).substr(0,22)}/**
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
 */function fc(t){return`${t.appName}!${t.appId}`}/**
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
 */const ix=new Map;function ox(t,e){const n=fc(t);ax(n,e),rO(n,e)}function ax(t,e){const n=ix.get(t);if(n)for(const r of n)r(e)}function rO(t,e){const n=sO();n&&n.postMessage({key:t,fid:e}),iO()}let vr=null;function sO(){return!vr&&"BroadcastChannel"in self&&(vr=new BroadcastChannel("[Firebase] FID Change"),vr.onmessage=t=>{ax(t.data.key,t.data.fid)}),vr}function iO(){ix.size===0&&vr&&(vr.close(),vr=null)}/**
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
 */const oO="firebase-installations-database",aO=1,Lr="firebase-installations-store";let cu=null;function Mf(){return cu||(cu=Gl(oO,aO,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Lr)}}})),cu}async function _l(t,e){const n=fc(t),s=(await Mf()).transaction(Lr,"readwrite"),i=s.objectStore(Lr),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&ox(t,e.fid),e}async function lx(t){const e=fc(t),r=(await Mf()).transaction(Lr,"readwrite");await r.objectStore(Lr).delete(e),await r.done}async function pc(t,e){const n=fc(t),s=(await Mf()).transaction(Lr,"readwrite"),i=s.objectStore(Lr),o=await i.get(n),a=e(o);return a===void 0?await i.delete(n):await i.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&ox(t,a.fid),a}/**
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
 */async function jf(t){let e;const n=await pc(t.appConfig,r=>{const s=lO(r),i=cO(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===jd?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function lO(t){const e=t||{fid:tO(),registrationStatus:0};return cx(e)}function cO(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Dr.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=uO(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:dO(t)}:{installationEntry:e}}async function uO(t,e){try{const n=await JA(t,e);return _l(t.appConfig,n)}catch(n){throw Jw(n)&&n.customData.serverCode===409?await lx(t.appConfig):await _l(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function dO(t){let e=await bg(t.appConfig);for(;e.registrationStatus===1;)await sx(100),e=await bg(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await jf(t);return r||n}return e}function bg(t){return pc(t,e=>{if(!e)throw Dr.create("installation-not-found");return cx(e)})}function cx(t){return hO(t)?{fid:t.fid,registrationStatus:0}:t}function hO(t){return t.registrationStatus===1&&t.registrationTime+Qw<Date.now()}/**
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
 */async function fO({appConfig:t,heartbeatServiceProvider:e},n){const r=pO(t,n),s=QA(t,n),i=e.getImmediate({optional:!0});if(i){const c=await i.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={installation:{sdkVersion:Yw,appId:t.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},l=await rx(()=>fetch(r,a));if(l.ok){const c=await l.json();return ex(c)}else throw await tx("Generate Auth Token",l)}function pO(t,{fid:e}){return`${Zw(t)}/${e}/authTokens:generate`}/**
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
 */async function Df(t,e=!1){let n;const r=await pc(t.appConfig,i=>{if(!ux(i))throw Dr.create("not-registered");const o=i.authToken;if(!e&&yO(o))return i;if(o.requestStatus===1)return n=mO(t,e),i;{if(!navigator.onLine)throw Dr.create("app-offline");const a=_O(i);return n=gO(t,a),a}});return n?await n:r.authToken}async function mO(t,e){let n=await Cg(t.appConfig);for(;n.authToken.requestStatus===1;)await sx(100),n=await Cg(t.appConfig);const r=n.authToken;return r.requestStatus===0?Df(t,e):r}function Cg(t){return pc(t,e=>{if(!ux(e))throw Dr.create("not-registered");const n=e.authToken;return wO(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function gO(t,e){try{const n=await fO(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await _l(t.appConfig,r),n}catch(n){if(Jw(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await lx(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await _l(t.appConfig,r)}throw n}}function ux(t){return t!==void 0&&t.registrationStatus===2}function yO(t){return t.requestStatus===2&&!vO(t)}function vO(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+HA}function _O(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function wO(t){return t.requestStatus===1&&t.requestTime+Qw<Date.now()}/**
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
 */async function xO(t){const e=t,{installationEntry:n,registrationPromise:r}=await jf(e);return r?r.catch(console.error):Df(e).catch(console.error),n.fid}/**
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
 */async function kO(t,e=!1){const n=t;return await EO(n),(await Df(n,e)).token}async function EO(t){const{registrationPromise:e}=await jf(t);e&&await e}/**
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
 */function SO(t){if(!t||!t.options)throw uu("App Configuration");if(!t.name)throw uu("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw uu(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function uu(t){return Dr.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dx="installations",bO="installations-internal",CO=t=>{const e=t.getProvider("app").getImmediate(),n=SO(e),r=zr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},IO=t=>{const e=t.getProvider("app").getImmediate(),n=zr(e,dx).getImmediate();return{getId:()=>xO(n),getToken:s=>kO(n,s)}};function NO(){Pt(new _t(dx,CO,"PUBLIC")),Pt(new _t(bO,IO,"PRIVATE"))}NO();nt(qw,Of);nt(qw,Of,"esm2017");/**
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
 */const TO="/firebase-messaging-sw.js",RO="/firebase-cloud-messaging-push-scope",hx="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",PO="https://fcmregistrations.googleapis.com/v1",fx="google.c.a.c_id",AO="google.c.a.c_l",OO="google.c.a.ts",MO="google.c.a.e";var Ig;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Ig||(Ig={}));/**
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
 */var uo;(function(t){t.PUSH_RECEIVED="push-received",t.NOTIFICATION_CLICKED="notification-clicked"})(uo||(uo={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function jO(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),s=new Uint8Array(r.length);for(let i=0;i<r.length;++i)s[i]=r.charCodeAt(i);return s}/**
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
 */const du="fcm_token_details_db",DO=5,Ng="fcm_token_object_Store";async function LO(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(i=>i.name).includes(du))return null;let e=null;return(await Gl(du,DO,{upgrade:async(r,s,i,o)=>{var a;if(s<2||!r.objectStoreNames.contains(Ng))return;const l=o.objectStore(Ng),c=await l.index("fcmSenderId").get(t);if(await l.clear(),!!c){if(s===2){const d=c;if(!d.auth||!d.p256dh||!d.endpoint)return;e={token:d.fcmToken,createTime:(a=d.createTime)!==null&&a!==void 0?a:Date.now(),subscriptionOptions:{auth:d.auth,p256dh:d.p256dh,endpoint:d.endpoint,swScope:d.swScope,vapidKey:typeof d.vapidKey=="string"?d.vapidKey:Jt(d.vapidKey)}}}else if(s===3){const d=c;e={token:d.fcmToken,createTime:d.createTime,subscriptionOptions:{auth:Jt(d.auth),p256dh:Jt(d.p256dh),endpoint:d.endpoint,swScope:d.swScope,vapidKey:Jt(d.vapidKey)}}}else if(s===4){const d=c;e={token:d.fcmToken,createTime:d.createTime,subscriptionOptions:{auth:Jt(d.auth),p256dh:Jt(d.p256dh),endpoint:d.endpoint,swScope:d.swScope,vapidKey:Jt(d.vapidKey)}}}}}})).close(),await qc(du),await qc("fcm_vapid_details_db"),await qc("undefined"),FO(e)?e:null}function FO(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const UO="firebase-messaging-database",$O=1,ho="firebase-messaging-store";let hu=null;function px(){return hu||(hu=Gl(UO,$O,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ho)}}})),hu}async function WO(t){const e=mx(t),r=await(await px()).transaction(ho).objectStore(ho).get(e);if(r)return r;{const s=await LO(t.appConfig.senderId);if(s)return await Lf(t,s),s}}async function Lf(t,e){const n=mx(t),s=(await px()).transaction(ho,"readwrite");return await s.objectStore(ho).put(e,n),await s.done,e}function mx({appConfig:t}){return t.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zO={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},$e=new Wr("messaging","Messaging",zO);/**
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
 */async function BO(t,e){const n=await Uf(t),r=gx(e),s={method:"POST",headers:n,body:JSON.stringify(r)};let i;try{i=await(await fetch(Ff(t.appConfig),s)).json()}catch(o){throw $e.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(i.error){const o=i.error.message;throw $e.create("token-subscribe-failed",{errorInfo:o})}if(!i.token)throw $e.create("token-subscribe-no-token");return i.token}async function VO(t,e){const n=await Uf(t),r=gx(e.subscriptionOptions),s={method:"PATCH",headers:n,body:JSON.stringify(r)};let i;try{i=await(await fetch(`${Ff(t.appConfig)}/${e.token}`,s)).json()}catch(o){throw $e.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(i.error){const o=i.error.message;throw $e.create("token-update-failed",{errorInfo:o})}if(!i.token)throw $e.create("token-update-no-token");return i.token}async function HO(t,e){const r={method:"DELETE",headers:await Uf(t)};try{const i=await(await fetch(`${Ff(t.appConfig)}/${e}`,r)).json();if(i.error){const o=i.error.message;throw $e.create("token-unsubscribe-failed",{errorInfo:o})}}catch(s){throw $e.create("token-unsubscribe-failed",{errorInfo:s==null?void 0:s.toString()})}}function Ff({projectId:t}){return`${PO}/projects/${t}/registrations`}async function Uf({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function gx({p256dh:t,auth:e,endpoint:n,vapidKey:r}){const s={web:{endpoint:n,auth:e,p256dh:t}};return r!==hx&&(s.web.applicationPubKey=r),s}/**
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
 */const KO=7*24*60*60*1e3;async function GO(t){const e=await QO(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:Jt(e.getKey("auth")),p256dh:Jt(e.getKey("p256dh"))},r=await WO(t.firebaseDependencies);if(r){if(YO(r.subscriptionOptions,n))return Date.now()>=r.createTime+KO?qO(t,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await HO(t.firebaseDependencies,r.token)}catch(s){console.warn(s)}return Tg(t.firebaseDependencies,n)}else return Tg(t.firebaseDependencies,n)}async function qO(t,e){try{const n=await VO(t.firebaseDependencies,e),r=Object.assign(Object.assign({},e),{token:n,createTime:Date.now()});return await Lf(t.firebaseDependencies,r),n}catch(n){throw n}}async function Tg(t,e){const r={token:await BO(t,e),createTime:Date.now(),subscriptionOptions:e};return await Lf(t,r),r.token}async function QO(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:jO(e)})}function YO(t,e){const n=e.vapidKey===t.vapidKey,r=e.endpoint===t.endpoint,s=e.auth===t.auth,i=e.p256dh===t.p256dh;return n&&r&&s&&i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rg(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return XO(e,t),JO(e,t),ZO(e,t),e}function XO(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const r=e.notification.body;r&&(t.notification.body=r);const s=e.notification.image;s&&(t.notification.image=s);const i=e.notification.icon;i&&(t.notification.icon=i)}function JO(t,e){e.data&&(t.data=e.data)}function ZO(t,e){var n,r,s,i,o;if(!e.fcmOptions&&!(!((n=e.notification)===null||n===void 0)&&n.click_action))return;t.fcmOptions={};const a=(s=(r=e.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&s!==void 0?s:(i=e.notification)===null||i===void 0?void 0:i.click_action;a&&(t.fcmOptions.link=a);const l=(o=e.fcmOptions)===null||o===void 0?void 0:o.analytics_label;l&&(t.fcmOptions.analyticsLabel=l)}/**
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
 */function eM(t){return typeof t=="object"&&!!t&&fx in t}/**
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
 */function tM(t){if(!t||!t.options)throw fu("App Configuration Object");if(!t.name)throw fu("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const r of e)if(!n[r])throw fu(r);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function fu(t){return $e.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nM{constructor(e,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const s=tM(e);this.firebaseDependencies={app:e,appConfig:s,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rM(t){try{t.swRegistration=await navigator.serviceWorker.register(TO,{scope:RO}),t.swRegistration.update().catch(()=>{})}catch(e){throw $e.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sM(t,e){if(!e&&!t.swRegistration&&await rM(t),!(!e&&t.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw $e.create("invalid-sw-registration");t.swRegistration=e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iM(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=hx)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yx(t,e){if(!navigator)throw $e.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw $e.create("permission-blocked");return await iM(t,e==null?void 0:e.vapidKey),await sM(t,e==null?void 0:e.serviceWorkerRegistration),GO(t)}/**
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
 */async function oM(t,e,n){const r=aM(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[fx],message_name:n[AO],message_time:n[OO],message_device_time:Math.floor(Date.now()/1e3)})}function aM(t){switch(t){case uo.NOTIFICATION_CLICKED:return"notification_open";case uo.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lM(t,e){const n=e.data;if(!n.isFirebaseMessaging)return;t.onMessageHandler&&n.messageType===uo.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(Rg(n)):t.onMessageHandler.next(Rg(n)));const r=n.data;eM(r)&&r[MO]==="1"&&await oM(t,n.messageType,r)}const Pg="@firebase/messaging",Ag="0.12.12";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cM=t=>{const e=new nM(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>lM(e,n)),e},uM=t=>{const e=t.getProvider("messaging").getImmediate();return{getToken:r=>yx(e,r)}};function dM(){Pt(new _t("messaging",cM,"PUBLIC")),Pt(new _t("messaging-internal",uM,"PRIVATE")),nt(Pg,Ag),nt(Pg,Ag,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hM(){try{await O0()}catch{return!1}return typeof window<"u"&&A0()&&TC()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fM(t,e){if(!navigator)throw $e.create("only-available-in-window");return t.onMessageHandler=e,()=>{t.onMessageHandler=null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pM(t=ql()){return hM().then(e=>{if(!e)throw $e.create("unsupported-browser")},e=>{throw $e.create("indexed-db-unsupported")}),zr(ne(t),"messaging").getImmediate()}async function mM(t,e){return t=ne(t),yx(t,e)}function gM(t,e){return t=ne(t),fM(t,e)}dM();const yM={apiKey:"AIzaSyD9-_GYLQabcC3SPMTOG9zj2CcaPqzfOrI",authDomain:"lalaland-24931.firebaseapp.com",databaseURL:"https://lalaland-24931-default-rtdb.firebaseio.com",projectId:"lalaland-24931",storageBucket:"lalaland-24931.firebasestorage.app",messagingSenderId:"45134876312",appId:"1:45134876312:web:9e33e46c54cb7c9bfc8aed",measurementId:"G-M04NRCY9FQ"};let vM=!1,ci=null,an=null,K=null,wl=null,Dt=null;const _M=()=>{try{console.log("🚀 正在初始化 Firebase..."),ci=L0(yM),console.log("✅ Firebase App 初始化成功");try{an=uT(ci),console.log("✅ Firebase Auth 初始化成功")}catch(t){throw console.error("❌ Firebase Auth 初始化失敗:",t),t}try{K=S2(ci),console.log("✅ Firebase Database 初始化成功")}catch(t){throw console.error("❌ Firebase Database 初始化失敗:",t),t}try{wl=$A(ci),console.log("✅ Firebase Storage 初始化成功")}catch(t){throw console.error("❌ Firebase Storage 初始化失敗:",t),t}try{typeof window<"u"&&"serviceWorker"in navigator?(Dt=pM(ci),console.log("✅ Firebase Messaging 初始化成功")):console.log("ℹ️ Firebase Messaging 不支援此環境")}catch(t){console.warn("⚠️ Firebase Messaging 初始化失敗:",t)}vM=!0,console.log("🎉 Firebase 完全初始化成功")}catch(t){console.error("💥 Firebase 初始化失敗:",t),wM()}},wM=()=>{console.warn("⚠️ 創建 Firebase 模擬服務，部分功能可能不可用"),an||(an={currentUser:null,onAuthStateChanged:t=>(console.warn("模擬 Auth: onAuthStateChanged 被調用"),t(null),()=>{}),signOut:()=>Promise.reject(new Error("Firebase 未初始化")),signInWithEmailAndPassword:()=>Promise.reject(new Error("Firebase 未初始化")),createUserWithEmailAndPassword:()=>Promise.reject(new Error("Firebase 未初始化"))}),K||(K={ref:()=>({on:()=>console.warn("模擬 Database: ref.on 被調用"),off:()=>console.warn("模擬 Database: ref.off 被調用"),push:()=>Promise.reject(new Error("Firebase 未初始化")),set:()=>Promise.reject(new Error("Firebase 未初始化"))})}),wl||(wl={ref:()=>({put:()=>Promise.reject(new Error("Firebase 未初始化")),getDownloadURL:()=>Promise.reject(new Error("Firebase 未初始化"))})})};_M();class xM{constructor(){this.isSupported="Notification"in window}get hasPermission(){return this.isSupported&&Notification.permission==="granted"}async requestPermission(){if(!this.isSupported)return console.warn("🔔 此瀏覽器不支援桌面通知"),!1;try{return await Notification.requestPermission()==="granted"}catch(e){return console.error("🚨 請求通知權限時出錯:",e),!1}}showNotification(e,n="",r=null){if(!this.hasPermission)return window.showNotification&&window.showNotification(`${e}: ${n}`,"info"),null;const s={body:n,icon:"/icon-512.png",tag:"lalaland-message",requireInteraction:!1,silent:!1};try{const i=new Notification(e,s);return i.onclick=()=>{window.focus(),r&&r(),i.close()},setTimeout(()=>{i.close()},5e3),i}catch(i){return console.error("🚨 顯示通知時出錯:",i),null}}playNotificationSound(){if(localStorage.getItem("notificationSound")!=="false")try{const n=new(window.AudioContext||window.webkitAudioContext),r=n.createOscillator(),s=n.createGain();r.connect(s),s.connect(n.destination),r.frequency.value=800,r.type="sine",s.gain.setValueAtTime(.1,n.currentTime),s.gain.exponentialRampToValueAtTime(.01,n.currentTime+.3),r.start(),r.stop(n.currentTime+.3)}catch(n){console.log("🔇 無法播放通知音效:",n)}}}const Oi=new xM,ra="BPkxFDyty7orkmlIPl7B8xl1A8rY1rQuqDWM03HdXOj1fvVWrXHc3mJX99iQl7GGHIk1Nj7rZK3bhCu0os7h8Mw";class kM{constructor(){this.fcmToken=null,this.isSupported=this.checkFCMSupport(),this.isInitialized=!1}checkFCMSupport(){return!!(Dt&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window)}async initialize(){if(!this.isSupported)return console.warn("🚫 FCM 不支援此瀏覽器"),!1;try{return await this.registerServiceWorker(),this.setupForegroundListener(),this.isInitialized=!0,console.log("✅ FCM 初始化成功"),!0}catch(e){return console.error("❌ FCM 初始化失敗:",e),!1}}async registerServiceWorker(){if("serviceWorker"in navigator)try{const e=await navigator.serviceWorker.register("/firebase-messaging-sw.js");return console.log("✅ FCM Service Worker 註冊成功:",e),e}catch(e){throw console.error("❌ FCM Service Worker 註冊失敗:",e),e}}async diagnoseEnvironment(){const e={https:location.protocol==="https:"||location.hostname==="localhost",serviceWorker:"serviceWorker"in navigator,pushManager:"PushManager"in window,notification:"Notification"in window,messaging:!!Dt,permission:Notification.permission,userAgent:navigator.userAgent,url:window.location.href,vapidKey:`${ra.substring(0,10)}...`,platform:navigator.platform,language:navigator.language,cookieEnabled:navigator.cookieEnabled,onLine:navigator.onLine};if("serviceWorker"in navigator)try{const n=await navigator.serviceWorker.getRegistration();e.swRegistered=!!n,e.swActive=!!(n&&n.active)}catch(n){e.swError=n.message}return Notification.permission==="denied"?e.permissionAdvice="通知權限被永久拒絕，需要手動在瀏覽器設定中重新啟用":Notification.permission==="default"?e.permissionAdvice="尚未請求通知權限":Notification.permission==="granted"&&(e.permissionAdvice="通知權限已獲得"),console.log("🔍 FCM 環境診斷:",e),e}async requestPermission(e=null){const n=await this.diagnoseEnvironment();if(!this.isSupported){const r=[];throw n.serviceWorker||r.push("Service Worker"),n.pushManager||r.push("Push Manager"),n.notification||r.push("Notification API"),n.messaging||r.push("Firebase Messaging"),console.error("🚫 FCM 不支援，缺少功能:",r.join(", ")),new Error(`瀏覽器不支援推播通知，缺少: ${r.join(", ")}`)}if(!this.isInitialized&&(console.warn("🚫 FCM 未初始化，嘗試重新初始化..."),!await this.initialize()))throw new Error("FCM 初始化失敗");if(!n.https)throw new Error("推播通知需要 HTTPS 環境或 localhost");try{if(console.log("📋 當前通知權限狀態:",Notification.permission),Notification.permission==="denied")throw new Error("通知權限已被拒絕。請在瀏覽器設定中重新允許通知權限。");console.log("🔔 請求通知權限...");const r=await Notification.requestPermission();if(console.log("📋 權限請求結果:",r),r!=="granted")throw r==="denied"?new Error("通知權限被拒絕。請檢查瀏覽器設定並重新允許通知。"):new Error("通知權限未獲得授予。");console.log("🎫 取得 FCM Token...");try{const s=await mM(Dt,{vapidKey:ra});return s?(console.log("✅ FCM Token 取得成功:",s.substring(0,30)+"..."),this.fcmToken=s,e&&await this.saveFCMToken(e,s),s):(console.warn("⚠️ 無法取得 FCM Token - 可能是瀏覽器不支援或配置問題"),null)}catch(s){throw console.warn("⚠️ FCM Token 取得失敗:",s.message),s.code==="messaging/token-subscribe-failed"?new Error("FCM 服務訂閱失敗，請檢查網路連線和 VAPID 金鑰設定"):s.code==="messaging/invalid-vapid-key"?new Error("VAPID 金鑰無效，請檢查 Firebase 專案設定"):s.code==="messaging/registration-token-not-registered"?new Error("註冊 Token 無效，請清除瀏覽器資料後重試"):new Error(`FCM Token 取得失敗: ${s.message}`)}}catch(r){throw console.error("❌ FCM 權限請求流程失敗:",r.message),r}}async requestPermissionSilently(e=null){try{return await this.requestPermission(e)}catch(n){return console.log("ℹ️ 靜默權限請求結果:",n.message),null}}async saveFCMToken(e,n){try{const r=q(K,`fcmTokens/${e}`);await Gr(r,{token:n,timestamp:Date.now(),userAgent:navigator.userAgent}),console.log("✅ FCM Token 已儲存到資料庫")}catch(r){console.error("❌ 儲存 FCM Token 失敗:",r)}}setupForegroundListener(){Dt&&gM(Dt,e=>{console.log("🔔 FCM 前景訊息:",e);const{title:n,body:r}=e.notification||{};window.showNotification&&window.showNotification(n?`${n}: ${r}`:r||"新訊息","info",6e3),this.playNotificationSound(),(document.hidden||document.visibilityState==="hidden")&&this.showDesktopNotification(n||"新訊息",r||"您有新的訊息")})}showDesktopNotification(e,n){if(Notification.permission==="granted"){const r=new Notification(e,{body:n,icon:"/icon-512.png",badge:"/icon-512.png",tag:"lalaland-fcm"});r.onclick=()=>{window.focus(),r.close()},setTimeout(()=>{r.close()},5e3)}}playNotificationSound(){if(localStorage.getItem("notificationSound")!=="false")try{const n=new(window.AudioContext||window.webkitAudioContext),r=n.createOscillator(),s=n.createGain();r.connect(s),s.connect(n.destination),r.frequency.value=800,r.type="sine",s.gain.setValueAtTime(.1,n.currentTime),s.gain.exponentialRampToValueAtTime(.01,n.currentTime+.3),r.start(),r.stop(n.currentTime+.3)}catch(n){console.log("🔇 無法播放通知音效:",n)}}getCurrentToken(){return this.fcmToken}isEnabled(){return!!(this.fcmToken&&Notification.permission==="granted")}async validateVAPIDKey(){console.log("🔍 驗證 VAPID 金鑰設定...");const e={vapidKey:ra,projectId:"lalaland-24931",messagingSenderId:"45134876312",publicKey:"BPkxFDyty7orkmlIPl7B8xl1A8rY1rQuqDWM03HdXOj1fvVWrXHc3mJX99iQl7GGHIk1Nj7rZK3bhCu0os7h8Mw"};if(console.log("📋 預期的 VAPID 設定:",e),Dt&&Dt.app){const n=Dt.app.options;if(console.log("🔧 Firebase 專案設定:",{projectId:n.projectId,messagingSenderId:n.messagingSenderId,authDomain:n.authDomain}),n.projectId!==e.projectId)return console.error("❌ Firebase Project ID 不匹配!"),console.log("   預期:",e.projectId),console.log("   實際:",n.projectId),!1;if(n.messagingSenderId!==e.messagingSenderId)return console.error("❌ Messaging Sender ID 不匹配!"),console.log("   預期:",e.messagingSenderId),console.log("   實際:",n.messagingSenderId),!1}return ra.length<40?(console.error("❌ VAPID 金鑰格式無效"),!1):(console.log("✅ VAPID 金鑰設定驗證通過"),!0)}async disable(){try{Dt&&this.fcmToken&&console.log("🔕 FCM 已停用"),this.fcmToken=null}catch(e){console.error("❌ 停用 FCM 失敗:",e)}}}const us=new kM,EM=async()=>{console.log("🔍 開始偵錯 Firebase 資料庫...");try{console.log("📡 檢查群組聊天資料...");const t=q(K,"groupChats"),e=await Kt(t);if(e.exists()){const o=e.val();console.log("✅ 群組聊天資料:",o),Object.keys(o).forEach(a=>{var l;if((l=o[a])!=null&&l.messages){const c=Object.keys(o[a].messages).length;console.log(`📝 房間 ${a} 有 ${c} 條訊息`)}else console.log(`📝 房間 ${a} 沒有訊息`)})}else console.log("❌ 沒有找到群組聊天資料");console.log("👥 檢查用戶資料...");const n=q(K,"users"),r=await Kt(n);if(r.exists()){const o=r.val();console.log("✅ 用戶資料:",o),Object.keys(o).forEach(a=>{var l,c;if((l=o[a])!=null&&l.friends){const d=Object.keys(o[a].friends).length;console.log(`👨‍👩‍👧‍👦 用戶 ${a} (${o[a].nickname||"匿名"}) 有 ${d} 個好友`)}else console.log(`👨‍👩‍👧‍👦 用戶 ${a} (${((c=o[a])==null?void 0:c.nickname)||"匿名"}) 沒有好友`)})}else console.log("❌ 沒有找到用戶資料");console.log("💬 檢查私人聊天資料...");const s=q(K,"privateChats"),i=await Kt(s);if(i.exists()){const o=i.val();console.log("✅ 私人聊天資料:",o),Object.keys(o).forEach(a=>{var l;if((l=o[a])!=null&&l.messages){const c=Object.keys(o[a].messages).length;console.log(`💌 私聊 ${a} 有 ${c} 條訊息`)}})}else console.log("❌ 沒有找到私人聊天資料")}catch(t){console.error("🚨 Firebase 偵錯失敗:",t),console.error("錯誤詳情:",t.message),t.code==="PERMISSION_DENIED"&&(console.error("❌ 權限被拒絕 - 需要更新 Firebase 安全規則!"),console.log("📋 請參考 FIREBASE_SETUP.md 文件更新規則"))}},SM=async t=>{console.log(`🔍 偵錯房間 ${t} 的訊息...`);try{const e=q(K,`groupChats/${t}/messages`),n=await Kt(e);if(n.exists()){const r=n.val();return console.log(`✅ 房間 ${t} 找到 ${Object.keys(r).length} 條訊息:`,r),r}else return console.log(`❌ 房間 ${t} 沒有訊息`),null}catch(e){return console.error(`🚨 無法讀取房間 ${t} 的訊息:`,e),null}};/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bM=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),vx=(...t)=>t.filter((e,n,r)=>!!e&&r.indexOf(e)===n).join(" ");/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var CM={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IM=x.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:s="",children:i,iconNode:o,...a},l)=>x.createElement("svg",{ref:l,...CM,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:vx("lucide",s),...a},[...o.map(([c,d])=>x.createElement(c,d)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=(t,e)=>{const n=x.forwardRef(({className:r,...s},i)=>x.createElement(IM,{ref:i,iconNode:e,className:vx(`lucide-${bM(t)}`,r),...s}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _x=B("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NM=B("BarChart3",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TM=B("BellOff",[["path",{d:"M8.7 3A6 6 0 0 1 18 8a21.3 21.3 0 0 0 .6 5",key:"o7mx20"}],["path",{d:"M17 17H3s3-2 3-9a4.67 4.67 0 0 1 .3-1.7",key:"16f1lm"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RM=B("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dd=B("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PM=B("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AM=B("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $f=B("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wx=B("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ld=B("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OM=B("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MM=B("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jM=B("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fr=B("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DM=B("MicOff",[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M18.89 13.23A7.12 7.12 0 0 0 19 12v-2",key:"80xlxr"}],["path",{d:"M5 10v2a7 7 0 0 0 12 5",key:"p2k8kg"}],["path",{d:"M15 9.34V5a3 3 0 0 0-5.68-1.33",key:"1gzdoj"}],["path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12",key:"r2i35w"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LM=B("Mic",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xx=B("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Og=B("PhoneOff",[["path",{d:"M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91",key:"z86iuo"}],["line",{x1:"22",x2:"2",y1:"2",y2:"22",key:"11kh81"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FM=B("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UM=B("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $M=B("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kx=B("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WM=B("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mg=B("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zM=B("Smile",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ex=B("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sx=B("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BM=B("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fo=B("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VM=B("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bx=B("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cx=B("Volume2",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ix=B("VolumeX",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wn=B("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),HM=()=>{const t=_o(),{createAnonymousUser:e}=De(),n=[{icon:u.jsx(Fr,{className:"w-8 h-8"}),title:"即時聊天",description:"與志同道合的朋友即時對話交流"},{icon:u.jsx($f,{className:"w-8 h-8"}),title:"安全友善",description:"專為女性LGBTQ+社群設計的安全空間"},{icon:u.jsx(bx,{className:"w-8 h-8"}),title:"多元社群",description:"閒聊、找伴、交友，滿足不同需求"},{icon:u.jsx(Ld,{className:"w-8 h-8"}),title:"隱私保護",description:"匿名模式與隱私設定保護你的安全"}];return u.jsxs("div",{className:"min-h-screen flex flex-col",children:[u.jsx("header",{className:"bg-white/70 backdrop-blur-sm border-b border-gray-200",children:u.jsxs("div",{className:"max-w-6xl mx-auto px-4 py-4 flex justify-between items-center",children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx("img",{src:"/icon-512.png?v=2",alt:"LalaLand",className:"w-10 h-10 rounded-lg"}),u.jsx("h1",{className:"text-2xl font-bold text-sea-dark",children:"LalaLand"})]}),u.jsx("button",{onClick:()=>t("/login"),className:"btn-primary",children:"登入 / 註冊"})]})}),u.jsx("main",{className:"flex-1 flex flex-col items-center justify-center px-4 py-12",children:u.jsxs("div",{className:"text-center max-w-4xl mx-auto",children:[u.jsx("img",{src:"/icon-512.png?v=2",alt:"LalaLand Logo",className:"w-32 h-32 mx-auto mb-8 animate-float"}),u.jsxs("h2",{className:"text-4xl md:text-5xl font-bold text-gray-800 mb-6",children:["歡迎來到",u.jsx("span",{className:"text-sea-blue",children:" LalaLand"})]}),u.jsxs("p",{className:"text-xl text-gray-600 mb-8 leading-relaxed",children:["專為女同志設計的安全聊天平台",u.jsx("br",{}),"在這裡，你可以安心做自己，與志同道合的朋友建立真摯連結"]}),u.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center mb-16",children:[u.jsx("button",{onClick:()=>t("/login"),className:"btn-primary text-lg px-8 py-4",children:"開始聊天"}),u.jsx("button",{onClick:()=>{try{e(),j.success("歡迎匿名體驗 LalaLand！你可以查看聊天記錄，但需要註冊才能發送訊息。"),t("/chat")}catch{j.error("匿名體驗啟動失敗")}},className:"btn-secondary text-lg px-8 py-4",children:"匿名體驗"})]}),u.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-4 gap-8",children:n.map((r,s)=>u.jsxs("div",{className:"card text-center hover:shadow-medium transition-shadow",children:[u.jsx("div",{className:"text-sea-blue mb-4 flex justify-center",children:r.icon}),u.jsx("h3",{className:"font-semibold text-lg mb-2",children:r.title}),u.jsx("p",{className:"text-gray-600 text-sm",children:r.description})]},s))})]})}),u.jsx("footer",{className:"bg-white/70 backdrop-blur-sm border-t border-gray-200 py-8",children:u.jsx("div",{className:"max-w-6xl mx-auto px-4 text-center text-gray-500",children:u.jsx("p",{children:"© 2025 LalaLand. 致力於為女性LGBTQ+社群提供安全友善的交流空間"})})})]})},jg=()=>{const t=_o(),{user:e,isAnonymousUser:n}=De(),r=n(),[s,i]=x.useState("login"),[o,a]=x.useState(!1),[l,c]=x.useState(!1),[d,h]=x.useState({email:"",password:"",confirmPassword:""}),f=k=>{h(v=>({...v,[k.target.name]:k.target.value}))},y=async k=>{k.preventDefault(),c(!0);try{console.log("🔄 開始登入流程...",{email:d.email,authInstance:!!an});const v=await GI(an,d.email,d.password);console.log("✅ Firebase 登入成功:",{uid:v.user.uid,email:v.user.email,isAnonymous:v.user.isAnonymous}),await new Promise(p=>setTimeout(p,300)),console.log("🎉 準備顯示登入成功通知..."),j.success("登入成功！"),console.log("✅ 登入流程完成，準備導航到聊天室"),t("/chat",{replace:!0})}catch(v){console.error("❌ 登入過程發生錯誤:",v),console.error("錯誤代碼:",v.code),console.error("錯誤訊息:",v.message);let p="登入失敗，請檢查帳號密碼";v.code==="auth/user-not-found"?p="找不到此帳號，請確認電子郵件是否正確":v.code==="auth/wrong-password"?p="密碼錯誤，請重新輸入":v.code==="auth/invalid-email"?p="電子郵件格式不正確":v.code==="auth/too-many-requests"&&(p="登入嘗試次數過多，請稍後再試"),j.error(p)}finally{c(!1)}},g=async k=>{if(k.preventDefault(),c(!0),d.password!==d.confirmPassword){j.error("密碼確認不一致"),c(!1);return}if(d.password.length<6){j.error("密碼至少需要6個字元"),c(!1);return}try{console.log("🔄 開始註冊流程...",{email:d.email});const v=await KI(an,d.email,d.password);console.log("✅ Firebase 帳號創建成功:",v.user.uid);try{await QI(v.user,{displayName:"新用戶"}),console.log("✅ 用戶 Profile 更新成功")}catch(p){console.warn("⚠️ Profile 更新失敗，但註冊流程繼續:",p)}try{await Gr(q(K,`users/${v.user.uid}`),{nickname:"新用戶",email:d.email,avatar:null,joinedAt:Date.now(),isOnline:!0,isFirstLogin:!0}),console.log("✅ 用戶資料儲存到資料庫成功")}catch(p){console.warn("⚠️ 資料庫儲存失敗，但註冊流程繼續:",p)}await new Promise(p=>setTimeout(p,500)),console.log("🎉 準備顯示成功通知..."),j.success("註冊成功！請至設定更新頭貼與暱稱。"),console.log("✅ 註冊流程完成，準備導航到聊天室"),t("/chat",{replace:!0})}catch(v){console.error("❌ 註冊過程發生錯誤:",v),console.error("錯誤代碼:",v.code),console.error("錯誤訊息:",v.message);let p="註冊失敗，請稍後再試";v.code==="auth/email-already-in-use"?p="此電子郵件已被註冊":v.code==="auth/weak-password"?p="密碼強度不足":v.code==="auth/invalid-email"&&(p="電子郵件格式不正確"),j.error(p)}finally{c(!1)}},_=async k=>{k.preventDefault(),c(!0);try{console.log("🔄 開始密碼重設流程...",{email:d.email}),await HI(an,d.email),console.log("✅ 密碼重設郵件已發送"),j.success("密碼重設郵件已發送到你的信箱，請檢查郵件並依照指示重設密碼"),i("login")}catch(v){console.error("❌ 密碼重設過程發生錯誤:",v),console.error("錯誤代碼:",v.code),console.error("錯誤訊息:",v.message);let p="密碼重設失敗，請稍後再試";v.code==="auth/user-not-found"?p="找不到此電子郵件的帳號":v.code==="auth/invalid-email"?p="電子郵件格式不正確":v.code==="auth/too-many-requests"&&(p="請求過於頻繁，請稍後再試"),j.error(p)}finally{c(!1)}};return u.jsx("div",{className:"min-h-screen flex items-center justify-center px-4 py-8",children:u.jsxs("div",{className:"w-full max-w-md",children:[u.jsxs("button",{onClick:()=>t("/"),className:"flex items-center gap-2 text-gray-600 hover:text-sea-blue mb-6 transition-colors",children:[u.jsx(_x,{className:"w-4 h-4"}),"返回首頁"]}),u.jsxs("div",{className:"card",children:[u.jsxs("div",{className:"text-center mb-8",children:[u.jsx("img",{src:"/icon-512.png?v=2",alt:"LalaLand",className:"w-16 h-16 mx-auto mb-4"}),u.jsxs("h2",{className:"text-2xl font-bold text-gray-900 mb-2 text-center",children:[s==="login"&&"歡迎回來",s==="register"&&"建立帳號",s==="forgot"&&"重設密碼"]}),r&&s!=="forgot"&&u.jsxs("div",{className:"mt-4 p-4 bg-gradient-to-r from-amber-50 to-amber-100 border border-amber-200 rounded-lg",children:[u.jsxs("div",{className:"flex items-center justify-center gap-2 mb-2",children:[u.jsx(fo,{className:"w-5 h-5 text-amber-600"}),u.jsx("span",{className:"font-medium text-amber-800",children:"升級你的帳號"})]}),u.jsx("p",{className:"text-sm text-amber-700",children:"你目前是匿名訪客，註冊後可以發送訊息、使用私訊、上傳圖片等完整功能"})]}),s==="forgot"&&u.jsx("div",{className:"mt-4 p-4 bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-lg",children:u.jsx("p",{className:"text-sm text-blue-700 text-center",children:"請輸入你的電子郵件地址，我們將發送密碼重設連結到你的信箱"})})]}),s!=="forgot"&&u.jsxs("div",{className:"flex bg-gray-100 rounded-lg p-1 mb-6",children:[u.jsx("button",{className:`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${s==="login"?"bg-white text-sea-blue shadow-sm":"text-gray-600 hover:text-gray-800"}`,onClick:()=>i("login"),children:"登入"}),u.jsx("button",{className:`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${s==="register"?"bg-white text-sea-blue shadow-sm":"text-gray-600 hover:text-gray-800"}`,onClick:()=>i("register"),children:"註冊"})]}),u.jsxs("form",{onSubmit:s==="login"?y:s==="register"?g:_,children:[u.jsxs("div",{className:"mb-4",children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"電子郵件"}),u.jsxs("div",{className:"relative",children:[u.jsx(MM,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"}),u.jsx("input",{type:"email",name:"email",value:d.email,onChange:f,className:"input-field pl-10",placeholder:"輸入你的電子郵件",required:!0})]})]}),s!=="forgot"&&u.jsxs("div",{className:"mb-4",children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"密碼"}),u.jsxs("div",{className:"relative",children:[u.jsx(Ld,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"}),u.jsx("input",{type:o?"text":"password",name:"password",value:d.password,onChange:f,className:"input-field pl-10 pr-10",placeholder:"輸入密碼",required:!0}),u.jsx("button",{type:"button",onClick:()=>a(!o),className:"absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600",children:o?u.jsx(PM,{className:"w-5 h-5"}):u.jsx(AM,{className:"w-5 h-5"})})]})]}),s==="register"&&u.jsxs("div",{className:"mb-6",children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-2",children:"確認密碼"}),u.jsxs("div",{className:"relative",children:[u.jsx(Ld,{className:"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"}),u.jsx("input",{type:o?"text":"password",name:"confirmPassword",value:d.confirmPassword,onChange:f,className:"input-field pl-10",placeholder:"再次輸入密碼",required:!0})]})]}),u.jsx("button",{type:"submit",disabled:l,className:"btn-primary w-full text-center disabled:opacity-50 disabled:cursor-not-allowed",children:l?"處理中...":s==="login"?"登入":s==="register"?"註冊":"發送重設郵件"})]}),u.jsxs("div",{className:"mt-4 text-center",children:[s==="login"&&u.jsx("button",{type:"button",onClick:()=>i("forgot"),className:"text-sm text-sea-blue hover:underline",children:"忘記密碼？"}),s==="forgot"&&u.jsx("button",{type:"button",onClick:()=>i("login"),className:"text-sm text-sea-blue hover:underline",children:"返回登入"})]})]})]})})},Mt=x0((t,e)=>({currentRoom:"chat",currentPrivateChat:null,messages:[],onlineUsers:{},friends:[],privateChatsList:[],sidebarOpen:!1,darkMode:localStorage.getItem("darkMode")==="yes",setCurrentRoom:n=>t({currentRoom:n}),setCurrentPrivateChat:n=>t({currentPrivateChat:n}),setMessages:n=>t({messages:n}),addMessage:n=>t(r=>({messages:[...r.messages,n]})),setOnlineUsers:n=>t({onlineUsers:n}),setFriends:n=>t({friends:n}),setPrivateChatsList:n=>t({privateChatsList:n}),setSidebarOpen:n=>t({sidebarOpen:n}),toggleDarkMode:()=>{const n=!e().darkMode;localStorage.setItem("darkMode",n?"yes":"no"),t({darkMode:n}),n?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},clearMessages:()=>t({messages:[]})})),KM=async t=>{if(t!=null&&t.uid)try{console.log("正在為用戶創建範例資料:",t.nickname);const e=q(K,`users/${t.uid}`),n={nickname:t.nickname||"匿名用戶",avatar:t.avatar||null,email:t.email||null,isAnonymous:t.isAnonymous||!1,lastSeen:Date.now(),isOnline:!0,joinedAt:Date.now()};await Gr(e,n),console.log("✅ 用戶資料已更新")}catch(e){console.error("❌ 創建範例資料失敗:",e)}};class GM{constructor(){this.maxFileSize=5*1024*1024,this.allowedTypes=["image/jpeg","image/jpg","image/png","image/gif","image/webp"],this.maxWidth=400,this.maxHeight=400}validateFile(e){const n=[];if(!e)return n.push("請選擇一個文件"),{valid:!1,errors:n};if(this.allowedTypes.includes(e.type)||n.push("只支援 JPG、PNG、GIF、WebP 格式的圖片"),e.size>this.maxFileSize){const r=this.maxFileSize/1048576;n.push(`文件大小不能超過 ${r}MB`)}return{valid:n.length===0,errors:n}}async compressImage(e,n=this.maxWidth,r=this.maxHeight,s=.8){return new Promise((i,o)=>{const a=document.createElement("canvas"),l=a.getContext("2d"),c=new Image;c.onload=()=>{let{width:d,height:h}=this.calculateDimensions(c.width,c.height,n,r);a.width=d,a.height=h,l.drawImage(c,0,0,d,h),a.toBlob(f=>{i(f)},e.type,s)},c.onerror=()=>{o(new Error("圖片載入失敗"))},c.src=URL.createObjectURL(e)})}calculateDimensions(e,n,r,s){if(e<=r&&n<=s)return{width:e,height:n};const i=e/n;return e>n?(e=r,n=e/i):(n=s,e=n*i),{width:Math.round(e),height:Math.round(n)}}async fileToBase64(e){return new Promise((n,r)=>{const s=new FileReader;s.onload=()=>{n(s.result)},s.onerror=()=>{r(new Error("文件讀取失敗"))},s.readAsDataURL(e)})}async processImage(e){try{console.log("🖼️ 開始處理圖片:",e.name);const n=this.validateFile(e);if(!n.valid)throw new Error(n.errors.join(", "));console.log("📐 壓縮圖片...");const r=await this.compressImage(e);console.log("🔤 轉換為 Base64...");const s=await this.fileToBase64(r);return console.log("✅ 圖片處理完成",{originalSize:(e.size/1024).toFixed(1)+"KB",compressedSize:(r.size/1024).toFixed(1)+"KB",reduction:((1-r.size/e.size)*100).toFixed(1)+"%"}),{success:!0,base64:s,blob:r,originalFile:e,stats:{originalSize:e.size,compressedSize:r.size,reduction:((1-r.size/e.size)*100).toFixed(1)}}}catch(n){return console.error("❌ 圖片處理失敗:",n),{success:!1,error:n.message}}}createAvatarPreview(e,n=80){const r=document.createElement("canvas"),s=r.getContext("2d"),i=new Image;return new Promise(o=>{i.onload=()=>{r.width=n,r.height=n,s.beginPath(),s.arc(n/2,n/2,n/2,0,Math.PI*2,!0),s.closePath(),s.clip(),s.drawImage(i,0,0,n,n),o(r.toDataURL())},i.src=e})}}const xl=new GM,qM=({currentAvatar:t="",onAvatarChange:e=()=>{},size:n="large"})=>{const[r,s]=x.useState(!1),[i,o]=x.useState(t),[a,l]=x.useState(!1),c=x.useRef(null),d=x.useRef(null),f={small:{container:"w-16 h-16",icon:"w-4 h-4",button:"w-5 h-5"},medium:{container:"w-20 h-20",icon:"w-5 h-5",button:"w-6 h-6"},large:{container:"w-24 h-24",icon:"w-6 h-6",button:"w-7 h-7"}}[n],y=async p=>{if(p){s(!0);try{console.log("📸 處理頭像上傳:",p.name);const m=await xl.processImage(p);if(m.success){const w=await xl.createAvatarPreview(m.base64);o(w),e(m.base64,m.stats),console.log("✅ 頭像上傳成功")}else throw new Error(m.error)}catch(m){console.error("❌ 頭像上傳失敗:",m),window.showNotification&&window.showNotification(`頭像上傳失敗: ${m.message}`,"error",5e3)}finally{s(!1),l(!1)}}},g=p=>{const m=p.target.files[0];y(m),p.target.value=""},_=p=>{p.preventDefault();const m=p.dataTransfer.files[0];y(m)},k=p=>{p.preventDefault()},v=()=>{o(""),e(""),l(!1)};return u.jsxs("div",{className:"relative",children:[u.jsxs("div",{className:`${f.container} relative rounded-full overflow-hidden bg-gray-100 dark:bg-gray-700 cursor-pointer group border-2 border-gray-200 dark:border-gray-600 hover:border-primary-400 dark:hover:border-primary-400 transition-colors`,onClick:()=>l(!a),onDrop:_,onDragOver:k,children:[i?u.jsx("img",{src:i,alt:"頭像",className:"w-full h-full object-cover"}):u.jsx("div",{className:"w-full h-full flex items-center justify-center text-gray-400 dark:text-gray-500",children:u.jsx(VM,{className:f.icon})}),r?u.jsx("div",{className:"absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center",children:u.jsx("div",{className:"animate-spin rounded-full h-6 w-6 border-2 border-white border-t-transparent"})}):u.jsx("div",{className:"absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-200 flex items-center justify-center",children:u.jsx(Dd,{className:`${f.icon} text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200`})})]}),a&&u.jsxs("div",{className:"absolute top-full left-0 mt-2 z-50 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden min-w-48",children:[u.jsxs("button",{onClick:()=>{var p;(p=c.current)==null||p.click(),l(!1)},className:"w-full px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-3 text-sm",children:[u.jsx(BM,{className:"w-4 h-4 text-gray-500"}),u.jsx("span",{children:"從相簿選擇"})]}),u.jsxs("button",{onClick:()=>{var p;(p=d.current)==null||p.click(),l(!1)},className:"w-full px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-3 text-sm md:hidden",children:[u.jsx(Dd,{className:"w-4 h-4 text-gray-500"}),u.jsx("span",{children:"拍照上傳"})]}),i&&u.jsxs("button",{onClick:v,className:"w-full px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-3 text-sm text-red-600 border-t border-gray-200 dark:border-gray-700",children:[u.jsx(wn,{className:"w-4 h-4"}),u.jsx("span",{children:"移除頭像"})]})]}),u.jsx("input",{ref:c,type:"file",accept:"image/*",onChange:g,className:"hidden"}),u.jsx("input",{ref:d,type:"file",accept:"image/*",capture:"environment",onChange:g,className:"hidden"}),a&&u.jsx("div",{className:"fixed inset-0 z-40",onClick:()=>l(!1)})]})},QM=({isOpen:t,onClose:e})=>{const{user:n,setUser:r}=De(),[s,i]=x.useState((n==null?void 0:n.nickname)||""),[o,a]=x.useState((n==null?void 0:n.avatar)||""),[l,c]=x.useState(s),[d,h]=x.useState(localStorage.getItem("notificationSound")!=="false"),[f,y]=x.useState(localStorage.getItem("desktopNotification")!=="false"),[g,_]=x.useState(!1);if(x.useEffect(()=>{t&&_(us.isEnabled())},[t]),x.useEffect(()=>{t&&(c((n==null?void 0:n.nickname)||""),a((n==null?void 0:n.avatar)||""))},[t,n]),!t)return null;const k=async()=>{try{const E={...n,nickname:l||"匿名用戶",avatar:o};r(E),console.log("💾 保存設定:",{nickname:l,avatar:o,notifications:notificationsEnabled}),e()}catch(E){console.error("保存設定失敗:",E)}},v=()=>{const E=!d;h(E),localStorage.setItem("notificationSound",E.toString()),j.success(E?"🔊 提示音已開啟":"🔇 提示音已關閉")},p=async()=>{try{if(f)y(!1),localStorage.setItem("desktopNotification","false"),j.success("🔕 桌面通知已關閉");else{if(!("Notification"in window)){j.error("❌ 此瀏覽器不支援通知");return}if(await Notification.requestPermission()!=="granted"){j.error("❌ 通知權限被拒絕");return}y(!0),localStorage.setItem("desktopNotification","true"),j.success("🔔 桌面通知已啟用"),window.showNotification&&window.showNotification("桌面通知已啟用！","success")}}catch(E){console.error("切換桌面通知設定失敗:",E),j.error("❌ 桌面通知設定失敗")}},m=async()=>{try{g?(await us.disable(),_(!1),j.success("🔕 推播通知已關閉")):(console.log("🚀 開始啟用 FCM 推播通知..."),await us.requestPermission(n==null?void 0:n.uid)?(_(!0),j.success("🚀 推播通知已啟用！",{duration:5e3}),window.showNotification&&window.showNotification("🚀 FCM 推播通知已啟用！現在即使關閉瀏覽器也能收到通知。","success",8e3)):j.error("❌ 推播通知 Token 獲取失敗"))}catch(E){console.error("FCM 推播設定失敗:",E);let C="❌ 推播通知設定失敗";E.message.includes("權限")?(C=`❌ ${E.message}`,window.showNotification&&window.showNotification("💡 如需重新啟用推播：請點擊網址列左側的鎖頭圖示 → 通知 → 允許","warning",1e4)):E.message.includes("HTTPS")?C="❌ 推播通知需要 HTTPS 環境":E.message.includes("不支援")?C=`❌ ${E.message}`:C=`❌ 推播通知設定失敗：${E.message}`,j.error(C,{duration:6e3})}},w=()=>{const E=`
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
    `.trim();window.showNotification?window.showNotification(E,"info",15e3):alert(E)},S=()=>{const E=`https://ui-avatars.com/api/?name=${encodeURIComponent(l||"匿名")}&background=56c596&color=fff&size=128`;a(E)};return u.jsx("div",{className:"fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4",children:u.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto",children:[u.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700",children:[u.jsx("h2",{className:"text-xl font-semibold text-gray-900 dark:text-white",children:"設定"}),u.jsx("button",{onClick:e,className:"p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors",children:u.jsx(wn,{className:"w-5 h-5 text-gray-500"})})]}),u.jsxs("div",{className:"p-6 space-y-6",children:[u.jsxs("div",{children:[u.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white mb-4",children:"個人資料"}),u.jsxs("div",{className:"flex items-center gap-4 mb-4",children:[u.jsx(qM,{currentAvatar:o||`https://ui-avatars.com/api/?name=${encodeURIComponent(l||"匿名")}&background=56c596&color=fff&size=96`,onAvatarChange:(E,C)=>{console.log("🖼️ 頭像已更新:",{stats:C}),a(E),window.showNotification&&C&&window.showNotification(`頭像已更新！壓縮率 ${C.reduction}%`,"success",3e3)},size:"large"}),u.jsxs("div",{className:"flex-1",children:[u.jsx("h4",{className:"font-medium text-gray-900 dark:text-white mb-1",children:"個人頭像"}),u.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400 mb-2",children:"點擊頭像上傳新圖片，支援拖拽上傳"}),u.jsx("div",{className:"flex gap-2",children:u.jsxs("button",{onClick:S,className:"flex items-center gap-2 px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-sm",children:[u.jsx(Dd,{className:"w-3 h-3"}),"生成隨機頭像"]})}),u.jsx("p",{className:"text-xs text-gray-400 dark:text-gray-500 mt-1",children:"支援 JPG、PNG、GIF、WebP，最大 5MB"})]})]}),u.jsxs("div",{children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",children:"暱稱"}),u.jsx("input",{type:"text",value:l,onChange:E=>c(E.target.value),className:"w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white",placeholder:"輸入你的暱稱",maxLength:20})]})]}),u.jsxs("div",{children:[u.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white mb-4",children:"通知設定"}),u.jsxs("div",{className:"flex items-center justify-between mb-4",children:[u.jsxs("div",{className:"flex items-center gap-3",children:[d?u.jsx(Cx,{className:"w-5 h-5 text-green-500"}):u.jsx(Ix,{className:"w-5 h-5 text-gray-400"}),u.jsxs("div",{children:[u.jsx("p",{className:"font-medium text-gray-900 dark:text-white",children:"提示音"}),u.jsx("p",{className:"text-sm text-gray-500",children:"收到新訊息時播放提示音"})]})]}),u.jsx("button",{onClick:v,className:`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${d?"bg-blue-500":"bg-gray-300"}`,children:u.jsx("span",{className:`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${d?"translate-x-6":"translate-x-1"}`})})]}),u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs("div",{className:"flex items-center gap-3",children:[f?u.jsx(RM,{className:"w-5 h-5 text-green-500"}):u.jsx(TM,{className:"w-5 h-5 text-gray-400"}),u.jsxs("div",{children:[u.jsx("p",{className:"font-medium text-gray-900 dark:text-white",children:"桌面通知"}),u.jsx("p",{className:"text-sm text-gray-500",children:"在瀏覽器中顯示通知泡泡"})]})]}),u.jsx("button",{onClick:p,className:`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${f?"bg-blue-500":"bg-gray-300"}`,children:u.jsx("span",{className:`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${f?"translate-x-6":"translate-x-1"}`})})]}),u.jsxs("div",{className:"mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg",children:[u.jsxs("div",{className:"flex items-center justify-between mb-3",children:[u.jsxs("div",{className:"flex items-center gap-3",children:[g?u.jsx(Mg,{className:"w-5 h-5 text-blue-500"}):u.jsx(Mg,{className:"w-5 h-5 text-gray-400"}),u.jsxs("div",{children:[u.jsx("p",{className:"font-medium text-gray-900 dark:text-white",children:"推播通知 (FCM)"}),u.jsx("p",{className:"text-sm text-gray-500",children:"即使關閉瀏覽器也能收到通知"})]})]}),u.jsx("button",{onClick:m,className:`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${g?"bg-blue-500":"bg-gray-300"}`,children:u.jsx("span",{className:`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${g?"translate-x-6":"translate-x-1"}`})})]}),u.jsxs("div",{className:"flex gap-2 text-xs",children:[u.jsx("button",{onClick:w,className:"px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors",children:"📖 權限指引"}),u.jsx("button",{onClick:async()=>{const E=await us.diagnoseEnvironment(),C=`
🔍 推播通知環境檢查：

✅ HTTPS: ${E.https?"是":"❌ 否"}
✅ Service Worker: ${E.serviceWorker?"支援":"❌ 不支援"}
✅ 推播管理: ${E.pushManager?"支援":"❌ 不支援"}  
✅ 通知 API: ${E.notification?"支援":"❌ 不支援"}
✅ Firebase Messaging: ${E.messaging?"已載入":"❌ 未載入"}
📋 權限狀態: ${E.permission}
🌐 瀏覽器: ${E.userAgent.includes("Chrome")?"Chrome":E.userAgent.includes("Firefox")?"Firefox":E.userAgent.includes("Safari")?"Safari":"其他"}
                    `.trim();window.showNotification?window.showNotification(C,"info",1e4):alert(C)},className:"px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors",children:"🔍 環境檢查"})]})]})]}),u.jsxs("div",{children:[u.jsx("h3",{className:"text-lg font-medium text-gray-900 dark:text-white mb-4",children:"其他"}),u.jsxs("div",{className:"space-y-2 text-sm text-gray-600 dark:text-gray-400",children:[u.jsx("p",{children:"• 版本: 1.0.0"}),u.jsx("p",{children:"• React 聊天室"}),u.jsx("p",{children:"• 支援即時通訊和檔案分享"})]})]})]}),u.jsxs("div",{className:"flex gap-3 p-6 border-t border-gray-200 dark:border-gray-700",children:[u.jsx("button",{onClick:e,className:"flex-1 px-4 py-2 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors",children:"取消"}),u.jsx("button",{onClick:k,className:"flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors",children:"保存"})]})]})})},kl=async()=>{console.log("🧹 開始清理過期的在線用戶...");try{const t=q(K,"users"),e=await Kt(t);if(!e.exists()){console.log("📭 沒有找到任何用戶資料");return}const n=e.val(),r=Date.now(),s=5*60*1e3;let i=0;for(const[o,a]of Object.entries(n)){if(!a)continue;const l=!a.lastSeen||r-a.lastSeen>s;a.isOnline&&l&&(console.log(`🗑️ 清理過期用戶: ${o} (${a.nickname||"未知"})`),a.isAnonymous?(await dc(q(K,`users/${o}`)),console.log(`✅ 已刪除匿名用戶: ${o}`)):(await m2(q(K,`users/${o}`),{isOnline:!1,lastSeen:r}),console.log(`✅ 已將註冊用戶設為離線: ${o}`)),i++)}return console.log(`🎉 清理完成！共清理了 ${i} 個過期用戶`),i}catch(t){throw console.error("❌ 清理過期用戶失敗:",t),t}},YM=()=>{console.log("⏰ 啟動定期清理服務..."),kl();const t=setInterval(kl,5*60*1e3);return()=>{console.log("🛑 停止定期清理服務"),clearInterval(t)}},mc=()=>{const{user:t}=De(),[e,n]=x.useState({}),[r,s]=x.useState(0),i=c=>Object.values(c).reduce((d,h)=>d+(parseInt(h)||0),0);x.useEffect(()=>{if(!(t!=null&&t.uid)){n({}),s(0);return}const c=q(K,`userUnreadCounts/${t.uid}`);return Mr(c,d=>{if(!d.exists()){n({}),s(0);return}const h=d.val(),f={};let y=0;Object.entries(h).forEach(([g,_])=>{const k=parseInt(_)||0;f[g]=k,y+=k}),console.log("📊 未讀訊息更新:",{counts:f,total:y}),n(f),s(g=>{const _=i(f);return g===0&&_===0?0:g>0&&_===0?g:_}),setTimeout(()=>{const g=Object.values(f).reduce((_,k)=>_+(parseInt(k)||0),0);g!==y&&(console.warn("⚠️ Firebase監聽器數據不一致，重新同步"),s(g))},100)}),()=>{Rw(c)}},[t==null?void 0:t.uid]);const o=async c=>{if(!(t!=null&&t.uid)||!c){console.warn("❌ markAsRead: 缺少必要參數",{userUid:t==null?void 0:t.uid,chatPartnerId:c});return}const d=e[c]||0;if(console.log(`🔄 開始標記 ${c} 為已讀:`,{currentCount:d,unreadCountsKeys:Object.keys(e),totalUnread:r}),d===0){console.log(`⏭️ ${c} 已經沒有未讀訊息，跳過處理`);return}try{const h=q(K,`userUnreadCounts/${t.uid}/${c}`);await dc(h);const f=q(K,`userLastRead/${t.uid}/${c}`);await Gr(f,{timestamp:Date.now()}),n(y=>{console.log(`📝 更新本地狀態 - 刪除 ${c}:`,{beforeDelete:y,targetKey:c,targetCount:y[c]});const g={...y};delete g[c];const _=i(g);return console.log("🔢 重新計算總數:",{oldCounts:y,newCounts:g,oldTotal:r,newTotal:_}),s(_),g}),console.log(`✅ 已讀標記完成: ${c}`)}catch(h){console.error(`❌ 標記已讀失敗 (${c}):`,h),h.code&&console.error("錯誤代碼:",h.code)}},a=async c=>{if(!(!(t!=null&&t.uid)||!c))try{console.log(`📈 增加與 ${c} 的未讀數量`);const d=q(K,`userUnreadCounts/${t.uid}/${c}`);let h=0;await T2(d,f=>(h=(f||0)+1,console.log(`  舊數量: ${f}, 新數量: ${h}`),h)),n(f=>{const y={...f,[c]:h},g=i(y);return console.log(`� 更新未讀計數: ${c} -> ${h}, 總數: ${g}`),s(g),y})}catch(d){console.error("增加未讀數量失敗:",d),(d==null?void 0:d.code)==="PERMISSION_DENIED"&&console.warn("⚠️ Firebase 規則拒絕寫入 userUnreadCounts，請確認規則允許: /userUnreadCounts/${user.uid}/${chatPartnerId}")}},l=()=>{const c=Object.values(e).reduce((d,h)=>d+(parseInt(h)||0),0);return console.log("🔄 重新計算總未讀數:",{unreadCounts:e,calculatedTotal:c,currentTotal:r}),c!==r&&(console.log(`⚠️ 總未讀數不一致，修正: ${r} -> ${c}`),s(c)),c};return x.useEffect(()=>{if(typeof window<"u")return window.recalculateTotal=l,window.debugUnreadCounts=()=>{const c={unreadCounts:e,unreadCountsEntries:Object.entries(e),totalUnread:r,calculatedTotal:i(e)};return console.log("🔍 未讀計數調試:",c),console.table(e),c},window.clearAllUnread=()=>(console.log("🧹 強制清空所有未讀計數"),n({}),s(0),{success:!0,message:"已清空所有未讀計數"}),window.clearSpecificUnread=c=>(console.log(`🎯 清除特定用戶 ${c} 的未讀計數`),n(d=>{const h={...d};delete h[c];const f=i(h);return s(f),console.log("清除後狀態:",{newCounts:h,newTotal:f}),h}),{success:!0,message:`已清除 ${c} 的未讀計數`}),console.log("✅ 調試函數已設置到 window 物件:",{recalculateTotal:typeof window.recalculateTotal,debugUnreadCounts:typeof window.debugUnreadCounts}),()=>{delete window.recalculateTotal,delete window.debugUnreadCounts}},[e,r,l]),{unreadCounts:e,totalUnread:r,markAsRead:o,incrementUnread:a,getUnreadCount:c=>e[c]||0,recalculateTotal:l}};function Nx({count:t=0,className:e=""}){if(t===0)return null;const n=t>99?"99+":t.toString();return u.jsx("span",{className:`absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold 
                  min-w-[18px] h-[18px] rounded-full flex items-center justify-center 
                  px-1 ${e}`,style:{fontSize:"10px"},children:n})}const XM=({isOpen:t,onConfirm:e,onReject:n,onClose:r})=>{const[s,i]=x.useState(!1);if(!t)return null;const o=()=>{i(!0),setTimeout(()=>{n(),i(!1)},200)},a=()=>{i(!0),setTimeout(()=>{e(),i(!1)},200)},l=()=>{i(!0),setTimeout(()=>{r(),i(!1)},200)};return u.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center",children:[u.jsx("div",{className:`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-200 ${s?"opacity-0":"opacity-100"}`,onClick:l}),u.jsxs("div",{className:`relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 mx-4 max-w-md w-full transform transition-all duration-200 ${s?"scale-95 opacity-0":"scale-100 opacity-100"}`,children:[u.jsx("button",{onClick:l,className:"absolute top-4 right-4 p-2 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors",children:u.jsx(wn,{className:"w-5 h-5"})}),u.jsx("div",{className:"flex justify-center mb-6",children:u.jsx("div",{className:"w-20 h-20 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center",children:u.jsx(Sx,{className:"w-10 h-10 text-amber-600 dark:text-amber-400"})})}),u.jsx("h2",{className:"text-2xl font-bold text-gray-900 dark:text-white text-center mb-4",children:"年齡驗證"}),u.jsxs("div",{className:"text-center mb-8",children:[u.jsx("p",{className:"text-gray-600 dark:text-gray-300 mb-4 leading-relaxed",children:"你即將進入約炮區，此區域包含成人內容。"}),u.jsx("p",{className:"text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2",children:"請確認你是否已滿 18 歲？"}),u.jsx("p",{className:"text-sm text-gray-500 dark:text-gray-400",children:"未滿 18 歲的用戶將自動跳轉至閒聊區"})]}),u.jsxs("div",{className:"flex gap-4",children:[u.jsx("button",{onClick:o,className:"flex-1 px-6 py-3 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-semibold rounded-xl transition-colors duration-200",children:"否，未滿 18 歲"}),u.jsx("button",{onClick:a,className:"flex-1 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl transition-colors duration-200",children:"是，已滿 18 歲"})]}),u.jsx("p",{className:"text-xs text-gray-400 dark:text-gray-500 text-center mt-4",children:"LalaLand 致力於為用戶提供安全的交流環境"})]})]})},JM=()=>{const{user:t,isAnonymousUser:e}=De(),{currentRoom:n,setCurrentRoom:r,sidebarOpen:s,setSidebarOpen:i,darkMode:o,toggleDarkMode:a,onlineUsers:l}=Mt(),c=_o(),d=e(),[h,f]=x.useState(!1),[y,g]=x.useState(!1),{totalUnread:_}=mc(),k=async()=>{try{if(t&&t.isAnonymous){console.log("🗑️ 匿名用戶登出 - 清理所有資料");const w=q(K,`users/${t.uid}`);await dc(w),console.log("✅ 匿名用戶資料已刪除")}await ZI(an),j.success("已登出")}catch(w){console.error("登出失敗:",w),j.error("登出失敗")}},v=async()=>{try{j.loading("正在清理過期用戶...",{id:"cleanup"});const w=await kl();j.success(`已清理 ${w} 個過期用戶`,{id:"cleanup"})}catch{j.error("清理失敗",{id:"cleanup"})}},p=[{id:"chat",name:"閒聊區",icon:Fr,tip:"歡迎隨意聊聊、發問、抒發生活大小事"},{id:"love",name:"找伴區",icon:$f,tip:"你正在找伴專區，請多用心互動，彼此尊重"},{id:"sex",name:"約炮區",icon:bx,tip:"匿名聊性、約炮自由，但請勿冒犯他人"}],m=`
    ${s?"translate-x-0":"-translate-x-full"}
    md:translate-x-0 fixed md:relative left-0 top-0 h-full w-80 bg-white/80 dark:bg-dark-card/80 
    backdrop-blur-sm border-r border-gray-200 dark:border-gray-700 z-30 transition-transform duration-300
    pt-16 md:pt-0
  `;return u.jsxs(u.Fragment,{children:[s&&u.jsx("div",{className:"md:hidden fixed inset-0 bg-black/50 z-20",onClick:()=>i(!1)}),u.jsx("div",{className:m,children:u.jsxs("div",{className:"flex flex-col h-full",children:[u.jsxs("div",{className:"p-6 border-b border-gray-200 dark:border-gray-700",children:[u.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[u.jsx("img",{src:(t==null?void 0:t.avatar)||`https://ui-avatars.com/api/?name=${t==null?void 0:t.nickname}&background=2877b9&color=fff`,alt:t==null?void 0:t.nickname,className:"w-12 h-12 rounded-full border-2 border-sea-blue"}),u.jsxs("div",{children:[u.jsx("h3",{className:"font-semibold text-gray-800 dark:text-dark-text",children:(t==null?void 0:t.nickname)||"用戶"}),u.jsx("p",{className:"text-sm text-gray-500",children:t!=null&&t.isAnonymous?"匿名用戶":"已註冊用戶"})]})]}),u.jsxs("div",{className:"text-sm text-gray-600 dark:text-gray-400",children:["在線成員: ",Object.keys(l).length," 人"]}),d&&u.jsxs("div",{className:"mt-4 p-4 bg-gradient-to-r from-sea-light to-accent-orange rounded-lg border border-sea-blue/20",children:[u.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[u.jsx(fo,{className:"w-5 h-5 text-sea-blue"}),u.jsx("span",{className:"font-medium text-sea-dark",children:"升級你的體驗"})]}),u.jsx("p",{className:"text-xs text-sea-dark/80 mb-3",children:"註冊帳號解鎖完整功能：發送訊息、私訊、上傳圖片等"}),u.jsx("button",{onClick:()=>c("/login"),className:"w-full px-3 py-2 bg-sea-blue hover:bg-sea-dark text-white text-sm font-medium rounded-lg transition-colors",children:"立即註冊/登入"})]})]}),u.jsxs("div",{className:"flex-1 overflow-y-auto",children:[u.jsxs("div",{className:"p-4",children:[u.jsx("h4",{className:"text-sm font-medium text-gray-500 dark:text-gray-400 mb-3",children:"聊天室"}),u.jsxs("div",{className:"space-y-1",children:[p.map(w=>u.jsxs("button",{onClick:()=>{w.id==="sex"?sessionStorage.getItem("ageVerified")?(r(w.id),i(!1)):g(!0):(r(w.id),i(!1))},className:`sidebar-item w-full ${n===w.id?"active":""}`,children:[u.jsx(w.icon,{className:"w-5 h-5"}),u.jsx("span",{className:"font-medium",children:w.name})]},w.id)),u.jsxs("button",{onClick:()=>{r("private"),i(!1)},className:`sidebar-item w-full ${n==="private"?"active":""} relative`,children:[u.jsx(Fr,{className:"w-5 h-5"}),u.jsx("span",{className:"font-medium",children:"私人訊息"}),u.jsx(Nx,{count:_})]})]})]}),u.jsxs("div",{className:"p-4 border-t border-gray-200 dark:border-gray-700",children:[u.jsxs("div",{className:"flex items-center justify-between mb-3",children:[u.jsx("h4",{className:"text-sm font-medium text-gray-500 dark:text-gray-400",children:"在線成員"}),u.jsx("button",{onClick:v,className:"text-xs px-2 py-1 rounded bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-600 dark:text-gray-400",title:"清理過期用戶",children:"🧹"})]}),u.jsx("div",{className:"space-y-2",children:Object.entries(l).map(([w,S])=>u.jsxs("div",{className:"flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700",children:[u.jsx("img",{src:S.avatar||`https://ui-avatars.com/api/?name=${S.nickname}&background=56c596&color=fff`,alt:S.nickname,className:"w-8 h-8 rounded-full"}),u.jsxs("div",{children:[u.jsx("p",{className:"text-sm font-medium text-gray-700 dark:text-gray-300",children:S.nickname}),u.jsxs("div",{className:"flex items-center gap-1",children:[u.jsx("div",{className:"w-2 h-2 bg-accent-green rounded-full"}),u.jsx("span",{className:"text-xs text-gray-500",children:"在線"})]})]})]},w))})]})]}),u.jsx("div",{className:"p-4 border-t border-gray-200 dark:border-gray-700",children:u.jsxs("div",{className:"space-y-1",children:[u.jsxs("button",{onClick:a,className:"sidebar-item w-full",children:[o?u.jsx(Ex,{className:"w-5 h-5"}):u.jsx(xx,{className:"w-5 h-5"}),u.jsx("span",{children:o?"淺色模式":"深色模式"})]}),u.jsxs("button",{onClick:()=>f(!0),className:"sidebar-item w-full transition-all duration-300","data-settings-button":!0,children:[u.jsx(WM,{className:"w-5 h-5"}),u.jsx("span",{children:"設定"})]}),u.jsxs("button",{onClick:k,className:"sidebar-item w-full text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20",children:[u.jsx(OM,{className:"w-5 h-5"}),u.jsx("span",{children:"登出"})]})]})})]})}),u.jsx(QM,{isOpen:h,onClose:()=>f(!1)}),u.jsx(XM,{isOpen:y,onConfirm:()=>{r("sex"),i(!1),g(!1),j.success("歡迎進入約炮區！請遵守社群規範。")},onReject:()=>{r("chat"),i(!1),g(!1),j.error("未滿18歲無法進入約炮區，已自動跳轉至閒聊區。")},onClose:()=>{g(!1)}})]})},ZM=t=>({casual:"日常閒聊",dating:"約會交友",hookup:"約砲專區",confession:"匿名告白",general:"一般討論",random:"隨機聊天"})[t]||`聊天室 ${t}`,ej=t=>{const{user:e}=De(),{setMessages:n,addMessage:r,clearMessages:s,currentRoom:i}=Mt(),o=x.useRef(0);return x.useEffect(()=>{if(!e||!t){console.log("⚠️ useFirebaseChat: 缺少必要參數",{user:!!e,roomId:t});return}console.log(`🚀 開始監聽房間 ${t} 的訊息...`),s();const l=q(K,`groupChats/${t}/messages`),c=Mr(l,d=>{try{const h=d.val();if(console.log(`📝 房間 ${t} 收到資料:`,h),h){const f=Object.entries(h).map(([_,k])=>(Math.random()<.1&&console.log(`⏰ 訊息 ${_} 時間戳:`,{timestamp:k.timestamp,time:k.time,rawMessage:k}),{id:_,...k,timestamp:k.timestamp||k.time||Date.now()}));f.sort((_,k)=>{const v=_.timestamp||_.time||0,p=k.timestamp||k.time||0;return v-p});const y=f.length,g=o.current;y>g&&g>0&&f.slice(g).forEach(k=>{const v=k.from||k.userId||k.uid;if(v!==e.uid){const p=i===t,m=k.user||k.nickname||"匿名用戶",w=ZM(t);console.log("� 檢查群組通知條件:",{currentRoom:i,roomId:t,isCurrentlyInThisRoom:p,messageFrom:v,senderName:m}),p?console.log(`🔇 不顯示通知 - 用戶正在 ${w} 房間`):(console.log(`�🔔 收到來自 ${m} 的新群組訊息 (非當前房間 ${w}):`,k.text),Oi.showMessageNotification(`${m} (${w})`,k.text,"group"),Oi.playNotificationSound(),window.showNotification&&window.showNotification(`🏠 ${m} (${w}): ${k.text}`,"info",6e3),Math.random()<.3&&Oi.playNotificationSound())}}),o.current=y,console.log(`✅ 房間 ${t} 載入了 ${f.length} 條訊息`),n(f)}else console.log(`📭 房間 ${t} 沒有訊息`),o.current=0,n([])}catch(h){console.error(`❌ 房間 ${t} 載入訊息時出錯:`,h),n([])}},d=>{console.error(`❌ Firebase onValue 錯誤 (房間 ${t}):`,d),d.code==="PERMISSION_DENIED"&&console.error("🚫 權限被拒絕 - 請檢查 Firebase 安全規則!")});return()=>{try{console.log(`🛑 停止監聽房間 ${t} 的訊息`),c()}catch(d){console.error("Firebase unsubscribe error:",d)}}},[e,t,n,s]),{sendMessage:async l=>{if(!e||!t)return;const c=q(K,`groupChats/${t}/messages`),d={...l,sender:{uid:e.uid,nickname:e.nickname||"匿名用戶",avatar:e.avatar||null},timestamp:Date.now(),room:t};try{await Tw(c,d)}catch(h){throw console.error("發送訊息失敗:",h),h}}}},tj=()=>{const{user:t}=De(),{setOnlineUsers:e}=Mt();x.useEffect(()=>{const n=async()=>{if(!t){console.log("❌ 沒有登入用戶，無法設定在線狀態");return}console.log("👤 開始為用戶設定在線狀態:",t.uid,t.email||"匿名用戶"),await(async()=>{try{const l=q(K,`users/${t.uid}`),c=q(K,`users/${t.uid}/isOnline`),d=q(K,`users/${t.uid}/lastSeen`);console.log("📖 讀取用戶現有資料...");const f=(await Kt(l)).val()||{};console.log("📝 現有用戶資料:",f),console.log("📝 當前登入用戶資料:",{uid:t.uid,email:t.email,nickname:t.nickname||t.displayName,isAnonymous:t.isAnonymous}),await Gr(l,{...f,isOnline:!0,lastSeen:_g(),email:t.email||f.email||"",nickname:t.nickname||t.displayName||f.nickname||"匿名用戶",uid:t.uid,isAnonymous:t.isAnonymous||!1}),console.log("✅ 用戶在線狀態已設定"),t.isAnonymous?(console.log("🔒 匿名用戶 - 離線時將自動刪除所有資料"),await ou(l).remove()):(console.log("👤 註冊用戶 - 離線時保留資料但設為離線"),await ou(c).set(!1),await ou(d).set(_g()))}catch(l){console.error("❌ 設定在線狀態失敗:",l)}})(),await kl();const i=YM(),o=q(K,"users"),a=Mr(o,l=>{try{const c=l.val();if(c){const d={},h=Date.now(),f=2*60*1e3;Object.entries(c).forEach(([y,g])=>{g&&g.isOnline&&(g.lastSeen&&h-g.lastSeen<f?(console.log(`👥 發現活躍在線用戶: ${y} - ${g.nickname||g.email||"匿名"}`),d[y]={uid:y,nickname:g.nickname||g.email||"匿名用戶",email:g.email||"",isOnline:g.isOnline,lastSeen:g.lastSeen,isAnonymous:g.isAnonymous||!1}):console.log(`⏰ 用戶 ${y} 標示在線但非活躍狀態，跳過顯示`))}),console.log("📊 所有在線用戶:",Object.keys(d)),e(d)}else console.log("📭 沒有找到任何用戶資料"),e({})}catch(c){console.error("❌ 處理在線用戶資料失敗:",c)}});return()=>{console.log("🧹 清理在線用戶監聽器和定期清理服務"),a(),i()}};let r=null;return n().then(s=>{r=s}),()=>{r&&typeof r=="function"&&r()}},[t==null?void 0:t.uid,e])},Tx=async t=>{if(!t)throw new Error("沒有選擇檔案");console.log("📸 開始處理聊天圖片:",t.name,(t.size/1024).toFixed(1)+"KB");try{const e=await xl.processImage(t);if(!e.success)throw new Error(e.error);console.log("📐 圖片壓縮完成:",{原始大小:(t.size/1024).toFixed(1)+"KB",壓縮後:(e.blob.size/1024).toFixed(1)+"KB",壓縮率:e.stats.reduction+"%"});const n=/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);let r=e.blob;n&&e.blob.size>200*1024&&(console.log("📱 手機環境，進行額外壓縮"),r=await xl.compressImage(e.originalFile,300,300,.6),console.log("📱 手機壓縮後大小:",(r.size/1024).toFixed(1)+"KB"));const s=Date.now(),i=Math.random().toString(36).substr(2,9),o=`chatImages/${s}_${i}_compressed.jpg`,a=UA(wl,o),l=await LA(a,r),c=await FA(l.ref);if(console.log("✅ 圖片上傳成功:",c),window.showNotification){const d=((1-r.size/t.size)*100).toFixed(1);window.showNotification(`圖片已壓縮 ${d}% 並上傳成功`,"success",3e3)}return c}catch(e){throw console.error("❌ 上傳圖片失敗:",e),new Error(e.message||"上傳失敗，請稍後再試")}},Rx=t=>new Promise(e=>{const n=new FileReader;n.onload=r=>e(r.target.result),n.readAsDataURL(t)}),Px=({message:t,isOwn:e,onReply:n})=>{const{setCurrentPrivateChat:r,setCurrentRoom:s}=Mt(),{user:i}=De(),[o,a]=x.useState(!1),[l,c]=x.useState(t.liked||!1),d=p=>{p.preventDefault(),p.stopPropagation();const m=h();m.uid!==(i==null?void 0:i.uid)&&(console.log("👆 頭像點擊 - 開始私聊:",m),r({roomId:`private_${m.uid}`,recipientId:m.uid,nickname:m.nickname,avatar:m.avatar,isOnline:!1}),s("private"))},h=()=>t.sender?{nickname:t.sender.nickname||t.sender.displayName||t.sender.name,avatar:t.sender.avatar||t.sender.photoURL,uid:t.sender.uid}:{nickname:t.user||t.senderName||t.nickname||t.userName||"匿名用戶",avatar:t.avatar||t.senderAvatar,uid:t.from||t.senderId||t.userId||t.uid},f=p=>{p.stopPropagation(),c(!l),console.log("💖 按讚訊息:",t.id,!l)},y=p=>{p.stopPropagation();try{if(n&&typeof n=="function"){const m=t.text||t.content||t.message||t.msg||"",w=h();n({id:t.id,text:m,sender:w.nickname}),console.log("💬 回覆訊息:",t.id)}else console.warn("⚠️ onReply 函數未提供或不是函數")}catch(m){console.error("回覆功能錯誤:",m),alert("回覆功能暫時無法使用，請稍後再試")}};if(!t)return null;const g=h();!g.nickname&&!g.uid&&console.warn("訊息缺少發送者信息:",t);const _=p=>{if(!p)return"";const m=/(https?:\/\/[^\s]+)/g;return p.split(m).map((S,E)=>S.match(m)?u.jsx("a",{href:S,target:"_blank",rel:"noopener noreferrer",className:"text-blue-500 hover:text-blue-600 underline break-all",onClick:C=>C.stopPropagation(),children:S},E):S)},k=p=>{const m=p||t.timestamp||t.time;if(!m)return"未知時間";let w;return typeof m=="number"?w=m:typeof m=="string"?w=new Date(m).getTime():m&&typeof m=="object"&&m.seconds?w=m.seconds*1e3+(m.nanoseconds||0)/1e6:w=Date.now(),isNaN(w)?"時間錯誤":new Date(w).toLocaleString("zh-TW",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1})},v=()=>{if(t.type==="vote")return u.jsx(nj,{voteData:t.content});const p=t.text||t.content||t.message||t.msg||"";return u.jsxs("div",{children:[t.image&&u.jsx("img",{src:t.image,alt:"分享的圖片",className:"max-w-sm rounded-lg mb-2 cursor-pointer hover:opacity-90 transition-opacity",onClick:()=>window.open(t.image,"_blank")}),p&&u.jsx("div",{className:"break-words",children:_(p)})]})};return u.jsx("div",{className:`flex ${e?"justify-end":"justify-start"} group`,onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),children:u.jsxs("div",{className:`flex items-start gap-3 max-w-[70%] ${e?"flex-row-reverse":""}`,children:[u.jsx("img",{src:g.avatar||`https://ui-avatars.com/api/?name=${encodeURIComponent(g.nickname||"匿名")}&background=56c596&color=fff`,alt:g.nickname||"匿名用戶",className:`w-8 h-8 rounded-full flex-shrink-0 mt-1 ${g.uid!==(i==null?void 0:i.uid)?"cursor-pointer hover:ring-2 hover:ring-sea-blue/50 transition-all duration-200":""}`,onClick:g.uid!==(i==null?void 0:i.uid)?d:void 0,title:g.uid!==(i==null?void 0:i.uid)?`點擊與 ${g.nickname} 私聊`:""}),u.jsxs("div",{className:`flex flex-col ${e?"items-end":"items-start"}`,children:[u.jsxs("p",{className:"text-xs text-gray-500 mb-1 px-1",children:[g.nickname||"匿名用戶",e&&u.jsx("span",{className:"text-blue-500",children:" (你)"})]}),u.jsxs("div",{className:`
              message-bubble relative
              ${e?"message-self bg-sea-blue dark:bg-green-600 text-white":"message-other bg-white dark:bg-green-700 text-gray-700 dark:text-green-100 border border-gray-200 dark:border-green-600"}
            `,children:[v(),u.jsx("div",{className:`text-xs mt-1 ${e?"text-sea-light dark:text-green-200":"text-gray-400 dark:text-green-300"}`,children:k(t.timestamp||t.time)})]}),o&&u.jsxs("div",{className:`flex items-center gap-1 mt-1 opacity-0 group-hover:opacity-100 transition-opacity ${e?"flex-row-reverse":""}`,children:[u.jsx("button",{className:"p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors",onClick:f,title:"按讚",children:u.jsx($f,{className:`w-3 h-3 transition-colors ${l?"text-red-500 fill-red-500":"text-gray-400 hover:text-red-500"}`})}),u.jsx("button",{className:"p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors",onClick:y,title:"回覆",children:u.jsx(Fr,{className:"w-3 h-3 text-gray-400 hover:text-blue-500"})})]})]})]})})},nj=({voteData:t})=>{const[e,n]=x.useState(null),r=(t==null?void 0:t.votes)||[],s=(t==null?void 0:t.options)||[],i=(t==null?void 0:t.question)||"投票問題",o=r.reduce((l,c)=>l+(c||0),0),a=l=>{e===null&&n(l)};return u.jsxs("div",{className:"bg-gray-50 dark:bg-green-900/30 rounded-lg p-4 min-w-[250px]",children:[u.jsxs("h4",{className:"font-medium mb-3 text-gray-800 dark:text-gray-200",children:["📊 ",i]}),u.jsx("div",{className:"space-y-2",children:s.map((l,c)=>{const d=r[c]||0,h=o>0?d/o*100:0,f=e===c;return u.jsxs("button",{onClick:()=>a(c),disabled:e!==null,className:`
                w-full text-left p-3 rounded-lg border transition-colors relative overflow-hidden
                ${f?"border-sea-blue dark:border-green-400 bg-sea-light dark:bg-green-800 text-sea-dark dark:text-green-100":"border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500"}
                ${e!==null?"cursor-default":"cursor-pointer hover:bg-gray-100 dark:hover:bg-green-800/50"}
              `,children:[e!==null&&u.jsx("div",{className:"absolute inset-0 bg-sea-blue/10 dark:bg-green-500/20 transition-all duration-500",style:{width:`${h}%`}}),u.jsxs("div",{className:"relative flex justify-between items-center",children:[u.jsx("span",{children:l}),e!==null&&u.jsxs("span",{className:"text-sm font-medium",children:[d," (",h.toFixed(1),"%)"]})]})]},c)})}),e!==null&&u.jsxs("p",{className:"text-xs text-gray-500 mt-2 text-center",children:["總投票數: ",o]})]})},rj=({onEmojiSelect:t,onClose:e})=>{const n=["😀","😃","😄","😁","😆","😅","😂","🤣","😊","😇","🙂","🙃","😉","😌","😍","🥰","😘","😗","😙","😚","😋","😛","😝","😜","🤪","🤨","🧐","🤓","😎","🤩","🥳","😏","😒","😞","😔","😟","😕","🙁","☹️","😣","😖","😫","😩","🥺","😢","😭","😤","😠","😡","🤬","🤯","😳","🥵","🥶","😱","😨","😰","😥","😓","🤗","🤔","🤭","🤫","🤥","😶","😐","😑","😬","🙄","😯","😦","😧","😮","😲","🥱","😴","🤤","😪","😵","🤐","🥴","🤢","🤮","🤧","😷","🤒","🤕","🤑","🤠","😈","👿","👹","👺","🤡","💩","👻","💀","☠️","👽","👾","🤖","🎃","😺","😸","😹","😻","😼","😽","🙀","😿","😾","❤️","🧡","💛","💚","💙","💜","🖤","🤍","🤎","💔","❣️","💕","💞","💓","💗","💖","💘","💝","💟","☮️","✝️","☪️","🕉️","☸️","✡️","🔯","🕎","☯️","☦️","🛐","⛎","♈","♉","♊","♋","♌","♍","♎","♏","♐","♑"];return u.jsxs("div",{className:"absolute bottom-full left-0 mb-2 bg-white dark:bg-dark-card rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-4 z-50",children:[u.jsx("div",{className:"grid grid-cols-8 gap-2 max-w-xs max-h-40 overflow-y-auto custom-scrollbar",children:n.map((r,s)=>u.jsx("button",{onClick:()=>t(r),className:"text-xl hover:bg-gray-100 dark:hover:bg-gray-700 rounded p-1 transition-colors",children:r},s))}),u.jsx("button",{onClick:e,className:"mt-2 text-xs text-gray-500 hover:text-gray-700 dark:hover:text-gray-300",children:"關閉"})]})},sj=({onSubmit:t,onClose:e})=>{const[n,r]=x.useState(""),[s,i]=x.useState(["",""]),o=()=>{s.length<6&&i([...s,""])},a=(d,h)=>{const f=[...s];f[d]=h,i(f)},l=d=>{if(s.length>2){const h=s.filter((f,y)=>y!==d);i(h)}},c=()=>{const d=s.filter(h=>h.trim());if(!n.trim()){alert("請輸入投票問題");return}if(d.length<2){alert("至少需要兩個選項");return}t({question:n.trim(),options:d,votes:new Array(d.length).fill(0),voters:{}})};return u.jsxs("div",{className:"absolute bottom-full left-0 right-0 mb-2 bg-white dark:bg-dark-card rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-4 z-50",children:[u.jsxs("div",{className:"flex justify-between items-center mb-4",children:[u.jsx("h3",{className:"font-semibold text-gray-800 dark:text-gray-200",children:"建立投票"}),u.jsx("button",{onClick:e,className:"text-gray-500 hover:text-gray-700 dark:hover:text-gray-300",children:u.jsx(wn,{className:"w-5 h-5"})})]}),u.jsxs("div",{className:"mb-4",children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",children:"投票問題"}),u.jsx("input",{type:"text",value:n,onChange:d=>r(d.target.value),placeholder:"輸入你的問題...",className:`w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                     focus:ring-2 focus:ring-sea-blue/20 focus:border-sea-blue 
                     bg-white dark:bg-gray-700 dark:text-gray-200 outline-none`})]}),u.jsxs("div",{className:"mb-4",children:[u.jsx("label",{className:"block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",children:"選項"}),u.jsx("div",{className:"space-y-2",children:s.map((d,h)=>u.jsxs("div",{className:"flex gap-2",children:[u.jsx("input",{type:"text",value:d,onChange:f=>a(h,f.target.value),placeholder:`選項 ${h+1}`,className:`flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                           focus:ring-2 focus:ring-sea-blue/20 focus:border-sea-blue 
                           bg-white dark:bg-gray-700 dark:text-gray-200 outline-none`}),s.length>2&&u.jsx("button",{onClick:()=>l(h),className:`px-3 py-2 text-red-500 hover:text-red-700 hover:bg-red-50 
                             dark:hover:bg-red-900/20 rounded-lg transition-colors`,children:u.jsx(wn,{className:"w-4 h-4"})})]},h))}),s.length<6&&u.jsxs("button",{onClick:o,className:"mt-2 flex items-center gap-2 text-sm text-sea-blue hover:text-sea-dark transition-colors",children:[u.jsx(UM,{className:"w-4 h-4"}),"新增選項"]})]}),u.jsxs("div",{className:"flex gap-2 justify-end",children:[u.jsx("button",{onClick:e,className:`px-4 py-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 
                     dark:hover:text-gray-200 border border-gray-300 dark:border-gray-600 
                     rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors`,children:"取消"}),u.jsx("button",{onClick:c,className:`px-4 py-2 bg-sea-blue hover:bg-sea-dark text-white rounded-lg 
                     transition-colors font-medium`,children:"建立投票"})]})]})},ij=({roomId:t})=>{var L,_e;const{user:e,isAnonymousUser:n}=De(),{messages:r,setCurrentRoom:s}=Mt(),{sendMessage:i}=ej(t),o=_o(),a=n(),[l,c]=x.useState(""),[d,h]=x.useState(!1),[f,y]=x.useState(!1),[g,_]=x.useState(null),[k,v]=x.useState(!1),[p,m]=x.useState(null),w=x.useRef(null),S=x.useRef(null);x.useEffect(()=>{const be=setTimeout(()=>{if(w.current){const b=w.current.parentElement;b&&(b.scrollTop=b.scrollHeight)}},100);return()=>clearTimeout(be)},[r]),tj();const E={chat:{name:"閒聊區",tip:"歡迎隨意聊聊、發問、抒發生活大小事。"},love:{name:"找伴區",tip:"你正在找伴專區，請多用心互動，彼此尊重。"},sex:{name:"約炮區",tip:"匿名聊性、約炮自由，但請勿冒犯他人。"}},C=()=>{var V;(V=w.current)==null||V.scrollIntoView({behavior:"smooth"})};x.useEffect(()=>{C()},[r]);const T=async V=>{var be;if(V.preventDefault(),!(!l.trim()&&!g))try{let b=null;g&&((be=S.current)!=null&&be.files[0])&&(v(!0),b=await Tx(S.current.files[0]));const P={type:"text",content:l.trim(),image:b};await i(P),c(""),_(null),h(!1),S.current&&(S.current.value=""),j.success("訊息已發送")}catch(b){j.error("發送失敗: "+b.message)}finally{v(!1)}},D=async V=>{const be=V.target.files[0];if(be)try{const b=await Rx(be);_(b)}catch{j.error("圖片預覽失敗")}},A=V=>{c(be=>be+V),h(!1)},Q=V=>{m(V),c(`@${V.sender} `)},me=()=>{m(null),c("")},rt=r;return u.jsxs("div",{className:"flex flex-col h-screen pt-16 md:pt-0",children:[u.jsxs("div",{className:"bg-white/70 dark:bg-dark-card/70 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 p-4",children:[u.jsx("h2",{className:"text-xl font-semibold text-gray-800 dark:text-dark-text mb-1",children:((L=E[t])==null?void 0:L.name)||"聊天室"}),((_e=E[t])==null?void 0:_e.tip)&&u.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:E[t].tip})]}),u.jsxs("div",{className:"flex-1 overflow-y-auto overflow-x-hidden p-4 space-y-4 custom-scrollbar",children:[rt.length===0?u.jsx("div",{className:"text-center text-gray-500 mt-8",children:u.jsx("p",{children:"還沒有訊息，開始聊天吧！"})}):rt.map((V,be)=>{var b;return u.jsx(Px,{message:V,isOwn:((b=V.sender)==null?void 0:b.uid)===(e==null?void 0:e.uid)||V.from===(e==null?void 0:e.uid),onReply:Q},V.id)}),u.jsx("div",{ref:w})]}),g&&u.jsx("div",{className:"p-4 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700",children:u.jsxs("div",{className:"relative inline-block",children:[u.jsx("img",{src:g,alt:"Preview",className:"max-w-xs rounded-lg"}),u.jsx("button",{onClick:()=>_(null),className:"absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600",children:u.jsx(wn,{className:"w-4 h-4"})})]})}),p&&u.jsx("div",{className:"bg-blue-50 dark:bg-blue-900/20 border-t border-blue-200 dark:border-blue-700 p-3",children:u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx(Fr,{className:"w-4 h-4 text-blue-500"}),u.jsxs("span",{className:"text-sm text-blue-600 dark:text-blue-400",children:["回覆 ",p.sender]}),u.jsx("span",{className:"text-sm text-gray-500 truncate max-w-xs",children:p.text})]}),u.jsx("button",{onClick:me,className:"p-1 hover:bg-blue-200 dark:hover:bg-blue-800 rounded transition-colors",children:u.jsx(wn,{className:"w-4 h-4 text-blue-500"})})]})}),u.jsxs("div",{className:"bg-white/70 dark:bg-dark-card/70 backdrop-blur-sm border-t border-gray-200 dark:border-gray-700 p-4",children:[a?u.jsxs("div",{className:"flex items-center justify-between p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-lg",children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx(fo,{className:"w-6 h-6 text-amber-600 dark:text-amber-400"}),u.jsxs("div",{children:[u.jsx("p",{className:"text-amber-800 dark:text-amber-200 font-medium",children:"你正在以匿名模式瀏覽"}),u.jsx("p",{className:"text-amber-600 dark:text-amber-400 text-sm",children:"註冊帳號即可發送訊息、上傳圖片、建立投票等功能"})]})]}),u.jsx("button",{onClick:()=>o("/login"),className:"px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-medium transition-colors",children:"立即註冊"})]}):u.jsxs("form",{onSubmit:T,className:"flex items-end gap-2",children:[u.jsxs("div",{className:"flex gap-1",children:[u.jsx("button",{type:"button",onClick:()=>{var V;return(V=S.current)==null?void 0:V.click()},className:"p-2 rounded-lg text-gray-500 hover:text-sea-blue hover:bg-sea-light/50 transition-colors",title:"上傳圖片",children:u.jsx(wx,{className:"w-5 h-5"})}),u.jsx("button",{type:"button",onClick:()=>h(!d),className:"p-2 rounded-lg text-gray-500 hover:text-sea-blue hover:bg-sea-light/50 transition-colors",title:"表情符號",children:u.jsx(zM,{className:"w-5 h-5"})}),u.jsx("button",{type:"button",onClick:()=>y(!f),className:"p-2 rounded-lg text-gray-500 hover:text-sea-blue hover:bg-sea-light/50 transition-colors",title:"建立投票",children:u.jsx(NM,{className:"w-5 h-5"})})]}),u.jsx("div",{className:"flex-1",children:u.jsx("input",{type:"text",value:l,onChange:V=>c(V.target.value),placeholder:"輸入訊息...",className:`w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 
                           focus:ring-2 focus:ring-sea-blue/20 focus:border-sea-blue 
                           bg-white dark:bg-dark-card dark:text-dark-text outline-none`})}),u.jsx("button",{type:"submit",disabled:!l.trim()&&!g||k,className:`p-3 bg-sea-blue hover:bg-sea-dark text-white rounded-lg 
                       disabled:opacity-50 disabled:cursor-not-allowed transition-colors`,children:k?u.jsx("div",{className:"w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"}):u.jsx(kx,{className:"w-5 h-5"})}),u.jsx("input",{ref:S,type:"file",accept:"image/*",onChange:D,className:"hidden"})]}),!a&&d&&u.jsx(rj,{onEmojiSelect:A,onClose:()=>h(!1)}),!a&&f&&u.jsx(sj,{onSubmit:async V=>{try{await i({type:"vote",content:V}),y(!1),j.success("投票已建立")}catch{j.error("建立投票失敗")}},onClose:()=>y(!1)})]})]})},oj=t=>{const{user:e}=De(),{setMessages:n,clearMessages:r,currentRoom:s,currentPrivateChat:i}=Mt(),{incrementUnread:o}=mc(),a=x.useRef(0),l=x.useRef(!1);return x.useEffect(()=>{if(console.log("🔍 usePrivateChat 參數檢查:"),console.log("  - hasUser:",!!e),console.log("  - userUid:",e==null?void 0:e.uid),console.log("  - recipientId:",t),console.log("  - recipientIdType:",typeof t),console.log("  - recipientIdValue:",String(t)),!e||!t){console.log("⚠️ usePrivateChat: 缺少必要參數"),console.log("  - user exists:",!!e),console.log("  - recipientId:",t);return}const d=[e.uid,t].sort(),h=`${d[0]}_${d[1]}`,f=`privateChats/${h}/messages`;console.log("🚀 開始監聽私聊:",{userUid:e.uid,recipientId:t,chatId:h,fullPath:f,sortedIds:d}),r(),console.log("🧹 已清空現有訊息，準備載入私聊訊息"),a.current=0,l.current=!1;const y=q(K,`privateChats/${h}/messages`),g=Mr(y,_=>{try{const k=_.val();if(console.log(`💌 私聊 ${h} 收到資料:`,k),k){const v=Object.entries(k).map(([S,E])=>({id:S,text:E.text,user:E.user,from:E.from,avatar:E.avatar,time:E.time,timestamp:E.time||E.timestamp||Date.now()}));v.sort((S,E)=>(S.time||S.timestamp||0)-(E.time||E.timestamp||0));const p=v.length,m=a.current,w=!l.current;if(console.log("📊 訊息計數檢查:",{currentMessageCount:p,previousMessageCount:m,isFirstLoad:w,hasLoadedOnce:l.current,shouldCheckForNewMessages:p>m&&l.current}),p>m&&l.current){const S=v.slice(m);console.log(`🆕 檢查 ${S.length} 條新訊息:`),S.forEach((E,C)=>{var T,D;if(console.log(`  訊息 ${C+1}:`,{from:E.from,user:E.user,text:((T=E.text)==null?void 0:T.substring(0,50))+"...",currentUserUid:e.uid,isFromOtherUser:E.from!==e.uid}),E.from!==e.uid){const A=s==="private"&&i&&i.recipientId===E.from,Q=E.user||"匿名用戶";if(console.log("🔍 檢查通知條件:",{currentRoom:s,currentPrivateChat:i,currentPrivateChatRecipientId:i==null?void 0:i.recipientId,recipientId:t,messageFrom:E.from,isCurrentlyChattingWithSender:A,shouldShowNotification:!A}),A)console.log(`🔇 ❌ 不顯示通知 - 用戶正在與 ${Q} 聊天`,{reason:"isCurrentlyChattingWithSender = true",currentRoom:s,currentPrivateChat:i==null?void 0:i.nickname,messageFromUser:Q});else{console.log(`� usePrivateChat: 增加未讀數量 - 收到來自 ${Q} 的新私訊`),console.log(`📈 準備調用 incrementUnread(${E.from})`);try{o(E.from),console.log("✅ incrementUnread 調用成功")}catch(me){console.error("❌ incrementUnread 調用失敗:",me)}console.log("📢 通知將由 usePrivateChatNotifications 統一處理")}}else console.log(`⏭️ 跳過自己的訊息: ${(D=E.text)==null?void 0:D.substring(0,30)}...`)})}a.current=p,l.current=!0,console.log(`✅ 私聊 ${h} 載入了 ${v.length} 條訊息`),n(v)}else console.log(`📭 私聊 ${h} 沒有訊息`),a.current=0,l.current=!0,n([])}catch(k){console.error(`❌ 私聊 ${h} 載入訊息時出錯:`,k),n([])}},_=>{console.error(`❌ Firebase onValue 錯誤 (私聊 ${h}):`,_),_.code==="PERMISSION_DENIED"&&console.error("🚫 權限被拒絕 - 請檢查 Firebase 安全規則!")});return()=>{try{console.log(`🛑 停止監聽私聊 ${h} 的訊息`),g()}catch(_){console.error("Firebase unsubscribe error:",_)}}},[e,t,n,r]),{sendPrivateMessage:async d=>{if(!e||!t)return;const h=[e.uid,t].sort(),f=`${h[0]}_${h[1]}`,y=q(K,`privateChats/${f}/messages`),g={text:d.text||d.message,user:e.nickname||e.displayName||"匿名用戶",from:e.uid,avatar:e.avatar||null,time:Date.now(),type:d.type||"text"};d.image&&(g.image=d.image,console.log(`📷 私訊包含圖片: ${d.image}`));try{console.log(`📤 發送私人訊息到 ${f}:`,g),await Tw(y,g)}catch(_){throw console.error(`❌ 發送私人訊息失敗 (${f}):`,_),_}}}},aj=()=>{const{user:t}=De(),[e,n]=x.useState([]),[r,s]=x.useState(!0);return x.useEffect(()=>{if(!(t!=null&&t.uid)){console.log("⚠️ usePrivateChatsList: 沒有用戶 UID"),n([]),s(!1);return}console.log(`🚀 開始載入用戶 ${t.uid} 的私聊列表...`),(async()=>{try{s(!0);const o=q(K,"privateChats"),a=await Kt(o);if(!a.exists()){console.log("📭 沒有找到任何私聊房間"),n([]),s(!1);return}const l=a.val(),d=Object.keys(l).filter(g=>g.includes(t.uid));if(console.log(`💬 找到 ${d.length} 個包含用戶的私聊房間:`,d.slice(0,5),"..."),d.length===0){n([]),s(!1);return}console.log(`🚀 開始處理全部 ${d.length} 個私聊房間...`);const h=d.map(async g=>{try{const k=g.split("_").find(E=>E!==t.uid);if(!k)return console.log(`⚠️ 無法解析私聊房間 ${g} 的對方用戶`),null;const[v,p]=await Promise.all([Kt(q(K,`users/${k}`)),Kt(q(K,`privateChats/${g}/messages`))]);if(!v.exists())return console.log(`⚠️ 對方用戶 ${k} 不存在`),null;const m=v.val();let w="開始對話...",S=null;if(p.exists()){const E=p.val(),C=Object.entries(E);if(C.length>0){const T=C.sort(([,A],[,Q])=>(Q.time||0)-(A.time||0)),[,D]=T[0];w=D.text||"訊息",S=D.time}}return{id:g,recipientId:k,nickname:m.nickname||"匿名用戶",avatar:m.avatar,isOnline:m.online||!1,lastMessage:w,lastMessageTime:S}}catch(_){return console.error(`❌ 處理私聊房間 ${g} 時出錯:`,_),null}}),y=(await Promise.all(h)).filter(g=>g!==null);y.sort((g,_)=>(_.lastMessageTime||0)-(g.lastMessageTime||0)),console.log(`✅ 成功載入 ${y.length} 個私聊對話`),n(y)}catch(o){console.error("❌ 載入私聊列表失敗:",o),n([])}finally{s(!1)}})()},[t==null?void 0:t.uid]),{privateChatsList:e,loading:r,refreshList:()=>{t!=null&&t.uid&&(s(!0),n([]))}}},lj=({isVisible:t,onClose:e,recipientName:n,recipientId:r,isIncoming:s=!1,onAnswer:i=null,onReject:o=null})=>{const[a,l]=x.useState(!1),[c,d]=x.useState(!1),[h,f]=x.useState(!1),[y,g]=x.useState(!0),[_,k]=x.useState(0),[v,p]=x.useState("connecting"),m=x.useRef(null),w=x.useRef(null),S=x.useRef(null),E=x.useRef(null),C=x.useRef(null),T={iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:"stun:stun1.l.google.com:19302"}]},D=async()=>{try{console.log("🔊 初始化語音通話...");const b=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!0,noiseSuppression:!0,autoGainControl:!0}});E.current=b,m.current&&(m.current.srcObject=b),S.current=new RTCPeerConnection(T),b.getTracks().forEach(P=>{S.current.addTrack(P,b)}),S.current.ontrack=P=>{console.log("📻 收到遠端音頻流"),w.current&&(w.current.srcObject=P.streams[0]),d(!0),p("connected"),j.success("語音通話已連接")},S.current.onconnectionstatechange=()=>{const P=S.current.connectionState;console.log("🔗 連接狀態:",P),p(P),P==="connected"?(d(!0),Q()):(P==="disconnected"||P==="failed")&&(d(!1),me())},S.current.onicecandidate=P=>{P.candidate&&(console.log("🧊 ICE 候選:",P.candidate),A(P.candidate))},l(!0),p("connecting"),j.success("正在建立語音連接...")}catch(b){console.error("❌ 語音通話初始化失敗:",b),j.error("無法訪問麥克風，請檢查權限設置"),e()}},A=b=>{console.log("📤 發送 ICE 候選:",b)},Q=()=>{C.current=setInterval(()=>{k(b=>b+1)},1e3)},me=()=>{C.current&&(clearInterval(C.current),C.current=null)},rt=b=>{const P=Math.floor(b/60),F=b%60;return`${P.toString().padStart(2,"0")}:${F.toString().padStart(2,"0")}`},L=()=>{if(E.current){const b=E.current.getAudioTracks()[0];b&&(b.enabled=h,f(!h),j.success(h?"麥克風已開啟":"麥克風已關閉"))}},_e=()=>{g(!y),j.success(y?"揚聲器已關閉":"揚聲器已開啟")},V=async()=>{try{await D(),j.success("通話已接聽"),i&&await i()}catch(b){console.error("接聽失敗:",b),j.error("接聽失敗")}},be=()=>{console.log("📞 掛斷通話"),me(),E.current&&E.current.getTracks().forEach(b=>b.stop()),S.current&&S.current.close(),l(!1),d(!1),k(0),j.success("通話已結束"),e()};return x.useEffect(()=>(t&&!s&&D(),()=>{me(),E.current&&E.current.getTracks().forEach(b=>b.stop()),S.current&&S.current.close()}),[t]),console.log("🎬 VoiceCall 渲染狀態:",{isVisible:t,recipientName:n,isIncoming:s,isCallActive:a,isCallConnected:c}),t?(console.log("✅ VoiceCall 顯示中"),u.jsx("div",{className:"fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center",children:u.jsxs("div",{className:"bg-white dark:bg-dark-card rounded-2xl p-8 max-w-sm w-full mx-4 shadow-2xl",children:[u.jsxs("div",{className:"text-center mb-6",children:[u.jsx("img",{src:`https://ui-avatars.com/api/?name=${n}&background=56c596&color=fff&size=120`,alt:n,className:"w-24 h-24 rounded-full mx-auto mb-4"}),u.jsx("h3",{className:"text-xl font-semibold text-gray-800 dark:text-dark-text",children:n}),u.jsx("div",{className:"mt-2",children:s?u.jsx("p",{className:"text-green-600 font-medium animate-pulse",children:"來電中..."}):v==="connecting"?u.jsx("p",{className:"text-blue-600 font-medium animate-pulse",children:"連接中..."}):c?u.jsxs("p",{className:"text-green-600 font-medium",children:["通話中 ",rt(_)]}):u.jsx("p",{className:"text-gray-500",children:"語音通話"})})]}),u.jsxs("div",{className:"flex justify-center gap-4 mb-4",children:[(a||c)&&u.jsx("button",{onClick:L,className:`p-4 rounded-full transition-colors ${h?"bg-red-500 text-white":"bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300"}`,title:h?"開啟麥克風":"關閉麥克風",children:h?u.jsx(DM,{className:"w-6 h-6"}):u.jsx(LM,{className:"w-6 h-6"})}),(a||c)&&u.jsx("button",{onClick:_e,className:`p-4 rounded-full transition-colors ${y?"bg-blue-500 text-white":"bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300"}`,title:y?"關閉揚聲器":"開啟揚聲器",children:y?u.jsx(Cx,{className:"w-6 h-6"}):u.jsx(Ix,{className:"w-6 h-6"})})]}),u.jsx("div",{className:"flex justify-center gap-8",children:s?u.jsxs(u.Fragment,{children:[u.jsx("button",{onClick:V,className:"p-4 bg-green-500 hover:bg-green-600 text-white rounded-full transition-colors",title:"接聽",children:u.jsx(FM,{className:"w-8 h-8"})}),u.jsx("button",{onClick:()=>{o?o():be()},className:"p-4 bg-red-500 hover:bg-red-600 text-white rounded-full transition-colors",title:"拒接",children:u.jsx(Og,{className:"w-8 h-8"})})]}):u.jsx("button",{onClick:be,className:"p-4 bg-red-500 hover:bg-red-600 text-white rounded-full transition-colors",title:"掛斷",children:u.jsx(Og,{className:"w-8 h-8"})})}),u.jsx("audio",{ref:m,autoPlay:!0,muted:!0}),u.jsx("audio",{ref:w,autoPlay:!0}),u.jsx("div",{className:"mt-6 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg",children:u.jsxs("p",{className:"text-sm text-blue-600 dark:text-blue-400 text-center",children:["🚧 語音通話功能正在開發中",u.jsx("br",{}),"需要實現 Firebase 信令服務器"]})})]})})):(console.log("❌ VoiceCall 隱藏中"),null)},Dg=()=>{var rt;const{user:t,isAnonymousUser:e}=De(),{currentPrivateChat:n,setCurrentPrivateChat:r,setCurrentRoom:s,messages:i}=Mt(),o=_o(),a=e(),{privateChatsList:l,loading:c,refreshList:d}=aj(),[h,f]=x.useState(""),[y,g]=x.useState(null),[_,k]=x.useState(!1),[v,p]=x.useState(!1),m=x.useRef(null),w=x.useRef(null),{sendPrivateMessage:S}=oj(n==null?void 0:n.recipientId),{getUnreadCount:E,markAsRead:C,recalculateTotal:T}=mc();x.useEffect(()=>{console.log("🏠 設定私訊房間狀態"),s("private"),n||console.log("📝 清空當前私聊狀態")},[s]),console.log("💬 PrivateChat 狀態:",{currentPrivateChat:!!n,nickname:n==null?void 0:n.nickname,recipientId:n==null?void 0:n.recipientId,messagesCount:i.length,privateChatsListCount:l.length,chatsLoading:c,hasMessages:i.length>0,firstMessagePreview:i[0]?{text:(rt=i[0].text)==null?void 0:rt.substring(0,30),from:i[0].from,user:i[0].user}:null}),x.useEffect(()=>{var L;(L=m.current)==null||L.scrollIntoView({behavior:"smooth"})},[i]);const D=()=>{console.log("⬅️  返回私聊列表"),r(null),T()},A=async()=>{var L;if(!(!h.trim()&&!y))try{let _e=null;y&&((L=w.current)!=null&&L.files[0])&&(k(!0),j.loading("正在上傳圖片..."),_e=await Tx(w.current.files[0]),j.dismiss()),await S({text:h.trim(),type:"text",image:_e}),f(""),g(null),w.current&&(w.current.value=""),_e&&j.success("圖片已發送")}catch(_e){console.error("發送私訊失敗:",_e),j.error("發送失敗: "+_e.message)}finally{k(!1)}},Q=async L=>{const _e=L.target.files[0];if(_e)try{const V=await Rx(_e);g(V),j.success("圖片已選擇，將自動壓縮")}catch{j.error("圖片預覽失敗")}},me=()=>{p(!1)};return n?u.jsxs("div",{className:"flex flex-col h-screen pt-16 md:pt-0",children:[u.jsx("div",{className:"bg-white/70 dark:bg-dark-card/70 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 p-4",children:u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx("button",{onClick:D,className:"p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors",title:"返回私聊列表",children:u.jsx(_x,{className:"w-5 h-5"})}),u.jsx("img",{src:n.avatar||`https://ui-avatars.com/api/?name=${n.nickname}&background=56c596&color=fff`,alt:n.nickname,className:"w-10 h-10 rounded-full"}),u.jsxs("div",{children:[u.jsx("h2",{className:"font-semibold text-gray-800 dark:text-dark-text",children:n.nickname}),u.jsx("p",{className:"text-sm text-gray-500",children:"私人對話"})]})]}),!1]})}),u.jsxs("div",{className:"flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar",children:[!1,i.length===0?u.jsxs("div",{className:"text-center text-gray-500 mt-8",children:[u.jsx(Fr,{className:"w-16 h-16 mx-auto mb-4 text-gray-300"}),u.jsx("p",{children:"還沒有私訊記錄"}),u.jsxs("p",{className:"text-sm",children:["開始和 ",n.nickname," 聊天吧！"]})]}):i.map(L=>{var _e;return u.jsx(Px,{message:L,isOwn:((_e=L.sender)==null?void 0:_e.uid)===(t==null?void 0:t.uid)||L.from===(t==null?void 0:t.uid)},L.id)}),u.jsx("div",{ref:m})]}),y&&u.jsxs("div",{className:"p-3 bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700",children:[u.jsxs("div",{className:"relative inline-block",children:[u.jsx("img",{src:y,alt:"Preview",className:"max-w-32 md:max-w-xs rounded-lg"}),u.jsx("button",{onClick:()=>{g(null),w.current&&(w.current.value="")},className:"absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors",children:u.jsx(wn,{className:"w-4 h-4"})})]}),u.jsx("p",{className:"text-xs text-gray-500 mt-2",children:"點擊 X 移除圖片"})]}),u.jsx("div",{className:"bg-white/70 dark:bg-dark-card/70 backdrop-blur-sm border-t border-gray-200 dark:border-gray-700 p-4",children:a?u.jsxs("div",{className:"flex items-center justify-between p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-lg",children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx(fo,{className:"w-6 h-6 text-amber-600 dark:text-amber-400"}),u.jsxs("div",{children:[u.jsx("p",{className:"text-amber-800 dark:text-amber-200 font-medium",children:"匿名模式無法發送私訊"}),u.jsx("p",{className:"text-amber-600 dark:text-amber-400 text-sm",children:"註冊帳號即可使用私訊功能"})]})]}),u.jsx("button",{onClick:()=>o("/login"),className:"px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-medium transition-colors",children:"立即註冊"})]}):u.jsxs("div",{className:"flex items-end gap-2",children:[u.jsx("div",{className:"flex gap-1",children:u.jsx("button",{onClick:()=>{var L;return(L=w.current)==null?void 0:L.click()},disabled:_,className:"p-2 rounded-lg text-gray-500 hover:text-sea-blue hover:bg-sea-light/50 transition-colors disabled:opacity-50",title:"上傳圖片",children:u.jsx(wx,{className:"w-5 h-5"})})}),u.jsx("div",{className:"flex-1",children:u.jsx("input",{type:"text",value:h,onChange:L=>f(L.target.value),onKeyPress:L=>L.key==="Enter"&&A(),placeholder:`傳訊息給 ${n.nickname}...`,className:`w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-600 
                             focus:ring-2 focus:ring-sea-blue/20 focus:border-sea-blue 
                             bg-white dark:bg-dark-card dark:text-dark-text outline-none`})}),u.jsx("button",{onClick:A,disabled:!h.trim()&&!y||_,className:`px-3 py-2 bg-sea-blue hover:bg-sea-dark text-white rounded-lg 
                         disabled:opacity-50 disabled:cursor-not-allowed transition-colors`,title:_?"上傳中...":"發送",children:_?u.jsx("div",{className:"w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"}):u.jsx(kx,{className:"w-4 h-4"})}),u.jsx("input",{ref:w,type:"file",accept:"image/*",onChange:Q,className:"hidden"})]})}),u.jsx(lj,{isVisible:v,onClose:me,recipientName:n.nickname,recipientId:n.recipientId,isIncoming:!1})]}):a?u.jsxs("div",{className:"flex flex-col h-screen pt-16 md:pt-0",children:[u.jsx("div",{className:"bg-white/70 dark:bg-dark-card/70 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 p-4",children:u.jsx("div",{className:"flex items-center justify-between",children:u.jsxs("div",{children:[u.jsx("h2",{className:"text-xl font-semibold text-gray-800 dark:text-dark-text mb-1",children:"私人訊息"}),u.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"匿名模式無法使用私訊功能"})]})})}),u.jsx("div",{className:"flex-1 flex items-center justify-center p-8",children:u.jsxs("div",{className:"text-center max-w-md",children:[u.jsxs("div",{className:"mb-6",children:[u.jsx(fo,{className:"w-24 h-24 mx-auto text-amber-400 mb-4"}),u.jsx("h3",{className:"text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2",children:"私訊功能需要註冊"}),u.jsx("p",{className:"text-gray-600 dark:text-gray-400 mb-6",children:"為了保護用戶隱私和安全，私訊功能僅對註冊用戶開放。 註冊後你可以："}),u.jsxs("ul",{className:"text-left text-gray-600 dark:text-gray-400 mb-6 space-y-2",children:[u.jsxs("li",{className:"flex items-center gap-2",children:[u.jsx("span",{className:"w-2 h-2 bg-sea-blue rounded-full"}),"發送私人訊息"]}),u.jsxs("li",{className:"flex items-center gap-2",children:[u.jsx("span",{className:"w-2 h-2 bg-sea-blue rounded-full"}),"上傳分享圖片"]}),u.jsxs("li",{className:"flex items-center gap-2",children:[u.jsx("span",{className:"w-2 h-2 bg-sea-blue rounded-full"}),"建立投票和互動"]}),u.jsxs("li",{className:"flex items-center gap-2",children:[u.jsx("span",{className:"w-2 h-2 bg-sea-blue rounded-full"}),"自定義頭像和暱稱"]})]})]}),u.jsx("button",{onClick:()=>o("/login"),className:"px-6 py-3 bg-sea-blue hover:bg-sea-dark text-white rounded-lg font-medium transition-colors",children:"立即註冊/登入"})]})})]}):u.jsxs("div",{className:"flex flex-col h-screen pt-16 md:pt-0",children:[u.jsx("div",{className:"bg-white/70 dark:bg-dark-card/70 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 p-4",children:u.jsxs("div",{className:"flex items-center justify-between",children:[u.jsxs("div",{children:[u.jsxs("h2",{className:"text-xl font-semibold text-gray-800 dark:text-dark-text mb-1",children:["私人訊息 (",l.length,")"]}),u.jsx("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"點選對話開始私訊"})]}),u.jsx("div",{className:"flex gap-2",children:u.jsx("button",{onClick:()=>{console.log("🔄 重新載入私聊列表..."),d()},className:"px-3 py-1 text-xs bg-sea-blue text-white rounded-lg hover:bg-sea-dark transition-colors",children:"🔄 重新載入"})})]})}),u.jsx("div",{className:"flex-1 overflow-y-auto",children:c?u.jsxs("div",{className:"flex items-center justify-center h-64",children:[u.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-b-2 border-sea-blue"}),u.jsx("span",{className:"ml-2 text-gray-500",children:"載入私聊列表中..."})]}):l.length===0?u.jsxs("div",{className:"flex flex-col items-center justify-center h-full text-gray-500",children:[u.jsx(Fr,{className:"w-16 h-16 mb-4 text-gray-300"}),u.jsx("p",{className:"text-lg mb-2",children:"還沒有私訊"}),u.jsxs("p",{className:"text-sm text-center px-4 mb-4",children:["在聊天室中點擊其他用戶的頭像",u.jsx("br",{}),"就可以開始私人對話"]})]}):u.jsx("div",{className:"p-4 space-y-2",children:l.map(L=>u.jsxs("div",{onClick:()=>{console.log(`🔄 切換到私聊: ${L.nickname} (ID: ${L.recipientId})`),r(L),s("private"),C(L.recipientId)},className:"flex items-center gap-3 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer transition-colors relative",children:[u.jsxs("div",{className:"relative",children:[u.jsx("img",{src:L.avatar||`https://ui-avatars.com/api/?name=${L.nickname}&background=56c596&color=fff`,alt:L.nickname,className:"w-12 h-12 rounded-full"}),u.jsx(Nx,{count:E(L.recipientId),className:"absolute -top-1 -right-1"})]}),u.jsxs("div",{className:"flex-1",children:[u.jsx("h3",{className:"font-medium text-gray-800 dark:text-gray-200",children:L.nickname}),u.jsx("p",{className:"text-sm text-gray-500 truncate",children:L.lastMessage||"開始對話..."})]}),u.jsx("div",{className:"text-xs text-gray-400",children:L.lastMessageTime&&new Date(L.lastMessageTime).toLocaleTimeString("zh-TW",{hour:"2-digit",minute:"2-digit"})})]},L.id))})})]})},cj=()=>{const{currentRoom:t,currentPrivateChat:e}=Mt(),n=()=>t==="private"?e?u.jsx(Dg,{}):u.jsx(Dg,{}):u.jsx(ij,{roomId:t});return u.jsx("div",{className:"flex-1 flex flex-col",children:n()})},uj=()=>{const{sidebarOpen:t,setSidebarOpen:e,darkMode:n,toggleDarkMode:r}=Mt(),{user:s}=De();return u.jsx("div",{className:"md:hidden fixed top-0 left-0 right-0 z-40 bg-white/90 dark:bg-dark-card/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700",children:u.jsxs("div",{className:"flex items-center justify-between px-4 py-3",children:[u.jsxs("div",{className:"flex items-center gap-3",children:[u.jsx("button",{onClick:()=>e(!t),className:"p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors",children:t?u.jsx(wn,{className:"w-5 h-5"}):u.jsx(jM,{className:"w-5 h-5"})}),u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("img",{src:"/icon-512.png",alt:"LalaLand",className:"w-8 h-8 rounded-lg"}),u.jsx("h1",{className:"font-semibold text-gray-800 dark:text-dark-text",children:"LalaLand"})]})]}),u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("button",{onClick:r,className:"p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors",children:n?u.jsx(Ex,{className:"w-5 h-5"}):u.jsx(xx,{className:"w-5 h-5"})}),s&&u.jsx("img",{src:s.avatar||`https://ui-avatars.com/api/?name=${s.nickname}&background=2877b9&color=fff`,alt:s.nickname,className:"w-8 h-8 rounded-full border-2 border-sea-blue"})]})]})})},dj=()=>{const{user:t}=De(),{currentPrivateChat:e,currentRoom:n}=Mt(),{incrementUnread:r}=mc(),s=x.useRef({}),i=x.useRef({});x.useEffect(()=>{if(!(t!=null&&t.uid))return;const o=q(K,"privateChats");return console.log("🛰️ 啟動全域私訊通知監聽..."),Mr(o,a=>{const l=a.val()||{},c=t.uid,d=Object.keys(l).filter(f=>f.split("_").includes(c));Object.keys(s.current).forEach(f=>{if(!d.includes(f)){console.log("🧹 清理不相關監聽器:",f);try{s.current[f]()}catch{}delete s.current[f],delete i.current[f]}}),d.forEach(f=>{if(s.current[f])return;const y=q(K,`privateChats/${f}/messages`);console.log("👂 設定私聊監聽:",f);const g=Mr(y,_=>{var A;const k=_.val();if(!k){i.current[f]||(i.current[f]=Date.now());return}const v=Object.entries(k).map(([Q,me])=>({id:Q,...me,timestamp:me.time||me.timestamp||0})).sort((Q,me)=>Q.timestamp-me.timestamp);if(v.length===0)return;const p=v[v.length-1],m=i.current[f];if(!m){i.current[f]=p.timestamp||Date.now(),console.log(`🔄 初次載入私聊 ${f}，記錄最後訊息時間: ${p.timestamp}`);return}if(p.timestamp&&p.timestamp<=m||(i.current[f]=p.timestamp||Date.now(),p.from===c))return;const S=e==null?void 0:e.recipientId,E=f.split("_").find(Q=>Q!==c),C=n==="private"&&S&&E===S;if(console.log("🔍 檢查是否正在查看私聊:",{chatId:f,currentRoom:n,activePartnerId:S,partnerId:E,isActive:C,messageFrom:p.from,messageSender:p.user}),C){console.log("🟢 正在查看此私聊，跳過通知和未讀計數",{chatId:f,partnerId:E});return}const T=p.user||"匿名用戶",D=((A=p.text)==null?void 0:A.slice(0,80))||"";console.log("🔔 觸發全域私訊通知:",{chatId:f,from:p.from,senderName:T,preview:D,isActive:C}),r(p.from),window.showNotification&&window.showNotification(`💬 ${T}: ${D}`,"info",6e3),Oi.showNotification(`💬 ${T}`,D),Oi.playNotificationSound()});s.current[f]=g})}),()=>{console.log("🛑 停止全域私訊通知監聽"),Object.values(s.current).forEach(a=>{try{a()}catch{}}),s.current={},Rw(o)}},[t==null?void 0:t.uid,e==null?void 0:e.recipientId,n])},pu=()=>{const{darkMode:t}=Mt(),{user:e}=De();return dj(),x.useEffect(()=>{t?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},[t]),x.useEffect(()=>{e&&KM(e)},[e]),u.jsxs("div",{className:"h-screen flex bg-earth-beige dark:bg-dark-bg",children:[u.jsx(uj,{}),u.jsx(JM,{}),u.jsx(cj,{})]})},hj=()=>{const{user:t}=De(),[e,n]=x.useState(""),[r,s]=x.useState(!1),i=async()=>{s(!0),n("");try{console.log("🔍 開始完整偵錯..."),await EM(),n("偵錯完成，請檢查瀏覽器控制台查看詳細結果")}catch(a){n(`偵錯失敗: ${a.message}`)}finally{s(!1)}},o=async()=>{const a=prompt("請輸入房間 ID (如: casual, dating, hookup):");if(a){s(!0);try{const l=await SM(a);n(l?`房間 ${a} 找到 ${Object.keys(l).length} 條訊息`:`房間 ${a} 沒有訊息`)}catch(l){n(`偵錯房間失敗: ${l.message}`)}finally{s(!1)}}};return u.jsx("div",{className:"min-h-screen bg-gray-100 dark:bg-gray-900 p-4",children:u.jsxs("div",{className:"max-w-2xl mx-auto",children:[u.jsx("h1",{className:"text-2xl font-bold text-gray-900 dark:text-white mb-6",children:"Firebase 偵錯工具"}),t&&u.jsxs("div",{className:"mb-6 p-4 bg-white dark:bg-gray-800 rounded-lg shadow",children:[u.jsx("h2",{className:"text-lg font-semibold text-gray-900 dark:text-white mb-2",children:"當前用戶"}),u.jsxs("p",{className:"text-gray-600 dark:text-gray-300",children:["UID: ",t.uid]}),u.jsxs("p",{className:"text-gray-600 dark:text-gray-300",children:["暱稱: ",t.nickname]})]}),u.jsxs("div",{className:"space-y-4",children:[u.jsx("button",{onClick:i,disabled:r,className:"w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50",children:r?"偵錯中...":"完整偵錯 (檢查控制台)"}),u.jsx("button",{onClick:o,disabled:r,className:"w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50",children:"偵錯特定房間"})]}),e&&u.jsxs("div",{className:"mt-6 p-4 bg-white dark:bg-gray-800 rounded-lg shadow",children:[u.jsx("h3",{className:"text-lg font-semibold text-gray-900 dark:text-white mb-2",children:"偵錯結果"}),u.jsx("pre",{className:"text-sm text-gray-600 dark:text-gray-300 whitespace-pre-wrap",children:e})]}),u.jsxs("div",{className:"mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg",children:[u.jsx("h3",{className:"text-lg font-semibold text-yellow-800 dark:text-yellow-200 mb-2",children:"說明"}),u.jsx("p",{className:"text-yellow-700 dark:text-yellow-300 text-sm",children:'如果看到 "permission_denied" 錯誤，請在 Firebase Console 中更新安全規則。 參考專案中的 FIREBASE_SETUP.md 文件。'})]})]})})},fj=()=>u.jsx("div",{className:"fixed inset-0 bg-gradient-to-br from-earth-beige to-white flex items-center justify-center z-50",children:u.jsxs("div",{className:"text-center",children:[u.jsx("img",{src:"/icon-512.png?v=2",alt:"LalaLand",className:"w-32 h-32 mx-auto mb-6 animate-float"}),u.jsx("h1",{className:"text-3xl font-bold text-sea-dark mb-2",children:"LalaLand"}),u.jsx("p",{className:"text-gray-600",children:"載入中..."}),u.jsx("div",{className:"mt-6",children:u.jsxs("div",{className:"flex justify-center space-x-1",children:[u.jsx("div",{className:"w-2 h-2 bg-sea-blue rounded-full animate-bounce"}),u.jsx("div",{className:"w-2 h-2 bg-sea-blue rounded-full animate-bounce",style:{animationDelay:"0.1s"}}),u.jsx("div",{className:"w-2 h-2 bg-sea-blue rounded-full animate-bounce",style:{animationDelay:"0.2s"}})]})})]})});class pj extends Sl.Component{constructor(n){super(n);Wf(this,"handleReload",()=>{window.location.reload()});this.state={hasError:!1,error:null,errorInfo:null}}static getDerivedStateFromError(n){return{hasError:!0}}componentDidCatch(n,r){console.error("ErrorBoundary caught an error:",n,r),this.setState({error:n,errorInfo:r})}render(){return this.state.hasError?u.jsx("div",{className:"min-h-screen flex items-center justify-center bg-earth-beige p-4",children:u.jsxs("div",{className:"max-w-md w-full bg-white rounded-xl shadow-soft p-6 text-center",children:[u.jsxs("div",{className:"mb-6",children:[u.jsx(Sx,{className:"w-16 h-16 text-red-500 mx-auto mb-4"}),u.jsx("h1",{className:"text-2xl font-bold text-gray-800 mb-2",children:"哎呀，出錯了！"}),u.jsx("p",{className:"text-gray-600",children:"應用程式發生了未預期的錯誤"})]}),u.jsxs("div",{className:"space-y-4",children:[u.jsxs("button",{onClick:this.handleReload,className:"w-full btn-primary flex items-center justify-center gap-2",children:[u.jsx($M,{className:"w-4 h-4"}),"重新載入"]}),u.jsx("button",{onClick:()=>window.location.href="/",className:"w-full btn-secondary",children:"回到首頁"})]}),!1]})}):this.props.children}}let mj=0;function gj(){const[t,e]=x.useState([]),[n,r]=x.useState(localStorage.getItem("notificationSound")!=="false"),s=x.useCallback((c,d="info",h=5e3)=>{const f=++mj,y={id:f,message:c,type:d,timestamp:Date.now()};return e(g=>[...g,y]),n&&d!=="info"&&o(),h>0&&setTimeout(()=>{i(f)},h),f},[n]),i=x.useCallback(c=>{e(d=>d.filter(h=>h.id!==c))},[]),o=()=>{try{const c=new(window.AudioContext||window.webkitAudioContext),d=c.createOscillator(),h=c.createGain();d.connect(h),h.connect(c.destination),d.frequency.value=800,d.type="sine",h.gain.setValueAtTime(.1,c.currentTime),h.gain.exponentialRampToValueAtTime(.01,c.currentTime+.3),d.start(),d.stop(c.currentTime+.3)}catch(c){console.log("無法播放提示音:",c)}},a=()=>{const c=!n;r(c),localStorage.setItem("notificationSound",c.toString())};x.useEffect(()=>(window.showNotification=s,()=>{delete window.showNotification}),[s]);const l=c=>{const d="mb-2 p-3 rounded-lg shadow-lg transform transition-all duration-300 ease-in-out",h={info:"bg-blue-500 text-white",success:"bg-green-500 text-white",warning:"bg-yellow-500 text-black",error:"bg-red-500 text-white"};return`${d} ${h[c]||h.info}`};return u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"fixed top-4 right-4 z-50 max-w-sm w-full",children:t.map(c=>u.jsx("div",{className:l(c.type),onClick:()=>i(c.id),children:u.jsxs("div",{className:"flex justify-between items-start",children:[u.jsx("p",{className:"flex-1 text-sm font-medium",children:c.message}),u.jsx("button",{className:"ml-2 text-lg leading-none opacity-70 hover:opacity-100",onClick:d=>{d.stopPropagation(),i(c.id)},children:"×"})]})},c.id))}),u.jsx("div",{className:"notification-settings",style:{display:"none"},children:u.jsxs("label",{className:"flex items-center gap-2",children:[u.jsx("input",{type:"checkbox",checked:n,onChange:a}),u.jsx("span",{children:"啟用通知提示音"})]})})]})}const yj=({user:t=null})=>{const[e,n]=x.useState(null),[r,s]=x.useState(!1),[i,o]=x.useState(!1),[a,l]=x.useState(!1),[c,d]=x.useState(!1),[h,f]=x.useState(!1);x.useEffect(()=>{const m=()=>{const C=window.navigator.userAgent.toLowerCase(),T=/ipad|iphone|ipod/.test(C),D=window.navigator.standalone||window.matchMedia("(display-mode: standalone)").matches;l(T),d(D),o(D)},w=C=>{console.log("💻 PWA 安裝提示事件觸發"),C.preventDefault(),n(C)},S=()=>{console.log("✅ PWA 已安裝"),o(!0),s(!1),n(null)};m(),console.log("🔍 PWA 安裝提示初始化:",{isIOSDevice:/ipad|iphone|ipod/.test(window.navigator.userAgent.toLowerCase()),isStandaloneMode:window.navigator.standalone||window.matchMedia("(display-mode: standalone)").matches,hostname:window.location.hostname});const E=setTimeout(()=>{!i&&!c?(console.log("💡 顯示 PWA 安裝提示（登入後推薦）"),s(!0)):console.log("ℹ️ PWA 已安裝或在獨立模式，不顯示安裝提示")},3e3);return window.addEventListener("beforeinstallprompt",w),window.addEventListener("appinstalled",S),()=>{clearTimeout(E),window.removeEventListener("beforeinstallprompt",w),window.removeEventListener("appinstalled",S)}},[i,c]),x.useEffect(()=>{if(console.log("🔍 PWA 安裝提示狀態檢查:",{user:!!t,userName:(t==null?void 0:t.displayName)||(t==null?void 0:t.email)||"未知",isInstalled:i,isStandalone:c,showInstallPrompt:r,deferredPrompt:!!e}),t&&!i&&!c){console.log("👤 用戶登入，準備觸發 PWA 安裝提示");const m=setTimeout(()=>{const w=localStorage.getItem("pwa-install-dismissed");if(console.log("💾 檢查本地存儲:",{dismissed:w,timestamp:w?new Date(parseInt(w)).toLocaleString():"無"}),w){const S=parseInt(w),E=(Date.now()-S)/(1e3*60*60);if(console.log("⏰ 距離上次關閉:",E.toFixed(1),"小時"),E<1){console.log("⏰ 最近已顯示過安裝提示，暫不重複顯示");return}}console.log("💡 用戶登入後顯示 PWA 安裝提示"),s(!0)},2e3);return()=>clearTimeout(m)}},[t,i,c,e]);const y=async()=>{if(console.log("🖱️ 安裝按鈕被點擊",{isIOS:a,deferredPrompt:!!e,isInstalled:i,isStandalone:c}),a){console.log("📱 iOS 設備，顯示安裝說明"),f(!0);return}if(!e){console.log("⚠️ 無法觸發安裝提示，可能原因:"),console.log("1. 瀏覽器不支援 PWA 安裝"),console.log("2. 應用程式已經安裝"),console.log("3. beforeinstallprompt 事件未觸發"),console.log("4. Service Worker 未正確註冊"),console.log("5. manifest.json 有問題"),console.log("6. 不在 HTTPS 環境下（除了 localhost）"),window.checkPWAStatus&&(console.log("� 執行 PWA 狀態診斷..."),window.checkPWAStatus());let m=`PWA 安裝提示未準備就緒。

`;window.location.protocol==="https:"||window.location.hostname==="localhost"?(m+=`手動安裝方式：
`,m+=`1. Chrome：點擊網址列右側的安裝圖示 📱
`,m+=`2. Edge：選單 > 應用程式 > 安裝此網站
`,m+=`3. Safari (iOS)：分享 > 加入主畫面

`,m+="或等待幾秒鐘讓瀏覽器準備安裝提示。"):m+="⚠️ 需要 HTTPS 協議才能安裝 PWA",alert(m);return}try{console.log("🚀 開始 PWA 安裝流程");const m=await e.prompt();console.log("📱 用戶選擇:",m.outcome),m.outcome==="accepted"?console.log("✅ 用戶接受 PWA 安裝"):console.log("❌ 用戶拒絕 PWA 安裝"),n(null),s(!1)}catch(m){console.error("❌ PWA 安裝失敗:",m)}},g=()=>{s(!1),localStorage.setItem("pwa-install-dismissed",Date.now().toString()),console.log("📱 PWA 安裝提示已關閉，30分鐘後可重新顯示")},_=()=>{console.log("🧪 強制顯示 PWA 安裝提示"),localStorage.removeItem("pwa-install-dismissed"),s(!0)},k=async()=>{console.log("🔍 檢查 PWA 安裝條件...");const m={https:window.location.protocol==="https:"||window.location.hostname==="localhost",manifest:!!document.querySelector('link[rel="manifest"]'),serviceWorker:"serviceWorker"in navigator,swRegistered:!1,deferredPrompt:!!e};if(m.serviceWorker)try{const S=await navigator.serviceWorker.getRegistrations();m.swRegistered=S.length>0}catch(S){console.error("❌ 檢查 Service Worker 失敗:",S)}console.log("📋 PWA 安裝條件檢查結果:",m);const w=Object.values(m).every(Boolean);return console.log(w?"✅ 所有條件滿足":"❌ 部分條件不滿足"),m};x.useEffect(()=>{typeof window<"u"&&(window.forcePWAPrompt=_,window.pwaPromptStatus={user:!!t,isInstalled:i,isStandalone:c,showInstallPrompt:r,deferredPrompt:!!e,isIOS:a},window.checkPWAStatus=()=>{console.log("🔍 PWA 狀態檢查:",{protocol:window.location.protocol,hostname:window.location.hostname,isHTTPS:window.location.protocol==="https:",isLocalhost:window.location.hostname==="localhost",hasServiceWorker:"serviceWorker"in navigator,swRegistrations:navigator.serviceWorker?navigator.serviceWorker.getRegistrations():"N/A",hasManifest:!!document.querySelector('link[rel="manifest"]'),deferredPrompt:!!e,isStandalone:window.matchMedia("(display-mode: standalone)").matches,userAgent:navigator.userAgent})},window.checkInstallability=k)},[t,i,c,r,e,a]);const p=(()=>{if(console.log("🔍 shouldShowPrompt 檢查:",{isInstalled:i,isStandalone:c,showInstallPrompt:r,isIOS:a,user:!!t}),i||c)return console.log("❌ 已安裝或已在獨立模式"),!1;const m=localStorage.getItem("pwa-install-dismissed");if(m){const S=parseInt(m),E=(Date.now()-S)/(1e3*60*60);if(console.log("⏰ 距離上次關閉:",E.toFixed(1),"小時"),E<.5)return console.log("❌ 太早重複顯示"),!1}const w=r||a&&t;return console.log("✅ shouldShowPrompt 結果:",w),w})();return console.log("🎯 最終顯示決定:",p),p?u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-sm",children:u.jsx("div",{className:"bg-white dark:bg-dark-card rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-4 animate-slide-up",children:u.jsxs("div",{className:"flex items-start gap-3",children:[u.jsx("div",{className:"flex-shrink-0",children:u.jsx("div",{className:"w-12 h-12 bg-gradient-to-r from-sea-blue to-sea-blue-dark rounded-lg flex items-center justify-center",children:u.jsx("svg",{className:"w-6 h-6 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"})})})}),u.jsxs("div",{className:"flex-1 min-w-0",children:[u.jsx("h3",{className:"text-sm font-semibold text-gray-900 dark:text-white mb-1",children:t?`歡迎 ${t.displayName||t.nickname||"朋友"}！`:"安裝 LalaLand 應用程式"}),u.jsx("p",{className:"text-xs text-gray-600 dark:text-gray-300 mb-3",children:a?"安裝到主畫面以獲得更好的聊天體驗和通知功能":"將 LalaLand 安裝為應用程式，享受更流暢的聊天體驗"}),u.jsxs("div",{className:"flex gap-2",children:[u.jsx("button",{onClick:y,className:"flex-1 bg-gradient-to-r from-sea-blue to-sea-blue-dark text-white text-xs font-medium py-2 px-3 rounded-md hover:opacity-90 transition-opacity",disabled:!e&&!a,children:a?"查看安裝步驟":"立即安裝"}),u.jsx("button",{onClick:g,className:"flex-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium py-2 px-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors",children:"稍後再說"})]})]}),u.jsx("button",{onClick:g,className:"flex-shrink-0 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors",children:u.jsx("svg",{className:"w-4 h-4",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})})]})})}),h&&u.jsx("div",{className:"fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-4",children:u.jsxs("div",{className:"bg-white dark:bg-dark-card rounded-2xl p-6 max-w-sm w-full mx-4 shadow-2xl relative",children:[u.jsx("button",{onClick:()=>f(!1),className:"absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors",children:u.jsx("svg",{className:"w-5 h-5",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})}),u.jsxs("div",{className:"text-center mb-6",children:[u.jsx("div",{className:"w-16 h-16 bg-gradient-to-br from-sea-blue to-sea-blue-dark rounded-full flex items-center justify-center mx-auto mb-4",children:u.jsx("svg",{className:"w-8 h-8 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"})})}),u.jsx("h2",{className:"text-xl font-bold text-gray-900 dark:text-white mb-2",children:"在 iPhone/iPad 上安裝"})]}),u.jsxs("div",{className:"space-y-4 mb-6",children:[u.jsxs("div",{className:"flex items-start space-x-3",children:[u.jsx("div",{className:"flex-shrink-0 w-6 h-6 bg-sea-blue text-white rounded-full flex items-center justify-center text-sm font-bold",children:"1"}),u.jsxs("div",{className:"text-sm text-gray-600 dark:text-gray-300",children:["點擊瀏覽器底部的 ",u.jsx("strong",{children:"分享按鈕"})," (",u.jsx("svg",{className:"w-4 h-4 inline mx-1",fill:"currentColor",viewBox:"0 0 20 20",children:u.jsx("path",{d:"M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"})}),")"]})]}),u.jsxs("div",{className:"flex items-start space-x-3",children:[u.jsx("div",{className:"flex-shrink-0 w-6 h-6 bg-sea-blue text-white rounded-full flex items-center justify-center text-sm font-bold",children:"2"}),u.jsxs("div",{className:"text-sm text-gray-600 dark:text-gray-300",children:["選擇 ",u.jsx("strong",{children:"「加入主畫面」"})]})]}),u.jsxs("div",{className:"flex items-start space-x-3",children:[u.jsx("div",{className:"flex-shrink-0 w-6 h-6 bg-sea-blue text-white rounded-full flex items-center justify-center text-sm font-bold",children:"3"}),u.jsxs("div",{className:"text-sm text-gray-600 dark:text-gray-300",children:["點擊 ",u.jsx("strong",{children:"「加入」"})," 完成安裝"]})]})]}),u.jsx("button",{onClick:()=>f(!1),className:"w-full bg-gradient-to-r from-sea-blue to-sea-blue-dark text-white py-3 px-4 rounded-lg font-medium hover:opacity-90 transition-opacity",children:"我知道了"})]})})]}):null};class vj{constructor(){this.isInstalled=!1,this.isStandalone=!1,this.deferredPrompt=null,this.init()}init(){this.detectPWAStatus(),this.setupEventListeners(),this.checkForUpdates()}detectPWAStatus(){this.isStandalone=window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone===!0,this.isInstalled=this.isStandalone,console.log("📱 PWA 狀態檢測:",{isInstalled:this.isInstalled,isStandalone:this.isStandalone,displayMode:this.getDisplayMode(),userAgent:navigator.userAgent})}getDisplayMode(){const e=["fullscreen","standalone","minimal-ui","browser"];for(const n of e)if(window.matchMedia(`(display-mode: ${n})`).matches)return n;return"browser"}setupEventListeners(){window.addEventListener("beforeinstallprompt",e=>{console.log("💻 PWA 安裝提示事件"),e.preventDefault(),this.deferredPrompt=e}),window.addEventListener("appinstalled",()=>{console.log("✅ PWA 安裝完成"),this.isInstalled=!0,this.deferredPrompt=null}),window.matchMedia("(display-mode: standalone)").addEventListener("change",e=>{console.log("🔄 顯示模式變更:",e.matches?"standalone":"browser"),this.isStandalone=e.matches})}async checkForUpdates(){if("serviceWorker"in navigator)try{const e=await navigator.serviceWorker.getRegistration();e&&(await e.update(),e.addEventListener("updatefound",()=>{const n=e.installing;console.log("🔄 發現 Service Worker 更新"),n.addEventListener("statechange",()=>{n.state==="installed"&&navigator.serviceWorker.controller&&(console.log("📦 新版本可用，建議重新載入"),this.showUpdatePrompt())})}))}catch(e){console.error("❌ Service Worker 更新檢查失敗:",e)}}showUpdatePrompt(){window.showNotification&&window.showNotification("🔄 發現新版本，建議重新載入以獲得最新功能","info",1e4)}async promptInstall(){if(!this.deferredPrompt)return console.warn("⚠️ 無法觸發安裝：沒有 beforeinstallprompt 事件"),!1;try{console.log("🚀 觸發 PWA 安裝");const e=await this.deferredPrompt.prompt();return console.log("📱 用戶選擇:",e.outcome),this.deferredPrompt=null,e.outcome==="accepted"}catch(e){return console.error("❌ PWA 安裝失敗:",e),!1}}getInstallInstructions(){const e=navigator.userAgent.toLowerCase();return/ipad|iphone|ipod/.test(e)?{platform:"iOS",browser:"Safari",steps:["點擊瀏覽器底部的分享按鈕 📤","在彈出選單中選擇「加入主畫面」","確認應用程式名稱並點擊「新增」","在主畫面找到 LalaLand 圖示並點擊開啟"]}:/android/.test(e)?/chrome/.test(e)?{platform:"Android",browser:"Chrome",steps:["點擊瀏覽器右上角的選單按鈕 ⋮","選擇「安裝應用程式」或「加入主畫面」","確認安裝並等待完成","在主畫面或應用程式清單中找到 LalaLand"]}:{platform:"Android",browser:"其他瀏覽器",steps:["建議使用 Chrome 瀏覽器獲得最佳體驗","或檢查瀏覽器選單中的「加入主畫面」選項"]}:{platform:"桌面",browser:"瀏覽器",steps:["點擊網址列右側的安裝圖示 💻","或檢查瀏覽器選單中的安裝選項","確認安裝並等待完成"]}}checkPWAFeatures(){const e={serviceWorker:"serviceWorker"in navigator,notifications:"Notification"in window,pushManager:"PushManager"in window,backgroundSync:"serviceWorker"in navigator&&"sync"in window.ServiceWorkerRegistration.prototype,webShare:"share"in navigator,installPrompt:!!this.deferredPrompt,standalone:this.isStandalone};return console.log("🔍 PWA 功能支援:",e),e}getPWAStats(){return{isInstalled:this.isInstalled,isStandalone:this.isStandalone,displayMode:this.getDisplayMode(),canInstall:!!this.deferredPrompt,features:this.checkPWAFeatures(),installInstructions:this.getInstallInstructions()}}}const _j=new vj;typeof window<"u"&&(window.pwaManager=_j);window.addEventListener("error",t=>{console.error("🚨 全域錯誤:",t.error),t.preventDefault()});window.addEventListener("unhandledrejection",t=>{console.error("🚨 未處理的 Promise 拒絕:",t.reason),t.preventDefault()});function wj(){const{user:t,setUser:e,loading:n,setLoading:r}=De();return x.useEffect(()=>{(async()=>{try{await us.initialize(),console.log("✅ FCM 系統已初始化")}catch(o){console.error("❌ FCM 初始化失敗:",o)}})(),"serviceWorker"in navigator?setTimeout(()=>{navigator.serviceWorker.register("/sw.js").then(o=>{console.log("📱 Service Worker 註冊成功:",o.scope),o.addEventListener("updatefound",()=>{console.log("🔄 Service Worker 更新中...");const a=o.installing;a&&a.addEventListener("statechange",()=>{a.state==="installed"&&console.log("✅ Service Worker 更新完成")})})}).catch(o=>{console.error("📱 Service Worker 註冊失敗:",o)})},1e3):console.warn("📱 此瀏覽器不支援 Service Worker");const i=JI(an,async o=>{if(o){let a=o.displayName||"匿名用戶",l=o.photoURL||null;try{const c=q(K,`users/${o.uid}`),d=await Kt(c);if(d.exists()){const h=d.val();a=h.nickname||a,l=h.avatar||l}}catch(c){console.warn("無法讀取用戶資料:",c)}e({uid:o.uid,email:o.email,nickname:a,avatar:l,isAnonymous:o.isAnonymous}),console.log("✅ 用戶已登入:",o.uid,"暱稱:",a),setTimeout(async()=>{console.log("🔔 自動請求通知權限...");const c=await us.requestPermissionSilently(o.uid);c?console.log("✅ 通知權限已獲得，FCM Token:",c.substring(0,20)+"..."):console.log("ℹ️ 通知權限未獲得或瀏覽器不支援 FCM")},2e3)}else e(null);r(!1)});return()=>i()},[e,r]),x.useEffect(()=>{const s=async i=>{if(t&&t.isAnonymous){console.log("🗑️ 匿名用戶關閉頁面 - 嘗試清理資料");try{const o=q(K,`users/${t.uid}`);await dc(o),console.log("✅ 匿名用戶資料已清理")}catch(o){console.error("❌ 清理匿名用戶資料失敗:",o)}}};return window.addEventListener("beforeunload",s),()=>{window.removeEventListener("beforeunload",s)}},[t]),n?u.jsx(fj,{}):u.jsx(pj,{children:u.jsx(nb,{future:{v7_startTransition:!0,v7_relativeSplatPath:!0},children:u.jsxs("div",{className:"min-h-screen",children:[u.jsxs(ZS,{children:[u.jsx(pi,{path:"/",element:t?u.jsx(pu,{}):u.jsx(HM,{})}),u.jsx(pi,{path:"/login",element:t&&!t.isAnonymous?u.jsx(pu,{}):u.jsx(jg,{})}),u.jsx(pi,{path:"/chat",element:t?u.jsx(pu,{}):u.jsx(jg,{})}),u.jsx(pi,{path:"/debug",element:u.jsx(hj,{})})]}),u.jsx(Vb,{position:"top-center",toastOptions:{duration:3e3,style:{background:"#2877b9",color:"#fff",borderRadius:"12px"}}}),u.jsx(gj,{}),u.jsx(yj,{user:t})]})})})}class xj{constructor(){this.initialized=!1,this.maxRetries=3,this.retryDelay=1e3}async initialize(){if(this.initialized){console.log("✅ PWA 已初始化");return}console.log("🚀 開始初始化 PWA...");try{await this.checkCompatibility(),await this.initServiceWorker(),await this.handleAndroidIssues(),this.setupErrorHandlers(),this.initialized=!0,console.log("✅ PWA 初始化完成")}catch(e){console.error("❌ PWA 初始化失敗:",e)}}async checkCompatibility(){const e={serviceWorker:"serviceWorker"in navigator,localStorage:this.checkLocalStorage(),sessionStorage:this.checkSessionStorage(),indexedDB:"indexedDB"in window,fetch:"fetch"in window,promises:"Promise"in window};console.log("🔍 兼容性檢查:",e);const n=Object.entries(e).filter(([r,s])=>!s).map(([r])=>r);return n.length>0&&console.warn("⚠️ 以下功能不支援:",n),e}checkLocalStorage(){try{const e="__pwa_test__";return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch{return!1}}checkSessionStorage(){try{const e="__pwa_test__";return sessionStorage.setItem(e,e),sessionStorage.removeItem(e),!0}catch{return!1}}async initServiceWorker(){if(!("serviceWorker"in navigator)){console.warn("⚠️ Service Worker 不支援");return}let e=0;for(;e<this.maxRetries;)try{console.log(`🔄 註冊 Service Worker (第 ${e+1} 次嘗試)`);const n=await navigator.serviceWorker.register("/sw.js",{scope:"/",updateViaCache:"none"});return console.log("✅ Service Worker 註冊成功:",n.scope),n.addEventListener("updatefound",()=>{console.log("📦 發現 Service Worker 更新");const r=n.installing;r&&r.addEventListener("statechange",()=>{r.state==="installed"&&navigator.serviceWorker.controller&&console.log("🔄 Service Worker 已更新，建議重新載入")})}),n}catch(n){if(e++,console.warn(`❌ Service Worker 註冊失敗 (第 ${e} 次):`,n),e<this.maxRetries)await this.delay(this.retryDelay*e);else throw n}}async handleAndroidIssues(){const e=/Android/i.test(navigator.userAgent),n=/Chrome/i.test(navigator.userAgent);if(e){console.log("📱 檢測到 Android 設備，套用優化設置"),document.body&&(document.body.style.touchAction="manipulation");const r=document.querySelector("meta[name=viewport]");r&&(r.content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"),n&&(document.documentElement.style.transform="translateZ(0)",document.documentElement.style.overflowScrolling="touch"),this.setupMemoryManagement()}}setupMemoryManagement(){"memory"in performance&&setInterval(()=>{const n=performance.memory,r=n.usedJSHeapSize/n.jsHeapSizeLimit*100;r>80&&(console.warn("⚠️ 記憶體使用率過高:",`${r.toFixed(1)}%`),this.cleanupMemory())},3e4),document.addEventListener("visibilitychange",()=>{document.hidden&&this.cleanupMemory()})}cleanupMemory(){console.log("🧹 執行記憶體清理..."),console.clear&&console.clear(),window.gc&&window.gc()}setupErrorHandlers(){window.addEventListener("beforeinstallprompt",e=>{console.log("📲 PWA 安裝提示準備就緒")}),window.addEventListener("appinstalled",()=>{console.log("✅ PWA 安裝成功")}),window.addEventListener("online",()=>{console.log("🌐 網路已連接")}),window.addEventListener("offline",()=>{console.log("📴 網路已斷線")})}delay(e){return new Promise(n=>setTimeout(n,e))}isInitialized(){return this.initialized}}const Lg=new xj;document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>{Lg.initialize()}):Lg.initialize();const kj=()=>{try{mu.createRoot(document.getElementById("root")).render(u.jsx(Sl.StrictMode,{children:u.jsx(wj,{})})),console.log("✅ 應用程式渲染成功")}catch(t){console.error("❌ 應用程式渲染失敗:",t);const e=document.getElementById("root");e&&(e.innerHTML=`
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
      `)}};kj();
//# sourceMappingURL=index-Bn_XgLWs.js.map
