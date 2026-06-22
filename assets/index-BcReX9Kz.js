var md=e=>{throw TypeError(e)};var Os=(e,t,n)=>t.has(e)||md("Cannot "+n);var E=(e,t,n)=>(Os(e,t,"read from private field"),n?n.call(e):t.get(e)),Y=(e,t,n)=>t.has(e)?md("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),V=(e,t,n,r)=>(Os(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n),je=(e,t,n)=>(Os(e,t,"access private method"),n);var Ao=(e,t,n,r)=>({set _(i){V(e,t,i,n)},get _(){return E(e,t,r)}});import{r as m,g as dy,R as Wc,j as a,a as Un,u as On,m as we,L as hy,d as py,A as my}from"./motion-DrBT6qPh.js";import{S as gy,P as fy,W as vy,a as yy,A as xy,b as by,D as wy,c as gd,G as Fp,M as Vi,T as ky,d as Gc,I as Cy,L as Bi,E as ba,e as wa,B as Sy,f as Ty,g as fd,h as Ny,C as Py,i as vd,j as jy,k as Ey,O as Ay,l as Iy,m as Ry,V as My}from"./three-DfGjiPv-.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var zp={exports:{}},et={},Vp={exports:{}},Bp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,L){var F=P.length;P.push(L);e:for(;0<F;){var H=F-1>>>1,Z=P[H];if(0<i(Z,L))P[H]=L,P[F]=Z,F=H;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var L=P[0],F=P.pop();if(F!==L){P[0]=F;e:for(var H=0,Z=P.length,We=Z>>>1;H<We;){var Le=2*(H+1)-1,rn=P[Le],Ge=Le+1,Ft=P[Ge];if(0>i(rn,F))Ge<Z&&0>i(Ft,rn)?(P[H]=Ft,P[Ge]=F,H=Ge):(P[H]=rn,P[Le]=F,H=Le);else if(Ge<Z&&0>i(Ft,F))P[H]=Ft,P[Ge]=F,H=Ge;else break e}}return L}function i(P,L){var F=P.sortIndex-L.sortIndex;return F!==0?F:P.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}var c=[],u=[],d=1,h=null,p=3,y=!1,k=!1,v=!1,w=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(P){for(var L=n(u);L!==null;){if(L.callback===null)r(u);else if(L.startTime<=P)r(u),L.sortIndex=L.expirationTime,t(c,L);else break;L=n(u)}}function b(P){if(v=!1,x(P),!k)if(n(c)!==null)k=!0,U(C);else{var L=n(u);L!==null&&G(b,L.startTime-P)}}function C(P,L){k=!1,v&&(v=!1,f(S),S=-1),y=!0;var F=p;try{for(x(L),h=n(c);h!==null&&(!(h.expirationTime>L)||P&&!O());){var H=h.callback;if(typeof H=="function"){h.callback=null,p=h.priorityLevel;var Z=H(h.expirationTime<=L);L=e.unstable_now(),typeof Z=="function"?h.callback=Z:h===n(c)&&r(c),x(L)}else r(c);h=n(c)}if(h!==null)var We=!0;else{var Le=n(u);Le!==null&&G(b,Le.startTime-L),We=!1}return We}finally{h=null,p=F,y=!1}}var T=!1,N=null,S=-1,j=5,A=-1;function O(){return!(e.unstable_now()-A<j)}function M(){if(N!==null){var P=e.unstable_now();A=P;var L=!0;try{L=N(!0,P)}finally{L?$():(T=!1,N=null)}}else T=!1}var $;if(typeof g=="function")$=function(){g(M)};else if(typeof MessageChannel<"u"){var D=new MessageChannel,W=D.port2;D.port1.onmessage=M,$=function(){W.postMessage(null)}}else $=function(){w(M,0)};function U(P){N=P,T||(T=!0,$())}function G(P,L){S=w(function(){P(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){k||y||(k=!0,U(C))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(P){switch(p){case 1:case 2:case 3:var L=3;break;default:L=p}var F=p;p=L;try{return P()}finally{p=F}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,L){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var F=p;p=P;try{return L()}finally{p=F}},e.unstable_scheduleCallback=function(P,L,F){var H=e.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?H+F:H):F=H,P){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=F+Z,P={id:d++,callback:L,priorityLevel:P,startTime:F,expirationTime:Z,sortIndex:-1},F>H?(P.sortIndex=F,t(u,P),n(c)===null&&P===n(u)&&(v?(f(S),S=-1):v=!0,G(b,F-H))):(P.sortIndex=Z,t(c,P),k||y||(k=!0,U(C))),P},e.unstable_shouldYield=O,e.unstable_wrapCallback=function(P){var L=p;return function(){var F=p;p=L;try{return P.apply(this,arguments)}finally{p=F}}}})(Bp);Vp.exports=Bp;var Ly=Vp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dy=m,Ze=Ly;function R(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Up=new Set,Ui={};function dr(e,t){Yr(e,t),Yr(e+"Capture",t)}function Yr(e,t){for(Ui[e]=t,e=0;e<t.length;e++)Up.add(t[e])}var Kt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),El=Object.prototype.hasOwnProperty,Oy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,yd={},xd={};function _y(e){return El.call(xd,e)?!0:El.call(yd,e)?!1:Oy.test(e)?xd[e]=!0:(yd[e]=!0,!1)}function qy(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Fy(e,t,n,r){if(t===null||typeof t>"u"||qy(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Fe(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var Te={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Te[e]=new Fe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Te[t]=new Fe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Te[e]=new Fe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Te[e]=new Fe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Te[e]=new Fe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Te[e]=new Fe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Te[e]=new Fe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Te[e]=new Fe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Te[e]=new Fe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Qc=/[\-:]([a-z])/g;function Kc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Qc,Kc);Te[t]=new Fe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Qc,Kc);Te[t]=new Fe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Qc,Kc);Te[t]=new Fe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Te[e]=new Fe(e,1,!1,e.toLowerCase(),null,!1,!1)});Te.xlinkHref=new Fe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Te[e]=new Fe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Yc(e,t,n,r){var i=Te.hasOwnProperty(t)?Te[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Fy(t,n,i,r)&&(n=null),r||i===null?_y(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var nn=Dy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Io=Symbol.for("react.element"),br=Symbol.for("react.portal"),wr=Symbol.for("react.fragment"),Xc=Symbol.for("react.strict_mode"),Al=Symbol.for("react.profiler"),Hp=Symbol.for("react.provider"),$p=Symbol.for("react.context"),Jc=Symbol.for("react.forward_ref"),Il=Symbol.for("react.suspense"),Rl=Symbol.for("react.suspense_list"),Zc=Symbol.for("react.memo"),un=Symbol.for("react.lazy"),Wp=Symbol.for("react.offscreen"),bd=Symbol.iterator;function vi(e){return e===null||typeof e!="object"?null:(e=bd&&e[bd]||e["@@iterator"],typeof e=="function"?e:null)}var ce=Object.assign,_s;function Pi(e){if(_s===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);_s=t&&t[1]||""}return`
`+_s+e}var qs=!1;function Fs(e,t){if(!e||qs)return"";qs=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,l=o.length-1;1<=s&&0<=l&&i[s]!==o[l];)l--;for(;1<=s&&0<=l;s--,l--)if(i[s]!==o[l]){if(s!==1||l!==1)do if(s--,l--,0>l||i[s]!==o[l]){var c=`
`+i[s].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=s&&0<=l);break}}}finally{qs=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Pi(e):""}function zy(e){switch(e.tag){case 5:return Pi(e.type);case 16:return Pi("Lazy");case 13:return Pi("Suspense");case 19:return Pi("SuspenseList");case 0:case 2:case 15:return e=Fs(e.type,!1),e;case 11:return e=Fs(e.type.render,!1),e;case 1:return e=Fs(e.type,!0),e;default:return""}}function Ml(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case wr:return"Fragment";case br:return"Portal";case Al:return"Profiler";case Xc:return"StrictMode";case Il:return"Suspense";case Rl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case $p:return(e.displayName||"Context")+".Consumer";case Hp:return(e._context.displayName||"Context")+".Provider";case Jc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Zc:return t=e.displayName||null,t!==null?t:Ml(e.type)||"Memo";case un:t=e._payload,e=e._init;try{return Ml(e(t))}catch{}}return null}function Vy(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ml(t);case 8:return t===Xc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Rn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Gp(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function By(e){var t=Gp(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ro(e){e._valueTracker||(e._valueTracker=By(e))}function Qp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Gp(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function ka(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ll(e,t){var n=t.checked;return ce({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function wd(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Rn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Kp(e,t){t=t.checked,t!=null&&Yc(e,"checked",t,!1)}function Dl(e,t){Kp(e,t);var n=Rn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ol(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ol(e,t.type,Rn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function kd(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ol(e,t,n){(t!=="number"||ka(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ji=Array.isArray;function Rr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Rn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function _l(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(R(91));return ce({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Cd(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(R(92));if(ji(n)){if(1<n.length)throw Error(R(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Rn(n)}}function Yp(e,t){var n=Rn(t.value),r=Rn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Sd(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Xp(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ql(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Xp(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Mo,Jp=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Mo=Mo||document.createElement("div"),Mo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Mo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Hi(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ii={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Uy=["Webkit","ms","Moz","O"];Object.keys(Ii).forEach(function(e){Uy.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ii[t]=Ii[e]})});function Zp(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ii.hasOwnProperty(e)&&Ii[e]?(""+t).trim():t+"px"}function em(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Zp(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Hy=ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Fl(e,t){if(t){if(Hy[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(R(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(R(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(R(61))}if(t.style!=null&&typeof t.style!="object")throw Error(R(62))}}function zl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Vl=null;function eu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Bl=null,Mr=null,Lr=null;function Td(e){if(e=xo(e)){if(typeof Bl!="function")throw Error(R(280));var t=e.stateNode;t&&(t=ss(t),Bl(e.stateNode,e.type,t))}}function tm(e){Mr?Lr?Lr.push(e):Lr=[e]:Mr=e}function nm(){if(Mr){var e=Mr,t=Lr;if(Lr=Mr=null,Td(e),t)for(e=0;e<t.length;e++)Td(t[e])}}function rm(e,t){return e(t)}function im(){}var zs=!1;function om(e,t,n){if(zs)return e(t,n);zs=!0;try{return rm(e,t,n)}finally{zs=!1,(Mr!==null||Lr!==null)&&(im(),nm())}}function $i(e,t){var n=e.stateNode;if(n===null)return null;var r=ss(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(R(231,t,typeof n));return n}var Ul=!1;if(Kt)try{var yi={};Object.defineProperty(yi,"passive",{get:function(){Ul=!0}}),window.addEventListener("test",yi,yi),window.removeEventListener("test",yi,yi)}catch{Ul=!1}function $y(e,t,n,r,i,o,s,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var Ri=!1,Ca=null,Sa=!1,Hl=null,Wy={onError:function(e){Ri=!0,Ca=e}};function Gy(e,t,n,r,i,o,s,l,c){Ri=!1,Ca=null,$y.apply(Wy,arguments)}function Qy(e,t,n,r,i,o,s,l,c){if(Gy.apply(this,arguments),Ri){if(Ri){var u=Ca;Ri=!1,Ca=null}else throw Error(R(198));Sa||(Sa=!0,Hl=u)}}function hr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function am(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Nd(e){if(hr(e)!==e)throw Error(R(188))}function Ky(e){var t=e.alternate;if(!t){if(t=hr(e),t===null)throw Error(R(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Nd(i),e;if(o===r)return Nd(i),t;o=o.sibling}throw Error(R(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,l=i.child;l;){if(l===n){s=!0,n=i,r=o;break}if(l===r){s=!0,r=i,n=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===n){s=!0,n=o,r=i;break}if(l===r){s=!0,r=o,n=i;break}l=l.sibling}if(!s)throw Error(R(189))}}if(n.alternate!==r)throw Error(R(190))}if(n.tag!==3)throw Error(R(188));return n.stateNode.current===n?e:t}function sm(e){return e=Ky(e),e!==null?lm(e):null}function lm(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=lm(e);if(t!==null)return t;e=e.sibling}return null}var cm=Ze.unstable_scheduleCallback,Pd=Ze.unstable_cancelCallback,Yy=Ze.unstable_shouldYield,Xy=Ze.unstable_requestPaint,he=Ze.unstable_now,Jy=Ze.unstable_getCurrentPriorityLevel,tu=Ze.unstable_ImmediatePriority,um=Ze.unstable_UserBlockingPriority,Ta=Ze.unstable_NormalPriority,Zy=Ze.unstable_LowPriority,dm=Ze.unstable_IdlePriority,rs=null,Mt=null;function ex(e){if(Mt&&typeof Mt.onCommitFiberRoot=="function")try{Mt.onCommitFiberRoot(rs,e,void 0,(e.current.flags&128)===128)}catch{}}var xt=Math.clz32?Math.clz32:rx,tx=Math.log,nx=Math.LN2;function rx(e){return e>>>=0,e===0?32:31-(tx(e)/nx|0)|0}var Lo=64,Do=4194304;function Ei(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Na(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var l=s&~i;l!==0?r=Ei(l):(o&=s,o!==0&&(r=Ei(o)))}else s=n&~i,s!==0?r=Ei(s):o!==0&&(r=Ei(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-xt(t),i=1<<n,r|=e[n],t&=~i;return r}function ix(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ox(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-xt(o),l=1<<s,c=i[s];c===-1?(!(l&n)||l&r)&&(i[s]=ix(l,t)):c<=t&&(e.expiredLanes|=l),o&=~l}}function $l(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function hm(){var e=Lo;return Lo<<=1,!(Lo&4194240)&&(Lo=64),e}function Vs(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function vo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-xt(t),e[t]=n}function ax(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-xt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function nu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-xt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var J=0;function pm(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var mm,ru,gm,fm,vm,Wl=!1,Oo=[],Cn=null,Sn=null,Tn=null,Wi=new Map,Gi=new Map,hn=[],sx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function jd(e,t){switch(e){case"focusin":case"focusout":Cn=null;break;case"dragenter":case"dragleave":Sn=null;break;case"mouseover":case"mouseout":Tn=null;break;case"pointerover":case"pointerout":Wi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Gi.delete(t.pointerId)}}function xi(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=xo(t),t!==null&&ru(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function lx(e,t,n,r,i){switch(t){case"focusin":return Cn=xi(Cn,e,t,n,r,i),!0;case"dragenter":return Sn=xi(Sn,e,t,n,r,i),!0;case"mouseover":return Tn=xi(Tn,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Wi.set(o,xi(Wi.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Gi.set(o,xi(Gi.get(o)||null,e,t,n,r,i)),!0}return!1}function ym(e){var t=Gn(e.target);if(t!==null){var n=hr(t);if(n!==null){if(t=n.tag,t===13){if(t=am(n),t!==null){e.blockedOn=t,vm(e.priority,function(){gm(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ra(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Gl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Vl=r,n.target.dispatchEvent(r),Vl=null}else return t=xo(n),t!==null&&ru(t),e.blockedOn=n,!1;t.shift()}return!0}function Ed(e,t,n){ra(e)&&n.delete(t)}function cx(){Wl=!1,Cn!==null&&ra(Cn)&&(Cn=null),Sn!==null&&ra(Sn)&&(Sn=null),Tn!==null&&ra(Tn)&&(Tn=null),Wi.forEach(Ed),Gi.forEach(Ed)}function bi(e,t){e.blockedOn===t&&(e.blockedOn=null,Wl||(Wl=!0,Ze.unstable_scheduleCallback(Ze.unstable_NormalPriority,cx)))}function Qi(e){function t(i){return bi(i,e)}if(0<Oo.length){bi(Oo[0],e);for(var n=1;n<Oo.length;n++){var r=Oo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Cn!==null&&bi(Cn,e),Sn!==null&&bi(Sn,e),Tn!==null&&bi(Tn,e),Wi.forEach(t),Gi.forEach(t),n=0;n<hn.length;n++)r=hn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<hn.length&&(n=hn[0],n.blockedOn===null);)ym(n),n.blockedOn===null&&hn.shift()}var Dr=nn.ReactCurrentBatchConfig,Pa=!0;function ux(e,t,n,r){var i=J,o=Dr.transition;Dr.transition=null;try{J=1,iu(e,t,n,r)}finally{J=i,Dr.transition=o}}function dx(e,t,n,r){var i=J,o=Dr.transition;Dr.transition=null;try{J=4,iu(e,t,n,r)}finally{J=i,Dr.transition=o}}function iu(e,t,n,r){if(Pa){var i=Gl(e,t,n,r);if(i===null)Xs(e,t,r,ja,n),jd(e,r);else if(lx(i,e,t,n,r))r.stopPropagation();else if(jd(e,r),t&4&&-1<sx.indexOf(e)){for(;i!==null;){var o=xo(i);if(o!==null&&mm(o),o=Gl(e,t,n,r),o===null&&Xs(e,t,r,ja,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Xs(e,t,r,null,n)}}var ja=null;function Gl(e,t,n,r){if(ja=null,e=eu(r),e=Gn(e),e!==null)if(t=hr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=am(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ja=e,null}function xm(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Jy()){case tu:return 1;case um:return 4;case Ta:case Zy:return 16;case dm:return 536870912;default:return 16}default:return 16}}var xn=null,ou=null,ia=null;function bm(){if(ia)return ia;var e,t=ou,n=t.length,r,i="value"in xn?xn.value:xn.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return ia=i.slice(e,1<r?1-r:void 0)}function oa(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function _o(){return!0}function Ad(){return!1}function tt(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?_o:Ad,this.isPropagationStopped=Ad,this}return ce(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=_o)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=_o)},persist:function(){},isPersistent:_o}),t}var ui={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},au=tt(ui),yo=ce({},ui,{view:0,detail:0}),hx=tt(yo),Bs,Us,wi,is=ce({},yo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:su,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==wi&&(wi&&e.type==="mousemove"?(Bs=e.screenX-wi.screenX,Us=e.screenY-wi.screenY):Us=Bs=0,wi=e),Bs)},movementY:function(e){return"movementY"in e?e.movementY:Us}}),Id=tt(is),px=ce({},is,{dataTransfer:0}),mx=tt(px),gx=ce({},yo,{relatedTarget:0}),Hs=tt(gx),fx=ce({},ui,{animationName:0,elapsedTime:0,pseudoElement:0}),vx=tt(fx),yx=ce({},ui,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),xx=tt(yx),bx=ce({},ui,{data:0}),Rd=tt(bx),wx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sx(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Cx[e])?!!t[e]:!1}function su(){return Sx}var Tx=ce({},yo,{key:function(e){if(e.key){var t=wx[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=oa(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?kx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:su,charCode:function(e){return e.type==="keypress"?oa(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?oa(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Nx=tt(Tx),Px=ce({},is,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Md=tt(Px),jx=ce({},yo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:su}),Ex=tt(jx),Ax=ce({},ui,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ix=tt(Ax),Rx=ce({},is,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Mx=tt(Rx),Lx=[9,13,27,32],lu=Kt&&"CompositionEvent"in window,Mi=null;Kt&&"documentMode"in document&&(Mi=document.documentMode);var Dx=Kt&&"TextEvent"in window&&!Mi,wm=Kt&&(!lu||Mi&&8<Mi&&11>=Mi),Ld=" ",Dd=!1;function km(e,t){switch(e){case"keyup":return Lx.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Cm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var kr=!1;function Ox(e,t){switch(e){case"compositionend":return Cm(t);case"keypress":return t.which!==32?null:(Dd=!0,Ld);case"textInput":return e=t.data,e===Ld&&Dd?null:e;default:return null}}function _x(e,t){if(kr)return e==="compositionend"||!lu&&km(e,t)?(e=bm(),ia=ou=xn=null,kr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return wm&&t.locale!=="ko"?null:t.data;default:return null}}var qx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Od(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!qx[e.type]:t==="textarea"}function Sm(e,t,n,r){tm(r),t=Ea(t,"onChange"),0<t.length&&(n=new au("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Li=null,Ki=null;function Fx(e){Dm(e,0)}function os(e){var t=Tr(e);if(Qp(t))return e}function zx(e,t){if(e==="change")return t}var Tm=!1;if(Kt){var $s;if(Kt){var Ws="oninput"in document;if(!Ws){var _d=document.createElement("div");_d.setAttribute("oninput","return;"),Ws=typeof _d.oninput=="function"}$s=Ws}else $s=!1;Tm=$s&&(!document.documentMode||9<document.documentMode)}function qd(){Li&&(Li.detachEvent("onpropertychange",Nm),Ki=Li=null)}function Nm(e){if(e.propertyName==="value"&&os(Ki)){var t=[];Sm(t,Ki,e,eu(e)),om(Fx,t)}}function Vx(e,t,n){e==="focusin"?(qd(),Li=t,Ki=n,Li.attachEvent("onpropertychange",Nm)):e==="focusout"&&qd()}function Bx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return os(Ki)}function Ux(e,t){if(e==="click")return os(t)}function Hx(e,t){if(e==="input"||e==="change")return os(t)}function $x(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var wt=typeof Object.is=="function"?Object.is:$x;function Yi(e,t){if(wt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!El.call(t,i)||!wt(e[i],t[i]))return!1}return!0}function Fd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function zd(e,t){var n=Fd(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Fd(n)}}function Pm(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Pm(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function jm(){for(var e=window,t=ka();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ka(e.document)}return t}function cu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Wx(e){var t=jm(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Pm(n.ownerDocument.documentElement,n)){if(r!==null&&cu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=zd(n,o);var s=zd(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Gx=Kt&&"documentMode"in document&&11>=document.documentMode,Cr=null,Ql=null,Di=null,Kl=!1;function Vd(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Kl||Cr==null||Cr!==ka(r)||(r=Cr,"selectionStart"in r&&cu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Di&&Yi(Di,r)||(Di=r,r=Ea(Ql,"onSelect"),0<r.length&&(t=new au("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Cr)))}function qo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Sr={animationend:qo("Animation","AnimationEnd"),animationiteration:qo("Animation","AnimationIteration"),animationstart:qo("Animation","AnimationStart"),transitionend:qo("Transition","TransitionEnd")},Gs={},Em={};Kt&&(Em=document.createElement("div").style,"AnimationEvent"in window||(delete Sr.animationend.animation,delete Sr.animationiteration.animation,delete Sr.animationstart.animation),"TransitionEvent"in window||delete Sr.transitionend.transition);function as(e){if(Gs[e])return Gs[e];if(!Sr[e])return e;var t=Sr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Em)return Gs[e]=t[n];return e}var Am=as("animationend"),Im=as("animationiteration"),Rm=as("animationstart"),Mm=as("transitionend"),Lm=new Map,Bd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function _n(e,t){Lm.set(e,t),dr(t,[e])}for(var Qs=0;Qs<Bd.length;Qs++){var Ks=Bd[Qs],Qx=Ks.toLowerCase(),Kx=Ks[0].toUpperCase()+Ks.slice(1);_n(Qx,"on"+Kx)}_n(Am,"onAnimationEnd");_n(Im,"onAnimationIteration");_n(Rm,"onAnimationStart");_n("dblclick","onDoubleClick");_n("focusin","onFocus");_n("focusout","onBlur");_n(Mm,"onTransitionEnd");Yr("onMouseEnter",["mouseout","mouseover"]);Yr("onMouseLeave",["mouseout","mouseover"]);Yr("onPointerEnter",["pointerout","pointerover"]);Yr("onPointerLeave",["pointerout","pointerover"]);dr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));dr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));dr("onBeforeInput",["compositionend","keypress","textInput","paste"]);dr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));dr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));dr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ai="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ai));function Ud(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Qy(r,t,void 0,e),e.currentTarget=null}function Dm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var l=r[s],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==o&&i.isPropagationStopped())break e;Ud(i,l,u),o=c}else for(s=0;s<r.length;s++){if(l=r[s],c=l.instance,u=l.currentTarget,l=l.listener,c!==o&&i.isPropagationStopped())break e;Ud(i,l,u),o=c}}}if(Sa)throw e=Hl,Sa=!1,Hl=null,e}function ne(e,t){var n=t[ec];n===void 0&&(n=t[ec]=new Set);var r=e+"__bubble";n.has(r)||(Om(t,e,2,!1),n.add(r))}function Ys(e,t,n){var r=0;t&&(r|=4),Om(n,e,r,t)}var Fo="_reactListening"+Math.random().toString(36).slice(2);function Xi(e){if(!e[Fo]){e[Fo]=!0,Up.forEach(function(n){n!=="selectionchange"&&(Yx.has(n)||Ys(n,!1,e),Ys(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Fo]||(t[Fo]=!0,Ys("selectionchange",!1,t))}}function Om(e,t,n,r){switch(xm(t)){case 1:var i=ux;break;case 4:i=dx;break;default:i=iu}n=i.bind(null,t,n,e),i=void 0,!Ul||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Xs(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var c=s.tag;if((c===3||c===4)&&(c=s.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;s=s.return}for(;l!==null;){if(s=Gn(l),s===null)return;if(c=s.tag,c===5||c===6){r=o=s;continue e}l=l.parentNode}}r=r.return}om(function(){var u=o,d=eu(n),h=[];e:{var p=Lm.get(e);if(p!==void 0){var y=au,k=e;switch(e){case"keypress":if(oa(n)===0)break e;case"keydown":case"keyup":y=Nx;break;case"focusin":k="focus",y=Hs;break;case"focusout":k="blur",y=Hs;break;case"beforeblur":case"afterblur":y=Hs;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Id;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=mx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Ex;break;case Am:case Im:case Rm:y=vx;break;case Mm:y=Ix;break;case"scroll":y=hx;break;case"wheel":y=Mx;break;case"copy":case"cut":case"paste":y=xx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Md}var v=(t&4)!==0,w=!v&&e==="scroll",f=v?p!==null?p+"Capture":null:p;v=[];for(var g=u,x;g!==null;){x=g;var b=x.stateNode;if(x.tag===5&&b!==null&&(x=b,f!==null&&(b=$i(g,f),b!=null&&v.push(Ji(g,b,x)))),w)break;g=g.return}0<v.length&&(p=new y(p,k,null,n,d),h.push({event:p,listeners:v}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",p&&n!==Vl&&(k=n.relatedTarget||n.fromElement)&&(Gn(k)||k[Yt]))break e;if((y||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,y?(k=n.relatedTarget||n.toElement,y=u,k=k?Gn(k):null,k!==null&&(w=hr(k),k!==w||k.tag!==5&&k.tag!==6)&&(k=null)):(y=null,k=u),y!==k)){if(v=Id,b="onMouseLeave",f="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(v=Md,b="onPointerLeave",f="onPointerEnter",g="pointer"),w=y==null?p:Tr(y),x=k==null?p:Tr(k),p=new v(b,g+"leave",y,n,d),p.target=w,p.relatedTarget=x,b=null,Gn(d)===u&&(v=new v(f,g+"enter",k,n,d),v.target=x,v.relatedTarget=w,b=v),w=b,y&&k)t:{for(v=y,f=k,g=0,x=v;x;x=mr(x))g++;for(x=0,b=f;b;b=mr(b))x++;for(;0<g-x;)v=mr(v),g--;for(;0<x-g;)f=mr(f),x--;for(;g--;){if(v===f||f!==null&&v===f.alternate)break t;v=mr(v),f=mr(f)}v=null}else v=null;y!==null&&Hd(h,p,y,v,!1),k!==null&&w!==null&&Hd(h,w,k,v,!0)}}e:{if(p=u?Tr(u):window,y=p.nodeName&&p.nodeName.toLowerCase(),y==="select"||y==="input"&&p.type==="file")var C=zx;else if(Od(p))if(Tm)C=Hx;else{C=Bx;var T=Vx}else(y=p.nodeName)&&y.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(C=Ux);if(C&&(C=C(e,u))){Sm(h,C,n,d);break e}T&&T(e,p,u),e==="focusout"&&(T=p._wrapperState)&&T.controlled&&p.type==="number"&&Ol(p,"number",p.value)}switch(T=u?Tr(u):window,e){case"focusin":(Od(T)||T.contentEditable==="true")&&(Cr=T,Ql=u,Di=null);break;case"focusout":Di=Ql=Cr=null;break;case"mousedown":Kl=!0;break;case"contextmenu":case"mouseup":case"dragend":Kl=!1,Vd(h,n,d);break;case"selectionchange":if(Gx)break;case"keydown":case"keyup":Vd(h,n,d)}var N;if(lu)e:{switch(e){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else kr?km(e,n)&&(S="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(S="onCompositionStart");S&&(wm&&n.locale!=="ko"&&(kr||S!=="onCompositionStart"?S==="onCompositionEnd"&&kr&&(N=bm()):(xn=d,ou="value"in xn?xn.value:xn.textContent,kr=!0)),T=Ea(u,S),0<T.length&&(S=new Rd(S,e,null,n,d),h.push({event:S,listeners:T}),N?S.data=N:(N=Cm(n),N!==null&&(S.data=N)))),(N=Dx?Ox(e,n):_x(e,n))&&(u=Ea(u,"onBeforeInput"),0<u.length&&(d=new Rd("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:u}),d.data=N))}Dm(h,t)})}function Ji(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ea(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=$i(e,n),o!=null&&r.unshift(Ji(e,o,i)),o=$i(e,t),o!=null&&r.push(Ji(e,o,i))),e=e.return}return r}function mr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Hd(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&u!==null&&(l=u,i?(c=$i(n,o),c!=null&&s.unshift(Ji(n,c,l))):i||(c=$i(n,o),c!=null&&s.push(Ji(n,c,l)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Xx=/\r\n?/g,Jx=/\u0000|\uFFFD/g;function $d(e){return(typeof e=="string"?e:""+e).replace(Xx,`
`).replace(Jx,"")}function zo(e,t,n){if(t=$d(t),$d(e)!==t&&n)throw Error(R(425))}function Aa(){}var Yl=null,Xl=null;function Jl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Zl=typeof setTimeout=="function"?setTimeout:void 0,Zx=typeof clearTimeout=="function"?clearTimeout:void 0,Wd=typeof Promise=="function"?Promise:void 0,eb=typeof queueMicrotask=="function"?queueMicrotask:typeof Wd<"u"?function(e){return Wd.resolve(null).then(e).catch(tb)}:Zl;function tb(e){setTimeout(function(){throw e})}function Js(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Qi(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Qi(t)}function Nn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Gd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var di=Math.random().toString(36).slice(2),At="__reactFiber$"+di,Zi="__reactProps$"+di,Yt="__reactContainer$"+di,ec="__reactEvents$"+di,nb="__reactListeners$"+di,rb="__reactHandles$"+di;function Gn(e){var t=e[At];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Yt]||n[At]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Gd(e);e!==null;){if(n=e[At])return n;e=Gd(e)}return t}e=n,n=e.parentNode}return null}function xo(e){return e=e[At]||e[Yt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Tr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(R(33))}function ss(e){return e[Zi]||null}var tc=[],Nr=-1;function qn(e){return{current:e}}function re(e){0>Nr||(e.current=tc[Nr],tc[Nr]=null,Nr--)}function ee(e,t){Nr++,tc[Nr]=e.current,e.current=t}var Mn={},Me=qn(Mn),Be=qn(!1),or=Mn;function Xr(e,t){var n=e.type.contextTypes;if(!n)return Mn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ue(e){return e=e.childContextTypes,e!=null}function Ia(){re(Be),re(Me)}function Qd(e,t,n){if(Me.current!==Mn)throw Error(R(168));ee(Me,t),ee(Be,n)}function _m(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(R(108,Vy(e)||"Unknown",i));return ce({},n,r)}function Ra(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Mn,or=Me.current,ee(Me,e),ee(Be,Be.current),!0}function Kd(e,t,n){var r=e.stateNode;if(!r)throw Error(R(169));n?(e=_m(e,t,or),r.__reactInternalMemoizedMergedChildContext=e,re(Be),re(Me),ee(Me,e)):re(Be),ee(Be,n)}var Ut=null,ls=!1,Zs=!1;function qm(e){Ut===null?Ut=[e]:Ut.push(e)}function ib(e){ls=!0,qm(e)}function Fn(){if(!Zs&&Ut!==null){Zs=!0;var e=0,t=J;try{var n=Ut;for(J=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ut=null,ls=!1}catch(i){throw Ut!==null&&(Ut=Ut.slice(e+1)),cm(tu,Fn),i}finally{J=t,Zs=!1}}return null}var Pr=[],jr=0,Ma=null,La=0,rt=[],it=0,ar=null,$t=1,Wt="";function Hn(e,t){Pr[jr++]=La,Pr[jr++]=Ma,Ma=e,La=t}function Fm(e,t,n){rt[it++]=$t,rt[it++]=Wt,rt[it++]=ar,ar=e;var r=$t;e=Wt;var i=32-xt(r)-1;r&=~(1<<i),n+=1;var o=32-xt(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,$t=1<<32-xt(t)+i|n<<i|r,Wt=o+e}else $t=1<<o|n<<i|r,Wt=e}function uu(e){e.return!==null&&(Hn(e,1),Fm(e,1,0))}function du(e){for(;e===Ma;)Ma=Pr[--jr],Pr[jr]=null,La=Pr[--jr],Pr[jr]=null;for(;e===ar;)ar=rt[--it],rt[it]=null,Wt=rt[--it],rt[it]=null,$t=rt[--it],rt[it]=null}var Xe=null,Ye=null,ie=!1,yt=null;function zm(e,t){var n=ot(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Yd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Xe=e,Ye=Nn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Xe=e,Ye=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=ar!==null?{id:$t,overflow:Wt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ot(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Xe=e,Ye=null,!0):!1;default:return!1}}function nc(e){return(e.mode&1)!==0&&(e.flags&128)===0}function rc(e){if(ie){var t=Ye;if(t){var n=t;if(!Yd(e,t)){if(nc(e))throw Error(R(418));t=Nn(n.nextSibling);var r=Xe;t&&Yd(e,t)?zm(r,n):(e.flags=e.flags&-4097|2,ie=!1,Xe=e)}}else{if(nc(e))throw Error(R(418));e.flags=e.flags&-4097|2,ie=!1,Xe=e}}}function Xd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Xe=e}function Vo(e){if(e!==Xe)return!1;if(!ie)return Xd(e),ie=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Jl(e.type,e.memoizedProps)),t&&(t=Ye)){if(nc(e))throw Vm(),Error(R(418));for(;t;)zm(e,t),t=Nn(t.nextSibling)}if(Xd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(R(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ye=Nn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ye=null}}else Ye=Xe?Nn(e.stateNode.nextSibling):null;return!0}function Vm(){for(var e=Ye;e;)e=Nn(e.nextSibling)}function Jr(){Ye=Xe=null,ie=!1}function hu(e){yt===null?yt=[e]:yt.push(e)}var ob=nn.ReactCurrentBatchConfig;function ki(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(R(309));var r=n.stateNode}if(!r)throw Error(R(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var l=i.refs;s===null?delete l[o]:l[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(R(284));if(!n._owner)throw Error(R(290,e))}return e}function Bo(e,t){throw e=Object.prototype.toString.call(t),Error(R(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Jd(e){var t=e._init;return t(e._payload)}function Bm(e){function t(f,g){if(e){var x=f.deletions;x===null?(f.deletions=[g],f.flags|=16):x.push(g)}}function n(f,g){if(!e)return null;for(;g!==null;)t(f,g),g=g.sibling;return null}function r(f,g){for(f=new Map;g!==null;)g.key!==null?f.set(g.key,g):f.set(g.index,g),g=g.sibling;return f}function i(f,g){return f=An(f,g),f.index=0,f.sibling=null,f}function o(f,g,x){return f.index=x,e?(x=f.alternate,x!==null?(x=x.index,x<g?(f.flags|=2,g):x):(f.flags|=2,g)):(f.flags|=1048576,g)}function s(f){return e&&f.alternate===null&&(f.flags|=2),f}function l(f,g,x,b){return g===null||g.tag!==6?(g=al(x,f.mode,b),g.return=f,g):(g=i(g,x),g.return=f,g)}function c(f,g,x,b){var C=x.type;return C===wr?d(f,g,x.props.children,b,x.key):g!==null&&(g.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===un&&Jd(C)===g.type)?(b=i(g,x.props),b.ref=ki(f,g,x),b.return=f,b):(b=ha(x.type,x.key,x.props,null,f.mode,b),b.ref=ki(f,g,x),b.return=f,b)}function u(f,g,x,b){return g===null||g.tag!==4||g.stateNode.containerInfo!==x.containerInfo||g.stateNode.implementation!==x.implementation?(g=sl(x,f.mode,b),g.return=f,g):(g=i(g,x.children||[]),g.return=f,g)}function d(f,g,x,b,C){return g===null||g.tag!==7?(g=rr(x,f.mode,b,C),g.return=f,g):(g=i(g,x),g.return=f,g)}function h(f,g,x){if(typeof g=="string"&&g!==""||typeof g=="number")return g=al(""+g,f.mode,x),g.return=f,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Io:return x=ha(g.type,g.key,g.props,null,f.mode,x),x.ref=ki(f,null,g),x.return=f,x;case br:return g=sl(g,f.mode,x),g.return=f,g;case un:var b=g._init;return h(f,b(g._payload),x)}if(ji(g)||vi(g))return g=rr(g,f.mode,x,null),g.return=f,g;Bo(f,g)}return null}function p(f,g,x,b){var C=g!==null?g.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return C!==null?null:l(f,g,""+x,b);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Io:return x.key===C?c(f,g,x,b):null;case br:return x.key===C?u(f,g,x,b):null;case un:return C=x._init,p(f,g,C(x._payload),b)}if(ji(x)||vi(x))return C!==null?null:d(f,g,x,b,null);Bo(f,x)}return null}function y(f,g,x,b,C){if(typeof b=="string"&&b!==""||typeof b=="number")return f=f.get(x)||null,l(g,f,""+b,C);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Io:return f=f.get(b.key===null?x:b.key)||null,c(g,f,b,C);case br:return f=f.get(b.key===null?x:b.key)||null,u(g,f,b,C);case un:var T=b._init;return y(f,g,x,T(b._payload),C)}if(ji(b)||vi(b))return f=f.get(x)||null,d(g,f,b,C,null);Bo(g,b)}return null}function k(f,g,x,b){for(var C=null,T=null,N=g,S=g=0,j=null;N!==null&&S<x.length;S++){N.index>S?(j=N,N=null):j=N.sibling;var A=p(f,N,x[S],b);if(A===null){N===null&&(N=j);break}e&&N&&A.alternate===null&&t(f,N),g=o(A,g,S),T===null?C=A:T.sibling=A,T=A,N=j}if(S===x.length)return n(f,N),ie&&Hn(f,S),C;if(N===null){for(;S<x.length;S++)N=h(f,x[S],b),N!==null&&(g=o(N,g,S),T===null?C=N:T.sibling=N,T=N);return ie&&Hn(f,S),C}for(N=r(f,N);S<x.length;S++)j=y(N,f,S,x[S],b),j!==null&&(e&&j.alternate!==null&&N.delete(j.key===null?S:j.key),g=o(j,g,S),T===null?C=j:T.sibling=j,T=j);return e&&N.forEach(function(O){return t(f,O)}),ie&&Hn(f,S),C}function v(f,g,x,b){var C=vi(x);if(typeof C!="function")throw Error(R(150));if(x=C.call(x),x==null)throw Error(R(151));for(var T=C=null,N=g,S=g=0,j=null,A=x.next();N!==null&&!A.done;S++,A=x.next()){N.index>S?(j=N,N=null):j=N.sibling;var O=p(f,N,A.value,b);if(O===null){N===null&&(N=j);break}e&&N&&O.alternate===null&&t(f,N),g=o(O,g,S),T===null?C=O:T.sibling=O,T=O,N=j}if(A.done)return n(f,N),ie&&Hn(f,S),C;if(N===null){for(;!A.done;S++,A=x.next())A=h(f,A.value,b),A!==null&&(g=o(A,g,S),T===null?C=A:T.sibling=A,T=A);return ie&&Hn(f,S),C}for(N=r(f,N);!A.done;S++,A=x.next())A=y(N,f,S,A.value,b),A!==null&&(e&&A.alternate!==null&&N.delete(A.key===null?S:A.key),g=o(A,g,S),T===null?C=A:T.sibling=A,T=A);return e&&N.forEach(function(M){return t(f,M)}),ie&&Hn(f,S),C}function w(f,g,x,b){if(typeof x=="object"&&x!==null&&x.type===wr&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Io:e:{for(var C=x.key,T=g;T!==null;){if(T.key===C){if(C=x.type,C===wr){if(T.tag===7){n(f,T.sibling),g=i(T,x.props.children),g.return=f,f=g;break e}}else if(T.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===un&&Jd(C)===T.type){n(f,T.sibling),g=i(T,x.props),g.ref=ki(f,T,x),g.return=f,f=g;break e}n(f,T);break}else t(f,T);T=T.sibling}x.type===wr?(g=rr(x.props.children,f.mode,b,x.key),g.return=f,f=g):(b=ha(x.type,x.key,x.props,null,f.mode,b),b.ref=ki(f,g,x),b.return=f,f=b)}return s(f);case br:e:{for(T=x.key;g!==null;){if(g.key===T)if(g.tag===4&&g.stateNode.containerInfo===x.containerInfo&&g.stateNode.implementation===x.implementation){n(f,g.sibling),g=i(g,x.children||[]),g.return=f,f=g;break e}else{n(f,g);break}else t(f,g);g=g.sibling}g=sl(x,f.mode,b),g.return=f,f=g}return s(f);case un:return T=x._init,w(f,g,T(x._payload),b)}if(ji(x))return k(f,g,x,b);if(vi(x))return v(f,g,x,b);Bo(f,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,g!==null&&g.tag===6?(n(f,g.sibling),g=i(g,x),g.return=f,f=g):(n(f,g),g=al(x,f.mode,b),g.return=f,f=g),s(f)):n(f,g)}return w}var Zr=Bm(!0),Um=Bm(!1),Da=qn(null),Oa=null,Er=null,pu=null;function mu(){pu=Er=Oa=null}function gu(e){var t=Da.current;re(Da),e._currentValue=t}function ic(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Or(e,t){Oa=e,pu=Er=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ve=!0),e.firstContext=null)}function lt(e){var t=e._currentValue;if(pu!==e)if(e={context:e,memoizedValue:t,next:null},Er===null){if(Oa===null)throw Error(R(308));Er=e,Oa.dependencies={lanes:0,firstContext:e}}else Er=Er.next=e;return t}var Qn=null;function fu(e){Qn===null?Qn=[e]:Qn.push(e)}function Hm(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,fu(t)):(n.next=i.next,i.next=n),t.interleaved=n,Xt(e,r)}function Xt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var dn=!1;function vu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $m(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Gt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Pn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,K&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Xt(e,n)}return i=r.interleaved,i===null?(t.next=t,fu(r)):(t.next=i.next,i.next=t),r.interleaved=t,Xt(e,n)}function aa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,nu(e,n)}}function Zd(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function _a(e,t,n,r){var i=e.updateQueue;dn=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,u=c.next;c.next=null,s===null?o=u:s.next=u,s=c;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==s&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=c))}if(o!==null){var h=i.baseState;s=0,d=u=c=null,l=o;do{var p=l.lane,y=l.eventTime;if((r&p)===p){d!==null&&(d=d.next={eventTime:y,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var k=e,v=l;switch(p=t,y=n,v.tag){case 1:if(k=v.payload,typeof k=="function"){h=k.call(y,h,p);break e}h=k;break e;case 3:k.flags=k.flags&-65537|128;case 0:if(k=v.payload,p=typeof k=="function"?k.call(y,h,p):k,p==null)break e;h=ce({},h,p);break e;case 2:dn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[l]:p.push(l))}else y={eventTime:y,lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=y,c=h):d=d.next=y,s|=p;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;p=l,l=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(d===null&&(c=h),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);lr|=s,e.lanes=s,e.memoizedState=h}}function eh(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(R(191,i));i.call(r)}}}var bo={},Lt=qn(bo),eo=qn(bo),to=qn(bo);function Kn(e){if(e===bo)throw Error(R(174));return e}function yu(e,t){switch(ee(to,t),ee(eo,e),ee(Lt,bo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ql(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ql(t,e)}re(Lt),ee(Lt,t)}function ei(){re(Lt),re(eo),re(to)}function Wm(e){Kn(to.current);var t=Kn(Lt.current),n=ql(t,e.type);t!==n&&(ee(eo,e),ee(Lt,n))}function xu(e){eo.current===e&&(re(Lt),re(eo))}var se=qn(0);function qa(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var el=[];function bu(){for(var e=0;e<el.length;e++)el[e]._workInProgressVersionPrimary=null;el.length=0}var sa=nn.ReactCurrentDispatcher,tl=nn.ReactCurrentBatchConfig,sr=0,le=null,fe=null,be=null,Fa=!1,Oi=!1,no=0,ab=0;function Ee(){throw Error(R(321))}function wu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!wt(e[n],t[n]))return!1;return!0}function ku(e,t,n,r,i,o){if(sr=o,le=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,sa.current=e===null||e.memoizedState===null?ub:db,e=n(r,i),Oi){o=0;do{if(Oi=!1,no=0,25<=o)throw Error(R(301));o+=1,be=fe=null,t.updateQueue=null,sa.current=hb,e=n(r,i)}while(Oi)}if(sa.current=za,t=fe!==null&&fe.next!==null,sr=0,be=fe=le=null,Fa=!1,t)throw Error(R(300));return e}function Cu(){var e=no!==0;return no=0,e}function Nt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return be===null?le.memoizedState=be=e:be=be.next=e,be}function ct(){if(fe===null){var e=le.alternate;e=e!==null?e.memoizedState:null}else e=fe.next;var t=be===null?le.memoizedState:be.next;if(t!==null)be=t,fe=e;else{if(e===null)throw Error(R(310));fe=e,e={memoizedState:fe.memoizedState,baseState:fe.baseState,baseQueue:fe.baseQueue,queue:fe.queue,next:null},be===null?le.memoizedState=be=e:be=be.next=e}return be}function ro(e,t){return typeof t=="function"?t(e):t}function nl(e){var t=ct(),n=t.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=e;var r=fe,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=s=null,c=null,u=o;do{var d=u.lane;if((sr&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=h,s=r):c=c.next=h,le.lanes|=d,lr|=d}u=u.next}while(u!==null&&u!==o);c===null?s=r:c.next=l,wt(r,t.memoizedState)||(Ve=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,le.lanes|=o,lr|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function rl(e){var t=ct(),n=t.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);wt(o,t.memoizedState)||(Ve=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Gm(){}function Qm(e,t){var n=le,r=ct(),i=t(),o=!wt(r.memoizedState,i);if(o&&(r.memoizedState=i,Ve=!0),r=r.queue,Su(Xm.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||be!==null&&be.memoizedState.tag&1){if(n.flags|=2048,io(9,Ym.bind(null,n,r,i,t),void 0,null),ke===null)throw Error(R(349));sr&30||Km(n,t,i)}return i}function Km(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=le.updateQueue,t===null?(t={lastEffect:null,stores:null},le.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ym(e,t,n,r){t.value=n,t.getSnapshot=r,Jm(t)&&Zm(e)}function Xm(e,t,n){return n(function(){Jm(t)&&Zm(e)})}function Jm(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!wt(e,n)}catch{return!0}}function Zm(e){var t=Xt(e,1);t!==null&&bt(t,e,1,-1)}function th(e){var t=Nt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ro,lastRenderedState:e},t.queue=e,e=e.dispatch=cb.bind(null,le,e),[t.memoizedState,e]}function io(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=le.updateQueue,t===null?(t={lastEffect:null,stores:null},le.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function eg(){return ct().memoizedState}function la(e,t,n,r){var i=Nt();le.flags|=e,i.memoizedState=io(1|t,n,void 0,r===void 0?null:r)}function cs(e,t,n,r){var i=ct();r=r===void 0?null:r;var o=void 0;if(fe!==null){var s=fe.memoizedState;if(o=s.destroy,r!==null&&wu(r,s.deps)){i.memoizedState=io(t,n,o,r);return}}le.flags|=e,i.memoizedState=io(1|t,n,o,r)}function nh(e,t){return la(8390656,8,e,t)}function Su(e,t){return cs(2048,8,e,t)}function tg(e,t){return cs(4,2,e,t)}function ng(e,t){return cs(4,4,e,t)}function rg(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ig(e,t,n){return n=n!=null?n.concat([e]):null,cs(4,4,rg.bind(null,t,e),n)}function Tu(){}function og(e,t){var n=ct();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&wu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ag(e,t){var n=ct();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&wu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function sg(e,t,n){return sr&21?(wt(n,t)||(n=hm(),le.lanes|=n,lr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ve=!0),e.memoizedState=n)}function sb(e,t){var n=J;J=n!==0&&4>n?n:4,e(!0);var r=tl.transition;tl.transition={};try{e(!1),t()}finally{J=n,tl.transition=r}}function lg(){return ct().memoizedState}function lb(e,t,n){var r=En(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},cg(e))ug(t,n);else if(n=Hm(e,t,n,r),n!==null){var i=qe();bt(n,e,r,i),dg(n,t,r)}}function cb(e,t,n){var r=En(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(cg(e))ug(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,l=o(s,n);if(i.hasEagerState=!0,i.eagerState=l,wt(l,s)){var c=t.interleaved;c===null?(i.next=i,fu(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=Hm(e,t,i,r),n!==null&&(i=qe(),bt(n,e,r,i),dg(n,t,r))}}function cg(e){var t=e.alternate;return e===le||t!==null&&t===le}function ug(e,t){Oi=Fa=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function dg(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,nu(e,n)}}var za={readContext:lt,useCallback:Ee,useContext:Ee,useEffect:Ee,useImperativeHandle:Ee,useInsertionEffect:Ee,useLayoutEffect:Ee,useMemo:Ee,useReducer:Ee,useRef:Ee,useState:Ee,useDebugValue:Ee,useDeferredValue:Ee,useTransition:Ee,useMutableSource:Ee,useSyncExternalStore:Ee,useId:Ee,unstable_isNewReconciler:!1},ub={readContext:lt,useCallback:function(e,t){return Nt().memoizedState=[e,t===void 0?null:t],e},useContext:lt,useEffect:nh,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,la(4194308,4,rg.bind(null,t,e),n)},useLayoutEffect:function(e,t){return la(4194308,4,e,t)},useInsertionEffect:function(e,t){return la(4,2,e,t)},useMemo:function(e,t){var n=Nt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Nt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=lb.bind(null,le,e),[r.memoizedState,e]},useRef:function(e){var t=Nt();return e={current:e},t.memoizedState=e},useState:th,useDebugValue:Tu,useDeferredValue:function(e){return Nt().memoizedState=e},useTransition:function(){var e=th(!1),t=e[0];return e=sb.bind(null,e[1]),Nt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=le,i=Nt();if(ie){if(n===void 0)throw Error(R(407));n=n()}else{if(n=t(),ke===null)throw Error(R(349));sr&30||Km(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,nh(Xm.bind(null,r,o,e),[e]),r.flags|=2048,io(9,Ym.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Nt(),t=ke.identifierPrefix;if(ie){var n=Wt,r=$t;n=(r&~(1<<32-xt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=no++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=ab++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},db={readContext:lt,useCallback:og,useContext:lt,useEffect:Su,useImperativeHandle:ig,useInsertionEffect:tg,useLayoutEffect:ng,useMemo:ag,useReducer:nl,useRef:eg,useState:function(){return nl(ro)},useDebugValue:Tu,useDeferredValue:function(e){var t=ct();return sg(t,fe.memoizedState,e)},useTransition:function(){var e=nl(ro)[0],t=ct().memoizedState;return[e,t]},useMutableSource:Gm,useSyncExternalStore:Qm,useId:lg,unstable_isNewReconciler:!1},hb={readContext:lt,useCallback:og,useContext:lt,useEffect:Su,useImperativeHandle:ig,useInsertionEffect:tg,useLayoutEffect:ng,useMemo:ag,useReducer:rl,useRef:eg,useState:function(){return rl(ro)},useDebugValue:Tu,useDeferredValue:function(e){var t=ct();return fe===null?t.memoizedState=e:sg(t,fe.memoizedState,e)},useTransition:function(){var e=rl(ro)[0],t=ct().memoizedState;return[e,t]},useMutableSource:Gm,useSyncExternalStore:Qm,useId:lg,unstable_isNewReconciler:!1};function pt(e,t){if(e&&e.defaultProps){t=ce({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function oc(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ce({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var us={isMounted:function(e){return(e=e._reactInternals)?hr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=qe(),i=En(e),o=Gt(r,i);o.payload=t,n!=null&&(o.callback=n),t=Pn(e,o,i),t!==null&&(bt(t,e,i,r),aa(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=qe(),i=En(e),o=Gt(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Pn(e,o,i),t!==null&&(bt(t,e,i,r),aa(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=qe(),r=En(e),i=Gt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Pn(e,i,r),t!==null&&(bt(t,e,r,n),aa(t,e,r))}};function rh(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!Yi(n,r)||!Yi(i,o):!0}function hg(e,t,n){var r=!1,i=Mn,o=t.contextType;return typeof o=="object"&&o!==null?o=lt(o):(i=Ue(t)?or:Me.current,r=t.contextTypes,o=(r=r!=null)?Xr(e,i):Mn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=us,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function ih(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&us.enqueueReplaceState(t,t.state,null)}function ac(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},vu(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=lt(o):(o=Ue(t)?or:Me.current,i.context=Xr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(oc(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&us.enqueueReplaceState(i,i.state,null),_a(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function ti(e,t){try{var n="",r=t;do n+=zy(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function il(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function sc(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var pb=typeof WeakMap=="function"?WeakMap:Map;function pg(e,t,n){n=Gt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ba||(Ba=!0,vc=r),sc(e,t)},n}function mg(e,t,n){n=Gt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){sc(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){sc(e,t),typeof r!="function"&&(jn===null?jn=new Set([this]):jn.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function oh(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new pb;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Pb.bind(null,e,t,n),t.then(e,e))}function ah(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function sh(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Gt(-1,1),t.tag=2,Pn(n,t,1))),n.lanes|=1),e)}var mb=nn.ReactCurrentOwner,Ve=!1;function Oe(e,t,n,r){t.child=e===null?Um(t,null,n,r):Zr(t,e.child,n,r)}function lh(e,t,n,r,i){n=n.render;var o=t.ref;return Or(t,i),r=ku(e,t,n,r,o,i),n=Cu(),e!==null&&!Ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Jt(e,t,i)):(ie&&n&&uu(t),t.flags|=1,Oe(e,t,r,i),t.child)}function ch(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Mu(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,gg(e,t,o,r,i)):(e=ha(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Yi,n(s,r)&&e.ref===t.ref)return Jt(e,t,i)}return t.flags|=1,e=An(o,r),e.ref=t.ref,e.return=t,t.child=e}function gg(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Yi(o,r)&&e.ref===t.ref)if(Ve=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Ve=!0);else return t.lanes=e.lanes,Jt(e,t,i)}return lc(e,t,n,r,i)}function fg(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ee(Ir,Qe),Qe|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ee(Ir,Qe),Qe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,ee(Ir,Qe),Qe|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,ee(Ir,Qe),Qe|=r;return Oe(e,t,i,n),t.child}function vg(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function lc(e,t,n,r,i){var o=Ue(n)?or:Me.current;return o=Xr(t,o),Or(t,i),n=ku(e,t,n,r,o,i),r=Cu(),e!==null&&!Ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Jt(e,t,i)):(ie&&r&&uu(t),t.flags|=1,Oe(e,t,n,i),t.child)}function uh(e,t,n,r,i){if(Ue(n)){var o=!0;Ra(t)}else o=!1;if(Or(t,i),t.stateNode===null)ca(e,t),hg(t,n,r),ac(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,l=t.memoizedProps;s.props=l;var c=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=lt(u):(u=Ue(n)?or:Me.current,u=Xr(t,u));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";h||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==r||c!==u)&&ih(t,s,r,u),dn=!1;var p=t.memoizedState;s.state=p,_a(t,r,s,i),c=t.memoizedState,l!==r||p!==c||Be.current||dn?(typeof d=="function"&&(oc(t,n,d,r),c=t.memoizedState),(l=dn||rh(t,n,l,r,p,c,u))?(h||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),s.props=r,s.state=c,s.context=u,r=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,$m(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:pt(t.type,l),s.props=u,h=t.pendingProps,p=s.context,c=n.contextType,typeof c=="object"&&c!==null?c=lt(c):(c=Ue(n)?or:Me.current,c=Xr(t,c));var y=n.getDerivedStateFromProps;(d=typeof y=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==h||p!==c)&&ih(t,s,r,c),dn=!1,p=t.memoizedState,s.state=p,_a(t,r,s,i);var k=t.memoizedState;l!==h||p!==k||Be.current||dn?(typeof y=="function"&&(oc(t,n,y,r),k=t.memoizedState),(u=dn||rh(t,n,u,r,p,k,c)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,k,c),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,k,c)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=k),s.props=r,s.state=k,s.context=c,r=u):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return cc(e,t,n,r,o,i)}function cc(e,t,n,r,i,o){vg(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&Kd(t,n,!1),Jt(e,t,o);r=t.stateNode,mb.current=t;var l=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Zr(t,e.child,null,o),t.child=Zr(t,null,l,o)):Oe(e,t,l,o),t.memoizedState=r.state,i&&Kd(t,n,!0),t.child}function yg(e){var t=e.stateNode;t.pendingContext?Qd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Qd(e,t.context,!1),yu(e,t.containerInfo)}function dh(e,t,n,r,i){return Jr(),hu(i),t.flags|=256,Oe(e,t,n,r),t.child}var uc={dehydrated:null,treeContext:null,retryLane:0};function dc(e){return{baseLanes:e,cachePool:null,transitions:null}}function xg(e,t,n){var r=t.pendingProps,i=se.current,o=!1,s=(t.flags&128)!==0,l;if((l=s)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ee(se,i&1),e===null)return rc(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=ps(s,r,0,null),e=rr(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=dc(n),t.memoizedState=uc,e):Nu(t,s));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return gb(e,t,s,r,l,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,l=i.sibling;var c={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=An(i,c),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=An(l,o):(o=rr(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?dc(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=uc,r}return o=e.child,e=o.sibling,r=An(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Nu(e,t){return t=ps({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Uo(e,t,n,r){return r!==null&&hu(r),Zr(t,e.child,null,n),e=Nu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function gb(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=il(Error(R(422))),Uo(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=ps({mode:"visible",children:r.children},i,0,null),o=rr(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&Zr(t,e.child,null,s),t.child.memoizedState=dc(s),t.memoizedState=uc,o);if(!(t.mode&1))return Uo(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(R(419)),r=il(o,r,void 0),Uo(e,t,s,r)}if(l=(s&e.childLanes)!==0,Ve||l){if(r=ke,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Xt(e,i),bt(r,e,i,-1))}return Ru(),r=il(Error(R(421))),Uo(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=jb.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Ye=Nn(i.nextSibling),Xe=t,ie=!0,yt=null,e!==null&&(rt[it++]=$t,rt[it++]=Wt,rt[it++]=ar,$t=e.id,Wt=e.overflow,ar=t),t=Nu(t,r.children),t.flags|=4096,t)}function hh(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ic(e.return,t,n)}function ol(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function bg(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Oe(e,t,r.children,n),r=se.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&hh(e,n,t);else if(e.tag===19)hh(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ee(se,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&qa(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ol(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&qa(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ol(t,!0,n,null,o);break;case"together":ol(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ca(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Jt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),lr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(R(153));if(t.child!==null){for(e=t.child,n=An(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=An(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function fb(e,t,n){switch(t.tag){case 3:yg(t),Jr();break;case 5:Wm(t);break;case 1:Ue(t.type)&&Ra(t);break;case 4:yu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ee(Da,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ee(se,se.current&1),t.flags|=128,null):n&t.child.childLanes?xg(e,t,n):(ee(se,se.current&1),e=Jt(e,t,n),e!==null?e.sibling:null);ee(se,se.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return bg(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ee(se,se.current),r)break;return null;case 22:case 23:return t.lanes=0,fg(e,t,n)}return Jt(e,t,n)}var wg,hc,kg,Cg;wg=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};hc=function(){};kg=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Kn(Lt.current);var o=null;switch(n){case"input":i=Ll(e,i),r=Ll(e,r),o=[];break;case"select":i=ce({},i,{value:void 0}),r=ce({},r,{value:void 0}),o=[];break;case"textarea":i=_l(e,i),r=_l(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Aa)}Fl(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(s in l)l.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ui.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var c=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(s in l)!l.hasOwnProperty(s)||c&&c.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in c)c.hasOwnProperty(s)&&l[s]!==c[s]&&(n||(n={}),n[s]=c[s])}else n||(o||(o=[]),o.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(o=o||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ui.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&ne("scroll",e),o||l===c||(o=[])):(o=o||[]).push(u,c))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Cg=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ci(e,t){if(!ie)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ae(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function vb(e,t,n){var r=t.pendingProps;switch(du(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ae(t),null;case 1:return Ue(t.type)&&Ia(),Ae(t),null;case 3:return r=t.stateNode,ei(),re(Be),re(Me),bu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Vo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,yt!==null&&(bc(yt),yt=null))),hc(e,t),Ae(t),null;case 5:xu(t);var i=Kn(to.current);if(n=t.type,e!==null&&t.stateNode!=null)kg(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(R(166));return Ae(t),null}if(e=Kn(Lt.current),Vo(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[At]=t,r[Zi]=o,e=(t.mode&1)!==0,n){case"dialog":ne("cancel",r),ne("close",r);break;case"iframe":case"object":case"embed":ne("load",r);break;case"video":case"audio":for(i=0;i<Ai.length;i++)ne(Ai[i],r);break;case"source":ne("error",r);break;case"img":case"image":case"link":ne("error",r),ne("load",r);break;case"details":ne("toggle",r);break;case"input":wd(r,o),ne("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ne("invalid",r);break;case"textarea":Cd(r,o),ne("invalid",r)}Fl(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&zo(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&zo(r.textContent,l,e),i=["children",""+l]):Ui.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&ne("scroll",r)}switch(n){case"input":Ro(r),kd(r,o,!0);break;case"textarea":Ro(r),Sd(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Aa)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Xp(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[At]=t,e[Zi]=r,wg(e,t,!1,!1),t.stateNode=e;e:{switch(s=zl(n,r),n){case"dialog":ne("cancel",e),ne("close",e),i=r;break;case"iframe":case"object":case"embed":ne("load",e),i=r;break;case"video":case"audio":for(i=0;i<Ai.length;i++)ne(Ai[i],e);i=r;break;case"source":ne("error",e),i=r;break;case"img":case"image":case"link":ne("error",e),ne("load",e),i=r;break;case"details":ne("toggle",e),i=r;break;case"input":wd(e,r),i=Ll(e,r),ne("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=ce({},r,{value:void 0}),ne("invalid",e);break;case"textarea":Cd(e,r),i=_l(e,r),ne("invalid",e);break;default:i=r}Fl(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var c=l[o];o==="style"?em(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Jp(e,c)):o==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Hi(e,c):typeof c=="number"&&Hi(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Ui.hasOwnProperty(o)?c!=null&&o==="onScroll"&&ne("scroll",e):c!=null&&Yc(e,o,c,s))}switch(n){case"input":Ro(e),kd(e,r,!1);break;case"textarea":Ro(e),Sd(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Rn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Rr(e,!!r.multiple,o,!1):r.defaultValue!=null&&Rr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Aa)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ae(t),null;case 6:if(e&&t.stateNode!=null)Cg(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(R(166));if(n=Kn(to.current),Kn(Lt.current),Vo(t)){if(r=t.stateNode,n=t.memoizedProps,r[At]=t,(o=r.nodeValue!==n)&&(e=Xe,e!==null))switch(e.tag){case 3:zo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&zo(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[At]=t,t.stateNode=r}return Ae(t),null;case 13:if(re(se),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ie&&Ye!==null&&t.mode&1&&!(t.flags&128))Vm(),Jr(),t.flags|=98560,o=!1;else if(o=Vo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(R(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(R(317));o[At]=t}else Jr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ae(t),o=!1}else yt!==null&&(bc(yt),yt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||se.current&1?ye===0&&(ye=3):Ru())),t.updateQueue!==null&&(t.flags|=4),Ae(t),null);case 4:return ei(),hc(e,t),e===null&&Xi(t.stateNode.containerInfo),Ae(t),null;case 10:return gu(t.type._context),Ae(t),null;case 17:return Ue(t.type)&&Ia(),Ae(t),null;case 19:if(re(se),o=t.memoizedState,o===null)return Ae(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)Ci(o,!1);else{if(ye!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=qa(e),s!==null){for(t.flags|=128,Ci(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ee(se,se.current&1|2),t.child}e=e.sibling}o.tail!==null&&he()>ni&&(t.flags|=128,r=!0,Ci(o,!1),t.lanes=4194304)}else{if(!r)if(e=qa(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ci(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!ie)return Ae(t),null}else 2*he()-o.renderingStartTime>ni&&n!==1073741824&&(t.flags|=128,r=!0,Ci(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=he(),t.sibling=null,n=se.current,ee(se,r?n&1|2:n&1),t):(Ae(t),null);case 22:case 23:return Iu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Qe&1073741824&&(Ae(t),t.subtreeFlags&6&&(t.flags|=8192)):Ae(t),null;case 24:return null;case 25:return null}throw Error(R(156,t.tag))}function yb(e,t){switch(du(t),t.tag){case 1:return Ue(t.type)&&Ia(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ei(),re(Be),re(Me),bu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return xu(t),null;case 13:if(re(se),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(R(340));Jr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return re(se),null;case 4:return ei(),null;case 10:return gu(t.type._context),null;case 22:case 23:return Iu(),null;case 24:return null;default:return null}}var Ho=!1,Re=!1,xb=typeof WeakSet=="function"?WeakSet:Set,_=null;function Ar(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){de(e,t,r)}else n.current=null}function pc(e,t,n){try{n()}catch(r){de(e,t,r)}}var ph=!1;function bb(e,t){if(Yl=Pa,e=jm(),cu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,l=-1,c=-1,u=0,d=0,h=e,p=null;t:for(;;){for(var y;h!==n||i!==0&&h.nodeType!==3||(l=s+i),h!==o||r!==0&&h.nodeType!==3||(c=s+r),h.nodeType===3&&(s+=h.nodeValue.length),(y=h.firstChild)!==null;)p=h,h=y;for(;;){if(h===e)break t;if(p===n&&++u===i&&(l=s),p===o&&++d===r&&(c=s),(y=h.nextSibling)!==null)break;h=p,p=h.parentNode}h=y}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Xl={focusedElem:e,selectionRange:n},Pa=!1,_=t;_!==null;)if(t=_,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,_=e;else for(;_!==null;){t=_;try{var k=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(k!==null){var v=k.memoizedProps,w=k.memoizedState,f=t.stateNode,g=f.getSnapshotBeforeUpdate(t.elementType===t.type?v:pt(t.type,v),w);f.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(R(163))}}catch(b){de(t,t.return,b)}if(e=t.sibling,e!==null){e.return=t.return,_=e;break}_=t.return}return k=ph,ph=!1,k}function _i(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&pc(t,n,o)}i=i.next}while(i!==r)}}function ds(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function mc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Sg(e){var t=e.alternate;t!==null&&(e.alternate=null,Sg(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[At],delete t[Zi],delete t[ec],delete t[nb],delete t[rb])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Tg(e){return e.tag===5||e.tag===3||e.tag===4}function mh(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Tg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function gc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Aa));else if(r!==4&&(e=e.child,e!==null))for(gc(e,t,n),e=e.sibling;e!==null;)gc(e,t,n),e=e.sibling}function fc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(fc(e,t,n),e=e.sibling;e!==null;)fc(e,t,n),e=e.sibling}var Ce=null,vt=!1;function on(e,t,n){for(n=n.child;n!==null;)Ng(e,t,n),n=n.sibling}function Ng(e,t,n){if(Mt&&typeof Mt.onCommitFiberUnmount=="function")try{Mt.onCommitFiberUnmount(rs,n)}catch{}switch(n.tag){case 5:Re||Ar(n,t);case 6:var r=Ce,i=vt;Ce=null,on(e,t,n),Ce=r,vt=i,Ce!==null&&(vt?(e=Ce,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ce.removeChild(n.stateNode));break;case 18:Ce!==null&&(vt?(e=Ce,n=n.stateNode,e.nodeType===8?Js(e.parentNode,n):e.nodeType===1&&Js(e,n),Qi(e)):Js(Ce,n.stateNode));break;case 4:r=Ce,i=vt,Ce=n.stateNode.containerInfo,vt=!0,on(e,t,n),Ce=r,vt=i;break;case 0:case 11:case 14:case 15:if(!Re&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&pc(n,t,s),i=i.next}while(i!==r)}on(e,t,n);break;case 1:if(!Re&&(Ar(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){de(n,t,l)}on(e,t,n);break;case 21:on(e,t,n);break;case 22:n.mode&1?(Re=(r=Re)||n.memoizedState!==null,on(e,t,n),Re=r):on(e,t,n);break;default:on(e,t,n)}}function gh(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new xb),t.forEach(function(r){var i=Eb.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function ht(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,l=s;e:for(;l!==null;){switch(l.tag){case 5:Ce=l.stateNode,vt=!1;break e;case 3:Ce=l.stateNode.containerInfo,vt=!0;break e;case 4:Ce=l.stateNode.containerInfo,vt=!0;break e}l=l.return}if(Ce===null)throw Error(R(160));Ng(o,s,i),Ce=null,vt=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){de(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Pg(t,e),t=t.sibling}function Pg(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ht(t,e),Tt(e),r&4){try{_i(3,e,e.return),ds(3,e)}catch(v){de(e,e.return,v)}try{_i(5,e,e.return)}catch(v){de(e,e.return,v)}}break;case 1:ht(t,e),Tt(e),r&512&&n!==null&&Ar(n,n.return);break;case 5:if(ht(t,e),Tt(e),r&512&&n!==null&&Ar(n,n.return),e.flags&32){var i=e.stateNode;try{Hi(i,"")}catch(v){de(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&Kp(i,o),zl(l,s);var u=zl(l,o);for(s=0;s<c.length;s+=2){var d=c[s],h=c[s+1];d==="style"?em(i,h):d==="dangerouslySetInnerHTML"?Jp(i,h):d==="children"?Hi(i,h):Yc(i,d,h,u)}switch(l){case"input":Dl(i,o);break;case"textarea":Yp(i,o);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?Rr(i,!!o.multiple,y,!1):p!==!!o.multiple&&(o.defaultValue!=null?Rr(i,!!o.multiple,o.defaultValue,!0):Rr(i,!!o.multiple,o.multiple?[]:"",!1))}i[Zi]=o}catch(v){de(e,e.return,v)}}break;case 6:if(ht(t,e),Tt(e),r&4){if(e.stateNode===null)throw Error(R(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(v){de(e,e.return,v)}}break;case 3:if(ht(t,e),Tt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Qi(t.containerInfo)}catch(v){de(e,e.return,v)}break;case 4:ht(t,e),Tt(e);break;case 13:ht(t,e),Tt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Eu=he())),r&4&&gh(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Re=(u=Re)||d,ht(t,e),Re=u):ht(t,e),Tt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(_=e,d=e.child;d!==null;){for(h=_=d;_!==null;){switch(p=_,y=p.child,p.tag){case 0:case 11:case 14:case 15:_i(4,p,p.return);break;case 1:Ar(p,p.return);var k=p.stateNode;if(typeof k.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,k.props=t.memoizedProps,k.state=t.memoizedState,k.componentWillUnmount()}catch(v){de(r,n,v)}}break;case 5:Ar(p,p.return);break;case 22:if(p.memoizedState!==null){vh(h);continue}}y!==null?(y.return=p,_=y):vh(h)}d=d.sibling}e:for(d=null,h=e;;){if(h.tag===5){if(d===null){d=h;try{i=h.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=h.stateNode,c=h.memoizedProps.style,s=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=Zp("display",s))}catch(v){de(e,e.return,v)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(v){de(e,e.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:ht(t,e),Tt(e),r&4&&gh(e);break;case 21:break;default:ht(t,e),Tt(e)}}function Tt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Tg(n)){var r=n;break e}n=n.return}throw Error(R(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Hi(i,""),r.flags&=-33);var o=mh(e);fc(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,l=mh(e);gc(e,l,s);break;default:throw Error(R(161))}}catch(c){de(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function wb(e,t,n){_=e,jg(e)}function jg(e,t,n){for(var r=(e.mode&1)!==0;_!==null;){var i=_,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Ho;if(!s){var l=i.alternate,c=l!==null&&l.memoizedState!==null||Re;l=Ho;var u=Re;if(Ho=s,(Re=c)&&!u)for(_=i;_!==null;)s=_,c=s.child,s.tag===22&&s.memoizedState!==null?yh(i):c!==null?(c.return=s,_=c):yh(i);for(;o!==null;)_=o,jg(o),o=o.sibling;_=i,Ho=l,Re=u}fh(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,_=o):fh(e)}}function fh(e){for(;_!==null;){var t=_;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Re||ds(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Re)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:pt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&eh(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}eh(t,s,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&Qi(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(R(163))}Re||t.flags&512&&mc(t)}catch(p){de(t,t.return,p)}}if(t===e){_=null;break}if(n=t.sibling,n!==null){n.return=t.return,_=n;break}_=t.return}}function vh(e){for(;_!==null;){var t=_;if(t===e){_=null;break}var n=t.sibling;if(n!==null){n.return=t.return,_=n;break}_=t.return}}function yh(e){for(;_!==null;){var t=_;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ds(4,t)}catch(c){de(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){de(t,i,c)}}var o=t.return;try{mc(t)}catch(c){de(t,o,c)}break;case 5:var s=t.return;try{mc(t)}catch(c){de(t,s,c)}}}catch(c){de(t,t.return,c)}if(t===e){_=null;break}var l=t.sibling;if(l!==null){l.return=t.return,_=l;break}_=t.return}}var kb=Math.ceil,Va=nn.ReactCurrentDispatcher,Pu=nn.ReactCurrentOwner,st=nn.ReactCurrentBatchConfig,K=0,ke=null,me=null,Se=0,Qe=0,Ir=qn(0),ye=0,oo=null,lr=0,hs=0,ju=0,qi=null,ze=null,Eu=0,ni=1/0,Bt=null,Ba=!1,vc=null,jn=null,$o=!1,bn=null,Ua=0,Fi=0,yc=null,ua=-1,da=0;function qe(){return K&6?he():ua!==-1?ua:ua=he()}function En(e){return e.mode&1?K&2&&Se!==0?Se&-Se:ob.transition!==null?(da===0&&(da=hm()),da):(e=J,e!==0||(e=window.event,e=e===void 0?16:xm(e.type)),e):1}function bt(e,t,n,r){if(50<Fi)throw Fi=0,yc=null,Error(R(185));vo(e,n,r),(!(K&2)||e!==ke)&&(e===ke&&(!(K&2)&&(hs|=n),ye===4&&pn(e,Se)),He(e,r),n===1&&K===0&&!(t.mode&1)&&(ni=he()+500,ls&&Fn()))}function He(e,t){var n=e.callbackNode;ox(e,t);var r=Na(e,e===ke?Se:0);if(r===0)n!==null&&Pd(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Pd(n),t===1)e.tag===0?ib(xh.bind(null,e)):qm(xh.bind(null,e)),eb(function(){!(K&6)&&Fn()}),n=null;else{switch(pm(r)){case 1:n=tu;break;case 4:n=um;break;case 16:n=Ta;break;case 536870912:n=dm;break;default:n=Ta}n=Og(n,Eg.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Eg(e,t){if(ua=-1,da=0,K&6)throw Error(R(327));var n=e.callbackNode;if(_r()&&e.callbackNode!==n)return null;var r=Na(e,e===ke?Se:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ha(e,r);else{t=r;var i=K;K|=2;var o=Ig();(ke!==e||Se!==t)&&(Bt=null,ni=he()+500,nr(e,t));do try{Tb();break}catch(l){Ag(e,l)}while(!0);mu(),Va.current=o,K=i,me!==null?t=0:(ke=null,Se=0,t=ye)}if(t!==0){if(t===2&&(i=$l(e),i!==0&&(r=i,t=xc(e,i))),t===1)throw n=oo,nr(e,0),pn(e,r),He(e,he()),n;if(t===6)pn(e,r);else{if(i=e.current.alternate,!(r&30)&&!Cb(i)&&(t=Ha(e,r),t===2&&(o=$l(e),o!==0&&(r=o,t=xc(e,o))),t===1))throw n=oo,nr(e,0),pn(e,r),He(e,he()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(R(345));case 2:$n(e,ze,Bt);break;case 3:if(pn(e,r),(r&130023424)===r&&(t=Eu+500-he(),10<t)){if(Na(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){qe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Zl($n.bind(null,e,ze,Bt),t);break}$n(e,ze,Bt);break;case 4:if(pn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-xt(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=he()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*kb(r/1960))-r,10<r){e.timeoutHandle=Zl($n.bind(null,e,ze,Bt),r);break}$n(e,ze,Bt);break;case 5:$n(e,ze,Bt);break;default:throw Error(R(329))}}}return He(e,he()),e.callbackNode===n?Eg.bind(null,e):null}function xc(e,t){var n=qi;return e.current.memoizedState.isDehydrated&&(nr(e,t).flags|=256),e=Ha(e,t),e!==2&&(t=ze,ze=n,t!==null&&bc(t)),e}function bc(e){ze===null?ze=e:ze.push.apply(ze,e)}function Cb(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!wt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function pn(e,t){for(t&=~ju,t&=~hs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-xt(t),r=1<<n;e[n]=-1,t&=~r}}function xh(e){if(K&6)throw Error(R(327));_r();var t=Na(e,0);if(!(t&1))return He(e,he()),null;var n=Ha(e,t);if(e.tag!==0&&n===2){var r=$l(e);r!==0&&(t=r,n=xc(e,r))}if(n===1)throw n=oo,nr(e,0),pn(e,t),He(e,he()),n;if(n===6)throw Error(R(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,$n(e,ze,Bt),He(e,he()),null}function Au(e,t){var n=K;K|=1;try{return e(t)}finally{K=n,K===0&&(ni=he()+500,ls&&Fn())}}function cr(e){bn!==null&&bn.tag===0&&!(K&6)&&_r();var t=K;K|=1;var n=st.transition,r=J;try{if(st.transition=null,J=1,e)return e()}finally{J=r,st.transition=n,K=t,!(K&6)&&Fn()}}function Iu(){Qe=Ir.current,re(Ir)}function nr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Zx(n)),me!==null)for(n=me.return;n!==null;){var r=n;switch(du(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ia();break;case 3:ei(),re(Be),re(Me),bu();break;case 5:xu(r);break;case 4:ei();break;case 13:re(se);break;case 19:re(se);break;case 10:gu(r.type._context);break;case 22:case 23:Iu()}n=n.return}if(ke=e,me=e=An(e.current,null),Se=Qe=t,ye=0,oo=null,ju=hs=lr=0,ze=qi=null,Qn!==null){for(t=0;t<Qn.length;t++)if(n=Qn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Qn=null}return e}function Ag(e,t){do{var n=me;try{if(mu(),sa.current=za,Fa){for(var r=le.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Fa=!1}if(sr=0,be=fe=le=null,Oi=!1,no=0,Pu.current=null,n===null||n.return===null){ye=1,oo=t,me=null;break}e:{var o=e,s=n.return,l=n,c=t;if(t=Se,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=l,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var y=ah(s);if(y!==null){y.flags&=-257,sh(y,s,l,o,t),y.mode&1&&oh(o,u,t),t=y,c=u;var k=t.updateQueue;if(k===null){var v=new Set;v.add(c),t.updateQueue=v}else k.add(c);break e}else{if(!(t&1)){oh(o,u,t),Ru();break e}c=Error(R(426))}}else if(ie&&l.mode&1){var w=ah(s);if(w!==null){!(w.flags&65536)&&(w.flags|=256),sh(w,s,l,o,t),hu(ti(c,l));break e}}o=c=ti(c,l),ye!==4&&(ye=2),qi===null?qi=[o]:qi.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var f=pg(o,c,t);Zd(o,f);break e;case 1:l=c;var g=o.type,x=o.stateNode;if(!(o.flags&128)&&(typeof g.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(jn===null||!jn.has(x)))){o.flags|=65536,t&=-t,o.lanes|=t;var b=mg(o,l,t);Zd(o,b);break e}}o=o.return}while(o!==null)}Mg(n)}catch(C){t=C,me===n&&n!==null&&(me=n=n.return);continue}break}while(!0)}function Ig(){var e=Va.current;return Va.current=za,e===null?za:e}function Ru(){(ye===0||ye===3||ye===2)&&(ye=4),ke===null||!(lr&268435455)&&!(hs&268435455)||pn(ke,Se)}function Ha(e,t){var n=K;K|=2;var r=Ig();(ke!==e||Se!==t)&&(Bt=null,nr(e,t));do try{Sb();break}catch(i){Ag(e,i)}while(!0);if(mu(),K=n,Va.current=r,me!==null)throw Error(R(261));return ke=null,Se=0,ye}function Sb(){for(;me!==null;)Rg(me)}function Tb(){for(;me!==null&&!Yy();)Rg(me)}function Rg(e){var t=Dg(e.alternate,e,Qe);e.memoizedProps=e.pendingProps,t===null?Mg(e):me=t,Pu.current=null}function Mg(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=yb(n,t),n!==null){n.flags&=32767,me=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ye=6,me=null;return}}else if(n=vb(n,t,Qe),n!==null){me=n;return}if(t=t.sibling,t!==null){me=t;return}me=t=e}while(t!==null);ye===0&&(ye=5)}function $n(e,t,n){var r=J,i=st.transition;try{st.transition=null,J=1,Nb(e,t,n,r)}finally{st.transition=i,J=r}return null}function Nb(e,t,n,r){do _r();while(bn!==null);if(K&6)throw Error(R(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(R(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(ax(e,o),e===ke&&(me=ke=null,Se=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||$o||($o=!0,Og(Ta,function(){return _r(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=st.transition,st.transition=null;var s=J;J=1;var l=K;K|=4,Pu.current=null,bb(e,n),Pg(n,e),Wx(Xl),Pa=!!Yl,Xl=Yl=null,e.current=n,wb(n),Xy(),K=l,J=s,st.transition=o}else e.current=n;if($o&&($o=!1,bn=e,Ua=i),o=e.pendingLanes,o===0&&(jn=null),ex(n.stateNode),He(e,he()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ba)throw Ba=!1,e=vc,vc=null,e;return Ua&1&&e.tag!==0&&_r(),o=e.pendingLanes,o&1?e===yc?Fi++:(Fi=0,yc=e):Fi=0,Fn(),null}function _r(){if(bn!==null){var e=pm(Ua),t=st.transition,n=J;try{if(st.transition=null,J=16>e?16:e,bn===null)var r=!1;else{if(e=bn,bn=null,Ua=0,K&6)throw Error(R(331));var i=K;for(K|=4,_=e.current;_!==null;){var o=_,s=o.child;if(_.flags&16){var l=o.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(_=u;_!==null;){var d=_;switch(d.tag){case 0:case 11:case 15:_i(8,d,o)}var h=d.child;if(h!==null)h.return=d,_=h;else for(;_!==null;){d=_;var p=d.sibling,y=d.return;if(Sg(d),d===u){_=null;break}if(p!==null){p.return=y,_=p;break}_=y}}}var k=o.alternate;if(k!==null){var v=k.child;if(v!==null){k.child=null;do{var w=v.sibling;v.sibling=null,v=w}while(v!==null)}}_=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,_=s;else e:for(;_!==null;){if(o=_,o.flags&2048)switch(o.tag){case 0:case 11:case 15:_i(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,_=f;break e}_=o.return}}var g=e.current;for(_=g;_!==null;){s=_;var x=s.child;if(s.subtreeFlags&2064&&x!==null)x.return=s,_=x;else e:for(s=g;_!==null;){if(l=_,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ds(9,l)}}catch(C){de(l,l.return,C)}if(l===s){_=null;break e}var b=l.sibling;if(b!==null){b.return=l.return,_=b;break e}_=l.return}}if(K=i,Fn(),Mt&&typeof Mt.onPostCommitFiberRoot=="function")try{Mt.onPostCommitFiberRoot(rs,e)}catch{}r=!0}return r}finally{J=n,st.transition=t}}return!1}function bh(e,t,n){t=ti(n,t),t=pg(e,t,1),e=Pn(e,t,1),t=qe(),e!==null&&(vo(e,1,t),He(e,t))}function de(e,t,n){if(e.tag===3)bh(e,e,n);else for(;t!==null;){if(t.tag===3){bh(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(jn===null||!jn.has(r))){e=ti(n,e),e=mg(t,e,1),t=Pn(t,e,1),e=qe(),t!==null&&(vo(t,1,e),He(t,e));break}}t=t.return}}function Pb(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=qe(),e.pingedLanes|=e.suspendedLanes&n,ke===e&&(Se&n)===n&&(ye===4||ye===3&&(Se&130023424)===Se&&500>he()-Eu?nr(e,0):ju|=n),He(e,t)}function Lg(e,t){t===0&&(e.mode&1?(t=Do,Do<<=1,!(Do&130023424)&&(Do=4194304)):t=1);var n=qe();e=Xt(e,t),e!==null&&(vo(e,t,n),He(e,n))}function jb(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Lg(e,n)}function Eb(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(R(314))}r!==null&&r.delete(t),Lg(e,n)}var Dg;Dg=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Be.current)Ve=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ve=!1,fb(e,t,n);Ve=!!(e.flags&131072)}else Ve=!1,ie&&t.flags&1048576&&Fm(t,La,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ca(e,t),e=t.pendingProps;var i=Xr(t,Me.current);Or(t,n),i=ku(null,t,r,e,i,n);var o=Cu();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ue(r)?(o=!0,Ra(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,vu(t),i.updater=us,t.stateNode=i,i._reactInternals=t,ac(t,r,e,n),t=cc(null,t,r,!0,o,n)):(t.tag=0,ie&&o&&uu(t),Oe(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ca(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Ib(r),e=pt(r,e),i){case 0:t=lc(null,t,r,e,n);break e;case 1:t=uh(null,t,r,e,n);break e;case 11:t=lh(null,t,r,e,n);break e;case 14:t=ch(null,t,r,pt(r.type,e),n);break e}throw Error(R(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:pt(r,i),lc(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:pt(r,i),uh(e,t,r,i,n);case 3:e:{if(yg(t),e===null)throw Error(R(387));r=t.pendingProps,o=t.memoizedState,i=o.element,$m(e,t),_a(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=ti(Error(R(423)),t),t=dh(e,t,r,n,i);break e}else if(r!==i){i=ti(Error(R(424)),t),t=dh(e,t,r,n,i);break e}else for(Ye=Nn(t.stateNode.containerInfo.firstChild),Xe=t,ie=!0,yt=null,n=Um(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Jr(),r===i){t=Jt(e,t,n);break e}Oe(e,t,r,n)}t=t.child}return t;case 5:return Wm(t),e===null&&rc(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,Jl(r,i)?s=null:o!==null&&Jl(r,o)&&(t.flags|=32),vg(e,t),Oe(e,t,s,n),t.child;case 6:return e===null&&rc(t),null;case 13:return xg(e,t,n);case 4:return yu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Zr(t,null,r,n):Oe(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:pt(r,i),lh(e,t,r,i,n);case 7:return Oe(e,t,t.pendingProps,n),t.child;case 8:return Oe(e,t,t.pendingProps.children,n),t.child;case 12:return Oe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,ee(Da,r._currentValue),r._currentValue=s,o!==null)if(wt(o.value,s)){if(o.children===i.children&&!Be.current){t=Jt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){s=o.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(o.tag===1){c=Gt(-1,n&-n),c.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),ic(o.return,n,t),l.lanes|=n;break}c=c.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(R(341));s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),ic(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Oe(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Or(t,n),i=lt(i),r=r(i),t.flags|=1,Oe(e,t,r,n),t.child;case 14:return r=t.type,i=pt(r,t.pendingProps),i=pt(r.type,i),ch(e,t,r,i,n);case 15:return gg(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:pt(r,i),ca(e,t),t.tag=1,Ue(r)?(e=!0,Ra(t)):e=!1,Or(t,n),hg(t,r,i),ac(t,r,i,n),cc(null,t,r,!0,e,n);case 19:return bg(e,t,n);case 22:return fg(e,t,n)}throw Error(R(156,t.tag))};function Og(e,t){return cm(e,t)}function Ab(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ot(e,t,n,r){return new Ab(e,t,n,r)}function Mu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ib(e){if(typeof e=="function")return Mu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Jc)return 11;if(e===Zc)return 14}return 2}function An(e,t){var n=e.alternate;return n===null?(n=ot(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function ha(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")Mu(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case wr:return rr(n.children,i,o,t);case Xc:s=8,i|=8;break;case Al:return e=ot(12,n,t,i|2),e.elementType=Al,e.lanes=o,e;case Il:return e=ot(13,n,t,i),e.elementType=Il,e.lanes=o,e;case Rl:return e=ot(19,n,t,i),e.elementType=Rl,e.lanes=o,e;case Wp:return ps(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Hp:s=10;break e;case $p:s=9;break e;case Jc:s=11;break e;case Zc:s=14;break e;case un:s=16,r=null;break e}throw Error(R(130,e==null?e:typeof e,""))}return t=ot(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function rr(e,t,n,r){return e=ot(7,e,r,t),e.lanes=n,e}function ps(e,t,n,r){return e=ot(22,e,r,t),e.elementType=Wp,e.lanes=n,e.stateNode={isHidden:!1},e}function al(e,t,n){return e=ot(6,e,null,t),e.lanes=n,e}function sl(e,t,n){return t=ot(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Rb(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vs(0),this.expirationTimes=Vs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vs(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Lu(e,t,n,r,i,o,s,l,c){return e=new Rb(e,t,n,l,c),t===1?(t=1,o===!0&&(t|=8)):t=0,o=ot(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},vu(o),e}function Mb(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:br,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function _g(e){if(!e)return Mn;e=e._reactInternals;e:{if(hr(e)!==e||e.tag!==1)throw Error(R(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ue(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(R(171))}if(e.tag===1){var n=e.type;if(Ue(n))return _m(e,n,t)}return t}function qg(e,t,n,r,i,o,s,l,c){return e=Lu(n,r,!0,e,i,o,s,l,c),e.context=_g(null),n=e.current,r=qe(),i=En(n),o=Gt(r,i),o.callback=t??null,Pn(n,o,i),e.current.lanes=i,vo(e,i,r),He(e,r),e}function ms(e,t,n,r){var i=t.current,o=qe(),s=En(i);return n=_g(n),t.context===null?t.context=n:t.pendingContext=n,t=Gt(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Pn(i,t,s),e!==null&&(bt(e,i,s,o),aa(e,i,s)),s}function $a(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function wh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Du(e,t){wh(e,t),(e=e.alternate)&&wh(e,t)}function Lb(){return null}var Fg=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ou(e){this._internalRoot=e}gs.prototype.render=Ou.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(R(409));ms(e,t,null,null)};gs.prototype.unmount=Ou.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;cr(function(){ms(null,e,null,null)}),t[Yt]=null}};function gs(e){this._internalRoot=e}gs.prototype.unstable_scheduleHydration=function(e){if(e){var t=fm();e={blockedOn:null,target:e,priority:t};for(var n=0;n<hn.length&&t!==0&&t<hn[n].priority;n++);hn.splice(n,0,e),n===0&&ym(e)}};function _u(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function fs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function kh(){}function Db(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=$a(s);o.call(u)}}var s=qg(t,r,e,0,null,!1,!1,"",kh);return e._reactRootContainer=s,e[Yt]=s.current,Xi(e.nodeType===8?e.parentNode:e),cr(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=$a(c);l.call(u)}}var c=Lu(e,0,!1,null,null,!1,!1,"",kh);return e._reactRootContainer=c,e[Yt]=c.current,Xi(e.nodeType===8?e.parentNode:e),cr(function(){ms(t,c,n,r)}),c}function vs(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var l=i;i=function(){var c=$a(s);l.call(c)}}ms(t,s,e,i)}else s=Db(n,t,e,i,r);return $a(s)}mm=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ei(t.pendingLanes);n!==0&&(nu(t,n|1),He(t,he()),!(K&6)&&(ni=he()+500,Fn()))}break;case 13:cr(function(){var r=Xt(e,1);if(r!==null){var i=qe();bt(r,e,1,i)}}),Du(e,1)}};ru=function(e){if(e.tag===13){var t=Xt(e,134217728);if(t!==null){var n=qe();bt(t,e,134217728,n)}Du(e,134217728)}};gm=function(e){if(e.tag===13){var t=En(e),n=Xt(e,t);if(n!==null){var r=qe();bt(n,e,t,r)}Du(e,t)}};fm=function(){return J};vm=function(e,t){var n=J;try{return J=e,t()}finally{J=n}};Bl=function(e,t,n){switch(t){case"input":if(Dl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ss(r);if(!i)throw Error(R(90));Qp(r),Dl(r,i)}}}break;case"textarea":Yp(e,n);break;case"select":t=n.value,t!=null&&Rr(e,!!n.multiple,t,!1)}};rm=Au;im=cr;var Ob={usingClientEntryPoint:!1,Events:[xo,Tr,ss,tm,nm,Au]},Si={findFiberByHostInstance:Gn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},_b={bundleType:Si.bundleType,version:Si.version,rendererPackageName:Si.rendererPackageName,rendererConfig:Si.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:nn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=sm(e),e===null?null:e.stateNode},findFiberByHostInstance:Si.findFiberByHostInstance||Lb,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wo.isDisabled&&Wo.supportsFiber)try{rs=Wo.inject(_b),Mt=Wo}catch{}}et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ob;et.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_u(t))throw Error(R(200));return Mb(e,t,null,n)};et.createRoot=function(e,t){if(!_u(e))throw Error(R(299));var n=!1,r="",i=Fg;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Lu(e,1,!1,null,null,n,!1,r,i),e[Yt]=t.current,Xi(e.nodeType===8?e.parentNode:e),new Ou(t)};et.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(R(188)):(e=Object.keys(e).join(","),Error(R(268,e)));return e=sm(t),e=e===null?null:e.stateNode,e};et.flushSync=function(e){return cr(e)};et.hydrate=function(e,t,n){if(!fs(t))throw Error(R(200));return vs(null,e,t,!0,n)};et.hydrateRoot=function(e,t,n){if(!_u(e))throw Error(R(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=Fg;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=qg(t,null,e,1,n??null,i,!1,o,s),e[Yt]=t.current,Xi(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new gs(t)};et.render=function(e,t,n){if(!fs(t))throw Error(R(200));return vs(null,e,t,!1,n)};et.unmountComponentAtNode=function(e){if(!fs(e))throw Error(R(40));return e._reactRootContainer?(cr(function(){vs(null,null,e,!1,function(){e._reactRootContainer=null,e[Yt]=null})}),!0):!1};et.unstable_batchedUpdates=Au;et.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!fs(n))throw Error(R(200));if(e==null||e._reactInternals===void 0)throw Error(R(38));return vs(e,t,n,!1,r)};et.version="18.3.1-next-f1338f8080-20240426";function zg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(zg)}catch(e){console.error(e)}}zg(),zp.exports=et;var wo=zp.exports;const qb=dy(wo);var Vg,Ch=wo;Vg=Ch.createRoot,Ch.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ao(){return ao=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ao.apply(this,arguments)}var wn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(wn||(wn={}));const Sh="popstate";function Fb(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:s,hash:l}=r.location;return wc("",{pathname:o,search:s,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Wa(i)}return Vb(t,n,null,e)}function ge(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Bg(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function zb(){return Math.random().toString(36).substr(2,8)}function Th(e,t){return{usr:e.state,key:e.key,idx:t}}function wc(e,t,n,r){return n===void 0&&(n=null),ao({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?hi(t):t,{state:n,key:t&&t.key||r||zb()})}function Wa(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function hi(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Vb(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,l=wn.Pop,c=null,u=d();u==null&&(u=0,s.replaceState(ao({},s.state,{idx:u}),""));function d(){return(s.state||{idx:null}).idx}function h(){l=wn.Pop;let w=d(),f=w==null?null:w-u;u=w,c&&c({action:l,location:v.location,delta:f})}function p(w,f){l=wn.Push;let g=wc(v.location,w,f);u=d()+1;let x=Th(g,u),b=v.createHref(g);try{s.pushState(x,"",b)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;i.location.assign(b)}o&&c&&c({action:l,location:v.location,delta:1})}function y(w,f){l=wn.Replace;let g=wc(v.location,w,f);u=d();let x=Th(g,u),b=v.createHref(g);s.replaceState(x,"",b),o&&c&&c({action:l,location:v.location,delta:0})}function k(w){let f=i.location.origin!=="null"?i.location.origin:i.location.href,g=typeof w=="string"?w:Wa(w);return g=g.replace(/ $/,"%20"),ge(f,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,f)}let v={get action(){return l},get location(){return e(i,s)},listen(w){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(Sh,h),c=w,()=>{i.removeEventListener(Sh,h),c=null}},createHref(w){return t(i,w)},createURL:k,encodeLocation(w){let f=k(w);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:p,replace:y,go(w){return s.go(w)}};return v}var Nh;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Nh||(Nh={}));function Bb(e,t,n){return n===void 0&&(n="/"),Ub(e,t,n,!1)}function Ub(e,t,n,r){let i=typeof t=="string"?hi(t):t,o=qu(i.pathname||"/",n);if(o==null)return null;let s=Ug(e);Hb(s);let l=null;for(let c=0;l==null&&c<s.length;++c){let u=tw(o);l=Zb(s[c],u,r)}return l}function Ug(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,l)=>{let c={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};c.relativePath.startsWith("/")&&(ge(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=In([r,c.relativePath]),d=n.concat(c);o.children&&o.children.length>0&&(ge(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Ug(o.children,t,d,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:Xb(u,o.index),routesMeta:d})};return e.forEach((o,s)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,s);else for(let c of Hg(o.path))i(o,s,c)}),t}function Hg(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=Hg(r.join("/")),l=[];return l.push(...s.map(c=>c===""?o:[o,c].join("/"))),i&&l.push(...s),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function Hb(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Jb(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const $b=/^:[\w-]+$/,Wb=3,Gb=2,Qb=1,Kb=10,Yb=-2,Ph=e=>e==="*";function Xb(e,t){let n=e.split("/"),r=n.length;return n.some(Ph)&&(r+=Yb),t&&(r+=Gb),n.filter(i=>!Ph(i)).reduce((i,o)=>i+($b.test(o)?Wb:o===""?Qb:Kb),r)}function Jb(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Zb(e,t,n){let{routesMeta:r}=e,i={},o="/",s=[];for(let l=0;l<r.length;++l){let c=r[l],u=l===r.length-1,d=o==="/"?t:t.slice(o.length)||"/",h=jh({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},d),p=c.route;if(!h&&u&&n&&!r[r.length-1].route.index&&(h=jh({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},d)),!h)return null;Object.assign(i,h.params),s.push({params:i,pathname:In([o,h.pathname]),pathnameBase:ow(In([o,h.pathnameBase])),route:p}),h.pathnameBase!=="/"&&(o=In([o,h.pathnameBase]))}return s}function jh(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=ew(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,d,h)=>{let{paramName:p,isOptional:y}=d;if(p==="*"){let v=l[h]||"";s=o.slice(0,o.length-v.length).replace(/(.)\/+$/,"$1")}const k=l[h];return y&&!k?u[p]=void 0:u[p]=(k||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:s,pattern:e}}function ew(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Bg(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,l,c)=>(r.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function tw(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Bg(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function qu(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function nw(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?hi(e):e;return{pathname:n?n.startsWith("/")?n:rw(n,t):t,search:aw(r),hash:sw(i)}}function rw(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function ll(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function iw(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function $g(e,t){let n=iw(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Wg(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=hi(e):(i=ao({},e),ge(!i.pathname||!i.pathname.includes("?"),ll("?","pathname","search",i)),ge(!i.pathname||!i.pathname.includes("#"),ll("#","pathname","hash",i)),ge(!i.search||!i.search.includes("#"),ll("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,l;if(s==null)l=n;else{let h=t.length-1;if(!r&&s.startsWith("..")){let p=s.split("/");for(;p[0]==="..";)p.shift(),h-=1;i.pathname=p.join("/")}l=h>=0?t[h]:"/"}let c=nw(i,l),u=s&&s!=="/"&&s.endsWith("/"),d=(o||s===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||d)&&(c.pathname+="/"),c}const In=e=>e.join("/").replace(/\/\/+/g,"/"),ow=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),aw=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,sw=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function lw(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Gg=["post","put","patch","delete"];new Set(Gg);const cw=["get",...Gg];new Set(cw);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function so(){return so=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},so.apply(this,arguments)}const Fu=m.createContext(null),uw=m.createContext(null),pr=m.createContext(null),ys=m.createContext(null),zn=m.createContext({outlet:null,matches:[],isDataRoute:!1}),Qg=m.createContext(null);function dw(e,t){let{relative:n}=t===void 0?{}:t;ko()||ge(!1);let{basename:r,navigator:i}=m.useContext(pr),{hash:o,pathname:s,search:l}=Xg(e,{relative:n}),c=s;return r!=="/"&&(c=s==="/"?r:In([r,s])),i.createHref({pathname:c,search:l,hash:o})}function ko(){return m.useContext(ys)!=null}function St(){return ko()||ge(!1),m.useContext(ys).location}function Kg(e){m.useContext(pr).static||m.useLayoutEffect(e)}function Yg(){let{isDataRoute:e}=m.useContext(zn);return e?Tw():hw()}function hw(){ko()||ge(!1);let e=m.useContext(Fu),{basename:t,future:n,navigator:r}=m.useContext(pr),{matches:i}=m.useContext(zn),{pathname:o}=St(),s=JSON.stringify($g(i,n.v7_relativeSplatPath)),l=m.useRef(!1);return Kg(()=>{l.current=!0}),m.useCallback(function(u,d){if(d===void 0&&(d={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let h=Wg(u,JSON.parse(s),o,d.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:In([t,h.pathname])),(d.replace?r.replace:r.push)(h,d.state,d)},[t,r,s,o,e])}function pw(){let{matches:e}=m.useContext(zn),t=e[e.length-1];return t?t.params:{}}function Xg(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=m.useContext(pr),{matches:i}=m.useContext(zn),{pathname:o}=St(),s=JSON.stringify($g(i,r.v7_relativeSplatPath));return m.useMemo(()=>Wg(e,JSON.parse(s),o,n==="path"),[e,s,o,n])}function mw(e,t){return gw(e,t)}function gw(e,t,n,r){ko()||ge(!1);let{navigator:i}=m.useContext(pr),{matches:o}=m.useContext(zn),s=o[o.length-1],l=s?s.params:{};s&&s.pathname;let c=s?s.pathnameBase:"/";s&&s.route;let u=St(),d;if(t){var h;let w=typeof t=="string"?hi(t):t;c==="/"||(h=w.pathname)!=null&&h.startsWith(c)||ge(!1),d=w}else d=u;let p=d.pathname||"/",y=p;if(c!=="/"){let w=c.replace(/^\//,"").split("/");y="/"+p.replace(/^\//,"").split("/").slice(w.length).join("/")}let k=Bb(e,{pathname:y}),v=bw(k&&k.map(w=>Object.assign({},w,{params:Object.assign({},l,w.params),pathname:In([c,i.encodeLocation?i.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?c:In([c,i.encodeLocation?i.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),o,n,r);return t&&v?m.createElement(ys.Provider,{value:{location:so({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:wn.Pop}},v):v}function fw(){let e=Sw(),t=lw(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return m.createElement(m.Fragment,null,m.createElement("h2",null,"Unexpected Application Error!"),m.createElement("h3",{style:{fontStyle:"italic"}},t),n?m.createElement("pre",{style:i},n):null,null)}const vw=m.createElement(fw,null);class yw extends m.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?m.createElement(zn.Provider,{value:this.props.routeContext},m.createElement(Qg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function xw(e){let{routeContext:t,match:n,children:r}=e,i=m.useContext(Fu);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),m.createElement(zn.Provider,{value:t},r)}function bw(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=s.findIndex(h=>h.route.id&&(l==null?void 0:l[h.route.id])!==void 0);d>=0||ge(!1),s=s.slice(0,Math.min(s.length,d+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<s.length;d++){let h=s[d];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(u=d),h.route.id){let{loaderData:p,errors:y}=n,k=h.route.loader&&p[h.route.id]===void 0&&(!y||y[h.route.id]===void 0);if(h.route.lazy||k){c=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((d,h,p)=>{let y,k=!1,v=null,w=null;n&&(y=l&&h.route.id?l[h.route.id]:void 0,v=h.route.errorElement||vw,c&&(u<0&&p===0?(k=!0,w=null):u===p&&(k=!0,w=h.route.hydrateFallbackElement||null)));let f=t.concat(s.slice(0,p+1)),g=()=>{let x;return y?x=v:k?x=w:h.route.Component?x=m.createElement(h.route.Component,null):h.route.element?x=h.route.element:x=d,m.createElement(xw,{match:h,routeContext:{outlet:d,matches:f,isDataRoute:n!=null},children:x})};return n&&(h.route.ErrorBoundary||h.route.errorElement||p===0)?m.createElement(yw,{location:n.location,revalidation:n.revalidation,component:v,error:y,children:g(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):g()},null)}var Jg=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Jg||{}),Ga=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Ga||{});function ww(e){let t=m.useContext(Fu);return t||ge(!1),t}function kw(e){let t=m.useContext(uw);return t||ge(!1),t}function Cw(e){let t=m.useContext(zn);return t||ge(!1),t}function Zg(e){let t=Cw(),n=t.matches[t.matches.length-1];return n.route.id||ge(!1),n.route.id}function Sw(){var e;let t=m.useContext(Qg),n=kw(Ga.UseRouteError),r=Zg(Ga.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Tw(){let{router:e}=ww(Jg.UseNavigateStable),t=Zg(Ga.UseNavigateStable),n=m.useRef(!1);return Kg(()=>{n.current=!0}),m.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,so({fromRouteId:t},o)))},[e,t])}function Nw(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Wn(e){ge(!1)}function Pw(e){let{basename:t="/",children:n=null,location:r,navigationType:i=wn.Pop,navigator:o,static:s=!1,future:l}=e;ko()&&ge(!1);let c=t.replace(/^\/*/,"/"),u=m.useMemo(()=>({basename:c,navigator:o,static:s,future:so({v7_relativeSplatPath:!1},l)}),[c,l,o,s]);typeof r=="string"&&(r=hi(r));let{pathname:d="/",search:h="",hash:p="",state:y=null,key:k="default"}=r,v=m.useMemo(()=>{let w=qu(d,c);return w==null?null:{location:{pathname:w,search:h,hash:p,state:y,key:k},navigationType:i}},[c,d,h,p,y,k,i]);return v==null?null:m.createElement(pr.Provider,{value:u},m.createElement(ys.Provider,{children:n,value:v}))}function jw(e){let{children:t,location:n}=e;return mw(kc(t),n)}new Promise(()=>{});function kc(e,t){t===void 0&&(t=[]);let n=[];return m.Children.forEach(e,(r,i)=>{if(!m.isValidElement(r))return;let o=[...t,i];if(r.type===m.Fragment){n.push.apply(n,kc(r.props.children,o));return}r.type!==Wn&&ge(!1),!r.props.index||!r.props.children||ge(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=kc(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Cc(){return Cc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Cc.apply(this,arguments)}function Ew(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Aw(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Iw(e,t){return e.button===0&&(!t||t==="_self")&&!Aw(e)}function Sc(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(i=>[n,i]):[[n,r]])},[]))}function Rw(e,t){let n=Sc(e);return t&&t.forEach((r,i)=>{n.has(i)||t.getAll(i).forEach(o=>{n.append(i,o)})}),n}const Mw=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Lw="6";try{window.__reactRouterVersion=Lw}catch{}const Dw="startTransition",Eh=Wc[Dw];function Ow(e){let{basename:t,children:n,future:r,window:i}=e,o=m.useRef();o.current==null&&(o.current=Fb({window:i,v5Compat:!0}));let s=o.current,[l,c]=m.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},d=m.useCallback(h=>{u&&Eh?Eh(()=>c(h)):c(h)},[c,u]);return m.useLayoutEffect(()=>s.listen(d),[s,d]),m.useEffect(()=>Nw(r),[r]),m.createElement(Pw,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:s,future:r})}const _w=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",qw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,xe=m.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:l,target:c,to:u,preventScrollReset:d,viewTransition:h}=t,p=Ew(t,Mw),{basename:y}=m.useContext(pr),k,v=!1;if(typeof u=="string"&&qw.test(u)&&(k=u,_w))try{let x=new URL(window.location.href),b=u.startsWith("//")?new URL(x.protocol+u):new URL(u),C=qu(b.pathname,y);b.origin===x.origin&&C!=null?u=C+b.search+b.hash:v=!0}catch{}let w=dw(u,{relative:i}),f=Fw(u,{replace:s,state:l,target:c,preventScrollReset:d,relative:i,viewTransition:h});function g(x){r&&r(x),x.defaultPrevented||f(x)}return m.createElement("a",Cc({},p,{href:k||w,onClick:v||o?r:g,ref:n,target:c}))});var Ah;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Ah||(Ah={}));var Ih;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Ih||(Ih={}));function Fw(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s,viewTransition:l}=t===void 0?{}:t,c=Yg(),u=St(),d=Xg(e,{relative:s});return m.useCallback(h=>{if(Iw(h,n)){h.preventDefault();let p=r!==void 0?r:Wa(u)===Wa(d);c(e,{replace:p,state:i,preventScrollReset:o,relative:s,viewTransition:l})}},[u,c,d,r,i,n,e,o,s,l])}function zw(e){let t=m.useRef(Sc(e)),n=m.useRef(!1),r=St(),i=m.useMemo(()=>Rw(r.search,n.current?null:t.current),[r.search]),o=Yg(),s=m.useCallback((l,c)=>{const u=Sc(typeof l=="function"?l(i):l);n.current=!0,o("?"+u,c)},[o,i]);return[i,s]}const Vw=3,Bw=500;let cl=0;function Uw(){return cl=(cl+1)%Number.MAX_SAFE_INTEGER,cl.toString()}const ul=new Map,Rh=e=>{if(ul.has(e))return;const t=setTimeout(()=>{ul.delete(e),zi({type:"REMOVE_TOAST",toastId:e})},Bw);ul.set(e,t)},Hw=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,Vw)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(n=>n.id===t.toast.id?{...n,...t.toast}:n)};case"DISMISS_TOAST":{const{toastId:n}=t;return n?Rh(n):e.toasts.forEach(r=>{Rh(r.id)}),{...e,toasts:e.toasts.map(r=>r.id===n||n===void 0?{...r,open:!1}:r)}}case"REMOVE_TOAST":return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(n=>n.id!==t.toastId)}}},pa=[];let ma={toasts:[]};function zi(e){ma=Hw(ma,e),pa.forEach(t=>{t(ma)})}function $w({...e}){const t=Uw(),n=i=>zi({type:"UPDATE_TOAST",toast:{...i,id:t}}),r=()=>zi({type:"DISMISS_TOAST",toastId:t});return zi({type:"ADD_TOAST",toast:{...e,id:t,open:!0,onOpenChange:i=>{i||r()}}}),{id:t,dismiss:r,update:n}}function zu(){const[e,t]=m.useState(ma);return m.useEffect(()=>(pa.push(t),()=>{const n=pa.indexOf(t);n>-1&&pa.splice(n,1)}),[e]),{...e,toast:$w,dismiss:n=>zi({type:"DISMISS_TOAST",toastId:n})}}function oe(e,t,{checkForDefaultPrevented:n=!0}={}){return function(i){if(e==null||e(i),n===!1||!i.defaultPrevented)return t==null?void 0:t(i)}}function Mh(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function ef(...e){return t=>{let n=!1;const r=e.map(i=>{const o=Mh(i,t);return!n&&typeof o=="function"&&(n=!0),o});if(n)return()=>{for(let i=0;i<r.length;i++){const o=r[i];typeof o=="function"?o():Mh(e[i],null)}}}}function $e(...e){return m.useCallback(ef(...e),e)}function Co(e,t=[]){let n=[];function r(o,s){const l=m.createContext(s),c=n.length;n=[...n,s];const u=h=>{var f;const{scope:p,children:y,...k}=h,v=((f=p==null?void 0:p[e])==null?void 0:f[c])||l,w=m.useMemo(()=>k,Object.values(k));return a.jsx(v.Provider,{value:w,children:y})};u.displayName=o+"Provider";function d(h,p){var v;const y=((v=p==null?void 0:p[e])==null?void 0:v[c])||l,k=m.useContext(y);if(k)return k;if(s!==void 0)return s;throw new Error(`\`${h}\` must be used within \`${o}\``)}return[u,d]}const i=()=>{const o=n.map(s=>m.createContext(s));return function(l){const c=(l==null?void 0:l[e])||o;return m.useMemo(()=>({[`__scope${e}`]:{...l,[e]:c}}),[l,c])}};return i.scopeName=e,[r,Ww(i,...t)]}function Ww(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(i=>({useScope:i(),scopeName:i.scopeName}));return function(o){const s=r.reduce((l,{useScope:c,scopeName:u})=>{const h=c(o)[`__scope${u}`];return{...l,...h}},{});return m.useMemo(()=>({[`__scope${t.scopeName}`]:s}),[s])}};return n.scopeName=t.scopeName,n}function lo(e){const t=Qw(e),n=m.forwardRef((r,i)=>{const{children:o,...s}=r,l=m.Children.toArray(o),c=l.find(Yw);if(c){const u=c.props.children,d=l.map(h=>h===c?m.Children.count(u)>1?m.Children.only(null):m.isValidElement(u)?u.props.children:null:h);return a.jsx(t,{...s,ref:i,children:m.isValidElement(u)?m.cloneElement(u,void 0,d):null})}return a.jsx(t,{...s,ref:i,children:o})});return n.displayName=`${e}.Slot`,n}var Gw=lo("Slot");function Qw(e){const t=m.forwardRef((n,r)=>{const{children:i,...o}=n;if(m.isValidElement(i)){const s=Jw(i),l=Xw(o,i.props);return i.type!==m.Fragment&&(l.ref=r?ef(r,s):s),m.cloneElement(i,l)}return m.Children.count(i)>1?m.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}var tf=Symbol("radix.slottable");function Kw(e){const t=({children:n})=>a.jsx(a.Fragment,{children:n});return t.displayName=`${e}.Slottable`,t.__radixId=tf,t}function Yw(e){return m.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===tf}function Xw(e,t){const n={...t};for(const r in t){const i=e[r],o=t[r];/^on[A-Z]/.test(r)?i&&o?n[r]=(...l)=>{const c=o(...l);return i(...l),c}:i&&(n[r]=i):r==="style"?n[r]={...i,...o}:r==="className"&&(n[r]=[i,o].filter(Boolean).join(" "))}return{...e,...n}}function Jw(e){var r,i;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(i=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:i.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}function Zw(e){const t=e+"CollectionProvider",[n,r]=Co(t),[i,o]=n(t,{collectionRef:{current:null},itemMap:new Map}),s=v=>{const{scope:w,children:f}=v,g=Un.useRef(null),x=Un.useRef(new Map).current;return a.jsx(i,{scope:w,itemMap:x,collectionRef:g,children:f})};s.displayName=t;const l=e+"CollectionSlot",c=lo(l),u=Un.forwardRef((v,w)=>{const{scope:f,children:g}=v,x=o(l,f),b=$e(w,x.collectionRef);return a.jsx(c,{ref:b,children:g})});u.displayName=l;const d=e+"CollectionItemSlot",h="data-radix-collection-item",p=lo(d),y=Un.forwardRef((v,w)=>{const{scope:f,children:g,...x}=v,b=Un.useRef(null),C=$e(w,b),T=o(d,f);return Un.useEffect(()=>(T.itemMap.set(b,{ref:b,...x}),()=>void T.itemMap.delete(b))),a.jsx(p,{[h]:"",ref:C,children:g})});y.displayName=d;function k(v){const w=o(e+"CollectionConsumer",v);return Un.useCallback(()=>{const g=w.collectionRef.current;if(!g)return[];const x=Array.from(g.querySelectorAll(`[${h}]`));return Array.from(w.itemMap.values()).sort((T,N)=>x.indexOf(T.ref.current)-x.indexOf(N.ref.current))},[w.collectionRef,w.itemMap])}return[{Provider:s,Slot:u,ItemSlot:y},k,r]}var e0=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],Ne=e0.reduce((e,t)=>{const n=lo(`Primitive.${t}`),r=m.forwardRef((i,o)=>{const{asChild:s,...l}=i,c=s?n:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),a.jsx(c,{...l,ref:o})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{});function nf(e,t){e&&wo.flushSync(()=>e.dispatchEvent(t))}function Ot(e){const t=m.useRef(e);return m.useEffect(()=>{t.current=e}),m.useMemo(()=>(...n)=>{var r;return(r=t.current)==null?void 0:r.call(t,...n)},[])}function t0(e,t=globalThis==null?void 0:globalThis.document){const n=Ot(e);m.useEffect(()=>{const r=i=>{i.key==="Escape"&&n(i)};return t.addEventListener("keydown",r,{capture:!0}),()=>t.removeEventListener("keydown",r,{capture:!0})},[n,t])}var n0="DismissableLayer",Tc="dismissableLayer.update",r0="dismissableLayer.pointerDownOutside",i0="dismissableLayer.focusOutside",Lh,rf=m.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),xs=m.forwardRef((e,t)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:r,onPointerDownOutside:i,onFocusOutside:o,onInteractOutside:s,onDismiss:l,...c}=e,u=m.useContext(rf),[d,h]=m.useState(null),p=(d==null?void 0:d.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,y]=m.useState({}),k=$e(t,N=>h(N)),v=Array.from(u.layers),[w]=[...u.layersWithOutsidePointerEventsDisabled].slice(-1),f=v.indexOf(w),g=d?v.indexOf(d):-1,x=u.layersWithOutsidePointerEventsDisabled.size>0,b=g>=f,C=a0(N=>{const S=N.target,j=[...u.branches].some(A=>A.contains(S));!b||j||(i==null||i(N),s==null||s(N),N.defaultPrevented||l==null||l())},p),T=s0(N=>{const S=N.target;[...u.branches].some(A=>A.contains(S))||(o==null||o(N),s==null||s(N),N.defaultPrevented||l==null||l())},p);return t0(N=>{g===u.layers.size-1&&(r==null||r(N),!N.defaultPrevented&&l&&(N.preventDefault(),l()))},p),m.useEffect(()=>{if(d)return n&&(u.layersWithOutsidePointerEventsDisabled.size===0&&(Lh=p.body.style.pointerEvents,p.body.style.pointerEvents="none"),u.layersWithOutsidePointerEventsDisabled.add(d)),u.layers.add(d),Dh(),()=>{n&&u.layersWithOutsidePointerEventsDisabled.size===1&&(p.body.style.pointerEvents=Lh)}},[d,p,n,u]),m.useEffect(()=>()=>{d&&(u.layers.delete(d),u.layersWithOutsidePointerEventsDisabled.delete(d),Dh())},[d,u]),m.useEffect(()=>{const N=()=>y({});return document.addEventListener(Tc,N),()=>document.removeEventListener(Tc,N)},[]),a.jsx(Ne.div,{...c,ref:k,style:{pointerEvents:x?b?"auto":"none":void 0,...e.style},onFocusCapture:oe(e.onFocusCapture,T.onFocusCapture),onBlurCapture:oe(e.onBlurCapture,T.onBlurCapture),onPointerDownCapture:oe(e.onPointerDownCapture,C.onPointerDownCapture)})});xs.displayName=n0;var o0="DismissableLayerBranch",of=m.forwardRef((e,t)=>{const n=m.useContext(rf),r=m.useRef(null),i=$e(t,r);return m.useEffect(()=>{const o=r.current;if(o)return n.branches.add(o),()=>{n.branches.delete(o)}},[n.branches]),a.jsx(Ne.div,{...e,ref:i})});of.displayName=o0;function a0(e,t=globalThis==null?void 0:globalThis.document){const n=Ot(e),r=m.useRef(!1),i=m.useRef(()=>{});return m.useEffect(()=>{const o=l=>{if(l.target&&!r.current){let c=function(){af(r0,n,u,{discrete:!0})};const u={originalEvent:l};l.pointerType==="touch"?(t.removeEventListener("click",i.current),i.current=c,t.addEventListener("click",i.current,{once:!0})):c()}else t.removeEventListener("click",i.current);r.current=!1},s=window.setTimeout(()=>{t.addEventListener("pointerdown",o)},0);return()=>{window.clearTimeout(s),t.removeEventListener("pointerdown",o),t.removeEventListener("click",i.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}function s0(e,t=globalThis==null?void 0:globalThis.document){const n=Ot(e),r=m.useRef(!1);return m.useEffect(()=>{const i=o=>{o.target&&!r.current&&af(i0,n,{originalEvent:o},{discrete:!1})};return t.addEventListener("focusin",i),()=>t.removeEventListener("focusin",i)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}function Dh(){const e=new CustomEvent(Tc);document.dispatchEvent(e)}function af(e,t,n,{discrete:r}){const i=n.originalEvent.target,o=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&i.addEventListener(e,t,{once:!0}),r?nf(i,o):i.dispatchEvent(o)}var l0=xs,c0=of,Zt=globalThis!=null&&globalThis.document?m.useLayoutEffect:()=>{},u0="Portal",Vu=m.forwardRef((e,t)=>{var l;const{container:n,...r}=e,[i,o]=m.useState(!1);Zt(()=>o(!0),[]);const s=n||i&&((l=globalThis==null?void 0:globalThis.document)==null?void 0:l.body);return s?qb.createPortal(a.jsx(Ne.div,{...r,ref:t}),s):null});Vu.displayName=u0;function d0(e,t){return m.useReducer((n,r)=>t[n][r]??n,e)}var So=e=>{const{present:t,children:n}=e,r=h0(t),i=typeof n=="function"?n({present:r.isPresent}):m.Children.only(n),o=$e(r.ref,p0(i));return typeof n=="function"||r.isPresent?m.cloneElement(i,{ref:o}):null};So.displayName="Presence";function h0(e){const[t,n]=m.useState(),r=m.useRef(null),i=m.useRef(e),o=m.useRef("none"),s=e?"mounted":"unmounted",[l,c]=d0(s,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return m.useEffect(()=>{const u=Go(r.current);o.current=l==="mounted"?u:"none"},[l]),Zt(()=>{const u=r.current,d=i.current;if(d!==e){const p=o.current,y=Go(u);e?c("MOUNT"):y==="none"||(u==null?void 0:u.display)==="none"?c("UNMOUNT"):c(d&&p!==y?"ANIMATION_OUT":"UNMOUNT"),i.current=e}},[e,c]),Zt(()=>{if(t){let u;const d=t.ownerDocument.defaultView??window,h=y=>{const v=Go(r.current).includes(y.animationName);if(y.target===t&&v&&(c("ANIMATION_END"),!i.current)){const w=t.style.animationFillMode;t.style.animationFillMode="forwards",u=d.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=w)})}},p=y=>{y.target===t&&(o.current=Go(r.current))};return t.addEventListener("animationstart",p),t.addEventListener("animationcancel",h),t.addEventListener("animationend",h),()=>{d.clearTimeout(u),t.removeEventListener("animationstart",p),t.removeEventListener("animationcancel",h),t.removeEventListener("animationend",h)}}else c("ANIMATION_END")},[t,c]),{isPresent:["mounted","unmountSuspended"].includes(l),ref:m.useCallback(u=>{r.current=u?getComputedStyle(u):null,n(u)},[])}}function Go(e){return(e==null?void 0:e.animationName)||"none"}function p0(e){var r,i;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(i=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:i.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var m0=Wc[" useInsertionEffect ".trim().toString()]||Zt;function Bu({prop:e,defaultProp:t,onChange:n=()=>{},caller:r}){const[i,o,s]=g0({defaultProp:t,onChange:n}),l=e!==void 0,c=l?e:i;{const d=m.useRef(e!==void 0);m.useEffect(()=>{const h=d.current;h!==l&&console.warn(`${r} is changing from ${h?"controlled":"uncontrolled"} to ${l?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),d.current=l},[l,r])}const u=m.useCallback(d=>{var h;if(l){const p=f0(d)?d(e):d;p!==e&&((h=s.current)==null||h.call(s,p))}else o(d)},[l,e,o,s]);return[c,u]}function g0({defaultProp:e,onChange:t}){const[n,r]=m.useState(e),i=m.useRef(n),o=m.useRef(t);return m0(()=>{o.current=t},[t]),m.useEffect(()=>{var s;i.current!==n&&((s=o.current)==null||s.call(o,n),i.current=n)},[n,i]),[n,r,o]}function f0(e){return typeof e=="function"}var v0=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"}),y0="VisuallyHidden",bs=m.forwardRef((e,t)=>a.jsx(Ne.span,{...e,ref:t,style:{...v0,...e.style}}));bs.displayName=y0;var x0=bs,Uu="ToastProvider",[Hu,b0,w0]=Zw("Toast"),[sf,jN]=Co("Toast",[w0]),[k0,ws]=sf(Uu),lf=e=>{const{__scopeToast:t,label:n="Notification",duration:r=5e3,swipeDirection:i="right",swipeThreshold:o=50,children:s}=e,[l,c]=m.useState(null),[u,d]=m.useState(0),h=m.useRef(!1),p=m.useRef(!1);return n.trim()||console.error(`Invalid prop \`label\` supplied to \`${Uu}\`. Expected non-empty \`string\`.`),a.jsx(Hu.Provider,{scope:t,children:a.jsx(k0,{scope:t,label:n,duration:r,swipeDirection:i,swipeThreshold:o,toastCount:u,viewport:l,onViewportChange:c,onToastAdd:m.useCallback(()=>d(y=>y+1),[]),onToastRemove:m.useCallback(()=>d(y=>y-1),[]),isFocusedToastEscapeKeyDownRef:h,isClosePausedRef:p,children:s})})};lf.displayName=Uu;var cf="ToastViewport",C0=["F8"],Nc="toast.viewportPause",Pc="toast.viewportResume",uf=m.forwardRef((e,t)=>{const{__scopeToast:n,hotkey:r=C0,label:i="Notifications ({hotkey})",...o}=e,s=ws(cf,n),l=b0(n),c=m.useRef(null),u=m.useRef(null),d=m.useRef(null),h=m.useRef(null),p=$e(t,h,s.onViewportChange),y=r.join("+").replace(/Key/g,"").replace(/Digit/g,""),k=s.toastCount>0;m.useEffect(()=>{const w=f=>{var x;r.length!==0&&r.every(b=>f[b]||f.code===b)&&((x=h.current)==null||x.focus())};return document.addEventListener("keydown",w),()=>document.removeEventListener("keydown",w)},[r]),m.useEffect(()=>{const w=c.current,f=h.current;if(k&&w&&f){const g=()=>{if(!s.isClosePausedRef.current){const T=new CustomEvent(Nc);f.dispatchEvent(T),s.isClosePausedRef.current=!0}},x=()=>{if(s.isClosePausedRef.current){const T=new CustomEvent(Pc);f.dispatchEvent(T),s.isClosePausedRef.current=!1}},b=T=>{!w.contains(T.relatedTarget)&&x()},C=()=>{w.contains(document.activeElement)||x()};return w.addEventListener("focusin",g),w.addEventListener("focusout",b),w.addEventListener("pointermove",g),w.addEventListener("pointerleave",C),window.addEventListener("blur",g),window.addEventListener("focus",x),()=>{w.removeEventListener("focusin",g),w.removeEventListener("focusout",b),w.removeEventListener("pointermove",g),w.removeEventListener("pointerleave",C),window.removeEventListener("blur",g),window.removeEventListener("focus",x)}}},[k,s.isClosePausedRef]);const v=m.useCallback(({tabbingDirection:w})=>{const g=l().map(x=>{const b=x.ref.current,C=[b,...O0(b)];return w==="forwards"?C:C.reverse()});return(w==="forwards"?g.reverse():g).flat()},[l]);return m.useEffect(()=>{const w=h.current;if(w){const f=g=>{var C,T,N;const x=g.altKey||g.ctrlKey||g.metaKey;if(g.key==="Tab"&&!x){const S=document.activeElement,j=g.shiftKey;if(g.target===w&&j){(C=u.current)==null||C.focus();return}const M=v({tabbingDirection:j?"backwards":"forwards"}),$=M.findIndex(D=>D===S);dl(M.slice($+1))?g.preventDefault():j?(T=u.current)==null||T.focus():(N=d.current)==null||N.focus()}};return w.addEventListener("keydown",f),()=>w.removeEventListener("keydown",f)}},[l,v]),a.jsxs(c0,{ref:c,role:"region","aria-label":i.replace("{hotkey}",y),tabIndex:-1,style:{pointerEvents:k?void 0:"none"},children:[k&&a.jsx(jc,{ref:u,onFocusFromOutsideViewport:()=>{const w=v({tabbingDirection:"forwards"});dl(w)}}),a.jsx(Hu.Slot,{scope:n,children:a.jsx(Ne.ol,{tabIndex:-1,...o,ref:p})}),k&&a.jsx(jc,{ref:d,onFocusFromOutsideViewport:()=>{const w=v({tabbingDirection:"backwards"});dl(w)}})]})});uf.displayName=cf;var df="ToastFocusProxy",jc=m.forwardRef((e,t)=>{const{__scopeToast:n,onFocusFromOutsideViewport:r,...i}=e,o=ws(df,n);return a.jsx(bs,{"aria-hidden":!0,tabIndex:0,...i,ref:t,style:{position:"fixed"},onFocus:s=>{var u;const l=s.relatedTarget;!((u=o.viewport)!=null&&u.contains(l))&&r()}})});jc.displayName=df;var To="Toast",S0="toast.swipeStart",T0="toast.swipeMove",N0="toast.swipeCancel",P0="toast.swipeEnd",hf=m.forwardRef((e,t)=>{const{forceMount:n,open:r,defaultOpen:i,onOpenChange:o,...s}=e,[l,c]=Bu({prop:r,defaultProp:i??!0,onChange:o,caller:To});return a.jsx(So,{present:n||l,children:a.jsx(A0,{open:l,...s,ref:t,onClose:()=>c(!1),onPause:Ot(e.onPause),onResume:Ot(e.onResume),onSwipeStart:oe(e.onSwipeStart,u=>{u.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:oe(e.onSwipeMove,u=>{const{x:d,y:h}=u.detail.delta;u.currentTarget.setAttribute("data-swipe","move"),u.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${d}px`),u.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${h}px`)}),onSwipeCancel:oe(e.onSwipeCancel,u=>{u.currentTarget.setAttribute("data-swipe","cancel"),u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:oe(e.onSwipeEnd,u=>{const{x:d,y:h}=u.detail.delta;u.currentTarget.setAttribute("data-swipe","end"),u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),u.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${d}px`),u.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${h}px`),c(!1)})})})});hf.displayName=To;var[j0,E0]=sf(To,{onClose(){}}),A0=m.forwardRef((e,t)=>{const{__scopeToast:n,type:r="foreground",duration:i,open:o,onClose:s,onEscapeKeyDown:l,onPause:c,onResume:u,onSwipeStart:d,onSwipeMove:h,onSwipeCancel:p,onSwipeEnd:y,...k}=e,v=ws(To,n),[w,f]=m.useState(null),g=$e(t,D=>f(D)),x=m.useRef(null),b=m.useRef(null),C=i||v.duration,T=m.useRef(0),N=m.useRef(C),S=m.useRef(0),{onToastAdd:j,onToastRemove:A}=v,O=Ot(()=>{var W;(w==null?void 0:w.contains(document.activeElement))&&((W=v.viewport)==null||W.focus()),s()}),M=m.useCallback(D=>{!D||D===1/0||(window.clearTimeout(S.current),T.current=new Date().getTime(),S.current=window.setTimeout(O,D))},[O]);m.useEffect(()=>{const D=v.viewport;if(D){const W=()=>{M(N.current),u==null||u()},U=()=>{const G=new Date().getTime()-T.current;N.current=N.current-G,window.clearTimeout(S.current),c==null||c()};return D.addEventListener(Nc,U),D.addEventListener(Pc,W),()=>{D.removeEventListener(Nc,U),D.removeEventListener(Pc,W)}}},[v.viewport,C,c,u,M]),m.useEffect(()=>{o&&!v.isClosePausedRef.current&&M(C)},[o,C,v.isClosePausedRef,M]),m.useEffect(()=>(j(),()=>A()),[j,A]);const $=m.useMemo(()=>w?xf(w):null,[w]);return v.viewport?a.jsxs(a.Fragment,{children:[$&&a.jsx(I0,{__scopeToast:n,role:"status","aria-live":r==="foreground"?"assertive":"polite","aria-atomic":!0,children:$}),a.jsx(j0,{scope:n,onClose:O,children:wo.createPortal(a.jsx(Hu.ItemSlot,{scope:n,children:a.jsx(l0,{asChild:!0,onEscapeKeyDown:oe(l,()=>{v.isFocusedToastEscapeKeyDownRef.current||O(),v.isFocusedToastEscapeKeyDownRef.current=!1}),children:a.jsx(Ne.li,{role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":o?"open":"closed","data-swipe-direction":v.swipeDirection,...k,ref:g,style:{userSelect:"none",touchAction:"none",...e.style},onKeyDown:oe(e.onKeyDown,D=>{D.key==="Escape"&&(l==null||l(D.nativeEvent),D.nativeEvent.defaultPrevented||(v.isFocusedToastEscapeKeyDownRef.current=!0,O()))}),onPointerDown:oe(e.onPointerDown,D=>{D.button===0&&(x.current={x:D.clientX,y:D.clientY})}),onPointerMove:oe(e.onPointerMove,D=>{if(!x.current)return;const W=D.clientX-x.current.x,U=D.clientY-x.current.y,G=!!b.current,P=["left","right"].includes(v.swipeDirection),L=["left","up"].includes(v.swipeDirection)?Math.min:Math.max,F=P?L(0,W):0,H=P?0:L(0,U),Z=D.pointerType==="touch"?10:2,We={x:F,y:H},Le={originalEvent:D,delta:We};G?(b.current=We,Qo(T0,h,Le,{discrete:!1})):Oh(We,v.swipeDirection,Z)?(b.current=We,Qo(S0,d,Le,{discrete:!1}),D.target.setPointerCapture(D.pointerId)):(Math.abs(W)>Z||Math.abs(U)>Z)&&(x.current=null)}),onPointerUp:oe(e.onPointerUp,D=>{const W=b.current,U=D.target;if(U.hasPointerCapture(D.pointerId)&&U.releasePointerCapture(D.pointerId),b.current=null,x.current=null,W){const G=D.currentTarget,P={originalEvent:D,delta:W};Oh(W,v.swipeDirection,v.swipeThreshold)?Qo(P0,y,P,{discrete:!0}):Qo(N0,p,P,{discrete:!0}),G.addEventListener("click",L=>L.preventDefault(),{once:!0})}})})})}),v.viewport)})]}):null}),I0=e=>{const{__scopeToast:t,children:n,...r}=e,i=ws(To,t),[o,s]=m.useState(!1),[l,c]=m.useState(!1);return L0(()=>s(!0)),m.useEffect(()=>{const u=window.setTimeout(()=>c(!0),1e3);return()=>window.clearTimeout(u)},[]),l?null:a.jsx(Vu,{asChild:!0,children:a.jsx(bs,{...r,children:o&&a.jsxs(a.Fragment,{children:[i.label," ",n]})})})},R0="ToastTitle",pf=m.forwardRef((e,t)=>{const{__scopeToast:n,...r}=e;return a.jsx(Ne.div,{...r,ref:t})});pf.displayName=R0;var M0="ToastDescription",mf=m.forwardRef((e,t)=>{const{__scopeToast:n,...r}=e;return a.jsx(Ne.div,{...r,ref:t})});mf.displayName=M0;var gf="ToastAction",ff=m.forwardRef((e,t)=>{const{altText:n,...r}=e;return n.trim()?a.jsx(yf,{altText:n,asChild:!0,children:a.jsx($u,{...r,ref:t})}):(console.error(`Invalid prop \`altText\` supplied to \`${gf}\`. Expected non-empty \`string\`.`),null)});ff.displayName=gf;var vf="ToastClose",$u=m.forwardRef((e,t)=>{const{__scopeToast:n,...r}=e,i=E0(vf,n);return a.jsx(yf,{asChild:!0,children:a.jsx(Ne.button,{type:"button",...r,ref:t,onClick:oe(e.onClick,i.onClose)})})});$u.displayName=vf;var yf=m.forwardRef((e,t)=>{const{__scopeToast:n,altText:r,...i}=e;return a.jsx(Ne.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":r||void 0,...i,ref:t})});function xf(e){const t=[];return Array.from(e.childNodes).forEach(r=>{if(r.nodeType===r.TEXT_NODE&&r.textContent&&t.push(r.textContent),D0(r)){const i=r.ariaHidden||r.hidden||r.style.display==="none",o=r.dataset.radixToastAnnounceExclude==="";if(!i)if(o){const s=r.dataset.radixToastAnnounceAlt;s&&t.push(s)}else t.push(...xf(r))}}),t}function Qo(e,t,n,{discrete:r}){const i=n.originalEvent.currentTarget,o=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:n});t&&i.addEventListener(e,t,{once:!0}),r?nf(i,o):i.dispatchEvent(o)}var Oh=(e,t,n=0)=>{const r=Math.abs(e.x),i=Math.abs(e.y),o=r>i;return t==="left"||t==="right"?o&&r>n:!o&&i>n};function L0(e=()=>{}){const t=Ot(e);Zt(()=>{let n=0,r=0;return n=window.requestAnimationFrame(()=>r=window.requestAnimationFrame(t)),()=>{window.cancelAnimationFrame(n),window.cancelAnimationFrame(r)}},[t])}function D0(e){return e.nodeType===e.ELEMENT_NODE}function O0(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const i=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||i?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function dl(e){const t=document.activeElement;return e.some(n=>n===t?!0:(n.focus(),document.activeElement!==t))}var _0=lf,bf=uf,wf=hf,kf=pf,Cf=mf,Sf=ff,Tf=$u;function Nf(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=Nf(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function Pf(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=Nf(e))&&(r&&(r+=" "),r+=t);return r}const _h=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,qh=Pf,Wu=(e,t)=>n=>{var r;if((t==null?void 0:t.variants)==null)return qh(e,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:i,defaultVariants:o}=t,s=Object.keys(i).map(u=>{const d=n==null?void 0:n[u],h=o==null?void 0:o[u];if(d===null)return null;const p=_h(d)||_h(h);return i[u][p]}),l=n&&Object.entries(n).reduce((u,d)=>{let[h,p]=d;return p===void 0||(u[h]=p),u},{}),c=t==null||(r=t.compoundVariants)===null||r===void 0?void 0:r.reduce((u,d)=>{let{class:h,className:p,...y}=d;return Object.entries(y).every(k=>{let[v,w]=k;return Array.isArray(w)?w.includes({...o,...l}[v]):{...o,...l}[v]===w})?[...u,h,p]:u},[]);return qh(e,s,c,n==null?void 0:n.class,n==null?void 0:n.className)};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q0=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),jf=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var F0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z0=m.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:o,iconNode:s,...l},c)=>m.createElement("svg",{ref:c,...F0,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:jf("lucide",i),...l},[...s.map(([u,d])=>m.createElement(u,d)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=(e,t)=>{const n=m.forwardRef(({className:r,...i},o)=>m.createElement(z0,{ref:o,iconNode:t,className:jf(`lucide-${q0(e)}`,r),...i}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ef=z("ArrowDownRight",[["path",{d:"m7 7 10 10",key:"1fmybs"}],["path",{d:"M17 7v10H7",key:"6fjiku"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ec=z("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ac=z("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qt=z("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V0=z("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B0=z("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U0=z("BadgeCheck",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H0=z("Blocks",[["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["path",{d:"M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3",key:"1fpvtg"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fh=z("BookOpenCheck",[["path",{d:"M12 21V7",key:"gj6g52"}],["path",{d:"m16 12 2 2 4-4",key:"mdajum"}],["path",{d:"M22 6V4a1 1 0 0 0-1-1h-5a4 4 0 0 0-4 4 4 4 0 0 0-4-4H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h6a3 3 0 0 1 3 3 3 3 0 0 1 3-3h6a1 1 0 0 0 1-1v-1.3",key:"8arnkb"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $0=z("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W0=z("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G0=z("BriefcaseBusiness",[["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2",key:"1ksdt3"}],["path",{d:"M22 13a18.15 18.15 0 0 1-20 0",key:"12hx5q"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q0=z("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ga=z("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zh=z("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K0=z("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y0=z("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X0=z("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J0=z("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qa=z("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z0=z("CodeXml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ek=z("Compass",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tk=z("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nk=z("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ic=z("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ka=z("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vh=z("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rk=z("Flower2",[["path",{d:"M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1",key:"3pnvol"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["path",{d:"M12 10v12",key:"6ubwww"}],["path",{d:"M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z",key:"9hd38g"}],["path",{d:"M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z",key:"ufn41s"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hl=z("Folder",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ik=z("GitFork",[["circle",{cx:"12",cy:"18",r:"3",key:"1mpf1b"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["path",{d:"M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9",key:"1uq4wg"}],["path",{d:"M12 12v3",key:"158kv8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qr=z("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ok=z("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ak=z("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bh=z("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sk=z("Languages",[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lk=z("Laptop",[["path",{d:"M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16",key:"tarvll"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ck=z("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uk=z("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Af=z("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const If=z("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dk=z("Map",[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hk=z("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pk=z("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mk=z("Network",[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gk=z("SearchX",[["path",{d:"m13.5 8.5-5 5",key:"1cs55j"}],["path",{d:"m8.5 8.5 5 5",key:"a8mexj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pl=z("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fk=z("Shapes",[["path",{d:"M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z",key:"1bo67w"}],["rect",{x:"3",y:"14",width:"7",height:"7",rx:"1",key:"1bkyp8"}],["circle",{cx:"17.5",cy:"17.5",r:"3.5",key:"w3z12y"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vk=z("Share2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yk=z("Snowflake",[["line",{x1:"2",x2:"22",y1:"12",y2:"12",key:"1dnqot"}],["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"m20 16-4-4 4-4",key:"rquw4f"}],["path",{d:"m4 8 4 4-4 4",key:"12s3z9"}],["path",{d:"m16 4-4 4-4-4",key:"1tumq1"}],["path",{d:"m8 20 4-4 4 4",key:"9p200w"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gu=z("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xk=z("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bk=z("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rc=z("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wk=z("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ya=z("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Qu="-",kk=e=>{const t=Sk(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=e;return{getClassGroupId:s=>{const l=s.split(Qu);return l[0]===""&&l.length!==1&&l.shift(),Rf(l,t)||Ck(s)},getConflictingClassGroupIds:(s,l)=>{const c=n[s]||[];return l&&r[s]?[...c,...r[s]]:c}}},Rf=(e,t)=>{var s;if(e.length===0)return t.classGroupId;const n=e[0],r=t.nextPart.get(n),i=r?Rf(e.slice(1),r):void 0;if(i)return i;if(t.validators.length===0)return;const o=e.join(Qu);return(s=t.validators.find(({validator:l})=>l(o)))==null?void 0:s.classGroupId},Uh=/^\[(.+)\]$/,Ck=e=>{if(Uh.test(e)){const t=Uh.exec(e)[1],n=t==null?void 0:t.substring(0,t.indexOf(":"));if(n)return"arbitrary.."+n}},Sk=e=>{const{theme:t,prefix:n}=e,r={nextPart:new Map,validators:[]};return Nk(Object.entries(e.classGroups),n).forEach(([o,s])=>{Mc(s,r,o,t)}),r},Mc=(e,t,n,r)=>{e.forEach(i=>{if(typeof i=="string"){const o=i===""?t:Hh(t,i);o.classGroupId=n;return}if(typeof i=="function"){if(Tk(i)){Mc(i(r),t,n,r);return}t.validators.push({validator:i,classGroupId:n});return}Object.entries(i).forEach(([o,s])=>{Mc(s,Hh(t,o),n,r)})})},Hh=(e,t)=>{let n=e;return t.split(Qu).forEach(r=>{n.nextPart.has(r)||n.nextPart.set(r,{nextPart:new Map,validators:[]}),n=n.nextPart.get(r)}),n},Tk=e=>e.isThemeGetter,Nk=(e,t)=>t?e.map(([n,r])=>{const i=r.map(o=>typeof o=="string"?t+o:typeof o=="object"?Object.fromEntries(Object.entries(o).map(([s,l])=>[t+s,l])):o);return[n,i]}):e,Pk=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,n=new Map,r=new Map;const i=(o,s)=>{n.set(o,s),t++,t>e&&(t=0,r=n,n=new Map)};return{get(o){let s=n.get(o);if(s!==void 0)return s;if((s=r.get(o))!==void 0)return i(o,s),s},set(o,s){n.has(o)?n.set(o,s):i(o,s)}}},Mf="!",jk=e=>{const{separator:t,experimentalParseClassName:n}=e,r=t.length===1,i=t[0],o=t.length,s=l=>{const c=[];let u=0,d=0,h;for(let w=0;w<l.length;w++){let f=l[w];if(u===0){if(f===i&&(r||l.slice(w,w+o)===t)){c.push(l.slice(d,w)),d=w+o;continue}if(f==="/"){h=w;continue}}f==="["?u++:f==="]"&&u--}const p=c.length===0?l:l.substring(d),y=p.startsWith(Mf),k=y?p.substring(1):p,v=h&&h>d?h-d:void 0;return{modifiers:c,hasImportantModifier:y,baseClassName:k,maybePostfixModifierPosition:v}};return n?l=>n({className:l,parseClassName:s}):s},Ek=e=>{if(e.length<=1)return e;const t=[];let n=[];return e.forEach(r=>{r[0]==="["?(t.push(...n.sort(),r),n=[]):n.push(r)}),t.push(...n.sort()),t},Ak=e=>({cache:Pk(e.cacheSize),parseClassName:jk(e),...kk(e)}),Ik=/\s+/,Rk=(e,t)=>{const{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:i}=t,o=[],s=e.trim().split(Ik);let l="";for(let c=s.length-1;c>=0;c-=1){const u=s[c],{modifiers:d,hasImportantModifier:h,baseClassName:p,maybePostfixModifierPosition:y}=n(u);let k=!!y,v=r(k?p.substring(0,y):p);if(!v){if(!k){l=u+(l.length>0?" "+l:l);continue}if(v=r(p),!v){l=u+(l.length>0?" "+l:l);continue}k=!1}const w=Ek(d).join(":"),f=h?w+Mf:w,g=f+v;if(o.includes(g))continue;o.push(g);const x=i(v,k);for(let b=0;b<x.length;++b){const C=x[b];o.push(f+C)}l=u+(l.length>0?" "+l:l)}return l};function Mk(){let e=0,t,n,r="";for(;e<arguments.length;)(t=arguments[e++])&&(n=Lf(t))&&(r&&(r+=" "),r+=n);return r}const Lf=e=>{if(typeof e=="string")return e;let t,n="";for(let r=0;r<e.length;r++)e[r]&&(t=Lf(e[r]))&&(n&&(n+=" "),n+=t);return n};function Lk(e,...t){let n,r,i,o=s;function s(c){const u=t.reduce((d,h)=>h(d),e());return n=Ak(u),r=n.cache.get,i=n.cache.set,o=l,l(c)}function l(c){const u=r(c);if(u)return u;const d=Rk(c,n);return i(c,d),d}return function(){return o(Mk.apply(null,arguments))}}const te=e=>{const t=n=>n[e]||[];return t.isThemeGetter=!0,t},Df=/^\[(?:([a-z-]+):)?(.+)\]$/i,Dk=/^\d+\/\d+$/,Ok=new Set(["px","full","screen"]),_k=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,qk=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Fk=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,zk=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Vk=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,zt=e=>Fr(e)||Ok.has(e)||Dk.test(e),an=e=>pi(e,"length",Kk),Fr=e=>!!e&&!Number.isNaN(Number(e)),ml=e=>pi(e,"number",Fr),Ti=e=>!!e&&Number.isInteger(Number(e)),Bk=e=>e.endsWith("%")&&Fr(e.slice(0,-1)),B=e=>Df.test(e),sn=e=>_k.test(e),Uk=new Set(["length","size","percentage"]),Hk=e=>pi(e,Uk,Of),$k=e=>pi(e,"position",Of),Wk=new Set(["image","url"]),Gk=e=>pi(e,Wk,Xk),Qk=e=>pi(e,"",Yk),Ni=()=>!0,pi=(e,t,n)=>{const r=Df.exec(e);return r?r[1]?typeof t=="string"?r[1]===t:t.has(r[1]):n(r[2]):!1},Kk=e=>qk.test(e)&&!Fk.test(e),Of=()=>!1,Yk=e=>zk.test(e),Xk=e=>Vk.test(e),Jk=()=>{const e=te("colors"),t=te("spacing"),n=te("blur"),r=te("brightness"),i=te("borderColor"),o=te("borderRadius"),s=te("borderSpacing"),l=te("borderWidth"),c=te("contrast"),u=te("grayscale"),d=te("hueRotate"),h=te("invert"),p=te("gap"),y=te("gradientColorStops"),k=te("gradientColorStopPositions"),v=te("inset"),w=te("margin"),f=te("opacity"),g=te("padding"),x=te("saturate"),b=te("scale"),C=te("sepia"),T=te("skew"),N=te("space"),S=te("translate"),j=()=>["auto","contain","none"],A=()=>["auto","hidden","clip","visible","scroll"],O=()=>["auto",B,t],M=()=>[B,t],$=()=>["",zt,an],D=()=>["auto",Fr,B],W=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],U=()=>["solid","dashed","dotted","double","none"],G=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],P=()=>["start","end","center","between","around","evenly","stretch"],L=()=>["","0",B],F=()=>["auto","avoid","all","avoid-page","page","left","right","column"],H=()=>[Fr,B];return{cacheSize:500,separator:":",theme:{colors:[Ni],spacing:[zt,an],blur:["none","",sn,B],brightness:H(),borderColor:[e],borderRadius:["none","","full",sn,B],borderSpacing:M(),borderWidth:$(),contrast:H(),grayscale:L(),hueRotate:H(),invert:L(),gap:M(),gradientColorStops:[e],gradientColorStopPositions:[Bk,an],inset:O(),margin:O(),opacity:H(),padding:M(),saturate:H(),scale:H(),sepia:L(),skew:H(),space:M(),translate:M()},classGroups:{aspect:[{aspect:["auto","square","video",B]}],container:["container"],columns:[{columns:[sn]}],"break-after":[{"break-after":F()}],"break-before":[{"break-before":F()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...W(),B]}],overflow:[{overflow:A()}],"overflow-x":[{"overflow-x":A()}],"overflow-y":[{"overflow-y":A()}],overscroll:[{overscroll:j()}],"overscroll-x":[{"overscroll-x":j()}],"overscroll-y":[{"overscroll-y":j()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[v]}],"inset-x":[{"inset-x":[v]}],"inset-y":[{"inset-y":[v]}],start:[{start:[v]}],end:[{end:[v]}],top:[{top:[v]}],right:[{right:[v]}],bottom:[{bottom:[v]}],left:[{left:[v]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",Ti,B]}],basis:[{basis:O()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",B]}],grow:[{grow:L()}],shrink:[{shrink:L()}],order:[{order:["first","last","none",Ti,B]}],"grid-cols":[{"grid-cols":[Ni]}],"col-start-end":[{col:["auto",{span:["full",Ti,B]},B]}],"col-start":[{"col-start":D()}],"col-end":[{"col-end":D()}],"grid-rows":[{"grid-rows":[Ni]}],"row-start-end":[{row:["auto",{span:[Ti,B]},B]}],"row-start":[{"row-start":D()}],"row-end":[{"row-end":D()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",B]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",B]}],gap:[{gap:[p]}],"gap-x":[{"gap-x":[p]}],"gap-y":[{"gap-y":[p]}],"justify-content":[{justify:["normal",...P()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...P(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...P(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[g]}],px:[{px:[g]}],py:[{py:[g]}],ps:[{ps:[g]}],pe:[{pe:[g]}],pt:[{pt:[g]}],pr:[{pr:[g]}],pb:[{pb:[g]}],pl:[{pl:[g]}],m:[{m:[w]}],mx:[{mx:[w]}],my:[{my:[w]}],ms:[{ms:[w]}],me:[{me:[w]}],mt:[{mt:[w]}],mr:[{mr:[w]}],mb:[{mb:[w]}],ml:[{ml:[w]}],"space-x":[{"space-x":[N]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[N]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",B,t]}],"min-w":[{"min-w":[B,t,"min","max","fit"]}],"max-w":[{"max-w":[B,t,"none","full","min","max","fit","prose",{screen:[sn]},sn]}],h:[{h:[B,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[B,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[B,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[B,t,"auto","min","max","fit"]}],"font-size":[{text:["base",sn,an]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",ml]}],"font-family":[{font:[Ni]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",B]}],"line-clamp":[{"line-clamp":["none",Fr,ml]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",zt,B]}],"list-image":[{"list-image":["none",B]}],"list-style-type":[{list:["none","disc","decimal",B]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[f]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[f]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...U(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",zt,an]}],"underline-offset":[{"underline-offset":["auto",zt,B]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:M()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",B]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",B]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[f]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...W(),$k]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",Hk]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},Gk]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[k]}],"gradient-via-pos":[{via:[k]}],"gradient-to-pos":[{to:[k]}],"gradient-from":[{from:[y]}],"gradient-via":[{via:[y]}],"gradient-to":[{to:[y]}],rounded:[{rounded:[o]}],"rounded-s":[{"rounded-s":[o]}],"rounded-e":[{"rounded-e":[o]}],"rounded-t":[{"rounded-t":[o]}],"rounded-r":[{"rounded-r":[o]}],"rounded-b":[{"rounded-b":[o]}],"rounded-l":[{"rounded-l":[o]}],"rounded-ss":[{"rounded-ss":[o]}],"rounded-se":[{"rounded-se":[o]}],"rounded-ee":[{"rounded-ee":[o]}],"rounded-es":[{"rounded-es":[o]}],"rounded-tl":[{"rounded-tl":[o]}],"rounded-tr":[{"rounded-tr":[o]}],"rounded-br":[{"rounded-br":[o]}],"rounded-bl":[{"rounded-bl":[o]}],"border-w":[{border:[l]}],"border-w-x":[{"border-x":[l]}],"border-w-y":[{"border-y":[l]}],"border-w-s":[{"border-s":[l]}],"border-w-e":[{"border-e":[l]}],"border-w-t":[{"border-t":[l]}],"border-w-r":[{"border-r":[l]}],"border-w-b":[{"border-b":[l]}],"border-w-l":[{"border-l":[l]}],"border-opacity":[{"border-opacity":[f]}],"border-style":[{border:[...U(),"hidden"]}],"divide-x":[{"divide-x":[l]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[l]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[f]}],"divide-style":[{divide:U()}],"border-color":[{border:[i]}],"border-color-x":[{"border-x":[i]}],"border-color-y":[{"border-y":[i]}],"border-color-s":[{"border-s":[i]}],"border-color-e":[{"border-e":[i]}],"border-color-t":[{"border-t":[i]}],"border-color-r":[{"border-r":[i]}],"border-color-b":[{"border-b":[i]}],"border-color-l":[{"border-l":[i]}],"divide-color":[{divide:[i]}],"outline-style":[{outline:["",...U()]}],"outline-offset":[{"outline-offset":[zt,B]}],"outline-w":[{outline:[zt,an]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:$()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[f]}],"ring-offset-w":[{"ring-offset":[zt,an]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",sn,Qk]}],"shadow-color":[{shadow:[Ni]}],opacity:[{opacity:[f]}],"mix-blend":[{"mix-blend":[...G(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":G()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[r]}],contrast:[{contrast:[c]}],"drop-shadow":[{"drop-shadow":["","none",sn,B]}],grayscale:[{grayscale:[u]}],"hue-rotate":[{"hue-rotate":[d]}],invert:[{invert:[h]}],saturate:[{saturate:[x]}],sepia:[{sepia:[C]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[c]}],"backdrop-grayscale":[{"backdrop-grayscale":[u]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[d]}],"backdrop-invert":[{"backdrop-invert":[h]}],"backdrop-opacity":[{"backdrop-opacity":[f]}],"backdrop-saturate":[{"backdrop-saturate":[x]}],"backdrop-sepia":[{"backdrop-sepia":[C]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[s]}],"border-spacing-x":[{"border-spacing-x":[s]}],"border-spacing-y":[{"border-spacing-y":[s]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",B]}],duration:[{duration:H()}],ease:[{ease:["linear","in","out","in-out",B]}],delay:[{delay:H()}],animate:[{animate:["none","spin","ping","pulse","bounce",B]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[b]}],"scale-x":[{"scale-x":[b]}],"scale-y":[{"scale-y":[b]}],rotate:[{rotate:[Ti,B]}],"translate-x":[{"translate-x":[S]}],"translate-y":[{"translate-y":[S]}],"skew-x":[{"skew-x":[T]}],"skew-y":[{"skew-y":[T]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",B]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",B]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":M()}],"scroll-mx":[{"scroll-mx":M()}],"scroll-my":[{"scroll-my":M()}],"scroll-ms":[{"scroll-ms":M()}],"scroll-me":[{"scroll-me":M()}],"scroll-mt":[{"scroll-mt":M()}],"scroll-mr":[{"scroll-mr":M()}],"scroll-mb":[{"scroll-mb":M()}],"scroll-ml":[{"scroll-ml":M()}],"scroll-p":[{"scroll-p":M()}],"scroll-px":[{"scroll-px":M()}],"scroll-py":[{"scroll-py":M()}],"scroll-ps":[{"scroll-ps":M()}],"scroll-pe":[{"scroll-pe":M()}],"scroll-pt":[{"scroll-pt":M()}],"scroll-pr":[{"scroll-pr":M()}],"scroll-pb":[{"scroll-pb":M()}],"scroll-pl":[{"scroll-pl":M()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",B]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[zt,an,ml]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},Zk=Lk(Jk);function ut(...e){return Zk(Pf(e))}const e1=_0,_f=m.forwardRef(({className:e,...t},n)=>a.jsx(bf,{ref:n,className:ut("fixed right-0 top-0 z-[100] flex max-h-screen w-full flex-col gap-3 p-4 sm:max-w-[380px]",e),...t}));_f.displayName=bf.displayName;const t1=Wu("group pointer-events-auto relative flex w-full cursor-pointer items-start gap-3 overflow-hidden rounded-xl border p-4 pr-5 shadow-xl shadow-slate-950/10 backdrop-blur transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full sm:data-[state=open]:slide-in-from-right-full",{variants:{variant:{default:"border-slate-200 bg-white/95 text-slate-900",success:"border-emerald-200 bg-white/95 text-slate-900",info:"border-indigo-200 bg-white/95 text-slate-900",warning:"border-amber-200 bg-white/95 text-slate-900",destructive:"destructive group border-red-200 bg-white/95 text-slate-900"}},defaultVariants:{variant:"default"}}),qf=m.forwardRef(({className:e,variant:t,...n},r)=>a.jsx(wf,{ref:r,className:ut(t1({variant:t}),e),...n}));qf.displayName=wf.displayName;const n1=m.forwardRef(({className:e,...t},n)=>a.jsx(Sf,{ref:n,className:ut("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",e),...t}));n1.displayName=Sf.displayName;const r1=m.forwardRef(({className:e,...t},n)=>a.jsx(Tf,{ref:n,className:ut("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",e),"toast-close":"",...t,children:a.jsx(Ya,{className:"h-4 w-4"})}));r1.displayName=Tf.displayName;const Ff=m.forwardRef(({className:e,...t},n)=>a.jsx(kf,{ref:n,className:ut("text-sm font-semibold leading-5",e),...t}));Ff.displayName=kf.displayName;const zf=m.forwardRef(({className:e,...t},n)=>a.jsx(Cf,{ref:n,className:ut("line-clamp-2 text-sm leading-5 text-slate-500",e),...t}));zf.displayName=Cf.displayName;const $h=3600,Wh={default:{icon:Bh,iconClass:"bg-slate-100 text-slate-700",progressClass:"bg-slate-500"},success:{icon:X0,iconClass:"bg-emerald-50 text-emerald-600",progressClass:"bg-emerald-500"},info:{icon:Bh,iconClass:"bg-indigo-50 text-indigo-600",progressClass:"bg-indigo-500"},warning:{icon:wk,iconClass:"bg-amber-50 text-amber-600",progressClass:"bg-amber-500"},destructive:{icon:J0,iconClass:"bg-red-50 text-red-600",progressClass:"bg-red-500"}};function i1(){const{toasts:e,dismiss:t}=zu();return a.jsxs(e1,{duration:$h,children:[e.map(function({id:n,title:r,description:i,action:o,variant:s="default",...l}){const c=Wh[s]??Wh.default,u=c.icon;return a.jsxs(qf,{variant:s,onClick:()=>t(n),...l,children:[a.jsx("div",{className:`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${c.iconClass}`,children:a.jsx(u,{className:"h-4 w-4"})}),a.jsxs("div",{className:"min-w-0 flex-1",children:[a.jsxs("div",{className:"grid gap-1",children:[r&&a.jsx(Ff,{children:r}),i&&a.jsx(zf,{children:i})]}),o]}),a.jsx("div",{className:"absolute inset-x-0 bottom-0 h-1 bg-slate-100",children:a.jsx("div",{className:`h-full ${c.progressClass}`,style:{animation:`toast-progress ${$h}ms linear forwards`,transformOrigin:"left"}})})]},n)}),a.jsx(_f,{})]})}var o1=Wc[" useId ".trim().toString()]||(()=>{}),a1=0;function Vf(e){const[t,n]=m.useState(o1());return Zt(()=>{n(r=>r??String(a1++))},[e]),t?`radix-${t}`:""}const s1=["top","right","bottom","left"],Ln=Math.min,Ke=Math.max,Xa=Math.round,Ko=Math.floor,Dt=e=>({x:e,y:e}),l1={left:"right",right:"left",bottom:"top",top:"bottom"},c1={start:"end",end:"start"};function Lc(e,t,n){return Ke(e,Ln(t,n))}function en(e,t){return typeof e=="function"?e(t):e}function tn(e){return e.split("-")[0]}function mi(e){return e.split("-")[1]}function Ku(e){return e==="x"?"y":"x"}function Yu(e){return e==="y"?"height":"width"}const u1=new Set(["top","bottom"]);function Rt(e){return u1.has(tn(e))?"y":"x"}function Xu(e){return Ku(Rt(e))}function d1(e,t,n){n===void 0&&(n=!1);const r=mi(e),i=Xu(e),o=Yu(i);let s=i==="x"?r===(n?"end":"start")?"right":"left":r==="start"?"bottom":"top";return t.reference[o]>t.floating[o]&&(s=Ja(s)),[s,Ja(s)]}function h1(e){const t=Ja(e);return[Dc(e),t,Dc(t)]}function Dc(e){return e.replace(/start|end/g,t=>c1[t])}const Gh=["left","right"],Qh=["right","left"],p1=["top","bottom"],m1=["bottom","top"];function g1(e,t,n){switch(e){case"top":case"bottom":return n?t?Qh:Gh:t?Gh:Qh;case"left":case"right":return t?p1:m1;default:return[]}}function f1(e,t,n,r){const i=mi(e);let o=g1(tn(e),n==="start",r);return i&&(o=o.map(s=>s+"-"+i),t&&(o=o.concat(o.map(Dc)))),o}function Ja(e){return e.replace(/left|right|bottom|top/g,t=>l1[t])}function v1(e){return{top:0,right:0,bottom:0,left:0,...e}}function Bf(e){return typeof e!="number"?v1(e):{top:e,right:e,bottom:e,left:e}}function Za(e){const{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function Kh(e,t,n){let{reference:r,floating:i}=e;const o=Rt(t),s=Xu(t),l=Yu(s),c=tn(t),u=o==="y",d=r.x+r.width/2-i.width/2,h=r.y+r.height/2-i.height/2,p=r[l]/2-i[l]/2;let y;switch(c){case"top":y={x:d,y:r.y-i.height};break;case"bottom":y={x:d,y:r.y+r.height};break;case"right":y={x:r.x+r.width,y:h};break;case"left":y={x:r.x-i.width,y:h};break;default:y={x:r.x,y:r.y}}switch(mi(t)){case"start":y[s]-=p*(n&&u?-1:1);break;case"end":y[s]+=p*(n&&u?-1:1);break}return y}const y1=async(e,t,n)=>{const{placement:r="bottom",strategy:i="absolute",middleware:o=[],platform:s}=n,l=o.filter(Boolean),c=await(s.isRTL==null?void 0:s.isRTL(t));let u=await s.getElementRects({reference:e,floating:t,strategy:i}),{x:d,y:h}=Kh(u,r,c),p=r,y={},k=0;for(let v=0;v<l.length;v++){const{name:w,fn:f}=l[v],{x:g,y:x,data:b,reset:C}=await f({x:d,y:h,initialPlacement:r,placement:p,strategy:i,middlewareData:y,rects:u,platform:s,elements:{reference:e,floating:t}});d=g??d,h=x??h,y={...y,[w]:{...y[w],...b}},C&&k<=50&&(k++,typeof C=="object"&&(C.placement&&(p=C.placement),C.rects&&(u=C.rects===!0?await s.getElementRects({reference:e,floating:t,strategy:i}):C.rects),{x:d,y:h}=Kh(u,p,c)),v=-1)}return{x:d,y:h,placement:p,strategy:i,middlewareData:y}};async function co(e,t){var n;t===void 0&&(t={});const{x:r,y:i,platform:o,rects:s,elements:l,strategy:c}=e,{boundary:u="clippingAncestors",rootBoundary:d="viewport",elementContext:h="floating",altBoundary:p=!1,padding:y=0}=en(t,e),k=Bf(y),w=l[p?h==="floating"?"reference":"floating":h],f=Za(await o.getClippingRect({element:(n=await(o.isElement==null?void 0:o.isElement(w)))==null||n?w:w.contextElement||await(o.getDocumentElement==null?void 0:o.getDocumentElement(l.floating)),boundary:u,rootBoundary:d,strategy:c})),g=h==="floating"?{x:r,y:i,width:s.floating.width,height:s.floating.height}:s.reference,x=await(o.getOffsetParent==null?void 0:o.getOffsetParent(l.floating)),b=await(o.isElement==null?void 0:o.isElement(x))?await(o.getScale==null?void 0:o.getScale(x))||{x:1,y:1}:{x:1,y:1},C=Za(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:g,offsetParent:x,strategy:c}):g);return{top:(f.top-C.top+k.top)/b.y,bottom:(C.bottom-f.bottom+k.bottom)/b.y,left:(f.left-C.left+k.left)/b.x,right:(C.right-f.right+k.right)/b.x}}const x1=e=>({name:"arrow",options:e,async fn(t){const{x:n,y:r,placement:i,rects:o,platform:s,elements:l,middlewareData:c}=t,{element:u,padding:d=0}=en(e,t)||{};if(u==null)return{};const h=Bf(d),p={x:n,y:r},y=Xu(i),k=Yu(y),v=await s.getDimensions(u),w=y==="y",f=w?"top":"left",g=w?"bottom":"right",x=w?"clientHeight":"clientWidth",b=o.reference[k]+o.reference[y]-p[y]-o.floating[k],C=p[y]-o.reference[y],T=await(s.getOffsetParent==null?void 0:s.getOffsetParent(u));let N=T?T[x]:0;(!N||!await(s.isElement==null?void 0:s.isElement(T)))&&(N=l.floating[x]||o.floating[k]);const S=b/2-C/2,j=N/2-v[k]/2-1,A=Ln(h[f],j),O=Ln(h[g],j),M=A,$=N-v[k]-O,D=N/2-v[k]/2+S,W=Lc(M,D,$),U=!c.arrow&&mi(i)!=null&&D!==W&&o.reference[k]/2-(D<M?A:O)-v[k]/2<0,G=U?D<M?D-M:D-$:0;return{[y]:p[y]+G,data:{[y]:W,centerOffset:D-W-G,...U&&{alignmentOffset:G}},reset:U}}}),b1=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n,r;const{placement:i,middlewareData:o,rects:s,initialPlacement:l,platform:c,elements:u}=t,{mainAxis:d=!0,crossAxis:h=!0,fallbackPlacements:p,fallbackStrategy:y="bestFit",fallbackAxisSideDirection:k="none",flipAlignment:v=!0,...w}=en(e,t);if((n=o.arrow)!=null&&n.alignmentOffset)return{};const f=tn(i),g=Rt(l),x=tn(l)===l,b=await(c.isRTL==null?void 0:c.isRTL(u.floating)),C=p||(x||!v?[Ja(l)]:h1(l)),T=k!=="none";!p&&T&&C.push(...f1(l,v,k,b));const N=[l,...C],S=await co(t,w),j=[];let A=((r=o.flip)==null?void 0:r.overflows)||[];if(d&&j.push(S[f]),h){const D=d1(i,s,b);j.push(S[D[0]],S[D[1]])}if(A=[...A,{placement:i,overflows:j}],!j.every(D=>D<=0)){var O,M;const D=(((O=o.flip)==null?void 0:O.index)||0)+1,W=N[D];if(W&&(!(h==="alignment"?g!==Rt(W):!1)||A.every(P=>P.overflows[0]>0&&Rt(P.placement)===g)))return{data:{index:D,overflows:A},reset:{placement:W}};let U=(M=A.filter(G=>G.overflows[0]<=0).sort((G,P)=>G.overflows[1]-P.overflows[1])[0])==null?void 0:M.placement;if(!U)switch(y){case"bestFit":{var $;const G=($=A.filter(P=>{if(T){const L=Rt(P.placement);return L===g||L==="y"}return!0}).map(P=>[P.placement,P.overflows.filter(L=>L>0).reduce((L,F)=>L+F,0)]).sort((P,L)=>P[1]-L[1])[0])==null?void 0:$[0];G&&(U=G);break}case"initialPlacement":U=l;break}if(i!==U)return{reset:{placement:U}}}return{}}}};function Yh(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function Xh(e){return s1.some(t=>e[t]>=0)}const w1=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(t){const{rects:n}=t,{strategy:r="referenceHidden",...i}=en(e,t);switch(r){case"referenceHidden":{const o=await co(t,{...i,elementContext:"reference"}),s=Yh(o,n.reference);return{data:{referenceHiddenOffsets:s,referenceHidden:Xh(s)}}}case"escaped":{const o=await co(t,{...i,altBoundary:!0}),s=Yh(o,n.floating);return{data:{escapedOffsets:s,escaped:Xh(s)}}}default:return{}}}}},Uf=new Set(["left","top"]);async function k1(e,t){const{placement:n,platform:r,elements:i}=e,o=await(r.isRTL==null?void 0:r.isRTL(i.floating)),s=tn(n),l=mi(n),c=Rt(n)==="y",u=Uf.has(s)?-1:1,d=o&&c?-1:1,h=en(t,e);let{mainAxis:p,crossAxis:y,alignmentAxis:k}=typeof h=="number"?{mainAxis:h,crossAxis:0,alignmentAxis:null}:{mainAxis:h.mainAxis||0,crossAxis:h.crossAxis||0,alignmentAxis:h.alignmentAxis};return l&&typeof k=="number"&&(y=l==="end"?k*-1:k),c?{x:y*d,y:p*u}:{x:p*u,y:y*d}}const C1=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var n,r;const{x:i,y:o,placement:s,middlewareData:l}=t,c=await k1(t,e);return s===((n=l.offset)==null?void 0:n.placement)&&(r=l.arrow)!=null&&r.alignmentOffset?{}:{x:i+c.x,y:o+c.y,data:{...c,placement:s}}}}},S1=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:r,placement:i}=t,{mainAxis:o=!0,crossAxis:s=!1,limiter:l={fn:w=>{let{x:f,y:g}=w;return{x:f,y:g}}},...c}=en(e,t),u={x:n,y:r},d=await co(t,c),h=Rt(tn(i)),p=Ku(h);let y=u[p],k=u[h];if(o){const w=p==="y"?"top":"left",f=p==="y"?"bottom":"right",g=y+d[w],x=y-d[f];y=Lc(g,y,x)}if(s){const w=h==="y"?"top":"left",f=h==="y"?"bottom":"right",g=k+d[w],x=k-d[f];k=Lc(g,k,x)}const v=l.fn({...t,[p]:y,[h]:k});return{...v,data:{x:v.x-n,y:v.y-r,enabled:{[p]:o,[h]:s}}}}}},T1=function(e){return e===void 0&&(e={}),{options:e,fn(t){const{x:n,y:r,placement:i,rects:o,middlewareData:s}=t,{offset:l=0,mainAxis:c=!0,crossAxis:u=!0}=en(e,t),d={x:n,y:r},h=Rt(i),p=Ku(h);let y=d[p],k=d[h];const v=en(l,t),w=typeof v=="number"?{mainAxis:v,crossAxis:0}:{mainAxis:0,crossAxis:0,...v};if(c){const x=p==="y"?"height":"width",b=o.reference[p]-o.floating[x]+w.mainAxis,C=o.reference[p]+o.reference[x]-w.mainAxis;y<b?y=b:y>C&&(y=C)}if(u){var f,g;const x=p==="y"?"width":"height",b=Uf.has(tn(i)),C=o.reference[h]-o.floating[x]+(b&&((f=s.offset)==null?void 0:f[h])||0)+(b?0:w.crossAxis),T=o.reference[h]+o.reference[x]+(b?0:((g=s.offset)==null?void 0:g[h])||0)-(b?w.crossAxis:0);k<C?k=C:k>T&&(k=T)}return{[p]:y,[h]:k}}}},N1=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){var n,r;const{placement:i,rects:o,platform:s,elements:l}=t,{apply:c=()=>{},...u}=en(e,t),d=await co(t,u),h=tn(i),p=mi(i),y=Rt(i)==="y",{width:k,height:v}=o.floating;let w,f;h==="top"||h==="bottom"?(w=h,f=p===(await(s.isRTL==null?void 0:s.isRTL(l.floating))?"start":"end")?"left":"right"):(f=h,w=p==="end"?"top":"bottom");const g=v-d.top-d.bottom,x=k-d.left-d.right,b=Ln(v-d[w],g),C=Ln(k-d[f],x),T=!t.middlewareData.shift;let N=b,S=C;if((n=t.middlewareData.shift)!=null&&n.enabled.x&&(S=x),(r=t.middlewareData.shift)!=null&&r.enabled.y&&(N=g),T&&!p){const A=Ke(d.left,0),O=Ke(d.right,0),M=Ke(d.top,0),$=Ke(d.bottom,0);y?S=k-2*(A!==0||O!==0?A+O:Ke(d.left,d.right)):N=v-2*(M!==0||$!==0?M+$:Ke(d.top,d.bottom))}await c({...t,availableWidth:S,availableHeight:N});const j=await s.getDimensions(l.floating);return k!==j.width||v!==j.height?{reset:{rects:!0}}:{}}}};function ks(){return typeof window<"u"}function gi(e){return Hf(e)?(e.nodeName||"").toLowerCase():"#document"}function Je(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function qt(e){var t;return(t=(Hf(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Hf(e){return ks()?e instanceof Node||e instanceof Je(e).Node:!1}function kt(e){return ks()?e instanceof Element||e instanceof Je(e).Element:!1}function _t(e){return ks()?e instanceof HTMLElement||e instanceof Je(e).HTMLElement:!1}function Jh(e){return!ks()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof Je(e).ShadowRoot}const P1=new Set(["inline","contents"]);function No(e){const{overflow:t,overflowX:n,overflowY:r,display:i}=Ct(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!P1.has(i)}const j1=new Set(["table","td","th"]);function E1(e){return j1.has(gi(e))}const A1=[":popover-open",":modal"];function Cs(e){return A1.some(t=>{try{return e.matches(t)}catch{return!1}})}const I1=["transform","translate","scale","rotate","perspective"],R1=["transform","translate","scale","rotate","perspective","filter"],M1=["paint","layout","strict","content"];function Ju(e){const t=Zu(),n=kt(e)?Ct(e):e;return I1.some(r=>n[r]?n[r]!=="none":!1)||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||R1.some(r=>(n.willChange||"").includes(r))||M1.some(r=>(n.contain||"").includes(r))}function L1(e){let t=Dn(e);for(;_t(t)&&!ri(t);){if(Ju(t))return t;if(Cs(t))return null;t=Dn(t)}return null}function Zu(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const D1=new Set(["html","body","#document"]);function ri(e){return D1.has(gi(e))}function Ct(e){return Je(e).getComputedStyle(e)}function Ss(e){return kt(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Dn(e){if(gi(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Jh(e)&&e.host||qt(e);return Jh(t)?t.host:t}function $f(e){const t=Dn(e);return ri(t)?e.ownerDocument?e.ownerDocument.body:e.body:_t(t)&&No(t)?t:$f(t)}function uo(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const i=$f(e),o=i===((r=e.ownerDocument)==null?void 0:r.body),s=Je(i);if(o){const l=Oc(s);return t.concat(s,s.visualViewport||[],No(i)?i:[],l&&n?uo(l):[])}return t.concat(i,uo(i,[],n))}function Oc(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Wf(e){const t=Ct(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const i=_t(e),o=i?e.offsetWidth:n,s=i?e.offsetHeight:r,l=Xa(n)!==o||Xa(r)!==s;return l&&(n=o,r=s),{width:n,height:r,$:l}}function ed(e){return kt(e)?e:e.contextElement}function zr(e){const t=ed(e);if(!_t(t))return Dt(1);const n=t.getBoundingClientRect(),{width:r,height:i,$:o}=Wf(t);let s=(o?Xa(n.width):n.width)/r,l=(o?Xa(n.height):n.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!l||!Number.isFinite(l))&&(l=1),{x:s,y:l}}const O1=Dt(0);function Gf(e){const t=Je(e);return!Zu()||!t.visualViewport?O1:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function _1(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==Je(e)?!1:t}function ur(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const i=e.getBoundingClientRect(),o=ed(e);let s=Dt(1);t&&(r?kt(r)&&(s=zr(r)):s=zr(e));const l=_1(o,n,r)?Gf(o):Dt(0);let c=(i.left+l.x)/s.x,u=(i.top+l.y)/s.y,d=i.width/s.x,h=i.height/s.y;if(o){const p=Je(o),y=r&&kt(r)?Je(r):r;let k=p,v=Oc(k);for(;v&&r&&y!==k;){const w=zr(v),f=v.getBoundingClientRect(),g=Ct(v),x=f.left+(v.clientLeft+parseFloat(g.paddingLeft))*w.x,b=f.top+(v.clientTop+parseFloat(g.paddingTop))*w.y;c*=w.x,u*=w.y,d*=w.x,h*=w.y,c+=x,u+=b,k=Je(v),v=Oc(k)}}return Za({width:d,height:h,x:c,y:u})}function td(e,t){const n=Ss(e).scrollLeft;return t?t.left+n:ur(qt(e)).left+n}function Qf(e,t,n){n===void 0&&(n=!1);const r=e.getBoundingClientRect(),i=r.left+t.scrollLeft-(n?0:td(e,r)),o=r.top+t.scrollTop;return{x:i,y:o}}function q1(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e;const o=i==="fixed",s=qt(r),l=t?Cs(t.floating):!1;if(r===s||l&&o)return n;let c={scrollLeft:0,scrollTop:0},u=Dt(1);const d=Dt(0),h=_t(r);if((h||!h&&!o)&&((gi(r)!=="body"||No(s))&&(c=Ss(r)),_t(r))){const y=ur(r);u=zr(r),d.x=y.x+r.clientLeft,d.y=y.y+r.clientTop}const p=s&&!h&&!o?Qf(s,c,!0):Dt(0);return{width:n.width*u.x,height:n.height*u.y,x:n.x*u.x-c.scrollLeft*u.x+d.x+p.x,y:n.y*u.y-c.scrollTop*u.y+d.y+p.y}}function F1(e){return Array.from(e.getClientRects())}function z1(e){const t=qt(e),n=Ss(e),r=e.ownerDocument.body,i=Ke(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),o=Ke(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let s=-n.scrollLeft+td(e);const l=-n.scrollTop;return Ct(r).direction==="rtl"&&(s+=Ke(t.clientWidth,r.clientWidth)-i),{width:i,height:o,x:s,y:l}}function V1(e,t){const n=Je(e),r=qt(e),i=n.visualViewport;let o=r.clientWidth,s=r.clientHeight,l=0,c=0;if(i){o=i.width,s=i.height;const u=Zu();(!u||u&&t==="fixed")&&(l=i.offsetLeft,c=i.offsetTop)}return{width:o,height:s,x:l,y:c}}const B1=new Set(["absolute","fixed"]);function U1(e,t){const n=ur(e,!0,t==="fixed"),r=n.top+e.clientTop,i=n.left+e.clientLeft,o=_t(e)?zr(e):Dt(1),s=e.clientWidth*o.x,l=e.clientHeight*o.y,c=i*o.x,u=r*o.y;return{width:s,height:l,x:c,y:u}}function Zh(e,t,n){let r;if(t==="viewport")r=V1(e,n);else if(t==="document")r=z1(qt(e));else if(kt(t))r=U1(t,n);else{const i=Gf(e);r={x:t.x-i.x,y:t.y-i.y,width:t.width,height:t.height}}return Za(r)}function Kf(e,t){const n=Dn(e);return n===t||!kt(n)||ri(n)?!1:Ct(n).position==="fixed"||Kf(n,t)}function H1(e,t){const n=t.get(e);if(n)return n;let r=uo(e,[],!1).filter(l=>kt(l)&&gi(l)!=="body"),i=null;const o=Ct(e).position==="fixed";let s=o?Dn(e):e;for(;kt(s)&&!ri(s);){const l=Ct(s),c=Ju(s);!c&&l.position==="fixed"&&(i=null),(o?!c&&!i:!c&&l.position==="static"&&!!i&&B1.has(i.position)||No(s)&&!c&&Kf(e,s))?r=r.filter(d=>d!==s):i=l,s=Dn(s)}return t.set(e,r),r}function $1(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e;const s=[...n==="clippingAncestors"?Cs(t)?[]:H1(t,this._c):[].concat(n),r],l=s[0],c=s.reduce((u,d)=>{const h=Zh(t,d,i);return u.top=Ke(h.top,u.top),u.right=Ln(h.right,u.right),u.bottom=Ln(h.bottom,u.bottom),u.left=Ke(h.left,u.left),u},Zh(t,l,i));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function W1(e){const{width:t,height:n}=Wf(e);return{width:t,height:n}}function G1(e,t,n){const r=_t(t),i=qt(t),o=n==="fixed",s=ur(e,!0,o,t);let l={scrollLeft:0,scrollTop:0};const c=Dt(0);function u(){c.x=td(i)}if(r||!r&&!o)if((gi(t)!=="body"||No(i))&&(l=Ss(t)),r){const y=ur(t,!0,o,t);c.x=y.x+t.clientLeft,c.y=y.y+t.clientTop}else i&&u();o&&!r&&i&&u();const d=i&&!r&&!o?Qf(i,l):Dt(0),h=s.left+l.scrollLeft-c.x-d.x,p=s.top+l.scrollTop-c.y-d.y;return{x:h,y:p,width:s.width,height:s.height}}function gl(e){return Ct(e).position==="static"}function ep(e,t){if(!_t(e)||Ct(e).position==="fixed")return null;if(t)return t(e);let n=e.offsetParent;return qt(e)===n&&(n=n.ownerDocument.body),n}function Yf(e,t){const n=Je(e);if(Cs(e))return n;if(!_t(e)){let i=Dn(e);for(;i&&!ri(i);){if(kt(i)&&!gl(i))return i;i=Dn(i)}return n}let r=ep(e,t);for(;r&&E1(r)&&gl(r);)r=ep(r,t);return r&&ri(r)&&gl(r)&&!Ju(r)?n:r||L1(e)||n}const Q1=async function(e){const t=this.getOffsetParent||Yf,n=this.getDimensions,r=await n(e.floating);return{reference:G1(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function K1(e){return Ct(e).direction==="rtl"}const Y1={convertOffsetParentRelativeRectToViewportRelativeRect:q1,getDocumentElement:qt,getClippingRect:$1,getOffsetParent:Yf,getElementRects:Q1,getClientRects:F1,getDimensions:W1,getScale:zr,isElement:kt,isRTL:K1};function Xf(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function X1(e,t){let n=null,r;const i=qt(e);function o(){var l;clearTimeout(r),(l=n)==null||l.disconnect(),n=null}function s(l,c){l===void 0&&(l=!1),c===void 0&&(c=1),o();const u=e.getBoundingClientRect(),{left:d,top:h,width:p,height:y}=u;if(l||t(),!p||!y)return;const k=Ko(h),v=Ko(i.clientWidth-(d+p)),w=Ko(i.clientHeight-(h+y)),f=Ko(d),x={rootMargin:-k+"px "+-v+"px "+-w+"px "+-f+"px",threshold:Ke(0,Ln(1,c))||1};let b=!0;function C(T){const N=T[0].intersectionRatio;if(N!==c){if(!b)return s();N?s(!1,N):r=setTimeout(()=>{s(!1,1e-7)},1e3)}N===1&&!Xf(u,e.getBoundingClientRect())&&s(),b=!1}try{n=new IntersectionObserver(C,{...x,root:i.ownerDocument})}catch{n=new IntersectionObserver(C,x)}n.observe(e)}return s(!0),o}function J1(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:o=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:c=!1}=r,u=ed(e),d=i||o?[...u?uo(u):[],...uo(t)]:[];d.forEach(f=>{i&&f.addEventListener("scroll",n,{passive:!0}),o&&f.addEventListener("resize",n)});const h=u&&l?X1(u,n):null;let p=-1,y=null;s&&(y=new ResizeObserver(f=>{let[g]=f;g&&g.target===u&&y&&(y.unobserve(t),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{var x;(x=y)==null||x.observe(t)})),n()}),u&&!c&&y.observe(u),y.observe(t));let k,v=c?ur(e):null;c&&w();function w(){const f=ur(e);v&&!Xf(v,f)&&n(),v=f,k=requestAnimationFrame(w)}return n(),()=>{var f;d.forEach(g=>{i&&g.removeEventListener("scroll",n),o&&g.removeEventListener("resize",n)}),h==null||h(),(f=y)==null||f.disconnect(),y=null,c&&cancelAnimationFrame(k)}}const Z1=C1,eC=S1,tC=b1,nC=N1,rC=w1,tp=x1,iC=T1,oC=(e,t,n)=>{const r=new Map,i={platform:Y1,...n},o={...i.platform,_c:r};return y1(e,t,{...i,platform:o})};var aC=typeof document<"u",sC=function(){},fa=aC?m.useLayoutEffect:sC;function es(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let n,r,i;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(n=e.length,n!==t.length)return!1;for(r=n;r--!==0;)if(!es(e[r],t[r]))return!1;return!0}if(i=Object.keys(e),n=i.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!{}.hasOwnProperty.call(t,i[r]))return!1;for(r=n;r--!==0;){const o=i[r];if(!(o==="_owner"&&e.$$typeof)&&!es(e[o],t[o]))return!1}return!0}return e!==e&&t!==t}function Jf(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function np(e,t){const n=Jf(e);return Math.round(t*n)/n}function fl(e){const t=m.useRef(e);return fa(()=>{t.current=e}),t}function lC(e){e===void 0&&(e={});const{placement:t="bottom",strategy:n="absolute",middleware:r=[],platform:i,elements:{reference:o,floating:s}={},transform:l=!0,whileElementsMounted:c,open:u}=e,[d,h]=m.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[p,y]=m.useState(r);es(p,r)||y(r);const[k,v]=m.useState(null),[w,f]=m.useState(null),g=m.useCallback(P=>{P!==T.current&&(T.current=P,v(P))},[]),x=m.useCallback(P=>{P!==N.current&&(N.current=P,f(P))},[]),b=o||k,C=s||w,T=m.useRef(null),N=m.useRef(null),S=m.useRef(d),j=c!=null,A=fl(c),O=fl(i),M=fl(u),$=m.useCallback(()=>{if(!T.current||!N.current)return;const P={placement:t,strategy:n,middleware:p};O.current&&(P.platform=O.current),oC(T.current,N.current,P).then(L=>{const F={...L,isPositioned:M.current!==!1};D.current&&!es(S.current,F)&&(S.current=F,wo.flushSync(()=>{h(F)}))})},[p,t,n,O,M]);fa(()=>{u===!1&&S.current.isPositioned&&(S.current.isPositioned=!1,h(P=>({...P,isPositioned:!1})))},[u]);const D=m.useRef(!1);fa(()=>(D.current=!0,()=>{D.current=!1}),[]),fa(()=>{if(b&&(T.current=b),C&&(N.current=C),b&&C){if(A.current)return A.current(b,C,$);$()}},[b,C,$,A,j]);const W=m.useMemo(()=>({reference:T,floating:N,setReference:g,setFloating:x}),[g,x]),U=m.useMemo(()=>({reference:b,floating:C}),[b,C]),G=m.useMemo(()=>{const P={position:n,left:0,top:0};if(!U.floating)return P;const L=np(U.floating,d.x),F=np(U.floating,d.y);return l?{...P,transform:"translate("+L+"px, "+F+"px)",...Jf(U.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:L,top:F}},[n,l,U.floating,d.x,d.y]);return m.useMemo(()=>({...d,update:$,refs:W,elements:U,floatingStyles:G}),[d,$,W,U,G])}const cC=e=>{function t(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:e,fn(n){const{element:r,padding:i}=typeof e=="function"?e(n):e;return r&&t(r)?r.current!=null?tp({element:r.current,padding:i}).fn(n):{}:r?tp({element:r,padding:i}).fn(n):{}}}},uC=(e,t)=>({...Z1(e),options:[e,t]}),dC=(e,t)=>({...eC(e),options:[e,t]}),hC=(e,t)=>({...iC(e),options:[e,t]}),pC=(e,t)=>({...tC(e),options:[e,t]}),mC=(e,t)=>({...nC(e),options:[e,t]}),gC=(e,t)=>({...rC(e),options:[e,t]}),fC=(e,t)=>({...cC(e),options:[e,t]});var vC="Arrow",Zf=m.forwardRef((e,t)=>{const{children:n,width:r=10,height:i=5,...o}=e;return a.jsx(Ne.svg,{...o,ref:t,width:r,height:i,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:e.asChild?n:a.jsx("polygon",{points:"0,0 30,0 15,10"})})});Zf.displayName=vC;var yC=Zf;function xC(e){const[t,n]=m.useState(void 0);return Zt(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const r=new ResizeObserver(i=>{if(!Array.isArray(i)||!i.length)return;const o=i[0];let s,l;if("borderBoxSize"in o){const c=o.borderBoxSize,u=Array.isArray(c)?c[0]:c;s=u.inlineSize,l=u.blockSize}else s=e.offsetWidth,l=e.offsetHeight;n({width:s,height:l})});return r.observe(e,{box:"border-box"}),()=>r.unobserve(e)}else n(void 0)},[e]),t}var nd="Popper",[ev,Ts]=Co(nd),[bC,tv]=ev(nd),nv=e=>{const{__scopePopper:t,children:n}=e,[r,i]=m.useState(null);return a.jsx(bC,{scope:t,anchor:r,onAnchorChange:i,children:n})};nv.displayName=nd;var rv="PopperAnchor",iv=m.forwardRef((e,t)=>{const{__scopePopper:n,virtualRef:r,...i}=e,o=tv(rv,n),s=m.useRef(null),l=$e(t,s);return m.useEffect(()=>{o.onAnchorChange((r==null?void 0:r.current)||s.current)}),r?null:a.jsx(Ne.div,{...i,ref:l})});iv.displayName=rv;var rd="PopperContent",[wC,kC]=ev(rd),ov=m.forwardRef((e,t)=>{var Ft,jo,Bn,fi,I,q;const{__scopePopper:n,side:r="bottom",sideOffset:i=0,align:o="center",alignOffset:s=0,arrowPadding:l=0,avoidCollisions:c=!0,collisionBoundary:u=[],collisionPadding:d=0,sticky:h="partial",hideWhenDetached:p=!1,updatePositionStrategy:y="optimized",onPlaced:k,...v}=e,w=tv(rd,n),[f,g]=m.useState(null),x=$e(t,Q=>g(Q)),[b,C]=m.useState(null),T=xC(b),N=(T==null?void 0:T.width)??0,S=(T==null?void 0:T.height)??0,j=r+(o!=="center"?"-"+o:""),A=typeof d=="number"?d:{top:0,right:0,bottom:0,left:0,...d},O=Array.isArray(u)?u:[u],M=O.length>0,$={padding:A,boundary:O.filter(SC),altBoundary:M},{refs:D,floatingStyles:W,placement:U,isPositioned:G,middlewareData:P}=lC({strategy:"fixed",placement:j,whileElementsMounted:(...Q)=>J1(...Q,{animationFrame:y==="always"}),elements:{reference:w.anchor},middleware:[uC({mainAxis:i+S,alignmentAxis:s}),c&&dC({mainAxis:!0,crossAxis:!1,limiter:h==="partial"?hC():void 0,...$}),c&&pC({...$}),mC({...$,apply:({elements:Q,rects:pe,availableWidth:dt,availableHeight:Ds})=>{const{width:cy,height:uy}=pe.reference,Eo=Q.floating.style;Eo.setProperty("--radix-popper-available-width",`${dt}px`),Eo.setProperty("--radix-popper-available-height",`${Ds}px`),Eo.setProperty("--radix-popper-anchor-width",`${cy}px`),Eo.setProperty("--radix-popper-anchor-height",`${uy}px`)}}),b&&fC({element:b,padding:l}),TC({arrowWidth:N,arrowHeight:S}),p&&gC({strategy:"referenceHidden",...$})]}),[L,F]=lv(U),H=Ot(k);Zt(()=>{G&&(H==null||H())},[G,H]);const Z=(Ft=P.arrow)==null?void 0:Ft.x,We=(jo=P.arrow)==null?void 0:jo.y,Le=((Bn=P.arrow)==null?void 0:Bn.centerOffset)!==0,[rn,Ge]=m.useState();return Zt(()=>{f&&Ge(window.getComputedStyle(f).zIndex)},[f]),a.jsx("div",{ref:D.setFloating,"data-radix-popper-content-wrapper":"",style:{...W,transform:G?W.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:rn,"--radix-popper-transform-origin":[(fi=P.transformOrigin)==null?void 0:fi.x,(I=P.transformOrigin)==null?void 0:I.y].join(" "),...((q=P.hide)==null?void 0:q.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:e.dir,children:a.jsx(wC,{scope:n,placedSide:L,onArrowChange:C,arrowX:Z,arrowY:We,shouldHideArrow:Le,children:a.jsx(Ne.div,{"data-side":L,"data-align":F,...v,ref:x,style:{...v.style,animation:G?void 0:"none"}})})})});ov.displayName=rd;var av="PopperArrow",CC={top:"bottom",right:"left",bottom:"top",left:"right"},sv=m.forwardRef(function(t,n){const{__scopePopper:r,...i}=t,o=kC(av,r),s=CC[o.placedSide];return a.jsx("span",{ref:o.onArrowChange,style:{position:"absolute",left:o.arrowX,top:o.arrowY,[s]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[o.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[o.placedSide],visibility:o.shouldHideArrow?"hidden":void 0},children:a.jsx(yC,{...i,ref:n,style:{...i.style,display:"block"}})})});sv.displayName=av;function SC(e){return e!==null}var TC=e=>({name:"transformOrigin",options:e,fn(t){var w,f,g;const{placement:n,rects:r,middlewareData:i}=t,s=((w=i.arrow)==null?void 0:w.centerOffset)!==0,l=s?0:e.arrowWidth,c=s?0:e.arrowHeight,[u,d]=lv(n),h={start:"0%",center:"50%",end:"100%"}[d],p=(((f=i.arrow)==null?void 0:f.x)??0)+l/2,y=(((g=i.arrow)==null?void 0:g.y)??0)+c/2;let k="",v="";return u==="bottom"?(k=s?h:`${p}px`,v=`${-c}px`):u==="top"?(k=s?h:`${p}px`,v=`${r.floating.height+c}px`):u==="right"?(k=`${-c}px`,v=s?h:`${y}px`):u==="left"&&(k=`${r.floating.width+c}px`,v=s?h:`${y}px`),{data:{x:k,y:v}}}});function lv(e){const[t,n="center"]=e.split("-");return[t,n]}var cv=nv,id=iv,uv=ov,dv=sv,[Ns,EN]=Co("Tooltip",[Ts]),Ps=Ts(),hv="TooltipProvider",NC=700,_c="tooltip.open",[PC,od]=Ns(hv),pv=e=>{const{__scopeTooltip:t,delayDuration:n=NC,skipDelayDuration:r=300,disableHoverableContent:i=!1,children:o}=e,s=m.useRef(!0),l=m.useRef(!1),c=m.useRef(0);return m.useEffect(()=>{const u=c.current;return()=>window.clearTimeout(u)},[]),a.jsx(PC,{scope:t,isOpenDelayedRef:s,delayDuration:n,onOpen:m.useCallback(()=>{window.clearTimeout(c.current),s.current=!1},[]),onClose:m.useCallback(()=>{window.clearTimeout(c.current),c.current=window.setTimeout(()=>s.current=!0,r)},[r]),isPointerInTransitRef:l,onPointerInTransitChange:m.useCallback(u=>{l.current=u},[]),disableHoverableContent:i,children:o})};pv.displayName=hv;var ho="Tooltip",[jC,js]=Ns(ho),mv=e=>{const{__scopeTooltip:t,children:n,open:r,defaultOpen:i,onOpenChange:o,disableHoverableContent:s,delayDuration:l}=e,c=od(ho,e.__scopeTooltip),u=Ps(t),[d,h]=m.useState(null),p=Vf(),y=m.useRef(0),k=s??c.disableHoverableContent,v=l??c.delayDuration,w=m.useRef(!1),[f,g]=Bu({prop:r,defaultProp:i??!1,onChange:N=>{N?(c.onOpen(),document.dispatchEvent(new CustomEvent(_c))):c.onClose(),o==null||o(N)},caller:ho}),x=m.useMemo(()=>f?w.current?"delayed-open":"instant-open":"closed",[f]),b=m.useCallback(()=>{window.clearTimeout(y.current),y.current=0,w.current=!1,g(!0)},[g]),C=m.useCallback(()=>{window.clearTimeout(y.current),y.current=0,g(!1)},[g]),T=m.useCallback(()=>{window.clearTimeout(y.current),y.current=window.setTimeout(()=>{w.current=!0,g(!0),y.current=0},v)},[v,g]);return m.useEffect(()=>()=>{y.current&&(window.clearTimeout(y.current),y.current=0)},[]),a.jsx(cv,{...u,children:a.jsx(jC,{scope:t,contentId:p,open:f,stateAttribute:x,trigger:d,onTriggerChange:h,onTriggerEnter:m.useCallback(()=>{c.isOpenDelayedRef.current?T():b()},[c.isOpenDelayedRef,T,b]),onTriggerLeave:m.useCallback(()=>{k?C():(window.clearTimeout(y.current),y.current=0)},[C,k]),onOpen:b,onClose:C,disableHoverableContent:k,children:n})})};mv.displayName=ho;var qc="TooltipTrigger",gv=m.forwardRef((e,t)=>{const{__scopeTooltip:n,...r}=e,i=js(qc,n),o=od(qc,n),s=Ps(n),l=m.useRef(null),c=$e(t,l,i.onTriggerChange),u=m.useRef(!1),d=m.useRef(!1),h=m.useCallback(()=>u.current=!1,[]);return m.useEffect(()=>()=>document.removeEventListener("pointerup",h),[h]),a.jsx(id,{asChild:!0,...s,children:a.jsx(Ne.button,{"aria-describedby":i.open?i.contentId:void 0,"data-state":i.stateAttribute,...r,ref:c,onPointerMove:oe(e.onPointerMove,p=>{p.pointerType!=="touch"&&!d.current&&!o.isPointerInTransitRef.current&&(i.onTriggerEnter(),d.current=!0)}),onPointerLeave:oe(e.onPointerLeave,()=>{i.onTriggerLeave(),d.current=!1}),onPointerDown:oe(e.onPointerDown,()=>{i.open&&i.onClose(),u.current=!0,document.addEventListener("pointerup",h,{once:!0})}),onFocus:oe(e.onFocus,()=>{u.current||i.onOpen()}),onBlur:oe(e.onBlur,i.onClose),onClick:oe(e.onClick,i.onClose)})})});gv.displayName=qc;var EC="TooltipPortal",[AN,AC]=Ns(EC,{forceMount:void 0}),ii="TooltipContent",fv=m.forwardRef((e,t)=>{const n=AC(ii,e.__scopeTooltip),{forceMount:r=n.forceMount,side:i="top",...o}=e,s=js(ii,e.__scopeTooltip);return a.jsx(So,{present:r||s.open,children:s.disableHoverableContent?a.jsx(vv,{side:i,...o,ref:t}):a.jsx(IC,{side:i,...o,ref:t})})}),IC=m.forwardRef((e,t)=>{const n=js(ii,e.__scopeTooltip),r=od(ii,e.__scopeTooltip),i=m.useRef(null),o=$e(t,i),[s,l]=m.useState(null),{trigger:c,onClose:u}=n,d=i.current,{onPointerInTransitChange:h}=r,p=m.useCallback(()=>{l(null),h(!1)},[h]),y=m.useCallback((k,v)=>{const w=k.currentTarget,f={x:k.clientX,y:k.clientY},g=OC(f,w.getBoundingClientRect()),x=_C(f,g),b=qC(v.getBoundingClientRect()),C=zC([...x,...b]);l(C),h(!0)},[h]);return m.useEffect(()=>()=>p(),[p]),m.useEffect(()=>{if(c&&d){const k=w=>y(w,d),v=w=>y(w,c);return c.addEventListener("pointerleave",k),d.addEventListener("pointerleave",v),()=>{c.removeEventListener("pointerleave",k),d.removeEventListener("pointerleave",v)}}},[c,d,y,p]),m.useEffect(()=>{if(s){const k=v=>{const w=v.target,f={x:v.clientX,y:v.clientY},g=(c==null?void 0:c.contains(w))||(d==null?void 0:d.contains(w)),x=!FC(f,s);g?p():x&&(p(),u())};return document.addEventListener("pointermove",k),()=>document.removeEventListener("pointermove",k)}},[c,d,s,u,p]),a.jsx(vv,{...e,ref:o})}),[RC,MC]=Ns(ho,{isInside:!1}),LC=Kw("TooltipContent"),vv=m.forwardRef((e,t)=>{const{__scopeTooltip:n,children:r,"aria-label":i,onEscapeKeyDown:o,onPointerDownOutside:s,...l}=e,c=js(ii,n),u=Ps(n),{onClose:d}=c;return m.useEffect(()=>(document.addEventListener(_c,d),()=>document.removeEventListener(_c,d)),[d]),m.useEffect(()=>{if(c.trigger){const h=p=>{const y=p.target;y!=null&&y.contains(c.trigger)&&d()};return window.addEventListener("scroll",h,{capture:!0}),()=>window.removeEventListener("scroll",h,{capture:!0})}},[c.trigger,d]),a.jsx(xs,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:o,onPointerDownOutside:s,onFocusOutside:h=>h.preventDefault(),onDismiss:d,children:a.jsxs(uv,{"data-state":c.stateAttribute,...u,...l,ref:t,style:{...l.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[a.jsx(LC,{children:r}),a.jsx(RC,{scope:n,isInside:!0,children:a.jsx(x0,{id:c.contentId,role:"tooltip",children:i||r})})]})})});fv.displayName=ii;var yv="TooltipArrow",DC=m.forwardRef((e,t)=>{const{__scopeTooltip:n,...r}=e,i=Ps(n);return MC(yv,n).isInside?null:a.jsx(dv,{...i,...r,ref:t})});DC.displayName=yv;function OC(e,t){const n=Math.abs(t.top-e.y),r=Math.abs(t.bottom-e.y),i=Math.abs(t.right-e.x),o=Math.abs(t.left-e.x);switch(Math.min(n,r,i,o)){case o:return"left";case i:return"right";case n:return"top";case r:return"bottom";default:throw new Error("unreachable")}}function _C(e,t,n=5){const r=[];switch(t){case"top":r.push({x:e.x-n,y:e.y+n},{x:e.x+n,y:e.y+n});break;case"bottom":r.push({x:e.x-n,y:e.y-n},{x:e.x+n,y:e.y-n});break;case"left":r.push({x:e.x+n,y:e.y-n},{x:e.x+n,y:e.y+n});break;case"right":r.push({x:e.x-n,y:e.y-n},{x:e.x-n,y:e.y+n});break}return r}function qC(e){const{top:t,right:n,bottom:r,left:i}=e;return[{x:i,y:t},{x:n,y:t},{x:n,y:r},{x:i,y:r}]}function FC(e,t){const{x:n,y:r}=e;let i=!1;for(let o=0,s=t.length-1;o<t.length;s=o++){const l=t[o],c=t[s],u=l.x,d=l.y,h=c.x,p=c.y;d>r!=p>r&&n<(h-u)*(r-d)/(p-d)+u&&(i=!i)}return i}function zC(e){const t=e.slice();return t.sort((n,r)=>n.x<r.x?-1:n.x>r.x?1:n.y<r.y?-1:n.y>r.y?1:0),VC(t)}function VC(e){if(e.length<=1)return e.slice();const t=[];for(let r=0;r<e.length;r++){const i=e[r];for(;t.length>=2;){const o=t[t.length-1],s=t[t.length-2];if((o.x-s.x)*(i.y-s.y)>=(o.y-s.y)*(i.x-s.x))t.pop();else break}t.push(i)}t.pop();const n=[];for(let r=e.length-1;r>=0;r--){const i=e[r];for(;n.length>=2;){const o=n[n.length-1],s=n[n.length-2];if((o.x-s.x)*(i.y-s.y)>=(o.y-s.y)*(i.x-s.x))n.pop();else break}n.push(i)}return n.pop(),t.length===1&&n.length===1&&t[0].x===n[0].x&&t[0].y===n[0].y?t:t.concat(n)}var BC=pv,UC=mv,HC=gv,xv=fv;const $C=BC,bv=UC,wv=HC,ad=m.forwardRef(({className:e,sideOffset:t=4,...n},r)=>a.jsx(xv,{ref:r,sideOffset:t,className:ut("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...n}));ad.displayName=xv.displayName;var Es=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){return this.listeners.add(e),this.onSubscribe(),()=>{this.listeners.delete(e),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},As=typeof window>"u"||"Deno"in globalThis;function mt(){}function WC(e,t){return typeof e=="function"?e(t):e}function GC(e){return typeof e=="number"&&e>=0&&e!==1/0}function QC(e,t){return Math.max(e+(t||0)-Date.now(),0)}function Fc(e,t){return typeof e=="function"?e(t):e}function KC(e,t){return typeof e=="function"?e(t):e}function rp(e,t){const{type:n="all",exact:r,fetchStatus:i,predicate:o,queryKey:s,stale:l}=e;if(s){if(r){if(t.queryHash!==sd(s,t.options))return!1}else if(!mo(t.queryKey,s))return!1}if(n!=="all"){const c=t.isActive();if(n==="active"&&!c||n==="inactive"&&c)return!1}return!(typeof l=="boolean"&&t.isStale()!==l||i&&i!==t.state.fetchStatus||o&&!o(t))}function ip(e,t){const{exact:n,status:r,predicate:i,mutationKey:o}=e;if(o){if(!t.options.mutationKey)return!1;if(n){if(po(t.options.mutationKey)!==po(o))return!1}else if(!mo(t.options.mutationKey,o))return!1}return!(r&&t.state.status!==r||i&&!i(t))}function sd(e,t){return((t==null?void 0:t.queryKeyHashFn)||po)(e)}function po(e){return JSON.stringify(e,(t,n)=>zc(n)?Object.keys(n).sort().reduce((r,i)=>(r[i]=n[i],r),{}):n)}function mo(e,t){return e===t?!0:typeof e!=typeof t?!1:e&&t&&typeof e=="object"&&typeof t=="object"?Object.keys(t).every(n=>mo(e[n],t[n])):!1}function kv(e,t){if(e===t)return e;const n=op(e)&&op(t);if(n||zc(e)&&zc(t)){const r=n?e:Object.keys(e),i=r.length,o=n?t:Object.keys(t),s=o.length,l=n?[]:{},c=new Set(r);let u=0;for(let d=0;d<s;d++){const h=n?d:o[d];(!n&&c.has(h)||n)&&e[h]===void 0&&t[h]===void 0?(l[h]=void 0,u++):(l[h]=kv(e[h],t[h]),l[h]===e[h]&&e[h]!==void 0&&u++)}return i===s&&u===i?e:l}return t}function op(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function zc(e){if(!ap(e))return!1;const t=e.constructor;if(t===void 0)return!0;const n=t.prototype;return!(!ap(n)||!n.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(e)!==Object.prototype)}function ap(e){return Object.prototype.toString.call(e)==="[object Object]"}function YC(e){return new Promise(t=>{setTimeout(t,e)})}function XC(e,t,n){return typeof n.structuralSharing=="function"?n.structuralSharing(e,t):n.structuralSharing!==!1?kv(e,t):t}function JC(e,t,n=0){const r=[...e,t];return n&&r.length>n?r.slice(1):r}function ZC(e,t,n=0){const r=[t,...e];return n&&r.length>n?r.slice(0,-1):r}var ld=Symbol();function Cv(e,t){return!e.queryFn&&(t!=null&&t.initialPromise)?()=>t.initialPromise:!e.queryFn||e.queryFn===ld?()=>Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)):e.queryFn}var Yn,mn,Br,Ip,eS=(Ip=class extends Es{constructor(){super();Y(this,Yn);Y(this,mn);Y(this,Br);V(this,Br,t=>{if(!As&&window.addEventListener){const n=()=>t();return window.addEventListener("visibilitychange",n,!1),()=>{window.removeEventListener("visibilitychange",n)}}})}onSubscribe(){E(this,mn)||this.setEventListener(E(this,Br))}onUnsubscribe(){var t;this.hasListeners()||((t=E(this,mn))==null||t.call(this),V(this,mn,void 0))}setEventListener(t){var n;V(this,Br,t),(n=E(this,mn))==null||n.call(this),V(this,mn,t(r=>{typeof r=="boolean"?this.setFocused(r):this.onFocus()}))}setFocused(t){E(this,Yn)!==t&&(V(this,Yn,t),this.onFocus())}onFocus(){const t=this.isFocused();this.listeners.forEach(n=>{n(t)})}isFocused(){var t;return typeof E(this,Yn)=="boolean"?E(this,Yn):((t=globalThis.document)==null?void 0:t.visibilityState)!=="hidden"}},Yn=new WeakMap,mn=new WeakMap,Br=new WeakMap,Ip),Sv=new eS,Ur,gn,Hr,Rp,tS=(Rp=class extends Es{constructor(){super();Y(this,Ur,!0);Y(this,gn);Y(this,Hr);V(this,Hr,t=>{if(!As&&window.addEventListener){const n=()=>t(!0),r=()=>t(!1);return window.addEventListener("online",n,!1),window.addEventListener("offline",r,!1),()=>{window.removeEventListener("online",n),window.removeEventListener("offline",r)}}})}onSubscribe(){E(this,gn)||this.setEventListener(E(this,Hr))}onUnsubscribe(){var t;this.hasListeners()||((t=E(this,gn))==null||t.call(this),V(this,gn,void 0))}setEventListener(t){var n;V(this,Hr,t),(n=E(this,gn))==null||n.call(this),V(this,gn,t(this.setOnline.bind(this)))}setOnline(t){E(this,Ur)!==t&&(V(this,Ur,t),this.listeners.forEach(r=>{r(t)}))}isOnline(){return E(this,Ur)}},Ur=new WeakMap,gn=new WeakMap,Hr=new WeakMap,Rp),ts=new tS;function nS(){let e,t;const n=new Promise((i,o)=>{e=i,t=o});n.status="pending",n.catch(()=>{});function r(i){Object.assign(n,i),delete n.resolve,delete n.reject}return n.resolve=i=>{r({status:"fulfilled",value:i}),e(i)},n.reject=i=>{r({status:"rejected",reason:i}),t(i)},n}function rS(e){return Math.min(1e3*2**e,3e4)}function Tv(e){return(e??"online")==="online"?ts.isOnline():!0}var Nv=class extends Error{constructor(e){super("CancelledError"),this.revert=e==null?void 0:e.revert,this.silent=e==null?void 0:e.silent}};function vl(e){return e instanceof Nv}function Pv(e){let t=!1,n=0,r=!1,i;const o=nS(),s=v=>{var w;r||(p(new Nv(v)),(w=e.abort)==null||w.call(e))},l=()=>{t=!0},c=()=>{t=!1},u=()=>Sv.isFocused()&&(e.networkMode==="always"||ts.isOnline())&&e.canRun(),d=()=>Tv(e.networkMode)&&e.canRun(),h=v=>{var w;r||(r=!0,(w=e.onSuccess)==null||w.call(e,v),i==null||i(),o.resolve(v))},p=v=>{var w;r||(r=!0,(w=e.onError)==null||w.call(e,v),i==null||i(),o.reject(v))},y=()=>new Promise(v=>{var w;i=f=>{(r||u())&&v(f)},(w=e.onPause)==null||w.call(e)}).then(()=>{var v;i=void 0,r||(v=e.onContinue)==null||v.call(e)}),k=()=>{if(r)return;let v;const w=n===0?e.initialPromise:void 0;try{v=w??e.fn()}catch(f){v=Promise.reject(f)}Promise.resolve(v).then(h).catch(f=>{var T;if(r)return;const g=e.retry??(As?0:3),x=e.retryDelay??rS,b=typeof x=="function"?x(n,f):x,C=g===!0||typeof g=="number"&&n<g||typeof g=="function"&&g(n,f);if(t||!C){p(f);return}n++,(T=e.onFail)==null||T.call(e,n,f),YC(b).then(()=>u()?void 0:y()).then(()=>{t?p(f):k()})})};return{promise:o,cancel:s,continue:()=>(i==null||i(),o),cancelRetry:l,continueRetry:c,canStart:d,start:()=>(d()?k():y().then(k),o)}}var iS=e=>setTimeout(e,0);function oS(){let e=[],t=0,n=l=>{l()},r=l=>{l()},i=iS;const o=l=>{t?e.push(l):i(()=>{n(l)})},s=()=>{const l=e;e=[],l.length&&i(()=>{r(()=>{l.forEach(c=>{n(c)})})})};return{batch:l=>{let c;t++;try{c=l()}finally{t--,t||s()}return c},batchCalls:l=>(...c)=>{o(()=>{l(...c)})},schedule:o,setNotifyFunction:l=>{n=l},setBatchNotifyFunction:l=>{r=l},setScheduler:l=>{i=l}}}var _e=oS(),Xn,Mp,jv=(Mp=class{constructor(){Y(this,Xn)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),GC(this.gcTime)&&V(this,Xn,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(e){this.gcTime=Math.max(this.gcTime||0,e??(As?1/0:5*60*1e3))}clearGcTimeout(){E(this,Xn)&&(clearTimeout(E(this,Xn)),V(this,Xn,void 0))}},Xn=new WeakMap,Mp),$r,Jn,nt,Zn,Ie,go,er,gt,Vt,Lp,aS=(Lp=class extends jv{constructor(t){super();Y(this,gt);Y(this,$r);Y(this,Jn);Y(this,nt);Y(this,Zn);Y(this,Ie);Y(this,go);Y(this,er);V(this,er,!1),V(this,go,t.defaultOptions),this.setOptions(t.options),this.observers=[],V(this,Zn,t.client),V(this,nt,E(this,Zn).getQueryCache()),this.queryKey=t.queryKey,this.queryHash=t.queryHash,V(this,$r,lS(this.options)),this.state=t.state??E(this,$r),this.scheduleGc()}get meta(){return this.options.meta}get promise(){var t;return(t=E(this,Ie))==null?void 0:t.promise}setOptions(t){this.options={...E(this,go),...t},this.updateGcTime(this.options.gcTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&E(this,nt).remove(this)}setData(t,n){const r=XC(this.state.data,t,this.options);return je(this,gt,Vt).call(this,{data:r,type:"success",dataUpdatedAt:n==null?void 0:n.updatedAt,manual:n==null?void 0:n.manual}),r}setState(t,n){je(this,gt,Vt).call(this,{type:"setState",state:t,setStateOptions:n})}cancel(t){var r,i;const n=(r=E(this,Ie))==null?void 0:r.promise;return(i=E(this,Ie))==null||i.cancel(t),n?n.then(mt).catch(mt):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(E(this,$r))}isActive(){return this.observers.some(t=>KC(t.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===ld||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStatic(){return this.getObserversCount()>0?this.observers.some(t=>Fc(t.options.staleTime,this)==="static"):!1}isStale(){return this.getObserversCount()>0?this.observers.some(t=>t.getCurrentResult().isStale):this.state.data===void 0||this.state.isInvalidated}isStaleByTime(t=0){return this.state.data===void 0?!0:t==="static"?!1:this.state.isInvalidated?!0:!QC(this.state.dataUpdatedAt,t)}onFocus(){var n;const t=this.observers.find(r=>r.shouldFetchOnWindowFocus());t==null||t.refetch({cancelRefetch:!1}),(n=E(this,Ie))==null||n.continue()}onOnline(){var n;const t=this.observers.find(r=>r.shouldFetchOnReconnect());t==null||t.refetch({cancelRefetch:!1}),(n=E(this,Ie))==null||n.continue()}addObserver(t){this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),E(this,nt).notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){this.observers.includes(t)&&(this.observers=this.observers.filter(n=>n!==t),this.observers.length||(E(this,Ie)&&(E(this,er)?E(this,Ie).cancel({revert:!0}):E(this,Ie).cancelRetry()),this.scheduleGc()),E(this,nt).notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||je(this,gt,Vt).call(this,{type:"invalidate"})}fetch(t,n){var u,d,h;if(this.state.fetchStatus!=="idle"){if(this.state.data!==void 0&&(n!=null&&n.cancelRefetch))this.cancel({silent:!0});else if(E(this,Ie))return E(this,Ie).continueRetry(),E(this,Ie).promise}if(t&&this.setOptions(t),!this.options.queryFn){const p=this.observers.find(y=>y.options.queryFn);p&&this.setOptions(p.options)}const r=new AbortController,i=p=>{Object.defineProperty(p,"signal",{enumerable:!0,get:()=>(V(this,er,!0),r.signal)})},o=()=>{const p=Cv(this.options,n),k=(()=>{const v={client:E(this,Zn),queryKey:this.queryKey,meta:this.meta};return i(v),v})();return V(this,er,!1),this.options.persister?this.options.persister(p,k,this):p(k)},l=(()=>{const p={fetchOptions:n,options:this.options,queryKey:this.queryKey,client:E(this,Zn),state:this.state,fetchFn:o};return i(p),p})();(u=this.options.behavior)==null||u.onFetch(l,this),V(this,Jn,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((d=l.fetchOptions)==null?void 0:d.meta))&&je(this,gt,Vt).call(this,{type:"fetch",meta:(h=l.fetchOptions)==null?void 0:h.meta});const c=p=>{var y,k,v,w;vl(p)&&p.silent||je(this,gt,Vt).call(this,{type:"error",error:p}),vl(p)||((k=(y=E(this,nt).config).onError)==null||k.call(y,p,this),(w=(v=E(this,nt).config).onSettled)==null||w.call(v,this.state.data,p,this)),this.scheduleGc()};return V(this,Ie,Pv({initialPromise:n==null?void 0:n.initialPromise,fn:l.fetchFn,abort:r.abort.bind(r),onSuccess:p=>{var y,k,v,w;if(p===void 0){c(new Error(`${this.queryHash} data is undefined`));return}try{this.setData(p)}catch(f){c(f);return}(k=(y=E(this,nt).config).onSuccess)==null||k.call(y,p,this),(w=(v=E(this,nt).config).onSettled)==null||w.call(v,p,this.state.error,this),this.scheduleGc()},onError:c,onFail:(p,y)=>{je(this,gt,Vt).call(this,{type:"failed",failureCount:p,error:y})},onPause:()=>{je(this,gt,Vt).call(this,{type:"pause"})},onContinue:()=>{je(this,gt,Vt).call(this,{type:"continue"})},retry:l.options.retry,retryDelay:l.options.retryDelay,networkMode:l.options.networkMode,canRun:()=>!0})),E(this,Ie).start()}},$r=new WeakMap,Jn=new WeakMap,nt=new WeakMap,Zn=new WeakMap,Ie=new WeakMap,go=new WeakMap,er=new WeakMap,gt=new WeakSet,Vt=function(t){const n=r=>{switch(t.type){case"failed":return{...r,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...r,fetchStatus:"paused"};case"continue":return{...r,fetchStatus:"fetching"};case"fetch":return{...r,...sS(r.data,this.options),fetchMeta:t.meta??null};case"success":return V(this,Jn,void 0),{...r,data:t.data,dataUpdateCount:r.dataUpdateCount+1,dataUpdatedAt:t.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const i=t.error;return vl(i)&&i.revert&&E(this,Jn)?{...E(this,Jn),fetchStatus:"idle"}:{...r,error:i,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,fetchFailureReason:i,fetchStatus:"idle",status:"error"};case"invalidate":return{...r,isInvalidated:!0};case"setState":return{...r,...t.state}}};this.state=n(this.state),_e.batch(()=>{this.observers.forEach(r=>{r.onQueryUpdate()}),E(this,nt).notify({query:this,type:"updated",action:t})})},Lp);function sS(e,t){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:Tv(t.networkMode)?"fetching":"paused",...e===void 0&&{error:null,status:"pending"}}}function lS(e){const t=typeof e.initialData=="function"?e.initialData():e.initialData,n=t!==void 0,r=n?typeof e.initialDataUpdatedAt=="function"?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:n?r??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"pending",fetchStatus:"idle"}}var Pt,Dp,cS=(Dp=class extends Es{constructor(t={}){super();Y(this,Pt);this.config=t,V(this,Pt,new Map)}build(t,n,r){const i=n.queryKey,o=n.queryHash??sd(i,n);let s=this.get(o);return s||(s=new aS({client:t,queryKey:i,queryHash:o,options:t.defaultQueryOptions(n),state:r,defaultOptions:t.getQueryDefaults(i)}),this.add(s)),s}add(t){E(this,Pt).has(t.queryHash)||(E(this,Pt).set(t.queryHash,t),this.notify({type:"added",query:t}))}remove(t){const n=E(this,Pt).get(t.queryHash);n&&(t.destroy(),n===t&&E(this,Pt).delete(t.queryHash),this.notify({type:"removed",query:t}))}clear(){_e.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}get(t){return E(this,Pt).get(t)}getAll(){return[...E(this,Pt).values()]}find(t){const n={exact:!0,...t};return this.getAll().find(r=>rp(n,r))}findAll(t={}){const n=this.getAll();return Object.keys(t).length>0?n.filter(r=>rp(t,r)):n}notify(t){_e.batch(()=>{this.listeners.forEach(n=>{n(t)})})}onFocus(){_e.batch(()=>{this.getAll().forEach(t=>{t.onFocus()})})}onOnline(){_e.batch(()=>{this.getAll().forEach(t=>{t.onOnline()})})}},Pt=new WeakMap,Dp),jt,De,tr,Et,ln,Op,uS=(Op=class extends jv{constructor(t){super();Y(this,Et);Y(this,jt);Y(this,De);Y(this,tr);this.mutationId=t.mutationId,V(this,De,t.mutationCache),V(this,jt,[]),this.state=t.state||dS(),this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options=t,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){E(this,jt).includes(t)||(E(this,jt).push(t),this.clearGcTimeout(),E(this,De).notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){V(this,jt,E(this,jt).filter(n=>n!==t)),this.scheduleGc(),E(this,De).notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){E(this,jt).length||(this.state.status==="pending"?this.scheduleGc():E(this,De).remove(this))}continue(){var t;return((t=E(this,tr))==null?void 0:t.continue())??this.execute(this.state.variables)}async execute(t){var o,s,l,c,u,d,h,p,y,k,v,w,f,g,x,b,C,T,N,S;const n=()=>{je(this,Et,ln).call(this,{type:"continue"})};V(this,tr,Pv({fn:()=>this.options.mutationFn?this.options.mutationFn(t):Promise.reject(new Error("No mutationFn found")),onFail:(j,A)=>{je(this,Et,ln).call(this,{type:"failed",failureCount:j,error:A})},onPause:()=>{je(this,Et,ln).call(this,{type:"pause"})},onContinue:n,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>E(this,De).canRun(this)}));const r=this.state.status==="pending",i=!E(this,tr).canStart();try{if(r)n();else{je(this,Et,ln).call(this,{type:"pending",variables:t,isPaused:i}),await((s=(o=E(this,De).config).onMutate)==null?void 0:s.call(o,t,this));const A=await((c=(l=this.options).onMutate)==null?void 0:c.call(l,t));A!==this.state.context&&je(this,Et,ln).call(this,{type:"pending",context:A,variables:t,isPaused:i})}const j=await E(this,tr).start();return await((d=(u=E(this,De).config).onSuccess)==null?void 0:d.call(u,j,t,this.state.context,this)),await((p=(h=this.options).onSuccess)==null?void 0:p.call(h,j,t,this.state.context)),await((k=(y=E(this,De).config).onSettled)==null?void 0:k.call(y,j,null,this.state.variables,this.state.context,this)),await((w=(v=this.options).onSettled)==null?void 0:w.call(v,j,null,t,this.state.context)),je(this,Et,ln).call(this,{type:"success",data:j}),j}catch(j){try{throw await((g=(f=E(this,De).config).onError)==null?void 0:g.call(f,j,t,this.state.context,this)),await((b=(x=this.options).onError)==null?void 0:b.call(x,j,t,this.state.context)),await((T=(C=E(this,De).config).onSettled)==null?void 0:T.call(C,void 0,j,this.state.variables,this.state.context,this)),await((S=(N=this.options).onSettled)==null?void 0:S.call(N,void 0,j,t,this.state.context)),j}finally{je(this,Et,ln).call(this,{type:"error",error:j})}}finally{E(this,De).runNext(this)}}},jt=new WeakMap,De=new WeakMap,tr=new WeakMap,Et=new WeakSet,ln=function(t){const n=r=>{switch(t.type){case"failed":return{...r,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...r,isPaused:!0};case"continue":return{...r,isPaused:!1};case"pending":return{...r,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:t.isPaused,status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...r,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...r,data:void 0,error:t.error,failureCount:r.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}};this.state=n(this.state),_e.batch(()=>{E(this,jt).forEach(r=>{r.onMutationUpdate(t)}),E(this,De).notify({mutation:this,type:"updated",action:t})})},Op);function dS(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var Ht,ft,fo,_p,hS=(_p=class extends Es{constructor(t={}){super();Y(this,Ht);Y(this,ft);Y(this,fo);this.config=t,V(this,Ht,new Set),V(this,ft,new Map),V(this,fo,0)}build(t,n,r){const i=new uS({mutationCache:this,mutationId:++Ao(this,fo)._,options:t.defaultMutationOptions(n),state:r});return this.add(i),i}add(t){E(this,Ht).add(t);const n=Yo(t);if(typeof n=="string"){const r=E(this,ft).get(n);r?r.push(t):E(this,ft).set(n,[t])}this.notify({type:"added",mutation:t})}remove(t){if(E(this,Ht).delete(t)){const n=Yo(t);if(typeof n=="string"){const r=E(this,ft).get(n);if(r)if(r.length>1){const i=r.indexOf(t);i!==-1&&r.splice(i,1)}else r[0]===t&&E(this,ft).delete(n)}}this.notify({type:"removed",mutation:t})}canRun(t){const n=Yo(t);if(typeof n=="string"){const r=E(this,ft).get(n),i=r==null?void 0:r.find(o=>o.state.status==="pending");return!i||i===t}else return!0}runNext(t){var r;const n=Yo(t);if(typeof n=="string"){const i=(r=E(this,ft).get(n))==null?void 0:r.find(o=>o!==t&&o.state.isPaused);return(i==null?void 0:i.continue())??Promise.resolve()}else return Promise.resolve()}clear(){_e.batch(()=>{E(this,Ht).forEach(t=>{this.notify({type:"removed",mutation:t})}),E(this,Ht).clear(),E(this,ft).clear()})}getAll(){return Array.from(E(this,Ht))}find(t){const n={exact:!0,...t};return this.getAll().find(r=>ip(n,r))}findAll(t={}){return this.getAll().filter(n=>ip(t,n))}notify(t){_e.batch(()=>{this.listeners.forEach(n=>{n(t)})})}resumePausedMutations(){const t=this.getAll().filter(n=>n.state.isPaused);return _e.batch(()=>Promise.all(t.map(n=>n.continue().catch(mt))))}},Ht=new WeakMap,ft=new WeakMap,fo=new WeakMap,_p);function Yo(e){var t;return(t=e.options.scope)==null?void 0:t.id}function sp(e){return{onFetch:(t,n)=>{var d,h,p,y,k;const r=t.options,i=(p=(h=(d=t.fetchOptions)==null?void 0:d.meta)==null?void 0:h.fetchMore)==null?void 0:p.direction,o=((y=t.state.data)==null?void 0:y.pages)||[],s=((k=t.state.data)==null?void 0:k.pageParams)||[];let l={pages:[],pageParams:[]},c=0;const u=async()=>{let v=!1;const w=x=>{Object.defineProperty(x,"signal",{enumerable:!0,get:()=>(t.signal.aborted?v=!0:t.signal.addEventListener("abort",()=>{v=!0}),t.signal)})},f=Cv(t.options,t.fetchOptions),g=async(x,b,C)=>{if(v)return Promise.reject();if(b==null&&x.pages.length)return Promise.resolve(x);const N=(()=>{const O={client:t.client,queryKey:t.queryKey,pageParam:b,direction:C?"backward":"forward",meta:t.options.meta};return w(O),O})(),S=await f(N),{maxPages:j}=t.options,A=C?ZC:JC;return{pages:A(x.pages,S,j),pageParams:A(x.pageParams,b,j)}};if(i&&o.length){const x=i==="backward",b=x?pS:lp,C={pages:o,pageParams:s},T=b(r,C);l=await g(C,T,x)}else{const x=e??o.length;do{const b=c===0?s[0]??r.initialPageParam:lp(r,l);if(c>0&&b==null)break;l=await g(l,b),c++}while(c<x)}return l};t.options.persister?t.fetchFn=()=>{var v,w;return(w=(v=t.options).persister)==null?void 0:w.call(v,u,{client:t.client,queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},n)}:t.fetchFn=u}}}function lp(e,{pages:t,pageParams:n}){const r=t.length-1;return t.length>0?e.getNextPageParam(t[r],t,n[r],n):void 0}function pS(e,{pages:t,pageParams:n}){var r;return t.length>0?(r=e.getPreviousPageParam)==null?void 0:r.call(e,t[0],t,n[0],n):void 0}var ue,fn,vn,Wr,Gr,yn,Qr,Kr,qp,mS=(qp=class{constructor(e={}){Y(this,ue);Y(this,fn);Y(this,vn);Y(this,Wr);Y(this,Gr);Y(this,yn);Y(this,Qr);Y(this,Kr);V(this,ue,e.queryCache||new cS),V(this,fn,e.mutationCache||new hS),V(this,vn,e.defaultOptions||{}),V(this,Wr,new Map),V(this,Gr,new Map),V(this,yn,0)}mount(){Ao(this,yn)._++,E(this,yn)===1&&(V(this,Qr,Sv.subscribe(async e=>{e&&(await this.resumePausedMutations(),E(this,ue).onFocus())})),V(this,Kr,ts.subscribe(async e=>{e&&(await this.resumePausedMutations(),E(this,ue).onOnline())})))}unmount(){var e,t;Ao(this,yn)._--,E(this,yn)===0&&((e=E(this,Qr))==null||e.call(this),V(this,Qr,void 0),(t=E(this,Kr))==null||t.call(this),V(this,Kr,void 0))}isFetching(e){return E(this,ue).findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return E(this,fn).findAll({...e,status:"pending"}).length}getQueryData(e){var n;const t=this.defaultQueryOptions({queryKey:e});return(n=E(this,ue).get(t.queryHash))==null?void 0:n.state.data}ensureQueryData(e){const t=this.defaultQueryOptions(e),n=E(this,ue).build(this,t),r=n.state.data;return r===void 0?this.fetchQuery(e):(e.revalidateIfStale&&n.isStaleByTime(Fc(t.staleTime,n))&&this.prefetchQuery(t),Promise.resolve(r))}getQueriesData(e){return E(this,ue).findAll(e).map(({queryKey:t,state:n})=>{const r=n.data;return[t,r]})}setQueryData(e,t,n){const r=this.defaultQueryOptions({queryKey:e}),i=E(this,ue).get(r.queryHash),o=i==null?void 0:i.state.data,s=WC(t,o);if(s!==void 0)return E(this,ue).build(this,r).setData(s,{...n,manual:!0})}setQueriesData(e,t,n){return _e.batch(()=>E(this,ue).findAll(e).map(({queryKey:r})=>[r,this.setQueryData(r,t,n)]))}getQueryState(e){var n;const t=this.defaultQueryOptions({queryKey:e});return(n=E(this,ue).get(t.queryHash))==null?void 0:n.state}removeQueries(e){const t=E(this,ue);_e.batch(()=>{t.findAll(e).forEach(n=>{t.remove(n)})})}resetQueries(e,t){const n=E(this,ue);return _e.batch(()=>(n.findAll(e).forEach(r=>{r.reset()}),this.refetchQueries({type:"active",...e},t)))}cancelQueries(e,t={}){const n={revert:!0,...t},r=_e.batch(()=>E(this,ue).findAll(e).map(i=>i.cancel(n)));return Promise.all(r).then(mt).catch(mt)}invalidateQueries(e,t={}){return _e.batch(()=>(E(this,ue).findAll(e).forEach(n=>{n.invalidate()}),(e==null?void 0:e.refetchType)==="none"?Promise.resolve():this.refetchQueries({...e,type:(e==null?void 0:e.refetchType)??(e==null?void 0:e.type)??"active"},t)))}refetchQueries(e,t={}){const n={...t,cancelRefetch:t.cancelRefetch??!0},r=_e.batch(()=>E(this,ue).findAll(e).filter(i=>!i.isDisabled()&&!i.isStatic()).map(i=>{let o=i.fetch(void 0,n);return n.throwOnError||(o=o.catch(mt)),i.state.fetchStatus==="paused"?Promise.resolve():o}));return Promise.all(r).then(mt)}fetchQuery(e){const t=this.defaultQueryOptions(e);t.retry===void 0&&(t.retry=!1);const n=E(this,ue).build(this,t);return n.isStaleByTime(Fc(t.staleTime,n))?n.fetch(t):Promise.resolve(n.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(mt).catch(mt)}fetchInfiniteQuery(e){return e.behavior=sp(e.pages),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(mt).catch(mt)}ensureInfiniteQueryData(e){return e.behavior=sp(e.pages),this.ensureQueryData(e)}resumePausedMutations(){return ts.isOnline()?E(this,fn).resumePausedMutations():Promise.resolve()}getQueryCache(){return E(this,ue)}getMutationCache(){return E(this,fn)}getDefaultOptions(){return E(this,vn)}setDefaultOptions(e){V(this,vn,e)}setQueryDefaults(e,t){E(this,Wr).set(po(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){const t=[...E(this,Wr).values()],n={};return t.forEach(r=>{mo(e,r.queryKey)&&Object.assign(n,r.defaultOptions)}),n}setMutationDefaults(e,t){E(this,Gr).set(po(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){const t=[...E(this,Gr).values()],n={};return t.forEach(r=>{mo(e,r.mutationKey)&&Object.assign(n,r.defaultOptions)}),n}defaultQueryOptions(e){if(e._defaulted)return e;const t={...E(this,vn).queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return t.queryHash||(t.queryHash=sd(t.queryKey,t)),t.refetchOnReconnect===void 0&&(t.refetchOnReconnect=t.networkMode!=="always"),t.throwOnError===void 0&&(t.throwOnError=!!t.suspense),!t.networkMode&&t.persister&&(t.networkMode="offlineFirst"),t.queryFn===ld&&(t.enabled=!1),t}defaultMutationOptions(e){return e!=null&&e._defaulted?e:{...E(this,vn).mutations,...(e==null?void 0:e.mutationKey)&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){E(this,ue).clear(),E(this,fn).clear()}},ue=new WeakMap,fn=new WeakMap,vn=new WeakMap,Wr=new WeakMap,Gr=new WeakMap,yn=new WeakMap,Qr=new WeakMap,Kr=new WeakMap,qp),gS=m.createContext(void 0),fS=({client:e,children:t})=>(m.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]),a.jsx(gS.Provider,{value:e,children:t}));const cp="haiit-preferred-effect",vS=["none","christmas","tet","parallax"],yS=7,xS=e=>e!==null&&vS.includes(e),ve=e=>Math.floor(e),Ev=e=>{var n,r,i;const t=new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Ho_Chi_Minh",year:"numeric",month:"numeric",day:"numeric"}).formatToParts(e);return{year:Number(((n=t.find(o=>o.type==="year"))==null?void 0:n.value)??0),month:Number(((r=t.find(o=>o.type==="month"))==null?void 0:r.value)??0),day:Number(((i=t.find(o=>o.type==="day"))==null?void 0:i.value)??0)}},Av=(e,t,n)=>{const r=ve((14-t)/12),i=n+4800-r,o=t+12*r-3;return n>1582||n===1582&&(t>10||t===10&&e>=15)?e+ve((153*o+2)/5)+365*i+ve(i/4)-ve(i/100)+ve(i/400)-32045:e+ve((153*o+2)/5)+365*i+ve(i/4)-32083},oi=e=>{const t=e/1236.85,n=t*t,r=n*t,i=r*t,o=Math.PI/180;let s=241502075933e-5+29.53058868*e+1178e-7*n-155e-9*r;s+=33e-5*Math.sin((166.56+132.87*t-.009173*n)*o);const l=359.2242+29.10535608*e-333e-7*n-347e-8*r,c=306.0253+385.81691806*e+.0107306*n+1236e-8*r-58e-9*i,u=21.2964+390.67050646*e-.0016528*n-239e-8*r+2e-8*i,d=(.1734-393e-6*t)*Math.sin(l*o)+.0021*Math.sin(2*o*l)-.4068*Math.sin(c*o)+.0161*Math.sin(2*o*c)-4e-4*Math.sin(3*o*c)+.0104*Math.sin(2*o*u)-.0051*Math.sin((l+c)*o)-.0074*Math.sin((l-c)*o)+4e-4*Math.sin((2*u+l)*o)-4e-4*Math.sin((2*u-l)*o)-6e-4*Math.sin((2*u+c)*o)+.001*Math.sin((2*u-c)*o)+5e-4*Math.sin((2*c+l)*o);let h;return t<-11?h=.001+839e-6*t+2261e-7*n-845e-8*r-81e-9*i:h=-278e-6+265e-6*t+262e-6*n,s+d-h},Vc=(e,t)=>{const n=(e-24515455e-1-t/24)/36525,r=n*n,i=Math.PI/180,o=357.5291+35999.0503*n-1559e-7*r-48e-8*r*n,s=280.46645+36000.76983*n+3032e-7*r,l=(1.9146-.004817*n-14e-6*r)*Math.sin(i*o)+(.019993-101e-6*n)*Math.sin(2*i*o)+29e-5*Math.sin(3*i*o),c=(s+l)*i;return ve((c-2*Math.PI*ve(c/(2*Math.PI)))/Math.PI*6)},yl=(e,t)=>{const n=Av(31,12,e)-2415021,r=ve(n/29.530588853);let i=oi(r);return Vc(ve(i+.5+t/24),t)>=9&&(i=oi(r-1)),ve(i+.5+t/24)},bS=(e,t)=>{const n=ve(.5+(e-2415021076998695e-9)/29.530588853);let r=0,i=1,o=Vc(ve(oi(n+i)+.5+t/24),t);do r=o,i+=1,o=Vc(ve(oi(n+i)+.5+t/24),t);while(o!==r&&i<14);return i-1},wS=(e,t,n,r)=>{const i=Av(e,t,n),o=ve((i-2415021076998695e-9)/29.530588853);let s=ve(oi(o+1)+.5+r/24);s>i&&(s=ve(oi(o)+.5+r/24));let l=yl(n,r),c=l,u;l>=s?(u=n,l=yl(n-1,r)):(u=n+1,c=yl(n+1,r));const d=i-s+1,h=ve((s-l)/29);let p=0,y=h+11;if(c-l>365){const k=bS(l,r);h>=k&&(y=h+10,h===k&&(p=1))}return y>12&&(y-=12),y>=11&&h<4&&(u-=1),{day:d,month:y,year:u,leap:p}},kS=e=>{const{day:t,month:n,year:r}=Ev(e);return wS(t,n,r,yS)},CS=e=>{const t=Ev(e);if(t.month===12&&t.day>=24&&t.day<=26)return"christmas";if(t.day===t.month)return"parallax";const n=kS(e);return n.month===1&&n.day>=1&&n.day<=5||n.month===12&&n.day>=29&&n.day<=30?"tet":"none"},Iv=m.createContext(void 0),SS=({children:e})=>{const[t,n]=m.useState(()=>{const i=localStorage.getItem(cp);return xS(i)?i:CS(new Date)}),r=i=>{n(i),localStorage.setItem(cp,i)};return a.jsx(Iv.Provider,{value:{currentEffect:t,setCurrentEffect:r},children:e})},Rv=()=>{const e=m.useContext(Iv);if(!e)throw new Error("useEffects must be used within an EffectsProvider");return e},TS=Wu("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),X=m.forwardRef(({className:e,variant:t,size:n,asChild:r=!1,...i},o)=>{const s=r?Gw:"button";return a.jsx(s,{className:ut(TS({variant:t,size:n,className:e})),ref:o,...i})});X.displayName="Button";const NS={"nav.home":{vi:"Trang chủ",en:"Index"},"nav.projects":{vi:"Dự án",en:"Work"},"nav.blog":{vi:"Bài viết",en:"Notes"},"nav.about":{vi:"Hồ sơ",en:"Profile"},"nav.connect":{vi:"Sẵn sàng kết nối",en:"Available to connect"},"nav.theme":{vi:"Giao diện",en:"Theme"},"nav.language":{vi:"Ngôn ngữ",en:"Language"},"hero.log":{vi:"Portfolio / Nhật ký học tập",en:"Portfolio / Learning log"},"hero.open":{vi:"Sẵn sàng cho cơ hội phù hợp",en:"Open to meaningful work"},"hero.hello":{vi:"Xin chào, tôi là",en:"Hello, I am"},"hero.line1":{vi:"Chế tác mã nguồn",en:"Crafting code"},"hero.line2":{vi:"& đúc kết những",en:"& distilling field"},"hero.line3":{vi:"trải nghiệm thực tế.",en:"experiences."},"hero.bio":{vi:"một Information Systems Developer tập trung vào backend, database và những sản phẩm có giá trị sử dụng thực tế.",en:"an Information Systems Developer focused on backend, databases, and products with practical value."},"hero.work":{vi:"Khám phá dự án",en:"Explore selected work"},"hero.notes":{vi:"Đọc bài viết",en:"Read my notes"},"hero.repositories":{vi:"kho mã nguồn",en:"repositories"},"hero.languages":{vi:"ngôn ngữ",en:"languages"},"hero.journal":{vi:"nhật ký công khai",en:"public journal"},"hero.portrait":{vi:"Chân dung",en:"Portrait"},"home.work.eyebrow":{vi:"01 / Dự án chọn lọc",en:"01 / Selected work"},"home.work.title1":{vi:"Dự án có lý do",en:"Projects with a reason"},"home.work.title2":{vi:"để tồn tại.",en:"to exist."},"home.work.desc":{vi:"Mỗi dự án là một bài thực hành có chủ đích: dữ liệu, thuật toán, kiến trúc hoặc trải nghiệm người dùng.",en:"Each project is a deliberate exercise in data, algorithms, architecture, or user experience."},"home.work.archive":{vi:"Xem kho dự án",en:"View project archive"},"home.work.case":{vi:"Nghiên cứu",en:"Case study"},"home.work.tools":{vi:"Công cụ & bối cảnh",en:"Tools & context"},"home.notes.eyebrow":{vi:"02 / Ghi chép thực tế",en:"02 / Field notes"},"home.notes.title1":{vi:"Học tập công khai.",en:"Learn in public."},"home.notes.title2":{vi:"Giữ lại điều hữu ích.",en:"Keep the useful parts."},"home.notes.all":{vi:"Mở tất cả bài viết",en:"Open all notes"},"home.notes.read":{vi:"Đọc bài",en:"Read note"},"home.map.eyebrow":{vi:"03 / Bản đồ kiến thức",en:"03 / Knowledge map"},"home.map.title1":{vi:"Những điều tôi đang",en:"What I am"},"home.map.title2":{vi:"khám phá.",en:"mapping out."},"home.map.desc":{vi:"Không chỉ là danh mục. Đây là bản đồ những vùng kiến thức tôi đang học, thử nghiệm và kết nối lại với nhau.",en:"More than categories: a map of the knowledge areas I am learning, testing, and connecting."},"home.principle":{vi:"Nguyên tắc cá nhân",en:"Personal principle"},"home.quote":{vi:"“Tôi không cố tỏ ra biết mọi thứ. Tôi xây, ghi chép và biến những điều đã hiểu thành thứ hữu ích cho người tiếp theo.”",en:"“I do not pretend to know everything. I build, document, and turn what I understand into something useful for the next person.”"},"footer.eyebrow":{vi:"Cuối trang / đầu cuộc trò chuyện",en:"End of page / start of conversation"},"footer.title":{vi:"Tôi xây sản phẩm để hiểu hệ thống, rồi viết lại để hiểu sâu hơn.",en:"I build products to understand systems, then write to understand them deeper."},"footer.navigate":{vi:"Điều hướng",en:"Navigate"},"footer.connect":{vi:"Kết nối",en:"Connect"},"footer.work":{vi:"Dự án chọn lọc",en:"Selected work"},"footer.notes":{vi:"Ghi chép học tập",en:"Learning notes"},"footer.profile":{vi:"Hồ sơ & CV",en:"Profile & CV"},"footer.designed":{vi:"Được thiết kế như một nhật ký hệ thống sống",en:"Designed as a living systems journal"},"blog.title":{vi:"Bài viết",en:"Blog"},"blog.desc":{vi:"Kiến thức lập trình, kinh nghiệm thực tế và những bài học từ hành trình phát triển phần mềm.",en:"Programming knowledge, practical experience, and lessons from my software development journey."},"blog.search":{vi:"Tìm kiếm bài viết...",en:"Search articles..."},"blog.all":{vi:"Tất cả",en:"All"},"blog.filterCategory":{vi:"Danh mục",en:"Categories"},"blog.filterTag":{vi:"Thẻ nội dung",en:"Content tags"},"blog.allTags":{vi:"Tất cả thẻ",en:"All tags"},"blog.selectedTags":{vi:"thẻ đã chọn",en:"selected"},"blog.clearFilters":{vi:"Xóa bộ lọc",en:"Clear filters"},"blog.readMore":{vi:"Đọc thêm →",en:"Read more →"},"blog.empty":{vi:"Không tìm thấy bài viết",en:"No articles found"},"blog.emptyDesc":{vi:"Thử thay đổi bộ lọc hoặc từ khóa tìm kiếm.",en:"Try changing the filter or search keyword."},"project.title":{vi:"Dự án",en:"Projects"},"project.desc":{vi:"Các dự án cá nhân từ GitHub của tôi, từ ý tưởng đến sản phẩm hoàn chỉnh.",en:"My personal GitHub projects, from early ideas to finished products."},"project.github":{vi:"Xem thêm trên GitHub",en:"View more on GitHub"},"project.featured":{vi:"Dự án nổi bật",en:"Featured projects"},"project.all":{vi:"Tất cả dự án",en:"All projects"},"project.source":{vi:"Mã nguồn",en:"Source code"},"project.demo":{vi:"Bản chạy thử",en:"Live demo"},"post.back":{vi:"Quay lại Blog",en:"Back to Blog"},"post.notFound":{vi:"Bài viết không tồn tại",en:"Article not found"},"post.notFoundDesc":{vi:"Bài viết bạn đang tìm không tồn tại hoặc đã bị xóa.",en:"The article you are looking for does not exist or has been removed."},"post.views":{vi:"lượt xem",en:"views"},"post.tags":{vi:"Thẻ",en:"Tags"},"post.share":{vi:"Chia sẻ",en:"Share"},"post.copy":{vi:"Sao chép liên kết",en:"Copy link"},"category.languages":{vi:"Ngôn ngữ lập trình",en:"Programming Languages"},"category.frameworks":{vi:"Framework & thư viện",en:"Frameworks & Libraries"},"category.architecture":{vi:"Kiến trúc phần mềm",en:"Software Architecture"},"category.patterns":{vi:"Mẫu thiết kế",en:"Design Patterns"},"category.practices":{vi:"Thực hành tốt",en:"Best Practices"},"category.roadmap":{vi:"Lộ trình học tập",en:"Learning Roadmaps"},"about.cv":{vi:"Xem CV của tôi",en:"View my CV"},"about.me":{vi:"Về tôi",en:"About me"},"about.experience":{vi:"Kinh nghiệm",en:"Experience"},"about.contact":{vi:"Liên hệ",en:"Contact"},"about.collab":{vi:"Muốn hợp tác?",en:"Interested in collaborating?"},"about.collabDesc":{vi:"Tôi luôn sẵn sàng thảo luận về các dự án thú vị.",en:"I am always open to discussing interesting projects."},"about.contactNow":{vi:"Liên hệ ngay",en:"Get in touch"},"about.download":{vi:"Tải PDF",en:"Download PDF"},"about.skills":{vi:"Kỹ năng kỹ thuật",en:"Technical skills"},"about.featured":{vi:"Dự án tiêu biểu (từ GitHub)",en:"Featured projects (from GitHub)"},"about.other":{vi:"Hoạt động khác",en:"Other activities"},"effect.title":{vi:"Hiệu ứng nền",en:"Background effects"}},Mv=m.createContext(void 0),PS=({children:e})=>{const[t,n]=m.useState(()=>{const i=localStorage.getItem("haiit-language");return i==="vi"||i==="en"?i:navigator.language.toLowerCase().startsWith("vi")?"vi":"en"});m.useEffect(()=>{localStorage.setItem("haiit-language",t),document.documentElement.lang=t},[t]);const r=i=>{var o;return((o=NS[i])==null?void 0:o[t])??i};return a.jsx(Mv.Provider,{value:{language:t,setLanguage:n,toggleLanguage:()=>n(t==="vi"?"en":"vi"),t:r,locale:t==="vi"?"vi-VN":"en-US"},children:e})},Pe=()=>{const e=m.useContext(Mv);if(!e)throw new Error("useLanguage must be used within LanguageProvider");return e},xl=["none","parallax","tet","christmas"],jS=()=>{const{currentEffect:e,setCurrentEffect:t}=Rv(),{language:n}=Pe(),r=xl.indexOf(e),i=xl[(r+1)%xl.length],o=n==="vi"?{none:"Tắt",parallax:"3D",tet:"Tết",christmas:"Giáng sinh"}:{none:"Off",parallax:"3D",tet:"Lunar New Year",christmas:"Christmas"},l={none:Gu,parallax:W0,tet:rk,christmas:yk}[e],c=`${o[e]} → ${o[i]}`;return a.jsxs(bv,{children:[a.jsx(wv,{asChild:!0,children:a.jsx(X,{variant:"outline",size:"icon",className:`effect-cycle fixed bottom-4 right-4 z-[60] h-12 w-12 rounded-full shadow-xl backdrop-blur-xl ${e==="none"?"bg-background/85":"border-primary/50 bg-primary/15 text-primary"}`,"aria-label":c,onClick:()=>t(i),children:a.jsx(l,{className:"h-4 w-4"})})}),a.jsx(ad,{side:"left",className:"font-mono text-xs uppercase tracking-[.12em]",children:c})]})},ES=()=>{const e=m.useRef(null),t=m.useRef([]),n=m.useRef();return m.useEffect(()=>{const r=e.current;if(!r)return;const i=r.getContext("2d");if(!i)return;let o=window.innerWidth,s=window.innerHeight,l=performance.now()+5e3+Math.random()*5e3,c=0;const u=()=>{const y=Math.min(190,Math.floor(o/6));t.current=Array.from({length:y},(k,v)=>{const w=Math.random();return{x:Math.random()*o,y:Math.random()*s,depth:w,size:.7+w*2.5,speed:.3+w*1.1,opacity:.12+w*.36,swing:Math.random()*Math.PI*2,swingSpeed:Math.random()*.018+.006,blur:(1-w)*1.8,rotation:Math.random()*Math.PI,rotationSpeed:(Math.random()-.5)*.012,crystal:v%17===0}})},d=()=>{const y=Math.min(window.devicePixelRatio||1,2);o=window.innerWidth,s=window.innerHeight,r.width=o*y,r.height=s*y,r.style.width=`${o}px`,r.style.height=`${s}px`,i.setTransform(y,0,0,y,0,0),u()},h=y=>{i.save(),i.translate(y.x,y.y),i.rotate(y.rotation),i.strokeStyle=`rgba(235, 249, 255, ${y.opacity*.72})`,i.lineWidth=.45;for(let k=0;k<6;k+=1)i.rotate(Math.PI/3),i.beginPath(),i.moveTo(0,0),i.lineTo(0,-y.size*2.4),i.moveTo(0,-y.size*1.3),i.lineTo(y.size*.65,-y.size*1.8),i.moveTo(0,-y.size*1.3),i.lineTo(-y.size*.65,-y.size*1.8),i.stroke();i.restore()};d(),window.addEventListener("resize",d);const p=y=>{if(i.clearRect(0,0,o,s),y>l){const k=y-l;c=k<3500?Math.sin(k/3500*Math.PI)*3.2:0,k>=3500&&(l=y+9e3+Math.random()*9e3)}t.current.forEach(k=>{k.y+=k.speed+c*.08,k.swing+=k.swingSpeed,k.rotation+=k.rotationSpeed,k.x+=Math.sin(k.swing)*(.18+k.depth*.35)+c*(.25+k.depth*.75),k.y>s+12&&(k.y=-12,k.x=Math.random()*o),k.x>o+15&&(k.x=-15),i.shadowBlur=k.blur*5,i.shadowColor="rgba(180, 225, 255, .55)",k.crystal?h(k):(i.beginPath(),i.ellipse(k.x,k.y,k.size*(1+c*.08),k.size,0,0,Math.PI*2),i.fillStyle=`rgba(240, 250, 255, ${k.opacity})`,i.fill()),i.shadowBlur=0}),n.current=requestAnimationFrame(p)};return n.current=requestAnimationFrame(p),()=>{window.removeEventListener("resize",d),n.current&&cancelAnimationFrame(n.current)}},[]),a.jsx("canvas",{ref:e,className:"absolute inset-0 pointer-events-none z-30 opacity-[.72]"})},AS=Array.from({length:18},(e,t)=>{const n=t/17,r=Math.sin(n*Math.PI)*2.5;return{x:`${4+n*92}%`,y:`${8+r}px`,delay:`${t*-.16}s`,hue:35+t*18}}),IS=Array.from({length:42}),RS=Array.from({length:9}),MS=Array.from({length:5}),LS=Array.from({length:18}),DS=Array.from({length:6}),up=Array.from({length:14}),dp=({side:e})=>a.jsxs("div",{className:`christmas-sprig christmas-sprig-${e}`,children:[a.jsx("span",{className:"sprig-stem"}),RS.map((t,n)=>a.jsx("i",{style:{"--i":n}},n)),MS.map((t,n)=>a.jsx("b",{style:{"--i":n}},n))]}),OS=()=>a.jsxs("div",{className:"effect-scene effect-scene-christmas fixed inset-0 z-0 overflow-hidden",children:[a.jsx("div",{className:"christmas-frost"}),a.jsx("div",{className:"christmas-bokeh",children:LS.map((e,t)=>a.jsx("i",{style:{"--i":t}},t))}),a.jsx("div",{className:"nordic-stars",children:IS.map((e,t)=>a.jsx("i",{style:{"--i":t}},t))}),a.jsx("div",{className:"nordic-aurora nordic-aurora-a"}),a.jsx("div",{className:"nordic-aurora nordic-aurora-b"}),a.jsx("div",{className:"nordic-aurora nordic-aurora-c"}),a.jsx("div",{className:"christmas-snowflake-halo"}),a.jsx("div",{className:"christmas-hero-snowflake",children:DS.map((e,t)=>a.jsxs("i",{style:{"--i":t},children:[a.jsx("span",{}),a.jsx("b",{})]},t))}),a.jsx("div",{className:"christmas-wind christmas-wind-a",children:up.map((e,t)=>a.jsx("i",{style:{"--i":t}},t))}),a.jsx("div",{className:"christmas-wind christmas-wind-b",children:up.slice(0,9).map((e,t)=>a.jsx("i",{style:{"--i":t}},t))}),a.jsxs("div",{className:"christmas-top-garland",children:[a.jsx(dp,{side:"left"}),a.jsx(dp,{side:"right"}),a.jsx("div",{className:"garland-bauble garland-bauble-a",children:a.jsx("i",{})}),a.jsx("div",{className:"garland-bauble garland-bauble-b",children:a.jsx("i",{})}),a.jsx("div",{className:"garland-bauble garland-bauble-c",children:a.jsx("i",{})})]}),a.jsxs("div",{className:"christmas-wreath",children:[a.jsx("div",{className:"wreath-bow"}),a.jsx("i",{}),a.jsx("i",{}),a.jsx("i",{}),a.jsx("i",{}),a.jsx("i",{})]}),a.jsxs("div",{className:"christmas-corner-gift",children:[a.jsx("i",{}),a.jsx("span",{})]}),a.jsx("div",{className:"christmas-candy-cane"}),a.jsx("div",{className:"nordic-pines nordic-pines-back",children:Array.from({length:9},(e,t)=>a.jsx("i",{style:{"--i":t}},t))}),a.jsx("div",{className:"nordic-pines nordic-pines-front",children:Array.from({length:7},(e,t)=>a.jsx("i",{style:{"--i":t}},t))}),a.jsx("div",{className:"christmas-light-drift",children:AS.map(e=>a.jsx("i",{style:{left:e.x,top:e.y,"--bulb":`hsl(${e.hue} 88% 64%)`,animationDelay:e.delay}},e.x))}),a.jsx("div",{className:"winter-ground"}),a.jsx(ES,{}),a.jsx("div",{className:"effect-label left-5 top-24",children:"CHRISTMAS EVE / WINTER GLOW"})]}),_S=()=>{const e=m.useRef(null);return m.useEffect(()=>{const t=e.current,n=t==null?void 0:t.getContext("2d");if(!t||!n)return;let r=0,i=0,o=[],s=[];const l=()=>{t.width=window.innerWidth*devicePixelRatio,t.height=window.innerHeight*devicePixelRatio,t.style.width=`${window.innerWidth}px`,t.style.height=`${window.innerHeight}px`,n.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0),o=Array.from({length:Math.min(52,Math.floor(window.innerWidth/24))},(d,h)=>({x:h%2?Math.random()*window.innerWidth*.22:window.innerWidth*(.78+Math.random()*.22),y:Math.random()*window.innerHeight,size:Math.random()*5+2,speed:Math.random()*.6+.25,sway:Math.random()*8,rotation:Math.random()*Math.PI,rotationSpeed:(Math.random()-.5)*.025,opacity:Math.random()*.5+.3}))},c=()=>{const d=Math.random()>.5?window.innerWidth*.12:window.innerWidth*.88,h=window.innerHeight*(.1+Math.random()*.16),p=Math.random()>.5?"#ffd36a":"#ff7b69";s.push(...Array.from({length:28},(y,k)=>({x:d,y:h,angle:k/28*Math.PI*2,radius:0,speed:Math.random()*1.3+.7,alpha:.75,color:p})))},u=()=>{n.clearRect(0,0,window.innerWidth,window.innerHeight),i+=1,i%210===0&&c(),s=s.filter(d=>d.alpha>.01),s.forEach(d=>{d.radius+=d.speed,d.alpha*=.985;const h=d.x+Math.cos(d.angle)*d.radius,p=d.y+Math.sin(d.angle)*d.radius+d.radius*.08;n.beginPath(),n.arc(h,p,1.2,0,Math.PI*2),n.fillStyle=d.color,n.globalAlpha=d.alpha,n.fill()}),o.forEach(d=>{d.y+=d.speed,d.x+=Math.sin(d.y*.012+d.sway)*.38,d.rotation+=d.rotationSpeed,d.y>window.innerHeight+20&&(d.y=-20,d.x=Math.random()>.5?Math.random()*window.innerWidth*.22:window.innerWidth*(.78+Math.random()*.22)),n.save(),n.translate(d.x,d.y),n.rotate(d.rotation),n.globalAlpha=d.opacity;const h=n.createLinearGradient(0,-d.size,0,d.size);h.addColorStop(0,"#fff0a8"),h.addColorStop(.45,"#ffbf5a"),h.addColorStop(1,"#e85a55"),n.fillStyle=h,n.beginPath(),n.ellipse(0,0,d.size*.5,d.size,0,0,Math.PI*2),n.fill(),n.restore()}),n.globalAlpha=1,r=requestAnimationFrame(u)};return l(),c(),u(),window.addEventListener("resize",l),()=>{cancelAnimationFrame(r),window.removeEventListener("resize",l)}},[]),a.jsxs("div",{className:"effect-scene effect-scene-tet fixed inset-0 z-0 overflow-hidden",children:[a.jsx("div",{className:"tet-vietnam-frame"}),a.jsxs("div",{className:"tet-corner tet-corner-dao",children:[a.jsx("div",{className:"tet-border-branch",children:Array.from({length:13},(t,n)=>a.jsx("i",{style:{"--i":n}},n))}),a.jsxs("div",{className:"tet-viet-lantern",children:[a.jsx("span",{children:"An"}),a.jsx("i",{})]})]}),a.jsxs("div",{className:"tet-corner tet-corner-mai",children:[a.jsx("div",{className:"tet-border-branch",children:Array.from({length:13},(t,n)=>a.jsx("i",{style:{"--i":n}},n))}),a.jsxs("div",{className:"tet-viet-lantern",children:[a.jsx("span",{children:"Vui"}),a.jsx("i",{})]})]}),a.jsxs("div",{className:"tet-side-couplet tet-side-couplet-left",children:[a.jsx("i",{}),a.jsxs("span",{children:[a.jsx("em",{children:"Xuân"}),a.jsx("em",{children:"sang"}),a.jsx("em",{children:"phúc"}),a.jsx("em",{children:"lộc"}),a.jsx("em",{children:"tràn"}),a.jsx("em",{children:"muôn"}),a.jsx("em",{children:"ngả"})]}),a.jsx("b",{}),a.jsx("strong",{children:"An"})]}),a.jsxs("div",{className:"tet-side-couplet tet-side-couplet-right",children:[a.jsx("i",{}),a.jsxs("span",{children:[a.jsx("em",{children:"Tết"}),a.jsx("em",{children:"đến"}),a.jsx("em",{children:"an"}),a.jsx("em",{children:"khang"}),a.jsx("em",{children:"rạng"}),a.jsx("em",{children:"khắp"}),a.jsx("em",{children:"nhà"})]}),a.jsx("b",{}),a.jsx("strong",{children:"Xuân"})]}),a.jsxs("div",{className:"tet-bottom tet-bottom-left",children:[a.jsxs("div",{className:"tet-banh-chung",children:[a.jsx("i",{}),a.jsx("span",{}),a.jsx("b",{})]}),a.jsxs("div",{className:"tet-banh-tet",children:[a.jsx("i",{}),a.jsx("span",{}),a.jsx("b",{})]}),a.jsx("div",{className:"tet-watermelon",children:a.jsx("i",{})}),a.jsxs("div",{className:"tet-envelope",children:[a.jsx("i",{}),a.jsx("span",{children:"Lộc"}),a.jsx("b",{})]})]}),a.jsxs("div",{className:"tet-bottom tet-bottom-right",children:[a.jsx("div",{className:"tet-quat",children:Array.from({length:11},(t,n)=>a.jsx("i",{style:{"--i":n}},n))}),a.jsxs("div",{className:"tet-dongson",children:[a.jsx("i",{}),a.jsx("span",{}),a.jsx("b",{})]})]}),a.jsx("div",{className:"tet-top-knot tet-top-knot-a",children:a.jsx("i",{})}),a.jsx("div",{className:"tet-top-knot tet-top-knot-b",children:a.jsx("i",{})}),a.jsx("canvas",{ref:e,className:"absolute inset-0"}),a.jsx("div",{className:"effect-label left-5 top-24",children:"TẾT VIỆT / BÌNH AN"})]})},Xo=[{base:556958,side:473183,top:6478056,accent:12124016,edge:14154751},{base:5982901,side:2169688,top:10849023,accent:7533823,edge:15196671},{base:11758372,side:5514511,top:15775819,accent:7467007,edge:16770989},{base:6004018,side:2181927,top:11069534,accent:14286722,edge:15597513}],bl=(e,t)=>{const n=new Iy(e*.48,e*.48),r=new Gc({color:t,transparent:!0,opacity:.28,depthWrite:!1,side:Ry}),i=new Vi(n,r),o=new Bi(new ba(n),new wa({color:t,transparent:!0,opacity:.5}));return i.add(o),i},wl=(e,t,n=!1)=>{const r=new Fp,i=new vd(e,e,e),s=[t.side,t.side,t.top,t.side,t.base,t.side].map((h,p)=>new jy({color:h,metalness:.62,roughness:p===2?.14:.23,clearcoat:1,clearcoatRoughness:.12,emissive:new Ey(p===2?t.accent:h).multiplyScalar(p===2?.14:.07),transparent:!0,opacity:.38,depthWrite:!1})),l=new Vi(i,s),c=new Bi(new ba(i),new wa({color:t.edge,transparent:!0,opacity:.58})),u=new Bi(new ba(new vd(e*1.13,e*1.13,e*1.13)),new wa({color:t.accent,transparent:!0,opacity:n?.3:.16})),d=new Vi(new Ay(e*(n?.24:.19),0),new Gc({color:t.accent,transparent:!0,opacity:.48,depthWrite:!1}));if(d.name="cube-energy",u.name="cube-frame",r.add(l,c,u,d),n){const h=bl(e,t.accent);h.position.z=e*.505;const p=bl(e*.88,t.edge);p.position.y=e*.505,p.rotation.x=-Math.PI/2;const y=bl(e*.78,t.top);y.position.x=e*.505,y.rotation.y=Math.PI/2,r.add(h,p,y)}return r},qS=()=>{const e=m.useRef(null);return m.useEffect(()=>{const t=e.current;if(!t)return;const n=new gy,r=new fy(42,1,.1,100);r.position.set(0,1.2,13);const i=new vy({alpha:!0,antialias:!0,powerPreference:"high-performance"});i.setPixelRatio(Math.min(window.devicePixelRatio,2)),i.setClearColor(0,0),i.outputColorSpace=yy,i.toneMapping=xy,i.toneMappingExposure=1.15,t.appendChild(i.domElement),n.add(new by(10412031,.72));const o=new wy(12449791,4.2);o.position.set(4,6,8),n.add(o);const s=new gd(12124016,32,20);s.position.set(-5,2,4),n.add(s);const l=new gd(3723263,26,18);l.position.set(5,-3,2),n.add(l);const c=wl(2.25,Xo[0],!0);c.rotation.set(-.35,.65,.08),n.add(c);const u=wl(.72,Xo[3]);u.scale.setScalar(.82),c.add(u);const d=Array.from({length:11},(S,j)=>{const A=j%3,O=new Fp;O.rotation.set([.35,1.05,-.62][A],[-.22,.28,-.48][A],j*.71),n.add(O);const M=wl([.38,.5,.32,.44][j%4],Xo[j%Xo.length]);return M.position.x=[3.5,4.35,5.15][A]+j%4*.08,M.rotation.set(j*.41,j*.63,j*.28),O.add(M),{pivot:O,cube:M,speed:[.34,-.24,.18][A],phase:j*.9}}),h=[{radius:3.35,tube:.012,color:6809849,rotation:[1.2,.12,.1]},{radius:4.5,tube:.009,color:10741301,rotation:[.82,.7,-.3]},{radius:5.55,tube:.007,color:5101567,rotation:[1.42,-.42,.5]}].map(({radius:S,tube:j,color:A,rotation:O})=>{const M=new Vi(new ky(S,j,8,160),new Gc({color:A,transparent:!0,opacity:.26}));return M.rotation.set(O[0],O[1],O[2]),n.add(M),M}),p=new Cy(6.2,1),y=new Bi(new ba(p),new wa({color:5756904,transparent:!0,opacity:.055}));n.add(y);const k=190,v=new Float32Array(k*3);for(let S=0;S<k;S+=1){const j=7+Math.random()*11,A=Math.random()*Math.PI*2,O=Math.acos(2*Math.random()-1);v[S*3]=j*Math.sin(O)*Math.cos(A),v[S*3+1]=j*Math.cos(O),v[S*3+2]=j*Math.sin(O)*Math.sin(A)}const w=new Sy;w.setAttribute("position",new Ty(v,3));const f=new fd(w,new Ny({color:12055551,size:.035,transparent:!0,opacity:.62}));n.add(f);const g=new My;let x=0;const b=new Py,C=()=>{const{clientWidth:S,clientHeight:j}=t;i.setSize(S,j,!1),r.aspect=S/Math.max(j,1),r.updateProjectionMatrix()},T=S=>{g.x=S.clientX/window.innerWidth-.5,g.y=S.clientY/window.innerHeight-.5},N=()=>{const S=b.getElapsedTime();c.rotation.y=.65+S*.16,c.rotation.x=-.35+Math.sin(S*.45)*.1,c.getObjectByName("cube-frame").rotation.set(S*.18,-S*.24,S*.12),c.getObjectByName("cube-energy").rotation.set(S*.7,S*-.9,S*.45),u.rotation.x=S*-.8,u.rotation.y=S*.65,d.forEach(({pivot:j,cube:A,speed:O,phase:M})=>{j.rotation.z+=O*.008,A.rotation.x+=.006,A.rotation.y+=.009,A.position.y=Math.sin(S*.8+M)*.18,A.scale.setScalar(.88+Math.sin(S*.65+M)*.12),A.getObjectByName("cube-frame").rotation.y=S*-.5+M,A.getObjectByName("cube-energy").rotation.x=S*1.1+M}),h.forEach((j,A)=>{j.rotation.z+=(A%2?-1:1)*8e-4}),y.rotation.y=S*-.025,f.rotation.y=S*.006,r.position.x+=(g.x*1.2-r.position.x)*.025,r.position.y+=(-g.y*.8+1.2-r.position.y)*.025,r.lookAt(0,0,0),i.render(n,r),x=requestAnimationFrame(N)};return C(),N(),window.addEventListener("resize",C),window.addEventListener("pointermove",T,{passive:!0}),()=>{cancelAnimationFrame(x),window.removeEventListener("resize",C),window.removeEventListener("pointermove",T),n.traverse(S=>{(S instanceof Vi||S instanceof Bi||S instanceof fd)&&(S.geometry.dispose(),(Array.isArray(S.material)?S.material:[S.material]).forEach(A=>A.dispose()))}),i.dispose(),t.removeChild(i.domElement)}},[]),a.jsx("div",{ref:e,className:"cyber-webgl absolute inset-0"})},FS=()=>{const e=m.useRef(null),t=m.useRef(null);return m.useEffect(()=>{const n=e.current,r=t.current,i=r==null?void 0:r.getContext("2d");if(!n||!r||!i)return;let o=0,s=[],l=[],c=window.innerWidth,u=window.innerHeight,d=0;const h=window.matchMedia("(prefers-reduced-motion: reduce)").matches,p={x:c/2,y:u/2,targetX:c/2,targetY:u/2,active:!1},y=()=>{const b=p.x/c-.5,C=p.y/u-.5;n.style.setProperty("--mx",`${b}`),n.style.setProperty("--my",`${C}`),n.style.setProperty("--back-shift",`${b*-14}px`),n.style.setProperty("--floor-shift",`${b*24}px`),n.style.setProperty("--hud-shift",`${C*22}px`),n.style.setProperty("--core-rx",`${-18+C*-18}deg`),n.style.setProperty("--core-ry",`${35+b*28}deg`),n.style.setProperty("--scene-x",`${b*20}px`),n.style.setProperty("--scene-y",`${C*14}px`),n.style.setProperty("--scene-rx",`${C*-5}deg`),n.style.setProperty("--scene-ry",`${b*7}deg`),n.style.setProperty("--far-x",`${b*34}px`),n.style.setProperty("--far-y",`${C*20}px`),n.style.setProperty("--near-x",`${b*-42}px`),n.style.setProperty("--near-y",`${C*-28}px`),n.style.setProperty("--panel-x",`${b*28}px`),n.style.setProperty("--panel-y",`${C*18}px`),n.style.setProperty("--panel-inverse-x",`${b*-32}px`),n.style.setProperty("--panel-inverse-y",`${C*-20}px`),n.style.setProperty("--px",`${p.x}px`),n.style.setProperty("--py",`${p.y}px`)},k=()=>{const b=Math.min(92,Math.max(42,Math.floor(c/18)));s=Array.from({length:b},()=>({x:Math.random()*c,y:Math.random()*u,vx:(Math.random()-.5)*.12,vy:(Math.random()-.5)*.12,size:Math.random()*1.35+.45,depth:Math.random()*.75+.25,phase:Math.random()*Math.PI*2}))},v=()=>{c=window.innerWidth,u=window.innerHeight;const b=Math.min(window.devicePixelRatio||1,2);r.width=c*b,r.height=u*b,r.style.width=`${c}px`,r.style.height=`${u}px`,i.setTransform(b,0,0,b,0,0),p.x=p.targetX=c/2,p.y=p.targetY=u/2,k(),y()},w=b=>{p.targetX=b.clientX,p.targetY=b.clientY,p.active=!0},f=()=>{p.targetX=c/2,p.targetY=u/2,p.active=!1},g=b=>{l.push({x:b.clientX,y:b.clientY,radius:12,alpha:.38}),l.length>4&&l.shift()},x=()=>{d+=1,p.x+=(p.targetX-p.x)*(h?1:.075),p.y+=(p.targetY-p.y)*(h?1:.075),y(),i.clearRect(0,0,c,u),i.lineWidth=.7,l=l.filter(b=>b.alpha>.012),l.forEach(b=>{b.radius+=1.8,b.alpha*=.975,i.beginPath(),i.arc(b.x,b.y,b.radius,0,Math.PI*2),i.strokeStyle=`rgba(145, 238, 255, ${b.alpha})`,i.stroke()}),s.forEach((b,C)=>{const T=b.x-p.x,N=b.y-p.y,S=Math.max(1,Math.hypot(T,N));if(p.active&&S<175){const A=(1-S/175)*.018*b.depth;b.vx+=T/S*A,b.vy+=N/S*A}b.vx*=.992,b.vy*=.992,h||(b.x+=b.vx+Math.sin(d*.006+b.phase)*.035*b.depth,b.y+=b.vy+Math.cos(d*.005+b.phase)*.025*b.depth),b.x<-10&&(b.x=c+10),b.x>c+10&&(b.x=-10),b.y<-10&&(b.y=u+10),b.y>u+10&&(b.y=-10);const j=.2+b.depth*.32;i.beginPath(),i.arc(b.x,b.y,b.size*b.depth,0,Math.PI*2),i.fillStyle=`rgba(135, 228, 242, ${j})`,i.fill();for(let A=C+1;A<s.length;A+=1){const O=s[A],M=Math.hypot(b.x-O.x,b.y-O.y);M<112&&(i.beginPath(),i.moveTo(b.x,b.y),i.lineTo(O.x,O.y),i.strokeStyle=`rgba(115, 220, 238, ${.07*(1-M/112)*b.depth})`,i.stroke())}S<220&&(i.beginPath(),i.moveTo(b.x,b.y),i.lineTo(p.x,p.y),i.strokeStyle=`rgba(185, 236, 150, ${.16*(1-S/220)*b.depth})`,i.stroke())}),i.beginPath(),i.arc(p.x,p.y,30,0,Math.PI*2),i.strokeStyle="rgba(150, 235, 245, .1)",i.stroke(),o=requestAnimationFrame(x)};return v(),x(),window.addEventListener("resize",v),window.addEventListener("pointermove",w,{passive:!0}),window.addEventListener("pointerleave",f),window.addEventListener("pointerdown",g,{passive:!0}),()=>{cancelAnimationFrame(o),window.removeEventListener("resize",v),window.removeEventListener("pointermove",w),window.removeEventListener("pointerleave",f),window.removeEventListener("pointerdown",g)}},[]),a.jsxs("div",{ref:e,className:"effect-scene effect-scene-3d fixed inset-0 z-0 overflow-hidden",children:[a.jsx("canvas",{ref:t,className:"cyber-network absolute inset-0"}),a.jsx("div",{className:"cyber-atmosphere cyber-atmosphere-a"}),a.jsx("div",{className:"cyber-atmosphere cyber-atmosphere-b"}),a.jsx("div",{className:"cyber-aurora cyber-aurora-a"}),a.jsx("div",{className:"cyber-aurora cyber-aurora-b"}),a.jsx("div",{className:"cyber-depth-lines"}),a.jsxs("div",{className:"cyber-signal-field",children:[a.jsx("i",{}),a.jsx("i",{}),a.jsx("i",{}),a.jsx("i",{}),a.jsx("i",{}),a.jsx("i",{}),a.jsx("i",{}),a.jsx("i",{})]}),a.jsx("div",{className:"cyber-spotlight"}),a.jsx("div",{className:"cyber-grid cyber-grid-back"}),a.jsx("div",{className:"cyber-grid cyber-grid-floor"}),a.jsx(qS,{}),a.jsxs("div",{className:"cyber-observatory",children:[a.jsxs("div",{className:"cyber-axis",children:[a.jsx("i",{}),a.jsx("i",{}),a.jsx("i",{})]}),a.jsxs("div",{className:"cyber-beacons",children:[a.jsx("i",{}),a.jsx("i",{}),a.jsx("i",{}),a.jsx("i",{}),a.jsx("i",{}),a.jsx("i",{})]}),a.jsxs("div",{className:"cyber-core-plinth",children:[a.jsx("i",{}),a.jsx("i",{}),a.jsx("i",{})]})]}),a.jsxs("div",{className:"cyber-glass cyber-glass-a",children:[a.jsx("span",{children:"VECTOR"}),a.jsx("b",{children:"12.08"}),a.jsx("i",{})]}),a.jsxs("div",{className:"cyber-glass cyber-glass-b",children:[a.jsx("span",{children:"ORBIT"}),a.jsx("b",{children:"STABLE"}),a.jsx("i",{})]}),a.jsxs("div",{className:"cyber-hud cyber-hud-left",children:[a.jsx("span",{children:"SYS / DEPTH"}),a.jsx("b",{children:"03.24"}),a.jsx("i",{})]}),a.jsxs("div",{className:"cyber-hud cyber-hud-right",children:[a.jsx("span",{children:"FIELD / LIVE"}),a.jsx("b",{children:"97.4%"}),a.jsx("i",{})]}),a.jsx("div",{className:"cyber-cursor-halo"}),a.jsx("div",{className:"cyber-vignette"}),a.jsx("div",{className:"cyber-scanlines"}),a.jsx("div",{className:"effect-label left-5 top-24",children:"CYBER OBSERVATORY / INTERACTIVE"})]})},zS=()=>{const{currentEffect:e}=Rv();switch(e){case"christmas":return a.jsx(OS,{});case"tet":return a.jsx(_S,{});case"parallax":return a.jsx(FS,{});default:return null}};var ns=["light","dark"],cd="(prefers-color-scheme: dark)",VS=typeof window>"u",ud=m.createContext(void 0),BS={setTheme:e=>{},themes:[]},Lv=()=>{var e;return(e=m.useContext(ud))!=null?e:BS},US=e=>m.useContext(ud)?e.children:m.createElement($S,{...e}),HS=["light","dark"],$S=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:n=!0,enableColorScheme:r=!0,storageKey:i="theme",themes:o=HS,defaultTheme:s=n?"system":"light",attribute:l="data-theme",value:c,children:u,nonce:d})=>{let[h,p]=m.useState(()=>hp(i,s)),[y,k]=m.useState(()=>hp(i)),v=c?Object.values(c):o,w=m.useCallback(b=>{let C=b;if(!C)return;b==="system"&&n&&(C=pp());let T=c?c[C]:C,N=t?GS():null,S=document.documentElement;if(l==="class"?(S.classList.remove(...v),T&&S.classList.add(T)):T?S.setAttribute(l,T):S.removeAttribute(l),r){let j=ns.includes(s)?s:null,A=ns.includes(C)?C:j;S.style.colorScheme=A}N==null||N()},[]),f=m.useCallback(b=>{let C=typeof b=="function"?b(b):b;p(C);try{localStorage.setItem(i,C)}catch{}},[e]),g=m.useCallback(b=>{let C=pp(b);k(C),h==="system"&&n&&!e&&w("system")},[h,e]);m.useEffect(()=>{let b=window.matchMedia(cd);return b.addListener(g),g(b),()=>b.removeListener(g)},[g]),m.useEffect(()=>{let b=C=>{if(C.key!==i)return;let T=C.newValue||s;f(T)};return window.addEventListener("storage",b),()=>window.removeEventListener("storage",b)},[f]),m.useEffect(()=>{w(e??h)},[e,h]);let x=m.useMemo(()=>({theme:h,setTheme:f,forcedTheme:e,resolvedTheme:h==="system"?y:h,themes:n?[...o,"system"]:o,systemTheme:n?y:void 0}),[h,f,e,y,n,o]);return m.createElement(ud.Provider,{value:x},m.createElement(WS,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:n,enableColorScheme:r,storageKey:i,themes:o,defaultTheme:s,attribute:l,value:c,children:u,attrs:v,nonce:d}),u)},WS=m.memo(({forcedTheme:e,storageKey:t,attribute:n,enableSystem:r,enableColorScheme:i,defaultTheme:o,value:s,attrs:l,nonce:c})=>{let u=o==="system",d=n==="class"?`var d=document.documentElement,c=d.classList;${`c.remove(${l.map(k=>`'${k}'`).join(",")})`};`:`var d=document.documentElement,n='${n}',s='setAttribute';`,h=i?ns.includes(o)&&o?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${o}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",p=(k,v=!1,w=!0)=>{let f=s?s[k]:k,g=v?k+"|| ''":`'${f}'`,x="";return i&&w&&!v&&ns.includes(k)&&(x+=`d.style.colorScheme = '${k}';`),n==="class"?v||f?x+=`c.add(${g})`:x+="null":f&&(x+=`d[s](n,${g})`),x},y=e?`!function(){${d}${p(e)}}()`:r?`!function(){try{${d}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${cd}',m=window.matchMedia(t);if(m.media!==t||m.matches){${p("dark")}}else{${p("light")}}}else if(e){${s?`var x=${JSON.stringify(s)};`:""}${p(s?"x[e]":"e",!0)}}${u?"":"else{"+p(o,!1,!1)+"}"}${h}}catch(e){}}()`:`!function(){try{${d}var e=localStorage.getItem('${t}');if(e){${s?`var x=${JSON.stringify(s)};`:""}${p(s?"x[e]":"e",!0)}}else{${p(o,!1,!1)};}${h}}catch(t){}}();`;return m.createElement("script",{nonce:c,dangerouslySetInnerHTML:{__html:y}})}),hp=(e,t)=>{if(VS)return;let n;try{n=localStorage.getItem(e)||void 0}catch{}return n||t},GS=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},pp=e=>(e||(e=window.matchMedia(cd)),e.matches?"dark":"light");const QS=()=>{const{resolvedTheme:e}=Lv();return m.useEffect(()=>{const t=document.querySelector('meta[name="theme-color"]');t==null||t.setAttribute("content",e==="dark"?"#090c11":"#f7f4eb")},[e]),null},Is=[{id:"languages",name:"Programming Languages",description:"Deep dives into various programming languages, syntax, paradigms, and best use cases",icon:"Code2",color:"category-languages"},{id:"frameworks",name:"Frameworks & Libraries",description:"Comprehensive guides on modern frameworks and libraries for web, mobile, and backend development",icon:"Layers",color:"category-frameworks"},{id:"architecture",name:"Software Architecture",description:"System design principles, architectural patterns, and scalability strategies",icon:"Building2",color:"category-architecture"},{id:"patterns",name:"Design Patterns",description:"Classic and modern design patterns with practical implementations",icon:"Shapes",color:"category-patterns"},{id:"practices",name:"Best Practices",description:"Coding standards, clean code principles, and industry best practices",icon:"CheckCircle",color:"category-practices"},{id:"roadmap",name:"Learning Roadmaps",description:"Structured learning paths for different programming domains and skill levels",icon:"Map",color:"category-roadmap"}],Bc=[{id:"capital-weather-tracker",title:"Capital Weather Tracker",description:"Hệ thống xử lý dữ liệu thời tiết thời gian thực cho các thủ đô trên thế giới.",longDescription:"Ứng dụng thu thập và hiển thị dữ liệu thời tiết real-time từ OpenWeatherMap API, xử lý và visualize dữ liệu cho tất cả các thủ đô trên thế giới với cập nhật liên tục.",technologies:["Python","OpenWeatherMap API","Data Processing"],github:"https://github.com/haihttt974/capital-weather-tracker",image:"/placeholder.svg",featured:!0},{id:"sorting-visualizer",title:"Sorting Visualizer",description:"Ứng dụng trực quan hóa các thuật toán sắp xếp với animation mượt mà.",longDescription:"Công cụ giáo dục giúp hiểu rõ cách hoạt động của các thuật toán sắp xếp như Bubble Sort, Quick Sort, Merge Sort thông qua visualization trực quan.",technologies:["TypeScript","Algorithms","Visualization"],github:"https://github.com/haihttt974/sorting-visualizer",image:"/placeholder.svg",featured:!0},{id:"bookstore-aspnet",title:"BookStore ASP.NET",description:"Website quản lý hiệu sách hoàn chỉnh với ASP.NET Core.",longDescription:"Hệ thống quản lý hiệu sách full-stack với chức năng CRUD, quản lý kho, đơn hàng và báo cáo doanh thu. Xây dựng trên ASP.NET Core và SQL Server.",technologies:["C#","ASP.NET Core","SQL Server","Entity Framework"],github:"https://github.com/haihttt974/thltweb-BookStore-asp.net",image:"/placeholder.svg",featured:!0},{id:"gplx-mobile-app",title:"Ôn thi GPLX Mobile",description:"Ứng dụng di động ôn thi giấy phép lái xe với Flutter.",longDescription:"Ứng dụng mobile cross-platform giúp người dùng ôn luyện lý thuyết thi bằng lái xe với bộ câu hỏi đầy đủ, thi thử và theo dõi tiến độ học tập.",technologies:["Dart","Flutter","Mobile Development"],github:"https://github.com/haihttt974/ltmobile_gplx",image:"/placeholder.svg"},{id:"temperature-influxdb",title:"Temperature VN InfluxDB",description:"Hệ thống thu thập và lưu trữ dữ liệu nhiệt độ vào InfluxDB.",longDescription:"Pipeline dữ liệu IoT thu thập nhiệt độ từ các nguồn khác nhau tại Việt Nam, lưu trữ vào InfluxDB cho phân tích time-series và visualization.",technologies:["Python","InfluxDB","IoT","Time Series"],github:"https://github.com/haihttt974/send-temperature-vn-influxdb",image:"/placeholder.svg"},{id:"christmas-tree",title:"Christmas Tree Effect",description:"Hiệu ứng cây thông Noel tương tác với HTML/CSS/JS.",longDescription:"Trang web hiệu ứng Giáng Sinh với cây thông 3D tương tác, tuyết rơi và ánh sáng lung linh. Hoàn toàn viết bằng vanilla HTML, CSS và JavaScript.",technologies:["HTML5","CSS3","JavaScript","Animation"],github:"https://github.com/haihttt974/christmas_tree.github.io",demo:"https://haihttt974.github.io/christmas_tree.github.io/",image:"/placeholder.svg"},{id:"countdown-newyear",title:"Countdown New Year",description:"Đồng hồ đếm ngược năm mới với hiệu ứng đẹp mắt.",longDescription:"Trang countdown đón năm mới với thiết kế hiện đại, hiệu ứng confetti và animation mượt mà khi đồng hồ điểm 0.",technologies:["HTML5","CSS3","JavaScript"],github:"https://github.com/haihttt974/CountdownNewYear.github.io",demo:"https://haihttt974.github.io/CountdownNewYear.github.io/",image:"/placeholder.svg"},{id:"firework-effect",title:"Firework Effect",description:"Hiệu ứng pháo hoa sống động cho các dịp lễ hội.",longDescription:"Mô phỏng pháo hoa với hiệu ứng particle system, màu sắc rực rỡ và âm thanh. Phù hợp cho các trang countdown và lễ hội.",technologies:["HTML5","Canvas","JavaScript","Animation"],github:"https://github.com/haihttt974/Hfirework.github.io",demo:"https://haihttt974.github.io/Hfirework.github.io/",image:"/placeholder.svg"}],ae={name:"Lê Duy Hải",nickname:"Hai IT",username:"haihttt974",title:"Information Systems Developer",subtitle:"Database • Server-side • DevOps",avatar:"https://avatars.githubusercontent.com/u/202379592?v=4",address:"Đông Hưng Thuận, Ho Chi Minh City",bio:`Tôi là một chuyên gia về Hệ thống thông tin (Information Systems), tập trung vào việc xây dựng các giải pháp có khả năng mở rộng (Scalable) và tin cậy (Reliable).

Chuyên môn của tôi bao gồm: Cơ sở dữ liệu, Server-side Development và DevOps. Tôi đam mê việc tối ưu hóa hiệu suất hệ thống và xây dựng các kiến trúc phần mềm bền vững.

Ngoài lập trình, tôi còn là gia sư Toán, chia sẻ kiến thức và giúp đỡ học sinh phát triển tư duy logic.`,skills:[{category:"Ngôn ngữ lập trình",items:["C","C++","C#","Java","PHP","Python","JavaScript","TypeScript","Dart"]},{category:"Backend & Database",items:[".NET Core","ASP.NET","MySQL","SQL Server","MariaDB","InfluxDB"]},{category:"DevOps & Tools",items:["Docker","Git","GitHub","GitLab","Google Cloud","Fly.io","Postman","Swagger"]},{category:"Frontend & Design",items:["HTML5","CSS3","Bootstrap","jQuery","Figma","Canva"]},{category:"Data Science / AI",items:["TensorFlow","Keras","NumPy","Pandas","scikit-learn","SciPy"]}],social:{github:"https://github.com/haihttt974",linkedin:"https://www.linkedin.com/in/haild/",facebook:"https://facebook.com/haiit.974",instagram:"https://instagram.com/haiit.974",tiktok:"https://tiktok.com/@haiit.974",twitter:"https://x.com/haiit974",email:"ld.hai.insys@gmail.com",secondaryEmail:"leduyhai090704@gmail.com"},socialLinks:[{name:"GitHub",url:"https://github.com/haihttt974",icon:"Github"},{name:"LinkedIn",url:"https://www.linkedin.com/in/haild/",icon:"Linkedin"},{name:"Facebook",url:"https://facebook.com/haiit.974",icon:"Facebook"},{name:"Instagram",url:"https://instagram.com/haiit.974",icon:"Instagram"},{name:"TikTok",url:"https://tiktok.com/@haiit.974",icon:"Music2"},{name:"X (Twitter)",url:"https://x.com/haiit974",icon:"Twitter"},{name:"Primary Email",url:"mailto:ld.hai.insys@gmail.com",icon:"Mail"},{name:"Secondary Email",url:"mailto:leduyhai090704@gmail.com",icon:"Mail"}],experience:[{title:"Information Systems Developer",company:"Freelance & Personal Projects",period:"2023 - Hiện tại",description:"Phát triển các ứng dụng web, mobile và hệ thống xử lý dữ liệu. Chuyên sâu về Database, Server-side và DevOps."},{title:"Math Tutor",company:"Private Tutoring",period:"2022 - Hiện tại",description:"Gia sư Toán học, giúp học sinh phát triển tư duy logic và giải quyết vấn đề."}]},Jo=[{value:"system",label:"Hệ thống",icon:lk},{value:"dark",label:"Tối",icon:pk},{value:"light",label:"Sáng",icon:bk}],mp=()=>{const{language:e}=Pe(),{theme:t="system",setTheme:n}=Lv(),r=Jo.findIndex(u=>u.value===t),i=r===-1?0:r,o=Jo[i],s=Jo[(i+1)%Jo.length],l=o.icon,c=e==="vi"?{system:"Hệ thống",dark:"Tối",light:"Sáng"}:{system:"System",dark:"Dark",light:"Light"};return a.jsx(X,{variant:"outline",size:"icon",className:"border-border/80 bg-background/50","aria-label":`${c[o.value]} → ${c[s.value]}`,title:`${c[o.value]} → ${c[s.value]}`,onClick:()=>n(s.value),children:a.jsx(l,{className:"h-4 w-4"})})},gp=()=>{const{language:e,toggleLanguage:t}=Pe(),n=e==="vi"?"English":"Tiếng Việt";return a.jsxs(X,{variant:"outline",size:"sm",className:"h-10 gap-2 border-border/80 bg-background/50 px-3 font-mono text-xs font-semibold tracking-[.1em]","aria-label":`Switch to ${n}`,title:`Switch to ${n}`,onClick:t,children:[a.jsx(sk,{className:"h-3.5 w-3.5"}),e.toUpperCase()]})},KS=()=>{const{t:e}=Pe(),t=St(),[n,r]=m.useState(!1),i=[{path:"/",label:e("nav.home"),index:"00"},{path:"/projects",label:e("nav.projects"),index:"01"},{path:"/blog",label:e("nav.blog"),index:"02"},{path:"/about",label:e("nav.about"),index:"03"}],o=s=>s==="/"?t.pathname==="/":t.pathname.startsWith(s);return m.useEffect(()=>{r(!1)},[t.pathname]),a.jsx("header",{className:"fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl",children:a.jsxs("div",{className:"container mx-auto px-4",children:[a.jsxs("nav",{className:"flex h-[72px] items-center justify-between",children:[a.jsxs(xe,{to:"/",className:"group flex items-center gap-3",children:[a.jsx("span",{className:"brand-logo flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-primary/35 bg-primary/[.07] p-1 shadow-sm transition-all duration-300 group-hover:border-primary/70 group-hover:bg-primary/10",children:a.jsx("img",{src:"/logo-rm-khongvien.png",alt:"",className:"h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"})}),a.jsxs("span",{children:[a.jsx("span",{className:"block font-mono text-sm font-semibold leading-none",children:"HAI IT"}),a.jsx("span",{className:"mt-1 block font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground",children:"systems journal"})]})]}),a.jsx("ul",{className:"hidden items-center gap-1 md:flex",children:i.map(s=>a.jsx("li",{children:a.jsxs(xe,{to:s.path,className:`flex items-baseline gap-2 rounded-md px-3 py-2 font-mono text-xs transition-colors ${o(s.path)?"bg-primary/10 text-primary":"text-muted-foreground hover:bg-muted hover:text-foreground"}`,children:[a.jsx("span",{className:"text-[11px] opacity-65",children:s.index}),s.label]})},s.path))}),a.jsxs("div",{className:"hidden items-center gap-2 md:flex",children:[a.jsx(gp,{}),a.jsx(mp,{}),a.jsx(X,{asChild:!0,variant:"outline",size:"sm",className:"border-primary/30 font-mono text-xs",children:a.jsxs("a",{href:`mailto:${ae.social.email}`,children:[e("nav.connect")," ",a.jsx(Qt,{className:"ml-2 h-3.5 w-3.5"})]})})]}),a.jsx(X,{variant:"ghost",size:"icon",className:"md:hidden","aria-label":"Mở menu",onClick:()=>r(!n),children:n?a.jsx(Ya,{className:"h-5 w-5"}):a.jsx(hk,{className:"h-5 w-5"})})]}),n&&a.jsxs("div",{className:"border-t border-border/60 py-4 md:hidden",children:[i.map(s=>a.jsxs(xe,{to:s.path,onClick:()=>r(!1),className:`flex items-center justify-between rounded-lg px-4 py-3 font-mono text-sm ${o(s.path)?"bg-primary/10 text-primary":"text-muted-foreground"}`,children:[s.label,a.jsxs("span",{className:"text-xs opacity-65",children:["/",s.index]})]},s.path)),a.jsxs("div",{className:"mt-3 flex items-center justify-between gap-3 border-t border-border/60 px-4 pt-4",children:[a.jsxs("span",{className:"font-mono text-xs uppercase tracking-[.14em] text-muted-foreground",children:[e("nav.language")," / ",e("nav.theme")]}),a.jsxs("div",{className:"flex gap-2",children:[a.jsx(gp,{}),a.jsx(mp,{})]})]})]})]})})},YS=()=>{const{t:e}=Pe();return a.jsx("footer",{className:"border-t border-border/70 bg-card/35",children:a.jsxs("div",{className:"container mx-auto px-4 py-12",children:[a.jsxs("div",{className:"grid gap-10 md:grid-cols-[1.4fr_.6fr_.6fr]",children:[a.jsxs("div",{children:[a.jsx("p",{className:"eyebrow mb-4",children:e("footer.eyebrow")}),a.jsx("h2",{className:"max-w-xl text-2xl font-semibold md:text-3xl",children:e("footer.title")})]}),a.jsxs("div",{className:"font-mono text-xs",children:[a.jsx("p",{className:"mb-4 uppercase tracking-[.18em] text-muted-foreground",children:e("footer.navigate")}),a.jsxs("div",{className:"space-y-3",children:[a.jsx(xe,{className:"block hover:text-primary",to:"/projects",children:e("footer.work")}),a.jsx(xe,{className:"block hover:text-primary",to:"/blog",children:e("footer.notes")}),a.jsx(xe,{className:"block hover:text-primary",to:"/about",children:e("footer.profile")})]})]}),a.jsxs("div",{className:"font-mono text-xs",children:[a.jsx("p",{className:"mb-4 uppercase tracking-[.18em] text-muted-foreground",children:e("footer.connect")}),a.jsxs("div",{className:"space-y-3",children:[a.jsxs("a",{className:"flex items-center gap-2 hover:text-primary",href:ae.social.github,target:"_blank",rel:"noreferrer",children:[a.jsx(qr,{className:"h-3.5 w-3.5"}),"GitHub"]}),a.jsxs("a",{className:"flex items-center gap-2 hover:text-primary",href:ae.social.linkedin,target:"_blank",rel:"noreferrer",children:[a.jsx(ck,{className:"h-3.5 w-3.5"}),"LinkedIn"]}),a.jsxs("a",{className:"flex items-center gap-2 hover:text-primary",href:`mailto:${ae.social.email}`,children:[a.jsx(Af,{className:"h-3.5 w-3.5"}),"Email ",a.jsx(Qt,{className:"h-3 w-3"})]})]})]})]}),a.jsxs("div",{className:"mt-12 flex flex-col gap-2 border-t border-border/70 pt-6 font-mono text-xs uppercase tracking-[.14em] text-muted-foreground sm:flex-row sm:justify-between",children:[a.jsxs("span",{children:["© ",new Date().getFullYear()," Lê Duy Hải / Hai IT"]}),a.jsx("span",{children:e("footer.designed")})]})]})})},ir=({children:e})=>{const{pathname:t,search:n}=St();return m.useEffect(()=>{t==="/blog"&&window.sessionStorage.getItem(`blog-scroll:${t}${n}`)||window.scrollTo({top:0,behavior:"instant"})},[t,n]),a.jsxs("div",{className:"relative flex min-h-screen flex-col overflow-hidden",children:[a.jsx("div",{className:"page-grid pointer-events-none fixed inset-0 z-[-1]"}),a.jsx(KS,{}),a.jsx("main",{className:"flex-1 pt-[72px]",children:e}),a.jsx(YS,{})]})},XS=()=>{const{t:e,language:t}=Pe(),n=m.useRef(null),r=t==="vi"?["Hệ thống backend","Dữ liệu & database","Thực hành DevOps"]:["Backend systems","Data & database","DevOps practice"];return m.useEffect(()=>{const i=n.current;if(!i||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const o=l=>{const c=i.getBoundingClientRect(),u=(l.clientX-c.left)/c.width-.5,d=(l.clientY-c.top)/c.height-.5;i.style.setProperty("--portrait-x",`${u*10}px`),i.style.setProperty("--portrait-y",`${d*10}px`),i.style.setProperty("--spot-x",`${(u+.5)*100}%`),i.style.setProperty("--spot-y",`${(d+.5)*100}%`)},s=()=>{i.style.setProperty("--portrait-x","0px"),i.style.setProperty("--portrait-y","0px"),i.style.setProperty("--spot-x","50%"),i.style.setProperty("--spot-y","50%")};return i.addEventListener("pointermove",o),i.addEventListener("pointerleave",s),()=>{i.removeEventListener("pointermove",o),i.removeEventListener("pointerleave",s)}},[]),a.jsxs("section",{className:"relative overflow-hidden border-b border-border/70",children:[a.jsx("div",{className:"hero-orbit pointer-events-none absolute right-[4%] top-[12%] h-72 w-72 rounded-full border border-primary/15"}),a.jsx("div",{className:"absolute -right-24 top-10 h-[34rem] w-[34rem] rounded-full bg-primary/[.07] blur-[120px]"}),a.jsxs("div",{className:"container relative mx-auto px-4 py-6 md:py-8",children:[a.jsxs("div",{className:"mb-8 flex items-center justify-between border-y border-border/70 py-3 font-mono text-xs uppercase tracking-[.16em] text-muted-foreground",children:[a.jsx("span",{children:e("hero.log")}),a.jsx("span",{className:"hidden sm:block",children:"Vietnam · GMT+7"}),a.jsxs("span",{className:"flex items-center gap-2 text-primary",children:[a.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-primary"}),e("hero.open")]})]}),a.jsxs("div",{className:"grid items-stretch gap-7 lg:grid-cols-[1.25fr_.75fr]",children:[a.jsxs("div",{className:"flex flex-col justify-between py-2 lg:py-5",children:[a.jsxs("div",{children:[a.jsxs("p",{className:"eyebrow mb-6 animate-fade-in",children:[e("hero.hello")," ",ae.nickname]}),a.jsxs("h1",{className:"max-w-4xl text-[clamp(3.15rem,6.8vw,6.8rem)] font-semibold leading-[.98] tracking-[-.075em] animate-slide-up",children:[a.jsx("span",{className:"block whitespace-nowrap",children:e("hero.line1")}),a.jsx("span",{className:"block text-muted-foreground",children:e("hero.line2")}),a.jsx("span",{className:"text-gradient",children:e("hero.line3")})]}),a.jsxs("div",{className:"mt-7 grid max-w-2xl gap-5 border-l border-primary/40 pl-5 sm:grid-cols-[1fr_auto] sm:items-end",children:[a.jsxs("p",{className:"text-base leading-relaxed text-muted-foreground md:text-lg",children:[t==="vi"?"Tôi là":"I am"," ",a.jsx("strong",{className:"font-medium text-foreground",children:ae.name}),", ",e("hero.bio")]}),a.jsx(Ef,{className:"hidden h-10 w-10 text-primary sm:block"})]})]}),a.jsxs("div",{children:[a.jsxs("div",{className:"mt-7 flex flex-wrap gap-3",children:[a.jsx(X,{asChild:!0,size:"lg",className:"font-mono text-xs",children:a.jsxs(xe,{to:"/projects",children:[e("hero.work")," ",a.jsx(Qt,{className:"ml-2 h-4 w-4"})]})}),a.jsx(X,{asChild:!0,size:"lg",variant:"outline",className:"font-mono text-xs",children:a.jsxs(xe,{to:"/blog",children:[a.jsx($0,{className:"mr-2 h-4 w-4"}),e("hero.notes")]})})]}),a.jsx("div",{className:"mt-7 grid border-y border-border/70 sm:grid-cols-3",children:[["08+",e("hero.repositories")],["09+",e("hero.languages")],["33",e("hero.journal")]].map(([i,o],s)=>a.jsxs("div",{className:`py-4 ${s>0?"border-t border-border/70 sm:border-l sm:border-t-0 sm:pl-5":""}`,children:[a.jsx("span",{className:"font-mono text-xl font-semibold text-primary",children:i}),a.jsx("span",{className:"ml-2 font-mono text-[11px] uppercase tracking-wider text-muted-foreground",children:o})]},o))})]})]}),a.jsxs("aside",{ref:n,className:"portrait-stage journal-card group mx-auto aspect-[4/5] w-full max-w-[440px] animate-slide-up lg:self-center",style:{animationDelay:".12s"},children:[a.jsx("div",{className:"portrait-index absolute -left-4 top-12 z-20 hidden rounded-md border border-primary/30 bg-background/90 px-3 py-2 font-mono text-[11px] uppercase tracking-[.16em] text-primary backdrop-blur md:block",children:"ID / LDH-974"}),a.jsx("div",{className:"portrait-crosshair pointer-events-none absolute left-1/2 top-1/2 z-20 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"}),a.jsx("img",{src:ae.avatar,alt:`Chân dung ${ae.name}`,className:"portrait-image absolute inset-0 h-full w-full object-cover object-center"}),a.jsx("div",{className:"portrait-light pointer-events-none absolute inset-0 z-10"}),a.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent"}),a.jsxs("div",{className:"absolute inset-x-0 top-0 flex items-center justify-between p-5 font-mono text-[11px] uppercase tracking-[.16em] text-foreground drop-shadow-md",children:[a.jsxs("span",{children:[e("hero.portrait")," / 001"]}),a.jsx("span",{className:"rounded-full border border-white/25 bg-black/25 px-3 py-1.5 backdrop-blur-md",children:"Hai IT"})]}),a.jsxs("div",{className:"absolute inset-x-0 bottom-0 p-5 md:p-7",children:[a.jsx("div",{className:"mb-5 flex flex-wrap gap-2",children:r.map(i=>a.jsx("span",{className:"rounded-full border border-white/20 bg-background/65 px-3 py-1.5 font-mono text-[11px] font-medium uppercase tracking-wider text-foreground backdrop-blur-md",children:i},i))}),a.jsxs("div",{className:"border-t border-white/20 pt-5",children:[a.jsx("p",{className:"text-3xl font-semibold md:text-4xl",children:ae.name}),a.jsxs("div",{className:"mt-3 flex flex-wrap items-center justify-between gap-3 font-mono text-xs uppercase tracking-wider text-foreground/80",children:[a.jsx("span",{children:ae.title}),a.jsxs("span",{className:"flex items-center gap-1.5",children:[a.jsx(If,{className:"h-3 w-3 text-primary"})," Vietnam"]})]}),a.jsxs("a",{href:ae.social.github,target:"_blank",rel:"noreferrer",className:"mt-5 flex items-center justify-between rounded-lg border border-white/20 bg-background/65 px-4 py-3 font-mono text-xs uppercase tracking-wider backdrop-blur-md transition-colors hover:border-primary hover:text-primary",children:[a.jsxs("span",{className:"flex items-center gap-2",children:[a.jsx(qr,{className:"h-3.5 w-3.5"})," github.com/haihttt974"]}),a.jsx(Qt,{className:"h-3.5 w-3.5"})]})]})]})]})]}),a.jsx("div",{className:"hero-marquee mt-7 overflow-hidden border-y border-border/70 py-3 font-mono text-[11px] uppercase tracking-[.18em] text-muted-foreground",children:a.jsx("div",{className:"hero-marquee-track flex w-max items-center gap-8",children:[...Array(2)].flatMap((i,o)=>(t==="vi"?["Hệ thống backend","Tư duy dữ liệu","Học tập công khai","Thực hành DevOps","Xây · Quan sát · Giải thích · Cải tiến"]:["Backend systems","Database thinking","Learning in public","DevOps practice","Build · Observe · Explain · Improve"]).map(s=>a.jsxs("span",{className:"flex items-center gap-8",children:[a.jsx("span",{children:s}),a.jsx("span",{className:"text-primary",children:"✦"})]},`${o}-${s}`)))})})]})]})},JS={initial:{opacity:0,y:10},animate:{opacity:1,y:0,transition:{duration:.38,ease:[.22,1,.36,1]}},exit:{opacity:0,y:-6,transition:{duration:.2,ease:[.4,0,1,1]}}},ai={hidden:{},visible:{transition:{staggerChildren:.065,delayChildren:.04}}},si={hidden:{opacity:0,y:18,scale:.985},visible:{opacity:1,y:0,scale:1,transition:{duration:.48,ease:[.22,1,.36,1]}}},Rs={hidden:{opacity:0,y:28},visible:{opacity:1,y:0,transition:{duration:.62,ease:[.22,1,.36,1]}}},li={once:!0,amount:.16},ZS=()=>{const{t:e}=Pe(),t=On();return a.jsx(we.section,{className:"border-b border-border/70 bg-card/25 py-20 md:py-28",variants:t?void 0:Rs,initial:t?!1:"hidden",whileInView:"visible",viewport:li,children:a.jsxs("div",{className:"container mx-auto px-4",children:[a.jsxs("div",{className:"mb-10 max-w-3xl",children:[a.jsx("p",{className:"eyebrow mb-4",children:e("home.map.eyebrow")}),a.jsxs("h2",{className:"text-4xl md:text-6xl",children:[e("home.map.title1")," ",a.jsx("span",{className:"text-gradient",children:e("home.map.title2")})]}),a.jsx("p",{className:"mt-5 max-w-xl text-muted-foreground",children:e("home.map.desc")})]}),a.jsx(we.div,{className:"grid border-l border-t border-border/70 md:grid-cols-2 lg:grid-cols-3",variants:t?void 0:ai,children:Is.map((n,r)=>a.jsx(we.div,{variants:t?void 0:si,children:a.jsxs(xe,{to:`/blog?category=${n.id}`,className:"group block min-h-56 border-b border-r border-border/70 bg-background/30 p-6 transition-colors hover:bg-primary/[.04]",children:[a.jsxs("div",{className:"flex items-start justify-between",children:[a.jsxs("span",{className:"font-mono text-xs font-medium text-primary",children:["MAP / 0",r+1]}),a.jsx(Qt,{className:"h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary"})]}),a.jsx("h3",{className:"mt-12 text-xl group-hover:text-primary",children:e(`category.${n.id}`)}),a.jsx("p",{className:"mt-3 text-sm leading-relaxed text-muted-foreground",children:n.description})]})},n.id))})]})})},eT={id:"understanding-solid-principles",title:"Understanding SOLID Principles in Modern Software Development",titleVi:"Hiểu đúng SOLID trong phát triển phần mềm hiện đại",excerpt:"A practical introduction to SOLID principles with TypeScript-oriented examples and guidance on when to apply them.",excerptVi:"Hướng dẫn thực tế về SOLID cùng ví dụ TypeScript và cách áp dụng có chọn lọc trong dự án.",content:`# Understanding SOLID Principles in Modern Software Development

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
- Áp dụng nguyên tắc ở nơi chúng giảm độ phức tạp thật.`,category:"patterns",tags:["SOLID","OOP","TypeScript","Clean Code"],date:"2026-05-31",readTime:"5 min",readTimeVi:"5 phút",featured:!0},tT={id:"react-performance-optimization",title:"React Performance Optimization: Measure Before You Optimize",titleVi:"Tối ưu hiệu năng React: Đo lường trước khi tối ưu",excerpt:"A practical note on finding React performance bottlenecks with profiling tools before applying optimization patterns.",excerptVi:"Ghi chú thực tế về cách tìm điểm nghẽn hiệu năng React bằng profiler trước khi áp dụng các mẫu tối ưu.",content:`# React Performance Optimization: Measure Before You Optimize

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
- Nhớ rằng vấn đề hiệu năng có thể đến từ network, bundle size, ảnh hoặc CSS, không chỉ React.`,category:"frameworks",tags:["React","Performance","JavaScript","Frontend"],date:"2026-05-24",readTime:"5 min",readTimeVi:"5 phút",featured:!0},nT={id:"typescript-advanced-types",title:"Understanding TypeScript Advanced Types",titleVi:"Hiểu các kiểu nâng cao trong TypeScript",excerpt:"A practical introduction to conditional types, mapped types, template literal types, and type inference in TypeScript.",excerptVi:"Giới thiệu thực tế về conditional type, mapped type, template literal type và cơ chế suy luận kiểu trong TypeScript.",content:`# Understanding TypeScript Advanced Types

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
- Validate dữ liệu bên ngoài ở runtime.`,category:"languages",tags:["TypeScript","Types","JavaScript"],date:"2026-05-22",readTime:"4 min",readTimeVi:"4 phút"},rT={id:"microservices-architecture",title:"Microservices Architecture Basics and Trade-offs",titleVi:"Nền tảng Microservices và các trade-off cần hiểu",excerpt:"A practical overview of when microservices help, what they cost, and which design concerns appear early.",excerptVi:"Tổng quan thực tế về khi nào microservices hữu ích, chi phí đi kèm và các vấn đề thiết kế cần biết sớm.",content:`# Microservices Architecture Basics and Trade-offs

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
- Ưu tiên modular monolith cho đến khi nhu cầu phân tán thật sự rõ.`,category:"architecture",tags:["Microservices","Docker","Kubernetes","System Design"],date:"2026-05-26",readTime:"5 min",readTimeVi:"5 phút",featured:!0},iT={id:"clean-code-practices",title:"Writing Clean, Maintainable Code",titleVi:"Viết mã sạch và dễ bảo trì",excerpt:"Practical clean code habits that make software easier to read, change, test, and review without adding unnecessary abstraction.",excerptVi:"Các thói quen clean code thực tế giúp phần mềm dễ đọc, dễ sửa, dễ kiểm thử và dễ review mà không tạo abstraction không cần thiết.",content:`# Writing Clean, Maintainable Code

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
- Ưu tiên sự rõ ràng hữu ích thay vì abstraction hình thức.`,category:"practices",tags:["Clean Code","Refactoring","Best Practices"],date:"2026-05-21",readTime:"5 min",readTimeVi:"5 phút"},oT={id:"frontend-developer-roadmap",title:"Frontend Developer Roadmap for Building Strong Fundamentals",titleVi:"Lộ trình Frontend Developer để xây nền tảng vững",excerpt:"A practical learning path for building solid frontend fundamentals through HTML, CSS, JavaScript, frameworks, testing, and deployment.",excerptVi:"Lộ trình học tập thực tế để xây nền tảng frontend qua HTML, CSS, JavaScript, framework, kiểm thử và triển khai.",content:`# Frontend Developer Roadmap for Building Strong Fundamentals

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
- Tập trung chiều sâu trước khi chạy theo mọi tool mới.`,category:"roadmap",tags:["Roadmap","Frontend","Career","Learning"],date:"2026-05-20",readTime:"5 min",readTimeVi:"5 phút"},aT={id:"typescript-type-system-practical-guide",title:"TypeScript's Type System: From Safer Code to Better Domain Design",titleVi:"Hệ thống kiểu TypeScript: Từ mã an toàn đến thiết kế nghiệp vụ tốt hơn",excerpt:"A practical guide to modeling domain rules with unions, generics, narrowing, and type-safe boundaries instead of treating TypeScript as annotated JavaScript.",excerptVi:"Hướng dẫn thực tế về cách mô hình hóa quy tắc nghiệp vụ bằng union, generic, narrowing và các biên an toàn kiểu dữ liệu.",content:`# TypeScript's Type System: From Safer Code to Better Domain Design

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

TypeScript không thay thế kiểm thử hay xác thực runtime. Sức mạnh thật sự của nó là làm cho các giả định trở nên hữu hình. Khi mô hình kiểu truyền đạt tốt nghiệp vụ, việc triển khai, review, refactor và mở rộng đều trở nên dễ dàng hơn.`,category:"languages",tags:["TypeScript","Type System","Domain Modeling","Generics"],date:"2026-06-13",readTime:"5 min",readTimeVi:"5 phút",featured:!0},sT={id:"python-reliable-applications",title:"Python Beyond Scripts: Structuring Reliable Applications",titleVi:"Python vượt ra ngoài script: Xây dựng ứng dụng đáng tin cậy",excerpt:"How to move from quick Python scripts to maintainable applications with clear boundaries, type hints, dependency management, testing, and observability.",excerptVi:"Cách chuyển từ script Python nhanh sang ứng dụng dễ bảo trì bằng ranh giới rõ ràng, type hint, quản lý dependency, kiểm thử và observability.",content:`# Python Beyond Scripts: Structuring Reliable Applications

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

Python tốt vẫn nên dễ đọc và trực tiếp. Độ tin cậy đến từ ranh giới rõ ràng cùng vòng phản hồi kỷ luật, không phải từ việc biến ứng dụng nhỏ thành một framework trừu tượng.`,category:"languages",tags:["Python","Architecture","Testing","Maintainability"],date:"2026-06-10",readTime:"6 min",readTimeVi:"6 phút"},lT={id:"csharp-modern-backend-guide",title:"Modern C# for Backend Systems: Patterns That Improve Correctness",titleVi:"C# hiện đại cho hệ thống Backend: Những mẫu giúp tăng tính đúng đắn",excerpt:"A focused guide to records, nullable reference types, async workflows, result modeling, and dependency boundaries in modern C# backend applications.",excerptVi:"Hướng dẫn tập trung vào record, nullable reference type, async, mô hình hóa kết quả và ranh giới dependency trong backend C# hiện đại.",content:`# Modern C# for Backend Systems

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

C# tốt nhất không phải là C# thông minh nhất. Mã tốt truyền đạt ràng buộc rõ ràng, xem compiler như một đối tác thiết kế và không để chi tiết hạ tầng lấn át nghiệp vụ.`,category:"languages",tags:["C#",".NET","Backend","Domain Modeling"],date:"2026-06-06",readTime:"6 min",readTimeVi:"6 phút"},cT={id:"javascript-async-patterns",title:"JavaScript Async Patterns: Promises, Async/Await, and Queues",titleVi:"Các mẫu xử lý bất đồng bộ trong JavaScript: Promise, Async/Await và Queue",excerpt:"A practical guide to organizing asynchronous JavaScript with promises, async/await, controlled parallelism, queues, and reliable error handling.",excerptVi:"Hướng dẫn thực tế để tổ chức xử lý bất đồng bộ trong JavaScript bằng Promise, async/await, chạy song song có kiểm soát, queue và xử lý lỗi đáng tin cậy.",content:`# JavaScript Async Patterns: Promises, Async/Await, and Queues

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

Async code có cấu trúc tốt giúp ứng dụng phản hồi nhanh hơn, lỗi rõ ràng hơn và dễ mở rộng hơn khi tính năng ngày càng nhiều.`,category:"languages",tags:["JavaScript","Async/Await","Promises","Concurrency","Frontend"],date:"2026-06-20",readTime:"8 min",readTimeVi:"8 phút"},uT={id:"python-data-pipeline-basics",title:"Python Data Pipeline Basics for Reliable Automation",titleVi:"Nền tảng pipeline dữ liệu Python cho tự động hóa ổn định",excerpt:"A practical structure for building Python data pipelines that ingest, validate, transform, store, and monitor data reliably.",excerptVi:"Cấu trúc thực tế để xây dựng pipeline dữ liệu Python có khả năng thu thập, kiểm tra, biến đổi, lưu trữ và giám sát dữ liệu ổn định.",content:`# Python Data Pipeline Basics for Reliable Automation

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

Khi automation trở thành một phần của workflow thật, độ tin cậy quan trọng hơn code thông minh. Một cấu trúc pipeline rõ ràng giúp script Python trở thành hệ thống có thể phụ thuộc vào.`,category:"languages",tags:["Python","Data Pipeline","Automation","ETL","Backend"],date:"2026-06-18",readTime:"8 min",readTimeVi:"8 phút"},dT={id:"csharp-linq-practical-guide",title:"C# LINQ Practical Guide for Cleaner Business Logic",titleVi:"Hướng dẫn LINQ thực tế trong C# cho business logic sạch hơn",excerpt:"A practical guide to using LINQ for readable filtering, grouping, projection, and business rules without hiding intent or hurting performance.",excerptVi:"Hướng dẫn thực tế để dùng LINQ cho lọc, nhóm, chuyển đổi dữ liệu và business rule dễ đọc mà không che giấu ý định hoặc làm giảm hiệu năng.",content:`# C# LINQ Practical Guide for Cleaner Business Logic

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

Business logic sạch không phải là tránh vòng lặp bằng mọi giá. Điều quan trọng là rule phải dễ nhìn thấy. LINQ là công cụ mạnh cho việc đó khi query kể cùng một câu chuyện với domain.`,category:"languages",tags:["C#","LINQ",".NET","Clean Code","Business Logic"],date:"2026-06-21",readTime:"7 min",readTimeVi:"7 phút"},hT={id:"typescript-generics-cookbook",title:"TypeScript Generics Cookbook for Everyday Components",titleVi:"Cẩm nang TypeScript Generics cho component hằng ngày",excerpt:"Reusable generic patterns for UI components, API helpers, and utility functions.",excerptVi:"Các mẫu generic tái sử dụng cho UI component, API helper và utility function.",content:`# TypeScript Generics Cookbook

Draft content.`,contentVi:`# Cẩm nang TypeScript Generics

Nội dung nháp.`,category:"languages",tags:["TypeScript","Generics","Frontend","Patterns"],date:"2026-06-19",readTime:"2 min",readTimeVi:"2 phút"},pT={id:"react-query-data-fetching",title:"React Query Data Fetching Patterns for Growing Apps",titleVi:"Mẫu fetch dữ liệu với React Query cho ứng dụng đang phát triển",excerpt:"Patterns for caching, invalidation, loading states, and optimistic updates.",excerptVi:"Các mẫu cho cache, invalidation, trạng thái tải và cập nhật lạc quan.",content:`# React Query Data Fetching Patterns

Draft content.`,contentVi:`# Mẫu fetch dữ liệu với React Query

Nội dung nháp.`,category:"frameworks",tags:["React","React Query","Data Fetching","Frontend"],date:"2026-06-01",readTime:"2 min",readTimeVi:"2 phút"},mT={id:"nextjs-routing-strategies",title:"Next.js Routing Strategies for Content and Product Pages",titleVi:"Chiến lược routing Next.js cho trang nội dung và sản phẩm",excerpt:"How to choose route structure, layouts, metadata, and dynamic segments.",excerptVi:"Cách chọn cấu trúc route, layout, metadata và dynamic segment.",content:`# Next.js Routing Strategies

Draft content.`,contentVi:`# Chiến lược routing Next.js

Nội dung nháp.`,category:"frameworks",tags:["Next.js","React","Routing","SEO"],date:"2026-06-17",readTime:"2 min",readTimeVi:"2 phút"},gT={id:"aspnet-core-api-versioning",title:"ASP.NET Core API Versioning Without Breaking Clients",titleVi:"Versioning API ASP.NET Core không làm hỏng client",excerpt:"A compact plan for evolving APIs while keeping existing consumers stable.",excerptVi:"Kế hoạch gọn để phát triển API mà vẫn giữ client hiện tại ổn định.",content:`# ASP.NET Core API Versioning

Draft content.`,contentVi:`# Versioning API ASP.NET Core

Nội dung nháp.`,category:"frameworks",tags:["ASP.NET Core","API","Backend","Versioning"],date:"2026-06-16",readTime:"2 min",readTimeVi:"2 phút"},fT={id:"flutter-state-management-options",title:"Flutter State Management Options: Choosing the Right Fit",titleVi:"Các lựa chọn quản lý state trong Flutter: Chọn cách phù hợp",excerpt:"A comparison of state management approaches for small and growing Flutter apps.",excerptVi:"So sánh các cách quản lý state cho ứng dụng Flutter nhỏ và đang mở rộng.",content:`# Flutter State Management Options

Draft content.`,contentVi:`# Các lựa chọn quản lý state trong Flutter

Nội dung nháp.`,category:"frameworks",tags:["Flutter","Dart","State Management","Mobile"],date:"2026-06-15",readTime:"2 min",readTimeVi:"2 phút"},vT={id:"database-indexing-strategy",title:"Database Indexing Strategy for Faster Queries",titleVi:"Chiến lược indexing database để truy vấn nhanh hơn",excerpt:"A practical guide to choosing indexes based on access patterns and query plans.",excerptVi:"Hướng dẫn chọn index dựa trên pattern truy cập và query plan.",content:`# Database Indexing Strategy

Draft content.`,contentVi:`# Chiến lược indexing database

Nội dung nháp.`,category:"architecture",tags:["Database","SQL","Performance","Backend"],date:"2026-06-14",readTime:"2 min",readTimeVi:"2 phút"},yT={id:"event-driven-architecture-basics",title:"Event-Driven Architecture Basics for Web Systems",titleVi:"Nền tảng kiến trúc hướng sự kiện cho hệ thống web",excerpt:"When events help, when they hurt, and how to keep message flows observable.",excerptVi:"Khi event hữu ích, khi gây hại và cách giữ luồng message dễ quan sát.",content:`# Event-Driven Architecture Basics

Draft content.`,contentVi:`# Nền tảng kiến trúc hướng sự kiện

Nội dung nháp.`,category:"architecture",tags:["Architecture","Events","Messaging","Scalability"],date:"2026-06-12",readTime:"2 min",readTimeVi:"2 phút"},xT={id:"api-gateway-design-notes",title:"API Gateway Design Notes for Distributed Systems",titleVi:"Ghi chú thiết kế API Gateway cho hệ thống phân tán",excerpt:"Routing, authentication, rate limiting, and observability concerns at the gateway layer.",excerptVi:"Routing, xác thực, rate limit và observability ở lớp gateway.",content:`# API Gateway Design Notes for Distributed Systems

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
- Tránh biến gateway thành tầng business logic.`,category:"architecture",tags:["API Gateway","Architecture","Security","Microservices"],date:"2026-06-11",readTime:"8 min",readTimeVi:"8 phút"},bT={id:"caching-strategies-web-apps",title:"Caching Strategies for Web Applications",titleVi:"Chiến lược caching cho ứng dụng web",excerpt:"A compact map of browser cache, CDN cache, API cache, and database cache tradeoffs.",excerptVi:"Bản đồ ngắn về cache trình duyệt, CDN, API và database cùng tradeoff.",content:`# Caching Strategies for Web Applications

Draft content.`,contentVi:`# Chiến lược caching cho ứng dụng web

Nội dung nháp.`,category:"architecture",tags:["Caching","Performance","Architecture","Web"],date:"2026-06-09",readTime:"2 min",readTimeVi:"2 phút"},wT={id:"repository-pattern-modern-apps",title:"Repository Pattern in Modern Applications",titleVi:"Repository Pattern trong ứng dụng hiện đại",excerpt:"Where the repository pattern is useful, and where it becomes unnecessary indirection.",excerptVi:"Khi Repository Pattern hữu ích và khi nó trở thành lớp gián tiếp không cần thiết.",content:`# Repository Pattern in Modern Applications

Draft content.`,contentVi:`# Repository Pattern trong ứng dụng hiện đại

Nội dung nháp.`,category:"patterns",tags:["Repository Pattern","Design Patterns","Backend","Architecture"],date:"2026-06-08",readTime:"2 min",readTimeVi:"2 phút"},kT={id:"factory-pattern-ui-components",title:"Factory Pattern for Configurable UI Components",titleVi:"Factory Pattern cho UI component có cấu hình",excerpt:"Using factories to create consistent UI variants without spreading conditionals everywhere.",excerptVi:"Dùng factory để tạo biến thể UI nhất quán mà không rải conditional khắp nơi.",content:`# Factory Pattern for Configurable UI Components

Draft content.`,contentVi:`# Factory Pattern cho UI component

Nội dung nháp.`,category:"patterns",tags:["Factory Pattern","React","Design Patterns","UI"],date:"2026-06-07",readTime:"2 min",readTimeVi:"2 phút"},CT={id:"adapter-pattern-api-clients",title:"Adapter Pattern for API Clients",titleVi:"Adapter Pattern cho API client",excerpt:"A pattern for protecting application code from external payload changes.",excerptVi:"Một mẫu giúp bảo vệ code ứng dụng khỏi thay đổi payload bên ngoài.",content:`# Adapter Pattern for API Clients

Draft content.`,contentVi:`# Adapter Pattern cho API client

Nội dung nháp.`,category:"patterns",tags:["Adapter Pattern","API","TypeScript","Clean Code"],date:"2026-06-05",readTime:"2 min",readTimeVi:"2 phút"},ST={id:"observer-pattern-real-time-ui",title:"Observer Pattern for Real-Time UI Updates",titleVi:"Observer Pattern cho cập nhật UI thời gian thực",excerpt:"How observer-style flows appear in subscriptions, stores, and live dashboards.",excerptVi:"Cách luồng kiểu observer xuất hiện trong subscription, store và dashboard realtime.",content:`# Observer Pattern for Real-Time UI Updates

Draft content.`,contentVi:`# Observer Pattern cho UI realtime

Nội dung nháp.`,category:"patterns",tags:["Observer Pattern","Realtime","UI","Design Patterns"],date:"2026-06-04",readTime:"2 min",readTimeVi:"2 phút"},TT={id:"git-workflow-team-projects",title:"Git Workflow for Small Team Projects",titleVi:"Git workflow cho dự án team nhỏ",excerpt:"A simple workflow for branches, reviews, releases, and avoiding painful merges.",excerptVi:"Workflow đơn giản cho branch, review, release và tránh merge khó chịu.",content:`# Git Workflow for Small Team Projects

Draft content.`,contentVi:`# Git workflow cho dự án team nhỏ

Nội dung nháp.`,category:"practices",tags:["Git","Workflow","Teamwork","Best Practices"],date:"2026-06-03",readTime:"2 min",readTimeVi:"2 phút"},NT={id:"code-review-checklist",title:"Code Review Checklist for Practical Engineering Teams",titleVi:"Checklist code review cho đội kỹ thuật thực tế",excerpt:"A review checklist focused on correctness, maintainability, security, and product behavior.",excerptVi:"Checklist review tập trung vào đúng logic, bảo trì, bảo mật và hành vi sản phẩm.",content:`# Code Review Checklist for Practical Engineering Teams

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
- Dùng review để để lại ngữ cảnh hữu ích cho team.`,category:"practices",tags:["Code Review","Best Practices","Quality","Teamwork"],date:"2026-06-02",readTime:"8 min",readTimeVi:"8 phút"},PT={id:"testing-strategy-frontend-backend",title:"Testing Strategy Across Frontend and Backend",titleVi:"Chiến lược kiểm thử cho frontend và backend",excerpt:"How to balance unit tests, integration tests, and end-to-end coverage.",excerptVi:"Cách cân bằng unit test, integration test và end-to-end test.",content:`# Testing Strategy Across Frontend and Backend

Draft content.`,contentVi:`# Chiến lược kiểm thử frontend và backend

Nội dung nháp.`,category:"practices",tags:["Testing","Frontend","Backend","Quality"],date:"2026-05-29",readTime:"2 min",readTimeVi:"2 phút"},jT={id:"logging-monitoring-basics",title:"Logging and Monitoring Basics for Web Applications",titleVi:"Nền tảng logging và monitoring cho ứng dụng web",excerpt:"What to log, what to measure, and how to make application issues easier to debug.",excerptVi:"Nên log gì, đo gì và cách giúp lỗi ứng dụng dễ debug hơn.",content:`# Logging and Monitoring Basics

Draft content.`,contentVi:`# Nền tảng logging và monitoring

Nội dung nháp.`,category:"practices",tags:["Logging","Monitoring","DevOps","Debugging"],date:"2026-05-30",readTime:"2 min",readTimeVi:"2 phút"},ET={id:"backend-developer-roadmap",title:"Backend Developer Roadmap: From Fundamentals to Deployment",titleVi:"Lộ trình Backend Developer từ nền tảng đến triển khai",excerpt:"A practical learning path covering HTTP, databases, API design, testing, deployment, and basic operations.",excerptVi:"Lộ trình thực tế gồm HTTP, database, thiết kế API, kiểm thử, triển khai và vận hành cơ bản.",content:`# Backend Developer Roadmap: From Fundamentals to Deployment

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
- Chỉ thêm kiến trúc nâng cao sau khi nền tảng ổn.`,category:"roadmap",tags:["Backend","Roadmap","API","Career"],date:"2026-05-28",readTime:"8 min",readTimeVi:"8 phút"},AT={id:"devops-roadmap-for-developers",title:"DevOps Roadmap for Developers",titleVi:"Lộ trình DevOps cho lập trình viên",excerpt:"A practical path through Linux, Docker, CI/CD, cloud deployment, and observability.",excerptVi:"Lộ trình thực tế qua Linux, Docker, CI/CD, cloud deployment và observability.",content:`# DevOps Roadmap for Developers

Draft content.`,contentVi:`# Lộ trình DevOps cho lập trình viên

Nội dung nháp.`,category:"roadmap",tags:["DevOps","Docker","CI/CD","Roadmap"],date:"2026-05-27",readTime:"2 min",readTimeVi:"2 phút"},IT={id:"database-learning-roadmap",title:"Database Learning Roadmap for Application Developers",titleVi:"Lộ trình học database cho lập trình viên ứng dụng",excerpt:"A structured path from SQL basics to indexing, transactions, modeling, and operations.",excerptVi:"Lộ trình từ SQL cơ bản đến indexing, transaction, modeling và vận hành.",content:`# Database Learning Roadmap for Application Developers

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
- Xem migration và backup là một phần của development, không chỉ operations.`,category:"roadmap",tags:["Database","SQL","Roadmap","Backend"],date:"2026-05-25",readTime:"8 min",readTimeVi:"8 phút"},RT={id:"mobile-developer-roadmap",title:"Mobile Developer Roadmap for Cross-Platform Apps",titleVi:"Lộ trình Mobile Developer cho ứng dụng cross-platform",excerpt:"A path covering UI, state, storage, APIs, testing, releases, and store deployment.",excerptVi:"Lộ trình gồm UI, state, storage, API, testing, release và triển khai store.",content:`# Mobile Developer Roadmap for Cross-Platform Apps

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
- Dùng cross-platform tool một cách thực tế, không máy móc.`,category:"roadmap",tags:["Mobile","Flutter","Roadmap","Career"],date:"2026-05-23",readTime:"8 min",readTimeVi:"8 phút"},Dv=(e,t)=>({...e,title:t==="vi"?e.titleVi??e.title:e.title,excerpt:t==="vi"?e.excerptVi??e.excerpt:e.excerpt,content:t==="vi"?e.contentVi??e.content:e.content,readTime:t==="vi"?e.readTimeVi??e.readTime:e.readTime}),dd=[cT,uT,dT,hT,pT,mT,gT,fT,vT,yT,xT,bT,wT,kT,CT,ST,TT,NT,PT,jT,ET,AT,IT,RT,eT,tT,nT,rT,iT,oT,aT,sT,lT],MT="portfolio-cms-static:",Ov=`${MT}view-counts`,_v=()=>typeof window<"u"&&typeof window.localStorage<"u",LT=(e,t)=>{if(!_v())return t;try{const n=window.localStorage.getItem(e);return n?JSON.parse(n):t}catch{return t}},DT=(e,t)=>{if(_v())try{window.localStorage.setItem(e,JSON.stringify(t))}catch{}},fp=e=>e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/đ/g,"d").replace(/Đ/g,"d").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,""),qv=()=>LT(Ov,{}),OT=e=>DT(Ov,e),_T=e=>qv()[e]??0,Uc=()=>dd.map(e=>({...e,viewCount:_T(e.id)})),qT=(e,t)=>{const n=dd.filter(r=>r.category===e.id).length;return{id:e.id,name:e.name,slug:e.id,description:e.description,color:e.color,sortOrder:t+1,isActive:!0,postCount:n}},FT=()=>{const e=new Map;return dd.forEach(t=>{t.tags.forEach(n=>e.set(n,(e.get(n)??0)+1))}),Array.from(e.entries()).sort(([t],[n])=>t.localeCompare(n)).map(([t,n])=>({id:fp(t),name:t,slug:fp(t),postCount:n}))},Fv=(e,t)=>{var n;return{id:e.id,title:t==="vi"?e.titleVi??e.title:e.title,titleVi:e.titleVi??void 0,slug:e.id,date:e.date,category:e.category,excerpt:t==="vi"?e.excerptVi??e.excerpt:e.excerpt,excerptVi:e.excerptVi??void 0,categorySlug:e.category,categoryName:((n=Is.find(r=>r.id===e.category))==null?void 0:n.name)??e.category,tags:e.tags,coverImageUrl:void 0,featured:!!e.featured,readTime:t==="vi"?e.readTimeVi??e.readTime:e.readTime,readTimeVi:e.readTimeVi??void 0,readTimeMinutes:Number.parseInt(e.readTime,10)||Number.parseInt(e.readTimeVi??e.readTime,10)||5,viewCount:e.viewCount,publishedAt:e.date,createdAt:e.date,updatedAt:e.date,status:"Published"}},zT=(e,t)=>({...Fv(e,t),content:t==="vi"?e.contentVi??e.content:e.content,contentVi:e.contentVi??void 0}),VT=e=>Uc().map(t=>Fv(t,e)),kn={hasBackend:!1,getCachedPost(e){const t=Uc().find(n=>n.id===e);return t?{...t,...Dv(t,"en")}:void 0},async getPosts(e,t={}){const n=VT(e).filter(r=>t.featured===void 0?!0:r.featured===t.featured);return n.slice(0,t.pageSize??n.length)},async getPost(e,t){const n=Uc().find(r=>r.id===e);return n?zT(n,t):null},async incrementView(e){const t=qv();return t[e]=(t[e]??0)+1,OT(t),{slug:e,viewCount:t[e]}},async getCategories(){return Is.map(qT)},async getTags(){return FT()}},hd=({className:e,label:t="Loading"})=>a.jsx("div",{className:ut("flex min-h-56 items-center justify-center rounded-2xl border border-border/60 bg-card/70",e),"aria-busy":"true","aria-live":"polite",children:a.jsxs("div",{className:"flex items-center gap-3 text-sm text-muted-foreground",children:[a.jsx(uk,{className:"h-5 w-5 animate-spin text-primary"}),a.jsx("span",{children:t})]})}),BT=()=>{const{t:e,locale:t,language:n}=Pe(),r=On(),[i,o]=m.useState([]),[s,l]=m.useState(!0),c=u=>Is.some(d=>d.id===u)?e(`category.${u}`):u;return m.useEffect(()=>{let u=!1;return(async()=>{l(!0);const h=await kn.getPosts(n,{featured:!0,pageSize:3});u||(o(h.slice(0,3)),l(!1))})().catch(()=>{u||l(!1)}),()=>{u=!0}},[n]),a.jsx(we.section,{className:"border-b border-border/70 py-20 md:py-28",variants:r?void 0:Rs,initial:r?!1:"hidden",whileInView:"visible",viewport:li,children:a.jsxs("div",{className:"container mx-auto px-4",children:[a.jsxs("div",{className:"mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end",children:[a.jsxs("div",{children:[a.jsx("p",{className:"eyebrow mb-4",children:e("home.notes.eyebrow")}),a.jsxs("h2",{className:"text-4xl md:text-6xl",children:[e("home.notes.title1"),a.jsx("br",{}),a.jsx("span",{className:"text-muted-foreground",children:e("home.notes.title2")})]})]}),a.jsxs(xe,{to:"/blog",className:"inline-flex items-center gap-2 font-mono text-xs text-primary",children:[e("home.notes.all")," ",a.jsx(Ac,{className:"h-4 w-4"})]})]}),s?a.jsx(hd,{className:"min-h-[28rem]",label:n==="vi"?"Đang tải":"Loading"}):a.jsx(we.div,{className:"grid gap-4 lg:grid-cols-[1.2fr_.8fr]",variants:r?void 0:ai,children:i.map((u,d)=>a.jsxs(we.article,{variants:r?void 0:si,className:`group journal-card p-6 md:p-8 ${d===0?"lg:row-span-2":""}`,children:[a.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 border-b border-border/70 pb-5 font-mono text-xs uppercase tracking-[.14em] text-muted-foreground",children:[a.jsxs("span",{className:"text-primary",children:["Note / 0",d+1]}),a.jsx("span",{children:c(u.category)})]}),a.jsx(xe,{to:`/blog/${u.id}`,className:"block",children:a.jsx("h3",{className:`mt-8 transition-colors group-hover:text-primary ${d===0?"max-w-2xl text-3xl md:text-5xl":"text-2xl"}`,children:u.title})}),a.jsx("p",{className:`mt-4 leading-relaxed text-muted-foreground ${d===0?"max-w-2xl text-base":"text-sm"}`,children:u.excerpt}),a.jsxs("div",{className:"mt-8 flex flex-wrap items-center gap-5 border-t border-border/70 pt-5 font-mono text-xs text-muted-foreground",children:[a.jsx("span",{children:new Date(u.date).toLocaleDateString(t)}),a.jsxs("span",{className:"flex items-center gap-1.5",children:[a.jsx(Qa,{className:"h-3 w-3"}),u.readTime]}),a.jsxs("span",{className:"flex items-center gap-1.5",children:[a.jsx(Ka,{className:"h-3 w-3"}),(u.viewCount??0).toLocaleString(t)]}),a.jsxs(xe,{to:`/blog/${u.id}`,className:"ml-auto flex items-center gap-1.5 text-primary",children:[e("home.notes.read")," ",a.jsx(Ac,{className:"h-3 w-3"})]})]})]},u.id))})]})})},UT=Wu("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function at({className:e,variant:t,...n}){return a.jsx("div",{className:ut(UT({variant:t}),e),...n})}const HT=()=>{const{t:e}=Pe(),t=On(),n=Bc.filter(r=>r.featured).slice(0,3);return a.jsx(we.section,{className:"border-b border-border/70 py-20 md:py-28",variants:t?void 0:Rs,initial:t?!1:"hidden",whileInView:"visible",viewport:li,children:a.jsxs("div",{className:"container mx-auto px-4",children:[a.jsxs("div",{className:"mb-12 grid gap-6 md:grid-cols-[1fr_.7fr] md:items-end",children:[a.jsxs("div",{children:[a.jsx("p",{className:"eyebrow mb-4",children:e("home.work.eyebrow")}),a.jsxs("h2",{className:"text-4xl md:text-6xl",children:[e("home.work.title1"),a.jsx("br",{}),a.jsx("span",{className:"text-muted-foreground",children:e("home.work.title2")})]})]}),a.jsxs("div",{className:"md:justify-self-end",children:[a.jsx("p",{className:"mb-4 max-w-md text-sm leading-relaxed text-muted-foreground",children:e("home.work.desc")}),a.jsxs(xe,{to:"/projects",className:"inline-flex items-center gap-2 font-mono text-xs text-primary",children:[e("home.work.archive")," ",a.jsx(Ac,{className:"h-4 w-4"})]})]})]}),a.jsx(we.div,{className:"space-y-4",variants:t?void 0:ai,children:n.map((r,i)=>a.jsxs(we.article,{variants:t?void 0:si,className:"group journal-card grid gap-0 transition-transform duration-300 hover:-translate-y-1 md:grid-cols-[110px_1fr_1fr_auto]",children:[a.jsxs("div",{className:"flex items-center border-b border-border/70 p-5 font-mono text-4xl text-primary/70 md:border-b-0 md:border-r",children:["0",i+1]}),a.jsxs("div",{className:"border-b border-border/70 p-5 md:border-b-0 md:border-r md:p-7",children:[a.jsxs("p",{className:"mb-2 font-mono text-xs uppercase tracking-[.16em] text-muted-foreground",children:[e("home.work.case")," / ",r.id]}),a.jsx("h3",{className:"text-xl transition-colors group-hover:text-primary md:text-2xl",children:r.title}),a.jsx("p",{className:"mt-3 text-sm leading-relaxed text-muted-foreground",children:r.description})]}),a.jsxs("div",{className:"border-b border-border/70 p-5 md:border-b-0 md:border-r md:p-7",children:[a.jsx("p",{className:"mb-4 font-mono text-xs uppercase tracking-[.16em] text-muted-foreground",children:e("home.work.tools")}),a.jsx("div",{className:"flex flex-wrap gap-2.5",children:r.technologies.map(o=>a.jsx(at,{variant:"secondary",className:"min-h-8 rounded-md border border-primary/25 bg-primary/[.08] px-3 py-1.5 font-mono text-[11px] font-semibold tracking-[.04em] text-foreground shadow-sm",children:o},o))})]}),a.jsxs("div",{className:"flex items-center gap-2 p-5 md:flex-col md:justify-center",children:[r.github&&a.jsx("a",{href:r.github,target:"_blank",rel:"noreferrer","aria-label":"Source code",className:"rounded-lg border border-border p-3 text-muted-foreground transition-colors hover:border-primary hover:text-primary",children:a.jsx(qr,{className:"h-4 w-4"})}),r.demo&&a.jsx("a",{href:r.demo,target:"_blank",rel:"noreferrer","aria-label":"Live demo",className:"rounded-lg border border-border p-3 text-muted-foreground transition-colors hover:border-primary hover:text-primary",children:a.jsx(Qt,{className:"h-4 w-4"})})]})]},r.id))})]})})},$T=()=>{const{t:e}=Pe(),t=On();return a.jsxs(ir,{children:[a.jsx(XS,{}),a.jsx(HT,{}),a.jsx(BT,{}),a.jsx(ZS,{}),a.jsx(we.section,{className:"py-20 md:py-28",variants:t?void 0:Rs,initial:t?!1:"hidden",whileInView:"visible",viewport:li,children:a.jsx("div",{className:"container mx-auto px-4",children:a.jsxs("div",{className:"journal-card grid gap-8 p-7 md:grid-cols-[.45fr_1fr] md:p-12",children:[a.jsxs("div",{children:[a.jsx("p",{className:"eyebrow mb-4",children:e("home.principle")}),a.jsx("p",{className:"font-mono text-xs leading-relaxed text-muted-foreground",children:"build → observe → explain → improve"})]}),a.jsx("blockquote",{className:"text-2xl leading-tight md:text-4xl",children:e("home.quote")})]})})})]})},va=m.forwardRef(({className:e,type:t,...n},r)=>a.jsx("input",{type:t,className:ut("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",e),ref:r,...n}));va.displayName="Input";var kl=0;function WT(){m.useEffect(()=>{const e=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",e[0]??vp()),document.body.insertAdjacentElement("beforeend",e[1]??vp()),kl++,()=>{kl===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(t=>t.remove()),kl--}},[])}function vp(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}var Cl="focusScope.autoFocusOnMount",Sl="focusScope.autoFocusOnUnmount",yp={bubbles:!1,cancelable:!0},GT="FocusScope",zv=m.forwardRef((e,t)=>{const{loop:n=!1,trapped:r=!1,onMountAutoFocus:i,onUnmountAutoFocus:o,...s}=e,[l,c]=m.useState(null),u=Ot(i),d=Ot(o),h=m.useRef(null),p=$e(t,v=>c(v)),y=m.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;m.useEffect(()=>{if(r){let v=function(x){if(y.paused||!l)return;const b=x.target;l.contains(b)?h.current=b:cn(h.current,{select:!0})},w=function(x){if(y.paused||!l)return;const b=x.relatedTarget;b!==null&&(l.contains(b)||cn(h.current,{select:!0}))},f=function(x){if(document.activeElement===document.body)for(const C of x)C.removedNodes.length>0&&cn(l)};document.addEventListener("focusin",v),document.addEventListener("focusout",w);const g=new MutationObserver(f);return l&&g.observe(l,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",v),document.removeEventListener("focusout",w),g.disconnect()}}},[r,l,y.paused]),m.useEffect(()=>{if(l){bp.add(y);const v=document.activeElement;if(!l.contains(v)){const f=new CustomEvent(Cl,yp);l.addEventListener(Cl,u),l.dispatchEvent(f),f.defaultPrevented||(QT(ZT(Vv(l)),{select:!0}),document.activeElement===v&&cn(l))}return()=>{l.removeEventListener(Cl,u),setTimeout(()=>{const f=new CustomEvent(Sl,yp);l.addEventListener(Sl,d),l.dispatchEvent(f),f.defaultPrevented||cn(v??document.body,{select:!0}),l.removeEventListener(Sl,d),bp.remove(y)},0)}}},[l,u,d,y]);const k=m.useCallback(v=>{if(!n&&!r||y.paused)return;const w=v.key==="Tab"&&!v.altKey&&!v.ctrlKey&&!v.metaKey,f=document.activeElement;if(w&&f){const g=v.currentTarget,[x,b]=KT(g);x&&b?!v.shiftKey&&f===b?(v.preventDefault(),n&&cn(x,{select:!0})):v.shiftKey&&f===x&&(v.preventDefault(),n&&cn(b,{select:!0})):f===g&&v.preventDefault()}},[n,r,y.paused]);return a.jsx(Ne.div,{tabIndex:-1,...s,ref:p,onKeyDown:k})});zv.displayName=GT;function QT(e,{select:t=!1}={}){const n=document.activeElement;for(const r of e)if(cn(r,{select:t}),document.activeElement!==n)return}function KT(e){const t=Vv(e),n=xp(t,e),r=xp(t.reverse(),e);return[n,r]}function Vv(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const i=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||i?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function xp(e,t){for(const n of e)if(!YT(n,{upTo:t}))return n}function YT(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function XT(e){return e instanceof HTMLInputElement&&"select"in e}function cn(e,{select:t=!1}={}){if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&XT(e)&&t&&e.select()}}var bp=JT();function JT(){let e=[];return{add(t){const n=e[0];t!==n&&(n==null||n.pause()),e=wp(e,t),e.unshift(t)},remove(t){var n;e=wp(e,t),(n=e[0])==null||n.resume()}}}function wp(e,t){const n=[...e],r=n.indexOf(t);return r!==-1&&n.splice(r,1),n}function ZT(e){return e.filter(t=>t.tagName!=="A")}var e2=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},gr=new WeakMap,Zo=new WeakMap,ea={},Tl=0,Bv=function(e){return e&&(e.host||Bv(e.parentNode))},t2=function(e,t){return t.map(function(n){if(e.contains(n))return n;var r=Bv(n);return r&&e.contains(r)?r:(console.error("aria-hidden",n,"in not contained inside",e,". Doing nothing"),null)}).filter(function(n){return!!n})},n2=function(e,t,n,r){var i=t2(t,Array.isArray(e)?e:[e]);ea[n]||(ea[n]=new WeakMap);var o=ea[n],s=[],l=new Set,c=new Set(i),u=function(h){!h||l.has(h)||(l.add(h),u(h.parentNode))};i.forEach(u);var d=function(h){!h||c.has(h)||Array.prototype.forEach.call(h.children,function(p){if(l.has(p))d(p);else try{var y=p.getAttribute(r),k=y!==null&&y!=="false",v=(gr.get(p)||0)+1,w=(o.get(p)||0)+1;gr.set(p,v),o.set(p,w),s.push(p),v===1&&k&&Zo.set(p,!0),w===1&&p.setAttribute(n,"true"),k||p.setAttribute(r,"true")}catch(f){console.error("aria-hidden: cannot operate on ",p,f)}})};return d(t),l.clear(),Tl++,function(){s.forEach(function(h){var p=gr.get(h)-1,y=o.get(h)-1;gr.set(h,p),o.set(h,y),p||(Zo.has(h)||h.removeAttribute(r),Zo.delete(h)),y||h.removeAttribute(n)}),Tl--,Tl||(gr=new WeakMap,gr=new WeakMap,Zo=new WeakMap,ea={})}},r2=function(e,t,n){n===void 0&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),i=e2(e);return i?(r.push.apply(r,Array.from(i.querySelectorAll("[aria-live]"))),n2(r,i,n,"aria-hidden")):function(){return null}},It=function(){return It=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},It.apply(this,arguments)};function Uv(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function i2(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var ya="right-scroll-bar-position",xa="width-before-scroll-bar",o2="with-scroll-bars-hidden",a2="--removed-body-scroll-bar-size";function Nl(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function s2(e,t){var n=m.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(r){var i=n.value;i!==r&&(n.value=r,n.callback(r,i))}}}})[0];return n.callback=t,n.facade}var l2=typeof window<"u"?m.useLayoutEffect:m.useEffect,kp=new WeakMap;function c2(e,t){var n=s2(null,function(r){return e.forEach(function(i){return Nl(i,r)})});return l2(function(){var r=kp.get(n);if(r){var i=new Set(r),o=new Set(e),s=n.current;i.forEach(function(l){o.has(l)||Nl(l,null)}),o.forEach(function(l){i.has(l)||Nl(l,s)})}kp.set(n,e)},[e]),n}function u2(e){return e}function d2(e,t){t===void 0&&(t=u2);var n=[],r=!1,i={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(o){var s=t(o,r);return n.push(s),function(){n=n.filter(function(l){return l!==s})}},assignSyncMedium:function(o){for(r=!0;n.length;){var s=n;n=[],s.forEach(o)}n={push:function(l){return o(l)},filter:function(){return n}}},assignMedium:function(o){r=!0;var s=[];if(n.length){var l=n;n=[],l.forEach(o),s=n}var c=function(){var d=s;s=[],d.forEach(o)},u=function(){return Promise.resolve().then(c)};u(),n={push:function(d){s.push(d),u()},filter:function(d){return s=s.filter(d),n}}}};return i}function h2(e){e===void 0&&(e={});var t=d2(null);return t.options=It({async:!0,ssr:!1},e),t}var Hv=function(e){var t=e.sideCar,n=Uv(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw new Error("Sidecar medium not found");return m.createElement(r,It({},n))};Hv.isSideCarExport=!0;function p2(e,t){return e.useMedium(t),Hv}var $v=h2(),Pl=function(){},Ms=m.forwardRef(function(e,t){var n=m.useRef(null),r=m.useState({onScrollCapture:Pl,onWheelCapture:Pl,onTouchMoveCapture:Pl}),i=r[0],o=r[1],s=e.forwardProps,l=e.children,c=e.className,u=e.removeScrollBar,d=e.enabled,h=e.shards,p=e.sideCar,y=e.noRelative,k=e.noIsolation,v=e.inert,w=e.allowPinchZoom,f=e.as,g=f===void 0?"div":f,x=e.gapMode,b=Uv(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),C=p,T=c2([n,t]),N=It(It({},b),i);return m.createElement(m.Fragment,null,d&&m.createElement(C,{sideCar:$v,removeScrollBar:u,shards:h,noRelative:y,noIsolation:k,inert:v,setCallbacks:o,allowPinchZoom:!!w,lockRef:n,gapMode:x}),s?m.cloneElement(m.Children.only(l),It(It({},N),{ref:T})):m.createElement(g,It({},N,{className:c,ref:T}),l))});Ms.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};Ms.classNames={fullWidth:xa,zeroRight:ya};var m2=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function g2(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=m2();return t&&e.setAttribute("nonce",t),e}function f2(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function v2(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var y2=function(){var e=0,t=null;return{add:function(n){e==0&&(t=g2())&&(f2(t,n),v2(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},x2=function(){var e=y2();return function(t,n){m.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},Wv=function(){var e=x2(),t=function(n){var r=n.styles,i=n.dynamic;return e(r,i),null};return t},b2={left:0,top:0,right:0,gap:0},jl=function(e){return parseInt(e||"",10)||0},w2=function(e){var t=window.getComputedStyle(document.body),n=t[e==="padding"?"paddingLeft":"marginLeft"],r=t[e==="padding"?"paddingTop":"marginTop"],i=t[e==="padding"?"paddingRight":"marginRight"];return[jl(n),jl(r),jl(i)]},k2=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return b2;var t=w2(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},C2=Wv(),Vr="data-scroll-locked",S2=function(e,t,n,r){var i=e.left,o=e.top,s=e.right,l=e.gap;return n===void 0&&(n="margin"),`
  .`.concat(o2,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(l,"px ").concat(r,`;
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
    margin-right: `).concat(l,"px ").concat(r,`;
    `),n==="padding"&&"padding-right: ".concat(l,"px ").concat(r,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(ya,` {
    right: `).concat(l,"px ").concat(r,`;
  }
  
  .`).concat(xa,` {
    margin-right: `).concat(l,"px ").concat(r,`;
  }
  
  .`).concat(ya," .").concat(ya,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(xa," .").concat(xa,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body[`).concat(Vr,`] {
    `).concat(a2,": ").concat(l,`px;
  }
`)},Cp=function(){var e=parseInt(document.body.getAttribute(Vr)||"0",10);return isFinite(e)?e:0},T2=function(){m.useEffect(function(){return document.body.setAttribute(Vr,(Cp()+1).toString()),function(){var e=Cp()-1;e<=0?document.body.removeAttribute(Vr):document.body.setAttribute(Vr,e.toString())}},[])},N2=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,i=r===void 0?"margin":r;T2();var o=m.useMemo(function(){return k2(i)},[i]);return m.createElement(C2,{styles:S2(o,!t,i,n?"":"!important")})},Hc=!1;if(typeof window<"u")try{var ta=Object.defineProperty({},"passive",{get:function(){return Hc=!0,!0}});window.addEventListener("test",ta,ta),window.removeEventListener("test",ta,ta)}catch{Hc=!1}var fr=Hc?{passive:!1}:!1,P2=function(e){return e.tagName==="TEXTAREA"},Gv=function(e,t){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return n[t]!=="hidden"&&!(n.overflowY===n.overflowX&&!P2(e)&&n[t]==="visible")},j2=function(e){return Gv(e,"overflowY")},E2=function(e){return Gv(e,"overflowX")},Sp=function(e,t){var n=t.ownerDocument,r=t;do{typeof ShadowRoot<"u"&&r instanceof ShadowRoot&&(r=r.host);var i=Qv(e,r);if(i){var o=Kv(e,r),s=o[1],l=o[2];if(s>l)return!0}r=r.parentNode}while(r&&r!==n.body);return!1},A2=function(e){var t=e.scrollTop,n=e.scrollHeight,r=e.clientHeight;return[t,n,r]},I2=function(e){var t=e.scrollLeft,n=e.scrollWidth,r=e.clientWidth;return[t,n,r]},Qv=function(e,t){return e==="v"?j2(t):E2(t)},Kv=function(e,t){return e==="v"?A2(t):I2(t)},R2=function(e,t){return e==="h"&&t==="rtl"?-1:1},M2=function(e,t,n,r,i){var o=R2(e,window.getComputedStyle(t).direction),s=o*r,l=n.target,c=t.contains(l),u=!1,d=s>0,h=0,p=0;do{if(!l)break;var y=Kv(e,l),k=y[0],v=y[1],w=y[2],f=v-w-o*k;(k||f)&&Qv(e,l)&&(h+=f,p+=k);var g=l.parentNode;l=g&&g.nodeType===Node.DOCUMENT_FRAGMENT_NODE?g.host:g}while(!c&&l!==document.body||c&&(t.contains(l)||t===l));return(d&&(Math.abs(h)<1||!i)||!d&&(Math.abs(p)<1||!i))&&(u=!0),u},na=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},Tp=function(e){return[e.deltaX,e.deltaY]},Np=function(e){return e&&"current"in e?e.current:e},L2=function(e,t){return e[0]===t[0]&&e[1]===t[1]},D2=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},O2=0,vr=[];function _2(e){var t=m.useRef([]),n=m.useRef([0,0]),r=m.useRef(),i=m.useState(O2++)[0],o=m.useState(Wv)[0],s=m.useRef(e);m.useEffect(function(){s.current=e},[e]),m.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(i));var v=i2([e.lockRef.current],(e.shards||[]).map(Np),!0).filter(Boolean);return v.forEach(function(w){return w.classList.add("allow-interactivity-".concat(i))}),function(){document.body.classList.remove("block-interactivity-".concat(i)),v.forEach(function(w){return w.classList.remove("allow-interactivity-".concat(i))})}}},[e.inert,e.lockRef.current,e.shards]);var l=m.useCallback(function(v,w){if("touches"in v&&v.touches.length===2||v.type==="wheel"&&v.ctrlKey)return!s.current.allowPinchZoom;var f=na(v),g=n.current,x="deltaX"in v?v.deltaX:g[0]-f[0],b="deltaY"in v?v.deltaY:g[1]-f[1],C,T=v.target,N=Math.abs(x)>Math.abs(b)?"h":"v";if("touches"in v&&N==="h"&&T.type==="range")return!1;var S=Sp(N,T);if(!S)return!0;if(S?C=N:(C=N==="v"?"h":"v",S=Sp(N,T)),!S)return!1;if(!r.current&&"changedTouches"in v&&(x||b)&&(r.current=C),!C)return!0;var j=r.current||C;return M2(j,w,v,j==="h"?x:b,!0)},[]),c=m.useCallback(function(v){var w=v;if(!(!vr.length||vr[vr.length-1]!==o)){var f="deltaY"in w?Tp(w):na(w),g=t.current.filter(function(C){return C.name===w.type&&(C.target===w.target||w.target===C.shadowParent)&&L2(C.delta,f)})[0];if(g&&g.should){w.cancelable&&w.preventDefault();return}if(!g){var x=(s.current.shards||[]).map(Np).filter(Boolean).filter(function(C){return C.contains(w.target)}),b=x.length>0?l(w,x[0]):!s.current.noIsolation;b&&w.cancelable&&w.preventDefault()}}},[]),u=m.useCallback(function(v,w,f,g){var x={name:v,delta:w,target:f,should:g,shadowParent:q2(f)};t.current.push(x),setTimeout(function(){t.current=t.current.filter(function(b){return b!==x})},1)},[]),d=m.useCallback(function(v){n.current=na(v),r.current=void 0},[]),h=m.useCallback(function(v){u(v.type,Tp(v),v.target,l(v,e.lockRef.current))},[]),p=m.useCallback(function(v){u(v.type,na(v),v.target,l(v,e.lockRef.current))},[]);m.useEffect(function(){return vr.push(o),e.setCallbacks({onScrollCapture:h,onWheelCapture:h,onTouchMoveCapture:p}),document.addEventListener("wheel",c,fr),document.addEventListener("touchmove",c,fr),document.addEventListener("touchstart",d,fr),function(){vr=vr.filter(function(v){return v!==o}),document.removeEventListener("wheel",c,fr),document.removeEventListener("touchmove",c,fr),document.removeEventListener("touchstart",d,fr)}},[]);var y=e.removeScrollBar,k=e.inert;return m.createElement(m.Fragment,null,k?m.createElement(o,{styles:D2(i)}):null,y?m.createElement(N2,{noRelative:e.noRelative,gapMode:e.gapMode}):null)}function q2(e){for(var t=null;e!==null;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}const F2=p2($v,_2);var Yv=m.forwardRef(function(e,t){return m.createElement(Ms,It({},e,{ref:t,sideCar:F2}))});Yv.classNames=Ms.classNames;var Ls="Popover",[Xv,IN]=Co(Ls,[Ts]),Po=Ts(),[z2,Vn]=Xv(Ls),Jv=e=>{const{__scopePopover:t,children:n,open:r,defaultOpen:i,onOpenChange:o,modal:s=!1}=e,l=Po(t),c=m.useRef(null),[u,d]=m.useState(!1),[h,p]=Bu({prop:r,defaultProp:i??!1,onChange:o,caller:Ls});return a.jsx(cv,{...l,children:a.jsx(z2,{scope:t,contentId:Vf(),triggerRef:c,open:h,onOpenChange:p,onOpenToggle:m.useCallback(()=>p(y=>!y),[p]),hasCustomAnchor:u,onCustomAnchorAdd:m.useCallback(()=>d(!0),[]),onCustomAnchorRemove:m.useCallback(()=>d(!1),[]),modal:s,children:n})})};Jv.displayName=Ls;var Zv="PopoverAnchor",V2=m.forwardRef((e,t)=>{const{__scopePopover:n,...r}=e,i=Vn(Zv,n),o=Po(n),{onCustomAnchorAdd:s,onCustomAnchorRemove:l}=i;return m.useEffect(()=>(s(),()=>l()),[s,l]),a.jsx(id,{...o,...r,ref:t})});V2.displayName=Zv;var ey="PopoverTrigger",ty=m.forwardRef((e,t)=>{const{__scopePopover:n,...r}=e,i=Vn(ey,n),o=Po(n),s=$e(t,i.triggerRef),l=a.jsx(Ne.button,{type:"button","aria-haspopup":"dialog","aria-expanded":i.open,"aria-controls":i.contentId,"data-state":ay(i.open),...r,ref:s,onClick:oe(e.onClick,i.onOpenToggle)});return i.hasCustomAnchor?l:a.jsx(id,{asChild:!0,...o,children:l})});ty.displayName=ey;var pd="PopoverPortal",[B2,U2]=Xv(pd,{forceMount:void 0}),ny=e=>{const{__scopePopover:t,forceMount:n,children:r,container:i}=e,o=Vn(pd,t);return a.jsx(B2,{scope:t,forceMount:n,children:a.jsx(So,{present:n||o.open,children:a.jsx(Vu,{asChild:!0,container:i,children:r})})})};ny.displayName=pd;var ci="PopoverContent",ry=m.forwardRef((e,t)=>{const n=U2(ci,e.__scopePopover),{forceMount:r=n.forceMount,...i}=e,o=Vn(ci,e.__scopePopover);return a.jsx(So,{present:r||o.open,children:o.modal?a.jsx($2,{...i,ref:t}):a.jsx(W2,{...i,ref:t})})});ry.displayName=ci;var H2=lo("PopoverContent.RemoveScroll"),$2=m.forwardRef((e,t)=>{const n=Vn(ci,e.__scopePopover),r=m.useRef(null),i=$e(t,r),o=m.useRef(!1);return m.useEffect(()=>{const s=r.current;if(s)return r2(s)},[]),a.jsx(Yv,{as:H2,allowPinchZoom:!0,children:a.jsx(iy,{...e,ref:i,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:oe(e.onCloseAutoFocus,s=>{var l;s.preventDefault(),o.current||(l=n.triggerRef.current)==null||l.focus()}),onPointerDownOutside:oe(e.onPointerDownOutside,s=>{const l=s.detail.originalEvent,c=l.button===0&&l.ctrlKey===!0,u=l.button===2||c;o.current=u},{checkForDefaultPrevented:!1}),onFocusOutside:oe(e.onFocusOutside,s=>s.preventDefault(),{checkForDefaultPrevented:!1})})})}),W2=m.forwardRef((e,t)=>{const n=Vn(ci,e.__scopePopover),r=m.useRef(!1),i=m.useRef(!1);return a.jsx(iy,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:o=>{var s,l;(s=e.onCloseAutoFocus)==null||s.call(e,o),o.defaultPrevented||(r.current||(l=n.triggerRef.current)==null||l.focus(),o.preventDefault()),r.current=!1,i.current=!1},onInteractOutside:o=>{var c,u;(c=e.onInteractOutside)==null||c.call(e,o),o.defaultPrevented||(r.current=!0,o.detail.originalEvent.type==="pointerdown"&&(i.current=!0));const s=o.target;((u=n.triggerRef.current)==null?void 0:u.contains(s))&&o.preventDefault(),o.detail.originalEvent.type==="focusin"&&i.current&&o.preventDefault()}})}),iy=m.forwardRef((e,t)=>{const{__scopePopover:n,trapFocus:r,onOpenAutoFocus:i,onCloseAutoFocus:o,disableOutsidePointerEvents:s,onEscapeKeyDown:l,onPointerDownOutside:c,onFocusOutside:u,onInteractOutside:d,...h}=e,p=Vn(ci,n),y=Po(n);return WT(),a.jsx(zv,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:i,onUnmountAutoFocus:o,children:a.jsx(xs,{asChild:!0,disableOutsidePointerEvents:s,onInteractOutside:d,onEscapeKeyDown:l,onPointerDownOutside:c,onFocusOutside:u,onDismiss:()=>p.onOpenChange(!1),children:a.jsx(uv,{"data-state":ay(p.open),role:"dialog",id:p.contentId,...y,...h,ref:t,style:{...h.style,"--radix-popover-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-popover-content-available-width":"var(--radix-popper-available-width)","--radix-popover-content-available-height":"var(--radix-popper-available-height)","--radix-popover-trigger-width":"var(--radix-popper-anchor-width)","--radix-popover-trigger-height":"var(--radix-popper-anchor-height)"}})})})}),oy="PopoverClose",G2=m.forwardRef((e,t)=>{const{__scopePopover:n,...r}=e,i=Vn(oy,n);return a.jsx(Ne.button,{type:"button",...r,ref:t,onClick:oe(e.onClick,()=>i.onOpenChange(!1))})});G2.displayName=oy;var Q2="PopoverArrow",K2=m.forwardRef((e,t)=>{const{__scopePopover:n,...r}=e,i=Po(n);return a.jsx(dv,{...i,...r,ref:t})});K2.displayName=Q2;function ay(e){return e?"open":"closed"}var Y2=Jv,X2=ty,J2=ny,sy=ry;const Pp=Y2,jp=X2,$c=m.forwardRef(({className:e,align:t="center",sideOffset:n=4,...r},i)=>a.jsx(J2,{children:a.jsx(sy,{ref:i,align:t,sideOffset:n,className:ut("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...r})}));$c.displayName=sy.displayName;const Z2=()=>{const{t:e,locale:t,language:n}=Pe(),r=On(),i=St(),[o,s]=zw(),l=m.useRef(!1),[c,u]=m.useState(""),[d,h]=m.useState([]),[p,y]=m.useState([]),[k,v]=m.useState([]),[w,f]=m.useState(""),[g,x]=m.useState(""),[b,C]=m.useState(!0),T=o.get("category")||"all",N=o.get("tag")||"",S=9,j=Math.max(1,Number(o.get("page"))||1),A=`${i.pathname}${i.search}`,O=`blog-scroll:${A}`,M=m.useMemo(()=>N.split(",").map(I=>I.trim()).filter(Boolean),[N]),$=m.useMemo(()=>k.map(I=>({name:I.name,count:I.postCount})),[k]),D=m.useMemo(()=>{const I=d.reduce((Q,pe)=>Q+(pe.viewCount??0),0),q=d.reduce((Q,pe)=>Q+(pe.readTimeMinutes||0),0);return{totalViews:I,totalReadMinutes:q}},[d]),W=m.useMemo(()=>{const I=w.trim().toLowerCase();return I?p.filter(q=>[q.name,q.slug,q.description??""].some(Q=>Q.toLowerCase().includes(I))):p},[p,w]),U=m.useMemo(()=>{const I=g.trim().toLowerCase();return I?$.filter(q=>q.name.toLowerCase().includes(I)):$},[$,g]),G=m.useMemo(()=>{const I=new Map;return p.forEach(q=>I.set(q.slug,q.postCount)),I},[p]),P=m.useMemo(()=>d.filter(I=>{const q=T==="all"||I.category===T,Q=M.length===0||M.every(dt=>I.tags.some(Ds=>Ds.toLowerCase()===dt.toLowerCase())),pe=I.title.toLowerCase().includes(c.toLowerCase())||I.excerpt.toLowerCase().includes(c.toLowerCase())||I.tags.some(dt=>dt.toLowerCase().includes(c.toLowerCase()));return q&&Q&&pe}).sort((I,q)=>new Date(q.date).getTime()-new Date(I.date).getTime()),[d,T,M,c]),L=Math.max(1,Math.ceil(P.length/S)),F=m.useMemo(()=>P.slice((j-1)*S,j*S),[j,P]),H=m.useMemo(()=>{const I=Math.max(1,Math.min(j-2,L-4)),q=Math.min(L,I+4);return Array.from({length:q-I+1},(Q,pe)=>I+pe)},[j,L]),Z=I=>{var q;return((q=p.find(Q=>Q.slug===I))==null?void 0:q.name)||e(`category.${I}`)||I},We=I=>{const q=`${I.slug} ${I.name}`.toLowerCase();return q.includes("language")?Z0:q.includes("framework")||q.includes("librar")?H0:q.includes("architecture")?mk:q.includes("pattern")?fk:q.includes("practice")?U0:q.includes("roadmap")?dk:q.includes("learning")?Fh:hl},Le=I=>{const q=new URLSearchParams(o);I==="all"?q.delete("category"):q.set("category",I),q.delete("page"),s(q)},rn=I=>{const q=new URLSearchParams(o);I.length===0?q.delete("tag"):q.set("tag",I.join(",")),q.delete("page"),s(q)},Ge=I=>{const Q=M.some(pe=>pe.toLowerCase()===I.toLowerCase())?M.filter(pe=>pe.toLowerCase()!==I.toLowerCase()):[...M,I];rn(Q)},Ft=()=>{s({}),u("")},jo=I=>{u(I);const q=new URLSearchParams(o);q.delete("page"),s(q)},Bn=I=>{const q=Math.min(Math.max(1,I),L),Q=new URLSearchParams(o);q===1?Q.delete("page"):Q.set("page",String(q)),s(Q),window.scrollTo({top:0,behavior:"smooth"})},fi=()=>{const I=window.scrollY;window.sessionStorage.setItem(O,String(I))};return m.useEffect(()=>{let I=!1;return(async()=>{C(!0);const[Q,pe,dt]=await Promise.all([kn.getPosts(n,{pageSize:100}),kn.getCategories(),kn.getTags()]);I||(h(Q),y(pe),v(dt),C(!1))})().catch(()=>{I||C(!1)}),()=>{I=!0}},[n]),m.useEffect(()=>{b||P.length===0||j>L&&Bn(L)},[j,P.length,b,L]),m.useEffect(()=>{l.current=!1},[A]),m.useEffect(()=>{if(b||l.current)return;const I=window.sessionStorage.getItem(O);if(!I)return;const q=Number(I)||0;l.current=!0,window.sessionStorage.removeItem(O);const Q=()=>window.scrollTo({top:q,behavior:"instant"});window.requestAnimationFrame(()=>{Q(),window.requestAnimationFrame(Q)});const pe=[80,180,360].map(dt=>window.setTimeout(Q,dt));return()=>pe.forEach(dt=>window.clearTimeout(dt))},[O,b,F.length]),a.jsx(ir,{children:a.jsxs("div",{className:"container mx-auto px-4 py-12",children:[a.jsxs("div",{className:"mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between",children:[a.jsxs("div",{className:"max-w-3xl",children:[a.jsx("h1",{className:"mb-4 text-4xl font-bold md:text-5xl",children:a.jsx("span",{className:"text-gradient",children:e("blog.title")})}),a.jsx("p",{className:"text-lg text-muted-foreground md:text-xl",children:e("blog.desc")})]}),!b&&a.jsxs("div",{className:"grid grid-cols-2 gap-2 sm:grid-cols-4 lg:w-[30rem]",children:[a.jsxs("div",{className:"rounded-lg border border-border/70 bg-background/75 px-3 py-2.5 shadow-sm",children:[a.jsxs("div",{className:"flex items-center gap-1.5 text-xs text-muted-foreground",children:[a.jsx(Ka,{className:"h-3.5 w-3.5 text-primary"}),n==="vi"?"Lượt xem":"Views"]}),a.jsx("div",{className:"mt-1 text-lg font-semibold",children:D.totalViews.toLocaleString(t)})]}),a.jsxs("div",{className:"rounded-lg border border-border/70 bg-background/75 px-3 py-2.5 shadow-sm",children:[a.jsxs("div",{className:"flex items-center gap-1.5 text-xs text-muted-foreground",children:[a.jsx(Fh,{className:"h-3.5 w-3.5 text-primary"}),n==="vi"?"Bài":"Posts"]}),a.jsx("div",{className:"mt-1 text-lg font-semibold",children:d.length.toLocaleString(t)})]}),a.jsxs("div",{className:"rounded-lg border border-border/70 bg-background/75 px-3 py-2.5 shadow-sm",children:[a.jsxs("div",{className:"flex items-center gap-1.5 text-xs text-muted-foreground",children:[a.jsx(Qa,{className:"h-3.5 w-3.5 text-primary"}),n==="vi"?"Phút":"Minutes"]}),a.jsx("div",{className:"mt-1 text-lg font-semibold",children:D.totalReadMinutes.toLocaleString(t)})]}),a.jsxs("div",{className:"rounded-lg border border-border/70 bg-background/75 px-3 py-2.5 shadow-sm",children:[a.jsxs("div",{className:"flex items-center gap-1.5 text-xs text-muted-foreground",children:[a.jsx(hl,{className:"h-3.5 w-3.5 text-primary"}),n==="vi"?"Mục":"Topics"]}),a.jsx("div",{className:"mt-1 text-lg font-semibold",children:p.length.toLocaleString(t)})]})]})]}),a.jsxs("div",{className:"mb-8 rounded-xl border border-border/70 bg-background/75 p-2.5 shadow-sm backdrop-blur md:p-3",children:[a.jsxs("div",{className:"flex flex-col gap-2.5 lg:flex-row lg:items-center",children:[a.jsxs("div",{className:"relative w-full lg:max-w-sm",children:[a.jsx(pl,{className:"absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"}),a.jsx(va,{type:"search",placeholder:e("blog.search"),value:c,onChange:I=>jo(I.target.value),className:"h-10 rounded-lg border-border/70 bg-background/85 pl-9 text-sm shadow-sm"})]}),a.jsxs("div",{className:"flex flex-wrap items-center gap-2 lg:ml-auto",children:[a.jsxs(Pp,{children:[a.jsx(jp,{asChild:!0,children:a.jsxs(X,{variant:"outline",size:"sm",className:`h-10 min-w-[170px] justify-between rounded-full border-border/70 bg-background/85 px-3 shadow-sm ${T!=="all"?"border-primary/40 ring-1 ring-primary/15":""}`,children:[a.jsxs("span",{className:"flex min-w-0 items-center gap-2",children:[a.jsx(Vh,{className:"h-4 w-4 shrink-0 text-muted-foreground"}),a.jsxs("span",{className:"min-w-0 truncate text-sm",children:[a.jsxs("span",{className:"text-muted-foreground",children:[e("blog.filterCategory"),": "]}),a.jsx("span",{className:"font-medium text-foreground",children:T==="all"?e("blog.all"):Z(T)})]})]}),a.jsx(zh,{className:"h-4 w-4 shrink-0 opacity-70"})]})}),a.jsxs($c,{align:"end",className:"w-[min(22rem,calc(100vw-2rem))] rounded-xl p-2",children:[a.jsx("div",{className:"px-2 pb-2 pt-1 text-xs font-medium uppercase text-muted-foreground",children:e("blog.filterCategory")}),a.jsxs("div",{className:"relative mb-2",children:[a.jsx(pl,{className:"absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"}),a.jsx(va,{type:"search",value:w,onChange:I=>f(I.target.value),onKeyDown:I=>I.stopPropagation(),placeholder:n==="vi"?"Tìm danh mục":"Search categories",className:"h-9 rounded-lg border-border/70 bg-background/85 pl-9 text-sm"})]}),a.jsxs("div",{className:"space-y-1",children:[a.jsxs("button",{type:"button",onClick:()=>Le("all"),className:`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors ${T==="all"?"bg-primary/10 text-primary ring-1 ring-primary/20":"text-foreground hover:bg-muted"}`,children:[a.jsx(hl,{className:"h-4 w-4 shrink-0 opacity-75"}),a.jsx("span",{className:"min-w-0 flex-1 truncate",children:e("blog.all")}),a.jsx("span",{className:"rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground",children:d.length}),T==="all"&&a.jsx(ga,{className:"h-4 w-4"})]}),W.map(I=>{const q=T===I.slug,Q=We(I);return a.jsxs("button",{type:"button",onClick:()=>Le(I.slug),className:`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors ${q?"bg-primary/10 text-primary ring-1 ring-primary/20":"text-foreground hover:bg-muted"}`,children:[a.jsx(Q,{className:"h-4 w-4 shrink-0 opacity-75"}),a.jsx("span",{className:"min-w-0 flex-1 truncate",children:I.name}),a.jsx("span",{className:"rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground",children:G.get(I.slug)??0}),q&&a.jsx(ga,{className:"h-4 w-4"})]},I.id)}),W.length===0&&a.jsx("div",{className:"px-3 py-6 text-center text-sm text-muted-foreground",children:n==="vi"?"Không tìm thấy danh mục":"No categories found"})]})]})]}),a.jsxs(Pp,{children:[a.jsx(jp,{asChild:!0,children:a.jsxs(X,{variant:"outline",size:"sm",className:`h-10 min-w-[145px] justify-between rounded-full border-border/70 bg-background/85 px-3 shadow-sm ${M.length>0?"border-primary/40 ring-1 ring-primary/15":""}`,children:[a.jsxs("span",{className:"flex min-w-0 items-center gap-2",children:[a.jsx(Rc,{className:"h-4 w-4 shrink-0 text-muted-foreground"}),a.jsxs("span",{className:"min-w-0 truncate text-sm",children:[a.jsxs("span",{className:"text-muted-foreground",children:[e("blog.filterTag"),": "]}),a.jsx("span",{className:"font-medium text-foreground",children:M.length>0?`${M.length} ${e("blog.selectedTags")}`:e("blog.allTags")})]})]}),a.jsx(zh,{className:"h-4 w-4 opacity-70"})]})}),a.jsxs($c,{align:"end",className:"w-[min(22rem,calc(100vw-2rem))] rounded-xl p-3",children:[a.jsxs("div",{className:"mb-3 flex items-center justify-between gap-3",children:[a.jsx("div",{className:"text-sm font-medium",children:e("blog.filterTag")}),M.length>0&&a.jsx(X,{variant:"ghost",size:"sm",onClick:()=>rn([]),className:"h-8 px-2 text-xs",children:e("blog.clearFilters")})]}),a.jsxs("div",{className:"relative mb-3",children:[a.jsx(pl,{className:"absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"}),a.jsx(va,{type:"search",value:g,onChange:I=>x(I.target.value),onKeyDown:I=>I.stopPropagation(),placeholder:n==="vi"?"Tìm thẻ":"Search tags",className:"h-9 rounded-lg border-border/70 bg-background/85 pl-9 text-sm"})]}),a.jsxs("div",{className:"flex max-h-72 flex-wrap gap-2 overflow-y-auto pr-1",children:[U.map(I=>{const q=M.some(Q=>Q.toLowerCase()===I.name.toLowerCase());return a.jsxs(X,{variant:q?"default":"outline",size:"sm",onClick:()=>Ge(I.name),className:"h-8 gap-1.5 rounded-full px-2.5 text-xs",children:[q&&a.jsx(ga,{className:"h-3.5 w-3.5"}),I.name,a.jsx("span",{className:"rounded-full bg-background/40 px-1.5 py-0.5 text-[10px] text-current",children:I.count})]},I.name)}),U.length===0&&a.jsx("div",{className:"w-full px-3 py-6 text-center text-sm text-muted-foreground",children:n==="vi"?"Không tìm thấy thẻ":"No tags found"})]})]})]}),(T!=="all"||M.length>0||c)&&a.jsxs(X,{variant:"ghost",size:"sm",onClick:Ft,className:"h-10 gap-2 rounded-full px-3",children:[a.jsx(Ya,{className:"h-4 w-4"}),e("blog.clearFilters")]})]})]}),M.length>0&&a.jsx("div",{className:"mt-2 flex flex-wrap items-center gap-1.5 border-t border-border/60 pt-2",children:M.map(I=>a.jsxs("button",{type:"button",onClick:()=>Ge(I),className:"inline-flex h-6 items-center gap-1 rounded-full border border-primary/25 bg-primary/10 px-2 text-[11px] font-medium text-primary transition-colors hover:bg-primary/15",children:[I,a.jsx(Ya,{className:"h-3 w-3"})]},I))})]}),b?a.jsx(hd,{className:"min-h-[36rem]",label:n==="vi"?"Đang tải":"Loading"}):P.length>0?a.jsxs(a.Fragment,{children:[a.jsx(we.div,{className:"grid grid-cols-1 items-start gap-6 md:grid-cols-2 lg:grid-cols-3",variants:r?void 0:ai,initial:r?!1:"hidden",animate:"visible",children:F.map(I=>a.jsx(we.article,{variants:r?void 0:si,className:"group card-gradient flex h-full flex-col overflow-hidden rounded-xl border border-border/50 transition-all duration-300 hover:border-primary/50",children:a.jsxs("div",{className:"flex h-full flex-col p-6",children:[a.jsxs("div",{className:"mb-4 flex min-h-7 flex-wrap items-center gap-2.5",children:[a.jsx(at,{variant:"secondary",className:"max-w-full truncate text-xs",children:Z(I.category)}),a.jsxs("div",{className:"flex items-center text-xs text-muted-foreground",children:[a.jsx(Qa,{className:"mr-1 h-4 w-4"}),I.readTime]}),a.jsxs("div",{className:"flex items-center text-xs text-muted-foreground",children:[a.jsx(Ka,{className:"mr-1 h-4 w-4"}),(I.viewCount??0).toLocaleString(t)]})]}),a.jsx(xe,{to:`/blog/${I.id}`,state:{from:A},onClick:fi,children:a.jsx("h2",{className:"mb-3 min-h-[3.5rem] text-xl font-semibold leading-7 line-clamp-2 transition-colors group-hover:text-primary",children:I.title})}),a.jsx("p",{className:"mb-4 min-h-[4.5rem] line-clamp-3 text-sm leading-6 text-muted-foreground",children:I.excerpt}),a.jsx("div",{className:"mb-5 flex h-7 gap-2 overflow-hidden",children:I.tags.slice(0,3).map(q=>{const Q=M.some(pe=>pe.toLowerCase()===q.toLowerCase());return a.jsxs("button",{type:"button",onClick:()=>Ge(q),className:`inline-flex h-7 max-w-[8.75rem] shrink-0 items-center rounded px-2.5 py-1 text-xs transition-colors ${Q?"bg-primary text-primary-foreground":"bg-muted text-muted-foreground hover:text-foreground"}`,children:[a.jsx(Rc,{className:"mr-1 h-3 w-3 shrink-0"}),a.jsx("span",{className:"truncate",children:q})]},q)})}),a.jsxs("div",{className:"flex items-center justify-between gap-4 border-t border-border/50 pt-4",children:[a.jsx("span",{className:"min-w-0 truncate text-sm text-muted-foreground",children:new Date(I.date).toLocaleDateString(t)}),a.jsx(xe,{to:`/blog/${I.id}`,state:{from:A},onClick:fi,className:"shrink-0 text-sm font-medium text-primary",children:e("blog.readMore")})]})]})},I.id))},`${T}-${N}-${c}-${n}-${j}`),L>1&&a.jsxs("nav",{className:"mt-10 flex flex-col items-center justify-between gap-4 rounded-xl border border-border/70 bg-background/75 p-3 shadow-sm backdrop-blur sm:flex-row",children:[a.jsx("p",{className:"text-sm text-muted-foreground",children:n==="vi"?`Hiển thị ${(j-1)*S+1}-${Math.min(j*S,P.length)} / ${P.length} bài`:`Showing ${(j-1)*S+1}-${Math.min(j*S,P.length)} of ${P.length} posts`}),a.jsxs("div",{className:"flex items-center gap-1.5",children:[a.jsxs(X,{type:"button",variant:"outline",size:"sm",className:"h-9 rounded-full px-3",disabled:j===1,onClick:()=>Bn(j-1),children:[a.jsx(K0,{className:"h-4 w-4"}),a.jsx("span",{className:"hidden sm:inline",children:n==="vi"?"Trước":"Prev"})]}),H.map(I=>a.jsx(X,{type:"button",variant:I===j?"default":"outline",size:"sm",className:"h-9 w-9 rounded-full p-0",onClick:()=>Bn(I),children:I},I)),a.jsxs(X,{type:"button",variant:"outline",size:"sm",className:"h-9 rounded-full px-3",disabled:j===L,onClick:()=>Bn(j+1),children:[a.jsx("span",{className:"hidden sm:inline",children:n==="vi"?"Sau":"Next"}),a.jsx(Y0,{className:"h-4 w-4"})]})]})]})]}):a.jsxs("div",{className:"text-center py-20",children:[a.jsx(Vh,{className:"h-12 w-12 text-muted-foreground mx-auto mb-4"}),a.jsx("h3",{className:"text-xl font-semibold mb-2",children:e("blog.empty")}),a.jsx("p",{className:"text-muted-foreground",children:e("blog.emptyDesc")})]})]})})},ly=async e=>{var o;if((o=navigator.clipboard)!=null&&o.writeText&&window.isSecureContext)try{await navigator.clipboard.writeText(e);return}catch{}const t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="fixed",t.style.left="-9999px",t.style.top="0",t.style.opacity="0",document.body.appendChild(t);const n=document.getSelection(),r=n&&n.rangeCount>0?n.getRangeAt(0):null;t.focus(),t.select();const i=document.execCommand("copy");if(t.remove(),r&&n&&(n.removeAllRanges(),n.addRange(r)),!i)throw new Error("Unable to copy to clipboard")},eN={javascript:"js",jsx:"js",typescript:"ts",tsx:"ts",py:"python",cs:"csharp","c#":"csharp"},Ep={js:new Set(["async","await","break","case","catch","class","const","continue","default","do","else","export","extends","finally","for","from","function","if","import","in","instanceof","let","new","of","return","switch","throw","try","typeof","var","void","while","yield"]),ts:new Set(["abstract","as","async","await","break","case","catch","class","const","continue","default","do","else","enum","export","extends","finally","for","from","function","if","implements","import","in","infer","interface","keyof","let","namespace","new","of","private","protected","public","readonly","return","satisfies","switch","throw","try","type","typeof","var","void","while"]),python:new Set(["and","as","assert","async","await","break","class","continue","def","del","elif","else","except","False","finally","for","from","global","if","import","in","is","lambda","None","nonlocal","not","or","pass","raise","return","True","try","while","with","yield"]),csharp:new Set(["abstract","async","await","base","break","case","catch","class","const","decimal","default","else","enum","false","finally","for","foreach","from","get","if","in","interface","internal","is","namespace","new","null","private","protected","public","readonly","record","return","sealed","set","static","string","switch","this","throw","true","try","using","var","void","when","where"])},tN=new Set(["true","false","null","undefined","True","False","None"]),nN=new Set(["Array","Boolean","Date","Decimal","Error","Guid","Iterable","List","Map","Number","Promise","Record","Set","String","Task","ValueError","dict","list","str","int","float","bool"]),rN=e=>{const t=e.trim().toLowerCase();return eN[t]??t},iN=/(\/\*[\s\S]*?\*\/|\/\/.*|#.*|`(?:\\.|[^`])*`|"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|@[A-Za-z_]\w*|\b\d+(?:\.\d+)?\b|\b[A-Za-z_]\w*\b|=>|==={0,1}|!==?|\+\+|--|&&|\|\||[{}[\]().,;:<>+\-*/%=!?|&])/g,oN=e=>{const t=[];let n=0;return e.replace(iN,(r,i,o)=>(o>n&&t.push(e.slice(n,o)),t.push(r),n=o+r.length,r)),n<e.length&&t.push(e.slice(n)),t},aN=(e,t)=>e.slice(t+1).find(n=>n.trim().length>0),sN=(e,t,n)=>{const r=rN(t),i=Ep[r]??Ep.js;return/^\s+$/.test(e)?"":/^(\/\/|#|\/\*)/.test(e)?"text-slate-500 italic":/^(`|"|')/.test(e)?"text-emerald-300":/^@\w+/.test(e)?"text-amber-300":/^\d/.test(e)?"text-orange-300":tN.has(e)?"text-purple-300":i.has(e)?"text-sky-300 font-medium":nN.has(e)||/^[A-Z][A-Za-z0-9_]*$/.test(e)?"text-cyan-200":n==="("?"text-yellow-200":/^[{}[\]().,;:<>+\-*/%=!?|&]+$/.test(e)?"text-slate-300":"text-slate-100"},lN=(e,t,n)=>{const r=oN(e);return r.map((i,o)=>{const s=sN(i,t,aN(r,o));return a.jsx("span",{className:s||void 0,children:i},`${n}-${o}`)})},cN=({code:e,language:t})=>{const{language:n}=Pe(),{toast:r}=zu(),[i,o]=m.useState(!1),s=m.useRef(),l=n==="vi"?"Sao chép mã":"Copy code",c=n==="vi"?"Đã sao chép":"Copied",u=t||"code",d=e.split(`
`);m.useEffect(()=>()=>window.clearTimeout(s.current),[]);const h=async()=>{try{await ly(e),o(!0),window.clearTimeout(s.current),s.current=window.setTimeout(()=>o(!1),2e3),r({variant:"success",title:n==="vi"?"Đã sao chép mã":"Code copied"})}catch(p){console.error("Unable to copy code:",p),r({variant:"destructive",title:n==="vi"?"Không thể sao chép mã":"Unable to copy code"})}};return a.jsxs("div",{className:"my-8 overflow-hidden rounded-xl border border-slate-700/80 bg-slate-950 shadow-sm",children:[a.jsxs("div",{className:"flex items-center justify-between gap-3 border-b border-slate-800 bg-slate-900/95 px-4 py-2.5 font-mono text-xs uppercase tracking-[.14em] text-slate-400",children:[a.jsxs("div",{className:"flex min-w-0 items-center gap-3",children:[a.jsxs("span",{className:"flex items-center gap-1.5",children:[a.jsx("span",{className:"h-2.5 w-2.5 rounded-full bg-red-400"}),a.jsx("span",{className:"h-2.5 w-2.5 rounded-full bg-amber-300"}),a.jsx("span",{className:"h-2.5 w-2.5 rounded-full bg-emerald-400"})]}),a.jsx("span",{className:"min-w-0 truncate",children:u})]}),a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx("span",{className:"hidden text-slate-500 sm:inline",children:"haiit.dev"}),a.jsxs("button",{type:"button",onClick:h,className:"inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-700 bg-slate-900 text-slate-200 transition-colors hover:border-primary/70 hover:bg-primary/15 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary","aria-label":i?c:l,title:i?c:l,children:[i?a.jsx(ga,{className:"h-4 w-4 text-primary"}):a.jsx(tk,{className:"h-4 w-4"}),a.jsx("span",{className:"sr-only","aria-live":"polite",children:i?c:l})]})]})]}),a.jsx("pre",{className:"overflow-x-auto p-0 text-sm leading-7",children:a.jsx("code",{className:"block min-w-max py-4 font-mono",children:d.map((p,y)=>a.jsxs("span",{className:"grid grid-cols-[3.25rem_1fr]",children:[a.jsx("span",{className:"select-none border-r border-slate-800 px-4 text-right text-slate-600",children:y+1}),a.jsx("span",{className:"whitespace-pre px-4",children:p?lN(p,t,y):" "})]},y))})})]})},yr=e=>e.split(/(`[^`]+`|\*\*[^*]+\*\*)/g).filter(Boolean).map((t,n)=>t.startsWith("`")&&t.endsWith("`")?a.jsx("code",{className:"rounded bg-primary/10 px-1.5 py-0.5 font-mono text-[.88em] text-primary",children:t.slice(1,-1)},n):t.startsWith("**")&&t.endsWith("**")?a.jsx("strong",{className:"font-semibold text-foreground",children:t.slice(2,-2)},n):a.jsx(m.Fragment,{children:t},n)),uN=({content:e})=>{const t=e.trim().split(`
`),n=[];let r=0;for(;r<t.length;){const i=t[r].trim();if(!i){r+=1;continue}if(i.startsWith("```")){const s=i.slice(3).trim(),l=[];for(r+=1;r<t.length&&!t[r].trim().startsWith("```");)l.push(t[r]),r+=1;n.push(a.jsx(cN,{language:s,code:l.join(`
`)},`code-${r}`)),r+=1;continue}if(i.startsWith("# ")){n.push(a.jsx("h2",{className:"mb-6 mt-2 text-3xl md:text-4xl",children:yr(i.slice(2))},r)),r+=1;continue}if(i.startsWith("## ")){n.push(a.jsx("h3",{className:"mb-4 mt-12 border-l-2 border-primary pl-4 text-2xl",children:yr(i.slice(3))},r)),r+=1;continue}if(i.startsWith("### ")){n.push(a.jsx("h4",{className:"mb-3 mt-8 text-xl",children:yr(i.slice(4))},r)),r+=1;continue}if(i.startsWith("- ")){const s=[];for(;r<t.length&&t[r].trim().startsWith("- ");)s.push(t[r].trim().slice(2)),r+=1;n.push(a.jsx("ul",{className:"my-6 space-y-3",children:s.map(l=>a.jsxs("li",{className:"flex gap-3 leading-7 text-muted-foreground",children:[a.jsx("span",{className:"mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"}),a.jsx("span",{children:yr(l)})]},l))},`list-${r}`));continue}if(i.startsWith("> ")){n.push(a.jsx("blockquote",{className:"my-8 border-l-2 border-primary bg-primary/[.04] px-5 py-4 text-lg italic leading-8 text-muted-foreground",children:yr(i.slice(2))},r)),r+=1;continue}const o=[i];for(r+=1;r<t.length&&t[r].trim()&&!/^(#{1,3} |```|- |> )/.test(t[r].trim());)o.push(t[r].trim()),r+=1;n.push(a.jsx("p",{className:"my-5 text-[1.02rem] leading-8 text-muted-foreground",children:yr(o.join(" "))},`p-${r}`))}return a.jsx("div",{className:"article-content",children:n})},dN=()=>{var v;const{t:e,locale:t,language:n}=Pe(),{toast:r}=zu(),{id:i}=pw(),o=St(),s=typeof((v=o.state)==null?void 0:v.from)=="string"&&o.state.from.startsWith("/blog")?o.state.from:"/blog",[l,c]=m.useState(()=>i?kn.getCachedPost(i):void 0),[u,d]=m.useState(!l),h=(l==null?void 0:l.id)===i?l:void 0,p=h?Dv(h,n):void 0;if(m.useEffect(()=>{if(!i)return;let w=!1;const f=kn.getCachedPost(i);return c(f),(async()=>{d(!0);const x=await kn.getPost(i,n);w||(c(x),d(!1));const b=await kn.incrementView(i);!w&&b&&x&&c({...x,viewCount:b.viewCount})})(),()=>{w=!0}},[i,n]),u&&!h)return a.jsx(ir,{children:a.jsx("div",{className:"container mx-auto px-4 py-12",children:a.jsx(hd,{className:"min-h-[calc(100vh-9rem)]",label:n==="vi"?"Đang tải":"Loading"})})});if(!p)return a.jsx(ir,{children:a.jsxs("div",{className:"container mx-auto px-4 py-20 text-center",children:[a.jsx("h1",{className:"text-4xl font-bold mb-4",children:e("post.notFound")}),a.jsx("p",{className:"text-muted-foreground mb-8",children:e("post.notFoundDesc")}),a.jsx(X,{asChild:!0,children:a.jsxs(xe,{to:s,children:[a.jsx(Ec,{className:"mr-2 h-4 w-4"}),e("post.back")]})})]})});const y=e(`category.${p.category}`)||p.category,k=async()=>{try{await ly(window.location.href),r({variant:"success",title:n==="vi"?"Đã sao chép liên kết":"Link copied"})}catch{r({variant:"destructive",title:n==="vi"?"Không thể sao chép liên kết":"Unable to copy link"})}};return a.jsx(ir,{children:a.jsxs("article",{className:"container mx-auto px-4 py-12",children:[a.jsxs(xe,{to:s,className:"inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8",children:[a.jsx(Ec,{className:"mr-2 h-4 w-4"}),e("post.back")]}),a.jsxs("header",{className:"max-w-3xl mb-12",children:[a.jsx(at,{variant:"secondary",className:"mb-4",children:y}),a.jsx("h1",{className:"text-3xl md:text-4xl lg:text-5xl font-bold mb-6",children:p.title}),a.jsx("p",{className:"text-xl text-muted-foreground mb-6",children:p.excerpt}),a.jsxs("div",{className:"flex flex-wrap items-center gap-6 text-muted-foreground",children:[a.jsxs("div",{className:"flex items-center",children:[a.jsx(Q0,{className:"h-4 w-4 mr-2"}),new Date(p.date).toLocaleDateString(t,{year:"numeric",month:"long",day:"numeric"})]}),a.jsxs("div",{className:"flex items-center",children:[a.jsx(Qa,{className:"h-4 w-4 mr-2"}),p.readTime]}),a.jsxs("div",{className:"flex items-center",children:[a.jsx(Ka,{className:"h-4 w-4 mr-2"}),`${((h==null?void 0:h.viewCount)??0).toLocaleString(t)} ${e("post.views")}`]})]})]}),a.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-4 gap-12",children:[a.jsx("div",{className:"lg:col-span-3",children:a.jsx("div",{className:"card-gradient rounded-xl border border-border/50 p-6 md:p-12",children:a.jsx(uN,{content:p.content})})}),a.jsx("aside",{className:"lg:col-span-1",children:a.jsxs("div",{className:"sticky top-24 space-y-8",children:[a.jsxs("div",{className:"card-gradient border border-border/50 rounded-xl p-6",children:[a.jsxs("h3",{className:"font-semibold mb-4 flex items-center",children:[a.jsx(Rc,{className:"h-4 w-4 mr-2"}),e("post.tags")]}),a.jsx("div",{className:"flex flex-wrap gap-2",children:p.tags.map(w=>a.jsx(xe,{to:`/blog?tag=${encodeURIComponent(w)}`,children:a.jsx(at,{variant:"outline",className:"cursor-pointer hover:border-primary hover:text-primary",children:w})},w))})]}),a.jsxs("div",{className:"card-gradient border border-border/50 rounded-xl p-6",children:[a.jsxs("h3",{className:"font-semibold mb-4 flex items-center",children:[a.jsx(vk,{className:"h-4 w-4 mr-2"}),e("post.share")]}),a.jsx(X,{variant:"outline",className:"w-full",onClick:k,children:e("post.copy")})]})]})})]})]})})},hN=()=>{const{t:e}=Pe(),t=On();return a.jsx(ir,{children:a.jsxs("div",{className:"container mx-auto px-4 py-12",children:[a.jsxs("div",{className:"max-w-3xl mb-12",children:[a.jsx("h1",{className:"text-4xl md:text-5xl font-bold mb-4",children:a.jsx("span",{className:"text-gradient",children:e("project.title")})}),a.jsx("p",{className:"text-xl text-muted-foreground mb-4",children:e("project.desc")}),a.jsx(X,{asChild:!0,variant:"outline",children:a.jsxs("a",{href:ae.social.github,target:"_blank",rel:"noopener noreferrer",children:[a.jsx(qr,{className:"h-4 w-4 mr-2"}),e("project.github")]})})]}),a.jsxs("div",{className:"mb-12",children:[a.jsxs("h2",{className:"text-2xl font-semibold mb-6 flex items-center gap-2",children:[a.jsx(xk,{className:"h-5 w-5 text-yellow-500"}),e("project.featured")]}),a.jsx(we.div,{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",variants:t?void 0:ai,initial:t?!1:"hidden",whileInView:"visible",viewport:li,children:Bc.filter(n=>n.featured).map(n=>a.jsxs(we.article,{variants:t?void 0:si,className:"group card-gradient border border-border/50 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300",children:[a.jsxs("div",{className:"aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border-b border-border/50 relative overflow-hidden",children:[a.jsx("div",{className:"text-6xl font-mono text-primary/30 group-hover:text-primary/50 transition-colors",children:`<${n.title.split(" ")[0].charAt(0)} />`}),a.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-card to-transparent"}),n.demo&&a.jsx("div",{className:"absolute top-4 right-4",children:a.jsx(at,{className:"bg-green-500/20 text-green-400 border-green-500/30",children:e("project.demo")})})]}),a.jsxs("div",{className:"p-6 md:p-8",children:[a.jsxs("div",{className:"flex items-start justify-between mb-4",children:[a.jsx("h3",{className:"text-2xl font-semibold group-hover:text-primary transition-colors",children:n.title}),a.jsx(at,{className:"bg-primary/20 text-primary",children:e("project.featured")})]}),a.jsx("p",{className:"text-muted-foreground mb-4",children:n.description}),a.jsx("p",{className:"text-sm text-muted-foreground mb-6",children:n.longDescription}),a.jsx("div",{className:"flex flex-wrap gap-2 mb-6",children:n.technologies.map(r=>a.jsx(at,{variant:"secondary",children:r},r))}),a.jsxs("div",{className:"flex gap-4 pt-4 border-t border-border/50",children:[n.github&&a.jsx(X,{asChild:!0,variant:"outline",size:"sm",children:a.jsxs("a",{href:n.github,target:"_blank",rel:"noopener noreferrer",children:[a.jsx(qr,{className:"h-4 w-4 mr-2"}),e("project.source")]})}),n.demo&&a.jsx(X,{asChild:!0,size:"sm",children:a.jsxs("a",{href:n.demo,target:"_blank",rel:"noopener noreferrer",children:[a.jsx(Ic,{className:"h-4 w-4 mr-2"}),e("project.demo")]})})]})]})]},n.id))})]}),a.jsxs("div",{children:[a.jsxs("h2",{className:"text-2xl font-semibold mb-6 flex items-center gap-2",children:[a.jsx(ik,{className:"h-5 w-5 text-primary"}),e("project.all")]}),a.jsx(we.div,{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",variants:t?void 0:ai,initial:t?!1:"hidden",whileInView:"visible",viewport:li,children:Bc.filter(n=>!n.featured).map(n=>a.jsxs(we.article,{variants:t?void 0:si,className:"group card-gradient border border-border/50 rounded-xl p-6 hover:border-primary/50 transition-all duration-300",children:[a.jsx("h3",{className:"text-lg font-semibold mb-2 group-hover:text-primary transition-colors",children:n.title}),a.jsx("p",{className:"text-sm text-muted-foreground mb-4 line-clamp-2",children:n.description}),a.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:n.technologies.slice(0,3).map(r=>a.jsx(at,{variant:"secondary",className:"min-h-7 px-3 py-1 text-xs",children:r},r))}),a.jsxs("div",{className:"flex gap-2",children:[n.github&&a.jsx(X,{asChild:!0,variant:"ghost",size:"sm",children:a.jsx("a",{href:n.github,target:"_blank",rel:"noopener noreferrer",children:a.jsx(qr,{className:"h-4 w-4"})})}),n.demo&&a.jsx(X,{asChild:!0,variant:"ghost",size:"sm",children:a.jsx("a",{href:n.demo,target:"_blank",rel:"noopener noreferrer",children:a.jsx(Ic,{className:"h-4 w-4"})})})]})]},n.id))})]})]})})},pN=[{id:"fullstack",file:"/cvs/FullStack.pdf",title:{vi:"Fullstack Developer",en:"Fullstack Developer"},description:{vi:"Hồ sơ trọng tâm: kinh nghiệm thực tế với Angular, ASP.NET Core, SQL Server và hệ thống quản lý doanh nghiệp.",en:"Primary profile: hands-on experience with Angular, ASP.NET Core, SQL Server, and enterprise management systems."},featured:!0,stack:["Angular","ASP.NET Core","SQL Server","Docker"]},{id:"dotnet",file:"/cvs/.NET-EN.pdf",title:{vi:".NET Developer",en:".NET Developer"},description:{vi:"Hồ sơ tiếng Anh tập trung vào ASP.NET Core MVC, RESTful API, backend và SQL Server.",en:"English profile focused on ASP.NET Core MVC, RESTful APIs, backend development, and SQL Server."},featured:!1,stack:["C#","ASP.NET Core MVC","RESTful API","SQL Server"]},{id:"ba",file:"/cvs/BA-VI.pdf",title:{vi:"Business Analyst",en:"Business Analyst"},description:{vi:"Hồ sơ tiếng Việt về phân tích nghiệp vụ, User Story, Use Case, BPMN và tài liệu hóa hệ thống.",en:"Vietnamese profile covering business analysis, User Stories, Use Cases, BPMN, and system documentation."},featured:!1,stack:["BPMN","UML","User Story","Figma"]}],mN=[{period:"03/2026 - 06/2026",role:"Fullstack Developer",company:"Song Ân Software Solutions Co., Ltd.",summary:{vi:"Phát triển và bảo trì các module HIS, EMR và Admin Management System bằng Angular, ASP.NET Core và SQL Server.",en:"Developing and maintaining HIS, EMR, and Admin Management System modules with Angular, ASP.NET Core, and SQL Server."},highlights:{vi:["CRUD, bộ lọc tìm kiếm, phân trang và component tái sử dụng","Kiểm tra dữ liệu, tối ưu truy vấn và xử lý sự cố SQL Server","Điều tra lỗi, regression testing, merge branch và chuẩn bị triển khai"],en:["CRUD, search filters, pagination, and reusable components","Data verification, query optimization, and SQL Server troubleshooting","Defect investigation, regression testing, branch merging, and deployment preparation"]}}],gN=[{title:{vi:"Hệ thống Quản lý & Đào tạo Giấy phép Lái xe",en:"Driver License Training & Management System"},period:"09/2025 - 12/2025",description:{vi:"Hệ thống ASP.NET Core 9.0 MVC quản lý đào tạo, thi lý thuyết, mô phỏng giao thông, trung tâm lái xe và thanh toán trực tuyến.",en:"ASP.NET Core 9.0 MVC system for driver training, theory exams, traffic simulation, driving center operations, and online payments."},stack:["ASP.NET Core 9","SignalR","OpenAI SDK","VNPAY","MoMo","PayPal"],github:"https://github.com/haihttt974/dacn-dtgplx"},{title:{vi:"Ứng dụng Web Quản lý Phòng Gym",en:"Gym Management Web Application"},period:"06/2025",description:{vi:"Quản lý hội viên, gói tập, phân quyền Admin/Staff/Trainer/Member, thanh toán và chatbot hỗ trợ.",en:"Membership, package, role-based access, online payment, notification, and AI chatbot management."},stack:["ASP.NET Core MVC","RBAC","PayPal","VNPay","AI Chatbot"],github:"https://github.com/haihttt974/courseproject-ltweb-gym"}],fN=[{year:"2022 - 2025",vi:"Sinh viên tiêu biểu ba năm liên tiếp",en:"Outstanding student for three consecutive years"},{year:"2024",vi:"Giải Nhất Database Design Champion",en:"First Prize, Database Design Champion"},{year:"03/2024",vi:"Giải Ba Cuộc thi Lập trình Cá nhân",en:"Third Prize, Individual Programming Competition"},{year:"10/2024",vi:"Giải Nhất Cuộc thi Lập trình Cá nhân",en:"First Prize, Individual Programming Competition"}],vN=[{year:"2025",vi:"Tiếng Anh trình độ B1",en:"English Proficiency, B1 Level"},{year:"2025",vi:"Kỹ năng Giao tiếp và Làm việc Nhóm",en:"Communication and Teamwork Skills"}],yN=[{title:"Fullstack",items:["Angular","ASP.NET Core","C#","JavaScript","HTML","CSS","RESTful API"]},{title:"Data & Backend",items:["SQL Server","Entity Framework Core","Query Optimization","Database Analysis"]},{title:"Business Analysis",items:["User Story","Use Case","BPMN","UML","Draw.io","Figma"]},{title:"Delivery & Quality",items:["Git","GitHub","Docker","Azure","Postman","Software Testing"]}],xN=()=>{const{language:e}=Pe(),t=e==="vi"?{eyebrow:"Hồ sơ nghề nghiệp / 2026",intro:"Tôi xây sản phẩm fullstack, hiểu dữ liệu và không bỏ qua câu chuyện nghiệp vụ phía sau mỗi tính năng.",summary:"Fullstack Developer định hướng hệ thống, có kinh nghiệm phát triển module HIS, EMR và hệ thống quản trị bằng Angular, ASP.NET Core, SQL Server. Đồng thời có nền tảng Business Analysis và kiểm thử phần mềm.",contact:"Liên hệ",cvLabel:"Bộ hồ sơ ứng tuyển",cvTitle:"Ba góc nhìn. Một năng lực cốt lõi.",cvDesc:"Mỗi CV được tối ưu cho một vị trí khác nhau. Fullstack là hồ sơ trọng tâm và phản ánh đầy đủ nhất kinh nghiệm hiện tại.",primary:"Hồ sơ trọng tâm",view:"Xem CV",download:"Tải PDF",experience:"Kinh nghiệm thực tế",present:"Hiện tại",projects:"Dự án tiêu biểu",skills:"Năng lực chuyên môn",education:"Học vấn",educationTitle:"Công nghệ Thông tin",school:"Trường Đại học Công nghệ TP. Hồ Chí Minh",awards:"Danh hiệu & giải thưởng",certificates:"Chứng chỉ",primaryEmail:"Email chính",secondaryEmail:"Email phụ"}:{eyebrow:"Professional profile / 2026",intro:"I build fullstack products, understand data, and never ignore the business story behind each feature.",summary:"Systems-oriented Fullstack Developer with experience building HIS, EMR, and administration modules using Angular, ASP.NET Core, and SQL Server, supported by Business Analysis and software testing foundations.",contact:"Contact",cvLabel:"Application profiles",cvTitle:"Three perspectives. One core capability.",cvDesc:"Each CV is tailored to a different role. Fullstack is the primary profile and best represents my current experience.",primary:"Primary profile",view:"View CV",download:"Download PDF",experience:"Professional experience",present:"Present",projects:"Selected projects",skills:"Professional capabilities",education:"Education",educationTitle:"Information Technology",school:"Ho Chi Minh City University of Technology (HUTECH)",awards:"Honors & awards",certificates:"Certifications",primaryEmail:"Primary email",secondaryEmail:"Secondary email"};return a.jsxs(ir,{children:[a.jsx("section",{className:"border-b border-border/70",children:a.jsxs("div",{className:"container mx-auto px-4 py-10 md:py-16",children:[a.jsx("p",{className:"eyebrow mb-7",children:t.eyebrow}),a.jsxs("div",{className:"grid gap-8 lg:grid-cols-[.72fr_1.28fr] lg:items-end",children:[a.jsxs("div",{className:"journal-card relative aspect-[4/5] max-w-md overflow-hidden",children:[a.jsx("img",{src:ae.avatar,alt:ae.name,className:"h-full w-full object-cover"}),a.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"}),a.jsxs("div",{className:"absolute inset-x-0 bottom-0 p-6",children:[a.jsx("p",{className:"font-mono text-xs uppercase tracking-[.16em] text-primary",children:"Fullstack / Information Systems"}),a.jsx("h1",{className:"mt-2 text-3xl",children:ae.name})]})]}),a.jsxs("div",{className:"pb-2",children:[a.jsx("h2",{className:"max-w-5xl text-4xl leading-[.98] md:text-6xl lg:text-7xl",children:t.intro}),a.jsx("p",{className:"mt-7 max-w-3xl border-l border-primary/50 pl-5 text-lg leading-8 text-muted-foreground",children:t.summary}),a.jsxs("div",{className:"mt-8 flex flex-wrap gap-3",children:[a.jsx(X,{asChild:!0,children:a.jsxs("a",{href:`mailto:${ae.social.email}`,children:[a.jsx(Af,{className:"mr-2 h-4 w-4"}),t.contact]})}),a.jsx(X,{asChild:!0,variant:"outline",children:a.jsxs("a",{href:ae.social.github,target:"_blank",rel:"noreferrer",children:["GitHub ",a.jsx(Qt,{className:"ml-2 h-4 w-4"})]})}),a.jsx(X,{asChild:!0,variant:"outline",children:a.jsxs("a",{href:ae.social.linkedin,target:"_blank",rel:"noreferrer",children:["LinkedIn ",a.jsx(Qt,{className:"ml-2 h-4 w-4"})]})})]}),a.jsx("div",{className:"mt-10 grid border-y border-border/70 sm:grid-cols-3",children:[["3.44/4.00","GPA"],["03/2026",t.experience],["03",t.cvLabel]].map(([n,r],i)=>a.jsxs("div",{className:`py-4 ${i?"border-t border-border/70 sm:border-l sm:border-t-0 sm:pl-5":""}`,children:[a.jsx("span",{className:"font-mono text-xl font-semibold text-primary",children:n}),a.jsx("span",{className:"ml-2 font-mono text-[11px] uppercase tracking-wider text-muted-foreground",children:r})]},r))})]})]})]})}),a.jsx("section",{className:"border-b border-border/70 bg-card/25 py-20",id:"cv-collection",children:a.jsxs("div",{className:"container mx-auto px-4",children:[a.jsx("p",{className:"eyebrow mb-4",children:t.cvLabel}),a.jsxs("div",{className:"mb-10 grid gap-5 md:grid-cols-[1fr_.7fr] md:items-end",children:[a.jsx("h2",{className:"text-4xl md:text-6xl",children:t.cvTitle}),a.jsx("p",{className:"text-muted-foreground",children:t.cvDesc})]}),a.jsx("div",{className:"grid gap-5 lg:grid-cols-3",children:pN.map((n,r)=>a.jsxs("article",{className:`journal-card flex min-h-[330px] flex-col p-6 ${n.featured?"border-primary/60 lg:-translate-y-3":""}`,children:[a.jsxs("div",{className:"flex items-start justify-between",children:[a.jsxs("span",{className:"font-mono text-4xl text-primary/60",children:["0",r+1]}),n.featured&&a.jsxs(at,{className:"gap-1",children:[a.jsx(Gu,{className:"h-3 w-3"}),t.primary]})]}),a.jsx("h3",{className:"mt-8 text-2xl",children:n.title[e]}),a.jsx("p",{className:"mt-3 text-sm leading-6 text-muted-foreground",children:n.description[e]}),a.jsx("div",{className:"mt-5 flex flex-wrap gap-2.5",children:n.stack.map(i=>a.jsx(at,{variant:"secondary",className:"min-h-7 px-3 py-1 font-mono text-[11px]",children:i},i))}),a.jsxs("div",{className:"mt-auto flex gap-2 border-t border-border/70 pt-5",children:[a.jsx(X,{asChild:!0,size:"sm",className:"flex-1",children:a.jsxs("a",{href:n.file,target:"_blank",rel:"noreferrer",children:[t.view,a.jsx(Ic,{className:"ml-2 h-3.5 w-3.5"})]})}),a.jsx(X,{asChild:!0,size:"sm",variant:"outline",children:a.jsxs("a",{href:n.file,download:!0,children:[a.jsx(nk,{className:"h-3.5 w-3.5"}),a.jsx("span",{className:"sr-only",children:t.download})]})})]})]},n.id))})]})}),a.jsx("section",{className:"border-b border-border/70 py-20",children:a.jsxs("div",{className:"container mx-auto grid gap-12 px-4 lg:grid-cols-[1.25fr_.75fr]",children:[a.jsxs("div",{children:[a.jsx("p",{className:"eyebrow mb-8",children:t.experience}),mN.map(n=>a.jsxs("article",{className:"journal-card p-7 md:p-9",children:[a.jsxs("div",{className:"flex flex-col justify-between gap-3 border-b border-border/70 pb-6 sm:flex-row",children:[a.jsxs("div",{children:[a.jsx("h2",{className:"text-2xl",children:n.role}),a.jsx("p",{className:"mt-1 text-primary",children:n.company})]}),a.jsx("span",{className:"font-mono text-xs uppercase tracking-wider text-muted-foreground",children:n.period})]}),a.jsx("p",{className:"mt-6 leading-7 text-muted-foreground",children:n.summary[e]}),a.jsx("div",{className:"mt-6 space-y-3",children:n.highlights[e].map(r=>a.jsxs("p",{className:"flex gap-3 text-sm text-muted-foreground",children:[a.jsx(Ef,{className:"mt-0.5 h-4 w-4 shrink-0 text-primary"}),r]},r))})]},n.company))]}),a.jsxs("aside",{className:"space-y-5",children:[a.jsx("p",{className:"eyebrow mb-8",children:t.education}),a.jsxs("div",{className:"journal-card p-6",children:[a.jsx(ok,{className:"h-6 w-6 text-primary"}),a.jsx("h3",{className:"mt-5 text-xl",children:t.educationTitle}),a.jsx("p",{className:"mt-2 text-sm text-muted-foreground",children:t.school}),a.jsxs("div",{className:"mt-5 flex justify-between border-t border-border/70 pt-4 font-mono text-xs uppercase tracking-wider text-muted-foreground",children:[a.jsxs("span",{children:["2022 - ",t.present]}),a.jsx("span",{className:"text-primary",children:"GPA 3.44 / 4.00"})]})]}),a.jsxs("div",{className:"journal-card p-6",children:[a.jsx(If,{className:"h-5 w-5 text-primary"}),a.jsx("p",{className:"mt-4 text-sm text-muted-foreground",children:ae.address}),a.jsxs("div",{className:"mt-4 space-y-3 border-t border-border/70 pt-4 font-mono text-xs",children:[a.jsxs("a",{className:"block hover:text-primary",href:`mailto:${ae.social.email}`,children:[a.jsx("span",{className:"block text-[11px] uppercase tracking-wider text-muted-foreground",children:t.primaryEmail}),ae.social.email]}),a.jsxs("a",{className:"block hover:text-primary",href:`mailto:${ae.social.secondaryEmail}`,children:[a.jsx("span",{className:"block text-[11px] uppercase tracking-wider text-muted-foreground",children:t.secondaryEmail}),ae.social.secondaryEmail]})]})]})]})]})}),a.jsx("section",{className:"border-b border-border/70 bg-card/25 py-20",children:a.jsxs("div",{className:"container mx-auto px-4",children:[a.jsx("p",{className:"eyebrow mb-8",children:t.projects}),a.jsx("div",{className:"grid gap-5 md:grid-cols-2",children:gN.map(n=>a.jsxs("article",{className:"journal-card p-7",children:[a.jsxs("div",{className:"flex justify-between gap-3",children:[a.jsx("h3",{className:"text-2xl",children:n.title[e]}),a.jsx("span",{className:"font-mono text-xs text-primary",children:n.period})]}),a.jsx("p",{className:"mt-4 text-sm leading-7 text-muted-foreground",children:n.description[e]}),a.jsx("div",{className:"mt-5 flex flex-wrap gap-2",children:n.stack.map(r=>a.jsx(at,{variant:"secondary",children:r},r))}),a.jsxs("a",{href:n.github,target:"_blank",rel:"noreferrer",className:"mt-6 inline-flex items-center gap-2 font-mono text-xs text-primary",children:["GitHub repository ",a.jsx(Qt,{className:"h-3.5 w-3.5"})]})]},n.period))})]})}),a.jsx("section",{className:"py-20",children:a.jsxs("div",{className:"container mx-auto grid gap-12 px-4 lg:grid-cols-[1fr_1fr]",children:[a.jsxs("div",{children:[a.jsx("p",{className:"eyebrow mb-8",children:t.skills}),a.jsx("div",{className:"grid gap-4 sm:grid-cols-2",children:yN.map(n=>a.jsxs("div",{className:"journal-card p-5",children:[a.jsx("h3",{children:n.title}),a.jsx("div",{className:"mt-4 flex flex-wrap gap-2",children:n.items.map(r=>a.jsx(at,{variant:"secondary",children:r},r))})]},n.title))})]}),a.jsxs("div",{className:"grid gap-8 sm:grid-cols-2",children:[a.jsxs("div",{children:[a.jsx("p",{className:"eyebrow mb-8",children:t.awards}),a.jsx("div",{className:"space-y-3",children:fN.map(n=>a.jsxs("div",{className:"journal-card p-4",children:[a.jsx(B0,{className:"h-4 w-4 text-primary"}),a.jsx("p",{className:"mt-3 text-sm",children:n[e]}),a.jsx("p",{className:"mt-2 font-mono text-xs text-muted-foreground",children:n.year})]},`${n.year}-${n.en}`))})]}),a.jsxs("div",{children:[a.jsx("p",{className:"eyebrow mb-8",children:t.certificates}),a.jsx("div",{className:"space-y-3",children:vN.map(n=>a.jsxs("div",{className:"journal-card p-4",children:[a.jsx(G0,{className:"h-4 w-4 text-primary"}),a.jsx("p",{className:"mt-3 text-sm",children:n[e]}),a.jsx("p",{className:"mt-2 font-mono text-xs text-muted-foreground",children:n.year})]},n.en))})]})]})]})})]})},bN=()=>{const{language:e}=Pe(),t=St(),n=e==="vi",r={eyebrow:"HTTP / 404",title:n?"Trang này đã đi lạc khỏi bản đồ.":"This page drifted off the map.",description:n?"Đường dẫn bạn vừa mở không tồn tại hoặc đã được chuyển đi. Hãy quay về trang chính để tiếp tục khám phá.":"The route you opened does not exist or has moved. Head back home and keep exploring.",home:n?"Về trang chủ":"Back home",back:n?"Quay lại":"Go back",currentRoute:n?"Đường dẫn hiện tại":"Current route",signal:n?"Không tìm thấy tín hiệu":"No signal found",hint:n?"Gợi ý: kiểm tra lại URL hoặc dùng menu điều hướng.":"Tip: check the URL or use the navigation menu."};return m.useEffect(()=>{console.error("404 Error: User attempted to access non-existent route:",t.pathname)},[t.pathname]),a.jsxs("main",{className:"relative flex h-dvh min-h-[620px] overflow-hidden bg-background text-foreground",children:[a.jsx("div",{className:"page-grid pointer-events-none absolute inset-0 opacity-70"}),a.jsx("div",{className:"pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,hsl(var(--primary)/0.18),transparent_24rem),radial-gradient(circle_at_84%_72%,hsl(var(--accent)/0.14),transparent_24rem)]"}),a.jsx("div",{className:"pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background via-background/70 to-transparent"}),a.jsxs("div",{className:"container relative z-10 mx-auto grid h-full items-center gap-8 px-4 py-6 md:grid-cols-[0.95fr_1.05fr] md:px-8",children:[a.jsxs("section",{className:"mx-auto w-full max-w-xl",children:[a.jsxs("div",{className:"mb-5 inline-flex items-center gap-2 rounded-md border border-border/70 bg-card/70 px-3 py-2 font-mono text-[11px] font-semibold uppercase text-primary shadow-sm backdrop-blur",children:[a.jsx(Gu,{className:"h-3.5 w-3.5"}),r.eyebrow]}),a.jsxs("h1",{className:"text-balance text-5xl font-bold leading-[0.95] sm:text-6xl lg:text-7xl",children:[a.jsx("span",{className:"block text-gradient",children:"404"}),a.jsx("span",{className:"mt-2 block",children:r.title})]}),a.jsx("p",{className:"mt-5 max-w-lg text-base leading-7 text-muted-foreground sm:text-lg",children:r.description}),a.jsxs("div",{className:"mt-7 flex flex-wrap gap-3",children:[a.jsx(X,{asChild:!0,size:"lg",className:"shadow-[0_18px_40px_hsl(var(--primary)/0.18)]",children:a.jsxs(xe,{to:"/",children:[a.jsx(ak,{className:"h-4 w-4"}),r.home]})}),a.jsxs(X,{size:"lg",variant:"outline",onClick:()=>window.history.back(),children:[a.jsx(Ec,{className:"h-4 w-4"}),r.back]})]}),a.jsx("div",{className:"mt-7 rounded-md border border-border/70 bg-card/60 p-4 backdrop-blur",children:a.jsxs("div",{className:"flex items-start gap-3",children:[a.jsx(gk,{className:"mt-0.5 h-5 w-5 text-accent"}),a.jsxs("div",{className:"min-w-0",children:[a.jsx("p",{className:"font-mono text-[11px] uppercase text-muted-foreground",children:r.currentRoute}),a.jsx("p",{className:"mt-1 truncate font-mono text-sm text-foreground",children:t.pathname})]})]})})]}),a.jsxs("section",{className:"relative mx-auto hidden aspect-square w-full max-w-[540px] items-center justify-center md:flex",children:[a.jsx("div",{className:"absolute inset-8 rounded-full border border-primary/15"}),a.jsx("div",{className:"absolute inset-20 rounded-full border border-accent/20"}),a.jsx("div",{className:"absolute h-[72%] w-[72%] animate-[orbitSpin_28s_linear_infinite] rounded-full border border-dashed border-border/80"}),a.jsx("div",{className:"absolute left-[12%] top-[22%] rounded-md border border-border/70 bg-card/80 px-3 py-2 font-mono text-[10px] uppercase text-muted-foreground shadow-sm backdrop-blur",children:"route.scan()"}),a.jsx("div",{className:"absolute bottom-[18%] right-[8%] rounded-md border border-primary/20 bg-primary/10 px-3 py-2 font-mono text-[10px] uppercase text-primary shadow-sm backdrop-blur",children:"fallback.ready"}),a.jsxs("div",{className:"relative flex h-72 w-72 items-center justify-center rounded-full border border-border/80 bg-card/70 shadow-[0_32px_100px_hsl(var(--foreground)/0.14)] backdrop-blur-xl",children:[a.jsx("div",{className:"absolute inset-6 rounded-full border border-primary/20 bg-[radial-gradient(circle,hsl(var(--primary)/0.16),transparent_58%)]"}),a.jsx("div",{className:"absolute h-4 w-4 animate-[particleBlink_3s_ease-in-out_infinite] rounded-full bg-primary shadow-[0_0_30px_hsl(var(--primary)/0.65)]"}),a.jsxs("div",{className:"relative grid place-items-center text-center",children:[a.jsx(ek,{className:"mb-5 h-16 w-16 text-primary"}),a.jsx("p",{className:"font-mono text-xs uppercase tracking-[0.24em] text-muted-foreground",children:r.signal}),a.jsx("p",{className:"mt-3 max-w-44 text-sm leading-6 text-muted-foreground",children:r.hint})]})]})]})]})]})},xr=({children:e})=>{const t=On();return a.jsx(we.div,{initial:t?{opacity:0}:"initial",animate:t?{opacity:1}:"animate",exit:t?{opacity:0}:"exit",variants:JS,children:e})},wN=()=>{const{language:e}=Pe(),t=On(),[n,r]=m.useState(0),[i,o]=m.useState(!1);m.useEffect(()=>{let c=0;const u=()=>{c=0;const h=window.scrollY||document.documentElement.scrollTop,p=document.documentElement.scrollHeight-window.innerHeight,y=p>0?Math.min(h/p,1):0;r(y),o(h>Math.min(520,window.innerHeight*.62))},d=()=>{c||(c=window.requestAnimationFrame(u))};return u(),window.addEventListener("scroll",d,{passive:!0}),window.addEventListener("resize",d),()=>{c&&window.cancelAnimationFrame(c),window.removeEventListener("scroll",d),window.removeEventListener("resize",d)}},[]);const s=e==="vi"?"Cuộn lên đầu trang":"Scroll to top",l=()=>{window.scrollTo({top:0,behavior:t?"auto":"smooth"})};return a.jsx(we.div,{className:"fixed bottom-4 right-[4.75rem] z-[60] md:right-20",initial:!1,animate:i?{opacity:1,y:0,scale:1,pointerEvents:"auto"}:{opacity:0,y:14,scale:.92,pointerEvents:"none"},transition:{duration:t?0:.24,ease:[.22,1,.36,1]},children:a.jsxs(bv,{children:[a.jsx(wv,{asChild:!0,children:a.jsxs(X,{type:"button",variant:"outline",size:"icon","aria-label":s,onClick:l,className:"group relative h-12 w-12 overflow-hidden rounded-full border-primary/35 bg-background/85 text-foreground shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/70 hover:bg-primary/10 hover:text-primary focus-visible:ring-primary/60",style:{backgroundImage:`conic-gradient(hsl(var(--primary)) ${n*360}deg, hsl(var(--border) / 0.32) 0deg)`},children:[a.jsx("span",{className:"absolute inset-[3px] rounded-full bg-background/94 shadow-inner"}),a.jsx("span",{className:"absolute inset-x-3 top-2 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-70"}),a.jsx("span",{className:"relative flex h-7 w-7 items-center justify-center rounded-full border border-primary/25 bg-primary/[.07] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-105",children:a.jsx(V0,{className:"h-4 w-4"})}),a.jsx("span",{className:"sr-only",children:s})]})}),a.jsx(ad,{side:"left",className:"font-mono text-xs uppercase tracking-[.12em]",children:s})]})})},kN=new mS;function CN(){const e=St();return a.jsxs(US,{attribute:"class",defaultTheme:"system",enableSystem:!0,storageKey:"haiit-theme",children:[a.jsx(QS,{}),a.jsx(PS,{children:a.jsx(fS,{client:kN,children:a.jsx($C,{children:a.jsxs(SS,{children:[a.jsx(i1,{}),a.jsx(zS,{}),a.jsx(jS,{}),a.jsxs(hy,{features:py,strict:!0,children:[a.jsx(wN,{}),a.jsx(my,{mode:"wait",initial:!1,children:a.jsxs(jw,{location:e,children:[a.jsx(Wn,{path:"/",element:a.jsx(xr,{children:a.jsx($T,{})})}),a.jsx(Wn,{path:"/blog",element:a.jsx(xr,{children:a.jsx(Z2,{})})}),a.jsx(Wn,{path:"/blog/:id",element:a.jsx(xr,{children:a.jsx(dN,{})})}),a.jsx(Wn,{path:"/projects",element:a.jsx(xr,{children:a.jsx(hN,{})})}),a.jsx(Wn,{path:"/about",element:a.jsx(xr,{children:a.jsx(xN,{})})}),a.jsx(Wn,{path:"*",element:a.jsx(xr,{children:a.jsx(bN,{})})})]},e.pathname)})]})]})})})})]})}const SN=new URLSearchParams(window.location.search),Ap=SN.get("redirect");Ap&&window.history.replaceState(null,"",Ap);Vg(document.getElementById("root")).render(a.jsx(Ow,{children:a.jsx(CN,{})}));
