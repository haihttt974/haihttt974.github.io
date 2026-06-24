var Qu=e=>{throw TypeError(e)};var gc=(e,t,n)=>t.has(e)||Qu("Cannot "+n);var I=(e,t,n)=>(gc(e,t,"read from private field"),n?n.call(e):t.get(e)),ie=(e,t,n)=>t.has(e)?Qu("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),K=(e,t,n,r)=>(gc(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n),_e=(e,t,n)=>(gc(e,t,"access private method"),n);var no=(e,t,n,r)=>({set _(i){K(e,t,i,n)},get _(){return I(e,t,r)}});import{r as m,g as Zv,R as Ih,j as o,a as sr,u as tr,m as Ee,L as eb,d as tb,A as nb}from"./motion-DrBT6qPh.js";import{S as rb,P as ib,W as ab,a as ob,A as sb,b as cb,D as lb,c as Yu,G as Sg,M as ma,T as hb,d as jh,I as ub,L as fa,E as $o,e as Ko,B as db,f as pb,g as Xu,h as gb,C as mb,i as Ju,j as fb,k as yb,O as vb,l as bb,m as wb,V as xb}from"./three-DfGjiPv-.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();var Pg={exports:{}},pt={},Ag={exports:{}},Ng={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(N,M){var F=N.length;N.push(M);e:for(;0<F;){var V=F-1>>>1,z=N[V];if(0<i(z,M))N[V]=M,N[F]=z,F=V;else break e}}function n(N){return N.length===0?null:N[0]}function r(N){if(N.length===0)return null;var M=N[0],F=N.pop();if(F!==M){N[0]=F;e:for(var V=0,z=N.length,Ge=z>>>1;V<Ge;){var ge=2*(V+1)-1,Je=N[ge],We=ge+1,ft=N[We];if(0>i(Je,F))We<z&&0>i(ft,Je)?(N[V]=ft,N[We]=F,V=We):(N[V]=Je,N[ge]=F,V=ge);else if(We<z&&0>i(ft,F))N[V]=ft,N[We]=F,V=We;else break e}}return M}function i(N,M){var F=N.sortIndex-M.sortIndex;return F!==0?F:N.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var s=Date,c=s.now();e.unstable_now=function(){return s.now()-c}}var l=[],h=[],u=1,d=null,p=3,v=!1,x=!1,b=!1,k=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(N){for(var M=n(h);M!==null;){if(M.callback===null)r(h);else if(M.startTime<=N)r(h),M.sortIndex=M.expirationTime,t(l,M);else break;M=n(h)}}function w(N){if(b=!1,y(N),!x)if(n(l)!==null)x=!0,G(T);else{var M=n(h);M!==null&&W(w,M.startTime-N)}}function T(N,M){x=!1,b&&(b=!1,f(S),S=-1),v=!0;var F=p;try{for(y(M),d=n(l);d!==null&&(!(d.expirationTime>M)||N&&!q());){var V=d.callback;if(typeof V=="function"){d.callback=null,p=d.priorityLevel;var z=V(d.expirationTime<=M);M=e.unstable_now(),typeof z=="function"?d.callback=z:d===n(l)&&r(l),y(M)}else r(l);d=n(l)}if(d!==null)var Ge=!0;else{var ge=n(h);ge!==null&&W(w,ge.startTime-M),Ge=!1}return Ge}finally{d=null,p=F,v=!1}}var C=!1,P=null,S=-1,A=5,j=-1;function q(){return!(e.unstable_now()-j<A)}function D(){if(P!==null){var N=e.unstable_now();j=N;var M=!0;try{M=P(!0,N)}finally{M?J():(C=!1,P=null)}}else C=!1}var J;if(typeof g=="function")J=function(){g(D)};else if(typeof MessageChannel<"u"){var O=new MessageChannel,Q=O.port2;O.port1.onmessage=D,J=function(){Q.postMessage(null)}}else J=function(){k(D,0)};function G(N){P=N,C||(C=!0,J())}function W(N,M){S=k(function(){N(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(N){N.callback=null},e.unstable_continueExecution=function(){x||v||(x=!0,G(T))},e.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<N?Math.floor(1e3/N):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(N){switch(p){case 1:case 2:case 3:var M=3;break;default:M=p}var F=p;p=M;try{return N()}finally{p=F}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(N,M){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var F=p;p=N;try{return M()}finally{p=F}},e.unstable_scheduleCallback=function(N,M,F){var V=e.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?V+F:V):F=V,N){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=F+z,N={id:u++,callback:M,priorityLevel:N,startTime:F,expirationTime:z,sortIndex:-1},F>V?(N.sortIndex=F,t(h,N),n(l)===null&&N===n(h)&&(b?(f(S),S=-1):b=!0,W(w,F-V))):(N.sortIndex=z,t(l,N),x||v||(x=!0,G(T))),N},e.unstable_shouldYield=q,e.unstable_wrapCallback=function(N){var M=p;return function(){var F=p;p=M;try{return N.apply(this,arguments)}finally{p=F}}}})(Ng);Ag.exports=Ng;var kb=Ag.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tb=m,dt=kb;function L(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ig=new Set,ya={};function Rr(e,t){wi(e,t),wi(e+"Capture",t)}function wi(e,t){for(ya[e]=t,e=0;e<t.length;e++)Ig.add(t[e])}var dn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ll=Object.prototype.hasOwnProperty,Cb=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Zu={},ed={};function Sb(e){return ll.call(ed,e)?!0:ll.call(Zu,e)?!1:Cb.test(e)?ed[e]=!0:(Zu[e]=!0,!1)}function Pb(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ab(e,t,n,r){if(t===null||typeof t>"u"||Pb(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Xe(e,t,n,r,i,a,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=s}var Oe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Oe[e]=new Xe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Oe[t]=new Xe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Oe[e]=new Xe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Oe[e]=new Xe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Oe[e]=new Xe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Oe[e]=new Xe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Oe[e]=new Xe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Oe[e]=new Xe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Oe[e]=new Xe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Eh=/[\-:]([a-z])/g;function Rh(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Eh,Rh);Oe[t]=new Xe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Eh,Rh);Oe[t]=new Xe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Eh,Rh);Oe[t]=new Xe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Oe[e]=new Xe(e,1,!1,e.toLowerCase(),null,!1,!1)});Oe.xlinkHref=new Xe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Oe[e]=new Xe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Lh(e,t,n,r){var i=Oe.hasOwnProperty(t)?Oe[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Ab(t,n,i,r)&&(n=null),r||i===null?Sb(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var bn=Tb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ro=Symbol.for("react.element"),Hr=Symbol.for("react.portal"),Gr=Symbol.for("react.fragment"),Dh=Symbol.for("react.strict_mode"),hl=Symbol.for("react.profiler"),jg=Symbol.for("react.provider"),Eg=Symbol.for("react.context"),Mh=Symbol.for("react.forward_ref"),ul=Symbol.for("react.suspense"),dl=Symbol.for("react.suspense_list"),qh=Symbol.for("react.memo"),In=Symbol.for("react.lazy"),Rg=Symbol.for("react.offscreen"),td=Symbol.iterator;function zi(e){return e===null||typeof e!="object"?null:(e=td&&e[td]||e["@@iterator"],typeof e=="function"?e:null)}var ve=Object.assign,mc;function ta(e){if(mc===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);mc=t&&t[1]||""}return`
`+mc+e}var fc=!1;function yc(e,t){if(!e||fc)return"";fc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(h){var r=h}Reflect.construct(e,[],t)}else{try{t.call()}catch(h){r=h}e.call(t.prototype)}else{try{throw Error()}catch(h){r=h}e()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),a=r.stack.split(`
`),s=i.length-1,c=a.length-1;1<=s&&0<=c&&i[s]!==a[c];)c--;for(;1<=s&&0<=c;s--,c--)if(i[s]!==a[c]){if(s!==1||c!==1)do if(s--,c--,0>c||i[s]!==a[c]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=c);break}}}finally{fc=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ta(e):""}function Nb(e){switch(e.tag){case 5:return ta(e.type);case 16:return ta("Lazy");case 13:return ta("Suspense");case 19:return ta("SuspenseList");case 0:case 2:case 15:return e=yc(e.type,!1),e;case 11:return e=yc(e.type.render,!1),e;case 1:return e=yc(e.type,!0),e;default:return""}}function pl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Gr:return"Fragment";case Hr:return"Portal";case hl:return"Profiler";case Dh:return"StrictMode";case ul:return"Suspense";case dl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Eg:return(e.displayName||"Context")+".Consumer";case jg:return(e._context.displayName||"Context")+".Provider";case Mh:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case qh:return t=e.displayName||null,t!==null?t:pl(e.type)||"Memo";case In:t=e._payload,e=e._init;try{return pl(e(t))}catch{}}return null}function Ib(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pl(t);case 8:return t===Dh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Xn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Lg(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function jb(e){var t=Lg(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,a.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function io(e){e._valueTracker||(e._valueTracker=jb(e))}function Dg(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Lg(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Qo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function gl(e,t){var n=t.checked;return ve({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function nd(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Xn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Mg(e,t){t=t.checked,t!=null&&Lh(e,"checked",t,!1)}function ml(e,t){Mg(e,t);var n=Xn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?fl(e,t.type,n):t.hasOwnProperty("defaultValue")&&fl(e,t.type,Xn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function rd(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function fl(e,t,n){(t!=="number"||Qo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var na=Array.isArray;function ri(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Xn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function yl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(L(91));return ve({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function id(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(L(92));if(na(n)){if(1<n.length)throw Error(L(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Xn(n)}}function qg(e,t){var n=Xn(t.value),r=Xn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ad(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Og(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function vl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Og(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ao,Ug=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ao=ao||document.createElement("div"),ao.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ao.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function va(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var aa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Eb=["Webkit","ms","Moz","O"];Object.keys(aa).forEach(function(e){Eb.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),aa[t]=aa[e]})});function _g(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||aa.hasOwnProperty(e)&&aa[e]?(""+t).trim():t+"px"}function Fg(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=_g(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Rb=ve({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function bl(e,t){if(t){if(Rb[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(L(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(L(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(L(61))}if(t.style!=null&&typeof t.style!="object")throw Error(L(62))}}function wl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xl=null;function Oh(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var kl=null,ii=null,ai=null;function od(e){if(e=$a(e)){if(typeof kl!="function")throw Error(L(280));var t=e.stateNode;t&&(t=Ms(t),kl(e.stateNode,e.type,t))}}function Bg(e){ii?ai?ai.push(e):ai=[e]:ii=e}function Vg(){if(ii){var e=ii,t=ai;if(ai=ii=null,od(e),t)for(e=0;e<t.length;e++)od(t[e])}}function zg(e,t){return e(t)}function Hg(){}var vc=!1;function Gg(e,t,n){if(vc)return e(t,n);vc=!0;try{return zg(e,t,n)}finally{vc=!1,(ii!==null||ai!==null)&&(Hg(),Vg())}}function ba(e,t){var n=e.stateNode;if(n===null)return null;var r=Ms(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(L(231,t,typeof n));return n}var Tl=!1;if(dn)try{var Hi={};Object.defineProperty(Hi,"passive",{get:function(){Tl=!0}}),window.addEventListener("test",Hi,Hi),window.removeEventListener("test",Hi,Hi)}catch{Tl=!1}function Lb(e,t,n,r,i,a,s,c,l){var h=Array.prototype.slice.call(arguments,3);try{t.apply(n,h)}catch(u){this.onError(u)}}var oa=!1,Yo=null,Xo=!1,Cl=null,Db={onError:function(e){oa=!0,Yo=e}};function Mb(e,t,n,r,i,a,s,c,l){oa=!1,Yo=null,Lb.apply(Db,arguments)}function qb(e,t,n,r,i,a,s,c,l){if(Mb.apply(this,arguments),oa){if(oa){var h=Yo;oa=!1,Yo=null}else throw Error(L(198));Xo||(Xo=!0,Cl=h)}}function Lr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Wg(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function sd(e){if(Lr(e)!==e)throw Error(L(188))}function Ob(e){var t=e.alternate;if(!t){if(t=Lr(e),t===null)throw Error(L(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return sd(i),e;if(a===r)return sd(i),t;a=a.sibling}throw Error(L(188))}if(n.return!==r.return)n=i,r=a;else{for(var s=!1,c=i.child;c;){if(c===n){s=!0,n=i,r=a;break}if(c===r){s=!0,r=i,n=a;break}c=c.sibling}if(!s){for(c=a.child;c;){if(c===n){s=!0,n=a,r=i;break}if(c===r){s=!0,r=a,n=i;break}c=c.sibling}if(!s)throw Error(L(189))}}if(n.alternate!==r)throw Error(L(190))}if(n.tag!==3)throw Error(L(188));return n.stateNode.current===n?e:t}function $g(e){return e=Ob(e),e!==null?Kg(e):null}function Kg(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Kg(e);if(t!==null)return t;e=e.sibling}return null}var Qg=dt.unstable_scheduleCallback,cd=dt.unstable_cancelCallback,Ub=dt.unstable_shouldYield,_b=dt.unstable_requestPaint,xe=dt.unstable_now,Fb=dt.unstable_getCurrentPriorityLevel,Uh=dt.unstable_ImmediatePriority,Yg=dt.unstable_UserBlockingPriority,Jo=dt.unstable_NormalPriority,Bb=dt.unstable_LowPriority,Xg=dt.unstable_IdlePriority,Es=null,Qt=null;function Vb(e){if(Qt&&typeof Qt.onCommitFiberRoot=="function")try{Qt.onCommitFiberRoot(Es,e,void 0,(e.current.flags&128)===128)}catch{}}var Lt=Math.clz32?Math.clz32:Gb,zb=Math.log,Hb=Math.LN2;function Gb(e){return e>>>=0,e===0?32:31-(zb(e)/Hb|0)|0}var oo=64,so=4194304;function ra(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Zo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,s=n&268435455;if(s!==0){var c=s&~i;c!==0?r=ra(c):(a&=s,a!==0&&(r=ra(a)))}else s=n&~i,s!==0?r=ra(s):a!==0&&(r=ra(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Lt(t),i=1<<n,r|=e[n],t&=~i;return r}function Wb(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $b(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var s=31-Lt(a),c=1<<s,l=i[s];l===-1?(!(c&n)||c&r)&&(i[s]=Wb(c,t)):l<=t&&(e.expiredLanes|=c),a&=~c}}function Sl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Jg(){var e=oo;return oo<<=1,!(oo&4194240)&&(oo=64),e}function bc(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ga(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Lt(t),e[t]=n}function Kb(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Lt(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function _h(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Lt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var oe=0;function Zg(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var em,Fh,tm,nm,rm,Pl=!1,co=[],Bn=null,Vn=null,zn=null,wa=new Map,xa=new Map,En=[],Qb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ld(e,t){switch(e){case"focusin":case"focusout":Bn=null;break;case"dragenter":case"dragleave":Vn=null;break;case"mouseover":case"mouseout":zn=null;break;case"pointerover":case"pointerout":wa.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":xa.delete(t.pointerId)}}function Gi(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=$a(t),t!==null&&Fh(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Yb(e,t,n,r,i){switch(t){case"focusin":return Bn=Gi(Bn,e,t,n,r,i),!0;case"dragenter":return Vn=Gi(Vn,e,t,n,r,i),!0;case"mouseover":return zn=Gi(zn,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return wa.set(a,Gi(wa.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,xa.set(a,Gi(xa.get(a)||null,e,t,n,r,i)),!0}return!1}function im(e){var t=dr(e.target);if(t!==null){var n=Lr(t);if(n!==null){if(t=n.tag,t===13){if(t=Wg(n),t!==null){e.blockedOn=t,rm(e.priority,function(){tm(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function jo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Al(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);xl=r,n.target.dispatchEvent(r),xl=null}else return t=$a(n),t!==null&&Fh(t),e.blockedOn=n,!1;t.shift()}return!0}function hd(e,t,n){jo(e)&&n.delete(t)}function Xb(){Pl=!1,Bn!==null&&jo(Bn)&&(Bn=null),Vn!==null&&jo(Vn)&&(Vn=null),zn!==null&&jo(zn)&&(zn=null),wa.forEach(hd),xa.forEach(hd)}function Wi(e,t){e.blockedOn===t&&(e.blockedOn=null,Pl||(Pl=!0,dt.unstable_scheduleCallback(dt.unstable_NormalPriority,Xb)))}function ka(e){function t(i){return Wi(i,e)}if(0<co.length){Wi(co[0],e);for(var n=1;n<co.length;n++){var r=co[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Bn!==null&&Wi(Bn,e),Vn!==null&&Wi(Vn,e),zn!==null&&Wi(zn,e),wa.forEach(t),xa.forEach(t),n=0;n<En.length;n++)r=En[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<En.length&&(n=En[0],n.blockedOn===null);)im(n),n.blockedOn===null&&En.shift()}var oi=bn.ReactCurrentBatchConfig,es=!0;function Jb(e,t,n,r){var i=oe,a=oi.transition;oi.transition=null;try{oe=1,Bh(e,t,n,r)}finally{oe=i,oi.transition=a}}function Zb(e,t,n,r){var i=oe,a=oi.transition;oi.transition=null;try{oe=4,Bh(e,t,n,r)}finally{oe=i,oi.transition=a}}function Bh(e,t,n,r){if(es){var i=Al(e,t,n,r);if(i===null)Ic(e,t,r,ts,n),ld(e,r);else if(Yb(i,e,t,n,r))r.stopPropagation();else if(ld(e,r),t&4&&-1<Qb.indexOf(e)){for(;i!==null;){var a=$a(i);if(a!==null&&em(a),a=Al(e,t,n,r),a===null&&Ic(e,t,r,ts,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Ic(e,t,r,null,n)}}var ts=null;function Al(e,t,n,r){if(ts=null,e=Oh(r),e=dr(e),e!==null)if(t=Lr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Wg(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ts=e,null}function am(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Fb()){case Uh:return 1;case Yg:return 4;case Jo:case Bb:return 16;case Xg:return 536870912;default:return 16}default:return 16}}var Un=null,Vh=null,Eo=null;function om(){if(Eo)return Eo;var e,t=Vh,n=t.length,r,i="value"in Un?Un.value:Un.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[a-r];r++);return Eo=i.slice(e,1<r?1-r:void 0)}function Ro(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function lo(){return!0}function ud(){return!1}function gt(e){function t(n,r,i,a,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=a,this.target=s,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(n=e[c],this[c]=n?n(a):a[c]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?lo:ud,this.isPropagationStopped=ud,this}return ve(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=lo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=lo)},persist:function(){},isPersistent:lo}),t}var Mi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zh=gt(Mi),Wa=ve({},Mi,{view:0,detail:0}),ew=gt(Wa),wc,xc,$i,Rs=ve({},Wa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hh,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==$i&&($i&&e.type==="mousemove"?(wc=e.screenX-$i.screenX,xc=e.screenY-$i.screenY):xc=wc=0,$i=e),wc)},movementY:function(e){return"movementY"in e?e.movementY:xc}}),dd=gt(Rs),tw=ve({},Rs,{dataTransfer:0}),nw=gt(tw),rw=ve({},Wa,{relatedTarget:0}),kc=gt(rw),iw=ve({},Mi,{animationName:0,elapsedTime:0,pseudoElement:0}),aw=gt(iw),ow=ve({},Mi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),sw=gt(ow),cw=ve({},Mi,{data:0}),pd=gt(cw),lw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},uw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dw(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=uw[e])?!!t[e]:!1}function Hh(){return dw}var pw=ve({},Wa,{key:function(e){if(e.key){var t=lw[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ro(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?hw[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hh,charCode:function(e){return e.type==="keypress"?Ro(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ro(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),gw=gt(pw),mw=ve({},Rs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gd=gt(mw),fw=ve({},Wa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hh}),yw=gt(fw),vw=ve({},Mi,{propertyName:0,elapsedTime:0,pseudoElement:0}),bw=gt(vw),ww=ve({},Rs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),xw=gt(ww),kw=[9,13,27,32],Gh=dn&&"CompositionEvent"in window,sa=null;dn&&"documentMode"in document&&(sa=document.documentMode);var Tw=dn&&"TextEvent"in window&&!sa,sm=dn&&(!Gh||sa&&8<sa&&11>=sa),md=" ",fd=!1;function cm(e,t){switch(e){case"keyup":return kw.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function lm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Wr=!1;function Cw(e,t){switch(e){case"compositionend":return lm(t);case"keypress":return t.which!==32?null:(fd=!0,md);case"textInput":return e=t.data,e===md&&fd?null:e;default:return null}}function Sw(e,t){if(Wr)return e==="compositionend"||!Gh&&cm(e,t)?(e=om(),Eo=Vh=Un=null,Wr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return sm&&t.locale!=="ko"?null:t.data;default:return null}}var Pw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Pw[e.type]:t==="textarea"}function hm(e,t,n,r){Bg(r),t=ns(t,"onChange"),0<t.length&&(n=new zh("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ca=null,Ta=null;function Aw(e){xm(e,0)}function Ls(e){var t=Qr(e);if(Dg(t))return e}function Nw(e,t){if(e==="change")return t}var um=!1;if(dn){var Tc;if(dn){var Cc="oninput"in document;if(!Cc){var vd=document.createElement("div");vd.setAttribute("oninput","return;"),Cc=typeof vd.oninput=="function"}Tc=Cc}else Tc=!1;um=Tc&&(!document.documentMode||9<document.documentMode)}function bd(){ca&&(ca.detachEvent("onpropertychange",dm),Ta=ca=null)}function dm(e){if(e.propertyName==="value"&&Ls(Ta)){var t=[];hm(t,Ta,e,Oh(e)),Gg(Aw,t)}}function Iw(e,t,n){e==="focusin"?(bd(),ca=t,Ta=n,ca.attachEvent("onpropertychange",dm)):e==="focusout"&&bd()}function jw(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ls(Ta)}function Ew(e,t){if(e==="click")return Ls(t)}function Rw(e,t){if(e==="input"||e==="change")return Ls(t)}function Lw(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Mt=typeof Object.is=="function"?Object.is:Lw;function Ca(e,t){if(Mt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ll.call(t,i)||!Mt(e[i],t[i]))return!1}return!0}function wd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function xd(e,t){var n=wd(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=wd(n)}}function pm(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?pm(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function gm(){for(var e=window,t=Qo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Qo(e.document)}return t}function Wh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Dw(e){var t=gm(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&pm(n.ownerDocument.documentElement,n)){if(r!==null&&Wh(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=xd(n,a);var s=xd(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Mw=dn&&"documentMode"in document&&11>=document.documentMode,$r=null,Nl=null,la=null,Il=!1;function kd(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Il||$r==null||$r!==Qo(r)||(r=$r,"selectionStart"in r&&Wh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),la&&Ca(la,r)||(la=r,r=ns(Nl,"onSelect"),0<r.length&&(t=new zh("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=$r)))}function ho(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Kr={animationend:ho("Animation","AnimationEnd"),animationiteration:ho("Animation","AnimationIteration"),animationstart:ho("Animation","AnimationStart"),transitionend:ho("Transition","TransitionEnd")},Sc={},mm={};dn&&(mm=document.createElement("div").style,"AnimationEvent"in window||(delete Kr.animationend.animation,delete Kr.animationiteration.animation,delete Kr.animationstart.animation),"TransitionEvent"in window||delete Kr.transitionend.transition);function Ds(e){if(Sc[e])return Sc[e];if(!Kr[e])return e;var t=Kr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in mm)return Sc[e]=t[n];return e}var fm=Ds("animationend"),ym=Ds("animationiteration"),vm=Ds("animationstart"),bm=Ds("transitionend"),wm=new Map,Td="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function nr(e,t){wm.set(e,t),Rr(t,[e])}for(var Pc=0;Pc<Td.length;Pc++){var Ac=Td[Pc],qw=Ac.toLowerCase(),Ow=Ac[0].toUpperCase()+Ac.slice(1);nr(qw,"on"+Ow)}nr(fm,"onAnimationEnd");nr(ym,"onAnimationIteration");nr(vm,"onAnimationStart");nr("dblclick","onDoubleClick");nr("focusin","onFocus");nr("focusout","onBlur");nr(bm,"onTransitionEnd");wi("onMouseEnter",["mouseout","mouseover"]);wi("onMouseLeave",["mouseout","mouseover"]);wi("onPointerEnter",["pointerout","pointerover"]);wi("onPointerLeave",["pointerout","pointerover"]);Rr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Rr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Rr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Rr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Rr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Rr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ia="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Uw=new Set("cancel close invalid load scroll toggle".split(" ").concat(ia));function Cd(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,qb(r,t,void 0,e),e.currentTarget=null}function xm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var s=r.length-1;0<=s;s--){var c=r[s],l=c.instance,h=c.currentTarget;if(c=c.listener,l!==a&&i.isPropagationStopped())break e;Cd(i,c,h),a=l}else for(s=0;s<r.length;s++){if(c=r[s],l=c.instance,h=c.currentTarget,c=c.listener,l!==a&&i.isPropagationStopped())break e;Cd(i,c,h),a=l}}}if(Xo)throw e=Cl,Xo=!1,Cl=null,e}function le(e,t){var n=t[Dl];n===void 0&&(n=t[Dl]=new Set);var r=e+"__bubble";n.has(r)||(km(t,e,2,!1),n.add(r))}function Nc(e,t,n){var r=0;t&&(r|=4),km(n,e,r,t)}var uo="_reactListening"+Math.random().toString(36).slice(2);function Sa(e){if(!e[uo]){e[uo]=!0,Ig.forEach(function(n){n!=="selectionchange"&&(Uw.has(n)||Nc(n,!1,e),Nc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[uo]||(t[uo]=!0,Nc("selectionchange",!1,t))}}function km(e,t,n,r){switch(am(t)){case 1:var i=Jb;break;case 4:i=Zb;break;default:i=Bh}n=i.bind(null,t,n,e),i=void 0,!Tl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ic(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i||c.nodeType===8&&c.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;c!==null;){if(s=dr(c),s===null)return;if(l=s.tag,l===5||l===6){r=a=s;continue e}c=c.parentNode}}r=r.return}Gg(function(){var h=a,u=Oh(n),d=[];e:{var p=wm.get(e);if(p!==void 0){var v=zh,x=e;switch(e){case"keypress":if(Ro(n)===0)break e;case"keydown":case"keyup":v=gw;break;case"focusin":x="focus",v=kc;break;case"focusout":x="blur",v=kc;break;case"beforeblur":case"afterblur":v=kc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=dd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=nw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=yw;break;case fm:case ym:case vm:v=aw;break;case bm:v=bw;break;case"scroll":v=ew;break;case"wheel":v=xw;break;case"copy":case"cut":case"paste":v=sw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=gd}var b=(t&4)!==0,k=!b&&e==="scroll",f=b?p!==null?p+"Capture":null:p;b=[];for(var g=h,y;g!==null;){y=g;var w=y.stateNode;if(y.tag===5&&w!==null&&(y=w,f!==null&&(w=ba(g,f),w!=null&&b.push(Pa(g,w,y)))),k)break;g=g.return}0<b.length&&(p=new v(p,x,null,n,u),d.push({event:p,listeners:b}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",p&&n!==xl&&(x=n.relatedTarget||n.fromElement)&&(dr(x)||x[pn]))break e;if((v||p)&&(p=u.window===u?u:(p=u.ownerDocument)?p.defaultView||p.parentWindow:window,v?(x=n.relatedTarget||n.toElement,v=h,x=x?dr(x):null,x!==null&&(k=Lr(x),x!==k||x.tag!==5&&x.tag!==6)&&(x=null)):(v=null,x=h),v!==x)){if(b=dd,w="onMouseLeave",f="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(b=gd,w="onPointerLeave",f="onPointerEnter",g="pointer"),k=v==null?p:Qr(v),y=x==null?p:Qr(x),p=new b(w,g+"leave",v,n,u),p.target=k,p.relatedTarget=y,w=null,dr(u)===h&&(b=new b(f,g+"enter",x,n,u),b.target=y,b.relatedTarget=k,w=b),k=w,v&&x)t:{for(b=v,f=x,g=0,y=b;y;y=Ur(y))g++;for(y=0,w=f;w;w=Ur(w))y++;for(;0<g-y;)b=Ur(b),g--;for(;0<y-g;)f=Ur(f),y--;for(;g--;){if(b===f||f!==null&&b===f.alternate)break t;b=Ur(b),f=Ur(f)}b=null}else b=null;v!==null&&Sd(d,p,v,b,!1),x!==null&&k!==null&&Sd(d,k,x,b,!0)}}e:{if(p=h?Qr(h):window,v=p.nodeName&&p.nodeName.toLowerCase(),v==="select"||v==="input"&&p.type==="file")var T=Nw;else if(yd(p))if(um)T=Rw;else{T=jw;var C=Iw}else(v=p.nodeName)&&v.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(T=Ew);if(T&&(T=T(e,h))){hm(d,T,n,u);break e}C&&C(e,p,h),e==="focusout"&&(C=p._wrapperState)&&C.controlled&&p.type==="number"&&fl(p,"number",p.value)}switch(C=h?Qr(h):window,e){case"focusin":(yd(C)||C.contentEditable==="true")&&($r=C,Nl=h,la=null);break;case"focusout":la=Nl=$r=null;break;case"mousedown":Il=!0;break;case"contextmenu":case"mouseup":case"dragend":Il=!1,kd(d,n,u);break;case"selectionchange":if(Mw)break;case"keydown":case"keyup":kd(d,n,u)}var P;if(Gh)e:{switch(e){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else Wr?cm(e,n)&&(S="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(S="onCompositionStart");S&&(sm&&n.locale!=="ko"&&(Wr||S!=="onCompositionStart"?S==="onCompositionEnd"&&Wr&&(P=om()):(Un=u,Vh="value"in Un?Un.value:Un.textContent,Wr=!0)),C=ns(h,S),0<C.length&&(S=new pd(S,e,null,n,u),d.push({event:S,listeners:C}),P?S.data=P:(P=lm(n),P!==null&&(S.data=P)))),(P=Tw?Cw(e,n):Sw(e,n))&&(h=ns(h,"onBeforeInput"),0<h.length&&(u=new pd("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:h}),u.data=P))}xm(d,t)})}function Pa(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ns(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=ba(e,n),a!=null&&r.unshift(Pa(e,a,i)),a=ba(e,t),a!=null&&r.push(Pa(e,a,i))),e=e.return}return r}function Ur(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Sd(e,t,n,r,i){for(var a=t._reactName,s=[];n!==null&&n!==r;){var c=n,l=c.alternate,h=c.stateNode;if(l!==null&&l===r)break;c.tag===5&&h!==null&&(c=h,i?(l=ba(n,a),l!=null&&s.unshift(Pa(n,l,c))):i||(l=ba(n,a),l!=null&&s.push(Pa(n,l,c)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var _w=/\r\n?/g,Fw=/\u0000|\uFFFD/g;function Pd(e){return(typeof e=="string"?e:""+e).replace(_w,`
`).replace(Fw,"")}function po(e,t,n){if(t=Pd(t),Pd(e)!==t&&n)throw Error(L(425))}function rs(){}var jl=null,El=null;function Rl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ll=typeof setTimeout=="function"?setTimeout:void 0,Bw=typeof clearTimeout=="function"?clearTimeout:void 0,Ad=typeof Promise=="function"?Promise:void 0,Vw=typeof queueMicrotask=="function"?queueMicrotask:typeof Ad<"u"?function(e){return Ad.resolve(null).then(e).catch(zw)}:Ll;function zw(e){setTimeout(function(){throw e})}function jc(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),ka(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ka(t)}function Hn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Nd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var qi=Math.random().toString(36).slice(2),Gt="__reactFiber$"+qi,Aa="__reactProps$"+qi,pn="__reactContainer$"+qi,Dl="__reactEvents$"+qi,Hw="__reactListeners$"+qi,Gw="__reactHandles$"+qi;function dr(e){var t=e[Gt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[pn]||n[Gt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Nd(e);e!==null;){if(n=e[Gt])return n;e=Nd(e)}return t}e=n,n=e.parentNode}return null}function $a(e){return e=e[Gt]||e[pn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Qr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(L(33))}function Ms(e){return e[Aa]||null}var Ml=[],Yr=-1;function rr(e){return{current:e}}function he(e){0>Yr||(e.current=Ml[Yr],Ml[Yr]=null,Yr--)}function se(e,t){Yr++,Ml[Yr]=e.current,e.current=t}var Jn={},He=rr(Jn),nt=rr(!1),Pr=Jn;function xi(e,t){var n=e.type.contextTypes;if(!n)return Jn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function rt(e){return e=e.childContextTypes,e!=null}function is(){he(nt),he(He)}function Id(e,t,n){if(He.current!==Jn)throw Error(L(168));se(He,t),se(nt,n)}function Tm(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(L(108,Ib(e)||"Unknown",i));return ve({},n,r)}function as(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Jn,Pr=He.current,se(He,e),se(nt,nt.current),!0}function jd(e,t,n){var r=e.stateNode;if(!r)throw Error(L(169));n?(e=Tm(e,t,Pr),r.__reactInternalMemoizedMergedChildContext=e,he(nt),he(He),se(He,e)):he(nt),se(nt,n)}var on=null,qs=!1,Ec=!1;function Cm(e){on===null?on=[e]:on.push(e)}function Ww(e){qs=!0,Cm(e)}function ir(){if(!Ec&&on!==null){Ec=!0;var e=0,t=oe;try{var n=on;for(oe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}on=null,qs=!1}catch(i){throw on!==null&&(on=on.slice(e+1)),Qg(Uh,ir),i}finally{oe=t,Ec=!1}}return null}var Xr=[],Jr=0,os=null,ss=0,vt=[],bt=0,Ar=null,ln=1,hn="";function lr(e,t){Xr[Jr++]=ss,Xr[Jr++]=os,os=e,ss=t}function Sm(e,t,n){vt[bt++]=ln,vt[bt++]=hn,vt[bt++]=Ar,Ar=e;var r=ln;e=hn;var i=32-Lt(r)-1;r&=~(1<<i),n+=1;var a=32-Lt(t)+i;if(30<a){var s=i-i%5;a=(r&(1<<s)-1).toString(32),r>>=s,i-=s,ln=1<<32-Lt(t)+i|n<<i|r,hn=a+e}else ln=1<<a|n<<i|r,hn=e}function $h(e){e.return!==null&&(lr(e,1),Sm(e,1,0))}function Kh(e){for(;e===os;)os=Xr[--Jr],Xr[Jr]=null,ss=Xr[--Jr],Xr[Jr]=null;for(;e===Ar;)Ar=vt[--bt],vt[bt]=null,hn=vt[--bt],vt[bt]=null,ln=vt[--bt],vt[bt]=null}var ht=null,lt=null,de=!1,Et=null;function Pm(e,t){var n=wt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ed(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ht=e,lt=Hn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ht=e,lt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ar!==null?{id:ln,overflow:hn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=wt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ht=e,lt=null,!0):!1;default:return!1}}function ql(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ol(e){if(de){var t=lt;if(t){var n=t;if(!Ed(e,t)){if(ql(e))throw Error(L(418));t=Hn(n.nextSibling);var r=ht;t&&Ed(e,t)?Pm(r,n):(e.flags=e.flags&-4097|2,de=!1,ht=e)}}else{if(ql(e))throw Error(L(418));e.flags=e.flags&-4097|2,de=!1,ht=e}}}function Rd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ht=e}function go(e){if(e!==ht)return!1;if(!de)return Rd(e),de=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Rl(e.type,e.memoizedProps)),t&&(t=lt)){if(ql(e))throw Am(),Error(L(418));for(;t;)Pm(e,t),t=Hn(t.nextSibling)}if(Rd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(L(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){lt=Hn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}lt=null}}else lt=ht?Hn(e.stateNode.nextSibling):null;return!0}function Am(){for(var e=lt;e;)e=Hn(e.nextSibling)}function ki(){lt=ht=null,de=!1}function Qh(e){Et===null?Et=[e]:Et.push(e)}var $w=bn.ReactCurrentBatchConfig;function Ki(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(L(309));var r=n.stateNode}if(!r)throw Error(L(147,e));var i=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(s){var c=i.refs;s===null?delete c[a]:c[a]=s},t._stringRef=a,t)}if(typeof e!="string")throw Error(L(284));if(!n._owner)throw Error(L(290,e))}return e}function mo(e,t){throw e=Object.prototype.toString.call(t),Error(L(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Ld(e){var t=e._init;return t(e._payload)}function Nm(e){function t(f,g){if(e){var y=f.deletions;y===null?(f.deletions=[g],f.flags|=16):y.push(g)}}function n(f,g){if(!e)return null;for(;g!==null;)t(f,g),g=g.sibling;return null}function r(f,g){for(f=new Map;g!==null;)g.key!==null?f.set(g.key,g):f.set(g.index,g),g=g.sibling;return f}function i(f,g){return f=Kn(f,g),f.index=0,f.sibling=null,f}function a(f,g,y){return f.index=y,e?(y=f.alternate,y!==null?(y=y.index,y<g?(f.flags|=2,g):y):(f.flags|=2,g)):(f.flags|=1048576,g)}function s(f){return e&&f.alternate===null&&(f.flags|=2),f}function c(f,g,y,w){return g===null||g.tag!==6?(g=Uc(y,f.mode,w),g.return=f,g):(g=i(g,y),g.return=f,g)}function l(f,g,y,w){var T=y.type;return T===Gr?u(f,g,y.props.children,w,y.key):g!==null&&(g.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===In&&Ld(T)===g.type)?(w=i(g,y.props),w.ref=Ki(f,g,y),w.return=f,w):(w=_o(y.type,y.key,y.props,null,f.mode,w),w.ref=Ki(f,g,y),w.return=f,w)}function h(f,g,y,w){return g===null||g.tag!==4||g.stateNode.containerInfo!==y.containerInfo||g.stateNode.implementation!==y.implementation?(g=_c(y,f.mode,w),g.return=f,g):(g=i(g,y.children||[]),g.return=f,g)}function u(f,g,y,w,T){return g===null||g.tag!==7?(g=Tr(y,f.mode,w,T),g.return=f,g):(g=i(g,y),g.return=f,g)}function d(f,g,y){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Uc(""+g,f.mode,y),g.return=f,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ro:return y=_o(g.type,g.key,g.props,null,f.mode,y),y.ref=Ki(f,null,g),y.return=f,y;case Hr:return g=_c(g,f.mode,y),g.return=f,g;case In:var w=g._init;return d(f,w(g._payload),y)}if(na(g)||zi(g))return g=Tr(g,f.mode,y,null),g.return=f,g;mo(f,g)}return null}function p(f,g,y,w){var T=g!==null?g.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return T!==null?null:c(f,g,""+y,w);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ro:return y.key===T?l(f,g,y,w):null;case Hr:return y.key===T?h(f,g,y,w):null;case In:return T=y._init,p(f,g,T(y._payload),w)}if(na(y)||zi(y))return T!==null?null:u(f,g,y,w,null);mo(f,y)}return null}function v(f,g,y,w,T){if(typeof w=="string"&&w!==""||typeof w=="number")return f=f.get(y)||null,c(g,f,""+w,T);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case ro:return f=f.get(w.key===null?y:w.key)||null,l(g,f,w,T);case Hr:return f=f.get(w.key===null?y:w.key)||null,h(g,f,w,T);case In:var C=w._init;return v(f,g,y,C(w._payload),T)}if(na(w)||zi(w))return f=f.get(y)||null,u(g,f,w,T,null);mo(g,w)}return null}function x(f,g,y,w){for(var T=null,C=null,P=g,S=g=0,A=null;P!==null&&S<y.length;S++){P.index>S?(A=P,P=null):A=P.sibling;var j=p(f,P,y[S],w);if(j===null){P===null&&(P=A);break}e&&P&&j.alternate===null&&t(f,P),g=a(j,g,S),C===null?T=j:C.sibling=j,C=j,P=A}if(S===y.length)return n(f,P),de&&lr(f,S),T;if(P===null){for(;S<y.length;S++)P=d(f,y[S],w),P!==null&&(g=a(P,g,S),C===null?T=P:C.sibling=P,C=P);return de&&lr(f,S),T}for(P=r(f,P);S<y.length;S++)A=v(P,f,S,y[S],w),A!==null&&(e&&A.alternate!==null&&P.delete(A.key===null?S:A.key),g=a(A,g,S),C===null?T=A:C.sibling=A,C=A);return e&&P.forEach(function(q){return t(f,q)}),de&&lr(f,S),T}function b(f,g,y,w){var T=zi(y);if(typeof T!="function")throw Error(L(150));if(y=T.call(y),y==null)throw Error(L(151));for(var C=T=null,P=g,S=g=0,A=null,j=y.next();P!==null&&!j.done;S++,j=y.next()){P.index>S?(A=P,P=null):A=P.sibling;var q=p(f,P,j.value,w);if(q===null){P===null&&(P=A);break}e&&P&&q.alternate===null&&t(f,P),g=a(q,g,S),C===null?T=q:C.sibling=q,C=q,P=A}if(j.done)return n(f,P),de&&lr(f,S),T;if(P===null){for(;!j.done;S++,j=y.next())j=d(f,j.value,w),j!==null&&(g=a(j,g,S),C===null?T=j:C.sibling=j,C=j);return de&&lr(f,S),T}for(P=r(f,P);!j.done;S++,j=y.next())j=v(P,f,S,j.value,w),j!==null&&(e&&j.alternate!==null&&P.delete(j.key===null?S:j.key),g=a(j,g,S),C===null?T=j:C.sibling=j,C=j);return e&&P.forEach(function(D){return t(f,D)}),de&&lr(f,S),T}function k(f,g,y,w){if(typeof y=="object"&&y!==null&&y.type===Gr&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case ro:e:{for(var T=y.key,C=g;C!==null;){if(C.key===T){if(T=y.type,T===Gr){if(C.tag===7){n(f,C.sibling),g=i(C,y.props.children),g.return=f,f=g;break e}}else if(C.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===In&&Ld(T)===C.type){n(f,C.sibling),g=i(C,y.props),g.ref=Ki(f,C,y),g.return=f,f=g;break e}n(f,C);break}else t(f,C);C=C.sibling}y.type===Gr?(g=Tr(y.props.children,f.mode,w,y.key),g.return=f,f=g):(w=_o(y.type,y.key,y.props,null,f.mode,w),w.ref=Ki(f,g,y),w.return=f,f=w)}return s(f);case Hr:e:{for(C=y.key;g!==null;){if(g.key===C)if(g.tag===4&&g.stateNode.containerInfo===y.containerInfo&&g.stateNode.implementation===y.implementation){n(f,g.sibling),g=i(g,y.children||[]),g.return=f,f=g;break e}else{n(f,g);break}else t(f,g);g=g.sibling}g=_c(y,f.mode,w),g.return=f,f=g}return s(f);case In:return C=y._init,k(f,g,C(y._payload),w)}if(na(y))return x(f,g,y,w);if(zi(y))return b(f,g,y,w);mo(f,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,g!==null&&g.tag===6?(n(f,g.sibling),g=i(g,y),g.return=f,f=g):(n(f,g),g=Uc(y,f.mode,w),g.return=f,f=g),s(f)):n(f,g)}return k}var Ti=Nm(!0),Im=Nm(!1),cs=rr(null),ls=null,Zr=null,Yh=null;function Xh(){Yh=Zr=ls=null}function Jh(e){var t=cs.current;he(cs),e._currentValue=t}function Ul(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function si(e,t){ls=e,Yh=Zr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(et=!0),e.firstContext=null)}function Tt(e){var t=e._currentValue;if(Yh!==e)if(e={context:e,memoizedValue:t,next:null},Zr===null){if(ls===null)throw Error(L(308));Zr=e,ls.dependencies={lanes:0,firstContext:e}}else Zr=Zr.next=e;return t}var pr=null;function Zh(e){pr===null?pr=[e]:pr.push(e)}function jm(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Zh(t)):(n.next=i.next,i.next=n),t.interleaved=n,gn(e,r)}function gn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var jn=!1;function eu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Em(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function un(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Gn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,re&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,gn(e,n)}return i=r.interleaved,i===null?(t.next=t,Zh(r)):(t.next=i.next,i.next=t),r.interleaved=t,gn(e,n)}function Lo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,_h(e,n)}}function Dd(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=s:a=a.next=s,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function hs(e,t,n,r){var i=e.updateQueue;jn=!1;var a=i.firstBaseUpdate,s=i.lastBaseUpdate,c=i.shared.pending;if(c!==null){i.shared.pending=null;var l=c,h=l.next;l.next=null,s===null?a=h:s.next=h,s=l;var u=e.alternate;u!==null&&(u=u.updateQueue,c=u.lastBaseUpdate,c!==s&&(c===null?u.firstBaseUpdate=h:c.next=h,u.lastBaseUpdate=l))}if(a!==null){var d=i.baseState;s=0,u=h=l=null,c=a;do{var p=c.lane,v=c.eventTime;if((r&p)===p){u!==null&&(u=u.next={eventTime:v,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var x=e,b=c;switch(p=t,v=n,b.tag){case 1:if(x=b.payload,typeof x=="function"){d=x.call(v,d,p);break e}d=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=b.payload,p=typeof x=="function"?x.call(v,d,p):x,p==null)break e;d=ve({},d,p);break e;case 2:jn=!0}}c.callback!==null&&c.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[c]:p.push(c))}else v={eventTime:v,lane:p,tag:c.tag,payload:c.payload,callback:c.callback,next:null},u===null?(h=u=v,l=d):u=u.next=v,s|=p;if(c=c.next,c===null){if(c=i.shared.pending,c===null)break;p=c,c=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(u===null&&(l=d),i.baseState=l,i.firstBaseUpdate=h,i.lastBaseUpdate=u,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);Ir|=s,e.lanes=s,e.memoizedState=d}}function Md(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(L(191,i));i.call(r)}}}var Ka={},Yt=rr(Ka),Na=rr(Ka),Ia=rr(Ka);function gr(e){if(e===Ka)throw Error(L(174));return e}function tu(e,t){switch(se(Ia,t),se(Na,e),se(Yt,Ka),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:vl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=vl(t,e)}he(Yt),se(Yt,t)}function Ci(){he(Yt),he(Na),he(Ia)}function Rm(e){gr(Ia.current);var t=gr(Yt.current),n=vl(t,e.type);t!==n&&(se(Na,e),se(Yt,n))}function nu(e){Na.current===e&&(he(Yt),he(Na))}var me=rr(0);function us(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Rc=[];function ru(){for(var e=0;e<Rc.length;e++)Rc[e]._workInProgressVersionPrimary=null;Rc.length=0}var Do=bn.ReactCurrentDispatcher,Lc=bn.ReactCurrentBatchConfig,Nr=0,ye=null,Se=null,je=null,ds=!1,ha=!1,ja=0,Kw=0;function Fe(){throw Error(L(321))}function iu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Mt(e[n],t[n]))return!1;return!0}function au(e,t,n,r,i,a){if(Nr=a,ye=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Do.current=e===null||e.memoizedState===null?Jw:Zw,e=n(r,i),ha){a=0;do{if(ha=!1,ja=0,25<=a)throw Error(L(301));a+=1,je=Se=null,t.updateQueue=null,Do.current=ex,e=n(r,i)}while(ha)}if(Do.current=ps,t=Se!==null&&Se.next!==null,Nr=0,je=Se=ye=null,ds=!1,t)throw Error(L(300));return e}function ou(){var e=ja!==0;return ja=0,e}function Bt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return je===null?ye.memoizedState=je=e:je=je.next=e,je}function Ct(){if(Se===null){var e=ye.alternate;e=e!==null?e.memoizedState:null}else e=Se.next;var t=je===null?ye.memoizedState:je.next;if(t!==null)je=t,Se=e;else{if(e===null)throw Error(L(310));Se=e,e={memoizedState:Se.memoizedState,baseState:Se.baseState,baseQueue:Se.baseQueue,queue:Se.queue,next:null},je===null?ye.memoizedState=je=e:je=je.next=e}return je}function Ea(e,t){return typeof t=="function"?t(e):t}function Dc(e){var t=Ct(),n=t.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=e;var r=Se,i=r.baseQueue,a=n.pending;if(a!==null){if(i!==null){var s=i.next;i.next=a.next,a.next=s}r.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,r=r.baseState;var c=s=null,l=null,h=a;do{var u=h.lane;if((Nr&u)===u)l!==null&&(l=l.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:e(r,h.action);else{var d={lane:u,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};l===null?(c=l=d,s=r):l=l.next=d,ye.lanes|=u,Ir|=u}h=h.next}while(h!==null&&h!==a);l===null?s=r:l.next=c,Mt(r,t.memoizedState)||(et=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do a=i.lane,ye.lanes|=a,Ir|=a,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Mc(e){var t=Ct(),n=t.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do a=e(a,s.action),s=s.next;while(s!==i);Mt(a,t.memoizedState)||(et=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Lm(){}function Dm(e,t){var n=ye,r=Ct(),i=t(),a=!Mt(r.memoizedState,i);if(a&&(r.memoizedState=i,et=!0),r=r.queue,su(Om.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||je!==null&&je.memoizedState.tag&1){if(n.flags|=2048,Ra(9,qm.bind(null,n,r,i,t),void 0,null),Re===null)throw Error(L(349));Nr&30||Mm(n,t,i)}return i}function Mm(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ye.updateQueue,t===null?(t={lastEffect:null,stores:null},ye.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function qm(e,t,n,r){t.value=n,t.getSnapshot=r,Um(t)&&_m(e)}function Om(e,t,n){return n(function(){Um(t)&&_m(e)})}function Um(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Mt(e,n)}catch{return!0}}function _m(e){var t=gn(e,1);t!==null&&Dt(t,e,1,-1)}function qd(e){var t=Bt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:e},t.queue=e,e=e.dispatch=Xw.bind(null,ye,e),[t.memoizedState,e]}function Ra(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ye.updateQueue,t===null?(t={lastEffect:null,stores:null},ye.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Fm(){return Ct().memoizedState}function Mo(e,t,n,r){var i=Bt();ye.flags|=e,i.memoizedState=Ra(1|t,n,void 0,r===void 0?null:r)}function Os(e,t,n,r){var i=Ct();r=r===void 0?null:r;var a=void 0;if(Se!==null){var s=Se.memoizedState;if(a=s.destroy,r!==null&&iu(r,s.deps)){i.memoizedState=Ra(t,n,a,r);return}}ye.flags|=e,i.memoizedState=Ra(1|t,n,a,r)}function Od(e,t){return Mo(8390656,8,e,t)}function su(e,t){return Os(2048,8,e,t)}function Bm(e,t){return Os(4,2,e,t)}function Vm(e,t){return Os(4,4,e,t)}function zm(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Hm(e,t,n){return n=n!=null?n.concat([e]):null,Os(4,4,zm.bind(null,t,e),n)}function cu(){}function Gm(e,t){var n=Ct();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&iu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Wm(e,t){var n=Ct();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&iu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function $m(e,t,n){return Nr&21?(Mt(n,t)||(n=Jg(),ye.lanes|=n,Ir|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,et=!0),e.memoizedState=n)}function Qw(e,t){var n=oe;oe=n!==0&&4>n?n:4,e(!0);var r=Lc.transition;Lc.transition={};try{e(!1),t()}finally{oe=n,Lc.transition=r}}function Km(){return Ct().memoizedState}function Yw(e,t,n){var r=$n(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Qm(e))Ym(t,n);else if(n=jm(e,t,n,r),n!==null){var i=Ye();Dt(n,e,r,i),Xm(n,t,r)}}function Xw(e,t,n){var r=$n(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Qm(e))Ym(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var s=t.lastRenderedState,c=a(s,n);if(i.hasEagerState=!0,i.eagerState=c,Mt(c,s)){var l=t.interleaved;l===null?(i.next=i,Zh(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=jm(e,t,i,r),n!==null&&(i=Ye(),Dt(n,e,r,i),Xm(n,t,r))}}function Qm(e){var t=e.alternate;return e===ye||t!==null&&t===ye}function Ym(e,t){ha=ds=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Xm(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,_h(e,n)}}var ps={readContext:Tt,useCallback:Fe,useContext:Fe,useEffect:Fe,useImperativeHandle:Fe,useInsertionEffect:Fe,useLayoutEffect:Fe,useMemo:Fe,useReducer:Fe,useRef:Fe,useState:Fe,useDebugValue:Fe,useDeferredValue:Fe,useTransition:Fe,useMutableSource:Fe,useSyncExternalStore:Fe,useId:Fe,unstable_isNewReconciler:!1},Jw={readContext:Tt,useCallback:function(e,t){return Bt().memoizedState=[e,t===void 0?null:t],e},useContext:Tt,useEffect:Od,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Mo(4194308,4,zm.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Mo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Mo(4,2,e,t)},useMemo:function(e,t){var n=Bt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Bt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Yw.bind(null,ye,e),[r.memoizedState,e]},useRef:function(e){var t=Bt();return e={current:e},t.memoizedState=e},useState:qd,useDebugValue:cu,useDeferredValue:function(e){return Bt().memoizedState=e},useTransition:function(){var e=qd(!1),t=e[0];return e=Qw.bind(null,e[1]),Bt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ye,i=Bt();if(de){if(n===void 0)throw Error(L(407));n=n()}else{if(n=t(),Re===null)throw Error(L(349));Nr&30||Mm(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,Od(Om.bind(null,r,a,e),[e]),r.flags|=2048,Ra(9,qm.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=Bt(),t=Re.identifierPrefix;if(de){var n=hn,r=ln;n=(r&~(1<<32-Lt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ja++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Kw++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Zw={readContext:Tt,useCallback:Gm,useContext:Tt,useEffect:su,useImperativeHandle:Hm,useInsertionEffect:Bm,useLayoutEffect:Vm,useMemo:Wm,useReducer:Dc,useRef:Fm,useState:function(){return Dc(Ea)},useDebugValue:cu,useDeferredValue:function(e){var t=Ct();return $m(t,Se.memoizedState,e)},useTransition:function(){var e=Dc(Ea)[0],t=Ct().memoizedState;return[e,t]},useMutableSource:Lm,useSyncExternalStore:Dm,useId:Km,unstable_isNewReconciler:!1},ex={readContext:Tt,useCallback:Gm,useContext:Tt,useEffect:su,useImperativeHandle:Hm,useInsertionEffect:Bm,useLayoutEffect:Vm,useMemo:Wm,useReducer:Mc,useRef:Fm,useState:function(){return Mc(Ea)},useDebugValue:cu,useDeferredValue:function(e){var t=Ct();return Se===null?t.memoizedState=e:$m(t,Se.memoizedState,e)},useTransition:function(){var e=Mc(Ea)[0],t=Ct().memoizedState;return[e,t]},useMutableSource:Lm,useSyncExternalStore:Dm,useId:Km,unstable_isNewReconciler:!1};function Pt(e,t){if(e&&e.defaultProps){t=ve({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function _l(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ve({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Us={isMounted:function(e){return(e=e._reactInternals)?Lr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ye(),i=$n(e),a=un(r,i);a.payload=t,n!=null&&(a.callback=n),t=Gn(e,a,i),t!==null&&(Dt(t,e,i,r),Lo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ye(),i=$n(e),a=un(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Gn(e,a,i),t!==null&&(Dt(t,e,i,r),Lo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ye(),r=$n(e),i=un(n,r);i.tag=2,t!=null&&(i.callback=t),t=Gn(e,i,r),t!==null&&(Dt(t,e,r,n),Lo(t,e,r))}};function Ud(e,t,n,r,i,a,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,s):t.prototype&&t.prototype.isPureReactComponent?!Ca(n,r)||!Ca(i,a):!0}function Jm(e,t,n){var r=!1,i=Jn,a=t.contextType;return typeof a=="object"&&a!==null?a=Tt(a):(i=rt(t)?Pr:He.current,r=t.contextTypes,a=(r=r!=null)?xi(e,i):Jn),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Us,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function _d(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Us.enqueueReplaceState(t,t.state,null)}function Fl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},eu(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=Tt(a):(a=rt(t)?Pr:He.current,i.context=xi(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(_l(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Us.enqueueReplaceState(i,i.state,null),hs(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Si(e,t){try{var n="",r=t;do n+=Nb(r),r=r.return;while(r);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function qc(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Bl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var tx=typeof WeakMap=="function"?WeakMap:Map;function Zm(e,t,n){n=un(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ms||(ms=!0,Xl=r),Bl(e,t)},n}function ef(e,t,n){n=un(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Bl(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){Bl(e,t),typeof r!="function"&&(Wn===null?Wn=new Set([this]):Wn.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Fd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new tx;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=mx.bind(null,e,t,n),t.then(e,e))}function Bd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Vd(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=un(-1,1),t.tag=2,Gn(n,t,1))),n.lanes|=1),e)}var nx=bn.ReactCurrentOwner,et=!1;function Ke(e,t,n,r){t.child=e===null?Im(t,null,n,r):Ti(t,e.child,n,r)}function zd(e,t,n,r,i){n=n.render;var a=t.ref;return si(t,i),r=au(e,t,n,r,a,i),n=ou(),e!==null&&!et?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,mn(e,t,i)):(de&&n&&$h(t),t.flags|=1,Ke(e,t,r,i),t.child)}function Hd(e,t,n,r,i){if(e===null){var a=n.type;return typeof a=="function"&&!fu(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,tf(e,t,a,r,i)):(e=_o(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&i)){var s=a.memoizedProps;if(n=n.compare,n=n!==null?n:Ca,n(s,r)&&e.ref===t.ref)return mn(e,t,i)}return t.flags|=1,e=Kn(a,r),e.ref=t.ref,e.return=t,t.child=e}function tf(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Ca(a,r)&&e.ref===t.ref)if(et=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(et=!0);else return t.lanes=e.lanes,mn(e,t,i)}return Vl(e,t,n,r,i)}function nf(e,t,n){var r=t.pendingProps,i=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},se(ti,st),st|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,se(ti,st),st|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,se(ti,st),st|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,se(ti,st),st|=r;return Ke(e,t,i,n),t.child}function rf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Vl(e,t,n,r,i){var a=rt(n)?Pr:He.current;return a=xi(t,a),si(t,i),n=au(e,t,n,r,a,i),r=ou(),e!==null&&!et?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,mn(e,t,i)):(de&&r&&$h(t),t.flags|=1,Ke(e,t,n,i),t.child)}function Gd(e,t,n,r,i){if(rt(n)){var a=!0;as(t)}else a=!1;if(si(t,i),t.stateNode===null)qo(e,t),Jm(t,n,r),Fl(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,c=t.memoizedProps;s.props=c;var l=s.context,h=n.contextType;typeof h=="object"&&h!==null?h=Tt(h):(h=rt(n)?Pr:He.current,h=xi(t,h));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof s.getSnapshotBeforeUpdate=="function";d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(c!==r||l!==h)&&_d(t,s,r,h),jn=!1;var p=t.memoizedState;s.state=p,hs(t,r,s,i),l=t.memoizedState,c!==r||p!==l||nt.current||jn?(typeof u=="function"&&(_l(t,n,u,r),l=t.memoizedState),(c=jn||Ud(t,n,c,r,p,l,h))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=h,r=c):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Em(e,t),c=t.memoizedProps,h=t.type===t.elementType?c:Pt(t.type,c),s.props=h,d=t.pendingProps,p=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=Tt(l):(l=rt(n)?Pr:He.current,l=xi(t,l));var v=n.getDerivedStateFromProps;(u=typeof v=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(c!==d||p!==l)&&_d(t,s,r,l),jn=!1,p=t.memoizedState,s.state=p,hs(t,r,s,i);var x=t.memoizedState;c!==d||p!==x||nt.current||jn?(typeof v=="function"&&(_l(t,n,v,r),x=t.memoizedState),(h=jn||Ud(t,n,h,r,p,x,l)||!1)?(u||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,x,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,x,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||c===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),s.props=r,s.state=x,s.context=l,r=h):(typeof s.componentDidUpdate!="function"||c===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return zl(e,t,n,r,a,i)}function zl(e,t,n,r,i,a){rf(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&jd(t,n,!1),mn(e,t,a);r=t.stateNode,nx.current=t;var c=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Ti(t,e.child,null,a),t.child=Ti(t,null,c,a)):Ke(e,t,c,a),t.memoizedState=r.state,i&&jd(t,n,!0),t.child}function af(e){var t=e.stateNode;t.pendingContext?Id(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Id(e,t.context,!1),tu(e,t.containerInfo)}function Wd(e,t,n,r,i){return ki(),Qh(i),t.flags|=256,Ke(e,t,n,r),t.child}var Hl={dehydrated:null,treeContext:null,retryLane:0};function Gl(e){return{baseLanes:e,cachePool:null,transitions:null}}function of(e,t,n){var r=t.pendingProps,i=me.current,a=!1,s=(t.flags&128)!==0,c;if((c=s)||(c=e!==null&&e.memoizedState===null?!1:(i&2)!==0),c?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),se(me,i&1),e===null)return Ol(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,a?(r=t.mode,a=t.child,s={mode:"hidden",children:s},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=s):a=Bs(s,r,0,null),e=Tr(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Gl(n),t.memoizedState=Hl,e):lu(t,s));if(i=e.memoizedState,i!==null&&(c=i.dehydrated,c!==null))return rx(e,t,s,r,c,i,n);if(a){a=r.fallback,s=t.mode,i=e.child,c=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Kn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),c!==null?a=Kn(c,a):(a=Tr(a,s,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,s=e.child.memoizedState,s=s===null?Gl(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},a.memoizedState=s,a.childLanes=e.childLanes&~n,t.memoizedState=Hl,r}return a=e.child,e=a.sibling,r=Kn(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function lu(e,t){return t=Bs({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function fo(e,t,n,r){return r!==null&&Qh(r),Ti(t,e.child,null,n),e=lu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function rx(e,t,n,r,i,a,s){if(n)return t.flags&256?(t.flags&=-257,r=qc(Error(L(422))),fo(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=Bs({mode:"visible",children:r.children},i,0,null),a=Tr(a,i,s,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&Ti(t,e.child,null,s),t.child.memoizedState=Gl(s),t.memoizedState=Hl,a);if(!(t.mode&1))return fo(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var c=r.dgst;return r=c,a=Error(L(419)),r=qc(a,r,void 0),fo(e,t,s,r)}if(c=(s&e.childLanes)!==0,et||c){if(r=Re,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,gn(e,i),Dt(r,e,i,-1))}return mu(),r=qc(Error(L(421))),fo(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=fx.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,lt=Hn(i.nextSibling),ht=t,de=!0,Et=null,e!==null&&(vt[bt++]=ln,vt[bt++]=hn,vt[bt++]=Ar,ln=e.id,hn=e.overflow,Ar=t),t=lu(t,r.children),t.flags|=4096,t)}function $d(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ul(e.return,t,n)}function Oc(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function sf(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(Ke(e,t,r.children,n),r=me.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&$d(e,n,t);else if(e.tag===19)$d(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(se(me,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&us(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Oc(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&us(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Oc(t,!0,n,null,a);break;case"together":Oc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function qo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function mn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ir|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(L(153));if(t.child!==null){for(e=t.child,n=Kn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Kn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ix(e,t,n){switch(t.tag){case 3:af(t),ki();break;case 5:Rm(t);break;case 1:rt(t.type)&&as(t);break;case 4:tu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;se(cs,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(se(me,me.current&1),t.flags|=128,null):n&t.child.childLanes?of(e,t,n):(se(me,me.current&1),e=mn(e,t,n),e!==null?e.sibling:null);se(me,me.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return sf(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),se(me,me.current),r)break;return null;case 22:case 23:return t.lanes=0,nf(e,t,n)}return mn(e,t,n)}var cf,Wl,lf,hf;cf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Wl=function(){};lf=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,gr(Yt.current);var a=null;switch(n){case"input":i=gl(e,i),r=gl(e,r),a=[];break;case"select":i=ve({},i,{value:void 0}),r=ve({},r,{value:void 0}),a=[];break;case"textarea":i=yl(e,i),r=yl(e,r),a=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=rs)}bl(n,r);var s;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var c=i[h];for(s in c)c.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(ya.hasOwnProperty(h)?a||(a=[]):(a=a||[]).push(h,null));for(h in r){var l=r[h];if(c=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&l!==c&&(l!=null||c!=null))if(h==="style")if(c){for(s in c)!c.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&c[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(a||(a=[]),a.push(h,n)),n=l;else h==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,c=c?c.__html:void 0,l!=null&&c!==l&&(a=a||[]).push(h,l)):h==="children"?typeof l!="string"&&typeof l!="number"||(a=a||[]).push(h,""+l):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(ya.hasOwnProperty(h)?(l!=null&&h==="onScroll"&&le("scroll",e),a||c===l||(a=[])):(a=a||[]).push(h,l))}n&&(a=a||[]).push("style",n);var h=a;(t.updateQueue=h)&&(t.flags|=4)}};hf=function(e,t,n,r){n!==r&&(t.flags|=4)};function Qi(e,t){if(!de)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Be(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function ax(e,t,n){var r=t.pendingProps;switch(Kh(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Be(t),null;case 1:return rt(t.type)&&is(),Be(t),null;case 3:return r=t.stateNode,Ci(),he(nt),he(He),ru(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(go(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Et!==null&&(eh(Et),Et=null))),Wl(e,t),Be(t),null;case 5:nu(t);var i=gr(Ia.current);if(n=t.type,e!==null&&t.stateNode!=null)lf(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(L(166));return Be(t),null}if(e=gr(Yt.current),go(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[Gt]=t,r[Aa]=a,e=(t.mode&1)!==0,n){case"dialog":le("cancel",r),le("close",r);break;case"iframe":case"object":case"embed":le("load",r);break;case"video":case"audio":for(i=0;i<ia.length;i++)le(ia[i],r);break;case"source":le("error",r);break;case"img":case"image":case"link":le("error",r),le("load",r);break;case"details":le("toggle",r);break;case"input":nd(r,a),le("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},le("invalid",r);break;case"textarea":id(r,a),le("invalid",r)}bl(n,a),i=null;for(var s in a)if(a.hasOwnProperty(s)){var c=a[s];s==="children"?typeof c=="string"?r.textContent!==c&&(a.suppressHydrationWarning!==!0&&po(r.textContent,c,e),i=["children",c]):typeof c=="number"&&r.textContent!==""+c&&(a.suppressHydrationWarning!==!0&&po(r.textContent,c,e),i=["children",""+c]):ya.hasOwnProperty(s)&&c!=null&&s==="onScroll"&&le("scroll",r)}switch(n){case"input":io(r),rd(r,a,!0);break;case"textarea":io(r),ad(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=rs)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Og(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Gt]=t,e[Aa]=r,cf(e,t,!1,!1),t.stateNode=e;e:{switch(s=wl(n,r),n){case"dialog":le("cancel",e),le("close",e),i=r;break;case"iframe":case"object":case"embed":le("load",e),i=r;break;case"video":case"audio":for(i=0;i<ia.length;i++)le(ia[i],e);i=r;break;case"source":le("error",e),i=r;break;case"img":case"image":case"link":le("error",e),le("load",e),i=r;break;case"details":le("toggle",e),i=r;break;case"input":nd(e,r),i=gl(e,r),le("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ve({},r,{value:void 0}),le("invalid",e);break;case"textarea":id(e,r),i=yl(e,r),le("invalid",e);break;default:i=r}bl(n,i),c=i;for(a in c)if(c.hasOwnProperty(a)){var l=c[a];a==="style"?Fg(e,l):a==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Ug(e,l)):a==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&va(e,l):typeof l=="number"&&va(e,""+l):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(ya.hasOwnProperty(a)?l!=null&&a==="onScroll"&&le("scroll",e):l!=null&&Lh(e,a,l,s))}switch(n){case"input":io(e),rd(e,r,!1);break;case"textarea":io(e),ad(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Xn(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?ri(e,!!r.multiple,a,!1):r.defaultValue!=null&&ri(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=rs)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Be(t),null;case 6:if(e&&t.stateNode!=null)hf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(L(166));if(n=gr(Ia.current),gr(Yt.current),go(t)){if(r=t.stateNode,n=t.memoizedProps,r[Gt]=t,(a=r.nodeValue!==n)&&(e=ht,e!==null))switch(e.tag){case 3:po(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&po(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Gt]=t,t.stateNode=r}return Be(t),null;case 13:if(he(me),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(de&&lt!==null&&t.mode&1&&!(t.flags&128))Am(),ki(),t.flags|=98560,a=!1;else if(a=go(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(L(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(L(317));a[Gt]=t}else ki(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Be(t),a=!1}else Et!==null&&(eh(Et),Et=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||me.current&1?Ae===0&&(Ae=3):mu())),t.updateQueue!==null&&(t.flags|=4),Be(t),null);case 4:return Ci(),Wl(e,t),e===null&&Sa(t.stateNode.containerInfo),Be(t),null;case 10:return Jh(t.type._context),Be(t),null;case 17:return rt(t.type)&&is(),Be(t),null;case 19:if(he(me),a=t.memoizedState,a===null)return Be(t),null;if(r=(t.flags&128)!==0,s=a.rendering,s===null)if(r)Qi(a,!1);else{if(Ae!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=us(e),s!==null){for(t.flags|=128,Qi(a,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,s=a.alternate,s===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=s.childLanes,a.lanes=s.lanes,a.child=s.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=s.memoizedProps,a.memoizedState=s.memoizedState,a.updateQueue=s.updateQueue,a.type=s.type,e=s.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return se(me,me.current&1|2),t.child}e=e.sibling}a.tail!==null&&xe()>Pi&&(t.flags|=128,r=!0,Qi(a,!1),t.lanes=4194304)}else{if(!r)if(e=us(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Qi(a,!0),a.tail===null&&a.tailMode==="hidden"&&!s.alternate&&!de)return Be(t),null}else 2*xe()-a.renderingStartTime>Pi&&n!==1073741824&&(t.flags|=128,r=!0,Qi(a,!1),t.lanes=4194304);a.isBackwards?(s.sibling=t.child,t.child=s):(n=a.last,n!==null?n.sibling=s:t.child=s,a.last=s)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=xe(),t.sibling=null,n=me.current,se(me,r?n&1|2:n&1),t):(Be(t),null);case 22:case 23:return gu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?st&1073741824&&(Be(t),t.subtreeFlags&6&&(t.flags|=8192)):Be(t),null;case 24:return null;case 25:return null}throw Error(L(156,t.tag))}function ox(e,t){switch(Kh(t),t.tag){case 1:return rt(t.type)&&is(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ci(),he(nt),he(He),ru(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return nu(t),null;case 13:if(he(me),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(L(340));ki()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return he(me),null;case 4:return Ci(),null;case 10:return Jh(t.type._context),null;case 22:case 23:return gu(),null;case 24:return null;default:return null}}var yo=!1,ze=!1,sx=typeof WeakSet=="function"?WeakSet:Set,U=null;function ei(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){we(e,t,r)}else n.current=null}function $l(e,t,n){try{n()}catch(r){we(e,t,r)}}var Kd=!1;function cx(e,t){if(jl=es,e=gm(),Wh(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var s=0,c=-1,l=-1,h=0,u=0,d=e,p=null;t:for(;;){for(var v;d!==n||i!==0&&d.nodeType!==3||(c=s+i),d!==a||r!==0&&d.nodeType!==3||(l=s+r),d.nodeType===3&&(s+=d.nodeValue.length),(v=d.firstChild)!==null;)p=d,d=v;for(;;){if(d===e)break t;if(p===n&&++h===i&&(c=s),p===a&&++u===r&&(l=s),(v=d.nextSibling)!==null)break;d=p,p=d.parentNode}d=v}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(El={focusedElem:e,selectionRange:n},es=!1,U=t;U!==null;)if(t=U,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,U=e;else for(;U!==null;){t=U;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var b=x.memoizedProps,k=x.memoizedState,f=t.stateNode,g=f.getSnapshotBeforeUpdate(t.elementType===t.type?b:Pt(t.type,b),k);f.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(L(163))}}catch(w){we(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,U=e;break}U=t.return}return x=Kd,Kd=!1,x}function ua(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&$l(t,n,a)}i=i.next}while(i!==r)}}function _s(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Kl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function uf(e){var t=e.alternate;t!==null&&(e.alternate=null,uf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Gt],delete t[Aa],delete t[Dl],delete t[Hw],delete t[Gw])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function df(e){return e.tag===5||e.tag===3||e.tag===4}function Qd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||df(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ql(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=rs));else if(r!==4&&(e=e.child,e!==null))for(Ql(e,t,n),e=e.sibling;e!==null;)Ql(e,t,n),e=e.sibling}function Yl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Yl(e,t,n),e=e.sibling;e!==null;)Yl(e,t,n),e=e.sibling}var Me=null,jt=!1;function Tn(e,t,n){for(n=n.child;n!==null;)pf(e,t,n),n=n.sibling}function pf(e,t,n){if(Qt&&typeof Qt.onCommitFiberUnmount=="function")try{Qt.onCommitFiberUnmount(Es,n)}catch{}switch(n.tag){case 5:ze||ei(n,t);case 6:var r=Me,i=jt;Me=null,Tn(e,t,n),Me=r,jt=i,Me!==null&&(jt?(e=Me,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Me.removeChild(n.stateNode));break;case 18:Me!==null&&(jt?(e=Me,n=n.stateNode,e.nodeType===8?jc(e.parentNode,n):e.nodeType===1&&jc(e,n),ka(e)):jc(Me,n.stateNode));break;case 4:r=Me,i=jt,Me=n.stateNode.containerInfo,jt=!0,Tn(e,t,n),Me=r,jt=i;break;case 0:case 11:case 14:case 15:if(!ze&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,s=a.destroy;a=a.tag,s!==void 0&&(a&2||a&4)&&$l(n,t,s),i=i.next}while(i!==r)}Tn(e,t,n);break;case 1:if(!ze&&(ei(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(c){we(n,t,c)}Tn(e,t,n);break;case 21:Tn(e,t,n);break;case 22:n.mode&1?(ze=(r=ze)||n.memoizedState!==null,Tn(e,t,n),ze=r):Tn(e,t,n);break;default:Tn(e,t,n)}}function Yd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new sx),t.forEach(function(r){var i=yx.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function St(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e,s=t,c=s;e:for(;c!==null;){switch(c.tag){case 5:Me=c.stateNode,jt=!1;break e;case 3:Me=c.stateNode.containerInfo,jt=!0;break e;case 4:Me=c.stateNode.containerInfo,jt=!0;break e}c=c.return}if(Me===null)throw Error(L(160));pf(a,s,i),Me=null,jt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(h){we(i,t,h)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)gf(t,e),t=t.sibling}function gf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(St(t,e),Ft(e),r&4){try{ua(3,e,e.return),_s(3,e)}catch(b){we(e,e.return,b)}try{ua(5,e,e.return)}catch(b){we(e,e.return,b)}}break;case 1:St(t,e),Ft(e),r&512&&n!==null&&ei(n,n.return);break;case 5:if(St(t,e),Ft(e),r&512&&n!==null&&ei(n,n.return),e.flags&32){var i=e.stateNode;try{va(i,"")}catch(b){we(e,e.return,b)}}if(r&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,s=n!==null?n.memoizedProps:a,c=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{c==="input"&&a.type==="radio"&&a.name!=null&&Mg(i,a),wl(c,s);var h=wl(c,a);for(s=0;s<l.length;s+=2){var u=l[s],d=l[s+1];u==="style"?Fg(i,d):u==="dangerouslySetInnerHTML"?Ug(i,d):u==="children"?va(i,d):Lh(i,u,d,h)}switch(c){case"input":ml(i,a);break;case"textarea":qg(i,a);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var v=a.value;v!=null?ri(i,!!a.multiple,v,!1):p!==!!a.multiple&&(a.defaultValue!=null?ri(i,!!a.multiple,a.defaultValue,!0):ri(i,!!a.multiple,a.multiple?[]:"",!1))}i[Aa]=a}catch(b){we(e,e.return,b)}}break;case 6:if(St(t,e),Ft(e),r&4){if(e.stateNode===null)throw Error(L(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(b){we(e,e.return,b)}}break;case 3:if(St(t,e),Ft(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ka(t.containerInfo)}catch(b){we(e,e.return,b)}break;case 4:St(t,e),Ft(e);break;case 13:St(t,e),Ft(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(du=xe())),r&4&&Yd(e);break;case 22:if(u=n!==null&&n.memoizedState!==null,e.mode&1?(ze=(h=ze)||u,St(t,e),ze=h):St(t,e),Ft(e),r&8192){if(h=e.memoizedState!==null,(e.stateNode.isHidden=h)&&!u&&e.mode&1)for(U=e,u=e.child;u!==null;){for(d=U=u;U!==null;){switch(p=U,v=p.child,p.tag){case 0:case 11:case 14:case 15:ua(4,p,p.return);break;case 1:ei(p,p.return);var x=p.stateNode;if(typeof x.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(b){we(r,n,b)}}break;case 5:ei(p,p.return);break;case 22:if(p.memoizedState!==null){Jd(d);continue}}v!==null?(v.return=p,U=v):Jd(d)}u=u.sibling}e:for(u=null,d=e;;){if(d.tag===5){if(u===null){u=d;try{i=d.stateNode,h?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(c=d.stateNode,l=d.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,c.style.display=_g("display",s))}catch(b){we(e,e.return,b)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=h?"":d.memoizedProps}catch(b){we(e,e.return,b)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:St(t,e),Ft(e),r&4&&Yd(e);break;case 21:break;default:St(t,e),Ft(e)}}function Ft(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(df(n)){var r=n;break e}n=n.return}throw Error(L(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(va(i,""),r.flags&=-33);var a=Qd(e);Yl(e,a,i);break;case 3:case 4:var s=r.stateNode.containerInfo,c=Qd(e);Ql(e,c,s);break;default:throw Error(L(161))}}catch(l){we(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function lx(e,t,n){U=e,mf(e)}function mf(e,t,n){for(var r=(e.mode&1)!==0;U!==null;){var i=U,a=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||yo;if(!s){var c=i.alternate,l=c!==null&&c.memoizedState!==null||ze;c=yo;var h=ze;if(yo=s,(ze=l)&&!h)for(U=i;U!==null;)s=U,l=s.child,s.tag===22&&s.memoizedState!==null?Zd(i):l!==null?(l.return=s,U=l):Zd(i);for(;a!==null;)U=a,mf(a),a=a.sibling;U=i,yo=c,ze=h}Xd(e)}else i.subtreeFlags&8772&&a!==null?(a.return=i,U=a):Xd(e)}}function Xd(e){for(;U!==null;){var t=U;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ze||_s(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ze)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Pt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Md(t,a,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Md(t,s,n)}break;case 5:var c=t.stateNode;if(n===null&&t.flags&4){n=c;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var h=t.alternate;if(h!==null){var u=h.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&ka(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(L(163))}ze||t.flags&512&&Kl(t)}catch(p){we(t,t.return,p)}}if(t===e){U=null;break}if(n=t.sibling,n!==null){n.return=t.return,U=n;break}U=t.return}}function Jd(e){for(;U!==null;){var t=U;if(t===e){U=null;break}var n=t.sibling;if(n!==null){n.return=t.return,U=n;break}U=t.return}}function Zd(e){for(;U!==null;){var t=U;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{_s(4,t)}catch(l){we(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){we(t,i,l)}}var a=t.return;try{Kl(t)}catch(l){we(t,a,l)}break;case 5:var s=t.return;try{Kl(t)}catch(l){we(t,s,l)}}}catch(l){we(t,t.return,l)}if(t===e){U=null;break}var c=t.sibling;if(c!==null){c.return=t.return,U=c;break}U=t.return}}var hx=Math.ceil,gs=bn.ReactCurrentDispatcher,hu=bn.ReactCurrentOwner,xt=bn.ReactCurrentBatchConfig,re=0,Re=null,ke=null,qe=0,st=0,ti=rr(0),Ae=0,La=null,Ir=0,Fs=0,uu=0,da=null,Ze=null,du=0,Pi=1/0,an=null,ms=!1,Xl=null,Wn=null,vo=!1,_n=null,fs=0,pa=0,Jl=null,Oo=-1,Uo=0;function Ye(){return re&6?xe():Oo!==-1?Oo:Oo=xe()}function $n(e){return e.mode&1?re&2&&qe!==0?qe&-qe:$w.transition!==null?(Uo===0&&(Uo=Jg()),Uo):(e=oe,e!==0||(e=window.event,e=e===void 0?16:am(e.type)),e):1}function Dt(e,t,n,r){if(50<pa)throw pa=0,Jl=null,Error(L(185));Ga(e,n,r),(!(re&2)||e!==Re)&&(e===Re&&(!(re&2)&&(Fs|=n),Ae===4&&Rn(e,qe)),it(e,r),n===1&&re===0&&!(t.mode&1)&&(Pi=xe()+500,qs&&ir()))}function it(e,t){var n=e.callbackNode;$b(e,t);var r=Zo(e,e===Re?qe:0);if(r===0)n!==null&&cd(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&cd(n),t===1)e.tag===0?Ww(ep.bind(null,e)):Cm(ep.bind(null,e)),Vw(function(){!(re&6)&&ir()}),n=null;else{switch(Zg(r)){case 1:n=Uh;break;case 4:n=Yg;break;case 16:n=Jo;break;case 536870912:n=Xg;break;default:n=Jo}n=Tf(n,ff.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ff(e,t){if(Oo=-1,Uo=0,re&6)throw Error(L(327));var n=e.callbackNode;if(ci()&&e.callbackNode!==n)return null;var r=Zo(e,e===Re?qe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ys(e,r);else{t=r;var i=re;re|=2;var a=vf();(Re!==e||qe!==t)&&(an=null,Pi=xe()+500,kr(e,t));do try{px();break}catch(c){yf(e,c)}while(!0);Xh(),gs.current=a,re=i,ke!==null?t=0:(Re=null,qe=0,t=Ae)}if(t!==0){if(t===2&&(i=Sl(e),i!==0&&(r=i,t=Zl(e,i))),t===1)throw n=La,kr(e,0),Rn(e,r),it(e,xe()),n;if(t===6)Rn(e,r);else{if(i=e.current.alternate,!(r&30)&&!ux(i)&&(t=ys(e,r),t===2&&(a=Sl(e),a!==0&&(r=a,t=Zl(e,a))),t===1))throw n=La,kr(e,0),Rn(e,r),it(e,xe()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(L(345));case 2:hr(e,Ze,an);break;case 3:if(Rn(e,r),(r&130023424)===r&&(t=du+500-xe(),10<t)){if(Zo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ye(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ll(hr.bind(null,e,Ze,an),t);break}hr(e,Ze,an);break;case 4:if(Rn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-Lt(r);a=1<<s,s=t[s],s>i&&(i=s),r&=~a}if(r=i,r=xe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*hx(r/1960))-r,10<r){e.timeoutHandle=Ll(hr.bind(null,e,Ze,an),r);break}hr(e,Ze,an);break;case 5:hr(e,Ze,an);break;default:throw Error(L(329))}}}return it(e,xe()),e.callbackNode===n?ff.bind(null,e):null}function Zl(e,t){var n=da;return e.current.memoizedState.isDehydrated&&(kr(e,t).flags|=256),e=ys(e,t),e!==2&&(t=Ze,Ze=n,t!==null&&eh(t)),e}function eh(e){Ze===null?Ze=e:Ze.push.apply(Ze,e)}function ux(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Mt(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Rn(e,t){for(t&=~uu,t&=~Fs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Lt(t),r=1<<n;e[n]=-1,t&=~r}}function ep(e){if(re&6)throw Error(L(327));ci();var t=Zo(e,0);if(!(t&1))return it(e,xe()),null;var n=ys(e,t);if(e.tag!==0&&n===2){var r=Sl(e);r!==0&&(t=r,n=Zl(e,r))}if(n===1)throw n=La,kr(e,0),Rn(e,t),it(e,xe()),n;if(n===6)throw Error(L(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,hr(e,Ze,an),it(e,xe()),null}function pu(e,t){var n=re;re|=1;try{return e(t)}finally{re=n,re===0&&(Pi=xe()+500,qs&&ir())}}function jr(e){_n!==null&&_n.tag===0&&!(re&6)&&ci();var t=re;re|=1;var n=xt.transition,r=oe;try{if(xt.transition=null,oe=1,e)return e()}finally{oe=r,xt.transition=n,re=t,!(re&6)&&ir()}}function gu(){st=ti.current,he(ti)}function kr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Bw(n)),ke!==null)for(n=ke.return;n!==null;){var r=n;switch(Kh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&is();break;case 3:Ci(),he(nt),he(He),ru();break;case 5:nu(r);break;case 4:Ci();break;case 13:he(me);break;case 19:he(me);break;case 10:Jh(r.type._context);break;case 22:case 23:gu()}n=n.return}if(Re=e,ke=e=Kn(e.current,null),qe=st=t,Ae=0,La=null,uu=Fs=Ir=0,Ze=da=null,pr!==null){for(t=0;t<pr.length;t++)if(n=pr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var s=a.next;a.next=i,r.next=s}n.pending=r}pr=null}return e}function yf(e,t){do{var n=ke;try{if(Xh(),Do.current=ps,ds){for(var r=ye.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ds=!1}if(Nr=0,je=Se=ye=null,ha=!1,ja=0,hu.current=null,n===null||n.return===null){Ae=1,La=t,ke=null;break}e:{var a=e,s=n.return,c=n,l=t;if(t=qe,c.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var h=l,u=c,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var p=u.alternate;p?(u.updateQueue=p.updateQueue,u.memoizedState=p.memoizedState,u.lanes=p.lanes):(u.updateQueue=null,u.memoizedState=null)}var v=Bd(s);if(v!==null){v.flags&=-257,Vd(v,s,c,a,t),v.mode&1&&Fd(a,h,t),t=v,l=h;var x=t.updateQueue;if(x===null){var b=new Set;b.add(l),t.updateQueue=b}else x.add(l);break e}else{if(!(t&1)){Fd(a,h,t),mu();break e}l=Error(L(426))}}else if(de&&c.mode&1){var k=Bd(s);if(k!==null){!(k.flags&65536)&&(k.flags|=256),Vd(k,s,c,a,t),Qh(Si(l,c));break e}}a=l=Si(l,c),Ae!==4&&(Ae=2),da===null?da=[a]:da.push(a),a=s;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var f=Zm(a,l,t);Dd(a,f);break e;case 1:c=l;var g=a.type,y=a.stateNode;if(!(a.flags&128)&&(typeof g.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Wn===null||!Wn.has(y)))){a.flags|=65536,t&=-t,a.lanes|=t;var w=ef(a,c,t);Dd(a,w);break e}}a=a.return}while(a!==null)}wf(n)}catch(T){t=T,ke===n&&n!==null&&(ke=n=n.return);continue}break}while(!0)}function vf(){var e=gs.current;return gs.current=ps,e===null?ps:e}function mu(){(Ae===0||Ae===3||Ae===2)&&(Ae=4),Re===null||!(Ir&268435455)&&!(Fs&268435455)||Rn(Re,qe)}function ys(e,t){var n=re;re|=2;var r=vf();(Re!==e||qe!==t)&&(an=null,kr(e,t));do try{dx();break}catch(i){yf(e,i)}while(!0);if(Xh(),re=n,gs.current=r,ke!==null)throw Error(L(261));return Re=null,qe=0,Ae}function dx(){for(;ke!==null;)bf(ke)}function px(){for(;ke!==null&&!Ub();)bf(ke)}function bf(e){var t=kf(e.alternate,e,st);e.memoizedProps=e.pendingProps,t===null?wf(e):ke=t,hu.current=null}function wf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=ox(n,t),n!==null){n.flags&=32767,ke=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ae=6,ke=null;return}}else if(n=ax(n,t,st),n!==null){ke=n;return}if(t=t.sibling,t!==null){ke=t;return}ke=t=e}while(t!==null);Ae===0&&(Ae=5)}function hr(e,t,n){var r=oe,i=xt.transition;try{xt.transition=null,oe=1,gx(e,t,n,r)}finally{xt.transition=i,oe=r}return null}function gx(e,t,n,r){do ci();while(_n!==null);if(re&6)throw Error(L(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(L(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(Kb(e,a),e===Re&&(ke=Re=null,qe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||vo||(vo=!0,Tf(Jo,function(){return ci(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=xt.transition,xt.transition=null;var s=oe;oe=1;var c=re;re|=4,hu.current=null,cx(e,n),gf(n,e),Dw(El),es=!!jl,El=jl=null,e.current=n,lx(n),_b(),re=c,oe=s,xt.transition=a}else e.current=n;if(vo&&(vo=!1,_n=e,fs=i),a=e.pendingLanes,a===0&&(Wn=null),Vb(n.stateNode),it(e,xe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ms)throw ms=!1,e=Xl,Xl=null,e;return fs&1&&e.tag!==0&&ci(),a=e.pendingLanes,a&1?e===Jl?pa++:(pa=0,Jl=e):pa=0,ir(),null}function ci(){if(_n!==null){var e=Zg(fs),t=xt.transition,n=oe;try{if(xt.transition=null,oe=16>e?16:e,_n===null)var r=!1;else{if(e=_n,_n=null,fs=0,re&6)throw Error(L(331));var i=re;for(re|=4,U=e.current;U!==null;){var a=U,s=a.child;if(U.flags&16){var c=a.deletions;if(c!==null){for(var l=0;l<c.length;l++){var h=c[l];for(U=h;U!==null;){var u=U;switch(u.tag){case 0:case 11:case 15:ua(8,u,a)}var d=u.child;if(d!==null)d.return=u,U=d;else for(;U!==null;){u=U;var p=u.sibling,v=u.return;if(uf(u),u===h){U=null;break}if(p!==null){p.return=v,U=p;break}U=v}}}var x=a.alternate;if(x!==null){var b=x.child;if(b!==null){x.child=null;do{var k=b.sibling;b.sibling=null,b=k}while(b!==null)}}U=a}}if(a.subtreeFlags&2064&&s!==null)s.return=a,U=s;else e:for(;U!==null;){if(a=U,a.flags&2048)switch(a.tag){case 0:case 11:case 15:ua(9,a,a.return)}var f=a.sibling;if(f!==null){f.return=a.return,U=f;break e}U=a.return}}var g=e.current;for(U=g;U!==null;){s=U;var y=s.child;if(s.subtreeFlags&2064&&y!==null)y.return=s,U=y;else e:for(s=g;U!==null;){if(c=U,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:_s(9,c)}}catch(T){we(c,c.return,T)}if(c===s){U=null;break e}var w=c.sibling;if(w!==null){w.return=c.return,U=w;break e}U=c.return}}if(re=i,ir(),Qt&&typeof Qt.onPostCommitFiberRoot=="function")try{Qt.onPostCommitFiberRoot(Es,e)}catch{}r=!0}return r}finally{oe=n,xt.transition=t}}return!1}function tp(e,t,n){t=Si(n,t),t=Zm(e,t,1),e=Gn(e,t,1),t=Ye(),e!==null&&(Ga(e,1,t),it(e,t))}function we(e,t,n){if(e.tag===3)tp(e,e,n);else for(;t!==null;){if(t.tag===3){tp(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Wn===null||!Wn.has(r))){e=Si(n,e),e=ef(t,e,1),t=Gn(t,e,1),e=Ye(),t!==null&&(Ga(t,1,e),it(t,e));break}}t=t.return}}function mx(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ye(),e.pingedLanes|=e.suspendedLanes&n,Re===e&&(qe&n)===n&&(Ae===4||Ae===3&&(qe&130023424)===qe&&500>xe()-du?kr(e,0):uu|=n),it(e,t)}function xf(e,t){t===0&&(e.mode&1?(t=so,so<<=1,!(so&130023424)&&(so=4194304)):t=1);var n=Ye();e=gn(e,t),e!==null&&(Ga(e,t,n),it(e,n))}function fx(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),xf(e,n)}function yx(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(L(314))}r!==null&&r.delete(t),xf(e,n)}var kf;kf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||nt.current)et=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return et=!1,ix(e,t,n);et=!!(e.flags&131072)}else et=!1,de&&t.flags&1048576&&Sm(t,ss,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;qo(e,t),e=t.pendingProps;var i=xi(t,He.current);si(t,n),i=au(null,t,r,e,i,n);var a=ou();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,rt(r)?(a=!0,as(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,eu(t),i.updater=Us,t.stateNode=i,i._reactInternals=t,Fl(t,r,e,n),t=zl(null,t,r,!0,a,n)):(t.tag=0,de&&a&&$h(t),Ke(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(qo(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=bx(r),e=Pt(r,e),i){case 0:t=Vl(null,t,r,e,n);break e;case 1:t=Gd(null,t,r,e,n);break e;case 11:t=zd(null,t,r,e,n);break e;case 14:t=Hd(null,t,r,Pt(r.type,e),n);break e}throw Error(L(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Pt(r,i),Vl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Pt(r,i),Gd(e,t,r,i,n);case 3:e:{if(af(t),e===null)throw Error(L(387));r=t.pendingProps,a=t.memoizedState,i=a.element,Em(e,t),hs(t,r,null,n);var s=t.memoizedState;if(r=s.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=Si(Error(L(423)),t),t=Wd(e,t,r,n,i);break e}else if(r!==i){i=Si(Error(L(424)),t),t=Wd(e,t,r,n,i);break e}else for(lt=Hn(t.stateNode.containerInfo.firstChild),ht=t,de=!0,Et=null,n=Im(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ki(),r===i){t=mn(e,t,n);break e}Ke(e,t,r,n)}t=t.child}return t;case 5:return Rm(t),e===null&&Ol(t),r=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,s=i.children,Rl(r,i)?s=null:a!==null&&Rl(r,a)&&(t.flags|=32),rf(e,t),Ke(e,t,s,n),t.child;case 6:return e===null&&Ol(t),null;case 13:return of(e,t,n);case 4:return tu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ti(t,null,r,n):Ke(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Pt(r,i),zd(e,t,r,i,n);case 7:return Ke(e,t,t.pendingProps,n),t.child;case 8:return Ke(e,t,t.pendingProps.children,n),t.child;case 12:return Ke(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,s=i.value,se(cs,r._currentValue),r._currentValue=s,a!==null)if(Mt(a.value,s)){if(a.children===i.children&&!nt.current){t=mn(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var c=a.dependencies;if(c!==null){s=a.child;for(var l=c.firstContext;l!==null;){if(l.context===r){if(a.tag===1){l=un(-1,n&-n),l.tag=2;var h=a.updateQueue;if(h!==null){h=h.shared;var u=h.pending;u===null?l.next=l:(l.next=u.next,u.next=l),h.pending=l}}a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Ul(a.return,n,t),c.lanes|=n;break}l=l.next}}else if(a.tag===10)s=a.type===t.type?null:a.child;else if(a.tag===18){if(s=a.return,s===null)throw Error(L(341));s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),Ul(s,n,t),s=a.sibling}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===t){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}Ke(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,si(t,n),i=Tt(i),r=r(i),t.flags|=1,Ke(e,t,r,n),t.child;case 14:return r=t.type,i=Pt(r,t.pendingProps),i=Pt(r.type,i),Hd(e,t,r,i,n);case 15:return tf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Pt(r,i),qo(e,t),t.tag=1,rt(r)?(e=!0,as(t)):e=!1,si(t,n),Jm(t,r,i),Fl(t,r,i,n),zl(null,t,r,!0,e,n);case 19:return sf(e,t,n);case 22:return nf(e,t,n)}throw Error(L(156,t.tag))};function Tf(e,t){return Qg(e,t)}function vx(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wt(e,t,n,r){return new vx(e,t,n,r)}function fu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function bx(e){if(typeof e=="function")return fu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Mh)return 11;if(e===qh)return 14}return 2}function Kn(e,t){var n=e.alternate;return n===null?(n=wt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function _o(e,t,n,r,i,a){var s=2;if(r=e,typeof e=="function")fu(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Gr:return Tr(n.children,i,a,t);case Dh:s=8,i|=8;break;case hl:return e=wt(12,n,t,i|2),e.elementType=hl,e.lanes=a,e;case ul:return e=wt(13,n,t,i),e.elementType=ul,e.lanes=a,e;case dl:return e=wt(19,n,t,i),e.elementType=dl,e.lanes=a,e;case Rg:return Bs(n,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case jg:s=10;break e;case Eg:s=9;break e;case Mh:s=11;break e;case qh:s=14;break e;case In:s=16,r=null;break e}throw Error(L(130,e==null?e:typeof e,""))}return t=wt(s,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function Tr(e,t,n,r){return e=wt(7,e,r,t),e.lanes=n,e}function Bs(e,t,n,r){return e=wt(22,e,r,t),e.elementType=Rg,e.lanes=n,e.stateNode={isHidden:!1},e}function Uc(e,t,n){return e=wt(6,e,null,t),e.lanes=n,e}function _c(e,t,n){return t=wt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function wx(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bc(0),this.expirationTimes=bc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function yu(e,t,n,r,i,a,s,c,l){return e=new wx(e,t,n,c,l),t===1?(t=1,a===!0&&(t|=8)):t=0,a=wt(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},eu(a),e}function xx(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Hr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Cf(e){if(!e)return Jn;e=e._reactInternals;e:{if(Lr(e)!==e||e.tag!==1)throw Error(L(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(rt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(L(171))}if(e.tag===1){var n=e.type;if(rt(n))return Tm(e,n,t)}return t}function Sf(e,t,n,r,i,a,s,c,l){return e=yu(n,r,!0,e,i,a,s,c,l),e.context=Cf(null),n=e.current,r=Ye(),i=$n(n),a=un(r,i),a.callback=t??null,Gn(n,a,i),e.current.lanes=i,Ga(e,i,r),it(e,r),e}function Vs(e,t,n,r){var i=t.current,a=Ye(),s=$n(i);return n=Cf(n),t.context===null?t.context=n:t.pendingContext=n,t=un(a,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Gn(i,t,s),e!==null&&(Dt(e,i,s,a),Lo(e,i,s)),s}function vs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function np(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function vu(e,t){np(e,t),(e=e.alternate)&&np(e,t)}function kx(){return null}var Pf=typeof reportError=="function"?reportError:function(e){console.error(e)};function bu(e){this._internalRoot=e}zs.prototype.render=bu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(L(409));Vs(e,t,null,null)};zs.prototype.unmount=bu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;jr(function(){Vs(null,e,null,null)}),t[pn]=null}};function zs(e){this._internalRoot=e}zs.prototype.unstable_scheduleHydration=function(e){if(e){var t=nm();e={blockedOn:null,target:e,priority:t};for(var n=0;n<En.length&&t!==0&&t<En[n].priority;n++);En.splice(n,0,e),n===0&&im(e)}};function wu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Hs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function rp(){}function Tx(e,t,n,r,i){if(i){if(typeof r=="function"){var a=r;r=function(){var h=vs(s);a.call(h)}}var s=Sf(t,r,e,0,null,!1,!1,"",rp);return e._reactRootContainer=s,e[pn]=s.current,Sa(e.nodeType===8?e.parentNode:e),jr(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var c=r;r=function(){var h=vs(l);c.call(h)}}var l=yu(e,0,!1,null,null,!1,!1,"",rp);return e._reactRootContainer=l,e[pn]=l.current,Sa(e.nodeType===8?e.parentNode:e),jr(function(){Vs(t,l,n,r)}),l}function Gs(e,t,n,r,i){var a=n._reactRootContainer;if(a){var s=a;if(typeof i=="function"){var c=i;i=function(){var l=vs(s);c.call(l)}}Vs(t,s,e,i)}else s=Tx(n,t,e,i,r);return vs(s)}em=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ra(t.pendingLanes);n!==0&&(_h(t,n|1),it(t,xe()),!(re&6)&&(Pi=xe()+500,ir()))}break;case 13:jr(function(){var r=gn(e,1);if(r!==null){var i=Ye();Dt(r,e,1,i)}}),vu(e,1)}};Fh=function(e){if(e.tag===13){var t=gn(e,134217728);if(t!==null){var n=Ye();Dt(t,e,134217728,n)}vu(e,134217728)}};tm=function(e){if(e.tag===13){var t=$n(e),n=gn(e,t);if(n!==null){var r=Ye();Dt(n,e,t,r)}vu(e,t)}};nm=function(){return oe};rm=function(e,t){var n=oe;try{return oe=e,t()}finally{oe=n}};kl=function(e,t,n){switch(t){case"input":if(ml(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Ms(r);if(!i)throw Error(L(90));Dg(r),ml(r,i)}}}break;case"textarea":qg(e,n);break;case"select":t=n.value,t!=null&&ri(e,!!n.multiple,t,!1)}};zg=pu;Hg=jr;var Cx={usingClientEntryPoint:!1,Events:[$a,Qr,Ms,Bg,Vg,pu]},Yi={findFiberByHostInstance:dr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Sx={bundleType:Yi.bundleType,version:Yi.version,rendererPackageName:Yi.rendererPackageName,rendererConfig:Yi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:bn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=$g(e),e===null?null:e.stateNode},findFiberByHostInstance:Yi.findFiberByHostInstance||kx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bo.isDisabled&&bo.supportsFiber)try{Es=bo.inject(Sx),Qt=bo}catch{}}pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cx;pt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!wu(t))throw Error(L(200));return xx(e,t,null,n)};pt.createRoot=function(e,t){if(!wu(e))throw Error(L(299));var n=!1,r="",i=Pf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=yu(e,1,!1,null,null,n,!1,r,i),e[pn]=t.current,Sa(e.nodeType===8?e.parentNode:e),new bu(t)};pt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(L(188)):(e=Object.keys(e).join(","),Error(L(268,e)));return e=$g(t),e=e===null?null:e.stateNode,e};pt.flushSync=function(e){return jr(e)};pt.hydrate=function(e,t,n){if(!Hs(t))throw Error(L(200));return Gs(null,e,t,!0,n)};pt.hydrateRoot=function(e,t,n){if(!wu(e))throw Error(L(405));var r=n!=null&&n.hydratedSources||null,i=!1,a="",s=Pf;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Sf(t,null,e,1,n??null,i,!1,a,s),e[pn]=t.current,Sa(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new zs(t)};pt.render=function(e,t,n){if(!Hs(t))throw Error(L(200));return Gs(null,e,t,!1,n)};pt.unmountComponentAtNode=function(e){if(!Hs(e))throw Error(L(40));return e._reactRootContainer?(jr(function(){Gs(null,null,e,!1,function(){e._reactRootContainer=null,e[pn]=null})}),!0):!1};pt.unstable_batchedUpdates=pu;pt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Hs(n))throw Error(L(200));if(e==null||e._reactInternals===void 0)throw Error(L(38));return Gs(e,t,n,!1,r)};pt.version="18.3.1-next-f1338f8080-20240426";function Af(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Af)}catch(e){console.error(e)}}Af(),Pg.exports=pt;var Qa=Pg.exports;const Px=Zv(Qa);var Nf,ip=Qa;Nf=ip.createRoot,ip.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Da(){return Da=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Da.apply(this,arguments)}var Fn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Fn||(Fn={}));const ap="popstate";function Ax(e){e===void 0&&(e={});function t(r,i){let{pathname:a,search:s,hash:c}=r.location;return th("",{pathname:a,search:s,hash:c},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:bs(i)}return Ix(t,n,null,e)}function Te(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function If(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Nx(){return Math.random().toString(36).substr(2,8)}function op(e,t){return{usr:e.state,key:e.key,idx:t}}function th(e,t,n,r){return n===void 0&&(n=null),Da({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Oi(t):t,{state:n,key:t&&t.key||r||Nx()})}function bs(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Oi(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Ix(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:a=!1}=r,s=i.history,c=Fn.Pop,l=null,h=u();h==null&&(h=0,s.replaceState(Da({},s.state,{idx:h}),""));function u(){return(s.state||{idx:null}).idx}function d(){c=Fn.Pop;let k=u(),f=k==null?null:k-h;h=k,l&&l({action:c,location:b.location,delta:f})}function p(k,f){c=Fn.Push;let g=th(b.location,k,f);h=u()+1;let y=op(g,h),w=b.createHref(g);try{s.pushState(y,"",w)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;i.location.assign(w)}a&&l&&l({action:c,location:b.location,delta:1})}function v(k,f){c=Fn.Replace;let g=th(b.location,k,f);h=u();let y=op(g,h),w=b.createHref(g);s.replaceState(y,"",w),a&&l&&l({action:c,location:b.location,delta:0})}function x(k){let f=i.location.origin!=="null"?i.location.origin:i.location.href,g=typeof k=="string"?k:bs(k);return g=g.replace(/ $/,"%20"),Te(f,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,f)}let b={get action(){return c},get location(){return e(i,s)},listen(k){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(ap,d),l=k,()=>{i.removeEventListener(ap,d),l=null}},createHref(k){return t(i,k)},createURL:x,encodeLocation(k){let f=x(k);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:p,replace:v,go(k){return s.go(k)}};return b}var sp;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(sp||(sp={}));function jx(e,t,n){return n===void 0&&(n="/"),Ex(e,t,n,!1)}function Ex(e,t,n,r){let i=typeof t=="string"?Oi(t):t,a=xu(i.pathname||"/",n);if(a==null)return null;let s=jf(e);Rx(s);let c=null;for(let l=0;c==null&&l<s.length;++l){let h=zx(a);c=Bx(s[l],h,r)}return c}function jf(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(a,s,c)=>{let l={relativePath:c===void 0?a.path||"":c,caseSensitive:a.caseSensitive===!0,childrenIndex:s,route:a};l.relativePath.startsWith("/")&&(Te(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let h=Qn([r,l.relativePath]),u=n.concat(l);a.children&&a.children.length>0&&(Te(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+h+'".')),jf(a.children,t,u,h)),!(a.path==null&&!a.index)&&t.push({path:h,score:_x(h,a.index),routesMeta:u})};return e.forEach((a,s)=>{var c;if(a.path===""||!((c=a.path)!=null&&c.includes("?")))i(a,s);else for(let l of Ef(a.path))i(a,s,l)}),t}function Ef(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),a=n.replace(/\?$/,"");if(r.length===0)return i?[a,""]:[a];let s=Ef(r.join("/")),c=[];return c.push(...s.map(l=>l===""?a:[a,l].join("/"))),i&&c.push(...s),c.map(l=>e.startsWith("/")&&l===""?"/":l)}function Rx(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Fx(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Lx=/^:[\w-]+$/,Dx=3,Mx=2,qx=1,Ox=10,Ux=-2,cp=e=>e==="*";function _x(e,t){let n=e.split("/"),r=n.length;return n.some(cp)&&(r+=Ux),t&&(r+=Mx),n.filter(i=>!cp(i)).reduce((i,a)=>i+(Lx.test(a)?Dx:a===""?qx:Ox),r)}function Fx(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Bx(e,t,n){let{routesMeta:r}=e,i={},a="/",s=[];for(let c=0;c<r.length;++c){let l=r[c],h=c===r.length-1,u=a==="/"?t:t.slice(a.length)||"/",d=lp({path:l.relativePath,caseSensitive:l.caseSensitive,end:h},u),p=l.route;if(!d&&h&&n&&!r[r.length-1].route.index&&(d=lp({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},u)),!d)return null;Object.assign(i,d.params),s.push({params:i,pathname:Qn([a,d.pathname]),pathnameBase:$x(Qn([a,d.pathnameBase])),route:p}),d.pathnameBase!=="/"&&(a=Qn([a,d.pathnameBase]))}return s}function lp(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Vx(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],s=a.replace(/(.)\/+$/,"$1"),c=i.slice(1);return{params:r.reduce((h,u,d)=>{let{paramName:p,isOptional:v}=u;if(p==="*"){let b=c[d]||"";s=a.slice(0,a.length-b.length).replace(/(.)\/+$/,"$1")}const x=c[d];return v&&!x?h[p]=void 0:h[p]=(x||"").replace(/%2F/g,"/"),h},{}),pathname:a,pathnameBase:s,pattern:e}}function Vx(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),If(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,c,l)=>(r.push({paramName:c,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function zx(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return If(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function xu(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Hx(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Oi(e):e;return{pathname:n?n.startsWith("/")?n:Gx(n,t):t,search:Kx(r),hash:Qx(i)}}function Gx(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Fc(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Wx(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Rf(e,t){let n=Wx(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Lf(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Oi(e):(i=Da({},e),Te(!i.pathname||!i.pathname.includes("?"),Fc("?","pathname","search",i)),Te(!i.pathname||!i.pathname.includes("#"),Fc("#","pathname","hash",i)),Te(!i.search||!i.search.includes("#"),Fc("#","search","hash",i)));let a=e===""||i.pathname==="",s=a?"/":i.pathname,c;if(s==null)c=n;else{let d=t.length-1;if(!r&&s.startsWith("..")){let p=s.split("/");for(;p[0]==="..";)p.shift(),d-=1;i.pathname=p.join("/")}c=d>=0?t[d]:"/"}let l=Hx(i,c),h=s&&s!=="/"&&s.endsWith("/"),u=(a||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(h||u)&&(l.pathname+="/"),l}const Qn=e=>e.join("/").replace(/\/\/+/g,"/"),$x=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Kx=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Qx=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Yx(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Df=["post","put","patch","delete"];new Set(Df);const Xx=["get",...Df];new Set(Xx);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ma(){return Ma=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ma.apply(this,arguments)}const ku=m.createContext(null),Jx=m.createContext(null),Dr=m.createContext(null),Ws=m.createContext(null),ar=m.createContext({outlet:null,matches:[],isDataRoute:!1}),Mf=m.createContext(null);function Zx(e,t){let{relative:n}=t===void 0?{}:t;Ya()||Te(!1);let{basename:r,navigator:i}=m.useContext(Dr),{hash:a,pathname:s,search:c}=Uf(e,{relative:n}),l=s;return r!=="/"&&(l=s==="/"?r:Qn([r,s])),i.createHref({pathname:l,search:c,hash:a})}function Ya(){return m.useContext(Ws)!=null}function Ut(){return Ya()||Te(!1),m.useContext(Ws).location}function qf(e){m.useContext(Dr).static||m.useLayoutEffect(e)}function Of(){let{isDataRoute:e}=m.useContext(ar);return e?pk():ek()}function ek(){Ya()||Te(!1);let e=m.useContext(ku),{basename:t,future:n,navigator:r}=m.useContext(Dr),{matches:i}=m.useContext(ar),{pathname:a}=Ut(),s=JSON.stringify(Rf(i,n.v7_relativeSplatPath)),c=m.useRef(!1);return qf(()=>{c.current=!0}),m.useCallback(function(h,u){if(u===void 0&&(u={}),!c.current)return;if(typeof h=="number"){r.go(h);return}let d=Lf(h,JSON.parse(s),a,u.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:Qn([t,d.pathname])),(u.replace?r.replace:r.push)(d,u.state,u)},[t,r,s,a,e])}function tk(){let{matches:e}=m.useContext(ar),t=e[e.length-1];return t?t.params:{}}function Uf(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=m.useContext(Dr),{matches:i}=m.useContext(ar),{pathname:a}=Ut(),s=JSON.stringify(Rf(i,r.v7_relativeSplatPath));return m.useMemo(()=>Lf(e,JSON.parse(s),a,n==="path"),[e,s,a,n])}function nk(e,t){return rk(e,t)}function rk(e,t,n,r){Ya()||Te(!1);let{navigator:i}=m.useContext(Dr),{matches:a}=m.useContext(ar),s=a[a.length-1],c=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let h=Ut(),u;if(t){var d;let k=typeof t=="string"?Oi(t):t;l==="/"||(d=k.pathname)!=null&&d.startsWith(l)||Te(!1),u=k}else u=h;let p=u.pathname||"/",v=p;if(l!=="/"){let k=l.replace(/^\//,"").split("/");v="/"+p.replace(/^\//,"").split("/").slice(k.length).join("/")}let x=jx(e,{pathname:v}),b=ck(x&&x.map(k=>Object.assign({},k,{params:Object.assign({},c,k.params),pathname:Qn([l,i.encodeLocation?i.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?l:Qn([l,i.encodeLocation?i.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),a,n,r);return t&&b?m.createElement(Ws.Provider,{value:{location:Ma({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Fn.Pop}},b):b}function ik(){let e=dk(),t=Yx(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return m.createElement(m.Fragment,null,m.createElement("h2",null,"Unexpected Application Error!"),m.createElement("h3",{style:{fontStyle:"italic"}},t),n?m.createElement("pre",{style:i},n):null,null)}const ak=m.createElement(ik,null);class ok extends m.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?m.createElement(ar.Provider,{value:this.props.routeContext},m.createElement(Mf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function sk(e){let{routeContext:t,match:n,children:r}=e,i=m.useContext(ku);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),m.createElement(ar.Provider,{value:t},r)}function ck(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var a;if(!n)return null;if(n.errors)e=n.matches;else if((a=r)!=null&&a.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,c=(i=n)==null?void 0:i.errors;if(c!=null){let u=s.findIndex(d=>d.route.id&&(c==null?void 0:c[d.route.id])!==void 0);u>=0||Te(!1),s=s.slice(0,Math.min(s.length,u+1))}let l=!1,h=-1;if(n&&r&&r.v7_partialHydration)for(let u=0;u<s.length;u++){let d=s[u];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(h=u),d.route.id){let{loaderData:p,errors:v}=n,x=d.route.loader&&p[d.route.id]===void 0&&(!v||v[d.route.id]===void 0);if(d.route.lazy||x){l=!0,h>=0?s=s.slice(0,h+1):s=[s[0]];break}}}return s.reduceRight((u,d,p)=>{let v,x=!1,b=null,k=null;n&&(v=c&&d.route.id?c[d.route.id]:void 0,b=d.route.errorElement||ak,l&&(h<0&&p===0?(x=!0,k=null):h===p&&(x=!0,k=d.route.hydrateFallbackElement||null)));let f=t.concat(s.slice(0,p+1)),g=()=>{let y;return v?y=b:x?y=k:d.route.Component?y=m.createElement(d.route.Component,null):d.route.element?y=d.route.element:y=u,m.createElement(sk,{match:d,routeContext:{outlet:u,matches:f,isDataRoute:n!=null},children:y})};return n&&(d.route.ErrorBoundary||d.route.errorElement||p===0)?m.createElement(ok,{location:n.location,revalidation:n.revalidation,component:b,error:v,children:g(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):g()},null)}var _f=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(_f||{}),ws=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ws||{});function lk(e){let t=m.useContext(ku);return t||Te(!1),t}function hk(e){let t=m.useContext(Jx);return t||Te(!1),t}function uk(e){let t=m.useContext(ar);return t||Te(!1),t}function Ff(e){let t=uk(),n=t.matches[t.matches.length-1];return n.route.id||Te(!1),n.route.id}function dk(){var e;let t=m.useContext(Mf),n=hk(ws.UseRouteError),r=Ff(ws.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function pk(){let{router:e}=lk(_f.UseNavigateStable),t=Ff(ws.UseNavigateStable),n=m.useRef(!1);return qf(()=>{n.current=!0}),m.useCallback(function(i,a){a===void 0&&(a={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Ma({fromRouteId:t},a)))},[e,t])}function gk(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Pn(e){Te(!1)}function mk(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Fn.Pop,navigator:a,static:s=!1,future:c}=e;Ya()&&Te(!1);let l=t.replace(/^\/*/,"/"),h=m.useMemo(()=>({basename:l,navigator:a,static:s,future:Ma({v7_relativeSplatPath:!1},c)}),[l,c,a,s]);typeof r=="string"&&(r=Oi(r));let{pathname:u="/",search:d="",hash:p="",state:v=null,key:x="default"}=r,b=m.useMemo(()=>{let k=xu(u,l);return k==null?null:{location:{pathname:k,search:d,hash:p,state:v,key:x},navigationType:i}},[l,u,d,p,v,x,i]);return b==null?null:m.createElement(Dr.Provider,{value:h},m.createElement(Ws.Provider,{children:n,value:b}))}function fk(e){let{children:t,location:n}=e;return nk(nh(t),n)}new Promise(()=>{});function nh(e,t){t===void 0&&(t=[]);let n=[];return m.Children.forEach(e,(r,i)=>{if(!m.isValidElement(r))return;let a=[...t,i];if(r.type===m.Fragment){n.push.apply(n,nh(r.props.children,a));return}r.type!==Pn&&Te(!1),!r.props.index||!r.props.children||Te(!1);let s={id:r.props.id||a.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=nh(r.props.children,a)),n.push(s)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function rh(){return rh=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},rh.apply(this,arguments)}function yk(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function vk(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function bk(e,t){return e.button===0&&(!t||t==="_self")&&!vk(e)}function ih(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(i=>[n,i]):[[n,r]])},[]))}function wk(e,t){let n=ih(e);return t&&t.forEach((r,i)=>{n.has(i)||t.getAll(i).forEach(a=>{n.append(i,a)})}),n}const xk=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],kk="6";try{window.__reactRouterVersion=kk}catch{}const Tk="startTransition",hp=Ih[Tk];function Ck(e){let{basename:t,children:n,future:r,window:i}=e,a=m.useRef();a.current==null&&(a.current=Ax({window:i,v5Compat:!0}));let s=a.current,[c,l]=m.useState({action:s.action,location:s.location}),{v7_startTransition:h}=r||{},u=m.useCallback(d=>{h&&hp?hp(()=>l(d)):l(d)},[l,h]);return m.useLayoutEffect(()=>s.listen(u),[s,u]),m.useEffect(()=>gk(r),[r]),m.createElement(mk,{basename:t,children:n,location:c.location,navigationType:c.action,navigator:s,future:r})}const Sk=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Pk=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,fe=m.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:a,replace:s,state:c,target:l,to:h,preventScrollReset:u,viewTransition:d}=t,p=yk(t,xk),{basename:v}=m.useContext(Dr),x,b=!1;if(typeof h=="string"&&Pk.test(h)&&(x=h,Sk))try{let y=new URL(window.location.href),w=h.startsWith("//")?new URL(y.protocol+h):new URL(h),T=xu(w.pathname,v);w.origin===y.origin&&T!=null?h=T+w.search+w.hash:b=!0}catch{}let k=Zx(h,{relative:i}),f=Ak(h,{replace:s,state:c,target:l,preventScrollReset:u,relative:i,viewTransition:d});function g(y){r&&r(y),y.defaultPrevented||f(y)}return m.createElement("a",rh({},p,{href:x||k,onClick:b||a?r:g,ref:n,target:l}))});var up;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(up||(up={}));var dp;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(dp||(dp={}));function Ak(e,t){let{target:n,replace:r,state:i,preventScrollReset:a,relative:s,viewTransition:c}=t===void 0?{}:t,l=Of(),h=Ut(),u=Uf(e,{relative:s});return m.useCallback(d=>{if(bk(d,n)){d.preventDefault();let p=r!==void 0?r:bs(h)===bs(u);l(e,{replace:p,state:i,preventScrollReset:a,relative:s,viewTransition:c})}},[h,l,u,r,i,n,e,a,s,c])}function Nk(e){let t=m.useRef(ih(e)),n=m.useRef(!1),r=Ut(),i=m.useMemo(()=>wk(r.search,n.current?null:t.current),[r.search]),a=Of(),s=m.useCallback((c,l)=>{const h=ih(typeof c=="function"?c(i):c);n.current=!0,a("?"+h,l)},[a,i]);return[i,s]}const Ik=3,jk=500;let Bc=0;function Ek(){return Bc=(Bc+1)%Number.MAX_SAFE_INTEGER,Bc.toString()}const Vc=new Map,pp=e=>{if(Vc.has(e))return;const t=setTimeout(()=>{Vc.delete(e),ga({type:"REMOVE_TOAST",toastId:e})},jk);Vc.set(e,t)},Rk=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,Ik)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(n=>n.id===t.toast.id?{...n,...t.toast}:n)};case"DISMISS_TOAST":{const{toastId:n}=t;return n?pp(n):e.toasts.forEach(r=>{pp(r.id)}),{...e,toasts:e.toasts.map(r=>r.id===n||n===void 0?{...r,open:!1}:r)}}case"REMOVE_TOAST":return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(n=>n.id!==t.toastId)}}},Fo=[];let Bo={toasts:[]};function ga(e){Bo=Rk(Bo,e),Fo.forEach(t=>{t(Bo)})}function Lk({...e}){const t=Ek(),n=i=>ga({type:"UPDATE_TOAST",toast:{...i,id:t}}),r=()=>ga({type:"DISMISS_TOAST",toastId:t});return ga({type:"ADD_TOAST",toast:{...e,id:t,open:!0,onOpenChange:i=>{i||r()}}}),{id:t,dismiss:r,update:n}}function $s(){const[e,t]=m.useState(Bo);return m.useEffect(()=>(Fo.push(t),()=>{const n=Fo.indexOf(t);n>-1&&Fo.splice(n,1)}),[e]),{...e,toast:Lk,dismiss:n=>ga({type:"DISMISS_TOAST",toastId:n})}}function pe(e,t,{checkForDefaultPrevented:n=!0}={}){return function(i){if(e==null||e(i),n===!1||!i.defaultPrevented)return t==null?void 0:t(i)}}function gp(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function Bf(...e){return t=>{let n=!1;const r=e.map(i=>{const a=gp(i,t);return!n&&typeof a=="function"&&(n=!0),a});if(n)return()=>{for(let i=0;i<r.length;i++){const a=r[i];typeof a=="function"?a():gp(e[i],null)}}}}function at(...e){return m.useCallback(Bf(...e),e)}function Xa(e,t=[]){let n=[];function r(a,s){const c=m.createContext(s),l=n.length;n=[...n,s];const h=d=>{var f;const{scope:p,children:v,...x}=d,b=((f=p==null?void 0:p[e])==null?void 0:f[l])||c,k=m.useMemo(()=>x,Object.values(x));return o.jsx(b.Provider,{value:k,children:v})};h.displayName=a+"Provider";function u(d,p){var b;const v=((b=p==null?void 0:p[e])==null?void 0:b[l])||c,x=m.useContext(v);if(x)return x;if(s!==void 0)return s;throw new Error(`\`${d}\` must be used within \`${a}\``)}return[h,u]}const i=()=>{const a=n.map(s=>m.createContext(s));return function(c){const l=(c==null?void 0:c[e])||a;return m.useMemo(()=>({[`__scope${e}`]:{...c,[e]:l}}),[c,l])}};return i.scopeName=e,[r,Dk(i,...t)]}function Dk(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(i=>({useScope:i(),scopeName:i.scopeName}));return function(a){const s=r.reduce((c,{useScope:l,scopeName:h})=>{const d=l(a)[`__scope${h}`];return{...c,...d}},{});return m.useMemo(()=>({[`__scope${t.scopeName}`]:s}),[s])}};return n.scopeName=t.scopeName,n}function qa(e){const t=qk(e),n=m.forwardRef((r,i)=>{const{children:a,...s}=r,c=m.Children.toArray(a),l=c.find(Uk);if(l){const h=l.props.children,u=c.map(d=>d===l?m.Children.count(h)>1?m.Children.only(null):m.isValidElement(h)?h.props.children:null:d);return o.jsx(t,{...s,ref:i,children:m.isValidElement(h)?m.cloneElement(h,void 0,u):null})}return o.jsx(t,{...s,ref:i,children:a})});return n.displayName=`${e}.Slot`,n}var Mk=qa("Slot");function qk(e){const t=m.forwardRef((n,r)=>{const{children:i,...a}=n;if(m.isValidElement(i)){const s=Fk(i),c=_k(a,i.props);return i.type!==m.Fragment&&(c.ref=r?Bf(r,s):s),m.cloneElement(i,c)}return m.Children.count(i)>1?m.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}var Vf=Symbol("radix.slottable");function Ok(e){const t=({children:n})=>o.jsx(o.Fragment,{children:n});return t.displayName=`${e}.Slottable`,t.__radixId=Vf,t}function Uk(e){return m.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===Vf}function _k(e,t){const n={...t};for(const r in t){const i=e[r],a=t[r];/^on[A-Z]/.test(r)?i&&a?n[r]=(...c)=>{const l=a(...c);return i(...c),l}:i&&(n[r]=i):r==="style"?n[r]={...i,...a}:r==="className"&&(n[r]=[i,a].filter(Boolean).join(" "))}return{...e,...n}}function Fk(e){var r,i;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(i=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:i.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}function Bk(e){const t=e+"CollectionProvider",[n,r]=Xa(t),[i,a]=n(t,{collectionRef:{current:null},itemMap:new Map}),s=b=>{const{scope:k,children:f}=b,g=sr.useRef(null),y=sr.useRef(new Map).current;return o.jsx(i,{scope:k,itemMap:y,collectionRef:g,children:f})};s.displayName=t;const c=e+"CollectionSlot",l=qa(c),h=sr.forwardRef((b,k)=>{const{scope:f,children:g}=b,y=a(c,f),w=at(k,y.collectionRef);return o.jsx(l,{ref:w,children:g})});h.displayName=c;const u=e+"CollectionItemSlot",d="data-radix-collection-item",p=qa(u),v=sr.forwardRef((b,k)=>{const{scope:f,children:g,...y}=b,w=sr.useRef(null),T=at(k,w),C=a(u,f);return sr.useEffect(()=>(C.itemMap.set(w,{ref:w,...y}),()=>void C.itemMap.delete(w))),o.jsx(p,{[d]:"",ref:T,children:g})});v.displayName=u;function x(b){const k=a(e+"CollectionConsumer",b);return sr.useCallback(()=>{const g=k.collectionRef.current;if(!g)return[];const y=Array.from(g.querySelectorAll(`[${d}]`));return Array.from(k.itemMap.values()).sort((C,P)=>y.indexOf(C.ref.current)-y.indexOf(P.ref.current))},[k.collectionRef,k.itemMap])}return[{Provider:s,Slot:h,ItemSlot:v},x,r]}var Vk=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],Ue=Vk.reduce((e,t)=>{const n=qa(`Primitive.${t}`),r=m.forwardRef((i,a)=>{const{asChild:s,...c}=i,l=s?n:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),o.jsx(l,{...c,ref:a})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{});function zf(e,t){e&&Qa.flushSync(()=>e.dispatchEvent(t))}function Jt(e){const t=m.useRef(e);return m.useEffect(()=>{t.current=e}),m.useMemo(()=>(...n)=>{var r;return(r=t.current)==null?void 0:r.call(t,...n)},[])}function zk(e,t=globalThis==null?void 0:globalThis.document){const n=Jt(e);m.useEffect(()=>{const r=i=>{i.key==="Escape"&&n(i)};return t.addEventListener("keydown",r,{capture:!0}),()=>t.removeEventListener("keydown",r,{capture:!0})},[n,t])}var Hk="DismissableLayer",ah="dismissableLayer.update",Gk="dismissableLayer.pointerDownOutside",Wk="dismissableLayer.focusOutside",mp,Hf=m.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),Ks=m.forwardRef((e,t)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:r,onPointerDownOutside:i,onFocusOutside:a,onInteractOutside:s,onDismiss:c,...l}=e,h=m.useContext(Hf),[u,d]=m.useState(null),p=(u==null?void 0:u.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,v]=m.useState({}),x=at(t,P=>d(P)),b=Array.from(h.layers),[k]=[...h.layersWithOutsidePointerEventsDisabled].slice(-1),f=b.indexOf(k),g=u?b.indexOf(u):-1,y=h.layersWithOutsidePointerEventsDisabled.size>0,w=g>=f,T=Kk(P=>{const S=P.target,A=[...h.branches].some(j=>j.contains(S));!w||A||(i==null||i(P),s==null||s(P),P.defaultPrevented||c==null||c())},p),C=Qk(P=>{const S=P.target;[...h.branches].some(j=>j.contains(S))||(a==null||a(P),s==null||s(P),P.defaultPrevented||c==null||c())},p);return zk(P=>{g===h.layers.size-1&&(r==null||r(P),!P.defaultPrevented&&c&&(P.preventDefault(),c()))},p),m.useEffect(()=>{if(u)return n&&(h.layersWithOutsidePointerEventsDisabled.size===0&&(mp=p.body.style.pointerEvents,p.body.style.pointerEvents="none"),h.layersWithOutsidePointerEventsDisabled.add(u)),h.layers.add(u),fp(),()=>{n&&h.layersWithOutsidePointerEventsDisabled.size===1&&(p.body.style.pointerEvents=mp)}},[u,p,n,h]),m.useEffect(()=>()=>{u&&(h.layers.delete(u),h.layersWithOutsidePointerEventsDisabled.delete(u),fp())},[u,h]),m.useEffect(()=>{const P=()=>v({});return document.addEventListener(ah,P),()=>document.removeEventListener(ah,P)},[]),o.jsx(Ue.div,{...l,ref:x,style:{pointerEvents:y?w?"auto":"none":void 0,...e.style},onFocusCapture:pe(e.onFocusCapture,C.onFocusCapture),onBlurCapture:pe(e.onBlurCapture,C.onBlurCapture),onPointerDownCapture:pe(e.onPointerDownCapture,T.onPointerDownCapture)})});Ks.displayName=Hk;var $k="DismissableLayerBranch",Gf=m.forwardRef((e,t)=>{const n=m.useContext(Hf),r=m.useRef(null),i=at(t,r);return m.useEffect(()=>{const a=r.current;if(a)return n.branches.add(a),()=>{n.branches.delete(a)}},[n.branches]),o.jsx(Ue.div,{...e,ref:i})});Gf.displayName=$k;function Kk(e,t=globalThis==null?void 0:globalThis.document){const n=Jt(e),r=m.useRef(!1),i=m.useRef(()=>{});return m.useEffect(()=>{const a=c=>{if(c.target&&!r.current){let l=function(){Wf(Gk,n,h,{discrete:!0})};const h={originalEvent:c};c.pointerType==="touch"?(t.removeEventListener("click",i.current),i.current=l,t.addEventListener("click",i.current,{once:!0})):l()}else t.removeEventListener("click",i.current);r.current=!1},s=window.setTimeout(()=>{t.addEventListener("pointerdown",a)},0);return()=>{window.clearTimeout(s),t.removeEventListener("pointerdown",a),t.removeEventListener("click",i.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}function Qk(e,t=globalThis==null?void 0:globalThis.document){const n=Jt(e),r=m.useRef(!1);return m.useEffect(()=>{const i=a=>{a.target&&!r.current&&Wf(Wk,n,{originalEvent:a},{discrete:!1})};return t.addEventListener("focusin",i),()=>t.removeEventListener("focusin",i)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}function fp(){const e=new CustomEvent(ah);document.dispatchEvent(e)}function Wf(e,t,n,{discrete:r}){const i=n.originalEvent.target,a=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&i.addEventListener(e,t,{once:!0}),r?zf(i,a):i.dispatchEvent(a)}var Yk=Ks,Xk=Gf,fn=globalThis!=null&&globalThis.document?m.useLayoutEffect:()=>{},Jk="Portal",Tu=m.forwardRef((e,t)=>{var c;const{container:n,...r}=e,[i,a]=m.useState(!1);fn(()=>a(!0),[]);const s=n||i&&((c=globalThis==null?void 0:globalThis.document)==null?void 0:c.body);return s?Px.createPortal(o.jsx(Ue.div,{...r,ref:t}),s):null});Tu.displayName=Jk;function Zk(e,t){return m.useReducer((n,r)=>t[n][r]??n,e)}var Ja=e=>{const{present:t,children:n}=e,r=e0(t),i=typeof n=="function"?n({present:r.isPresent}):m.Children.only(n),a=at(r.ref,t0(i));return typeof n=="function"||r.isPresent?m.cloneElement(i,{ref:a}):null};Ja.displayName="Presence";function e0(e){const[t,n]=m.useState(),r=m.useRef(null),i=m.useRef(e),a=m.useRef("none"),s=e?"mounted":"unmounted",[c,l]=Zk(s,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return m.useEffect(()=>{const h=wo(r.current);a.current=c==="mounted"?h:"none"},[c]),fn(()=>{const h=r.current,u=i.current;if(u!==e){const p=a.current,v=wo(h);e?l("MOUNT"):v==="none"||(h==null?void 0:h.display)==="none"?l("UNMOUNT"):l(u&&p!==v?"ANIMATION_OUT":"UNMOUNT"),i.current=e}},[e,l]),fn(()=>{if(t){let h;const u=t.ownerDocument.defaultView??window,d=v=>{const b=wo(r.current).includes(v.animationName);if(v.target===t&&b&&(l("ANIMATION_END"),!i.current)){const k=t.style.animationFillMode;t.style.animationFillMode="forwards",h=u.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=k)})}},p=v=>{v.target===t&&(a.current=wo(r.current))};return t.addEventListener("animationstart",p),t.addEventListener("animationcancel",d),t.addEventListener("animationend",d),()=>{u.clearTimeout(h),t.removeEventListener("animationstart",p),t.removeEventListener("animationcancel",d),t.removeEventListener("animationend",d)}}else l("ANIMATION_END")},[t,l]),{isPresent:["mounted","unmountSuspended"].includes(c),ref:m.useCallback(h=>{r.current=h?getComputedStyle(h):null,n(h)},[])}}function wo(e){return(e==null?void 0:e.animationName)||"none"}function t0(e){var r,i;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(i=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:i.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var n0=Ih[" useInsertionEffect ".trim().toString()]||fn;function Cu({prop:e,defaultProp:t,onChange:n=()=>{},caller:r}){const[i,a,s]=r0({defaultProp:t,onChange:n}),c=e!==void 0,l=c?e:i;{const u=m.useRef(e!==void 0);m.useEffect(()=>{const d=u.current;d!==c&&console.warn(`${r} is changing from ${d?"controlled":"uncontrolled"} to ${c?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),u.current=c},[c,r])}const h=m.useCallback(u=>{var d;if(c){const p=i0(u)?u(e):u;p!==e&&((d=s.current)==null||d.call(s,p))}else a(u)},[c,e,a,s]);return[l,h]}function r0({defaultProp:e,onChange:t}){const[n,r]=m.useState(e),i=m.useRef(n),a=m.useRef(t);return n0(()=>{a.current=t},[t]),m.useEffect(()=>{var s;i.current!==n&&((s=a.current)==null||s.call(a,n),i.current=n)},[n,i]),[n,r,a]}function i0(e){return typeof e=="function"}var a0=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"}),o0="VisuallyHidden",Qs=m.forwardRef((e,t)=>o.jsx(Ue.span,{...e,ref:t,style:{...a0,...e.style}}));Qs.displayName=o0;var s0=Qs,Su="ToastProvider",[Pu,c0,l0]=Bk("Toast"),[$f,UN]=Xa("Toast",[l0]),[h0,Ys]=$f(Su),Kf=e=>{const{__scopeToast:t,label:n="Notification",duration:r=5e3,swipeDirection:i="right",swipeThreshold:a=50,children:s}=e,[c,l]=m.useState(null),[h,u]=m.useState(0),d=m.useRef(!1),p=m.useRef(!1);return n.trim()||console.error(`Invalid prop \`label\` supplied to \`${Su}\`. Expected non-empty \`string\`.`),o.jsx(Pu.Provider,{scope:t,children:o.jsx(h0,{scope:t,label:n,duration:r,swipeDirection:i,swipeThreshold:a,toastCount:h,viewport:c,onViewportChange:l,onToastAdd:m.useCallback(()=>u(v=>v+1),[]),onToastRemove:m.useCallback(()=>u(v=>v-1),[]),isFocusedToastEscapeKeyDownRef:d,isClosePausedRef:p,children:s})})};Kf.displayName=Su;var Qf="ToastViewport",u0=["F8"],oh="toast.viewportPause",sh="toast.viewportResume",Yf=m.forwardRef((e,t)=>{const{__scopeToast:n,hotkey:r=u0,label:i="Notifications ({hotkey})",...a}=e,s=Ys(Qf,n),c=c0(n),l=m.useRef(null),h=m.useRef(null),u=m.useRef(null),d=m.useRef(null),p=at(t,d,s.onViewportChange),v=r.join("+").replace(/Key/g,"").replace(/Digit/g,""),x=s.toastCount>0;m.useEffect(()=>{const k=f=>{var y;r.length!==0&&r.every(w=>f[w]||f.code===w)&&((y=d.current)==null||y.focus())};return document.addEventListener("keydown",k),()=>document.removeEventListener("keydown",k)},[r]),m.useEffect(()=>{const k=l.current,f=d.current;if(x&&k&&f){const g=()=>{if(!s.isClosePausedRef.current){const C=new CustomEvent(oh);f.dispatchEvent(C),s.isClosePausedRef.current=!0}},y=()=>{if(s.isClosePausedRef.current){const C=new CustomEvent(sh);f.dispatchEvent(C),s.isClosePausedRef.current=!1}},w=C=>{!k.contains(C.relatedTarget)&&y()},T=()=>{k.contains(document.activeElement)||y()};return k.addEventListener("focusin",g),k.addEventListener("focusout",w),k.addEventListener("pointermove",g),k.addEventListener("pointerleave",T),window.addEventListener("blur",g),window.addEventListener("focus",y),()=>{k.removeEventListener("focusin",g),k.removeEventListener("focusout",w),k.removeEventListener("pointermove",g),k.removeEventListener("pointerleave",T),window.removeEventListener("blur",g),window.removeEventListener("focus",y)}}},[x,s.isClosePausedRef]);const b=m.useCallback(({tabbingDirection:k})=>{const g=c().map(y=>{const w=y.ref.current,T=[w,...C0(w)];return k==="forwards"?T:T.reverse()});return(k==="forwards"?g.reverse():g).flat()},[c]);return m.useEffect(()=>{const k=d.current;if(k){const f=g=>{var T,C,P;const y=g.altKey||g.ctrlKey||g.metaKey;if(g.key==="Tab"&&!y){const S=document.activeElement,A=g.shiftKey;if(g.target===k&&A){(T=h.current)==null||T.focus();return}const D=b({tabbingDirection:A?"backwards":"forwards"}),J=D.findIndex(O=>O===S);zc(D.slice(J+1))?g.preventDefault():A?(C=h.current)==null||C.focus():(P=u.current)==null||P.focus()}};return k.addEventListener("keydown",f),()=>k.removeEventListener("keydown",f)}},[c,b]),o.jsxs(Xk,{ref:l,role:"region","aria-label":i.replace("{hotkey}",v),tabIndex:-1,style:{pointerEvents:x?void 0:"none"},children:[x&&o.jsx(ch,{ref:h,onFocusFromOutsideViewport:()=>{const k=b({tabbingDirection:"forwards"});zc(k)}}),o.jsx(Pu.Slot,{scope:n,children:o.jsx(Ue.ol,{tabIndex:-1,...a,ref:p})}),x&&o.jsx(ch,{ref:u,onFocusFromOutsideViewport:()=>{const k=b({tabbingDirection:"backwards"});zc(k)}})]})});Yf.displayName=Qf;var Xf="ToastFocusProxy",ch=m.forwardRef((e,t)=>{const{__scopeToast:n,onFocusFromOutsideViewport:r,...i}=e,a=Ys(Xf,n);return o.jsx(Qs,{"aria-hidden":!0,tabIndex:0,...i,ref:t,style:{position:"fixed"},onFocus:s=>{var h;const c=s.relatedTarget;!((h=a.viewport)!=null&&h.contains(c))&&r()}})});ch.displayName=Xf;var Za="Toast",d0="toast.swipeStart",p0="toast.swipeMove",g0="toast.swipeCancel",m0="toast.swipeEnd",Jf=m.forwardRef((e,t)=>{const{forceMount:n,open:r,defaultOpen:i,onOpenChange:a,...s}=e,[c,l]=Cu({prop:r,defaultProp:i??!0,onChange:a,caller:Za});return o.jsx(Ja,{present:n||c,children:o.jsx(v0,{open:c,...s,ref:t,onClose:()=>l(!1),onPause:Jt(e.onPause),onResume:Jt(e.onResume),onSwipeStart:pe(e.onSwipeStart,h=>{h.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:pe(e.onSwipeMove,h=>{const{x:u,y:d}=h.detail.delta;h.currentTarget.setAttribute("data-swipe","move"),h.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${u}px`),h.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${d}px`)}),onSwipeCancel:pe(e.onSwipeCancel,h=>{h.currentTarget.setAttribute("data-swipe","cancel"),h.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),h.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),h.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),h.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:pe(e.onSwipeEnd,h=>{const{x:u,y:d}=h.detail.delta;h.currentTarget.setAttribute("data-swipe","end"),h.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),h.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),h.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${u}px`),h.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${d}px`),l(!1)})})})});Jf.displayName=Za;var[f0,y0]=$f(Za,{onClose(){}}),v0=m.forwardRef((e,t)=>{const{__scopeToast:n,type:r="foreground",duration:i,open:a,onClose:s,onEscapeKeyDown:c,onPause:l,onResume:h,onSwipeStart:u,onSwipeMove:d,onSwipeCancel:p,onSwipeEnd:v,...x}=e,b=Ys(Za,n),[k,f]=m.useState(null),g=at(t,O=>f(O)),y=m.useRef(null),w=m.useRef(null),T=i||b.duration,C=m.useRef(0),P=m.useRef(T),S=m.useRef(0),{onToastAdd:A,onToastRemove:j}=b,q=Jt(()=>{var Q;(k==null?void 0:k.contains(document.activeElement))&&((Q=b.viewport)==null||Q.focus()),s()}),D=m.useCallback(O=>{!O||O===1/0||(window.clearTimeout(S.current),C.current=new Date().getTime(),S.current=window.setTimeout(q,O))},[q]);m.useEffect(()=>{const O=b.viewport;if(O){const Q=()=>{D(P.current),h==null||h()},G=()=>{const W=new Date().getTime()-C.current;P.current=P.current-W,window.clearTimeout(S.current),l==null||l()};return O.addEventListener(oh,G),O.addEventListener(sh,Q),()=>{O.removeEventListener(oh,G),O.removeEventListener(sh,Q)}}},[b.viewport,T,l,h,D]),m.useEffect(()=>{a&&!b.isClosePausedRef.current&&D(T)},[a,T,b.isClosePausedRef,D]),m.useEffect(()=>(A(),()=>j()),[A,j]);const J=m.useMemo(()=>k?ay(k):null,[k]);return b.viewport?o.jsxs(o.Fragment,{children:[J&&o.jsx(b0,{__scopeToast:n,role:"status","aria-live":r==="foreground"?"assertive":"polite","aria-atomic":!0,children:J}),o.jsx(f0,{scope:n,onClose:q,children:Qa.createPortal(o.jsx(Pu.ItemSlot,{scope:n,children:o.jsx(Yk,{asChild:!0,onEscapeKeyDown:pe(c,()=>{b.isFocusedToastEscapeKeyDownRef.current||q(),b.isFocusedToastEscapeKeyDownRef.current=!1}),children:o.jsx(Ue.li,{role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":a?"open":"closed","data-swipe-direction":b.swipeDirection,...x,ref:g,style:{userSelect:"none",touchAction:"none",...e.style},onKeyDown:pe(e.onKeyDown,O=>{O.key==="Escape"&&(c==null||c(O.nativeEvent),O.nativeEvent.defaultPrevented||(b.isFocusedToastEscapeKeyDownRef.current=!0,q()))}),onPointerDown:pe(e.onPointerDown,O=>{O.button===0&&(y.current={x:O.clientX,y:O.clientY})}),onPointerMove:pe(e.onPointerMove,O=>{if(!y.current)return;const Q=O.clientX-y.current.x,G=O.clientY-y.current.y,W=!!w.current,N=["left","right"].includes(b.swipeDirection),M=["left","up"].includes(b.swipeDirection)?Math.min:Math.max,F=N?M(0,Q):0,V=N?0:M(0,G),z=O.pointerType==="touch"?10:2,Ge={x:F,y:V},ge={originalEvent:O,delta:Ge};W?(w.current=Ge,xo(p0,d,ge,{discrete:!1})):yp(Ge,b.swipeDirection,z)?(w.current=Ge,xo(d0,u,ge,{discrete:!1}),O.target.setPointerCapture(O.pointerId)):(Math.abs(Q)>z||Math.abs(G)>z)&&(y.current=null)}),onPointerUp:pe(e.onPointerUp,O=>{const Q=w.current,G=O.target;if(G.hasPointerCapture(O.pointerId)&&G.releasePointerCapture(O.pointerId),w.current=null,y.current=null,Q){const W=O.currentTarget,N={originalEvent:O,delta:Q};yp(Q,b.swipeDirection,b.swipeThreshold)?xo(m0,v,N,{discrete:!0}):xo(g0,p,N,{discrete:!0}),W.addEventListener("click",M=>M.preventDefault(),{once:!0})}})})})}),b.viewport)})]}):null}),b0=e=>{const{__scopeToast:t,children:n,...r}=e,i=Ys(Za,t),[a,s]=m.useState(!1),[c,l]=m.useState(!1);return k0(()=>s(!0)),m.useEffect(()=>{const h=window.setTimeout(()=>l(!0),1e3);return()=>window.clearTimeout(h)},[]),c?null:o.jsx(Tu,{asChild:!0,children:o.jsx(Qs,{...r,children:a&&o.jsxs(o.Fragment,{children:[i.label," ",n]})})})},w0="ToastTitle",Zf=m.forwardRef((e,t)=>{const{__scopeToast:n,...r}=e;return o.jsx(Ue.div,{...r,ref:t})});Zf.displayName=w0;var x0="ToastDescription",ey=m.forwardRef((e,t)=>{const{__scopeToast:n,...r}=e;return o.jsx(Ue.div,{...r,ref:t})});ey.displayName=x0;var ty="ToastAction",ny=m.forwardRef((e,t)=>{const{altText:n,...r}=e;return n.trim()?o.jsx(iy,{altText:n,asChild:!0,children:o.jsx(Au,{...r,ref:t})}):(console.error(`Invalid prop \`altText\` supplied to \`${ty}\`. Expected non-empty \`string\`.`),null)});ny.displayName=ty;var ry="ToastClose",Au=m.forwardRef((e,t)=>{const{__scopeToast:n,...r}=e,i=y0(ry,n);return o.jsx(iy,{asChild:!0,children:o.jsx(Ue.button,{type:"button",...r,ref:t,onClick:pe(e.onClick,i.onClose)})})});Au.displayName=ry;var iy=m.forwardRef((e,t)=>{const{__scopeToast:n,altText:r,...i}=e;return o.jsx(Ue.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":r||void 0,...i,ref:t})});function ay(e){const t=[];return Array.from(e.childNodes).forEach(r=>{if(r.nodeType===r.TEXT_NODE&&r.textContent&&t.push(r.textContent),T0(r)){const i=r.ariaHidden||r.hidden||r.style.display==="none",a=r.dataset.radixToastAnnounceExclude==="";if(!i)if(a){const s=r.dataset.radixToastAnnounceAlt;s&&t.push(s)}else t.push(...ay(r))}}),t}function xo(e,t,n,{discrete:r}){const i=n.originalEvent.currentTarget,a=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:n});t&&i.addEventListener(e,t,{once:!0}),r?zf(i,a):i.dispatchEvent(a)}var yp=(e,t,n=0)=>{const r=Math.abs(e.x),i=Math.abs(e.y),a=r>i;return t==="left"||t==="right"?a&&r>n:!a&&i>n};function k0(e=()=>{}){const t=Jt(e);fn(()=>{let n=0,r=0;return n=window.requestAnimationFrame(()=>r=window.requestAnimationFrame(t)),()=>{window.cancelAnimationFrame(n),window.cancelAnimationFrame(r)}},[t])}function T0(e){return e.nodeType===e.ELEMENT_NODE}function C0(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const i=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||i?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function zc(e){const t=document.activeElement;return e.some(n=>n===t?!0:(n.focus(),document.activeElement!==t))}var S0=Kf,oy=Yf,sy=Jf,cy=Zf,ly=ey,hy=ny,uy=Au;function dy(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=dy(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function py(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=dy(e))&&(r&&(r+=" "),r+=t);return r}const vp=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,bp=py,Nu=(e,t)=>n=>{var r;if((t==null?void 0:t.variants)==null)return bp(e,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:i,defaultVariants:a}=t,s=Object.keys(i).map(h=>{const u=n==null?void 0:n[h],d=a==null?void 0:a[h];if(u===null)return null;const p=vp(u)||vp(d);return i[h][p]}),c=n&&Object.entries(n).reduce((h,u)=>{let[d,p]=u;return p===void 0||(h[d]=p),h},{}),l=t==null||(r=t.compoundVariants)===null||r===void 0?void 0:r.reduce((h,u)=>{let{class:d,className:p,...v}=u;return Object.entries(v).every(x=>{let[b,k]=x;return Array.isArray(k)?k.includes({...a,...c}[b]):{...a,...c}[b]===k})?[...h,d,p]:h},[]);return bp(e,s,l,n==null?void 0:n.class,n==null?void 0:n.className)};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P0=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),gy=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var A0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N0=m.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:a,iconNode:s,...c},l)=>m.createElement("svg",{ref:l,...A0,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:gy("lucide",i),...c},[...s.map(([h,u])=>m.createElement(h,u)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=(e,t)=>{const n=m.forwardRef(({className:r,...i},a)=>m.createElement(N0,{ref:a,iconNode:t,className:gy(`lucide-${P0(e)}`,r),...i}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const my=B("ArrowDownRight",[["path",{d:"m7 7 10 10",key:"1fmybs"}],["path",{d:"M17 7v10H7",key:"6fjiku"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lh=B("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xs=B("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kt=B("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I0=B("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j0=B("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E0=B("BadgeCheck",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R0=B("Blocks",[["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["path",{d:"M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3",key:"1fpvtg"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hh=B("BookOpenCheck",[["path",{d:"M12 21V7",key:"gj6g52"}],["path",{d:"m16 12 2 2 4-4",key:"mdajum"}],["path",{d:"M22 6V4a1 1 0 0 0-1-1h-5a4 4 0 0 0-4 4 4 4 0 0 0-4-4H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h6a3 3 0 0 1 3 3 3 3 0 0 1 3-3h6a1 1 0 0 0 1-1v-1.3",key:"8arnkb"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L0=B("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D0=B("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M0=B("BriefcaseBusiness",[["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2",key:"1ksdt3"}],["path",{d:"M22 13a18.15 18.15 0 0 1-20 0",key:"12hx5q"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q0=B("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vo=B("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wp=B("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O0=B("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U0=B("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uh=B("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _0=B("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oa=B("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F0=B("CodeXml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B0=B("Compass",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V0=B("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dh=B("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ph=B("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ks=B("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z0=B("Facebook",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xp=B("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H0=B("Flower2",[["path",{d:"M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1",key:"3pnvol"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["path",{d:"M12 10v12",key:"6ubwww"}],["path",{d:"M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z",key:"9hd38g"}],["path",{d:"M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z",key:"ufn41s"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hc=B("Folder",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G0=B("GitFork",[["circle",{cx:"12",cy:"18",r:"3",key:"1mpf1b"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["path",{d:"M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9",key:"1uq4wg"}],["path",{d:"M12 12v3",key:"158kv8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cr=B("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W0=B("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $0=B("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K0=B("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q0=B("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y0=B("Languages",[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X0=B("Laptop",[["path",{d:"M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16",key:"tarvll"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fy=B("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yy=B("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ai=B("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vy=B("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J0=B("Map",[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z0=B("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e1=B("MessageSquareText",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M13 8H7",key:"14i4kc"}],["path",{d:"M17 12H7",key:"16if0g"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t1=B("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n1=B("Music2",[["circle",{cx:"8",cy:"18",r:"4",key:"1fc0mg"}],["path",{d:"M12 18V2l7 4",key:"g04rme"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r1=B("Network",[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i1=B("SearchX",[["path",{d:"m13.5 8.5-5 5",key:"1cs55j"}],["path",{d:"m8.5 8.5 5 5",key:"a8mexj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gc=B("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kp=B("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a1=B("Shapes",[["path",{d:"M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z",key:"1bo67w"}],["rect",{x:"3",y:"14",width:"7",height:"7",rx:"1",key:"1bkyp8"}],["circle",{cx:"17.5",cy:"17.5",r:"3.5",key:"w3z12y"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o1=B("Share2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s1=B("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c1=B("Snowflake",[["line",{x1:"2",x2:"22",y1:"12",y2:"12",key:"1dnqot"}],["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"m20 16-4-4 4-4",key:"rquw4f"}],["path",{d:"m4 8 4 4-4 4",key:"12s3z9"}],["path",{d:"m16 4-4 4-4-4",key:"1tumq1"}],["path",{d:"m8 20 4-4 4 4",key:"9p200w"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xs=B("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l1=B("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h1=B("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gh=B("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u1=B("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d1=B("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ts=B("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Iu="-",p1=e=>{const t=m1(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=e;return{getClassGroupId:s=>{const c=s.split(Iu);return c[0]===""&&c.length!==1&&c.shift(),by(c,t)||g1(s)},getConflictingClassGroupIds:(s,c)=>{const l=n[s]||[];return c&&r[s]?[...l,...r[s]]:l}}},by=(e,t)=>{var s;if(e.length===0)return t.classGroupId;const n=e[0],r=t.nextPart.get(n),i=r?by(e.slice(1),r):void 0;if(i)return i;if(t.validators.length===0)return;const a=e.join(Iu);return(s=t.validators.find(({validator:c})=>c(a)))==null?void 0:s.classGroupId},Tp=/^\[(.+)\]$/,g1=e=>{if(Tp.test(e)){const t=Tp.exec(e)[1],n=t==null?void 0:t.substring(0,t.indexOf(":"));if(n)return"arbitrary.."+n}},m1=e=>{const{theme:t,prefix:n}=e,r={nextPart:new Map,validators:[]};return y1(Object.entries(e.classGroups),n).forEach(([a,s])=>{mh(s,r,a,t)}),r},mh=(e,t,n,r)=>{e.forEach(i=>{if(typeof i=="string"){const a=i===""?t:Cp(t,i);a.classGroupId=n;return}if(typeof i=="function"){if(f1(i)){mh(i(r),t,n,r);return}t.validators.push({validator:i,classGroupId:n});return}Object.entries(i).forEach(([a,s])=>{mh(s,Cp(t,a),n,r)})})},Cp=(e,t)=>{let n=e;return t.split(Iu).forEach(r=>{n.nextPart.has(r)||n.nextPart.set(r,{nextPart:new Map,validators:[]}),n=n.nextPart.get(r)}),n},f1=e=>e.isThemeGetter,y1=(e,t)=>t?e.map(([n,r])=>{const i=r.map(a=>typeof a=="string"?t+a:typeof a=="object"?Object.fromEntries(Object.entries(a).map(([s,c])=>[t+s,c])):a);return[n,i]}):e,v1=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,n=new Map,r=new Map;const i=(a,s)=>{n.set(a,s),t++,t>e&&(t=0,r=n,n=new Map)};return{get(a){let s=n.get(a);if(s!==void 0)return s;if((s=r.get(a))!==void 0)return i(a,s),s},set(a,s){n.has(a)?n.set(a,s):i(a,s)}}},wy="!",b1=e=>{const{separator:t,experimentalParseClassName:n}=e,r=t.length===1,i=t[0],a=t.length,s=c=>{const l=[];let h=0,u=0,d;for(let k=0;k<c.length;k++){let f=c[k];if(h===0){if(f===i&&(r||c.slice(k,k+a)===t)){l.push(c.slice(u,k)),u=k+a;continue}if(f==="/"){d=k;continue}}f==="["?h++:f==="]"&&h--}const p=l.length===0?c:c.substring(u),v=p.startsWith(wy),x=v?p.substring(1):p,b=d&&d>u?d-u:void 0;return{modifiers:l,hasImportantModifier:v,baseClassName:x,maybePostfixModifierPosition:b}};return n?c=>n({className:c,parseClassName:s}):s},w1=e=>{if(e.length<=1)return e;const t=[];let n=[];return e.forEach(r=>{r[0]==="["?(t.push(...n.sort(),r),n=[]):n.push(r)}),t.push(...n.sort()),t},x1=e=>({cache:v1(e.cacheSize),parseClassName:b1(e),...p1(e)}),k1=/\s+/,T1=(e,t)=>{const{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:i}=t,a=[],s=e.trim().split(k1);let c="";for(let l=s.length-1;l>=0;l-=1){const h=s[l],{modifiers:u,hasImportantModifier:d,baseClassName:p,maybePostfixModifierPosition:v}=n(h);let x=!!v,b=r(x?p.substring(0,v):p);if(!b){if(!x){c=h+(c.length>0?" "+c:c);continue}if(b=r(p),!b){c=h+(c.length>0?" "+c:c);continue}x=!1}const k=w1(u).join(":"),f=d?k+wy:k,g=f+b;if(a.includes(g))continue;a.push(g);const y=i(b,x);for(let w=0;w<y.length;++w){const T=y[w];a.push(f+T)}c=h+(c.length>0?" "+c:c)}return c};function C1(){let e=0,t,n,r="";for(;e<arguments.length;)(t=arguments[e++])&&(n=xy(t))&&(r&&(r+=" "),r+=n);return r}const xy=e=>{if(typeof e=="string")return e;let t,n="";for(let r=0;r<e.length;r++)e[r]&&(t=xy(e[r]))&&(n&&(n+=" "),n+=t);return n};function S1(e,...t){let n,r,i,a=s;function s(l){const h=t.reduce((u,d)=>d(u),e());return n=x1(h),r=n.cache.get,i=n.cache.set,a=c,c(l)}function c(l){const h=r(l);if(h)return h;const u=T1(l,n);return i(l,u),u}return function(){return a(C1.apply(null,arguments))}}const ce=e=>{const t=n=>n[e]||[];return t.isThemeGetter=!0,t},ky=/^\[(?:([a-z-]+):)?(.+)\]$/i,P1=/^\d+\/\d+$/,A1=new Set(["px","full","screen"]),N1=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,I1=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,j1=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,E1=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,R1=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,tn=e=>li(e)||A1.has(e)||P1.test(e),Cn=e=>Ui(e,"length",F1),li=e=>!!e&&!Number.isNaN(Number(e)),Wc=e=>Ui(e,"number",li),Xi=e=>!!e&&Number.isInteger(Number(e)),L1=e=>e.endsWith("%")&&li(e.slice(0,-1)),X=e=>ky.test(e),Sn=e=>N1.test(e),D1=new Set(["length","size","percentage"]),M1=e=>Ui(e,D1,Ty),q1=e=>Ui(e,"position",Ty),O1=new Set(["image","url"]),U1=e=>Ui(e,O1,V1),_1=e=>Ui(e,"",B1),Ji=()=>!0,Ui=(e,t,n)=>{const r=ky.exec(e);return r?r[1]?typeof t=="string"?r[1]===t:t.has(r[1]):n(r[2]):!1},F1=e=>I1.test(e)&&!j1.test(e),Ty=()=>!1,B1=e=>E1.test(e),V1=e=>R1.test(e),z1=()=>{const e=ce("colors"),t=ce("spacing"),n=ce("blur"),r=ce("brightness"),i=ce("borderColor"),a=ce("borderRadius"),s=ce("borderSpacing"),c=ce("borderWidth"),l=ce("contrast"),h=ce("grayscale"),u=ce("hueRotate"),d=ce("invert"),p=ce("gap"),v=ce("gradientColorStops"),x=ce("gradientColorStopPositions"),b=ce("inset"),k=ce("margin"),f=ce("opacity"),g=ce("padding"),y=ce("saturate"),w=ce("scale"),T=ce("sepia"),C=ce("skew"),P=ce("space"),S=ce("translate"),A=()=>["auto","contain","none"],j=()=>["auto","hidden","clip","visible","scroll"],q=()=>["auto",X,t],D=()=>[X,t],J=()=>["",tn,Cn],O=()=>["auto",li,X],Q=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],G=()=>["solid","dashed","dotted","double","none"],W=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],N=()=>["start","end","center","between","around","evenly","stretch"],M=()=>["","0",X],F=()=>["auto","avoid","all","avoid-page","page","left","right","column"],V=()=>[li,X];return{cacheSize:500,separator:":",theme:{colors:[Ji],spacing:[tn,Cn],blur:["none","",Sn,X],brightness:V(),borderColor:[e],borderRadius:["none","","full",Sn,X],borderSpacing:D(),borderWidth:J(),contrast:V(),grayscale:M(),hueRotate:V(),invert:M(),gap:D(),gradientColorStops:[e],gradientColorStopPositions:[L1,Cn],inset:q(),margin:q(),opacity:V(),padding:D(),saturate:V(),scale:V(),sepia:M(),skew:V(),space:D(),translate:D()},classGroups:{aspect:[{aspect:["auto","square","video",X]}],container:["container"],columns:[{columns:[Sn]}],"break-after":[{"break-after":F()}],"break-before":[{"break-before":F()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...Q(),X]}],overflow:[{overflow:j()}],"overflow-x":[{"overflow-x":j()}],"overflow-y":[{"overflow-y":j()}],overscroll:[{overscroll:A()}],"overscroll-x":[{"overscroll-x":A()}],"overscroll-y":[{"overscroll-y":A()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[b]}],"inset-x":[{"inset-x":[b]}],"inset-y":[{"inset-y":[b]}],start:[{start:[b]}],end:[{end:[b]}],top:[{top:[b]}],right:[{right:[b]}],bottom:[{bottom:[b]}],left:[{left:[b]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",Xi,X]}],basis:[{basis:q()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",X]}],grow:[{grow:M()}],shrink:[{shrink:M()}],order:[{order:["first","last","none",Xi,X]}],"grid-cols":[{"grid-cols":[Ji]}],"col-start-end":[{col:["auto",{span:["full",Xi,X]},X]}],"col-start":[{"col-start":O()}],"col-end":[{"col-end":O()}],"grid-rows":[{"grid-rows":[Ji]}],"row-start-end":[{row:["auto",{span:[Xi,X]},X]}],"row-start":[{"row-start":O()}],"row-end":[{"row-end":O()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",X]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",X]}],gap:[{gap:[p]}],"gap-x":[{"gap-x":[p]}],"gap-y":[{"gap-y":[p]}],"justify-content":[{justify:["normal",...N()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...N(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...N(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[g]}],px:[{px:[g]}],py:[{py:[g]}],ps:[{ps:[g]}],pe:[{pe:[g]}],pt:[{pt:[g]}],pr:[{pr:[g]}],pb:[{pb:[g]}],pl:[{pl:[g]}],m:[{m:[k]}],mx:[{mx:[k]}],my:[{my:[k]}],ms:[{ms:[k]}],me:[{me:[k]}],mt:[{mt:[k]}],mr:[{mr:[k]}],mb:[{mb:[k]}],ml:[{ml:[k]}],"space-x":[{"space-x":[P]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[P]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",X,t]}],"min-w":[{"min-w":[X,t,"min","max","fit"]}],"max-w":[{"max-w":[X,t,"none","full","min","max","fit","prose",{screen:[Sn]},Sn]}],h:[{h:[X,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[X,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[X,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[X,t,"auto","min","max","fit"]}],"font-size":[{text:["base",Sn,Cn]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Wc]}],"font-family":[{font:[Ji]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",X]}],"line-clamp":[{"line-clamp":["none",li,Wc]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",tn,X]}],"list-image":[{"list-image":["none",X]}],"list-style-type":[{list:["none","disc","decimal",X]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[f]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[f]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...G(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",tn,Cn]}],"underline-offset":[{"underline-offset":["auto",tn,X]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:D()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",X]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",X]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[f]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...Q(),q1]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",M1]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},U1]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[x]}],"gradient-via-pos":[{via:[x]}],"gradient-to-pos":[{to:[x]}],"gradient-from":[{from:[v]}],"gradient-via":[{via:[v]}],"gradient-to":[{to:[v]}],rounded:[{rounded:[a]}],"rounded-s":[{"rounded-s":[a]}],"rounded-e":[{"rounded-e":[a]}],"rounded-t":[{"rounded-t":[a]}],"rounded-r":[{"rounded-r":[a]}],"rounded-b":[{"rounded-b":[a]}],"rounded-l":[{"rounded-l":[a]}],"rounded-ss":[{"rounded-ss":[a]}],"rounded-se":[{"rounded-se":[a]}],"rounded-ee":[{"rounded-ee":[a]}],"rounded-es":[{"rounded-es":[a]}],"rounded-tl":[{"rounded-tl":[a]}],"rounded-tr":[{"rounded-tr":[a]}],"rounded-br":[{"rounded-br":[a]}],"rounded-bl":[{"rounded-bl":[a]}],"border-w":[{border:[c]}],"border-w-x":[{"border-x":[c]}],"border-w-y":[{"border-y":[c]}],"border-w-s":[{"border-s":[c]}],"border-w-e":[{"border-e":[c]}],"border-w-t":[{"border-t":[c]}],"border-w-r":[{"border-r":[c]}],"border-w-b":[{"border-b":[c]}],"border-w-l":[{"border-l":[c]}],"border-opacity":[{"border-opacity":[f]}],"border-style":[{border:[...G(),"hidden"]}],"divide-x":[{"divide-x":[c]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[c]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[f]}],"divide-style":[{divide:G()}],"border-color":[{border:[i]}],"border-color-x":[{"border-x":[i]}],"border-color-y":[{"border-y":[i]}],"border-color-s":[{"border-s":[i]}],"border-color-e":[{"border-e":[i]}],"border-color-t":[{"border-t":[i]}],"border-color-r":[{"border-r":[i]}],"border-color-b":[{"border-b":[i]}],"border-color-l":[{"border-l":[i]}],"divide-color":[{divide:[i]}],"outline-style":[{outline:["",...G()]}],"outline-offset":[{"outline-offset":[tn,X]}],"outline-w":[{outline:[tn,Cn]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:J()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[f]}],"ring-offset-w":[{"ring-offset":[tn,Cn]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",Sn,_1]}],"shadow-color":[{shadow:[Ji]}],opacity:[{opacity:[f]}],"mix-blend":[{"mix-blend":[...W(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":W()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[r]}],contrast:[{contrast:[l]}],"drop-shadow":[{"drop-shadow":["","none",Sn,X]}],grayscale:[{grayscale:[h]}],"hue-rotate":[{"hue-rotate":[u]}],invert:[{invert:[d]}],saturate:[{saturate:[y]}],sepia:[{sepia:[T]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[l]}],"backdrop-grayscale":[{"backdrop-grayscale":[h]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[u]}],"backdrop-invert":[{"backdrop-invert":[d]}],"backdrop-opacity":[{"backdrop-opacity":[f]}],"backdrop-saturate":[{"backdrop-saturate":[y]}],"backdrop-sepia":[{"backdrop-sepia":[T]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[s]}],"border-spacing-x":[{"border-spacing-x":[s]}],"border-spacing-y":[{"border-spacing-y":[s]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",X]}],duration:[{duration:V()}],ease:[{ease:["linear","in","out","in-out",X]}],delay:[{delay:V()}],animate:[{animate:["none","spin","ping","pulse","bounce",X]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[w]}],"scale-x":[{"scale-x":[w]}],"scale-y":[{"scale-y":[w]}],rotate:[{rotate:[Xi,X]}],"translate-x":[{"translate-x":[S]}],"translate-y":[{"translate-y":[S]}],"skew-x":[{"skew-x":[C]}],"skew-y":[{"skew-y":[C]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",X]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",X]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":D()}],"scroll-mx":[{"scroll-mx":D()}],"scroll-my":[{"scroll-my":D()}],"scroll-ms":[{"scroll-ms":D()}],"scroll-me":[{"scroll-me":D()}],"scroll-mt":[{"scroll-mt":D()}],"scroll-mr":[{"scroll-mr":D()}],"scroll-mb":[{"scroll-mb":D()}],"scroll-ml":[{"scroll-ml":D()}],"scroll-p":[{"scroll-p":D()}],"scroll-px":[{"scroll-px":D()}],"scroll-py":[{"scroll-py":D()}],"scroll-ps":[{"scroll-ps":D()}],"scroll-pe":[{"scroll-pe":D()}],"scroll-pt":[{"scroll-pt":D()}],"scroll-pr":[{"scroll-pr":D()}],"scroll-pb":[{"scroll-pb":D()}],"scroll-pl":[{"scroll-pl":D()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",X]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[tn,Cn,Wc]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},H1=S1(z1);function mt(...e){return H1(py(e))}const G1=S0,Cy=m.forwardRef(({className:e,...t},n)=>o.jsx(oy,{ref:n,className:mt("fixed right-0 top-0 z-[100] flex max-h-screen w-full flex-col gap-2.5 p-3 sm:max-w-[360px] sm:p-4",e),...t}));Cy.displayName=oy.displayName;const W1=Nu("group pointer-events-auto relative grid w-full cursor-pointer grid-cols-[auto_1fr_auto] items-start gap-2.5 overflow-hidden rounded-lg border p-3 pr-2 text-foreground shadow-[0_14px_42px_hsl(var(--foreground)/0.13)] outline-none backdrop-blur-xl transition-all before:pointer-events-none before:absolute before:inset-0 before:bg-[linear-gradient(135deg,hsl(var(--primary)/0.065),transparent_40%,hsl(var(--accent)/0.045))] after:pointer-events-none after:absolute after:inset-x-0 after:top-0 after:h-px after:bg-[linear-gradient(90deg,transparent,hsl(var(--primary)/0.38),transparent)] hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-ring/45 data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full sm:data-[state=open]:slide-in-from-right-full",{variants:{variant:{default:"border-border/70 bg-popover/92",success:"border-primary/35 bg-[linear-gradient(135deg,hsl(var(--popover)/0.96),hsl(var(--primary)/0.1))]",info:"border-[hsl(var(--category-architecture)/0.38)] bg-[linear-gradient(135deg,hsl(var(--popover)/0.96),hsl(var(--category-architecture)/0.08))]",warning:"border-[hsl(var(--category-practices)/0.42)] bg-[linear-gradient(135deg,hsl(var(--popover)/0.96),hsl(var(--category-practices)/0.1))]",destructive:"destructive border-destructive/45 bg-[linear-gradient(135deg,hsl(var(--popover)/0.96),hsl(var(--destructive)/0.09))]"}},defaultVariants:{variant:"default"}}),Sy=m.forwardRef(({className:e,variant:t,...n},r)=>o.jsx(sy,{ref:r,className:mt(W1({variant:t}),e),...n}));Sy.displayName=sy.displayName;const $1=m.forwardRef(({className:e,...t},n)=>o.jsx(hy,{ref:n,className:mt("inline-flex h-8 shrink-0 items-center justify-center rounded-md border border-border/70 bg-background/50 px-3 text-xs font-semibold ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring/50 focus:ring-offset-2 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground disabled:pointer-events-none disabled:opacity-50",e),...t}));$1.displayName=hy.displayName;const Py=m.forwardRef(({className:e,...t},n)=>o.jsx(uy,{ref:n,className:mt("relative z-10 -mr-0.5 -mt-1 rounded-md p-1 text-muted-foreground/60 opacity-70 transition-colors hover:bg-muted hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring/45",e),"toast-close":"",...t,children:o.jsx(Ts,{className:"h-3.5 w-3.5"})}));Py.displayName=uy.displayName;const Ay=m.forwardRef(({className:e,...t},n)=>o.jsx(cy,{ref:n,className:mt("line-clamp-1 text-[13px] font-semibold leading-4 tracking-normal",e),...t}));Ay.displayName=cy.displayName;const Ny=m.forwardRef(({className:e,...t},n)=>o.jsx(ly,{ref:n,className:mt("line-clamp-1 text-xs leading-4 text-muted-foreground",e),...t}));Ny.displayName=ly.displayName;const Sp=3600,Pp={default:{icon:Xs,iconClass:"border-border/60 bg-background/70 text-foreground",railClass:"bg-[linear-gradient(180deg,hsl(var(--muted-foreground)/0.55),hsl(var(--primary)/0.55))]",progressClass:"bg-[linear-gradient(90deg,hsl(var(--muted-foreground)/0.45),hsl(var(--primary)/0.75))]"},success:{icon:uh,iconClass:"border-primary/35 bg-primary/10 text-primary",railClass:"bg-[linear-gradient(180deg,hsl(var(--primary)),hsl(var(--accent)/0.82))]",progressClass:"bg-[linear-gradient(90deg,hsl(var(--primary)),hsl(var(--accent)))]"},info:{icon:K0,iconClass:"border-[hsl(var(--category-architecture)/0.35)] bg-[hsl(var(--category-architecture)/0.1)] text-[hsl(var(--category-architecture))]",railClass:"bg-[linear-gradient(180deg,hsl(var(--category-architecture)),hsl(var(--primary)/0.78))]",progressClass:"bg-[linear-gradient(90deg,hsl(var(--category-architecture)),hsl(var(--primary)))]"},warning:{icon:u1,iconClass:"border-[hsl(var(--category-practices)/0.38)] bg-[hsl(var(--category-practices)/0.12)] text-[hsl(var(--category-practices))]",railClass:"bg-[linear-gradient(180deg,hsl(var(--category-practices)),hsl(var(--accent)))]",progressClass:"bg-[linear-gradient(90deg,hsl(var(--category-practices)),hsl(var(--accent)))]"},destructive:{icon:_0,iconClass:"border-destructive/35 bg-destructive/10 text-destructive",railClass:"bg-[linear-gradient(180deg,hsl(var(--destructive)),hsl(var(--accent)/0.82))]",progressClass:"bg-[linear-gradient(90deg,hsl(var(--destructive)),hsl(var(--accent)))]"}};function K1(){const{toasts:e,dismiss:t}=$s();return o.jsxs(G1,{duration:Sp,children:[e.map(function({id:n,title:r,description:i,action:a,variant:s="default",...c}){const l=Pp[s]??Pp.default,h=l.icon;return o.jsxs(Sy,{variant:s,onClick:()=>t(n),...c,children:[o.jsx("div",{className:`absolute inset-y-2.5 left-2 w-0.5 rounded-full ${l.railClass}`}),o.jsx("div",{className:`relative z-10 ml-1.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md border shadow-[inset_0_1px_0_hsl(var(--background)/0.45)] ${l.iconClass}`,children:o.jsx(h,{className:"h-3.5 w-3.5"})}),o.jsxs("div",{className:"relative z-10 min-w-0 flex-1",children:[o.jsxs("div",{className:"grid gap-0.5",children:[r&&o.jsx(Ay,{children:r}),i&&o.jsx(Ny,{children:i})]}),a&&o.jsx("div",{className:"mt-2",onClick:u=>u.stopPropagation(),children:a})]}),o.jsx(Py,{onClick:u=>u.stopPropagation()}),o.jsx("div",{className:"absolute inset-x-0 bottom-0 h-0.5 bg-muted/60",children:o.jsx("div",{className:`h-full ${l.progressClass}`,style:{animation:`toast-progress ${Sp}ms linear forwards`,transformOrigin:"left"}})})]},n)}),o.jsx(Cy,{})]})}var Q1=Ih[" useId ".trim().toString()]||(()=>{}),Y1=0;function Iy(e){const[t,n]=m.useState(Q1());return fn(()=>{n(r=>r??String(Y1++))},[e]),t?`radix-${t}`:""}const X1=["top","right","bottom","left"],Zn=Math.min,ct=Math.max,Cs=Math.round,ko=Math.floor,Xt=e=>({x:e,y:e}),J1={left:"right",right:"left",bottom:"top",top:"bottom"},Z1={start:"end",end:"start"};function fh(e,t,n){return ct(e,Zn(t,n))}function yn(e,t){return typeof e=="function"?e(t):e}function vn(e){return e.split("-")[0]}function _i(e){return e.split("-")[1]}function ju(e){return e==="x"?"y":"x"}function Eu(e){return e==="y"?"height":"width"}const eT=new Set(["top","bottom"]);function $t(e){return eT.has(vn(e))?"y":"x"}function Ru(e){return ju($t(e))}function tT(e,t,n){n===void 0&&(n=!1);const r=_i(e),i=Ru(e),a=Eu(i);let s=i==="x"?r===(n?"end":"start")?"right":"left":r==="start"?"bottom":"top";return t.reference[a]>t.floating[a]&&(s=Ss(s)),[s,Ss(s)]}function nT(e){const t=Ss(e);return[yh(e),t,yh(t)]}function yh(e){return e.replace(/start|end/g,t=>Z1[t])}const Ap=["left","right"],Np=["right","left"],rT=["top","bottom"],iT=["bottom","top"];function aT(e,t,n){switch(e){case"top":case"bottom":return n?t?Np:Ap:t?Ap:Np;case"left":case"right":return t?rT:iT;default:return[]}}function oT(e,t,n,r){const i=_i(e);let a=aT(vn(e),n==="start",r);return i&&(a=a.map(s=>s+"-"+i),t&&(a=a.concat(a.map(yh)))),a}function Ss(e){return e.replace(/left|right|bottom|top/g,t=>J1[t])}function sT(e){return{top:0,right:0,bottom:0,left:0,...e}}function jy(e){return typeof e!="number"?sT(e):{top:e,right:e,bottom:e,left:e}}function Ps(e){const{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function Ip(e,t,n){let{reference:r,floating:i}=e;const a=$t(t),s=Ru(t),c=Eu(s),l=vn(t),h=a==="y",u=r.x+r.width/2-i.width/2,d=r.y+r.height/2-i.height/2,p=r[c]/2-i[c]/2;let v;switch(l){case"top":v={x:u,y:r.y-i.height};break;case"bottom":v={x:u,y:r.y+r.height};break;case"right":v={x:r.x+r.width,y:d};break;case"left":v={x:r.x-i.width,y:d};break;default:v={x:r.x,y:r.y}}switch(_i(t)){case"start":v[s]-=p*(n&&h?-1:1);break;case"end":v[s]+=p*(n&&h?-1:1);break}return v}const cT=async(e,t,n)=>{const{placement:r="bottom",strategy:i="absolute",middleware:a=[],platform:s}=n,c=a.filter(Boolean),l=await(s.isRTL==null?void 0:s.isRTL(t));let h=await s.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:d}=Ip(h,r,l),p=r,v={},x=0;for(let b=0;b<c.length;b++){const{name:k,fn:f}=c[b],{x:g,y,data:w,reset:T}=await f({x:u,y:d,initialPlacement:r,placement:p,strategy:i,middlewareData:v,rects:h,platform:s,elements:{reference:e,floating:t}});u=g??u,d=y??d,v={...v,[k]:{...v[k],...w}},T&&x<=50&&(x++,typeof T=="object"&&(T.placement&&(p=T.placement),T.rects&&(h=T.rects===!0?await s.getElementRects({reference:e,floating:t,strategy:i}):T.rects),{x:u,y:d}=Ip(h,p,l)),b=-1)}return{x:u,y:d,placement:p,strategy:i,middlewareData:v}};async function Ua(e,t){var n;t===void 0&&(t={});const{x:r,y:i,platform:a,rects:s,elements:c,strategy:l}=e,{boundary:h="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:p=!1,padding:v=0}=yn(t,e),x=jy(v),k=c[p?d==="floating"?"reference":"floating":d],f=Ps(await a.getClippingRect({element:(n=await(a.isElement==null?void 0:a.isElement(k)))==null||n?k:k.contextElement||await(a.getDocumentElement==null?void 0:a.getDocumentElement(c.floating)),boundary:h,rootBoundary:u,strategy:l})),g=d==="floating"?{x:r,y:i,width:s.floating.width,height:s.floating.height}:s.reference,y=await(a.getOffsetParent==null?void 0:a.getOffsetParent(c.floating)),w=await(a.isElement==null?void 0:a.isElement(y))?await(a.getScale==null?void 0:a.getScale(y))||{x:1,y:1}:{x:1,y:1},T=Ps(a.convertOffsetParentRelativeRectToViewportRelativeRect?await a.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:g,offsetParent:y,strategy:l}):g);return{top:(f.top-T.top+x.top)/w.y,bottom:(T.bottom-f.bottom+x.bottom)/w.y,left:(f.left-T.left+x.left)/w.x,right:(T.right-f.right+x.right)/w.x}}const lT=e=>({name:"arrow",options:e,async fn(t){const{x:n,y:r,placement:i,rects:a,platform:s,elements:c,middlewareData:l}=t,{element:h,padding:u=0}=yn(e,t)||{};if(h==null)return{};const d=jy(u),p={x:n,y:r},v=Ru(i),x=Eu(v),b=await s.getDimensions(h),k=v==="y",f=k?"top":"left",g=k?"bottom":"right",y=k?"clientHeight":"clientWidth",w=a.reference[x]+a.reference[v]-p[v]-a.floating[x],T=p[v]-a.reference[v],C=await(s.getOffsetParent==null?void 0:s.getOffsetParent(h));let P=C?C[y]:0;(!P||!await(s.isElement==null?void 0:s.isElement(C)))&&(P=c.floating[y]||a.floating[x]);const S=w/2-T/2,A=P/2-b[x]/2-1,j=Zn(d[f],A),q=Zn(d[g],A),D=j,J=P-b[x]-q,O=P/2-b[x]/2+S,Q=fh(D,O,J),G=!l.arrow&&_i(i)!=null&&O!==Q&&a.reference[x]/2-(O<D?j:q)-b[x]/2<0,W=G?O<D?O-D:O-J:0;return{[v]:p[v]+W,data:{[v]:Q,centerOffset:O-Q-W,...G&&{alignmentOffset:W}},reset:G}}}),hT=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n,r;const{placement:i,middlewareData:a,rects:s,initialPlacement:c,platform:l,elements:h}=t,{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:p,fallbackStrategy:v="bestFit",fallbackAxisSideDirection:x="none",flipAlignment:b=!0,...k}=yn(e,t);if((n=a.arrow)!=null&&n.alignmentOffset)return{};const f=vn(i),g=$t(c),y=vn(c)===c,w=await(l.isRTL==null?void 0:l.isRTL(h.floating)),T=p||(y||!b?[Ss(c)]:nT(c)),C=x!=="none";!p&&C&&T.push(...oT(c,b,x,w));const P=[c,...T],S=await Ua(t,k),A=[];let j=((r=a.flip)==null?void 0:r.overflows)||[];if(u&&A.push(S[f]),d){const O=tT(i,s,w);A.push(S[O[0]],S[O[1]])}if(j=[...j,{placement:i,overflows:A}],!A.every(O=>O<=0)){var q,D;const O=(((q=a.flip)==null?void 0:q.index)||0)+1,Q=P[O];if(Q&&(!(d==="alignment"?g!==$t(Q):!1)||j.every(N=>N.overflows[0]>0&&$t(N.placement)===g)))return{data:{index:O,overflows:j},reset:{placement:Q}};let G=(D=j.filter(W=>W.overflows[0]<=0).sort((W,N)=>W.overflows[1]-N.overflows[1])[0])==null?void 0:D.placement;if(!G)switch(v){case"bestFit":{var J;const W=(J=j.filter(N=>{if(C){const M=$t(N.placement);return M===g||M==="y"}return!0}).map(N=>[N.placement,N.overflows.filter(M=>M>0).reduce((M,F)=>M+F,0)]).sort((N,M)=>N[1]-M[1])[0])==null?void 0:J[0];W&&(G=W);break}case"initialPlacement":G=c;break}if(i!==G)return{reset:{placement:G}}}return{}}}};function jp(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function Ep(e){return X1.some(t=>e[t]>=0)}const uT=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(t){const{rects:n}=t,{strategy:r="referenceHidden",...i}=yn(e,t);switch(r){case"referenceHidden":{const a=await Ua(t,{...i,elementContext:"reference"}),s=jp(a,n.reference);return{data:{referenceHiddenOffsets:s,referenceHidden:Ep(s)}}}case"escaped":{const a=await Ua(t,{...i,altBoundary:!0}),s=jp(a,n.floating);return{data:{escapedOffsets:s,escaped:Ep(s)}}}default:return{}}}}},Ey=new Set(["left","top"]);async function dT(e,t){const{placement:n,platform:r,elements:i}=e,a=await(r.isRTL==null?void 0:r.isRTL(i.floating)),s=vn(n),c=_i(n),l=$t(n)==="y",h=Ey.has(s)?-1:1,u=a&&l?-1:1,d=yn(t,e);let{mainAxis:p,crossAxis:v,alignmentAxis:x}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return c&&typeof x=="number"&&(v=c==="end"?x*-1:x),l?{x:v*u,y:p*h}:{x:p*h,y:v*u}}const pT=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var n,r;const{x:i,y:a,placement:s,middlewareData:c}=t,l=await dT(t,e);return s===((n=c.offset)==null?void 0:n.placement)&&(r=c.arrow)!=null&&r.alignmentOffset?{}:{x:i+l.x,y:a+l.y,data:{...l,placement:s}}}}},gT=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:r,placement:i}=t,{mainAxis:a=!0,crossAxis:s=!1,limiter:c={fn:k=>{let{x:f,y:g}=k;return{x:f,y:g}}},...l}=yn(e,t),h={x:n,y:r},u=await Ua(t,l),d=$t(vn(i)),p=ju(d);let v=h[p],x=h[d];if(a){const k=p==="y"?"top":"left",f=p==="y"?"bottom":"right",g=v+u[k],y=v-u[f];v=fh(g,v,y)}if(s){const k=d==="y"?"top":"left",f=d==="y"?"bottom":"right",g=x+u[k],y=x-u[f];x=fh(g,x,y)}const b=c.fn({...t,[p]:v,[d]:x});return{...b,data:{x:b.x-n,y:b.y-r,enabled:{[p]:a,[d]:s}}}}}},mT=function(e){return e===void 0&&(e={}),{options:e,fn(t){const{x:n,y:r,placement:i,rects:a,middlewareData:s}=t,{offset:c=0,mainAxis:l=!0,crossAxis:h=!0}=yn(e,t),u={x:n,y:r},d=$t(i),p=ju(d);let v=u[p],x=u[d];const b=yn(c,t),k=typeof b=="number"?{mainAxis:b,crossAxis:0}:{mainAxis:0,crossAxis:0,...b};if(l){const y=p==="y"?"height":"width",w=a.reference[p]-a.floating[y]+k.mainAxis,T=a.reference[p]+a.reference[y]-k.mainAxis;v<w?v=w:v>T&&(v=T)}if(h){var f,g;const y=p==="y"?"width":"height",w=Ey.has(vn(i)),T=a.reference[d]-a.floating[y]+(w&&((f=s.offset)==null?void 0:f[d])||0)+(w?0:k.crossAxis),C=a.reference[d]+a.reference[y]+(w?0:((g=s.offset)==null?void 0:g[d])||0)-(w?k.crossAxis:0);x<T?x=T:x>C&&(x=C)}return{[p]:v,[d]:x}}}},fT=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){var n,r;const{placement:i,rects:a,platform:s,elements:c}=t,{apply:l=()=>{},...h}=yn(e,t),u=await Ua(t,h),d=vn(i),p=_i(i),v=$t(i)==="y",{width:x,height:b}=a.floating;let k,f;d==="top"||d==="bottom"?(k=d,f=p===(await(s.isRTL==null?void 0:s.isRTL(c.floating))?"start":"end")?"left":"right"):(f=d,k=p==="end"?"top":"bottom");const g=b-u.top-u.bottom,y=x-u.left-u.right,w=Zn(b-u[k],g),T=Zn(x-u[f],y),C=!t.middlewareData.shift;let P=w,S=T;if((n=t.middlewareData.shift)!=null&&n.enabled.x&&(S=y),(r=t.middlewareData.shift)!=null&&r.enabled.y&&(P=g),C&&!p){const j=ct(u.left,0),q=ct(u.right,0),D=ct(u.top,0),J=ct(u.bottom,0);v?S=x-2*(j!==0||q!==0?j+q:ct(u.left,u.right)):P=b-2*(D!==0||J!==0?D+J:ct(u.top,u.bottom))}await l({...t,availableWidth:S,availableHeight:P});const A=await s.getDimensions(c.floating);return x!==A.width||b!==A.height?{reset:{rects:!0}}:{}}}};function Js(){return typeof window<"u"}function Fi(e){return Ry(e)?(e.nodeName||"").toLowerCase():"#document"}function ut(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function en(e){var t;return(t=(Ry(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Ry(e){return Js()?e instanceof Node||e instanceof ut(e).Node:!1}function qt(e){return Js()?e instanceof Element||e instanceof ut(e).Element:!1}function Zt(e){return Js()?e instanceof HTMLElement||e instanceof ut(e).HTMLElement:!1}function Rp(e){return!Js()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof ut(e).ShadowRoot}const yT=new Set(["inline","contents"]);function eo(e){const{overflow:t,overflowX:n,overflowY:r,display:i}=Ot(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!yT.has(i)}const vT=new Set(["table","td","th"]);function bT(e){return vT.has(Fi(e))}const wT=[":popover-open",":modal"];function Zs(e){return wT.some(t=>{try{return e.matches(t)}catch{return!1}})}const xT=["transform","translate","scale","rotate","perspective"],kT=["transform","translate","scale","rotate","perspective","filter"],TT=["paint","layout","strict","content"];function Lu(e){const t=Du(),n=qt(e)?Ot(e):e;return xT.some(r=>n[r]?n[r]!=="none":!1)||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||kT.some(r=>(n.willChange||"").includes(r))||TT.some(r=>(n.contain||"").includes(r))}function CT(e){let t=er(e);for(;Zt(t)&&!Ni(t);){if(Lu(t))return t;if(Zs(t))return null;t=er(t)}return null}function Du(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const ST=new Set(["html","body","#document"]);function Ni(e){return ST.has(Fi(e))}function Ot(e){return ut(e).getComputedStyle(e)}function ec(e){return qt(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function er(e){if(Fi(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Rp(e)&&e.host||en(e);return Rp(t)?t.host:t}function Ly(e){const t=er(e);return Ni(t)?e.ownerDocument?e.ownerDocument.body:e.body:Zt(t)&&eo(t)?t:Ly(t)}function _a(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const i=Ly(e),a=i===((r=e.ownerDocument)==null?void 0:r.body),s=ut(i);if(a){const c=vh(s);return t.concat(s,s.visualViewport||[],eo(i)?i:[],c&&n?_a(c):[])}return t.concat(i,_a(i,[],n))}function vh(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Dy(e){const t=Ot(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const i=Zt(e),a=i?e.offsetWidth:n,s=i?e.offsetHeight:r,c=Cs(n)!==a||Cs(r)!==s;return c&&(n=a,r=s),{width:n,height:r,$:c}}function Mu(e){return qt(e)?e:e.contextElement}function hi(e){const t=Mu(e);if(!Zt(t))return Xt(1);const n=t.getBoundingClientRect(),{width:r,height:i,$:a}=Dy(t);let s=(a?Cs(n.width):n.width)/r,c=(a?Cs(n.height):n.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!c||!Number.isFinite(c))&&(c=1),{x:s,y:c}}const PT=Xt(0);function My(e){const t=ut(e);return!Du()||!t.visualViewport?PT:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function AT(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==ut(e)?!1:t}function Er(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const i=e.getBoundingClientRect(),a=Mu(e);let s=Xt(1);t&&(r?qt(r)&&(s=hi(r)):s=hi(e));const c=AT(a,n,r)?My(a):Xt(0);let l=(i.left+c.x)/s.x,h=(i.top+c.y)/s.y,u=i.width/s.x,d=i.height/s.y;if(a){const p=ut(a),v=r&&qt(r)?ut(r):r;let x=p,b=vh(x);for(;b&&r&&v!==x;){const k=hi(b),f=b.getBoundingClientRect(),g=Ot(b),y=f.left+(b.clientLeft+parseFloat(g.paddingLeft))*k.x,w=f.top+(b.clientTop+parseFloat(g.paddingTop))*k.y;l*=k.x,h*=k.y,u*=k.x,d*=k.y,l+=y,h+=w,x=ut(b),b=vh(x)}}return Ps({width:u,height:d,x:l,y:h})}function qu(e,t){const n=ec(e).scrollLeft;return t?t.left+n:Er(en(e)).left+n}function qy(e,t,n){n===void 0&&(n=!1);const r=e.getBoundingClientRect(),i=r.left+t.scrollLeft-(n?0:qu(e,r)),a=r.top+t.scrollTop;return{x:i,y:a}}function NT(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e;const a=i==="fixed",s=en(r),c=t?Zs(t.floating):!1;if(r===s||c&&a)return n;let l={scrollLeft:0,scrollTop:0},h=Xt(1);const u=Xt(0),d=Zt(r);if((d||!d&&!a)&&((Fi(r)!=="body"||eo(s))&&(l=ec(r)),Zt(r))){const v=Er(r);h=hi(r),u.x=v.x+r.clientLeft,u.y=v.y+r.clientTop}const p=s&&!d&&!a?qy(s,l,!0):Xt(0);return{width:n.width*h.x,height:n.height*h.y,x:n.x*h.x-l.scrollLeft*h.x+u.x+p.x,y:n.y*h.y-l.scrollTop*h.y+u.y+p.y}}function IT(e){return Array.from(e.getClientRects())}function jT(e){const t=en(e),n=ec(e),r=e.ownerDocument.body,i=ct(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),a=ct(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let s=-n.scrollLeft+qu(e);const c=-n.scrollTop;return Ot(r).direction==="rtl"&&(s+=ct(t.clientWidth,r.clientWidth)-i),{width:i,height:a,x:s,y:c}}function ET(e,t){const n=ut(e),r=en(e),i=n.visualViewport;let a=r.clientWidth,s=r.clientHeight,c=0,l=0;if(i){a=i.width,s=i.height;const h=Du();(!h||h&&t==="fixed")&&(c=i.offsetLeft,l=i.offsetTop)}return{width:a,height:s,x:c,y:l}}const RT=new Set(["absolute","fixed"]);function LT(e,t){const n=Er(e,!0,t==="fixed"),r=n.top+e.clientTop,i=n.left+e.clientLeft,a=Zt(e)?hi(e):Xt(1),s=e.clientWidth*a.x,c=e.clientHeight*a.y,l=i*a.x,h=r*a.y;return{width:s,height:c,x:l,y:h}}function Lp(e,t,n){let r;if(t==="viewport")r=ET(e,n);else if(t==="document")r=jT(en(e));else if(qt(t))r=LT(t,n);else{const i=My(e);r={x:t.x-i.x,y:t.y-i.y,width:t.width,height:t.height}}return Ps(r)}function Oy(e,t){const n=er(e);return n===t||!qt(n)||Ni(n)?!1:Ot(n).position==="fixed"||Oy(n,t)}function DT(e,t){const n=t.get(e);if(n)return n;let r=_a(e,[],!1).filter(c=>qt(c)&&Fi(c)!=="body"),i=null;const a=Ot(e).position==="fixed";let s=a?er(e):e;for(;qt(s)&&!Ni(s);){const c=Ot(s),l=Lu(s);!l&&c.position==="fixed"&&(i=null),(a?!l&&!i:!l&&c.position==="static"&&!!i&&RT.has(i.position)||eo(s)&&!l&&Oy(e,s))?r=r.filter(u=>u!==s):i=c,s=er(s)}return t.set(e,r),r}function MT(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e;const s=[...n==="clippingAncestors"?Zs(t)?[]:DT(t,this._c):[].concat(n),r],c=s[0],l=s.reduce((h,u)=>{const d=Lp(t,u,i);return h.top=ct(d.top,h.top),h.right=Zn(d.right,h.right),h.bottom=Zn(d.bottom,h.bottom),h.left=ct(d.left,h.left),h},Lp(t,c,i));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function qT(e){const{width:t,height:n}=Dy(e);return{width:t,height:n}}function OT(e,t,n){const r=Zt(t),i=en(t),a=n==="fixed",s=Er(e,!0,a,t);let c={scrollLeft:0,scrollTop:0};const l=Xt(0);function h(){l.x=qu(i)}if(r||!r&&!a)if((Fi(t)!=="body"||eo(i))&&(c=ec(t)),r){const v=Er(t,!0,a,t);l.x=v.x+t.clientLeft,l.y=v.y+t.clientTop}else i&&h();a&&!r&&i&&h();const u=i&&!r&&!a?qy(i,c):Xt(0),d=s.left+c.scrollLeft-l.x-u.x,p=s.top+c.scrollTop-l.y-u.y;return{x:d,y:p,width:s.width,height:s.height}}function $c(e){return Ot(e).position==="static"}function Dp(e,t){if(!Zt(e)||Ot(e).position==="fixed")return null;if(t)return t(e);let n=e.offsetParent;return en(e)===n&&(n=n.ownerDocument.body),n}function Uy(e,t){const n=ut(e);if(Zs(e))return n;if(!Zt(e)){let i=er(e);for(;i&&!Ni(i);){if(qt(i)&&!$c(i))return i;i=er(i)}return n}let r=Dp(e,t);for(;r&&bT(r)&&$c(r);)r=Dp(r,t);return r&&Ni(r)&&$c(r)&&!Lu(r)?n:r||CT(e)||n}const UT=async function(e){const t=this.getOffsetParent||Uy,n=this.getDimensions,r=await n(e.floating);return{reference:OT(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function _T(e){return Ot(e).direction==="rtl"}const FT={convertOffsetParentRelativeRectToViewportRelativeRect:NT,getDocumentElement:en,getClippingRect:MT,getOffsetParent:Uy,getElementRects:UT,getClientRects:IT,getDimensions:qT,getScale:hi,isElement:qt,isRTL:_T};function _y(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function BT(e,t){let n=null,r;const i=en(e);function a(){var c;clearTimeout(r),(c=n)==null||c.disconnect(),n=null}function s(c,l){c===void 0&&(c=!1),l===void 0&&(l=1),a();const h=e.getBoundingClientRect(),{left:u,top:d,width:p,height:v}=h;if(c||t(),!p||!v)return;const x=ko(d),b=ko(i.clientWidth-(u+p)),k=ko(i.clientHeight-(d+v)),f=ko(u),y={rootMargin:-x+"px "+-b+"px "+-k+"px "+-f+"px",threshold:ct(0,Zn(1,l))||1};let w=!0;function T(C){const P=C[0].intersectionRatio;if(P!==l){if(!w)return s();P?s(!1,P):r=setTimeout(()=>{s(!1,1e-7)},1e3)}P===1&&!_y(h,e.getBoundingClientRect())&&s(),w=!1}try{n=new IntersectionObserver(T,{...y,root:i.ownerDocument})}catch{n=new IntersectionObserver(T,y)}n.observe(e)}return s(!0),a}function VT(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:l=!1}=r,h=Mu(e),u=i||a?[...h?_a(h):[],..._a(t)]:[];u.forEach(f=>{i&&f.addEventListener("scroll",n,{passive:!0}),a&&f.addEventListener("resize",n)});const d=h&&c?BT(h,n):null;let p=-1,v=null;s&&(v=new ResizeObserver(f=>{let[g]=f;g&&g.target===h&&v&&(v.unobserve(t),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{var y;(y=v)==null||y.observe(t)})),n()}),h&&!l&&v.observe(h),v.observe(t));let x,b=l?Er(e):null;l&&k();function k(){const f=Er(e);b&&!_y(b,f)&&n(),b=f,x=requestAnimationFrame(k)}return n(),()=>{var f;u.forEach(g=>{i&&g.removeEventListener("scroll",n),a&&g.removeEventListener("resize",n)}),d==null||d(),(f=v)==null||f.disconnect(),v=null,l&&cancelAnimationFrame(x)}}const zT=pT,HT=gT,GT=hT,WT=fT,$T=uT,Mp=lT,KT=mT,QT=(e,t,n)=>{const r=new Map,i={platform:FT,...n},a={...i.platform,_c:r};return cT(e,t,{...i,platform:a})};var YT=typeof document<"u",XT=function(){},zo=YT?m.useLayoutEffect:XT;function As(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let n,r,i;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(n=e.length,n!==t.length)return!1;for(r=n;r--!==0;)if(!As(e[r],t[r]))return!1;return!0}if(i=Object.keys(e),n=i.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!{}.hasOwnProperty.call(t,i[r]))return!1;for(r=n;r--!==0;){const a=i[r];if(!(a==="_owner"&&e.$$typeof)&&!As(e[a],t[a]))return!1}return!0}return e!==e&&t!==t}function Fy(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function qp(e,t){const n=Fy(e);return Math.round(t*n)/n}function Kc(e){const t=m.useRef(e);return zo(()=>{t.current=e}),t}function JT(e){e===void 0&&(e={});const{placement:t="bottom",strategy:n="absolute",middleware:r=[],platform:i,elements:{reference:a,floating:s}={},transform:c=!0,whileElementsMounted:l,open:h}=e,[u,d]=m.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[p,v]=m.useState(r);As(p,r)||v(r);const[x,b]=m.useState(null),[k,f]=m.useState(null),g=m.useCallback(N=>{N!==C.current&&(C.current=N,b(N))},[]),y=m.useCallback(N=>{N!==P.current&&(P.current=N,f(N))},[]),w=a||x,T=s||k,C=m.useRef(null),P=m.useRef(null),S=m.useRef(u),A=l!=null,j=Kc(l),q=Kc(i),D=Kc(h),J=m.useCallback(()=>{if(!C.current||!P.current)return;const N={placement:t,strategy:n,middleware:p};q.current&&(N.platform=q.current),QT(C.current,P.current,N).then(M=>{const F={...M,isPositioned:D.current!==!1};O.current&&!As(S.current,F)&&(S.current=F,Qa.flushSync(()=>{d(F)}))})},[p,t,n,q,D]);zo(()=>{h===!1&&S.current.isPositioned&&(S.current.isPositioned=!1,d(N=>({...N,isPositioned:!1})))},[h]);const O=m.useRef(!1);zo(()=>(O.current=!0,()=>{O.current=!1}),[]),zo(()=>{if(w&&(C.current=w),T&&(P.current=T),w&&T){if(j.current)return j.current(w,T,J);J()}},[w,T,J,j,A]);const Q=m.useMemo(()=>({reference:C,floating:P,setReference:g,setFloating:y}),[g,y]),G=m.useMemo(()=>({reference:w,floating:T}),[w,T]),W=m.useMemo(()=>{const N={position:n,left:0,top:0};if(!G.floating)return N;const M=qp(G.floating,u.x),F=qp(G.floating,u.y);return c?{...N,transform:"translate("+M+"px, "+F+"px)",...Fy(G.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:M,top:F}},[n,c,G.floating,u.x,u.y]);return m.useMemo(()=>({...u,update:J,refs:Q,elements:G,floatingStyles:W}),[u,J,Q,G,W])}const ZT=e=>{function t(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:e,fn(n){const{element:r,padding:i}=typeof e=="function"?e(n):e;return r&&t(r)?r.current!=null?Mp({element:r.current,padding:i}).fn(n):{}:r?Mp({element:r,padding:i}).fn(n):{}}}},eC=(e,t)=>({...zT(e),options:[e,t]}),tC=(e,t)=>({...HT(e),options:[e,t]}),nC=(e,t)=>({...KT(e),options:[e,t]}),rC=(e,t)=>({...GT(e),options:[e,t]}),iC=(e,t)=>({...WT(e),options:[e,t]}),aC=(e,t)=>({...$T(e),options:[e,t]}),oC=(e,t)=>({...ZT(e),options:[e,t]});var sC="Arrow",By=m.forwardRef((e,t)=>{const{children:n,width:r=10,height:i=5,...a}=e;return o.jsx(Ue.svg,{...a,ref:t,width:r,height:i,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:e.asChild?n:o.jsx("polygon",{points:"0,0 30,0 15,10"})})});By.displayName=sC;var cC=By;function lC(e){const[t,n]=m.useState(void 0);return fn(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const r=new ResizeObserver(i=>{if(!Array.isArray(i)||!i.length)return;const a=i[0];let s,c;if("borderBoxSize"in a){const l=a.borderBoxSize,h=Array.isArray(l)?l[0]:l;s=h.inlineSize,c=h.blockSize}else s=e.offsetWidth,c=e.offsetHeight;n({width:s,height:c})});return r.observe(e,{box:"border-box"}),()=>r.unobserve(e)}else n(void 0)},[e]),t}var Ou="Popper",[Vy,tc]=Xa(Ou),[hC,zy]=Vy(Ou),Hy=e=>{const{__scopePopper:t,children:n}=e,[r,i]=m.useState(null);return o.jsx(hC,{scope:t,anchor:r,onAnchorChange:i,children:n})};Hy.displayName=Ou;var Gy="PopperAnchor",Wy=m.forwardRef((e,t)=>{const{__scopePopper:n,virtualRef:r,...i}=e,a=zy(Gy,n),s=m.useRef(null),c=at(t,s);return m.useEffect(()=>{a.onAnchorChange((r==null?void 0:r.current)||s.current)}),r?null:o.jsx(Ue.div,{...i,ref:c})});Wy.displayName=Gy;var Uu="PopperContent",[uC,dC]=Vy(Uu),$y=m.forwardRef((e,t)=>{var ft,wn,De,xn,E,_;const{__scopePopper:n,side:r="bottom",sideOffset:i=0,align:a="center",alignOffset:s=0,arrowPadding:c=0,avoidCollisions:l=!0,collisionBoundary:h=[],collisionPadding:u=0,sticky:d="partial",hideWhenDetached:p=!1,updatePositionStrategy:v="optimized",onPlaced:x,...b}=e,k=zy(Uu,n),[f,g]=m.useState(null),y=at(t,ee=>g(ee)),[w,T]=m.useState(null),C=lC(w),P=(C==null?void 0:C.width)??0,S=(C==null?void 0:C.height)??0,A=r+(a!=="center"?"-"+a:""),j=typeof u=="number"?u:{top:0,right:0,bottom:0,left:0,...u},q=Array.isArray(h)?h:[h],D=q.length>0,J={padding:j,boundary:q.filter(gC),altBoundary:D},{refs:O,floatingStyles:Q,placement:G,isPositioned:W,middlewareData:N}=JT({strategy:"fixed",placement:A,whileElementsMounted:(...ee)=>VT(...ee,{animationFrame:v==="always"}),elements:{reference:k.anchor},middleware:[eC({mainAxis:i+S,alignmentAxis:s}),l&&tC({mainAxis:!0,crossAxis:!1,limiter:d==="partial"?nC():void 0,...J}),l&&rC({...J}),iC({...J,apply:({elements:ee,rects:R,availableWidth:H,availableHeight:Y})=>{const{width:te,height:Z}=R.reference,$=ee.floating.style;$.setProperty("--radix-popper-available-width",`${H}px`),$.setProperty("--radix-popper-available-height",`${Y}px`),$.setProperty("--radix-popper-anchor-width",`${te}px`),$.setProperty("--radix-popper-anchor-height",`${Z}px`)}}),w&&oC({element:w,padding:c}),mC({arrowWidth:P,arrowHeight:S}),p&&aC({strategy:"referenceHidden",...J})]}),[M,F]=Yy(G),V=Jt(x);fn(()=>{W&&(V==null||V())},[W,V]);const z=(ft=N.arrow)==null?void 0:ft.x,Ge=(wn=N.arrow)==null?void 0:wn.y,ge=((De=N.arrow)==null?void 0:De.centerOffset)!==0,[Je,We]=m.useState();return fn(()=>{f&&We(window.getComputedStyle(f).zIndex)},[f]),o.jsx("div",{ref:O.setFloating,"data-radix-popper-content-wrapper":"",style:{...Q,transform:W?Q.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:Je,"--radix-popper-transform-origin":[(xn=N.transformOrigin)==null?void 0:xn.x,(E=N.transformOrigin)==null?void 0:E.y].join(" "),...((_=N.hide)==null?void 0:_.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:e.dir,children:o.jsx(uC,{scope:n,placedSide:M,onArrowChange:T,arrowX:z,arrowY:Ge,shouldHideArrow:ge,children:o.jsx(Ue.div,{"data-side":M,"data-align":F,...b,ref:y,style:{...b.style,animation:W?void 0:"none"}})})})});$y.displayName=Uu;var Ky="PopperArrow",pC={top:"bottom",right:"left",bottom:"top",left:"right"},Qy=m.forwardRef(function(t,n){const{__scopePopper:r,...i}=t,a=dC(Ky,r),s=pC[a.placedSide];return o.jsx("span",{ref:a.onArrowChange,style:{position:"absolute",left:a.arrowX,top:a.arrowY,[s]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[a.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[a.placedSide],visibility:a.shouldHideArrow?"hidden":void 0},children:o.jsx(cC,{...i,ref:n,style:{...i.style,display:"block"}})})});Qy.displayName=Ky;function gC(e){return e!==null}var mC=e=>({name:"transformOrigin",options:e,fn(t){var k,f,g;const{placement:n,rects:r,middlewareData:i}=t,s=((k=i.arrow)==null?void 0:k.centerOffset)!==0,c=s?0:e.arrowWidth,l=s?0:e.arrowHeight,[h,u]=Yy(n),d={start:"0%",center:"50%",end:"100%"}[u],p=(((f=i.arrow)==null?void 0:f.x)??0)+c/2,v=(((g=i.arrow)==null?void 0:g.y)??0)+l/2;let x="",b="";return h==="bottom"?(x=s?d:`${p}px`,b=`${-l}px`):h==="top"?(x=s?d:`${p}px`,b=`${r.floating.height+l}px`):h==="right"?(x=`${-l}px`,b=s?d:`${v}px`):h==="left"&&(x=`${r.floating.width+l}px`,b=s?d:`${v}px`),{data:{x,y:b}}}});function Yy(e){const[t,n="center"]=e.split("-");return[t,n]}var Xy=Hy,_u=Wy,Jy=$y,Zy=Qy,[nc,_N]=Xa("Tooltip",[tc]),rc=tc(),ev="TooltipProvider",fC=700,bh="tooltip.open",[yC,Fu]=nc(ev),tv=e=>{const{__scopeTooltip:t,delayDuration:n=fC,skipDelayDuration:r=300,disableHoverableContent:i=!1,children:a}=e,s=m.useRef(!0),c=m.useRef(!1),l=m.useRef(0);return m.useEffect(()=>{const h=l.current;return()=>window.clearTimeout(h)},[]),o.jsx(yC,{scope:t,isOpenDelayedRef:s,delayDuration:n,onOpen:m.useCallback(()=>{window.clearTimeout(l.current),s.current=!1},[]),onClose:m.useCallback(()=>{window.clearTimeout(l.current),l.current=window.setTimeout(()=>s.current=!0,r)},[r]),isPointerInTransitRef:c,onPointerInTransitChange:m.useCallback(h=>{c.current=h},[]),disableHoverableContent:i,children:a})};tv.displayName=ev;var Fa="Tooltip",[vC,ic]=nc(Fa),nv=e=>{const{__scopeTooltip:t,children:n,open:r,defaultOpen:i,onOpenChange:a,disableHoverableContent:s,delayDuration:c}=e,l=Fu(Fa,e.__scopeTooltip),h=rc(t),[u,d]=m.useState(null),p=Iy(),v=m.useRef(0),x=s??l.disableHoverableContent,b=c??l.delayDuration,k=m.useRef(!1),[f,g]=Cu({prop:r,defaultProp:i??!1,onChange:P=>{P?(l.onOpen(),document.dispatchEvent(new CustomEvent(bh))):l.onClose(),a==null||a(P)},caller:Fa}),y=m.useMemo(()=>f?k.current?"delayed-open":"instant-open":"closed",[f]),w=m.useCallback(()=>{window.clearTimeout(v.current),v.current=0,k.current=!1,g(!0)},[g]),T=m.useCallback(()=>{window.clearTimeout(v.current),v.current=0,g(!1)},[g]),C=m.useCallback(()=>{window.clearTimeout(v.current),v.current=window.setTimeout(()=>{k.current=!0,g(!0),v.current=0},b)},[b,g]);return m.useEffect(()=>()=>{v.current&&(window.clearTimeout(v.current),v.current=0)},[]),o.jsx(Xy,{...h,children:o.jsx(vC,{scope:t,contentId:p,open:f,stateAttribute:y,trigger:u,onTriggerChange:d,onTriggerEnter:m.useCallback(()=>{l.isOpenDelayedRef.current?C():w()},[l.isOpenDelayedRef,C,w]),onTriggerLeave:m.useCallback(()=>{x?T():(window.clearTimeout(v.current),v.current=0)},[T,x]),onOpen:w,onClose:T,disableHoverableContent:x,children:n})})};nv.displayName=Fa;var wh="TooltipTrigger",rv=m.forwardRef((e,t)=>{const{__scopeTooltip:n,...r}=e,i=ic(wh,n),a=Fu(wh,n),s=rc(n),c=m.useRef(null),l=at(t,c,i.onTriggerChange),h=m.useRef(!1),u=m.useRef(!1),d=m.useCallback(()=>h.current=!1,[]);return m.useEffect(()=>()=>document.removeEventListener("pointerup",d),[d]),o.jsx(_u,{asChild:!0,...s,children:o.jsx(Ue.button,{"aria-describedby":i.open?i.contentId:void 0,"data-state":i.stateAttribute,...r,ref:l,onPointerMove:pe(e.onPointerMove,p=>{p.pointerType!=="touch"&&!u.current&&!a.isPointerInTransitRef.current&&(i.onTriggerEnter(),u.current=!0)}),onPointerLeave:pe(e.onPointerLeave,()=>{i.onTriggerLeave(),u.current=!1}),onPointerDown:pe(e.onPointerDown,()=>{i.open&&i.onClose(),h.current=!0,document.addEventListener("pointerup",d,{once:!0})}),onFocus:pe(e.onFocus,()=>{h.current||i.onOpen()}),onBlur:pe(e.onBlur,i.onClose),onClick:pe(e.onClick,i.onClose)})})});rv.displayName=wh;var bC="TooltipPortal",[FN,wC]=nc(bC,{forceMount:void 0}),Ii="TooltipContent",iv=m.forwardRef((e,t)=>{const n=wC(Ii,e.__scopeTooltip),{forceMount:r=n.forceMount,side:i="top",...a}=e,s=ic(Ii,e.__scopeTooltip);return o.jsx(Ja,{present:r||s.open,children:s.disableHoverableContent?o.jsx(av,{side:i,...a,ref:t}):o.jsx(xC,{side:i,...a,ref:t})})}),xC=m.forwardRef((e,t)=>{const n=ic(Ii,e.__scopeTooltip),r=Fu(Ii,e.__scopeTooltip),i=m.useRef(null),a=at(t,i),[s,c]=m.useState(null),{trigger:l,onClose:h}=n,u=i.current,{onPointerInTransitChange:d}=r,p=m.useCallback(()=>{c(null),d(!1)},[d]),v=m.useCallback((x,b)=>{const k=x.currentTarget,f={x:x.clientX,y:x.clientY},g=PC(f,k.getBoundingClientRect()),y=AC(f,g),w=NC(b.getBoundingClientRect()),T=jC([...y,...w]);c(T),d(!0)},[d]);return m.useEffect(()=>()=>p(),[p]),m.useEffect(()=>{if(l&&u){const x=k=>v(k,u),b=k=>v(k,l);return l.addEventListener("pointerleave",x),u.addEventListener("pointerleave",b),()=>{l.removeEventListener("pointerleave",x),u.removeEventListener("pointerleave",b)}}},[l,u,v,p]),m.useEffect(()=>{if(s){const x=b=>{const k=b.target,f={x:b.clientX,y:b.clientY},g=(l==null?void 0:l.contains(k))||(u==null?void 0:u.contains(k)),y=!IC(f,s);g?p():y&&(p(),h())};return document.addEventListener("pointermove",x),()=>document.removeEventListener("pointermove",x)}},[l,u,s,h,p]),o.jsx(av,{...e,ref:a})}),[kC,TC]=nc(Fa,{isInside:!1}),CC=Ok("TooltipContent"),av=m.forwardRef((e,t)=>{const{__scopeTooltip:n,children:r,"aria-label":i,onEscapeKeyDown:a,onPointerDownOutside:s,...c}=e,l=ic(Ii,n),h=rc(n),{onClose:u}=l;return m.useEffect(()=>(document.addEventListener(bh,u),()=>document.removeEventListener(bh,u)),[u]),m.useEffect(()=>{if(l.trigger){const d=p=>{const v=p.target;v!=null&&v.contains(l.trigger)&&u()};return window.addEventListener("scroll",d,{capture:!0}),()=>window.removeEventListener("scroll",d,{capture:!0})}},[l.trigger,u]),o.jsx(Ks,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:a,onPointerDownOutside:s,onFocusOutside:d=>d.preventDefault(),onDismiss:u,children:o.jsxs(Jy,{"data-state":l.stateAttribute,...h,...c,ref:t,style:{...c.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[o.jsx(CC,{children:r}),o.jsx(kC,{scope:n,isInside:!0,children:o.jsx(s0,{id:l.contentId,role:"tooltip",children:i||r})})]})})});iv.displayName=Ii;var ov="TooltipArrow",SC=m.forwardRef((e,t)=>{const{__scopeTooltip:n,...r}=e,i=rc(n);return TC(ov,n).isInside?null:o.jsx(Zy,{...i,...r,ref:t})});SC.displayName=ov;function PC(e,t){const n=Math.abs(t.top-e.y),r=Math.abs(t.bottom-e.y),i=Math.abs(t.right-e.x),a=Math.abs(t.left-e.x);switch(Math.min(n,r,i,a)){case a:return"left";case i:return"right";case n:return"top";case r:return"bottom";default:throw new Error("unreachable")}}function AC(e,t,n=5){const r=[];switch(t){case"top":r.push({x:e.x-n,y:e.y+n},{x:e.x+n,y:e.y+n});break;case"bottom":r.push({x:e.x-n,y:e.y-n},{x:e.x+n,y:e.y-n});break;case"left":r.push({x:e.x+n,y:e.y-n},{x:e.x+n,y:e.y+n});break;case"right":r.push({x:e.x-n,y:e.y-n},{x:e.x-n,y:e.y+n});break}return r}function NC(e){const{top:t,right:n,bottom:r,left:i}=e;return[{x:i,y:t},{x:n,y:t},{x:n,y:r},{x:i,y:r}]}function IC(e,t){const{x:n,y:r}=e;let i=!1;for(let a=0,s=t.length-1;a<t.length;s=a++){const c=t[a],l=t[s],h=c.x,u=c.y,d=l.x,p=l.y;u>r!=p>r&&n<(d-h)*(r-u)/(p-u)+h&&(i=!i)}return i}function jC(e){const t=e.slice();return t.sort((n,r)=>n.x<r.x?-1:n.x>r.x?1:n.y<r.y?-1:n.y>r.y?1:0),EC(t)}function EC(e){if(e.length<=1)return e.slice();const t=[];for(let r=0;r<e.length;r++){const i=e[r];for(;t.length>=2;){const a=t[t.length-1],s=t[t.length-2];if((a.x-s.x)*(i.y-s.y)>=(a.y-s.y)*(i.x-s.x))t.pop();else break}t.push(i)}t.pop();const n=[];for(let r=e.length-1;r>=0;r--){const i=e[r];for(;n.length>=2;){const a=n[n.length-1],s=n[n.length-2];if((a.x-s.x)*(i.y-s.y)>=(a.y-s.y)*(i.x-s.x))n.pop();else break}n.push(i)}return n.pop(),t.length===1&&n.length===1&&t[0].x===n[0].x&&t[0].y===n[0].y?t:t.concat(n)}var RC=tv,LC=nv,DC=rv,sv=iv;const MC=RC,cv=LC,lv=DC,Bu=m.forwardRef(({className:e,sideOffset:t=4,...n},r)=>o.jsx(sv,{ref:r,sideOffset:t,className:mt("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...n}));Bu.displayName=sv.displayName;var ac=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){return this.listeners.add(e),this.onSubscribe(),()=>{this.listeners.delete(e),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},oc=typeof window>"u"||"Deno"in globalThis;function At(){}function qC(e,t){return typeof e=="function"?e(t):e}function OC(e){return typeof e=="number"&&e>=0&&e!==1/0}function UC(e,t){return Math.max(e+(t||0)-Date.now(),0)}function xh(e,t){return typeof e=="function"?e(t):e}function _C(e,t){return typeof e=="function"?e(t):e}function Op(e,t){const{type:n="all",exact:r,fetchStatus:i,predicate:a,queryKey:s,stale:c}=e;if(s){if(r){if(t.queryHash!==Vu(s,t.options))return!1}else if(!Va(t.queryKey,s))return!1}if(n!=="all"){const l=t.isActive();if(n==="active"&&!l||n==="inactive"&&l)return!1}return!(typeof c=="boolean"&&t.isStale()!==c||i&&i!==t.state.fetchStatus||a&&!a(t))}function Up(e,t){const{exact:n,status:r,predicate:i,mutationKey:a}=e;if(a){if(!t.options.mutationKey)return!1;if(n){if(Ba(t.options.mutationKey)!==Ba(a))return!1}else if(!Va(t.options.mutationKey,a))return!1}return!(r&&t.state.status!==r||i&&!i(t))}function Vu(e,t){return((t==null?void 0:t.queryKeyHashFn)||Ba)(e)}function Ba(e){return JSON.stringify(e,(t,n)=>kh(n)?Object.keys(n).sort().reduce((r,i)=>(r[i]=n[i],r),{}):n)}function Va(e,t){return e===t?!0:typeof e!=typeof t?!1:e&&t&&typeof e=="object"&&typeof t=="object"?Object.keys(t).every(n=>Va(e[n],t[n])):!1}function hv(e,t){if(e===t)return e;const n=_p(e)&&_p(t);if(n||kh(e)&&kh(t)){const r=n?e:Object.keys(e),i=r.length,a=n?t:Object.keys(t),s=a.length,c=n?[]:{},l=new Set(r);let h=0;for(let u=0;u<s;u++){const d=n?u:a[u];(!n&&l.has(d)||n)&&e[d]===void 0&&t[d]===void 0?(c[d]=void 0,h++):(c[d]=hv(e[d],t[d]),c[d]===e[d]&&e[d]!==void 0&&h++)}return i===s&&h===i?e:c}return t}function _p(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function kh(e){if(!Fp(e))return!1;const t=e.constructor;if(t===void 0)return!0;const n=t.prototype;return!(!Fp(n)||!n.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(e)!==Object.prototype)}function Fp(e){return Object.prototype.toString.call(e)==="[object Object]"}function FC(e){return new Promise(t=>{setTimeout(t,e)})}function BC(e,t,n){return typeof n.structuralSharing=="function"?n.structuralSharing(e,t):n.structuralSharing!==!1?hv(e,t):t}function VC(e,t,n=0){const r=[...e,t];return n&&r.length>n?r.slice(1):r}function zC(e,t,n=0){const r=[t,...e];return n&&r.length>n?r.slice(0,-1):r}var zu=Symbol();function uv(e,t){return!e.queryFn&&(t!=null&&t.initialPromise)?()=>t.initialPromise:!e.queryFn||e.queryFn===zu?()=>Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)):e.queryFn}var fr,Ln,di,yg,HC=(yg=class extends ac{constructor(){super();ie(this,fr);ie(this,Ln);ie(this,di);K(this,di,t=>{if(!oc&&window.addEventListener){const n=()=>t();return window.addEventListener("visibilitychange",n,!1),()=>{window.removeEventListener("visibilitychange",n)}}})}onSubscribe(){I(this,Ln)||this.setEventListener(I(this,di))}onUnsubscribe(){var t;this.hasListeners()||((t=I(this,Ln))==null||t.call(this),K(this,Ln,void 0))}setEventListener(t){var n;K(this,di,t),(n=I(this,Ln))==null||n.call(this),K(this,Ln,t(r=>{typeof r=="boolean"?this.setFocused(r):this.onFocus()}))}setFocused(t){I(this,fr)!==t&&(K(this,fr,t),this.onFocus())}onFocus(){const t=this.isFocused();this.listeners.forEach(n=>{n(t)})}isFocused(){var t;return typeof I(this,fr)=="boolean"?I(this,fr):((t=globalThis.document)==null?void 0:t.visibilityState)!=="hidden"}},fr=new WeakMap,Ln=new WeakMap,di=new WeakMap,yg),dv=new HC,pi,Dn,gi,vg,GC=(vg=class extends ac{constructor(){super();ie(this,pi,!0);ie(this,Dn);ie(this,gi);K(this,gi,t=>{if(!oc&&window.addEventListener){const n=()=>t(!0),r=()=>t(!1);return window.addEventListener("online",n,!1),window.addEventListener("offline",r,!1),()=>{window.removeEventListener("online",n),window.removeEventListener("offline",r)}}})}onSubscribe(){I(this,Dn)||this.setEventListener(I(this,gi))}onUnsubscribe(){var t;this.hasListeners()||((t=I(this,Dn))==null||t.call(this),K(this,Dn,void 0))}setEventListener(t){var n;K(this,gi,t),(n=I(this,Dn))==null||n.call(this),K(this,Dn,t(this.setOnline.bind(this)))}setOnline(t){I(this,pi)!==t&&(K(this,pi,t),this.listeners.forEach(r=>{r(t)}))}isOnline(){return I(this,pi)}},pi=new WeakMap,Dn=new WeakMap,gi=new WeakMap,vg),Ns=new GC;function WC(){let e,t;const n=new Promise((i,a)=>{e=i,t=a});n.status="pending",n.catch(()=>{});function r(i){Object.assign(n,i),delete n.resolve,delete n.reject}return n.resolve=i=>{r({status:"fulfilled",value:i}),e(i)},n.reject=i=>{r({status:"rejected",reason:i}),t(i)},n}function $C(e){return Math.min(1e3*2**e,3e4)}function pv(e){return(e??"online")==="online"?Ns.isOnline():!0}var gv=class extends Error{constructor(e){super("CancelledError"),this.revert=e==null?void 0:e.revert,this.silent=e==null?void 0:e.silent}};function Qc(e){return e instanceof gv}function mv(e){let t=!1,n=0,r=!1,i;const a=WC(),s=b=>{var k;r||(p(new gv(b)),(k=e.abort)==null||k.call(e))},c=()=>{t=!0},l=()=>{t=!1},h=()=>dv.isFocused()&&(e.networkMode==="always"||Ns.isOnline())&&e.canRun(),u=()=>pv(e.networkMode)&&e.canRun(),d=b=>{var k;r||(r=!0,(k=e.onSuccess)==null||k.call(e,b),i==null||i(),a.resolve(b))},p=b=>{var k;r||(r=!0,(k=e.onError)==null||k.call(e,b),i==null||i(),a.reject(b))},v=()=>new Promise(b=>{var k;i=f=>{(r||h())&&b(f)},(k=e.onPause)==null||k.call(e)}).then(()=>{var b;i=void 0,r||(b=e.onContinue)==null||b.call(e)}),x=()=>{if(r)return;let b;const k=n===0?e.initialPromise:void 0;try{b=k??e.fn()}catch(f){b=Promise.reject(f)}Promise.resolve(b).then(d).catch(f=>{var C;if(r)return;const g=e.retry??(oc?0:3),y=e.retryDelay??$C,w=typeof y=="function"?y(n,f):y,T=g===!0||typeof g=="number"&&n<g||typeof g=="function"&&g(n,f);if(t||!T){p(f);return}n++,(C=e.onFail)==null||C.call(e,n,f),FC(w).then(()=>h()?void 0:v()).then(()=>{t?p(f):x()})})};return{promise:a,cancel:s,continue:()=>(i==null||i(),a),cancelRetry:c,continueRetry:l,canStart:u,start:()=>(u()?x():v().then(x),a)}}var KC=e=>setTimeout(e,0);function QC(){let e=[],t=0,n=c=>{c()},r=c=>{c()},i=KC;const a=c=>{t?e.push(c):i(()=>{n(c)})},s=()=>{const c=e;e=[],c.length&&i(()=>{r(()=>{c.forEach(l=>{n(l)})})})};return{batch:c=>{let l;t++;try{l=c()}finally{t--,t||s()}return l},batchCalls:c=>(...l)=>{a(()=>{c(...l)})},schedule:a,setNotifyFunction:c=>{n=c},setBatchNotifyFunction:c=>{r=c},setScheduler:c=>{i=c}}}var Qe=QC(),yr,bg,fv=(bg=class{constructor(){ie(this,yr)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),OC(this.gcTime)&&K(this,yr,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(e){this.gcTime=Math.max(this.gcTime||0,e??(oc?1/0:5*60*1e3))}clearGcTimeout(){I(this,yr)&&(clearTimeout(I(this,yr)),K(this,yr,void 0))}},yr=new WeakMap,bg),mi,vr,yt,br,Ve,za,wr,Nt,rn,wg,YC=(wg=class extends fv{constructor(t){super();ie(this,Nt);ie(this,mi);ie(this,vr);ie(this,yt);ie(this,br);ie(this,Ve);ie(this,za);ie(this,wr);K(this,wr,!1),K(this,za,t.defaultOptions),this.setOptions(t.options),this.observers=[],K(this,br,t.client),K(this,yt,I(this,br).getQueryCache()),this.queryKey=t.queryKey,this.queryHash=t.queryHash,K(this,mi,JC(this.options)),this.state=t.state??I(this,mi),this.scheduleGc()}get meta(){return this.options.meta}get promise(){var t;return(t=I(this,Ve))==null?void 0:t.promise}setOptions(t){this.options={...I(this,za),...t},this.updateGcTime(this.options.gcTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&I(this,yt).remove(this)}setData(t,n){const r=BC(this.state.data,t,this.options);return _e(this,Nt,rn).call(this,{data:r,type:"success",dataUpdatedAt:n==null?void 0:n.updatedAt,manual:n==null?void 0:n.manual}),r}setState(t,n){_e(this,Nt,rn).call(this,{type:"setState",state:t,setStateOptions:n})}cancel(t){var r,i;const n=(r=I(this,Ve))==null?void 0:r.promise;return(i=I(this,Ve))==null||i.cancel(t),n?n.then(At).catch(At):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(I(this,mi))}isActive(){return this.observers.some(t=>_C(t.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===zu||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStatic(){return this.getObserversCount()>0?this.observers.some(t=>xh(t.options.staleTime,this)==="static"):!1}isStale(){return this.getObserversCount()>0?this.observers.some(t=>t.getCurrentResult().isStale):this.state.data===void 0||this.state.isInvalidated}isStaleByTime(t=0){return this.state.data===void 0?!0:t==="static"?!1:this.state.isInvalidated?!0:!UC(this.state.dataUpdatedAt,t)}onFocus(){var n;const t=this.observers.find(r=>r.shouldFetchOnWindowFocus());t==null||t.refetch({cancelRefetch:!1}),(n=I(this,Ve))==null||n.continue()}onOnline(){var n;const t=this.observers.find(r=>r.shouldFetchOnReconnect());t==null||t.refetch({cancelRefetch:!1}),(n=I(this,Ve))==null||n.continue()}addObserver(t){this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),I(this,yt).notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){this.observers.includes(t)&&(this.observers=this.observers.filter(n=>n!==t),this.observers.length||(I(this,Ve)&&(I(this,wr)?I(this,Ve).cancel({revert:!0}):I(this,Ve).cancelRetry()),this.scheduleGc()),I(this,yt).notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||_e(this,Nt,rn).call(this,{type:"invalidate"})}fetch(t,n){var h,u,d;if(this.state.fetchStatus!=="idle"){if(this.state.data!==void 0&&(n!=null&&n.cancelRefetch))this.cancel({silent:!0});else if(I(this,Ve))return I(this,Ve).continueRetry(),I(this,Ve).promise}if(t&&this.setOptions(t),!this.options.queryFn){const p=this.observers.find(v=>v.options.queryFn);p&&this.setOptions(p.options)}const r=new AbortController,i=p=>{Object.defineProperty(p,"signal",{enumerable:!0,get:()=>(K(this,wr,!0),r.signal)})},a=()=>{const p=uv(this.options,n),x=(()=>{const b={client:I(this,br),queryKey:this.queryKey,meta:this.meta};return i(b),b})();return K(this,wr,!1),this.options.persister?this.options.persister(p,x,this):p(x)},c=(()=>{const p={fetchOptions:n,options:this.options,queryKey:this.queryKey,client:I(this,br),state:this.state,fetchFn:a};return i(p),p})();(h=this.options.behavior)==null||h.onFetch(c,this),K(this,vr,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((u=c.fetchOptions)==null?void 0:u.meta))&&_e(this,Nt,rn).call(this,{type:"fetch",meta:(d=c.fetchOptions)==null?void 0:d.meta});const l=p=>{var v,x,b,k;Qc(p)&&p.silent||_e(this,Nt,rn).call(this,{type:"error",error:p}),Qc(p)||((x=(v=I(this,yt).config).onError)==null||x.call(v,p,this),(k=(b=I(this,yt).config).onSettled)==null||k.call(b,this.state.data,p,this)),this.scheduleGc()};return K(this,Ve,mv({initialPromise:n==null?void 0:n.initialPromise,fn:c.fetchFn,abort:r.abort.bind(r),onSuccess:p=>{var v,x,b,k;if(p===void 0){l(new Error(`${this.queryHash} data is undefined`));return}try{this.setData(p)}catch(f){l(f);return}(x=(v=I(this,yt).config).onSuccess)==null||x.call(v,p,this),(k=(b=I(this,yt).config).onSettled)==null||k.call(b,p,this.state.error,this),this.scheduleGc()},onError:l,onFail:(p,v)=>{_e(this,Nt,rn).call(this,{type:"failed",failureCount:p,error:v})},onPause:()=>{_e(this,Nt,rn).call(this,{type:"pause"})},onContinue:()=>{_e(this,Nt,rn).call(this,{type:"continue"})},retry:c.options.retry,retryDelay:c.options.retryDelay,networkMode:c.options.networkMode,canRun:()=>!0})),I(this,Ve).start()}},mi=new WeakMap,vr=new WeakMap,yt=new WeakMap,br=new WeakMap,Ve=new WeakMap,za=new WeakMap,wr=new WeakMap,Nt=new WeakSet,rn=function(t){const n=r=>{switch(t.type){case"failed":return{...r,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...r,fetchStatus:"paused"};case"continue":return{...r,fetchStatus:"fetching"};case"fetch":return{...r,...XC(r.data,this.options),fetchMeta:t.meta??null};case"success":return K(this,vr,void 0),{...r,data:t.data,dataUpdateCount:r.dataUpdateCount+1,dataUpdatedAt:t.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const i=t.error;return Qc(i)&&i.revert&&I(this,vr)?{...I(this,vr),fetchStatus:"idle"}:{...r,error:i,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,fetchFailureReason:i,fetchStatus:"idle",status:"error"};case"invalidate":return{...r,isInvalidated:!0};case"setState":return{...r,...t.state}}};this.state=n(this.state),Qe.batch(()=>{this.observers.forEach(r=>{r.onQueryUpdate()}),I(this,yt).notify({query:this,type:"updated",action:t})})},wg);function XC(e,t){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:pv(t.networkMode)?"fetching":"paused",...e===void 0&&{error:null,status:"pending"}}}function JC(e){const t=typeof e.initialData=="function"?e.initialData():e.initialData,n=t!==void 0,r=n?typeof e.initialDataUpdatedAt=="function"?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:n?r??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"pending",fetchStatus:"idle"}}var Vt,xg,ZC=(xg=class extends ac{constructor(t={}){super();ie(this,Vt);this.config=t,K(this,Vt,new Map)}build(t,n,r){const i=n.queryKey,a=n.queryHash??Vu(i,n);let s=this.get(a);return s||(s=new YC({client:t,queryKey:i,queryHash:a,options:t.defaultQueryOptions(n),state:r,defaultOptions:t.getQueryDefaults(i)}),this.add(s)),s}add(t){I(this,Vt).has(t.queryHash)||(I(this,Vt).set(t.queryHash,t),this.notify({type:"added",query:t}))}remove(t){const n=I(this,Vt).get(t.queryHash);n&&(t.destroy(),n===t&&I(this,Vt).delete(t.queryHash),this.notify({type:"removed",query:t}))}clear(){Qe.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}get(t){return I(this,Vt).get(t)}getAll(){return[...I(this,Vt).values()]}find(t){const n={exact:!0,...t};return this.getAll().find(r=>Op(n,r))}findAll(t={}){const n=this.getAll();return Object.keys(t).length>0?n.filter(r=>Op(t,r)):n}notify(t){Qe.batch(()=>{this.listeners.forEach(n=>{n(t)})})}onFocus(){Qe.batch(()=>{this.getAll().forEach(t=>{t.onFocus()})})}onOnline(){Qe.batch(()=>{this.getAll().forEach(t=>{t.onOnline()})})}},Vt=new WeakMap,xg),zt,$e,xr,Ht,An,kg,eS=(kg=class extends fv{constructor(t){super();ie(this,Ht);ie(this,zt);ie(this,$e);ie(this,xr);this.mutationId=t.mutationId,K(this,$e,t.mutationCache),K(this,zt,[]),this.state=t.state||tS(),this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options=t,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){I(this,zt).includes(t)||(I(this,zt).push(t),this.clearGcTimeout(),I(this,$e).notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){K(this,zt,I(this,zt).filter(n=>n!==t)),this.scheduleGc(),I(this,$e).notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){I(this,zt).length||(this.state.status==="pending"?this.scheduleGc():I(this,$e).remove(this))}continue(){var t;return((t=I(this,xr))==null?void 0:t.continue())??this.execute(this.state.variables)}async execute(t){var a,s,c,l,h,u,d,p,v,x,b,k,f,g,y,w,T,C,P,S;const n=()=>{_e(this,Ht,An).call(this,{type:"continue"})};K(this,xr,mv({fn:()=>this.options.mutationFn?this.options.mutationFn(t):Promise.reject(new Error("No mutationFn found")),onFail:(A,j)=>{_e(this,Ht,An).call(this,{type:"failed",failureCount:A,error:j})},onPause:()=>{_e(this,Ht,An).call(this,{type:"pause"})},onContinue:n,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>I(this,$e).canRun(this)}));const r=this.state.status==="pending",i=!I(this,xr).canStart();try{if(r)n();else{_e(this,Ht,An).call(this,{type:"pending",variables:t,isPaused:i}),await((s=(a=I(this,$e).config).onMutate)==null?void 0:s.call(a,t,this));const j=await((l=(c=this.options).onMutate)==null?void 0:l.call(c,t));j!==this.state.context&&_e(this,Ht,An).call(this,{type:"pending",context:j,variables:t,isPaused:i})}const A=await I(this,xr).start();return await((u=(h=I(this,$e).config).onSuccess)==null?void 0:u.call(h,A,t,this.state.context,this)),await((p=(d=this.options).onSuccess)==null?void 0:p.call(d,A,t,this.state.context)),await((x=(v=I(this,$e).config).onSettled)==null?void 0:x.call(v,A,null,this.state.variables,this.state.context,this)),await((k=(b=this.options).onSettled)==null?void 0:k.call(b,A,null,t,this.state.context)),_e(this,Ht,An).call(this,{type:"success",data:A}),A}catch(A){try{throw await((g=(f=I(this,$e).config).onError)==null?void 0:g.call(f,A,t,this.state.context,this)),await((w=(y=this.options).onError)==null?void 0:w.call(y,A,t,this.state.context)),await((C=(T=I(this,$e).config).onSettled)==null?void 0:C.call(T,void 0,A,this.state.variables,this.state.context,this)),await((S=(P=this.options).onSettled)==null?void 0:S.call(P,void 0,A,t,this.state.context)),A}finally{_e(this,Ht,An).call(this,{type:"error",error:A})}}finally{I(this,$e).runNext(this)}}},zt=new WeakMap,$e=new WeakMap,xr=new WeakMap,Ht=new WeakSet,An=function(t){const n=r=>{switch(t.type){case"failed":return{...r,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...r,isPaused:!0};case"continue":return{...r,isPaused:!1};case"pending":return{...r,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:t.isPaused,status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...r,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...r,data:void 0,error:t.error,failureCount:r.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}};this.state=n(this.state),Qe.batch(()=>{I(this,zt).forEach(r=>{r.onMutationUpdate(t)}),I(this,$e).notify({mutation:this,type:"updated",action:t})})},kg);function tS(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var sn,It,Ha,Tg,nS=(Tg=class extends ac{constructor(t={}){super();ie(this,sn);ie(this,It);ie(this,Ha);this.config=t,K(this,sn,new Set),K(this,It,new Map),K(this,Ha,0)}build(t,n,r){const i=new eS({mutationCache:this,mutationId:++no(this,Ha)._,options:t.defaultMutationOptions(n),state:r});return this.add(i),i}add(t){I(this,sn).add(t);const n=To(t);if(typeof n=="string"){const r=I(this,It).get(n);r?r.push(t):I(this,It).set(n,[t])}this.notify({type:"added",mutation:t})}remove(t){if(I(this,sn).delete(t)){const n=To(t);if(typeof n=="string"){const r=I(this,It).get(n);if(r)if(r.length>1){const i=r.indexOf(t);i!==-1&&r.splice(i,1)}else r[0]===t&&I(this,It).delete(n)}}this.notify({type:"removed",mutation:t})}canRun(t){const n=To(t);if(typeof n=="string"){const r=I(this,It).get(n),i=r==null?void 0:r.find(a=>a.state.status==="pending");return!i||i===t}else return!0}runNext(t){var r;const n=To(t);if(typeof n=="string"){const i=(r=I(this,It).get(n))==null?void 0:r.find(a=>a!==t&&a.state.isPaused);return(i==null?void 0:i.continue())??Promise.resolve()}else return Promise.resolve()}clear(){Qe.batch(()=>{I(this,sn).forEach(t=>{this.notify({type:"removed",mutation:t})}),I(this,sn).clear(),I(this,It).clear()})}getAll(){return Array.from(I(this,sn))}find(t){const n={exact:!0,...t};return this.getAll().find(r=>Up(n,r))}findAll(t={}){return this.getAll().filter(n=>Up(t,n))}notify(t){Qe.batch(()=>{this.listeners.forEach(n=>{n(t)})})}resumePausedMutations(){const t=this.getAll().filter(n=>n.state.isPaused);return Qe.batch(()=>Promise.all(t.map(n=>n.continue().catch(At))))}},sn=new WeakMap,It=new WeakMap,Ha=new WeakMap,Tg);function To(e){var t;return(t=e.options.scope)==null?void 0:t.id}function Bp(e){return{onFetch:(t,n)=>{var u,d,p,v,x;const r=t.options,i=(p=(d=(u=t.fetchOptions)==null?void 0:u.meta)==null?void 0:d.fetchMore)==null?void 0:p.direction,a=((v=t.state.data)==null?void 0:v.pages)||[],s=((x=t.state.data)==null?void 0:x.pageParams)||[];let c={pages:[],pageParams:[]},l=0;const h=async()=>{let b=!1;const k=y=>{Object.defineProperty(y,"signal",{enumerable:!0,get:()=>(t.signal.aborted?b=!0:t.signal.addEventListener("abort",()=>{b=!0}),t.signal)})},f=uv(t.options,t.fetchOptions),g=async(y,w,T)=>{if(b)return Promise.reject();if(w==null&&y.pages.length)return Promise.resolve(y);const P=(()=>{const q={client:t.client,queryKey:t.queryKey,pageParam:w,direction:T?"backward":"forward",meta:t.options.meta};return k(q),q})(),S=await f(P),{maxPages:A}=t.options,j=T?zC:VC;return{pages:j(y.pages,S,A),pageParams:j(y.pageParams,w,A)}};if(i&&a.length){const y=i==="backward",w=y?rS:Vp,T={pages:a,pageParams:s},C=w(r,T);c=await g(T,C,y)}else{const y=e??a.length;do{const w=l===0?s[0]??r.initialPageParam:Vp(r,c);if(l>0&&w==null)break;c=await g(c,w),l++}while(l<y)}return c};t.options.persister?t.fetchFn=()=>{var b,k;return(k=(b=t.options).persister)==null?void 0:k.call(b,h,{client:t.client,queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},n)}:t.fetchFn=h}}}function Vp(e,{pages:t,pageParams:n}){const r=t.length-1;return t.length>0?e.getNextPageParam(t[r],t,n[r],n):void 0}function rS(e,{pages:t,pageParams:n}){var r;return t.length>0?(r=e.getPreviousPageParam)==null?void 0:r.call(e,t[0],t,n[0],n):void 0}var be,Mn,qn,fi,yi,On,vi,bi,Cg,iS=(Cg=class{constructor(e={}){ie(this,be);ie(this,Mn);ie(this,qn);ie(this,fi);ie(this,yi);ie(this,On);ie(this,vi);ie(this,bi);K(this,be,e.queryCache||new ZC),K(this,Mn,e.mutationCache||new nS),K(this,qn,e.defaultOptions||{}),K(this,fi,new Map),K(this,yi,new Map),K(this,On,0)}mount(){no(this,On)._++,I(this,On)===1&&(K(this,vi,dv.subscribe(async e=>{e&&(await this.resumePausedMutations(),I(this,be).onFocus())})),K(this,bi,Ns.subscribe(async e=>{e&&(await this.resumePausedMutations(),I(this,be).onOnline())})))}unmount(){var e,t;no(this,On)._--,I(this,On)===0&&((e=I(this,vi))==null||e.call(this),K(this,vi,void 0),(t=I(this,bi))==null||t.call(this),K(this,bi,void 0))}isFetching(e){return I(this,be).findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return I(this,Mn).findAll({...e,status:"pending"}).length}getQueryData(e){var n;const t=this.defaultQueryOptions({queryKey:e});return(n=I(this,be).get(t.queryHash))==null?void 0:n.state.data}ensureQueryData(e){const t=this.defaultQueryOptions(e),n=I(this,be).build(this,t),r=n.state.data;return r===void 0?this.fetchQuery(e):(e.revalidateIfStale&&n.isStaleByTime(xh(t.staleTime,n))&&this.prefetchQuery(t),Promise.resolve(r))}getQueriesData(e){return I(this,be).findAll(e).map(({queryKey:t,state:n})=>{const r=n.data;return[t,r]})}setQueryData(e,t,n){const r=this.defaultQueryOptions({queryKey:e}),i=I(this,be).get(r.queryHash),a=i==null?void 0:i.state.data,s=qC(t,a);if(s!==void 0)return I(this,be).build(this,r).setData(s,{...n,manual:!0})}setQueriesData(e,t,n){return Qe.batch(()=>I(this,be).findAll(e).map(({queryKey:r})=>[r,this.setQueryData(r,t,n)]))}getQueryState(e){var n;const t=this.defaultQueryOptions({queryKey:e});return(n=I(this,be).get(t.queryHash))==null?void 0:n.state}removeQueries(e){const t=I(this,be);Qe.batch(()=>{t.findAll(e).forEach(n=>{t.remove(n)})})}resetQueries(e,t){const n=I(this,be);return Qe.batch(()=>(n.findAll(e).forEach(r=>{r.reset()}),this.refetchQueries({type:"active",...e},t)))}cancelQueries(e,t={}){const n={revert:!0,...t},r=Qe.batch(()=>I(this,be).findAll(e).map(i=>i.cancel(n)));return Promise.all(r).then(At).catch(At)}invalidateQueries(e,t={}){return Qe.batch(()=>(I(this,be).findAll(e).forEach(n=>{n.invalidate()}),(e==null?void 0:e.refetchType)==="none"?Promise.resolve():this.refetchQueries({...e,type:(e==null?void 0:e.refetchType)??(e==null?void 0:e.type)??"active"},t)))}refetchQueries(e,t={}){const n={...t,cancelRefetch:t.cancelRefetch??!0},r=Qe.batch(()=>I(this,be).findAll(e).filter(i=>!i.isDisabled()&&!i.isStatic()).map(i=>{let a=i.fetch(void 0,n);return n.throwOnError||(a=a.catch(At)),i.state.fetchStatus==="paused"?Promise.resolve():a}));return Promise.all(r).then(At)}fetchQuery(e){const t=this.defaultQueryOptions(e);t.retry===void 0&&(t.retry=!1);const n=I(this,be).build(this,t);return n.isStaleByTime(xh(t.staleTime,n))?n.fetch(t):Promise.resolve(n.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(At).catch(At)}fetchInfiniteQuery(e){return e.behavior=Bp(e.pages),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(At).catch(At)}ensureInfiniteQueryData(e){return e.behavior=Bp(e.pages),this.ensureQueryData(e)}resumePausedMutations(){return Ns.isOnline()?I(this,Mn).resumePausedMutations():Promise.resolve()}getQueryCache(){return I(this,be)}getMutationCache(){return I(this,Mn)}getDefaultOptions(){return I(this,qn)}setDefaultOptions(e){K(this,qn,e)}setQueryDefaults(e,t){I(this,fi).set(Ba(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){const t=[...I(this,fi).values()],n={};return t.forEach(r=>{Va(e,r.queryKey)&&Object.assign(n,r.defaultOptions)}),n}setMutationDefaults(e,t){I(this,yi).set(Ba(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){const t=[...I(this,yi).values()],n={};return t.forEach(r=>{Va(e,r.mutationKey)&&Object.assign(n,r.defaultOptions)}),n}defaultQueryOptions(e){if(e._defaulted)return e;const t={...I(this,qn).queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return t.queryHash||(t.queryHash=Vu(t.queryKey,t)),t.refetchOnReconnect===void 0&&(t.refetchOnReconnect=t.networkMode!=="always"),t.throwOnError===void 0&&(t.throwOnError=!!t.suspense),!t.networkMode&&t.persister&&(t.networkMode="offlineFirst"),t.queryFn===zu&&(t.enabled=!1),t}defaultMutationOptions(e){return e!=null&&e._defaulted?e:{...I(this,qn).mutations,...(e==null?void 0:e.mutationKey)&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){I(this,be).clear(),I(this,Mn).clear()}},be=new WeakMap,Mn=new WeakMap,qn=new WeakMap,fi=new WeakMap,yi=new WeakMap,On=new WeakMap,vi=new WeakMap,bi=new WeakMap,Cg),aS=m.createContext(void 0),oS=({client:e,children:t})=>(m.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]),o.jsx(aS.Provider,{value:e,children:t}));const zp="haiit-preferred-effect",sS=["none","christmas","tet","parallax"],cS=7,lS=e=>e!==null&&sS.includes(e),Pe=e=>Math.floor(e),yv=e=>{var n,r,i;const t=new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Ho_Chi_Minh",year:"numeric",month:"numeric",day:"numeric"}).formatToParts(e);return{year:Number(((n=t.find(a=>a.type==="year"))==null?void 0:n.value)??0),month:Number(((r=t.find(a=>a.type==="month"))==null?void 0:r.value)??0),day:Number(((i=t.find(a=>a.type==="day"))==null?void 0:i.value)??0)}},vv=(e,t,n)=>{const r=Pe((14-t)/12),i=n+4800-r,a=t+12*r-3;return n>1582||n===1582&&(t>10||t===10&&e>=15)?e+Pe((153*a+2)/5)+365*i+Pe(i/4)-Pe(i/100)+Pe(i/400)-32045:e+Pe((153*a+2)/5)+365*i+Pe(i/4)-32083},ji=e=>{const t=e/1236.85,n=t*t,r=n*t,i=r*t,a=Math.PI/180;let s=241502075933e-5+29.53058868*e+1178e-7*n-155e-9*r;s+=33e-5*Math.sin((166.56+132.87*t-.009173*n)*a);const c=359.2242+29.10535608*e-333e-7*n-347e-8*r,l=306.0253+385.81691806*e+.0107306*n+1236e-8*r-58e-9*i,h=21.2964+390.67050646*e-.0016528*n-239e-8*r+2e-8*i,u=(.1734-393e-6*t)*Math.sin(c*a)+.0021*Math.sin(2*a*c)-.4068*Math.sin(l*a)+.0161*Math.sin(2*a*l)-4e-4*Math.sin(3*a*l)+.0104*Math.sin(2*a*h)-.0051*Math.sin((c+l)*a)-.0074*Math.sin((c-l)*a)+4e-4*Math.sin((2*h+c)*a)-4e-4*Math.sin((2*h-c)*a)-6e-4*Math.sin((2*h+l)*a)+.001*Math.sin((2*h-l)*a)+5e-4*Math.sin((2*l+c)*a);let d;return t<-11?d=.001+839e-6*t+2261e-7*n-845e-8*r-81e-9*i:d=-278e-6+265e-6*t+262e-6*n,s+u-d},Th=(e,t)=>{const n=(e-24515455e-1-t/24)/36525,r=n*n,i=Math.PI/180,a=357.5291+35999.0503*n-1559e-7*r-48e-8*r*n,s=280.46645+36000.76983*n+3032e-7*r,c=(1.9146-.004817*n-14e-6*r)*Math.sin(i*a)+(.019993-101e-6*n)*Math.sin(2*i*a)+29e-5*Math.sin(3*i*a),l=(s+c)*i;return Pe((l-2*Math.PI*Pe(l/(2*Math.PI)))/Math.PI*6)},Yc=(e,t)=>{const n=vv(31,12,e)-2415021,r=Pe(n/29.530588853);let i=ji(r);return Th(Pe(i+.5+t/24),t)>=9&&(i=ji(r-1)),Pe(i+.5+t/24)},hS=(e,t)=>{const n=Pe(.5+(e-2415021076998695e-9)/29.530588853);let r=0,i=1,a=Th(Pe(ji(n+i)+.5+t/24),t);do r=a,i+=1,a=Th(Pe(ji(n+i)+.5+t/24),t);while(a!==r&&i<14);return i-1},uS=(e,t,n,r)=>{const i=vv(e,t,n),a=Pe((i-2415021076998695e-9)/29.530588853);let s=Pe(ji(a+1)+.5+r/24);s>i&&(s=Pe(ji(a)+.5+r/24));let c=Yc(n,r),l=c,h;c>=s?(h=n,c=Yc(n-1,r)):(h=n+1,l=Yc(n+1,r));const u=i-s+1,d=Pe((s-c)/29);let p=0,v=d+11;if(l-c>365){const x=hS(c,r);d>=x&&(v=d+10,d===x&&(p=1))}return v>12&&(v-=12),v>=11&&d<4&&(h-=1),{day:u,month:v,year:h,leap:p}},dS=e=>{const{day:t,month:n,year:r}=yv(e);return uS(t,n,r,cS)},pS=e=>{const t=yv(e);if(t.month===12&&t.day>=24&&t.day<=26)return"christmas";if(t.day===t.month)return"parallax";const n=dS(e);return n.month===1&&n.day>=1&&n.day<=5||n.month===12&&n.day>=29&&n.day<=30?"tet":"none"},bv=m.createContext(void 0),gS=({children:e})=>{const[t,n]=m.useState(()=>{const i=localStorage.getItem(zp);return lS(i)?i:pS(new Date)}),r=i=>{n(i),localStorage.setItem(zp,i)};return o.jsx(bv.Provider,{value:{currentEffect:t,setCurrentEffect:r},children:e})},wv=()=>{const e=m.useContext(bv);if(!e)throw new Error("useEffects must be used within an EffectsProvider");return e},mS=Nu("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),ne=m.forwardRef(({className:e,variant:t,size:n,asChild:r=!1,...i},a)=>{const s=r?Mk:"button";return o.jsx(s,{className:mt(mS({variant:t,size:n,className:e})),ref:a,...i})});ne.displayName="Button";const fS={"nav.home":{vi:"Trang chủ",en:"Index"},"nav.projects":{vi:"Dự án",en:"Work"},"nav.blog":{vi:"Bài viết",en:"Notes"},"nav.about":{vi:"Hồ sơ",en:"Profile"},"nav.contact":{vi:"Liên hệ",en:"Contact"},"nav.connect":{vi:"Sẵn sàng kết nối",en:"Available to connect"},"nav.theme":{vi:"Giao diện",en:"Theme"},"nav.language":{vi:"Ngôn ngữ",en:"Language"},"hero.log":{vi:"Portfolio / Nhật ký học tập",en:"Portfolio / Learning log"},"hero.open":{vi:"Sẵn sàng cho cơ hội phù hợp",en:"Open to meaningful work"},"hero.hello":{vi:"Xin chào, tôi là",en:"Hello, I am"},"hero.line1":{vi:"Chế tác mã nguồn",en:"Crafting code"},"hero.line2":{vi:"& đúc kết những",en:"& distilling field"},"hero.line3":{vi:"trải nghiệm thực tế.",en:"experiences."},"hero.bio":{vi:"một Information Systems Developer tập trung vào backend, database và những sản phẩm có giá trị sử dụng thực tế.",en:"an Information Systems Developer focused on backend, databases, and products with practical value."},"hero.work":{vi:"Khám phá dự án",en:"Explore selected work"},"hero.notes":{vi:"Đọc bài viết",en:"Read my notes"},"hero.repositories":{vi:"kho mã nguồn",en:"repositories"},"hero.languages":{vi:"ngôn ngữ",en:"languages"},"hero.journal":{vi:"nhật ký công khai",en:"public journal"},"hero.portrait":{vi:"Chân dung",en:"Portrait"},"home.work.eyebrow":{vi:"01 / Dự án chọn lọc",en:"01 / Selected work"},"home.work.title1":{vi:"Dự án có lý do",en:"Projects with a reason"},"home.work.title2":{vi:"để tồn tại.",en:"to exist."},"home.work.desc":{vi:"Mỗi dự án là một bài thực hành có chủ đích: dữ liệu, thuật toán, kiến trúc hoặc trải nghiệm người dùng.",en:"Each project is a deliberate exercise in data, algorithms, architecture, or user experience."},"home.work.archive":{vi:"Xem kho dự án",en:"View project archive"},"home.work.case":{vi:"Nghiên cứu",en:"Case study"},"home.work.tools":{vi:"Công cụ & bối cảnh",en:"Tools & context"},"home.notes.eyebrow":{vi:"02 / Ghi chép thực tế",en:"02 / Field notes"},"home.notes.title1":{vi:"Học tập công khai.",en:"Learn in public."},"home.notes.title2":{vi:"Giữ lại điều hữu ích.",en:"Keep the useful parts."},"home.notes.all":{vi:"Mở tất cả bài viết",en:"Open all notes"},"home.notes.read":{vi:"Đọc bài",en:"Read note"},"home.map.eyebrow":{vi:"03 / Bản đồ kiến thức",en:"03 / Knowledge map"},"home.map.title1":{vi:"Những điều tôi đang",en:"What I am"},"home.map.title2":{vi:"khám phá.",en:"mapping out."},"home.map.desc":{vi:"Không chỉ là danh mục. Đây là bản đồ những vùng kiến thức tôi đang học, thử nghiệm và kết nối lại với nhau.",en:"More than categories: a map of the knowledge areas I am learning, testing, and connecting."},"home.principle":{vi:"Nguyên tắc cá nhân",en:"Personal principle"},"home.quote":{vi:"“Tôi không cố tỏ ra biết mọi thứ. Tôi xây, ghi chép và biến những điều đã hiểu thành thứ hữu ích cho người tiếp theo.”",en:"“I do not pretend to know everything. I build, document, and turn what I understand into something useful for the next person.”"},"footer.eyebrow":{vi:"Cuối trang / đầu cuộc trò chuyện",en:"End of page / start of conversation"},"footer.title":{vi:"Tôi xây sản phẩm để hiểu hệ thống, rồi viết lại để hiểu sâu hơn.",en:"I build products to understand systems, then write to understand them deeper."},"footer.navigate":{vi:"Điều hướng",en:"Navigate"},"footer.connect":{vi:"Kết nối",en:"Connect"},"footer.work":{vi:"Dự án chọn lọc",en:"Selected work"},"footer.notes":{vi:"Ghi chép học tập",en:"Learning notes"},"footer.profile":{vi:"Hồ sơ & CV",en:"Profile & CV"},"footer.contact":{vi:"Liên hệ",en:"Contact"},"footer.feedback":{vi:"Gửi phản hồi",en:"Send feedback"},"footer.designed":{vi:"Được thiết kế như một nhật ký hệ thống sống",en:"Designed as a living systems journal"},"blog.title":{vi:"Bài viết",en:"Blog"},"blog.desc":{vi:"Kiến thức lập trình, kinh nghiệm thực tế và những bài học từ hành trình phát triển phần mềm.",en:"Programming knowledge, practical experience, and lessons from my software development journey."},"blog.search":{vi:"Tìm kiếm bài viết...",en:"Search articles..."},"blog.all":{vi:"Tất cả",en:"All"},"blog.filterCategory":{vi:"Danh mục",en:"Categories"},"blog.filterTag":{vi:"Thẻ nội dung",en:"Content tags"},"blog.allTags":{vi:"Tất cả thẻ",en:"All tags"},"blog.selectedTags":{vi:"thẻ đã chọn",en:"selected"},"blog.clearFilters":{vi:"Xóa bộ lọc",en:"Clear filters"},"blog.readMore":{vi:"Đọc thêm →",en:"Read more →"},"blog.empty":{vi:"Không tìm thấy bài viết",en:"No articles found"},"blog.emptyDesc":{vi:"Thử thay đổi bộ lọc hoặc từ khóa tìm kiếm.",en:"Try changing the filter or search keyword."},"project.title":{vi:"Dự án",en:"Projects"},"project.desc":{vi:"Các dự án cá nhân từ GitHub của tôi, từ ý tưởng đến sản phẩm hoàn chỉnh.",en:"My personal GitHub projects, from early ideas to finished products."},"project.github":{vi:"Xem thêm trên GitHub",en:"View more on GitHub"},"project.featured":{vi:"Dự án nổi bật",en:"Featured projects"},"project.all":{vi:"Tất cả dự án",en:"All projects"},"project.source":{vi:"Mã nguồn",en:"Source code"},"project.demo":{vi:"Bản chạy thử",en:"Live demo"},"post.back":{vi:"Quay lại Blog",en:"Back to Blog"},"post.notFound":{vi:"Bài viết không tồn tại",en:"Article not found"},"post.notFoundDesc":{vi:"Bài viết bạn đang tìm không tồn tại hoặc đã bị xóa.",en:"The article you are looking for does not exist or has been removed."},"post.views":{vi:"lượt xem",en:"views"},"post.tags":{vi:"Thẻ",en:"Tags"},"post.share":{vi:"Chia sẻ",en:"Share"},"post.copy":{vi:"Sao chép liên kết",en:"Copy link"},"post.sourceNote":{vi:"Ghi chú: Bài viết được tổng hợp từ quá trình học, thực hành và tham khảo nhiều nguồn tài liệu khác nhau.",en:"Note: This article is distilled from my learning, hands-on practice, and references across multiple sources."},"category.languages":{vi:"Ngôn ngữ lập trình",en:"Programming Languages"},"category.frameworks":{vi:"Framework & thư viện",en:"Frameworks & Libraries"},"category.architecture":{vi:"Kiến trúc phần mềm",en:"Software Architecture"},"category.patterns":{vi:"Mẫu thiết kế",en:"Design Patterns"},"category.practices":{vi:"Thực hành tốt",en:"Best Practices"},"category.roadmap":{vi:"Lộ trình học tập",en:"Learning Roadmaps"},"about.cv":{vi:"Xem CV của tôi",en:"View my CV"},"about.me":{vi:"Về tôi",en:"About me"},"about.experience":{vi:"Kinh nghiệm",en:"Experience"},"about.contact":{vi:"Liên hệ",en:"Contact"},"about.collab":{vi:"Muốn hợp tác?",en:"Interested in collaborating?"},"about.collabDesc":{vi:"Tôi luôn sẵn sàng thảo luận về các dự án thú vị.",en:"I am always open to discussing interesting projects."},"about.contactNow":{vi:"Liên hệ ngay",en:"Get in touch"},"about.download":{vi:"Tải PDF",en:"Download PDF"},"about.skills":{vi:"Kỹ năng kỹ thuật",en:"Technical skills"},"about.featured":{vi:"Dự án tiêu biểu (từ GitHub)",en:"Featured projects (from GitHub)"},"about.other":{vi:"Hoạt động khác",en:"Other activities"},"effect.title":{vi:"Hiệu ứng nền",en:"Background effects"}},xv=m.createContext(void 0),yS=({children:e})=>{const[t,n]=m.useState(()=>{const i=localStorage.getItem("haiit-language");return i==="vi"||i==="en"?i:navigator.language.toLowerCase().startsWith("vi")?"vi":"en"});m.useEffect(()=>{localStorage.setItem("haiit-language",t),document.documentElement.lang=t},[t]);const r=i=>{var a;return((a=fS[i])==null?void 0:a[t])??i};return o.jsx(xv.Provider,{value:{language:t,setLanguage:n,toggleLanguage:()=>n(t==="vi"?"en":"vi"),t:r,locale:t==="vi"?"vi-VN":"en-US"},children:e})},Le=()=>{const e=m.useContext(xv);if(!e)throw new Error("useLanguage must be used within LanguageProvider");return e},Xc=["none","parallax","tet","christmas"],vS=()=>{const{currentEffect:e,setCurrentEffect:t}=wv(),{language:n}=Le(),r=Xc.indexOf(e),i=Xc[(r+1)%Xc.length],a=n==="vi"?{none:"Tắt",parallax:"3D",tet:"Tết",christmas:"Giáng sinh"}:{none:"Off",parallax:"3D",tet:"Lunar New Year",christmas:"Christmas"},c={none:Xs,parallax:D0,tet:H0,christmas:c1}[e],l=`${a[e]} → ${a[i]}`;return o.jsxs(cv,{children:[o.jsx(lv,{asChild:!0,children:o.jsx(ne,{variant:"outline",size:"icon",className:`effect-cycle fixed bottom-4 right-4 z-[60] h-12 w-12 rounded-full shadow-xl backdrop-blur-xl ${e==="none"?"bg-background/85":"border-primary/50 bg-primary/15 text-primary"}`,"aria-label":l,onClick:()=>t(i),children:o.jsx(c,{className:"h-4 w-4"})})}),o.jsx(Bu,{side:"left",className:"font-mono text-xs uppercase tracking-[.12em]",children:l})]})},bS=()=>{const e=m.useRef(null),t=m.useRef([]),n=m.useRef();return m.useEffect(()=>{const r=e.current;if(!r)return;const i=r.getContext("2d");if(!i)return;let a=window.innerWidth,s=window.innerHeight,c=performance.now()+5e3+Math.random()*5e3,l=0;const h=()=>{const v=Math.min(190,Math.floor(a/6));t.current=Array.from({length:v},(x,b)=>{const k=Math.random();return{x:Math.random()*a,y:Math.random()*s,depth:k,size:.7+k*2.5,speed:.3+k*1.1,opacity:.12+k*.36,swing:Math.random()*Math.PI*2,swingSpeed:Math.random()*.018+.006,blur:(1-k)*1.8,rotation:Math.random()*Math.PI,rotationSpeed:(Math.random()-.5)*.012,crystal:b%17===0}})},u=()=>{const v=Math.min(window.devicePixelRatio||1,2);a=window.innerWidth,s=window.innerHeight,r.width=a*v,r.height=s*v,r.style.width=`${a}px`,r.style.height=`${s}px`,i.setTransform(v,0,0,v,0,0),h()},d=v=>{i.save(),i.translate(v.x,v.y),i.rotate(v.rotation),i.strokeStyle=`rgba(235, 249, 255, ${v.opacity*.72})`,i.lineWidth=.45;for(let x=0;x<6;x+=1)i.rotate(Math.PI/3),i.beginPath(),i.moveTo(0,0),i.lineTo(0,-v.size*2.4),i.moveTo(0,-v.size*1.3),i.lineTo(v.size*.65,-v.size*1.8),i.moveTo(0,-v.size*1.3),i.lineTo(-v.size*.65,-v.size*1.8),i.stroke();i.restore()};u(),window.addEventListener("resize",u);const p=v=>{if(i.clearRect(0,0,a,s),v>c){const x=v-c;l=x<3500?Math.sin(x/3500*Math.PI)*3.2:0,x>=3500&&(c=v+9e3+Math.random()*9e3)}t.current.forEach(x=>{x.y+=x.speed+l*.08,x.swing+=x.swingSpeed,x.rotation+=x.rotationSpeed,x.x+=Math.sin(x.swing)*(.18+x.depth*.35)+l*(.25+x.depth*.75),x.y>s+12&&(x.y=-12,x.x=Math.random()*a),x.x>a+15&&(x.x=-15),i.shadowBlur=x.blur*5,i.shadowColor="rgba(180, 225, 255, .55)",x.crystal?d(x):(i.beginPath(),i.ellipse(x.x,x.y,x.size*(1+l*.08),x.size,0,0,Math.PI*2),i.fillStyle=`rgba(240, 250, 255, ${x.opacity})`,i.fill()),i.shadowBlur=0}),n.current=requestAnimationFrame(p)};return n.current=requestAnimationFrame(p),()=>{window.removeEventListener("resize",u),n.current&&cancelAnimationFrame(n.current)}},[]),o.jsx("canvas",{ref:e,className:"absolute inset-0 pointer-events-none z-30 opacity-[.72]"})},wS=Array.from({length:18},(e,t)=>{const n=t/17,r=Math.sin(n*Math.PI)*2.5;return{x:`${4+n*92}%`,y:`${8+r}px`,delay:`${t*-.16}s`,hue:35+t*18}}),xS=Array.from({length:42}),kS=Array.from({length:9}),TS=Array.from({length:5}),CS=Array.from({length:18}),SS=Array.from({length:6}),Hp=Array.from({length:14}),Gp=({side:e})=>o.jsxs("div",{className:`christmas-sprig christmas-sprig-${e}`,children:[o.jsx("span",{className:"sprig-stem"}),kS.map((t,n)=>o.jsx("i",{style:{"--i":n}},n)),TS.map((t,n)=>o.jsx("b",{style:{"--i":n}},n))]}),PS=()=>o.jsxs("div",{className:"effect-scene effect-scene-christmas fixed inset-0 z-0 overflow-hidden",children:[o.jsx("div",{className:"christmas-frost"}),o.jsx("div",{className:"christmas-bokeh",children:CS.map((e,t)=>o.jsx("i",{style:{"--i":t}},t))}),o.jsx("div",{className:"nordic-stars",children:xS.map((e,t)=>o.jsx("i",{style:{"--i":t}},t))}),o.jsx("div",{className:"nordic-aurora nordic-aurora-a"}),o.jsx("div",{className:"nordic-aurora nordic-aurora-b"}),o.jsx("div",{className:"nordic-aurora nordic-aurora-c"}),o.jsx("div",{className:"christmas-snowflake-halo"}),o.jsx("div",{className:"christmas-hero-snowflake",children:SS.map((e,t)=>o.jsxs("i",{style:{"--i":t},children:[o.jsx("span",{}),o.jsx("b",{})]},t))}),o.jsx("div",{className:"christmas-wind christmas-wind-a",children:Hp.map((e,t)=>o.jsx("i",{style:{"--i":t}},t))}),o.jsx("div",{className:"christmas-wind christmas-wind-b",children:Hp.slice(0,9).map((e,t)=>o.jsx("i",{style:{"--i":t}},t))}),o.jsxs("div",{className:"christmas-top-garland",children:[o.jsx(Gp,{side:"left"}),o.jsx(Gp,{side:"right"}),o.jsx("div",{className:"garland-bauble garland-bauble-a",children:o.jsx("i",{})}),o.jsx("div",{className:"garland-bauble garland-bauble-b",children:o.jsx("i",{})}),o.jsx("div",{className:"garland-bauble garland-bauble-c",children:o.jsx("i",{})})]}),o.jsxs("div",{className:"christmas-wreath",children:[o.jsx("div",{className:"wreath-bow"}),o.jsx("i",{}),o.jsx("i",{}),o.jsx("i",{}),o.jsx("i",{}),o.jsx("i",{})]}),o.jsxs("div",{className:"christmas-corner-gift",children:[o.jsx("i",{}),o.jsx("span",{})]}),o.jsx("div",{className:"christmas-candy-cane"}),o.jsx("div",{className:"nordic-pines nordic-pines-back",children:Array.from({length:9},(e,t)=>o.jsx("i",{style:{"--i":t}},t))}),o.jsx("div",{className:"nordic-pines nordic-pines-front",children:Array.from({length:7},(e,t)=>o.jsx("i",{style:{"--i":t}},t))}),o.jsx("div",{className:"christmas-light-drift",children:wS.map(e=>o.jsx("i",{style:{left:e.x,top:e.y,"--bulb":`hsl(${e.hue} 88% 64%)`,animationDelay:e.delay}},e.x))}),o.jsx("div",{className:"winter-ground"}),o.jsx(bS,{}),o.jsx("div",{className:"effect-label left-5 top-24",children:"CHRISTMAS EVE / WINTER GLOW"})]}),AS=()=>{const e=m.useRef(null);return m.useEffect(()=>{const t=e.current,n=t==null?void 0:t.getContext("2d");if(!t||!n)return;let r=0,i=0,a=[],s=[];const c=()=>{t.width=window.innerWidth*devicePixelRatio,t.height=window.innerHeight*devicePixelRatio,t.style.width=`${window.innerWidth}px`,t.style.height=`${window.innerHeight}px`,n.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0),a=Array.from({length:Math.min(52,Math.floor(window.innerWidth/24))},(u,d)=>({x:d%2?Math.random()*window.innerWidth*.22:window.innerWidth*(.78+Math.random()*.22),y:Math.random()*window.innerHeight,size:Math.random()*5+2,speed:Math.random()*.6+.25,sway:Math.random()*8,rotation:Math.random()*Math.PI,rotationSpeed:(Math.random()-.5)*.025,opacity:Math.random()*.5+.3}))},l=()=>{const u=Math.random()>.5?window.innerWidth*.12:window.innerWidth*.88,d=window.innerHeight*(.1+Math.random()*.16),p=Math.random()>.5?"#ffd36a":"#ff7b69";s.push(...Array.from({length:28},(v,x)=>({x:u,y:d,angle:x/28*Math.PI*2,radius:0,speed:Math.random()*1.3+.7,alpha:.75,color:p})))},h=()=>{n.clearRect(0,0,window.innerWidth,window.innerHeight),i+=1,i%210===0&&l(),s=s.filter(u=>u.alpha>.01),s.forEach(u=>{u.radius+=u.speed,u.alpha*=.985;const d=u.x+Math.cos(u.angle)*u.radius,p=u.y+Math.sin(u.angle)*u.radius+u.radius*.08;n.beginPath(),n.arc(d,p,1.2,0,Math.PI*2),n.fillStyle=u.color,n.globalAlpha=u.alpha,n.fill()}),a.forEach(u=>{u.y+=u.speed,u.x+=Math.sin(u.y*.012+u.sway)*.38,u.rotation+=u.rotationSpeed,u.y>window.innerHeight+20&&(u.y=-20,u.x=Math.random()>.5?Math.random()*window.innerWidth*.22:window.innerWidth*(.78+Math.random()*.22)),n.save(),n.translate(u.x,u.y),n.rotate(u.rotation),n.globalAlpha=u.opacity;const d=n.createLinearGradient(0,-u.size,0,u.size);d.addColorStop(0,"#fff0a8"),d.addColorStop(.45,"#ffbf5a"),d.addColorStop(1,"#e85a55"),n.fillStyle=d,n.beginPath(),n.ellipse(0,0,u.size*.5,u.size,0,0,Math.PI*2),n.fill(),n.restore()}),n.globalAlpha=1,r=requestAnimationFrame(h)};return c(),l(),h(),window.addEventListener("resize",c),()=>{cancelAnimationFrame(r),window.removeEventListener("resize",c)}},[]),o.jsxs("div",{className:"effect-scene effect-scene-tet fixed inset-0 z-0 overflow-hidden",children:[o.jsx("div",{className:"tet-vietnam-frame"}),o.jsxs("div",{className:"tet-corner tet-corner-dao",children:[o.jsx("div",{className:"tet-border-branch",children:Array.from({length:13},(t,n)=>o.jsx("i",{style:{"--i":n}},n))}),o.jsxs("div",{className:"tet-viet-lantern",children:[o.jsx("span",{children:"An"}),o.jsx("i",{})]})]}),o.jsxs("div",{className:"tet-corner tet-corner-mai",children:[o.jsx("div",{className:"tet-border-branch",children:Array.from({length:13},(t,n)=>o.jsx("i",{style:{"--i":n}},n))}),o.jsxs("div",{className:"tet-viet-lantern",children:[o.jsx("span",{children:"Vui"}),o.jsx("i",{})]})]}),o.jsxs("div",{className:"tet-side-couplet tet-side-couplet-left",children:[o.jsx("i",{}),o.jsxs("span",{children:[o.jsx("em",{children:"Xuân"}),o.jsx("em",{children:"sang"}),o.jsx("em",{children:"phúc"}),o.jsx("em",{children:"lộc"}),o.jsx("em",{children:"tràn"}),o.jsx("em",{children:"muôn"}),o.jsx("em",{children:"ngả"})]}),o.jsx("b",{}),o.jsx("strong",{children:"An"})]}),o.jsxs("div",{className:"tet-side-couplet tet-side-couplet-right",children:[o.jsx("i",{}),o.jsxs("span",{children:[o.jsx("em",{children:"Tết"}),o.jsx("em",{children:"đến"}),o.jsx("em",{children:"an"}),o.jsx("em",{children:"khang"}),o.jsx("em",{children:"rạng"}),o.jsx("em",{children:"khắp"}),o.jsx("em",{children:"nhà"})]}),o.jsx("b",{}),o.jsx("strong",{children:"Xuân"})]}),o.jsxs("div",{className:"tet-bottom tet-bottom-left",children:[o.jsxs("div",{className:"tet-banh-chung",children:[o.jsx("i",{}),o.jsx("span",{}),o.jsx("b",{})]}),o.jsxs("div",{className:"tet-banh-tet",children:[o.jsx("i",{}),o.jsx("span",{}),o.jsx("b",{})]}),o.jsx("div",{className:"tet-watermelon",children:o.jsx("i",{})}),o.jsxs("div",{className:"tet-envelope",children:[o.jsx("i",{}),o.jsx("span",{children:"Lộc"}),o.jsx("b",{})]})]}),o.jsxs("div",{className:"tet-bottom tet-bottom-right",children:[o.jsx("div",{className:"tet-quat",children:Array.from({length:11},(t,n)=>o.jsx("i",{style:{"--i":n}},n))}),o.jsxs("div",{className:"tet-dongson",children:[o.jsx("i",{}),o.jsx("span",{}),o.jsx("b",{})]})]}),o.jsx("div",{className:"tet-top-knot tet-top-knot-a",children:o.jsx("i",{})}),o.jsx("div",{className:"tet-top-knot tet-top-knot-b",children:o.jsx("i",{})}),o.jsx("canvas",{ref:e,className:"absolute inset-0"}),o.jsx("div",{className:"effect-label left-5 top-24",children:"TẾT VIỆT / BÌNH AN"})]})},Co=[{base:556958,side:473183,top:6478056,accent:12124016,edge:14154751},{base:5982901,side:2169688,top:10849023,accent:7533823,edge:15196671},{base:11758372,side:5514511,top:15775819,accent:7467007,edge:16770989},{base:6004018,side:2181927,top:11069534,accent:14286722,edge:15597513}],Jc=(e,t)=>{const n=new bb(e*.48,e*.48),r=new jh({color:t,transparent:!0,opacity:.28,depthWrite:!1,side:wb}),i=new ma(n,r),a=new fa(new $o(n),new Ko({color:t,transparent:!0,opacity:.5}));return i.add(a),i},Zc=(e,t,n=!1)=>{const r=new Sg,i=new Ju(e,e,e),s=[t.side,t.side,t.top,t.side,t.base,t.side].map((d,p)=>new fb({color:d,metalness:.62,roughness:p===2?.14:.23,clearcoat:1,clearcoatRoughness:.12,emissive:new yb(p===2?t.accent:d).multiplyScalar(p===2?.14:.07),transparent:!0,opacity:.38,depthWrite:!1})),c=new ma(i,s),l=new fa(new $o(i),new Ko({color:t.edge,transparent:!0,opacity:.58})),h=new fa(new $o(new Ju(e*1.13,e*1.13,e*1.13)),new Ko({color:t.accent,transparent:!0,opacity:n?.3:.16})),u=new ma(new vb(e*(n?.24:.19),0),new jh({color:t.accent,transparent:!0,opacity:.48,depthWrite:!1}));if(u.name="cube-energy",h.name="cube-frame",r.add(c,l,h,u),n){const d=Jc(e,t.accent);d.position.z=e*.505;const p=Jc(e*.88,t.edge);p.position.y=e*.505,p.rotation.x=-Math.PI/2;const v=Jc(e*.78,t.top);v.position.x=e*.505,v.rotation.y=Math.PI/2,r.add(d,p,v)}return r},NS=()=>{const e=m.useRef(null);return m.useEffect(()=>{const t=e.current;if(!t)return;const n=new rb,r=new ib(42,1,.1,100);r.position.set(0,1.2,13);const i=new ab({alpha:!0,antialias:!0,powerPreference:"high-performance"});i.setPixelRatio(Math.min(window.devicePixelRatio,2)),i.setClearColor(0,0),i.outputColorSpace=ob,i.toneMapping=sb,i.toneMappingExposure=1.15,t.appendChild(i.domElement),n.add(new cb(10412031,.72));const a=new lb(12449791,4.2);a.position.set(4,6,8),n.add(a);const s=new Yu(12124016,32,20);s.position.set(-5,2,4),n.add(s);const c=new Yu(3723263,26,18);c.position.set(5,-3,2),n.add(c);const l=Zc(2.25,Co[0],!0);l.rotation.set(-.35,.65,.08),n.add(l);const h=Zc(.72,Co[3]);h.scale.setScalar(.82),l.add(h);const u=Array.from({length:11},(S,A)=>{const j=A%3,q=new Sg;q.rotation.set([.35,1.05,-.62][j],[-.22,.28,-.48][j],A*.71),n.add(q);const D=Zc([.38,.5,.32,.44][A%4],Co[A%Co.length]);return D.position.x=[3.5,4.35,5.15][j]+A%4*.08,D.rotation.set(A*.41,A*.63,A*.28),q.add(D),{pivot:q,cube:D,speed:[.34,-.24,.18][j],phase:A*.9}}),d=[{radius:3.35,tube:.012,color:6809849,rotation:[1.2,.12,.1]},{radius:4.5,tube:.009,color:10741301,rotation:[.82,.7,-.3]},{radius:5.55,tube:.007,color:5101567,rotation:[1.42,-.42,.5]}].map(({radius:S,tube:A,color:j,rotation:q})=>{const D=new ma(new hb(S,A,8,160),new jh({color:j,transparent:!0,opacity:.26}));return D.rotation.set(q[0],q[1],q[2]),n.add(D),D}),p=new ub(6.2,1),v=new fa(new $o(p),new Ko({color:5756904,transparent:!0,opacity:.055}));n.add(v);const x=190,b=new Float32Array(x*3);for(let S=0;S<x;S+=1){const A=7+Math.random()*11,j=Math.random()*Math.PI*2,q=Math.acos(2*Math.random()-1);b[S*3]=A*Math.sin(q)*Math.cos(j),b[S*3+1]=A*Math.cos(q),b[S*3+2]=A*Math.sin(q)*Math.sin(j)}const k=new db;k.setAttribute("position",new pb(b,3));const f=new Xu(k,new gb({color:12055551,size:.035,transparent:!0,opacity:.62}));n.add(f);const g=new xb;let y=0;const w=new mb,T=()=>{const{clientWidth:S,clientHeight:A}=t;i.setSize(S,A,!1),r.aspect=S/Math.max(A,1),r.updateProjectionMatrix()},C=S=>{g.x=S.clientX/window.innerWidth-.5,g.y=S.clientY/window.innerHeight-.5},P=()=>{const S=w.getElapsedTime();l.rotation.y=.65+S*.16,l.rotation.x=-.35+Math.sin(S*.45)*.1,l.getObjectByName("cube-frame").rotation.set(S*.18,-S*.24,S*.12),l.getObjectByName("cube-energy").rotation.set(S*.7,S*-.9,S*.45),h.rotation.x=S*-.8,h.rotation.y=S*.65,u.forEach(({pivot:A,cube:j,speed:q,phase:D})=>{A.rotation.z+=q*.008,j.rotation.x+=.006,j.rotation.y+=.009,j.position.y=Math.sin(S*.8+D)*.18,j.scale.setScalar(.88+Math.sin(S*.65+D)*.12),j.getObjectByName("cube-frame").rotation.y=S*-.5+D,j.getObjectByName("cube-energy").rotation.x=S*1.1+D}),d.forEach((A,j)=>{A.rotation.z+=(j%2?-1:1)*8e-4}),v.rotation.y=S*-.025,f.rotation.y=S*.006,r.position.x+=(g.x*1.2-r.position.x)*.025,r.position.y+=(-g.y*.8+1.2-r.position.y)*.025,r.lookAt(0,0,0),i.render(n,r),y=requestAnimationFrame(P)};return T(),P(),window.addEventListener("resize",T),window.addEventListener("pointermove",C,{passive:!0}),()=>{cancelAnimationFrame(y),window.removeEventListener("resize",T),window.removeEventListener("pointermove",C),n.traverse(S=>{(S instanceof ma||S instanceof fa||S instanceof Xu)&&(S.geometry.dispose(),(Array.isArray(S.material)?S.material:[S.material]).forEach(j=>j.dispose()))}),i.dispose(),t.removeChild(i.domElement)}},[]),o.jsx("div",{ref:e,className:"cyber-webgl absolute inset-0"})},IS=()=>{const e=m.useRef(null),t=m.useRef(null);return m.useEffect(()=>{const n=e.current,r=t.current,i=r==null?void 0:r.getContext("2d");if(!n||!r||!i)return;let a=0,s=[],c=[],l=window.innerWidth,h=window.innerHeight,u=0;const d=window.matchMedia("(prefers-reduced-motion: reduce)").matches,p={x:l/2,y:h/2,targetX:l/2,targetY:h/2,active:!1},v=()=>{const w=p.x/l-.5,T=p.y/h-.5;n.style.setProperty("--mx",`${w}`),n.style.setProperty("--my",`${T}`),n.style.setProperty("--back-shift",`${w*-14}px`),n.style.setProperty("--floor-shift",`${w*24}px`),n.style.setProperty("--hud-shift",`${T*22}px`),n.style.setProperty("--core-rx",`${-18+T*-18}deg`),n.style.setProperty("--core-ry",`${35+w*28}deg`),n.style.setProperty("--scene-x",`${w*20}px`),n.style.setProperty("--scene-y",`${T*14}px`),n.style.setProperty("--scene-rx",`${T*-5}deg`),n.style.setProperty("--scene-ry",`${w*7}deg`),n.style.setProperty("--far-x",`${w*34}px`),n.style.setProperty("--far-y",`${T*20}px`),n.style.setProperty("--near-x",`${w*-42}px`),n.style.setProperty("--near-y",`${T*-28}px`),n.style.setProperty("--panel-x",`${w*28}px`),n.style.setProperty("--panel-y",`${T*18}px`),n.style.setProperty("--panel-inverse-x",`${w*-32}px`),n.style.setProperty("--panel-inverse-y",`${T*-20}px`),n.style.setProperty("--px",`${p.x}px`),n.style.setProperty("--py",`${p.y}px`)},x=()=>{const w=Math.min(92,Math.max(42,Math.floor(l/18)));s=Array.from({length:w},()=>({x:Math.random()*l,y:Math.random()*h,vx:(Math.random()-.5)*.12,vy:(Math.random()-.5)*.12,size:Math.random()*1.35+.45,depth:Math.random()*.75+.25,phase:Math.random()*Math.PI*2}))},b=()=>{l=window.innerWidth,h=window.innerHeight;const w=Math.min(window.devicePixelRatio||1,2);r.width=l*w,r.height=h*w,r.style.width=`${l}px`,r.style.height=`${h}px`,i.setTransform(w,0,0,w,0,0),p.x=p.targetX=l/2,p.y=p.targetY=h/2,x(),v()},k=w=>{p.targetX=w.clientX,p.targetY=w.clientY,p.active=!0},f=()=>{p.targetX=l/2,p.targetY=h/2,p.active=!1},g=w=>{c.push({x:w.clientX,y:w.clientY,radius:12,alpha:.38}),c.length>4&&c.shift()},y=()=>{u+=1,p.x+=(p.targetX-p.x)*(d?1:.075),p.y+=(p.targetY-p.y)*(d?1:.075),v(),i.clearRect(0,0,l,h),i.lineWidth=.7,c=c.filter(w=>w.alpha>.012),c.forEach(w=>{w.radius+=1.8,w.alpha*=.975,i.beginPath(),i.arc(w.x,w.y,w.radius,0,Math.PI*2),i.strokeStyle=`rgba(145, 238, 255, ${w.alpha})`,i.stroke()}),s.forEach((w,T)=>{const C=w.x-p.x,P=w.y-p.y,S=Math.max(1,Math.hypot(C,P));if(p.active&&S<175){const j=(1-S/175)*.018*w.depth;w.vx+=C/S*j,w.vy+=P/S*j}w.vx*=.992,w.vy*=.992,d||(w.x+=w.vx+Math.sin(u*.006+w.phase)*.035*w.depth,w.y+=w.vy+Math.cos(u*.005+w.phase)*.025*w.depth),w.x<-10&&(w.x=l+10),w.x>l+10&&(w.x=-10),w.y<-10&&(w.y=h+10),w.y>h+10&&(w.y=-10);const A=.2+w.depth*.32;i.beginPath(),i.arc(w.x,w.y,w.size*w.depth,0,Math.PI*2),i.fillStyle=`rgba(135, 228, 242, ${A})`,i.fill();for(let j=T+1;j<s.length;j+=1){const q=s[j],D=Math.hypot(w.x-q.x,w.y-q.y);D<112&&(i.beginPath(),i.moveTo(w.x,w.y),i.lineTo(q.x,q.y),i.strokeStyle=`rgba(115, 220, 238, ${.07*(1-D/112)*w.depth})`,i.stroke())}S<220&&(i.beginPath(),i.moveTo(w.x,w.y),i.lineTo(p.x,p.y),i.strokeStyle=`rgba(185, 236, 150, ${.16*(1-S/220)*w.depth})`,i.stroke())}),i.beginPath(),i.arc(p.x,p.y,30,0,Math.PI*2),i.strokeStyle="rgba(150, 235, 245, .1)",i.stroke(),a=requestAnimationFrame(y)};return b(),y(),window.addEventListener("resize",b),window.addEventListener("pointermove",k,{passive:!0}),window.addEventListener("pointerleave",f),window.addEventListener("pointerdown",g,{passive:!0}),()=>{cancelAnimationFrame(a),window.removeEventListener("resize",b),window.removeEventListener("pointermove",k),window.removeEventListener("pointerleave",f),window.removeEventListener("pointerdown",g)}},[]),o.jsxs("div",{ref:e,className:"effect-scene effect-scene-3d fixed inset-0 z-0 overflow-hidden",children:[o.jsx("canvas",{ref:t,className:"cyber-network absolute inset-0"}),o.jsx("div",{className:"cyber-atmosphere cyber-atmosphere-a"}),o.jsx("div",{className:"cyber-atmosphere cyber-atmosphere-b"}),o.jsx("div",{className:"cyber-aurora cyber-aurora-a"}),o.jsx("div",{className:"cyber-aurora cyber-aurora-b"}),o.jsx("div",{className:"cyber-depth-lines"}),o.jsxs("div",{className:"cyber-signal-field",children:[o.jsx("i",{}),o.jsx("i",{}),o.jsx("i",{}),o.jsx("i",{}),o.jsx("i",{}),o.jsx("i",{}),o.jsx("i",{}),o.jsx("i",{})]}),o.jsx("div",{className:"cyber-spotlight"}),o.jsx("div",{className:"cyber-grid cyber-grid-back"}),o.jsx("div",{className:"cyber-grid cyber-grid-floor"}),o.jsx(NS,{}),o.jsxs("div",{className:"cyber-observatory",children:[o.jsxs("div",{className:"cyber-axis",children:[o.jsx("i",{}),o.jsx("i",{}),o.jsx("i",{})]}),o.jsxs("div",{className:"cyber-beacons",children:[o.jsx("i",{}),o.jsx("i",{}),o.jsx("i",{}),o.jsx("i",{}),o.jsx("i",{}),o.jsx("i",{})]}),o.jsxs("div",{className:"cyber-core-plinth",children:[o.jsx("i",{}),o.jsx("i",{}),o.jsx("i",{})]})]}),o.jsxs("div",{className:"cyber-glass cyber-glass-a",children:[o.jsx("span",{children:"VECTOR"}),o.jsx("b",{children:"12.08"}),o.jsx("i",{})]}),o.jsxs("div",{className:"cyber-glass cyber-glass-b",children:[o.jsx("span",{children:"ORBIT"}),o.jsx("b",{children:"STABLE"}),o.jsx("i",{})]}),o.jsxs("div",{className:"cyber-hud cyber-hud-left",children:[o.jsx("span",{children:"SYS / DEPTH"}),o.jsx("b",{children:"03.24"}),o.jsx("i",{})]}),o.jsxs("div",{className:"cyber-hud cyber-hud-right",children:[o.jsx("span",{children:"FIELD / LIVE"}),o.jsx("b",{children:"97.4%"}),o.jsx("i",{})]}),o.jsx("div",{className:"cyber-cursor-halo"}),o.jsx("div",{className:"cyber-vignette"}),o.jsx("div",{className:"cyber-scanlines"}),o.jsx("div",{className:"effect-label left-5 top-24",children:"CYBER OBSERVATORY / INTERACTIVE"})]})},jS=()=>{const{currentEffect:e}=wv();switch(e){case"christmas":return o.jsx(PS,{});case"tet":return o.jsx(AS,{});case"parallax":return o.jsx(IS,{});default:return null}};var Is=["light","dark"],Hu="(prefers-color-scheme: dark)",ES=typeof window>"u",Gu=m.createContext(void 0),RS={setTheme:e=>{},themes:[]},kv=()=>{var e;return(e=m.useContext(Gu))!=null?e:RS},LS=e=>m.useContext(Gu)?e.children:m.createElement(MS,{...e}),DS=["light","dark"],MS=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:n=!0,enableColorScheme:r=!0,storageKey:i="theme",themes:a=DS,defaultTheme:s=n?"system":"light",attribute:c="data-theme",value:l,children:h,nonce:u})=>{let[d,p]=m.useState(()=>Wp(i,s)),[v,x]=m.useState(()=>Wp(i)),b=l?Object.values(l):a,k=m.useCallback(w=>{let T=w;if(!T)return;w==="system"&&n&&(T=$p());let C=l?l[T]:T,P=t?OS():null,S=document.documentElement;if(c==="class"?(S.classList.remove(...b),C&&S.classList.add(C)):C?S.setAttribute(c,C):S.removeAttribute(c),r){let A=Is.includes(s)?s:null,j=Is.includes(T)?T:A;S.style.colorScheme=j}P==null||P()},[]),f=m.useCallback(w=>{let T=typeof w=="function"?w(w):w;p(T);try{localStorage.setItem(i,T)}catch{}},[e]),g=m.useCallback(w=>{let T=$p(w);x(T),d==="system"&&n&&!e&&k("system")},[d,e]);m.useEffect(()=>{let w=window.matchMedia(Hu);return w.addListener(g),g(w),()=>w.removeListener(g)},[g]),m.useEffect(()=>{let w=T=>{if(T.key!==i)return;let C=T.newValue||s;f(C)};return window.addEventListener("storage",w),()=>window.removeEventListener("storage",w)},[f]),m.useEffect(()=>{k(e??d)},[e,d]);let y=m.useMemo(()=>({theme:d,setTheme:f,forcedTheme:e,resolvedTheme:d==="system"?v:d,themes:n?[...a,"system"]:a,systemTheme:n?v:void 0}),[d,f,e,v,n,a]);return m.createElement(Gu.Provider,{value:y},m.createElement(qS,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:n,enableColorScheme:r,storageKey:i,themes:a,defaultTheme:s,attribute:c,value:l,children:h,attrs:b,nonce:u}),h)},qS=m.memo(({forcedTheme:e,storageKey:t,attribute:n,enableSystem:r,enableColorScheme:i,defaultTheme:a,value:s,attrs:c,nonce:l})=>{let h=a==="system",u=n==="class"?`var d=document.documentElement,c=d.classList;${`c.remove(${c.map(x=>`'${x}'`).join(",")})`};`:`var d=document.documentElement,n='${n}',s='setAttribute';`,d=i?Is.includes(a)&&a?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${a}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",p=(x,b=!1,k=!0)=>{let f=s?s[x]:x,g=b?x+"|| ''":`'${f}'`,y="";return i&&k&&!b&&Is.includes(x)&&(y+=`d.style.colorScheme = '${x}';`),n==="class"?b||f?y+=`c.add(${g})`:y+="null":f&&(y+=`d[s](n,${g})`),y},v=e?`!function(){${u}${p(e)}}()`:r?`!function(){try{${u}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${h})){var t='${Hu}',m=window.matchMedia(t);if(m.media!==t||m.matches){${p("dark")}}else{${p("light")}}}else if(e){${s?`var x=${JSON.stringify(s)};`:""}${p(s?"x[e]":"e",!0)}}${h?"":"else{"+p(a,!1,!1)+"}"}${d}}catch(e){}}()`:`!function(){try{${u}var e=localStorage.getItem('${t}');if(e){${s?`var x=${JSON.stringify(s)};`:""}${p(s?"x[e]":"e",!0)}}else{${p(a,!1,!1)};}${d}}catch(t){}}();`;return m.createElement("script",{nonce:l,dangerouslySetInnerHTML:{__html:v}})}),Wp=(e,t)=>{if(ES)return;let n;try{n=localStorage.getItem(e)||void 0}catch{}return n||t},OS=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},$p=e=>(e||(e=window.matchMedia(Hu)),e.matches?"dark":"light");const US=()=>{const{resolvedTheme:e}=kv();return m.useEffect(()=>{const t=document.querySelector('meta[name="theme-color"]');t==null||t.setAttribute("content",e==="dark"?"#090c11":"#f7f4eb")},[e]),null},So=[{value:"system",label:"Hệ thống",icon:X0},{value:"dark",label:"Tối",icon:t1},{value:"light",label:"Sáng",icon:h1}],Kp=()=>{const{language:e}=Le(),{theme:t="system",setTheme:n}=kv(),r=So.findIndex(h=>h.value===t),i=r===-1?0:r,a=So[i],s=So[(i+1)%So.length],c=a.icon,l=e==="vi"?{system:"Hệ thống",dark:"Tối",light:"Sáng"}:{system:"System",dark:"Dark",light:"Light"};return o.jsx(ne,{variant:"outline",size:"icon",className:"border-border/80 bg-background/50","aria-label":`${l[a.value]} → ${l[s.value]}`,title:`${l[a.value]} → ${l[s.value]}`,onClick:()=>n(s.value),children:o.jsx(c,{className:"h-4 w-4"})})},Qp=()=>{const{language:e,toggleLanguage:t}=Le(),n=e==="vi"?"English":"Tiếng Việt";return o.jsxs(ne,{variant:"outline",size:"sm",className:"h-10 gap-2 border-border/80 bg-background/50 px-3 font-mono text-xs font-semibold tracking-[.1em]","aria-label":`Switch to ${n}`,title:`Switch to ${n}`,onClick:t,children:[o.jsx(Y0,{className:"h-3.5 w-3.5"}),e.toUpperCase()]})},_S=()=>{const{t:e}=Le(),t=Ut(),[n,r]=m.useState(!1),i=[{path:"/",label:e("nav.home"),index:"00"},{path:"/projects",label:e("nav.projects"),index:"01"},{path:"/blog",label:e("nav.blog"),index:"02"},{path:"/about",label:e("nav.about"),index:"03"},{path:"/contact",label:e("nav.contact"),index:"04"}],a=s=>s==="/"?t.pathname==="/":t.pathname.startsWith(s);return m.useEffect(()=>{r(!1)},[t.pathname]),o.jsx("header",{className:"fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl",children:o.jsxs("div",{className:"container mx-auto px-4",children:[o.jsxs("nav",{className:"flex h-[72px] items-center justify-between",children:[o.jsxs(fe,{to:"/",className:"group flex items-center gap-3",children:[o.jsx("span",{className:"brand-logo flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-primary/35 bg-primary/[.07] p-1 shadow-sm transition-all duration-300 group-hover:border-primary/70 group-hover:bg-primary/10",children:o.jsx("img",{src:"/logo-rm-khongvien.png",alt:"",className:"h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"})}),o.jsxs("span",{children:[o.jsx("span",{className:"block font-mono text-sm font-semibold leading-none",children:"HAI IT"}),o.jsx("span",{className:"mt-1 block font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground",children:"systems journal"})]})]}),o.jsx("ul",{className:"hidden items-center gap-1 md:flex",children:i.map(s=>o.jsx("li",{children:o.jsxs(fe,{to:s.path,className:`flex items-baseline gap-2 rounded-md px-3 py-2 font-mono text-xs transition-colors ${a(s.path)?"bg-primary/10 text-primary":"text-muted-foreground hover:bg-muted hover:text-foreground"}`,children:[o.jsx("span",{className:"text-[11px] opacity-65",children:s.index}),s.label]})},s.path))}),o.jsxs("div",{className:"hidden items-center gap-2 md:flex",children:[o.jsx(Qp,{}),o.jsx(Kp,{}),o.jsx(ne,{asChild:!0,variant:"outline",size:"sm",className:"border-primary/30 font-mono text-xs",children:o.jsxs(fe,{to:"/contact",children:[e("nav.connect")," ",o.jsx(kt,{className:"ml-2 h-3.5 w-3.5"})]})})]}),o.jsx(ne,{variant:"ghost",size:"icon",className:"md:hidden","aria-label":"Mở menu",onClick:()=>r(!n),children:n?o.jsx(Ts,{className:"h-5 w-5"}):o.jsx(Z0,{className:"h-5 w-5"})})]}),n&&o.jsxs("div",{className:"border-t border-border/60 py-4 md:hidden",children:[i.map(s=>o.jsxs(fe,{to:s.path,onClick:()=>r(!1),className:`flex items-center justify-between rounded-lg px-4 py-3 font-mono text-sm ${a(s.path)?"bg-primary/10 text-primary":"text-muted-foreground"}`,children:[s.label,o.jsxs("span",{className:"text-xs opacity-65",children:["/",s.index]})]},s.path)),o.jsxs("div",{className:"mt-3 flex items-center justify-between gap-3 border-t border-border/60 px-4 pt-4",children:[o.jsxs("span",{className:"font-mono text-xs uppercase tracking-[.14em] text-muted-foreground",children:[e("nav.language")," / ",e("nav.theme")]}),o.jsxs("div",{className:"flex gap-2",children:[o.jsx(Qp,{}),o.jsx(Kp,{})]})]})]})]})})},sc=[{id:"languages",name:"Programming Languages",description:"Deep dives into various programming languages, syntax, paradigms, and best use cases",icon:"Code2",color:"category-languages"},{id:"frameworks",name:"Frameworks & Libraries",description:"Comprehensive guides on modern frameworks and libraries for web, mobile, and backend development",icon:"Layers",color:"category-frameworks"},{id:"architecture",name:"Software Architecture",description:"System design principles, architectural patterns, and scalability strategies",icon:"Building2",color:"category-architecture"},{id:"patterns",name:"Design Patterns",description:"Classic and modern design patterns with practical implementations",icon:"Shapes",color:"category-patterns"},{id:"practices",name:"Best Practices",description:"Coding standards, clean code principles, and industry best practices",icon:"CheckCircle",color:"category-practices"},{id:"roadmap",name:"Learning Roadmaps",description:"Structured learning paths for different programming domains and skill levels",icon:"Map",color:"category-roadmap"}],Ch=[{id:"capital-weather-tracker",title:"Capital Weather Tracker",description:"Hệ thống xử lý dữ liệu thời tiết thời gian thực cho các thủ đô trên thế giới.",longDescription:"Ứng dụng thu thập và hiển thị dữ liệu thời tiết real-time từ OpenWeatherMap API, xử lý và visualize dữ liệu cho tất cả các thủ đô trên thế giới với cập nhật liên tục.",technologies:["Python","OpenWeatherMap API","Data Processing"],github:"https://github.com/haihttt974/capital-weather-tracker",image:"/placeholder.svg",featured:!0},{id:"sorting-visualizer",title:"Sorting Visualizer",description:"Ứng dụng trực quan hóa các thuật toán sắp xếp với animation mượt mà.",longDescription:"Công cụ giáo dục giúp hiểu rõ cách hoạt động của các thuật toán sắp xếp như Bubble Sort, Quick Sort, Merge Sort thông qua visualization trực quan.",technologies:["TypeScript","Algorithms","Visualization"],github:"https://github.com/haihttt974/sorting-visualizer",image:"/placeholder.svg",featured:!0},{id:"bookstore-aspnet",title:"BookStore ASP.NET",description:"Website quản lý hiệu sách hoàn chỉnh với ASP.NET Core.",longDescription:"Hệ thống quản lý hiệu sách full-stack với chức năng CRUD, quản lý kho, đơn hàng và báo cáo doanh thu. Xây dựng trên ASP.NET Core và SQL Server.",technologies:["C#","ASP.NET Core","SQL Server","Entity Framework"],github:"https://github.com/haihttt974/thltweb-BookStore-asp.net",image:"/placeholder.svg",featured:!0},{id:"gplx-mobile-app",title:"Ôn thi GPLX Mobile",description:"Ứng dụng di động ôn thi giấy phép lái xe với Flutter.",longDescription:"Ứng dụng mobile cross-platform giúp người dùng ôn luyện lý thuyết thi bằng lái xe với bộ câu hỏi đầy đủ, thi thử và theo dõi tiến độ học tập.",technologies:["Dart","Flutter","Mobile Development"],github:"https://github.com/haihttt974/ltmobile_gplx",image:"/placeholder.svg"},{id:"temperature-influxdb",title:"Temperature VN InfluxDB",description:"Hệ thống thu thập và lưu trữ dữ liệu nhiệt độ vào InfluxDB.",longDescription:"Pipeline dữ liệu IoT thu thập nhiệt độ từ các nguồn khác nhau tại Việt Nam, lưu trữ vào InfluxDB cho phân tích time-series và visualization.",technologies:["Python","InfluxDB","IoT","Time Series"],github:"https://github.com/haihttt974/send-temperature-vn-influxdb",image:"/placeholder.svg"},{id:"christmas-tree",title:"Christmas Tree Effect",description:"Hiệu ứng cây thông Noel tương tác với HTML/CSS/JS.",longDescription:"Trang web hiệu ứng Giáng Sinh với cây thông 3D tương tác, tuyết rơi và ánh sáng lung linh. Hoàn toàn viết bằng vanilla HTML, CSS và JavaScript.",technologies:["HTML5","CSS3","JavaScript","Animation"],github:"https://github.com/haihttt974/christmas_tree.github.io",demo:"https://haihttt974.github.io/christmas_tree.github.io/",image:"/placeholder.svg"},{id:"countdown-newyear",title:"Countdown New Year",description:"Đồng hồ đếm ngược năm mới với hiệu ứng đẹp mắt.",longDescription:"Trang countdown đón năm mới với thiết kế hiện đại, hiệu ứng confetti và animation mượt mà khi đồng hồ điểm 0.",technologies:["HTML5","CSS3","JavaScript"],github:"https://github.com/haihttt974/CountdownNewYear.github.io",demo:"https://haihttt974.github.io/CountdownNewYear.github.io/",image:"/placeholder.svg"},{id:"firework-effect",title:"Firework Effect",description:"Hiệu ứng pháo hoa sống động cho các dịp lễ hội.",longDescription:"Mô phỏng pháo hoa với hiệu ứng particle system, màu sắc rực rỡ và âm thanh. Phù hợp cho các trang countdown và lễ hội.",technologies:["HTML5","Canvas","JavaScript","Animation"],github:"https://github.com/haihttt974/Hfirework.github.io",demo:"https://haihttt974.github.io/Hfirework.github.io/",image:"/placeholder.svg"}],ue={name:"Lê Duy Hải",nickname:"Hai IT",username:"haihttt974",title:"Information Systems Developer",subtitle:"Database • Server-side • DevOps",avatar:"https://avatars.githubusercontent.com/u/202379592?v=4",address:"Đông Hưng Thuận, Ho Chi Minh City",bio:`Tôi là một chuyên gia về Hệ thống thông tin (Information Systems), tập trung vào việc xây dựng các giải pháp có khả năng mở rộng (Scalable) và tin cậy (Reliable).

Chuyên môn của tôi bao gồm: Cơ sở dữ liệu, Server-side Development và DevOps. Tôi đam mê việc tối ưu hóa hiệu suất hệ thống và xây dựng các kiến trúc phần mềm bền vững.

Ngoài lập trình, tôi còn là gia sư Toán, chia sẻ kiến thức và giúp đỡ học sinh phát triển tư duy logic.`,skills:[{category:"Ngôn ngữ lập trình",items:["C","C++","C#","Java","PHP","Python","JavaScript","TypeScript","Dart"]},{category:"Backend & Database",items:[".NET Core","ASP.NET","MySQL","SQL Server","MariaDB","InfluxDB"]},{category:"DevOps & Tools",items:["Docker","Git","GitHub","GitLab","Google Cloud","Fly.io","Postman","Swagger"]},{category:"Frontend & Design",items:["HTML5","CSS3","Bootstrap","jQuery","Figma","Canva"]},{category:"Data Science / AI",items:["TensorFlow","Keras","NumPy","Pandas","scikit-learn","SciPy"]}],social:{github:"https://github.com/haihttt974",linkedin:"https://www.linkedin.com/in/haild/",facebook:"https://facebook.com/haiit.974",instagram:"https://instagram.com/haiit.974",tiktok:"https://tiktok.com/@haiit.974",twitter:"https://x.com/haiit974",email:"ld.hai.insys@gmail.com",secondaryEmail:"leduyhai090704@gmail.com"},socialLinks:[{name:"GitHub",url:"https://github.com/haihttt974",icon:"Github"},{name:"LinkedIn",url:"https://www.linkedin.com/in/haild/",icon:"Linkedin"},{name:"Facebook",url:"https://facebook.com/haiit.974",icon:"Facebook"},{name:"Instagram",url:"https://instagram.com/haiit.974",icon:"Instagram"},{name:"TikTok",url:"https://tiktok.com/@haiit.974",icon:"Music2"},{name:"X (Twitter)",url:"https://x.com/haiit974",icon:"Twitter"},{name:"Primary Email",url:"mailto:ld.hai.insys@gmail.com",icon:"Mail"},{name:"Secondary Email",url:"mailto:leduyhai090704@gmail.com",icon:"Mail"}],experience:[{title:"Information Systems Developer",company:"Freelance & Personal Projects",period:"2023 - Hiện tại",description:"Phát triển các ứng dụng web, mobile và hệ thống xử lý dữ liệu. Chuyên sâu về Database, Server-side và DevOps."},{title:"Math Tutor",company:"Private Tutoring",period:"2022 - Hiện tại",description:"Gia sư Toán học, giúp học sinh phát triển tư duy logic và giải quyết vấn đề."}]},FS=()=>{const{t:e}=Le();return o.jsx("footer",{className:"border-t border-border/70 bg-card/35",children:o.jsxs("div",{className:"container mx-auto px-4 py-12",children:[o.jsxs("div",{className:"grid gap-10 md:grid-cols-[1.4fr_.6fr_.6fr]",children:[o.jsxs("div",{children:[o.jsx("p",{className:"eyebrow mb-4",children:e("footer.eyebrow")}),o.jsx("h2",{className:"max-w-xl text-2xl font-semibold md:text-3xl",children:e("footer.title")})]}),o.jsxs("div",{className:"font-mono text-xs",children:[o.jsx("p",{className:"mb-4 uppercase tracking-[.18em] text-muted-foreground",children:e("footer.navigate")}),o.jsxs("div",{className:"space-y-3",children:[o.jsx(fe,{className:"block hover:text-primary",to:"/projects",children:e("footer.work")}),o.jsx(fe,{className:"block hover:text-primary",to:"/blog",children:e("footer.notes")}),o.jsx(fe,{className:"block hover:text-primary",to:"/about",children:e("footer.profile")}),o.jsx(fe,{className:"block hover:text-primary",to:"/contact",children:e("footer.contact")})]})]}),o.jsxs("div",{className:"font-mono text-xs",children:[o.jsx("p",{className:"mb-4 uppercase tracking-[.18em] text-muted-foreground",children:e("footer.connect")}),o.jsxs("div",{className:"space-y-3",children:[o.jsxs("a",{className:"flex items-center gap-2 hover:text-primary",href:ue.social.github,target:"_blank",rel:"noreferrer",children:[o.jsx(Cr,{className:"h-3.5 w-3.5"}),"GitHub"]}),o.jsxs("a",{className:"flex items-center gap-2 hover:text-primary",href:ue.social.linkedin,target:"_blank",rel:"noreferrer",children:[o.jsx(fy,{className:"h-3.5 w-3.5"}),"LinkedIn"]}),o.jsxs(fe,{className:"flex items-center gap-2 hover:text-primary",to:"/contact",children:[o.jsx(Ai,{className:"h-3.5 w-3.5"}),e("footer.feedback")," ",o.jsx(kt,{className:"h-3 w-3"})]}),o.jsxs("a",{className:"flex items-center gap-2 hover:text-primary",href:`mailto:${ue.social.email}`,children:[o.jsx(Ai,{className:"h-3.5 w-3.5"}),"Email ",o.jsx(kt,{className:"h-3 w-3"})]})]})]})]}),o.jsxs("div",{className:"mt-12 flex flex-col gap-2 border-t border-border/70 pt-6 font-mono text-xs uppercase tracking-[.14em] text-muted-foreground sm:flex-row sm:justify-between",children:[o.jsxs("span",{children:["© ",new Date().getFullYear()," Lê Duy Hải / Hai IT"]}),o.jsx("span",{children:e("footer.designed")})]})]})})},Yn=({children:e})=>{const{pathname:t,search:n}=Ut();return m.useEffect(()=>{t==="/blog"&&window.sessionStorage.getItem(`blog-scroll:${t}${n}`)||window.scrollTo({top:0,behavior:"instant"})},[t,n]),o.jsxs("div",{className:"relative flex min-h-screen flex-col overflow-hidden",children:[o.jsx("div",{className:"page-grid pointer-events-none fixed inset-0 z-[-1]"}),o.jsx(_S,{}),o.jsx("main",{className:"flex-1 pt-[72px]",children:e}),o.jsx(FS,{})]})},BS=()=>{const{t:e,language:t}=Le(),n=m.useRef(null),r=t==="vi"?["Hệ thống backend","Dữ liệu & database","Thực hành DevOps"]:["Backend systems","Data & database","DevOps practice"];return m.useEffect(()=>{const i=n.current;if(!i||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const a=c=>{const l=i.getBoundingClientRect(),h=(c.clientX-l.left)/l.width-.5,u=(c.clientY-l.top)/l.height-.5;i.style.setProperty("--portrait-x",`${h*10}px`),i.style.setProperty("--portrait-y",`${u*10}px`),i.style.setProperty("--spot-x",`${(h+.5)*100}%`),i.style.setProperty("--spot-y",`${(u+.5)*100}%`)},s=()=>{i.style.setProperty("--portrait-x","0px"),i.style.setProperty("--portrait-y","0px"),i.style.setProperty("--spot-x","50%"),i.style.setProperty("--spot-y","50%")};return i.addEventListener("pointermove",a),i.addEventListener("pointerleave",s),()=>{i.removeEventListener("pointermove",a),i.removeEventListener("pointerleave",s)}},[]),o.jsxs("section",{className:"relative overflow-hidden border-b border-border/70",children:[o.jsx("div",{className:"hero-orbit pointer-events-none absolute right-[4%] top-[12%] h-72 w-72 rounded-full border border-primary/15"}),o.jsx("div",{className:"absolute -right-24 top-10 h-[34rem] w-[34rem] rounded-full bg-primary/[.07] blur-[120px]"}),o.jsxs("div",{className:"container relative mx-auto px-4 py-6 md:py-8",children:[o.jsxs("div",{className:"mb-8 flex items-center justify-between border-y border-border/70 py-3 font-mono text-xs uppercase tracking-[.16em] text-muted-foreground",children:[o.jsx("span",{children:e("hero.log")}),o.jsx("span",{className:"hidden sm:block",children:"Vietnam · GMT+7"}),o.jsxs("span",{className:"flex items-center gap-2 text-primary",children:[o.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-primary"}),e("hero.open")]})]}),o.jsxs("div",{className:"grid items-stretch gap-7 lg:grid-cols-[1.25fr_.75fr]",children:[o.jsxs("div",{className:"flex flex-col justify-between py-2 lg:py-5",children:[o.jsxs("div",{children:[o.jsxs("p",{className:"eyebrow mb-6 animate-fade-in",children:[e("hero.hello")," ",ue.nickname]}),o.jsxs("h1",{className:"max-w-4xl text-[clamp(3.15rem,6.8vw,6.8rem)] font-semibold leading-[.98] tracking-[-.075em] animate-slide-up",children:[o.jsx("span",{className:"block whitespace-nowrap",children:e("hero.line1")}),o.jsx("span",{className:"block text-muted-foreground",children:e("hero.line2")}),o.jsx("span",{className:"text-gradient",children:e("hero.line3")})]}),o.jsxs("div",{className:"mt-7 grid max-w-2xl gap-5 border-l border-primary/40 pl-5 sm:grid-cols-[1fr_auto] sm:items-end",children:[o.jsxs("p",{className:"text-base leading-relaxed text-muted-foreground md:text-lg",children:[t==="vi"?"Tôi là":"I am"," ",o.jsx("strong",{className:"font-medium text-foreground",children:ue.name}),", ",e("hero.bio")]}),o.jsx(my,{className:"hidden h-10 w-10 text-primary sm:block"})]})]}),o.jsxs("div",{children:[o.jsxs("div",{className:"mt-7 flex flex-wrap gap-3",children:[o.jsx(ne,{asChild:!0,size:"lg",className:"font-mono text-xs",children:o.jsxs(fe,{to:"/projects",children:[e("hero.work")," ",o.jsx(kt,{className:"ml-2 h-4 w-4"})]})}),o.jsx(ne,{asChild:!0,size:"lg",variant:"outline",className:"font-mono text-xs",children:o.jsxs(fe,{to:"/blog",children:[o.jsx(L0,{className:"mr-2 h-4 w-4"}),e("hero.notes")]})})]}),o.jsx("div",{className:"mt-7 grid border-y border-border/70 sm:grid-cols-3",children:[["08+",e("hero.repositories")],["09+",e("hero.languages")],["33",e("hero.journal")]].map(([i,a],s)=>o.jsxs("div",{className:`py-4 ${s>0?"border-t border-border/70 sm:border-l sm:border-t-0 sm:pl-5":""}`,children:[o.jsx("span",{className:"font-mono text-xl font-semibold text-primary",children:i}),o.jsx("span",{className:"ml-2 font-mono text-[11px] uppercase tracking-wider text-muted-foreground",children:a})]},a))})]})]}),o.jsxs("aside",{ref:n,className:"portrait-stage journal-card group mx-auto aspect-[4/5] w-full max-w-[440px] animate-slide-up lg:self-center",style:{animationDelay:".12s"},children:[o.jsx("div",{className:"portrait-index absolute -left-4 top-12 z-20 hidden rounded-md border border-primary/30 bg-background/90 px-3 py-2 font-mono text-[11px] uppercase tracking-[.16em] text-primary backdrop-blur md:block",children:"ID / LDH-974"}),o.jsx("div",{className:"portrait-crosshair pointer-events-none absolute left-1/2 top-1/2 z-20 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"}),o.jsx("img",{src:ue.avatar,alt:`Chân dung ${ue.name}`,className:"portrait-image absolute inset-0 h-full w-full object-cover object-center"}),o.jsx("div",{className:"portrait-light pointer-events-none absolute inset-0 z-10"}),o.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent"}),o.jsxs("div",{className:"absolute inset-x-0 top-0 flex items-center justify-between p-5 font-mono text-[11px] uppercase tracking-[.16em] text-foreground drop-shadow-md",children:[o.jsxs("span",{children:[e("hero.portrait")," / 001"]}),o.jsx("span",{className:"rounded-full border border-white/25 bg-black/25 px-3 py-1.5 backdrop-blur-md",children:"Hai IT"})]}),o.jsxs("div",{className:"absolute inset-x-0 bottom-0 p-5 md:p-7",children:[o.jsx("div",{className:"mb-5 flex flex-wrap gap-2",children:r.map(i=>o.jsx("span",{className:"rounded-full border border-white/20 bg-background/65 px-3 py-1.5 font-mono text-[11px] font-medium uppercase tracking-wider text-foreground backdrop-blur-md",children:i},i))}),o.jsxs("div",{className:"border-t border-white/20 pt-5",children:[o.jsx("p",{className:"text-3xl font-semibold md:text-4xl",children:ue.name}),o.jsxs("div",{className:"mt-3 flex flex-wrap items-center justify-between gap-3 font-mono text-xs uppercase tracking-wider text-foreground/80",children:[o.jsx("span",{children:ue.title}),o.jsxs("span",{className:"flex items-center gap-1.5",children:[o.jsx(vy,{className:"h-3 w-3 text-primary"})," Vietnam"]})]}),o.jsxs("a",{href:ue.social.github,target:"_blank",rel:"noreferrer",className:"mt-5 flex items-center justify-between rounded-lg border border-white/20 bg-background/65 px-4 py-3 font-mono text-xs uppercase tracking-wider backdrop-blur-md transition-colors hover:border-primary hover:text-primary",children:[o.jsxs("span",{className:"flex items-center gap-2",children:[o.jsx(Cr,{className:"h-3.5 w-3.5"})," github.com/haihttt974"]}),o.jsx(kt,{className:"h-3.5 w-3.5"})]})]})]})]})]}),o.jsx("div",{className:"hero-marquee mt-7 overflow-hidden border-y border-border/70 py-3 font-mono text-[11px] uppercase tracking-[.18em] text-muted-foreground",children:o.jsx("div",{className:"hero-marquee-track flex w-max items-center gap-8",children:[...Array(2)].flatMap((i,a)=>(t==="vi"?["Hệ thống backend","Tư duy dữ liệu","Học tập công khai","Thực hành DevOps","Xây · Quan sát · Giải thích · Cải tiến"]:["Backend systems","Database thinking","Learning in public","DevOps practice","Build · Observe · Explain · Improve"]).map(s=>o.jsxs("span",{className:"flex items-center gap-8",children:[o.jsx("span",{children:s}),o.jsx("span",{className:"text-primary",children:"✦"})]},`${a}-${s}`)))})})]})]})},VS={initial:{opacity:0,y:10},animate:{opacity:1,y:0,transition:{duration:.38,ease:[.22,1,.36,1]}},exit:{opacity:0,y:-6,transition:{duration:.2,ease:[.4,0,1,1]}}},Ei={hidden:{},visible:{transition:{staggerChildren:.065,delayChildren:.04}}},Ri={hidden:{opacity:0,y:18,scale:.985},visible:{opacity:1,y:0,scale:1,transition:{duration:.48,ease:[.22,1,.36,1]}}},cc={hidden:{opacity:0,y:28},visible:{opacity:1,y:0,transition:{duration:.62,ease:[.22,1,.36,1]}}},Li={once:!0,amount:.16},zS=()=>{const{t:e}=Le(),t=tr();return o.jsx(Ee.section,{className:"border-b border-border/70 bg-card/25 py-20 md:py-28",variants:t?void 0:cc,initial:t?!1:"hidden",whileInView:"visible",viewport:Li,children:o.jsxs("div",{className:"container mx-auto px-4",children:[o.jsxs("div",{className:"mb-10 max-w-3xl",children:[o.jsx("p",{className:"eyebrow mb-4",children:e("home.map.eyebrow")}),o.jsxs("h2",{className:"text-4xl md:text-6xl",children:[e("home.map.title1")," ",o.jsx("span",{className:"text-gradient",children:e("home.map.title2")})]}),o.jsx("p",{className:"mt-5 max-w-xl text-muted-foreground",children:e("home.map.desc")})]}),o.jsx(Ee.div,{className:"grid border-l border-t border-border/70 md:grid-cols-2 lg:grid-cols-3",variants:t?void 0:Ei,children:sc.map((n,r)=>o.jsx(Ee.div,{variants:t?void 0:Ri,children:o.jsxs(fe,{to:`/blog?category=${n.id}`,className:"group block min-h-56 border-b border-r border-border/70 bg-background/30 p-6 transition-colors hover:bg-primary/[.04]",children:[o.jsxs("div",{className:"flex items-start justify-between",children:[o.jsxs("span",{className:"font-mono text-xs font-medium text-primary",children:["MAP / 0",r+1]}),o.jsx(kt,{className:"h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary"})]}),o.jsx("h3",{className:"mt-12 text-xl group-hover:text-primary",children:e(`category.${n.id}`)}),o.jsx("p",{className:"mt-3 text-sm leading-relaxed text-muted-foreground",children:n.description})]})},n.id))})]})})},HS={id:"understanding-solid-principles",title:"Understanding SOLID Principles in Modern Software Development",titleVi:"Hiểu đúng SOLID trong phát triển phần mềm hiện đại",excerpt:"A practical introduction to SOLID principles with TypeScript-oriented examples and guidance on when to apply them.",excerptVi:"Hướng dẫn thực tế về SOLID cùng ví dụ TypeScript và cách áp dụng có chọn lọc trong dự án.",content:`# Understanding SOLID Principles in Modern Software Development

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
- Áp dụng nguyên tắc ở nơi chúng giảm độ phức tạp thật.`,category:"patterns",tags:["SOLID","OOP","TypeScript","Clean Code"],date:"2026-05-31",readTime:"5 min",readTimeVi:"5 phút",featured:!0},GS={id:"react-performance-optimization",title:"React Performance Optimization: Measure Before You Optimize",titleVi:"Tối ưu hiệu năng React: Đo lường trước khi tối ưu",excerpt:"A practical note on finding React performance bottlenecks with profiling tools before applying optimization patterns.",excerptVi:"Ghi chú thực tế về cách tìm điểm nghẽn hiệu năng React bằng profiler trước khi áp dụng các mẫu tối ưu.",content:`# React Performance Optimization: Measure Before You Optimize

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
- Nhớ rằng vấn đề hiệu năng có thể đến từ network, bundle size, ảnh hoặc CSS, không chỉ React.`,category:"frameworks",tags:["React","Performance","JavaScript","Frontend"],date:"2026-05-24",readTime:"5 min",readTimeVi:"5 phút",featured:!0},WS={id:"typescript-advanced-types",title:"Understanding TypeScript Advanced Types",titleVi:"Hiểu các kiểu nâng cao trong TypeScript",excerpt:"A practical introduction to conditional types, mapped types, template literal types, and type inference in TypeScript.",excerptVi:"Giới thiệu thực tế về conditional type, mapped type, template literal type và cơ chế suy luận kiểu trong TypeScript.",content:`# Understanding TypeScript Advanced Types

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

## Practical example: typed route parameters

Template literal types become useful when string keys carry structure. Routes are a good example. If the route pattern includes parameters, the type system can help keep navigation code honest.

\`\`\`ts
type Route = "/users/:userId" | "/posts/:postId/comments/:commentId";

type ExtractParams<Path extends string> =
  Path extends \`\${string}:\${infer Param}/\${infer Rest}\`
    ? Param | ExtractParams<Rest>
    : Path extends \`\${string}:\${infer Param}\`
      ? Param
      : never;

type RouteParams<Path extends Route> = Record<ExtractParams<Path>, string>;
\`\`\`

This type is more advanced, but it protects a real relationship: a route and the parameters required by that route. If the route changes, TypeScript can point to navigation calls that need updates.

## Practical example: event names from a model

Template literal types can also create consistent event names without hand-writing every string:

\`\`\`ts
type UserEvents<T> = {
  [Key in keyof T & string as \`user.\${Key}.changed\`]: {
    field: Key;
    value: T[Key];
  };
};
\`\`\`

This pattern is useful in analytics, form systems, and domain events. It is not necessary for every project, but it helps when string conventions are important and mistakes are easy to miss in review.

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

## How to keep advanced types maintainable

Advanced types should be reviewed like runtime code. Give important utilities names, add small examples, and avoid compressing too much logic into one line. If a type has multiple branches, formatting it clearly is not optional.

A maintainable advanced type usually has:

- A specific purpose that can be explained in one sentence.
- A small example showing expected input and output.
- A name that describes the business relationship, not the type trick.
- Limited use of \`as\`, \`any\`, and deeply nested conditional branches.
- Tests or type assertions for shared library utilities.

For shared packages, type tests can be useful. A lightweight test can assert that a helper accepts the intended shape and rejects the wrong one. This prevents a future refactor from silently weakening the type.

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

## Ví dụ thực tế: route params có kiểu

Template literal type hữu ích khi string key có cấu trúc. Route là một ví dụ tốt. Nếu route pattern có tham số, type system có thể giúp navigation code chính xác hơn.

\`\`\`ts
type Route = "/users/:userId" | "/posts/:postId/comments/:commentId";

type ExtractParams<Path extends string> =
  Path extends \`\${string}:\${infer Param}/\${infer Rest}\`
    ? Param | ExtractParams<Rest>
    : Path extends \`\${string}:\${infer Param}\`
      ? Param
      : never;

type RouteParams<Path extends Route> = Record<ExtractParams<Path>, string>;
\`\`\`

Type này nâng cao hơn bình thường, nhưng nó bảo vệ một quan hệ thật: route nào cần params nào. Khi route thay đổi, TypeScript có thể chỉ ra các lời gọi navigation cần cập nhật.

## Ví dụ thực tế: event name từ model

Template literal type cũng có thể tạo event name nhất quán mà không cần viết tay từng chuỗi:

\`\`\`ts
type UserEvents<T> = {
  [Key in keyof T & string as \`user.\${Key}.changed\`]: {
    field: Key;
    value: T[Key];
  };
};
\`\`\`

Pattern này hữu ích trong analytics, form system và domain event. Không phải project nào cũng cần, nhưng nó giúp khi quy ước string quan trọng và lỗi chính tả khó phát hiện trong review.

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

## Giữ advanced types dễ bảo trì

Advanced types nên được review như runtime code. Hãy đặt tên cho utility quan trọng, thêm ví dụ nhỏ và tránh nén quá nhiều logic vào một dòng. Nếu một type có nhiều nhánh, format rõ ràng là bắt buộc.

Một advanced type dễ bảo trì thường có:

- Mục đích cụ thể có thể giải thích trong một câu.
- Ví dụ nhỏ thể hiện input và output mong muốn.
- Tên mô tả quan hệ nghiệp vụ, không chỉ mô tả kỹ thuật type.
- Ít dùng \`as\`, \`any\` và conditional branch lồng quá sâu.
- Có type test hoặc type assertion cho utility dùng chung.

Với shared package, type test rất hữu ích. Một test nhẹ có thể xác nhận helper nhận shape đúng và từ chối shape sai. Điều này ngăn refactor sau này vô tình làm yếu type.

## Khi nào nên dùng và khi nào nên tránh

Dùng advanced types khi type bị lặp dễ lệch nhau, khi API state cần mô hình hóa chính xác hoặc khi utility tái sử dụng cần giữ quan hệ giữa input và output.

Tránh dùng khi interface đơn giản đã đủ. Một type trực tiếp thường tốt hơn generic utility chỉ phục vụ một trường hợp.

## Tóm tắt

Kiểu nâng cao trong TypeScript hữu ích nhất khi chúng bảo vệ các giả định thật trong codebase.

- Dùng mapped type cho chuyển đổi dựa trên key.
- Dùng conditional type cho quan hệ input-output.
- Dùng template literal type cho string key có cấu trúc.
- Giữ utility type dễ đọc.
- Validate dữ liệu bên ngoài ở runtime.`,category:"languages",tags:["TypeScript","Types","JavaScript"],date:"2026-05-22",readTime:"7 min",readTimeVi:"7 phút"},$S={id:"microservices-architecture",title:"Microservices Architecture Basics and Trade-offs",titleVi:"Nền tảng Microservices và các trade-off cần hiểu",excerpt:"A practical overview of when microservices help, what they cost, and which design concerns appear early.",excerptVi:"Tổng quan thực tế về khi nào microservices hữu ích, chi phí đi kèm và các vấn đề thiết kế cần biết sớm.",content:`# Microservices Architecture Basics and Trade-offs

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

The fifth concept is **operational ownership**. A service is not truly owned if nobody is responsible for its dashboards, alerts, deployment pipeline, database migrations, incident response, and cost. Microservices are as much an operating model as they are a code structure.

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

## Data consistency and transactions

The hardest part of microservices is rarely the controller or deployment file. It is data consistency. In a monolith, one database transaction can update orders, payments, and inventory together. In a microservice architecture, those changes may belong to different services and different databases.

That means teams must design for eventual consistency:

- The order service records that an order is awaiting payment.
- The payment service confirms or rejects the payment.
- The inventory service reserves or releases stock.
- The notification service reacts to the final business event.

If one step fails, the system needs compensating actions, retries, and clear status tracking. Trying to recreate one large distributed transaction often makes the design fragile. It is usually better to model the workflow explicitly and make intermediate states visible.

## Synchronous calls versus events

Use synchronous calls when the caller needs an immediate answer to continue. For example, checking whether a customer exists before creating a support ticket may be reasonable. But avoid long chains such as order service calling payment, payment calling inventory, and inventory calling shipping in one request. This creates latency and makes one service outage affect the entire flow.

Use events when something happened and other services may react independently:

\`\`\`text
OrderPlaced
PaymentCaptured
InventoryReserved
ShipmentRequested
\`\`\`

Events should describe facts in the past tense. They should not be hidden commands like \`DoPaymentNow\`. Clear event names help teams understand ownership and reduce accidental coupling.

## Readiness checklist before splitting

Before extracting a service, confirm that the team can operate it:

- The module already has a clear business boundary.
- It can own its data without constant cross-service joins.
- It has deployment automation and rollback strategy.
- It has logs, metrics, dashboards, and alerts.
- It has documented API contracts or event schemas.
- It has tests around important workflows and failure cases.
- The owning team can respond when the service fails in production.

If these are not true, the safer move is usually to improve modularity inside the monolith first.

## Common mistakes

- **Splitting too early.** A small product often benefits more from a modular monolith.
- **Creating services around technical layers.** Services should map to business capabilities.
- **Sharing one database everywhere.** This keeps services coupled even if the code is separated.
- **Ignoring failure between services.** Every network call can timeout, retry, or partially fail.
- **Missing observability.** Debugging distributed systems without logs and traces becomes guesswork.
- **Using events without ownership.** Events should communicate facts, not become hidden commands.
- **Underestimating local development.** Running ten services locally without good tooling slows every change.
- **Forgetting versioning.** Service contracts evolve, and consumers need time to migrate.

## Best practices

- Start with clear modules before extracting services.
- Define ownership around business capabilities.
- Keep service APIs small and explicit.
- Prefer asynchronous events for facts that other services may react to.
- Add timeouts, retries, and idempotency to cross-service calls.
- Track correlation IDs across services.
- Document who owns each service, data store, and operational alert.
- Prefer explicit workflow states over hidden distributed transactions.
- Version public APIs and event schemas deliberately.

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

Ý tưởng thứ năm là **quyền sở hữu vận hành**. Một service chưa thực sự được sở hữu nếu không ai chịu trách nhiệm dashboard, alert, deployment pipeline, migration database, xử lý sự cố và chi phí. Microservices không chỉ là cấu trúc code; nó còn là mô hình vận hành.

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

## Data consistency và transaction

Phần khó nhất của microservices hiếm khi là controller hay file deploy. Phần khó là tính nhất quán dữ liệu. Trong monolith, một database transaction có thể cập nhật order, payment và inventory cùng lúc. Trong microservices, các thay đổi đó có thể thuộc nhiều service và nhiều database khác nhau.

Điều này buộc team phải thiết kế theo eventual consistency:

- Order service ghi nhận đơn hàng đang chờ thanh toán.
- Payment service xác nhận hoặc từ chối thanh toán.
- Inventory service giữ hoặc giải phóng tồn kho.
- Notification service phản ứng với business event cuối cùng.

Nếu một bước thất bại, hệ thống cần compensating action, retry và trạng thái rõ ràng để theo dõi. Cố tái tạo một distributed transaction lớn thường làm thiết kế mong manh. Thực tế hơn là mô hình hóa workflow rõ ràng và để các trạng thái trung gian hiển thị được.

## Synchronous call và event

Dùng synchronous call khi caller cần câu trả lời ngay để tiếp tục. Ví dụ kiểm tra customer có tồn tại trước khi tạo support ticket có thể hợp lý. Nhưng tránh chuỗi dài như order service gọi payment, payment gọi inventory, inventory gọi shipping trong cùng một request. Cách này tăng latency và khiến một service lỗi kéo theo cả luồng.

Dùng event khi một sự kiện đã xảy ra và service khác có thể phản ứng độc lập:

\`\`\`text
OrderPlaced
PaymentCaptured
InventoryReserved
ShipmentRequested
\`\`\`

Event nên mô tả sự thật ở thì quá khứ. Nó không nên là command ẩn như \`DoPaymentNow\`. Tên event rõ giúp team hiểu ownership và giảm coupling vô tình.

## Checklist trước khi tách service

Trước khi tách một service, hãy xác nhận team có thể vận hành nó:

- Module đã có boundary nghiệp vụ rõ.
- Service có thể sở hữu dữ liệu mà không cần join chéo liên tục.
- Có deployment automation và chiến lược rollback.
- Có log, metric, dashboard và alert.
- Có tài liệu API contract hoặc event schema.
- Có test cho workflow quan trọng và failure case.
- Team sở hữu có khả năng phản ứng khi service lỗi ở production.

Nếu các điều này chưa đúng, hướng an toàn hơn thường là cải thiện modularity trong monolith trước.

## Lỗi thường gặp

- **Tách quá sớm.** Sản phẩm nhỏ thường hưởng lợi nhiều hơn từ modular monolith.
- **Tạo service theo tầng kỹ thuật.** Service nên map với năng lực nghiệp vụ.
- **Dùng chung database khắp nơi.** Cách này giữ coupling dù code đã tách.
- **Bỏ qua lỗi giữa service.** Mọi network call đều có thể timeout, retry hoặc fail một phần.
- **Thiếu observability.** Debug hệ thống phân tán thiếu log và trace gần như là đoán mò.
- **Dùng event nhưng không rõ ownership.** Event nên truyền sự kiện đã xảy ra, không nên trở thành command ẩn.
- **Đánh giá thấp local development.** Chạy mười service ở local mà thiếu tooling tốt sẽ làm mọi thay đổi chậm lại.
- **Quên versioning.** Contract giữa service sẽ thay đổi, và consumer cần thời gian để migrate.

## Best practices

- Bắt đầu bằng module rõ ràng trước khi tách service.
- Định nghĩa ownership theo năng lực nghiệp vụ.
- Giữ API của service nhỏ và rõ.
- Dùng event async cho các sự kiện mà service khác có thể phản ứng.
- Thêm timeout, retry và idempotency cho call giữa service.
- Theo dõi correlation ID xuyên suốt các service.
- Ghi rõ ai sở hữu service, data store và alert vận hành.
- Ưu tiên workflow state rõ ràng thay vì distributed transaction ẩn.
- Version API công khai và event schema có chủ đích.

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
- Ưu tiên modular monolith cho đến khi nhu cầu phân tán thật sự rõ.`,category:"architecture",tags:["Microservices","Docker","Kubernetes","System Design"],date:"2026-05-26",readTime:"8 min",readTimeVi:"8 phút",featured:!0},KS={id:"clean-code-practices",title:"Writing Clean, Maintainable Code",titleVi:"Viết mã sạch và dễ bảo trì",excerpt:"Practical clean code habits that make software easier to read, change, test, and review without adding unnecessary abstraction.",excerptVi:"Các thói quen clean code thực tế giúp phần mềm dễ đọc, dễ sửa, dễ kiểm thử và dễ review mà không tạo abstraction không cần thiết.",content:`# Writing Clean, Maintainable Code

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
- Ưu tiên sự rõ ràng hữu ích thay vì abstraction hình thức.`,category:"practices",tags:["Clean Code","Refactoring","Best Practices"],date:"2026-05-21",readTime:"5 min",readTimeVi:"5 phút"},QS={id:"frontend-developer-roadmap",title:"Frontend Developer Roadmap for Building Strong Fundamentals",titleVi:"Lộ trình Frontend Developer để xây nền tảng vững",excerpt:"A practical learning path for building solid frontend fundamentals through HTML, CSS, JavaScript, frameworks, testing, and deployment.",excerptVi:"Lộ trình học tập thực tế để xây nền tảng frontend qua HTML, CSS, JavaScript, framework, kiểm thử và triển khai.",content:`# Frontend Developer Roadmap for Building Strong Fundamentals

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

## Skill milestones that prove real progress

A roadmap is only useful if each stage has an observable outcome. Instead of asking "Did I finish a course?", ask whether you can build and explain something without copying every line.

Good milestones:

- **HTML/CSS:** Build a responsive page with semantic structure, accessible form labels, predictable spacing, and no layout overflow on mobile.
- **JavaScript:** Fetch data, transform it, filter it, handle empty results, and persist a small preference in local storage.
- **React:** Split a UI into components with clear props, manage local and server state separately, and avoid unnecessary shared state.
- **Forms:** Validate fields, show inline errors, preserve user input, and handle both client-side and server-side failure.
- **API integration:** Display loading, empty, error, and success states without the page jumping or becoming confusing.
- **Deployment:** Ship the project, set environment variables, inspect build output, and fix a production-only issue.

These milestones are more honest than a long list of tools. They show whether knowledge has turned into working judgment.

## Portfolio quality bar

A frontend portfolio project should feel finished. It does not need dozens of features, but it should show care in the workflows it includes. A small app with polished loading states, useful empty states, keyboard navigation, and reliable deployment communicates more maturity than a large app full of unfinished screens.

Before calling a project complete, check:

- Does the main workflow work on mobile and desktop?
- Can a keyboard user complete the important actions?
- Are form errors specific enough to fix the input?
- Does the UI remain stable while data is loading?
- Are important components reusable without becoming generic too early?
- Is the repository easy to run from a clean checkout?

This is the difference between a demo and a project that can support a technical conversation.

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

## Mốc kỹ năng chứng minh tiến bộ thật

Roadmap chỉ hữu ích khi mỗi giai đoạn có đầu ra quan sát được. Thay vì hỏi "mình đã xem hết khóa học chưa?", hãy hỏi liệu bạn có thể tự xây và giải thích một phần sản phẩm mà không copy từng dòng không.

Các mốc tốt:

- **HTML/CSS:** Xây trang responsive có cấu trúc semantic, label form đúng, spacing ổn định và không tràn layout trên mobile.
- **JavaScript:** Fetch dữ liệu, biến đổi dữ liệu, filter, xử lý kết quả rỗng và lưu một tùy chọn nhỏ trong local storage.
- **React:** Tách UI thành component có props rõ, phân biệt local state và server state, tránh shared state không cần thiết.
- **Form:** Validate field, hiển thị lỗi inline, giữ input người dùng và xử lý cả lỗi client-side lẫn server-side.
- **API integration:** Hiển thị loading, empty, error và success state mà không làm trang nhảy layout hoặc gây khó hiểu.
- **Deployment:** Deploy project, cấu hình environment variable, đọc build output và xử lý lỗi chỉ xuất hiện ở production.

Những mốc này trung thực hơn một danh sách tool dài. Chúng cho thấy kiến thức đã chuyển thành năng lực thực thi hay chưa.

## Tiêu chuẩn chất lượng cho portfolio

Một project frontend trong portfolio nên có cảm giác hoàn thiện. Nó không cần quá nhiều feature, nhưng những workflow đã có phải được làm cẩn thận. Một app nhỏ với loading state tốt, empty state hữu ích, keyboard navigation và deployment ổn định thể hiện sự trưởng thành hơn một app lớn nhưng nhiều màn hình dang dở.

Trước khi xem project là hoàn thành, hãy kiểm tra:

- Workflow chính có hoạt động tốt trên mobile và desktop không?
- Người dùng bàn phím có hoàn thành thao tác quan trọng không?
- Lỗi form có đủ cụ thể để người dùng sửa input không?
- UI có ổn định trong lúc tải dữ liệu không?
- Component quan trọng có tái sử dụng được mà không bị generic quá sớm không?
- Repository có dễ chạy từ một checkout sạch không?

Đây là khác biệt giữa một demo và một project có thể dùng để trao đổi kỹ thuật nghiêm túc.

## Tóm tắt

Phát triển frontend bền vững hơn khi lộ trình bắt đầu từ nền tảng rồi tiến tới ứng dụng thật.

- Học web platform trước.
- Xây dự án nhỏ nhưng hoàn chỉnh.
- Thêm API handling, form và error state.
- Học testing và deployment đủ sớm.
- Tập trung chiều sâu trước khi chạy theo mọi tool mới.`,category:"roadmap",tags:["Roadmap","Frontend","Career","Learning"],date:"2026-05-20",readTime:"8 min",readTimeVi:"8 phút"},YS={id:"typescript-type-system-practical-guide",title:"TypeScript's Type System: From Safer Code to Better Domain Design",titleVi:"Hệ thống kiểu TypeScript: Từ mã an toàn đến thiết kế nghiệp vụ tốt hơn",excerpt:"A practical guide to modeling domain rules with unions, generics, narrowing, and type-safe boundaries instead of treating TypeScript as annotated JavaScript.",excerptVi:"Hướng dẫn thực tế về cách mô hình hóa quy tắc nghiệp vụ bằng union, generic, narrowing và các biên an toàn kiểu dữ liệu.",content:`# TypeScript's Type System: From Safer Code to Better Domain Design

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

## Design DTOs separately from domain types

API payloads, database rows, and domain objects are not always the same thing. Treating them as one type often creates accidental coupling. A backend response may contain strings for dates, nullable fields for backward compatibility, and names that match an external contract. The domain model should express what the application needs after validation.

\`\`\`ts
type UserDto = {
  id: string;
  email: string | null;
  createdAt: string;
};

type User = {
  id: string;
  email: string;
  createdAt: Date;
};

function toUser(dto: UserDto): User {
  if (!dto.email) throw new Error("User email is required");
  return {
    id: dto.id,
    email: dto.email,
    createdAt: new Date(dto.createdAt),
  };
}
\`\`\`

The conversion layer may look boring, but it is where the application turns uncertain external data into reliable internal data. This is also the place to normalize names, parse dates, reject invalid values, and apply compatibility rules.

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

## Use utility types to create intentional views

Utility types become valuable when they describe how data changes across a workflow. For example, a create command should not accept fields that only the system can assign:

\`\`\`ts
type Article = {
  id: string;
  title: string;
  body: string;
  publishedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
};

type CreateArticleInput = Pick<Article, "title" | "body">;
type ArticleSummary = Pick<Article, "id" | "title" | "publishedAt">;
\`\`\`

This keeps write models and read models explicit. However, avoid chaining many utility types until the final shape becomes hard to understand. If a type is important to the business, give it a clear name.

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

## Avoid type-level overengineering

Advanced types are powerful, but they can become a private language that only the author understands. A type is helping when it prevents real bugs, documents a real rule, or improves the caller experience. It is hurting when developers need to reverse-engineer several conditional types before they can change a simple feature.

Use this rule of thumb:

- Use simple object types for stable data shapes.
- Use unions when only certain combinations are valid.
- Use generics when input and output relationships matter.
- Use conditional and mapped types when they remove repeated, error-prone definitions.
- Prefer runtime validation when the value comes from outside the program.

The type system should make the code easier to change. If it only makes the code impressive, it is probably the wrong abstraction.

## Practical example: UI state without impossible combinations

Frontend code often starts with several independent booleans:

\`\`\`ts
type ScreenState = {
  isLoading: boolean;
  error?: string;
  data?: User[];
};
\`\`\`

This allows impossible states: loading with data, error with data, or neither data nor loading nor error. A union is more precise:

\`\`\`ts
type ScreenState =
  | { status: "loading" }
  | { status: "error"; message: string }
  | { status: "ready"; data: User[] }
  | { status: "empty" };
\`\`\`

Rendering becomes easier because each branch receives exactly the fields it needs. The model guides the component instead of forcing the component to defend against every combination.

## Practical rules

- Model business states with unions instead of optional-field objects.
- Validate external data before assigning application types.
- Use generics to preserve meaningful relationships.
- Avoid type assertions unless runtime guarantees truly exist.
- Keep public module contracts small and explicit.
- Separate transport DTOs from validated application types.
- Name important derived types instead of hiding intent behind long type expressions.

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

## Tách DTO khỏi kiểu nghiệp vụ

Payload API, dòng dữ liệu trong database và object nghiệp vụ không phải lúc nào cũng là một thứ. Nếu dùng chung một type cho tất cả, ứng dụng rất dễ bị coupling ngầm. Response từ backend có thể dùng string cho ngày tháng, field nullable để tương thích ngược và tên thuộc tính theo contract bên ngoài. Domain model nên mô tả dữ liệu mà ứng dụng cần sau khi đã xác thực.

\`\`\`ts
type UserDto = {
  id: string;
  email: string | null;
  createdAt: string;
};

type User = {
  id: string;
  email: string;
  createdAt: Date;
};

function toUser(dto: UserDto): User {
  if (!dto.email) throw new Error("User email is required");
  return {
    id: dto.id,
    email: dto.email,
    createdAt: new Date(dto.createdAt),
  };
}
\`\`\`

Lớp chuyển đổi này có thể trông nhàm chán, nhưng đây là nơi ứng dụng biến dữ liệu bên ngoài chưa chắc chắn thành dữ liệu nội bộ đáng tin cậy. Đây cũng là nơi normalize tên, parse ngày tháng, loại bỏ giá trị sai và áp dụng rule tương thích.

## Dùng utility type để tạo góc nhìn có chủ đích

Utility type hữu ích khi nó mô tả dữ liệu thay đổi thế nào qua một workflow. Ví dụ command tạo bài viết không nên nhận các field chỉ hệ thống mới được gán:

\`\`\`ts
type Article = {
  id: string;
  title: string;
  body: string;
  publishedAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
};

type CreateArticleInput = Pick<Article, "title" | "body">;
type ArticleSummary = Pick<Article, "id" | "title" | "publishedAt">;
\`\`\`

Cách này giữ write model và read model rõ ràng. Tuy vậy, tránh nối quá nhiều utility type đến mức shape cuối cùng khó đọc. Nếu một type quan trọng với nghiệp vụ, hãy đặt tên rõ ràng cho nó.

## Kiểm tra đầy đủ mọi trường hợp

Khi union có thêm trạng thái mới, các switch quan trọng nên báo rõ vị trí cần cập nhật:

\`\`\`ts
function assertNever(value: never): never {
  throw new Error(\`Chưa xử lý giá trị: \${value}\`);
}
\`\`\`

## Tránh overengineering ở tầng type

Advanced type rất mạnh, nhưng cũng có thể trở thành một ngôn ngữ riêng mà chỉ người viết hiểu. Một type đang giúp ích khi nó ngăn lỗi thật, ghi lại rule thật hoặc cải thiện trải nghiệm của người gọi. Nó đang gây hại khi developer phải đọc ngược nhiều conditional type chỉ để sửa một feature đơn giản.

Quy tắc thực tế:

- Dùng object type đơn giản cho shape dữ liệu ổn định.
- Dùng union khi chỉ một số tổ hợp field là hợp lệ.
- Dùng generic khi quan hệ giữa input và output quan trọng.
- Dùng conditional và mapped type khi chúng loại bỏ định nghĩa lặp lại dễ sai.
- Ưu tiên runtime validation khi giá trị đến từ bên ngoài chương trình.

Type system nên làm code dễ thay đổi hơn. Nếu nó chỉ làm code trông ấn tượng hơn, đó có thể là abstraction sai.

## Ví dụ thực tế: UI state không có tổ hợp vô lý

Frontend code thường bắt đầu bằng nhiều boolean độc lập:

\`\`\`ts
type ScreenState = {
  isLoading: boolean;
  error?: string;
  data?: User[];
};
\`\`\`

Mô hình này cho phép trạng thái vô lý: vừa loading vừa có data, vừa error vừa có data, hoặc không có cả data, loading lẫn error. Union chính xác hơn:

\`\`\`ts
type ScreenState =
  | { status: "loading" }
  | { status: "error"; message: string }
  | { status: "ready"; data: User[] }
  | { status: "empty" };
\`\`\`

Render trở nên dễ hơn vì mỗi nhánh nhận đúng field nó cần. Model dẫn dắt component thay vì bắt component tự phòng thủ trước mọi tổ hợp.

## Nguyên tắc thực hành

- Mô hình hóa trạng thái nghiệp vụ bằng union thay vì object có quá nhiều trường tùy chọn.
- Xác thực dữ liệu bên ngoài trước khi gán kiểu của ứng dụng.
- Dùng generic để bảo toàn mối quan hệ có ý nghĩa.
- Hạn chế type assertion nếu không có đảm bảo ở runtime.
- Giữ hợp đồng công khai của module nhỏ gọn và rõ ràng.
- Tách transport DTO khỏi kiểu đã được xác thực trong ứng dụng.
- Đặt tên cho các derived type quan trọng thay vì giấu ý định sau biểu thức type quá dài.

TypeScript không thay thế kiểm thử hay xác thực runtime. Sức mạnh thật sự của nó là làm cho các giả định trở nên hữu hình. Khi mô hình kiểu truyền đạt tốt nghiệp vụ, việc triển khai, review, refactor và mở rộng đều trở nên dễ dàng hơn.`,category:"languages",tags:["TypeScript","Type System","Domain Modeling","Generics"],date:"2026-06-13",readTime:"8 min",readTimeVi:"8 phút",featured:!0},XS={id:"python-reliable-applications",title:"Python Beyond Scripts: Structuring Reliable Applications",titleVi:"Python vượt ra ngoài script: Xây dựng ứng dụng đáng tin cậy",excerpt:"How to move from quick Python scripts to maintainable applications with clear boundaries, type hints, dependency management, testing, and observability.",excerptVi:"Cách chuyển từ script Python nhanh sang ứng dụng dễ bảo trì bằng ranh giới rõ ràng, type hint, quản lý dependency, kiểm thử và observability.",content:`# Python Beyond Scripts: Structuring Reliable Applications

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

## Know when a script has become an application

Not every Python file needs architecture. A one-time migration, local utility, or small report can stay as a script. The threshold changes when the code becomes part of a recurring workflow, accepts untrusted input, writes important data, or is maintained by more than one person.

Signals that the code needs stronger structure:

- It has more than one execution path, such as import, export, retry, and cleanup.
- It talks to more than one external system.
- Failures require investigation instead of simply rerunning the command.
- Configuration differs between local, staging, and production.
- A future change is risky because the current behavior is not covered by tests.

The goal is not to add folders early. The goal is to make risk visible before the code becomes operationally important.

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

## Add configuration and startup checks

Reliable applications fail early when required configuration is missing. Read configuration once at startup, validate it, and pass a typed settings object into the rest of the application. Avoid scattering \`os.environ\` reads across many files because it makes behavior hard to test and hard to audit.

\`\`\`py
from dataclasses import dataclass
from collections.abc import Mapping

@dataclass(frozen=True)
class Settings:
    database_url: str
    request_timeout_seconds: float

def load_settings(env: Mapping[str, str]) -> Settings:
    return Settings(
        database_url=env["DATABASE_URL"],
        request_timeout_seconds=float(env.get("REQUEST_TIMEOUT_SECONDS", "10")),
    )
\`\`\`

This gives the program a clear contract with its environment. It also makes tests simple because they can pass a dictionary instead of mutating global process state.

## Test behavior at the right level

Unit tests should cover pure rules, parsing, validation, and error translation. Integration tests should cover database queries, external adapters, and serialization boundaries. End-to-end tests should be few and focused on workflows that must not break.

For Python applications, a practical testing mix usually looks like this:

- Many fast tests for domain functions and services.
- Focused adapter tests for database repositories and HTTP clients.
- A small number of workflow tests that exercise the real application entry point.
- Failure tests for timeouts, invalid payloads, missing configuration, and duplicate operations.

The most valuable tests are often not the happiest path. They are the tests that explain what the system must do when inputs are incomplete, dependencies are slow, or a retry happens twice.

## Common mistakes to avoid

- Putting all logic inside route handlers, CLI commands, or notebook cells.
- Returning raw dictionaries across the entire application.
- Catching broad exceptions and losing the original cause.
- Letting background jobs run without idempotency keys or retry limits.
- Treating logs as text messages instead of operational data.
- Adding an ORM model first and letting database shape dictate every domain rule.

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

## Khi nào script đã trở thành ứng dụng?

Không phải file Python nào cũng cần kiến trúc. Một script chạy một lần, tiện ích nội bộ nhỏ hoặc báo cáo đơn giản có thể giữ nguyên dạng script. Nhưng ngưỡng này thay đổi khi đoạn code trở thành workflow lặp lại, nhận input không đáng tin cậy, ghi dữ liệu quan trọng hoặc được nhiều người cùng bảo trì.

Các dấu hiệu nên nâng cấp cấu trúc:

- Code có nhiều luồng thực thi như import, export, retry và cleanup.
- Code kết nối với nhiều hệ thống bên ngoài.
- Khi lỗi xảy ra, team phải điều tra thay vì chỉ chạy lại.
- Cấu hình khác nhau giữa local, staging và production.
- Mỗi lần sửa đều rủi ro vì hành vi hiện tại chưa có test bảo vệ.

Mục tiêu không phải là thêm thư mục cho đẹp. Mục tiêu là làm rủi ro trở nên rõ ràng trước khi code trở thành một phần quan trọng của hệ thống.

## Thêm cấu hình và kiểm tra lúc khởi động

Ứng dụng đáng tin cậy nên fail sớm khi thiếu cấu hình bắt buộc. Hãy đọc cấu hình một lần lúc khởi động, xác thực nó, rồi truyền một object cấu hình có kiểu rõ ràng vào các phần còn lại. Tránh đọc \`os.environ\` rải rác ở nhiều file vì cách đó khó test và khó audit.

\`\`\`py
from dataclasses import dataclass
from collections.abc import Mapping

@dataclass(frozen=True)
class Settings:
    database_url: str
    request_timeout_seconds: float

def load_settings(env: Mapping[str, str]) -> Settings:
    return Settings(
        database_url=env["DATABASE_URL"],
        request_timeout_seconds=float(env.get("REQUEST_TIMEOUT_SECONDS", "10")),
    )
\`\`\`

Cách này tạo ra hợp đồng rõ ràng giữa chương trình và môi trường chạy. Test cũng đơn giản hơn vì có thể truyền một dictionary thay vì sửa trạng thái global của process.

## Kiểm thử đúng tầng

Unit test nên bao phủ rule thuần, parsing, validation và chuyển đổi lỗi. Integration test nên kiểm tra database query, adapter bên ngoài và biên serialization. End-to-end test nên ít nhưng tập trung vào workflow không được phép hỏng.

Một tỉ lệ test thực tế cho ứng dụng Python thường gồm:

- Nhiều test nhanh cho domain function và service.
- Adapter test có trọng tâm cho repository database và HTTP client.
- Một số ít workflow test chạy qua entry point thật.
- Test luồng lỗi cho timeout, payload sai, thiếu cấu hình và thao tác bị lặp.

Những test có giá trị nhất thường không phải happy path. Chúng là các test mô tả hệ thống phải làm gì khi input thiếu, dependency chậm hoặc retry xảy ra nhiều lần.

## Lỗi thường gặp cần tránh

- Đặt toàn bộ logic trong route handler, CLI command hoặc notebook cell.
- Trả raw dictionary xuyên suốt ứng dụng.
- Bắt exception quá rộng và làm mất nguyên nhân gốc.
- Chạy background job mà không có idempotency key hoặc giới hạn retry.
- Xem log như câu chữ thông thường thay vì dữ liệu vận hành.
- Tạo ORM model trước rồi để hình dạng database quyết định mọi rule nghiệp vụ.

Python tốt vẫn nên dễ đọc và trực tiếp. Độ tin cậy đến từ ranh giới rõ ràng cùng vòng phản hồi kỷ luật, không phải từ việc biến ứng dụng nhỏ thành một framework trừu tượng.`,category:"languages",tags:["Python","Architecture","Testing","Maintainability"],date:"2026-06-10",readTime:"9 min",readTimeVi:"9 phút"},JS={id:"csharp-modern-backend-guide",title:"Modern C# for Backend Systems: Patterns That Improve Correctness",titleVi:"C# hiện đại cho hệ thống Backend: Những mẫu giúp tăng tính đúng đắn",excerpt:"A focused guide to records, nullable reference types, async workflows, result modeling, and dependency boundaries in modern C# backend applications.",excerptVi:"Hướng dẫn tập trung vào record, nullable reference type, async, mô hình hóa kết quả và ranh giới dependency trong backend C# hiện đại.",content:`# Modern C# for Backend Systems

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

## Put validation where the rule belongs

Validation in backend systems usually has several layers. Request validation checks whether the incoming shape is usable. Application validation checks whether the operation is allowed. Domain validation protects invariants that must never be broken.

A common mistake is to put all validation in ASP.NET attributes or FluentValidation rules and then let invalid domain objects exist internally. That makes the API layer responsible for protecting the entire system. A better approach is to keep simple request checks at the edge and enforce core rules in domain types or factories.

\`\`\`csharp
public sealed record EmailAddress
{
    public string Value { get; }

    private EmailAddress(string value) => Value = value;

    public static Result<EmailAddress> Create(string value)
    {
        if (string.IsNullOrWhiteSpace(value))
            return Result.Fail<EmailAddress>("email.required", "Email is required.");

        if (!value.Contains('@'))
            return Result.Fail<EmailAddress>("email.invalid", "Email format is invalid.");

        return Result.Ok(new EmailAddress(value.Trim().ToLowerInvariant()));
    }
}
\`\`\`

This pattern keeps invalid values from spreading beyond the boundary where they are created.

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

## Design application services around use cases

Application services should coordinate a use case, not become a place where every rule accumulates. A good service method reads like a workflow: load required data, ask the domain to make a decision, persist the result, and publish any needed integration event.

\`\`\`csharp
public async Task<Result<OrderDto>> ConfirmPayment(
    ConfirmPaymentCommand command,
    CancellationToken cancellationToken)
{
    var order = await orders.GetAsync(command.OrderId, cancellationToken);
    if (order is null)
        return Result.Fail<OrderDto>("order.not_found", "Order was not found.");

    var confirmation = order.ConfirmPayment(command.PaidAt);
    if (confirmation.IsFailure)
        return confirmation.ToResult<OrderDto>();

    await unitOfWork.SaveChangesAsync(cancellationToken);
    return Result.Ok(mapper.ToDto(order));
}
\`\`\`

The service coordinates the transaction, but the domain object owns the rule. This distinction matters when the same rule is triggered by an API request, a background job, or an event consumer.

## Keep EF Core powerful but contained

EF Core is productive, but it should not leak into every decision. Query code can use projections and includes where needed, while domain decisions should avoid depending on change tracking behavior. For read-heavy screens, a direct projection is often clearer than loading full aggregates:

\`\`\`csharp
var items = await db.Orders
    .Where(order => order.CustomerId == customerId)
    .OrderByDescending(order => order.CreatedAt)
    .Select(order => new OrderSummaryDto(
        order.Id,
        order.Status,
        order.Total.Amount))
    .ToListAsync(cancellationToken);
\`\`\`

Use aggregates when behavior matters. Use projections when the screen needs data. Mixing those two concerns is one reason backend code becomes slow and hard to review.

## Production concerns worth designing early

- Every external call should accept a cancellation token and have a timeout.
- Important commands should be idempotent when retries are possible.
- Validation errors should return stable error codes, not only text messages.
- Background workers should log operation IDs and retry counts.
- Database migrations should be reviewed like code, especially when they touch large tables.
- Public API contracts should be covered by integration tests or contract tests.

## Review checklist

- Are nullable values intentional and handled?
- Does async code accept and forward cancellation?
- Are expected failures explicit?
- Are domain rules independent from EF Core and ASP.NET?
- Are value objects validated at creation?
- Are use cases small enough to review without tracing ten dependencies?
- Are persistence decisions separated from domain decisions?

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

## Đặt validation đúng tầng

Validation trong backend thường có nhiều lớp. Request validation kiểm tra shape đầu vào có dùng được không. Application validation kiểm tra thao tác có được phép thực hiện không. Domain validation bảo vệ invariant không bao giờ được phá vỡ.

Một lỗi phổ biến là đặt toàn bộ validation trong attribute của ASP.NET hoặc FluentValidation, rồi để object nghiệp vụ không hợp lệ tồn tại bên trong hệ thống. Khi đó API layer phải chịu trách nhiệm bảo vệ toàn bộ ứng dụng. Cách tốt hơn là giữ kiểm tra đơn giản ở biên và ép các rule cốt lõi vào domain type hoặc factory.

\`\`\`csharp
public sealed record EmailAddress
{
    public string Value { get; }

    private EmailAddress(string value) => Value = value;

    public static Result<EmailAddress> Create(string value)
    {
        if (string.IsNullOrWhiteSpace(value))
            return Result.Fail<EmailAddress>("email.required", "Email is required.");

        if (!value.Contains('@'))
            return Result.Fail<EmailAddress>("email.invalid", "Email format is invalid.");

        return Result.Ok(new EmailAddress(value.Trim().ToLowerInvariant()));
    }
}
\`\`\`

Pattern này ngăn giá trị không hợp lệ lan ra khỏi nơi nó được tạo.

## Thiết kế application service quanh use case

Application service nên điều phối một use case, không phải nơi tích tụ mọi rule. Một method tốt thường đọc giống workflow: tải dữ liệu cần thiết, yêu cầu domain đưa ra quyết định, lưu kết quả và phát event tích hợp nếu cần.

\`\`\`csharp
public async Task<Result<OrderDto>> ConfirmPayment(
    ConfirmPaymentCommand command,
    CancellationToken cancellationToken)
{
    var order = await orders.GetAsync(command.OrderId, cancellationToken);
    if (order is null)
        return Result.Fail<OrderDto>("order.not_found", "Order was not found.");

    var confirmation = order.ConfirmPayment(command.PaidAt);
    if (confirmation.IsFailure)
        return confirmation.ToResult<OrderDto>();

    await unitOfWork.SaveChangesAsync(cancellationToken);
    return Result.Ok(mapper.ToDto(order));
}
\`\`\`

Service điều phối transaction, nhưng object nghiệp vụ sở hữu rule. Ranh giới này quan trọng khi cùng một rule có thể được kích hoạt từ API request, background job hoặc event consumer.

## Giữ EF Core mạnh nhưng có ranh giới

EF Core rất hiệu quả, nhưng không nên để nó rò rỉ vào mọi quyết định. Query code có thể dùng projection và include khi cần, còn quyết định nghiệp vụ nên tránh phụ thuộc vào change tracking. Với màn hình đọc nhiều, projection trực tiếp thường rõ hơn việc load toàn bộ aggregate:

\`\`\`csharp
var items = await db.Orders
    .Where(order => order.CustomerId == customerId)
    .OrderByDescending(order => order.CreatedAt)
    .Select(order => new OrderSummaryDto(
        order.Id,
        order.Status,
        order.Total.Amount))
    .ToListAsync(cancellationToken);
\`\`\`

Dùng aggregate khi hành vi quan trọng. Dùng projection khi màn hình chỉ cần dữ liệu. Trộn hai nhu cầu này là một lý do khiến backend chậm và khó review.

## Vấn đề production nên thiết kế sớm

- Mọi lời gọi bên ngoài nên nhận cancellation token và có timeout.
- Command quan trọng nên idempotent nếu có retry.
- Validation error nên có mã lỗi ổn định, không chỉ có text message.
- Background worker nên log operation ID và số lần retry.
- Database migration cần được review như code, nhất là khi chạm vào bảng lớn.
- Public API contract nên có integration test hoặc contract test bảo vệ.

## Checklist khi review

- Giá trị nullable có chủ đích và đã được xử lý chưa?
- Mã async có nhận và truyền cancellation token không?
- Lỗi dự kiến đã được biểu diễn rõ chưa?
- Nghiệp vụ có độc lập với EF Core và ASP.NET không?
- Value object có được xác thực ngay khi tạo không?
- Use case có đủ nhỏ để review mà không phải lần theo quá nhiều dependency không?
- Quyết định persistence đã tách khỏi quyết định nghiệp vụ chưa?

C# tốt nhất không phải là C# thông minh nhất. Mã tốt truyền đạt ràng buộc rõ ràng, xem compiler như một đối tác thiết kế và không để chi tiết hạ tầng lấn át nghiệp vụ.`,category:"languages",tags:["C#",".NET","Backend","Domain Modeling"],date:"2026-06-06",readTime:"9 min",readTimeVi:"9 phút"},ZS={id:"javascript-async-patterns",title:"JavaScript Async Patterns: Promises, Async/Await, and Queues",titleVi:"Các mẫu xử lý bất đồng bộ trong JavaScript: Promise, Async/Await và Queue",excerpt:"A practical guide to organizing asynchronous JavaScript with promises, async/await, controlled parallelism, queues, and reliable error handling.",excerptVi:"Hướng dẫn thực tế để tổ chức xử lý bất đồng bộ trong JavaScript bằng Promise, async/await, chạy song song có kiểm soát, queue và xử lý lỗi đáng tin cậy.",content:`# JavaScript Async Patterns: Promises, Async/Await, and Queues

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

Async code có cấu trúc tốt giúp ứng dụng phản hồi nhanh hơn, lỗi rõ ràng hơn và dễ mở rộng hơn khi tính năng ngày càng nhiều.`,category:"languages",tags:["JavaScript","Async/Await","Promises","Concurrency","Frontend"],date:"2026-06-20",readTime:"8 min",readTimeVi:"8 phút"},eP={id:"python-data-pipeline-basics",title:"Python Data Pipeline Basics for Reliable Automation",titleVi:"Nền tảng pipeline dữ liệu Python cho tự động hóa ổn định",excerpt:"A practical structure for building Python data pipelines that ingest, validate, transform, store, and monitor data reliably.",excerptVi:"Cấu trúc thực tế để xây dựng pipeline dữ liệu Python có khả năng thu thập, kiểm tra, biến đổi, lưu trữ và giám sát dữ liệu ổn định.",content:`# Python Data Pipeline Basics for Reliable Automation

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

Khi automation trở thành một phần của workflow thật, độ tin cậy quan trọng hơn code thông minh. Một cấu trúc pipeline rõ ràng giúp script Python trở thành hệ thống có thể phụ thuộc vào.`,category:"languages",tags:["Python","Data Pipeline","Automation","ETL","Backend"],date:"2026-06-18",readTime:"8 min",readTimeVi:"8 phút"},tP={id:"csharp-linq-practical-guide",title:"C# LINQ Practical Guide for Cleaner Business Logic",titleVi:"Hướng dẫn LINQ thực tế trong C# cho business logic sạch hơn",excerpt:"A practical guide to using LINQ for readable filtering, grouping, projection, and business rules without hiding intent or hurting performance.",excerptVi:"Hướng dẫn thực tế để dùng LINQ cho lọc, nhóm, chuyển đổi dữ liệu và business rule dễ đọc mà không che giấu ý định hoặc làm giảm hiệu năng.",content:`# C# LINQ Practical Guide for Cleaner Business Logic

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

Business logic sạch không phải là tránh vòng lặp bằng mọi giá. Điều quan trọng là rule phải dễ nhìn thấy. LINQ là công cụ mạnh cho việc đó khi query kể cùng một câu chuyện với domain.`,category:"languages",tags:["C#","LINQ",".NET","Clean Code","Business Logic"],date:"2026-06-21",readTime:"7 min",readTimeVi:"7 phút"},nP={id:"typescript-generics-cookbook",title:"TypeScript Generics Cookbook for Everyday Components",titleVi:"Cẩm nang TypeScript Generics cho component hằng ngày",excerpt:"Reusable generic patterns for UI components, API helpers, and utility functions.",excerptVi:"Các mẫu generic tái sử dụng cho UI component, API helper và utility function.",content:`# TypeScript Generics Cookbook for Everyday Components

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
- Dùng generic cho select, table, API helper và utility thật sự làm việc với nhiều data shape.`,category:"languages",tags:["TypeScript","Generics","Frontend","Patterns"],date:"2026-06-19",readTime:"7 min",readTimeVi:"7 phút"},rP={id:"react-query-data-fetching",title:"React Query Data Fetching Patterns for Growing Apps",titleVi:"Mẫu fetch dữ liệu với React Query cho ứng dụng đang phát triển",excerpt:"Patterns for caching, invalidation, loading states, and optimistic updates.",excerptVi:"Các mẫu cho cache, invalidation, trạng thái tải và cập nhật lạc quan.",content:`# React Query Data Fetching Patterns for Growing Apps

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
- Tách local UI state khỏi server state.`,category:"frameworks",tags:["React","React Query","Data Fetching","Frontend"],date:"2026-06-01",readTime:"7 min",readTimeVi:"7 phút"},iP={id:"nextjs-routing-strategies",title:"Next.js Routing Strategies for Content and Product Pages",titleVi:"Chiến lược routing Next.js cho trang nội dung và sản phẩm",excerpt:"How to choose route structure, layouts, metadata, and dynamic segments.",excerptVi:"Cách chọn cấu trúc route, layout, metadata và dynamic segment.",content:`# Next.js Routing Strategies for Content and Product Pages

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
- Chuẩn bị redirect trước khi đổi path đã tồn tại.`,category:"frameworks",tags:["Next.js","React","Routing","SEO"],date:"2026-06-17",readTime:"7 min",readTimeVi:"7 phút"},aP={id:"aspnet-core-api-versioning",title:"ASP.NET Core API Versioning Without Breaking Clients",titleVi:"Versioning API ASP.NET Core không làm hỏng client",excerpt:"A compact plan for evolving APIs while keeping existing consumers stable.",excerptVi:"Kế hoạch gọn để phát triển API mà vẫn giữ client hiện tại ổn định.",content:`# ASP.NET Core API Versioning Without Breaking Clients

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
- Deprecate version với timeline và migration note rõ ràng.`,category:"frameworks",tags:["ASP.NET Core","API","Backend","Versioning"],date:"2026-06-16",readTime:"7 min",readTimeVi:"7 phút"},oP={id:"flutter-state-management-options",title:"Flutter State Management Options: Choosing the Right Fit",titleVi:"Các lựa chọn quản lý state trong Flutter: Chọn cách phù hợp",excerpt:"A comparison of state management approaches for small and growing Flutter apps.",excerptVi:"So sánh các cách quản lý state cho ứng dụng Flutter nhỏ và đang mở rộng.",content:`# Flutter State Management Options: Choosing the Right Fit

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
- Giữ team nhất quán thay vì trộn pattern ngẫu nhiên.`,category:"frameworks",tags:["Flutter","Dart","State Management","Mobile"],date:"2026-06-15",readTime:"7 min",readTimeVi:"7 phút"},sP={id:"database-indexing-strategy",title:"Database Indexing Strategy for Faster Queries",titleVi:"Chiến lược indexing database để truy vấn nhanh hơn",excerpt:"A practical guide to choosing indexes based on access patterns and query plans.",excerptVi:"Hướng dẫn chọn index dựa trên pattern truy cập và query plan.",content:`# Database Indexing Strategy for Faster Queries

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
- Xem indexing là một phần của backend design, không chỉ là cách chữa cháy.`,category:"architecture",tags:["Database","SQL","Performance","Backend"],date:"2026-06-14",readTime:"7 min",readTimeVi:"7 phút"},cP={id:"event-driven-architecture-basics",title:"Event-Driven Architecture Basics for Web Systems",titleVi:"Nền tảng kiến trúc hướng sự kiện cho hệ thống web",excerpt:"When events help, when they hurt, and how to keep message flows observable.",excerptVi:"Khi event hữu ích, khi gây hại và cách giữ luồng message dễ quan sát.",content:`# Event-Driven Architecture Basics for Web Systems

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
- Lên kế hoạch retry, dead-letter và schema evolution sớm.`,category:"architecture",tags:["Architecture","Events","Messaging","Scalability"],date:"2026-06-12",readTime:"7 min",readTimeVi:"7 phút"},lP={id:"api-gateway-design-notes",title:"API Gateway Design Notes for Distributed Systems",titleVi:"Ghi chú thiết kế API Gateway cho hệ thống phân tán",excerpt:"Routing, authentication, rate limiting, and observability concerns at the gateway layer.",excerptVi:"Routing, xác thực, rate limit và observability ở lớp gateway.",content:`# API Gateway Design Notes for Distributed Systems

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
- Tránh biến gateway thành tầng business logic.`,category:"architecture",tags:["API Gateway","Architecture","Security","Microservices"],date:"2026-06-11",readTime:"8 min",readTimeVi:"8 phút"},hP={id:"caching-strategies-web-apps",title:"Caching Strategies for Web Applications",titleVi:"Chiến lược caching cho ứng dụng web",excerpt:"A compact map of browser cache, CDN cache, API cache, and database cache tradeoffs.",excerptVi:"Bản đồ ngắn về cache trình duyệt, CDN, API và database cùng tradeoff.",content:`# Caching Strategies for Web Applications

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
- Monitor cache behavior sau release.`,category:"architecture",tags:["Caching","Performance","Architecture","Web"],date:"2026-06-09",readTime:"7 min",readTimeVi:"7 phút"},uP={id:"repository-pattern-modern-apps",title:"Repository Pattern in Modern Applications",titleVi:"Repository Pattern trong ứng dụng hiện đại",excerpt:"Where the repository pattern is useful, and where it becomes unnecessary indirection.",excerptVi:"Khi Repository Pattern hữu ích và khi nó trở thành lớp gián tiếp không cần thiết.",content:`# Repository Pattern in Modern Applications

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
- Bỏ qua pattern khi nó chỉ thêm indirection mà không có giá trị.`,category:"patterns",tags:["Repository Pattern","Design Patterns","Backend","Architecture"],date:"2026-06-08",readTime:"7 min",readTimeVi:"7 phút"},dP={id:"factory-pattern-ui-components",title:"Factory Pattern for Configurable UI Components",titleVi:"Factory Pattern cho UI component có cấu hình",excerpt:"Using factories to create consistent UI variants without spreading conditionals everywhere.",excerptVi:"Dùng factory để tạo biến thể UI nhất quán mà không rải conditional khắp nơi.",content:`# Factory Pattern for Configurable UI Components

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
- Ưu tiên map đơn giản và output nhỏ hơn hệ thống dynamic phức tạp.`,category:"patterns",tags:["Factory Pattern","React","Design Patterns","UI"],date:"2026-06-07",readTime:"7 min",readTimeVi:"7 phút"},pP={id:"adapter-pattern-api-clients",title:"Adapter Pattern for API Clients",titleVi:"Adapter Pattern cho API client",excerpt:"A pattern for protecting application code from external payload changes.",excerptVi:"Một mẫu giúp bảo vệ code ứng dụng khỏi thay đổi payload bên ngoài.",content:`# Adapter Pattern for API Clients

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
- Tránh over-engineer endpoint đã khớp với app model.`,category:"patterns",tags:["Adapter Pattern","API","TypeScript","Clean Code"],date:"2026-06-05",readTime:"7 min",readTimeVi:"7 phút"},gP={id:"observer-pattern-real-time-ui",title:"Observer Pattern for Real-Time UI Updates",titleVi:"Observer Pattern cho cập nhật UI thời gian thực",excerpt:"How observer-style flows appear in subscriptions, stores, and live dashboards.",excerptVi:"Cách luồng kiểu observer xuất hiện trong subscription, store và dashboard realtime.",content:`# Observer Pattern for Real-Time UI Updates

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
- Tách realtime transport khỏi UI rendering.`,category:"patterns",tags:["Observer Pattern","Realtime","UI","Design Patterns"],date:"2026-06-04",readTime:"7 min",readTimeVi:"7 phút"},mP={id:"git-workflow-team-projects",title:"Git Workflow for Small Team Projects",titleVi:"Git workflow cho dự án team nhỏ",excerpt:"A simple workflow for branches, reviews, releases, and avoiding painful merges.",excerptVi:"Workflow đơn giản cho branch, review, release và tránh merge khó chịu.",content:`# Git Workflow for Small Team Projects

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
- Tránh quy trình nặng hơn nhu cầu team.`,category:"practices",tags:["Git","Workflow","Teamwork","Best Practices"],date:"2026-06-03",readTime:"7 min",readTimeVi:"7 phút"},fP={id:"code-review-checklist",title:"Code Review Checklist for Practical Engineering Teams",titleVi:"Checklist code review cho đội kỹ thuật thực tế",excerpt:"A review checklist focused on correctness, maintainability, security, and product behavior.",excerptVi:"Checklist review tập trung vào đúng logic, bảo trì, bảo mật và hành vi sản phẩm.",content:`# Code Review Checklist for Practical Engineering Teams

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
- Dùng review để để lại ngữ cảnh hữu ích cho team.`,category:"practices",tags:["Code Review","Best Practices","Quality","Teamwork"],date:"2026-06-02",readTime:"8 min",readTimeVi:"8 phút"},yP={id:"testing-strategy-frontend-backend",title:"Testing Strategy Across Frontend and Backend",titleVi:"Chiến lược kiểm thử cho frontend và backend",excerpt:"How to balance unit tests, integration tests, and end-to-end coverage.",excerptVi:"Cách cân bằng unit test, integration test và end-to-end test.",content:`# Testing Strategy Across Frontend and Backend

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
- Giữ test deterministic và hữu ích.`,category:"practices",tags:["Testing","Frontend","Backend","Quality"],date:"2026-05-29",readTime:"7 min",readTimeVi:"7 phút"},vP={id:"logging-monitoring-basics",title:"Logging and Monitoring Basics for Web Applications",titleVi:"Nền tảng logging và monitoring cho ứng dụng web",excerpt:"What to log, what to measure, and how to make application issues easier to debug.",excerptVi:"Nên log gì, đo gì và cách giúp lỗi ứng dụng dễ debug hơn.",content:`# Logging and Monitoring Basics for Web Applications

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
- Review khoảng trống observability sau incident.`,category:"practices",tags:["Logging","Monitoring","DevOps","Debugging"],date:"2026-05-30",readTime:"7 min",readTimeVi:"7 phút"},bP={id:"backend-developer-roadmap",title:"Backend Developer Roadmap: From Fundamentals to Deployment",titleVi:"Lộ trình Backend Developer từ nền tảng đến triển khai",excerpt:"A practical learning path covering HTTP, databases, API design, testing, deployment, and basic operations.",excerptVi:"Lộ trình thực tế gồm HTTP, database, thiết kế API, kiểm thử, triển khai và vận hành cơ bản.",content:`# Backend Developer Roadmap: From Fundamentals to Deployment

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
- Chỉ thêm kiến trúc nâng cao sau khi nền tảng ổn.`,category:"roadmap",tags:["Backend","Roadmap","API","Career"],date:"2026-05-28",readTime:"8 min",readTimeVi:"8 phút"},wP={id:"devops-roadmap-for-developers",title:"DevOps Roadmap for Developers",titleVi:"Lộ trình DevOps cho lập trình viên",excerpt:"A practical path through Linux, Docker, CI/CD, cloud deployment, and observability.",excerptVi:"Lộ trình thực tế qua Linux, Docker, CI/CD, cloud deployment và observability.",content:`# DevOps Roadmap for Developers

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
- Học hạ tầng nâng cao sau khi nền tảng đã hữu ích.`,category:"roadmap",tags:["DevOps","Docker","CI/CD","Roadmap"],date:"2026-05-27",readTime:"7 min",readTimeVi:"7 phút"},xP={id:"database-learning-roadmap",title:"Database Learning Roadmap for Application Developers",titleVi:"Lộ trình học database cho lập trình viên ứng dụng",excerpt:"A structured path from SQL basics to indexing, transactions, modeling, and operations.",excerptVi:"Lộ trình từ SQL cơ bản đến indexing, transaction, modeling và vận hành.",content:`# Database Learning Roadmap for Application Developers

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
- Xem migration và backup là một phần của development, không chỉ operations.`,category:"roadmap",tags:["Database","SQL","Roadmap","Backend"],date:"2026-05-25",readTime:"8 min",readTimeVi:"8 phút"},kP={id:"mobile-developer-roadmap",title:"Mobile Developer Roadmap for Cross-Platform Apps",titleVi:"Lộ trình Mobile Developer cho ứng dụng cross-platform",excerpt:"A path covering UI, state, storage, APIs, testing, releases, and store deployment.",excerptVi:"Lộ trình gồm UI, state, storage, API, testing, release và triển khai store.",content:`# Mobile Developer Roadmap for Cross-Platform Apps

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
- Dùng cross-platform tool một cách thực tế, không máy móc.`,category:"roadmap",tags:["Mobile","Flutter","Roadmap","Career"],date:"2026-05-23",readTime:"8 min",readTimeVi:"8 phút"},TP={id:"angular-framework-complete-guide",title:"Angular Framework Guide: Architecture, Signals, Forms, Routing, and Production Practices",titleVi:"Hướng dẫn Angular Framework: Kiến trúc, Signals, Forms, Routing và thực hành production",excerpt:"A serious practical guide to Angular: when it fits, how its architecture works, and how to build maintainable applications with components, signals, dependency injection, routing, forms, HTTP, testing, and production practices.",excerptVi:"Hướng dẫn Angular thực tế và nghiêm túc: khi nào nên dùng, kiến trúc hoạt động ra sao, và cách xây ứng dụng dễ bảo trì với component, signals, dependency injection, routing, forms, HTTP, testing và thực hành production.",content:`# Angular Framework Guide: Architecture, Signals, Forms, Routing, and Production Practices

Angular is a full application framework for building web apps with TypeScript. It is not only a rendering library. It gives developers a structured way to build components, manage dependency injection, define routes, handle forms, communicate with APIs, test features, and ship production applications with a consistent toolchain.

That structure is Angular's main value. In small prototypes, it can feel heavier than a minimal UI library. In long-lived applications, especially when several developers work on the same product, Angular's conventions help reduce random architecture decisions. A team can agree on components, services, routes, guards, form models, HTTP clients, and testing patterns without inventing everything from scratch.

This article is a practical guide to Angular as it is used in modern projects. It covers the core concepts, the trade-offs, a realistic example, common mistakes, best practices, and when Angular is the right choice.

## What problem does this solve?

Frontend applications become difficult when UI state, server data, navigation, forms, validation, authentication, permissions, performance, and testing all grow at the same time. A simple component tree can quickly turn into a system where every feature has a different style.

Angular solves this by providing a coherent platform:

- **Components** define UI and behavior.
- **Templates** declare how data appears and how users interact with the page.
- **Signals** provide fine-grained reactive state.
- **Dependency injection** organizes shared services, configuration, API clients, and state.
- **Router** handles navigation, route parameters, lazy loading, guards, and route-level data.
- **Forms** support both simple template-driven forms and scalable reactive forms.
- **HttpClient** provides typed HTTP communication, interceptors, error handling, and testing utilities.
- **CLI and tooling** provide project generation, builds, tests, updates, language support, and production workflows.

The problem Angular solves is not just "render HTML." The real problem is building a frontend system that remains understandable after many screens, many workflows, and many contributors.

## Core concepts

### Components are the primary building block

An Angular component combines a TypeScript class, a template, styling, and metadata. The class contains state and behavior. The template describes what renders. The selector defines how the component can be used.

Modern Angular applications commonly use **standalone components**, where a component declares the imports it needs instead of relying on a large feature module. This makes dependencies more visible and improves lazy loading because each route or feature can import only what it uses.

Good Angular components should have clear responsibilities. A page component may coordinate route data and feature state. A presentational component should mostly receive inputs and emit user actions. A form component should own form behavior. Mixing all of these responsibilities into one component is one of the fastest ways to make Angular code hard to maintain.

### Templates are declarative UI contracts

Angular templates bind data from the component class to the DOM. They support property binding, event binding, conditional rendering, list rendering, pipes, and forms. A good template should be readable as a UI contract: what data is shown, what actions are possible, and which state controls each branch.

Avoid hiding too much business logic in templates. Small expressions are fine. Complex decisions should move into computed values, methods with clear names, or services.

### Signals are Angular's modern reactivity model

Signals are wrappers around values that notify Angular when the value changes. A writable signal stores state. A computed signal derives state from other signals and is cached until its dependencies change. Effects are used for side effects when state changes.

Signals are useful because they make state dependencies explicit. If a template reads a signal, Angular knows that part of the UI depends on that signal. This is a more direct mental model than relying only on broad change detection.

\`\`\`ts
import { Component, computed, signal } from '@angular/core';

type Task = {
  id: number;
  title: string;
  done: boolean;
};

@Component({
  selector: 'app-task-summary',
  standalone: true,
  templateUrl: './task-summary.component.html',
})
export class TaskSummaryComponent {
  readonly tasks = signal<Task[]>([
    { id: 1, title: 'Review pull request', done: false },
    { id: 2, title: 'Write release notes', done: true },
  ]);

  readonly completedCount = computed(() =>
    this.tasks().filter((task) => task.done).length,
  );

  markDone(id: number) {
    this.tasks.update((items) =>
      items.map((task) => task.id === id ? { ...task, done: true } : task),
    );
  }
}
\`\`\`

This example keeps state local and clear. \`tasks\` is writable, \`completedCount\` is derived, and the update is immutable. In real projects, signals work well for local UI state, feature state, derived values, and view models. Server data can still use RxJS or Angular's HTTP patterns where streams are appropriate.

### Dependency injection keeps shared behavior organized

Angular's dependency injection system lets classes ask for dependencies instead of constructing them directly. Services are the common place for API access, authentication, feature state, analytics, logging, and domain operations.

DI is important because it keeps components focused. A component should not know how authentication tokens are stored, how API URLs are built, or how errors are logged. Those responsibilities belong in services.

\`\`\`ts
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export type ProjectDto = {
  id: string;
  name: string;
  status: 'active' | 'archived';
};

@Injectable({ providedIn: 'root' })
export class ProjectApi {
  private readonly http = inject(HttpClient);

  loadProjects() {
    return this.http.get<ProjectDto[]>('/api/projects');
  }
}
\`\`\`

This service hides HTTP details behind a small API. A component can inject \`ProjectApi\` and focus on rendering the result.

### Router defines application structure

Angular Router is central in real applications. It maps URLs to components, supports nested routes, lazy loading, guards, route parameters, resolvers, and navigation behavior. A route is not only a link; it is a boundary for loading code, checking access, and organizing features.

Feature routes are a natural place to split application ownership:

\`\`\`ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'projects',
    loadComponent: () =>
      import('./projects/project-list.page').then((m) => m.ProjectListPage),
  },
  {
    path: 'projects/:id',
    loadComponent: () =>
      import('./projects/project-detail.page').then((m) => m.ProjectDetailPage),
  },
];
\`\`\`

Lazy loading keeps initial bundles smaller and gives large applications clearer feature boundaries. Guards should protect access, but they should not replace backend authorization. The server must still enforce permissions.

### Forms require a deliberate choice

Angular supports template-driven forms and reactive forms. Template-driven forms are simple for small, mostly template-based forms. Reactive forms are more explicit, testable, and scalable for serious workflows.

For business forms with validation, conditional fields, async checks, and reusable form logic, reactive forms are usually the better default. They put the form model in TypeScript, which makes validation and testing easier.

\`\`\`ts
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './profile-form.component.html',
})
export class ProfileFormComponent {
  private readonly fb = new FormBuilder();

  readonly form = this.fb.nonNullable.group({
    displayName: ['', [Validators.required, Validators.maxLength(80)]],
    email: ['', [Validators.required, Validators.email]],
  });

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const value = this.form.getRawValue();
    console.log('Save profile', value);
  }
}
\`\`\`

The important point is not the syntax. The important point is that the form has a clear model, validation is explicit, and submission only happens when the state is valid.

### HTTP and RxJS still matter

Angular applications often communicate with backends through \`HttpClient\`. HTTP calls return observables, which makes cancellation, composition, retries, and stream-based workflows possible. Even with signals, RxJS remains useful for async data flows, websockets, event streams, debounced search, and complex API coordination.

Interceptors are useful for cross-cutting behavior such as authentication headers, correlation IDs, error mapping, and retry policies. Keep them focused. An interceptor should not contain feature-specific business logic.

### SSR, hydration, and performance

Angular supports server-side rendering and static generation for applications that need faster first render, SEO, or better perceived performance. Hydration allows the client app to reuse server-rendered DOM instead of throwing it away.

Performance in Angular is not only about framework internals. It is also about lazy loading routes, keeping templates simple, avoiding unnecessary work in getters, using track expressions in lists, optimizing images, measuring bundle size, and profiling real user workflows with DevTools.

## Practical example

Imagine an internal project management application. A good Angular design might look like this:

\`\`\`text
src/app/
  core/
    auth/
    http/
    layout/
  features/
    projects/
      project-list.page.ts
      project-detail.page.ts
      project-api.service.ts
      project-form.component.ts
      project.routes.ts
  shared/
    ui/
    pipes/
    validators/
\`\`\`

The \`core\` folder contains app-wide infrastructure. The \`features\` folder groups business capabilities. The \`shared\` folder contains reusable UI and utilities that do not own business workflows.

For the projects feature:

- The route lazily loads the project pages.
- \`ProjectApi\` owns HTTP calls.
- Page components coordinate data loading and route state.
- Smaller components render lists, forms, and actions.
- Reactive forms handle validation.
- Guards protect routes when authentication is required.
- Tests cover services, form validation, and important page behavior.

This structure is not the only correct structure, but it shows the Angular mindset: clear boundaries, explicit dependencies, and features that can grow without becoming one large component.

## Common mistakes

- **Treating Angular like a small rendering library.** Angular works best when you use its architecture intentionally: routing, DI, forms, services, and tooling.
- **Putting too much logic in components.** Components should coordinate UI, not become data access layers, validation engines, and business services at the same time.
- **Using services as global dumping grounds.** A service should have a clear responsibility. A huge \`AppService\` usually means boundaries are missing.
- **Choosing template-driven forms for complex workflows.** They are fine for simple forms, but large forms usually need reactive models.
- **Ignoring RxJS instead of learning it carefully.** Signals reduce some state complexity, but Angular still uses observables heavily for HTTP and async workflows.
- **Creating guards that duplicate backend security.** Guards improve UX, but backend APIs must enforce authorization.
- **Skipping tests because Angular feels structured.** Structure helps, but forms, services, guards, and components still need tests.
- **Not updating Angular regularly.** Angular provides update tooling, and staying current reduces security and migration risk.

## Best practices

- Prefer standalone components and feature-level route files for new code.
- Keep components small enough to understand without scrolling through several responsibilities.
- Use signals for local UI state and derived view state.
- Use services for API access, domain operations, cross-cutting behavior, and feature state.
- Prefer reactive forms for complex business forms.
- Keep route guards focused on navigation decisions.
- Use lazy loading for feature pages.
- Keep shared modules or shared folders genuinely shared; do not put feature-specific code there.
- Use typed HTTP DTOs, then map external payloads into application models when rules matter.
- Add tests for validators, services, guards, and important component behavior.
- Measure performance with real builds and browser tools instead of guessing.

## When to use and when to avoid

Use Angular when the application is large enough to benefit from structure: dashboards, admin systems, internal tools, enterprise workflows, multi-page SPAs, products with complex forms, and teams that need consistency. Angular is especially strong when the team wants a full framework with official solutions for routing, forms, HTTP, DI, testing, updates, and production builds.

Avoid Angular when the project is a tiny widget, a mostly static marketing page, or a prototype where framework structure would slow the team down. Also avoid it if the team strongly prefers assembling its own architecture from smaller libraries. Angular's strength is convention; if a team fights every convention, the framework will feel heavy.

The trade-off is clear: Angular asks you to learn its model, but it gives you a complete model in return. That is valuable when maintainability matters more than minimal setup.

## Summary

Angular is a serious framework for serious frontend applications. It is not the lightest option, and it does not try to be. Its value is the combination of TypeScript, components, templates, signals, DI, routing, forms, HTTP, testing, CLI tooling, and production practices.

Key takeaways:

- Use Angular when structure and long-term maintainability matter.
- Treat components, services, routes, and forms as architectural boundaries.
- Learn signals, but do not ignore RxJS and HTTP observables.
- Prefer reactive forms for complex workflows.
- Use lazy routes and feature boundaries to keep large apps manageable.
- Test the behavior that carries business risk.
- Keep Angular updated and let the official tooling help with migrations.`,contentVi:`# Hướng dẫn Angular Framework: Kiến trúc, Signals, Forms, Routing và thực hành production

Angular là một application framework để xây dựng web app bằng TypeScript. Nó không chỉ là thư viện render UI. Angular cung cấp một cách có cấu trúc để xây component, quản lý dependency injection, định nghĩa routing, xử lý form, giao tiếp với API, kiểm thử feature và triển khai ứng dụng production bằng một toolchain nhất quán.

Giá trị lớn nhất của Angular nằm ở cấu trúc đó. Với prototype nhỏ, Angular có thể tạo cảm giác nặng hơn một UI library tối giản. Nhưng với ứng dụng sống lâu, đặc biệt khi nhiều developer cùng làm trên một sản phẩm, convention của Angular giúp giảm các quyết định kiến trúc ngẫu nhiên. Team có thể thống nhất cách viết component, service, route, guard, form model, HTTP client và test mà không phải tự phát minh mọi thứ từ đầu.

Bài viết này là một hướng dẫn thực tế về Angular trong dự án hiện đại. Nội dung bao gồm ý tưởng cốt lõi, trade-off, ví dụ thực tế, lỗi thường gặp, best practices và khi nào Angular là lựa chọn phù hợp.

## Chủ đề này giải quyết vấn đề gì?

Frontend application trở nên khó khi UI state, server data, navigation, form, validation, authentication, permission, performance và testing cùng tăng độ phức tạp. Một cây component đơn giản có thể nhanh chóng biến thành hệ thống mà mỗi feature viết theo một kiểu khác nhau.

Angular giải quyết vấn đề này bằng một nền tảng tương đối đầy đủ:

- **Components** định nghĩa UI và hành vi.
- **Templates** mô tả dữ liệu hiển thị ra sao và người dùng tương tác như thế nào.
- **Signals** cung cấp mô hình reactive state chi tiết hơn.
- **Dependency injection** tổ chức service, cấu hình, API client và state dùng chung.
- **Router** xử lý navigation, route params, lazy loading, guards và route-level data.
- **Forms** hỗ trợ cả template-driven forms đơn giản và reactive forms cho workflow phức tạp.
- **HttpClient** hỗ trợ typed HTTP communication, interceptor, error handling và testing utilities.
- **CLI và tooling** hỗ trợ tạo project, build, test, update, language service và production workflow.

Vấn đề Angular giải quyết không chỉ là "render HTML". Vấn đề thật là xây một frontend system vẫn dễ hiểu sau nhiều màn hình, nhiều workflow và nhiều người đóng góp.

## Các ý tưởng cốt lõi

### Component là building block chính

Một Angular component kết hợp TypeScript class, template, style và metadata. Class chứa state và behavior. Template mô tả thứ được render. Selector định nghĩa cách component được dùng trong HTML.

Angular hiện đại thường dùng **standalone components**, nơi component tự khai báo các imports cần thiết thay vì phụ thuộc vào một feature module lớn. Cách này làm dependency rõ hơn và hỗ trợ lazy loading tốt hơn vì mỗi route hoặc feature chỉ import phần nó dùng.

Component tốt nên có trách nhiệm rõ. Page component có thể điều phối route data và feature state. Presentational component nên chủ yếu nhận input và phát action. Form component nên sở hữu hành vi form. Trộn tất cả trách nhiệm này vào một component là cách rất nhanh để làm code Angular khó bảo trì.

### Template là hợp đồng UI dạng khai báo

Angular template bind dữ liệu từ class ra DOM. Template hỗ trợ property binding, event binding, conditional rendering, list rendering, pipe và form. Một template tốt nên đọc được như hợp đồng UI: dữ liệu nào được hiển thị, action nào có thể xảy ra và state nào điều khiển từng nhánh.

Không nên giấu quá nhiều business logic trong template. Expression nhỏ thì ổn. Quyết định phức tạp nên chuyển vào computed value, method có tên rõ hoặc service.

### Signals là mô hình reactivity hiện đại của Angular

Signal là wrapper quanh một giá trị và thông báo cho Angular khi giá trị đó thay đổi. Writable signal lưu state. Computed signal suy ra state từ signal khác và được cache cho đến khi dependency thay đổi. Effect dùng cho side effect khi state thay đổi.

Signals hữu ích vì chúng làm dependency của state trở nên rõ. Nếu template đọc một signal, Angular biết phần UI đó phụ thuộc vào signal này. Đây là mental model trực tiếp hơn so với chỉ dựa vào change detection rộng.

\`\`\`ts
import { Component, computed, signal } from '@angular/core';

type Task = {
  id: number;
  title: string;
  done: boolean;
};

@Component({
  selector: 'app-task-summary',
  standalone: true,
  templateUrl: './task-summary.component.html',
})
export class TaskSummaryComponent {
  readonly tasks = signal<Task[]>([
    { id: 1, title: 'Review pull request', done: false },
    { id: 2, title: 'Write release notes', done: true },
  ]);

  readonly completedCount = computed(() =>
    this.tasks().filter((task) => task.done).length,
  );

  markDone(id: number) {
    this.tasks.update((items) =>
      items.map((task) => task.id === id ? { ...task, done: true } : task),
    );
  }
}
\`\`\`

Ví dụ này giữ state local và rõ ràng. \`tasks\` có thể ghi, \`completedCount\` là giá trị suy ra, và update theo hướng immutable. Trong dự án thật, signals phù hợp cho local UI state, feature state, derived value và view model. Server data vẫn có thể dùng RxJS hoặc pattern HTTP của Angular khi stream phù hợp hơn.

### Dependency injection giúp tổ chức behavior dùng chung

Dependency injection của Angular cho phép class yêu cầu dependency từ bên ngoài thay vì tự tạo trực tiếp. Service là nơi phổ biến để đặt API access, authentication, feature state, analytics, logging và domain operation.

DI quan trọng vì nó giữ component tập trung. Component không nên biết token xác thực được lưu ở đâu, API URL được tạo thế nào hoặc lỗi được log ra sao. Các trách nhiệm này nên nằm trong service.

\`\`\`ts
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export type ProjectDto = {
  id: string;
  name: string;
  status: 'active' | 'archived';
};

@Injectable({ providedIn: 'root' })
export class ProjectApi {
  private readonly http = inject(HttpClient);

  loadProjects() {
    return this.http.get<ProjectDto[]>('/api/projects');
  }
}
\`\`\`

Service này che giấu chi tiết HTTP sau một API nhỏ. Component có thể inject \`ProjectApi\` và tập trung render kết quả.

### Router định nghĩa cấu trúc ứng dụng

Angular Router là phần trung tâm trong ứng dụng thật. Nó map URL với component, hỗ trợ nested routes, lazy loading, guards, route parameters, resolvers và navigation behavior. Route không chỉ là link; nó là boundary để load code, kiểm tra quyền và tổ chức feature.

Feature routes là nơi tự nhiên để chia ownership:

\`\`\`ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'projects',
    loadComponent: () =>
      import('./projects/project-list.page').then((m) => m.ProjectListPage),
  },
  {
    path: 'projects/:id',
    loadComponent: () =>
      import('./projects/project-detail.page').then((m) => m.ProjectDetailPage),
  },
];
\`\`\`

Lazy loading giúp initial bundle nhỏ hơn và làm boundary feature rõ hơn trong ứng dụng lớn. Guard nên dùng để bảo vệ navigation, nhưng không được thay thế backend authorization. Server vẫn phải kiểm tra quyền.

### Forms cần lựa chọn có chủ đích

Angular hỗ trợ template-driven forms và reactive forms. Template-driven forms đơn giản cho form nhỏ, phần lớn logic nằm trong template. Reactive forms rõ ràng hơn, dễ test hơn và scale tốt hơn cho workflow nghiêm túc.

Với business forms có validation, conditional fields, async checks và form logic tái sử dụng, reactive forms thường là default tốt hơn. Nó đặt form model trong TypeScript, giúp validation và testing rõ hơn.

\`\`\`ts
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './profile-form.component.html',
})
export class ProfileFormComponent {
  private readonly fb = new FormBuilder();

  readonly form = this.fb.nonNullable.group({
    displayName: ['', [Validators.required, Validators.maxLength(80)]],
    email: ['', [Validators.required, Validators.email]],
  });

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const value = this.form.getRawValue();
    console.log('Save profile', value);
  }
}
\`\`\`

Điểm quan trọng không phải cú pháp. Điểm quan trọng là form có model rõ, validation explicit và chỉ submit khi state hợp lệ.

### HTTP và RxJS vẫn quan trọng

Angular app thường giao tiếp với backend qua \`HttpClient\`. HTTP call trả về observable, giúp cancellation, composition, retry và stream-based workflow khả thi. Dù signals đã giảm một phần độ phức tạp của state, RxJS vẫn hữu ích cho async data flow, websocket, event stream, debounced search và phối hợp API phức tạp.

Interceptor phù hợp cho cross-cutting behavior như authentication header, correlation ID, error mapping và retry policy. Hãy giữ interceptor có trọng tâm. Interceptor không nên chứa business logic riêng của feature.

### SSR, hydration và performance

Angular hỗ trợ server-side rendering và static generation cho ứng dụng cần first render nhanh hơn, SEO hoặc perceived performance tốt hơn. Hydration cho phép client app tái sử dụng DOM đã render từ server thay vì bỏ đi và render lại từ đầu.

Performance trong Angular không chỉ nằm ở framework internals. Nó còn nằm ở lazy loading route, template đơn giản, tránh công việc không cần thiết trong getter, dùng track expression trong list, tối ưu image, đo bundle size và profile workflow thật bằng DevTools.

## Ví dụ thực tế

Hãy tưởng tượng một ứng dụng quản lý project nội bộ. Một thiết kế Angular hợp lý có thể như sau:

\`\`\`text
src/app/
  core/
    auth/
    http/
    layout/
  features/
    projects/
      project-list.page.ts
      project-detail.page.ts
      project-api.service.ts
      project-form.component.ts
      project.routes.ts
  shared/
    ui/
    pipes/
    validators/
\`\`\`

Thư mục \`core\` chứa hạ tầng dùng toàn app. \`features\` gom các capability nghiệp vụ. \`shared\` chứa UI và utility tái sử dụng nhưng không sở hữu workflow nghiệp vụ.

Với feature projects:

- Route lazy load các project page.
- \`ProjectApi\` sở hữu HTTP calls.
- Page component điều phối data loading và route state.
- Component nhỏ hơn render list, form và action.
- Reactive forms xử lý validation.
- Guards bảo vệ route khi cần authentication.
- Tests bao phủ service, validation form và behavior quan trọng của page.

Cấu trúc này không phải cấu trúc đúng duy nhất, nhưng nó thể hiện tư duy Angular: boundary rõ, dependency explicit và feature có thể lớn lên mà không biến thành một component khổng lồ.

## Lỗi thường gặp

- **Xem Angular như một rendering library nhỏ.** Angular hiệu quả nhất khi dùng kiến trúc của nó có chủ đích: routing, DI, forms, services và tooling.
- **Đặt quá nhiều logic trong component.** Component nên điều phối UI, không nên đồng thời là data access layer, validation engine và business service.
- **Dùng service như thùng chứa global.** Service nên có trách nhiệm rõ. Một \`AppService\` khổng lồ thường là dấu hiệu thiếu boundary.
- **Chọn template-driven forms cho workflow phức tạp.** Chúng ổn với form đơn giản, nhưng form lớn thường cần reactive model.
- **Bỏ qua RxJS thay vì học kỹ.** Signals giảm một phần độ phức tạp state, nhưng Angular vẫn dùng observable nhiều cho HTTP và async workflow.
- **Tạo guard trùng với backend security.** Guard cải thiện UX, nhưng backend API vẫn phải enforce authorization.
- **Không viết test vì Angular đã có cấu trúc.** Cấu trúc giúp ích, nhưng form, service, guard và component vẫn cần test.
- **Không cập nhật Angular thường xuyên.** Angular có tooling update, và cập nhật đều giúp giảm rủi ro bảo mật và migration.

## Best practices

- Ưu tiên standalone components và feature-level route files cho code mới.
- Giữ component đủ nhỏ để hiểu mà không phải lần qua quá nhiều trách nhiệm.
- Dùng signals cho local UI state và derived view state.
- Dùng services cho API access, domain operation, cross-cutting behavior và feature state.
- Ưu tiên reactive forms cho business form phức tạp.
- Giữ route guards tập trung vào quyết định navigation.
- Dùng lazy loading cho feature pages.
- Giữ shared module hoặc shared folder thật sự là shared; không đặt code riêng của feature vào đó.
- Dùng typed HTTP DTOs, rồi map payload bên ngoài thành application model khi rule quan trọng.
- Thêm tests cho validators, services, guards và behavior component quan trọng.
- Đo performance bằng build thật và browser tools thay vì đoán.

## Khi nào nên dùng và khi nào nên tránh

Dùng Angular khi ứng dụng đủ lớn để hưởng lợi từ cấu trúc: dashboard, admin system, internal tool, enterprise workflow, multi-page SPA, sản phẩm có form phức tạp và team cần tính nhất quán. Angular đặc biệt mạnh khi team muốn một full framework có lời giải chính thức cho routing, forms, HTTP, DI, testing, updates và production builds.

Tránh Angular khi project chỉ là widget nhỏ, landing page gần như static hoặc prototype cần tốc độ thử nghiệm cao hơn cấu trúc framework. Cũng nên tránh nếu team muốn tự ghép kiến trúc từ nhiều thư viện nhỏ. Sức mạnh của Angular là convention; nếu team liên tục chống lại convention, framework sẽ tạo cảm giác nặng.

Trade-off khá rõ: Angular yêu cầu bạn học model của nó, nhưng đổi lại nó cho bạn một model hoàn chỉnh. Điều này có giá trị khi maintainability quan trọng hơn setup tối giản.

## Tóm tắt

Angular là framework nghiêm túc cho frontend application nghiêm túc. Nó không phải lựa chọn nhẹ nhất, và cũng không cố trở thành lựa chọn nhẹ nhất. Giá trị của Angular nằm ở sự kết hợp giữa TypeScript, components, templates, signals, DI, routing, forms, HTTP, testing, CLI tooling và production practices.

Các ý chính:

- Dùng Angular khi cấu trúc và maintainability dài hạn quan trọng.
- Xem components, services, routes và forms như boundary kiến trúc.
- Học signals, nhưng không bỏ qua RxJS và HTTP observables.
- Ưu tiên reactive forms cho workflow phức tạp.
- Dùng lazy routes và feature boundaries để kiểm soát ứng dụng lớn.
- Test các behavior có rủi ro nghiệp vụ.
- Cập nhật Angular đều và tận dụng tooling chính thức cho migration.`,category:"frameworks",tags:["Angular","TypeScript","Frontend","Signals","Architecture"],date:"2026-06-23",readTime:"10 min",readTimeVi:"9 phút",featured:!0},CP={id:"oracle-database-practical-guide",title:"Oracle Database Practical Guide for Application Developers",titleVi:"Hướng dẫn Oracle Database thực tế cho lập trình viên ứng dụng",excerpt:"A serious practical guide to Oracle Database: architecture, SQL, PL/SQL, transactions, indexing, performance, security, backup, multitenant design, and production trade-offs.",excerptVi:"Hướng dẫn Oracle Database thực tế và nghiêm túc: kiến trúc, SQL, PL/SQL, transaction, indexing, performance, security, backup, multitenant và các trade-off trong production.",content:`# Oracle Database Practical Guide for Application Developers

Oracle Database is a mature relational and object-relational database platform used in systems where data consistency, transaction integrity, security, availability, and long-term maintainability matter. It is common in banking, insurance, ERP, government systems, large enterprise applications, data warehouses, and mixed workloads where many applications depend on the same critical data.

For an application developer, learning Oracle is not only learning SQL syntax. It means understanding how Oracle stores data, how transactions work, how the optimizer chooses execution plans, how indexes help or hurt, how PL/SQL fits into application design, and why operational concerns such as backup, recovery, privileges, and schema design must be considered early.

Oracle can feel large because it is large. The right way to learn it is not to memorize every feature. The right way is to understand the core model, use the database deliberately, and know which features solve real production problems.

## What problem does this solve?

Most applications eventually become data problems. The UI may change, frameworks may change, and services may be rewritten, but business data must remain correct. Oracle Database is designed for systems where correctness and controlled access are more important than quick prototypes.

Oracle helps solve several hard problems:

- **Consistent transactions:** multiple statements can succeed or fail as one unit.
- **Concurrent access:** many users can read and write data without corrupting each other's work.
- **Data integrity:** constraints, keys, triggers, and schemas protect business rules.
- **Performance at scale:** indexes, partitioning, optimizer statistics, execution plans, materialized views, and tuning tools help large datasets remain usable.
- **Security and governance:** users, roles, privileges, auditing, encryption, and data masking support controlled access.
- **Operational reliability:** backup, recovery, Data Guard, high availability, and multitenant architecture support production systems.
- **Database-side logic:** PL/SQL packages, procedures, functions, and triggers can keep certain rules close to the data.

The value is not that every project needs every Oracle feature. The value is that Oracle gives serious teams a deep toolbox when data becomes business-critical.

## Core concepts

### Database, instance, schema, and objects

Oracle separates logical structures from physical storage. A database contains files on disk. An instance is the memory structures and background processes that manage those files. Application developers do not need to administer every process, but they should understand that Oracle is not just a folder of tables. It is a server with memory, processes, redo logs, control files, data files, and recovery mechanisms.

A **schema** is a collection of objects owned by a database user. Tables, indexes, views, sequences, packages, procedures, functions, and triggers are common schema objects. This matters because permissions, naming, deployment, and application ownership often happen at the schema level.

Good schema design starts with business meaning:

- Tables represent entities or relationships.
- Primary keys identify rows.
- Foreign keys protect relationships.
- Unique constraints prevent duplicate business facts.
- Not-null constraints protect required data.
- Check constraints enforce simple rules close to the data.

If the application is the only place that enforces important rules, data can become inconsistent when another job, script, integration, or admin operation writes to the same tables.

### SQL is declarative

Oracle SQL describes what data is needed, not exactly how to retrieve it. The optimizer chooses an execution plan based on statistics, indexes, predicates, joins, and available access paths. This is why two SQL statements that look similar can have very different performance.

Developers should become comfortable with:

- \`SELECT\`, \`JOIN\`, \`WHERE\`, \`GROUP BY\`, \`ORDER BY\`
- \`INSERT\`, \`UPDATE\`, \`DELETE\`, \`MERGE\`
- Constraints and indexes
- Views and materialized views
- Execution plans and optimizer statistics
- Transaction control with \`COMMIT\` and \`ROLLBACK\`

SQL skill matters because the database can often solve a data problem more safely and efficiently than application code that loads too many rows and processes them in memory.

### Transactions and read consistency

A transaction is a logical unit of work. In Oracle, changes become visible to other sessions only after commit. If something fails, rollback can undo the uncommitted work. This is fundamental for business workflows such as transferring money, reserving inventory, approving payments, or updating account status.

Oracle also provides read consistency. A query sees a consistent view of committed data for a point in time. This helps readers and writers work concurrently without every read blocking every write. Developers still need to design carefully around lost updates, long transactions, retry behavior, and isolation requirements.

Practical rules:

- Keep transactions as short as possible.
- Do not wait for user input while holding a transaction open.
- Commit at business boundaries, not after every statement.
- Handle unique constraint and foreign key errors as real business outcomes.
- Avoid hiding commits inside low-level procedures unless that procedure truly owns the whole unit of work.

### PL/SQL is database-side application logic

PL/SQL is Oracle's procedural extension to SQL. It supports variables, control flow, exceptions, procedures, functions, packages, triggers, and more. PL/SQL is powerful because it runs close to the data and can group related SQL operations into a controlled unit.

Use PL/SQL when logic is strongly data-centric, performance benefits from running near the data, or several applications need the same database operation. Avoid putting all business logic in PL/SQL by default if the domain logic belongs in application services, needs modern application testing workflows, or must integrate heavily with external APIs.

The most maintainable PL/SQL is usually packaged, named clearly, and treated like production code: versioned, reviewed, tested, and deployed through migrations.

### Indexes are access paths, not magic

An index can make reads faster, but it is not free. Indexes consume storage and add overhead to inserts, updates, and deletes. A useful index matches real query patterns: filtering columns, join columns, ordering needs, and selectivity.

Bad indexing often comes from guessing. Good indexing comes from observing actual SQL, reading execution plans, and understanding data distribution.

Common Oracle index considerations:

- B-tree indexes are common for selective lookups and ranges.
- Composite indexes should follow query predicates and ordering patterns.
- Function-based indexes can help when queries apply functions consistently.
- Bitmap indexes can be useful in data warehouse scenarios but are usually dangerous for high-concurrency OLTP writes.
- Indexing every foreign key can help locking and join performance, but should still be reviewed with workload context.

### Performance is a workflow

Oracle performance tuning is not "add an index and hope." A professional workflow looks like this:

1. Identify the slow business operation.
2. Find the SQL statements involved.
3. Check the execution plan.
4. Check row counts, predicates, joins, and indexes.
5. Confirm optimizer statistics are current.
6. Test a focused change.
7. Measure again with realistic data.

The biggest performance mistakes are often application mistakes: fetching too much data, running queries in loops, missing pagination, using leading wildcard searches, committing too often, or making a chatty service call for every row.

### Multitenant architecture

Modern Oracle uses a multitenant architecture with container databases (CDBs) and pluggable databases (PDBs). A PDB appears to applications as a separate database while being managed inside a CDB. For developers, the important idea is that application schemas often live inside a PDB, while DBAs manage broader infrastructure at the CDB level.

Multitenant architecture helps with consolidation, isolation, cloning, patching, and lifecycle management. Application teams should still understand which PDB they connect to, how connection strings are configured, and how migrations are applied per environment.

### Newer Oracle capabilities

Oracle Database has expanded beyond traditional relational workloads. Current Oracle AI Database documentation includes areas such as JSON support, graph capabilities, spatial features, and AI Vector Search. These features can be useful when an application needs mixed structured and semi-structured data or semantic search near enterprise data.

Still, new features should be adopted for a real use case. Vector search, JSON duality, or in-database AI features should solve a concrete product problem, not become architecture decoration.

## Practical example

Consider an order system. A weak design stores orders without constraints and expects the application to prevent every invalid state. A stronger Oracle design lets the database protect important facts.

\`\`\`text
CREATE TABLE customers (
  customer_id NUMBER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  email VARCHAR2(320) NOT NULL,
  full_name VARCHAR2(200) NOT NULL,
  created_at TIMESTAMP DEFAULT SYSTIMESTAMP NOT NULL,
  CONSTRAINT uq_customers_email UNIQUE (email)
);

CREATE TABLE orders (
  order_id NUMBER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  customer_id NUMBER NOT NULL,
  status VARCHAR2(30) NOT NULL,
  total_amount NUMBER(12, 2) NOT NULL,
  created_at TIMESTAMP DEFAULT SYSTIMESTAMP NOT NULL,
  CONSTRAINT fk_orders_customer
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id),
  CONSTRAINT ck_orders_status
    CHECK (status IN ('PENDING', 'PAID', 'CANCELLED')),
  CONSTRAINT ck_orders_total
    CHECK (total_amount >= 0)
);

CREATE INDEX ix_orders_customer_created
  ON orders (customer_id, created_at DESC);
\`\`\`

This schema does several important things:

- It prevents customers without emails.
- It prevents duplicate customer emails.
- It prevents orders without a valid customer.
- It restricts order status to known values.
- It prevents negative totals.
- It supports a common query: recent orders for a customer.

A transactional workflow can then update the order safely:

\`\`\`text
UPDATE orders
SET status = 'PAID'
WHERE order_id = :order_id
  AND status = 'PENDING';

INSERT INTO payment_events (order_id, event_type, created_at)
VALUES (:order_id, 'PAYMENT_CAPTURED', SYSTIMESTAMP);

COMMIT;
\`\`\`

In a real application, you would check affected row counts, handle constraint errors, and rollback on failure. The key idea is that the database and application cooperate. The application owns the workflow. The database protects facts that must never be invalid.

## Common mistakes

- **Treating Oracle like generic SQL only.** Standard SQL knowledge helps, but Oracle has its own optimizer behavior, data types, PL/SQL model, locking behavior, and operational concepts.
- **Ignoring constraints.** If important rules exist only in application code, data can be corrupted by scripts, imports, jobs, and integrations.
- **Committing too often.** Commit at meaningful business boundaries. Excessive commits make workflows harder to reason about.
- **Leaving transactions open too long.** Long transactions increase undo pressure, locking problems, and operational risk.
- **Adding indexes without workload evidence.** Every index has write and storage cost.
- **Using functions on indexed columns accidentally.** Expressions can prevent normal index usage unless a function-based index is designed intentionally.
- **Building SQL dynamically without bind variables.** This can hurt performance and increase security risk.
- **Putting too much logic in triggers.** Triggers can hide behavior and make changes difficult to reason about.
- **Skipping execution plans.** Without plans, query tuning becomes guessing.
- **Ignoring backup and recovery until production.** Recovery is not a DBA-only concern when application data is business-critical.

## Best practices

- Model schemas around business rules, not only current screens.
- Use primary keys, foreign keys, unique constraints, not-null constraints, and check constraints deliberately.
- Use bind variables in application queries.
- Keep transactions short and explicit.
- Treat PL/SQL packages as versioned application code.
- Review execution plans for important queries.
- Add indexes based on query patterns, not assumptions.
- Keep optimizer statistics current through the appropriate database maintenance process.
- Use least privilege: application users should have only the permissions they need.
- Separate schema ownership, application runtime users, and administrative users.
- Plan migrations with rollback, data volume, locking impact, and deployment windows in mind.
- Test with realistic data volume before trusting performance.
- Document backup, restore, and recovery expectations for important applications.

## When to use and when to avoid

Use Oracle Database when the application needs strong consistency, complex relational data, mature transaction handling, enterprise security, high availability, advanced performance tooling, and long-term operational support. It fits systems where data is valuable, regulated, shared by many applications, or expected to live for years.

Oracle is also a strong choice when an organization already has Oracle expertise, licensing, infrastructure, monitoring, backup strategy, and operational processes. In that environment, using Oracle can reduce platform risk because the team knows how to operate it.

Avoid Oracle when the project is a small prototype, a low-budget side project, or a simple application where a lighter database is enough. Also avoid it when the team has no ability to operate, tune, secure, back up, and monitor the database. Oracle is powerful, but that power comes with complexity, licensing considerations, and operational responsibility.

The trade-off is straightforward: Oracle gives deep database capabilities, but it expects disciplined design and operations. If a team treats it casually, the system can become expensive and hard to maintain.

## Summary

Oracle Database is not just a place to store rows. It is a large data platform for transactional integrity, concurrency, security, performance, recovery, and enterprise operations. Application developers do not need to become DBAs overnight, but they should understand the database well enough to design safe schemas, write efficient SQL, use transactions correctly, and collaborate with database specialists.

Key takeaways:

- Use constraints to protect business facts.
- Understand transactions, commits, rollbacks, locks, and read consistency.
- Learn Oracle SQL and PL/SQL where they solve real problems.
- Tune with execution plans and real workload evidence.
- Design indexes for actual queries.
- Keep security and least privilege in mind from the beginning.
- Treat backup, recovery, and migrations as part of application quality.
- Choose Oracle when the data problem justifies a serious database platform.`,contentVi:`# Hướng dẫn Oracle Database thực tế cho lập trình viên ứng dụng

Oracle Database là một nền tảng cơ sở dữ liệu quan hệ và object-relational đã rất trưởng thành, thường được dùng trong các hệ thống cần tính nhất quán dữ liệu, transaction integrity, bảo mật, khả năng sẵn sàng cao và khả năng bảo trì lâu dài. Oracle xuất hiện nhiều trong ngân hàng, bảo hiểm, ERP, hệ thống nhà nước, ứng dụng enterprise lớn, data warehouse và các workload hỗn hợp nơi nhiều ứng dụng phụ thuộc vào cùng một nguồn dữ liệu quan trọng.

Với lập trình viên ứng dụng, học Oracle không chỉ là học cú pháp SQL. Bạn cần hiểu Oracle lưu dữ liệu như thế nào, transaction hoạt động ra sao, optimizer chọn execution plan thế nào, index giúp hoặc gây hại trong trường hợp nào, PL/SQL nên đặt ở đâu trong thiết kế ứng dụng, và vì sao backup, recovery, privilege, schema design phải được nghĩ đến từ sớm.

Oracle có cảm giác lớn vì nó thực sự lớn. Cách học đúng không phải là cố nhớ mọi feature. Cách học đúng là hiểu mô hình cốt lõi, dùng database có chủ đích và biết feature nào giải quyết vấn đề production thật.

## Chủ đề này giải quyết vấn đề gì?

Phần lớn ứng dụng cuối cùng đều trở thành bài toán dữ liệu. UI có thể thay đổi, framework có thể thay đổi, service có thể viết lại, nhưng dữ liệu nghiệp vụ phải đúng. Oracle Database được thiết kế cho các hệ thống nơi tính đúng đắn và quyền truy cập có kiểm soát quan trọng hơn việc tạo prototype thật nhanh.

Oracle giúp giải quyết nhiều vấn đề khó:

- **Transaction nhất quán:** nhiều statement có thể thành công hoặc thất bại như một đơn vị.
- **Truy cập đồng thời:** nhiều user có thể đọc và ghi mà không phá dữ liệu của nhau.
- **Data integrity:** constraints, keys, triggers và schemas bảo vệ rule nghiệp vụ.
- **Performance ở quy mô lớn:** indexes, partitioning, optimizer statistics, execution plans, materialized views và tuning tools giúp dataset lớn vẫn dùng được.
- **Security và governance:** users, roles, privileges, auditing, encryption và data masking hỗ trợ kiểm soát truy cập.
- **Độ tin cậy vận hành:** backup, recovery, Data Guard, high availability và multitenant architecture hỗ trợ production systems.
- **Logic phía database:** PL/SQL packages, procedures, functions và triggers có thể giữ một số rule gần dữ liệu.

Giá trị không nằm ở việc mọi project đều cần mọi feature của Oracle. Giá trị là Oracle cho team nghiêm túc một bộ công cụ sâu khi dữ liệu trở thành tài sản quan trọng.

## Các ý tưởng cốt lõi

### Database, instance, schema và objects

Oracle tách cấu trúc logic khỏi lưu trữ vật lý. Database chứa các file trên disk. Instance là các memory structures và background processes quản lý các file đó. Lập trình viên ứng dụng không cần quản trị mọi process, nhưng nên hiểu Oracle không chỉ là một thư mục chứa table. Nó là một server có memory, process, redo log, control file, data file và cơ chế recovery.

Một **schema** là tập hợp objects thuộc sở hữu của một database user. Tables, indexes, views, sequences, packages, procedures, functions và triggers là các schema objects phổ biến. Điều này quan trọng vì permission, naming, deployment và ownership ứng dụng thường diễn ra ở tầng schema.

Schema design tốt bắt đầu từ ý nghĩa nghiệp vụ:

- Tables biểu diễn entity hoặc relationship.
- Primary keys định danh rows.
- Foreign keys bảo vệ quan hệ.
- Unique constraints ngăn business fact bị trùng.
- Not-null constraints bảo vệ dữ liệu bắt buộc.
- Check constraints ép các rule đơn giản gần dữ liệu.

Nếu ứng dụng là nơi duy nhất enforce rule quan trọng, dữ liệu có thể sai khi job, script, integration hoặc thao tác admin khác ghi vào cùng table.

### SQL là ngôn ngữ declarative

Oracle SQL mô tả dữ liệu cần lấy, không mô tả chính xác cách lấy. Optimizer chọn execution plan dựa trên statistics, indexes, predicates, joins và access paths có sẵn. Vì vậy hai câu SQL nhìn gần giống nhau có thể có performance rất khác.

Developer nên quen với:

- \`SELECT\`, \`JOIN\`, \`WHERE\`, \`GROUP BY\`, \`ORDER BY\`
- \`INSERT\`, \`UPDATE\`, \`DELETE\`, \`MERGE\`
- Constraints và indexes
- Views và materialized views
- Execution plans và optimizer statistics
- Transaction control với \`COMMIT\` và \`ROLLBACK\`

Kỹ năng SQL quan trọng vì database thường có thể giải quyết bài toán dữ liệu an toàn và hiệu quả hơn application code tải quá nhiều rows rồi xử lý trong memory.

### Transactions và read consistency

Transaction là một đơn vị công việc logic. Trong Oracle, thay đổi chỉ hiển thị với session khác sau khi commit. Nếu có lỗi, rollback có thể hoàn tác phần chưa commit. Đây là nền tảng cho các workflow như chuyển tiền, giữ tồn kho, duyệt thanh toán hoặc cập nhật trạng thái tài khoản.

Oracle cũng cung cấp read consistency. Một query nhìn thấy dữ liệu committed nhất quán tại một thời điểm. Điều này giúp reader và writer chạy đồng thời mà không phải mọi read đều block mọi write. Developer vẫn cần thiết kế cẩn thận quanh lost updates, transaction dài, retry behavior và isolation requirements.

Nguyên tắc thực tế:

- Giữ transaction ngắn nhất có thể.
- Không chờ input người dùng khi transaction đang mở.
- Commit tại business boundary, không commit sau mọi statement.
- Xử lý lỗi unique constraint và foreign key như outcome nghiệp vụ thật.
- Tránh giấu commit trong procedure cấp thấp trừ khi procedure đó thật sự sở hữu toàn bộ unit of work.

### PL/SQL là logic ứng dụng phía database

PL/SQL là phần mở rộng procedural của Oracle SQL. Nó hỗ trợ biến, control flow, exceptions, procedures, functions, packages, triggers và nhiều khả năng khác. PL/SQL mạnh vì chạy gần dữ liệu và có thể gom nhiều SQL operations liên quan vào một đơn vị có kiểm soát.

Dùng PL/SQL khi logic rất data-centric, performance hưởng lợi từ việc chạy gần dữ liệu hoặc nhiều ứng dụng cần dùng chung một operation ở database. Tránh đặt toàn bộ business logic vào PL/SQL theo mặc định nếu domain logic thuộc về application services, cần workflow testing hiện đại hoặc phải tích hợp nhiều với external APIs.

PL/SQL dễ bảo trì nhất thường được đóng gói trong package, đặt tên rõ ràng và được xem như production code: có version, review, test và deploy qua migrations.

### Indexes là access paths, không phải phép màu

Index có thể làm read nhanh hơn, nhưng không miễn phí. Index tốn storage và làm tăng overhead cho insert, update, delete. Một index hữu ích phải khớp với query pattern thật: filtering columns, join columns, ordering needs và selectivity.

Indexing tệ thường đến từ đoán mò. Indexing tốt đến từ quan sát SQL thật, đọc execution plan và hiểu phân bố dữ liệu.

Một số điểm cần nhớ về Oracle index:

- B-tree indexes phổ biến cho lookup chọn lọc và range queries.
- Composite indexes nên đi theo predicates và ordering pattern của query.
- Function-based indexes hữu ích khi query áp dụng function một cách nhất quán.
- Bitmap indexes có thể hợp với data warehouse nhưng thường nguy hiểm cho OLTP write concurrency cao.
- Index foreign key thường giúp locking và join performance, nhưng vẫn cần review theo workload.

### Performance là một workflow

Tuning Oracle không phải là "thêm index rồi hy vọng". Một workflow chuyên nghiệp thường là:

1. Xác định business operation chậm.
2. Tìm các SQL statements liên quan.
3. Kiểm tra execution plan.
4. Kiểm tra row counts, predicates, joins và indexes.
5. Xác nhận optimizer statistics còn phù hợp.
6. Thử một thay đổi có trọng tâm.
7. Đo lại với dữ liệu thực tế.

Các lỗi performance lớn thường là lỗi ở application: fetch quá nhiều dữ liệu, chạy query trong vòng lặp, thiếu pagination, dùng leading wildcard search, commit quá thường xuyên hoặc gọi service quá nhiều lần cho từng row.

### Multitenant architecture

Oracle hiện đại dùng kiến trúc multitenant với container databases (CDBs) và pluggable databases (PDBs). Một PDB xuất hiện với ứng dụng như một database riêng nhưng được quản lý bên trong CDB. Với developer, ý quan trọng là application schemas thường nằm trong PDB, còn DBA quản lý hạ tầng rộng hơn ở tầng CDB.

Multitenant architecture giúp consolidation, isolation, cloning, patching và lifecycle management. Team ứng dụng vẫn nên hiểu mình connect tới PDB nào, connection string được cấu hình ra sao và migrations được áp dụng thế nào ở từng môi trường.

### Các khả năng mới hơn của Oracle

Oracle Database đã mở rộng vượt ra ngoài workload quan hệ truyền thống. Tài liệu Oracle AI Database hiện tại bao gồm các mảng như JSON support, graph capabilities, spatial features và AI Vector Search. Những feature này có thể hữu ích khi ứng dụng cần kết hợp dữ liệu có cấu trúc, bán cấu trúc hoặc semantic search gần dữ liệu enterprise.

Tuy vậy, feature mới nên được dùng vì có use case thật. Vector search, JSON duality hoặc in-database AI features nên giải quyết một vấn đề sản phẩm cụ thể, không nên trở thành trang trí kiến trúc.

## Ví dụ thực tế

Hãy xét một hệ thống đơn hàng. Thiết kế yếu lưu orders mà thiếu constraints và kỳ vọng application tự ngăn mọi trạng thái sai. Thiết kế Oracle tốt hơn để database bảo vệ các sự thật quan trọng.

\`\`\`text
CREATE TABLE customers (
  customer_id NUMBER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  email VARCHAR2(320) NOT NULL,
  full_name VARCHAR2(200) NOT NULL,
  created_at TIMESTAMP DEFAULT SYSTIMESTAMP NOT NULL,
  CONSTRAINT uq_customers_email UNIQUE (email)
);

CREATE TABLE orders (
  order_id NUMBER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  customer_id NUMBER NOT NULL,
  status VARCHAR2(30) NOT NULL,
  total_amount NUMBER(12, 2) NOT NULL,
  created_at TIMESTAMP DEFAULT SYSTIMESTAMP NOT NULL,
  CONSTRAINT fk_orders_customer
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id),
  CONSTRAINT ck_orders_status
    CHECK (status IN ('PENDING', 'PAID', 'CANCELLED')),
  CONSTRAINT ck_orders_total
    CHECK (total_amount >= 0)
);

CREATE INDEX ix_orders_customer_created
  ON orders (customer_id, created_at DESC);
\`\`\`

Schema này làm được nhiều việc quan trọng:

- Ngăn customer thiếu email.
- Ngăn email customer bị trùng.
- Ngăn order không có customer hợp lệ.
- Giới hạn status vào các giá trị đã biết.
- Ngăn total âm.
- Hỗ trợ query phổ biến: các order gần đây của một customer.

Một workflow transaction có thể cập nhật order an toàn:

\`\`\`text
UPDATE orders
SET status = 'PAID'
WHERE order_id = :order_id
  AND status = 'PENDING';

INSERT INTO payment_events (order_id, event_type, created_at)
VALUES (:order_id, 'PAYMENT_CAPTURED', SYSTIMESTAMP);

COMMIT;
\`\`\`

Trong ứng dụng thật, bạn cần kiểm tra số row bị ảnh hưởng, xử lý constraint errors và rollback khi lỗi. Ý chính là database và application phối hợp với nhau. Application sở hữu workflow. Database bảo vệ các sự thật không bao giờ được sai.

## Lỗi thường gặp

- **Xem Oracle như SQL chung chung.** Kiến thức SQL chuẩn hữu ích, nhưng Oracle có optimizer behavior, data types, PL/SQL model, locking behavior và operational concepts riêng.
- **Bỏ qua constraints.** Nếu rule quan trọng chỉ nằm trong application code, dữ liệu có thể bị phá bởi script, import, job và integration.
- **Commit quá thường xuyên.** Commit tại business boundary có ý nghĩa. Commit quá nhiều làm workflow khó reasoning.
- **Để transaction mở quá lâu.** Transaction dài tăng undo pressure, locking problems và rủi ro vận hành.
- **Thêm index không dựa trên workload.** Mọi index đều có chi phí write và storage.
- **Vô tình dùng function trên indexed columns.** Expression có thể làm index thường không được dùng, trừ khi thiết kế function-based index có chủ đích.
- **Tạo SQL động mà không dùng bind variables.** Điều này có thể làm giảm performance và tăng rủi ro bảo mật.
- **Đặt quá nhiều logic trong triggers.** Trigger có thể giấu behavior và làm thay đổi khó reasoning.
- **Không xem execution plan.** Không có plan thì tuning query chỉ là đoán.
- **Đợi đến production mới nghĩ backup và recovery.** Recovery không chỉ là việc của DBA khi dữ liệu ứng dụng là tài sản nghiệp vụ.

## Best practices

- Model schema theo business rules, không chỉ theo màn hình hiện tại.
- Dùng primary keys, foreign keys, unique constraints, not-null constraints và check constraints có chủ đích.
- Dùng bind variables trong application queries.
- Giữ transaction ngắn và explicit.
- Xem PL/SQL packages như application code có version.
- Review execution plans cho query quan trọng.
- Thêm indexes dựa trên query patterns, không dựa trên giả định.
- Giữ optimizer statistics cập nhật bằng quy trình maintenance phù hợp.
- Dùng least privilege: application users chỉ nên có quyền thật sự cần.
- Tách schema owner, application runtime user và administrative users.
- Lên kế hoạch migration với rollback, data volume, locking impact và deployment window.
- Test với data volume thực tế trước khi tin performance.
- Document kỳ vọng backup, restore và recovery cho ứng dụng quan trọng.

## Khi nào nên dùng và khi nào nên tránh

Dùng Oracle Database khi ứng dụng cần strong consistency, dữ liệu quan hệ phức tạp, transaction handling trưởng thành, enterprise security, high availability, tooling performance nâng cao và support vận hành lâu dài. Oracle phù hợp với hệ thống nơi dữ liệu có giá trị cao, chịu quy định, được chia sẻ bởi nhiều ứng dụng hoặc dự kiến tồn tại nhiều năm.

Oracle cũng là lựa chọn mạnh khi tổ chức đã có Oracle expertise, licensing, infrastructure, monitoring, backup strategy và operational processes. Trong môi trường đó, dùng Oracle có thể giảm platform risk vì team biết cách vận hành nó.

Tránh Oracle khi project là prototype nhỏ, side project ngân sách thấp hoặc ứng dụng đơn giản nơi database nhẹ hơn đã đủ. Cũng nên tránh nếu team không có khả năng vận hành, tuning, bảo mật, backup và monitor database. Oracle mạnh, nhưng sức mạnh đó đi kèm complexity, licensing considerations và trách nhiệm vận hành.

Trade-off khá rõ: Oracle cung cấp năng lực database rất sâu, nhưng đòi hỏi thiết kế và vận hành có kỷ luật. Nếu team dùng nó một cách tùy tiện, hệ thống có thể trở nên đắt đỏ và khó bảo trì.

## Tóm tắt

Oracle Database không chỉ là nơi lưu rows. Nó là một data platform lớn cho transactional integrity, concurrency, security, performance, recovery và enterprise operations. Application developer không cần trở thành DBA ngay lập tức, nhưng nên hiểu database đủ tốt để thiết kế schema an toàn, viết SQL hiệu quả, dùng transaction đúng và phối hợp tốt với database specialists.

Các ý chính:

- Dùng constraints để bảo vệ business facts.
- Hiểu transactions, commits, rollbacks, locks và read consistency.
- Học Oracle SQL và PL/SQL khi chúng giải quyết vấn đề thật.
- Tune bằng execution plans và bằng chứng từ workload thật.
- Thiết kế indexes theo query thực tế.
- Nghĩ về security và least privilege ngay từ đầu.
- Xem backup, recovery và migrations là một phần của chất lượng ứng dụng.
- Chọn Oracle khi bài toán dữ liệu xứng đáng với một database platform nghiêm túc.`,category:"practices",tags:["Oracle","Database","SQL","PL/SQL","Performance"],date:"2026-06-23",readTime:"11 min",readTimeVi:"9 phút",featured:!0},Tv=(e,t)=>({...e,title:t==="vi"?e.titleVi??e.title:e.title,excerpt:t==="vi"?e.excerptVi??e.excerpt:e.excerpt,content:t==="vi"?e.contentVi??e.content:e.content,readTime:t==="vi"?e.readTimeVi??e.readTime:e.readTime}),lc=[CP,TP,ZS,eP,tP,nP,rP,iP,aP,oP,sP,cP,lP,hP,uP,dP,pP,gP,mP,fP,yP,vP,bP,wP,xP,kP,HS,GS,WS,$S,KS,QS,YS,XS,JS],SP="https://script.google.com/macros/s/AKfycbyREb0-NhaBcMrhp6CXtA2OsKcXFJalYhvlvhN7MxmXkjU-gA1F0Wd4h3J3bLF2M-ZO8w/exec";function Cv(e){const t=new URL(SP);return Object.entries(e).forEach(([n,r])=>t.searchParams.set(n,r)),t.searchParams.set("t",String(Date.now())),t.toString()}function PP(e){return typeof Image>"u"?Promise.resolve():new Promise(t=>{const n=new Image;n.onload=()=>t(),n.onerror=()=>t(),n.src=Cv({action:"collect",slug:e})})}function Sv(e){return typeof window>"u"||typeof document>"u"?Promise.resolve(0):new Promise(t=>{const n=`__views_cb_${Math.random().toString(36).slice(2)}`,r=Cv({action:"views",slug:e,callback:n}),i=window;i[n]=s=>{try{t(Number((s==null?void 0:s.views)??0))}finally{delete i[n],a.remove()}};const a=document.createElement("script");a.src=r,a.onerror=()=>{delete i[n],a.remove(),t(0)},document.body.appendChild(a)})}const AP=3e4;let mr=null,Sh=0;const Yp=e=>e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/đ/g,"d").replace(/Đ/g,"d").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,""),Xp=async(e=!1)=>{const t=Date.now();if(!e&&mr&&t-Sh<AP)return mr;const n=await Promise.all(lc.map(async r=>[r.id,await Sv(r.id)]));return mr=Object.fromEntries(n),Sh=t,mr},NP=(e,t)=>Number(e[t]??0),Ph=(e={})=>lc.map(t=>({...t,viewCount:NP(e,t.id)})),IP=(e,t)=>{const n=lc.filter(r=>r.category===e.id).length;return{id:e.id,name:e.name,slug:e.id,description:e.description,color:e.color,sortOrder:t+1,isActive:!0,postCount:n}},jP=()=>{const e=new Map;return lc.forEach(t=>{t.tags.forEach(n=>e.set(n,(e.get(n)??0)+1))}),Array.from(e.entries()).sort(([t],[n])=>t.localeCompare(n)).map(([t,n])=>({id:Yp(t),name:t,slug:Yp(t),postCount:n}))},Pv=(e,t)=>{var n;return{id:e.id,title:t==="vi"?e.titleVi??e.title:e.title,titleVi:e.titleVi??void 0,slug:e.id,date:e.date,category:e.category,excerpt:t==="vi"?e.excerptVi??e.excerpt:e.excerpt,excerptVi:e.excerptVi??void 0,categorySlug:e.category,categoryName:((n=sc.find(r=>r.id===e.category))==null?void 0:n.name)??e.category,tags:e.tags,coverImageUrl:void 0,featured:!!e.featured,readTime:t==="vi"?e.readTimeVi??e.readTime:e.readTime,readTimeVi:e.readTimeVi??void 0,readTimeMinutes:Number.parseInt(e.readTime,10)||Number.parseInt(e.readTimeVi??e.readTime,10)||5,viewCount:e.viewCount,publishedAt:e.date,createdAt:e.date,updatedAt:e.date,status:"Published"}},EP=(e,t)=>({...Pv(e,t),content:t==="vi"?e.contentVi??e.content:e.content,contentVi:e.contentVi??void 0}),RP=(e,t)=>Ph(t).map(n=>Pv(n,e)),cn={hasBackend:!1,getCachedPost(e){const t=Ph(mr??{}).find(n=>n.id===e);return t?{...t,...Tv(t,"en")}:void 0},async getPosts(e,t={}){const n=await Xp(),r=RP(e,n).filter(i=>t.featured===void 0?!0:i.featured===t.featured);return r.slice(0,t.pageSize??r.length)},async getPost(e,t){const n=await Xp(),r=Ph(n).find(i=>i.id===e);return r?EP(r,t):null},async incrementView(e){await PP(e);const t=await Sv(e);return mr={...mr??{},[e]:t},Sh=Date.now(),{slug:e,viewCount:t}},async getCategories(){return sc.map(IP)},async getTags(){return jP()}},Wu=({className:e,label:t="Loading"})=>o.jsx("div",{className:mt("flex min-h-56 items-center justify-center rounded-2xl border border-border/60 bg-card/70",e),"aria-busy":"true","aria-live":"polite",children:o.jsxs("div",{className:"flex items-center gap-3 text-sm text-muted-foreground",children:[o.jsx(yy,{className:"h-5 w-5 animate-spin text-primary"}),o.jsx("span",{children:t})]})}),LP=()=>{const{t:e,locale:t,language:n}=Le(),r=tr(),[i,a]=m.useState([]),[s,c]=m.useState(!0),l=h=>sc.some(u=>u.id===h)?e(`category.${h}`):h;return m.useEffect(()=>{let h=!1;return(async()=>{c(!0);const d=await cn.getPosts(n,{featured:!0,pageSize:3});h||(a(d.slice(0,3)),c(!1))})().catch(()=>{h||c(!1)}),()=>{h=!0}},[n]),o.jsx(Ee.section,{className:"border-b border-border/70 py-20 md:py-28",variants:r?void 0:cc,initial:r?!1:"hidden",whileInView:"visible",viewport:Li,children:o.jsxs("div",{className:"container mx-auto px-4",children:[o.jsxs("div",{className:"mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end",children:[o.jsxs("div",{children:[o.jsx("p",{className:"eyebrow mb-4",children:e("home.notes.eyebrow")}),o.jsxs("h2",{className:"text-4xl md:text-6xl",children:[e("home.notes.title1"),o.jsx("br",{}),o.jsx("span",{className:"text-muted-foreground",children:e("home.notes.title2")})]})]}),o.jsxs(fe,{to:"/blog",className:"inline-flex items-center gap-2 font-mono text-xs text-primary",children:[e("home.notes.all")," ",o.jsx(xs,{className:"h-4 w-4"})]})]}),s?o.jsx(Wu,{className:"min-h-[28rem]",label:n==="vi"?"Đang tải":"Loading"}):o.jsx(Ee.div,{className:"grid gap-4 lg:grid-cols-[1.2fr_.8fr]",variants:r?void 0:Ei,children:i.map((h,u)=>o.jsxs(Ee.article,{variants:r?void 0:Ri,className:`group journal-card p-6 md:p-8 ${u===0?"lg:row-span-2":""}`,children:[o.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 border-b border-border/70 pb-5 font-mono text-xs uppercase tracking-[.14em] text-muted-foreground",children:[o.jsxs("span",{className:"text-primary",children:["Note / 0",u+1]}),o.jsx("span",{children:l(h.category)})]}),o.jsx(fe,{to:`/blog/${h.id}`,className:"block",children:o.jsx("h3",{className:`mt-8 transition-colors group-hover:text-primary ${u===0?"max-w-2xl text-3xl md:text-5xl":"text-2xl"}`,children:h.title})}),o.jsx("p",{className:`mt-4 leading-relaxed text-muted-foreground ${u===0?"max-w-2xl text-base":"text-sm"}`,children:h.excerpt}),o.jsxs("div",{className:"mt-8 flex flex-wrap items-center gap-5 border-t border-border/70 pt-5 font-mono text-xs text-muted-foreground",children:[o.jsx("span",{children:new Date(h.date).toLocaleDateString(t)}),o.jsxs("span",{className:"flex items-center gap-1.5",children:[o.jsx(Oa,{className:"h-3 w-3"}),h.readTime]}),o.jsxs("span",{className:"flex items-center gap-1.5",children:[o.jsx(ks,{className:"h-3 w-3"}),(h.viewCount??0).toLocaleString(t)]}),o.jsxs(fe,{to:`/blog/${h.id}`,className:"ml-auto flex items-center gap-1.5 text-primary",children:[e("home.notes.read")," ",o.jsx(xs,{className:"h-3 w-3"})]})]})]},h.id))})]})})},DP=Nu("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function tt({className:e,variant:t,...n}){return o.jsx("div",{className:mt(DP({variant:t}),e),...n})}const MP=()=>{const{t:e}=Le(),t=tr(),n=Ch.filter(r=>r.featured).slice(0,3);return o.jsx(Ee.section,{className:"border-b border-border/70 py-20 md:py-28",variants:t?void 0:cc,initial:t?!1:"hidden",whileInView:"visible",viewport:Li,children:o.jsxs("div",{className:"container mx-auto px-4",children:[o.jsxs("div",{className:"mb-12 grid gap-6 md:grid-cols-[1fr_.7fr] md:items-end",children:[o.jsxs("div",{children:[o.jsx("p",{className:"eyebrow mb-4",children:e("home.work.eyebrow")}),o.jsxs("h2",{className:"text-4xl md:text-6xl",children:[e("home.work.title1"),o.jsx("br",{}),o.jsx("span",{className:"text-muted-foreground",children:e("home.work.title2")})]})]}),o.jsxs("div",{className:"md:justify-self-end",children:[o.jsx("p",{className:"mb-4 max-w-md text-sm leading-relaxed text-muted-foreground",children:e("home.work.desc")}),o.jsxs(fe,{to:"/projects",className:"inline-flex items-center gap-2 font-mono text-xs text-primary",children:[e("home.work.archive")," ",o.jsx(xs,{className:"h-4 w-4"})]})]})]}),o.jsx(Ee.div,{className:"space-y-4",variants:t?void 0:Ei,children:n.map((r,i)=>o.jsxs(Ee.article,{variants:t?void 0:Ri,className:"group journal-card grid gap-0 transition-transform duration-300 hover:-translate-y-1 md:grid-cols-[110px_1fr_1fr_auto]",children:[o.jsxs("div",{className:"flex items-center border-b border-border/70 p-5 font-mono text-4xl text-primary/70 md:border-b-0 md:border-r",children:["0",i+1]}),o.jsxs("div",{className:"border-b border-border/70 p-5 md:border-b-0 md:border-r md:p-7",children:[o.jsxs("p",{className:"mb-2 font-mono text-xs uppercase tracking-[.16em] text-muted-foreground",children:[e("home.work.case")," / ",r.id]}),o.jsx("h3",{className:"text-xl transition-colors group-hover:text-primary md:text-2xl",children:r.title}),o.jsx("p",{className:"mt-3 text-sm leading-relaxed text-muted-foreground",children:r.description})]}),o.jsxs("div",{className:"border-b border-border/70 p-5 md:border-b-0 md:border-r md:p-7",children:[o.jsx("p",{className:"mb-4 font-mono text-xs uppercase tracking-[.16em] text-muted-foreground",children:e("home.work.tools")}),o.jsx("div",{className:"flex flex-wrap gap-2.5",children:r.technologies.map(a=>o.jsx(tt,{variant:"secondary",className:"min-h-8 rounded-md border border-primary/25 bg-primary/[.08] px-3 py-1.5 font-mono text-[11px] font-semibold tracking-[.04em] text-foreground shadow-sm",children:a},a))})]}),o.jsxs("div",{className:"flex items-center gap-2 p-5 md:flex-col md:justify-center",children:[r.github&&o.jsx("a",{href:r.github,target:"_blank",rel:"noreferrer","aria-label":"Source code",className:"rounded-lg border border-border p-3 text-muted-foreground transition-colors hover:border-primary hover:text-primary",children:o.jsx(Cr,{className:"h-4 w-4"})}),r.demo&&o.jsx("a",{href:r.demo,target:"_blank",rel:"noreferrer","aria-label":"Live demo",className:"rounded-lg border border-border p-3 text-muted-foreground transition-colors hover:border-primary hover:text-primary",children:o.jsx(kt,{className:"h-4 w-4"})})]})]},r.id))})]})})},qP=()=>{const{t:e}=Le(),t=tr();return o.jsxs(Yn,{children:[o.jsx(BS,{}),o.jsx(MP,{}),o.jsx(LP,{}),o.jsx(zS,{}),o.jsx(Ee.section,{className:"py-20 md:py-28",variants:t?void 0:cc,initial:t?!1:"hidden",whileInView:"visible",viewport:Li,children:o.jsx("div",{className:"container mx-auto px-4",children:o.jsxs("div",{className:"journal-card grid gap-8 p-7 md:grid-cols-[.45fr_1fr] md:p-12",children:[o.jsxs("div",{children:[o.jsx("p",{className:"eyebrow mb-4",children:e("home.principle")}),o.jsx("p",{className:"font-mono text-xs leading-relaxed text-muted-foreground",children:"build → observe → explain → improve"})]}),o.jsx("blockquote",{className:"text-2xl leading-tight md:text-4xl",children:e("home.quote")})]})})})]})},Sr=m.forwardRef(({className:e,type:t,...n},r)=>o.jsx("input",{type:t,className:mt("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",e),ref:r,...n}));Sr.displayName="Input";var el=0;function OP(){m.useEffect(()=>{const e=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",e[0]??Jp()),document.body.insertAdjacentElement("beforeend",e[1]??Jp()),el++,()=>{el===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(t=>t.remove()),el--}},[])}function Jp(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}var tl="focusScope.autoFocusOnMount",nl="focusScope.autoFocusOnUnmount",Zp={bubbles:!1,cancelable:!0},UP="FocusScope",Av=m.forwardRef((e,t)=>{const{loop:n=!1,trapped:r=!1,onMountAutoFocus:i,onUnmountAutoFocus:a,...s}=e,[c,l]=m.useState(null),h=Jt(i),u=Jt(a),d=m.useRef(null),p=at(t,b=>l(b)),v=m.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;m.useEffect(()=>{if(r){let b=function(y){if(v.paused||!c)return;const w=y.target;c.contains(w)?d.current=w:Nn(d.current,{select:!0})},k=function(y){if(v.paused||!c)return;const w=y.relatedTarget;w!==null&&(c.contains(w)||Nn(d.current,{select:!0}))},f=function(y){if(document.activeElement===document.body)for(const T of y)T.removedNodes.length>0&&Nn(c)};document.addEventListener("focusin",b),document.addEventListener("focusout",k);const g=new MutationObserver(f);return c&&g.observe(c,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",b),document.removeEventListener("focusout",k),g.disconnect()}}},[r,c,v.paused]),m.useEffect(()=>{if(c){tg.add(v);const b=document.activeElement;if(!c.contains(b)){const f=new CustomEvent(tl,Zp);c.addEventListener(tl,h),c.dispatchEvent(f),f.defaultPrevented||(_P(HP(Nv(c)),{select:!0}),document.activeElement===b&&Nn(c))}return()=>{c.removeEventListener(tl,h),setTimeout(()=>{const f=new CustomEvent(nl,Zp);c.addEventListener(nl,u),c.dispatchEvent(f),f.defaultPrevented||Nn(b??document.body,{select:!0}),c.removeEventListener(nl,u),tg.remove(v)},0)}}},[c,h,u,v]);const x=m.useCallback(b=>{if(!n&&!r||v.paused)return;const k=b.key==="Tab"&&!b.altKey&&!b.ctrlKey&&!b.metaKey,f=document.activeElement;if(k&&f){const g=b.currentTarget,[y,w]=FP(g);y&&w?!b.shiftKey&&f===w?(b.preventDefault(),n&&Nn(y,{select:!0})):b.shiftKey&&f===y&&(b.preventDefault(),n&&Nn(w,{select:!0})):f===g&&b.preventDefault()}},[n,r,v.paused]);return o.jsx(Ue.div,{tabIndex:-1,...s,ref:p,onKeyDown:x})});Av.displayName=UP;function _P(e,{select:t=!1}={}){const n=document.activeElement;for(const r of e)if(Nn(r,{select:t}),document.activeElement!==n)return}function FP(e){const t=Nv(e),n=eg(t,e),r=eg(t.reverse(),e);return[n,r]}function Nv(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const i=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||i?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function eg(e,t){for(const n of e)if(!BP(n,{upTo:t}))return n}function BP(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function VP(e){return e instanceof HTMLInputElement&&"select"in e}function Nn(e,{select:t=!1}={}){if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&VP(e)&&t&&e.select()}}var tg=zP();function zP(){let e=[];return{add(t){const n=e[0];t!==n&&(n==null||n.pause()),e=ng(e,t),e.unshift(t)},remove(t){var n;e=ng(e,t),(n=e[0])==null||n.resume()}}}function ng(e,t){const n=[...e],r=n.indexOf(t);return r!==-1&&n.splice(r,1),n}function HP(e){return e.filter(t=>t.tagName!=="A")}var GP=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},_r=new WeakMap,Po=new WeakMap,Ao={},rl=0,Iv=function(e){return e&&(e.host||Iv(e.parentNode))},WP=function(e,t){return t.map(function(n){if(e.contains(n))return n;var r=Iv(n);return r&&e.contains(r)?r:(console.error("aria-hidden",n,"in not contained inside",e,". Doing nothing"),null)}).filter(function(n){return!!n})},$P=function(e,t,n,r){var i=WP(t,Array.isArray(e)?e:[e]);Ao[n]||(Ao[n]=new WeakMap);var a=Ao[n],s=[],c=new Set,l=new Set(i),h=function(d){!d||c.has(d)||(c.add(d),h(d.parentNode))};i.forEach(h);var u=function(d){!d||l.has(d)||Array.prototype.forEach.call(d.children,function(p){if(c.has(p))u(p);else try{var v=p.getAttribute(r),x=v!==null&&v!=="false",b=(_r.get(p)||0)+1,k=(a.get(p)||0)+1;_r.set(p,b),a.set(p,k),s.push(p),b===1&&x&&Po.set(p,!0),k===1&&p.setAttribute(n,"true"),x||p.setAttribute(r,"true")}catch(f){console.error("aria-hidden: cannot operate on ",p,f)}})};return u(t),c.clear(),rl++,function(){s.forEach(function(d){var p=_r.get(d)-1,v=a.get(d)-1;_r.set(d,p),a.set(d,v),p||(Po.has(d)||d.removeAttribute(r),Po.delete(d)),v||d.removeAttribute(n)}),rl--,rl||(_r=new WeakMap,_r=new WeakMap,Po=new WeakMap,Ao={})}},KP=function(e,t,n){n===void 0&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),i=GP(e);return i?(r.push.apply(r,Array.from(i.querySelectorAll("[aria-live]"))),$P(r,i,n,"aria-hidden")):function(){return null}},Wt=function(){return Wt=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},Wt.apply(this,arguments)};function jv(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function QP(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,a;r<i;r++)(a||!(r in t))&&(a||(a=Array.prototype.slice.call(t,0,r)),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))}var Ho="right-scroll-bar-position",Go="width-before-scroll-bar",YP="with-scroll-bars-hidden",XP="--removed-body-scroll-bar-size";function il(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function JP(e,t){var n=m.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(r){var i=n.value;i!==r&&(n.value=r,n.callback(r,i))}}}})[0];return n.callback=t,n.facade}var ZP=typeof window<"u"?m.useLayoutEffect:m.useEffect,rg=new WeakMap;function eA(e,t){var n=JP(null,function(r){return e.forEach(function(i){return il(i,r)})});return ZP(function(){var r=rg.get(n);if(r){var i=new Set(r),a=new Set(e),s=n.current;i.forEach(function(c){a.has(c)||il(c,null)}),a.forEach(function(c){i.has(c)||il(c,s)})}rg.set(n,e)},[e]),n}function tA(e){return e}function nA(e,t){t===void 0&&(t=tA);var n=[],r=!1,i={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(a){var s=t(a,r);return n.push(s),function(){n=n.filter(function(c){return c!==s})}},assignSyncMedium:function(a){for(r=!0;n.length;){var s=n;n=[],s.forEach(a)}n={push:function(c){return a(c)},filter:function(){return n}}},assignMedium:function(a){r=!0;var s=[];if(n.length){var c=n;n=[],c.forEach(a),s=n}var l=function(){var u=s;s=[],u.forEach(a)},h=function(){return Promise.resolve().then(l)};h(),n={push:function(u){s.push(u),h()},filter:function(u){return s=s.filter(u),n}}}};return i}function rA(e){e===void 0&&(e={});var t=nA(null);return t.options=Wt({async:!0,ssr:!1},e),t}var Ev=function(e){var t=e.sideCar,n=jv(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw new Error("Sidecar medium not found");return m.createElement(r,Wt({},n))};Ev.isSideCarExport=!0;function iA(e,t){return e.useMedium(t),Ev}var Rv=rA(),al=function(){},hc=m.forwardRef(function(e,t){var n=m.useRef(null),r=m.useState({onScrollCapture:al,onWheelCapture:al,onTouchMoveCapture:al}),i=r[0],a=r[1],s=e.forwardProps,c=e.children,l=e.className,h=e.removeScrollBar,u=e.enabled,d=e.shards,p=e.sideCar,v=e.noRelative,x=e.noIsolation,b=e.inert,k=e.allowPinchZoom,f=e.as,g=f===void 0?"div":f,y=e.gapMode,w=jv(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),T=p,C=eA([n,t]),P=Wt(Wt({},w),i);return m.createElement(m.Fragment,null,u&&m.createElement(T,{sideCar:Rv,removeScrollBar:h,shards:d,noRelative:v,noIsolation:x,inert:b,setCallbacks:a,allowPinchZoom:!!k,lockRef:n,gapMode:y}),s?m.cloneElement(m.Children.only(c),Wt(Wt({},P),{ref:C})):m.createElement(g,Wt({},P,{className:l,ref:C}),c))});hc.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};hc.classNames={fullWidth:Go,zeroRight:Ho};var aA=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function oA(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=aA();return t&&e.setAttribute("nonce",t),e}function sA(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function cA(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var lA=function(){var e=0,t=null;return{add:function(n){e==0&&(t=oA())&&(sA(t,n),cA(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},hA=function(){var e=lA();return function(t,n){m.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},Lv=function(){var e=hA(),t=function(n){var r=n.styles,i=n.dynamic;return e(r,i),null};return t},uA={left:0,top:0,right:0,gap:0},ol=function(e){return parseInt(e||"",10)||0},dA=function(e){var t=window.getComputedStyle(document.body),n=t[e==="padding"?"paddingLeft":"marginLeft"],r=t[e==="padding"?"paddingTop":"marginTop"],i=t[e==="padding"?"paddingRight":"marginRight"];return[ol(n),ol(r),ol(i)]},pA=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return uA;var t=dA(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},gA=Lv(),ui="data-scroll-locked",mA=function(e,t,n,r){var i=e.left,a=e.top,s=e.right,c=e.gap;return n===void 0&&(n="margin"),`
  .`.concat(YP,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(c,"px ").concat(r,`;
  }
  body[`).concat(ui,`] {
    overflow: hidden `).concat(r,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(r,";"),n==="margin"&&`
    padding-left: `.concat(i,`px;
    padding-top: `).concat(a,`px;
    padding-right: `).concat(s,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(c,"px ").concat(r,`;
    `),n==="padding"&&"padding-right: ".concat(c,"px ").concat(r,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(Ho,` {
    right: `).concat(c,"px ").concat(r,`;
  }
  
  .`).concat(Go,` {
    margin-right: `).concat(c,"px ").concat(r,`;
  }
  
  .`).concat(Ho," .").concat(Ho,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(Go," .").concat(Go,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body[`).concat(ui,`] {
    `).concat(XP,": ").concat(c,`px;
  }
`)},ig=function(){var e=parseInt(document.body.getAttribute(ui)||"0",10);return isFinite(e)?e:0},fA=function(){m.useEffect(function(){return document.body.setAttribute(ui,(ig()+1).toString()),function(){var e=ig()-1;e<=0?document.body.removeAttribute(ui):document.body.setAttribute(ui,e.toString())}},[])},yA=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,i=r===void 0?"margin":r;fA();var a=m.useMemo(function(){return pA(i)},[i]);return m.createElement(gA,{styles:mA(a,!t,i,n?"":"!important")})},Ah=!1;if(typeof window<"u")try{var No=Object.defineProperty({},"passive",{get:function(){return Ah=!0,!0}});window.addEventListener("test",No,No),window.removeEventListener("test",No,No)}catch{Ah=!1}var Fr=Ah?{passive:!1}:!1,vA=function(e){return e.tagName==="TEXTAREA"},Dv=function(e,t){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return n[t]!=="hidden"&&!(n.overflowY===n.overflowX&&!vA(e)&&n[t]==="visible")},bA=function(e){return Dv(e,"overflowY")},wA=function(e){return Dv(e,"overflowX")},ag=function(e,t){var n=t.ownerDocument,r=t;do{typeof ShadowRoot<"u"&&r instanceof ShadowRoot&&(r=r.host);var i=Mv(e,r);if(i){var a=qv(e,r),s=a[1],c=a[2];if(s>c)return!0}r=r.parentNode}while(r&&r!==n.body);return!1},xA=function(e){var t=e.scrollTop,n=e.scrollHeight,r=e.clientHeight;return[t,n,r]},kA=function(e){var t=e.scrollLeft,n=e.scrollWidth,r=e.clientWidth;return[t,n,r]},Mv=function(e,t){return e==="v"?bA(t):wA(t)},qv=function(e,t){return e==="v"?xA(t):kA(t)},TA=function(e,t){return e==="h"&&t==="rtl"?-1:1},CA=function(e,t,n,r,i){var a=TA(e,window.getComputedStyle(t).direction),s=a*r,c=n.target,l=t.contains(c),h=!1,u=s>0,d=0,p=0;do{if(!c)break;var v=qv(e,c),x=v[0],b=v[1],k=v[2],f=b-k-a*x;(x||f)&&Mv(e,c)&&(d+=f,p+=x);var g=c.parentNode;c=g&&g.nodeType===Node.DOCUMENT_FRAGMENT_NODE?g.host:g}while(!l&&c!==document.body||l&&(t.contains(c)||t===c));return(u&&(Math.abs(d)<1||!i)||!u&&(Math.abs(p)<1||!i))&&(h=!0),h},Io=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},og=function(e){return[e.deltaX,e.deltaY]},sg=function(e){return e&&"current"in e?e.current:e},SA=function(e,t){return e[0]===t[0]&&e[1]===t[1]},PA=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},AA=0,Br=[];function NA(e){var t=m.useRef([]),n=m.useRef([0,0]),r=m.useRef(),i=m.useState(AA++)[0],a=m.useState(Lv)[0],s=m.useRef(e);m.useEffect(function(){s.current=e},[e]),m.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(i));var b=QP([e.lockRef.current],(e.shards||[]).map(sg),!0).filter(Boolean);return b.forEach(function(k){return k.classList.add("allow-interactivity-".concat(i))}),function(){document.body.classList.remove("block-interactivity-".concat(i)),b.forEach(function(k){return k.classList.remove("allow-interactivity-".concat(i))})}}},[e.inert,e.lockRef.current,e.shards]);var c=m.useCallback(function(b,k){if("touches"in b&&b.touches.length===2||b.type==="wheel"&&b.ctrlKey)return!s.current.allowPinchZoom;var f=Io(b),g=n.current,y="deltaX"in b?b.deltaX:g[0]-f[0],w="deltaY"in b?b.deltaY:g[1]-f[1],T,C=b.target,P=Math.abs(y)>Math.abs(w)?"h":"v";if("touches"in b&&P==="h"&&C.type==="range")return!1;var S=ag(P,C);if(!S)return!0;if(S?T=P:(T=P==="v"?"h":"v",S=ag(P,C)),!S)return!1;if(!r.current&&"changedTouches"in b&&(y||w)&&(r.current=T),!T)return!0;var A=r.current||T;return CA(A,k,b,A==="h"?y:w,!0)},[]),l=m.useCallback(function(b){var k=b;if(!(!Br.length||Br[Br.length-1]!==a)){var f="deltaY"in k?og(k):Io(k),g=t.current.filter(function(T){return T.name===k.type&&(T.target===k.target||k.target===T.shadowParent)&&SA(T.delta,f)})[0];if(g&&g.should){k.cancelable&&k.preventDefault();return}if(!g){var y=(s.current.shards||[]).map(sg).filter(Boolean).filter(function(T){return T.contains(k.target)}),w=y.length>0?c(k,y[0]):!s.current.noIsolation;w&&k.cancelable&&k.preventDefault()}}},[]),h=m.useCallback(function(b,k,f,g){var y={name:b,delta:k,target:f,should:g,shadowParent:IA(f)};t.current.push(y),setTimeout(function(){t.current=t.current.filter(function(w){return w!==y})},1)},[]),u=m.useCallback(function(b){n.current=Io(b),r.current=void 0},[]),d=m.useCallback(function(b){h(b.type,og(b),b.target,c(b,e.lockRef.current))},[]),p=m.useCallback(function(b){h(b.type,Io(b),b.target,c(b,e.lockRef.current))},[]);m.useEffect(function(){return Br.push(a),e.setCallbacks({onScrollCapture:d,onWheelCapture:d,onTouchMoveCapture:p}),document.addEventListener("wheel",l,Fr),document.addEventListener("touchmove",l,Fr),document.addEventListener("touchstart",u,Fr),function(){Br=Br.filter(function(b){return b!==a}),document.removeEventListener("wheel",l,Fr),document.removeEventListener("touchmove",l,Fr),document.removeEventListener("touchstart",u,Fr)}},[]);var v=e.removeScrollBar,x=e.inert;return m.createElement(m.Fragment,null,x?m.createElement(a,{styles:PA(i)}):null,v?m.createElement(yA,{noRelative:e.noRelative,gapMode:e.gapMode}):null)}function IA(e){for(var t=null;e!==null;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}const jA=iA(Rv,NA);var Ov=m.forwardRef(function(e,t){return m.createElement(hc,Wt({},e,{ref:t,sideCar:jA}))});Ov.classNames=hc.classNames;var uc="Popover",[Uv,BN]=Xa(uc,[tc]),to=tc(),[EA,or]=Uv(uc),_v=e=>{const{__scopePopover:t,children:n,open:r,defaultOpen:i,onOpenChange:a,modal:s=!1}=e,c=to(t),l=m.useRef(null),[h,u]=m.useState(!1),[d,p]=Cu({prop:r,defaultProp:i??!1,onChange:a,caller:uc});return o.jsx(Xy,{...c,children:o.jsx(EA,{scope:t,contentId:Iy(),triggerRef:l,open:d,onOpenChange:p,onOpenToggle:m.useCallback(()=>p(v=>!v),[p]),hasCustomAnchor:h,onCustomAnchorAdd:m.useCallback(()=>u(!0),[]),onCustomAnchorRemove:m.useCallback(()=>u(!1),[]),modal:s,children:n})})};_v.displayName=uc;var Fv="PopoverAnchor",RA=m.forwardRef((e,t)=>{const{__scopePopover:n,...r}=e,i=or(Fv,n),a=to(n),{onCustomAnchorAdd:s,onCustomAnchorRemove:c}=i;return m.useEffect(()=>(s(),()=>c()),[s,c]),o.jsx(_u,{...a,...r,ref:t})});RA.displayName=Fv;var Bv="PopoverTrigger",Vv=m.forwardRef((e,t)=>{const{__scopePopover:n,...r}=e,i=or(Bv,n),a=to(n),s=at(t,i.triggerRef),c=o.jsx(Ue.button,{type:"button","aria-haspopup":"dialog","aria-expanded":i.open,"aria-controls":i.contentId,"data-state":$v(i.open),...r,ref:s,onClick:pe(e.onClick,i.onOpenToggle)});return i.hasCustomAnchor?c:o.jsx(_u,{asChild:!0,...a,children:c})});Vv.displayName=Bv;var $u="PopoverPortal",[LA,DA]=Uv($u,{forceMount:void 0}),zv=e=>{const{__scopePopover:t,forceMount:n,children:r,container:i}=e,a=or($u,t);return o.jsx(LA,{scope:t,forceMount:n,children:o.jsx(Ja,{present:n||a.open,children:o.jsx(Tu,{asChild:!0,container:i,children:r})})})};zv.displayName=$u;var Di="PopoverContent",Hv=m.forwardRef((e,t)=>{const n=DA(Di,e.__scopePopover),{forceMount:r=n.forceMount,...i}=e,a=or(Di,e.__scopePopover);return o.jsx(Ja,{present:r||a.open,children:a.modal?o.jsx(qA,{...i,ref:t}):o.jsx(OA,{...i,ref:t})})});Hv.displayName=Di;var MA=qa("PopoverContent.RemoveScroll"),qA=m.forwardRef((e,t)=>{const n=or(Di,e.__scopePopover),r=m.useRef(null),i=at(t,r),a=m.useRef(!1);return m.useEffect(()=>{const s=r.current;if(s)return KP(s)},[]),o.jsx(Ov,{as:MA,allowPinchZoom:!0,children:o.jsx(Gv,{...e,ref:i,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:pe(e.onCloseAutoFocus,s=>{var c;s.preventDefault(),a.current||(c=n.triggerRef.current)==null||c.focus()}),onPointerDownOutside:pe(e.onPointerDownOutside,s=>{const c=s.detail.originalEvent,l=c.button===0&&c.ctrlKey===!0,h=c.button===2||l;a.current=h},{checkForDefaultPrevented:!1}),onFocusOutside:pe(e.onFocusOutside,s=>s.preventDefault(),{checkForDefaultPrevented:!1})})})}),OA=m.forwardRef((e,t)=>{const n=or(Di,e.__scopePopover),r=m.useRef(!1),i=m.useRef(!1);return o.jsx(Gv,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:a=>{var s,c;(s=e.onCloseAutoFocus)==null||s.call(e,a),a.defaultPrevented||(r.current||(c=n.triggerRef.current)==null||c.focus(),a.preventDefault()),r.current=!1,i.current=!1},onInteractOutside:a=>{var l,h;(l=e.onInteractOutside)==null||l.call(e,a),a.defaultPrevented||(r.current=!0,a.detail.originalEvent.type==="pointerdown"&&(i.current=!0));const s=a.target;((h=n.triggerRef.current)==null?void 0:h.contains(s))&&a.preventDefault(),a.detail.originalEvent.type==="focusin"&&i.current&&a.preventDefault()}})}),Gv=m.forwardRef((e,t)=>{const{__scopePopover:n,trapFocus:r,onOpenAutoFocus:i,onCloseAutoFocus:a,disableOutsidePointerEvents:s,onEscapeKeyDown:c,onPointerDownOutside:l,onFocusOutside:h,onInteractOutside:u,...d}=e,p=or(Di,n),v=to(n);return OP(),o.jsx(Av,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:i,onUnmountAutoFocus:a,children:o.jsx(Ks,{asChild:!0,disableOutsidePointerEvents:s,onInteractOutside:u,onEscapeKeyDown:c,onPointerDownOutside:l,onFocusOutside:h,onDismiss:()=>p.onOpenChange(!1),children:o.jsx(Jy,{"data-state":$v(p.open),role:"dialog",id:p.contentId,...v,...d,ref:t,style:{...d.style,"--radix-popover-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-popover-content-available-width":"var(--radix-popper-available-width)","--radix-popover-content-available-height":"var(--radix-popper-available-height)","--radix-popover-trigger-width":"var(--radix-popper-anchor-width)","--radix-popover-trigger-height":"var(--radix-popper-anchor-height)"}})})})}),Wv="PopoverClose",UA=m.forwardRef((e,t)=>{const{__scopePopover:n,...r}=e,i=or(Wv,n);return o.jsx(Ue.button,{type:"button",...r,ref:t,onClick:pe(e.onClick,()=>i.onOpenChange(!1))})});UA.displayName=Wv;var _A="PopoverArrow",FA=m.forwardRef((e,t)=>{const{__scopePopover:n,...r}=e,i=to(n);return o.jsx(Zy,{...i,...r,ref:t})});FA.displayName=_A;function $v(e){return e?"open":"closed"}var BA=_v,VA=Vv,zA=zv,Kv=Hv;const cg=BA,lg=VA,Nh=m.forwardRef(({className:e,align:t="center",sideOffset:n=4,...r},i)=>o.jsx(zA,{children:o.jsx(Kv,{ref:i,align:t,sideOffset:n,className:mt("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...r})}));Nh.displayName=Kv.displayName;const HA=()=>{const{t:e,locale:t,language:n}=Le(),r=tr(),i=Ut(),[a,s]=Nk(),c=m.useRef(!1),[l,h]=m.useState(""),[u,d]=m.useState([]),[p,v]=m.useState([]),[x,b]=m.useState([]),[k,f]=m.useState(""),[g,y]=m.useState(""),[w,T]=m.useState(!0),C=a.get("category")||"all",P=a.get("tag")||"",S=9,A=Math.max(1,Number(a.get("page"))||1),j=`${i.pathname}${i.search}`,q=`blog-scroll:${j}`,D=m.useMemo(()=>P.split(",").map(E=>E.trim()).filter(Boolean),[P]),J=m.useMemo(()=>x.map(E=>({name:E.name,count:E.postCount})),[x]),O=m.useMemo(()=>{const E=u.reduce((ee,R)=>ee+(R.viewCount??0),0),_=u.reduce((ee,R)=>ee+(R.readTimeMinutes||0),0);return{totalViews:E,totalReadMinutes:_}},[u]),Q=m.useMemo(()=>{const E=k.trim().toLowerCase();return E?p.filter(_=>[_.name,_.slug,_.description??""].some(ee=>ee.toLowerCase().includes(E))):p},[p,k]),G=m.useMemo(()=>{const E=g.trim().toLowerCase();return E?J.filter(_=>_.name.toLowerCase().includes(E)):J},[J,g]),W=m.useMemo(()=>{const E=new Map;return p.forEach(_=>E.set(_.slug,_.postCount)),E},[p]),N=m.useMemo(()=>u.filter(E=>{const _=C==="all"||E.category===C,ee=D.length===0||D.every(H=>E.tags.some(Y=>Y.toLowerCase()===H.toLowerCase())),R=E.title.toLowerCase().includes(l.toLowerCase())||E.excerpt.toLowerCase().includes(l.toLowerCase())||E.tags.some(H=>H.toLowerCase().includes(l.toLowerCase()));return _&&ee&&R}).sort((E,_)=>new Date(_.date).getTime()-new Date(E.date).getTime()),[u,C,D,l]),M=Math.max(1,Math.ceil(N.length/S)),F=m.useMemo(()=>N.slice((A-1)*S,A*S),[A,N]),V=m.useMemo(()=>{const E=Math.max(1,Math.min(A-2,M-4)),_=Math.min(M,E+4);return Array.from({length:_-E+1},(ee,R)=>E+R)},[A,M]),z=E=>{var _;return((_=p.find(ee=>ee.slug===E))==null?void 0:_.name)||e(`category.${E}`)||E},Ge=E=>{const _=`${E.slug} ${E.name}`.toLowerCase();return _.includes("language")?F0:_.includes("framework")||_.includes("librar")?R0:_.includes("architecture")?r1:_.includes("pattern")?a1:_.includes("practice")?E0:_.includes("roadmap")?J0:_.includes("learning")?hh:Hc},ge=E=>{const _=new URLSearchParams(a);E==="all"?_.delete("category"):_.set("category",E),_.delete("page"),s(_)},Je=E=>{const _=new URLSearchParams(a);E.length===0?_.delete("tag"):_.set("tag",E.join(",")),_.delete("page"),s(_)},We=E=>{const ee=D.some(R=>R.toLowerCase()===E.toLowerCase())?D.filter(R=>R.toLowerCase()!==E.toLowerCase()):[...D,E];Je(ee)},ft=()=>{s({}),h("")},wn=E=>{h(E);const _=new URLSearchParams(a);_.delete("page"),s(_)},De=E=>{const _=Math.min(Math.max(1,E),M),ee=new URLSearchParams(a);_===1?ee.delete("page"):ee.set("page",String(_)),s(ee),window.scrollTo({top:0,behavior:"smooth"})},xn=()=>{const E=window.scrollY;window.sessionStorage.setItem(q,String(E))};return m.useEffect(()=>{let E=!1;return(async()=>{T(!0);const[ee,R,H]=await Promise.all([cn.getPosts(n,{pageSize:100}),cn.getCategories(),cn.getTags()]);E||(d(ee),v(R),b(H),T(!1))})().catch(()=>{E||T(!1)}),()=>{E=!0}},[n]),m.useEffect(()=>{w||N.length===0||A>M&&De(M)},[A,N.length,w,M]),m.useEffect(()=>{c.current=!1},[j]),m.useEffect(()=>{if(w||c.current)return;const E=window.sessionStorage.getItem(q);if(!E)return;const _=Number(E)||0;c.current=!0,window.sessionStorage.removeItem(q);const ee=()=>window.scrollTo({top:_,behavior:"instant"});window.requestAnimationFrame(()=>{ee(),window.requestAnimationFrame(ee)});const R=[80,180,360].map(H=>window.setTimeout(ee,H));return()=>R.forEach(H=>window.clearTimeout(H))},[q,w,F.length]),o.jsx(Yn,{children:o.jsxs("div",{className:"container mx-auto px-4 py-12",children:[o.jsxs("div",{className:"mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between",children:[o.jsxs("div",{className:"max-w-3xl",children:[o.jsx("h1",{className:"mb-4 text-4xl font-bold md:text-5xl",children:o.jsx("span",{className:"text-gradient",children:e("blog.title")})}),o.jsx("p",{className:"text-lg text-muted-foreground md:text-xl",children:e("blog.desc")})]}),!w&&o.jsxs("div",{className:"grid grid-cols-2 gap-2 sm:grid-cols-4 lg:w-[30rem]",children:[o.jsxs("div",{className:"rounded-lg border border-border/70 bg-background/75 px-3 py-2.5 shadow-sm",children:[o.jsxs("div",{className:"flex items-center gap-1.5 text-xs text-muted-foreground",children:[o.jsx(ks,{className:"h-3.5 w-3.5 text-primary"}),n==="vi"?"Lượt xem":"Views"]}),o.jsx("div",{className:"mt-1 text-lg font-semibold",children:O.totalViews.toLocaleString(t)})]}),o.jsxs("div",{className:"rounded-lg border border-border/70 bg-background/75 px-3 py-2.5 shadow-sm",children:[o.jsxs("div",{className:"flex items-center gap-1.5 text-xs text-muted-foreground",children:[o.jsx(hh,{className:"h-3.5 w-3.5 text-primary"}),n==="vi"?"Bài":"Posts"]}),o.jsx("div",{className:"mt-1 text-lg font-semibold",children:u.length.toLocaleString(t)})]}),o.jsxs("div",{className:"rounded-lg border border-border/70 bg-background/75 px-3 py-2.5 shadow-sm",children:[o.jsxs("div",{className:"flex items-center gap-1.5 text-xs text-muted-foreground",children:[o.jsx(Oa,{className:"h-3.5 w-3.5 text-primary"}),n==="vi"?"Phút":"Minutes"]}),o.jsx("div",{className:"mt-1 text-lg font-semibold",children:O.totalReadMinutes.toLocaleString(t)})]}),o.jsxs("div",{className:"rounded-lg border border-border/70 bg-background/75 px-3 py-2.5 shadow-sm",children:[o.jsxs("div",{className:"flex items-center gap-1.5 text-xs text-muted-foreground",children:[o.jsx(Hc,{className:"h-3.5 w-3.5 text-primary"}),n==="vi"?"Mục":"Topics"]}),o.jsx("div",{className:"mt-1 text-lg font-semibold",children:p.length.toLocaleString(t)})]})]})]}),o.jsxs("div",{className:"mb-8 rounded-xl border border-border/70 bg-background/75 p-2.5 shadow-sm backdrop-blur md:p-3",children:[o.jsxs("div",{className:"flex flex-col gap-2.5 lg:flex-row lg:items-center",children:[o.jsxs("div",{className:"relative w-full lg:max-w-sm",children:[o.jsx(Gc,{className:"absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"}),o.jsx(Sr,{type:"search",placeholder:e("blog.search"),value:l,onChange:E=>wn(E.target.value),className:"h-10 rounded-lg border-border/70 bg-background/85 pl-9 text-sm shadow-sm"})]}),o.jsxs("div",{className:"flex flex-wrap items-center gap-2 lg:ml-auto",children:[o.jsxs(cg,{children:[o.jsx(lg,{asChild:!0,children:o.jsxs(ne,{variant:"outline",size:"sm",className:`h-10 min-w-[170px] justify-between rounded-full border-border/70 bg-background/85 px-3 shadow-sm ${C!=="all"?"border-primary/40 ring-1 ring-primary/15":""}`,children:[o.jsxs("span",{className:"flex min-w-0 items-center gap-2",children:[o.jsx(xp,{className:"h-4 w-4 shrink-0 text-muted-foreground"}),o.jsxs("span",{className:"min-w-0 truncate text-sm",children:[o.jsxs("span",{className:"text-muted-foreground",children:[e("blog.filterCategory"),": "]}),o.jsx("span",{className:"font-medium text-foreground",children:C==="all"?e("blog.all"):z(C)})]})]}),o.jsx(wp,{className:"h-4 w-4 shrink-0 opacity-70"})]})}),o.jsxs(Nh,{align:"end",className:"w-[min(22rem,calc(100vw-2rem))] rounded-xl p-2",children:[o.jsx("div",{className:"px-2 pb-2 pt-1 text-xs font-medium uppercase text-muted-foreground",children:e("blog.filterCategory")}),o.jsxs("div",{className:"relative mb-2",children:[o.jsx(Gc,{className:"absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"}),o.jsx(Sr,{type:"search",value:k,onChange:E=>f(E.target.value),onKeyDown:E=>E.stopPropagation(),placeholder:n==="vi"?"Tìm danh mục":"Search categories",className:"h-9 rounded-lg border-border/70 bg-background/85 pl-9 text-sm"})]}),o.jsxs("div",{className:"space-y-1",children:[o.jsxs("button",{type:"button",onClick:()=>ge("all"),className:`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors ${C==="all"?"bg-primary/10 text-primary ring-1 ring-primary/20":"text-foreground hover:bg-muted"}`,children:[o.jsx(Hc,{className:"h-4 w-4 shrink-0 opacity-75"}),o.jsx("span",{className:"min-w-0 flex-1 truncate",children:e("blog.all")}),o.jsx("span",{className:"rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground",children:u.length}),C==="all"&&o.jsx(Vo,{className:"h-4 w-4"})]}),Q.map(E=>{const _=C===E.slug,ee=Ge(E);return o.jsxs("button",{type:"button",onClick:()=>ge(E.slug),className:`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors ${_?"bg-primary/10 text-primary ring-1 ring-primary/20":"text-foreground hover:bg-muted"}`,children:[o.jsx(ee,{className:"h-4 w-4 shrink-0 opacity-75"}),o.jsx("span",{className:"min-w-0 flex-1 truncate",children:E.name}),o.jsx("span",{className:"rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground",children:W.get(E.slug)??0}),_&&o.jsx(Vo,{className:"h-4 w-4"})]},E.id)}),Q.length===0&&o.jsx("div",{className:"px-3 py-6 text-center text-sm text-muted-foreground",children:n==="vi"?"Không tìm thấy danh mục":"No categories found"})]})]})]}),o.jsxs(cg,{children:[o.jsx(lg,{asChild:!0,children:o.jsxs(ne,{variant:"outline",size:"sm",className:`h-10 min-w-[145px] justify-between rounded-full border-border/70 bg-background/85 px-3 shadow-sm ${D.length>0?"border-primary/40 ring-1 ring-primary/15":""}`,children:[o.jsxs("span",{className:"flex min-w-0 items-center gap-2",children:[o.jsx(gh,{className:"h-4 w-4 shrink-0 text-muted-foreground"}),o.jsxs("span",{className:"min-w-0 truncate text-sm",children:[o.jsxs("span",{className:"text-muted-foreground",children:[e("blog.filterTag"),": "]}),o.jsx("span",{className:"font-medium text-foreground",children:D.length>0?`${D.length} ${e("blog.selectedTags")}`:e("blog.allTags")})]})]}),o.jsx(wp,{className:"h-4 w-4 opacity-70"})]})}),o.jsxs(Nh,{align:"end",className:"w-[min(22rem,calc(100vw-2rem))] rounded-xl p-3",children:[o.jsxs("div",{className:"mb-3 flex items-center justify-between gap-3",children:[o.jsx("div",{className:"text-sm font-medium",children:e("blog.filterTag")}),D.length>0&&o.jsx(ne,{variant:"ghost",size:"sm",onClick:()=>Je([]),className:"h-8 px-2 text-xs",children:e("blog.clearFilters")})]}),o.jsxs("div",{className:"relative mb-3",children:[o.jsx(Gc,{className:"absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"}),o.jsx(Sr,{type:"search",value:g,onChange:E=>y(E.target.value),onKeyDown:E=>E.stopPropagation(),placeholder:n==="vi"?"Tìm thẻ":"Search tags",className:"h-9 rounded-lg border-border/70 bg-background/85 pl-9 text-sm"})]}),o.jsxs("div",{className:"flex max-h-72 flex-wrap gap-2 overflow-y-auto pr-1",children:[G.map(E=>{const _=D.some(ee=>ee.toLowerCase()===E.name.toLowerCase());return o.jsxs(ne,{variant:_?"default":"outline",size:"sm",onClick:()=>We(E.name),className:"h-8 gap-1.5 rounded-full px-2.5 text-xs",children:[_&&o.jsx(Vo,{className:"h-3.5 w-3.5"}),E.name,o.jsx("span",{className:"rounded-full bg-background/40 px-1.5 py-0.5 text-[10px] text-current",children:E.count})]},E.name)}),G.length===0&&o.jsx("div",{className:"w-full px-3 py-6 text-center text-sm text-muted-foreground",children:n==="vi"?"Không tìm thấy thẻ":"No tags found"})]})]})]}),(C!=="all"||D.length>0||l)&&o.jsxs(ne,{variant:"ghost",size:"sm",onClick:ft,className:"h-10 gap-2 rounded-full px-3",children:[o.jsx(Ts,{className:"h-4 w-4"}),e("blog.clearFilters")]})]})]}),D.length>0&&o.jsx("div",{className:"mt-2 flex flex-wrap items-center gap-1.5 border-t border-border/60 pt-2",children:D.map(E=>o.jsxs("button",{type:"button",onClick:()=>We(E),className:"inline-flex h-6 items-center gap-1 rounded-full border border-primary/25 bg-primary/10 px-2 text-[11px] font-medium text-primary transition-colors hover:bg-primary/15",children:[E,o.jsx(Ts,{className:"h-3 w-3"})]},E))})]}),w?o.jsx(Wu,{className:"min-h-[36rem]",label:n==="vi"?"Đang tải":"Loading"}):N.length>0?o.jsxs(o.Fragment,{children:[o.jsx(Ee.div,{className:"grid grid-cols-1 items-start gap-6 md:grid-cols-2 lg:grid-cols-3",variants:r?void 0:Ei,initial:r?!1:"hidden",animate:"visible",children:F.map(E=>o.jsx(Ee.article,{variants:r?void 0:Ri,className:"group card-gradient flex h-full flex-col overflow-hidden rounded-xl border border-border/50 transition-all duration-300 hover:border-primary/50",children:o.jsxs("div",{className:"flex h-full flex-col p-6",children:[o.jsxs("div",{className:"mb-4 flex min-h-7 flex-wrap items-center gap-2.5",children:[o.jsx(tt,{variant:"secondary",className:"max-w-full truncate text-xs",children:z(E.category)}),o.jsxs("div",{className:"flex items-center text-xs text-muted-foreground",children:[o.jsx(Oa,{className:"mr-1 h-4 w-4"}),E.readTime]}),o.jsxs("div",{className:"flex items-center text-xs text-muted-foreground",children:[o.jsx(ks,{className:"mr-1 h-4 w-4"}),(E.viewCount??0).toLocaleString(t)]})]}),o.jsx(fe,{to:`/blog/${E.id}`,state:{from:j},onClick:xn,children:o.jsx("h2",{className:"mb-3 min-h-[3.5rem] text-xl font-semibold leading-7 line-clamp-2 transition-colors group-hover:text-primary",children:E.title})}),o.jsx("p",{className:"mb-4 min-h-[4.5rem] line-clamp-3 text-sm leading-6 text-muted-foreground",children:E.excerpt}),o.jsx("div",{className:"mb-5 flex h-7 gap-2 overflow-hidden",children:E.tags.slice(0,3).map(_=>{const ee=D.some(R=>R.toLowerCase()===_.toLowerCase());return o.jsxs("button",{type:"button",onClick:()=>We(_),className:`inline-flex h-7 max-w-[8.75rem] shrink-0 items-center rounded px-2.5 py-1 text-xs transition-colors ${ee?"bg-primary text-primary-foreground":"bg-muted text-muted-foreground hover:text-foreground"}`,children:[o.jsx(gh,{className:"mr-1 h-3 w-3 shrink-0"}),o.jsx("span",{className:"truncate",children:_})]},_)})}),o.jsxs("div",{className:"flex items-center justify-between gap-4 border-t border-border/50 pt-4",children:[o.jsx("span",{className:"min-w-0 truncate text-sm text-muted-foreground",children:new Date(E.date).toLocaleDateString(t)}),o.jsx(fe,{to:`/blog/${E.id}`,state:{from:j},onClick:xn,className:"shrink-0 text-sm font-medium text-primary",children:e("blog.readMore")})]})]})},E.id))},`${C}-${P}-${l}-${n}-${A}`),M>1&&o.jsxs("nav",{className:"mt-10 flex flex-col items-center justify-between gap-4 rounded-xl border border-border/70 bg-background/75 p-3 shadow-sm backdrop-blur sm:flex-row",children:[o.jsx("p",{className:"text-sm text-muted-foreground",children:n==="vi"?`Hiển thị ${(A-1)*S+1}-${Math.min(A*S,N.length)} / ${N.length} bài`:`Showing ${(A-1)*S+1}-${Math.min(A*S,N.length)} of ${N.length} posts`}),o.jsxs("div",{className:"flex items-center gap-1.5",children:[o.jsxs(ne,{type:"button",variant:"outline",size:"sm",className:"h-9 rounded-full px-3",disabled:A===1,onClick:()=>De(A-1),children:[o.jsx(O0,{className:"h-4 w-4"}),o.jsx("span",{className:"hidden sm:inline",children:n==="vi"?"Trước":"Prev"})]}),V.map(E=>o.jsx(ne,{type:"button",variant:E===A?"default":"outline",size:"sm",className:"h-9 w-9 rounded-full p-0",onClick:()=>De(E),children:E},E)),o.jsxs(ne,{type:"button",variant:"outline",size:"sm",className:"h-9 rounded-full px-3",disabled:A===M,onClick:()=>De(A+1),children:[o.jsx("span",{className:"hidden sm:inline",children:n==="vi"?"Sau":"Next"}),o.jsx(U0,{className:"h-4 w-4"})]})]})]})]}):o.jsxs("div",{className:"text-center py-20",children:[o.jsx(xp,{className:"h-12 w-12 text-muted-foreground mx-auto mb-4"}),o.jsx("h3",{className:"text-xl font-semibold mb-2",children:e("blog.empty")}),o.jsx("p",{className:"text-muted-foreground",children:e("blog.emptyDesc")})]})]})})},Qv=async e=>{var a;if((a=navigator.clipboard)!=null&&a.writeText&&window.isSecureContext)try{await navigator.clipboard.writeText(e);return}catch{}const t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="fixed",t.style.left="-9999px",t.style.top="0",t.style.opacity="0",document.body.appendChild(t);const n=document.getSelection(),r=n&&n.rangeCount>0?n.getRangeAt(0):null;t.focus(),t.select();const i=document.execCommand("copy");if(t.remove(),r&&n&&(n.removeAllRanges(),n.addRange(r)),!i)throw new Error("Unable to copy to clipboard")},GA={javascript:"js",jsx:"js",typescript:"ts",tsx:"ts",py:"python",cs:"csharp","c#":"csharp"},hg={js:new Set(["async","await","break","case","catch","class","const","continue","default","do","else","export","extends","finally","for","from","function","if","import","in","instanceof","let","new","of","return","switch","throw","try","typeof","var","void","while","yield"]),ts:new Set(["abstract","as","async","await","break","case","catch","class","const","continue","default","do","else","enum","export","extends","finally","for","from","function","if","implements","import","in","infer","interface","keyof","let","namespace","new","of","private","protected","public","readonly","return","satisfies","switch","throw","try","type","typeof","var","void","while"]),python:new Set(["and","as","assert","async","await","break","class","continue","def","del","elif","else","except","False","finally","for","from","global","if","import","in","is","lambda","None","nonlocal","not","or","pass","raise","return","True","try","while","with","yield"]),csharp:new Set(["abstract","async","await","base","break","case","catch","class","const","decimal","default","else","enum","false","finally","for","foreach","from","get","if","in","interface","internal","is","namespace","new","null","private","protected","public","readonly","record","return","sealed","set","static","string","switch","this","throw","true","try","using","var","void","when","where"])},WA=new Set(["true","false","null","undefined","True","False","None"]),$A=new Set(["Array","Boolean","Date","Decimal","Error","Guid","Iterable","List","Map","Number","Promise","Record","Set","String","Task","ValueError","dict","list","str","int","float","bool"]),KA=e=>{const t=e.trim().toLowerCase();return GA[t]??t},QA=/(\/\*[\s\S]*?\*\/|\/\/.*|#.*|`(?:\\.|[^`])*`|"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|@[A-Za-z_]\w*|\b\d+(?:\.\d+)?\b|\b[A-Za-z_]\w*\b|=>|==={0,1}|!==?|\+\+|--|&&|\|\||[{}[\]().,;:<>+\-*/%=!?|&])/g,YA=e=>{const t=[];let n=0;return e.replace(QA,(r,i,a)=>(a>n&&t.push(e.slice(n,a)),t.push(r),n=a+r.length,r)),n<e.length&&t.push(e.slice(n)),t},XA=(e,t)=>e.slice(t+1).find(n=>n.trim().length>0),JA=(e,t,n)=>{const r=KA(t),i=hg[r]??hg.js;return/^\s+$/.test(e)?"":/^(\/\/|#|\/\*)/.test(e)?"text-slate-500 italic":/^(`|"|')/.test(e)?"text-emerald-300":/^@\w+/.test(e)?"text-amber-300":/^\d/.test(e)?"text-orange-300":WA.has(e)?"text-purple-300":i.has(e)?"text-sky-300 font-medium":$A.has(e)||/^[A-Z][A-Za-z0-9_]*$/.test(e)?"text-cyan-200":n==="("?"text-yellow-200":/^[{}[\]().,;:<>+\-*/%=!?|&]+$/.test(e)?"text-slate-300":"text-slate-100"},ZA=(e,t,n)=>{const r=YA(e);return r.map((i,a)=>{const s=JA(i,t,XA(r,a));return o.jsx("span",{className:s||void 0,children:i},`${n}-${a}`)})},eN=({code:e,language:t})=>{const{language:n}=Le(),{toast:r}=$s(),[i,a]=m.useState(!1),s=m.useRef(),c=n==="vi"?"Sao chép mã":"Copy code",l=n==="vi"?"Đã sao chép":"Copied",h=t||"code",u=e.split(`
`);m.useEffect(()=>()=>window.clearTimeout(s.current),[]);const d=async()=>{try{await Qv(e),a(!0),window.clearTimeout(s.current),s.current=window.setTimeout(()=>a(!1),2e3),r({variant:"success",title:n==="vi"?"Đã sao chép mã":"Code copied"})}catch(p){console.error("Unable to copy code:",p),r({variant:"destructive",title:n==="vi"?"Không thể sao chép mã":"Unable to copy code"})}};return o.jsxs("div",{className:"my-8 overflow-hidden rounded-xl border border-slate-700/80 bg-slate-950 shadow-sm",children:[o.jsxs("div",{className:"flex items-center justify-between gap-3 border-b border-slate-800 bg-slate-900/95 px-4 py-2.5 font-mono text-xs uppercase tracking-[.14em] text-slate-400",children:[o.jsxs("div",{className:"flex min-w-0 items-center gap-3",children:[o.jsxs("span",{className:"flex items-center gap-1.5",children:[o.jsx("span",{className:"h-2.5 w-2.5 rounded-full bg-red-400"}),o.jsx("span",{className:"h-2.5 w-2.5 rounded-full bg-amber-300"}),o.jsx("span",{className:"h-2.5 w-2.5 rounded-full bg-emerald-400"})]}),o.jsx("span",{className:"min-w-0 truncate",children:h})]}),o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("span",{className:"hidden text-slate-500 sm:inline",children:"haiit.dev"}),o.jsxs("button",{type:"button",onClick:d,className:"inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-700 bg-slate-900 text-slate-200 transition-colors hover:border-primary/70 hover:bg-primary/15 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary","aria-label":i?l:c,title:i?l:c,children:[i?o.jsx(Vo,{className:"h-4 w-4 text-primary"}):o.jsx(V0,{className:"h-4 w-4"}),o.jsx("span",{className:"sr-only","aria-live":"polite",children:i?l:c})]})]})]}),o.jsx("pre",{className:"overflow-x-auto p-0 text-sm leading-7",children:o.jsx("code",{className:"block min-w-max py-4 font-mono",children:u.map((p,v)=>o.jsxs("span",{className:"grid grid-cols-[3.25rem_1fr]",children:[o.jsx("span",{className:"select-none border-r border-slate-800 px-4 text-right text-slate-600",children:v+1}),o.jsx("span",{className:"whitespace-pre px-4",children:p?ZA(p,t,v):" "})]},v))})})]})},Vr=e=>e.split(/(`[^`]+`|\*\*[^*]+\*\*)/g).filter(Boolean).map((t,n)=>t.startsWith("`")&&t.endsWith("`")?o.jsx("code",{className:"rounded bg-primary/10 px-1.5 py-0.5 font-mono text-[.88em] text-primary",children:t.slice(1,-1)},n):t.startsWith("**")&&t.endsWith("**")?o.jsx("strong",{className:"font-semibold text-foreground",children:t.slice(2,-2)},n):o.jsx(m.Fragment,{children:t},n)),tN=({content:e})=>{const t=e.trim().split(`
`),n=[];let r=0;for(;r<t.length;){const i=t[r].trim();if(!i){r+=1;continue}if(i.startsWith("```")){const s=i.slice(3).trim(),c=[];for(r+=1;r<t.length&&!t[r].trim().startsWith("```");)c.push(t[r]),r+=1;n.push(o.jsx(eN,{language:s,code:c.join(`
`)},`code-${r}`)),r+=1;continue}if(i.startsWith("# ")){n.push(o.jsx("h2",{className:"mb-6 mt-2 text-3xl md:text-4xl",children:Vr(i.slice(2))},r)),r+=1;continue}if(i.startsWith("## ")){n.push(o.jsx("h3",{className:"mb-4 mt-12 border-l-2 border-primary pl-4 text-2xl",children:Vr(i.slice(3))},r)),r+=1;continue}if(i.startsWith("### ")){n.push(o.jsx("h4",{className:"mb-3 mt-8 text-xl",children:Vr(i.slice(4))},r)),r+=1;continue}if(i.startsWith("- ")){const s=[];for(;r<t.length&&t[r].trim().startsWith("- ");)s.push(t[r].trim().slice(2)),r+=1;n.push(o.jsx("ul",{className:"my-6 space-y-3",children:s.map(c=>o.jsxs("li",{className:"flex gap-3 leading-7 text-muted-foreground",children:[o.jsx("span",{className:"mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"}),o.jsx("span",{children:Vr(c)})]},c))},`list-${r}`));continue}if(i.startsWith("> ")){n.push(o.jsx("blockquote",{className:"my-8 border-l-2 border-primary bg-primary/[.04] px-5 py-4 text-lg italic leading-8 text-muted-foreground",children:Vr(i.slice(2))},r)),r+=1;continue}const a=[i];for(r+=1;r<t.length&&t[r].trim()&&!/^(#{1,3} |```|- |> )/.test(t[r].trim());)a.push(t[r].trim()),r+=1;n.push(o.jsx("p",{className:"my-5 text-[1.02rem] leading-8 text-muted-foreground",children:Vr(a.join(" "))},`p-${r}`))}return o.jsx("div",{className:"article-content",children:n})},Kt=595,Rt=842,ni=4,Ie=52,nN=64,ug=66,ot=Kt-Ie*2,Wo="HAIIT.DEV",rN="haihttt974.github.io",js="Segoe UI, Inter, Arial, sans-serif",Zi="Cascadia Code, Consolas, SFMono-Regular, monospace",iN={javascript:"js",jsx:"js",typescript:"ts",tsx:"ts",py:"python",cs:"csharp","c#":"csharp"},dg={js:new Set(["async","await","break","case","catch","class","const","continue","default","do","else","export","extends","finally","for","from","function","if","import","in","instanceof","let","new","of","return","switch","throw","try","typeof","var","void","while","yield"]),ts:new Set(["abstract","as","async","await","break","case","catch","class","const","continue","default","do","else","enum","export","extends","finally","for","from","function","if","implements","import","in","infer","interface","keyof","let","namespace","new","of","private","protected","public","readonly","return","satisfies","switch","throw","try","type","typeof","var","void","while"]),python:new Set(["and","as","assert","async","await","break","class","continue","def","del","elif","else","except","False","finally","for","from","global","if","import","in","is","lambda","None","nonlocal","not","or","pass","raise","return","True","try","while","with","yield"]),csharp:new Set(["abstract","async","await","base","break","case","catch","class","const","decimal","default","else","enum","false","finally","for","foreach","from","get","if","in","interface","internal","is","namespace","new","null","private","protected","public","readonly","record","return","sealed","set","static","string","switch","this","throw","true","try","using","var","void","when","where"])},aN=new Set(["true","false","null","undefined","True","False","None"]),oN=new Set(["Array","Boolean","Date","Decimal","Error","Guid","Iterable","List","Map","Number","Promise","Record","Set","String","Task","ValueError","dict","list","str","int","float","bool"]),sN=/(\/\*[\s\S]*?\*\/|\/\/.*|#.*|`(?:\\.|[^`])*`|"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|@[A-Za-z_]\w*|\b\d+(?:\.\d+)?\b|\b[A-Za-z_]\w*\b|=>|==={0,1}|!==?|\+\+|--|&&|\|\||[{}[\]().,;:<>+\-*/%=!?|&])/g,cN=e=>e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^\x20-\x7e]/g,"").replace(/\\/g,"\\\\").replace(/\(/g,"\\(").replace(/\)/g,"\\)"),lN=e=>e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"").slice(0,80)||"blog-post",ur=({size:e,weight:t="400",family:n=js,italic:r})=>`${r?"italic ":""}${t} ${e}px ${n}`,hN=e=>iN[e.trim().toLowerCase()]??e.trim().toLowerCase(),uN=e=>{const t=[];let n=0;return e.replace(sN,(r,i,a)=>(a>n&&t.push(e.slice(n,a)),t.push(r),n=a+r.length,r)),n<e.length&&t.push(e.slice(n)),t},dN=(e,t)=>e.slice(t+1).find(n=>n.trim().length>0),pN=(e,t,n)=>{const r=dg[hN(t)]??dg.js;return/^\s+$/.test(e)?"#e2e8f0":/^(\/\/|#|\/\*)/.test(e)?"#64748b":/^(`|"|')/.test(e)?"#6ee7b7":/^@\w+/.test(e)?"#fcd34d":/^\d/.test(e)?"#fdba74":aN.has(e)?"#c4b5fd":r.has(e)?"#7dd3fc":oN.has(e)||/^[A-Z][A-Za-z0-9_]*$/.test(e)?"#a5f3fc":n==="("?"#fde68a":/^[{}[\]().,;:<>+\-*/%=!?|&]+$/.test(e)?"#cbd5e1":"#f8fafc"},sl=e=>e.replace(/`([^`]+)`/g,"$1").replace(/\*\*([^*]+)\*\*/g,"$1"),ea=(e,t,n,r)=>{e.font=ur(r);const i=t.replace(/\s+/g," ").trim().split(" ").filter(Boolean),a=[];let s="";return i.forEach(c=>{const l=s?`${s} ${c}`:c;if(e.measureText(l).width<=n){s=l;return}if(s&&a.push(s),e.measureText(c).width<=n){s=c;return}let h="";Array.from(c).forEach(u=>{const d=`${h}${u}`;e.measureText(d).width>n&&h?(a.push(h),h=u):h=d}),s=h}),s&&a.push(s),a},pg=()=>{const e=document.createElement("canvas");e.width=Kt*ni,e.height=Rt*ni;const t=e.getContext("2d");if(!t)throw new Error("Canvas is not available");return t.scale(ni,ni),t.fillStyle="#fbfaf7",t.fillRect(0,0,Kt,Rt),{canvas:e,context:t,y:nN}},Yv=(e,t,n,r,i,a)=>{e.beginPath(),e.moveTo(t+a,n),e.arcTo(t+r,n,t+r,n+i,a),e.arcTo(t+r,n+i,t,n+i,a),e.arcTo(t,n+i,t,n,a),e.arcTo(t,n,t+r,n,a),e.closePath()},zr=(e,t,n,r,i,a,s)=>{e.save(),Yv(e,t,n,r,i,a),e.fillStyle=s,e.fill(),e.restore()},cl=(e,t,n,r,i,a,s)=>{e.save(),Yv(e,t,n,r,i,a),e.strokeStyle=s,e.lineWidth=1,e.stroke(),e.restore()},nn=(e,t,n,r,i)=>{e.font=ur(i),e.fillStyle=i.color??"#334155",e.textAlign="left",e.textBaseline="alphabetic",e.fillText(t,n,r)},gN=(e,t)=>{e.save(),e.translate(Kt/2,Rt/2),e.rotate(-28*Math.PI/180),e.globalAlpha=.035,e.fillStyle="#0f172a",e.textAlign="center",e.font=`850 42px ${js}`,e.fillText("HAIIT.DEV · PROFESSIONAL LEARNING NOTES",0,0),e.restore()},mN=(e,t,n,r)=>{const{context:i}=e;gN(i),i.fillStyle="#0f172a",i.font=`800 10px ${js}`,i.textAlign="left",i.fillText(Wo,Ie,30),i.fillStyle="#64748b",i.font=`500 9px ${js}`,i.fillText("Learning notes / PDF edition",Ie+70,30),i.textAlign="right",i.fillText(`${rN}  ·  ${t}/${n}`,Kt-Ie,Rt-30),i.strokeStyle="#e2e8f0",i.lineWidth=1,i.beginPath(),i.moveTo(Ie,Rt-50),i.lineTo(Kt-Ie,Rt-50),i.stroke()},fN=(e,t)=>{const n=URL.createObjectURL(e),r=document.createElement("a");r.href=n,r.download=t,document.body.appendChild(r),r.click(),r.remove(),window.setTimeout(()=>URL.revokeObjectURL(n),1e3)},yN=async(e,t)=>{var ee;await((ee=document.fonts)==null?void 0:ee.ready);const n=[pg()],r=()=>n[n.length-1],i=()=>(n.push(pg()),r()),a=R=>{r().y+R<=Rt-ug||i()},s=(R,H,Y)=>{const te=(Y==null?void 0:Y.x)??Ie,Z=(Y==null?void 0:Y.width)??ot,$=H.lineHeight??H.size*1.55;ea(r().context,sl(R),Z,H).forEach(Ne=>{a($+2);const kn=r();nn(kn.context,Ne,te,kn.y,H),kn.y+=$}),r().y+=(Y==null?void 0:Y.gapAfter)??8},c=()=>{a(24);const R=r();R.context.strokeStyle="#dbe4ef",R.context.lineWidth=1,R.context.beginPath(),R.context.moveTo(Ie,R.y),R.context.lineTo(Kt-Ie,R.y),R.context.stroke(),R.y+=24},l=(R,H,Y,te)=>{if(R.font=ur(te),R.measureText(H).width<=Y)return H;let Z=H;for(;Z.length>1&&R.measureText(`${Z}...`).width>Y;)Z=Z.slice(0,-1);return`${Z}...`},h=(R,H,Y,te,Z)=>{const $=r();zr($.context,Y,te,Z,34,8,"#f8fafc"),cl($.context,Y,te,Z,34,8,"#dbe4ef"),nn($.context,R.toUpperCase(),Y+10,te+12,{size:6.7,weight:"800",color:"#64748b"}),nn($.context,l($.context,H,Z-20,{size:8.8,weight:"800"}),Y+10,te+26,{size:8.8,weight:"800",color:"#0f172a"})},u=(R,H)=>(R.font=ur({size:8.2,family:Zi}),R.measureText(H).width),d=(R,H,Y)=>{const te=[];let Z="";return Array.from(H).forEach($=>{const Ce=`${Z}${$}`;Z&&u(R,Ce)>Y?(te.push(Z),Z=$):Z=Ce}),Z&&te.push(Z),te},p=(R,H,Y,te)=>{const Z=uN(H||" ").flatMap(Ne=>u(R,Ne)>te?d(R,Ne,te):[Ne]),$=[[]];let Ce=0;return Z.forEach(Ne=>{const kn=u(R,Ne);$[$.length-1].length>0&&Ce+kn>te&&($.push([]),Ce=0),$[$.length-1].push(Ne),Ce+=kn}),$.map(Ne=>({tokens:Ne,language:Y}))},v=(R,H,Y,te)=>{let Z=Y;R.font=ur({size:8.2,family:Zi}),H.tokens.forEach(($,Ce)=>{R.fillStyle=pN($,H.language,dN(H.tokens,Ce)),R.fillText($,Z,te),Z+=R.measureText($).width})},x=(R,H)=>{const $=Ie,Ce=ot,Ne=42,kn=$+Ne+12,Jv=Ce-Ne-24,dc=R.flatMap((ae,pc)=>p(r().context,ae,H,Jv).map((Vi,Mr)=>({...Vi,sourceLine:pc+1,continued:Mr>0})));let Bi=0;for(;Bi<dc.length;){a(30+15.5+13+12);const ae=r(),pc=Rt-ug-ae.y-30-13,Vi=Math.max(1,Math.min(dc.length-Bi,Math.floor(pc/15.5))),Mr=30+Vi*15.5+13,_t=ae.y;zr(ae.context,$,_t,Ce,Mr,8,"#020617"),cl(ae.context,$,_t,Ce,Mr,8,"#334155"),zr(ae.context,$,_t,Ce,30,8,"#0f172a"),ae.context.fillStyle="#0f172a",ae.context.fillRect($,_t+17,Ce,14),[["#f87171",16],["#fbbf24",30],["#34d399",44]].forEach(([qr,Or])=>{ae.context.fillStyle=String(qr),ae.context.beginPath(),ae.context.arc($+Number(Or),_t+15,4,0,Math.PI*2),ae.context.fill()}),nn(ae.context,`${H||"code"}${Bi>0?" · continued":""}`.toUpperCase(),$+62,_t+19,{size:8,weight:"800",color:"#94a3b8",family:Zi}),ae.context.font=ur({size:8,weight:"600",color:"#64748b",family:Zi}),ae.context.fillStyle="#64748b",ae.context.textAlign="right",ae.context.fillText(Wo.toLowerCase(),$+Ce-12,_t+19),ae.context.textAlign="left",ae.context.strokeStyle="#1e293b",ae.context.beginPath(),ae.context.moveTo($+Ne,_t+30),ae.context.lineTo($+Ne,_t+Mr-13+3),ae.context.stroke();for(let qr=0;qr<Vi;qr+=1){const Or=dc[Bi+qr],Ku=_t+30+14+qr*15.5;ae.context.font=ur({size:8,family:Zi}),ae.context.fillStyle=Or.continued?"#334155":"#475569",ae.context.textAlign="right",ae.context.fillText(Or.continued?"↳":String(Or.sourceLine),$+Ne-10,Ku),ae.context.textAlign="left",v(ae.context,Or,kn,Ku)}ae.y+=Mr+14,Bi+=Vi}},b=new Date(e.date).toLocaleDateString(t.locale,{year:"numeric",month:"long",day:"numeric"}),k=new Date().toLocaleDateString(t.locale,{year:"numeric",month:"long",day:"numeric"}),f=r(),g=Ie,y=52,w=24,T=g+w,C=ot-w*2,P={size:8.5,weight:"850",color:"#2563eb",lineHeight:12},S={size:24,weight:"850",color:"#0f172a",lineHeight:30},A={size:11.2,color:"#475569",lineHeight:17.5},j=ea(f.context,t.categoryName.toUpperCase(),C-116,P),q=ea(f.context,e.title,C,S),D=ea(f.context,e.excerpt,C,A),J=18,Q=Math.max(214,30+j.length*12+14+q.length*30+10+D.length*17.5+J+34+24);zr(f.context,g+5,y+7,ot,Q,14,"rgba(15, 23, 42, 0.08)"),zr(f.context,g,y,ot,Q,14,"#ffffff"),cl(f.context,g,y,ot,Q,14,"#d7e2ee");const G=f.context.createLinearGradient(g,y,g,y+Q);G.addColorStop(0,"#2563eb"),G.addColorStop(1,"#14b8a6"),f.context.fillStyle=G,f.context.fillRect(g,y,5,Q),f.context.fillStyle="#eff6ff",f.context.beginPath(),f.context.arc(g+ot-42,y+42,26,0,Math.PI*2),f.context.fill(),f.context.fillStyle="#dbeafe",f.context.beginPath(),f.context.arc(g+ot-74,y+72,12,0,Math.PI*2),f.context.fill();let W=y+34;j.forEach(R=>{nn(f.context,R,T,W,P),W+=12}),nn(f.context,"PDF EDITION",g+ot-104,y+34,{size:7.5,weight:"850",color:"#1d4ed8"}),W+=14,q.forEach(R=>{nn(f.context,R,T,W,S),W+=30}),W+=8,D.forEach(R=>{nn(f.context,R,T,W,A),W+=17.5});const N=W+J,M=10,F=(C-M*2)/3;h(t.language==="vi"?"Ngày đăng":"Published",b,T,N,F),h(t.language==="vi"?"Thời lượng":"Read time",e.readTime,T+F+M,N,F),h(t.language==="vi"?"Nguồn":"Source",Wo,T+(F+M)*2,N,F),f.y=y+Q+28,s(`${t.language==="vi"?"Thẻ nội dung":"Tags"}: ${e.tags.join(", ")}`,{size:9.5,weight:"600",color:"#64748b",lineHeight:14},{gapAfter:16}),c();const V=e.content.trim().split(`
`);let z=0;for(;z<V.length;){const R=V[z].trim();if(!R){z+=1;continue}if(R.startsWith("```")){const Y=R.slice(3).trim()||"code",te=[];for(z+=1;z<V.length&&!V[z].trim().startsWith("```");)te.push(V[z]),z+=1;x(te,Y),z+=1;continue}if(R.startsWith("# ")){r().y+=4,s(R.slice(2),{size:19,weight:"850",color:"#0f172a",lineHeight:25},{gapAfter:8}),z+=1;continue}if(R.startsWith("## ")){a(42);const Y=r();Y.y+=10,Y.context.fillStyle="#2563eb",Y.context.fillRect(Ie,Y.y-17,3,22),s(R.slice(3),{size:15.5,weight:"800",color:"#1e293b",lineHeight:21},{x:Ie+14,width:ot-14,gapAfter:8}),z+=1;continue}if(R.startsWith("### ")){s(R.slice(4),{size:13,weight:"800",color:"#1e293b",lineHeight:18},{gapAfter:5}),z+=1;continue}if(R.startsWith("- ")){for(;z<V.length&&V[z].trim().startsWith("- ");){const Y=sl(V[z].trim().slice(2));a(22);const te=r();te.context.fillStyle="#2563eb",te.context.beginPath(),te.context.arc(Ie+5,te.y-5,2.2,0,Math.PI*2),te.context.fill(),s(Y,{size:10.5,color:"#334155",lineHeight:17},{x:Ie+16,width:ot-16,gapAfter:2}),z+=1}r().y+=6;continue}if(R.startsWith("> ")){const Y=sl(R.slice(2)),te=ea(r().context,Y,ot-36,{size:11.5,weight:"600",italic:!0,lineHeight:18});a(te.length*18+26);const Z=r(),$=Z.y-8,Ce=te.length*18+22;zr(Z.context,Ie,$,ot,Ce,8,"#eff6ff"),Z.context.fillStyle="#2563eb",Z.context.fillRect(Ie,$,3,Ce),Z.y+=10,te.forEach(Ne=>{nn(Z.context,Ne,Ie+18,Z.y,{size:11.5,weight:"600",italic:!0,color:"#475569",lineHeight:18}),Z.y+=18}),Z.y+=12,z+=1;continue}const H=[R];for(z+=1;z<V.length&&V[z].trim()&&!/^(#{1,3} |```|- |> )/.test(V[z].trim());)H.push(V[z].trim()),z+=1;s(H.join(" "),{size:10.6,color:"#334155",lineHeight:17.5},{gapAfter:8})}c(),s(t.sourceNote,{size:8.8,color:"#64748b",lineHeight:13.5},{gapAfter:8}),s(`${t.language==="vi"?"Bản PDF được xuất ngày":"PDF exported on"} ${k}. ${t.language==="vi"?"Vui lòng giữ nguyên nguồn HAIIT.DEV khi chia sẻ hoặc trích dẫn.":"Please keep HAIIT.DEV attribution when sharing or quoting."}`,{size:9,weight:"700",color:"#334155",lineHeight:14},{gapAfter:0}),n.forEach((R,H)=>mN(R,H+1,n.length,t.language));const Ge=n.map(R=>{const H=R.canvas.toDataURL("image/jpeg",.98);return atob(H.split(",")[1])}),ge=[],Je=R=>(ge.push(R),ge.length),We=Je("<< /Type /Catalog /Pages 2 0 R >>"),ft=Je(""),wn=[];Ge.forEach((R,H)=>{const Y=Je(`<< /Type /XObject /Subtype /Image /Width ${Kt*ni} /Height ${Rt*ni} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${R.length} >>
stream
${R}
endstream`),te=`q
${Kt} 0 0 ${Rt} 0 0 cm
/Im${H+1} Do
Q`,Z=Je(`<< /Length ${te.length} >>
stream
${te}
endstream`),$=Je(`<< /Type /Page /Parent ${ft} 0 R /MediaBox [0 0 ${Kt} ${Rt}] /Resources << /XObject << /Im${H+1} ${Y} 0 R >> >> /Contents ${Z} 0 R >>`);wn.push($)}),ge[ft-1]=`<< /Type /Pages /Kids [${wn.map(R=>`${R} 0 R`).join(" ")}] /Count ${wn.length} >>`,ge[We-1]="<< /Type /Catalog /Pages 2 0 R >>";let De=`%PDF-1.4
%âãÏÓ
`;const xn=[0];ge.forEach((R,H)=>{xn.push(De.length),De+=`${H+1} 0 obj
${R}
endobj
`});const E=De.length;De+=`xref
0 ${ge.length+1}
0000000000 65535 f 
`,xn.slice(1).forEach(R=>{De+=`${R.toString().padStart(10,"0")} 00000 n 
`}),De+=`trailer
<< /Size ${ge.length+1} /Root 1 0 R /Info << /Title (${cN(e.title)}) /Author (${Wo}) >> >>
startxref
${E}
%%EOF`;const _=new Uint8Array(De.length);for(let R=0;R<De.length;R+=1)_[R]=De.charCodeAt(R)&255;fN(new Blob([_],{type:"application/pdf"}),`${lN(e.title)}.pdf`)},vN=()=>{var g;const{t:e,locale:t,language:n}=Le(),{toast:r}=$s(),{id:i}=tk(),a=Ut(),s=typeof((g=a.state)==null?void 0:g.from)=="string"&&a.state.from.startsWith("/blog")?a.state.from:"/blog",[c,l]=m.useState(()=>i?cn.getCachedPost(i):void 0),[h,u]=m.useState(!c),[d,p]=m.useState([]),v=(c==null?void 0:c.id)===i?c:void 0,x=v?Tv(v,n):void 0;if(m.useEffect(()=>{if(!i)return;let y=!1;const w=cn.getCachedPost(i);return l(w),(async()=>{u(!0);const C=await cn.getPost(i,n);y||(l(C),u(!1));const P=await cn.incrementView(i);!y&&P&&C&&l({...C,viewCount:P.viewCount})})(),()=>{y=!0}},[i,n]),m.useEffect(()=>{if(!v){p([]);return}let y=!1;return(async()=>{const T=await cn.getPosts(n,{pageSize:100}),C=new Set(v.tags.map(S=>S.toLowerCase())),P=T.filter(S=>S.id!==v.id).map(S=>{const A=S.tags.filter(q=>C.has(q.toLowerCase())).length,j=S.category===v.category?6:0;return{item:S,score:j+A*3+(S.featured?1:0)}}).filter(({score:S})=>S>0).sort((S,A)=>A.score-S.score||new Date(A.item.date).getTime()-new Date(S.item.date).getTime()).slice(0,3).map(({item:S})=>S);y||p(P)})().catch(()=>{y||p([])}),()=>{y=!0}},[v,n]),h&&!v)return o.jsx(Yn,{children:o.jsx("div",{className:"container mx-auto px-4 py-12",children:o.jsx(Wu,{className:"min-h-[calc(100vh-9rem)]",label:n==="vi"?"Đang tải":"Loading"})})});if(!x)return o.jsx(Yn,{children:o.jsxs("div",{className:"container mx-auto px-4 py-20 text-center",children:[o.jsx("h1",{className:"text-4xl font-bold mb-4",children:e("post.notFound")}),o.jsx("p",{className:"text-muted-foreground mb-8",children:e("post.notFoundDesc")}),o.jsx(ne,{asChild:!0,children:o.jsxs(fe,{to:s,children:[o.jsx(lh,{className:"mr-2 h-4 w-4"}),e("post.back")]})})]})});const b=e(`category.${x.category}`)||x.category,k=async()=>{try{await yN(x,{language:n,locale:t,categoryName:b,sourceNote:e("post.sourceNote")}),r({variant:"success",title:n==="vi"?"Đã tải PDF bài viết":"Article PDF downloaded"})}catch(y){console.error("Unable to export article PDF:",y),r({variant:"destructive",title:n==="vi"?"Không thể tải PDF":"Unable to download PDF"})}},f=async()=>{try{await Qv(window.location.href),r({variant:"success",title:n==="vi"?"Đã sao chép liên kết":"Link copied"})}catch{r({variant:"destructive",title:n==="vi"?"Không thể sao chép liên kết":"Unable to copy link"})}};return o.jsx(Yn,{children:o.jsxs("article",{className:"container mx-auto px-4 py-12",children:[o.jsxs(fe,{to:s,className:"inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8",children:[o.jsx(lh,{className:"mr-2 h-4 w-4"}),e("post.back")]}),o.jsxs("header",{className:"max-w-3xl mb-12",children:[o.jsx(tt,{variant:"secondary",className:"mb-4",children:b}),o.jsx("h1",{className:"text-3xl md:text-4xl lg:text-5xl font-bold mb-6",children:x.title}),o.jsx("p",{className:"text-xl text-muted-foreground mb-6",children:x.excerpt}),o.jsxs("div",{className:"flex flex-wrap items-center gap-6 text-muted-foreground",children:[o.jsxs("div",{className:"flex items-center",children:[o.jsx(q0,{className:"h-4 w-4 mr-2"}),new Date(x.date).toLocaleDateString(t,{year:"numeric",month:"long",day:"numeric"})]}),o.jsxs("div",{className:"flex items-center",children:[o.jsx(Oa,{className:"h-4 w-4 mr-2"}),x.readTime]}),o.jsxs("div",{className:"flex items-center",children:[o.jsx(ks,{className:"h-4 w-4 mr-2"}),`${((v==null?void 0:v.viewCount)??0).toLocaleString(t)} ${e("post.views")}`]})]})]}),o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-4 gap-12",children:[o.jsx("div",{className:"lg:col-span-3",children:o.jsxs("div",{className:"card-gradient rounded-xl border border-border/50 p-6 md:p-12",children:[o.jsx(tN,{content:x.content}),o.jsx("p",{className:"mt-10 border-t border-border/50 pt-4 text-xs leading-5 text-muted-foreground/80",children:e("post.sourceNote")})]})}),o.jsx("aside",{className:"lg:col-span-1",children:o.jsxs("div",{className:"sticky top-24 space-y-8",children:[o.jsxs("div",{className:"card-gradient border border-border/50 rounded-xl p-6",children:[o.jsxs("h3",{className:"font-semibold mb-4 flex items-center",children:[o.jsx(gh,{className:"h-4 w-4 mr-2"}),e("post.tags")]}),o.jsx("div",{className:"flex flex-wrap gap-2",children:x.tags.map(y=>o.jsx(fe,{to:`/blog?tag=${encodeURIComponent(y)}`,children:o.jsx(tt,{variant:"outline",className:"cursor-pointer hover:border-primary hover:text-primary",children:y})},y))})]}),o.jsxs("div",{className:"card-gradient border border-border/50 rounded-xl p-6",children:[o.jsxs("h3",{className:"font-semibold mb-4 flex items-center",children:[o.jsx(dh,{className:"h-4 w-4 mr-2"}),n==="vi"?"Tải bài viết":"Download article"]}),o.jsx("p",{className:"mb-4 text-sm leading-6 text-muted-foreground",children:n==="vi"?"Tải phiên bản PDF được trình bày gọn gàng để lưu trữ và đọc lại khi cần.":"Save this article as a watermarked PDF for offline reading."}),o.jsxs(ne,{className:"w-full",onClick:k,children:[o.jsx(dh,{className:"mr-2 h-4 w-4"}),n==="vi"?"Tải PDF":"Download PDF"]})]}),d.length>0&&o.jsxs("div",{className:"card-gradient overflow-hidden rounded-xl border border-border/50",children:[o.jsxs("div",{className:"border-b border-border/60 bg-primary/[.04] p-5",children:[o.jsxs("p",{className:"mb-2 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[.14em] text-primary",children:[o.jsx(hh,{className:"h-4 w-4"}),n==="vi"?"Đọc tiếp":"Next reads"]}),o.jsx("h3",{className:"text-lg font-semibold leading-6",children:n==="vi"?"Bài viết liên quan":"Related articles"})]}),o.jsx("div",{className:"divide-y divide-border/60",children:d.map((y,w)=>{const T=e(`category.${y.category}`)||y.category,C=y.tags.filter(P=>x.tags.some(S=>S.toLowerCase()===P.toLowerCase()));return o.jsxs(fe,{to:`/blog/${y.id}`,state:{from:s},className:"group block p-5 transition-colors hover:bg-primary/[.045]",children:[o.jsxs("div",{className:"mb-3 flex items-start justify-between gap-3",children:[o.jsx(tt,{variant:"secondary",className:"max-w-[10rem] truncate text-[11px]",children:T}),o.jsxs("span",{className:"rounded-full border border-border/70 px-2 py-0.5 font-mono text-[10px] text-muted-foreground",children:["0",w+1]})]}),o.jsx("h4",{className:"line-clamp-2 text-sm font-semibold leading-6 transition-colors group-hover:text-primary",children:y.title}),o.jsxs("div",{className:"mt-3 flex flex-wrap items-center gap-2 text-[11px] text-muted-foreground",children:[o.jsxs("span",{className:"inline-flex items-center gap-1",children:[o.jsx(Oa,{className:"h-3.5 w-3.5"}),y.readTime]}),(C.length>0?C:y.tags).slice(0,1).map(P=>o.jsx("span",{className:"max-w-[8rem] truncate rounded-full bg-muted px-2 py-0.5",children:P},P))]}),o.jsxs("div",{className:"mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-primary",children:[n==="vi"?"Mở bài viết":"Open article",o.jsx(xs,{className:"h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"})]})]},y.id)})})]}),o.jsxs("div",{className:"card-gradient border border-border/50 rounded-xl p-6",children:[o.jsxs("h3",{className:"font-semibold mb-4 flex items-center",children:[o.jsx(o1,{className:"h-4 w-4 mr-2"}),e("post.share")]}),o.jsx(ne,{variant:"outline",className:"w-full",onClick:f,children:e("post.copy")})]})]})})]})]})})},bN=()=>{const{t:e}=Le(),t=tr();return o.jsx(Yn,{children:o.jsxs("div",{className:"container mx-auto px-4 py-12",children:[o.jsxs("div",{className:"max-w-3xl mb-12",children:[o.jsx("h1",{className:"text-4xl md:text-5xl font-bold mb-4",children:o.jsx("span",{className:"text-gradient",children:e("project.title")})}),o.jsx("p",{className:"text-xl text-muted-foreground mb-4",children:e("project.desc")}),o.jsx(ne,{asChild:!0,variant:"outline",children:o.jsxs("a",{href:ue.social.github,target:"_blank",rel:"noopener noreferrer",children:[o.jsx(Cr,{className:"h-4 w-4 mr-2"}),e("project.github")]})})]}),o.jsxs("div",{className:"mb-12",children:[o.jsxs("h2",{className:"text-2xl font-semibold mb-6 flex items-center gap-2",children:[o.jsx(l1,{className:"h-5 w-5 text-yellow-500"}),e("project.featured")]}),o.jsx(Ee.div,{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",variants:t?void 0:Ei,initial:t?!1:"hidden",whileInView:"visible",viewport:Li,children:Ch.filter(n=>n.featured).map(n=>o.jsxs(Ee.article,{variants:t?void 0:Ri,className:"group card-gradient border border-border/50 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300",children:[o.jsxs("div",{className:"aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border-b border-border/50 relative overflow-hidden",children:[o.jsx("div",{className:"text-6xl font-mono text-primary/30 group-hover:text-primary/50 transition-colors",children:`<${n.title.split(" ")[0].charAt(0)} />`}),o.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-card to-transparent"}),n.demo&&o.jsx("div",{className:"absolute top-4 right-4",children:o.jsx(tt,{className:"bg-green-500/20 text-green-400 border-green-500/30",children:e("project.demo")})})]}),o.jsxs("div",{className:"p-6 md:p-8",children:[o.jsxs("div",{className:"flex items-start justify-between mb-4",children:[o.jsx("h3",{className:"text-2xl font-semibold group-hover:text-primary transition-colors",children:n.title}),o.jsx(tt,{className:"bg-primary/20 text-primary",children:e("project.featured")})]}),o.jsx("p",{className:"text-muted-foreground mb-4",children:n.description}),o.jsx("p",{className:"text-sm text-muted-foreground mb-6",children:n.longDescription}),o.jsx("div",{className:"flex flex-wrap gap-2 mb-6",children:n.technologies.map(r=>o.jsx(tt,{variant:"secondary",children:r},r))}),o.jsxs("div",{className:"flex gap-4 pt-4 border-t border-border/50",children:[n.github&&o.jsx(ne,{asChild:!0,variant:"outline",size:"sm",children:o.jsxs("a",{href:n.github,target:"_blank",rel:"noopener noreferrer",children:[o.jsx(Cr,{className:"h-4 w-4 mr-2"}),e("project.source")]})}),n.demo&&o.jsx(ne,{asChild:!0,size:"sm",children:o.jsxs("a",{href:n.demo,target:"_blank",rel:"noopener noreferrer",children:[o.jsx(ph,{className:"h-4 w-4 mr-2"}),e("project.demo")]})})]})]})]},n.id))})]}),o.jsxs("div",{children:[o.jsxs("h2",{className:"text-2xl font-semibold mb-6 flex items-center gap-2",children:[o.jsx(G0,{className:"h-5 w-5 text-primary"}),e("project.all")]}),o.jsx(Ee.div,{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",variants:t?void 0:Ei,initial:t?!1:"hidden",whileInView:"visible",viewport:Li,children:Ch.filter(n=>!n.featured).map(n=>o.jsxs(Ee.article,{variants:t?void 0:Ri,className:"group card-gradient border border-border/50 rounded-xl p-6 hover:border-primary/50 transition-all duration-300",children:[o.jsx("h3",{className:"text-lg font-semibold mb-2 group-hover:text-primary transition-colors",children:n.title}),o.jsx("p",{className:"text-sm text-muted-foreground mb-4 line-clamp-2",children:n.description}),o.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:n.technologies.slice(0,3).map(r=>o.jsx(tt,{variant:"secondary",className:"min-h-7 px-3 py-1 text-xs",children:r},r))}),o.jsxs("div",{className:"flex gap-2",children:[n.github&&o.jsx(ne,{asChild:!0,variant:"ghost",size:"sm",children:o.jsx("a",{href:n.github,target:"_blank",rel:"noopener noreferrer",children:o.jsx(Cr,{className:"h-4 w-4"})})}),n.demo&&o.jsx(ne,{asChild:!0,variant:"ghost",size:"sm",children:o.jsx("a",{href:n.demo,target:"_blank",rel:"noopener noreferrer",children:o.jsx(ph,{className:"h-4 w-4"})})})]})]},n.id))})]})]})})},wN=[{id:"fullstack",file:"/cvs/FullStack.pdf",title:{vi:"Fullstack Developer",en:"Fullstack Developer"},description:{vi:"Hồ sơ trọng tâm: kinh nghiệm thực tế với Angular, ASP.NET Core, SQL Server và hệ thống quản lý doanh nghiệp.",en:"Primary profile: hands-on experience with Angular, ASP.NET Core, SQL Server, and enterprise management systems."},featured:!0,stack:["Angular","ASP.NET Core","SQL Server","Docker"]},{id:"dotnet",file:"/cvs/.NET-EN.pdf",title:{vi:".NET Developer",en:".NET Developer"},description:{vi:"Hồ sơ tiếng Anh tập trung vào ASP.NET Core MVC, RESTful API, backend và SQL Server.",en:"English profile focused on ASP.NET Core MVC, RESTful APIs, backend development, and SQL Server."},featured:!1,stack:["C#","ASP.NET Core MVC","RESTful API","SQL Server"]},{id:"ba",file:"/cvs/BA-VI.pdf",title:{vi:"Business Analyst",en:"Business Analyst"},description:{vi:"Hồ sơ tiếng Việt về phân tích nghiệp vụ, User Story, Use Case, BPMN và tài liệu hóa hệ thống.",en:"Vietnamese profile covering business analysis, User Stories, Use Cases, BPMN, and system documentation."},featured:!1,stack:["BPMN","UML","User Story","Figma"]}],xN=[{period:"03/2026 - 06/2026",role:"Fullstack Developer",company:"Song Ân Software Solutions Co., Ltd.",summary:{vi:"Phát triển và bảo trì các module HIS, EMR và Admin Management System bằng Angular, ASP.NET Core và SQL Server.",en:"Developing and maintaining HIS, EMR, and Admin Management System modules with Angular, ASP.NET Core, and SQL Server."},highlights:{vi:["CRUD, bộ lọc tìm kiếm, phân trang và component tái sử dụng","Kiểm tra dữ liệu, tối ưu truy vấn và xử lý sự cố SQL Server","Điều tra lỗi, regression testing, merge branch và chuẩn bị triển khai"],en:["CRUD, search filters, pagination, and reusable components","Data verification, query optimization, and SQL Server troubleshooting","Defect investigation, regression testing, branch merging, and deployment preparation"]}}],kN=[{title:{vi:"Hệ thống Quản lý & Đào tạo Giấy phép Lái xe",en:"Driver License Training & Management System"},period:"09/2025 - 12/2025",description:{vi:"Hệ thống ASP.NET Core 9.0 MVC quản lý đào tạo, thi lý thuyết, mô phỏng giao thông, trung tâm lái xe và thanh toán trực tuyến.",en:"ASP.NET Core 9.0 MVC system for driver training, theory exams, traffic simulation, driving center operations, and online payments."},stack:["ASP.NET Core 9","SignalR","OpenAI SDK","VNPAY","MoMo","PayPal"],github:"https://github.com/haihttt974/dacn-dtgplx"},{title:{vi:"Ứng dụng Web Quản lý Phòng Gym",en:"Gym Management Web Application"},period:"06/2025",description:{vi:"Quản lý hội viên, gói tập, phân quyền Admin/Staff/Trainer/Member, thanh toán và chatbot hỗ trợ.",en:"Membership, package, role-based access, online payment, notification, and AI chatbot management."},stack:["ASP.NET Core MVC","RBAC","PayPal","VNPay","AI Chatbot"],github:"https://github.com/haihttt974/courseproject-ltweb-gym"}],TN=[{year:"2022 - 2025",vi:"Sinh viên tiêu biểu ba năm liên tiếp",en:"Outstanding student for three consecutive years"},{year:"2024",vi:"Giải Nhất Database Design Champion",en:"First Prize, Database Design Champion"},{year:"03/2024",vi:"Giải Ba Cuộc thi Lập trình Cá nhân",en:"Third Prize, Individual Programming Competition"},{year:"10/2024",vi:"Giải Nhất Cuộc thi Lập trình Cá nhân",en:"First Prize, Individual Programming Competition"}],CN=[{year:"2025",vi:"Tiếng Anh trình độ B1",en:"English Proficiency, B1 Level"},{year:"2025",vi:"Kỹ năng Giao tiếp và Làm việc Nhóm",en:"Communication and Teamwork Skills"}],SN=[{title:"Fullstack",items:["Angular","ASP.NET Core","C#","JavaScript","HTML","CSS","RESTful API"]},{title:"Data & Backend",items:["SQL Server","Entity Framework Core","Query Optimization","Database Analysis"]},{title:"Business Analysis",items:["User Story","Use Case","BPMN","UML","Draw.io","Figma"]},{title:"Delivery & Quality",items:["Git","GitHub","Docker","Azure","Postman","Software Testing"]}],PN=()=>{const{language:e}=Le(),t=e==="vi"?{eyebrow:"Hồ sơ nghề nghiệp / 2026",intro:"Tôi xây sản phẩm fullstack, hiểu dữ liệu và không bỏ qua câu chuyện nghiệp vụ phía sau mỗi tính năng.",summary:"Fullstack Developer định hướng hệ thống, có kinh nghiệm phát triển module HIS, EMR và hệ thống quản trị bằng Angular, ASP.NET Core, SQL Server. Đồng thời có nền tảng Business Analysis và kiểm thử phần mềm.",contact:"Liên hệ",cvLabel:"Bộ hồ sơ ứng tuyển",cvTitle:"Ba góc nhìn. Một năng lực cốt lõi.",cvDesc:"Mỗi CV được tối ưu cho một vị trí khác nhau. Fullstack là hồ sơ trọng tâm và phản ánh đầy đủ nhất kinh nghiệm hiện tại.",primary:"Hồ sơ trọng tâm",view:"Xem CV",download:"Tải PDF",experience:"Kinh nghiệm thực tế",present:"Hiện tại",projects:"Dự án tiêu biểu",skills:"Năng lực chuyên môn",education:"Học vấn",educationTitle:"Công nghệ Thông tin",school:"Trường Đại học Công nghệ TP. Hồ Chí Minh",awards:"Danh hiệu & giải thưởng",certificates:"Chứng chỉ",primaryEmail:"Email chính",secondaryEmail:"Email phụ"}:{eyebrow:"Professional profile / 2026",intro:"I build fullstack products, understand data, and never ignore the business story behind each feature.",summary:"Systems-oriented Fullstack Developer with experience building HIS, EMR, and administration modules using Angular, ASP.NET Core, and SQL Server, supported by Business Analysis and software testing foundations.",contact:"Contact",cvLabel:"Application profiles",cvTitle:"Three perspectives. One core capability.",cvDesc:"Each CV is tailored to a different role. Fullstack is the primary profile and best represents my current experience.",primary:"Primary profile",view:"View CV",download:"Download PDF",experience:"Professional experience",present:"Present",projects:"Selected projects",skills:"Professional capabilities",education:"Education",educationTitle:"Information Technology",school:"Ho Chi Minh City University of Technology (HUTECH)",awards:"Honors & awards",certificates:"Certifications",primaryEmail:"Primary email",secondaryEmail:"Secondary email"};return o.jsxs(Yn,{children:[o.jsx("section",{className:"border-b border-border/70",children:o.jsxs("div",{className:"container mx-auto px-4 py-10 md:py-16",children:[o.jsx("p",{className:"eyebrow mb-7",children:t.eyebrow}),o.jsxs("div",{className:"grid gap-8 lg:grid-cols-[.72fr_1.28fr] lg:items-end",children:[o.jsxs("div",{className:"journal-card relative aspect-[4/5] max-w-md overflow-hidden",children:[o.jsx("img",{src:ue.avatar,alt:ue.name,className:"h-full w-full object-cover"}),o.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"}),o.jsxs("div",{className:"absolute inset-x-0 bottom-0 p-6",children:[o.jsx("p",{className:"font-mono text-xs uppercase tracking-[.16em] text-primary",children:"Fullstack / Information Systems"}),o.jsx("h1",{className:"mt-2 text-3xl",children:ue.name})]})]}),o.jsxs("div",{className:"pb-2",children:[o.jsx("h2",{className:"max-w-5xl text-4xl leading-[.98] md:text-6xl lg:text-7xl",children:t.intro}),o.jsx("p",{className:"mt-7 max-w-3xl border-l border-primary/50 pl-5 text-lg leading-8 text-muted-foreground",children:t.summary}),o.jsxs("div",{className:"mt-8 flex flex-wrap gap-3",children:[o.jsx(ne,{asChild:!0,children:o.jsxs("a",{href:`mailto:${ue.social.email}`,children:[o.jsx(Ai,{className:"mr-2 h-4 w-4"}),t.contact]})}),o.jsx(ne,{asChild:!0,variant:"outline",children:o.jsxs("a",{href:ue.social.github,target:"_blank",rel:"noreferrer",children:["GitHub ",o.jsx(kt,{className:"ml-2 h-4 w-4"})]})}),o.jsx(ne,{asChild:!0,variant:"outline",children:o.jsxs("a",{href:ue.social.linkedin,target:"_blank",rel:"noreferrer",children:["LinkedIn ",o.jsx(kt,{className:"ml-2 h-4 w-4"})]})})]}),o.jsx("div",{className:"mt-10 grid border-y border-border/70 sm:grid-cols-3",children:[["3.44/4.00","GPA"],["03/2026",t.experience],["03",t.cvLabel]].map(([n,r],i)=>o.jsxs("div",{className:`py-4 ${i?"border-t border-border/70 sm:border-l sm:border-t-0 sm:pl-5":""}`,children:[o.jsx("span",{className:"font-mono text-xl font-semibold text-primary",children:n}),o.jsx("span",{className:"ml-2 font-mono text-[11px] uppercase tracking-wider text-muted-foreground",children:r})]},r))})]})]})]})}),o.jsx("section",{className:"border-b border-border/70 bg-card/25 py-20",id:"cv-collection",children:o.jsxs("div",{className:"container mx-auto px-4",children:[o.jsx("p",{className:"eyebrow mb-4",children:t.cvLabel}),o.jsxs("div",{className:"mb-10 grid gap-5 md:grid-cols-[1fr_.7fr] md:items-end",children:[o.jsx("h2",{className:"text-4xl md:text-6xl",children:t.cvTitle}),o.jsx("p",{className:"text-muted-foreground",children:t.cvDesc})]}),o.jsx("div",{className:"grid gap-5 lg:grid-cols-3",children:wN.map((n,r)=>o.jsxs("article",{className:`journal-card flex min-h-[330px] flex-col p-6 ${n.featured?"border-primary/60 lg:-translate-y-3":""}`,children:[o.jsxs("div",{className:"flex items-start justify-between",children:[o.jsxs("span",{className:"font-mono text-4xl text-primary/60",children:["0",r+1]}),n.featured&&o.jsxs(tt,{className:"gap-1",children:[o.jsx(Xs,{className:"h-3 w-3"}),t.primary]})]}),o.jsx("h3",{className:"mt-8 text-2xl",children:n.title[e]}),o.jsx("p",{className:"mt-3 text-sm leading-6 text-muted-foreground",children:n.description[e]}),o.jsx("div",{className:"mt-5 flex flex-wrap gap-2.5",children:n.stack.map(i=>o.jsx(tt,{variant:"secondary",className:"min-h-7 px-3 py-1 font-mono text-[11px]",children:i},i))}),o.jsxs("div",{className:"mt-auto flex gap-2 border-t border-border/70 pt-5",children:[o.jsx(ne,{asChild:!0,size:"sm",className:"flex-1",children:o.jsxs("a",{href:n.file,target:"_blank",rel:"noreferrer",children:[t.view,o.jsx(ph,{className:"ml-2 h-3.5 w-3.5"})]})}),o.jsx(ne,{asChild:!0,size:"sm",variant:"outline",children:o.jsxs("a",{href:n.file,download:!0,children:[o.jsx(dh,{className:"h-3.5 w-3.5"}),o.jsx("span",{className:"sr-only",children:t.download})]})})]})]},n.id))})]})}),o.jsx("section",{className:"border-b border-border/70 py-20",children:o.jsxs("div",{className:"container mx-auto grid gap-12 px-4 lg:grid-cols-[1.25fr_.75fr]",children:[o.jsxs("div",{children:[o.jsx("p",{className:"eyebrow mb-8",children:t.experience}),xN.map(n=>o.jsxs("article",{className:"journal-card p-7 md:p-9",children:[o.jsxs("div",{className:"flex flex-col justify-between gap-3 border-b border-border/70 pb-6 sm:flex-row",children:[o.jsxs("div",{children:[o.jsx("h2",{className:"text-2xl",children:n.role}),o.jsx("p",{className:"mt-1 text-primary",children:n.company})]}),o.jsx("span",{className:"font-mono text-xs uppercase tracking-wider text-muted-foreground",children:n.period})]}),o.jsx("p",{className:"mt-6 leading-7 text-muted-foreground",children:n.summary[e]}),o.jsx("div",{className:"mt-6 space-y-3",children:n.highlights[e].map(r=>o.jsxs("p",{className:"flex gap-3 text-sm text-muted-foreground",children:[o.jsx(my,{className:"mt-0.5 h-4 w-4 shrink-0 text-primary"}),r]},r))})]},n.company))]}),o.jsxs("aside",{className:"space-y-5",children:[o.jsx("p",{className:"eyebrow mb-8",children:t.education}),o.jsxs("div",{className:"journal-card p-6",children:[o.jsx(W0,{className:"h-6 w-6 text-primary"}),o.jsx("h3",{className:"mt-5 text-xl",children:t.educationTitle}),o.jsx("p",{className:"mt-2 text-sm text-muted-foreground",children:t.school}),o.jsxs("div",{className:"mt-5 flex justify-between border-t border-border/70 pt-4 font-mono text-xs uppercase tracking-wider text-muted-foreground",children:[o.jsxs("span",{children:["2022 - ",t.present]}),o.jsx("span",{className:"text-primary",children:"GPA 3.44 / 4.00"})]})]}),o.jsxs("div",{className:"journal-card p-6",children:[o.jsx(vy,{className:"h-5 w-5 text-primary"}),o.jsx("p",{className:"mt-4 text-sm text-muted-foreground",children:ue.address}),o.jsxs("div",{className:"mt-4 space-y-3 border-t border-border/70 pt-4 font-mono text-xs",children:[o.jsxs("a",{className:"block hover:text-primary",href:`mailto:${ue.social.email}`,children:[o.jsx("span",{className:"block text-[11px] uppercase tracking-wider text-muted-foreground",children:t.primaryEmail}),ue.social.email]}),o.jsxs("a",{className:"block hover:text-primary",href:`mailto:${ue.social.secondaryEmail}`,children:[o.jsx("span",{className:"block text-[11px] uppercase tracking-wider text-muted-foreground",children:t.secondaryEmail}),ue.social.secondaryEmail]})]})]})]})]})}),o.jsx("section",{className:"border-b border-border/70 bg-card/25 py-20",children:o.jsxs("div",{className:"container mx-auto px-4",children:[o.jsx("p",{className:"eyebrow mb-8",children:t.projects}),o.jsx("div",{className:"grid gap-5 md:grid-cols-2",children:kN.map(n=>o.jsxs("article",{className:"journal-card p-7",children:[o.jsxs("div",{className:"flex justify-between gap-3",children:[o.jsx("h3",{className:"text-2xl",children:n.title[e]}),o.jsx("span",{className:"font-mono text-xs text-primary",children:n.period})]}),o.jsx("p",{className:"mt-4 text-sm leading-7 text-muted-foreground",children:n.description[e]}),o.jsx("div",{className:"mt-5 flex flex-wrap gap-2",children:n.stack.map(r=>o.jsx(tt,{variant:"secondary",children:r},r))}),o.jsxs("a",{href:n.github,target:"_blank",rel:"noreferrer",className:"mt-6 inline-flex items-center gap-2 font-mono text-xs text-primary",children:["GitHub repository ",o.jsx(kt,{className:"h-3.5 w-3.5"})]})]},n.period))})]})}),o.jsx("section",{className:"py-20",children:o.jsxs("div",{className:"container mx-auto grid gap-12 px-4 lg:grid-cols-[1fr_1fr]",children:[o.jsxs("div",{children:[o.jsx("p",{className:"eyebrow mb-8",children:t.skills}),o.jsx("div",{className:"grid gap-4 sm:grid-cols-2",children:SN.map(n=>o.jsxs("div",{className:"journal-card p-5",children:[o.jsx("h3",{children:n.title}),o.jsx("div",{className:"mt-4 flex flex-wrap gap-2",children:n.items.map(r=>o.jsx(tt,{variant:"secondary",children:r},r))})]},n.title))})]}),o.jsxs("div",{className:"grid gap-8 sm:grid-cols-2",children:[o.jsxs("div",{children:[o.jsx("p",{className:"eyebrow mb-8",children:t.awards}),o.jsx("div",{className:"space-y-3",children:TN.map(n=>o.jsxs("div",{className:"journal-card p-4",children:[o.jsx(j0,{className:"h-4 w-4 text-primary"}),o.jsx("p",{className:"mt-3 text-sm",children:n[e]}),o.jsx("p",{className:"mt-2 font-mono text-xs text-muted-foreground",children:n.year})]},`${n.year}-${n.en}`))})]}),o.jsxs("div",{children:[o.jsx("p",{className:"eyebrow mb-8",children:t.certificates}),o.jsx("div",{className:"space-y-3",children:CN.map(n=>o.jsxs("div",{className:"journal-card p-4",children:[o.jsx(M0,{className:"h-4 w-4 text-primary"}),o.jsx("p",{className:"mt-3 text-sm",children:n[e]}),o.jsx("p",{className:"mt-2 font-mono text-xs text-muted-foreground",children:n.year})]},n.en))})]})]})]})})]})},Xv=m.forwardRef(({className:e,...t},n)=>o.jsx("textarea",{className:mt("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",e),ref:n,...t}));Xv.displayName="Textarea";const gg="https://formspree.io/f/xzdlzdwy",mg={GitHub:Cr,LinkedIn:fy,Facebook:z0,Instagram:Q0,TikTok:n1,"X (Twitter)":d1,"Primary Email":Ai,"Secondary Email":Ai},AN={vi:{eyebrow:"04 / Liên hệ & phản hồi",title:"Gửi phản hồi, góp ý hoặc bắt đầu một cuộc trao đổi nghiêm túc.",description:"Nếu bạn thấy nội dung có điểm chưa chính xác, muốn góp ý cho blog, trao đổi dự án hoặc kết nối công việc, đây là nơi phù hợp nhất để liên hệ với tôi.",response:"Phản hồi ưu tiên",responseText:"Email là kênh tôi theo dõi kỹ nhất cho góp ý kỹ thuật, lỗi nội dung và trao đổi công việc.",direct:"Kênh trực tiếp",social:"Mạng xã hội & hồ sơ",formTitle:"Gửi phản hồi trực tiếp",formDesc:"Tin nhắn được gửi qua Formspree và chuyển thẳng đến email của tôi, không cần mở ứng dụng email trên máy của bạn.",name:"Tên của bạn",email:"Email liên hệ",subject:"Chủ đề",message:"Nội dung phản hồi",namePlaceholder:"Nguyễn Văn A",emailPlaceholder:"you@example.com",subjectPlaceholder:"Góp ý về bài viết hoặc website",messagePlaceholder:"Mô tả rõ vấn đề, đường dẫn liên quan, hoặc đề xuất cải thiện...",send:"Gửi phản hồi",sending:"Đang gửi...",required:"Vui lòng nhập email, chủ đề và nội dung phản hồi.",success:"Đã gửi phản hồi",successDesc:"Cảm ơn bạn. Phản hồi đã được gửi đến email của tôi.",failed:"Không thể gửi phản hồi",failedDesc:"Vui lòng thử lại sau hoặc dùng email trực tiếp ở bên trái.",privacy:"Nội dung được gửi qua Formspree để chuyển tiếp email; website không tự lưu phản hồi vào database.",availability:"Thời gian phản hồi phụ thuộc vào lịch cá nhân, nhưng các góp ý kỹ thuật rõ ràng luôn được ưu tiên."},en:{eyebrow:"04 / Contact & feedback",title:"Send feedback, report an issue, or start a focused conversation.",description:"If you notice inaccurate content, want to improve the blog, discuss a project, or connect professionally, this is the best place to reach me.",response:"Preferred response channel",responseText:"Email is the channel I review most carefully for technical feedback, content issues, and work conversations.",direct:"Direct channels",social:"Social profiles",formTitle:"Send direct feedback",formDesc:"Your message is sent through Formspree and delivered straight to my inbox without opening your email app.",name:"Your name",email:"Contact email",subject:"Subject",message:"Feedback",namePlaceholder:"Your name",emailPlaceholder:"you@example.com",subjectPlaceholder:"Feedback about an article or the website",messagePlaceholder:"Describe the issue, related link, or suggested improvement...",send:"Send feedback",sending:"Sending...",required:"Please enter your email, subject, and feedback message.",success:"Feedback sent",successDesc:"Thank you. Your message has been sent to my inbox.",failed:"Could not send feedback",failedDesc:"Please try again later or use the direct email links on the left.",privacy:"Messages are sent through Formspree for email forwarding; this website does not store feedback in its own database.",availability:"Response time depends on my schedule, but clear technical feedback is prioritized."}},NN=e=>e.replace("Primary ","").replace("Secondary ",""),IN=()=>{const{language:e}=Le(),{toast:t}=$s(),n=AN[e],[r,i]=m.useState(""),[a,s]=m.useState(""),[c,l]=m.useState(""),[h,u]=m.useState(""),[d,p]=m.useState(""),[v,x]=m.useState(!1),b=m.useMemo(()=>ue.socialLinks.filter(g=>g.name.includes("Email")),[]),k=m.useMemo(()=>ue.socialLinks.filter(g=>!g.name.includes("Email")),[]),f=async g=>{g.preventDefault();const y=a.trim(),w=c.trim(),T=h.trim();if(!y||!w||!T){t({variant:"warning",title:n.required});return}x(!0);try{const C=new FormData;if(C.append("name",r.trim()),C.append("email",y),C.append("_replyto",y),C.append("subject",w),C.append("message",T),C.append("page",window.location.href),C.append("_subject",`[Portfolio feedback] ${w}`),d.trim()&&C.append("website",d.trim()),!(await fetch(gg,{method:"POST",body:C,headers:{Accept:"application/json"}})).ok)throw new Error("formspree_send_failed");i(""),s(""),l(""),u(""),p(""),t({variant:"success",title:n.success,description:n.successDesc})}catch{t({variant:"destructive",title:n.failed,description:n.failedDesc})}finally{x(!1)}};return o.jsx(Yn,{children:o.jsx("main",{className:"container mx-auto px-4 py-12",children:o.jsxs("section",{className:"grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start",children:[o.jsxs("div",{className:"space-y-8",children:[o.jsxs("div",{children:[o.jsx("p",{className:"eyebrow mb-4",children:n.eyebrow}),o.jsx("h1",{className:"max-w-3xl text-4xl font-bold leading-tight md:text-5xl",children:o.jsx("span",{className:"text-gradient",children:n.title})}),o.jsx("p",{className:"mt-5 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg",children:n.description})]}),o.jsx("div",{className:"rounded-lg border border-primary/25 bg-primary/[.06] p-5 shadow-sm",children:o.jsxs("div",{className:"flex items-start gap-3",children:[o.jsx("div",{className:"flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-primary/25 bg-background/70 text-primary",children:o.jsx(s1,{className:"h-5 w-5"})}),o.jsxs("div",{children:[o.jsx("h2",{className:"text-sm font-semibold",children:n.response}),o.jsx("p",{className:"mt-2 text-sm leading-6 text-muted-foreground",children:n.responseText})]})]})}),o.jsxs("div",{children:[o.jsxs("div",{className:"mb-3 flex items-center justify-between gap-3",children:[o.jsx("h2",{className:"font-mono text-xs uppercase tracking-[.18em] text-muted-foreground",children:n.direct}),o.jsx(tt,{variant:"outline",className:"rounded-md",children:"Email"})]}),o.jsx("div",{className:"grid gap-3 sm:grid-cols-2",children:b.map(g=>{const y=mg[g.name]??Ai;return o.jsx("a",{href:g.url,className:"group rounded-lg border border-border/70 bg-background/75 p-4 transition-colors hover:border-primary/45 hover:bg-primary/[.04]",children:o.jsxs("div",{className:"flex items-center justify-between gap-3",children:[o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("span",{className:"flex h-9 w-9 items-center justify-center rounded-md border border-border/70 bg-muted/40 text-primary",children:o.jsx(y,{className:"h-4 w-4"})}),o.jsxs("span",{children:[o.jsx("span",{className:"block text-sm font-semibold",children:NN(g.name)}),o.jsx("span",{className:"mt-1 block text-xs text-muted-foreground",children:g.url.replace("mailto:","")})]})]}),o.jsx(kt,{className:"h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary"})]})},g.name)})})]}),o.jsxs("div",{children:[o.jsx("h2",{className:"mb-3 font-mono text-xs uppercase tracking-[.18em] text-muted-foreground",children:n.social}),o.jsx("div",{className:"grid gap-3 sm:grid-cols-2",children:k.map(g=>{const y=mg[g.name]??e1;return o.jsxs("a",{href:g.url,target:"_blank",rel:"noreferrer",className:"group flex items-center justify-between gap-3 rounded-lg border border-border/70 bg-background/70 px-4 py-3 text-sm transition-colors hover:border-primary/45 hover:bg-primary/[.04]",children:[o.jsxs("span",{className:"flex items-center gap-3",children:[o.jsx(y,{className:"h-4 w-4 text-primary"}),o.jsx("span",{className:"font-medium",children:g.name})]}),o.jsx(kt,{className:"h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary"})]},g.name)})})]})]}),o.jsxs("section",{className:"rounded-lg border border-border/70 bg-background/80 p-5 shadow-[0_20px_60px_hsl(var(--foreground)/0.08)] backdrop-blur md:p-6",children:[o.jsxs("div",{className:"mb-6 flex items-start gap-3",children:[o.jsx("div",{className:"flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-primary/25 bg-primary/10 text-primary",children:o.jsx(kp,{className:"h-5 w-5"})}),o.jsxs("div",{children:[o.jsx("h2",{className:"text-xl font-semibold",children:n.formTitle}),o.jsx("p",{className:"mt-2 text-sm leading-6 text-muted-foreground",children:n.formDesc})]})]}),o.jsxs("form",{action:gg,className:"space-y-4",method:"POST",onSubmit:f,children:[o.jsx("input",{"aria-hidden":"true",autoComplete:"off",className:"hidden",name:"website",tabIndex:-1,value:d,onChange:g=>p(g.target.value)}),o.jsxs("div",{className:"grid gap-4 sm:grid-cols-2",children:[o.jsxs("label",{className:"space-y-2",children:[o.jsx("span",{className:"text-sm font-medium",children:n.name}),o.jsx(Sr,{name:"name",value:r,onChange:g=>i(g.target.value),placeholder:n.namePlaceholder,maxLength:120})]}),o.jsxs("label",{className:"space-y-2",children:[o.jsx("span",{className:"text-sm font-medium",children:n.email}),o.jsx(Sr,{name:"email",type:"email",value:a,onChange:g=>s(g.target.value),placeholder:n.emailPlaceholder,maxLength:200,required:!0})]})]}),o.jsxs("label",{className:"block space-y-2",children:[o.jsx("span",{className:"text-sm font-medium",children:n.subject}),o.jsx(Sr,{name:"subject",value:c,onChange:g=>l(g.target.value),placeholder:n.subjectPlaceholder,maxLength:160,required:!0})]}),o.jsxs("label",{className:"block space-y-2",children:[o.jsx("span",{className:"text-sm font-medium",children:n.message}),o.jsx(Xv,{name:"message",value:h,onChange:g=>u(g.target.value),placeholder:n.messagePlaceholder,className:"min-h-44 resize-y",maxLength:5e3,required:!0})]}),o.jsxs(ne,{type:"submit",className:"w-full gap-2",disabled:v,children:[v?o.jsx(yy,{className:"h-4 w-4 animate-spin"}):o.jsx(kp,{className:"h-4 w-4"}),v?n.sending:n.send]})]}),o.jsxs("div",{className:"mt-6 grid gap-3 border-t border-border/70 pt-5 text-xs leading-5 text-muted-foreground sm:grid-cols-2",children:[o.jsxs("p",{className:"flex gap-2",children:[o.jsx(uh,{className:"mt-0.5 h-3.5 w-3.5 shrink-0 text-primary"}),n.privacy]}),o.jsxs("p",{className:"flex gap-2",children:[o.jsx(uh,{className:"mt-0.5 h-3.5 w-3.5 shrink-0 text-primary"}),n.availability]})]})]})]})})})},jN=()=>{const{language:e}=Le(),t=Ut(),n=e==="vi",r={eyebrow:"HTTP / 404",title:n?"Trang này đã đi lạc khỏi bản đồ.":"This page drifted off the map.",description:n?"Đường dẫn bạn vừa mở không tồn tại hoặc đã được chuyển đi. Hãy quay về trang chính để tiếp tục khám phá.":"The route you opened does not exist or has moved. Head back home and keep exploring.",home:n?"Về trang chủ":"Back home",back:n?"Quay lại":"Go back",currentRoute:n?"Đường dẫn hiện tại":"Current route",signal:n?"Không tìm thấy tín hiệu":"No signal found",hint:n?"Gợi ý: kiểm tra lại URL hoặc dùng menu điều hướng.":"Tip: check the URL or use the navigation menu."};return m.useEffect(()=>{console.error("404 Error: User attempted to access non-existent route:",t.pathname)},[t.pathname]),o.jsxs("main",{className:"relative flex h-dvh min-h-[620px] overflow-hidden bg-background text-foreground",children:[o.jsx("div",{className:"page-grid pointer-events-none absolute inset-0 opacity-70"}),o.jsx("div",{className:"pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,hsl(var(--primary)/0.18),transparent_24rem),radial-gradient(circle_at_84%_72%,hsl(var(--accent)/0.14),transparent_24rem)]"}),o.jsx("div",{className:"pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background via-background/70 to-transparent"}),o.jsxs("div",{className:"container relative z-10 mx-auto grid h-full items-center gap-8 px-4 py-6 md:grid-cols-[0.95fr_1.05fr] md:px-8",children:[o.jsxs("section",{className:"mx-auto w-full max-w-xl",children:[o.jsxs("div",{className:"mb-5 inline-flex items-center gap-2 rounded-md border border-border/70 bg-card/70 px-3 py-2 font-mono text-[11px] font-semibold uppercase text-primary shadow-sm backdrop-blur",children:[o.jsx(Xs,{className:"h-3.5 w-3.5"}),r.eyebrow]}),o.jsxs("h1",{className:"text-balance text-5xl font-bold leading-[0.95] sm:text-6xl lg:text-7xl",children:[o.jsx("span",{className:"block text-gradient",children:"404"}),o.jsx("span",{className:"mt-2 block",children:r.title})]}),o.jsx("p",{className:"mt-5 max-w-lg text-base leading-7 text-muted-foreground sm:text-lg",children:r.description}),o.jsxs("div",{className:"mt-7 flex flex-wrap gap-3",children:[o.jsx(ne,{asChild:!0,size:"lg",className:"shadow-[0_18px_40px_hsl(var(--primary)/0.18)]",children:o.jsxs(fe,{to:"/",children:[o.jsx($0,{className:"h-4 w-4"}),r.home]})}),o.jsxs(ne,{size:"lg",variant:"outline",onClick:()=>window.history.back(),children:[o.jsx(lh,{className:"h-4 w-4"}),r.back]})]}),o.jsx("div",{className:"mt-7 rounded-md border border-border/70 bg-card/60 p-4 backdrop-blur",children:o.jsxs("div",{className:"flex items-start gap-3",children:[o.jsx(i1,{className:"mt-0.5 h-5 w-5 text-accent"}),o.jsxs("div",{className:"min-w-0",children:[o.jsx("p",{className:"font-mono text-[11px] uppercase text-muted-foreground",children:r.currentRoute}),o.jsx("p",{className:"mt-1 truncate font-mono text-sm text-foreground",children:t.pathname})]})]})})]}),o.jsxs("section",{className:"relative mx-auto hidden aspect-square w-full max-w-[540px] items-center justify-center md:flex",children:[o.jsx("div",{className:"absolute inset-8 rounded-full border border-primary/15"}),o.jsx("div",{className:"absolute inset-20 rounded-full border border-accent/20"}),o.jsx("div",{className:"absolute h-[72%] w-[72%] animate-[orbitSpin_28s_linear_infinite] rounded-full border border-dashed border-border/80"}),o.jsx("div",{className:"absolute left-[12%] top-[22%] rounded-md border border-border/70 bg-card/80 px-3 py-2 font-mono text-[10px] uppercase text-muted-foreground shadow-sm backdrop-blur",children:"route.scan()"}),o.jsx("div",{className:"absolute bottom-[18%] right-[8%] rounded-md border border-primary/20 bg-primary/10 px-3 py-2 font-mono text-[10px] uppercase text-primary shadow-sm backdrop-blur",children:"fallback.ready"}),o.jsxs("div",{className:"relative flex h-72 w-72 items-center justify-center rounded-full border border-border/80 bg-card/70 shadow-[0_32px_100px_hsl(var(--foreground)/0.14)] backdrop-blur-xl",children:[o.jsx("div",{className:"absolute inset-6 rounded-full border border-primary/20 bg-[radial-gradient(circle,hsl(var(--primary)/0.16),transparent_58%)]"}),o.jsx("div",{className:"absolute h-4 w-4 animate-[particleBlink_3s_ease-in-out_infinite] rounded-full bg-primary shadow-[0_0_30px_hsl(var(--primary)/0.65)]"}),o.jsxs("div",{className:"relative grid place-items-center text-center",children:[o.jsx(B0,{className:"mb-5 h-16 w-16 text-primary"}),o.jsx("p",{className:"font-mono text-xs uppercase tracking-[0.24em] text-muted-foreground",children:r.signal}),o.jsx("p",{className:"mt-3 max-w-44 text-sm leading-6 text-muted-foreground",children:r.hint})]})]})]})]})]})},cr=({children:e})=>{const t=tr();return o.jsx(Ee.div,{initial:t?{opacity:0}:"initial",animate:t?{opacity:1}:"animate",exit:t?{opacity:0}:"exit",variants:VS,children:e})},EN=()=>{const{language:e}=Le(),t=tr(),[n,r]=m.useState(0),[i,a]=m.useState(!1);m.useEffect(()=>{let l=0;const h=()=>{l=0;const d=window.scrollY||document.documentElement.scrollTop,p=document.documentElement.scrollHeight-window.innerHeight,v=p>0?Math.min(d/p,1):0;r(v),a(d>Math.min(520,window.innerHeight*.62))},u=()=>{l||(l=window.requestAnimationFrame(h))};return h(),window.addEventListener("scroll",u,{passive:!0}),window.addEventListener("resize",u),()=>{l&&window.cancelAnimationFrame(l),window.removeEventListener("scroll",u),window.removeEventListener("resize",u)}},[]);const s=e==="vi"?"Cuộn lên đầu trang":"Scroll to top",c=()=>{window.scrollTo({top:0,behavior:t?"auto":"smooth"})};return o.jsx(Ee.div,{className:"fixed bottom-[4.75rem] right-4 z-[60]",initial:!1,animate:i?{opacity:1,y:0,scale:1,pointerEvents:"auto"}:{opacity:0,y:14,scale:.92,pointerEvents:"none"},transition:{duration:t?0:.24,ease:[.22,1,.36,1]},children:o.jsxs(cv,{children:[o.jsx(lv,{asChild:!0,children:o.jsxs(ne,{type:"button",variant:"outline",size:"icon","aria-label":s,onClick:c,className:"group relative h-12 w-12 overflow-hidden rounded-full border-primary/35 bg-background/85 text-foreground shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/70 hover:bg-primary/10 hover:text-primary focus-visible:ring-primary/60",style:{backgroundImage:`conic-gradient(hsl(var(--primary)) ${n*360}deg, hsl(var(--border) / 0.32) 0deg)`},children:[o.jsx("span",{className:"absolute inset-[3px] rounded-full bg-background/94 shadow-inner"}),o.jsx("span",{className:"absolute inset-x-3 top-2 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-70"}),o.jsx("span",{className:"relative flex h-7 w-7 items-center justify-center rounded-full border border-primary/25 bg-primary/[.07] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-105",children:o.jsx(I0,{className:"h-4 w-4"})}),o.jsx("span",{className:"sr-only",children:s})]})}),o.jsx(Bu,{side:"left",className:"font-mono text-xs uppercase tracking-[.12em]",children:s})]})})},RN=new iS;function LN(){const e=Ut();return o.jsxs(LS,{attribute:"class",defaultTheme:"system",enableSystem:!0,storageKey:"haiit-theme",children:[o.jsx(US,{}),o.jsx(yS,{children:o.jsx(oS,{client:RN,children:o.jsx(MC,{children:o.jsxs(gS,{children:[o.jsx(K1,{}),o.jsx(jS,{}),o.jsx(vS,{}),o.jsxs(eb,{features:tb,strict:!0,children:[o.jsx(EN,{}),o.jsx(nb,{mode:"wait",initial:!1,children:o.jsxs(fk,{location:e,children:[o.jsx(Pn,{path:"/",element:o.jsx(cr,{children:o.jsx(qP,{})})}),o.jsx(Pn,{path:"/blog",element:o.jsx(cr,{children:o.jsx(HA,{})})}),o.jsx(Pn,{path:"/blog/:id",element:o.jsx(cr,{children:o.jsx(vN,{})})}),o.jsx(Pn,{path:"/projects",element:o.jsx(cr,{children:o.jsx(bN,{})})}),o.jsx(Pn,{path:"/about",element:o.jsx(cr,{children:o.jsx(PN,{})})}),o.jsx(Pn,{path:"/contact",element:o.jsx(cr,{children:o.jsx(IN,{})})}),o.jsx(Pn,{path:"*",element:o.jsx(cr,{children:o.jsx(jN,{})})})]},e.pathname)})]})]})})})})]})}const DN=new URLSearchParams(window.location.search),fg=DN.get("redirect");fg&&window.history.replaceState(null,"",fg);Nf(document.getElementById("root")).render(o.jsx(Ck,{children:o.jsx(LN,{})}));
