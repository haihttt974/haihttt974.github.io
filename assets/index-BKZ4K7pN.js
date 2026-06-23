var fh=e=>{throw TypeError(e)};var _s=(e,t,n)=>t.has(e)||fh("Cannot "+n);var I=(e,t,n)=>(_s(e,t,"read from private field"),n?n.call(e):t.get(e)),Y=(e,t,n)=>t.has(e)?fh("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),B=(e,t,n,r)=>(_s(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n),Ae=(e,t,n)=>(_s(e,t,"access private method"),n);var jo=(e,t,n,r)=>({set _(i){B(e,t,i,n)},get _(){return I(e,t,r)}});import{r as g,g as pv,R as Yl,j as a,a as zn,u as qn,m as xe,L as gv,d as mv,A as fv}from"./motion-DrBT6qPh.js";import{S as yv,P as vv,W as bv,a as wv,A as xv,b as kv,D as Tv,c as yh,G as Bp,M as Vi,T as Cv,d as Xl,I as Sv,L as zi,E as xa,e as ka,B as Pv,f as Nv,g as vh,h as Av,C as Iv,i as bh,j as Ev,k as jv,O as Rv,l as Lv,m as Mv,V as Dv}from"./three-DfGjiPv-.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var Vp={exports:{}},et={},zp={exports:{}},Hp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,M){var _=N.length;N.push(M);e:for(;0<_;){var H=_-1>>>1,Z=N[H];if(0<i(Z,M))N[H]=M,N[_]=Z,_=H;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var M=N[0],_=N.pop();if(_!==M){N[0]=_;e:for(var H=0,Z=N.length,Ge=Z>>>1;H<Ge;){var Me=2*(H+1)-1,rn=N[Me],Ke=Me+1,_t=N[Ke];if(0>i(rn,_))Ke<Z&&0>i(_t,rn)?(N[H]=_t,N[Ke]=_,H=Ke):(N[H]=rn,N[Me]=_,H=Me);else if(Ke<Z&&0>i(_t,_))N[H]=_t,N[Ke]=_,H=Ke;else break e}}return M}function i(N,M){var _=N.sortIndex-M.sortIndex;return _!==0?_:N.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,c=s.now();e.unstable_now=function(){return s.now()-c}}var l=[],u=[],h=1,d=null,p=3,v=!1,k=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(N){for(var M=n(u);M!==null;){if(M.callback===null)r(u);else if(M.startTime<=N)r(u),M.sortIndex=M.expirationTime,t(l,M);else break;M=n(u)}}function w(N){if(y=!1,b(N),!k)if(n(l)!==null)k=!0,z(T);else{var M=n(u);M!==null&&K(w,M.startTime-N)}}function T(N,M){k=!1,y&&(y=!1,f(C),C=-1),v=!0;var _=p;try{for(b(M),d=n(l);d!==null&&(!(d.expirationTime>M)||N&&!q());){var H=d.callback;if(typeof H=="function"){d.callback=null,p=d.priorityLevel;var Z=H(d.expirationTime<=M);M=e.unstable_now(),typeof Z=="function"?d.callback=Z:d===n(l)&&r(l),b(M)}else r(l);d=n(l)}if(d!==null)var Ge=!0;else{var Me=n(u);Me!==null&&K(w,Me.startTime-M),Ge=!1}return Ge}finally{d=null,p=_,v=!1}}var S=!1,P=null,C=-1,A=5,E=-1;function q(){return!(e.unstable_now()-E<A)}function L(){if(P!==null){var N=e.unstable_now();E=N;var M=!0;try{M=P(!0,N)}finally{M?W():(S=!1,P=null)}}else S=!1}var W;if(typeof m=="function")W=function(){m(L)};else if(typeof MessageChannel<"u"){var D=new MessageChannel,G=D.port2;D.port1.onmessage=L,W=function(){G.postMessage(null)}}else W=function(){x(L,0)};function z(N){P=N,S||(S=!0,W())}function K(N,M){C=x(function(){N(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){k||v||(k=!0,z(T))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(N){switch(p){case 1:case 2:case 3:var M=3;break;default:M=p}var _=p;p=M;try{return N()}finally{p=_}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,M){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var _=p;p=N;try{return M()}finally{p=_}},e.unstable_scheduleCallback=function(N,M,_){var H=e.unstable_now();switch(typeof _=="object"&&_!==null?(_=_.delay,_=typeof _=="number"&&0<_?H+_:H):_=H,N){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=_+Z,N={id:h++,callback:M,priorityLevel:N,startTime:_,expirationTime:Z,sortIndex:-1},_>H?(N.sortIndex=_,t(u,N),n(l)===null&&N===n(u)&&(y?(f(C),C=-1):y=!0,K(w,_-H))):(N.sortIndex=Z,t(l,N),k||v||(k=!0,z(T))),N},e.unstable_shouldYield=q,e.unstable_wrapCallback=function(N){var M=p;return function(){var _=p;p=M;try{return N.apply(this,arguments)}finally{p=_}}}})(Hp);zp.exports=Hp;var qv=zp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ov=g,Ze=qv;function R(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Wp=new Set,Hi={};function dr(e,t){Xr(e,t),Xr(e+"Capture",t)}function Xr(e,t){for(Hi[e]=t,e=0;e<t.length;e++)Wp.add(t[e])}var Qt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Rc=Object.prototype.hasOwnProperty,Uv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,wh={},xh={};function _v(e){return Rc.call(xh,e)?!0:Rc.call(wh,e)?!1:Uv.test(e)?xh[e]=!0:(wh[e]=!0,!1)}function Fv(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Bv(e,t,n,r){if(t===null||typeof t>"u"||Fv(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function _e(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var Se={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Se[e]=new _e(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Se[t]=new _e(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Se[e]=new _e(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Se[e]=new _e(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Se[e]=new _e(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Se[e]=new _e(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Se[e]=new _e(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Se[e]=new _e(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Se[e]=new _e(e,5,!1,e.toLowerCase(),null,!1,!1)});var Jl=/[\-:]([a-z])/g;function Zl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Jl,Zl);Se[t]=new _e(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Jl,Zl);Se[t]=new _e(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Jl,Zl);Se[t]=new _e(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Se[e]=new _e(e,1,!1,e.toLowerCase(),null,!1,!1)});Se.xlinkHref=new _e("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Se[e]=new _e(e,1,!1,e.toLowerCase(),null,!0,!0)});function eu(e,t,n,r){var i=Se.hasOwnProperty(t)?Se[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Bv(t,n,i,r)&&(n=null),r||i===null?_v(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var nn=Ov.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ro=Symbol.for("react.element"),xr=Symbol.for("react.portal"),kr=Symbol.for("react.fragment"),tu=Symbol.for("react.strict_mode"),Lc=Symbol.for("react.profiler"),Gp=Symbol.for("react.provider"),Kp=Symbol.for("react.context"),nu=Symbol.for("react.forward_ref"),Mc=Symbol.for("react.suspense"),Dc=Symbol.for("react.suspense_list"),ru=Symbol.for("react.memo"),un=Symbol.for("react.lazy"),$p=Symbol.for("react.offscreen"),kh=Symbol.iterator;function vi(e){return e===null||typeof e!="object"?null:(e=kh&&e[kh]||e["@@iterator"],typeof e=="function"?e:null)}var le=Object.assign,Fs;function Ai(e){if(Fs===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Fs=t&&t[1]||""}return`
`+Fs+e}var Bs=!1;function Vs(e,t){if(!e||Bs)return"";Bs=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,c=o.length-1;1<=s&&0<=c&&i[s]!==o[c];)c--;for(;1<=s&&0<=c;s--,c--)if(i[s]!==o[c]){if(s!==1||c!==1)do if(s--,c--,0>c||i[s]!==o[c]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=c);break}}}finally{Bs=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ai(e):""}function Vv(e){switch(e.tag){case 5:return Ai(e.type);case 16:return Ai("Lazy");case 13:return Ai("Suspense");case 19:return Ai("SuspenseList");case 0:case 2:case 15:return e=Vs(e.type,!1),e;case 11:return e=Vs(e.type.render,!1),e;case 1:return e=Vs(e.type,!0),e;default:return""}}function qc(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case kr:return"Fragment";case xr:return"Portal";case Lc:return"Profiler";case tu:return"StrictMode";case Mc:return"Suspense";case Dc:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Kp:return(e.displayName||"Context")+".Consumer";case Gp:return(e._context.displayName||"Context")+".Provider";case nu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ru:return t=e.displayName||null,t!==null?t:qc(e.type)||"Memo";case un:t=e._payload,e=e._init;try{return qc(e(t))}catch{}}return null}function zv(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return qc(t);case 8:return t===tu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Rn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Qp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Hv(e){var t=Qp(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Lo(e){e._valueTracker||(e._valueTracker=Hv(e))}function Yp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Qp(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ta(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Oc(e,t){var n=t.checked;return le({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Th(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Rn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Xp(e,t){t=t.checked,t!=null&&eu(e,"checked",t,!1)}function Uc(e,t){Xp(e,t);var n=Rn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?_c(e,t.type,n):t.hasOwnProperty("defaultValue")&&_c(e,t.type,Rn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ch(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function _c(e,t,n){(t!=="number"||Ta(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ii=Array.isArray;function Lr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Rn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Fc(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(R(91));return le({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Sh(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(R(92));if(Ii(n)){if(1<n.length)throw Error(R(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Rn(n)}}function Jp(e,t){var n=Rn(t.value),r=Rn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ph(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Zp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Bc(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Zp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Mo,eg=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Mo=Mo||document.createElement("div"),Mo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Mo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Wi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ri={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Wv=["Webkit","ms","Moz","O"];Object.keys(Ri).forEach(function(e){Wv.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ri[t]=Ri[e]})});function tg(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ri.hasOwnProperty(e)&&Ri[e]?(""+t).trim():t+"px"}function ng(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=tg(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Gv=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Vc(e,t){if(t){if(Gv[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(R(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(R(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(R(61))}if(t.style!=null&&typeof t.style!="object")throw Error(R(62))}}function zc(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Hc=null;function iu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Wc=null,Mr=null,Dr=null;function Nh(e){if(e=wo(e)){if(typeof Wc!="function")throw Error(R(280));var t=e.stateNode;t&&(t=cs(t),Wc(e.stateNode,e.type,t))}}function rg(e){Mr?Dr?Dr.push(e):Dr=[e]:Mr=e}function ig(){if(Mr){var e=Mr,t=Dr;if(Dr=Mr=null,Nh(e),t)for(e=0;e<t.length;e++)Nh(t[e])}}function og(e,t){return e(t)}function ag(){}var zs=!1;function sg(e,t,n){if(zs)return e(t,n);zs=!0;try{return og(e,t,n)}finally{zs=!1,(Mr!==null||Dr!==null)&&(ag(),ig())}}function Gi(e,t){var n=e.stateNode;if(n===null)return null;var r=cs(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(R(231,t,typeof n));return n}var Gc=!1;if(Qt)try{var bi={};Object.defineProperty(bi,"passive",{get:function(){Gc=!0}}),window.addEventListener("test",bi,bi),window.removeEventListener("test",bi,bi)}catch{Gc=!1}function Kv(e,t,n,r,i,o,s,c,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(h){this.onError(h)}}var Li=!1,Ca=null,Sa=!1,Kc=null,$v={onError:function(e){Li=!0,Ca=e}};function Qv(e,t,n,r,i,o,s,c,l){Li=!1,Ca=null,Kv.apply($v,arguments)}function Yv(e,t,n,r,i,o,s,c,l){if(Qv.apply(this,arguments),Li){if(Li){var u=Ca;Li=!1,Ca=null}else throw Error(R(198));Sa||(Sa=!0,Kc=u)}}function pr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function cg(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ah(e){if(pr(e)!==e)throw Error(R(188))}function Xv(e){var t=e.alternate;if(!t){if(t=pr(e),t===null)throw Error(R(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Ah(i),e;if(o===r)return Ah(i),t;o=o.sibling}throw Error(R(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,c=i.child;c;){if(c===n){s=!0,n=i,r=o;break}if(c===r){s=!0,r=i,n=o;break}c=c.sibling}if(!s){for(c=o.child;c;){if(c===n){s=!0,n=o,r=i;break}if(c===r){s=!0,r=o,n=i;break}c=c.sibling}if(!s)throw Error(R(189))}}if(n.alternate!==r)throw Error(R(190))}if(n.tag!==3)throw Error(R(188));return n.stateNode.current===n?e:t}function lg(e){return e=Xv(e),e!==null?ug(e):null}function ug(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ug(e);if(t!==null)return t;e=e.sibling}return null}var hg=Ze.unstable_scheduleCallback,Ih=Ze.unstable_cancelCallback,Jv=Ze.unstable_shouldYield,Zv=Ze.unstable_requestPaint,de=Ze.unstable_now,eb=Ze.unstable_getCurrentPriorityLevel,ou=Ze.unstable_ImmediatePriority,dg=Ze.unstable_UserBlockingPriority,Pa=Ze.unstable_NormalPriority,tb=Ze.unstable_LowPriority,pg=Ze.unstable_IdlePriority,is=null,Lt=null;function nb(e){if(Lt&&typeof Lt.onCommitFiberRoot=="function")try{Lt.onCommitFiberRoot(is,e,void 0,(e.current.flags&128)===128)}catch{}}var bt=Math.clz32?Math.clz32:ob,rb=Math.log,ib=Math.LN2;function ob(e){return e>>>=0,e===0?32:31-(rb(e)/ib|0)|0}var Do=64,qo=4194304;function Ei(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Na(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var c=s&~i;c!==0?r=Ei(c):(o&=s,o!==0&&(r=Ei(o)))}else s=n&~i,s!==0?r=Ei(s):o!==0&&(r=Ei(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-bt(t),i=1<<n,r|=e[n],t&=~i;return r}function ab(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function sb(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-bt(o),c=1<<s,l=i[s];l===-1?(!(c&n)||c&r)&&(i[s]=ab(c,t)):l<=t&&(e.expiredLanes|=c),o&=~c}}function $c(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function gg(){var e=Do;return Do<<=1,!(Do&4194240)&&(Do=64),e}function Hs(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function vo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-bt(t),e[t]=n}function cb(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-bt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function au(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-bt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var J=0;function mg(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var fg,su,yg,vg,bg,Qc=!1,Oo=[],Tn=null,Cn=null,Sn=null,Ki=new Map,$i=new Map,dn=[],lb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Eh(e,t){switch(e){case"focusin":case"focusout":Tn=null;break;case"dragenter":case"dragleave":Cn=null;break;case"mouseover":case"mouseout":Sn=null;break;case"pointerover":case"pointerout":Ki.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":$i.delete(t.pointerId)}}function wi(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=wo(t),t!==null&&su(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function ub(e,t,n,r,i){switch(t){case"focusin":return Tn=wi(Tn,e,t,n,r,i),!0;case"dragenter":return Cn=wi(Cn,e,t,n,r,i),!0;case"mouseover":return Sn=wi(Sn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Ki.set(o,wi(Ki.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,$i.set(o,wi($i.get(o)||null,e,t,n,r,i)),!0}return!1}function wg(e){var t=Kn(e.target);if(t!==null){var n=pr(t);if(n!==null){if(t=n.tag,t===13){if(t=cg(n),t!==null){e.blockedOn=t,bg(e.priority,function(){yg(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ia(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Yc(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Hc=r,n.target.dispatchEvent(r),Hc=null}else return t=wo(n),t!==null&&su(t),e.blockedOn=n,!1;t.shift()}return!0}function jh(e,t,n){ia(e)&&n.delete(t)}function hb(){Qc=!1,Tn!==null&&ia(Tn)&&(Tn=null),Cn!==null&&ia(Cn)&&(Cn=null),Sn!==null&&ia(Sn)&&(Sn=null),Ki.forEach(jh),$i.forEach(jh)}function xi(e,t){e.blockedOn===t&&(e.blockedOn=null,Qc||(Qc=!0,Ze.unstable_scheduleCallback(Ze.unstable_NormalPriority,hb)))}function Qi(e){function t(i){return xi(i,e)}if(0<Oo.length){xi(Oo[0],e);for(var n=1;n<Oo.length;n++){var r=Oo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Tn!==null&&xi(Tn,e),Cn!==null&&xi(Cn,e),Sn!==null&&xi(Sn,e),Ki.forEach(t),$i.forEach(t),n=0;n<dn.length;n++)r=dn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<dn.length&&(n=dn[0],n.blockedOn===null);)wg(n),n.blockedOn===null&&dn.shift()}var qr=nn.ReactCurrentBatchConfig,Aa=!0;function db(e,t,n,r){var i=J,o=qr.transition;qr.transition=null;try{J=1,cu(e,t,n,r)}finally{J=i,qr.transition=o}}function pb(e,t,n,r){var i=J,o=qr.transition;qr.transition=null;try{J=4,cu(e,t,n,r)}finally{J=i,qr.transition=o}}function cu(e,t,n,r){if(Aa){var i=Yc(e,t,n,r);if(i===null)ec(e,t,r,Ia,n),Eh(e,r);else if(ub(i,e,t,n,r))r.stopPropagation();else if(Eh(e,r),t&4&&-1<lb.indexOf(e)){for(;i!==null;){var o=wo(i);if(o!==null&&fg(o),o=Yc(e,t,n,r),o===null&&ec(e,t,r,Ia,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else ec(e,t,r,null,n)}}var Ia=null;function Yc(e,t,n,r){if(Ia=null,e=iu(r),e=Kn(e),e!==null)if(t=pr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=cg(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ia=e,null}function xg(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(eb()){case ou:return 1;case dg:return 4;case Pa:case tb:return 16;case pg:return 536870912;default:return 16}default:return 16}}var bn=null,lu=null,oa=null;function kg(){if(oa)return oa;var e,t=lu,n=t.length,r,i="value"in bn?bn.value:bn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return oa=i.slice(e,1<r?1-r:void 0)}function aa(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Uo(){return!0}function Rh(){return!1}function tt(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(n=e[c],this[c]=n?n(o):o[c]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Uo:Rh,this.isPropagationStopped=Rh,this}return le(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Uo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Uo)},persist:function(){},isPersistent:Uo}),t}var hi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},uu=tt(hi),bo=le({},hi,{view:0,detail:0}),gb=tt(bo),Ws,Gs,ki,os=le({},bo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ki&&(ki&&e.type==="mousemove"?(Ws=e.screenX-ki.screenX,Gs=e.screenY-ki.screenY):Gs=Ws=0,ki=e),Ws)},movementY:function(e){return"movementY"in e?e.movementY:Gs}}),Lh=tt(os),mb=le({},os,{dataTransfer:0}),fb=tt(mb),yb=le({},bo,{relatedTarget:0}),Ks=tt(yb),vb=le({},hi,{animationName:0,elapsedTime:0,pseudoElement:0}),bb=tt(vb),wb=le({},hi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),xb=tt(wb),kb=le({},hi,{data:0}),Mh=tt(kb),Tb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Cb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pb(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Sb[e])?!!t[e]:!1}function hu(){return Pb}var Nb=le({},bo,{key:function(e){if(e.key){var t=Tb[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=aa(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Cb[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hu,charCode:function(e){return e.type==="keypress"?aa(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?aa(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ab=tt(Nb),Ib=le({},os,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Dh=tt(Ib),Eb=le({},bo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hu}),jb=tt(Eb),Rb=le({},hi,{propertyName:0,elapsedTime:0,pseudoElement:0}),Lb=tt(Rb),Mb=le({},os,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Db=tt(Mb),qb=[9,13,27,32],du=Qt&&"CompositionEvent"in window,Mi=null;Qt&&"documentMode"in document&&(Mi=document.documentMode);var Ob=Qt&&"TextEvent"in window&&!Mi,Tg=Qt&&(!du||Mi&&8<Mi&&11>=Mi),qh=" ",Oh=!1;function Cg(e,t){switch(e){case"keyup":return qb.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sg(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Tr=!1;function Ub(e,t){switch(e){case"compositionend":return Sg(t);case"keypress":return t.which!==32?null:(Oh=!0,qh);case"textInput":return e=t.data,e===qh&&Oh?null:e;default:return null}}function _b(e,t){if(Tr)return e==="compositionend"||!du&&Cg(e,t)?(e=kg(),oa=lu=bn=null,Tr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Tg&&t.locale!=="ko"?null:t.data;default:return null}}var Fb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Uh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Fb[e.type]:t==="textarea"}function Pg(e,t,n,r){rg(r),t=Ea(t,"onChange"),0<t.length&&(n=new uu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Di=null,Yi=null;function Bb(e){Og(e,0)}function as(e){var t=Pr(e);if(Yp(t))return e}function Vb(e,t){if(e==="change")return t}var Ng=!1;if(Qt){var $s;if(Qt){var Qs="oninput"in document;if(!Qs){var _h=document.createElement("div");_h.setAttribute("oninput","return;"),Qs=typeof _h.oninput=="function"}$s=Qs}else $s=!1;Ng=$s&&(!document.documentMode||9<document.documentMode)}function Fh(){Di&&(Di.detachEvent("onpropertychange",Ag),Yi=Di=null)}function Ag(e){if(e.propertyName==="value"&&as(Yi)){var t=[];Pg(t,Yi,e,iu(e)),sg(Bb,t)}}function zb(e,t,n){e==="focusin"?(Fh(),Di=t,Yi=n,Di.attachEvent("onpropertychange",Ag)):e==="focusout"&&Fh()}function Hb(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return as(Yi)}function Wb(e,t){if(e==="click")return as(t)}function Gb(e,t){if(e==="input"||e==="change")return as(t)}function Kb(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var xt=typeof Object.is=="function"?Object.is:Kb;function Xi(e,t){if(xt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Rc.call(t,i)||!xt(e[i],t[i]))return!1}return!0}function Bh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Vh(e,t){var n=Bh(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Bh(n)}}function Ig(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ig(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Eg(){for(var e=window,t=Ta();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ta(e.document)}return t}function pu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function $b(e){var t=Eg(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Ig(n.ownerDocument.documentElement,n)){if(r!==null&&pu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Vh(n,o);var s=Vh(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Qb=Qt&&"documentMode"in document&&11>=document.documentMode,Cr=null,Xc=null,qi=null,Jc=!1;function zh(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Jc||Cr==null||Cr!==Ta(r)||(r=Cr,"selectionStart"in r&&pu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),qi&&Xi(qi,r)||(qi=r,r=Ea(Xc,"onSelect"),0<r.length&&(t=new uu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Cr)))}function _o(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Sr={animationend:_o("Animation","AnimationEnd"),animationiteration:_o("Animation","AnimationIteration"),animationstart:_o("Animation","AnimationStart"),transitionend:_o("Transition","TransitionEnd")},Ys={},jg={};Qt&&(jg=document.createElement("div").style,"AnimationEvent"in window||(delete Sr.animationend.animation,delete Sr.animationiteration.animation,delete Sr.animationstart.animation),"TransitionEvent"in window||delete Sr.transitionend.transition);function ss(e){if(Ys[e])return Ys[e];if(!Sr[e])return e;var t=Sr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in jg)return Ys[e]=t[n];return e}var Rg=ss("animationend"),Lg=ss("animationiteration"),Mg=ss("animationstart"),Dg=ss("transitionend"),qg=new Map,Hh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function On(e,t){qg.set(e,t),dr(t,[e])}for(var Xs=0;Xs<Hh.length;Xs++){var Js=Hh[Xs],Yb=Js.toLowerCase(),Xb=Js[0].toUpperCase()+Js.slice(1);On(Yb,"on"+Xb)}On(Rg,"onAnimationEnd");On(Lg,"onAnimationIteration");On(Mg,"onAnimationStart");On("dblclick","onDoubleClick");On("focusin","onFocus");On("focusout","onBlur");On(Dg,"onTransitionEnd");Xr("onMouseEnter",["mouseout","mouseover"]);Xr("onMouseLeave",["mouseout","mouseover"]);Xr("onPointerEnter",["pointerout","pointerover"]);Xr("onPointerLeave",["pointerout","pointerover"]);dr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));dr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));dr("onBeforeInput",["compositionend","keypress","textInput","paste"]);dr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));dr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));dr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ji="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Jb=new Set("cancel close invalid load scroll toggle".split(" ").concat(ji));function Wh(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Yv(r,t,void 0,e),e.currentTarget=null}function Og(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var c=r[s],l=c.instance,u=c.currentTarget;if(c=c.listener,l!==o&&i.isPropagationStopped())break e;Wh(i,c,u),o=l}else for(s=0;s<r.length;s++){if(c=r[s],l=c.instance,u=c.currentTarget,c=c.listener,l!==o&&i.isPropagationStopped())break e;Wh(i,c,u),o=l}}}if(Sa)throw e=Kc,Sa=!1,Kc=null,e}function ne(e,t){var n=t[rl];n===void 0&&(n=t[rl]=new Set);var r=e+"__bubble";n.has(r)||(Ug(t,e,2,!1),n.add(r))}function Zs(e,t,n){var r=0;t&&(r|=4),Ug(n,e,r,t)}var Fo="_reactListening"+Math.random().toString(36).slice(2);function Ji(e){if(!e[Fo]){e[Fo]=!0,Wp.forEach(function(n){n!=="selectionchange"&&(Jb.has(n)||Zs(n,!1,e),Zs(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Fo]||(t[Fo]=!0,Zs("selectionchange",!1,t))}}function Ug(e,t,n,r){switch(xg(t)){case 1:var i=db;break;case 4:i=pb;break;default:i=cu}n=i.bind(null,t,n,e),i=void 0,!Gc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function ec(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i||c.nodeType===8&&c.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;c!==null;){if(s=Kn(c),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}c=c.parentNode}}r=r.return}sg(function(){var u=o,h=iu(n),d=[];e:{var p=qg.get(e);if(p!==void 0){var v=uu,k=e;switch(e){case"keypress":if(aa(n)===0)break e;case"keydown":case"keyup":v=Ab;break;case"focusin":k="focus",v=Ks;break;case"focusout":k="blur",v=Ks;break;case"beforeblur":case"afterblur":v=Ks;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Lh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=fb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=jb;break;case Rg:case Lg:case Mg:v=bb;break;case Dg:v=Lb;break;case"scroll":v=gb;break;case"wheel":v=Db;break;case"copy":case"cut":case"paste":v=xb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Dh}var y=(t&4)!==0,x=!y&&e==="scroll",f=y?p!==null?p+"Capture":null:p;y=[];for(var m=u,b;m!==null;){b=m;var w=b.stateNode;if(b.tag===5&&w!==null&&(b=w,f!==null&&(w=Gi(m,f),w!=null&&y.push(Zi(m,w,b)))),x)break;m=m.return}0<y.length&&(p=new v(p,k,null,n,h),d.push({event:p,listeners:y}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",p&&n!==Hc&&(k=n.relatedTarget||n.fromElement)&&(Kn(k)||k[Yt]))break e;if((v||p)&&(p=h.window===h?h:(p=h.ownerDocument)?p.defaultView||p.parentWindow:window,v?(k=n.relatedTarget||n.toElement,v=u,k=k?Kn(k):null,k!==null&&(x=pr(k),k!==x||k.tag!==5&&k.tag!==6)&&(k=null)):(v=null,k=u),v!==k)){if(y=Lh,w="onMouseLeave",f="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(y=Dh,w="onPointerLeave",f="onPointerEnter",m="pointer"),x=v==null?p:Pr(v),b=k==null?p:Pr(k),p=new y(w,m+"leave",v,n,h),p.target=x,p.relatedTarget=b,w=null,Kn(h)===u&&(y=new y(f,m+"enter",k,n,h),y.target=b,y.relatedTarget=x,w=y),x=w,v&&k)t:{for(y=v,f=k,m=0,b=y;b;b=mr(b))m++;for(b=0,w=f;w;w=mr(w))b++;for(;0<m-b;)y=mr(y),m--;for(;0<b-m;)f=mr(f),b--;for(;m--;){if(y===f||f!==null&&y===f.alternate)break t;y=mr(y),f=mr(f)}y=null}else y=null;v!==null&&Gh(d,p,v,y,!1),k!==null&&x!==null&&Gh(d,x,k,y,!0)}}e:{if(p=u?Pr(u):window,v=p.nodeName&&p.nodeName.toLowerCase(),v==="select"||v==="input"&&p.type==="file")var T=Vb;else if(Uh(p))if(Ng)T=Gb;else{T=Hb;var S=zb}else(v=p.nodeName)&&v.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(T=Wb);if(T&&(T=T(e,u))){Pg(d,T,n,h);break e}S&&S(e,p,u),e==="focusout"&&(S=p._wrapperState)&&S.controlled&&p.type==="number"&&_c(p,"number",p.value)}switch(S=u?Pr(u):window,e){case"focusin":(Uh(S)||S.contentEditable==="true")&&(Cr=S,Xc=u,qi=null);break;case"focusout":qi=Xc=Cr=null;break;case"mousedown":Jc=!0;break;case"contextmenu":case"mouseup":case"dragend":Jc=!1,zh(d,n,h);break;case"selectionchange":if(Qb)break;case"keydown":case"keyup":zh(d,n,h)}var P;if(du)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else Tr?Cg(e,n)&&(C="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(Tg&&n.locale!=="ko"&&(Tr||C!=="onCompositionStart"?C==="onCompositionEnd"&&Tr&&(P=kg()):(bn=h,lu="value"in bn?bn.value:bn.textContent,Tr=!0)),S=Ea(u,C),0<S.length&&(C=new Mh(C,e,null,n,h),d.push({event:C,listeners:S}),P?C.data=P:(P=Sg(n),P!==null&&(C.data=P)))),(P=Ob?Ub(e,n):_b(e,n))&&(u=Ea(u,"onBeforeInput"),0<u.length&&(h=new Mh("onBeforeInput","beforeinput",null,n,h),d.push({event:h,listeners:u}),h.data=P))}Og(d,t)})}function Zi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ea(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Gi(e,n),o!=null&&r.unshift(Zi(e,o,i)),o=Gi(e,t),o!=null&&r.push(Zi(e,o,i))),e=e.return}return r}function mr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Gh(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var c=n,l=c.alternate,u=c.stateNode;if(l!==null&&l===r)break;c.tag===5&&u!==null&&(c=u,i?(l=Gi(n,o),l!=null&&s.unshift(Zi(n,l,c))):i||(l=Gi(n,o),l!=null&&s.push(Zi(n,l,c)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Zb=/\r\n?/g,ew=/\u0000|\uFFFD/g;function Kh(e){return(typeof e=="string"?e:""+e).replace(Zb,`
`).replace(ew,"")}function Bo(e,t,n){if(t=Kh(t),Kh(e)!==t&&n)throw Error(R(425))}function ja(){}var Zc=null,el=null;function tl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var nl=typeof setTimeout=="function"?setTimeout:void 0,tw=typeof clearTimeout=="function"?clearTimeout:void 0,$h=typeof Promise=="function"?Promise:void 0,nw=typeof queueMicrotask=="function"?queueMicrotask:typeof $h<"u"?function(e){return $h.resolve(null).then(e).catch(rw)}:nl;function rw(e){setTimeout(function(){throw e})}function tc(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Qi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Qi(t)}function Pn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Qh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var di=Math.random().toString(36).slice(2),Et="__reactFiber$"+di,eo="__reactProps$"+di,Yt="__reactContainer$"+di,rl="__reactEvents$"+di,iw="__reactListeners$"+di,ow="__reactHandles$"+di;function Kn(e){var t=e[Et];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Yt]||n[Et]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Qh(e);e!==null;){if(n=e[Et])return n;e=Qh(e)}return t}e=n,n=e.parentNode}return null}function wo(e){return e=e[Et]||e[Yt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Pr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(R(33))}function cs(e){return e[eo]||null}var il=[],Nr=-1;function Un(e){return{current:e}}function re(e){0>Nr||(e.current=il[Nr],il[Nr]=null,Nr--)}function ee(e,t){Nr++,il[Nr]=e.current,e.current=t}var Ln={},Le=Un(Ln),Ve=Un(!1),ar=Ln;function Jr(e,t){var n=e.type.contextTypes;if(!n)return Ln;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ze(e){return e=e.childContextTypes,e!=null}function Ra(){re(Ve),re(Le)}function Yh(e,t,n){if(Le.current!==Ln)throw Error(R(168));ee(Le,t),ee(Ve,n)}function _g(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(R(108,zv(e)||"Unknown",i));return le({},n,r)}function La(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ln,ar=Le.current,ee(Le,e),ee(Ve,Ve.current),!0}function Xh(e,t,n){var r=e.stateNode;if(!r)throw Error(R(169));n?(e=_g(e,t,ar),r.__reactInternalMemoizedMergedChildContext=e,re(Ve),re(Le),ee(Le,e)):re(Ve),ee(Ve,n)}var zt=null,ls=!1,nc=!1;function Fg(e){zt===null?zt=[e]:zt.push(e)}function aw(e){ls=!0,Fg(e)}function _n(){if(!nc&&zt!==null){nc=!0;var e=0,t=J;try{var n=zt;for(J=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}zt=null,ls=!1}catch(i){throw zt!==null&&(zt=zt.slice(e+1)),hg(ou,_n),i}finally{J=t,nc=!1}}return null}var Ar=[],Ir=0,Ma=null,Da=0,rt=[],it=0,sr=null,Wt=1,Gt="";function Hn(e,t){Ar[Ir++]=Da,Ar[Ir++]=Ma,Ma=e,Da=t}function Bg(e,t,n){rt[it++]=Wt,rt[it++]=Gt,rt[it++]=sr,sr=e;var r=Wt;e=Gt;var i=32-bt(r)-1;r&=~(1<<i),n+=1;var o=32-bt(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Wt=1<<32-bt(t)+i|n<<i|r,Gt=o+e}else Wt=1<<o|n<<i|r,Gt=e}function gu(e){e.return!==null&&(Hn(e,1),Bg(e,1,0))}function mu(e){for(;e===Ma;)Ma=Ar[--Ir],Ar[Ir]=null,Da=Ar[--Ir],Ar[Ir]=null;for(;e===sr;)sr=rt[--it],rt[it]=null,Gt=rt[--it],rt[it]=null,Wt=rt[--it],rt[it]=null}var Xe=null,Ye=null,ie=!1,vt=null;function Vg(e,t){var n=ot(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Jh(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Xe=e,Ye=Pn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Xe=e,Ye=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=sr!==null?{id:Wt,overflow:Gt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ot(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Xe=e,Ye=null,!0):!1;default:return!1}}function ol(e){return(e.mode&1)!==0&&(e.flags&128)===0}function al(e){if(ie){var t=Ye;if(t){var n=t;if(!Jh(e,t)){if(ol(e))throw Error(R(418));t=Pn(n.nextSibling);var r=Xe;t&&Jh(e,t)?Vg(r,n):(e.flags=e.flags&-4097|2,ie=!1,Xe=e)}}else{if(ol(e))throw Error(R(418));e.flags=e.flags&-4097|2,ie=!1,Xe=e}}}function Zh(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Xe=e}function Vo(e){if(e!==Xe)return!1;if(!ie)return Zh(e),ie=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!tl(e.type,e.memoizedProps)),t&&(t=Ye)){if(ol(e))throw zg(),Error(R(418));for(;t;)Vg(e,t),t=Pn(t.nextSibling)}if(Zh(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(R(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ye=Pn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ye=null}}else Ye=Xe?Pn(e.stateNode.nextSibling):null;return!0}function zg(){for(var e=Ye;e;)e=Pn(e.nextSibling)}function Zr(){Ye=Xe=null,ie=!1}function fu(e){vt===null?vt=[e]:vt.push(e)}var sw=nn.ReactCurrentBatchConfig;function Ti(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(R(309));var r=n.stateNode}if(!r)throw Error(R(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var c=i.refs;s===null?delete c[o]:c[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(R(284));if(!n._owner)throw Error(R(290,e))}return e}function zo(e,t){throw e=Object.prototype.toString.call(t),Error(R(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ed(e){var t=e._init;return t(e._payload)}function Hg(e){function t(f,m){if(e){var b=f.deletions;b===null?(f.deletions=[m],f.flags|=16):b.push(m)}}function n(f,m){if(!e)return null;for(;m!==null;)t(f,m),m=m.sibling;return null}function r(f,m){for(f=new Map;m!==null;)m.key!==null?f.set(m.key,m):f.set(m.index,m),m=m.sibling;return f}function i(f,m){return f=En(f,m),f.index=0,f.sibling=null,f}function o(f,m,b){return f.index=b,e?(b=f.alternate,b!==null?(b=b.index,b<m?(f.flags|=2,m):b):(f.flags|=2,m)):(f.flags|=1048576,m)}function s(f){return e&&f.alternate===null&&(f.flags|=2),f}function c(f,m,b,w){return m===null||m.tag!==6?(m=lc(b,f.mode,w),m.return=f,m):(m=i(m,b),m.return=f,m)}function l(f,m,b,w){var T=b.type;return T===kr?h(f,m,b.props.children,w,b.key):m!==null&&(m.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===un&&ed(T)===m.type)?(w=i(m,b.props),w.ref=Ti(f,m,b),w.return=f,w):(w=pa(b.type,b.key,b.props,null,f.mode,w),w.ref=Ti(f,m,b),w.return=f,w)}function u(f,m,b,w){return m===null||m.tag!==4||m.stateNode.containerInfo!==b.containerInfo||m.stateNode.implementation!==b.implementation?(m=uc(b,f.mode,w),m.return=f,m):(m=i(m,b.children||[]),m.return=f,m)}function h(f,m,b,w,T){return m===null||m.tag!==7?(m=ir(b,f.mode,w,T),m.return=f,m):(m=i(m,b),m.return=f,m)}function d(f,m,b){if(typeof m=="string"&&m!==""||typeof m=="number")return m=lc(""+m,f.mode,b),m.return=f,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ro:return b=pa(m.type,m.key,m.props,null,f.mode,b),b.ref=Ti(f,null,m),b.return=f,b;case xr:return m=uc(m,f.mode,b),m.return=f,m;case un:var w=m._init;return d(f,w(m._payload),b)}if(Ii(m)||vi(m))return m=ir(m,f.mode,b,null),m.return=f,m;zo(f,m)}return null}function p(f,m,b,w){var T=m!==null?m.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return T!==null?null:c(f,m,""+b,w);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Ro:return b.key===T?l(f,m,b,w):null;case xr:return b.key===T?u(f,m,b,w):null;case un:return T=b._init,p(f,m,T(b._payload),w)}if(Ii(b)||vi(b))return T!==null?null:h(f,m,b,w,null);zo(f,b)}return null}function v(f,m,b,w,T){if(typeof w=="string"&&w!==""||typeof w=="number")return f=f.get(b)||null,c(m,f,""+w,T);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ro:return f=f.get(w.key===null?b:w.key)||null,l(m,f,w,T);case xr:return f=f.get(w.key===null?b:w.key)||null,u(m,f,w,T);case un:var S=w._init;return v(f,m,b,S(w._payload),T)}if(Ii(w)||vi(w))return f=f.get(b)||null,h(m,f,w,T,null);zo(m,w)}return null}function k(f,m,b,w){for(var T=null,S=null,P=m,C=m=0,A=null;P!==null&&C<b.length;C++){P.index>C?(A=P,P=null):A=P.sibling;var E=p(f,P,b[C],w);if(E===null){P===null&&(P=A);break}e&&P&&E.alternate===null&&t(f,P),m=o(E,m,C),S===null?T=E:S.sibling=E,S=E,P=A}if(C===b.length)return n(f,P),ie&&Hn(f,C),T;if(P===null){for(;C<b.length;C++)P=d(f,b[C],w),P!==null&&(m=o(P,m,C),S===null?T=P:S.sibling=P,S=P);return ie&&Hn(f,C),T}for(P=r(f,P);C<b.length;C++)A=v(P,f,C,b[C],w),A!==null&&(e&&A.alternate!==null&&P.delete(A.key===null?C:A.key),m=o(A,m,C),S===null?T=A:S.sibling=A,S=A);return e&&P.forEach(function(q){return t(f,q)}),ie&&Hn(f,C),T}function y(f,m,b,w){var T=vi(b);if(typeof T!="function")throw Error(R(150));if(b=T.call(b),b==null)throw Error(R(151));for(var S=T=null,P=m,C=m=0,A=null,E=b.next();P!==null&&!E.done;C++,E=b.next()){P.index>C?(A=P,P=null):A=P.sibling;var q=p(f,P,E.value,w);if(q===null){P===null&&(P=A);break}e&&P&&q.alternate===null&&t(f,P),m=o(q,m,C),S===null?T=q:S.sibling=q,S=q,P=A}if(E.done)return n(f,P),ie&&Hn(f,C),T;if(P===null){for(;!E.done;C++,E=b.next())E=d(f,E.value,w),E!==null&&(m=o(E,m,C),S===null?T=E:S.sibling=E,S=E);return ie&&Hn(f,C),T}for(P=r(f,P);!E.done;C++,E=b.next())E=v(P,f,C,E.value,w),E!==null&&(e&&E.alternate!==null&&P.delete(E.key===null?C:E.key),m=o(E,m,C),S===null?T=E:S.sibling=E,S=E);return e&&P.forEach(function(L){return t(f,L)}),ie&&Hn(f,C),T}function x(f,m,b,w){if(typeof b=="object"&&b!==null&&b.type===kr&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case Ro:e:{for(var T=b.key,S=m;S!==null;){if(S.key===T){if(T=b.type,T===kr){if(S.tag===7){n(f,S.sibling),m=i(S,b.props.children),m.return=f,f=m;break e}}else if(S.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===un&&ed(T)===S.type){n(f,S.sibling),m=i(S,b.props),m.ref=Ti(f,S,b),m.return=f,f=m;break e}n(f,S);break}else t(f,S);S=S.sibling}b.type===kr?(m=ir(b.props.children,f.mode,w,b.key),m.return=f,f=m):(w=pa(b.type,b.key,b.props,null,f.mode,w),w.ref=Ti(f,m,b),w.return=f,f=w)}return s(f);case xr:e:{for(S=b.key;m!==null;){if(m.key===S)if(m.tag===4&&m.stateNode.containerInfo===b.containerInfo&&m.stateNode.implementation===b.implementation){n(f,m.sibling),m=i(m,b.children||[]),m.return=f,f=m;break e}else{n(f,m);break}else t(f,m);m=m.sibling}m=uc(b,f.mode,w),m.return=f,f=m}return s(f);case un:return S=b._init,x(f,m,S(b._payload),w)}if(Ii(b))return k(f,m,b,w);if(vi(b))return y(f,m,b,w);zo(f,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,m!==null&&m.tag===6?(n(f,m.sibling),m=i(m,b),m.return=f,f=m):(n(f,m),m=lc(b,f.mode,w),m.return=f,f=m),s(f)):n(f,m)}return x}var ei=Hg(!0),Wg=Hg(!1),qa=Un(null),Oa=null,Er=null,yu=null;function vu(){yu=Er=Oa=null}function bu(e){var t=qa.current;re(qa),e._currentValue=t}function sl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Or(e,t){Oa=e,yu=Er=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Be=!0),e.firstContext=null)}function ct(e){var t=e._currentValue;if(yu!==e)if(e={context:e,memoizedValue:t,next:null},Er===null){if(Oa===null)throw Error(R(308));Er=e,Oa.dependencies={lanes:0,firstContext:e}}else Er=Er.next=e;return t}var $n=null;function wu(e){$n===null?$n=[e]:$n.push(e)}function Gg(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,wu(t)):(n.next=i.next,i.next=n),t.interleaved=n,Xt(e,r)}function Xt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var hn=!1;function xu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Kg(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Kt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Nn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Q&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Xt(e,n)}return i=r.interleaved,i===null?(t.next=t,wu(r)):(t.next=i.next,i.next=t),r.interleaved=t,Xt(e,n)}function sa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,au(e,n)}}function td(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ua(e,t,n,r){var i=e.updateQueue;hn=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,c=i.shared.pending;if(c!==null){i.shared.pending=null;var l=c,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var h=e.alternate;h!==null&&(h=h.updateQueue,c=h.lastBaseUpdate,c!==s&&(c===null?h.firstBaseUpdate=u:c.next=u,h.lastBaseUpdate=l))}if(o!==null){var d=i.baseState;s=0,h=u=l=null,c=o;do{var p=c.lane,v=c.eventTime;if((r&p)===p){h!==null&&(h=h.next={eventTime:v,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var k=e,y=c;switch(p=t,v=n,y.tag){case 1:if(k=y.payload,typeof k=="function"){d=k.call(v,d,p);break e}d=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=y.payload,p=typeof k=="function"?k.call(v,d,p):k,p==null)break e;d=le({},d,p);break e;case 2:hn=!0}}c.callback!==null&&c.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[c]:p.push(c))}else v={eventTime:v,lane:p,tag:c.tag,payload:c.payload,callback:c.callback,next:null},h===null?(u=h=v,l=d):h=h.next=v,s|=p;if(c=c.next,c===null){if(c=i.shared.pending,c===null)break;p=c,c=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(h===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=h,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);lr|=s,e.lanes=s,e.memoizedState=d}}function nd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(R(191,i));i.call(r)}}}var xo={},Mt=Un(xo),to=Un(xo),no=Un(xo);function Qn(e){if(e===xo)throw Error(R(174));return e}function ku(e,t){switch(ee(no,t),ee(to,e),ee(Mt,xo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Bc(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Bc(t,e)}re(Mt),ee(Mt,t)}function ti(){re(Mt),re(to),re(no)}function $g(e){Qn(no.current);var t=Qn(Mt.current),n=Bc(t,e.type);t!==n&&(ee(to,e),ee(Mt,n))}function Tu(e){to.current===e&&(re(Mt),re(to))}var se=Un(0);function _a(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var rc=[];function Cu(){for(var e=0;e<rc.length;e++)rc[e]._workInProgressVersionPrimary=null;rc.length=0}var ca=nn.ReactCurrentDispatcher,ic=nn.ReactCurrentBatchConfig,cr=0,ce=null,fe=null,we=null,Fa=!1,Oi=!1,ro=0,cw=0;function Ie(){throw Error(R(321))}function Su(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!xt(e[n],t[n]))return!1;return!0}function Pu(e,t,n,r,i,o){if(cr=o,ce=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ca.current=e===null||e.memoizedState===null?dw:pw,e=n(r,i),Oi){o=0;do{if(Oi=!1,ro=0,25<=o)throw Error(R(301));o+=1,we=fe=null,t.updateQueue=null,ca.current=gw,e=n(r,i)}while(Oi)}if(ca.current=Ba,t=fe!==null&&fe.next!==null,cr=0,we=fe=ce=null,Fa=!1,t)throw Error(R(300));return e}function Nu(){var e=ro!==0;return ro=0,e}function Pt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return we===null?ce.memoizedState=we=e:we=we.next=e,we}function lt(){if(fe===null){var e=ce.alternate;e=e!==null?e.memoizedState:null}else e=fe.next;var t=we===null?ce.memoizedState:we.next;if(t!==null)we=t,fe=e;else{if(e===null)throw Error(R(310));fe=e,e={memoizedState:fe.memoizedState,baseState:fe.baseState,baseQueue:fe.baseQueue,queue:fe.queue,next:null},we===null?ce.memoizedState=we=e:we=we.next=e}return we}function io(e,t){return typeof t=="function"?t(e):t}function oc(e){var t=lt(),n=t.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=e;var r=fe,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var c=s=null,l=null,u=o;do{var h=u.lane;if((cr&h)===h)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(c=l=d,s=r):l=l.next=d,ce.lanes|=h,lr|=h}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=c,xt(r,t.memoizedState)||(Be=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,ce.lanes|=o,lr|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ac(e){var t=lt(),n=t.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);xt(o,t.memoizedState)||(Be=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Qg(){}function Yg(e,t){var n=ce,r=lt(),i=t(),o=!xt(r.memoizedState,i);if(o&&(r.memoizedState=i,Be=!0),r=r.queue,Au(Zg.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||we!==null&&we.memoizedState.tag&1){if(n.flags|=2048,oo(9,Jg.bind(null,n,r,i,t),void 0,null),ke===null)throw Error(R(349));cr&30||Xg(n,t,i)}return i}function Xg(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ce.updateQueue,t===null?(t={lastEffect:null,stores:null},ce.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Jg(e,t,n,r){t.value=n,t.getSnapshot=r,em(t)&&tm(e)}function Zg(e,t,n){return n(function(){em(t)&&tm(e)})}function em(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!xt(e,n)}catch{return!0}}function tm(e){var t=Xt(e,1);t!==null&&wt(t,e,1,-1)}function rd(e){var t=Pt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:io,lastRenderedState:e},t.queue=e,e=e.dispatch=hw.bind(null,ce,e),[t.memoizedState,e]}function oo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ce.updateQueue,t===null?(t={lastEffect:null,stores:null},ce.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function nm(){return lt().memoizedState}function la(e,t,n,r){var i=Pt();ce.flags|=e,i.memoizedState=oo(1|t,n,void 0,r===void 0?null:r)}function us(e,t,n,r){var i=lt();r=r===void 0?null:r;var o=void 0;if(fe!==null){var s=fe.memoizedState;if(o=s.destroy,r!==null&&Su(r,s.deps)){i.memoizedState=oo(t,n,o,r);return}}ce.flags|=e,i.memoizedState=oo(1|t,n,o,r)}function id(e,t){return la(8390656,8,e,t)}function Au(e,t){return us(2048,8,e,t)}function rm(e,t){return us(4,2,e,t)}function im(e,t){return us(4,4,e,t)}function om(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function am(e,t,n){return n=n!=null?n.concat([e]):null,us(4,4,om.bind(null,t,e),n)}function Iu(){}function sm(e,t){var n=lt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Su(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function cm(e,t){var n=lt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Su(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function lm(e,t,n){return cr&21?(xt(n,t)||(n=gg(),ce.lanes|=n,lr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Be=!0),e.memoizedState=n)}function lw(e,t){var n=J;J=n!==0&&4>n?n:4,e(!0);var r=ic.transition;ic.transition={};try{e(!1),t()}finally{J=n,ic.transition=r}}function um(){return lt().memoizedState}function uw(e,t,n){var r=In(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},hm(e))dm(t,n);else if(n=Gg(e,t,n,r),n!==null){var i=Ue();wt(n,e,r,i),pm(n,t,r)}}function hw(e,t,n){var r=In(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(hm(e))dm(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,c=o(s,n);if(i.hasEagerState=!0,i.eagerState=c,xt(c,s)){var l=t.interleaved;l===null?(i.next=i,wu(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=Gg(e,t,i,r),n!==null&&(i=Ue(),wt(n,e,r,i),pm(n,t,r))}}function hm(e){var t=e.alternate;return e===ce||t!==null&&t===ce}function dm(e,t){Oi=Fa=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function pm(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,au(e,n)}}var Ba={readContext:ct,useCallback:Ie,useContext:Ie,useEffect:Ie,useImperativeHandle:Ie,useInsertionEffect:Ie,useLayoutEffect:Ie,useMemo:Ie,useReducer:Ie,useRef:Ie,useState:Ie,useDebugValue:Ie,useDeferredValue:Ie,useTransition:Ie,useMutableSource:Ie,useSyncExternalStore:Ie,useId:Ie,unstable_isNewReconciler:!1},dw={readContext:ct,useCallback:function(e,t){return Pt().memoizedState=[e,t===void 0?null:t],e},useContext:ct,useEffect:id,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,la(4194308,4,om.bind(null,t,e),n)},useLayoutEffect:function(e,t){return la(4194308,4,e,t)},useInsertionEffect:function(e,t){return la(4,2,e,t)},useMemo:function(e,t){var n=Pt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Pt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=uw.bind(null,ce,e),[r.memoizedState,e]},useRef:function(e){var t=Pt();return e={current:e},t.memoizedState=e},useState:rd,useDebugValue:Iu,useDeferredValue:function(e){return Pt().memoizedState=e},useTransition:function(){var e=rd(!1),t=e[0];return e=lw.bind(null,e[1]),Pt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ce,i=Pt();if(ie){if(n===void 0)throw Error(R(407));n=n()}else{if(n=t(),ke===null)throw Error(R(349));cr&30||Xg(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,id(Zg.bind(null,r,o,e),[e]),r.flags|=2048,oo(9,Jg.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Pt(),t=ke.identifierPrefix;if(ie){var n=Gt,r=Wt;n=(r&~(1<<32-bt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ro++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=cw++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},pw={readContext:ct,useCallback:sm,useContext:ct,useEffect:Au,useImperativeHandle:am,useInsertionEffect:rm,useLayoutEffect:im,useMemo:cm,useReducer:oc,useRef:nm,useState:function(){return oc(io)},useDebugValue:Iu,useDeferredValue:function(e){var t=lt();return lm(t,fe.memoizedState,e)},useTransition:function(){var e=oc(io)[0],t=lt().memoizedState;return[e,t]},useMutableSource:Qg,useSyncExternalStore:Yg,useId:um,unstable_isNewReconciler:!1},gw={readContext:ct,useCallback:sm,useContext:ct,useEffect:Au,useImperativeHandle:am,useInsertionEffect:rm,useLayoutEffect:im,useMemo:cm,useReducer:ac,useRef:nm,useState:function(){return ac(io)},useDebugValue:Iu,useDeferredValue:function(e){var t=lt();return fe===null?t.memoizedState=e:lm(t,fe.memoizedState,e)},useTransition:function(){var e=ac(io)[0],t=lt().memoizedState;return[e,t]},useMutableSource:Qg,useSyncExternalStore:Yg,useId:um,unstable_isNewReconciler:!1};function pt(e,t){if(e&&e.defaultProps){t=le({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function cl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:le({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var hs={isMounted:function(e){return(e=e._reactInternals)?pr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ue(),i=In(e),o=Kt(r,i);o.payload=t,n!=null&&(o.callback=n),t=Nn(e,o,i),t!==null&&(wt(t,e,i,r),sa(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ue(),i=In(e),o=Kt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Nn(e,o,i),t!==null&&(wt(t,e,i,r),sa(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ue(),r=In(e),i=Kt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Nn(e,i,r),t!==null&&(wt(t,e,r,n),sa(t,e,r))}};function od(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!Xi(n,r)||!Xi(i,o):!0}function gm(e,t,n){var r=!1,i=Ln,o=t.contextType;return typeof o=="object"&&o!==null?o=ct(o):(i=ze(t)?ar:Le.current,r=t.contextTypes,o=(r=r!=null)?Jr(e,i):Ln),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=hs,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function ad(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&hs.enqueueReplaceState(t,t.state,null)}function ll(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},xu(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=ct(o):(o=ze(t)?ar:Le.current,i.context=Jr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(cl(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&hs.enqueueReplaceState(i,i.state,null),Ua(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function ni(e,t){try{var n="",r=t;do n+=Vv(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function sc(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ul(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var mw=typeof WeakMap=="function"?WeakMap:Map;function mm(e,t,n){n=Kt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){za||(za=!0,wl=r),ul(e,t)},n}function fm(e,t,n){n=Kt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ul(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){ul(e,t),typeof r!="function"&&(An===null?An=new Set([this]):An.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function sd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new mw;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Iw.bind(null,e,t,n),t.then(e,e))}function cd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ld(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Kt(-1,1),t.tag=2,Nn(n,t,1))),n.lanes|=1),e)}var fw=nn.ReactCurrentOwner,Be=!1;function qe(e,t,n,r){t.child=e===null?Wg(t,null,n,r):ei(t,e.child,n,r)}function ud(e,t,n,r,i){n=n.render;var o=t.ref;return Or(t,i),r=Pu(e,t,n,r,o,i),n=Nu(),e!==null&&!Be?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Jt(e,t,i)):(ie&&n&&gu(t),t.flags|=1,qe(e,t,r,i),t.child)}function hd(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Ou(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,ym(e,t,o,r,i)):(e=pa(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Xi,n(s,r)&&e.ref===t.ref)return Jt(e,t,i)}return t.flags|=1,e=En(o,r),e.ref=t.ref,e.return=t,t.child=e}function ym(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Xi(o,r)&&e.ref===t.ref)if(Be=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Be=!0);else return t.lanes=e.lanes,Jt(e,t,i)}return hl(e,t,n,r,i)}function vm(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ee(Rr,$e),$e|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ee(Rr,$e),$e|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,ee(Rr,$e),$e|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,ee(Rr,$e),$e|=r;return qe(e,t,i,n),t.child}function bm(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function hl(e,t,n,r,i){var o=ze(n)?ar:Le.current;return o=Jr(t,o),Or(t,i),n=Pu(e,t,n,r,o,i),r=Nu(),e!==null&&!Be?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Jt(e,t,i)):(ie&&r&&gu(t),t.flags|=1,qe(e,t,n,i),t.child)}function dd(e,t,n,r,i){if(ze(n)){var o=!0;La(t)}else o=!1;if(Or(t,i),t.stateNode===null)ua(e,t),gm(t,n,r),ll(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,c=t.memoizedProps;s.props=c;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=ct(u):(u=ze(n)?ar:Le.current,u=Jr(t,u));var h=n.getDerivedStateFromProps,d=typeof h=="function"||typeof s.getSnapshotBeforeUpdate=="function";d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(c!==r||l!==u)&&ad(t,s,r,u),hn=!1;var p=t.memoizedState;s.state=p,Ua(t,r,s,i),l=t.memoizedState,c!==r||p!==l||Ve.current||hn?(typeof h=="function"&&(cl(t,n,h,r),l=t.memoizedState),(c=hn||od(t,n,c,r,p,l,u))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=c):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Kg(e,t),c=t.memoizedProps,u=t.type===t.elementType?c:pt(t.type,c),s.props=u,d=t.pendingProps,p=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=ct(l):(l=ze(n)?ar:Le.current,l=Jr(t,l));var v=n.getDerivedStateFromProps;(h=typeof v=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(c!==d||p!==l)&&ad(t,s,r,l),hn=!1,p=t.memoizedState,s.state=p,Ua(t,r,s,i);var k=t.memoizedState;c!==d||p!==k||Ve.current||hn?(typeof v=="function"&&(cl(t,n,v,r),k=t.memoizedState),(u=hn||od(t,n,u,r,p,k,l)||!1)?(h||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,k,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,k,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||c===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=k),s.props=r,s.state=k,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||c===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return dl(e,t,n,r,o,i)}function dl(e,t,n,r,i,o){bm(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&Xh(t,n,!1),Jt(e,t,o);r=t.stateNode,fw.current=t;var c=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=ei(t,e.child,null,o),t.child=ei(t,null,c,o)):qe(e,t,c,o),t.memoizedState=r.state,i&&Xh(t,n,!0),t.child}function wm(e){var t=e.stateNode;t.pendingContext?Yh(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Yh(e,t.context,!1),ku(e,t.containerInfo)}function pd(e,t,n,r,i){return Zr(),fu(i),t.flags|=256,qe(e,t,n,r),t.child}var pl={dehydrated:null,treeContext:null,retryLane:0};function gl(e){return{baseLanes:e,cachePool:null,transitions:null}}function xm(e,t,n){var r=t.pendingProps,i=se.current,o=!1,s=(t.flags&128)!==0,c;if((c=s)||(c=e!==null&&e.memoizedState===null?!1:(i&2)!==0),c?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ee(se,i&1),e===null)return al(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=gs(s,r,0,null),e=ir(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=gl(n),t.memoizedState=pl,e):Eu(t,s));if(i=e.memoizedState,i!==null&&(c=i.dehydrated,c!==null))return yw(e,t,s,r,c,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,c=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=En(i,l),r.subtreeFlags=i.subtreeFlags&14680064),c!==null?o=En(c,o):(o=ir(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?gl(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=pl,r}return o=e.child,e=o.sibling,r=En(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Eu(e,t){return t=gs({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ho(e,t,n,r){return r!==null&&fu(r),ei(t,e.child,null,n),e=Eu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function yw(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=sc(Error(R(422))),Ho(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=gs({mode:"visible",children:r.children},i,0,null),o=ir(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&ei(t,e.child,null,s),t.child.memoizedState=gl(s),t.memoizedState=pl,o);if(!(t.mode&1))return Ho(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var c=r.dgst;return r=c,o=Error(R(419)),r=sc(o,r,void 0),Ho(e,t,s,r)}if(c=(s&e.childLanes)!==0,Be||c){if(r=ke,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Xt(e,i),wt(r,e,i,-1))}return qu(),r=sc(Error(R(421))),Ho(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Ew.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Ye=Pn(i.nextSibling),Xe=t,ie=!0,vt=null,e!==null&&(rt[it++]=Wt,rt[it++]=Gt,rt[it++]=sr,Wt=e.id,Gt=e.overflow,sr=t),t=Eu(t,r.children),t.flags|=4096,t)}function gd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),sl(e.return,t,n)}function cc(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function km(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(qe(e,t,r.children,n),r=se.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&gd(e,n,t);else if(e.tag===19)gd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ee(se,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&_a(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),cc(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&_a(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}cc(t,!0,n,null,o);break;case"together":cc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ua(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Jt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),lr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(R(153));if(t.child!==null){for(e=t.child,n=En(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=En(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function vw(e,t,n){switch(t.tag){case 3:wm(t),Zr();break;case 5:$g(t);break;case 1:ze(t.type)&&La(t);break;case 4:ku(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ee(qa,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ee(se,se.current&1),t.flags|=128,null):n&t.child.childLanes?xm(e,t,n):(ee(se,se.current&1),e=Jt(e,t,n),e!==null?e.sibling:null);ee(se,se.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return km(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ee(se,se.current),r)break;return null;case 22:case 23:return t.lanes=0,vm(e,t,n)}return Jt(e,t,n)}var Tm,ml,Cm,Sm;Tm=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ml=function(){};Cm=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Qn(Mt.current);var o=null;switch(n){case"input":i=Oc(e,i),r=Oc(e,r),o=[];break;case"select":i=le({},i,{value:void 0}),r=le({},r,{value:void 0}),o=[];break;case"textarea":i=Fc(e,i),r=Fc(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=ja)}Vc(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var c=i[u];for(s in c)c.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Hi.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(c=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==c&&(l!=null||c!=null))if(u==="style")if(c){for(s in c)!c.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&c[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,c=c?c.__html:void 0,l!=null&&c!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Hi.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ne("scroll",e),o||c===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Sm=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ci(e,t){if(!ie)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ee(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function bw(e,t,n){var r=t.pendingProps;switch(mu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ee(t),null;case 1:return ze(t.type)&&Ra(),Ee(t),null;case 3:return r=t.stateNode,ti(),re(Ve),re(Le),Cu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Vo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,vt!==null&&(Tl(vt),vt=null))),ml(e,t),Ee(t),null;case 5:Tu(t);var i=Qn(no.current);if(n=t.type,e!==null&&t.stateNode!=null)Cm(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(R(166));return Ee(t),null}if(e=Qn(Mt.current),Vo(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Et]=t,r[eo]=o,e=(t.mode&1)!==0,n){case"dialog":ne("cancel",r),ne("close",r);break;case"iframe":case"object":case"embed":ne("load",r);break;case"video":case"audio":for(i=0;i<ji.length;i++)ne(ji[i],r);break;case"source":ne("error",r);break;case"img":case"image":case"link":ne("error",r),ne("load",r);break;case"details":ne("toggle",r);break;case"input":Th(r,o),ne("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ne("invalid",r);break;case"textarea":Sh(r,o),ne("invalid",r)}Vc(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var c=o[s];s==="children"?typeof c=="string"?r.textContent!==c&&(o.suppressHydrationWarning!==!0&&Bo(r.textContent,c,e),i=["children",c]):typeof c=="number"&&r.textContent!==""+c&&(o.suppressHydrationWarning!==!0&&Bo(r.textContent,c,e),i=["children",""+c]):Hi.hasOwnProperty(s)&&c!=null&&s==="onScroll"&&ne("scroll",r)}switch(n){case"input":Lo(r),Ch(r,o,!0);break;case"textarea":Lo(r),Ph(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=ja)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Zp(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Et]=t,e[eo]=r,Tm(e,t,!1,!1),t.stateNode=e;e:{switch(s=zc(n,r),n){case"dialog":ne("cancel",e),ne("close",e),i=r;break;case"iframe":case"object":case"embed":ne("load",e),i=r;break;case"video":case"audio":for(i=0;i<ji.length;i++)ne(ji[i],e);i=r;break;case"source":ne("error",e),i=r;break;case"img":case"image":case"link":ne("error",e),ne("load",e),i=r;break;case"details":ne("toggle",e),i=r;break;case"input":Th(e,r),i=Oc(e,r),ne("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=le({},r,{value:void 0}),ne("invalid",e);break;case"textarea":Sh(e,r),i=Fc(e,r),ne("invalid",e);break;default:i=r}Vc(n,i),c=i;for(o in c)if(c.hasOwnProperty(o)){var l=c[o];o==="style"?ng(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&eg(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Wi(e,l):typeof l=="number"&&Wi(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Hi.hasOwnProperty(o)?l!=null&&o==="onScroll"&&ne("scroll",e):l!=null&&eu(e,o,l,s))}switch(n){case"input":Lo(e),Ch(e,r,!1);break;case"textarea":Lo(e),Ph(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Rn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Lr(e,!!r.multiple,o,!1):r.defaultValue!=null&&Lr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ja)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ee(t),null;case 6:if(e&&t.stateNode!=null)Sm(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(R(166));if(n=Qn(no.current),Qn(Mt.current),Vo(t)){if(r=t.stateNode,n=t.memoizedProps,r[Et]=t,(o=r.nodeValue!==n)&&(e=Xe,e!==null))switch(e.tag){case 3:Bo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Bo(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Et]=t,t.stateNode=r}return Ee(t),null;case 13:if(re(se),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ie&&Ye!==null&&t.mode&1&&!(t.flags&128))zg(),Zr(),t.flags|=98560,o=!1;else if(o=Vo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(R(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(R(317));o[Et]=t}else Zr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ee(t),o=!1}else vt!==null&&(Tl(vt),vt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||se.current&1?ve===0&&(ve=3):qu())),t.updateQueue!==null&&(t.flags|=4),Ee(t),null);case 4:return ti(),ml(e,t),e===null&&Ji(t.stateNode.containerInfo),Ee(t),null;case 10:return bu(t.type._context),Ee(t),null;case 17:return ze(t.type)&&Ra(),Ee(t),null;case 19:if(re(se),o=t.memoizedState,o===null)return Ee(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)Ci(o,!1);else{if(ve!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=_a(e),s!==null){for(t.flags|=128,Ci(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ee(se,se.current&1|2),t.child}e=e.sibling}o.tail!==null&&de()>ri&&(t.flags|=128,r=!0,Ci(o,!1),t.lanes=4194304)}else{if(!r)if(e=_a(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ci(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!ie)return Ee(t),null}else 2*de()-o.renderingStartTime>ri&&n!==1073741824&&(t.flags|=128,r=!0,Ci(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=de(),t.sibling=null,n=se.current,ee(se,r?n&1|2:n&1),t):(Ee(t),null);case 22:case 23:return Du(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?$e&1073741824&&(Ee(t),t.subtreeFlags&6&&(t.flags|=8192)):Ee(t),null;case 24:return null;case 25:return null}throw Error(R(156,t.tag))}function ww(e,t){switch(mu(t),t.tag){case 1:return ze(t.type)&&Ra(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ti(),re(Ve),re(Le),Cu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Tu(t),null;case 13:if(re(se),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(R(340));Zr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return re(se),null;case 4:return ti(),null;case 10:return bu(t.type._context),null;case 22:case 23:return Du(),null;case 24:return null;default:return null}}var Wo=!1,Re=!1,xw=typeof WeakSet=="function"?WeakSet:Set,O=null;function jr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){he(e,t,r)}else n.current=null}function fl(e,t,n){try{n()}catch(r){he(e,t,r)}}var md=!1;function kw(e,t){if(Zc=Aa,e=Eg(),pu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,c=-1,l=-1,u=0,h=0,d=e,p=null;t:for(;;){for(var v;d!==n||i!==0&&d.nodeType!==3||(c=s+i),d!==o||r!==0&&d.nodeType!==3||(l=s+r),d.nodeType===3&&(s+=d.nodeValue.length),(v=d.firstChild)!==null;)p=d,d=v;for(;;){if(d===e)break t;if(p===n&&++u===i&&(c=s),p===o&&++h===r&&(l=s),(v=d.nextSibling)!==null)break;d=p,p=d.parentNode}d=v}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(el={focusedElem:e,selectionRange:n},Aa=!1,O=t;O!==null;)if(t=O,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,O=e;else for(;O!==null;){t=O;try{var k=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var y=k.memoizedProps,x=k.memoizedState,f=t.stateNode,m=f.getSnapshotBeforeUpdate(t.elementType===t.type?y:pt(t.type,y),x);f.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var b=t.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(R(163))}}catch(w){he(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,O=e;break}O=t.return}return k=md,md=!1,k}function Ui(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&fl(t,n,o)}i=i.next}while(i!==r)}}function ds(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function yl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Pm(e){var t=e.alternate;t!==null&&(e.alternate=null,Pm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Et],delete t[eo],delete t[rl],delete t[iw],delete t[ow])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Nm(e){return e.tag===5||e.tag===3||e.tag===4}function fd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Nm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function vl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=ja));else if(r!==4&&(e=e.child,e!==null))for(vl(e,t,n),e=e.sibling;e!==null;)vl(e,t,n),e=e.sibling}function bl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(bl(e,t,n),e=e.sibling;e!==null;)bl(e,t,n),e=e.sibling}var Te=null,yt=!1;function on(e,t,n){for(n=n.child;n!==null;)Am(e,t,n),n=n.sibling}function Am(e,t,n){if(Lt&&typeof Lt.onCommitFiberUnmount=="function")try{Lt.onCommitFiberUnmount(is,n)}catch{}switch(n.tag){case 5:Re||jr(n,t);case 6:var r=Te,i=yt;Te=null,on(e,t,n),Te=r,yt=i,Te!==null&&(yt?(e=Te,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Te.removeChild(n.stateNode));break;case 18:Te!==null&&(yt?(e=Te,n=n.stateNode,e.nodeType===8?tc(e.parentNode,n):e.nodeType===1&&tc(e,n),Qi(e)):tc(Te,n.stateNode));break;case 4:r=Te,i=yt,Te=n.stateNode.containerInfo,yt=!0,on(e,t,n),Te=r,yt=i;break;case 0:case 11:case 14:case 15:if(!Re&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&fl(n,t,s),i=i.next}while(i!==r)}on(e,t,n);break;case 1:if(!Re&&(jr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(c){he(n,t,c)}on(e,t,n);break;case 21:on(e,t,n);break;case 22:n.mode&1?(Re=(r=Re)||n.memoizedState!==null,on(e,t,n),Re=r):on(e,t,n);break;default:on(e,t,n)}}function yd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new xw),t.forEach(function(r){var i=jw.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function dt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,c=s;e:for(;c!==null;){switch(c.tag){case 5:Te=c.stateNode,yt=!1;break e;case 3:Te=c.stateNode.containerInfo,yt=!0;break e;case 4:Te=c.stateNode.containerInfo,yt=!0;break e}c=c.return}if(Te===null)throw Error(R(160));Am(o,s,i),Te=null,yt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){he(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Im(t,e),t=t.sibling}function Im(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(dt(t,e),St(e),r&4){try{Ui(3,e,e.return),ds(3,e)}catch(y){he(e,e.return,y)}try{Ui(5,e,e.return)}catch(y){he(e,e.return,y)}}break;case 1:dt(t,e),St(e),r&512&&n!==null&&jr(n,n.return);break;case 5:if(dt(t,e),St(e),r&512&&n!==null&&jr(n,n.return),e.flags&32){var i=e.stateNode;try{Wi(i,"")}catch(y){he(e,e.return,y)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,c=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{c==="input"&&o.type==="radio"&&o.name!=null&&Xp(i,o),zc(c,s);var u=zc(c,o);for(s=0;s<l.length;s+=2){var h=l[s],d=l[s+1];h==="style"?ng(i,d):h==="dangerouslySetInnerHTML"?eg(i,d):h==="children"?Wi(i,d):eu(i,h,d,u)}switch(c){case"input":Uc(i,o);break;case"textarea":Jp(i,o);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?Lr(i,!!o.multiple,v,!1):p!==!!o.multiple&&(o.defaultValue!=null?Lr(i,!!o.multiple,o.defaultValue,!0):Lr(i,!!o.multiple,o.multiple?[]:"",!1))}i[eo]=o}catch(y){he(e,e.return,y)}}break;case 6:if(dt(t,e),St(e),r&4){if(e.stateNode===null)throw Error(R(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(y){he(e,e.return,y)}}break;case 3:if(dt(t,e),St(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Qi(t.containerInfo)}catch(y){he(e,e.return,y)}break;case 4:dt(t,e),St(e);break;case 13:dt(t,e),St(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Lu=de())),r&4&&yd(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(Re=(u=Re)||h,dt(t,e),Re=u):dt(t,e),St(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!h&&e.mode&1)for(O=e,h=e.child;h!==null;){for(d=O=h;O!==null;){switch(p=O,v=p.child,p.tag){case 0:case 11:case 14:case 15:Ui(4,p,p.return);break;case 1:jr(p,p.return);var k=p.stateNode;if(typeof k.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,k.props=t.memoizedProps,k.state=t.memoizedState,k.componentWillUnmount()}catch(y){he(r,n,y)}}break;case 5:jr(p,p.return);break;case 22:if(p.memoizedState!==null){bd(d);continue}}v!==null?(v.return=p,O=v):bd(d)}h=h.sibling}e:for(h=null,d=e;;){if(d.tag===5){if(h===null){h=d;try{i=d.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(c=d.stateNode,l=d.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,c.style.display=tg("display",s))}catch(y){he(e,e.return,y)}}}else if(d.tag===6){if(h===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(y){he(e,e.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;h===d&&(h=null),d=d.return}h===d&&(h=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:dt(t,e),St(e),r&4&&yd(e);break;case 21:break;default:dt(t,e),St(e)}}function St(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Nm(n)){var r=n;break e}n=n.return}throw Error(R(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Wi(i,""),r.flags&=-33);var o=fd(e);bl(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,c=fd(e);vl(e,c,s);break;default:throw Error(R(161))}}catch(l){he(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Tw(e,t,n){O=e,Em(e)}function Em(e,t,n){for(var r=(e.mode&1)!==0;O!==null;){var i=O,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Wo;if(!s){var c=i.alternate,l=c!==null&&c.memoizedState!==null||Re;c=Wo;var u=Re;if(Wo=s,(Re=l)&&!u)for(O=i;O!==null;)s=O,l=s.child,s.tag===22&&s.memoizedState!==null?wd(i):l!==null?(l.return=s,O=l):wd(i);for(;o!==null;)O=o,Em(o),o=o.sibling;O=i,Wo=c,Re=u}vd(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,O=o):vd(e)}}function vd(e){for(;O!==null;){var t=O;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Re||ds(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Re)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:pt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&nd(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}nd(t,s,n)}break;case 5:var c=t.stateNode;if(n===null&&t.flags&4){n=c;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var d=h.dehydrated;d!==null&&Qi(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(R(163))}Re||t.flags&512&&yl(t)}catch(p){he(t,t.return,p)}}if(t===e){O=null;break}if(n=t.sibling,n!==null){n.return=t.return,O=n;break}O=t.return}}function bd(e){for(;O!==null;){var t=O;if(t===e){O=null;break}var n=t.sibling;if(n!==null){n.return=t.return,O=n;break}O=t.return}}function wd(e){for(;O!==null;){var t=O;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ds(4,t)}catch(l){he(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){he(t,i,l)}}var o=t.return;try{yl(t)}catch(l){he(t,o,l)}break;case 5:var s=t.return;try{yl(t)}catch(l){he(t,s,l)}}}catch(l){he(t,t.return,l)}if(t===e){O=null;break}var c=t.sibling;if(c!==null){c.return=t.return,O=c;break}O=t.return}}var Cw=Math.ceil,Va=nn.ReactCurrentDispatcher,ju=nn.ReactCurrentOwner,st=nn.ReactCurrentBatchConfig,Q=0,ke=null,ge=null,Ce=0,$e=0,Rr=Un(0),ve=0,ao=null,lr=0,ps=0,Ru=0,_i=null,Fe=null,Lu=0,ri=1/0,Vt=null,za=!1,wl=null,An=null,Go=!1,wn=null,Ha=0,Fi=0,xl=null,ha=-1,da=0;function Ue(){return Q&6?de():ha!==-1?ha:ha=de()}function In(e){return e.mode&1?Q&2&&Ce!==0?Ce&-Ce:sw.transition!==null?(da===0&&(da=gg()),da):(e=J,e!==0||(e=window.event,e=e===void 0?16:xg(e.type)),e):1}function wt(e,t,n,r){if(50<Fi)throw Fi=0,xl=null,Error(R(185));vo(e,n,r),(!(Q&2)||e!==ke)&&(e===ke&&(!(Q&2)&&(ps|=n),ve===4&&pn(e,Ce)),He(e,r),n===1&&Q===0&&!(t.mode&1)&&(ri=de()+500,ls&&_n()))}function He(e,t){var n=e.callbackNode;sb(e,t);var r=Na(e,e===ke?Ce:0);if(r===0)n!==null&&Ih(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ih(n),t===1)e.tag===0?aw(xd.bind(null,e)):Fg(xd.bind(null,e)),nw(function(){!(Q&6)&&_n()}),n=null;else{switch(mg(r)){case 1:n=ou;break;case 4:n=dg;break;case 16:n=Pa;break;case 536870912:n=pg;break;default:n=Pa}n=Um(n,jm.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function jm(e,t){if(ha=-1,da=0,Q&6)throw Error(R(327));var n=e.callbackNode;if(Ur()&&e.callbackNode!==n)return null;var r=Na(e,e===ke?Ce:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Wa(e,r);else{t=r;var i=Q;Q|=2;var o=Lm();(ke!==e||Ce!==t)&&(Vt=null,ri=de()+500,rr(e,t));do try{Nw();break}catch(c){Rm(e,c)}while(!0);vu(),Va.current=o,Q=i,ge!==null?t=0:(ke=null,Ce=0,t=ve)}if(t!==0){if(t===2&&(i=$c(e),i!==0&&(r=i,t=kl(e,i))),t===1)throw n=ao,rr(e,0),pn(e,r),He(e,de()),n;if(t===6)pn(e,r);else{if(i=e.current.alternate,!(r&30)&&!Sw(i)&&(t=Wa(e,r),t===2&&(o=$c(e),o!==0&&(r=o,t=kl(e,o))),t===1))throw n=ao,rr(e,0),pn(e,r),He(e,de()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(R(345));case 2:Wn(e,Fe,Vt);break;case 3:if(pn(e,r),(r&130023424)===r&&(t=Lu+500-de(),10<t)){if(Na(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ue(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=nl(Wn.bind(null,e,Fe,Vt),t);break}Wn(e,Fe,Vt);break;case 4:if(pn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-bt(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=de()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Cw(r/1960))-r,10<r){e.timeoutHandle=nl(Wn.bind(null,e,Fe,Vt),r);break}Wn(e,Fe,Vt);break;case 5:Wn(e,Fe,Vt);break;default:throw Error(R(329))}}}return He(e,de()),e.callbackNode===n?jm.bind(null,e):null}function kl(e,t){var n=_i;return e.current.memoizedState.isDehydrated&&(rr(e,t).flags|=256),e=Wa(e,t),e!==2&&(t=Fe,Fe=n,t!==null&&Tl(t)),e}function Tl(e){Fe===null?Fe=e:Fe.push.apply(Fe,e)}function Sw(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!xt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function pn(e,t){for(t&=~Ru,t&=~ps,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-bt(t),r=1<<n;e[n]=-1,t&=~r}}function xd(e){if(Q&6)throw Error(R(327));Ur();var t=Na(e,0);if(!(t&1))return He(e,de()),null;var n=Wa(e,t);if(e.tag!==0&&n===2){var r=$c(e);r!==0&&(t=r,n=kl(e,r))}if(n===1)throw n=ao,rr(e,0),pn(e,t),He(e,de()),n;if(n===6)throw Error(R(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Wn(e,Fe,Vt),He(e,de()),null}function Mu(e,t){var n=Q;Q|=1;try{return e(t)}finally{Q=n,Q===0&&(ri=de()+500,ls&&_n())}}function ur(e){wn!==null&&wn.tag===0&&!(Q&6)&&Ur();var t=Q;Q|=1;var n=st.transition,r=J;try{if(st.transition=null,J=1,e)return e()}finally{J=r,st.transition=n,Q=t,!(Q&6)&&_n()}}function Du(){$e=Rr.current,re(Rr)}function rr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,tw(n)),ge!==null)for(n=ge.return;n!==null;){var r=n;switch(mu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ra();break;case 3:ti(),re(Ve),re(Le),Cu();break;case 5:Tu(r);break;case 4:ti();break;case 13:re(se);break;case 19:re(se);break;case 10:bu(r.type._context);break;case 22:case 23:Du()}n=n.return}if(ke=e,ge=e=En(e.current,null),Ce=$e=t,ve=0,ao=null,Ru=ps=lr=0,Fe=_i=null,$n!==null){for(t=0;t<$n.length;t++)if(n=$n[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}$n=null}return e}function Rm(e,t){do{var n=ge;try{if(vu(),ca.current=Ba,Fa){for(var r=ce.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Fa=!1}if(cr=0,we=fe=ce=null,Oi=!1,ro=0,ju.current=null,n===null||n.return===null){ve=1,ao=t,ge=null;break}e:{var o=e,s=n.return,c=n,l=t;if(t=Ce,c.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,h=c,d=h.tag;if(!(h.mode&1)&&(d===0||d===11||d===15)){var p=h.alternate;p?(h.updateQueue=p.updateQueue,h.memoizedState=p.memoizedState,h.lanes=p.lanes):(h.updateQueue=null,h.memoizedState=null)}var v=cd(s);if(v!==null){v.flags&=-257,ld(v,s,c,o,t),v.mode&1&&sd(o,u,t),t=v,l=u;var k=t.updateQueue;if(k===null){var y=new Set;y.add(l),t.updateQueue=y}else k.add(l);break e}else{if(!(t&1)){sd(o,u,t),qu();break e}l=Error(R(426))}}else if(ie&&c.mode&1){var x=cd(s);if(x!==null){!(x.flags&65536)&&(x.flags|=256),ld(x,s,c,o,t),fu(ni(l,c));break e}}o=l=ni(l,c),ve!==4&&(ve=2),_i===null?_i=[o]:_i.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=mm(o,l,t);td(o,f);break e;case 1:c=l;var m=o.type,b=o.stateNode;if(!(o.flags&128)&&(typeof m.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(An===null||!An.has(b)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=fm(o,c,t);td(o,w);break e}}o=o.return}while(o!==null)}Dm(n)}catch(T){t=T,ge===n&&n!==null&&(ge=n=n.return);continue}break}while(!0)}function Lm(){var e=Va.current;return Va.current=Ba,e===null?Ba:e}function qu(){(ve===0||ve===3||ve===2)&&(ve=4),ke===null||!(lr&268435455)&&!(ps&268435455)||pn(ke,Ce)}function Wa(e,t){var n=Q;Q|=2;var r=Lm();(ke!==e||Ce!==t)&&(Vt=null,rr(e,t));do try{Pw();break}catch(i){Rm(e,i)}while(!0);if(vu(),Q=n,Va.current=r,ge!==null)throw Error(R(261));return ke=null,Ce=0,ve}function Pw(){for(;ge!==null;)Mm(ge)}function Nw(){for(;ge!==null&&!Jv();)Mm(ge)}function Mm(e){var t=Om(e.alternate,e,$e);e.memoizedProps=e.pendingProps,t===null?Dm(e):ge=t,ju.current=null}function Dm(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=ww(n,t),n!==null){n.flags&=32767,ge=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ve=6,ge=null;return}}else if(n=bw(n,t,$e),n!==null){ge=n;return}if(t=t.sibling,t!==null){ge=t;return}ge=t=e}while(t!==null);ve===0&&(ve=5)}function Wn(e,t,n){var r=J,i=st.transition;try{st.transition=null,J=1,Aw(e,t,n,r)}finally{st.transition=i,J=r}return null}function Aw(e,t,n,r){do Ur();while(wn!==null);if(Q&6)throw Error(R(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(R(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(cb(e,o),e===ke&&(ge=ke=null,Ce=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Go||(Go=!0,Um(Pa,function(){return Ur(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=st.transition,st.transition=null;var s=J;J=1;var c=Q;Q|=4,ju.current=null,kw(e,n),Im(n,e),$b(el),Aa=!!Zc,el=Zc=null,e.current=n,Tw(n),Zv(),Q=c,J=s,st.transition=o}else e.current=n;if(Go&&(Go=!1,wn=e,Ha=i),o=e.pendingLanes,o===0&&(An=null),nb(n.stateNode),He(e,de()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(za)throw za=!1,e=wl,wl=null,e;return Ha&1&&e.tag!==0&&Ur(),o=e.pendingLanes,o&1?e===xl?Fi++:(Fi=0,xl=e):Fi=0,_n(),null}function Ur(){if(wn!==null){var e=mg(Ha),t=st.transition,n=J;try{if(st.transition=null,J=16>e?16:e,wn===null)var r=!1;else{if(e=wn,wn=null,Ha=0,Q&6)throw Error(R(331));var i=Q;for(Q|=4,O=e.current;O!==null;){var o=O,s=o.child;if(O.flags&16){var c=o.deletions;if(c!==null){for(var l=0;l<c.length;l++){var u=c[l];for(O=u;O!==null;){var h=O;switch(h.tag){case 0:case 11:case 15:Ui(8,h,o)}var d=h.child;if(d!==null)d.return=h,O=d;else for(;O!==null;){h=O;var p=h.sibling,v=h.return;if(Pm(h),h===u){O=null;break}if(p!==null){p.return=v,O=p;break}O=v}}}var k=o.alternate;if(k!==null){var y=k.child;if(y!==null){k.child=null;do{var x=y.sibling;y.sibling=null,y=x}while(y!==null)}}O=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,O=s;else e:for(;O!==null;){if(o=O,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Ui(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,O=f;break e}O=o.return}}var m=e.current;for(O=m;O!==null;){s=O;var b=s.child;if(s.subtreeFlags&2064&&b!==null)b.return=s,O=b;else e:for(s=m;O!==null;){if(c=O,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:ds(9,c)}}catch(T){he(c,c.return,T)}if(c===s){O=null;break e}var w=c.sibling;if(w!==null){w.return=c.return,O=w;break e}O=c.return}}if(Q=i,_n(),Lt&&typeof Lt.onPostCommitFiberRoot=="function")try{Lt.onPostCommitFiberRoot(is,e)}catch{}r=!0}return r}finally{J=n,st.transition=t}}return!1}function kd(e,t,n){t=ni(n,t),t=mm(e,t,1),e=Nn(e,t,1),t=Ue(),e!==null&&(vo(e,1,t),He(e,t))}function he(e,t,n){if(e.tag===3)kd(e,e,n);else for(;t!==null;){if(t.tag===3){kd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(An===null||!An.has(r))){e=ni(n,e),e=fm(t,e,1),t=Nn(t,e,1),e=Ue(),t!==null&&(vo(t,1,e),He(t,e));break}}t=t.return}}function Iw(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ue(),e.pingedLanes|=e.suspendedLanes&n,ke===e&&(Ce&n)===n&&(ve===4||ve===3&&(Ce&130023424)===Ce&&500>de()-Lu?rr(e,0):Ru|=n),He(e,t)}function qm(e,t){t===0&&(e.mode&1?(t=qo,qo<<=1,!(qo&130023424)&&(qo=4194304)):t=1);var n=Ue();e=Xt(e,t),e!==null&&(vo(e,t,n),He(e,n))}function Ew(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qm(e,n)}function jw(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(R(314))}r!==null&&r.delete(t),qm(e,n)}var Om;Om=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ve.current)Be=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Be=!1,vw(e,t,n);Be=!!(e.flags&131072)}else Be=!1,ie&&t.flags&1048576&&Bg(t,Da,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ua(e,t),e=t.pendingProps;var i=Jr(t,Le.current);Or(t,n),i=Pu(null,t,r,e,i,n);var o=Nu();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ze(r)?(o=!0,La(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,xu(t),i.updater=hs,t.stateNode=i,i._reactInternals=t,ll(t,r,e,n),t=dl(null,t,r,!0,o,n)):(t.tag=0,ie&&o&&gu(t),qe(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ua(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Lw(r),e=pt(r,e),i){case 0:t=hl(null,t,r,e,n);break e;case 1:t=dd(null,t,r,e,n);break e;case 11:t=ud(null,t,r,e,n);break e;case 14:t=hd(null,t,r,pt(r.type,e),n);break e}throw Error(R(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:pt(r,i),hl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:pt(r,i),dd(e,t,r,i,n);case 3:e:{if(wm(t),e===null)throw Error(R(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Kg(e,t),Ua(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=ni(Error(R(423)),t),t=pd(e,t,r,n,i);break e}else if(r!==i){i=ni(Error(R(424)),t),t=pd(e,t,r,n,i);break e}else for(Ye=Pn(t.stateNode.containerInfo.firstChild),Xe=t,ie=!0,vt=null,n=Wg(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Zr(),r===i){t=Jt(e,t,n);break e}qe(e,t,r,n)}t=t.child}return t;case 5:return $g(t),e===null&&al(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,tl(r,i)?s=null:o!==null&&tl(r,o)&&(t.flags|=32),bm(e,t),qe(e,t,s,n),t.child;case 6:return e===null&&al(t),null;case 13:return xm(e,t,n);case 4:return ku(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ei(t,null,r,n):qe(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:pt(r,i),ud(e,t,r,i,n);case 7:return qe(e,t,t.pendingProps,n),t.child;case 8:return qe(e,t,t.pendingProps.children,n),t.child;case 12:return qe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,ee(qa,r._currentValue),r._currentValue=s,o!==null)if(xt(o.value,s)){if(o.children===i.children&&!Ve.current){t=Jt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var c=o.dependencies;if(c!==null){s=o.child;for(var l=c.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=Kt(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?l.next=l:(l.next=h.next,h.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),sl(o.return,n,t),c.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(R(341));s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),sl(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}qe(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Or(t,n),i=ct(i),r=r(i),t.flags|=1,qe(e,t,r,n),t.child;case 14:return r=t.type,i=pt(r,t.pendingProps),i=pt(r.type,i),hd(e,t,r,i,n);case 15:return ym(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:pt(r,i),ua(e,t),t.tag=1,ze(r)?(e=!0,La(t)):e=!1,Or(t,n),gm(t,r,i),ll(t,r,i,n),dl(null,t,r,!0,e,n);case 19:return km(e,t,n);case 22:return vm(e,t,n)}throw Error(R(156,t.tag))};function Um(e,t){return hg(e,t)}function Rw(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ot(e,t,n,r){return new Rw(e,t,n,r)}function Ou(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Lw(e){if(typeof e=="function")return Ou(e)?1:0;if(e!=null){if(e=e.$$typeof,e===nu)return 11;if(e===ru)return 14}return 2}function En(e,t){var n=e.alternate;return n===null?(n=ot(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function pa(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")Ou(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case kr:return ir(n.children,i,o,t);case tu:s=8,i|=8;break;case Lc:return e=ot(12,n,t,i|2),e.elementType=Lc,e.lanes=o,e;case Mc:return e=ot(13,n,t,i),e.elementType=Mc,e.lanes=o,e;case Dc:return e=ot(19,n,t,i),e.elementType=Dc,e.lanes=o,e;case $p:return gs(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Gp:s=10;break e;case Kp:s=9;break e;case nu:s=11;break e;case ru:s=14;break e;case un:s=16,r=null;break e}throw Error(R(130,e==null?e:typeof e,""))}return t=ot(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function ir(e,t,n,r){return e=ot(7,e,r,t),e.lanes=n,e}function gs(e,t,n,r){return e=ot(22,e,r,t),e.elementType=$p,e.lanes=n,e.stateNode={isHidden:!1},e}function lc(e,t,n){return e=ot(6,e,null,t),e.lanes=n,e}function uc(e,t,n){return t=ot(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Mw(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Hs(0),this.expirationTimes=Hs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Hs(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Uu(e,t,n,r,i,o,s,c,l){return e=new Mw(e,t,n,c,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=ot(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},xu(o),e}function Dw(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:xr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function _m(e){if(!e)return Ln;e=e._reactInternals;e:{if(pr(e)!==e||e.tag!==1)throw Error(R(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ze(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(R(171))}if(e.tag===1){var n=e.type;if(ze(n))return _g(e,n,t)}return t}function Fm(e,t,n,r,i,o,s,c,l){return e=Uu(n,r,!0,e,i,o,s,c,l),e.context=_m(null),n=e.current,r=Ue(),i=In(n),o=Kt(r,i),o.callback=t??null,Nn(n,o,i),e.current.lanes=i,vo(e,i,r),He(e,r),e}function ms(e,t,n,r){var i=t.current,o=Ue(),s=In(i);return n=_m(n),t.context===null?t.context=n:t.pendingContext=n,t=Kt(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Nn(i,t,s),e!==null&&(wt(e,i,s,o),sa(e,i,s)),s}function Ga(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Td(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function _u(e,t){Td(e,t),(e=e.alternate)&&Td(e,t)}function qw(){return null}var Bm=typeof reportError=="function"?reportError:function(e){console.error(e)};function Fu(e){this._internalRoot=e}fs.prototype.render=Fu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(R(409));ms(e,t,null,null)};fs.prototype.unmount=Fu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ur(function(){ms(null,e,null,null)}),t[Yt]=null}};function fs(e){this._internalRoot=e}fs.prototype.unstable_scheduleHydration=function(e){if(e){var t=vg();e={blockedOn:null,target:e,priority:t};for(var n=0;n<dn.length&&t!==0&&t<dn[n].priority;n++);dn.splice(n,0,e),n===0&&wg(e)}};function Bu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ys(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Cd(){}function Ow(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Ga(s);o.call(u)}}var s=Fm(t,r,e,0,null,!1,!1,"",Cd);return e._reactRootContainer=s,e[Yt]=s.current,Ji(e.nodeType===8?e.parentNode:e),ur(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var c=r;r=function(){var u=Ga(l);c.call(u)}}var l=Uu(e,0,!1,null,null,!1,!1,"",Cd);return e._reactRootContainer=l,e[Yt]=l.current,Ji(e.nodeType===8?e.parentNode:e),ur(function(){ms(t,l,n,r)}),l}function vs(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var c=i;i=function(){var l=Ga(s);c.call(l)}}ms(t,s,e,i)}else s=Ow(n,t,e,i,r);return Ga(s)}fg=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ei(t.pendingLanes);n!==0&&(au(t,n|1),He(t,de()),!(Q&6)&&(ri=de()+500,_n()))}break;case 13:ur(function(){var r=Xt(e,1);if(r!==null){var i=Ue();wt(r,e,1,i)}}),_u(e,1)}};su=function(e){if(e.tag===13){var t=Xt(e,134217728);if(t!==null){var n=Ue();wt(t,e,134217728,n)}_u(e,134217728)}};yg=function(e){if(e.tag===13){var t=In(e),n=Xt(e,t);if(n!==null){var r=Ue();wt(n,e,t,r)}_u(e,t)}};vg=function(){return J};bg=function(e,t){var n=J;try{return J=e,t()}finally{J=n}};Wc=function(e,t,n){switch(t){case"input":if(Uc(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=cs(r);if(!i)throw Error(R(90));Yp(r),Uc(r,i)}}}break;case"textarea":Jp(e,n);break;case"select":t=n.value,t!=null&&Lr(e,!!n.multiple,t,!1)}};og=Mu;ag=ur;var Uw={usingClientEntryPoint:!1,Events:[wo,Pr,cs,rg,ig,Mu]},Si={findFiberByHostInstance:Kn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},_w={bundleType:Si.bundleType,version:Si.version,rendererPackageName:Si.rendererPackageName,rendererConfig:Si.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:nn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=lg(e),e===null?null:e.stateNode},findFiberByHostInstance:Si.findFiberByHostInstance||qw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ko=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ko.isDisabled&&Ko.supportsFiber)try{is=Ko.inject(_w),Lt=Ko}catch{}}et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Uw;et.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bu(t))throw Error(R(200));return Dw(e,t,null,n)};et.createRoot=function(e,t){if(!Bu(e))throw Error(R(299));var n=!1,r="",i=Bm;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Uu(e,1,!1,null,null,n,!1,r,i),e[Yt]=t.current,Ji(e.nodeType===8?e.parentNode:e),new Fu(t)};et.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(R(188)):(e=Object.keys(e).join(","),Error(R(268,e)));return e=lg(t),e=e===null?null:e.stateNode,e};et.flushSync=function(e){return ur(e)};et.hydrate=function(e,t,n){if(!ys(t))throw Error(R(200));return vs(null,e,t,!0,n)};et.hydrateRoot=function(e,t,n){if(!Bu(e))throw Error(R(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=Bm;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Fm(t,null,e,1,n??null,i,!1,o,s),e[Yt]=t.current,Ji(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new fs(t)};et.render=function(e,t,n){if(!ys(t))throw Error(R(200));return vs(null,e,t,!1,n)};et.unmountComponentAtNode=function(e){if(!ys(e))throw Error(R(40));return e._reactRootContainer?(ur(function(){vs(null,null,e,!1,function(){e._reactRootContainer=null,e[Yt]=null})}),!0):!1};et.unstable_batchedUpdates=Mu;et.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ys(n))throw Error(R(200));if(e==null||e._reactInternals===void 0)throw Error(R(38));return vs(e,t,n,!1,r)};et.version="18.3.1-next-f1338f8080-20240426";function Vm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Vm)}catch(e){console.error(e)}}Vm(),Vp.exports=et;var ko=Vp.exports;const Fw=pv(ko);var zm,Sd=ko;zm=Sd.createRoot,Sd.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function so(){return so=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},so.apply(this,arguments)}var xn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(xn||(xn={}));const Pd="popstate";function Bw(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:s,hash:c}=r.location;return Cl("",{pathname:o,search:s,hash:c},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Ka(i)}return zw(t,n,null,e)}function me(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Hm(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Vw(){return Math.random().toString(36).substr(2,8)}function Nd(e,t){return{usr:e.state,key:e.key,idx:t}}function Cl(e,t,n,r){return n===void 0&&(n=null),so({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?pi(t):t,{state:n,key:t&&t.key||r||Vw()})}function Ka(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function pi(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function zw(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,c=xn.Pop,l=null,u=h();u==null&&(u=0,s.replaceState(so({},s.state,{idx:u}),""));function h(){return(s.state||{idx:null}).idx}function d(){c=xn.Pop;let x=h(),f=x==null?null:x-u;u=x,l&&l({action:c,location:y.location,delta:f})}function p(x,f){c=xn.Push;let m=Cl(y.location,x,f);u=h()+1;let b=Nd(m,u),w=y.createHref(m);try{s.pushState(b,"",w)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;i.location.assign(w)}o&&l&&l({action:c,location:y.location,delta:1})}function v(x,f){c=xn.Replace;let m=Cl(y.location,x,f);u=h();let b=Nd(m,u),w=y.createHref(m);s.replaceState(b,"",w),o&&l&&l({action:c,location:y.location,delta:0})}function k(x){let f=i.location.origin!=="null"?i.location.origin:i.location.href,m=typeof x=="string"?x:Ka(x);return m=m.replace(/ $/,"%20"),me(f,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,f)}let y={get action(){return c},get location(){return e(i,s)},listen(x){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Pd,d),l=x,()=>{i.removeEventListener(Pd,d),l=null}},createHref(x){return t(i,x)},createURL:k,encodeLocation(x){let f=k(x);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:p,replace:v,go(x){return s.go(x)}};return y}var Ad;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Ad||(Ad={}));function Hw(e,t,n){return n===void 0&&(n="/"),Ww(e,t,n,!1)}function Ww(e,t,n,r){let i=typeof t=="string"?pi(t):t,o=Vu(i.pathname||"/",n);if(o==null)return null;let s=Wm(e);Gw(s);let c=null;for(let l=0;c==null&&l<s.length;++l){let u=rx(o);c=tx(s[l],u,r)}return c}function Wm(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,c)=>{let l={relativePath:c===void 0?o.path||"":c,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(me(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=jn([r,l.relativePath]),h=n.concat(l);o.children&&o.children.length>0&&(me(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Wm(o.children,t,h,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:Zw(u,o.index),routesMeta:h})};return e.forEach((o,s)=>{var c;if(o.path===""||!((c=o.path)!=null&&c.includes("?")))i(o,s);else for(let l of Gm(o.path))i(o,s,l)}),t}function Gm(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=Gm(r.join("/")),c=[];return c.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&c.push(...s),c.map(l=>e.startsWith("/")&&l===""?"/":l)}function Gw(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:ex(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Kw=/^:[\w-]+$/,$w=3,Qw=2,Yw=1,Xw=10,Jw=-2,Id=e=>e==="*";function Zw(e,t){let n=e.split("/"),r=n.length;return n.some(Id)&&(r+=Jw),t&&(r+=Qw),n.filter(i=>!Id(i)).reduce((i,o)=>i+(Kw.test(o)?$w:o===""?Yw:Xw),r)}function ex(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function tx(e,t,n){let{routesMeta:r}=e,i={},o="/",s=[];for(let c=0;c<r.length;++c){let l=r[c],u=c===r.length-1,h=o==="/"?t:t.slice(o.length)||"/",d=Ed({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},h),p=l.route;if(!d&&u&&n&&!r[r.length-1].route.index&&(d=Ed({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},h)),!d)return null;Object.assign(i,d.params),s.push({params:i,pathname:jn([o,d.pathname]),pathnameBase:sx(jn([o,d.pathnameBase])),route:p}),d.pathnameBase!=="/"&&(o=jn([o,d.pathnameBase]))}return s}function Ed(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=nx(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),c=i.slice(1);return{params:r.reduce((u,h,d)=>{let{paramName:p,isOptional:v}=h;if(p==="*"){let y=c[d]||"";s=o.slice(0,o.length-y.length).replace(/(.)\/+$/,"$1")}const k=c[d];return v&&!k?u[p]=void 0:u[p]=(k||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:s,pattern:e}}function nx(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Hm(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,c,l)=>(r.push({paramName:c,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function rx(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Hm(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Vu(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function ix(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?pi(e):e;return{pathname:n?n.startsWith("/")?n:ox(n,t):t,search:cx(r),hash:lx(i)}}function ox(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function hc(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ax(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Km(e,t){let n=ax(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function $m(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=pi(e):(i=so({},e),me(!i.pathname||!i.pathname.includes("?"),hc("?","pathname","search",i)),me(!i.pathname||!i.pathname.includes("#"),hc("#","pathname","hash",i)),me(!i.search||!i.search.includes("#"),hc("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,c;if(s==null)c=n;else{let d=t.length-1;if(!r&&s.startsWith("..")){let p=s.split("/");for(;p[0]==="..";)p.shift(),d-=1;i.pathname=p.join("/")}c=d>=0?t[d]:"/"}let l=ix(i,c),u=s&&s!=="/"&&s.endsWith("/"),h=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||h)&&(l.pathname+="/"),l}const jn=e=>e.join("/").replace(/\/\/+/g,"/"),sx=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),cx=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,lx=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function ux(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Qm=["post","put","patch","delete"];new Set(Qm);const hx=["get",...Qm];new Set(hx);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function co(){return co=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},co.apply(this,arguments)}const zu=g.createContext(null),dx=g.createContext(null),gr=g.createContext(null),bs=g.createContext(null),Fn=g.createContext({outlet:null,matches:[],isDataRoute:!1}),Ym=g.createContext(null);function px(e,t){let{relative:n}=t===void 0?{}:t;To()||me(!1);let{basename:r,navigator:i}=g.useContext(gr),{hash:o,pathname:s,search:c}=Zm(e,{relative:n}),l=s;return r!=="/"&&(l=s==="/"?r:jn([r,s])),i.createHref({pathname:l,search:c,hash:o})}function To(){return g.useContext(bs)!=null}function Ct(){return To()||me(!1),g.useContext(bs).location}function Xm(e){g.useContext(gr).static||g.useLayoutEffect(e)}function Jm(){let{isDataRoute:e}=g.useContext(Fn);return e?Nx():gx()}function gx(){To()||me(!1);let e=g.useContext(zu),{basename:t,future:n,navigator:r}=g.useContext(gr),{matches:i}=g.useContext(Fn),{pathname:o}=Ct(),s=JSON.stringify(Km(i,n.v7_relativeSplatPath)),c=g.useRef(!1);return Xm(()=>{c.current=!0}),g.useCallback(function(u,h){if(h===void 0&&(h={}),!c.current)return;if(typeof u=="number"){r.go(u);return}let d=$m(u,JSON.parse(s),o,h.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:jn([t,d.pathname])),(h.replace?r.replace:r.push)(d,h.state,h)},[t,r,s,o,e])}function mx(){let{matches:e}=g.useContext(Fn),t=e[e.length-1];return t?t.params:{}}function Zm(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=g.useContext(gr),{matches:i}=g.useContext(Fn),{pathname:o}=Ct(),s=JSON.stringify(Km(i,r.v7_relativeSplatPath));return g.useMemo(()=>$m(e,JSON.parse(s),o,n==="path"),[e,s,o,n])}function fx(e,t){return yx(e,t)}function yx(e,t,n,r){To()||me(!1);let{navigator:i}=g.useContext(gr),{matches:o}=g.useContext(Fn),s=o[o.length-1],c=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let u=Ct(),h;if(t){var d;let x=typeof t=="string"?pi(t):t;l==="/"||(d=x.pathname)!=null&&d.startsWith(l)||me(!1),h=x}else h=u;let p=h.pathname||"/",v=p;if(l!=="/"){let x=l.replace(/^\//,"").split("/");v="/"+p.replace(/^\//,"").split("/").slice(x.length).join("/")}let k=Hw(e,{pathname:v}),y=kx(k&&k.map(x=>Object.assign({},x,{params:Object.assign({},c,x.params),pathname:jn([l,i.encodeLocation?i.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?l:jn([l,i.encodeLocation?i.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),o,n,r);return t&&y?g.createElement(bs.Provider,{value:{location:co({pathname:"/",search:"",hash:"",state:null,key:"default"},h),navigationType:xn.Pop}},y):y}function vx(){let e=Px(),t=ux(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return g.createElement(g.Fragment,null,g.createElement("h2",null,"Unexpected Application Error!"),g.createElement("h3",{style:{fontStyle:"italic"}},t),n?g.createElement("pre",{style:i},n):null,null)}const bx=g.createElement(vx,null);class wx extends g.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?g.createElement(Fn.Provider,{value:this.props.routeContext},g.createElement(Ym.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function xx(e){let{routeContext:t,match:n,children:r}=e,i=g.useContext(zu);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),g.createElement(Fn.Provider,{value:t},r)}function kx(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,c=(i=n)==null?void 0:i.errors;if(c!=null){let h=s.findIndex(d=>d.route.id&&(c==null?void 0:c[d.route.id])!==void 0);h>=0||me(!1),s=s.slice(0,Math.min(s.length,h+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let h=0;h<s.length;h++){let d=s[h];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=h),d.route.id){let{loaderData:p,errors:v}=n,k=d.route.loader&&p[d.route.id]===void 0&&(!v||v[d.route.id]===void 0);if(d.route.lazy||k){l=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((h,d,p)=>{let v,k=!1,y=null,x=null;n&&(v=c&&d.route.id?c[d.route.id]:void 0,y=d.route.errorElement||bx,l&&(u<0&&p===0?(k=!0,x=null):u===p&&(k=!0,x=d.route.hydrateFallbackElement||null)));let f=t.concat(s.slice(0,p+1)),m=()=>{let b;return v?b=y:k?b=x:d.route.Component?b=g.createElement(d.route.Component,null):d.route.element?b=d.route.element:b=h,g.createElement(xx,{match:d,routeContext:{outlet:h,matches:f,isDataRoute:n!=null},children:b})};return n&&(d.route.ErrorBoundary||d.route.errorElement||p===0)?g.createElement(wx,{location:n.location,revalidation:n.revalidation,component:y,error:v,children:m(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):m()},null)}var ef=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(ef||{}),$a=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}($a||{});function Tx(e){let t=g.useContext(zu);return t||me(!1),t}function Cx(e){let t=g.useContext(dx);return t||me(!1),t}function Sx(e){let t=g.useContext(Fn);return t||me(!1),t}function tf(e){let t=Sx(),n=t.matches[t.matches.length-1];return n.route.id||me(!1),n.route.id}function Px(){var e;let t=g.useContext(Ym),n=Cx($a.UseRouteError),r=tf($a.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Nx(){let{router:e}=Tx(ef.UseNavigateStable),t=tf($a.UseNavigateStable),n=g.useRef(!1);return Xm(()=>{n.current=!0}),g.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,co({fromRouteId:t},o)))},[e,t])}function Ax(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Gn(e){me(!1)}function Ix(e){let{basename:t="/",children:n=null,location:r,navigationType:i=xn.Pop,navigator:o,static:s=!1,future:c}=e;To()&&me(!1);let l=t.replace(/^\/*/,"/"),u=g.useMemo(()=>({basename:l,navigator:o,static:s,future:co({v7_relativeSplatPath:!1},c)}),[l,c,o,s]);typeof r=="string"&&(r=pi(r));let{pathname:h="/",search:d="",hash:p="",state:v=null,key:k="default"}=r,y=g.useMemo(()=>{let x=Vu(h,l);return x==null?null:{location:{pathname:x,search:d,hash:p,state:v,key:k},navigationType:i}},[l,h,d,p,v,k,i]);return y==null?null:g.createElement(gr.Provider,{value:u},g.createElement(bs.Provider,{children:n,value:y}))}function Ex(e){let{children:t,location:n}=e;return fx(Sl(t),n)}new Promise(()=>{});function Sl(e,t){t===void 0&&(t=[]);let n=[];return g.Children.forEach(e,(r,i)=>{if(!g.isValidElement(r))return;let o=[...t,i];if(r.type===g.Fragment){n.push.apply(n,Sl(r.props.children,o));return}r.type!==Gn&&me(!1),!r.props.index||!r.props.children||me(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=Sl(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Pl(){return Pl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Pl.apply(this,arguments)}function jx(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Rx(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Lx(e,t){return e.button===0&&(!t||t==="_self")&&!Rx(e)}function Nl(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(i=>[n,i]):[[n,r]])},[]))}function Mx(e,t){let n=Nl(e);return t&&t.forEach((r,i)=>{n.has(i)||t.getAll(i).forEach(o=>{n.append(i,o)})}),n}const Dx=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],qx="6";try{window.__reactRouterVersion=qx}catch{}const Ox="startTransition",jd=Yl[Ox];function Ux(e){let{basename:t,children:n,future:r,window:i}=e,o=g.useRef();o.current==null&&(o.current=Bw({window:i,v5Compat:!0}));let s=o.current,[c,l]=g.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},h=g.useCallback(d=>{u&&jd?jd(()=>l(d)):l(d)},[l,u]);return g.useLayoutEffect(()=>s.listen(h),[s,h]),g.useEffect(()=>Ax(r),[r]),g.createElement(Ix,{basename:t,children:n,location:c.location,navigationType:c.action,navigator:s,future:r})}const _x=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Fx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,be=g.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:c,target:l,to:u,preventScrollReset:h,viewTransition:d}=t,p=jx(t,Dx),{basename:v}=g.useContext(gr),k,y=!1;if(typeof u=="string"&&Fx.test(u)&&(k=u,_x))try{let b=new URL(window.location.href),w=u.startsWith("//")?new URL(b.protocol+u):new URL(u),T=Vu(w.pathname,v);w.origin===b.origin&&T!=null?u=T+w.search+w.hash:y=!0}catch{}let x=px(u,{relative:i}),f=Bx(u,{replace:s,state:c,target:l,preventScrollReset:h,relative:i,viewTransition:d});function m(b){r&&r(b),b.defaultPrevented||f(b)}return g.createElement("a",Pl({},p,{href:k||x,onClick:y||o?r:m,ref:n,target:l}))});var Rd;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Rd||(Rd={}));var Ld;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Ld||(Ld={}));function Bx(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s,viewTransition:c}=t===void 0?{}:t,l=Jm(),u=Ct(),h=Zm(e,{relative:s});return g.useCallback(d=>{if(Lx(d,n)){d.preventDefault();let p=r!==void 0?r:Ka(u)===Ka(h);l(e,{replace:p,state:i,preventScrollReset:o,relative:s,viewTransition:c})}},[u,l,h,r,i,n,e,o,s,c])}function Vx(e){let t=g.useRef(Nl(e)),n=g.useRef(!1),r=Ct(),i=g.useMemo(()=>Mx(r.search,n.current?null:t.current),[r.search]),o=Jm(),s=g.useCallback((c,l)=>{const u=Nl(typeof c=="function"?c(i):c);n.current=!0,o("?"+u,l)},[o,i]);return[i,s]}const zx=3,Hx=500;let dc=0;function Wx(){return dc=(dc+1)%Number.MAX_SAFE_INTEGER,dc.toString()}const pc=new Map,Md=e=>{if(pc.has(e))return;const t=setTimeout(()=>{pc.delete(e),Bi({type:"REMOVE_TOAST",toastId:e})},Hx);pc.set(e,t)},Gx=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,zx)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(n=>n.id===t.toast.id?{...n,...t.toast}:n)};case"DISMISS_TOAST":{const{toastId:n}=t;return n?Md(n):e.toasts.forEach(r=>{Md(r.id)}),{...e,toasts:e.toasts.map(r=>r.id===n||n===void 0?{...r,open:!1}:r)}}case"REMOVE_TOAST":return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(n=>n.id!==t.toastId)}}},ga=[];let ma={toasts:[]};function Bi(e){ma=Gx(ma,e),ga.forEach(t=>{t(ma)})}function Kx({...e}){const t=Wx(),n=i=>Bi({type:"UPDATE_TOAST",toast:{...i,id:t}}),r=()=>Bi({type:"DISMISS_TOAST",toastId:t});return Bi({type:"ADD_TOAST",toast:{...e,id:t,open:!0,onOpenChange:i=>{i||r()}}}),{id:t,dismiss:r,update:n}}function Hu(){const[e,t]=g.useState(ma);return g.useEffect(()=>(ga.push(t),()=>{const n=ga.indexOf(t);n>-1&&ga.splice(n,1)}),[e]),{...e,toast:Kx,dismiss:n=>Bi({type:"DISMISS_TOAST",toastId:n})}}function oe(e,t,{checkForDefaultPrevented:n=!0}={}){return function(i){if(e==null||e(i),n===!1||!i.defaultPrevented)return t==null?void 0:t(i)}}function Dd(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function nf(...e){return t=>{let n=!1;const r=e.map(i=>{const o=Dd(i,t);return!n&&typeof o=="function"&&(n=!0),o});if(n)return()=>{for(let i=0;i<r.length;i++){const o=r[i];typeof o=="function"?o():Dd(e[i],null)}}}}function We(...e){return g.useCallback(nf(...e),e)}function Co(e,t=[]){let n=[];function r(o,s){const c=g.createContext(s),l=n.length;n=[...n,s];const u=d=>{var f;const{scope:p,children:v,...k}=d,y=((f=p==null?void 0:p[e])==null?void 0:f[l])||c,x=g.useMemo(()=>k,Object.values(k));return a.jsx(y.Provider,{value:x,children:v})};u.displayName=o+"Provider";function h(d,p){var y;const v=((y=p==null?void 0:p[e])==null?void 0:y[l])||c,k=g.useContext(v);if(k)return k;if(s!==void 0)return s;throw new Error(`\`${d}\` must be used within \`${o}\``)}return[u,h]}const i=()=>{const o=n.map(s=>g.createContext(s));return function(c){const l=(c==null?void 0:c[e])||o;return g.useMemo(()=>({[`__scope${e}`]:{...c,[e]:l}}),[c,l])}};return i.scopeName=e,[r,$x(i,...t)]}function $x(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(i=>({useScope:i(),scopeName:i.scopeName}));return function(o){const s=r.reduce((c,{useScope:l,scopeName:u})=>{const d=l(o)[`__scope${u}`];return{...c,...d}},{});return g.useMemo(()=>({[`__scope${t.scopeName}`]:s}),[s])}};return n.scopeName=t.scopeName,n}function lo(e){const t=Yx(e),n=g.forwardRef((r,i)=>{const{children:o,...s}=r,c=g.Children.toArray(o),l=c.find(Jx);if(l){const u=l.props.children,h=c.map(d=>d===l?g.Children.count(u)>1?g.Children.only(null):g.isValidElement(u)?u.props.children:null:d);return a.jsx(t,{...s,ref:i,children:g.isValidElement(u)?g.cloneElement(u,void 0,h):null})}return a.jsx(t,{...s,ref:i,children:o})});return n.displayName=`${e}.Slot`,n}var Qx=lo("Slot");function Yx(e){const t=g.forwardRef((n,r)=>{const{children:i,...o}=n;if(g.isValidElement(i)){const s=ek(i),c=Zx(o,i.props);return i.type!==g.Fragment&&(c.ref=r?nf(r,s):s),g.cloneElement(i,c)}return g.Children.count(i)>1?g.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}var rf=Symbol("radix.slottable");function Xx(e){const t=({children:n})=>a.jsx(a.Fragment,{children:n});return t.displayName=`${e}.Slottable`,t.__radixId=rf,t}function Jx(e){return g.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===rf}function Zx(e,t){const n={...t};for(const r in t){const i=e[r],o=t[r];/^on[A-Z]/.test(r)?i&&o?n[r]=(...c)=>{const l=o(...c);return i(...c),l}:i&&(n[r]=i):r==="style"?n[r]={...i,...o}:r==="className"&&(n[r]=[i,o].filter(Boolean).join(" "))}return{...e,...n}}function ek(e){var r,i;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(i=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:i.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}function tk(e){const t=e+"CollectionProvider",[n,r]=Co(t),[i,o]=n(t,{collectionRef:{current:null},itemMap:new Map}),s=y=>{const{scope:x,children:f}=y,m=zn.useRef(null),b=zn.useRef(new Map).current;return a.jsx(i,{scope:x,itemMap:b,collectionRef:m,children:f})};s.displayName=t;const c=e+"CollectionSlot",l=lo(c),u=zn.forwardRef((y,x)=>{const{scope:f,children:m}=y,b=o(c,f),w=We(x,b.collectionRef);return a.jsx(l,{ref:w,children:m})});u.displayName=c;const h=e+"CollectionItemSlot",d="data-radix-collection-item",p=lo(h),v=zn.forwardRef((y,x)=>{const{scope:f,children:m,...b}=y,w=zn.useRef(null),T=We(x,w),S=o(h,f);return zn.useEffect(()=>(S.itemMap.set(w,{ref:w,...b}),()=>void S.itemMap.delete(w))),a.jsx(p,{[d]:"",ref:T,children:m})});v.displayName=h;function k(y){const x=o(e+"CollectionConsumer",y);return zn.useCallback(()=>{const m=x.collectionRef.current;if(!m)return[];const b=Array.from(m.querySelectorAll(`[${d}]`));return Array.from(x.itemMap.values()).sort((S,P)=>b.indexOf(S.ref.current)-b.indexOf(P.ref.current))},[x.collectionRef,x.itemMap])}return[{Provider:s,Slot:u,ItemSlot:v},k,r]}var nk=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],Pe=nk.reduce((e,t)=>{const n=lo(`Primitive.${t}`),r=g.forwardRef((i,o)=>{const{asChild:s,...c}=i,l=s?n:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),a.jsx(l,{...c,ref:o})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{});function of(e,t){e&&ko.flushSync(()=>e.dispatchEvent(t))}function qt(e){const t=g.useRef(e);return g.useEffect(()=>{t.current=e}),g.useMemo(()=>(...n)=>{var r;return(r=t.current)==null?void 0:r.call(t,...n)},[])}function rk(e,t=globalThis==null?void 0:globalThis.document){const n=qt(e);g.useEffect(()=>{const r=i=>{i.key==="Escape"&&n(i)};return t.addEventListener("keydown",r,{capture:!0}),()=>t.removeEventListener("keydown",r,{capture:!0})},[n,t])}var ik="DismissableLayer",Al="dismissableLayer.update",ok="dismissableLayer.pointerDownOutside",ak="dismissableLayer.focusOutside",qd,af=g.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),ws=g.forwardRef((e,t)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:r,onPointerDownOutside:i,onFocusOutside:o,onInteractOutside:s,onDismiss:c,...l}=e,u=g.useContext(af),[h,d]=g.useState(null),p=(h==null?void 0:h.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,v]=g.useState({}),k=We(t,P=>d(P)),y=Array.from(u.layers),[x]=[...u.layersWithOutsidePointerEventsDisabled].slice(-1),f=y.indexOf(x),m=h?y.indexOf(h):-1,b=u.layersWithOutsidePointerEventsDisabled.size>0,w=m>=f,T=ck(P=>{const C=P.target,A=[...u.branches].some(E=>E.contains(C));!w||A||(i==null||i(P),s==null||s(P),P.defaultPrevented||c==null||c())},p),S=lk(P=>{const C=P.target;[...u.branches].some(E=>E.contains(C))||(o==null||o(P),s==null||s(P),P.defaultPrevented||c==null||c())},p);return rk(P=>{m===u.layers.size-1&&(r==null||r(P),!P.defaultPrevented&&c&&(P.preventDefault(),c()))},p),g.useEffect(()=>{if(h)return n&&(u.layersWithOutsidePointerEventsDisabled.size===0&&(qd=p.body.style.pointerEvents,p.body.style.pointerEvents="none"),u.layersWithOutsidePointerEventsDisabled.add(h)),u.layers.add(h),Od(),()=>{n&&u.layersWithOutsidePointerEventsDisabled.size===1&&(p.body.style.pointerEvents=qd)}},[h,p,n,u]),g.useEffect(()=>()=>{h&&(u.layers.delete(h),u.layersWithOutsidePointerEventsDisabled.delete(h),Od())},[h,u]),g.useEffect(()=>{const P=()=>v({});return document.addEventListener(Al,P),()=>document.removeEventListener(Al,P)},[]),a.jsx(Pe.div,{...l,ref:k,style:{pointerEvents:b?w?"auto":"none":void 0,...e.style},onFocusCapture:oe(e.onFocusCapture,S.onFocusCapture),onBlurCapture:oe(e.onBlurCapture,S.onBlurCapture),onPointerDownCapture:oe(e.onPointerDownCapture,T.onPointerDownCapture)})});ws.displayName=ik;var sk="DismissableLayerBranch",sf=g.forwardRef((e,t)=>{const n=g.useContext(af),r=g.useRef(null),i=We(t,r);return g.useEffect(()=>{const o=r.current;if(o)return n.branches.add(o),()=>{n.branches.delete(o)}},[n.branches]),a.jsx(Pe.div,{...e,ref:i})});sf.displayName=sk;function ck(e,t=globalThis==null?void 0:globalThis.document){const n=qt(e),r=g.useRef(!1),i=g.useRef(()=>{});return g.useEffect(()=>{const o=c=>{if(c.target&&!r.current){let l=function(){cf(ok,n,u,{discrete:!0})};const u={originalEvent:c};c.pointerType==="touch"?(t.removeEventListener("click",i.current),i.current=l,t.addEventListener("click",i.current,{once:!0})):l()}else t.removeEventListener("click",i.current);r.current=!1},s=window.setTimeout(()=>{t.addEventListener("pointerdown",o)},0);return()=>{window.clearTimeout(s),t.removeEventListener("pointerdown",o),t.removeEventListener("click",i.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}function lk(e,t=globalThis==null?void 0:globalThis.document){const n=qt(e),r=g.useRef(!1);return g.useEffect(()=>{const i=o=>{o.target&&!r.current&&cf(ak,n,{originalEvent:o},{discrete:!1})};return t.addEventListener("focusin",i),()=>t.removeEventListener("focusin",i)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}function Od(){const e=new CustomEvent(Al);document.dispatchEvent(e)}function cf(e,t,n,{discrete:r}){const i=n.originalEvent.target,o=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&i.addEventListener(e,t,{once:!0}),r?of(i,o):i.dispatchEvent(o)}var uk=ws,hk=sf,Zt=globalThis!=null&&globalThis.document?g.useLayoutEffect:()=>{},dk="Portal",Wu=g.forwardRef((e,t)=>{var c;const{container:n,...r}=e,[i,o]=g.useState(!1);Zt(()=>o(!0),[]);const s=n||i&&((c=globalThis==null?void 0:globalThis.document)==null?void 0:c.body);return s?Fw.createPortal(a.jsx(Pe.div,{...r,ref:t}),s):null});Wu.displayName=dk;function pk(e,t){return g.useReducer((n,r)=>t[n][r]??n,e)}var So=e=>{const{present:t,children:n}=e,r=gk(t),i=typeof n=="function"?n({present:r.isPresent}):g.Children.only(n),o=We(r.ref,mk(i));return typeof n=="function"||r.isPresent?g.cloneElement(i,{ref:o}):null};So.displayName="Presence";function gk(e){const[t,n]=g.useState(),r=g.useRef(null),i=g.useRef(e),o=g.useRef("none"),s=e?"mounted":"unmounted",[c,l]=pk(s,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return g.useEffect(()=>{const u=$o(r.current);o.current=c==="mounted"?u:"none"},[c]),Zt(()=>{const u=r.current,h=i.current;if(h!==e){const p=o.current,v=$o(u);e?l("MOUNT"):v==="none"||(u==null?void 0:u.display)==="none"?l("UNMOUNT"):l(h&&p!==v?"ANIMATION_OUT":"UNMOUNT"),i.current=e}},[e,l]),Zt(()=>{if(t){let u;const h=t.ownerDocument.defaultView??window,d=v=>{const y=$o(r.current).includes(v.animationName);if(v.target===t&&y&&(l("ANIMATION_END"),!i.current)){const x=t.style.animationFillMode;t.style.animationFillMode="forwards",u=h.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=x)})}},p=v=>{v.target===t&&(o.current=$o(r.current))};return t.addEventListener("animationstart",p),t.addEventListener("animationcancel",d),t.addEventListener("animationend",d),()=>{h.clearTimeout(u),t.removeEventListener("animationstart",p),t.removeEventListener("animationcancel",d),t.removeEventListener("animationend",d)}}else l("ANIMATION_END")},[t,l]),{isPresent:["mounted","unmountSuspended"].includes(c),ref:g.useCallback(u=>{r.current=u?getComputedStyle(u):null,n(u)},[])}}function $o(e){return(e==null?void 0:e.animationName)||"none"}function mk(e){var r,i;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(i=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:i.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var fk=Yl[" useInsertionEffect ".trim().toString()]||Zt;function Gu({prop:e,defaultProp:t,onChange:n=()=>{},caller:r}){const[i,o,s]=yk({defaultProp:t,onChange:n}),c=e!==void 0,l=c?e:i;{const h=g.useRef(e!==void 0);g.useEffect(()=>{const d=h.current;d!==c&&console.warn(`${r} is changing from ${d?"controlled":"uncontrolled"} to ${c?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),h.current=c},[c,r])}const u=g.useCallback(h=>{var d;if(c){const p=vk(h)?h(e):h;p!==e&&((d=s.current)==null||d.call(s,p))}else o(h)},[c,e,o,s]);return[l,u]}function yk({defaultProp:e,onChange:t}){const[n,r]=g.useState(e),i=g.useRef(n),o=g.useRef(t);return fk(()=>{o.current=t},[t]),g.useEffect(()=>{var s;i.current!==n&&((s=o.current)==null||s.call(o,n),i.current=n)},[n,i]),[n,r,o]}function vk(e){return typeof e=="function"}var bk=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"}),wk="VisuallyHidden",xs=g.forwardRef((e,t)=>a.jsx(Pe.span,{...e,ref:t,style:{...bk,...e.style}}));xs.displayName=wk;var xk=xs,Ku="ToastProvider",[$u,kk,Tk]=tk("Toast"),[lf,IN]=Co("Toast",[Tk]),[Ck,ks]=lf(Ku),uf=e=>{const{__scopeToast:t,label:n="Notification",duration:r=5e3,swipeDirection:i="right",swipeThreshold:o=50,children:s}=e,[c,l]=g.useState(null),[u,h]=g.useState(0),d=g.useRef(!1),p=g.useRef(!1);return n.trim()||console.error(`Invalid prop \`label\` supplied to \`${Ku}\`. Expected non-empty \`string\`.`),a.jsx($u.Provider,{scope:t,children:a.jsx(Ck,{scope:t,label:n,duration:r,swipeDirection:i,swipeThreshold:o,toastCount:u,viewport:c,onViewportChange:l,onToastAdd:g.useCallback(()=>h(v=>v+1),[]),onToastRemove:g.useCallback(()=>h(v=>v-1),[]),isFocusedToastEscapeKeyDownRef:d,isClosePausedRef:p,children:s})})};uf.displayName=Ku;var hf="ToastViewport",Sk=["F8"],Il="toast.viewportPause",El="toast.viewportResume",df=g.forwardRef((e,t)=>{const{__scopeToast:n,hotkey:r=Sk,label:i="Notifications ({hotkey})",...o}=e,s=ks(hf,n),c=kk(n),l=g.useRef(null),u=g.useRef(null),h=g.useRef(null),d=g.useRef(null),p=We(t,d,s.onViewportChange),v=r.join("+").replace(/Key/g,"").replace(/Digit/g,""),k=s.toastCount>0;g.useEffect(()=>{const x=f=>{var b;r.length!==0&&r.every(w=>f[w]||f.code===w)&&((b=d.current)==null||b.focus())};return document.addEventListener("keydown",x),()=>document.removeEventListener("keydown",x)},[r]),g.useEffect(()=>{const x=l.current,f=d.current;if(k&&x&&f){const m=()=>{if(!s.isClosePausedRef.current){const S=new CustomEvent(Il);f.dispatchEvent(S),s.isClosePausedRef.current=!0}},b=()=>{if(s.isClosePausedRef.current){const S=new CustomEvent(El);f.dispatchEvent(S),s.isClosePausedRef.current=!1}},w=S=>{!x.contains(S.relatedTarget)&&b()},T=()=>{x.contains(document.activeElement)||b()};return x.addEventListener("focusin",m),x.addEventListener("focusout",w),x.addEventListener("pointermove",m),x.addEventListener("pointerleave",T),window.addEventListener("blur",m),window.addEventListener("focus",b),()=>{x.removeEventListener("focusin",m),x.removeEventListener("focusout",w),x.removeEventListener("pointermove",m),x.removeEventListener("pointerleave",T),window.removeEventListener("blur",m),window.removeEventListener("focus",b)}}},[k,s.isClosePausedRef]);const y=g.useCallback(({tabbingDirection:x})=>{const m=c().map(b=>{const w=b.ref.current,T=[w,...Uk(w)];return x==="forwards"?T:T.reverse()});return(x==="forwards"?m.reverse():m).flat()},[c]);return g.useEffect(()=>{const x=d.current;if(x){const f=m=>{var T,S,P;const b=m.altKey||m.ctrlKey||m.metaKey;if(m.key==="Tab"&&!b){const C=document.activeElement,A=m.shiftKey;if(m.target===x&&A){(T=u.current)==null||T.focus();return}const L=y({tabbingDirection:A?"backwards":"forwards"}),W=L.findIndex(D=>D===C);gc(L.slice(W+1))?m.preventDefault():A?(S=u.current)==null||S.focus():(P=h.current)==null||P.focus()}};return x.addEventListener("keydown",f),()=>x.removeEventListener("keydown",f)}},[c,y]),a.jsxs(hk,{ref:l,role:"region","aria-label":i.replace("{hotkey}",v),tabIndex:-1,style:{pointerEvents:k?void 0:"none"},children:[k&&a.jsx(jl,{ref:u,onFocusFromOutsideViewport:()=>{const x=y({tabbingDirection:"forwards"});gc(x)}}),a.jsx($u.Slot,{scope:n,children:a.jsx(Pe.ol,{tabIndex:-1,...o,ref:p})}),k&&a.jsx(jl,{ref:h,onFocusFromOutsideViewport:()=>{const x=y({tabbingDirection:"backwards"});gc(x)}})]})});df.displayName=hf;var pf="ToastFocusProxy",jl=g.forwardRef((e,t)=>{const{__scopeToast:n,onFocusFromOutsideViewport:r,...i}=e,o=ks(pf,n);return a.jsx(xs,{"aria-hidden":!0,tabIndex:0,...i,ref:t,style:{position:"fixed"},onFocus:s=>{var u;const c=s.relatedTarget;!((u=o.viewport)!=null&&u.contains(c))&&r()}})});jl.displayName=pf;var Po="Toast",Pk="toast.swipeStart",Nk="toast.swipeMove",Ak="toast.swipeCancel",Ik="toast.swipeEnd",gf=g.forwardRef((e,t)=>{const{forceMount:n,open:r,defaultOpen:i,onOpenChange:o,...s}=e,[c,l]=Gu({prop:r,defaultProp:i??!0,onChange:o,caller:Po});return a.jsx(So,{present:n||c,children:a.jsx(Rk,{open:c,...s,ref:t,onClose:()=>l(!1),onPause:qt(e.onPause),onResume:qt(e.onResume),onSwipeStart:oe(e.onSwipeStart,u=>{u.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:oe(e.onSwipeMove,u=>{const{x:h,y:d}=u.detail.delta;u.currentTarget.setAttribute("data-swipe","move"),u.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${h}px`),u.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${d}px`)}),onSwipeCancel:oe(e.onSwipeCancel,u=>{u.currentTarget.setAttribute("data-swipe","cancel"),u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:oe(e.onSwipeEnd,u=>{const{x:h,y:d}=u.detail.delta;u.currentTarget.setAttribute("data-swipe","end"),u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),u.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${h}px`),u.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${d}px`),l(!1)})})})});gf.displayName=Po;var[Ek,jk]=lf(Po,{onClose(){}}),Rk=g.forwardRef((e,t)=>{const{__scopeToast:n,type:r="foreground",duration:i,open:o,onClose:s,onEscapeKeyDown:c,onPause:l,onResume:u,onSwipeStart:h,onSwipeMove:d,onSwipeCancel:p,onSwipeEnd:v,...k}=e,y=ks(Po,n),[x,f]=g.useState(null),m=We(t,D=>f(D)),b=g.useRef(null),w=g.useRef(null),T=i||y.duration,S=g.useRef(0),P=g.useRef(T),C=g.useRef(0),{onToastAdd:A,onToastRemove:E}=y,q=qt(()=>{var G;(x==null?void 0:x.contains(document.activeElement))&&((G=y.viewport)==null||G.focus()),s()}),L=g.useCallback(D=>{!D||D===1/0||(window.clearTimeout(C.current),S.current=new Date().getTime(),C.current=window.setTimeout(q,D))},[q]);g.useEffect(()=>{const D=y.viewport;if(D){const G=()=>{L(P.current),u==null||u()},z=()=>{const K=new Date().getTime()-S.current;P.current=P.current-K,window.clearTimeout(C.current),l==null||l()};return D.addEventListener(Il,z),D.addEventListener(El,G),()=>{D.removeEventListener(Il,z),D.removeEventListener(El,G)}}},[y.viewport,T,l,u,L]),g.useEffect(()=>{o&&!y.isClosePausedRef.current&&L(T)},[o,T,y.isClosePausedRef,L]),g.useEffect(()=>(A(),()=>E()),[A,E]);const W=g.useMemo(()=>x?xf(x):null,[x]);return y.viewport?a.jsxs(a.Fragment,{children:[W&&a.jsx(Lk,{__scopeToast:n,role:"status","aria-live":r==="foreground"?"assertive":"polite","aria-atomic":!0,children:W}),a.jsx(Ek,{scope:n,onClose:q,children:ko.createPortal(a.jsx($u.ItemSlot,{scope:n,children:a.jsx(uk,{asChild:!0,onEscapeKeyDown:oe(c,()=>{y.isFocusedToastEscapeKeyDownRef.current||q(),y.isFocusedToastEscapeKeyDownRef.current=!1}),children:a.jsx(Pe.li,{role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":o?"open":"closed","data-swipe-direction":y.swipeDirection,...k,ref:m,style:{userSelect:"none",touchAction:"none",...e.style},onKeyDown:oe(e.onKeyDown,D=>{D.key==="Escape"&&(c==null||c(D.nativeEvent),D.nativeEvent.defaultPrevented||(y.isFocusedToastEscapeKeyDownRef.current=!0,q()))}),onPointerDown:oe(e.onPointerDown,D=>{D.button===0&&(b.current={x:D.clientX,y:D.clientY})}),onPointerMove:oe(e.onPointerMove,D=>{if(!b.current)return;const G=D.clientX-b.current.x,z=D.clientY-b.current.y,K=!!w.current,N=["left","right"].includes(y.swipeDirection),M=["left","up"].includes(y.swipeDirection)?Math.min:Math.max,_=N?M(0,G):0,H=N?0:M(0,z),Z=D.pointerType==="touch"?10:2,Ge={x:_,y:H},Me={originalEvent:D,delta:Ge};K?(w.current=Ge,Qo(Nk,d,Me,{discrete:!1})):Ud(Ge,y.swipeDirection,Z)?(w.current=Ge,Qo(Pk,h,Me,{discrete:!1}),D.target.setPointerCapture(D.pointerId)):(Math.abs(G)>Z||Math.abs(z)>Z)&&(b.current=null)}),onPointerUp:oe(e.onPointerUp,D=>{const G=w.current,z=D.target;if(z.hasPointerCapture(D.pointerId)&&z.releasePointerCapture(D.pointerId),w.current=null,b.current=null,G){const K=D.currentTarget,N={originalEvent:D,delta:G};Ud(G,y.swipeDirection,y.swipeThreshold)?Qo(Ik,v,N,{discrete:!0}):Qo(Ak,p,N,{discrete:!0}),K.addEventListener("click",M=>M.preventDefault(),{once:!0})}})})})}),y.viewport)})]}):null}),Lk=e=>{const{__scopeToast:t,children:n,...r}=e,i=ks(Po,t),[o,s]=g.useState(!1),[c,l]=g.useState(!1);return qk(()=>s(!0)),g.useEffect(()=>{const u=window.setTimeout(()=>l(!0),1e3);return()=>window.clearTimeout(u)},[]),c?null:a.jsx(Wu,{asChild:!0,children:a.jsx(xs,{...r,children:o&&a.jsxs(a.Fragment,{children:[i.label," ",n]})})})},Mk="ToastTitle",mf=g.forwardRef((e,t)=>{const{__scopeToast:n,...r}=e;return a.jsx(Pe.div,{...r,ref:t})});mf.displayName=Mk;var Dk="ToastDescription",ff=g.forwardRef((e,t)=>{const{__scopeToast:n,...r}=e;return a.jsx(Pe.div,{...r,ref:t})});ff.displayName=Dk;var yf="ToastAction",vf=g.forwardRef((e,t)=>{const{altText:n,...r}=e;return n.trim()?a.jsx(wf,{altText:n,asChild:!0,children:a.jsx(Qu,{...r,ref:t})}):(console.error(`Invalid prop \`altText\` supplied to \`${yf}\`. Expected non-empty \`string\`.`),null)});vf.displayName=yf;var bf="ToastClose",Qu=g.forwardRef((e,t)=>{const{__scopeToast:n,...r}=e,i=jk(bf,n);return a.jsx(wf,{asChild:!0,children:a.jsx(Pe.button,{type:"button",...r,ref:t,onClick:oe(e.onClick,i.onClose)})})});Qu.displayName=bf;var wf=g.forwardRef((e,t)=>{const{__scopeToast:n,altText:r,...i}=e;return a.jsx(Pe.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":r||void 0,...i,ref:t})});function xf(e){const t=[];return Array.from(e.childNodes).forEach(r=>{if(r.nodeType===r.TEXT_NODE&&r.textContent&&t.push(r.textContent),Ok(r)){const i=r.ariaHidden||r.hidden||r.style.display==="none",o=r.dataset.radixToastAnnounceExclude==="";if(!i)if(o){const s=r.dataset.radixToastAnnounceAlt;s&&t.push(s)}else t.push(...xf(r))}}),t}function Qo(e,t,n,{discrete:r}){const i=n.originalEvent.currentTarget,o=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:n});t&&i.addEventListener(e,t,{once:!0}),r?of(i,o):i.dispatchEvent(o)}var Ud=(e,t,n=0)=>{const r=Math.abs(e.x),i=Math.abs(e.y),o=r>i;return t==="left"||t==="right"?o&&r>n:!o&&i>n};function qk(e=()=>{}){const t=qt(e);Zt(()=>{let n=0,r=0;return n=window.requestAnimationFrame(()=>r=window.requestAnimationFrame(t)),()=>{window.cancelAnimationFrame(n),window.cancelAnimationFrame(r)}},[t])}function Ok(e){return e.nodeType===e.ELEMENT_NODE}function Uk(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const i=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||i?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function gc(e){const t=document.activeElement;return e.some(n=>n===t?!0:(n.focus(),document.activeElement!==t))}var _k=uf,kf=df,Tf=gf,Cf=mf,Sf=ff,Pf=vf,Nf=Qu;function Af(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=Af(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function If(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=Af(e))&&(r&&(r+=" "),r+=t);return r}const _d=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,Fd=If,Yu=(e,t)=>n=>{var r;if((t==null?void 0:t.variants)==null)return Fd(e,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:i,defaultVariants:o}=t,s=Object.keys(i).map(u=>{const h=n==null?void 0:n[u],d=o==null?void 0:o[u];if(h===null)return null;const p=_d(h)||_d(d);return i[u][p]}),c=n&&Object.entries(n).reduce((u,h)=>{let[d,p]=h;return p===void 0||(u[d]=p),u},{}),l=t==null||(r=t.compoundVariants)===null||r===void 0?void 0:r.reduce((u,h)=>{let{class:d,className:p,...v}=h;return Object.entries(v).every(k=>{let[y,x]=k;return Array.isArray(x)?x.includes({...o,...c}[y]):{...o,...c}[y]===x})?[...u,d,p]:u},[]);return Fd(e,s,l,n==null?void 0:n.class,n==null?void 0:n.className)};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fk=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Ef=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Bk={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vk=g.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:o,iconNode:s,...c},l)=>g.createElement("svg",{ref:l,...Bk,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:Ef("lucide",i),...c},[...s.map(([u,h])=>g.createElement(u,h)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=(e,t)=>{const n=g.forwardRef(({className:r,...i},o)=>g.createElement(Vk,{ref:o,iconNode:t,className:Ef(`lucide-${Fk(e)}`,r),...i}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jf=F("ArrowDownRight",[["path",{d:"m7 7 10 10",key:"1fmybs"}],["path",{d:"M17 7v10H7",key:"6fjiku"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rl=F("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ll=F("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $t=F("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zk=F("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hk=F("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wk=F("BadgeCheck",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gk=F("Blocks",[["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["path",{d:"M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3",key:"1fpvtg"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bd=F("BookOpenCheck",[["path",{d:"M12 21V7",key:"gj6g52"}],["path",{d:"m16 12 2 2 4-4",key:"mdajum"}],["path",{d:"M22 6V4a1 1 0 0 0-1-1h-5a4 4 0 0 0-4 4 4 4 0 0 0-4-4H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h6a3 3 0 0 1 3 3 3 3 0 0 1 3-3h6a1 1 0 0 0 1-1v-1.3",key:"8arnkb"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kk=F("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $k=F("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qk=F("BriefcaseBusiness",[["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2",key:"1ksdt3"}],["path",{d:"M22 13a18.15 18.15 0 0 1-20 0",key:"12hx5q"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yk=F("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fa=F("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vd=F("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xk=F("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jk=F("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zk=F("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e0=F("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qa=F("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t0=F("CodeXml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n0=F("Compass",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r0=F("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i0=F("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ml=F("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ya=F("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zd=F("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o0=F("Flower2",[["path",{d:"M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1",key:"3pnvol"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["path",{d:"M12 10v12",key:"6ubwww"}],["path",{d:"M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z",key:"9hd38g"}],["path",{d:"M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z",key:"ufn41s"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mc=F("Folder",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a0=F("GitFork",[["circle",{cx:"12",cy:"18",r:"3",key:"1mpf1b"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["path",{d:"M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9",key:"1uq4wg"}],["path",{d:"M12 12v3",key:"158kv8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _r=F("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s0=F("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c0=F("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l0=F("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u0=F("Languages",[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h0=F("Laptop",[["path",{d:"M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16",key:"tarvll"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d0=F("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p0=F("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rf=F("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lf=F("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g0=F("Map",[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m0=F("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f0=F("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y0=F("Network",[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v0=F("SearchX",[["path",{d:"m13.5 8.5-5 5",key:"1cs55j"}],["path",{d:"m8.5 8.5 5 5",key:"a8mexj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fc=F("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b0=F("Shapes",[["path",{d:"M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z",key:"1bo67w"}],["rect",{x:"3",y:"14",width:"7",height:"7",rx:"1",key:"1bkyp8"}],["circle",{cx:"17.5",cy:"17.5",r:"3.5",key:"w3z12y"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w0=F("Share2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x0=F("Snowflake",[["line",{x1:"2",x2:"22",y1:"12",y2:"12",key:"1dnqot"}],["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"m20 16-4-4 4-4",key:"rquw4f"}],["path",{d:"m4 8 4 4-4 4",key:"12s3z9"}],["path",{d:"m16 4-4 4-4-4",key:"1tumq1"}],["path",{d:"m8 20 4-4 4 4",key:"9p200w"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ts=F("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k0=F("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T0=F("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dl=F("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C0=F("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xa=F("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Xu="-",S0=e=>{const t=N0(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=e;return{getClassGroupId:s=>{const c=s.split(Xu);return c[0]===""&&c.length!==1&&c.shift(),Mf(c,t)||P0(s)},getConflictingClassGroupIds:(s,c)=>{const l=n[s]||[];return c&&r[s]?[...l,...r[s]]:l}}},Mf=(e,t)=>{var s;if(e.length===0)return t.classGroupId;const n=e[0],r=t.nextPart.get(n),i=r?Mf(e.slice(1),r):void 0;if(i)return i;if(t.validators.length===0)return;const o=e.join(Xu);return(s=t.validators.find(({validator:c})=>c(o)))==null?void 0:s.classGroupId},Hd=/^\[(.+)\]$/,P0=e=>{if(Hd.test(e)){const t=Hd.exec(e)[1],n=t==null?void 0:t.substring(0,t.indexOf(":"));if(n)return"arbitrary.."+n}},N0=e=>{const{theme:t,prefix:n}=e,r={nextPart:new Map,validators:[]};return I0(Object.entries(e.classGroups),n).forEach(([o,s])=>{ql(s,r,o,t)}),r},ql=(e,t,n,r)=>{e.forEach(i=>{if(typeof i=="string"){const o=i===""?t:Wd(t,i);o.classGroupId=n;return}if(typeof i=="function"){if(A0(i)){ql(i(r),t,n,r);return}t.validators.push({validator:i,classGroupId:n});return}Object.entries(i).forEach(([o,s])=>{ql(s,Wd(t,o),n,r)})})},Wd=(e,t)=>{let n=e;return t.split(Xu).forEach(r=>{n.nextPart.has(r)||n.nextPart.set(r,{nextPart:new Map,validators:[]}),n=n.nextPart.get(r)}),n},A0=e=>e.isThemeGetter,I0=(e,t)=>t?e.map(([n,r])=>{const i=r.map(o=>typeof o=="string"?t+o:typeof o=="object"?Object.fromEntries(Object.entries(o).map(([s,c])=>[t+s,c])):o);return[n,i]}):e,E0=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,n=new Map,r=new Map;const i=(o,s)=>{n.set(o,s),t++,t>e&&(t=0,r=n,n=new Map)};return{get(o){let s=n.get(o);if(s!==void 0)return s;if((s=r.get(o))!==void 0)return i(o,s),s},set(o,s){n.has(o)?n.set(o,s):i(o,s)}}},Df="!",j0=e=>{const{separator:t,experimentalParseClassName:n}=e,r=t.length===1,i=t[0],o=t.length,s=c=>{const l=[];let u=0,h=0,d;for(let x=0;x<c.length;x++){let f=c[x];if(u===0){if(f===i&&(r||c.slice(x,x+o)===t)){l.push(c.slice(h,x)),h=x+o;continue}if(f==="/"){d=x;continue}}f==="["?u++:f==="]"&&u--}const p=l.length===0?c:c.substring(h),v=p.startsWith(Df),k=v?p.substring(1):p,y=d&&d>h?d-h:void 0;return{modifiers:l,hasImportantModifier:v,baseClassName:k,maybePostfixModifierPosition:y}};return n?c=>n({className:c,parseClassName:s}):s},R0=e=>{if(e.length<=1)return e;const t=[];let n=[];return e.forEach(r=>{r[0]==="["?(t.push(...n.sort(),r),n=[]):n.push(r)}),t.push(...n.sort()),t},L0=e=>({cache:E0(e.cacheSize),parseClassName:j0(e),...S0(e)}),M0=/\s+/,D0=(e,t)=>{const{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:i}=t,o=[],s=e.trim().split(M0);let c="";for(let l=s.length-1;l>=0;l-=1){const u=s[l],{modifiers:h,hasImportantModifier:d,baseClassName:p,maybePostfixModifierPosition:v}=n(u);let k=!!v,y=r(k?p.substring(0,v):p);if(!y){if(!k){c=u+(c.length>0?" "+c:c);continue}if(y=r(p),!y){c=u+(c.length>0?" "+c:c);continue}k=!1}const x=R0(h).join(":"),f=d?x+Df:x,m=f+y;if(o.includes(m))continue;o.push(m);const b=i(y,k);for(let w=0;w<b.length;++w){const T=b[w];o.push(f+T)}c=u+(c.length>0?" "+c:c)}return c};function q0(){let e=0,t,n,r="";for(;e<arguments.length;)(t=arguments[e++])&&(n=qf(t))&&(r&&(r+=" "),r+=n);return r}const qf=e=>{if(typeof e=="string")return e;let t,n="";for(let r=0;r<e.length;r++)e[r]&&(t=qf(e[r]))&&(n&&(n+=" "),n+=t);return n};function O0(e,...t){let n,r,i,o=s;function s(l){const u=t.reduce((h,d)=>d(h),e());return n=L0(u),r=n.cache.get,i=n.cache.set,o=c,c(l)}function c(l){const u=r(l);if(u)return u;const h=D0(l,n);return i(l,h),h}return function(){return o(q0.apply(null,arguments))}}const te=e=>{const t=n=>n[e]||[];return t.isThemeGetter=!0,t},Of=/^\[(?:([a-z-]+):)?(.+)\]$/i,U0=/^\d+\/\d+$/,_0=new Set(["px","full","screen"]),F0=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,B0=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,V0=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,z0=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,H0=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Ft=e=>Fr(e)||_0.has(e)||U0.test(e),an=e=>gi(e,"length",J0),Fr=e=>!!e&&!Number.isNaN(Number(e)),yc=e=>gi(e,"number",Fr),Pi=e=>!!e&&Number.isInteger(Number(e)),W0=e=>e.endsWith("%")&&Fr(e.slice(0,-1)),V=e=>Of.test(e),sn=e=>F0.test(e),G0=new Set(["length","size","percentage"]),K0=e=>gi(e,G0,Uf),$0=e=>gi(e,"position",Uf),Q0=new Set(["image","url"]),Y0=e=>gi(e,Q0,e1),X0=e=>gi(e,"",Z0),Ni=()=>!0,gi=(e,t,n)=>{const r=Of.exec(e);return r?r[1]?typeof t=="string"?r[1]===t:t.has(r[1]):n(r[2]):!1},J0=e=>B0.test(e)&&!V0.test(e),Uf=()=>!1,Z0=e=>z0.test(e),e1=e=>H0.test(e),t1=()=>{const e=te("colors"),t=te("spacing"),n=te("blur"),r=te("brightness"),i=te("borderColor"),o=te("borderRadius"),s=te("borderSpacing"),c=te("borderWidth"),l=te("contrast"),u=te("grayscale"),h=te("hueRotate"),d=te("invert"),p=te("gap"),v=te("gradientColorStops"),k=te("gradientColorStopPositions"),y=te("inset"),x=te("margin"),f=te("opacity"),m=te("padding"),b=te("saturate"),w=te("scale"),T=te("sepia"),S=te("skew"),P=te("space"),C=te("translate"),A=()=>["auto","contain","none"],E=()=>["auto","hidden","clip","visible","scroll"],q=()=>["auto",V,t],L=()=>[V,t],W=()=>["",Ft,an],D=()=>["auto",Fr,V],G=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],z=()=>["solid","dashed","dotted","double","none"],K=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],N=()=>["start","end","center","between","around","evenly","stretch"],M=()=>["","0",V],_=()=>["auto","avoid","all","avoid-page","page","left","right","column"],H=()=>[Fr,V];return{cacheSize:500,separator:":",theme:{colors:[Ni],spacing:[Ft,an],blur:["none","",sn,V],brightness:H(),borderColor:[e],borderRadius:["none","","full",sn,V],borderSpacing:L(),borderWidth:W(),contrast:H(),grayscale:M(),hueRotate:H(),invert:M(),gap:L(),gradientColorStops:[e],gradientColorStopPositions:[W0,an],inset:q(),margin:q(),opacity:H(),padding:L(),saturate:H(),scale:H(),sepia:M(),skew:H(),space:L(),translate:L()},classGroups:{aspect:[{aspect:["auto","square","video",V]}],container:["container"],columns:[{columns:[sn]}],"break-after":[{"break-after":_()}],"break-before":[{"break-before":_()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...G(),V]}],overflow:[{overflow:E()}],"overflow-x":[{"overflow-x":E()}],"overflow-y":[{"overflow-y":E()}],overscroll:[{overscroll:A()}],"overscroll-x":[{"overscroll-x":A()}],"overscroll-y":[{"overscroll-y":A()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[y]}],"inset-x":[{"inset-x":[y]}],"inset-y":[{"inset-y":[y]}],start:[{start:[y]}],end:[{end:[y]}],top:[{top:[y]}],right:[{right:[y]}],bottom:[{bottom:[y]}],left:[{left:[y]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",Pi,V]}],basis:[{basis:q()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",V]}],grow:[{grow:M()}],shrink:[{shrink:M()}],order:[{order:["first","last","none",Pi,V]}],"grid-cols":[{"grid-cols":[Ni]}],"col-start-end":[{col:["auto",{span:["full",Pi,V]},V]}],"col-start":[{"col-start":D()}],"col-end":[{"col-end":D()}],"grid-rows":[{"grid-rows":[Ni]}],"row-start-end":[{row:["auto",{span:[Pi,V]},V]}],"row-start":[{"row-start":D()}],"row-end":[{"row-end":D()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",V]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",V]}],gap:[{gap:[p]}],"gap-x":[{"gap-x":[p]}],"gap-y":[{"gap-y":[p]}],"justify-content":[{justify:["normal",...N()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...N(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...N(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[m]}],px:[{px:[m]}],py:[{py:[m]}],ps:[{ps:[m]}],pe:[{pe:[m]}],pt:[{pt:[m]}],pr:[{pr:[m]}],pb:[{pb:[m]}],pl:[{pl:[m]}],m:[{m:[x]}],mx:[{mx:[x]}],my:[{my:[x]}],ms:[{ms:[x]}],me:[{me:[x]}],mt:[{mt:[x]}],mr:[{mr:[x]}],mb:[{mb:[x]}],ml:[{ml:[x]}],"space-x":[{"space-x":[P]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[P]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",V,t]}],"min-w":[{"min-w":[V,t,"min","max","fit"]}],"max-w":[{"max-w":[V,t,"none","full","min","max","fit","prose",{screen:[sn]},sn]}],h:[{h:[V,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[V,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[V,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[V,t,"auto","min","max","fit"]}],"font-size":[{text:["base",sn,an]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",yc]}],"font-family":[{font:[Ni]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",V]}],"line-clamp":[{"line-clamp":["none",Fr,yc]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Ft,V]}],"list-image":[{"list-image":["none",V]}],"list-style-type":[{list:["none","disc","decimal",V]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[f]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[f]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...z(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",Ft,an]}],"underline-offset":[{"underline-offset":["auto",Ft,V]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:L()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",V]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",V]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[f]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...G(),$0]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",K0]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Y0]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[k]}],"gradient-via-pos":[{via:[k]}],"gradient-to-pos":[{to:[k]}],"gradient-from":[{from:[v]}],"gradient-via":[{via:[v]}],"gradient-to":[{to:[v]}],rounded:[{rounded:[o]}],"rounded-s":[{"rounded-s":[o]}],"rounded-e":[{"rounded-e":[o]}],"rounded-t":[{"rounded-t":[o]}],"rounded-r":[{"rounded-r":[o]}],"rounded-b":[{"rounded-b":[o]}],"rounded-l":[{"rounded-l":[o]}],"rounded-ss":[{"rounded-ss":[o]}],"rounded-se":[{"rounded-se":[o]}],"rounded-ee":[{"rounded-ee":[o]}],"rounded-es":[{"rounded-es":[o]}],"rounded-tl":[{"rounded-tl":[o]}],"rounded-tr":[{"rounded-tr":[o]}],"rounded-br":[{"rounded-br":[o]}],"rounded-bl":[{"rounded-bl":[o]}],"border-w":[{border:[c]}],"border-w-x":[{"border-x":[c]}],"border-w-y":[{"border-y":[c]}],"border-w-s":[{"border-s":[c]}],"border-w-e":[{"border-e":[c]}],"border-w-t":[{"border-t":[c]}],"border-w-r":[{"border-r":[c]}],"border-w-b":[{"border-b":[c]}],"border-w-l":[{"border-l":[c]}],"border-opacity":[{"border-opacity":[f]}],"border-style":[{border:[...z(),"hidden"]}],"divide-x":[{"divide-x":[c]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[c]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[f]}],"divide-style":[{divide:z()}],"border-color":[{border:[i]}],"border-color-x":[{"border-x":[i]}],"border-color-y":[{"border-y":[i]}],"border-color-s":[{"border-s":[i]}],"border-color-e":[{"border-e":[i]}],"border-color-t":[{"border-t":[i]}],"border-color-r":[{"border-r":[i]}],"border-color-b":[{"border-b":[i]}],"border-color-l":[{"border-l":[i]}],"divide-color":[{divide:[i]}],"outline-style":[{outline:["",...z()]}],"outline-offset":[{"outline-offset":[Ft,V]}],"outline-w":[{outline:[Ft,an]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:W()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[f]}],"ring-offset-w":[{"ring-offset":[Ft,an]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",sn,X0]}],"shadow-color":[{shadow:[Ni]}],opacity:[{opacity:[f]}],"mix-blend":[{"mix-blend":[...K(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":K()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[r]}],contrast:[{contrast:[l]}],"drop-shadow":[{"drop-shadow":["","none",sn,V]}],grayscale:[{grayscale:[u]}],"hue-rotate":[{"hue-rotate":[h]}],invert:[{invert:[d]}],saturate:[{saturate:[b]}],sepia:[{sepia:[T]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[l]}],"backdrop-grayscale":[{"backdrop-grayscale":[u]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[h]}],"backdrop-invert":[{"backdrop-invert":[d]}],"backdrop-opacity":[{"backdrop-opacity":[f]}],"backdrop-saturate":[{"backdrop-saturate":[b]}],"backdrop-sepia":[{"backdrop-sepia":[T]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[s]}],"border-spacing-x":[{"border-spacing-x":[s]}],"border-spacing-y":[{"border-spacing-y":[s]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",V]}],duration:[{duration:H()}],ease:[{ease:["linear","in","out","in-out",V]}],delay:[{delay:H()}],animate:[{animate:["none","spin","ping","pulse","bounce",V]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[w]}],"scale-x":[{"scale-x":[w]}],"scale-y":[{"scale-y":[w]}],rotate:[{rotate:[Pi,V]}],"translate-x":[{"translate-x":[C]}],"translate-y":[{"translate-y":[C]}],"skew-x":[{"skew-x":[S]}],"skew-y":[{"skew-y":[S]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",V]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",V]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":L()}],"scroll-mx":[{"scroll-mx":L()}],"scroll-my":[{"scroll-my":L()}],"scroll-ms":[{"scroll-ms":L()}],"scroll-me":[{"scroll-me":L()}],"scroll-mt":[{"scroll-mt":L()}],"scroll-mr":[{"scroll-mr":L()}],"scroll-mb":[{"scroll-mb":L()}],"scroll-ml":[{"scroll-ml":L()}],"scroll-p":[{"scroll-p":L()}],"scroll-px":[{"scroll-px":L()}],"scroll-py":[{"scroll-py":L()}],"scroll-ps":[{"scroll-ps":L()}],"scroll-pe":[{"scroll-pe":L()}],"scroll-pt":[{"scroll-pt":L()}],"scroll-pr":[{"scroll-pr":L()}],"scroll-pb":[{"scroll-pb":L()}],"scroll-pl":[{"scroll-pl":L()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",V]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[Ft,an,yc]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},n1=O0(t1);function ut(...e){return n1(If(e))}const r1=_k,_f=g.forwardRef(({className:e,...t},n)=>a.jsx(kf,{ref:n,className:ut("fixed right-0 top-0 z-[100] flex max-h-screen w-full flex-col gap-2.5 p-3 sm:max-w-[360px] sm:p-4",e),...t}));_f.displayName=kf.displayName;const i1=Yu("group pointer-events-auto relative grid w-full cursor-pointer grid-cols-[auto_1fr_auto] items-start gap-2.5 overflow-hidden rounded-lg border p-3 pr-2 text-foreground shadow-[0_14px_42px_hsl(var(--foreground)/0.13)] outline-none backdrop-blur-xl transition-all before:pointer-events-none before:absolute before:inset-0 before:bg-[linear-gradient(135deg,hsl(var(--primary)/0.065),transparent_40%,hsl(var(--accent)/0.045))] after:pointer-events-none after:absolute after:inset-x-0 after:top-0 after:h-px after:bg-[linear-gradient(90deg,transparent,hsl(var(--primary)/0.38),transparent)] hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-ring/45 data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full sm:data-[state=open]:slide-in-from-right-full",{variants:{variant:{default:"border-border/70 bg-popover/92",success:"border-primary/35 bg-[linear-gradient(135deg,hsl(var(--popover)/0.96),hsl(var(--primary)/0.1))]",info:"border-[hsl(var(--category-architecture)/0.38)] bg-[linear-gradient(135deg,hsl(var(--popover)/0.96),hsl(var(--category-architecture)/0.08))]",warning:"border-[hsl(var(--category-practices)/0.42)] bg-[linear-gradient(135deg,hsl(var(--popover)/0.96),hsl(var(--category-practices)/0.1))]",destructive:"destructive border-destructive/45 bg-[linear-gradient(135deg,hsl(var(--popover)/0.96),hsl(var(--destructive)/0.09))]"}},defaultVariants:{variant:"default"}}),Ff=g.forwardRef(({className:e,variant:t,...n},r)=>a.jsx(Tf,{ref:r,className:ut(i1({variant:t}),e),...n}));Ff.displayName=Tf.displayName;const o1=g.forwardRef(({className:e,...t},n)=>a.jsx(Pf,{ref:n,className:ut("inline-flex h-8 shrink-0 items-center justify-center rounded-md border border-border/70 bg-background/50 px-3 text-xs font-semibold ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring/50 focus:ring-offset-2 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground disabled:pointer-events-none disabled:opacity-50",e),...t}));o1.displayName=Pf.displayName;const Bf=g.forwardRef(({className:e,...t},n)=>a.jsx(Nf,{ref:n,className:ut("relative z-10 -mr-0.5 -mt-1 rounded-md p-1 text-muted-foreground/60 opacity-70 transition-colors hover:bg-muted hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring/45",e),"toast-close":"",...t,children:a.jsx(Xa,{className:"h-3.5 w-3.5"})}));Bf.displayName=Nf.displayName;const Vf=g.forwardRef(({className:e,...t},n)=>a.jsx(Cf,{ref:n,className:ut("line-clamp-1 text-[13px] font-semibold leading-4 tracking-normal",e),...t}));Vf.displayName=Cf.displayName;const zf=g.forwardRef(({className:e,...t},n)=>a.jsx(Sf,{ref:n,className:ut("line-clamp-1 text-xs leading-4 text-muted-foreground",e),...t}));zf.displayName=Sf.displayName;const Gd=3600,Kd={default:{icon:Ts,iconClass:"border-border/60 bg-background/70 text-foreground",railClass:"bg-[linear-gradient(180deg,hsl(var(--muted-foreground)/0.55),hsl(var(--primary)/0.55))]",progressClass:"bg-[linear-gradient(90deg,hsl(var(--muted-foreground)/0.45),hsl(var(--primary)/0.75))]"},success:{icon:Zk,iconClass:"border-primary/35 bg-primary/10 text-primary",railClass:"bg-[linear-gradient(180deg,hsl(var(--primary)),hsl(var(--accent)/0.82))]",progressClass:"bg-[linear-gradient(90deg,hsl(var(--primary)),hsl(var(--accent)))]"},info:{icon:l0,iconClass:"border-[hsl(var(--category-architecture)/0.35)] bg-[hsl(var(--category-architecture)/0.1)] text-[hsl(var(--category-architecture))]",railClass:"bg-[linear-gradient(180deg,hsl(var(--category-architecture)),hsl(var(--primary)/0.78))]",progressClass:"bg-[linear-gradient(90deg,hsl(var(--category-architecture)),hsl(var(--primary)))]"},warning:{icon:C0,iconClass:"border-[hsl(var(--category-practices)/0.38)] bg-[hsl(var(--category-practices)/0.12)] text-[hsl(var(--category-practices))]",railClass:"bg-[linear-gradient(180deg,hsl(var(--category-practices)),hsl(var(--accent)))]",progressClass:"bg-[linear-gradient(90deg,hsl(var(--category-practices)),hsl(var(--accent)))]"},destructive:{icon:e0,iconClass:"border-destructive/35 bg-destructive/10 text-destructive",railClass:"bg-[linear-gradient(180deg,hsl(var(--destructive)),hsl(var(--accent)/0.82))]",progressClass:"bg-[linear-gradient(90deg,hsl(var(--destructive)),hsl(var(--accent)))]"}};function a1(){const{toasts:e,dismiss:t}=Hu();return a.jsxs(r1,{duration:Gd,children:[e.map(function({id:n,title:r,description:i,action:o,variant:s="default",...c}){const l=Kd[s]??Kd.default,u=l.icon;return a.jsxs(Ff,{variant:s,onClick:()=>t(n),...c,children:[a.jsx("div",{className:`absolute inset-y-2.5 left-2 w-0.5 rounded-full ${l.railClass}`}),a.jsx("div",{className:`relative z-10 ml-1.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md border shadow-[inset_0_1px_0_hsl(var(--background)/0.45)] ${l.iconClass}`,children:a.jsx(u,{className:"h-3.5 w-3.5"})}),a.jsxs("div",{className:"relative z-10 min-w-0 flex-1",children:[a.jsxs("div",{className:"grid gap-0.5",children:[r&&a.jsx(Vf,{children:r}),i&&a.jsx(zf,{children:i})]}),o&&a.jsx("div",{className:"mt-2",onClick:h=>h.stopPropagation(),children:o})]}),a.jsx(Bf,{onClick:h=>h.stopPropagation()}),a.jsx("div",{className:"absolute inset-x-0 bottom-0 h-0.5 bg-muted/60",children:a.jsx("div",{className:`h-full ${l.progressClass}`,style:{animation:`toast-progress ${Gd}ms linear forwards`,transformOrigin:"left"}})})]},n)}),a.jsx(_f,{})]})}var s1=Yl[" useId ".trim().toString()]||(()=>{}),c1=0;function Hf(e){const[t,n]=g.useState(s1());return Zt(()=>{n(r=>r??String(c1++))},[e]),t?`radix-${t}`:""}const l1=["top","right","bottom","left"],Mn=Math.min,Qe=Math.max,Ja=Math.round,Yo=Math.floor,Dt=e=>({x:e,y:e}),u1={left:"right",right:"left",bottom:"top",top:"bottom"},h1={start:"end",end:"start"};function Ol(e,t,n){return Qe(e,Mn(t,n))}function en(e,t){return typeof e=="function"?e(t):e}function tn(e){return e.split("-")[0]}function mi(e){return e.split("-")[1]}function Ju(e){return e==="x"?"y":"x"}function Zu(e){return e==="y"?"height":"width"}const d1=new Set(["top","bottom"]);function Rt(e){return d1.has(tn(e))?"y":"x"}function eh(e){return Ju(Rt(e))}function p1(e,t,n){n===void 0&&(n=!1);const r=mi(e),i=eh(e),o=Zu(i);let s=i==="x"?r===(n?"end":"start")?"right":"left":r==="start"?"bottom":"top";return t.reference[o]>t.floating[o]&&(s=Za(s)),[s,Za(s)]}function g1(e){const t=Za(e);return[Ul(e),t,Ul(t)]}function Ul(e){return e.replace(/start|end/g,t=>h1[t])}const $d=["left","right"],Qd=["right","left"],m1=["top","bottom"],f1=["bottom","top"];function y1(e,t,n){switch(e){case"top":case"bottom":return n?t?Qd:$d:t?$d:Qd;case"left":case"right":return t?m1:f1;default:return[]}}function v1(e,t,n,r){const i=mi(e);let o=y1(tn(e),n==="start",r);return i&&(o=o.map(s=>s+"-"+i),t&&(o=o.concat(o.map(Ul)))),o}function Za(e){return e.replace(/left|right|bottom|top/g,t=>u1[t])}function b1(e){return{top:0,right:0,bottom:0,left:0,...e}}function Wf(e){return typeof e!="number"?b1(e):{top:e,right:e,bottom:e,left:e}}function es(e){const{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function Yd(e,t,n){let{reference:r,floating:i}=e;const o=Rt(t),s=eh(t),c=Zu(s),l=tn(t),u=o==="y",h=r.x+r.width/2-i.width/2,d=r.y+r.height/2-i.height/2,p=r[c]/2-i[c]/2;let v;switch(l){case"top":v={x:h,y:r.y-i.height};break;case"bottom":v={x:h,y:r.y+r.height};break;case"right":v={x:r.x+r.width,y:d};break;case"left":v={x:r.x-i.width,y:d};break;default:v={x:r.x,y:r.y}}switch(mi(t)){case"start":v[s]-=p*(n&&u?-1:1);break;case"end":v[s]+=p*(n&&u?-1:1);break}return v}const w1=async(e,t,n)=>{const{placement:r="bottom",strategy:i="absolute",middleware:o=[],platform:s}=n,c=o.filter(Boolean),l=await(s.isRTL==null?void 0:s.isRTL(t));let u=await s.getElementRects({reference:e,floating:t,strategy:i}),{x:h,y:d}=Yd(u,r,l),p=r,v={},k=0;for(let y=0;y<c.length;y++){const{name:x,fn:f}=c[y],{x:m,y:b,data:w,reset:T}=await f({x:h,y:d,initialPlacement:r,placement:p,strategy:i,middlewareData:v,rects:u,platform:s,elements:{reference:e,floating:t}});h=m??h,d=b??d,v={...v,[x]:{...v[x],...w}},T&&k<=50&&(k++,typeof T=="object"&&(T.placement&&(p=T.placement),T.rects&&(u=T.rects===!0?await s.getElementRects({reference:e,floating:t,strategy:i}):T.rects),{x:h,y:d}=Yd(u,p,l)),y=-1)}return{x:h,y:d,placement:p,strategy:i,middlewareData:v}};async function uo(e,t){var n;t===void 0&&(t={});const{x:r,y:i,platform:o,rects:s,elements:c,strategy:l}=e,{boundary:u="clippingAncestors",rootBoundary:h="viewport",elementContext:d="floating",altBoundary:p=!1,padding:v=0}=en(t,e),k=Wf(v),x=c[p?d==="floating"?"reference":"floating":d],f=es(await o.getClippingRect({element:(n=await(o.isElement==null?void 0:o.isElement(x)))==null||n?x:x.contextElement||await(o.getDocumentElement==null?void 0:o.getDocumentElement(c.floating)),boundary:u,rootBoundary:h,strategy:l})),m=d==="floating"?{x:r,y:i,width:s.floating.width,height:s.floating.height}:s.reference,b=await(o.getOffsetParent==null?void 0:o.getOffsetParent(c.floating)),w=await(o.isElement==null?void 0:o.isElement(b))?await(o.getScale==null?void 0:o.getScale(b))||{x:1,y:1}:{x:1,y:1},T=es(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:m,offsetParent:b,strategy:l}):m);return{top:(f.top-T.top+k.top)/w.y,bottom:(T.bottom-f.bottom+k.bottom)/w.y,left:(f.left-T.left+k.left)/w.x,right:(T.right-f.right+k.right)/w.x}}const x1=e=>({name:"arrow",options:e,async fn(t){const{x:n,y:r,placement:i,rects:o,platform:s,elements:c,middlewareData:l}=t,{element:u,padding:h=0}=en(e,t)||{};if(u==null)return{};const d=Wf(h),p={x:n,y:r},v=eh(i),k=Zu(v),y=await s.getDimensions(u),x=v==="y",f=x?"top":"left",m=x?"bottom":"right",b=x?"clientHeight":"clientWidth",w=o.reference[k]+o.reference[v]-p[v]-o.floating[k],T=p[v]-o.reference[v],S=await(s.getOffsetParent==null?void 0:s.getOffsetParent(u));let P=S?S[b]:0;(!P||!await(s.isElement==null?void 0:s.isElement(S)))&&(P=c.floating[b]||o.floating[k]);const C=w/2-T/2,A=P/2-y[k]/2-1,E=Mn(d[f],A),q=Mn(d[m],A),L=E,W=P-y[k]-q,D=P/2-y[k]/2+C,G=Ol(L,D,W),z=!l.arrow&&mi(i)!=null&&D!==G&&o.reference[k]/2-(D<L?E:q)-y[k]/2<0,K=z?D<L?D-L:D-W:0;return{[v]:p[v]+K,data:{[v]:G,centerOffset:D-G-K,...z&&{alignmentOffset:K}},reset:z}}}),k1=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n,r;const{placement:i,middlewareData:o,rects:s,initialPlacement:c,platform:l,elements:u}=t,{mainAxis:h=!0,crossAxis:d=!0,fallbackPlacements:p,fallbackStrategy:v="bestFit",fallbackAxisSideDirection:k="none",flipAlignment:y=!0,...x}=en(e,t);if((n=o.arrow)!=null&&n.alignmentOffset)return{};const f=tn(i),m=Rt(c),b=tn(c)===c,w=await(l.isRTL==null?void 0:l.isRTL(u.floating)),T=p||(b||!y?[Za(c)]:g1(c)),S=k!=="none";!p&&S&&T.push(...v1(c,y,k,w));const P=[c,...T],C=await uo(t,x),A=[];let E=((r=o.flip)==null?void 0:r.overflows)||[];if(h&&A.push(C[f]),d){const D=p1(i,s,w);A.push(C[D[0]],C[D[1]])}if(E=[...E,{placement:i,overflows:A}],!A.every(D=>D<=0)){var q,L;const D=(((q=o.flip)==null?void 0:q.index)||0)+1,G=P[D];if(G&&(!(d==="alignment"?m!==Rt(G):!1)||E.every(N=>N.overflows[0]>0&&Rt(N.placement)===m)))return{data:{index:D,overflows:E},reset:{placement:G}};let z=(L=E.filter(K=>K.overflows[0]<=0).sort((K,N)=>K.overflows[1]-N.overflows[1])[0])==null?void 0:L.placement;if(!z)switch(v){case"bestFit":{var W;const K=(W=E.filter(N=>{if(S){const M=Rt(N.placement);return M===m||M==="y"}return!0}).map(N=>[N.placement,N.overflows.filter(M=>M>0).reduce((M,_)=>M+_,0)]).sort((N,M)=>N[1]-M[1])[0])==null?void 0:W[0];K&&(z=K);break}case"initialPlacement":z=c;break}if(i!==z)return{reset:{placement:z}}}return{}}}};function Xd(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function Jd(e){return l1.some(t=>e[t]>=0)}const T1=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(t){const{rects:n}=t,{strategy:r="referenceHidden",...i}=en(e,t);switch(r){case"referenceHidden":{const o=await uo(t,{...i,elementContext:"reference"}),s=Xd(o,n.reference);return{data:{referenceHiddenOffsets:s,referenceHidden:Jd(s)}}}case"escaped":{const o=await uo(t,{...i,altBoundary:!0}),s=Xd(o,n.floating);return{data:{escapedOffsets:s,escaped:Jd(s)}}}default:return{}}}}},Gf=new Set(["left","top"]);async function C1(e,t){const{placement:n,platform:r,elements:i}=e,o=await(r.isRTL==null?void 0:r.isRTL(i.floating)),s=tn(n),c=mi(n),l=Rt(n)==="y",u=Gf.has(s)?-1:1,h=o&&l?-1:1,d=en(t,e);let{mainAxis:p,crossAxis:v,alignmentAxis:k}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return c&&typeof k=="number"&&(v=c==="end"?k*-1:k),l?{x:v*h,y:p*u}:{x:p*u,y:v*h}}const S1=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var n,r;const{x:i,y:o,placement:s,middlewareData:c}=t,l=await C1(t,e);return s===((n=c.offset)==null?void 0:n.placement)&&(r=c.arrow)!=null&&r.alignmentOffset?{}:{x:i+l.x,y:o+l.y,data:{...l,placement:s}}}}},P1=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:r,placement:i}=t,{mainAxis:o=!0,crossAxis:s=!1,limiter:c={fn:x=>{let{x:f,y:m}=x;return{x:f,y:m}}},...l}=en(e,t),u={x:n,y:r},h=await uo(t,l),d=Rt(tn(i)),p=Ju(d);let v=u[p],k=u[d];if(o){const x=p==="y"?"top":"left",f=p==="y"?"bottom":"right",m=v+h[x],b=v-h[f];v=Ol(m,v,b)}if(s){const x=d==="y"?"top":"left",f=d==="y"?"bottom":"right",m=k+h[x],b=k-h[f];k=Ol(m,k,b)}const y=c.fn({...t,[p]:v,[d]:k});return{...y,data:{x:y.x-n,y:y.y-r,enabled:{[p]:o,[d]:s}}}}}},N1=function(e){return e===void 0&&(e={}),{options:e,fn(t){const{x:n,y:r,placement:i,rects:o,middlewareData:s}=t,{offset:c=0,mainAxis:l=!0,crossAxis:u=!0}=en(e,t),h={x:n,y:r},d=Rt(i),p=Ju(d);let v=h[p],k=h[d];const y=en(c,t),x=typeof y=="number"?{mainAxis:y,crossAxis:0}:{mainAxis:0,crossAxis:0,...y};if(l){const b=p==="y"?"height":"width",w=o.reference[p]-o.floating[b]+x.mainAxis,T=o.reference[p]+o.reference[b]-x.mainAxis;v<w?v=w:v>T&&(v=T)}if(u){var f,m;const b=p==="y"?"width":"height",w=Gf.has(tn(i)),T=o.reference[d]-o.floating[b]+(w&&((f=s.offset)==null?void 0:f[d])||0)+(w?0:x.crossAxis),S=o.reference[d]+o.reference[b]+(w?0:((m=s.offset)==null?void 0:m[d])||0)-(w?x.crossAxis:0);k<T?k=T:k>S&&(k=S)}return{[p]:v,[d]:k}}}},A1=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){var n,r;const{placement:i,rects:o,platform:s,elements:c}=t,{apply:l=()=>{},...u}=en(e,t),h=await uo(t,u),d=tn(i),p=mi(i),v=Rt(i)==="y",{width:k,height:y}=o.floating;let x,f;d==="top"||d==="bottom"?(x=d,f=p===(await(s.isRTL==null?void 0:s.isRTL(c.floating))?"start":"end")?"left":"right"):(f=d,x=p==="end"?"top":"bottom");const m=y-h.top-h.bottom,b=k-h.left-h.right,w=Mn(y-h[x],m),T=Mn(k-h[f],b),S=!t.middlewareData.shift;let P=w,C=T;if((n=t.middlewareData.shift)!=null&&n.enabled.x&&(C=b),(r=t.middlewareData.shift)!=null&&r.enabled.y&&(P=m),S&&!p){const E=Qe(h.left,0),q=Qe(h.right,0),L=Qe(h.top,0),W=Qe(h.bottom,0);v?C=k-2*(E!==0||q!==0?E+q:Qe(h.left,h.right)):P=y-2*(L!==0||W!==0?L+W:Qe(h.top,h.bottom))}await l({...t,availableWidth:C,availableHeight:P});const A=await s.getDimensions(c.floating);return k!==A.width||y!==A.height?{reset:{rects:!0}}:{}}}};function Cs(){return typeof window<"u"}function fi(e){return Kf(e)?(e.nodeName||"").toLowerCase():"#document"}function Je(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Ut(e){var t;return(t=(Kf(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Kf(e){return Cs()?e instanceof Node||e instanceof Je(e).Node:!1}function kt(e){return Cs()?e instanceof Element||e instanceof Je(e).Element:!1}function Ot(e){return Cs()?e instanceof HTMLElement||e instanceof Je(e).HTMLElement:!1}function Zd(e){return!Cs()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof Je(e).ShadowRoot}const I1=new Set(["inline","contents"]);function No(e){const{overflow:t,overflowX:n,overflowY:r,display:i}=Tt(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!I1.has(i)}const E1=new Set(["table","td","th"]);function j1(e){return E1.has(fi(e))}const R1=[":popover-open",":modal"];function Ss(e){return R1.some(t=>{try{return e.matches(t)}catch{return!1}})}const L1=["transform","translate","scale","rotate","perspective"],M1=["transform","translate","scale","rotate","perspective","filter"],D1=["paint","layout","strict","content"];function th(e){const t=nh(),n=kt(e)?Tt(e):e;return L1.some(r=>n[r]?n[r]!=="none":!1)||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||M1.some(r=>(n.willChange||"").includes(r))||D1.some(r=>(n.contain||"").includes(r))}function q1(e){let t=Dn(e);for(;Ot(t)&&!ii(t);){if(th(t))return t;if(Ss(t))return null;t=Dn(t)}return null}function nh(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const O1=new Set(["html","body","#document"]);function ii(e){return O1.has(fi(e))}function Tt(e){return Je(e).getComputedStyle(e)}function Ps(e){return kt(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Dn(e){if(fi(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Zd(e)&&e.host||Ut(e);return Zd(t)?t.host:t}function $f(e){const t=Dn(e);return ii(t)?e.ownerDocument?e.ownerDocument.body:e.body:Ot(t)&&No(t)?t:$f(t)}function ho(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const i=$f(e),o=i===((r=e.ownerDocument)==null?void 0:r.body),s=Je(i);if(o){const c=_l(s);return t.concat(s,s.visualViewport||[],No(i)?i:[],c&&n?ho(c):[])}return t.concat(i,ho(i,[],n))}function _l(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Qf(e){const t=Tt(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const i=Ot(e),o=i?e.offsetWidth:n,s=i?e.offsetHeight:r,c=Ja(n)!==o||Ja(r)!==s;return c&&(n=o,r=s),{width:n,height:r,$:c}}function rh(e){return kt(e)?e:e.contextElement}function Br(e){const t=rh(e);if(!Ot(t))return Dt(1);const n=t.getBoundingClientRect(),{width:r,height:i,$:o}=Qf(t);let s=(o?Ja(n.width):n.width)/r,c=(o?Ja(n.height):n.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!c||!Number.isFinite(c))&&(c=1),{x:s,y:c}}const U1=Dt(0);function Yf(e){const t=Je(e);return!nh()||!t.visualViewport?U1:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function _1(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==Je(e)?!1:t}function hr(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const i=e.getBoundingClientRect(),o=rh(e);let s=Dt(1);t&&(r?kt(r)&&(s=Br(r)):s=Br(e));const c=_1(o,n,r)?Yf(o):Dt(0);let l=(i.left+c.x)/s.x,u=(i.top+c.y)/s.y,h=i.width/s.x,d=i.height/s.y;if(o){const p=Je(o),v=r&&kt(r)?Je(r):r;let k=p,y=_l(k);for(;y&&r&&v!==k;){const x=Br(y),f=y.getBoundingClientRect(),m=Tt(y),b=f.left+(y.clientLeft+parseFloat(m.paddingLeft))*x.x,w=f.top+(y.clientTop+parseFloat(m.paddingTop))*x.y;l*=x.x,u*=x.y,h*=x.x,d*=x.y,l+=b,u+=w,k=Je(y),y=_l(k)}}return es({width:h,height:d,x:l,y:u})}function ih(e,t){const n=Ps(e).scrollLeft;return t?t.left+n:hr(Ut(e)).left+n}function Xf(e,t,n){n===void 0&&(n=!1);const r=e.getBoundingClientRect(),i=r.left+t.scrollLeft-(n?0:ih(e,r)),o=r.top+t.scrollTop;return{x:i,y:o}}function F1(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e;const o=i==="fixed",s=Ut(r),c=t?Ss(t.floating):!1;if(r===s||c&&o)return n;let l={scrollLeft:0,scrollTop:0},u=Dt(1);const h=Dt(0),d=Ot(r);if((d||!d&&!o)&&((fi(r)!=="body"||No(s))&&(l=Ps(r)),Ot(r))){const v=hr(r);u=Br(r),h.x=v.x+r.clientLeft,h.y=v.y+r.clientTop}const p=s&&!d&&!o?Xf(s,l,!0):Dt(0);return{width:n.width*u.x,height:n.height*u.y,x:n.x*u.x-l.scrollLeft*u.x+h.x+p.x,y:n.y*u.y-l.scrollTop*u.y+h.y+p.y}}function B1(e){return Array.from(e.getClientRects())}function V1(e){const t=Ut(e),n=Ps(e),r=e.ownerDocument.body,i=Qe(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),o=Qe(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let s=-n.scrollLeft+ih(e);const c=-n.scrollTop;return Tt(r).direction==="rtl"&&(s+=Qe(t.clientWidth,r.clientWidth)-i),{width:i,height:o,x:s,y:c}}function z1(e,t){const n=Je(e),r=Ut(e),i=n.visualViewport;let o=r.clientWidth,s=r.clientHeight,c=0,l=0;if(i){o=i.width,s=i.height;const u=nh();(!u||u&&t==="fixed")&&(c=i.offsetLeft,l=i.offsetTop)}return{width:o,height:s,x:c,y:l}}const H1=new Set(["absolute","fixed"]);function W1(e,t){const n=hr(e,!0,t==="fixed"),r=n.top+e.clientTop,i=n.left+e.clientLeft,o=Ot(e)?Br(e):Dt(1),s=e.clientWidth*o.x,c=e.clientHeight*o.y,l=i*o.x,u=r*o.y;return{width:s,height:c,x:l,y:u}}function ep(e,t,n){let r;if(t==="viewport")r=z1(e,n);else if(t==="document")r=V1(Ut(e));else if(kt(t))r=W1(t,n);else{const i=Yf(e);r={x:t.x-i.x,y:t.y-i.y,width:t.width,height:t.height}}return es(r)}function Jf(e,t){const n=Dn(e);return n===t||!kt(n)||ii(n)?!1:Tt(n).position==="fixed"||Jf(n,t)}function G1(e,t){const n=t.get(e);if(n)return n;let r=ho(e,[],!1).filter(c=>kt(c)&&fi(c)!=="body"),i=null;const o=Tt(e).position==="fixed";let s=o?Dn(e):e;for(;kt(s)&&!ii(s);){const c=Tt(s),l=th(s);!l&&c.position==="fixed"&&(i=null),(o?!l&&!i:!l&&c.position==="static"&&!!i&&H1.has(i.position)||No(s)&&!l&&Jf(e,s))?r=r.filter(h=>h!==s):i=c,s=Dn(s)}return t.set(e,r),r}function K1(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e;const s=[...n==="clippingAncestors"?Ss(t)?[]:G1(t,this._c):[].concat(n),r],c=s[0],l=s.reduce((u,h)=>{const d=ep(t,h,i);return u.top=Qe(d.top,u.top),u.right=Mn(d.right,u.right),u.bottom=Mn(d.bottom,u.bottom),u.left=Qe(d.left,u.left),u},ep(t,c,i));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function $1(e){const{width:t,height:n}=Qf(e);return{width:t,height:n}}function Q1(e,t,n){const r=Ot(t),i=Ut(t),o=n==="fixed",s=hr(e,!0,o,t);let c={scrollLeft:0,scrollTop:0};const l=Dt(0);function u(){l.x=ih(i)}if(r||!r&&!o)if((fi(t)!=="body"||No(i))&&(c=Ps(t)),r){const v=hr(t,!0,o,t);l.x=v.x+t.clientLeft,l.y=v.y+t.clientTop}else i&&u();o&&!r&&i&&u();const h=i&&!r&&!o?Xf(i,c):Dt(0),d=s.left+c.scrollLeft-l.x-h.x,p=s.top+c.scrollTop-l.y-h.y;return{x:d,y:p,width:s.width,height:s.height}}function vc(e){return Tt(e).position==="static"}function tp(e,t){if(!Ot(e)||Tt(e).position==="fixed")return null;if(t)return t(e);let n=e.offsetParent;return Ut(e)===n&&(n=n.ownerDocument.body),n}function Zf(e,t){const n=Je(e);if(Ss(e))return n;if(!Ot(e)){let i=Dn(e);for(;i&&!ii(i);){if(kt(i)&&!vc(i))return i;i=Dn(i)}return n}let r=tp(e,t);for(;r&&j1(r)&&vc(r);)r=tp(r,t);return r&&ii(r)&&vc(r)&&!th(r)?n:r||q1(e)||n}const Y1=async function(e){const t=this.getOffsetParent||Zf,n=this.getDimensions,r=await n(e.floating);return{reference:Q1(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function X1(e){return Tt(e).direction==="rtl"}const J1={convertOffsetParentRelativeRectToViewportRelativeRect:F1,getDocumentElement:Ut,getClippingRect:K1,getOffsetParent:Zf,getElementRects:Y1,getClientRects:B1,getDimensions:$1,getScale:Br,isElement:kt,isRTL:X1};function ey(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function Z1(e,t){let n=null,r;const i=Ut(e);function o(){var c;clearTimeout(r),(c=n)==null||c.disconnect(),n=null}function s(c,l){c===void 0&&(c=!1),l===void 0&&(l=1),o();const u=e.getBoundingClientRect(),{left:h,top:d,width:p,height:v}=u;if(c||t(),!p||!v)return;const k=Yo(d),y=Yo(i.clientWidth-(h+p)),x=Yo(i.clientHeight-(d+v)),f=Yo(h),b={rootMargin:-k+"px "+-y+"px "+-x+"px "+-f+"px",threshold:Qe(0,Mn(1,l))||1};let w=!0;function T(S){const P=S[0].intersectionRatio;if(P!==l){if(!w)return s();P?s(!1,P):r=setTimeout(()=>{s(!1,1e-7)},1e3)}P===1&&!ey(u,e.getBoundingClientRect())&&s(),w=!1}try{n=new IntersectionObserver(T,{...b,root:i.ownerDocument})}catch{n=new IntersectionObserver(T,b)}n.observe(e)}return s(!0),o}function eT(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:o=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:l=!1}=r,u=rh(e),h=i||o?[...u?ho(u):[],...ho(t)]:[];h.forEach(f=>{i&&f.addEventListener("scroll",n,{passive:!0}),o&&f.addEventListener("resize",n)});const d=u&&c?Z1(u,n):null;let p=-1,v=null;s&&(v=new ResizeObserver(f=>{let[m]=f;m&&m.target===u&&v&&(v.unobserve(t),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{var b;(b=v)==null||b.observe(t)})),n()}),u&&!l&&v.observe(u),v.observe(t));let k,y=l?hr(e):null;l&&x();function x(){const f=hr(e);y&&!ey(y,f)&&n(),y=f,k=requestAnimationFrame(x)}return n(),()=>{var f;h.forEach(m=>{i&&m.removeEventListener("scroll",n),o&&m.removeEventListener("resize",n)}),d==null||d(),(f=v)==null||f.disconnect(),v=null,l&&cancelAnimationFrame(k)}}const tT=S1,nT=P1,rT=k1,iT=A1,oT=T1,np=x1,aT=N1,sT=(e,t,n)=>{const r=new Map,i={platform:J1,...n},o={...i.platform,_c:r};return w1(e,t,{...i,platform:o})};var cT=typeof document<"u",lT=function(){},ya=cT?g.useLayoutEffect:lT;function ts(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let n,r,i;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(n=e.length,n!==t.length)return!1;for(r=n;r--!==0;)if(!ts(e[r],t[r]))return!1;return!0}if(i=Object.keys(e),n=i.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!{}.hasOwnProperty.call(t,i[r]))return!1;for(r=n;r--!==0;){const o=i[r];if(!(o==="_owner"&&e.$$typeof)&&!ts(e[o],t[o]))return!1}return!0}return e!==e&&t!==t}function ty(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function rp(e,t){const n=ty(e);return Math.round(t*n)/n}function bc(e){const t=g.useRef(e);return ya(()=>{t.current=e}),t}function uT(e){e===void 0&&(e={});const{placement:t="bottom",strategy:n="absolute",middleware:r=[],platform:i,elements:{reference:o,floating:s}={},transform:c=!0,whileElementsMounted:l,open:u}=e,[h,d]=g.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[p,v]=g.useState(r);ts(p,r)||v(r);const[k,y]=g.useState(null),[x,f]=g.useState(null),m=g.useCallback(N=>{N!==S.current&&(S.current=N,y(N))},[]),b=g.useCallback(N=>{N!==P.current&&(P.current=N,f(N))},[]),w=o||k,T=s||x,S=g.useRef(null),P=g.useRef(null),C=g.useRef(h),A=l!=null,E=bc(l),q=bc(i),L=bc(u),W=g.useCallback(()=>{if(!S.current||!P.current)return;const N={placement:t,strategy:n,middleware:p};q.current&&(N.platform=q.current),sT(S.current,P.current,N).then(M=>{const _={...M,isPositioned:L.current!==!1};D.current&&!ts(C.current,_)&&(C.current=_,ko.flushSync(()=>{d(_)}))})},[p,t,n,q,L]);ya(()=>{u===!1&&C.current.isPositioned&&(C.current.isPositioned=!1,d(N=>({...N,isPositioned:!1})))},[u]);const D=g.useRef(!1);ya(()=>(D.current=!0,()=>{D.current=!1}),[]),ya(()=>{if(w&&(S.current=w),T&&(P.current=T),w&&T){if(E.current)return E.current(w,T,W);W()}},[w,T,W,E,A]);const G=g.useMemo(()=>({reference:S,floating:P,setReference:m,setFloating:b}),[m,b]),z=g.useMemo(()=>({reference:w,floating:T}),[w,T]),K=g.useMemo(()=>{const N={position:n,left:0,top:0};if(!z.floating)return N;const M=rp(z.floating,h.x),_=rp(z.floating,h.y);return c?{...N,transform:"translate("+M+"px, "+_+"px)",...ty(z.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:M,top:_}},[n,c,z.floating,h.x,h.y]);return g.useMemo(()=>({...h,update:W,refs:G,elements:z,floatingStyles:K}),[h,W,G,z,K])}const hT=e=>{function t(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:e,fn(n){const{element:r,padding:i}=typeof e=="function"?e(n):e;return r&&t(r)?r.current!=null?np({element:r.current,padding:i}).fn(n):{}:r?np({element:r,padding:i}).fn(n):{}}}},dT=(e,t)=>({...tT(e),options:[e,t]}),pT=(e,t)=>({...nT(e),options:[e,t]}),gT=(e,t)=>({...aT(e),options:[e,t]}),mT=(e,t)=>({...rT(e),options:[e,t]}),fT=(e,t)=>({...iT(e),options:[e,t]}),yT=(e,t)=>({...oT(e),options:[e,t]}),vT=(e,t)=>({...hT(e),options:[e,t]});var bT="Arrow",ny=g.forwardRef((e,t)=>{const{children:n,width:r=10,height:i=5,...o}=e;return a.jsx(Pe.svg,{...o,ref:t,width:r,height:i,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:e.asChild?n:a.jsx("polygon",{points:"0,0 30,0 15,10"})})});ny.displayName=bT;var wT=ny;function xT(e){const[t,n]=g.useState(void 0);return Zt(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const r=new ResizeObserver(i=>{if(!Array.isArray(i)||!i.length)return;const o=i[0];let s,c;if("borderBoxSize"in o){const l=o.borderBoxSize,u=Array.isArray(l)?l[0]:l;s=u.inlineSize,c=u.blockSize}else s=e.offsetWidth,c=e.offsetHeight;n({width:s,height:c})});return r.observe(e,{box:"border-box"}),()=>r.unobserve(e)}else n(void 0)},[e]),t}var oh="Popper",[ry,Ns]=Co(oh),[kT,iy]=ry(oh),oy=e=>{const{__scopePopper:t,children:n}=e,[r,i]=g.useState(null);return a.jsx(kT,{scope:t,anchor:r,onAnchorChange:i,children:n})};oy.displayName=oh;var ay="PopperAnchor",sy=g.forwardRef((e,t)=>{const{__scopePopper:n,virtualRef:r,...i}=e,o=iy(ay,n),s=g.useRef(null),c=We(t,s);return g.useEffect(()=>{o.onAnchorChange((r==null?void 0:r.current)||s.current)}),r?null:a.jsx(Pe.div,{...i,ref:c})});sy.displayName=ay;var ah="PopperContent",[TT,CT]=ry(ah),cy=g.forwardRef((e,t)=>{var _t,Io,Vn,yi,j,U;const{__scopePopper:n,side:r="bottom",sideOffset:i=0,align:o="center",alignOffset:s=0,arrowPadding:c=0,avoidCollisions:l=!0,collisionBoundary:u=[],collisionPadding:h=0,sticky:d="partial",hideWhenDetached:p=!1,updatePositionStrategy:v="optimized",onPlaced:k,...y}=e,x=iy(ah,n),[f,m]=g.useState(null),b=We(t,$=>m($)),[w,T]=g.useState(null),S=xT(w),P=(S==null?void 0:S.width)??0,C=(S==null?void 0:S.height)??0,A=r+(o!=="center"?"-"+o:""),E=typeof h=="number"?h:{top:0,right:0,bottom:0,left:0,...h},q=Array.isArray(u)?u:[u],L=q.length>0,W={padding:E,boundary:q.filter(PT),altBoundary:L},{refs:D,floatingStyles:G,placement:z,isPositioned:K,middlewareData:N}=uT({strategy:"fixed",placement:A,whileElementsMounted:(...$)=>eT(...$,{animationFrame:v==="always"}),elements:{reference:x.anchor},middleware:[dT({mainAxis:i+C,alignmentAxis:s}),l&&pT({mainAxis:!0,crossAxis:!1,limiter:d==="partial"?gT():void 0,...W}),l&&mT({...W}),fT({...W,apply:({elements:$,rects:pe,availableWidth:ht,availableHeight:Us})=>{const{width:hv,height:dv}=pe.reference,Eo=$.floating.style;Eo.setProperty("--radix-popper-available-width",`${ht}px`),Eo.setProperty("--radix-popper-available-height",`${Us}px`),Eo.setProperty("--radix-popper-anchor-width",`${hv}px`),Eo.setProperty("--radix-popper-anchor-height",`${dv}px`)}}),w&&vT({element:w,padding:c}),NT({arrowWidth:P,arrowHeight:C}),p&&yT({strategy:"referenceHidden",...W})]}),[M,_]=hy(z),H=qt(k);Zt(()=>{K&&(H==null||H())},[K,H]);const Z=(_t=N.arrow)==null?void 0:_t.x,Ge=(Io=N.arrow)==null?void 0:Io.y,Me=((Vn=N.arrow)==null?void 0:Vn.centerOffset)!==0,[rn,Ke]=g.useState();return Zt(()=>{f&&Ke(window.getComputedStyle(f).zIndex)},[f]),a.jsx("div",{ref:D.setFloating,"data-radix-popper-content-wrapper":"",style:{...G,transform:K?G.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:rn,"--radix-popper-transform-origin":[(yi=N.transformOrigin)==null?void 0:yi.x,(j=N.transformOrigin)==null?void 0:j.y].join(" "),...((U=N.hide)==null?void 0:U.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:e.dir,children:a.jsx(TT,{scope:n,placedSide:M,onArrowChange:T,arrowX:Z,arrowY:Ge,shouldHideArrow:Me,children:a.jsx(Pe.div,{"data-side":M,"data-align":_,...y,ref:b,style:{...y.style,animation:K?void 0:"none"}})})})});cy.displayName=ah;var ly="PopperArrow",ST={top:"bottom",right:"left",bottom:"top",left:"right"},uy=g.forwardRef(function(t,n){const{__scopePopper:r,...i}=t,o=CT(ly,r),s=ST[o.placedSide];return a.jsx("span",{ref:o.onArrowChange,style:{position:"absolute",left:o.arrowX,top:o.arrowY,[s]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[o.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[o.placedSide],visibility:o.shouldHideArrow?"hidden":void 0},children:a.jsx(wT,{...i,ref:n,style:{...i.style,display:"block"}})})});uy.displayName=ly;function PT(e){return e!==null}var NT=e=>({name:"transformOrigin",options:e,fn(t){var x,f,m;const{placement:n,rects:r,middlewareData:i}=t,s=((x=i.arrow)==null?void 0:x.centerOffset)!==0,c=s?0:e.arrowWidth,l=s?0:e.arrowHeight,[u,h]=hy(n),d={start:"0%",center:"50%",end:"100%"}[h],p=(((f=i.arrow)==null?void 0:f.x)??0)+c/2,v=(((m=i.arrow)==null?void 0:m.y)??0)+l/2;let k="",y="";return u==="bottom"?(k=s?d:`${p}px`,y=`${-l}px`):u==="top"?(k=s?d:`${p}px`,y=`${r.floating.height+l}px`):u==="right"?(k=`${-l}px`,y=s?d:`${v}px`):u==="left"&&(k=`${r.floating.width+l}px`,y=s?d:`${v}px`),{data:{x:k,y}}}});function hy(e){const[t,n="center"]=e.split("-");return[t,n]}var dy=oy,sh=sy,py=cy,gy=uy,[As,EN]=Co("Tooltip",[Ns]),Is=Ns(),my="TooltipProvider",AT=700,Fl="tooltip.open",[IT,ch]=As(my),fy=e=>{const{__scopeTooltip:t,delayDuration:n=AT,skipDelayDuration:r=300,disableHoverableContent:i=!1,children:o}=e,s=g.useRef(!0),c=g.useRef(!1),l=g.useRef(0);return g.useEffect(()=>{const u=l.current;return()=>window.clearTimeout(u)},[]),a.jsx(IT,{scope:t,isOpenDelayedRef:s,delayDuration:n,onOpen:g.useCallback(()=>{window.clearTimeout(l.current),s.current=!1},[]),onClose:g.useCallback(()=>{window.clearTimeout(l.current),l.current=window.setTimeout(()=>s.current=!0,r)},[r]),isPointerInTransitRef:c,onPointerInTransitChange:g.useCallback(u=>{c.current=u},[]),disableHoverableContent:i,children:o})};fy.displayName=my;var po="Tooltip",[ET,Es]=As(po),yy=e=>{const{__scopeTooltip:t,children:n,open:r,defaultOpen:i,onOpenChange:o,disableHoverableContent:s,delayDuration:c}=e,l=ch(po,e.__scopeTooltip),u=Is(t),[h,d]=g.useState(null),p=Hf(),v=g.useRef(0),k=s??l.disableHoverableContent,y=c??l.delayDuration,x=g.useRef(!1),[f,m]=Gu({prop:r,defaultProp:i??!1,onChange:P=>{P?(l.onOpen(),document.dispatchEvent(new CustomEvent(Fl))):l.onClose(),o==null||o(P)},caller:po}),b=g.useMemo(()=>f?x.current?"delayed-open":"instant-open":"closed",[f]),w=g.useCallback(()=>{window.clearTimeout(v.current),v.current=0,x.current=!1,m(!0)},[m]),T=g.useCallback(()=>{window.clearTimeout(v.current),v.current=0,m(!1)},[m]),S=g.useCallback(()=>{window.clearTimeout(v.current),v.current=window.setTimeout(()=>{x.current=!0,m(!0),v.current=0},y)},[y,m]);return g.useEffect(()=>()=>{v.current&&(window.clearTimeout(v.current),v.current=0)},[]),a.jsx(dy,{...u,children:a.jsx(ET,{scope:t,contentId:p,open:f,stateAttribute:b,trigger:h,onTriggerChange:d,onTriggerEnter:g.useCallback(()=>{l.isOpenDelayedRef.current?S():w()},[l.isOpenDelayedRef,S,w]),onTriggerLeave:g.useCallback(()=>{k?T():(window.clearTimeout(v.current),v.current=0)},[T,k]),onOpen:w,onClose:T,disableHoverableContent:k,children:n})})};yy.displayName=po;var Bl="TooltipTrigger",vy=g.forwardRef((e,t)=>{const{__scopeTooltip:n,...r}=e,i=Es(Bl,n),o=ch(Bl,n),s=Is(n),c=g.useRef(null),l=We(t,c,i.onTriggerChange),u=g.useRef(!1),h=g.useRef(!1),d=g.useCallback(()=>u.current=!1,[]);return g.useEffect(()=>()=>document.removeEventListener("pointerup",d),[d]),a.jsx(sh,{asChild:!0,...s,children:a.jsx(Pe.button,{"aria-describedby":i.open?i.contentId:void 0,"data-state":i.stateAttribute,...r,ref:l,onPointerMove:oe(e.onPointerMove,p=>{p.pointerType!=="touch"&&!h.current&&!o.isPointerInTransitRef.current&&(i.onTriggerEnter(),h.current=!0)}),onPointerLeave:oe(e.onPointerLeave,()=>{i.onTriggerLeave(),h.current=!1}),onPointerDown:oe(e.onPointerDown,()=>{i.open&&i.onClose(),u.current=!0,document.addEventListener("pointerup",d,{once:!0})}),onFocus:oe(e.onFocus,()=>{u.current||i.onOpen()}),onBlur:oe(e.onBlur,i.onClose),onClick:oe(e.onClick,i.onClose)})})});vy.displayName=Bl;var jT="TooltipPortal",[jN,RT]=As(jT,{forceMount:void 0}),oi="TooltipContent",by=g.forwardRef((e,t)=>{const n=RT(oi,e.__scopeTooltip),{forceMount:r=n.forceMount,side:i="top",...o}=e,s=Es(oi,e.__scopeTooltip);return a.jsx(So,{present:r||s.open,children:s.disableHoverableContent?a.jsx(wy,{side:i,...o,ref:t}):a.jsx(LT,{side:i,...o,ref:t})})}),LT=g.forwardRef((e,t)=>{const n=Es(oi,e.__scopeTooltip),r=ch(oi,e.__scopeTooltip),i=g.useRef(null),o=We(t,i),[s,c]=g.useState(null),{trigger:l,onClose:u}=n,h=i.current,{onPointerInTransitChange:d}=r,p=g.useCallback(()=>{c(null),d(!1)},[d]),v=g.useCallback((k,y)=>{const x=k.currentTarget,f={x:k.clientX,y:k.clientY},m=UT(f,x.getBoundingClientRect()),b=_T(f,m),w=FT(y.getBoundingClientRect()),T=VT([...b,...w]);c(T),d(!0)},[d]);return g.useEffect(()=>()=>p(),[p]),g.useEffect(()=>{if(l&&h){const k=x=>v(x,h),y=x=>v(x,l);return l.addEventListener("pointerleave",k),h.addEventListener("pointerleave",y),()=>{l.removeEventListener("pointerleave",k),h.removeEventListener("pointerleave",y)}}},[l,h,v,p]),g.useEffect(()=>{if(s){const k=y=>{const x=y.target,f={x:y.clientX,y:y.clientY},m=(l==null?void 0:l.contains(x))||(h==null?void 0:h.contains(x)),b=!BT(f,s);m?p():b&&(p(),u())};return document.addEventListener("pointermove",k),()=>document.removeEventListener("pointermove",k)}},[l,h,s,u,p]),a.jsx(wy,{...e,ref:o})}),[MT,DT]=As(po,{isInside:!1}),qT=Xx("TooltipContent"),wy=g.forwardRef((e,t)=>{const{__scopeTooltip:n,children:r,"aria-label":i,onEscapeKeyDown:o,onPointerDownOutside:s,...c}=e,l=Es(oi,n),u=Is(n),{onClose:h}=l;return g.useEffect(()=>(document.addEventListener(Fl,h),()=>document.removeEventListener(Fl,h)),[h]),g.useEffect(()=>{if(l.trigger){const d=p=>{const v=p.target;v!=null&&v.contains(l.trigger)&&h()};return window.addEventListener("scroll",d,{capture:!0}),()=>window.removeEventListener("scroll",d,{capture:!0})}},[l.trigger,h]),a.jsx(ws,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:o,onPointerDownOutside:s,onFocusOutside:d=>d.preventDefault(),onDismiss:h,children:a.jsxs(py,{"data-state":l.stateAttribute,...u,...c,ref:t,style:{...c.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[a.jsx(qT,{children:r}),a.jsx(MT,{scope:n,isInside:!0,children:a.jsx(xk,{id:l.contentId,role:"tooltip",children:i||r})})]})})});by.displayName=oi;var xy="TooltipArrow",OT=g.forwardRef((e,t)=>{const{__scopeTooltip:n,...r}=e,i=Is(n);return DT(xy,n).isInside?null:a.jsx(gy,{...i,...r,ref:t})});OT.displayName=xy;function UT(e,t){const n=Math.abs(t.top-e.y),r=Math.abs(t.bottom-e.y),i=Math.abs(t.right-e.x),o=Math.abs(t.left-e.x);switch(Math.min(n,r,i,o)){case o:return"left";case i:return"right";case n:return"top";case r:return"bottom";default:throw new Error("unreachable")}}function _T(e,t,n=5){const r=[];switch(t){case"top":r.push({x:e.x-n,y:e.y+n},{x:e.x+n,y:e.y+n});break;case"bottom":r.push({x:e.x-n,y:e.y-n},{x:e.x+n,y:e.y-n});break;case"left":r.push({x:e.x+n,y:e.y-n},{x:e.x+n,y:e.y+n});break;case"right":r.push({x:e.x-n,y:e.y-n},{x:e.x-n,y:e.y+n});break}return r}function FT(e){const{top:t,right:n,bottom:r,left:i}=e;return[{x:i,y:t},{x:n,y:t},{x:n,y:r},{x:i,y:r}]}function BT(e,t){const{x:n,y:r}=e;let i=!1;for(let o=0,s=t.length-1;o<t.length;s=o++){const c=t[o],l=t[s],u=c.x,h=c.y,d=l.x,p=l.y;h>r!=p>r&&n<(d-u)*(r-h)/(p-h)+u&&(i=!i)}return i}function VT(e){const t=e.slice();return t.sort((n,r)=>n.x<r.x?-1:n.x>r.x?1:n.y<r.y?-1:n.y>r.y?1:0),zT(t)}function zT(e){if(e.length<=1)return e.slice();const t=[];for(let r=0;r<e.length;r++){const i=e[r];for(;t.length>=2;){const o=t[t.length-1],s=t[t.length-2];if((o.x-s.x)*(i.y-s.y)>=(o.y-s.y)*(i.x-s.x))t.pop();else break}t.push(i)}t.pop();const n=[];for(let r=e.length-1;r>=0;r--){const i=e[r];for(;n.length>=2;){const o=n[n.length-1],s=n[n.length-2];if((o.x-s.x)*(i.y-s.y)>=(o.y-s.y)*(i.x-s.x))n.pop();else break}n.push(i)}return n.pop(),t.length===1&&n.length===1&&t[0].x===n[0].x&&t[0].y===n[0].y?t:t.concat(n)}var HT=fy,WT=yy,GT=vy,ky=by;const KT=HT,Ty=WT,Cy=GT,lh=g.forwardRef(({className:e,sideOffset:t=4,...n},r)=>a.jsx(ky,{ref:r,sideOffset:t,className:ut("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...n}));lh.displayName=ky.displayName;var js=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){return this.listeners.add(e),this.onSubscribe(),()=>{this.listeners.delete(e),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},Rs=typeof window>"u"||"Deno"in globalThis;function gt(){}function $T(e,t){return typeof e=="function"?e(t):e}function QT(e){return typeof e=="number"&&e>=0&&e!==1/0}function YT(e,t){return Math.max(e+(t||0)-Date.now(),0)}function Vl(e,t){return typeof e=="function"?e(t):e}function XT(e,t){return typeof e=="function"?e(t):e}function ip(e,t){const{type:n="all",exact:r,fetchStatus:i,predicate:o,queryKey:s,stale:c}=e;if(s){if(r){if(t.queryHash!==uh(s,t.options))return!1}else if(!mo(t.queryKey,s))return!1}if(n!=="all"){const l=t.isActive();if(n==="active"&&!l||n==="inactive"&&l)return!1}return!(typeof c=="boolean"&&t.isStale()!==c||i&&i!==t.state.fetchStatus||o&&!o(t))}function op(e,t){const{exact:n,status:r,predicate:i,mutationKey:o}=e;if(o){if(!t.options.mutationKey)return!1;if(n){if(go(t.options.mutationKey)!==go(o))return!1}else if(!mo(t.options.mutationKey,o))return!1}return!(r&&t.state.status!==r||i&&!i(t))}function uh(e,t){return((t==null?void 0:t.queryKeyHashFn)||go)(e)}function go(e){return JSON.stringify(e,(t,n)=>zl(n)?Object.keys(n).sort().reduce((r,i)=>(r[i]=n[i],r),{}):n)}function mo(e,t){return e===t?!0:typeof e!=typeof t?!1:e&&t&&typeof e=="object"&&typeof t=="object"?Object.keys(t).every(n=>mo(e[n],t[n])):!1}function Sy(e,t){if(e===t)return e;const n=ap(e)&&ap(t);if(n||zl(e)&&zl(t)){const r=n?e:Object.keys(e),i=r.length,o=n?t:Object.keys(t),s=o.length,c=n?[]:{},l=new Set(r);let u=0;for(let h=0;h<s;h++){const d=n?h:o[h];(!n&&l.has(d)||n)&&e[d]===void 0&&t[d]===void 0?(c[d]=void 0,u++):(c[d]=Sy(e[d],t[d]),c[d]===e[d]&&e[d]!==void 0&&u++)}return i===s&&u===i?e:c}return t}function ap(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function zl(e){if(!sp(e))return!1;const t=e.constructor;if(t===void 0)return!0;const n=t.prototype;return!(!sp(n)||!n.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(e)!==Object.prototype)}function sp(e){return Object.prototype.toString.call(e)==="[object Object]"}function JT(e){return new Promise(t=>{setTimeout(t,e)})}function ZT(e,t,n){return typeof n.structuralSharing=="function"?n.structuralSharing(e,t):n.structuralSharing!==!1?Sy(e,t):t}function eC(e,t,n=0){const r=[...e,t];return n&&r.length>n?r.slice(1):r}function tC(e,t,n=0){const r=[t,...e];return n&&r.length>n?r.slice(0,-1):r}var hh=Symbol();function Py(e,t){return!e.queryFn&&(t!=null&&t.initialPromise)?()=>t.initialPromise:!e.queryFn||e.queryFn===hh?()=>Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)):e.queryFn}var Xn,gn,zr,Lp,nC=(Lp=class extends js{constructor(){super();Y(this,Xn);Y(this,gn);Y(this,zr);B(this,zr,t=>{if(!Rs&&window.addEventListener){const n=()=>t();return window.addEventListener("visibilitychange",n,!1),()=>{window.removeEventListener("visibilitychange",n)}}})}onSubscribe(){I(this,gn)||this.setEventListener(I(this,zr))}onUnsubscribe(){var t;this.hasListeners()||((t=I(this,gn))==null||t.call(this),B(this,gn,void 0))}setEventListener(t){var n;B(this,zr,t),(n=I(this,gn))==null||n.call(this),B(this,gn,t(r=>{typeof r=="boolean"?this.setFocused(r):this.onFocus()}))}setFocused(t){I(this,Xn)!==t&&(B(this,Xn,t),this.onFocus())}onFocus(){const t=this.isFocused();this.listeners.forEach(n=>{n(t)})}isFocused(){var t;return typeof I(this,Xn)=="boolean"?I(this,Xn):((t=globalThis.document)==null?void 0:t.visibilityState)!=="hidden"}},Xn=new WeakMap,gn=new WeakMap,zr=new WeakMap,Lp),Ny=new nC,Hr,mn,Wr,Mp,rC=(Mp=class extends js{constructor(){super();Y(this,Hr,!0);Y(this,mn);Y(this,Wr);B(this,Wr,t=>{if(!Rs&&window.addEventListener){const n=()=>t(!0),r=()=>t(!1);return window.addEventListener("online",n,!1),window.addEventListener("offline",r,!1),()=>{window.removeEventListener("online",n),window.removeEventListener("offline",r)}}})}onSubscribe(){I(this,mn)||this.setEventListener(I(this,Wr))}onUnsubscribe(){var t;this.hasListeners()||((t=I(this,mn))==null||t.call(this),B(this,mn,void 0))}setEventListener(t){var n;B(this,Wr,t),(n=I(this,mn))==null||n.call(this),B(this,mn,t(this.setOnline.bind(this)))}setOnline(t){I(this,Hr)!==t&&(B(this,Hr,t),this.listeners.forEach(r=>{r(t)}))}isOnline(){return I(this,Hr)}},Hr=new WeakMap,mn=new WeakMap,Wr=new WeakMap,Mp),ns=new rC;function iC(){let e,t;const n=new Promise((i,o)=>{e=i,t=o});n.status="pending",n.catch(()=>{});function r(i){Object.assign(n,i),delete n.resolve,delete n.reject}return n.resolve=i=>{r({status:"fulfilled",value:i}),e(i)},n.reject=i=>{r({status:"rejected",reason:i}),t(i)},n}function oC(e){return Math.min(1e3*2**e,3e4)}function Ay(e){return(e??"online")==="online"?ns.isOnline():!0}var Iy=class extends Error{constructor(e){super("CancelledError"),this.revert=e==null?void 0:e.revert,this.silent=e==null?void 0:e.silent}};function wc(e){return e instanceof Iy}function Ey(e){let t=!1,n=0,r=!1,i;const o=iC(),s=y=>{var x;r||(p(new Iy(y)),(x=e.abort)==null||x.call(e))},c=()=>{t=!0},l=()=>{t=!1},u=()=>Ny.isFocused()&&(e.networkMode==="always"||ns.isOnline())&&e.canRun(),h=()=>Ay(e.networkMode)&&e.canRun(),d=y=>{var x;r||(r=!0,(x=e.onSuccess)==null||x.call(e,y),i==null||i(),o.resolve(y))},p=y=>{var x;r||(r=!0,(x=e.onError)==null||x.call(e,y),i==null||i(),o.reject(y))},v=()=>new Promise(y=>{var x;i=f=>{(r||u())&&y(f)},(x=e.onPause)==null||x.call(e)}).then(()=>{var y;i=void 0,r||(y=e.onContinue)==null||y.call(e)}),k=()=>{if(r)return;let y;const x=n===0?e.initialPromise:void 0;try{y=x??e.fn()}catch(f){y=Promise.reject(f)}Promise.resolve(y).then(d).catch(f=>{var S;if(r)return;const m=e.retry??(Rs?0:3),b=e.retryDelay??oC,w=typeof b=="function"?b(n,f):b,T=m===!0||typeof m=="number"&&n<m||typeof m=="function"&&m(n,f);if(t||!T){p(f);return}n++,(S=e.onFail)==null||S.call(e,n,f),JT(w).then(()=>u()?void 0:v()).then(()=>{t?p(f):k()})})};return{promise:o,cancel:s,continue:()=>(i==null||i(),o),cancelRetry:c,continueRetry:l,canStart:h,start:()=>(h()?k():v().then(k),o)}}var aC=e=>setTimeout(e,0);function sC(){let e=[],t=0,n=c=>{c()},r=c=>{c()},i=aC;const o=c=>{t?e.push(c):i(()=>{n(c)})},s=()=>{const c=e;e=[],c.length&&i(()=>{r(()=>{c.forEach(l=>{n(l)})})})};return{batch:c=>{let l;t++;try{l=c()}finally{t--,t||s()}return l},batchCalls:c=>(...l)=>{o(()=>{c(...l)})},schedule:o,setNotifyFunction:c=>{n=c},setBatchNotifyFunction:c=>{r=c},setScheduler:c=>{i=c}}}var Oe=sC(),Jn,Dp,jy=(Dp=class{constructor(){Y(this,Jn)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),QT(this.gcTime)&&B(this,Jn,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(e){this.gcTime=Math.max(this.gcTime||0,e??(Rs?1/0:5*60*1e3))}clearGcTimeout(){I(this,Jn)&&(clearTimeout(I(this,Jn)),B(this,Jn,void 0))}},Jn=new WeakMap,Dp),Gr,Zn,nt,er,je,fo,tr,mt,Bt,qp,cC=(qp=class extends jy{constructor(t){super();Y(this,mt);Y(this,Gr);Y(this,Zn);Y(this,nt);Y(this,er);Y(this,je);Y(this,fo);Y(this,tr);B(this,tr,!1),B(this,fo,t.defaultOptions),this.setOptions(t.options),this.observers=[],B(this,er,t.client),B(this,nt,I(this,er).getQueryCache()),this.queryKey=t.queryKey,this.queryHash=t.queryHash,B(this,Gr,uC(this.options)),this.state=t.state??I(this,Gr),this.scheduleGc()}get meta(){return this.options.meta}get promise(){var t;return(t=I(this,je))==null?void 0:t.promise}setOptions(t){this.options={...I(this,fo),...t},this.updateGcTime(this.options.gcTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&I(this,nt).remove(this)}setData(t,n){const r=ZT(this.state.data,t,this.options);return Ae(this,mt,Bt).call(this,{data:r,type:"success",dataUpdatedAt:n==null?void 0:n.updatedAt,manual:n==null?void 0:n.manual}),r}setState(t,n){Ae(this,mt,Bt).call(this,{type:"setState",state:t,setStateOptions:n})}cancel(t){var r,i;const n=(r=I(this,je))==null?void 0:r.promise;return(i=I(this,je))==null||i.cancel(t),n?n.then(gt).catch(gt):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(I(this,Gr))}isActive(){return this.observers.some(t=>XT(t.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===hh||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStatic(){return this.getObserversCount()>0?this.observers.some(t=>Vl(t.options.staleTime,this)==="static"):!1}isStale(){return this.getObserversCount()>0?this.observers.some(t=>t.getCurrentResult().isStale):this.state.data===void 0||this.state.isInvalidated}isStaleByTime(t=0){return this.state.data===void 0?!0:t==="static"?!1:this.state.isInvalidated?!0:!YT(this.state.dataUpdatedAt,t)}onFocus(){var n;const t=this.observers.find(r=>r.shouldFetchOnWindowFocus());t==null||t.refetch({cancelRefetch:!1}),(n=I(this,je))==null||n.continue()}onOnline(){var n;const t=this.observers.find(r=>r.shouldFetchOnReconnect());t==null||t.refetch({cancelRefetch:!1}),(n=I(this,je))==null||n.continue()}addObserver(t){this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),I(this,nt).notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){this.observers.includes(t)&&(this.observers=this.observers.filter(n=>n!==t),this.observers.length||(I(this,je)&&(I(this,tr)?I(this,je).cancel({revert:!0}):I(this,je).cancelRetry()),this.scheduleGc()),I(this,nt).notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||Ae(this,mt,Bt).call(this,{type:"invalidate"})}fetch(t,n){var u,h,d;if(this.state.fetchStatus!=="idle"){if(this.state.data!==void 0&&(n!=null&&n.cancelRefetch))this.cancel({silent:!0});else if(I(this,je))return I(this,je).continueRetry(),I(this,je).promise}if(t&&this.setOptions(t),!this.options.queryFn){const p=this.observers.find(v=>v.options.queryFn);p&&this.setOptions(p.options)}const r=new AbortController,i=p=>{Object.defineProperty(p,"signal",{enumerable:!0,get:()=>(B(this,tr,!0),r.signal)})},o=()=>{const p=Py(this.options,n),k=(()=>{const y={client:I(this,er),queryKey:this.queryKey,meta:this.meta};return i(y),y})();return B(this,tr,!1),this.options.persister?this.options.persister(p,k,this):p(k)},c=(()=>{const p={fetchOptions:n,options:this.options,queryKey:this.queryKey,client:I(this,er),state:this.state,fetchFn:o};return i(p),p})();(u=this.options.behavior)==null||u.onFetch(c,this),B(this,Zn,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((h=c.fetchOptions)==null?void 0:h.meta))&&Ae(this,mt,Bt).call(this,{type:"fetch",meta:(d=c.fetchOptions)==null?void 0:d.meta});const l=p=>{var v,k,y,x;wc(p)&&p.silent||Ae(this,mt,Bt).call(this,{type:"error",error:p}),wc(p)||((k=(v=I(this,nt).config).onError)==null||k.call(v,p,this),(x=(y=I(this,nt).config).onSettled)==null||x.call(y,this.state.data,p,this)),this.scheduleGc()};return B(this,je,Ey({initialPromise:n==null?void 0:n.initialPromise,fn:c.fetchFn,abort:r.abort.bind(r),onSuccess:p=>{var v,k,y,x;if(p===void 0){l(new Error(`${this.queryHash} data is undefined`));return}try{this.setData(p)}catch(f){l(f);return}(k=(v=I(this,nt).config).onSuccess)==null||k.call(v,p,this),(x=(y=I(this,nt).config).onSettled)==null||x.call(y,p,this.state.error,this),this.scheduleGc()},onError:l,onFail:(p,v)=>{Ae(this,mt,Bt).call(this,{type:"failed",failureCount:p,error:v})},onPause:()=>{Ae(this,mt,Bt).call(this,{type:"pause"})},onContinue:()=>{Ae(this,mt,Bt).call(this,{type:"continue"})},retry:c.options.retry,retryDelay:c.options.retryDelay,networkMode:c.options.networkMode,canRun:()=>!0})),I(this,je).start()}},Gr=new WeakMap,Zn=new WeakMap,nt=new WeakMap,er=new WeakMap,je=new WeakMap,fo=new WeakMap,tr=new WeakMap,mt=new WeakSet,Bt=function(t){const n=r=>{switch(t.type){case"failed":return{...r,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...r,fetchStatus:"paused"};case"continue":return{...r,fetchStatus:"fetching"};case"fetch":return{...r,...lC(r.data,this.options),fetchMeta:t.meta??null};case"success":return B(this,Zn,void 0),{...r,data:t.data,dataUpdateCount:r.dataUpdateCount+1,dataUpdatedAt:t.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const i=t.error;return wc(i)&&i.revert&&I(this,Zn)?{...I(this,Zn),fetchStatus:"idle"}:{...r,error:i,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,fetchFailureReason:i,fetchStatus:"idle",status:"error"};case"invalidate":return{...r,isInvalidated:!0};case"setState":return{...r,...t.state}}};this.state=n(this.state),Oe.batch(()=>{this.observers.forEach(r=>{r.onQueryUpdate()}),I(this,nt).notify({query:this,type:"updated",action:t})})},qp);function lC(e,t){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:Ay(t.networkMode)?"fetching":"paused",...e===void 0&&{error:null,status:"pending"}}}function uC(e){const t=typeof e.initialData=="function"?e.initialData():e.initialData,n=t!==void 0,r=n?typeof e.initialDataUpdatedAt=="function"?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:n?r??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"pending",fetchStatus:"idle"}}var Nt,Op,hC=(Op=class extends js{constructor(t={}){super();Y(this,Nt);this.config=t,B(this,Nt,new Map)}build(t,n,r){const i=n.queryKey,o=n.queryHash??uh(i,n);let s=this.get(o);return s||(s=new cC({client:t,queryKey:i,queryHash:o,options:t.defaultQueryOptions(n),state:r,defaultOptions:t.getQueryDefaults(i)}),this.add(s)),s}add(t){I(this,Nt).has(t.queryHash)||(I(this,Nt).set(t.queryHash,t),this.notify({type:"added",query:t}))}remove(t){const n=I(this,Nt).get(t.queryHash);n&&(t.destroy(),n===t&&I(this,Nt).delete(t.queryHash),this.notify({type:"removed",query:t}))}clear(){Oe.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}get(t){return I(this,Nt).get(t)}getAll(){return[...I(this,Nt).values()]}find(t){const n={exact:!0,...t};return this.getAll().find(r=>ip(n,r))}findAll(t={}){const n=this.getAll();return Object.keys(t).length>0?n.filter(r=>ip(t,r)):n}notify(t){Oe.batch(()=>{this.listeners.forEach(n=>{n(t)})})}onFocus(){Oe.batch(()=>{this.getAll().forEach(t=>{t.onFocus()})})}onOnline(){Oe.batch(()=>{this.getAll().forEach(t=>{t.onOnline()})})}},Nt=new WeakMap,Op),At,De,nr,It,cn,Up,dC=(Up=class extends jy{constructor(t){super();Y(this,It);Y(this,At);Y(this,De);Y(this,nr);this.mutationId=t.mutationId,B(this,De,t.mutationCache),B(this,At,[]),this.state=t.state||pC(),this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options=t,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){I(this,At).includes(t)||(I(this,At).push(t),this.clearGcTimeout(),I(this,De).notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){B(this,At,I(this,At).filter(n=>n!==t)),this.scheduleGc(),I(this,De).notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){I(this,At).length||(this.state.status==="pending"?this.scheduleGc():I(this,De).remove(this))}continue(){var t;return((t=I(this,nr))==null?void 0:t.continue())??this.execute(this.state.variables)}async execute(t){var o,s,c,l,u,h,d,p,v,k,y,x,f,m,b,w,T,S,P,C;const n=()=>{Ae(this,It,cn).call(this,{type:"continue"})};B(this,nr,Ey({fn:()=>this.options.mutationFn?this.options.mutationFn(t):Promise.reject(new Error("No mutationFn found")),onFail:(A,E)=>{Ae(this,It,cn).call(this,{type:"failed",failureCount:A,error:E})},onPause:()=>{Ae(this,It,cn).call(this,{type:"pause"})},onContinue:n,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>I(this,De).canRun(this)}));const r=this.state.status==="pending",i=!I(this,nr).canStart();try{if(r)n();else{Ae(this,It,cn).call(this,{type:"pending",variables:t,isPaused:i}),await((s=(o=I(this,De).config).onMutate)==null?void 0:s.call(o,t,this));const E=await((l=(c=this.options).onMutate)==null?void 0:l.call(c,t));E!==this.state.context&&Ae(this,It,cn).call(this,{type:"pending",context:E,variables:t,isPaused:i})}const A=await I(this,nr).start();return await((h=(u=I(this,De).config).onSuccess)==null?void 0:h.call(u,A,t,this.state.context,this)),await((p=(d=this.options).onSuccess)==null?void 0:p.call(d,A,t,this.state.context)),await((k=(v=I(this,De).config).onSettled)==null?void 0:k.call(v,A,null,this.state.variables,this.state.context,this)),await((x=(y=this.options).onSettled)==null?void 0:x.call(y,A,null,t,this.state.context)),Ae(this,It,cn).call(this,{type:"success",data:A}),A}catch(A){try{throw await((m=(f=I(this,De).config).onError)==null?void 0:m.call(f,A,t,this.state.context,this)),await((w=(b=this.options).onError)==null?void 0:w.call(b,A,t,this.state.context)),await((S=(T=I(this,De).config).onSettled)==null?void 0:S.call(T,void 0,A,this.state.variables,this.state.context,this)),await((C=(P=this.options).onSettled)==null?void 0:C.call(P,void 0,A,t,this.state.context)),A}finally{Ae(this,It,cn).call(this,{type:"error",error:A})}}finally{I(this,De).runNext(this)}}},At=new WeakMap,De=new WeakMap,nr=new WeakMap,It=new WeakSet,cn=function(t){const n=r=>{switch(t.type){case"failed":return{...r,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...r,isPaused:!0};case"continue":return{...r,isPaused:!1};case"pending":return{...r,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:t.isPaused,status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...r,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...r,data:void 0,error:t.error,failureCount:r.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}};this.state=n(this.state),Oe.batch(()=>{I(this,At).forEach(r=>{r.onMutationUpdate(t)}),I(this,De).notify({mutation:this,type:"updated",action:t})})},Up);function pC(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var Ht,ft,yo,_p,gC=(_p=class extends js{constructor(t={}){super();Y(this,Ht);Y(this,ft);Y(this,yo);this.config=t,B(this,Ht,new Set),B(this,ft,new Map),B(this,yo,0)}build(t,n,r){const i=new dC({mutationCache:this,mutationId:++jo(this,yo)._,options:t.defaultMutationOptions(n),state:r});return this.add(i),i}add(t){I(this,Ht).add(t);const n=Xo(t);if(typeof n=="string"){const r=I(this,ft).get(n);r?r.push(t):I(this,ft).set(n,[t])}this.notify({type:"added",mutation:t})}remove(t){if(I(this,Ht).delete(t)){const n=Xo(t);if(typeof n=="string"){const r=I(this,ft).get(n);if(r)if(r.length>1){const i=r.indexOf(t);i!==-1&&r.splice(i,1)}else r[0]===t&&I(this,ft).delete(n)}}this.notify({type:"removed",mutation:t})}canRun(t){const n=Xo(t);if(typeof n=="string"){const r=I(this,ft).get(n),i=r==null?void 0:r.find(o=>o.state.status==="pending");return!i||i===t}else return!0}runNext(t){var r;const n=Xo(t);if(typeof n=="string"){const i=(r=I(this,ft).get(n))==null?void 0:r.find(o=>o!==t&&o.state.isPaused);return(i==null?void 0:i.continue())??Promise.resolve()}else return Promise.resolve()}clear(){Oe.batch(()=>{I(this,Ht).forEach(t=>{this.notify({type:"removed",mutation:t})}),I(this,Ht).clear(),I(this,ft).clear()})}getAll(){return Array.from(I(this,Ht))}find(t){const n={exact:!0,...t};return this.getAll().find(r=>op(n,r))}findAll(t={}){return this.getAll().filter(n=>op(t,n))}notify(t){Oe.batch(()=>{this.listeners.forEach(n=>{n(t)})})}resumePausedMutations(){const t=this.getAll().filter(n=>n.state.isPaused);return Oe.batch(()=>Promise.all(t.map(n=>n.continue().catch(gt))))}},Ht=new WeakMap,ft=new WeakMap,yo=new WeakMap,_p);function Xo(e){var t;return(t=e.options.scope)==null?void 0:t.id}function cp(e){return{onFetch:(t,n)=>{var h,d,p,v,k;const r=t.options,i=(p=(d=(h=t.fetchOptions)==null?void 0:h.meta)==null?void 0:d.fetchMore)==null?void 0:p.direction,o=((v=t.state.data)==null?void 0:v.pages)||[],s=((k=t.state.data)==null?void 0:k.pageParams)||[];let c={pages:[],pageParams:[]},l=0;const u=async()=>{let y=!1;const x=b=>{Object.defineProperty(b,"signal",{enumerable:!0,get:()=>(t.signal.aborted?y=!0:t.signal.addEventListener("abort",()=>{y=!0}),t.signal)})},f=Py(t.options,t.fetchOptions),m=async(b,w,T)=>{if(y)return Promise.reject();if(w==null&&b.pages.length)return Promise.resolve(b);const P=(()=>{const q={client:t.client,queryKey:t.queryKey,pageParam:w,direction:T?"backward":"forward",meta:t.options.meta};return x(q),q})(),C=await f(P),{maxPages:A}=t.options,E=T?tC:eC;return{pages:E(b.pages,C,A),pageParams:E(b.pageParams,w,A)}};if(i&&o.length){const b=i==="backward",w=b?mC:lp,T={pages:o,pageParams:s},S=w(r,T);c=await m(T,S,b)}else{const b=e??o.length;do{const w=l===0?s[0]??r.initialPageParam:lp(r,c);if(l>0&&w==null)break;c=await m(c,w),l++}while(l<b)}return c};t.options.persister?t.fetchFn=()=>{var y,x;return(x=(y=t.options).persister)==null?void 0:x.call(y,u,{client:t.client,queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},n)}:t.fetchFn=u}}}function lp(e,{pages:t,pageParams:n}){const r=t.length-1;return t.length>0?e.getNextPageParam(t[r],t,n[r],n):void 0}function mC(e,{pages:t,pageParams:n}){var r;return t.length>0?(r=e.getPreviousPageParam)==null?void 0:r.call(e,t[0],t,n[0],n):void 0}var ue,fn,yn,Kr,$r,vn,Qr,Yr,Fp,fC=(Fp=class{constructor(e={}){Y(this,ue);Y(this,fn);Y(this,yn);Y(this,Kr);Y(this,$r);Y(this,vn);Y(this,Qr);Y(this,Yr);B(this,ue,e.queryCache||new hC),B(this,fn,e.mutationCache||new gC),B(this,yn,e.defaultOptions||{}),B(this,Kr,new Map),B(this,$r,new Map),B(this,vn,0)}mount(){jo(this,vn)._++,I(this,vn)===1&&(B(this,Qr,Ny.subscribe(async e=>{e&&(await this.resumePausedMutations(),I(this,ue).onFocus())})),B(this,Yr,ns.subscribe(async e=>{e&&(await this.resumePausedMutations(),I(this,ue).onOnline())})))}unmount(){var e,t;jo(this,vn)._--,I(this,vn)===0&&((e=I(this,Qr))==null||e.call(this),B(this,Qr,void 0),(t=I(this,Yr))==null||t.call(this),B(this,Yr,void 0))}isFetching(e){return I(this,ue).findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return I(this,fn).findAll({...e,status:"pending"}).length}getQueryData(e){var n;const t=this.defaultQueryOptions({queryKey:e});return(n=I(this,ue).get(t.queryHash))==null?void 0:n.state.data}ensureQueryData(e){const t=this.defaultQueryOptions(e),n=I(this,ue).build(this,t),r=n.state.data;return r===void 0?this.fetchQuery(e):(e.revalidateIfStale&&n.isStaleByTime(Vl(t.staleTime,n))&&this.prefetchQuery(t),Promise.resolve(r))}getQueriesData(e){return I(this,ue).findAll(e).map(({queryKey:t,state:n})=>{const r=n.data;return[t,r]})}setQueryData(e,t,n){const r=this.defaultQueryOptions({queryKey:e}),i=I(this,ue).get(r.queryHash),o=i==null?void 0:i.state.data,s=$T(t,o);if(s!==void 0)return I(this,ue).build(this,r).setData(s,{...n,manual:!0})}setQueriesData(e,t,n){return Oe.batch(()=>I(this,ue).findAll(e).map(({queryKey:r})=>[r,this.setQueryData(r,t,n)]))}getQueryState(e){var n;const t=this.defaultQueryOptions({queryKey:e});return(n=I(this,ue).get(t.queryHash))==null?void 0:n.state}removeQueries(e){const t=I(this,ue);Oe.batch(()=>{t.findAll(e).forEach(n=>{t.remove(n)})})}resetQueries(e,t){const n=I(this,ue);return Oe.batch(()=>(n.findAll(e).forEach(r=>{r.reset()}),this.refetchQueries({type:"active",...e},t)))}cancelQueries(e,t={}){const n={revert:!0,...t},r=Oe.batch(()=>I(this,ue).findAll(e).map(i=>i.cancel(n)));return Promise.all(r).then(gt).catch(gt)}invalidateQueries(e,t={}){return Oe.batch(()=>(I(this,ue).findAll(e).forEach(n=>{n.invalidate()}),(e==null?void 0:e.refetchType)==="none"?Promise.resolve():this.refetchQueries({...e,type:(e==null?void 0:e.refetchType)??(e==null?void 0:e.type)??"active"},t)))}refetchQueries(e,t={}){const n={...t,cancelRefetch:t.cancelRefetch??!0},r=Oe.batch(()=>I(this,ue).findAll(e).filter(i=>!i.isDisabled()&&!i.isStatic()).map(i=>{let o=i.fetch(void 0,n);return n.throwOnError||(o=o.catch(gt)),i.state.fetchStatus==="paused"?Promise.resolve():o}));return Promise.all(r).then(gt)}fetchQuery(e){const t=this.defaultQueryOptions(e);t.retry===void 0&&(t.retry=!1);const n=I(this,ue).build(this,t);return n.isStaleByTime(Vl(t.staleTime,n))?n.fetch(t):Promise.resolve(n.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(gt).catch(gt)}fetchInfiniteQuery(e){return e.behavior=cp(e.pages),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(gt).catch(gt)}ensureInfiniteQueryData(e){return e.behavior=cp(e.pages),this.ensureQueryData(e)}resumePausedMutations(){return ns.isOnline()?I(this,fn).resumePausedMutations():Promise.resolve()}getQueryCache(){return I(this,ue)}getMutationCache(){return I(this,fn)}getDefaultOptions(){return I(this,yn)}setDefaultOptions(e){B(this,yn,e)}setQueryDefaults(e,t){I(this,Kr).set(go(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){const t=[...I(this,Kr).values()],n={};return t.forEach(r=>{mo(e,r.queryKey)&&Object.assign(n,r.defaultOptions)}),n}setMutationDefaults(e,t){I(this,$r).set(go(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){const t=[...I(this,$r).values()],n={};return t.forEach(r=>{mo(e,r.mutationKey)&&Object.assign(n,r.defaultOptions)}),n}defaultQueryOptions(e){if(e._defaulted)return e;const t={...I(this,yn).queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return t.queryHash||(t.queryHash=uh(t.queryKey,t)),t.refetchOnReconnect===void 0&&(t.refetchOnReconnect=t.networkMode!=="always"),t.throwOnError===void 0&&(t.throwOnError=!!t.suspense),!t.networkMode&&t.persister&&(t.networkMode="offlineFirst"),t.queryFn===hh&&(t.enabled=!1),t}defaultMutationOptions(e){return e!=null&&e._defaulted?e:{...I(this,yn).mutations,...(e==null?void 0:e.mutationKey)&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){I(this,ue).clear(),I(this,fn).clear()}},ue=new WeakMap,fn=new WeakMap,yn=new WeakMap,Kr=new WeakMap,$r=new WeakMap,vn=new WeakMap,Qr=new WeakMap,Yr=new WeakMap,Fp),yC=g.createContext(void 0),vC=({client:e,children:t})=>(g.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]),a.jsx(yC.Provider,{value:e,children:t}));const up="haiit-preferred-effect",bC=["none","christmas","tet","parallax"],wC=7,xC=e=>e!==null&&bC.includes(e),ye=e=>Math.floor(e),Ry=e=>{var n,r,i;const t=new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Ho_Chi_Minh",year:"numeric",month:"numeric",day:"numeric"}).formatToParts(e);return{year:Number(((n=t.find(o=>o.type==="year"))==null?void 0:n.value)??0),month:Number(((r=t.find(o=>o.type==="month"))==null?void 0:r.value)??0),day:Number(((i=t.find(o=>o.type==="day"))==null?void 0:i.value)??0)}},Ly=(e,t,n)=>{const r=ye((14-t)/12),i=n+4800-r,o=t+12*r-3;return n>1582||n===1582&&(t>10||t===10&&e>=15)?e+ye((153*o+2)/5)+365*i+ye(i/4)-ye(i/100)+ye(i/400)-32045:e+ye((153*o+2)/5)+365*i+ye(i/4)-32083},ai=e=>{const t=e/1236.85,n=t*t,r=n*t,i=r*t,o=Math.PI/180;let s=241502075933e-5+29.53058868*e+1178e-7*n-155e-9*r;s+=33e-5*Math.sin((166.56+132.87*t-.009173*n)*o);const c=359.2242+29.10535608*e-333e-7*n-347e-8*r,l=306.0253+385.81691806*e+.0107306*n+1236e-8*r-58e-9*i,u=21.2964+390.67050646*e-.0016528*n-239e-8*r+2e-8*i,h=(.1734-393e-6*t)*Math.sin(c*o)+.0021*Math.sin(2*o*c)-.4068*Math.sin(l*o)+.0161*Math.sin(2*o*l)-4e-4*Math.sin(3*o*l)+.0104*Math.sin(2*o*u)-.0051*Math.sin((c+l)*o)-.0074*Math.sin((c-l)*o)+4e-4*Math.sin((2*u+c)*o)-4e-4*Math.sin((2*u-c)*o)-6e-4*Math.sin((2*u+l)*o)+.001*Math.sin((2*u-l)*o)+5e-4*Math.sin((2*l+c)*o);let d;return t<-11?d=.001+839e-6*t+2261e-7*n-845e-8*r-81e-9*i:d=-278e-6+265e-6*t+262e-6*n,s+h-d},Hl=(e,t)=>{const n=(e-24515455e-1-t/24)/36525,r=n*n,i=Math.PI/180,o=357.5291+35999.0503*n-1559e-7*r-48e-8*r*n,s=280.46645+36000.76983*n+3032e-7*r,c=(1.9146-.004817*n-14e-6*r)*Math.sin(i*o)+(.019993-101e-6*n)*Math.sin(2*i*o)+29e-5*Math.sin(3*i*o),l=(s+c)*i;return ye((l-2*Math.PI*ye(l/(2*Math.PI)))/Math.PI*6)},xc=(e,t)=>{const n=Ly(31,12,e)-2415021,r=ye(n/29.530588853);let i=ai(r);return Hl(ye(i+.5+t/24),t)>=9&&(i=ai(r-1)),ye(i+.5+t/24)},kC=(e,t)=>{const n=ye(.5+(e-2415021076998695e-9)/29.530588853);let r=0,i=1,o=Hl(ye(ai(n+i)+.5+t/24),t);do r=o,i+=1,o=Hl(ye(ai(n+i)+.5+t/24),t);while(o!==r&&i<14);return i-1},TC=(e,t,n,r)=>{const i=Ly(e,t,n),o=ye((i-2415021076998695e-9)/29.530588853);let s=ye(ai(o+1)+.5+r/24);s>i&&(s=ye(ai(o)+.5+r/24));let c=xc(n,r),l=c,u;c>=s?(u=n,c=xc(n-1,r)):(u=n+1,l=xc(n+1,r));const h=i-s+1,d=ye((s-c)/29);let p=0,v=d+11;if(l-c>365){const k=kC(c,r);d>=k&&(v=d+10,d===k&&(p=1))}return v>12&&(v-=12),v>=11&&d<4&&(u-=1),{day:h,month:v,year:u,leap:p}},CC=e=>{const{day:t,month:n,year:r}=Ry(e);return TC(t,n,r,wC)},SC=e=>{const t=Ry(e);if(t.month===12&&t.day>=24&&t.day<=26)return"christmas";if(t.day===t.month)return"parallax";const n=CC(e);return n.month===1&&n.day>=1&&n.day<=5||n.month===12&&n.day>=29&&n.day<=30?"tet":"none"},My=g.createContext(void 0),PC=({children:e})=>{const[t,n]=g.useState(()=>{const i=localStorage.getItem(up);return xC(i)?i:SC(new Date)}),r=i=>{n(i),localStorage.setItem(up,i)};return a.jsx(My.Provider,{value:{currentEffect:t,setCurrentEffect:r},children:e})},Dy=()=>{const e=g.useContext(My);if(!e)throw new Error("useEffects must be used within an EffectsProvider");return e},NC=Yu("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),X=g.forwardRef(({className:e,variant:t,size:n,asChild:r=!1,...i},o)=>{const s=r?Qx:"button";return a.jsx(s,{className:ut(NC({variant:t,size:n,className:e})),ref:o,...i})});X.displayName="Button";const AC={"nav.home":{vi:"Trang chủ",en:"Index"},"nav.projects":{vi:"Dự án",en:"Work"},"nav.blog":{vi:"Bài viết",en:"Notes"},"nav.about":{vi:"Hồ sơ",en:"Profile"},"nav.connect":{vi:"Sẵn sàng kết nối",en:"Available to connect"},"nav.theme":{vi:"Giao diện",en:"Theme"},"nav.language":{vi:"Ngôn ngữ",en:"Language"},"hero.log":{vi:"Portfolio / Nhật ký học tập",en:"Portfolio / Learning log"},"hero.open":{vi:"Sẵn sàng cho cơ hội phù hợp",en:"Open to meaningful work"},"hero.hello":{vi:"Xin chào, tôi là",en:"Hello, I am"},"hero.line1":{vi:"Chế tác mã nguồn",en:"Crafting code"},"hero.line2":{vi:"& đúc kết những",en:"& distilling field"},"hero.line3":{vi:"trải nghiệm thực tế.",en:"experiences."},"hero.bio":{vi:"một Information Systems Developer tập trung vào backend, database và những sản phẩm có giá trị sử dụng thực tế.",en:"an Information Systems Developer focused on backend, databases, and products with practical value."},"hero.work":{vi:"Khám phá dự án",en:"Explore selected work"},"hero.notes":{vi:"Đọc bài viết",en:"Read my notes"},"hero.repositories":{vi:"kho mã nguồn",en:"repositories"},"hero.languages":{vi:"ngôn ngữ",en:"languages"},"hero.journal":{vi:"nhật ký công khai",en:"public journal"},"hero.portrait":{vi:"Chân dung",en:"Portrait"},"home.work.eyebrow":{vi:"01 / Dự án chọn lọc",en:"01 / Selected work"},"home.work.title1":{vi:"Dự án có lý do",en:"Projects with a reason"},"home.work.title2":{vi:"để tồn tại.",en:"to exist."},"home.work.desc":{vi:"Mỗi dự án là một bài thực hành có chủ đích: dữ liệu, thuật toán, kiến trúc hoặc trải nghiệm người dùng.",en:"Each project is a deliberate exercise in data, algorithms, architecture, or user experience."},"home.work.archive":{vi:"Xem kho dự án",en:"View project archive"},"home.work.case":{vi:"Nghiên cứu",en:"Case study"},"home.work.tools":{vi:"Công cụ & bối cảnh",en:"Tools & context"},"home.notes.eyebrow":{vi:"02 / Ghi chép thực tế",en:"02 / Field notes"},"home.notes.title1":{vi:"Học tập công khai.",en:"Learn in public."},"home.notes.title2":{vi:"Giữ lại điều hữu ích.",en:"Keep the useful parts."},"home.notes.all":{vi:"Mở tất cả bài viết",en:"Open all notes"},"home.notes.read":{vi:"Đọc bài",en:"Read note"},"home.map.eyebrow":{vi:"03 / Bản đồ kiến thức",en:"03 / Knowledge map"},"home.map.title1":{vi:"Những điều tôi đang",en:"What I am"},"home.map.title2":{vi:"khám phá.",en:"mapping out."},"home.map.desc":{vi:"Không chỉ là danh mục. Đây là bản đồ những vùng kiến thức tôi đang học, thử nghiệm và kết nối lại với nhau.",en:"More than categories: a map of the knowledge areas I am learning, testing, and connecting."},"home.principle":{vi:"Nguyên tắc cá nhân",en:"Personal principle"},"home.quote":{vi:"“Tôi không cố tỏ ra biết mọi thứ. Tôi xây, ghi chép và biến những điều đã hiểu thành thứ hữu ích cho người tiếp theo.”",en:"“I do not pretend to know everything. I build, document, and turn what I understand into something useful for the next person.”"},"footer.eyebrow":{vi:"Cuối trang / đầu cuộc trò chuyện",en:"End of page / start of conversation"},"footer.title":{vi:"Tôi xây sản phẩm để hiểu hệ thống, rồi viết lại để hiểu sâu hơn.",en:"I build products to understand systems, then write to understand them deeper."},"footer.navigate":{vi:"Điều hướng",en:"Navigate"},"footer.connect":{vi:"Kết nối",en:"Connect"},"footer.work":{vi:"Dự án chọn lọc",en:"Selected work"},"footer.notes":{vi:"Ghi chép học tập",en:"Learning notes"},"footer.profile":{vi:"Hồ sơ & CV",en:"Profile & CV"},"footer.designed":{vi:"Được thiết kế như một nhật ký hệ thống sống",en:"Designed as a living systems journal"},"blog.title":{vi:"Bài viết",en:"Blog"},"blog.desc":{vi:"Kiến thức lập trình, kinh nghiệm thực tế và những bài học từ hành trình phát triển phần mềm.",en:"Programming knowledge, practical experience, and lessons from my software development journey."},"blog.search":{vi:"Tìm kiếm bài viết...",en:"Search articles..."},"blog.all":{vi:"Tất cả",en:"All"},"blog.filterCategory":{vi:"Danh mục",en:"Categories"},"blog.filterTag":{vi:"Thẻ nội dung",en:"Content tags"},"blog.allTags":{vi:"Tất cả thẻ",en:"All tags"},"blog.selectedTags":{vi:"thẻ đã chọn",en:"selected"},"blog.clearFilters":{vi:"Xóa bộ lọc",en:"Clear filters"},"blog.readMore":{vi:"Đọc thêm →",en:"Read more →"},"blog.empty":{vi:"Không tìm thấy bài viết",en:"No articles found"},"blog.emptyDesc":{vi:"Thử thay đổi bộ lọc hoặc từ khóa tìm kiếm.",en:"Try changing the filter or search keyword."},"project.title":{vi:"Dự án",en:"Projects"},"project.desc":{vi:"Các dự án cá nhân từ GitHub của tôi, từ ý tưởng đến sản phẩm hoàn chỉnh.",en:"My personal GitHub projects, from early ideas to finished products."},"project.github":{vi:"Xem thêm trên GitHub",en:"View more on GitHub"},"project.featured":{vi:"Dự án nổi bật",en:"Featured projects"},"project.all":{vi:"Tất cả dự án",en:"All projects"},"project.source":{vi:"Mã nguồn",en:"Source code"},"project.demo":{vi:"Bản chạy thử",en:"Live demo"},"post.back":{vi:"Quay lại Blog",en:"Back to Blog"},"post.notFound":{vi:"Bài viết không tồn tại",en:"Article not found"},"post.notFoundDesc":{vi:"Bài viết bạn đang tìm không tồn tại hoặc đã bị xóa.",en:"The article you are looking for does not exist or has been removed."},"post.views":{vi:"lượt xem",en:"views"},"post.tags":{vi:"Thẻ",en:"Tags"},"post.share":{vi:"Chia sẻ",en:"Share"},"post.copy":{vi:"Sao chép liên kết",en:"Copy link"},"post.sourceNote":{vi:"Ghi chú: Bài viết được tổng hợp từ quá trình học, thực hành và tham khảo nhiều nguồn tài liệu khác nhau.",en:"Note: This article is distilled from my learning, hands-on practice, and references across multiple sources."},"category.languages":{vi:"Ngôn ngữ lập trình",en:"Programming Languages"},"category.frameworks":{vi:"Framework & thư viện",en:"Frameworks & Libraries"},"category.architecture":{vi:"Kiến trúc phần mềm",en:"Software Architecture"},"category.patterns":{vi:"Mẫu thiết kế",en:"Design Patterns"},"category.practices":{vi:"Thực hành tốt",en:"Best Practices"},"category.roadmap":{vi:"Lộ trình học tập",en:"Learning Roadmaps"},"about.cv":{vi:"Xem CV của tôi",en:"View my CV"},"about.me":{vi:"Về tôi",en:"About me"},"about.experience":{vi:"Kinh nghiệm",en:"Experience"},"about.contact":{vi:"Liên hệ",en:"Contact"},"about.collab":{vi:"Muốn hợp tác?",en:"Interested in collaborating?"},"about.collabDesc":{vi:"Tôi luôn sẵn sàng thảo luận về các dự án thú vị.",en:"I am always open to discussing interesting projects."},"about.contactNow":{vi:"Liên hệ ngay",en:"Get in touch"},"about.download":{vi:"Tải PDF",en:"Download PDF"},"about.skills":{vi:"Kỹ năng kỹ thuật",en:"Technical skills"},"about.featured":{vi:"Dự án tiêu biểu (từ GitHub)",en:"Featured projects (from GitHub)"},"about.other":{vi:"Hoạt động khác",en:"Other activities"},"effect.title":{vi:"Hiệu ứng nền",en:"Background effects"}},qy=g.createContext(void 0),IC=({children:e})=>{const[t,n]=g.useState(()=>{const i=localStorage.getItem("haiit-language");return i==="vi"||i==="en"?i:navigator.language.toLowerCase().startsWith("vi")?"vi":"en"});g.useEffect(()=>{localStorage.setItem("haiit-language",t),document.documentElement.lang=t},[t]);const r=i=>{var o;return((o=AC[i])==null?void 0:o[t])??i};return a.jsx(qy.Provider,{value:{language:t,setLanguage:n,toggleLanguage:()=>n(t==="vi"?"en":"vi"),t:r,locale:t==="vi"?"vi-VN":"en-US"},children:e})},Ne=()=>{const e=g.useContext(qy);if(!e)throw new Error("useLanguage must be used within LanguageProvider");return e},kc=["none","parallax","tet","christmas"],EC=()=>{const{currentEffect:e,setCurrentEffect:t}=Dy(),{language:n}=Ne(),r=kc.indexOf(e),i=kc[(r+1)%kc.length],o=n==="vi"?{none:"Tắt",parallax:"3D",tet:"Tết",christmas:"Giáng sinh"}:{none:"Off",parallax:"3D",tet:"Lunar New Year",christmas:"Christmas"},c={none:Ts,parallax:$k,tet:o0,christmas:x0}[e],l=`${o[e]} → ${o[i]}`;return a.jsxs(Ty,{children:[a.jsx(Cy,{asChild:!0,children:a.jsx(X,{variant:"outline",size:"icon",className:`effect-cycle fixed bottom-4 right-4 z-[60] h-12 w-12 rounded-full shadow-xl backdrop-blur-xl ${e==="none"?"bg-background/85":"border-primary/50 bg-primary/15 text-primary"}`,"aria-label":l,onClick:()=>t(i),children:a.jsx(c,{className:"h-4 w-4"})})}),a.jsx(lh,{side:"left",className:"font-mono text-xs uppercase tracking-[.12em]",children:l})]})},jC=()=>{const e=g.useRef(null),t=g.useRef([]),n=g.useRef();return g.useEffect(()=>{const r=e.current;if(!r)return;const i=r.getContext("2d");if(!i)return;let o=window.innerWidth,s=window.innerHeight,c=performance.now()+5e3+Math.random()*5e3,l=0;const u=()=>{const v=Math.min(190,Math.floor(o/6));t.current=Array.from({length:v},(k,y)=>{const x=Math.random();return{x:Math.random()*o,y:Math.random()*s,depth:x,size:.7+x*2.5,speed:.3+x*1.1,opacity:.12+x*.36,swing:Math.random()*Math.PI*2,swingSpeed:Math.random()*.018+.006,blur:(1-x)*1.8,rotation:Math.random()*Math.PI,rotationSpeed:(Math.random()-.5)*.012,crystal:y%17===0}})},h=()=>{const v=Math.min(window.devicePixelRatio||1,2);o=window.innerWidth,s=window.innerHeight,r.width=o*v,r.height=s*v,r.style.width=`${o}px`,r.style.height=`${s}px`,i.setTransform(v,0,0,v,0,0),u()},d=v=>{i.save(),i.translate(v.x,v.y),i.rotate(v.rotation),i.strokeStyle=`rgba(235, 249, 255, ${v.opacity*.72})`,i.lineWidth=.45;for(let k=0;k<6;k+=1)i.rotate(Math.PI/3),i.beginPath(),i.moveTo(0,0),i.lineTo(0,-v.size*2.4),i.moveTo(0,-v.size*1.3),i.lineTo(v.size*.65,-v.size*1.8),i.moveTo(0,-v.size*1.3),i.lineTo(-v.size*.65,-v.size*1.8),i.stroke();i.restore()};h(),window.addEventListener("resize",h);const p=v=>{if(i.clearRect(0,0,o,s),v>c){const k=v-c;l=k<3500?Math.sin(k/3500*Math.PI)*3.2:0,k>=3500&&(c=v+9e3+Math.random()*9e3)}t.current.forEach(k=>{k.y+=k.speed+l*.08,k.swing+=k.swingSpeed,k.rotation+=k.rotationSpeed,k.x+=Math.sin(k.swing)*(.18+k.depth*.35)+l*(.25+k.depth*.75),k.y>s+12&&(k.y=-12,k.x=Math.random()*o),k.x>o+15&&(k.x=-15),i.shadowBlur=k.blur*5,i.shadowColor="rgba(180, 225, 255, .55)",k.crystal?d(k):(i.beginPath(),i.ellipse(k.x,k.y,k.size*(1+l*.08),k.size,0,0,Math.PI*2),i.fillStyle=`rgba(240, 250, 255, ${k.opacity})`,i.fill()),i.shadowBlur=0}),n.current=requestAnimationFrame(p)};return n.current=requestAnimationFrame(p),()=>{window.removeEventListener("resize",h),n.current&&cancelAnimationFrame(n.current)}},[]),a.jsx("canvas",{ref:e,className:"absolute inset-0 pointer-events-none z-30 opacity-[.72]"})},RC=Array.from({length:18},(e,t)=>{const n=t/17,r=Math.sin(n*Math.PI)*2.5;return{x:`${4+n*92}%`,y:`${8+r}px`,delay:`${t*-.16}s`,hue:35+t*18}}),LC=Array.from({length:42}),MC=Array.from({length:9}),DC=Array.from({length:5}),qC=Array.from({length:18}),OC=Array.from({length:6}),hp=Array.from({length:14}),dp=({side:e})=>a.jsxs("div",{className:`christmas-sprig christmas-sprig-${e}`,children:[a.jsx("span",{className:"sprig-stem"}),MC.map((t,n)=>a.jsx("i",{style:{"--i":n}},n)),DC.map((t,n)=>a.jsx("b",{style:{"--i":n}},n))]}),UC=()=>a.jsxs("div",{className:"effect-scene effect-scene-christmas fixed inset-0 z-0 overflow-hidden",children:[a.jsx("div",{className:"christmas-frost"}),a.jsx("div",{className:"christmas-bokeh",children:qC.map((e,t)=>a.jsx("i",{style:{"--i":t}},t))}),a.jsx("div",{className:"nordic-stars",children:LC.map((e,t)=>a.jsx("i",{style:{"--i":t}},t))}),a.jsx("div",{className:"nordic-aurora nordic-aurora-a"}),a.jsx("div",{className:"nordic-aurora nordic-aurora-b"}),a.jsx("div",{className:"nordic-aurora nordic-aurora-c"}),a.jsx("div",{className:"christmas-snowflake-halo"}),a.jsx("div",{className:"christmas-hero-snowflake",children:OC.map((e,t)=>a.jsxs("i",{style:{"--i":t},children:[a.jsx("span",{}),a.jsx("b",{})]},t))}),a.jsx("div",{className:"christmas-wind christmas-wind-a",children:hp.map((e,t)=>a.jsx("i",{style:{"--i":t}},t))}),a.jsx("div",{className:"christmas-wind christmas-wind-b",children:hp.slice(0,9).map((e,t)=>a.jsx("i",{style:{"--i":t}},t))}),a.jsxs("div",{className:"christmas-top-garland",children:[a.jsx(dp,{side:"left"}),a.jsx(dp,{side:"right"}),a.jsx("div",{className:"garland-bauble garland-bauble-a",children:a.jsx("i",{})}),a.jsx("div",{className:"garland-bauble garland-bauble-b",children:a.jsx("i",{})}),a.jsx("div",{className:"garland-bauble garland-bauble-c",children:a.jsx("i",{})})]}),a.jsxs("div",{className:"christmas-wreath",children:[a.jsx("div",{className:"wreath-bow"}),a.jsx("i",{}),a.jsx("i",{}),a.jsx("i",{}),a.jsx("i",{}),a.jsx("i",{})]}),a.jsxs("div",{className:"christmas-corner-gift",children:[a.jsx("i",{}),a.jsx("span",{})]}),a.jsx("div",{className:"christmas-candy-cane"}),a.jsx("div",{className:"nordic-pines nordic-pines-back",children:Array.from({length:9},(e,t)=>a.jsx("i",{style:{"--i":t}},t))}),a.jsx("div",{className:"nordic-pines nordic-pines-front",children:Array.from({length:7},(e,t)=>a.jsx("i",{style:{"--i":t}},t))}),a.jsx("div",{className:"christmas-light-drift",children:RC.map(e=>a.jsx("i",{style:{left:e.x,top:e.y,"--bulb":`hsl(${e.hue} 88% 64%)`,animationDelay:e.delay}},e.x))}),a.jsx("div",{className:"winter-ground"}),a.jsx(jC,{}),a.jsx("div",{className:"effect-label left-5 top-24",children:"CHRISTMAS EVE / WINTER GLOW"})]}),_C=()=>{const e=g.useRef(null);return g.useEffect(()=>{const t=e.current,n=t==null?void 0:t.getContext("2d");if(!t||!n)return;let r=0,i=0,o=[],s=[];const c=()=>{t.width=window.innerWidth*devicePixelRatio,t.height=window.innerHeight*devicePixelRatio,t.style.width=`${window.innerWidth}px`,t.style.height=`${window.innerHeight}px`,n.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0),o=Array.from({length:Math.min(52,Math.floor(window.innerWidth/24))},(h,d)=>({x:d%2?Math.random()*window.innerWidth*.22:window.innerWidth*(.78+Math.random()*.22),y:Math.random()*window.innerHeight,size:Math.random()*5+2,speed:Math.random()*.6+.25,sway:Math.random()*8,rotation:Math.random()*Math.PI,rotationSpeed:(Math.random()-.5)*.025,opacity:Math.random()*.5+.3}))},l=()=>{const h=Math.random()>.5?window.innerWidth*.12:window.innerWidth*.88,d=window.innerHeight*(.1+Math.random()*.16),p=Math.random()>.5?"#ffd36a":"#ff7b69";s.push(...Array.from({length:28},(v,k)=>({x:h,y:d,angle:k/28*Math.PI*2,radius:0,speed:Math.random()*1.3+.7,alpha:.75,color:p})))},u=()=>{n.clearRect(0,0,window.innerWidth,window.innerHeight),i+=1,i%210===0&&l(),s=s.filter(h=>h.alpha>.01),s.forEach(h=>{h.radius+=h.speed,h.alpha*=.985;const d=h.x+Math.cos(h.angle)*h.radius,p=h.y+Math.sin(h.angle)*h.radius+h.radius*.08;n.beginPath(),n.arc(d,p,1.2,0,Math.PI*2),n.fillStyle=h.color,n.globalAlpha=h.alpha,n.fill()}),o.forEach(h=>{h.y+=h.speed,h.x+=Math.sin(h.y*.012+h.sway)*.38,h.rotation+=h.rotationSpeed,h.y>window.innerHeight+20&&(h.y=-20,h.x=Math.random()>.5?Math.random()*window.innerWidth*.22:window.innerWidth*(.78+Math.random()*.22)),n.save(),n.translate(h.x,h.y),n.rotate(h.rotation),n.globalAlpha=h.opacity;const d=n.createLinearGradient(0,-h.size,0,h.size);d.addColorStop(0,"#fff0a8"),d.addColorStop(.45,"#ffbf5a"),d.addColorStop(1,"#e85a55"),n.fillStyle=d,n.beginPath(),n.ellipse(0,0,h.size*.5,h.size,0,0,Math.PI*2),n.fill(),n.restore()}),n.globalAlpha=1,r=requestAnimationFrame(u)};return c(),l(),u(),window.addEventListener("resize",c),()=>{cancelAnimationFrame(r),window.removeEventListener("resize",c)}},[]),a.jsxs("div",{className:"effect-scene effect-scene-tet fixed inset-0 z-0 overflow-hidden",children:[a.jsx("div",{className:"tet-vietnam-frame"}),a.jsxs("div",{className:"tet-corner tet-corner-dao",children:[a.jsx("div",{className:"tet-border-branch",children:Array.from({length:13},(t,n)=>a.jsx("i",{style:{"--i":n}},n))}),a.jsxs("div",{className:"tet-viet-lantern",children:[a.jsx("span",{children:"An"}),a.jsx("i",{})]})]}),a.jsxs("div",{className:"tet-corner tet-corner-mai",children:[a.jsx("div",{className:"tet-border-branch",children:Array.from({length:13},(t,n)=>a.jsx("i",{style:{"--i":n}},n))}),a.jsxs("div",{className:"tet-viet-lantern",children:[a.jsx("span",{children:"Vui"}),a.jsx("i",{})]})]}),a.jsxs("div",{className:"tet-side-couplet tet-side-couplet-left",children:[a.jsx("i",{}),a.jsxs("span",{children:[a.jsx("em",{children:"Xuân"}),a.jsx("em",{children:"sang"}),a.jsx("em",{children:"phúc"}),a.jsx("em",{children:"lộc"}),a.jsx("em",{children:"tràn"}),a.jsx("em",{children:"muôn"}),a.jsx("em",{children:"ngả"})]}),a.jsx("b",{}),a.jsx("strong",{children:"An"})]}),a.jsxs("div",{className:"tet-side-couplet tet-side-couplet-right",children:[a.jsx("i",{}),a.jsxs("span",{children:[a.jsx("em",{children:"Tết"}),a.jsx("em",{children:"đến"}),a.jsx("em",{children:"an"}),a.jsx("em",{children:"khang"}),a.jsx("em",{children:"rạng"}),a.jsx("em",{children:"khắp"}),a.jsx("em",{children:"nhà"})]}),a.jsx("b",{}),a.jsx("strong",{children:"Xuân"})]}),a.jsxs("div",{className:"tet-bottom tet-bottom-left",children:[a.jsxs("div",{className:"tet-banh-chung",children:[a.jsx("i",{}),a.jsx("span",{}),a.jsx("b",{})]}),a.jsxs("div",{className:"tet-banh-tet",children:[a.jsx("i",{}),a.jsx("span",{}),a.jsx("b",{})]}),a.jsx("div",{className:"tet-watermelon",children:a.jsx("i",{})}),a.jsxs("div",{className:"tet-envelope",children:[a.jsx("i",{}),a.jsx("span",{children:"Lộc"}),a.jsx("b",{})]})]}),a.jsxs("div",{className:"tet-bottom tet-bottom-right",children:[a.jsx("div",{className:"tet-quat",children:Array.from({length:11},(t,n)=>a.jsx("i",{style:{"--i":n}},n))}),a.jsxs("div",{className:"tet-dongson",children:[a.jsx("i",{}),a.jsx("span",{}),a.jsx("b",{})]})]}),a.jsx("div",{className:"tet-top-knot tet-top-knot-a",children:a.jsx("i",{})}),a.jsx("div",{className:"tet-top-knot tet-top-knot-b",children:a.jsx("i",{})}),a.jsx("canvas",{ref:e,className:"absolute inset-0"}),a.jsx("div",{className:"effect-label left-5 top-24",children:"TẾT VIỆT / BÌNH AN"})]})},Jo=[{base:556958,side:473183,top:6478056,accent:12124016,edge:14154751},{base:5982901,side:2169688,top:10849023,accent:7533823,edge:15196671},{base:11758372,side:5514511,top:15775819,accent:7467007,edge:16770989},{base:6004018,side:2181927,top:11069534,accent:14286722,edge:15597513}],Tc=(e,t)=>{const n=new Lv(e*.48,e*.48),r=new Xl({color:t,transparent:!0,opacity:.28,depthWrite:!1,side:Mv}),i=new Vi(n,r),o=new zi(new xa(n),new ka({color:t,transparent:!0,opacity:.5}));return i.add(o),i},Cc=(e,t,n=!1)=>{const r=new Bp,i=new bh(e,e,e),s=[t.side,t.side,t.top,t.side,t.base,t.side].map((d,p)=>new Ev({color:d,metalness:.62,roughness:p===2?.14:.23,clearcoat:1,clearcoatRoughness:.12,emissive:new jv(p===2?t.accent:d).multiplyScalar(p===2?.14:.07),transparent:!0,opacity:.38,depthWrite:!1})),c=new Vi(i,s),l=new zi(new xa(i),new ka({color:t.edge,transparent:!0,opacity:.58})),u=new zi(new xa(new bh(e*1.13,e*1.13,e*1.13)),new ka({color:t.accent,transparent:!0,opacity:n?.3:.16})),h=new Vi(new Rv(e*(n?.24:.19),0),new Xl({color:t.accent,transparent:!0,opacity:.48,depthWrite:!1}));if(h.name="cube-energy",u.name="cube-frame",r.add(c,l,u,h),n){const d=Tc(e,t.accent);d.position.z=e*.505;const p=Tc(e*.88,t.edge);p.position.y=e*.505,p.rotation.x=-Math.PI/2;const v=Tc(e*.78,t.top);v.position.x=e*.505,v.rotation.y=Math.PI/2,r.add(d,p,v)}return r},FC=()=>{const e=g.useRef(null);return g.useEffect(()=>{const t=e.current;if(!t)return;const n=new yv,r=new vv(42,1,.1,100);r.position.set(0,1.2,13);const i=new bv({alpha:!0,antialias:!0,powerPreference:"high-performance"});i.setPixelRatio(Math.min(window.devicePixelRatio,2)),i.setClearColor(0,0),i.outputColorSpace=wv,i.toneMapping=xv,i.toneMappingExposure=1.15,t.appendChild(i.domElement),n.add(new kv(10412031,.72));const o=new Tv(12449791,4.2);o.position.set(4,6,8),n.add(o);const s=new yh(12124016,32,20);s.position.set(-5,2,4),n.add(s);const c=new yh(3723263,26,18);c.position.set(5,-3,2),n.add(c);const l=Cc(2.25,Jo[0],!0);l.rotation.set(-.35,.65,.08),n.add(l);const u=Cc(.72,Jo[3]);u.scale.setScalar(.82),l.add(u);const h=Array.from({length:11},(C,A)=>{const E=A%3,q=new Bp;q.rotation.set([.35,1.05,-.62][E],[-.22,.28,-.48][E],A*.71),n.add(q);const L=Cc([.38,.5,.32,.44][A%4],Jo[A%Jo.length]);return L.position.x=[3.5,4.35,5.15][E]+A%4*.08,L.rotation.set(A*.41,A*.63,A*.28),q.add(L),{pivot:q,cube:L,speed:[.34,-.24,.18][E],phase:A*.9}}),d=[{radius:3.35,tube:.012,color:6809849,rotation:[1.2,.12,.1]},{radius:4.5,tube:.009,color:10741301,rotation:[.82,.7,-.3]},{radius:5.55,tube:.007,color:5101567,rotation:[1.42,-.42,.5]}].map(({radius:C,tube:A,color:E,rotation:q})=>{const L=new Vi(new Cv(C,A,8,160),new Xl({color:E,transparent:!0,opacity:.26}));return L.rotation.set(q[0],q[1],q[2]),n.add(L),L}),p=new Sv(6.2,1),v=new zi(new xa(p),new ka({color:5756904,transparent:!0,opacity:.055}));n.add(v);const k=190,y=new Float32Array(k*3);for(let C=0;C<k;C+=1){const A=7+Math.random()*11,E=Math.random()*Math.PI*2,q=Math.acos(2*Math.random()-1);y[C*3]=A*Math.sin(q)*Math.cos(E),y[C*3+1]=A*Math.cos(q),y[C*3+2]=A*Math.sin(q)*Math.sin(E)}const x=new Pv;x.setAttribute("position",new Nv(y,3));const f=new vh(x,new Av({color:12055551,size:.035,transparent:!0,opacity:.62}));n.add(f);const m=new Dv;let b=0;const w=new Iv,T=()=>{const{clientWidth:C,clientHeight:A}=t;i.setSize(C,A,!1),r.aspect=C/Math.max(A,1),r.updateProjectionMatrix()},S=C=>{m.x=C.clientX/window.innerWidth-.5,m.y=C.clientY/window.innerHeight-.5},P=()=>{const C=w.getElapsedTime();l.rotation.y=.65+C*.16,l.rotation.x=-.35+Math.sin(C*.45)*.1,l.getObjectByName("cube-frame").rotation.set(C*.18,-C*.24,C*.12),l.getObjectByName("cube-energy").rotation.set(C*.7,C*-.9,C*.45),u.rotation.x=C*-.8,u.rotation.y=C*.65,h.forEach(({pivot:A,cube:E,speed:q,phase:L})=>{A.rotation.z+=q*.008,E.rotation.x+=.006,E.rotation.y+=.009,E.position.y=Math.sin(C*.8+L)*.18,E.scale.setScalar(.88+Math.sin(C*.65+L)*.12),E.getObjectByName("cube-frame").rotation.y=C*-.5+L,E.getObjectByName("cube-energy").rotation.x=C*1.1+L}),d.forEach((A,E)=>{A.rotation.z+=(E%2?-1:1)*8e-4}),v.rotation.y=C*-.025,f.rotation.y=C*.006,r.position.x+=(m.x*1.2-r.position.x)*.025,r.position.y+=(-m.y*.8+1.2-r.position.y)*.025,r.lookAt(0,0,0),i.render(n,r),b=requestAnimationFrame(P)};return T(),P(),window.addEventListener("resize",T),window.addEventListener("pointermove",S,{passive:!0}),()=>{cancelAnimationFrame(b),window.removeEventListener("resize",T),window.removeEventListener("pointermove",S),n.traverse(C=>{(C instanceof Vi||C instanceof zi||C instanceof vh)&&(C.geometry.dispose(),(Array.isArray(C.material)?C.material:[C.material]).forEach(E=>E.dispose()))}),i.dispose(),t.removeChild(i.domElement)}},[]),a.jsx("div",{ref:e,className:"cyber-webgl absolute inset-0"})},BC=()=>{const e=g.useRef(null),t=g.useRef(null);return g.useEffect(()=>{const n=e.current,r=t.current,i=r==null?void 0:r.getContext("2d");if(!n||!r||!i)return;let o=0,s=[],c=[],l=window.innerWidth,u=window.innerHeight,h=0;const d=window.matchMedia("(prefers-reduced-motion: reduce)").matches,p={x:l/2,y:u/2,targetX:l/2,targetY:u/2,active:!1},v=()=>{const w=p.x/l-.5,T=p.y/u-.5;n.style.setProperty("--mx",`${w}`),n.style.setProperty("--my",`${T}`),n.style.setProperty("--back-shift",`${w*-14}px`),n.style.setProperty("--floor-shift",`${w*24}px`),n.style.setProperty("--hud-shift",`${T*22}px`),n.style.setProperty("--core-rx",`${-18+T*-18}deg`),n.style.setProperty("--core-ry",`${35+w*28}deg`),n.style.setProperty("--scene-x",`${w*20}px`),n.style.setProperty("--scene-y",`${T*14}px`),n.style.setProperty("--scene-rx",`${T*-5}deg`),n.style.setProperty("--scene-ry",`${w*7}deg`),n.style.setProperty("--far-x",`${w*34}px`),n.style.setProperty("--far-y",`${T*20}px`),n.style.setProperty("--near-x",`${w*-42}px`),n.style.setProperty("--near-y",`${T*-28}px`),n.style.setProperty("--panel-x",`${w*28}px`),n.style.setProperty("--panel-y",`${T*18}px`),n.style.setProperty("--panel-inverse-x",`${w*-32}px`),n.style.setProperty("--panel-inverse-y",`${T*-20}px`),n.style.setProperty("--px",`${p.x}px`),n.style.setProperty("--py",`${p.y}px`)},k=()=>{const w=Math.min(92,Math.max(42,Math.floor(l/18)));s=Array.from({length:w},()=>({x:Math.random()*l,y:Math.random()*u,vx:(Math.random()-.5)*.12,vy:(Math.random()-.5)*.12,size:Math.random()*1.35+.45,depth:Math.random()*.75+.25,phase:Math.random()*Math.PI*2}))},y=()=>{l=window.innerWidth,u=window.innerHeight;const w=Math.min(window.devicePixelRatio||1,2);r.width=l*w,r.height=u*w,r.style.width=`${l}px`,r.style.height=`${u}px`,i.setTransform(w,0,0,w,0,0),p.x=p.targetX=l/2,p.y=p.targetY=u/2,k(),v()},x=w=>{p.targetX=w.clientX,p.targetY=w.clientY,p.active=!0},f=()=>{p.targetX=l/2,p.targetY=u/2,p.active=!1},m=w=>{c.push({x:w.clientX,y:w.clientY,radius:12,alpha:.38}),c.length>4&&c.shift()},b=()=>{h+=1,p.x+=(p.targetX-p.x)*(d?1:.075),p.y+=(p.targetY-p.y)*(d?1:.075),v(),i.clearRect(0,0,l,u),i.lineWidth=.7,c=c.filter(w=>w.alpha>.012),c.forEach(w=>{w.radius+=1.8,w.alpha*=.975,i.beginPath(),i.arc(w.x,w.y,w.radius,0,Math.PI*2),i.strokeStyle=`rgba(145, 238, 255, ${w.alpha})`,i.stroke()}),s.forEach((w,T)=>{const S=w.x-p.x,P=w.y-p.y,C=Math.max(1,Math.hypot(S,P));if(p.active&&C<175){const E=(1-C/175)*.018*w.depth;w.vx+=S/C*E,w.vy+=P/C*E}w.vx*=.992,w.vy*=.992,d||(w.x+=w.vx+Math.sin(h*.006+w.phase)*.035*w.depth,w.y+=w.vy+Math.cos(h*.005+w.phase)*.025*w.depth),w.x<-10&&(w.x=l+10),w.x>l+10&&(w.x=-10),w.y<-10&&(w.y=u+10),w.y>u+10&&(w.y=-10);const A=.2+w.depth*.32;i.beginPath(),i.arc(w.x,w.y,w.size*w.depth,0,Math.PI*2),i.fillStyle=`rgba(135, 228, 242, ${A})`,i.fill();for(let E=T+1;E<s.length;E+=1){const q=s[E],L=Math.hypot(w.x-q.x,w.y-q.y);L<112&&(i.beginPath(),i.moveTo(w.x,w.y),i.lineTo(q.x,q.y),i.strokeStyle=`rgba(115, 220, 238, ${.07*(1-L/112)*w.depth})`,i.stroke())}C<220&&(i.beginPath(),i.moveTo(w.x,w.y),i.lineTo(p.x,p.y),i.strokeStyle=`rgba(185, 236, 150, ${.16*(1-C/220)*w.depth})`,i.stroke())}),i.beginPath(),i.arc(p.x,p.y,30,0,Math.PI*2),i.strokeStyle="rgba(150, 235, 245, .1)",i.stroke(),o=requestAnimationFrame(b)};return y(),b(),window.addEventListener("resize",y),window.addEventListener("pointermove",x,{passive:!0}),window.addEventListener("pointerleave",f),window.addEventListener("pointerdown",m,{passive:!0}),()=>{cancelAnimationFrame(o),window.removeEventListener("resize",y),window.removeEventListener("pointermove",x),window.removeEventListener("pointerleave",f),window.removeEventListener("pointerdown",m)}},[]),a.jsxs("div",{ref:e,className:"effect-scene effect-scene-3d fixed inset-0 z-0 overflow-hidden",children:[a.jsx("canvas",{ref:t,className:"cyber-network absolute inset-0"}),a.jsx("div",{className:"cyber-atmosphere cyber-atmosphere-a"}),a.jsx("div",{className:"cyber-atmosphere cyber-atmosphere-b"}),a.jsx("div",{className:"cyber-aurora cyber-aurora-a"}),a.jsx("div",{className:"cyber-aurora cyber-aurora-b"}),a.jsx("div",{className:"cyber-depth-lines"}),a.jsxs("div",{className:"cyber-signal-field",children:[a.jsx("i",{}),a.jsx("i",{}),a.jsx("i",{}),a.jsx("i",{}),a.jsx("i",{}),a.jsx("i",{}),a.jsx("i",{}),a.jsx("i",{})]}),a.jsx("div",{className:"cyber-spotlight"}),a.jsx("div",{className:"cyber-grid cyber-grid-back"}),a.jsx("div",{className:"cyber-grid cyber-grid-floor"}),a.jsx(FC,{}),a.jsxs("div",{className:"cyber-observatory",children:[a.jsxs("div",{className:"cyber-axis",children:[a.jsx("i",{}),a.jsx("i",{}),a.jsx("i",{})]}),a.jsxs("div",{className:"cyber-beacons",children:[a.jsx("i",{}),a.jsx("i",{}),a.jsx("i",{}),a.jsx("i",{}),a.jsx("i",{}),a.jsx("i",{})]}),a.jsxs("div",{className:"cyber-core-plinth",children:[a.jsx("i",{}),a.jsx("i",{}),a.jsx("i",{})]})]}),a.jsxs("div",{className:"cyber-glass cyber-glass-a",children:[a.jsx("span",{children:"VECTOR"}),a.jsx("b",{children:"12.08"}),a.jsx("i",{})]}),a.jsxs("div",{className:"cyber-glass cyber-glass-b",children:[a.jsx("span",{children:"ORBIT"}),a.jsx("b",{children:"STABLE"}),a.jsx("i",{})]}),a.jsxs("div",{className:"cyber-hud cyber-hud-left",children:[a.jsx("span",{children:"SYS / DEPTH"}),a.jsx("b",{children:"03.24"}),a.jsx("i",{})]}),a.jsxs("div",{className:"cyber-hud cyber-hud-right",children:[a.jsx("span",{children:"FIELD / LIVE"}),a.jsx("b",{children:"97.4%"}),a.jsx("i",{})]}),a.jsx("div",{className:"cyber-cursor-halo"}),a.jsx("div",{className:"cyber-vignette"}),a.jsx("div",{className:"cyber-scanlines"}),a.jsx("div",{className:"effect-label left-5 top-24",children:"CYBER OBSERVATORY / INTERACTIVE"})]})},VC=()=>{const{currentEffect:e}=Dy();switch(e){case"christmas":return a.jsx(UC,{});case"tet":return a.jsx(_C,{});case"parallax":return a.jsx(BC,{});default:return null}};var rs=["light","dark"],dh="(prefers-color-scheme: dark)",zC=typeof window>"u",ph=g.createContext(void 0),HC={setTheme:e=>{},themes:[]},Oy=()=>{var e;return(e=g.useContext(ph))!=null?e:HC},WC=e=>g.useContext(ph)?e.children:g.createElement(KC,{...e}),GC=["light","dark"],KC=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:n=!0,enableColorScheme:r=!0,storageKey:i="theme",themes:o=GC,defaultTheme:s=n?"system":"light",attribute:c="data-theme",value:l,children:u,nonce:h})=>{let[d,p]=g.useState(()=>pp(i,s)),[v,k]=g.useState(()=>pp(i)),y=l?Object.values(l):o,x=g.useCallback(w=>{let T=w;if(!T)return;w==="system"&&n&&(T=gp());let S=l?l[T]:T,P=t?QC():null,C=document.documentElement;if(c==="class"?(C.classList.remove(...y),S&&C.classList.add(S)):S?C.setAttribute(c,S):C.removeAttribute(c),r){let A=rs.includes(s)?s:null,E=rs.includes(T)?T:A;C.style.colorScheme=E}P==null||P()},[]),f=g.useCallback(w=>{let T=typeof w=="function"?w(w):w;p(T);try{localStorage.setItem(i,T)}catch{}},[e]),m=g.useCallback(w=>{let T=gp(w);k(T),d==="system"&&n&&!e&&x("system")},[d,e]);g.useEffect(()=>{let w=window.matchMedia(dh);return w.addListener(m),m(w),()=>w.removeListener(m)},[m]),g.useEffect(()=>{let w=T=>{if(T.key!==i)return;let S=T.newValue||s;f(S)};return window.addEventListener("storage",w),()=>window.removeEventListener("storage",w)},[f]),g.useEffect(()=>{x(e??d)},[e,d]);let b=g.useMemo(()=>({theme:d,setTheme:f,forcedTheme:e,resolvedTheme:d==="system"?v:d,themes:n?[...o,"system"]:o,systemTheme:n?v:void 0}),[d,f,e,v,n,o]);return g.createElement(ph.Provider,{value:b},g.createElement($C,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:n,enableColorScheme:r,storageKey:i,themes:o,defaultTheme:s,attribute:c,value:l,children:u,attrs:y,nonce:h}),u)},$C=g.memo(({forcedTheme:e,storageKey:t,attribute:n,enableSystem:r,enableColorScheme:i,defaultTheme:o,value:s,attrs:c,nonce:l})=>{let u=o==="system",h=n==="class"?`var d=document.documentElement,c=d.classList;${`c.remove(${c.map(k=>`'${k}'`).join(",")})`};`:`var d=document.documentElement,n='${n}',s='setAttribute';`,d=i?rs.includes(o)&&o?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${o}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",p=(k,y=!1,x=!0)=>{let f=s?s[k]:k,m=y?k+"|| ''":`'${f}'`,b="";return i&&x&&!y&&rs.includes(k)&&(b+=`d.style.colorScheme = '${k}';`),n==="class"?y||f?b+=`c.add(${m})`:b+="null":f&&(b+=`d[s](n,${m})`),b},v=e?`!function(){${h}${p(e)}}()`:r?`!function(){try{${h}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${dh}',m=window.matchMedia(t);if(m.media!==t||m.matches){${p("dark")}}else{${p("light")}}}else if(e){${s?`var x=${JSON.stringify(s)};`:""}${p(s?"x[e]":"e",!0)}}${u?"":"else{"+p(o,!1,!1)+"}"}${d}}catch(e){}}()`:`!function(){try{${h}var e=localStorage.getItem('${t}');if(e){${s?`var x=${JSON.stringify(s)};`:""}${p(s?"x[e]":"e",!0)}}else{${p(o,!1,!1)};}${d}}catch(t){}}();`;return g.createElement("script",{nonce:l,dangerouslySetInnerHTML:{__html:v}})}),pp=(e,t)=>{if(zC)return;let n;try{n=localStorage.getItem(e)||void 0}catch{}return n||t},QC=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},gp=e=>(e||(e=window.matchMedia(dh)),e.matches?"dark":"light");const YC=()=>{const{resolvedTheme:e}=Oy();return g.useEffect(()=>{const t=document.querySelector('meta[name="theme-color"]');t==null||t.setAttribute("content",e==="dark"?"#090c11":"#f7f4eb")},[e]),null},Ls=[{id:"languages",name:"Programming Languages",description:"Deep dives into various programming languages, syntax, paradigms, and best use cases",icon:"Code2",color:"category-languages"},{id:"frameworks",name:"Frameworks & Libraries",description:"Comprehensive guides on modern frameworks and libraries for web, mobile, and backend development",icon:"Layers",color:"category-frameworks"},{id:"architecture",name:"Software Architecture",description:"System design principles, architectural patterns, and scalability strategies",icon:"Building2",color:"category-architecture"},{id:"patterns",name:"Design Patterns",description:"Classic and modern design patterns with practical implementations",icon:"Shapes",color:"category-patterns"},{id:"practices",name:"Best Practices",description:"Coding standards, clean code principles, and industry best practices",icon:"CheckCircle",color:"category-practices"},{id:"roadmap",name:"Learning Roadmaps",description:"Structured learning paths for different programming domains and skill levels",icon:"Map",color:"category-roadmap"}],Wl=[{id:"capital-weather-tracker",title:"Capital Weather Tracker",description:"Hệ thống xử lý dữ liệu thời tiết thời gian thực cho các thủ đô trên thế giới.",longDescription:"Ứng dụng thu thập và hiển thị dữ liệu thời tiết real-time từ OpenWeatherMap API, xử lý và visualize dữ liệu cho tất cả các thủ đô trên thế giới với cập nhật liên tục.",technologies:["Python","OpenWeatherMap API","Data Processing"],github:"https://github.com/haihttt974/capital-weather-tracker",image:"/placeholder.svg",featured:!0},{id:"sorting-visualizer",title:"Sorting Visualizer",description:"Ứng dụng trực quan hóa các thuật toán sắp xếp với animation mượt mà.",longDescription:"Công cụ giáo dục giúp hiểu rõ cách hoạt động của các thuật toán sắp xếp như Bubble Sort, Quick Sort, Merge Sort thông qua visualization trực quan.",technologies:["TypeScript","Algorithms","Visualization"],github:"https://github.com/haihttt974/sorting-visualizer",image:"/placeholder.svg",featured:!0},{id:"bookstore-aspnet",title:"BookStore ASP.NET",description:"Website quản lý hiệu sách hoàn chỉnh với ASP.NET Core.",longDescription:"Hệ thống quản lý hiệu sách full-stack với chức năng CRUD, quản lý kho, đơn hàng và báo cáo doanh thu. Xây dựng trên ASP.NET Core và SQL Server.",technologies:["C#","ASP.NET Core","SQL Server","Entity Framework"],github:"https://github.com/haihttt974/thltweb-BookStore-asp.net",image:"/placeholder.svg",featured:!0},{id:"gplx-mobile-app",title:"Ôn thi GPLX Mobile",description:"Ứng dụng di động ôn thi giấy phép lái xe với Flutter.",longDescription:"Ứng dụng mobile cross-platform giúp người dùng ôn luyện lý thuyết thi bằng lái xe với bộ câu hỏi đầy đủ, thi thử và theo dõi tiến độ học tập.",technologies:["Dart","Flutter","Mobile Development"],github:"https://github.com/haihttt974/ltmobile_gplx",image:"/placeholder.svg"},{id:"temperature-influxdb",title:"Temperature VN InfluxDB",description:"Hệ thống thu thập và lưu trữ dữ liệu nhiệt độ vào InfluxDB.",longDescription:"Pipeline dữ liệu IoT thu thập nhiệt độ từ các nguồn khác nhau tại Việt Nam, lưu trữ vào InfluxDB cho phân tích time-series và visualization.",technologies:["Python","InfluxDB","IoT","Time Series"],github:"https://github.com/haihttt974/send-temperature-vn-influxdb",image:"/placeholder.svg"},{id:"christmas-tree",title:"Christmas Tree Effect",description:"Hiệu ứng cây thông Noel tương tác với HTML/CSS/JS.",longDescription:"Trang web hiệu ứng Giáng Sinh với cây thông 3D tương tác, tuyết rơi và ánh sáng lung linh. Hoàn toàn viết bằng vanilla HTML, CSS và JavaScript.",technologies:["HTML5","CSS3","JavaScript","Animation"],github:"https://github.com/haihttt974/christmas_tree.github.io",demo:"https://haihttt974.github.io/christmas_tree.github.io/",image:"/placeholder.svg"},{id:"countdown-newyear",title:"Countdown New Year",description:"Đồng hồ đếm ngược năm mới với hiệu ứng đẹp mắt.",longDescription:"Trang countdown đón năm mới với thiết kế hiện đại, hiệu ứng confetti và animation mượt mà khi đồng hồ điểm 0.",technologies:["HTML5","CSS3","JavaScript"],github:"https://github.com/haihttt974/CountdownNewYear.github.io",demo:"https://haihttt974.github.io/CountdownNewYear.github.io/",image:"/placeholder.svg"},{id:"firework-effect",title:"Firework Effect",description:"Hiệu ứng pháo hoa sống động cho các dịp lễ hội.",longDescription:"Mô phỏng pháo hoa với hiệu ứng particle system, màu sắc rực rỡ và âm thanh. Phù hợp cho các trang countdown và lễ hội.",technologies:["HTML5","Canvas","JavaScript","Animation"],github:"https://github.com/haihttt974/Hfirework.github.io",demo:"https://haihttt974.github.io/Hfirework.github.io/",image:"/placeholder.svg"}],ae={name:"Lê Duy Hải",nickname:"Hai IT",username:"haihttt974",title:"Information Systems Developer",subtitle:"Database • Server-side • DevOps",avatar:"https://avatars.githubusercontent.com/u/202379592?v=4",address:"Đông Hưng Thuận, Ho Chi Minh City",bio:`Tôi là một chuyên gia về Hệ thống thông tin (Information Systems), tập trung vào việc xây dựng các giải pháp có khả năng mở rộng (Scalable) và tin cậy (Reliable).

Chuyên môn của tôi bao gồm: Cơ sở dữ liệu, Server-side Development và DevOps. Tôi đam mê việc tối ưu hóa hiệu suất hệ thống và xây dựng các kiến trúc phần mềm bền vững.

Ngoài lập trình, tôi còn là gia sư Toán, chia sẻ kiến thức và giúp đỡ học sinh phát triển tư duy logic.`,skills:[{category:"Ngôn ngữ lập trình",items:["C","C++","C#","Java","PHP","Python","JavaScript","TypeScript","Dart"]},{category:"Backend & Database",items:[".NET Core","ASP.NET","MySQL","SQL Server","MariaDB","InfluxDB"]},{category:"DevOps & Tools",items:["Docker","Git","GitHub","GitLab","Google Cloud","Fly.io","Postman","Swagger"]},{category:"Frontend & Design",items:["HTML5","CSS3","Bootstrap","jQuery","Figma","Canva"]},{category:"Data Science / AI",items:["TensorFlow","Keras","NumPy","Pandas","scikit-learn","SciPy"]}],social:{github:"https://github.com/haihttt974",linkedin:"https://www.linkedin.com/in/haild/",facebook:"https://facebook.com/haiit.974",instagram:"https://instagram.com/haiit.974",tiktok:"https://tiktok.com/@haiit.974",twitter:"https://x.com/haiit974",email:"ld.hai.insys@gmail.com",secondaryEmail:"leduyhai090704@gmail.com"},socialLinks:[{name:"GitHub",url:"https://github.com/haihttt974",icon:"Github"},{name:"LinkedIn",url:"https://www.linkedin.com/in/haild/",icon:"Linkedin"},{name:"Facebook",url:"https://facebook.com/haiit.974",icon:"Facebook"},{name:"Instagram",url:"https://instagram.com/haiit.974",icon:"Instagram"},{name:"TikTok",url:"https://tiktok.com/@haiit.974",icon:"Music2"},{name:"X (Twitter)",url:"https://x.com/haiit974",icon:"Twitter"},{name:"Primary Email",url:"mailto:ld.hai.insys@gmail.com",icon:"Mail"},{name:"Secondary Email",url:"mailto:leduyhai090704@gmail.com",icon:"Mail"}],experience:[{title:"Information Systems Developer",company:"Freelance & Personal Projects",period:"2023 - Hiện tại",description:"Phát triển các ứng dụng web, mobile và hệ thống xử lý dữ liệu. Chuyên sâu về Database, Server-side và DevOps."},{title:"Math Tutor",company:"Private Tutoring",period:"2022 - Hiện tại",description:"Gia sư Toán học, giúp học sinh phát triển tư duy logic và giải quyết vấn đề."}]},Zo=[{value:"system",label:"Hệ thống",icon:h0},{value:"dark",label:"Tối",icon:f0},{value:"light",label:"Sáng",icon:T0}],mp=()=>{const{language:e}=Ne(),{theme:t="system",setTheme:n}=Oy(),r=Zo.findIndex(u=>u.value===t),i=r===-1?0:r,o=Zo[i],s=Zo[(i+1)%Zo.length],c=o.icon,l=e==="vi"?{system:"Hệ thống",dark:"Tối",light:"Sáng"}:{system:"System",dark:"Dark",light:"Light"};return a.jsx(X,{variant:"outline",size:"icon",className:"border-border/80 bg-background/50","aria-label":`${l[o.value]} → ${l[s.value]}`,title:`${l[o.value]} → ${l[s.value]}`,onClick:()=>n(s.value),children:a.jsx(c,{className:"h-4 w-4"})})},fp=()=>{const{language:e,toggleLanguage:t}=Ne(),n=e==="vi"?"English":"Tiếng Việt";return a.jsxs(X,{variant:"outline",size:"sm",className:"h-10 gap-2 border-border/80 bg-background/50 px-3 font-mono text-xs font-semibold tracking-[.1em]","aria-label":`Switch to ${n}`,title:`Switch to ${n}`,onClick:t,children:[a.jsx(u0,{className:"h-3.5 w-3.5"}),e.toUpperCase()]})},XC=()=>{const{t:e}=Ne(),t=Ct(),[n,r]=g.useState(!1),i=[{path:"/",label:e("nav.home"),index:"00"},{path:"/projects",label:e("nav.projects"),index:"01"},{path:"/blog",label:e("nav.blog"),index:"02"},{path:"/about",label:e("nav.about"),index:"03"}],o=s=>s==="/"?t.pathname==="/":t.pathname.startsWith(s);return g.useEffect(()=>{r(!1)},[t.pathname]),a.jsx("header",{className:"fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl",children:a.jsxs("div",{className:"container mx-auto px-4",children:[a.jsxs("nav",{className:"flex h-[72px] items-center justify-between",children:[a.jsxs(be,{to:"/",className:"group flex items-center gap-3",children:[a.jsx("span",{className:"brand-logo flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-primary/35 bg-primary/[.07] p-1 shadow-sm transition-all duration-300 group-hover:border-primary/70 group-hover:bg-primary/10",children:a.jsx("img",{src:"/logo-rm-khongvien.png",alt:"",className:"h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"})}),a.jsxs("span",{children:[a.jsx("span",{className:"block font-mono text-sm font-semibold leading-none",children:"HAI IT"}),a.jsx("span",{className:"mt-1 block font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground",children:"systems journal"})]})]}),a.jsx("ul",{className:"hidden items-center gap-1 md:flex",children:i.map(s=>a.jsx("li",{children:a.jsxs(be,{to:s.path,className:`flex items-baseline gap-2 rounded-md px-3 py-2 font-mono text-xs transition-colors ${o(s.path)?"bg-primary/10 text-primary":"text-muted-foreground hover:bg-muted hover:text-foreground"}`,children:[a.jsx("span",{className:"text-[11px] opacity-65",children:s.index}),s.label]})},s.path))}),a.jsxs("div",{className:"hidden items-center gap-2 md:flex",children:[a.jsx(fp,{}),a.jsx(mp,{}),a.jsx(X,{asChild:!0,variant:"outline",size:"sm",className:"border-primary/30 font-mono text-xs",children:a.jsxs("a",{href:`mailto:${ae.social.email}`,children:[e("nav.connect")," ",a.jsx($t,{className:"ml-2 h-3.5 w-3.5"})]})})]}),a.jsx(X,{variant:"ghost",size:"icon",className:"md:hidden","aria-label":"Mở menu",onClick:()=>r(!n),children:n?a.jsx(Xa,{className:"h-5 w-5"}):a.jsx(m0,{className:"h-5 w-5"})})]}),n&&a.jsxs("div",{className:"border-t border-border/60 py-4 md:hidden",children:[i.map(s=>a.jsxs(be,{to:s.path,onClick:()=>r(!1),className:`flex items-center justify-between rounded-lg px-4 py-3 font-mono text-sm ${o(s.path)?"bg-primary/10 text-primary":"text-muted-foreground"}`,children:[s.label,a.jsxs("span",{className:"text-xs opacity-65",children:["/",s.index]})]},s.path)),a.jsxs("div",{className:"mt-3 flex items-center justify-between gap-3 border-t border-border/60 px-4 pt-4",children:[a.jsxs("span",{className:"font-mono text-xs uppercase tracking-[.14em] text-muted-foreground",children:[e("nav.language")," / ",e("nav.theme")]}),a.jsxs("div",{className:"flex gap-2",children:[a.jsx(fp,{}),a.jsx(mp,{})]})]})]})]})})},JC=()=>{const{t:e}=Ne();return a.jsx("footer",{className:"border-t border-border/70 bg-card/35",children:a.jsxs("div",{className:"container mx-auto px-4 py-12",children:[a.jsxs("div",{className:"grid gap-10 md:grid-cols-[1.4fr_.6fr_.6fr]",children:[a.jsxs("div",{children:[a.jsx("p",{className:"eyebrow mb-4",children:e("footer.eyebrow")}),a.jsx("h2",{className:"max-w-xl text-2xl font-semibold md:text-3xl",children:e("footer.title")})]}),a.jsxs("div",{className:"font-mono text-xs",children:[a.jsx("p",{className:"mb-4 uppercase tracking-[.18em] text-muted-foreground",children:e("footer.navigate")}),a.jsxs("div",{className:"space-y-3",children:[a.jsx(be,{className:"block hover:text-primary",to:"/projects",children:e("footer.work")}),a.jsx(be,{className:"block hover:text-primary",to:"/blog",children:e("footer.notes")}),a.jsx(be,{className:"block hover:text-primary",to:"/about",children:e("footer.profile")})]})]}),a.jsxs("div",{className:"font-mono text-xs",children:[a.jsx("p",{className:"mb-4 uppercase tracking-[.18em] text-muted-foreground",children:e("footer.connect")}),a.jsxs("div",{className:"space-y-3",children:[a.jsxs("a",{className:"flex items-center gap-2 hover:text-primary",href:ae.social.github,target:"_blank",rel:"noreferrer",children:[a.jsx(_r,{className:"h-3.5 w-3.5"}),"GitHub"]}),a.jsxs("a",{className:"flex items-center gap-2 hover:text-primary",href:ae.social.linkedin,target:"_blank",rel:"noreferrer",children:[a.jsx(d0,{className:"h-3.5 w-3.5"}),"LinkedIn"]}),a.jsxs("a",{className:"flex items-center gap-2 hover:text-primary",href:`mailto:${ae.social.email}`,children:[a.jsx(Rf,{className:"h-3.5 w-3.5"}),"Email ",a.jsx($t,{className:"h-3 w-3"})]})]})]})]}),a.jsxs("div",{className:"mt-12 flex flex-col gap-2 border-t border-border/70 pt-6 font-mono text-xs uppercase tracking-[.14em] text-muted-foreground sm:flex-row sm:justify-between",children:[a.jsxs("span",{children:["© ",new Date().getFullYear()," Lê Duy Hải / Hai IT"]}),a.jsx("span",{children:e("footer.designed")})]})]})})},or=({children:e})=>{const{pathname:t,search:n}=Ct();return g.useEffect(()=>{t==="/blog"&&window.sessionStorage.getItem(`blog-scroll:${t}${n}`)||window.scrollTo({top:0,behavior:"instant"})},[t,n]),a.jsxs("div",{className:"relative flex min-h-screen flex-col overflow-hidden",children:[a.jsx("div",{className:"page-grid pointer-events-none fixed inset-0 z-[-1]"}),a.jsx(XC,{}),a.jsx("main",{className:"flex-1 pt-[72px]",children:e}),a.jsx(JC,{})]})},ZC=()=>{const{t:e,language:t}=Ne(),n=g.useRef(null),r=t==="vi"?["Hệ thống backend","Dữ liệu & database","Thực hành DevOps"]:["Backend systems","Data & database","DevOps practice"];return g.useEffect(()=>{const i=n.current;if(!i||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const o=c=>{const l=i.getBoundingClientRect(),u=(c.clientX-l.left)/l.width-.5,h=(c.clientY-l.top)/l.height-.5;i.style.setProperty("--portrait-x",`${u*10}px`),i.style.setProperty("--portrait-y",`${h*10}px`),i.style.setProperty("--spot-x",`${(u+.5)*100}%`),i.style.setProperty("--spot-y",`${(h+.5)*100}%`)},s=()=>{i.style.setProperty("--portrait-x","0px"),i.style.setProperty("--portrait-y","0px"),i.style.setProperty("--spot-x","50%"),i.style.setProperty("--spot-y","50%")};return i.addEventListener("pointermove",o),i.addEventListener("pointerleave",s),()=>{i.removeEventListener("pointermove",o),i.removeEventListener("pointerleave",s)}},[]),a.jsxs("section",{className:"relative overflow-hidden border-b border-border/70",children:[a.jsx("div",{className:"hero-orbit pointer-events-none absolute right-[4%] top-[12%] h-72 w-72 rounded-full border border-primary/15"}),a.jsx("div",{className:"absolute -right-24 top-10 h-[34rem] w-[34rem] rounded-full bg-primary/[.07] blur-[120px]"}),a.jsxs("div",{className:"container relative mx-auto px-4 py-6 md:py-8",children:[a.jsxs("div",{className:"mb-8 flex items-center justify-between border-y border-border/70 py-3 font-mono text-xs uppercase tracking-[.16em] text-muted-foreground",children:[a.jsx("span",{children:e("hero.log")}),a.jsx("span",{className:"hidden sm:block",children:"Vietnam · GMT+7"}),a.jsxs("span",{className:"flex items-center gap-2 text-primary",children:[a.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-primary"}),e("hero.open")]})]}),a.jsxs("div",{className:"grid items-stretch gap-7 lg:grid-cols-[1.25fr_.75fr]",children:[a.jsxs("div",{className:"flex flex-col justify-between py-2 lg:py-5",children:[a.jsxs("div",{children:[a.jsxs("p",{className:"eyebrow mb-6 animate-fade-in",children:[e("hero.hello")," ",ae.nickname]}),a.jsxs("h1",{className:"max-w-4xl text-[clamp(3.15rem,6.8vw,6.8rem)] font-semibold leading-[.98] tracking-[-.075em] animate-slide-up",children:[a.jsx("span",{className:"block whitespace-nowrap",children:e("hero.line1")}),a.jsx("span",{className:"block text-muted-foreground",children:e("hero.line2")}),a.jsx("span",{className:"text-gradient",children:e("hero.line3")})]}),a.jsxs("div",{className:"mt-7 grid max-w-2xl gap-5 border-l border-primary/40 pl-5 sm:grid-cols-[1fr_auto] sm:items-end",children:[a.jsxs("p",{className:"text-base leading-relaxed text-muted-foreground md:text-lg",children:[t==="vi"?"Tôi là":"I am"," ",a.jsx("strong",{className:"font-medium text-foreground",children:ae.name}),", ",e("hero.bio")]}),a.jsx(jf,{className:"hidden h-10 w-10 text-primary sm:block"})]})]}),a.jsxs("div",{children:[a.jsxs("div",{className:"mt-7 flex flex-wrap gap-3",children:[a.jsx(X,{asChild:!0,size:"lg",className:"font-mono text-xs",children:a.jsxs(be,{to:"/projects",children:[e("hero.work")," ",a.jsx($t,{className:"ml-2 h-4 w-4"})]})}),a.jsx(X,{asChild:!0,size:"lg",variant:"outline",className:"font-mono text-xs",children:a.jsxs(be,{to:"/blog",children:[a.jsx(Kk,{className:"mr-2 h-4 w-4"}),e("hero.notes")]})})]}),a.jsx("div",{className:"mt-7 grid border-y border-border/70 sm:grid-cols-3",children:[["08+",e("hero.repositories")],["09+",e("hero.languages")],["33",e("hero.journal")]].map(([i,o],s)=>a.jsxs("div",{className:`py-4 ${s>0?"border-t border-border/70 sm:border-l sm:border-t-0 sm:pl-5":""}`,children:[a.jsx("span",{className:"font-mono text-xl font-semibold text-primary",children:i}),a.jsx("span",{className:"ml-2 font-mono text-[11px] uppercase tracking-wider text-muted-foreground",children:o})]},o))})]})]}),a.jsxs("aside",{ref:n,className:"portrait-stage journal-card group mx-auto aspect-[4/5] w-full max-w-[440px] animate-slide-up lg:self-center",style:{animationDelay:".12s"},children:[a.jsx("div",{className:"portrait-index absolute -left-4 top-12 z-20 hidden rounded-md border border-primary/30 bg-background/90 px-3 py-2 font-mono text-[11px] uppercase tracking-[.16em] text-primary backdrop-blur md:block",children:"ID / LDH-974"}),a.jsx("div",{className:"portrait-crosshair pointer-events-none absolute left-1/2 top-1/2 z-20 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"}),a.jsx("img",{src:ae.avatar,alt:`Chân dung ${ae.name}`,className:"portrait-image absolute inset-0 h-full w-full object-cover object-center"}),a.jsx("div",{className:"portrait-light pointer-events-none absolute inset-0 z-10"}),a.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent"}),a.jsxs("div",{className:"absolute inset-x-0 top-0 flex items-center justify-between p-5 font-mono text-[11px] uppercase tracking-[.16em] text-foreground drop-shadow-md",children:[a.jsxs("span",{children:[e("hero.portrait")," / 001"]}),a.jsx("span",{className:"rounded-full border border-white/25 bg-black/25 px-3 py-1.5 backdrop-blur-md",children:"Hai IT"})]}),a.jsxs("div",{className:"absolute inset-x-0 bottom-0 p-5 md:p-7",children:[a.jsx("div",{className:"mb-5 flex flex-wrap gap-2",children:r.map(i=>a.jsx("span",{className:"rounded-full border border-white/20 bg-background/65 px-3 py-1.5 font-mono text-[11px] font-medium uppercase tracking-wider text-foreground backdrop-blur-md",children:i},i))}),a.jsxs("div",{className:"border-t border-white/20 pt-5",children:[a.jsx("p",{className:"text-3xl font-semibold md:text-4xl",children:ae.name}),a.jsxs("div",{className:"mt-3 flex flex-wrap items-center justify-between gap-3 font-mono text-xs uppercase tracking-wider text-foreground/80",children:[a.jsx("span",{children:ae.title}),a.jsxs("span",{className:"flex items-center gap-1.5",children:[a.jsx(Lf,{className:"h-3 w-3 text-primary"})," Vietnam"]})]}),a.jsxs("a",{href:ae.social.github,target:"_blank",rel:"noreferrer",className:"mt-5 flex items-center justify-between rounded-lg border border-white/20 bg-background/65 px-4 py-3 font-mono text-xs uppercase tracking-wider backdrop-blur-md transition-colors hover:border-primary hover:text-primary",children:[a.jsxs("span",{className:"flex items-center gap-2",children:[a.jsx(_r,{className:"h-3.5 w-3.5"})," github.com/haihttt974"]}),a.jsx($t,{className:"h-3.5 w-3.5"})]})]})]})]})]}),a.jsx("div",{className:"hero-marquee mt-7 overflow-hidden border-y border-border/70 py-3 font-mono text-[11px] uppercase tracking-[.18em] text-muted-foreground",children:a.jsx("div",{className:"hero-marquee-track flex w-max items-center gap-8",children:[...Array(2)].flatMap((i,o)=>(t==="vi"?["Hệ thống backend","Tư duy dữ liệu","Học tập công khai","Thực hành DevOps","Xây · Quan sát · Giải thích · Cải tiến"]:["Backend systems","Database thinking","Learning in public","DevOps practice","Build · Observe · Explain · Improve"]).map(s=>a.jsxs("span",{className:"flex items-center gap-8",children:[a.jsx("span",{children:s}),a.jsx("span",{className:"text-primary",children:"✦"})]},`${o}-${s}`)))})})]})]})},eS={initial:{opacity:0,y:10},animate:{opacity:1,y:0,transition:{duration:.38,ease:[.22,1,.36,1]}},exit:{opacity:0,y:-6,transition:{duration:.2,ease:[.4,0,1,1]}}},si={hidden:{},visible:{transition:{staggerChildren:.065,delayChildren:.04}}},ci={hidden:{opacity:0,y:18,scale:.985},visible:{opacity:1,y:0,scale:1,transition:{duration:.48,ease:[.22,1,.36,1]}}},Ms={hidden:{opacity:0,y:28},visible:{opacity:1,y:0,transition:{duration:.62,ease:[.22,1,.36,1]}}},li={once:!0,amount:.16},tS=()=>{const{t:e}=Ne(),t=qn();return a.jsx(xe.section,{className:"border-b border-border/70 bg-card/25 py-20 md:py-28",variants:t?void 0:Ms,initial:t?!1:"hidden",whileInView:"visible",viewport:li,children:a.jsxs("div",{className:"container mx-auto px-4",children:[a.jsxs("div",{className:"mb-10 max-w-3xl",children:[a.jsx("p",{className:"eyebrow mb-4",children:e("home.map.eyebrow")}),a.jsxs("h2",{className:"text-4xl md:text-6xl",children:[e("home.map.title1")," ",a.jsx("span",{className:"text-gradient",children:e("home.map.title2")})]}),a.jsx("p",{className:"mt-5 max-w-xl text-muted-foreground",children:e("home.map.desc")})]}),a.jsx(xe.div,{className:"grid border-l border-t border-border/70 md:grid-cols-2 lg:grid-cols-3",variants:t?void 0:si,children:Ls.map((n,r)=>a.jsx(xe.div,{variants:t?void 0:ci,children:a.jsxs(be,{to:`/blog?category=${n.id}`,className:"group block min-h-56 border-b border-r border-border/70 bg-background/30 p-6 transition-colors hover:bg-primary/[.04]",children:[a.jsxs("div",{className:"flex items-start justify-between",children:[a.jsxs("span",{className:"font-mono text-xs font-medium text-primary",children:["MAP / 0",r+1]}),a.jsx($t,{className:"h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary"})]}),a.jsx("h3",{className:"mt-12 text-xl group-hover:text-primary",children:e(`category.${n.id}`)}),a.jsx("p",{className:"mt-3 text-sm leading-relaxed text-muted-foreground",children:n.description})]})},n.id))})]})})},nS={id:"understanding-solid-principles",title:"Understanding SOLID Principles in Modern Software Development",titleVi:"Hiểu đúng SOLID trong phát triển phần mềm hiện đại",excerpt:"A practical introduction to SOLID principles with TypeScript-oriented examples and guidance on when to apply them.",excerptVi:"Hướng dẫn thực tế về SOLID cùng ví dụ TypeScript và cách áp dụng có chọn lọc trong dự án.",content:`# Understanding SOLID Principles in Modern Software Development

SOLID is a set of object-oriented design principles that helps developers manage change. The point is not to add interfaces everywhere or split every class into tiny pieces. The point is to reduce the cost of modifying software when requirements change.

In modern applications, SOLID is still useful, but it should be applied pragmatically. A small feature does not need a heavy abstraction. A rule that changes often, however, benefits from clear boundaries.

## What problem does this solve?

Software becomes hard to change when one module has too many responsibilities, when new behavior requires editing many existing files, or when high-level business logic depends directly on low-level details such as databases, HTTP clients, or file systems.

SOLID gives names to common design problems:

- A class has too many reasons to change.
- Adding a new case breaks old logic.
- A subtype cannot safely replace its parent type.
- A module depends on methods it does not use.
- Business rules depend directly on infrastructure.

These problems are not theoretical. They appear in services, UI components, API clients, repositories, and background jobs.

## Core concepts

**Single Responsibility Principle** means a module should have one main reason to change. A service that validates input, calculates price, writes to a database, and sends email probably has mixed responsibilities.

**Open/Closed Principle** means code should be open for extension but closed for risky modification. This usually means designing extension points where change is expected.

**Liskov Substitution Principle** means a subtype should behave consistently with the contract of its base type.

**Interface Segregation Principle** means consumers should not depend on methods they do not need.

**Dependency Inversion Principle** means high-level rules should depend on abstractions, not concrete infrastructure.

## Practical example

Consider a notification flow. A direct implementation is simple but tightly coupled:

\`\`\`ts
class OrderService {
  async confirmOrder(order: Order) {
    await saveOrder(order);
    await sendEmail(order.customerEmail, "Your order is confirmed");
  }
}
\`\`\`

This is fine for a small case. But if the system later needs email, SMS, and in-app notifications, the service will keep changing. A boundary makes the changing part explicit:

\`\`\`ts
interface NotificationChannel {
  send(message: NotificationMessage): Promise<void>;
}

class OrderService {
  constructor(private readonly notifications: NotificationChannel) {}

  async confirmOrder(order: Order) {
    await saveOrder(order);
    await this.notifications.send({
      recipient: order.customerEmail,
      subject: "Order confirmed",
      body: "Your order is confirmed",
    });
  }
}
\`\`\`

Now the order rule does not know whether the message is sent by email, SMS, or another channel. The abstraction is useful because notification behavior is likely to vary.

## Common mistakes

- **Creating abstractions before change is real.** SOLID should reduce cost, not create ceremony.
- **Using one interface per class without purpose.** An interface is useful when it represents a boundary or variation.
- **Splitting code too aggressively.** Too many tiny files can make simple behavior harder to follow.
- **Ignoring data flow.** SOLID does not replace clear input, output, and error handling.
- **Treating principles as rules.** They are design tools, not laws.

## Best practices

- Start with simple code, then extract boundaries around real change.
- Keep business rules independent from infrastructure where practical.
- Use interfaces for behavior that has multiple implementations or needs testing at a boundary.
- Keep classes and functions focused on one responsibility.
- Prefer composition over inheritance for most application logic.
- Review whether an abstraction makes change easier or only makes code longer.

## When to use and when to avoid

Use SOLID when code has business rules, integrations, multiple implementations, or areas likely to change. It is useful in services, domain logic, payment flows, notification systems, and API clients.

Avoid applying SOLID mechanically to every small function. A simple data mapper does not always need an interface. A small script does not need a full architecture. Design should match the cost of change.

## Summary

SOLID is most valuable when it helps the codebase absorb change without becoming fragile.

- Use SRP to keep responsibilities focused.
- Use OCP when behavior needs extension.
- Use LSP to keep subtype contracts honest.
- Use ISP to avoid oversized interfaces.
- Use DIP to keep business rules away from infrastructure details.
- Apply the principles where they reduce real complexity.`,contentVi:`# Hiểu đúng SOLID trong phát triển phần mềm hiện đại

SOLID là một nhóm nguyên tắc thiết kế hướng đối tượng giúp developer quản lý thay đổi. Mục tiêu không phải là thêm interface ở khắp nơi hoặc chia mọi class thành nhiều mảnh nhỏ. Mục tiêu là giảm chi phí sửa phần mềm khi yêu cầu thay đổi.

Trong ứng dụng hiện đại, SOLID vẫn hữu ích, nhưng cần áp dụng thực tế. Một tính năng nhỏ không cần abstraction nặng. Nhưng một rule thường xuyên thay đổi sẽ hưởng lợi từ ranh giới rõ ràng.

## Chủ đề này giải quyết vấn đề gì?

Phần mềm trở nên khó thay đổi khi một module có quá nhiều trách nhiệm, khi thêm behavior mới buộc phải sửa nhiều file cũ hoặc khi business logic cấp cao phụ thuộc trực tiếp vào chi tiết cấp thấp như database, HTTP client hoặc file system.

SOLID đặt tên cho các vấn đề thiết kế thường gặp:

- Một class có quá nhiều lý do để thay đổi.
- Thêm case mới làm hỏng logic cũ.
- Subtype không thể thay thế parent type một cách an toàn.
- Module phụ thuộc vào method nó không dùng.
- Business rule phụ thuộc trực tiếp vào hạ tầng.

Những vấn đề này không chỉ là lý thuyết. Chúng xuất hiện trong service, UI component, API client, repository và background job.

## Các ý tưởng cốt lõi

**Single Responsibility Principle** nghĩa là một module nên có một lý do chính để thay đổi. Một service vừa validate input, tính giá, ghi database và gửi email thường đang trộn trách nhiệm.

**Open/Closed Principle** nghĩa là code nên mở để mở rộng nhưng đóng với việc sửa đổi rủi ro. Điều này thường có nghĩa là thiết kế điểm mở rộng ở nơi thay đổi có khả năng xảy ra.

**Liskov Substitution Principle** nghĩa là subtype phải hành xử nhất quán với contract của base type.

**Interface Segregation Principle** nghĩa là consumer không nên phụ thuộc vào method nó không cần.

**Dependency Inversion Principle** nghĩa là rule cấp cao nên phụ thuộc vào abstraction, không phụ thuộc trực tiếp vào hạ tầng cụ thể.

## Ví dụ thực tế

Hãy xét một luồng gửi thông báo. Cách viết trực tiếp đơn giản nhưng coupling cao:

\`\`\`ts
class OrderService {
  async confirmOrder(order: Order) {
    await saveOrder(order);
    await sendEmail(order.customerEmail, "Your order is confirmed");
  }
}
\`\`\`

Cách này ổn với trường hợp nhỏ. Nhưng nếu hệ thống sau này cần email, SMS và in-app notification, service sẽ liên tục phải thay đổi. Một boundary làm phần thay đổi trở nên rõ ràng hơn:

\`\`\`ts
interface NotificationChannel {
  send(message: NotificationMessage): Promise<void>;
}

class OrderService {
  constructor(private readonly notifications: NotificationChannel) {}

  async confirmOrder(order: Order) {
    await saveOrder(order);
    await this.notifications.send({
      recipient: order.customerEmail,
      subject: "Order confirmed",
      body: "Your order is confirmed",
    });
  }
}
\`\`\`

Bây giờ rule xác nhận đơn hàng không cần biết message được gửi bằng email, SMS hay kênh khác. Abstraction này hữu ích vì notification là phần có khả năng thay đổi.

## Lỗi thường gặp

- **Tạo abstraction trước khi thay đổi là thật.** SOLID nên giảm chi phí, không tạo nghi thức.
- **Tạo một interface cho mỗi class mà không có mục đích.** Interface hữu ích khi nó đại diện cho boundary hoặc variation.
- **Chia code quá mạnh.** Quá nhiều file nhỏ có thể làm hành vi đơn giản khó theo dõi hơn.
- **Bỏ qua data flow.** SOLID không thay thế input, output và error handling rõ ràng.
- **Xem nguyên tắc như luật cứng.** Chúng là công cụ thiết kế, không phải luật bất biến.

## Best practices

- Bắt đầu bằng code đơn giản, rồi tách boundary quanh thay đổi thật.
- Giữ business rule độc lập với hạ tầng khi hợp lý.
- Dùng interface cho behavior có nhiều implementation hoặc cần test ở boundary.
- Giữ class và function tập trung vào một trách nhiệm.
- Ưu tiên composition hơn inheritance cho phần lớn application logic.
- Review abstraction xem nó làm thay đổi dễ hơn hay chỉ làm code dài hơn.

## Khi nào nên dùng và khi nào nên tránh

Dùng SOLID khi code có business rule, integration, nhiều implementation hoặc vùng có khả năng thay đổi. Nó hữu ích trong service, domain logic, payment flow, notification system và API client.

Tránh áp dụng SOLID máy móc cho mọi function nhỏ. Một data mapper đơn giản không phải lúc nào cũng cần interface. Một script nhỏ không cần kiến trúc đầy đủ. Thiết kế nên tương xứng với chi phí thay đổi.

## Tóm tắt

SOLID có giá trị nhất khi nó giúp codebase hấp thụ thay đổi mà không trở nên mong manh.

- Dùng SRP để giữ trách nhiệm tập trung.
- Dùng OCP khi behavior cần mở rộng.
- Dùng LSP để contract của subtype trung thực.
- Dùng ISP để tránh interface quá lớn.
- Dùng DIP để business rule không phụ thuộc chi tiết hạ tầng.
- Áp dụng nguyên tắc ở nơi chúng giảm độ phức tạp thật.`,category:"patterns",tags:["SOLID","OOP","TypeScript","Clean Code"],date:"2026-05-31",readTime:"5 min",readTimeVi:"5 phút",featured:!0},rS={id:"react-performance-optimization",title:"React Performance Optimization: Measure Before You Optimize",titleVi:"Tối ưu hiệu năng React: Đo lường trước khi tối ưu",excerpt:"A practical note on finding React performance bottlenecks with profiling tools before applying optimization patterns.",excerptVi:"Ghi chú thực tế về cách tìm điểm nghẽn hiệu năng React bằng profiler trước khi áp dụng các mẫu tối ưu.",content:`# React Performance Optimization: Measure Before You Optimize

React performance work should start with evidence. It is tempting to add \`React.memo\`, \`useMemo\`, and \`useCallback\` whenever a component feels complex, but these tools are not free. They add mental overhead and only help when the actual bottleneck is unnecessary rendering or expensive calculation.

A better habit is to measure first, identify the slow interaction, then apply the smallest optimization that solves the measured problem.

## What problem does this solve?

Frontend performance affects how responsive an application feels. A slow search input, a table that freezes while filtering, or a dashboard that re-renders every card after one small state change can make the product feel unreliable.

React optimization solves specific problems:

- Avoiding unnecessary re-renders.
- Reducing expensive calculations during render.
- Splitting large UI work into smaller pieces.
- Rendering only visible items in long lists.
- Avoiding unnecessary network and state updates.

The important word is specific. If you cannot name the slow interaction, optimization becomes guesswork.

## Core concepts

The first concept is **render cost**. A render is not automatically bad. React is designed to render often. The issue appears when rendering does too much work or triggers many child components unnecessarily.

The second concept is **referential stability**. Objects, arrays, and functions created inline get new references on every render. This matters when child components rely on memoization.

The third concept is **work avoidance**. Sometimes the best optimization is not memoization but doing less work: fewer derived calculations, smaller component boundaries, pagination, virtualization, or moving expensive work away from the main render path.

## Practical example

Consider a product list that filters and sorts items on every render:

\`\`\`js
function ProductList({ products, query }) {
  const visibleProducts = products
    .filter((product) => product.name.toLowerCase().includes(query.toLowerCase()))
    .sort((a, b) => b.rating - a.rating);

  return visibleProducts.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));
}
\`\`\`

This may be fine for a small list. If profiling shows this calculation is expensive, memoize the derived result:

\`\`\`js
function ProductList({ products, query }) {
  const visibleProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return products
      .filter((product) => product.name.toLowerCase().includes(normalizedQuery))
      .sort((a, b) => b.rating - a.rating);
  }, [products, query]);

  return visibleProducts.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));
}
\`\`\`

This is useful only if \`products\` and \`query\` are stable enough and the calculation is actually expensive. If the list has thousands of rows, virtualization may matter more than \`useMemo\`.

## Common mistakes

- **Optimizing before measuring.** This often adds complexity without improving the user experience.
- **Using \`useCallback\` everywhere.** Stable functions help only when a child depends on reference equality.
- **Memoizing cheap calculations.** The memoization itself has a cost.
- **Ignoring list size.** Rendering thousands of DOM nodes is often the real issue.
- **Passing unstable object props.** A memoized child still re-renders if it receives a new object every time.
- **Focusing only on React.** Bundle size, network latency, images, and CSS can also be bottlenecks.

## Best practices

- Use React Profiler to identify which component renders and why.
- Measure the slow user interaction, not only the page load.
- Keep state as local as practical so unrelated components do not re-render.
- Split large components when their state changes affect too much UI.
- Use \`React.memo\` for components that are expensive and receive stable props.
- Use \`useMemo\` for expensive derived values.
- Use virtualization for long lists.
- Reduce bundle size with route-level code splitting.

## When to use and when to avoid

Use optimization when a real interaction is slow, when profiler data shows repeated expensive renders, or when a large list creates too much DOM work.

Avoid optimization when the component is simple and the bottleneck has not been measured. Premature optimization can make code harder to understand and harder to change.

## Summary

React performance work should be practical and evidence-based.

- Measure before optimizing.
- Use memoization only where it solves a real render problem.
- Keep state close to where it is needed.
- Virtualize large lists.
- Remember that performance issues can come from network, bundle size, images, or CSS, not only React.`,contentVi:`# Tối ưu hiệu năng React: Đo lường trước khi tối ưu

Tối ưu hiệu năng React nên bắt đầu bằng dữ liệu. Rất dễ thêm \`React.memo\`, \`useMemo\` và \`useCallback\` mỗi khi một component trông phức tạp, nhưng các công cụ này không miễn phí. Chúng làm code khó đọc hơn và chỉ thật sự hữu ích khi bottleneck là render không cần thiết hoặc tính toán đắt trong lúc render.

Thói quen tốt hơn là đo trước, xác định interaction nào chậm, rồi áp dụng tối ưu nhỏ nhất giải quyết đúng vấn đề đã đo được.

## Chủ đề này giải quyết vấn đề gì?

Hiệu năng frontend ảnh hưởng trực tiếp đến cảm giác phản hồi của ứng dụng. Một ô tìm kiếm bị lag, một bảng bị đứng khi filter hoặc dashboard render lại toàn bộ card sau một thay đổi nhỏ đều làm sản phẩm kém tin cậy.

Tối ưu React giải quyết các vấn đề cụ thể:

- Tránh re-render không cần thiết.
- Giảm tính toán đắt trong lúc render.
- Chia nhỏ công việc UI.
- Chỉ render item đang hiển thị trong list lớn.
- Tránh update network và state không cần thiết.

Từ quan trọng là cụ thể. Nếu không gọi tên được interaction nào đang chậm, tối ưu chỉ là đoán.

## Các ý tưởng cốt lõi

Ý tưởng đầu tiên là **chi phí render**. Render không tự động là xấu. React được thiết kế để render thường xuyên. Vấn đề xuất hiện khi render làm quá nhiều việc hoặc kéo theo nhiều child component render không cần thiết.

Ý tưởng thứ hai là **referential stability**. Object, array và function tạo inline sẽ có reference mới ở mỗi render. Điều này quan trọng khi child component dựa vào memoization.

Ý tưởng thứ ba là **tránh làm việc không cần thiết**. Đôi khi tối ưu tốt nhất không phải memoization mà là làm ít việc hơn: giảm derived calculation, chia boundary component, phân trang, virtualization hoặc đưa việc nặng ra khỏi render path.

## Ví dụ thực tế

Hãy xét một product list filter và sort item ở mỗi render:

\`\`\`js
function ProductList({ products, query }) {
  const visibleProducts = products
    .filter((product) => product.name.toLowerCase().includes(query.toLowerCase()))
    .sort((a, b) => b.rating - a.rating);

  return visibleProducts.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));
}
\`\`\`

Với list nhỏ, đoạn này có thể hoàn toàn ổn. Nếu profiler cho thấy calculation này đắt, hãy memoize kết quả đã derive:

\`\`\`js
function ProductList({ products, query }) {
  const visibleProducts = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return products
      .filter((product) => product.name.toLowerCase().includes(normalizedQuery))
      .sort((a, b) => b.rating - a.rating);
  }, [products, query]);

  return visibleProducts.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));
}
\`\`\`

Cách này chỉ hữu ích nếu \`products\` và \`query\` đủ ổn định, và calculation thật sự tốn chi phí. Nếu list có hàng nghìn dòng, virtualization có thể quan trọng hơn \`useMemo\`.

## Lỗi thường gặp

- **Tối ưu trước khi đo.** Cách này thường làm code phức tạp hơn mà không cải thiện trải nghiệm.
- **Dùng \`useCallback\` khắp nơi.** Function ổn định chỉ hữu ích khi child phụ thuộc vào reference equality.
- **Memoize phép tính rẻ.** Bản thân memoization cũng có chi phí.
- **Bỏ qua kích thước list.** Render hàng nghìn DOM node thường mới là vấn đề thật.
- **Truyền object prop không ổn định.** Child đã memo vẫn render lại nếu nhận object mới mỗi lần.
- **Chỉ tập trung vào React.** Bundle size, network latency, ảnh và CSS cũng có thể là bottleneck.

## Best practices

- Dùng React Profiler để biết component nào render và vì sao.
- Đo interaction chậm, không chỉ page load.
- Giữ state cục bộ nhất có thể để component không liên quan không render lại.
- Chia component lớn khi state change ảnh hưởng quá nhiều UI.
- Dùng \`React.memo\` cho component đắt và nhận props ổn định.
- Dùng \`useMemo\` cho derived value tốn chi phí.
- Dùng virtualization cho list dài.
- Giảm bundle size bằng code splitting theo route.

## Khi nào nên dùng và khi nào nên tránh

Dùng tối ưu khi một interaction thật sự chậm, khi profiler cho thấy render đắt lặp lại hoặc khi list lớn tạo quá nhiều DOM work.

Tránh tối ưu khi component đơn giản và bottleneck chưa được đo. Tối ưu quá sớm có thể làm code khó hiểu và khó thay đổi hơn.

## Tóm tắt

Tối ưu React nên thực tế và dựa trên dữ liệu.

- Đo trước khi tối ưu.
- Chỉ dùng memoization khi nó giải quyết vấn đề render thật.
- Giữ state gần nơi cần dùng.
- Virtualize list lớn.
- Nhớ rằng vấn đề hiệu năng có thể đến từ network, bundle size, ảnh hoặc CSS, không chỉ React.`,category:"frameworks",tags:["React","Performance","JavaScript","Frontend"],date:"2026-05-24",readTime:"5 min",readTimeVi:"5 phút",featured:!0},iS={id:"typescript-advanced-types",title:"Understanding TypeScript Advanced Types",titleVi:"Hiểu các kiểu nâng cao trong TypeScript",excerpt:"A practical introduction to conditional types, mapped types, template literal types, and type inference in TypeScript.",excerptVi:"Giới thiệu thực tế về conditional type, mapped type, template literal type và cơ chế suy luận kiểu trong TypeScript.",content:`# Understanding TypeScript Advanced Types

TypeScript advanced types are useful when they make relationships explicit. They can model how data changes from one shape to another, enforce valid keys, and reduce duplicated type definitions. The goal is not to write clever types. The goal is to make incorrect usage harder.

Advanced types become practical when a codebase has shared API responses, form states, domain models, or reusable utilities.

## What problem does this solve?

Simple interfaces are enough for many cases. But some rules are based on relationships:

- If a field is optional in one context, it may be required in another.
- If a route name changes, related parameters should change too.
- If an API response has a success state and an error state, code should handle both.
- If a model changes, derived DTO types should update automatically.

Advanced types help express these relationships at compile time instead of relying only on documentation.

## Core concepts

**Conditional types** choose a type based on another type. They are useful for creating utilities that behave differently depending on input.

**Mapped types** create a new type by iterating over keys of an existing type. They are useful for transformations such as readonly models, partial updates, or form error maps.

**Template literal types** build string types from other string types. They can help keep event names, route keys, or translation keys consistent.

**Inference** lets TypeScript extract types from function signatures, arrays, promises, and objects.

## Practical example

Imagine a form system that needs errors for each field in a model:

\`\`\`ts
type FieldErrors<T> = {
  [Key in keyof T]?: string;
};

type RegisterUserForm = {
  email: string;
  password: string;
  displayName: string;
};

const errors: FieldErrors<RegisterUserForm> = {
  email: "Email is invalid",
};
\`\`\`

If the form adds a field, the error type automatically knows about it. This removes duplicated manual types.

Conditional types can model API results:

\`\`\`ts
type ApiResult<T> =
  | { ok: true; data: T }
  | { ok: false; error: string };

type UnwrapResult<T> = T extends { ok: true; data: infer Data }
  ? Data
  : never;
\`\`\`

The \`infer\` keyword extracts the success data type from a result. This is useful in shared helpers, but it should be used where it improves clarity.

## Common mistakes

- **Making types too clever.** If a type takes longer to understand than the runtime code, it may be overdesigned.
- **Replacing validation with types.** TypeScript does not validate external data at runtime.
- **Using \`any\` inside utility types.** This can erase the safety the utility was supposed to provide.
- **Building generic utilities too early.** Start with concrete types, then extract patterns when duplication is real.
- **Ignoring compiler messages.** Advanced types are only useful if the error messages remain understandable.

## Best practices

- Use advanced types to model real relationships, not to impress readers.
- Prefer small utility types with clear names.
- Keep public types easier to read than internal helper types.
- Pair TypeScript types with runtime validation for API, local storage, and user input.
- Add examples near complex utility types.
- Avoid exporting overly generic helpers unless several modules actually need them.

## When to use and when to avoid

Use advanced types when duplicated types drift apart, when API states need precise modeling, or when reusable utilities preserve relationships between input and output.

Avoid them when a simple interface is enough. A straightforward type is usually better than a generic utility that only handles one case.

## Summary

Advanced TypeScript types are most useful when they protect real assumptions in the codebase.

- Use mapped types for key-based transformations.
- Use conditional types for input-output relationships.
- Use template literal types for structured string keys.
- Keep utility types readable.
- Validate external data at runtime.`,contentVi:`# Hiểu các kiểu nâng cao trong TypeScript

Kiểu nâng cao trong TypeScript hữu ích khi chúng làm rõ mối quan hệ giữa các phần dữ liệu. Chúng có thể mô hình hóa cách dữ liệu chuyển từ shape này sang shape khác, ép key hợp lệ và giảm việc lặp type thủ công. Mục tiêu không phải là viết type thật phức tạp. Mục tiêu là làm cho cách dùng sai khó xảy ra hơn.

Advanced types trở nên thực tế khi codebase có API response dùng chung, form state, domain model hoặc utility tái sử dụng.

## Chủ đề này giải quyết vấn đề gì?

Interface đơn giản là đủ cho nhiều trường hợp. Nhưng một số rule dựa trên quan hệ:

- Một field optional ở ngữ cảnh này có thể required ở ngữ cảnh khác.
- Khi route name thay đổi, params liên quan cũng nên thay đổi theo.
- Nếu API response có success state và error state, code nên xử lý cả hai.
- Nếu model thay đổi, DTO type dẫn xuất nên cập nhật tự động.

Advanced types giúp diễn đạt các quan hệ này tại compile time thay vì chỉ dựa vào tài liệu.

## Các ý tưởng cốt lõi

**Conditional type** chọn kiểu dựa trên một kiểu khác. Nó hữu ích khi tạo utility có hành vi khác nhau theo input.

**Mapped type** tạo kiểu mới bằng cách duyệt qua key của kiểu hiện có. Nó hữu ích cho readonly model, partial update hoặc map lỗi form.

**Template literal type** tạo string type từ các string type khác. Nó giúp giữ event name, route key hoặc translation key nhất quán.

**Inference** cho phép TypeScript rút ra type từ function signature, array, promise và object.

## Ví dụ thực tế

Hãy xét một form system cần lưu lỗi cho từng field trong model:

\`\`\`ts
type FieldErrors<T> = {
  [Key in keyof T]?: string;
};

type RegisterUserForm = {
  email: string;
  password: string;
  displayName: string;
};

const errors: FieldErrors<RegisterUserForm> = {
  email: "Email is invalid",
};
\`\`\`

Nếu form thêm field mới, error type tự động biết field đó. Điều này giảm việc viết type thủ công bị lặp.

Conditional type có thể mô hình hóa API result:

\`\`\`ts
type ApiResult<T> =
  | { ok: true; data: T }
  | { ok: false; error: string };

type UnwrapResult<T> = T extends { ok: true; data: infer Data }
  ? Data
  : never;
\`\`\`

Từ khóa \`infer\` rút ra data type trong nhánh success. Cách này hữu ích trong shared helper, nhưng chỉ nên dùng khi nó làm code rõ hơn.

## Lỗi thường gặp

- **Làm type quá thông minh.** Nếu type khó hiểu hơn runtime code, có thể nó đã bị overdesign.
- **Thay runtime validation bằng type.** TypeScript không validate dữ liệu bên ngoài lúc runtime.
- **Dùng \`any\` trong utility type.** Điều này có thể xóa mất safety mà utility muốn tạo ra.
- **Tạo generic utility quá sớm.** Hãy bắt đầu bằng type cụ thể, rồi tách pattern khi duplication là thật.
- **Bỏ qua compiler message.** Advanced types chỉ hữu ích nếu lỗi compiler vẫn dễ hiểu.

## Best practices

- Dùng advanced types để mô hình hóa quan hệ thật, không phải để gây ấn tượng.
- Ưu tiên utility type nhỏ và có tên rõ.
- Giữ public type dễ đọc hơn internal helper type.
- Kết hợp TypeScript type với runtime validation cho API, local storage và user input.
- Thêm ví dụ gần utility type phức tạp.
- Tránh export helper quá generic nếu chưa có nhiều module cần.

## Khi nào nên dùng và khi nào nên tránh

Dùng advanced types khi type bị lặp dễ lệch nhau, khi API state cần mô hình hóa chính xác hoặc khi utility tái sử dụng cần giữ quan hệ giữa input và output.

Tránh dùng khi interface đơn giản đã đủ. Một type trực tiếp thường tốt hơn generic utility chỉ phục vụ một trường hợp.

## Tóm tắt

Kiểu nâng cao trong TypeScript hữu ích nhất khi chúng bảo vệ các giả định thật trong codebase.

- Dùng mapped type cho chuyển đổi dựa trên key.
- Dùng conditional type cho quan hệ input-output.
- Dùng template literal type cho string key có cấu trúc.
- Giữ utility type dễ đọc.
- Validate dữ liệu bên ngoài ở runtime.`,category:"languages",tags:["TypeScript","Types","JavaScript"],date:"2026-05-22",readTime:"4 min",readTimeVi:"4 phút"},oS={id:"microservices-architecture",title:"Microservices Architecture Basics and Trade-offs",titleVi:"Nền tảng Microservices và các trade-off cần hiểu",excerpt:"A practical overview of when microservices help, what they cost, and which design concerns appear early.",excerptVi:"Tổng quan thực tế về khi nào microservices hữu ích, chi phí đi kèm và các vấn đề thiết kế cần biết sớm.",content:`# Microservices Architecture Basics and Trade-offs

Microservices are often presented as the natural next step for scalable systems, but they are not a shortcut to good architecture. They split an application into smaller services that can be developed, deployed, and scaled independently. That independence can be valuable, but it also introduces network calls, distributed data, observability needs, and operational complexity.

The practical question is not "Are microservices modern?" The better question is "Does this system need independent service boundaries badly enough to pay the cost?"

## What problem does this solve?

Microservices help when different parts of a system need different release cycles, scaling needs, ownership, or reliability boundaries. For example, payments, notifications, search, and reporting may evolve at different speeds and have different infrastructure requirements.

They also help teams work independently when the organization is large enough. A team can own a service, its data, its deployment pipeline, and its operational behavior.

But microservices do not automatically make code cleaner. If the domain boundaries are unclear, the result can become a distributed monolith: many services that still depend tightly on each other and must be deployed together.

## Core concepts

The most important concept is **service ownership**. A service should own a business capability, not just a technical layer. "Order Service" is usually more meaningful than "Database Service" or "Validation Service".

The second concept is **data ownership**. Sharing one database across many services often destroys independence. A service should own the data it needs to protect its invariants. Other services communicate through APIs, events, or read models.

The third concept is **communication trade-off**. Synchronous HTTP calls are simple but create runtime coupling. Events reduce direct coupling but make flow harder to trace. Neither style is perfect.

The fourth concept is **observability**. Once a request crosses service boundaries, logs from one process are not enough. You need correlation IDs, structured logs, metrics, and health checks.

## Practical example

A simple e-commerce system might begin as a modular monolith:

\`\`\`text
src/
  orders/
  payments/
  inventory/
  notifications/
\`\`\`

This structure keeps boundaries visible without adding network complexity. If payments later need separate compliance, deployment, or scaling, that module may become a separate service:

\`\`\`text
orders-service
payments-service
inventory-service
notifications-service
\`\`\`

The extraction should happen because the boundary already exists in the code and the operational need is real, not because the word microservice sounds better.

## Common mistakes

- **Splitting too early.** A small product often benefits more from a modular monolith.
- **Creating services around technical layers.** Services should map to business capabilities.
- **Sharing one database everywhere.** This keeps services coupled even if the code is separated.
- **Ignoring failure between services.** Every network call can timeout, retry, or partially fail.
- **Missing observability.** Debugging distributed systems without logs and traces becomes guesswork.
- **Using events without ownership.** Events should communicate facts, not become hidden commands.

## Best practices

- Start with clear modules before extracting services.
- Define ownership around business capabilities.
- Keep service APIs small and explicit.
- Prefer asynchronous events for facts that other services may react to.
- Add timeouts, retries, and idempotency to cross-service calls.
- Track correlation IDs across services.
- Document who owns each service, data store, and operational alert.

## When to use and when to avoid

Use microservices when independent deployment, team ownership, scaling, or reliability boundaries matter enough to justify the cost. They fit better when the domain is large and the team can operate distributed systems responsibly.

Avoid microservices when the product is still small, the domain boundaries are unclear, or the team does not have monitoring, deployment automation, and incident handling in place. In that case, a modular monolith is usually more practical.

## Summary

Microservices are an architectural trade-off, not a default target.

- Use them for independent ownership and deployment.
- Keep boundaries based on business capabilities.
- Avoid shared databases between services.
- Plan for network failure.
- Invest in observability before the system grows.
- Prefer a modular monolith until the need for distribution is clear.`,contentVi:`# Nền tảng Microservices và các trade-off cần hiểu

Microservices thường được xem như bước tiếp theo của hệ thống có khả năng mở rộng, nhưng nó không phải đường tắt để có kiến trúc tốt. Microservices chia ứng dụng thành các service nhỏ hơn, có thể phát triển, triển khai và scale độc lập. Sự độc lập này có giá trị, nhưng đi kèm network call, dữ liệu phân tán, nhu cầu observability và độ phức tạp vận hành.

Câu hỏi thực tế không phải là "Microservices có hiện đại không?" Câu hỏi đúng hơn là "Hệ thống này có thật sự cần ranh giới service độc lập đến mức đáng trả chi phí đó không?"

## Chủ đề này giải quyết vấn đề gì?

Microservices hữu ích khi các phần của hệ thống có release cycle, nhu cầu scale, quyền sở hữu hoặc ranh giới độ tin cậy khác nhau. Ví dụ payment, notification, search và reporting có thể phát triển với tốc độ khác nhau và cần hạ tầng khác nhau.

Nó cũng giúp các team làm việc độc lập khi tổ chức đủ lớn. Một team có thể sở hữu một service, dữ liệu của nó, pipeline deploy và hành vi vận hành.

Nhưng microservices không tự động làm code sạch hơn. Nếu ranh giới domain không rõ, hệ thống dễ trở thành distributed monolith: nhiều service nhưng vẫn phụ thuộc chặt và phải deploy cùng nhau.

## Các ý tưởng cốt lõi

Ý tưởng quan trọng nhất là **quyền sở hữu service**. Một service nên sở hữu một năng lực nghiệp vụ, không chỉ một tầng kỹ thuật. "Order Service" thường có ý nghĩa hơn "Database Service" hoặc "Validation Service".

Ý tưởng thứ hai là **quyền sở hữu dữ liệu**. Dùng chung một database cho nhiều service thường phá vỡ sự độc lập. Một service nên sở hữu dữ liệu cần thiết để bảo vệ invariant của nó. Service khác giao tiếp qua API, event hoặc read model.

Ý tưởng thứ ba là **trade-off giao tiếp**. HTTP sync đơn giản nhưng tạo coupling lúc runtime. Event giảm coupling trực tiếp nhưng làm luồng xử lý khó trace hơn. Không có lựa chọn nào hoàn hảo.

Ý tưởng thứ tư là **observability**. Khi request đi qua nhiều service, log của một process là không đủ. Bạn cần correlation ID, structured log, metrics và health check.

## Ví dụ thực tế

Một hệ thống e-commerce đơn giản có thể bắt đầu bằng modular monolith:

\`\`\`text
src/
  orders/
  payments/
  inventory/
  notifications/
\`\`\`

Cấu trúc này giữ ranh giới rõ mà chưa thêm độ phức tạp network. Nếu payment sau này cần compliance, deployment hoặc scaling riêng, module đó có thể được tách thành service:

\`\`\`text
orders-service
payments-service
inventory-service
notifications-service
\`\`\`

Việc tách nên xảy ra vì boundary đã rõ trong code và nhu cầu vận hành là thật, không phải vì từ microservice nghe chuyên nghiệp hơn.

## Lỗi thường gặp

- **Tách quá sớm.** Sản phẩm nhỏ thường hưởng lợi nhiều hơn từ modular monolith.
- **Tạo service theo tầng kỹ thuật.** Service nên map với năng lực nghiệp vụ.
- **Dùng chung database khắp nơi.** Cách này giữ coupling dù code đã tách.
- **Bỏ qua lỗi giữa service.** Mọi network call đều có thể timeout, retry hoặc fail một phần.
- **Thiếu observability.** Debug hệ thống phân tán thiếu log và trace gần như là đoán mò.
- **Dùng event nhưng không rõ ownership.** Event nên truyền sự kiện đã xảy ra, không nên trở thành command ẩn.

## Best practices

- Bắt đầu bằng module rõ ràng trước khi tách service.
- Định nghĩa ownership theo năng lực nghiệp vụ.
- Giữ API của service nhỏ và rõ.
- Dùng event async cho các sự kiện mà service khác có thể phản ứng.
- Thêm timeout, retry và idempotency cho call giữa service.
- Theo dõi correlation ID xuyên suốt các service.
- Ghi rõ ai sở hữu service, data store và alert vận hành.

## Khi nào nên dùng và khi nào nên tránh

Dùng microservices khi independent deployment, team ownership, scaling hoặc reliability boundary đủ quan trọng để đáng trả chi phí. Nó phù hợp hơn khi domain lớn và team có khả năng vận hành hệ thống phân tán.

Tránh microservices khi sản phẩm còn nhỏ, boundary domain chưa rõ hoặc team chưa có monitoring, deployment automation và quy trình xử lý sự cố. Khi đó, modular monolith thường thực tế hơn.

## Tóm tắt

Microservices là một trade-off kiến trúc, không phải mục tiêu mặc định.

- Dùng khi cần ownership và deployment độc lập.
- Đặt boundary theo năng lực nghiệp vụ.
- Tránh database dùng chung giữa các service.
- Chuẩn bị cho lỗi network.
- Đầu tư observability trước khi hệ thống lớn.
- Ưu tiên modular monolith cho đến khi nhu cầu phân tán thật sự rõ.`,category:"architecture",tags:["Microservices","Docker","Kubernetes","System Design"],date:"2026-05-26",readTime:"5 min",readTimeVi:"5 phút",featured:!0},aS={id:"clean-code-practices",title:"Writing Clean, Maintainable Code",titleVi:"Viết mã sạch và dễ bảo trì",excerpt:"Practical clean code habits that make software easier to read, change, test, and review without adding unnecessary abstraction.",excerptVi:"Các thói quen clean code thực tế giúp phần mềm dễ đọc, dễ sửa, dễ kiểm thử và dễ review mà không tạo abstraction không cần thiết.",content:`# Writing Clean, Maintainable Code

Clean code is not about making code look clever. It is about reducing the cost of understanding and changing software. A codebase becomes easier to maintain when names reveal intent, functions have clear boundaries, errors are handled deliberately, and business rules are not hidden behind accidental complexity.

The practical question is simple: can another developer open this file, understand the rule, and change it without guessing?

## What problem does this solve?

Most software does not become hard to maintain because one function is imperfect. It becomes hard because small unclear decisions accumulate. A vague variable name forces the reader to inspect surrounding code. A large function mixes validation, calculation, persistence, and formatting. A helper tries to be reusable too early and hides the actual rule.

Clean code solves the communication problem. It makes code easier to review, test, debug, and extend. It also reduces the chance that a small change creates a bug in an unrelated feature.

## Core concepts

Good names are the first layer of design. A name like \`isEligibleForDiscount\` carries more meaning than \`check\` or \`flag\`. It tells the reader what decision is being made.

Functions should operate at one level of abstraction. If a method validates input, calculates a price, writes to a database, and sends a notification, it probably has too many reasons to change.

Clean code also depends on explicit boundaries. Business rules should not be tightly coupled to UI components, HTTP handlers, SQL details, or framework code. When the rule is isolated, tests become simpler and changes are safer.

## Practical example

This version mixes validation, calculation, and formatting:

\`\`\`ts
function handleOrder(order: Order) {
  if (!order.items || order.items.length === 0) {
    throw new Error("Invalid order");
  }

  let total = 0;
  for (const item of order.items) {
    total += item.price * item.quantity;
  }

  if (order.customer.isVip) {
    total = total * 0.9;
  }

  return {
    id: order.id,
    total,
    label: \`\${order.customer.name} - \${total}\`,
  };
}
\`\`\`

A cleaner version names each decision:

\`\`\`ts
function buildOrderSummary(order: Order): OrderSummary {
  assertOrderHasItems(order);

  const subtotal = calculateSubtotal(order.items);
  const total = applyCustomerDiscount(subtotal, order.customer);

  return {
    id: order.id,
    total,
    label: formatOrderLabel(order.customer.name, total),
  };
}
\`\`\`

The second version is not shorter, but it is easier to scan. Each helper has a reason to exist because it names a business step.

## Common mistakes

- **Using vague names.** Names like \`data\`, \`item\`, \`temp\`, and \`process\` force the reader to infer meaning.
- **Extracting helpers too early.** A helper should clarify a real concept, not hide two lines of simple code.
- **Creating large utility files.** A generic \`utils.ts\` often becomes a drawer for unrelated behavior.
- **Mixing business logic with infrastructure.** Rules become harder to test when they depend directly on APIs, databases, or UI state.
- **Ignoring error paths.** Clean code should make failure behavior visible, not only the happy path.

## Best practices

- Prefer names that describe intent, not implementation.
- Keep functions focused on one level of abstraction.
- Extract helpers when they name a meaningful concept.
- Keep business rules close to the domain they describe.
- Write tests around rules that are easy to misunderstand.
- Remove dead code instead of leaving comments that explain old behavior.
- Use comments to explain why, not to repeat what the code already says.

## When to use and when to avoid

Use clean code practices every day, but apply them with judgment. It is worth spending time clarifying code that contains business rules, validation, permissions, money, data transformations, or error handling.

Avoid turning clean code into ceremony. A tiny script does not need five layers. A simple condition does not always need a class. If an abstraction does not make the code easier to understand or change, it is not helping.

## Summary

Clean code is practical communication. It helps the next reader understand what the system does and why.

- Name decisions clearly.
- Keep functions focused.
- Separate business rules from infrastructure.
- Test important rules.
- Prefer useful clarity over artificial abstraction.`,contentVi:`# Viết mã sạch và dễ bảo trì

Clean code không phải là viết code trông thông minh. Mục tiêu chính là giảm chi phí đọc hiểu và thay đổi phần mềm. Một codebase dễ bảo trì hơn khi tên gọi thể hiện ý định, hàm có ranh giới rõ, lỗi được xử lý có chủ đích và business rule không bị che bởi độ phức tạp ngẫu nhiên.

Câu hỏi thực tế là: một developer khác có thể mở file này, hiểu rule và sửa nó mà không phải đoán không?

## Chủ đề này giải quyết vấn đề gì?

Phần mềm thường không khó bảo trì chỉ vì một hàm viết chưa đẹp. Nó khó bảo trì vì nhiều quyết định nhỏ không rõ ràng tích lũy lại. Một tên biến mơ hồ buộc người đọc phải kiểm tra code xung quanh. Một hàm lớn trộn validation, tính toán, lưu database và format dữ liệu. Một helper được làm reusable quá sớm lại che mất rule thật sự.

Clean code giải quyết vấn đề giao tiếp trong code. Nó giúp code dễ review, dễ test, dễ debug và dễ mở rộng hơn. Nó cũng giảm khả năng một thay đổi nhỏ gây bug ở tính năng không liên quan.

## Các ý tưởng cốt lõi

Tên gọi tốt là lớp thiết kế đầu tiên. Một tên như \`isEligibleForDiscount\` có nhiều ý nghĩa hơn \`check\` hoặc \`flag\`. Nó cho người đọc biết quyết định nào đang được đưa ra.

Hàm nên hoạt động ở cùng một mức trừu tượng. Nếu một method vừa validate input, tính giá, ghi database và gửi thông báo, nó đang có quá nhiều lý do để thay đổi.

Clean code cũng cần ranh giới rõ. Business rule không nên phụ thuộc chặt vào UI component, HTTP handler, SQL detail hoặc framework code. Khi rule được tách rõ, test đơn giản hơn và thay đổi an toàn hơn.

## Ví dụ thực tế

Phiên bản này trộn validation, tính toán và format:

\`\`\`ts
function handleOrder(order: Order) {
  if (!order.items || order.items.length === 0) {
    throw new Error("Invalid order");
  }

  let total = 0;
  for (const item of order.items) {
    total += item.price * item.quantity;
  }

  if (order.customer.isVip) {
    total = total * 0.9;
  }

  return {
    id: order.id,
    total,
    label: \`\${order.customer.name} - \${total}\`,
  };
}
\`\`\`

Phiên bản sạch hơn đặt tên cho từng quyết định:

\`\`\`ts
function buildOrderSummary(order: Order): OrderSummary {
  assertOrderHasItems(order);

  const subtotal = calculateSubtotal(order.items);
  const total = applyCustomerDiscount(subtotal, order.customer);

  return {
    id: order.id,
    total,
    label: formatOrderLabel(order.customer.name, total),
  };
}
\`\`\`

Phiên bản thứ hai không nhất thiết ngắn hơn, nhưng dễ scan hơn. Mỗi helper có lý do tồn tại vì nó gọi tên một bước nghiệp vụ.

## Lỗi thường gặp

- **Dùng tên mơ hồ.** Những tên như \`data\`, \`item\`, \`temp\`, \`process\` buộc người đọc phải tự suy luận.
- **Tách helper quá sớm.** Helper nên làm rõ một khái niệm thật, không phải che đi hai dòng code đơn giản.
- **Tạo file utility quá lớn.** Một file \`utils.ts\` chung chung thường trở thành nơi chứa nhiều logic không liên quan.
- **Trộn business logic với hạ tầng.** Rule khó test hơn khi phụ thuộc trực tiếp vào API, database hoặc UI state.
- **Bỏ qua error path.** Clean code nên làm rõ hành vi khi lỗi xảy ra, không chỉ happy path.

## Best practices

- Ưu tiên tên gọi mô tả ý định, không chỉ mô tả cách làm.
- Giữ hàm tập trung vào một mức trừu tượng.
- Tách helper khi nó gọi tên một khái niệm có ý nghĩa.
- Giữ business rule gần với domain mà nó mô tả.
- Viết test cho những rule dễ bị hiểu nhầm.
- Xóa dead code thay vì để comment giải thích hành vi cũ.
- Dùng comment để giải thích lý do, không lặp lại điều code đã nói.

## Khi nào nên dùng và khi nào nên tránh

Nên áp dụng clean code hằng ngày, nhưng cần có phán đoán. Những đoạn chứa business rule, validation, phân quyền, tiền, chuyển đổi dữ liệu hoặc xử lý lỗi đáng được làm rõ kỹ hơn.

Tránh biến clean code thành nghi thức. Một script nhỏ không cần năm lớp kiến trúc. Một điều kiện đơn giản không phải lúc nào cũng cần class. Nếu abstraction không giúp code dễ hiểu hoặc dễ thay đổi hơn, nó không có ích.

## Tóm tắt

Clean code là giao tiếp thực tế trong code. Nó giúp người đọc tiếp theo hiểu hệ thống làm gì và vì sao.

- Đặt tên rõ cho các quyết định.
- Giữ hàm tập trung.
- Tách business rule khỏi hạ tầng.
- Test các rule quan trọng.
- Ưu tiên sự rõ ràng hữu ích thay vì abstraction hình thức.`,category:"practices",tags:["Clean Code","Refactoring","Best Practices"],date:"2026-05-21",readTime:"5 min",readTimeVi:"5 phút"},sS={id:"frontend-developer-roadmap",title:"Frontend Developer Roadmap for Building Strong Fundamentals",titleVi:"Lộ trình Frontend Developer để xây nền tảng vững",excerpt:"A practical learning path for building solid frontend fundamentals through HTML, CSS, JavaScript, frameworks, testing, and deployment.",excerptVi:"Lộ trình học tập thực tế để xây nền tảng frontend qua HTML, CSS, JavaScript, framework, kiểm thử và triển khai.",content:`# Frontend Developer Roadmap for Building Strong Fundamentals

A strong frontend developer is not defined by knowing the newest framework first. The foundation is understanding how the browser works, how HTML and CSS create usable interfaces, how JavaScript manages behavior, and how applications communicate with APIs.

Frameworks are important, but they become much easier to learn when the fundamentals are clear.

## What problem does this solve?

Frontend learning can feel scattered. There are many tools, libraries, build systems, CSS approaches, and state management options. Without a path, it is easy to jump from tutorial to tutorial without building real confidence.

A roadmap solves this by organizing the learning order. It helps you know what to learn first, what can wait, and what kind of project should prove each stage.

## Core concepts

Start with the web platform. Semantic HTML improves accessibility and SEO. CSS layout teaches how interfaces adapt across screen sizes. JavaScript provides interactivity, data handling, and browser APIs.

After that, learn a framework such as React. A framework helps organize UI into components, manage state, route between pages, and connect to backend APIs.

Then move into quality: forms, validation, loading states, error states, testing, performance, and deployment. These are the details that make a frontend app feel complete.

## Practical example

A practical roadmap should end each stage with a small usable project:

\`\`\`text
Stage 1: HTML + CSS
- Build a responsive personal profile page.

Stage 2: JavaScript
- Build a searchable list with filters and local storage.

Stage 3: React
- Build a small dashboard that fetches API data.

Stage 4: Quality
- Add loading states, error handling, tests, and deployment.
\`\`\`

This approach is better than only watching tutorials because each stage creates something you can review, improve, and show.

## Common mistakes

- **Learning frameworks before HTML and CSS.** This often leads to fragile UI.
- **Ignoring accessibility.** Buttons, forms, labels, focus states, and keyboard navigation matter.
- **Copying UI without understanding layout.** Flexbox, grid, spacing, and responsive behavior need practice.
- **Skipping error states.** A frontend app is not complete if it only handles successful API responses.
- **Building too many tiny demos.** A few finished projects teach more than many abandoned snippets.

## Best practices

- Learn semantic HTML and CSS layout before relying on component libraries.
- Practice JavaScript array methods, async code, modules, and DOM/browser APIs.
- Build projects with real states: loading, empty, error, success.
- Learn one framework deeply before switching to another.
- Use Git from the beginning.
- Deploy projects so you experience real build and hosting issues.
- Review your own UI on mobile, desktop, keyboard navigation, and slow network.

## When to use and when to avoid

Use a roadmap when you feel overwhelmed or when you want a structured path toward job-ready fundamentals. It is especially useful for self-study.

Avoid treating a roadmap as a checklist of buzzwords. You do not need to master every library. You need enough depth to build, debug, and explain real interfaces.

## Summary

Frontend growth is more stable when the path starts from fundamentals and moves toward real applications.

- Learn the web platform first.
- Build small but complete projects.
- Add API handling, forms, and error states.
- Learn testing and deployment early enough.
- Focus on depth before chasing every new tool.`,contentVi:`# Lộ trình Frontend Developer để xây nền tảng vững

Một frontend developer vững không được định nghĩa bởi việc biết framework mới nhất trước tiên. Nền tảng thật sự là hiểu trình duyệt hoạt động như thế nào, HTML và CSS tạo giao diện ra sao, JavaScript quản lý hành vi thế nào và ứng dụng giao tiếp với API bằng cách nào.

Framework rất quan trọng, nhưng framework sẽ dễ học hơn nhiều khi nền tảng đã rõ.

## Chủ đề này giải quyết vấn đề gì?

Việc học frontend rất dễ bị rời rạc. Có quá nhiều tool, library, build system, cách viết CSS và lựa chọn quản lý state. Nếu không có lộ trình, bạn dễ nhảy từ tutorial này sang tutorial khác mà không xây được sự tự tin thật.

Roadmap giúp sắp xếp thứ tự học. Nó cho bạn biết nên học gì trước, cái gì có thể để sau và loại dự án nào nên dùng để chứng minh từng giai đoạn.

## Các ý tưởng cốt lõi

Bắt đầu với nền tảng web. Semantic HTML giúp accessibility và SEO tốt hơn. CSS layout giúp hiểu giao diện thích nghi với nhiều kích thước màn hình. JavaScript tạo interactivity, xử lý dữ liệu và làm việc với browser API.

Sau đó học một framework như React. Framework giúp tổ chức UI thành component, quản lý state, routing giữa các trang và kết nối với backend API.

Tiếp theo là chất lượng: form, validation, loading state, error state, testing, performance và deployment. Đây là những chi tiết làm ứng dụng frontend trở nên hoàn chỉnh.

## Ví dụ thực tế

Một roadmap thực tế nên kết thúc mỗi giai đoạn bằng một sản phẩm nhỏ có thể dùng được:

\`\`\`text
Giai đoạn 1: HTML + CSS
- Xây trang hồ sơ cá nhân responsive.

Giai đoạn 2: JavaScript
- Xây danh sách có tìm kiếm, filter và local storage.

Giai đoạn 3: React
- Xây dashboard nhỏ lấy dữ liệu từ API.

Giai đoạn 4: Chất lượng
- Thêm loading state, error handling, test và deployment.
\`\`\`

Cách này tốt hơn chỉ xem tutorial vì mỗi giai đoạn tạo ra một sản phẩm có thể review, cải thiện và đưa vào portfolio.

## Lỗi thường gặp

- **Học framework trước HTML và CSS.** Điều này thường tạo UI dễ vỡ.
- **Bỏ qua accessibility.** Button, form, label, focus state và keyboard navigation đều quan trọng.
- **Copy UI mà không hiểu layout.** Flexbox, grid, spacing và responsive cần luyện tập.
- **Bỏ qua error state.** Ứng dụng frontend chưa hoàn chỉnh nếu chỉ xử lý API thành công.
- **Xây quá nhiều demo nhỏ.** Một vài dự án hoàn chỉnh dạy nhiều hơn nhiều snippet bỏ dở.

## Best practices

- Học semantic HTML và CSS layout trước khi phụ thuộc vào component library.
- Luyện JavaScript array methods, async code, module và browser API.
- Xây dự án có đầy đủ loading, empty, error và success state.
- Học sâu một framework trước khi chuyển sang framework khác.
- Dùng Git từ sớm.
- Deploy project để gặp vấn đề build và hosting thật.
- Kiểm tra UI trên mobile, desktop, keyboard navigation và mạng chậm.

## Khi nào nên dùng và khi nào nên tránh

Dùng roadmap khi bạn thấy quá tải hoặc muốn có lộ trình rõ để xây nền tảng đủ thực chiến. Nó đặc biệt hữu ích khi tự học.

Tránh xem roadmap như checklist buzzword. Bạn không cần thành thạo mọi library. Bạn cần đủ chiều sâu để xây, debug và giải thích giao diện thật.

## Tóm tắt

Phát triển frontend bền vững hơn khi lộ trình bắt đầu từ nền tảng rồi tiến tới ứng dụng thật.

- Học web platform trước.
- Xây dự án nhỏ nhưng hoàn chỉnh.
- Thêm API handling, form và error state.
- Học testing và deployment đủ sớm.
- Tập trung chiều sâu trước khi chạy theo mọi tool mới.`,category:"roadmap",tags:["Roadmap","Frontend","Career","Learning"],date:"2026-05-20",readTime:"5 min",readTimeVi:"5 phút"},cS={id:"typescript-type-system-practical-guide",title:"TypeScript's Type System: From Safer Code to Better Domain Design",titleVi:"Hệ thống kiểu TypeScript: Từ mã an toàn đến thiết kế nghiệp vụ tốt hơn",excerpt:"A practical guide to modeling domain rules with unions, generics, narrowing, and type-safe boundaries instead of treating TypeScript as annotated JavaScript.",excerptVi:"Hướng dẫn thực tế về cách mô hình hóa quy tắc nghiệp vụ bằng union, generic, narrowing và các biên an toàn kiểu dữ liệu.",content:`# TypeScript's Type System: From Safer Code to Better Domain Design

TypeScript is most valuable when it does more than annotate JavaScript. Used well, its type system becomes a design tool: it makes invalid states difficult to represent, clarifies contracts between modules, and moves many mistakes into the editor before they become runtime bugs.

## Start with domain states, not primitive types

Consider an order that can be pending, paid, shipped, or cancelled. A weak model stores a string status and makes every field optional:

\`\`\`ts
type Order = {
  status: string;
  paidAt?: Date;
  trackingCode?: string;
  cancelReason?: string;
};
\`\`\`

This permits impossible combinations. A pending order can accidentally have a tracking code. A cancelled order can omit its reason. A discriminated union expresses the actual rules:

\`\`\`ts
type Order =
  | { status: "pending"; id: string }
  | { status: "paid"; id: string; paidAt: Date }
  | { status: "shipped"; id: string; paidAt: Date; trackingCode: string }
  | { status: "cancelled"; id: string; cancelReason: string };
\`\`\`

When code checks \`order.status\`, TypeScript narrows the object to the correct state. The compiler becomes a reviewer that never gets tired.

## Use unknown at system boundaries

Data from an API, local storage, or user input is not trustworthy merely because an interface says so. Prefer \`unknown\` over \`any\` at boundaries:

\`\`\`ts
function parseUser(input: unknown): User {
  if (!isUser(input)) throw new Error("Invalid user payload");
  return input;
}
\`\`\`

\`any\` disables checking and lets uncertainty spread. \`unknown\` forces validation before use. In applications that depend on external data, pair this pattern with a schema validator such as Zod.

## Generics should preserve relationships

Generics are useful when they connect input and output types. They are not decoration.

\`\`\`ts
function indexBy<T, K extends PropertyKey>(
  items: T[],
  keyOf: (item: T) => K,
): Record<K, T> {
  return Object.fromEntries(items.map(item => [keyOf(item), item])) as Record<K, T>;
}
\`\`\`

The generic parameters preserve the relationship between the collection, the selected key, and the returned lookup table. Callers receive precise autocomplete without duplicating types.

## Prefer exhaustive checks

When a union gains a new case, every important switch should tell us what must be updated:

\`\`\`ts
function assertNever(value: never): never {
  throw new Error(\`Unhandled value: \${value}\`);
}

function orderLabel(order: Order): string {
  switch (order.status) {
    case "pending": return "Awaiting payment";
    case "paid": return "Preparing shipment";
    case "shipped": return order.trackingCode;
    case "cancelled": return order.cancelReason;
    default: return assertNever(order);
  }
}
\`\`\`

## Practical rules

- Model business states with unions instead of optional-field objects.
- Validate external data before assigning application types.
- Use generics to preserve meaningful relationships.
- Avoid type assertions unless runtime guarantees truly exist.
- Keep public module contracts small and explicit.

TypeScript cannot replace tests or runtime validation. Its real strength is making assumptions visible. When the model communicates the domain clearly, implementation becomes easier to review, refactor, and extend.`,contentVi:`# Hệ thống kiểu TypeScript: Từ mã an toàn đến thiết kế nghiệp vụ tốt hơn

TypeScript mang lại giá trị lớn nhất khi không chỉ được dùng để thêm chú thích kiểu cho JavaScript. Khi sử dụng đúng, hệ thống kiểu trở thành một công cụ thiết kế: trạng thái không hợp lệ khó xuất hiện, hợp đồng giữa các module rõ ràng hơn và nhiều lỗi được phát hiện ngay trong trình soạn thảo trước khi trở thành lỗi runtime.

## Bắt đầu từ trạng thái nghiệp vụ, không phải kiểu nguyên thủy

Hãy xét một đơn hàng có thể ở trạng thái chờ thanh toán, đã thanh toán, đã giao hoặc đã hủy. Một mô hình yếu thường lưu trạng thái bằng chuỗi và để mọi trường khác thành tùy chọn:

\`\`\`ts
type Order = {
  status: string;
  paidAt?: Date;
  trackingCode?: string;
  cancelReason?: string;
};
\`\`\`

Thiết kế này cho phép nhiều tổ hợp vô lý: đơn đang chờ vẫn có mã vận chuyển, đơn đã hủy lại không có lý do. Discriminated union mô tả đúng quy tắc:

\`\`\`ts
type Order =
  | { status: "pending"; id: string }
  | { status: "paid"; id: string; paidAt: Date }
  | { status: "shipped"; id: string; paidAt: Date; trackingCode: string }
  | { status: "cancelled"; id: string; cancelReason: string };
\`\`\`

Khi kiểm tra \`order.status\`, TypeScript tự thu hẹp kiểu về đúng trạng thái. Compiler lúc này giống như một người review không biết mệt.

## Dùng unknown tại biên hệ thống

Dữ liệu đến từ API, local storage hoặc người dùng không trở nên đáng tin chỉ vì ta gán cho nó một interface. Hãy ưu tiên \`unknown\` thay cho \`any\` tại các biên:

\`\`\`ts
function parseUser(input: unknown): User {
  if (!isUser(input)) throw new Error("Dữ liệu người dùng không hợp lệ");
  return input;
}
\`\`\`

\`any\` vô hiệu hóa kiểm tra kiểu và khiến sự không chắc chắn lan rộng. \`unknown\` buộc chương trình xác thực trước khi sử dụng. Trong ứng dụng thực tế, có thể kết hợp cách này với thư viện schema như Zod.

## Generic phải bảo toàn mối quan hệ

Generic hữu ích khi nó kết nối kiểu đầu vào và đầu ra, không phải khi được thêm vào chỉ để trông phức tạp.

\`\`\`ts
function indexBy<T, K extends PropertyKey>(
  items: T[],
  keyOf: (item: T) => K,
): Record<K, T> {
  return Object.fromEntries(items.map(item => [keyOf(item), item])) as Record<K, T>;
}
\`\`\`

Các tham số generic bảo toàn mối quan hệ giữa danh sách, khóa được chọn và bảng tra cứu trả về. Người gọi nhận được autocomplete chính xác mà không cần lặp lại kiểu.

## Kiểm tra đầy đủ mọi trường hợp

Khi union có thêm trạng thái mới, các switch quan trọng nên báo rõ vị trí cần cập nhật:

\`\`\`ts
function assertNever(value: never): never {
  throw new Error(\`Chưa xử lý giá trị: \${value}\`);
}
\`\`\`

## Nguyên tắc thực hành

- Mô hình hóa trạng thái nghiệp vụ bằng union thay vì object có quá nhiều trường tùy chọn.
- Xác thực dữ liệu bên ngoài trước khi gán kiểu của ứng dụng.
- Dùng generic để bảo toàn mối quan hệ có ý nghĩa.
- Hạn chế type assertion nếu không có đảm bảo ở runtime.
- Giữ hợp đồng công khai của module nhỏ gọn và rõ ràng.

TypeScript không thay thế kiểm thử hay xác thực runtime. Sức mạnh thật sự của nó là làm cho các giả định trở nên hữu hình. Khi mô hình kiểu truyền đạt tốt nghiệp vụ, việc triển khai, review, refactor và mở rộng đều trở nên dễ dàng hơn.`,category:"languages",tags:["TypeScript","Type System","Domain Modeling","Generics"],date:"2026-06-13",readTime:"5 min",readTimeVi:"5 phút",featured:!0},lS={id:"python-reliable-applications",title:"Python Beyond Scripts: Structuring Reliable Applications",titleVi:"Python vượt ra ngoài script: Xây dựng ứng dụng đáng tin cậy",excerpt:"How to move from quick Python scripts to maintainable applications with clear boundaries, type hints, dependency management, testing, and observability.",excerptVi:"Cách chuyển từ script Python nhanh sang ứng dụng dễ bảo trì bằng ranh giới rõ ràng, type hint, quản lý dependency, kiểm thử và observability.",content:`# Python Beyond Scripts: Structuring Reliable Applications

Python makes the first version easy. That is one of its greatest strengths, but it can also hide structural problems until the application grows. Reliable Python is not about making the language more complicated. It is about making behavior explicit.

## Separate policy from infrastructure

Business rules should not depend directly on HTTP frameworks, databases, or environment variables. Put the rule in a plain function or class, then inject infrastructure:

\`\`\`py
from dataclasses import dataclass
from decimal import Decimal

@dataclass(frozen=True)
class Order:
    subtotal: Decimal
    is_priority: bool

def shipping_fee(order: Order) -> Decimal:
    if order.is_priority:
        return Decimal("0")
    return Decimal("25") if order.subtotal < Decimal("500") else Decimal("0")
\`\`\`

This function is deterministic, fast to test, and independent of deployment details.

## Treat type hints as communication

Python remains dynamically typed at runtime, but type hints improve editor feedback and clarify contracts:

\`\`\`py
from collections.abc import Iterable

def active_emails(users: Iterable[User]) -> list[str]:
    return [user.email for user in users if user.is_active]
\`\`\`

Run a static checker such as mypy or pyright in CI. Type hints are most useful at module boundaries and in core domain code.

## Manage dependencies deliberately

Pin application dependencies, separate development tools, and ensure the lock file is committed. Avoid importing optional packages across the entire codebase. A predictable environment is a feature.

## Design errors intentionally

Do not catch every exception with a generic \`except Exception\`. Catch errors where the program can add context, recover, or translate them into a meaningful application error:

\`\`\`py
try:
    customer = repository.get(customer_id)
except DatabaseTimeout as error:
    raise CustomerLookupUnavailable(customer_id) from error
\`\`\`

The original cause remains available while the calling layer receives an error that matches the domain.

## Build an observability baseline

A reliable service should answer three questions: what happened, where did it happen, and which request was affected. Use structured logs, correlation IDs, metrics for important operations, and health checks that verify critical dependencies.

## A practical project shape

\`\`\`text
src/
  app/
    domain/
    services/
    adapters/
    api/
tests/
  unit/
  integration/
\`\`\`

The exact folders matter less than the dependency direction. Domain logic should not import the API or database layer.

## Reliability checklist

- Format and lint automatically.
- Run type checking and tests in CI.
- Keep configuration outside source code.
- Add timeouts to every network call.
- Log structured context, not vague messages.
- Test failure paths, not only successful ones.

Good Python remains readable and direct. Reliability comes from disciplined boundaries and feedback loops, not from turning a small application into an abstract framework.`,contentVi:`# Python vượt ra ngoài script: Xây dựng ứng dụng đáng tin cậy

Python giúp tạo phiên bản đầu tiên rất nhanh. Đây là một trong những điểm mạnh lớn nhất của ngôn ngữ, nhưng nó cũng có thể che giấu vấn đề cấu trúc cho đến khi ứng dụng phát triển. Python đáng tin cậy không đồng nghĩa với việc làm ngôn ngữ phức tạp hơn; mục tiêu là làm hành vi của hệ thống trở nên rõ ràng.

## Tách chính sách nghiệp vụ khỏi hạ tầng

Quy tắc nghiệp vụ không nên phụ thuộc trực tiếp vào HTTP framework, database hay biến môi trường. Hãy đặt quy tắc trong hàm hoặc lớp thuần, sau đó truyền hạ tầng từ bên ngoài:

\`\`\`py
from dataclasses import dataclass
from decimal import Decimal

@dataclass(frozen=True)
class Order:
    subtotal: Decimal
    is_priority: bool

def shipping_fee(order: Order) -> Decimal:
    if order.is_priority:
        return Decimal("0")
    return Decimal("25") if order.subtotal < Decimal("500") else Decimal("0")
\`\`\`

Hàm này có kết quả dễ dự đoán, kiểm thử nhanh và không phụ thuộc cách triển khai hệ thống.

## Xem type hint như một hình thức giao tiếp

Python vẫn là ngôn ngữ động ở runtime, nhưng type hint cải thiện phản hồi từ editor và làm rõ hợp đồng giữa các phần của chương trình:

\`\`\`py
from collections.abc import Iterable

def active_emails(users: Iterable[User]) -> list[str]:
    return [user.email for user in users if user.is_active]
\`\`\`

Nên chạy mypy hoặc pyright trong CI. Type hint mang lại giá trị lớn nhất tại biên module và trong phần nghiệp vụ cốt lõi.

## Quản lý dependency có chủ đích

Khóa phiên bản dependency của ứng dụng, tách công cụ phát triển và commit lock file. Môi trường có thể tái tạo chính xác là một tính năng, không chỉ là việc cấu hình.

## Thiết kế lỗi rõ ràng

Không nên bắt mọi lỗi bằng \`except Exception\`. Chỉ bắt lỗi tại nơi chương trình có thể bổ sung ngữ cảnh, phục hồi hoặc chuyển nó thành lỗi có ý nghĩa với nghiệp vụ:

\`\`\`py
try:
    customer = repository.get(customer_id)
except DatabaseTimeout as error:
    raise CustomerLookupUnavailable(customer_id) from error
\`\`\`

Nguyên nhân gốc vẫn được giữ lại, trong khi tầng gọi nhận được lỗi phù hợp với ngôn ngữ của hệ thống.

## Xây nền tảng observability

Một dịch vụ đáng tin cậy cần trả lời được ba câu hỏi: chuyện gì đã xảy ra, xảy ra ở đâu và request nào bị ảnh hưởng. Hãy dùng structured log, correlation ID, metric cho thao tác quan trọng và health check cho dependency thiết yếu.

## Cấu trúc dự án tham khảo

\`\`\`text
src/
  app/
    domain/
    services/
    adapters/
    api/
tests/
  unit/
  integration/
\`\`\`

Tên thư mục không quan trọng bằng hướng phụ thuộc. Nghiệp vụ không nên import tầng API hoặc database.

## Checklist độ tin cậy

- Tự động format và lint.
- Chạy type checking cùng test trong CI.
- Đưa cấu hình ra ngoài mã nguồn.
- Đặt timeout cho mọi lời gọi mạng.
- Ghi log có cấu trúc và đủ ngữ cảnh.
- Kiểm thử luồng thất bại, không chỉ luồng thành công.

Python tốt vẫn nên dễ đọc và trực tiếp. Độ tin cậy đến từ ranh giới rõ ràng cùng vòng phản hồi kỷ luật, không phải từ việc biến ứng dụng nhỏ thành một framework trừu tượng.`,category:"languages",tags:["Python","Architecture","Testing","Maintainability"],date:"2026-06-10",readTime:"6 min",readTimeVi:"6 phút"},uS={id:"csharp-modern-backend-guide",title:"Modern C# for Backend Systems: Patterns That Improve Correctness",titleVi:"C# hiện đại cho hệ thống Backend: Những mẫu giúp tăng tính đúng đắn",excerpt:"A focused guide to records, nullable reference types, async workflows, result modeling, and dependency boundaries in modern C# backend applications.",excerptVi:"Hướng dẫn tập trung vào record, nullable reference type, async, mô hình hóa kết quả và ranh giới dependency trong backend C# hiện đại.",content:`# Modern C# for Backend Systems

Modern C# gives backend developers strong tools for expressing intent. The goal is not to use every language feature. The goal is to choose features that reduce ambiguity and make incorrect behavior harder to write.

## Use records for value-oriented models

Records work well for commands, events, and values where identity comes from data:

\`\`\`csharp
public sealed record CreateCustomer(string Name, EmailAddress Email);
public sealed record EmailAddress(string Value);
\`\`\`

They provide value equality and concise immutable models. Entities with lifecycle and identity usually remain classes.

## Enable nullable reference types

Nullable reference types turn a common source of runtime failure into compiler feedback:

\`\`\`csharp
public Customer? Find(Guid id);

var customer = repository.Find(id)
    ?? throw new CustomerNotFoundException(id);
\`\`\`

The annotation documents that absence is expected and forces callers to handle it.

## Keep async truly asynchronous

Async code improves throughput for I/O-bound services when the entire call chain remains asynchronous:

\`\`\`csharp
public async Task<CustomerDto> GetCustomer(
    Guid id,
    CancellationToken cancellationToken)
{
    var customer = await repository.GetAsync(id, cancellationToken);
    return mapper.Map(customer);
}
\`\`\`

Pass cancellation tokens through every relevant layer. Avoid \`.Result\` and \`.Wait()\`, which can block threads and create deadlocks.

## Model expected failures as results

Exceptions are appropriate for unexpected failures. Validation errors, conflicts, and missing resources are expected outcomes and can be modeled explicitly:

\`\`\`csharp
public abstract record Result<T>;
public sealed record Success<T>(T Value) : Result<T>;
public sealed record Failure<T>(string Code, string Message) : Result<T>;
\`\`\`

This makes the possible outcomes visible in the contract and simplifies consistent HTTP mapping.

## Keep dependency direction clear

Core business code should define interfaces; infrastructure implements them. Dependency injection then connects the application at the composition root. Avoid service classes that depend on dozens of unrelated interfaces. That is usually a signal that responsibilities need to be separated.

## Use the language to express invariants

A constructor or factory can ensure an object is valid from creation:

\`\`\`csharp
public sealed record Money
{
    public decimal Amount { get; }

    private Money(decimal amount) => Amount = amount;

    public static Money Create(decimal amount) =>
        amount < 0 ? throw new ArgumentOutOfRangeException(nameof(amount)) : new(amount);
}
\`\`\`

## Review checklist

- Are nullable values intentional and handled?
- Does async code accept and forward cancellation?
- Are expected failures explicit?
- Are domain rules independent from EF Core and ASP.NET?
- Are value objects validated at creation?

The best C# code is not the most clever. It communicates constraints clearly, uses the compiler as a design partner, and keeps infrastructure details from dominating the domain.`,contentVi:`# C# hiện đại cho hệ thống Backend

C# hiện đại cung cấp nhiều công cụ mạnh để backend developer diễn đạt ý định. Mục tiêu không phải sử dụng mọi tính năng của ngôn ngữ, mà là chọn những tính năng giúp giảm sự mơ hồ và khiến hành vi sai khó được viết ra hơn.

## Dùng record cho mô hình hướng giá trị

Record phù hợp với command, event và value object, nơi định danh đến từ dữ liệu:

\`\`\`csharp
public sealed record CreateCustomer(string Name, EmailAddress Email);
public sealed record EmailAddress(string Value);
\`\`\`

Record cung cấp value equality và mô hình bất biến ngắn gọn. Entity có vòng đời và định danh riêng thường vẫn nên là class.

## Bật nullable reference types

Nullable reference type biến một nguồn lỗi runtime phổ biến thành phản hồi từ compiler:

\`\`\`csharp
public Customer? Find(Guid id);

var customer = repository.Find(id)
    ?? throw new CustomerNotFoundException(id);
\`\`\`

Ký hiệu này mô tả rõ khả năng không tìm thấy dữ liệu và buộc phía gọi phải xử lý.

## Giữ luồng async thực sự bất đồng bộ

Async cải thiện throughput cho dịch vụ phụ thuộc I/O khi toàn bộ chuỗi gọi đều bất đồng bộ:

\`\`\`csharp
public async Task<CustomerDto> GetCustomer(
    Guid id,
    CancellationToken cancellationToken)
{
    var customer = await repository.GetAsync(id, cancellationToken);
    return mapper.Map(customer);
}
\`\`\`

Hãy truyền cancellation token qua mọi tầng liên quan. Tránh \`.Result\` và \`.Wait()\` vì chúng có thể chặn thread hoặc tạo deadlock.

## Mô hình hóa lỗi dự kiến bằng Result

Exception phù hợp cho lỗi bất ngờ. Lỗi validation, conflict hoặc không tìm thấy tài nguyên là kết quả có thể dự đoán và nên được mô hình hóa rõ:

\`\`\`csharp
public abstract record Result<T>;
public sealed record Success<T>(T Value) : Result<T>;
public sealed record Failure<T>(string Code, string Message) : Result<T>;
\`\`\`

Cách này làm các kết quả có thể xảy ra hiển thị ngay trong hợp đồng và giúp ánh xạ HTTP response nhất quán.

## Giữ hướng dependency rõ ràng

Mã nghiệp vụ cốt lõi nên định nghĩa interface; hạ tầng triển khai chúng. Dependency injection kết nối ứng dụng tại composition root. Một service phụ thuộc vào quá nhiều interface không liên quan thường là dấu hiệu trách nhiệm đang bị trộn lẫn.

## Dùng ngôn ngữ để thể hiện invariant

Constructor hoặc factory có thể đảm bảo object hợp lệ ngay từ lúc được tạo:

\`\`\`csharp
public sealed record Money
{
    public decimal Amount { get; }
    private Money(decimal amount) => Amount = amount;

    public static Money Create(decimal amount) =>
        amount < 0 ? throw new ArgumentOutOfRangeException(nameof(amount)) : new(amount);
}
\`\`\`

## Checklist khi review

- Giá trị nullable có chủ đích và đã được xử lý chưa?
- Mã async có nhận và truyền cancellation token không?
- Lỗi dự kiến đã được biểu diễn rõ chưa?
- Nghiệp vụ có độc lập với EF Core và ASP.NET không?
- Value object có được xác thực ngay khi tạo không?

C# tốt nhất không phải là C# thông minh nhất. Mã tốt truyền đạt ràng buộc rõ ràng, xem compiler như một đối tác thiết kế và không để chi tiết hạ tầng lấn át nghiệp vụ.`,category:"languages",tags:["C#",".NET","Backend","Domain Modeling"],date:"2026-06-06",readTime:"6 min",readTimeVi:"6 phút"},hS={id:"javascript-async-patterns",title:"JavaScript Async Patterns: Promises, Async/Await, and Queues",titleVi:"Các mẫu xử lý bất đồng bộ trong JavaScript: Promise, Async/Await và Queue",excerpt:"A practical guide to organizing asynchronous JavaScript with promises, async/await, controlled parallelism, queues, and reliable error handling.",excerptVi:"Hướng dẫn thực tế để tổ chức xử lý bất đồng bộ trong JavaScript bằng Promise, async/await, chạy song song có kiểm soát, queue và xử lý lỗi đáng tin cậy.",content:`# JavaScript Async Patterns: Promises, Async/Await, and Queues

Asynchronous code is everywhere in JavaScript. A frontend application waits for API responses, reads files through browser APIs, tracks user interactions, retries failed requests, and updates the UI without blocking the page. A Node.js service does the same kind of work with databases, message brokers, file systems, and external services.

The hard part is not learning that \`async\` and \`await\` exist. The hard part is organizing asynchronous work so the program remains predictable when requests fail, operations run at the same time, or tasks must be processed in a specific order. Poor async code often starts small, then grows into nested callbacks, hidden race conditions, missing error handling, and loading states that never finish.

This article focuses on practical async patterns: promises, \`async/await\`, parallel execution, queues, cancellation, and error boundaries. The goal is to help you choose the right structure for the job instead of treating every async problem as a simple \`await fetch(...)\`.

## What problem does this solve?

JavaScript runs application code on a single main thread in the browser. If a long-running operation blocks that thread, the UI becomes unresponsive. The event loop allows JavaScript to start work, hand waiting operations to the runtime, and continue running other code while the result is pending.

Async patterns solve several practical problems:

- They keep applications responsive while waiting for I/O.
- They make request flows easier to read and reason about.
- They let independent tasks run in parallel instead of one by one.
- They protect systems from too much concurrency.
- They create clear places for retries, cancellation, and error handling.
- They make loading, success, and failure states explicit.

Without structure, asynchronous code becomes difficult to debug. For example, a component may start three requests, render partial data from the fastest one, then overwrite state with stale data from an older request. A backend job may send hundreds of requests at once and trigger rate limits. A queue consumer may keep processing after one task fails, but never record which item failed.

Good async design is about control. You decide which operations can run together, which ones must wait, what should happen when something fails, and when work is no longer needed.

## Core concepts

A \`Promise\` represents a value that may be available later. It can be pending, fulfilled, or rejected. Promises are useful because they turn callback-based waiting into composable values. You can pass a promise around, return it from a function, combine it with other promises, and attach success or failure behavior.

\`async/await\` is syntax built on top of promises. An \`async\` function always returns a promise, and \`await\` pauses that function until the awaited promise settles. It does not block the entire JavaScript runtime. It only suspends the current async function and lets the event loop continue.

The first important distinction is **sequential versus parallel** work. Sequential work is correct when step two depends on step one. Parallel work is better when several operations are independent.

\`\`\`js
const profile = await loadProfile(userId);
const orders = await loadOrders(profile.customerId);
\`\`\`

This is sequential because orders depend on the loaded profile. But this code is unnecessarily slow if both requests are independent:

\`\`\`js
const profile = await loadProfile(userId);
const notifications = await loadNotifications(userId);
\`\`\`

In that case, \`Promise.all\` makes the dependency clear:

\`\`\`js
const [profile, notifications] = await Promise.all([
  loadProfile(userId),
  loadNotifications(userId),
]);
\`\`\`

The second important distinction is **fail-fast versus partial success**. \`Promise.all\` rejects as soon as one promise rejects. That is useful when the whole operation requires every result. If partial results are acceptable, \`Promise.allSettled\` is safer because it tells you which operations succeeded and which failed.

The third concept is **concurrency control**. Running ten requests at once may be fine. Running ten thousand at once is usually a problem. Queues and worker pools help you limit the amount of active work while still processing a large list efficiently.

Finally, async code needs **cancellation and stale result protection**. In frontend applications, the user may navigate away or type a new search query before the previous request finishes. In those cases, the old result should not overwrite newer state.

## Practical example

Consider a dashboard that loads a user profile, recent orders, and notifications. The profile is required. Orders and notifications are useful but not critical. The code should run independent requests in parallel, handle partial failures, and avoid updating the UI after the request has been cancelled.

\`\`\`js
async function loadDashboard(userId, signal) {
  const profile = await loadProfile(userId, { signal });

  const [ordersResult, notificationsResult] = await Promise.allSettled([
    loadOrders(userId, { signal }),
    loadNotifications(userId, { signal }),
  ]);

  return {
    profile,
    orders: ordersResult.status === "fulfilled" ? ordersResult.value : [],
    notifications:
      notificationsResult.status === "fulfilled"
        ? notificationsResult.value
        : [],
    warnings: [
      ordersResult.status === "rejected" ? "Orders could not be loaded" : null,
      notificationsResult.status === "rejected"
        ? "Notifications could not be loaded"
        : null,
    ].filter(Boolean),
  };
}
\`\`\`

This example separates required data from optional data. If the profile fails, the entire dashboard cannot be built. If orders fail, the dashboard can still show the profile and notifications with a warning.

In a browser UI, you can pair this with \`AbortController\`:

\`\`\`js
const controller = new AbortController();

loadDashboard("user-123", controller.signal)
  .then(renderDashboard)
  .catch((error) => {
    if (error.name !== "AbortError") {
      renderError(error);
    }
  });

controller.abort();
\`\`\`

For bulk work, avoid starting every task at once. A simple queue with limited concurrency is often enough:

\`\`\`js
async function runWithLimit(items, limit, worker) {
  const results = [];
  let nextIndex = 0;

  async function runWorker() {
    while (nextIndex < items.length) {
      const currentIndex = nextIndex;
      nextIndex += 1;
      results[currentIndex] = await worker(items[currentIndex]);
    }
  }

  await Promise.all(
    Array.from({ length: limit }, () => runWorker()),
  );

  return results;
}
\`\`\`

This pattern is useful for processing uploads, syncing records, calling APIs with rate limits, or running background jobs. It gives you parallelism without losing control of system pressure.

## Common mistakes

- **Awaiting independent work one by one.** This makes the application slower than necessary. If operations do not depend on each other, start them together with \`Promise.all\` or a controlled queue.
- **Using \`Promise.all\` when partial success is acceptable.** One failed optional request should not always break the entire page. Use \`Promise.allSettled\` when the UI can show partial data.
- **Forgetting to return promises.** A function that starts async work but does not return or await it creates hidden background behavior. Errors may become unhandled rejections.
- **Mixing \`.then\` chains and \`async/await\` without a reason.** Both are valid, but mixing styles often makes control flow harder to follow.
- **Ignoring cancellation.** In search boxes, route changes, and component unmounts, old requests can finish late and overwrite newer data.
- **Running too much work at once.** Large arrays with \`Promise.all(items.map(...))\` can overload browsers, APIs, databases, or worker processes.
- **Catching errors too early.** If every helper catches and hides its own errors, the caller cannot make a correct decision about retrying, showing a message, or failing the whole operation.

## Best practices

- Model async flows around dependencies: run dependent steps sequentially and independent steps in parallel.
- Keep required data and optional data separate. This makes error handling more intentional.
- Use \`try/catch\` at meaningful boundaries such as route loaders, UI actions, job handlers, or API controllers.
- Prefer \`Promise.allSettled\` for dashboards, widgets, and non-critical secondary data.
- Use \`AbortController\` in browser requests that may become stale.
- Limit concurrency for bulk processing.
- Return promises from helper functions so callers can await, compose, retry, or test them.
- Keep loading, success, empty, and error states explicit in UI code.
- Log enough context when async work fails: operation name, input identifier, retry count, and external service name.

A useful rule is to design async code from the outside in. Start with the user or system outcome: should the screen fail entirely, show partial data, retry silently, or allow the user to try again? Once that behavior is clear, the promise structure usually becomes easier to choose.

## When to use and when to avoid

Use \`async/await\` for most business logic and request flows. It reads like normal control flow and works well with \`try/catch\`.

Use \`Promise.all\` when every task is required and tasks are independent. It is a good fit for loading several required resources before rendering a page.

Use \`Promise.allSettled\` when partial success is acceptable. It is useful for dashboards, analytics widgets, optional recommendations, or background refreshes.

Use queues or concurrency limits when processing many items. This is common in upload flows, batch imports, email sending, web scraping, API synchronization, and background jobs.

Avoid async patterns that add more complexity than the problem needs. A small form submission does not need a custom queue. A single API call does not need a retry framework unless the product behavior requires it. Also avoid hiding all failures behind generic fallback values. Silent failure can make systems look stable while data is actually missing.

The trade-off is simple: more control usually means more code. Add structure when it protects correctness, performance, or user experience. Keep the direct version when the flow is small and obvious.

## Summary

Asynchronous JavaScript is not only about waiting for data. It is about designing how work starts, runs, fails, retries, cancels, and reports its result. Promises give you the building blocks, \`async/await\` makes them readable, and queues give you control when the amount of work grows.

- Use sequential awaits only when each step depends on the previous one.
- Use \`Promise.all\` for independent required work.
- Use \`Promise.allSettled\` for optional work and partial success.
- Use cancellation to prevent stale requests from updating the UI.
- Use concurrency limits for bulk operations.
- Put error handling at boundaries where the application can make a real decision.

Well-structured async code makes applications feel faster, fail more clearly, and scale more predictably as features grow.`,contentVi:`# Các mẫu xử lý bất đồng bộ trong JavaScript: Promise, Async/Await và Queue

Xử lý bất đồng bộ xuất hiện ở gần như mọi ứng dụng JavaScript. Một ứng dụng frontend phải gọi API, đọc dữ liệu từ trình duyệt, theo dõi thao tác người dùng, retry request thất bại và cập nhật UI mà không làm treo trang. Một service Node.js cũng phải làm việc tương tự với database, message broker, file system và các dịch vụ bên ngoài.

Điểm khó không nằm ở việc biết \`async\` và \`await\` là gì. Điểm khó là tổ chức luồng bất đồng bộ sao cho chương trình vẫn dễ hiểu khi request thất bại, nhiều tác vụ chạy cùng lúc, hoặc một số tác vụ bắt buộc phải chạy theo thứ tự. Code async kém thường bắt đầu rất nhỏ, sau đó dần biến thành callback lồng nhau, race condition khó phát hiện, lỗi bị nuốt mất và loading state không bao giờ kết thúc.

Bài viết này tập trung vào các mẫu xử lý thực tế: Promise, \`async/await\`, chạy song song, queue, cancellation và ranh giới xử lý lỗi. Mục tiêu là giúp bạn chọn đúng cấu trúc cho từng tình huống thay vì xem mọi bài toán async chỉ là \`await fetch(...)\`.

## Chủ đề này giải quyết vấn đề gì?

Trong trình duyệt, JavaScript chạy phần lớn code ứng dụng trên một main thread. Nếu một tác vụ chạy quá lâu và chặn thread này, UI sẽ bị đứng. Event loop cho phép JavaScript bắt đầu một công việc, giao phần chờ đợi cho runtime, rồi tiếp tục xử lý các việc khác trong khi kết quả chưa sẵn sàng.

Các mẫu xử lý async giúp giải quyết nhiều vấn đề thực tế:

- Giữ ứng dụng phản hồi tốt trong lúc chờ I/O.
- Làm cho luồng request dễ đọc và dễ kiểm soát hơn.
- Cho phép các tác vụ độc lập chạy song song thay vì chờ nhau không cần thiết.
- Bảo vệ hệ thống khỏi việc chạy quá nhiều tác vụ cùng lúc.
- Tạo vị trí rõ ràng cho retry, cancellation và xử lý lỗi.
- Làm cho trạng thái loading, thành công và thất bại trở nên minh bạch.

Nếu không có cấu trúc rõ ràng, async code rất dễ khó debug. Ví dụ, một component có thể khởi chạy ba request, render dữ liệu từ request trả về nhanh nhất, rồi sau đó bị ghi đè bởi dữ liệu cũ từ một request chậm hơn. Một job backend có thể gửi hàng trăm request cùng lúc và bị rate limit. Một queue consumer có thể tiếp tục xử lý sau khi một task lỗi nhưng lại không ghi nhận item nào đã thất bại.

Thiết kế async tốt là thiết kế khả năng kiểm soát. Bạn cần quyết định tác vụ nào có thể chạy cùng nhau, tác vụ nào phải chờ, khi lỗi thì xử lý ra sao và khi nào một công việc không còn cần thiết nữa.

## Các ý tưởng cốt lõi

\`Promise\` đại diện cho một giá trị có thể xuất hiện trong tương lai. Promise có thể ở trạng thái pending, fulfilled hoặc rejected. Promise hữu ích vì nó biến việc chờ đợi dựa trên callback thành một giá trị có thể kết hợp. Bạn có thể truyền promise qua hàm, return nó, gom nhiều promise lại với nhau và gắn logic xử lý thành công hoặc thất bại.

\`async/await\` là cú pháp được xây trên Promise. Một hàm \`async\` luôn trả về Promise, còn \`await\` tạm dừng hàm async hiện tại cho đến khi Promise hoàn tất. Nó không chặn toàn bộ JavaScript runtime. Nó chỉ tạm dừng hàm hiện tại và cho event loop tiếp tục xử lý các việc khác.

Điểm phân biệt đầu tiên là **chạy tuần tự hay chạy song song**. Chạy tuần tự đúng khi bước sau phụ thuộc vào kết quả của bước trước.

\`\`\`js
const profile = await loadProfile(userId);
const orders = await loadOrders(profile.customerId);
\`\`\`

Trong ví dụ này, orders phụ thuộc vào profile nên việc chờ tuần tự là hợp lý. Nhưng đoạn sau lại chậm không cần thiết nếu hai request độc lập:

\`\`\`js
const profile = await loadProfile(userId);
const notifications = await loadNotifications(userId);
\`\`\`

Trường hợp đó nên dùng \`Promise.all\` để thể hiện rõ rằng hai tác vụ có thể chạy cùng lúc:

\`\`\`js
const [profile, notifications] = await Promise.all([
  loadProfile(userId),
  loadNotifications(userId),
]);
\`\`\`

Điểm phân biệt thứ hai là **fail-fast hay chấp nhận thành công một phần**. \`Promise.all\` sẽ reject ngay khi một promise reject. Điều này phù hợp khi toàn bộ kết quả đều bắt buộc. Nếu có thể chấp nhận một phần dữ liệu, \`Promise.allSettled\` an toàn hơn vì nó cho biết tác vụ nào thành công và tác vụ nào thất bại.

Điểm thứ ba là **kiểm soát concurrency**. Chạy mười request cùng lúc có thể ổn. Chạy mười nghìn request cùng lúc thường là vấn đề. Queue và worker pool giúp giới hạn số lượng công việc đang chạy trong khi vẫn xử lý được danh sách lớn một cách hiệu quả.

Cuối cùng, async code cần **cancellation và chống kết quả cũ ghi đè kết quả mới**. Trong frontend, người dùng có thể chuyển trang hoặc nhập một từ khóa tìm kiếm mới trước khi request cũ hoàn tất. Khi đó, kết quả cũ không nên ghi đè state mới hơn.

## Ví dụ thực tế

Hãy xét một dashboard cần tải profile người dùng, danh sách đơn hàng gần đây và thông báo. Profile là dữ liệu bắt buộc. Orders và notifications hữu ích nhưng không bắt buộc. Code nên chạy các request độc lập song song, xử lý được lỗi một phần và tránh cập nhật UI sau khi request đã bị hủy.

\`\`\`js
async function loadDashboard(userId, signal) {
  const profile = await loadProfile(userId, { signal });

  const [ordersResult, notificationsResult] = await Promise.allSettled([
    loadOrders(userId, { signal }),
    loadNotifications(userId, { signal }),
  ]);

  return {
    profile,
    orders: ordersResult.status === "fulfilled" ? ordersResult.value : [],
    notifications:
      notificationsResult.status === "fulfilled"
        ? notificationsResult.value
        : [],
    warnings: [
      ordersResult.status === "rejected" ? "Không thể tải đơn hàng" : null,
      notificationsResult.status === "rejected"
        ? "Không thể tải thông báo"
        : null,
    ].filter(Boolean),
  };
}
\`\`\`

Ví dụ này tách dữ liệu bắt buộc khỏi dữ liệu tùy chọn. Nếu profile lỗi, dashboard không thể được xây dựng. Nếu orders lỗi, dashboard vẫn có thể hiển thị profile và notifications kèm cảnh báo.

Trong UI trên trình duyệt, bạn có thể kết hợp với \`AbortController\`:

\`\`\`js
const controller = new AbortController();

loadDashboard("user-123", controller.signal)
  .then(renderDashboard)
  .catch((error) => {
    if (error.name !== "AbortError") {
      renderError(error);
    }
  });

controller.abort();
\`\`\`

Với xử lý hàng loạt, không nên khởi chạy mọi task cùng lúc. Một queue đơn giản có giới hạn concurrency thường đã đủ:

\`\`\`js
async function runWithLimit(items, limit, worker) {
  const results = [];
  let nextIndex = 0;

  async function runWorker() {
    while (nextIndex < items.length) {
      const currentIndex = nextIndex;
      nextIndex += 1;
      results[currentIndex] = await worker(items[currentIndex]);
    }
  }

  await Promise.all(
    Array.from({ length: limit }, () => runWorker()),
  );

  return results;
}
\`\`\`

Mẫu này hữu ích khi xử lý upload, đồng bộ dữ liệu, gọi API có rate limit hoặc chạy background job. Nó cho phép chạy song song nhưng vẫn giữ quyền kiểm soát áp lực lên hệ thống.

## Lỗi thường gặp

- **Await các tác vụ độc lập từng cái một.** Điều này làm ứng dụng chậm hơn cần thiết. Nếu các tác vụ không phụ thuộc nhau, hãy khởi chạy chúng cùng lúc bằng \`Promise.all\` hoặc queue có giới hạn.
- **Dùng \`Promise.all\` khi có thể chấp nhận thành công một phần.** Một request phụ bị lỗi không phải lúc nào cũng nên làm hỏng cả trang. Hãy dùng \`Promise.allSettled\` khi UI có thể hiển thị dữ liệu một phần.
- **Quên return Promise.** Một hàm khởi chạy async work nhưng không return hoặc await nó sẽ tạo ra hành vi chạy ngầm khó kiểm soát. Lỗi có thể trở thành unhandled rejection.
- **Trộn \`.then\` và \`async/await\` không có lý do rõ ràng.** Cả hai đều hợp lệ, nhưng trộn phong cách thường làm control flow khó đọc hơn.
- **Bỏ qua cancellation.** Với ô tìm kiếm, chuyển route hoặc component unmount, request cũ có thể hoàn tất muộn và ghi đè dữ liệu mới.
- **Chạy quá nhiều tác vụ cùng lúc.** Dùng \`Promise.all(items.map(...))\` trên mảng lớn có thể gây quá tải trình duyệt, API, database hoặc worker process.
- **Catch lỗi quá sớm.** Nếu helper nào cũng catch và che giấu lỗi, caller không thể quyết định đúng việc retry, hiển thị thông báo hay dừng toàn bộ luồng xử lý.

## Best practices

- Thiết kế luồng async dựa trên dependency: bước phụ thuộc thì chạy tuần tự, bước độc lập thì chạy song song.
- Tách dữ liệu bắt buộc và dữ liệu tùy chọn để xử lý lỗi có chủ đích hơn.
- Đặt \`try/catch\` ở các ranh giới có ý nghĩa như route loader, UI action, job handler hoặc API controller.
- Ưu tiên \`Promise.allSettled\` cho dashboard, widget và dữ liệu phụ không quan trọng.
- Dùng \`AbortController\` cho request trên trình duyệt có khả năng trở nên lỗi thời.
- Giới hạn concurrency khi xử lý hàng loạt.
- Return Promise từ helper function để caller có thể await, compose, retry hoặc test.
- Làm rõ các trạng thái loading, success, empty và error trong UI code.
- Khi async work thất bại, log đủ ngữ cảnh: tên operation, định danh input, số lần retry và tên dịch vụ bên ngoài.

Một nguyên tắc hữu ích là thiết kế async code từ kết quả mong muốn trước. Người dùng hoặc hệ thống nên thấy gì khi lỗi xảy ra? Màn hình nên fail toàn bộ, hiển thị dữ liệu một phần, retry âm thầm hay cho phép người dùng thử lại? Khi hành vi đã rõ, cấu trúc Promise thường dễ chọn hơn.

## Khi nào nên dùng và khi nào nên tránh

Dùng \`async/await\` cho phần lớn business logic và request flow. Nó đọc gần giống control flow thông thường và kết hợp tốt với \`try/catch\`.

Dùng \`Promise.all\` khi mọi task đều bắt buộc và độc lập với nhau. Đây là lựa chọn phù hợp khi cần tải nhiều tài nguyên bắt buộc trước khi render một trang.

Dùng \`Promise.allSettled\` khi có thể chấp nhận thành công một phần. Nó hữu ích cho dashboard, analytics widget, recommendation tùy chọn hoặc background refresh.

Dùng queue hoặc concurrency limit khi xử lý nhiều item. Điều này thường gặp trong upload, batch import, gửi email, web scraping, đồng bộ API và background job.

Tránh thêm pattern phức tạp khi bài toán chưa cần. Một form submit nhỏ không cần custom queue. Một API call đơn lẻ không cần retry framework nếu product behavior không yêu cầu. Cũng nên tránh che giấu mọi lỗi bằng fallback chung chung. Silent failure có thể làm hệ thống trông có vẻ ổn định trong khi dữ liệu thật sự đang thiếu.

Trade-off ở đây khá rõ: càng nhiều kiểm soát thì càng nhiều code. Hãy thêm cấu trúc khi nó bảo vệ correctness, performance hoặc trải nghiệm người dùng. Giữ cách viết trực tiếp khi luồng xử lý nhỏ và dễ hiểu.

## Tóm tắt

Xử lý bất đồng bộ trong JavaScript không chỉ là chờ dữ liệu. Nó là cách bạn thiết kế việc công việc bắt đầu, chạy, thất bại, retry, hủy và trả kết quả. Promise cung cấp nền tảng, \`async/await\` làm code dễ đọc hơn, còn queue giúp kiểm soát khi khối lượng công việc tăng lên.

- Chỉ await tuần tự khi bước sau phụ thuộc vào bước trước.
- Dùng \`Promise.all\` cho các tác vụ độc lập nhưng đều bắt buộc.
- Dùng \`Promise.allSettled\` cho dữ liệu tùy chọn và thành công một phần.
- Dùng cancellation để tránh request cũ cập nhật UI.
- Dùng concurrency limit cho xử lý hàng loạt.
- Đặt xử lý lỗi ở nơi ứng dụng có thể đưa ra quyết định thật sự.

Async code có cấu trúc tốt giúp ứng dụng phản hồi nhanh hơn, lỗi rõ ràng hơn và dễ mở rộng hơn khi tính năng ngày càng nhiều.`,category:"languages",tags:["JavaScript","Async/Await","Promises","Concurrency","Frontend"],date:"2026-06-20",readTime:"8 min",readTimeVi:"8 phút"},dS={id:"python-data-pipeline-basics",title:"Python Data Pipeline Basics for Reliable Automation",titleVi:"Nền tảng pipeline dữ liệu Python cho tự động hóa ổn định",excerpt:"A practical structure for building Python data pipelines that ingest, validate, transform, store, and monitor data reliably.",excerptVi:"Cấu trúc thực tế để xây dựng pipeline dữ liệu Python có khả năng thu thập, kiểm tra, biến đổi, lưu trữ và giám sát dữ liệu ổn định.",content:`# Python Data Pipeline Basics for Reliable Automation

Many automation scripts start as a small Python file that reads data from one place, changes a few fields, and writes the result somewhere else. That is fine for a one-time task. The problem appears when the script becomes a daily job, an import process, a reporting workflow, or a small integration between systems. At that point, the code is no longer just a script. It is a data pipeline.

A reliable data pipeline does more than move data. It makes the data flow repeatable, observable, and safe to rerun. It handles bad input without corrupting good records. It records enough context to debug failures. It separates reading, validation, transformation, and storage so each part can be tested and changed without breaking everything else.

Python is a strong choice for this kind of work because it has a simple syntax, mature libraries, and good support for files, HTTP APIs, databases, scheduling, and data processing. But Python alone does not make a pipeline reliable. Reliability comes from structure.

This article explains a practical foundation for building Python data pipelines that can grow from a small automation task into something you can trust in real workflows.

## What problem does this solve?

A data pipeline solves the problem of moving data through a repeatable process. The source may be a CSV file, an API, a database table, a message queue, or a folder of exported reports. The destination may be another database, a data warehouse, an internal API, an object storage bucket, or a generated report.

The risk is that data work often fails in messy ways:

- A source file is missing a column.
- An API returns partial data or times out.
- A number arrives as text with extra spaces.
- A date uses a different format than expected.
- A job runs twice and creates duplicate rows.
- A transformation silently drops records.
- A failure happens at night and nobody knows which records were processed.

A good pipeline reduces these risks by making each stage explicit. Instead of one long function that does everything, the pipeline should answer clear questions:

- Where does data come from?
- What shape should the data have?
- Which records are invalid?
- What transformation rules are applied?
- Where is the output stored?
- Can the job be safely retried?
- What should be logged when something fails?

The goal is not to make every small script enterprise-grade. The goal is to add enough structure so automation remains predictable when inputs, volumes, and requirements change.

## Core concepts

A practical Python data pipeline usually has five stages: ingest, validate, transform, load, and observe.

**Ingestion** is the process of reading data from a source. This may involve opening a CSV file, calling an HTTP API, querying a database, or reading messages from a queue. Ingestion code should focus on access and retrieval, not business rules.

**Validation** checks whether the incoming data is usable. Validation can include required fields, data types, allowed values, date formats, ranges, uniqueness, and referential checks. This stage is important because external data should not be trusted just because the source usually behaves correctly.

**Transformation** converts valid input into the shape your application or destination needs. This may include normalizing text, parsing dates, calculating derived fields, mapping external names to internal names, or joining records with reference data.

**Loading** writes the transformed result to a destination. A loading step should be designed carefully because writes are where duplicates, partial updates, and inconsistent state usually happen.

**Observation** gives visibility into the pipeline. Logs, metrics, counters, and failure reports help you understand what happened after the job ran. For scheduled automation, a pipeline that fails silently is often worse than a pipeline that fails loudly.

These stages should not always become separate classes or frameworks. For small pipelines, simple functions are enough. The important part is the boundary: each stage should have a clear input, a clear output, and a clear reason to change.

## Practical example

Imagine a daily job that imports customers from a CSV export into an application database. The CSV file contains customer ID, email, name, and signup date. The pipeline should reject invalid rows, normalize emails, parse dates, and return a summary that can be logged.

\`\`\`python
from dataclasses import dataclass
from datetime import datetime
import csv


@dataclass
class Customer:
    external_id: str
    email: str
    name: str
    signup_date: datetime


def read_customers(path: str) -> list[dict[str, str]]:
    with open(path, newline="", encoding="utf-8") as file:
        return list(csv.DictReader(file))


def parse_customer(row: dict[str, str]) -> Customer:
    email = row.get("email", "").strip().lower()
    name = row.get("name", "").strip()
    external_id = row.get("customer_id", "").strip()
    signup_date = datetime.strptime(row.get("signup_date", ""), "%Y-%m-%d")

    if not external_id:
        raise ValueError("customer_id is required")
    if "@" not in email:
        raise ValueError("email is invalid")
    if not name:
        raise ValueError("name is required")

    return Customer(
        external_id=external_id,
        email=email,
        name=name,
        signup_date=signup_date,
    )
\`\`\`

This code keeps reading and parsing separate. \`read_customers\` knows how to read a CSV file. \`parse_customer\` knows the expected shape and business rules for one row.

The pipeline can then process all rows and keep invalid records visible:

\`\`\`python
def import_customers(path: str, repository) -> dict[str, int]:
    rows = read_customers(path)
    imported = 0
    rejected = 0

    for index, row in enumerate(rows, start=1):
        try:
            customer = parse_customer(row)
            repository.upsert_customer(customer)
            imported += 1
        except Exception as error:
            rejected += 1
            print(f"row={index} status=rejected reason={error}")

    return {
        "total": len(rows),
        "imported": imported,
        "rejected": rejected,
    }
\`\`\`

The important detail is \`upsert_customer\`. A data import should often be idempotent, meaning it can be run more than once without creating duplicate records. An upsert based on \`external_id\` is usually safer than inserting blindly.

For a real project, \`print\` should become structured logging, and \`repository\` should be backed by a database transaction. The structure remains the same: read input, validate and transform each row, load it safely, and report what happened.

## Common mistakes

- **Putting the whole pipeline in one function.** This makes it hard to test validation, transformation, and storage separately. When something fails, every part of the process must be inspected at once.
- **Trusting source data too much.** Even internal exports change. A missing column, renamed field, or unexpected null can break a job or corrupt output.
- **Skipping idempotency.** If rerunning the job creates duplicates, recovery becomes risky. Use stable keys, upserts, deduplication, or checkpoints.
- **Hiding invalid records.** Dropping bad rows without reporting them creates silent data loss. Rejected records should be counted and inspectable.
- **Mixing business rules with file or API access.** Retrieval code should not decide complex domain behavior. Keep access, validation, and transformation separate.
- **Logging only the error message.** A useful failure log needs context: source name, row number, external ID, operation, and reason.
- **Ignoring partial failure.** A pipeline should define whether one bad record fails the whole job or only rejects that record.
- **Assuming volume will stay small.** Loading an entire file into memory may be fine today but painful later. Streaming can be introduced when volume requires it.

## Best practices

- Start with a simple pipeline shape: ingest, validate, transform, load, observe.
- Use typed structures such as \`dataclass\`, \`TypedDict\`, or Pydantic models for important records.
- Validate data at the boundary before it enters application logic.
- Normalize values consistently: trim text, lower-case emails, parse dates, and convert numeric fields early.
- Design writes to be idempotent where possible.
- Keep rejected records visible through logs, reports, or a dead-letter table.
- Track counts: total records, successful records, rejected records, skipped records, and duration.
- Use transactions for groups of writes that must succeed or fail together.
- Separate configuration from code: file paths, API URLs, credentials, and batch sizes should not be hard-coded.
- Add tests for parsing and transformation rules. These are usually the easiest and highest-value tests in a pipeline.

For scheduled jobs, also consider scheduling and monitoring. A cron job, GitHub Actions workflow, Airflow DAG, or cloud scheduler can run the pipeline, but scheduling is only one part of reliability. You still need clear logs, failure notifications, and a way to rerun the job safely.

## When to use and when to avoid

Use a structured Python data pipeline when data movement is repeated, business-critical, or connected to other systems. It is a good fit for CSV imports, API synchronization, report generation, database cleanup, analytics preparation, IoT data collection, and backend automation.

Use a lightweight script when the task is truly one-time, low-risk, and easy to inspect manually. Not every file conversion needs a full pipeline architecture.

Avoid overengineering early. A small pipeline does not need Airflow, Spark, Kafka, or a complex plugin system by default. Start with clear functions, good validation, safe writes, and useful logs. Add heavier tools when you have real needs such as scheduling many dependent jobs, processing large data volumes, distributing work, or tracking complex lineage.

The trade-off is between speed and control. A quick script is faster to write but harder to operate when it becomes important. A structured pipeline takes more upfront thought but makes failures easier to diagnose and reruns safer.

## Summary

A reliable Python data pipeline is not defined by the number of tools it uses. It is defined by how clearly it handles input, validation, transformation, storage, and observation. The best starting point is often a small set of focused functions with explicit boundaries and predictable failure behavior.

- Separate ingestion, validation, transformation, loading, and observation.
- Treat external data as untrusted until validated.
- Make writes idempotent so reruns are safe.
- Keep rejected records visible.
- Log enough context to debug failures.
- Add tools only when the pipeline has outgrown simple structure.

When automation becomes part of a real workflow, reliability matters more than clever code. A clear pipeline structure helps Python scripts become dependable systems.`,contentVi:`# Nền tảng pipeline dữ liệu Python cho tự động hóa ổn định

Nhiều tác vụ tự động hóa bắt đầu từ một file Python nhỏ: đọc dữ liệu từ một nơi, sửa vài trường, rồi ghi kết quả sang nơi khác. Với công việc chạy một lần, cách đó hoàn toàn ổn. Vấn đề xuất hiện khi script đó trở thành job chạy hằng ngày, quy trình import dữ liệu, workflow tạo báo cáo hoặc phần tích hợp nhỏ giữa nhiều hệ thống. Lúc này, nó không còn chỉ là một script nữa. Nó đã trở thành một data pipeline.

Một pipeline dữ liệu đáng tin cậy không chỉ di chuyển dữ liệu. Nó làm cho luồng dữ liệu có thể chạy lặp lại, dễ quan sát và an toàn khi chạy lại. Nó xử lý input xấu mà không làm hỏng các record tốt. Nó ghi lại đủ ngữ cảnh để debug khi lỗi xảy ra. Nó tách việc đọc dữ liệu, kiểm tra, biến đổi và lưu trữ để từng phần có thể được test và thay đổi độc lập.

Python là lựa chọn tốt cho loại công việc này vì cú pháp dễ đọc, hệ sinh thái thư viện mạnh và hỗ trợ tốt cho file, HTTP API, database, scheduling và xử lý dữ liệu. Nhưng chỉ dùng Python không tự động làm pipeline đáng tin cậy. Độ ổn định đến từ cấu trúc.

Bài viết này trình bày một nền tảng thực tế để xây dựng pipeline dữ liệu Python có thể phát triển từ một tác vụ tự động hóa nhỏ thành một quy trình đủ tin cậy để dùng trong workflow thực tế.

## Chủ đề này giải quyết vấn đề gì?

Data pipeline giải quyết bài toán đưa dữ liệu đi qua một quy trình có thể lặp lại. Nguồn dữ liệu có thể là file CSV, API, bảng database, message queue hoặc thư mục chứa báo cáo export. Đích đến có thể là database khác, data warehouse, internal API, object storage hoặc một file báo cáo đã xử lý.

Rủi ro của công việc dữ liệu là lỗi thường xảy ra theo cách rất khó chịu:

- File nguồn thiếu một cột.
- API trả về dữ liệu thiếu hoặc timeout.
- Số được gửi dưới dạng chuỗi có khoảng trắng thừa.
- Ngày tháng dùng format khác dự kiến.
- Job chạy hai lần và tạo dữ liệu trùng.
- Transformation âm thầm làm mất record.
- Lỗi xảy ra ban đêm và không ai biết record nào đã được xử lý.

Một pipeline tốt giảm các rủi ro này bằng cách làm rõ từng giai đoạn. Thay vì một hàm dài làm tất cả mọi thứ, pipeline nên trả lời được các câu hỏi:

- Dữ liệu đến từ đâu?
- Dữ liệu nên có cấu trúc như thế nào?
- Record nào không hợp lệ?
- Quy tắc biến đổi nào được áp dụng?
- Kết quả được lưu ở đâu?
- Job có thể chạy lại an toàn không?
- Khi lỗi xảy ra, cần log thông tin gì?

Mục tiêu không phải là biến mọi script nhỏ thành hệ thống phức tạp. Mục tiêu là thêm đủ cấu trúc để tự động hóa vẫn dự đoán được khi input, khối lượng dữ liệu và yêu cầu thay đổi.

## Các ý tưởng cốt lõi

Một pipeline dữ liệu Python thực tế thường có năm giai đoạn: ingest, validate, transform, load và observe.

**Ingestion** là quá trình đọc dữ liệu từ nguồn. Đó có thể là mở file CSV, gọi HTTP API, query database hoặc đọc message từ queue. Code ingestion nên tập trung vào việc truy cập và lấy dữ liệu, không nên chứa nhiều business rule.

**Validation** kiểm tra dữ liệu đầu vào có dùng được hay không. Validation có thể bao gồm field bắt buộc, kiểu dữ liệu, giá trị hợp lệ, format ngày tháng, khoảng giá trị, tính duy nhất và kiểm tra quan hệ với dữ liệu khác. Giai đoạn này quan trọng vì dữ liệu bên ngoài không nên được tin tưởng chỉ vì nguồn đó thường hoạt động đúng.

**Transformation** chuyển input hợp lệ sang cấu trúc mà ứng dụng hoặc nơi lưu trữ cần. Việc này có thể bao gồm chuẩn hóa text, parse ngày tháng, tính field dẫn xuất, map tên bên ngoài sang tên nội bộ hoặc join với dữ liệu tham chiếu.

**Loading** ghi kết quả đã biến đổi vào đích đến. Đây là bước cần thiết kế cẩn thận vì thao tác ghi là nơi dễ sinh ra dữ liệu trùng, update một phần hoặc trạng thái không nhất quán.

**Observation** giúp bạn nhìn thấy pipeline đã chạy như thế nào. Logs, metrics, counter và báo cáo lỗi giúp hiểu chuyện gì đã xảy ra sau khi job chạy. Với automation chạy định kỳ, một pipeline lỗi âm thầm thường nguy hiểm hơn pipeline lỗi rõ ràng.

Các giai đoạn này không nhất thiết phải trở thành class hoặc framework riêng. Với pipeline nhỏ, các function đơn giản là đủ. Điều quan trọng là ranh giới: mỗi giai đoạn nên có input rõ, output rõ và lý do thay đổi rõ.

## Ví dụ thực tế

Hãy xét một job hằng ngày import khách hàng từ file CSV export vào database ứng dụng. File CSV có customer ID, email, tên và ngày đăng ký. Pipeline cần loại bỏ dòng không hợp lệ, chuẩn hóa email, parse ngày tháng và trả về summary để log.

\`\`\`python
from dataclasses import dataclass
from datetime import datetime
import csv


@dataclass
class Customer:
    external_id: str
    email: str
    name: str
    signup_date: datetime


def read_customers(path: str) -> list[dict[str, str]]:
    with open(path, newline="", encoding="utf-8") as file:
        return list(csv.DictReader(file))


def parse_customer(row: dict[str, str]) -> Customer:
    email = row.get("email", "").strip().lower()
    name = row.get("name", "").strip()
    external_id = row.get("customer_id", "").strip()
    signup_date = datetime.strptime(row.get("signup_date", ""), "%Y-%m-%d")

    if not external_id:
        raise ValueError("customer_id is required")
    if "@" not in email:
        raise ValueError("email is invalid")
    if not name:
        raise ValueError("name is required")

    return Customer(
        external_id=external_id,
        email=email,
        name=name,
        signup_date=signup_date,
    )
\`\`\`

Đoạn code này tách việc đọc dữ liệu và parse dữ liệu. \`read_customers\` chỉ biết cách đọc file CSV. \`parse_customer\` biết cấu trúc mong đợi và rule cho một dòng dữ liệu.

Pipeline sau đó có thể xử lý toàn bộ dòng và giữ cho record lỗi được nhìn thấy rõ:

\`\`\`python
def import_customers(path: str, repository) -> dict[str, int]:
    rows = read_customers(path)
    imported = 0
    rejected = 0

    for index, row in enumerate(rows, start=1):
        try:
            customer = parse_customer(row)
            repository.upsert_customer(customer)
            imported += 1
        except Exception as error:
            rejected += 1
            print(f"row={index} status=rejected reason={error}")

    return {
        "total": len(rows),
        "imported": imported,
        "rejected": rejected,
    }
\`\`\`

Chi tiết quan trọng là \`upsert_customer\`. Một job import dữ liệu thường nên có tính idempotent, nghĩa là có thể chạy lại nhiều lần mà không tạo record trùng. Upsert dựa trên \`external_id\` thường an toàn hơn insert mù.

Trong dự án thật, \`print\` nên được thay bằng structured logging, còn \`repository\` nên được hỗ trợ bởi database transaction. Nhưng cấu trúc chính vẫn giữ nguyên: đọc input, validate và transform từng dòng, ghi dữ liệu an toàn, rồi báo cáo chuyện gì đã xảy ra.

## Lỗi thường gặp

- **Đặt toàn bộ pipeline trong một hàm.** Cách này làm cho validation, transformation và storage khó test riêng. Khi lỗi xảy ra, bạn phải đọc cả quy trình cùng lúc.
- **Tin dữ liệu nguồn quá mức.** Ngay cả export nội bộ cũng có thể thay đổi. Một cột bị thiếu, field bị đổi tên hoặc giá trị null bất ngờ có thể làm job lỗi hoặc tạo output sai.
- **Bỏ qua idempotency.** Nếu chạy lại job tạo dữ liệu trùng, việc khôi phục sau lỗi sẽ rất rủi ro. Hãy dùng key ổn định, upsert, deduplication hoặc checkpoint.
- **Che giấu record không hợp lệ.** Bỏ qua dòng lỗi mà không báo cáo sẽ tạo mất dữ liệu âm thầm. Record bị reject nên được đếm và có thể kiểm tra lại.
- **Trộn business rule với code đọc file hoặc gọi API.** Code lấy dữ liệu không nên quyết định nhiều logic nghiệp vụ phức tạp. Hãy tách access, validation và transformation.
- **Chỉ log mỗi error message.** Log hữu ích cần có ngữ cảnh: tên nguồn, số dòng, external ID, operation và lý do lỗi.
- **Không định nghĩa partial failure.** Pipeline cần biết một record lỗi sẽ làm fail toàn bộ job hay chỉ reject record đó.
- **Giả định dữ liệu luôn nhỏ.** Đọc toàn bộ file vào memory có thể ổn hôm nay nhưng gây vấn đề sau này. Streaming nên được thêm khi khối lượng dữ liệu yêu cầu.

## Best practices

- Bắt đầu với cấu trúc đơn giản: ingest, validate, transform, load, observe.
- Dùng cấu trúc có type như \`dataclass\`, \`TypedDict\` hoặc Pydantic model cho record quan trọng.
- Validate dữ liệu ở ranh giới trước khi đưa vào logic ứng dụng.
- Chuẩn hóa giá trị nhất quán: trim text, lower-case email, parse ngày tháng và convert số từ sớm.
- Thiết kế thao tác ghi có tính idempotent khi có thể.
- Giữ record bị reject có thể quan sát được qua log, report hoặc dead-letter table.
- Theo dõi các con số: tổng record, record thành công, record bị reject, record bị skip và thời gian chạy.
- Dùng transaction cho các nhóm thao tác ghi cần thành công hoặc thất bại cùng nhau.
- Tách cấu hình khỏi code: đường dẫn file, API URL, credential và batch size không nên hard-code.
- Viết test cho parsing và transformation rule. Đây thường là nhóm test dễ viết và đem lại giá trị cao nhất trong pipeline.

Với job chạy định kỳ, cũng nên nghĩ đến scheduling và monitoring. Cron job, GitHub Actions workflow, Airflow DAG hoặc cloud scheduler có thể chạy pipeline, nhưng scheduling chỉ là một phần của độ tin cậy. Bạn vẫn cần log rõ ràng, thông báo lỗi và cách chạy lại job an toàn.

## Khi nào nên dùng và khi nào nên tránh

Dùng pipeline dữ liệu Python có cấu trúc khi việc di chuyển dữ liệu có tính lặp lại, quan trọng với nghiệp vụ hoặc kết nối nhiều hệ thống. Nó phù hợp cho CSV import, đồng bộ API, tạo báo cáo, dọn dữ liệu database, chuẩn bị dữ liệu phân tích, thu thập dữ liệu IoT và automation backend.

Dùng script nhẹ khi công việc thật sự chỉ chạy một lần, rủi ro thấp và dễ kiểm tra thủ công. Không phải mọi thao tác chuyển đổi file đều cần kiến trúc pipeline đầy đủ.

Tránh overengineering quá sớm. Một pipeline nhỏ không mặc định cần Airflow, Spark, Kafka hoặc plugin system phức tạp. Hãy bắt đầu bằng function rõ ràng, validation tốt, thao tác ghi an toàn và log hữu ích. Thêm công cụ nặng hơn khi bạn có nhu cầu thật như lên lịch nhiều job phụ thuộc nhau, xử lý khối lượng dữ liệu lớn, phân tán công việc hoặc theo dõi lineage phức tạp.

Trade-off nằm giữa tốc độ và khả năng kiểm soát. Script nhanh thì viết nhanh hơn nhưng khó vận hành khi nó trở nên quan trọng. Pipeline có cấu trúc cần suy nghĩ nhiều hơn lúc đầu nhưng giúp debug lỗi dễ hơn và chạy lại an toàn hơn.

## Tóm tắt

Một pipeline dữ liệu Python đáng tin cậy không được định nghĩa bởi số lượng công cụ nó sử dụng. Nó được định nghĩa bởi cách nó xử lý input, validation, transformation, storage và observation rõ ràng đến đâu. Điểm bắt đầu tốt nhất thường là một nhóm function tập trung, có ranh giới rõ và hành vi khi lỗi có thể dự đoán được.

- Tách ingestion, validation, transformation, loading và observation.
- Xem dữ liệu bên ngoài là không đáng tin cho đến khi được validate.
- Thiết kế thao tác ghi idempotent để chạy lại an toàn.
- Giữ record bị reject có thể quan sát được.
- Log đủ ngữ cảnh để debug lỗi.
- Chỉ thêm công cụ khi pipeline đã vượt quá cấu trúc đơn giản.

Khi automation trở thành một phần của workflow thật, độ tin cậy quan trọng hơn code thông minh. Một cấu trúc pipeline rõ ràng giúp script Python trở thành hệ thống có thể phụ thuộc vào.`,category:"languages",tags:["Python","Data Pipeline","Automation","ETL","Backend"],date:"2026-06-18",readTime:"8 min",readTimeVi:"8 phút"},pS={id:"csharp-linq-practical-guide",title:"C# LINQ Practical Guide for Cleaner Business Logic",titleVi:"Hướng dẫn LINQ thực tế trong C# cho business logic sạch hơn",excerpt:"A practical guide to using LINQ for readable filtering, grouping, projection, and business rules without hiding intent or hurting performance.",excerptVi:"Hướng dẫn thực tế để dùng LINQ cho lọc, nhóm, chuyển đổi dữ liệu và business rule dễ đọc mà không che giấu ý định hoặc làm giảm hiệu năng.",content:`# C# LINQ Practical Guide for Cleaner Business Logic

LINQ is one of the most useful parts of everyday C# because it lets developers describe data operations directly in code: filter these records, group them by this key, map them into this result, then calculate a total. Used well, LINQ can make business logic easier to read than a chain of temporary lists and nested loops.

But LINQ can also make code harder to understand when every expression becomes a long pipeline with hidden side effects, repeated enumeration, or database queries that behave differently from in-memory collections. Clean LINQ is not about using the most methods. It is about expressing the rule clearly.

This guide focuses on practical LINQ usage for application code: how to filter, project, group, and calculate results while keeping intent visible and testable.

## What problem does this solve?

Business logic often needs to answer questions about collections:

- Which orders are still unpaid?
- Which customers are eligible for a discount?
- How much revenue came from each product category?
- Which records should be skipped because they are incomplete?
- What DTO should be returned to the API caller?

Without LINQ, these questions often become verbose loops with mutable state. That can be fine for simple logic, but as rules grow, the important idea gets buried inside mechanics: create a list, loop, check condition, add item, update counter, continue.

LINQ solves this by giving collection operations a vocabulary. \`Where\` says filtering. \`Select\` says projection. \`GroupBy\` says grouping. \`Any\` says existence. \`Sum\` says aggregation. When these methods are used carefully, the code reads closer to the business question.

The goal is not to remove all loops. A loop can be clearer when the workflow is step-by-step or has complex branching. The goal is to use LINQ where it makes rules more explicit.

## Core concepts

The first concept is **deferred execution**. Many LINQ methods do not run immediately. They build a query that runs when it is enumerated, for example by \`foreach\`, \`ToList\`, \`FirstOrDefault\`, or \`Count\`. This is powerful, but it means the same query can run multiple times if you enumerate it multiple times.

The second concept is **projection**. \`Select\` should be used to shape data into exactly what the next layer needs. This is especially useful when returning DTOs from service methods or preparing view models.

The third concept is **separating query logic from decisions**. LINQ is good at describing data selection and transformation. It is not always good at hiding complex business rules inside one large expression. If a condition has meaning, give it a name through a method or local variable.

The fourth concept is **knowing the provider**. LINQ over \`IEnumerable<T>\` runs in memory. LINQ over \`IQueryable<T>\`, such as Entity Framework queries, may be translated to SQL. Some methods that work in memory may not translate well to the database. This difference matters for correctness and performance.

## Practical example

Imagine an order service that needs to find customers eligible for a loyalty discount. A customer qualifies when they are active, have at least three completed orders, and have spent at least 500 in total during the current year.

\`\`\`csharp
public sealed record Order(
    Guid Id,
    Guid CustomerId,
    DateTime CreatedAt,
    decimal Total,
    OrderStatus Status);

public sealed record Customer(
    Guid Id,
    string Email,
    bool IsActive);

public sealed record DiscountCandidate(
    Guid CustomerId,
    string Email,
    decimal YearlySpend,
    int CompletedOrders);
\`\`\`

These records give the query clear input and output shapes. The business rule can then be written as a readable pipeline:

\`\`\`csharp
public static IReadOnlyList<DiscountCandidate> FindDiscountCandidates(
    IReadOnlyCollection<Customer> customers,
    IReadOnlyCollection<Order> orders,
    int year)
{
    var activeCustomers = customers
        .Where(customer => customer.IsActive)
        .ToDictionary(customer => customer.Id);

    return orders
        .Where(order => order.Status == OrderStatus.Completed)
        .Where(order => order.CreatedAt.Year == year)
        .Where(order => activeCustomers.ContainsKey(order.CustomerId))
        .GroupBy(order => order.CustomerId)
        .Select(group =>
        {
            var customer = activeCustomers[group.Key];

            return new DiscountCandidate(
                CustomerId: customer.Id,
                Email: customer.Email,
                YearlySpend: group.Sum(order => order.Total),
                CompletedOrders: group.Count());
        })
        .Where(candidate => candidate.CompletedOrders >= 3)
        .Where(candidate => candidate.YearlySpend >= 500m)
        .OrderByDescending(candidate => candidate.YearlySpend)
        .ToList();
}
\`\`\`

The pipeline is not short, but each step has a clear job. It filters orders, groups them by customer, projects each group into a meaningful result, applies final eligibility rules, and sorts the output.

This code also makes one performance decision explicit: active customers are converted to a dictionary before the order query. That avoids repeatedly searching the customer list for every order.

## Common mistakes

- **Writing one giant LINQ expression.** If a pipeline is too dense to debug or explain, split it into named steps. Clear intermediate variables are not a failure.
- **Using LINQ for side effects.** \`Select\` should transform data, not send emails, update records, or write logs. Use a loop when the purpose is performing actions.
- **Enumerating the same query repeatedly.** Calling \`Count\`, then \`Any\`, then \`ToList\` on the same deferred query may repeat work. Materialize with \`ToList\` when reuse is intentional.
- **Forgetting the difference between \`IEnumerable\` and \`IQueryable\`.** A method that works in memory may not translate efficiently to SQL through Entity Framework.
- **Calling \`ToList\` too early.** Materializing too soon can pull more data into memory than needed, especially before filtering.
- **Hiding business rules inside anonymous predicates.** A condition like \`order.Total > 500 && order.Status == Completed\` may be fine once. If it appears in several places, name it.
- **Ignoring null and empty cases.** LINQ can make happy paths elegant, but business code still needs clear behavior for missing data.

## Best practices

- Use \`Where\` for filtering, \`Select\` for shaping, and \`GroupBy\` for aggregation. Keep each step focused.
- Prefer meaningful result types over anonymous objects when the result crosses a method boundary.
- Name important predicates with helper methods when they represent business rules.
- Materialize intentionally with \`ToList\`, \`ToArray\`, or \`ToDictionary\` when you need reuse or fast lookup.
- Keep Entity Framework queries database-friendly. Filter and project before materializing.
- Use \`Any\` for existence checks instead of \`Count() > 0\`.
- Use \`FirstOrDefault\` only when missing data is acceptable, and handle that case clearly.
- Keep long queries formatted vertically so each operation is easy to scan.

For example, a named predicate can make the rule more explicit:

\`\`\`csharp
private static bool IsCompletedInYear(Order order, int year) =>
    order.Status == OrderStatus.Completed &&
    order.CreatedAt.Year == year;
\`\`\`

This small method is easy to test and makes the LINQ pipeline read more like the domain.

## When to use and when to avoid

Use LINQ when you are describing a data query: filtering records, mapping values, grouping items, sorting results, or calculating totals. It is especially useful when the operation can be expressed as a sequence of transformations.

Avoid LINQ when the code is primarily about actions rather than data transformation. If you are sending notifications, updating state, handling retries, or coordinating several services, a normal loop or explicit workflow is often clearer.

Also be careful with LINQ in performance-sensitive paths. LINQ is usually fast enough for application-level logic, but very large collections, repeated enumeration, or complex database translation can become expensive. Measure before rewriting code, but do not ignore obvious inefficiencies such as nested searches over large lists.

The trade-off is readability versus control. LINQ is excellent when it names the shape of the operation. It becomes a problem when it compresses too much behavior into one expression.

## Summary

LINQ can make C# business logic cleaner when it is used to express intent, not to show cleverness. Good LINQ code reads like a sequence of decisions: filter invalid records, group meaningful items, project into a result, then apply final rules.

- Use LINQ to make collection logic readable and testable.
- Keep each query step focused on one purpose.
- Materialize only when there is a reason.
- Name business rules that appear more than once.
- Be careful when LINQ is translated to SQL.
- Prefer explicit loops when the code performs actions or complex workflows.

Clean business logic is not about avoiding loops. It is about making the rule easy to see. LINQ is a strong tool for that when the query tells the same story as the domain.`,contentVi:`# Hướng dẫn LINQ thực tế trong C# cho business logic sạch hơn

LINQ là một trong những phần hữu ích nhất trong C# hằng ngày vì nó cho phép developer mô tả thao tác với dữ liệu trực tiếp trong code: lọc các record này, nhóm theo khóa kia, chuyển thành kết quả mong muốn, rồi tính tổng. Khi dùng đúng, LINQ có thể làm business logic dễ đọc hơn nhiều so với một chuỗi list tạm và vòng lặp lồng nhau.

Nhưng LINQ cũng có thể làm code khó hiểu hơn nếu mọi thứ bị ép vào một pipeline dài, có side effect ẩn, bị enumerate nhiều lần hoặc tạo query database khác với suy nghĩ ban đầu. LINQ sạch không phải là dùng càng nhiều method càng tốt. LINQ sạch là làm cho ý định của rule trở nên rõ ràng.

Bài viết này tập trung vào cách dùng LINQ thực tế trong application code: lọc, chuyển đổi, nhóm và tính toán kết quả mà vẫn giữ được ý định rõ ràng, dễ test và không quá ảo.

## Chủ đề này giải quyết vấn đề gì?

Business logic thường phải trả lời các câu hỏi trên collection:

- Đơn hàng nào chưa thanh toán?
- Khách hàng nào đủ điều kiện nhận giảm giá?
- Doanh thu theo từng nhóm sản phẩm là bao nhiêu?
- Record nào nên bỏ qua vì thiếu dữ liệu?
- DTO nào nên được trả về cho API caller?

Nếu không dùng LINQ, các câu hỏi này thường biến thành vòng lặp dài với nhiều biến trạng thái. Cách đó vẫn ổn với logic đơn giản, nhưng khi rule tăng lên, ý chính dễ bị chôn trong phần cơ học: tạo list, loop, kiểm tra điều kiện, thêm item, cập nhật counter, rồi tiếp tục.

LINQ giải quyết vấn đề này bằng cách cung cấp một bộ từ vựng cho thao tác collection. \`Where\` nghĩa là lọc. \`Select\` nghĩa là chuyển đổi. \`GroupBy\` nghĩa là nhóm. \`Any\` nghĩa là kiểm tra tồn tại. \`Sum\` nghĩa là tổng hợp. Khi dùng cẩn thận, code đọc gần hơn với câu hỏi nghiệp vụ.

Mục tiêu không phải là xóa hết vòng lặp. Vòng lặp vẫn rõ ràng hơn khi workflow có nhiều bước hoặc nhiều nhánh xử lý. Mục tiêu là dùng LINQ ở nơi nó giúp rule dễ nhìn hơn.

## Các ý tưởng cốt lõi

Ý tưởng đầu tiên là **deferred execution**. Nhiều method LINQ không chạy ngay lập tức. Chúng tạo ra một query và query đó chỉ chạy khi được enumerate, ví dụ qua \`foreach\`, \`ToList\`, \`FirstOrDefault\` hoặc \`Count\`. Điều này rất mạnh, nhưng cũng có nghĩa là cùng một query có thể chạy nhiều lần nếu bạn enumerate nhiều lần.

Ý tưởng thứ hai là **projection**. \`Select\` nên được dùng để chuyển dữ liệu sang đúng shape mà tầng tiếp theo cần. Điều này đặc biệt hữu ích khi trả DTO từ service method hoặc chuẩn bị view model.

Ý tưởng thứ ba là **tách query logic khỏi quyết định nghiệp vụ**. LINQ giỏi mô tả việc chọn và biến đổi dữ liệu. Nhưng không phải lúc nào cũng nên giấu business rule phức tạp trong một expression lớn. Nếu một điều kiện có ý nghĩa nghiệp vụ, hãy đặt tên cho nó bằng method hoặc biến trung gian.

Ý tưởng thứ tư là **hiểu provider đang chạy LINQ**. LINQ trên \`IEnumerable<T>\` chạy trong memory. LINQ trên \`IQueryable<T>\`, ví dụ Entity Framework, có thể được dịch sang SQL. Một số method chạy tốt trong memory nhưng không dịch sang database tốt. Sự khác biệt này ảnh hưởng trực tiếp đến correctness và performance.

## Ví dụ thực tế

Hãy xét một order service cần tìm khách hàng đủ điều kiện nhận loyalty discount. Một khách hàng đủ điều kiện khi đang active, có ít nhất ba đơn hàng đã hoàn tất, và tổng chi tiêu trong năm hiện tại đạt ít nhất 500.

\`\`\`csharp
public sealed record Order(
    Guid Id,
    Guid CustomerId,
    DateTime CreatedAt,
    decimal Total,
    OrderStatus Status);

public sealed record Customer(
    Guid Id,
    string Email,
    bool IsActive);

public sealed record DiscountCandidate(
    Guid CustomerId,
    string Email,
    decimal YearlySpend,
    int CompletedOrders);
\`\`\`

Các record này làm rõ input và output của query. Business rule sau đó có thể được viết thành một pipeline dễ đọc:

\`\`\`csharp
public static IReadOnlyList<DiscountCandidate> FindDiscountCandidates(
    IReadOnlyCollection<Customer> customers,
    IReadOnlyCollection<Order> orders,
    int year)
{
    var activeCustomers = customers
        .Where(customer => customer.IsActive)
        .ToDictionary(customer => customer.Id);

    return orders
        .Where(order => order.Status == OrderStatus.Completed)
        .Where(order => order.CreatedAt.Year == year)
        .Where(order => activeCustomers.ContainsKey(order.CustomerId))
        .GroupBy(order => order.CustomerId)
        .Select(group =>
        {
            var customer = activeCustomers[group.Key];

            return new DiscountCandidate(
                CustomerId: customer.Id,
                Email: customer.Email,
                YearlySpend: group.Sum(order => order.Total),
                CompletedOrders: group.Count());
        })
        .Where(candidate => candidate.CompletedOrders >= 3)
        .Where(candidate => candidate.YearlySpend >= 500m)
        .OrderByDescending(candidate => candidate.YearlySpend)
        .ToList();
}
\`\`\`

Pipeline này không quá ngắn, nhưng mỗi bước có nhiệm vụ rõ ràng. Nó lọc đơn hàng, nhóm theo khách hàng, chuyển từng group thành một kết quả có ý nghĩa, áp dụng rule cuối cùng và sắp xếp output.

Đoạn code cũng thể hiện một quyết định performance rõ ràng: active customers được chuyển thành dictionary trước khi xử lý orders. Nhờ đó code không phải tìm kiếm trong danh sách customer lặp lại cho từng order.

## Lỗi thường gặp

- **Viết một LINQ expression quá lớn.** Nếu pipeline quá dày để debug hoặc giải thích, hãy tách thành các bước có tên rõ ràng. Biến trung gian không làm code kém chuyên nghiệp.
- **Dùng LINQ cho side effect.** \`Select\` nên dùng để chuyển đổi dữ liệu, không phải để gửi email, cập nhật record hoặc ghi log. Khi mục tiêu là thực hiện hành động, vòng lặp thường rõ hơn.
- **Enumerate cùng một query nhiều lần.** Gọi \`Count\`, rồi \`Any\`, rồi \`ToList\` trên cùng một deferred query có thể lặp lại công việc. Hãy materialize bằng \`ToList\` nếu việc dùng lại là có chủ đích.
- **Quên khác biệt giữa \`IEnumerable\` và \`IQueryable\`.** Một method chạy tốt trong memory chưa chắc dịch sang SQL hiệu quả qua Entity Framework.
- **Gọi \`ToList\` quá sớm.** Materialize quá sớm có thể kéo nhiều dữ liệu vào memory hơn cần thiết, nhất là trước khi filter.
- **Giấu business rule trong predicate vô danh.** Điều kiện như \`order.Total > 500 && order.Status == Completed\` có thể ổn một lần. Nếu xuất hiện nhiều nơi, hãy đặt tên cho nó.
- **Bỏ qua null và empty case.** LINQ làm happy path đẹp hơn, nhưng business code vẫn cần hành vi rõ ràng khi thiếu dữ liệu.

## Best practices

- Dùng \`Where\` để lọc, \`Select\` để chuyển shape, và \`GroupBy\` để tổng hợp. Mỗi bước nên có một mục đích.
- Ưu tiên result type có tên rõ ràng thay vì anonymous object nếu kết quả đi qua ranh giới method.
- Đặt tên cho predicate quan trọng bằng helper method khi nó đại diện cho business rule.
- Materialize có chủ đích bằng \`ToList\`, \`ToArray\` hoặc \`ToDictionary\` khi cần dùng lại hoặc cần lookup nhanh.
- Giữ query Entity Framework thân thiện với database. Filter và project trước khi materialize.
- Dùng \`Any\` để kiểm tra tồn tại thay vì \`Count() > 0\`.
- Dùng \`FirstOrDefault\` chỉ khi việc không tìm thấy dữ liệu là hợp lệ, và xử lý case đó rõ ràng.
- Format query dài theo chiều dọc để từng operation dễ scan.

Ví dụ, một predicate có tên giúp rule dễ hiểu hơn:

\`\`\`csharp
private static bool IsCompletedInYear(Order order, int year) =>
    order.Status == OrderStatus.Completed &&
    order.CreatedAt.Year == year;
\`\`\`

Method nhỏ này dễ test và làm pipeline LINQ đọc gần với ngôn ngữ nghiệp vụ hơn.

## Khi nào nên dùng và khi nào nên tránh

Dùng LINQ khi bạn đang mô tả một data query: lọc record, map value, nhóm item, sắp xếp kết quả hoặc tính tổng. Nó đặc biệt hữu ích khi thao tác có thể được diễn đạt như một chuỗi transformation.

Tránh LINQ khi code chủ yếu là hành động thay vì biến đổi dữ liệu. Nếu bạn đang gửi notification, cập nhật state, xử lý retry hoặc điều phối nhiều service, vòng lặp hoặc workflow rõ ràng thường dễ đọc hơn.

Cũng cần cẩn thận với LINQ ở các đoạn nhạy cảm về hiệu năng. LINQ thường đủ nhanh cho application-level logic, nhưng collection rất lớn, enumerate nhiều lần hoặc query database phức tạp có thể trở nên đắt. Hãy đo trước khi rewrite code, nhưng đừng bỏ qua những điểm rõ ràng như nested search trên list lớn.

Trade-off nằm giữa readability và control. LINQ rất tốt khi nó gọi tên đúng hình dạng của thao tác. Nó trở thành vấn đề khi nén quá nhiều hành vi vào một expression.

## Tóm tắt

LINQ có thể làm business logic C# sạch hơn khi nó được dùng để diễn đạt ý định, không phải để thể hiện sự phức tạp. LINQ tốt đọc giống một chuỗi quyết định: lọc record không hợp lệ, nhóm item có ý nghĩa, chuyển thành kết quả, rồi áp dụng rule cuối.

- Dùng LINQ để collection logic dễ đọc và dễ test hơn.
- Giữ mỗi bước query tập trung vào một mục đích.
- Chỉ materialize khi có lý do rõ ràng.
- Đặt tên cho business rule xuất hiện nhiều lần.
- Cẩn thận khi LINQ được dịch sang SQL.
- Ưu tiên vòng lặp rõ ràng khi code thực hiện hành động hoặc workflow phức tạp.

Business logic sạch không phải là tránh vòng lặp bằng mọi giá. Điều quan trọng là rule phải dễ nhìn thấy. LINQ là công cụ mạnh cho việc đó khi query kể cùng một câu chuyện với domain.`,category:"languages",tags:["C#","LINQ",".NET","Clean Code","Business Logic"],date:"2026-06-21",readTime:"7 min",readTimeVi:"7 phút"},gS={id:"typescript-generics-cookbook",title:"TypeScript Generics Cookbook for Everyday Components",titleVi:"Cẩm nang TypeScript Generics cho component hằng ngày",excerpt:"Reusable generic patterns for UI components, API helpers, and utility functions.",excerptVi:"Các mẫu generic tái sử dụng cho UI component, API helper và utility function.",content:`# TypeScript Generics Cookbook for Everyday Components

TypeScript generics are often introduced with abstract examples, but their real value appears in everyday application code: reusable components, API helpers, form utilities, table columns, select options, and result wrappers.

A generic is a way to keep type information flexible without losing safety. Instead of writing one component for users, one for products, and one for orders, you can write a component that accepts a type parameter and still knows what fields are available.

This article focuses on practical patterns that frontend developers can use in real projects without turning code into type puzzles.

## What problem does this solve?

Reusable UI often has a tension between flexibility and type safety. If a component is too specific, it cannot be reused. If it accepts \`any\`, it becomes easy to pass the wrong value and only discover the bug at runtime.

Generics help solve this problem by allowing the caller to provide the data shape while the component keeps type relationships intact.

They are useful for:

- Select components that work with many option shapes.
- Tables that render different row types.
- API helpers that return typed data.
- Form utilities that preserve field names.
- Result wrappers for success and failure states.

The goal is not to make every function generic. The goal is to use generics when one piece of code works with multiple types while preserving a meaningful relationship between input and output.

## Core concepts

The first concept is **type parameter**. A generic type parameter such as \`T\` represents a type chosen by the caller.

The second concept is **constraint**. A constraint such as \`T extends { id: string }\` says the generic type can vary, but it must have at least a required shape.

The third concept is **inference**. TypeScript can often infer the generic type from props or function arguments, so callers do not always need to write \`<User>\` explicitly.

The fourth concept is **relationship preservation**. Good generics preserve relationships: if the input is \`User\`, the selected item is also \`User\`; if the API returns \`Product[]\`, the caller receives \`Product[]\`.

The fifth concept is **not overusing generics**. If a component only works for one domain concept, a normal typed component is clearer.

## Practical example

A common generic component is a typed select. It receives options of any shape, but the caller decides how to get the label and value:

\`\`\`ts
type SelectOptionProps<T> = {
  items: T[];
  selectedItem: T | null;
  getKey: (item: T) => string;
  getLabel: (item: T) => string;
  onSelect: (item: T) => void;
};

function SelectOption<T>({
  items,
  selectedItem,
  getKey,
  getLabel,
  onSelect,
}: SelectOptionProps<T>) {
  return (
    <div>
      {items.map((item) => (
        <button
          key={getKey(item)}
          type="button"
          aria-pressed={selectedItem ? getKey(selectedItem) === getKey(item) : false}
          onClick={() => onSelect(item)}
        >
          {getLabel(item)}
        </button>
      ))}
    </div>
  );
}
\`\`\`

This component does not know whether it is rendering users, products, or categories. It only knows how to ask the caller for a key and label. The important part is that \`onSelect\` receives the exact same type as the items.

For API helpers, generics can keep the return type connected to the endpoint parser:

\`\`\`ts
type ApiResult<T> =
  | { ok: true; data: T }
  | { ok: false; error: string };

async function getJson<T>(url: string): Promise<ApiResult<T>> {
  const response = await fetch(url);

  if (!response.ok) {
    return { ok: false, error: "Request failed" };
  }

  const data = (await response.json()) as T;
  return { ok: true, data };
}
\`\`\`

The caller can request \`ApiResult<User[]>\` or \`ApiResult<Product>\`, but the wrapper still uses one implementation for error handling.

## Common mistakes

- **Using \`any\` instead of a generic.** \`any\` removes safety. A generic keeps flexibility while preserving type relationships.
- **Adding generics without relationships.** If \`T\` appears only once, it may not be useful.
- **Over-constraining too early.** A generic component should require only the shape it truly needs.
- **Making component APIs hard to read.** Too many type parameters can make a component harder to use than a specific component.
- **Casting everything with \`as T\`.** A cast tells TypeScript to trust you. It does not validate runtime data.
- **Using generics where a union is clearer.** If there are only two known variants, a discriminated union may be more readable.

## Best practices

- Start with a concrete component, then extract a generic only when reuse is real.
- Use descriptive names such as \`TItem\`, \`TRow\`, or \`TData\` when \`T\` becomes unclear.
- Add constraints only for fields the implementation actually uses.
- Prefer inference-friendly props so callers do not need manual generic annotations.
- Keep runtime validation separate from compile-time generics.
- Use generics for reusable relationships, not for showing advanced type knowledge.
- Write small examples or tests to verify component inference.

For UI components, the best generic API usually asks the caller for behavior: how to get a key, how to render a label, how to handle selection, or how to read a value. This keeps the component reusable without assuming every item has the same field names.

## When to use and when to avoid

Use generics when one implementation should work across multiple data shapes while keeping input and output types connected. Selects, tables, lists, API helpers, cache wrappers, and form utilities are good candidates.

Avoid generics when the component is clearly tied to one domain. A \`UserProfileCard\` probably does not need to be generic. Also avoid generics when they make the call site harder to understand than a simple typed prop.

The trade-off is abstraction. Generics reduce duplication, but they can also hide intent if pushed too far. The best generic code feels boring: flexible enough to reuse, specific enough to understand.

## Summary

TypeScript generics are most useful when they preserve type relationships in reusable code.

- Use generics to avoid \`any\` without losing flexibility.
- Add constraints only when needed.
- Let TypeScript infer types from props and arguments.
- Keep component APIs simple.
- Prefer practical reuse over clever type design.
- Use generics for selects, tables, API helpers, and utilities that truly work across data shapes.`,contentVi:`# Cẩm nang TypeScript Generics cho component hằng ngày

TypeScript generics thường được giới thiệu bằng ví dụ trừu tượng, nhưng giá trị thật của chúng nằm trong code ứng dụng hằng ngày: reusable component, API helper, form utility, table column, select option và result wrapper.

Generic là cách giữ type linh hoạt mà không mất safety. Thay vì viết một component cho user, một component cho product và một component cho order, bạn có thể viết một component nhận type parameter nhưng vẫn biết type nào đang được truyền vào.

Bài viết này tập trung vào các pattern thực tế mà frontend developer có thể dùng trong dự án thật, không biến code thành bài toán type quá phức tạp.

## Chủ đề này giải quyết vấn đề gì?

UI tái sử dụng thường có mâu thuẫn giữa flexibility và type safety. Nếu component quá cụ thể, nó khó reuse. Nếu component nhận \`any\`, bạn dễ truyền sai value và chỉ phát hiện bug ở runtime.

Generics giúp giải quyết vấn đề này bằng cách để caller cung cấp shape dữ liệu, trong khi component vẫn giữ quan hệ type chính xác.

Generics hữu ích cho:

- Select component dùng với nhiều loại option.
- Table render nhiều loại row.
- API helper trả về dữ liệu có type.
- Form utility giữ đúng field name.
- Result wrapper cho success và failure state.

Mục tiêu không phải là biến mọi function thành generic. Mục tiêu là dùng generic khi một đoạn code làm việc với nhiều type nhưng vẫn cần giữ quan hệ có ý nghĩa giữa input và output.

## Các ý tưởng cốt lõi

Ý tưởng đầu tiên là **type parameter**. Type parameter như \`T\` đại diện cho type do caller quyết định.

Ý tưởng thứ hai là **constraint**. Constraint như \`T extends { id: string }\` nói rằng generic type có thể thay đổi, nhưng tối thiểu phải có shape bắt buộc.

Ý tưởng thứ ba là **inference**. TypeScript thường suy luận generic type từ props hoặc function arguments, nên caller không phải lúc nào cũng cần viết \`<User>\`.

Ý tưởng thứ tư là **giữ quan hệ type**. Generic tốt giữ được quan hệ: nếu input là \`User\`, selected item cũng là \`User\`; nếu API trả \`Product[]\`, caller nhận \`Product[]\`.

Ý tưởng thứ năm là **không lạm dụng generic**. Nếu component chỉ phục vụ một domain concept, component typed bình thường thường rõ hơn.

## Ví dụ thực tế

Một generic component phổ biến là typed select. Nó nhận options với bất kỳ shape nào, nhưng caller quyết định cách lấy label và value:

\`\`\`ts
type SelectOptionProps<T> = {
  items: T[];
  selectedItem: T | null;
  getKey: (item: T) => string;
  getLabel: (item: T) => string;
  onSelect: (item: T) => void;
};

function SelectOption<T>({
  items,
  selectedItem,
  getKey,
  getLabel,
  onSelect,
}: SelectOptionProps<T>) {
  return (
    <div>
      {items.map((item) => (
        <button
          key={getKey(item)}
          type="button"
          aria-pressed={selectedItem ? getKey(selectedItem) === getKey(item) : false}
          onClick={() => onSelect(item)}
        >
          {getLabel(item)}
        </button>
      ))}
    </div>
  );
}
\`\`\`

Component này không cần biết nó đang render user, product hay category. Nó chỉ biết hỏi caller cách lấy key và label. Điểm quan trọng là \`onSelect\` nhận đúng type giống như item trong danh sách.

Với API helper, generic giữ return type gắn với dữ liệu caller mong muốn:

\`\`\`ts
type ApiResult<T> =
  | { ok: true; data: T }
  | { ok: false; error: string };

async function getJson<T>(url: string): Promise<ApiResult<T>> {
  const response = await fetch(url);

  if (!response.ok) {
    return { ok: false, error: "Request failed" };
  }

  const data = (await response.json()) as T;
  return { ok: true, data };
}
\`\`\`

Caller có thể yêu cầu \`ApiResult<User[]>\` hoặc \`ApiResult<Product>\`, còn wrapper vẫn dùng một implementation chung cho error handling.

## Lỗi thường gặp

- **Dùng \`any\` thay cho generic.** \`any\` bỏ safety. Generic giữ flexibility nhưng vẫn bảo toàn quan hệ type.
- **Thêm generic nhưng không có quan hệ.** Nếu \`T\` chỉ xuất hiện một lần, nó có thể không mang lại giá trị.
- **Constraint quá sớm.** Generic component chỉ nên yêu cầu shape thật sự cần.
- **Làm API component khó đọc.** Quá nhiều type parameter khiến component khó dùng hơn component cụ thể.
- **Cast mọi thứ bằng \`as T\`.** Cast chỉ bảo TypeScript tin bạn. Nó không validate runtime data.
- **Dùng generic khi union rõ hơn.** Nếu chỉ có hai variant đã biết, discriminated union có thể dễ đọc hơn.

## Best practices

- Bắt đầu bằng component cụ thể, chỉ extract generic khi nhu cầu reuse là thật.
- Dùng tên mô tả như \`TItem\`, \`TRow\`, \`TData\` khi \`T\` không còn rõ.
- Thêm constraint chỉ cho field implementation thật sự dùng.
- Thiết kế props dễ inference để caller không cần annotation thủ công.
- Tách runtime validation khỏi compile-time generic.
- Dùng generic cho quan hệ tái sử dụng, không phải để thể hiện type phức tạp.
- Viết ví dụ nhỏ hoặc test để kiểm tra inference của component.

Với UI component, generic API tốt thường yêu cầu caller cung cấp behavior: lấy key như thế nào, render label ra sao, xử lý selection thế nào hoặc đọc value bằng cách nào. Cách này giúp component reusable mà không giả định mọi item có cùng tên field.

## Khi nào nên dùng và khi nào nên tránh

Dùng generic khi một implementation nên hoạt động với nhiều data shape nhưng vẫn cần nối type input và output. Select, table, list, API helper, cache wrapper và form utility là các ứng viên tốt.

Tránh generic khi component rõ ràng gắn với một domain. \`UserProfileCard\` thường không cần generic. Cũng nên tránh generic khi call site khó hiểu hơn so với prop type đơn giản.

Trade-off nằm ở abstraction. Generic giảm duplication, nhưng có thể che mất ý định nếu dùng quá tay. Generic code tốt thường rất bình thường: đủ linh hoạt để reuse, đủ cụ thể để đọc được.

## Tóm tắt

TypeScript generics hữu ích nhất khi chúng giữ quan hệ type trong code tái sử dụng.

- Dùng generic để tránh \`any\` mà không mất flexibility.
- Thêm constraint chỉ khi cần.
- Để TypeScript infer type từ props và arguments.
- Giữ API component đơn giản.
- Ưu tiên reuse thực tế hơn type design cầu kỳ.
- Dùng generic cho select, table, API helper và utility thật sự làm việc với nhiều data shape.`,category:"languages",tags:["TypeScript","Generics","Frontend","Patterns"],date:"2026-06-19",readTime:"7 min",readTimeVi:"7 phút"},mS={id:"react-query-data-fetching",title:"React Query Data Fetching Patterns for Growing Apps",titleVi:"Mẫu fetch dữ liệu với React Query cho ứng dụng đang phát triển",excerpt:"Patterns for caching, invalidation, loading states, and optimistic updates.",excerptVi:"Các mẫu cho cache, invalidation, trạng thái tải và cập nhật lạc quan.",content:`# React Query Data Fetching Patterns for Growing Apps

React Query is useful because server state is not the same as local UI state. Data fetched from an API can be loading, cached, stale, refetching, failed, invalidated, or optimistically updated. Trying to manage all of that with \`useEffect\` and scattered \`useState\` calls becomes difficult as an app grows.

A good React Query setup is not only about calling \`useQuery\`. It needs consistent query keys, clear stale time decisions, mutation patterns, invalidation rules, and predictable loading and error states.

This article focuses on practical patterns for applications that are moving beyond a few simple API calls.

## What problem does this solve?

Without a server-state library, teams often reimplement the same concerns repeatedly:

- Fetching data when a component mounts.
- Avoiding duplicate requests across screens.
- Showing loading and error states.
- Refetching after a mutation.
- Caching data between navigation.
- Handling optimistic updates.
- Keeping API logic out of UI components.

React Query solves these concerns by treating API data as cached server state with a lifecycle. The library does not replace your API design, but it gives the frontend a consistent way to read, cache, and refresh data.

## Core concepts

The first concept is **query key**. A query key identifies cached data. Good query keys are stable, specific, and include parameters that change the result.

The second concept is **query function**. The query function performs the API request. It should be reusable and not depend on random component state.

The third concept is **stale time**. Stale time controls how long data is considered fresh. Not every API needs immediate refetching.

The fourth concept is **invalidation**. After a mutation changes server data, related queries should be invalidated or updated.

The fifth concept is **mutation state**. Create, update, and delete actions need pending, success, error, and sometimes optimistic behavior.

The sixth concept is **separation**. Components should consume hooks such as \`useOrders\`, while API details stay in client functions.

## Practical example

Start by separating the API function from the React hook:

\`\`\`ts
type Order = {
  id: string;
  status: string;
  totalAmount: number;
};

async function fetchOrders(userId: string): Promise<Order[]> {
  const response = await fetch("/api/users/" + userId + "/orders");

  if (!response.ok) {
    throw new Error("Unable to load orders");
  }

  return response.json();
}
\`\`\`

Then create a feature hook with a stable query key:

\`\`\`ts
import { useQuery } from "@tanstack/react-query";

export function useOrders(userId: string) {
  return useQuery({
    queryKey: ["orders", "by-user", userId],
    queryFn: () => fetchOrders(userId),
    staleTime: 60_000,
  });
}
\`\`\`

For mutations, invalidate the specific data that changed:

\`\`\`ts
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useCancelOrder(userId: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (orderId: string) =>
      fetch("/api/orders/" + orderId + "/cancel", { method: "POST" }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["orders", "by-user", userId],
      });
    },
  });
}
\`\`\`

This pattern keeps the component focused on rendering states, while the hook owns caching and invalidation.

## Common mistakes

- **Using vague query keys.** A key like \`["orders"]\` is not enough if different users, filters, or pages return different data.
- **Putting API logic inside components.** Components become harder to test and reuse.
- **Invalidating everything.** Broad invalidation works at first but causes unnecessary refetching as the app grows.
- **Setting stale time randomly.** Data that changes once per day does not need the same refetch behavior as live inventory.
- **Ignoring mutation errors.** A failed mutation should produce a clear UI state.
- **Using React Query for local UI state.** Modals, tabs, and input drafts are not server state.
- **Optimistic updates without rollback.** If optimistic UI fails, the cache must recover.

## Best practices

- Create query key conventions per feature.
- Include filters, IDs, page numbers, and search terms in query keys when they affect results.
- Keep API clients separate from hooks.
- Wrap common queries in feature hooks.
- Use stale time based on how fresh the data needs to be.
- Invalidate the smallest useful query scope after mutations.
- Show background refetch states differently from initial loading states.
- Handle empty, loading, error, and success states explicitly.
- Use optimistic updates only when rollback behavior is clear.

For growing apps, query key consistency matters. Treat query keys as part of the frontend data contract. If they are messy, cache behavior becomes hard to reason about.

## When to use and when to avoid

Use React Query when the app fetches server data, needs caching, repeats API calls across screens, performs mutations, or needs predictable loading and refetch behavior.

Avoid using it for purely local state such as selected tabs, input values, modal visibility, and temporary UI preferences. Also avoid adding it to a tiny page that performs one simple request and never reuses the data unless the team wants consistency across the app.

The trade-off is an extra data layer. React Query gives structure and caching, but the team still needs to design query keys, invalidation, and API boundaries carefully.

## Summary

React Query helps growing React apps manage server state deliberately.

- Use stable query keys with meaningful parameters.
- Keep API calls outside components.
- Wrap queries and mutations in feature hooks.
- Choose stale time based on freshness needs.
- Invalidate related queries after mutations.
- Keep local UI state separate from server state.`,contentVi:`# Mẫu fetch dữ liệu với React Query cho ứng dụng đang phát triển

React Query hữu ích vì server state không giống local UI state. Dữ liệu fetch từ API có thể đang loading, cached, stale, refetching, failed, invalidated hoặc được optimistic update. Cố quản lý tất cả bằng \`useEffect\` và nhiều \`useState\` rải rác sẽ khó khi app lớn hơn.

Một setup React Query tốt không chỉ là gọi \`useQuery\`. Nó cần query key nhất quán, quyết định stale time rõ ràng, mutation pattern, invalidation rule và loading/error state dễ dự đoán.

Bài viết này tập trung vào pattern thực tế cho ứng dụng đang vượt qua giai đoạn vài API call đơn giản.

## Chủ đề này giải quyết vấn đề gì?

Không có thư viện server-state, team thường tự viết lại cùng một nhóm vấn đề:

- Fetch data khi component mount.
- Tránh duplicate request giữa nhiều màn hình.
- Hiển thị loading và error state.
- Refetch sau mutation.
- Cache data khi navigation.
- Xử lý optimistic update.
- Giữ API logic ra khỏi UI component.

React Query giải quyết các vấn đề này bằng cách xem API data là cached server state có lifecycle. Thư viện không thay thế API design, nhưng cho frontend một cách nhất quán để đọc, cache và refresh data.

## Các ý tưởng cốt lõi

Ý tưởng đầu tiên là **query key**. Query key định danh cached data. Query key tốt ổn định, cụ thể và chứa parameter làm thay đổi kết quả.

Ý tưởng thứ hai là **query function**. Query function thực hiện API request. Nó nên reusable và không phụ thuộc vào state ngẫu nhiên của component.

Ý tưởng thứ ba là **stale time**. Stale time kiểm soát dữ liệu được xem là fresh trong bao lâu. Không phải API nào cũng cần refetch ngay.

Ý tưởng thứ tư là **invalidation**. Sau khi mutation thay đổi server data, query liên quan nên được invalidate hoặc update.

Ý tưởng thứ năm là **mutation state**. Create, update và delete cần pending, success, error và đôi khi optimistic behavior.

Ý tưởng thứ sáu là **separation**. Component nên dùng hook như \`useOrders\`, còn chi tiết API nằm trong client function.

## Ví dụ thực tế

Bắt đầu bằng cách tách API function khỏi React hook:

\`\`\`ts
type Order = {
  id: string;
  status: string;
  totalAmount: number;
};

async function fetchOrders(userId: string): Promise<Order[]> {
  const response = await fetch("/api/users/" + userId + "/orders");

  if (!response.ok) {
    throw new Error("Unable to load orders");
  }

  return response.json();
}
\`\`\`

Sau đó tạo feature hook với query key ổn định:

\`\`\`ts
import { useQuery } from "@tanstack/react-query";

export function useOrders(userId: string) {
  return useQuery({
    queryKey: ["orders", "by-user", userId],
    queryFn: () => fetchOrders(userId),
    staleTime: 60_000,
  });
}
\`\`\`

Với mutation, invalidate đúng dữ liệu đã thay đổi:

\`\`\`ts
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useCancelOrder(userId: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (orderId: string) =>
      fetch("/api/orders/" + orderId + "/cancel", { method: "POST" }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["orders", "by-user", userId],
      });
    },
  });
}
\`\`\`

Pattern này giữ component tập trung vào render state, còn hook sở hữu caching và invalidation.

## Lỗi thường gặp

- **Query key mơ hồ.** Key như \`["orders"]\` không đủ nếu user, filter hoặc page khác nhau trả dữ liệu khác nhau.
- **Đặt API logic trong component.** Component khó test và khó reuse hơn.
- **Invalidate mọi thứ.** Broad invalidation ban đầu dễ dùng nhưng gây refetch không cần thiết khi app lớn.
- **Đặt stale time ngẫu nhiên.** Dữ liệu đổi mỗi ngày không cần refetch giống live inventory.
- **Bỏ qua mutation error.** Mutation lỗi cần UI state rõ ràng.
- **Dùng React Query cho local UI state.** Modal, tab và input draft không phải server state.
- **Optimistic update không có rollback.** Nếu optimistic UI thất bại, cache phải recover.

## Best practices

- Tạo quy ước query key theo feature.
- Đưa filter, ID, page number và search term vào query key khi chúng ảnh hưởng kết quả.
- Tách API client khỏi hook.
- Bọc query phổ biến trong feature hook.
- Chọn stale time theo nhu cầu freshness.
- Invalidate phạm vi nhỏ nhất có ích sau mutation.
- Hiển thị background refetch khác initial loading.
- Xử lý empty, loading, error và success state rõ ràng.
- Chỉ dùng optimistic update khi rollback behavior rõ.

Với app đang phát triển, query key consistency rất quan trọng. Hãy xem query key như một phần của frontend data contract. Nếu query key lộn xộn, cache behavior sẽ khó hiểu.

## Khi nào nên dùng và khi nào nên tránh

Dùng React Query khi app fetch server data, cần caching, lặp API call giữa nhiều màn hình, có mutation hoặc cần loading/refetch behavior dễ dự đoán.

Tránh dùng nó cho state hoàn toàn local như selected tab, input value, modal visibility và temporary UI preference. Cũng không cần thêm vào một page rất nhỏ chỉ gọi một request đơn giản và không reuse data, trừ khi team muốn consistency toàn app.

Trade-off là có thêm data layer. React Query mang lại cấu trúc và caching, nhưng team vẫn cần thiết kế query key, invalidation và API boundary cẩn thận.

## Tóm tắt

React Query giúp React app đang lớn quản lý server state có chủ đích.

- Dùng query key ổn định với parameter có ý nghĩa.
- Giữ API call ngoài component.
- Bọc query và mutation trong feature hook.
- Chọn stale time theo nhu cầu freshness.
- Invalidate query liên quan sau mutation.
- Tách local UI state khỏi server state.`,category:"frameworks",tags:["React","React Query","Data Fetching","Frontend"],date:"2026-06-01",readTime:"7 min",readTimeVi:"7 phút"},fS={id:"nextjs-routing-strategies",title:"Next.js Routing Strategies for Content and Product Pages",titleVi:"Chiến lược routing Next.js cho trang nội dung và sản phẩm",excerpt:"How to choose route structure, layouts, metadata, and dynamic segments.",excerptVi:"Cách chọn cấu trúc route, layout, metadata và dynamic segment.",content:`# Next.js Routing Strategies for Content and Product Pages

Routing in Next.js is not only about creating folders that match URLs. For content and product websites, routing affects SEO, navigation, caching, layout reuse, analytics, redirects, and how easy it is to grow the site later.

A good routing strategy answers practical questions early: Which pages are static? Which pages depend on a database or CMS? Which routes need stable URLs for search engines? Which sections share layout? Which paths may change as the product catalog grows?

This article focuses on App Router style thinking, but the principles also apply to most Next.js projects: design URLs around user intent, keep route groups clear, use dynamic segments carefully, and keep metadata close to the route that owns it.

## What problem does this solve?

Content and product pages usually grow faster than expected. A blog starts with five posts, then adds categories, tags, author pages, case studies, landing pages, and localized versions. A product catalog starts with simple detail pages, then adds collections, filters, comparison pages, and campaign pages.

Without a route strategy, the project can end up with:

- URLs that change often and break shared links.
- Layouts duplicated across many pages.
- Metadata handled inconsistently.
- Product and content routes mixed together.
- Dynamic routes that catch paths they should not catch.
- Hard-to-maintain redirects and legacy URLs.

A clear structure makes the site easier to scale without treating routing as an afterthought.

## Core concepts

The first concept is **URL stability**. URLs are part of the product contract. A blog post or product page should keep a predictable path because users, search engines, and external sites may link to it.

The second concept is **route ownership**. Each route should have a clear owner: content, product, account, marketing, docs, or admin. Ownership helps decide layout, metadata, data loading, and access rules.

The third concept is **dynamic segments**. Segments such as \`[slug]\` are powerful, but they should be scoped carefully. A broad dynamic route can accidentally capture future paths.

The fourth concept is **layout composition**. Next.js layouts let sections share navigation, sidebars, breadcrumbs, or content frames without copying UI.

The fifth concept is **metadata close to content**. Page title, description, canonical URL, and Open Graph data should be generated from the same source as the page content.

## Practical example

A clean content and product structure might look like this:

\`\`\`text
app/
  (site)/
    layout.tsx
    page.tsx
    blog/
      page.tsx
      [slug]/
        page.tsx
    products/
      page.tsx
      [slug]/
        page.tsx
    categories/
      [slug]/
        page.tsx
\`\`\`

The \`(site)\` route group keeps the public website layout separate from other areas such as dashboard or admin routes. The URL does not include \`(site)\`, but the code structure stays clear.

For a blog post, the dynamic route can load content and metadata from the same source:

\`\`\`ts
type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
};

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug);

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: "/blog/" + post.slug,
    },
  };
}
\`\`\`

For product pages, keep the URL focused on the product identity rather than unstable filter state:

\`\`\`text
Good:
/products/noise-cancelling-headphones
/categories/audio

Risky:
/products?category=audio&sort=popular&page=4
as the only shareable product discovery URL
\`\`\`

Query parameters are fine for filters, but important landing pages should have stable routes when they matter for navigation, SEO, campaigns, or analytics.

## Common mistakes

- **Using dynamic routes too broadly.** A root-level \`[slug]\` can conflict with future pages such as \`/about\`, \`/pricing\`, or \`/blog\`.
- **Changing URLs when titles change.** A title can change for clarity, but the slug should remain stable unless a redirect is prepared.
- **Duplicating layouts.** If every content page recreates the same shell, navigation and spacing will drift over time.
- **Ignoring metadata.** Content pages without specific titles and descriptions are weaker for search and sharing.
- **Mixing product filters with product identity.** Filters belong in query params or dedicated category pages; product detail pages should have stable slugs.
- **Forgetting redirects.** Old URLs should redirect intentionally when routes change.

## Best practices

- Design routes from user intent, not only from database tables.
- Keep public content, product, dashboard, and admin routes separated by route groups or folders.
- Use \`[slug]\` for stable human-readable pages.
- Use \`[id]\` or combined slug/id patterns when identity must not depend only on text.
- Generate metadata from the same source as the page content.
- Keep category, tag, and collection pages explicit when they are important entry points.
- Add redirects before changing established URLs.
- Avoid making every filter combination a permanent route.
- Review routes when adding localization, CMS content, or product catalog features.

## When to use and when to avoid

Use structured routing when the site has content pages, product pages, SEO-sensitive pages, or multiple sections with different layouts. It is especially valuable when a CMS, product database, or localization system feeds the site.

Avoid over-engineering routing for a tiny static site with only a few pages. Route groups, nested layouts, and dynamic metadata are useful when they reduce real complexity. They should not make simple pages harder to understand.

The trade-off is between flexibility and clarity. Dynamic routes reduce repetition, but too much dynamism can make ownership unclear. Explicit routes are easier to reason about, but too many explicit pages can become repetitive.

## Summary

Next.js routing is a design decision for how users, search engines, and developers understand the site.

- Keep URLs stable and meaningful.
- Separate content, product, and private app areas.
- Use dynamic segments carefully.
- Put metadata close to the route content.
- Use layouts to avoid repeated shells.
- Plan redirects before changing established paths.`,contentVi:`# Chiến lược routing Next.js cho trang nội dung và sản phẩm

Routing trong Next.js không chỉ là tạo folder khớp với URL. Với website nội dung và sản phẩm, routing ảnh hưởng đến SEO, navigation, caching, layout reuse, analytics, redirect và khả năng mở rộng site sau này.

Một chiến lược routing tốt trả lời sớm các câu hỏi thực tế: Trang nào static? Trang nào phụ thuộc database hoặc CMS? Route nào cần URL ổn định cho search engine? Section nào dùng chung layout? Path nào có thể thay đổi khi catalog sản phẩm lớn hơn?

Bài viết này tập trung theo cách nghĩ của App Router, nhưng nguyên tắc vẫn áp dụng cho hầu hết dự án Next.js: thiết kế URL theo ý định người dùng, giữ route group rõ ràng, dùng dynamic segment cẩn thận và đặt metadata gần route sở hữu nội dung.

## Chủ đề này giải quyết vấn đề gì?

Trang nội dung và sản phẩm thường phát triển nhanh hơn dự đoán. Một blog bắt đầu với vài bài viết, rồi có thêm category, tag, author page, case study, landing page và phiên bản đa ngôn ngữ. Catalog sản phẩm ban đầu chỉ có detail page, sau đó thêm collection, filter, comparison page và campaign page.

Nếu không có chiến lược route, project dễ gặp:

- URL thay đổi thường xuyên và làm hỏng link đã chia sẻ.
- Layout bị copy ở nhiều page.
- Metadata không nhất quán.
- Route product và content bị trộn lẫn.
- Dynamic route bắt nhầm path không nên bắt.
- Redirect và legacy URL khó bảo trì.

Cấu trúc rõ ràng giúp site mở rộng mà không xem routing là phần xử lý sau cùng.

## Các ý tưởng cốt lõi

Ý tưởng đầu tiên là **URL stability**. URL là một phần của contract sản phẩm. Blog post hoặc product page nên có path dễ dự đoán vì user, search engine và website khác có thể link tới.

Ý tưởng thứ hai là **route ownership**. Mỗi route nên có owner rõ: content, product, account, marketing, docs hoặc admin. Ownership giúp quyết định layout, metadata, data loading và access rule.

Ý tưởng thứ ba là **dynamic segment**. Segment như \`[slug]\` rất mạnh, nhưng cần scope cẩn thận. Dynamic route quá rộng có thể bắt nhầm path trong tương lai.

Ý tưởng thứ tư là **layout composition**. Layout của Next.js giúp các section dùng chung navigation, sidebar, breadcrumb hoặc content frame mà không copy UI.

Ý tưởng thứ năm là **metadata gần content**. Page title, description, canonical URL và Open Graph data nên được tạo từ cùng nguồn dữ liệu với nội dung trang.

## Ví dụ thực tế

Cấu trúc cho content và product có thể như sau:

\`\`\`text
app/
  (site)/
    layout.tsx
    page.tsx
    blog/
      page.tsx
      [slug]/
        page.tsx
    products/
      page.tsx
      [slug]/
        page.tsx
    categories/
      [slug]/
        page.tsx
\`\`\`

\`(site)\` route group giúp tách layout website public khỏi dashboard hoặc admin route. URL không chứa \`(site)\`, nhưng code structure vẫn rõ.

Với blog post, dynamic route có thể load content và metadata từ cùng nguồn:

\`\`\`ts
type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
};

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug);

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: "/blog/" + post.slug,
    },
  };
}
\`\`\`

Với product page, hãy giữ URL tập trung vào danh tính sản phẩm thay vì filter state dễ thay đổi:

\`\`\`text
Tốt:
/products/noise-cancelling-headphones
/categories/audio

Rủi ro:
/products?category=audio&sort=popular&page=4
nếu đây là URL duy nhất có thể share cho product discovery
\`\`\`

Query parameter vẫn phù hợp cho filter, nhưng landing page quan trọng nên có route ổn định nếu nó phục vụ navigation, SEO, campaign hoặc analytics.

## Lỗi thường gặp

- **Dùng dynamic route quá rộng.** \`[slug]\` ở root có thể xung đột với các page tương lai như \`/about\`, \`/pricing\` hoặc \`/blog\`.
- **Đổi URL khi đổi title.** Title có thể đổi để rõ hơn, nhưng slug nên ổn định trừ khi đã chuẩn bị redirect.
- **Copy layout.** Nếu mỗi content page tự dựng lại shell giống nhau, navigation và spacing sẽ lệch dần.
- **Bỏ qua metadata.** Content page thiếu title và description riêng sẽ yếu hơn khi search và share.
- **Trộn filter với danh tính product.** Filter nên nằm ở query params hoặc category page; product detail nên có slug ổn định.
- **Quên redirect.** URL cũ nên được redirect có chủ đích khi route thay đổi.

## Best practices

- Thiết kế route theo ý định người dùng, không chỉ theo table database.
- Tách public content, product, dashboard và admin bằng route group hoặc folder.
- Dùng \`[slug]\` cho page ổn định, dễ đọc.
- Dùng \`[id]\` hoặc pattern kết hợp slug/id khi identity không nên phụ thuộc hoàn toàn vào text.
- Generate metadata từ cùng nguồn với page content.
- Tạo category, tag và collection page rõ ràng khi chúng là entry point quan trọng.
- Thêm redirect trước khi đổi URL đã tồn tại.
- Tránh biến mọi tổ hợp filter thành permanent route.
- Review route khi thêm localization, CMS content hoặc product catalog.

## Khi nào nên dùng và khi nào nên tránh

Dùng routing có cấu trúc khi site có content page, product page, page nhạy với SEO hoặc nhiều section dùng layout khác nhau. Cách này đặc biệt hữu ích khi site lấy dữ liệu từ CMS, product database hoặc hệ thống localization.

Tránh over-engineer routing cho site static rất nhỏ chỉ có vài page. Route group, nested layout và dynamic metadata hữu ích khi giảm độ phức tạp thật. Chúng không nên làm page đơn giản khó hiểu hơn.

Trade-off nằm giữa linh hoạt và rõ ràng. Dynamic route giảm lặp code, nhưng quá nhiều dynamic làm ownership mơ hồ. Explicit route dễ hiểu hơn, nhưng quá nhiều page explicit có thể gây lặp.

## Tóm tắt

Routing Next.js là quyết định thiết kế về cách user, search engine và developer hiểu website.

- Giữ URL ổn định và có ý nghĩa.
- Tách content, product và khu vực private app.
- Dùng dynamic segment cẩn thận.
- Đặt metadata gần route content.
- Dùng layout để tránh lặp shell.
- Chuẩn bị redirect trước khi đổi path đã tồn tại.`,category:"frameworks",tags:["Next.js","React","Routing","SEO"],date:"2026-06-17",readTime:"7 min",readTimeVi:"7 phút"},yS={id:"aspnet-core-api-versioning",title:"ASP.NET Core API Versioning Without Breaking Clients",titleVi:"Versioning API ASP.NET Core không làm hỏng client",excerpt:"A compact plan for evolving APIs while keeping existing consumers stable.",excerptVi:"Kế hoạch gọn để phát triển API mà vẫn giữ client hiện tại ổn định.",content:`# ASP.NET Core API Versioning Without Breaking Clients

APIs change because products change. New fields are added, old fields become confusing, validation rules become stricter, and response shapes evolve as clients need more information. The difficult part is not changing the API. The difficult part is changing it without breaking existing clients.

ASP.NET Core gives several ways to version APIs, but versioning is first a product and compatibility decision. A good strategy defines what counts as a breaking change, how long old versions are supported, how clients discover versions, and how teams test compatibility.

This article explains practical API versioning for ASP.NET Core with a focus on stable clients, clear contracts, and gradual migration.

## What problem does this solve?

When an API is consumed by web apps, mobile apps, partners, or internal services, a breaking change can create real incidents. A mobile app may not update immediately. A partner integration may depend on a field name. A frontend deployment may not happen at the same time as the backend.

API versioning helps teams:

- Evolve response and request contracts safely.
- Keep old clients working during migration.
- Document compatibility expectations.
- Avoid hiding breaking changes as "small refactors."
- Release backend and client changes independently.

Without versioning discipline, teams often rely on hope: deploy the backend, assume clients are compatible, and find out later through errors.

## Core concepts

The first concept is **contract compatibility**. Adding an optional response field is usually compatible. Renaming a field, removing a field, changing a type, or making an optional request field required is usually breaking.

The second concept is **version location**. Versions can appear in the URL, header, query string, or media type. URL versioning such as \`/api/v1/orders\` is explicit and easy to debug, while header versioning keeps URLs cleaner but can be less visible.

The third concept is **support window**. A versioning strategy should say how long old versions remain available and how deprecation is communicated.

The fourth concept is **separate contracts from implementation**. Two API versions can share service logic while exposing different request and response DTOs.

The fifth concept is **testing compatibility**. Versioned APIs should have tests that protect old behavior, not only tests for the newest version.

## Practical example

A simple URL-based version structure in ASP.NET Core can look like this:

\`\`\`csharp
[ApiController]
[Route("api/v{version:apiVersion}/orders")]
[ApiVersion("1.0")]
public sealed class OrdersV1Controller : ControllerBase
{
    [HttpGet("{id:guid}")]
    public async Task<ActionResult<OrderV1Response>> GetOrder(Guid id)
    {
        var order = await orderService.GetOrderAsync(id);
        if (order is null) return NotFound();

        return Ok(new OrderV1Response(
            order.Id,
            order.Status,
            order.TotalAmount));
    }
}
\`\`\`

If version 2 needs a richer response, avoid changing \`OrderV1Response\` in place. Add a new contract:

\`\`\`csharp
public sealed record OrderV1Response(
    Guid Id,
    string Status,
    decimal TotalAmount);

public sealed record OrderV2Response(
    Guid Id,
    string Status,
    decimal TotalAmount,
    string Currency,
    DateTimeOffset CreatedAt);
\`\`\`

The service can still be shared. The API layer maps the same domain object into different contracts. This keeps business logic centralized while keeping client contracts stable.

For deprecation, make the policy visible:

\`\`\`text
API version: v1
Status: deprecated
Supported until: 2026-12-31
Migration target: v2
Breaking reason: response now includes currency and normalized timestamps
\`\`\`

This is more professional than silently changing behavior and expecting every client to adapt immediately.

## Common mistakes

- **Versioning every small change.** Adding optional response fields usually does not require a new version.
- **Breaking old DTOs.** If \`V1Response\` changes shape, it is no longer a stable v1 contract.
- **Mixing versioning with business branching.** API versions should expose contracts; they should not duplicate unrelated business logic.
- **No deprecation plan.** Keeping old versions forever creates maintenance cost. Removing them suddenly breaks clients.
- **Only testing the latest version.** Old versions need regression tests while they are supported.
- **Using version numbers without documentation.** A version number is not enough; clients need migration notes.

## Best practices

- Define what your team considers a breaking change.
- Prefer additive changes when possible.
- Keep request and response DTOs version-specific.
- Share application services where behavior is the same.
- Use clear routes, headers, or conventions consistently.
- Document version status: current, deprecated, or retired.
- Add tests for supported versions.
- Communicate deprecation before removing endpoints.
- Track usage of old versions through logs or analytics.

Compatibility should be reviewed during pull requests. If a change modifies a public DTO, validation rule, status code, or error shape, reviewers should ask whether clients can still work.

## When to use and when to avoid

Use API versioning when external clients, mobile apps, partner integrations, or multiple frontend deployments depend on the API. It is also useful when a product needs long-lived contracts or independent release schedules.

Avoid introducing heavy versioning for a private prototype where the backend and frontend are deployed together and no external client depends on the contract. In that case, simple additive changes and clear communication may be enough.

The trade-off is maintenance. Versioning protects clients, but every supported version adds documentation, tests, monitoring, and code paths. The strategy should protect real consumers, not create ceremony for every endpoint.

## Summary

ASP.NET Core API versioning works best when it is treated as compatibility design, not only routing configuration.

- Know what counts as a breaking change.
- Keep versioned DTOs stable.
- Prefer additive evolution.
- Share service logic where possible.
- Test all supported versions.
- Deprecate versions with clear timelines and migration notes.`,contentVi:`# Versioning API ASP.NET Core không làm hỏng client

API thay đổi vì sản phẩm thay đổi. Field mới được thêm vào, field cũ trở nên khó hiểu, validation rule chặt hơn và response shape phát triển khi client cần nhiều thông tin hơn. Phần khó không phải là thay đổi API. Phần khó là thay đổi mà không làm hỏng client hiện tại.

ASP.NET Core có nhiều cách để version API, nhưng versioning trước hết là quyết định về product và compatibility. Một chiến lược tốt định nghĩa breaking change là gì, version cũ được hỗ trợ bao lâu, client khám phá version như thế nào và team test compatibility ra sao.

Bài viết này giải thích API versioning trong ASP.NET Core theo hướng thực tế: giữ client ổn định, contract rõ ràng và migration từng bước.

## Chủ đề này giải quyết vấn đề gì?

Khi API được dùng bởi web app, mobile app, partner hoặc internal service, breaking change có thể tạo incident thật. Mobile app không phải lúc nào cũng update ngay. Partner integration có thể phụ thuộc vào tên field. Frontend deployment có thể không diễn ra cùng lúc với backend.

API versioning giúp team:

- Phát triển request và response contract an toàn.
- Giữ client cũ hoạt động trong lúc migration.
- Ghi rõ kỳ vọng compatibility.
- Tránh che breaking change dưới tên "refactor nhỏ".
- Release backend và client độc lập hơn.

Không có kỷ luật versioning, team thường dựa vào may mắn: deploy backend, hy vọng client tương thích và chỉ phát hiện vấn đề khi có lỗi.

## Các ý tưởng cốt lõi

Ý tưởng đầu tiên là **contract compatibility**. Thêm optional response field thường là compatible. Đổi tên field, xóa field, đổi type hoặc biến optional request field thành required thường là breaking.

Ý tưởng thứ hai là **vị trí version**. Version có thể nằm trong URL, header, query string hoặc media type. URL versioning như \`/api/v1/orders\` rõ ràng và dễ debug, còn header versioning giữ URL sạch hơn nhưng ít nhìn thấy hơn.

Ý tưởng thứ ba là **support window**. Chiến lược versioning nên nói rõ version cũ còn được hỗ trợ bao lâu và deprecation được thông báo thế nào.

Ý tưởng thứ tư là **tách contract khỏi implementation**. Hai API version có thể dùng chung service logic nhưng expose request và response DTO khác nhau.

Ý tưởng thứ năm là **test compatibility**. API versioned cần test bảo vệ behavior cũ, không chỉ test cho version mới nhất.

## Ví dụ thực tế

Cấu trúc URL-based versioning đơn giản trong ASP.NET Core có thể như sau:

\`\`\`csharp
[ApiController]
[Route("api/v{version:apiVersion}/orders")]
[ApiVersion("1.0")]
public sealed class OrdersV1Controller : ControllerBase
{
    [HttpGet("{id:guid}")]
    public async Task<ActionResult<OrderV1Response>> GetOrder(Guid id)
    {
        var order = await orderService.GetOrderAsync(id);
        if (order is null) return NotFound();

        return Ok(new OrderV1Response(
            order.Id,
            order.Status,
            order.TotalAmount));
    }
}
\`\`\`

Nếu version 2 cần response giàu thông tin hơn, đừng sửa \`OrderV1Response\` trực tiếp. Hãy thêm contract mới:

\`\`\`csharp
public sealed record OrderV1Response(
    Guid Id,
    string Status,
    decimal TotalAmount);

public sealed record OrderV2Response(
    Guid Id,
    string Status,
    decimal TotalAmount,
    string Currency,
    DateTimeOffset CreatedAt);
\`\`\`

Service vẫn có thể dùng chung. API layer map cùng một domain object thành các contract khác nhau. Cách này giữ business logic tập trung nhưng vẫn giữ contract client ổn định.

Với deprecation, hãy làm policy rõ ràng:

\`\`\`text
API version: v1
Status: deprecated
Supported until: 2026-12-31
Migration target: v2
Breaking reason: response now includes currency and normalized timestamps
\`\`\`

Cách này chuyên nghiệp hơn việc âm thầm đổi behavior rồi kỳ vọng mọi client tự thích nghi ngay.

## Lỗi thường gặp

- **Versioning mọi thay đổi nhỏ.** Thêm optional response field thường không cần version mới.
- **Làm hỏng DTO cũ.** Nếu \`V1Response\` đổi shape, nó không còn là contract v1 ổn định.
- **Trộn versioning với business branching.** API version nên expose contract, không nên nhân đôi business logic không liên quan.
- **Không có kế hoạch deprecation.** Giữ version cũ mãi mãi tạo chi phí bảo trì. Xóa đột ngột lại làm hỏng client.
- **Chỉ test version mới nhất.** Version cũ cần regression test trong thời gian còn được hỗ trợ.
- **Có số version nhưng thiếu tài liệu.** Số version là chưa đủ; client cần migration note.

## Best practices

- Định nghĩa rõ breaking change với team.
- Ưu tiên thay đổi additive khi có thể.
- Giữ request và response DTO riêng theo version.
- Dùng chung application service khi behavior giống nhau.
- Dùng route, header hoặc convention một cách nhất quán.
- Ghi rõ trạng thái version: current, deprecated hoặc retired.
- Thêm test cho các version còn hỗ trợ.
- Thông báo deprecation trước khi xóa endpoint.
- Theo dõi usage của version cũ qua log hoặc analytics.

Compatibility nên được review trong pull request. Nếu thay đổi public DTO, validation rule, status code hoặc error shape, reviewer nên hỏi client hiện tại còn hoạt động không.

## Khi nào nên dùng và khi nào nên tránh

Dùng API versioning khi external client, mobile app, partner integration hoặc nhiều frontend deployment phụ thuộc vào API. Nó cũng hữu ích khi sản phẩm cần contract sống lâu hoặc release schedule độc lập.

Tránh đưa versioning nặng vào prototype nội bộ khi backend và frontend luôn deploy cùng nhau và không có client bên ngoài phụ thuộc contract. Trong trường hợp đó, thay đổi additive và giao tiếp rõ có thể đã đủ.

Trade-off là chi phí bảo trì. Versioning bảo vệ client, nhưng mỗi version được hỗ trợ đều cần documentation, test, monitoring và code path. Chiến lược nên bảo vệ consumer thật, không tạo nghi thức cho mọi endpoint.

## Tóm tắt

API versioning trong ASP.NET Core hiệu quả nhất khi được xem là thiết kế compatibility, không chỉ là cấu hình routing.

- Biết rõ điều gì là breaking change.
- Giữ DTO theo version ổn định.
- Ưu tiên phát triển theo hướng additive.
- Dùng chung service logic khi có thể.
- Test mọi version còn hỗ trợ.
- Deprecate version với timeline và migration note rõ ràng.`,category:"frameworks",tags:["ASP.NET Core","API","Backend","Versioning"],date:"2026-06-16",readTime:"7 min",readTimeVi:"7 phút"},vS={id:"flutter-state-management-options",title:"Flutter State Management Options: Choosing the Right Fit",titleVi:"Các lựa chọn quản lý state trong Flutter: Chọn cách phù hợp",excerpt:"A comparison of state management approaches for small and growing Flutter apps.",excerptVi:"So sánh các cách quản lý state cho ứng dụng Flutter nhỏ và đang mở rộng.",content:`# Flutter State Management Options: Choosing the Right Fit

State management in Flutter is not about finding one library that wins every situation. It is about choosing a level of structure that matches the size of the feature, the lifetime of the state, the team skill level, and the cost of future changes.

A settings toggle, a login session, a shopping cart, cached API data, and a multi-step checkout flow do not need the same solution. If every state is treated as global state, the app becomes hard to reason about. If every feature keeps state locally, screens become difficult to connect.

This article gives a practical map for choosing between local state, inherited state, Provider, Riverpod, Bloc, and simpler service-based approaches.

## What problem does this solve?

Flutter apps become difficult to maintain when state ownership is unclear. A value may be updated in one widget, read by another widget, fetched from an API, cached locally, and reset after logout. Without a clear pattern, teams run into duplicated fetches, inconsistent UI, stale data, and widgets that rebuild more than necessary.

State management helps answer:

- Who owns this data?
- How long should this data live?
- Which widgets should rebuild when it changes?
- Is the state local UI state or shared application state?
- Does the state come from an API, local storage, or user input?
- How will we test the logic?

The best choice is usually the simplest one that still keeps ownership clear.

## Core concepts

The first concept is **state lifetime**. Some state lives only while one widget is on screen, such as whether a password field is visible. Other state lives across routes, such as authentication or cart contents.

The second concept is **state scope**. Local state should stay local. Shared state should be lifted to a place where all consumers can access it without passing props through many layers.

The third concept is **state source**. UI state, server state, cached state, and persisted state have different rules. Server state often needs loading, error, refresh, and stale handling.

The fourth concept is **rebuild control**. Good state management updates the right parts of the UI without forcing unrelated widgets to rebuild.

The fifth concept is **testability**. Business logic should be testable without rendering the whole widget tree.

## Practical example

For small local state, \`setState\` is still valid:

\`\`\`text
class PasswordFieldState extends State<PasswordField> {
  bool obscureText = true;

  void toggleVisibility() {
    setState(() {
      obscureText = !obscureText;
    });
  }
}
\`\`\`

This is appropriate because the state belongs to one widget and does not need to be shared.

For shared feature state, use a dedicated controller or notifier. The idea is to keep mutation logic outside the widget:

\`\`\`text
class CartController extends ChangeNotifier {
  final List<CartItem> _items = [];

  List<CartItem> get items => List.unmodifiable(_items);

  void addItem(Product product) {
    _items.add(CartItem(product: product, quantity: 1));
    notifyListeners();
  }
}
\`\`\`

The widget can listen to the controller, while the controller owns the rules for changing the cart. The same idea can be implemented with Provider, Riverpod Notifier, Bloc, or another pattern.

## Common mistakes

- **Making everything global.** Global state is convenient at first but makes ownership and cleanup harder.
- **Using a heavy pattern for tiny state.** A simple toggle does not need Bloc or a global provider.
- **Keeping business rules inside widgets.** Widgets should coordinate UI; complex rules belong in controllers, use cases, or services.
- **Mixing server state and UI state.** API data needs refresh, error, loading, and caching behavior. A text field value does not.
- **Ignoring rebuild scope.** If one small change rebuilds a whole screen, performance and debugging both suffer.
- **Choosing a library before defining the problem.** The library matters less than state lifetime, scope, and ownership.

## Best practices

- Use \`setState\` for short-lived state owned by one widget.
- Use Provider or Riverpod for shared state that needs dependency injection and clear ownership.
- Use Bloc or Cubit when events, transitions, and testable flows are important.
- Keep API calls and storage access outside widgets.
- Separate UI state from domain state.
- Keep state close to the feature unless it truly belongs to the whole app.
- Prefer explicit loading, empty, error, and success states for async data.
- Test controllers or blocs without rendering the full UI when possible.

For growing apps, consistency is more important than chasing every new library. Pick a small set of patterns and document when the team should use each one.

## When to use and when to avoid

Use simple local state when the value affects only one widget or one screen. Use shared state management when multiple screens need the same data, when logic must be tested independently, or when async flows become difficult to coordinate.

Avoid heavy architecture for prototypes or simple screens. Also avoid keeping everything in \`setState\` once the app has authentication, caching, offline data, or multi-screen workflows.

The trade-off is structure versus speed. Less structure is faster at the beginning. More structure becomes valuable when the app and team grow.

## Summary

Flutter state management is a design choice about ownership, lifetime, and change propagation.

- Keep local state local.
- Move shared rules into controllers, not widgets.
- Match the solution to state lifetime and scope.
- Treat async server state differently from UI state.
- Choose Provider, Riverpod, Bloc, or simple services based on real complexity.
- Keep the team consistent instead of mixing patterns randomly.`,contentVi:`# Các lựa chọn quản lý state trong Flutter: Chọn cách phù hợp

Quản lý state trong Flutter không phải là tìm một thư viện thắng mọi tình huống. Điều quan trọng là chọn mức cấu trúc phù hợp với độ lớn của feature, vòng đời của state, kỹ năng team và chi phí thay đổi về sau.

Một settings toggle, login session, shopping cart, cached API data và checkout nhiều bước không cần cùng một giải pháp. Nếu state nào cũng đưa thành global state, app sẽ khó hiểu. Nếu state nào cũng giữ local, các màn hình lại khó kết nối với nhau.

Bài viết này đưa ra bản đồ thực tế để chọn giữa local state, inherited state, Provider, Riverpod, Bloc và cách tổ chức bằng service/controller đơn giản.

## Chủ đề này giải quyết vấn đề gì?

Flutter app trở nên khó bảo trì khi ownership của state không rõ. Một giá trị có thể được update ở widget này, đọc ở widget khác, fetch từ API, cache local và reset sau logout. Không có pattern rõ ràng, team dễ gặp duplicated fetch, UI không nhất quán, stale data và widget rebuild nhiều hơn cần thiết.

State management giúp trả lời:

- Ai sở hữu dữ liệu này?
- Dữ liệu này sống trong bao lâu?
- Widget nào cần rebuild khi nó thay đổi?
- Đây là local UI state hay shared application state?
- State đến từ API, local storage hay input của user?
- Logic này sẽ được test như thế nào?

Lựa chọn tốt nhất thường là cách đơn giản nhất nhưng vẫn giữ ownership rõ.

## Các ý tưởng cốt lõi

Ý tưởng đầu tiên là **state lifetime**. Một số state chỉ sống khi một widget còn trên màn hình, như việc password field có đang ẩn không. State khác sống qua nhiều route, như authentication hoặc cart.

Ý tưởng thứ hai là **state scope**. Local state nên ở local. Shared state nên được đưa đến nơi các consumer có thể truy cập mà không phải truyền prop qua nhiều tầng.

Ý tưởng thứ ba là **state source**. UI state, server state, cached state và persisted state có quy tắc khác nhau. Server state thường cần loading, error, refresh và stale handling.

Ý tưởng thứ tư là **kiểm soát rebuild**. State management tốt cập nhật đúng phần UI cần thay đổi, không kéo theo widget không liên quan.

Ý tưởng thứ năm là **testability**. Business logic nên test được mà không cần render toàn bộ widget tree.

## Ví dụ thực tế

Với state local nhỏ, \`setState\` vẫn hoàn toàn phù hợp:

\`\`\`text
class PasswordFieldState extends State<PasswordField> {
  bool obscureText = true;

  void toggleVisibility() {
    setState(() {
      obscureText = !obscureText;
    });
  }
}
\`\`\`

Cách này phù hợp vì state thuộc về một widget và không cần chia sẻ.

Với state dùng chung trong feature, hãy dùng controller hoặc notifier riêng. Ý tưởng là đưa mutation logic ra khỏi widget:

\`\`\`text
class CartController extends ChangeNotifier {
  final List<CartItem> _items = [];

  List<CartItem> get items => List.unmodifiable(_items);

  void addItem(Product product) {
    _items.add(CartItem(product: product, quantity: 1));
    notifyListeners();
  }
}
\`\`\`

Widget có thể listen controller, còn controller sở hữu rule thay đổi cart. Ý tưởng tương tự có thể triển khai bằng Provider, Riverpod Notifier, Bloc hoặc pattern khác.

## Lỗi thường gặp

- **Đưa mọi thứ thành global.** Global state tiện lúc đầu nhưng làm ownership và cleanup khó hơn.
- **Dùng pattern nặng cho state nhỏ.** Một toggle đơn giản không cần Bloc hoặc global provider.
- **Đặt business rule trong widget.** Widget nên điều phối UI; rule phức tạp nên ở controller, use case hoặc service.
- **Trộn server state và UI state.** API data cần refresh, error, loading và caching. Giá trị text field thì không.
- **Bỏ qua phạm vi rebuild.** Một thay đổi nhỏ mà rebuild cả màn hình sẽ làm performance và debugging kém hơn.
- **Chọn library trước khi định nghĩa vấn đề.** Library ít quan trọng hơn lifetime, scope và ownership của state.

## Best practices

- Dùng \`setState\` cho state ngắn hạn thuộc về một widget.
- Dùng Provider hoặc Riverpod cho shared state cần dependency injection và ownership rõ.
- Dùng Bloc hoặc Cubit khi event, transition và flow dễ test là quan trọng.
- Đưa API call và storage access ra khỏi widget.
- Tách UI state khỏi domain state.
- Giữ state gần feature, trừ khi nó thật sự thuộc toàn app.
- Luôn có loading, empty, error và success state rõ ràng cho async data.
- Test controller hoặc bloc mà không cần render toàn bộ UI khi có thể.

Với app đang lớn dần, consistency quan trọng hơn việc chạy theo mọi thư viện mới. Hãy chọn một nhóm pattern nhỏ và ghi rõ khi nào team dùng từng pattern.

## Khi nào nên dùng và khi nào nên tránh

Dùng local state đơn giản khi giá trị chỉ ảnh hưởng một widget hoặc một màn hình. Dùng shared state management khi nhiều màn hình cần cùng dữ liệu, logic cần test độc lập hoặc async flow khó điều phối.

Tránh kiến trúc nặng cho prototype hoặc màn hình đơn giản. Cũng tránh giữ mọi thứ bằng \`setState\` khi app đã có authentication, caching, offline data hoặc workflow nhiều màn hình.

Trade-off là cấu trúc và tốc độ. Ít cấu trúc giúp đi nhanh lúc đầu. Nhiều cấu trúc trở nên có giá trị khi app và team lớn hơn.

## Tóm tắt

Quản lý state Flutter là quyết định thiết kế về ownership, lifetime và cách lan truyền thay đổi.

- Giữ local state ở local.
- Đưa shared rules vào controller, không nhét trong widget.
- Chọn giải pháp theo lifetime và scope của state.
- Xử lý async server state khác UI state.
- Chọn Provider, Riverpod, Bloc hoặc service đơn giản dựa trên độ phức tạp thật.
- Giữ team nhất quán thay vì trộn pattern ngẫu nhiên.`,category:"frameworks",tags:["Flutter","Dart","State Management","Mobile"],date:"2026-06-15",readTime:"7 min",readTimeVi:"7 phút"},bS={id:"database-indexing-strategy",title:"Database Indexing Strategy for Faster Queries",titleVi:"Chiến lược indexing database để truy vấn nhanh hơn",excerpt:"A practical guide to choosing indexes based on access patterns and query plans.",excerptVi:"Hướng dẫn chọn index dựa trên pattern truy cập và query plan.",content:`# Database Indexing Strategy for Faster Queries

Database indexing is one of the most practical ways to improve query performance, but it is also one of the easiest areas to misuse. An index can make a slow page feel instant. The wrong index can waste storage, slow down writes, and give the team a false sense that performance has been solved.

The useful way to think about indexing is not "add indexes everywhere." It is "understand how the application reads data, then create indexes that support those access patterns." This article focuses on that practical strategy: reading query intent, checking query plans, choosing compound indexes, and avoiding common traps.

## What problem does this solve?

As an application grows, database queries often become slower for predictable reasons. Tables contain more rows, screens filter by more fields, reports aggregate more data, and APIs start serving concurrent users. A query that scanned 500 rows during development may scan 5 million rows in production.

Indexes help the database find relevant rows without checking every row. They are especially useful for:

- Filtering with \`WHERE\`.
- Sorting with \`ORDER BY\`.
- Joining related tables.
- Enforcing uniqueness.
- Supporting pagination and search screens.

The goal is not only speed. A good indexing strategy makes performance predictable. It gives developers a way to reason about why a query is fast or slow instead of guessing.

## Core concepts

The first concept is **access pattern**. An access pattern describes how the application actually reads data. For example: "show the newest orders for one user" or "find active products in a category sorted by price." Indexes should be designed from these patterns.

The second concept is **selectivity**. A field is selective when it narrows the result set significantly. Indexing a column with many repeated values, such as \`status\`, may help only when combined with another column.

The third concept is **compound indexes**. Many real queries filter and sort by more than one field. A compound index can support a query better than several separate indexes when the column order matches the query.

The fourth concept is **query plans**. Tools such as \`EXPLAIN\` show whether the database uses an index, scans many rows, sorts in memory, or joins inefficiently. Without query plans, indexing becomes guesswork.

The fifth concept is **write cost**. Every index must be updated when rows are inserted, updated, or deleted. Indexes speed up reads but add cost to writes and storage.

## Practical example

Assume an application needs to show a user's latest orders:

\`\`\`text
SELECT id, status, total_amount, created_at
FROM orders
WHERE user_id = 42
ORDER BY created_at DESC
LIMIT 20;
\`\`\`

A useful index for this access pattern is:

\`\`\`text
CREATE INDEX idx_orders_user_created
ON orders (user_id, created_at DESC);
\`\`\`

The index starts with \`user_id\` because the query first narrows orders to one user. It then includes \`created_at\` because the query sorts by newest order. This lets the database locate one user's rows and return them in the needed order without scanning or sorting the whole table.

Now consider a product listing page:

\`\`\`text
SELECT id, name, price
FROM products
WHERE category_id = 8 AND is_active = true
ORDER BY price ASC
LIMIT 30;
\`\`\`

A practical index might be:

\`\`\`text
CREATE INDEX idx_products_category_active_price
ON products (category_id, is_active, price);
\`\`\`

This supports the filtering fields first and the sorting field last. But the final decision should still be checked with a query plan and real row counts. If almost every product is active, \`is_active\` may not add much selectivity, but it may still help when combined with category and price.

## Common mistakes

- **Adding indexes before understanding queries.** Indexes should come from observed access patterns, not from guessing which columns look important.
- **Creating one index per column.** Several single-column indexes are not the same as one well-designed compound index.
- **Ignoring column order.** In compound indexes, order matters. Put the columns that match filtering and sorting needs in a deliberate sequence.
- **Indexing low-value fields alone.** A column like \`status\` may have only a few values, so an index on it alone may not reduce much work.
- **Not checking query plans.** A database may ignore an index if statistics, selectivity, or query shape make another plan cheaper.
- **Forgetting write overhead.** Too many indexes slow down inserts, updates, deletes, and migrations.
- **Using offset pagination on large pages.** \`OFFSET 100000\` can still force the database to walk a large range before returning rows.

## Best practices

- Start from the slowest and most important user-facing queries.
- Write down access patterns before creating indexes.
- Use \`EXPLAIN\` or the database query plan tool before and after adding an index.
- Prefer compound indexes for common filter plus sort combinations.
- Keep indexes aligned with production data shape, not only development data.
- Remove duplicate or unused indexes when they no longer serve a real query.
- Use unique indexes to protect business rules such as one account per email.
- Consider keyset pagination for large ordered lists.
- Review indexes during schema changes, not only during performance incidents.

Indexing should also be part of code review for backend features. If a new endpoint adds filtering, sorting, or joins on a large table, the reviewer should ask how the query will behave when the table grows.

## When to use and when to avoid

Use indexes when a query repeatedly filters, sorts, joins, or enforces uniqueness on data that can grow. Indexes are especially valuable for list pages, dashboards, lookup APIs, search filters, background jobs, and foreign key relationships.

Avoid adding indexes to every column by default. Avoid indexing fields that are rarely queried. Be careful with indexes on frequently updated columns because every update may also update the index. For tiny tables, an index may not matter because scanning the table is already cheap.

The trade-off is simple but important: indexes improve read paths at the cost of write performance, storage, and maintenance. A strong indexing strategy chooses that trade-off intentionally.

## Summary

Indexing is not a decoration on a schema. It is a performance design decision based on how the application reads data.

- Start with real access patterns.
- Use compound indexes when queries filter and sort together.
- Check query plans instead of guessing.
- Watch the cost of writes and storage.
- Keep indexes reviewed as product behavior changes.
- Treat indexing as part of backend design, not an emergency fix.`,contentVi:`# Chiến lược indexing database để truy vấn nhanh hơn

Indexing database là một trong những cách thực tế nhất để cải thiện hiệu năng truy vấn, nhưng cũng rất dễ dùng sai. Một index đúng có thể làm một trang chậm trở nên phản hồi gần như tức thì. Một index sai có thể tốn storage, làm write chậm hơn và khiến team tưởng rằng vấn đề performance đã được giải quyết.

Cách nghĩ hữu ích không phải là "thêm index cho mọi cột". Cách nghĩ đúng hơn là "hiểu ứng dụng đọc dữ liệu như thế nào, sau đó tạo index hỗ trợ các access pattern đó". Bài viết này tập trung vào chiến lược thực tế: đọc ý định của query, xem query plan, chọn compound index và tránh các lỗi phổ biến.

## Chủ đề này giải quyết vấn đề gì?

Khi ứng dụng lớn dần, query database thường chậm đi vì những lý do dễ đoán. Table có nhiều dòng hơn, màn hình lọc theo nhiều field hơn, report aggregate nhiều dữ liệu hơn và API bắt đầu phục vụ nhiều user đồng thời. Một query scan 500 dòng khi development có thể scan 5 triệu dòng ở production.

Index giúp database tìm các dòng liên quan mà không phải kiểm tra toàn bộ table. Index đặc biệt hữu ích cho:

- Lọc dữ liệu bằng \`WHERE\`.
- Sắp xếp bằng \`ORDER BY\`.
- Join các table liên quan.
- Đảm bảo uniqueness.
- Hỗ trợ pagination và màn hình search.

Mục tiêu không chỉ là nhanh hơn. Một chiến lược index tốt giúp hiệu năng dễ dự đoán hơn. Developer có cơ sở để hiểu vì sao query nhanh hoặc chậm thay vì đoán.

## Các ý tưởng cốt lõi

Ý tưởng đầu tiên là **access pattern**. Access pattern mô tả cách ứng dụng thật sự đọc dữ liệu. Ví dụ: "hiển thị các order mới nhất của một user" hoặc "tìm product đang active trong category và sort theo price". Index nên được thiết kế từ các pattern này.

Ý tưởng thứ hai là **selectivity**. Một field có selectivity tốt khi nó thu hẹp tập kết quả đáng kể. Index một cột có rất nhiều giá trị lặp lại, như \`status\`, có thể chỉ hữu ích khi kết hợp với cột khác.

Ý tưởng thứ ba là **compound index**. Nhiều query thực tế vừa filter vừa sort theo nhiều field. Một compound index có thể hỗ trợ query tốt hơn nhiều index đơn lẻ nếu thứ tự cột khớp với query.

Ý tưởng thứ tư là **query plan**. Các công cụ như \`EXPLAIN\` cho biết database có dùng index không, scan bao nhiêu dòng, có sort trong memory không và join có hiệu quả không. Không xem query plan thì indexing gần như là đoán.

Ý tưởng thứ năm là **chi phí ghi dữ liệu**. Mỗi index phải được cập nhật khi insert, update hoặc delete. Index tăng tốc read nhưng thêm chi phí cho write và storage.

## Ví dụ thực tế

Giả sử ứng dụng cần hiển thị các order mới nhất của một user:

\`\`\`text
SELECT id, status, total_amount, created_at
FROM orders
WHERE user_id = 42
ORDER BY created_at DESC
LIMIT 20;
\`\`\`

Một index phù hợp cho access pattern này là:

\`\`\`text
CREATE INDEX idx_orders_user_created
ON orders (user_id, created_at DESC);
\`\`\`

Index bắt đầu bằng \`user_id\` vì query cần thu hẹp dữ liệu về một user trước. Sau đó là \`created_at\` vì query cần sort theo order mới nhất. Cách này giúp database tìm các dòng của một user và trả về đúng thứ tự mà không phải scan hoặc sort toàn bộ table.

Tiếp theo là một trang listing product:

\`\`\`text
SELECT id, name, price
FROM products
WHERE category_id = 8 AND is_active = true
ORDER BY price ASC
LIMIT 30;
\`\`\`

Một index thực tế có thể là:

\`\`\`text
CREATE INDEX idx_products_category_active_price
ON products (category_id, is_active, price);
\`\`\`

Index này hỗ trợ các field lọc trước và field sort sau. Tuy vậy quyết định cuối cùng vẫn nên được kiểm tra bằng query plan và dữ liệu gần thực tế. Nếu hầu hết product đều active, \`is_active\` có thể không giúp lọc nhiều, nhưng vẫn có thể hữu ích khi đi cùng category và price.

## Lỗi thường gặp

- **Thêm index trước khi hiểu query.** Index nên xuất phát từ access pattern thật, không phải từ cảm giác cột nào trông quan trọng.
- **Tạo một index cho mỗi cột.** Nhiều index đơn lẻ không tương đương một compound index được thiết kế tốt.
- **Bỏ qua thứ tự cột.** Với compound index, thứ tự rất quan trọng. Hãy đặt cột theo nhu cầu filter và sort.
- **Index field ít giá trị một mình.** Cột như \`status\` thường chỉ có vài giá trị, nên index riêng có thể không giảm nhiều công việc.
- **Không xem query plan.** Database có thể bỏ qua index nếu statistics, selectivity hoặc query shape khiến plan khác rẻ hơn.
- **Quên chi phí write.** Quá nhiều index làm insert, update, delete và migration chậm hơn.
- **Dùng offset pagination cho trang rất sâu.** \`OFFSET 100000\` vẫn có thể khiến database phải đi qua một vùng dữ liệu lớn trước khi trả kết quả.

## Best practices

- Bắt đầu từ các query chậm và quan trọng với user.
- Viết rõ access pattern trước khi tạo index.
- Dùng \`EXPLAIN\` hoặc công cụ query plan trước và sau khi thêm index.
- Ưu tiên compound index cho các query thường xuyên filter kèm sort.
- Thiết kế index theo dữ liệu production, không chỉ dữ liệu development.
- Xóa index trùng lặp hoặc không còn dùng.
- Dùng unique index để bảo vệ business rule như một account cho mỗi email.
- Cân nhắc keyset pagination cho danh sách lớn có thứ tự.
- Review index khi đổi schema, không chỉ khi có sự cố performance.

Indexing cũng nên là một phần của code review cho backend feature. Nếu endpoint mới thêm filter, sort hoặc join trên table lớn, reviewer nên hỏi query đó sẽ chạy thế nào khi table tăng dữ liệu.

## Khi nào nên dùng và khi nào nên tránh

Dùng index khi query thường xuyên filter, sort, join hoặc enforce uniqueness trên dữ liệu có thể tăng trưởng. Index đặc biệt hữu ích cho list page, dashboard, lookup API, search filter, background job và quan hệ foreign key.

Tránh thêm index cho mọi cột theo mặc định. Tránh index field hiếm khi được query. Cẩn thận với index trên cột update thường xuyên vì mỗi lần update có thể phải update index. Với table rất nhỏ, index có thể không đáng kể vì scan toàn table đã rẻ.

Trade-off rất rõ: index cải thiện read path nhưng tốn write performance, storage và maintenance. Chiến lược indexing tốt là chọn trade-off đó có chủ đích.

## Tóm tắt

Indexing không phải là phần trang trí của schema. Nó là quyết định thiết kế hiệu năng dựa trên cách ứng dụng đọc dữ liệu.

- Bắt đầu từ access pattern thật.
- Dùng compound index khi query vừa filter vừa sort.
- Xem query plan thay vì đoán.
- Theo dõi chi phí write và storage.
- Review index khi hành vi sản phẩm thay đổi.
- Xem indexing là một phần của backend design, không chỉ là cách chữa cháy.`,category:"architecture",tags:["Database","SQL","Performance","Backend"],date:"2026-06-14",readTime:"7 min",readTimeVi:"7 phút"},wS={id:"event-driven-architecture-basics",title:"Event-Driven Architecture Basics for Web Systems",titleVi:"Nền tảng kiến trúc hướng sự kiện cho hệ thống web",excerpt:"When events help, when they hurt, and how to keep message flows observable.",excerptVi:"Khi event hữu ích, khi gây hại và cách giữ luồng message dễ quan sát.",content:`# Event-Driven Architecture Basics for Web Systems

Event-driven architecture is useful when a web system needs to react to important business changes without forcing every part of the system to run in one synchronous request. An order is created, a payment is confirmed, an email must be sent, inventory needs to update, analytics should record the action, and a notification may be pushed to the user.

If all of those steps happen inside one HTTP request, the request becomes slow and fragile. Events let the system say "something happened" and allow other parts of the application to respond independently.

Event-driven design is powerful, but it is not free. It introduces asynchronous behavior, retries, ordering questions, duplicate messages, and observability challenges. This article focuses on the practical foundation.

## What problem does this solve?

Synchronous systems are easy to understand at first: one request calls one service, waits for the response, then returns to the client. That model becomes painful when many side effects are attached to one action.

Event-driven architecture helps with:

- Decoupling side effects from the main request.
- Allowing multiple consumers to react to the same business event.
- Processing slow or unreliable work in the background.
- Improving resilience when a downstream service is temporarily unavailable.
- Scaling consumers independently.
- Creating audit trails of business activity.

The key is that an event represents a fact that already happened, not a command that asks someone to do something.

## Core concepts

The first concept is **event**. An event should be named in past tense, such as \`OrderCreated\`, \`PaymentCaptured\`, or \`UserEmailChanged\`. It describes a completed fact.

The second concept is **producer**. The producer publishes the event after the state change succeeds. It should not need to know every consumer.

The third concept is **consumer**. A consumer subscribes to events and performs work such as sending email, updating read models, or notifying another system.

The fourth concept is **message broker or queue**. A broker stores and delivers events between producers and consumers. Examples include queues, pub/sub systems, and streaming platforms.

The fifth concept is **idempotency**. Consumers must handle duplicate messages safely because retries and redelivery can happen.

The sixth concept is **observability**. Event flows need correlation IDs, logs, metrics, and dead-letter handling so failures are visible.

## Practical example

For an order flow, the synchronous part should stay focused:

\`\`\`text
POST /api/orders
1. Validate request
2. Create order in database
3. Publish OrderCreated event
4. Return response to client
\`\`\`

The event can be a small business fact:

\`\`\`text
{
  "eventId": "evt_123",
  "type": "OrderCreated",
  "occurredAt": "2026-06-23T10:20:00Z",
  "correlationId": "req_789",
  "data": {
    "orderId": "ord_456",
    "userId": "user_111",
    "totalAmount": 120.50
  }
}
\`\`\`

Different consumers can then react:

\`\`\`text
OrderCreated
-> email-service sends confirmation email
-> inventory-service reserves stock
-> analytics-service records purchase intent
-> notification-service updates user feed
\`\`\`

The order API does not need to wait for all of those consumers before responding. But each consumer must be observable and retry-safe.

## Common mistakes

- **Using events as remote procedure calls.** If the producer expects an immediate response, a synchronous API may be clearer.
- **Publishing vague events.** \`DataUpdated\` does not explain what happened. Use business-specific names.
- **Ignoring idempotency.** Consumers may receive the same event more than once.
- **No dead-letter handling.** Failed messages should not disappear silently.
- **Publishing before the database transaction succeeds.** This can announce changes that never actually happened.
- **No correlation ID.** Debugging an async flow without correlation is difficult.
- **Overusing events for simple flows.** Not every function call needs a broker.

## Best practices

- Name events as facts in past tense.
- Keep event payloads small but useful.
- Include event ID, timestamp, type, and correlation ID.
- Make consumers idempotent.
- Track retries, failures, and dead-letter messages.
- Publish events only after the source state change is durable.
- Version event schemas when consumers depend on them.
- Document producers, consumers, owners, and expected side effects.
- Use synchronous calls when the caller needs an immediate answer.

For production systems, create a simple event catalog. It should answer what the event means, who publishes it, who consumes it, and what happens if processing fails.

## When to use and when to avoid

Use event-driven architecture when one business action triggers multiple independent side effects, when slow work can happen after the response, or when services need to react without tight coupling.

Avoid it when the flow is simple, when strong immediate consistency is required, or when the team cannot yet observe and recover asynchronous failures. Events can reduce coupling between services, but they add operational complexity.

The trade-off is clear: event-driven systems improve decoupling and resilience, but they require discipline around idempotency, tracing, retries, and schema management.

## Summary

Event-driven architecture helps web systems react to business changes without turning every request into a long chain of synchronous calls.

- Treat events as facts that already happened.
- Keep producers independent from consumers.
- Make consumers idempotent and observable.
- Include correlation IDs and useful metadata.
- Use events for real decoupling, not for every interaction.
- Plan retries, dead-letter handling, and schema evolution early.`,contentVi:`# Nền tảng kiến trúc hướng sự kiện cho hệ thống web

Kiến trúc hướng sự kiện hữu ích khi hệ thống web cần phản ứng với thay đổi nghiệp vụ quan trọng mà không ép mọi phần chạy trong một HTTP request đồng bộ. Order được tạo, payment được xác nhận, email cần gửi, inventory cần cập nhật, analytics cần ghi nhận hành động và notification có thể cần đẩy tới user.

Nếu tất cả bước đó nằm trong một request, request sẽ chậm và dễ vỡ. Event cho phép hệ thống nói "một việc đã xảy ra" và để các phần khác phản ứng độc lập.

Event-driven design rất mạnh, nhưng không miễn phí. Nó mang đến async behavior, retry, câu hỏi về ordering, duplicate message và khó khăn observability. Bài này tập trung vào nền tảng thực tế.

## Chủ đề này giải quyết vấn đề gì?

Hệ thống đồng bộ ban đầu dễ hiểu: một request gọi một service, chờ response rồi trả về client. Mô hình này trở nên khó chịu khi một hành động kéo theo nhiều side effect.

Event-driven architecture giúp:

- Tách side effect khỏi request chính.
- Cho phép nhiều consumer phản ứng với cùng một business event.
- Xử lý công việc chậm hoặc không ổn định ở background.
- Tăng resilience khi downstream service tạm thời unavailable.
- Scale consumer độc lập.
- Tạo audit trail cho hoạt động nghiệp vụ.

Điểm quan trọng là event đại diện cho sự thật đã xảy ra, không phải command yêu cầu ai đó làm việc gì.

## Các ý tưởng cốt lõi

Ý tưởng đầu tiên là **event**. Event nên đặt tên ở dạng quá khứ như \`OrderCreated\`, \`PaymentCaptured\` hoặc \`UserEmailChanged\`. Nó mô tả một sự thật đã hoàn thành.

Ý tưởng thứ hai là **producer**. Producer publish event sau khi state change thành công. Nó không cần biết mọi consumer.

Ý tưởng thứ ba là **consumer**. Consumer subscribe event và thực hiện việc như gửi email, cập nhật read model hoặc thông báo hệ thống khác.

Ý tưởng thứ tư là **message broker hoặc queue**. Broker lưu và chuyển event giữa producer và consumer. Ví dụ gồm queue, pub/sub system và streaming platform.

Ý tưởng thứ năm là **idempotency**. Consumer phải xử lý duplicate message an toàn vì retry và redelivery có thể xảy ra.

Ý tưởng thứ sáu là **observability**. Event flow cần correlation ID, log, metric và dead-letter handling để failure nhìn thấy được.

## Ví dụ thực tế

Với order flow, phần synchronous nên tập trung:

\`\`\`text
POST /api/orders
1. Validate request
2. Create order in database
3. Publish OrderCreated event
4. Return response to client
\`\`\`

Event nên là một business fact nhỏ:

\`\`\`text
{
  "eventId": "evt_123",
  "type": "OrderCreated",
  "occurredAt": "2026-06-23T10:20:00Z",
  "correlationId": "req_789",
  "data": {
    "orderId": "ord_456",
    "userId": "user_111",
    "totalAmount": 120.50
  }
}
\`\`\`

Nhiều consumer có thể phản ứng:

\`\`\`text
OrderCreated
-> email-service sends confirmation email
-> inventory-service reserves stock
-> analytics-service records purchase intent
-> notification-service updates user feed
\`\`\`

Order API không cần chờ toàn bộ consumer chạy xong rồi mới response. Nhưng từng consumer phải observable và retry-safe.

## Lỗi thường gặp

- **Dùng event như remote procedure call.** Nếu producer cần response ngay, API đồng bộ có thể rõ hơn.
- **Publish event mơ hồ.** \`DataUpdated\` không nói rõ chuyện gì xảy ra. Hãy dùng tên nghiệp vụ cụ thể.
- **Bỏ qua idempotency.** Consumer có thể nhận cùng một event nhiều lần.
- **Không có dead-letter handling.** Message lỗi không nên biến mất âm thầm.
- **Publish trước khi database transaction thành công.** Điều này có thể thông báo thay đổi chưa thật sự xảy ra.
- **Không có correlation ID.** Debug async flow không có correlation rất khó.
- **Lạm dụng event cho flow đơn giản.** Không phải function call nào cũng cần broker.

## Best practices

- Đặt tên event như sự thật đã xảy ra, ở dạng quá khứ.
- Giữ payload nhỏ nhưng đủ hữu ích.
- Có event ID, timestamp, type và correlation ID.
- Làm consumer idempotent.
- Theo dõi retry, failure và dead-letter message.
- Chỉ publish event sau khi source state change đã bền vững.
- Version event schema khi consumer phụ thuộc vào nó.
- Ghi rõ producer, consumer, owner và side effect mong đợi.
- Dùng synchronous call khi caller cần câu trả lời ngay.

Với production system, hãy có event catalog đơn giản. Nó nên trả lời event có nghĩa gì, ai publish, ai consume và chuyện gì xảy ra nếu xử lý thất bại.

## Khi nào nên dùng và khi nào nên tránh

Dùng event-driven architecture khi một business action kích hoạt nhiều side effect độc lập, khi công việc chậm có thể chạy sau response hoặc khi service cần phản ứng mà không coupling chặt.

Tránh dùng khi flow đơn giản, khi cần immediate consistency mạnh hoặc khi team chưa quan sát và recover được async failure. Event có thể giảm coupling giữa service, nhưng tăng operational complexity.

Trade-off rất rõ: event-driven system cải thiện decoupling và resilience, nhưng cần kỷ luật về idempotency, tracing, retry và schema management.

## Tóm tắt

Kiến trúc hướng sự kiện giúp hệ thống web phản ứng với thay đổi nghiệp vụ mà không biến mọi request thành chuỗi call đồng bộ dài.

- Xem event là sự thật đã xảy ra.
- Giữ producer độc lập với consumer.
- Làm consumer idempotent và observable.
- Thêm correlation ID và metadata hữu ích.
- Dùng event cho decoupling thật, không phải mọi tương tác.
- Lên kế hoạch retry, dead-letter và schema evolution sớm.`,category:"architecture",tags:["Architecture","Events","Messaging","Scalability"],date:"2026-06-12",readTime:"7 min",readTimeVi:"7 phút"},xS={id:"api-gateway-design-notes",title:"API Gateway Design Notes for Distributed Systems",titleVi:"Ghi chú thiết kế API Gateway cho hệ thống phân tán",excerpt:"Routing, authentication, rate limiting, and observability concerns at the gateway layer.",excerptVi:"Routing, xác thực, rate limit và observability ở lớp gateway.",content:`# API Gateway Design Notes for Distributed Systems

An API Gateway sits between clients and backend services. It can simplify client integration by giving mobile apps, web apps, or external partners one stable entry point instead of exposing every internal service directly.

But an API Gateway is also a risk point. If it becomes too smart, it can turn into a central bottleneck where routing, authentication, business logic, transformations, and service orchestration are all mixed together. A good gateway protects the edge without becoming the whole application.

## What problem does this solve?

Distributed systems often expose many services: users, orders, payments, search, notifications, reporting, and more. Clients should not need to know every internal service URL, authentication detail, or retry policy.

An API Gateway helps with:

- Routing requests to the right backend service.
- Centralizing authentication and token validation.
- Applying rate limits and request size limits.
- Handling CORS and edge security policies.
- Adding correlation IDs and consistent logs.
- Hiding internal service topology from clients.

The gateway should make access simpler and safer. It should not hide poor service boundaries or become the place where all business logic lives.

## Core concepts

The first concept is **routing**. The gateway maps external routes to internal services. For example, \`/api/orders\` may route to an order service while \`/api/users\` routes to an identity service.

The second concept is **edge security**. The gateway can validate tokens, enforce HTTPS, reject oversized requests, and apply basic abuse protection. Authorization decisions may still need service-level checks because services understand domain ownership.

The third concept is **traffic control**. Rate limiting, timeouts, retries, and circuit breaking prevent one client or failing service from hurting the whole system.

The fourth concept is **observability**. Every request should carry a correlation ID so logs across services can be connected.

## Practical example

A simple route plan might look like this:

\`\`\`text
GET    /api/users/me          -> identity-service
GET    /api/orders            -> order-service
POST   /api/orders            -> order-service
POST   /api/payments/confirm  -> payment-service
GET    /api/search            -> search-service
\`\`\`

The gateway can apply consistent edge policies:

\`\`\`text
Request enters gateway
1. Attach or validate correlation ID
2. Validate authentication token
3. Apply rate limit by user or IP
4. Route to backend service
5. Log status code, duration, route, and service target
\`\`\`

This keeps cross-cutting concerns in one place while still letting each service own its business rules.

A production gateway should also standardize how clients see failures. The exact fields can differ, but the response should be predictable:

\`\`\`text
{
  "error": {
    "code": "RATE_LIMITED",
    "message": "Too many requests. Please try again later.",
    "requestId": "req_01J..."
  }
}
\`\`\`

For traffic control, document policies per route instead of applying one global rule to everything:

\`\`\`text
Route                    Timeout   Retry   Rate limit
GET /api/search          2s        yes     60/min/user
GET /api/orders          3s        yes     120/min/user
POST /api/orders         5s        no      20/min/user
POST /api/payments       8s        no      5/min/user
\`\`\`

This matters because read requests and write requests do not have the same risk. Retrying a search request is usually safe. Retrying a payment confirmation without idempotency can create serious bugs.

## Common mistakes

- **Putting business logic in the gateway.** The gateway should route and enforce edge policies, not own domain rules.
- **Skipping service-level authorization.** Authentication at the gateway does not replace domain authorization inside services.
- **Retrying unsafe requests blindly.** Retrying non-idempotent operations can duplicate payments, orders, or messages.
- **Missing timeouts.** A gateway without timeouts can keep connections open while downstream services hang.
- **Hiding all errors behind one generic response.** Clients need useful error categories.
- **No correlation ID.** Debugging distributed requests becomes much harder without traceable IDs.

## Best practices

- Keep gateway responsibilities narrow: routing, authentication, rate limiting, request shaping, observability.
- Use clear route naming and versioning rules.
- Apply rate limits by user, client, token, or IP depending on the product.
- Add timeouts for every downstream call.
- Preserve correlation IDs across services.
- Return consistent error shapes.
- Keep business authorization inside the service that owns the resource.
- Monitor gateway latency, error rate, upstream failures, and rate-limit events.

Also define what the gateway should **not** do:

- It should not calculate business prices, balances, or permissions that belong to domain services.
- It should not hide every downstream failure as \`500 Internal Server Error\`.
- It should not call many services synchronously for every simple request unless the latency budget is clear.
- It should not become the only place where contracts are documented.
- It should not bypass service tests just because requests pass through one edge layer.

For a small team, the most useful gateway documentation is often a short table: external route, target service, auth requirement, timeout, retry rule, rate limit, and owner. That table prevents the gateway from becoming a mystery layer.

## When to use and when to avoid

Use an API Gateway when clients need one stable API surface over multiple services, or when edge concerns such as authentication, rate limiting, and observability should be applied consistently.

Avoid adding a gateway to a small monolith just for architecture style. If there is only one backend service, a gateway may add complexity without much value. Also avoid building a custom gateway before considering mature tools or framework middleware.

## Summary

An API Gateway is useful when it simplifies access and protects the system edge.

- Route requests without exposing internal topology.
- Validate authentication at the edge.
- Keep authorization close to domain services.
- Add timeouts, rate limits, and request limits.
- Preserve correlation IDs.
- Avoid turning the gateway into a business logic layer.`,contentVi:`# Ghi chú thiết kế API Gateway cho hệ thống phân tán

API Gateway nằm giữa client và các backend service. Nó có thể làm việc tích hợp của mobile app, web app hoặc external partner đơn giản hơn bằng cách cung cấp một entry point ổn định thay vì để client gọi trực tiếp từng service nội bộ.

Nhưng API Gateway cũng là một điểm rủi ro. Nếu gateway quá thông minh, nó có thể trở thành bottleneck trung tâm nơi routing, authentication, business logic, transformation và service orchestration bị trộn vào nhau. Một gateway tốt bảo vệ lớp edge nhưng không trở thành toàn bộ ứng dụng.

## Chủ đề này giải quyết vấn đề gì?

Hệ thống phân tán thường có nhiều service: users, orders, payments, search, notifications, reporting và nhiều phần khác. Client không nên cần biết mọi internal service URL, chi tiết authentication hoặc retry policy.

API Gateway giúp:

- Route request đến đúng backend service.
- Tập trung authentication và token validation.
- Áp dụng rate limit và giới hạn kích thước request.
- Xử lý CORS và edge security policy.
- Thêm correlation ID và log nhất quán.
- Ẩn cấu trúc service nội bộ khỏi client.

Gateway nên làm việc truy cập đơn giản và an toàn hơn. Nó không nên che giấu service boundary kém hoặc trở thành nơi chứa toàn bộ business logic.

## Các ý tưởng cốt lõi

Ý tưởng đầu tiên là **routing**. Gateway map route bên ngoài sang service nội bộ. Ví dụ \`/api/orders\` có thể route đến order service, còn \`/api/users\` route đến identity service.

Ý tưởng thứ hai là **edge security**. Gateway có thể validate token, enforce HTTPS, từ chối request quá lớn và áp dụng bảo vệ cơ bản chống abuse. Tuy vậy authorization vẫn thường cần kiểm tra ở service vì service hiểu ownership nghiệp vụ.

Ý tưởng thứ ba là **traffic control**. Rate limit, timeout, retry và circuit breaking giúp một client hoặc một service lỗi không ảnh hưởng toàn hệ thống.

Ý tưởng thứ tư là **observability**. Mỗi request nên mang correlation ID để log giữa nhiều service có thể liên kết với nhau.

## Ví dụ thực tế

Một route plan đơn giản có thể như sau:

\`\`\`text
GET    /api/users/me          -> identity-service
GET    /api/orders            -> order-service
POST   /api/orders            -> order-service
POST   /api/payments/confirm  -> payment-service
GET    /api/search            -> search-service
\`\`\`

Gateway có thể áp dụng policy nhất quán ở edge:

\`\`\`text
Request đi vào gateway
1. Gắn hoặc kiểm tra correlation ID
2. Validate authentication token
3. Áp dụng rate limit theo user hoặc IP
4. Route đến backend service
5. Log status code, duration, route và service target
\`\`\`

Cách này giữ các cross-cutting concern ở một nơi, trong khi từng service vẫn sở hữu business rule của nó.

Gateway dùng trong production cũng nên chuẩn hóa cách client nhìn thấy lỗi. Field cụ thể có thể khác nhau, nhưng response nên dự đoán được:

\`\`\`text
{
  "error": {
    "code": "RATE_LIMITED",
    "message": "Too many requests. Please try again later.",
    "requestId": "req_01J..."
  }
}
\`\`\`

Với traffic control, nên viết policy theo từng route thay vì áp dụng một rule chung cho mọi thứ:

\`\`\`text
Route                    Timeout   Retry   Rate limit
GET /api/search          2s        yes     60/min/user
GET /api/orders          3s        yes     120/min/user
POST /api/orders         5s        no      20/min/user
POST /api/payments       8s        no      5/min/user
\`\`\`

Điều này quan trọng vì read request và write request không có cùng mức rủi ro. Retry request tìm kiếm thường an toàn. Retry payment confirmation mà không có idempotency có thể tạo bug nghiêm trọng.

## Lỗi thường gặp

- **Đưa business logic vào gateway.** Gateway nên route và enforce edge policy, không nên sở hữu domain rule.
- **Bỏ qua authorization ở service.** Authentication tại gateway không thay thế domain authorization bên trong service.
- **Retry request không an toàn.** Retry operation không idempotent có thể tạo trùng payment, order hoặc message.
- **Thiếu timeout.** Gateway không có timeout có thể giữ connection mở khi downstream service bị treo.
- **Che mọi lỗi bằng một response chung chung.** Client cần error category hữu ích.
- **Không có correlation ID.** Debug request phân tán khó hơn nhiều nếu không có ID để trace.

## Best practices

- Giữ trách nhiệm gateway hẹp: routing, authentication, rate limiting, request shaping, observability.
- Dùng quy tắc route naming và versioning rõ ràng.
- Áp dụng rate limit theo user, client, token hoặc IP tùy sản phẩm.
- Thêm timeout cho mọi downstream call.
- Giữ correlation ID xuyên suốt các service.
- Trả về error shape nhất quán.
- Giữ business authorization trong service sở hữu resource.
- Theo dõi latency, error rate, upstream failure và rate-limit event của gateway.

Cũng cần định nghĩa gateway **không nên** làm gì:

- Không nên tính business price, balance hoặc permission thuộc về domain service.
- Không nên che mọi downstream failure thành \`500 Internal Server Error\`.
- Không nên gọi nhiều service đồng bộ cho mỗi request đơn giản nếu latency budget chưa rõ.
- Không nên là nơi duy nhất lưu tài liệu contract.
- Không nên bỏ qua test ở service chỉ vì request đã đi qua một edge layer.

Với team nhỏ, tài liệu gateway hữu ích nhất thường là một bảng ngắn: external route, target service, yêu cầu auth, timeout, retry rule, rate limit và owner. Bảng này giúp gateway không trở thành một tầng bí ẩn.

## Khi nào nên dùng và khi nào nên tránh

Dùng API Gateway khi client cần một API surface ổn định trên nhiều service, hoặc khi các edge concern như authentication, rate limiting và observability cần được áp dụng nhất quán.

Tránh thêm gateway cho một monolith nhỏ chỉ vì phong cách kiến trúc. Nếu chỉ có một backend service, gateway có thể thêm phức tạp mà không đem lại nhiều giá trị. Cũng nên tránh tự xây gateway tùy chỉnh trước khi cân nhắc tool trưởng thành hoặc middleware của framework.

## Tóm tắt

API Gateway hữu ích khi nó đơn giản hóa truy cập và bảo vệ edge của hệ thống.

- Route request mà không lộ cấu trúc nội bộ.
- Validate authentication ở edge.
- Giữ authorization gần domain service.
- Thêm timeout, rate limit và request limit.
- Giữ correlation ID.
- Tránh biến gateway thành tầng business logic.`,category:"architecture",tags:["API Gateway","Architecture","Security","Microservices"],date:"2026-06-11",readTime:"8 min",readTimeVi:"8 phút"},kS={id:"caching-strategies-web-apps",title:"Caching Strategies for Web Applications",titleVi:"Chiến lược caching cho ứng dụng web",excerpt:"A compact map of browser cache, CDN cache, API cache, and database cache tradeoffs.",excerptVi:"Bản đồ ngắn về cache trình duyệt, CDN, API và database cùng tradeoff.",content:`# Caching Strategies for Web Applications

Caching is one of the most effective ways to make web applications faster, but it also creates one of the most common sources of confusing bugs: stale data. A good caching strategy improves response time and reduces load without making users see incorrect information.

The important question is not "should we cache?" The important questions are "what can be cached, where should it be cached, for how long, and how is it invalidated?"

This article gives a practical map of browser cache, CDN cache, API cache, application cache, and database-oriented caching.

## What problem does this solve?

Web applications repeatedly ask for the same resources: static assets, product lists, profile data, configuration, search results, and computed summaries. Without caching, every request may hit the origin server, application layer, and database even when the answer rarely changes.

Caching helps with:

- Faster page loads.
- Lower database load.
- Reduced API latency.
- Better resilience during traffic spikes.
- Lower infrastructure cost.
- Improved user experience for repeated visits.

But caching also adds complexity. If invalidation is unclear, users may see outdated prices, old permissions, stale inventory, or previous profile values.

## Core concepts

The first concept is **cache location**. A response can be cached in the browser, CDN, reverse proxy, application memory, distributed cache, or database layer. Each location has different visibility and invalidation rules.

The second concept is **freshness**. Freshness defines how long cached data can be reused before it must be refreshed.

The third concept is **invalidation**. Invalidation decides when cached data should be removed or updated after a change.

The fourth concept is **cache key**. A cache key identifies one cached value. Poor keys can return the wrong data to the wrong user.

The fifth concept is **public versus private data**. Public static content is easy to cache broadly. User-specific data must be cached carefully or not shared at all.

## Practical example

Static assets can often use long-lived browser caching because filenames include hashes:

\`\`\`text
Cache-Control: public, max-age=31536000, immutable
\`\`\`

API responses need more careful rules. A public product category page might be cached briefly:

\`\`\`text
GET /api/categories/audio/products
Cache-Control: public, max-age=60, stale-while-revalidate=300
\`\`\`

User-specific data should not be shared through public caches:

\`\`\`text
GET /api/me
Cache-Control: private, no-store
\`\`\`

For server-side caching, the key must include every input that affects the response:

\`\`\`ts
function buildProductCacheKey(categoryId: string, page: number, currency: string) {
  return ["products", categoryId, page, currency].join(":");
}
\`\`\`

If currency is missing from the key, users may receive prices formatted for the wrong currency. Cache keys are part of correctness, not just performance.

## Common mistakes

- **Caching private data publicly.** This can leak user-specific information.
- **Using incomplete cache keys.** Missing filters, locale, currency, or user context can return incorrect data.
- **No invalidation plan.** A cache without invalidation is just delayed inconsistency.
- **Caching errors too long.** Temporary failures should not poison the cache.
- **Caching everything.** Some data changes too often or is too sensitive.
- **Ignoring stale data in UX.** Users may need refresh indicators for important data.
- **Layering caches without ownership.** Browser, CDN, API, and database caches can conflict if nobody owns the rules.

## Best practices

- Cache static assets aggressively with hashed filenames.
- Use CDN caching for public pages and public API responses.
- Keep user-specific responses private or no-store unless the cache is scoped safely.
- Design cache keys from all request inputs that affect the result.
- Use short TTLs for data that changes frequently.
- Use explicit invalidation for data where correctness matters.
- Monitor hit rate, stale responses, and cache-related errors.
- Document which layer owns each caching rule.
- Test permission and personalization behavior when adding caches.

For product systems, treat price, permission, inventory, and account data carefully. These values often need stricter freshness rules than marketing content or static assets.

## When to use and when to avoid

Use caching for static assets, public content, repeated expensive queries, computed summaries, and API responses where slight staleness is acceptable.

Avoid caching highly sensitive data, rapidly changing transactional data, or anything where stale values can cause financial, security, or trust problems unless you have a strong invalidation strategy.

The trade-off is speed versus freshness. Caching is valuable when the system can tolerate the freshness model. If correctness depends on immediate updates, use shorter TTLs, explicit invalidation, or avoid caching that path.

## Summary

Caching should be designed, not sprinkled randomly after the app becomes slow.

- Decide what data can be stale and for how long.
- Choose the right cache layer.
- Build complete cache keys.
- Keep private data out of public caches.
- Plan invalidation before caching important data.
- Monitor cache behavior after release.`,contentVi:`# Chiến lược caching cho ứng dụng web

Caching là một trong những cách hiệu quả nhất để làm ứng dụng web nhanh hơn, nhưng cũng là nguồn gây bug khó hiểu: stale data. Chiến lược caching tốt cải thiện response time và giảm tải mà không làm user nhìn thấy thông tin sai.

Câu hỏi quan trọng không phải là "có cache không?" Câu hỏi quan trọng là "cache cái gì, cache ở đâu, cache bao lâu và invalidation như thế nào?"

Bài viết này đưa ra bản đồ thực tế về browser cache, CDN cache, API cache, application cache và database-oriented caching.

## Chủ đề này giải quyết vấn đề gì?

Ứng dụng web thường xuyên hỏi lại cùng một loại resource: static asset, product list, profile data, configuration, search result và computed summary. Không có caching, mỗi request có thể chạm origin server, application layer và database dù câu trả lời hiếm khi thay đổi.

Caching giúp:

- Page load nhanh hơn.
- Giảm tải database.
- Giảm API latency.
- Tăng resilience khi traffic spike.
- Giảm chi phí infrastructure.
- Cải thiện trải nghiệm cho lần truy cập lặp lại.

Nhưng caching cũng thêm complexity. Nếu invalidation không rõ, user có thể thấy giá cũ, permission cũ, inventory stale hoặc profile value trước đó.

## Các ý tưởng cốt lõi

Ý tưởng đầu tiên là **vị trí cache**. Response có thể được cache ở browser, CDN, reverse proxy, application memory, distributed cache hoặc database layer. Mỗi vị trí có visibility và invalidation rule khác nhau.

Ý tưởng thứ hai là **freshness**. Freshness định nghĩa cached data được dùng lại bao lâu trước khi phải refresh.

Ý tưởng thứ ba là **invalidation**. Invalidation quyết định khi nào cached data bị xóa hoặc cập nhật sau thay đổi.

Ý tưởng thứ tư là **cache key**. Cache key định danh một cached value. Key kém có thể trả sai dữ liệu cho sai user.

Ý tưởng thứ năm là **public và private data**. Public static content dễ cache rộng. User-specific data phải cache cẩn thận hoặc không share.

## Ví dụ thực tế

Static asset thường có thể cache lâu vì filename có hash:

\`\`\`text
Cache-Control: public, max-age=31536000, immutable
\`\`\`

API response cần rule cẩn thận hơn. Product category public có thể cache ngắn:

\`\`\`text
GET /api/categories/audio/products
Cache-Control: public, max-age=60, stale-while-revalidate=300
\`\`\`

User-specific data không nên đi qua public cache:

\`\`\`text
GET /api/me
Cache-Control: private, no-store
\`\`\`

Với server-side caching, key phải chứa mọi input ảnh hưởng response:

\`\`\`ts
function buildProductCacheKey(categoryId: string, page: number, currency: string) {
  return ["products", categoryId, page, currency].join(":");
}
\`\`\`

Nếu thiếu currency trong key, user có thể nhận giá format theo sai currency. Cache key là một phần của correctness, không chỉ performance.

## Lỗi thường gặp

- **Cache private data ở public cache.** Điều này có thể làm lộ thông tin user.
- **Cache key thiếu input.** Thiếu filter, locale, currency hoặc user context có thể trả sai dữ liệu.
- **Không có invalidation plan.** Cache không có invalidation chỉ là inconsistency bị trì hoãn.
- **Cache lỗi quá lâu.** Failure tạm thời không nên đầu độc cache.
- **Cache mọi thứ.** Một số dữ liệu đổi quá thường xuyên hoặc quá nhạy cảm.
- **Bỏ qua stale data trong UX.** Dữ liệu quan trọng có thể cần refresh indicator.
- **Nhiều cache layer nhưng không có owner.** Browser, CDN, API và database cache có thể xung đột nếu không ai sở hữu rule.

## Best practices

- Cache static asset mạnh tay với hashed filename.
- Dùng CDN caching cho public page và public API response.
- Giữ user-specific response private hoặc no-store trừ khi cache được scope an toàn.
- Thiết kế cache key từ mọi request input ảnh hưởng kết quả.
- Dùng TTL ngắn cho dữ liệu thay đổi thường xuyên.
- Dùng explicit invalidation cho dữ liệu cần correctness cao.
- Monitor hit rate, stale response và cache-related error.
- Ghi rõ layer nào sở hữu từng caching rule.
- Test permission và personalization khi thêm cache.

Với product system, hãy cẩn thận với price, permission, inventory và account data. Các giá trị này thường cần freshness rule chặt hơn marketing content hoặc static asset.

## Khi nào nên dùng và khi nào nên tránh

Dùng caching cho static asset, public content, query đắt được gọi lặp lại, computed summary và API response chấp nhận stale nhẹ.

Tránh cache dữ liệu rất nhạy cảm, transactional data thay đổi nhanh hoặc bất kỳ thứ gì mà stale value có thể gây vấn đề tài chính, bảo mật hoặc niềm tin, trừ khi bạn có invalidation strategy mạnh.

Trade-off là tốc độ và freshness. Caching có giá trị khi hệ thống chấp nhận freshness model đó. Nếu correctness phụ thuộc update tức thì, dùng TTL ngắn hơn, explicit invalidation hoặc tránh cache path đó.

## Tóm tắt

Caching nên được thiết kế, không rải ngẫu nhiên sau khi app chậm.

- Quyết định dữ liệu nào được stale và stale bao lâu.
- Chọn đúng cache layer.
- Xây cache key đầy đủ.
- Không đưa private data vào public cache.
- Lên kế hoạch invalidation trước khi cache dữ liệu quan trọng.
- Monitor cache behavior sau release.`,category:"architecture",tags:["Caching","Performance","Architecture","Web"],date:"2026-06-09",readTime:"7 min",readTimeVi:"7 phút"},TS={id:"repository-pattern-modern-apps",title:"Repository Pattern in Modern Applications",titleVi:"Repository Pattern trong ứng dụng hiện đại",excerpt:"Where the repository pattern is useful, and where it becomes unnecessary indirection.",excerptVi:"Khi Repository Pattern hữu ích và khi nó trở thành lớp gián tiếp không cần thiết.",content:`# Repository Pattern in Modern Applications

Repository Pattern is often presented as a standard backend pattern, but in modern applications it should be used deliberately. A repository can make data access clearer, easier to test, and less coupled to the database. It can also become unnecessary indirection if it only repeats ORM methods without adding meaning.

The practical question is not "should every app have repositories?" The practical question is "does this boundary make the application easier to change and reason about?"

This article explains where repositories help, where they hurt, and how to design them around application needs instead of generic CRUD.

## What problem does this solve?

Application code often needs data from a database, API, cache, or file store. If controllers or services directly contain query details everywhere, the code becomes harder to test and change.

Repository Pattern helps by:

- Centralizing data access for an aggregate or feature.
- Hiding query details from application services.
- Providing intention-revealing methods.
- Making tests easier with fake implementations.
- Reducing duplication for common queries.
- Keeping persistence concerns away from business rules.

The repository acts as a boundary between application logic and data access.

## Core concepts

The first concept is **collection-like access**. A repository often represents access to a collection of domain objects, such as orders, users, or products.

The second concept is **intention-revealing methods**. A method like \`GetOpenOrdersForUserAsync\` says more than a generic \`Find\` with many parameters.

The third concept is **persistence ignorance**. Application services should not need to know every database detail.

The fourth concept is **transaction boundary**. Repositories should work with the application's unit of work or transaction strategy instead of randomly saving changes.

The fifth concept is **not hiding everything**. If the ORM already gives a clean abstraction and the app is simple, wrapping every query may add noise.

## Practical example

In a C# backend, a repository interface can expose feature-focused queries:

\`\`\`csharp
public interface IOrderRepository
{
    Task<Order?> GetByIdAsync(Guid id, CancellationToken cancellationToken);
    Task<IReadOnlyList<Order>> GetOpenOrdersForUserAsync(
        Guid userId,
        CancellationToken cancellationToken);
    Task AddAsync(Order order, CancellationToken cancellationToken);
}
\`\`\`

The implementation can use Entity Framework Core without leaking query details into the service:

\`\`\`csharp
public sealed class OrderRepository : IOrderRepository
{
    private readonly AppDbContext dbContext;

    public OrderRepository(AppDbContext dbContext)
    {
        this.dbContext = dbContext;
    }

    public Task<Order?> GetByIdAsync(Guid id, CancellationToken cancellationToken)
    {
        return dbContext.Orders
            .FirstOrDefaultAsync(order => order.Id == id, cancellationToken);
    }

    public async Task<IReadOnlyList<Order>> GetOpenOrdersForUserAsync(
        Guid userId,
        CancellationToken cancellationToken)
    {
        return await dbContext.Orders
            .Where(order => order.UserId == userId && order.Status == OrderStatus.Open)
            .OrderByDescending(order => order.CreatedAt)
            .ToListAsync(cancellationToken);
    }

    public async Task AddAsync(Order order, CancellationToken cancellationToken)
    {
        await dbContext.Orders.AddAsync(order, cancellationToken);
    }
}
\`\`\`

The application service can now express business flow without knowing query details:

\`\`\`csharp
var order = await orderRepository.GetByIdAsync(orderId, cancellationToken);
if (order is null)
{
    return Result.NotFound();
}
\`\`\`

The repository is useful here because it provides meaningful methods, not because every database call must be wrapped.

## Common mistakes

- **Creating generic CRUD repositories for everything.** A generic repository often hides useful ORM features while adding little meaning.
- **Putting business logic inside repositories.** Repositories should fetch and persist data; domain decisions belong elsewhere.
- **Saving changes inside every method.** This can break transaction control.
- **Returning IQueryable everywhere.** That leaks query composition back to callers.
- **Wrapping an ORM without purpose.** If the repository only mirrors \`DbSet\`, it may not be useful.
- **Creating too many tiny repositories.** Boundaries should follow features or aggregates, not every table blindly.

## Best practices

- Design repositories around application use cases, not only tables.
- Use intention-revealing methods for important queries.
- Keep business rules in services or domain objects.
- Coordinate transactions at the application service or unit-of-work level.
- Avoid exposing database-specific query objects unless intentionally needed.
- Do not create a repository just to satisfy a pattern checklist.
- Test repository queries when they contain important filtering or ordering.
- Keep simple apps simple when direct ORM usage is clearer.

Repository Pattern works best when it clarifies a boundary. If it only makes developers jump through more files to read one query, reconsider it.

## When to use and when to avoid

Use repositories when data access is complex, queries are reused, business logic should be isolated from persistence, or tests need a clean data boundary. They are also useful in domain-focused backends where aggregates matter.

Avoid repositories in small CRUD apps where the ORM already provides a clear and testable abstraction. Also avoid generic repositories that remove useful ORM capabilities without improving design.

The trade-off is clarity versus indirection. A good repository makes intent clearer. A poor repository hides simple code behind unnecessary layers.

## Summary

Repository Pattern is useful when it creates a meaningful boundary around data access.

- Use repositories for feature-focused data access.
- Prefer meaningful methods over generic CRUD wrappers.
- Keep business logic outside repositories.
- Manage transactions deliberately.
- Avoid leaking query details back to services.
- Skip the pattern when it adds indirection without value.`,contentVi:`# Repository Pattern trong ứng dụng hiện đại

Repository Pattern thường được giới thiệu như một pattern backend tiêu chuẩn, nhưng trong ứng dụng hiện đại nó nên được dùng có chủ đích. Repository có thể làm data access rõ hơn, dễ test hơn và ít coupling với database hơn. Nó cũng có thể trở thành lớp gián tiếp không cần thiết nếu chỉ lặp lại method của ORM mà không thêm ý nghĩa.

Câu hỏi thực tế không phải là "mọi app có nên có repository không?" Câu hỏi đúng hơn là "boundary này có làm ứng dụng dễ thay đổi và dễ hiểu hơn không?"

Bài viết này giải thích khi nào repository hữu ích, khi nào gây hại và cách thiết kế repository theo nhu cầu ứng dụng thay vì CRUD chung chung.

## Chủ đề này giải quyết vấn đề gì?

Application code thường cần dữ liệu từ database, API, cache hoặc file store. Nếu controller hoặc service chứa chi tiết query ở khắp nơi, code sẽ khó test và khó thay đổi.

Repository Pattern giúp:

- Tập trung data access cho một aggregate hoặc feature.
- Ẩn chi tiết query khỏi application service.
- Cung cấp method thể hiện intent.
- Làm test dễ hơn bằng fake implementation.
- Giảm duplication cho query phổ biến.
- Giữ persistence concern khỏi business rule.

Repository hoạt động như boundary giữa application logic và data access.

## Các ý tưởng cốt lõi

Ý tưởng đầu tiên là **collection-like access**. Repository thường đại diện cho việc truy cập một collection domain object như order, user hoặc product.

Ý tưởng thứ hai là **method thể hiện intent**. Method như \`GetOpenOrdersForUserAsync\` nói rõ hơn generic \`Find\` với nhiều parameter.

Ý tưởng thứ ba là **persistence ignorance**. Application service không nên cần biết mọi chi tiết database.

Ý tưởng thứ tư là **transaction boundary**. Repository nên làm việc với unit of work hoặc transaction strategy của app, không tự save ngẫu nhiên.

Ý tưởng thứ năm là **không che giấu mọi thứ**. Nếu ORM đã cung cấp abstraction sạch và app đơn giản, wrap mọi query có thể chỉ thêm nhiễu.

## Ví dụ thực tế

Trong backend C#, repository interface có thể expose query theo feature:

\`\`\`csharp
public interface IOrderRepository
{
    Task<Order?> GetByIdAsync(Guid id, CancellationToken cancellationToken);
    Task<IReadOnlyList<Order>> GetOpenOrdersForUserAsync(
        Guid userId,
        CancellationToken cancellationToken);
    Task AddAsync(Order order, CancellationToken cancellationToken);
}
\`\`\`

Implementation có thể dùng Entity Framework Core mà không làm service biết chi tiết query:

\`\`\`csharp
public sealed class OrderRepository : IOrderRepository
{
    private readonly AppDbContext dbContext;

    public OrderRepository(AppDbContext dbContext)
    {
        this.dbContext = dbContext;
    }

    public Task<Order?> GetByIdAsync(Guid id, CancellationToken cancellationToken)
    {
        return dbContext.Orders
            .FirstOrDefaultAsync(order => order.Id == id, cancellationToken);
    }

    public async Task<IReadOnlyList<Order>> GetOpenOrdersForUserAsync(
        Guid userId,
        CancellationToken cancellationToken)
    {
        return await dbContext.Orders
            .Where(order => order.UserId == userId && order.Status == OrderStatus.Open)
            .OrderByDescending(order => order.CreatedAt)
            .ToListAsync(cancellationToken);
    }

    public async Task AddAsync(Order order, CancellationToken cancellationToken)
    {
        await dbContext.Orders.AddAsync(order, cancellationToken);
    }
}
\`\`\`

Application service giờ có thể diễn đạt business flow mà không biết chi tiết query:

\`\`\`csharp
var order = await orderRepository.GetByIdAsync(orderId, cancellationToken);
if (order is null)
{
    return Result.NotFound();
}
\`\`\`

Repository hữu ích ở đây vì nó cung cấp method có ý nghĩa, không phải vì mọi database call bắt buộc phải được wrap.

## Lỗi thường gặp

- **Tạo generic CRUD repository cho mọi thứ.** Generic repository thường che mất tính năng hữu ích của ORM mà không thêm nhiều ý nghĩa.
- **Đưa business logic vào repository.** Repository nên fetch và persist data; domain decision thuộc nơi khác.
- **Save changes trong mọi method.** Điều này có thể phá kiểm soát transaction.
- **Return IQueryable ở khắp nơi.** Điều đó leak query composition về caller.
- **Wrap ORM không có mục đích.** Nếu repository chỉ mirror \`DbSet\`, nó có thể không hữu ích.
- **Tạo quá nhiều repository nhỏ.** Boundary nên theo feature hoặc aggregate, không theo từng table một cách máy móc.

## Best practices

- Thiết kế repository theo use case của app, không chỉ theo table.
- Dùng method thể hiện intent cho query quan trọng.
- Giữ business rule trong service hoặc domain object.
- Điều phối transaction ở application service hoặc unit-of-work level.
- Tránh expose query object đặc thù database trừ khi chủ đích.
- Không tạo repository chỉ để hoàn thành checklist pattern.
- Test repository query khi có filtering hoặc ordering quan trọng.
- Giữ app đơn giản khi dùng ORM trực tiếp rõ hơn.

Repository Pattern tốt nhất khi nó làm boundary rõ hơn. Nếu nó chỉ khiến developer phải nhảy qua nhiều file để đọc một query đơn giản, hãy cân nhắc lại.

## Khi nào nên dùng và khi nào nên tránh

Dùng repository khi data access phức tạp, query được reuse, business logic cần tách khỏi persistence hoặc test cần boundary dữ liệu sạch. Nó cũng hữu ích trong backend hướng domain nơi aggregate quan trọng.

Tránh repository trong app CRUD nhỏ khi ORM đã cung cấp abstraction rõ và test được. Cũng tránh generic repository làm mất capability hữu ích của ORM nhưng không cải thiện thiết kế.

Trade-off là clarity và indirection. Repository tốt làm intent rõ hơn. Repository kém che code đơn giản sau nhiều layer không cần thiết.

## Tóm tắt

Repository Pattern hữu ích khi nó tạo boundary có ý nghĩa quanh data access.

- Dùng repository cho data access theo feature.
- Ưu tiên method có ý nghĩa hơn generic CRUD wrapper.
- Giữ business logic ngoài repository.
- Quản lý transaction có chủ đích.
- Tránh leak chi tiết query ngược về service.
- Bỏ qua pattern khi nó chỉ thêm indirection mà không có giá trị.`,category:"patterns",tags:["Repository Pattern","Design Patterns","Backend","Architecture"],date:"2026-06-08",readTime:"7 min",readTimeVi:"7 phút"},CS={id:"factory-pattern-ui-components",title:"Factory Pattern for Configurable UI Components",titleVi:"Factory Pattern cho UI component có cấu hình",excerpt:"Using factories to create consistent UI variants without spreading conditionals everywhere.",excerptVi:"Dùng factory để tạo biến thể UI nhất quán mà không rải conditional khắp nơi.",content:`# Factory Pattern for Configurable UI Components

UI applications often need consistent variations of the same concept: buttons, cards, form fields, status badges, empty states, table actions, and dashboard widgets. Without structure, conditional rendering spreads across many files and every screen invents a slightly different version.

Factory Pattern helps by centralizing the creation of related UI variants. Instead of scattering decisions everywhere, a factory maps configuration or type to a predictable component, props, or rendering strategy.

The goal is not to hide React behind a pattern. The goal is to keep configurable UI consistent when variants grow.

## What problem does this solve?

As a product grows, UI variants multiply. A status badge may support draft, active, paused, failed, and archived. A notification card may render different icons, colors, and actions based on type. A form builder may create inputs from field configuration.

Without a factory, teams often get:

- Repeated switch statements across components.
- Inconsistent labels, icons, and styles.
- Hard-to-review conditional rendering.
- UI variants that are difficult to test.
- New types added in one screen but forgotten in another.

A factory creates one place where variant decisions are defined.

## Core concepts

The first concept is **creation logic**. The factory owns the decision of which component or props should be created for a given input.

The second concept is **configuration**. UI can be generated from a type, schema, status, or feature config.

The third concept is **centralized consistency**. Labels, icons, colors, and actions live in one mapping instead of many screens.

The fourth concept is **extension point**. Adding a new variant should be a small change in the factory, not a search across the codebase.

The fifth concept is **not over-abstracting**. If there are only two simple branches, a direct conditional may be clearer.

## Practical example

For status badges, a factory can map status to UI configuration:

\`\`\`ts
type OrderStatus = "draft" | "paid" | "shipped" | "cancelled";

type BadgeConfig = {
  label: string;
  className: string;
};

const orderStatusBadges: Record<OrderStatus, BadgeConfig> = {
  draft: { label: "Draft", className: "bg-muted text-muted-foreground" },
  paid: { label: "Paid", className: "bg-emerald-100 text-emerald-700" },
  shipped: { label: "Shipped", className: "bg-blue-100 text-blue-700" },
  cancelled: { label: "Cancelled", className: "bg-red-100 text-red-700" },
};

function createOrderStatusBadge(status: OrderStatus): BadgeConfig {
  return orderStatusBadges[status];
}
\`\`\`

The component becomes small and consistent:

\`\`\`ts
function OrderStatusBadge({ status }: { status: OrderStatus }) {
  const badge = createOrderStatusBadge(status);

  return <span className={badge.className}>{badge.label}</span>;
}
\`\`\`

For configurable forms, a factory can choose the input component based on field type:

\`\`\`ts
type FieldConfig =
  | { type: "text"; name: string; label: string }
  | { type: "select"; name: string; label: string; options: string[] };

function createField(config: FieldConfig) {
  if (config.type === "text") {
    return <TextField name={config.name} label={config.label} />;
  }

  return (
    <SelectField
      name={config.name}
      label={config.label}
      options={config.options}
    />
  );
}
\`\`\`

This keeps the decision in one place while each field component remains focused.

## Common mistakes

- **Creating a factory too early.** If there are only one or two variants, direct rendering may be simpler.
- **Putting business rules in UI factories.** A UI factory should choose presentation, not decide domain behavior.
- **Returning untyped objects.** Without strong types, invalid variants can slip in.
- **Hiding too much logic.** If developers cannot trace what component is rendered, the abstraction is too opaque.
- **Duplicating factories per screen.** That defeats the consistency benefit.
- **Letting configuration become unlimited.** Too many optional fields can create a hard-to-test mini framework.

## Best practices

- Start with repeated conditional UI, then extract a factory.
- Use union types or enums for supported variants.
- Keep factory output small: component, props, or display config.
- Keep styling tokens and labels centralized.
- Add exhaustive checks when possible.
- Test the mapping for important variants.
- Keep domain decisions outside UI factories.
- Prefer boring mappings over clever dynamic logic.

A good UI factory should make it easier to add a new variant safely. If adding a new status requires updating one typed map and tests guide you to missing cases, the pattern is doing its job.

## When to use and when to avoid

Use Factory Pattern when a UI concept has many variants that must stay consistent across screens. It fits badges, cards, field renderers, empty states, table actions, notification types, and dashboard widgets.

Avoid it when the UI is simple, the variants are unlikely to grow, or a direct component composition is clearer. Also avoid creating a generic factory that tries to handle every UI component in the app.

The trade-off is consistency versus indirection. A factory reduces duplication, but it adds one more place to look. Use it when that central place makes the codebase easier to maintain.

## Summary

Factory Pattern is useful for configurable UI when variants are repeated and consistency matters.

- Centralize variant creation logic.
- Use typed configuration.
- Keep factories focused on presentation.
- Avoid creating factories before repetition appears.
- Test important mappings.
- Prefer simple maps and small outputs over complex dynamic systems.`,contentVi:`# Factory Pattern cho UI component có cấu hình

Ứng dụng UI thường cần nhiều biến thể nhất quán của cùng một khái niệm: button, card, form field, status badge, empty state, table action và dashboard widget. Không có cấu trúc, conditional rendering sẽ rải khắp nhiều file và mỗi màn hình tự tạo một phiên bản hơi khác nhau.

Factory Pattern giúp tập trung việc tạo các UI variant liên quan. Thay vì rải quyết định ở mọi nơi, factory map configuration hoặc type thành component, props hoặc rendering strategy dự đoán được.

Mục tiêu không phải là che React sau pattern. Mục tiêu là giữ UI có cấu hình nhất quán khi variant tăng lên.

## Chủ đề này giải quyết vấn đề gì?

Khi sản phẩm lớn hơn, UI variant tăng nhanh. Status badge có thể hỗ trợ draft, active, paused, failed và archived. Notification card có thể render icon, màu và action khác nhau theo type. Form builder có thể tạo input từ field configuration.

Không có factory, team thường gặp:

- Switch statement lặp lại ở nhiều component.
- Label, icon và style không nhất quán.
- Conditional rendering khó review.
- UI variant khó test.
- Type mới được thêm ở một màn hình nhưng quên ở màn hình khác.

Factory tạo một nơi duy nhất định nghĩa quyết định về variant.

## Các ý tưởng cốt lõi

Ý tưởng đầu tiên là **creation logic**. Factory sở hữu quyết định component hoặc props nào được tạo từ input.

Ý tưởng thứ hai là **configuration**. UI có thể được tạo từ type, schema, status hoặc feature config.

Ý tưởng thứ ba là **centralized consistency**. Label, icon, color và action nằm trong một mapping thay vì nhiều screen.

Ý tưởng thứ tư là **extension point**. Thêm variant mới nên là thay đổi nhỏ trong factory, không phải search toàn codebase.

Ý tưởng thứ năm là **không over-abstract**. Nếu chỉ có hai nhánh đơn giản, conditional trực tiếp có thể rõ hơn.

## Ví dụ thực tế

Với status badge, factory có thể map status thành UI configuration:

\`\`\`ts
type OrderStatus = "draft" | "paid" | "shipped" | "cancelled";

type BadgeConfig = {
  label: string;
  className: string;
};

const orderStatusBadges: Record<OrderStatus, BadgeConfig> = {
  draft: { label: "Draft", className: "bg-muted text-muted-foreground" },
  paid: { label: "Paid", className: "bg-emerald-100 text-emerald-700" },
  shipped: { label: "Shipped", className: "bg-blue-100 text-blue-700" },
  cancelled: { label: "Cancelled", className: "bg-red-100 text-red-700" },
};

function createOrderStatusBadge(status: OrderStatus): BadgeConfig {
  return orderStatusBadges[status];
}
\`\`\`

Component trở nên nhỏ và nhất quán:

\`\`\`ts
function OrderStatusBadge({ status }: { status: OrderStatus }) {
  const badge = createOrderStatusBadge(status);

  return <span className={badge.className}>{badge.label}</span>;
}
\`\`\`

Với form có cấu hình, factory có thể chọn input component dựa trên field type:

\`\`\`ts
type FieldConfig =
  | { type: "text"; name: string; label: string }
  | { type: "select"; name: string; label: string; options: string[] };

function createField(config: FieldConfig) {
  if (config.type === "text") {
    return <TextField name={config.name} label={config.label} />;
  }

  return (
    <SelectField
      name={config.name}
      label={config.label}
      options={config.options}
    />
  );
}
\`\`\`

Cách này giữ quyết định ở một nơi trong khi từng field component vẫn tập trung.

## Lỗi thường gặp

- **Tạo factory quá sớm.** Nếu chỉ có một hai variant, render trực tiếp có thể đơn giản hơn.
- **Đưa business rule vào UI factory.** UI factory nên chọn presentation, không quyết định domain behavior.
- **Return object không typed.** Không có type mạnh, variant sai có thể lọt vào.
- **Che quá nhiều logic.** Nếu developer không trace được component nào render, abstraction quá mờ.
- **Duplicate factory theo từng screen.** Điều đó làm mất lợi ích consistency.
- **Để configuration không giới hạn.** Quá nhiều optional field có thể tạo mini framework khó test.

## Best practices

- Bắt đầu từ conditional UI lặp lại, rồi mới extract factory.
- Dùng union type hoặc enum cho supported variants.
- Giữ output của factory nhỏ: component, props hoặc display config.
- Tập trung styling token và label.
- Thêm exhaustive check khi có thể.
- Test mapping cho variant quan trọng.
- Giữ domain decision ngoài UI factory.
- Ưu tiên mapping đơn giản hơn dynamic logic thông minh.

UI factory tốt nên giúp thêm variant mới an toàn hơn. Nếu thêm status mới chỉ cần cập nhật một typed map và test chỉ ra case còn thiếu, pattern đang làm đúng việc.

## Khi nào nên dùng và khi nào nên tránh

Dùng Factory Pattern khi một khái niệm UI có nhiều variant cần nhất quán giữa các màn hình. Nó phù hợp cho badge, card, field renderer, empty state, table action, notification type và dashboard widget.

Tránh dùng khi UI đơn giản, variant khó tăng hoặc component composition trực tiếp rõ hơn. Cũng tránh tạo một generic factory cố xử lý mọi UI component trong app.

Trade-off là consistency và indirection. Factory giảm duplication, nhưng thêm một nơi cần nhìn. Dùng nó khi nơi tập trung đó làm codebase dễ bảo trì hơn.

## Tóm tắt

Factory Pattern hữu ích cho UI có cấu hình khi variant lặp lại và consistency quan trọng.

- Tập trung creation logic của variant.
- Dùng typed configuration.
- Giữ factory tập trung vào presentation.
- Tránh tạo factory trước khi có repetition.
- Test mapping quan trọng.
- Ưu tiên map đơn giản và output nhỏ hơn hệ thống dynamic phức tạp.`,category:"patterns",tags:["Factory Pattern","React","Design Patterns","UI"],date:"2026-06-07",readTime:"7 min",readTimeVi:"7 phút"},SS={id:"adapter-pattern-api-clients",title:"Adapter Pattern for API Clients",titleVi:"Adapter Pattern cho API client",excerpt:"A pattern for protecting application code from external payload changes.",excerptVi:"Một mẫu giúp bảo vệ code ứng dụng khỏi thay đổi payload bên ngoài.",content:`# Adapter Pattern for API Clients

Frontend and backend applications often depend on external APIs: payment providers, CMS platforms, identity services, analytics tools, shipping services, or internal microservices owned by another team. These APIs can be useful, but they also introduce instability. Payloads change, field names are inconsistent, errors have different shapes, and third-party concepts leak into application code.

The Adapter Pattern helps protect your application from that instability. Instead of letting external payloads spread everywhere, an adapter converts external data into the shape your application actually wants to use.

This article explains how to use Adapter Pattern for API clients in a practical TypeScript application.

## What problem does this solve?

Without an adapter, UI components and business logic often depend directly on API response shapes. That creates tight coupling. If the external service renames \`first_name\` to \`firstName\`, or returns price in cents instead of decimal, many parts of the app may need changes.

Adapters help by:

- Hiding external payload shapes.
- Normalizing inconsistent field names.
- Converting data types near the API boundary.
- Keeping UI and business logic focused on application models.
- Making API changes easier to contain.
- Making tests simpler because internal models are stable.

The adapter is not just a mapping function. It is a boundary that says: outside data must be translated before it enters the core application.

## Core concepts

The first concept is **external contract**. This is the shape returned by the API. It may use naming, data types, or conventions that do not match your app.

The second concept is **internal model**. This is the shape your app wants to use. It should be clear, consistent, and aligned with your domain.

The third concept is **mapping at the boundary**. Conversion should happen in the API client layer, not inside every component.

The fourth concept is **error adaptation**. APIs often return different error shapes. An adapter can normalize them into consistent application errors.

The fifth concept is **testable isolation**. When adapter functions are small and explicit, they are easy to test without calling the real API.

## Practical example

Assume an external API returns a user payload like this:

\`\`\`text
{
  "user_id": "u_123",
  "first_name": "Linh",
  "last_name": "Nguyen",
  "is_active": true
}
\`\`\`

The application does not need to use that shape everywhere. Define external and internal types separately:

\`\`\`ts
type ExternalUserDto = {
  user_id: string;
  first_name: string;
  last_name: string;
  is_active: boolean;
};

type User = {
  id: string;
  fullName: string;
  active: boolean;
};

function adaptUser(dto: ExternalUserDto): User {
  return {
    id: dto.user_id,
    fullName: dto.first_name + " " + dto.last_name,
    active: dto.is_active,
  };
}
\`\`\`

Then keep the API client responsible for adaptation:

\`\`\`ts
async function getUser(id: string): Promise<User> {
  const response = await fetch("/api/external/users/" + id);

  if (!response.ok) {
    throw new Error("Unable to load user");
  }

  const dto = (await response.json()) as ExternalUserDto;
  return adaptUser(dto);
}
\`\`\`

Now components depend on \`User\`, not \`ExternalUserDto\`. If the external provider changes field names, the change is contained in the adapter and API client.

For collections, keep the same boundary:

\`\`\`ts
async function getUsers(): Promise<User[]> {
  const response = await fetch("/api/external/users");
  const dtos = (await response.json()) as ExternalUserDto[];

  return dtos.map(adaptUser);
}
\`\`\`

This approach is simple, but it prevents external concerns from leaking into UI code.

## Common mistakes

- **Using API DTOs directly in components.** This spreads external naming and payload decisions across the app.
- **Mapping data in many places.** Repeated mapping logic becomes inconsistent and hard to change.
- **Mixing validation and adaptation without care.** Adaptation changes shape; validation checks whether data is safe to trust. Both may be needed.
- **Creating huge adapters.** A very large adapter may indicate unclear boundaries or too much transformation in one place.
- **Ignoring error shapes.** Success payloads are adapted, but errors are left inconsistent.
- **Over-abstracting every API.** Not every small internal endpoint needs a formal adapter layer.

## Best practices

- Define external DTO types separately from internal application models.
- Adapt data as close to the API boundary as possible.
- Keep adapter functions small and deterministic.
- Normalize naming, dates, money, booleans, and optional fields.
- Add tests for adapter functions when payloads are important.
- Keep UI components dependent on internal models.
- Normalize API errors into consistent application-level errors.
- Document assumptions when external data is incomplete or inconsistent.

For important integrations, adapter tests are valuable because they protect the contract you expect from the provider. If a payload changes, tests fail near the boundary instead of letting bugs appear deep in the UI.

## When to use and when to avoid

Use Adapter Pattern when consuming third-party APIs, legacy services, inconsistent internal services, or payloads that should not leak into the app. It is especially useful when multiple screens depend on the same external data.

Avoid heavy adapter layers for simple endpoints fully owned by the same application when the API contract already matches the internal model. In that case, a thin API client may be enough.

The trade-off is extra code. Adapters add mapping functions and types, but they reduce coupling and make external changes easier to contain. For unstable or important APIs, that trade-off is usually worth it.

## Summary

Adapter Pattern protects application code from external API details.

- Keep external DTOs separate from internal models.
- Map data at the API boundary.
- Let components depend on stable application shapes.
- Normalize field names, dates, money, and errors.
- Test adapters for important integrations.
- Avoid over-engineering endpoints that already match your app model.`,contentVi:`# Adapter Pattern cho API client

Frontend và backend application thường phụ thuộc vào external API: payment provider, CMS, identity service, analytics tool, shipping service hoặc internal microservice do team khác sở hữu. Những API này hữu ích, nhưng cũng tạo ra sự bất ổn. Payload thay đổi, tên field không nhất quán, error có shape khác nhau và khái niệm của bên thứ ba dễ bị rò vào application code.

Adapter Pattern giúp bảo vệ ứng dụng khỏi sự bất ổn đó. Thay vì để external payload lan khắp codebase, adapter chuyển dữ liệu bên ngoài thành shape mà ứng dụng thật sự muốn dùng.

Bài viết này giải thích cách dùng Adapter Pattern cho API client trong ứng dụng TypeScript thực tế.

## Chủ đề này giải quyết vấn đề gì?

Không có adapter, UI component và business logic thường phụ thuộc trực tiếp vào shape response của API. Điều này tạo tight coupling. Nếu external service đổi \`first_name\` thành \`firstName\`, hoặc trả price bằng cents thay vì decimal, nhiều phần của app có thể phải sửa.

Adapter giúp bằng cách:

- Ẩn shape payload bên ngoài.
- Chuẩn hóa tên field không nhất quán.
- Convert data type gần API boundary.
- Giữ UI và business logic tập trung vào application model.
- Làm thay đổi API dễ khoanh vùng hơn.
- Làm test đơn giản hơn vì internal model ổn định.

Adapter không chỉ là mapping function. Nó là boundary nói rằng: dữ liệu bên ngoài phải được dịch trước khi đi vào core application.

## Các ý tưởng cốt lõi

Ý tưởng đầu tiên là **external contract**. Đây là shape API trả về. Nó có thể dùng naming, data type hoặc convention không khớp với app.

Ý tưởng thứ hai là **internal model**. Đây là shape app muốn dùng. Nó nên rõ ràng, nhất quán và gần với domain của ứng dụng.

Ý tưởng thứ ba là **mapping at the boundary**. Việc chuyển đổi nên diễn ra ở API client layer, không nằm trong từng component.

Ý tưởng thứ tư là **error adaptation**. API thường trả error shape khác nhau. Adapter có thể chuẩn hóa chúng thành application error nhất quán.

Ý tưởng thứ năm là **testable isolation**. Khi adapter function nhỏ và rõ, chúng dễ test mà không cần gọi API thật.

## Ví dụ thực tế

Giả sử external API trả user payload như sau:

\`\`\`text
{
  "user_id": "u_123",
  "first_name": "Linh",
  "last_name": "Nguyen",
  "is_active": true
}
\`\`\`

Ứng dụng không cần dùng shape này ở mọi nơi. Hãy định nghĩa external type và internal type riêng:

\`\`\`ts
type ExternalUserDto = {
  user_id: string;
  first_name: string;
  last_name: string;
  is_active: boolean;
};

type User = {
  id: string;
  fullName: string;
  active: boolean;
};

function adaptUser(dto: ExternalUserDto): User {
  return {
    id: dto.user_id,
    fullName: dto.first_name + " " + dto.last_name,
    active: dto.is_active,
  };
}
\`\`\`

Sau đó để API client chịu trách nhiệm adaptation:

\`\`\`ts
async function getUser(id: string): Promise<User> {
  const response = await fetch("/api/external/users/" + id);

  if (!response.ok) {
    throw new Error("Unable to load user");
  }

  const dto = (await response.json()) as ExternalUserDto;
  return adaptUser(dto);
}
\`\`\`

Bây giờ component phụ thuộc vào \`User\`, không phải \`ExternalUserDto\`. Nếu provider đổi tên field, thay đổi được khoanh vùng trong adapter và API client.

Với collection, giữ cùng boundary:

\`\`\`ts
async function getUsers(): Promise<User[]> {
  const response = await fetch("/api/external/users");
  const dtos = (await response.json()) as ExternalUserDto[];

  return dtos.map(adaptUser);
}
\`\`\`

Cách này đơn giản, nhưng ngăn external concern rò vào UI code.

## Lỗi thường gặp

- **Dùng API DTO trực tiếp trong component.** Điều này làm naming và quyết định payload bên ngoài lan khắp app.
- **Map dữ liệu ở nhiều nơi.** Mapping lặp lại dễ không nhất quán và khó thay đổi.
- **Trộn validation và adaptation thiếu cẩn thận.** Adaptation đổi shape; validation kiểm tra dữ liệu có đáng tin không. Nhiều trường hợp cần cả hai.
- **Tạo adapter quá lớn.** Adapter rất lớn có thể cho thấy boundary chưa rõ hoặc quá nhiều transformation trong một chỗ.
- **Bỏ qua error shape.** Success payload được adapt nhưng error vẫn không nhất quán.
- **Over-abstract mọi API.** Không phải endpoint nội bộ nhỏ nào cũng cần adapter layer trang trọng.

## Best practices

- Định nghĩa external DTO type tách khỏi internal application model.
- Adapt data càng gần API boundary càng tốt.
- Giữ adapter function nhỏ và deterministic.
- Chuẩn hóa naming, date, money, boolean và optional field.
- Thêm test cho adapter function khi payload quan trọng.
- Để UI component phụ thuộc vào internal model.
- Chuẩn hóa API error thành application-level error nhất quán.
- Ghi lại assumption khi external data thiếu hoặc không nhất quán.

Với integration quan trọng, adapter test rất có giá trị vì chúng bảo vệ contract bạn kỳ vọng từ provider. Nếu payload thay đổi, test fail ở boundary thay vì để bug xuất hiện sâu trong UI.

## Khi nào nên dùng và khi nào nên tránh

Dùng Adapter Pattern khi consume third-party API, legacy service, internal service không nhất quán hoặc payload không nên rò vào app. Nó đặc biệt hữu ích khi nhiều màn hình phụ thuộc cùng một nguồn external data.

Tránh adapter layer nặng cho endpoint đơn giản do cùng application sở hữu khi API contract đã khớp với internal model. Khi đó, API client mỏng có thể đủ.

Trade-off là thêm code. Adapter thêm mapping function và type, nhưng giảm coupling và giúp thay đổi external dễ khoanh vùng. Với API quan trọng hoặc không ổn định, trade-off này thường đáng.

## Tóm tắt

Adapter Pattern bảo vệ application code khỏi chi tiết external API.

- Tách external DTO khỏi internal model.
- Map dữ liệu ở API boundary.
- Để component phụ thuộc vào shape ổn định của app.
- Chuẩn hóa field name, date, money và error.
- Test adapter cho integration quan trọng.
- Tránh over-engineer endpoint đã khớp với app model.`,category:"patterns",tags:["Adapter Pattern","API","TypeScript","Clean Code"],date:"2026-06-05",readTime:"7 min",readTimeVi:"7 phút"},PS={id:"observer-pattern-real-time-ui",title:"Observer Pattern for Real-Time UI Updates",titleVi:"Observer Pattern cho cập nhật UI thời gian thực",excerpt:"How observer-style flows appear in subscriptions, stores, and live dashboards.",excerptVi:"Cách luồng kiểu observer xuất hiện trong subscription, store và dashboard realtime.",content:`# Observer Pattern for Real-Time UI Updates

The Observer Pattern appears whenever one part of an application needs to react when another part changes. In modern UI development, this shows up in stores, subscriptions, WebSocket events, live dashboards, notifications, and form state.

The pattern is simple: a subject owns state or events, and observers subscribe to be notified when something changes. The practical challenge is not the definition. The challenge is managing subscriptions, avoiding memory leaks, preventing unnecessary updates, and keeping real-time flows understandable.

## What problem does this solve?

Real-time UI becomes difficult when components need updates without manually passing callbacks through every layer. A chat badge should update when a new message arrives. A dashboard card should update when metrics change. A notification panel should react to server events.

Observer-style flows help by:

- Decoupling event producers from UI consumers.
- Allowing multiple views to react to the same change.
- Supporting real-time data from WebSockets or event streams.
- Keeping update logic centralized.
- Reducing prop drilling for shared subscriptions.

The pattern is useful when the UI should respond to change, but the producer should not know which components are currently visible.

## Core concepts

The first concept is **subject**. The subject owns the state or event source and notifies observers.

The second concept is **observer**. The observer subscribes to changes and reacts when notified.

The third concept is **subscription lifecycle**. Observers must unsubscribe when no longer needed, especially in UI components.

The fourth concept is **change granularity**. Not every change should update every observer. Good systems notify the right subscribers.

The fifth concept is **backpressure and frequency**. Real-time updates can be frequent. The UI may need batching, throttling, or selective rendering.

## Practical example

A small event store can demonstrate the idea:

\`\`\`ts
type Listener<T> = (value: T) => void;

class ObservableValue<T> {
  private listeners = new Set<Listener<T>>();

  constructor(private value: T) {}

  getSnapshot() {
    return this.value;
  }

  subscribe(listener: Listener<T>) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  setValue(nextValue: T) {
    this.value = nextValue;
    this.listeners.forEach((listener) => listener(nextValue));
  }
}
\`\`\`

In a real app, the subject may be a WebSocket client, a state store, or a query cache. The same principle applies: components subscribe, update when the value changes, and unsubscribe during cleanup.

For real-time notifications, the flow may look like this:

\`\`\`text
WebSocket receives NotificationCreated
-> notification store updates unread count
-> header badge re-renders
-> notification drawer updates list if open
\`\`\`

The WebSocket layer does not need to know about the header or drawer. It only publishes the change to the subject.

## Common mistakes

- **Forgetting to unsubscribe.** This can create memory leaks and updates to unmounted components.
- **Not controlling update frequency.** Frequent events can cause excessive renders.
- **Making observers mutate the subject.** This can create loops and unpredictable state.
- **Using one global stream for everything.** Broad notifications make it hard to know why a component updated.
- **Hiding business logic in subscriptions.** Subscription handlers should stay small; complex rules belong in services or stores.
- **No error or reconnect strategy.** Real-time connections fail and must recover.

## Best practices

- Keep subscription setup and cleanup explicit.
- Notify only the observers that need the change.
- Use typed events or clearly defined payloads.
- Keep event handlers small and predictable.
- Batch or throttle high-frequency updates.
- Separate transport concerns from UI state.
- Add logs for connection, reconnect, and message handling failures.
- Test the subject separately from UI components when possible.

For React, prefer established primitives such as external stores, state libraries, or React Query subscriptions when they fit. The pattern matters more than hand-writing your own observable implementation.

## When to use and when to avoid

Use Observer Pattern when multiple parts of the UI need to react to changing state or external events. It fits notifications, live dashboards, collaborative editing indicators, streaming logs, and shared stores.

Avoid it for simple parent-child communication where props are enough. Also avoid observer flows when they hide data movement so much that developers cannot trace updates.

The trade-off is decoupling versus traceability. Observers reduce direct dependencies, but teams need clear event names, cleanup, and debugging tools.

## Summary

Observer Pattern is a practical foundation for real-time UI updates.

- Use subjects to publish changes.
- Let observers subscribe and unsubscribe explicitly.
- Keep update payloads clear and typed.
- Avoid broad global streams.
- Control high-frequency updates.
- Keep real-time transport separate from UI rendering.`,contentVi:`# Observer Pattern cho cập nhật UI thời gian thực

Observer Pattern xuất hiện khi một phần của ứng dụng cần phản ứng khi phần khác thay đổi. Trong UI hiện đại, pattern này có mặt trong store, subscription, WebSocket event, live dashboard, notification và form state.

Pattern rất đơn giản: subject sở hữu state hoặc event, observer subscribe để được thông báo khi có thay đổi. Thách thức thực tế không nằm ở định nghĩa. Thách thức là quản lý subscription, tránh memory leak, ngăn update không cần thiết và giữ real-time flow dễ hiểu.

## Chủ đề này giải quyết vấn đề gì?

UI thời gian thực trở nên khó khi component cần update mà không muốn truyền callback qua nhiều tầng. Chat badge cần cập nhật khi có message mới. Dashboard card cần cập nhật khi metric thay đổi. Notification panel cần phản ứng với server event.

Luồng kiểu Observer giúp:

- Tách event producer khỏi UI consumer.
- Cho nhiều view phản ứng với cùng một thay đổi.
- Hỗ trợ realtime data từ WebSocket hoặc event stream.
- Giữ update logic tập trung.
- Giảm prop drilling cho shared subscription.

Pattern này hữu ích khi UI cần phản ứng với thay đổi nhưng producer không nên biết component nào đang hiển thị.

## Các ý tưởng cốt lõi

Ý tưởng đầu tiên là **subject**. Subject sở hữu state hoặc event source và thông báo cho observer.

Ý tưởng thứ hai là **observer**. Observer subscribe thay đổi và phản ứng khi được notify.

Ý tưởng thứ ba là **subscription lifecycle**. Observer phải unsubscribe khi không còn cần, đặc biệt trong UI component.

Ý tưởng thứ tư là **độ chi tiết của change**. Không phải mọi thay đổi đều nên update mọi observer. Hệ thống tốt notify đúng subscriber.

Ý tưởng thứ năm là **backpressure và frequency**. Realtime update có thể rất nhiều. UI có thể cần batching, throttling hoặc selective rendering.

## Ví dụ thực tế

Một event store nhỏ có thể minh họa ý tưởng:

\`\`\`ts
type Listener<T> = (value: T) => void;

class ObservableValue<T> {
  private listeners = new Set<Listener<T>>();

  constructor(private value: T) {}

  getSnapshot() {
    return this.value;
  }

  subscribe(listener: Listener<T>) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  setValue(nextValue: T) {
    this.value = nextValue;
    this.listeners.forEach((listener) => listener(nextValue));
  }
}
\`\`\`

Trong app thật, subject có thể là WebSocket client, state store hoặc query cache. Nguyên tắc vẫn giống nhau: component subscribe, update khi value đổi và unsubscribe khi cleanup.

Với realtime notification, flow có thể như sau:

\`\`\`text
WebSocket receives NotificationCreated
-> notification store updates unread count
-> header badge re-renders
-> notification drawer updates list if open
\`\`\`

WebSocket layer không cần biết header hay drawer. Nó chỉ publish thay đổi vào subject.

## Lỗi thường gặp

- **Quên unsubscribe.** Điều này có thể tạo memory leak và update component đã unmount.
- **Không kiểm soát tần suất update.** Event quá thường xuyên có thể gây render quá mức.
- **Để observer mutate subject.** Việc này có thể tạo loop và state khó đoán.
- **Dùng một global stream cho mọi thứ.** Notification quá rộng làm khó biết vì sao component update.
- **Giấu business logic trong subscription.** Handler nên nhỏ; rule phức tạp nên ở service hoặc store.
- **Không có chiến lược error/reconnect.** Realtime connection có thể fail và cần recover.

## Best practices

- Setup và cleanup subscription rõ ràng.
- Chỉ notify observer cần thay đổi.
- Dùng typed event hoặc payload định nghĩa rõ.
- Giữ event handler nhỏ và dễ đoán.
- Batch hoặc throttle update tần suất cao.
- Tách transport concern khỏi UI state.
- Thêm log cho connection, reconnect và message handling failure.
- Test subject riêng khỏi UI component khi có thể.

Với React, nên ưu tiên primitive có sẵn như external store, state library hoặc React Query subscription khi phù hợp. Pattern quan trọng hơn việc tự viết observable implementation.

## Khi nào nên dùng và khi nào nên tránh

Dùng Observer Pattern khi nhiều phần UI cần phản ứng với state thay đổi hoặc external event. Nó phù hợp cho notification, live dashboard, collaborative editing indicator, streaming log và shared store.

Tránh dùng cho parent-child communication đơn giản khi props đã đủ. Cũng tránh observer flow nếu nó che giấu data movement đến mức developer không trace được update.

Trade-off là decoupling và traceability. Observer giảm dependency trực tiếp, nhưng team cần event name rõ, cleanup và công cụ debug.

## Tóm tắt

Observer Pattern là nền tảng thực tế cho UI cập nhật thời gian thực.

- Dùng subject để publish thay đổi.
- Cho observer subscribe và unsubscribe rõ ràng.
- Giữ payload update rõ và typed.
- Tránh global stream quá rộng.
- Kiểm soát update tần suất cao.
- Tách realtime transport khỏi UI rendering.`,category:"patterns",tags:["Observer Pattern","Realtime","UI","Design Patterns"],date:"2026-06-04",readTime:"7 min",readTimeVi:"7 phút"},NS={id:"git-workflow-team-projects",title:"Git Workflow for Small Team Projects",titleVi:"Git workflow cho dự án team nhỏ",excerpt:"A simple workflow for branches, reviews, releases, and avoiding painful merges.",excerptVi:"Workflow đơn giản cho branch, review, release và tránh merge khó chịu.",content:`# Git Workflow for Small Team Projects

A small team does not need a complicated Git process, but it does need a predictable one. Without a shared workflow, branches live too long, pull requests become hard to review, releases are unclear, and urgent fixes turn into risky manual work.

The goal of a Git workflow is not ceremony. The goal is to keep the main branch releasable, make reviews manageable, reduce merge pain, and give the team a clear way to ship and recover.

This article describes a practical workflow for small teams building web or mobile applications.

## What problem does this solve?

Small teams often start with everyone pushing directly or creating branches in their own style. That works for a short time, but problems appear quickly:

- Two developers edit the same area and create painful merges.
- A feature branch stays open for weeks and becomes hard to review.
- The main branch breaks because checks were skipped.
- Nobody knows which commit was released.
- Hotfixes are made directly in production branches without review.
- Refactors are mixed with behavior changes.

A simple workflow prevents these issues without slowing the team down.

## Core concepts

The first concept is **protected main**. The main branch should represent code that can be built, tested, and released. Direct pushes should be limited.

The second concept is **short-lived feature branches**. Branches should be small enough to review and merge quickly.

The third concept is **pull request review**. Review should check behavior, risk, tests, and maintainability, not only style.

The fourth concept is **automated checks**. Lint, test, and build should run before merge so quality does not depend only on memory.

The fifth concept is **release traceability**. The team should know which commit or tag is deployed.

The sixth concept is **hotfix discipline**. Urgent fixes still need a path that avoids losing changes or bypassing history.

## Practical example

A lightweight workflow can look like this:

\`\`\`text
main
  protected, always buildable

feature branches
  feature/login-error-state
  fix/order-total-rounding
  chore/update-eslint-config

pull request
  description
  screenshots when UI changes
  test notes
  reviewer approval
  CI checks pass

release
  tag commit or deploy from main
\`\`\`

For branch naming, keep names boring and searchable:

\`\`\`text
feature/add-order-filter
fix/prevent-empty-checkout
refactor/extract-user-menu
chore/update-dependencies
\`\`\`

For a pull request description, use a short structure:

\`\`\`text
What changed:
- Added empty and error states to the orders page.

Why:
- Users currently see a blank page when loading fails.

How tested:
- Ran unit tests.
- Tested failed API response locally.
\`\`\`

This gives reviewers context without turning every PR into a long document.

## Common mistakes

- **Long-lived branches.** The longer a branch lives, the harder it is to merge and review.
- **Huge pull requests.** Large PRs hide bugs and slow reviewers down.
- **Direct pushes to main.** This increases the chance of broken builds and unreviewed changes.
- **Mixing refactor and behavior changes.** Reviewers cannot tell whether a change is safe.
- **Skipping CI because the change is small.** Small changes can still break production.
- **No release marker.** Without tags or deployment records, debugging production becomes harder.
- **Hotfixes outside the workflow.** Emergency work still needs traceability.

## Best practices

- Keep \`main\` protected and releasable.
- Keep branches short-lived and focused.
- Rebase or merge from main frequently to reduce drift.
- Use pull requests for review and documentation.
- Require build and test checks before merge.
- Prefer small PRs with clear intent.
- Separate refactors from behavior changes when possible.
- Tag releases or record deployed commit hashes.
- Use a hotfix branch from the deployed commit when production needs urgent repair.
- Delete merged branches to keep the repository clean.

For small teams, the best workflow is the one everyone can follow on a busy day. Keep rules few, clear, and enforce important ones with tooling.

## When to use and when to avoid

Use this workflow for teams of two to ten developers shipping a product regularly. It works well for web apps, APIs, mobile apps, and internal tools.

Avoid copying enterprise Git processes with many long-lived environment branches if the team does not need them. Git Flow can be useful for certain release models, but it is often heavier than necessary for small teams deploying frequently.

The trade-off is control versus speed. A protected main branch and pull requests add some process, but they reduce broken releases and unclear history.

## Summary

A good Git workflow for a small team is simple, visible, and repeatable.

- Keep main protected and releasable.
- Use short-lived focused branches.
- Review changes through pull requests.
- Run CI before merge.
- Track releases with tags or deployed commits.
- Keep hotfixes traceable.
- Avoid process that is heavier than the team needs.`,contentVi:`# Git workflow cho dự án team nhỏ

Team nhỏ không cần quy trình Git phức tạp, nhưng cần một quy trình dễ dự đoán. Không có workflow chung, branch sống quá lâu, pull request khó review, release không rõ ràng và hotfix gấp dễ thành thao tác thủ công rủi ro.

Mục tiêu của Git workflow không phải là nghi thức. Mục tiêu là giữ main branch có thể release, làm review dễ quản lý, giảm merge conflict và cho team cách ship cũng như recover rõ ràng.

Bài viết này mô tả workflow thực tế cho team nhỏ xây web app hoặc mobile app.

## Chủ đề này giải quyết vấn đề gì?

Team nhỏ thường bắt đầu bằng việc ai cũng push trực tiếp hoặc tự đặt branch theo cách riêng. Cách đó chạy được một thời gian ngắn, nhưng vấn đề sẽ xuất hiện:

- Hai developer sửa cùng khu vực và merge rất đau.
- Feature branch mở nhiều tuần và khó review.
- Main branch bị hỏng vì bỏ qua check.
- Không ai biết commit nào đã release.
- Hotfix được sửa trực tiếp trên production branch không review.
- Refactor bị trộn với thay đổi behavior.

Workflow đơn giản giúp tránh các vấn đề này mà không làm team chậm đi.

## Các ý tưởng cốt lõi

Ý tưởng đầu tiên là **protected main**. Main branch nên đại diện cho code có thể build, test và release. Direct push nên bị hạn chế.

Ý tưởng thứ hai là **short-lived feature branch**. Branch nên đủ nhỏ để review và merge nhanh.

Ý tưởng thứ ba là **pull request review**. Review nên kiểm tra behavior, risk, test và maintainability, không chỉ style.

Ý tưởng thứ tư là **automated checks**. Lint, test và build nên chạy trước merge để quality không phụ thuộc vào trí nhớ.

Ý tưởng thứ năm là **release traceability**. Team nên biết commit hoặc tag nào đang được deploy.

Ý tưởng thứ sáu là **hotfix discipline**. Fix gấp vẫn cần đường đi rõ để không mất thay đổi hoặc phá lịch sử.

## Ví dụ thực tế

Workflow nhẹ có thể như sau:

\`\`\`text
main
  protected, always buildable

feature branches
  feature/login-error-state
  fix/order-total-rounding
  chore/update-eslint-config

pull request
  description
  screenshots when UI changes
  test notes
  reviewer approval
  CI checks pass

release
  tag commit or deploy from main
\`\`\`

Với branch name, hãy giữ tên đơn giản và dễ search:

\`\`\`text
feature/add-order-filter
fix/prevent-empty-checkout
refactor/extract-user-menu
chore/update-dependencies
\`\`\`

Pull request description có thể dùng cấu trúc ngắn:

\`\`\`text
What changed:
- Added empty and error states to the orders page.

Why:
- Users currently see a blank page when loading fails.

How tested:
- Ran unit tests.
- Tested failed API response locally.
\`\`\`

Cách này cho reviewer đủ context mà không biến mọi PR thành tài liệu dài.

## Lỗi thường gặp

- **Branch sống quá lâu.** Branch càng lâu, merge và review càng khó.
- **Pull request quá lớn.** PR lớn che bug và làm reviewer chậm.
- **Push trực tiếp vào main.** Điều này tăng khả năng build hỏng và thay đổi không được review.
- **Trộn refactor với behavior change.** Reviewer khó biết thay đổi có an toàn không.
- **Bỏ CI vì thay đổi nhỏ.** Thay đổi nhỏ vẫn có thể làm hỏng production.
- **Không đánh dấu release.** Không có tag hoặc deployment record, debug production khó hơn.
- **Hotfix ngoài workflow.** Việc gấp vẫn cần traceability.

## Best practices

- Giữ \`main\` protected và releasable.
- Giữ branch ngắn hạn và tập trung.
- Rebase hoặc merge từ main thường xuyên để giảm drift.
- Dùng pull request cho review và documentation.
- Yêu cầu build và test pass trước merge.
- Ưu tiên PR nhỏ với intent rõ.
- Tách refactor khỏi behavior change khi có thể.
- Tag release hoặc ghi deployed commit hash.
- Dùng hotfix branch từ deployed commit khi production cần sửa gấp.
- Xóa branch đã merge để repository gọn.

Với team nhỏ, workflow tốt nhất là workflow mọi người vẫn làm được vào ngày bận. Giữ rule ít, rõ và dùng tooling enforce phần quan trọng.

## Khi nào nên dùng và khi nào nên tránh

Dùng workflow này cho team từ hai đến mười developer ship sản phẩm đều đặn. Nó phù hợp cho web app, API, mobile app và internal tool.

Tránh copy quy trình Git doanh nghiệp với nhiều environment branch sống lâu nếu team không cần. Git Flow có ích cho một số release model, nhưng thường nặng hơn cần thiết với team nhỏ deploy thường xuyên.

Trade-off là control và speed. Protected main và pull request thêm một chút process, nhưng giảm broken release và lịch sử mơ hồ.

## Tóm tắt

Git workflow tốt cho team nhỏ nên đơn giản, nhìn thấy được và lặp lại được.

- Giữ main protected và releasable.
- Dùng branch ngắn hạn, tập trung.
- Review qua pull request.
- Chạy CI trước merge.
- Track release bằng tag hoặc deployed commit.
- Giữ hotfix traceable.
- Tránh quy trình nặng hơn nhu cầu team.`,category:"practices",tags:["Git","Workflow","Teamwork","Best Practices"],date:"2026-06-03",readTime:"7 min",readTimeVi:"7 phút"},AS={id:"code-review-checklist",title:"Code Review Checklist for Practical Engineering Teams",titleVi:"Checklist code review cho đội kỹ thuật thực tế",excerpt:"A review checklist focused on correctness, maintainability, security, and product behavior.",excerptVi:"Checklist review tập trung vào đúng logic, bảo trì, bảo mật và hành vi sản phẩm.",content:`# Code Review Checklist for Practical Engineering Teams

Code review is not only a gate before merging code. A useful review helps the team catch defects early, share context, improve design, and keep the codebase easier to change. The goal is not to prove that the author made mistakes. The goal is to protect product behavior and help the next change become safer.

A practical checklist keeps review focused. Without one, reviewers often comment on formatting while missing broken edge cases, unclear ownership, missing tests, or risky data handling.

## What problem does this solve?

Code review solves the problem of blind spots. The author understands the implementation deeply, but that can make it harder to notice unclear naming, missing failure paths, or assumptions that are not obvious to someone else.

A good checklist helps reviewers look at the code from several angles:

- Does it solve the intended product behavior?
- Is the logic correct for common and edge cases?
- Is the code understandable enough for future changes?
- Are errors, loading states, retries, and permissions handled?
- Are tests appropriate for the risk?
- Is there any security, privacy, or performance concern?

This does not mean every pull request needs a long formal process. A small styling fix can be reviewed quickly. A payment change, authentication change, migration, or shared utility deserves deeper attention.

## Core concepts

The first concept is **correctness before style**. Formatting matters, but formatting should be automated. Human review should focus on behavior, design, boundaries, and risk.

The second concept is **reviewing the change, not the person**. Comments should point to code and outcomes. A useful comment says what can break, why it matters, and what alternative would be clearer.

The third concept is **matching review depth to risk**. A small copy change does not need the same process as a database migration. Teams should spend review energy where failure is expensive.

The fourth concept is **leaving context behind**. A review discussion should make the decision easier to understand later. If a trade-off is accepted, the code or PR should explain why.

## Practical example

A practical review comment is specific and tied to behavior:

\`\`\`text
Risk:
This branch returns an empty list when the API fails.

Why it matters:
The UI may show "no results" instead of an error, which hides service failures from users.

Suggestion:
Return an explicit error state and let the caller decide whether to show retry UI.
\`\`\`

This is better than "handle errors better" because it explains the product impact and gives a concrete direction.

For implementation changes, a reviewer can ask for a small test:

\`\`\`ts
it("shows an error state when loading orders fails", async () => {
  server.use(
    http.get("/api/orders", () => HttpResponse.error()),
  );

  render(<OrdersPage />);

  expect(await screen.findByText("Unable to load orders")).toBeInTheDocument();
});
\`\`\`

The test documents the expected behavior and protects the failure path.

For day-to-day work, it helps to review in layers instead of reading the diff randomly:

\`\`\`text
1. Product behavior
   - Does the change match the requirement?
   - Are empty, loading, error, and permission states handled?

2. Correctness
   - Are edge cases covered?
   - Are data transformations safe?
   - Are assumptions visible?

3. Maintainability
   - Are names clear?
   - Are responsibilities separated?
   - Is the abstraction justified?

4. Risk
   - Does this touch authentication, payments, database schema, or shared utilities?
   - Is rollback or recovery clear?
\`\`\`

This order keeps the review anchored in outcomes. A perfectly formatted change that breaks authorization is still a bad change. A slightly imperfect implementation that is correct, tested, and isolated can often be improved later.

## Common mistakes

- **Reviewing only style.** If formatting is the main review topic, the team should automate formatting.
- **Ignoring product behavior.** Code can look clean and still solve the wrong problem.
- **Approving without running or reading tests.** Tests are part of the change, not a separate detail.
- **Requesting personal preferences as blockers.** A preference should not block merge unless it affects maintainability or consistency.
- **Leaving vague comments.** "This is confusing" is less useful than naming what is unclear and why.
- **Missing data and security concerns.** Input validation, authorization, secrets, and logging deserve attention.

## Best practices

- Start by reading the PR description and expected behavior.
- Review correctness, edge cases, and failure paths before style.
- Check whether tests match the risk of the change.
- Look for unclear ownership between modules.
- Ask whether names reveal intent.
- Verify that user-facing errors and loading states are handled.
- Watch for security issues: authorization, injection, secrets, sensitive logs.
- Prefer small PRs when possible.
- Write comments that explain impact and offer a path forward.

Authors can make review easier before asking for feedback:

- Keep the PR focused on one purpose.
- Describe what changed and why.
- Mention risky areas or known trade-offs.
- Add screenshots or short recordings for UI changes.
- Explain how the change was tested.
- Separate refactors from behavior changes when possible.

Reviewers should also separate blocking comments from optional suggestions. A security issue, broken behavior, or missing migration test can block merge. A naming preference can often be marked as a suggestion.

## When to use and when to avoid

Use a checklist for normal feature work, shared components, API changes, data changes, and anything that affects user behavior. It is especially useful for teams where reviewers have different experience levels.

Avoid making the checklist a rigid ceremony. A typo fix should not require a long review. The checklist should guide attention, not slow down simple work.

## Summary

A good code review protects correctness and improves shared understanding.

- Review behavior before style.
- Match review depth to risk.
- Ask for tests where bugs would be expensive.
- Keep comments specific and respectful.
- Check failure paths, security, and maintainability.
- Use the review to leave useful context for the team.`,contentVi:`# Checklist code review cho đội kỹ thuật thực tế

Code review không chỉ là một cổng kiểm tra trước khi merge code. Một review hữu ích giúp đội phát hiện lỗi sớm, chia sẻ ngữ cảnh, cải thiện thiết kế và giữ codebase dễ thay đổi hơn. Mục tiêu không phải là chứng minh tác giả viết sai. Mục tiêu là bảo vệ hành vi sản phẩm và giúp lần thay đổi tiếp theo an toàn hơn.

Một checklist thực tế giúp review tập trung. Nếu không có checklist, reviewer dễ comment về format nhưng bỏ sót edge case, ownership chưa rõ, thiếu test hoặc xử lý dữ liệu rủi ro.

## Chủ đề này giải quyết vấn đề gì?

Code review giải quyết vấn đề điểm mù. Người viết hiểu implementation rất sâu, nhưng chính điều đó có thể làm họ khó nhận ra tên gọi chưa rõ, thiếu failure path hoặc assumption không hiển nhiên với người khác.

Một checklist tốt giúp reviewer nhìn code từ nhiều góc:

- Code có giải quyết đúng hành vi sản phẩm không?
- Logic có đúng với case phổ biến và edge case không?
- Code có đủ dễ hiểu cho lần thay đổi sau không?
- Error, loading state, retry và permission đã được xử lý chưa?
- Test có tương xứng với rủi ro không?
- Có vấn đề bảo mật, riêng tư hoặc hiệu năng không?

Điều này không có nghĩa mọi pull request đều cần quy trình dài. Một sửa đổi copy nhỏ có thể review nhanh. Nhưng thay đổi payment, authentication, migration hoặc shared utility cần được xem kỹ hơn.

## Các ý tưởng cốt lõi

Ý tưởng đầu tiên là **correctness trước style**. Formatting quan trọng, nhưng nên được tự động hóa. Review của con người nên tập trung vào behavior, design, boundary và risk.

Ý tưởng thứ hai là **review thay đổi, không review con người**. Comment nên chỉ vào code và outcome. Một comment tốt nói rõ cái gì có thể hỏng, vì sao quan trọng và hướng nào rõ hơn.

Ý tưởng thứ ba là **độ sâu review phải tương xứng rủi ro**. Một thay đổi copy nhỏ không cần cùng mức review với database migration. Team nên dành năng lượng cho nơi lỗi gây hậu quả lớn.

Ý tưởng thứ tư là **để lại ngữ cảnh**. Thảo luận review nên giúp người đọc sau này hiểu quyết định dễ hơn. Nếu chấp nhận trade-off, code hoặc PR nên giải thích lý do.

## Ví dụ thực tế

Một review comment thực tế nên cụ thể và gắn với hành vi:

\`\`\`text
Risk:
Branch này trả về danh sách rỗng khi API lỗi.

Why it matters:
UI có thể hiển thị "không có kết quả" thay vì lỗi, làm người dùng không biết service đang lỗi.

Suggestion:
Trả về error state rõ ràng và để caller quyết định có hiển thị retry UI hay không.
\`\`\`

Cách này tốt hơn "handle errors better" vì nó giải thích tác động sản phẩm và đưa ra hướng xử lý cụ thể.

Với thay đổi implementation, reviewer có thể yêu cầu một test nhỏ:

\`\`\`ts
it("shows an error state when loading orders fails", async () => {
  server.use(
    http.get("/api/orders", () => HttpResponse.error()),
  );

  render(<OrdersPage />);

  expect(await screen.findByText("Unable to load orders")).toBeInTheDocument();
});
\`\`\`

Test này ghi lại hành vi mong muốn và bảo vệ failure path.

Trong công việc hằng ngày, review theo từng lớp sẽ hiệu quả hơn đọc diff ngẫu nhiên:

\`\`\`text
1. Hành vi sản phẩm
   - Thay đổi có đúng requirement không?
   - Empty, loading, error và permission state đã được xử lý chưa?

2. Correctness
   - Edge case đã được nghĩ tới chưa?
   - Data transformation có an toàn không?
   - Assumption có hiển thị rõ không?

3. Maintainability
   - Tên gọi có rõ không?
   - Trách nhiệm có được tách hợp lý không?
   - Abstraction có thật sự cần không?

4. Risk
   - Có chạm authentication, payment, database schema hoặc shared utility không?
   - Rollback hoặc recovery có rõ không?
\`\`\`

Thứ tự này giữ review bám vào outcome. Một thay đổi format rất đẹp nhưng làm hỏng authorization vẫn là thay đổi xấu. Một implementation chưa hoàn hảo nhưng đúng, có test và cô lập tốt thì vẫn có thể cải thiện dần.

## Lỗi thường gặp

- **Chỉ review style.** Nếu format là chủ đề chính, team nên tự động hóa formatter.
- **Bỏ qua hành vi sản phẩm.** Code có thể sạch nhưng vẫn giải quyết sai vấn đề.
- **Approve mà không đọc test.** Test là một phần của thay đổi, không phải chi tiết phụ.
- **Biến sở thích cá nhân thành blocker.** Preference không nên chặn merge nếu không ảnh hưởng maintainability hoặc consistency.
- **Comment mơ hồ.** "Đoạn này khó hiểu" kém hữu ích hơn việc chỉ rõ khó hiểu ở đâu và vì sao.
- **Bỏ sót dữ liệu và bảo mật.** Input validation, authorization, secret và logging cần được chú ý.

## Best practices

- Bắt đầu bằng cách đọc mô tả PR và hành vi mong đợi.
- Review correctness, edge case và failure path trước style.
- Kiểm tra test có tương xứng rủi ro không.
- Xem ownership giữa module có rõ không.
- Hỏi xem tên gọi có thể hiện ý định không.
- Kiểm tra lỗi và loading state phía người dùng.
- Chú ý security: authorization, injection, secrets, sensitive logs.
- Ưu tiên PR nhỏ khi có thể.
- Viết comment giải thích impact và gợi ý hướng xử lý.

Người tạo PR cũng nên giúp quá trình review dễ hơn:

- Giữ PR tập trung vào một mục đích.
- Mô tả đã thay đổi gì và vì sao.
- Nêu rõ vùng rủi ro hoặc trade-off đã chấp nhận.
- Thêm screenshot hoặc video ngắn cho thay đổi UI.
- Giải thích cách đã test.
- Tách refactor khỏi thay đổi behavior khi có thể.

Reviewer cũng nên phân biệt comment bắt buộc và gợi ý tùy chọn. Vấn đề security, behavior sai hoặc thiếu test migration có thể chặn merge. Một sở thích đặt tên thường nên là suggestion.

## Khi nào nên dùng và khi nào nên tránh

Dùng checklist cho feature work, shared component, API change, data change và mọi thay đổi ảnh hưởng hành vi người dùng. Nó đặc biệt hữu ích khi team có reviewer ở nhiều mức kinh nghiệm khác nhau.

Tránh biến checklist thành nghi thức cứng nhắc. Một sửa lỗi chính tả không cần review dài. Checklist nên hướng sự chú ý, không làm chậm việc đơn giản.

## Tóm tắt

Code review tốt bảo vệ correctness và cải thiện hiểu biết chung của team.

- Review behavior trước style.
- Điều chỉnh độ sâu review theo rủi ro.
- Yêu cầu test khi bug có chi phí cao.
- Comment cụ thể và tôn trọng.
- Kiểm tra failure path, security và maintainability.
- Dùng review để để lại ngữ cảnh hữu ích cho team.`,category:"practices",tags:["Code Review","Best Practices","Quality","Teamwork"],date:"2026-06-02",readTime:"8 min",readTimeVi:"8 phút"},IS={id:"testing-strategy-frontend-backend",title:"Testing Strategy Across Frontend and Backend",titleVi:"Chiến lược kiểm thử cho frontend và backend",excerpt:"How to balance unit tests, integration tests, and end-to-end coverage.",excerptVi:"Cách cân bằng unit test, integration test và end-to-end test.",content:`# Testing Strategy Across Frontend and Backend

A testing strategy is not a race to write the most tests. It is a plan for catching the right failures at the right level. Frontend and backend code fail in different ways, so a useful strategy combines unit tests, integration tests, contract tests, and end-to-end tests without making the suite slow and fragile.

Good testing gives a team confidence to change code. Poor testing creates either false confidence or constant maintenance work.

## What problem does this solve?

Applications usually break at boundaries: validation rules, API contracts, database behavior, authentication, loading states, permissions, and integration between frontend and backend. If tests focus only on isolated functions, many real bugs escape. If tests are only end-to-end, they become slow and hard to debug.

A testing strategy helps answer:

- Which behavior is important enough to protect?
- Which layer should test this behavior?
- How much should be mocked?
- Which failures should block merge?
- How do frontend and backend contracts stay aligned?

The goal is balanced coverage, not maximum test count.

## Core concepts

The first concept is **test pyramid thinking**. Unit tests are fast and focused. Integration tests check boundaries. End-to-end tests verify the most important user flows.

The second concept is **behavior over implementation**. Tests should protect what the system should do, not every internal detail.

The third concept is **contract confidence**. Frontend and backend must agree on request and response shapes, status codes, and error formats.

The fourth concept is **realistic integration**. Important database queries, API handlers, and UI states should be tested with enough realism to catch actual bugs.

The fifth concept is **maintainability**. A test that breaks on every harmless refactor becomes noise.

## Practical example

A practical test plan for an orders feature might look like this:

\`\`\`text
Backend unit tests:
- Calculates order total correctly.
- Rejects invalid status transition.

Backend integration tests:
- POST /orders validates request body.
- GET /orders returns only current user's orders.

Frontend component tests:
- Shows loading state.
- Shows empty state.
- Shows error state with retry action.

End-to-end tests:
- User logs in, creates an order, and sees it in order history.
\`\`\`

A frontend test should focus on visible behavior:

\`\`\`ts
it("shows an error state when orders fail to load", async () => {
  server.use(
    http.get("/api/orders", () => HttpResponse.error()),
  );

  render(<OrdersPage />);

  expect(await screen.findByText("Unable to load orders")).toBeInTheDocument();
});
\`\`\`

A backend integration test can protect the API contract:

\`\`\`csharp
[Fact]
public async Task GetOrders_ReturnsOnlyCurrentUserOrders()
{
    var response = await client.GetAsync("/api/orders");

    response.EnsureSuccessStatusCode();
    var orders = await response.Content.ReadFromJsonAsync<List<OrderResponse>>();

    Assert.All(orders, order => Assert.Equal(CurrentUserId, order.UserId));
}
\`\`\`

Together, these tests catch different classes of bugs without relying on one giant test type.

## Common mistakes

- **Testing implementation details.** Tests become fragile when they assert private structure instead of behavior.
- **Mocking too much.** If every dependency is mocked, integration bugs escape.
- **Relying only on end-to-end tests.** E2E tests are valuable but slow and harder to debug.
- **Ignoring error states.** Loading and success paths are not enough.
- **No backend contract tests.** Frontend can break when response shapes change silently.
- **Not testing authorization.** Permission bugs are often serious.
- **Keeping flaky tests.** Flaky tests reduce trust in the whole suite.

## Best practices

- Test business rules with unit tests.
- Test API endpoints and database behavior with integration tests.
- Test frontend user-visible states, not component internals.
- Keep a small set of end-to-end tests for critical flows.
- Add tests for error, empty, loading, and permission states.
- Use realistic test data.
- Make tests deterministic and independent.
- Run fast checks on every pull request.
- Treat flaky tests as bugs.

Testing should follow risk. Payment, authentication, authorization, data migration, and shared utilities deserve more coverage than simple copy changes.

## When to use and when to avoid

Use a layered testing strategy for any application with real users, multiple developers, or important business rules. It is especially useful when frontend and backend are developed separately.

Avoid writing large tests for every small implementation detail. Also avoid adding E2E tests for scenarios better covered by fast unit or integration tests.

The trade-off is confidence versus maintenance. Tests cost time to write and maintain, so place them where they reduce meaningful risk.

## Summary

A strong testing strategy uses the right test at the right layer.

- Unit test business rules.
- Integration test API and database boundaries.
- Component test frontend states.
- E2E test critical user journeys.
- Protect frontend/backend contracts.
- Keep tests deterministic and useful.`,contentVi:`# Chiến lược kiểm thử cho frontend và backend

Chiến lược kiểm thử không phải là cuộc đua viết nhiều test nhất. Nó là kế hoạch bắt đúng lỗi ở đúng tầng. Frontend và backend lỗi theo những cách khác nhau, nên chiến lược hữu ích cần kết hợp unit test, integration test, contract test và end-to-end test mà không làm test suite chậm và dễ vỡ.

Test tốt cho team sự tự tin để thay đổi code. Test kém tạo false confidence hoặc tạo gánh nặng bảo trì liên tục.

## Chủ đề này giải quyết vấn đề gì?

Ứng dụng thường hỏng ở boundary: validation rule, API contract, database behavior, authentication, loading state, permission và integration giữa frontend/backend. Nếu test chỉ tập trung vào function cô lập, nhiều bug thật sẽ lọt. Nếu chỉ có end-to-end test, suite sẽ chậm và khó debug.

Testing strategy giúp trả lời:

- Behavior nào đủ quan trọng để bảo vệ?
- Tầng nào nên test behavior này?
- Nên mock bao nhiêu?
- Failure nào cần block merge?
- Frontend và backend giữ contract khớp nhau thế nào?

Mục tiêu là coverage cân bằng, không phải số lượng test tối đa.

## Các ý tưởng cốt lõi

Ý tưởng đầu tiên là **test pyramid thinking**. Unit test nhanh và tập trung. Integration test kiểm tra boundary. End-to-end test xác nhận user flow quan trọng nhất.

Ý tưởng thứ hai là **behavior hơn implementation**. Test nên bảo vệ hệ thống phải làm gì, không phải mọi chi tiết nội bộ.

Ý tưởng thứ ba là **contract confidence**. Frontend và backend phải thống nhất request/response shape, status code và error format.

Ý tưởng thứ tư là **realistic integration**. Query database, API handler và UI state quan trọng nên được test đủ thực tế để bắt bug thật.

Ý tưởng thứ năm là **maintainability**. Test hỏng vì mọi refactor vô hại sẽ trở thành noise.

## Ví dụ thực tế

Test plan cho feature orders có thể như sau:

\`\`\`text
Backend unit tests:
- Calculates order total correctly.
- Rejects invalid status transition.

Backend integration tests:
- POST /orders validates request body.
- GET /orders returns only current user's orders.

Frontend component tests:
- Shows loading state.
- Shows empty state.
- Shows error state with retry action.

End-to-end tests:
- User logs in, creates an order, and sees it in order history.
\`\`\`

Frontend test nên tập trung vào behavior nhìn thấy được:

\`\`\`ts
it("shows an error state when orders fail to load", async () => {
  server.use(
    http.get("/api/orders", () => HttpResponse.error()),
  );

  render(<OrdersPage />);

  expect(await screen.findByText("Unable to load orders")).toBeInTheDocument();
});
\`\`\`

Backend integration test có thể bảo vệ API contract:

\`\`\`csharp
[Fact]
public async Task GetOrders_ReturnsOnlyCurrentUserOrders()
{
    var response = await client.GetAsync("/api/orders");

    response.EnsureSuccessStatusCode();
    var orders = await response.Content.ReadFromJsonAsync<List<OrderResponse>>();

    Assert.All(orders, order => Assert.Equal(CurrentUserId, order.UserId));
}
\`\`\`

Kết hợp lại, các test này bắt những nhóm bug khác nhau mà không phụ thuộc vào một loại test khổng lồ.

## Lỗi thường gặp

- **Test implementation detail.** Test dễ vỡ khi assert cấu trúc private thay vì behavior.
- **Mock quá nhiều.** Nếu dependency nào cũng mock, integration bug sẽ lọt.
- **Chỉ dựa vào end-to-end test.** E2E có giá trị nhưng chậm và khó debug hơn.
- **Bỏ qua error state.** Loading và success path là chưa đủ.
- **Không có backend contract test.** Frontend có thể hỏng khi response shape đổi âm thầm.
- **Không test authorization.** Permission bug thường nghiêm trọng.
- **Giữ flaky test.** Flaky test làm giảm niềm tin vào cả suite.

## Best practices

- Test business rule bằng unit test.
- Test API endpoint và database behavior bằng integration test.
- Test frontend state người dùng nhìn thấy, không test nội bộ component.
- Giữ một nhóm E2E nhỏ cho flow quan trọng.
- Thêm test cho error, empty, loading và permission state.
- Dùng test data thực tế.
- Làm test deterministic và độc lập.
- Chạy fast checks trên mỗi pull request.
- Xem flaky test là bug.

Testing nên đi theo risk. Payment, authentication, authorization, data migration và shared utility xứng đáng nhiều coverage hơn thay đổi copy đơn giản.

## Khi nào nên dùng và khi nào nên tránh

Dùng chiến lược test theo tầng cho mọi ứng dụng có user thật, nhiều developer hoặc business rule quan trọng. Nó đặc biệt hữu ích khi frontend và backend được phát triển tách biệt.

Tránh viết test lớn cho mọi implementation detail nhỏ. Cũng tránh thêm E2E test cho scenario có thể được cover tốt hơn bằng unit hoặc integration test nhanh.

Trade-off là confidence và maintenance. Test tốn thời gian viết và bảo trì, nên đặt test ở nơi giảm rủi ro có ý nghĩa.

## Tóm tắt

Chiến lược testing mạnh dùng đúng loại test ở đúng tầng.

- Unit test business rule.
- Integration test API và database boundary.
- Component test state frontend.
- E2E test user journey quan trọng.
- Bảo vệ contract frontend/backend.
- Giữ test deterministic và hữu ích.`,category:"practices",tags:["Testing","Frontend","Backend","Quality"],date:"2026-05-29",readTime:"7 min",readTimeVi:"7 phút"},ES={id:"logging-monitoring-basics",title:"Logging and Monitoring Basics for Web Applications",titleVi:"Nền tảng logging và monitoring cho ứng dụng web",excerpt:"What to log, what to measure, and how to make application issues easier to debug.",excerptVi:"Nên log gì, đo gì và cách giúp lỗi ứng dụng dễ debug hơn.",content:`# Logging and Monitoring Basics for Web Applications

When a web application fails, the first question is not "what framework are we using?" The first question is "can we see what happened?" Logging and monitoring make that possible. They turn production behavior into evidence: requests, errors, latency, resource usage, and user-impacting failures.

Many teams add logs only after an incident. A better approach is to design basic observability from the start. You do not need a complex platform on day one, but you do need enough information to debug failed requests, slow pages, background job errors, and unexpected traffic.

This article explains practical logging and monitoring foundations for web applications.

## What problem does this solve?

Without logging and monitoring, production issues become guesswork. A user reports that checkout failed, but the team cannot find the request. An API becomes slow, but nobody knows which endpoint caused it. A background job stops working, but there is no alert until customers notice missing data.

Good logging and monitoring help teams:

- Reconstruct what happened during a request.
- Detect failures before users report them.
- Understand latency and error trends.
- Debug production without exposing sensitive data.
- Measure whether a release improved or harmed reliability.
- Connect frontend symptoms to backend behavior.

The goal is not to collect unlimited data. The goal is to collect the right signals with enough context.

## Core concepts

The first concept is **structured logging**. Logs should be machine-readable, not only plain sentences. A log event should include fields such as request ID, route, status code, duration, user or tenant identifier when safe, and error code.

The second concept is **correlation ID**. A request ID connects logs across frontend, gateway, backend services, queues, and workers. Without it, distributed debugging becomes much harder.

The third concept is **metrics**. Metrics answer questions over time: error rate, latency percentiles, request count, queue depth, CPU, memory, and database connection usage.

The fourth concept is **alerts**. Alerts should represent user-impacting problems, not every minor fluctuation. Too many noisy alerts train teams to ignore them.

The fifth concept is **privacy and security**. Logs must not leak passwords, tokens, payment data, private messages, or unnecessary personal information.

## Practical example

A backend request log should be structured enough to search and aggregate:

\`\`\`text
{
  "level": "info",
  "message": "request completed",
  "requestId": "req_01J8Z...",
  "method": "GET",
  "route": "/api/orders",
  "statusCode": 200,
  "durationMs": 84,
  "userId": "user_123"
}
\`\`\`

For errors, include the context needed to investigate, but avoid sensitive payloads:

\`\`\`ts
type LogContext = {
  requestId: string;
  route: string;
  userId?: string;
};

function logOrderFailure(error: unknown, context: LogContext) {
  logger.error("Unable to load order", {
    requestId: context.requestId,
    route: context.route,
    userId: context.userId,
    errorName: error instanceof Error ? error.name : "UnknownError",
  });
}
\`\`\`

For monitoring, start with a small dashboard:

\`\`\`text
Core web app signals:
- Request rate by route
- Error rate by route
- p50, p95, p99 latency
- Database query duration
- Queue depth and failed jobs
- Frontend page load and client-side errors
\`\`\`

This is enough to answer many first-level production questions: what is failing, how often, how slow, and whether the issue started after a deploy.

## Common mistakes

- **Logging only strings.** Plain text is hard to search reliably. Structured fields make logs useful.
- **Logging too much sensitive data.** Request bodies may contain passwords, tokens, addresses, or payment information.
- **No request ID.** Without correlation, one user action becomes scattered across unrelated logs.
- **Alerting on everything.** Noisy alerts create fatigue and reduce trust in monitoring.
- **Only monitoring servers.** User experience also depends on frontend errors, page load, API latency, and third-party services.
- **Ignoring background jobs.** Queues and scheduled jobs can fail silently if they are not monitored.
- **Not connecting logs to releases.** Deployment markers help identify when a problem started.

## Best practices

- Use structured logs with consistent field names.
- Attach or generate a request ID at the edge of the system.
- Log important lifecycle events: request completed, job failed, payment callback received, migration completed.
- Include enough context to debug, but remove secrets and sensitive payloads.
- Track error rate and latency by route.
- Monitor dependencies such as database, cache, queues, and external APIs.
- Create alerts for user-impacting symptoms, not every technical detail.
- Review logs after incidents and improve missing context.
- Keep dashboards small enough that teams actually use them.

Logging should be designed for the person debugging at 2 AM. They need a clear path from symptom to cause: user report, request ID, logs, metrics, release, and affected dependency.

## When to use and when to avoid

Use logging and monitoring for every application that serves real users, handles background jobs, processes payments, integrates with external services, or stores important data. Even small applications benefit from basic request logs, error tracking, and uptime checks.

Avoid building a huge observability stack before the product has basic needs. A simple hosted logger, error tracker, uptime monitor, and a few dashboard metrics may be enough at first.

The trade-off is signal versus noise. Too little data makes incidents hard to debug. Too much unstructured data becomes expensive and ignored. Good observability collects focused, searchable, safe signals.

## Summary

Logging and monitoring turn production behavior into evidence. They make debugging faster and reliability more measurable.

- Use structured logs instead of random strings.
- Add request IDs for correlation.
- Monitor latency, errors, traffic, and dependencies.
- Keep sensitive data out of logs.
- Alert on user-impacting symptoms.
- Review observability gaps after incidents.`,contentVi:`# Nền tảng logging và monitoring cho ứng dụng web

Khi ứng dụng web gặp lỗi, câu hỏi đầu tiên không phải là "đang dùng framework gì?" Câu hỏi đầu tiên là "mình có thấy chuyện gì đã xảy ra không?" Logging và monitoring giúp trả lời câu hỏi đó. Chúng biến hành vi production thành bằng chứng: request, error, latency, resource usage và lỗi ảnh hưởng đến người dùng.

Nhiều team chỉ thêm log sau khi đã có incident. Cách tốt hơn là thiết kế observability cơ bản ngay từ đầu. Bạn không cần một platform phức tạp ở ngày đầu tiên, nhưng cần đủ thông tin để debug request lỗi, page chậm, background job hỏng và traffic bất thường.

Bài viết này giải thích nền tảng logging và monitoring thực tế cho ứng dụng web.

## Chủ đề này giải quyết vấn đề gì?

Không có logging và monitoring, sự cố production trở thành việc đoán mò. User báo checkout thất bại nhưng team không tìm được request. API chậm nhưng không ai biết endpoint nào gây ra. Background job ngừng chạy nhưng không có alert cho đến khi khách hàng thấy thiếu dữ liệu.

Logging và monitoring tốt giúp team:

- Dựng lại chuyện đã xảy ra trong một request.
- Phát hiện lỗi trước khi user báo.
- Hiểu xu hướng latency và error.
- Debug production mà không lộ dữ liệu nhạy cảm.
- Đo xem một release cải thiện hay làm giảm reliability.
- Nối triệu chứng frontend với hành vi backend.

Mục tiêu không phải là thu thập vô hạn dữ liệu. Mục tiêu là thu đúng tín hiệu với đủ ngữ cảnh.

## Các ý tưởng cốt lõi

Ý tưởng đầu tiên là **structured logging**. Log nên machine-readable, không chỉ là câu text. Một log event nên có field như request ID, route, status code, duration, user hoặc tenant identifier khi an toàn và error code.

Ý tưởng thứ hai là **correlation ID**. Request ID nối log giữa frontend, gateway, backend service, queue và worker. Không có nó, debug hệ thống phân tán khó hơn nhiều.

Ý tưởng thứ ba là **metrics**. Metrics trả lời câu hỏi theo thời gian: error rate, latency percentile, request count, queue depth, CPU, memory và số connection database.

Ý tưởng thứ tư là **alerts**. Alert nên đại diện cho vấn đề ảnh hưởng user, không phải mọi dao động nhỏ. Quá nhiều alert nhiễu khiến team học cách bỏ qua chúng.

Ý tưởng thứ năm là **privacy và security**. Log không được lộ password, token, payment data, private message hoặc thông tin cá nhân không cần thiết.

## Ví dụ thực tế

Backend request log nên đủ structured để search và aggregate:

\`\`\`text
{
  "level": "info",
  "message": "request completed",
  "requestId": "req_01J8Z...",
  "method": "GET",
  "route": "/api/orders",
  "statusCode": 200,
  "durationMs": 84,
  "userId": "user_123"
}
\`\`\`

Với error, hãy thêm context cần để điều tra nhưng tránh payload nhạy cảm:

\`\`\`ts
type LogContext = {
  requestId: string;
  route: string;
  userId?: string;
};

function logOrderFailure(error: unknown, context: LogContext) {
  logger.error("Unable to load order", {
    requestId: context.requestId,
    route: context.route,
    userId: context.userId,
    errorName: error instanceof Error ? error.name : "UnknownError",
  });
}
\`\`\`

Với monitoring, hãy bắt đầu bằng dashboard nhỏ:

\`\`\`text
Core web app signals:
- Request rate by route
- Error rate by route
- p50, p95, p99 latency
- Database query duration
- Queue depth and failed jobs
- Frontend page load and client-side errors
\`\`\`

Những tín hiệu này đủ để trả lời nhiều câu hỏi production đầu tiên: cái gì đang lỗi, lỗi bao nhiêu lần, chậm thế nào và vấn đề có bắt đầu sau deploy không.

## Lỗi thường gặp

- **Chỉ log string.** Plain text khó search ổn định. Field có cấu trúc làm log hữu ích hơn.
- **Log quá nhiều dữ liệu nhạy cảm.** Request body có thể chứa password, token, địa chỉ hoặc payment information.
- **Không có request ID.** Không có correlation, một hành động của user bị tách thành nhiều log rời rạc.
- **Alert mọi thứ.** Alert nhiễu tạo fatigue và làm giảm niềm tin vào monitoring.
- **Chỉ monitor server.** Trải nghiệm user còn phụ thuộc frontend error, page load, API latency và third-party service.
- **Bỏ qua background job.** Queue và scheduled job có thể lỗi âm thầm nếu không được monitor.
- **Không nối log với release.** Deployment marker giúp xác định vấn đề bắt đầu khi nào.

## Best practices

- Dùng structured logs với field name nhất quán.
- Gắn hoặc tạo request ID ở edge của hệ thống.
- Log lifecycle event quan trọng: request completed, job failed, payment callback received, migration completed.
- Thêm đủ context để debug nhưng loại bỏ secret và payload nhạy cảm.
- Theo dõi error rate và latency theo route.
- Monitor dependency như database, cache, queue và external API.
- Tạo alert cho triệu chứng ảnh hưởng user, không phải mọi chi tiết kỹ thuật.
- Review log sau incident và bổ sung context còn thiếu.
- Giữ dashboard đủ nhỏ để team thật sự dùng.

Logging nên được thiết kế cho người phải debug lúc nửa đêm. Họ cần đường đi rõ từ symptom đến cause: user report, request ID, log, metric, release và dependency bị ảnh hưởng.

## Khi nào nên dùng và khi nào nên tránh

Dùng logging và monitoring cho mọi ứng dụng phục vụ user thật, có background job, xử lý payment, tích hợp external service hoặc lưu dữ liệu quan trọng. Ngay cả ứng dụng nhỏ cũng hưởng lợi từ request log, error tracking và uptime check cơ bản.

Tránh xây observability stack quá lớn trước khi sản phẩm có nhu cầu thật. Một hosted logger, error tracker, uptime monitor và vài metric dashboard có thể đủ ở giai đoạn đầu.

Trade-off là signal và noise. Quá ít dữ liệu khiến incident khó debug. Quá nhiều dữ liệu không cấu trúc thì tốn chi phí và bị bỏ qua. Observability tốt thu thập tín hiệu tập trung, searchable và an toàn.

## Tóm tắt

Logging và monitoring biến hành vi production thành bằng chứng. Chúng giúp debug nhanh hơn và đo reliability rõ hơn.

- Dùng structured logs thay vì string ngẫu nhiên.
- Thêm request ID để correlation.
- Monitor latency, error, traffic và dependency.
- Không đưa dữ liệu nhạy cảm vào log.
- Alert theo triệu chứng ảnh hưởng user.
- Review khoảng trống observability sau incident.`,category:"practices",tags:["Logging","Monitoring","DevOps","Debugging"],date:"2026-05-30",readTime:"7 min",readTimeVi:"7 phút"},jS={id:"backend-developer-roadmap",title:"Backend Developer Roadmap: From Fundamentals to Deployment",titleVi:"Lộ trình Backend Developer từ nền tảng đến triển khai",excerpt:"A practical learning path covering HTTP, databases, API design, testing, deployment, and basic operations.",excerptVi:"Lộ trình thực tế gồm HTTP, database, thiết kế API, kiểm thử, triển khai và vận hành cơ bản.",content:`# Backend Developer Roadmap: From Fundamentals to Deployment

Backend development is about building the systems that receive requests, apply business rules, store data, integrate with other services, and return reliable responses. A backend developer does not only write API endpoints. They also need to understand data modeling, authentication, validation, testing, deployment, logging, and failure handling.

A good roadmap keeps the learning path practical: start with HTTP and programming fundamentals, then move into databases, API design, testing, deployment, and basic operations.

## What problem does this solve?

Backend learning can become fragmented. One tutorial teaches a framework, another teaches SQL, another teaches Docker, and another teaches authentication. Without a path, it is easy to know many pieces but not understand how they fit into a working application.

This roadmap organizes the core skills in the order they are usually needed when building real systems.

## Core concepts

The first foundation is **HTTP**. You should understand methods, status codes, headers, request bodies, response bodies, cookies, CORS, caching, and idempotency.

The second foundation is **data**. Most backend systems revolve around storing and retrieving data safely. SQL, schema design, indexes, transactions, and migrations are essential.

The third foundation is **API design**. A good API has clear resources, validation, error responses, pagination, authentication, and versioning strategy.

The fourth foundation is **reliability**. Backend systems should handle invalid input, timeouts, retries, logging, and partial failure deliberately.

## Practical example

A simple backend learning sequence can look like this:

\`\`\`text
Stage 1: HTTP basics
- Build a small REST API with CRUD endpoints.

Stage 2: Database fundamentals
- Add SQL tables, relationships, migrations, and indexes.

Stage 3: Authentication and validation
- Add login, protected routes, input validation, and error responses.

Stage 4: Testing
- Add unit tests for rules and integration tests for API/database flows.

Stage 5: Deployment
- Containerize the app, configure environment variables, deploy it, and monitor logs.
\`\`\`

Each stage should produce a working feature. For example, a bookstore API can start with books and categories, then add users, orders, authentication, and deployment.

As the project grows, organize the code around responsibilities instead of placing all logic in route handlers:

\`\`\`text
src/
  modules/
    books/
      books.controller.ts
      books.service.ts
      books.repository.ts
      books.validation.ts
    orders/
    users/
  shared/
    database/
    auth/
    errors/
    logging/
\`\`\`

The naming can change by language or framework, but the separation is useful: controllers handle HTTP, services handle business rules, repositories handle data access, and shared modules hold cross-cutting concerns.

A professional backend also needs consistent response behavior. For example:

\`\`\`text
Successful response:
{
  "data": {
    "id": "book_123",
    "title": "Clean Architecture Notes"
  }
}

Validation error:
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "The request body is invalid.",
    "fields": {
      "title": "Title is required."
    },
    "requestId": "req_01J..."
  }
}
\`\`\`

This makes frontend integration easier and makes logs easier to connect with user reports.

Before calling a backend feature complete, walk through the full request path:

\`\`\`text
Client request
-> route and authentication
-> input validation
-> business rule
-> database transaction if needed
-> response mapping
-> structured log with request ID
-> test covering success and important failure paths
\`\`\`

This flow is more valuable than memorizing framework features because it reflects how production bugs usually appear.

## Common mistakes

- **Learning only a framework.** Framework knowledge is useful, but backend fundamentals transfer across frameworks.
- **Skipping SQL basics.** ORMs are easier to use when you understand queries, indexes, and transactions.
- **Returning inconsistent errors.** Clients need predictable error shapes.
- **Ignoring validation.** Never trust request bodies just because the frontend sends them.
- **Putting secrets in source code.** Use environment variables or secret management.
- **Deploying without logs.** If you cannot inspect failures, deployment is incomplete.

## Best practices

- Learn HTTP before advanced framework features.
- Build APIs with clear resources and status codes.
- Validate input at the boundary.
- Keep business rules separate from controllers when possible.
- Use migrations to manage database schema changes.
- Write tests for important rules and API flows.
- Add structured logs with request IDs.
- Learn basic Docker and deployment workflows.
- Practice debugging slow queries and failed requests.

For deployment readiness, add a small checklist:

- Configuration comes from environment variables, not hard-coded values.
- Secrets are not committed to source control.
- Database migrations are reviewed and tested against realistic data.
- Health checks can tell whether the app is ready to receive traffic.
- Logs include request ID, route, status code, duration, and user or tenant identifier when safe.
- Error monitoring captures unexpected failures without logging sensitive data.
- Rollback or hotfix steps are known before release.

## When to use and when to avoid

Use this roadmap when you want to build real backend applications, not only follow framework tutorials. It is useful for web APIs, admin systems, mobile backends, and small services.

Avoid trying to learn every backend topic at once. Distributed systems, event streaming, Kubernetes, and advanced observability can wait until the fundamentals are stable.

## Summary

Backend development becomes clearer when the learning path follows how real systems are built.

- Understand HTTP deeply.
- Learn SQL and data modeling.
- Design predictable APIs.
- Validate input and handle errors clearly.
- Test important behavior.
- Deploy and observe the application.
- Add advanced architecture only after the basics are solid.`,contentVi:`# Lộ trình Backend Developer từ nền tảng đến triển khai

Backend development là việc xây dựng hệ thống nhận request, áp dụng business rule, lưu dữ liệu, tích hợp với service khác và trả response đáng tin cậy. Một backend developer không chỉ viết API endpoint. Họ cũng cần hiểu data modeling, authentication, validation, testing, deployment, logging và failure handling.

Một roadmap tốt giữ lộ trình học thực tế: bắt đầu với HTTP và nền tảng lập trình, sau đó đến database, API design, testing, deployment và vận hành cơ bản.

## Chủ đề này giải quyết vấn đề gì?

Việc học backend dễ bị rời rạc. Một tutorial dạy framework, một tutorial dạy SQL, một cái khác dạy Docker, một cái khác dạy authentication. Nếu không có lộ trình, bạn có thể biết nhiều mảnh nhỏ nhưng không hiểu chúng ghép thành ứng dụng chạy thật như thế nào.

Roadmap này sắp xếp các kỹ năng cốt lõi theo thứ tự thường cần khi xây hệ thống thật.

## Các ý tưởng cốt lõi

Nền tảng đầu tiên là **HTTP**. Bạn nên hiểu method, status code, header, request body, response body, cookie, CORS, caching và idempotency.

Nền tảng thứ hai là **dữ liệu**. Phần lớn backend xoay quanh việc lưu và đọc dữ liệu an toàn. SQL, schema design, index, transaction và migration là kiến thức cần thiết.

Nền tảng thứ ba là **API design**. Một API tốt có resource rõ ràng, validation, error response, pagination, authentication và chiến lược versioning.

Nền tảng thứ tư là **độ tin cậy**. Backend nên xử lý input sai, timeout, retry, logging và partial failure có chủ đích.

## Ví dụ thực tế

Một lộ trình học backend đơn giản có thể như sau:

\`\`\`text
Giai đoạn 1: HTTP basics
- Xây REST API nhỏ với CRUD endpoints.

Giai đoạn 2: Database fundamentals
- Thêm SQL tables, relationships, migrations và indexes.

Giai đoạn 3: Authentication và validation
- Thêm login, protected routes, input validation và error responses.

Giai đoạn 4: Testing
- Thêm unit test cho rule và integration test cho API/database flow.

Giai đoạn 5: Deployment
- Containerize app, cấu hình environment variables, deploy và xem logs.
\`\`\`

Mỗi giai đoạn nên tạo ra một feature chạy được. Ví dụ bookstore API có thể bắt đầu với books và categories, rồi thêm users, orders, authentication và deployment.

Khi project lớn hơn, hãy tổ chức code theo trách nhiệm thay vì đặt toàn bộ logic trong route handler:

\`\`\`text
src/
  modules/
    books/
      books.controller.ts
      books.service.ts
      books.repository.ts
      books.validation.ts
    orders/
    users/
  shared/
    database/
    auth/
    errors/
    logging/
\`\`\`

Tên thư mục có thể thay đổi theo ngôn ngữ hoặc framework, nhưng cách tách trách nhiệm rất quan trọng: controller xử lý HTTP, service xử lý business rule, repository xử lý data access, shared module chứa cross-cutting concern.

Một backend chuyên nghiệp cũng cần response nhất quán. Ví dụ:

\`\`\`text
Successful response:
{
  "data": {
    "id": "book_123",
    "title": "Clean Architecture Notes"
  }
}

Validation error:
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "The request body is invalid.",
    "fields": {
      "title": "Title is required."
    },
    "requestId": "req_01J..."
  }
}
\`\`\`

Cách này giúp frontend tích hợp dễ hơn và giúp log dễ đối chiếu với báo lỗi từ người dùng.

Trước khi xem một backend feature là hoàn chỉnh, hãy đi qua toàn bộ request path:

\`\`\`text
Client request
-> route and authentication
-> input validation
-> business rule
-> database transaction if needed
-> response mapping
-> structured log with request ID
-> test covering success and important failure paths
\`\`\`

Flow này hữu ích hơn việc chỉ ghi nhớ tính năng framework vì nó phản ánh cách bug production thường xuất hiện.

## Lỗi thường gặp

- **Chỉ học framework.** Framework hữu ích, nhưng nền tảng backend mới là thứ chuyển được giữa nhiều framework.
- **Bỏ qua SQL cơ bản.** ORM dễ dùng hơn khi bạn hiểu query, index và transaction.
- **Trả lỗi không nhất quán.** Client cần error shape dự đoán được.
- **Bỏ qua validation.** Không bao giờ tin request body chỉ vì frontend gửi lên.
- **Đưa secret vào source code.** Hãy dùng environment variables hoặc secret management.
- **Deploy mà không có log.** Nếu không xem được lỗi, deployment chưa hoàn chỉnh.

## Best practices

- Học HTTP trước các tính năng framework nâng cao.
- Xây API với resource và status code rõ ràng.
- Validate input ở boundary.
- Tách business rule khỏi controller khi có thể.
- Dùng migration để quản lý thay đổi schema.
- Viết test cho rule và API flow quan trọng.
- Thêm structured log với request ID.
- Học Docker và workflow deployment cơ bản.
- Luyện debug slow query và failed request.

Với phần sẵn sàng triển khai, nên có checklist nhỏ:

- Configuration lấy từ environment variables, không hard-code.
- Secret không được commit vào source control.
- Database migration được review và test với dữ liệu gần thực tế.
- Health check cho biết app đã sẵn sàng nhận traffic hay chưa.
- Log có request ID, route, status code, duration và user hoặc tenant identifier khi an toàn.
- Error monitoring bắt lỗi bất ngờ mà không log dữ liệu nhạy cảm.
- Bước rollback hoặc hotfix được biết trước khi release.

## Khi nào nên dùng và khi nào nên tránh

Dùng roadmap này khi bạn muốn xây backend application thật, không chỉ đi theo framework tutorial. Nó phù hợp cho web API, admin system, mobile backend và service nhỏ.

Tránh học mọi chủ đề backend cùng lúc. Distributed systems, event streaming, Kubernetes và observability nâng cao có thể để sau khi nền tảng đã vững.

## Tóm tắt

Backend development rõ ràng hơn khi lộ trình học đi theo cách hệ thống thật được xây dựng.

- Hiểu HTTP thật chắc.
- Học SQL và data modeling.
- Thiết kế API dự đoán được.
- Validate input và xử lý lỗi rõ ràng.
- Test hành vi quan trọng.
- Deploy và quan sát ứng dụng.
- Chỉ thêm kiến trúc nâng cao sau khi nền tảng ổn.`,category:"roadmap",tags:["Backend","Roadmap","API","Career"],date:"2026-05-28",readTime:"8 min",readTimeVi:"8 phút"},RS={id:"devops-roadmap-for-developers",title:"DevOps Roadmap for Developers",titleVi:"Lộ trình DevOps cho lập trình viên",excerpt:"A practical path through Linux, Docker, CI/CD, cloud deployment, and observability.",excerptVi:"Lộ trình thực tế qua Linux, Docker, CI/CD, cloud deployment và observability.",content:`# DevOps Roadmap for Developers

DevOps is not a separate world that developers should ignore until deployment day. For application developers, DevOps means understanding how code runs outside the local machine: configuration, containers, CI/CD, cloud services, logs, monitoring, security, and rollback.

A practical roadmap should not start with Kubernetes. It should start with the basics that make deployments repeatable and production issues easier to debug. The goal is to become a developer who can ship and operate applications responsibly, not necessarily to become a full-time platform engineer immediately.

## What problem does this solve?

Many developers can build features locally but feel blocked when the application must run on a server, connect to a database, use environment variables, pass CI checks, or recover from a failed release.

A DevOps roadmap helps connect development work with production reality:

- How is the app built?
- How is configuration provided?
- How are dependencies installed?
- How does CI verify the change?
- How is the app deployed?
- How are logs and metrics inspected?
- How can the team rollback if something fails?

Understanding these questions makes developers more effective because production stops being a black box.

## Core concepts

The first concept is **Linux and shell basics**. Most servers and containers run on Linux. Developers should know file paths, processes, environment variables, permissions, logs, and basic shell commands.

The second concept is **containerization**. Docker packages the application and its runtime dependencies so the app runs more consistently across machines.

The third concept is **CI/CD**. Continuous integration checks code automatically. Continuous delivery or deployment moves validated changes toward production in a repeatable way.

The fourth concept is **configuration and secrets**. Configuration should come from the environment or secret store, not hard-coded source files.

The fifth concept is **observability**. Logs, metrics, traces, and alerts help teams see how the application behaves after deployment.

The sixth concept is **operational safety**. Rollbacks, health checks, backups, and deployment strategies reduce the impact of failures.

## Practical example

A practical learning path can be organized like this:

\`\`\`text
Stage 1: Operating system basics
- Learn Linux file paths, processes, ports, environment variables, and logs.

Stage 2: Docker
- Containerize a small web API and run it with a database.

Stage 3: CI
- Run lint, tests, and build checks on every pull request.

Stage 4: Deployment
- Deploy the app to a small cloud server or platform service.

Stage 5: Observability
- Add structured logs, health checks, uptime monitoring, and basic alerts.

Stage 6: Reliability
- Practice rollback, backup restore, and failed deployment recovery.
\`\`\`

A simple CI pipeline for a web app may look like this:

\`\`\`text
Pull request opened
-> install dependencies
-> run lint
-> run tests
-> build application
-> block merge if checks fail
\`\`\`

For configuration, keep local and production values separate:

\`\`\`text
DATABASE_URL=postgres://...
APP_ENV=production
LOG_LEVEL=info
FEATURE_NEW_CHECKOUT=false
\`\`\`

The important habit is not memorizing one provider. It is understanding the flow from source code to running application.

## Common mistakes

- **Starting with advanced tools too early.** Kubernetes, service mesh, and complex cloud networking can wait until the basics are stable.
- **Hard-coding configuration.** Values that differ per environment should not live in source code.
- **Ignoring failed builds.** CI must be trusted. If broken checks are ignored, the pipeline becomes decoration.
- **Deploying without health checks.** A process can be running but still not ready to serve traffic.
- **No rollback plan.** Every release should have a recovery path.
- **Not reading logs.** Developers who cannot inspect logs are slower at debugging production issues.
- **Treating security as someone else's job.** Secrets, dependency updates, and least privilege affect application safety.

## Best practices

- Learn enough Linux to inspect running applications.
- Use Docker to make runtime dependencies explicit.
- Add CI checks that match real quality gates.
- Keep configuration outside source code.
- Store secrets in environment-specific secret management.
- Add health checks and readiness checks.
- Log important application events with request IDs.
- Monitor uptime, latency, error rate, and resource usage.
- Practice rollback before a real incident.
- Keep deployment documentation short and current.

For developers, the best DevOps learning project is a complete small app: API, database, Dockerfile, CI pipeline, deployment, logs, monitoring, and backup. That teaches the full lifecycle better than studying isolated tools.

## When to use and when to avoid

Use this roadmap when you want to understand how applications move from local development to production. It is useful for backend developers, full-stack developers, mobile backend developers, and frontend developers working with modern deployment platforms.

Avoid trying to become expert in every DevOps tool at once. The ecosystem is large, and tools change. Focus on durable concepts first: build, package, configure, deploy, observe, secure, recover.

The trade-off is depth. Developers do not need to replace platform teams, but they should understand enough to collaborate well and avoid shipping code that is impossible to operate.

## Summary

DevOps for developers is about closing the gap between writing code and running code reliably.

- Learn Linux and runtime basics.
- Containerize applications with clear configuration.
- Use CI to protect the main branch.
- Deploy in a repeatable way.
- Add logs, metrics, health checks, and alerts.
- Practice rollback and recovery.
- Learn advanced infrastructure only after the fundamentals are useful.`,contentVi:`# Lộ trình DevOps cho lập trình viên

DevOps không phải là một thế giới riêng mà developer chỉ cần quan tâm vào ngày deploy. Với lập trình viên ứng dụng, DevOps nghĩa là hiểu code chạy bên ngoài máy local như thế nào: configuration, container, CI/CD, cloud service, log, monitoring, security và rollback.

Một roadmap thực tế không nên bắt đầu bằng Kubernetes. Nó nên bắt đầu từ nền tảng giúp deployment lặp lại được và production issue dễ debug hơn. Mục tiêu là trở thành developer có thể ship và vận hành ứng dụng có trách nhiệm, không nhất thiết phải trở thành platform engineer toàn thời gian ngay lập tức.

## Chủ đề này giải quyết vấn đề gì?

Nhiều developer có thể build feature ở local nhưng bị kẹt khi ứng dụng cần chạy trên server, kết nối database, dùng environment variable, qua CI check hoặc recover sau release lỗi.

Roadmap DevOps giúp nối công việc development với thực tế production:

- App được build như thế nào?
- Configuration được cung cấp ra sao?
- Dependency được cài bằng cách nào?
- CI kiểm tra thay đổi ra sao?
- App được deploy như thế nào?
- Log và metric được xem ở đâu?
- Team rollback thế nào nếu có lỗi?

Hiểu các câu hỏi này giúp developer hiệu quả hơn vì production không còn là hộp đen.

## Các ý tưởng cốt lõi

Ý tưởng đầu tiên là **Linux và shell basics**. Phần lớn server và container chạy trên Linux. Developer nên biết file path, process, environment variable, permission, log và lệnh shell cơ bản.

Ý tưởng thứ hai là **containerization**. Docker đóng gói application và runtime dependency để app chạy nhất quán hơn giữa các môi trường.

Ý tưởng thứ ba là **CI/CD**. Continuous integration kiểm tra code tự động. Continuous delivery hoặc deployment đưa thay đổi đã được kiểm tra tới production theo cách lặp lại được.

Ý tưởng thứ tư là **configuration và secrets**. Configuration nên đến từ environment hoặc secret store, không hard-code trong source file.

Ý tưởng thứ năm là **observability**. Log, metric, trace và alert giúp team thấy ứng dụng hoạt động thế nào sau khi deploy.

Ý tưởng thứ sáu là **operational safety**. Rollback, health check, backup và deployment strategy giảm tác động khi có lỗi.

## Ví dụ thực tế

Một lộ trình học thực tế có thể tổ chức như sau:

\`\`\`text
Giai đoạn 1: Operating system basics
- Học Linux file path, process, port, environment variable và log.

Giai đoạn 2: Docker
- Containerize một web API nhỏ và chạy cùng database.

Giai đoạn 3: CI
- Chạy lint, test và build check trên mỗi pull request.

Giai đoạn 4: Deployment
- Deploy app lên cloud server nhỏ hoặc platform service.

Giai đoạn 5: Observability
- Thêm structured logs, health check, uptime monitoring và alert cơ bản.

Giai đoạn 6: Reliability
- Luyện rollback, restore backup và recover khi deployment lỗi.
\`\`\`

Một CI pipeline đơn giản cho web app có thể như sau:

\`\`\`text
Pull request opened
-> install dependencies
-> run lint
-> run tests
-> build application
-> block merge if checks fail
\`\`\`

Với configuration, hãy tách local và production value:

\`\`\`text
DATABASE_URL=postgres://...
APP_ENV=production
LOG_LEVEL=info
FEATURE_NEW_CHECKOUT=false
\`\`\`

Thói quen quan trọng không phải là ghi nhớ một provider. Điều quan trọng là hiểu flow từ source code đến ứng dụng đang chạy.

## Lỗi thường gặp

- **Bắt đầu bằng tool quá nâng cao.** Kubernetes, service mesh và cloud networking phức tạp có thể để sau khi nền tảng ổn.
- **Hard-code configuration.** Giá trị khác nhau theo environment không nên nằm trong source code.
- **Bỏ qua build lỗi.** CI phải đáng tin. Nếu check đỏ vẫn bị bỏ qua, pipeline chỉ còn là trang trí.
- **Deploy không có health check.** Process có thể đang chạy nhưng chưa sẵn sàng nhận traffic.
- **Không có rollback plan.** Mỗi release nên có đường recover.
- **Không đọc log.** Developer không biết xem log sẽ debug production chậm hơn.
- **Xem security là việc của người khác.** Secret, dependency update và least privilege ảnh hưởng trực tiếp đến an toàn ứng dụng.

## Best practices

- Học đủ Linux để inspect ứng dụng đang chạy.
- Dùng Docker để runtime dependency rõ ràng.
- Thêm CI check tương ứng với quality gate thật.
- Đưa configuration ra ngoài source code.
- Lưu secret trong secret management theo environment.
- Thêm health check và readiness check.
- Log event quan trọng với request ID.
- Monitor uptime, latency, error rate và resource usage.
- Luyện rollback trước khi có incident thật.
- Giữ tài liệu deployment ngắn và cập nhật.

Với developer, project học DevOps tốt nhất là một app nhỏ hoàn chỉnh: API, database, Dockerfile, CI pipeline, deployment, log, monitoring và backup. Nó dạy toàn bộ lifecycle tốt hơn việc học từng tool rời rạc.

## Khi nào nên dùng và khi nào nên tránh

Dùng roadmap này khi bạn muốn hiểu ứng dụng đi từ local development đến production như thế nào. Nó hữu ích cho backend developer, full-stack developer, mobile backend developer và frontend developer làm việc với deployment platform hiện đại.

Tránh cố trở thành chuyên gia mọi DevOps tool cùng lúc. Hệ sinh thái rất lớn và tool thay đổi. Hãy tập trung vào concept bền vững trước: build, package, configure, deploy, observe, secure, recover.

Trade-off nằm ở độ sâu. Developer không cần thay thế platform team, nhưng nên hiểu đủ để cộng tác tốt và tránh ship code không thể vận hành.

## Tóm tắt

DevOps cho lập trình viên là việc thu hẹp khoảng cách giữa viết code và chạy code ổn định.

- Học Linux và runtime basics.
- Containerize app với configuration rõ ràng.
- Dùng CI để bảo vệ main branch.
- Deploy theo cách lặp lại được.
- Thêm log, metric, health check và alert.
- Luyện rollback và recovery.
- Học hạ tầng nâng cao sau khi nền tảng đã hữu ích.`,category:"roadmap",tags:["DevOps","Docker","CI/CD","Roadmap"],date:"2026-05-27",readTime:"7 min",readTimeVi:"7 phút"},LS={id:"database-learning-roadmap",title:"Database Learning Roadmap for Application Developers",titleVi:"Lộ trình học database cho lập trình viên ứng dụng",excerpt:"A structured path from SQL basics to indexing, transactions, modeling, and operations.",excerptVi:"Lộ trình từ SQL cơ bản đến indexing, transaction, modeling và vận hành.",content:`# Database Learning Roadmap for Application Developers

Application developers do not need to become database administrators immediately, but they do need solid database fundamentals. Many application bugs come from weak data modeling, missing constraints, slow queries, unsafe migrations, or misunderstanding transactions.

A practical database roadmap helps developers move from writing basic SQL to designing schemas, reading query plans, handling transactions, and operating database-backed applications responsibly.

## What problem does this solve?

Most applications depend on data. If the database layer is poorly understood, the application may look fine at first but fail when data grows or concurrent users appear.

Common problems include:

- Duplicate records because constraints are missing.
- Slow pages because queries do not use indexes.
- Incorrect balances because transactions are misunderstood.
- Broken deployments because migrations are unsafe.
- Confusing code because the data model does not match the domain.

Learning databases systematically prevents these issues earlier.

## Core concepts

The first concept is **relational modeling**. Tables should represent real entities and relationships. Primary keys, foreign keys, unique constraints, and not-null constraints protect data quality.

The second concept is **SQL fluency**. Developers should know \`SELECT\`, \`JOIN\`, \`WHERE\`, \`GROUP BY\`, \`ORDER BY\`, aggregation, inserts, updates, and deletes.

The third concept is **indexing**. Indexes speed up reads but cost storage and write overhead. They should be designed around actual query patterns.

The fourth concept is **transactions**. Transactions protect consistency when several operations must succeed or fail together.

The fifth concept is **operations awareness**. Backups, migrations, monitoring, and connection pooling matter once the app is used by real users.

## Practical example

A small learning project can be a bookstore database:

\`\`\`text
CREATE TABLE authors (
  id INT PRIMARY KEY,
  name VARCHAR(200) NOT NULL
);

CREATE TABLE books (
  id INT PRIMARY KEY,
  author_id INT NOT NULL,
  title VARCHAR(250) NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  CONSTRAINT fk_books_author
    FOREIGN KEY (author_id) REFERENCES authors(id)
);
\`\`\`

This schema teaches primary keys, foreign keys, required fields, and numeric data types. After that, add orders, order items, users, indexes, and migrations.

A useful query practice is to answer product questions:

\`\`\`text
SELECT
  authors.name,
  COUNT(books.id) AS book_count
FROM authors
JOIN books ON books.author_id = authors.id
GROUP BY authors.name
ORDER BY book_count DESC;
\`\`\`

This teaches joins, grouping, aggregation, and sorting in one realistic query.

After that, improve the schema with real application rules:

\`\`\`text
CREATE TABLE users (
  id INT PRIMARY KEY,
  email VARCHAR(320) NOT NULL UNIQUE,
  created_at TIMESTAMP NOT NULL
);

CREATE TABLE orders (
  id INT PRIMARY KEY,
  user_id INT NOT NULL,
  status VARCHAR(30) NOT NULL,
  total_amount DECIMAL(10, 2) NOT NULL,
  created_at TIMESTAMP NOT NULL,
  CONSTRAINT fk_orders_user
    FOREIGN KEY (user_id) REFERENCES users(id)
);
\`\`\`

This adds uniqueness, ownership, status, money fields, and timestamps. From here, practice questions that force better database thinking:

- Can one email be used by two users?
- What statuses are valid for an order?
- Should an order total be recalculated every time or stored after checkout?
- What happens if payment succeeds but order update fails?
- Which queries need indexes because users open them frequently?

For indexes, start from access patterns instead of guessing:

\`\`\`text
Access pattern:
Show a user's newest orders.

Useful index:
CREATE INDEX idx_orders_user_created
ON orders (user_id, created_at);
\`\`\`

For transactions, practice multi-step operations explicitly:

\`\`\`text
BEGIN;
  INSERT INTO orders (...);
  INSERT INTO order_items (...);
  UPDATE inventory SET quantity = quantity - 1 WHERE book_id = ...;
COMMIT;
\`\`\`

If any step fails, the whole operation should roll back. This is the kind of database behavior that protects real products from inconsistent data.

## Common mistakes

- **Designing tables from UI screens only.** The data model should reflect the domain, not only the current page layout.
- **Skipping constraints.** Application validation is not enough. The database should protect critical invariants too.
- **Adding indexes blindly.** Too many indexes slow writes and increase maintenance cost.
- **Ignoring transactions.** Multi-step updates can leave inconsistent data if one step fails.
- **Running unsafe migrations.** Schema changes should be reviewed, tested, and reversible when possible.
- **Not reading query plans.** Without query plans, performance tuning becomes guesswork.

## Best practices

- Learn SQL directly, even if you use an ORM.
- Model relationships explicitly with foreign keys.
- Use constraints for data that must always be valid.
- Create indexes based on real queries.
- Learn how to read \`EXPLAIN\` or query plans.
- Use transactions for multi-step changes.
- Keep migrations small and reviewable.
- Back up important data before risky changes.
- Monitor slow queries, connection count, and storage growth.

For migrations, use a conservative workflow:

- Keep each migration focused on one schema change.
- Test it on a local or staging database with realistic row counts.
- Avoid long locks on large tables when possible.
- Separate additive changes from destructive changes.
- Deploy application code in a way that supports both old and new schema during transition.
- Prepare rollback or forward-fix steps before touching production data.

This is especially important for columns, indexes, and constraints on large tables. A migration that is harmless on a tiny development database can still be risky when production has millions of rows.

## When to use and when to avoid

Use this roadmap if you build backend systems, admin tools, reporting features, mobile backends, or any application that stores structured data. It is useful even when an ORM hides SQL because the database still decides performance and consistency.

Avoid jumping too early into advanced topics such as sharding, distributed databases, or complex replication. Learn schema design, SQL, indexes, and transactions first.

## Summary

Database knowledge makes application code safer and more predictable.

- Start with relational modeling and SQL basics.
- Use constraints to protect data quality.
- Learn joins, aggregation, and query plans.
- Add indexes based on access patterns.
- Understand transactions before handling money or inventory.
- Treat migrations and backups as part of development, not only operations.`,contentVi:`# Lộ trình học database cho lập trình viên ứng dụng

Lập trình viên ứng dụng không cần trở thành database administrator ngay lập tức, nhưng cần nền tảng database vững. Nhiều bug trong ứng dụng đến từ data modeling yếu, thiếu constraint, query chậm, migration không an toàn hoặc hiểu sai transaction.

Một roadmap database thực tế giúp developer đi từ SQL cơ bản đến thiết kế schema, đọc query plan, xử lý transaction và vận hành ứng dụng có database một cách có trách nhiệm.

## Chủ đề này giải quyết vấn đề gì?

Phần lớn ứng dụng phụ thuộc vào dữ liệu. Nếu tầng database không được hiểu rõ, ứng dụng có thể trông ổn lúc đầu nhưng lỗi khi dữ liệu tăng hoặc có nhiều user đồng thời.

Các vấn đề thường gặp gồm:

- Record bị trùng vì thiếu constraint.
- Trang tải chậm vì query không dùng index.
- Số dư sai vì hiểu sai transaction.
- Deployment lỗi vì migration không an toàn.
- Code khó hiểu vì data model không khớp domain.

Học database có hệ thống giúp ngăn các vấn đề này sớm hơn.

## Các ý tưởng cốt lõi

Ý tưởng đầu tiên là **relational modeling**. Table nên đại diện cho entity và relationship thật. Primary key, foreign key, unique constraint và not-null constraint giúp bảo vệ chất lượng dữ liệu.

Ý tưởng thứ hai là **SQL fluency**. Developer nên biết \`SELECT\`, \`JOIN\`, \`WHERE\`, \`GROUP BY\`, \`ORDER BY\`, aggregation, insert, update và delete.

Ý tưởng thứ ba là **indexing**. Index tăng tốc đọc nhưng tốn storage và làm write nặng hơn. Index nên được thiết kế theo query pattern thật.

Ý tưởng thứ tư là **transaction**. Transaction bảo vệ tính nhất quán khi nhiều thao tác phải cùng thành công hoặc cùng thất bại.

Ý tưởng thứ năm là **nhận thức vận hành**. Backup, migration, monitoring và connection pooling trở nên quan trọng khi app có user thật.

## Ví dụ thực tế

Một project học nhỏ có thể là database cho bookstore:

\`\`\`text
CREATE TABLE authors (
  id INT PRIMARY KEY,
  name VARCHAR(200) NOT NULL
);

CREATE TABLE books (
  id INT PRIMARY KEY,
  author_id INT NOT NULL,
  title VARCHAR(250) NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  CONSTRAINT fk_books_author
    FOREIGN KEY (author_id) REFERENCES authors(id)
);
\`\`\`

Schema này dạy primary key, foreign key, required field và kiểu dữ liệu số. Sau đó có thể thêm orders, order items, users, indexes và migrations.

Một bài tập query hữu ích là trả lời câu hỏi sản phẩm:

\`\`\`text
SELECT
  authors.name,
  COUNT(books.id) AS book_count
FROM authors
JOIN books ON books.author_id = authors.id
GROUP BY authors.name
ORDER BY book_count DESC;
\`\`\`

Query này luyện join, grouping, aggregation và sorting trong một ví dụ thực tế.

Sau đó, hãy cải thiện schema bằng rule gần ứng dụng thật hơn:

\`\`\`text
CREATE TABLE users (
  id INT PRIMARY KEY,
  email VARCHAR(320) NOT NULL UNIQUE,
  created_at TIMESTAMP NOT NULL
);

CREATE TABLE orders (
  id INT PRIMARY KEY,
  user_id INT NOT NULL,
  status VARCHAR(30) NOT NULL,
  total_amount DECIMAL(10, 2) NOT NULL,
  created_at TIMESTAMP NOT NULL,
  CONSTRAINT fk_orders_user
    FOREIGN KEY (user_id) REFERENCES users(id)
);
\`\`\`

Phần này thêm uniqueness, ownership, status, money field và timestamp. Từ đây, hãy luyện những câu hỏi buộc bạn suy nghĩ database tốt hơn:

- Một email có được dùng bởi hai user không?
- Order có những status hợp lệ nào?
- Tổng tiền order nên tính lại mỗi lần hay lưu lại sau checkout?
- Điều gì xảy ra nếu payment thành công nhưng update order thất bại?
- Query nào cần index vì user mở thường xuyên?

Với index, hãy bắt đầu từ access pattern thay vì đoán:

\`\`\`text
Access pattern:
Hiển thị các order mới nhất của một user.

Useful index:
CREATE INDEX idx_orders_user_created
ON orders (user_id, created_at);
\`\`\`

Với transaction, hãy luyện operation nhiều bước một cách rõ ràng:

\`\`\`text
BEGIN;
  INSERT INTO orders (...);
  INSERT INTO order_items (...);
  UPDATE inventory SET quantity = quantity - 1 WHERE book_id = ...;
COMMIT;
\`\`\`

Nếu bất kỳ bước nào lỗi, toàn bộ operation nên rollback. Đây là kiểu hành vi database giúp sản phẩm thật tránh dữ liệu không nhất quán.

## Lỗi thường gặp

- **Thiết kế table chỉ theo màn hình UI.** Data model nên phản ánh domain, không chỉ layout hiện tại.
- **Bỏ qua constraint.** Validation ở application là chưa đủ. Database cũng nên bảo vệ invariant quan trọng.
- **Thêm index mù quáng.** Quá nhiều index làm write chậm hơn và tăng chi phí bảo trì.
- **Không hiểu transaction.** Update nhiều bước có thể để lại dữ liệu không nhất quán nếu một bước lỗi.
- **Chạy migration không an toàn.** Schema change nên được review, test và có khả năng rollback khi có thể.
- **Không đọc query plan.** Không có query plan thì tuning hiệu năng gần như là đoán.

## Best practices

- Học SQL trực tiếp, kể cả khi dùng ORM.
- Mô hình hóa relationship rõ ràng bằng foreign key.
- Dùng constraint cho dữ liệu bắt buộc đúng.
- Tạo index dựa trên query thật.
- Học cách đọc \`EXPLAIN\` hoặc query plan.
- Dùng transaction cho thay đổi nhiều bước.
- Giữ migration nhỏ và dễ review.
- Backup dữ liệu quan trọng trước thay đổi rủi ro.
- Theo dõi slow query, số connection và storage growth.

Với migration, nên dùng workflow thận trọng:

- Giữ mỗi migration tập trung vào một thay đổi schema.
- Test trên local hoặc staging database với số dòng gần thực tế.
- Tránh lock lâu trên bảng lớn khi có thể.
- Tách thay đổi thêm mới khỏi thay đổi phá hủy dữ liệu.
- Deploy application code theo cách hỗ trợ cả schema cũ và mới trong giai đoạn chuyển tiếp.
- Chuẩn bị rollback hoặc forward-fix trước khi chạm dữ liệu production.

Điều này đặc biệt quan trọng với column, index và constraint trên bảng lớn. Một migration chạy nhẹ ở development database nhỏ vẫn có thể rủi ro khi production có hàng triệu dòng.

## Khi nào nên dùng và khi nào nên tránh

Dùng roadmap này nếu bạn xây backend system, admin tool, reporting feature, mobile backend hoặc bất kỳ ứng dụng nào lưu dữ liệu có cấu trúc. Nó vẫn hữu ích khi ORM che SQL vì database vẫn quyết định performance và consistency.

Tránh nhảy quá sớm vào chủ đề nâng cao như sharding, distributed database hoặc replication phức tạp. Hãy học schema design, SQL, index và transaction trước.

## Tóm tắt

Kiến thức database giúp application code an toàn và dễ dự đoán hơn.

- Bắt đầu với relational modeling và SQL cơ bản.
- Dùng constraint để bảo vệ chất lượng dữ liệu.
- Học join, aggregation và query plan.
- Thêm index theo access pattern.
- Hiểu transaction trước khi xử lý tiền hoặc tồn kho.
- Xem migration và backup là một phần của development, không chỉ operations.`,category:"roadmap",tags:["Database","SQL","Roadmap","Backend"],date:"2026-05-25",readTime:"8 min",readTimeVi:"8 phút"},MS={id:"mobile-developer-roadmap",title:"Mobile Developer Roadmap for Cross-Platform Apps",titleVi:"Lộ trình Mobile Developer cho ứng dụng cross-platform",excerpt:"A path covering UI, state, storage, APIs, testing, releases, and store deployment.",excerptVi:"Lộ trình gồm UI, state, storage, API, testing, release và triển khai store.",content:`# Mobile Developer Roadmap for Cross-Platform Apps

Cross-platform mobile development is attractive because one codebase can reach both Android and iOS. Tools such as Flutter and React Native make this practical, but mobile development is still more than drawing screens. A useful mobile app must handle navigation, local storage, API failures, permissions, offline behavior, performance, and release processes.

A good roadmap helps you learn these topics in the right order instead of jumping directly from UI tutorials to app store deployment.

## What problem does this solve?

Mobile learning can feel confusing because it mixes several concerns at once. You need UI knowledge, platform behavior, network handling, device APIs, state management, testing, build signing, and store rules.

Without a roadmap, many beginners build screens but get stuck when the app needs real data, authentication, push notifications, offline support, or a release build.

The goal of this roadmap is to build practical capability step by step: first UI, then state and data, then reliability, then release.

## Core concepts

The first concept is **platform awareness**. Even with cross-platform tools, Android and iOS have different permission models, navigation expectations, build processes, and store requirements.

The second concept is **state management**. A mobile app has UI state, server state, cached state, and sometimes offline state. Keeping these separate makes the app easier to debug.

The third concept is **resilience**. Mobile networks are unstable. A good app handles loading, retry, timeout, empty state, and partial failure gracefully.

The fourth concept is **release discipline**. A mobile app is not shipped by pushing code to a server. You need versioning, signing, store metadata, review processes, and rollback planning.

## Practical example

A practical learning path can be organized by projects:

\`\`\`text
Stage 1: UI fundamentals
- Build a profile screen and settings screen.
- Practice responsive layout and theming.

Stage 2: Navigation and state
- Build a notes app with list, detail, create, edit, and delete flows.

Stage 3: API integration
- Build a weather or product app that handles loading, error, and retry.

Stage 4: Local storage
- Add saved items, recent searches, or offline drafts.

Stage 5: Release readiness
- Add app icon, permissions, build signing, and store screenshots.
\`\`\`

This sequence matters. A release-ready app requires more than attractive UI. It needs predictable behavior when the device, network, or API is not ideal.

After the first few projects, start organizing the code like a real application instead of putting everything in screen files:

\`\`\`text
lib/
  features/
    auth/
    notes/
    settings/
  shared/
    api/
    storage/
    theme/
    widgets/
\`\`\`

The exact folders depend on the framework, but the direction matters: screens should not own API details, token storage, validation rules, and formatting logic all at once.

For React Native, a small API boundary might look like this:

\`\`\`ts
export interface NotesApi {
  getNotes(): Promise<NoteDto[]>;
  createNote(request: CreateNoteRequest): Promise<NoteDto>;
}
\`\`\`

The same idea applies in Flutter with Dart: keep the contract small, then let the UI depend on a use case or repository instead of directly constructing HTTP requests inside a button handler.

## Common mistakes

- **Learning only UI widgets.** UI is important, but real apps also need state, networking, storage, and release flow.
- **Ignoring platform differences.** Cross-platform does not mean platform details disappear.
- **Putting all state in one place.** UI state, API cache, and persisted data should not be treated the same.
- **Skipping error states.** Mobile users often have weak networks. Failure handling is part of the product.
- **Testing only on one screen size.** Phones differ in size, density, safe areas, and keyboard behavior.
- **Waiting too long to create a release build.** Build signing and store setup can reveal issues late.

## Best practices

- Learn layout, navigation, forms, and theming before complex architecture.
- Build small apps that include real flows, not only static screens.
- Handle loading, empty, error, and offline states explicitly.
- Keep API clients separate from UI components.
- Use local storage intentionally for preferences, drafts, tokens, or cached data.
- Test on both Android and iOS when possible.
- Learn release basics early: icons, permissions, signing, version codes, screenshots.
- Keep app permissions minimal and explain why they are needed.

For app quality, practice these scenarios deliberately:

- Launch the app with no network.
- Start a request, then navigate away.
- Rotate the screen or change text scaling.
- Open the keyboard on a small device.
- Kill and reopen the app after saving a draft.
- Try an expired token or unauthorized API response.

These cases reveal whether the app is only a demo or something closer to a real product.

## When to use and when to avoid

Use cross-platform development when the app needs similar behavior on Android and iOS, the team wants to share most code, and platform-specific features are not the main product differentiator.

Avoid assuming cross-platform is always cheaper. Apps that depend heavily on native SDKs, background services, Bluetooth, advanced camera features, or platform-specific UI may require more native work.

## Summary

Mobile development becomes manageable when the learning path follows real app needs.

- Start with UI and navigation.
- Add state, APIs, and local storage.
- Treat network failure as normal.
- Learn platform differences.
- Build release-ready habits early.
- Use cross-platform tools pragmatically, not blindly.`,contentVi:`# Lộ trình Mobile Developer cho ứng dụng cross-platform

Phát triển mobile cross-platform hấp dẫn vì một codebase có thể chạy trên cả Android và iOS. Các công cụ như Flutter hoặc React Native làm điều này thực tế hơn, nhưng mobile development không chỉ là vẽ màn hình. Một ứng dụng mobile hữu ích cần xử lý navigation, local storage, lỗi API, permission, offline behavior, performance và quy trình release.

Một roadmap tốt giúp bạn học các chủ đề này đúng thứ tự thay vì nhảy thẳng từ tutorial UI sang deploy lên store.

## Chủ đề này giải quyết vấn đề gì?

Việc học mobile dễ gây rối vì nó trộn nhiều mối quan tâm cùng lúc. Bạn cần kiến thức UI, hành vi platform, network, device API, state management, testing, build signing và quy định store.

Nếu không có roadmap, nhiều người mới có thể dựng màn hình nhưng bị kẹt khi app cần dữ liệu thật, authentication, push notification, offline support hoặc release build.

Mục tiêu của roadmap này là xây năng lực thực tế từng bước: đầu tiên là UI, sau đó state và data, tiếp theo là độ tin cậy, cuối cùng là release.

## Các ý tưởng cốt lõi

Ý tưởng đầu tiên là **nhận thức về platform**. Dù dùng công cụ cross-platform, Android và iOS vẫn khác nhau về permission, navigation expectation, build process và store requirement.

Ý tưởng thứ hai là **state management**. Một mobile app có UI state, server state, cached state và đôi khi offline state. Tách rõ các loại state này giúp app dễ debug hơn.

Ý tưởng thứ ba là **resilience**. Mạng mobile không ổn định. Một app tốt xử lý loading, retry, timeout, empty state và partial failure một cách rõ ràng.

Ý tưởng thứ tư là **kỷ luật release**. Mobile app không được phát hành bằng cách push code lên server. Bạn cần versioning, signing, store metadata, review process và kế hoạch rollback.

## Ví dụ thực tế

Một lộ trình học thực tế có thể tổ chức theo dự án:

\`\`\`text
Giai đoạn 1: UI fundamentals
- Xây màn hình profile và settings.
- Luyện layout responsive và theming.

Giai đoạn 2: Navigation và state
- Xây notes app có list, detail, create, edit, delete.

Giai đoạn 3: API integration
- Xây weather app hoặc product app có loading, error, retry.

Giai đoạn 4: Local storage
- Thêm saved items, recent searches hoặc offline drafts.

Giai đoạn 5: Release readiness
- Thêm app icon, permissions, build signing và store screenshots.
\`\`\`

Thứ tự này quan trọng. Một app sẵn sàng release cần nhiều hơn UI đẹp. Nó cần hành vi dự đoán được khi thiết bị, mạng hoặc API không lý tưởng.

Sau vài project đầu tiên, hãy bắt đầu tổ chức code giống ứng dụng thật thay vì nhét mọi thứ vào screen file:

\`\`\`text
lib/
  features/
    auth/
    notes/
    settings/
  shared/
    api/
    storage/
    theme/
    widgets/
\`\`\`

Tên thư mục có thể thay đổi theo framework, nhưng hướng phụ thuộc mới là phần quan trọng: screen không nên sở hữu API detail, token storage, validation rule và formatting logic cùng lúc.

Với React Native, một boundary API nhỏ có thể được mô tả như sau:

\`\`\`ts
export interface NotesApi {
  getNotes(): Promise<NoteDto[]>;
  createNote(request: CreateNoteRequest): Promise<NoteDto>;
}
\`\`\`

Ý tưởng tương tự áp dụng cho Flutter với Dart: giữ contract nhỏ, sau đó để UI phụ thuộc vào use case hoặc repository thay vì tự tạo HTTP request trong button handler.

## Lỗi thường gặp

- **Chỉ học UI widget.** UI quan trọng, nhưng app thật còn cần state, networking, storage và release flow.
- **Bỏ qua khác biệt platform.** Cross-platform không có nghĩa là chi tiết platform biến mất.
- **Đưa mọi state vào một chỗ.** UI state, API cache và persisted data không nên được xử lý giống nhau.
- **Bỏ qua error state.** Người dùng mobile thường gặp mạng yếu. Xử lý lỗi là một phần của sản phẩm.
- **Chỉ test trên một kích thước màn hình.** Điện thoại khác nhau về size, density, safe area và keyboard behavior.
- **Đợi quá lâu mới tạo release build.** Build signing và store setup có thể phát hiện vấn đề muộn.

## Best practices

- Học layout, navigation, form và theming trước kiến trúc phức tạp.
- Xây app nhỏ có flow thật, không chỉ màn hình tĩnh.
- Xử lý loading, empty, error và offline state rõ ràng.
- Tách API client khỏi UI component.
- Dùng local storage có chủ đích cho preferences, drafts, token hoặc cached data.
- Test trên cả Android và iOS khi có thể.
- Học release basics sớm: icon, permission, signing, version code, screenshot.
- Giữ permission tối thiểu và giải thích vì sao cần.

Để nâng chất lượng app, hãy luyện các tình huống này có chủ đích:

- Mở app khi không có mạng.
- Bắt đầu request rồi chuyển màn hình.
- Xoay màn hình hoặc thay đổi text scaling.
- Mở keyboard trên thiết bị nhỏ.
- Kill app rồi mở lại sau khi lưu draft.
- Thử token hết hạn hoặc API trả unauthorized.

Những case này cho thấy app chỉ là demo hay đã gần với sản phẩm thật.

## Khi nào nên dùng và khi nào nên tránh

Dùng cross-platform khi app cần hành vi tương tự trên Android và iOS, team muốn chia sẻ phần lớn code và tính năng native đặc thù không phải điểm khác biệt chính.

Tránh nghĩ cross-platform luôn rẻ hơn. App phụ thuộc nặng vào native SDK, background service, Bluetooth, camera nâng cao hoặc UI đặc thù từng platform có thể cần nhiều native work.

## Tóm tắt

Mobile development dễ quản lý hơn khi lộ trình học đi theo nhu cầu thật của app.

- Bắt đầu với UI và navigation.
- Thêm state, API và local storage.
- Xem lỗi mạng là điều bình thường.
- Học khác biệt platform.
- Xây thói quen release sớm.
- Dùng cross-platform tool một cách thực tế, không máy móc.`,category:"roadmap",tags:["Mobile","Flutter","Roadmap","Career"],date:"2026-05-23",readTime:"8 min",readTimeVi:"8 phút"},Uy=(e,t)=>({...e,title:t==="vi"?e.titleVi??e.title:e.title,excerpt:t==="vi"?e.excerptVi??e.excerpt:e.excerpt,content:t==="vi"?e.contentVi??e.content:e.content,readTime:t==="vi"?e.readTimeVi??e.readTime:e.readTime}),Ds=[hS,dS,pS,gS,mS,fS,yS,vS,bS,wS,xS,kS,TS,CS,SS,PS,NS,AS,IS,ES,jS,RS,LS,MS,nS,rS,iS,oS,aS,sS,cS,lS,uS],DS="https://script.google.com/macros/s/AKfycbyREb0-NhaBcMrhp6CXtA2OsKcXFJalYhvlvhN7MxmXkjU-gA1F0Wd4h3J3bLF2M-ZO8w/exec";function _y(e){const t=new URL(DS);return Object.entries(e).forEach(([n,r])=>t.searchParams.set(n,r)),t.searchParams.set("t",String(Date.now())),t.toString()}function qS(e){return typeof Image>"u"?Promise.resolve():new Promise(t=>{const n=new Image;n.onload=()=>t(),n.onerror=()=>t(),n.src=_y({action:"collect",slug:e})})}function Fy(e){return typeof window>"u"||typeof document>"u"?Promise.resolve(0):new Promise(t=>{const n=`__views_cb_${Math.random().toString(36).slice(2)}`,r=_y({action:"views",slug:e,callback:n}),i=window;i[n]=s=>{try{t(Number((s==null?void 0:s.views)??0))}finally{delete i[n],o.remove()}};const o=document.createElement("script");o.src=r,o.onerror=()=>{delete i[n],o.remove(),t(0)},document.body.appendChild(o)})}const OS=3e4;let Yn=null,Gl=0;const yp=e=>e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/đ/g,"d").replace(/Đ/g,"d").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,""),vp=async(e=!1)=>{const t=Date.now();if(!e&&Yn&&t-Gl<OS)return Yn;const n=await Promise.all(Ds.map(async r=>[r.id,await Fy(r.id)]));return Yn=Object.fromEntries(n),Gl=t,Yn},US=(e,t)=>Number(e[t]??0),Kl=(e={})=>Ds.map(t=>({...t,viewCount:US(e,t.id)})),_S=(e,t)=>{const n=Ds.filter(r=>r.category===e.id).length;return{id:e.id,name:e.name,slug:e.id,description:e.description,color:e.color,sortOrder:t+1,isActive:!0,postCount:n}},FS=()=>{const e=new Map;return Ds.forEach(t=>{t.tags.forEach(n=>e.set(n,(e.get(n)??0)+1))}),Array.from(e.entries()).sort(([t],[n])=>t.localeCompare(n)).map(([t,n])=>({id:yp(t),name:t,slug:yp(t),postCount:n}))},By=(e,t)=>{var n;return{id:e.id,title:t==="vi"?e.titleVi??e.title:e.title,titleVi:e.titleVi??void 0,slug:e.id,date:e.date,category:e.category,excerpt:t==="vi"?e.excerptVi??e.excerpt:e.excerpt,excerptVi:e.excerptVi??void 0,categorySlug:e.category,categoryName:((n=Ls.find(r=>r.id===e.category))==null?void 0:n.name)??e.category,tags:e.tags,coverImageUrl:void 0,featured:!!e.featured,readTime:t==="vi"?e.readTimeVi??e.readTime:e.readTime,readTimeVi:e.readTimeVi??void 0,readTimeMinutes:Number.parseInt(e.readTime,10)||Number.parseInt(e.readTimeVi??e.readTime,10)||5,viewCount:e.viewCount,publishedAt:e.date,createdAt:e.date,updatedAt:e.date,status:"Published"}},BS=(e,t)=>({...By(e,t),content:t==="vi"?e.contentVi??e.content:e.content,contentVi:e.contentVi??void 0}),VS=(e,t)=>Kl(t).map(n=>By(n,e)),kn={hasBackend:!1,getCachedPost(e){const t=Kl(Yn??{}).find(n=>n.id===e);return t?{...t,...Uy(t,"en")}:void 0},async getPosts(e,t={}){const n=await vp(),r=VS(e,n).filter(i=>t.featured===void 0?!0:i.featured===t.featured);return r.slice(0,t.pageSize??r.length)},async getPost(e,t){const n=await vp(),r=Kl(n).find(i=>i.id===e);return r?BS(r,t):null},async incrementView(e){await qS(e);const t=await Fy(e);return Yn={...Yn??{},[e]:t},Gl=Date.now(),{slug:e,viewCount:t}},async getCategories(){return Ls.map(_S)},async getTags(){return FS()}},gh=({className:e,label:t="Loading"})=>a.jsx("div",{className:ut("flex min-h-56 items-center justify-center rounded-2xl border border-border/60 bg-card/70",e),"aria-busy":"true","aria-live":"polite",children:a.jsxs("div",{className:"flex items-center gap-3 text-sm text-muted-foreground",children:[a.jsx(p0,{className:"h-5 w-5 animate-spin text-primary"}),a.jsx("span",{children:t})]})}),zS=()=>{const{t:e,locale:t,language:n}=Ne(),r=qn(),[i,o]=g.useState([]),[s,c]=g.useState(!0),l=u=>Ls.some(h=>h.id===u)?e(`category.${u}`):u;return g.useEffect(()=>{let u=!1;return(async()=>{c(!0);const d=await kn.getPosts(n,{featured:!0,pageSize:3});u||(o(d.slice(0,3)),c(!1))})().catch(()=>{u||c(!1)}),()=>{u=!0}},[n]),a.jsx(xe.section,{className:"border-b border-border/70 py-20 md:py-28",variants:r?void 0:Ms,initial:r?!1:"hidden",whileInView:"visible",viewport:li,children:a.jsxs("div",{className:"container mx-auto px-4",children:[a.jsxs("div",{className:"mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end",children:[a.jsxs("div",{children:[a.jsx("p",{className:"eyebrow mb-4",children:e("home.notes.eyebrow")}),a.jsxs("h2",{className:"text-4xl md:text-6xl",children:[e("home.notes.title1"),a.jsx("br",{}),a.jsx("span",{className:"text-muted-foreground",children:e("home.notes.title2")})]})]}),a.jsxs(be,{to:"/blog",className:"inline-flex items-center gap-2 font-mono text-xs text-primary",children:[e("home.notes.all")," ",a.jsx(Ll,{className:"h-4 w-4"})]})]}),s?a.jsx(gh,{className:"min-h-[28rem]",label:n==="vi"?"Đang tải":"Loading"}):a.jsx(xe.div,{className:"grid gap-4 lg:grid-cols-[1.2fr_.8fr]",variants:r?void 0:si,children:i.map((u,h)=>a.jsxs(xe.article,{variants:r?void 0:ci,className:`group journal-card p-6 md:p-8 ${h===0?"lg:row-span-2":""}`,children:[a.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 border-b border-border/70 pb-5 font-mono text-xs uppercase tracking-[.14em] text-muted-foreground",children:[a.jsxs("span",{className:"text-primary",children:["Note / 0",h+1]}),a.jsx("span",{children:l(u.category)})]}),a.jsx(be,{to:`/blog/${u.id}`,className:"block",children:a.jsx("h3",{className:`mt-8 transition-colors group-hover:text-primary ${h===0?"max-w-2xl text-3xl md:text-5xl":"text-2xl"}`,children:u.title})}),a.jsx("p",{className:`mt-4 leading-relaxed text-muted-foreground ${h===0?"max-w-2xl text-base":"text-sm"}`,children:u.excerpt}),a.jsxs("div",{className:"mt-8 flex flex-wrap items-center gap-5 border-t border-border/70 pt-5 font-mono text-xs text-muted-foreground",children:[a.jsx("span",{children:new Date(u.date).toLocaleDateString(t)}),a.jsxs("span",{className:"flex items-center gap-1.5",children:[a.jsx(Qa,{className:"h-3 w-3"}),u.readTime]}),a.jsxs("span",{className:"flex items-center gap-1.5",children:[a.jsx(Ya,{className:"h-3 w-3"}),(u.viewCount??0).toLocaleString(t)]}),a.jsxs(be,{to:`/blog/${u.id}`,className:"ml-auto flex items-center gap-1.5 text-primary",children:[e("home.notes.read")," ",a.jsx(Ll,{className:"h-3 w-3"})]})]})]},u.id))})]})})},HS=Yu("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function at({className:e,variant:t,...n}){return a.jsx("div",{className:ut(HS({variant:t}),e),...n})}const WS=()=>{const{t:e}=Ne(),t=qn(),n=Wl.filter(r=>r.featured).slice(0,3);return a.jsx(xe.section,{className:"border-b border-border/70 py-20 md:py-28",variants:t?void 0:Ms,initial:t?!1:"hidden",whileInView:"visible",viewport:li,children:a.jsxs("div",{className:"container mx-auto px-4",children:[a.jsxs("div",{className:"mb-12 grid gap-6 md:grid-cols-[1fr_.7fr] md:items-end",children:[a.jsxs("div",{children:[a.jsx("p",{className:"eyebrow mb-4",children:e("home.work.eyebrow")}),a.jsxs("h2",{className:"text-4xl md:text-6xl",children:[e("home.work.title1"),a.jsx("br",{}),a.jsx("span",{className:"text-muted-foreground",children:e("home.work.title2")})]})]}),a.jsxs("div",{className:"md:justify-self-end",children:[a.jsx("p",{className:"mb-4 max-w-md text-sm leading-relaxed text-muted-foreground",children:e("home.work.desc")}),a.jsxs(be,{to:"/projects",className:"inline-flex items-center gap-2 font-mono text-xs text-primary",children:[e("home.work.archive")," ",a.jsx(Ll,{className:"h-4 w-4"})]})]})]}),a.jsx(xe.div,{className:"space-y-4",variants:t?void 0:si,children:n.map((r,i)=>a.jsxs(xe.article,{variants:t?void 0:ci,className:"group journal-card grid gap-0 transition-transform duration-300 hover:-translate-y-1 md:grid-cols-[110px_1fr_1fr_auto]",children:[a.jsxs("div",{className:"flex items-center border-b border-border/70 p-5 font-mono text-4xl text-primary/70 md:border-b-0 md:border-r",children:["0",i+1]}),a.jsxs("div",{className:"border-b border-border/70 p-5 md:border-b-0 md:border-r md:p-7",children:[a.jsxs("p",{className:"mb-2 font-mono text-xs uppercase tracking-[.16em] text-muted-foreground",children:[e("home.work.case")," / ",r.id]}),a.jsx("h3",{className:"text-xl transition-colors group-hover:text-primary md:text-2xl",children:r.title}),a.jsx("p",{className:"mt-3 text-sm leading-relaxed text-muted-foreground",children:r.description})]}),a.jsxs("div",{className:"border-b border-border/70 p-5 md:border-b-0 md:border-r md:p-7",children:[a.jsx("p",{className:"mb-4 font-mono text-xs uppercase tracking-[.16em] text-muted-foreground",children:e("home.work.tools")}),a.jsx("div",{className:"flex flex-wrap gap-2.5",children:r.technologies.map(o=>a.jsx(at,{variant:"secondary",className:"min-h-8 rounded-md border border-primary/25 bg-primary/[.08] px-3 py-1.5 font-mono text-[11px] font-semibold tracking-[.04em] text-foreground shadow-sm",children:o},o))})]}),a.jsxs("div",{className:"flex items-center gap-2 p-5 md:flex-col md:justify-center",children:[r.github&&a.jsx("a",{href:r.github,target:"_blank",rel:"noreferrer","aria-label":"Source code",className:"rounded-lg border border-border p-3 text-muted-foreground transition-colors hover:border-primary hover:text-primary",children:a.jsx(_r,{className:"h-4 w-4"})}),r.demo&&a.jsx("a",{href:r.demo,target:"_blank",rel:"noreferrer","aria-label":"Live demo",className:"rounded-lg border border-border p-3 text-muted-foreground transition-colors hover:border-primary hover:text-primary",children:a.jsx($t,{className:"h-4 w-4"})})]})]},r.id))})]})})},GS=()=>{const{t:e}=Ne(),t=qn();return a.jsxs(or,{children:[a.jsx(ZC,{}),a.jsx(WS,{}),a.jsx(zS,{}),a.jsx(tS,{}),a.jsx(xe.section,{className:"py-20 md:py-28",variants:t?void 0:Ms,initial:t?!1:"hidden",whileInView:"visible",viewport:li,children:a.jsx("div",{className:"container mx-auto px-4",children:a.jsxs("div",{className:"journal-card grid gap-8 p-7 md:grid-cols-[.45fr_1fr] md:p-12",children:[a.jsxs("div",{children:[a.jsx("p",{className:"eyebrow mb-4",children:e("home.principle")}),a.jsx("p",{className:"font-mono text-xs leading-relaxed text-muted-foreground",children:"build → observe → explain → improve"})]}),a.jsx("blockquote",{className:"text-2xl leading-tight md:text-4xl",children:e("home.quote")})]})})})]})},va=g.forwardRef(({className:e,type:t,...n},r)=>a.jsx("input",{type:t,className:ut("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",e),ref:r,...n}));va.displayName="Input";var Sc=0;function KS(){g.useEffect(()=>{const e=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",e[0]??bp()),document.body.insertAdjacentElement("beforeend",e[1]??bp()),Sc++,()=>{Sc===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(t=>t.remove()),Sc--}},[])}function bp(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}var Pc="focusScope.autoFocusOnMount",Nc="focusScope.autoFocusOnUnmount",wp={bubbles:!1,cancelable:!0},$S="FocusScope",Vy=g.forwardRef((e,t)=>{const{loop:n=!1,trapped:r=!1,onMountAutoFocus:i,onUnmountAutoFocus:o,...s}=e,[c,l]=g.useState(null),u=qt(i),h=qt(o),d=g.useRef(null),p=We(t,y=>l(y)),v=g.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;g.useEffect(()=>{if(r){let y=function(b){if(v.paused||!c)return;const w=b.target;c.contains(w)?d.current=w:ln(d.current,{select:!0})},x=function(b){if(v.paused||!c)return;const w=b.relatedTarget;w!==null&&(c.contains(w)||ln(d.current,{select:!0}))},f=function(b){if(document.activeElement===document.body)for(const T of b)T.removedNodes.length>0&&ln(c)};document.addEventListener("focusin",y),document.addEventListener("focusout",x);const m=new MutationObserver(f);return c&&m.observe(c,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",y),document.removeEventListener("focusout",x),m.disconnect()}}},[r,c,v.paused]),g.useEffect(()=>{if(c){kp.add(v);const y=document.activeElement;if(!c.contains(y)){const f=new CustomEvent(Pc,wp);c.addEventListener(Pc,u),c.dispatchEvent(f),f.defaultPrevented||(QS(eP(zy(c)),{select:!0}),document.activeElement===y&&ln(c))}return()=>{c.removeEventListener(Pc,u),setTimeout(()=>{const f=new CustomEvent(Nc,wp);c.addEventListener(Nc,h),c.dispatchEvent(f),f.defaultPrevented||ln(y??document.body,{select:!0}),c.removeEventListener(Nc,h),kp.remove(v)},0)}}},[c,u,h,v]);const k=g.useCallback(y=>{if(!n&&!r||v.paused)return;const x=y.key==="Tab"&&!y.altKey&&!y.ctrlKey&&!y.metaKey,f=document.activeElement;if(x&&f){const m=y.currentTarget,[b,w]=YS(m);b&&w?!y.shiftKey&&f===w?(y.preventDefault(),n&&ln(b,{select:!0})):y.shiftKey&&f===b&&(y.preventDefault(),n&&ln(w,{select:!0})):f===m&&y.preventDefault()}},[n,r,v.paused]);return a.jsx(Pe.div,{tabIndex:-1,...s,ref:p,onKeyDown:k})});Vy.displayName=$S;function QS(e,{select:t=!1}={}){const n=document.activeElement;for(const r of e)if(ln(r,{select:t}),document.activeElement!==n)return}function YS(e){const t=zy(e),n=xp(t,e),r=xp(t.reverse(),e);return[n,r]}function zy(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const i=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||i?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function xp(e,t){for(const n of e)if(!XS(n,{upTo:t}))return n}function XS(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function JS(e){return e instanceof HTMLInputElement&&"select"in e}function ln(e,{select:t=!1}={}){if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&JS(e)&&t&&e.select()}}var kp=ZS();function ZS(){let e=[];return{add(t){const n=e[0];t!==n&&(n==null||n.pause()),e=Tp(e,t),e.unshift(t)},remove(t){var n;e=Tp(e,t),(n=e[0])==null||n.resume()}}}function Tp(e,t){const n=[...e],r=n.indexOf(t);return r!==-1&&n.splice(r,1),n}function eP(e){return e.filter(t=>t.tagName!=="A")}var tP=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},fr=new WeakMap,ea=new WeakMap,ta={},Ac=0,Hy=function(e){return e&&(e.host||Hy(e.parentNode))},nP=function(e,t){return t.map(function(n){if(e.contains(n))return n;var r=Hy(n);return r&&e.contains(r)?r:(console.error("aria-hidden",n,"in not contained inside",e,". Doing nothing"),null)}).filter(function(n){return!!n})},rP=function(e,t,n,r){var i=nP(t,Array.isArray(e)?e:[e]);ta[n]||(ta[n]=new WeakMap);var o=ta[n],s=[],c=new Set,l=new Set(i),u=function(d){!d||c.has(d)||(c.add(d),u(d.parentNode))};i.forEach(u);var h=function(d){!d||l.has(d)||Array.prototype.forEach.call(d.children,function(p){if(c.has(p))h(p);else try{var v=p.getAttribute(r),k=v!==null&&v!=="false",y=(fr.get(p)||0)+1,x=(o.get(p)||0)+1;fr.set(p,y),o.set(p,x),s.push(p),y===1&&k&&ea.set(p,!0),x===1&&p.setAttribute(n,"true"),k||p.setAttribute(r,"true")}catch(f){console.error("aria-hidden: cannot operate on ",p,f)}})};return h(t),c.clear(),Ac++,function(){s.forEach(function(d){var p=fr.get(d)-1,v=o.get(d)-1;fr.set(d,p),o.set(d,v),p||(ea.has(d)||d.removeAttribute(r),ea.delete(d)),v||d.removeAttribute(n)}),Ac--,Ac||(fr=new WeakMap,fr=new WeakMap,ea=new WeakMap,ta={})}},iP=function(e,t,n){n===void 0&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),i=tP(e);return i?(r.push.apply(r,Array.from(i.querySelectorAll("[aria-live]"))),rP(r,i,n,"aria-hidden")):function(){return null}},jt=function(){return jt=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},jt.apply(this,arguments)};function Wy(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function oP(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var ba="right-scroll-bar-position",wa="width-before-scroll-bar",aP="with-scroll-bars-hidden",sP="--removed-body-scroll-bar-size";function Ic(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function cP(e,t){var n=g.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(r){var i=n.value;i!==r&&(n.value=r,n.callback(r,i))}}}})[0];return n.callback=t,n.facade}var lP=typeof window<"u"?g.useLayoutEffect:g.useEffect,Cp=new WeakMap;function uP(e,t){var n=cP(null,function(r){return e.forEach(function(i){return Ic(i,r)})});return lP(function(){var r=Cp.get(n);if(r){var i=new Set(r),o=new Set(e),s=n.current;i.forEach(function(c){o.has(c)||Ic(c,null)}),o.forEach(function(c){i.has(c)||Ic(c,s)})}Cp.set(n,e)},[e]),n}function hP(e){return e}function dP(e,t){t===void 0&&(t=hP);var n=[],r=!1,i={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(o){var s=t(o,r);return n.push(s),function(){n=n.filter(function(c){return c!==s})}},assignSyncMedium:function(o){for(r=!0;n.length;){var s=n;n=[],s.forEach(o)}n={push:function(c){return o(c)},filter:function(){return n}}},assignMedium:function(o){r=!0;var s=[];if(n.length){var c=n;n=[],c.forEach(o),s=n}var l=function(){var h=s;s=[],h.forEach(o)},u=function(){return Promise.resolve().then(l)};u(),n={push:function(h){s.push(h),u()},filter:function(h){return s=s.filter(h),n}}}};return i}function pP(e){e===void 0&&(e={});var t=dP(null);return t.options=jt({async:!0,ssr:!1},e),t}var Gy=function(e){var t=e.sideCar,n=Wy(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw new Error("Sidecar medium not found");return g.createElement(r,jt({},n))};Gy.isSideCarExport=!0;function gP(e,t){return e.useMedium(t),Gy}var Ky=pP(),Ec=function(){},qs=g.forwardRef(function(e,t){var n=g.useRef(null),r=g.useState({onScrollCapture:Ec,onWheelCapture:Ec,onTouchMoveCapture:Ec}),i=r[0],o=r[1],s=e.forwardProps,c=e.children,l=e.className,u=e.removeScrollBar,h=e.enabled,d=e.shards,p=e.sideCar,v=e.noRelative,k=e.noIsolation,y=e.inert,x=e.allowPinchZoom,f=e.as,m=f===void 0?"div":f,b=e.gapMode,w=Wy(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),T=p,S=uP([n,t]),P=jt(jt({},w),i);return g.createElement(g.Fragment,null,h&&g.createElement(T,{sideCar:Ky,removeScrollBar:u,shards:d,noRelative:v,noIsolation:k,inert:y,setCallbacks:o,allowPinchZoom:!!x,lockRef:n,gapMode:b}),s?g.cloneElement(g.Children.only(c),jt(jt({},P),{ref:S})):g.createElement(m,jt({},P,{className:l,ref:S}),c))});qs.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};qs.classNames={fullWidth:wa,zeroRight:ba};var mP=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function fP(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=mP();return t&&e.setAttribute("nonce",t),e}function yP(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function vP(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var bP=function(){var e=0,t=null;return{add:function(n){e==0&&(t=fP())&&(yP(t,n),vP(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},wP=function(){var e=bP();return function(t,n){g.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},$y=function(){var e=wP(),t=function(n){var r=n.styles,i=n.dynamic;return e(r,i),null};return t},xP={left:0,top:0,right:0,gap:0},jc=function(e){return parseInt(e||"",10)||0},kP=function(e){var t=window.getComputedStyle(document.body),n=t[e==="padding"?"paddingLeft":"marginLeft"],r=t[e==="padding"?"paddingTop":"marginTop"],i=t[e==="padding"?"paddingRight":"marginRight"];return[jc(n),jc(r),jc(i)]},TP=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return xP;var t=kP(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},CP=$y(),Vr="data-scroll-locked",SP=function(e,t,n,r){var i=e.left,o=e.top,s=e.right,c=e.gap;return n===void 0&&(n="margin"),`
  .`.concat(aP,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(c,"px ").concat(r,`;
  }
  body[`).concat(Vr,`] {
    overflow: hidden `).concat(r,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(r,";"),n==="margin"&&`
    padding-left: `.concat(i,`px;
    padding-top: `).concat(o,`px;
    padding-right: `).concat(s,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(c,"px ").concat(r,`;
    `),n==="padding"&&"padding-right: ".concat(c,"px ").concat(r,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(ba,` {
    right: `).concat(c,"px ").concat(r,`;
  }
  
  .`).concat(wa,` {
    margin-right: `).concat(c,"px ").concat(r,`;
  }
  
  .`).concat(ba," .").concat(ba,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(wa," .").concat(wa,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body[`).concat(Vr,`] {
    `).concat(sP,": ").concat(c,`px;
  }
`)},Sp=function(){var e=parseInt(document.body.getAttribute(Vr)||"0",10);return isFinite(e)?e:0},PP=function(){g.useEffect(function(){return document.body.setAttribute(Vr,(Sp()+1).toString()),function(){var e=Sp()-1;e<=0?document.body.removeAttribute(Vr):document.body.setAttribute(Vr,e.toString())}},[])},NP=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,i=r===void 0?"margin":r;PP();var o=g.useMemo(function(){return TP(i)},[i]);return g.createElement(CP,{styles:SP(o,!t,i,n?"":"!important")})},$l=!1;if(typeof window<"u")try{var na=Object.defineProperty({},"passive",{get:function(){return $l=!0,!0}});window.addEventListener("test",na,na),window.removeEventListener("test",na,na)}catch{$l=!1}var yr=$l?{passive:!1}:!1,AP=function(e){return e.tagName==="TEXTAREA"},Qy=function(e,t){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return n[t]!=="hidden"&&!(n.overflowY===n.overflowX&&!AP(e)&&n[t]==="visible")},IP=function(e){return Qy(e,"overflowY")},EP=function(e){return Qy(e,"overflowX")},Pp=function(e,t){var n=t.ownerDocument,r=t;do{typeof ShadowRoot<"u"&&r instanceof ShadowRoot&&(r=r.host);var i=Yy(e,r);if(i){var o=Xy(e,r),s=o[1],c=o[2];if(s>c)return!0}r=r.parentNode}while(r&&r!==n.body);return!1},jP=function(e){var t=e.scrollTop,n=e.scrollHeight,r=e.clientHeight;return[t,n,r]},RP=function(e){var t=e.scrollLeft,n=e.scrollWidth,r=e.clientWidth;return[t,n,r]},Yy=function(e,t){return e==="v"?IP(t):EP(t)},Xy=function(e,t){return e==="v"?jP(t):RP(t)},LP=function(e,t){return e==="h"&&t==="rtl"?-1:1},MP=function(e,t,n,r,i){var o=LP(e,window.getComputedStyle(t).direction),s=o*r,c=n.target,l=t.contains(c),u=!1,h=s>0,d=0,p=0;do{if(!c)break;var v=Xy(e,c),k=v[0],y=v[1],x=v[2],f=y-x-o*k;(k||f)&&Yy(e,c)&&(d+=f,p+=k);var m=c.parentNode;c=m&&m.nodeType===Node.DOCUMENT_FRAGMENT_NODE?m.host:m}while(!l&&c!==document.body||l&&(t.contains(c)||t===c));return(h&&(Math.abs(d)<1||!i)||!h&&(Math.abs(p)<1||!i))&&(u=!0),u},ra=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},Np=function(e){return[e.deltaX,e.deltaY]},Ap=function(e){return e&&"current"in e?e.current:e},DP=function(e,t){return e[0]===t[0]&&e[1]===t[1]},qP=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},OP=0,vr=[];function UP(e){var t=g.useRef([]),n=g.useRef([0,0]),r=g.useRef(),i=g.useState(OP++)[0],o=g.useState($y)[0],s=g.useRef(e);g.useEffect(function(){s.current=e},[e]),g.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(i));var y=oP([e.lockRef.current],(e.shards||[]).map(Ap),!0).filter(Boolean);return y.forEach(function(x){return x.classList.add("allow-interactivity-".concat(i))}),function(){document.body.classList.remove("block-interactivity-".concat(i)),y.forEach(function(x){return x.classList.remove("allow-interactivity-".concat(i))})}}},[e.inert,e.lockRef.current,e.shards]);var c=g.useCallback(function(y,x){if("touches"in y&&y.touches.length===2||y.type==="wheel"&&y.ctrlKey)return!s.current.allowPinchZoom;var f=ra(y),m=n.current,b="deltaX"in y?y.deltaX:m[0]-f[0],w="deltaY"in y?y.deltaY:m[1]-f[1],T,S=y.target,P=Math.abs(b)>Math.abs(w)?"h":"v";if("touches"in y&&P==="h"&&S.type==="range")return!1;var C=Pp(P,S);if(!C)return!0;if(C?T=P:(T=P==="v"?"h":"v",C=Pp(P,S)),!C)return!1;if(!r.current&&"changedTouches"in y&&(b||w)&&(r.current=T),!T)return!0;var A=r.current||T;return MP(A,x,y,A==="h"?b:w,!0)},[]),l=g.useCallback(function(y){var x=y;if(!(!vr.length||vr[vr.length-1]!==o)){var f="deltaY"in x?Np(x):ra(x),m=t.current.filter(function(T){return T.name===x.type&&(T.target===x.target||x.target===T.shadowParent)&&DP(T.delta,f)})[0];if(m&&m.should){x.cancelable&&x.preventDefault();return}if(!m){var b=(s.current.shards||[]).map(Ap).filter(Boolean).filter(function(T){return T.contains(x.target)}),w=b.length>0?c(x,b[0]):!s.current.noIsolation;w&&x.cancelable&&x.preventDefault()}}},[]),u=g.useCallback(function(y,x,f,m){var b={name:y,delta:x,target:f,should:m,shadowParent:_P(f)};t.current.push(b),setTimeout(function(){t.current=t.current.filter(function(w){return w!==b})},1)},[]),h=g.useCallback(function(y){n.current=ra(y),r.current=void 0},[]),d=g.useCallback(function(y){u(y.type,Np(y),y.target,c(y,e.lockRef.current))},[]),p=g.useCallback(function(y){u(y.type,ra(y),y.target,c(y,e.lockRef.current))},[]);g.useEffect(function(){return vr.push(o),e.setCallbacks({onScrollCapture:d,onWheelCapture:d,onTouchMoveCapture:p}),document.addEventListener("wheel",l,yr),document.addEventListener("touchmove",l,yr),document.addEventListener("touchstart",h,yr),function(){vr=vr.filter(function(y){return y!==o}),document.removeEventListener("wheel",l,yr),document.removeEventListener("touchmove",l,yr),document.removeEventListener("touchstart",h,yr)}},[]);var v=e.removeScrollBar,k=e.inert;return g.createElement(g.Fragment,null,k?g.createElement(o,{styles:qP(i)}):null,v?g.createElement(NP,{noRelative:e.noRelative,gapMode:e.gapMode}):null)}function _P(e){for(var t=null;e!==null;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}const FP=gP(Ky,UP);var Jy=g.forwardRef(function(e,t){return g.createElement(qs,jt({},e,{ref:t,sideCar:FP}))});Jy.classNames=qs.classNames;var Os="Popover",[Zy,RN]=Co(Os,[Ns]),Ao=Ns(),[BP,Bn]=Zy(Os),ev=e=>{const{__scopePopover:t,children:n,open:r,defaultOpen:i,onOpenChange:o,modal:s=!1}=e,c=Ao(t),l=g.useRef(null),[u,h]=g.useState(!1),[d,p]=Gu({prop:r,defaultProp:i??!1,onChange:o,caller:Os});return a.jsx(dy,{...c,children:a.jsx(BP,{scope:t,contentId:Hf(),triggerRef:l,open:d,onOpenChange:p,onOpenToggle:g.useCallback(()=>p(v=>!v),[p]),hasCustomAnchor:u,onCustomAnchorAdd:g.useCallback(()=>h(!0),[]),onCustomAnchorRemove:g.useCallback(()=>h(!1),[]),modal:s,children:n})})};ev.displayName=Os;var tv="PopoverAnchor",VP=g.forwardRef((e,t)=>{const{__scopePopover:n,...r}=e,i=Bn(tv,n),o=Ao(n),{onCustomAnchorAdd:s,onCustomAnchorRemove:c}=i;return g.useEffect(()=>(s(),()=>c()),[s,c]),a.jsx(sh,{...o,...r,ref:t})});VP.displayName=tv;var nv="PopoverTrigger",rv=g.forwardRef((e,t)=>{const{__scopePopover:n,...r}=e,i=Bn(nv,n),o=Ao(n),s=We(t,i.triggerRef),c=a.jsx(Pe.button,{type:"button","aria-haspopup":"dialog","aria-expanded":i.open,"aria-controls":i.contentId,"data-state":cv(i.open),...r,ref:s,onClick:oe(e.onClick,i.onOpenToggle)});return i.hasCustomAnchor?c:a.jsx(sh,{asChild:!0,...o,children:c})});rv.displayName=nv;var mh="PopoverPortal",[zP,HP]=Zy(mh,{forceMount:void 0}),iv=e=>{const{__scopePopover:t,forceMount:n,children:r,container:i}=e,o=Bn(mh,t);return a.jsx(zP,{scope:t,forceMount:n,children:a.jsx(So,{present:n||o.open,children:a.jsx(Wu,{asChild:!0,container:i,children:r})})})};iv.displayName=mh;var ui="PopoverContent",ov=g.forwardRef((e,t)=>{const n=HP(ui,e.__scopePopover),{forceMount:r=n.forceMount,...i}=e,o=Bn(ui,e.__scopePopover);return a.jsx(So,{present:r||o.open,children:o.modal?a.jsx(GP,{...i,ref:t}):a.jsx(KP,{...i,ref:t})})});ov.displayName=ui;var WP=lo("PopoverContent.RemoveScroll"),GP=g.forwardRef((e,t)=>{const n=Bn(ui,e.__scopePopover),r=g.useRef(null),i=We(t,r),o=g.useRef(!1);return g.useEffect(()=>{const s=r.current;if(s)return iP(s)},[]),a.jsx(Jy,{as:WP,allowPinchZoom:!0,children:a.jsx(av,{...e,ref:i,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:oe(e.onCloseAutoFocus,s=>{var c;s.preventDefault(),o.current||(c=n.triggerRef.current)==null||c.focus()}),onPointerDownOutside:oe(e.onPointerDownOutside,s=>{const c=s.detail.originalEvent,l=c.button===0&&c.ctrlKey===!0,u=c.button===2||l;o.current=u},{checkForDefaultPrevented:!1}),onFocusOutside:oe(e.onFocusOutside,s=>s.preventDefault(),{checkForDefaultPrevented:!1})})})}),KP=g.forwardRef((e,t)=>{const n=Bn(ui,e.__scopePopover),r=g.useRef(!1),i=g.useRef(!1);return a.jsx(av,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:o=>{var s,c;(s=e.onCloseAutoFocus)==null||s.call(e,o),o.defaultPrevented||(r.current||(c=n.triggerRef.current)==null||c.focus(),o.preventDefault()),r.current=!1,i.current=!1},onInteractOutside:o=>{var l,u;(l=e.onInteractOutside)==null||l.call(e,o),o.defaultPrevented||(r.current=!0,o.detail.originalEvent.type==="pointerdown"&&(i.current=!0));const s=o.target;((u=n.triggerRef.current)==null?void 0:u.contains(s))&&o.preventDefault(),o.detail.originalEvent.type==="focusin"&&i.current&&o.preventDefault()}})}),av=g.forwardRef((e,t)=>{const{__scopePopover:n,trapFocus:r,onOpenAutoFocus:i,onCloseAutoFocus:o,disableOutsidePointerEvents:s,onEscapeKeyDown:c,onPointerDownOutside:l,onFocusOutside:u,onInteractOutside:h,...d}=e,p=Bn(ui,n),v=Ao(n);return KS(),a.jsx(Vy,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:i,onUnmountAutoFocus:o,children:a.jsx(ws,{asChild:!0,disableOutsidePointerEvents:s,onInteractOutside:h,onEscapeKeyDown:c,onPointerDownOutside:l,onFocusOutside:u,onDismiss:()=>p.onOpenChange(!1),children:a.jsx(py,{"data-state":cv(p.open),role:"dialog",id:p.contentId,...v,...d,ref:t,style:{...d.style,"--radix-popover-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-popover-content-available-width":"var(--radix-popper-available-width)","--radix-popover-content-available-height":"var(--radix-popper-available-height)","--radix-popover-trigger-width":"var(--radix-popper-anchor-width)","--radix-popover-trigger-height":"var(--radix-popper-anchor-height)"}})})})}),sv="PopoverClose",$P=g.forwardRef((e,t)=>{const{__scopePopover:n,...r}=e,i=Bn(sv,n);return a.jsx(Pe.button,{type:"button",...r,ref:t,onClick:oe(e.onClick,()=>i.onOpenChange(!1))})});$P.displayName=sv;var QP="PopoverArrow",YP=g.forwardRef((e,t)=>{const{__scopePopover:n,...r}=e,i=Ao(n);return a.jsx(gy,{...i,...r,ref:t})});YP.displayName=QP;function cv(e){return e?"open":"closed"}var XP=ev,JP=rv,ZP=iv,lv=ov;const Ip=XP,Ep=JP,Ql=g.forwardRef(({className:e,align:t="center",sideOffset:n=4,...r},i)=>a.jsx(ZP,{children:a.jsx(lv,{ref:i,align:t,sideOffset:n,className:ut("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...r})}));Ql.displayName=lv.displayName;const eN=()=>{const{t:e,locale:t,language:n}=Ne(),r=qn(),i=Ct(),[o,s]=Vx(),c=g.useRef(!1),[l,u]=g.useState(""),[h,d]=g.useState([]),[p,v]=g.useState([]),[k,y]=g.useState([]),[x,f]=g.useState(""),[m,b]=g.useState(""),[w,T]=g.useState(!0),S=o.get("category")||"all",P=o.get("tag")||"",C=9,A=Math.max(1,Number(o.get("page"))||1),E=`${i.pathname}${i.search}`,q=`blog-scroll:${E}`,L=g.useMemo(()=>P.split(",").map(j=>j.trim()).filter(Boolean),[P]),W=g.useMemo(()=>k.map(j=>({name:j.name,count:j.postCount})),[k]),D=g.useMemo(()=>{const j=h.reduce(($,pe)=>$+(pe.viewCount??0),0),U=h.reduce(($,pe)=>$+(pe.readTimeMinutes||0),0);return{totalViews:j,totalReadMinutes:U}},[h]),G=g.useMemo(()=>{const j=x.trim().toLowerCase();return j?p.filter(U=>[U.name,U.slug,U.description??""].some($=>$.toLowerCase().includes(j))):p},[p,x]),z=g.useMemo(()=>{const j=m.trim().toLowerCase();return j?W.filter(U=>U.name.toLowerCase().includes(j)):W},[W,m]),K=g.useMemo(()=>{const j=new Map;return p.forEach(U=>j.set(U.slug,U.postCount)),j},[p]),N=g.useMemo(()=>h.filter(j=>{const U=S==="all"||j.category===S,$=L.length===0||L.every(ht=>j.tags.some(Us=>Us.toLowerCase()===ht.toLowerCase())),pe=j.title.toLowerCase().includes(l.toLowerCase())||j.excerpt.toLowerCase().includes(l.toLowerCase())||j.tags.some(ht=>ht.toLowerCase().includes(l.toLowerCase()));return U&&$&&pe}).sort((j,U)=>new Date(U.date).getTime()-new Date(j.date).getTime()),[h,S,L,l]),M=Math.max(1,Math.ceil(N.length/C)),_=g.useMemo(()=>N.slice((A-1)*C,A*C),[A,N]),H=g.useMemo(()=>{const j=Math.max(1,Math.min(A-2,M-4)),U=Math.min(M,j+4);return Array.from({length:U-j+1},($,pe)=>j+pe)},[A,M]),Z=j=>{var U;return((U=p.find($=>$.slug===j))==null?void 0:U.name)||e(`category.${j}`)||j},Ge=j=>{const U=`${j.slug} ${j.name}`.toLowerCase();return U.includes("language")?t0:U.includes("framework")||U.includes("librar")?Gk:U.includes("architecture")?y0:U.includes("pattern")?b0:U.includes("practice")?Wk:U.includes("roadmap")?g0:U.includes("learning")?Bd:mc},Me=j=>{const U=new URLSearchParams(o);j==="all"?U.delete("category"):U.set("category",j),U.delete("page"),s(U)},rn=j=>{const U=new URLSearchParams(o);j.length===0?U.delete("tag"):U.set("tag",j.join(",")),U.delete("page"),s(U)},Ke=j=>{const $=L.some(pe=>pe.toLowerCase()===j.toLowerCase())?L.filter(pe=>pe.toLowerCase()!==j.toLowerCase()):[...L,j];rn($)},_t=()=>{s({}),u("")},Io=j=>{u(j);const U=new URLSearchParams(o);U.delete("page"),s(U)},Vn=j=>{const U=Math.min(Math.max(1,j),M),$=new URLSearchParams(o);U===1?$.delete("page"):$.set("page",String(U)),s($),window.scrollTo({top:0,behavior:"smooth"})},yi=()=>{const j=window.scrollY;window.sessionStorage.setItem(q,String(j))};return g.useEffect(()=>{let j=!1;return(async()=>{T(!0);const[$,pe,ht]=await Promise.all([kn.getPosts(n,{pageSize:100}),kn.getCategories(),kn.getTags()]);j||(d($),v(pe),y(ht),T(!1))})().catch(()=>{j||T(!1)}),()=>{j=!0}},[n]),g.useEffect(()=>{w||N.length===0||A>M&&Vn(M)},[A,N.length,w,M]),g.useEffect(()=>{c.current=!1},[E]),g.useEffect(()=>{if(w||c.current)return;const j=window.sessionStorage.getItem(q);if(!j)return;const U=Number(j)||0;c.current=!0,window.sessionStorage.removeItem(q);const $=()=>window.scrollTo({top:U,behavior:"instant"});window.requestAnimationFrame(()=>{$(),window.requestAnimationFrame($)});const pe=[80,180,360].map(ht=>window.setTimeout($,ht));return()=>pe.forEach(ht=>window.clearTimeout(ht))},[q,w,_.length]),a.jsx(or,{children:a.jsxs("div",{className:"container mx-auto px-4 py-12",children:[a.jsxs("div",{className:"mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between",children:[a.jsxs("div",{className:"max-w-3xl",children:[a.jsx("h1",{className:"mb-4 text-4xl font-bold md:text-5xl",children:a.jsx("span",{className:"text-gradient",children:e("blog.title")})}),a.jsx("p",{className:"text-lg text-muted-foreground md:text-xl",children:e("blog.desc")})]}),!w&&a.jsxs("div",{className:"grid grid-cols-2 gap-2 sm:grid-cols-4 lg:w-[30rem]",children:[a.jsxs("div",{className:"rounded-lg border border-border/70 bg-background/75 px-3 py-2.5 shadow-sm",children:[a.jsxs("div",{className:"flex items-center gap-1.5 text-xs text-muted-foreground",children:[a.jsx(Ya,{className:"h-3.5 w-3.5 text-primary"}),n==="vi"?"Lượt xem":"Views"]}),a.jsx("div",{className:"mt-1 text-lg font-semibold",children:D.totalViews.toLocaleString(t)})]}),a.jsxs("div",{className:"rounded-lg border border-border/70 bg-background/75 px-3 py-2.5 shadow-sm",children:[a.jsxs("div",{className:"flex items-center gap-1.5 text-xs text-muted-foreground",children:[a.jsx(Bd,{className:"h-3.5 w-3.5 text-primary"}),n==="vi"?"Bài":"Posts"]}),a.jsx("div",{className:"mt-1 text-lg font-semibold",children:h.length.toLocaleString(t)})]}),a.jsxs("div",{className:"rounded-lg border border-border/70 bg-background/75 px-3 py-2.5 shadow-sm",children:[a.jsxs("div",{className:"flex items-center gap-1.5 text-xs text-muted-foreground",children:[a.jsx(Qa,{className:"h-3.5 w-3.5 text-primary"}),n==="vi"?"Phút":"Minutes"]}),a.jsx("div",{className:"mt-1 text-lg font-semibold",children:D.totalReadMinutes.toLocaleString(t)})]}),a.jsxs("div",{className:"rounded-lg border border-border/70 bg-background/75 px-3 py-2.5 shadow-sm",children:[a.jsxs("div",{className:"flex items-center gap-1.5 text-xs text-muted-foreground",children:[a.jsx(mc,{className:"h-3.5 w-3.5 text-primary"}),n==="vi"?"Mục":"Topics"]}),a.jsx("div",{className:"mt-1 text-lg font-semibold",children:p.length.toLocaleString(t)})]})]})]}),a.jsxs("div",{className:"mb-8 rounded-xl border border-border/70 bg-background/75 p-2.5 shadow-sm backdrop-blur md:p-3",children:[a.jsxs("div",{className:"flex flex-col gap-2.5 lg:flex-row lg:items-center",children:[a.jsxs("div",{className:"relative w-full lg:max-w-sm",children:[a.jsx(fc,{className:"absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"}),a.jsx(va,{type:"search",placeholder:e("blog.search"),value:l,onChange:j=>Io(j.target.value),className:"h-10 rounded-lg border-border/70 bg-background/85 pl-9 text-sm shadow-sm"})]}),a.jsxs("div",{className:"flex flex-wrap items-center gap-2 lg:ml-auto",children:[a.jsxs(Ip,{children:[a.jsx(Ep,{asChild:!0,children:a.jsxs(X,{variant:"outline",size:"sm",className:`h-10 min-w-[170px] justify-between rounded-full border-border/70 bg-background/85 px-3 shadow-sm ${S!=="all"?"border-primary/40 ring-1 ring-primary/15":""}`,children:[a.jsxs("span",{className:"flex min-w-0 items-center gap-2",children:[a.jsx(zd,{className:"h-4 w-4 shrink-0 text-muted-foreground"}),a.jsxs("span",{className:"min-w-0 truncate text-sm",children:[a.jsxs("span",{className:"text-muted-foreground",children:[e("blog.filterCategory"),": "]}),a.jsx("span",{className:"font-medium text-foreground",children:S==="all"?e("blog.all"):Z(S)})]})]}),a.jsx(Vd,{className:"h-4 w-4 shrink-0 opacity-70"})]})}),a.jsxs(Ql,{align:"end",className:"w-[min(22rem,calc(100vw-2rem))] rounded-xl p-2",children:[a.jsx("div",{className:"px-2 pb-2 pt-1 text-xs font-medium uppercase text-muted-foreground",children:e("blog.filterCategory")}),a.jsxs("div",{className:"relative mb-2",children:[a.jsx(fc,{className:"absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"}),a.jsx(va,{type:"search",value:x,onChange:j=>f(j.target.value),onKeyDown:j=>j.stopPropagation(),placeholder:n==="vi"?"Tìm danh mục":"Search categories",className:"h-9 rounded-lg border-border/70 bg-background/85 pl-9 text-sm"})]}),a.jsxs("div",{className:"space-y-1",children:[a.jsxs("button",{type:"button",onClick:()=>Me("all"),className:`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors ${S==="all"?"bg-primary/10 text-primary ring-1 ring-primary/20":"text-foreground hover:bg-muted"}`,children:[a.jsx(mc,{className:"h-4 w-4 shrink-0 opacity-75"}),a.jsx("span",{className:"min-w-0 flex-1 truncate",children:e("blog.all")}),a.jsx("span",{className:"rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground",children:h.length}),S==="all"&&a.jsx(fa,{className:"h-4 w-4"})]}),G.map(j=>{const U=S===j.slug,$=Ge(j);return a.jsxs("button",{type:"button",onClick:()=>Me(j.slug),className:`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors ${U?"bg-primary/10 text-primary ring-1 ring-primary/20":"text-foreground hover:bg-muted"}`,children:[a.jsx($,{className:"h-4 w-4 shrink-0 opacity-75"}),a.jsx("span",{className:"min-w-0 flex-1 truncate",children:j.name}),a.jsx("span",{className:"rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground",children:K.get(j.slug)??0}),U&&a.jsx(fa,{className:"h-4 w-4"})]},j.id)}),G.length===0&&a.jsx("div",{className:"px-3 py-6 text-center text-sm text-muted-foreground",children:n==="vi"?"Không tìm thấy danh mục":"No categories found"})]})]})]}),a.jsxs(Ip,{children:[a.jsx(Ep,{asChild:!0,children:a.jsxs(X,{variant:"outline",size:"sm",className:`h-10 min-w-[145px] justify-between rounded-full border-border/70 bg-background/85 px-3 shadow-sm ${L.length>0?"border-primary/40 ring-1 ring-primary/15":""}`,children:[a.jsxs("span",{className:"flex min-w-0 items-center gap-2",children:[a.jsx(Dl,{className:"h-4 w-4 shrink-0 text-muted-foreground"}),a.jsxs("span",{className:"min-w-0 truncate text-sm",children:[a.jsxs("span",{className:"text-muted-foreground",children:[e("blog.filterTag"),": "]}),a.jsx("span",{className:"font-medium text-foreground",children:L.length>0?`${L.length} ${e("blog.selectedTags")}`:e("blog.allTags")})]})]}),a.jsx(Vd,{className:"h-4 w-4 opacity-70"})]})}),a.jsxs(Ql,{align:"end",className:"w-[min(22rem,calc(100vw-2rem))] rounded-xl p-3",children:[a.jsxs("div",{className:"mb-3 flex items-center justify-between gap-3",children:[a.jsx("div",{className:"text-sm font-medium",children:e("blog.filterTag")}),L.length>0&&a.jsx(X,{variant:"ghost",size:"sm",onClick:()=>rn([]),className:"h-8 px-2 text-xs",children:e("blog.clearFilters")})]}),a.jsxs("div",{className:"relative mb-3",children:[a.jsx(fc,{className:"absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"}),a.jsx(va,{type:"search",value:m,onChange:j=>b(j.target.value),onKeyDown:j=>j.stopPropagation(),placeholder:n==="vi"?"Tìm thẻ":"Search tags",className:"h-9 rounded-lg border-border/70 bg-background/85 pl-9 text-sm"})]}),a.jsxs("div",{className:"flex max-h-72 flex-wrap gap-2 overflow-y-auto pr-1",children:[z.map(j=>{const U=L.some($=>$.toLowerCase()===j.name.toLowerCase());return a.jsxs(X,{variant:U?"default":"outline",size:"sm",onClick:()=>Ke(j.name),className:"h-8 gap-1.5 rounded-full px-2.5 text-xs",children:[U&&a.jsx(fa,{className:"h-3.5 w-3.5"}),j.name,a.jsx("span",{className:"rounded-full bg-background/40 px-1.5 py-0.5 text-[10px] text-current",children:j.count})]},j.name)}),z.length===0&&a.jsx("div",{className:"w-full px-3 py-6 text-center text-sm text-muted-foreground",children:n==="vi"?"Không tìm thấy thẻ":"No tags found"})]})]})]}),(S!=="all"||L.length>0||l)&&a.jsxs(X,{variant:"ghost",size:"sm",onClick:_t,className:"h-10 gap-2 rounded-full px-3",children:[a.jsx(Xa,{className:"h-4 w-4"}),e("blog.clearFilters")]})]})]}),L.length>0&&a.jsx("div",{className:"mt-2 flex flex-wrap items-center gap-1.5 border-t border-border/60 pt-2",children:L.map(j=>a.jsxs("button",{type:"button",onClick:()=>Ke(j),className:"inline-flex h-6 items-center gap-1 rounded-full border border-primary/25 bg-primary/10 px-2 text-[11px] font-medium text-primary transition-colors hover:bg-primary/15",children:[j,a.jsx(Xa,{className:"h-3 w-3"})]},j))})]}),w?a.jsx(gh,{className:"min-h-[36rem]",label:n==="vi"?"Đang tải":"Loading"}):N.length>0?a.jsxs(a.Fragment,{children:[a.jsx(xe.div,{className:"grid grid-cols-1 items-start gap-6 md:grid-cols-2 lg:grid-cols-3",variants:r?void 0:si,initial:r?!1:"hidden",animate:"visible",children:_.map(j=>a.jsx(xe.article,{variants:r?void 0:ci,className:"group card-gradient flex h-full flex-col overflow-hidden rounded-xl border border-border/50 transition-all duration-300 hover:border-primary/50",children:a.jsxs("div",{className:"flex h-full flex-col p-6",children:[a.jsxs("div",{className:"mb-4 flex min-h-7 flex-wrap items-center gap-2.5",children:[a.jsx(at,{variant:"secondary",className:"max-w-full truncate text-xs",children:Z(j.category)}),a.jsxs("div",{className:"flex items-center text-xs text-muted-foreground",children:[a.jsx(Qa,{className:"mr-1 h-4 w-4"}),j.readTime]}),a.jsxs("div",{className:"flex items-center text-xs text-muted-foreground",children:[a.jsx(Ya,{className:"mr-1 h-4 w-4"}),(j.viewCount??0).toLocaleString(t)]})]}),a.jsx(be,{to:`/blog/${j.id}`,state:{from:E},onClick:yi,children:a.jsx("h2",{className:"mb-3 min-h-[3.5rem] text-xl font-semibold leading-7 line-clamp-2 transition-colors group-hover:text-primary",children:j.title})}),a.jsx("p",{className:"mb-4 min-h-[4.5rem] line-clamp-3 text-sm leading-6 text-muted-foreground",children:j.excerpt}),a.jsx("div",{className:"mb-5 flex h-7 gap-2 overflow-hidden",children:j.tags.slice(0,3).map(U=>{const $=L.some(pe=>pe.toLowerCase()===U.toLowerCase());return a.jsxs("button",{type:"button",onClick:()=>Ke(U),className:`inline-flex h-7 max-w-[8.75rem] shrink-0 items-center rounded px-2.5 py-1 text-xs transition-colors ${$?"bg-primary text-primary-foreground":"bg-muted text-muted-foreground hover:text-foreground"}`,children:[a.jsx(Dl,{className:"mr-1 h-3 w-3 shrink-0"}),a.jsx("span",{className:"truncate",children:U})]},U)})}),a.jsxs("div",{className:"flex items-center justify-between gap-4 border-t border-border/50 pt-4",children:[a.jsx("span",{className:"min-w-0 truncate text-sm text-muted-foreground",children:new Date(j.date).toLocaleDateString(t)}),a.jsx(be,{to:`/blog/${j.id}`,state:{from:E},onClick:yi,className:"shrink-0 text-sm font-medium text-primary",children:e("blog.readMore")})]})]})},j.id))},`${S}-${P}-${l}-${n}-${A}`),M>1&&a.jsxs("nav",{className:"mt-10 flex flex-col items-center justify-between gap-4 rounded-xl border border-border/70 bg-background/75 p-3 shadow-sm backdrop-blur sm:flex-row",children:[a.jsx("p",{className:"text-sm text-muted-foreground",children:n==="vi"?`Hiển thị ${(A-1)*C+1}-${Math.min(A*C,N.length)} / ${N.length} bài`:`Showing ${(A-1)*C+1}-${Math.min(A*C,N.length)} of ${N.length} posts`}),a.jsxs("div",{className:"flex items-center gap-1.5",children:[a.jsxs(X,{type:"button",variant:"outline",size:"sm",className:"h-9 rounded-full px-3",disabled:A===1,onClick:()=>Vn(A-1),children:[a.jsx(Xk,{className:"h-4 w-4"}),a.jsx("span",{className:"hidden sm:inline",children:n==="vi"?"Trước":"Prev"})]}),H.map(j=>a.jsx(X,{type:"button",variant:j===A?"default":"outline",size:"sm",className:"h-9 w-9 rounded-full p-0",onClick:()=>Vn(j),children:j},j)),a.jsxs(X,{type:"button",variant:"outline",size:"sm",className:"h-9 rounded-full px-3",disabled:A===M,onClick:()=>Vn(A+1),children:[a.jsx("span",{className:"hidden sm:inline",children:n==="vi"?"Sau":"Next"}),a.jsx(Jk,{className:"h-4 w-4"})]})]})]})]}):a.jsxs("div",{className:"text-center py-20",children:[a.jsx(zd,{className:"h-12 w-12 text-muted-foreground mx-auto mb-4"}),a.jsx("h3",{className:"text-xl font-semibold mb-2",children:e("blog.empty")}),a.jsx("p",{className:"text-muted-foreground",children:e("blog.emptyDesc")})]})]})})},uv=async e=>{var o;if((o=navigator.clipboard)!=null&&o.writeText&&window.isSecureContext)try{await navigator.clipboard.writeText(e);return}catch{}const t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="fixed",t.style.left="-9999px",t.style.top="0",t.style.opacity="0",document.body.appendChild(t);const n=document.getSelection(),r=n&&n.rangeCount>0?n.getRangeAt(0):null;t.focus(),t.select();const i=document.execCommand("copy");if(t.remove(),r&&n&&(n.removeAllRanges(),n.addRange(r)),!i)throw new Error("Unable to copy to clipboard")},tN={javascript:"js",jsx:"js",typescript:"ts",tsx:"ts",py:"python",cs:"csharp","c#":"csharp"},jp={js:new Set(["async","await","break","case","catch","class","const","continue","default","do","else","export","extends","finally","for","from","function","if","import","in","instanceof","let","new","of","return","switch","throw","try","typeof","var","void","while","yield"]),ts:new Set(["abstract","as","async","await","break","case","catch","class","const","continue","default","do","else","enum","export","extends","finally","for","from","function","if","implements","import","in","infer","interface","keyof","let","namespace","new","of","private","protected","public","readonly","return","satisfies","switch","throw","try","type","typeof","var","void","while"]),python:new Set(["and","as","assert","async","await","break","class","continue","def","del","elif","else","except","False","finally","for","from","global","if","import","in","is","lambda","None","nonlocal","not","or","pass","raise","return","True","try","while","with","yield"]),csharp:new Set(["abstract","async","await","base","break","case","catch","class","const","decimal","default","else","enum","false","finally","for","foreach","from","get","if","in","interface","internal","is","namespace","new","null","private","protected","public","readonly","record","return","sealed","set","static","string","switch","this","throw","true","try","using","var","void","when","where"])},nN=new Set(["true","false","null","undefined","True","False","None"]),rN=new Set(["Array","Boolean","Date","Decimal","Error","Guid","Iterable","List","Map","Number","Promise","Record","Set","String","Task","ValueError","dict","list","str","int","float","bool"]),iN=e=>{const t=e.trim().toLowerCase();return tN[t]??t},oN=/(\/\*[\s\S]*?\*\/|\/\/.*|#.*|`(?:\\.|[^`])*`|"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|@[A-Za-z_]\w*|\b\d+(?:\.\d+)?\b|\b[A-Za-z_]\w*\b|=>|==={0,1}|!==?|\+\+|--|&&|\|\||[{}[\]().,;:<>+\-*/%=!?|&])/g,aN=e=>{const t=[];let n=0;return e.replace(oN,(r,i,o)=>(o>n&&t.push(e.slice(n,o)),t.push(r),n=o+r.length,r)),n<e.length&&t.push(e.slice(n)),t},sN=(e,t)=>e.slice(t+1).find(n=>n.trim().length>0),cN=(e,t,n)=>{const r=iN(t),i=jp[r]??jp.js;return/^\s+$/.test(e)?"":/^(\/\/|#|\/\*)/.test(e)?"text-slate-500 italic":/^(`|"|')/.test(e)?"text-emerald-300":/^@\w+/.test(e)?"text-amber-300":/^\d/.test(e)?"text-orange-300":nN.has(e)?"text-purple-300":i.has(e)?"text-sky-300 font-medium":rN.has(e)||/^[A-Z][A-Za-z0-9_]*$/.test(e)?"text-cyan-200":n==="("?"text-yellow-200":/^[{}[\]().,;:<>+\-*/%=!?|&]+$/.test(e)?"text-slate-300":"text-slate-100"},lN=(e,t,n)=>{const r=aN(e);return r.map((i,o)=>{const s=cN(i,t,sN(r,o));return a.jsx("span",{className:s||void 0,children:i},`${n}-${o}`)})},uN=({code:e,language:t})=>{const{language:n}=Ne(),{toast:r}=Hu(),[i,o]=g.useState(!1),s=g.useRef(),c=n==="vi"?"Sao chép mã":"Copy code",l=n==="vi"?"Đã sao chép":"Copied",u=t||"code",h=e.split(`
`);g.useEffect(()=>()=>window.clearTimeout(s.current),[]);const d=async()=>{try{await uv(e),o(!0),window.clearTimeout(s.current),s.current=window.setTimeout(()=>o(!1),2e3),r({variant:"success",title:n==="vi"?"Đã sao chép mã":"Code copied"})}catch(p){console.error("Unable to copy code:",p),r({variant:"destructive",title:n==="vi"?"Không thể sao chép mã":"Unable to copy code"})}};return a.jsxs("div",{className:"my-8 overflow-hidden rounded-xl border border-slate-700/80 bg-slate-950 shadow-sm",children:[a.jsxs("div",{className:"flex items-center justify-between gap-3 border-b border-slate-800 bg-slate-900/95 px-4 py-2.5 font-mono text-xs uppercase tracking-[.14em] text-slate-400",children:[a.jsxs("div",{className:"flex min-w-0 items-center gap-3",children:[a.jsxs("span",{className:"flex items-center gap-1.5",children:[a.jsx("span",{className:"h-2.5 w-2.5 rounded-full bg-red-400"}),a.jsx("span",{className:"h-2.5 w-2.5 rounded-full bg-amber-300"}),a.jsx("span",{className:"h-2.5 w-2.5 rounded-full bg-emerald-400"})]}),a.jsx("span",{className:"min-w-0 truncate",children:u})]}),a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx("span",{className:"hidden text-slate-500 sm:inline",children:"haiit.dev"}),a.jsxs("button",{type:"button",onClick:d,className:"inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-700 bg-slate-900 text-slate-200 transition-colors hover:border-primary/70 hover:bg-primary/15 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary","aria-label":i?l:c,title:i?l:c,children:[i?a.jsx(fa,{className:"h-4 w-4 text-primary"}):a.jsx(r0,{className:"h-4 w-4"}),a.jsx("span",{className:"sr-only","aria-live":"polite",children:i?l:c})]})]})]}),a.jsx("pre",{className:"overflow-x-auto p-0 text-sm leading-7",children:a.jsx("code",{className:"block min-w-max py-4 font-mono",children:h.map((p,v)=>a.jsxs("span",{className:"grid grid-cols-[3.25rem_1fr]",children:[a.jsx("span",{className:"select-none border-r border-slate-800 px-4 text-right text-slate-600",children:v+1}),a.jsx("span",{className:"whitespace-pre px-4",children:p?lN(p,t,v):" "})]},v))})})]})},br=e=>e.split(/(`[^`]+`|\*\*[^*]+\*\*)/g).filter(Boolean).map((t,n)=>t.startsWith("`")&&t.endsWith("`")?a.jsx("code",{className:"rounded bg-primary/10 px-1.5 py-0.5 font-mono text-[.88em] text-primary",children:t.slice(1,-1)},n):t.startsWith("**")&&t.endsWith("**")?a.jsx("strong",{className:"font-semibold text-foreground",children:t.slice(2,-2)},n):a.jsx(g.Fragment,{children:t},n)),hN=({content:e})=>{const t=e.trim().split(`
`),n=[];let r=0;for(;r<t.length;){const i=t[r].trim();if(!i){r+=1;continue}if(i.startsWith("```")){const s=i.slice(3).trim(),c=[];for(r+=1;r<t.length&&!t[r].trim().startsWith("```");)c.push(t[r]),r+=1;n.push(a.jsx(uN,{language:s,code:c.join(`
`)},`code-${r}`)),r+=1;continue}if(i.startsWith("# ")){n.push(a.jsx("h2",{className:"mb-6 mt-2 text-3xl md:text-4xl",children:br(i.slice(2))},r)),r+=1;continue}if(i.startsWith("## ")){n.push(a.jsx("h3",{className:"mb-4 mt-12 border-l-2 border-primary pl-4 text-2xl",children:br(i.slice(3))},r)),r+=1;continue}if(i.startsWith("### ")){n.push(a.jsx("h4",{className:"mb-3 mt-8 text-xl",children:br(i.slice(4))},r)),r+=1;continue}if(i.startsWith("- ")){const s=[];for(;r<t.length&&t[r].trim().startsWith("- ");)s.push(t[r].trim().slice(2)),r+=1;n.push(a.jsx("ul",{className:"my-6 space-y-3",children:s.map(c=>a.jsxs("li",{className:"flex gap-3 leading-7 text-muted-foreground",children:[a.jsx("span",{className:"mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"}),a.jsx("span",{children:br(c)})]},c))},`list-${r}`));continue}if(i.startsWith("> ")){n.push(a.jsx("blockquote",{className:"my-8 border-l-2 border-primary bg-primary/[.04] px-5 py-4 text-lg italic leading-8 text-muted-foreground",children:br(i.slice(2))},r)),r+=1;continue}const o=[i];for(r+=1;r<t.length&&t[r].trim()&&!/^(#{1,3} |```|- |> )/.test(t[r].trim());)o.push(t[r].trim()),r+=1;n.push(a.jsx("p",{className:"my-5 text-[1.02rem] leading-8 text-muted-foreground",children:br(o.join(" "))},`p-${r}`))}return a.jsx("div",{className:"article-content",children:n})},dN=()=>{var y;const{t:e,locale:t,language:n}=Ne(),{toast:r}=Hu(),{id:i}=mx(),o=Ct(),s=typeof((y=o.state)==null?void 0:y.from)=="string"&&o.state.from.startsWith("/blog")?o.state.from:"/blog",[c,l]=g.useState(()=>i?kn.getCachedPost(i):void 0),[u,h]=g.useState(!c),d=(c==null?void 0:c.id)===i?c:void 0,p=d?Uy(d,n):void 0;if(g.useEffect(()=>{if(!i)return;let x=!1;const f=kn.getCachedPost(i);return l(f),(async()=>{h(!0);const b=await kn.getPost(i,n);x||(l(b),h(!1));const w=await kn.incrementView(i);!x&&w&&b&&l({...b,viewCount:w.viewCount})})(),()=>{x=!0}},[i,n]),u&&!d)return a.jsx(or,{children:a.jsx("div",{className:"container mx-auto px-4 py-12",children:a.jsx(gh,{className:"min-h-[calc(100vh-9rem)]",label:n==="vi"?"Đang tải":"Loading"})})});if(!p)return a.jsx(or,{children:a.jsxs("div",{className:"container mx-auto px-4 py-20 text-center",children:[a.jsx("h1",{className:"text-4xl font-bold mb-4",children:e("post.notFound")}),a.jsx("p",{className:"text-muted-foreground mb-8",children:e("post.notFoundDesc")}),a.jsx(X,{asChild:!0,children:a.jsxs(be,{to:s,children:[a.jsx(Rl,{className:"mr-2 h-4 w-4"}),e("post.back")]})})]})});const v=e(`category.${p.category}`)||p.category,k=async()=>{try{await uv(window.location.href),r({variant:"success",title:n==="vi"?"Đã sao chép liên kết":"Link copied"})}catch{r({variant:"destructive",title:n==="vi"?"Không thể sao chép liên kết":"Unable to copy link"})}};return a.jsx(or,{children:a.jsxs("article",{className:"container mx-auto px-4 py-12",children:[a.jsxs(be,{to:s,className:"inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8",children:[a.jsx(Rl,{className:"mr-2 h-4 w-4"}),e("post.back")]}),a.jsxs("header",{className:"max-w-3xl mb-12",children:[a.jsx(at,{variant:"secondary",className:"mb-4",children:v}),a.jsx("h1",{className:"text-3xl md:text-4xl lg:text-5xl font-bold mb-6",children:p.title}),a.jsx("p",{className:"text-xl text-muted-foreground mb-6",children:p.excerpt}),a.jsxs("div",{className:"flex flex-wrap items-center gap-6 text-muted-foreground",children:[a.jsxs("div",{className:"flex items-center",children:[a.jsx(Yk,{className:"h-4 w-4 mr-2"}),new Date(p.date).toLocaleDateString(t,{year:"numeric",month:"long",day:"numeric"})]}),a.jsxs("div",{className:"flex items-center",children:[a.jsx(Qa,{className:"h-4 w-4 mr-2"}),p.readTime]}),a.jsxs("div",{className:"flex items-center",children:[a.jsx(Ya,{className:"h-4 w-4 mr-2"}),`${((d==null?void 0:d.viewCount)??0).toLocaleString(t)} ${e("post.views")}`]})]})]}),a.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-4 gap-12",children:[a.jsx("div",{className:"lg:col-span-3",children:a.jsxs("div",{className:"card-gradient rounded-xl border border-border/50 p-6 md:p-12",children:[a.jsx(hN,{content:p.content}),a.jsx("p",{className:"mt-10 border-t border-border/50 pt-4 text-xs leading-5 text-muted-foreground/80",children:e("post.sourceNote")})]})}),a.jsx("aside",{className:"lg:col-span-1",children:a.jsxs("div",{className:"sticky top-24 space-y-8",children:[a.jsxs("div",{className:"card-gradient border border-border/50 rounded-xl p-6",children:[a.jsxs("h3",{className:"font-semibold mb-4 flex items-center",children:[a.jsx(Dl,{className:"h-4 w-4 mr-2"}),e("post.tags")]}),a.jsx("div",{className:"flex flex-wrap gap-2",children:p.tags.map(x=>a.jsx(be,{to:`/blog?tag=${encodeURIComponent(x)}`,children:a.jsx(at,{variant:"outline",className:"cursor-pointer hover:border-primary hover:text-primary",children:x})},x))})]}),a.jsxs("div",{className:"card-gradient border border-border/50 rounded-xl p-6",children:[a.jsxs("h3",{className:"font-semibold mb-4 flex items-center",children:[a.jsx(w0,{className:"h-4 w-4 mr-2"}),e("post.share")]}),a.jsx(X,{variant:"outline",className:"w-full",onClick:k,children:e("post.copy")})]})]})})]})]})})},pN=()=>{const{t:e}=Ne(),t=qn();return a.jsx(or,{children:a.jsxs("div",{className:"container mx-auto px-4 py-12",children:[a.jsxs("div",{className:"max-w-3xl mb-12",children:[a.jsx("h1",{className:"text-4xl md:text-5xl font-bold mb-4",children:a.jsx("span",{className:"text-gradient",children:e("project.title")})}),a.jsx("p",{className:"text-xl text-muted-foreground mb-4",children:e("project.desc")}),a.jsx(X,{asChild:!0,variant:"outline",children:a.jsxs("a",{href:ae.social.github,target:"_blank",rel:"noopener noreferrer",children:[a.jsx(_r,{className:"h-4 w-4 mr-2"}),e("project.github")]})})]}),a.jsxs("div",{className:"mb-12",children:[a.jsxs("h2",{className:"text-2xl font-semibold mb-6 flex items-center gap-2",children:[a.jsx(k0,{className:"h-5 w-5 text-yellow-500"}),e("project.featured")]}),a.jsx(xe.div,{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",variants:t?void 0:si,initial:t?!1:"hidden",whileInView:"visible",viewport:li,children:Wl.filter(n=>n.featured).map(n=>a.jsxs(xe.article,{variants:t?void 0:ci,className:"group card-gradient border border-border/50 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300",children:[a.jsxs("div",{className:"aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border-b border-border/50 relative overflow-hidden",children:[a.jsx("div",{className:"text-6xl font-mono text-primary/30 group-hover:text-primary/50 transition-colors",children:`<${n.title.split(" ")[0].charAt(0)} />`}),a.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-card to-transparent"}),n.demo&&a.jsx("div",{className:"absolute top-4 right-4",children:a.jsx(at,{className:"bg-green-500/20 text-green-400 border-green-500/30",children:e("project.demo")})})]}),a.jsxs("div",{className:"p-6 md:p-8",children:[a.jsxs("div",{className:"flex items-start justify-between mb-4",children:[a.jsx("h3",{className:"text-2xl font-semibold group-hover:text-primary transition-colors",children:n.title}),a.jsx(at,{className:"bg-primary/20 text-primary",children:e("project.featured")})]}),a.jsx("p",{className:"text-muted-foreground mb-4",children:n.description}),a.jsx("p",{className:"text-sm text-muted-foreground mb-6",children:n.longDescription}),a.jsx("div",{className:"flex flex-wrap gap-2 mb-6",children:n.technologies.map(r=>a.jsx(at,{variant:"secondary",children:r},r))}),a.jsxs("div",{className:"flex gap-4 pt-4 border-t border-border/50",children:[n.github&&a.jsx(X,{asChild:!0,variant:"outline",size:"sm",children:a.jsxs("a",{href:n.github,target:"_blank",rel:"noopener noreferrer",children:[a.jsx(_r,{className:"h-4 w-4 mr-2"}),e("project.source")]})}),n.demo&&a.jsx(X,{asChild:!0,size:"sm",children:a.jsxs("a",{href:n.demo,target:"_blank",rel:"noopener noreferrer",children:[a.jsx(Ml,{className:"h-4 w-4 mr-2"}),e("project.demo")]})})]})]})]},n.id))})]}),a.jsxs("div",{children:[a.jsxs("h2",{className:"text-2xl font-semibold mb-6 flex items-center gap-2",children:[a.jsx(a0,{className:"h-5 w-5 text-primary"}),e("project.all")]}),a.jsx(xe.div,{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",variants:t?void 0:si,initial:t?!1:"hidden",whileInView:"visible",viewport:li,children:Wl.filter(n=>!n.featured).map(n=>a.jsxs(xe.article,{variants:t?void 0:ci,className:"group card-gradient border border-border/50 rounded-xl p-6 hover:border-primary/50 transition-all duration-300",children:[a.jsx("h3",{className:"text-lg font-semibold mb-2 group-hover:text-primary transition-colors",children:n.title}),a.jsx("p",{className:"text-sm text-muted-foreground mb-4 line-clamp-2",children:n.description}),a.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:n.technologies.slice(0,3).map(r=>a.jsx(at,{variant:"secondary",className:"min-h-7 px-3 py-1 text-xs",children:r},r))}),a.jsxs("div",{className:"flex gap-2",children:[n.github&&a.jsx(X,{asChild:!0,variant:"ghost",size:"sm",children:a.jsx("a",{href:n.github,target:"_blank",rel:"noopener noreferrer",children:a.jsx(_r,{className:"h-4 w-4"})})}),n.demo&&a.jsx(X,{asChild:!0,variant:"ghost",size:"sm",children:a.jsx("a",{href:n.demo,target:"_blank",rel:"noopener noreferrer",children:a.jsx(Ml,{className:"h-4 w-4"})})})]})]},n.id))})]})]})})},gN=[{id:"fullstack",file:"/cvs/FullStack.pdf",title:{vi:"Fullstack Developer",en:"Fullstack Developer"},description:{vi:"Hồ sơ trọng tâm: kinh nghiệm thực tế với Angular, ASP.NET Core, SQL Server và hệ thống quản lý doanh nghiệp.",en:"Primary profile: hands-on experience with Angular, ASP.NET Core, SQL Server, and enterprise management systems."},featured:!0,stack:["Angular","ASP.NET Core","SQL Server","Docker"]},{id:"dotnet",file:"/cvs/.NET-EN.pdf",title:{vi:".NET Developer",en:".NET Developer"},description:{vi:"Hồ sơ tiếng Anh tập trung vào ASP.NET Core MVC, RESTful API, backend và SQL Server.",en:"English profile focused on ASP.NET Core MVC, RESTful APIs, backend development, and SQL Server."},featured:!1,stack:["C#","ASP.NET Core MVC","RESTful API","SQL Server"]},{id:"ba",file:"/cvs/BA-VI.pdf",title:{vi:"Business Analyst",en:"Business Analyst"},description:{vi:"Hồ sơ tiếng Việt về phân tích nghiệp vụ, User Story, Use Case, BPMN và tài liệu hóa hệ thống.",en:"Vietnamese profile covering business analysis, User Stories, Use Cases, BPMN, and system documentation."},featured:!1,stack:["BPMN","UML","User Story","Figma"]}],mN=[{period:"03/2026 - 06/2026",role:"Fullstack Developer",company:"Song Ân Software Solutions Co., Ltd.",summary:{vi:"Phát triển và bảo trì các module HIS, EMR và Admin Management System bằng Angular, ASP.NET Core và SQL Server.",en:"Developing and maintaining HIS, EMR, and Admin Management System modules with Angular, ASP.NET Core, and SQL Server."},highlights:{vi:["CRUD, bộ lọc tìm kiếm, phân trang và component tái sử dụng","Kiểm tra dữ liệu, tối ưu truy vấn và xử lý sự cố SQL Server","Điều tra lỗi, regression testing, merge branch và chuẩn bị triển khai"],en:["CRUD, search filters, pagination, and reusable components","Data verification, query optimization, and SQL Server troubleshooting","Defect investigation, regression testing, branch merging, and deployment preparation"]}}],fN=[{title:{vi:"Hệ thống Quản lý & Đào tạo Giấy phép Lái xe",en:"Driver License Training & Management System"},period:"09/2025 - 12/2025",description:{vi:"Hệ thống ASP.NET Core 9.0 MVC quản lý đào tạo, thi lý thuyết, mô phỏng giao thông, trung tâm lái xe và thanh toán trực tuyến.",en:"ASP.NET Core 9.0 MVC system for driver training, theory exams, traffic simulation, driving center operations, and online payments."},stack:["ASP.NET Core 9","SignalR","OpenAI SDK","VNPAY","MoMo","PayPal"],github:"https://github.com/haihttt974/dacn-dtgplx"},{title:{vi:"Ứng dụng Web Quản lý Phòng Gym",en:"Gym Management Web Application"},period:"06/2025",description:{vi:"Quản lý hội viên, gói tập, phân quyền Admin/Staff/Trainer/Member, thanh toán và chatbot hỗ trợ.",en:"Membership, package, role-based access, online payment, notification, and AI chatbot management."},stack:["ASP.NET Core MVC","RBAC","PayPal","VNPay","AI Chatbot"],github:"https://github.com/haihttt974/courseproject-ltweb-gym"}],yN=[{year:"2022 - 2025",vi:"Sinh viên tiêu biểu ba năm liên tiếp",en:"Outstanding student for three consecutive years"},{year:"2024",vi:"Giải Nhất Database Design Champion",en:"First Prize, Database Design Champion"},{year:"03/2024",vi:"Giải Ba Cuộc thi Lập trình Cá nhân",en:"Third Prize, Individual Programming Competition"},{year:"10/2024",vi:"Giải Nhất Cuộc thi Lập trình Cá nhân",en:"First Prize, Individual Programming Competition"}],vN=[{year:"2025",vi:"Tiếng Anh trình độ B1",en:"English Proficiency, B1 Level"},{year:"2025",vi:"Kỹ năng Giao tiếp và Làm việc Nhóm",en:"Communication and Teamwork Skills"}],bN=[{title:"Fullstack",items:["Angular","ASP.NET Core","C#","JavaScript","HTML","CSS","RESTful API"]},{title:"Data & Backend",items:["SQL Server","Entity Framework Core","Query Optimization","Database Analysis"]},{title:"Business Analysis",items:["User Story","Use Case","BPMN","UML","Draw.io","Figma"]},{title:"Delivery & Quality",items:["Git","GitHub","Docker","Azure","Postman","Software Testing"]}],wN=()=>{const{language:e}=Ne(),t=e==="vi"?{eyebrow:"Hồ sơ nghề nghiệp / 2026",intro:"Tôi xây sản phẩm fullstack, hiểu dữ liệu và không bỏ qua câu chuyện nghiệp vụ phía sau mỗi tính năng.",summary:"Fullstack Developer định hướng hệ thống, có kinh nghiệm phát triển module HIS, EMR và hệ thống quản trị bằng Angular, ASP.NET Core, SQL Server. Đồng thời có nền tảng Business Analysis và kiểm thử phần mềm.",contact:"Liên hệ",cvLabel:"Bộ hồ sơ ứng tuyển",cvTitle:"Ba góc nhìn. Một năng lực cốt lõi.",cvDesc:"Mỗi CV được tối ưu cho một vị trí khác nhau. Fullstack là hồ sơ trọng tâm và phản ánh đầy đủ nhất kinh nghiệm hiện tại.",primary:"Hồ sơ trọng tâm",view:"Xem CV",download:"Tải PDF",experience:"Kinh nghiệm thực tế",present:"Hiện tại",projects:"Dự án tiêu biểu",skills:"Năng lực chuyên môn",education:"Học vấn",educationTitle:"Công nghệ Thông tin",school:"Trường Đại học Công nghệ TP. Hồ Chí Minh",awards:"Danh hiệu & giải thưởng",certificates:"Chứng chỉ",primaryEmail:"Email chính",secondaryEmail:"Email phụ"}:{eyebrow:"Professional profile / 2026",intro:"I build fullstack products, understand data, and never ignore the business story behind each feature.",summary:"Systems-oriented Fullstack Developer with experience building HIS, EMR, and administration modules using Angular, ASP.NET Core, and SQL Server, supported by Business Analysis and software testing foundations.",contact:"Contact",cvLabel:"Application profiles",cvTitle:"Three perspectives. One core capability.",cvDesc:"Each CV is tailored to a different role. Fullstack is the primary profile and best represents my current experience.",primary:"Primary profile",view:"View CV",download:"Download PDF",experience:"Professional experience",present:"Present",projects:"Selected projects",skills:"Professional capabilities",education:"Education",educationTitle:"Information Technology",school:"Ho Chi Minh City University of Technology (HUTECH)",awards:"Honors & awards",certificates:"Certifications",primaryEmail:"Primary email",secondaryEmail:"Secondary email"};return a.jsxs(or,{children:[a.jsx("section",{className:"border-b border-border/70",children:a.jsxs("div",{className:"container mx-auto px-4 py-10 md:py-16",children:[a.jsx("p",{className:"eyebrow mb-7",children:t.eyebrow}),a.jsxs("div",{className:"grid gap-8 lg:grid-cols-[.72fr_1.28fr] lg:items-end",children:[a.jsxs("div",{className:"journal-card relative aspect-[4/5] max-w-md overflow-hidden",children:[a.jsx("img",{src:ae.avatar,alt:ae.name,className:"h-full w-full object-cover"}),a.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"}),a.jsxs("div",{className:"absolute inset-x-0 bottom-0 p-6",children:[a.jsx("p",{className:"font-mono text-xs uppercase tracking-[.16em] text-primary",children:"Fullstack / Information Systems"}),a.jsx("h1",{className:"mt-2 text-3xl",children:ae.name})]})]}),a.jsxs("div",{className:"pb-2",children:[a.jsx("h2",{className:"max-w-5xl text-4xl leading-[.98] md:text-6xl lg:text-7xl",children:t.intro}),a.jsx("p",{className:"mt-7 max-w-3xl border-l border-primary/50 pl-5 text-lg leading-8 text-muted-foreground",children:t.summary}),a.jsxs("div",{className:"mt-8 flex flex-wrap gap-3",children:[a.jsx(X,{asChild:!0,children:a.jsxs("a",{href:`mailto:${ae.social.email}`,children:[a.jsx(Rf,{className:"mr-2 h-4 w-4"}),t.contact]})}),a.jsx(X,{asChild:!0,variant:"outline",children:a.jsxs("a",{href:ae.social.github,target:"_blank",rel:"noreferrer",children:["GitHub ",a.jsx($t,{className:"ml-2 h-4 w-4"})]})}),a.jsx(X,{asChild:!0,variant:"outline",children:a.jsxs("a",{href:ae.social.linkedin,target:"_blank",rel:"noreferrer",children:["LinkedIn ",a.jsx($t,{className:"ml-2 h-4 w-4"})]})})]}),a.jsx("div",{className:"mt-10 grid border-y border-border/70 sm:grid-cols-3",children:[["3.44/4.00","GPA"],["03/2026",t.experience],["03",t.cvLabel]].map(([n,r],i)=>a.jsxs("div",{className:`py-4 ${i?"border-t border-border/70 sm:border-l sm:border-t-0 sm:pl-5":""}`,children:[a.jsx("span",{className:"font-mono text-xl font-semibold text-primary",children:n}),a.jsx("span",{className:"ml-2 font-mono text-[11px] uppercase tracking-wider text-muted-foreground",children:r})]},r))})]})]})]})}),a.jsx("section",{className:"border-b border-border/70 bg-card/25 py-20",id:"cv-collection",children:a.jsxs("div",{className:"container mx-auto px-4",children:[a.jsx("p",{className:"eyebrow mb-4",children:t.cvLabel}),a.jsxs("div",{className:"mb-10 grid gap-5 md:grid-cols-[1fr_.7fr] md:items-end",children:[a.jsx("h2",{className:"text-4xl md:text-6xl",children:t.cvTitle}),a.jsx("p",{className:"text-muted-foreground",children:t.cvDesc})]}),a.jsx("div",{className:"grid gap-5 lg:grid-cols-3",children:gN.map((n,r)=>a.jsxs("article",{className:`journal-card flex min-h-[330px] flex-col p-6 ${n.featured?"border-primary/60 lg:-translate-y-3":""}`,children:[a.jsxs("div",{className:"flex items-start justify-between",children:[a.jsxs("span",{className:"font-mono text-4xl text-primary/60",children:["0",r+1]}),n.featured&&a.jsxs(at,{className:"gap-1",children:[a.jsx(Ts,{className:"h-3 w-3"}),t.primary]})]}),a.jsx("h3",{className:"mt-8 text-2xl",children:n.title[e]}),a.jsx("p",{className:"mt-3 text-sm leading-6 text-muted-foreground",children:n.description[e]}),a.jsx("div",{className:"mt-5 flex flex-wrap gap-2.5",children:n.stack.map(i=>a.jsx(at,{variant:"secondary",className:"min-h-7 px-3 py-1 font-mono text-[11px]",children:i},i))}),a.jsxs("div",{className:"mt-auto flex gap-2 border-t border-border/70 pt-5",children:[a.jsx(X,{asChild:!0,size:"sm",className:"flex-1",children:a.jsxs("a",{href:n.file,target:"_blank",rel:"noreferrer",children:[t.view,a.jsx(Ml,{className:"ml-2 h-3.5 w-3.5"})]})}),a.jsx(X,{asChild:!0,size:"sm",variant:"outline",children:a.jsxs("a",{href:n.file,download:!0,children:[a.jsx(i0,{className:"h-3.5 w-3.5"}),a.jsx("span",{className:"sr-only",children:t.download})]})})]})]},n.id))})]})}),a.jsx("section",{className:"border-b border-border/70 py-20",children:a.jsxs("div",{className:"container mx-auto grid gap-12 px-4 lg:grid-cols-[1.25fr_.75fr]",children:[a.jsxs("div",{children:[a.jsx("p",{className:"eyebrow mb-8",children:t.experience}),mN.map(n=>a.jsxs("article",{className:"journal-card p-7 md:p-9",children:[a.jsxs("div",{className:"flex flex-col justify-between gap-3 border-b border-border/70 pb-6 sm:flex-row",children:[a.jsxs("div",{children:[a.jsx("h2",{className:"text-2xl",children:n.role}),a.jsx("p",{className:"mt-1 text-primary",children:n.company})]}),a.jsx("span",{className:"font-mono text-xs uppercase tracking-wider text-muted-foreground",children:n.period})]}),a.jsx("p",{className:"mt-6 leading-7 text-muted-foreground",children:n.summary[e]}),a.jsx("div",{className:"mt-6 space-y-3",children:n.highlights[e].map(r=>a.jsxs("p",{className:"flex gap-3 text-sm text-muted-foreground",children:[a.jsx(jf,{className:"mt-0.5 h-4 w-4 shrink-0 text-primary"}),r]},r))})]},n.company))]}),a.jsxs("aside",{className:"space-y-5",children:[a.jsx("p",{className:"eyebrow mb-8",children:t.education}),a.jsxs("div",{className:"journal-card p-6",children:[a.jsx(s0,{className:"h-6 w-6 text-primary"}),a.jsx("h3",{className:"mt-5 text-xl",children:t.educationTitle}),a.jsx("p",{className:"mt-2 text-sm text-muted-foreground",children:t.school}),a.jsxs("div",{className:"mt-5 flex justify-between border-t border-border/70 pt-4 font-mono text-xs uppercase tracking-wider text-muted-foreground",children:[a.jsxs("span",{children:["2022 - ",t.present]}),a.jsx("span",{className:"text-primary",children:"GPA 3.44 / 4.00"})]})]}),a.jsxs("div",{className:"journal-card p-6",children:[a.jsx(Lf,{className:"h-5 w-5 text-primary"}),a.jsx("p",{className:"mt-4 text-sm text-muted-foreground",children:ae.address}),a.jsxs("div",{className:"mt-4 space-y-3 border-t border-border/70 pt-4 font-mono text-xs",children:[a.jsxs("a",{className:"block hover:text-primary",href:`mailto:${ae.social.email}`,children:[a.jsx("span",{className:"block text-[11px] uppercase tracking-wider text-muted-foreground",children:t.primaryEmail}),ae.social.email]}),a.jsxs("a",{className:"block hover:text-primary",href:`mailto:${ae.social.secondaryEmail}`,children:[a.jsx("span",{className:"block text-[11px] uppercase tracking-wider text-muted-foreground",children:t.secondaryEmail}),ae.social.secondaryEmail]})]})]})]})]})}),a.jsx("section",{className:"border-b border-border/70 bg-card/25 py-20",children:a.jsxs("div",{className:"container mx-auto px-4",children:[a.jsx("p",{className:"eyebrow mb-8",children:t.projects}),a.jsx("div",{className:"grid gap-5 md:grid-cols-2",children:fN.map(n=>a.jsxs("article",{className:"journal-card p-7",children:[a.jsxs("div",{className:"flex justify-between gap-3",children:[a.jsx("h3",{className:"text-2xl",children:n.title[e]}),a.jsx("span",{className:"font-mono text-xs text-primary",children:n.period})]}),a.jsx("p",{className:"mt-4 text-sm leading-7 text-muted-foreground",children:n.description[e]}),a.jsx("div",{className:"mt-5 flex flex-wrap gap-2",children:n.stack.map(r=>a.jsx(at,{variant:"secondary",children:r},r))}),a.jsxs("a",{href:n.github,target:"_blank",rel:"noreferrer",className:"mt-6 inline-flex items-center gap-2 font-mono text-xs text-primary",children:["GitHub repository ",a.jsx($t,{className:"h-3.5 w-3.5"})]})]},n.period))})]})}),a.jsx("section",{className:"py-20",children:a.jsxs("div",{className:"container mx-auto grid gap-12 px-4 lg:grid-cols-[1fr_1fr]",children:[a.jsxs("div",{children:[a.jsx("p",{className:"eyebrow mb-8",children:t.skills}),a.jsx("div",{className:"grid gap-4 sm:grid-cols-2",children:bN.map(n=>a.jsxs("div",{className:"journal-card p-5",children:[a.jsx("h3",{children:n.title}),a.jsx("div",{className:"mt-4 flex flex-wrap gap-2",children:n.items.map(r=>a.jsx(at,{variant:"secondary",children:r},r))})]},n.title))})]}),a.jsxs("div",{className:"grid gap-8 sm:grid-cols-2",children:[a.jsxs("div",{children:[a.jsx("p",{className:"eyebrow mb-8",children:t.awards}),a.jsx("div",{className:"space-y-3",children:yN.map(n=>a.jsxs("div",{className:"journal-card p-4",children:[a.jsx(Hk,{className:"h-4 w-4 text-primary"}),a.jsx("p",{className:"mt-3 text-sm",children:n[e]}),a.jsx("p",{className:"mt-2 font-mono text-xs text-muted-foreground",children:n.year})]},`${n.year}-${n.en}`))})]}),a.jsxs("div",{children:[a.jsx("p",{className:"eyebrow mb-8",children:t.certificates}),a.jsx("div",{className:"space-y-3",children:vN.map(n=>a.jsxs("div",{className:"journal-card p-4",children:[a.jsx(Qk,{className:"h-4 w-4 text-primary"}),a.jsx("p",{className:"mt-3 text-sm",children:n[e]}),a.jsx("p",{className:"mt-2 font-mono text-xs text-muted-foreground",children:n.year})]},n.en))})]})]})]})})]})},xN=()=>{const{language:e}=Ne(),t=Ct(),n=e==="vi",r={eyebrow:"HTTP / 404",title:n?"Trang này đã đi lạc khỏi bản đồ.":"This page drifted off the map.",description:n?"Đường dẫn bạn vừa mở không tồn tại hoặc đã được chuyển đi. Hãy quay về trang chính để tiếp tục khám phá.":"The route you opened does not exist or has moved. Head back home and keep exploring.",home:n?"Về trang chủ":"Back home",back:n?"Quay lại":"Go back",currentRoute:n?"Đường dẫn hiện tại":"Current route",signal:n?"Không tìm thấy tín hiệu":"No signal found",hint:n?"Gợi ý: kiểm tra lại URL hoặc dùng menu điều hướng.":"Tip: check the URL or use the navigation menu."};return g.useEffect(()=>{console.error("404 Error: User attempted to access non-existent route:",t.pathname)},[t.pathname]),a.jsxs("main",{className:"relative flex h-dvh min-h-[620px] overflow-hidden bg-background text-foreground",children:[a.jsx("div",{className:"page-grid pointer-events-none absolute inset-0 opacity-70"}),a.jsx("div",{className:"pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,hsl(var(--primary)/0.18),transparent_24rem),radial-gradient(circle_at_84%_72%,hsl(var(--accent)/0.14),transparent_24rem)]"}),a.jsx("div",{className:"pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background via-background/70 to-transparent"}),a.jsxs("div",{className:"container relative z-10 mx-auto grid h-full items-center gap-8 px-4 py-6 md:grid-cols-[0.95fr_1.05fr] md:px-8",children:[a.jsxs("section",{className:"mx-auto w-full max-w-xl",children:[a.jsxs("div",{className:"mb-5 inline-flex items-center gap-2 rounded-md border border-border/70 bg-card/70 px-3 py-2 font-mono text-[11px] font-semibold uppercase text-primary shadow-sm backdrop-blur",children:[a.jsx(Ts,{className:"h-3.5 w-3.5"}),r.eyebrow]}),a.jsxs("h1",{className:"text-balance text-5xl font-bold leading-[0.95] sm:text-6xl lg:text-7xl",children:[a.jsx("span",{className:"block text-gradient",children:"404"}),a.jsx("span",{className:"mt-2 block",children:r.title})]}),a.jsx("p",{className:"mt-5 max-w-lg text-base leading-7 text-muted-foreground sm:text-lg",children:r.description}),a.jsxs("div",{className:"mt-7 flex flex-wrap gap-3",children:[a.jsx(X,{asChild:!0,size:"lg",className:"shadow-[0_18px_40px_hsl(var(--primary)/0.18)]",children:a.jsxs(be,{to:"/",children:[a.jsx(c0,{className:"h-4 w-4"}),r.home]})}),a.jsxs(X,{size:"lg",variant:"outline",onClick:()=>window.history.back(),children:[a.jsx(Rl,{className:"h-4 w-4"}),r.back]})]}),a.jsx("div",{className:"mt-7 rounded-md border border-border/70 bg-card/60 p-4 backdrop-blur",children:a.jsxs("div",{className:"flex items-start gap-3",children:[a.jsx(v0,{className:"mt-0.5 h-5 w-5 text-accent"}),a.jsxs("div",{className:"min-w-0",children:[a.jsx("p",{className:"font-mono text-[11px] uppercase text-muted-foreground",children:r.currentRoute}),a.jsx("p",{className:"mt-1 truncate font-mono text-sm text-foreground",children:t.pathname})]})]})})]}),a.jsxs("section",{className:"relative mx-auto hidden aspect-square w-full max-w-[540px] items-center justify-center md:flex",children:[a.jsx("div",{className:"absolute inset-8 rounded-full border border-primary/15"}),a.jsx("div",{className:"absolute inset-20 rounded-full border border-accent/20"}),a.jsx("div",{className:"absolute h-[72%] w-[72%] animate-[orbitSpin_28s_linear_infinite] rounded-full border border-dashed border-border/80"}),a.jsx("div",{className:"absolute left-[12%] top-[22%] rounded-md border border-border/70 bg-card/80 px-3 py-2 font-mono text-[10px] uppercase text-muted-foreground shadow-sm backdrop-blur",children:"route.scan()"}),a.jsx("div",{className:"absolute bottom-[18%] right-[8%] rounded-md border border-primary/20 bg-primary/10 px-3 py-2 font-mono text-[10px] uppercase text-primary shadow-sm backdrop-blur",children:"fallback.ready"}),a.jsxs("div",{className:"relative flex h-72 w-72 items-center justify-center rounded-full border border-border/80 bg-card/70 shadow-[0_32px_100px_hsl(var(--foreground)/0.14)] backdrop-blur-xl",children:[a.jsx("div",{className:"absolute inset-6 rounded-full border border-primary/20 bg-[radial-gradient(circle,hsl(var(--primary)/0.16),transparent_58%)]"}),a.jsx("div",{className:"absolute h-4 w-4 animate-[particleBlink_3s_ease-in-out_infinite] rounded-full bg-primary shadow-[0_0_30px_hsl(var(--primary)/0.65)]"}),a.jsxs("div",{className:"relative grid place-items-center text-center",children:[a.jsx(n0,{className:"mb-5 h-16 w-16 text-primary"}),a.jsx("p",{className:"font-mono text-xs uppercase tracking-[0.24em] text-muted-foreground",children:r.signal}),a.jsx("p",{className:"mt-3 max-w-44 text-sm leading-6 text-muted-foreground",children:r.hint})]})]})]})]})]})},wr=({children:e})=>{const t=qn();return a.jsx(xe.div,{initial:t?{opacity:0}:"initial",animate:t?{opacity:1}:"animate",exit:t?{opacity:0}:"exit",variants:eS,children:e})},kN=()=>{const{language:e}=Ne(),t=qn(),[n,r]=g.useState(0),[i,o]=g.useState(!1);g.useEffect(()=>{let l=0;const u=()=>{l=0;const d=window.scrollY||document.documentElement.scrollTop,p=document.documentElement.scrollHeight-window.innerHeight,v=p>0?Math.min(d/p,1):0;r(v),o(d>Math.min(520,window.innerHeight*.62))},h=()=>{l||(l=window.requestAnimationFrame(u))};return u(),window.addEventListener("scroll",h,{passive:!0}),window.addEventListener("resize",h),()=>{l&&window.cancelAnimationFrame(l),window.removeEventListener("scroll",h),window.removeEventListener("resize",h)}},[]);const s=e==="vi"?"Cuộn lên đầu trang":"Scroll to top",c=()=>{window.scrollTo({top:0,behavior:t?"auto":"smooth"})};return a.jsx(xe.div,{className:"fixed bottom-4 right-[4.75rem] z-[60] md:right-20",initial:!1,animate:i?{opacity:1,y:0,scale:1,pointerEvents:"auto"}:{opacity:0,y:14,scale:.92,pointerEvents:"none"},transition:{duration:t?0:.24,ease:[.22,1,.36,1]},children:a.jsxs(Ty,{children:[a.jsx(Cy,{asChild:!0,children:a.jsxs(X,{type:"button",variant:"outline",size:"icon","aria-label":s,onClick:c,className:"group relative h-12 w-12 overflow-hidden rounded-full border-primary/35 bg-background/85 text-foreground shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/70 hover:bg-primary/10 hover:text-primary focus-visible:ring-primary/60",style:{backgroundImage:`conic-gradient(hsl(var(--primary)) ${n*360}deg, hsl(var(--border) / 0.32) 0deg)`},children:[a.jsx("span",{className:"absolute inset-[3px] rounded-full bg-background/94 shadow-inner"}),a.jsx("span",{className:"absolute inset-x-3 top-2 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-70"}),a.jsx("span",{className:"relative flex h-7 w-7 items-center justify-center rounded-full border border-primary/25 bg-primary/[.07] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-105",children:a.jsx(zk,{className:"h-4 w-4"})}),a.jsx("span",{className:"sr-only",children:s})]})}),a.jsx(lh,{side:"left",className:"font-mono text-xs uppercase tracking-[.12em]",children:s})]})})},TN=new fC;function CN(){const e=Ct();return a.jsxs(WC,{attribute:"class",defaultTheme:"system",enableSystem:!0,storageKey:"haiit-theme",children:[a.jsx(YC,{}),a.jsx(IC,{children:a.jsx(vC,{client:TN,children:a.jsx(KT,{children:a.jsxs(PC,{children:[a.jsx(a1,{}),a.jsx(VC,{}),a.jsx(EC,{}),a.jsxs(gv,{features:mv,strict:!0,children:[a.jsx(kN,{}),a.jsx(fv,{mode:"wait",initial:!1,children:a.jsxs(Ex,{location:e,children:[a.jsx(Gn,{path:"/",element:a.jsx(wr,{children:a.jsx(GS,{})})}),a.jsx(Gn,{path:"/blog",element:a.jsx(wr,{children:a.jsx(eN,{})})}),a.jsx(Gn,{path:"/blog/:id",element:a.jsx(wr,{children:a.jsx(dN,{})})}),a.jsx(Gn,{path:"/projects",element:a.jsx(wr,{children:a.jsx(pN,{})})}),a.jsx(Gn,{path:"/about",element:a.jsx(wr,{children:a.jsx(wN,{})})}),a.jsx(Gn,{path:"*",element:a.jsx(wr,{children:a.jsx(xN,{})})})]},e.pathname)})]})]})})})})]})}const SN=new URLSearchParams(window.location.search),Rp=SN.get("redirect");Rp&&window.history.replaceState(null,"",Rp);zm(document.getElementById("root")).render(a.jsx(Ux,{children:a.jsx(CN,{})}));
