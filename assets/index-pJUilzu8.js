var pd=e=>{throw TypeError(e)};var Oa=(e,t,n)=>t.has(e)||pd("Cannot "+n);var E=(e,t,n)=>(Oa(e,t,"read from private field"),n?n.call(e):t.get(e)),Y=(e,t,n)=>t.has(e)?pd("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),q=(e,t,n,r)=>(Oa(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n),Te=(e,t,n)=>(Oa(e,t,"access private method"),n);var Ao=(e,t,n,r)=>({set _(i){q(e,t,i,n)},get _(){return E(e,t,r)}});import{r as m,g as cy,R as Wc,j as s,a as Bn,u as ur,m as Ce,L as uy,d as dy,A as hy}from"./motion-DrBT6qPh.js";import{S as py,P as my,W as fy,a as gy,A as vy,b as yy,D as xy,c as md,G as Fp,M as qi,T as wy,d as Qc,I as by,L as Bi,E as ws,e as bs,B as ky,f as Cy,g as fd,h as Sy,C as Ny,i as gd,j as Py,k as Ty,O as jy,l as Ey,m as Ay,V as Iy}from"./three-DfGjiPv-.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var zp={exports:{}},et={},Vp={exports:{}},qp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,L){var z=T.length;T.push(L);e:for(;0<z;){var $=z-1>>>1,Z=T[$];if(0<i(Z,L))T[$]=L,T[z]=Z,z=$;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var L=T[0],z=T.pop();if(z!==L){T[0]=z;e:for(var $=0,Z=T.length,We=Z>>>1;$<We;){var Le=2*($+1)-1,rn=T[Le],Qe=Le+1,zt=T[Qe];if(0>i(rn,z))Qe<Z&&0>i(zt,rn)?(T[$]=zt,T[Qe]=z,$=Qe):(T[$]=rn,T[Le]=z,$=Le);else if(Qe<Z&&0>i(zt,z))T[$]=zt,T[Qe]=z,$=Qe;else break e}}return L}function i(T,L){var z=T.sortIndex-L.sortIndex;return z!==0?z:T.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var c=[],u=[],d=1,h=null,p=3,y=!1,k=!1,v=!1,b=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(T){for(var L=n(u);L!==null;){if(L.callback===null)r(u);else if(L.startTime<=T)r(u),L.sortIndex=L.expirationTime,t(c,L);else break;L=n(u)}}function w(T){if(v=!1,x(T),!k)if(n(c)!==null)k=!0,U(C);else{var L=n(u);L!==null&&Q(w,L.startTime-T)}}function C(T,L){k=!1,v&&(v=!1,g(S),S=-1),y=!0;var z=p;try{for(x(L),h=n(c);h!==null&&(!(h.expirationTime>L)||T&&!O());){var $=h.callback;if(typeof $=="function"){h.callback=null,p=h.priorityLevel;var Z=$(h.expirationTime<=L);L=e.unstable_now(),typeof Z=="function"?h.callback=Z:h===n(c)&&r(c),x(L)}else r(c);h=n(c)}if(h!==null)var We=!0;else{var Le=n(u);Le!==null&&Q(w,Le.startTime-L),We=!1}return We}finally{h=null,p=z,y=!1}}var N=!1,P=null,S=-1,j=5,A=-1;function O(){return!(e.unstable_now()-A<j)}function R(){if(P!==null){var T=e.unstable_now();A=T;var L=!0;try{L=P(!0,T)}finally{L?H():(N=!1,P=null)}}else N=!1}var H;if(typeof f=="function")H=function(){f(R)};else if(typeof MessageChannel<"u"){var D=new MessageChannel,W=D.port2;D.port1.onmessage=R,H=function(){W.postMessage(null)}}else H=function(){b(R,0)};function U(T){P=T,N||(N=!0,H())}function Q(T,L){S=b(function(){T(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){k||y||(k=!0,U(C))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(T){switch(p){case 1:case 2:case 3:var L=3;break;default:L=p}var z=p;p=L;try{return T()}finally{p=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,L){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var z=p;p=T;try{return L()}finally{p=z}},e.unstable_scheduleCallback=function(T,L,z){var $=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?$+z:$):z=$,T){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=z+Z,T={id:d++,callback:L,priorityLevel:T,startTime:z,expirationTime:Z,sortIndex:-1},z>$?(T.sortIndex=z,t(u,T),n(c)===null&&T===n(u)&&(v?(g(S),S=-1):v=!0,Q(w,z-$))):(T.sortIndex=Z,t(c,T),k||y||(k=!0,U(C))),T},e.unstable_shouldYield=O,e.unstable_wrapCallback=function(T){var L=p;return function(){var z=p;p=L;try{return T.apply(this,arguments)}finally{p=z}}}})(qp);Vp.exports=qp;var My=Vp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ry=m,Ze=My;function M(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Bp=new Set,Ui={};function dr(e,t){Yr(e,t),Yr(e+"Capture",t)}function Yr(e,t){for(Ui[e]=t,e=0;e<t.length;e++)Bp.add(t[e])}var Kt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),El=Object.prototype.hasOwnProperty,Ly=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,vd={},yd={};function Dy(e){return El.call(yd,e)?!0:El.call(vd,e)?!1:Ly.test(e)?yd[e]=!0:(vd[e]=!0,!1)}function Oy(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function _y(e,t,n,r){if(t===null||typeof t>"u"||Oy(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ze(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var Ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ne[e]=new ze(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ne[t]=new ze(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ne[e]=new ze(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ne[e]=new ze(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ne[e]=new ze(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ne[e]=new ze(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ne[e]=new ze(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ne[e]=new ze(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ne[e]=new ze(e,5,!1,e.toLowerCase(),null,!1,!1)});var Gc=/[\-:]([a-z])/g;function Kc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Gc,Kc);Ne[t]=new ze(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Gc,Kc);Ne[t]=new ze(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Gc,Kc);Ne[t]=new ze(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ne[e]=new ze(e,1,!1,e.toLowerCase(),null,!1,!1)});Ne.xlinkHref=new ze("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ne[e]=new ze(e,1,!1,e.toLowerCase(),null,!0,!0)});function Yc(e,t,n,r){var i=Ne.hasOwnProperty(t)?Ne[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(_y(t,n,i,r)&&(n=null),r||i===null?Dy(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var nn=Ry.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Io=Symbol.for("react.element"),wr=Symbol.for("react.portal"),br=Symbol.for("react.fragment"),Xc=Symbol.for("react.strict_mode"),Al=Symbol.for("react.profiler"),Up=Symbol.for("react.provider"),$p=Symbol.for("react.context"),Jc=Symbol.for("react.forward_ref"),Il=Symbol.for("react.suspense"),Ml=Symbol.for("react.suspense_list"),Zc=Symbol.for("react.memo"),un=Symbol.for("react.lazy"),Hp=Symbol.for("react.offscreen"),xd=Symbol.iterator;function vi(e){return e===null||typeof e!="object"?null:(e=xd&&e[xd]||e["@@iterator"],typeof e=="function"?e:null)}var ce=Object.assign,_a;function Ti(e){if(_a===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);_a=t&&t[1]||""}return`
`+_a+e}var Fa=!1;function za(e,t){if(!e||Fa)return"";Fa=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var c=`
`+i[a].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=a&&0<=l);break}}}finally{Fa=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ti(e):""}function Fy(e){switch(e.tag){case 5:return Ti(e.type);case 16:return Ti("Lazy");case 13:return Ti("Suspense");case 19:return Ti("SuspenseList");case 0:case 2:case 15:return e=za(e.type,!1),e;case 11:return e=za(e.type.render,!1),e;case 1:return e=za(e.type,!0),e;default:return""}}function Rl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case br:return"Fragment";case wr:return"Portal";case Al:return"Profiler";case Xc:return"StrictMode";case Il:return"Suspense";case Ml:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case $p:return(e.displayName||"Context")+".Consumer";case Up:return(e._context.displayName||"Context")+".Provider";case Jc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Zc:return t=e.displayName||null,t!==null?t:Rl(e.type)||"Memo";case un:t=e._payload,e=e._init;try{return Rl(e(t))}catch{}}return null}function zy(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Rl(t);case 8:return t===Xc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Mn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Wp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Vy(e){var t=Wp(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Mo(e){e._valueTracker||(e._valueTracker=Vy(e))}function Qp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Wp(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ks(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ll(e,t){var n=t.checked;return ce({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function wd(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Mn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Gp(e,t){t=t.checked,t!=null&&Yc(e,"checked",t,!1)}function Dl(e,t){Gp(e,t);var n=Mn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ol(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ol(e,t.type,Mn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function bd(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ol(e,t,n){(t!=="number"||ks(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ji=Array.isArray;function Mr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Mn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function _l(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(M(91));return ce({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function kd(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(M(92));if(ji(n)){if(1<n.length)throw Error(M(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Mn(n)}}function Kp(e,t){var n=Mn(t.value),r=Mn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Cd(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Yp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Fl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Yp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ro,Xp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ro=Ro||document.createElement("div"),Ro.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ro.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function $i(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ii={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qy=["Webkit","ms","Moz","O"];Object.keys(Ii).forEach(function(e){qy.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ii[t]=Ii[e]})});function Jp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ii.hasOwnProperty(e)&&Ii[e]?(""+t).trim():t+"px"}function Zp(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Jp(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var By=ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function zl(e,t){if(t){if(By[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(M(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(M(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(M(61))}if(t.style!=null&&typeof t.style!="object")throw Error(M(62))}}function Vl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ql=null;function eu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Bl=null,Rr=null,Lr=null;function Sd(e){if(e=xo(e)){if(typeof Bl!="function")throw Error(M(280));var t=e.stateNode;t&&(t=aa(t),Bl(e.stateNode,e.type,t))}}function em(e){Rr?Lr?Lr.push(e):Lr=[e]:Rr=e}function tm(){if(Rr){var e=Rr,t=Lr;if(Lr=Rr=null,Sd(e),t)for(e=0;e<t.length;e++)Sd(t[e])}}function nm(e,t){return e(t)}function rm(){}var Va=!1;function im(e,t,n){if(Va)return e(t,n);Va=!0;try{return nm(e,t,n)}finally{Va=!1,(Rr!==null||Lr!==null)&&(rm(),tm())}}function Hi(e,t){var n=e.stateNode;if(n===null)return null;var r=aa(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(M(231,t,typeof n));return n}var Ul=!1;if(Kt)try{var yi={};Object.defineProperty(yi,"passive",{get:function(){Ul=!0}}),window.addEventListener("test",yi,yi),window.removeEventListener("test",yi,yi)}catch{Ul=!1}function Uy(e,t,n,r,i,o,a,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var Mi=!1,Cs=null,Ss=!1,$l=null,$y={onError:function(e){Mi=!0,Cs=e}};function Hy(e,t,n,r,i,o,a,l,c){Mi=!1,Cs=null,Uy.apply($y,arguments)}function Wy(e,t,n,r,i,o,a,l,c){if(Hy.apply(this,arguments),Mi){if(Mi){var u=Cs;Mi=!1,Cs=null}else throw Error(M(198));Ss||(Ss=!0,$l=u)}}function hr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function om(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Nd(e){if(hr(e)!==e)throw Error(M(188))}function Qy(e){var t=e.alternate;if(!t){if(t=hr(e),t===null)throw Error(M(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Nd(i),e;if(o===r)return Nd(i),t;o=o.sibling}throw Error(M(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a)throw Error(M(189))}}if(n.alternate!==r)throw Error(M(190))}if(n.tag!==3)throw Error(M(188));return n.stateNode.current===n?e:t}function sm(e){return e=Qy(e),e!==null?am(e):null}function am(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=am(e);if(t!==null)return t;e=e.sibling}return null}var lm=Ze.unstable_scheduleCallback,Pd=Ze.unstable_cancelCallback,Gy=Ze.unstable_shouldYield,Ky=Ze.unstable_requestPaint,he=Ze.unstable_now,Yy=Ze.unstable_getCurrentPriorityLevel,tu=Ze.unstable_ImmediatePriority,cm=Ze.unstable_UserBlockingPriority,Ns=Ze.unstable_NormalPriority,Xy=Ze.unstable_LowPriority,um=Ze.unstable_IdlePriority,ra=null,Rt=null;function Jy(e){if(Rt&&typeof Rt.onCommitFiberRoot=="function")try{Rt.onCommitFiberRoot(ra,e,void 0,(e.current.flags&128)===128)}catch{}}var xt=Math.clz32?Math.clz32:tx,Zy=Math.log,ex=Math.LN2;function tx(e){return e>>>=0,e===0?32:31-(Zy(e)/ex|0)|0}var Lo=64,Do=4194304;function Ei(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ps(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=Ei(l):(o&=a,o!==0&&(r=Ei(o)))}else a=n&~i,a!==0?r=Ei(a):o!==0&&(r=Ei(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-xt(t),i=1<<n,r|=e[n],t&=~i;return r}function nx(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rx(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-xt(o),l=1<<a,c=i[a];c===-1?(!(l&n)||l&r)&&(i[a]=nx(l,t)):c<=t&&(e.expiredLanes|=l),o&=~l}}function Hl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function dm(){var e=Lo;return Lo<<=1,!(Lo&4194240)&&(Lo=64),e}function qa(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function vo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-xt(t),e[t]=n}function ix(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-xt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function nu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-xt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var J=0;function hm(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var pm,ru,mm,fm,gm,Wl=!1,Oo=[],Cn=null,Sn=null,Nn=null,Wi=new Map,Qi=new Map,hn=[],ox="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Td(e,t){switch(e){case"focusin":case"focusout":Cn=null;break;case"dragenter":case"dragleave":Sn=null;break;case"mouseover":case"mouseout":Nn=null;break;case"pointerover":case"pointerout":Wi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qi.delete(t.pointerId)}}function xi(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=xo(t),t!==null&&ru(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function sx(e,t,n,r,i){switch(t){case"focusin":return Cn=xi(Cn,e,t,n,r,i),!0;case"dragenter":return Sn=xi(Sn,e,t,n,r,i),!0;case"mouseover":return Nn=xi(Nn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Wi.set(o,xi(Wi.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Qi.set(o,xi(Qi.get(o)||null,e,t,n,r,i)),!0}return!1}function vm(e){var t=Wn(e.target);if(t!==null){var n=hr(t);if(n!==null){if(t=n.tag,t===13){if(t=om(n),t!==null){e.blockedOn=t,gm(e.priority,function(){mm(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function rs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ql(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ql=r,n.target.dispatchEvent(r),ql=null}else return t=xo(n),t!==null&&ru(t),e.blockedOn=n,!1;t.shift()}return!0}function jd(e,t,n){rs(e)&&n.delete(t)}function ax(){Wl=!1,Cn!==null&&rs(Cn)&&(Cn=null),Sn!==null&&rs(Sn)&&(Sn=null),Nn!==null&&rs(Nn)&&(Nn=null),Wi.forEach(jd),Qi.forEach(jd)}function wi(e,t){e.blockedOn===t&&(e.blockedOn=null,Wl||(Wl=!0,Ze.unstable_scheduleCallback(Ze.unstable_NormalPriority,ax)))}function Gi(e){function t(i){return wi(i,e)}if(0<Oo.length){wi(Oo[0],e);for(var n=1;n<Oo.length;n++){var r=Oo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Cn!==null&&wi(Cn,e),Sn!==null&&wi(Sn,e),Nn!==null&&wi(Nn,e),Wi.forEach(t),Qi.forEach(t),n=0;n<hn.length;n++)r=hn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<hn.length&&(n=hn[0],n.blockedOn===null);)vm(n),n.blockedOn===null&&hn.shift()}var Dr=nn.ReactCurrentBatchConfig,Ts=!0;function lx(e,t,n,r){var i=J,o=Dr.transition;Dr.transition=null;try{J=1,iu(e,t,n,r)}finally{J=i,Dr.transition=o}}function cx(e,t,n,r){var i=J,o=Dr.transition;Dr.transition=null;try{J=4,iu(e,t,n,r)}finally{J=i,Dr.transition=o}}function iu(e,t,n,r){if(Ts){var i=Ql(e,t,n,r);if(i===null)Xa(e,t,r,js,n),Td(e,r);else if(sx(i,e,t,n,r))r.stopPropagation();else if(Td(e,r),t&4&&-1<ox.indexOf(e)){for(;i!==null;){var o=xo(i);if(o!==null&&pm(o),o=Ql(e,t,n,r),o===null&&Xa(e,t,r,js,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Xa(e,t,r,null,n)}}var js=null;function Ql(e,t,n,r){if(js=null,e=eu(r),e=Wn(e),e!==null)if(t=hr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=om(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return js=e,null}function ym(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Yy()){case tu:return 1;case cm:return 4;case Ns:case Xy:return 16;case um:return 536870912;default:return 16}default:return 16}}var xn=null,ou=null,is=null;function xm(){if(is)return is;var e,t=ou,n=t.length,r,i="value"in xn?xn.value:xn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return is=i.slice(e,1<r?1-r:void 0)}function os(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function _o(){return!0}function Ed(){return!1}function tt(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?_o:Ed,this.isPropagationStopped=Ed,this}return ce(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=_o)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=_o)},persist:function(){},isPersistent:_o}),t}var ui={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},su=tt(ui),yo=ce({},ui,{view:0,detail:0}),ux=tt(yo),Ba,Ua,bi,ia=ce({},yo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:au,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==bi&&(bi&&e.type==="mousemove"?(Ba=e.screenX-bi.screenX,Ua=e.screenY-bi.screenY):Ua=Ba=0,bi=e),Ba)},movementY:function(e){return"movementY"in e?e.movementY:Ua}}),Ad=tt(ia),dx=ce({},ia,{dataTransfer:0}),hx=tt(dx),px=ce({},yo,{relatedTarget:0}),$a=tt(px),mx=ce({},ui,{animationName:0,elapsedTime:0,pseudoElement:0}),fx=tt(mx),gx=ce({},ui,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),vx=tt(gx),yx=ce({},ui,{data:0}),Id=tt(yx),xx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kx(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=bx[e])?!!t[e]:!1}function au(){return kx}var Cx=ce({},yo,{key:function(e){if(e.key){var t=xx[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=os(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?wx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:au,charCode:function(e){return e.type==="keypress"?os(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?os(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Sx=tt(Cx),Nx=ce({},ia,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Md=tt(Nx),Px=ce({},yo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:au}),Tx=tt(Px),jx=ce({},ui,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ex=tt(jx),Ax=ce({},ia,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ix=tt(Ax),Mx=[9,13,27,32],lu=Kt&&"CompositionEvent"in window,Ri=null;Kt&&"documentMode"in document&&(Ri=document.documentMode);var Rx=Kt&&"TextEvent"in window&&!Ri,wm=Kt&&(!lu||Ri&&8<Ri&&11>=Ri),Rd=" ",Ld=!1;function bm(e,t){switch(e){case"keyup":return Mx.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function km(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var kr=!1;function Lx(e,t){switch(e){case"compositionend":return km(t);case"keypress":return t.which!==32?null:(Ld=!0,Rd);case"textInput":return e=t.data,e===Rd&&Ld?null:e;default:return null}}function Dx(e,t){if(kr)return e==="compositionend"||!lu&&bm(e,t)?(e=xm(),is=ou=xn=null,kr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return wm&&t.locale!=="ko"?null:t.data;default:return null}}var Ox={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Dd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ox[e.type]:t==="textarea"}function Cm(e,t,n,r){em(r),t=Es(t,"onChange"),0<t.length&&(n=new su("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Li=null,Ki=null;function _x(e){Lm(e,0)}function oa(e){var t=Nr(e);if(Qp(t))return e}function Fx(e,t){if(e==="change")return t}var Sm=!1;if(Kt){var Ha;if(Kt){var Wa="oninput"in document;if(!Wa){var Od=document.createElement("div");Od.setAttribute("oninput","return;"),Wa=typeof Od.oninput=="function"}Ha=Wa}else Ha=!1;Sm=Ha&&(!document.documentMode||9<document.documentMode)}function _d(){Li&&(Li.detachEvent("onpropertychange",Nm),Ki=Li=null)}function Nm(e){if(e.propertyName==="value"&&oa(Ki)){var t=[];Cm(t,Ki,e,eu(e)),im(_x,t)}}function zx(e,t,n){e==="focusin"?(_d(),Li=t,Ki=n,Li.attachEvent("onpropertychange",Nm)):e==="focusout"&&_d()}function Vx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return oa(Ki)}function qx(e,t){if(e==="click")return oa(t)}function Bx(e,t){if(e==="input"||e==="change")return oa(t)}function Ux(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var bt=typeof Object.is=="function"?Object.is:Ux;function Yi(e,t){if(bt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!El.call(t,i)||!bt(e[i],t[i]))return!1}return!0}function Fd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function zd(e,t){var n=Fd(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Fd(n)}}function Pm(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Pm(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Tm(){for(var e=window,t=ks();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ks(e.document)}return t}function cu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function $x(e){var t=Tm(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Pm(n.ownerDocument.documentElement,n)){if(r!==null&&cu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=zd(n,o);var a=zd(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Hx=Kt&&"documentMode"in document&&11>=document.documentMode,Cr=null,Gl=null,Di=null,Kl=!1;function Vd(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Kl||Cr==null||Cr!==ks(r)||(r=Cr,"selectionStart"in r&&cu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Di&&Yi(Di,r)||(Di=r,r=Es(Gl,"onSelect"),0<r.length&&(t=new su("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Cr)))}function Fo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Sr={animationend:Fo("Animation","AnimationEnd"),animationiteration:Fo("Animation","AnimationIteration"),animationstart:Fo("Animation","AnimationStart"),transitionend:Fo("Transition","TransitionEnd")},Qa={},jm={};Kt&&(jm=document.createElement("div").style,"AnimationEvent"in window||(delete Sr.animationend.animation,delete Sr.animationiteration.animation,delete Sr.animationstart.animation),"TransitionEvent"in window||delete Sr.transitionend.transition);function sa(e){if(Qa[e])return Qa[e];if(!Sr[e])return e;var t=Sr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in jm)return Qa[e]=t[n];return e}var Em=sa("animationend"),Am=sa("animationiteration"),Im=sa("animationstart"),Mm=sa("transitionend"),Rm=new Map,qd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function On(e,t){Rm.set(e,t),dr(t,[e])}for(var Ga=0;Ga<qd.length;Ga++){var Ka=qd[Ga],Wx=Ka.toLowerCase(),Qx=Ka[0].toUpperCase()+Ka.slice(1);On(Wx,"on"+Qx)}On(Em,"onAnimationEnd");On(Am,"onAnimationIteration");On(Im,"onAnimationStart");On("dblclick","onDoubleClick");On("focusin","onFocus");On("focusout","onBlur");On(Mm,"onTransitionEnd");Yr("onMouseEnter",["mouseout","mouseover"]);Yr("onMouseLeave",["mouseout","mouseover"]);Yr("onPointerEnter",["pointerout","pointerover"]);Yr("onPointerLeave",["pointerout","pointerover"]);dr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));dr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));dr("onBeforeInput",["compositionend","keypress","textInput","paste"]);dr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));dr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));dr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ai="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ai));function Bd(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Wy(r,t,void 0,e),e.currentTarget=null}function Lm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==o&&i.isPropagationStopped())break e;Bd(i,l,u),o=c}else for(a=0;a<r.length;a++){if(l=r[a],c=l.instance,u=l.currentTarget,l=l.listener,c!==o&&i.isPropagationStopped())break e;Bd(i,l,u),o=c}}}if(Ss)throw e=$l,Ss=!1,$l=null,e}function ne(e,t){var n=t[ec];n===void 0&&(n=t[ec]=new Set);var r=e+"__bubble";n.has(r)||(Dm(t,e,2,!1),n.add(r))}function Ya(e,t,n){var r=0;t&&(r|=4),Dm(n,e,r,t)}var zo="_reactListening"+Math.random().toString(36).slice(2);function Xi(e){if(!e[zo]){e[zo]=!0,Bp.forEach(function(n){n!=="selectionchange"&&(Gx.has(n)||Ya(n,!1,e),Ya(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[zo]||(t[zo]=!0,Ya("selectionchange",!1,t))}}function Dm(e,t,n,r){switch(ym(t)){case 1:var i=lx;break;case 4:i=cx;break;default:i=iu}n=i.bind(null,t,n,e),i=void 0,!Ul||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Xa(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;a=a.return}for(;l!==null;){if(a=Wn(l),a===null)return;if(c=a.tag,c===5||c===6){r=o=a;continue e}l=l.parentNode}}r=r.return}im(function(){var u=o,d=eu(n),h=[];e:{var p=Rm.get(e);if(p!==void 0){var y=su,k=e;switch(e){case"keypress":if(os(n)===0)break e;case"keydown":case"keyup":y=Sx;break;case"focusin":k="focus",y=$a;break;case"focusout":k="blur",y=$a;break;case"beforeblur":case"afterblur":y=$a;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Ad;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=hx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Tx;break;case Em:case Am:case Im:y=fx;break;case Mm:y=Ex;break;case"scroll":y=ux;break;case"wheel":y=Ix;break;case"copy":case"cut":case"paste":y=vx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Md}var v=(t&4)!==0,b=!v&&e==="scroll",g=v?p!==null?p+"Capture":null:p;v=[];for(var f=u,x;f!==null;){x=f;var w=x.stateNode;if(x.tag===5&&w!==null&&(x=w,g!==null&&(w=Hi(f,g),w!=null&&v.push(Ji(f,w,x)))),b)break;f=f.return}0<v.length&&(p=new y(p,k,null,n,d),h.push({event:p,listeners:v}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",p&&n!==ql&&(k=n.relatedTarget||n.fromElement)&&(Wn(k)||k[Yt]))break e;if((y||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,y?(k=n.relatedTarget||n.toElement,y=u,k=k?Wn(k):null,k!==null&&(b=hr(k),k!==b||k.tag!==5&&k.tag!==6)&&(k=null)):(y=null,k=u),y!==k)){if(v=Ad,w="onMouseLeave",g="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(v=Md,w="onPointerLeave",g="onPointerEnter",f="pointer"),b=y==null?p:Nr(y),x=k==null?p:Nr(k),p=new v(w,f+"leave",y,n,d),p.target=b,p.relatedTarget=x,w=null,Wn(d)===u&&(v=new v(g,f+"enter",k,n,d),v.target=x,v.relatedTarget=b,w=v),b=w,y&&k)t:{for(v=y,g=k,f=0,x=v;x;x=mr(x))f++;for(x=0,w=g;w;w=mr(w))x++;for(;0<f-x;)v=mr(v),f--;for(;0<x-f;)g=mr(g),x--;for(;f--;){if(v===g||g!==null&&v===g.alternate)break t;v=mr(v),g=mr(g)}v=null}else v=null;y!==null&&Ud(h,p,y,v,!1),k!==null&&b!==null&&Ud(h,b,k,v,!0)}}e:{if(p=u?Nr(u):window,y=p.nodeName&&p.nodeName.toLowerCase(),y==="select"||y==="input"&&p.type==="file")var C=Fx;else if(Dd(p))if(Sm)C=Bx;else{C=Vx;var N=zx}else(y=p.nodeName)&&y.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(C=qx);if(C&&(C=C(e,u))){Cm(h,C,n,d);break e}N&&N(e,p,u),e==="focusout"&&(N=p._wrapperState)&&N.controlled&&p.type==="number"&&Ol(p,"number",p.value)}switch(N=u?Nr(u):window,e){case"focusin":(Dd(N)||N.contentEditable==="true")&&(Cr=N,Gl=u,Di=null);break;case"focusout":Di=Gl=Cr=null;break;case"mousedown":Kl=!0;break;case"contextmenu":case"mouseup":case"dragend":Kl=!1,Vd(h,n,d);break;case"selectionchange":if(Hx)break;case"keydown":case"keyup":Vd(h,n,d)}var P;if(lu)e:{switch(e){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else kr?bm(e,n)&&(S="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(S="onCompositionStart");S&&(wm&&n.locale!=="ko"&&(kr||S!=="onCompositionStart"?S==="onCompositionEnd"&&kr&&(P=xm()):(xn=d,ou="value"in xn?xn.value:xn.textContent,kr=!0)),N=Es(u,S),0<N.length&&(S=new Id(S,e,null,n,d),h.push({event:S,listeners:N}),P?S.data=P:(P=km(n),P!==null&&(S.data=P)))),(P=Rx?Lx(e,n):Dx(e,n))&&(u=Es(u,"onBeforeInput"),0<u.length&&(d=new Id("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:u}),d.data=P))}Lm(h,t)})}function Ji(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Es(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Hi(e,n),o!=null&&r.unshift(Ji(e,o,i)),o=Hi(e,t),o!=null&&r.push(Ji(e,o,i))),e=e.return}return r}function mr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ud(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&u!==null&&(l=u,i?(c=Hi(n,o),c!=null&&a.unshift(Ji(n,c,l))):i||(c=Hi(n,o),c!=null&&a.push(Ji(n,c,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Kx=/\r\n?/g,Yx=/\u0000|\uFFFD/g;function $d(e){return(typeof e=="string"?e:""+e).replace(Kx,`
`).replace(Yx,"")}function Vo(e,t,n){if(t=$d(t),$d(e)!==t&&n)throw Error(M(425))}function As(){}var Yl=null,Xl=null;function Jl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Zl=typeof setTimeout=="function"?setTimeout:void 0,Xx=typeof clearTimeout=="function"?clearTimeout:void 0,Hd=typeof Promise=="function"?Promise:void 0,Jx=typeof queueMicrotask=="function"?queueMicrotask:typeof Hd<"u"?function(e){return Hd.resolve(null).then(e).catch(Zx)}:Zl;function Zx(e){setTimeout(function(){throw e})}function Ja(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Gi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Gi(t)}function Pn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Wd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var di=Math.random().toString(36).slice(2),At="__reactFiber$"+di,Zi="__reactProps$"+di,Yt="__reactContainer$"+di,ec="__reactEvents$"+di,e0="__reactListeners$"+di,t0="__reactHandles$"+di;function Wn(e){var t=e[At];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Yt]||n[At]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Wd(e);e!==null;){if(n=e[At])return n;e=Wd(e)}return t}e=n,n=e.parentNode}return null}function xo(e){return e=e[At]||e[Yt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Nr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(M(33))}function aa(e){return e[Zi]||null}var tc=[],Pr=-1;function _n(e){return{current:e}}function re(e){0>Pr||(e.current=tc[Pr],tc[Pr]=null,Pr--)}function ee(e,t){Pr++,tc[Pr]=e.current,e.current=t}var Rn={},Me=_n(Rn),Be=_n(!1),ir=Rn;function Xr(e,t){var n=e.type.contextTypes;if(!n)return Rn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ue(e){return e=e.childContextTypes,e!=null}function Is(){re(Be),re(Me)}function Qd(e,t,n){if(Me.current!==Rn)throw Error(M(168));ee(Me,t),ee(Be,n)}function Om(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(M(108,zy(e)||"Unknown",i));return ce({},n,r)}function Ms(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Rn,ir=Me.current,ee(Me,e),ee(Be,Be.current),!0}function Gd(e,t,n){var r=e.stateNode;if(!r)throw Error(M(169));n?(e=Om(e,t,ir),r.__reactInternalMemoizedMergedChildContext=e,re(Be),re(Me),ee(Me,e)):re(Be),ee(Be,n)}var Ut=null,la=!1,Za=!1;function _m(e){Ut===null?Ut=[e]:Ut.push(e)}function n0(e){la=!0,_m(e)}function Fn(){if(!Za&&Ut!==null){Za=!0;var e=0,t=J;try{var n=Ut;for(J=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ut=null,la=!1}catch(i){throw Ut!==null&&(Ut=Ut.slice(e+1)),lm(tu,Fn),i}finally{J=t,Za=!1}}return null}var Tr=[],jr=0,Rs=null,Ls=0,rt=[],it=0,or=null,Ht=1,Wt="";function Un(e,t){Tr[jr++]=Ls,Tr[jr++]=Rs,Rs=e,Ls=t}function Fm(e,t,n){rt[it++]=Ht,rt[it++]=Wt,rt[it++]=or,or=e;var r=Ht;e=Wt;var i=32-xt(r)-1;r&=~(1<<i),n+=1;var o=32-xt(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Ht=1<<32-xt(t)+i|n<<i|r,Wt=o+e}else Ht=1<<o|n<<i|r,Wt=e}function uu(e){e.return!==null&&(Un(e,1),Fm(e,1,0))}function du(e){for(;e===Rs;)Rs=Tr[--jr],Tr[jr]=null,Ls=Tr[--jr],Tr[jr]=null;for(;e===or;)or=rt[--it],rt[it]=null,Wt=rt[--it],rt[it]=null,Ht=rt[--it],rt[it]=null}var Xe=null,Ye=null,ie=!1,yt=null;function zm(e,t){var n=ot(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Kd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Xe=e,Ye=Pn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Xe=e,Ye=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=or!==null?{id:Ht,overflow:Wt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ot(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Xe=e,Ye=null,!0):!1;default:return!1}}function nc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function rc(e){if(ie){var t=Ye;if(t){var n=t;if(!Kd(e,t)){if(nc(e))throw Error(M(418));t=Pn(n.nextSibling);var r=Xe;t&&Kd(e,t)?zm(r,n):(e.flags=e.flags&-4097|2,ie=!1,Xe=e)}}else{if(nc(e))throw Error(M(418));e.flags=e.flags&-4097|2,ie=!1,Xe=e}}}function Yd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Xe=e}function qo(e){if(e!==Xe)return!1;if(!ie)return Yd(e),ie=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Jl(e.type,e.memoizedProps)),t&&(t=Ye)){if(nc(e))throw Vm(),Error(M(418));for(;t;)zm(e,t),t=Pn(t.nextSibling)}if(Yd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(M(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ye=Pn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ye=null}}else Ye=Xe?Pn(e.stateNode.nextSibling):null;return!0}function Vm(){for(var e=Ye;e;)e=Pn(e.nextSibling)}function Jr(){Ye=Xe=null,ie=!1}function hu(e){yt===null?yt=[e]:yt.push(e)}var r0=nn.ReactCurrentBatchConfig;function ki(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(M(309));var r=n.stateNode}if(!r)throw Error(M(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=i.refs;a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(M(284));if(!n._owner)throw Error(M(290,e))}return e}function Bo(e,t){throw e=Object.prototype.toString.call(t),Error(M(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Xd(e){var t=e._init;return t(e._payload)}function qm(e){function t(g,f){if(e){var x=g.deletions;x===null?(g.deletions=[f],g.flags|=16):x.push(f)}}function n(g,f){if(!e)return null;for(;f!==null;)t(g,f),f=f.sibling;return null}function r(g,f){for(g=new Map;f!==null;)f.key!==null?g.set(f.key,f):g.set(f.index,f),f=f.sibling;return g}function i(g,f){return g=An(g,f),g.index=0,g.sibling=null,g}function o(g,f,x){return g.index=x,e?(x=g.alternate,x!==null?(x=x.index,x<f?(g.flags|=2,f):x):(g.flags|=2,f)):(g.flags|=1048576,f)}function a(g){return e&&g.alternate===null&&(g.flags|=2),g}function l(g,f,x,w){return f===null||f.tag!==6?(f=sl(x,g.mode,w),f.return=g,f):(f=i(f,x),f.return=g,f)}function c(g,f,x,w){var C=x.type;return C===br?d(g,f,x.props.children,w,x.key):f!==null&&(f.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===un&&Xd(C)===f.type)?(w=i(f,x.props),w.ref=ki(g,f,x),w.return=g,w):(w=hs(x.type,x.key,x.props,null,g.mode,w),w.ref=ki(g,f,x),w.return=g,w)}function u(g,f,x,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==x.containerInfo||f.stateNode.implementation!==x.implementation?(f=al(x,g.mode,w),f.return=g,f):(f=i(f,x.children||[]),f.return=g,f)}function d(g,f,x,w,C){return f===null||f.tag!==7?(f=nr(x,g.mode,w,C),f.return=g,f):(f=i(f,x),f.return=g,f)}function h(g,f,x){if(typeof f=="string"&&f!==""||typeof f=="number")return f=sl(""+f,g.mode,x),f.return=g,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Io:return x=hs(f.type,f.key,f.props,null,g.mode,x),x.ref=ki(g,null,f),x.return=g,x;case wr:return f=al(f,g.mode,x),f.return=g,f;case un:var w=f._init;return h(g,w(f._payload),x)}if(ji(f)||vi(f))return f=nr(f,g.mode,x,null),f.return=g,f;Bo(g,f)}return null}function p(g,f,x,w){var C=f!==null?f.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return C!==null?null:l(g,f,""+x,w);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Io:return x.key===C?c(g,f,x,w):null;case wr:return x.key===C?u(g,f,x,w):null;case un:return C=x._init,p(g,f,C(x._payload),w)}if(ji(x)||vi(x))return C!==null?null:d(g,f,x,w,null);Bo(g,x)}return null}function y(g,f,x,w,C){if(typeof w=="string"&&w!==""||typeof w=="number")return g=g.get(x)||null,l(f,g,""+w,C);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Io:return g=g.get(w.key===null?x:w.key)||null,c(f,g,w,C);case wr:return g=g.get(w.key===null?x:w.key)||null,u(f,g,w,C);case un:var N=w._init;return y(g,f,x,N(w._payload),C)}if(ji(w)||vi(w))return g=g.get(x)||null,d(f,g,w,C,null);Bo(f,w)}return null}function k(g,f,x,w){for(var C=null,N=null,P=f,S=f=0,j=null;P!==null&&S<x.length;S++){P.index>S?(j=P,P=null):j=P.sibling;var A=p(g,P,x[S],w);if(A===null){P===null&&(P=j);break}e&&P&&A.alternate===null&&t(g,P),f=o(A,f,S),N===null?C=A:N.sibling=A,N=A,P=j}if(S===x.length)return n(g,P),ie&&Un(g,S),C;if(P===null){for(;S<x.length;S++)P=h(g,x[S],w),P!==null&&(f=o(P,f,S),N===null?C=P:N.sibling=P,N=P);return ie&&Un(g,S),C}for(P=r(g,P);S<x.length;S++)j=y(P,g,S,x[S],w),j!==null&&(e&&j.alternate!==null&&P.delete(j.key===null?S:j.key),f=o(j,f,S),N===null?C=j:N.sibling=j,N=j);return e&&P.forEach(function(O){return t(g,O)}),ie&&Un(g,S),C}function v(g,f,x,w){var C=vi(x);if(typeof C!="function")throw Error(M(150));if(x=C.call(x),x==null)throw Error(M(151));for(var N=C=null,P=f,S=f=0,j=null,A=x.next();P!==null&&!A.done;S++,A=x.next()){P.index>S?(j=P,P=null):j=P.sibling;var O=p(g,P,A.value,w);if(O===null){P===null&&(P=j);break}e&&P&&O.alternate===null&&t(g,P),f=o(O,f,S),N===null?C=O:N.sibling=O,N=O,P=j}if(A.done)return n(g,P),ie&&Un(g,S),C;if(P===null){for(;!A.done;S++,A=x.next())A=h(g,A.value,w),A!==null&&(f=o(A,f,S),N===null?C=A:N.sibling=A,N=A);return ie&&Un(g,S),C}for(P=r(g,P);!A.done;S++,A=x.next())A=y(P,g,S,A.value,w),A!==null&&(e&&A.alternate!==null&&P.delete(A.key===null?S:A.key),f=o(A,f,S),N===null?C=A:N.sibling=A,N=A);return e&&P.forEach(function(R){return t(g,R)}),ie&&Un(g,S),C}function b(g,f,x,w){if(typeof x=="object"&&x!==null&&x.type===br&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Io:e:{for(var C=x.key,N=f;N!==null;){if(N.key===C){if(C=x.type,C===br){if(N.tag===7){n(g,N.sibling),f=i(N,x.props.children),f.return=g,g=f;break e}}else if(N.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===un&&Xd(C)===N.type){n(g,N.sibling),f=i(N,x.props),f.ref=ki(g,N,x),f.return=g,g=f;break e}n(g,N);break}else t(g,N);N=N.sibling}x.type===br?(f=nr(x.props.children,g.mode,w,x.key),f.return=g,g=f):(w=hs(x.type,x.key,x.props,null,g.mode,w),w.ref=ki(g,f,x),w.return=g,g=w)}return a(g);case wr:e:{for(N=x.key;f!==null;){if(f.key===N)if(f.tag===4&&f.stateNode.containerInfo===x.containerInfo&&f.stateNode.implementation===x.implementation){n(g,f.sibling),f=i(f,x.children||[]),f.return=g,g=f;break e}else{n(g,f);break}else t(g,f);f=f.sibling}f=al(x,g.mode,w),f.return=g,g=f}return a(g);case un:return N=x._init,b(g,f,N(x._payload),w)}if(ji(x))return k(g,f,x,w);if(vi(x))return v(g,f,x,w);Bo(g,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,f!==null&&f.tag===6?(n(g,f.sibling),f=i(f,x),f.return=g,g=f):(n(g,f),f=sl(x,g.mode,w),f.return=g,g=f),a(g)):n(g,f)}return b}var Zr=qm(!0),Bm=qm(!1),Ds=_n(null),Os=null,Er=null,pu=null;function mu(){pu=Er=Os=null}function fu(e){var t=Ds.current;re(Ds),e._currentValue=t}function ic(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Or(e,t){Os=e,pu=Er=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(qe=!0),e.firstContext=null)}function lt(e){var t=e._currentValue;if(pu!==e)if(e={context:e,memoizedValue:t,next:null},Er===null){if(Os===null)throw Error(M(308));Er=e,Os.dependencies={lanes:0,firstContext:e}}else Er=Er.next=e;return t}var Qn=null;function gu(e){Qn===null?Qn=[e]:Qn.push(e)}function Um(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,gu(t)):(n.next=i.next,i.next=n),t.interleaved=n,Xt(e,r)}function Xt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var dn=!1;function vu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $m(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Qt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Tn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,K&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Xt(e,n)}return i=r.interleaved,i===null?(t.next=t,gu(r)):(t.next=i.next,i.next=t),r.interleaved=t,Xt(e,n)}function ss(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,nu(e,n)}}function Jd(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function _s(e,t,n,r){var i=e.updateQueue;dn=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,u=c.next;c.next=null,a===null?o=u:a.next=u,a=c;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==a&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=c))}if(o!==null){var h=i.baseState;a=0,d=u=c=null,l=o;do{var p=l.lane,y=l.eventTime;if((r&p)===p){d!==null&&(d=d.next={eventTime:y,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var k=e,v=l;switch(p=t,y=n,v.tag){case 1:if(k=v.payload,typeof k=="function"){h=k.call(y,h,p);break e}h=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=v.payload,p=typeof k=="function"?k.call(y,h,p):k,p==null)break e;h=ce({},h,p);break e;case 2:dn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[l]:p.push(l))}else y={eventTime:y,lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=y,c=h):d=d.next=y,a|=p;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;p=l,l=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(d===null&&(c=h),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);ar|=a,e.lanes=a,e.memoizedState=h}}function Zd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(M(191,i));i.call(r)}}}var wo={},Lt=_n(wo),eo=_n(wo),to=_n(wo);function Gn(e){if(e===wo)throw Error(M(174));return e}function yu(e,t){switch(ee(to,t),ee(eo,e),ee(Lt,wo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Fl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Fl(t,e)}re(Lt),ee(Lt,t)}function ei(){re(Lt),re(eo),re(to)}function Hm(e){Gn(to.current);var t=Gn(Lt.current),n=Fl(t,e.type);t!==n&&(ee(eo,e),ee(Lt,n))}function xu(e){eo.current===e&&(re(Lt),re(eo))}var ae=_n(0);function Fs(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var el=[];function wu(){for(var e=0;e<el.length;e++)el[e]._workInProgressVersionPrimary=null;el.length=0}var as=nn.ReactCurrentDispatcher,tl=nn.ReactCurrentBatchConfig,sr=0,le=null,ge=null,we=null,zs=!1,Oi=!1,no=0,i0=0;function je(){throw Error(M(321))}function bu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!bt(e[n],t[n]))return!1;return!0}function ku(e,t,n,r,i,o){if(sr=o,le=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,as.current=e===null||e.memoizedState===null?l0:c0,e=n(r,i),Oi){o=0;do{if(Oi=!1,no=0,25<=o)throw Error(M(301));o+=1,we=ge=null,t.updateQueue=null,as.current=u0,e=n(r,i)}while(Oi)}if(as.current=Vs,t=ge!==null&&ge.next!==null,sr=0,we=ge=le=null,zs=!1,t)throw Error(M(300));return e}function Cu(){var e=no!==0;return no=0,e}function Pt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return we===null?le.memoizedState=we=e:we=we.next=e,we}function ct(){if(ge===null){var e=le.alternate;e=e!==null?e.memoizedState:null}else e=ge.next;var t=we===null?le.memoizedState:we.next;if(t!==null)we=t,ge=e;else{if(e===null)throw Error(M(310));ge=e,e={memoizedState:ge.memoizedState,baseState:ge.baseState,baseQueue:ge.baseQueue,queue:ge.queue,next:null},we===null?le.memoizedState=we=e:we=we.next=e}return we}function ro(e,t){return typeof t=="function"?t(e):t}function nl(e){var t=ct(),n=t.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=e;var r=ge,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=a=null,c=null,u=o;do{var d=u.lane;if((sr&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=h,a=r):c=c.next=h,le.lanes|=d,ar|=d}u=u.next}while(u!==null&&u!==o);c===null?a=r:c.next=l,bt(r,t.memoizedState)||(qe=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,le.lanes|=o,ar|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function rl(e){var t=ct(),n=t.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);bt(o,t.memoizedState)||(qe=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Wm(){}function Qm(e,t){var n=le,r=ct(),i=t(),o=!bt(r.memoizedState,i);if(o&&(r.memoizedState=i,qe=!0),r=r.queue,Su(Ym.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||we!==null&&we.memoizedState.tag&1){if(n.flags|=2048,io(9,Km.bind(null,n,r,i,t),void 0,null),be===null)throw Error(M(349));sr&30||Gm(n,t,i)}return i}function Gm(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=le.updateQueue,t===null?(t={lastEffect:null,stores:null},le.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Km(e,t,n,r){t.value=n,t.getSnapshot=r,Xm(t)&&Jm(e)}function Ym(e,t,n){return n(function(){Xm(t)&&Jm(e)})}function Xm(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!bt(e,n)}catch{return!0}}function Jm(e){var t=Xt(e,1);t!==null&&wt(t,e,1,-1)}function eh(e){var t=Pt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ro,lastRenderedState:e},t.queue=e,e=e.dispatch=a0.bind(null,le,e),[t.memoizedState,e]}function io(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=le.updateQueue,t===null?(t={lastEffect:null,stores:null},le.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Zm(){return ct().memoizedState}function ls(e,t,n,r){var i=Pt();le.flags|=e,i.memoizedState=io(1|t,n,void 0,r===void 0?null:r)}function ca(e,t,n,r){var i=ct();r=r===void 0?null:r;var o=void 0;if(ge!==null){var a=ge.memoizedState;if(o=a.destroy,r!==null&&bu(r,a.deps)){i.memoizedState=io(t,n,o,r);return}}le.flags|=e,i.memoizedState=io(1|t,n,o,r)}function th(e,t){return ls(8390656,8,e,t)}function Su(e,t){return ca(2048,8,e,t)}function ef(e,t){return ca(4,2,e,t)}function tf(e,t){return ca(4,4,e,t)}function nf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function rf(e,t,n){return n=n!=null?n.concat([e]):null,ca(4,4,nf.bind(null,t,e),n)}function Nu(){}function of(e,t){var n=ct();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&bu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function sf(e,t){var n=ct();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&bu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function af(e,t,n){return sr&21?(bt(n,t)||(n=dm(),le.lanes|=n,ar|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,qe=!0),e.memoizedState=n)}function o0(e,t){var n=J;J=n!==0&&4>n?n:4,e(!0);var r=tl.transition;tl.transition={};try{e(!1),t()}finally{J=n,tl.transition=r}}function lf(){return ct().memoizedState}function s0(e,t,n){var r=En(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},cf(e))uf(t,n);else if(n=Um(e,t,n,r),n!==null){var i=Fe();wt(n,e,r,i),df(n,t,r)}}function a0(e,t,n){var r=En(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(cf(e))uf(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,n);if(i.hasEagerState=!0,i.eagerState=l,bt(l,a)){var c=t.interleaved;c===null?(i.next=i,gu(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=Um(e,t,i,r),n!==null&&(i=Fe(),wt(n,e,r,i),df(n,t,r))}}function cf(e){var t=e.alternate;return e===le||t!==null&&t===le}function uf(e,t){Oi=zs=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function df(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,nu(e,n)}}var Vs={readContext:lt,useCallback:je,useContext:je,useEffect:je,useImperativeHandle:je,useInsertionEffect:je,useLayoutEffect:je,useMemo:je,useReducer:je,useRef:je,useState:je,useDebugValue:je,useDeferredValue:je,useTransition:je,useMutableSource:je,useSyncExternalStore:je,useId:je,unstable_isNewReconciler:!1},l0={readContext:lt,useCallback:function(e,t){return Pt().memoizedState=[e,t===void 0?null:t],e},useContext:lt,useEffect:th,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ls(4194308,4,nf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ls(4194308,4,e,t)},useInsertionEffect:function(e,t){return ls(4,2,e,t)},useMemo:function(e,t){var n=Pt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Pt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=s0.bind(null,le,e),[r.memoizedState,e]},useRef:function(e){var t=Pt();return e={current:e},t.memoizedState=e},useState:eh,useDebugValue:Nu,useDeferredValue:function(e){return Pt().memoizedState=e},useTransition:function(){var e=eh(!1),t=e[0];return e=o0.bind(null,e[1]),Pt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=le,i=Pt();if(ie){if(n===void 0)throw Error(M(407));n=n()}else{if(n=t(),be===null)throw Error(M(349));sr&30||Gm(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,th(Ym.bind(null,r,o,e),[e]),r.flags|=2048,io(9,Km.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Pt(),t=be.identifierPrefix;if(ie){var n=Wt,r=Ht;n=(r&~(1<<32-xt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=no++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=i0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},c0={readContext:lt,useCallback:of,useContext:lt,useEffect:Su,useImperativeHandle:rf,useInsertionEffect:ef,useLayoutEffect:tf,useMemo:sf,useReducer:nl,useRef:Zm,useState:function(){return nl(ro)},useDebugValue:Nu,useDeferredValue:function(e){var t=ct();return af(t,ge.memoizedState,e)},useTransition:function(){var e=nl(ro)[0],t=ct().memoizedState;return[e,t]},useMutableSource:Wm,useSyncExternalStore:Qm,useId:lf,unstable_isNewReconciler:!1},u0={readContext:lt,useCallback:of,useContext:lt,useEffect:Su,useImperativeHandle:rf,useInsertionEffect:ef,useLayoutEffect:tf,useMemo:sf,useReducer:rl,useRef:Zm,useState:function(){return rl(ro)},useDebugValue:Nu,useDeferredValue:function(e){var t=ct();return ge===null?t.memoizedState=e:af(t,ge.memoizedState,e)},useTransition:function(){var e=rl(ro)[0],t=ct().memoizedState;return[e,t]},useMutableSource:Wm,useSyncExternalStore:Qm,useId:lf,unstable_isNewReconciler:!1};function pt(e,t){if(e&&e.defaultProps){t=ce({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function oc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ce({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ua={isMounted:function(e){return(e=e._reactInternals)?hr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Fe(),i=En(e),o=Qt(r,i);o.payload=t,n!=null&&(o.callback=n),t=Tn(e,o,i),t!==null&&(wt(t,e,i,r),ss(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Fe(),i=En(e),o=Qt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Tn(e,o,i),t!==null&&(wt(t,e,i,r),ss(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Fe(),r=En(e),i=Qt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Tn(e,i,r),t!==null&&(wt(t,e,r,n),ss(t,e,r))}};function nh(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!Yi(n,r)||!Yi(i,o):!0}function hf(e,t,n){var r=!1,i=Rn,o=t.contextType;return typeof o=="object"&&o!==null?o=lt(o):(i=Ue(t)?ir:Me.current,r=t.contextTypes,o=(r=r!=null)?Xr(e,i):Rn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ua,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function rh(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ua.enqueueReplaceState(t,t.state,null)}function sc(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},vu(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=lt(o):(o=Ue(t)?ir:Me.current,i.context=Xr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(oc(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ua.enqueueReplaceState(i,i.state,null),_s(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function ti(e,t){try{var n="",r=t;do n+=Fy(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function il(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ac(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var d0=typeof WeakMap=="function"?WeakMap:Map;function pf(e,t,n){n=Qt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Bs||(Bs=!0,vc=r),ac(e,t)},n}function mf(e,t,n){n=Qt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ac(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){ac(e,t),typeof r!="function"&&(jn===null?jn=new Set([this]):jn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function ih(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new d0;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=N0.bind(null,e,t,n),t.then(e,e))}function oh(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function sh(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Qt(-1,1),t.tag=2,Tn(n,t,1))),n.lanes|=1),e)}var h0=nn.ReactCurrentOwner,qe=!1;function Oe(e,t,n,r){t.child=e===null?Bm(t,null,n,r):Zr(t,e.child,n,r)}function ah(e,t,n,r,i){n=n.render;var o=t.ref;return Or(t,i),r=ku(e,t,n,r,o,i),n=Cu(),e!==null&&!qe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Jt(e,t,i)):(ie&&n&&uu(t),t.flags|=1,Oe(e,t,r,i),t.child)}function lh(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Ru(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,ff(e,t,o,r,i)):(e=hs(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:Yi,n(a,r)&&e.ref===t.ref)return Jt(e,t,i)}return t.flags|=1,e=An(o,r),e.ref=t.ref,e.return=t,t.child=e}function ff(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Yi(o,r)&&e.ref===t.ref)if(qe=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(qe=!0);else return t.lanes=e.lanes,Jt(e,t,i)}return lc(e,t,n,r,i)}function gf(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ee(Ir,Ge),Ge|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ee(Ir,Ge),Ge|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,ee(Ir,Ge),Ge|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,ee(Ir,Ge),Ge|=r;return Oe(e,t,i,n),t.child}function vf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function lc(e,t,n,r,i){var o=Ue(n)?ir:Me.current;return o=Xr(t,o),Or(t,i),n=ku(e,t,n,r,o,i),r=Cu(),e!==null&&!qe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Jt(e,t,i)):(ie&&r&&uu(t),t.flags|=1,Oe(e,t,n,i),t.child)}function ch(e,t,n,r,i){if(Ue(n)){var o=!0;Ms(t)}else o=!1;if(Or(t,i),t.stateNode===null)cs(e,t),hf(t,n,r),sc(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var c=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=lt(u):(u=Ue(n)?ir:Me.current,u=Xr(t,u));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||c!==u)&&rh(t,a,r,u),dn=!1;var p=t.memoizedState;a.state=p,_s(t,r,a,i),c=t.memoizedState,l!==r||p!==c||Be.current||dn?(typeof d=="function"&&(oc(t,n,d,r),c=t.memoizedState),(l=dn||nh(t,n,l,r,p,c,u))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),a.props=r,a.state=c,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,$m(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:pt(t.type,l),a.props=u,h=t.pendingProps,p=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=lt(c):(c=Ue(n)?ir:Me.current,c=Xr(t,c));var y=n.getDerivedStateFromProps;(d=typeof y=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==h||p!==c)&&rh(t,a,r,c),dn=!1,p=t.memoizedState,a.state=p,_s(t,r,a,i);var k=t.memoizedState;l!==h||p!==k||Be.current||dn?(typeof y=="function"&&(oc(t,n,y,r),k=t.memoizedState),(u=dn||nh(t,n,u,r,p,k,c)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,k,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,k,c)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=k),a.props=r,a.state=k,a.context=c,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return cc(e,t,n,r,o,i)}function cc(e,t,n,r,i,o){vf(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&Gd(t,n,!1),Jt(e,t,o);r=t.stateNode,h0.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Zr(t,e.child,null,o),t.child=Zr(t,null,l,o)):Oe(e,t,l,o),t.memoizedState=r.state,i&&Gd(t,n,!0),t.child}function yf(e){var t=e.stateNode;t.pendingContext?Qd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Qd(e,t.context,!1),yu(e,t.containerInfo)}function uh(e,t,n,r,i){return Jr(),hu(i),t.flags|=256,Oe(e,t,n,r),t.child}var uc={dehydrated:null,treeContext:null,retryLane:0};function dc(e){return{baseLanes:e,cachePool:null,transitions:null}}function xf(e,t,n){var r=t.pendingProps,i=ae.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ee(ae,i&1),e===null)return rc(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=pa(a,r,0,null),e=nr(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=dc(n),t.memoizedState=uc,e):Pu(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return p0(e,t,a,r,l,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,l=i.sibling;var c={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=An(i,c),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=An(l,o):(o=nr(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?dc(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=uc,r}return o=e.child,e=o.sibling,r=An(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Pu(e,t){return t=pa({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Uo(e,t,n,r){return r!==null&&hu(r),Zr(t,e.child,null,n),e=Pu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function p0(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=il(Error(M(422))),Uo(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=pa({mode:"visible",children:r.children},i,0,null),o=nr(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Zr(t,e.child,null,a),t.child.memoizedState=dc(a),t.memoizedState=uc,o);if(!(t.mode&1))return Uo(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(M(419)),r=il(o,r,void 0),Uo(e,t,a,r)}if(l=(a&e.childLanes)!==0,qe||l){if(r=be,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Xt(e,i),wt(r,e,i,-1))}return Mu(),r=il(Error(M(421))),Uo(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=P0.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Ye=Pn(i.nextSibling),Xe=t,ie=!0,yt=null,e!==null&&(rt[it++]=Ht,rt[it++]=Wt,rt[it++]=or,Ht=e.id,Wt=e.overflow,or=t),t=Pu(t,r.children),t.flags|=4096,t)}function dh(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ic(e.return,t,n)}function ol(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function wf(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Oe(e,t,r.children,n),r=ae.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&dh(e,n,t);else if(e.tag===19)dh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ee(ae,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Fs(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ol(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Fs(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ol(t,!0,n,null,o);break;case"together":ol(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function cs(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Jt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ar|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(M(153));if(t.child!==null){for(e=t.child,n=An(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=An(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function m0(e,t,n){switch(t.tag){case 3:yf(t),Jr();break;case 5:Hm(t);break;case 1:Ue(t.type)&&Ms(t);break;case 4:yu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ee(Ds,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ee(ae,ae.current&1),t.flags|=128,null):n&t.child.childLanes?xf(e,t,n):(ee(ae,ae.current&1),e=Jt(e,t,n),e!==null?e.sibling:null);ee(ae,ae.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return wf(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ee(ae,ae.current),r)break;return null;case 22:case 23:return t.lanes=0,gf(e,t,n)}return Jt(e,t,n)}var bf,hc,kf,Cf;bf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};hc=function(){};kf=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Gn(Lt.current);var o=null;switch(n){case"input":i=Ll(e,i),r=Ll(e,r),o=[];break;case"select":i=ce({},i,{value:void 0}),r=ce({},r,{value:void 0}),o=[];break;case"textarea":i=_l(e,i),r=_l(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=As)}zl(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ui.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var c=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&l[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(o||(o=[]),o.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(o=o||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ui.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&ne("scroll",e),o||l===c||(o=[])):(o=o||[]).push(u,c))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Cf=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ci(e,t){if(!ie)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ee(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function f0(e,t,n){var r=t.pendingProps;switch(du(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ee(t),null;case 1:return Ue(t.type)&&Is(),Ee(t),null;case 3:return r=t.stateNode,ei(),re(Be),re(Me),wu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(qo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,yt!==null&&(wc(yt),yt=null))),hc(e,t),Ee(t),null;case 5:xu(t);var i=Gn(to.current);if(n=t.type,e!==null&&t.stateNode!=null)kf(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(M(166));return Ee(t),null}if(e=Gn(Lt.current),qo(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[At]=t,r[Zi]=o,e=(t.mode&1)!==0,n){case"dialog":ne("cancel",r),ne("close",r);break;case"iframe":case"object":case"embed":ne("load",r);break;case"video":case"audio":for(i=0;i<Ai.length;i++)ne(Ai[i],r);break;case"source":ne("error",r);break;case"img":case"image":case"link":ne("error",r),ne("load",r);break;case"details":ne("toggle",r);break;case"input":wd(r,o),ne("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ne("invalid",r);break;case"textarea":kd(r,o),ne("invalid",r)}zl(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&Vo(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&Vo(r.textContent,l,e),i=["children",""+l]):Ui.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&ne("scroll",r)}switch(n){case"input":Mo(r),bd(r,o,!0);break;case"textarea":Mo(r),Cd(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=As)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Yp(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[At]=t,e[Zi]=r,bf(e,t,!1,!1),t.stateNode=e;e:{switch(a=Vl(n,r),n){case"dialog":ne("cancel",e),ne("close",e),i=r;break;case"iframe":case"object":case"embed":ne("load",e),i=r;break;case"video":case"audio":for(i=0;i<Ai.length;i++)ne(Ai[i],e);i=r;break;case"source":ne("error",e),i=r;break;case"img":case"image":case"link":ne("error",e),ne("load",e),i=r;break;case"details":ne("toggle",e),i=r;break;case"input":wd(e,r),i=Ll(e,r),ne("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ce({},r,{value:void 0}),ne("invalid",e);break;case"textarea":kd(e,r),i=_l(e,r),ne("invalid",e);break;default:i=r}zl(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var c=l[o];o==="style"?Zp(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Xp(e,c)):o==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&$i(e,c):typeof c=="number"&&$i(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ui.hasOwnProperty(o)?c!=null&&o==="onScroll"&&ne("scroll",e):c!=null&&Yc(e,o,c,a))}switch(n){case"input":Mo(e),bd(e,r,!1);break;case"textarea":Mo(e),Cd(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Mn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Mr(e,!!r.multiple,o,!1):r.defaultValue!=null&&Mr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=As)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ee(t),null;case 6:if(e&&t.stateNode!=null)Cf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(M(166));if(n=Gn(to.current),Gn(Lt.current),qo(t)){if(r=t.stateNode,n=t.memoizedProps,r[At]=t,(o=r.nodeValue!==n)&&(e=Xe,e!==null))switch(e.tag){case 3:Vo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Vo(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[At]=t,t.stateNode=r}return Ee(t),null;case 13:if(re(ae),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ie&&Ye!==null&&t.mode&1&&!(t.flags&128))Vm(),Jr(),t.flags|=98560,o=!1;else if(o=qo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(M(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(M(317));o[At]=t}else Jr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ee(t),o=!1}else yt!==null&&(wc(yt),yt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ae.current&1?ye===0&&(ye=3):Mu())),t.updateQueue!==null&&(t.flags|=4),Ee(t),null);case 4:return ei(),hc(e,t),e===null&&Xi(t.stateNode.containerInfo),Ee(t),null;case 10:return fu(t.type._context),Ee(t),null;case 17:return Ue(t.type)&&Is(),Ee(t),null;case 19:if(re(ae),o=t.memoizedState,o===null)return Ee(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)Ci(o,!1);else{if(ye!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Fs(e),a!==null){for(t.flags|=128,Ci(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ee(ae,ae.current&1|2),t.child}e=e.sibling}o.tail!==null&&he()>ni&&(t.flags|=128,r=!0,Ci(o,!1),t.lanes=4194304)}else{if(!r)if(e=Fs(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ci(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!ie)return Ee(t),null}else 2*he()-o.renderingStartTime>ni&&n!==1073741824&&(t.flags|=128,r=!0,Ci(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=he(),t.sibling=null,n=ae.current,ee(ae,r?n&1|2:n&1),t):(Ee(t),null);case 22:case 23:return Iu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ge&1073741824&&(Ee(t),t.subtreeFlags&6&&(t.flags|=8192)):Ee(t),null;case 24:return null;case 25:return null}throw Error(M(156,t.tag))}function g0(e,t){switch(du(t),t.tag){case 1:return Ue(t.type)&&Is(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ei(),re(Be),re(Me),wu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return xu(t),null;case 13:if(re(ae),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(M(340));Jr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return re(ae),null;case 4:return ei(),null;case 10:return fu(t.type._context),null;case 22:case 23:return Iu(),null;case 24:return null;default:return null}}var $o=!1,Ie=!1,v0=typeof WeakSet=="function"?WeakSet:Set,_=null;function Ar(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){de(e,t,r)}else n.current=null}function pc(e,t,n){try{n()}catch(r){de(e,t,r)}}var hh=!1;function y0(e,t){if(Yl=Ts,e=Tm(),cu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,l=-1,c=-1,u=0,d=0,h=e,p=null;t:for(;;){for(var y;h!==n||i!==0&&h.nodeType!==3||(l=a+i),h!==o||r!==0&&h.nodeType!==3||(c=a+r),h.nodeType===3&&(a+=h.nodeValue.length),(y=h.firstChild)!==null;)p=h,h=y;for(;;){if(h===e)break t;if(p===n&&++u===i&&(l=a),p===o&&++d===r&&(c=a),(y=h.nextSibling)!==null)break;h=p,p=h.parentNode}h=y}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Xl={focusedElem:e,selectionRange:n},Ts=!1,_=t;_!==null;)if(t=_,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,_=e;else for(;_!==null;){t=_;try{var k=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var v=k.memoizedProps,b=k.memoizedState,g=t.stateNode,f=g.getSnapshotBeforeUpdate(t.elementType===t.type?v:pt(t.type,v),b);g.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(M(163))}}catch(w){de(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,_=e;break}_=t.return}return k=hh,hh=!1,k}function _i(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&pc(t,n,o)}i=i.next}while(i!==r)}}function da(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function mc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Sf(e){var t=e.alternate;t!==null&&(e.alternate=null,Sf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[At],delete t[Zi],delete t[ec],delete t[e0],delete t[t0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Nf(e){return e.tag===5||e.tag===3||e.tag===4}function ph(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Nf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function fc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=As));else if(r!==4&&(e=e.child,e!==null))for(fc(e,t,n),e=e.sibling;e!==null;)fc(e,t,n),e=e.sibling}function gc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(gc(e,t,n),e=e.sibling;e!==null;)gc(e,t,n),e=e.sibling}var ke=null,vt=!1;function on(e,t,n){for(n=n.child;n!==null;)Pf(e,t,n),n=n.sibling}function Pf(e,t,n){if(Rt&&typeof Rt.onCommitFiberUnmount=="function")try{Rt.onCommitFiberUnmount(ra,n)}catch{}switch(n.tag){case 5:Ie||Ar(n,t);case 6:var r=ke,i=vt;ke=null,on(e,t,n),ke=r,vt=i,ke!==null&&(vt?(e=ke,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ke.removeChild(n.stateNode));break;case 18:ke!==null&&(vt?(e=ke,n=n.stateNode,e.nodeType===8?Ja(e.parentNode,n):e.nodeType===1&&Ja(e,n),Gi(e)):Ja(ke,n.stateNode));break;case 4:r=ke,i=vt,ke=n.stateNode.containerInfo,vt=!0,on(e,t,n),ke=r,vt=i;break;case 0:case 11:case 14:case 15:if(!Ie&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&pc(n,t,a),i=i.next}while(i!==r)}on(e,t,n);break;case 1:if(!Ie&&(Ar(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){de(n,t,l)}on(e,t,n);break;case 21:on(e,t,n);break;case 22:n.mode&1?(Ie=(r=Ie)||n.memoizedState!==null,on(e,t,n),Ie=r):on(e,t,n);break;default:on(e,t,n)}}function mh(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new v0),t.forEach(function(r){var i=T0.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function ht(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:ke=l.stateNode,vt=!1;break e;case 3:ke=l.stateNode.containerInfo,vt=!0;break e;case 4:ke=l.stateNode.containerInfo,vt=!0;break e}l=l.return}if(ke===null)throw Error(M(160));Pf(o,a,i),ke=null,vt=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){de(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Tf(t,e),t=t.sibling}function Tf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ht(t,e),Nt(e),r&4){try{_i(3,e,e.return),da(3,e)}catch(v){de(e,e.return,v)}try{_i(5,e,e.return)}catch(v){de(e,e.return,v)}}break;case 1:ht(t,e),Nt(e),r&512&&n!==null&&Ar(n,n.return);break;case 5:if(ht(t,e),Nt(e),r&512&&n!==null&&Ar(n,n.return),e.flags&32){var i=e.stateNode;try{$i(i,"")}catch(v){de(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&Gp(i,o),Vl(l,a);var u=Vl(l,o);for(a=0;a<c.length;a+=2){var d=c[a],h=c[a+1];d==="style"?Zp(i,h):d==="dangerouslySetInnerHTML"?Xp(i,h):d==="children"?$i(i,h):Yc(i,d,h,u)}switch(l){case"input":Dl(i,o);break;case"textarea":Kp(i,o);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?Mr(i,!!o.multiple,y,!1):p!==!!o.multiple&&(o.defaultValue!=null?Mr(i,!!o.multiple,o.defaultValue,!0):Mr(i,!!o.multiple,o.multiple?[]:"",!1))}i[Zi]=o}catch(v){de(e,e.return,v)}}break;case 6:if(ht(t,e),Nt(e),r&4){if(e.stateNode===null)throw Error(M(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(v){de(e,e.return,v)}}break;case 3:if(ht(t,e),Nt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Gi(t.containerInfo)}catch(v){de(e,e.return,v)}break;case 4:ht(t,e),Nt(e);break;case 13:ht(t,e),Nt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Eu=he())),r&4&&mh(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Ie=(u=Ie)||d,ht(t,e),Ie=u):ht(t,e),Nt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(_=e,d=e.child;d!==null;){for(h=_=d;_!==null;){switch(p=_,y=p.child,p.tag){case 0:case 11:case 14:case 15:_i(4,p,p.return);break;case 1:Ar(p,p.return);var k=p.stateNode;if(typeof k.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,k.props=t.memoizedProps,k.state=t.memoizedState,k.componentWillUnmount()}catch(v){de(r,n,v)}}break;case 5:Ar(p,p.return);break;case 22:if(p.memoizedState!==null){gh(h);continue}}y!==null?(y.return=p,_=y):gh(h)}d=d.sibling}e:for(d=null,h=e;;){if(h.tag===5){if(d===null){d=h;try{i=h.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=h.stateNode,c=h.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=Jp("display",a))}catch(v){de(e,e.return,v)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(v){de(e,e.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:ht(t,e),Nt(e),r&4&&mh(e);break;case 21:break;default:ht(t,e),Nt(e)}}function Nt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Nf(n)){var r=n;break e}n=n.return}throw Error(M(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&($i(i,""),r.flags&=-33);var o=ph(e);gc(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=ph(e);fc(e,l,a);break;default:throw Error(M(161))}}catch(c){de(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function x0(e,t,n){_=e,jf(e)}function jf(e,t,n){for(var r=(e.mode&1)!==0;_!==null;){var i=_,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||$o;if(!a){var l=i.alternate,c=l!==null&&l.memoizedState!==null||Ie;l=$o;var u=Ie;if($o=a,(Ie=c)&&!u)for(_=i;_!==null;)a=_,c=a.child,a.tag===22&&a.memoizedState!==null?vh(i):c!==null?(c.return=a,_=c):vh(i);for(;o!==null;)_=o,jf(o),o=o.sibling;_=i,$o=l,Ie=u}fh(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,_=o):fh(e)}}function fh(e){for(;_!==null;){var t=_;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ie||da(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ie)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:pt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Zd(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Zd(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&Gi(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(M(163))}Ie||t.flags&512&&mc(t)}catch(p){de(t,t.return,p)}}if(t===e){_=null;break}if(n=t.sibling,n!==null){n.return=t.return,_=n;break}_=t.return}}function gh(e){for(;_!==null;){var t=_;if(t===e){_=null;break}var n=t.sibling;if(n!==null){n.return=t.return,_=n;break}_=t.return}}function vh(e){for(;_!==null;){var t=_;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{da(4,t)}catch(c){de(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){de(t,i,c)}}var o=t.return;try{mc(t)}catch(c){de(t,o,c)}break;case 5:var a=t.return;try{mc(t)}catch(c){de(t,a,c)}}}catch(c){de(t,t.return,c)}if(t===e){_=null;break}var l=t.sibling;if(l!==null){l.return=t.return,_=l;break}_=t.return}}var w0=Math.ceil,qs=nn.ReactCurrentDispatcher,Tu=nn.ReactCurrentOwner,at=nn.ReactCurrentBatchConfig,K=0,be=null,me=null,Se=0,Ge=0,Ir=_n(0),ye=0,oo=null,ar=0,ha=0,ju=0,Fi=null,Ve=null,Eu=0,ni=1/0,Bt=null,Bs=!1,vc=null,jn=null,Ho=!1,wn=null,Us=0,zi=0,yc=null,us=-1,ds=0;function Fe(){return K&6?he():us!==-1?us:us=he()}function En(e){return e.mode&1?K&2&&Se!==0?Se&-Se:r0.transition!==null?(ds===0&&(ds=dm()),ds):(e=J,e!==0||(e=window.event,e=e===void 0?16:ym(e.type)),e):1}function wt(e,t,n,r){if(50<zi)throw zi=0,yc=null,Error(M(185));vo(e,n,r),(!(K&2)||e!==be)&&(e===be&&(!(K&2)&&(ha|=n),ye===4&&pn(e,Se)),$e(e,r),n===1&&K===0&&!(t.mode&1)&&(ni=he()+500,la&&Fn()))}function $e(e,t){var n=e.callbackNode;rx(e,t);var r=Ps(e,e===be?Se:0);if(r===0)n!==null&&Pd(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Pd(n),t===1)e.tag===0?n0(yh.bind(null,e)):_m(yh.bind(null,e)),Jx(function(){!(K&6)&&Fn()}),n=null;else{switch(hm(r)){case 1:n=tu;break;case 4:n=cm;break;case 16:n=Ns;break;case 536870912:n=um;break;default:n=Ns}n=Of(n,Ef.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Ef(e,t){if(us=-1,ds=0,K&6)throw Error(M(327));var n=e.callbackNode;if(_r()&&e.callbackNode!==n)return null;var r=Ps(e,e===be?Se:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=$s(e,r);else{t=r;var i=K;K|=2;var o=If();(be!==e||Se!==t)&&(Bt=null,ni=he()+500,tr(e,t));do try{C0();break}catch(l){Af(e,l)}while(!0);mu(),qs.current=o,K=i,me!==null?t=0:(be=null,Se=0,t=ye)}if(t!==0){if(t===2&&(i=Hl(e),i!==0&&(r=i,t=xc(e,i))),t===1)throw n=oo,tr(e,0),pn(e,r),$e(e,he()),n;if(t===6)pn(e,r);else{if(i=e.current.alternate,!(r&30)&&!b0(i)&&(t=$s(e,r),t===2&&(o=Hl(e),o!==0&&(r=o,t=xc(e,o))),t===1))throw n=oo,tr(e,0),pn(e,r),$e(e,he()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(M(345));case 2:$n(e,Ve,Bt);break;case 3:if(pn(e,r),(r&130023424)===r&&(t=Eu+500-he(),10<t)){if(Ps(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Fe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Zl($n.bind(null,e,Ve,Bt),t);break}$n(e,Ve,Bt);break;case 4:if(pn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-xt(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=he()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*w0(r/1960))-r,10<r){e.timeoutHandle=Zl($n.bind(null,e,Ve,Bt),r);break}$n(e,Ve,Bt);break;case 5:$n(e,Ve,Bt);break;default:throw Error(M(329))}}}return $e(e,he()),e.callbackNode===n?Ef.bind(null,e):null}function xc(e,t){var n=Fi;return e.current.memoizedState.isDehydrated&&(tr(e,t).flags|=256),e=$s(e,t),e!==2&&(t=Ve,Ve=n,t!==null&&wc(t)),e}function wc(e){Ve===null?Ve=e:Ve.push.apply(Ve,e)}function b0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!bt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function pn(e,t){for(t&=~ju,t&=~ha,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-xt(t),r=1<<n;e[n]=-1,t&=~r}}function yh(e){if(K&6)throw Error(M(327));_r();var t=Ps(e,0);if(!(t&1))return $e(e,he()),null;var n=$s(e,t);if(e.tag!==0&&n===2){var r=Hl(e);r!==0&&(t=r,n=xc(e,r))}if(n===1)throw n=oo,tr(e,0),pn(e,t),$e(e,he()),n;if(n===6)throw Error(M(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,$n(e,Ve,Bt),$e(e,he()),null}function Au(e,t){var n=K;K|=1;try{return e(t)}finally{K=n,K===0&&(ni=he()+500,la&&Fn())}}function lr(e){wn!==null&&wn.tag===0&&!(K&6)&&_r();var t=K;K|=1;var n=at.transition,r=J;try{if(at.transition=null,J=1,e)return e()}finally{J=r,at.transition=n,K=t,!(K&6)&&Fn()}}function Iu(){Ge=Ir.current,re(Ir)}function tr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Xx(n)),me!==null)for(n=me.return;n!==null;){var r=n;switch(du(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Is();break;case 3:ei(),re(Be),re(Me),wu();break;case 5:xu(r);break;case 4:ei();break;case 13:re(ae);break;case 19:re(ae);break;case 10:fu(r.type._context);break;case 22:case 23:Iu()}n=n.return}if(be=e,me=e=An(e.current,null),Se=Ge=t,ye=0,oo=null,ju=ha=ar=0,Ve=Fi=null,Qn!==null){for(t=0;t<Qn.length;t++)if(n=Qn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}Qn=null}return e}function Af(e,t){do{var n=me;try{if(mu(),as.current=Vs,zs){for(var r=le.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}zs=!1}if(sr=0,we=ge=le=null,Oi=!1,no=0,Tu.current=null,n===null||n.return===null){ye=1,oo=t,me=null;break}e:{var o=e,a=n.return,l=n,c=t;if(t=Se,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=l,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var y=oh(a);if(y!==null){y.flags&=-257,sh(y,a,l,o,t),y.mode&1&&ih(o,u,t),t=y,c=u;var k=t.updateQueue;if(k===null){var v=new Set;v.add(c),t.updateQueue=v}else k.add(c);break e}else{if(!(t&1)){ih(o,u,t),Mu();break e}c=Error(M(426))}}else if(ie&&l.mode&1){var b=oh(a);if(b!==null){!(b.flags&65536)&&(b.flags|=256),sh(b,a,l,o,t),hu(ti(c,l));break e}}o=c=ti(c,l),ye!==4&&(ye=2),Fi===null?Fi=[o]:Fi.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var g=pf(o,c,t);Jd(o,g);break e;case 1:l=c;var f=o.type,x=o.stateNode;if(!(o.flags&128)&&(typeof f.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(jn===null||!jn.has(x)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=mf(o,l,t);Jd(o,w);break e}}o=o.return}while(o!==null)}Rf(n)}catch(C){t=C,me===n&&n!==null&&(me=n=n.return);continue}break}while(!0)}function If(){var e=qs.current;return qs.current=Vs,e===null?Vs:e}function Mu(){(ye===0||ye===3||ye===2)&&(ye=4),be===null||!(ar&268435455)&&!(ha&268435455)||pn(be,Se)}function $s(e,t){var n=K;K|=2;var r=If();(be!==e||Se!==t)&&(Bt=null,tr(e,t));do try{k0();break}catch(i){Af(e,i)}while(!0);if(mu(),K=n,qs.current=r,me!==null)throw Error(M(261));return be=null,Se=0,ye}function k0(){for(;me!==null;)Mf(me)}function C0(){for(;me!==null&&!Gy();)Mf(me)}function Mf(e){var t=Df(e.alternate,e,Ge);e.memoizedProps=e.pendingProps,t===null?Rf(e):me=t,Tu.current=null}function Rf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=g0(n,t),n!==null){n.flags&=32767,me=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ye=6,me=null;return}}else if(n=f0(n,t,Ge),n!==null){me=n;return}if(t=t.sibling,t!==null){me=t;return}me=t=e}while(t!==null);ye===0&&(ye=5)}function $n(e,t,n){var r=J,i=at.transition;try{at.transition=null,J=1,S0(e,t,n,r)}finally{at.transition=i,J=r}return null}function S0(e,t,n,r){do _r();while(wn!==null);if(K&6)throw Error(M(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(M(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(ix(e,o),e===be&&(me=be=null,Se=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ho||(Ho=!0,Of(Ns,function(){return _r(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=at.transition,at.transition=null;var a=J;J=1;var l=K;K|=4,Tu.current=null,y0(e,n),Tf(n,e),$x(Xl),Ts=!!Yl,Xl=Yl=null,e.current=n,x0(n),Ky(),K=l,J=a,at.transition=o}else e.current=n;if(Ho&&(Ho=!1,wn=e,Us=i),o=e.pendingLanes,o===0&&(jn=null),Jy(n.stateNode),$e(e,he()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Bs)throw Bs=!1,e=vc,vc=null,e;return Us&1&&e.tag!==0&&_r(),o=e.pendingLanes,o&1?e===yc?zi++:(zi=0,yc=e):zi=0,Fn(),null}function _r(){if(wn!==null){var e=hm(Us),t=at.transition,n=J;try{if(at.transition=null,J=16>e?16:e,wn===null)var r=!1;else{if(e=wn,wn=null,Us=0,K&6)throw Error(M(331));var i=K;for(K|=4,_=e.current;_!==null;){var o=_,a=o.child;if(_.flags&16){var l=o.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(_=u;_!==null;){var d=_;switch(d.tag){case 0:case 11:case 15:_i(8,d,o)}var h=d.child;if(h!==null)h.return=d,_=h;else for(;_!==null;){d=_;var p=d.sibling,y=d.return;if(Sf(d),d===u){_=null;break}if(p!==null){p.return=y,_=p;break}_=y}}}var k=o.alternate;if(k!==null){var v=k.child;if(v!==null){k.child=null;do{var b=v.sibling;v.sibling=null,v=b}while(v!==null)}}_=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,_=a;else e:for(;_!==null;){if(o=_,o.flags&2048)switch(o.tag){case 0:case 11:case 15:_i(9,o,o.return)}var g=o.sibling;if(g!==null){g.return=o.return,_=g;break e}_=o.return}}var f=e.current;for(_=f;_!==null;){a=_;var x=a.child;if(a.subtreeFlags&2064&&x!==null)x.return=a,_=x;else e:for(a=f;_!==null;){if(l=_,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:da(9,l)}}catch(C){de(l,l.return,C)}if(l===a){_=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,_=w;break e}_=l.return}}if(K=i,Fn(),Rt&&typeof Rt.onPostCommitFiberRoot=="function")try{Rt.onPostCommitFiberRoot(ra,e)}catch{}r=!0}return r}finally{J=n,at.transition=t}}return!1}function xh(e,t,n){t=ti(n,t),t=pf(e,t,1),e=Tn(e,t,1),t=Fe(),e!==null&&(vo(e,1,t),$e(e,t))}function de(e,t,n){if(e.tag===3)xh(e,e,n);else for(;t!==null;){if(t.tag===3){xh(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(jn===null||!jn.has(r))){e=ti(n,e),e=mf(t,e,1),t=Tn(t,e,1),e=Fe(),t!==null&&(vo(t,1,e),$e(t,e));break}}t=t.return}}function N0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Fe(),e.pingedLanes|=e.suspendedLanes&n,be===e&&(Se&n)===n&&(ye===4||ye===3&&(Se&130023424)===Se&&500>he()-Eu?tr(e,0):ju|=n),$e(e,t)}function Lf(e,t){t===0&&(e.mode&1?(t=Do,Do<<=1,!(Do&130023424)&&(Do=4194304)):t=1);var n=Fe();e=Xt(e,t),e!==null&&(vo(e,t,n),$e(e,n))}function P0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Lf(e,n)}function T0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(M(314))}r!==null&&r.delete(t),Lf(e,n)}var Df;Df=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Be.current)qe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return qe=!1,m0(e,t,n);qe=!!(e.flags&131072)}else qe=!1,ie&&t.flags&1048576&&Fm(t,Ls,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;cs(e,t),e=t.pendingProps;var i=Xr(t,Me.current);Or(t,n),i=ku(null,t,r,e,i,n);var o=Cu();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ue(r)?(o=!0,Ms(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,vu(t),i.updater=ua,t.stateNode=i,i._reactInternals=t,sc(t,r,e,n),t=cc(null,t,r,!0,o,n)):(t.tag=0,ie&&o&&uu(t),Oe(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(cs(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=E0(r),e=pt(r,e),i){case 0:t=lc(null,t,r,e,n);break e;case 1:t=ch(null,t,r,e,n);break e;case 11:t=ah(null,t,r,e,n);break e;case 14:t=lh(null,t,r,pt(r.type,e),n);break e}throw Error(M(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:pt(r,i),lc(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:pt(r,i),ch(e,t,r,i,n);case 3:e:{if(yf(t),e===null)throw Error(M(387));r=t.pendingProps,o=t.memoizedState,i=o.element,$m(e,t),_s(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=ti(Error(M(423)),t),t=uh(e,t,r,n,i);break e}else if(r!==i){i=ti(Error(M(424)),t),t=uh(e,t,r,n,i);break e}else for(Ye=Pn(t.stateNode.containerInfo.firstChild),Xe=t,ie=!0,yt=null,n=Bm(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Jr(),r===i){t=Jt(e,t,n);break e}Oe(e,t,r,n)}t=t.child}return t;case 5:return Hm(t),e===null&&rc(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,Jl(r,i)?a=null:o!==null&&Jl(r,o)&&(t.flags|=32),vf(e,t),Oe(e,t,a,n),t.child;case 6:return e===null&&rc(t),null;case 13:return xf(e,t,n);case 4:return yu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Zr(t,null,r,n):Oe(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:pt(r,i),ah(e,t,r,i,n);case 7:return Oe(e,t,t.pendingProps,n),t.child;case 8:return Oe(e,t,t.pendingProps.children,n),t.child;case 12:return Oe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,ee(Ds,r._currentValue),r._currentValue=a,o!==null)if(bt(o.value,a)){if(o.children===i.children&&!Be.current){t=Jt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(o.tag===1){c=Qt(-1,n&-n),c.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),ic(o.return,n,t),l.lanes|=n;break}c=c.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(M(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),ic(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}Oe(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Or(t,n),i=lt(i),r=r(i),t.flags|=1,Oe(e,t,r,n),t.child;case 14:return r=t.type,i=pt(r,t.pendingProps),i=pt(r.type,i),lh(e,t,r,i,n);case 15:return ff(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:pt(r,i),cs(e,t),t.tag=1,Ue(r)?(e=!0,Ms(t)):e=!1,Or(t,n),hf(t,r,i),sc(t,r,i,n),cc(null,t,r,!0,e,n);case 19:return wf(e,t,n);case 22:return gf(e,t,n)}throw Error(M(156,t.tag))};function Of(e,t){return lm(e,t)}function j0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ot(e,t,n,r){return new j0(e,t,n,r)}function Ru(e){return e=e.prototype,!(!e||!e.isReactComponent)}function E0(e){if(typeof e=="function")return Ru(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Jc)return 11;if(e===Zc)return 14}return 2}function An(e,t){var n=e.alternate;return n===null?(n=ot(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function hs(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")Ru(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case br:return nr(n.children,i,o,t);case Xc:a=8,i|=8;break;case Al:return e=ot(12,n,t,i|2),e.elementType=Al,e.lanes=o,e;case Il:return e=ot(13,n,t,i),e.elementType=Il,e.lanes=o,e;case Ml:return e=ot(19,n,t,i),e.elementType=Ml,e.lanes=o,e;case Hp:return pa(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Up:a=10;break e;case $p:a=9;break e;case Jc:a=11;break e;case Zc:a=14;break e;case un:a=16,r=null;break e}throw Error(M(130,e==null?e:typeof e,""))}return t=ot(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function nr(e,t,n,r){return e=ot(7,e,r,t),e.lanes=n,e}function pa(e,t,n,r){return e=ot(22,e,r,t),e.elementType=Hp,e.lanes=n,e.stateNode={isHidden:!1},e}function sl(e,t,n){return e=ot(6,e,null,t),e.lanes=n,e}function al(e,t,n){return t=ot(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function A0(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=qa(0),this.expirationTimes=qa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qa(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Lu(e,t,n,r,i,o,a,l,c){return e=new A0(e,t,n,l,c),t===1?(t=1,o===!0&&(t|=8)):t=0,o=ot(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},vu(o),e}function I0(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:wr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function _f(e){if(!e)return Rn;e=e._reactInternals;e:{if(hr(e)!==e||e.tag!==1)throw Error(M(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ue(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(M(171))}if(e.tag===1){var n=e.type;if(Ue(n))return Om(e,n,t)}return t}function Ff(e,t,n,r,i,o,a,l,c){return e=Lu(n,r,!0,e,i,o,a,l,c),e.context=_f(null),n=e.current,r=Fe(),i=En(n),o=Qt(r,i),o.callback=t??null,Tn(n,o,i),e.current.lanes=i,vo(e,i,r),$e(e,r),e}function ma(e,t,n,r){var i=t.current,o=Fe(),a=En(i);return n=_f(n),t.context===null?t.context=n:t.pendingContext=n,t=Qt(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Tn(i,t,a),e!==null&&(wt(e,i,a,o),ss(e,i,a)),a}function Hs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function wh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Du(e,t){wh(e,t),(e=e.alternate)&&wh(e,t)}function M0(){return null}var zf=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ou(e){this._internalRoot=e}fa.prototype.render=Ou.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(M(409));ma(e,t,null,null)};fa.prototype.unmount=Ou.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;lr(function(){ma(null,e,null,null)}),t[Yt]=null}};function fa(e){this._internalRoot=e}fa.prototype.unstable_scheduleHydration=function(e){if(e){var t=fm();e={blockedOn:null,target:e,priority:t};for(var n=0;n<hn.length&&t!==0&&t<hn[n].priority;n++);hn.splice(n,0,e),n===0&&vm(e)}};function _u(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ga(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function bh(){}function R0(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Hs(a);o.call(u)}}var a=Ff(t,r,e,0,null,!1,!1,"",bh);return e._reactRootContainer=a,e[Yt]=a.current,Xi(e.nodeType===8?e.parentNode:e),lr(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Hs(c);l.call(u)}}var c=Lu(e,0,!1,null,null,!1,!1,"",bh);return e._reactRootContainer=c,e[Yt]=c.current,Xi(e.nodeType===8?e.parentNode:e),lr(function(){ma(t,c,n,r)}),c}function va(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var c=Hs(a);l.call(c)}}ma(t,a,e,i)}else a=R0(n,t,e,i,r);return Hs(a)}pm=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ei(t.pendingLanes);n!==0&&(nu(t,n|1),$e(t,he()),!(K&6)&&(ni=he()+500,Fn()))}break;case 13:lr(function(){var r=Xt(e,1);if(r!==null){var i=Fe();wt(r,e,1,i)}}),Du(e,1)}};ru=function(e){if(e.tag===13){var t=Xt(e,134217728);if(t!==null){var n=Fe();wt(t,e,134217728,n)}Du(e,134217728)}};mm=function(e){if(e.tag===13){var t=En(e),n=Xt(e,t);if(n!==null){var r=Fe();wt(n,e,t,r)}Du(e,t)}};fm=function(){return J};gm=function(e,t){var n=J;try{return J=e,t()}finally{J=n}};Bl=function(e,t,n){switch(t){case"input":if(Dl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=aa(r);if(!i)throw Error(M(90));Qp(r),Dl(r,i)}}}break;case"textarea":Kp(e,n);break;case"select":t=n.value,t!=null&&Mr(e,!!n.multiple,t,!1)}};nm=Au;rm=lr;var L0={usingClientEntryPoint:!1,Events:[xo,Nr,aa,em,tm,Au]},Si={findFiberByHostInstance:Wn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},D0={bundleType:Si.bundleType,version:Si.version,rendererPackageName:Si.rendererPackageName,rendererConfig:Si.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:nn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=sm(e),e===null?null:e.stateNode},findFiberByHostInstance:Si.findFiberByHostInstance||M0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wo.isDisabled&&Wo.supportsFiber)try{ra=Wo.inject(D0),Rt=Wo}catch{}}et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L0;et.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_u(t))throw Error(M(200));return I0(e,t,null,n)};et.createRoot=function(e,t){if(!_u(e))throw Error(M(299));var n=!1,r="",i=zf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Lu(e,1,!1,null,null,n,!1,r,i),e[Yt]=t.current,Xi(e.nodeType===8?e.parentNode:e),new Ou(t)};et.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(M(188)):(e=Object.keys(e).join(","),Error(M(268,e)));return e=sm(t),e=e===null?null:e.stateNode,e};et.flushSync=function(e){return lr(e)};et.hydrate=function(e,t,n){if(!ga(t))throw Error(M(200));return va(null,e,t,!0,n)};et.hydrateRoot=function(e,t,n){if(!_u(e))throw Error(M(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=zf;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Ff(t,null,e,1,n??null,i,!1,o,a),e[Yt]=t.current,Xi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new fa(t)};et.render=function(e,t,n){if(!ga(t))throw Error(M(200));return va(null,e,t,!1,n)};et.unmountComponentAtNode=function(e){if(!ga(e))throw Error(M(40));return e._reactRootContainer?(lr(function(){va(null,null,e,!1,function(){e._reactRootContainer=null,e[Yt]=null})}),!0):!1};et.unstable_batchedUpdates=Au;et.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ga(n))throw Error(M(200));if(e==null||e._reactInternals===void 0)throw Error(M(38));return va(e,t,n,!1,r)};et.version="18.3.1-next-f1338f8080-20240426";function Vf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Vf)}catch(e){console.error(e)}}Vf(),zp.exports=et;var bo=zp.exports;const O0=cy(bo);var qf,kh=bo;qf=kh.createRoot,kh.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function so(){return so=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},so.apply(this,arguments)}var bn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(bn||(bn={}));const Ch="popstate";function _0(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:a,hash:l}=r.location;return bc("",{pathname:o,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Ws(i)}return z0(t,n,null,e)}function fe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Bf(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function F0(){return Math.random().toString(36).substr(2,8)}function Sh(e,t){return{usr:e.state,key:e.key,idx:t}}function bc(e,t,n,r){return n===void 0&&(n=null),so({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?hi(t):t,{state:n,key:t&&t.key||r||F0()})}function Ws(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function hi(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function z0(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,l=bn.Pop,c=null,u=d();u==null&&(u=0,a.replaceState(so({},a.state,{idx:u}),""));function d(){return(a.state||{idx:null}).idx}function h(){l=bn.Pop;let b=d(),g=b==null?null:b-u;u=b,c&&c({action:l,location:v.location,delta:g})}function p(b,g){l=bn.Push;let f=bc(v.location,b,g);u=d()+1;let x=Sh(f,u),w=v.createHref(f);try{a.pushState(x,"",w)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;i.location.assign(w)}o&&c&&c({action:l,location:v.location,delta:1})}function y(b,g){l=bn.Replace;let f=bc(v.location,b,g);u=d();let x=Sh(f,u),w=v.createHref(f);a.replaceState(x,"",w),o&&c&&c({action:l,location:v.location,delta:0})}function k(b){let g=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof b=="string"?b:Ws(b);return f=f.replace(/ $/,"%20"),fe(g,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,g)}let v={get action(){return l},get location(){return e(i,a)},listen(b){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(Ch,h),c=b,()=>{i.removeEventListener(Ch,h),c=null}},createHref(b){return t(i,b)},createURL:k,encodeLocation(b){let g=k(b);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:p,replace:y,go(b){return a.go(b)}};return v}var Nh;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Nh||(Nh={}));function V0(e,t,n){return n===void 0&&(n="/"),q0(e,t,n,!1)}function q0(e,t,n,r){let i=typeof t=="string"?hi(t):t,o=Fu(i.pathname||"/",n);if(o==null)return null;let a=Uf(e);B0(a);let l=null;for(let c=0;l==null&&c<a.length;++c){let u=Z0(o);l=X0(a[c],u,r)}return l}function Uf(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,l)=>{let c={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};c.relativePath.startsWith("/")&&(fe(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=In([r,c.relativePath]),d=n.concat(c);o.children&&o.children.length>0&&(fe(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Uf(o.children,t,d,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:K0(u,o.index),routesMeta:d})};return e.forEach((o,a)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,a);else for(let c of $f(o.path))i(o,a,c)}),t}function $f(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=$f(r.join("/")),l=[];return l.push(...a.map(c=>c===""?o:[o,c].join("/"))),i&&l.push(...a),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function B0(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Y0(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const U0=/^:[\w-]+$/,$0=3,H0=2,W0=1,Q0=10,G0=-2,Ph=e=>e==="*";function K0(e,t){let n=e.split("/"),r=n.length;return n.some(Ph)&&(r+=G0),t&&(r+=H0),n.filter(i=>!Ph(i)).reduce((i,o)=>i+(U0.test(o)?$0:o===""?W0:Q0),r)}function Y0(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function X0(e,t,n){let{routesMeta:r}=e,i={},o="/",a=[];for(let l=0;l<r.length;++l){let c=r[l],u=l===r.length-1,d=o==="/"?t:t.slice(o.length)||"/",h=Th({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},d),p=c.route;if(!h&&u&&n&&!r[r.length-1].route.index&&(h=Th({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},d)),!h)return null;Object.assign(i,h.params),a.push({params:i,pathname:In([o,h.pathname]),pathnameBase:rw(In([o,h.pathnameBase])),route:p}),h.pathnameBase!=="/"&&(o=In([o,h.pathnameBase]))}return a}function Th(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=J0(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,d,h)=>{let{paramName:p,isOptional:y}=d;if(p==="*"){let v=l[h]||"";a=o.slice(0,o.length-v.length).replace(/(.)\/+$/,"$1")}const k=l[h];return y&&!k?u[p]=void 0:u[p]=(k||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:a,pattern:e}}function J0(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Bf(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,l,c)=>(r.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Z0(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Bf(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Fu(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function ew(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?hi(e):e;return{pathname:n?n.startsWith("/")?n:tw(n,t):t,search:iw(r),hash:ow(i)}}function tw(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function ll(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function nw(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Hf(e,t){let n=nw(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Wf(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=hi(e):(i=so({},e),fe(!i.pathname||!i.pathname.includes("?"),ll("?","pathname","search",i)),fe(!i.pathname||!i.pathname.includes("#"),ll("#","pathname","hash",i)),fe(!i.search||!i.search.includes("#"),ll("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,l;if(a==null)l=n;else{let h=t.length-1;if(!r&&a.startsWith("..")){let p=a.split("/");for(;p[0]==="..";)p.shift(),h-=1;i.pathname=p.join("/")}l=h>=0?t[h]:"/"}let c=ew(i,l),u=a&&a!=="/"&&a.endsWith("/"),d=(o||a===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||d)&&(c.pathname+="/"),c}const In=e=>e.join("/").replace(/\/\/+/g,"/"),rw=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),iw=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,ow=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function sw(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Qf=["post","put","patch","delete"];new Set(Qf);const aw=["get",...Qf];new Set(aw);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ao(){return ao=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ao.apply(this,arguments)}const zu=m.createContext(null),lw=m.createContext(null),pr=m.createContext(null),ya=m.createContext(null),zn=m.createContext({outlet:null,matches:[],isDataRoute:!1}),Gf=m.createContext(null);function cw(e,t){let{relative:n}=t===void 0?{}:t;ko()||fe(!1);let{basename:r,navigator:i}=m.useContext(pr),{hash:o,pathname:a,search:l}=Xf(e,{relative:n}),c=a;return r!=="/"&&(c=a==="/"?r:In([r,a])),i.createHref({pathname:c,search:l,hash:o})}function ko(){return m.useContext(ya)!=null}function St(){return ko()||fe(!1),m.useContext(ya).location}function Kf(e){m.useContext(pr).static||m.useLayoutEffect(e)}function Yf(){let{isDataRoute:e}=m.useContext(zn);return e?Cw():uw()}function uw(){ko()||fe(!1);let e=m.useContext(zu),{basename:t,future:n,navigator:r}=m.useContext(pr),{matches:i}=m.useContext(zn),{pathname:o}=St(),a=JSON.stringify(Hf(i,n.v7_relativeSplatPath)),l=m.useRef(!1);return Kf(()=>{l.current=!0}),m.useCallback(function(u,d){if(d===void 0&&(d={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let h=Wf(u,JSON.parse(a),o,d.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:In([t,h.pathname])),(d.replace?r.replace:r.push)(h,d.state,d)},[t,r,a,o,e])}function dw(){let{matches:e}=m.useContext(zn),t=e[e.length-1];return t?t.params:{}}function Xf(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=m.useContext(pr),{matches:i}=m.useContext(zn),{pathname:o}=St(),a=JSON.stringify(Hf(i,r.v7_relativeSplatPath));return m.useMemo(()=>Wf(e,JSON.parse(a),o,n==="path"),[e,a,o,n])}function hw(e,t){return pw(e,t)}function pw(e,t,n,r){ko()||fe(!1);let{navigator:i}=m.useContext(pr),{matches:o}=m.useContext(zn),a=o[o.length-1],l=a?a.params:{};a&&a.pathname;let c=a?a.pathnameBase:"/";a&&a.route;let u=St(),d;if(t){var h;let b=typeof t=="string"?hi(t):t;c==="/"||(h=b.pathname)!=null&&h.startsWith(c)||fe(!1),d=b}else d=u;let p=d.pathname||"/",y=p;if(c!=="/"){let b=c.replace(/^\//,"").split("/");y="/"+p.replace(/^\//,"").split("/").slice(b.length).join("/")}let k=V0(e,{pathname:y}),v=yw(k&&k.map(b=>Object.assign({},b,{params:Object.assign({},l,b.params),pathname:In([c,i.encodeLocation?i.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?c:In([c,i.encodeLocation?i.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),o,n,r);return t&&v?m.createElement(ya.Provider,{value:{location:ao({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:bn.Pop}},v):v}function mw(){let e=kw(),t=sw(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return m.createElement(m.Fragment,null,m.createElement("h2",null,"Unexpected Application Error!"),m.createElement("h3",{style:{fontStyle:"italic"}},t),n?m.createElement("pre",{style:i},n):null,null)}const fw=m.createElement(mw,null);class gw extends m.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?m.createElement(zn.Provider,{value:this.props.routeContext},m.createElement(Gf.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function vw(e){let{routeContext:t,match:n,children:r}=e,i=m.useContext(zu);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),m.createElement(zn.Provider,{value:t},r)}function yw(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=a.findIndex(h=>h.route.id&&(l==null?void 0:l[h.route.id])!==void 0);d>=0||fe(!1),a=a.slice(0,Math.min(a.length,d+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<a.length;d++){let h=a[d];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(u=d),h.route.id){let{loaderData:p,errors:y}=n,k=h.route.loader&&p[h.route.id]===void 0&&(!y||y[h.route.id]===void 0);if(h.route.lazy||k){c=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((d,h,p)=>{let y,k=!1,v=null,b=null;n&&(y=l&&h.route.id?l[h.route.id]:void 0,v=h.route.errorElement||fw,c&&(u<0&&p===0?(k=!0,b=null):u===p&&(k=!0,b=h.route.hydrateFallbackElement||null)));let g=t.concat(a.slice(0,p+1)),f=()=>{let x;return y?x=v:k?x=b:h.route.Component?x=m.createElement(h.route.Component,null):h.route.element?x=h.route.element:x=d,m.createElement(vw,{match:h,routeContext:{outlet:d,matches:g,isDataRoute:n!=null},children:x})};return n&&(h.route.ErrorBoundary||h.route.errorElement||p===0)?m.createElement(gw,{location:n.location,revalidation:n.revalidation,component:v,error:y,children:f(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):f()},null)}var Jf=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Jf||{}),Qs=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Qs||{});function xw(e){let t=m.useContext(zu);return t||fe(!1),t}function ww(e){let t=m.useContext(lw);return t||fe(!1),t}function bw(e){let t=m.useContext(zn);return t||fe(!1),t}function Zf(e){let t=bw(),n=t.matches[t.matches.length-1];return n.route.id||fe(!1),n.route.id}function kw(){var e;let t=m.useContext(Gf),n=ww(Qs.UseRouteError),r=Zf(Qs.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Cw(){let{router:e}=xw(Jf.UseNavigateStable),t=Zf(Qs.UseNavigateStable),n=m.useRef(!1);return Kf(()=>{n.current=!0}),m.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,ao({fromRouteId:t},o)))},[e,t])}function Sw(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Hn(e){fe(!1)}function Nw(e){let{basename:t="/",children:n=null,location:r,navigationType:i=bn.Pop,navigator:o,static:a=!1,future:l}=e;ko()&&fe(!1);let c=t.replace(/^\/*/,"/"),u=m.useMemo(()=>({basename:c,navigator:o,static:a,future:ao({v7_relativeSplatPath:!1},l)}),[c,l,o,a]);typeof r=="string"&&(r=hi(r));let{pathname:d="/",search:h="",hash:p="",state:y=null,key:k="default"}=r,v=m.useMemo(()=>{let b=Fu(d,c);return b==null?null:{location:{pathname:b,search:h,hash:p,state:y,key:k},navigationType:i}},[c,d,h,p,y,k,i]);return v==null?null:m.createElement(pr.Provider,{value:u},m.createElement(ya.Provider,{children:n,value:v}))}function Pw(e){let{children:t,location:n}=e;return hw(kc(t),n)}new Promise(()=>{});function kc(e,t){t===void 0&&(t=[]);let n=[];return m.Children.forEach(e,(r,i)=>{if(!m.isValidElement(r))return;let o=[...t,i];if(r.type===m.Fragment){n.push.apply(n,kc(r.props.children,o));return}r.type!==Hn&&fe(!1),!r.props.index||!r.props.children||fe(!1);let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=kc(r.props.children,o)),n.push(a)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Cc(){return Cc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Cc.apply(this,arguments)}function Tw(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function jw(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Ew(e,t){return e.button===0&&(!t||t==="_self")&&!jw(e)}function Sc(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(i=>[n,i]):[[n,r]])},[]))}function Aw(e,t){let n=Sc(e);return t&&t.forEach((r,i)=>{n.has(i)||t.getAll(i).forEach(o=>{n.append(i,o)})}),n}const Iw=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Mw="6";try{window.__reactRouterVersion=Mw}catch{}const Rw="startTransition",jh=Wc[Rw];function Lw(e){let{basename:t,children:n,future:r,window:i}=e,o=m.useRef();o.current==null&&(o.current=_0({window:i,v5Compat:!0}));let a=o.current,[l,c]=m.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},d=m.useCallback(h=>{u&&jh?jh(()=>c(h)):c(h)},[c,u]);return m.useLayoutEffect(()=>a.listen(d),[a,d]),m.useEffect(()=>Sw(r),[r]),m.createElement(Nw,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:a,future:r})}const Dw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Ow=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,xe=m.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:a,state:l,target:c,to:u,preventScrollReset:d,viewTransition:h}=t,p=Tw(t,Iw),{basename:y}=m.useContext(pr),k,v=!1;if(typeof u=="string"&&Ow.test(u)&&(k=u,Dw))try{let x=new URL(window.location.href),w=u.startsWith("//")?new URL(x.protocol+u):new URL(u),C=Fu(w.pathname,y);w.origin===x.origin&&C!=null?u=C+w.search+w.hash:v=!0}catch{}let b=cw(u,{relative:i}),g=_w(u,{replace:a,state:l,target:c,preventScrollReset:d,relative:i,viewTransition:h});function f(x){r&&r(x),x.defaultPrevented||g(x)}return m.createElement("a",Cc({},p,{href:k||b,onClick:v||o?r:f,ref:n,target:c}))});var Eh;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Eh||(Eh={}));var Ah;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Ah||(Ah={}));function _w(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:a,viewTransition:l}=t===void 0?{}:t,c=Yf(),u=St(),d=Xf(e,{relative:a});return m.useCallback(h=>{if(Ew(h,n)){h.preventDefault();let p=r!==void 0?r:Ws(u)===Ws(d);c(e,{replace:p,state:i,preventScrollReset:o,relative:a,viewTransition:l})}},[u,c,d,r,i,n,e,o,a,l])}function Fw(e){let t=m.useRef(Sc(e)),n=m.useRef(!1),r=St(),i=m.useMemo(()=>Aw(r.search,n.current?null:t.current),[r.search]),o=Yf(),a=m.useCallback((l,c)=>{const u=Sc(typeof l=="function"?l(i):l);n.current=!0,o("?"+u,c)},[o,i]);return[i,a]}const zw=3,Vw=500;let cl=0;function qw(){return cl=(cl+1)%Number.MAX_SAFE_INTEGER,cl.toString()}const ul=new Map,Ih=e=>{if(ul.has(e))return;const t=setTimeout(()=>{ul.delete(e),Vi({type:"REMOVE_TOAST",toastId:e})},Vw);ul.set(e,t)},Bw=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,zw)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(n=>n.id===t.toast.id?{...n,...t.toast}:n)};case"DISMISS_TOAST":{const{toastId:n}=t;return n?Ih(n):e.toasts.forEach(r=>{Ih(r.id)}),{...e,toasts:e.toasts.map(r=>r.id===n||n===void 0?{...r,open:!1}:r)}}case"REMOVE_TOAST":return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(n=>n.id!==t.toastId)}}},ps=[];let ms={toasts:[]};function Vi(e){ms=Bw(ms,e),ps.forEach(t=>{t(ms)})}function Uw({...e}){const t=qw(),n=i=>Vi({type:"UPDATE_TOAST",toast:{...i,id:t}}),r=()=>Vi({type:"DISMISS_TOAST",toastId:t});return Vi({type:"ADD_TOAST",toast:{...e,id:t,open:!0,onOpenChange:i=>{i||r()}}}),{id:t,dismiss:r,update:n}}function Vu(){const[e,t]=m.useState(ms);return m.useEffect(()=>(ps.push(t),()=>{const n=ps.indexOf(t);n>-1&&ps.splice(n,1)}),[e]),{...e,toast:Uw,dismiss:n=>Vi({type:"DISMISS_TOAST",toastId:n})}}function oe(e,t,{checkForDefaultPrevented:n=!0}={}){return function(i){if(e==null||e(i),n===!1||!i.defaultPrevented)return t==null?void 0:t(i)}}function Mh(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function eg(...e){return t=>{let n=!1;const r=e.map(i=>{const o=Mh(i,t);return!n&&typeof o=="function"&&(n=!0),o});if(n)return()=>{for(let i=0;i<r.length;i++){const o=r[i];typeof o=="function"?o():Mh(e[i],null)}}}}function He(...e){return m.useCallback(eg(...e),e)}function Co(e,t=[]){let n=[];function r(o,a){const l=m.createContext(a),c=n.length;n=[...n,a];const u=h=>{var g;const{scope:p,children:y,...k}=h,v=((g=p==null?void 0:p[e])==null?void 0:g[c])||l,b=m.useMemo(()=>k,Object.values(k));return s.jsx(v.Provider,{value:b,children:y})};u.displayName=o+"Provider";function d(h,p){var v;const y=((v=p==null?void 0:p[e])==null?void 0:v[c])||l,k=m.useContext(y);if(k)return k;if(a!==void 0)return a;throw new Error(`\`${h}\` must be used within \`${o}\``)}return[u,d]}const i=()=>{const o=n.map(a=>m.createContext(a));return function(l){const c=(l==null?void 0:l[e])||o;return m.useMemo(()=>({[`__scope${e}`]:{...l,[e]:c}}),[l,c])}};return i.scopeName=e,[r,$w(i,...t)]}function $w(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(i=>({useScope:i(),scopeName:i.scopeName}));return function(o){const a=r.reduce((l,{useScope:c,scopeName:u})=>{const h=c(o)[`__scope${u}`];return{...l,...h}},{});return m.useMemo(()=>({[`__scope${t.scopeName}`]:a}),[a])}};return n.scopeName=t.scopeName,n}function lo(e){const t=Ww(e),n=m.forwardRef((r,i)=>{const{children:o,...a}=r,l=m.Children.toArray(o),c=l.find(Gw);if(c){const u=c.props.children,d=l.map(h=>h===c?m.Children.count(u)>1?m.Children.only(null):m.isValidElement(u)?u.props.children:null:h);return s.jsx(t,{...a,ref:i,children:m.isValidElement(u)?m.cloneElement(u,void 0,d):null})}return s.jsx(t,{...a,ref:i,children:o})});return n.displayName=`${e}.Slot`,n}var Hw=lo("Slot");function Ww(e){const t=m.forwardRef((n,r)=>{const{children:i,...o}=n;if(m.isValidElement(i)){const a=Yw(i),l=Kw(o,i.props);return i.type!==m.Fragment&&(l.ref=r?eg(r,a):a),m.cloneElement(i,l)}return m.Children.count(i)>1?m.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}var tg=Symbol("radix.slottable");function Qw(e){const t=({children:n})=>s.jsx(s.Fragment,{children:n});return t.displayName=`${e}.Slottable`,t.__radixId=tg,t}function Gw(e){return m.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===tg}function Kw(e,t){const n={...t};for(const r in t){const i=e[r],o=t[r];/^on[A-Z]/.test(r)?i&&o?n[r]=(...l)=>{const c=o(...l);return i(...l),c}:i&&(n[r]=i):r==="style"?n[r]={...i,...o}:r==="className"&&(n[r]=[i,o].filter(Boolean).join(" "))}return{...e,...n}}function Yw(e){var r,i;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(i=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:i.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}function Xw(e){const t=e+"CollectionProvider",[n,r]=Co(t),[i,o]=n(t,{collectionRef:{current:null},itemMap:new Map}),a=v=>{const{scope:b,children:g}=v,f=Bn.useRef(null),x=Bn.useRef(new Map).current;return s.jsx(i,{scope:b,itemMap:x,collectionRef:f,children:g})};a.displayName=t;const l=e+"CollectionSlot",c=lo(l),u=Bn.forwardRef((v,b)=>{const{scope:g,children:f}=v,x=o(l,g),w=He(b,x.collectionRef);return s.jsx(c,{ref:w,children:f})});u.displayName=l;const d=e+"CollectionItemSlot",h="data-radix-collection-item",p=lo(d),y=Bn.forwardRef((v,b)=>{const{scope:g,children:f,...x}=v,w=Bn.useRef(null),C=He(b,w),N=o(d,g);return Bn.useEffect(()=>(N.itemMap.set(w,{ref:w,...x}),()=>void N.itemMap.delete(w))),s.jsx(p,{[h]:"",ref:C,children:f})});y.displayName=d;function k(v){const b=o(e+"CollectionConsumer",v);return Bn.useCallback(()=>{const f=b.collectionRef.current;if(!f)return[];const x=Array.from(f.querySelectorAll(`[${h}]`));return Array.from(b.itemMap.values()).sort((N,P)=>x.indexOf(N.ref.current)-x.indexOf(P.ref.current))},[b.collectionRef,b.itemMap])}return[{Provider:a,Slot:u,ItemSlot:y},k,r]}var Jw=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],Pe=Jw.reduce((e,t)=>{const n=lo(`Primitive.${t}`),r=m.forwardRef((i,o)=>{const{asChild:a,...l}=i,c=a?n:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),s.jsx(c,{...l,ref:o})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{});function ng(e,t){e&&bo.flushSync(()=>e.dispatchEvent(t))}function Ot(e){const t=m.useRef(e);return m.useEffect(()=>{t.current=e}),m.useMemo(()=>(...n)=>{var r;return(r=t.current)==null?void 0:r.call(t,...n)},[])}function Zw(e,t=globalThis==null?void 0:globalThis.document){const n=Ot(e);m.useEffect(()=>{const r=i=>{i.key==="Escape"&&n(i)};return t.addEventListener("keydown",r,{capture:!0}),()=>t.removeEventListener("keydown",r,{capture:!0})},[n,t])}var eb="DismissableLayer",Nc="dismissableLayer.update",tb="dismissableLayer.pointerDownOutside",nb="dismissableLayer.focusOutside",Rh,rg=m.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),xa=m.forwardRef((e,t)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:r,onPointerDownOutside:i,onFocusOutside:o,onInteractOutside:a,onDismiss:l,...c}=e,u=m.useContext(rg),[d,h]=m.useState(null),p=(d==null?void 0:d.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,y]=m.useState({}),k=He(t,P=>h(P)),v=Array.from(u.layers),[b]=[...u.layersWithOutsidePointerEventsDisabled].slice(-1),g=v.indexOf(b),f=d?v.indexOf(d):-1,x=u.layersWithOutsidePointerEventsDisabled.size>0,w=f>=g,C=ib(P=>{const S=P.target,j=[...u.branches].some(A=>A.contains(S));!w||j||(i==null||i(P),a==null||a(P),P.defaultPrevented||l==null||l())},p),N=ob(P=>{const S=P.target;[...u.branches].some(A=>A.contains(S))||(o==null||o(P),a==null||a(P),P.defaultPrevented||l==null||l())},p);return Zw(P=>{f===u.layers.size-1&&(r==null||r(P),!P.defaultPrevented&&l&&(P.preventDefault(),l()))},p),m.useEffect(()=>{if(d)return n&&(u.layersWithOutsidePointerEventsDisabled.size===0&&(Rh=p.body.style.pointerEvents,p.body.style.pointerEvents="none"),u.layersWithOutsidePointerEventsDisabled.add(d)),u.layers.add(d),Lh(),()=>{n&&u.layersWithOutsidePointerEventsDisabled.size===1&&(p.body.style.pointerEvents=Rh)}},[d,p,n,u]),m.useEffect(()=>()=>{d&&(u.layers.delete(d),u.layersWithOutsidePointerEventsDisabled.delete(d),Lh())},[d,u]),m.useEffect(()=>{const P=()=>y({});return document.addEventListener(Nc,P),()=>document.removeEventListener(Nc,P)},[]),s.jsx(Pe.div,{...c,ref:k,style:{pointerEvents:x?w?"auto":"none":void 0,...e.style},onFocusCapture:oe(e.onFocusCapture,N.onFocusCapture),onBlurCapture:oe(e.onBlurCapture,N.onBlurCapture),onPointerDownCapture:oe(e.onPointerDownCapture,C.onPointerDownCapture)})});xa.displayName=eb;var rb="DismissableLayerBranch",ig=m.forwardRef((e,t)=>{const n=m.useContext(rg),r=m.useRef(null),i=He(t,r);return m.useEffect(()=>{const o=r.current;if(o)return n.branches.add(o),()=>{n.branches.delete(o)}},[n.branches]),s.jsx(Pe.div,{...e,ref:i})});ig.displayName=rb;function ib(e,t=globalThis==null?void 0:globalThis.document){const n=Ot(e),r=m.useRef(!1),i=m.useRef(()=>{});return m.useEffect(()=>{const o=l=>{if(l.target&&!r.current){let c=function(){og(tb,n,u,{discrete:!0})};const u={originalEvent:l};l.pointerType==="touch"?(t.removeEventListener("click",i.current),i.current=c,t.addEventListener("click",i.current,{once:!0})):c()}else t.removeEventListener("click",i.current);r.current=!1},a=window.setTimeout(()=>{t.addEventListener("pointerdown",o)},0);return()=>{window.clearTimeout(a),t.removeEventListener("pointerdown",o),t.removeEventListener("click",i.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}function ob(e,t=globalThis==null?void 0:globalThis.document){const n=Ot(e),r=m.useRef(!1);return m.useEffect(()=>{const i=o=>{o.target&&!r.current&&og(nb,n,{originalEvent:o},{discrete:!1})};return t.addEventListener("focusin",i),()=>t.removeEventListener("focusin",i)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}function Lh(){const e=new CustomEvent(Nc);document.dispatchEvent(e)}function og(e,t,n,{discrete:r}){const i=n.originalEvent.target,o=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&i.addEventListener(e,t,{once:!0}),r?ng(i,o):i.dispatchEvent(o)}var sb=xa,ab=ig,Zt=globalThis!=null&&globalThis.document?m.useLayoutEffect:()=>{},lb="Portal",qu=m.forwardRef((e,t)=>{var l;const{container:n,...r}=e,[i,o]=m.useState(!1);Zt(()=>o(!0),[]);const a=n||i&&((l=globalThis==null?void 0:globalThis.document)==null?void 0:l.body);return a?O0.createPortal(s.jsx(Pe.div,{...r,ref:t}),a):null});qu.displayName=lb;function cb(e,t){return m.useReducer((n,r)=>t[n][r]??n,e)}var So=e=>{const{present:t,children:n}=e,r=ub(t),i=typeof n=="function"?n({present:r.isPresent}):m.Children.only(n),o=He(r.ref,db(i));return typeof n=="function"||r.isPresent?m.cloneElement(i,{ref:o}):null};So.displayName="Presence";function ub(e){const[t,n]=m.useState(),r=m.useRef(null),i=m.useRef(e),o=m.useRef("none"),a=e?"mounted":"unmounted",[l,c]=cb(a,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return m.useEffect(()=>{const u=Qo(r.current);o.current=l==="mounted"?u:"none"},[l]),Zt(()=>{const u=r.current,d=i.current;if(d!==e){const p=o.current,y=Qo(u);e?c("MOUNT"):y==="none"||(u==null?void 0:u.display)==="none"?c("UNMOUNT"):c(d&&p!==y?"ANIMATION_OUT":"UNMOUNT"),i.current=e}},[e,c]),Zt(()=>{if(t){let u;const d=t.ownerDocument.defaultView??window,h=y=>{const v=Qo(r.current).includes(y.animationName);if(y.target===t&&v&&(c("ANIMATION_END"),!i.current)){const b=t.style.animationFillMode;t.style.animationFillMode="forwards",u=d.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=b)})}},p=y=>{y.target===t&&(o.current=Qo(r.current))};return t.addEventListener("animationstart",p),t.addEventListener("animationcancel",h),t.addEventListener("animationend",h),()=>{d.clearTimeout(u),t.removeEventListener("animationstart",p),t.removeEventListener("animationcancel",h),t.removeEventListener("animationend",h)}}else c("ANIMATION_END")},[t,c]),{isPresent:["mounted","unmountSuspended"].includes(l),ref:m.useCallback(u=>{r.current=u?getComputedStyle(u):null,n(u)},[])}}function Qo(e){return(e==null?void 0:e.animationName)||"none"}function db(e){var r,i;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(i=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:i.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var hb=Wc[" useInsertionEffect ".trim().toString()]||Zt;function Bu({prop:e,defaultProp:t,onChange:n=()=>{},caller:r}){const[i,o,a]=pb({defaultProp:t,onChange:n}),l=e!==void 0,c=l?e:i;{const d=m.useRef(e!==void 0);m.useEffect(()=>{const h=d.current;h!==l&&console.warn(`${r} is changing from ${h?"controlled":"uncontrolled"} to ${l?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),d.current=l},[l,r])}const u=m.useCallback(d=>{var h;if(l){const p=mb(d)?d(e):d;p!==e&&((h=a.current)==null||h.call(a,p))}else o(d)},[l,e,o,a]);return[c,u]}function pb({defaultProp:e,onChange:t}){const[n,r]=m.useState(e),i=m.useRef(n),o=m.useRef(t);return hb(()=>{o.current=t},[t]),m.useEffect(()=>{var a;i.current!==n&&((a=o.current)==null||a.call(o,n),i.current=n)},[n,i]),[n,r,o]}function mb(e){return typeof e=="function"}var fb=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"}),gb="VisuallyHidden",wa=m.forwardRef((e,t)=>s.jsx(Pe.span,{...e,ref:t,style:{...fb,...e.style}}));wa.displayName=gb;var vb=wa,Uu="ToastProvider",[$u,yb,xb]=Xw("Toast"),[sg,PP]=Co("Toast",[xb]),[wb,ba]=sg(Uu),ag=e=>{const{__scopeToast:t,label:n="Notification",duration:r=5e3,swipeDirection:i="right",swipeThreshold:o=50,children:a}=e,[l,c]=m.useState(null),[u,d]=m.useState(0),h=m.useRef(!1),p=m.useRef(!1);return n.trim()||console.error(`Invalid prop \`label\` supplied to \`${Uu}\`. Expected non-empty \`string\`.`),s.jsx($u.Provider,{scope:t,children:s.jsx(wb,{scope:t,label:n,duration:r,swipeDirection:i,swipeThreshold:o,toastCount:u,viewport:l,onViewportChange:c,onToastAdd:m.useCallback(()=>d(y=>y+1),[]),onToastRemove:m.useCallback(()=>d(y=>y-1),[]),isFocusedToastEscapeKeyDownRef:h,isClosePausedRef:p,children:a})})};ag.displayName=Uu;var lg="ToastViewport",bb=["F8"],Pc="toast.viewportPause",Tc="toast.viewportResume",cg=m.forwardRef((e,t)=>{const{__scopeToast:n,hotkey:r=bb,label:i="Notifications ({hotkey})",...o}=e,a=ba(lg,n),l=yb(n),c=m.useRef(null),u=m.useRef(null),d=m.useRef(null),h=m.useRef(null),p=He(t,h,a.onViewportChange),y=r.join("+").replace(/Key/g,"").replace(/Digit/g,""),k=a.toastCount>0;m.useEffect(()=>{const b=g=>{var x;r.length!==0&&r.every(w=>g[w]||g.code===w)&&((x=h.current)==null||x.focus())};return document.addEventListener("keydown",b),()=>document.removeEventListener("keydown",b)},[r]),m.useEffect(()=>{const b=c.current,g=h.current;if(k&&b&&g){const f=()=>{if(!a.isClosePausedRef.current){const N=new CustomEvent(Pc);g.dispatchEvent(N),a.isClosePausedRef.current=!0}},x=()=>{if(a.isClosePausedRef.current){const N=new CustomEvent(Tc);g.dispatchEvent(N),a.isClosePausedRef.current=!1}},w=N=>{!b.contains(N.relatedTarget)&&x()},C=()=>{b.contains(document.activeElement)||x()};return b.addEventListener("focusin",f),b.addEventListener("focusout",w),b.addEventListener("pointermove",f),b.addEventListener("pointerleave",C),window.addEventListener("blur",f),window.addEventListener("focus",x),()=>{b.removeEventListener("focusin",f),b.removeEventListener("focusout",w),b.removeEventListener("pointermove",f),b.removeEventListener("pointerleave",C),window.removeEventListener("blur",f),window.removeEventListener("focus",x)}}},[k,a.isClosePausedRef]);const v=m.useCallback(({tabbingDirection:b})=>{const f=l().map(x=>{const w=x.ref.current,C=[w,...Lb(w)];return b==="forwards"?C:C.reverse()});return(b==="forwards"?f.reverse():f).flat()},[l]);return m.useEffect(()=>{const b=h.current;if(b){const g=f=>{var C,N,P;const x=f.altKey||f.ctrlKey||f.metaKey;if(f.key==="Tab"&&!x){const S=document.activeElement,j=f.shiftKey;if(f.target===b&&j){(C=u.current)==null||C.focus();return}const R=v({tabbingDirection:j?"backwards":"forwards"}),H=R.findIndex(D=>D===S);dl(R.slice(H+1))?f.preventDefault():j?(N=u.current)==null||N.focus():(P=d.current)==null||P.focus()}};return b.addEventListener("keydown",g),()=>b.removeEventListener("keydown",g)}},[l,v]),s.jsxs(ab,{ref:c,role:"region","aria-label":i.replace("{hotkey}",y),tabIndex:-1,style:{pointerEvents:k?void 0:"none"},children:[k&&s.jsx(jc,{ref:u,onFocusFromOutsideViewport:()=>{const b=v({tabbingDirection:"forwards"});dl(b)}}),s.jsx($u.Slot,{scope:n,children:s.jsx(Pe.ol,{tabIndex:-1,...o,ref:p})}),k&&s.jsx(jc,{ref:d,onFocusFromOutsideViewport:()=>{const b=v({tabbingDirection:"backwards"});dl(b)}})]})});cg.displayName=lg;var ug="ToastFocusProxy",jc=m.forwardRef((e,t)=>{const{__scopeToast:n,onFocusFromOutsideViewport:r,...i}=e,o=ba(ug,n);return s.jsx(wa,{"aria-hidden":!0,tabIndex:0,...i,ref:t,style:{position:"fixed"},onFocus:a=>{var u;const l=a.relatedTarget;!((u=o.viewport)!=null&&u.contains(l))&&r()}})});jc.displayName=ug;var No="Toast",kb="toast.swipeStart",Cb="toast.swipeMove",Sb="toast.swipeCancel",Nb="toast.swipeEnd",dg=m.forwardRef((e,t)=>{const{forceMount:n,open:r,defaultOpen:i,onOpenChange:o,...a}=e,[l,c]=Bu({prop:r,defaultProp:i??!0,onChange:o,caller:No});return s.jsx(So,{present:n||l,children:s.jsx(jb,{open:l,...a,ref:t,onClose:()=>c(!1),onPause:Ot(e.onPause),onResume:Ot(e.onResume),onSwipeStart:oe(e.onSwipeStart,u=>{u.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:oe(e.onSwipeMove,u=>{const{x:d,y:h}=u.detail.delta;u.currentTarget.setAttribute("data-swipe","move"),u.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${d}px`),u.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${h}px`)}),onSwipeCancel:oe(e.onSwipeCancel,u=>{u.currentTarget.setAttribute("data-swipe","cancel"),u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:oe(e.onSwipeEnd,u=>{const{x:d,y:h}=u.detail.delta;u.currentTarget.setAttribute("data-swipe","end"),u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),u.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${d}px`),u.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${h}px`),c(!1)})})})});dg.displayName=No;var[Pb,Tb]=sg(No,{onClose(){}}),jb=m.forwardRef((e,t)=>{const{__scopeToast:n,type:r="foreground",duration:i,open:o,onClose:a,onEscapeKeyDown:l,onPause:c,onResume:u,onSwipeStart:d,onSwipeMove:h,onSwipeCancel:p,onSwipeEnd:y,...k}=e,v=ba(No,n),[b,g]=m.useState(null),f=He(t,D=>g(D)),x=m.useRef(null),w=m.useRef(null),C=i||v.duration,N=m.useRef(0),P=m.useRef(C),S=m.useRef(0),{onToastAdd:j,onToastRemove:A}=v,O=Ot(()=>{var W;(b==null?void 0:b.contains(document.activeElement))&&((W=v.viewport)==null||W.focus()),a()}),R=m.useCallback(D=>{!D||D===1/0||(window.clearTimeout(S.current),N.current=new Date().getTime(),S.current=window.setTimeout(O,D))},[O]);m.useEffect(()=>{const D=v.viewport;if(D){const W=()=>{R(P.current),u==null||u()},U=()=>{const Q=new Date().getTime()-N.current;P.current=P.current-Q,window.clearTimeout(S.current),c==null||c()};return D.addEventListener(Pc,U),D.addEventListener(Tc,W),()=>{D.removeEventListener(Pc,U),D.removeEventListener(Tc,W)}}},[v.viewport,C,c,u,R]),m.useEffect(()=>{o&&!v.isClosePausedRef.current&&R(C)},[o,C,v.isClosePausedRef,R]),m.useEffect(()=>(j(),()=>A()),[j,A]);const H=m.useMemo(()=>b?yg(b):null,[b]);return v.viewport?s.jsxs(s.Fragment,{children:[H&&s.jsx(Eb,{__scopeToast:n,role:"status","aria-live":r==="foreground"?"assertive":"polite","aria-atomic":!0,children:H}),s.jsx(Pb,{scope:n,onClose:O,children:bo.createPortal(s.jsx($u.ItemSlot,{scope:n,children:s.jsx(sb,{asChild:!0,onEscapeKeyDown:oe(l,()=>{v.isFocusedToastEscapeKeyDownRef.current||O(),v.isFocusedToastEscapeKeyDownRef.current=!1}),children:s.jsx(Pe.li,{role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":o?"open":"closed","data-swipe-direction":v.swipeDirection,...k,ref:f,style:{userSelect:"none",touchAction:"none",...e.style},onKeyDown:oe(e.onKeyDown,D=>{D.key==="Escape"&&(l==null||l(D.nativeEvent),D.nativeEvent.defaultPrevented||(v.isFocusedToastEscapeKeyDownRef.current=!0,O()))}),onPointerDown:oe(e.onPointerDown,D=>{D.button===0&&(x.current={x:D.clientX,y:D.clientY})}),onPointerMove:oe(e.onPointerMove,D=>{if(!x.current)return;const W=D.clientX-x.current.x,U=D.clientY-x.current.y,Q=!!w.current,T=["left","right"].includes(v.swipeDirection),L=["left","up"].includes(v.swipeDirection)?Math.min:Math.max,z=T?L(0,W):0,$=T?0:L(0,U),Z=D.pointerType==="touch"?10:2,We={x:z,y:$},Le={originalEvent:D,delta:We};Q?(w.current=We,Go(Cb,h,Le,{discrete:!1})):Dh(We,v.swipeDirection,Z)?(w.current=We,Go(kb,d,Le,{discrete:!1}),D.target.setPointerCapture(D.pointerId)):(Math.abs(W)>Z||Math.abs(U)>Z)&&(x.current=null)}),onPointerUp:oe(e.onPointerUp,D=>{const W=w.current,U=D.target;if(U.hasPointerCapture(D.pointerId)&&U.releasePointerCapture(D.pointerId),w.current=null,x.current=null,W){const Q=D.currentTarget,T={originalEvent:D,delta:W};Dh(W,v.swipeDirection,v.swipeThreshold)?Go(Nb,y,T,{discrete:!0}):Go(Sb,p,T,{discrete:!0}),Q.addEventListener("click",L=>L.preventDefault(),{once:!0})}})})})}),v.viewport)})]}):null}),Eb=e=>{const{__scopeToast:t,children:n,...r}=e,i=ba(No,t),[o,a]=m.useState(!1),[l,c]=m.useState(!1);return Mb(()=>a(!0)),m.useEffect(()=>{const u=window.setTimeout(()=>c(!0),1e3);return()=>window.clearTimeout(u)},[]),l?null:s.jsx(qu,{asChild:!0,children:s.jsx(wa,{...r,children:o&&s.jsxs(s.Fragment,{children:[i.label," ",n]})})})},Ab="ToastTitle",hg=m.forwardRef((e,t)=>{const{__scopeToast:n,...r}=e;return s.jsx(Pe.div,{...r,ref:t})});hg.displayName=Ab;var Ib="ToastDescription",pg=m.forwardRef((e,t)=>{const{__scopeToast:n,...r}=e;return s.jsx(Pe.div,{...r,ref:t})});pg.displayName=Ib;var mg="ToastAction",fg=m.forwardRef((e,t)=>{const{altText:n,...r}=e;return n.trim()?s.jsx(vg,{altText:n,asChild:!0,children:s.jsx(Hu,{...r,ref:t})}):(console.error(`Invalid prop \`altText\` supplied to \`${mg}\`. Expected non-empty \`string\`.`),null)});fg.displayName=mg;var gg="ToastClose",Hu=m.forwardRef((e,t)=>{const{__scopeToast:n,...r}=e,i=Tb(gg,n);return s.jsx(vg,{asChild:!0,children:s.jsx(Pe.button,{type:"button",...r,ref:t,onClick:oe(e.onClick,i.onClose)})})});Hu.displayName=gg;var vg=m.forwardRef((e,t)=>{const{__scopeToast:n,altText:r,...i}=e;return s.jsx(Pe.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":r||void 0,...i,ref:t})});function yg(e){const t=[];return Array.from(e.childNodes).forEach(r=>{if(r.nodeType===r.TEXT_NODE&&r.textContent&&t.push(r.textContent),Rb(r)){const i=r.ariaHidden||r.hidden||r.style.display==="none",o=r.dataset.radixToastAnnounceExclude==="";if(!i)if(o){const a=r.dataset.radixToastAnnounceAlt;a&&t.push(a)}else t.push(...yg(r))}}),t}function Go(e,t,n,{discrete:r}){const i=n.originalEvent.currentTarget,o=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:n});t&&i.addEventListener(e,t,{once:!0}),r?ng(i,o):i.dispatchEvent(o)}var Dh=(e,t,n=0)=>{const r=Math.abs(e.x),i=Math.abs(e.y),o=r>i;return t==="left"||t==="right"?o&&r>n:!o&&i>n};function Mb(e=()=>{}){const t=Ot(e);Zt(()=>{let n=0,r=0;return n=window.requestAnimationFrame(()=>r=window.requestAnimationFrame(t)),()=>{window.cancelAnimationFrame(n),window.cancelAnimationFrame(r)}},[t])}function Rb(e){return e.nodeType===e.ELEMENT_NODE}function Lb(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const i=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||i?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function dl(e){const t=document.activeElement;return e.some(n=>n===t?!0:(n.focus(),document.activeElement!==t))}var Db=ag,xg=cg,wg=dg,bg=hg,kg=pg,Cg=fg,Sg=Hu;function Ng(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=Ng(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function Pg(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=Ng(e))&&(r&&(r+=" "),r+=t);return r}const Oh=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,_h=Pg,Wu=(e,t)=>n=>{var r;if((t==null?void 0:t.variants)==null)return _h(e,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:i,defaultVariants:o}=t,a=Object.keys(i).map(u=>{const d=n==null?void 0:n[u],h=o==null?void 0:o[u];if(d===null)return null;const p=Oh(d)||Oh(h);return i[u][p]}),l=n&&Object.entries(n).reduce((u,d)=>{let[h,p]=d;return p===void 0||(u[h]=p),u},{}),c=t==null||(r=t.compoundVariants)===null||r===void 0?void 0:r.reduce((u,d)=>{let{class:h,className:p,...y}=d;return Object.entries(y).every(k=>{let[v,b]=k;return Array.isArray(b)?b.includes({...o,...l}[v]):{...o,...l}[v]===b})?[...u,h,p]:u},[]);return _h(e,a,c,n==null?void 0:n.class,n==null?void 0:n.className)};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ob=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Tg=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var _b={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fb=m.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:o,iconNode:a,...l},c)=>m.createElement("svg",{ref:c,..._b,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:Tg("lucide",i),...l},[...a.map(([u,d])=>m.createElement(u,d)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=(e,t)=>{const n=m.forwardRef(({className:r,...i},o)=>m.createElement(Fb,{ref:o,iconNode:t,className:Tg(`lucide-${Ob(e)}`,r),...i}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jg=V("ArrowDownRight",[["path",{d:"m7 7 10 10",key:"1fmybs"}],["path",{d:"M17 7v10H7",key:"6fjiku"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ec=V("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ac=V("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gt=V("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zb=V("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vb=V("BadgeCheck",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qb=V("Blocks",[["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["path",{d:"M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3",key:"1fpvtg"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fh=V("BookOpenCheck",[["path",{d:"M12 21V7",key:"gj6g52"}],["path",{d:"m16 12 2 2 4-4",key:"mdajum"}],["path",{d:"M22 6V4a1 1 0 0 0-1-1h-5a4 4 0 0 0-4 4 4 4 0 0 0-4-4H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h6a3 3 0 0 1 3 3 3 3 0 0 1 3-3h6a1 1 0 0 0 1-1v-1.3",key:"8arnkb"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bb=V("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ub=V("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $b=V("BriefcaseBusiness",[["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2",key:"1ksdt3"}],["path",{d:"M22 13a18.15 18.15 0 0 1-20 0",key:"12hx5q"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hb=V("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fs=V("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zh=V("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wb=V("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qb=V("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gb=V("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kb=V("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gs=V("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yb=V("CodeXml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xb=V("Compass",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jb=V("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zb=V("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ic=V("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ks=V("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vh=V("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e1=V("Flower2",[["path",{d:"M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1",key:"3pnvol"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["path",{d:"M12 10v12",key:"6ubwww"}],["path",{d:"M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z",key:"9hd38g"}],["path",{d:"M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z",key:"ufn41s"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hl=V("Folder",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t1=V("GitFork",[["circle",{cx:"12",cy:"18",r:"3",key:"1mpf1b"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["path",{d:"M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9",key:"1uq4wg"}],["path",{d:"M12 12v3",key:"158kv8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fr=V("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n1=V("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r1=V("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qh=V("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i1=V("Languages",[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o1=V("Laptop",[["path",{d:"M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16",key:"tarvll"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s1=V("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a1=V("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg=V("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ag=V("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l1=V("Map",[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c1=V("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u1=V("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d1=V("Network",[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h1=V("SearchX",[["path",{d:"m13.5 8.5-5 5",key:"1cs55j"}],["path",{d:"m8.5 8.5 5 5",key:"a8mexj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pl=V("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p1=V("Shapes",[["path",{d:"M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z",key:"1bo67w"}],["rect",{x:"3",y:"14",width:"7",height:"7",rx:"1",key:"1bkyp8"}],["circle",{cx:"17.5",cy:"17.5",r:"3.5",key:"w3z12y"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m1=V("Share2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f1=V("Snowflake",[["line",{x1:"2",x2:"22",y1:"12",y2:"12",key:"1dnqot"}],["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"m20 16-4-4 4-4",key:"rquw4f"}],["path",{d:"m4 8 4 4-4 4",key:"12s3z9"}],["path",{d:"m16 4-4 4-4-4",key:"1tumq1"}],["path",{d:"m8 20 4-4 4 4",key:"9p200w"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qu=V("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g1=V("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v1=V("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mc=V("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y1=V("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ys=V("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Gu="-",x1=e=>{const t=b1(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=e;return{getClassGroupId:a=>{const l=a.split(Gu);return l[0]===""&&l.length!==1&&l.shift(),Ig(l,t)||w1(a)},getConflictingClassGroupIds:(a,l)=>{const c=n[a]||[];return l&&r[a]?[...c,...r[a]]:c}}},Ig=(e,t)=>{var a;if(e.length===0)return t.classGroupId;const n=e[0],r=t.nextPart.get(n),i=r?Ig(e.slice(1),r):void 0;if(i)return i;if(t.validators.length===0)return;const o=e.join(Gu);return(a=t.validators.find(({validator:l})=>l(o)))==null?void 0:a.classGroupId},Bh=/^\[(.+)\]$/,w1=e=>{if(Bh.test(e)){const t=Bh.exec(e)[1],n=t==null?void 0:t.substring(0,t.indexOf(":"));if(n)return"arbitrary.."+n}},b1=e=>{const{theme:t,prefix:n}=e,r={nextPart:new Map,validators:[]};return C1(Object.entries(e.classGroups),n).forEach(([o,a])=>{Rc(a,r,o,t)}),r},Rc=(e,t,n,r)=>{e.forEach(i=>{if(typeof i=="string"){const o=i===""?t:Uh(t,i);o.classGroupId=n;return}if(typeof i=="function"){if(k1(i)){Rc(i(r),t,n,r);return}t.validators.push({validator:i,classGroupId:n});return}Object.entries(i).forEach(([o,a])=>{Rc(a,Uh(t,o),n,r)})})},Uh=(e,t)=>{let n=e;return t.split(Gu).forEach(r=>{n.nextPart.has(r)||n.nextPart.set(r,{nextPart:new Map,validators:[]}),n=n.nextPart.get(r)}),n},k1=e=>e.isThemeGetter,C1=(e,t)=>t?e.map(([n,r])=>{const i=r.map(o=>typeof o=="string"?t+o:typeof o=="object"?Object.fromEntries(Object.entries(o).map(([a,l])=>[t+a,l])):o);return[n,i]}):e,S1=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,n=new Map,r=new Map;const i=(o,a)=>{n.set(o,a),t++,t>e&&(t=0,r=n,n=new Map)};return{get(o){let a=n.get(o);if(a!==void 0)return a;if((a=r.get(o))!==void 0)return i(o,a),a},set(o,a){n.has(o)?n.set(o,a):i(o,a)}}},Mg="!",N1=e=>{const{separator:t,experimentalParseClassName:n}=e,r=t.length===1,i=t[0],o=t.length,a=l=>{const c=[];let u=0,d=0,h;for(let b=0;b<l.length;b++){let g=l[b];if(u===0){if(g===i&&(r||l.slice(b,b+o)===t)){c.push(l.slice(d,b)),d=b+o;continue}if(g==="/"){h=b;continue}}g==="["?u++:g==="]"&&u--}const p=c.length===0?l:l.substring(d),y=p.startsWith(Mg),k=y?p.substring(1):p,v=h&&h>d?h-d:void 0;return{modifiers:c,hasImportantModifier:y,baseClassName:k,maybePostfixModifierPosition:v}};return n?l=>n({className:l,parseClassName:a}):a},P1=e=>{if(e.length<=1)return e;const t=[];let n=[];return e.forEach(r=>{r[0]==="["?(t.push(...n.sort(),r),n=[]):n.push(r)}),t.push(...n.sort()),t},T1=e=>({cache:S1(e.cacheSize),parseClassName:N1(e),...x1(e)}),j1=/\s+/,E1=(e,t)=>{const{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:i}=t,o=[],a=e.trim().split(j1);let l="";for(let c=a.length-1;c>=0;c-=1){const u=a[c],{modifiers:d,hasImportantModifier:h,baseClassName:p,maybePostfixModifierPosition:y}=n(u);let k=!!y,v=r(k?p.substring(0,y):p);if(!v){if(!k){l=u+(l.length>0?" "+l:l);continue}if(v=r(p),!v){l=u+(l.length>0?" "+l:l);continue}k=!1}const b=P1(d).join(":"),g=h?b+Mg:b,f=g+v;if(o.includes(f))continue;o.push(f);const x=i(v,k);for(let w=0;w<x.length;++w){const C=x[w];o.push(g+C)}l=u+(l.length>0?" "+l:l)}return l};function A1(){let e=0,t,n,r="";for(;e<arguments.length;)(t=arguments[e++])&&(n=Rg(t))&&(r&&(r+=" "),r+=n);return r}const Rg=e=>{if(typeof e=="string")return e;let t,n="";for(let r=0;r<e.length;r++)e[r]&&(t=Rg(e[r]))&&(n&&(n+=" "),n+=t);return n};function I1(e,...t){let n,r,i,o=a;function a(c){const u=t.reduce((d,h)=>h(d),e());return n=T1(u),r=n.cache.get,i=n.cache.set,o=l,l(c)}function l(c){const u=r(c);if(u)return u;const d=E1(c,n);return i(c,d),d}return function(){return o(A1.apply(null,arguments))}}const te=e=>{const t=n=>n[e]||[];return t.isThemeGetter=!0,t},Lg=/^\[(?:([a-z-]+):)?(.+)\]$/i,M1=/^\d+\/\d+$/,R1=new Set(["px","full","screen"]),L1=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,D1=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,O1=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,_1=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,F1=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Vt=e=>zr(e)||R1.has(e)||M1.test(e),sn=e=>pi(e,"length",W1),zr=e=>!!e&&!Number.isNaN(Number(e)),ml=e=>pi(e,"number",zr),Ni=e=>!!e&&Number.isInteger(Number(e)),z1=e=>e.endsWith("%")&&zr(e.slice(0,-1)),B=e=>Lg.test(e),an=e=>L1.test(e),V1=new Set(["length","size","percentage"]),q1=e=>pi(e,V1,Dg),B1=e=>pi(e,"position",Dg),U1=new Set(["image","url"]),$1=e=>pi(e,U1,G1),H1=e=>pi(e,"",Q1),Pi=()=>!0,pi=(e,t,n)=>{const r=Lg.exec(e);return r?r[1]?typeof t=="string"?r[1]===t:t.has(r[1]):n(r[2]):!1},W1=e=>D1.test(e)&&!O1.test(e),Dg=()=>!1,Q1=e=>_1.test(e),G1=e=>F1.test(e),K1=()=>{const e=te("colors"),t=te("spacing"),n=te("blur"),r=te("brightness"),i=te("borderColor"),o=te("borderRadius"),a=te("borderSpacing"),l=te("borderWidth"),c=te("contrast"),u=te("grayscale"),d=te("hueRotate"),h=te("invert"),p=te("gap"),y=te("gradientColorStops"),k=te("gradientColorStopPositions"),v=te("inset"),b=te("margin"),g=te("opacity"),f=te("padding"),x=te("saturate"),w=te("scale"),C=te("sepia"),N=te("skew"),P=te("space"),S=te("translate"),j=()=>["auto","contain","none"],A=()=>["auto","hidden","clip","visible","scroll"],O=()=>["auto",B,t],R=()=>[B,t],H=()=>["",Vt,sn],D=()=>["auto",zr,B],W=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],U=()=>["solid","dashed","dotted","double","none"],Q=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],T=()=>["start","end","center","between","around","evenly","stretch"],L=()=>["","0",B],z=()=>["auto","avoid","all","avoid-page","page","left","right","column"],$=()=>[zr,B];return{cacheSize:500,separator:":",theme:{colors:[Pi],spacing:[Vt,sn],blur:["none","",an,B],brightness:$(),borderColor:[e],borderRadius:["none","","full",an,B],borderSpacing:R(),borderWidth:H(),contrast:$(),grayscale:L(),hueRotate:$(),invert:L(),gap:R(),gradientColorStops:[e],gradientColorStopPositions:[z1,sn],inset:O(),margin:O(),opacity:$(),padding:R(),saturate:$(),scale:$(),sepia:L(),skew:$(),space:R(),translate:R()},classGroups:{aspect:[{aspect:["auto","square","video",B]}],container:["container"],columns:[{columns:[an]}],"break-after":[{"break-after":z()}],"break-before":[{"break-before":z()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...W(),B]}],overflow:[{overflow:A()}],"overflow-x":[{"overflow-x":A()}],"overflow-y":[{"overflow-y":A()}],overscroll:[{overscroll:j()}],"overscroll-x":[{"overscroll-x":j()}],"overscroll-y":[{"overscroll-y":j()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[v]}],"inset-x":[{"inset-x":[v]}],"inset-y":[{"inset-y":[v]}],start:[{start:[v]}],end:[{end:[v]}],top:[{top:[v]}],right:[{right:[v]}],bottom:[{bottom:[v]}],left:[{left:[v]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",Ni,B]}],basis:[{basis:O()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",B]}],grow:[{grow:L()}],shrink:[{shrink:L()}],order:[{order:["first","last","none",Ni,B]}],"grid-cols":[{"grid-cols":[Pi]}],"col-start-end":[{col:["auto",{span:["full",Ni,B]},B]}],"col-start":[{"col-start":D()}],"col-end":[{"col-end":D()}],"grid-rows":[{"grid-rows":[Pi]}],"row-start-end":[{row:["auto",{span:[Ni,B]},B]}],"row-start":[{"row-start":D()}],"row-end":[{"row-end":D()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",B]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",B]}],gap:[{gap:[p]}],"gap-x":[{"gap-x":[p]}],"gap-y":[{"gap-y":[p]}],"justify-content":[{justify:["normal",...T()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...T(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...T(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[f]}],px:[{px:[f]}],py:[{py:[f]}],ps:[{ps:[f]}],pe:[{pe:[f]}],pt:[{pt:[f]}],pr:[{pr:[f]}],pb:[{pb:[f]}],pl:[{pl:[f]}],m:[{m:[b]}],mx:[{mx:[b]}],my:[{my:[b]}],ms:[{ms:[b]}],me:[{me:[b]}],mt:[{mt:[b]}],mr:[{mr:[b]}],mb:[{mb:[b]}],ml:[{ml:[b]}],"space-x":[{"space-x":[P]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[P]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",B,t]}],"min-w":[{"min-w":[B,t,"min","max","fit"]}],"max-w":[{"max-w":[B,t,"none","full","min","max","fit","prose",{screen:[an]},an]}],h:[{h:[B,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[B,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[B,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[B,t,"auto","min","max","fit"]}],"font-size":[{text:["base",an,sn]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",ml]}],"font-family":[{font:[Pi]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",B]}],"line-clamp":[{"line-clamp":["none",zr,ml]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Vt,B]}],"list-image":[{"list-image":["none",B]}],"list-style-type":[{list:["none","disc","decimal",B]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[g]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[g]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...U(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",Vt,sn]}],"underline-offset":[{"underline-offset":["auto",Vt,B]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:R()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",B]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",B]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[g]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...W(),B1]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",q1]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},$1]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[k]}],"gradient-via-pos":[{via:[k]}],"gradient-to-pos":[{to:[k]}],"gradient-from":[{from:[y]}],"gradient-via":[{via:[y]}],"gradient-to":[{to:[y]}],rounded:[{rounded:[o]}],"rounded-s":[{"rounded-s":[o]}],"rounded-e":[{"rounded-e":[o]}],"rounded-t":[{"rounded-t":[o]}],"rounded-r":[{"rounded-r":[o]}],"rounded-b":[{"rounded-b":[o]}],"rounded-l":[{"rounded-l":[o]}],"rounded-ss":[{"rounded-ss":[o]}],"rounded-se":[{"rounded-se":[o]}],"rounded-ee":[{"rounded-ee":[o]}],"rounded-es":[{"rounded-es":[o]}],"rounded-tl":[{"rounded-tl":[o]}],"rounded-tr":[{"rounded-tr":[o]}],"rounded-br":[{"rounded-br":[o]}],"rounded-bl":[{"rounded-bl":[o]}],"border-w":[{border:[l]}],"border-w-x":[{"border-x":[l]}],"border-w-y":[{"border-y":[l]}],"border-w-s":[{"border-s":[l]}],"border-w-e":[{"border-e":[l]}],"border-w-t":[{"border-t":[l]}],"border-w-r":[{"border-r":[l]}],"border-w-b":[{"border-b":[l]}],"border-w-l":[{"border-l":[l]}],"border-opacity":[{"border-opacity":[g]}],"border-style":[{border:[...U(),"hidden"]}],"divide-x":[{"divide-x":[l]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[l]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[g]}],"divide-style":[{divide:U()}],"border-color":[{border:[i]}],"border-color-x":[{"border-x":[i]}],"border-color-y":[{"border-y":[i]}],"border-color-s":[{"border-s":[i]}],"border-color-e":[{"border-e":[i]}],"border-color-t":[{"border-t":[i]}],"border-color-r":[{"border-r":[i]}],"border-color-b":[{"border-b":[i]}],"border-color-l":[{"border-l":[i]}],"divide-color":[{divide:[i]}],"outline-style":[{outline:["",...U()]}],"outline-offset":[{"outline-offset":[Vt,B]}],"outline-w":[{outline:[Vt,sn]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:H()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[g]}],"ring-offset-w":[{"ring-offset":[Vt,sn]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",an,H1]}],"shadow-color":[{shadow:[Pi]}],opacity:[{opacity:[g]}],"mix-blend":[{"mix-blend":[...Q(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":Q()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[r]}],contrast:[{contrast:[c]}],"drop-shadow":[{"drop-shadow":["","none",an,B]}],grayscale:[{grayscale:[u]}],"hue-rotate":[{"hue-rotate":[d]}],invert:[{invert:[h]}],saturate:[{saturate:[x]}],sepia:[{sepia:[C]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[c]}],"backdrop-grayscale":[{"backdrop-grayscale":[u]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[d]}],"backdrop-invert":[{"backdrop-invert":[h]}],"backdrop-opacity":[{"backdrop-opacity":[g]}],"backdrop-saturate":[{"backdrop-saturate":[x]}],"backdrop-sepia":[{"backdrop-sepia":[C]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[a]}],"border-spacing-x":[{"border-spacing-x":[a]}],"border-spacing-y":[{"border-spacing-y":[a]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",B]}],duration:[{duration:$()}],ease:[{ease:["linear","in","out","in-out",B]}],delay:[{delay:$()}],animate:[{animate:["none","spin","ping","pulse","bounce",B]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[w]}],"scale-x":[{"scale-x":[w]}],"scale-y":[{"scale-y":[w]}],rotate:[{rotate:[Ni,B]}],"translate-x":[{"translate-x":[S]}],"translate-y":[{"translate-y":[S]}],"skew-x":[{"skew-x":[N]}],"skew-y":[{"skew-y":[N]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",B]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",B]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":R()}],"scroll-mx":[{"scroll-mx":R()}],"scroll-my":[{"scroll-my":R()}],"scroll-ms":[{"scroll-ms":R()}],"scroll-me":[{"scroll-me":R()}],"scroll-mt":[{"scroll-mt":R()}],"scroll-mr":[{"scroll-mr":R()}],"scroll-mb":[{"scroll-mb":R()}],"scroll-ml":[{"scroll-ml":R()}],"scroll-p":[{"scroll-p":R()}],"scroll-px":[{"scroll-px":R()}],"scroll-py":[{"scroll-py":R()}],"scroll-ps":[{"scroll-ps":R()}],"scroll-pe":[{"scroll-pe":R()}],"scroll-pt":[{"scroll-pt":R()}],"scroll-pr":[{"scroll-pr":R()}],"scroll-pb":[{"scroll-pb":R()}],"scroll-pl":[{"scroll-pl":R()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",B]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[Vt,sn,ml]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},Y1=I1(K1);function ut(...e){return Y1(Pg(e))}const X1=Db,Og=m.forwardRef(({className:e,...t},n)=>s.jsx(xg,{ref:n,className:ut("fixed right-0 top-0 z-[100] flex max-h-screen w-full flex-col gap-3 p-4 sm:max-w-[380px]",e),...t}));Og.displayName=xg.displayName;const J1=Wu("group pointer-events-auto relative flex w-full cursor-pointer items-start gap-3 overflow-hidden rounded-xl border p-4 pr-5 shadow-xl shadow-slate-950/10 backdrop-blur transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full sm:data-[state=open]:slide-in-from-right-full",{variants:{variant:{default:"border-slate-200 bg-white/95 text-slate-900",success:"border-emerald-200 bg-white/95 text-slate-900",info:"border-indigo-200 bg-white/95 text-slate-900",warning:"border-amber-200 bg-white/95 text-slate-900",destructive:"destructive group border-red-200 bg-white/95 text-slate-900"}},defaultVariants:{variant:"default"}}),_g=m.forwardRef(({className:e,variant:t,...n},r)=>s.jsx(wg,{ref:r,className:ut(J1({variant:t}),e),...n}));_g.displayName=wg.displayName;const Z1=m.forwardRef(({className:e,...t},n)=>s.jsx(Cg,{ref:n,className:ut("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",e),...t}));Z1.displayName=Cg.displayName;const ek=m.forwardRef(({className:e,...t},n)=>s.jsx(Sg,{ref:n,className:ut("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",e),"toast-close":"",...t,children:s.jsx(Ys,{className:"h-4 w-4"})}));ek.displayName=Sg.displayName;const Fg=m.forwardRef(({className:e,...t},n)=>s.jsx(bg,{ref:n,className:ut("text-sm font-semibold leading-5",e),...t}));Fg.displayName=bg.displayName;const zg=m.forwardRef(({className:e,...t},n)=>s.jsx(kg,{ref:n,className:ut("line-clamp-2 text-sm leading-5 text-slate-500",e),...t}));zg.displayName=kg.displayName;const $h=3600,Hh={default:{icon:qh,iconClass:"bg-slate-100 text-slate-700",progressClass:"bg-slate-500"},success:{icon:Gb,iconClass:"bg-emerald-50 text-emerald-600",progressClass:"bg-emerald-500"},info:{icon:qh,iconClass:"bg-indigo-50 text-indigo-600",progressClass:"bg-indigo-500"},warning:{icon:y1,iconClass:"bg-amber-50 text-amber-600",progressClass:"bg-amber-500"},destructive:{icon:Kb,iconClass:"bg-red-50 text-red-600",progressClass:"bg-red-500"}};function tk(){const{toasts:e,dismiss:t}=Vu();return s.jsxs(X1,{duration:$h,children:[e.map(function({id:n,title:r,description:i,action:o,variant:a="default",...l}){const c=Hh[a]??Hh.default,u=c.icon;return s.jsxs(_g,{variant:a,onClick:()=>t(n),...l,children:[s.jsx("div",{className:`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${c.iconClass}`,children:s.jsx(u,{className:"h-4 w-4"})}),s.jsxs("div",{className:"min-w-0 flex-1",children:[s.jsxs("div",{className:"grid gap-1",children:[r&&s.jsx(Fg,{children:r}),i&&s.jsx(zg,{children:i})]}),o]}),s.jsx("div",{className:"absolute inset-x-0 bottom-0 h-1 bg-slate-100",children:s.jsx("div",{className:`h-full ${c.progressClass}`,style:{animation:`toast-progress ${$h}ms linear forwards`,transformOrigin:"left"}})})]},n)}),s.jsx(Og,{})]})}var nk=Wc[" useId ".trim().toString()]||(()=>{}),rk=0;function Vg(e){const[t,n]=m.useState(nk());return Zt(()=>{n(r=>r??String(rk++))},[e]),t?`radix-${t}`:""}const ik=["top","right","bottom","left"],Ln=Math.min,Ke=Math.max,Xs=Math.round,Ko=Math.floor,Dt=e=>({x:e,y:e}),ok={left:"right",right:"left",bottom:"top",top:"bottom"},sk={start:"end",end:"start"};function Lc(e,t,n){return Ke(e,Ln(t,n))}function en(e,t){return typeof e=="function"?e(t):e}function tn(e){return e.split("-")[0]}function mi(e){return e.split("-")[1]}function Ku(e){return e==="x"?"y":"x"}function Yu(e){return e==="y"?"height":"width"}const ak=new Set(["top","bottom"]);function Mt(e){return ak.has(tn(e))?"y":"x"}function Xu(e){return Ku(Mt(e))}function lk(e,t,n){n===void 0&&(n=!1);const r=mi(e),i=Xu(e),o=Yu(i);let a=i==="x"?r===(n?"end":"start")?"right":"left":r==="start"?"bottom":"top";return t.reference[o]>t.floating[o]&&(a=Js(a)),[a,Js(a)]}function ck(e){const t=Js(e);return[Dc(e),t,Dc(t)]}function Dc(e){return e.replace(/start|end/g,t=>sk[t])}const Wh=["left","right"],Qh=["right","left"],uk=["top","bottom"],dk=["bottom","top"];function hk(e,t,n){switch(e){case"top":case"bottom":return n?t?Qh:Wh:t?Wh:Qh;case"left":case"right":return t?uk:dk;default:return[]}}function pk(e,t,n,r){const i=mi(e);let o=hk(tn(e),n==="start",r);return i&&(o=o.map(a=>a+"-"+i),t&&(o=o.concat(o.map(Dc)))),o}function Js(e){return e.replace(/left|right|bottom|top/g,t=>ok[t])}function mk(e){return{top:0,right:0,bottom:0,left:0,...e}}function qg(e){return typeof e!="number"?mk(e):{top:e,right:e,bottom:e,left:e}}function Zs(e){const{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function Gh(e,t,n){let{reference:r,floating:i}=e;const o=Mt(t),a=Xu(t),l=Yu(a),c=tn(t),u=o==="y",d=r.x+r.width/2-i.width/2,h=r.y+r.height/2-i.height/2,p=r[l]/2-i[l]/2;let y;switch(c){case"top":y={x:d,y:r.y-i.height};break;case"bottom":y={x:d,y:r.y+r.height};break;case"right":y={x:r.x+r.width,y:h};break;case"left":y={x:r.x-i.width,y:h};break;default:y={x:r.x,y:r.y}}switch(mi(t)){case"start":y[a]-=p*(n&&u?-1:1);break;case"end":y[a]+=p*(n&&u?-1:1);break}return y}const fk=async(e,t,n)=>{const{placement:r="bottom",strategy:i="absolute",middleware:o=[],platform:a}=n,l=o.filter(Boolean),c=await(a.isRTL==null?void 0:a.isRTL(t));let u=await a.getElementRects({reference:e,floating:t,strategy:i}),{x:d,y:h}=Gh(u,r,c),p=r,y={},k=0;for(let v=0;v<l.length;v++){const{name:b,fn:g}=l[v],{x:f,y:x,data:w,reset:C}=await g({x:d,y:h,initialPlacement:r,placement:p,strategy:i,middlewareData:y,rects:u,platform:a,elements:{reference:e,floating:t}});d=f??d,h=x??h,y={...y,[b]:{...y[b],...w}},C&&k<=50&&(k++,typeof C=="object"&&(C.placement&&(p=C.placement),C.rects&&(u=C.rects===!0?await a.getElementRects({reference:e,floating:t,strategy:i}):C.rects),{x:d,y:h}=Gh(u,p,c)),v=-1)}return{x:d,y:h,placement:p,strategy:i,middlewareData:y}};async function co(e,t){var n;t===void 0&&(t={});const{x:r,y:i,platform:o,rects:a,elements:l,strategy:c}=e,{boundary:u="clippingAncestors",rootBoundary:d="viewport",elementContext:h="floating",altBoundary:p=!1,padding:y=0}=en(t,e),k=qg(y),b=l[p?h==="floating"?"reference":"floating":h],g=Zs(await o.getClippingRect({element:(n=await(o.isElement==null?void 0:o.isElement(b)))==null||n?b:b.contextElement||await(o.getDocumentElement==null?void 0:o.getDocumentElement(l.floating)),boundary:u,rootBoundary:d,strategy:c})),f=h==="floating"?{x:r,y:i,width:a.floating.width,height:a.floating.height}:a.reference,x=await(o.getOffsetParent==null?void 0:o.getOffsetParent(l.floating)),w=await(o.isElement==null?void 0:o.isElement(x))?await(o.getScale==null?void 0:o.getScale(x))||{x:1,y:1}:{x:1,y:1},C=Zs(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:f,offsetParent:x,strategy:c}):f);return{top:(g.top-C.top+k.top)/w.y,bottom:(C.bottom-g.bottom+k.bottom)/w.y,left:(g.left-C.left+k.left)/w.x,right:(C.right-g.right+k.right)/w.x}}const gk=e=>({name:"arrow",options:e,async fn(t){const{x:n,y:r,placement:i,rects:o,platform:a,elements:l,middlewareData:c}=t,{element:u,padding:d=0}=en(e,t)||{};if(u==null)return{};const h=qg(d),p={x:n,y:r},y=Xu(i),k=Yu(y),v=await a.getDimensions(u),b=y==="y",g=b?"top":"left",f=b?"bottom":"right",x=b?"clientHeight":"clientWidth",w=o.reference[k]+o.reference[y]-p[y]-o.floating[k],C=p[y]-o.reference[y],N=await(a.getOffsetParent==null?void 0:a.getOffsetParent(u));let P=N?N[x]:0;(!P||!await(a.isElement==null?void 0:a.isElement(N)))&&(P=l.floating[x]||o.floating[k]);const S=w/2-C/2,j=P/2-v[k]/2-1,A=Ln(h[g],j),O=Ln(h[f],j),R=A,H=P-v[k]-O,D=P/2-v[k]/2+S,W=Lc(R,D,H),U=!c.arrow&&mi(i)!=null&&D!==W&&o.reference[k]/2-(D<R?A:O)-v[k]/2<0,Q=U?D<R?D-R:D-H:0;return{[y]:p[y]+Q,data:{[y]:W,centerOffset:D-W-Q,...U&&{alignmentOffset:Q}},reset:U}}}),vk=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n,r;const{placement:i,middlewareData:o,rects:a,initialPlacement:l,platform:c,elements:u}=t,{mainAxis:d=!0,crossAxis:h=!0,fallbackPlacements:p,fallbackStrategy:y="bestFit",fallbackAxisSideDirection:k="none",flipAlignment:v=!0,...b}=en(e,t);if((n=o.arrow)!=null&&n.alignmentOffset)return{};const g=tn(i),f=Mt(l),x=tn(l)===l,w=await(c.isRTL==null?void 0:c.isRTL(u.floating)),C=p||(x||!v?[Js(l)]:ck(l)),N=k!=="none";!p&&N&&C.push(...pk(l,v,k,w));const P=[l,...C],S=await co(t,b),j=[];let A=((r=o.flip)==null?void 0:r.overflows)||[];if(d&&j.push(S[g]),h){const D=lk(i,a,w);j.push(S[D[0]],S[D[1]])}if(A=[...A,{placement:i,overflows:j}],!j.every(D=>D<=0)){var O,R;const D=(((O=o.flip)==null?void 0:O.index)||0)+1,W=P[D];if(W&&(!(h==="alignment"?f!==Mt(W):!1)||A.every(T=>T.overflows[0]>0&&Mt(T.placement)===f)))return{data:{index:D,overflows:A},reset:{placement:W}};let U=(R=A.filter(Q=>Q.overflows[0]<=0).sort((Q,T)=>Q.overflows[1]-T.overflows[1])[0])==null?void 0:R.placement;if(!U)switch(y){case"bestFit":{var H;const Q=(H=A.filter(T=>{if(N){const L=Mt(T.placement);return L===f||L==="y"}return!0}).map(T=>[T.placement,T.overflows.filter(L=>L>0).reduce((L,z)=>L+z,0)]).sort((T,L)=>T[1]-L[1])[0])==null?void 0:H[0];Q&&(U=Q);break}case"initialPlacement":U=l;break}if(i!==U)return{reset:{placement:U}}}return{}}}};function Kh(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function Yh(e){return ik.some(t=>e[t]>=0)}const yk=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(t){const{rects:n}=t,{strategy:r="referenceHidden",...i}=en(e,t);switch(r){case"referenceHidden":{const o=await co(t,{...i,elementContext:"reference"}),a=Kh(o,n.reference);return{data:{referenceHiddenOffsets:a,referenceHidden:Yh(a)}}}case"escaped":{const o=await co(t,{...i,altBoundary:!0}),a=Kh(o,n.floating);return{data:{escapedOffsets:a,escaped:Yh(a)}}}default:return{}}}}},Bg=new Set(["left","top"]);async function xk(e,t){const{placement:n,platform:r,elements:i}=e,o=await(r.isRTL==null?void 0:r.isRTL(i.floating)),a=tn(n),l=mi(n),c=Mt(n)==="y",u=Bg.has(a)?-1:1,d=o&&c?-1:1,h=en(t,e);let{mainAxis:p,crossAxis:y,alignmentAxis:k}=typeof h=="number"?{mainAxis:h,crossAxis:0,alignmentAxis:null}:{mainAxis:h.mainAxis||0,crossAxis:h.crossAxis||0,alignmentAxis:h.alignmentAxis};return l&&typeof k=="number"&&(y=l==="end"?k*-1:k),c?{x:y*d,y:p*u}:{x:p*u,y:y*d}}const wk=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var n,r;const{x:i,y:o,placement:a,middlewareData:l}=t,c=await xk(t,e);return a===((n=l.offset)==null?void 0:n.placement)&&(r=l.arrow)!=null&&r.alignmentOffset?{}:{x:i+c.x,y:o+c.y,data:{...c,placement:a}}}}},bk=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:r,placement:i}=t,{mainAxis:o=!0,crossAxis:a=!1,limiter:l={fn:b=>{let{x:g,y:f}=b;return{x:g,y:f}}},...c}=en(e,t),u={x:n,y:r},d=await co(t,c),h=Mt(tn(i)),p=Ku(h);let y=u[p],k=u[h];if(o){const b=p==="y"?"top":"left",g=p==="y"?"bottom":"right",f=y+d[b],x=y-d[g];y=Lc(f,y,x)}if(a){const b=h==="y"?"top":"left",g=h==="y"?"bottom":"right",f=k+d[b],x=k-d[g];k=Lc(f,k,x)}const v=l.fn({...t,[p]:y,[h]:k});return{...v,data:{x:v.x-n,y:v.y-r,enabled:{[p]:o,[h]:a}}}}}},kk=function(e){return e===void 0&&(e={}),{options:e,fn(t){const{x:n,y:r,placement:i,rects:o,middlewareData:a}=t,{offset:l=0,mainAxis:c=!0,crossAxis:u=!0}=en(e,t),d={x:n,y:r},h=Mt(i),p=Ku(h);let y=d[p],k=d[h];const v=en(l,t),b=typeof v=="number"?{mainAxis:v,crossAxis:0}:{mainAxis:0,crossAxis:0,...v};if(c){const x=p==="y"?"height":"width",w=o.reference[p]-o.floating[x]+b.mainAxis,C=o.reference[p]+o.reference[x]-b.mainAxis;y<w?y=w:y>C&&(y=C)}if(u){var g,f;const x=p==="y"?"width":"height",w=Bg.has(tn(i)),C=o.reference[h]-o.floating[x]+(w&&((g=a.offset)==null?void 0:g[h])||0)+(w?0:b.crossAxis),N=o.reference[h]+o.reference[x]+(w?0:((f=a.offset)==null?void 0:f[h])||0)-(w?b.crossAxis:0);k<C?k=C:k>N&&(k=N)}return{[p]:y,[h]:k}}}},Ck=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){var n,r;const{placement:i,rects:o,platform:a,elements:l}=t,{apply:c=()=>{},...u}=en(e,t),d=await co(t,u),h=tn(i),p=mi(i),y=Mt(i)==="y",{width:k,height:v}=o.floating;let b,g;h==="top"||h==="bottom"?(b=h,g=p===(await(a.isRTL==null?void 0:a.isRTL(l.floating))?"start":"end")?"left":"right"):(g=h,b=p==="end"?"top":"bottom");const f=v-d.top-d.bottom,x=k-d.left-d.right,w=Ln(v-d[b],f),C=Ln(k-d[g],x),N=!t.middlewareData.shift;let P=w,S=C;if((n=t.middlewareData.shift)!=null&&n.enabled.x&&(S=x),(r=t.middlewareData.shift)!=null&&r.enabled.y&&(P=f),N&&!p){const A=Ke(d.left,0),O=Ke(d.right,0),R=Ke(d.top,0),H=Ke(d.bottom,0);y?S=k-2*(A!==0||O!==0?A+O:Ke(d.left,d.right)):P=v-2*(R!==0||H!==0?R+H:Ke(d.top,d.bottom))}await c({...t,availableWidth:S,availableHeight:P});const j=await a.getDimensions(l.floating);return k!==j.width||v!==j.height?{reset:{rects:!0}}:{}}}};function ka(){return typeof window<"u"}function fi(e){return Ug(e)?(e.nodeName||"").toLowerCase():"#document"}function Je(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Ft(e){var t;return(t=(Ug(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Ug(e){return ka()?e instanceof Node||e instanceof Je(e).Node:!1}function kt(e){return ka()?e instanceof Element||e instanceof Je(e).Element:!1}function _t(e){return ka()?e instanceof HTMLElement||e instanceof Je(e).HTMLElement:!1}function Xh(e){return!ka()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof Je(e).ShadowRoot}const Sk=new Set(["inline","contents"]);function Po(e){const{overflow:t,overflowX:n,overflowY:r,display:i}=Ct(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!Sk.has(i)}const Nk=new Set(["table","td","th"]);function Pk(e){return Nk.has(fi(e))}const Tk=[":popover-open",":modal"];function Ca(e){return Tk.some(t=>{try{return e.matches(t)}catch{return!1}})}const jk=["transform","translate","scale","rotate","perspective"],Ek=["transform","translate","scale","rotate","perspective","filter"],Ak=["paint","layout","strict","content"];function Ju(e){const t=Zu(),n=kt(e)?Ct(e):e;return jk.some(r=>n[r]?n[r]!=="none":!1)||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||Ek.some(r=>(n.willChange||"").includes(r))||Ak.some(r=>(n.contain||"").includes(r))}function Ik(e){let t=Dn(e);for(;_t(t)&&!ri(t);){if(Ju(t))return t;if(Ca(t))return null;t=Dn(t)}return null}function Zu(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const Mk=new Set(["html","body","#document"]);function ri(e){return Mk.has(fi(e))}function Ct(e){return Je(e).getComputedStyle(e)}function Sa(e){return kt(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Dn(e){if(fi(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Xh(e)&&e.host||Ft(e);return Xh(t)?t.host:t}function $g(e){const t=Dn(e);return ri(t)?e.ownerDocument?e.ownerDocument.body:e.body:_t(t)&&Po(t)?t:$g(t)}function uo(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const i=$g(e),o=i===((r=e.ownerDocument)==null?void 0:r.body),a=Je(i);if(o){const l=Oc(a);return t.concat(a,a.visualViewport||[],Po(i)?i:[],l&&n?uo(l):[])}return t.concat(i,uo(i,[],n))}function Oc(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Hg(e){const t=Ct(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const i=_t(e),o=i?e.offsetWidth:n,a=i?e.offsetHeight:r,l=Xs(n)!==o||Xs(r)!==a;return l&&(n=o,r=a),{width:n,height:r,$:l}}function ed(e){return kt(e)?e:e.contextElement}function Vr(e){const t=ed(e);if(!_t(t))return Dt(1);const n=t.getBoundingClientRect(),{width:r,height:i,$:o}=Hg(t);let a=(o?Xs(n.width):n.width)/r,l=(o?Xs(n.height):n.height)/i;return(!a||!Number.isFinite(a))&&(a=1),(!l||!Number.isFinite(l))&&(l=1),{x:a,y:l}}const Rk=Dt(0);function Wg(e){const t=Je(e);return!Zu()||!t.visualViewport?Rk:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Lk(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==Je(e)?!1:t}function cr(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const i=e.getBoundingClientRect(),o=ed(e);let a=Dt(1);t&&(r?kt(r)&&(a=Vr(r)):a=Vr(e));const l=Lk(o,n,r)?Wg(o):Dt(0);let c=(i.left+l.x)/a.x,u=(i.top+l.y)/a.y,d=i.width/a.x,h=i.height/a.y;if(o){const p=Je(o),y=r&&kt(r)?Je(r):r;let k=p,v=Oc(k);for(;v&&r&&y!==k;){const b=Vr(v),g=v.getBoundingClientRect(),f=Ct(v),x=g.left+(v.clientLeft+parseFloat(f.paddingLeft))*b.x,w=g.top+(v.clientTop+parseFloat(f.paddingTop))*b.y;c*=b.x,u*=b.y,d*=b.x,h*=b.y,c+=x,u+=w,k=Je(v),v=Oc(k)}}return Zs({width:d,height:h,x:c,y:u})}function td(e,t){const n=Sa(e).scrollLeft;return t?t.left+n:cr(Ft(e)).left+n}function Qg(e,t,n){n===void 0&&(n=!1);const r=e.getBoundingClientRect(),i=r.left+t.scrollLeft-(n?0:td(e,r)),o=r.top+t.scrollTop;return{x:i,y:o}}function Dk(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e;const o=i==="fixed",a=Ft(r),l=t?Ca(t.floating):!1;if(r===a||l&&o)return n;let c={scrollLeft:0,scrollTop:0},u=Dt(1);const d=Dt(0),h=_t(r);if((h||!h&&!o)&&((fi(r)!=="body"||Po(a))&&(c=Sa(r)),_t(r))){const y=cr(r);u=Vr(r),d.x=y.x+r.clientLeft,d.y=y.y+r.clientTop}const p=a&&!h&&!o?Qg(a,c,!0):Dt(0);return{width:n.width*u.x,height:n.height*u.y,x:n.x*u.x-c.scrollLeft*u.x+d.x+p.x,y:n.y*u.y-c.scrollTop*u.y+d.y+p.y}}function Ok(e){return Array.from(e.getClientRects())}function _k(e){const t=Ft(e),n=Sa(e),r=e.ownerDocument.body,i=Ke(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),o=Ke(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let a=-n.scrollLeft+td(e);const l=-n.scrollTop;return Ct(r).direction==="rtl"&&(a+=Ke(t.clientWidth,r.clientWidth)-i),{width:i,height:o,x:a,y:l}}function Fk(e,t){const n=Je(e),r=Ft(e),i=n.visualViewport;let o=r.clientWidth,a=r.clientHeight,l=0,c=0;if(i){o=i.width,a=i.height;const u=Zu();(!u||u&&t==="fixed")&&(l=i.offsetLeft,c=i.offsetTop)}return{width:o,height:a,x:l,y:c}}const zk=new Set(["absolute","fixed"]);function Vk(e,t){const n=cr(e,!0,t==="fixed"),r=n.top+e.clientTop,i=n.left+e.clientLeft,o=_t(e)?Vr(e):Dt(1),a=e.clientWidth*o.x,l=e.clientHeight*o.y,c=i*o.x,u=r*o.y;return{width:a,height:l,x:c,y:u}}function Jh(e,t,n){let r;if(t==="viewport")r=Fk(e,n);else if(t==="document")r=_k(Ft(e));else if(kt(t))r=Vk(t,n);else{const i=Wg(e);r={x:t.x-i.x,y:t.y-i.y,width:t.width,height:t.height}}return Zs(r)}function Gg(e,t){const n=Dn(e);return n===t||!kt(n)||ri(n)?!1:Ct(n).position==="fixed"||Gg(n,t)}function qk(e,t){const n=t.get(e);if(n)return n;let r=uo(e,[],!1).filter(l=>kt(l)&&fi(l)!=="body"),i=null;const o=Ct(e).position==="fixed";let a=o?Dn(e):e;for(;kt(a)&&!ri(a);){const l=Ct(a),c=Ju(a);!c&&l.position==="fixed"&&(i=null),(o?!c&&!i:!c&&l.position==="static"&&!!i&&zk.has(i.position)||Po(a)&&!c&&Gg(e,a))?r=r.filter(d=>d!==a):i=l,a=Dn(a)}return t.set(e,r),r}function Bk(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e;const a=[...n==="clippingAncestors"?Ca(t)?[]:qk(t,this._c):[].concat(n),r],l=a[0],c=a.reduce((u,d)=>{const h=Jh(t,d,i);return u.top=Ke(h.top,u.top),u.right=Ln(h.right,u.right),u.bottom=Ln(h.bottom,u.bottom),u.left=Ke(h.left,u.left),u},Jh(t,l,i));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function Uk(e){const{width:t,height:n}=Hg(e);return{width:t,height:n}}function $k(e,t,n){const r=_t(t),i=Ft(t),o=n==="fixed",a=cr(e,!0,o,t);let l={scrollLeft:0,scrollTop:0};const c=Dt(0);function u(){c.x=td(i)}if(r||!r&&!o)if((fi(t)!=="body"||Po(i))&&(l=Sa(t)),r){const y=cr(t,!0,o,t);c.x=y.x+t.clientLeft,c.y=y.y+t.clientTop}else i&&u();o&&!r&&i&&u();const d=i&&!r&&!o?Qg(i,l):Dt(0),h=a.left+l.scrollLeft-c.x-d.x,p=a.top+l.scrollTop-c.y-d.y;return{x:h,y:p,width:a.width,height:a.height}}function fl(e){return Ct(e).position==="static"}function Zh(e,t){if(!_t(e)||Ct(e).position==="fixed")return null;if(t)return t(e);let n=e.offsetParent;return Ft(e)===n&&(n=n.ownerDocument.body),n}function Kg(e,t){const n=Je(e);if(Ca(e))return n;if(!_t(e)){let i=Dn(e);for(;i&&!ri(i);){if(kt(i)&&!fl(i))return i;i=Dn(i)}return n}let r=Zh(e,t);for(;r&&Pk(r)&&fl(r);)r=Zh(r,t);return r&&ri(r)&&fl(r)&&!Ju(r)?n:r||Ik(e)||n}const Hk=async function(e){const t=this.getOffsetParent||Kg,n=this.getDimensions,r=await n(e.floating);return{reference:$k(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function Wk(e){return Ct(e).direction==="rtl"}const Qk={convertOffsetParentRelativeRectToViewportRelativeRect:Dk,getDocumentElement:Ft,getClippingRect:Bk,getOffsetParent:Kg,getElementRects:Hk,getClientRects:Ok,getDimensions:Uk,getScale:Vr,isElement:kt,isRTL:Wk};function Yg(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function Gk(e,t){let n=null,r;const i=Ft(e);function o(){var l;clearTimeout(r),(l=n)==null||l.disconnect(),n=null}function a(l,c){l===void 0&&(l=!1),c===void 0&&(c=1),o();const u=e.getBoundingClientRect(),{left:d,top:h,width:p,height:y}=u;if(l||t(),!p||!y)return;const k=Ko(h),v=Ko(i.clientWidth-(d+p)),b=Ko(i.clientHeight-(h+y)),g=Ko(d),x={rootMargin:-k+"px "+-v+"px "+-b+"px "+-g+"px",threshold:Ke(0,Ln(1,c))||1};let w=!0;function C(N){const P=N[0].intersectionRatio;if(P!==c){if(!w)return a();P?a(!1,P):r=setTimeout(()=>{a(!1,1e-7)},1e3)}P===1&&!Yg(u,e.getBoundingClientRect())&&a(),w=!1}try{n=new IntersectionObserver(C,{...x,root:i.ownerDocument})}catch{n=new IntersectionObserver(C,x)}n.observe(e)}return a(!0),o}function Kk(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:o=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:c=!1}=r,u=ed(e),d=i||o?[...u?uo(u):[],...uo(t)]:[];d.forEach(g=>{i&&g.addEventListener("scroll",n,{passive:!0}),o&&g.addEventListener("resize",n)});const h=u&&l?Gk(u,n):null;let p=-1,y=null;a&&(y=new ResizeObserver(g=>{let[f]=g;f&&f.target===u&&y&&(y.unobserve(t),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{var x;(x=y)==null||x.observe(t)})),n()}),u&&!c&&y.observe(u),y.observe(t));let k,v=c?cr(e):null;c&&b();function b(){const g=cr(e);v&&!Yg(v,g)&&n(),v=g,k=requestAnimationFrame(b)}return n(),()=>{var g;d.forEach(f=>{i&&f.removeEventListener("scroll",n),o&&f.removeEventListener("resize",n)}),h==null||h(),(g=y)==null||g.disconnect(),y=null,c&&cancelAnimationFrame(k)}}const Yk=wk,Xk=bk,Jk=vk,Zk=Ck,e2=yk,ep=gk,t2=kk,n2=(e,t,n)=>{const r=new Map,i={platform:Qk,...n},o={...i.platform,_c:r};return fk(e,t,{...i,platform:o})};var r2=typeof document<"u",i2=function(){},gs=r2?m.useLayoutEffect:i2;function ea(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let n,r,i;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(n=e.length,n!==t.length)return!1;for(r=n;r--!==0;)if(!ea(e[r],t[r]))return!1;return!0}if(i=Object.keys(e),n=i.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!{}.hasOwnProperty.call(t,i[r]))return!1;for(r=n;r--!==0;){const o=i[r];if(!(o==="_owner"&&e.$$typeof)&&!ea(e[o],t[o]))return!1}return!0}return e!==e&&t!==t}function Xg(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function tp(e,t){const n=Xg(e);return Math.round(t*n)/n}function gl(e){const t=m.useRef(e);return gs(()=>{t.current=e}),t}function o2(e){e===void 0&&(e={});const{placement:t="bottom",strategy:n="absolute",middleware:r=[],platform:i,elements:{reference:o,floating:a}={},transform:l=!0,whileElementsMounted:c,open:u}=e,[d,h]=m.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[p,y]=m.useState(r);ea(p,r)||y(r);const[k,v]=m.useState(null),[b,g]=m.useState(null),f=m.useCallback(T=>{T!==N.current&&(N.current=T,v(T))},[]),x=m.useCallback(T=>{T!==P.current&&(P.current=T,g(T))},[]),w=o||k,C=a||b,N=m.useRef(null),P=m.useRef(null),S=m.useRef(d),j=c!=null,A=gl(c),O=gl(i),R=gl(u),H=m.useCallback(()=>{if(!N.current||!P.current)return;const T={placement:t,strategy:n,middleware:p};O.current&&(T.platform=O.current),n2(N.current,P.current,T).then(L=>{const z={...L,isPositioned:R.current!==!1};D.current&&!ea(S.current,z)&&(S.current=z,bo.flushSync(()=>{h(z)}))})},[p,t,n,O,R]);gs(()=>{u===!1&&S.current.isPositioned&&(S.current.isPositioned=!1,h(T=>({...T,isPositioned:!1})))},[u]);const D=m.useRef(!1);gs(()=>(D.current=!0,()=>{D.current=!1}),[]),gs(()=>{if(w&&(N.current=w),C&&(P.current=C),w&&C){if(A.current)return A.current(w,C,H);H()}},[w,C,H,A,j]);const W=m.useMemo(()=>({reference:N,floating:P,setReference:f,setFloating:x}),[f,x]),U=m.useMemo(()=>({reference:w,floating:C}),[w,C]),Q=m.useMemo(()=>{const T={position:n,left:0,top:0};if(!U.floating)return T;const L=tp(U.floating,d.x),z=tp(U.floating,d.y);return l?{...T,transform:"translate("+L+"px, "+z+"px)",...Xg(U.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:L,top:z}},[n,l,U.floating,d.x,d.y]);return m.useMemo(()=>({...d,update:H,refs:W,elements:U,floatingStyles:Q}),[d,H,W,U,Q])}const s2=e=>{function t(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:e,fn(n){const{element:r,padding:i}=typeof e=="function"?e(n):e;return r&&t(r)?r.current!=null?ep({element:r.current,padding:i}).fn(n):{}:r?ep({element:r,padding:i}).fn(n):{}}}},a2=(e,t)=>({...Yk(e),options:[e,t]}),l2=(e,t)=>({...Xk(e),options:[e,t]}),c2=(e,t)=>({...t2(e),options:[e,t]}),u2=(e,t)=>({...Jk(e),options:[e,t]}),d2=(e,t)=>({...Zk(e),options:[e,t]}),h2=(e,t)=>({...e2(e),options:[e,t]}),p2=(e,t)=>({...s2(e),options:[e,t]});var m2="Arrow",Jg=m.forwardRef((e,t)=>{const{children:n,width:r=10,height:i=5,...o}=e;return s.jsx(Pe.svg,{...o,ref:t,width:r,height:i,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:e.asChild?n:s.jsx("polygon",{points:"0,0 30,0 15,10"})})});Jg.displayName=m2;var f2=Jg;function g2(e){const[t,n]=m.useState(void 0);return Zt(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const r=new ResizeObserver(i=>{if(!Array.isArray(i)||!i.length)return;const o=i[0];let a,l;if("borderBoxSize"in o){const c=o.borderBoxSize,u=Array.isArray(c)?c[0]:c;a=u.inlineSize,l=u.blockSize}else a=e.offsetWidth,l=e.offsetHeight;n({width:a,height:l})});return r.observe(e,{box:"border-box"}),()=>r.unobserve(e)}else n(void 0)},[e]),t}var nd="Popper",[Zg,Na]=Co(nd),[v2,ev]=Zg(nd),tv=e=>{const{__scopePopper:t,children:n}=e,[r,i]=m.useState(null);return s.jsx(v2,{scope:t,anchor:r,onAnchorChange:i,children:n})};tv.displayName=nd;var nv="PopperAnchor",rv=m.forwardRef((e,t)=>{const{__scopePopper:n,virtualRef:r,...i}=e,o=ev(nv,n),a=m.useRef(null),l=He(t,a);return m.useEffect(()=>{o.onAnchorChange((r==null?void 0:r.current)||a.current)}),r?null:s.jsx(Pe.div,{...i,ref:l})});rv.displayName=nv;var rd="PopperContent",[y2,x2]=Zg(rd),iv=m.forwardRef((e,t)=>{var zt,jo,qn,gi,I,F;const{__scopePopper:n,side:r="bottom",sideOffset:i=0,align:o="center",alignOffset:a=0,arrowPadding:l=0,avoidCollisions:c=!0,collisionBoundary:u=[],collisionPadding:d=0,sticky:h="partial",hideWhenDetached:p=!1,updatePositionStrategy:y="optimized",onPlaced:k,...v}=e,b=ev(rd,n),[g,f]=m.useState(null),x=He(t,G=>f(G)),[w,C]=m.useState(null),N=g2(w),P=(N==null?void 0:N.width)??0,S=(N==null?void 0:N.height)??0,j=r+(o!=="center"?"-"+o:""),A=typeof d=="number"?d:{top:0,right:0,bottom:0,left:0,...d},O=Array.isArray(u)?u:[u],R=O.length>0,H={padding:A,boundary:O.filter(b2),altBoundary:R},{refs:D,floatingStyles:W,placement:U,isPositioned:Q,middlewareData:T}=o2({strategy:"fixed",placement:j,whileElementsMounted:(...G)=>Kk(...G,{animationFrame:y==="always"}),elements:{reference:b.anchor},middleware:[a2({mainAxis:i+S,alignmentAxis:a}),c&&l2({mainAxis:!0,crossAxis:!1,limiter:h==="partial"?c2():void 0,...H}),c&&u2({...H}),d2({...H,apply:({elements:G,rects:pe,availableWidth:dt,availableHeight:Da})=>{const{width:ay,height:ly}=pe.reference,Eo=G.floating.style;Eo.setProperty("--radix-popper-available-width",`${dt}px`),Eo.setProperty("--radix-popper-available-height",`${Da}px`),Eo.setProperty("--radix-popper-anchor-width",`${ay}px`),Eo.setProperty("--radix-popper-anchor-height",`${ly}px`)}}),w&&p2({element:w,padding:l}),k2({arrowWidth:P,arrowHeight:S}),p&&h2({strategy:"referenceHidden",...H})]}),[L,z]=av(U),$=Ot(k);Zt(()=>{Q&&($==null||$())},[Q,$]);const Z=(zt=T.arrow)==null?void 0:zt.x,We=(jo=T.arrow)==null?void 0:jo.y,Le=((qn=T.arrow)==null?void 0:qn.centerOffset)!==0,[rn,Qe]=m.useState();return Zt(()=>{g&&Qe(window.getComputedStyle(g).zIndex)},[g]),s.jsx("div",{ref:D.setFloating,"data-radix-popper-content-wrapper":"",style:{...W,transform:Q?W.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:rn,"--radix-popper-transform-origin":[(gi=T.transformOrigin)==null?void 0:gi.x,(I=T.transformOrigin)==null?void 0:I.y].join(" "),...((F=T.hide)==null?void 0:F.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:e.dir,children:s.jsx(y2,{scope:n,placedSide:L,onArrowChange:C,arrowX:Z,arrowY:We,shouldHideArrow:Le,children:s.jsx(Pe.div,{"data-side":L,"data-align":z,...v,ref:x,style:{...v.style,animation:Q?void 0:"none"}})})})});iv.displayName=rd;var ov="PopperArrow",w2={top:"bottom",right:"left",bottom:"top",left:"right"},sv=m.forwardRef(function(t,n){const{__scopePopper:r,...i}=t,o=x2(ov,r),a=w2[o.placedSide];return s.jsx("span",{ref:o.onArrowChange,style:{position:"absolute",left:o.arrowX,top:o.arrowY,[a]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[o.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[o.placedSide],visibility:o.shouldHideArrow?"hidden":void 0},children:s.jsx(f2,{...i,ref:n,style:{...i.style,display:"block"}})})});sv.displayName=ov;function b2(e){return e!==null}var k2=e=>({name:"transformOrigin",options:e,fn(t){var b,g,f;const{placement:n,rects:r,middlewareData:i}=t,a=((b=i.arrow)==null?void 0:b.centerOffset)!==0,l=a?0:e.arrowWidth,c=a?0:e.arrowHeight,[u,d]=av(n),h={start:"0%",center:"50%",end:"100%"}[d],p=(((g=i.arrow)==null?void 0:g.x)??0)+l/2,y=(((f=i.arrow)==null?void 0:f.y)??0)+c/2;let k="",v="";return u==="bottom"?(k=a?h:`${p}px`,v=`${-c}px`):u==="top"?(k=a?h:`${p}px`,v=`${r.floating.height+c}px`):u==="right"?(k=`${-c}px`,v=a?h:`${y}px`):u==="left"&&(k=`${r.floating.width+c}px`,v=a?h:`${y}px`),{data:{x:k,y:v}}}});function av(e){const[t,n="center"]=e.split("-");return[t,n]}var lv=tv,id=rv,cv=iv,uv=sv,[Pa,TP]=Co("Tooltip",[Na]),Ta=Na(),dv="TooltipProvider",C2=700,_c="tooltip.open",[S2,od]=Pa(dv),hv=e=>{const{__scopeTooltip:t,delayDuration:n=C2,skipDelayDuration:r=300,disableHoverableContent:i=!1,children:o}=e,a=m.useRef(!0),l=m.useRef(!1),c=m.useRef(0);return m.useEffect(()=>{const u=c.current;return()=>window.clearTimeout(u)},[]),s.jsx(S2,{scope:t,isOpenDelayedRef:a,delayDuration:n,onOpen:m.useCallback(()=>{window.clearTimeout(c.current),a.current=!1},[]),onClose:m.useCallback(()=>{window.clearTimeout(c.current),c.current=window.setTimeout(()=>a.current=!0,r)},[r]),isPointerInTransitRef:l,onPointerInTransitChange:m.useCallback(u=>{l.current=u},[]),disableHoverableContent:i,children:o})};hv.displayName=dv;var ho="Tooltip",[N2,ja]=Pa(ho),pv=e=>{const{__scopeTooltip:t,children:n,open:r,defaultOpen:i,onOpenChange:o,disableHoverableContent:a,delayDuration:l}=e,c=od(ho,e.__scopeTooltip),u=Ta(t),[d,h]=m.useState(null),p=Vg(),y=m.useRef(0),k=a??c.disableHoverableContent,v=l??c.delayDuration,b=m.useRef(!1),[g,f]=Bu({prop:r,defaultProp:i??!1,onChange:P=>{P?(c.onOpen(),document.dispatchEvent(new CustomEvent(_c))):c.onClose(),o==null||o(P)},caller:ho}),x=m.useMemo(()=>g?b.current?"delayed-open":"instant-open":"closed",[g]),w=m.useCallback(()=>{window.clearTimeout(y.current),y.current=0,b.current=!1,f(!0)},[f]),C=m.useCallback(()=>{window.clearTimeout(y.current),y.current=0,f(!1)},[f]),N=m.useCallback(()=>{window.clearTimeout(y.current),y.current=window.setTimeout(()=>{b.current=!0,f(!0),y.current=0},v)},[v,f]);return m.useEffect(()=>()=>{y.current&&(window.clearTimeout(y.current),y.current=0)},[]),s.jsx(lv,{...u,children:s.jsx(N2,{scope:t,contentId:p,open:g,stateAttribute:x,trigger:d,onTriggerChange:h,onTriggerEnter:m.useCallback(()=>{c.isOpenDelayedRef.current?N():w()},[c.isOpenDelayedRef,N,w]),onTriggerLeave:m.useCallback(()=>{k?C():(window.clearTimeout(y.current),y.current=0)},[C,k]),onOpen:w,onClose:C,disableHoverableContent:k,children:n})})};pv.displayName=ho;var Fc="TooltipTrigger",mv=m.forwardRef((e,t)=>{const{__scopeTooltip:n,...r}=e,i=ja(Fc,n),o=od(Fc,n),a=Ta(n),l=m.useRef(null),c=He(t,l,i.onTriggerChange),u=m.useRef(!1),d=m.useRef(!1),h=m.useCallback(()=>u.current=!1,[]);return m.useEffect(()=>()=>document.removeEventListener("pointerup",h),[h]),s.jsx(id,{asChild:!0,...a,children:s.jsx(Pe.button,{"aria-describedby":i.open?i.contentId:void 0,"data-state":i.stateAttribute,...r,ref:c,onPointerMove:oe(e.onPointerMove,p=>{p.pointerType!=="touch"&&!d.current&&!o.isPointerInTransitRef.current&&(i.onTriggerEnter(),d.current=!0)}),onPointerLeave:oe(e.onPointerLeave,()=>{i.onTriggerLeave(),d.current=!1}),onPointerDown:oe(e.onPointerDown,()=>{i.open&&i.onClose(),u.current=!0,document.addEventListener("pointerup",h,{once:!0})}),onFocus:oe(e.onFocus,()=>{u.current||i.onOpen()}),onBlur:oe(e.onBlur,i.onClose),onClick:oe(e.onClick,i.onClose)})})});mv.displayName=Fc;var P2="TooltipPortal",[jP,T2]=Pa(P2,{forceMount:void 0}),ii="TooltipContent",fv=m.forwardRef((e,t)=>{const n=T2(ii,e.__scopeTooltip),{forceMount:r=n.forceMount,side:i="top",...o}=e,a=ja(ii,e.__scopeTooltip);return s.jsx(So,{present:r||a.open,children:a.disableHoverableContent?s.jsx(gv,{side:i,...o,ref:t}):s.jsx(j2,{side:i,...o,ref:t})})}),j2=m.forwardRef((e,t)=>{const n=ja(ii,e.__scopeTooltip),r=od(ii,e.__scopeTooltip),i=m.useRef(null),o=He(t,i),[a,l]=m.useState(null),{trigger:c,onClose:u}=n,d=i.current,{onPointerInTransitChange:h}=r,p=m.useCallback(()=>{l(null),h(!1)},[h]),y=m.useCallback((k,v)=>{const b=k.currentTarget,g={x:k.clientX,y:k.clientY},f=R2(g,b.getBoundingClientRect()),x=L2(g,f),w=D2(v.getBoundingClientRect()),C=_2([...x,...w]);l(C),h(!0)},[h]);return m.useEffect(()=>()=>p(),[p]),m.useEffect(()=>{if(c&&d){const k=b=>y(b,d),v=b=>y(b,c);return c.addEventListener("pointerleave",k),d.addEventListener("pointerleave",v),()=>{c.removeEventListener("pointerleave",k),d.removeEventListener("pointerleave",v)}}},[c,d,y,p]),m.useEffect(()=>{if(a){const k=v=>{const b=v.target,g={x:v.clientX,y:v.clientY},f=(c==null?void 0:c.contains(b))||(d==null?void 0:d.contains(b)),x=!O2(g,a);f?p():x&&(p(),u())};return document.addEventListener("pointermove",k),()=>document.removeEventListener("pointermove",k)}},[c,d,a,u,p]),s.jsx(gv,{...e,ref:o})}),[E2,A2]=Pa(ho,{isInside:!1}),I2=Qw("TooltipContent"),gv=m.forwardRef((e,t)=>{const{__scopeTooltip:n,children:r,"aria-label":i,onEscapeKeyDown:o,onPointerDownOutside:a,...l}=e,c=ja(ii,n),u=Ta(n),{onClose:d}=c;return m.useEffect(()=>(document.addEventListener(_c,d),()=>document.removeEventListener(_c,d)),[d]),m.useEffect(()=>{if(c.trigger){const h=p=>{const y=p.target;y!=null&&y.contains(c.trigger)&&d()};return window.addEventListener("scroll",h,{capture:!0}),()=>window.removeEventListener("scroll",h,{capture:!0})}},[c.trigger,d]),s.jsx(xa,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:o,onPointerDownOutside:a,onFocusOutside:h=>h.preventDefault(),onDismiss:d,children:s.jsxs(cv,{"data-state":c.stateAttribute,...u,...l,ref:t,style:{...l.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[s.jsx(I2,{children:r}),s.jsx(E2,{scope:n,isInside:!0,children:s.jsx(vb,{id:c.contentId,role:"tooltip",children:i||r})})]})})});fv.displayName=ii;var vv="TooltipArrow",M2=m.forwardRef((e,t)=>{const{__scopeTooltip:n,...r}=e,i=Ta(n);return A2(vv,n).isInside?null:s.jsx(uv,{...i,...r,ref:t})});M2.displayName=vv;function R2(e,t){const n=Math.abs(t.top-e.y),r=Math.abs(t.bottom-e.y),i=Math.abs(t.right-e.x),o=Math.abs(t.left-e.x);switch(Math.min(n,r,i,o)){case o:return"left";case i:return"right";case n:return"top";case r:return"bottom";default:throw new Error("unreachable")}}function L2(e,t,n=5){const r=[];switch(t){case"top":r.push({x:e.x-n,y:e.y+n},{x:e.x+n,y:e.y+n});break;case"bottom":r.push({x:e.x-n,y:e.y-n},{x:e.x+n,y:e.y-n});break;case"left":r.push({x:e.x+n,y:e.y-n},{x:e.x+n,y:e.y+n});break;case"right":r.push({x:e.x-n,y:e.y-n},{x:e.x-n,y:e.y+n});break}return r}function D2(e){const{top:t,right:n,bottom:r,left:i}=e;return[{x:i,y:t},{x:n,y:t},{x:n,y:r},{x:i,y:r}]}function O2(e,t){const{x:n,y:r}=e;let i=!1;for(let o=0,a=t.length-1;o<t.length;a=o++){const l=t[o],c=t[a],u=l.x,d=l.y,h=c.x,p=c.y;d>r!=p>r&&n<(h-u)*(r-d)/(p-d)+u&&(i=!i)}return i}function _2(e){const t=e.slice();return t.sort((n,r)=>n.x<r.x?-1:n.x>r.x?1:n.y<r.y?-1:n.y>r.y?1:0),F2(t)}function F2(e){if(e.length<=1)return e.slice();const t=[];for(let r=0;r<e.length;r++){const i=e[r];for(;t.length>=2;){const o=t[t.length-1],a=t[t.length-2];if((o.x-a.x)*(i.y-a.y)>=(o.y-a.y)*(i.x-a.x))t.pop();else break}t.push(i)}t.pop();const n=[];for(let r=e.length-1;r>=0;r--){const i=e[r];for(;n.length>=2;){const o=n[n.length-1],a=n[n.length-2];if((o.x-a.x)*(i.y-a.y)>=(o.y-a.y)*(i.x-a.x))n.pop();else break}n.push(i)}return n.pop(),t.length===1&&n.length===1&&t[0].x===n[0].x&&t[0].y===n[0].y?t:t.concat(n)}var z2=hv,V2=pv,q2=mv,yv=fv;const B2=z2,U2=V2,$2=q2,xv=m.forwardRef(({className:e,sideOffset:t=4,...n},r)=>s.jsx(yv,{ref:r,sideOffset:t,className:ut("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...n}));xv.displayName=yv.displayName;var Ea=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){return this.listeners.add(e),this.onSubscribe(),()=>{this.listeners.delete(e),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},Aa=typeof window>"u"||"Deno"in globalThis;function mt(){}function H2(e,t){return typeof e=="function"?e(t):e}function W2(e){return typeof e=="number"&&e>=0&&e!==1/0}function Q2(e,t){return Math.max(e+(t||0)-Date.now(),0)}function zc(e,t){return typeof e=="function"?e(t):e}function G2(e,t){return typeof e=="function"?e(t):e}function np(e,t){const{type:n="all",exact:r,fetchStatus:i,predicate:o,queryKey:a,stale:l}=e;if(a){if(r){if(t.queryHash!==sd(a,t.options))return!1}else if(!mo(t.queryKey,a))return!1}if(n!=="all"){const c=t.isActive();if(n==="active"&&!c||n==="inactive"&&c)return!1}return!(typeof l=="boolean"&&t.isStale()!==l||i&&i!==t.state.fetchStatus||o&&!o(t))}function rp(e,t){const{exact:n,status:r,predicate:i,mutationKey:o}=e;if(o){if(!t.options.mutationKey)return!1;if(n){if(po(t.options.mutationKey)!==po(o))return!1}else if(!mo(t.options.mutationKey,o))return!1}return!(r&&t.state.status!==r||i&&!i(t))}function sd(e,t){return((t==null?void 0:t.queryKeyHashFn)||po)(e)}function po(e){return JSON.stringify(e,(t,n)=>Vc(n)?Object.keys(n).sort().reduce((r,i)=>(r[i]=n[i],r),{}):n)}function mo(e,t){return e===t?!0:typeof e!=typeof t?!1:e&&t&&typeof e=="object"&&typeof t=="object"?Object.keys(t).every(n=>mo(e[n],t[n])):!1}function wv(e,t){if(e===t)return e;const n=ip(e)&&ip(t);if(n||Vc(e)&&Vc(t)){const r=n?e:Object.keys(e),i=r.length,o=n?t:Object.keys(t),a=o.length,l=n?[]:{},c=new Set(r);let u=0;for(let d=0;d<a;d++){const h=n?d:o[d];(!n&&c.has(h)||n)&&e[h]===void 0&&t[h]===void 0?(l[h]=void 0,u++):(l[h]=wv(e[h],t[h]),l[h]===e[h]&&e[h]!==void 0&&u++)}return i===a&&u===i?e:l}return t}function ip(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function Vc(e){if(!op(e))return!1;const t=e.constructor;if(t===void 0)return!0;const n=t.prototype;return!(!op(n)||!n.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(e)!==Object.prototype)}function op(e){return Object.prototype.toString.call(e)==="[object Object]"}function K2(e){return new Promise(t=>{setTimeout(t,e)})}function Y2(e,t,n){return typeof n.structuralSharing=="function"?n.structuralSharing(e,t):n.structuralSharing!==!1?wv(e,t):t}function X2(e,t,n=0){const r=[...e,t];return n&&r.length>n?r.slice(1):r}function J2(e,t,n=0){const r=[t,...e];return n&&r.length>n?r.slice(0,-1):r}var ad=Symbol();function bv(e,t){return!e.queryFn&&(t!=null&&t.initialPromise)?()=>t.initialPromise:!e.queryFn||e.queryFn===ad?()=>Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)):e.queryFn}var Kn,mn,Br,Ap,Z2=(Ap=class extends Ea{constructor(){super();Y(this,Kn);Y(this,mn);Y(this,Br);q(this,Br,t=>{if(!Aa&&window.addEventListener){const n=()=>t();return window.addEventListener("visibilitychange",n,!1),()=>{window.removeEventListener("visibilitychange",n)}}})}onSubscribe(){E(this,mn)||this.setEventListener(E(this,Br))}onUnsubscribe(){var t;this.hasListeners()||((t=E(this,mn))==null||t.call(this),q(this,mn,void 0))}setEventListener(t){var n;q(this,Br,t),(n=E(this,mn))==null||n.call(this),q(this,mn,t(r=>{typeof r=="boolean"?this.setFocused(r):this.onFocus()}))}setFocused(t){E(this,Kn)!==t&&(q(this,Kn,t),this.onFocus())}onFocus(){const t=this.isFocused();this.listeners.forEach(n=>{n(t)})}isFocused(){var t;return typeof E(this,Kn)=="boolean"?E(this,Kn):((t=globalThis.document)==null?void 0:t.visibilityState)!=="hidden"}},Kn=new WeakMap,mn=new WeakMap,Br=new WeakMap,Ap),kv=new Z2,Ur,fn,$r,Ip,eC=(Ip=class extends Ea{constructor(){super();Y(this,Ur,!0);Y(this,fn);Y(this,$r);q(this,$r,t=>{if(!Aa&&window.addEventListener){const n=()=>t(!0),r=()=>t(!1);return window.addEventListener("online",n,!1),window.addEventListener("offline",r,!1),()=>{window.removeEventListener("online",n),window.removeEventListener("offline",r)}}})}onSubscribe(){E(this,fn)||this.setEventListener(E(this,$r))}onUnsubscribe(){var t;this.hasListeners()||((t=E(this,fn))==null||t.call(this),q(this,fn,void 0))}setEventListener(t){var n;q(this,$r,t),(n=E(this,fn))==null||n.call(this),q(this,fn,t(this.setOnline.bind(this)))}setOnline(t){E(this,Ur)!==t&&(q(this,Ur,t),this.listeners.forEach(r=>{r(t)}))}isOnline(){return E(this,Ur)}},Ur=new WeakMap,fn=new WeakMap,$r=new WeakMap,Ip),ta=new eC;function tC(){let e,t;const n=new Promise((i,o)=>{e=i,t=o});n.status="pending",n.catch(()=>{});function r(i){Object.assign(n,i),delete n.resolve,delete n.reject}return n.resolve=i=>{r({status:"fulfilled",value:i}),e(i)},n.reject=i=>{r({status:"rejected",reason:i}),t(i)},n}function nC(e){return Math.min(1e3*2**e,3e4)}function Cv(e){return(e??"online")==="online"?ta.isOnline():!0}var Sv=class extends Error{constructor(e){super("CancelledError"),this.revert=e==null?void 0:e.revert,this.silent=e==null?void 0:e.silent}};function vl(e){return e instanceof Sv}function Nv(e){let t=!1,n=0,r=!1,i;const o=tC(),a=v=>{var b;r||(p(new Sv(v)),(b=e.abort)==null||b.call(e))},l=()=>{t=!0},c=()=>{t=!1},u=()=>kv.isFocused()&&(e.networkMode==="always"||ta.isOnline())&&e.canRun(),d=()=>Cv(e.networkMode)&&e.canRun(),h=v=>{var b;r||(r=!0,(b=e.onSuccess)==null||b.call(e,v),i==null||i(),o.resolve(v))},p=v=>{var b;r||(r=!0,(b=e.onError)==null||b.call(e,v),i==null||i(),o.reject(v))},y=()=>new Promise(v=>{var b;i=g=>{(r||u())&&v(g)},(b=e.onPause)==null||b.call(e)}).then(()=>{var v;i=void 0,r||(v=e.onContinue)==null||v.call(e)}),k=()=>{if(r)return;let v;const b=n===0?e.initialPromise:void 0;try{v=b??e.fn()}catch(g){v=Promise.reject(g)}Promise.resolve(v).then(h).catch(g=>{var N;if(r)return;const f=e.retry??(Aa?0:3),x=e.retryDelay??nC,w=typeof x=="function"?x(n,g):x,C=f===!0||typeof f=="number"&&n<f||typeof f=="function"&&f(n,g);if(t||!C){p(g);return}n++,(N=e.onFail)==null||N.call(e,n,g),K2(w).then(()=>u()?void 0:y()).then(()=>{t?p(g):k()})})};return{promise:o,cancel:a,continue:()=>(i==null||i(),o),cancelRetry:l,continueRetry:c,canStart:d,start:()=>(d()?k():y().then(k),o)}}var rC=e=>setTimeout(e,0);function iC(){let e=[],t=0,n=l=>{l()},r=l=>{l()},i=rC;const o=l=>{t?e.push(l):i(()=>{n(l)})},a=()=>{const l=e;e=[],l.length&&i(()=>{r(()=>{l.forEach(c=>{n(c)})})})};return{batch:l=>{let c;t++;try{c=l()}finally{t--,t||a()}return c},batchCalls:l=>(...c)=>{o(()=>{l(...c)})},schedule:o,setNotifyFunction:l=>{n=l},setBatchNotifyFunction:l=>{r=l},setScheduler:l=>{i=l}}}var _e=iC(),Yn,Mp,Pv=(Mp=class{constructor(){Y(this,Yn)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),W2(this.gcTime)&&q(this,Yn,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(e){this.gcTime=Math.max(this.gcTime||0,e??(Aa?1/0:5*60*1e3))}clearGcTimeout(){E(this,Yn)&&(clearTimeout(E(this,Yn)),q(this,Yn,void 0))}},Yn=new WeakMap,Mp),Hr,Xn,nt,Jn,Ae,fo,Zn,ft,qt,Rp,oC=(Rp=class extends Pv{constructor(t){super();Y(this,ft);Y(this,Hr);Y(this,Xn);Y(this,nt);Y(this,Jn);Y(this,Ae);Y(this,fo);Y(this,Zn);q(this,Zn,!1),q(this,fo,t.defaultOptions),this.setOptions(t.options),this.observers=[],q(this,Jn,t.client),q(this,nt,E(this,Jn).getQueryCache()),this.queryKey=t.queryKey,this.queryHash=t.queryHash,q(this,Hr,aC(this.options)),this.state=t.state??E(this,Hr),this.scheduleGc()}get meta(){return this.options.meta}get promise(){var t;return(t=E(this,Ae))==null?void 0:t.promise}setOptions(t){this.options={...E(this,fo),...t},this.updateGcTime(this.options.gcTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&E(this,nt).remove(this)}setData(t,n){const r=Y2(this.state.data,t,this.options);return Te(this,ft,qt).call(this,{data:r,type:"success",dataUpdatedAt:n==null?void 0:n.updatedAt,manual:n==null?void 0:n.manual}),r}setState(t,n){Te(this,ft,qt).call(this,{type:"setState",state:t,setStateOptions:n})}cancel(t){var r,i;const n=(r=E(this,Ae))==null?void 0:r.promise;return(i=E(this,Ae))==null||i.cancel(t),n?n.then(mt).catch(mt):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(E(this,Hr))}isActive(){return this.observers.some(t=>G2(t.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===ad||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStatic(){return this.getObserversCount()>0?this.observers.some(t=>zc(t.options.staleTime,this)==="static"):!1}isStale(){return this.getObserversCount()>0?this.observers.some(t=>t.getCurrentResult().isStale):this.state.data===void 0||this.state.isInvalidated}isStaleByTime(t=0){return this.state.data===void 0?!0:t==="static"?!1:this.state.isInvalidated?!0:!Q2(this.state.dataUpdatedAt,t)}onFocus(){var n;const t=this.observers.find(r=>r.shouldFetchOnWindowFocus());t==null||t.refetch({cancelRefetch:!1}),(n=E(this,Ae))==null||n.continue()}onOnline(){var n;const t=this.observers.find(r=>r.shouldFetchOnReconnect());t==null||t.refetch({cancelRefetch:!1}),(n=E(this,Ae))==null||n.continue()}addObserver(t){this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),E(this,nt).notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){this.observers.includes(t)&&(this.observers=this.observers.filter(n=>n!==t),this.observers.length||(E(this,Ae)&&(E(this,Zn)?E(this,Ae).cancel({revert:!0}):E(this,Ae).cancelRetry()),this.scheduleGc()),E(this,nt).notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||Te(this,ft,qt).call(this,{type:"invalidate"})}fetch(t,n){var u,d,h;if(this.state.fetchStatus!=="idle"){if(this.state.data!==void 0&&(n!=null&&n.cancelRefetch))this.cancel({silent:!0});else if(E(this,Ae))return E(this,Ae).continueRetry(),E(this,Ae).promise}if(t&&this.setOptions(t),!this.options.queryFn){const p=this.observers.find(y=>y.options.queryFn);p&&this.setOptions(p.options)}const r=new AbortController,i=p=>{Object.defineProperty(p,"signal",{enumerable:!0,get:()=>(q(this,Zn,!0),r.signal)})},o=()=>{const p=bv(this.options,n),k=(()=>{const v={client:E(this,Jn),queryKey:this.queryKey,meta:this.meta};return i(v),v})();return q(this,Zn,!1),this.options.persister?this.options.persister(p,k,this):p(k)},l=(()=>{const p={fetchOptions:n,options:this.options,queryKey:this.queryKey,client:E(this,Jn),state:this.state,fetchFn:o};return i(p),p})();(u=this.options.behavior)==null||u.onFetch(l,this),q(this,Xn,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((d=l.fetchOptions)==null?void 0:d.meta))&&Te(this,ft,qt).call(this,{type:"fetch",meta:(h=l.fetchOptions)==null?void 0:h.meta});const c=p=>{var y,k,v,b;vl(p)&&p.silent||Te(this,ft,qt).call(this,{type:"error",error:p}),vl(p)||((k=(y=E(this,nt).config).onError)==null||k.call(y,p,this),(b=(v=E(this,nt).config).onSettled)==null||b.call(v,this.state.data,p,this)),this.scheduleGc()};return q(this,Ae,Nv({initialPromise:n==null?void 0:n.initialPromise,fn:l.fetchFn,abort:r.abort.bind(r),onSuccess:p=>{var y,k,v,b;if(p===void 0){c(new Error(`${this.queryHash} data is undefined`));return}try{this.setData(p)}catch(g){c(g);return}(k=(y=E(this,nt).config).onSuccess)==null||k.call(y,p,this),(b=(v=E(this,nt).config).onSettled)==null||b.call(v,p,this.state.error,this),this.scheduleGc()},onError:c,onFail:(p,y)=>{Te(this,ft,qt).call(this,{type:"failed",failureCount:p,error:y})},onPause:()=>{Te(this,ft,qt).call(this,{type:"pause"})},onContinue:()=>{Te(this,ft,qt).call(this,{type:"continue"})},retry:l.options.retry,retryDelay:l.options.retryDelay,networkMode:l.options.networkMode,canRun:()=>!0})),E(this,Ae).start()}},Hr=new WeakMap,Xn=new WeakMap,nt=new WeakMap,Jn=new WeakMap,Ae=new WeakMap,fo=new WeakMap,Zn=new WeakMap,ft=new WeakSet,qt=function(t){const n=r=>{switch(t.type){case"failed":return{...r,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...r,fetchStatus:"paused"};case"continue":return{...r,fetchStatus:"fetching"};case"fetch":return{...r,...sC(r.data,this.options),fetchMeta:t.meta??null};case"success":return q(this,Xn,void 0),{...r,data:t.data,dataUpdateCount:r.dataUpdateCount+1,dataUpdatedAt:t.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const i=t.error;return vl(i)&&i.revert&&E(this,Xn)?{...E(this,Xn),fetchStatus:"idle"}:{...r,error:i,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,fetchFailureReason:i,fetchStatus:"idle",status:"error"};case"invalidate":return{...r,isInvalidated:!0};case"setState":return{...r,...t.state}}};this.state=n(this.state),_e.batch(()=>{this.observers.forEach(r=>{r.onQueryUpdate()}),E(this,nt).notify({query:this,type:"updated",action:t})})},Rp);function sC(e,t){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:Cv(t.networkMode)?"fetching":"paused",...e===void 0&&{error:null,status:"pending"}}}function aC(e){const t=typeof e.initialData=="function"?e.initialData():e.initialData,n=t!==void 0,r=n?typeof e.initialDataUpdatedAt=="function"?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:n?r??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"pending",fetchStatus:"idle"}}var Tt,Lp,lC=(Lp=class extends Ea{constructor(t={}){super();Y(this,Tt);this.config=t,q(this,Tt,new Map)}build(t,n,r){const i=n.queryKey,o=n.queryHash??sd(i,n);let a=this.get(o);return a||(a=new oC({client:t,queryKey:i,queryHash:o,options:t.defaultQueryOptions(n),state:r,defaultOptions:t.getQueryDefaults(i)}),this.add(a)),a}add(t){E(this,Tt).has(t.queryHash)||(E(this,Tt).set(t.queryHash,t),this.notify({type:"added",query:t}))}remove(t){const n=E(this,Tt).get(t.queryHash);n&&(t.destroy(),n===t&&E(this,Tt).delete(t.queryHash),this.notify({type:"removed",query:t}))}clear(){_e.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}get(t){return E(this,Tt).get(t)}getAll(){return[...E(this,Tt).values()]}find(t){const n={exact:!0,...t};return this.getAll().find(r=>np(n,r))}findAll(t={}){const n=this.getAll();return Object.keys(t).length>0?n.filter(r=>np(t,r)):n}notify(t){_e.batch(()=>{this.listeners.forEach(n=>{n(t)})})}onFocus(){_e.batch(()=>{this.getAll().forEach(t=>{t.onFocus()})})}onOnline(){_e.batch(()=>{this.getAll().forEach(t=>{t.onOnline()})})}},Tt=new WeakMap,Lp),jt,De,er,Et,ln,Dp,cC=(Dp=class extends Pv{constructor(t){super();Y(this,Et);Y(this,jt);Y(this,De);Y(this,er);this.mutationId=t.mutationId,q(this,De,t.mutationCache),q(this,jt,[]),this.state=t.state||uC(),this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options=t,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){E(this,jt).includes(t)||(E(this,jt).push(t),this.clearGcTimeout(),E(this,De).notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){q(this,jt,E(this,jt).filter(n=>n!==t)),this.scheduleGc(),E(this,De).notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){E(this,jt).length||(this.state.status==="pending"?this.scheduleGc():E(this,De).remove(this))}continue(){var t;return((t=E(this,er))==null?void 0:t.continue())??this.execute(this.state.variables)}async execute(t){var o,a,l,c,u,d,h,p,y,k,v,b,g,f,x,w,C,N,P,S;const n=()=>{Te(this,Et,ln).call(this,{type:"continue"})};q(this,er,Nv({fn:()=>this.options.mutationFn?this.options.mutationFn(t):Promise.reject(new Error("No mutationFn found")),onFail:(j,A)=>{Te(this,Et,ln).call(this,{type:"failed",failureCount:j,error:A})},onPause:()=>{Te(this,Et,ln).call(this,{type:"pause"})},onContinue:n,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>E(this,De).canRun(this)}));const r=this.state.status==="pending",i=!E(this,er).canStart();try{if(r)n();else{Te(this,Et,ln).call(this,{type:"pending",variables:t,isPaused:i}),await((a=(o=E(this,De).config).onMutate)==null?void 0:a.call(o,t,this));const A=await((c=(l=this.options).onMutate)==null?void 0:c.call(l,t));A!==this.state.context&&Te(this,Et,ln).call(this,{type:"pending",context:A,variables:t,isPaused:i})}const j=await E(this,er).start();return await((d=(u=E(this,De).config).onSuccess)==null?void 0:d.call(u,j,t,this.state.context,this)),await((p=(h=this.options).onSuccess)==null?void 0:p.call(h,j,t,this.state.context)),await((k=(y=E(this,De).config).onSettled)==null?void 0:k.call(y,j,null,this.state.variables,this.state.context,this)),await((b=(v=this.options).onSettled)==null?void 0:b.call(v,j,null,t,this.state.context)),Te(this,Et,ln).call(this,{type:"success",data:j}),j}catch(j){try{throw await((f=(g=E(this,De).config).onError)==null?void 0:f.call(g,j,t,this.state.context,this)),await((w=(x=this.options).onError)==null?void 0:w.call(x,j,t,this.state.context)),await((N=(C=E(this,De).config).onSettled)==null?void 0:N.call(C,void 0,j,this.state.variables,this.state.context,this)),await((S=(P=this.options).onSettled)==null?void 0:S.call(P,void 0,j,t,this.state.context)),j}finally{Te(this,Et,ln).call(this,{type:"error",error:j})}}finally{E(this,De).runNext(this)}}},jt=new WeakMap,De=new WeakMap,er=new WeakMap,Et=new WeakSet,ln=function(t){const n=r=>{switch(t.type){case"failed":return{...r,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...r,isPaused:!0};case"continue":return{...r,isPaused:!1};case"pending":return{...r,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:t.isPaused,status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...r,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...r,data:void 0,error:t.error,failureCount:r.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}};this.state=n(this.state),_e.batch(()=>{E(this,jt).forEach(r=>{r.onMutationUpdate(t)}),E(this,De).notify({mutation:this,type:"updated",action:t})})},Dp);function uC(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var $t,gt,go,Op,dC=(Op=class extends Ea{constructor(t={}){super();Y(this,$t);Y(this,gt);Y(this,go);this.config=t,q(this,$t,new Set),q(this,gt,new Map),q(this,go,0)}build(t,n,r){const i=new cC({mutationCache:this,mutationId:++Ao(this,go)._,options:t.defaultMutationOptions(n),state:r});return this.add(i),i}add(t){E(this,$t).add(t);const n=Yo(t);if(typeof n=="string"){const r=E(this,gt).get(n);r?r.push(t):E(this,gt).set(n,[t])}this.notify({type:"added",mutation:t})}remove(t){if(E(this,$t).delete(t)){const n=Yo(t);if(typeof n=="string"){const r=E(this,gt).get(n);if(r)if(r.length>1){const i=r.indexOf(t);i!==-1&&r.splice(i,1)}else r[0]===t&&E(this,gt).delete(n)}}this.notify({type:"removed",mutation:t})}canRun(t){const n=Yo(t);if(typeof n=="string"){const r=E(this,gt).get(n),i=r==null?void 0:r.find(o=>o.state.status==="pending");return!i||i===t}else return!0}runNext(t){var r;const n=Yo(t);if(typeof n=="string"){const i=(r=E(this,gt).get(n))==null?void 0:r.find(o=>o!==t&&o.state.isPaused);return(i==null?void 0:i.continue())??Promise.resolve()}else return Promise.resolve()}clear(){_e.batch(()=>{E(this,$t).forEach(t=>{this.notify({type:"removed",mutation:t})}),E(this,$t).clear(),E(this,gt).clear()})}getAll(){return Array.from(E(this,$t))}find(t){const n={exact:!0,...t};return this.getAll().find(r=>rp(n,r))}findAll(t={}){return this.getAll().filter(n=>rp(t,n))}notify(t){_e.batch(()=>{this.listeners.forEach(n=>{n(t)})})}resumePausedMutations(){const t=this.getAll().filter(n=>n.state.isPaused);return _e.batch(()=>Promise.all(t.map(n=>n.continue().catch(mt))))}},$t=new WeakMap,gt=new WeakMap,go=new WeakMap,Op);function Yo(e){var t;return(t=e.options.scope)==null?void 0:t.id}function sp(e){return{onFetch:(t,n)=>{var d,h,p,y,k;const r=t.options,i=(p=(h=(d=t.fetchOptions)==null?void 0:d.meta)==null?void 0:h.fetchMore)==null?void 0:p.direction,o=((y=t.state.data)==null?void 0:y.pages)||[],a=((k=t.state.data)==null?void 0:k.pageParams)||[];let l={pages:[],pageParams:[]},c=0;const u=async()=>{let v=!1;const b=x=>{Object.defineProperty(x,"signal",{enumerable:!0,get:()=>(t.signal.aborted?v=!0:t.signal.addEventListener("abort",()=>{v=!0}),t.signal)})},g=bv(t.options,t.fetchOptions),f=async(x,w,C)=>{if(v)return Promise.reject();if(w==null&&x.pages.length)return Promise.resolve(x);const P=(()=>{const O={client:t.client,queryKey:t.queryKey,pageParam:w,direction:C?"backward":"forward",meta:t.options.meta};return b(O),O})(),S=await g(P),{maxPages:j}=t.options,A=C?J2:X2;return{pages:A(x.pages,S,j),pageParams:A(x.pageParams,w,j)}};if(i&&o.length){const x=i==="backward",w=x?hC:ap,C={pages:o,pageParams:a},N=w(r,C);l=await f(C,N,x)}else{const x=e??o.length;do{const w=c===0?a[0]??r.initialPageParam:ap(r,l);if(c>0&&w==null)break;l=await f(l,w),c++}while(c<x)}return l};t.options.persister?t.fetchFn=()=>{var v,b;return(b=(v=t.options).persister)==null?void 0:b.call(v,u,{client:t.client,queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},n)}:t.fetchFn=u}}}function ap(e,{pages:t,pageParams:n}){const r=t.length-1;return t.length>0?e.getNextPageParam(t[r],t,n[r],n):void 0}function hC(e,{pages:t,pageParams:n}){var r;return t.length>0?(r=e.getPreviousPageParam)==null?void 0:r.call(e,t[0],t,n[0],n):void 0}var ue,gn,vn,Wr,Qr,yn,Gr,Kr,_p,pC=(_p=class{constructor(e={}){Y(this,ue);Y(this,gn);Y(this,vn);Y(this,Wr);Y(this,Qr);Y(this,yn);Y(this,Gr);Y(this,Kr);q(this,ue,e.queryCache||new lC),q(this,gn,e.mutationCache||new dC),q(this,vn,e.defaultOptions||{}),q(this,Wr,new Map),q(this,Qr,new Map),q(this,yn,0)}mount(){Ao(this,yn)._++,E(this,yn)===1&&(q(this,Gr,kv.subscribe(async e=>{e&&(await this.resumePausedMutations(),E(this,ue).onFocus())})),q(this,Kr,ta.subscribe(async e=>{e&&(await this.resumePausedMutations(),E(this,ue).onOnline())})))}unmount(){var e,t;Ao(this,yn)._--,E(this,yn)===0&&((e=E(this,Gr))==null||e.call(this),q(this,Gr,void 0),(t=E(this,Kr))==null||t.call(this),q(this,Kr,void 0))}isFetching(e){return E(this,ue).findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return E(this,gn).findAll({...e,status:"pending"}).length}getQueryData(e){var n;const t=this.defaultQueryOptions({queryKey:e});return(n=E(this,ue).get(t.queryHash))==null?void 0:n.state.data}ensureQueryData(e){const t=this.defaultQueryOptions(e),n=E(this,ue).build(this,t),r=n.state.data;return r===void 0?this.fetchQuery(e):(e.revalidateIfStale&&n.isStaleByTime(zc(t.staleTime,n))&&this.prefetchQuery(t),Promise.resolve(r))}getQueriesData(e){return E(this,ue).findAll(e).map(({queryKey:t,state:n})=>{const r=n.data;return[t,r]})}setQueryData(e,t,n){const r=this.defaultQueryOptions({queryKey:e}),i=E(this,ue).get(r.queryHash),o=i==null?void 0:i.state.data,a=H2(t,o);if(a!==void 0)return E(this,ue).build(this,r).setData(a,{...n,manual:!0})}setQueriesData(e,t,n){return _e.batch(()=>E(this,ue).findAll(e).map(({queryKey:r})=>[r,this.setQueryData(r,t,n)]))}getQueryState(e){var n;const t=this.defaultQueryOptions({queryKey:e});return(n=E(this,ue).get(t.queryHash))==null?void 0:n.state}removeQueries(e){const t=E(this,ue);_e.batch(()=>{t.findAll(e).forEach(n=>{t.remove(n)})})}resetQueries(e,t){const n=E(this,ue);return _e.batch(()=>(n.findAll(e).forEach(r=>{r.reset()}),this.refetchQueries({type:"active",...e},t)))}cancelQueries(e,t={}){const n={revert:!0,...t},r=_e.batch(()=>E(this,ue).findAll(e).map(i=>i.cancel(n)));return Promise.all(r).then(mt).catch(mt)}invalidateQueries(e,t={}){return _e.batch(()=>(E(this,ue).findAll(e).forEach(n=>{n.invalidate()}),(e==null?void 0:e.refetchType)==="none"?Promise.resolve():this.refetchQueries({...e,type:(e==null?void 0:e.refetchType)??(e==null?void 0:e.type)??"active"},t)))}refetchQueries(e,t={}){const n={...t,cancelRefetch:t.cancelRefetch??!0},r=_e.batch(()=>E(this,ue).findAll(e).filter(i=>!i.isDisabled()&&!i.isStatic()).map(i=>{let o=i.fetch(void 0,n);return n.throwOnError||(o=o.catch(mt)),i.state.fetchStatus==="paused"?Promise.resolve():o}));return Promise.all(r).then(mt)}fetchQuery(e){const t=this.defaultQueryOptions(e);t.retry===void 0&&(t.retry=!1);const n=E(this,ue).build(this,t);return n.isStaleByTime(zc(t.staleTime,n))?n.fetch(t):Promise.resolve(n.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(mt).catch(mt)}fetchInfiniteQuery(e){return e.behavior=sp(e.pages),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(mt).catch(mt)}ensureInfiniteQueryData(e){return e.behavior=sp(e.pages),this.ensureQueryData(e)}resumePausedMutations(){return ta.isOnline()?E(this,gn).resumePausedMutations():Promise.resolve()}getQueryCache(){return E(this,ue)}getMutationCache(){return E(this,gn)}getDefaultOptions(){return E(this,vn)}setDefaultOptions(e){q(this,vn,e)}setQueryDefaults(e,t){E(this,Wr).set(po(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){const t=[...E(this,Wr).values()],n={};return t.forEach(r=>{mo(e,r.queryKey)&&Object.assign(n,r.defaultOptions)}),n}setMutationDefaults(e,t){E(this,Qr).set(po(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){const t=[...E(this,Qr).values()],n={};return t.forEach(r=>{mo(e,r.mutationKey)&&Object.assign(n,r.defaultOptions)}),n}defaultQueryOptions(e){if(e._defaulted)return e;const t={...E(this,vn).queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return t.queryHash||(t.queryHash=sd(t.queryKey,t)),t.refetchOnReconnect===void 0&&(t.refetchOnReconnect=t.networkMode!=="always"),t.throwOnError===void 0&&(t.throwOnError=!!t.suspense),!t.networkMode&&t.persister&&(t.networkMode="offlineFirst"),t.queryFn===ad&&(t.enabled=!1),t}defaultMutationOptions(e){return e!=null&&e._defaulted?e:{...E(this,vn).mutations,...(e==null?void 0:e.mutationKey)&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){E(this,ue).clear(),E(this,gn).clear()}},ue=new WeakMap,gn=new WeakMap,vn=new WeakMap,Wr=new WeakMap,Qr=new WeakMap,yn=new WeakMap,Gr=new WeakMap,Kr=new WeakMap,_p),mC=m.createContext(void 0),fC=({client:e,children:t})=>(m.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]),s.jsx(mC.Provider,{value:e,children:t}));const lp="haiit-preferred-effect",gC=["none","christmas","tet","parallax"],vC=7,yC=e=>e!==null&&gC.includes(e),ve=e=>Math.floor(e),Tv=e=>{var n,r,i;const t=new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Ho_Chi_Minh",year:"numeric",month:"numeric",day:"numeric"}).formatToParts(e);return{year:Number(((n=t.find(o=>o.type==="year"))==null?void 0:n.value)??0),month:Number(((r=t.find(o=>o.type==="month"))==null?void 0:r.value)??0),day:Number(((i=t.find(o=>o.type==="day"))==null?void 0:i.value)??0)}},jv=(e,t,n)=>{const r=ve((14-t)/12),i=n+4800-r,o=t+12*r-3;return n>1582||n===1582&&(t>10||t===10&&e>=15)?e+ve((153*o+2)/5)+365*i+ve(i/4)-ve(i/100)+ve(i/400)-32045:e+ve((153*o+2)/5)+365*i+ve(i/4)-32083},oi=e=>{const t=e/1236.85,n=t*t,r=n*t,i=r*t,o=Math.PI/180;let a=241502075933e-5+29.53058868*e+1178e-7*n-155e-9*r;a+=33e-5*Math.sin((166.56+132.87*t-.009173*n)*o);const l=359.2242+29.10535608*e-333e-7*n-347e-8*r,c=306.0253+385.81691806*e+.0107306*n+1236e-8*r-58e-9*i,u=21.2964+390.67050646*e-.0016528*n-239e-8*r+2e-8*i,d=(.1734-393e-6*t)*Math.sin(l*o)+.0021*Math.sin(2*o*l)-.4068*Math.sin(c*o)+.0161*Math.sin(2*o*c)-4e-4*Math.sin(3*o*c)+.0104*Math.sin(2*o*u)-.0051*Math.sin((l+c)*o)-.0074*Math.sin((l-c)*o)+4e-4*Math.sin((2*u+l)*o)-4e-4*Math.sin((2*u-l)*o)-6e-4*Math.sin((2*u+c)*o)+.001*Math.sin((2*u-c)*o)+5e-4*Math.sin((2*c+l)*o);let h;return t<-11?h=.001+839e-6*t+2261e-7*n-845e-8*r-81e-9*i:h=-278e-6+265e-6*t+262e-6*n,a+d-h},qc=(e,t)=>{const n=(e-24515455e-1-t/24)/36525,r=n*n,i=Math.PI/180,o=357.5291+35999.0503*n-1559e-7*r-48e-8*r*n,a=280.46645+36000.76983*n+3032e-7*r,l=(1.9146-.004817*n-14e-6*r)*Math.sin(i*o)+(.019993-101e-6*n)*Math.sin(2*i*o)+29e-5*Math.sin(3*i*o),c=(a+l)*i;return ve((c-2*Math.PI*ve(c/(2*Math.PI)))/Math.PI*6)},yl=(e,t)=>{const n=jv(31,12,e)-2415021,r=ve(n/29.530588853);let i=oi(r);return qc(ve(i+.5+t/24),t)>=9&&(i=oi(r-1)),ve(i+.5+t/24)},xC=(e,t)=>{const n=ve(.5+(e-2415021076998695e-9)/29.530588853);let r=0,i=1,o=qc(ve(oi(n+i)+.5+t/24),t);do r=o,i+=1,o=qc(ve(oi(n+i)+.5+t/24),t);while(o!==r&&i<14);return i-1},wC=(e,t,n,r)=>{const i=jv(e,t,n),o=ve((i-2415021076998695e-9)/29.530588853);let a=ve(oi(o+1)+.5+r/24);a>i&&(a=ve(oi(o)+.5+r/24));let l=yl(n,r),c=l,u;l>=a?(u=n,l=yl(n-1,r)):(u=n+1,c=yl(n+1,r));const d=i-a+1,h=ve((a-l)/29);let p=0,y=h+11;if(c-l>365){const k=xC(l,r);h>=k&&(y=h+10,h===k&&(p=1))}return y>12&&(y-=12),y>=11&&h<4&&(u-=1),{day:d,month:y,year:u,leap:p}},bC=e=>{const{day:t,month:n,year:r}=Tv(e);return wC(t,n,r,vC)},kC=e=>{const t=Tv(e);if(t.month===12&&t.day>=24&&t.day<=26)return"christmas";if(t.day===t.month)return"parallax";const n=bC(e);return n.month===1&&n.day>=1&&n.day<=5||n.month===12&&n.day>=29&&n.day<=30?"tet":"none"},Ev=m.createContext(void 0),CC=({children:e})=>{const[t,n]=m.useState(()=>{const i=localStorage.getItem(lp);return yC(i)?i:kC(new Date)}),r=i=>{n(i),localStorage.setItem(lp,i)};return s.jsx(Ev.Provider,{value:{currentEffect:t,setCurrentEffect:r},children:e})},Av=()=>{const e=m.useContext(Ev);if(!e)throw new Error("useEffects must be used within an EffectsProvider");return e},SC=Wu("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),X=m.forwardRef(({className:e,variant:t,size:n,asChild:r=!1,...i},o)=>{const a=r?Hw:"button";return s.jsx(a,{className:ut(SC({variant:t,size:n,className:e})),ref:o,...i})});X.displayName="Button";const NC={"nav.home":{vi:"Trang chủ",en:"Index"},"nav.projects":{vi:"Dự án",en:"Work"},"nav.blog":{vi:"Bài viết",en:"Notes"},"nav.about":{vi:"Hồ sơ",en:"Profile"},"nav.connect":{vi:"Sẵn sàng kết nối",en:"Available to connect"},"nav.theme":{vi:"Giao diện",en:"Theme"},"nav.language":{vi:"Ngôn ngữ",en:"Language"},"hero.log":{vi:"Portfolio / Nhật ký học tập",en:"Portfolio / Learning log"},"hero.open":{vi:"Sẵn sàng cho cơ hội phù hợp",en:"Open to meaningful work"},"hero.hello":{vi:"Xin chào, tôi là",en:"Hello, I am"},"hero.line1":{vi:"Chế tác mã nguồn",en:"Crafting code"},"hero.line2":{vi:"& đúc kết những",en:"& distilling field"},"hero.line3":{vi:"trải nghiệm thực tế.",en:"experiences."},"hero.bio":{vi:"một Information Systems Developer tập trung vào backend, database và những sản phẩm có giá trị sử dụng thực tế.",en:"an Information Systems Developer focused on backend, databases, and products with practical value."},"hero.work":{vi:"Khám phá dự án",en:"Explore selected work"},"hero.notes":{vi:"Đọc bài viết",en:"Read my notes"},"hero.repositories":{vi:"kho mã nguồn",en:"repositories"},"hero.languages":{vi:"ngôn ngữ",en:"languages"},"hero.journal":{vi:"nhật ký công khai",en:"public journal"},"hero.portrait":{vi:"Chân dung",en:"Portrait"},"home.work.eyebrow":{vi:"01 / Dự án chọn lọc",en:"01 / Selected work"},"home.work.title1":{vi:"Dự án có lý do",en:"Projects with a reason"},"home.work.title2":{vi:"để tồn tại.",en:"to exist."},"home.work.desc":{vi:"Mỗi dự án là một bài thực hành có chủ đích: dữ liệu, thuật toán, kiến trúc hoặc trải nghiệm người dùng.",en:"Each project is a deliberate exercise in data, algorithms, architecture, or user experience."},"home.work.archive":{vi:"Xem kho dự án",en:"View project archive"},"home.work.case":{vi:"Nghiên cứu",en:"Case study"},"home.work.tools":{vi:"Công cụ & bối cảnh",en:"Tools & context"},"home.notes.eyebrow":{vi:"02 / Ghi chép thực tế",en:"02 / Field notes"},"home.notes.title1":{vi:"Học tập công khai.",en:"Learn in public."},"home.notes.title2":{vi:"Giữ lại điều hữu ích.",en:"Keep the useful parts."},"home.notes.all":{vi:"Mở tất cả bài viết",en:"Open all notes"},"home.notes.read":{vi:"Đọc bài",en:"Read note"},"home.map.eyebrow":{vi:"03 / Bản đồ kiến thức",en:"03 / Knowledge map"},"home.map.title1":{vi:"Những điều tôi đang",en:"What I am"},"home.map.title2":{vi:"khám phá.",en:"mapping out."},"home.map.desc":{vi:"Không chỉ là danh mục. Đây là bản đồ những vùng kiến thức tôi đang học, thử nghiệm và kết nối lại với nhau.",en:"More than categories: a map of the knowledge areas I am learning, testing, and connecting."},"home.principle":{vi:"Nguyên tắc cá nhân",en:"Personal principle"},"home.quote":{vi:"“Tôi không cố tỏ ra biết mọi thứ. Tôi xây, ghi chép và biến những điều đã hiểu thành thứ hữu ích cho người tiếp theo.”",en:"“I do not pretend to know everything. I build, document, and turn what I understand into something useful for the next person.”"},"footer.eyebrow":{vi:"Cuối trang / đầu cuộc trò chuyện",en:"End of page / start of conversation"},"footer.title":{vi:"Tôi xây sản phẩm để hiểu hệ thống, rồi viết lại để hiểu sâu hơn.",en:"I build products to understand systems, then write to understand them deeper."},"footer.navigate":{vi:"Điều hướng",en:"Navigate"},"footer.connect":{vi:"Kết nối",en:"Connect"},"footer.work":{vi:"Dự án chọn lọc",en:"Selected work"},"footer.notes":{vi:"Ghi chép học tập",en:"Learning notes"},"footer.profile":{vi:"Hồ sơ & CV",en:"Profile & CV"},"footer.designed":{vi:"Được thiết kế như một nhật ký hệ thống sống",en:"Designed as a living systems journal"},"blog.title":{vi:"Bài viết",en:"Blog"},"blog.desc":{vi:"Kiến thức lập trình, kinh nghiệm thực tế và những bài học từ hành trình phát triển phần mềm.",en:"Programming knowledge, practical experience, and lessons from my software development journey."},"blog.search":{vi:"Tìm kiếm bài viết...",en:"Search articles..."},"blog.all":{vi:"Tất cả",en:"All"},"blog.filterCategory":{vi:"Danh mục",en:"Categories"},"blog.filterTag":{vi:"Thẻ nội dung",en:"Content tags"},"blog.allTags":{vi:"Tất cả thẻ",en:"All tags"},"blog.selectedTags":{vi:"thẻ đã chọn",en:"selected"},"blog.clearFilters":{vi:"Xóa bộ lọc",en:"Clear filters"},"blog.readMore":{vi:"Đọc thêm →",en:"Read more →"},"blog.empty":{vi:"Không tìm thấy bài viết",en:"No articles found"},"blog.emptyDesc":{vi:"Thử thay đổi bộ lọc hoặc từ khóa tìm kiếm.",en:"Try changing the filter or search keyword."},"project.title":{vi:"Dự án",en:"Projects"},"project.desc":{vi:"Các dự án cá nhân từ GitHub của tôi, từ ý tưởng đến sản phẩm hoàn chỉnh.",en:"My personal GitHub projects, from early ideas to finished products."},"project.github":{vi:"Xem thêm trên GitHub",en:"View more on GitHub"},"project.featured":{vi:"Dự án nổi bật",en:"Featured projects"},"project.all":{vi:"Tất cả dự án",en:"All projects"},"project.source":{vi:"Mã nguồn",en:"Source code"},"project.demo":{vi:"Bản chạy thử",en:"Live demo"},"post.back":{vi:"Quay lại Blog",en:"Back to Blog"},"post.notFound":{vi:"Bài viết không tồn tại",en:"Article not found"},"post.notFoundDesc":{vi:"Bài viết bạn đang tìm không tồn tại hoặc đã bị xóa.",en:"The article you are looking for does not exist or has been removed."},"post.views":{vi:"lượt xem",en:"views"},"post.tags":{vi:"Thẻ",en:"Tags"},"post.share":{vi:"Chia sẻ",en:"Share"},"post.copy":{vi:"Sao chép liên kết",en:"Copy link"},"category.languages":{vi:"Ngôn ngữ lập trình",en:"Programming Languages"},"category.frameworks":{vi:"Framework & thư viện",en:"Frameworks & Libraries"},"category.architecture":{vi:"Kiến trúc phần mềm",en:"Software Architecture"},"category.patterns":{vi:"Mẫu thiết kế",en:"Design Patterns"},"category.practices":{vi:"Thực hành tốt",en:"Best Practices"},"category.roadmap":{vi:"Lộ trình học tập",en:"Learning Roadmaps"},"about.cv":{vi:"Xem CV của tôi",en:"View my CV"},"about.me":{vi:"Về tôi",en:"About me"},"about.experience":{vi:"Kinh nghiệm",en:"Experience"},"about.contact":{vi:"Liên hệ",en:"Contact"},"about.collab":{vi:"Muốn hợp tác?",en:"Interested in collaborating?"},"about.collabDesc":{vi:"Tôi luôn sẵn sàng thảo luận về các dự án thú vị.",en:"I am always open to discussing interesting projects."},"about.contactNow":{vi:"Liên hệ ngay",en:"Get in touch"},"about.download":{vi:"Tải PDF",en:"Download PDF"},"about.skills":{vi:"Kỹ năng kỹ thuật",en:"Technical skills"},"about.featured":{vi:"Dự án tiêu biểu (từ GitHub)",en:"Featured projects (from GitHub)"},"about.other":{vi:"Hoạt động khác",en:"Other activities"},"effect.title":{vi:"Hiệu ứng nền",en:"Background effects"}},Iv=m.createContext(void 0),PC=({children:e})=>{const[t,n]=m.useState(()=>{const i=localStorage.getItem("haiit-language");return i==="vi"||i==="en"?i:navigator.language.toLowerCase().startsWith("vi")?"vi":"en"});m.useEffect(()=>{localStorage.setItem("haiit-language",t),document.documentElement.lang=t},[t]);const r=i=>{var o;return((o=NC[i])==null?void 0:o[t])??i};return s.jsx(Iv.Provider,{value:{language:t,setLanguage:n,toggleLanguage:()=>n(t==="vi"?"en":"vi"),t:r,locale:t==="vi"?"vi-VN":"en-US"},children:e})},Re=()=>{const e=m.useContext(Iv);if(!e)throw new Error("useLanguage must be used within LanguageProvider");return e},xl=["none","parallax","tet","christmas"],TC=()=>{const{currentEffect:e,setCurrentEffect:t}=Av(),{language:n}=Re(),r=xl.indexOf(e),i=xl[(r+1)%xl.length],o=n==="vi"?{none:"Tắt",parallax:"3D",tet:"Tết",christmas:"Giáng sinh"}:{none:"Off",parallax:"3D",tet:"Lunar New Year",christmas:"Christmas"},l={none:Qu,parallax:Ub,tet:e1,christmas:f1}[e],c=`${o[e]} → ${o[i]}`;return s.jsxs(U2,{children:[s.jsx($2,{asChild:!0,children:s.jsx(X,{variant:"outline",size:"icon",className:`effect-cycle fixed bottom-4 right-4 z-[60] h-12 w-12 rounded-full shadow-xl backdrop-blur-xl ${e==="none"?"bg-background/85":"border-primary/50 bg-primary/15 text-primary"}`,"aria-label":c,onClick:()=>t(i),children:s.jsx(l,{className:"h-4 w-4"})})}),s.jsx(xv,{side:"left",className:"font-mono text-xs uppercase tracking-[.12em]",children:c})]})},jC=()=>{const e=m.useRef(null),t=m.useRef([]),n=m.useRef();return m.useEffect(()=>{const r=e.current;if(!r)return;const i=r.getContext("2d");if(!i)return;let o=window.innerWidth,a=window.innerHeight,l=performance.now()+5e3+Math.random()*5e3,c=0;const u=()=>{const y=Math.min(190,Math.floor(o/6));t.current=Array.from({length:y},(k,v)=>{const b=Math.random();return{x:Math.random()*o,y:Math.random()*a,depth:b,size:.7+b*2.5,speed:.3+b*1.1,opacity:.12+b*.36,swing:Math.random()*Math.PI*2,swingSpeed:Math.random()*.018+.006,blur:(1-b)*1.8,rotation:Math.random()*Math.PI,rotationSpeed:(Math.random()-.5)*.012,crystal:v%17===0}})},d=()=>{const y=Math.min(window.devicePixelRatio||1,2);o=window.innerWidth,a=window.innerHeight,r.width=o*y,r.height=a*y,r.style.width=`${o}px`,r.style.height=`${a}px`,i.setTransform(y,0,0,y,0,0),u()},h=y=>{i.save(),i.translate(y.x,y.y),i.rotate(y.rotation),i.strokeStyle=`rgba(235, 249, 255, ${y.opacity*.72})`,i.lineWidth=.45;for(let k=0;k<6;k+=1)i.rotate(Math.PI/3),i.beginPath(),i.moveTo(0,0),i.lineTo(0,-y.size*2.4),i.moveTo(0,-y.size*1.3),i.lineTo(y.size*.65,-y.size*1.8),i.moveTo(0,-y.size*1.3),i.lineTo(-y.size*.65,-y.size*1.8),i.stroke();i.restore()};d(),window.addEventListener("resize",d);const p=y=>{if(i.clearRect(0,0,o,a),y>l){const k=y-l;c=k<3500?Math.sin(k/3500*Math.PI)*3.2:0,k>=3500&&(l=y+9e3+Math.random()*9e3)}t.current.forEach(k=>{k.y+=k.speed+c*.08,k.swing+=k.swingSpeed,k.rotation+=k.rotationSpeed,k.x+=Math.sin(k.swing)*(.18+k.depth*.35)+c*(.25+k.depth*.75),k.y>a+12&&(k.y=-12,k.x=Math.random()*o),k.x>o+15&&(k.x=-15),i.shadowBlur=k.blur*5,i.shadowColor="rgba(180, 225, 255, .55)",k.crystal?h(k):(i.beginPath(),i.ellipse(k.x,k.y,k.size*(1+c*.08),k.size,0,0,Math.PI*2),i.fillStyle=`rgba(240, 250, 255, ${k.opacity})`,i.fill()),i.shadowBlur=0}),n.current=requestAnimationFrame(p)};return n.current=requestAnimationFrame(p),()=>{window.removeEventListener("resize",d),n.current&&cancelAnimationFrame(n.current)}},[]),s.jsx("canvas",{ref:e,className:"absolute inset-0 pointer-events-none z-30 opacity-[.72]"})},EC=Array.from({length:18},(e,t)=>{const n=t/17,r=Math.sin(n*Math.PI)*2.5;return{x:`${4+n*92}%`,y:`${8+r}px`,delay:`${t*-.16}s`,hue:35+t*18}}),AC=Array.from({length:42}),IC=Array.from({length:9}),MC=Array.from({length:5}),RC=Array.from({length:18}),LC=Array.from({length:6}),cp=Array.from({length:14}),up=({side:e})=>s.jsxs("div",{className:`christmas-sprig christmas-sprig-${e}`,children:[s.jsx("span",{className:"sprig-stem"}),IC.map((t,n)=>s.jsx("i",{style:{"--i":n}},n)),MC.map((t,n)=>s.jsx("b",{style:{"--i":n}},n))]}),DC=()=>s.jsxs("div",{className:"effect-scene effect-scene-christmas fixed inset-0 z-0 overflow-hidden",children:[s.jsx("div",{className:"christmas-frost"}),s.jsx("div",{className:"christmas-bokeh",children:RC.map((e,t)=>s.jsx("i",{style:{"--i":t}},t))}),s.jsx("div",{className:"nordic-stars",children:AC.map((e,t)=>s.jsx("i",{style:{"--i":t}},t))}),s.jsx("div",{className:"nordic-aurora nordic-aurora-a"}),s.jsx("div",{className:"nordic-aurora nordic-aurora-b"}),s.jsx("div",{className:"nordic-aurora nordic-aurora-c"}),s.jsx("div",{className:"christmas-snowflake-halo"}),s.jsx("div",{className:"christmas-hero-snowflake",children:LC.map((e,t)=>s.jsxs("i",{style:{"--i":t},children:[s.jsx("span",{}),s.jsx("b",{})]},t))}),s.jsx("div",{className:"christmas-wind christmas-wind-a",children:cp.map((e,t)=>s.jsx("i",{style:{"--i":t}},t))}),s.jsx("div",{className:"christmas-wind christmas-wind-b",children:cp.slice(0,9).map((e,t)=>s.jsx("i",{style:{"--i":t}},t))}),s.jsxs("div",{className:"christmas-top-garland",children:[s.jsx(up,{side:"left"}),s.jsx(up,{side:"right"}),s.jsx("div",{className:"garland-bauble garland-bauble-a",children:s.jsx("i",{})}),s.jsx("div",{className:"garland-bauble garland-bauble-b",children:s.jsx("i",{})}),s.jsx("div",{className:"garland-bauble garland-bauble-c",children:s.jsx("i",{})})]}),s.jsxs("div",{className:"christmas-wreath",children:[s.jsx("div",{className:"wreath-bow"}),s.jsx("i",{}),s.jsx("i",{}),s.jsx("i",{}),s.jsx("i",{}),s.jsx("i",{})]}),s.jsxs("div",{className:"christmas-corner-gift",children:[s.jsx("i",{}),s.jsx("span",{})]}),s.jsx("div",{className:"christmas-candy-cane"}),s.jsx("div",{className:"nordic-pines nordic-pines-back",children:Array.from({length:9},(e,t)=>s.jsx("i",{style:{"--i":t}},t))}),s.jsx("div",{className:"nordic-pines nordic-pines-front",children:Array.from({length:7},(e,t)=>s.jsx("i",{style:{"--i":t}},t))}),s.jsx("div",{className:"christmas-light-drift",children:EC.map(e=>s.jsx("i",{style:{left:e.x,top:e.y,"--bulb":`hsl(${e.hue} 88% 64%)`,animationDelay:e.delay}},e.x))}),s.jsx("div",{className:"winter-ground"}),s.jsx(jC,{}),s.jsx("div",{className:"effect-label left-5 top-24",children:"CHRISTMAS EVE / WINTER GLOW"})]}),OC=()=>{const e=m.useRef(null);return m.useEffect(()=>{const t=e.current,n=t==null?void 0:t.getContext("2d");if(!t||!n)return;let r=0,i=0,o=[],a=[];const l=()=>{t.width=window.innerWidth*devicePixelRatio,t.height=window.innerHeight*devicePixelRatio,t.style.width=`${window.innerWidth}px`,t.style.height=`${window.innerHeight}px`,n.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0),o=Array.from({length:Math.min(52,Math.floor(window.innerWidth/24))},(d,h)=>({x:h%2?Math.random()*window.innerWidth*.22:window.innerWidth*(.78+Math.random()*.22),y:Math.random()*window.innerHeight,size:Math.random()*5+2,speed:Math.random()*.6+.25,sway:Math.random()*8,rotation:Math.random()*Math.PI,rotationSpeed:(Math.random()-.5)*.025,opacity:Math.random()*.5+.3}))},c=()=>{const d=Math.random()>.5?window.innerWidth*.12:window.innerWidth*.88,h=window.innerHeight*(.1+Math.random()*.16),p=Math.random()>.5?"#ffd36a":"#ff7b69";a.push(...Array.from({length:28},(y,k)=>({x:d,y:h,angle:k/28*Math.PI*2,radius:0,speed:Math.random()*1.3+.7,alpha:.75,color:p})))},u=()=>{n.clearRect(0,0,window.innerWidth,window.innerHeight),i+=1,i%210===0&&c(),a=a.filter(d=>d.alpha>.01),a.forEach(d=>{d.radius+=d.speed,d.alpha*=.985;const h=d.x+Math.cos(d.angle)*d.radius,p=d.y+Math.sin(d.angle)*d.radius+d.radius*.08;n.beginPath(),n.arc(h,p,1.2,0,Math.PI*2),n.fillStyle=d.color,n.globalAlpha=d.alpha,n.fill()}),o.forEach(d=>{d.y+=d.speed,d.x+=Math.sin(d.y*.012+d.sway)*.38,d.rotation+=d.rotationSpeed,d.y>window.innerHeight+20&&(d.y=-20,d.x=Math.random()>.5?Math.random()*window.innerWidth*.22:window.innerWidth*(.78+Math.random()*.22)),n.save(),n.translate(d.x,d.y),n.rotate(d.rotation),n.globalAlpha=d.opacity;const h=n.createLinearGradient(0,-d.size,0,d.size);h.addColorStop(0,"#fff0a8"),h.addColorStop(.45,"#ffbf5a"),h.addColorStop(1,"#e85a55"),n.fillStyle=h,n.beginPath(),n.ellipse(0,0,d.size*.5,d.size,0,0,Math.PI*2),n.fill(),n.restore()}),n.globalAlpha=1,r=requestAnimationFrame(u)};return l(),c(),u(),window.addEventListener("resize",l),()=>{cancelAnimationFrame(r),window.removeEventListener("resize",l)}},[]),s.jsxs("div",{className:"effect-scene effect-scene-tet fixed inset-0 z-0 overflow-hidden",children:[s.jsx("div",{className:"tet-vietnam-frame"}),s.jsxs("div",{className:"tet-corner tet-corner-dao",children:[s.jsx("div",{className:"tet-border-branch",children:Array.from({length:13},(t,n)=>s.jsx("i",{style:{"--i":n}},n))}),s.jsxs("div",{className:"tet-viet-lantern",children:[s.jsx("span",{children:"An"}),s.jsx("i",{})]})]}),s.jsxs("div",{className:"tet-corner tet-corner-mai",children:[s.jsx("div",{className:"tet-border-branch",children:Array.from({length:13},(t,n)=>s.jsx("i",{style:{"--i":n}},n))}),s.jsxs("div",{className:"tet-viet-lantern",children:[s.jsx("span",{children:"Vui"}),s.jsx("i",{})]})]}),s.jsxs("div",{className:"tet-side-couplet tet-side-couplet-left",children:[s.jsx("i",{}),s.jsxs("span",{children:[s.jsx("em",{children:"Xuân"}),s.jsx("em",{children:"sang"}),s.jsx("em",{children:"phúc"}),s.jsx("em",{children:"lộc"}),s.jsx("em",{children:"tràn"}),s.jsx("em",{children:"muôn"}),s.jsx("em",{children:"ngả"})]}),s.jsx("b",{}),s.jsx("strong",{children:"An"})]}),s.jsxs("div",{className:"tet-side-couplet tet-side-couplet-right",children:[s.jsx("i",{}),s.jsxs("span",{children:[s.jsx("em",{children:"Tết"}),s.jsx("em",{children:"đến"}),s.jsx("em",{children:"an"}),s.jsx("em",{children:"khang"}),s.jsx("em",{children:"rạng"}),s.jsx("em",{children:"khắp"}),s.jsx("em",{children:"nhà"})]}),s.jsx("b",{}),s.jsx("strong",{children:"Xuân"})]}),s.jsxs("div",{className:"tet-bottom tet-bottom-left",children:[s.jsxs("div",{className:"tet-banh-chung",children:[s.jsx("i",{}),s.jsx("span",{}),s.jsx("b",{})]}),s.jsxs("div",{className:"tet-banh-tet",children:[s.jsx("i",{}),s.jsx("span",{}),s.jsx("b",{})]}),s.jsx("div",{className:"tet-watermelon",children:s.jsx("i",{})}),s.jsxs("div",{className:"tet-envelope",children:[s.jsx("i",{}),s.jsx("span",{children:"Lộc"}),s.jsx("b",{})]})]}),s.jsxs("div",{className:"tet-bottom tet-bottom-right",children:[s.jsx("div",{className:"tet-quat",children:Array.from({length:11},(t,n)=>s.jsx("i",{style:{"--i":n}},n))}),s.jsxs("div",{className:"tet-dongson",children:[s.jsx("i",{}),s.jsx("span",{}),s.jsx("b",{})]})]}),s.jsx("div",{className:"tet-top-knot tet-top-knot-a",children:s.jsx("i",{})}),s.jsx("div",{className:"tet-top-knot tet-top-knot-b",children:s.jsx("i",{})}),s.jsx("canvas",{ref:e,className:"absolute inset-0"}),s.jsx("div",{className:"effect-label left-5 top-24",children:"TẾT VIỆT / BÌNH AN"})]})},Xo=[{base:556958,side:473183,top:6478056,accent:12124016,edge:14154751},{base:5982901,side:2169688,top:10849023,accent:7533823,edge:15196671},{base:11758372,side:5514511,top:15775819,accent:7467007,edge:16770989},{base:6004018,side:2181927,top:11069534,accent:14286722,edge:15597513}],wl=(e,t)=>{const n=new Ey(e*.48,e*.48),r=new Qc({color:t,transparent:!0,opacity:.28,depthWrite:!1,side:Ay}),i=new qi(n,r),o=new Bi(new ws(n),new bs({color:t,transparent:!0,opacity:.5}));return i.add(o),i},bl=(e,t,n=!1)=>{const r=new Fp,i=new gd(e,e,e),a=[t.side,t.side,t.top,t.side,t.base,t.side].map((h,p)=>new Py({color:h,metalness:.62,roughness:p===2?.14:.23,clearcoat:1,clearcoatRoughness:.12,emissive:new Ty(p===2?t.accent:h).multiplyScalar(p===2?.14:.07),transparent:!0,opacity:.38,depthWrite:!1})),l=new qi(i,a),c=new Bi(new ws(i),new bs({color:t.edge,transparent:!0,opacity:.58})),u=new Bi(new ws(new gd(e*1.13,e*1.13,e*1.13)),new bs({color:t.accent,transparent:!0,opacity:n?.3:.16})),d=new qi(new jy(e*(n?.24:.19),0),new Qc({color:t.accent,transparent:!0,opacity:.48,depthWrite:!1}));if(d.name="cube-energy",u.name="cube-frame",r.add(l,c,u,d),n){const h=wl(e,t.accent);h.position.z=e*.505;const p=wl(e*.88,t.edge);p.position.y=e*.505,p.rotation.x=-Math.PI/2;const y=wl(e*.78,t.top);y.position.x=e*.505,y.rotation.y=Math.PI/2,r.add(h,p,y)}return r},_C=()=>{const e=m.useRef(null);return m.useEffect(()=>{const t=e.current;if(!t)return;const n=new py,r=new my(42,1,.1,100);r.position.set(0,1.2,13);const i=new fy({alpha:!0,antialias:!0,powerPreference:"high-performance"});i.setPixelRatio(Math.min(window.devicePixelRatio,2)),i.setClearColor(0,0),i.outputColorSpace=gy,i.toneMapping=vy,i.toneMappingExposure=1.15,t.appendChild(i.domElement),n.add(new yy(10412031,.72));const o=new xy(12449791,4.2);o.position.set(4,6,8),n.add(o);const a=new md(12124016,32,20);a.position.set(-5,2,4),n.add(a);const l=new md(3723263,26,18);l.position.set(5,-3,2),n.add(l);const c=bl(2.25,Xo[0],!0);c.rotation.set(-.35,.65,.08),n.add(c);const u=bl(.72,Xo[3]);u.scale.setScalar(.82),c.add(u);const d=Array.from({length:11},(S,j)=>{const A=j%3,O=new Fp;O.rotation.set([.35,1.05,-.62][A],[-.22,.28,-.48][A],j*.71),n.add(O);const R=bl([.38,.5,.32,.44][j%4],Xo[j%Xo.length]);return R.position.x=[3.5,4.35,5.15][A]+j%4*.08,R.rotation.set(j*.41,j*.63,j*.28),O.add(R),{pivot:O,cube:R,speed:[.34,-.24,.18][A],phase:j*.9}}),h=[{radius:3.35,tube:.012,color:6809849,rotation:[1.2,.12,.1]},{radius:4.5,tube:.009,color:10741301,rotation:[.82,.7,-.3]},{radius:5.55,tube:.007,color:5101567,rotation:[1.42,-.42,.5]}].map(({radius:S,tube:j,color:A,rotation:O})=>{const R=new qi(new wy(S,j,8,160),new Qc({color:A,transparent:!0,opacity:.26}));return R.rotation.set(O[0],O[1],O[2]),n.add(R),R}),p=new by(6.2,1),y=new Bi(new ws(p),new bs({color:5756904,transparent:!0,opacity:.055}));n.add(y);const k=190,v=new Float32Array(k*3);for(let S=0;S<k;S+=1){const j=7+Math.random()*11,A=Math.random()*Math.PI*2,O=Math.acos(2*Math.random()-1);v[S*3]=j*Math.sin(O)*Math.cos(A),v[S*3+1]=j*Math.cos(O),v[S*3+2]=j*Math.sin(O)*Math.sin(A)}const b=new ky;b.setAttribute("position",new Cy(v,3));const g=new fd(b,new Sy({color:12055551,size:.035,transparent:!0,opacity:.62}));n.add(g);const f=new Iy;let x=0;const w=new Ny,C=()=>{const{clientWidth:S,clientHeight:j}=t;i.setSize(S,j,!1),r.aspect=S/Math.max(j,1),r.updateProjectionMatrix()},N=S=>{f.x=S.clientX/window.innerWidth-.5,f.y=S.clientY/window.innerHeight-.5},P=()=>{const S=w.getElapsedTime();c.rotation.y=.65+S*.16,c.rotation.x=-.35+Math.sin(S*.45)*.1,c.getObjectByName("cube-frame").rotation.set(S*.18,-S*.24,S*.12),c.getObjectByName("cube-energy").rotation.set(S*.7,S*-.9,S*.45),u.rotation.x=S*-.8,u.rotation.y=S*.65,d.forEach(({pivot:j,cube:A,speed:O,phase:R})=>{j.rotation.z+=O*.008,A.rotation.x+=.006,A.rotation.y+=.009,A.position.y=Math.sin(S*.8+R)*.18,A.scale.setScalar(.88+Math.sin(S*.65+R)*.12),A.getObjectByName("cube-frame").rotation.y=S*-.5+R,A.getObjectByName("cube-energy").rotation.x=S*1.1+R}),h.forEach((j,A)=>{j.rotation.z+=(A%2?-1:1)*8e-4}),y.rotation.y=S*-.025,g.rotation.y=S*.006,r.position.x+=(f.x*1.2-r.position.x)*.025,r.position.y+=(-f.y*.8+1.2-r.position.y)*.025,r.lookAt(0,0,0),i.render(n,r),x=requestAnimationFrame(P)};return C(),P(),window.addEventListener("resize",C),window.addEventListener("pointermove",N,{passive:!0}),()=>{cancelAnimationFrame(x),window.removeEventListener("resize",C),window.removeEventListener("pointermove",N),n.traverse(S=>{(S instanceof qi||S instanceof Bi||S instanceof fd)&&(S.geometry.dispose(),(Array.isArray(S.material)?S.material:[S.material]).forEach(A=>A.dispose()))}),i.dispose(),t.removeChild(i.domElement)}},[]),s.jsx("div",{ref:e,className:"cyber-webgl absolute inset-0"})},FC=()=>{const e=m.useRef(null),t=m.useRef(null);return m.useEffect(()=>{const n=e.current,r=t.current,i=r==null?void 0:r.getContext("2d");if(!n||!r||!i)return;let o=0,a=[],l=[],c=window.innerWidth,u=window.innerHeight,d=0;const h=window.matchMedia("(prefers-reduced-motion: reduce)").matches,p={x:c/2,y:u/2,targetX:c/2,targetY:u/2,active:!1},y=()=>{const w=p.x/c-.5,C=p.y/u-.5;n.style.setProperty("--mx",`${w}`),n.style.setProperty("--my",`${C}`),n.style.setProperty("--back-shift",`${w*-14}px`),n.style.setProperty("--floor-shift",`${w*24}px`),n.style.setProperty("--hud-shift",`${C*22}px`),n.style.setProperty("--core-rx",`${-18+C*-18}deg`),n.style.setProperty("--core-ry",`${35+w*28}deg`),n.style.setProperty("--scene-x",`${w*20}px`),n.style.setProperty("--scene-y",`${C*14}px`),n.style.setProperty("--scene-rx",`${C*-5}deg`),n.style.setProperty("--scene-ry",`${w*7}deg`),n.style.setProperty("--far-x",`${w*34}px`),n.style.setProperty("--far-y",`${C*20}px`),n.style.setProperty("--near-x",`${w*-42}px`),n.style.setProperty("--near-y",`${C*-28}px`),n.style.setProperty("--panel-x",`${w*28}px`),n.style.setProperty("--panel-y",`${C*18}px`),n.style.setProperty("--panel-inverse-x",`${w*-32}px`),n.style.setProperty("--panel-inverse-y",`${C*-20}px`),n.style.setProperty("--px",`${p.x}px`),n.style.setProperty("--py",`${p.y}px`)},k=()=>{const w=Math.min(92,Math.max(42,Math.floor(c/18)));a=Array.from({length:w},()=>({x:Math.random()*c,y:Math.random()*u,vx:(Math.random()-.5)*.12,vy:(Math.random()-.5)*.12,size:Math.random()*1.35+.45,depth:Math.random()*.75+.25,phase:Math.random()*Math.PI*2}))},v=()=>{c=window.innerWidth,u=window.innerHeight;const w=Math.min(window.devicePixelRatio||1,2);r.width=c*w,r.height=u*w,r.style.width=`${c}px`,r.style.height=`${u}px`,i.setTransform(w,0,0,w,0,0),p.x=p.targetX=c/2,p.y=p.targetY=u/2,k(),y()},b=w=>{p.targetX=w.clientX,p.targetY=w.clientY,p.active=!0},g=()=>{p.targetX=c/2,p.targetY=u/2,p.active=!1},f=w=>{l.push({x:w.clientX,y:w.clientY,radius:12,alpha:.38}),l.length>4&&l.shift()},x=()=>{d+=1,p.x+=(p.targetX-p.x)*(h?1:.075),p.y+=(p.targetY-p.y)*(h?1:.075),y(),i.clearRect(0,0,c,u),i.lineWidth=.7,l=l.filter(w=>w.alpha>.012),l.forEach(w=>{w.radius+=1.8,w.alpha*=.975,i.beginPath(),i.arc(w.x,w.y,w.radius,0,Math.PI*2),i.strokeStyle=`rgba(145, 238, 255, ${w.alpha})`,i.stroke()}),a.forEach((w,C)=>{const N=w.x-p.x,P=w.y-p.y,S=Math.max(1,Math.hypot(N,P));if(p.active&&S<175){const A=(1-S/175)*.018*w.depth;w.vx+=N/S*A,w.vy+=P/S*A}w.vx*=.992,w.vy*=.992,h||(w.x+=w.vx+Math.sin(d*.006+w.phase)*.035*w.depth,w.y+=w.vy+Math.cos(d*.005+w.phase)*.025*w.depth),w.x<-10&&(w.x=c+10),w.x>c+10&&(w.x=-10),w.y<-10&&(w.y=u+10),w.y>u+10&&(w.y=-10);const j=.2+w.depth*.32;i.beginPath(),i.arc(w.x,w.y,w.size*w.depth,0,Math.PI*2),i.fillStyle=`rgba(135, 228, 242, ${j})`,i.fill();for(let A=C+1;A<a.length;A+=1){const O=a[A],R=Math.hypot(w.x-O.x,w.y-O.y);R<112&&(i.beginPath(),i.moveTo(w.x,w.y),i.lineTo(O.x,O.y),i.strokeStyle=`rgba(115, 220, 238, ${.07*(1-R/112)*w.depth})`,i.stroke())}S<220&&(i.beginPath(),i.moveTo(w.x,w.y),i.lineTo(p.x,p.y),i.strokeStyle=`rgba(185, 236, 150, ${.16*(1-S/220)*w.depth})`,i.stroke())}),i.beginPath(),i.arc(p.x,p.y,30,0,Math.PI*2),i.strokeStyle="rgba(150, 235, 245, .1)",i.stroke(),o=requestAnimationFrame(x)};return v(),x(),window.addEventListener("resize",v),window.addEventListener("pointermove",b,{passive:!0}),window.addEventListener("pointerleave",g),window.addEventListener("pointerdown",f,{passive:!0}),()=>{cancelAnimationFrame(o),window.removeEventListener("resize",v),window.removeEventListener("pointermove",b),window.removeEventListener("pointerleave",g),window.removeEventListener("pointerdown",f)}},[]),s.jsxs("div",{ref:e,className:"effect-scene effect-scene-3d fixed inset-0 z-0 overflow-hidden",children:[s.jsx("canvas",{ref:t,className:"cyber-network absolute inset-0"}),s.jsx("div",{className:"cyber-atmosphere cyber-atmosphere-a"}),s.jsx("div",{className:"cyber-atmosphere cyber-atmosphere-b"}),s.jsx("div",{className:"cyber-aurora cyber-aurora-a"}),s.jsx("div",{className:"cyber-aurora cyber-aurora-b"}),s.jsx("div",{className:"cyber-depth-lines"}),s.jsxs("div",{className:"cyber-signal-field",children:[s.jsx("i",{}),s.jsx("i",{}),s.jsx("i",{}),s.jsx("i",{}),s.jsx("i",{}),s.jsx("i",{}),s.jsx("i",{}),s.jsx("i",{})]}),s.jsx("div",{className:"cyber-spotlight"}),s.jsx("div",{className:"cyber-grid cyber-grid-back"}),s.jsx("div",{className:"cyber-grid cyber-grid-floor"}),s.jsx(_C,{}),s.jsxs("div",{className:"cyber-observatory",children:[s.jsxs("div",{className:"cyber-axis",children:[s.jsx("i",{}),s.jsx("i",{}),s.jsx("i",{})]}),s.jsxs("div",{className:"cyber-beacons",children:[s.jsx("i",{}),s.jsx("i",{}),s.jsx("i",{}),s.jsx("i",{}),s.jsx("i",{}),s.jsx("i",{})]}),s.jsxs("div",{className:"cyber-core-plinth",children:[s.jsx("i",{}),s.jsx("i",{}),s.jsx("i",{})]})]}),s.jsxs("div",{className:"cyber-glass cyber-glass-a",children:[s.jsx("span",{children:"VECTOR"}),s.jsx("b",{children:"12.08"}),s.jsx("i",{})]}),s.jsxs("div",{className:"cyber-glass cyber-glass-b",children:[s.jsx("span",{children:"ORBIT"}),s.jsx("b",{children:"STABLE"}),s.jsx("i",{})]}),s.jsxs("div",{className:"cyber-hud cyber-hud-left",children:[s.jsx("span",{children:"SYS / DEPTH"}),s.jsx("b",{children:"03.24"}),s.jsx("i",{})]}),s.jsxs("div",{className:"cyber-hud cyber-hud-right",children:[s.jsx("span",{children:"FIELD / LIVE"}),s.jsx("b",{children:"97.4%"}),s.jsx("i",{})]}),s.jsx("div",{className:"cyber-cursor-halo"}),s.jsx("div",{className:"cyber-vignette"}),s.jsx("div",{className:"cyber-scanlines"}),s.jsx("div",{className:"effect-label left-5 top-24",children:"CYBER OBSERVATORY / INTERACTIVE"})]})},zC=()=>{const{currentEffect:e}=Av();switch(e){case"christmas":return s.jsx(DC,{});case"tet":return s.jsx(OC,{});case"parallax":return s.jsx(FC,{});default:return null}};var na=["light","dark"],ld="(prefers-color-scheme: dark)",VC=typeof window>"u",cd=m.createContext(void 0),qC={setTheme:e=>{},themes:[]},Mv=()=>{var e;return(e=m.useContext(cd))!=null?e:qC},BC=e=>m.useContext(cd)?e.children:m.createElement($C,{...e}),UC=["light","dark"],$C=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:n=!0,enableColorScheme:r=!0,storageKey:i="theme",themes:o=UC,defaultTheme:a=n?"system":"light",attribute:l="data-theme",value:c,children:u,nonce:d})=>{let[h,p]=m.useState(()=>dp(i,a)),[y,k]=m.useState(()=>dp(i)),v=c?Object.values(c):o,b=m.useCallback(w=>{let C=w;if(!C)return;w==="system"&&n&&(C=hp());let N=c?c[C]:C,P=t?WC():null,S=document.documentElement;if(l==="class"?(S.classList.remove(...v),N&&S.classList.add(N)):N?S.setAttribute(l,N):S.removeAttribute(l),r){let j=na.includes(a)?a:null,A=na.includes(C)?C:j;S.style.colorScheme=A}P==null||P()},[]),g=m.useCallback(w=>{let C=typeof w=="function"?w(w):w;p(C);try{localStorage.setItem(i,C)}catch{}},[e]),f=m.useCallback(w=>{let C=hp(w);k(C),h==="system"&&n&&!e&&b("system")},[h,e]);m.useEffect(()=>{let w=window.matchMedia(ld);return w.addListener(f),f(w),()=>w.removeListener(f)},[f]),m.useEffect(()=>{let w=C=>{if(C.key!==i)return;let N=C.newValue||a;g(N)};return window.addEventListener("storage",w),()=>window.removeEventListener("storage",w)},[g]),m.useEffect(()=>{b(e??h)},[e,h]);let x=m.useMemo(()=>({theme:h,setTheme:g,forcedTheme:e,resolvedTheme:h==="system"?y:h,themes:n?[...o,"system"]:o,systemTheme:n?y:void 0}),[h,g,e,y,n,o]);return m.createElement(cd.Provider,{value:x},m.createElement(HC,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:n,enableColorScheme:r,storageKey:i,themes:o,defaultTheme:a,attribute:l,value:c,children:u,attrs:v,nonce:d}),u)},HC=m.memo(({forcedTheme:e,storageKey:t,attribute:n,enableSystem:r,enableColorScheme:i,defaultTheme:o,value:a,attrs:l,nonce:c})=>{let u=o==="system",d=n==="class"?`var d=document.documentElement,c=d.classList;${`c.remove(${l.map(k=>`'${k}'`).join(",")})`};`:`var d=document.documentElement,n='${n}',s='setAttribute';`,h=i?na.includes(o)&&o?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${o}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",p=(k,v=!1,b=!0)=>{let g=a?a[k]:k,f=v?k+"|| ''":`'${g}'`,x="";return i&&b&&!v&&na.includes(k)&&(x+=`d.style.colorScheme = '${k}';`),n==="class"?v||g?x+=`c.add(${f})`:x+="null":g&&(x+=`d[s](n,${f})`),x},y=e?`!function(){${d}${p(e)}}()`:r?`!function(){try{${d}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${ld}',m=window.matchMedia(t);if(m.media!==t||m.matches){${p("dark")}}else{${p("light")}}}else if(e){${a?`var x=${JSON.stringify(a)};`:""}${p(a?"x[e]":"e",!0)}}${u?"":"else{"+p(o,!1,!1)+"}"}${h}}catch(e){}}()`:`!function(){try{${d}var e=localStorage.getItem('${t}');if(e){${a?`var x=${JSON.stringify(a)};`:""}${p(a?"x[e]":"e",!0)}}else{${p(o,!1,!1)};}${h}}catch(t){}}();`;return m.createElement("script",{nonce:c,dangerouslySetInnerHTML:{__html:y}})}),dp=(e,t)=>{if(VC)return;let n;try{n=localStorage.getItem(e)||void 0}catch{}return n||t},WC=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},hp=e=>(e||(e=window.matchMedia(ld)),e.matches?"dark":"light");const QC=()=>{const{resolvedTheme:e}=Mv();return m.useEffect(()=>{const t=document.querySelector('meta[name="theme-color"]');t==null||t.setAttribute("content",e==="dark"?"#090c11":"#f7f4eb")},[e]),null},Ia=[{id:"languages",name:"Programming Languages",description:"Deep dives into various programming languages, syntax, paradigms, and best use cases",icon:"Code2",color:"category-languages"},{id:"frameworks",name:"Frameworks & Libraries",description:"Comprehensive guides on modern frameworks and libraries for web, mobile, and backend development",icon:"Layers",color:"category-frameworks"},{id:"architecture",name:"Software Architecture",description:"System design principles, architectural patterns, and scalability strategies",icon:"Building2",color:"category-architecture"},{id:"patterns",name:"Design Patterns",description:"Classic and modern design patterns with practical implementations",icon:"Shapes",color:"category-patterns"},{id:"practices",name:"Best Practices",description:"Coding standards, clean code principles, and industry best practices",icon:"CheckCircle",color:"category-practices"},{id:"roadmap",name:"Learning Roadmaps",description:"Structured learning paths for different programming domains and skill levels",icon:"Map",color:"category-roadmap"}],Bc=[{id:"capital-weather-tracker",title:"Capital Weather Tracker",description:"Hệ thống xử lý dữ liệu thời tiết thời gian thực cho các thủ đô trên thế giới.",longDescription:"Ứng dụng thu thập và hiển thị dữ liệu thời tiết real-time từ OpenWeatherMap API, xử lý và visualize dữ liệu cho tất cả các thủ đô trên thế giới với cập nhật liên tục.",technologies:["Python","OpenWeatherMap API","Data Processing"],github:"https://github.com/haihttt974/capital-weather-tracker",image:"/placeholder.svg",featured:!0},{id:"sorting-visualizer",title:"Sorting Visualizer",description:"Ứng dụng trực quan hóa các thuật toán sắp xếp với animation mượt mà.",longDescription:"Công cụ giáo dục giúp hiểu rõ cách hoạt động của các thuật toán sắp xếp như Bubble Sort, Quick Sort, Merge Sort thông qua visualization trực quan.",technologies:["TypeScript","Algorithms","Visualization"],github:"https://github.com/haihttt974/sorting-visualizer",image:"/placeholder.svg",featured:!0},{id:"bookstore-aspnet",title:"BookStore ASP.NET",description:"Website quản lý hiệu sách hoàn chỉnh với ASP.NET Core.",longDescription:"Hệ thống quản lý hiệu sách full-stack với chức năng CRUD, quản lý kho, đơn hàng và báo cáo doanh thu. Xây dựng trên ASP.NET Core và SQL Server.",technologies:["C#","ASP.NET Core","SQL Server","Entity Framework"],github:"https://github.com/haihttt974/thltweb-BookStore-asp.net",image:"/placeholder.svg",featured:!0},{id:"gplx-mobile-app",title:"Ôn thi GPLX Mobile",description:"Ứng dụng di động ôn thi giấy phép lái xe với Flutter.",longDescription:"Ứng dụng mobile cross-platform giúp người dùng ôn luyện lý thuyết thi bằng lái xe với bộ câu hỏi đầy đủ, thi thử và theo dõi tiến độ học tập.",technologies:["Dart","Flutter","Mobile Development"],github:"https://github.com/haihttt974/ltmobile_gplx",image:"/placeholder.svg"},{id:"temperature-influxdb",title:"Temperature VN InfluxDB",description:"Hệ thống thu thập và lưu trữ dữ liệu nhiệt độ vào InfluxDB.",longDescription:"Pipeline dữ liệu IoT thu thập nhiệt độ từ các nguồn khác nhau tại Việt Nam, lưu trữ vào InfluxDB cho phân tích time-series và visualization.",technologies:["Python","InfluxDB","IoT","Time Series"],github:"https://github.com/haihttt974/send-temperature-vn-influxdb",image:"/placeholder.svg"},{id:"christmas-tree",title:"Christmas Tree Effect",description:"Hiệu ứng cây thông Noel tương tác với HTML/CSS/JS.",longDescription:"Trang web hiệu ứng Giáng Sinh với cây thông 3D tương tác, tuyết rơi và ánh sáng lung linh. Hoàn toàn viết bằng vanilla HTML, CSS và JavaScript.",technologies:["HTML5","CSS3","JavaScript","Animation"],github:"https://github.com/haihttt974/christmas_tree.github.io",demo:"https://haihttt974.github.io/christmas_tree.github.io/",image:"/placeholder.svg"},{id:"countdown-newyear",title:"Countdown New Year",description:"Đồng hồ đếm ngược năm mới với hiệu ứng đẹp mắt.",longDescription:"Trang countdown đón năm mới với thiết kế hiện đại, hiệu ứng confetti và animation mượt mà khi đồng hồ điểm 0.",technologies:["HTML5","CSS3","JavaScript"],github:"https://github.com/haihttt974/CountdownNewYear.github.io",demo:"https://haihttt974.github.io/CountdownNewYear.github.io/",image:"/placeholder.svg"},{id:"firework-effect",title:"Firework Effect",description:"Hiệu ứng pháo hoa sống động cho các dịp lễ hội.",longDescription:"Mô phỏng pháo hoa với hiệu ứng particle system, màu sắc rực rỡ và âm thanh. Phù hợp cho các trang countdown và lễ hội.",technologies:["HTML5","Canvas","JavaScript","Animation"],github:"https://github.com/haihttt974/Hfirework.github.io",demo:"https://haihttt974.github.io/Hfirework.github.io/",image:"/placeholder.svg"}],se={name:"Lê Duy Hải",nickname:"Hai IT",username:"haihttt974",title:"Information Systems Developer",subtitle:"Database • Server-side • DevOps",avatar:"https://avatars.githubusercontent.com/u/202379592?v=4",address:"Đông Hưng Thuận, Ho Chi Minh City",bio:`Tôi là một chuyên gia về Hệ thống thông tin (Information Systems), tập trung vào việc xây dựng các giải pháp có khả năng mở rộng (Scalable) và tin cậy (Reliable).

Chuyên môn của tôi bao gồm: Cơ sở dữ liệu, Server-side Development và DevOps. Tôi đam mê việc tối ưu hóa hiệu suất hệ thống và xây dựng các kiến trúc phần mềm bền vững.

Ngoài lập trình, tôi còn là gia sư Toán, chia sẻ kiến thức và giúp đỡ học sinh phát triển tư duy logic.`,skills:[{category:"Ngôn ngữ lập trình",items:["C","C++","C#","Java","PHP","Python","JavaScript","TypeScript","Dart"]},{category:"Backend & Database",items:[".NET Core","ASP.NET","MySQL","SQL Server","MariaDB","InfluxDB"]},{category:"DevOps & Tools",items:["Docker","Git","GitHub","GitLab","Google Cloud","Fly.io","Postman","Swagger"]},{category:"Frontend & Design",items:["HTML5","CSS3","Bootstrap","jQuery","Figma","Canva"]},{category:"Data Science / AI",items:["TensorFlow","Keras","NumPy","Pandas","scikit-learn","SciPy"]}],social:{github:"https://github.com/haihttt974",linkedin:"https://www.linkedin.com/in/haild/",facebook:"https://facebook.com/haiit.974",instagram:"https://instagram.com/haiit.974",tiktok:"https://tiktok.com/@haiit.974",twitter:"https://x.com/haiit974",email:"ld.hai.insys@gmail.com",secondaryEmail:"leduyhai090704@gmail.com"},socialLinks:[{name:"GitHub",url:"https://github.com/haihttt974",icon:"Github"},{name:"LinkedIn",url:"https://www.linkedin.com/in/haild/",icon:"Linkedin"},{name:"Facebook",url:"https://facebook.com/haiit.974",icon:"Facebook"},{name:"Instagram",url:"https://instagram.com/haiit.974",icon:"Instagram"},{name:"TikTok",url:"https://tiktok.com/@haiit.974",icon:"Music2"},{name:"X (Twitter)",url:"https://x.com/haiit974",icon:"Twitter"},{name:"Primary Email",url:"mailto:ld.hai.insys@gmail.com",icon:"Mail"},{name:"Secondary Email",url:"mailto:leduyhai090704@gmail.com",icon:"Mail"}],experience:[{title:"Information Systems Developer",company:"Freelance & Personal Projects",period:"2023 - Hiện tại",description:"Phát triển các ứng dụng web, mobile và hệ thống xử lý dữ liệu. Chuyên sâu về Database, Server-side và DevOps."},{title:"Math Tutor",company:"Private Tutoring",period:"2022 - Hiện tại",description:"Gia sư Toán học, giúp học sinh phát triển tư duy logic và giải quyết vấn đề."}]},Jo=[{value:"system",label:"Hệ thống",icon:o1},{value:"dark",label:"Tối",icon:u1},{value:"light",label:"Sáng",icon:v1}],pp=()=>{const{language:e}=Re(),{theme:t="system",setTheme:n}=Mv(),r=Jo.findIndex(u=>u.value===t),i=r===-1?0:r,o=Jo[i],a=Jo[(i+1)%Jo.length],l=o.icon,c=e==="vi"?{system:"Hệ thống",dark:"Tối",light:"Sáng"}:{system:"System",dark:"Dark",light:"Light"};return s.jsx(X,{variant:"outline",size:"icon",className:"border-border/80 bg-background/50","aria-label":`${c[o.value]} → ${c[a.value]}`,title:`${c[o.value]} → ${c[a.value]}`,onClick:()=>n(a.value),children:s.jsx(l,{className:"h-4 w-4"})})},mp=()=>{const{language:e,toggleLanguage:t}=Re(),n=e==="vi"?"English":"Tiếng Việt";return s.jsxs(X,{variant:"outline",size:"sm",className:"h-10 gap-2 border-border/80 bg-background/50 px-3 font-mono text-xs font-semibold tracking-[.1em]","aria-label":`Switch to ${n}`,title:`Switch to ${n}`,onClick:t,children:[s.jsx(i1,{className:"h-3.5 w-3.5"}),e.toUpperCase()]})},GC=()=>{const{t:e}=Re(),t=St(),[n,r]=m.useState(!1),i=[{path:"/",label:e("nav.home"),index:"00"},{path:"/projects",label:e("nav.projects"),index:"01"},{path:"/blog",label:e("nav.blog"),index:"02"},{path:"/about",label:e("nav.about"),index:"03"}],o=a=>a==="/"?t.pathname==="/":t.pathname.startsWith(a);return m.useEffect(()=>{r(!1)},[t.pathname]),s.jsx("header",{className:"fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl",children:s.jsxs("div",{className:"container mx-auto px-4",children:[s.jsxs("nav",{className:"flex h-[72px] items-center justify-between",children:[s.jsxs(xe,{to:"/",className:"group flex items-center gap-3",children:[s.jsx("span",{className:"brand-logo flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-primary/35 bg-primary/[.07] p-1 shadow-sm transition-all duration-300 group-hover:border-primary/70 group-hover:bg-primary/10",children:s.jsx("img",{src:"/logo-rm-khongvien.png",alt:"",className:"h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"})}),s.jsxs("span",{children:[s.jsx("span",{className:"block font-mono text-sm font-semibold leading-none",children:"HAI IT"}),s.jsx("span",{className:"mt-1 block font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground",children:"systems journal"})]})]}),s.jsx("ul",{className:"hidden items-center gap-1 md:flex",children:i.map(a=>s.jsx("li",{children:s.jsxs(xe,{to:a.path,className:`flex items-baseline gap-2 rounded-md px-3 py-2 font-mono text-xs transition-colors ${o(a.path)?"bg-primary/10 text-primary":"text-muted-foreground hover:bg-muted hover:text-foreground"}`,children:[s.jsx("span",{className:"text-[11px] opacity-65",children:a.index}),a.label]})},a.path))}),s.jsxs("div",{className:"hidden items-center gap-2 md:flex",children:[s.jsx(mp,{}),s.jsx(pp,{}),s.jsx(X,{asChild:!0,variant:"outline",size:"sm",className:"border-primary/30 font-mono text-xs",children:s.jsxs("a",{href:`mailto:${se.social.email}`,children:[e("nav.connect")," ",s.jsx(Gt,{className:"ml-2 h-3.5 w-3.5"})]})})]}),s.jsx(X,{variant:"ghost",size:"icon",className:"md:hidden","aria-label":"Mở menu",onClick:()=>r(!n),children:n?s.jsx(Ys,{className:"h-5 w-5"}):s.jsx(c1,{className:"h-5 w-5"})})]}),n&&s.jsxs("div",{className:"border-t border-border/60 py-4 md:hidden",children:[i.map(a=>s.jsxs(xe,{to:a.path,onClick:()=>r(!1),className:`flex items-center justify-between rounded-lg px-4 py-3 font-mono text-sm ${o(a.path)?"bg-primary/10 text-primary":"text-muted-foreground"}`,children:[a.label,s.jsxs("span",{className:"text-xs opacity-65",children:["/",a.index]})]},a.path)),s.jsxs("div",{className:"mt-3 flex items-center justify-between gap-3 border-t border-border/60 px-4 pt-4",children:[s.jsxs("span",{className:"font-mono text-xs uppercase tracking-[.14em] text-muted-foreground",children:[e("nav.language")," / ",e("nav.theme")]}),s.jsxs("div",{className:"flex gap-2",children:[s.jsx(mp,{}),s.jsx(pp,{})]})]})]})]})})},KC=()=>{const{t:e}=Re();return s.jsx("footer",{className:"border-t border-border/70 bg-card/35",children:s.jsxs("div",{className:"container mx-auto px-4 py-12",children:[s.jsxs("div",{className:"grid gap-10 md:grid-cols-[1.4fr_.6fr_.6fr]",children:[s.jsxs("div",{children:[s.jsx("p",{className:"eyebrow mb-4",children:e("footer.eyebrow")}),s.jsx("h2",{className:"max-w-xl text-2xl font-semibold md:text-3xl",children:e("footer.title")})]}),s.jsxs("div",{className:"font-mono text-xs",children:[s.jsx("p",{className:"mb-4 uppercase tracking-[.18em] text-muted-foreground",children:e("footer.navigate")}),s.jsxs("div",{className:"space-y-3",children:[s.jsx(xe,{className:"block hover:text-primary",to:"/projects",children:e("footer.work")}),s.jsx(xe,{className:"block hover:text-primary",to:"/blog",children:e("footer.notes")}),s.jsx(xe,{className:"block hover:text-primary",to:"/about",children:e("footer.profile")})]})]}),s.jsxs("div",{className:"font-mono text-xs",children:[s.jsx("p",{className:"mb-4 uppercase tracking-[.18em] text-muted-foreground",children:e("footer.connect")}),s.jsxs("div",{className:"space-y-3",children:[s.jsxs("a",{className:"flex items-center gap-2 hover:text-primary",href:se.social.github,target:"_blank",rel:"noreferrer",children:[s.jsx(Fr,{className:"h-3.5 w-3.5"}),"GitHub"]}),s.jsxs("a",{className:"flex items-center gap-2 hover:text-primary",href:se.social.linkedin,target:"_blank",rel:"noreferrer",children:[s.jsx(s1,{className:"h-3.5 w-3.5"}),"LinkedIn"]}),s.jsxs("a",{className:"flex items-center gap-2 hover:text-primary",href:`mailto:${se.social.email}`,children:[s.jsx(Eg,{className:"h-3.5 w-3.5"}),"Email ",s.jsx(Gt,{className:"h-3 w-3"})]})]})]})]}),s.jsxs("div",{className:"mt-12 flex flex-col gap-2 border-t border-border/70 pt-6 font-mono text-xs uppercase tracking-[.14em] text-muted-foreground sm:flex-row sm:justify-between",children:[s.jsxs("span",{children:["© ",new Date().getFullYear()," Lê Duy Hải / Hai IT"]}),s.jsx("span",{children:e("footer.designed")})]})]})})},rr=({children:e})=>{const{pathname:t,search:n}=St();return m.useEffect(()=>{t==="/blog"&&window.sessionStorage.getItem(`blog-scroll:${t}${n}`)||window.scrollTo({top:0,behavior:"instant"})},[t,n]),s.jsxs("div",{className:"relative flex min-h-screen flex-col overflow-hidden",children:[s.jsx("div",{className:"page-grid pointer-events-none fixed inset-0 z-[-1]"}),s.jsx(GC,{}),s.jsx("main",{className:"flex-1 pt-[72px]",children:e}),s.jsx(KC,{})]})},YC=()=>{const{t:e,language:t}=Re(),n=m.useRef(null),r=t==="vi"?["Hệ thống backend","Dữ liệu & database","Thực hành DevOps"]:["Backend systems","Data & database","DevOps practice"];return m.useEffect(()=>{const i=n.current;if(!i||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const o=l=>{const c=i.getBoundingClientRect(),u=(l.clientX-c.left)/c.width-.5,d=(l.clientY-c.top)/c.height-.5;i.style.setProperty("--portrait-x",`${u*10}px`),i.style.setProperty("--portrait-y",`${d*10}px`),i.style.setProperty("--spot-x",`${(u+.5)*100}%`),i.style.setProperty("--spot-y",`${(d+.5)*100}%`)},a=()=>{i.style.setProperty("--portrait-x","0px"),i.style.setProperty("--portrait-y","0px"),i.style.setProperty("--spot-x","50%"),i.style.setProperty("--spot-y","50%")};return i.addEventListener("pointermove",o),i.addEventListener("pointerleave",a),()=>{i.removeEventListener("pointermove",o),i.removeEventListener("pointerleave",a)}},[]),s.jsxs("section",{className:"relative overflow-hidden border-b border-border/70",children:[s.jsx("div",{className:"hero-orbit pointer-events-none absolute right-[4%] top-[12%] h-72 w-72 rounded-full border border-primary/15"}),s.jsx("div",{className:"absolute -right-24 top-10 h-[34rem] w-[34rem] rounded-full bg-primary/[.07] blur-[120px]"}),s.jsxs("div",{className:"container relative mx-auto px-4 py-6 md:py-8",children:[s.jsxs("div",{className:"mb-8 flex items-center justify-between border-y border-border/70 py-3 font-mono text-xs uppercase tracking-[.16em] text-muted-foreground",children:[s.jsx("span",{children:e("hero.log")}),s.jsx("span",{className:"hidden sm:block",children:"Vietnam · GMT+7"}),s.jsxs("span",{className:"flex items-center gap-2 text-primary",children:[s.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-primary"}),e("hero.open")]})]}),s.jsxs("div",{className:"grid items-stretch gap-7 lg:grid-cols-[1.25fr_.75fr]",children:[s.jsxs("div",{className:"flex flex-col justify-between py-2 lg:py-5",children:[s.jsxs("div",{children:[s.jsxs("p",{className:"eyebrow mb-6 animate-fade-in",children:[e("hero.hello")," ",se.nickname]}),s.jsxs("h1",{className:"max-w-4xl text-[clamp(3.15rem,6.8vw,6.8rem)] font-semibold leading-[.98] tracking-[-.075em] animate-slide-up",children:[s.jsx("span",{className:"block whitespace-nowrap",children:e("hero.line1")}),s.jsx("span",{className:"block text-muted-foreground",children:e("hero.line2")}),s.jsx("span",{className:"text-gradient",children:e("hero.line3")})]}),s.jsxs("div",{className:"mt-7 grid max-w-2xl gap-5 border-l border-primary/40 pl-5 sm:grid-cols-[1fr_auto] sm:items-end",children:[s.jsxs("p",{className:"text-base leading-relaxed text-muted-foreground md:text-lg",children:[t==="vi"?"Tôi là":"I am"," ",s.jsx("strong",{className:"font-medium text-foreground",children:se.name}),", ",e("hero.bio")]}),s.jsx(jg,{className:"hidden h-10 w-10 text-primary sm:block"})]})]}),s.jsxs("div",{children:[s.jsxs("div",{className:"mt-7 flex flex-wrap gap-3",children:[s.jsx(X,{asChild:!0,size:"lg",className:"font-mono text-xs",children:s.jsxs(xe,{to:"/projects",children:[e("hero.work")," ",s.jsx(Gt,{className:"ml-2 h-4 w-4"})]})}),s.jsx(X,{asChild:!0,size:"lg",variant:"outline",className:"font-mono text-xs",children:s.jsxs(xe,{to:"/blog",children:[s.jsx(Bb,{className:"mr-2 h-4 w-4"}),e("hero.notes")]})})]}),s.jsx("div",{className:"mt-7 grid border-y border-border/70 sm:grid-cols-3",children:[["08+",e("hero.repositories")],["09+",e("hero.languages")],["33",e("hero.journal")]].map(([i,o],a)=>s.jsxs("div",{className:`py-4 ${a>0?"border-t border-border/70 sm:border-l sm:border-t-0 sm:pl-5":""}`,children:[s.jsx("span",{className:"font-mono text-xl font-semibold text-primary",children:i}),s.jsx("span",{className:"ml-2 font-mono text-[11px] uppercase tracking-wider text-muted-foreground",children:o})]},o))})]})]}),s.jsxs("aside",{ref:n,className:"portrait-stage journal-card group mx-auto aspect-[4/5] w-full max-w-[440px] animate-slide-up lg:self-center",style:{animationDelay:".12s"},children:[s.jsx("div",{className:"portrait-index absolute -left-4 top-12 z-20 hidden rounded-md border border-primary/30 bg-background/90 px-3 py-2 font-mono text-[11px] uppercase tracking-[.16em] text-primary backdrop-blur md:block",children:"ID / LDH-974"}),s.jsx("div",{className:"portrait-crosshair pointer-events-none absolute left-1/2 top-1/2 z-20 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"}),s.jsx("img",{src:se.avatar,alt:`Chân dung ${se.name}`,className:"portrait-image absolute inset-0 h-full w-full object-cover object-center"}),s.jsx("div",{className:"portrait-light pointer-events-none absolute inset-0 z-10"}),s.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent"}),s.jsxs("div",{className:"absolute inset-x-0 top-0 flex items-center justify-between p-5 font-mono text-[11px] uppercase tracking-[.16em] text-foreground drop-shadow-md",children:[s.jsxs("span",{children:[e("hero.portrait")," / 001"]}),s.jsx("span",{className:"rounded-full border border-white/25 bg-black/25 px-3 py-1.5 backdrop-blur-md",children:"Hai IT"})]}),s.jsxs("div",{className:"absolute inset-x-0 bottom-0 p-5 md:p-7",children:[s.jsx("div",{className:"mb-5 flex flex-wrap gap-2",children:r.map(i=>s.jsx("span",{className:"rounded-full border border-white/20 bg-background/65 px-3 py-1.5 font-mono text-[11px] font-medium uppercase tracking-wider text-foreground backdrop-blur-md",children:i},i))}),s.jsxs("div",{className:"border-t border-white/20 pt-5",children:[s.jsx("p",{className:"text-3xl font-semibold md:text-4xl",children:se.name}),s.jsxs("div",{className:"mt-3 flex flex-wrap items-center justify-between gap-3 font-mono text-xs uppercase tracking-wider text-foreground/80",children:[s.jsx("span",{children:se.title}),s.jsxs("span",{className:"flex items-center gap-1.5",children:[s.jsx(Ag,{className:"h-3 w-3 text-primary"})," Vietnam"]})]}),s.jsxs("a",{href:se.social.github,target:"_blank",rel:"noreferrer",className:"mt-5 flex items-center justify-between rounded-lg border border-white/20 bg-background/65 px-4 py-3 font-mono text-xs uppercase tracking-wider backdrop-blur-md transition-colors hover:border-primary hover:text-primary",children:[s.jsxs("span",{className:"flex items-center gap-2",children:[s.jsx(Fr,{className:"h-3.5 w-3.5"})," github.com/haihttt974"]}),s.jsx(Gt,{className:"h-3.5 w-3.5"})]})]})]})]})]}),s.jsx("div",{className:"hero-marquee mt-7 overflow-hidden border-y border-border/70 py-3 font-mono text-[11px] uppercase tracking-[.18em] text-muted-foreground",children:s.jsx("div",{className:"hero-marquee-track flex w-max items-center gap-8",children:[...Array(2)].flatMap((i,o)=>(t==="vi"?["Hệ thống backend","Tư duy dữ liệu","Học tập công khai","Thực hành DevOps","Xây · Quan sát · Giải thích · Cải tiến"]:["Backend systems","Database thinking","Learning in public","DevOps practice","Build · Observe · Explain · Improve"]).map(a=>s.jsxs("span",{className:"flex items-center gap-8",children:[s.jsx("span",{children:a}),s.jsx("span",{className:"text-primary",children:"✦"})]},`${o}-${a}`)))})})]})]})},XC={initial:{opacity:0,y:10},animate:{opacity:1,y:0,transition:{duration:.38,ease:[.22,1,.36,1]}},exit:{opacity:0,y:-6,transition:{duration:.2,ease:[.4,0,1,1]}}},si={hidden:{},visible:{transition:{staggerChildren:.065,delayChildren:.04}}},ai={hidden:{opacity:0,y:18,scale:.985},visible:{opacity:1,y:0,scale:1,transition:{duration:.48,ease:[.22,1,.36,1]}}},Ma={hidden:{opacity:0,y:28},visible:{opacity:1,y:0,transition:{duration:.62,ease:[.22,1,.36,1]}}},li={once:!0,amount:.16},JC=()=>{const{t:e}=Re(),t=ur();return s.jsx(Ce.section,{className:"border-b border-border/70 bg-card/25 py-20 md:py-28",variants:t?void 0:Ma,initial:t?!1:"hidden",whileInView:"visible",viewport:li,children:s.jsxs("div",{className:"container mx-auto px-4",children:[s.jsxs("div",{className:"mb-10 max-w-3xl",children:[s.jsx("p",{className:"eyebrow mb-4",children:e("home.map.eyebrow")}),s.jsxs("h2",{className:"text-4xl md:text-6xl",children:[e("home.map.title1")," ",s.jsx("span",{className:"text-gradient",children:e("home.map.title2")})]}),s.jsx("p",{className:"mt-5 max-w-xl text-muted-foreground",children:e("home.map.desc")})]}),s.jsx(Ce.div,{className:"grid border-l border-t border-border/70 md:grid-cols-2 lg:grid-cols-3",variants:t?void 0:si,children:Ia.map((n,r)=>s.jsx(Ce.div,{variants:t?void 0:ai,children:s.jsxs(xe,{to:`/blog?category=${n.id}`,className:"group block min-h-56 border-b border-r border-border/70 bg-background/30 p-6 transition-colors hover:bg-primary/[.04]",children:[s.jsxs("div",{className:"flex items-start justify-between",children:[s.jsxs("span",{className:"font-mono text-xs font-medium text-primary",children:["MAP / 0",r+1]}),s.jsx(Gt,{className:"h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary"})]}),s.jsx("h3",{className:"mt-12 text-xl group-hover:text-primary",children:e(`category.${n.id}`)}),s.jsx("p",{className:"mt-3 text-sm leading-relaxed text-muted-foreground",children:n.description})]})},n.id))})]})})},ZC={id:"understanding-solid-principles",title:"Understanding SOLID Principles in Modern Software Development",titleVi:"Hiểu đúng SOLID trong phát triển phần mềm hiện đại",excerpt:"A practical introduction to SOLID principles with TypeScript-oriented examples and guidance on when to apply them.",excerptVi:"Hướng dẫn thực tế về SOLID cùng ví dụ TypeScript và cách áp dụng có chọn lọc trong dự án.",content:`# Understanding SOLID Principles in Modern Software Development

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
- Áp dụng nguyên tắc ở nơi chúng giảm độ phức tạp thật.`,category:"patterns",tags:["SOLID","OOP","TypeScript","Clean Code"],date:"2026-05-31",readTime:"5 min",readTimeVi:"5 phút",featured:!0},eS={id:"react-performance-optimization",title:"React Performance Optimization: Measure Before You Optimize",titleVi:"Tối ưu hiệu năng React: Đo lường trước khi tối ưu",excerpt:"A practical note on finding React performance bottlenecks with profiling tools before applying optimization patterns.",excerptVi:"Ghi chú thực tế về cách tìm điểm nghẽn hiệu năng React bằng profiler trước khi áp dụng các mẫu tối ưu.",content:`# React Performance Optimization: Measure Before You Optimize

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
- Nhớ rằng vấn đề hiệu năng có thể đến từ network, bundle size, ảnh hoặc CSS, không chỉ React.`,category:"frameworks",tags:["React","Performance","JavaScript","Frontend"],date:"2026-05-24",readTime:"5 min",readTimeVi:"5 phút",featured:!0},tS={id:"typescript-advanced-types",title:"Understanding TypeScript Advanced Types",titleVi:"Hiểu các kiểu nâng cao trong TypeScript",excerpt:"A practical introduction to conditional types, mapped types, template literal types, and type inference in TypeScript.",excerptVi:"Giới thiệu thực tế về conditional type, mapped type, template literal type và cơ chế suy luận kiểu trong TypeScript.",content:`# Understanding TypeScript Advanced Types

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
- Validate dữ liệu bên ngoài ở runtime.`,category:"languages",tags:["TypeScript","Types","JavaScript"],date:"2026-05-22",readTime:"4 min",readTimeVi:"4 phút"},nS={id:"microservices-architecture",title:"Microservices Architecture Basics and Trade-offs",titleVi:"Nền tảng Microservices và các trade-off cần hiểu",excerpt:"A practical overview of when microservices help, what they cost, and which design concerns appear early.",excerptVi:"Tổng quan thực tế về khi nào microservices hữu ích, chi phí đi kèm và các vấn đề thiết kế cần biết sớm.",content:`# Microservices Architecture Basics and Trade-offs

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
- Ưu tiên modular monolith cho đến khi nhu cầu phân tán thật sự rõ.`,category:"architecture",tags:["Microservices","Docker","Kubernetes","System Design"],date:"2026-05-26",readTime:"5 min",readTimeVi:"5 phút",featured:!0},rS={id:"clean-code-practices",title:"Writing Clean, Maintainable Code",titleVi:"Viết mã sạch và dễ bảo trì",excerpt:"Practical clean code habits that make software easier to read, change, test, and review without adding unnecessary abstraction.",excerptVi:"Các thói quen clean code thực tế giúp phần mềm dễ đọc, dễ sửa, dễ kiểm thử và dễ review mà không tạo abstraction không cần thiết.",content:`# Writing Clean, Maintainable Code

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
- Ưu tiên sự rõ ràng hữu ích thay vì abstraction hình thức.`,category:"practices",tags:["Clean Code","Refactoring","Best Practices"],date:"2026-05-21",readTime:"5 min",readTimeVi:"5 phút"},iS={id:"frontend-developer-roadmap",title:"Frontend Developer Roadmap for Building Strong Fundamentals",titleVi:"Lộ trình Frontend Developer để xây nền tảng vững",excerpt:"A practical learning path for building solid frontend fundamentals through HTML, CSS, JavaScript, frameworks, testing, and deployment.",excerptVi:"Lộ trình học tập thực tế để xây nền tảng frontend qua HTML, CSS, JavaScript, framework, kiểm thử và triển khai.",content:`# Frontend Developer Roadmap for Building Strong Fundamentals

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
- Tập trung chiều sâu trước khi chạy theo mọi tool mới.`,category:"roadmap",tags:["Roadmap","Frontend","Career","Learning"],date:"2026-05-20",readTime:"5 min",readTimeVi:"5 phút"},oS={id:"typescript-type-system-practical-guide",title:"TypeScript's Type System: From Safer Code to Better Domain Design",titleVi:"Hệ thống kiểu TypeScript: Từ mã an toàn đến thiết kế nghiệp vụ tốt hơn",excerpt:"A practical guide to modeling domain rules with unions, generics, narrowing, and type-safe boundaries instead of treating TypeScript as annotated JavaScript.",excerptVi:"Hướng dẫn thực tế về cách mô hình hóa quy tắc nghiệp vụ bằng union, generic, narrowing và các biên an toàn kiểu dữ liệu.",content:`# TypeScript's Type System: From Safer Code to Better Domain Design

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

TypeScript không thay thế kiểm thử hay xác thực runtime. Sức mạnh thật sự của nó là làm cho các giả định trở nên hữu hình. Khi mô hình kiểu truyền đạt tốt nghiệp vụ, việc triển khai, review, refactor và mở rộng đều trở nên dễ dàng hơn.`,category:"languages",tags:["TypeScript","Type System","Domain Modeling","Generics"],date:"2026-06-13",readTime:"5 min",readTimeVi:"5 phút",featured:!0},sS={id:"python-reliable-applications",title:"Python Beyond Scripts: Structuring Reliable Applications",titleVi:"Python vượt ra ngoài script: Xây dựng ứng dụng đáng tin cậy",excerpt:"How to move from quick Python scripts to maintainable applications with clear boundaries, type hints, dependency management, testing, and observability.",excerptVi:"Cách chuyển từ script Python nhanh sang ứng dụng dễ bảo trì bằng ranh giới rõ ràng, type hint, quản lý dependency, kiểm thử và observability.",content:`# Python Beyond Scripts: Structuring Reliable Applications

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

Python tốt vẫn nên dễ đọc và trực tiếp. Độ tin cậy đến từ ranh giới rõ ràng cùng vòng phản hồi kỷ luật, không phải từ việc biến ứng dụng nhỏ thành một framework trừu tượng.`,category:"languages",tags:["Python","Architecture","Testing","Maintainability"],date:"2026-06-10",readTime:"6 min",readTimeVi:"6 phút"},aS={id:"csharp-modern-backend-guide",title:"Modern C# for Backend Systems: Patterns That Improve Correctness",titleVi:"C# hiện đại cho hệ thống Backend: Những mẫu giúp tăng tính đúng đắn",excerpt:"A focused guide to records, nullable reference types, async workflows, result modeling, and dependency boundaries in modern C# backend applications.",excerptVi:"Hướng dẫn tập trung vào record, nullable reference type, async, mô hình hóa kết quả và ranh giới dependency trong backend C# hiện đại.",content:`# Modern C# for Backend Systems

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

C# tốt nhất không phải là C# thông minh nhất. Mã tốt truyền đạt ràng buộc rõ ràng, xem compiler như một đối tác thiết kế và không để chi tiết hạ tầng lấn át nghiệp vụ.`,category:"languages",tags:["C#",".NET","Backend","Domain Modeling"],date:"2026-06-06",readTime:"6 min",readTimeVi:"6 phút"},lS={id:"javascript-async-patterns",title:"JavaScript Async Patterns: Promises, Async/Await, and Queues",titleVi:"Các mẫu xử lý bất đồng bộ trong JavaScript: Promise, Async/Await và Queue",excerpt:"A practical guide to organizing asynchronous JavaScript with promises, async/await, controlled parallelism, queues, and reliable error handling.",excerptVi:"Hướng dẫn thực tế để tổ chức xử lý bất đồng bộ trong JavaScript bằng Promise, async/await, chạy song song có kiểm soát, queue và xử lý lỗi đáng tin cậy.",content:`# JavaScript Async Patterns: Promises, Async/Await, and Queues

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

Async code có cấu trúc tốt giúp ứng dụng phản hồi nhanh hơn, lỗi rõ ràng hơn và dễ mở rộng hơn khi tính năng ngày càng nhiều.`,category:"languages",tags:["JavaScript","Async/Await","Promises","Concurrency","Frontend"],date:"2026-06-20",readTime:"8 min",readTimeVi:"8 phút"},cS={id:"python-data-pipeline-basics",title:"Python Data Pipeline Basics for Reliable Automation",titleVi:"Nền tảng pipeline dữ liệu Python cho tự động hóa ổn định",excerpt:"A practical structure for building Python data pipelines that ingest, validate, transform, store, and monitor data reliably.",excerptVi:"Cấu trúc thực tế để xây dựng pipeline dữ liệu Python có khả năng thu thập, kiểm tra, biến đổi, lưu trữ và giám sát dữ liệu ổn định.",content:`# Python Data Pipeline Basics for Reliable Automation

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

Khi automation trở thành một phần của workflow thật, độ tin cậy quan trọng hơn code thông minh. Một cấu trúc pipeline rõ ràng giúp script Python trở thành hệ thống có thể phụ thuộc vào.`,category:"languages",tags:["Python","Data Pipeline","Automation","ETL","Backend"],date:"2026-06-18",readTime:"8 min",readTimeVi:"8 phút"},uS={id:"csharp-linq-practical-guide",title:"C# LINQ Practical Guide for Cleaner Business Logic",titleVi:"Hướng dẫn LINQ thực tế trong C# cho business logic sạch hơn",excerpt:"A practical guide to using LINQ for readable filtering, grouping, projection, and business rules without hiding intent or hurting performance.",excerptVi:"Hướng dẫn thực tế để dùng LINQ cho lọc, nhóm, chuyển đổi dữ liệu và business rule dễ đọc mà không che giấu ý định hoặc làm giảm hiệu năng.",content:`# C# LINQ Practical Guide for Cleaner Business Logic

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

Business logic sạch không phải là tránh vòng lặp bằng mọi giá. Điều quan trọng là rule phải dễ nhìn thấy. LINQ là công cụ mạnh cho việc đó khi query kể cùng một câu chuyện với domain.`,category:"languages",tags:["C#","LINQ",".NET","Clean Code","Business Logic"],date:"2026-06-21",readTime:"7 min",readTimeVi:"7 phút"},dS={id:"typescript-generics-cookbook",title:"TypeScript Generics Cookbook for Everyday Components",titleVi:"Cẩm nang TypeScript Generics cho component hằng ngày",excerpt:"Reusable generic patterns for UI components, API helpers, and utility functions.",excerptVi:"Các mẫu generic tái sử dụng cho UI component, API helper và utility function.",content:`# TypeScript Generics Cookbook

Draft content.`,contentVi:`# Cẩm nang TypeScript Generics

Nội dung nháp.`,category:"languages",tags:["TypeScript","Generics","Frontend","Patterns"],date:"2026-06-19",readTime:"2 min",readTimeVi:"2 phút"},hS={id:"react-query-data-fetching",title:"React Query Data Fetching Patterns for Growing Apps",titleVi:"Mẫu fetch dữ liệu với React Query cho ứng dụng đang phát triển",excerpt:"Patterns for caching, invalidation, loading states, and optimistic updates.",excerptVi:"Các mẫu cho cache, invalidation, trạng thái tải và cập nhật lạc quan.",content:`# React Query Data Fetching Patterns

Draft content.`,contentVi:`# Mẫu fetch dữ liệu với React Query

Nội dung nháp.`,category:"frameworks",tags:["React","React Query","Data Fetching","Frontend"],date:"2026-06-01",readTime:"2 min",readTimeVi:"2 phút"},pS={id:"nextjs-routing-strategies",title:"Next.js Routing Strategies for Content and Product Pages",titleVi:"Chiến lược routing Next.js cho trang nội dung và sản phẩm",excerpt:"How to choose route structure, layouts, metadata, and dynamic segments.",excerptVi:"Cách chọn cấu trúc route, layout, metadata và dynamic segment.",content:`# Next.js Routing Strategies

Draft content.`,contentVi:`# Chiến lược routing Next.js

Nội dung nháp.`,category:"frameworks",tags:["Next.js","React","Routing","SEO"],date:"2026-06-17",readTime:"2 min",readTimeVi:"2 phút"},mS={id:"aspnet-core-api-versioning",title:"ASP.NET Core API Versioning Without Breaking Clients",titleVi:"Versioning API ASP.NET Core không làm hỏng client",excerpt:"A compact plan for evolving APIs while keeping existing consumers stable.",excerptVi:"Kế hoạch gọn để phát triển API mà vẫn giữ client hiện tại ổn định.",content:`# ASP.NET Core API Versioning

Draft content.`,contentVi:`# Versioning API ASP.NET Core

Nội dung nháp.`,category:"frameworks",tags:["ASP.NET Core","API","Backend","Versioning"],date:"2026-06-16",readTime:"2 min",readTimeVi:"2 phút"},fS={id:"flutter-state-management-options",title:"Flutter State Management Options: Choosing the Right Fit",titleVi:"Các lựa chọn quản lý state trong Flutter: Chọn cách phù hợp",excerpt:"A comparison of state management approaches for small and growing Flutter apps.",excerptVi:"So sánh các cách quản lý state cho ứng dụng Flutter nhỏ và đang mở rộng.",content:`# Flutter State Management Options

Draft content.`,contentVi:`# Các lựa chọn quản lý state trong Flutter

Nội dung nháp.`,category:"frameworks",tags:["Flutter","Dart","State Management","Mobile"],date:"2026-06-15",readTime:"2 min",readTimeVi:"2 phút"},gS={id:"database-indexing-strategy",title:"Database Indexing Strategy for Faster Queries",titleVi:"Chiến lược indexing database để truy vấn nhanh hơn",excerpt:"A practical guide to choosing indexes based on access patterns and query plans.",excerptVi:"Hướng dẫn chọn index dựa trên pattern truy cập và query plan.",content:`# Database Indexing Strategy

Draft content.`,contentVi:`# Chiến lược indexing database

Nội dung nháp.`,category:"architecture",tags:["Database","SQL","Performance","Backend"],date:"2026-06-14",readTime:"2 min",readTimeVi:"2 phút"},vS={id:"event-driven-architecture-basics",title:"Event-Driven Architecture Basics for Web Systems",titleVi:"Nền tảng kiến trúc hướng sự kiện cho hệ thống web",excerpt:"When events help, when they hurt, and how to keep message flows observable.",excerptVi:"Khi event hữu ích, khi gây hại và cách giữ luồng message dễ quan sát.",content:`# Event-Driven Architecture Basics

Draft content.`,contentVi:`# Nền tảng kiến trúc hướng sự kiện

Nội dung nháp.`,category:"architecture",tags:["Architecture","Events","Messaging","Scalability"],date:"2026-06-12",readTime:"2 min",readTimeVi:"2 phút"},yS={id:"api-gateway-design-notes",title:"API Gateway Design Notes for Distributed Systems",titleVi:"Ghi chú thiết kế API Gateway cho hệ thống phân tán",excerpt:"Routing, authentication, rate limiting, and observability concerns at the gateway layer.",excerptVi:"Routing, xác thực, rate limit và observability ở lớp gateway.",content:`# API Gateway Design Notes

Draft content.`,contentVi:`# Ghi chú thiết kế API Gateway

Nội dung nháp.`,category:"architecture",tags:["API Gateway","Architecture","Security","Microservices"],date:"2026-06-11",readTime:"2 min",readTimeVi:"2 phút"},xS={id:"caching-strategies-web-apps",title:"Caching Strategies for Web Applications",titleVi:"Chiến lược caching cho ứng dụng web",excerpt:"A compact map of browser cache, CDN cache, API cache, and database cache tradeoffs.",excerptVi:"Bản đồ ngắn về cache trình duyệt, CDN, API và database cùng tradeoff.",content:`# Caching Strategies for Web Applications

Draft content.`,contentVi:`# Chiến lược caching cho ứng dụng web

Nội dung nháp.`,category:"architecture",tags:["Caching","Performance","Architecture","Web"],date:"2026-06-09",readTime:"2 min",readTimeVi:"2 phút"},wS={id:"repository-pattern-modern-apps",title:"Repository Pattern in Modern Applications",titleVi:"Repository Pattern trong ứng dụng hiện đại",excerpt:"Where the repository pattern is useful, and where it becomes unnecessary indirection.",excerptVi:"Khi Repository Pattern hữu ích và khi nó trở thành lớp gián tiếp không cần thiết.",content:`# Repository Pattern in Modern Applications

Draft content.`,contentVi:`# Repository Pattern trong ứng dụng hiện đại

Nội dung nháp.`,category:"patterns",tags:["Repository Pattern","Design Patterns","Backend","Architecture"],date:"2026-06-08",readTime:"2 min",readTimeVi:"2 phút"},bS={id:"factory-pattern-ui-components",title:"Factory Pattern for Configurable UI Components",titleVi:"Factory Pattern cho UI component có cấu hình",excerpt:"Using factories to create consistent UI variants without spreading conditionals everywhere.",excerptVi:"Dùng factory để tạo biến thể UI nhất quán mà không rải conditional khắp nơi.",content:`# Factory Pattern for Configurable UI Components

Draft content.`,contentVi:`# Factory Pattern cho UI component

Nội dung nháp.`,category:"patterns",tags:["Factory Pattern","React","Design Patterns","UI"],date:"2026-06-07",readTime:"2 min",readTimeVi:"2 phút"},kS={id:"adapter-pattern-api-clients",title:"Adapter Pattern for API Clients",titleVi:"Adapter Pattern cho API client",excerpt:"A pattern for protecting application code from external payload changes.",excerptVi:"Một mẫu giúp bảo vệ code ứng dụng khỏi thay đổi payload bên ngoài.",content:`# Adapter Pattern for API Clients

Draft content.`,contentVi:`# Adapter Pattern cho API client

Nội dung nháp.`,category:"patterns",tags:["Adapter Pattern","API","TypeScript","Clean Code"],date:"2026-06-05",readTime:"2 min",readTimeVi:"2 phút"},CS={id:"observer-pattern-real-time-ui",title:"Observer Pattern for Real-Time UI Updates",titleVi:"Observer Pattern cho cập nhật UI thời gian thực",excerpt:"How observer-style flows appear in subscriptions, stores, and live dashboards.",excerptVi:"Cách luồng kiểu observer xuất hiện trong subscription, store và dashboard realtime.",content:`# Observer Pattern for Real-Time UI Updates

Draft content.`,contentVi:`# Observer Pattern cho UI realtime

Nội dung nháp.`,category:"patterns",tags:["Observer Pattern","Realtime","UI","Design Patterns"],date:"2026-06-04",readTime:"2 min",readTimeVi:"2 phút"},SS={id:"git-workflow-team-projects",title:"Git Workflow for Small Team Projects",titleVi:"Git workflow cho dự án team nhỏ",excerpt:"A simple workflow for branches, reviews, releases, and avoiding painful merges.",excerptVi:"Workflow đơn giản cho branch, review, release và tránh merge khó chịu.",content:`# Git Workflow for Small Team Projects

Draft content.`,contentVi:`# Git workflow cho dự án team nhỏ

Nội dung nháp.`,category:"practices",tags:["Git","Workflow","Teamwork","Best Practices"],date:"2026-06-03",readTime:"2 min",readTimeVi:"2 phút"},NS={id:"code-review-checklist",title:"Code Review Checklist for Practical Engineering Teams",titleVi:"Checklist code review cho đội kỹ thuật thực tế",excerpt:"A review checklist focused on correctness, maintainability, security, and product behavior.",excerptVi:"Checklist review tập trung vào đúng logic, bảo trì, bảo mật và hành vi sản phẩm.",content:`# Code Review Checklist

Draft content.`,contentVi:`# Checklist code review

Nội dung nháp.`,category:"practices",tags:["Code Review","Best Practices","Quality","Teamwork"],date:"2026-06-02",readTime:"2 min",readTimeVi:"2 phút"},PS={id:"testing-strategy-frontend-backend",title:"Testing Strategy Across Frontend and Backend",titleVi:"Chiến lược kiểm thử cho frontend và backend",excerpt:"How to balance unit tests, integration tests, and end-to-end coverage.",excerptVi:"Cách cân bằng unit test, integration test và end-to-end test.",content:`# Testing Strategy Across Frontend and Backend

Draft content.`,contentVi:`# Chiến lược kiểm thử frontend và backend

Nội dung nháp.`,category:"practices",tags:["Testing","Frontend","Backend","Quality"],date:"2026-05-29",readTime:"2 min",readTimeVi:"2 phút"},TS={id:"logging-monitoring-basics",title:"Logging and Monitoring Basics for Web Applications",titleVi:"Nền tảng logging và monitoring cho ứng dụng web",excerpt:"What to log, what to measure, and how to make application issues easier to debug.",excerptVi:"Nên log gì, đo gì và cách giúp lỗi ứng dụng dễ debug hơn.",content:`# Logging and Monitoring Basics

Draft content.`,contentVi:`# Nền tảng logging và monitoring

Nội dung nháp.`,category:"practices",tags:["Logging","Monitoring","DevOps","Debugging"],date:"2026-05-30",readTime:"2 min",readTimeVi:"2 phút"},jS={id:"backend-developer-roadmap",title:"Backend Developer Roadmap: From Fundamentals to Deployment",titleVi:"Lộ trình Backend Developer từ nền tảng đến triển khai",excerpt:"A practical learning path covering HTTP, databases, API design, testing, deployment, and basic operations.",excerptVi:"Lộ trình thực tế gồm HTTP, database, thiết kế API, kiểm thử, triển khai và vận hành cơ bản.",content:`# Backend Developer Roadmap

Draft content.`,contentVi:`# Lộ trình Backend Developer

Nội dung nháp.`,category:"roadmap",tags:["Backend","Roadmap","API","Career"],date:"2026-05-28",readTime:"2 min",readTimeVi:"2 phút"},ES={id:"devops-roadmap-for-developers",title:"DevOps Roadmap for Developers",titleVi:"Lộ trình DevOps cho lập trình viên",excerpt:"A practical path through Linux, Docker, CI/CD, cloud deployment, and observability.",excerptVi:"Lộ trình thực tế qua Linux, Docker, CI/CD, cloud deployment và observability.",content:`# DevOps Roadmap for Developers

Draft content.`,contentVi:`# Lộ trình DevOps cho lập trình viên

Nội dung nháp.`,category:"roadmap",tags:["DevOps","Docker","CI/CD","Roadmap"],date:"2026-05-27",readTime:"2 min",readTimeVi:"2 phút"},AS={id:"database-learning-roadmap",title:"Database Learning Roadmap for Application Developers",titleVi:"Lộ trình học database cho lập trình viên ứng dụng",excerpt:"A structured path from SQL basics to indexing, transactions, modeling, and operations.",excerptVi:"Lộ trình từ SQL cơ bản đến indexing, transaction, modeling và vận hành.",content:`# Database Learning Roadmap

Draft content.`,contentVi:`# Lộ trình học database

Nội dung nháp.`,category:"roadmap",tags:["Database","SQL","Roadmap","Backend"],date:"2026-05-25",readTime:"2 min",readTimeVi:"2 phút"},IS={id:"mobile-developer-roadmap",title:"Mobile Developer Roadmap for Cross-Platform Apps",titleVi:"Lộ trình Mobile Developer cho ứng dụng cross-platform",excerpt:"A path covering UI, state, storage, APIs, testing, releases, and store deployment.",excerptVi:"Lộ trình gồm UI, state, storage, API, testing, release và triển khai store.",content:`# Mobile Developer Roadmap

Draft content.`,contentVi:`# Lộ trình Mobile Developer

Nội dung nháp.`,category:"roadmap",tags:["Mobile","Flutter","Roadmap","Career"],date:"2026-05-23",readTime:"2 min",readTimeVi:"2 phút"},Rv=(e,t)=>({...e,title:t==="vi"?e.titleVi??e.title:e.title,excerpt:t==="vi"?e.excerptVi??e.excerpt:e.excerpt,content:t==="vi"?e.contentVi??e.content:e.content,readTime:t==="vi"?e.readTimeVi??e.readTime:e.readTime}),ud=[lS,cS,uS,dS,hS,pS,mS,fS,gS,vS,yS,xS,wS,bS,kS,CS,SS,NS,PS,TS,jS,ES,AS,IS,ZC,eS,tS,nS,rS,iS,oS,sS,aS],MS="portfolio-cms-static:",Lv=`${MS}view-counts`,Dv=()=>typeof window<"u"&&typeof window.localStorage<"u",RS=(e,t)=>{if(!Dv())return t;try{const n=window.localStorage.getItem(e);return n?JSON.parse(n):t}catch{return t}},LS=(e,t)=>{if(Dv())try{window.localStorage.setItem(e,JSON.stringify(t))}catch{}},fp=e=>e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/đ/g,"d").replace(/Đ/g,"d").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,""),Ov=()=>RS(Lv,{}),DS=e=>LS(Lv,e),OS=e=>Ov()[e]??0,Uc=()=>ud.map(e=>({...e,viewCount:OS(e.id)})),_S=(e,t)=>{const n=ud.filter(r=>r.category===e.id).length;return{id:e.id,name:e.name,slug:e.id,description:e.description,color:e.color,sortOrder:t+1,isActive:!0,postCount:n}},FS=()=>{const e=new Map;return ud.forEach(t=>{t.tags.forEach(n=>e.set(n,(e.get(n)??0)+1))}),Array.from(e.entries()).sort(([t],[n])=>t.localeCompare(n)).map(([t,n])=>({id:fp(t),name:t,slug:fp(t),postCount:n}))},_v=(e,t)=>{var n;return{id:e.id,title:t==="vi"?e.titleVi??e.title:e.title,titleVi:e.titleVi??void 0,slug:e.id,date:e.date,category:e.category,excerpt:t==="vi"?e.excerptVi??e.excerpt:e.excerpt,excerptVi:e.excerptVi??void 0,categorySlug:e.category,categoryName:((n=Ia.find(r=>r.id===e.category))==null?void 0:n.name)??e.category,tags:e.tags,coverImageUrl:void 0,featured:!!e.featured,readTime:t==="vi"?e.readTimeVi??e.readTime:e.readTime,readTimeVi:e.readTimeVi??void 0,readTimeMinutes:Number.parseInt(e.readTime,10)||Number.parseInt(e.readTimeVi??e.readTime,10)||5,viewCount:e.viewCount,publishedAt:e.date,createdAt:e.date,updatedAt:e.date,status:"Published"}},zS=(e,t)=>({..._v(e,t),content:t==="vi"?e.contentVi??e.content:e.content,contentVi:e.contentVi??void 0}),VS=e=>Uc().map(t=>_v(t,e)),kn={hasBackend:!1,getCachedPost(e){const t=Uc().find(n=>n.id===e);return t?{...t,...Rv(t,"en")}:void 0},async getPosts(e,t={}){const n=VS(e).filter(r=>t.featured===void 0?!0:r.featured===t.featured);return n.slice(0,t.pageSize??n.length)},async getPost(e,t){const n=Uc().find(r=>r.id===e);return n?zS(n,t):null},async incrementView(e){const t=Ov();return t[e]=(t[e]??0)+1,DS(t),{slug:e,viewCount:t[e]}},async getCategories(){return Ia.map(_S)},async getTags(){return FS()}},dd=({className:e,label:t="Loading"})=>s.jsx("div",{className:ut("flex min-h-56 items-center justify-center rounded-2xl border border-border/60 bg-card/70",e),"aria-busy":"true","aria-live":"polite",children:s.jsxs("div",{className:"flex items-center gap-3 text-sm text-muted-foreground",children:[s.jsx(a1,{className:"h-5 w-5 animate-spin text-primary"}),s.jsx("span",{children:t})]})}),qS=()=>{const{t:e,locale:t,language:n}=Re(),r=ur(),[i,o]=m.useState([]),[a,l]=m.useState(!0),c=u=>Ia.some(d=>d.id===u)?e(`category.${u}`):u;return m.useEffect(()=>{let u=!1;return(async()=>{l(!0);const h=await kn.getPosts(n,{featured:!0,pageSize:3});u||(o(h.slice(0,3)),l(!1))})().catch(()=>{u||l(!1)}),()=>{u=!0}},[n]),s.jsx(Ce.section,{className:"border-b border-border/70 py-20 md:py-28",variants:r?void 0:Ma,initial:r?!1:"hidden",whileInView:"visible",viewport:li,children:s.jsxs("div",{className:"container mx-auto px-4",children:[s.jsxs("div",{className:"mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end",children:[s.jsxs("div",{children:[s.jsx("p",{className:"eyebrow mb-4",children:e("home.notes.eyebrow")}),s.jsxs("h2",{className:"text-4xl md:text-6xl",children:[e("home.notes.title1"),s.jsx("br",{}),s.jsx("span",{className:"text-muted-foreground",children:e("home.notes.title2")})]})]}),s.jsxs(xe,{to:"/blog",className:"inline-flex items-center gap-2 font-mono text-xs text-primary",children:[e("home.notes.all")," ",s.jsx(Ac,{className:"h-4 w-4"})]})]}),a?s.jsx(dd,{className:"min-h-[28rem]",label:n==="vi"?"Đang tải":"Loading"}):s.jsx(Ce.div,{className:"grid gap-4 lg:grid-cols-[1.2fr_.8fr]",variants:r?void 0:si,children:i.map((u,d)=>s.jsxs(Ce.article,{variants:r?void 0:ai,className:`group journal-card p-6 md:p-8 ${d===0?"lg:row-span-2":""}`,children:[s.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 border-b border-border/70 pb-5 font-mono text-xs uppercase tracking-[.14em] text-muted-foreground",children:[s.jsxs("span",{className:"text-primary",children:["Note / 0",d+1]}),s.jsx("span",{children:c(u.category)})]}),s.jsx(xe,{to:`/blog/${u.id}`,className:"block",children:s.jsx("h3",{className:`mt-8 transition-colors group-hover:text-primary ${d===0?"max-w-2xl text-3xl md:text-5xl":"text-2xl"}`,children:u.title})}),s.jsx("p",{className:`mt-4 leading-relaxed text-muted-foreground ${d===0?"max-w-2xl text-base":"text-sm"}`,children:u.excerpt}),s.jsxs("div",{className:"mt-8 flex flex-wrap items-center gap-5 border-t border-border/70 pt-5 font-mono text-xs text-muted-foreground",children:[s.jsx("span",{children:new Date(u.date).toLocaleDateString(t)}),s.jsxs("span",{className:"flex items-center gap-1.5",children:[s.jsx(Gs,{className:"h-3 w-3"}),u.readTime]}),s.jsxs("span",{className:"flex items-center gap-1.5",children:[s.jsx(Ks,{className:"h-3 w-3"}),(u.viewCount??0).toLocaleString(t)]}),s.jsxs(xe,{to:`/blog/${u.id}`,className:"ml-auto flex items-center gap-1.5 text-primary",children:[e("home.notes.read")," ",s.jsx(Ac,{className:"h-3 w-3"})]})]})]},u.id))})]})})},BS=Wu("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function st({className:e,variant:t,...n}){return s.jsx("div",{className:ut(BS({variant:t}),e),...n})}const US=()=>{const{t:e}=Re(),t=ur(),n=Bc.filter(r=>r.featured).slice(0,3);return s.jsx(Ce.section,{className:"border-b border-border/70 py-20 md:py-28",variants:t?void 0:Ma,initial:t?!1:"hidden",whileInView:"visible",viewport:li,children:s.jsxs("div",{className:"container mx-auto px-4",children:[s.jsxs("div",{className:"mb-12 grid gap-6 md:grid-cols-[1fr_.7fr] md:items-end",children:[s.jsxs("div",{children:[s.jsx("p",{className:"eyebrow mb-4",children:e("home.work.eyebrow")}),s.jsxs("h2",{className:"text-4xl md:text-6xl",children:[e("home.work.title1"),s.jsx("br",{}),s.jsx("span",{className:"text-muted-foreground",children:e("home.work.title2")})]})]}),s.jsxs("div",{className:"md:justify-self-end",children:[s.jsx("p",{className:"mb-4 max-w-md text-sm leading-relaxed text-muted-foreground",children:e("home.work.desc")}),s.jsxs(xe,{to:"/projects",className:"inline-flex items-center gap-2 font-mono text-xs text-primary",children:[e("home.work.archive")," ",s.jsx(Ac,{className:"h-4 w-4"})]})]})]}),s.jsx(Ce.div,{className:"space-y-4",variants:t?void 0:si,children:n.map((r,i)=>s.jsxs(Ce.article,{variants:t?void 0:ai,className:"group journal-card grid gap-0 transition-transform duration-300 hover:-translate-y-1 md:grid-cols-[110px_1fr_1fr_auto]",children:[s.jsxs("div",{className:"flex items-center border-b border-border/70 p-5 font-mono text-4xl text-primary/70 md:border-b-0 md:border-r",children:["0",i+1]}),s.jsxs("div",{className:"border-b border-border/70 p-5 md:border-b-0 md:border-r md:p-7",children:[s.jsxs("p",{className:"mb-2 font-mono text-xs uppercase tracking-[.16em] text-muted-foreground",children:[e("home.work.case")," / ",r.id]}),s.jsx("h3",{className:"text-xl transition-colors group-hover:text-primary md:text-2xl",children:r.title}),s.jsx("p",{className:"mt-3 text-sm leading-relaxed text-muted-foreground",children:r.description})]}),s.jsxs("div",{className:"border-b border-border/70 p-5 md:border-b-0 md:border-r md:p-7",children:[s.jsx("p",{className:"mb-4 font-mono text-xs uppercase tracking-[.16em] text-muted-foreground",children:e("home.work.tools")}),s.jsx("div",{className:"flex flex-wrap gap-2.5",children:r.technologies.map(o=>s.jsx(st,{variant:"secondary",className:"min-h-8 rounded-md border border-primary/25 bg-primary/[.08] px-3 py-1.5 font-mono text-[11px] font-semibold tracking-[.04em] text-foreground shadow-sm",children:o},o))})]}),s.jsxs("div",{className:"flex items-center gap-2 p-5 md:flex-col md:justify-center",children:[r.github&&s.jsx("a",{href:r.github,target:"_blank",rel:"noreferrer","aria-label":"Source code",className:"rounded-lg border border-border p-3 text-muted-foreground transition-colors hover:border-primary hover:text-primary",children:s.jsx(Fr,{className:"h-4 w-4"})}),r.demo&&s.jsx("a",{href:r.demo,target:"_blank",rel:"noreferrer","aria-label":"Live demo",className:"rounded-lg border border-border p-3 text-muted-foreground transition-colors hover:border-primary hover:text-primary",children:s.jsx(Gt,{className:"h-4 w-4"})})]})]},r.id))})]})})},$S=()=>{const{t:e}=Re(),t=ur();return s.jsxs(rr,{children:[s.jsx(YC,{}),s.jsx(US,{}),s.jsx(qS,{}),s.jsx(JC,{}),s.jsx(Ce.section,{className:"py-20 md:py-28",variants:t?void 0:Ma,initial:t?!1:"hidden",whileInView:"visible",viewport:li,children:s.jsx("div",{className:"container mx-auto px-4",children:s.jsxs("div",{className:"journal-card grid gap-8 p-7 md:grid-cols-[.45fr_1fr] md:p-12",children:[s.jsxs("div",{children:[s.jsx("p",{className:"eyebrow mb-4",children:e("home.principle")}),s.jsx("p",{className:"font-mono text-xs leading-relaxed text-muted-foreground",children:"build → observe → explain → improve"})]}),s.jsx("blockquote",{className:"text-2xl leading-tight md:text-4xl",children:e("home.quote")})]})})})]})},vs=m.forwardRef(({className:e,type:t,...n},r)=>s.jsx("input",{type:t,className:ut("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",e),ref:r,...n}));vs.displayName="Input";var kl=0;function HS(){m.useEffect(()=>{const e=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",e[0]??gp()),document.body.insertAdjacentElement("beforeend",e[1]??gp()),kl++,()=>{kl===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(t=>t.remove()),kl--}},[])}function gp(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}var Cl="focusScope.autoFocusOnMount",Sl="focusScope.autoFocusOnUnmount",vp={bubbles:!1,cancelable:!0},WS="FocusScope",Fv=m.forwardRef((e,t)=>{const{loop:n=!1,trapped:r=!1,onMountAutoFocus:i,onUnmountAutoFocus:o,...a}=e,[l,c]=m.useState(null),u=Ot(i),d=Ot(o),h=m.useRef(null),p=He(t,v=>c(v)),y=m.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;m.useEffect(()=>{if(r){let v=function(x){if(y.paused||!l)return;const w=x.target;l.contains(w)?h.current=w:cn(h.current,{select:!0})},b=function(x){if(y.paused||!l)return;const w=x.relatedTarget;w!==null&&(l.contains(w)||cn(h.current,{select:!0}))},g=function(x){if(document.activeElement===document.body)for(const C of x)C.removedNodes.length>0&&cn(l)};document.addEventListener("focusin",v),document.addEventListener("focusout",b);const f=new MutationObserver(g);return l&&f.observe(l,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",v),document.removeEventListener("focusout",b),f.disconnect()}}},[r,l,y.paused]),m.useEffect(()=>{if(l){xp.add(y);const v=document.activeElement;if(!l.contains(v)){const g=new CustomEvent(Cl,vp);l.addEventListener(Cl,u),l.dispatchEvent(g),g.defaultPrevented||(QS(JS(zv(l)),{select:!0}),document.activeElement===v&&cn(l))}return()=>{l.removeEventListener(Cl,u),setTimeout(()=>{const g=new CustomEvent(Sl,vp);l.addEventListener(Sl,d),l.dispatchEvent(g),g.defaultPrevented||cn(v??document.body,{select:!0}),l.removeEventListener(Sl,d),xp.remove(y)},0)}}},[l,u,d,y]);const k=m.useCallback(v=>{if(!n&&!r||y.paused)return;const b=v.key==="Tab"&&!v.altKey&&!v.ctrlKey&&!v.metaKey,g=document.activeElement;if(b&&g){const f=v.currentTarget,[x,w]=GS(f);x&&w?!v.shiftKey&&g===w?(v.preventDefault(),n&&cn(x,{select:!0})):v.shiftKey&&g===x&&(v.preventDefault(),n&&cn(w,{select:!0})):g===f&&v.preventDefault()}},[n,r,y.paused]);return s.jsx(Pe.div,{tabIndex:-1,...a,ref:p,onKeyDown:k})});Fv.displayName=WS;function QS(e,{select:t=!1}={}){const n=document.activeElement;for(const r of e)if(cn(r,{select:t}),document.activeElement!==n)return}function GS(e){const t=zv(e),n=yp(t,e),r=yp(t.reverse(),e);return[n,r]}function zv(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const i=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||i?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function yp(e,t){for(const n of e)if(!KS(n,{upTo:t}))return n}function KS(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function YS(e){return e instanceof HTMLInputElement&&"select"in e}function cn(e,{select:t=!1}={}){if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&YS(e)&&t&&e.select()}}var xp=XS();function XS(){let e=[];return{add(t){const n=e[0];t!==n&&(n==null||n.pause()),e=wp(e,t),e.unshift(t)},remove(t){var n;e=wp(e,t),(n=e[0])==null||n.resume()}}}function wp(e,t){const n=[...e],r=n.indexOf(t);return r!==-1&&n.splice(r,1),n}function JS(e){return e.filter(t=>t.tagName!=="A")}var ZS=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},fr=new WeakMap,Zo=new WeakMap,es={},Nl=0,Vv=function(e){return e&&(e.host||Vv(e.parentNode))},eN=function(e,t){return t.map(function(n){if(e.contains(n))return n;var r=Vv(n);return r&&e.contains(r)?r:(console.error("aria-hidden",n,"in not contained inside",e,". Doing nothing"),null)}).filter(function(n){return!!n})},tN=function(e,t,n,r){var i=eN(t,Array.isArray(e)?e:[e]);es[n]||(es[n]=new WeakMap);var o=es[n],a=[],l=new Set,c=new Set(i),u=function(h){!h||l.has(h)||(l.add(h),u(h.parentNode))};i.forEach(u);var d=function(h){!h||c.has(h)||Array.prototype.forEach.call(h.children,function(p){if(l.has(p))d(p);else try{var y=p.getAttribute(r),k=y!==null&&y!=="false",v=(fr.get(p)||0)+1,b=(o.get(p)||0)+1;fr.set(p,v),o.set(p,b),a.push(p),v===1&&k&&Zo.set(p,!0),b===1&&p.setAttribute(n,"true"),k||p.setAttribute(r,"true")}catch(g){console.error("aria-hidden: cannot operate on ",p,g)}})};return d(t),l.clear(),Nl++,function(){a.forEach(function(h){var p=fr.get(h)-1,y=o.get(h)-1;fr.set(h,p),o.set(h,y),p||(Zo.has(h)||h.removeAttribute(r),Zo.delete(h)),y||h.removeAttribute(n)}),Nl--,Nl||(fr=new WeakMap,fr=new WeakMap,Zo=new WeakMap,es={})}},nN=function(e,t,n){n===void 0&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),i=ZS(e);return i?(r.push.apply(r,Array.from(i.querySelectorAll("[aria-live]"))),tN(r,i,n,"aria-hidden")):function(){return null}},It=function(){return It=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},It.apply(this,arguments)};function qv(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function rN(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var ys="right-scroll-bar-position",xs="width-before-scroll-bar",iN="with-scroll-bars-hidden",oN="--removed-body-scroll-bar-size";function Pl(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function sN(e,t){var n=m.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(r){var i=n.value;i!==r&&(n.value=r,n.callback(r,i))}}}})[0];return n.callback=t,n.facade}var aN=typeof window<"u"?m.useLayoutEffect:m.useEffect,bp=new WeakMap;function lN(e,t){var n=sN(null,function(r){return e.forEach(function(i){return Pl(i,r)})});return aN(function(){var r=bp.get(n);if(r){var i=new Set(r),o=new Set(e),a=n.current;i.forEach(function(l){o.has(l)||Pl(l,null)}),o.forEach(function(l){i.has(l)||Pl(l,a)})}bp.set(n,e)},[e]),n}function cN(e){return e}function uN(e,t){t===void 0&&(t=cN);var n=[],r=!1,i={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(o){var a=t(o,r);return n.push(a),function(){n=n.filter(function(l){return l!==a})}},assignSyncMedium:function(o){for(r=!0;n.length;){var a=n;n=[],a.forEach(o)}n={push:function(l){return o(l)},filter:function(){return n}}},assignMedium:function(o){r=!0;var a=[];if(n.length){var l=n;n=[],l.forEach(o),a=n}var c=function(){var d=a;a=[],d.forEach(o)},u=function(){return Promise.resolve().then(c)};u(),n={push:function(d){a.push(d),u()},filter:function(d){return a=a.filter(d),n}}}};return i}function dN(e){e===void 0&&(e={});var t=uN(null);return t.options=It({async:!0,ssr:!1},e),t}var Bv=function(e){var t=e.sideCar,n=qv(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw new Error("Sidecar medium not found");return m.createElement(r,It({},n))};Bv.isSideCarExport=!0;function hN(e,t){return e.useMedium(t),Bv}var Uv=dN(),Tl=function(){},Ra=m.forwardRef(function(e,t){var n=m.useRef(null),r=m.useState({onScrollCapture:Tl,onWheelCapture:Tl,onTouchMoveCapture:Tl}),i=r[0],o=r[1],a=e.forwardProps,l=e.children,c=e.className,u=e.removeScrollBar,d=e.enabled,h=e.shards,p=e.sideCar,y=e.noRelative,k=e.noIsolation,v=e.inert,b=e.allowPinchZoom,g=e.as,f=g===void 0?"div":g,x=e.gapMode,w=qv(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),C=p,N=lN([n,t]),P=It(It({},w),i);return m.createElement(m.Fragment,null,d&&m.createElement(C,{sideCar:Uv,removeScrollBar:u,shards:h,noRelative:y,noIsolation:k,inert:v,setCallbacks:o,allowPinchZoom:!!b,lockRef:n,gapMode:x}),a?m.cloneElement(m.Children.only(l),It(It({},P),{ref:N})):m.createElement(f,It({},P,{className:c,ref:N}),l))});Ra.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};Ra.classNames={fullWidth:xs,zeroRight:ys};var pN=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function mN(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=pN();return t&&e.setAttribute("nonce",t),e}function fN(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function gN(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var vN=function(){var e=0,t=null;return{add:function(n){e==0&&(t=mN())&&(fN(t,n),gN(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},yN=function(){var e=vN();return function(t,n){m.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},$v=function(){var e=yN(),t=function(n){var r=n.styles,i=n.dynamic;return e(r,i),null};return t},xN={left:0,top:0,right:0,gap:0},jl=function(e){return parseInt(e||"",10)||0},wN=function(e){var t=window.getComputedStyle(document.body),n=t[e==="padding"?"paddingLeft":"marginLeft"],r=t[e==="padding"?"paddingTop":"marginTop"],i=t[e==="padding"?"paddingRight":"marginRight"];return[jl(n),jl(r),jl(i)]},bN=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return xN;var t=wN(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},kN=$v(),qr="data-scroll-locked",CN=function(e,t,n,r){var i=e.left,o=e.top,a=e.right,l=e.gap;return n===void 0&&(n="margin"),`
  .`.concat(iN,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(l,"px ").concat(r,`;
  }
  body[`).concat(qr,`] {
    overflow: hidden `).concat(r,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(r,";"),n==="margin"&&`
    padding-left: `.concat(i,`px;
    padding-top: `).concat(o,`px;
    padding-right: `).concat(a,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(l,"px ").concat(r,`;
    `),n==="padding"&&"padding-right: ".concat(l,"px ").concat(r,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(ys,` {
    right: `).concat(l,"px ").concat(r,`;
  }
  
  .`).concat(xs,` {
    margin-right: `).concat(l,"px ").concat(r,`;
  }
  
  .`).concat(ys," .").concat(ys,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(xs," .").concat(xs,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body[`).concat(qr,`] {
    `).concat(oN,": ").concat(l,`px;
  }
`)},kp=function(){var e=parseInt(document.body.getAttribute(qr)||"0",10);return isFinite(e)?e:0},SN=function(){m.useEffect(function(){return document.body.setAttribute(qr,(kp()+1).toString()),function(){var e=kp()-1;e<=0?document.body.removeAttribute(qr):document.body.setAttribute(qr,e.toString())}},[])},NN=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,i=r===void 0?"margin":r;SN();var o=m.useMemo(function(){return bN(i)},[i]);return m.createElement(kN,{styles:CN(o,!t,i,n?"":"!important")})},$c=!1;if(typeof window<"u")try{var ts=Object.defineProperty({},"passive",{get:function(){return $c=!0,!0}});window.addEventListener("test",ts,ts),window.removeEventListener("test",ts,ts)}catch{$c=!1}var gr=$c?{passive:!1}:!1,PN=function(e){return e.tagName==="TEXTAREA"},Hv=function(e,t){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return n[t]!=="hidden"&&!(n.overflowY===n.overflowX&&!PN(e)&&n[t]==="visible")},TN=function(e){return Hv(e,"overflowY")},jN=function(e){return Hv(e,"overflowX")},Cp=function(e,t){var n=t.ownerDocument,r=t;do{typeof ShadowRoot<"u"&&r instanceof ShadowRoot&&(r=r.host);var i=Wv(e,r);if(i){var o=Qv(e,r),a=o[1],l=o[2];if(a>l)return!0}r=r.parentNode}while(r&&r!==n.body);return!1},EN=function(e){var t=e.scrollTop,n=e.scrollHeight,r=e.clientHeight;return[t,n,r]},AN=function(e){var t=e.scrollLeft,n=e.scrollWidth,r=e.clientWidth;return[t,n,r]},Wv=function(e,t){return e==="v"?TN(t):jN(t)},Qv=function(e,t){return e==="v"?EN(t):AN(t)},IN=function(e,t){return e==="h"&&t==="rtl"?-1:1},MN=function(e,t,n,r,i){var o=IN(e,window.getComputedStyle(t).direction),a=o*r,l=n.target,c=t.contains(l),u=!1,d=a>0,h=0,p=0;do{if(!l)break;var y=Qv(e,l),k=y[0],v=y[1],b=y[2],g=v-b-o*k;(k||g)&&Wv(e,l)&&(h+=g,p+=k);var f=l.parentNode;l=f&&f.nodeType===Node.DOCUMENT_FRAGMENT_NODE?f.host:f}while(!c&&l!==document.body||c&&(t.contains(l)||t===l));return(d&&(Math.abs(h)<1||!i)||!d&&(Math.abs(p)<1||!i))&&(u=!0),u},ns=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},Sp=function(e){return[e.deltaX,e.deltaY]},Np=function(e){return e&&"current"in e?e.current:e},RN=function(e,t){return e[0]===t[0]&&e[1]===t[1]},LN=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},DN=0,vr=[];function ON(e){var t=m.useRef([]),n=m.useRef([0,0]),r=m.useRef(),i=m.useState(DN++)[0],o=m.useState($v)[0],a=m.useRef(e);m.useEffect(function(){a.current=e},[e]),m.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(i));var v=rN([e.lockRef.current],(e.shards||[]).map(Np),!0).filter(Boolean);return v.forEach(function(b){return b.classList.add("allow-interactivity-".concat(i))}),function(){document.body.classList.remove("block-interactivity-".concat(i)),v.forEach(function(b){return b.classList.remove("allow-interactivity-".concat(i))})}}},[e.inert,e.lockRef.current,e.shards]);var l=m.useCallback(function(v,b){if("touches"in v&&v.touches.length===2||v.type==="wheel"&&v.ctrlKey)return!a.current.allowPinchZoom;var g=ns(v),f=n.current,x="deltaX"in v?v.deltaX:f[0]-g[0],w="deltaY"in v?v.deltaY:f[1]-g[1],C,N=v.target,P=Math.abs(x)>Math.abs(w)?"h":"v";if("touches"in v&&P==="h"&&N.type==="range")return!1;var S=Cp(P,N);if(!S)return!0;if(S?C=P:(C=P==="v"?"h":"v",S=Cp(P,N)),!S)return!1;if(!r.current&&"changedTouches"in v&&(x||w)&&(r.current=C),!C)return!0;var j=r.current||C;return MN(j,b,v,j==="h"?x:w,!0)},[]),c=m.useCallback(function(v){var b=v;if(!(!vr.length||vr[vr.length-1]!==o)){var g="deltaY"in b?Sp(b):ns(b),f=t.current.filter(function(C){return C.name===b.type&&(C.target===b.target||b.target===C.shadowParent)&&RN(C.delta,g)})[0];if(f&&f.should){b.cancelable&&b.preventDefault();return}if(!f){var x=(a.current.shards||[]).map(Np).filter(Boolean).filter(function(C){return C.contains(b.target)}),w=x.length>0?l(b,x[0]):!a.current.noIsolation;w&&b.cancelable&&b.preventDefault()}}},[]),u=m.useCallback(function(v,b,g,f){var x={name:v,delta:b,target:g,should:f,shadowParent:_N(g)};t.current.push(x),setTimeout(function(){t.current=t.current.filter(function(w){return w!==x})},1)},[]),d=m.useCallback(function(v){n.current=ns(v),r.current=void 0},[]),h=m.useCallback(function(v){u(v.type,Sp(v),v.target,l(v,e.lockRef.current))},[]),p=m.useCallback(function(v){u(v.type,ns(v),v.target,l(v,e.lockRef.current))},[]);m.useEffect(function(){return vr.push(o),e.setCallbacks({onScrollCapture:h,onWheelCapture:h,onTouchMoveCapture:p}),document.addEventListener("wheel",c,gr),document.addEventListener("touchmove",c,gr),document.addEventListener("touchstart",d,gr),function(){vr=vr.filter(function(v){return v!==o}),document.removeEventListener("wheel",c,gr),document.removeEventListener("touchmove",c,gr),document.removeEventListener("touchstart",d,gr)}},[]);var y=e.removeScrollBar,k=e.inert;return m.createElement(m.Fragment,null,k?m.createElement(o,{styles:LN(i)}):null,y?m.createElement(NN,{noRelative:e.noRelative,gapMode:e.gapMode}):null)}function _N(e){for(var t=null;e!==null;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}const FN=hN(Uv,ON);var Gv=m.forwardRef(function(e,t){return m.createElement(Ra,It({},e,{ref:t,sideCar:FN}))});Gv.classNames=Ra.classNames;var La="Popover",[Kv,EP]=Co(La,[Na]),To=Na(),[zN,Vn]=Kv(La),Yv=e=>{const{__scopePopover:t,children:n,open:r,defaultOpen:i,onOpenChange:o,modal:a=!1}=e,l=To(t),c=m.useRef(null),[u,d]=m.useState(!1),[h,p]=Bu({prop:r,defaultProp:i??!1,onChange:o,caller:La});return s.jsx(lv,{...l,children:s.jsx(zN,{scope:t,contentId:Vg(),triggerRef:c,open:h,onOpenChange:p,onOpenToggle:m.useCallback(()=>p(y=>!y),[p]),hasCustomAnchor:u,onCustomAnchorAdd:m.useCallback(()=>d(!0),[]),onCustomAnchorRemove:m.useCallback(()=>d(!1),[]),modal:a,children:n})})};Yv.displayName=La;var Xv="PopoverAnchor",VN=m.forwardRef((e,t)=>{const{__scopePopover:n,...r}=e,i=Vn(Xv,n),o=To(n),{onCustomAnchorAdd:a,onCustomAnchorRemove:l}=i;return m.useEffect(()=>(a(),()=>l()),[a,l]),s.jsx(id,{...o,...r,ref:t})});VN.displayName=Xv;var Jv="PopoverTrigger",Zv=m.forwardRef((e,t)=>{const{__scopePopover:n,...r}=e,i=Vn(Jv,n),o=To(n),a=He(t,i.triggerRef),l=s.jsx(Pe.button,{type:"button","aria-haspopup":"dialog","aria-expanded":i.open,"aria-controls":i.contentId,"data-state":iy(i.open),...r,ref:a,onClick:oe(e.onClick,i.onOpenToggle)});return i.hasCustomAnchor?l:s.jsx(id,{asChild:!0,...o,children:l})});Zv.displayName=Jv;var hd="PopoverPortal",[qN,BN]=Kv(hd,{forceMount:void 0}),ey=e=>{const{__scopePopover:t,forceMount:n,children:r,container:i}=e,o=Vn(hd,t);return s.jsx(qN,{scope:t,forceMount:n,children:s.jsx(So,{present:n||o.open,children:s.jsx(qu,{asChild:!0,container:i,children:r})})})};ey.displayName=hd;var ci="PopoverContent",ty=m.forwardRef((e,t)=>{const n=BN(ci,e.__scopePopover),{forceMount:r=n.forceMount,...i}=e,o=Vn(ci,e.__scopePopover);return s.jsx(So,{present:r||o.open,children:o.modal?s.jsx($N,{...i,ref:t}):s.jsx(HN,{...i,ref:t})})});ty.displayName=ci;var UN=lo("PopoverContent.RemoveScroll"),$N=m.forwardRef((e,t)=>{const n=Vn(ci,e.__scopePopover),r=m.useRef(null),i=He(t,r),o=m.useRef(!1);return m.useEffect(()=>{const a=r.current;if(a)return nN(a)},[]),s.jsx(Gv,{as:UN,allowPinchZoom:!0,children:s.jsx(ny,{...e,ref:i,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:oe(e.onCloseAutoFocus,a=>{var l;a.preventDefault(),o.current||(l=n.triggerRef.current)==null||l.focus()}),onPointerDownOutside:oe(e.onPointerDownOutside,a=>{const l=a.detail.originalEvent,c=l.button===0&&l.ctrlKey===!0,u=l.button===2||c;o.current=u},{checkForDefaultPrevented:!1}),onFocusOutside:oe(e.onFocusOutside,a=>a.preventDefault(),{checkForDefaultPrevented:!1})})})}),HN=m.forwardRef((e,t)=>{const n=Vn(ci,e.__scopePopover),r=m.useRef(!1),i=m.useRef(!1);return s.jsx(ny,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:o=>{var a,l;(a=e.onCloseAutoFocus)==null||a.call(e,o),o.defaultPrevented||(r.current||(l=n.triggerRef.current)==null||l.focus(),o.preventDefault()),r.current=!1,i.current=!1},onInteractOutside:o=>{var c,u;(c=e.onInteractOutside)==null||c.call(e,o),o.defaultPrevented||(r.current=!0,o.detail.originalEvent.type==="pointerdown"&&(i.current=!0));const a=o.target;((u=n.triggerRef.current)==null?void 0:u.contains(a))&&o.preventDefault(),o.detail.originalEvent.type==="focusin"&&i.current&&o.preventDefault()}})}),ny=m.forwardRef((e,t)=>{const{__scopePopover:n,trapFocus:r,onOpenAutoFocus:i,onCloseAutoFocus:o,disableOutsidePointerEvents:a,onEscapeKeyDown:l,onPointerDownOutside:c,onFocusOutside:u,onInteractOutside:d,...h}=e,p=Vn(ci,n),y=To(n);return HS(),s.jsx(Fv,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:i,onUnmountAutoFocus:o,children:s.jsx(xa,{asChild:!0,disableOutsidePointerEvents:a,onInteractOutside:d,onEscapeKeyDown:l,onPointerDownOutside:c,onFocusOutside:u,onDismiss:()=>p.onOpenChange(!1),children:s.jsx(cv,{"data-state":iy(p.open),role:"dialog",id:p.contentId,...y,...h,ref:t,style:{...h.style,"--radix-popover-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-popover-content-available-width":"var(--radix-popper-available-width)","--radix-popover-content-available-height":"var(--radix-popper-available-height)","--radix-popover-trigger-width":"var(--radix-popper-anchor-width)","--radix-popover-trigger-height":"var(--radix-popper-anchor-height)"}})})})}),ry="PopoverClose",WN=m.forwardRef((e,t)=>{const{__scopePopover:n,...r}=e,i=Vn(ry,n);return s.jsx(Pe.button,{type:"button",...r,ref:t,onClick:oe(e.onClick,()=>i.onOpenChange(!1))})});WN.displayName=ry;var QN="PopoverArrow",GN=m.forwardRef((e,t)=>{const{__scopePopover:n,...r}=e,i=To(n);return s.jsx(uv,{...i,...r,ref:t})});GN.displayName=QN;function iy(e){return e?"open":"closed"}var KN=Yv,YN=Zv,XN=ey,oy=ty;const Pp=KN,Tp=YN,Hc=m.forwardRef(({className:e,align:t="center",sideOffset:n=4,...r},i)=>s.jsx(XN,{children:s.jsx(oy,{ref:i,align:t,sideOffset:n,className:ut("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...r})}));Hc.displayName=oy.displayName;const JN=()=>{const{t:e,locale:t,language:n}=Re(),r=ur(),i=St(),[o,a]=Fw(),l=m.useRef(!1),[c,u]=m.useState(""),[d,h]=m.useState([]),[p,y]=m.useState([]),[k,v]=m.useState([]),[b,g]=m.useState(""),[f,x]=m.useState(""),[w,C]=m.useState(!0),N=o.get("category")||"all",P=o.get("tag")||"",S=9,j=Math.max(1,Number(o.get("page"))||1),A=`${i.pathname}${i.search}`,O=`blog-scroll:${A}`,R=m.useMemo(()=>P.split(",").map(I=>I.trim()).filter(Boolean),[P]),H=m.useMemo(()=>k.map(I=>({name:I.name,count:I.postCount})),[k]),D=m.useMemo(()=>{const I=d.reduce((G,pe)=>G+(pe.viewCount??0),0),F=d.reduce((G,pe)=>G+(pe.readTimeMinutes||0),0);return{totalViews:I,totalReadMinutes:F}},[d]),W=m.useMemo(()=>{const I=b.trim().toLowerCase();return I?p.filter(F=>[F.name,F.slug,F.description??""].some(G=>G.toLowerCase().includes(I))):p},[p,b]),U=m.useMemo(()=>{const I=f.trim().toLowerCase();return I?H.filter(F=>F.name.toLowerCase().includes(I)):H},[H,f]),Q=m.useMemo(()=>{const I=new Map;return p.forEach(F=>I.set(F.slug,F.postCount)),I},[p]),T=m.useMemo(()=>d.filter(I=>{const F=N==="all"||I.category===N,G=R.length===0||R.every(dt=>I.tags.some(Da=>Da.toLowerCase()===dt.toLowerCase())),pe=I.title.toLowerCase().includes(c.toLowerCase())||I.excerpt.toLowerCase().includes(c.toLowerCase())||I.tags.some(dt=>dt.toLowerCase().includes(c.toLowerCase()));return F&&G&&pe}).sort((I,F)=>new Date(F.date).getTime()-new Date(I.date).getTime()),[d,N,R,c]),L=Math.max(1,Math.ceil(T.length/S)),z=m.useMemo(()=>T.slice((j-1)*S,j*S),[j,T]),$=m.useMemo(()=>{const I=Math.max(1,Math.min(j-2,L-4)),F=Math.min(L,I+4);return Array.from({length:F-I+1},(G,pe)=>I+pe)},[j,L]),Z=I=>{var F;return((F=p.find(G=>G.slug===I))==null?void 0:F.name)||e(`category.${I}`)||I},We=I=>{const F=`${I.slug} ${I.name}`.toLowerCase();return F.includes("language")?Yb:F.includes("framework")||F.includes("librar")?qb:F.includes("architecture")?d1:F.includes("pattern")?p1:F.includes("practice")?Vb:F.includes("roadmap")?l1:F.includes("learning")?Fh:hl},Le=I=>{const F=new URLSearchParams(o);I==="all"?F.delete("category"):F.set("category",I),F.delete("page"),a(F)},rn=I=>{const F=new URLSearchParams(o);I.length===0?F.delete("tag"):F.set("tag",I.join(",")),F.delete("page"),a(F)},Qe=I=>{const G=R.some(pe=>pe.toLowerCase()===I.toLowerCase())?R.filter(pe=>pe.toLowerCase()!==I.toLowerCase()):[...R,I];rn(G)},zt=()=>{a({}),u("")},jo=I=>{u(I);const F=new URLSearchParams(o);F.delete("page"),a(F)},qn=I=>{const F=Math.min(Math.max(1,I),L),G=new URLSearchParams(o);F===1?G.delete("page"):G.set("page",String(F)),a(G),window.scrollTo({top:0,behavior:"smooth"})},gi=()=>{const I=window.scrollY;window.sessionStorage.setItem(O,String(I))};return m.useEffect(()=>{let I=!1;return(async()=>{C(!0);const[G,pe,dt]=await Promise.all([kn.getPosts(n,{pageSize:100}),kn.getCategories(),kn.getTags()]);I||(h(G),y(pe),v(dt),C(!1))})().catch(()=>{I||C(!1)}),()=>{I=!0}},[n]),m.useEffect(()=>{w||T.length===0||j>L&&qn(L)},[j,T.length,w,L]),m.useEffect(()=>{l.current=!1},[A]),m.useEffect(()=>{if(w||l.current)return;const I=window.sessionStorage.getItem(O);if(!I)return;const F=Number(I)||0;l.current=!0,window.sessionStorage.removeItem(O);const G=()=>window.scrollTo({top:F,behavior:"instant"});window.requestAnimationFrame(()=>{G(),window.requestAnimationFrame(G)});const pe=[80,180,360].map(dt=>window.setTimeout(G,dt));return()=>pe.forEach(dt=>window.clearTimeout(dt))},[O,w,z.length]),s.jsx(rr,{children:s.jsxs("div",{className:"container mx-auto px-4 py-12",children:[s.jsxs("div",{className:"mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between",children:[s.jsxs("div",{className:"max-w-3xl",children:[s.jsx("h1",{className:"mb-4 text-4xl font-bold md:text-5xl",children:s.jsx("span",{className:"text-gradient",children:e("blog.title")})}),s.jsx("p",{className:"text-lg text-muted-foreground md:text-xl",children:e("blog.desc")})]}),!w&&s.jsxs("div",{className:"grid grid-cols-2 gap-2 sm:grid-cols-4 lg:w-[30rem]",children:[s.jsxs("div",{className:"rounded-lg border border-border/70 bg-background/75 px-3 py-2.5 shadow-sm",children:[s.jsxs("div",{className:"flex items-center gap-1.5 text-xs text-muted-foreground",children:[s.jsx(Ks,{className:"h-3.5 w-3.5 text-primary"}),n==="vi"?"Lượt xem":"Views"]}),s.jsx("div",{className:"mt-1 text-lg font-semibold",children:D.totalViews.toLocaleString(t)})]}),s.jsxs("div",{className:"rounded-lg border border-border/70 bg-background/75 px-3 py-2.5 shadow-sm",children:[s.jsxs("div",{className:"flex items-center gap-1.5 text-xs text-muted-foreground",children:[s.jsx(Fh,{className:"h-3.5 w-3.5 text-primary"}),n==="vi"?"Bài":"Posts"]}),s.jsx("div",{className:"mt-1 text-lg font-semibold",children:d.length.toLocaleString(t)})]}),s.jsxs("div",{className:"rounded-lg border border-border/70 bg-background/75 px-3 py-2.5 shadow-sm",children:[s.jsxs("div",{className:"flex items-center gap-1.5 text-xs text-muted-foreground",children:[s.jsx(Gs,{className:"h-3.5 w-3.5 text-primary"}),n==="vi"?"Phút":"Minutes"]}),s.jsx("div",{className:"mt-1 text-lg font-semibold",children:D.totalReadMinutes.toLocaleString(t)})]}),s.jsxs("div",{className:"rounded-lg border border-border/70 bg-background/75 px-3 py-2.5 shadow-sm",children:[s.jsxs("div",{className:"flex items-center gap-1.5 text-xs text-muted-foreground",children:[s.jsx(hl,{className:"h-3.5 w-3.5 text-primary"}),n==="vi"?"Mục":"Topics"]}),s.jsx("div",{className:"mt-1 text-lg font-semibold",children:p.length.toLocaleString(t)})]})]})]}),s.jsxs("div",{className:"mb-8 rounded-xl border border-border/70 bg-background/75 p-2.5 shadow-sm backdrop-blur md:p-3",children:[s.jsxs("div",{className:"flex flex-col gap-2.5 lg:flex-row lg:items-center",children:[s.jsxs("div",{className:"relative w-full lg:max-w-sm",children:[s.jsx(pl,{className:"absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"}),s.jsx(vs,{type:"search",placeholder:e("blog.search"),value:c,onChange:I=>jo(I.target.value),className:"h-10 rounded-lg border-border/70 bg-background/85 pl-9 text-sm shadow-sm"})]}),s.jsxs("div",{className:"flex flex-wrap items-center gap-2 lg:ml-auto",children:[s.jsxs(Pp,{children:[s.jsx(Tp,{asChild:!0,children:s.jsxs(X,{variant:"outline",size:"sm",className:`h-10 min-w-[170px] justify-between rounded-full border-border/70 bg-background/85 px-3 shadow-sm ${N!=="all"?"border-primary/40 ring-1 ring-primary/15":""}`,children:[s.jsxs("span",{className:"flex min-w-0 items-center gap-2",children:[s.jsx(Vh,{className:"h-4 w-4 shrink-0 text-muted-foreground"}),s.jsxs("span",{className:"min-w-0 truncate text-sm",children:[s.jsxs("span",{className:"text-muted-foreground",children:[e("blog.filterCategory"),": "]}),s.jsx("span",{className:"font-medium text-foreground",children:N==="all"?e("blog.all"):Z(N)})]})]}),s.jsx(zh,{className:"h-4 w-4 shrink-0 opacity-70"})]})}),s.jsxs(Hc,{align:"end",className:"w-[min(22rem,calc(100vw-2rem))] rounded-xl p-2",children:[s.jsx("div",{className:"px-2 pb-2 pt-1 text-xs font-medium uppercase text-muted-foreground",children:e("blog.filterCategory")}),s.jsxs("div",{className:"relative mb-2",children:[s.jsx(pl,{className:"absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"}),s.jsx(vs,{type:"search",value:b,onChange:I=>g(I.target.value),onKeyDown:I=>I.stopPropagation(),placeholder:n==="vi"?"Tìm danh mục":"Search categories",className:"h-9 rounded-lg border-border/70 bg-background/85 pl-9 text-sm"})]}),s.jsxs("div",{className:"space-y-1",children:[s.jsxs("button",{type:"button",onClick:()=>Le("all"),className:`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors ${N==="all"?"bg-primary/10 text-primary ring-1 ring-primary/20":"text-foreground hover:bg-muted"}`,children:[s.jsx(hl,{className:"h-4 w-4 shrink-0 opacity-75"}),s.jsx("span",{className:"min-w-0 flex-1 truncate",children:e("blog.all")}),s.jsx("span",{className:"rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground",children:d.length}),N==="all"&&s.jsx(fs,{className:"h-4 w-4"})]}),W.map(I=>{const F=N===I.slug,G=We(I);return s.jsxs("button",{type:"button",onClick:()=>Le(I.slug),className:`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors ${F?"bg-primary/10 text-primary ring-1 ring-primary/20":"text-foreground hover:bg-muted"}`,children:[s.jsx(G,{className:"h-4 w-4 shrink-0 opacity-75"}),s.jsx("span",{className:"min-w-0 flex-1 truncate",children:I.name}),s.jsx("span",{className:"rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground",children:Q.get(I.slug)??0}),F&&s.jsx(fs,{className:"h-4 w-4"})]},I.id)}),W.length===0&&s.jsx("div",{className:"px-3 py-6 text-center text-sm text-muted-foreground",children:n==="vi"?"Không tìm thấy danh mục":"No categories found"})]})]})]}),s.jsxs(Pp,{children:[s.jsx(Tp,{asChild:!0,children:s.jsxs(X,{variant:"outline",size:"sm",className:`h-10 min-w-[145px] justify-between rounded-full border-border/70 bg-background/85 px-3 shadow-sm ${R.length>0?"border-primary/40 ring-1 ring-primary/15":""}`,children:[s.jsxs("span",{className:"flex min-w-0 items-center gap-2",children:[s.jsx(Mc,{className:"h-4 w-4 shrink-0 text-muted-foreground"}),s.jsxs("span",{className:"min-w-0 truncate text-sm",children:[s.jsxs("span",{className:"text-muted-foreground",children:[e("blog.filterTag"),": "]}),s.jsx("span",{className:"font-medium text-foreground",children:R.length>0?`${R.length} ${e("blog.selectedTags")}`:e("blog.allTags")})]})]}),s.jsx(zh,{className:"h-4 w-4 opacity-70"})]})}),s.jsxs(Hc,{align:"end",className:"w-[min(22rem,calc(100vw-2rem))] rounded-xl p-3",children:[s.jsxs("div",{className:"mb-3 flex items-center justify-between gap-3",children:[s.jsx("div",{className:"text-sm font-medium",children:e("blog.filterTag")}),R.length>0&&s.jsx(X,{variant:"ghost",size:"sm",onClick:()=>rn([]),className:"h-8 px-2 text-xs",children:e("blog.clearFilters")})]}),s.jsxs("div",{className:"relative mb-3",children:[s.jsx(pl,{className:"absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"}),s.jsx(vs,{type:"search",value:f,onChange:I=>x(I.target.value),onKeyDown:I=>I.stopPropagation(),placeholder:n==="vi"?"Tìm thẻ":"Search tags",className:"h-9 rounded-lg border-border/70 bg-background/85 pl-9 text-sm"})]}),s.jsxs("div",{className:"flex max-h-72 flex-wrap gap-2 overflow-y-auto pr-1",children:[U.map(I=>{const F=R.some(G=>G.toLowerCase()===I.name.toLowerCase());return s.jsxs(X,{variant:F?"default":"outline",size:"sm",onClick:()=>Qe(I.name),className:"h-8 gap-1.5 rounded-full px-2.5 text-xs",children:[F&&s.jsx(fs,{className:"h-3.5 w-3.5"}),I.name,s.jsx("span",{className:"rounded-full bg-background/40 px-1.5 py-0.5 text-[10px] text-current",children:I.count})]},I.name)}),U.length===0&&s.jsx("div",{className:"w-full px-3 py-6 text-center text-sm text-muted-foreground",children:n==="vi"?"Không tìm thấy thẻ":"No tags found"})]})]})]}),(N!=="all"||R.length>0||c)&&s.jsxs(X,{variant:"ghost",size:"sm",onClick:zt,className:"h-10 gap-2 rounded-full px-3",children:[s.jsx(Ys,{className:"h-4 w-4"}),e("blog.clearFilters")]})]})]}),R.length>0&&s.jsx("div",{className:"mt-2 flex flex-wrap items-center gap-1.5 border-t border-border/60 pt-2",children:R.map(I=>s.jsxs("button",{type:"button",onClick:()=>Qe(I),className:"inline-flex h-6 items-center gap-1 rounded-full border border-primary/25 bg-primary/10 px-2 text-[11px] font-medium text-primary transition-colors hover:bg-primary/15",children:[I,s.jsx(Ys,{className:"h-3 w-3"})]},I))})]}),w?s.jsx(dd,{className:"min-h-[36rem]",label:n==="vi"?"Đang tải":"Loading"}):T.length>0?s.jsxs(s.Fragment,{children:[s.jsx(Ce.div,{className:"grid grid-cols-1 items-start gap-6 md:grid-cols-2 lg:grid-cols-3",variants:r?void 0:si,initial:r?!1:"hidden",animate:"visible",children:z.map(I=>s.jsx(Ce.article,{variants:r?void 0:ai,className:"group card-gradient flex h-full flex-col overflow-hidden rounded-xl border border-border/50 transition-all duration-300 hover:border-primary/50",children:s.jsxs("div",{className:"flex h-full flex-col p-6",children:[s.jsxs("div",{className:"mb-4 flex min-h-7 flex-wrap items-center gap-2.5",children:[s.jsx(st,{variant:"secondary",className:"max-w-full truncate text-xs",children:Z(I.category)}),s.jsxs("div",{className:"flex items-center text-xs text-muted-foreground",children:[s.jsx(Gs,{className:"mr-1 h-4 w-4"}),I.readTime]}),s.jsxs("div",{className:"flex items-center text-xs text-muted-foreground",children:[s.jsx(Ks,{className:"mr-1 h-4 w-4"}),(I.viewCount??0).toLocaleString(t)]})]}),s.jsx(xe,{to:`/blog/${I.id}`,state:{from:A},onClick:gi,children:s.jsx("h2",{className:"mb-3 min-h-[3.5rem] text-xl font-semibold leading-7 line-clamp-2 transition-colors group-hover:text-primary",children:I.title})}),s.jsx("p",{className:"mb-4 min-h-[4.5rem] line-clamp-3 text-sm leading-6 text-muted-foreground",children:I.excerpt}),s.jsx("div",{className:"mb-5 flex h-7 gap-2 overflow-hidden",children:I.tags.slice(0,3).map(F=>{const G=R.some(pe=>pe.toLowerCase()===F.toLowerCase());return s.jsxs("button",{type:"button",onClick:()=>Qe(F),className:`inline-flex h-7 max-w-[8.75rem] shrink-0 items-center rounded px-2.5 py-1 text-xs transition-colors ${G?"bg-primary text-primary-foreground":"bg-muted text-muted-foreground hover:text-foreground"}`,children:[s.jsx(Mc,{className:"mr-1 h-3 w-3 shrink-0"}),s.jsx("span",{className:"truncate",children:F})]},F)})}),s.jsxs("div",{className:"flex items-center justify-between gap-4 border-t border-border/50 pt-4",children:[s.jsx("span",{className:"min-w-0 truncate text-sm text-muted-foreground",children:new Date(I.date).toLocaleDateString(t)}),s.jsx(xe,{to:`/blog/${I.id}`,state:{from:A},onClick:gi,className:"shrink-0 text-sm font-medium text-primary",children:e("blog.readMore")})]})]})},I.id))},`${N}-${P}-${c}-${n}-${j}`),L>1&&s.jsxs("nav",{className:"mt-10 flex flex-col items-center justify-between gap-4 rounded-xl border border-border/70 bg-background/75 p-3 shadow-sm backdrop-blur sm:flex-row",children:[s.jsx("p",{className:"text-sm text-muted-foreground",children:n==="vi"?`Hiển thị ${(j-1)*S+1}-${Math.min(j*S,T.length)} / ${T.length} bài`:`Showing ${(j-1)*S+1}-${Math.min(j*S,T.length)} of ${T.length} posts`}),s.jsxs("div",{className:"flex items-center gap-1.5",children:[s.jsxs(X,{type:"button",variant:"outline",size:"sm",className:"h-9 rounded-full px-3",disabled:j===1,onClick:()=>qn(j-1),children:[s.jsx(Wb,{className:"h-4 w-4"}),s.jsx("span",{className:"hidden sm:inline",children:n==="vi"?"Trước":"Prev"})]}),$.map(I=>s.jsx(X,{type:"button",variant:I===j?"default":"outline",size:"sm",className:"h-9 w-9 rounded-full p-0",onClick:()=>qn(I),children:I},I)),s.jsxs(X,{type:"button",variant:"outline",size:"sm",className:"h-9 rounded-full px-3",disabled:j===L,onClick:()=>qn(j+1),children:[s.jsx("span",{className:"hidden sm:inline",children:n==="vi"?"Sau":"Next"}),s.jsx(Qb,{className:"h-4 w-4"})]})]})]})]}):s.jsxs("div",{className:"text-center py-20",children:[s.jsx(Vh,{className:"h-12 w-12 text-muted-foreground mx-auto mb-4"}),s.jsx("h3",{className:"text-xl font-semibold mb-2",children:e("blog.empty")}),s.jsx("p",{className:"text-muted-foreground",children:e("blog.emptyDesc")})]})]})})},sy=async e=>{var o;if((o=navigator.clipboard)!=null&&o.writeText&&window.isSecureContext)try{await navigator.clipboard.writeText(e);return}catch{}const t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="fixed",t.style.left="-9999px",t.style.top="0",t.style.opacity="0",document.body.appendChild(t);const n=document.getSelection(),r=n&&n.rangeCount>0?n.getRangeAt(0):null;t.focus(),t.select();const i=document.execCommand("copy");if(t.remove(),r&&n&&(n.removeAllRanges(),n.addRange(r)),!i)throw new Error("Unable to copy to clipboard")},ZN={javascript:"js",jsx:"js",typescript:"ts",tsx:"ts",py:"python",cs:"csharp","c#":"csharp"},jp={js:new Set(["async","await","break","case","catch","class","const","continue","default","do","else","export","extends","finally","for","from","function","if","import","in","instanceof","let","new","of","return","switch","throw","try","typeof","var","void","while","yield"]),ts:new Set(["abstract","as","async","await","break","case","catch","class","const","continue","default","do","else","enum","export","extends","finally","for","from","function","if","implements","import","in","infer","interface","keyof","let","namespace","new","of","private","protected","public","readonly","return","satisfies","switch","throw","try","type","typeof","var","void","while"]),python:new Set(["and","as","assert","async","await","break","class","continue","def","del","elif","else","except","False","finally","for","from","global","if","import","in","is","lambda","None","nonlocal","not","or","pass","raise","return","True","try","while","with","yield"]),csharp:new Set(["abstract","async","await","base","break","case","catch","class","const","decimal","default","else","enum","false","finally","for","foreach","from","get","if","in","interface","internal","is","namespace","new","null","private","protected","public","readonly","record","return","sealed","set","static","string","switch","this","throw","true","try","using","var","void","when","where"])},eP=new Set(["true","false","null","undefined","True","False","None"]),tP=new Set(["Array","Boolean","Date","Decimal","Error","Guid","Iterable","List","Map","Number","Promise","Record","Set","String","Task","ValueError","dict","list","str","int","float","bool"]),nP=e=>{const t=e.trim().toLowerCase();return ZN[t]??t},rP=/(\/\*[\s\S]*?\*\/|\/\/.*|#.*|`(?:\\.|[^`])*`|"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|@[A-Za-z_]\w*|\b\d+(?:\.\d+)?\b|\b[A-Za-z_]\w*\b|=>|==={0,1}|!==?|\+\+|--|&&|\|\||[{}[\]().,;:<>+\-*/%=!?|&])/g,iP=e=>{const t=[];let n=0;return e.replace(rP,(r,i,o)=>(o>n&&t.push(e.slice(n,o)),t.push(r),n=o+r.length,r)),n<e.length&&t.push(e.slice(n)),t},oP=(e,t)=>e.slice(t+1).find(n=>n.trim().length>0),sP=(e,t,n)=>{const r=nP(t),i=jp[r]??jp.js;return/^\s+$/.test(e)?"":/^(\/\/|#|\/\*)/.test(e)?"text-slate-500 italic":/^(`|"|')/.test(e)?"text-emerald-300":/^@\w+/.test(e)?"text-amber-300":/^\d/.test(e)?"text-orange-300":eP.has(e)?"text-purple-300":i.has(e)?"text-sky-300 font-medium":tP.has(e)||/^[A-Z][A-Za-z0-9_]*$/.test(e)?"text-cyan-200":n==="("?"text-yellow-200":/^[{}[\]().,;:<>+\-*/%=!?|&]+$/.test(e)?"text-slate-300":"text-slate-100"},aP=(e,t,n)=>{const r=iP(e);return r.map((i,o)=>{const a=sP(i,t,oP(r,o));return s.jsx("span",{className:a||void 0,children:i},`${n}-${o}`)})},lP=({code:e,language:t})=>{const{language:n}=Re(),{toast:r}=Vu(),[i,o]=m.useState(!1),a=m.useRef(),l=n==="vi"?"Sao chép mã":"Copy code",c=n==="vi"?"Đã sao chép":"Copied",u=t||"code",d=e.split(`
`);m.useEffect(()=>()=>window.clearTimeout(a.current),[]);const h=async()=>{try{await sy(e),o(!0),window.clearTimeout(a.current),a.current=window.setTimeout(()=>o(!1),2e3),r({variant:"success",title:n==="vi"?"Đã sao chép mã":"Code copied"})}catch(p){console.error("Unable to copy code:",p),r({variant:"destructive",title:n==="vi"?"Không thể sao chép mã":"Unable to copy code"})}};return s.jsxs("div",{className:"my-8 overflow-hidden rounded-xl border border-slate-700/80 bg-slate-950 shadow-sm",children:[s.jsxs("div",{className:"flex items-center justify-between gap-3 border-b border-slate-800 bg-slate-900/95 px-4 py-2.5 font-mono text-xs uppercase tracking-[.14em] text-slate-400",children:[s.jsxs("div",{className:"flex min-w-0 items-center gap-3",children:[s.jsxs("span",{className:"flex items-center gap-1.5",children:[s.jsx("span",{className:"h-2.5 w-2.5 rounded-full bg-red-400"}),s.jsx("span",{className:"h-2.5 w-2.5 rounded-full bg-amber-300"}),s.jsx("span",{className:"h-2.5 w-2.5 rounded-full bg-emerald-400"})]}),s.jsx("span",{className:"min-w-0 truncate",children:u})]}),s.jsxs("div",{className:"flex items-center gap-3",children:[s.jsx("span",{className:"hidden text-slate-500 sm:inline",children:"haiit.dev"}),s.jsxs("button",{type:"button",onClick:h,className:"inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-700 bg-slate-900 text-slate-200 transition-colors hover:border-primary/70 hover:bg-primary/15 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary","aria-label":i?c:l,title:i?c:l,children:[i?s.jsx(fs,{className:"h-4 w-4 text-primary"}):s.jsx(Jb,{className:"h-4 w-4"}),s.jsx("span",{className:"sr-only","aria-live":"polite",children:i?c:l})]})]})]}),s.jsx("pre",{className:"overflow-x-auto p-0 text-sm leading-7",children:s.jsx("code",{className:"block min-w-max py-4 font-mono",children:d.map((p,y)=>s.jsxs("span",{className:"grid grid-cols-[3.25rem_1fr]",children:[s.jsx("span",{className:"select-none border-r border-slate-800 px-4 text-right text-slate-600",children:y+1}),s.jsx("span",{className:"whitespace-pre px-4",children:p?aP(p,t,y):" "})]},y))})})]})},yr=e=>e.split(/(`[^`]+`|\*\*[^*]+\*\*)/g).filter(Boolean).map((t,n)=>t.startsWith("`")&&t.endsWith("`")?s.jsx("code",{className:"rounded bg-primary/10 px-1.5 py-0.5 font-mono text-[.88em] text-primary",children:t.slice(1,-1)},n):t.startsWith("**")&&t.endsWith("**")?s.jsx("strong",{className:"font-semibold text-foreground",children:t.slice(2,-2)},n):s.jsx(m.Fragment,{children:t},n)),cP=({content:e})=>{const t=e.trim().split(`
`),n=[];let r=0;for(;r<t.length;){const i=t[r].trim();if(!i){r+=1;continue}if(i.startsWith("```")){const a=i.slice(3).trim(),l=[];for(r+=1;r<t.length&&!t[r].trim().startsWith("```");)l.push(t[r]),r+=1;n.push(s.jsx(lP,{language:a,code:l.join(`
`)},`code-${r}`)),r+=1;continue}if(i.startsWith("# ")){n.push(s.jsx("h2",{className:"mb-6 mt-2 text-3xl md:text-4xl",children:yr(i.slice(2))},r)),r+=1;continue}if(i.startsWith("## ")){n.push(s.jsx("h3",{className:"mb-4 mt-12 border-l-2 border-primary pl-4 text-2xl",children:yr(i.slice(3))},r)),r+=1;continue}if(i.startsWith("### ")){n.push(s.jsx("h4",{className:"mb-3 mt-8 text-xl",children:yr(i.slice(4))},r)),r+=1;continue}if(i.startsWith("- ")){const a=[];for(;r<t.length&&t[r].trim().startsWith("- ");)a.push(t[r].trim().slice(2)),r+=1;n.push(s.jsx("ul",{className:"my-6 space-y-3",children:a.map(l=>s.jsxs("li",{className:"flex gap-3 leading-7 text-muted-foreground",children:[s.jsx("span",{className:"mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"}),s.jsx("span",{children:yr(l)})]},l))},`list-${r}`));continue}if(i.startsWith("> ")){n.push(s.jsx("blockquote",{className:"my-8 border-l-2 border-primary bg-primary/[.04] px-5 py-4 text-lg italic leading-8 text-muted-foreground",children:yr(i.slice(2))},r)),r+=1;continue}const o=[i];for(r+=1;r<t.length&&t[r].trim()&&!/^(#{1,3} |```|- |> )/.test(t[r].trim());)o.push(t[r].trim()),r+=1;n.push(s.jsx("p",{className:"my-5 text-[1.02rem] leading-8 text-muted-foreground",children:yr(o.join(" "))},`p-${r}`))}return s.jsx("div",{className:"article-content",children:n})},uP=()=>{var v;const{t:e,locale:t,language:n}=Re(),{toast:r}=Vu(),{id:i}=dw(),o=St(),a=typeof((v=o.state)==null?void 0:v.from)=="string"&&o.state.from.startsWith("/blog")?o.state.from:"/blog",[l,c]=m.useState(()=>i?kn.getCachedPost(i):void 0),[u,d]=m.useState(!l),h=(l==null?void 0:l.id)===i?l:void 0,p=h?Rv(h,n):void 0;if(m.useEffect(()=>{if(!i)return;let b=!1;const g=kn.getCachedPost(i);return c(g),(async()=>{d(!0);const x=await kn.getPost(i,n);b||(c(x),d(!1));const w=await kn.incrementView(i);!b&&w&&x&&c({...x,viewCount:w.viewCount})})(),()=>{b=!0}},[i,n]),u&&!h)return s.jsx(rr,{children:s.jsx("div",{className:"container mx-auto px-4 py-12",children:s.jsx(dd,{className:"min-h-[calc(100vh-9rem)]",label:n==="vi"?"Đang tải":"Loading"})})});if(!p)return s.jsx(rr,{children:s.jsxs("div",{className:"container mx-auto px-4 py-20 text-center",children:[s.jsx("h1",{className:"text-4xl font-bold mb-4",children:e("post.notFound")}),s.jsx("p",{className:"text-muted-foreground mb-8",children:e("post.notFoundDesc")}),s.jsx(X,{asChild:!0,children:s.jsxs(xe,{to:a,children:[s.jsx(Ec,{className:"mr-2 h-4 w-4"}),e("post.back")]})})]})});const y=e(`category.${p.category}`)||p.category,k=async()=>{try{await sy(window.location.href),r({variant:"success",title:n==="vi"?"Đã sao chép liên kết":"Link copied"})}catch{r({variant:"destructive",title:n==="vi"?"Không thể sao chép liên kết":"Unable to copy link"})}};return s.jsx(rr,{children:s.jsxs("article",{className:"container mx-auto px-4 py-12",children:[s.jsxs(xe,{to:a,className:"inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8",children:[s.jsx(Ec,{className:"mr-2 h-4 w-4"}),e("post.back")]}),s.jsxs("header",{className:"max-w-3xl mb-12",children:[s.jsx(st,{variant:"secondary",className:"mb-4",children:y}),s.jsx("h1",{className:"text-3xl md:text-4xl lg:text-5xl font-bold mb-6",children:p.title}),s.jsx("p",{className:"text-xl text-muted-foreground mb-6",children:p.excerpt}),s.jsxs("div",{className:"flex flex-wrap items-center gap-6 text-muted-foreground",children:[s.jsxs("div",{className:"flex items-center",children:[s.jsx(Hb,{className:"h-4 w-4 mr-2"}),new Date(p.date).toLocaleDateString(t,{year:"numeric",month:"long",day:"numeric"})]}),s.jsxs("div",{className:"flex items-center",children:[s.jsx(Gs,{className:"h-4 w-4 mr-2"}),p.readTime]}),s.jsxs("div",{className:"flex items-center",children:[s.jsx(Ks,{className:"h-4 w-4 mr-2"}),`${((h==null?void 0:h.viewCount)??0).toLocaleString(t)} ${e("post.views")}`]})]})]}),s.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-4 gap-12",children:[s.jsx("div",{className:"lg:col-span-3",children:s.jsx("div",{className:"card-gradient rounded-xl border border-border/50 p-6 md:p-12",children:s.jsx(cP,{content:p.content})})}),s.jsx("aside",{className:"lg:col-span-1",children:s.jsxs("div",{className:"sticky top-24 space-y-8",children:[s.jsxs("div",{className:"card-gradient border border-border/50 rounded-xl p-6",children:[s.jsxs("h3",{className:"font-semibold mb-4 flex items-center",children:[s.jsx(Mc,{className:"h-4 w-4 mr-2"}),e("post.tags")]}),s.jsx("div",{className:"flex flex-wrap gap-2",children:p.tags.map(b=>s.jsx(xe,{to:`/blog?tag=${encodeURIComponent(b)}`,children:s.jsx(st,{variant:"outline",className:"cursor-pointer hover:border-primary hover:text-primary",children:b})},b))})]}),s.jsxs("div",{className:"card-gradient border border-border/50 rounded-xl p-6",children:[s.jsxs("h3",{className:"font-semibold mb-4 flex items-center",children:[s.jsx(m1,{className:"h-4 w-4 mr-2"}),e("post.share")]}),s.jsx(X,{variant:"outline",className:"w-full",onClick:k,children:e("post.copy")})]})]})})]})]})})},dP=()=>{const{t:e}=Re(),t=ur();return s.jsx(rr,{children:s.jsxs("div",{className:"container mx-auto px-4 py-12",children:[s.jsxs("div",{className:"max-w-3xl mb-12",children:[s.jsx("h1",{className:"text-4xl md:text-5xl font-bold mb-4",children:s.jsx("span",{className:"text-gradient",children:e("project.title")})}),s.jsx("p",{className:"text-xl text-muted-foreground mb-4",children:e("project.desc")}),s.jsx(X,{asChild:!0,variant:"outline",children:s.jsxs("a",{href:se.social.github,target:"_blank",rel:"noopener noreferrer",children:[s.jsx(Fr,{className:"h-4 w-4 mr-2"}),e("project.github")]})})]}),s.jsxs("div",{className:"mb-12",children:[s.jsxs("h2",{className:"text-2xl font-semibold mb-6 flex items-center gap-2",children:[s.jsx(g1,{className:"h-5 w-5 text-yellow-500"}),e("project.featured")]}),s.jsx(Ce.div,{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",variants:t?void 0:si,initial:t?!1:"hidden",whileInView:"visible",viewport:li,children:Bc.filter(n=>n.featured).map(n=>s.jsxs(Ce.article,{variants:t?void 0:ai,className:"group card-gradient border border-border/50 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300",children:[s.jsxs("div",{className:"aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border-b border-border/50 relative overflow-hidden",children:[s.jsx("div",{className:"text-6xl font-mono text-primary/30 group-hover:text-primary/50 transition-colors",children:`<${n.title.split(" ")[0].charAt(0)} />`}),s.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-card to-transparent"}),n.demo&&s.jsx("div",{className:"absolute top-4 right-4",children:s.jsx(st,{className:"bg-green-500/20 text-green-400 border-green-500/30",children:e("project.demo")})})]}),s.jsxs("div",{className:"p-6 md:p-8",children:[s.jsxs("div",{className:"flex items-start justify-between mb-4",children:[s.jsx("h3",{className:"text-2xl font-semibold group-hover:text-primary transition-colors",children:n.title}),s.jsx(st,{className:"bg-primary/20 text-primary",children:e("project.featured")})]}),s.jsx("p",{className:"text-muted-foreground mb-4",children:n.description}),s.jsx("p",{className:"text-sm text-muted-foreground mb-6",children:n.longDescription}),s.jsx("div",{className:"flex flex-wrap gap-2 mb-6",children:n.technologies.map(r=>s.jsx(st,{variant:"secondary",children:r},r))}),s.jsxs("div",{className:"flex gap-4 pt-4 border-t border-border/50",children:[n.github&&s.jsx(X,{asChild:!0,variant:"outline",size:"sm",children:s.jsxs("a",{href:n.github,target:"_blank",rel:"noopener noreferrer",children:[s.jsx(Fr,{className:"h-4 w-4 mr-2"}),e("project.source")]})}),n.demo&&s.jsx(X,{asChild:!0,size:"sm",children:s.jsxs("a",{href:n.demo,target:"_blank",rel:"noopener noreferrer",children:[s.jsx(Ic,{className:"h-4 w-4 mr-2"}),e("project.demo")]})})]})]})]},n.id))})]}),s.jsxs("div",{children:[s.jsxs("h2",{className:"text-2xl font-semibold mb-6 flex items-center gap-2",children:[s.jsx(t1,{className:"h-5 w-5 text-primary"}),e("project.all")]}),s.jsx(Ce.div,{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",variants:t?void 0:si,initial:t?!1:"hidden",whileInView:"visible",viewport:li,children:Bc.filter(n=>!n.featured).map(n=>s.jsxs(Ce.article,{variants:t?void 0:ai,className:"group card-gradient border border-border/50 rounded-xl p-6 hover:border-primary/50 transition-all duration-300",children:[s.jsx("h3",{className:"text-lg font-semibold mb-2 group-hover:text-primary transition-colors",children:n.title}),s.jsx("p",{className:"text-sm text-muted-foreground mb-4 line-clamp-2",children:n.description}),s.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:n.technologies.slice(0,3).map(r=>s.jsx(st,{variant:"secondary",className:"min-h-7 px-3 py-1 text-xs",children:r},r))}),s.jsxs("div",{className:"flex gap-2",children:[n.github&&s.jsx(X,{asChild:!0,variant:"ghost",size:"sm",children:s.jsx("a",{href:n.github,target:"_blank",rel:"noopener noreferrer",children:s.jsx(Fr,{className:"h-4 w-4"})})}),n.demo&&s.jsx(X,{asChild:!0,variant:"ghost",size:"sm",children:s.jsx("a",{href:n.demo,target:"_blank",rel:"noopener noreferrer",children:s.jsx(Ic,{className:"h-4 w-4"})})})]})]},n.id))})]})]})})},hP=[{id:"fullstack",file:"/cvs/FullStack.pdf",title:{vi:"Fullstack Developer",en:"Fullstack Developer"},description:{vi:"Hồ sơ trọng tâm: kinh nghiệm thực tế với Angular, ASP.NET Core, SQL Server và hệ thống quản lý doanh nghiệp.",en:"Primary profile: hands-on experience with Angular, ASP.NET Core, SQL Server, and enterprise management systems."},featured:!0,stack:["Angular","ASP.NET Core","SQL Server","Docker"]},{id:"dotnet",file:"/cvs/.NET-EN.pdf",title:{vi:".NET Developer",en:".NET Developer"},description:{vi:"Hồ sơ tiếng Anh tập trung vào ASP.NET Core MVC, RESTful API, backend và SQL Server.",en:"English profile focused on ASP.NET Core MVC, RESTful APIs, backend development, and SQL Server."},featured:!1,stack:["C#","ASP.NET Core MVC","RESTful API","SQL Server"]},{id:"ba",file:"/cvs/BA-VI.pdf",title:{vi:"Business Analyst",en:"Business Analyst"},description:{vi:"Hồ sơ tiếng Việt về phân tích nghiệp vụ, User Story, Use Case, BPMN và tài liệu hóa hệ thống.",en:"Vietnamese profile covering business analysis, User Stories, Use Cases, BPMN, and system documentation."},featured:!1,stack:["BPMN","UML","User Story","Figma"]}],pP=[{period:"03/2026 - 06/2026",role:"Fullstack Developer",company:"Song Ân Software Solutions Co., Ltd.",summary:{vi:"Phát triển và bảo trì các module HIS, EMR và Admin Management System bằng Angular, ASP.NET Core và SQL Server.",en:"Developing and maintaining HIS, EMR, and Admin Management System modules with Angular, ASP.NET Core, and SQL Server."},highlights:{vi:["CRUD, bộ lọc tìm kiếm, phân trang và component tái sử dụng","Kiểm tra dữ liệu, tối ưu truy vấn và xử lý sự cố SQL Server","Điều tra lỗi, regression testing, merge branch và chuẩn bị triển khai"],en:["CRUD, search filters, pagination, and reusable components","Data verification, query optimization, and SQL Server troubleshooting","Defect investigation, regression testing, branch merging, and deployment preparation"]}}],mP=[{title:{vi:"Hệ thống Quản lý & Đào tạo Giấy phép Lái xe",en:"Driver License Training & Management System"},period:"09/2025 - 12/2025",description:{vi:"Hệ thống ASP.NET Core 9.0 MVC quản lý đào tạo, thi lý thuyết, mô phỏng giao thông, trung tâm lái xe và thanh toán trực tuyến.",en:"ASP.NET Core 9.0 MVC system for driver training, theory exams, traffic simulation, driving center operations, and online payments."},stack:["ASP.NET Core 9","SignalR","OpenAI SDK","VNPAY","MoMo","PayPal"],github:"https://github.com/haihttt974/dacn-dtgplx"},{title:{vi:"Ứng dụng Web Quản lý Phòng Gym",en:"Gym Management Web Application"},period:"06/2025",description:{vi:"Quản lý hội viên, gói tập, phân quyền Admin/Staff/Trainer/Member, thanh toán và chatbot hỗ trợ.",en:"Membership, package, role-based access, online payment, notification, and AI chatbot management."},stack:["ASP.NET Core MVC","RBAC","PayPal","VNPay","AI Chatbot"],github:"https://github.com/haihttt974/courseproject-ltweb-gym"}],fP=[{year:"2022 - 2025",vi:"Sinh viên tiêu biểu ba năm liên tiếp",en:"Outstanding student for three consecutive years"},{year:"2024",vi:"Giải Nhất Database Design Champion",en:"First Prize, Database Design Champion"},{year:"03/2024",vi:"Giải Ba Cuộc thi Lập trình Cá nhân",en:"Third Prize, Individual Programming Competition"},{year:"10/2024",vi:"Giải Nhất Cuộc thi Lập trình Cá nhân",en:"First Prize, Individual Programming Competition"}],gP=[{year:"2025",vi:"Tiếng Anh trình độ B1",en:"English Proficiency, B1 Level"},{year:"2025",vi:"Kỹ năng Giao tiếp và Làm việc Nhóm",en:"Communication and Teamwork Skills"}],vP=[{title:"Fullstack",items:["Angular","ASP.NET Core","C#","JavaScript","HTML","CSS","RESTful API"]},{title:"Data & Backend",items:["SQL Server","Entity Framework Core","Query Optimization","Database Analysis"]},{title:"Business Analysis",items:["User Story","Use Case","BPMN","UML","Draw.io","Figma"]},{title:"Delivery & Quality",items:["Git","GitHub","Docker","Azure","Postman","Software Testing"]}],yP=()=>{const{language:e}=Re(),t=e==="vi"?{eyebrow:"Hồ sơ nghề nghiệp / 2026",intro:"Tôi xây sản phẩm fullstack, hiểu dữ liệu và không bỏ qua câu chuyện nghiệp vụ phía sau mỗi tính năng.",summary:"Fullstack Developer định hướng hệ thống, có kinh nghiệm phát triển module HIS, EMR và hệ thống quản trị bằng Angular, ASP.NET Core, SQL Server. Đồng thời có nền tảng Business Analysis và kiểm thử phần mềm.",contact:"Liên hệ",cvLabel:"Bộ hồ sơ ứng tuyển",cvTitle:"Ba góc nhìn. Một năng lực cốt lõi.",cvDesc:"Mỗi CV được tối ưu cho một vị trí khác nhau. Fullstack là hồ sơ trọng tâm và phản ánh đầy đủ nhất kinh nghiệm hiện tại.",primary:"Hồ sơ trọng tâm",view:"Xem CV",download:"Tải PDF",experience:"Kinh nghiệm thực tế",present:"Hiện tại",projects:"Dự án tiêu biểu",skills:"Năng lực chuyên môn",education:"Học vấn",educationTitle:"Công nghệ Thông tin",school:"Trường Đại học Công nghệ TP. Hồ Chí Minh",awards:"Danh hiệu & giải thưởng",certificates:"Chứng chỉ",primaryEmail:"Email chính",secondaryEmail:"Email phụ"}:{eyebrow:"Professional profile / 2026",intro:"I build fullstack products, understand data, and never ignore the business story behind each feature.",summary:"Systems-oriented Fullstack Developer with experience building HIS, EMR, and administration modules using Angular, ASP.NET Core, and SQL Server, supported by Business Analysis and software testing foundations.",contact:"Contact",cvLabel:"Application profiles",cvTitle:"Three perspectives. One core capability.",cvDesc:"Each CV is tailored to a different role. Fullstack is the primary profile and best represents my current experience.",primary:"Primary profile",view:"View CV",download:"Download PDF",experience:"Professional experience",present:"Present",projects:"Selected projects",skills:"Professional capabilities",education:"Education",educationTitle:"Information Technology",school:"Ho Chi Minh City University of Technology (HUTECH)",awards:"Honors & awards",certificates:"Certifications",primaryEmail:"Primary email",secondaryEmail:"Secondary email"};return s.jsxs(rr,{children:[s.jsx("section",{className:"border-b border-border/70",children:s.jsxs("div",{className:"container mx-auto px-4 py-10 md:py-16",children:[s.jsx("p",{className:"eyebrow mb-7",children:t.eyebrow}),s.jsxs("div",{className:"grid gap-8 lg:grid-cols-[.72fr_1.28fr] lg:items-end",children:[s.jsxs("div",{className:"journal-card relative aspect-[4/5] max-w-md overflow-hidden",children:[s.jsx("img",{src:se.avatar,alt:se.name,className:"h-full w-full object-cover"}),s.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"}),s.jsxs("div",{className:"absolute inset-x-0 bottom-0 p-6",children:[s.jsx("p",{className:"font-mono text-xs uppercase tracking-[.16em] text-primary",children:"Fullstack / Information Systems"}),s.jsx("h1",{className:"mt-2 text-3xl",children:se.name})]})]}),s.jsxs("div",{className:"pb-2",children:[s.jsx("h2",{className:"max-w-5xl text-4xl leading-[.98] md:text-6xl lg:text-7xl",children:t.intro}),s.jsx("p",{className:"mt-7 max-w-3xl border-l border-primary/50 pl-5 text-lg leading-8 text-muted-foreground",children:t.summary}),s.jsxs("div",{className:"mt-8 flex flex-wrap gap-3",children:[s.jsx(X,{asChild:!0,children:s.jsxs("a",{href:`mailto:${se.social.email}`,children:[s.jsx(Eg,{className:"mr-2 h-4 w-4"}),t.contact]})}),s.jsx(X,{asChild:!0,variant:"outline",children:s.jsxs("a",{href:se.social.github,target:"_blank",rel:"noreferrer",children:["GitHub ",s.jsx(Gt,{className:"ml-2 h-4 w-4"})]})}),s.jsx(X,{asChild:!0,variant:"outline",children:s.jsxs("a",{href:se.social.linkedin,target:"_blank",rel:"noreferrer",children:["LinkedIn ",s.jsx(Gt,{className:"ml-2 h-4 w-4"})]})})]}),s.jsx("div",{className:"mt-10 grid border-y border-border/70 sm:grid-cols-3",children:[["3.44/4.00","GPA"],["03/2026",t.experience],["03",t.cvLabel]].map(([n,r],i)=>s.jsxs("div",{className:`py-4 ${i?"border-t border-border/70 sm:border-l sm:border-t-0 sm:pl-5":""}`,children:[s.jsx("span",{className:"font-mono text-xl font-semibold text-primary",children:n}),s.jsx("span",{className:"ml-2 font-mono text-[11px] uppercase tracking-wider text-muted-foreground",children:r})]},r))})]})]})]})}),s.jsx("section",{className:"border-b border-border/70 bg-card/25 py-20",id:"cv-collection",children:s.jsxs("div",{className:"container mx-auto px-4",children:[s.jsx("p",{className:"eyebrow mb-4",children:t.cvLabel}),s.jsxs("div",{className:"mb-10 grid gap-5 md:grid-cols-[1fr_.7fr] md:items-end",children:[s.jsx("h2",{className:"text-4xl md:text-6xl",children:t.cvTitle}),s.jsx("p",{className:"text-muted-foreground",children:t.cvDesc})]}),s.jsx("div",{className:"grid gap-5 lg:grid-cols-3",children:hP.map((n,r)=>s.jsxs("article",{className:`journal-card flex min-h-[330px] flex-col p-6 ${n.featured?"border-primary/60 lg:-translate-y-3":""}`,children:[s.jsxs("div",{className:"flex items-start justify-between",children:[s.jsxs("span",{className:"font-mono text-4xl text-primary/60",children:["0",r+1]}),n.featured&&s.jsxs(st,{className:"gap-1",children:[s.jsx(Qu,{className:"h-3 w-3"}),t.primary]})]}),s.jsx("h3",{className:"mt-8 text-2xl",children:n.title[e]}),s.jsx("p",{className:"mt-3 text-sm leading-6 text-muted-foreground",children:n.description[e]}),s.jsx("div",{className:"mt-5 flex flex-wrap gap-2.5",children:n.stack.map(i=>s.jsx(st,{variant:"secondary",className:"min-h-7 px-3 py-1 font-mono text-[11px]",children:i},i))}),s.jsxs("div",{className:"mt-auto flex gap-2 border-t border-border/70 pt-5",children:[s.jsx(X,{asChild:!0,size:"sm",className:"flex-1",children:s.jsxs("a",{href:n.file,target:"_blank",rel:"noreferrer",children:[t.view,s.jsx(Ic,{className:"ml-2 h-3.5 w-3.5"})]})}),s.jsx(X,{asChild:!0,size:"sm",variant:"outline",children:s.jsxs("a",{href:n.file,download:!0,children:[s.jsx(Zb,{className:"h-3.5 w-3.5"}),s.jsx("span",{className:"sr-only",children:t.download})]})})]})]},n.id))})]})}),s.jsx("section",{className:"border-b border-border/70 py-20",children:s.jsxs("div",{className:"container mx-auto grid gap-12 px-4 lg:grid-cols-[1.25fr_.75fr]",children:[s.jsxs("div",{children:[s.jsx("p",{className:"eyebrow mb-8",children:t.experience}),pP.map(n=>s.jsxs("article",{className:"journal-card p-7 md:p-9",children:[s.jsxs("div",{className:"flex flex-col justify-between gap-3 border-b border-border/70 pb-6 sm:flex-row",children:[s.jsxs("div",{children:[s.jsx("h2",{className:"text-2xl",children:n.role}),s.jsx("p",{className:"mt-1 text-primary",children:n.company})]}),s.jsx("span",{className:"font-mono text-xs uppercase tracking-wider text-muted-foreground",children:n.period})]}),s.jsx("p",{className:"mt-6 leading-7 text-muted-foreground",children:n.summary[e]}),s.jsx("div",{className:"mt-6 space-y-3",children:n.highlights[e].map(r=>s.jsxs("p",{className:"flex gap-3 text-sm text-muted-foreground",children:[s.jsx(jg,{className:"mt-0.5 h-4 w-4 shrink-0 text-primary"}),r]},r))})]},n.company))]}),s.jsxs("aside",{className:"space-y-5",children:[s.jsx("p",{className:"eyebrow mb-8",children:t.education}),s.jsxs("div",{className:"journal-card p-6",children:[s.jsx(n1,{className:"h-6 w-6 text-primary"}),s.jsx("h3",{className:"mt-5 text-xl",children:t.educationTitle}),s.jsx("p",{className:"mt-2 text-sm text-muted-foreground",children:t.school}),s.jsxs("div",{className:"mt-5 flex justify-between border-t border-border/70 pt-4 font-mono text-xs uppercase tracking-wider text-muted-foreground",children:[s.jsxs("span",{children:["2022 - ",t.present]}),s.jsx("span",{className:"text-primary",children:"GPA 3.44 / 4.00"})]})]}),s.jsxs("div",{className:"journal-card p-6",children:[s.jsx(Ag,{className:"h-5 w-5 text-primary"}),s.jsx("p",{className:"mt-4 text-sm text-muted-foreground",children:se.address}),s.jsxs("div",{className:"mt-4 space-y-3 border-t border-border/70 pt-4 font-mono text-xs",children:[s.jsxs("a",{className:"block hover:text-primary",href:`mailto:${se.social.email}`,children:[s.jsx("span",{className:"block text-[11px] uppercase tracking-wider text-muted-foreground",children:t.primaryEmail}),se.social.email]}),s.jsxs("a",{className:"block hover:text-primary",href:`mailto:${se.social.secondaryEmail}`,children:[s.jsx("span",{className:"block text-[11px] uppercase tracking-wider text-muted-foreground",children:t.secondaryEmail}),se.social.secondaryEmail]})]})]})]})]})}),s.jsx("section",{className:"border-b border-border/70 bg-card/25 py-20",children:s.jsxs("div",{className:"container mx-auto px-4",children:[s.jsx("p",{className:"eyebrow mb-8",children:t.projects}),s.jsx("div",{className:"grid gap-5 md:grid-cols-2",children:mP.map(n=>s.jsxs("article",{className:"journal-card p-7",children:[s.jsxs("div",{className:"flex justify-between gap-3",children:[s.jsx("h3",{className:"text-2xl",children:n.title[e]}),s.jsx("span",{className:"font-mono text-xs text-primary",children:n.period})]}),s.jsx("p",{className:"mt-4 text-sm leading-7 text-muted-foreground",children:n.description[e]}),s.jsx("div",{className:"mt-5 flex flex-wrap gap-2",children:n.stack.map(r=>s.jsx(st,{variant:"secondary",children:r},r))}),s.jsxs("a",{href:n.github,target:"_blank",rel:"noreferrer",className:"mt-6 inline-flex items-center gap-2 font-mono text-xs text-primary",children:["GitHub repository ",s.jsx(Gt,{className:"h-3.5 w-3.5"})]})]},n.period))})]})}),s.jsx("section",{className:"py-20",children:s.jsxs("div",{className:"container mx-auto grid gap-12 px-4 lg:grid-cols-[1fr_1fr]",children:[s.jsxs("div",{children:[s.jsx("p",{className:"eyebrow mb-8",children:t.skills}),s.jsx("div",{className:"grid gap-4 sm:grid-cols-2",children:vP.map(n=>s.jsxs("div",{className:"journal-card p-5",children:[s.jsx("h3",{children:n.title}),s.jsx("div",{className:"mt-4 flex flex-wrap gap-2",children:n.items.map(r=>s.jsx(st,{variant:"secondary",children:r},r))})]},n.title))})]}),s.jsxs("div",{className:"grid gap-8 sm:grid-cols-2",children:[s.jsxs("div",{children:[s.jsx("p",{className:"eyebrow mb-8",children:t.awards}),s.jsx("div",{className:"space-y-3",children:fP.map(n=>s.jsxs("div",{className:"journal-card p-4",children:[s.jsx(zb,{className:"h-4 w-4 text-primary"}),s.jsx("p",{className:"mt-3 text-sm",children:n[e]}),s.jsx("p",{className:"mt-2 font-mono text-xs text-muted-foreground",children:n.year})]},`${n.year}-${n.en}`))})]}),s.jsxs("div",{children:[s.jsx("p",{className:"eyebrow mb-8",children:t.certificates}),s.jsx("div",{className:"space-y-3",children:gP.map(n=>s.jsxs("div",{className:"journal-card p-4",children:[s.jsx($b,{className:"h-4 w-4 text-primary"}),s.jsx("p",{className:"mt-3 text-sm",children:n[e]}),s.jsx("p",{className:"mt-2 font-mono text-xs text-muted-foreground",children:n.year})]},n.en))})]})]})]})})]})},xP=()=>{const{language:e}=Re(),t=St(),n=e==="vi",r={eyebrow:"HTTP / 404",title:n?"Trang này đã đi lạc khỏi bản đồ.":"This page drifted off the map.",description:n?"Đường dẫn bạn vừa mở không tồn tại hoặc đã được chuyển đi. Hãy quay về trang chính để tiếp tục khám phá.":"The route you opened does not exist or has moved. Head back home and keep exploring.",home:n?"Về trang chủ":"Back home",back:n?"Quay lại":"Go back",currentRoute:n?"Đường dẫn hiện tại":"Current route",signal:n?"Không tìm thấy tín hiệu":"No signal found",hint:n?"Gợi ý: kiểm tra lại URL hoặc dùng menu điều hướng.":"Tip: check the URL or use the navigation menu."};return m.useEffect(()=>{console.error("404 Error: User attempted to access non-existent route:",t.pathname)},[t.pathname]),s.jsxs("main",{className:"relative flex h-dvh min-h-[620px] overflow-hidden bg-background text-foreground",children:[s.jsx("div",{className:"page-grid pointer-events-none absolute inset-0 opacity-70"}),s.jsx("div",{className:"pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,hsl(var(--primary)/0.18),transparent_24rem),radial-gradient(circle_at_84%_72%,hsl(var(--accent)/0.14),transparent_24rem)]"}),s.jsx("div",{className:"pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background via-background/70 to-transparent"}),s.jsxs("div",{className:"container relative z-10 mx-auto grid h-full items-center gap-8 px-4 py-6 md:grid-cols-[0.95fr_1.05fr] md:px-8",children:[s.jsxs("section",{className:"mx-auto w-full max-w-xl",children:[s.jsxs("div",{className:"mb-5 inline-flex items-center gap-2 rounded-md border border-border/70 bg-card/70 px-3 py-2 font-mono text-[11px] font-semibold uppercase text-primary shadow-sm backdrop-blur",children:[s.jsx(Qu,{className:"h-3.5 w-3.5"}),r.eyebrow]}),s.jsxs("h1",{className:"text-balance text-5xl font-bold leading-[0.95] sm:text-6xl lg:text-7xl",children:[s.jsx("span",{className:"block text-gradient",children:"404"}),s.jsx("span",{className:"mt-2 block",children:r.title})]}),s.jsx("p",{className:"mt-5 max-w-lg text-base leading-7 text-muted-foreground sm:text-lg",children:r.description}),s.jsxs("div",{className:"mt-7 flex flex-wrap gap-3",children:[s.jsx(X,{asChild:!0,size:"lg",className:"shadow-[0_18px_40px_hsl(var(--primary)/0.18)]",children:s.jsxs(xe,{to:"/",children:[s.jsx(r1,{className:"h-4 w-4"}),r.home]})}),s.jsxs(X,{size:"lg",variant:"outline",onClick:()=>window.history.back(),children:[s.jsx(Ec,{className:"h-4 w-4"}),r.back]})]}),s.jsx("div",{className:"mt-7 rounded-md border border-border/70 bg-card/60 p-4 backdrop-blur",children:s.jsxs("div",{className:"flex items-start gap-3",children:[s.jsx(h1,{className:"mt-0.5 h-5 w-5 text-accent"}),s.jsxs("div",{className:"min-w-0",children:[s.jsx("p",{className:"font-mono text-[11px] uppercase text-muted-foreground",children:r.currentRoute}),s.jsx("p",{className:"mt-1 truncate font-mono text-sm text-foreground",children:t.pathname})]})]})})]}),s.jsxs("section",{className:"relative mx-auto hidden aspect-square w-full max-w-[540px] items-center justify-center md:flex",children:[s.jsx("div",{className:"absolute inset-8 rounded-full border border-primary/15"}),s.jsx("div",{className:"absolute inset-20 rounded-full border border-accent/20"}),s.jsx("div",{className:"absolute h-[72%] w-[72%] animate-[orbitSpin_28s_linear_infinite] rounded-full border border-dashed border-border/80"}),s.jsx("div",{className:"absolute left-[12%] top-[22%] rounded-md border border-border/70 bg-card/80 px-3 py-2 font-mono text-[10px] uppercase text-muted-foreground shadow-sm backdrop-blur",children:"route.scan()"}),s.jsx("div",{className:"absolute bottom-[18%] right-[8%] rounded-md border border-primary/20 bg-primary/10 px-3 py-2 font-mono text-[10px] uppercase text-primary shadow-sm backdrop-blur",children:"fallback.ready"}),s.jsxs("div",{className:"relative flex h-72 w-72 items-center justify-center rounded-full border border-border/80 bg-card/70 shadow-[0_32px_100px_hsl(var(--foreground)/0.14)] backdrop-blur-xl",children:[s.jsx("div",{className:"absolute inset-6 rounded-full border border-primary/20 bg-[radial-gradient(circle,hsl(var(--primary)/0.16),transparent_58%)]"}),s.jsx("div",{className:"absolute h-4 w-4 animate-[particleBlink_3s_ease-in-out_infinite] rounded-full bg-primary shadow-[0_0_30px_hsl(var(--primary)/0.65)]"}),s.jsxs("div",{className:"relative grid place-items-center text-center",children:[s.jsx(Xb,{className:"mb-5 h-16 w-16 text-primary"}),s.jsx("p",{className:"font-mono text-xs uppercase tracking-[0.24em] text-muted-foreground",children:r.signal}),s.jsx("p",{className:"mt-3 max-w-44 text-sm leading-6 text-muted-foreground",children:r.hint})]})]})]})]})]})},xr=({children:e})=>{const t=ur();return s.jsx(Ce.div,{initial:t?{opacity:0}:"initial",animate:t?{opacity:1}:"animate",exit:t?{opacity:0}:"exit",variants:XC,children:e})},wP=new pC;function bP(){const e=St();return s.jsxs(BC,{attribute:"class",defaultTheme:"system",enableSystem:!0,storageKey:"haiit-theme",children:[s.jsx(QC,{}),s.jsx(PC,{children:s.jsx(fC,{client:wP,children:s.jsx(B2,{children:s.jsxs(CC,{children:[s.jsx(tk,{}),s.jsx(zC,{}),s.jsx(TC,{}),s.jsx(uy,{features:dy,strict:!0,children:s.jsx(hy,{mode:"wait",initial:!1,children:s.jsxs(Pw,{location:e,children:[s.jsx(Hn,{path:"/",element:s.jsx(xr,{children:s.jsx($S,{})})}),s.jsx(Hn,{path:"/blog",element:s.jsx(xr,{children:s.jsx(JN,{})})}),s.jsx(Hn,{path:"/blog/:id",element:s.jsx(xr,{children:s.jsx(uP,{})})}),s.jsx(Hn,{path:"/projects",element:s.jsx(xr,{children:s.jsx(dP,{})})}),s.jsx(Hn,{path:"/about",element:s.jsx(xr,{children:s.jsx(yP,{})})}),s.jsx(Hn,{path:"*",element:s.jsx(xr,{children:s.jsx(xP,{})})})]},e.pathname)})})]})})})})]})}const kP=new URLSearchParams(window.location.search),Ep=kP.get("redirect");Ep&&window.history.replaceState(null,"",Ep);qf(document.getElementById("root")).render(s.jsx(Lw,{children:s.jsx(bP,{})}));
