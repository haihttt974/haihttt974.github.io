const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Graduation-qoNkflTL.js","assets/motion-Cki7feKP.js","assets/graduation-DNvPkNp6.js","assets/graduation-Cw5hn-_K.css","assets/three-DfGjiPv-.js","assets/GraduationQuestions-B2Pa0FnN.js","assets/GraduationQuestions-BeKOvSPc.css"])))=>i.map(i=>d[i]);
var nd=e=>{throw TypeError(e)};var yc=(e,t,n)=>t.has(e)||nd("Cannot "+n);var j=(e,t,n)=>(yc(e,t,"read from private field"),n?n.call(e):t.get(e)),ce=(e,t,n)=>t.has(e)?nd("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),X=(e,t,n,r)=>(yc(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n),Ge=(e,t,n)=>(yc(e,t,"access private method"),n);var io=(e,t,n,r)=>({set _(i){X(e,t,i,n)},get _(){return j(e,t,r)}});import{r as g,g as Eb,R as qh,j as o,a as sr,u as tr,m as Ve,L as Rb,d as Lb,A as Db}from"./motion-Cki7feKP.js";import{S as Mb,P as qb,W as Ob,a as Ub,A as _b,b as Fb,D as Vb,c as rd,G as Mg,M as va,T as Bb,d as Oh,I as zb,L as ya,E as Yo,e as Xo,B as Hb,f as $b,g as id,h as Wb,C as Gb,i as ad,j as Kb,k as Qb,O as Yb,l as Xb,m as Jb,V as Zb}from"./three-DfGjiPv-.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();var qg={exports:{}},vt={},Og={exports:{}},Ug={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(A,D){var F=A.length;A.push(D);e:for(;0<F;){var $=F-1>>>1,W=A[$];if(0<i(W,D))A[$]=D,A[F]=W,F=$;else break e}}function n(A){return A.length===0?null:A[0]}function r(A){if(A.length===0)return null;var D=A[0],F=A.pop();if(F!==D){A[0]=F;e:for(var $=0,W=A.length,ze=W>>>1;$<ze;){var de=2*($+1)-1,Oe=A[de],Q=de+1,re=A[Q];if(0>i(Oe,F))Q<W&&0>i(re,Oe)?(A[$]=re,A[Q]=F,$=Q):(A[$]=Oe,A[de]=F,$=de);else if(Q<W&&0>i(re,F))A[$]=re,A[Q]=F,$=Q;else break e}}return D}function i(A,D){var F=A.sortIndex-D.sortIndex;return F!==0?F:A.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var s=Date,c=s.now();e.unstable_now=function(){return s.now()-c}}var l=[],h=[],u=1,d=null,p=3,y=!1,x=!1,v=!1,k=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(A){for(var D=n(h);D!==null;){if(D.callback===null)r(h);else if(D.startTime<=A)r(h),D.sortIndex=D.expirationTime,t(l,D);else break;D=n(h)}}function w(A){if(v=!1,b(A),!x)if(n(l)!==null)x=!0,H(T);else{var D=n(h);D!==null&&z(w,D.startTime-A)}}function T(A,D){x=!1,v&&(v=!1,f(S),S=-1),y=!0;var F=p;try{for(b(D),d=n(l);d!==null&&(!(d.expirationTime>D)||A&&!O());){var $=d.callback;if(typeof $=="function"){d.callback=null,p=d.priorityLevel;var W=$(d.expirationTime<=D);D=e.unstable_now(),typeof W=="function"?d.callback=W:d===n(l)&&r(l),b(D)}else r(l);d=n(l)}if(d!==null)var ze=!0;else{var de=n(h);de!==null&&z(w,de.startTime-D),ze=!1}return ze}finally{d=null,p=F,y=!1}}var C=!1,P=null,S=-1,N=5,I=-1;function O(){return!(e.unstable_now()-I<N)}function R(){if(P!==null){var A=e.unstable_now();I=A;var D=!0;try{D=P(!0,A)}finally{D?M():(C=!1,P=null)}}else C=!1}var M;if(typeof m=="function")M=function(){m(R)};else if(typeof MessageChannel<"u"){var U=new MessageChannel,G=U.port2;U.port1.onmessage=R,M=function(){G.postMessage(null)}}else M=function(){k(R,0)};function H(A){P=A,C||(C=!0,M())}function z(A,D){S=k(function(){A(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(A){A.callback=null},e.unstable_continueExecution=function(){x||y||(x=!0,H(T))},e.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<A?Math.floor(1e3/A):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(A){switch(p){case 1:case 2:case 3:var D=3;break;default:D=p}var F=p;p=D;try{return A()}finally{p=F}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(A,D){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var F=p;p=A;try{return D()}finally{p=F}},e.unstable_scheduleCallback=function(A,D,F){var $=e.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?$+F:$):F=$,A){case 1:var W=-1;break;case 2:W=250;break;case 5:W=1073741823;break;case 4:W=1e4;break;default:W=5e3}return W=F+W,A={id:u++,callback:D,priorityLevel:A,startTime:F,expirationTime:W,sortIndex:-1},F>$?(A.sortIndex=F,t(h,A),n(l)===null&&A===n(h)&&(v?(f(S),S=-1):v=!0,z(w,F-$))):(A.sortIndex=W,t(l,A),x||y||(x=!0,H(T))),A},e.unstable_shouldYield=O,e.unstable_wrapCallback=function(A){var D=p;return function(){var F=p;p=D;try{return A.apply(this,arguments)}finally{p=F}}}})(Ug);Og.exports=Ug;var ew=Og.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tw=g,ft=ew;function q(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var _g=new Set,ba={};function Rr(e,t){wi(e,t),wi(e+"Capture",t)}function wi(e,t){for(ba[e]=t,e=0;e<t.length;e++)_g.add(t[e])}var mn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),pl=Object.prototype.hasOwnProperty,nw=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,od={},sd={};function rw(e){return pl.call(sd,e)?!0:pl.call(od,e)?!1:nw.test(e)?sd[e]=!0:(od[e]=!0,!1)}function iw(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function aw(e,t,n,r){if(t===null||typeof t>"u"||iw(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function rt(e,t,n,r,i,a,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=s}var We={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){We[e]=new rt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];We[t]=new rt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){We[e]=new rt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){We[e]=new rt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){We[e]=new rt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){We[e]=new rt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){We[e]=new rt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){We[e]=new rt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){We[e]=new rt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Uh=/[\-:]([a-z])/g;function _h(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Uh,_h);We[t]=new rt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Uh,_h);We[t]=new rt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Uh,_h);We[t]=new rt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){We[e]=new rt(e,1,!1,e.toLowerCase(),null,!1,!1)});We.xlinkHref=new rt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){We[e]=new rt(e,1,!1,e.toLowerCase(),null,!0,!0)});function Fh(e,t,n,r){var i=We.hasOwnProperty(t)?We[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(aw(t,n,i,r)&&(n=null),r||i===null?rw(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var kn=tw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ao=Symbol.for("react.element"),Hr=Symbol.for("react.portal"),$r=Symbol.for("react.fragment"),Vh=Symbol.for("react.strict_mode"),gl=Symbol.for("react.profiler"),Fg=Symbol.for("react.provider"),Vg=Symbol.for("react.context"),Bh=Symbol.for("react.forward_ref"),ml=Symbol.for("react.suspense"),fl=Symbol.for("react.suspense_list"),zh=Symbol.for("react.memo"),In=Symbol.for("react.lazy"),Bg=Symbol.for("react.offscreen"),cd=Symbol.iterator;function $i(e){return e===null||typeof e!="object"?null:(e=cd&&e[cd]||e["@@iterator"],typeof e=="function"?e:null)}var Ce=Object.assign,bc;function ra(e){if(bc===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);bc=t&&t[1]||""}return`
`+bc+e}var wc=!1;function xc(e,t){if(!e||wc)return"";wc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(h){var r=h}Reflect.construct(e,[],t)}else{try{t.call()}catch(h){r=h}e.call(t.prototype)}else{try{throw Error()}catch(h){r=h}e()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),a=r.stack.split(`
`),s=i.length-1,c=a.length-1;1<=s&&0<=c&&i[s]!==a[c];)c--;for(;1<=s&&0<=c;s--,c--)if(i[s]!==a[c]){if(s!==1||c!==1)do if(s--,c--,0>c||i[s]!==a[c]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=c);break}}}finally{wc=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ra(e):""}function ow(e){switch(e.tag){case 5:return ra(e.type);case 16:return ra("Lazy");case 13:return ra("Suspense");case 19:return ra("SuspenseList");case 0:case 2:case 15:return e=xc(e.type,!1),e;case 11:return e=xc(e.type.render,!1),e;case 1:return e=xc(e.type,!0),e;default:return""}}function vl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case $r:return"Fragment";case Hr:return"Portal";case gl:return"Profiler";case Vh:return"StrictMode";case ml:return"Suspense";case fl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Vg:return(e.displayName||"Context")+".Consumer";case Fg:return(e._context.displayName||"Context")+".Provider";case Bh:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case zh:return t=e.displayName||null,t!==null?t:vl(e.type)||"Memo";case In:t=e._payload,e=e._init;try{return vl(e(t))}catch{}}return null}function sw(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return vl(t);case 8:return t===Vh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Xn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function zg(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function cw(e){var t=zg(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,a.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function oo(e){e._valueTracker||(e._valueTracker=cw(e))}function Hg(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=zg(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Jo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function yl(e,t){var n=t.checked;return Ce({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ld(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Xn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function $g(e,t){t=t.checked,t!=null&&Fh(e,"checked",t,!1)}function bl(e,t){$g(e,t);var n=Xn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?wl(e,t.type,n):t.hasOwnProperty("defaultValue")&&wl(e,t.type,Xn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function hd(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function wl(e,t,n){(t!=="number"||Jo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ia=Array.isArray;function ri(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Xn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function xl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(q(91));return Ce({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ud(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(q(92));if(ia(n)){if(1<n.length)throw Error(q(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Xn(n)}}function Wg(e,t){var n=Xn(t.value),r=Xn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function dd(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Gg(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function kl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Gg(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var so,Kg=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(so=so||document.createElement("div"),so.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=so.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function wa(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var sa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},lw=["Webkit","ms","Moz","O"];Object.keys(sa).forEach(function(e){lw.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),sa[t]=sa[e]})});function Qg(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||sa.hasOwnProperty(e)&&sa[e]?(""+t).trim():t+"px"}function Yg(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Qg(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var hw=Ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Tl(e,t){if(t){if(hw[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(q(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(q(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(q(61))}if(t.style!=null&&typeof t.style!="object")throw Error(q(62))}}function Cl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Sl=null;function Hh(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Pl=null,ii=null,ai=null;function pd(e){if(e=Ya(e)){if(typeof Pl!="function")throw Error(q(280));var t=e.stateNode;t&&(t=Os(t),Pl(e.stateNode,e.type,t))}}function Xg(e){ii?ai?ai.push(e):ai=[e]:ii=e}function Jg(){if(ii){var e=ii,t=ai;if(ai=ii=null,pd(e),t)for(e=0;e<t.length;e++)pd(t[e])}}function Zg(e,t){return e(t)}function em(){}var kc=!1;function tm(e,t,n){if(kc)return e(t,n);kc=!0;try{return Zg(e,t,n)}finally{kc=!1,(ii!==null||ai!==null)&&(em(),Jg())}}function xa(e,t){var n=e.stateNode;if(n===null)return null;var r=Os(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(q(231,t,typeof n));return n}var Al=!1;if(mn)try{var Wi={};Object.defineProperty(Wi,"passive",{get:function(){Al=!0}}),window.addEventListener("test",Wi,Wi),window.removeEventListener("test",Wi,Wi)}catch{Al=!1}function uw(e,t,n,r,i,a,s,c,l){var h=Array.prototype.slice.call(arguments,3);try{t.apply(n,h)}catch(u){this.onError(u)}}var ca=!1,Zo=null,es=!1,Nl=null,dw={onError:function(e){ca=!0,Zo=e}};function pw(e,t,n,r,i,a,s,c,l){ca=!1,Zo=null,uw.apply(dw,arguments)}function gw(e,t,n,r,i,a,s,c,l){if(pw.apply(this,arguments),ca){if(ca){var h=Zo;ca=!1,Zo=null}else throw Error(q(198));es||(es=!0,Nl=h)}}function Lr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function nm(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function gd(e){if(Lr(e)!==e)throw Error(q(188))}function mw(e){var t=e.alternate;if(!t){if(t=Lr(e),t===null)throw Error(q(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return gd(i),e;if(a===r)return gd(i),t;a=a.sibling}throw Error(q(188))}if(n.return!==r.return)n=i,r=a;else{for(var s=!1,c=i.child;c;){if(c===n){s=!0,n=i,r=a;break}if(c===r){s=!0,r=i,n=a;break}c=c.sibling}if(!s){for(c=a.child;c;){if(c===n){s=!0,n=a,r=i;break}if(c===r){s=!0,r=a,n=i;break}c=c.sibling}if(!s)throw Error(q(189))}}if(n.alternate!==r)throw Error(q(190))}if(n.tag!==3)throw Error(q(188));return n.stateNode.current===n?e:t}function rm(e){return e=mw(e),e!==null?im(e):null}function im(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=im(e);if(t!==null)return t;e=e.sibling}return null}var am=ft.unstable_scheduleCallback,md=ft.unstable_cancelCallback,fw=ft.unstable_shouldYield,vw=ft.unstable_requestPaint,Ne=ft.unstable_now,yw=ft.unstable_getCurrentPriorityLevel,$h=ft.unstable_ImmediatePriority,om=ft.unstable_UserBlockingPriority,ts=ft.unstable_NormalPriority,bw=ft.unstable_LowPriority,sm=ft.unstable_IdlePriority,Ls=null,Jt=null;function ww(e){if(Jt&&typeof Jt.onCommitFiberRoot=="function")try{Jt.onCommitFiberRoot(Ls,e,void 0,(e.current.flags&128)===128)}catch{}}var qt=Math.clz32?Math.clz32:Tw,xw=Math.log,kw=Math.LN2;function Tw(e){return e>>>=0,e===0?32:31-(xw(e)/kw|0)|0}var co=64,lo=4194304;function aa(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ns(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,s=n&268435455;if(s!==0){var c=s&~i;c!==0?r=aa(c):(a&=s,a!==0&&(r=aa(a)))}else s=n&~i,s!==0?r=aa(s):a!==0&&(r=aa(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-qt(t),i=1<<n,r|=e[n],t&=~i;return r}function Cw(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Sw(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var s=31-qt(a),c=1<<s,l=i[s];l===-1?(!(c&n)||c&r)&&(i[s]=Cw(c,t)):l<=t&&(e.expiredLanes|=c),a&=~c}}function Il(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function cm(){var e=co;return co<<=1,!(co&4194240)&&(co=64),e}function Tc(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ka(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-qt(t),e[t]=n}function Pw(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-qt(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function Wh(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-qt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var ue=0;function lm(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var hm,Gh,um,dm,pm,jl=!1,ho=[],Vn=null,Bn=null,zn=null,ka=new Map,Ta=new Map,En=[],Aw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function fd(e,t){switch(e){case"focusin":case"focusout":Vn=null;break;case"dragenter":case"dragleave":Bn=null;break;case"mouseover":case"mouseout":zn=null;break;case"pointerover":case"pointerout":ka.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ta.delete(t.pointerId)}}function Gi(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Ya(t),t!==null&&Gh(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Nw(e,t,n,r,i){switch(t){case"focusin":return Vn=Gi(Vn,e,t,n,r,i),!0;case"dragenter":return Bn=Gi(Bn,e,t,n,r,i),!0;case"mouseover":return zn=Gi(zn,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return ka.set(a,Gi(ka.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,Ta.set(a,Gi(Ta.get(a)||null,e,t,n,r,i)),!0}return!1}function gm(e){var t=dr(e.target);if(t!==null){var n=Lr(t);if(n!==null){if(t=n.tag,t===13){if(t=nm(n),t!==null){e.blockedOn=t,pm(e.priority,function(){um(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Lo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=El(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Sl=r,n.target.dispatchEvent(r),Sl=null}else return t=Ya(n),t!==null&&Gh(t),e.blockedOn=n,!1;t.shift()}return!0}function vd(e,t,n){Lo(e)&&n.delete(t)}function Iw(){jl=!1,Vn!==null&&Lo(Vn)&&(Vn=null),Bn!==null&&Lo(Bn)&&(Bn=null),zn!==null&&Lo(zn)&&(zn=null),ka.forEach(vd),Ta.forEach(vd)}function Ki(e,t){e.blockedOn===t&&(e.blockedOn=null,jl||(jl=!0,ft.unstable_scheduleCallback(ft.unstable_NormalPriority,Iw)))}function Ca(e){function t(i){return Ki(i,e)}if(0<ho.length){Ki(ho[0],e);for(var n=1;n<ho.length;n++){var r=ho[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Vn!==null&&Ki(Vn,e),Bn!==null&&Ki(Bn,e),zn!==null&&Ki(zn,e),ka.forEach(t),Ta.forEach(t),n=0;n<En.length;n++)r=En[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<En.length&&(n=En[0],n.blockedOn===null);)gm(n),n.blockedOn===null&&En.shift()}var oi=kn.ReactCurrentBatchConfig,rs=!0;function jw(e,t,n,r){var i=ue,a=oi.transition;oi.transition=null;try{ue=1,Kh(e,t,n,r)}finally{ue=i,oi.transition=a}}function Ew(e,t,n,r){var i=ue,a=oi.transition;oi.transition=null;try{ue=4,Kh(e,t,n,r)}finally{ue=i,oi.transition=a}}function Kh(e,t,n,r){if(rs){var i=El(e,t,n,r);if(i===null)Lc(e,t,r,is,n),fd(e,r);else if(Nw(i,e,t,n,r))r.stopPropagation();else if(fd(e,r),t&4&&-1<Aw.indexOf(e)){for(;i!==null;){var a=Ya(i);if(a!==null&&hm(a),a=El(e,t,n,r),a===null&&Lc(e,t,r,is,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Lc(e,t,r,null,n)}}var is=null;function El(e,t,n,r){if(is=null,e=Hh(r),e=dr(e),e!==null)if(t=Lr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=nm(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return is=e,null}function mm(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(yw()){case $h:return 1;case om:return 4;case ts:case bw:return 16;case sm:return 536870912;default:return 16}default:return 16}}var Un=null,Qh=null,Do=null;function fm(){if(Do)return Do;var e,t=Qh,n=t.length,r,i="value"in Un?Un.value:Un.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[a-r];r++);return Do=i.slice(e,1<r?1-r:void 0)}function Mo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function uo(){return!0}function yd(){return!1}function yt(e){function t(n,r,i,a,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=a,this.target=s,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(n=e[c],this[c]=n?n(a):a[c]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?uo:yd,this.isPropagationStopped=yd,this}return Ce(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=uo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=uo)},persist:function(){},isPersistent:uo}),t}var Mi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yh=yt(Mi),Qa=Ce({},Mi,{view:0,detail:0}),Rw=yt(Qa),Cc,Sc,Qi,Ds=Ce({},Qa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xh,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Qi&&(Qi&&e.type==="mousemove"?(Cc=e.screenX-Qi.screenX,Sc=e.screenY-Qi.screenY):Sc=Cc=0,Qi=e),Cc)},movementY:function(e){return"movementY"in e?e.movementY:Sc}}),bd=yt(Ds),Lw=Ce({},Ds,{dataTransfer:0}),Dw=yt(Lw),Mw=Ce({},Qa,{relatedTarget:0}),Pc=yt(Mw),qw=Ce({},Mi,{animationName:0,elapsedTime:0,pseudoElement:0}),Ow=yt(qw),Uw=Ce({},Mi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),_w=yt(Uw),Fw=Ce({},Mi,{data:0}),wd=yt(Fw),Vw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Bw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Hw(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=zw[e])?!!t[e]:!1}function Xh(){return Hw}var $w=Ce({},Qa,{key:function(e){if(e.key){var t=Vw[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Mo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Bw[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xh,charCode:function(e){return e.type==="keypress"?Mo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Mo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ww=yt($w),Gw=Ce({},Ds,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xd=yt(Gw),Kw=Ce({},Qa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xh}),Qw=yt(Kw),Yw=Ce({},Mi,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xw=yt(Yw),Jw=Ce({},Ds,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Zw=yt(Jw),ex=[9,13,27,32],Jh=mn&&"CompositionEvent"in window,la=null;mn&&"documentMode"in document&&(la=document.documentMode);var tx=mn&&"TextEvent"in window&&!la,vm=mn&&(!Jh||la&&8<la&&11>=la),kd=" ",Td=!1;function ym(e,t){switch(e){case"keyup":return ex.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Wr=!1;function nx(e,t){switch(e){case"compositionend":return bm(t);case"keypress":return t.which!==32?null:(Td=!0,kd);case"textInput":return e=t.data,e===kd&&Td?null:e;default:return null}}function rx(e,t){if(Wr)return e==="compositionend"||!Jh&&ym(e,t)?(e=fm(),Do=Qh=Un=null,Wr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return vm&&t.locale!=="ko"?null:t.data;default:return null}}var ix={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ix[e.type]:t==="textarea"}function wm(e,t,n,r){Xg(r),t=as(t,"onChange"),0<t.length&&(n=new Yh("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var ha=null,Sa=null;function ax(e){Em(e,0)}function Ms(e){var t=Qr(e);if(Hg(t))return e}function ox(e,t){if(e==="change")return t}var xm=!1;if(mn){var Ac;if(mn){var Nc="oninput"in document;if(!Nc){var Sd=document.createElement("div");Sd.setAttribute("oninput","return;"),Nc=typeof Sd.oninput=="function"}Ac=Nc}else Ac=!1;xm=Ac&&(!document.documentMode||9<document.documentMode)}function Pd(){ha&&(ha.detachEvent("onpropertychange",km),Sa=ha=null)}function km(e){if(e.propertyName==="value"&&Ms(Sa)){var t=[];wm(t,Sa,e,Hh(e)),tm(ax,t)}}function sx(e,t,n){e==="focusin"?(Pd(),ha=t,Sa=n,ha.attachEvent("onpropertychange",km)):e==="focusout"&&Pd()}function cx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ms(Sa)}function lx(e,t){if(e==="click")return Ms(t)}function hx(e,t){if(e==="input"||e==="change")return Ms(t)}function ux(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ut=typeof Object.is=="function"?Object.is:ux;function Pa(e,t){if(Ut(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!pl.call(t,i)||!Ut(e[i],t[i]))return!1}return!0}function Ad(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Nd(e,t){var n=Ad(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ad(n)}}function Tm(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Tm(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Cm(){for(var e=window,t=Jo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Jo(e.document)}return t}function Zh(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function dx(e){var t=Cm(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Tm(n.ownerDocument.documentElement,n)){if(r!==null&&Zh(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=Nd(n,a);var s=Nd(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var px=mn&&"documentMode"in document&&11>=document.documentMode,Gr=null,Rl=null,ua=null,Ll=!1;function Id(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ll||Gr==null||Gr!==Jo(r)||(r=Gr,"selectionStart"in r&&Zh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ua&&Pa(ua,r)||(ua=r,r=as(Rl,"onSelect"),0<r.length&&(t=new Yh("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Gr)))}function po(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Kr={animationend:po("Animation","AnimationEnd"),animationiteration:po("Animation","AnimationIteration"),animationstart:po("Animation","AnimationStart"),transitionend:po("Transition","TransitionEnd")},Ic={},Sm={};mn&&(Sm=document.createElement("div").style,"AnimationEvent"in window||(delete Kr.animationend.animation,delete Kr.animationiteration.animation,delete Kr.animationstart.animation),"TransitionEvent"in window||delete Kr.transitionend.transition);function qs(e){if(Ic[e])return Ic[e];if(!Kr[e])return e;var t=Kr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Sm)return Ic[e]=t[n];return e}var Pm=qs("animationend"),Am=qs("animationiteration"),Nm=qs("animationstart"),Im=qs("transitionend"),jm=new Map,jd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function nr(e,t){jm.set(e,t),Rr(t,[e])}for(var jc=0;jc<jd.length;jc++){var Ec=jd[jc],gx=Ec.toLowerCase(),mx=Ec[0].toUpperCase()+Ec.slice(1);nr(gx,"on"+mx)}nr(Pm,"onAnimationEnd");nr(Am,"onAnimationIteration");nr(Nm,"onAnimationStart");nr("dblclick","onDoubleClick");nr("focusin","onFocus");nr("focusout","onBlur");nr(Im,"onTransitionEnd");wi("onMouseEnter",["mouseout","mouseover"]);wi("onMouseLeave",["mouseout","mouseover"]);wi("onPointerEnter",["pointerout","pointerover"]);wi("onPointerLeave",["pointerout","pointerover"]);Rr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Rr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Rr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Rr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Rr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Rr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var oa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fx=new Set("cancel close invalid load scroll toggle".split(" ").concat(oa));function Ed(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,gw(r,t,void 0,e),e.currentTarget=null}function Em(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var s=r.length-1;0<=s;s--){var c=r[s],l=c.instance,h=c.currentTarget;if(c=c.listener,l!==a&&i.isPropagationStopped())break e;Ed(i,c,h),a=l}else for(s=0;s<r.length;s++){if(c=r[s],l=c.instance,h=c.currentTarget,c=c.listener,l!==a&&i.isPropagationStopped())break e;Ed(i,c,h),a=l}}}if(es)throw e=Nl,es=!1,Nl=null,e}function ve(e,t){var n=t[Ul];n===void 0&&(n=t[Ul]=new Set);var r=e+"__bubble";n.has(r)||(Rm(t,e,2,!1),n.add(r))}function Rc(e,t,n){var r=0;t&&(r|=4),Rm(n,e,r,t)}var go="_reactListening"+Math.random().toString(36).slice(2);function Aa(e){if(!e[go]){e[go]=!0,_g.forEach(function(n){n!=="selectionchange"&&(fx.has(n)||Rc(n,!1,e),Rc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[go]||(t[go]=!0,Rc("selectionchange",!1,t))}}function Rm(e,t,n,r){switch(mm(t)){case 1:var i=jw;break;case 4:i=Ew;break;default:i=Kh}n=i.bind(null,t,n,e),i=void 0,!Al||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Lc(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i||c.nodeType===8&&c.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;c!==null;){if(s=dr(c),s===null)return;if(l=s.tag,l===5||l===6){r=a=s;continue e}c=c.parentNode}}r=r.return}tm(function(){var h=a,u=Hh(n),d=[];e:{var p=jm.get(e);if(p!==void 0){var y=Yh,x=e;switch(e){case"keypress":if(Mo(n)===0)break e;case"keydown":case"keyup":y=Ww;break;case"focusin":x="focus",y=Pc;break;case"focusout":x="blur",y=Pc;break;case"beforeblur":case"afterblur":y=Pc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=bd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Dw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=Qw;break;case Pm:case Am:case Nm:y=Ow;break;case Im:y=Xw;break;case"scroll":y=Rw;break;case"wheel":y=Zw;break;case"copy":case"cut":case"paste":y=_w;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=xd}var v=(t&4)!==0,k=!v&&e==="scroll",f=v?p!==null?p+"Capture":null:p;v=[];for(var m=h,b;m!==null;){b=m;var w=b.stateNode;if(b.tag===5&&w!==null&&(b=w,f!==null&&(w=xa(m,f),w!=null&&v.push(Na(m,w,b)))),k)break;m=m.return}0<v.length&&(p=new y(p,x,null,n,u),d.push({event:p,listeners:v}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",p&&n!==Sl&&(x=n.relatedTarget||n.fromElement)&&(dr(x)||x[fn]))break e;if((y||p)&&(p=u.window===u?u:(p=u.ownerDocument)?p.defaultView||p.parentWindow:window,y?(x=n.relatedTarget||n.toElement,y=h,x=x?dr(x):null,x!==null&&(k=Lr(x),x!==k||x.tag!==5&&x.tag!==6)&&(x=null)):(y=null,x=h),y!==x)){if(v=bd,w="onMouseLeave",f="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(v=xd,w="onPointerLeave",f="onPointerEnter",m="pointer"),k=y==null?p:Qr(y),b=x==null?p:Qr(x),p=new v(w,m+"leave",y,n,u),p.target=k,p.relatedTarget=b,w=null,dr(u)===h&&(v=new v(f,m+"enter",x,n,u),v.target=b,v.relatedTarget=k,w=v),k=w,y&&x)t:{for(v=y,f=x,m=0,b=v;b;b=Ur(b))m++;for(b=0,w=f;w;w=Ur(w))b++;for(;0<m-b;)v=Ur(v),m--;for(;0<b-m;)f=Ur(f),b--;for(;m--;){if(v===f||f!==null&&v===f.alternate)break t;v=Ur(v),f=Ur(f)}v=null}else v=null;y!==null&&Rd(d,p,y,v,!1),x!==null&&k!==null&&Rd(d,k,x,v,!0)}}e:{if(p=h?Qr(h):window,y=p.nodeName&&p.nodeName.toLowerCase(),y==="select"||y==="input"&&p.type==="file")var T=ox;else if(Cd(p))if(xm)T=hx;else{T=cx;var C=sx}else(y=p.nodeName)&&y.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(T=lx);if(T&&(T=T(e,h))){wm(d,T,n,u);break e}C&&C(e,p,h),e==="focusout"&&(C=p._wrapperState)&&C.controlled&&p.type==="number"&&wl(p,"number",p.value)}switch(C=h?Qr(h):window,e){case"focusin":(Cd(C)||C.contentEditable==="true")&&(Gr=C,Rl=h,ua=null);break;case"focusout":ua=Rl=Gr=null;break;case"mousedown":Ll=!0;break;case"contextmenu":case"mouseup":case"dragend":Ll=!1,Id(d,n,u);break;case"selectionchange":if(px)break;case"keydown":case"keyup":Id(d,n,u)}var P;if(Jh)e:{switch(e){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else Wr?ym(e,n)&&(S="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(S="onCompositionStart");S&&(vm&&n.locale!=="ko"&&(Wr||S!=="onCompositionStart"?S==="onCompositionEnd"&&Wr&&(P=fm()):(Un=u,Qh="value"in Un?Un.value:Un.textContent,Wr=!0)),C=as(h,S),0<C.length&&(S=new wd(S,e,null,n,u),d.push({event:S,listeners:C}),P?S.data=P:(P=bm(n),P!==null&&(S.data=P)))),(P=tx?nx(e,n):rx(e,n))&&(h=as(h,"onBeforeInput"),0<h.length&&(u=new wd("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:h}),u.data=P))}Em(d,t)})}function Na(e,t,n){return{instance:e,listener:t,currentTarget:n}}function as(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=xa(e,n),a!=null&&r.unshift(Na(e,a,i)),a=xa(e,t),a!=null&&r.push(Na(e,a,i))),e=e.return}return r}function Ur(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Rd(e,t,n,r,i){for(var a=t._reactName,s=[];n!==null&&n!==r;){var c=n,l=c.alternate,h=c.stateNode;if(l!==null&&l===r)break;c.tag===5&&h!==null&&(c=h,i?(l=xa(n,a),l!=null&&s.unshift(Na(n,l,c))):i||(l=xa(n,a),l!=null&&s.push(Na(n,l,c)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var vx=/\r\n?/g,yx=/\u0000|\uFFFD/g;function Ld(e){return(typeof e=="string"?e:""+e).replace(vx,`
`).replace(yx,"")}function mo(e,t,n){if(t=Ld(t),Ld(e)!==t&&n)throw Error(q(425))}function os(){}var Dl=null,Ml=null;function ql(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ol=typeof setTimeout=="function"?setTimeout:void 0,bx=typeof clearTimeout=="function"?clearTimeout:void 0,Dd=typeof Promise=="function"?Promise:void 0,wx=typeof queueMicrotask=="function"?queueMicrotask:typeof Dd<"u"?function(e){return Dd.resolve(null).then(e).catch(xx)}:Ol;function xx(e){setTimeout(function(){throw e})}function Dc(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Ca(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ca(t)}function Hn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Md(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var qi=Math.random().toString(36).slice(2),Kt="__reactFiber$"+qi,Ia="__reactProps$"+qi,fn="__reactContainer$"+qi,Ul="__reactEvents$"+qi,kx="__reactListeners$"+qi,Tx="__reactHandles$"+qi;function dr(e){var t=e[Kt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[fn]||n[Kt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Md(e);e!==null;){if(n=e[Kt])return n;e=Md(e)}return t}e=n,n=e.parentNode}return null}function Ya(e){return e=e[Kt]||e[fn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Qr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(q(33))}function Os(e){return e[Ia]||null}var _l=[],Yr=-1;function rr(e){return{current:e}}function ye(e){0>Yr||(e.current=_l[Yr],_l[Yr]=null,Yr--)}function ge(e,t){Yr++,_l[Yr]=e.current,e.current=t}var Jn={},Je=rr(Jn),st=rr(!1),Pr=Jn;function xi(e,t){var n=e.type.contextTypes;if(!n)return Jn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ct(e){return e=e.childContextTypes,e!=null}function ss(){ye(st),ye(Je)}function qd(e,t,n){if(Je.current!==Jn)throw Error(q(168));ge(Je,t),ge(st,n)}function Lm(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(q(108,sw(e)||"Unknown",i));return Ce({},n,r)}function cs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Jn,Pr=Je.current,ge(Je,e),ge(st,st.current),!0}function Od(e,t,n){var r=e.stateNode;if(!r)throw Error(q(169));n?(e=Lm(e,t,Pr),r.__reactInternalMemoizedMergedChildContext=e,ye(st),ye(Je),ge(Je,e)):ye(st),ge(st,n)}var ln=null,Us=!1,Mc=!1;function Dm(e){ln===null?ln=[e]:ln.push(e)}function Cx(e){Us=!0,Dm(e)}function ir(){if(!Mc&&ln!==null){Mc=!0;var e=0,t=ue;try{var n=ln;for(ue=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ln=null,Us=!1}catch(i){throw ln!==null&&(ln=ln.slice(e+1)),am($h,ir),i}finally{ue=t,Mc=!1}}return null}var Xr=[],Jr=0,ls=null,hs=0,wt=[],xt=0,Ar=null,dn=1,pn="";function lr(e,t){Xr[Jr++]=hs,Xr[Jr++]=ls,ls=e,hs=t}function Mm(e,t,n){wt[xt++]=dn,wt[xt++]=pn,wt[xt++]=Ar,Ar=e;var r=dn;e=pn;var i=32-qt(r)-1;r&=~(1<<i),n+=1;var a=32-qt(t)+i;if(30<a){var s=i-i%5;a=(r&(1<<s)-1).toString(32),r>>=s,i-=s,dn=1<<32-qt(t)+i|n<<i|r,pn=a+e}else dn=1<<a|n<<i|r,pn=e}function eu(e){e.return!==null&&(lr(e,1),Mm(e,1,0))}function tu(e){for(;e===ls;)ls=Xr[--Jr],Xr[Jr]=null,hs=Xr[--Jr],Xr[Jr]=null;for(;e===Ar;)Ar=wt[--xt],wt[xt]=null,pn=wt[--xt],wt[xt]=null,dn=wt[--xt],wt[xt]=null}var gt=null,pt=null,we=!1,Dt=null;function qm(e,t){var n=kt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ud(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,gt=e,pt=Hn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,gt=e,pt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ar!==null?{id:dn,overflow:pn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=kt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,gt=e,pt=null,!0):!1;default:return!1}}function Fl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Vl(e){if(we){var t=pt;if(t){var n=t;if(!Ud(e,t)){if(Fl(e))throw Error(q(418));t=Hn(n.nextSibling);var r=gt;t&&Ud(e,t)?qm(r,n):(e.flags=e.flags&-4097|2,we=!1,gt=e)}}else{if(Fl(e))throw Error(q(418));e.flags=e.flags&-4097|2,we=!1,gt=e}}}function _d(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;gt=e}function fo(e){if(e!==gt)return!1;if(!we)return _d(e),we=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ql(e.type,e.memoizedProps)),t&&(t=pt)){if(Fl(e))throw Om(),Error(q(418));for(;t;)qm(e,t),t=Hn(t.nextSibling)}if(_d(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(q(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){pt=Hn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}pt=null}}else pt=gt?Hn(e.stateNode.nextSibling):null;return!0}function Om(){for(var e=pt;e;)e=Hn(e.nextSibling)}function ki(){pt=gt=null,we=!1}function nu(e){Dt===null?Dt=[e]:Dt.push(e)}var Sx=kn.ReactCurrentBatchConfig;function Yi(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(q(309));var r=n.stateNode}if(!r)throw Error(q(147,e));var i=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(s){var c=i.refs;s===null?delete c[a]:c[a]=s},t._stringRef=a,t)}if(typeof e!="string")throw Error(q(284));if(!n._owner)throw Error(q(290,e))}return e}function vo(e,t){throw e=Object.prototype.toString.call(t),Error(q(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Fd(e){var t=e._init;return t(e._payload)}function Um(e){function t(f,m){if(e){var b=f.deletions;b===null?(f.deletions=[m],f.flags|=16):b.push(m)}}function n(f,m){if(!e)return null;for(;m!==null;)t(f,m),m=m.sibling;return null}function r(f,m){for(f=new Map;m!==null;)m.key!==null?f.set(m.key,m):f.set(m.index,m),m=m.sibling;return f}function i(f,m){return f=Kn(f,m),f.index=0,f.sibling=null,f}function a(f,m,b){return f.index=b,e?(b=f.alternate,b!==null?(b=b.index,b<m?(f.flags|=2,m):b):(f.flags|=2,m)):(f.flags|=1048576,m)}function s(f){return e&&f.alternate===null&&(f.flags|=2),f}function c(f,m,b,w){return m===null||m.tag!==6?(m=Bc(b,f.mode,w),m.return=f,m):(m=i(m,b),m.return=f,m)}function l(f,m,b,w){var T=b.type;return T===$r?u(f,m,b.props.children,w,b.key):m!==null&&(m.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===In&&Fd(T)===m.type)?(w=i(m,b.props),w.ref=Yi(f,m,b),w.return=f,w):(w=Bo(b.type,b.key,b.props,null,f.mode,w),w.ref=Yi(f,m,b),w.return=f,w)}function h(f,m,b,w){return m===null||m.tag!==4||m.stateNode.containerInfo!==b.containerInfo||m.stateNode.implementation!==b.implementation?(m=zc(b,f.mode,w),m.return=f,m):(m=i(m,b.children||[]),m.return=f,m)}function u(f,m,b,w,T){return m===null||m.tag!==7?(m=Tr(b,f.mode,w,T),m.return=f,m):(m=i(m,b),m.return=f,m)}function d(f,m,b){if(typeof m=="string"&&m!==""||typeof m=="number")return m=Bc(""+m,f.mode,b),m.return=f,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ao:return b=Bo(m.type,m.key,m.props,null,f.mode,b),b.ref=Yi(f,null,m),b.return=f,b;case Hr:return m=zc(m,f.mode,b),m.return=f,m;case In:var w=m._init;return d(f,w(m._payload),b)}if(ia(m)||$i(m))return m=Tr(m,f.mode,b,null),m.return=f,m;vo(f,m)}return null}function p(f,m,b,w){var T=m!==null?m.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return T!==null?null:c(f,m,""+b,w);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case ao:return b.key===T?l(f,m,b,w):null;case Hr:return b.key===T?h(f,m,b,w):null;case In:return T=b._init,p(f,m,T(b._payload),w)}if(ia(b)||$i(b))return T!==null?null:u(f,m,b,w,null);vo(f,b)}return null}function y(f,m,b,w,T){if(typeof w=="string"&&w!==""||typeof w=="number")return f=f.get(b)||null,c(m,f,""+w,T);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case ao:return f=f.get(w.key===null?b:w.key)||null,l(m,f,w,T);case Hr:return f=f.get(w.key===null?b:w.key)||null,h(m,f,w,T);case In:var C=w._init;return y(f,m,b,C(w._payload),T)}if(ia(w)||$i(w))return f=f.get(b)||null,u(m,f,w,T,null);vo(m,w)}return null}function x(f,m,b,w){for(var T=null,C=null,P=m,S=m=0,N=null;P!==null&&S<b.length;S++){P.index>S?(N=P,P=null):N=P.sibling;var I=p(f,P,b[S],w);if(I===null){P===null&&(P=N);break}e&&P&&I.alternate===null&&t(f,P),m=a(I,m,S),C===null?T=I:C.sibling=I,C=I,P=N}if(S===b.length)return n(f,P),we&&lr(f,S),T;if(P===null){for(;S<b.length;S++)P=d(f,b[S],w),P!==null&&(m=a(P,m,S),C===null?T=P:C.sibling=P,C=P);return we&&lr(f,S),T}for(P=r(f,P);S<b.length;S++)N=y(P,f,S,b[S],w),N!==null&&(e&&N.alternate!==null&&P.delete(N.key===null?S:N.key),m=a(N,m,S),C===null?T=N:C.sibling=N,C=N);return e&&P.forEach(function(O){return t(f,O)}),we&&lr(f,S),T}function v(f,m,b,w){var T=$i(b);if(typeof T!="function")throw Error(q(150));if(b=T.call(b),b==null)throw Error(q(151));for(var C=T=null,P=m,S=m=0,N=null,I=b.next();P!==null&&!I.done;S++,I=b.next()){P.index>S?(N=P,P=null):N=P.sibling;var O=p(f,P,I.value,w);if(O===null){P===null&&(P=N);break}e&&P&&O.alternate===null&&t(f,P),m=a(O,m,S),C===null?T=O:C.sibling=O,C=O,P=N}if(I.done)return n(f,P),we&&lr(f,S),T;if(P===null){for(;!I.done;S++,I=b.next())I=d(f,I.value,w),I!==null&&(m=a(I,m,S),C===null?T=I:C.sibling=I,C=I);return we&&lr(f,S),T}for(P=r(f,P);!I.done;S++,I=b.next())I=y(P,f,S,I.value,w),I!==null&&(e&&I.alternate!==null&&P.delete(I.key===null?S:I.key),m=a(I,m,S),C===null?T=I:C.sibling=I,C=I);return e&&P.forEach(function(R){return t(f,R)}),we&&lr(f,S),T}function k(f,m,b,w){if(typeof b=="object"&&b!==null&&b.type===$r&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case ao:e:{for(var T=b.key,C=m;C!==null;){if(C.key===T){if(T=b.type,T===$r){if(C.tag===7){n(f,C.sibling),m=i(C,b.props.children),m.return=f,f=m;break e}}else if(C.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===In&&Fd(T)===C.type){n(f,C.sibling),m=i(C,b.props),m.ref=Yi(f,C,b),m.return=f,f=m;break e}n(f,C);break}else t(f,C);C=C.sibling}b.type===$r?(m=Tr(b.props.children,f.mode,w,b.key),m.return=f,f=m):(w=Bo(b.type,b.key,b.props,null,f.mode,w),w.ref=Yi(f,m,b),w.return=f,f=w)}return s(f);case Hr:e:{for(C=b.key;m!==null;){if(m.key===C)if(m.tag===4&&m.stateNode.containerInfo===b.containerInfo&&m.stateNode.implementation===b.implementation){n(f,m.sibling),m=i(m,b.children||[]),m.return=f,f=m;break e}else{n(f,m);break}else t(f,m);m=m.sibling}m=zc(b,f.mode,w),m.return=f,f=m}return s(f);case In:return C=b._init,k(f,m,C(b._payload),w)}if(ia(b))return x(f,m,b,w);if($i(b))return v(f,m,b,w);vo(f,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,m!==null&&m.tag===6?(n(f,m.sibling),m=i(m,b),m.return=f,f=m):(n(f,m),m=Bc(b,f.mode,w),m.return=f,f=m),s(f)):n(f,m)}return k}var Ti=Um(!0),_m=Um(!1),us=rr(null),ds=null,Zr=null,ru=null;function iu(){ru=Zr=ds=null}function au(e){var t=us.current;ye(us),e._currentValue=t}function Bl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function si(e,t){ds=e,ru=Zr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(at=!0),e.firstContext=null)}function St(e){var t=e._currentValue;if(ru!==e)if(e={context:e,memoizedValue:t,next:null},Zr===null){if(ds===null)throw Error(q(308));Zr=e,ds.dependencies={lanes:0,firstContext:e}}else Zr=Zr.next=e;return t}var pr=null;function ou(e){pr===null?pr=[e]:pr.push(e)}function Fm(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,ou(t)):(n.next=i.next,i.next=n),t.interleaved=n,vn(e,r)}function vn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var jn=!1;function su(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Vm(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function gn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function $n(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,oe&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,vn(e,n)}return i=r.interleaved,i===null?(t.next=t,ou(r)):(t.next=i.next,i.next=t),r.interleaved=t,vn(e,n)}function qo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Wh(e,n)}}function Vd(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=s:a=a.next=s,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ps(e,t,n,r){var i=e.updateQueue;jn=!1;var a=i.firstBaseUpdate,s=i.lastBaseUpdate,c=i.shared.pending;if(c!==null){i.shared.pending=null;var l=c,h=l.next;l.next=null,s===null?a=h:s.next=h,s=l;var u=e.alternate;u!==null&&(u=u.updateQueue,c=u.lastBaseUpdate,c!==s&&(c===null?u.firstBaseUpdate=h:c.next=h,u.lastBaseUpdate=l))}if(a!==null){var d=i.baseState;s=0,u=h=l=null,c=a;do{var p=c.lane,y=c.eventTime;if((r&p)===p){u!==null&&(u=u.next={eventTime:y,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var x=e,v=c;switch(p=t,y=n,v.tag){case 1:if(x=v.payload,typeof x=="function"){d=x.call(y,d,p);break e}d=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=v.payload,p=typeof x=="function"?x.call(y,d,p):x,p==null)break e;d=Ce({},d,p);break e;case 2:jn=!0}}c.callback!==null&&c.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[c]:p.push(c))}else y={eventTime:y,lane:p,tag:c.tag,payload:c.payload,callback:c.callback,next:null},u===null?(h=u=y,l=d):u=u.next=y,s|=p;if(c=c.next,c===null){if(c=i.shared.pending,c===null)break;p=c,c=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(u===null&&(l=d),i.baseState=l,i.firstBaseUpdate=h,i.lastBaseUpdate=u,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);Ir|=s,e.lanes=s,e.memoizedState=d}}function Bd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(q(191,i));i.call(r)}}}var Xa={},Zt=rr(Xa),ja=rr(Xa),Ea=rr(Xa);function gr(e){if(e===Xa)throw Error(q(174));return e}function cu(e,t){switch(ge(Ea,t),ge(ja,e),ge(Zt,Xa),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:kl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=kl(t,e)}ye(Zt),ge(Zt,t)}function Ci(){ye(Zt),ye(ja),ye(Ea)}function Bm(e){gr(Ea.current);var t=gr(Zt.current),n=kl(t,e.type);t!==n&&(ge(ja,e),ge(Zt,n))}function lu(e){ja.current===e&&(ye(Zt),ye(ja))}var xe=rr(0);function gs(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var qc=[];function hu(){for(var e=0;e<qc.length;e++)qc[e]._workInProgressVersionPrimary=null;qc.length=0}var Oo=kn.ReactCurrentDispatcher,Oc=kn.ReactCurrentBatchConfig,Nr=0,Te=null,Le=null,Fe=null,ms=!1,da=!1,Ra=0,Px=0;function Ke(){throw Error(q(321))}function uu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ut(e[n],t[n]))return!1;return!0}function du(e,t,n,r,i,a){if(Nr=a,Te=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Oo.current=e===null||e.memoizedState===null?jx:Ex,e=n(r,i),da){a=0;do{if(da=!1,Ra=0,25<=a)throw Error(q(301));a+=1,Fe=Le=null,t.updateQueue=null,Oo.current=Rx,e=n(r,i)}while(da)}if(Oo.current=fs,t=Le!==null&&Le.next!==null,Nr=0,Fe=Le=Te=null,ms=!1,t)throw Error(q(300));return e}function pu(){var e=Ra!==0;return Ra=0,e}function Ht(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Fe===null?Te.memoizedState=Fe=e:Fe=Fe.next=e,Fe}function Pt(){if(Le===null){var e=Te.alternate;e=e!==null?e.memoizedState:null}else e=Le.next;var t=Fe===null?Te.memoizedState:Fe.next;if(t!==null)Fe=t,Le=e;else{if(e===null)throw Error(q(310));Le=e,e={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},Fe===null?Te.memoizedState=Fe=e:Fe=Fe.next=e}return Fe}function La(e,t){return typeof t=="function"?t(e):t}function Uc(e){var t=Pt(),n=t.queue;if(n===null)throw Error(q(311));n.lastRenderedReducer=e;var r=Le,i=r.baseQueue,a=n.pending;if(a!==null){if(i!==null){var s=i.next;i.next=a.next,a.next=s}r.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,r=r.baseState;var c=s=null,l=null,h=a;do{var u=h.lane;if((Nr&u)===u)l!==null&&(l=l.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:e(r,h.action);else{var d={lane:u,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};l===null?(c=l=d,s=r):l=l.next=d,Te.lanes|=u,Ir|=u}h=h.next}while(h!==null&&h!==a);l===null?s=r:l.next=c,Ut(r,t.memoizedState)||(at=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do a=i.lane,Te.lanes|=a,Ir|=a,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function _c(e){var t=Pt(),n=t.queue;if(n===null)throw Error(q(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do a=e(a,s.action),s=s.next;while(s!==i);Ut(a,t.memoizedState)||(at=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function zm(){}function Hm(e,t){var n=Te,r=Pt(),i=t(),a=!Ut(r.memoizedState,i);if(a&&(r.memoizedState=i,at=!0),r=r.queue,gu(Gm.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||Fe!==null&&Fe.memoizedState.tag&1){if(n.flags|=2048,Da(9,Wm.bind(null,n,r,i,t),void 0,null),Be===null)throw Error(q(349));Nr&30||$m(n,t,i)}return i}function $m(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Te.updateQueue,t===null?(t={lastEffect:null,stores:null},Te.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Wm(e,t,n,r){t.value=n,t.getSnapshot=r,Km(t)&&Qm(e)}function Gm(e,t,n){return n(function(){Km(t)&&Qm(e)})}function Km(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ut(e,n)}catch{return!0}}function Qm(e){var t=vn(e,1);t!==null&&Ot(t,e,1,-1)}function zd(e){var t=Ht();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:La,lastRenderedState:e},t.queue=e,e=e.dispatch=Ix.bind(null,Te,e),[t.memoizedState,e]}function Da(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Te.updateQueue,t===null?(t={lastEffect:null,stores:null},Te.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Ym(){return Pt().memoizedState}function Uo(e,t,n,r){var i=Ht();Te.flags|=e,i.memoizedState=Da(1|t,n,void 0,r===void 0?null:r)}function _s(e,t,n,r){var i=Pt();r=r===void 0?null:r;var a=void 0;if(Le!==null){var s=Le.memoizedState;if(a=s.destroy,r!==null&&uu(r,s.deps)){i.memoizedState=Da(t,n,a,r);return}}Te.flags|=e,i.memoizedState=Da(1|t,n,a,r)}function Hd(e,t){return Uo(8390656,8,e,t)}function gu(e,t){return _s(2048,8,e,t)}function Xm(e,t){return _s(4,2,e,t)}function Jm(e,t){return _s(4,4,e,t)}function Zm(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ef(e,t,n){return n=n!=null?n.concat([e]):null,_s(4,4,Zm.bind(null,t,e),n)}function mu(){}function tf(e,t){var n=Pt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&uu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function nf(e,t){var n=Pt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&uu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function rf(e,t,n){return Nr&21?(Ut(n,t)||(n=cm(),Te.lanes|=n,Ir|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,at=!0),e.memoizedState=n)}function Ax(e,t){var n=ue;ue=n!==0&&4>n?n:4,e(!0);var r=Oc.transition;Oc.transition={};try{e(!1),t()}finally{ue=n,Oc.transition=r}}function af(){return Pt().memoizedState}function Nx(e,t,n){var r=Gn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},of(e))sf(t,n);else if(n=Fm(e,t,n,r),n!==null){var i=nt();Ot(n,e,r,i),cf(n,t,r)}}function Ix(e,t,n){var r=Gn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(of(e))sf(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var s=t.lastRenderedState,c=a(s,n);if(i.hasEagerState=!0,i.eagerState=c,Ut(c,s)){var l=t.interleaved;l===null?(i.next=i,ou(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=Fm(e,t,i,r),n!==null&&(i=nt(),Ot(n,e,r,i),cf(n,t,r))}}function of(e){var t=e.alternate;return e===Te||t!==null&&t===Te}function sf(e,t){da=ms=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function cf(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Wh(e,n)}}var fs={readContext:St,useCallback:Ke,useContext:Ke,useEffect:Ke,useImperativeHandle:Ke,useInsertionEffect:Ke,useLayoutEffect:Ke,useMemo:Ke,useReducer:Ke,useRef:Ke,useState:Ke,useDebugValue:Ke,useDeferredValue:Ke,useTransition:Ke,useMutableSource:Ke,useSyncExternalStore:Ke,useId:Ke,unstable_isNewReconciler:!1},jx={readContext:St,useCallback:function(e,t){return Ht().memoizedState=[e,t===void 0?null:t],e},useContext:St,useEffect:Hd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Uo(4194308,4,Zm.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Uo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Uo(4,2,e,t)},useMemo:function(e,t){var n=Ht();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Ht();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Nx.bind(null,Te,e),[r.memoizedState,e]},useRef:function(e){var t=Ht();return e={current:e},t.memoizedState=e},useState:zd,useDebugValue:mu,useDeferredValue:function(e){return Ht().memoizedState=e},useTransition:function(){var e=zd(!1),t=e[0];return e=Ax.bind(null,e[1]),Ht().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Te,i=Ht();if(we){if(n===void 0)throw Error(q(407));n=n()}else{if(n=t(),Be===null)throw Error(q(349));Nr&30||$m(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,Hd(Gm.bind(null,r,a,e),[e]),r.flags|=2048,Da(9,Wm.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=Ht(),t=Be.identifierPrefix;if(we){var n=pn,r=dn;n=(r&~(1<<32-qt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ra++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Px++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Ex={readContext:St,useCallback:tf,useContext:St,useEffect:gu,useImperativeHandle:ef,useInsertionEffect:Xm,useLayoutEffect:Jm,useMemo:nf,useReducer:Uc,useRef:Ym,useState:function(){return Uc(La)},useDebugValue:mu,useDeferredValue:function(e){var t=Pt();return rf(t,Le.memoizedState,e)},useTransition:function(){var e=Uc(La)[0],t=Pt().memoizedState;return[e,t]},useMutableSource:zm,useSyncExternalStore:Hm,useId:af,unstable_isNewReconciler:!1},Rx={readContext:St,useCallback:tf,useContext:St,useEffect:gu,useImperativeHandle:ef,useInsertionEffect:Xm,useLayoutEffect:Jm,useMemo:nf,useReducer:_c,useRef:Ym,useState:function(){return _c(La)},useDebugValue:mu,useDeferredValue:function(e){var t=Pt();return Le===null?t.memoizedState=e:rf(t,Le.memoizedState,e)},useTransition:function(){var e=_c(La)[0],t=Pt().memoizedState;return[e,t]},useMutableSource:zm,useSyncExternalStore:Hm,useId:af,unstable_isNewReconciler:!1};function It(e,t){if(e&&e.defaultProps){t=Ce({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function zl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Ce({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Fs={isMounted:function(e){return(e=e._reactInternals)?Lr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=nt(),i=Gn(e),a=gn(r,i);a.payload=t,n!=null&&(a.callback=n),t=$n(e,a,i),t!==null&&(Ot(t,e,i,r),qo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=nt(),i=Gn(e),a=gn(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=$n(e,a,i),t!==null&&(Ot(t,e,i,r),qo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=nt(),r=Gn(e),i=gn(n,r);i.tag=2,t!=null&&(i.callback=t),t=$n(e,i,r),t!==null&&(Ot(t,e,r,n),qo(t,e,r))}};function $d(e,t,n,r,i,a,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,s):t.prototype&&t.prototype.isPureReactComponent?!Pa(n,r)||!Pa(i,a):!0}function lf(e,t,n){var r=!1,i=Jn,a=t.contextType;return typeof a=="object"&&a!==null?a=St(a):(i=ct(t)?Pr:Je.current,r=t.contextTypes,a=(r=r!=null)?xi(e,i):Jn),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Fs,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function Wd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Fs.enqueueReplaceState(t,t.state,null)}function Hl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},su(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=St(a):(a=ct(t)?Pr:Je.current,i.context=xi(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(zl(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Fs.enqueueReplaceState(i,i.state,null),ps(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Si(e,t){try{var n="",r=t;do n+=ow(r),r=r.return;while(r);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function Fc(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function $l(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Lx=typeof WeakMap=="function"?WeakMap:Map;function hf(e,t,n){n=gn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ys||(ys=!0,th=r),$l(e,t)},n}function uf(e,t,n){n=gn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){$l(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){$l(e,t),typeof r!="function"&&(Wn===null?Wn=new Set([this]):Wn.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Gd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Lx;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Gx.bind(null,e,t,n),t.then(e,e))}function Kd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Qd(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=gn(-1,1),t.tag=2,$n(n,t,1))),n.lanes|=1),e)}var Dx=kn.ReactCurrentOwner,at=!1;function et(e,t,n,r){t.child=e===null?_m(t,null,n,r):Ti(t,e.child,n,r)}function Yd(e,t,n,r,i){n=n.render;var a=t.ref;return si(t,i),r=du(e,t,n,r,a,i),n=pu(),e!==null&&!at?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,yn(e,t,i)):(we&&n&&eu(t),t.flags|=1,et(e,t,r,i),t.child)}function Xd(e,t,n,r,i){if(e===null){var a=n.type;return typeof a=="function"&&!Tu(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,df(e,t,a,r,i)):(e=Bo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&i)){var s=a.memoizedProps;if(n=n.compare,n=n!==null?n:Pa,n(s,r)&&e.ref===t.ref)return yn(e,t,i)}return t.flags|=1,e=Kn(a,r),e.ref=t.ref,e.return=t,t.child=e}function df(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Pa(a,r)&&e.ref===t.ref)if(at=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(at=!0);else return t.lanes=e.lanes,yn(e,t,i)}return Wl(e,t,n,r,i)}function pf(e,t,n){var r=t.pendingProps,i=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ge(ti,ut),ut|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ge(ti,ut),ut|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,ge(ti,ut),ut|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,ge(ti,ut),ut|=r;return et(e,t,i,n),t.child}function gf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Wl(e,t,n,r,i){var a=ct(n)?Pr:Je.current;return a=xi(t,a),si(t,i),n=du(e,t,n,r,a,i),r=pu(),e!==null&&!at?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,yn(e,t,i)):(we&&r&&eu(t),t.flags|=1,et(e,t,n,i),t.child)}function Jd(e,t,n,r,i){if(ct(n)){var a=!0;cs(t)}else a=!1;if(si(t,i),t.stateNode===null)_o(e,t),lf(t,n,r),Hl(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,c=t.memoizedProps;s.props=c;var l=s.context,h=n.contextType;typeof h=="object"&&h!==null?h=St(h):(h=ct(n)?Pr:Je.current,h=xi(t,h));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof s.getSnapshotBeforeUpdate=="function";d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(c!==r||l!==h)&&Wd(t,s,r,h),jn=!1;var p=t.memoizedState;s.state=p,ps(t,r,s,i),l=t.memoizedState,c!==r||p!==l||st.current||jn?(typeof u=="function"&&(zl(t,n,u,r),l=t.memoizedState),(c=jn||$d(t,n,c,r,p,l,h))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=h,r=c):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Vm(e,t),c=t.memoizedProps,h=t.type===t.elementType?c:It(t.type,c),s.props=h,d=t.pendingProps,p=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=St(l):(l=ct(n)?Pr:Je.current,l=xi(t,l));var y=n.getDerivedStateFromProps;(u=typeof y=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(c!==d||p!==l)&&Wd(t,s,r,l),jn=!1,p=t.memoizedState,s.state=p,ps(t,r,s,i);var x=t.memoizedState;c!==d||p!==x||st.current||jn?(typeof y=="function"&&(zl(t,n,y,r),x=t.memoizedState),(h=jn||$d(t,n,h,r,p,x,l)||!1)?(u||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,x,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,x,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||c===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),s.props=r,s.state=x,s.context=l,r=h):(typeof s.componentDidUpdate!="function"||c===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Gl(e,t,n,r,a,i)}function Gl(e,t,n,r,i,a){gf(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&Od(t,n,!1),yn(e,t,a);r=t.stateNode,Dx.current=t;var c=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Ti(t,e.child,null,a),t.child=Ti(t,null,c,a)):et(e,t,c,a),t.memoizedState=r.state,i&&Od(t,n,!0),t.child}function mf(e){var t=e.stateNode;t.pendingContext?qd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&qd(e,t.context,!1),cu(e,t.containerInfo)}function Zd(e,t,n,r,i){return ki(),nu(i),t.flags|=256,et(e,t,n,r),t.child}var Kl={dehydrated:null,treeContext:null,retryLane:0};function Ql(e){return{baseLanes:e,cachePool:null,transitions:null}}function ff(e,t,n){var r=t.pendingProps,i=xe.current,a=!1,s=(t.flags&128)!==0,c;if((c=s)||(c=e!==null&&e.memoizedState===null?!1:(i&2)!==0),c?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ge(xe,i&1),e===null)return Vl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,a?(r=t.mode,a=t.child,s={mode:"hidden",children:s},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=s):a=zs(s,r,0,null),e=Tr(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Ql(n),t.memoizedState=Kl,e):fu(t,s));if(i=e.memoizedState,i!==null&&(c=i.dehydrated,c!==null))return Mx(e,t,s,r,c,i,n);if(a){a=r.fallback,s=t.mode,i=e.child,c=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=Kn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),c!==null?a=Kn(c,a):(a=Tr(a,s,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,s=e.child.memoizedState,s=s===null?Ql(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},a.memoizedState=s,a.childLanes=e.childLanes&~n,t.memoizedState=Kl,r}return a=e.child,e=a.sibling,r=Kn(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function fu(e,t){return t=zs({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function yo(e,t,n,r){return r!==null&&nu(r),Ti(t,e.child,null,n),e=fu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Mx(e,t,n,r,i,a,s){if(n)return t.flags&256?(t.flags&=-257,r=Fc(Error(q(422))),yo(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=zs({mode:"visible",children:r.children},i,0,null),a=Tr(a,i,s,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&Ti(t,e.child,null,s),t.child.memoizedState=Ql(s),t.memoizedState=Kl,a);if(!(t.mode&1))return yo(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var c=r.dgst;return r=c,a=Error(q(419)),r=Fc(a,r,void 0),yo(e,t,s,r)}if(c=(s&e.childLanes)!==0,at||c){if(r=Be,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,vn(e,i),Ot(r,e,i,-1))}return ku(),r=Fc(Error(q(421))),yo(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Kx.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,pt=Hn(i.nextSibling),gt=t,we=!0,Dt=null,e!==null&&(wt[xt++]=dn,wt[xt++]=pn,wt[xt++]=Ar,dn=e.id,pn=e.overflow,Ar=t),t=fu(t,r.children),t.flags|=4096,t)}function ep(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Bl(e.return,t,n)}function Vc(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function vf(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(et(e,t,r.children,n),r=xe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ep(e,n,t);else if(e.tag===19)ep(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ge(xe,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&gs(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Vc(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&gs(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Vc(t,!0,n,null,a);break;case"together":Vc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function _o(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function yn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ir|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(q(153));if(t.child!==null){for(e=t.child,n=Kn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Kn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function qx(e,t,n){switch(t.tag){case 3:mf(t),ki();break;case 5:Bm(t);break;case 1:ct(t.type)&&cs(t);break;case 4:cu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ge(us,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ge(xe,xe.current&1),t.flags|=128,null):n&t.child.childLanes?ff(e,t,n):(ge(xe,xe.current&1),e=yn(e,t,n),e!==null?e.sibling:null);ge(xe,xe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return vf(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ge(xe,xe.current),r)break;return null;case 22:case 23:return t.lanes=0,pf(e,t,n)}return yn(e,t,n)}var yf,Yl,bf,wf;yf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Yl=function(){};bf=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,gr(Zt.current);var a=null;switch(n){case"input":i=yl(e,i),r=yl(e,r),a=[];break;case"select":i=Ce({},i,{value:void 0}),r=Ce({},r,{value:void 0}),a=[];break;case"textarea":i=xl(e,i),r=xl(e,r),a=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=os)}Tl(n,r);var s;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var c=i[h];for(s in c)c.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(ba.hasOwnProperty(h)?a||(a=[]):(a=a||[]).push(h,null));for(h in r){var l=r[h];if(c=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&l!==c&&(l!=null||c!=null))if(h==="style")if(c){for(s in c)!c.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&c[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(a||(a=[]),a.push(h,n)),n=l;else h==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,c=c?c.__html:void 0,l!=null&&c!==l&&(a=a||[]).push(h,l)):h==="children"?typeof l!="string"&&typeof l!="number"||(a=a||[]).push(h,""+l):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(ba.hasOwnProperty(h)?(l!=null&&h==="onScroll"&&ve("scroll",e),a||c===l||(a=[])):(a=a||[]).push(h,l))}n&&(a=a||[]).push("style",n);var h=a;(t.updateQueue=h)&&(t.flags|=4)}};wf=function(e,t,n,r){n!==r&&(t.flags|=4)};function Xi(e,t){if(!we)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Qe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Ox(e,t,n){var r=t.pendingProps;switch(tu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qe(t),null;case 1:return ct(t.type)&&ss(),Qe(t),null;case 3:return r=t.stateNode,Ci(),ye(st),ye(Je),hu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(fo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Dt!==null&&(ih(Dt),Dt=null))),Yl(e,t),Qe(t),null;case 5:lu(t);var i=gr(Ea.current);if(n=t.type,e!==null&&t.stateNode!=null)bf(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(q(166));return Qe(t),null}if(e=gr(Zt.current),fo(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[Kt]=t,r[Ia]=a,e=(t.mode&1)!==0,n){case"dialog":ve("cancel",r),ve("close",r);break;case"iframe":case"object":case"embed":ve("load",r);break;case"video":case"audio":for(i=0;i<oa.length;i++)ve(oa[i],r);break;case"source":ve("error",r);break;case"img":case"image":case"link":ve("error",r),ve("load",r);break;case"details":ve("toggle",r);break;case"input":ld(r,a),ve("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},ve("invalid",r);break;case"textarea":ud(r,a),ve("invalid",r)}Tl(n,a),i=null;for(var s in a)if(a.hasOwnProperty(s)){var c=a[s];s==="children"?typeof c=="string"?r.textContent!==c&&(a.suppressHydrationWarning!==!0&&mo(r.textContent,c,e),i=["children",c]):typeof c=="number"&&r.textContent!==""+c&&(a.suppressHydrationWarning!==!0&&mo(r.textContent,c,e),i=["children",""+c]):ba.hasOwnProperty(s)&&c!=null&&s==="onScroll"&&ve("scroll",r)}switch(n){case"input":oo(r),hd(r,a,!0);break;case"textarea":oo(r),dd(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=os)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Gg(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Kt]=t,e[Ia]=r,yf(e,t,!1,!1),t.stateNode=e;e:{switch(s=Cl(n,r),n){case"dialog":ve("cancel",e),ve("close",e),i=r;break;case"iframe":case"object":case"embed":ve("load",e),i=r;break;case"video":case"audio":for(i=0;i<oa.length;i++)ve(oa[i],e);i=r;break;case"source":ve("error",e),i=r;break;case"img":case"image":case"link":ve("error",e),ve("load",e),i=r;break;case"details":ve("toggle",e),i=r;break;case"input":ld(e,r),i=yl(e,r),ve("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Ce({},r,{value:void 0}),ve("invalid",e);break;case"textarea":ud(e,r),i=xl(e,r),ve("invalid",e);break;default:i=r}Tl(n,i),c=i;for(a in c)if(c.hasOwnProperty(a)){var l=c[a];a==="style"?Yg(e,l):a==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Kg(e,l)):a==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&wa(e,l):typeof l=="number"&&wa(e,""+l):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(ba.hasOwnProperty(a)?l!=null&&a==="onScroll"&&ve("scroll",e):l!=null&&Fh(e,a,l,s))}switch(n){case"input":oo(e),hd(e,r,!1);break;case"textarea":oo(e),dd(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Xn(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?ri(e,!!r.multiple,a,!1):r.defaultValue!=null&&ri(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=os)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Qe(t),null;case 6:if(e&&t.stateNode!=null)wf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(q(166));if(n=gr(Ea.current),gr(Zt.current),fo(t)){if(r=t.stateNode,n=t.memoizedProps,r[Kt]=t,(a=r.nodeValue!==n)&&(e=gt,e!==null))switch(e.tag){case 3:mo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&mo(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Kt]=t,t.stateNode=r}return Qe(t),null;case 13:if(ye(xe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(we&&pt!==null&&t.mode&1&&!(t.flags&128))Om(),ki(),t.flags|=98560,a=!1;else if(a=fo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(q(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(q(317));a[Kt]=t}else ki(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Qe(t),a=!1}else Dt!==null&&(ih(Dt),Dt=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||xe.current&1?Me===0&&(Me=3):ku())),t.updateQueue!==null&&(t.flags|=4),Qe(t),null);case 4:return Ci(),Yl(e,t),e===null&&Aa(t.stateNode.containerInfo),Qe(t),null;case 10:return au(t.type._context),Qe(t),null;case 17:return ct(t.type)&&ss(),Qe(t),null;case 19:if(ye(xe),a=t.memoizedState,a===null)return Qe(t),null;if(r=(t.flags&128)!==0,s=a.rendering,s===null)if(r)Xi(a,!1);else{if(Me!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=gs(e),s!==null){for(t.flags|=128,Xi(a,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,s=a.alternate,s===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=s.childLanes,a.lanes=s.lanes,a.child=s.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=s.memoizedProps,a.memoizedState=s.memoizedState,a.updateQueue=s.updateQueue,a.type=s.type,e=s.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ge(xe,xe.current&1|2),t.child}e=e.sibling}a.tail!==null&&Ne()>Pi&&(t.flags|=128,r=!0,Xi(a,!1),t.lanes=4194304)}else{if(!r)if(e=gs(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Xi(a,!0),a.tail===null&&a.tailMode==="hidden"&&!s.alternate&&!we)return Qe(t),null}else 2*Ne()-a.renderingStartTime>Pi&&n!==1073741824&&(t.flags|=128,r=!0,Xi(a,!1),t.lanes=4194304);a.isBackwards?(s.sibling=t.child,t.child=s):(n=a.last,n!==null?n.sibling=s:t.child=s,a.last=s)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Ne(),t.sibling=null,n=xe.current,ge(xe,r?n&1|2:n&1),t):(Qe(t),null);case 22:case 23:return xu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ut&1073741824&&(Qe(t),t.subtreeFlags&6&&(t.flags|=8192)):Qe(t),null;case 24:return null;case 25:return null}throw Error(q(156,t.tag))}function Ux(e,t){switch(tu(t),t.tag){case 1:return ct(t.type)&&ss(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ci(),ye(st),ye(Je),hu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return lu(t),null;case 13:if(ye(xe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(q(340));ki()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ye(xe),null;case 4:return Ci(),null;case 10:return au(t.type._context),null;case 22:case 23:return xu(),null;case 24:return null;default:return null}}var bo=!1,Xe=!1,_x=typeof WeakSet=="function"?WeakSet:Set,V=null;function ei(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Pe(e,t,r)}else n.current=null}function Xl(e,t,n){try{n()}catch(r){Pe(e,t,r)}}var tp=!1;function Fx(e,t){if(Dl=rs,e=Cm(),Zh(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var s=0,c=-1,l=-1,h=0,u=0,d=e,p=null;t:for(;;){for(var y;d!==n||i!==0&&d.nodeType!==3||(c=s+i),d!==a||r!==0&&d.nodeType!==3||(l=s+r),d.nodeType===3&&(s+=d.nodeValue.length),(y=d.firstChild)!==null;)p=d,d=y;for(;;){if(d===e)break t;if(p===n&&++h===i&&(c=s),p===a&&++u===r&&(l=s),(y=d.nextSibling)!==null)break;d=p,p=d.parentNode}d=y}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ml={focusedElem:e,selectionRange:n},rs=!1,V=t;V!==null;)if(t=V,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,V=e;else for(;V!==null;){t=V;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var v=x.memoizedProps,k=x.memoizedState,f=t.stateNode,m=f.getSnapshotBeforeUpdate(t.elementType===t.type?v:It(t.type,v),k);f.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var b=t.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(q(163))}}catch(w){Pe(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,V=e;break}V=t.return}return x=tp,tp=!1,x}function pa(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&Xl(t,n,a)}i=i.next}while(i!==r)}}function Vs(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Jl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function xf(e){var t=e.alternate;t!==null&&(e.alternate=null,xf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Kt],delete t[Ia],delete t[Ul],delete t[kx],delete t[Tx])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function kf(e){return e.tag===5||e.tag===3||e.tag===4}function np(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||kf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Zl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=os));else if(r!==4&&(e=e.child,e!==null))for(Zl(e,t,n),e=e.sibling;e!==null;)Zl(e,t,n),e=e.sibling}function eh(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(eh(e,t,n),e=e.sibling;e!==null;)eh(e,t,n),e=e.sibling}var He=null,Lt=!1;function Cn(e,t,n){for(n=n.child;n!==null;)Tf(e,t,n),n=n.sibling}function Tf(e,t,n){if(Jt&&typeof Jt.onCommitFiberUnmount=="function")try{Jt.onCommitFiberUnmount(Ls,n)}catch{}switch(n.tag){case 5:Xe||ei(n,t);case 6:var r=He,i=Lt;He=null,Cn(e,t,n),He=r,Lt=i,He!==null&&(Lt?(e=He,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):He.removeChild(n.stateNode));break;case 18:He!==null&&(Lt?(e=He,n=n.stateNode,e.nodeType===8?Dc(e.parentNode,n):e.nodeType===1&&Dc(e,n),Ca(e)):Dc(He,n.stateNode));break;case 4:r=He,i=Lt,He=n.stateNode.containerInfo,Lt=!0,Cn(e,t,n),He=r,Lt=i;break;case 0:case 11:case 14:case 15:if(!Xe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,s=a.destroy;a=a.tag,s!==void 0&&(a&2||a&4)&&Xl(n,t,s),i=i.next}while(i!==r)}Cn(e,t,n);break;case 1:if(!Xe&&(ei(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(c){Pe(n,t,c)}Cn(e,t,n);break;case 21:Cn(e,t,n);break;case 22:n.mode&1?(Xe=(r=Xe)||n.memoizedState!==null,Cn(e,t,n),Xe=r):Cn(e,t,n);break;default:Cn(e,t,n)}}function rp(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new _x),t.forEach(function(r){var i=Qx.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Nt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e,s=t,c=s;e:for(;c!==null;){switch(c.tag){case 5:He=c.stateNode,Lt=!1;break e;case 3:He=c.stateNode.containerInfo,Lt=!0;break e;case 4:He=c.stateNode.containerInfo,Lt=!0;break e}c=c.return}if(He===null)throw Error(q(160));Tf(a,s,i),He=null,Lt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(h){Pe(i,t,h)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Cf(t,e),t=t.sibling}function Cf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Nt(t,e),Bt(e),r&4){try{pa(3,e,e.return),Vs(3,e)}catch(v){Pe(e,e.return,v)}try{pa(5,e,e.return)}catch(v){Pe(e,e.return,v)}}break;case 1:Nt(t,e),Bt(e),r&512&&n!==null&&ei(n,n.return);break;case 5:if(Nt(t,e),Bt(e),r&512&&n!==null&&ei(n,n.return),e.flags&32){var i=e.stateNode;try{wa(i,"")}catch(v){Pe(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,s=n!==null?n.memoizedProps:a,c=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{c==="input"&&a.type==="radio"&&a.name!=null&&$g(i,a),Cl(c,s);var h=Cl(c,a);for(s=0;s<l.length;s+=2){var u=l[s],d=l[s+1];u==="style"?Yg(i,d):u==="dangerouslySetInnerHTML"?Kg(i,d):u==="children"?wa(i,d):Fh(i,u,d,h)}switch(c){case"input":bl(i,a);break;case"textarea":Wg(i,a);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var y=a.value;y!=null?ri(i,!!a.multiple,y,!1):p!==!!a.multiple&&(a.defaultValue!=null?ri(i,!!a.multiple,a.defaultValue,!0):ri(i,!!a.multiple,a.multiple?[]:"",!1))}i[Ia]=a}catch(v){Pe(e,e.return,v)}}break;case 6:if(Nt(t,e),Bt(e),r&4){if(e.stateNode===null)throw Error(q(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(v){Pe(e,e.return,v)}}break;case 3:if(Nt(t,e),Bt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ca(t.containerInfo)}catch(v){Pe(e,e.return,v)}break;case 4:Nt(t,e),Bt(e);break;case 13:Nt(t,e),Bt(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(bu=Ne())),r&4&&rp(e);break;case 22:if(u=n!==null&&n.memoizedState!==null,e.mode&1?(Xe=(h=Xe)||u,Nt(t,e),Xe=h):Nt(t,e),Bt(e),r&8192){if(h=e.memoizedState!==null,(e.stateNode.isHidden=h)&&!u&&e.mode&1)for(V=e,u=e.child;u!==null;){for(d=V=u;V!==null;){switch(p=V,y=p.child,p.tag){case 0:case 11:case 14:case 15:pa(4,p,p.return);break;case 1:ei(p,p.return);var x=p.stateNode;if(typeof x.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(v){Pe(r,n,v)}}break;case 5:ei(p,p.return);break;case 22:if(p.memoizedState!==null){ap(d);continue}}y!==null?(y.return=p,V=y):ap(d)}u=u.sibling}e:for(u=null,d=e;;){if(d.tag===5){if(u===null){u=d;try{i=d.stateNode,h?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(c=d.stateNode,l=d.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,c.style.display=Qg("display",s))}catch(v){Pe(e,e.return,v)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=h?"":d.memoizedProps}catch(v){Pe(e,e.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Nt(t,e),Bt(e),r&4&&rp(e);break;case 21:break;default:Nt(t,e),Bt(e)}}function Bt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(kf(n)){var r=n;break e}n=n.return}throw Error(q(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(wa(i,""),r.flags&=-33);var a=np(e);eh(e,a,i);break;case 3:case 4:var s=r.stateNode.containerInfo,c=np(e);Zl(e,c,s);break;default:throw Error(q(161))}}catch(l){Pe(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Vx(e,t,n){V=e,Sf(e)}function Sf(e,t,n){for(var r=(e.mode&1)!==0;V!==null;){var i=V,a=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||bo;if(!s){var c=i.alternate,l=c!==null&&c.memoizedState!==null||Xe;c=bo;var h=Xe;if(bo=s,(Xe=l)&&!h)for(V=i;V!==null;)s=V,l=s.child,s.tag===22&&s.memoizedState!==null?op(i):l!==null?(l.return=s,V=l):op(i);for(;a!==null;)V=a,Sf(a),a=a.sibling;V=i,bo=c,Xe=h}ip(e)}else i.subtreeFlags&8772&&a!==null?(a.return=i,V=a):ip(e)}}function ip(e){for(;V!==null;){var t=V;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Xe||Vs(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Xe)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:It(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Bd(t,a,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Bd(t,s,n)}break;case 5:var c=t.stateNode;if(n===null&&t.flags&4){n=c;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var h=t.alternate;if(h!==null){var u=h.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&Ca(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(q(163))}Xe||t.flags&512&&Jl(t)}catch(p){Pe(t,t.return,p)}}if(t===e){V=null;break}if(n=t.sibling,n!==null){n.return=t.return,V=n;break}V=t.return}}function ap(e){for(;V!==null;){var t=V;if(t===e){V=null;break}var n=t.sibling;if(n!==null){n.return=t.return,V=n;break}V=t.return}}function op(e){for(;V!==null;){var t=V;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Vs(4,t)}catch(l){Pe(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){Pe(t,i,l)}}var a=t.return;try{Jl(t)}catch(l){Pe(t,a,l)}break;case 5:var s=t.return;try{Jl(t)}catch(l){Pe(t,s,l)}}}catch(l){Pe(t,t.return,l)}if(t===e){V=null;break}var c=t.sibling;if(c!==null){c.return=t.return,V=c;break}V=t.return}}var Bx=Math.ceil,vs=kn.ReactCurrentDispatcher,vu=kn.ReactCurrentOwner,Tt=kn.ReactCurrentBatchConfig,oe=0,Be=null,Ie=null,$e=0,ut=0,ti=rr(0),Me=0,Ma=null,Ir=0,Bs=0,yu=0,ga=null,it=null,bu=0,Pi=1/0,cn=null,ys=!1,th=null,Wn=null,wo=!1,_n=null,bs=0,ma=0,nh=null,Fo=-1,Vo=0;function nt(){return oe&6?Ne():Fo!==-1?Fo:Fo=Ne()}function Gn(e){return e.mode&1?oe&2&&$e!==0?$e&-$e:Sx.transition!==null?(Vo===0&&(Vo=cm()),Vo):(e=ue,e!==0||(e=window.event,e=e===void 0?16:mm(e.type)),e):1}function Ot(e,t,n,r){if(50<ma)throw ma=0,nh=null,Error(q(185));Ka(e,n,r),(!(oe&2)||e!==Be)&&(e===Be&&(!(oe&2)&&(Bs|=n),Me===4&&Rn(e,$e)),lt(e,r),n===1&&oe===0&&!(t.mode&1)&&(Pi=Ne()+500,Us&&ir()))}function lt(e,t){var n=e.callbackNode;Sw(e,t);var r=ns(e,e===Be?$e:0);if(r===0)n!==null&&md(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&md(n),t===1)e.tag===0?Cx(sp.bind(null,e)):Dm(sp.bind(null,e)),wx(function(){!(oe&6)&&ir()}),n=null;else{switch(lm(r)){case 1:n=$h;break;case 4:n=om;break;case 16:n=ts;break;case 536870912:n=sm;break;default:n=ts}n=Lf(n,Pf.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Pf(e,t){if(Fo=-1,Vo=0,oe&6)throw Error(q(327));var n=e.callbackNode;if(ci()&&e.callbackNode!==n)return null;var r=ns(e,e===Be?$e:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ws(e,r);else{t=r;var i=oe;oe|=2;var a=Nf();(Be!==e||$e!==t)&&(cn=null,Pi=Ne()+500,kr(e,t));do try{$x();break}catch(c){Af(e,c)}while(!0);iu(),vs.current=a,oe=i,Ie!==null?t=0:(Be=null,$e=0,t=Me)}if(t!==0){if(t===2&&(i=Il(e),i!==0&&(r=i,t=rh(e,i))),t===1)throw n=Ma,kr(e,0),Rn(e,r),lt(e,Ne()),n;if(t===6)Rn(e,r);else{if(i=e.current.alternate,!(r&30)&&!zx(i)&&(t=ws(e,r),t===2&&(a=Il(e),a!==0&&(r=a,t=rh(e,a))),t===1))throw n=Ma,kr(e,0),Rn(e,r),lt(e,Ne()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(q(345));case 2:hr(e,it,cn);break;case 3:if(Rn(e,r),(r&130023424)===r&&(t=bu+500-Ne(),10<t)){if(ns(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){nt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ol(hr.bind(null,e,it,cn),t);break}hr(e,it,cn);break;case 4:if(Rn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-qt(r);a=1<<s,s=t[s],s>i&&(i=s),r&=~a}if(r=i,r=Ne()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Bx(r/1960))-r,10<r){e.timeoutHandle=Ol(hr.bind(null,e,it,cn),r);break}hr(e,it,cn);break;case 5:hr(e,it,cn);break;default:throw Error(q(329))}}}return lt(e,Ne()),e.callbackNode===n?Pf.bind(null,e):null}function rh(e,t){var n=ga;return e.current.memoizedState.isDehydrated&&(kr(e,t).flags|=256),e=ws(e,t),e!==2&&(t=it,it=n,t!==null&&ih(t)),e}function ih(e){it===null?it=e:it.push.apply(it,e)}function zx(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Ut(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Rn(e,t){for(t&=~yu,t&=~Bs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-qt(t),r=1<<n;e[n]=-1,t&=~r}}function sp(e){if(oe&6)throw Error(q(327));ci();var t=ns(e,0);if(!(t&1))return lt(e,Ne()),null;var n=ws(e,t);if(e.tag!==0&&n===2){var r=Il(e);r!==0&&(t=r,n=rh(e,r))}if(n===1)throw n=Ma,kr(e,0),Rn(e,t),lt(e,Ne()),n;if(n===6)throw Error(q(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,hr(e,it,cn),lt(e,Ne()),null}function wu(e,t){var n=oe;oe|=1;try{return e(t)}finally{oe=n,oe===0&&(Pi=Ne()+500,Us&&ir())}}function jr(e){_n!==null&&_n.tag===0&&!(oe&6)&&ci();var t=oe;oe|=1;var n=Tt.transition,r=ue;try{if(Tt.transition=null,ue=1,e)return e()}finally{ue=r,Tt.transition=n,oe=t,!(oe&6)&&ir()}}function xu(){ut=ti.current,ye(ti)}function kr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,bx(n)),Ie!==null)for(n=Ie.return;n!==null;){var r=n;switch(tu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ss();break;case 3:Ci(),ye(st),ye(Je),hu();break;case 5:lu(r);break;case 4:Ci();break;case 13:ye(xe);break;case 19:ye(xe);break;case 10:au(r.type._context);break;case 22:case 23:xu()}n=n.return}if(Be=e,Ie=e=Kn(e.current,null),$e=ut=t,Me=0,Ma=null,yu=Bs=Ir=0,it=ga=null,pr!==null){for(t=0;t<pr.length;t++)if(n=pr[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var s=a.next;a.next=i,r.next=s}n.pending=r}pr=null}return e}function Af(e,t){do{var n=Ie;try{if(iu(),Oo.current=fs,ms){for(var r=Te.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ms=!1}if(Nr=0,Fe=Le=Te=null,da=!1,Ra=0,vu.current=null,n===null||n.return===null){Me=1,Ma=t,Ie=null;break}e:{var a=e,s=n.return,c=n,l=t;if(t=$e,c.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var h=l,u=c,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var p=u.alternate;p?(u.updateQueue=p.updateQueue,u.memoizedState=p.memoizedState,u.lanes=p.lanes):(u.updateQueue=null,u.memoizedState=null)}var y=Kd(s);if(y!==null){y.flags&=-257,Qd(y,s,c,a,t),y.mode&1&&Gd(a,h,t),t=y,l=h;var x=t.updateQueue;if(x===null){var v=new Set;v.add(l),t.updateQueue=v}else x.add(l);break e}else{if(!(t&1)){Gd(a,h,t),ku();break e}l=Error(q(426))}}else if(we&&c.mode&1){var k=Kd(s);if(k!==null){!(k.flags&65536)&&(k.flags|=256),Qd(k,s,c,a,t),nu(Si(l,c));break e}}a=l=Si(l,c),Me!==4&&(Me=2),ga===null?ga=[a]:ga.push(a),a=s;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var f=hf(a,l,t);Vd(a,f);break e;case 1:c=l;var m=a.type,b=a.stateNode;if(!(a.flags&128)&&(typeof m.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(Wn===null||!Wn.has(b)))){a.flags|=65536,t&=-t,a.lanes|=t;var w=uf(a,c,t);Vd(a,w);break e}}a=a.return}while(a!==null)}jf(n)}catch(T){t=T,Ie===n&&n!==null&&(Ie=n=n.return);continue}break}while(!0)}function Nf(){var e=vs.current;return vs.current=fs,e===null?fs:e}function ku(){(Me===0||Me===3||Me===2)&&(Me=4),Be===null||!(Ir&268435455)&&!(Bs&268435455)||Rn(Be,$e)}function ws(e,t){var n=oe;oe|=2;var r=Nf();(Be!==e||$e!==t)&&(cn=null,kr(e,t));do try{Hx();break}catch(i){Af(e,i)}while(!0);if(iu(),oe=n,vs.current=r,Ie!==null)throw Error(q(261));return Be=null,$e=0,Me}function Hx(){for(;Ie!==null;)If(Ie)}function $x(){for(;Ie!==null&&!fw();)If(Ie)}function If(e){var t=Rf(e.alternate,e,ut);e.memoizedProps=e.pendingProps,t===null?jf(e):Ie=t,vu.current=null}function jf(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Ux(n,t),n!==null){n.flags&=32767,Ie=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Me=6,Ie=null;return}}else if(n=Ox(n,t,ut),n!==null){Ie=n;return}if(t=t.sibling,t!==null){Ie=t;return}Ie=t=e}while(t!==null);Me===0&&(Me=5)}function hr(e,t,n){var r=ue,i=Tt.transition;try{Tt.transition=null,ue=1,Wx(e,t,n,r)}finally{Tt.transition=i,ue=r}return null}function Wx(e,t,n,r){do ci();while(_n!==null);if(oe&6)throw Error(q(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(q(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(Pw(e,a),e===Be&&(Ie=Be=null,$e=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||wo||(wo=!0,Lf(ts,function(){return ci(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=Tt.transition,Tt.transition=null;var s=ue;ue=1;var c=oe;oe|=4,vu.current=null,Fx(e,n),Cf(n,e),dx(Ml),rs=!!Dl,Ml=Dl=null,e.current=n,Vx(n),vw(),oe=c,ue=s,Tt.transition=a}else e.current=n;if(wo&&(wo=!1,_n=e,bs=i),a=e.pendingLanes,a===0&&(Wn=null),ww(n.stateNode),lt(e,Ne()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ys)throw ys=!1,e=th,th=null,e;return bs&1&&e.tag!==0&&ci(),a=e.pendingLanes,a&1?e===nh?ma++:(ma=0,nh=e):ma=0,ir(),null}function ci(){if(_n!==null){var e=lm(bs),t=Tt.transition,n=ue;try{if(Tt.transition=null,ue=16>e?16:e,_n===null)var r=!1;else{if(e=_n,_n=null,bs=0,oe&6)throw Error(q(331));var i=oe;for(oe|=4,V=e.current;V!==null;){var a=V,s=a.child;if(V.flags&16){var c=a.deletions;if(c!==null){for(var l=0;l<c.length;l++){var h=c[l];for(V=h;V!==null;){var u=V;switch(u.tag){case 0:case 11:case 15:pa(8,u,a)}var d=u.child;if(d!==null)d.return=u,V=d;else for(;V!==null;){u=V;var p=u.sibling,y=u.return;if(xf(u),u===h){V=null;break}if(p!==null){p.return=y,V=p;break}V=y}}}var x=a.alternate;if(x!==null){var v=x.child;if(v!==null){x.child=null;do{var k=v.sibling;v.sibling=null,v=k}while(v!==null)}}V=a}}if(a.subtreeFlags&2064&&s!==null)s.return=a,V=s;else e:for(;V!==null;){if(a=V,a.flags&2048)switch(a.tag){case 0:case 11:case 15:pa(9,a,a.return)}var f=a.sibling;if(f!==null){f.return=a.return,V=f;break e}V=a.return}}var m=e.current;for(V=m;V!==null;){s=V;var b=s.child;if(s.subtreeFlags&2064&&b!==null)b.return=s,V=b;else e:for(s=m;V!==null;){if(c=V,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:Vs(9,c)}}catch(T){Pe(c,c.return,T)}if(c===s){V=null;break e}var w=c.sibling;if(w!==null){w.return=c.return,V=w;break e}V=c.return}}if(oe=i,ir(),Jt&&typeof Jt.onPostCommitFiberRoot=="function")try{Jt.onPostCommitFiberRoot(Ls,e)}catch{}r=!0}return r}finally{ue=n,Tt.transition=t}}return!1}function cp(e,t,n){t=Si(n,t),t=hf(e,t,1),e=$n(e,t,1),t=nt(),e!==null&&(Ka(e,1,t),lt(e,t))}function Pe(e,t,n){if(e.tag===3)cp(e,e,n);else for(;t!==null;){if(t.tag===3){cp(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Wn===null||!Wn.has(r))){e=Si(n,e),e=uf(t,e,1),t=$n(t,e,1),e=nt(),t!==null&&(Ka(t,1,e),lt(t,e));break}}t=t.return}}function Gx(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=nt(),e.pingedLanes|=e.suspendedLanes&n,Be===e&&($e&n)===n&&(Me===4||Me===3&&($e&130023424)===$e&&500>Ne()-bu?kr(e,0):yu|=n),lt(e,t)}function Ef(e,t){t===0&&(e.mode&1?(t=lo,lo<<=1,!(lo&130023424)&&(lo=4194304)):t=1);var n=nt();e=vn(e,t),e!==null&&(Ka(e,t,n),lt(e,n))}function Kx(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ef(e,n)}function Qx(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(q(314))}r!==null&&r.delete(t),Ef(e,n)}var Rf;Rf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||st.current)at=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return at=!1,qx(e,t,n);at=!!(e.flags&131072)}else at=!1,we&&t.flags&1048576&&Mm(t,hs,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;_o(e,t),e=t.pendingProps;var i=xi(t,Je.current);si(t,n),i=du(null,t,r,e,i,n);var a=pu();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ct(r)?(a=!0,cs(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,su(t),i.updater=Fs,t.stateNode=i,i._reactInternals=t,Hl(t,r,e,n),t=Gl(null,t,r,!0,a,n)):(t.tag=0,we&&a&&eu(t),et(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(_o(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Xx(r),e=It(r,e),i){case 0:t=Wl(null,t,r,e,n);break e;case 1:t=Jd(null,t,r,e,n);break e;case 11:t=Yd(null,t,r,e,n);break e;case 14:t=Xd(null,t,r,It(r.type,e),n);break e}throw Error(q(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:It(r,i),Wl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:It(r,i),Jd(e,t,r,i,n);case 3:e:{if(mf(t),e===null)throw Error(q(387));r=t.pendingProps,a=t.memoizedState,i=a.element,Vm(e,t),ps(t,r,null,n);var s=t.memoizedState;if(r=s.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=Si(Error(q(423)),t),t=Zd(e,t,r,n,i);break e}else if(r!==i){i=Si(Error(q(424)),t),t=Zd(e,t,r,n,i);break e}else for(pt=Hn(t.stateNode.containerInfo.firstChild),gt=t,we=!0,Dt=null,n=_m(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ki(),r===i){t=yn(e,t,n);break e}et(e,t,r,n)}t=t.child}return t;case 5:return Bm(t),e===null&&Vl(t),r=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,s=i.children,ql(r,i)?s=null:a!==null&&ql(r,a)&&(t.flags|=32),gf(e,t),et(e,t,s,n),t.child;case 6:return e===null&&Vl(t),null;case 13:return ff(e,t,n);case 4:return cu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ti(t,null,r,n):et(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:It(r,i),Yd(e,t,r,i,n);case 7:return et(e,t,t.pendingProps,n),t.child;case 8:return et(e,t,t.pendingProps.children,n),t.child;case 12:return et(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,s=i.value,ge(us,r._currentValue),r._currentValue=s,a!==null)if(Ut(a.value,s)){if(a.children===i.children&&!st.current){t=yn(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var c=a.dependencies;if(c!==null){s=a.child;for(var l=c.firstContext;l!==null;){if(l.context===r){if(a.tag===1){l=gn(-1,n&-n),l.tag=2;var h=a.updateQueue;if(h!==null){h=h.shared;var u=h.pending;u===null?l.next=l:(l.next=u.next,u.next=l),h.pending=l}}a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Bl(a.return,n,t),c.lanes|=n;break}l=l.next}}else if(a.tag===10)s=a.type===t.type?null:a.child;else if(a.tag===18){if(s=a.return,s===null)throw Error(q(341));s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),Bl(s,n,t),s=a.sibling}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===t){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}et(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,si(t,n),i=St(i),r=r(i),t.flags|=1,et(e,t,r,n),t.child;case 14:return r=t.type,i=It(r,t.pendingProps),i=It(r.type,i),Xd(e,t,r,i,n);case 15:return df(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:It(r,i),_o(e,t),t.tag=1,ct(r)?(e=!0,cs(t)):e=!1,si(t,n),lf(t,r,i),Hl(t,r,i,n),Gl(null,t,r,!0,e,n);case 19:return vf(e,t,n);case 22:return pf(e,t,n)}throw Error(q(156,t.tag))};function Lf(e,t){return am(e,t)}function Yx(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kt(e,t,n,r){return new Yx(e,t,n,r)}function Tu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Xx(e){if(typeof e=="function")return Tu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Bh)return 11;if(e===zh)return 14}return 2}function Kn(e,t){var n=e.alternate;return n===null?(n=kt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Bo(e,t,n,r,i,a){var s=2;if(r=e,typeof e=="function")Tu(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case $r:return Tr(n.children,i,a,t);case Vh:s=8,i|=8;break;case gl:return e=kt(12,n,t,i|2),e.elementType=gl,e.lanes=a,e;case ml:return e=kt(13,n,t,i),e.elementType=ml,e.lanes=a,e;case fl:return e=kt(19,n,t,i),e.elementType=fl,e.lanes=a,e;case Bg:return zs(n,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Fg:s=10;break e;case Vg:s=9;break e;case Bh:s=11;break e;case zh:s=14;break e;case In:s=16,r=null;break e}throw Error(q(130,e==null?e:typeof e,""))}return t=kt(s,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function Tr(e,t,n,r){return e=kt(7,e,r,t),e.lanes=n,e}function zs(e,t,n,r){return e=kt(22,e,r,t),e.elementType=Bg,e.lanes=n,e.stateNode={isHidden:!1},e}function Bc(e,t,n){return e=kt(6,e,null,t),e.lanes=n,e}function zc(e,t,n){return t=kt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Jx(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Tc(0),this.expirationTimes=Tc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Cu(e,t,n,r,i,a,s,c,l){return e=new Jx(e,t,n,c,l),t===1?(t=1,a===!0&&(t|=8)):t=0,a=kt(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},su(a),e}function Zx(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Hr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Df(e){if(!e)return Jn;e=e._reactInternals;e:{if(Lr(e)!==e||e.tag!==1)throw Error(q(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ct(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(q(171))}if(e.tag===1){var n=e.type;if(ct(n))return Lm(e,n,t)}return t}function Mf(e,t,n,r,i,a,s,c,l){return e=Cu(n,r,!0,e,i,a,s,c,l),e.context=Df(null),n=e.current,r=nt(),i=Gn(n),a=gn(r,i),a.callback=t??null,$n(n,a,i),e.current.lanes=i,Ka(e,i,r),lt(e,r),e}function Hs(e,t,n,r){var i=t.current,a=nt(),s=Gn(i);return n=Df(n),t.context===null?t.context=n:t.pendingContext=n,t=gn(a,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=$n(i,t,s),e!==null&&(Ot(e,i,s,a),qo(e,i,s)),s}function xs(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function lp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Su(e,t){lp(e,t),(e=e.alternate)&&lp(e,t)}function ek(){return null}var qf=typeof reportError=="function"?reportError:function(e){console.error(e)};function Pu(e){this._internalRoot=e}$s.prototype.render=Pu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(q(409));Hs(e,t,null,null)};$s.prototype.unmount=Pu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;jr(function(){Hs(null,e,null,null)}),t[fn]=null}};function $s(e){this._internalRoot=e}$s.prototype.unstable_scheduleHydration=function(e){if(e){var t=dm();e={blockedOn:null,target:e,priority:t};for(var n=0;n<En.length&&t!==0&&t<En[n].priority;n++);En.splice(n,0,e),n===0&&gm(e)}};function Au(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ws(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function hp(){}function tk(e,t,n,r,i){if(i){if(typeof r=="function"){var a=r;r=function(){var h=xs(s);a.call(h)}}var s=Mf(t,r,e,0,null,!1,!1,"",hp);return e._reactRootContainer=s,e[fn]=s.current,Aa(e.nodeType===8?e.parentNode:e),jr(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var c=r;r=function(){var h=xs(l);c.call(h)}}var l=Cu(e,0,!1,null,null,!1,!1,"",hp);return e._reactRootContainer=l,e[fn]=l.current,Aa(e.nodeType===8?e.parentNode:e),jr(function(){Hs(t,l,n,r)}),l}function Gs(e,t,n,r,i){var a=n._reactRootContainer;if(a){var s=a;if(typeof i=="function"){var c=i;i=function(){var l=xs(s);c.call(l)}}Hs(t,s,e,i)}else s=tk(n,t,e,i,r);return xs(s)}hm=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=aa(t.pendingLanes);n!==0&&(Wh(t,n|1),lt(t,Ne()),!(oe&6)&&(Pi=Ne()+500,ir()))}break;case 13:jr(function(){var r=vn(e,1);if(r!==null){var i=nt();Ot(r,e,1,i)}}),Su(e,1)}};Gh=function(e){if(e.tag===13){var t=vn(e,134217728);if(t!==null){var n=nt();Ot(t,e,134217728,n)}Su(e,134217728)}};um=function(e){if(e.tag===13){var t=Gn(e),n=vn(e,t);if(n!==null){var r=nt();Ot(n,e,t,r)}Su(e,t)}};dm=function(){return ue};pm=function(e,t){var n=ue;try{return ue=e,t()}finally{ue=n}};Pl=function(e,t,n){switch(t){case"input":if(bl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Os(r);if(!i)throw Error(q(90));Hg(r),bl(r,i)}}}break;case"textarea":Wg(e,n);break;case"select":t=n.value,t!=null&&ri(e,!!n.multiple,t,!1)}};Zg=wu;em=jr;var nk={usingClientEntryPoint:!1,Events:[Ya,Qr,Os,Xg,Jg,wu]},Ji={findFiberByHostInstance:dr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},rk={bundleType:Ji.bundleType,version:Ji.version,rendererPackageName:Ji.rendererPackageName,rendererConfig:Ji.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:kn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=rm(e),e===null?null:e.stateNode},findFiberByHostInstance:Ji.findFiberByHostInstance||ek,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xo.isDisabled&&xo.supportsFiber)try{Ls=xo.inject(rk),Jt=xo}catch{}}vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=nk;vt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Au(t))throw Error(q(200));return Zx(e,t,null,n)};vt.createRoot=function(e,t){if(!Au(e))throw Error(q(299));var n=!1,r="",i=qf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Cu(e,1,!1,null,null,n,!1,r,i),e[fn]=t.current,Aa(e.nodeType===8?e.parentNode:e),new Pu(t)};vt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(q(188)):(e=Object.keys(e).join(","),Error(q(268,e)));return e=rm(t),e=e===null?null:e.stateNode,e};vt.flushSync=function(e){return jr(e)};vt.hydrate=function(e,t,n){if(!Ws(t))throw Error(q(200));return Gs(null,e,t,!0,n)};vt.hydrateRoot=function(e,t,n){if(!Au(e))throw Error(q(405));var r=n!=null&&n.hydratedSources||null,i=!1,a="",s=qf;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Mf(t,null,e,1,n??null,i,!1,a,s),e[fn]=t.current,Aa(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new $s(t)};vt.render=function(e,t,n){if(!Ws(t))throw Error(q(200));return Gs(null,e,t,!1,n)};vt.unmountComponentAtNode=function(e){if(!Ws(e))throw Error(q(40));return e._reactRootContainer?(jr(function(){Gs(null,null,e,!1,function(){e._reactRootContainer=null,e[fn]=null})}),!0):!1};vt.unstable_batchedUpdates=wu;vt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ws(n))throw Error(q(200));if(e==null||e._reactInternals===void 0)throw Error(q(38));return Gs(e,t,n,!1,r)};vt.version="18.3.1-next-f1338f8080-20240426";function Of(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Of)}catch(e){console.error(e)}}Of(),qg.exports=vt;var Ja=qg.exports;const ik=Eb(Ja);var Uf,up=Ja;Uf=up.createRoot,up.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function qa(){return qa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},qa.apply(this,arguments)}var Fn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Fn||(Fn={}));const dp="popstate";function ak(e){e===void 0&&(e={});function t(r,i){let{pathname:a,search:s,hash:c}=r.location;return ah("",{pathname:a,search:s,hash:c},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:ks(i)}return sk(t,n,null,e)}function je(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function _f(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function ok(){return Math.random().toString(36).substr(2,8)}function pp(e,t){return{usr:e.state,key:e.key,idx:t}}function ah(e,t,n,r){return n===void 0&&(n=null),qa({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Oi(t):t,{state:n,key:t&&t.key||r||ok()})}function ks(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Oi(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function sk(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:a=!1}=r,s=i.history,c=Fn.Pop,l=null,h=u();h==null&&(h=0,s.replaceState(qa({},s.state,{idx:h}),""));function u(){return(s.state||{idx:null}).idx}function d(){c=Fn.Pop;let k=u(),f=k==null?null:k-h;h=k,l&&l({action:c,location:v.location,delta:f})}function p(k,f){c=Fn.Push;let m=ah(v.location,k,f);h=u()+1;let b=pp(m,h),w=v.createHref(m);try{s.pushState(b,"",w)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;i.location.assign(w)}a&&l&&l({action:c,location:v.location,delta:1})}function y(k,f){c=Fn.Replace;let m=ah(v.location,k,f);h=u();let b=pp(m,h),w=v.createHref(m);s.replaceState(b,"",w),a&&l&&l({action:c,location:v.location,delta:0})}function x(k){let f=i.location.origin!=="null"?i.location.origin:i.location.href,m=typeof k=="string"?k:ks(k);return m=m.replace(/ $/,"%20"),je(f,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,f)}let v={get action(){return c},get location(){return e(i,s)},listen(k){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(dp,d),l=k,()=>{i.removeEventListener(dp,d),l=null}},createHref(k){return t(i,k)},createURL:x,encodeLocation(k){let f=x(k);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:p,replace:y,go(k){return s.go(k)}};return v}var gp;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(gp||(gp={}));function ck(e,t,n){return n===void 0&&(n="/"),lk(e,t,n,!1)}function lk(e,t,n,r){let i=typeof t=="string"?Oi(t):t,a=Nu(i.pathname||"/",n);if(a==null)return null;let s=Ff(e);hk(s);let c=null;for(let l=0;c==null&&l<s.length;++l){let h=xk(a);c=bk(s[l],h,r)}return c}function Ff(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(a,s,c)=>{let l={relativePath:c===void 0?a.path||"":c,caseSensitive:a.caseSensitive===!0,childrenIndex:s,route:a};l.relativePath.startsWith("/")&&(je(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let h=Qn([r,l.relativePath]),u=n.concat(l);a.children&&a.children.length>0&&(je(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+h+'".')),Ff(a.children,t,u,h)),!(a.path==null&&!a.index)&&t.push({path:h,score:vk(h,a.index),routesMeta:u})};return e.forEach((a,s)=>{var c;if(a.path===""||!((c=a.path)!=null&&c.includes("?")))i(a,s);else for(let l of Vf(a.path))i(a,s,l)}),t}function Vf(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),a=n.replace(/\?$/,"");if(r.length===0)return i?[a,""]:[a];let s=Vf(r.join("/")),c=[];return c.push(...s.map(l=>l===""?a:[a,l].join("/"))),i&&c.push(...s),c.map(l=>e.startsWith("/")&&l===""?"/":l)}function hk(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:yk(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const uk=/^:[\w-]+$/,dk=3,pk=2,gk=1,mk=10,fk=-2,mp=e=>e==="*";function vk(e,t){let n=e.split("/"),r=n.length;return n.some(mp)&&(r+=fk),t&&(r+=pk),n.filter(i=>!mp(i)).reduce((i,a)=>i+(uk.test(a)?dk:a===""?gk:mk),r)}function yk(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function bk(e,t,n){let{routesMeta:r}=e,i={},a="/",s=[];for(let c=0;c<r.length;++c){let l=r[c],h=c===r.length-1,u=a==="/"?t:t.slice(a.length)||"/",d=fp({path:l.relativePath,caseSensitive:l.caseSensitive,end:h},u),p=l.route;if(!d&&h&&n&&!r[r.length-1].route.index&&(d=fp({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},u)),!d)return null;Object.assign(i,d.params),s.push({params:i,pathname:Qn([a,d.pathname]),pathnameBase:Sk(Qn([a,d.pathnameBase])),route:p}),d.pathnameBase!=="/"&&(a=Qn([a,d.pathnameBase]))}return s}function fp(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=wk(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],s=a.replace(/(.)\/+$/,"$1"),c=i.slice(1);return{params:r.reduce((h,u,d)=>{let{paramName:p,isOptional:y}=u;if(p==="*"){let v=c[d]||"";s=a.slice(0,a.length-v.length).replace(/(.)\/+$/,"$1")}const x=c[d];return y&&!x?h[p]=void 0:h[p]=(x||"").replace(/%2F/g,"/"),h},{}),pathname:a,pathnameBase:s,pattern:e}}function wk(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),_f(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,c,l)=>(r.push({paramName:c,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function xk(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return _f(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Nu(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function kk(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Oi(e):e;return{pathname:n?n.startsWith("/")?n:Tk(n,t):t,search:Pk(r),hash:Ak(i)}}function Tk(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Hc(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Ck(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Bf(e,t){let n=Ck(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function zf(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Oi(e):(i=qa({},e),je(!i.pathname||!i.pathname.includes("?"),Hc("?","pathname","search",i)),je(!i.pathname||!i.pathname.includes("#"),Hc("#","pathname","hash",i)),je(!i.search||!i.search.includes("#"),Hc("#","search","hash",i)));let a=e===""||i.pathname==="",s=a?"/":i.pathname,c;if(s==null)c=n;else{let d=t.length-1;if(!r&&s.startsWith("..")){let p=s.split("/");for(;p[0]==="..";)p.shift(),d-=1;i.pathname=p.join("/")}c=d>=0?t[d]:"/"}let l=kk(i,c),h=s&&s!=="/"&&s.endsWith("/"),u=(a||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(h||u)&&(l.pathname+="/"),l}const Qn=e=>e.join("/").replace(/\/\/+/g,"/"),Sk=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Pk=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Ak=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Nk(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Hf=["post","put","patch","delete"];new Set(Hf);const Ik=["get",...Hf];new Set(Ik);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Oa(){return Oa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Oa.apply(this,arguments)}const Iu=g.createContext(null),jk=g.createContext(null),Dr=g.createContext(null),Ks=g.createContext(null),ar=g.createContext({outlet:null,matches:[],isDataRoute:!1}),$f=g.createContext(null);function Ek(e,t){let{relative:n}=t===void 0?{}:t;Za()||je(!1);let{basename:r,navigator:i}=g.useContext(Dr),{hash:a,pathname:s,search:c}=Kf(e,{relative:n}),l=s;return r!=="/"&&(l=s==="/"?r:Qn([r,s])),i.createHref({pathname:l,search:c,hash:a})}function Za(){return g.useContext(Ks)!=null}function At(){return Za()||je(!1),g.useContext(Ks).location}function Wf(e){g.useContext(Dr).static||g.useLayoutEffect(e)}function Gf(){let{isDataRoute:e}=g.useContext(ar);return e?$k():Rk()}function Rk(){Za()||je(!1);let e=g.useContext(Iu),{basename:t,future:n,navigator:r}=g.useContext(Dr),{matches:i}=g.useContext(ar),{pathname:a}=At(),s=JSON.stringify(Bf(i,n.v7_relativeSplatPath)),c=g.useRef(!1);return Wf(()=>{c.current=!0}),g.useCallback(function(h,u){if(u===void 0&&(u={}),!c.current)return;if(typeof h=="number"){r.go(h);return}let d=zf(h,JSON.parse(s),a,u.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:Qn([t,d.pathname])),(u.replace?r.replace:r.push)(d,u.state,u)},[t,r,s,a,e])}function Lk(){let{matches:e}=g.useContext(ar),t=e[e.length-1];return t?t.params:{}}function Kf(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=g.useContext(Dr),{matches:i}=g.useContext(ar),{pathname:a}=At(),s=JSON.stringify(Bf(i,r.v7_relativeSplatPath));return g.useMemo(()=>zf(e,JSON.parse(s),a,n==="path"),[e,s,a,n])}function Dk(e,t){return Mk(e,t)}function Mk(e,t,n,r){Za()||je(!1);let{navigator:i}=g.useContext(Dr),{matches:a}=g.useContext(ar),s=a[a.length-1],c=s?s.params:{};s&&s.pathname;let l=s?s.pathnameBase:"/";s&&s.route;let h=At(),u;if(t){var d;let k=typeof t=="string"?Oi(t):t;l==="/"||(d=k.pathname)!=null&&d.startsWith(l)||je(!1),u=k}else u=h;let p=u.pathname||"/",y=p;if(l!=="/"){let k=l.replace(/^\//,"").split("/");y="/"+p.replace(/^\//,"").split("/").slice(k.length).join("/")}let x=ck(e,{pathname:y}),v=Fk(x&&x.map(k=>Object.assign({},k,{params:Object.assign({},c,k.params),pathname:Qn([l,i.encodeLocation?i.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?l:Qn([l,i.encodeLocation?i.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),a,n,r);return t&&v?g.createElement(Ks.Provider,{value:{location:Oa({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Fn.Pop}},v):v}function qk(){let e=Hk(),t=Nk(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return g.createElement(g.Fragment,null,g.createElement("h2",null,"Unexpected Application Error!"),g.createElement("h3",{style:{fontStyle:"italic"}},t),n?g.createElement("pre",{style:i},n):null,null)}const Ok=g.createElement(qk,null);class Uk extends g.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?g.createElement(ar.Provider,{value:this.props.routeContext},g.createElement($f.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function _k(e){let{routeContext:t,match:n,children:r}=e,i=g.useContext(Iu);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),g.createElement(ar.Provider,{value:t},r)}function Fk(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var a;if(!n)return null;if(n.errors)e=n.matches;else if((a=r)!=null&&a.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,c=(i=n)==null?void 0:i.errors;if(c!=null){let u=s.findIndex(d=>d.route.id&&(c==null?void 0:c[d.route.id])!==void 0);u>=0||je(!1),s=s.slice(0,Math.min(s.length,u+1))}let l=!1,h=-1;if(n&&r&&r.v7_partialHydration)for(let u=0;u<s.length;u++){let d=s[u];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(h=u),d.route.id){let{loaderData:p,errors:y}=n,x=d.route.loader&&p[d.route.id]===void 0&&(!y||y[d.route.id]===void 0);if(d.route.lazy||x){l=!0,h>=0?s=s.slice(0,h+1):s=[s[0]];break}}}return s.reduceRight((u,d,p)=>{let y,x=!1,v=null,k=null;n&&(y=c&&d.route.id?c[d.route.id]:void 0,v=d.route.errorElement||Ok,l&&(h<0&&p===0?(x=!0,k=null):h===p&&(x=!0,k=d.route.hydrateFallbackElement||null)));let f=t.concat(s.slice(0,p+1)),m=()=>{let b;return y?b=v:x?b=k:d.route.Component?b=g.createElement(d.route.Component,null):d.route.element?b=d.route.element:b=u,g.createElement(_k,{match:d,routeContext:{outlet:u,matches:f,isDataRoute:n!=null},children:b})};return n&&(d.route.ErrorBoundary||d.route.errorElement||p===0)?g.createElement(Uk,{location:n.location,revalidation:n.revalidation,component:v,error:y,children:m(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):m()},null)}var Qf=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Qf||{}),Ts=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Ts||{});function Vk(e){let t=g.useContext(Iu);return t||je(!1),t}function Bk(e){let t=g.useContext(jk);return t||je(!1),t}function zk(e){let t=g.useContext(ar);return t||je(!1),t}function Yf(e){let t=zk(),n=t.matches[t.matches.length-1];return n.route.id||je(!1),n.route.id}function Hk(){var e;let t=g.useContext($f),n=Bk(Ts.UseRouteError),r=Yf(Ts.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function $k(){let{router:e}=Vk(Qf.UseNavigateStable),t=Yf(Ts.UseNavigateStable),n=g.useRef(!1);return Wf(()=>{n.current=!0}),g.useCallback(function(i,a){a===void 0&&(a={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Oa({fromRouteId:t},a)))},[e,t])}function Wk(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function zt(e){je(!1)}function Gk(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Fn.Pop,navigator:a,static:s=!1,future:c}=e;Za()&&je(!1);let l=t.replace(/^\/*/,"/"),h=g.useMemo(()=>({basename:l,navigator:a,static:s,future:Oa({v7_relativeSplatPath:!1},c)}),[l,c,a,s]);typeof r=="string"&&(r=Oi(r));let{pathname:u="/",search:d="",hash:p="",state:y=null,key:x="default"}=r,v=g.useMemo(()=>{let k=Nu(u,l);return k==null?null:{location:{pathname:k,search:d,hash:p,state:y,key:x},navigationType:i}},[l,u,d,p,y,x,i]);return v==null?null:g.createElement(Dr.Provider,{value:h},g.createElement(Ks.Provider,{children:n,value:v}))}function Kk(e){let{children:t,location:n}=e;return Dk(oh(t),n)}new Promise(()=>{});function oh(e,t){t===void 0&&(t=[]);let n=[];return g.Children.forEach(e,(r,i)=>{if(!g.isValidElement(r))return;let a=[...t,i];if(r.type===g.Fragment){n.push.apply(n,oh(r.props.children,a));return}r.type!==zt&&je(!1),!r.props.index||!r.props.children||je(!1);let s={id:r.props.id||a.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=oh(r.props.children,a)),n.push(s)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function sh(){return sh=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},sh.apply(this,arguments)}function Qk(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Yk(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Xk(e,t){return e.button===0&&(!t||t==="_self")&&!Yk(e)}function ch(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(i=>[n,i]):[[n,r]])},[]))}function Jk(e,t){let n=ch(e);return t&&t.forEach((r,i)=>{n.has(i)||t.getAll(i).forEach(a=>{n.append(i,a)})}),n}const Zk=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],e0="6";try{window.__reactRouterVersion=e0}catch{}const t0="startTransition",vp=qh[t0];function n0(e){let{basename:t,children:n,future:r,window:i}=e,a=g.useRef();a.current==null&&(a.current=ak({window:i,v5Compat:!0}));let s=a.current,[c,l]=g.useState({action:s.action,location:s.location}),{v7_startTransition:h}=r||{},u=g.useCallback(d=>{h&&vp?vp(()=>l(d)):l(d)},[l,h]);return g.useLayoutEffect(()=>s.listen(u),[s,u]),g.useEffect(()=>Wk(r),[r]),g.createElement(Gk,{basename:t,children:n,location:c.location,navigationType:c.action,navigator:s,future:r})}const r0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",i0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ke=g.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:a,replace:s,state:c,target:l,to:h,preventScrollReset:u,viewTransition:d}=t,p=Qk(t,Zk),{basename:y}=g.useContext(Dr),x,v=!1;if(typeof h=="string"&&i0.test(h)&&(x=h,r0))try{let b=new URL(window.location.href),w=h.startsWith("//")?new URL(b.protocol+h):new URL(h),T=Nu(w.pathname,y);w.origin===b.origin&&T!=null?h=T+w.search+w.hash:v=!0}catch{}let k=Ek(h,{relative:i}),f=a0(h,{replace:s,state:c,target:l,preventScrollReset:u,relative:i,viewTransition:d});function m(b){r&&r(b),b.defaultPrevented||f(b)}return g.createElement("a",sh({},p,{href:x||k,onClick:v||a?r:m,ref:n,target:l}))});var yp;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(yp||(yp={}));var bp;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(bp||(bp={}));function a0(e,t){let{target:n,replace:r,state:i,preventScrollReset:a,relative:s,viewTransition:c}=t===void 0?{}:t,l=Gf(),h=At(),u=Kf(e,{relative:s});return g.useCallback(d=>{if(Xk(d,n)){d.preventDefault();let p=r!==void 0?r:ks(h)===ks(u);l(e,{replace:p,state:i,preventScrollReset:a,relative:s,viewTransition:c})}},[h,l,u,r,i,n,e,a,s,c])}function o0(e){let t=g.useRef(ch(e)),n=g.useRef(!1),r=At(),i=g.useMemo(()=>Jk(r.search,n.current?null:t.current),[r.search]),a=Gf(),s=g.useCallback((c,l)=>{const h=ch(typeof c=="function"?c(i):c);n.current=!0,a("?"+h,l)},[a,i]);return[i,s]}const s0="modulepreload",c0=function(e){return"/"+e},wp={},Xf=function(t,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),c=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));i=Promise.allSettled(n.map(l=>{if(l=c0(l),l in wp)return;wp[l]=!0;const h=l.endsWith(".css"),u=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${u}`))return;const d=document.createElement("link");if(d.rel=h?"stylesheet":s0,h||(d.as="script"),d.crossOrigin="",d.href=l,c&&d.setAttribute("nonce",c),document.head.appendChild(d),h)return new Promise((p,y)=>{d.addEventListener("load",p),d.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${l}`)))})}))}function a(s){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=s,window.dispatchEvent(c),!c.defaultPrevented)throw s}return i.then(s=>{for(const c of s||[])c.status==="rejected"&&a(c.reason);return t().catch(a)})},l0=3,h0=500;let $c=0;function u0(){return $c=($c+1)%Number.MAX_SAFE_INTEGER,$c.toString()}const Wc=new Map,xp=e=>{if(Wc.has(e))return;const t=setTimeout(()=>{Wc.delete(e),fa({type:"REMOVE_TOAST",toastId:e})},h0);Wc.set(e,t)},d0=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,l0)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(n=>n.id===t.toast.id?{...n,...t.toast}:n)};case"DISMISS_TOAST":{const{toastId:n}=t;return n?xp(n):e.toasts.forEach(r=>{xp(r.id)}),{...e,toasts:e.toasts.map(r=>r.id===n||n===void 0?{...r,open:!1}:r)}}case"REMOVE_TOAST":return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(n=>n.id!==t.toastId)}}},zo=[];let Ho={toasts:[]};function fa(e){Ho=d0(Ho,e),zo.forEach(t=>{t(Ho)})}function p0({...e}){const t=u0(),n=i=>fa({type:"UPDATE_TOAST",toast:{...i,id:t}}),r=()=>fa({type:"DISMISS_TOAST",toastId:t});return fa({type:"ADD_TOAST",toast:{...e,id:t,open:!0,onOpenChange:i=>{i||r()}}}),{id:t,dismiss:r,update:n}}function Qs(){const[e,t]=g.useState(Ho);return g.useEffect(()=>(zo.push(t),()=>{const n=zo.indexOf(t);n>-1&&zo.splice(n,1)}),[e]),{...e,toast:p0,dismiss:n=>fa({type:"DISMISS_TOAST",toastId:n})}}function he(e,t,{checkForDefaultPrevented:n=!0}={}){return function(i){if(e==null||e(i),n===!1||!i.defaultPrevented)return t==null?void 0:t(i)}}function kp(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function Jf(...e){return t=>{let n=!1;const r=e.map(i=>{const a=kp(i,t);return!n&&typeof a=="function"&&(n=!0),a});if(n)return()=>{for(let i=0;i<r.length;i++){const a=r[i];typeof a=="function"?a():kp(e[i],null)}}}}function Ee(...e){return g.useCallback(Jf(...e),e)}function Ui(e,t=[]){let n=[];function r(a,s){const c=g.createContext(s),l=n.length;n=[...n,s];const h=d=>{var f;const{scope:p,children:y,...x}=d,v=((f=p==null?void 0:p[e])==null?void 0:f[l])||c,k=g.useMemo(()=>x,Object.values(x));return o.jsx(v.Provider,{value:k,children:y})};h.displayName=a+"Provider";function u(d,p){var v;const y=((v=p==null?void 0:p[e])==null?void 0:v[l])||c,x=g.useContext(y);if(x)return x;if(s!==void 0)return s;throw new Error(`\`${d}\` must be used within \`${a}\``)}return[h,u]}const i=()=>{const a=n.map(s=>g.createContext(s));return function(c){const l=(c==null?void 0:c[e])||a;return g.useMemo(()=>({[`__scope${e}`]:{...c,[e]:l}}),[c,l])}};return i.scopeName=e,[r,g0(i,...t)]}function g0(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(i=>({useScope:i(),scopeName:i.scopeName}));return function(a){const s=r.reduce((c,{useScope:l,scopeName:h})=>{const d=l(a)[`__scope${h}`];return{...c,...d}},{});return g.useMemo(()=>({[`__scope${t.scopeName}`]:s}),[s])}};return n.scopeName=t.scopeName,n}function Ua(e){const t=f0(e),n=g.forwardRef((r,i)=>{const{children:a,...s}=r,c=g.Children.toArray(a),l=c.find(y0);if(l){const h=l.props.children,u=c.map(d=>d===l?g.Children.count(h)>1?g.Children.only(null):g.isValidElement(h)?h.props.children:null:d);return o.jsx(t,{...s,ref:i,children:g.isValidElement(h)?g.cloneElement(h,void 0,u):null})}return o.jsx(t,{...s,ref:i,children:a})});return n.displayName=`${e}.Slot`,n}var m0=Ua("Slot");function f0(e){const t=g.forwardRef((n,r)=>{const{children:i,...a}=n;if(g.isValidElement(i)){const s=w0(i),c=b0(a,i.props);return i.type!==g.Fragment&&(c.ref=r?Jf(r,s):s),g.cloneElement(i,c)}return g.Children.count(i)>1?g.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}var Zf=Symbol("radix.slottable");function v0(e){const t=({children:n})=>o.jsx(o.Fragment,{children:n});return t.displayName=`${e}.Slottable`,t.__radixId=Zf,t}function y0(e){return g.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===Zf}function b0(e,t){const n={...t};for(const r in t){const i=e[r],a=t[r];/^on[A-Z]/.test(r)?i&&a?n[r]=(...c)=>{const l=a(...c);return i(...c),l}:i&&(n[r]=i):r==="style"?n[r]={...i,...a}:r==="className"&&(n[r]=[i,a].filter(Boolean).join(" "))}return{...e,...n}}function w0(e){var r,i;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(i=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:i.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}function ev(e){const t=e+"CollectionProvider",[n,r]=Ui(t),[i,a]=n(t,{collectionRef:{current:null},itemMap:new Map}),s=v=>{const{scope:k,children:f}=v,m=sr.useRef(null),b=sr.useRef(new Map).current;return o.jsx(i,{scope:k,itemMap:b,collectionRef:m,children:f})};s.displayName=t;const c=e+"CollectionSlot",l=Ua(c),h=sr.forwardRef((v,k)=>{const{scope:f,children:m}=v,b=a(c,f),w=Ee(k,b.collectionRef);return o.jsx(l,{ref:w,children:m})});h.displayName=c;const u=e+"CollectionItemSlot",d="data-radix-collection-item",p=Ua(u),y=sr.forwardRef((v,k)=>{const{scope:f,children:m,...b}=v,w=sr.useRef(null),T=Ee(k,w),C=a(u,f);return sr.useEffect(()=>(C.itemMap.set(w,{ref:w,...b}),()=>void C.itemMap.delete(w))),o.jsx(p,{[d]:"",ref:T,children:m})});y.displayName=u;function x(v){const k=a(e+"CollectionConsumer",v);return sr.useCallback(()=>{const m=k.collectionRef.current;if(!m)return[];const b=Array.from(m.querySelectorAll(`[${d}]`));return Array.from(k.itemMap.values()).sort((C,P)=>b.indexOf(C.ref.current)-b.indexOf(P.ref.current))},[k.collectionRef,k.itemMap])}return[{Provider:s,Slot:h,ItemSlot:y},x,r]}var x0=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],Ae=x0.reduce((e,t)=>{const n=Ua(`Primitive.${t}`),r=g.forwardRef((i,a)=>{const{asChild:s,...c}=i,l=s?n:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),o.jsx(l,{...c,ref:a})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{});function tv(e,t){e&&Ja.flushSync(()=>e.dispatchEvent(t))}function tn(e){const t=g.useRef(e);return g.useEffect(()=>{t.current=e}),g.useMemo(()=>(...n)=>{var r;return(r=t.current)==null?void 0:r.call(t,...n)},[])}function k0(e,t=globalThis==null?void 0:globalThis.document){const n=tn(e);g.useEffect(()=>{const r=i=>{i.key==="Escape"&&n(i)};return t.addEventListener("keydown",r,{capture:!0}),()=>t.removeEventListener("keydown",r,{capture:!0})},[n,t])}var T0="DismissableLayer",lh="dismissableLayer.update",C0="dismissableLayer.pointerDownOutside",S0="dismissableLayer.focusOutside",Tp,nv=g.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),Ys=g.forwardRef((e,t)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:r,onPointerDownOutside:i,onFocusOutside:a,onInteractOutside:s,onDismiss:c,...l}=e,h=g.useContext(nv),[u,d]=g.useState(null),p=(u==null?void 0:u.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,y]=g.useState({}),x=Ee(t,P=>d(P)),v=Array.from(h.layers),[k]=[...h.layersWithOutsidePointerEventsDisabled].slice(-1),f=v.indexOf(k),m=u?v.indexOf(u):-1,b=h.layersWithOutsidePointerEventsDisabled.size>0,w=m>=f,T=A0(P=>{const S=P.target,N=[...h.branches].some(I=>I.contains(S));!w||N||(i==null||i(P),s==null||s(P),P.defaultPrevented||c==null||c())},p),C=N0(P=>{const S=P.target;[...h.branches].some(I=>I.contains(S))||(a==null||a(P),s==null||s(P),P.defaultPrevented||c==null||c())},p);return k0(P=>{m===h.layers.size-1&&(r==null||r(P),!P.defaultPrevented&&c&&(P.preventDefault(),c()))},p),g.useEffect(()=>{if(u)return n&&(h.layersWithOutsidePointerEventsDisabled.size===0&&(Tp=p.body.style.pointerEvents,p.body.style.pointerEvents="none"),h.layersWithOutsidePointerEventsDisabled.add(u)),h.layers.add(u),Cp(),()=>{n&&h.layersWithOutsidePointerEventsDisabled.size===1&&(p.body.style.pointerEvents=Tp)}},[u,p,n,h]),g.useEffect(()=>()=>{u&&(h.layers.delete(u),h.layersWithOutsidePointerEventsDisabled.delete(u),Cp())},[u,h]),g.useEffect(()=>{const P=()=>y({});return document.addEventListener(lh,P),()=>document.removeEventListener(lh,P)},[]),o.jsx(Ae.div,{...l,ref:x,style:{pointerEvents:b?w?"auto":"none":void 0,...e.style},onFocusCapture:he(e.onFocusCapture,C.onFocusCapture),onBlurCapture:he(e.onBlurCapture,C.onBlurCapture),onPointerDownCapture:he(e.onPointerDownCapture,T.onPointerDownCapture)})});Ys.displayName=T0;var P0="DismissableLayerBranch",rv=g.forwardRef((e,t)=>{const n=g.useContext(nv),r=g.useRef(null),i=Ee(t,r);return g.useEffect(()=>{const a=r.current;if(a)return n.branches.add(a),()=>{n.branches.delete(a)}},[n.branches]),o.jsx(Ae.div,{...e,ref:i})});rv.displayName=P0;function A0(e,t=globalThis==null?void 0:globalThis.document){const n=tn(e),r=g.useRef(!1),i=g.useRef(()=>{});return g.useEffect(()=>{const a=c=>{if(c.target&&!r.current){let l=function(){iv(C0,n,h,{discrete:!0})};const h={originalEvent:c};c.pointerType==="touch"?(t.removeEventListener("click",i.current),i.current=l,t.addEventListener("click",i.current,{once:!0})):l()}else t.removeEventListener("click",i.current);r.current=!1},s=window.setTimeout(()=>{t.addEventListener("pointerdown",a)},0);return()=>{window.clearTimeout(s),t.removeEventListener("pointerdown",a),t.removeEventListener("click",i.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}function N0(e,t=globalThis==null?void 0:globalThis.document){const n=tn(e),r=g.useRef(!1);return g.useEffect(()=>{const i=a=>{a.target&&!r.current&&iv(S0,n,{originalEvent:a},{discrete:!1})};return t.addEventListener("focusin",i),()=>t.removeEventListener("focusin",i)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}function Cp(){const e=new CustomEvent(lh);document.dispatchEvent(e)}function iv(e,t,n,{discrete:r}){const i=n.originalEvent.target,a=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&i.addEventListener(e,t,{once:!0}),r?tv(i,a):i.dispatchEvent(a)}var I0=Ys,j0=rv,bn=globalThis!=null&&globalThis.document?g.useLayoutEffect:()=>{},E0="Portal",ju=g.forwardRef((e,t)=>{var c;const{container:n,...r}=e,[i,a]=g.useState(!1);bn(()=>a(!0),[]);const s=n||i&&((c=globalThis==null?void 0:globalThis.document)==null?void 0:c.body);return s?ik.createPortal(o.jsx(Ae.div,{...r,ref:t}),s):null});ju.displayName=E0;function R0(e,t){return g.useReducer((n,r)=>t[n][r]??n,e)}var eo=e=>{const{present:t,children:n}=e,r=L0(t),i=typeof n=="function"?n({present:r.isPresent}):g.Children.only(n),a=Ee(r.ref,D0(i));return typeof n=="function"||r.isPresent?g.cloneElement(i,{ref:a}):null};eo.displayName="Presence";function L0(e){const[t,n]=g.useState(),r=g.useRef(null),i=g.useRef(e),a=g.useRef("none"),s=e?"mounted":"unmounted",[c,l]=R0(s,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return g.useEffect(()=>{const h=ko(r.current);a.current=c==="mounted"?h:"none"},[c]),bn(()=>{const h=r.current,u=i.current;if(u!==e){const p=a.current,y=ko(h);e?l("MOUNT"):y==="none"||(h==null?void 0:h.display)==="none"?l("UNMOUNT"):l(u&&p!==y?"ANIMATION_OUT":"UNMOUNT"),i.current=e}},[e,l]),bn(()=>{if(t){let h;const u=t.ownerDocument.defaultView??window,d=y=>{const v=ko(r.current).includes(y.animationName);if(y.target===t&&v&&(l("ANIMATION_END"),!i.current)){const k=t.style.animationFillMode;t.style.animationFillMode="forwards",h=u.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=k)})}},p=y=>{y.target===t&&(a.current=ko(r.current))};return t.addEventListener("animationstart",p),t.addEventListener("animationcancel",d),t.addEventListener("animationend",d),()=>{u.clearTimeout(h),t.removeEventListener("animationstart",p),t.removeEventListener("animationcancel",d),t.removeEventListener("animationend",d)}}else l("ANIMATION_END")},[t,l]),{isPresent:["mounted","unmountSuspended"].includes(c),ref:g.useCallback(h=>{r.current=h?getComputedStyle(h):null,n(h)},[])}}function ko(e){return(e==null?void 0:e.animationName)||"none"}function D0(e){var r,i;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(i=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:i.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var M0=qh[" useInsertionEffect ".trim().toString()]||bn;function Xs({prop:e,defaultProp:t,onChange:n=()=>{},caller:r}){const[i,a,s]=q0({defaultProp:t,onChange:n}),c=e!==void 0,l=c?e:i;{const u=g.useRef(e!==void 0);g.useEffect(()=>{const d=u.current;d!==c&&console.warn(`${r} is changing from ${d?"controlled":"uncontrolled"} to ${c?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),u.current=c},[c,r])}const h=g.useCallback(u=>{var d;if(c){const p=O0(u)?u(e):u;p!==e&&((d=s.current)==null||d.call(s,p))}else a(u)},[c,e,a,s]);return[l,h]}function q0({defaultProp:e,onChange:t}){const[n,r]=g.useState(e),i=g.useRef(n),a=g.useRef(t);return M0(()=>{a.current=t},[t]),g.useEffect(()=>{var s;i.current!==n&&((s=a.current)==null||s.call(a,n),i.current=n)},[n,i]),[n,r,a]}function O0(e){return typeof e=="function"}var U0=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"}),_0="VisuallyHidden",Js=g.forwardRef((e,t)=>o.jsx(Ae.span,{...e,ref:t,style:{...U0,...e.style}}));Js.displayName=_0;var F0=Js,Eu="ToastProvider",[Ru,V0,B0]=ev("Toast"),[av,h2]=Ui("Toast",[B0]),[z0,Zs]=av(Eu),ov=e=>{const{__scopeToast:t,label:n="Notification",duration:r=5e3,swipeDirection:i="right",swipeThreshold:a=50,children:s}=e,[c,l]=g.useState(null),[h,u]=g.useState(0),d=g.useRef(!1),p=g.useRef(!1);return n.trim()||console.error(`Invalid prop \`label\` supplied to \`${Eu}\`. Expected non-empty \`string\`.`),o.jsx(Ru.Provider,{scope:t,children:o.jsx(z0,{scope:t,label:n,duration:r,swipeDirection:i,swipeThreshold:a,toastCount:h,viewport:c,onViewportChange:l,onToastAdd:g.useCallback(()=>u(y=>y+1),[]),onToastRemove:g.useCallback(()=>u(y=>y-1),[]),isFocusedToastEscapeKeyDownRef:d,isClosePausedRef:p,children:s})})};ov.displayName=Eu;var sv="ToastViewport",H0=["F8"],hh="toast.viewportPause",uh="toast.viewportResume",cv=g.forwardRef((e,t)=>{const{__scopeToast:n,hotkey:r=H0,label:i="Notifications ({hotkey})",...a}=e,s=Zs(sv,n),c=V0(n),l=g.useRef(null),h=g.useRef(null),u=g.useRef(null),d=g.useRef(null),p=Ee(t,d,s.onViewportChange),y=r.join("+").replace(/Key/g,"").replace(/Digit/g,""),x=s.toastCount>0;g.useEffect(()=>{const k=f=>{var b;r.length!==0&&r.every(w=>f[w]||f.code===w)&&((b=d.current)==null||b.focus())};return document.addEventListener("keydown",k),()=>document.removeEventListener("keydown",k)},[r]),g.useEffect(()=>{const k=l.current,f=d.current;if(x&&k&&f){const m=()=>{if(!s.isClosePausedRef.current){const C=new CustomEvent(hh);f.dispatchEvent(C),s.isClosePausedRef.current=!0}},b=()=>{if(s.isClosePausedRef.current){const C=new CustomEvent(uh);f.dispatchEvent(C),s.isClosePausedRef.current=!1}},w=C=>{!k.contains(C.relatedTarget)&&b()},T=()=>{k.contains(document.activeElement)||b()};return k.addEventListener("focusin",m),k.addEventListener("focusout",w),k.addEventListener("pointermove",m),k.addEventListener("pointerleave",T),window.addEventListener("blur",m),window.addEventListener("focus",b),()=>{k.removeEventListener("focusin",m),k.removeEventListener("focusout",w),k.removeEventListener("pointermove",m),k.removeEventListener("pointerleave",T),window.removeEventListener("blur",m),window.removeEventListener("focus",b)}}},[x,s.isClosePausedRef]);const v=g.useCallback(({tabbingDirection:k})=>{const m=c().map(b=>{const w=b.ref.current,T=[w,...r1(w)];return k==="forwards"?T:T.reverse()});return(k==="forwards"?m.reverse():m).flat()},[c]);return g.useEffect(()=>{const k=d.current;if(k){const f=m=>{var T,C,P;const b=m.altKey||m.ctrlKey||m.metaKey;if(m.key==="Tab"&&!b){const S=document.activeElement,N=m.shiftKey;if(m.target===k&&N){(T=h.current)==null||T.focus();return}const R=v({tabbingDirection:N?"backwards":"forwards"}),M=R.findIndex(U=>U===S);Gc(R.slice(M+1))?m.preventDefault():N?(C=h.current)==null||C.focus():(P=u.current)==null||P.focus()}};return k.addEventListener("keydown",f),()=>k.removeEventListener("keydown",f)}},[c,v]),o.jsxs(j0,{ref:l,role:"region","aria-label":i.replace("{hotkey}",y),tabIndex:-1,style:{pointerEvents:x?void 0:"none"},children:[x&&o.jsx(dh,{ref:h,onFocusFromOutsideViewport:()=>{const k=v({tabbingDirection:"forwards"});Gc(k)}}),o.jsx(Ru.Slot,{scope:n,children:o.jsx(Ae.ol,{tabIndex:-1,...a,ref:p})}),x&&o.jsx(dh,{ref:u,onFocusFromOutsideViewport:()=>{const k=v({tabbingDirection:"backwards"});Gc(k)}})]})});cv.displayName=sv;var lv="ToastFocusProxy",dh=g.forwardRef((e,t)=>{const{__scopeToast:n,onFocusFromOutsideViewport:r,...i}=e,a=Zs(lv,n);return o.jsx(Js,{"aria-hidden":!0,tabIndex:0,...i,ref:t,style:{position:"fixed"},onFocus:s=>{var h;const c=s.relatedTarget;!((h=a.viewport)!=null&&h.contains(c))&&r()}})});dh.displayName=lv;var to="Toast",$0="toast.swipeStart",W0="toast.swipeMove",G0="toast.swipeCancel",K0="toast.swipeEnd",hv=g.forwardRef((e,t)=>{const{forceMount:n,open:r,defaultOpen:i,onOpenChange:a,...s}=e,[c,l]=Xs({prop:r,defaultProp:i??!0,onChange:a,caller:to});return o.jsx(eo,{present:n||c,children:o.jsx(X0,{open:c,...s,ref:t,onClose:()=>l(!1),onPause:tn(e.onPause),onResume:tn(e.onResume),onSwipeStart:he(e.onSwipeStart,h=>{h.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:he(e.onSwipeMove,h=>{const{x:u,y:d}=h.detail.delta;h.currentTarget.setAttribute("data-swipe","move"),h.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${u}px`),h.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${d}px`)}),onSwipeCancel:he(e.onSwipeCancel,h=>{h.currentTarget.setAttribute("data-swipe","cancel"),h.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),h.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),h.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),h.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:he(e.onSwipeEnd,h=>{const{x:u,y:d}=h.detail.delta;h.currentTarget.setAttribute("data-swipe","end"),h.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),h.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),h.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${u}px`),h.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${d}px`),l(!1)})})})});hv.displayName=to;var[Q0,Y0]=av(to,{onClose(){}}),X0=g.forwardRef((e,t)=>{const{__scopeToast:n,type:r="foreground",duration:i,open:a,onClose:s,onEscapeKeyDown:c,onPause:l,onResume:h,onSwipeStart:u,onSwipeMove:d,onSwipeCancel:p,onSwipeEnd:y,...x}=e,v=Zs(to,n),[k,f]=g.useState(null),m=Ee(t,U=>f(U)),b=g.useRef(null),w=g.useRef(null),T=i||v.duration,C=g.useRef(0),P=g.useRef(T),S=g.useRef(0),{onToastAdd:N,onToastRemove:I}=v,O=tn(()=>{var G;(k==null?void 0:k.contains(document.activeElement))&&((G=v.viewport)==null||G.focus()),s()}),R=g.useCallback(U=>{!U||U===1/0||(window.clearTimeout(S.current),C.current=new Date().getTime(),S.current=window.setTimeout(O,U))},[O]);g.useEffect(()=>{const U=v.viewport;if(U){const G=()=>{R(P.current),h==null||h()},H=()=>{const z=new Date().getTime()-C.current;P.current=P.current-z,window.clearTimeout(S.current),l==null||l()};return U.addEventListener(hh,H),U.addEventListener(uh,G),()=>{U.removeEventListener(hh,H),U.removeEventListener(uh,G)}}},[v.viewport,T,l,h,R]),g.useEffect(()=>{a&&!v.isClosePausedRef.current&&R(T)},[a,T,v.isClosePausedRef,R]),g.useEffect(()=>(N(),()=>I()),[N,I]);const M=g.useMemo(()=>k?vv(k):null,[k]);return v.viewport?o.jsxs(o.Fragment,{children:[M&&o.jsx(J0,{__scopeToast:n,role:"status","aria-live":r==="foreground"?"assertive":"polite","aria-atomic":!0,children:M}),o.jsx(Q0,{scope:n,onClose:O,children:Ja.createPortal(o.jsx(Ru.ItemSlot,{scope:n,children:o.jsx(I0,{asChild:!0,onEscapeKeyDown:he(c,()=>{v.isFocusedToastEscapeKeyDownRef.current||O(),v.isFocusedToastEscapeKeyDownRef.current=!1}),children:o.jsx(Ae.li,{role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":a?"open":"closed","data-swipe-direction":v.swipeDirection,...x,ref:m,style:{userSelect:"none",touchAction:"none",...e.style},onKeyDown:he(e.onKeyDown,U=>{U.key==="Escape"&&(c==null||c(U.nativeEvent),U.nativeEvent.defaultPrevented||(v.isFocusedToastEscapeKeyDownRef.current=!0,O()))}),onPointerDown:he(e.onPointerDown,U=>{U.button===0&&(b.current={x:U.clientX,y:U.clientY})}),onPointerMove:he(e.onPointerMove,U=>{if(!b.current)return;const G=U.clientX-b.current.x,H=U.clientY-b.current.y,z=!!w.current,A=["left","right"].includes(v.swipeDirection),D=["left","up"].includes(v.swipeDirection)?Math.min:Math.max,F=A?D(0,G):0,$=A?0:D(0,H),W=U.pointerType==="touch"?10:2,ze={x:F,y:$},de={originalEvent:U,delta:ze};z?(w.current=ze,To(W0,d,de,{discrete:!1})):Sp(ze,v.swipeDirection,W)?(w.current=ze,To($0,u,de,{discrete:!1}),U.target.setPointerCapture(U.pointerId)):(Math.abs(G)>W||Math.abs(H)>W)&&(b.current=null)}),onPointerUp:he(e.onPointerUp,U=>{const G=w.current,H=U.target;if(H.hasPointerCapture(U.pointerId)&&H.releasePointerCapture(U.pointerId),w.current=null,b.current=null,G){const z=U.currentTarget,A={originalEvent:U,delta:G};Sp(G,v.swipeDirection,v.swipeThreshold)?To(K0,y,A,{discrete:!0}):To(G0,p,A,{discrete:!0}),z.addEventListener("click",D=>D.preventDefault(),{once:!0})}})})})}),v.viewport)})]}):null}),J0=e=>{const{__scopeToast:t,children:n,...r}=e,i=Zs(to,t),[a,s]=g.useState(!1),[c,l]=g.useState(!1);return t1(()=>s(!0)),g.useEffect(()=>{const h=window.setTimeout(()=>l(!0),1e3);return()=>window.clearTimeout(h)},[]),c?null:o.jsx(ju,{asChild:!0,children:o.jsx(Js,{...r,children:a&&o.jsxs(o.Fragment,{children:[i.label," ",n]})})})},Z0="ToastTitle",uv=g.forwardRef((e,t)=>{const{__scopeToast:n,...r}=e;return o.jsx(Ae.div,{...r,ref:t})});uv.displayName=Z0;var e1="ToastDescription",dv=g.forwardRef((e,t)=>{const{__scopeToast:n,...r}=e;return o.jsx(Ae.div,{...r,ref:t})});dv.displayName=e1;var pv="ToastAction",gv=g.forwardRef((e,t)=>{const{altText:n,...r}=e;return n.trim()?o.jsx(fv,{altText:n,asChild:!0,children:o.jsx(Lu,{...r,ref:t})}):(console.error(`Invalid prop \`altText\` supplied to \`${pv}\`. Expected non-empty \`string\`.`),null)});gv.displayName=pv;var mv="ToastClose",Lu=g.forwardRef((e,t)=>{const{__scopeToast:n,...r}=e,i=Y0(mv,n);return o.jsx(fv,{asChild:!0,children:o.jsx(Ae.button,{type:"button",...r,ref:t,onClick:he(e.onClick,i.onClose)})})});Lu.displayName=mv;var fv=g.forwardRef((e,t)=>{const{__scopeToast:n,altText:r,...i}=e;return o.jsx(Ae.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":r||void 0,...i,ref:t})});function vv(e){const t=[];return Array.from(e.childNodes).forEach(r=>{if(r.nodeType===r.TEXT_NODE&&r.textContent&&t.push(r.textContent),n1(r)){const i=r.ariaHidden||r.hidden||r.style.display==="none",a=r.dataset.radixToastAnnounceExclude==="";if(!i)if(a){const s=r.dataset.radixToastAnnounceAlt;s&&t.push(s)}else t.push(...vv(r))}}),t}function To(e,t,n,{discrete:r}){const i=n.originalEvent.currentTarget,a=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:n});t&&i.addEventListener(e,t,{once:!0}),r?tv(i,a):i.dispatchEvent(a)}var Sp=(e,t,n=0)=>{const r=Math.abs(e.x),i=Math.abs(e.y),a=r>i;return t==="left"||t==="right"?a&&r>n:!a&&i>n};function t1(e=()=>{}){const t=tn(e);bn(()=>{let n=0,r=0;return n=window.requestAnimationFrame(()=>r=window.requestAnimationFrame(t)),()=>{window.cancelAnimationFrame(n),window.cancelAnimationFrame(r)}},[t])}function n1(e){return e.nodeType===e.ELEMENT_NODE}function r1(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const i=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||i?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function Gc(e){const t=document.activeElement;return e.some(n=>n===t?!0:(n.focus(),document.activeElement!==t))}var i1=ov,yv=cv,bv=hv,wv=uv,xv=dv,kv=gv,Tv=Lu;function Cv(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=Cv(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function Sv(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=Cv(e))&&(r&&(r+=" "),r+=t);return r}const Pp=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,Ap=Sv,Du=(e,t)=>n=>{var r;if((t==null?void 0:t.variants)==null)return Ap(e,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:i,defaultVariants:a}=t,s=Object.keys(i).map(h=>{const u=n==null?void 0:n[h],d=a==null?void 0:a[h];if(u===null)return null;const p=Pp(u)||Pp(d);return i[h][p]}),c=n&&Object.entries(n).reduce((h,u)=>{let[d,p]=u;return p===void 0||(h[d]=p),h},{}),l=t==null||(r=t.compoundVariants)===null||r===void 0?void 0:r.reduce((h,u)=>{let{class:d,className:p,...y}=u;return Object.entries(y).every(x=>{let[v,k]=x;return Array.isArray(k)?k.includes({...a,...c}[v]):{...a,...c}[v]===k})?[...h,d,p]:h},[]);return Ap(e,s,l,n==null?void 0:n.class,n==null?void 0:n.className)};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a1=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Pv=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var o1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s1=g.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:a,iconNode:s,...c},l)=>g.createElement("svg",{ref:l,...o1,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:Pv("lucide",i),...c},[...s.map(([h,u])=>g.createElement(h,u)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=(e,t)=>{const n=g.forwardRef(({className:r,...i},a)=>g.createElement(s1,{ref:a,iconNode:t,className:Pv(`lucide-${a1(e)}`,r),...i}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Av=_("ArrowDownRight",[["path",{d:"m7 7 10 10",key:"1fmybs"}],["path",{d:"M17 7v10H7",key:"6fjiku"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ph=_("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cs=_("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ct=_("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c1=_("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l1=_("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h1=_("BadgeCheck",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u1=_("Blocks",[["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["path",{d:"M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3",key:"1fpvtg"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gh=_("BookOpenCheck",[["path",{d:"M12 21V7",key:"gj6g52"}],["path",{d:"m16 12 2 2 4-4",key:"mdajum"}],["path",{d:"M22 6V4a1 1 0 0 0-1-1h-5a4 4 0 0 0-4 4 4 4 0 0 0-4-4H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h6a3 3 0 0 1 3 3 3 3 0 0 1 3-3h6a1 1 0 0 0 1-1v-1.3",key:"8arnkb"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d1=_("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p1=_("Box",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g1=_("BriefcaseBusiness",[["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2",key:"1ksdt3"}],["path",{d:"M22 13a18.15 18.15 0 0 1-20 0",key:"12hx5q"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m1=_("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $o=_("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Np=_("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f1=_("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v1=_("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mh=_("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y1=_("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _a=_("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b1=_("CodeXml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w1=_("Compass",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x1=_("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fh=_("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vh=_("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ss=_("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k1=_("Facebook",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ip=_("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T1=_("Flower2",[["path",{d:"M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1",key:"3pnvol"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["path",{d:"M12 10v12",key:"6ubwww"}],["path",{d:"M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z",key:"9hd38g"}],["path",{d:"M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z",key:"ufn41s"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kc=_("Folder",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C1=_("GitFork",[["circle",{cx:"12",cy:"18",r:"3",key:"1mpf1b"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["path",{d:"M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9",key:"1uq4wg"}],["path",{d:"M12 12v3",key:"158kv8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cr=_("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S1=_("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P1=_("Headphones",[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A1=_("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N1=_("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I1=_("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j1=_("Languages",[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E1=_("Laptop",[["path",{d:"M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16",key:"tarvll"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nv=_("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iv=_("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ai=_("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jv=_("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R1=_("Map",[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L1=_("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D1=_("MessageSquareText",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M13 8H7",key:"14i4kc"}],["path",{d:"M17 12H7",key:"16if0g"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M1=_("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q1=_("Music2",[["circle",{cx:"8",cy:"18",r:"4",key:"1fc0mg"}],["path",{d:"M12 18V2l7 4",key:"g04rme"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O1=_("Network",[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U1=_("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _1=_("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F1=_("SearchX",[["path",{d:"m13.5 8.5-5 5",key:"1cs55j"}],["path",{d:"m8.5 8.5 5 5",key:"a8mexj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qc=_("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jp=_("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V1=_("Shapes",[["path",{d:"M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z",key:"1bo67w"}],["rect",{x:"3",y:"14",width:"7",height:"7",rx:"1",key:"1bkyp8"}],["circle",{cx:"17.5",cy:"17.5",r:"3.5",key:"w3z12y"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B1=_("Share2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z1=_("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H1=_("SkipBack",[["polygon",{points:"19 20 9 12 19 4 19 20",key:"o2sva"}],["line",{x1:"5",x2:"5",y1:"19",y2:"5",key:"1ocqjk"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $1=_("SkipForward",[["polygon",{points:"5 4 15 12 5 20 5 4",key:"16p6eg"}],["line",{x1:"19",x2:"19",y1:"5",y2:"19",key:"futhcm"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W1=_("Snowflake",[["line",{x1:"2",x2:"22",y1:"12",y2:"12",key:"1dnqot"}],["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"m20 16-4-4 4-4",key:"rquw4f"}],["path",{d:"m4 8 4 4-4 4",key:"12s3z9"}],["path",{d:"m16 4-4 4-4-4",key:"1tumq1"}],["path",{d:"m8 20 4-4 4 4",key:"9p200w"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ec=_("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G1=_("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K1=_("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q1=_("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yh=_("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y1=_("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X1=_("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J1=_("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z1=_("WandSparkles",[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",key:"ul74o6"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fa=_("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Mu="-",eT=e=>{const t=nT(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=e;return{getClassGroupId:s=>{const c=s.split(Mu);return c[0]===""&&c.length!==1&&c.shift(),Ev(c,t)||tT(s)},getConflictingClassGroupIds:(s,c)=>{const l=n[s]||[];return c&&r[s]?[...l,...r[s]]:l}}},Ev=(e,t)=>{var s;if(e.length===0)return t.classGroupId;const n=e[0],r=t.nextPart.get(n),i=r?Ev(e.slice(1),r):void 0;if(i)return i;if(t.validators.length===0)return;const a=e.join(Mu);return(s=t.validators.find(({validator:c})=>c(a)))==null?void 0:s.classGroupId},Ep=/^\[(.+)\]$/,tT=e=>{if(Ep.test(e)){const t=Ep.exec(e)[1],n=t==null?void 0:t.substring(0,t.indexOf(":"));if(n)return"arbitrary.."+n}},nT=e=>{const{theme:t,prefix:n}=e,r={nextPart:new Map,validators:[]};return iT(Object.entries(e.classGroups),n).forEach(([a,s])=>{bh(s,r,a,t)}),r},bh=(e,t,n,r)=>{e.forEach(i=>{if(typeof i=="string"){const a=i===""?t:Rp(t,i);a.classGroupId=n;return}if(typeof i=="function"){if(rT(i)){bh(i(r),t,n,r);return}t.validators.push({validator:i,classGroupId:n});return}Object.entries(i).forEach(([a,s])=>{bh(s,Rp(t,a),n,r)})})},Rp=(e,t)=>{let n=e;return t.split(Mu).forEach(r=>{n.nextPart.has(r)||n.nextPart.set(r,{nextPart:new Map,validators:[]}),n=n.nextPart.get(r)}),n},rT=e=>e.isThemeGetter,iT=(e,t)=>t?e.map(([n,r])=>{const i=r.map(a=>typeof a=="string"?t+a:typeof a=="object"?Object.fromEntries(Object.entries(a).map(([s,c])=>[t+s,c])):a);return[n,i]}):e,aT=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,n=new Map,r=new Map;const i=(a,s)=>{n.set(a,s),t++,t>e&&(t=0,r=n,n=new Map)};return{get(a){let s=n.get(a);if(s!==void 0)return s;if((s=r.get(a))!==void 0)return i(a,s),s},set(a,s){n.has(a)?n.set(a,s):i(a,s)}}},Rv="!",oT=e=>{const{separator:t,experimentalParseClassName:n}=e,r=t.length===1,i=t[0],a=t.length,s=c=>{const l=[];let h=0,u=0,d;for(let k=0;k<c.length;k++){let f=c[k];if(h===0){if(f===i&&(r||c.slice(k,k+a)===t)){l.push(c.slice(u,k)),u=k+a;continue}if(f==="/"){d=k;continue}}f==="["?h++:f==="]"&&h--}const p=l.length===0?c:c.substring(u),y=p.startsWith(Rv),x=y?p.substring(1):p,v=d&&d>u?d-u:void 0;return{modifiers:l,hasImportantModifier:y,baseClassName:x,maybePostfixModifierPosition:v}};return n?c=>n({className:c,parseClassName:s}):s},sT=e=>{if(e.length<=1)return e;const t=[];let n=[];return e.forEach(r=>{r[0]==="["?(t.push(...n.sort(),r),n=[]):n.push(r)}),t.push(...n.sort()),t},cT=e=>({cache:aT(e.cacheSize),parseClassName:oT(e),...eT(e)}),lT=/\s+/,hT=(e,t)=>{const{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:i}=t,a=[],s=e.trim().split(lT);let c="";for(let l=s.length-1;l>=0;l-=1){const h=s[l],{modifiers:u,hasImportantModifier:d,baseClassName:p,maybePostfixModifierPosition:y}=n(h);let x=!!y,v=r(x?p.substring(0,y):p);if(!v){if(!x){c=h+(c.length>0?" "+c:c);continue}if(v=r(p),!v){c=h+(c.length>0?" "+c:c);continue}x=!1}const k=sT(u).join(":"),f=d?k+Rv:k,m=f+v;if(a.includes(m))continue;a.push(m);const b=i(v,x);for(let w=0;w<b.length;++w){const T=b[w];a.push(f+T)}c=h+(c.length>0?" "+c:c)}return c};function uT(){let e=0,t,n,r="";for(;e<arguments.length;)(t=arguments[e++])&&(n=Lv(t))&&(r&&(r+=" "),r+=n);return r}const Lv=e=>{if(typeof e=="string")return e;let t,n="";for(let r=0;r<e.length;r++)e[r]&&(t=Lv(e[r]))&&(n&&(n+=" "),n+=t);return n};function dT(e,...t){let n,r,i,a=s;function s(l){const h=t.reduce((u,d)=>d(u),e());return n=cT(h),r=n.cache.get,i=n.cache.set,a=c,c(l)}function c(l){const h=r(l);if(h)return h;const u=hT(l,n);return i(l,u),u}return function(){return a(uT.apply(null,arguments))}}const fe=e=>{const t=n=>n[e]||[];return t.isThemeGetter=!0,t},Dv=/^\[(?:([a-z-]+):)?(.+)\]$/i,pT=/^\d+\/\d+$/,gT=new Set(["px","full","screen"]),mT=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,fT=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,vT=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,yT=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,bT=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,an=e=>li(e)||gT.has(e)||pT.test(e),Sn=e=>_i(e,"length",AT),li=e=>!!e&&!Number.isNaN(Number(e)),Yc=e=>_i(e,"number",li),Zi=e=>!!e&&Number.isInteger(Number(e)),wT=e=>e.endsWith("%")&&li(e.slice(0,-1)),Z=e=>Dv.test(e),Pn=e=>mT.test(e),xT=new Set(["length","size","percentage"]),kT=e=>_i(e,xT,Mv),TT=e=>_i(e,"position",Mv),CT=new Set(["image","url"]),ST=e=>_i(e,CT,IT),PT=e=>_i(e,"",NT),ea=()=>!0,_i=(e,t,n)=>{const r=Dv.exec(e);return r?r[1]?typeof t=="string"?r[1]===t:t.has(r[1]):n(r[2]):!1},AT=e=>fT.test(e)&&!vT.test(e),Mv=()=>!1,NT=e=>yT.test(e),IT=e=>bT.test(e),jT=()=>{const e=fe("colors"),t=fe("spacing"),n=fe("blur"),r=fe("brightness"),i=fe("borderColor"),a=fe("borderRadius"),s=fe("borderSpacing"),c=fe("borderWidth"),l=fe("contrast"),h=fe("grayscale"),u=fe("hueRotate"),d=fe("invert"),p=fe("gap"),y=fe("gradientColorStops"),x=fe("gradientColorStopPositions"),v=fe("inset"),k=fe("margin"),f=fe("opacity"),m=fe("padding"),b=fe("saturate"),w=fe("scale"),T=fe("sepia"),C=fe("skew"),P=fe("space"),S=fe("translate"),N=()=>["auto","contain","none"],I=()=>["auto","hidden","clip","visible","scroll"],O=()=>["auto",Z,t],R=()=>[Z,t],M=()=>["",an,Sn],U=()=>["auto",li,Z],G=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],H=()=>["solid","dashed","dotted","double","none"],z=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],A=()=>["start","end","center","between","around","evenly","stretch"],D=()=>["","0",Z],F=()=>["auto","avoid","all","avoid-page","page","left","right","column"],$=()=>[li,Z];return{cacheSize:500,separator:":",theme:{colors:[ea],spacing:[an,Sn],blur:["none","",Pn,Z],brightness:$(),borderColor:[e],borderRadius:["none","","full",Pn,Z],borderSpacing:R(),borderWidth:M(),contrast:$(),grayscale:D(),hueRotate:$(),invert:D(),gap:R(),gradientColorStops:[e],gradientColorStopPositions:[wT,Sn],inset:O(),margin:O(),opacity:$(),padding:R(),saturate:$(),scale:$(),sepia:D(),skew:$(),space:R(),translate:R()},classGroups:{aspect:[{aspect:["auto","square","video",Z]}],container:["container"],columns:[{columns:[Pn]}],"break-after":[{"break-after":F()}],"break-before":[{"break-before":F()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...G(),Z]}],overflow:[{overflow:I()}],"overflow-x":[{"overflow-x":I()}],"overflow-y":[{"overflow-y":I()}],overscroll:[{overscroll:N()}],"overscroll-x":[{"overscroll-x":N()}],"overscroll-y":[{"overscroll-y":N()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[v]}],"inset-x":[{"inset-x":[v]}],"inset-y":[{"inset-y":[v]}],start:[{start:[v]}],end:[{end:[v]}],top:[{top:[v]}],right:[{right:[v]}],bottom:[{bottom:[v]}],left:[{left:[v]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",Zi,Z]}],basis:[{basis:O()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",Z]}],grow:[{grow:D()}],shrink:[{shrink:D()}],order:[{order:["first","last","none",Zi,Z]}],"grid-cols":[{"grid-cols":[ea]}],"col-start-end":[{col:["auto",{span:["full",Zi,Z]},Z]}],"col-start":[{"col-start":U()}],"col-end":[{"col-end":U()}],"grid-rows":[{"grid-rows":[ea]}],"row-start-end":[{row:["auto",{span:[Zi,Z]},Z]}],"row-start":[{"row-start":U()}],"row-end":[{"row-end":U()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",Z]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",Z]}],gap:[{gap:[p]}],"gap-x":[{"gap-x":[p]}],"gap-y":[{"gap-y":[p]}],"justify-content":[{justify:["normal",...A()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...A(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...A(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[m]}],px:[{px:[m]}],py:[{py:[m]}],ps:[{ps:[m]}],pe:[{pe:[m]}],pt:[{pt:[m]}],pr:[{pr:[m]}],pb:[{pb:[m]}],pl:[{pl:[m]}],m:[{m:[k]}],mx:[{mx:[k]}],my:[{my:[k]}],ms:[{ms:[k]}],me:[{me:[k]}],mt:[{mt:[k]}],mr:[{mr:[k]}],mb:[{mb:[k]}],ml:[{ml:[k]}],"space-x":[{"space-x":[P]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[P]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",Z,t]}],"min-w":[{"min-w":[Z,t,"min","max","fit"]}],"max-w":[{"max-w":[Z,t,"none","full","min","max","fit","prose",{screen:[Pn]},Pn]}],h:[{h:[Z,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[Z,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[Z,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[Z,t,"auto","min","max","fit"]}],"font-size":[{text:["base",Pn,Sn]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",Yc]}],"font-family":[{font:[ea]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",Z]}],"line-clamp":[{"line-clamp":["none",li,Yc]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",an,Z]}],"list-image":[{"list-image":["none",Z]}],"list-style-type":[{list:["none","disc","decimal",Z]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[f]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[f]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...H(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",an,Sn]}],"underline-offset":[{"underline-offset":["auto",an,Z]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:R()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Z]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Z]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[f]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...G(),TT]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",kT]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},ST]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[x]}],"gradient-via-pos":[{via:[x]}],"gradient-to-pos":[{to:[x]}],"gradient-from":[{from:[y]}],"gradient-via":[{via:[y]}],"gradient-to":[{to:[y]}],rounded:[{rounded:[a]}],"rounded-s":[{"rounded-s":[a]}],"rounded-e":[{"rounded-e":[a]}],"rounded-t":[{"rounded-t":[a]}],"rounded-r":[{"rounded-r":[a]}],"rounded-b":[{"rounded-b":[a]}],"rounded-l":[{"rounded-l":[a]}],"rounded-ss":[{"rounded-ss":[a]}],"rounded-se":[{"rounded-se":[a]}],"rounded-ee":[{"rounded-ee":[a]}],"rounded-es":[{"rounded-es":[a]}],"rounded-tl":[{"rounded-tl":[a]}],"rounded-tr":[{"rounded-tr":[a]}],"rounded-br":[{"rounded-br":[a]}],"rounded-bl":[{"rounded-bl":[a]}],"border-w":[{border:[c]}],"border-w-x":[{"border-x":[c]}],"border-w-y":[{"border-y":[c]}],"border-w-s":[{"border-s":[c]}],"border-w-e":[{"border-e":[c]}],"border-w-t":[{"border-t":[c]}],"border-w-r":[{"border-r":[c]}],"border-w-b":[{"border-b":[c]}],"border-w-l":[{"border-l":[c]}],"border-opacity":[{"border-opacity":[f]}],"border-style":[{border:[...H(),"hidden"]}],"divide-x":[{"divide-x":[c]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[c]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[f]}],"divide-style":[{divide:H()}],"border-color":[{border:[i]}],"border-color-x":[{"border-x":[i]}],"border-color-y":[{"border-y":[i]}],"border-color-s":[{"border-s":[i]}],"border-color-e":[{"border-e":[i]}],"border-color-t":[{"border-t":[i]}],"border-color-r":[{"border-r":[i]}],"border-color-b":[{"border-b":[i]}],"border-color-l":[{"border-l":[i]}],"divide-color":[{divide:[i]}],"outline-style":[{outline:["",...H()]}],"outline-offset":[{"outline-offset":[an,Z]}],"outline-w":[{outline:[an,Sn]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:M()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[f]}],"ring-offset-w":[{"ring-offset":[an,Sn]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",Pn,PT]}],"shadow-color":[{shadow:[ea]}],opacity:[{opacity:[f]}],"mix-blend":[{"mix-blend":[...z(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":z()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[r]}],contrast:[{contrast:[l]}],"drop-shadow":[{"drop-shadow":["","none",Pn,Z]}],grayscale:[{grayscale:[h]}],"hue-rotate":[{"hue-rotate":[u]}],invert:[{invert:[d]}],saturate:[{saturate:[b]}],sepia:[{sepia:[T]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[l]}],"backdrop-grayscale":[{"backdrop-grayscale":[h]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[u]}],"backdrop-invert":[{"backdrop-invert":[d]}],"backdrop-opacity":[{"backdrop-opacity":[f]}],"backdrop-saturate":[{"backdrop-saturate":[b]}],"backdrop-sepia":[{"backdrop-sepia":[T]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[s]}],"border-spacing-x":[{"border-spacing-x":[s]}],"border-spacing-y":[{"border-spacing-y":[s]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",Z]}],duration:[{duration:$()}],ease:[{ease:["linear","in","out","in-out",Z]}],delay:[{delay:$()}],animate:[{animate:["none","spin","ping","pulse","bounce",Z]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[w]}],"scale-x":[{"scale-x":[w]}],"scale-y":[{"scale-y":[w]}],rotate:[{rotate:[Zi,Z]}],"translate-x":[{"translate-x":[S]}],"translate-y":[{"translate-y":[S]}],"skew-x":[{"skew-x":[C]}],"skew-y":[{"skew-y":[C]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",Z]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Z]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":R()}],"scroll-mx":[{"scroll-mx":R()}],"scroll-my":[{"scroll-my":R()}],"scroll-ms":[{"scroll-ms":R()}],"scroll-me":[{"scroll-me":R()}],"scroll-mt":[{"scroll-mt":R()}],"scroll-mr":[{"scroll-mr":R()}],"scroll-mb":[{"scroll-mb":R()}],"scroll-ml":[{"scroll-ml":R()}],"scroll-p":[{"scroll-p":R()}],"scroll-px":[{"scroll-px":R()}],"scroll-py":[{"scroll-py":R()}],"scroll-ps":[{"scroll-ps":R()}],"scroll-pe":[{"scroll-pe":R()}],"scroll-pt":[{"scroll-pt":R()}],"scroll-pr":[{"scroll-pr":R()}],"scroll-pb":[{"scroll-pb":R()}],"scroll-pl":[{"scroll-pl":R()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Z]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[an,Sn,Yc]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},ET=dT(jT);function pe(...e){return ET(Sv(e))}const RT=i1,qv=g.forwardRef(({className:e,...t},n)=>o.jsx(yv,{ref:n,className:pe("fixed right-0 top-0 z-[100] flex max-h-screen w-full flex-col gap-2.5 p-3 sm:max-w-[360px] sm:p-4",e),...t}));qv.displayName=yv.displayName;const LT=Du("group pointer-events-auto relative grid w-full cursor-pointer grid-cols-[auto_1fr_auto] items-start gap-2.5 overflow-hidden rounded-lg border p-3 pr-2 text-foreground shadow-[0_14px_42px_hsl(var(--foreground)/0.13)] outline-none backdrop-blur-xl transition-all before:pointer-events-none before:absolute before:inset-0 before:bg-[linear-gradient(135deg,hsl(var(--primary)/0.065),transparent_40%,hsl(var(--accent)/0.045))] after:pointer-events-none after:absolute after:inset-x-0 after:top-0 after:h-px after:bg-[linear-gradient(90deg,transparent,hsl(var(--primary)/0.38),transparent)] hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-ring/45 data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full sm:data-[state=open]:slide-in-from-right-full",{variants:{variant:{default:"border-border/70 bg-popover/92",success:"border-primary/35 bg-[linear-gradient(135deg,hsl(var(--popover)/0.96),hsl(var(--primary)/0.1))]",info:"border-[hsl(var(--category-architecture)/0.38)] bg-[linear-gradient(135deg,hsl(var(--popover)/0.96),hsl(var(--category-architecture)/0.08))]",warning:"border-[hsl(var(--category-practices)/0.42)] bg-[linear-gradient(135deg,hsl(var(--popover)/0.96),hsl(var(--category-practices)/0.1))]",destructive:"destructive border-destructive/45 bg-[linear-gradient(135deg,hsl(var(--popover)/0.96),hsl(var(--destructive)/0.09))]"}},defaultVariants:{variant:"default"}}),Ov=g.forwardRef(({className:e,variant:t,...n},r)=>o.jsx(bv,{ref:r,className:pe(LT({variant:t}),e),...n}));Ov.displayName=bv.displayName;const DT=g.forwardRef(({className:e,...t},n)=>o.jsx(kv,{ref:n,className:pe("inline-flex h-8 shrink-0 items-center justify-center rounded-md border border-border/70 bg-background/50 px-3 text-xs font-semibold ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring/50 focus:ring-offset-2 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground disabled:pointer-events-none disabled:opacity-50",e),...t}));DT.displayName=kv.displayName;const Uv=g.forwardRef(({className:e,...t},n)=>o.jsx(Tv,{ref:n,className:pe("relative z-10 -mr-0.5 -mt-1 rounded-md p-1 text-muted-foreground/60 opacity-70 transition-colors hover:bg-muted hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring/45",e),"toast-close":"",...t,children:o.jsx(Fa,{className:"h-3.5 w-3.5"})}));Uv.displayName=Tv.displayName;const _v=g.forwardRef(({className:e,...t},n)=>o.jsx(wv,{ref:n,className:pe("line-clamp-1 text-[13px] font-semibold leading-4 tracking-normal",e),...t}));_v.displayName=wv.displayName;const Fv=g.forwardRef(({className:e,...t},n)=>o.jsx(xv,{ref:n,className:pe("line-clamp-1 text-xs leading-4 text-muted-foreground",e),...t}));Fv.displayName=xv.displayName;const Lp=3600,Dp={default:{icon:ec,iconClass:"border-border/60 bg-background/70 text-foreground",railClass:"bg-[linear-gradient(180deg,hsl(var(--muted-foreground)/0.55),hsl(var(--primary)/0.55))]",progressClass:"bg-[linear-gradient(90deg,hsl(var(--muted-foreground)/0.45),hsl(var(--primary)/0.75))]"},success:{icon:mh,iconClass:"border-primary/35 bg-primary/10 text-primary",railClass:"bg-[linear-gradient(180deg,hsl(var(--primary)),hsl(var(--accent)/0.82))]",progressClass:"bg-[linear-gradient(90deg,hsl(var(--primary)),hsl(var(--accent)))]"},info:{icon:N1,iconClass:"border-[hsl(var(--category-architecture)/0.35)] bg-[hsl(var(--category-architecture)/0.1)] text-[hsl(var(--category-architecture))]",railClass:"bg-[linear-gradient(180deg,hsl(var(--category-architecture)),hsl(var(--primary)/0.78))]",progressClass:"bg-[linear-gradient(90deg,hsl(var(--category-architecture)),hsl(var(--primary)))]"},warning:{icon:Y1,iconClass:"border-[hsl(var(--category-practices)/0.38)] bg-[hsl(var(--category-practices)/0.12)] text-[hsl(var(--category-practices))]",railClass:"bg-[linear-gradient(180deg,hsl(var(--category-practices)),hsl(var(--accent)))]",progressClass:"bg-[linear-gradient(90deg,hsl(var(--category-practices)),hsl(var(--accent)))]"},destructive:{icon:y1,iconClass:"border-destructive/35 bg-destructive/10 text-destructive",railClass:"bg-[linear-gradient(180deg,hsl(var(--destructive)),hsl(var(--accent)/0.82))]",progressClass:"bg-[linear-gradient(90deg,hsl(var(--destructive)),hsl(var(--accent)))]"}};function MT(){const{toasts:e,dismiss:t}=Qs();return o.jsxs(RT,{duration:Lp,children:[e.map(function({id:n,title:r,description:i,action:a,variant:s="default",...c}){const l=Dp[s]??Dp.default,h=l.icon;return o.jsxs(Ov,{variant:s,onClick:()=>t(n),...c,children:[o.jsx("div",{className:`absolute inset-y-2.5 left-2 w-0.5 rounded-full ${l.railClass}`}),o.jsx("div",{className:`relative z-10 ml-1.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md border shadow-[inset_0_1px_0_hsl(var(--background)/0.45)] ${l.iconClass}`,children:o.jsx(h,{className:"h-3.5 w-3.5"})}),o.jsxs("div",{className:"relative z-10 min-w-0 flex-1",children:[o.jsxs("div",{className:"grid gap-0.5",children:[r&&o.jsx(_v,{children:r}),i&&o.jsx(Fv,{children:i})]}),a&&o.jsx("div",{className:"mt-2",onClick:u=>u.stopPropagation(),children:a})]}),o.jsx(Uv,{onClick:u=>u.stopPropagation()}),o.jsx("div",{className:"absolute inset-x-0 bottom-0 h-0.5 bg-muted/60",children:o.jsx("div",{className:`h-full ${l.progressClass}`,style:{animation:`toast-progress ${Lp}ms linear forwards`,transformOrigin:"left"}})})]},n)}),o.jsx(qv,{})]})}var qT=qh[" useId ".trim().toString()]||(()=>{}),OT=0;function Vv(e){const[t,n]=g.useState(qT());return bn(()=>{n(r=>r??String(OT++))},[e]),t?`radix-${t}`:""}const UT=["top","right","bottom","left"],Zn=Math.min,dt=Math.max,Ps=Math.round,Co=Math.floor,en=e=>({x:e,y:e}),_T={left:"right",right:"left",bottom:"top",top:"bottom"},FT={start:"end",end:"start"};function wh(e,t,n){return dt(e,Zn(t,n))}function wn(e,t){return typeof e=="function"?e(t):e}function xn(e){return e.split("-")[0]}function Fi(e){return e.split("-")[1]}function qu(e){return e==="x"?"y":"x"}function Ou(e){return e==="y"?"height":"width"}const VT=new Set(["top","bottom"]);function Yt(e){return VT.has(xn(e))?"y":"x"}function Uu(e){return qu(Yt(e))}function BT(e,t,n){n===void 0&&(n=!1);const r=Fi(e),i=Uu(e),a=Ou(i);let s=i==="x"?r===(n?"end":"start")?"right":"left":r==="start"?"bottom":"top";return t.reference[a]>t.floating[a]&&(s=As(s)),[s,As(s)]}function zT(e){const t=As(e);return[xh(e),t,xh(t)]}function xh(e){return e.replace(/start|end/g,t=>FT[t])}const Mp=["left","right"],qp=["right","left"],HT=["top","bottom"],$T=["bottom","top"];function WT(e,t,n){switch(e){case"top":case"bottom":return n?t?qp:Mp:t?Mp:qp;case"left":case"right":return t?HT:$T;default:return[]}}function GT(e,t,n,r){const i=Fi(e);let a=WT(xn(e),n==="start",r);return i&&(a=a.map(s=>s+"-"+i),t&&(a=a.concat(a.map(xh)))),a}function As(e){return e.replace(/left|right|bottom|top/g,t=>_T[t])}function KT(e){return{top:0,right:0,bottom:0,left:0,...e}}function Bv(e){return typeof e!="number"?KT(e):{top:e,right:e,bottom:e,left:e}}function Ns(e){const{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function Op(e,t,n){let{reference:r,floating:i}=e;const a=Yt(t),s=Uu(t),c=Ou(s),l=xn(t),h=a==="y",u=r.x+r.width/2-i.width/2,d=r.y+r.height/2-i.height/2,p=r[c]/2-i[c]/2;let y;switch(l){case"top":y={x:u,y:r.y-i.height};break;case"bottom":y={x:u,y:r.y+r.height};break;case"right":y={x:r.x+r.width,y:d};break;case"left":y={x:r.x-i.width,y:d};break;default:y={x:r.x,y:r.y}}switch(Fi(t)){case"start":y[s]-=p*(n&&h?-1:1);break;case"end":y[s]+=p*(n&&h?-1:1);break}return y}const QT=async(e,t,n)=>{const{placement:r="bottom",strategy:i="absolute",middleware:a=[],platform:s}=n,c=a.filter(Boolean),l=await(s.isRTL==null?void 0:s.isRTL(t));let h=await s.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:d}=Op(h,r,l),p=r,y={},x=0;for(let v=0;v<c.length;v++){const{name:k,fn:f}=c[v],{x:m,y:b,data:w,reset:T}=await f({x:u,y:d,initialPlacement:r,placement:p,strategy:i,middlewareData:y,rects:h,platform:s,elements:{reference:e,floating:t}});u=m??u,d=b??d,y={...y,[k]:{...y[k],...w}},T&&x<=50&&(x++,typeof T=="object"&&(T.placement&&(p=T.placement),T.rects&&(h=T.rects===!0?await s.getElementRects({reference:e,floating:t,strategy:i}):T.rects),{x:u,y:d}=Op(h,p,l)),v=-1)}return{x:u,y:d,placement:p,strategy:i,middlewareData:y}};async function Va(e,t){var n;t===void 0&&(t={});const{x:r,y:i,platform:a,rects:s,elements:c,strategy:l}=e,{boundary:h="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:p=!1,padding:y=0}=wn(t,e),x=Bv(y),k=c[p?d==="floating"?"reference":"floating":d],f=Ns(await a.getClippingRect({element:(n=await(a.isElement==null?void 0:a.isElement(k)))==null||n?k:k.contextElement||await(a.getDocumentElement==null?void 0:a.getDocumentElement(c.floating)),boundary:h,rootBoundary:u,strategy:l})),m=d==="floating"?{x:r,y:i,width:s.floating.width,height:s.floating.height}:s.reference,b=await(a.getOffsetParent==null?void 0:a.getOffsetParent(c.floating)),w=await(a.isElement==null?void 0:a.isElement(b))?await(a.getScale==null?void 0:a.getScale(b))||{x:1,y:1}:{x:1,y:1},T=Ns(a.convertOffsetParentRelativeRectToViewportRelativeRect?await a.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:m,offsetParent:b,strategy:l}):m);return{top:(f.top-T.top+x.top)/w.y,bottom:(T.bottom-f.bottom+x.bottom)/w.y,left:(f.left-T.left+x.left)/w.x,right:(T.right-f.right+x.right)/w.x}}const YT=e=>({name:"arrow",options:e,async fn(t){const{x:n,y:r,placement:i,rects:a,platform:s,elements:c,middlewareData:l}=t,{element:h,padding:u=0}=wn(e,t)||{};if(h==null)return{};const d=Bv(u),p={x:n,y:r},y=Uu(i),x=Ou(y),v=await s.getDimensions(h),k=y==="y",f=k?"top":"left",m=k?"bottom":"right",b=k?"clientHeight":"clientWidth",w=a.reference[x]+a.reference[y]-p[y]-a.floating[x],T=p[y]-a.reference[y],C=await(s.getOffsetParent==null?void 0:s.getOffsetParent(h));let P=C?C[b]:0;(!P||!await(s.isElement==null?void 0:s.isElement(C)))&&(P=c.floating[b]||a.floating[x]);const S=w/2-T/2,N=P/2-v[x]/2-1,I=Zn(d[f],N),O=Zn(d[m],N),R=I,M=P-v[x]-O,U=P/2-v[x]/2+S,G=wh(R,U,M),H=!l.arrow&&Fi(i)!=null&&U!==G&&a.reference[x]/2-(U<R?I:O)-v[x]/2<0,z=H?U<R?U-R:U-M:0;return{[y]:p[y]+z,data:{[y]:G,centerOffset:U-G-z,...H&&{alignmentOffset:z}},reset:H}}}),XT=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n,r;const{placement:i,middlewareData:a,rects:s,initialPlacement:c,platform:l,elements:h}=t,{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:p,fallbackStrategy:y="bestFit",fallbackAxisSideDirection:x="none",flipAlignment:v=!0,...k}=wn(e,t);if((n=a.arrow)!=null&&n.alignmentOffset)return{};const f=xn(i),m=Yt(c),b=xn(c)===c,w=await(l.isRTL==null?void 0:l.isRTL(h.floating)),T=p||(b||!v?[As(c)]:zT(c)),C=x!=="none";!p&&C&&T.push(...GT(c,v,x,w));const P=[c,...T],S=await Va(t,k),N=[];let I=((r=a.flip)==null?void 0:r.overflows)||[];if(u&&N.push(S[f]),d){const U=BT(i,s,w);N.push(S[U[0]],S[U[1]])}if(I=[...I,{placement:i,overflows:N}],!N.every(U=>U<=0)){var O,R;const U=(((O=a.flip)==null?void 0:O.index)||0)+1,G=P[U];if(G&&(!(d==="alignment"?m!==Yt(G):!1)||I.every(A=>A.overflows[0]>0&&Yt(A.placement)===m)))return{data:{index:U,overflows:I},reset:{placement:G}};let H=(R=I.filter(z=>z.overflows[0]<=0).sort((z,A)=>z.overflows[1]-A.overflows[1])[0])==null?void 0:R.placement;if(!H)switch(y){case"bestFit":{var M;const z=(M=I.filter(A=>{if(C){const D=Yt(A.placement);return D===m||D==="y"}return!0}).map(A=>[A.placement,A.overflows.filter(D=>D>0).reduce((D,F)=>D+F,0)]).sort((A,D)=>A[1]-D[1])[0])==null?void 0:M[0];z&&(H=z);break}case"initialPlacement":H=c;break}if(i!==H)return{reset:{placement:H}}}return{}}}};function Up(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function _p(e){return UT.some(t=>e[t]>=0)}const JT=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(t){const{rects:n}=t,{strategy:r="referenceHidden",...i}=wn(e,t);switch(r){case"referenceHidden":{const a=await Va(t,{...i,elementContext:"reference"}),s=Up(a,n.reference);return{data:{referenceHiddenOffsets:s,referenceHidden:_p(s)}}}case"escaped":{const a=await Va(t,{...i,altBoundary:!0}),s=Up(a,n.floating);return{data:{escapedOffsets:s,escaped:_p(s)}}}default:return{}}}}},zv=new Set(["left","top"]);async function ZT(e,t){const{placement:n,platform:r,elements:i}=e,a=await(r.isRTL==null?void 0:r.isRTL(i.floating)),s=xn(n),c=Fi(n),l=Yt(n)==="y",h=zv.has(s)?-1:1,u=a&&l?-1:1,d=wn(t,e);let{mainAxis:p,crossAxis:y,alignmentAxis:x}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return c&&typeof x=="number"&&(y=c==="end"?x*-1:x),l?{x:y*u,y:p*h}:{x:p*h,y:y*u}}const eC=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var n,r;const{x:i,y:a,placement:s,middlewareData:c}=t,l=await ZT(t,e);return s===((n=c.offset)==null?void 0:n.placement)&&(r=c.arrow)!=null&&r.alignmentOffset?{}:{x:i+l.x,y:a+l.y,data:{...l,placement:s}}}}},tC=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:r,placement:i}=t,{mainAxis:a=!0,crossAxis:s=!1,limiter:c={fn:k=>{let{x:f,y:m}=k;return{x:f,y:m}}},...l}=wn(e,t),h={x:n,y:r},u=await Va(t,l),d=Yt(xn(i)),p=qu(d);let y=h[p],x=h[d];if(a){const k=p==="y"?"top":"left",f=p==="y"?"bottom":"right",m=y+u[k],b=y-u[f];y=wh(m,y,b)}if(s){const k=d==="y"?"top":"left",f=d==="y"?"bottom":"right",m=x+u[k],b=x-u[f];x=wh(m,x,b)}const v=c.fn({...t,[p]:y,[d]:x});return{...v,data:{x:v.x-n,y:v.y-r,enabled:{[p]:a,[d]:s}}}}}},nC=function(e){return e===void 0&&(e={}),{options:e,fn(t){const{x:n,y:r,placement:i,rects:a,middlewareData:s}=t,{offset:c=0,mainAxis:l=!0,crossAxis:h=!0}=wn(e,t),u={x:n,y:r},d=Yt(i),p=qu(d);let y=u[p],x=u[d];const v=wn(c,t),k=typeof v=="number"?{mainAxis:v,crossAxis:0}:{mainAxis:0,crossAxis:0,...v};if(l){const b=p==="y"?"height":"width",w=a.reference[p]-a.floating[b]+k.mainAxis,T=a.reference[p]+a.reference[b]-k.mainAxis;y<w?y=w:y>T&&(y=T)}if(h){var f,m;const b=p==="y"?"width":"height",w=zv.has(xn(i)),T=a.reference[d]-a.floating[b]+(w&&((f=s.offset)==null?void 0:f[d])||0)+(w?0:k.crossAxis),C=a.reference[d]+a.reference[b]+(w?0:((m=s.offset)==null?void 0:m[d])||0)-(w?k.crossAxis:0);x<T?x=T:x>C&&(x=C)}return{[p]:y,[d]:x}}}},rC=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){var n,r;const{placement:i,rects:a,platform:s,elements:c}=t,{apply:l=()=>{},...h}=wn(e,t),u=await Va(t,h),d=xn(i),p=Fi(i),y=Yt(i)==="y",{width:x,height:v}=a.floating;let k,f;d==="top"||d==="bottom"?(k=d,f=p===(await(s.isRTL==null?void 0:s.isRTL(c.floating))?"start":"end")?"left":"right"):(f=d,k=p==="end"?"top":"bottom");const m=v-u.top-u.bottom,b=x-u.left-u.right,w=Zn(v-u[k],m),T=Zn(x-u[f],b),C=!t.middlewareData.shift;let P=w,S=T;if((n=t.middlewareData.shift)!=null&&n.enabled.x&&(S=b),(r=t.middlewareData.shift)!=null&&r.enabled.y&&(P=m),C&&!p){const I=dt(u.left,0),O=dt(u.right,0),R=dt(u.top,0),M=dt(u.bottom,0);y?S=x-2*(I!==0||O!==0?I+O:dt(u.left,u.right)):P=v-2*(R!==0||M!==0?R+M:dt(u.top,u.bottom))}await l({...t,availableWidth:S,availableHeight:P});const N=await s.getDimensions(c.floating);return x!==N.width||v!==N.height?{reset:{rects:!0}}:{}}}};function tc(){return typeof window<"u"}function Vi(e){return Hv(e)?(e.nodeName||"").toLowerCase():"#document"}function mt(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function rn(e){var t;return(t=(Hv(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Hv(e){return tc()?e instanceof Node||e instanceof mt(e).Node:!1}function _t(e){return tc()?e instanceof Element||e instanceof mt(e).Element:!1}function nn(e){return tc()?e instanceof HTMLElement||e instanceof mt(e).HTMLElement:!1}function Fp(e){return!tc()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof mt(e).ShadowRoot}const iC=new Set(["inline","contents"]);function no(e){const{overflow:t,overflowX:n,overflowY:r,display:i}=Ft(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!iC.has(i)}const aC=new Set(["table","td","th"]);function oC(e){return aC.has(Vi(e))}const sC=[":popover-open",":modal"];function nc(e){return sC.some(t=>{try{return e.matches(t)}catch{return!1}})}const cC=["transform","translate","scale","rotate","perspective"],lC=["transform","translate","scale","rotate","perspective","filter"],hC=["paint","layout","strict","content"];function _u(e){const t=Fu(),n=_t(e)?Ft(e):e;return cC.some(r=>n[r]?n[r]!=="none":!1)||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||lC.some(r=>(n.willChange||"").includes(r))||hC.some(r=>(n.contain||"").includes(r))}function uC(e){let t=er(e);for(;nn(t)&&!Ni(t);){if(_u(t))return t;if(nc(t))return null;t=er(t)}return null}function Fu(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const dC=new Set(["html","body","#document"]);function Ni(e){return dC.has(Vi(e))}function Ft(e){return mt(e).getComputedStyle(e)}function rc(e){return _t(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function er(e){if(Vi(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Fp(e)&&e.host||rn(e);return Fp(t)?t.host:t}function $v(e){const t=er(e);return Ni(t)?e.ownerDocument?e.ownerDocument.body:e.body:nn(t)&&no(t)?t:$v(t)}function Ba(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const i=$v(e),a=i===((r=e.ownerDocument)==null?void 0:r.body),s=mt(i);if(a){const c=kh(s);return t.concat(s,s.visualViewport||[],no(i)?i:[],c&&n?Ba(c):[])}return t.concat(i,Ba(i,[],n))}function kh(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Wv(e){const t=Ft(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const i=nn(e),a=i?e.offsetWidth:n,s=i?e.offsetHeight:r,c=Ps(n)!==a||Ps(r)!==s;return c&&(n=a,r=s),{width:n,height:r,$:c}}function Vu(e){return _t(e)?e:e.contextElement}function hi(e){const t=Vu(e);if(!nn(t))return en(1);const n=t.getBoundingClientRect(),{width:r,height:i,$:a}=Wv(t);let s=(a?Ps(n.width):n.width)/r,c=(a?Ps(n.height):n.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!c||!Number.isFinite(c))&&(c=1),{x:s,y:c}}const pC=en(0);function Gv(e){const t=mt(e);return!Fu()||!t.visualViewport?pC:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function gC(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==mt(e)?!1:t}function Er(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const i=e.getBoundingClientRect(),a=Vu(e);let s=en(1);t&&(r?_t(r)&&(s=hi(r)):s=hi(e));const c=gC(a,n,r)?Gv(a):en(0);let l=(i.left+c.x)/s.x,h=(i.top+c.y)/s.y,u=i.width/s.x,d=i.height/s.y;if(a){const p=mt(a),y=r&&_t(r)?mt(r):r;let x=p,v=kh(x);for(;v&&r&&y!==x;){const k=hi(v),f=v.getBoundingClientRect(),m=Ft(v),b=f.left+(v.clientLeft+parseFloat(m.paddingLeft))*k.x,w=f.top+(v.clientTop+parseFloat(m.paddingTop))*k.y;l*=k.x,h*=k.y,u*=k.x,d*=k.y,l+=b,h+=w,x=mt(v),v=kh(x)}}return Ns({width:u,height:d,x:l,y:h})}function Bu(e,t){const n=rc(e).scrollLeft;return t?t.left+n:Er(rn(e)).left+n}function Kv(e,t,n){n===void 0&&(n=!1);const r=e.getBoundingClientRect(),i=r.left+t.scrollLeft-(n?0:Bu(e,r)),a=r.top+t.scrollTop;return{x:i,y:a}}function mC(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e;const a=i==="fixed",s=rn(r),c=t?nc(t.floating):!1;if(r===s||c&&a)return n;let l={scrollLeft:0,scrollTop:0},h=en(1);const u=en(0),d=nn(r);if((d||!d&&!a)&&((Vi(r)!=="body"||no(s))&&(l=rc(r)),nn(r))){const y=Er(r);h=hi(r),u.x=y.x+r.clientLeft,u.y=y.y+r.clientTop}const p=s&&!d&&!a?Kv(s,l,!0):en(0);return{width:n.width*h.x,height:n.height*h.y,x:n.x*h.x-l.scrollLeft*h.x+u.x+p.x,y:n.y*h.y-l.scrollTop*h.y+u.y+p.y}}function fC(e){return Array.from(e.getClientRects())}function vC(e){const t=rn(e),n=rc(e),r=e.ownerDocument.body,i=dt(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),a=dt(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let s=-n.scrollLeft+Bu(e);const c=-n.scrollTop;return Ft(r).direction==="rtl"&&(s+=dt(t.clientWidth,r.clientWidth)-i),{width:i,height:a,x:s,y:c}}function yC(e,t){const n=mt(e),r=rn(e),i=n.visualViewport;let a=r.clientWidth,s=r.clientHeight,c=0,l=0;if(i){a=i.width,s=i.height;const h=Fu();(!h||h&&t==="fixed")&&(c=i.offsetLeft,l=i.offsetTop)}return{width:a,height:s,x:c,y:l}}const bC=new Set(["absolute","fixed"]);function wC(e,t){const n=Er(e,!0,t==="fixed"),r=n.top+e.clientTop,i=n.left+e.clientLeft,a=nn(e)?hi(e):en(1),s=e.clientWidth*a.x,c=e.clientHeight*a.y,l=i*a.x,h=r*a.y;return{width:s,height:c,x:l,y:h}}function Vp(e,t,n){let r;if(t==="viewport")r=yC(e,n);else if(t==="document")r=vC(rn(e));else if(_t(t))r=wC(t,n);else{const i=Gv(e);r={x:t.x-i.x,y:t.y-i.y,width:t.width,height:t.height}}return Ns(r)}function Qv(e,t){const n=er(e);return n===t||!_t(n)||Ni(n)?!1:Ft(n).position==="fixed"||Qv(n,t)}function xC(e,t){const n=t.get(e);if(n)return n;let r=Ba(e,[],!1).filter(c=>_t(c)&&Vi(c)!=="body"),i=null;const a=Ft(e).position==="fixed";let s=a?er(e):e;for(;_t(s)&&!Ni(s);){const c=Ft(s),l=_u(s);!l&&c.position==="fixed"&&(i=null),(a?!l&&!i:!l&&c.position==="static"&&!!i&&bC.has(i.position)||no(s)&&!l&&Qv(e,s))?r=r.filter(u=>u!==s):i=c,s=er(s)}return t.set(e,r),r}function kC(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e;const s=[...n==="clippingAncestors"?nc(t)?[]:xC(t,this._c):[].concat(n),r],c=s[0],l=s.reduce((h,u)=>{const d=Vp(t,u,i);return h.top=dt(d.top,h.top),h.right=Zn(d.right,h.right),h.bottom=Zn(d.bottom,h.bottom),h.left=dt(d.left,h.left),h},Vp(t,c,i));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function TC(e){const{width:t,height:n}=Wv(e);return{width:t,height:n}}function CC(e,t,n){const r=nn(t),i=rn(t),a=n==="fixed",s=Er(e,!0,a,t);let c={scrollLeft:0,scrollTop:0};const l=en(0);function h(){l.x=Bu(i)}if(r||!r&&!a)if((Vi(t)!=="body"||no(i))&&(c=rc(t)),r){const y=Er(t,!0,a,t);l.x=y.x+t.clientLeft,l.y=y.y+t.clientTop}else i&&h();a&&!r&&i&&h();const u=i&&!r&&!a?Kv(i,c):en(0),d=s.left+c.scrollLeft-l.x-u.x,p=s.top+c.scrollTop-l.y-u.y;return{x:d,y:p,width:s.width,height:s.height}}function Xc(e){return Ft(e).position==="static"}function Bp(e,t){if(!nn(e)||Ft(e).position==="fixed")return null;if(t)return t(e);let n=e.offsetParent;return rn(e)===n&&(n=n.ownerDocument.body),n}function Yv(e,t){const n=mt(e);if(nc(e))return n;if(!nn(e)){let i=er(e);for(;i&&!Ni(i);){if(_t(i)&&!Xc(i))return i;i=er(i)}return n}let r=Bp(e,t);for(;r&&oC(r)&&Xc(r);)r=Bp(r,t);return r&&Ni(r)&&Xc(r)&&!_u(r)?n:r||uC(e)||n}const SC=async function(e){const t=this.getOffsetParent||Yv,n=this.getDimensions,r=await n(e.floating);return{reference:CC(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function PC(e){return Ft(e).direction==="rtl"}const AC={convertOffsetParentRelativeRectToViewportRelativeRect:mC,getDocumentElement:rn,getClippingRect:kC,getOffsetParent:Yv,getElementRects:SC,getClientRects:fC,getDimensions:TC,getScale:hi,isElement:_t,isRTL:PC};function Xv(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function NC(e,t){let n=null,r;const i=rn(e);function a(){var c;clearTimeout(r),(c=n)==null||c.disconnect(),n=null}function s(c,l){c===void 0&&(c=!1),l===void 0&&(l=1),a();const h=e.getBoundingClientRect(),{left:u,top:d,width:p,height:y}=h;if(c||t(),!p||!y)return;const x=Co(d),v=Co(i.clientWidth-(u+p)),k=Co(i.clientHeight-(d+y)),f=Co(u),b={rootMargin:-x+"px "+-v+"px "+-k+"px "+-f+"px",threshold:dt(0,Zn(1,l))||1};let w=!0;function T(C){const P=C[0].intersectionRatio;if(P!==l){if(!w)return s();P?s(!1,P):r=setTimeout(()=>{s(!1,1e-7)},1e3)}P===1&&!Xv(h,e.getBoundingClientRect())&&s(),w=!1}try{n=new IntersectionObserver(T,{...b,root:i.ownerDocument})}catch{n=new IntersectionObserver(T,b)}n.observe(e)}return s(!0),a}function IC(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:l=!1}=r,h=Vu(e),u=i||a?[...h?Ba(h):[],...Ba(t)]:[];u.forEach(f=>{i&&f.addEventListener("scroll",n,{passive:!0}),a&&f.addEventListener("resize",n)});const d=h&&c?NC(h,n):null;let p=-1,y=null;s&&(y=new ResizeObserver(f=>{let[m]=f;m&&m.target===h&&y&&(y.unobserve(t),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{var b;(b=y)==null||b.observe(t)})),n()}),h&&!l&&y.observe(h),y.observe(t));let x,v=l?Er(e):null;l&&k();function k(){const f=Er(e);v&&!Xv(v,f)&&n(),v=f,x=requestAnimationFrame(k)}return n(),()=>{var f;u.forEach(m=>{i&&m.removeEventListener("scroll",n),a&&m.removeEventListener("resize",n)}),d==null||d(),(f=y)==null||f.disconnect(),y=null,l&&cancelAnimationFrame(x)}}const jC=eC,EC=tC,RC=XT,LC=rC,DC=JT,zp=YT,MC=nC,qC=(e,t,n)=>{const r=new Map,i={platform:AC,...n},a={...i.platform,_c:r};return QT(e,t,{...i,platform:a})};var OC=typeof document<"u",UC=function(){},Wo=OC?g.useLayoutEffect:UC;function Is(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let n,r,i;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(n=e.length,n!==t.length)return!1;for(r=n;r--!==0;)if(!Is(e[r],t[r]))return!1;return!0}if(i=Object.keys(e),n=i.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!{}.hasOwnProperty.call(t,i[r]))return!1;for(r=n;r--!==0;){const a=i[r];if(!(a==="_owner"&&e.$$typeof)&&!Is(e[a],t[a]))return!1}return!0}return e!==e&&t!==t}function Jv(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Hp(e,t){const n=Jv(e);return Math.round(t*n)/n}function Jc(e){const t=g.useRef(e);return Wo(()=>{t.current=e}),t}function _C(e){e===void 0&&(e={});const{placement:t="bottom",strategy:n="absolute",middleware:r=[],platform:i,elements:{reference:a,floating:s}={},transform:c=!0,whileElementsMounted:l,open:h}=e,[u,d]=g.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[p,y]=g.useState(r);Is(p,r)||y(r);const[x,v]=g.useState(null),[k,f]=g.useState(null),m=g.useCallback(A=>{A!==C.current&&(C.current=A,v(A))},[]),b=g.useCallback(A=>{A!==P.current&&(P.current=A,f(A))},[]),w=a||x,T=s||k,C=g.useRef(null),P=g.useRef(null),S=g.useRef(u),N=l!=null,I=Jc(l),O=Jc(i),R=Jc(h),M=g.useCallback(()=>{if(!C.current||!P.current)return;const A={placement:t,strategy:n,middleware:p};O.current&&(A.platform=O.current),qC(C.current,P.current,A).then(D=>{const F={...D,isPositioned:R.current!==!1};U.current&&!Is(S.current,F)&&(S.current=F,Ja.flushSync(()=>{d(F)}))})},[p,t,n,O,R]);Wo(()=>{h===!1&&S.current.isPositioned&&(S.current.isPositioned=!1,d(A=>({...A,isPositioned:!1})))},[h]);const U=g.useRef(!1);Wo(()=>(U.current=!0,()=>{U.current=!1}),[]),Wo(()=>{if(w&&(C.current=w),T&&(P.current=T),w&&T){if(I.current)return I.current(w,T,M);M()}},[w,T,M,I,N]);const G=g.useMemo(()=>({reference:C,floating:P,setReference:m,setFloating:b}),[m,b]),H=g.useMemo(()=>({reference:w,floating:T}),[w,T]),z=g.useMemo(()=>{const A={position:n,left:0,top:0};if(!H.floating)return A;const D=Hp(H.floating,u.x),F=Hp(H.floating,u.y);return c?{...A,transform:"translate("+D+"px, "+F+"px)",...Jv(H.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:D,top:F}},[n,c,H.floating,u.x,u.y]);return g.useMemo(()=>({...u,update:M,refs:G,elements:H,floatingStyles:z}),[u,M,G,H,z])}const FC=e=>{function t(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:e,fn(n){const{element:r,padding:i}=typeof e=="function"?e(n):e;return r&&t(r)?r.current!=null?zp({element:r.current,padding:i}).fn(n):{}:r?zp({element:r,padding:i}).fn(n):{}}}},VC=(e,t)=>({...jC(e),options:[e,t]}),BC=(e,t)=>({...EC(e),options:[e,t]}),zC=(e,t)=>({...MC(e),options:[e,t]}),HC=(e,t)=>({...RC(e),options:[e,t]}),$C=(e,t)=>({...LC(e),options:[e,t]}),WC=(e,t)=>({...DC(e),options:[e,t]}),GC=(e,t)=>({...FC(e),options:[e,t]});var KC="Arrow",Zv=g.forwardRef((e,t)=>{const{children:n,width:r=10,height:i=5,...a}=e;return o.jsx(Ae.svg,{...a,ref:t,width:r,height:i,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:e.asChild?n:o.jsx("polygon",{points:"0,0 30,0 15,10"})})});Zv.displayName=KC;var QC=Zv;function ey(e){const[t,n]=g.useState(void 0);return bn(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const r=new ResizeObserver(i=>{if(!Array.isArray(i)||!i.length)return;const a=i[0];let s,c;if("borderBoxSize"in a){const l=a.borderBoxSize,h=Array.isArray(l)?l[0]:l;s=h.inlineSize,c=h.blockSize}else s=e.offsetWidth,c=e.offsetHeight;n({width:s,height:c})});return r.observe(e,{box:"border-box"}),()=>r.unobserve(e)}else n(void 0)},[e]),t}var zu="Popper",[ty,ic]=Ui(zu),[YC,ny]=ty(zu),ry=e=>{const{__scopePopper:t,children:n}=e,[r,i]=g.useState(null);return o.jsx(YC,{scope:t,anchor:r,onAnchorChange:i,children:n})};ry.displayName=zu;var iy="PopperAnchor",ay=g.forwardRef((e,t)=>{const{__scopePopper:n,virtualRef:r,...i}=e,a=ny(iy,n),s=g.useRef(null),c=Ee(t,s);return g.useEffect(()=>{a.onAnchorChange((r==null?void 0:r.current)||s.current)}),r?null:o.jsx(Ae.div,{...i,ref:c})});ay.displayName=iy;var Hu="PopperContent",[XC,JC]=ty(Hu),oy=g.forwardRef((e,t)=>{var re,me,ee,se,E,B;const{__scopePopper:n,side:r="bottom",sideOffset:i=0,align:a="center",alignOffset:s=0,arrowPadding:c=0,avoidCollisions:l=!0,collisionBoundary:h=[],collisionPadding:u=0,sticky:d="partial",hideWhenDetached:p=!1,updatePositionStrategy:y="optimized",onPlaced:x,...v}=e,k=ny(Hu,n),[f,m]=g.useState(null),b=Ee(t,ie=>m(ie)),[w,T]=g.useState(null),C=ey(w),P=(C==null?void 0:C.width)??0,S=(C==null?void 0:C.height)??0,N=r+(a!=="center"?"-"+a:""),I=typeof u=="number"?u:{top:0,right:0,bottom:0,left:0,...u},O=Array.isArray(h)?h:[h],R=O.length>0,M={padding:I,boundary:O.filter(eS),altBoundary:R},{refs:U,floatingStyles:G,placement:H,isPositioned:z,middlewareData:A}=_C({strategy:"fixed",placement:N,whileElementsMounted:(...ie)=>IC(...ie,{animationFrame:y==="always"}),elements:{reference:k.anchor},middleware:[VC({mainAxis:i+S,alignmentAxis:s}),l&&BC({mainAxis:!0,crossAxis:!1,limiter:d==="partial"?zC():void 0,...M}),l&&HC({...M}),$C({...M,apply:({elements:ie,rects:L,availableWidth:K,availableHeight:J})=>{const{width:ae,height:te}=L.reference,Y=ie.floating.style;Y.setProperty("--radix-popper-available-width",`${K}px`),Y.setProperty("--radix-popper-available-height",`${J}px`),Y.setProperty("--radix-popper-anchor-width",`${ae}px`),Y.setProperty("--radix-popper-anchor-height",`${te}px`)}}),w&&GC({element:w,padding:c}),tS({arrowWidth:P,arrowHeight:S}),p&&WC({strategy:"referenceHidden",...M})]}),[D,F]=ly(H),$=tn(x);bn(()=>{z&&($==null||$())},[z,$]);const W=(re=A.arrow)==null?void 0:re.x,ze=(me=A.arrow)==null?void 0:me.y,de=((ee=A.arrow)==null?void 0:ee.centerOffset)!==0,[Oe,Q]=g.useState();return bn(()=>{f&&Q(window.getComputedStyle(f).zIndex)},[f]),o.jsx("div",{ref:U.setFloating,"data-radix-popper-content-wrapper":"",style:{...G,transform:z?G.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:Oe,"--radix-popper-transform-origin":[(se=A.transformOrigin)==null?void 0:se.x,(E=A.transformOrigin)==null?void 0:E.y].join(" "),...((B=A.hide)==null?void 0:B.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:e.dir,children:o.jsx(XC,{scope:n,placedSide:D,onArrowChange:T,arrowX:W,arrowY:ze,shouldHideArrow:de,children:o.jsx(Ae.div,{"data-side":D,"data-align":F,...v,ref:b,style:{...v.style,animation:z?void 0:"none"}})})})});oy.displayName=Hu;var sy="PopperArrow",ZC={top:"bottom",right:"left",bottom:"top",left:"right"},cy=g.forwardRef(function(t,n){const{__scopePopper:r,...i}=t,a=JC(sy,r),s=ZC[a.placedSide];return o.jsx("span",{ref:a.onArrowChange,style:{position:"absolute",left:a.arrowX,top:a.arrowY,[s]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[a.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[a.placedSide],visibility:a.shouldHideArrow?"hidden":void 0},children:o.jsx(QC,{...i,ref:n,style:{...i.style,display:"block"}})})});cy.displayName=sy;function eS(e){return e!==null}var tS=e=>({name:"transformOrigin",options:e,fn(t){var k,f,m;const{placement:n,rects:r,middlewareData:i}=t,s=((k=i.arrow)==null?void 0:k.centerOffset)!==0,c=s?0:e.arrowWidth,l=s?0:e.arrowHeight,[h,u]=ly(n),d={start:"0%",center:"50%",end:"100%"}[u],p=(((f=i.arrow)==null?void 0:f.x)??0)+c/2,y=(((m=i.arrow)==null?void 0:m.y)??0)+l/2;let x="",v="";return h==="bottom"?(x=s?d:`${p}px`,v=`${-l}px`):h==="top"?(x=s?d:`${p}px`,v=`${r.floating.height+l}px`):h==="right"?(x=`${-l}px`,v=s?d:`${y}px`):h==="left"&&(x=`${r.floating.width+l}px`,v=s?d:`${y}px`),{data:{x,y:v}}}});function ly(e){const[t,n="center"]=e.split("-");return[t,n]}var hy=ry,$u=ay,uy=oy,dy=cy,[ac,u2]=Ui("Tooltip",[ic]),oc=ic(),py="TooltipProvider",nS=700,Th="tooltip.open",[rS,Wu]=ac(py),gy=e=>{const{__scopeTooltip:t,delayDuration:n=nS,skipDelayDuration:r=300,disableHoverableContent:i=!1,children:a}=e,s=g.useRef(!0),c=g.useRef(!1),l=g.useRef(0);return g.useEffect(()=>{const h=l.current;return()=>window.clearTimeout(h)},[]),o.jsx(rS,{scope:t,isOpenDelayedRef:s,delayDuration:n,onOpen:g.useCallback(()=>{window.clearTimeout(l.current),s.current=!1},[]),onClose:g.useCallback(()=>{window.clearTimeout(l.current),l.current=window.setTimeout(()=>s.current=!0,r)},[r]),isPointerInTransitRef:c,onPointerInTransitChange:g.useCallback(h=>{c.current=h},[]),disableHoverableContent:i,children:a})};gy.displayName=py;var za="Tooltip",[iS,sc]=ac(za),my=e=>{const{__scopeTooltip:t,children:n,open:r,defaultOpen:i,onOpenChange:a,disableHoverableContent:s,delayDuration:c}=e,l=Wu(za,e.__scopeTooltip),h=oc(t),[u,d]=g.useState(null),p=Vv(),y=g.useRef(0),x=s??l.disableHoverableContent,v=c??l.delayDuration,k=g.useRef(!1),[f,m]=Xs({prop:r,defaultProp:i??!1,onChange:P=>{P?(l.onOpen(),document.dispatchEvent(new CustomEvent(Th))):l.onClose(),a==null||a(P)},caller:za}),b=g.useMemo(()=>f?k.current?"delayed-open":"instant-open":"closed",[f]),w=g.useCallback(()=>{window.clearTimeout(y.current),y.current=0,k.current=!1,m(!0)},[m]),T=g.useCallback(()=>{window.clearTimeout(y.current),y.current=0,m(!1)},[m]),C=g.useCallback(()=>{window.clearTimeout(y.current),y.current=window.setTimeout(()=>{k.current=!0,m(!0),y.current=0},v)},[v,m]);return g.useEffect(()=>()=>{y.current&&(window.clearTimeout(y.current),y.current=0)},[]),o.jsx(hy,{...h,children:o.jsx(iS,{scope:t,contentId:p,open:f,stateAttribute:b,trigger:u,onTriggerChange:d,onTriggerEnter:g.useCallback(()=>{l.isOpenDelayedRef.current?C():w()},[l.isOpenDelayedRef,C,w]),onTriggerLeave:g.useCallback(()=>{x?T():(window.clearTimeout(y.current),y.current=0)},[T,x]),onOpen:w,onClose:T,disableHoverableContent:x,children:n})})};my.displayName=za;var Ch="TooltipTrigger",fy=g.forwardRef((e,t)=>{const{__scopeTooltip:n,...r}=e,i=sc(Ch,n),a=Wu(Ch,n),s=oc(n),c=g.useRef(null),l=Ee(t,c,i.onTriggerChange),h=g.useRef(!1),u=g.useRef(!1),d=g.useCallback(()=>h.current=!1,[]);return g.useEffect(()=>()=>document.removeEventListener("pointerup",d),[d]),o.jsx($u,{asChild:!0,...s,children:o.jsx(Ae.button,{"aria-describedby":i.open?i.contentId:void 0,"data-state":i.stateAttribute,...r,ref:l,onPointerMove:he(e.onPointerMove,p=>{p.pointerType!=="touch"&&!u.current&&!a.isPointerInTransitRef.current&&(i.onTriggerEnter(),u.current=!0)}),onPointerLeave:he(e.onPointerLeave,()=>{i.onTriggerLeave(),u.current=!1}),onPointerDown:he(e.onPointerDown,()=>{i.open&&i.onClose(),h.current=!0,document.addEventListener("pointerup",d,{once:!0})}),onFocus:he(e.onFocus,()=>{h.current||i.onOpen()}),onBlur:he(e.onBlur,i.onClose),onClick:he(e.onClick,i.onClose)})})});fy.displayName=Ch;var aS="TooltipPortal",[d2,oS]=ac(aS,{forceMount:void 0}),Ii="TooltipContent",vy=g.forwardRef((e,t)=>{const n=oS(Ii,e.__scopeTooltip),{forceMount:r=n.forceMount,side:i="top",...a}=e,s=sc(Ii,e.__scopeTooltip);return o.jsx(eo,{present:r||s.open,children:s.disableHoverableContent?o.jsx(yy,{side:i,...a,ref:t}):o.jsx(sS,{side:i,...a,ref:t})})}),sS=g.forwardRef((e,t)=>{const n=sc(Ii,e.__scopeTooltip),r=Wu(Ii,e.__scopeTooltip),i=g.useRef(null),a=Ee(t,i),[s,c]=g.useState(null),{trigger:l,onClose:h}=n,u=i.current,{onPointerInTransitChange:d}=r,p=g.useCallback(()=>{c(null),d(!1)},[d]),y=g.useCallback((x,v)=>{const k=x.currentTarget,f={x:x.clientX,y:x.clientY},m=dS(f,k.getBoundingClientRect()),b=pS(f,m),w=gS(v.getBoundingClientRect()),T=fS([...b,...w]);c(T),d(!0)},[d]);return g.useEffect(()=>()=>p(),[p]),g.useEffect(()=>{if(l&&u){const x=k=>y(k,u),v=k=>y(k,l);return l.addEventListener("pointerleave",x),u.addEventListener("pointerleave",v),()=>{l.removeEventListener("pointerleave",x),u.removeEventListener("pointerleave",v)}}},[l,u,y,p]),g.useEffect(()=>{if(s){const x=v=>{const k=v.target,f={x:v.clientX,y:v.clientY},m=(l==null?void 0:l.contains(k))||(u==null?void 0:u.contains(k)),b=!mS(f,s);m?p():b&&(p(),h())};return document.addEventListener("pointermove",x),()=>document.removeEventListener("pointermove",x)}},[l,u,s,h,p]),o.jsx(yy,{...e,ref:a})}),[cS,lS]=ac(za,{isInside:!1}),hS=v0("TooltipContent"),yy=g.forwardRef((e,t)=>{const{__scopeTooltip:n,children:r,"aria-label":i,onEscapeKeyDown:a,onPointerDownOutside:s,...c}=e,l=sc(Ii,n),h=oc(n),{onClose:u}=l;return g.useEffect(()=>(document.addEventListener(Th,u),()=>document.removeEventListener(Th,u)),[u]),g.useEffect(()=>{if(l.trigger){const d=p=>{const y=p.target;y!=null&&y.contains(l.trigger)&&u()};return window.addEventListener("scroll",d,{capture:!0}),()=>window.removeEventListener("scroll",d,{capture:!0})}},[l.trigger,u]),o.jsx(Ys,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:a,onPointerDownOutside:s,onFocusOutside:d=>d.preventDefault(),onDismiss:u,children:o.jsxs(uy,{"data-state":l.stateAttribute,...h,...c,ref:t,style:{...c.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[o.jsx(hS,{children:r}),o.jsx(cS,{scope:n,isInside:!0,children:o.jsx(F0,{id:l.contentId,role:"tooltip",children:i||r})})]})})});vy.displayName=Ii;var by="TooltipArrow",uS=g.forwardRef((e,t)=>{const{__scopeTooltip:n,...r}=e,i=oc(n);return lS(by,n).isInside?null:o.jsx(dy,{...i,...r,ref:t})});uS.displayName=by;function dS(e,t){const n=Math.abs(t.top-e.y),r=Math.abs(t.bottom-e.y),i=Math.abs(t.right-e.x),a=Math.abs(t.left-e.x);switch(Math.min(n,r,i,a)){case a:return"left";case i:return"right";case n:return"top";case r:return"bottom";default:throw new Error("unreachable")}}function pS(e,t,n=5){const r=[];switch(t){case"top":r.push({x:e.x-n,y:e.y+n},{x:e.x+n,y:e.y+n});break;case"bottom":r.push({x:e.x-n,y:e.y-n},{x:e.x+n,y:e.y-n});break;case"left":r.push({x:e.x+n,y:e.y-n},{x:e.x+n,y:e.y+n});break;case"right":r.push({x:e.x-n,y:e.y-n},{x:e.x-n,y:e.y+n});break}return r}function gS(e){const{top:t,right:n,bottom:r,left:i}=e;return[{x:i,y:t},{x:n,y:t},{x:n,y:r},{x:i,y:r}]}function mS(e,t){const{x:n,y:r}=e;let i=!1;for(let a=0,s=t.length-1;a<t.length;s=a++){const c=t[a],l=t[s],h=c.x,u=c.y,d=l.x,p=l.y;u>r!=p>r&&n<(d-h)*(r-u)/(p-u)+h&&(i=!i)}return i}function fS(e){const t=e.slice();return t.sort((n,r)=>n.x<r.x?-1:n.x>r.x?1:n.y<r.y?-1:n.y>r.y?1:0),vS(t)}function vS(e){if(e.length<=1)return e.slice();const t=[];for(let r=0;r<e.length;r++){const i=e[r];for(;t.length>=2;){const a=t[t.length-1],s=t[t.length-2];if((a.x-s.x)*(i.y-s.y)>=(a.y-s.y)*(i.x-s.x))t.pop();else break}t.push(i)}t.pop();const n=[];for(let r=e.length-1;r>=0;r--){const i=e[r];for(;n.length>=2;){const a=n[n.length-1],s=n[n.length-2];if((a.x-s.x)*(i.y-s.y)>=(a.y-s.y)*(i.x-s.x))n.pop();else break}n.push(i)}return n.pop(),t.length===1&&n.length===1&&t[0].x===n[0].x&&t[0].y===n[0].y?t:t.concat(n)}var yS=gy,bS=my,wS=fy,wy=vy;const xS=yS,xy=bS,ky=wS,Gu=g.forwardRef(({className:e,sideOffset:t=4,...n},r)=>o.jsx(wy,{ref:r,sideOffset:t,className:pe("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...n}));Gu.displayName=wy.displayName;var cc=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){return this.listeners.add(e),this.onSubscribe(),()=>{this.listeners.delete(e),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},lc=typeof window>"u"||"Deno"in globalThis;function jt(){}function kS(e,t){return typeof e=="function"?e(t):e}function TS(e){return typeof e=="number"&&e>=0&&e!==1/0}function CS(e,t){return Math.max(e+(t||0)-Date.now(),0)}function Sh(e,t){return typeof e=="function"?e(t):e}function SS(e,t){return typeof e=="function"?e(t):e}function $p(e,t){const{type:n="all",exact:r,fetchStatus:i,predicate:a,queryKey:s,stale:c}=e;if(s){if(r){if(t.queryHash!==Ku(s,t.options))return!1}else if(!$a(t.queryKey,s))return!1}if(n!=="all"){const l=t.isActive();if(n==="active"&&!l||n==="inactive"&&l)return!1}return!(typeof c=="boolean"&&t.isStale()!==c||i&&i!==t.state.fetchStatus||a&&!a(t))}function Wp(e,t){const{exact:n,status:r,predicate:i,mutationKey:a}=e;if(a){if(!t.options.mutationKey)return!1;if(n){if(Ha(t.options.mutationKey)!==Ha(a))return!1}else if(!$a(t.options.mutationKey,a))return!1}return!(r&&t.state.status!==r||i&&!i(t))}function Ku(e,t){return((t==null?void 0:t.queryKeyHashFn)||Ha)(e)}function Ha(e){return JSON.stringify(e,(t,n)=>Ph(n)?Object.keys(n).sort().reduce((r,i)=>(r[i]=n[i],r),{}):n)}function $a(e,t){return e===t?!0:typeof e!=typeof t?!1:e&&t&&typeof e=="object"&&typeof t=="object"?Object.keys(t).every(n=>$a(e[n],t[n])):!1}function Ty(e,t){if(e===t)return e;const n=Gp(e)&&Gp(t);if(n||Ph(e)&&Ph(t)){const r=n?e:Object.keys(e),i=r.length,a=n?t:Object.keys(t),s=a.length,c=n?[]:{},l=new Set(r);let h=0;for(let u=0;u<s;u++){const d=n?u:a[u];(!n&&l.has(d)||n)&&e[d]===void 0&&t[d]===void 0?(c[d]=void 0,h++):(c[d]=Ty(e[d],t[d]),c[d]===e[d]&&e[d]!==void 0&&h++)}return i===s&&h===i?e:c}return t}function Gp(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function Ph(e){if(!Kp(e))return!1;const t=e.constructor;if(t===void 0)return!0;const n=t.prototype;return!(!Kp(n)||!n.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(e)!==Object.prototype)}function Kp(e){return Object.prototype.toString.call(e)==="[object Object]"}function PS(e){return new Promise(t=>{setTimeout(t,e)})}function AS(e,t,n){return typeof n.structuralSharing=="function"?n.structuralSharing(e,t):n.structuralSharing!==!1?Ty(e,t):t}function NS(e,t,n=0){const r=[...e,t];return n&&r.length>n?r.slice(1):r}function IS(e,t,n=0){const r=[t,...e];return n&&r.length>n?r.slice(0,-1):r}var Qu=Symbol();function Cy(e,t){return!e.queryFn&&(t!=null&&t.initialPromise)?()=>t.initialPromise:!e.queryFn||e.queryFn===Qu?()=>Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)):e.queryFn}var fr,Ln,di,Ag,jS=(Ag=class extends cc{constructor(){super();ce(this,fr);ce(this,Ln);ce(this,di);X(this,di,t=>{if(!lc&&window.addEventListener){const n=()=>t();return window.addEventListener("visibilitychange",n,!1),()=>{window.removeEventListener("visibilitychange",n)}}})}onSubscribe(){j(this,Ln)||this.setEventListener(j(this,di))}onUnsubscribe(){var t;this.hasListeners()||((t=j(this,Ln))==null||t.call(this),X(this,Ln,void 0))}setEventListener(t){var n;X(this,di,t),(n=j(this,Ln))==null||n.call(this),X(this,Ln,t(r=>{typeof r=="boolean"?this.setFocused(r):this.onFocus()}))}setFocused(t){j(this,fr)!==t&&(X(this,fr,t),this.onFocus())}onFocus(){const t=this.isFocused();this.listeners.forEach(n=>{n(t)})}isFocused(){var t;return typeof j(this,fr)=="boolean"?j(this,fr):((t=globalThis.document)==null?void 0:t.visibilityState)!=="hidden"}},fr=new WeakMap,Ln=new WeakMap,di=new WeakMap,Ag),Sy=new jS,pi,Dn,gi,Ng,ES=(Ng=class extends cc{constructor(){super();ce(this,pi,!0);ce(this,Dn);ce(this,gi);X(this,gi,t=>{if(!lc&&window.addEventListener){const n=()=>t(!0),r=()=>t(!1);return window.addEventListener("online",n,!1),window.addEventListener("offline",r,!1),()=>{window.removeEventListener("online",n),window.removeEventListener("offline",r)}}})}onSubscribe(){j(this,Dn)||this.setEventListener(j(this,gi))}onUnsubscribe(){var t;this.hasListeners()||((t=j(this,Dn))==null||t.call(this),X(this,Dn,void 0))}setEventListener(t){var n;X(this,gi,t),(n=j(this,Dn))==null||n.call(this),X(this,Dn,t(this.setOnline.bind(this)))}setOnline(t){j(this,pi)!==t&&(X(this,pi,t),this.listeners.forEach(r=>{r(t)}))}isOnline(){return j(this,pi)}},pi=new WeakMap,Dn=new WeakMap,gi=new WeakMap,Ng),js=new ES;function RS(){let e,t;const n=new Promise((i,a)=>{e=i,t=a});n.status="pending",n.catch(()=>{});function r(i){Object.assign(n,i),delete n.resolve,delete n.reject}return n.resolve=i=>{r({status:"fulfilled",value:i}),e(i)},n.reject=i=>{r({status:"rejected",reason:i}),t(i)},n}function LS(e){return Math.min(1e3*2**e,3e4)}function Py(e){return(e??"online")==="online"?js.isOnline():!0}var Ay=class extends Error{constructor(e){super("CancelledError"),this.revert=e==null?void 0:e.revert,this.silent=e==null?void 0:e.silent}};function Zc(e){return e instanceof Ay}function Ny(e){let t=!1,n=0,r=!1,i;const a=RS(),s=v=>{var k;r||(p(new Ay(v)),(k=e.abort)==null||k.call(e))},c=()=>{t=!0},l=()=>{t=!1},h=()=>Sy.isFocused()&&(e.networkMode==="always"||js.isOnline())&&e.canRun(),u=()=>Py(e.networkMode)&&e.canRun(),d=v=>{var k;r||(r=!0,(k=e.onSuccess)==null||k.call(e,v),i==null||i(),a.resolve(v))},p=v=>{var k;r||(r=!0,(k=e.onError)==null||k.call(e,v),i==null||i(),a.reject(v))},y=()=>new Promise(v=>{var k;i=f=>{(r||h())&&v(f)},(k=e.onPause)==null||k.call(e)}).then(()=>{var v;i=void 0,r||(v=e.onContinue)==null||v.call(e)}),x=()=>{if(r)return;let v;const k=n===0?e.initialPromise:void 0;try{v=k??e.fn()}catch(f){v=Promise.reject(f)}Promise.resolve(v).then(d).catch(f=>{var C;if(r)return;const m=e.retry??(lc?0:3),b=e.retryDelay??LS,w=typeof b=="function"?b(n,f):b,T=m===!0||typeof m=="number"&&n<m||typeof m=="function"&&m(n,f);if(t||!T){p(f);return}n++,(C=e.onFail)==null||C.call(e,n,f),PS(w).then(()=>h()?void 0:y()).then(()=>{t?p(f):x()})})};return{promise:a,cancel:s,continue:()=>(i==null||i(),a),cancelRetry:c,continueRetry:l,canStart:u,start:()=>(u()?x():y().then(x),a)}}var DS=e=>setTimeout(e,0);function MS(){let e=[],t=0,n=c=>{c()},r=c=>{c()},i=DS;const a=c=>{t?e.push(c):i(()=>{n(c)})},s=()=>{const c=e;e=[],c.length&&i(()=>{r(()=>{c.forEach(l=>{n(l)})})})};return{batch:c=>{let l;t++;try{l=c()}finally{t--,t||s()}return l},batchCalls:c=>(...l)=>{a(()=>{c(...l)})},schedule:a,setNotifyFunction:c=>{n=c},setBatchNotifyFunction:c=>{r=c},setScheduler:c=>{i=c}}}var tt=MS(),vr,Ig,Iy=(Ig=class{constructor(){ce(this,vr)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),TS(this.gcTime)&&X(this,vr,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(e){this.gcTime=Math.max(this.gcTime||0,e??(lc?1/0:5*60*1e3))}clearGcTimeout(){j(this,vr)&&(clearTimeout(j(this,vr)),X(this,vr,void 0))}},vr=new WeakMap,Ig),mi,yr,bt,br,Ye,Wa,wr,Et,sn,jg,qS=(jg=class extends Iy{constructor(t){super();ce(this,Et);ce(this,mi);ce(this,yr);ce(this,bt);ce(this,br);ce(this,Ye);ce(this,Wa);ce(this,wr);X(this,wr,!1),X(this,Wa,t.defaultOptions),this.setOptions(t.options),this.observers=[],X(this,br,t.client),X(this,bt,j(this,br).getQueryCache()),this.queryKey=t.queryKey,this.queryHash=t.queryHash,X(this,mi,US(this.options)),this.state=t.state??j(this,mi),this.scheduleGc()}get meta(){return this.options.meta}get promise(){var t;return(t=j(this,Ye))==null?void 0:t.promise}setOptions(t){this.options={...j(this,Wa),...t},this.updateGcTime(this.options.gcTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&j(this,bt).remove(this)}setData(t,n){const r=AS(this.state.data,t,this.options);return Ge(this,Et,sn).call(this,{data:r,type:"success",dataUpdatedAt:n==null?void 0:n.updatedAt,manual:n==null?void 0:n.manual}),r}setState(t,n){Ge(this,Et,sn).call(this,{type:"setState",state:t,setStateOptions:n})}cancel(t){var r,i;const n=(r=j(this,Ye))==null?void 0:r.promise;return(i=j(this,Ye))==null||i.cancel(t),n?n.then(jt).catch(jt):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(j(this,mi))}isActive(){return this.observers.some(t=>SS(t.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===Qu||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStatic(){return this.getObserversCount()>0?this.observers.some(t=>Sh(t.options.staleTime,this)==="static"):!1}isStale(){return this.getObserversCount()>0?this.observers.some(t=>t.getCurrentResult().isStale):this.state.data===void 0||this.state.isInvalidated}isStaleByTime(t=0){return this.state.data===void 0?!0:t==="static"?!1:this.state.isInvalidated?!0:!CS(this.state.dataUpdatedAt,t)}onFocus(){var n;const t=this.observers.find(r=>r.shouldFetchOnWindowFocus());t==null||t.refetch({cancelRefetch:!1}),(n=j(this,Ye))==null||n.continue()}onOnline(){var n;const t=this.observers.find(r=>r.shouldFetchOnReconnect());t==null||t.refetch({cancelRefetch:!1}),(n=j(this,Ye))==null||n.continue()}addObserver(t){this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),j(this,bt).notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){this.observers.includes(t)&&(this.observers=this.observers.filter(n=>n!==t),this.observers.length||(j(this,Ye)&&(j(this,wr)?j(this,Ye).cancel({revert:!0}):j(this,Ye).cancelRetry()),this.scheduleGc()),j(this,bt).notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||Ge(this,Et,sn).call(this,{type:"invalidate"})}fetch(t,n){var h,u,d;if(this.state.fetchStatus!=="idle"){if(this.state.data!==void 0&&(n!=null&&n.cancelRefetch))this.cancel({silent:!0});else if(j(this,Ye))return j(this,Ye).continueRetry(),j(this,Ye).promise}if(t&&this.setOptions(t),!this.options.queryFn){const p=this.observers.find(y=>y.options.queryFn);p&&this.setOptions(p.options)}const r=new AbortController,i=p=>{Object.defineProperty(p,"signal",{enumerable:!0,get:()=>(X(this,wr,!0),r.signal)})},a=()=>{const p=Cy(this.options,n),x=(()=>{const v={client:j(this,br),queryKey:this.queryKey,meta:this.meta};return i(v),v})();return X(this,wr,!1),this.options.persister?this.options.persister(p,x,this):p(x)},c=(()=>{const p={fetchOptions:n,options:this.options,queryKey:this.queryKey,client:j(this,br),state:this.state,fetchFn:a};return i(p),p})();(h=this.options.behavior)==null||h.onFetch(c,this),X(this,yr,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((u=c.fetchOptions)==null?void 0:u.meta))&&Ge(this,Et,sn).call(this,{type:"fetch",meta:(d=c.fetchOptions)==null?void 0:d.meta});const l=p=>{var y,x,v,k;Zc(p)&&p.silent||Ge(this,Et,sn).call(this,{type:"error",error:p}),Zc(p)||((x=(y=j(this,bt).config).onError)==null||x.call(y,p,this),(k=(v=j(this,bt).config).onSettled)==null||k.call(v,this.state.data,p,this)),this.scheduleGc()};return X(this,Ye,Ny({initialPromise:n==null?void 0:n.initialPromise,fn:c.fetchFn,abort:r.abort.bind(r),onSuccess:p=>{var y,x,v,k;if(p===void 0){l(new Error(`${this.queryHash} data is undefined`));return}try{this.setData(p)}catch(f){l(f);return}(x=(y=j(this,bt).config).onSuccess)==null||x.call(y,p,this),(k=(v=j(this,bt).config).onSettled)==null||k.call(v,p,this.state.error,this),this.scheduleGc()},onError:l,onFail:(p,y)=>{Ge(this,Et,sn).call(this,{type:"failed",failureCount:p,error:y})},onPause:()=>{Ge(this,Et,sn).call(this,{type:"pause"})},onContinue:()=>{Ge(this,Et,sn).call(this,{type:"continue"})},retry:c.options.retry,retryDelay:c.options.retryDelay,networkMode:c.options.networkMode,canRun:()=>!0})),j(this,Ye).start()}},mi=new WeakMap,yr=new WeakMap,bt=new WeakMap,br=new WeakMap,Ye=new WeakMap,Wa=new WeakMap,wr=new WeakMap,Et=new WeakSet,sn=function(t){const n=r=>{switch(t.type){case"failed":return{...r,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...r,fetchStatus:"paused"};case"continue":return{...r,fetchStatus:"fetching"};case"fetch":return{...r,...OS(r.data,this.options),fetchMeta:t.meta??null};case"success":return X(this,yr,void 0),{...r,data:t.data,dataUpdateCount:r.dataUpdateCount+1,dataUpdatedAt:t.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const i=t.error;return Zc(i)&&i.revert&&j(this,yr)?{...j(this,yr),fetchStatus:"idle"}:{...r,error:i,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,fetchFailureReason:i,fetchStatus:"idle",status:"error"};case"invalidate":return{...r,isInvalidated:!0};case"setState":return{...r,...t.state}}};this.state=n(this.state),tt.batch(()=>{this.observers.forEach(r=>{r.onQueryUpdate()}),j(this,bt).notify({query:this,type:"updated",action:t})})},jg);function OS(e,t){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:Py(t.networkMode)?"fetching":"paused",...e===void 0&&{error:null,status:"pending"}}}function US(e){const t=typeof e.initialData=="function"?e.initialData():e.initialData,n=t!==void 0,r=n?typeof e.initialDataUpdatedAt=="function"?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:n?r??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"pending",fetchStatus:"idle"}}var $t,Eg,_S=(Eg=class extends cc{constructor(t={}){super();ce(this,$t);this.config=t,X(this,$t,new Map)}build(t,n,r){const i=n.queryKey,a=n.queryHash??Ku(i,n);let s=this.get(a);return s||(s=new qS({client:t,queryKey:i,queryHash:a,options:t.defaultQueryOptions(n),state:r,defaultOptions:t.getQueryDefaults(i)}),this.add(s)),s}add(t){j(this,$t).has(t.queryHash)||(j(this,$t).set(t.queryHash,t),this.notify({type:"added",query:t}))}remove(t){const n=j(this,$t).get(t.queryHash);n&&(t.destroy(),n===t&&j(this,$t).delete(t.queryHash),this.notify({type:"removed",query:t}))}clear(){tt.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}get(t){return j(this,$t).get(t)}getAll(){return[...j(this,$t).values()]}find(t){const n={exact:!0,...t};return this.getAll().find(r=>$p(n,r))}findAll(t={}){const n=this.getAll();return Object.keys(t).length>0?n.filter(r=>$p(t,r)):n}notify(t){tt.batch(()=>{this.listeners.forEach(n=>{n(t)})})}onFocus(){tt.batch(()=>{this.getAll().forEach(t=>{t.onFocus()})})}onOnline(){tt.batch(()=>{this.getAll().forEach(t=>{t.onOnline()})})}},$t=new WeakMap,Eg),Wt,Ze,xr,Gt,An,Rg,FS=(Rg=class extends Iy{constructor(t){super();ce(this,Gt);ce(this,Wt);ce(this,Ze);ce(this,xr);this.mutationId=t.mutationId,X(this,Ze,t.mutationCache),X(this,Wt,[]),this.state=t.state||VS(),this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options=t,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){j(this,Wt).includes(t)||(j(this,Wt).push(t),this.clearGcTimeout(),j(this,Ze).notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){X(this,Wt,j(this,Wt).filter(n=>n!==t)),this.scheduleGc(),j(this,Ze).notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){j(this,Wt).length||(this.state.status==="pending"?this.scheduleGc():j(this,Ze).remove(this))}continue(){var t;return((t=j(this,xr))==null?void 0:t.continue())??this.execute(this.state.variables)}async execute(t){var a,s,c,l,h,u,d,p,y,x,v,k,f,m,b,w,T,C,P,S;const n=()=>{Ge(this,Gt,An).call(this,{type:"continue"})};X(this,xr,Ny({fn:()=>this.options.mutationFn?this.options.mutationFn(t):Promise.reject(new Error("No mutationFn found")),onFail:(N,I)=>{Ge(this,Gt,An).call(this,{type:"failed",failureCount:N,error:I})},onPause:()=>{Ge(this,Gt,An).call(this,{type:"pause"})},onContinue:n,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>j(this,Ze).canRun(this)}));const r=this.state.status==="pending",i=!j(this,xr).canStart();try{if(r)n();else{Ge(this,Gt,An).call(this,{type:"pending",variables:t,isPaused:i}),await((s=(a=j(this,Ze).config).onMutate)==null?void 0:s.call(a,t,this));const I=await((l=(c=this.options).onMutate)==null?void 0:l.call(c,t));I!==this.state.context&&Ge(this,Gt,An).call(this,{type:"pending",context:I,variables:t,isPaused:i})}const N=await j(this,xr).start();return await((u=(h=j(this,Ze).config).onSuccess)==null?void 0:u.call(h,N,t,this.state.context,this)),await((p=(d=this.options).onSuccess)==null?void 0:p.call(d,N,t,this.state.context)),await((x=(y=j(this,Ze).config).onSettled)==null?void 0:x.call(y,N,null,this.state.variables,this.state.context,this)),await((k=(v=this.options).onSettled)==null?void 0:k.call(v,N,null,t,this.state.context)),Ge(this,Gt,An).call(this,{type:"success",data:N}),N}catch(N){try{throw await((m=(f=j(this,Ze).config).onError)==null?void 0:m.call(f,N,t,this.state.context,this)),await((w=(b=this.options).onError)==null?void 0:w.call(b,N,t,this.state.context)),await((C=(T=j(this,Ze).config).onSettled)==null?void 0:C.call(T,void 0,N,this.state.variables,this.state.context,this)),await((S=(P=this.options).onSettled)==null?void 0:S.call(P,void 0,N,t,this.state.context)),N}finally{Ge(this,Gt,An).call(this,{type:"error",error:N})}}finally{j(this,Ze).runNext(this)}}},Wt=new WeakMap,Ze=new WeakMap,xr=new WeakMap,Gt=new WeakSet,An=function(t){const n=r=>{switch(t.type){case"failed":return{...r,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...r,isPaused:!0};case"continue":return{...r,isPaused:!1};case"pending":return{...r,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:t.isPaused,status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...r,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...r,data:void 0,error:t.error,failureCount:r.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}};this.state=n(this.state),tt.batch(()=>{j(this,Wt).forEach(r=>{r.onMutationUpdate(t)}),j(this,Ze).notify({mutation:this,type:"updated",action:t})})},Rg);function VS(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var hn,Rt,Ga,Lg,BS=(Lg=class extends cc{constructor(t={}){super();ce(this,hn);ce(this,Rt);ce(this,Ga);this.config=t,X(this,hn,new Set),X(this,Rt,new Map),X(this,Ga,0)}build(t,n,r){const i=new FS({mutationCache:this,mutationId:++io(this,Ga)._,options:t.defaultMutationOptions(n),state:r});return this.add(i),i}add(t){j(this,hn).add(t);const n=So(t);if(typeof n=="string"){const r=j(this,Rt).get(n);r?r.push(t):j(this,Rt).set(n,[t])}this.notify({type:"added",mutation:t})}remove(t){if(j(this,hn).delete(t)){const n=So(t);if(typeof n=="string"){const r=j(this,Rt).get(n);if(r)if(r.length>1){const i=r.indexOf(t);i!==-1&&r.splice(i,1)}else r[0]===t&&j(this,Rt).delete(n)}}this.notify({type:"removed",mutation:t})}canRun(t){const n=So(t);if(typeof n=="string"){const r=j(this,Rt).get(n),i=r==null?void 0:r.find(a=>a.state.status==="pending");return!i||i===t}else return!0}runNext(t){var r;const n=So(t);if(typeof n=="string"){const i=(r=j(this,Rt).get(n))==null?void 0:r.find(a=>a!==t&&a.state.isPaused);return(i==null?void 0:i.continue())??Promise.resolve()}else return Promise.resolve()}clear(){tt.batch(()=>{j(this,hn).forEach(t=>{this.notify({type:"removed",mutation:t})}),j(this,hn).clear(),j(this,Rt).clear()})}getAll(){return Array.from(j(this,hn))}find(t){const n={exact:!0,...t};return this.getAll().find(r=>Wp(n,r))}findAll(t={}){return this.getAll().filter(n=>Wp(t,n))}notify(t){tt.batch(()=>{this.listeners.forEach(n=>{n(t)})})}resumePausedMutations(){const t=this.getAll().filter(n=>n.state.isPaused);return tt.batch(()=>Promise.all(t.map(n=>n.continue().catch(jt))))}},hn=new WeakMap,Rt=new WeakMap,Ga=new WeakMap,Lg);function So(e){var t;return(t=e.options.scope)==null?void 0:t.id}function Qp(e){return{onFetch:(t,n)=>{var u,d,p,y,x;const r=t.options,i=(p=(d=(u=t.fetchOptions)==null?void 0:u.meta)==null?void 0:d.fetchMore)==null?void 0:p.direction,a=((y=t.state.data)==null?void 0:y.pages)||[],s=((x=t.state.data)==null?void 0:x.pageParams)||[];let c={pages:[],pageParams:[]},l=0;const h=async()=>{let v=!1;const k=b=>{Object.defineProperty(b,"signal",{enumerable:!0,get:()=>(t.signal.aborted?v=!0:t.signal.addEventListener("abort",()=>{v=!0}),t.signal)})},f=Cy(t.options,t.fetchOptions),m=async(b,w,T)=>{if(v)return Promise.reject();if(w==null&&b.pages.length)return Promise.resolve(b);const P=(()=>{const O={client:t.client,queryKey:t.queryKey,pageParam:w,direction:T?"backward":"forward",meta:t.options.meta};return k(O),O})(),S=await f(P),{maxPages:N}=t.options,I=T?IS:NS;return{pages:I(b.pages,S,N),pageParams:I(b.pageParams,w,N)}};if(i&&a.length){const b=i==="backward",w=b?zS:Yp,T={pages:a,pageParams:s},C=w(r,T);c=await m(T,C,b)}else{const b=e??a.length;do{const w=l===0?s[0]??r.initialPageParam:Yp(r,c);if(l>0&&w==null)break;c=await m(c,w),l++}while(l<b)}return c};t.options.persister?t.fetchFn=()=>{var v,k;return(k=(v=t.options).persister)==null?void 0:k.call(v,h,{client:t.client,queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},n)}:t.fetchFn=h}}}function Yp(e,{pages:t,pageParams:n}){const r=t.length-1;return t.length>0?e.getNextPageParam(t[r],t,n[r],n):void 0}function zS(e,{pages:t,pageParams:n}){var r;return t.length>0?(r=e.getPreviousPageParam)==null?void 0:r.call(e,t[0],t,n[0],n):void 0}var Se,Mn,qn,fi,vi,On,yi,bi,Dg,HS=(Dg=class{constructor(e={}){ce(this,Se);ce(this,Mn);ce(this,qn);ce(this,fi);ce(this,vi);ce(this,On);ce(this,yi);ce(this,bi);X(this,Se,e.queryCache||new _S),X(this,Mn,e.mutationCache||new BS),X(this,qn,e.defaultOptions||{}),X(this,fi,new Map),X(this,vi,new Map),X(this,On,0)}mount(){io(this,On)._++,j(this,On)===1&&(X(this,yi,Sy.subscribe(async e=>{e&&(await this.resumePausedMutations(),j(this,Se).onFocus())})),X(this,bi,js.subscribe(async e=>{e&&(await this.resumePausedMutations(),j(this,Se).onOnline())})))}unmount(){var e,t;io(this,On)._--,j(this,On)===0&&((e=j(this,yi))==null||e.call(this),X(this,yi,void 0),(t=j(this,bi))==null||t.call(this),X(this,bi,void 0))}isFetching(e){return j(this,Se).findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return j(this,Mn).findAll({...e,status:"pending"}).length}getQueryData(e){var n;const t=this.defaultQueryOptions({queryKey:e});return(n=j(this,Se).get(t.queryHash))==null?void 0:n.state.data}ensureQueryData(e){const t=this.defaultQueryOptions(e),n=j(this,Se).build(this,t),r=n.state.data;return r===void 0?this.fetchQuery(e):(e.revalidateIfStale&&n.isStaleByTime(Sh(t.staleTime,n))&&this.prefetchQuery(t),Promise.resolve(r))}getQueriesData(e){return j(this,Se).findAll(e).map(({queryKey:t,state:n})=>{const r=n.data;return[t,r]})}setQueryData(e,t,n){const r=this.defaultQueryOptions({queryKey:e}),i=j(this,Se).get(r.queryHash),a=i==null?void 0:i.state.data,s=kS(t,a);if(s!==void 0)return j(this,Se).build(this,r).setData(s,{...n,manual:!0})}setQueriesData(e,t,n){return tt.batch(()=>j(this,Se).findAll(e).map(({queryKey:r})=>[r,this.setQueryData(r,t,n)]))}getQueryState(e){var n;const t=this.defaultQueryOptions({queryKey:e});return(n=j(this,Se).get(t.queryHash))==null?void 0:n.state}removeQueries(e){const t=j(this,Se);tt.batch(()=>{t.findAll(e).forEach(n=>{t.remove(n)})})}resetQueries(e,t){const n=j(this,Se);return tt.batch(()=>(n.findAll(e).forEach(r=>{r.reset()}),this.refetchQueries({type:"active",...e},t)))}cancelQueries(e,t={}){const n={revert:!0,...t},r=tt.batch(()=>j(this,Se).findAll(e).map(i=>i.cancel(n)));return Promise.all(r).then(jt).catch(jt)}invalidateQueries(e,t={}){return tt.batch(()=>(j(this,Se).findAll(e).forEach(n=>{n.invalidate()}),(e==null?void 0:e.refetchType)==="none"?Promise.resolve():this.refetchQueries({...e,type:(e==null?void 0:e.refetchType)??(e==null?void 0:e.type)??"active"},t)))}refetchQueries(e,t={}){const n={...t,cancelRefetch:t.cancelRefetch??!0},r=tt.batch(()=>j(this,Se).findAll(e).filter(i=>!i.isDisabled()&&!i.isStatic()).map(i=>{let a=i.fetch(void 0,n);return n.throwOnError||(a=a.catch(jt)),i.state.fetchStatus==="paused"?Promise.resolve():a}));return Promise.all(r).then(jt)}fetchQuery(e){const t=this.defaultQueryOptions(e);t.retry===void 0&&(t.retry=!1);const n=j(this,Se).build(this,t);return n.isStaleByTime(Sh(t.staleTime,n))?n.fetch(t):Promise.resolve(n.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(jt).catch(jt)}fetchInfiniteQuery(e){return e.behavior=Qp(e.pages),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(jt).catch(jt)}ensureInfiniteQueryData(e){return e.behavior=Qp(e.pages),this.ensureQueryData(e)}resumePausedMutations(){return js.isOnline()?j(this,Mn).resumePausedMutations():Promise.resolve()}getQueryCache(){return j(this,Se)}getMutationCache(){return j(this,Mn)}getDefaultOptions(){return j(this,qn)}setDefaultOptions(e){X(this,qn,e)}setQueryDefaults(e,t){j(this,fi).set(Ha(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){const t=[...j(this,fi).values()],n={};return t.forEach(r=>{$a(e,r.queryKey)&&Object.assign(n,r.defaultOptions)}),n}setMutationDefaults(e,t){j(this,vi).set(Ha(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){const t=[...j(this,vi).values()],n={};return t.forEach(r=>{$a(e,r.mutationKey)&&Object.assign(n,r.defaultOptions)}),n}defaultQueryOptions(e){if(e._defaulted)return e;const t={...j(this,qn).queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return t.queryHash||(t.queryHash=Ku(t.queryKey,t)),t.refetchOnReconnect===void 0&&(t.refetchOnReconnect=t.networkMode!=="always"),t.throwOnError===void 0&&(t.throwOnError=!!t.suspense),!t.networkMode&&t.persister&&(t.networkMode="offlineFirst"),t.queryFn===Qu&&(t.enabled=!1),t}defaultMutationOptions(e){return e!=null&&e._defaulted?e:{...j(this,qn).mutations,...(e==null?void 0:e.mutationKey)&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){j(this,Se).clear(),j(this,Mn).clear()}},Se=new WeakMap,Mn=new WeakMap,qn=new WeakMap,fi=new WeakMap,vi=new WeakMap,On=new WeakMap,yi=new WeakMap,bi=new WeakMap,Dg),$S=g.createContext(void 0),WS=({client:e,children:t})=>(g.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]),o.jsx($S.Provider,{value:e,children:t}));const Xp="haiit-preferred-effect",GS=["none","christmas","tet","parallax"],KS=7,QS=e=>e!==null&&GS.includes(e),De=e=>Math.floor(e),jy=e=>{var n,r,i;const t=new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Ho_Chi_Minh",year:"numeric",month:"numeric",day:"numeric"}).formatToParts(e);return{year:Number(((n=t.find(a=>a.type==="year"))==null?void 0:n.value)??0),month:Number(((r=t.find(a=>a.type==="month"))==null?void 0:r.value)??0),day:Number(((i=t.find(a=>a.type==="day"))==null?void 0:i.value)??0)}},Ey=(e,t,n)=>{const r=De((14-t)/12),i=n+4800-r,a=t+12*r-3;return n>1582||n===1582&&(t>10||t===10&&e>=15)?e+De((153*a+2)/5)+365*i+De(i/4)-De(i/100)+De(i/400)-32045:e+De((153*a+2)/5)+365*i+De(i/4)-32083},ji=e=>{const t=e/1236.85,n=t*t,r=n*t,i=r*t,a=Math.PI/180;let s=241502075933e-5+29.53058868*e+1178e-7*n-155e-9*r;s+=33e-5*Math.sin((166.56+132.87*t-.009173*n)*a);const c=359.2242+29.10535608*e-333e-7*n-347e-8*r,l=306.0253+385.81691806*e+.0107306*n+1236e-8*r-58e-9*i,h=21.2964+390.67050646*e-.0016528*n-239e-8*r+2e-8*i,u=(.1734-393e-6*t)*Math.sin(c*a)+.0021*Math.sin(2*a*c)-.4068*Math.sin(l*a)+.0161*Math.sin(2*a*l)-4e-4*Math.sin(3*a*l)+.0104*Math.sin(2*a*h)-.0051*Math.sin((c+l)*a)-.0074*Math.sin((c-l)*a)+4e-4*Math.sin((2*h+c)*a)-4e-4*Math.sin((2*h-c)*a)-6e-4*Math.sin((2*h+l)*a)+.001*Math.sin((2*h-l)*a)+5e-4*Math.sin((2*l+c)*a);let d;return t<-11?d=.001+839e-6*t+2261e-7*n-845e-8*r-81e-9*i:d=-278e-6+265e-6*t+262e-6*n,s+u-d},Ah=(e,t)=>{const n=(e-24515455e-1-t/24)/36525,r=n*n,i=Math.PI/180,a=357.5291+35999.0503*n-1559e-7*r-48e-8*r*n,s=280.46645+36000.76983*n+3032e-7*r,c=(1.9146-.004817*n-14e-6*r)*Math.sin(i*a)+(.019993-101e-6*n)*Math.sin(2*i*a)+29e-5*Math.sin(3*i*a),l=(s+c)*i;return De((l-2*Math.PI*De(l/(2*Math.PI)))/Math.PI*6)},el=(e,t)=>{const n=Ey(31,12,e)-2415021,r=De(n/29.530588853);let i=ji(r);return Ah(De(i+.5+t/24),t)>=9&&(i=ji(r-1)),De(i+.5+t/24)},YS=(e,t)=>{const n=De(.5+(e-2415021076998695e-9)/29.530588853);let r=0,i=1,a=Ah(De(ji(n+i)+.5+t/24),t);do r=a,i+=1,a=Ah(De(ji(n+i)+.5+t/24),t);while(a!==r&&i<14);return i-1},XS=(e,t,n,r)=>{const i=Ey(e,t,n),a=De((i-2415021076998695e-9)/29.530588853);let s=De(ji(a+1)+.5+r/24);s>i&&(s=De(ji(a)+.5+r/24));let c=el(n,r),l=c,h;c>=s?(h=n,c=el(n-1,r)):(h=n+1,l=el(n+1,r));const u=i-s+1,d=De((s-c)/29);let p=0,y=d+11;if(l-c>365){const x=YS(c,r);d>=x&&(y=d+10,d===x&&(p=1))}return y>12&&(y-=12),y>=11&&d<4&&(h-=1),{day:u,month:y,year:h,leap:p}},JS=e=>{const{day:t,month:n,year:r}=jy(e);return XS(t,n,r,KS)},ZS=e=>{const t=jy(e);if(t.month===12&&t.day>=24&&t.day<=26)return"christmas";if(t.day===t.month)return"parallax";const n=JS(e);return n.month===1&&n.day>=1&&n.day<=5||n.month===12&&n.day>=29&&n.day<=30?"tet":"none"},Ry=g.createContext(void 0),eP=({children:e})=>{const[t,n]=g.useState(()=>{const i=localStorage.getItem(Xp);return QS(i)?i:ZS(new Date)}),r=i=>{n(i),localStorage.setItem(Xp,i)};return o.jsx(Ry.Provider,{value:{currentEffect:t,setCurrentEffect:r},children:e})},Ly=()=>{const e=g.useContext(Ry);if(!e)throw new Error("useEffects must be used within an EffectsProvider");return e},tP=Du("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),ne=g.forwardRef(({className:e,variant:t,size:n,asChild:r=!1,...i},a)=>{const s=r?m0:"button";return o.jsx(s,{className:pe(tP({variant:t,size:n,className:e})),ref:a,...i})});ne.displayName="Button";const nP={"nav.home":{vi:"Trang chủ",en:"Index"},"nav.projects":{vi:"Dự án",en:"Work"},"nav.blog":{vi:"Bài viết",en:"Notes"},"nav.about":{vi:"Hồ sơ",en:"Profile"},"nav.contact":{vi:"Liên hệ",en:"Contact"},"nav.connect":{vi:"Sẵn sàng kết nối",en:"Available to connect"},"nav.theme":{vi:"Giao diện",en:"Theme"},"nav.language":{vi:"Ngôn ngữ",en:"Language"},"hero.log":{vi:"Portfolio / Nhật ký học tập",en:"Portfolio / Learning log"},"hero.open":{vi:"Sẵn sàng cho cơ hội phù hợp",en:"Open to meaningful work"},"hero.hello":{vi:"Xin chào, tôi là",en:"Hello, I am"},"hero.line1":{vi:"Chế tác mã nguồn",en:"Crafting code"},"hero.line2":{vi:"& đúc kết những",en:"& distilling field"},"hero.line3":{vi:"trải nghiệm thực tế.",en:"experiences."},"hero.bio":{vi:"một Information Systems Developer tập trung vào backend, database và những sản phẩm có giá trị sử dụng thực tế.",en:"an Information Systems Developer focused on backend, databases, and products with practical value."},"hero.work":{vi:"Khám phá dự án",en:"Explore selected work"},"hero.notes":{vi:"Đọc bài viết",en:"Read my notes"},"hero.repositories":{vi:"kho mã nguồn",en:"repositories"},"hero.languages":{vi:"ngôn ngữ",en:"languages"},"hero.journal":{vi:"nhật ký công khai",en:"public journal"},"hero.portrait":{vi:"Chân dung",en:"Portrait"},"home.work.eyebrow":{vi:"01 / Dự án chọn lọc",en:"01 / Selected work"},"home.work.title1":{vi:"Dự án có lý do",en:"Projects with a reason"},"home.work.title2":{vi:"để tồn tại.",en:"to exist."},"home.work.desc":{vi:"Mỗi dự án là một bài thực hành có chủ đích: dữ liệu, thuật toán, kiến trúc hoặc trải nghiệm người dùng.",en:"Each project is a deliberate exercise in data, algorithms, architecture, or user experience."},"home.work.archive":{vi:"Xem kho dự án",en:"View project archive"},"home.work.case":{vi:"Nghiên cứu",en:"Case study"},"home.work.tools":{vi:"Công cụ & bối cảnh",en:"Tools & context"},"home.notes.eyebrow":{vi:"02 / Ghi chép thực tế",en:"02 / Field notes"},"home.notes.title1":{vi:"Học tập công khai.",en:"Learn in public."},"home.notes.title2":{vi:"Giữ lại điều hữu ích.",en:"Keep the useful parts."},"home.notes.all":{vi:"Mở tất cả bài viết",en:"Open all notes"},"home.notes.read":{vi:"Đọc bài",en:"Read note"},"home.map.eyebrow":{vi:"03 / Bản đồ kiến thức",en:"03 / Knowledge map"},"home.map.title1":{vi:"Những điều tôi đang",en:"What I am"},"home.map.title2":{vi:"khám phá.",en:"mapping out."},"home.map.desc":{vi:"Không chỉ là danh mục. Đây là bản đồ những vùng kiến thức tôi đang học, thử nghiệm và kết nối lại với nhau.",en:"More than categories: a map of the knowledge areas I am learning, testing, and connecting."},"home.principle":{vi:"Nguyên tắc cá nhân",en:"Personal principle"},"home.quote":{vi:"“Tôi không cố tỏ ra biết mọi thứ. Tôi xây, ghi chép và biến những điều đã hiểu thành thứ hữu ích cho người tiếp theo.”",en:"“I do not pretend to know everything. I build, document, and turn what I understand into something useful for the next person.”"},"footer.eyebrow":{vi:"Cuối trang / đầu cuộc trò chuyện",en:"End of page / start of conversation"},"footer.title":{vi:"Tôi xây sản phẩm để hiểu hệ thống, rồi viết lại để hiểu sâu hơn.",en:"I build products to understand systems, then write to understand them deeper."},"footer.navigate":{vi:"Điều hướng",en:"Navigate"},"footer.connect":{vi:"Kết nối",en:"Connect"},"footer.work":{vi:"Dự án chọn lọc",en:"Selected work"},"footer.notes":{vi:"Ghi chép học tập",en:"Learning notes"},"footer.profile":{vi:"Hồ sơ & CV",en:"Profile & CV"},"footer.contact":{vi:"Liên hệ",en:"Contact"},"footer.feedback":{vi:"Gửi phản hồi",en:"Send feedback"},"footer.designed":{vi:"Được thiết kế như một nhật ký hệ thống sống",en:"Designed as a living systems journal"},"blog.title":{vi:"Bài viết",en:"Blog"},"blog.desc":{vi:"Kiến thức lập trình, kinh nghiệm thực tế và những bài học từ hành trình phát triển phần mềm.",en:"Programming knowledge, practical experience, and lessons from my software development journey."},"blog.search":{vi:"Tìm kiếm bài viết...",en:"Search articles..."},"blog.all":{vi:"Tất cả",en:"All"},"blog.filterCategory":{vi:"Danh mục",en:"Categories"},"blog.filterTag":{vi:"Thẻ nội dung",en:"Content tags"},"blog.allTags":{vi:"Tất cả thẻ",en:"All tags"},"blog.selectedTags":{vi:"thẻ đã chọn",en:"selected"},"blog.clearFilters":{vi:"Xóa bộ lọc",en:"Clear filters"},"blog.readMore":{vi:"Đọc thêm →",en:"Read more →"},"blog.empty":{vi:"Không tìm thấy bài viết",en:"No articles found"},"blog.emptyDesc":{vi:"Thử thay đổi bộ lọc hoặc từ khóa tìm kiếm.",en:"Try changing the filter or search keyword."},"project.title":{vi:"Dự án",en:"Projects"},"project.desc":{vi:"Các dự án cá nhân từ GitHub của tôi, từ ý tưởng đến sản phẩm hoàn chỉnh.",en:"My personal GitHub projects, from early ideas to finished products."},"project.github":{vi:"Xem thêm trên GitHub",en:"View more on GitHub"},"project.featured":{vi:"Dự án nổi bật",en:"Featured projects"},"project.all":{vi:"Tất cả dự án",en:"All projects"},"project.source":{vi:"Mã nguồn",en:"Source code"},"project.demo":{vi:"Bản chạy thử",en:"Live demo"},"post.back":{vi:"Quay lại Blog",en:"Back to Blog"},"post.notFound":{vi:"Bài viết không tồn tại",en:"Article not found"},"post.notFoundDesc":{vi:"Bài viết bạn đang tìm không tồn tại hoặc đã bị xóa.",en:"The article you are looking for does not exist or has been removed."},"post.views":{vi:"lượt xem",en:"views"},"post.tags":{vi:"Thẻ",en:"Tags"},"post.share":{vi:"Chia sẻ",en:"Share"},"post.copy":{vi:"Sao chép liên kết",en:"Copy link"},"post.sourceNote":{vi:"Ghi chú: Bài viết được tổng hợp từ quá trình học, thực hành và tham khảo nhiều nguồn tài liệu khác nhau.",en:"Note: This article is distilled from my learning, hands-on practice, and references across multiple sources."},"category.languages":{vi:"Ngôn ngữ lập trình",en:"Programming Languages"},"category.frameworks":{vi:"Framework & thư viện",en:"Frameworks & Libraries"},"category.architecture":{vi:"Kiến trúc phần mềm",en:"Software Architecture"},"category.patterns":{vi:"Mẫu thiết kế",en:"Design Patterns"},"category.practices":{vi:"Thực hành tốt",en:"Best Practices"},"category.roadmap":{vi:"Lộ trình học tập",en:"Learning Roadmaps"},"about.cv":{vi:"Xem CV của tôi",en:"View my CV"},"about.me":{vi:"Về tôi",en:"About me"},"about.experience":{vi:"Kinh nghiệm",en:"Experience"},"about.contact":{vi:"Liên hệ",en:"Contact"},"about.collab":{vi:"Muốn hợp tác?",en:"Interested in collaborating?"},"about.collabDesc":{vi:"Tôi luôn sẵn sàng thảo luận về các dự án thú vị.",en:"I am always open to discussing interesting projects."},"about.contactNow":{vi:"Liên hệ ngay",en:"Get in touch"},"about.download":{vi:"Tải PDF",en:"Download PDF"},"about.skills":{vi:"Kỹ năng kỹ thuật",en:"Technical skills"},"about.featured":{vi:"Dự án tiêu biểu (từ GitHub)",en:"Featured projects (from GitHub)"},"about.other":{vi:"Hoạt động khác",en:"Other activities"},"effect.title":{vi:"Hiệu ứng nền",en:"Background effects"}},Dy=g.createContext(void 0),rP=({children:e})=>{const[t,n]=g.useState(()=>{const i=localStorage.getItem("haiit-language");return i==="vi"||i==="en"?i:navigator.language.toLowerCase().startsWith("vi")?"vi":"en"});g.useEffect(()=>{localStorage.setItem("haiit-language",t),document.documentElement.lang=t},[t]);const r=i=>{var a;return((a=nP[i])==null?void 0:a[t])??i};return o.jsx(Dy.Provider,{value:{language:t,setLanguage:n,toggleLanguage:()=>n(t==="vi"?"en":"vi"),t:r,locale:t==="vi"?"vi-VN":"en-US"},children:e})},qe=()=>{const e=g.useContext(Dy);if(!e)throw new Error("useLanguage must be used within LanguageProvider");return e},tl=["none","parallax","tet","christmas"],iP=()=>{const{currentEffect:e,setCurrentEffect:t}=Ly(),{language:n}=qe(),r=tl.indexOf(e),i=tl[(r+1)%tl.length],a=n==="vi"?{none:"Tắt",parallax:"3D",tet:"Tết",christmas:"Giáng sinh"}:{none:"Off",parallax:"3D",tet:"Lunar New Year",christmas:"Christmas"},c={none:ec,parallax:p1,tet:T1,christmas:W1}[e],l=`${a[e]} → ${a[i]}`;return o.jsxs(xy,{children:[o.jsx(ky,{asChild:!0,children:o.jsx(ne,{variant:"outline",size:"icon",className:`effect-cycle fixed bottom-4 right-4 z-[60] h-12 w-12 rounded-full shadow-xl backdrop-blur-xl ${e==="none"?"bg-background/85":"border-primary/50 bg-primary/15 text-primary"}`,"aria-label":l,onClick:()=>t(i),children:o.jsx(c,{className:"h-4 w-4"})})}),o.jsx(Gu,{side:"left",className:"font-mono text-xs uppercase tracking-[.12em]",children:l})]})},aP=()=>{const e=g.useRef(null),t=g.useRef([]),n=g.useRef();return g.useEffect(()=>{const r=e.current;if(!r)return;const i=r.getContext("2d");if(!i)return;let a=window.innerWidth,s=window.innerHeight,c=performance.now()+5e3+Math.random()*5e3,l=0;const h=()=>{const y=Math.min(190,Math.floor(a/6));t.current=Array.from({length:y},(x,v)=>{const k=Math.random();return{x:Math.random()*a,y:Math.random()*s,depth:k,size:.7+k*2.5,speed:.3+k*1.1,opacity:.12+k*.36,swing:Math.random()*Math.PI*2,swingSpeed:Math.random()*.018+.006,blur:(1-k)*1.8,rotation:Math.random()*Math.PI,rotationSpeed:(Math.random()-.5)*.012,crystal:v%17===0}})},u=()=>{const y=Math.min(window.devicePixelRatio||1,2);a=window.innerWidth,s=window.innerHeight,r.width=a*y,r.height=s*y,r.style.width=`${a}px`,r.style.height=`${s}px`,i.setTransform(y,0,0,y,0,0),h()},d=y=>{i.save(),i.translate(y.x,y.y),i.rotate(y.rotation),i.strokeStyle=`rgba(235, 249, 255, ${y.opacity*.72})`,i.lineWidth=.45;for(let x=0;x<6;x+=1)i.rotate(Math.PI/3),i.beginPath(),i.moveTo(0,0),i.lineTo(0,-y.size*2.4),i.moveTo(0,-y.size*1.3),i.lineTo(y.size*.65,-y.size*1.8),i.moveTo(0,-y.size*1.3),i.lineTo(-y.size*.65,-y.size*1.8),i.stroke();i.restore()};u(),window.addEventListener("resize",u);const p=y=>{if(i.clearRect(0,0,a,s),y>c){const x=y-c;l=x<3500?Math.sin(x/3500*Math.PI)*3.2:0,x>=3500&&(c=y+9e3+Math.random()*9e3)}t.current.forEach(x=>{x.y+=x.speed+l*.08,x.swing+=x.swingSpeed,x.rotation+=x.rotationSpeed,x.x+=Math.sin(x.swing)*(.18+x.depth*.35)+l*(.25+x.depth*.75),x.y>s+12&&(x.y=-12,x.x=Math.random()*a),x.x>a+15&&(x.x=-15),i.shadowBlur=x.blur*5,i.shadowColor="rgba(180, 225, 255, .55)",x.crystal?d(x):(i.beginPath(),i.ellipse(x.x,x.y,x.size*(1+l*.08),x.size,0,0,Math.PI*2),i.fillStyle=`rgba(240, 250, 255, ${x.opacity})`,i.fill()),i.shadowBlur=0}),n.current=requestAnimationFrame(p)};return n.current=requestAnimationFrame(p),()=>{window.removeEventListener("resize",u),n.current&&cancelAnimationFrame(n.current)}},[]),o.jsx("canvas",{ref:e,className:"absolute inset-0 pointer-events-none z-30 opacity-[.72]"})},oP=Array.from({length:18},(e,t)=>{const n=t/17,r=Math.sin(n*Math.PI)*2.5;return{x:`${4+n*92}%`,y:`${8+r}px`,delay:`${t*-.16}s`,hue:35+t*18}}),sP=Array.from({length:42}),cP=Array.from({length:9}),lP=Array.from({length:5}),hP=Array.from({length:18}),uP=Array.from({length:6}),Jp=Array.from({length:14}),Zp=({side:e})=>o.jsxs("div",{className:`christmas-sprig christmas-sprig-${e}`,children:[o.jsx("span",{className:"sprig-stem"}),cP.map((t,n)=>o.jsx("i",{style:{"--i":n}},n)),lP.map((t,n)=>o.jsx("b",{style:{"--i":n}},n))]}),dP=()=>o.jsxs("div",{className:"effect-scene effect-scene-christmas fixed inset-0 z-0 overflow-hidden",children:[o.jsx("div",{className:"christmas-frost"}),o.jsx("div",{className:"christmas-bokeh",children:hP.map((e,t)=>o.jsx("i",{style:{"--i":t}},t))}),o.jsx("div",{className:"nordic-stars",children:sP.map((e,t)=>o.jsx("i",{style:{"--i":t}},t))}),o.jsx("div",{className:"nordic-aurora nordic-aurora-a"}),o.jsx("div",{className:"nordic-aurora nordic-aurora-b"}),o.jsx("div",{className:"nordic-aurora nordic-aurora-c"}),o.jsx("div",{className:"christmas-snowflake-halo"}),o.jsx("div",{className:"christmas-hero-snowflake",children:uP.map((e,t)=>o.jsxs("i",{style:{"--i":t},children:[o.jsx("span",{}),o.jsx("b",{})]},t))}),o.jsx("div",{className:"christmas-wind christmas-wind-a",children:Jp.map((e,t)=>o.jsx("i",{style:{"--i":t}},t))}),o.jsx("div",{className:"christmas-wind christmas-wind-b",children:Jp.slice(0,9).map((e,t)=>o.jsx("i",{style:{"--i":t}},t))}),o.jsxs("div",{className:"christmas-top-garland",children:[o.jsx(Zp,{side:"left"}),o.jsx(Zp,{side:"right"}),o.jsx("div",{className:"garland-bauble garland-bauble-a",children:o.jsx("i",{})}),o.jsx("div",{className:"garland-bauble garland-bauble-b",children:o.jsx("i",{})}),o.jsx("div",{className:"garland-bauble garland-bauble-c",children:o.jsx("i",{})})]}),o.jsxs("div",{className:"christmas-wreath",children:[o.jsx("div",{className:"wreath-bow"}),o.jsx("i",{}),o.jsx("i",{}),o.jsx("i",{}),o.jsx("i",{}),o.jsx("i",{})]}),o.jsxs("div",{className:"christmas-corner-gift",children:[o.jsx("i",{}),o.jsx("span",{})]}),o.jsx("div",{className:"christmas-candy-cane"}),o.jsx("div",{className:"nordic-pines nordic-pines-back",children:Array.from({length:9},(e,t)=>o.jsx("i",{style:{"--i":t}},t))}),o.jsx("div",{className:"nordic-pines nordic-pines-front",children:Array.from({length:7},(e,t)=>o.jsx("i",{style:{"--i":t}},t))}),o.jsx("div",{className:"christmas-light-drift",children:oP.map(e=>o.jsx("i",{style:{left:e.x,top:e.y,"--bulb":`hsl(${e.hue} 88% 64%)`,animationDelay:e.delay}},e.x))}),o.jsx("div",{className:"winter-ground"}),o.jsx(aP,{}),o.jsx("div",{className:"effect-label left-5 top-24",children:"CHRISTMAS EVE / WINTER GLOW"})]}),pP=()=>{const e=g.useRef(null);return g.useEffect(()=>{const t=e.current,n=t==null?void 0:t.getContext("2d");if(!t||!n)return;let r=0,i=0,a=[],s=[];const c=()=>{t.width=window.innerWidth*devicePixelRatio,t.height=window.innerHeight*devicePixelRatio,t.style.width=`${window.innerWidth}px`,t.style.height=`${window.innerHeight}px`,n.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0),a=Array.from({length:Math.min(52,Math.floor(window.innerWidth/24))},(u,d)=>({x:d%2?Math.random()*window.innerWidth*.22:window.innerWidth*(.78+Math.random()*.22),y:Math.random()*window.innerHeight,size:Math.random()*5+2,speed:Math.random()*.6+.25,sway:Math.random()*8,rotation:Math.random()*Math.PI,rotationSpeed:(Math.random()-.5)*.025,opacity:Math.random()*.5+.3}))},l=()=>{const u=Math.random()>.5?window.innerWidth*.12:window.innerWidth*.88,d=window.innerHeight*(.1+Math.random()*.16),p=Math.random()>.5?"#ffd36a":"#ff7b69";s.push(...Array.from({length:28},(y,x)=>({x:u,y:d,angle:x/28*Math.PI*2,radius:0,speed:Math.random()*1.3+.7,alpha:.75,color:p})))},h=()=>{n.clearRect(0,0,window.innerWidth,window.innerHeight),i+=1,i%210===0&&l(),s=s.filter(u=>u.alpha>.01),s.forEach(u=>{u.radius+=u.speed,u.alpha*=.985;const d=u.x+Math.cos(u.angle)*u.radius,p=u.y+Math.sin(u.angle)*u.radius+u.radius*.08;n.beginPath(),n.arc(d,p,1.2,0,Math.PI*2),n.fillStyle=u.color,n.globalAlpha=u.alpha,n.fill()}),a.forEach(u=>{u.y+=u.speed,u.x+=Math.sin(u.y*.012+u.sway)*.38,u.rotation+=u.rotationSpeed,u.y>window.innerHeight+20&&(u.y=-20,u.x=Math.random()>.5?Math.random()*window.innerWidth*.22:window.innerWidth*(.78+Math.random()*.22)),n.save(),n.translate(u.x,u.y),n.rotate(u.rotation),n.globalAlpha=u.opacity;const d=n.createLinearGradient(0,-u.size,0,u.size);d.addColorStop(0,"#fff0a8"),d.addColorStop(.45,"#ffbf5a"),d.addColorStop(1,"#e85a55"),n.fillStyle=d,n.beginPath(),n.ellipse(0,0,u.size*.5,u.size,0,0,Math.PI*2),n.fill(),n.restore()}),n.globalAlpha=1,r=requestAnimationFrame(h)};return c(),l(),h(),window.addEventListener("resize",c),()=>{cancelAnimationFrame(r),window.removeEventListener("resize",c)}},[]),o.jsxs("div",{className:"effect-scene effect-scene-tet fixed inset-0 z-0 overflow-hidden",children:[o.jsx("div",{className:"tet-vietnam-frame"}),o.jsxs("div",{className:"tet-corner tet-corner-dao",children:[o.jsx("div",{className:"tet-border-branch",children:Array.from({length:13},(t,n)=>o.jsx("i",{style:{"--i":n}},n))}),o.jsxs("div",{className:"tet-viet-lantern",children:[o.jsx("span",{children:"An"}),o.jsx("i",{})]})]}),o.jsxs("div",{className:"tet-corner tet-corner-mai",children:[o.jsx("div",{className:"tet-border-branch",children:Array.from({length:13},(t,n)=>o.jsx("i",{style:{"--i":n}},n))}),o.jsxs("div",{className:"tet-viet-lantern",children:[o.jsx("span",{children:"Vui"}),o.jsx("i",{})]})]}),o.jsxs("div",{className:"tet-side-couplet tet-side-couplet-left",children:[o.jsx("i",{}),o.jsxs("span",{children:[o.jsx("em",{children:"Xuân"}),o.jsx("em",{children:"sang"}),o.jsx("em",{children:"phúc"}),o.jsx("em",{children:"lộc"}),o.jsx("em",{children:"tràn"}),o.jsx("em",{children:"muôn"}),o.jsx("em",{children:"ngả"})]}),o.jsx("b",{}),o.jsx("strong",{children:"An"})]}),o.jsxs("div",{className:"tet-side-couplet tet-side-couplet-right",children:[o.jsx("i",{}),o.jsxs("span",{children:[o.jsx("em",{children:"Tết"}),o.jsx("em",{children:"đến"}),o.jsx("em",{children:"an"}),o.jsx("em",{children:"khang"}),o.jsx("em",{children:"rạng"}),o.jsx("em",{children:"khắp"}),o.jsx("em",{children:"nhà"})]}),o.jsx("b",{}),o.jsx("strong",{children:"Xuân"})]}),o.jsxs("div",{className:"tet-bottom tet-bottom-left",children:[o.jsxs("div",{className:"tet-banh-chung",children:[o.jsx("i",{}),o.jsx("span",{}),o.jsx("b",{})]}),o.jsxs("div",{className:"tet-banh-tet",children:[o.jsx("i",{}),o.jsx("span",{}),o.jsx("b",{})]}),o.jsx("div",{className:"tet-watermelon",children:o.jsx("i",{})}),o.jsxs("div",{className:"tet-envelope",children:[o.jsx("i",{}),o.jsx("span",{children:"Lộc"}),o.jsx("b",{})]})]}),o.jsxs("div",{className:"tet-bottom tet-bottom-right",children:[o.jsx("div",{className:"tet-quat",children:Array.from({length:11},(t,n)=>o.jsx("i",{style:{"--i":n}},n))}),o.jsxs("div",{className:"tet-dongson",children:[o.jsx("i",{}),o.jsx("span",{}),o.jsx("b",{})]})]}),o.jsx("div",{className:"tet-top-knot tet-top-knot-a",children:o.jsx("i",{})}),o.jsx("div",{className:"tet-top-knot tet-top-knot-b",children:o.jsx("i",{})}),o.jsx("canvas",{ref:e,className:"absolute inset-0"}),o.jsx("div",{className:"effect-label left-5 top-24",children:"TẾT VIỆT / BÌNH AN"})]})},Po=[{base:556958,side:473183,top:6478056,accent:12124016,edge:14154751},{base:5982901,side:2169688,top:10849023,accent:7533823,edge:15196671},{base:11758372,side:5514511,top:15775819,accent:7467007,edge:16770989},{base:6004018,side:2181927,top:11069534,accent:14286722,edge:15597513}],nl=(e,t)=>{const n=new Xb(e*.48,e*.48),r=new Oh({color:t,transparent:!0,opacity:.28,depthWrite:!1,side:Jb}),i=new va(n,r),a=new ya(new Yo(n),new Xo({color:t,transparent:!0,opacity:.5}));return i.add(a),i},rl=(e,t,n=!1)=>{const r=new Mg,i=new ad(e,e,e),s=[t.side,t.side,t.top,t.side,t.base,t.side].map((d,p)=>new Kb({color:d,metalness:.62,roughness:p===2?.14:.23,clearcoat:1,clearcoatRoughness:.12,emissive:new Qb(p===2?t.accent:d).multiplyScalar(p===2?.14:.07),transparent:!0,opacity:.38,depthWrite:!1})),c=new va(i,s),l=new ya(new Yo(i),new Xo({color:t.edge,transparent:!0,opacity:.58})),h=new ya(new Yo(new ad(e*1.13,e*1.13,e*1.13)),new Xo({color:t.accent,transparent:!0,opacity:n?.3:.16})),u=new va(new Yb(e*(n?.24:.19),0),new Oh({color:t.accent,transparent:!0,opacity:.48,depthWrite:!1}));if(u.name="cube-energy",h.name="cube-frame",r.add(c,l,h,u),n){const d=nl(e,t.accent);d.position.z=e*.505;const p=nl(e*.88,t.edge);p.position.y=e*.505,p.rotation.x=-Math.PI/2;const y=nl(e*.78,t.top);y.position.x=e*.505,y.rotation.y=Math.PI/2,r.add(d,p,y)}return r},gP=()=>{const e=g.useRef(null);return g.useEffect(()=>{const t=e.current;if(!t)return;const n=new Mb,r=new qb(42,1,.1,100);r.position.set(0,1.2,13);const i=new Ob({alpha:!0,antialias:!0,powerPreference:"high-performance"});i.setPixelRatio(Math.min(window.devicePixelRatio,2)),i.setClearColor(0,0),i.outputColorSpace=Ub,i.toneMapping=_b,i.toneMappingExposure=1.15,t.appendChild(i.domElement),n.add(new Fb(10412031,.72));const a=new Vb(12449791,4.2);a.position.set(4,6,8),n.add(a);const s=new rd(12124016,32,20);s.position.set(-5,2,4),n.add(s);const c=new rd(3723263,26,18);c.position.set(5,-3,2),n.add(c);const l=rl(2.25,Po[0],!0);l.rotation.set(-.35,.65,.08),n.add(l);const h=rl(.72,Po[3]);h.scale.setScalar(.82),l.add(h);const u=Array.from({length:11},(S,N)=>{const I=N%3,O=new Mg;O.rotation.set([.35,1.05,-.62][I],[-.22,.28,-.48][I],N*.71),n.add(O);const R=rl([.38,.5,.32,.44][N%4],Po[N%Po.length]);return R.position.x=[3.5,4.35,5.15][I]+N%4*.08,R.rotation.set(N*.41,N*.63,N*.28),O.add(R),{pivot:O,cube:R,speed:[.34,-.24,.18][I],phase:N*.9}}),d=[{radius:3.35,tube:.012,color:6809849,rotation:[1.2,.12,.1]},{radius:4.5,tube:.009,color:10741301,rotation:[.82,.7,-.3]},{radius:5.55,tube:.007,color:5101567,rotation:[1.42,-.42,.5]}].map(({radius:S,tube:N,color:I,rotation:O})=>{const R=new va(new Bb(S,N,8,160),new Oh({color:I,transparent:!0,opacity:.26}));return R.rotation.set(O[0],O[1],O[2]),n.add(R),R}),p=new zb(6.2,1),y=new ya(new Yo(p),new Xo({color:5756904,transparent:!0,opacity:.055}));n.add(y);const x=190,v=new Float32Array(x*3);for(let S=0;S<x;S+=1){const N=7+Math.random()*11,I=Math.random()*Math.PI*2,O=Math.acos(2*Math.random()-1);v[S*3]=N*Math.sin(O)*Math.cos(I),v[S*3+1]=N*Math.cos(O),v[S*3+2]=N*Math.sin(O)*Math.sin(I)}const k=new Hb;k.setAttribute("position",new $b(v,3));const f=new id(k,new Wb({color:12055551,size:.035,transparent:!0,opacity:.62}));n.add(f);const m=new Zb;let b=0;const w=new Gb,T=()=>{const{clientWidth:S,clientHeight:N}=t;i.setSize(S,N,!1),r.aspect=S/Math.max(N,1),r.updateProjectionMatrix()},C=S=>{m.x=S.clientX/window.innerWidth-.5,m.y=S.clientY/window.innerHeight-.5},P=()=>{const S=w.getElapsedTime();l.rotation.y=.65+S*.16,l.rotation.x=-.35+Math.sin(S*.45)*.1,l.getObjectByName("cube-frame").rotation.set(S*.18,-S*.24,S*.12),l.getObjectByName("cube-energy").rotation.set(S*.7,S*-.9,S*.45),h.rotation.x=S*-.8,h.rotation.y=S*.65,u.forEach(({pivot:N,cube:I,speed:O,phase:R})=>{N.rotation.z+=O*.008,I.rotation.x+=.006,I.rotation.y+=.009,I.position.y=Math.sin(S*.8+R)*.18,I.scale.setScalar(.88+Math.sin(S*.65+R)*.12),I.getObjectByName("cube-frame").rotation.y=S*-.5+R,I.getObjectByName("cube-energy").rotation.x=S*1.1+R}),d.forEach((N,I)=>{N.rotation.z+=(I%2?-1:1)*8e-4}),y.rotation.y=S*-.025,f.rotation.y=S*.006,r.position.x+=(m.x*1.2-r.position.x)*.025,r.position.y+=(-m.y*.8+1.2-r.position.y)*.025,r.lookAt(0,0,0),i.render(n,r),b=requestAnimationFrame(P)};return T(),P(),window.addEventListener("resize",T),window.addEventListener("pointermove",C,{passive:!0}),()=>{cancelAnimationFrame(b),window.removeEventListener("resize",T),window.removeEventListener("pointermove",C),n.traverse(S=>{(S instanceof va||S instanceof ya||S instanceof id)&&(S.geometry.dispose(),(Array.isArray(S.material)?S.material:[S.material]).forEach(I=>I.dispose()))}),i.dispose(),t.removeChild(i.domElement)}},[]),o.jsx("div",{ref:e,className:"cyber-webgl absolute inset-0"})},mP=()=>{const e=g.useRef(null),t=g.useRef(null);return g.useEffect(()=>{const n=e.current,r=t.current,i=r==null?void 0:r.getContext("2d");if(!n||!r||!i)return;let a=0,s=[],c=[],l=window.innerWidth,h=window.innerHeight,u=0;const d=window.matchMedia("(prefers-reduced-motion: reduce)").matches,p={x:l/2,y:h/2,targetX:l/2,targetY:h/2,active:!1},y=()=>{const w=p.x/l-.5,T=p.y/h-.5;n.style.setProperty("--mx",`${w}`),n.style.setProperty("--my",`${T}`),n.style.setProperty("--back-shift",`${w*-14}px`),n.style.setProperty("--floor-shift",`${w*24}px`),n.style.setProperty("--hud-shift",`${T*22}px`),n.style.setProperty("--core-rx",`${-18+T*-18}deg`),n.style.setProperty("--core-ry",`${35+w*28}deg`),n.style.setProperty("--scene-x",`${w*20}px`),n.style.setProperty("--scene-y",`${T*14}px`),n.style.setProperty("--scene-rx",`${T*-5}deg`),n.style.setProperty("--scene-ry",`${w*7}deg`),n.style.setProperty("--far-x",`${w*34}px`),n.style.setProperty("--far-y",`${T*20}px`),n.style.setProperty("--near-x",`${w*-42}px`),n.style.setProperty("--near-y",`${T*-28}px`),n.style.setProperty("--panel-x",`${w*28}px`),n.style.setProperty("--panel-y",`${T*18}px`),n.style.setProperty("--panel-inverse-x",`${w*-32}px`),n.style.setProperty("--panel-inverse-y",`${T*-20}px`),n.style.setProperty("--px",`${p.x}px`),n.style.setProperty("--py",`${p.y}px`)},x=()=>{const w=Math.min(92,Math.max(42,Math.floor(l/18)));s=Array.from({length:w},()=>({x:Math.random()*l,y:Math.random()*h,vx:(Math.random()-.5)*.12,vy:(Math.random()-.5)*.12,size:Math.random()*1.35+.45,depth:Math.random()*.75+.25,phase:Math.random()*Math.PI*2}))},v=()=>{l=window.innerWidth,h=window.innerHeight;const w=Math.min(window.devicePixelRatio||1,2);r.width=l*w,r.height=h*w,r.style.width=`${l}px`,r.style.height=`${h}px`,i.setTransform(w,0,0,w,0,0),p.x=p.targetX=l/2,p.y=p.targetY=h/2,x(),y()},k=w=>{p.targetX=w.clientX,p.targetY=w.clientY,p.active=!0},f=()=>{p.targetX=l/2,p.targetY=h/2,p.active=!1},m=w=>{c.push({x:w.clientX,y:w.clientY,radius:12,alpha:.38}),c.length>4&&c.shift()},b=()=>{u+=1,p.x+=(p.targetX-p.x)*(d?1:.075),p.y+=(p.targetY-p.y)*(d?1:.075),y(),i.clearRect(0,0,l,h),i.lineWidth=.7,c=c.filter(w=>w.alpha>.012),c.forEach(w=>{w.radius+=1.8,w.alpha*=.975,i.beginPath(),i.arc(w.x,w.y,w.radius,0,Math.PI*2),i.strokeStyle=`rgba(145, 238, 255, ${w.alpha})`,i.stroke()}),s.forEach((w,T)=>{const C=w.x-p.x,P=w.y-p.y,S=Math.max(1,Math.hypot(C,P));if(p.active&&S<175){const I=(1-S/175)*.018*w.depth;w.vx+=C/S*I,w.vy+=P/S*I}w.vx*=.992,w.vy*=.992,d||(w.x+=w.vx+Math.sin(u*.006+w.phase)*.035*w.depth,w.y+=w.vy+Math.cos(u*.005+w.phase)*.025*w.depth),w.x<-10&&(w.x=l+10),w.x>l+10&&(w.x=-10),w.y<-10&&(w.y=h+10),w.y>h+10&&(w.y=-10);const N=.2+w.depth*.32;i.beginPath(),i.arc(w.x,w.y,w.size*w.depth,0,Math.PI*2),i.fillStyle=`rgba(135, 228, 242, ${N})`,i.fill();for(let I=T+1;I<s.length;I+=1){const O=s[I],R=Math.hypot(w.x-O.x,w.y-O.y);R<112&&(i.beginPath(),i.moveTo(w.x,w.y),i.lineTo(O.x,O.y),i.strokeStyle=`rgba(115, 220, 238, ${.07*(1-R/112)*w.depth})`,i.stroke())}S<220&&(i.beginPath(),i.moveTo(w.x,w.y),i.lineTo(p.x,p.y),i.strokeStyle=`rgba(185, 236, 150, ${.16*(1-S/220)*w.depth})`,i.stroke())}),i.beginPath(),i.arc(p.x,p.y,30,0,Math.PI*2),i.strokeStyle="rgba(150, 235, 245, .1)",i.stroke(),a=requestAnimationFrame(b)};return v(),b(),window.addEventListener("resize",v),window.addEventListener("pointermove",k,{passive:!0}),window.addEventListener("pointerleave",f),window.addEventListener("pointerdown",m,{passive:!0}),()=>{cancelAnimationFrame(a),window.removeEventListener("resize",v),window.removeEventListener("pointermove",k),window.removeEventListener("pointerleave",f),window.removeEventListener("pointerdown",m)}},[]),o.jsxs("div",{ref:e,className:"effect-scene effect-scene-3d fixed inset-0 z-0 overflow-hidden",children:[o.jsx("canvas",{ref:t,className:"cyber-network absolute inset-0"}),o.jsx("div",{className:"cyber-atmosphere cyber-atmosphere-a"}),o.jsx("div",{className:"cyber-atmosphere cyber-atmosphere-b"}),o.jsx("div",{className:"cyber-aurora cyber-aurora-a"}),o.jsx("div",{className:"cyber-aurora cyber-aurora-b"}),o.jsx("div",{className:"cyber-depth-lines"}),o.jsxs("div",{className:"cyber-signal-field",children:[o.jsx("i",{}),o.jsx("i",{}),o.jsx("i",{}),o.jsx("i",{}),o.jsx("i",{}),o.jsx("i",{}),o.jsx("i",{}),o.jsx("i",{})]}),o.jsx("div",{className:"cyber-spotlight"}),o.jsx("div",{className:"cyber-grid cyber-grid-back"}),o.jsx("div",{className:"cyber-grid cyber-grid-floor"}),o.jsx(gP,{}),o.jsxs("div",{className:"cyber-observatory",children:[o.jsxs("div",{className:"cyber-axis",children:[o.jsx("i",{}),o.jsx("i",{}),o.jsx("i",{})]}),o.jsxs("div",{className:"cyber-beacons",children:[o.jsx("i",{}),o.jsx("i",{}),o.jsx("i",{}),o.jsx("i",{}),o.jsx("i",{}),o.jsx("i",{})]}),o.jsxs("div",{className:"cyber-core-plinth",children:[o.jsx("i",{}),o.jsx("i",{}),o.jsx("i",{})]})]}),o.jsxs("div",{className:"cyber-glass cyber-glass-a",children:[o.jsx("span",{children:"VECTOR"}),o.jsx("b",{children:"12.08"}),o.jsx("i",{})]}),o.jsxs("div",{className:"cyber-glass cyber-glass-b",children:[o.jsx("span",{children:"ORBIT"}),o.jsx("b",{children:"STABLE"}),o.jsx("i",{})]}),o.jsxs("div",{className:"cyber-hud cyber-hud-left",children:[o.jsx("span",{children:"SYS / DEPTH"}),o.jsx("b",{children:"03.24"}),o.jsx("i",{})]}),o.jsxs("div",{className:"cyber-hud cyber-hud-right",children:[o.jsx("span",{children:"FIELD / LIVE"}),o.jsx("b",{children:"97.4%"}),o.jsx("i",{})]}),o.jsx("div",{className:"cyber-cursor-halo"}),o.jsx("div",{className:"cyber-vignette"}),o.jsx("div",{className:"cyber-scanlines"}),o.jsx("div",{className:"effect-label left-5 top-24",children:"CYBER OBSERVATORY / INTERACTIVE"})]})},fP=()=>{const{currentEffect:e}=Ly();switch(e){case"christmas":return o.jsx(dP,{});case"tet":return o.jsx(pP,{});case"parallax":return o.jsx(mP,{});default:return null}};var Es=["light","dark"],Yu="(prefers-color-scheme: dark)",vP=typeof window>"u",Xu=g.createContext(void 0),yP={setTheme:e=>{},themes:[]},My=()=>{var e;return(e=g.useContext(Xu))!=null?e:yP},bP=e=>g.useContext(Xu)?e.children:g.createElement(xP,{...e}),wP=["light","dark"],xP=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:n=!0,enableColorScheme:r=!0,storageKey:i="theme",themes:a=wP,defaultTheme:s=n?"system":"light",attribute:c="data-theme",value:l,children:h,nonce:u})=>{let[d,p]=g.useState(()=>eg(i,s)),[y,x]=g.useState(()=>eg(i)),v=l?Object.values(l):a,k=g.useCallback(w=>{let T=w;if(!T)return;w==="system"&&n&&(T=tg());let C=l?l[T]:T,P=t?TP():null,S=document.documentElement;if(c==="class"?(S.classList.remove(...v),C&&S.classList.add(C)):C?S.setAttribute(c,C):S.removeAttribute(c),r){let N=Es.includes(s)?s:null,I=Es.includes(T)?T:N;S.style.colorScheme=I}P==null||P()},[]),f=g.useCallback(w=>{let T=typeof w=="function"?w(w):w;p(T);try{localStorage.setItem(i,T)}catch{}},[e]),m=g.useCallback(w=>{let T=tg(w);x(T),d==="system"&&n&&!e&&k("system")},[d,e]);g.useEffect(()=>{let w=window.matchMedia(Yu);return w.addListener(m),m(w),()=>w.removeListener(m)},[m]),g.useEffect(()=>{let w=T=>{if(T.key!==i)return;let C=T.newValue||s;f(C)};return window.addEventListener("storage",w),()=>window.removeEventListener("storage",w)},[f]),g.useEffect(()=>{k(e??d)},[e,d]);let b=g.useMemo(()=>({theme:d,setTheme:f,forcedTheme:e,resolvedTheme:d==="system"?y:d,themes:n?[...a,"system"]:a,systemTheme:n?y:void 0}),[d,f,e,y,n,a]);return g.createElement(Xu.Provider,{value:b},g.createElement(kP,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:n,enableColorScheme:r,storageKey:i,themes:a,defaultTheme:s,attribute:c,value:l,children:h,attrs:v,nonce:u}),h)},kP=g.memo(({forcedTheme:e,storageKey:t,attribute:n,enableSystem:r,enableColorScheme:i,defaultTheme:a,value:s,attrs:c,nonce:l})=>{let h=a==="system",u=n==="class"?`var d=document.documentElement,c=d.classList;${`c.remove(${c.map(x=>`'${x}'`).join(",")})`};`:`var d=document.documentElement,n='${n}',s='setAttribute';`,d=i?Es.includes(a)&&a?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${a}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",p=(x,v=!1,k=!0)=>{let f=s?s[x]:x,m=v?x+"|| ''":`'${f}'`,b="";return i&&k&&!v&&Es.includes(x)&&(b+=`d.style.colorScheme = '${x}';`),n==="class"?v||f?b+=`c.add(${m})`:b+="null":f&&(b+=`d[s](n,${m})`),b},y=e?`!function(){${u}${p(e)}}()`:r?`!function(){try{${u}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${h})){var t='${Yu}',m=window.matchMedia(t);if(m.media!==t||m.matches){${p("dark")}}else{${p("light")}}}else if(e){${s?`var x=${JSON.stringify(s)};`:""}${p(s?"x[e]":"e",!0)}}${h?"":"else{"+p(a,!1,!1)+"}"}${d}}catch(e){}}()`:`!function(){try{${u}var e=localStorage.getItem('${t}');if(e){${s?`var x=${JSON.stringify(s)};`:""}${p(s?"x[e]":"e",!0)}}else{${p(a,!1,!1)};}${d}}catch(t){}}();`;return g.createElement("script",{nonce:l,dangerouslySetInnerHTML:{__html:y}})}),eg=(e,t)=>{if(vP)return;let n;try{n=localStorage.getItem(e)||void 0}catch{}return n||t},TP=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},tg=e=>(e||(e=window.matchMedia(Yu)),e.matches?"dark":"light");const CP=()=>{const{resolvedTheme:e}=My(),{pathname:t}=At(),n=t==="/graduation"||t.startsWith("/graduation/");return g.useEffect(()=>{const r=document.querySelector('meta[name="theme-color"]');r==null||r.setAttribute("content",n?"#f7f3ea":e==="dark"?"#090c11":"#f7f4eb")},[n,e]),null},Ao=[{value:"system",label:"Hệ thống",icon:E1},{value:"dark",label:"Tối",icon:M1},{value:"light",label:"Sáng",icon:Q1}],ng=()=>{const{language:e}=qe(),{theme:t="system",setTheme:n}=My(),r=Ao.findIndex(h=>h.value===t),i=r===-1?0:r,a=Ao[i],s=Ao[(i+1)%Ao.length],c=a.icon,l=e==="vi"?{system:"Hệ thống",dark:"Tối",light:"Sáng"}:{system:"System",dark:"Dark",light:"Light"};return o.jsx(ne,{variant:"outline",size:"icon",className:"border-border/80 bg-background/50","aria-label":`${l[a.value]} → ${l[s.value]}`,title:`${l[a.value]} → ${l[s.value]}`,onClick:()=>n(s.value),children:o.jsx(c,{className:"h-4 w-4"})})},rg=()=>{const{language:e,toggleLanguage:t}=qe(),n=e==="vi"?"English":"Tiếng Việt";return o.jsxs(ne,{variant:"outline",size:"sm",className:"h-10 gap-2 border-border/80 bg-background/50 px-3 font-mono text-xs font-semibold tracking-[.1em]","aria-label":`Switch to ${n}`,title:`Switch to ${n}`,onClick:t,children:[o.jsx(j1,{className:"h-3.5 w-3.5"}),e.toUpperCase()]})},SP=()=>{const{t:e}=qe(),t=At(),[n,r]=g.useState(!1),i=[{path:"/",label:e("nav.home"),index:"00"},{path:"/projects",label:e("nav.projects"),index:"01"},{path:"/blog",label:e("nav.blog"),index:"02"},{path:"/about",label:e("nav.about"),index:"03"},{path:"/contact",label:e("nav.contact"),index:"04"}],a=s=>s==="/"?t.pathname==="/":t.pathname.startsWith(s);return g.useEffect(()=>{r(!1)},[t.pathname]),o.jsx("header",{className:"fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl",children:o.jsxs("div",{className:"container mx-auto px-4",children:[o.jsxs("nav",{className:"flex h-[72px] items-center justify-between",children:[o.jsxs(ke,{to:"/",className:"group flex items-center gap-3",children:[o.jsx("span",{className:"brand-logo flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-primary/35 bg-primary/[.07] p-1 shadow-sm transition-all duration-300 group-hover:border-primary/70 group-hover:bg-primary/10",children:o.jsx("img",{src:"/logo-rm-khongvien.png",alt:"",className:"h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"})}),o.jsxs("span",{children:[o.jsx("span",{className:"block font-mono text-sm font-semibold leading-none",children:"HAI IT"}),o.jsx("span",{className:"mt-1 block font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground",children:"systems journal"})]})]}),o.jsx("ul",{className:"hidden items-center gap-1 md:flex",children:i.map(s=>o.jsx("li",{children:o.jsxs(ke,{to:s.path,className:`flex items-baseline gap-2 rounded-md px-3 py-2 font-mono text-xs transition-colors ${a(s.path)?"bg-primary/10 text-primary":"text-muted-foreground hover:bg-muted hover:text-foreground"}`,children:[o.jsx("span",{className:"text-[11px] opacity-65",children:s.index}),s.label]})},s.path))}),o.jsxs("div",{className:"hidden items-center gap-2 md:flex",children:[o.jsx(rg,{}),o.jsx(ng,{}),o.jsx(ne,{asChild:!0,variant:"outline",size:"sm",className:"border-primary/30 font-mono text-xs",children:o.jsxs(ke,{to:"/contact",children:[e("nav.connect")," ",o.jsx(Ct,{className:"ml-2 h-3.5 w-3.5"})]})})]}),o.jsx(ne,{variant:"ghost",size:"icon",className:"md:hidden","aria-label":"Mở menu",onClick:()=>r(!n),children:n?o.jsx(Fa,{className:"h-5 w-5"}):o.jsx(L1,{className:"h-5 w-5"})})]}),n&&o.jsxs("div",{className:"border-t border-border/60 py-4 md:hidden",children:[i.map(s=>o.jsxs(ke,{to:s.path,onClick:()=>r(!1),className:`flex items-center justify-between rounded-lg px-4 py-3 font-mono text-sm ${a(s.path)?"bg-primary/10 text-primary":"text-muted-foreground"}`,children:[s.label,o.jsxs("span",{className:"text-xs opacity-65",children:["/",s.index]})]},s.path)),o.jsxs("div",{className:"mt-3 flex items-center justify-between gap-3 border-t border-border/60 px-4 pt-4",children:[o.jsxs("span",{className:"font-mono text-xs uppercase tracking-[.14em] text-muted-foreground",children:[e("nav.language")," / ",e("nav.theme")]}),o.jsxs("div",{className:"flex gap-2",children:[o.jsx(rg,{}),o.jsx(ng,{})]})]})]})]})})},hc=[{id:"languages",name:"Programming Languages",description:"Deep dives into various programming languages, syntax, paradigms, and best use cases",icon:"Code2",color:"category-languages"},{id:"frameworks",name:"Frameworks & Libraries",description:"Comprehensive guides on modern frameworks and libraries for web, mobile, and backend development",icon:"Layers",color:"category-frameworks"},{id:"architecture",name:"Software Architecture",description:"System design principles, architectural patterns, and scalability strategies",icon:"Building2",color:"category-architecture"},{id:"patterns",name:"Design Patterns",description:"Classic and modern design patterns with practical implementations",icon:"Shapes",color:"category-patterns"},{id:"practices",name:"Best Practices",description:"Coding standards, clean code principles, and industry best practices",icon:"CheckCircle",color:"category-practices"},{id:"roadmap",name:"Learning Roadmaps",description:"Structured learning paths for different programming domains and skill levels",icon:"Map",color:"category-roadmap"}],Nh=[{id:"capital-weather-tracker",title:"Capital Weather Tracker",description:"Hệ thống xử lý dữ liệu thời tiết thời gian thực cho các thủ đô trên thế giới.",longDescription:"Ứng dụng thu thập và hiển thị dữ liệu thời tiết real-time từ OpenWeatherMap API, xử lý và visualize dữ liệu cho tất cả các thủ đô trên thế giới với cập nhật liên tục.",technologies:["Python","OpenWeatherMap API","Data Processing"],github:"https://github.com/haihttt974/capital-weather-tracker",image:"/placeholder.svg",featured:!0},{id:"sorting-visualizer",title:"Sorting Visualizer",description:"Ứng dụng trực quan hóa các thuật toán sắp xếp với animation mượt mà.",longDescription:"Công cụ giáo dục giúp hiểu rõ cách hoạt động của các thuật toán sắp xếp như Bubble Sort, Quick Sort, Merge Sort thông qua visualization trực quan.",technologies:["TypeScript","Algorithms","Visualization"],github:"https://github.com/haihttt974/sorting-visualizer",image:"/placeholder.svg",featured:!0},{id:"bookstore-aspnet",title:"BookStore ASP.NET",description:"Website quản lý hiệu sách hoàn chỉnh với ASP.NET Core.",longDescription:"Hệ thống quản lý hiệu sách full-stack với chức năng CRUD, quản lý kho, đơn hàng và báo cáo doanh thu. Xây dựng trên ASP.NET Core và SQL Server.",technologies:["C#","ASP.NET Core","SQL Server","Entity Framework"],github:"https://github.com/haihttt974/thltweb-BookStore-asp.net",image:"/placeholder.svg",featured:!0},{id:"gplx-mobile-app",title:"Ôn thi GPLX Mobile",description:"Ứng dụng di động ôn thi giấy phép lái xe với Flutter.",longDescription:"Ứng dụng mobile cross-platform giúp người dùng ôn luyện lý thuyết thi bằng lái xe với bộ câu hỏi đầy đủ, thi thử và theo dõi tiến độ học tập.",technologies:["Dart","Flutter","Mobile Development"],github:"https://github.com/haihttt974/ltmobile_gplx",image:"/placeholder.svg"},{id:"temperature-influxdb",title:"Temperature VN InfluxDB",description:"Hệ thống thu thập và lưu trữ dữ liệu nhiệt độ vào InfluxDB.",longDescription:"Pipeline dữ liệu IoT thu thập nhiệt độ từ các nguồn khác nhau tại Việt Nam, lưu trữ vào InfluxDB cho phân tích time-series và visualization.",technologies:["Python","InfluxDB","IoT","Time Series"],github:"https://github.com/haihttt974/send-temperature-vn-influxdb",image:"/placeholder.svg"},{id:"christmas-tree",title:"Christmas Tree Effect",description:"Hiệu ứng cây thông Noel tương tác với HTML/CSS/JS.",longDescription:"Trang web hiệu ứng Giáng Sinh với cây thông 3D tương tác, tuyết rơi và ánh sáng lung linh. Hoàn toàn viết bằng vanilla HTML, CSS và JavaScript.",technologies:["HTML5","CSS3","JavaScript","Animation"],github:"https://github.com/haihttt974/christmas_tree.github.io",demo:"https://haihttt974.github.io/christmas_tree.github.io/",image:"/placeholder.svg"},{id:"countdown-newyear",title:"Countdown New Year",description:"Đồng hồ đếm ngược năm mới với hiệu ứng đẹp mắt.",longDescription:"Trang countdown đón năm mới với thiết kế hiện đại, hiệu ứng confetti và animation mượt mà khi đồng hồ điểm 0.",technologies:["HTML5","CSS3","JavaScript"],github:"https://github.com/haihttt974/CountdownNewYear.github.io",demo:"https://haihttt974.github.io/CountdownNewYear.github.io/",image:"/placeholder.svg"},{id:"firework-effect",title:"Firework Effect",description:"Hiệu ứng pháo hoa sống động cho các dịp lễ hội.",longDescription:"Mô phỏng pháo hoa với hiệu ứng particle system, màu sắc rực rỡ và âm thanh. Phù hợp cho các trang countdown và lễ hội.",technologies:["HTML5","Canvas","JavaScript","Animation"],github:"https://github.com/haihttt974/Hfirework.github.io",demo:"https://haihttt974.github.io/Hfirework.github.io/",image:"/placeholder.svg"}],be={name:"Lê Duy Hải",nickname:"Hai IT",username:"haihttt974",title:"Information Systems Developer",subtitle:"Database • Server-side • DevOps",avatar:"https://avatars.githubusercontent.com/u/202379592?v=4",address:"Đông Hưng Thuận, Ho Chi Minh City",bio:`Tôi là một chuyên gia về Hệ thống thông tin (Information Systems), tập trung vào việc xây dựng các giải pháp có khả năng mở rộng (Scalable) và tin cậy (Reliable).

Chuyên môn của tôi bao gồm: Cơ sở dữ liệu, Server-side Development và DevOps. Tôi đam mê việc tối ưu hóa hiệu suất hệ thống và xây dựng các kiến trúc phần mềm bền vững.

Ngoài lập trình, tôi còn là gia sư Toán, chia sẻ kiến thức và giúp đỡ học sinh phát triển tư duy logic.`,skills:[{category:"Ngôn ngữ lập trình",items:["C","C++","C#","Java","PHP","Python","JavaScript","TypeScript","Dart"]},{category:"Backend & Database",items:[".NET Core","ASP.NET","MySQL","SQL Server","MariaDB","InfluxDB"]},{category:"DevOps & Tools",items:["Docker","Git","GitHub","GitLab","Google Cloud","Fly.io","Postman","Swagger"]},{category:"Frontend & Design",items:["HTML5","CSS3","Bootstrap","jQuery","Figma","Canva"]},{category:"Data Science / AI",items:["TensorFlow","Keras","NumPy","Pandas","scikit-learn","SciPy"]}],social:{github:"https://github.com/haihttt974",linkedin:"https://www.linkedin.com/in/haild/",facebook:"https://facebook.com/haiit.974",instagram:"https://instagram.com/haiit.974",tiktok:"https://tiktok.com/@haiit.974",twitter:"https://x.com/haiit974",email:"ld.hai.insys@gmail.com",secondaryEmail:"leduyhai090704@gmail.com"},socialLinks:[{name:"GitHub",url:"https://github.com/haihttt974",icon:"Github"},{name:"LinkedIn",url:"https://www.linkedin.com/in/haild/",icon:"Linkedin"},{name:"Facebook",url:"https://facebook.com/haiit.974",icon:"Facebook"},{name:"Instagram",url:"https://instagram.com/haiit.974",icon:"Instagram"},{name:"TikTok",url:"https://tiktok.com/@haiit.974",icon:"Music2"},{name:"X (Twitter)",url:"https://x.com/haiit974",icon:"Twitter"},{name:"Primary Email",url:"mailto:ld.hai.insys@gmail.com",icon:"Mail"},{name:"Secondary Email",url:"mailto:leduyhai090704@gmail.com",icon:"Mail"}],experience:[{title:"Information Systems Developer",company:"Freelance & Personal Projects",period:"2023 - Hiện tại",description:"Phát triển các ứng dụng web, mobile và hệ thống xử lý dữ liệu. Chuyên sâu về Database, Server-side và DevOps."},{title:"Math Tutor",company:"Private Tutoring",period:"2022 - Hiện tại",description:"Gia sư Toán học, giúp học sinh phát triển tư duy logic và giải quyết vấn đề."}]},PP=()=>{const{t:e}=qe();return o.jsx("footer",{className:"border-t border-border/70 bg-card/35",children:o.jsxs("div",{className:"container mx-auto px-4 py-12",children:[o.jsxs("div",{className:"grid gap-10 md:grid-cols-[1.4fr_.6fr_.6fr]",children:[o.jsxs("div",{children:[o.jsx("p",{className:"eyebrow mb-4",children:e("footer.eyebrow")}),o.jsx("h2",{className:"max-w-xl text-2xl font-semibold md:text-3xl",children:e("footer.title")})]}),o.jsxs("div",{className:"font-mono text-xs",children:[o.jsx("p",{className:"mb-4 uppercase tracking-[.18em] text-muted-foreground",children:e("footer.navigate")}),o.jsxs("div",{className:"space-y-3",children:[o.jsx(ke,{className:"block hover:text-primary",to:"/projects",children:e("footer.work")}),o.jsx(ke,{className:"block hover:text-primary",to:"/blog",children:e("footer.notes")}),o.jsx(ke,{className:"block hover:text-primary",to:"/about",children:e("footer.profile")}),o.jsx(ke,{className:"block hover:text-primary",to:"/contact",children:e("footer.contact")})]})]}),o.jsxs("div",{className:"font-mono text-xs",children:[o.jsx("p",{className:"mb-4 uppercase tracking-[.18em] text-muted-foreground",children:e("footer.connect")}),o.jsxs("div",{className:"space-y-3",children:[o.jsxs("a",{className:"flex items-center gap-2 hover:text-primary",href:be.social.github,target:"_blank",rel:"noreferrer",children:[o.jsx(Cr,{className:"h-3.5 w-3.5"}),"GitHub"]}),o.jsxs("a",{className:"flex items-center gap-2 hover:text-primary",href:be.social.linkedin,target:"_blank",rel:"noreferrer",children:[o.jsx(Nv,{className:"h-3.5 w-3.5"}),"LinkedIn"]}),o.jsxs(ke,{className:"flex items-center gap-2 hover:text-primary",to:"/contact",children:[o.jsx(Ai,{className:"h-3.5 w-3.5"}),e("footer.feedback")," ",o.jsx(Ct,{className:"h-3 w-3"})]}),o.jsxs("a",{className:"flex items-center gap-2 hover:text-primary",href:`mailto:${be.social.email}`,children:[o.jsx(Ai,{className:"h-3.5 w-3.5"}),"Email ",o.jsx(Ct,{className:"h-3 w-3"})]})]})]})]}),o.jsxs("div",{className:"mt-12 flex flex-col gap-2 border-t border-border/70 pt-6 font-mono text-xs uppercase tracking-[.14em] text-muted-foreground sm:flex-row sm:justify-between",children:[o.jsxs("span",{children:["© ",new Date().getFullYear()," Lê Duy Hải / Hai IT"]}),o.jsx("span",{children:e("footer.designed")})]})]})})},Yn=({children:e})=>{const{pathname:t,search:n}=At();return g.useEffect(()=>{t==="/blog"&&window.sessionStorage.getItem(`blog-scroll:${t}${n}`)||window.scrollTo({top:0,behavior:"instant"})},[t,n]),o.jsxs("div",{className:"relative flex min-h-screen flex-col overflow-hidden",children:[o.jsx("div",{className:"page-grid pointer-events-none fixed inset-0 z-[-1]"}),o.jsx(SP,{}),o.jsx("main",{className:"flex-1 pt-[72px]",children:e}),o.jsx(PP,{})]})},AP=()=>{const{t:e,language:t}=qe(),n=g.useRef(null),r=t==="vi"?["Hệ thống backend","Dữ liệu & database","Thực hành DevOps"]:["Backend systems","Data & database","DevOps practice"];return g.useEffect(()=>{const i=n.current;if(!i||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const a=c=>{const l=i.getBoundingClientRect(),h=(c.clientX-l.left)/l.width-.5,u=(c.clientY-l.top)/l.height-.5;i.style.setProperty("--portrait-x",`${h*10}px`),i.style.setProperty("--portrait-y",`${u*10}px`),i.style.setProperty("--spot-x",`${(h+.5)*100}%`),i.style.setProperty("--spot-y",`${(u+.5)*100}%`)},s=()=>{i.style.setProperty("--portrait-x","0px"),i.style.setProperty("--portrait-y","0px"),i.style.setProperty("--spot-x","50%"),i.style.setProperty("--spot-y","50%")};return i.addEventListener("pointermove",a),i.addEventListener("pointerleave",s),()=>{i.removeEventListener("pointermove",a),i.removeEventListener("pointerleave",s)}},[]),o.jsxs("section",{className:"relative overflow-hidden border-b border-border/70",children:[o.jsx("div",{className:"hero-orbit pointer-events-none absolute right-[4%] top-[12%] h-72 w-72 rounded-full border border-primary/15"}),o.jsx("div",{className:"absolute -right-24 top-10 h-[34rem] w-[34rem] rounded-full bg-primary/[.07] blur-[120px]"}),o.jsxs("div",{className:"container relative mx-auto px-4 py-6 md:py-8",children:[o.jsxs("div",{className:"mb-8 flex items-center justify-between border-y border-border/70 py-3 font-mono text-xs uppercase tracking-[.16em] text-muted-foreground",children:[o.jsx("span",{children:e("hero.log")}),o.jsx("span",{className:"hidden sm:block",children:"Vietnam · GMT+7"}),o.jsxs("span",{className:"flex items-center gap-2 text-primary",children:[o.jsx("span",{className:"h-1.5 w-1.5 rounded-full bg-primary"}),e("hero.open")]})]}),o.jsxs("div",{className:"grid items-stretch gap-7 lg:grid-cols-[1.25fr_.75fr]",children:[o.jsxs("div",{className:"flex flex-col justify-between py-2 lg:py-5",children:[o.jsxs("div",{children:[o.jsxs("p",{className:"eyebrow mb-6 animate-fade-in",children:[e("hero.hello")," ",be.nickname]}),o.jsxs("h1",{className:"max-w-4xl text-[clamp(3.15rem,6.8vw,6.8rem)] font-semibold leading-[.98] tracking-[-.075em] animate-slide-up",children:[o.jsx("span",{className:"block whitespace-nowrap",children:e("hero.line1")}),o.jsx("span",{className:"block text-muted-foreground",children:e("hero.line2")}),o.jsx("span",{className:"text-gradient",children:e("hero.line3")})]}),o.jsxs("div",{className:"mt-7 grid max-w-2xl gap-5 border-l border-primary/40 pl-5 sm:grid-cols-[1fr_auto] sm:items-end",children:[o.jsxs("p",{className:"text-base leading-relaxed text-muted-foreground md:text-lg",children:[t==="vi"?"Tôi là":"I am"," ",o.jsx("strong",{className:"font-medium text-foreground",children:be.name}),", ",e("hero.bio")]}),o.jsx(Av,{className:"hidden h-10 w-10 text-primary sm:block"})]})]}),o.jsxs("div",{children:[o.jsxs("div",{className:"mt-7 flex flex-wrap gap-3",children:[o.jsx(ne,{asChild:!0,size:"lg",className:"font-mono text-xs",children:o.jsxs(ke,{to:"/projects",children:[e("hero.work")," ",o.jsx(Ct,{className:"ml-2 h-4 w-4"})]})}),o.jsx(ne,{asChild:!0,size:"lg",variant:"outline",className:"font-mono text-xs",children:o.jsxs(ke,{to:"/blog",children:[o.jsx(d1,{className:"mr-2 h-4 w-4"}),e("hero.notes")]})})]}),o.jsx("div",{className:"mt-7 grid border-y border-border/70 sm:grid-cols-3",children:[["08+",e("hero.repositories")],["09+",e("hero.languages")],["33",e("hero.journal")]].map(([i,a],s)=>o.jsxs("div",{className:`py-4 ${s>0?"border-t border-border/70 sm:border-l sm:border-t-0 sm:pl-5":""}`,children:[o.jsx("span",{className:"font-mono text-xl font-semibold text-primary",children:i}),o.jsx("span",{className:"ml-2 font-mono text-[11px] uppercase tracking-wider text-muted-foreground",children:a})]},a))})]})]}),o.jsxs("aside",{ref:n,className:"portrait-stage journal-card group mx-auto aspect-[4/5] w-full max-w-[440px] animate-slide-up lg:self-center",style:{animationDelay:".12s"},children:[o.jsx("div",{className:"portrait-index absolute -left-4 top-12 z-20 hidden rounded-md border border-primary/30 bg-background/90 px-3 py-2 font-mono text-[11px] uppercase tracking-[.16em] text-primary backdrop-blur md:block",children:"ID / LDH-974"}),o.jsx("div",{className:"portrait-crosshair pointer-events-none absolute left-1/2 top-1/2 z-20 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"}),o.jsx("img",{src:be.avatar,alt:`Chân dung ${be.name}`,className:"portrait-image absolute inset-0 h-full w-full object-cover object-center"}),o.jsx("div",{className:"portrait-light pointer-events-none absolute inset-0 z-10"}),o.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent"}),o.jsxs("div",{className:"absolute inset-x-0 top-0 flex items-center justify-between p-5 font-mono text-[11px] uppercase tracking-[.16em] text-foreground drop-shadow-md",children:[o.jsxs("span",{children:[e("hero.portrait")," / 001"]}),o.jsx("span",{className:"rounded-full border border-white/25 bg-black/25 px-3 py-1.5 backdrop-blur-md",children:"Hai IT"})]}),o.jsxs("div",{className:"absolute inset-x-0 bottom-0 p-5 md:p-7",children:[o.jsx("div",{className:"mb-5 flex flex-wrap gap-2",children:r.map(i=>o.jsx("span",{className:"rounded-full border border-white/20 bg-background/65 px-3 py-1.5 font-mono text-[11px] font-medium uppercase tracking-wider text-foreground backdrop-blur-md",children:i},i))}),o.jsxs("div",{className:"border-t border-white/20 pt-5",children:[o.jsx("p",{className:"text-3xl font-semibold md:text-4xl",children:be.name}),o.jsxs("div",{className:"mt-3 flex flex-wrap items-center justify-between gap-3 font-mono text-xs uppercase tracking-wider text-foreground/80",children:[o.jsx("span",{children:be.title}),o.jsxs("span",{className:"flex items-center gap-1.5",children:[o.jsx(jv,{className:"h-3 w-3 text-primary"})," Vietnam"]})]}),o.jsxs("a",{href:be.social.github,target:"_blank",rel:"noreferrer",className:"mt-5 flex items-center justify-between rounded-lg border border-white/20 bg-background/65 px-4 py-3 font-mono text-xs uppercase tracking-wider backdrop-blur-md transition-colors hover:border-primary hover:text-primary",children:[o.jsxs("span",{className:"flex items-center gap-2",children:[o.jsx(Cr,{className:"h-3.5 w-3.5"})," github.com/haihttt974"]}),o.jsx(Ct,{className:"h-3.5 w-3.5"})]})]})]})]})]}),o.jsx("div",{className:"hero-marquee mt-7 overflow-hidden border-y border-border/70 py-3 font-mono text-[11px] uppercase tracking-[.18em] text-muted-foreground",children:o.jsx("div",{className:"hero-marquee-track flex w-max items-center gap-8",children:[...Array(2)].flatMap((i,a)=>(t==="vi"?["Hệ thống backend","Tư duy dữ liệu","Học tập công khai","Thực hành DevOps","Xây · Quan sát · Giải thích · Cải tiến"]:["Backend systems","Database thinking","Learning in public","DevOps practice","Build · Observe · Explain · Improve"]).map(s=>o.jsxs("span",{className:"flex items-center gap-8",children:[o.jsx("span",{children:s}),o.jsx("span",{className:"text-primary",children:"✦"})]},`${a}-${s}`)))})})]})]})},NP={initial:{opacity:0,y:10},animate:{opacity:1,y:0,transition:{duration:.38,ease:[.22,1,.36,1]}},exit:{opacity:0,y:-6,transition:{duration:.2,ease:[.4,0,1,1]}}},Ei={hidden:{},visible:{transition:{staggerChildren:.065,delayChildren:.04}}},Ri={hidden:{opacity:0,y:18,scale:.985},visible:{opacity:1,y:0,scale:1,transition:{duration:.48,ease:[.22,1,.36,1]}}},uc={hidden:{opacity:0,y:28},visible:{opacity:1,y:0,transition:{duration:.62,ease:[.22,1,.36,1]}}},Li={once:!0,amount:.16},IP=()=>{const{t:e}=qe(),t=tr();return o.jsx(Ve.section,{className:"border-b border-border/70 bg-card/25 py-20 md:py-28",variants:t?void 0:uc,initial:t?!1:"hidden",whileInView:"visible",viewport:Li,children:o.jsxs("div",{className:"container mx-auto px-4",children:[o.jsxs("div",{className:"mb-10 max-w-3xl",children:[o.jsx("p",{className:"eyebrow mb-4",children:e("home.map.eyebrow")}),o.jsxs("h2",{className:"text-4xl md:text-6xl",children:[e("home.map.title1")," ",o.jsx("span",{className:"text-gradient",children:e("home.map.title2")})]}),o.jsx("p",{className:"mt-5 max-w-xl text-muted-foreground",children:e("home.map.desc")})]}),o.jsx(Ve.div,{className:"grid border-l border-t border-border/70 md:grid-cols-2 lg:grid-cols-3",variants:t?void 0:Ei,children:hc.map((n,r)=>o.jsx(Ve.div,{variants:t?void 0:Ri,children:o.jsxs(ke,{to:`/blog?category=${n.id}`,className:"group block min-h-56 border-b border-r border-border/70 bg-background/30 p-6 transition-colors hover:bg-primary/[.04]",children:[o.jsxs("div",{className:"flex items-start justify-between",children:[o.jsxs("span",{className:"font-mono text-xs font-medium text-primary",children:["MAP / 0",r+1]}),o.jsx(Ct,{className:"h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary"})]}),o.jsx("h3",{className:"mt-12 text-xl group-hover:text-primary",children:e(`category.${n.id}`)}),o.jsx("p",{className:"mt-3 text-sm leading-relaxed text-muted-foreground",children:n.description})]})},n.id))})]})})},jP={id:"understanding-solid-principles",title:"Understanding SOLID Principles in Modern Software Development",titleVi:"Hiểu đúng SOLID trong phát triển phần mềm hiện đại",excerpt:"A practical introduction to SOLID principles with TypeScript-oriented examples and guidance on when to apply them.",excerptVi:"Hướng dẫn thực tế về SOLID cùng ví dụ TypeScript và cách áp dụng có chọn lọc trong dự án.",content:`# Understanding SOLID Principles in Modern Software Development

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
- Áp dụng nguyên tắc ở nơi chúng giảm độ phức tạp thật.`,category:"patterns",tags:["SOLID","OOP","TypeScript","Clean Code"],date:"2026-05-31",readTime:"5 min",readTimeVi:"5 phút",featured:!0},EP={id:"react-performance-optimization",title:"React Performance Optimization: Measure Before You Optimize",titleVi:"Tối ưu hiệu năng React: Đo lường trước khi tối ưu",excerpt:"A practical note on finding React performance bottlenecks with profiling tools before applying optimization patterns.",excerptVi:"Ghi chú thực tế về cách tìm điểm nghẽn hiệu năng React bằng profiler trước khi áp dụng các mẫu tối ưu.",content:`# React Performance Optimization: Measure Before You Optimize

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
- Nhớ rằng vấn đề hiệu năng có thể đến từ network, bundle size, ảnh hoặc CSS, không chỉ React.`,category:"frameworks",tags:["React","Performance","JavaScript","Frontend"],date:"2026-05-24",readTime:"5 min",readTimeVi:"5 phút",featured:!0},RP={id:"typescript-advanced-types",title:"Understanding TypeScript Advanced Types",titleVi:"Hiểu các kiểu nâng cao trong TypeScript",excerpt:"A practical introduction to conditional types, mapped types, template literal types, and type inference in TypeScript.",excerptVi:"Giới thiệu thực tế về conditional type, mapped type, template literal type và cơ chế suy luận kiểu trong TypeScript.",content:`# Understanding TypeScript Advanced Types

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
- Validate dữ liệu bên ngoài ở runtime.`,category:"languages",tags:["TypeScript","Types","JavaScript"],date:"2026-05-22",readTime:"7 min",readTimeVi:"7 phút"},LP={id:"microservices-architecture",title:"Microservices Architecture Basics and Trade-offs",titleVi:"Nền tảng Microservices và các trade-off cần hiểu",excerpt:"A practical overview of when microservices help, what they cost, and which design concerns appear early.",excerptVi:"Tổng quan thực tế về khi nào microservices hữu ích, chi phí đi kèm và các vấn đề thiết kế cần biết sớm.",content:`# Microservices Architecture Basics and Trade-offs

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
- Ưu tiên modular monolith cho đến khi nhu cầu phân tán thật sự rõ.`,category:"architecture",tags:["Microservices","Docker","Kubernetes","System Design"],date:"2026-05-26",readTime:"8 min",readTimeVi:"8 phút",featured:!0},DP={id:"clean-code-practices",title:"Writing Clean, Maintainable Code",titleVi:"Viết mã sạch và dễ bảo trì",excerpt:"Practical clean code habits that make software easier to read, change, test, and review without adding unnecessary abstraction.",excerptVi:"Các thói quen clean code thực tế giúp phần mềm dễ đọc, dễ sửa, dễ kiểm thử và dễ review mà không tạo abstraction không cần thiết.",content:`# Writing Clean, Maintainable Code

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
- Ưu tiên sự rõ ràng hữu ích thay vì abstraction hình thức.`,category:"practices",tags:["Clean Code","Refactoring","Best Practices"],date:"2026-05-21",readTime:"5 min",readTimeVi:"5 phút"},MP={id:"frontend-developer-roadmap",title:"Frontend Developer Roadmap for Building Strong Fundamentals",titleVi:"Lộ trình Frontend Developer để xây nền tảng vững",excerpt:"A practical learning path for building solid frontend fundamentals through HTML, CSS, JavaScript, frameworks, testing, and deployment.",excerptVi:"Lộ trình học tập thực tế để xây nền tảng frontend qua HTML, CSS, JavaScript, framework, kiểm thử và triển khai.",content:`# Frontend Developer Roadmap for Building Strong Fundamentals

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
- Tập trung chiều sâu trước khi chạy theo mọi tool mới.`,category:"roadmap",tags:["Roadmap","Frontend","Career","Learning"],date:"2026-05-20",readTime:"8 min",readTimeVi:"8 phút"},qP={id:"typescript-type-system-practical-guide",title:"TypeScript's Type System: From Safer Code to Better Domain Design",titleVi:"Hệ thống kiểu TypeScript: Từ mã an toàn đến thiết kế nghiệp vụ tốt hơn",excerpt:"A practical guide to modeling domain rules with unions, generics, narrowing, and type-safe boundaries instead of treating TypeScript as annotated JavaScript.",excerptVi:"Hướng dẫn thực tế về cách mô hình hóa quy tắc nghiệp vụ bằng union, generic, narrowing và các biên an toàn kiểu dữ liệu.",content:`# TypeScript's Type System: From Safer Code to Better Domain Design

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

TypeScript không thay thế kiểm thử hay xác thực runtime. Sức mạnh thật sự của nó là làm cho các giả định trở nên hữu hình. Khi mô hình kiểu truyền đạt tốt nghiệp vụ, việc triển khai, review, refactor và mở rộng đều trở nên dễ dàng hơn.`,category:"languages",tags:["TypeScript","Type System","Domain Modeling","Generics"],date:"2026-06-13",readTime:"8 min",readTimeVi:"8 phút",featured:!0},OP={id:"python-reliable-applications",title:"Python Beyond Scripts: Structuring Reliable Applications",titleVi:"Python vượt ra ngoài script: Xây dựng ứng dụng đáng tin cậy",excerpt:"How to move from quick Python scripts to maintainable applications with clear boundaries, type hints, dependency management, testing, and observability.",excerptVi:"Cách chuyển từ script Python nhanh sang ứng dụng dễ bảo trì bằng ranh giới rõ ràng, type hint, quản lý dependency, kiểm thử và observability.",content:`# Python Beyond Scripts: Structuring Reliable Applications

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

Python tốt vẫn nên dễ đọc và trực tiếp. Độ tin cậy đến từ ranh giới rõ ràng cùng vòng phản hồi kỷ luật, không phải từ việc biến ứng dụng nhỏ thành một framework trừu tượng.`,category:"languages",tags:["Python","Architecture","Testing","Maintainability"],date:"2026-06-10",readTime:"9 min",readTimeVi:"9 phút"},UP={id:"csharp-modern-backend-guide",title:"Modern C# for Backend Systems: Patterns That Improve Correctness",titleVi:"C# hiện đại cho hệ thống Backend: Những mẫu giúp tăng tính đúng đắn",excerpt:"A focused guide to records, nullable reference types, async workflows, result modeling, and dependency boundaries in modern C# backend applications.",excerptVi:"Hướng dẫn tập trung vào record, nullable reference type, async, mô hình hóa kết quả và ranh giới dependency trong backend C# hiện đại.",content:`# Modern C# for Backend Systems

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

C# tốt nhất không phải là C# thông minh nhất. Mã tốt truyền đạt ràng buộc rõ ràng, xem compiler như một đối tác thiết kế và không để chi tiết hạ tầng lấn át nghiệp vụ.`,category:"languages",tags:["C#",".NET","Backend","Domain Modeling"],date:"2026-06-06",readTime:"9 min",readTimeVi:"9 phút"},_P={id:"javascript-async-patterns",title:"JavaScript Async Patterns: Promises, Async/Await, and Queues",titleVi:"Các mẫu xử lý bất đồng bộ trong JavaScript: Promise, Async/Await và Queue",excerpt:"A practical guide to organizing asynchronous JavaScript with promises, async/await, controlled parallelism, queues, and reliable error handling.",excerptVi:"Hướng dẫn thực tế để tổ chức xử lý bất đồng bộ trong JavaScript bằng Promise, async/await, chạy song song có kiểm soát, queue và xử lý lỗi đáng tin cậy.",content:`# JavaScript Async Patterns: Promises, Async/Await, and Queues

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

Async code có cấu trúc tốt giúp ứng dụng phản hồi nhanh hơn, lỗi rõ ràng hơn và dễ mở rộng hơn khi tính năng ngày càng nhiều.`,category:"languages",tags:["JavaScript","Async/Await","Promises","Concurrency","Frontend"],date:"2026-06-20",readTime:"8 min",readTimeVi:"8 phút"},FP={id:"python-data-pipeline-basics",title:"Python Data Pipeline Basics for Reliable Automation",titleVi:"Nền tảng pipeline dữ liệu Python cho tự động hóa ổn định",excerpt:"A practical structure for building Python data pipelines that ingest, validate, transform, store, and monitor data reliably.",excerptVi:"Cấu trúc thực tế để xây dựng pipeline dữ liệu Python có khả năng thu thập, kiểm tra, biến đổi, lưu trữ và giám sát dữ liệu ổn định.",content:`# Python Data Pipeline Basics for Reliable Automation

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

Khi automation trở thành một phần của workflow thật, độ tin cậy quan trọng hơn code thông minh. Một cấu trúc pipeline rõ ràng giúp script Python trở thành hệ thống có thể phụ thuộc vào.`,category:"languages",tags:["Python","Data Pipeline","Automation","ETL","Backend"],date:"2026-06-18",readTime:"8 min",readTimeVi:"8 phút"},VP={id:"csharp-linq-practical-guide",title:"C# LINQ Practical Guide for Cleaner Business Logic",titleVi:"Hướng dẫn LINQ thực tế trong C# cho business logic sạch hơn",excerpt:"A practical guide to using LINQ for readable filtering, grouping, projection, and business rules without hiding intent or hurting performance.",excerptVi:"Hướng dẫn thực tế để dùng LINQ cho lọc, nhóm, chuyển đổi dữ liệu và business rule dễ đọc mà không che giấu ý định hoặc làm giảm hiệu năng.",content:`# C# LINQ Practical Guide for Cleaner Business Logic

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

Business logic sạch không phải là tránh vòng lặp bằng mọi giá. Điều quan trọng là rule phải dễ nhìn thấy. LINQ là công cụ mạnh cho việc đó khi query kể cùng một câu chuyện với domain.`,category:"languages",tags:["C#","LINQ",".NET","Clean Code","Business Logic"],date:"2026-06-21",readTime:"7 min",readTimeVi:"7 phút"},BP={id:"typescript-generics-cookbook",title:"TypeScript Generics Cookbook for Everyday Components",titleVi:"Cẩm nang TypeScript Generics cho component hằng ngày",excerpt:"Reusable generic patterns for UI components, API helpers, and utility functions.",excerptVi:"Các mẫu generic tái sử dụng cho UI component, API helper và utility function.",content:`# TypeScript Generics Cookbook for Everyday Components

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
- Dùng generic cho select, table, API helper và utility thật sự làm việc với nhiều data shape.`,category:"languages",tags:["TypeScript","Generics","Frontend","Patterns"],date:"2026-06-19",readTime:"7 min",readTimeVi:"7 phút"},zP={id:"react-query-data-fetching",title:"React Query Data Fetching Patterns for Growing Apps",titleVi:"Mẫu fetch dữ liệu với React Query cho ứng dụng đang phát triển",excerpt:"Patterns for caching, invalidation, loading states, and optimistic updates.",excerptVi:"Các mẫu cho cache, invalidation, trạng thái tải và cập nhật lạc quan.",content:`# React Query Data Fetching Patterns for Growing Apps

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
- Tách local UI state khỏi server state.`,category:"frameworks",tags:["React","React Query","Data Fetching","Frontend"],date:"2026-06-01",readTime:"7 min",readTimeVi:"7 phút"},HP={id:"nextjs-routing-strategies",title:"Next.js Routing Strategies for Content and Product Pages",titleVi:"Chiến lược routing Next.js cho trang nội dung và sản phẩm",excerpt:"How to choose route structure, layouts, metadata, and dynamic segments.",excerptVi:"Cách chọn cấu trúc route, layout, metadata và dynamic segment.",content:`# Next.js Routing Strategies for Content and Product Pages

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
- Chuẩn bị redirect trước khi đổi path đã tồn tại.`,category:"frameworks",tags:["Next.js","React","Routing","SEO"],date:"2026-06-17",readTime:"7 min",readTimeVi:"7 phút"},$P={id:"aspnet-core-api-versioning",title:"ASP.NET Core API Versioning Without Breaking Clients",titleVi:"Versioning API ASP.NET Core không làm hỏng client",excerpt:"A compact plan for evolving APIs while keeping existing consumers stable.",excerptVi:"Kế hoạch gọn để phát triển API mà vẫn giữ client hiện tại ổn định.",content:`# ASP.NET Core API Versioning Without Breaking Clients

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
- Deprecate version với timeline và migration note rõ ràng.`,category:"frameworks",tags:["ASP.NET Core","API","Backend","Versioning"],date:"2026-06-16",readTime:"7 min",readTimeVi:"7 phút"},WP={id:"flutter-state-management-options",title:"Flutter State Management Options: Choosing the Right Fit",titleVi:"Các lựa chọn quản lý state trong Flutter: Chọn cách phù hợp",excerpt:"A comparison of state management approaches for small and growing Flutter apps.",excerptVi:"So sánh các cách quản lý state cho ứng dụng Flutter nhỏ và đang mở rộng.",content:`# Flutter State Management Options: Choosing the Right Fit

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
- Giữ team nhất quán thay vì trộn pattern ngẫu nhiên.`,category:"frameworks",tags:["Flutter","Dart","State Management","Mobile"],date:"2026-06-15",readTime:"7 min",readTimeVi:"7 phút"},GP={id:"database-indexing-strategy",title:"Database Indexing Strategy for Faster Queries",titleVi:"Chiến lược indexing database để truy vấn nhanh hơn",excerpt:"A practical guide to choosing indexes based on access patterns and query plans.",excerptVi:"Hướng dẫn chọn index dựa trên pattern truy cập và query plan.",content:`# Database Indexing Strategy for Faster Queries

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
- Xem indexing là một phần của backend design, không chỉ là cách chữa cháy.`,category:"architecture",tags:["Database","SQL","Performance","Backend"],date:"2026-06-14",readTime:"7 min",readTimeVi:"7 phút"},KP={id:"event-driven-architecture-basics",title:"Event-Driven Architecture Basics for Web Systems",titleVi:"Nền tảng kiến trúc hướng sự kiện cho hệ thống web",excerpt:"When events help, when they hurt, and how to keep message flows observable.",excerptVi:"Khi event hữu ích, khi gây hại và cách giữ luồng message dễ quan sát.",content:`# Event-Driven Architecture Basics for Web Systems

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
- Lên kế hoạch retry, dead-letter và schema evolution sớm.`,category:"architecture",tags:["Architecture","Events","Messaging","Scalability"],date:"2026-06-12",readTime:"7 min",readTimeVi:"7 phút"},QP={id:"api-gateway-design-notes",title:"API Gateway Design Notes for Distributed Systems",titleVi:"Ghi chú thiết kế API Gateway cho hệ thống phân tán",excerpt:"Routing, authentication, rate limiting, and observability concerns at the gateway layer.",excerptVi:"Routing, xác thực, rate limit và observability ở lớp gateway.",content:`# API Gateway Design Notes for Distributed Systems

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
- Tránh biến gateway thành tầng business logic.`,category:"architecture",tags:["API Gateway","Architecture","Security","Microservices"],date:"2026-06-11",readTime:"8 min",readTimeVi:"8 phút"},YP={id:"caching-strategies-web-apps",title:"Caching Strategies for Web Applications",titleVi:"Chiến lược caching cho ứng dụng web",excerpt:"A compact map of browser cache, CDN cache, API cache, and database cache tradeoffs.",excerptVi:"Bản đồ ngắn về cache trình duyệt, CDN, API và database cùng tradeoff.",content:`# Caching Strategies for Web Applications

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
- Monitor cache behavior sau release.`,category:"architecture",tags:["Caching","Performance","Architecture","Web"],date:"2026-06-09",readTime:"7 min",readTimeVi:"7 phút"},XP={id:"repository-pattern-modern-apps",title:"Repository Pattern in Modern Applications",titleVi:"Repository Pattern trong ứng dụng hiện đại",excerpt:"Where the repository pattern is useful, and where it becomes unnecessary indirection.",excerptVi:"Khi Repository Pattern hữu ích và khi nó trở thành lớp gián tiếp không cần thiết.",content:`# Repository Pattern in Modern Applications

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
- Bỏ qua pattern khi nó chỉ thêm indirection mà không có giá trị.`,category:"patterns",tags:["Repository Pattern","Design Patterns","Backend","Architecture"],date:"2026-06-08",readTime:"7 min",readTimeVi:"7 phút"},JP={id:"factory-pattern-ui-components",title:"Factory Pattern for Configurable UI Components",titleVi:"Factory Pattern cho UI component có cấu hình",excerpt:"Using factories to create consistent UI variants without spreading conditionals everywhere.",excerptVi:"Dùng factory để tạo biến thể UI nhất quán mà không rải conditional khắp nơi.",content:`# Factory Pattern for Configurable UI Components

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
- Ưu tiên map đơn giản và output nhỏ hơn hệ thống dynamic phức tạp.`,category:"patterns",tags:["Factory Pattern","React","Design Patterns","UI"],date:"2026-06-07",readTime:"7 min",readTimeVi:"7 phút"},ZP={id:"adapter-pattern-api-clients",title:"Adapter Pattern for API Clients",titleVi:"Adapter Pattern cho API client",excerpt:"A pattern for protecting application code from external payload changes.",excerptVi:"Một mẫu giúp bảo vệ code ứng dụng khỏi thay đổi payload bên ngoài.",content:`# Adapter Pattern for API Clients

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
- Tránh over-engineer endpoint đã khớp với app model.`,category:"patterns",tags:["Adapter Pattern","API","TypeScript","Clean Code"],date:"2026-06-05",readTime:"7 min",readTimeVi:"7 phút"},eA={id:"observer-pattern-real-time-ui",title:"Observer Pattern for Real-Time UI Updates",titleVi:"Observer Pattern cho cập nhật UI thời gian thực",excerpt:"How observer-style flows appear in subscriptions, stores, and live dashboards.",excerptVi:"Cách luồng kiểu observer xuất hiện trong subscription, store và dashboard realtime.",content:`# Observer Pattern for Real-Time UI Updates

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
- Tách realtime transport khỏi UI rendering.`,category:"patterns",tags:["Observer Pattern","Realtime","UI","Design Patterns"],date:"2026-06-04",readTime:"7 min",readTimeVi:"7 phút"},tA={id:"git-workflow-team-projects",title:"Git Workflow for Small Team Projects",titleVi:"Git workflow cho dự án team nhỏ",excerpt:"A simple workflow for branches, reviews, releases, and avoiding painful merges.",excerptVi:"Workflow đơn giản cho branch, review, release và tránh merge khó chịu.",content:`# Git Workflow for Small Team Projects

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
- Tránh quy trình nặng hơn nhu cầu team.`,category:"practices",tags:["Git","Workflow","Teamwork","Best Practices"],date:"2026-06-03",readTime:"7 min",readTimeVi:"7 phút"},nA={id:"code-review-checklist",title:"Code Review Checklist for Practical Engineering Teams",titleVi:"Checklist code review cho đội kỹ thuật thực tế",excerpt:"A review checklist focused on correctness, maintainability, security, and product behavior.",excerptVi:"Checklist review tập trung vào đúng logic, bảo trì, bảo mật và hành vi sản phẩm.",content:`# Code Review Checklist for Practical Engineering Teams

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
- Dùng review để để lại ngữ cảnh hữu ích cho team.`,category:"practices",tags:["Code Review","Best Practices","Quality","Teamwork"],date:"2026-06-02",readTime:"8 min",readTimeVi:"8 phút"},rA={id:"testing-strategy-frontend-backend",title:"Testing Strategy Across Frontend and Backend",titleVi:"Chiến lược kiểm thử cho frontend và backend",excerpt:"How to balance unit tests, integration tests, and end-to-end coverage.",excerptVi:"Cách cân bằng unit test, integration test và end-to-end test.",content:`# Testing Strategy Across Frontend and Backend

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
- Giữ test deterministic và hữu ích.`,category:"practices",tags:["Testing","Frontend","Backend","Quality"],date:"2026-05-29",readTime:"7 min",readTimeVi:"7 phút"},iA={id:"logging-monitoring-basics",title:"Logging and Monitoring Basics for Web Applications",titleVi:"Nền tảng logging và monitoring cho ứng dụng web",excerpt:"What to log, what to measure, and how to make application issues easier to debug.",excerptVi:"Nên log gì, đo gì và cách giúp lỗi ứng dụng dễ debug hơn.",content:`# Logging and Monitoring Basics for Web Applications

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
- Review khoảng trống observability sau incident.`,category:"practices",tags:["Logging","Monitoring","DevOps","Debugging"],date:"2026-05-30",readTime:"7 min",readTimeVi:"7 phút"},aA={id:"backend-developer-roadmap",title:"Backend Developer Roadmap: From Fundamentals to Deployment",titleVi:"Lộ trình Backend Developer từ nền tảng đến triển khai",excerpt:"A practical learning path covering HTTP, databases, API design, testing, deployment, and basic operations.",excerptVi:"Lộ trình thực tế gồm HTTP, database, thiết kế API, kiểm thử, triển khai và vận hành cơ bản.",content:`# Backend Developer Roadmap: From Fundamentals to Deployment

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
- Chỉ thêm kiến trúc nâng cao sau khi nền tảng ổn.`,category:"roadmap",tags:["Backend","Roadmap","API","Career"],date:"2026-05-28",readTime:"8 min",readTimeVi:"8 phút"},oA={id:"devops-roadmap-for-developers",title:"DevOps Roadmap for Developers",titleVi:"Lộ trình DevOps cho lập trình viên",excerpt:"A practical path through Linux, Docker, CI/CD, cloud deployment, and observability.",excerptVi:"Lộ trình thực tế qua Linux, Docker, CI/CD, cloud deployment và observability.",content:`# DevOps Roadmap for Developers

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
- Học hạ tầng nâng cao sau khi nền tảng đã hữu ích.`,category:"roadmap",tags:["DevOps","Docker","CI/CD","Roadmap"],date:"2026-05-27",readTime:"7 min",readTimeVi:"7 phút"},sA={id:"database-learning-roadmap",title:"Database Learning Roadmap for Application Developers",titleVi:"Lộ trình học database cho lập trình viên ứng dụng",excerpt:"A structured path from SQL basics to indexing, transactions, modeling, and operations.",excerptVi:"Lộ trình từ SQL cơ bản đến indexing, transaction, modeling và vận hành.",content:`# Database Learning Roadmap for Application Developers

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
- Xem migration và backup là một phần của development, không chỉ operations.`,category:"roadmap",tags:["Database","SQL","Roadmap","Backend"],date:"2026-05-25",readTime:"8 min",readTimeVi:"8 phút"},cA={id:"mobile-developer-roadmap",title:"Mobile Developer Roadmap for Cross-Platform Apps",titleVi:"Lộ trình Mobile Developer cho ứng dụng cross-platform",excerpt:"A path covering UI, state, storage, APIs, testing, releases, and store deployment.",excerptVi:"Lộ trình gồm UI, state, storage, API, testing, release và triển khai store.",content:`# Mobile Developer Roadmap for Cross-Platform Apps

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
- Dùng cross-platform tool một cách thực tế, không máy móc.`,category:"roadmap",tags:["Mobile","Flutter","Roadmap","Career"],date:"2026-05-23",readTime:"8 min",readTimeVi:"8 phút"},lA={id:"angular-framework-complete-guide",title:"Angular Framework Guide: Architecture, Signals, Forms, Routing, and Production Practices",titleVi:"Hướng dẫn Angular Framework: Kiến trúc, Signals, Forms, Routing và thực hành production",excerpt:"A serious practical guide to Angular: when it fits, how its architecture works, and how to build maintainable applications with components, signals, dependency injection, routing, forms, HTTP, testing, and production practices.",excerptVi:"Hướng dẫn Angular thực tế và nghiêm túc: khi nào nên dùng, kiến trúc hoạt động ra sao, và cách xây ứng dụng dễ bảo trì với component, signals, dependency injection, routing, forms, HTTP, testing và thực hành production.",content:`# Angular Framework Guide: Architecture, Signals, Forms, Routing, and Production Practices

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
- Cập nhật Angular đều và tận dụng tooling chính thức cho migration.`,category:"frameworks",tags:["Angular","TypeScript","Frontend","Signals","Architecture"],date:"2026-06-23",readTime:"10 min",readTimeVi:"9 phút",featured:!0},hA={id:"oracle-database-practical-guide",title:"Oracle Database Practical Guide for Application Developers",titleVi:"Hướng dẫn Oracle Database thực tế cho lập trình viên ứng dụng",excerpt:"A serious practical guide to Oracle Database: architecture, SQL, PL/SQL, transactions, indexing, performance, security, backup, multitenant design, and production trade-offs.",excerptVi:"Hướng dẫn Oracle Database thực tế và nghiêm túc: kiến trúc, SQL, PL/SQL, transaction, indexing, performance, security, backup, multitenant và các trade-off trong production.",content:`# Oracle Database Practical Guide for Application Developers

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
- Chọn Oracle khi bài toán dữ liệu xứng đáng với một database platform nghiêm túc.`,category:"practices",tags:["Oracle","Database","SQL","PL/SQL","Performance"],date:"2026-06-23",readTime:"11 min",readTimeVi:"9 phút",featured:!0},qy=(e,t)=>({...e,title:t==="vi"?e.titleVi??e.title:e.title,excerpt:t==="vi"?e.excerptVi??e.excerpt:e.excerpt,content:t==="vi"?e.contentVi??e.content:e.content,readTime:t==="vi"?e.readTimeVi??e.readTime:e.readTime}),dc=[hA,lA,_P,FP,VP,BP,zP,HP,$P,WP,GP,KP,QP,YP,XP,JP,ZP,eA,tA,nA,rA,iA,aA,oA,sA,cA,jP,EP,RP,LP,DP,MP,qP,OP,UP],uA="https://script.google.com/macros/s/AKfycbyREb0-NhaBcMrhp6CXtA2OsKcXFJalYhvlvhN7MxmXkjU-gA1F0Wd4h3J3bLF2M-ZO8w/exec";function Oy(e){const t=new URL(uA);return Object.entries(e).forEach(([n,r])=>t.searchParams.set(n,r)),t.searchParams.set("t",String(Date.now())),t.toString()}function dA(e){return typeof Image>"u"?Promise.resolve():new Promise(t=>{const n=new Image;n.onload=()=>t(),n.onerror=()=>t(),n.src=Oy({action:"collect",slug:e})})}function Uy(e){return typeof window>"u"||typeof document>"u"?Promise.resolve(0):new Promise(t=>{const n=`__views_cb_${Math.random().toString(36).slice(2)}`,r=Oy({action:"views",slug:e,callback:n}),i=window;i[n]=s=>{try{t(Number((s==null?void 0:s.views)??0))}finally{delete i[n],a.remove()}};const a=document.createElement("script");a.src=r,a.onerror=()=>{delete i[n],a.remove(),t(0)},document.body.appendChild(a)})}const pA=3e4;let mr=null,Ih=0;const ig=e=>e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/đ/g,"d").replace(/Đ/g,"d").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,""),ag=async(e=!1)=>{const t=Date.now();if(!e&&mr&&t-Ih<pA)return mr;const n=await Promise.all(dc.map(async r=>[r.id,await Uy(r.id)]));return mr=Object.fromEntries(n),Ih=t,mr},gA=(e,t)=>Number(e[t]??0),jh=(e={})=>dc.map(t=>({...t,viewCount:gA(e,t.id)})),mA=(e,t)=>{const n=dc.filter(r=>r.category===e.id).length;return{id:e.id,name:e.name,slug:e.id,description:e.description,color:e.color,sortOrder:t+1,isActive:!0,postCount:n}},fA=()=>{const e=new Map;return dc.forEach(t=>{t.tags.forEach(n=>e.set(n,(e.get(n)??0)+1))}),Array.from(e.entries()).sort(([t],[n])=>t.localeCompare(n)).map(([t,n])=>({id:ig(t),name:t,slug:ig(t),postCount:n}))},_y=(e,t)=>{var n;return{id:e.id,title:t==="vi"?e.titleVi??e.title:e.title,titleVi:e.titleVi??void 0,slug:e.id,date:e.date,category:e.category,excerpt:t==="vi"?e.excerptVi??e.excerpt:e.excerpt,excerptVi:e.excerptVi??void 0,categorySlug:e.category,categoryName:((n=hc.find(r=>r.id===e.category))==null?void 0:n.name)??e.category,tags:e.tags,coverImageUrl:void 0,featured:!!e.featured,readTime:t==="vi"?e.readTimeVi??e.readTime:e.readTime,readTimeVi:e.readTimeVi??void 0,readTimeMinutes:Number.parseInt(e.readTime,10)||Number.parseInt(e.readTimeVi??e.readTime,10)||5,viewCount:e.viewCount,publishedAt:e.date,createdAt:e.date,updatedAt:e.date,status:"Published"}},vA=(e,t)=>({..._y(e,t),content:t==="vi"?e.contentVi??e.content:e.content,contentVi:e.contentVi??void 0}),yA=(e,t)=>jh(t).map(n=>_y(n,e)),un={hasBackend:!1,getCachedPost(e){const t=jh(mr??{}).find(n=>n.id===e);return t?{...t,...qy(t,"en")}:void 0},async getPosts(e,t={}){const n=await ag(),r=yA(e,n).filter(i=>t.featured===void 0?!0:i.featured===t.featured);return r.slice(0,t.pageSize??r.length)},async getPost(e,t){const n=await ag(),r=jh(n).find(i=>i.id===e);return r?vA(r,t):null},async incrementView(e){await dA(e);const t=await Uy(e);return mr={...mr??{},[e]:t},Ih=Date.now(),{slug:e,viewCount:t}},async getCategories(){return hc.map(mA)},async getTags(){return fA()}},Ju=({className:e,label:t="Loading"})=>o.jsx("div",{className:pe("flex min-h-56 items-center justify-center rounded-2xl border border-border/60 bg-card/70",e),"aria-busy":"true","aria-live":"polite",children:o.jsxs("div",{className:"flex items-center gap-3 text-sm text-muted-foreground",children:[o.jsx(Iv,{className:"h-5 w-5 animate-spin text-primary"}),o.jsx("span",{children:t})]})}),bA=()=>{const{t:e,locale:t,language:n}=qe(),r=tr(),[i,a]=g.useState([]),[s,c]=g.useState(!0),l=h=>hc.some(u=>u.id===h)?e(`category.${h}`):h;return g.useEffect(()=>{let h=!1;return(async()=>{c(!0);const d=await un.getPosts(n,{featured:!0,pageSize:3});h||(a(d.slice(0,3)),c(!1))})().catch(()=>{h||c(!1)}),()=>{h=!0}},[n]),o.jsx(Ve.section,{className:"border-b border-border/70 py-20 md:py-28",variants:r?void 0:uc,initial:r?!1:"hidden",whileInView:"visible",viewport:Li,children:o.jsxs("div",{className:"container mx-auto px-4",children:[o.jsxs("div",{className:"mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end",children:[o.jsxs("div",{children:[o.jsx("p",{className:"eyebrow mb-4",children:e("home.notes.eyebrow")}),o.jsxs("h2",{className:"text-4xl md:text-6xl",children:[e("home.notes.title1"),o.jsx("br",{}),o.jsx("span",{className:"text-muted-foreground",children:e("home.notes.title2")})]})]}),o.jsxs(ke,{to:"/blog",className:"inline-flex items-center gap-2 font-mono text-xs text-primary",children:[e("home.notes.all")," ",o.jsx(Cs,{className:"h-4 w-4"})]})]}),s?o.jsx(Ju,{className:"min-h-[28rem]",label:n==="vi"?"Đang tải":"Loading"}):o.jsx(Ve.div,{className:"grid gap-4 lg:grid-cols-[1.2fr_.8fr]",variants:r?void 0:Ei,children:i.map((h,u)=>o.jsxs(Ve.article,{variants:r?void 0:Ri,className:`group journal-card p-6 md:p-8 ${u===0?"lg:row-span-2":""}`,children:[o.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 border-b border-border/70 pb-5 font-mono text-xs uppercase tracking-[.14em] text-muted-foreground",children:[o.jsxs("span",{className:"text-primary",children:["Note / 0",u+1]}),o.jsx("span",{children:l(h.category)})]}),o.jsx(ke,{to:`/blog/${h.id}`,className:"block",children:o.jsx("h3",{className:`mt-8 transition-colors group-hover:text-primary ${u===0?"max-w-2xl text-3xl md:text-5xl":"text-2xl"}`,children:h.title})}),o.jsx("p",{className:`mt-4 leading-relaxed text-muted-foreground ${u===0?"max-w-2xl text-base":"text-sm"}`,children:h.excerpt}),o.jsxs("div",{className:"mt-8 flex flex-wrap items-center gap-5 border-t border-border/70 pt-5 font-mono text-xs text-muted-foreground",children:[o.jsx("span",{children:new Date(h.date).toLocaleDateString(t)}),o.jsxs("span",{className:"flex items-center gap-1.5",children:[o.jsx(_a,{className:"h-3 w-3"}),h.readTime]}),o.jsxs("span",{className:"flex items-center gap-1.5",children:[o.jsx(Ss,{className:"h-3 w-3"}),(h.viewCount??0).toLocaleString(t)]}),o.jsxs(ke,{to:`/blog/${h.id}`,className:"ml-auto flex items-center gap-1.5 text-primary",children:[e("home.notes.read")," ",o.jsx(Cs,{className:"h-3 w-3"})]})]})]},h.id))})]})})},wA=Du("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function ot({className:e,variant:t,...n}){return o.jsx("div",{className:pe(wA({variant:t}),e),...n})}const xA=()=>{const{t:e}=qe(),t=tr(),n=Nh.filter(r=>r.featured).slice(0,3);return o.jsx(Ve.section,{className:"border-b border-border/70 py-20 md:py-28",variants:t?void 0:uc,initial:t?!1:"hidden",whileInView:"visible",viewport:Li,children:o.jsxs("div",{className:"container mx-auto px-4",children:[o.jsxs("div",{className:"mb-12 grid gap-6 md:grid-cols-[1fr_.7fr] md:items-end",children:[o.jsxs("div",{children:[o.jsx("p",{className:"eyebrow mb-4",children:e("home.work.eyebrow")}),o.jsxs("h2",{className:"text-4xl md:text-6xl",children:[e("home.work.title1"),o.jsx("br",{}),o.jsx("span",{className:"text-muted-foreground",children:e("home.work.title2")})]})]}),o.jsxs("div",{className:"md:justify-self-end",children:[o.jsx("p",{className:"mb-4 max-w-md text-sm leading-relaxed text-muted-foreground",children:e("home.work.desc")}),o.jsxs(ke,{to:"/projects",className:"inline-flex items-center gap-2 font-mono text-xs text-primary",children:[e("home.work.archive")," ",o.jsx(Cs,{className:"h-4 w-4"})]})]})]}),o.jsx(Ve.div,{className:"space-y-4",variants:t?void 0:Ei,children:n.map((r,i)=>o.jsxs(Ve.article,{variants:t?void 0:Ri,className:"group journal-card grid gap-0 transition-transform duration-300 hover:-translate-y-1 md:grid-cols-[110px_1fr_1fr_auto]",children:[o.jsxs("div",{className:"flex items-center border-b border-border/70 p-5 font-mono text-4xl text-primary/70 md:border-b-0 md:border-r",children:["0",i+1]}),o.jsxs("div",{className:"border-b border-border/70 p-5 md:border-b-0 md:border-r md:p-7",children:[o.jsxs("p",{className:"mb-2 font-mono text-xs uppercase tracking-[.16em] text-muted-foreground",children:[e("home.work.case")," / ",r.id]}),o.jsx("h3",{className:"text-xl transition-colors group-hover:text-primary md:text-2xl",children:r.title}),o.jsx("p",{className:"mt-3 text-sm leading-relaxed text-muted-foreground",children:r.description})]}),o.jsxs("div",{className:"border-b border-border/70 p-5 md:border-b-0 md:border-r md:p-7",children:[o.jsx("p",{className:"mb-4 font-mono text-xs uppercase tracking-[.16em] text-muted-foreground",children:e("home.work.tools")}),o.jsx("div",{className:"flex flex-wrap gap-2.5",children:r.technologies.map(a=>o.jsx(ot,{variant:"secondary",className:"min-h-8 rounded-md border border-primary/25 bg-primary/[.08] px-3 py-1.5 font-mono text-[11px] font-semibold tracking-[.04em] text-foreground shadow-sm",children:a},a))})]}),o.jsxs("div",{className:"flex items-center gap-2 p-5 md:flex-col md:justify-center",children:[r.github&&o.jsx("a",{href:r.github,target:"_blank",rel:"noreferrer","aria-label":"Source code",className:"rounded-lg border border-border p-3 text-muted-foreground transition-colors hover:border-primary hover:text-primary",children:o.jsx(Cr,{className:"h-4 w-4"})}),r.demo&&o.jsx("a",{href:r.demo,target:"_blank",rel:"noreferrer","aria-label":"Live demo",className:"rounded-lg border border-border p-3 text-muted-foreground transition-colors hover:border-primary hover:text-primary",children:o.jsx(Ct,{className:"h-4 w-4"})})]})]},r.id))})]})})},kA=()=>{const{t:e}=qe(),t=tr();return o.jsxs(Yn,{children:[o.jsx(AP,{}),o.jsx(xA,{}),o.jsx(bA,{}),o.jsx(IP,{}),o.jsx(Ve.section,{className:"py-20 md:py-28",variants:t?void 0:uc,initial:t?!1:"hidden",whileInView:"visible",viewport:Li,children:o.jsx("div",{className:"container mx-auto px-4",children:o.jsxs("div",{className:"journal-card grid gap-8 p-7 md:grid-cols-[.45fr_1fr] md:p-12",children:[o.jsxs("div",{children:[o.jsx("p",{className:"eyebrow mb-4",children:e("home.principle")}),o.jsx("p",{className:"font-mono text-xs leading-relaxed text-muted-foreground",children:"build → observe → explain → improve"})]}),o.jsx("blockquote",{className:"text-2xl leading-tight md:text-4xl",children:e("home.quote")})]})})})]})},Sr=g.forwardRef(({className:e,type:t,...n},r)=>o.jsx("input",{type:t,className:pe("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",e),ref:r,...n}));Sr.displayName="Input";var il=0;function TA(){g.useEffect(()=>{const e=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",e[0]??og()),document.body.insertAdjacentElement("beforeend",e[1]??og()),il++,()=>{il===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(t=>t.remove()),il--}},[])}function og(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}var al="focusScope.autoFocusOnMount",ol="focusScope.autoFocusOnUnmount",sg={bubbles:!1,cancelable:!0},CA="FocusScope",Fy=g.forwardRef((e,t)=>{const{loop:n=!1,trapped:r=!1,onMountAutoFocus:i,onUnmountAutoFocus:a,...s}=e,[c,l]=g.useState(null),h=tn(i),u=tn(a),d=g.useRef(null),p=Ee(t,v=>l(v)),y=g.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;g.useEffect(()=>{if(r){let v=function(b){if(y.paused||!c)return;const w=b.target;c.contains(w)?d.current=w:Nn(d.current,{select:!0})},k=function(b){if(y.paused||!c)return;const w=b.relatedTarget;w!==null&&(c.contains(w)||Nn(d.current,{select:!0}))},f=function(b){if(document.activeElement===document.body)for(const T of b)T.removedNodes.length>0&&Nn(c)};document.addEventListener("focusin",v),document.addEventListener("focusout",k);const m=new MutationObserver(f);return c&&m.observe(c,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",v),document.removeEventListener("focusout",k),m.disconnect()}}},[r,c,y.paused]),g.useEffect(()=>{if(c){lg.add(y);const v=document.activeElement;if(!c.contains(v)){const f=new CustomEvent(al,sg);c.addEventListener(al,h),c.dispatchEvent(f),f.defaultPrevented||(SA(jA(Vy(c)),{select:!0}),document.activeElement===v&&Nn(c))}return()=>{c.removeEventListener(al,h),setTimeout(()=>{const f=new CustomEvent(ol,sg);c.addEventListener(ol,u),c.dispatchEvent(f),f.defaultPrevented||Nn(v??document.body,{select:!0}),c.removeEventListener(ol,u),lg.remove(y)},0)}}},[c,h,u,y]);const x=g.useCallback(v=>{if(!n&&!r||y.paused)return;const k=v.key==="Tab"&&!v.altKey&&!v.ctrlKey&&!v.metaKey,f=document.activeElement;if(k&&f){const m=v.currentTarget,[b,w]=PA(m);b&&w?!v.shiftKey&&f===w?(v.preventDefault(),n&&Nn(b,{select:!0})):v.shiftKey&&f===b&&(v.preventDefault(),n&&Nn(w,{select:!0})):f===m&&v.preventDefault()}},[n,r,y.paused]);return o.jsx(Ae.div,{tabIndex:-1,...s,ref:p,onKeyDown:x})});Fy.displayName=CA;function SA(e,{select:t=!1}={}){const n=document.activeElement;for(const r of e)if(Nn(r,{select:t}),document.activeElement!==n)return}function PA(e){const t=Vy(e),n=cg(t,e),r=cg(t.reverse(),e);return[n,r]}function Vy(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const i=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||i?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function cg(e,t){for(const n of e)if(!AA(n,{upTo:t}))return n}function AA(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function NA(e){return e instanceof HTMLInputElement&&"select"in e}function Nn(e,{select:t=!1}={}){if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&NA(e)&&t&&e.select()}}var lg=IA();function IA(){let e=[];return{add(t){const n=e[0];t!==n&&(n==null||n.pause()),e=hg(e,t),e.unshift(t)},remove(t){var n;e=hg(e,t),(n=e[0])==null||n.resume()}}}function hg(e,t){const n=[...e],r=n.indexOf(t);return r!==-1&&n.splice(r,1),n}function jA(e){return e.filter(t=>t.tagName!=="A")}var EA=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},_r=new WeakMap,No=new WeakMap,Io={},sl=0,By=function(e){return e&&(e.host||By(e.parentNode))},RA=function(e,t){return t.map(function(n){if(e.contains(n))return n;var r=By(n);return r&&e.contains(r)?r:(console.error("aria-hidden",n,"in not contained inside",e,". Doing nothing"),null)}).filter(function(n){return!!n})},LA=function(e,t,n,r){var i=RA(t,Array.isArray(e)?e:[e]);Io[n]||(Io[n]=new WeakMap);var a=Io[n],s=[],c=new Set,l=new Set(i),h=function(d){!d||c.has(d)||(c.add(d),h(d.parentNode))};i.forEach(h);var u=function(d){!d||l.has(d)||Array.prototype.forEach.call(d.children,function(p){if(c.has(p))u(p);else try{var y=p.getAttribute(r),x=y!==null&&y!=="false",v=(_r.get(p)||0)+1,k=(a.get(p)||0)+1;_r.set(p,v),a.set(p,k),s.push(p),v===1&&x&&No.set(p,!0),k===1&&p.setAttribute(n,"true"),x||p.setAttribute(r,"true")}catch(f){console.error("aria-hidden: cannot operate on ",p,f)}})};return u(t),c.clear(),sl++,function(){s.forEach(function(d){var p=_r.get(d)-1,y=a.get(d)-1;_r.set(d,p),a.set(d,y),p||(No.has(d)||d.removeAttribute(r),No.delete(d)),y||d.removeAttribute(n)}),sl--,sl||(_r=new WeakMap,_r=new WeakMap,No=new WeakMap,Io={})}},DA=function(e,t,n){n===void 0&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),i=EA(e);return i?(r.push.apply(r,Array.from(i.querySelectorAll("[aria-live]"))),LA(r,i,n,"aria-hidden")):function(){return null}},Qt=function(){return Qt=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},Qt.apply(this,arguments)};function zy(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function MA(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,a;r<i;r++)(a||!(r in t))&&(a||(a=Array.prototype.slice.call(t,0,r)),a[r]=t[r]);return e.concat(a||Array.prototype.slice.call(t))}var Go="right-scroll-bar-position",Ko="width-before-scroll-bar",qA="with-scroll-bars-hidden",OA="--removed-body-scroll-bar-size";function cl(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function UA(e,t){var n=g.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(r){var i=n.value;i!==r&&(n.value=r,n.callback(r,i))}}}})[0];return n.callback=t,n.facade}var _A=typeof window<"u"?g.useLayoutEffect:g.useEffect,ug=new WeakMap;function FA(e,t){var n=UA(null,function(r){return e.forEach(function(i){return cl(i,r)})});return _A(function(){var r=ug.get(n);if(r){var i=new Set(r),a=new Set(e),s=n.current;i.forEach(function(c){a.has(c)||cl(c,null)}),a.forEach(function(c){i.has(c)||cl(c,s)})}ug.set(n,e)},[e]),n}function VA(e){return e}function BA(e,t){t===void 0&&(t=VA);var n=[],r=!1,i={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(a){var s=t(a,r);return n.push(s),function(){n=n.filter(function(c){return c!==s})}},assignSyncMedium:function(a){for(r=!0;n.length;){var s=n;n=[],s.forEach(a)}n={push:function(c){return a(c)},filter:function(){return n}}},assignMedium:function(a){r=!0;var s=[];if(n.length){var c=n;n=[],c.forEach(a),s=n}var l=function(){var u=s;s=[],u.forEach(a)},h=function(){return Promise.resolve().then(l)};h(),n={push:function(u){s.push(u),h()},filter:function(u){return s=s.filter(u),n}}}};return i}function zA(e){e===void 0&&(e={});var t=BA(null);return t.options=Qt({async:!0,ssr:!1},e),t}var Hy=function(e){var t=e.sideCar,n=zy(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw new Error("Sidecar medium not found");return g.createElement(r,Qt({},n))};Hy.isSideCarExport=!0;function HA(e,t){return e.useMedium(t),Hy}var $y=zA(),ll=function(){},pc=g.forwardRef(function(e,t){var n=g.useRef(null),r=g.useState({onScrollCapture:ll,onWheelCapture:ll,onTouchMoveCapture:ll}),i=r[0],a=r[1],s=e.forwardProps,c=e.children,l=e.className,h=e.removeScrollBar,u=e.enabled,d=e.shards,p=e.sideCar,y=e.noRelative,x=e.noIsolation,v=e.inert,k=e.allowPinchZoom,f=e.as,m=f===void 0?"div":f,b=e.gapMode,w=zy(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),T=p,C=FA([n,t]),P=Qt(Qt({},w),i);return g.createElement(g.Fragment,null,u&&g.createElement(T,{sideCar:$y,removeScrollBar:h,shards:d,noRelative:y,noIsolation:x,inert:v,setCallbacks:a,allowPinchZoom:!!k,lockRef:n,gapMode:b}),s?g.cloneElement(g.Children.only(c),Qt(Qt({},P),{ref:C})):g.createElement(m,Qt({},P,{className:l,ref:C}),c))});pc.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};pc.classNames={fullWidth:Ko,zeroRight:Go};var $A=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function WA(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=$A();return t&&e.setAttribute("nonce",t),e}function GA(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function KA(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var QA=function(){var e=0,t=null;return{add:function(n){e==0&&(t=WA())&&(GA(t,n),KA(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},YA=function(){var e=QA();return function(t,n){g.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},Wy=function(){var e=YA(),t=function(n){var r=n.styles,i=n.dynamic;return e(r,i),null};return t},XA={left:0,top:0,right:0,gap:0},hl=function(e){return parseInt(e||"",10)||0},JA=function(e){var t=window.getComputedStyle(document.body),n=t[e==="padding"?"paddingLeft":"marginLeft"],r=t[e==="padding"?"paddingTop":"marginTop"],i=t[e==="padding"?"paddingRight":"marginRight"];return[hl(n),hl(r),hl(i)]},ZA=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return XA;var t=JA(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},eN=Wy(),ui="data-scroll-locked",tN=function(e,t,n,r){var i=e.left,a=e.top,s=e.right,c=e.gap;return n===void 0&&(n="margin"),`
  .`.concat(qA,` {
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
  
  .`).concat(Go,` {
    right: `).concat(c,"px ").concat(r,`;
  }
  
  .`).concat(Ko,` {
    margin-right: `).concat(c,"px ").concat(r,`;
  }
  
  .`).concat(Go," .").concat(Go,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(Ko," .").concat(Ko,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body[`).concat(ui,`] {
    `).concat(OA,": ").concat(c,`px;
  }
`)},dg=function(){var e=parseInt(document.body.getAttribute(ui)||"0",10);return isFinite(e)?e:0},nN=function(){g.useEffect(function(){return document.body.setAttribute(ui,(dg()+1).toString()),function(){var e=dg()-1;e<=0?document.body.removeAttribute(ui):document.body.setAttribute(ui,e.toString())}},[])},rN=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,i=r===void 0?"margin":r;nN();var a=g.useMemo(function(){return ZA(i)},[i]);return g.createElement(eN,{styles:tN(a,!t,i,n?"":"!important")})},Eh=!1;if(typeof window<"u")try{var jo=Object.defineProperty({},"passive",{get:function(){return Eh=!0,!0}});window.addEventListener("test",jo,jo),window.removeEventListener("test",jo,jo)}catch{Eh=!1}var Fr=Eh?{passive:!1}:!1,iN=function(e){return e.tagName==="TEXTAREA"},Gy=function(e,t){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return n[t]!=="hidden"&&!(n.overflowY===n.overflowX&&!iN(e)&&n[t]==="visible")},aN=function(e){return Gy(e,"overflowY")},oN=function(e){return Gy(e,"overflowX")},pg=function(e,t){var n=t.ownerDocument,r=t;do{typeof ShadowRoot<"u"&&r instanceof ShadowRoot&&(r=r.host);var i=Ky(e,r);if(i){var a=Qy(e,r),s=a[1],c=a[2];if(s>c)return!0}r=r.parentNode}while(r&&r!==n.body);return!1},sN=function(e){var t=e.scrollTop,n=e.scrollHeight,r=e.clientHeight;return[t,n,r]},cN=function(e){var t=e.scrollLeft,n=e.scrollWidth,r=e.clientWidth;return[t,n,r]},Ky=function(e,t){return e==="v"?aN(t):oN(t)},Qy=function(e,t){return e==="v"?sN(t):cN(t)},lN=function(e,t){return e==="h"&&t==="rtl"?-1:1},hN=function(e,t,n,r,i){var a=lN(e,window.getComputedStyle(t).direction),s=a*r,c=n.target,l=t.contains(c),h=!1,u=s>0,d=0,p=0;do{if(!c)break;var y=Qy(e,c),x=y[0],v=y[1],k=y[2],f=v-k-a*x;(x||f)&&Ky(e,c)&&(d+=f,p+=x);var m=c.parentNode;c=m&&m.nodeType===Node.DOCUMENT_FRAGMENT_NODE?m.host:m}while(!l&&c!==document.body||l&&(t.contains(c)||t===c));return(u&&(Math.abs(d)<1||!i)||!u&&(Math.abs(p)<1||!i))&&(h=!0),h},Eo=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},gg=function(e){return[e.deltaX,e.deltaY]},mg=function(e){return e&&"current"in e?e.current:e},uN=function(e,t){return e[0]===t[0]&&e[1]===t[1]},dN=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},pN=0,Vr=[];function gN(e){var t=g.useRef([]),n=g.useRef([0,0]),r=g.useRef(),i=g.useState(pN++)[0],a=g.useState(Wy)[0],s=g.useRef(e);g.useEffect(function(){s.current=e},[e]),g.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(i));var v=MA([e.lockRef.current],(e.shards||[]).map(mg),!0).filter(Boolean);return v.forEach(function(k){return k.classList.add("allow-interactivity-".concat(i))}),function(){document.body.classList.remove("block-interactivity-".concat(i)),v.forEach(function(k){return k.classList.remove("allow-interactivity-".concat(i))})}}},[e.inert,e.lockRef.current,e.shards]);var c=g.useCallback(function(v,k){if("touches"in v&&v.touches.length===2||v.type==="wheel"&&v.ctrlKey)return!s.current.allowPinchZoom;var f=Eo(v),m=n.current,b="deltaX"in v?v.deltaX:m[0]-f[0],w="deltaY"in v?v.deltaY:m[1]-f[1],T,C=v.target,P=Math.abs(b)>Math.abs(w)?"h":"v";if("touches"in v&&P==="h"&&C.type==="range")return!1;var S=pg(P,C);if(!S)return!0;if(S?T=P:(T=P==="v"?"h":"v",S=pg(P,C)),!S)return!1;if(!r.current&&"changedTouches"in v&&(b||w)&&(r.current=T),!T)return!0;var N=r.current||T;return hN(N,k,v,N==="h"?b:w,!0)},[]),l=g.useCallback(function(v){var k=v;if(!(!Vr.length||Vr[Vr.length-1]!==a)){var f="deltaY"in k?gg(k):Eo(k),m=t.current.filter(function(T){return T.name===k.type&&(T.target===k.target||k.target===T.shadowParent)&&uN(T.delta,f)})[0];if(m&&m.should){k.cancelable&&k.preventDefault();return}if(!m){var b=(s.current.shards||[]).map(mg).filter(Boolean).filter(function(T){return T.contains(k.target)}),w=b.length>0?c(k,b[0]):!s.current.noIsolation;w&&k.cancelable&&k.preventDefault()}}},[]),h=g.useCallback(function(v,k,f,m){var b={name:v,delta:k,target:f,should:m,shadowParent:mN(f)};t.current.push(b),setTimeout(function(){t.current=t.current.filter(function(w){return w!==b})},1)},[]),u=g.useCallback(function(v){n.current=Eo(v),r.current=void 0},[]),d=g.useCallback(function(v){h(v.type,gg(v),v.target,c(v,e.lockRef.current))},[]),p=g.useCallback(function(v){h(v.type,Eo(v),v.target,c(v,e.lockRef.current))},[]);g.useEffect(function(){return Vr.push(a),e.setCallbacks({onScrollCapture:d,onWheelCapture:d,onTouchMoveCapture:p}),document.addEventListener("wheel",l,Fr),document.addEventListener("touchmove",l,Fr),document.addEventListener("touchstart",u,Fr),function(){Vr=Vr.filter(function(v){return v!==a}),document.removeEventListener("wheel",l,Fr),document.removeEventListener("touchmove",l,Fr),document.removeEventListener("touchstart",u,Fr)}},[]);var y=e.removeScrollBar,x=e.inert;return g.createElement(g.Fragment,null,x?g.createElement(a,{styles:dN(i)}):null,y?g.createElement(rN,{noRelative:e.noRelative,gapMode:e.gapMode}):null)}function mN(e){for(var t=null;e!==null;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}const fN=HA($y,gN);var Yy=g.forwardRef(function(e,t){return g.createElement(pc,Qt({},e,{ref:t,sideCar:fN}))});Yy.classNames=pc.classNames;var gc="Popover",[Xy,p2]=Ui(gc,[ic]),ro=ic(),[vN,or]=Xy(gc),Jy=e=>{const{__scopePopover:t,children:n,open:r,defaultOpen:i,onOpenChange:a,modal:s=!1}=e,c=ro(t),l=g.useRef(null),[h,u]=g.useState(!1),[d,p]=Xs({prop:r,defaultProp:i??!1,onChange:a,caller:gc});return o.jsx(hy,{...c,children:o.jsx(vN,{scope:t,contentId:Vv(),triggerRef:l,open:d,onOpenChange:p,onOpenToggle:g.useCallback(()=>p(y=>!y),[p]),hasCustomAnchor:h,onCustomAnchorAdd:g.useCallback(()=>u(!0),[]),onCustomAnchorRemove:g.useCallback(()=>u(!1),[]),modal:s,children:n})})};Jy.displayName=gc;var Zy="PopoverAnchor",yN=g.forwardRef((e,t)=>{const{__scopePopover:n,...r}=e,i=or(Zy,n),a=ro(n),{onCustomAnchorAdd:s,onCustomAnchorRemove:c}=i;return g.useEffect(()=>(s(),()=>c()),[s,c]),o.jsx($u,{...a,...r,ref:t})});yN.displayName=Zy;var eb="PopoverTrigger",tb=g.forwardRef((e,t)=>{const{__scopePopover:n,...r}=e,i=or(eb,n),a=ro(n),s=Ee(t,i.triggerRef),c=o.jsx(Ae.button,{type:"button","aria-haspopup":"dialog","aria-expanded":i.open,"aria-controls":i.contentId,"data-state":ob(i.open),...r,ref:s,onClick:he(e.onClick,i.onOpenToggle)});return i.hasCustomAnchor?c:o.jsx($u,{asChild:!0,...a,children:c})});tb.displayName=eb;var Zu="PopoverPortal",[bN,wN]=Xy(Zu,{forceMount:void 0}),nb=e=>{const{__scopePopover:t,forceMount:n,children:r,container:i}=e,a=or(Zu,t);return o.jsx(bN,{scope:t,forceMount:n,children:o.jsx(eo,{present:n||a.open,children:o.jsx(ju,{asChild:!0,container:i,children:r})})})};nb.displayName=Zu;var Di="PopoverContent",rb=g.forwardRef((e,t)=>{const n=wN(Di,e.__scopePopover),{forceMount:r=n.forceMount,...i}=e,a=or(Di,e.__scopePopover);return o.jsx(eo,{present:r||a.open,children:a.modal?o.jsx(kN,{...i,ref:t}):o.jsx(TN,{...i,ref:t})})});rb.displayName=Di;var xN=Ua("PopoverContent.RemoveScroll"),kN=g.forwardRef((e,t)=>{const n=or(Di,e.__scopePopover),r=g.useRef(null),i=Ee(t,r),a=g.useRef(!1);return g.useEffect(()=>{const s=r.current;if(s)return DA(s)},[]),o.jsx(Yy,{as:xN,allowPinchZoom:!0,children:o.jsx(ib,{...e,ref:i,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:he(e.onCloseAutoFocus,s=>{var c;s.preventDefault(),a.current||(c=n.triggerRef.current)==null||c.focus()}),onPointerDownOutside:he(e.onPointerDownOutside,s=>{const c=s.detail.originalEvent,l=c.button===0&&c.ctrlKey===!0,h=c.button===2||l;a.current=h},{checkForDefaultPrevented:!1}),onFocusOutside:he(e.onFocusOutside,s=>s.preventDefault(),{checkForDefaultPrevented:!1})})})}),TN=g.forwardRef((e,t)=>{const n=or(Di,e.__scopePopover),r=g.useRef(!1),i=g.useRef(!1);return o.jsx(ib,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:a=>{var s,c;(s=e.onCloseAutoFocus)==null||s.call(e,a),a.defaultPrevented||(r.current||(c=n.triggerRef.current)==null||c.focus(),a.preventDefault()),r.current=!1,i.current=!1},onInteractOutside:a=>{var l,h;(l=e.onInteractOutside)==null||l.call(e,a),a.defaultPrevented||(r.current=!0,a.detail.originalEvent.type==="pointerdown"&&(i.current=!0));const s=a.target;((h=n.triggerRef.current)==null?void 0:h.contains(s))&&a.preventDefault(),a.detail.originalEvent.type==="focusin"&&i.current&&a.preventDefault()}})}),ib=g.forwardRef((e,t)=>{const{__scopePopover:n,trapFocus:r,onOpenAutoFocus:i,onCloseAutoFocus:a,disableOutsidePointerEvents:s,onEscapeKeyDown:c,onPointerDownOutside:l,onFocusOutside:h,onInteractOutside:u,...d}=e,p=or(Di,n),y=ro(n);return TA(),o.jsx(Fy,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:i,onUnmountAutoFocus:a,children:o.jsx(Ys,{asChild:!0,disableOutsidePointerEvents:s,onInteractOutside:u,onEscapeKeyDown:c,onPointerDownOutside:l,onFocusOutside:h,onDismiss:()=>p.onOpenChange(!1),children:o.jsx(uy,{"data-state":ob(p.open),role:"dialog",id:p.contentId,...y,...d,ref:t,style:{...d.style,"--radix-popover-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-popover-content-available-width":"var(--radix-popper-available-width)","--radix-popover-content-available-height":"var(--radix-popper-available-height)","--radix-popover-trigger-width":"var(--radix-popper-anchor-width)","--radix-popover-trigger-height":"var(--radix-popper-anchor-height)"}})})})}),ab="PopoverClose",CN=g.forwardRef((e,t)=>{const{__scopePopover:n,...r}=e,i=or(ab,n);return o.jsx(Ae.button,{type:"button",...r,ref:t,onClick:he(e.onClick,()=>i.onOpenChange(!1))})});CN.displayName=ab;var SN="PopoverArrow",PN=g.forwardRef((e,t)=>{const{__scopePopover:n,...r}=e,i=ro(n);return o.jsx(dy,{...i,...r,ref:t})});PN.displayName=SN;function ob(e){return e?"open":"closed"}var AN=Jy,NN=tb,IN=nb,sb=rb;const fg=AN,vg=NN,Rh=g.forwardRef(({className:e,align:t="center",sideOffset:n=4,...r},i)=>o.jsx(IN,{children:o.jsx(sb,{ref:i,align:t,sideOffset:n,className:pe("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...r})}));Rh.displayName=sb.displayName;const jN=()=>{const{t:e,locale:t,language:n}=qe(),r=tr(),i=At(),[a,s]=o0(),c=g.useRef(!1),[l,h]=g.useState(""),[u,d]=g.useState([]),[p,y]=g.useState([]),[x,v]=g.useState([]),[k,f]=g.useState(""),[m,b]=g.useState(""),[w,T]=g.useState(!0),C=a.get("category")||"all",P=a.get("tag")||"",S=9,N=Math.max(1,Number(a.get("page"))||1),I=`${i.pathname}${i.search}`,O=`blog-scroll:${I}`,R=g.useMemo(()=>P.split(",").map(E=>E.trim()).filter(Boolean),[P]),M=g.useMemo(()=>x.map(E=>({name:E.name,count:E.postCount})),[x]),U=g.useMemo(()=>{const E=u.reduce((ie,L)=>ie+(L.viewCount??0),0),B=u.reduce((ie,L)=>ie+(L.readTimeMinutes||0),0);return{totalViews:E,totalReadMinutes:B}},[u]),G=g.useMemo(()=>{const E=k.trim().toLowerCase();return E?p.filter(B=>[B.name,B.slug,B.description??""].some(ie=>ie.toLowerCase().includes(E))):p},[p,k]),H=g.useMemo(()=>{const E=m.trim().toLowerCase();return E?M.filter(B=>B.name.toLowerCase().includes(E)):M},[M,m]),z=g.useMemo(()=>{const E=new Map;return p.forEach(B=>E.set(B.slug,B.postCount)),E},[p]),A=g.useMemo(()=>u.filter(E=>{const B=C==="all"||E.category===C,ie=R.length===0||R.every(K=>E.tags.some(J=>J.toLowerCase()===K.toLowerCase())),L=E.title.toLowerCase().includes(l.toLowerCase())||E.excerpt.toLowerCase().includes(l.toLowerCase())||E.tags.some(K=>K.toLowerCase().includes(l.toLowerCase()));return B&&ie&&L}).sort((E,B)=>new Date(B.date).getTime()-new Date(E.date).getTime()),[u,C,R,l]),D=Math.max(1,Math.ceil(A.length/S)),F=g.useMemo(()=>A.slice((N-1)*S,N*S),[N,A]),$=g.useMemo(()=>{const E=Math.max(1,Math.min(N-2,D-4)),B=Math.min(D,E+4);return Array.from({length:B-E+1},(ie,L)=>E+L)},[N,D]),W=E=>{var B;return((B=p.find(ie=>ie.slug===E))==null?void 0:B.name)||e(`category.${E}`)||E},ze=E=>{const B=`${E.slug} ${E.name}`.toLowerCase();return B.includes("language")?b1:B.includes("framework")||B.includes("librar")?u1:B.includes("architecture")?O1:B.includes("pattern")?V1:B.includes("practice")?h1:B.includes("roadmap")?R1:B.includes("learning")?gh:Kc},de=E=>{const B=new URLSearchParams(a);E==="all"?B.delete("category"):B.set("category",E),B.delete("page"),s(B)},Oe=E=>{const B=new URLSearchParams(a);E.length===0?B.delete("tag"):B.set("tag",E.join(",")),B.delete("page"),s(B)},Q=E=>{const ie=R.some(L=>L.toLowerCase()===E.toLowerCase())?R.filter(L=>L.toLowerCase()!==E.toLowerCase()):[...R,E];Oe(ie)},re=()=>{s({}),h("")},me=E=>{h(E);const B=new URLSearchParams(a);B.delete("page"),s(B)},ee=E=>{const B=Math.min(Math.max(1,E),D),ie=new URLSearchParams(a);B===1?ie.delete("page"):ie.set("page",String(B)),s(ie),window.scrollTo({top:0,behavior:"smooth"})},se=()=>{const E=window.scrollY;window.sessionStorage.setItem(O,String(E))};return g.useEffect(()=>{let E=!1;return(async()=>{T(!0);const[ie,L,K]=await Promise.all([un.getPosts(n,{pageSize:100}),un.getCategories(),un.getTags()]);E||(d(ie),y(L),v(K),T(!1))})().catch(()=>{E||T(!1)}),()=>{E=!0}},[n]),g.useEffect(()=>{w||A.length===0||N>D&&ee(D)},[N,A.length,w,D]),g.useEffect(()=>{c.current=!1},[I]),g.useEffect(()=>{if(w||c.current)return;const E=window.sessionStorage.getItem(O);if(!E)return;const B=Number(E)||0;c.current=!0,window.sessionStorage.removeItem(O);const ie=()=>window.scrollTo({top:B,behavior:"instant"});window.requestAnimationFrame(()=>{ie(),window.requestAnimationFrame(ie)});const L=[80,180,360].map(K=>window.setTimeout(ie,K));return()=>L.forEach(K=>window.clearTimeout(K))},[O,w,F.length]),o.jsx(Yn,{children:o.jsxs("div",{className:"container mx-auto px-4 py-12",children:[o.jsxs("div",{className:"mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between",children:[o.jsxs("div",{className:"max-w-3xl",children:[o.jsx("h1",{className:"mb-4 text-4xl font-bold md:text-5xl",children:o.jsx("span",{className:"text-gradient",children:e("blog.title")})}),o.jsx("p",{className:"text-lg text-muted-foreground md:text-xl",children:e("blog.desc")})]}),!w&&o.jsxs("div",{className:"grid grid-cols-2 gap-2 sm:grid-cols-4 lg:w-[30rem]",children:[o.jsxs("div",{className:"rounded-lg border border-border/70 bg-background/75 px-3 py-2.5 shadow-sm",children:[o.jsxs("div",{className:"flex items-center gap-1.5 text-xs text-muted-foreground",children:[o.jsx(Ss,{className:"h-3.5 w-3.5 text-primary"}),n==="vi"?"Lượt xem":"Views"]}),o.jsx("div",{className:"mt-1 text-lg font-semibold",children:U.totalViews.toLocaleString(t)})]}),o.jsxs("div",{className:"rounded-lg border border-border/70 bg-background/75 px-3 py-2.5 shadow-sm",children:[o.jsxs("div",{className:"flex items-center gap-1.5 text-xs text-muted-foreground",children:[o.jsx(gh,{className:"h-3.5 w-3.5 text-primary"}),n==="vi"?"Bài":"Posts"]}),o.jsx("div",{className:"mt-1 text-lg font-semibold",children:u.length.toLocaleString(t)})]}),o.jsxs("div",{className:"rounded-lg border border-border/70 bg-background/75 px-3 py-2.5 shadow-sm",children:[o.jsxs("div",{className:"flex items-center gap-1.5 text-xs text-muted-foreground",children:[o.jsx(_a,{className:"h-3.5 w-3.5 text-primary"}),n==="vi"?"Phút":"Minutes"]}),o.jsx("div",{className:"mt-1 text-lg font-semibold",children:U.totalReadMinutes.toLocaleString(t)})]}),o.jsxs("div",{className:"rounded-lg border border-border/70 bg-background/75 px-3 py-2.5 shadow-sm",children:[o.jsxs("div",{className:"flex items-center gap-1.5 text-xs text-muted-foreground",children:[o.jsx(Kc,{className:"h-3.5 w-3.5 text-primary"}),n==="vi"?"Mục":"Topics"]}),o.jsx("div",{className:"mt-1 text-lg font-semibold",children:p.length.toLocaleString(t)})]})]})]}),o.jsxs("div",{className:"mb-8 rounded-xl border border-border/70 bg-background/75 p-2.5 shadow-sm backdrop-blur md:p-3",children:[o.jsxs("div",{className:"flex flex-col gap-2.5 lg:flex-row lg:items-center",children:[o.jsxs("div",{className:"relative w-full lg:max-w-sm",children:[o.jsx(Qc,{className:"absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"}),o.jsx(Sr,{type:"search",placeholder:e("blog.search"),value:l,onChange:E=>me(E.target.value),className:"h-10 rounded-lg border-border/70 bg-background/85 pl-9 text-sm shadow-sm"})]}),o.jsxs("div",{className:"flex flex-wrap items-center gap-2 lg:ml-auto",children:[o.jsxs(fg,{children:[o.jsx(vg,{asChild:!0,children:o.jsxs(ne,{variant:"outline",size:"sm",className:`h-10 min-w-[170px] justify-between rounded-full border-border/70 bg-background/85 px-3 shadow-sm ${C!=="all"?"border-primary/40 ring-1 ring-primary/15":""}`,children:[o.jsxs("span",{className:"flex min-w-0 items-center gap-2",children:[o.jsx(Ip,{className:"h-4 w-4 shrink-0 text-muted-foreground"}),o.jsxs("span",{className:"min-w-0 truncate text-sm",children:[o.jsxs("span",{className:"text-muted-foreground",children:[e("blog.filterCategory"),": "]}),o.jsx("span",{className:"font-medium text-foreground",children:C==="all"?e("blog.all"):W(C)})]})]}),o.jsx(Np,{className:"h-4 w-4 shrink-0 opacity-70"})]})}),o.jsxs(Rh,{align:"end",className:"w-[min(22rem,calc(100vw-2rem))] rounded-xl p-2",children:[o.jsx("div",{className:"px-2 pb-2 pt-1 text-xs font-medium uppercase text-muted-foreground",children:e("blog.filterCategory")}),o.jsxs("div",{className:"relative mb-2",children:[o.jsx(Qc,{className:"absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"}),o.jsx(Sr,{type:"search",value:k,onChange:E=>f(E.target.value),onKeyDown:E=>E.stopPropagation(),placeholder:n==="vi"?"Tìm danh mục":"Search categories",className:"h-9 rounded-lg border-border/70 bg-background/85 pl-9 text-sm"})]}),o.jsxs("div",{className:"space-y-1",children:[o.jsxs("button",{type:"button",onClick:()=>de("all"),className:`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors ${C==="all"?"bg-primary/10 text-primary ring-1 ring-primary/20":"text-foreground hover:bg-muted"}`,children:[o.jsx(Kc,{className:"h-4 w-4 shrink-0 opacity-75"}),o.jsx("span",{className:"min-w-0 flex-1 truncate",children:e("blog.all")}),o.jsx("span",{className:"rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground",children:u.length}),C==="all"&&o.jsx($o,{className:"h-4 w-4"})]}),G.map(E=>{const B=C===E.slug,ie=ze(E);return o.jsxs("button",{type:"button",onClick:()=>de(E.slug),className:`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors ${B?"bg-primary/10 text-primary ring-1 ring-primary/20":"text-foreground hover:bg-muted"}`,children:[o.jsx(ie,{className:"h-4 w-4 shrink-0 opacity-75"}),o.jsx("span",{className:"min-w-0 flex-1 truncate",children:E.name}),o.jsx("span",{className:"rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground",children:z.get(E.slug)??0}),B&&o.jsx($o,{className:"h-4 w-4"})]},E.id)}),G.length===0&&o.jsx("div",{className:"px-3 py-6 text-center text-sm text-muted-foreground",children:n==="vi"?"Không tìm thấy danh mục":"No categories found"})]})]})]}),o.jsxs(fg,{children:[o.jsx(vg,{asChild:!0,children:o.jsxs(ne,{variant:"outline",size:"sm",className:`h-10 min-w-[145px] justify-between rounded-full border-border/70 bg-background/85 px-3 shadow-sm ${R.length>0?"border-primary/40 ring-1 ring-primary/15":""}`,children:[o.jsxs("span",{className:"flex min-w-0 items-center gap-2",children:[o.jsx(yh,{className:"h-4 w-4 shrink-0 text-muted-foreground"}),o.jsxs("span",{className:"min-w-0 truncate text-sm",children:[o.jsxs("span",{className:"text-muted-foreground",children:[e("blog.filterTag"),": "]}),o.jsx("span",{className:"font-medium text-foreground",children:R.length>0?`${R.length} ${e("blog.selectedTags")}`:e("blog.allTags")})]})]}),o.jsx(Np,{className:"h-4 w-4 opacity-70"})]})}),o.jsxs(Rh,{align:"end",className:"w-[min(22rem,calc(100vw-2rem))] rounded-xl p-3",children:[o.jsxs("div",{className:"mb-3 flex items-center justify-between gap-3",children:[o.jsx("div",{className:"text-sm font-medium",children:e("blog.filterTag")}),R.length>0&&o.jsx(ne,{variant:"ghost",size:"sm",onClick:()=>Oe([]),className:"h-8 px-2 text-xs",children:e("blog.clearFilters")})]}),o.jsxs("div",{className:"relative mb-3",children:[o.jsx(Qc,{className:"absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"}),o.jsx(Sr,{type:"search",value:m,onChange:E=>b(E.target.value),onKeyDown:E=>E.stopPropagation(),placeholder:n==="vi"?"Tìm thẻ":"Search tags",className:"h-9 rounded-lg border-border/70 bg-background/85 pl-9 text-sm"})]}),o.jsxs("div",{className:"flex max-h-72 flex-wrap gap-2 overflow-y-auto pr-1",children:[H.map(E=>{const B=R.some(ie=>ie.toLowerCase()===E.name.toLowerCase());return o.jsxs(ne,{variant:B?"default":"outline",size:"sm",onClick:()=>Q(E.name),className:"h-8 gap-1.5 rounded-full px-2.5 text-xs",children:[B&&o.jsx($o,{className:"h-3.5 w-3.5"}),E.name,o.jsx("span",{className:"rounded-full bg-background/40 px-1.5 py-0.5 text-[10px] text-current",children:E.count})]},E.name)}),H.length===0&&o.jsx("div",{className:"w-full px-3 py-6 text-center text-sm text-muted-foreground",children:n==="vi"?"Không tìm thấy thẻ":"No tags found"})]})]})]}),(C!=="all"||R.length>0||l)&&o.jsxs(ne,{variant:"ghost",size:"sm",onClick:re,className:"h-10 gap-2 rounded-full px-3",children:[o.jsx(Fa,{className:"h-4 w-4"}),e("blog.clearFilters")]})]})]}),R.length>0&&o.jsx("div",{className:"mt-2 flex flex-wrap items-center gap-1.5 border-t border-border/60 pt-2",children:R.map(E=>o.jsxs("button",{type:"button",onClick:()=>Q(E),className:"inline-flex h-6 items-center gap-1 rounded-full border border-primary/25 bg-primary/10 px-2 text-[11px] font-medium text-primary transition-colors hover:bg-primary/15",children:[E,o.jsx(Fa,{className:"h-3 w-3"})]},E))})]}),w?o.jsx(Ju,{className:"min-h-[36rem]",label:n==="vi"?"Đang tải":"Loading"}):A.length>0?o.jsxs(o.Fragment,{children:[o.jsx(Ve.div,{className:"grid grid-cols-1 items-start gap-6 md:grid-cols-2 lg:grid-cols-3",variants:r?void 0:Ei,initial:r?!1:"hidden",animate:"visible",children:F.map(E=>o.jsx(Ve.article,{variants:r?void 0:Ri,className:"group card-gradient flex h-full flex-col overflow-hidden rounded-xl border border-border/50 transition-all duration-300 hover:border-primary/50",children:o.jsxs("div",{className:"flex h-full flex-col p-6",children:[o.jsxs("div",{className:"mb-4 flex min-h-7 flex-wrap items-center gap-2.5",children:[o.jsx(ot,{variant:"secondary",className:"max-w-full truncate text-xs",children:W(E.category)}),o.jsxs("div",{className:"flex items-center text-xs text-muted-foreground",children:[o.jsx(_a,{className:"mr-1 h-4 w-4"}),E.readTime]}),o.jsxs("div",{className:"flex items-center text-xs text-muted-foreground",children:[o.jsx(Ss,{className:"mr-1 h-4 w-4"}),(E.viewCount??0).toLocaleString(t)]})]}),o.jsx(ke,{to:`/blog/${E.id}`,state:{from:I},onClick:se,children:o.jsx("h2",{className:"mb-3 min-h-[3.5rem] text-xl font-semibold leading-7 line-clamp-2 transition-colors group-hover:text-primary",children:E.title})}),o.jsx("p",{className:"mb-4 min-h-[4.5rem] line-clamp-3 text-sm leading-6 text-muted-foreground",children:E.excerpt}),o.jsx("div",{className:"mb-5 flex h-7 gap-2 overflow-hidden",children:E.tags.slice(0,3).map(B=>{const ie=R.some(L=>L.toLowerCase()===B.toLowerCase());return o.jsxs("button",{type:"button",onClick:()=>Q(B),className:`inline-flex h-7 max-w-[8.75rem] shrink-0 items-center rounded px-2.5 py-1 text-xs transition-colors ${ie?"bg-primary text-primary-foreground":"bg-muted text-muted-foreground hover:text-foreground"}`,children:[o.jsx(yh,{className:"mr-1 h-3 w-3 shrink-0"}),o.jsx("span",{className:"truncate",children:B})]},B)})}),o.jsxs("div",{className:"flex items-center justify-between gap-4 border-t border-border/50 pt-4",children:[o.jsx("span",{className:"min-w-0 truncate text-sm text-muted-foreground",children:new Date(E.date).toLocaleDateString(t)}),o.jsx(ke,{to:`/blog/${E.id}`,state:{from:I},onClick:se,className:"shrink-0 text-sm font-medium text-primary",children:e("blog.readMore")})]})]})},E.id))},`${C}-${P}-${l}-${n}-${N}`),D>1&&o.jsxs("nav",{className:"mt-10 flex flex-col items-center justify-between gap-4 rounded-xl border border-border/70 bg-background/75 p-3 shadow-sm backdrop-blur sm:flex-row",children:[o.jsx("p",{className:"text-sm text-muted-foreground",children:n==="vi"?`Hiển thị ${(N-1)*S+1}-${Math.min(N*S,A.length)} / ${A.length} bài`:`Showing ${(N-1)*S+1}-${Math.min(N*S,A.length)} of ${A.length} posts`}),o.jsxs("div",{className:"flex items-center gap-1.5",children:[o.jsxs(ne,{type:"button",variant:"outline",size:"sm",className:"h-9 rounded-full px-3",disabled:N===1,onClick:()=>ee(N-1),children:[o.jsx(f1,{className:"h-4 w-4"}),o.jsx("span",{className:"hidden sm:inline",children:n==="vi"?"Trước":"Prev"})]}),$.map(E=>o.jsx(ne,{type:"button",variant:E===N?"default":"outline",size:"sm",className:"h-9 w-9 rounded-full p-0",onClick:()=>ee(E),children:E},E)),o.jsxs(ne,{type:"button",variant:"outline",size:"sm",className:"h-9 rounded-full px-3",disabled:N===D,onClick:()=>ee(N+1),children:[o.jsx("span",{className:"hidden sm:inline",children:n==="vi"?"Sau":"Next"}),o.jsx(v1,{className:"h-4 w-4"})]})]})]})]}):o.jsxs("div",{className:"text-center py-20",children:[o.jsx(Ip,{className:"h-12 w-12 text-muted-foreground mx-auto mb-4"}),o.jsx("h3",{className:"text-xl font-semibold mb-2",children:e("blog.empty")}),o.jsx("p",{className:"text-muted-foreground",children:e("blog.emptyDesc")})]})]})})},cb=async e=>{var a;if((a=navigator.clipboard)!=null&&a.writeText&&window.isSecureContext)try{await navigator.clipboard.writeText(e);return}catch{}const t=document.createElement("textarea");t.value=e,t.setAttribute("readonly",""),t.style.position="fixed",t.style.left="-9999px",t.style.top="0",t.style.opacity="0",document.body.appendChild(t);const n=document.getSelection(),r=n&&n.rangeCount>0?n.getRangeAt(0):null;t.focus(),t.select();const i=document.execCommand("copy");if(t.remove(),r&&n&&(n.removeAllRanges(),n.addRange(r)),!i)throw new Error("Unable to copy to clipboard")},EN={javascript:"js",jsx:"js",typescript:"ts",tsx:"ts",py:"python",cs:"csharp","c#":"csharp"},yg={js:new Set(["async","await","break","case","catch","class","const","continue","default","do","else","export","extends","finally","for","from","function","if","import","in","instanceof","let","new","of","return","switch","throw","try","typeof","var","void","while","yield"]),ts:new Set(["abstract","as","async","await","break","case","catch","class","const","continue","default","do","else","enum","export","extends","finally","for","from","function","if","implements","import","in","infer","interface","keyof","let","namespace","new","of","private","protected","public","readonly","return","satisfies","switch","throw","try","type","typeof","var","void","while"]),python:new Set(["and","as","assert","async","await","break","class","continue","def","del","elif","else","except","False","finally","for","from","global","if","import","in","is","lambda","None","nonlocal","not","or","pass","raise","return","True","try","while","with","yield"]),csharp:new Set(["abstract","async","await","base","break","case","catch","class","const","decimal","default","else","enum","false","finally","for","foreach","from","get","if","in","interface","internal","is","namespace","new","null","private","protected","public","readonly","record","return","sealed","set","static","string","switch","this","throw","true","try","using","var","void","when","where"])},RN=new Set(["true","false","null","undefined","True","False","None"]),LN=new Set(["Array","Boolean","Date","Decimal","Error","Guid","Iterable","List","Map","Number","Promise","Record","Set","String","Task","ValueError","dict","list","str","int","float","bool"]),DN=e=>{const t=e.trim().toLowerCase();return EN[t]??t},MN=/(\/\*[\s\S]*?\*\/|\/\/.*|#.*|`(?:\\.|[^`])*`|"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|@[A-Za-z_]\w*|\b\d+(?:\.\d+)?\b|\b[A-Za-z_]\w*\b|=>|==={0,1}|!==?|\+\+|--|&&|\|\||[{}[\]().,;:<>+\-*/%=!?|&])/g,qN=e=>{const t=[];let n=0;return e.replace(MN,(r,i,a)=>(a>n&&t.push(e.slice(n,a)),t.push(r),n=a+r.length,r)),n<e.length&&t.push(e.slice(n)),t},ON=(e,t)=>e.slice(t+1).find(n=>n.trim().length>0),UN=(e,t,n)=>{const r=DN(t),i=yg[r]??yg.js;return/^\s+$/.test(e)?"":/^(\/\/|#|\/\*)/.test(e)?"text-slate-500 italic":/^(`|"|')/.test(e)?"text-emerald-300":/^@\w+/.test(e)?"text-amber-300":/^\d/.test(e)?"text-orange-300":RN.has(e)?"text-purple-300":i.has(e)?"text-sky-300 font-medium":LN.has(e)||/^[A-Z][A-Za-z0-9_]*$/.test(e)?"text-cyan-200":n==="("?"text-yellow-200":/^[{}[\]().,;:<>+\-*/%=!?|&]+$/.test(e)?"text-slate-300":"text-slate-100"},_N=(e,t,n)=>{const r=qN(e);return r.map((i,a)=>{const s=UN(i,t,ON(r,a));return o.jsx("span",{className:s||void 0,children:i},`${n}-${a}`)})},FN=({code:e,language:t})=>{const{language:n}=qe(),{toast:r}=Qs(),[i,a]=g.useState(!1),s=g.useRef(),c=n==="vi"?"Sao chép mã":"Copy code",l=n==="vi"?"Đã sao chép":"Copied",h=t||"code",u=e.split(`
`);g.useEffect(()=>()=>window.clearTimeout(s.current),[]);const d=async()=>{try{await cb(e),a(!0),window.clearTimeout(s.current),s.current=window.setTimeout(()=>a(!1),2e3),r({variant:"success",title:n==="vi"?"Đã sao chép mã":"Code copied"})}catch(p){console.error("Unable to copy code:",p),r({variant:"destructive",title:n==="vi"?"Không thể sao chép mã":"Unable to copy code"})}};return o.jsxs("div",{className:"my-8 overflow-hidden rounded-xl border border-slate-700/80 bg-slate-950 shadow-sm",children:[o.jsxs("div",{className:"flex items-center justify-between gap-3 border-b border-slate-800 bg-slate-900/95 px-4 py-2.5 font-mono text-xs uppercase tracking-[.14em] text-slate-400",children:[o.jsxs("div",{className:"flex min-w-0 items-center gap-3",children:[o.jsxs("span",{className:"flex items-center gap-1.5",children:[o.jsx("span",{className:"h-2.5 w-2.5 rounded-full bg-red-400"}),o.jsx("span",{className:"h-2.5 w-2.5 rounded-full bg-amber-300"}),o.jsx("span",{className:"h-2.5 w-2.5 rounded-full bg-emerald-400"})]}),o.jsx("span",{className:"min-w-0 truncate",children:h})]}),o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("span",{className:"hidden text-slate-500 sm:inline",children:"haiit.dev"}),o.jsxs("button",{type:"button",onClick:d,className:"inline-flex h-9 w-9 items-center justify-center rounded-md border border-slate-700 bg-slate-900 text-slate-200 transition-colors hover:border-primary/70 hover:bg-primary/15 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary","aria-label":i?l:c,title:i?l:c,children:[i?o.jsx($o,{className:"h-4 w-4 text-primary"}):o.jsx(x1,{className:"h-4 w-4"}),o.jsx("span",{className:"sr-only","aria-live":"polite",children:i?l:c})]})]})]}),o.jsx("pre",{className:"overflow-x-auto p-0 text-sm leading-7",children:o.jsx("code",{className:"block min-w-max py-4 font-mono",children:u.map((p,y)=>o.jsxs("span",{className:"grid grid-cols-[3.25rem_1fr]",children:[o.jsx("span",{className:"select-none border-r border-slate-800 px-4 text-right text-slate-600",children:y+1}),o.jsx("span",{className:"whitespace-pre px-4",children:p?_N(p,t,y):" "})]},y))})})]})},Br=e=>e.split(/(`[^`]+`|\*\*[^*]+\*\*)/g).filter(Boolean).map((t,n)=>t.startsWith("`")&&t.endsWith("`")?o.jsx("code",{className:"rounded bg-primary/10 px-1.5 py-0.5 font-mono text-[.88em] text-primary",children:t.slice(1,-1)},n):t.startsWith("**")&&t.endsWith("**")?o.jsx("strong",{className:"font-semibold text-foreground",children:t.slice(2,-2)},n):o.jsx(g.Fragment,{children:t},n)),VN=({activeSpeechIndex:e,content:t,onSpeechSegmentSelect:n,selectedSpeechIndex:r,speechEnabled:i=!1})=>{const{language:a}=qe(),[s,c]=g.useState(),l=t.trim().split(`
`),h=[];let u=0,d=0;const p=v=>{const k=r===v,f=e===v,m=s===v,b=i||k||f,w=k||f||m;return b?o.jsxs("button",{type:"button",className:pe("group my-0.5 flex min-h-8 w-full items-center gap-3 rounded-lg px-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50",i?"cursor-pointer hover:bg-primary/[.035]":"cursor-default"),onClick:()=>i&&(n==null?void 0:n(v)),onMouseEnter:()=>c(v),onMouseLeave:()=>c(void 0),disabled:!i,"aria-label":a==="vi"?"Chọn đọc từ vị trí này":"Select this start point",children:[o.jsx("span",{className:pe("h-px flex-1 transition-all duration-200",f?"bg-accent opacity-100":w?"bg-primary opacity-100":"bg-border/0 opacity-0 group-hover:bg-primary group-hover:opacity-100")}),o.jsx("span",{className:pe("rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[.14em] shadow-sm backdrop-blur transition-all duration-200",w?"translate-y-0 scale-100 opacity-100":"pointer-events-none translate-y-1 scale-95 opacity-0",f?"border-accent/45 bg-accent/15 text-accent":k||m?"border-primary/40 bg-background/95 text-primary":"border-border bg-background/85 text-muted-foreground"),children:a==="vi"?"Đọc từ đây":"Read from here"}),o.jsx("span",{className:pe("h-px flex-1 transition-all duration-200",f?"bg-accent opacity-100":w?"bg-primary opacity-100":"bg-border/0 opacity-0 group-hover:bg-primary group-hover:opacity-100")})]},`speech-marker-${v}`):null},y=(v,k)=>o.jsxs(g.Fragment,{children:[p(v),k]},`speech-block-${v}`),x=()=>{const v=d;return d+=1,{currentSpeechIndex:v,blockProps:{className:pe("rounded-lg transition-colors",e===v&&"bg-primary/[.09] ring-1 ring-primary/25"),"data-speech-index":v}}};for(;u<l.length;){const v=l[u].trim();if(!v){u+=1;continue}if(v.startsWith("```")){const m=v.slice(3).trim(),b=[];for(u+=1;u<l.length&&!l[u].trim().startsWith("```");)b.push(l[u]),u+=1;h.push(o.jsx(FN,{language:m,code:b.join(`
`)},`code-${u}`)),u+=1;continue}if(v.startsWith("# ")){const m=x();h.push(y(m.currentSpeechIndex,o.jsx("h2",{...m.blockProps,className:pe(m.blockProps.className,"mb-6 mt-2 px-3 py-2 text-3xl md:text-4xl"),children:Br(v.slice(2))},u))),u+=1;continue}if(v.startsWith("## ")){const m=x();h.push(y(m.currentSpeechIndex,o.jsx("h3",{...m.blockProps,className:pe(m.blockProps.className,"mb-4 mt-12 border-l-2 border-primary py-2 pl-4 pr-3 text-2xl"),children:Br(v.slice(3))},u))),u+=1;continue}if(v.startsWith("### ")){const m=x();h.push(y(m.currentSpeechIndex,o.jsx("h4",{...m.blockProps,className:pe(m.blockProps.className,"mb-3 mt-8 px-3 py-2 text-xl"),children:Br(v.slice(4))},u))),u+=1;continue}if(v.startsWith("- ")){const m=[];for(;u<l.length&&l[u].trim().startsWith("- ");)m.push(l[u].trim().slice(2)),u+=1;const b=x();h.push(y(b.currentSpeechIndex,o.jsx("ul",{...b.blockProps,className:pe(b.blockProps.className,"my-6 space-y-3 px-3 py-2"),children:m.map(w=>o.jsxs("li",{className:"flex gap-3 leading-7 text-muted-foreground",children:[o.jsx("span",{className:"mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"}),o.jsx("span",{children:Br(w)})]},w))},`list-${u}`)));continue}if(v.startsWith("> ")){const m=x();h.push(y(m.currentSpeechIndex,o.jsx("blockquote",{...m.blockProps,className:pe(m.blockProps.className,"my-8 border-l-2 border-primary bg-primary/[.04] px-5 py-4 text-lg italic leading-8 text-muted-foreground"),children:Br(v.slice(2))},u))),u+=1;continue}const k=[v];for(u+=1;u<l.length&&l[u].trim()&&!/^(#{1,3} |```|- |> )/.test(l[u].trim());)k.push(l[u].trim()),u+=1;const f=x();h.push(y(f.currentSpeechIndex,o.jsx("p",{...f.blockProps,className:pe(f.blockProps.className,"my-5 px-3 py-2 text-[1.02rem] leading-8 text-muted-foreground"),children:Br(k.join(" "))},`p-${u}`)))}return o.jsx("div",{className:"article-content",children:h})};function lb(e,[t,n]){return Math.min(n,Math.max(t,e))}var BN=g.createContext(void 0);function zN(e){const t=g.useContext(BN);return e||t||"ltr"}function HN(e){const t=g.useRef({value:e,previous:e});return g.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}var hb=["PageUp","PageDown"],ub=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],db={"from-left":["Home","PageDown","ArrowDown","ArrowLeft"],"from-right":["Home","PageDown","ArrowDown","ArrowRight"],"from-bottom":["Home","PageDown","ArrowDown","ArrowLeft"],"from-top":["Home","PageDown","ArrowUp","ArrowLeft"]},Bi="Slider",[Lh,$N,WN]=ev(Bi),[pb,g2]=Ui(Bi,[WN]),[GN,mc]=pb(Bi),gb=g.forwardRef((e,t)=>{const{name:n,min:r=0,max:i=100,step:a=1,orientation:s="horizontal",disabled:c=!1,minStepsBetweenThumbs:l=0,defaultValue:h=[r],value:u,onValueChange:d=()=>{},onValueCommit:p=()=>{},inverted:y=!1,form:x,...v}=e,k=g.useRef(new Set),f=g.useRef(0),b=s==="horizontal"?KN:QN,[w=[],T]=Xs({prop:u,defaultProp:h,onChange:O=>{var M;(M=[...k.current][f.current])==null||M.focus(),d(O)}}),C=g.useRef(w);function P(O){const R=eI(w,O);I(O,R)}function S(O){I(O,f.current)}function N(){const O=C.current[f.current];w[f.current]!==O&&p(w)}function I(O,R,{commit:M}={commit:!1}){const U=iI(a),G=aI(Math.round((O-r)/a)*a+r,U),H=lb(G,[r,i]);T((z=[])=>{const A=JN(z,H,R);if(rI(A,l*a)){f.current=A.indexOf(H);const D=String(A)!==String(z);return D&&M&&p(A),D?A:z}else return z})}return o.jsx(GN,{scope:e.__scopeSlider,name:n,disabled:c,min:r,max:i,valueIndexToChangeRef:f,thumbs:k.current,values:w,orientation:s,form:x,children:o.jsx(Lh.Provider,{scope:e.__scopeSlider,children:o.jsx(Lh.Slot,{scope:e.__scopeSlider,children:o.jsx(b,{"aria-disabled":c,"data-disabled":c?"":void 0,...v,ref:t,onPointerDown:he(v.onPointerDown,()=>{c||(C.current=w)}),min:r,max:i,inverted:y,onSlideStart:c?void 0:P,onSlideMove:c?void 0:S,onSlideEnd:c?void 0:N,onHomeKeyDown:()=>!c&&I(r,0,{commit:!0}),onEndKeyDown:()=>!c&&I(i,w.length-1,{commit:!0}),onStepKeyDown:({event:O,direction:R})=>{if(!c){const G=hb.includes(O.key)||O.shiftKey&&ub.includes(O.key)?10:1,H=f.current,z=w[H],A=a*G*R;I(z+A,H,{commit:!0})}}})})})})});gb.displayName=Bi;var[mb,fb]=pb(Bi,{startEdge:"left",endEdge:"right",size:"width",direction:1}),KN=g.forwardRef((e,t)=>{const{min:n,max:r,dir:i,inverted:a,onSlideStart:s,onSlideMove:c,onSlideEnd:l,onStepKeyDown:h,...u}=e,[d,p]=g.useState(null),y=Ee(t,b=>p(b)),x=g.useRef(void 0),v=zN(i),k=v==="ltr",f=k&&!a||!k&&a;function m(b){const w=x.current||d.getBoundingClientRect(),T=[0,w.width],P=ed(T,f?[n,r]:[r,n]);return x.current=w,P(b-w.left)}return o.jsx(mb,{scope:e.__scopeSlider,startEdge:f?"left":"right",endEdge:f?"right":"left",direction:f?1:-1,size:"width",children:o.jsx(vb,{dir:v,"data-orientation":"horizontal",...u,ref:y,style:{...u.style,"--radix-slider-thumb-transform":"translateX(-50%)"},onSlideStart:b=>{const w=m(b.clientX);s==null||s(w)},onSlideMove:b=>{const w=m(b.clientX);c==null||c(w)},onSlideEnd:()=>{x.current=void 0,l==null||l()},onStepKeyDown:b=>{const T=db[f?"from-left":"from-right"].includes(b.key);h==null||h({event:b,direction:T?-1:1})}})})}),QN=g.forwardRef((e,t)=>{const{min:n,max:r,inverted:i,onSlideStart:a,onSlideMove:s,onSlideEnd:c,onStepKeyDown:l,...h}=e,u=g.useRef(null),d=Ee(t,u),p=g.useRef(void 0),y=!i;function x(v){const k=p.current||u.current.getBoundingClientRect(),f=[0,k.height],b=ed(f,y?[r,n]:[n,r]);return p.current=k,b(v-k.top)}return o.jsx(mb,{scope:e.__scopeSlider,startEdge:y?"bottom":"top",endEdge:y?"top":"bottom",size:"height",direction:y?1:-1,children:o.jsx(vb,{"data-orientation":"vertical",...h,ref:d,style:{...h.style,"--radix-slider-thumb-transform":"translateY(50%)"},onSlideStart:v=>{const k=x(v.clientY);a==null||a(k)},onSlideMove:v=>{const k=x(v.clientY);s==null||s(k)},onSlideEnd:()=>{p.current=void 0,c==null||c()},onStepKeyDown:v=>{const f=db[y?"from-bottom":"from-top"].includes(v.key);l==null||l({event:v,direction:f?-1:1})}})})}),vb=g.forwardRef((e,t)=>{const{__scopeSlider:n,onSlideStart:r,onSlideMove:i,onSlideEnd:a,onHomeKeyDown:s,onEndKeyDown:c,onStepKeyDown:l,...h}=e,u=mc(Bi,n);return o.jsx(Ae.span,{...h,ref:t,onKeyDown:he(e.onKeyDown,d=>{d.key==="Home"?(s(d),d.preventDefault()):d.key==="End"?(c(d),d.preventDefault()):hb.concat(ub).includes(d.key)&&(l(d),d.preventDefault())}),onPointerDown:he(e.onPointerDown,d=>{const p=d.target;p.setPointerCapture(d.pointerId),d.preventDefault(),u.thumbs.has(p)?p.focus():r(d)}),onPointerMove:he(e.onPointerMove,d=>{d.target.hasPointerCapture(d.pointerId)&&i(d)}),onPointerUp:he(e.onPointerUp,d=>{const p=d.target;p.hasPointerCapture(d.pointerId)&&(p.releasePointerCapture(d.pointerId),a(d))})})}),yb="SliderTrack",bb=g.forwardRef((e,t)=>{const{__scopeSlider:n,...r}=e,i=mc(yb,n);return o.jsx(Ae.span,{"data-disabled":i.disabled?"":void 0,"data-orientation":i.orientation,...r,ref:t})});bb.displayName=yb;var Dh="SliderRange",wb=g.forwardRef((e,t)=>{const{__scopeSlider:n,...r}=e,i=mc(Dh,n),a=fb(Dh,n),s=g.useRef(null),c=Ee(t,s),l=i.values.length,h=i.values.map(p=>Tb(p,i.min,i.max)),u=l>1?Math.min(...h):0,d=100-Math.max(...h);return o.jsx(Ae.span,{"data-orientation":i.orientation,"data-disabled":i.disabled?"":void 0,...r,ref:c,style:{...e.style,[a.startEdge]:u+"%",[a.endEdge]:d+"%"}})});wb.displayName=Dh;var Mh="SliderThumb",xb=g.forwardRef((e,t)=>{const n=$N(e.__scopeSlider),[r,i]=g.useState(null),a=Ee(t,c=>i(c)),s=g.useMemo(()=>r?n().findIndex(c=>c.ref.current===r):-1,[n,r]);return o.jsx(YN,{...e,ref:a,index:s})}),YN=g.forwardRef((e,t)=>{const{__scopeSlider:n,index:r,name:i,...a}=e,s=mc(Mh,n),c=fb(Mh,n),[l,h]=g.useState(null),u=Ee(t,m=>h(m)),d=l?s.form||!!l.closest("form"):!0,p=ey(l),y=s.values[r],x=y===void 0?0:Tb(y,s.min,s.max),v=ZN(r,s.values.length),k=p==null?void 0:p[c.size],f=k?tI(k,x,c.direction):0;return g.useEffect(()=>{if(l)return s.thumbs.add(l),()=>{s.thumbs.delete(l)}},[l,s.thumbs]),o.jsxs("span",{style:{transform:"var(--radix-slider-thumb-transform)",position:"absolute",[c.startEdge]:`calc(${x}% + ${f}px)`},children:[o.jsx(Lh.ItemSlot,{scope:e.__scopeSlider,children:o.jsx(Ae.span,{role:"slider","aria-label":e["aria-label"]||v,"aria-valuemin":s.min,"aria-valuenow":y,"aria-valuemax":s.max,"aria-orientation":s.orientation,"data-orientation":s.orientation,"data-disabled":s.disabled?"":void 0,tabIndex:s.disabled?void 0:0,...a,ref:u,style:y===void 0?{display:"none"}:e.style,onFocus:he(e.onFocus,()=>{s.valueIndexToChangeRef.current=r})})}),d&&o.jsx(kb,{name:i??(s.name?s.name+(s.values.length>1?"[]":""):void 0),form:s.form,value:y},r)]})});xb.displayName=Mh;var XN="RadioBubbleInput",kb=g.forwardRef(({__scopeSlider:e,value:t,...n},r)=>{const i=g.useRef(null),a=Ee(i,r),s=HN(t);return g.useEffect(()=>{const c=i.current;if(!c)return;const l=window.HTMLInputElement.prototype,u=Object.getOwnPropertyDescriptor(l,"value").set;if(s!==t&&u){const d=new Event("input",{bubbles:!0});u.call(c,t),c.dispatchEvent(d)}},[s,t]),o.jsx(Ae.input,{style:{display:"none"},...n,ref:a,defaultValue:t})});kb.displayName=XN;function JN(e=[],t,n){const r=[...e];return r[n]=t,r.sort((i,a)=>i-a)}function Tb(e,t,n){const a=100/(n-t)*(e-t);return lb(a,[0,100])}function ZN(e,t){return t>2?`Value ${e+1} of ${t}`:t===2?["Minimum","Maximum"][e]:void 0}function eI(e,t){if(e.length===1)return 0;const n=e.map(i=>Math.abs(i-t)),r=Math.min(...n);return n.indexOf(r)}function tI(e,t,n){const r=e/2,a=ed([0,50],[0,r]);return(r-a(t)*n)*n}function nI(e){return e.slice(0,-1).map((t,n)=>e[n+1]-t)}function rI(e,t){if(t>0){const n=nI(e);return Math.min(...n)>=t}return!0}function ed(e,t){return n=>{if(e[0]===e[1]||t[0]===t[1])return t[0];const r=(t[1]-t[0])/(e[1]-e[0]);return t[0]+r*(n-e[0])}}function iI(e){return(String(e).split(".")[1]||"").length}function aI(e,t){const n=Math.pow(10,t);return Math.round(e*n)/n}var Cb=gb,oI=bb,sI=wb,cI=xb;const Sb=g.forwardRef(({className:e,...t},n)=>o.jsxs(Cb,{ref:n,className:pe("relative flex w-full touch-none select-none items-center",e),...t,children:[o.jsx(oI,{className:"relative h-2 w-full grow overflow-hidden rounded-full bg-secondary",children:o.jsx(sI,{className:"absolute h-full bg-primary"})}),o.jsx(cI,{className:"block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"})]}));Sb.displayName=Cb.displayName;const Pb=e=>e==="vi"?"vi-VN":"en-US",lI=new Set(["anh","ban","bang","bi","bo","cac","cach","can","cau","cho","co","con","cua","cung","da","dang","de","den","di","do","duoc","gi","giua","hay","hon","khi","khong","la","lai","lam","len","luc","ma","mot","muon","nay","nen","neu","nguoi","nhieu","nhung","noi","o","phai","qua","ra","rang","roi","sau","se","tai","tao","thi","them","theo","toi","trong","tu","va","van","vao","ve","voi"]),hI={api:"ây pi ai",ui:"iu ai",ux:"iu ích",sql:"ét kiu eo",html:"hát ti em eo",css:"si ét ét",js:"giây ét",json:"giây sần",xml:"ích em eo",http:"hát ti ti pi",https:"hát ti ti pi ét",url:"iu a eo",uri:"iu a ai",rest:"rést",crud:"cờ rát",jwt:"giây đáp liu ti",oauth:"âu óth",cors:"coóc",orm:"âu a em",npm:"en pi em",node:"nốt",nodejs:"nốt giây ét",react:"ri áct",vue:"viu",angular:"ăng ghiu lờ",next:"néxt",nextjs:"néxt giây ét",javascript:"gia va script",typescript:"thai sờ script",frontend:"front end",backend:"back end",fullstack:"full stack",framework:"frame work",component:"com pô nần",hook:"húc",hooks:"húc",state:"stây",props:"próp",router:"rao tờ",routing:"rao ting",cache:"két",server:"sơ vờ",client:"clai ần",database:"đây ta bêis",docker:"đóc cơ",kubernetes:"ku bờ nét tìs",github:"gít hấp",git:"gít",agile:"a giai",scrum:"sờ cờ ram"},uI=e=>e.toLowerCase().replace(/[^a-z0-9+#]/g,""),dI=e=>{const t={a:"ây",b:"bi",c:"si",d:"đi",e:"i",f:"ép",g:"gi",h:"hát",i:"ai",j:"giây",k:"kây",l:"eo",m:"em",n:"en",o:"âu",p:"pi",q:"kiu",r:"a",s:"ét",t:"ti",u:"iu",v:"vi",w:"đáp liu",x:"ích",y:"wai",z:"di"};return e.toLowerCase().split("").map(n=>t[n]??n).join(" ")},pI=e=>{const t=e.replace(/^['"([{]+|['")\]}.,:;!?]+$/g,""),n=uI(t);if(!n)return e;const r=hI[n];return r?e.replace(t,r):/^[A-Z]{2,5}$/.test(t)?e.replace(t,dI(t)):e},gI=e=>e.replace(/[A-Za-z][A-Za-z0-9+#./-]*/g,t=>{const n=t.replace(/^['"([{]+|['")\]}.,:;!?]+$/g,"");return vI(n)?pI(t):t}),mI=(e,t)=>t==="vi"?{heading:"Tiêu đề",paragraph:"Đoạn",list:"Danh sách",quote:"Trích dẫn"}[e]:{heading:"Heading",paragraph:"Paragraph",list:"List",quote:"Quote"}[e],bg=(e,t)=>{const n=Pb(t).toLowerCase(),r=e.filter(a=>a.lang.toLowerCase()===n);if(r.length>0)return r.find(a=>/vietnam|việt|english|google|microsoft/i.test(a.name))??r[0];const i=n.split("-")[0];return e.find(a=>a.lang.toLowerCase().startsWith(i))},fI=e=>{const[t,n]=g.useState([]);return g.useEffect(()=>{if(!e)return;const r=()=>n(window.speechSynthesis.getVoices());return r(),window.speechSynthesis.addEventListener("voiceschanged",r),()=>window.speechSynthesis.removeEventListener("voiceschanged",r)},[e]),t},vI=(e,t)=>{const n=e.replace(/^['"([{]+|['")\]}.,:;!?]+$/g,"");return!/^[A-Za-z][A-Za-z0-9+#./-]*$/.test(n)||lI.has(n.toLowerCase())?!1:/[A-Z]/.test(n)||/[0-9+#./-]/.test(n)||n.length>3},yI=(e,t=180)=>{const n=e.replace(/\s+/g," ").trim(),r=[];let i=n;for(;i.length>t;){const a=i.slice(0,t),s=Math.max(a.lastIndexOf(". "),a.lastIndexOf("! "),a.lastIndexOf("? "),a.lastIndexOf("; ")),c=a.lastIndexOf(" "),l=s>80?s+1:c>80?c:t;r.push(i.slice(0,l).trim()),i=i.slice(l).trim()}return i&&r.push(i),r},bI=e=>`https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=vi&total=1&idx=0&textlen=${e.length}&prev=input&q=${encodeURIComponent(e)}`;let Ro;const wI=()=>window.responsiveVoice?Promise.resolve(window.responsiveVoice):Ro||(Ro=new Promise((e,t)=>{const n=document.querySelector("script[data-responsive-voice]"),r=n??document.createElement("script"),i=window.setTimeout(()=>t(new Error("ResponsiveVoice timed out")),12e3);r.setAttribute("data-responsive-voice","true"),r.src="https://code.responsivevoice.org/responsivevoice.js",r.async=!0,r.onload=()=>{window.clearTimeout(i),window.responsiveVoice?e(window.responsiveVoice):t(new Error("ResponsiveVoice did not initialize"))},r.onerror=()=>{window.clearTimeout(i),t(new Error("Unable to load ResponsiveVoice"))},n||document.head.appendChild(r)}),Ro),xI=({activeIndex:e,language:t,onActiveIndexChange:n,onEnabledChange:r,onSelectIndex:i,playRequest:a,selectedIndex:s,segments:c,speechEnabled:l})=>{const[h,u]=g.useState(!1),[d,p]=g.useState(!1),[y,x]=g.useState(1),[v,k]=g.useState(),f=g.useRef(0),m=g.useRef(),b=g.useRef(),w=g.useRef(),T=g.useRef(!1),C=typeof window<"u"&&"speechSynthesis"in window&&"SpeechSynthesisUtterance"in window,P=fI(C),S=g.useMemo(()=>bg(P,"vi"),[P]),N=g.useMemo(()=>bg(P,"en"),[P]),I=t==="vi"?S:N,O=t!=="vi"||!!(S!=null&&S.lang.toLowerCase().startsWith("vi")),R=t==="vi",M=g.useMemo(()=>({title:t==="vi"?"Nghe bài viết":"Listen to article",eyebrow:t==="vi"?"Trình đọc":"Reader",arm:t==="vi"?"Chọn điểm đọc":"Choose start point",armed:t==="vi"?"Đang chọn điểm":"Selecting start",close:t==="vi"?"Tắt chọn điểm":"Disable selection",inactive:t==="vi"?"Chọn vị trí nghe trong bài.":"Choose where listening starts.",activeHint:t==="vi"?"Chọn một thanh ngăn cách trong bài, rồi bấm Phát.":"Select a divider in the article, then press Play.",play:t==="vi"?"Phát":"Play",pause:t==="vi"?"Tạm dừng":"Pause",resume:t==="vi"?"Tiếp tục":"Resume",stop:t==="vi"?"Dừng":"Stop",previous:t==="vi"?"Đoạn trước":"Previous section",next:t==="vi"?"Đoạn tiếp":"Next section",rate:t==="vi"?"Tốc độ":"Speed",current:t==="vi"?"Điểm đọc":"Start point",noPoint:t==="vi"?"Chưa chọn vị trí, sẽ phát từ đầu":"No start point selected, starts from the top",unsupported:t==="vi"?"Trình duyệt này chưa hỗ trợ đọc văn bản miễn phí.":"This browser does not support free text-to-speech.",missingVoice:t==="vi"?"Chưa tìm thấy giọng vi-VN trong trình duyệt này. Hãy cài/cho phép giọng tiếng Việt để phát đúng tiếng Việt.":"No matching voice was found for this language.",provider:t==="vi"?"TTS · giọng Việt online":"TTS · automatic VI/EN voice switching"}),[t]);g.useEffect(()=>()=>{C&&window.speechSynthesis.cancel()},[C]);const U=Q=>{f.current===Q&&(p(!1),u(!1),n(void 0))},G=(Q,re)=>new Promise((me,ee)=>{if(f.current!==re||T.current){me();return}const se=new Audio(Q);m.current=se,se.preload="auto",se.onended=()=>me(),se.onerror=()=>ee(new Error("Unable to play Vietnamese TTS URL")),se.play().catch(ee)}),H=(Q,re)=>new Promise((me,ee)=>{if(!S){ee(new Error("No local Vietnamese voice"));return}if(f.current!==re||T.current){me();return}const se=new SpeechSynthesisUtterance(Q);se.lang="vi-VN",se.voice=S,se.rate=y,se.pitch=1,se.onend=()=>me(),se.onerror=()=>ee(new Error("Local Vietnamese voice failed")),window.speechSynthesis.speak(se)}),z=(Q,re)=>new Promise((me,ee)=>{wI().then(se=>{if(f.current!==re||T.current){me();return}w.current=se,se.cancel(),se.speak(Q,"Vietnamese Female",{rate:y,onend:()=>me()})}).catch(ee)}),A=async(Q,re)=>{const me=yI(Q,220);for(const ee of me){if(f.current!==re||T.current)return;try{await H(ee,re)}catch{try{await z(ee,re)}catch{await G(bI(ee),re)}}}},D=(Q,re)=>{if(f.current!==Q)return;if(T.current||re>=c.length){U(Q);return}i(re),n(re);const me=t==="vi"?gI(c[re].text):c[re].text;if(R){A(me,Q).then(()=>{T.current||D(Q,re+1)}).catch(E=>{console.error("Vietnamese TTS failed:",E),k(t==="vi"?"Không thể phát giọng tiếng Việt trên trình duyệt này. Vui lòng thử Chrome/Edge hoặc tắt tiện ích chặn script/audio.":"Unable to play audio."),U(Q)});return}const ee=new SpeechSynthesisUtterance(me);ee.lang=Pb(t),ee.rate=y,ee.pitch=1;const se=N;se&&(ee.voice=se),ee.onend=()=>{T.current||D(Q,re+1)},ee.onerror=()=>U(Q),window.speechSynthesis.speak(ee)},F=Q=>{var ee,se,E;if(!C||c.length===0)return;const re=Q??0,me=f.current+1;f.current=me,T.current=!1,(ee=w.current)==null||ee.cancel(),(se=w.current)==null||se.cancel(),(E=m.current)==null||E.pause(),m.current=void 0,b.current&&(URL.revokeObjectURL(b.current),b.current=void 0),window.speechSynthesis.cancel(),k(void 0),i(re),p(!0),u(!1),D(me,re)};g.useEffect(()=>{a&&(r(!0),F(a.index))},[a==null?void 0:a.nonce]);const $=()=>{var Q;C&&(T.current=!0,f.current+=1,(Q=m.current)==null||Q.pause(),m.current=void 0,b.current&&(URL.revokeObjectURL(b.current),b.current=void 0),window.speechSynthesis.cancel(),p(!1),u(!1),n(void 0))},W=()=>{if(C){if(h){m.current?m.current.play().catch(()=>{}):w.current?w.current.resume():window.speechSynthesis.resume(),u(!1);return}m.current?m.current.pause():w.current?w.current.pause():window.speechSynthesis.pause(),u(!0)}},ze=Q=>{r(Q),Q||($(),i(void 0))},de=Q=>{const re=Math.min(Math.max(Q,0),Math.max(c.length-1,0));i(re),d&&F(re)};if(c.length===0)return null;const Oe=s===void 0?void 0:c[s];return o.jsxs("section",{className:"overflow-hidden rounded-xl border border-border/60 bg-card/80 shadow-sm backdrop-blur",children:[o.jsxs("div",{className:pe("p-5",l&&"border-b border-border/60 bg-primary/[.035]"),children:[o.jsxs("div",{className:"mb-4 flex items-start justify-between gap-3",children:[o.jsxs("div",{children:[o.jsxs("p",{className:"mb-2 flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[.18em] text-primary",children:[o.jsx(P1,{className:"h-4 w-4"}),M.eyebrow]}),o.jsxs("h2",{className:"flex items-center gap-2 text-lg font-semibold leading-6",children:[o.jsx(J1,{className:"h-5 w-5 text-primary"}),M.title]})]}),l&&o.jsx("span",{className:"shrink-0 rounded-full border border-primary/35 bg-primary/10 px-2.5 py-1 font-mono text-[10px] text-primary",children:M.armed})]}),o.jsxs(ne,{type:"button",variant:l?"outline":"default",className:"w-full justify-center",onClick:()=>ze(!l),children:[l?o.jsx(Fa,{className:"mr-2 h-4 w-4"}):o.jsx(Z1,{className:"mr-2 h-4 w-4"}),l?M.close:M.arm]})]}),l&&o.jsxs("div",{className:"space-y-5 p-5 animate-slide-up",children:[o.jsx("p",{className:"text-sm leading-6 text-muted-foreground",children:M.activeHint}),C?o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"rounded-lg border border-border/70 bg-background/60 p-4",children:[o.jsx("p",{className:"mb-2 font-mono text-[10px] uppercase tracking-[.16em] text-primary",children:M.current}),Oe?o.jsxs("p",{className:"line-clamp-3 text-sm font-medium leading-6",children:[s+1,". ",mI(Oe.kind,t)," - ",Oe.label]}):o.jsx("p",{className:"text-sm text-muted-foreground",children:M.noPoint})]}),t==="vi"&&!O&&!R&&o.jsx("p",{className:"rounded-lg border border-amber-500/30 bg-amber-500/10 px-3 py-2 text-xs leading-5 text-amber-700 dark:text-amber-300",children:M.missingVoice}),o.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[o.jsxs(ne,{type:"button",variant:"outline",size:"icon",onClick:()=>s!==void 0&&de(s-1),disabled:s===void 0||s<=0,children:[o.jsx(H1,{className:"h-4 w-4"}),o.jsx("span",{className:"sr-only",children:M.previous})]}),o.jsxs(ne,{type:"button",onClick:()=>d?W():F(s),disabled:c.length===0,className:"min-w-[7.75rem] flex-1",children:[d&&!h?o.jsx(U1,{className:"mr-2 h-4 w-4"}):o.jsx(_1,{className:"mr-2 h-4 w-4"}),d?h?M.resume:M.pause:M.play]}),o.jsxs(ne,{type:"button",variant:"outline",size:"icon",onClick:$,disabled:!d,children:[o.jsx(G1,{className:"h-4 w-4"}),o.jsx("span",{className:"sr-only",children:M.stop})]}),o.jsxs(ne,{type:"button",variant:"outline",size:"icon",onClick:()=>s!==void 0&&de(s+1),disabled:s===void 0||s>=c.length-1,children:[o.jsx($1,{className:"h-4 w-4"}),o.jsx("span",{className:"sr-only",children:M.next})]})]}),o.jsxs("div",{children:[o.jsxs("div",{className:"mb-2 flex items-center justify-between text-xs text-muted-foreground",children:[o.jsx("span",{children:M.rate}),o.jsxs("span",{className:"font-mono",children:[y.toFixed(1),"x"]})]}),o.jsx(Sb,{value:[y],min:.7,max:1.4,step:.1,onValueChange:Q=>x(Q[0]??1)})]}),o.jsxs("p",{className:"border-t border-border/60 pt-4 text-xs leading-5 text-muted-foreground",children:[M.provider,R?" · Edge Vietnamese TTS":I?` · ${I.name}`:""]})]}):o.jsx("p",{className:"rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive",children:M.unsupported})]})]})},Xt=595,Mt=842,ni=4,_e=52,kI=64,wg=66,ht=Xt-_e*2,Qo="HAIIT.DEV",TI="haihttt974.github.io",Rs="Segoe UI, Inter, Arial, sans-serif",ta="Cascadia Code, Consolas, SFMono-Regular, monospace",CI={javascript:"js",jsx:"js",typescript:"ts",tsx:"ts",py:"python",cs:"csharp","c#":"csharp"},xg={js:new Set(["async","await","break","case","catch","class","const","continue","default","do","else","export","extends","finally","for","from","function","if","import","in","instanceof","let","new","of","return","switch","throw","try","typeof","var","void","while","yield"]),ts:new Set(["abstract","as","async","await","break","case","catch","class","const","continue","default","do","else","enum","export","extends","finally","for","from","function","if","implements","import","in","infer","interface","keyof","let","namespace","new","of","private","protected","public","readonly","return","satisfies","switch","throw","try","type","typeof","var","void","while"]),python:new Set(["and","as","assert","async","await","break","class","continue","def","del","elif","else","except","False","finally","for","from","global","if","import","in","is","lambda","None","nonlocal","not","or","pass","raise","return","True","try","while","with","yield"]),csharp:new Set(["abstract","async","await","base","break","case","catch","class","const","decimal","default","else","enum","false","finally","for","foreach","from","get","if","in","interface","internal","is","namespace","new","null","private","protected","public","readonly","record","return","sealed","set","static","string","switch","this","throw","true","try","using","var","void","when","where"])},SI=new Set(["true","false","null","undefined","True","False","None"]),PI=new Set(["Array","Boolean","Date","Decimal","Error","Guid","Iterable","List","Map","Number","Promise","Record","Set","String","Task","ValueError","dict","list","str","int","float","bool"]),AI=/(\/\*[\s\S]*?\*\/|\/\/.*|#.*|`(?:\\.|[^`])*`|"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|@[A-Za-z_]\w*|\b\d+(?:\.\d+)?\b|\b[A-Za-z_]\w*\b|=>|==={0,1}|!==?|\+\+|--|&&|\|\||[{}[\]().,;:<>+\-*/%=!?|&])/g,NI=e=>e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^\x20-\x7e]/g,"").replace(/\\/g,"\\\\").replace(/\(/g,"\\(").replace(/\)/g,"\\)"),II=e=>e.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"").slice(0,80)||"blog-post",ur=({size:e,weight:t="400",family:n=Rs,italic:r})=>`${r?"italic ":""}${t} ${e}px ${n}`,jI=e=>CI[e.trim().toLowerCase()]??e.trim().toLowerCase(),EI=e=>{const t=[];let n=0;return e.replace(AI,(r,i,a)=>(a>n&&t.push(e.slice(n,a)),t.push(r),n=a+r.length,r)),n<e.length&&t.push(e.slice(n)),t},RI=(e,t)=>e.slice(t+1).find(n=>n.trim().length>0),LI=(e,t,n)=>{const r=xg[jI(t)]??xg.js;return/^\s+$/.test(e)?"#e2e8f0":/^(\/\/|#|\/\*)/.test(e)?"#64748b":/^(`|"|')/.test(e)?"#6ee7b7":/^@\w+/.test(e)?"#fcd34d":/^\d/.test(e)?"#fdba74":SI.has(e)?"#c4b5fd":r.has(e)?"#7dd3fc":PI.has(e)||/^[A-Z][A-Za-z0-9_]*$/.test(e)?"#a5f3fc":n==="("?"#fde68a":/^[{}[\]().,;:<>+\-*/%=!?|&]+$/.test(e)?"#cbd5e1":"#f8fafc"},ul=e=>e.replace(/`([^`]+)`/g,"$1").replace(/\*\*([^*]+)\*\*/g,"$1"),na=(e,t,n,r)=>{e.font=ur(r);const i=t.replace(/\s+/g," ").trim().split(" ").filter(Boolean),a=[];let s="";return i.forEach(c=>{const l=s?`${s} ${c}`:c;if(e.measureText(l).width<=n){s=l;return}if(s&&a.push(s),e.measureText(c).width<=n){s=c;return}let h="";Array.from(c).forEach(u=>{const d=`${h}${u}`;e.measureText(d).width>n&&h?(a.push(h),h=u):h=d}),s=h}),s&&a.push(s),a},kg=()=>{const e=document.createElement("canvas");e.width=Xt*ni,e.height=Mt*ni;const t=e.getContext("2d");if(!t)throw new Error("Canvas is not available");return t.scale(ni,ni),t.fillStyle="#fbfaf7",t.fillRect(0,0,Xt,Mt),{canvas:e,context:t,y:kI}},Ab=(e,t,n,r,i,a)=>{e.beginPath(),e.moveTo(t+a,n),e.arcTo(t+r,n,t+r,n+i,a),e.arcTo(t+r,n+i,t,n+i,a),e.arcTo(t,n+i,t,n,a),e.arcTo(t,n,t+r,n,a),e.closePath()},zr=(e,t,n,r,i,a,s)=>{e.save(),Ab(e,t,n,r,i,a),e.fillStyle=s,e.fill(),e.restore()},dl=(e,t,n,r,i,a,s)=>{e.save(),Ab(e,t,n,r,i,a),e.strokeStyle=s,e.lineWidth=1,e.stroke(),e.restore()},on=(e,t,n,r,i)=>{e.font=ur(i),e.fillStyle=i.color??"#334155",e.textAlign="left",e.textBaseline="alphabetic",e.fillText(t,n,r)},DI=(e,t)=>{e.save(),e.translate(Xt/2,Mt/2),e.rotate(-28*Math.PI/180),e.globalAlpha=.035,e.fillStyle="#0f172a",e.textAlign="center",e.font=`850 42px ${Rs}`,e.fillText("HAIIT.DEV · PROFESSIONAL LEARNING NOTES",0,0),e.restore()},MI=(e,t,n,r)=>{const{context:i}=e;DI(i),i.fillStyle="#0f172a",i.font=`800 10px ${Rs}`,i.textAlign="left",i.fillText(Qo,_e,30),i.fillStyle="#64748b",i.font=`500 9px ${Rs}`,i.fillText("Learning notes / PDF edition",_e+70,30),i.textAlign="right",i.fillText(`${TI}  ·  ${t}/${n}`,Xt-_e,Mt-30),i.strokeStyle="#e2e8f0",i.lineWidth=1,i.beginPath(),i.moveTo(_e,Mt-50),i.lineTo(Xt-_e,Mt-50),i.stroke()},qI=(e,t)=>{const n=URL.createObjectURL(e),r=document.createElement("a");r.href=n,r.download=t,document.body.appendChild(r),r.click(),r.remove(),window.setTimeout(()=>URL.revokeObjectURL(n),1e3)},OI=async(e,t)=>{var ie;await((ie=document.fonts)==null?void 0:ie.ready);const n=[kg()],r=()=>n[n.length-1],i=()=>(n.push(kg()),r()),a=L=>{r().y+L<=Mt-wg||i()},s=(L,K,J)=>{const ae=(J==null?void 0:J.x)??_e,te=(J==null?void 0:J.width)??ht,Y=K.lineHeight??K.size*1.55;na(r().context,ul(L),te,K).forEach(Ue=>{a(Y+2);const Tn=r();on(Tn.context,Ue,ae,Tn.y,K),Tn.y+=Y}),r().y+=(J==null?void 0:J.gapAfter)??8},c=()=>{a(24);const L=r();L.context.strokeStyle="#dbe4ef",L.context.lineWidth=1,L.context.beginPath(),L.context.moveTo(_e,L.y),L.context.lineTo(Xt-_e,L.y),L.context.stroke(),L.y+=24},l=(L,K,J,ae)=>{if(L.font=ur(ae),L.measureText(K).width<=J)return K;let te=K;for(;te.length>1&&L.measureText(`${te}...`).width>J;)te=te.slice(0,-1);return`${te}...`},h=(L,K,J,ae,te)=>{const Y=r();zr(Y.context,J,ae,te,34,8,"#f8fafc"),dl(Y.context,J,ae,te,34,8,"#dbe4ef"),on(Y.context,L.toUpperCase(),J+10,ae+12,{size:6.7,weight:"800",color:"#64748b"}),on(Y.context,l(Y.context,K,te-20,{size:8.8,weight:"800"}),J+10,ae+26,{size:8.8,weight:"800",color:"#0f172a"})},u=(L,K)=>(L.font=ur({size:8.2,family:ta}),L.measureText(K).width),d=(L,K,J)=>{const ae=[];let te="";return Array.from(K).forEach(Y=>{const Re=`${te}${Y}`;te&&u(L,Re)>J?(ae.push(te),te=Y):te=Re}),te&&ae.push(te),ae},p=(L,K,J,ae)=>{const te=EI(K||" ").flatMap(Ue=>u(L,Ue)>ae?d(L,Ue,ae):[Ue]),Y=[[]];let Re=0;return te.forEach(Ue=>{const Tn=u(L,Ue);Y[Y.length-1].length>0&&Re+Tn>ae&&(Y.push([]),Re=0),Y[Y.length-1].push(Ue),Re+=Tn}),Y.map(Ue=>({tokens:Ue,language:J}))},y=(L,K,J,ae)=>{let te=J;L.font=ur({size:8.2,family:ta}),K.tokens.forEach((Y,Re)=>{L.fillStyle=LI(Y,K.language,RI(K.tokens,Re)),L.fillText(Y,te,ae),te+=L.measureText(Y).width})},x=(L,K)=>{const Y=_e,Re=ht,Ue=42,Tn=Y+Ue+12,jb=Re-Ue-24,fc=L.flatMap((le,vc)=>p(r().context,le,K,jb).map((Hi,Mr)=>({...Hi,sourceLine:vc+1,continued:Mr>0})));let zi=0;for(;zi<fc.length;){a(30+15.5+13+12);const le=r(),vc=Mt-wg-le.y-30-13,Hi=Math.max(1,Math.min(fc.length-zi,Math.floor(vc/15.5))),Mr=30+Hi*15.5+13,Vt=le.y;zr(le.context,Y,Vt,Re,Mr,8,"#020617"),dl(le.context,Y,Vt,Re,Mr,8,"#334155"),zr(le.context,Y,Vt,Re,30,8,"#0f172a"),le.context.fillStyle="#0f172a",le.context.fillRect(Y,Vt+17,Re,14),[["#f87171",16],["#fbbf24",30],["#34d399",44]].forEach(([qr,Or])=>{le.context.fillStyle=String(qr),le.context.beginPath(),le.context.arc(Y+Number(Or),Vt+15,4,0,Math.PI*2),le.context.fill()}),on(le.context,`${K||"code"}${zi>0?" · continued":""}`.toUpperCase(),Y+62,Vt+19,{size:8,weight:"800",color:"#94a3b8",family:ta}),le.context.font=ur({size:8,weight:"600",color:"#64748b",family:ta}),le.context.fillStyle="#64748b",le.context.textAlign="right",le.context.fillText(Qo.toLowerCase(),Y+Re-12,Vt+19),le.context.textAlign="left",le.context.strokeStyle="#1e293b",le.context.beginPath(),le.context.moveTo(Y+Ue,Vt+30),le.context.lineTo(Y+Ue,Vt+Mr-13+3),le.context.stroke();for(let qr=0;qr<Hi;qr+=1){const Or=fc[zi+qr],td=Vt+30+14+qr*15.5;le.context.font=ur({size:8,family:ta}),le.context.fillStyle=Or.continued?"#334155":"#475569",le.context.textAlign="right",le.context.fillText(Or.continued?"↳":String(Or.sourceLine),Y+Ue-10,td),le.context.textAlign="left",y(le.context,Or,Tn,td)}le.y+=Mr+14,zi+=Hi}},v=new Date(e.date).toLocaleDateString(t.locale,{year:"numeric",month:"long",day:"numeric"}),k=new Date().toLocaleDateString(t.locale,{year:"numeric",month:"long",day:"numeric"}),f=r(),m=_e,b=52,w=24,T=m+w,C=ht-w*2,P={size:8.5,weight:"850",color:"#2563eb",lineHeight:12},S={size:24,weight:"850",color:"#0f172a",lineHeight:30},N={size:11.2,color:"#475569",lineHeight:17.5},I=na(f.context,t.categoryName.toUpperCase(),C-116,P),O=na(f.context,e.title,C,S),R=na(f.context,e.excerpt,C,N),M=18,G=Math.max(214,30+I.length*12+14+O.length*30+10+R.length*17.5+M+34+24);zr(f.context,m+5,b+7,ht,G,14,"rgba(15, 23, 42, 0.08)"),zr(f.context,m,b,ht,G,14,"#ffffff"),dl(f.context,m,b,ht,G,14,"#d7e2ee");const H=f.context.createLinearGradient(m,b,m,b+G);H.addColorStop(0,"#2563eb"),H.addColorStop(1,"#14b8a6"),f.context.fillStyle=H,f.context.fillRect(m,b,5,G),f.context.fillStyle="#eff6ff",f.context.beginPath(),f.context.arc(m+ht-42,b+42,26,0,Math.PI*2),f.context.fill(),f.context.fillStyle="#dbeafe",f.context.beginPath(),f.context.arc(m+ht-74,b+72,12,0,Math.PI*2),f.context.fill();let z=b+34;I.forEach(L=>{on(f.context,L,T,z,P),z+=12}),on(f.context,"PDF EDITION",m+ht-104,b+34,{size:7.5,weight:"850",color:"#1d4ed8"}),z+=14,O.forEach(L=>{on(f.context,L,T,z,S),z+=30}),z+=8,R.forEach(L=>{on(f.context,L,T,z,N),z+=17.5});const A=z+M,D=10,F=(C-D*2)/3;h(t.language==="vi"?"Ngày đăng":"Published",v,T,A,F),h(t.language==="vi"?"Thời lượng":"Read time",e.readTime,T+F+D,A,F),h(t.language==="vi"?"Nguồn":"Source",Qo,T+(F+D)*2,A,F),f.y=b+G+28,s(`${t.language==="vi"?"Thẻ nội dung":"Tags"}: ${e.tags.join(", ")}`,{size:9.5,weight:"600",color:"#64748b",lineHeight:14},{gapAfter:16}),c();const $=e.content.trim().split(`
`);let W=0;for(;W<$.length;){const L=$[W].trim();if(!L){W+=1;continue}if(L.startsWith("```")){const J=L.slice(3).trim()||"code",ae=[];for(W+=1;W<$.length&&!$[W].trim().startsWith("```");)ae.push($[W]),W+=1;x(ae,J),W+=1;continue}if(L.startsWith("# ")){r().y+=4,s(L.slice(2),{size:19,weight:"850",color:"#0f172a",lineHeight:25},{gapAfter:8}),W+=1;continue}if(L.startsWith("## ")){a(42);const J=r();J.y+=10,J.context.fillStyle="#2563eb",J.context.fillRect(_e,J.y-17,3,22),s(L.slice(3),{size:15.5,weight:"800",color:"#1e293b",lineHeight:21},{x:_e+14,width:ht-14,gapAfter:8}),W+=1;continue}if(L.startsWith("### ")){s(L.slice(4),{size:13,weight:"800",color:"#1e293b",lineHeight:18},{gapAfter:5}),W+=1;continue}if(L.startsWith("- ")){for(;W<$.length&&$[W].trim().startsWith("- ");){const J=ul($[W].trim().slice(2));a(22);const ae=r();ae.context.fillStyle="#2563eb",ae.context.beginPath(),ae.context.arc(_e+5,ae.y-5,2.2,0,Math.PI*2),ae.context.fill(),s(J,{size:10.5,color:"#334155",lineHeight:17},{x:_e+16,width:ht-16,gapAfter:2}),W+=1}r().y+=6;continue}if(L.startsWith("> ")){const J=ul(L.slice(2)),ae=na(r().context,J,ht-36,{size:11.5,weight:"600",italic:!0,lineHeight:18});a(ae.length*18+26);const te=r(),Y=te.y-8,Re=ae.length*18+22;zr(te.context,_e,Y,ht,Re,8,"#eff6ff"),te.context.fillStyle="#2563eb",te.context.fillRect(_e,Y,3,Re),te.y+=10,ae.forEach(Ue=>{on(te.context,Ue,_e+18,te.y,{size:11.5,weight:"600",italic:!0,color:"#475569",lineHeight:18}),te.y+=18}),te.y+=12,W+=1;continue}const K=[L];for(W+=1;W<$.length&&$[W].trim()&&!/^(#{1,3} |```|- |> )/.test($[W].trim());)K.push($[W].trim()),W+=1;s(K.join(" "),{size:10.6,color:"#334155",lineHeight:17.5},{gapAfter:8})}c(),s(t.sourceNote,{size:8.8,color:"#64748b",lineHeight:13.5},{gapAfter:8}),s(`${t.language==="vi"?"Bản PDF được xuất ngày":"PDF exported on"} ${k}. ${t.language==="vi"?"Vui lòng giữ nguyên nguồn HAIIT.DEV khi chia sẻ hoặc trích dẫn.":"Please keep HAIIT.DEV attribution when sharing or quoting."}`,{size:9,weight:"700",color:"#334155",lineHeight:14},{gapAfter:0}),n.forEach((L,K)=>MI(L,K+1,n.length,t.language));const ze=n.map(L=>{const K=L.canvas.toDataURL("image/jpeg",.98);return atob(K.split(",")[1])}),de=[],Oe=L=>(de.push(L),de.length),Q=Oe("<< /Type /Catalog /Pages 2 0 R >>"),re=Oe(""),me=[];ze.forEach((L,K)=>{const J=Oe(`<< /Type /XObject /Subtype /Image /Width ${Xt*ni} /Height ${Mt*ni} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${L.length} >>
stream
${L}
endstream`),ae=`q
${Xt} 0 0 ${Mt} 0 0 cm
/Im${K+1} Do
Q`,te=Oe(`<< /Length ${ae.length} >>
stream
${ae}
endstream`),Y=Oe(`<< /Type /Page /Parent ${re} 0 R /MediaBox [0 0 ${Xt} ${Mt}] /Resources << /XObject << /Im${K+1} ${J} 0 R >> >> /Contents ${te} 0 R >>`);me.push(Y)}),de[re-1]=`<< /Type /Pages /Kids [${me.map(L=>`${L} 0 R`).join(" ")}] /Count ${me.length} >>`,de[Q-1]="<< /Type /Catalog /Pages 2 0 R >>";let ee=`%PDF-1.4
%âãÏÓ
`;const se=[0];de.forEach((L,K)=>{se.push(ee.length),ee+=`${K+1} 0 obj
${L}
endobj
`});const E=ee.length;ee+=`xref
0 ${de.length+1}
0000000000 65535 f 
`,se.slice(1).forEach(L=>{ee+=`${L.toString().padStart(10,"0")} 00000 n 
`}),ee+=`trailer
<< /Size ${de.length+1} /Root 1 0 R /Info << /Title (${NI(e.title)}) /Author (${Qo}) >> >>
startxref
${E}
%%EOF`;const B=new Uint8Array(ee.length);for(let L=0;L<ee.length;L+=1)B[L]=ee.charCodeAt(L)&255;qI(new Blob([B],{type:"application/pdf"}),`${II(e.title)}.pdf`)},Tg=/^#{1,3}\s+/,UI=/^(#{1,3} |```|- |> )/,Nb=e=>e.replace(/`([^`]+)`/g,"$1").replace(/\*\*([^*]+)\*\*/g,"$1").replace(/\s+/g," ").trim(),_I=e=>{const t=Nb(e);return t.length>84?`${t.slice(0,81).trim()}...`:t},FI=(e,t,n)=>{const r=Nb(t);if(r)return{id:`speech-segment-${n}`,kind:e,label:_I(r),text:r}},VI=e=>{const t=e.trim().split(`
`),n=[];let r=0;const i=(a,s)=>{const c=FI(a,s,n.length);c&&n.push(c)};for(;r<t.length;){const a=t[r].trim();if(!a){r+=1;continue}if(a.startsWith("```")){for(r+=1;r<t.length&&!t[r].trim().startsWith("```");)r+=1;r+=1;continue}if(Tg.test(a)){i("heading",a.replace(Tg,"")),r+=1;continue}if(a.startsWith("- ")){const c=[];for(;r<t.length&&t[r].trim().startsWith("- ");)c.push(t[r].trim().slice(2)),r+=1;i("list",c.join(". "));continue}if(a.startsWith("> ")){i("quote",a.slice(2)),r+=1;continue}const s=[a];for(r+=1;r<t.length&&t[r].trim()&&!UI.test(t[r].trim());)s.push(t[r].trim()),r+=1;i("paragraph",s.join(" "))}return n},BI=()=>{var R;const{t:e,locale:t,language:n}=qe(),{toast:r}=Qs(),{id:i}=Lk(),a=At(),s=typeof((R=a.state)==null?void 0:R.from)=="string"&&a.state.from.startsWith("/blog")?a.state.from:"/blog",[c,l]=g.useState(()=>i?un.getCachedPost(i):void 0),[h,u]=g.useState(!c),[d,p]=g.useState([]),y=(c==null?void 0:c.id)===i?c:void 0,x=y?qy(y,n):void 0,v=g.useMemo(()=>x?VI(x.content):[],[x==null?void 0:x.content]),[k,f]=g.useState(void 0),[m,b]=g.useState(void 0),[w,T]=g.useState(!1),[C,P]=g.useState();g.useEffect(()=>{f(void 0),b(void 0),T(!1),P(void 0),typeof window<"u"&&"speechSynthesis"in window&&window.speechSynthesis.cancel()},[i,n]);const S=M=>{f(M)};if(g.useEffect(()=>{if(!i)return;let M=!1;const U=un.getCachedPost(i);return l(U),(async()=>{u(!0);const H=await un.getPost(i,n);M||(l(H),u(!1));const z=await un.incrementView(i);!M&&z&&H&&l({...H,viewCount:z.viewCount})})(),()=>{M=!0}},[i,n]),g.useEffect(()=>{if(!y){p([]);return}let M=!1;return(async()=>{const G=await un.getPosts(n,{pageSize:100}),H=new Set(y.tags.map(A=>A.toLowerCase())),z=G.filter(A=>A.id!==y.id).map(A=>{const D=A.tags.filter($=>H.has($.toLowerCase())).length,F=A.category===y.category?6:0;return{item:A,score:F+D*3+(A.featured?1:0)}}).filter(({score:A})=>A>0).sort((A,D)=>D.score-A.score||new Date(D.item.date).getTime()-new Date(A.item.date).getTime()).slice(0,3).map(({item:A})=>A);M||p(z)})().catch(()=>{M||p([])}),()=>{M=!0}},[y,n]),h&&!y)return o.jsx(Yn,{children:o.jsx("div",{className:"container mx-auto px-4 py-12",children:o.jsx(Ju,{className:"min-h-[calc(100vh-9rem)]",label:n==="vi"?"Đang tải":"Loading"})})});if(!x)return o.jsx(Yn,{children:o.jsxs("div",{className:"container mx-auto px-4 py-20 text-center",children:[o.jsx("h1",{className:"text-4xl font-bold mb-4",children:e("post.notFound")}),o.jsx("p",{className:"text-muted-foreground mb-8",children:e("post.notFoundDesc")}),o.jsx(ne,{asChild:!0,children:o.jsxs(ke,{to:s,children:[o.jsx(ph,{className:"mr-2 h-4 w-4"}),e("post.back")]})})]})});const N=e(`category.${x.category}`)||x.category,I=async()=>{try{await OI(x,{language:n,locale:t,categoryName:N,sourceNote:e("post.sourceNote")}),r({variant:"success",title:n==="vi"?"Đã tải PDF bài viết":"Article PDF downloaded"})}catch(M){console.error("Unable to export article PDF:",M),r({variant:"destructive",title:n==="vi"?"Không thể tải PDF":"Unable to download PDF"})}},O=async()=>{try{await cb(window.location.href),r({variant:"success",title:n==="vi"?"Đã sao chép liên kết":"Link copied"})}catch{r({variant:"destructive",title:n==="vi"?"Không thể sao chép liên kết":"Unable to copy link"})}};return o.jsx(Yn,{children:o.jsxs("article",{className:"container mx-auto px-4 py-12",children:[o.jsxs(ke,{to:s,className:"inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8",children:[o.jsx(ph,{className:"mr-2 h-4 w-4"}),e("post.back")]}),o.jsxs("header",{className:"max-w-3xl mb-12",children:[o.jsx(ot,{variant:"secondary",className:"mb-4",children:N}),o.jsx("h1",{className:"text-3xl md:text-4xl lg:text-5xl font-bold mb-6",children:x.title}),o.jsx("p",{className:"text-xl text-muted-foreground mb-6",children:x.excerpt}),o.jsxs("div",{className:"flex flex-wrap items-center gap-6 text-muted-foreground",children:[o.jsxs("div",{className:"flex items-center",children:[o.jsx(m1,{className:"h-4 w-4 mr-2"}),new Date(x.date).toLocaleDateString(t,{year:"numeric",month:"long",day:"numeric"})]}),o.jsxs("div",{className:"flex items-center",children:[o.jsx(_a,{className:"h-4 w-4 mr-2"}),x.readTime]}),o.jsxs("div",{className:"flex items-center",children:[o.jsx(Ss,{className:"h-4 w-4 mr-2"}),`${((y==null?void 0:y.viewCount)??0).toLocaleString(t)} ${e("post.views")}`]})]})]}),o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-4 gap-12",children:[o.jsx("div",{className:"lg:col-span-3",children:o.jsxs("div",{className:"card-gradient rounded-xl border border-border/50 p-6 md:p-12",children:[o.jsx(VN,{activeSpeechIndex:m,content:x.content,onSpeechSegmentSelect:M=>S(M),selectedSpeechIndex:k,speechEnabled:w}),o.jsx("p",{className:"mt-10 border-t border-border/50 pt-4 text-xs leading-5 text-muted-foreground/80",children:e("post.sourceNote")})]})}),o.jsx("aside",{className:"lg:col-span-1",children:o.jsxs("div",{className:"sticky top-24 space-y-8",children:[o.jsx(xI,{activeIndex:m,language:n,onActiveIndexChange:b,onEnabledChange:T,onSelectIndex:S,playRequest:C,selectedIndex:k,segments:v,speechEnabled:w}),o.jsxs("div",{className:"card-gradient border border-border/50 rounded-xl p-6",children:[o.jsxs("h3",{className:"font-semibold mb-4 flex items-center",children:[o.jsx(yh,{className:"h-4 w-4 mr-2"}),e("post.tags")]}),o.jsx("div",{className:"flex flex-wrap gap-2",children:x.tags.map(M=>o.jsx(ke,{to:`/blog?tag=${encodeURIComponent(M)}`,children:o.jsx(ot,{variant:"outline",className:"cursor-pointer hover:border-primary hover:text-primary",children:M})},M))})]}),o.jsxs("div",{className:"card-gradient border border-border/50 rounded-xl p-6",children:[o.jsxs("h3",{className:"font-semibold mb-4 flex items-center",children:[o.jsx(fh,{className:"h-4 w-4 mr-2"}),n==="vi"?"Tải bài viết":"Download article"]}),o.jsx("p",{className:"mb-4 text-sm leading-6 text-muted-foreground",children:n==="vi"?"Tải phiên bản PDF được trình bày gọn gàng để lưu trữ và đọc lại khi cần.":"Save this article as a watermarked PDF for offline reading."}),o.jsxs(ne,{className:"w-full",onClick:I,children:[o.jsx(fh,{className:"mr-2 h-4 w-4"}),n==="vi"?"Tải PDF":"Download PDF"]})]}),d.length>0&&o.jsxs("div",{className:"card-gradient overflow-hidden rounded-xl border border-border/50",children:[o.jsxs("div",{className:"border-b border-border/60 bg-primary/[.04] p-5",children:[o.jsxs("p",{className:"mb-2 flex items-center gap-2 font-mono text-[11px] uppercase tracking-[.14em] text-primary",children:[o.jsx(gh,{className:"h-4 w-4"}),n==="vi"?"Đọc tiếp":"Next reads"]}),o.jsx("h3",{className:"text-lg font-semibold leading-6",children:n==="vi"?"Bài viết liên quan":"Related articles"})]}),o.jsx("div",{className:"divide-y divide-border/60",children:d.map((M,U)=>{const G=e(`category.${M.category}`)||M.category,H=M.tags.filter(z=>x.tags.some(A=>A.toLowerCase()===z.toLowerCase()));return o.jsxs(ke,{to:`/blog/${M.id}`,state:{from:s},className:"group block p-5 transition-colors hover:bg-primary/[.045]",children:[o.jsxs("div",{className:"mb-3 flex items-start justify-between gap-3",children:[o.jsx(ot,{variant:"secondary",className:"max-w-[10rem] truncate text-[11px]",children:G}),o.jsxs("span",{className:"rounded-full border border-border/70 px-2 py-0.5 font-mono text-[10px] text-muted-foreground",children:["0",U+1]})]}),o.jsx("h4",{className:"line-clamp-2 text-sm font-semibold leading-6 transition-colors group-hover:text-primary",children:M.title}),o.jsxs("div",{className:"mt-3 flex flex-wrap items-center gap-2 text-[11px] text-muted-foreground",children:[o.jsxs("span",{className:"inline-flex items-center gap-1",children:[o.jsx(_a,{className:"h-3.5 w-3.5"}),M.readTime]}),(H.length>0?H:M.tags).slice(0,1).map(z=>o.jsx("span",{className:"max-w-[8rem] truncate rounded-full bg-muted px-2 py-0.5",children:z},z))]}),o.jsxs("div",{className:"mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-primary",children:[n==="vi"?"Mở bài viết":"Open article",o.jsx(Cs,{className:"h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"})]})]},M.id)})})]}),o.jsxs("div",{className:"card-gradient border border-border/50 rounded-xl p-6",children:[o.jsxs("h3",{className:"font-semibold mb-4 flex items-center",children:[o.jsx(B1,{className:"h-4 w-4 mr-2"}),e("post.share")]}),o.jsx(ne,{variant:"outline",className:"w-full",onClick:O,children:e("post.copy")})]})]})})]})]})})},zI=()=>{const{t:e}=qe(),t=tr();return o.jsx(Yn,{children:o.jsxs("div",{className:"container mx-auto px-4 py-12",children:[o.jsxs("div",{className:"max-w-3xl mb-12",children:[o.jsx("h1",{className:"text-4xl md:text-5xl font-bold mb-4",children:o.jsx("span",{className:"text-gradient",children:e("project.title")})}),o.jsx("p",{className:"text-xl text-muted-foreground mb-4",children:e("project.desc")}),o.jsx(ne,{asChild:!0,variant:"outline",children:o.jsxs("a",{href:be.social.github,target:"_blank",rel:"noopener noreferrer",children:[o.jsx(Cr,{className:"h-4 w-4 mr-2"}),e("project.github")]})})]}),o.jsxs("div",{className:"mb-12",children:[o.jsxs("h2",{className:"text-2xl font-semibold mb-6 flex items-center gap-2",children:[o.jsx(K1,{className:"h-5 w-5 text-yellow-500"}),e("project.featured")]}),o.jsx(Ve.div,{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",variants:t?void 0:Ei,initial:t?!1:"hidden",whileInView:"visible",viewport:Li,children:Nh.filter(n=>n.featured).map(n=>o.jsxs(Ve.article,{variants:t?void 0:Ri,className:"group card-gradient border border-border/50 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300",children:[o.jsxs("div",{className:"aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border-b border-border/50 relative overflow-hidden",children:[o.jsx("div",{className:"text-6xl font-mono text-primary/30 group-hover:text-primary/50 transition-colors",children:`<${n.title.split(" ")[0].charAt(0)} />`}),o.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-card to-transparent"}),n.demo&&o.jsx("div",{className:"absolute top-4 right-4",children:o.jsx(ot,{className:"bg-green-500/20 text-green-400 border-green-500/30",children:e("project.demo")})})]}),o.jsxs("div",{className:"p-6 md:p-8",children:[o.jsxs("div",{className:"flex items-start justify-between mb-4",children:[o.jsx("h3",{className:"text-2xl font-semibold group-hover:text-primary transition-colors",children:n.title}),o.jsx(ot,{className:"bg-primary/20 text-primary",children:e("project.featured")})]}),o.jsx("p",{className:"text-muted-foreground mb-4",children:n.description}),o.jsx("p",{className:"text-sm text-muted-foreground mb-6",children:n.longDescription}),o.jsx("div",{className:"flex flex-wrap gap-2 mb-6",children:n.technologies.map(r=>o.jsx(ot,{variant:"secondary",children:r},r))}),o.jsxs("div",{className:"flex gap-4 pt-4 border-t border-border/50",children:[n.github&&o.jsx(ne,{asChild:!0,variant:"outline",size:"sm",children:o.jsxs("a",{href:n.github,target:"_blank",rel:"noopener noreferrer",children:[o.jsx(Cr,{className:"h-4 w-4 mr-2"}),e("project.source")]})}),n.demo&&o.jsx(ne,{asChild:!0,size:"sm",children:o.jsxs("a",{href:n.demo,target:"_blank",rel:"noopener noreferrer",children:[o.jsx(vh,{className:"h-4 w-4 mr-2"}),e("project.demo")]})})]})]})]},n.id))})]}),o.jsxs("div",{children:[o.jsxs("h2",{className:"text-2xl font-semibold mb-6 flex items-center gap-2",children:[o.jsx(C1,{className:"h-5 w-5 text-primary"}),e("project.all")]}),o.jsx(Ve.div,{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",variants:t?void 0:Ei,initial:t?!1:"hidden",whileInView:"visible",viewport:Li,children:Nh.filter(n=>!n.featured).map(n=>o.jsxs(Ve.article,{variants:t?void 0:Ri,className:"group card-gradient border border-border/50 rounded-xl p-6 hover:border-primary/50 transition-all duration-300",children:[o.jsx("h3",{className:"text-lg font-semibold mb-2 group-hover:text-primary transition-colors",children:n.title}),o.jsx("p",{className:"text-sm text-muted-foreground mb-4 line-clamp-2",children:n.description}),o.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:n.technologies.slice(0,3).map(r=>o.jsx(ot,{variant:"secondary",className:"min-h-7 px-3 py-1 text-xs",children:r},r))}),o.jsxs("div",{className:"flex gap-2",children:[n.github&&o.jsx(ne,{asChild:!0,variant:"ghost",size:"sm",children:o.jsx("a",{href:n.github,target:"_blank",rel:"noopener noreferrer",children:o.jsx(Cr,{className:"h-4 w-4"})})}),n.demo&&o.jsx(ne,{asChild:!0,variant:"ghost",size:"sm",children:o.jsx("a",{href:n.demo,target:"_blank",rel:"noopener noreferrer",children:o.jsx(vh,{className:"h-4 w-4"})})})]})]},n.id))})]})]})})},HI=[{id:"fullstack",file:"/cvs/FullStack.pdf",title:{vi:"Fullstack Developer",en:"Fullstack Developer"},description:{vi:"Hồ sơ trọng tâm: kinh nghiệm thực tế với Angular, ASP.NET Core, SQL Server và hệ thống quản lý doanh nghiệp.",en:"Primary profile: hands-on experience with Angular, ASP.NET Core, SQL Server, and enterprise management systems."},featured:!0,stack:["Angular","ASP.NET Core","SQL Server","Docker"]},{id:"dotnet",file:"/cvs/.NET-EN.pdf",title:{vi:".NET Developer",en:".NET Developer"},description:{vi:"Hồ sơ tiếng Anh tập trung vào ASP.NET Core MVC, RESTful API, backend và SQL Server.",en:"English profile focused on ASP.NET Core MVC, RESTful APIs, backend development, and SQL Server."},featured:!1,stack:["C#","ASP.NET Core MVC","RESTful API","SQL Server"]},{id:"ba",file:"/cvs/BA-VI.pdf",title:{vi:"Business Analyst",en:"Business Analyst"},description:{vi:"Hồ sơ tiếng Việt về phân tích nghiệp vụ, User Story, Use Case, BPMN và tài liệu hóa hệ thống.",en:"Vietnamese profile covering business analysis, User Stories, Use Cases, BPMN, and system documentation."},featured:!1,stack:["BPMN","UML","User Story","Figma"]}],$I=[{period:"03/2026 - 06/2026",role:"Fullstack Developer",company:"Song Ân Software Solutions Co., Ltd.",summary:{vi:"Phát triển và bảo trì các module HIS, EMR và Admin Management System bằng Angular, ASP.NET Core và SQL Server.",en:"Developing and maintaining HIS, EMR, and Admin Management System modules with Angular, ASP.NET Core, and SQL Server."},highlights:{vi:["CRUD, bộ lọc tìm kiếm, phân trang và component tái sử dụng","Kiểm tra dữ liệu, tối ưu truy vấn và xử lý sự cố SQL Server","Điều tra lỗi, regression testing, merge branch và chuẩn bị triển khai"],en:["CRUD, search filters, pagination, and reusable components","Data verification, query optimization, and SQL Server troubleshooting","Defect investigation, regression testing, branch merging, and deployment preparation"]}}],WI=[{title:{vi:"Hệ thống Quản lý & Đào tạo Giấy phép Lái xe",en:"Driver License Training & Management System"},period:"09/2025 - 12/2025",description:{vi:"Hệ thống ASP.NET Core 9.0 MVC quản lý đào tạo, thi lý thuyết, mô phỏng giao thông, trung tâm lái xe và thanh toán trực tuyến.",en:"ASP.NET Core 9.0 MVC system for driver training, theory exams, traffic simulation, driving center operations, and online payments."},stack:["ASP.NET Core 9","SignalR","OpenAI SDK","VNPAY","MoMo","PayPal"],github:"https://github.com/haihttt974/dacn-dtgplx"},{title:{vi:"Ứng dụng Web Quản lý Phòng Gym",en:"Gym Management Web Application"},period:"06/2025",description:{vi:"Quản lý hội viên, gói tập, phân quyền Admin/Staff/Trainer/Member, thanh toán và chatbot hỗ trợ.",en:"Membership, package, role-based access, online payment, notification, and AI chatbot management."},stack:["ASP.NET Core MVC","RBAC","PayPal","VNPay","AI Chatbot"],github:"https://github.com/haihttt974/courseproject-ltweb-gym"}],GI=[{year:"2022 - 2025",vi:"Sinh viên tiêu biểu ba năm liên tiếp",en:"Outstanding student for three consecutive years"},{year:"2024",vi:"Giải Nhất Database Design Champion",en:"First Prize, Database Design Champion"},{year:"03/2024",vi:"Giải Ba Cuộc thi Lập trình Cá nhân",en:"Third Prize, Individual Programming Competition"},{year:"10/2024",vi:"Giải Nhất Cuộc thi Lập trình Cá nhân",en:"First Prize, Individual Programming Competition"}],KI=[{year:"2025",vi:"Tiếng Anh trình độ B1",en:"English Proficiency, B1 Level"},{year:"2025",vi:"Kỹ năng Giao tiếp và Làm việc Nhóm",en:"Communication and Teamwork Skills"}],QI=[{title:"Fullstack",items:["Angular","ASP.NET Core","C#","JavaScript","HTML","CSS","RESTful API"]},{title:"Data & Backend",items:["SQL Server","Entity Framework Core","Query Optimization","Database Analysis"]},{title:"Business Analysis",items:["User Story","Use Case","BPMN","UML","Draw.io","Figma"]},{title:"Delivery & Quality",items:["Git","GitHub","Docker","Azure","Postman","Software Testing"]}],YI=()=>{const{language:e}=qe(),t=e==="vi"?{eyebrow:"Hồ sơ nghề nghiệp / 2026",intro:"Tôi xây sản phẩm fullstack, hiểu dữ liệu và không bỏ qua câu chuyện nghiệp vụ phía sau mỗi tính năng.",summary:"Fullstack Developer định hướng hệ thống, có kinh nghiệm phát triển module HIS, EMR và hệ thống quản trị bằng Angular, ASP.NET Core, SQL Server. Đồng thời có nền tảng Business Analysis và kiểm thử phần mềm.",contact:"Liên hệ",cvLabel:"Bộ hồ sơ ứng tuyển",cvTitle:"Ba góc nhìn. Một năng lực cốt lõi.",cvDesc:"Mỗi CV được tối ưu cho một vị trí khác nhau. Fullstack là hồ sơ trọng tâm và phản ánh đầy đủ nhất kinh nghiệm hiện tại.",primary:"Hồ sơ trọng tâm",view:"Xem CV",download:"Tải PDF",experience:"Kinh nghiệm thực tế",present:"Hiện tại",projects:"Dự án tiêu biểu",skills:"Năng lực chuyên môn",education:"Học vấn",educationTitle:"Công nghệ Thông tin",school:"Trường Đại học Công nghệ TP. Hồ Chí Minh",awards:"Danh hiệu & giải thưởng",certificates:"Chứng chỉ",primaryEmail:"Email chính",secondaryEmail:"Email phụ"}:{eyebrow:"Professional profile / 2026",intro:"I build fullstack products, understand data, and never ignore the business story behind each feature.",summary:"Systems-oriented Fullstack Developer with experience building HIS, EMR, and administration modules using Angular, ASP.NET Core, and SQL Server, supported by Business Analysis and software testing foundations.",contact:"Contact",cvLabel:"Application profiles",cvTitle:"Three perspectives. One core capability.",cvDesc:"Each CV is tailored to a different role. Fullstack is the primary profile and best represents my current experience.",primary:"Primary profile",view:"View CV",download:"Download PDF",experience:"Professional experience",present:"Present",projects:"Selected projects",skills:"Professional capabilities",education:"Education",educationTitle:"Information Technology",school:"Ho Chi Minh City University of Technology (HUTECH)",awards:"Honors & awards",certificates:"Certifications",primaryEmail:"Primary email",secondaryEmail:"Secondary email"};return o.jsxs(Yn,{children:[o.jsx("section",{className:"border-b border-border/70",children:o.jsxs("div",{className:"container mx-auto px-4 py-10 md:py-16",children:[o.jsx("p",{className:"eyebrow mb-7",children:t.eyebrow}),o.jsxs("div",{className:"grid gap-8 lg:grid-cols-[.72fr_1.28fr] lg:items-end",children:[o.jsxs("div",{className:"journal-card relative aspect-[4/5] max-w-md overflow-hidden",children:[o.jsx("img",{src:be.avatar,alt:be.name,className:"h-full w-full object-cover"}),o.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"}),o.jsxs("div",{className:"absolute inset-x-0 bottom-0 p-6",children:[o.jsx("p",{className:"font-mono text-xs uppercase tracking-[.16em] text-primary",children:"Fullstack / Information Systems"}),o.jsx("h1",{className:"mt-2 text-3xl",children:be.name})]})]}),o.jsxs("div",{className:"pb-2",children:[o.jsx("h2",{className:"max-w-5xl text-4xl leading-[.98] md:text-6xl lg:text-7xl",children:t.intro}),o.jsx("p",{className:"mt-7 max-w-3xl border-l border-primary/50 pl-5 text-lg leading-8 text-muted-foreground",children:t.summary}),o.jsxs("div",{className:"mt-8 flex flex-wrap gap-3",children:[o.jsx(ne,{asChild:!0,children:o.jsxs("a",{href:`mailto:${be.social.email}`,children:[o.jsx(Ai,{className:"mr-2 h-4 w-4"}),t.contact]})}),o.jsx(ne,{asChild:!0,variant:"outline",children:o.jsxs("a",{href:be.social.github,target:"_blank",rel:"noreferrer",children:["GitHub ",o.jsx(Ct,{className:"ml-2 h-4 w-4"})]})}),o.jsx(ne,{asChild:!0,variant:"outline",children:o.jsxs("a",{href:be.social.linkedin,target:"_blank",rel:"noreferrer",children:["LinkedIn ",o.jsx(Ct,{className:"ml-2 h-4 w-4"})]})})]}),o.jsx("div",{className:"mt-10 grid border-y border-border/70 sm:grid-cols-3",children:[["3.44/4.00","GPA"],["03/2026",t.experience],["03",t.cvLabel]].map(([n,r],i)=>o.jsxs("div",{className:`py-4 ${i?"border-t border-border/70 sm:border-l sm:border-t-0 sm:pl-5":""}`,children:[o.jsx("span",{className:"font-mono text-xl font-semibold text-primary",children:n}),o.jsx("span",{className:"ml-2 font-mono text-[11px] uppercase tracking-wider text-muted-foreground",children:r})]},r))})]})]})]})}),o.jsx("section",{className:"border-b border-border/70 bg-card/25 py-20",id:"cv-collection",children:o.jsxs("div",{className:"container mx-auto px-4",children:[o.jsx("p",{className:"eyebrow mb-4",children:t.cvLabel}),o.jsxs("div",{className:"mb-10 grid gap-5 md:grid-cols-[1fr_.7fr] md:items-end",children:[o.jsx("h2",{className:"text-4xl md:text-6xl",children:t.cvTitle}),o.jsx("p",{className:"text-muted-foreground",children:t.cvDesc})]}),o.jsx("div",{className:"grid gap-5 lg:grid-cols-3",children:HI.map((n,r)=>o.jsxs("article",{className:`journal-card flex min-h-[330px] flex-col p-6 ${n.featured?"border-primary/60 lg:-translate-y-3":""}`,children:[o.jsxs("div",{className:"flex items-start justify-between",children:[o.jsxs("span",{className:"font-mono text-4xl text-primary/60",children:["0",r+1]}),n.featured&&o.jsxs(ot,{className:"gap-1",children:[o.jsx(ec,{className:"h-3 w-3"}),t.primary]})]}),o.jsx("h3",{className:"mt-8 text-2xl",children:n.title[e]}),o.jsx("p",{className:"mt-3 text-sm leading-6 text-muted-foreground",children:n.description[e]}),o.jsx("div",{className:"mt-5 flex flex-wrap gap-2.5",children:n.stack.map(i=>o.jsx(ot,{variant:"secondary",className:"min-h-7 px-3 py-1 font-mono text-[11px]",children:i},i))}),o.jsxs("div",{className:"mt-auto flex gap-2 border-t border-border/70 pt-5",children:[o.jsx(ne,{asChild:!0,size:"sm",className:"flex-1",children:o.jsxs("a",{href:n.file,target:"_blank",rel:"noreferrer",children:[t.view,o.jsx(vh,{className:"ml-2 h-3.5 w-3.5"})]})}),o.jsx(ne,{asChild:!0,size:"sm",variant:"outline",children:o.jsxs("a",{href:n.file,download:!0,children:[o.jsx(fh,{className:"h-3.5 w-3.5"}),o.jsx("span",{className:"sr-only",children:t.download})]})})]})]},n.id))})]})}),o.jsx("section",{className:"border-b border-border/70 py-20",children:o.jsxs("div",{className:"container mx-auto grid gap-12 px-4 lg:grid-cols-[1.25fr_.75fr]",children:[o.jsxs("div",{children:[o.jsx("p",{className:"eyebrow mb-8",children:t.experience}),$I.map(n=>o.jsxs("article",{className:"journal-card p-7 md:p-9",children:[o.jsxs("div",{className:"flex flex-col justify-between gap-3 border-b border-border/70 pb-6 sm:flex-row",children:[o.jsxs("div",{children:[o.jsx("h2",{className:"text-2xl",children:n.role}),o.jsx("p",{className:"mt-1 text-primary",children:n.company})]}),o.jsx("span",{className:"font-mono text-xs uppercase tracking-wider text-muted-foreground",children:n.period})]}),o.jsx("p",{className:"mt-6 leading-7 text-muted-foreground",children:n.summary[e]}),o.jsx("div",{className:"mt-6 space-y-3",children:n.highlights[e].map(r=>o.jsxs("p",{className:"flex gap-3 text-sm text-muted-foreground",children:[o.jsx(Av,{className:"mt-0.5 h-4 w-4 shrink-0 text-primary"}),r]},r))})]},n.company))]}),o.jsxs("aside",{className:"space-y-5",children:[o.jsx("p",{className:"eyebrow mb-8",children:t.education}),o.jsxs("div",{className:"journal-card p-6",children:[o.jsx(S1,{className:"h-6 w-6 text-primary"}),o.jsx("h3",{className:"mt-5 text-xl",children:t.educationTitle}),o.jsx("p",{className:"mt-2 text-sm text-muted-foreground",children:t.school}),o.jsxs("div",{className:"mt-5 flex justify-between border-t border-border/70 pt-4 font-mono text-xs uppercase tracking-wider text-muted-foreground",children:[o.jsxs("span",{children:["2022 - ",t.present]}),o.jsx("span",{className:"text-primary",children:"GPA 3.44 / 4.00"})]})]}),o.jsxs("div",{className:"journal-card p-6",children:[o.jsx(jv,{className:"h-5 w-5 text-primary"}),o.jsx("p",{className:"mt-4 text-sm text-muted-foreground",children:be.address}),o.jsxs("div",{className:"mt-4 space-y-3 border-t border-border/70 pt-4 font-mono text-xs",children:[o.jsxs("a",{className:"block hover:text-primary",href:`mailto:${be.social.email}`,children:[o.jsx("span",{className:"block text-[11px] uppercase tracking-wider text-muted-foreground",children:t.primaryEmail}),be.social.email]}),o.jsxs("a",{className:"block hover:text-primary",href:`mailto:${be.social.secondaryEmail}`,children:[o.jsx("span",{className:"block text-[11px] uppercase tracking-wider text-muted-foreground",children:t.secondaryEmail}),be.social.secondaryEmail]})]})]})]})]})}),o.jsx("section",{className:"border-b border-border/70 bg-card/25 py-20",children:o.jsxs("div",{className:"container mx-auto px-4",children:[o.jsx("p",{className:"eyebrow mb-8",children:t.projects}),o.jsx("div",{className:"grid gap-5 md:grid-cols-2",children:WI.map(n=>o.jsxs("article",{className:"journal-card p-7",children:[o.jsxs("div",{className:"flex justify-between gap-3",children:[o.jsx("h3",{className:"text-2xl",children:n.title[e]}),o.jsx("span",{className:"font-mono text-xs text-primary",children:n.period})]}),o.jsx("p",{className:"mt-4 text-sm leading-7 text-muted-foreground",children:n.description[e]}),o.jsx("div",{className:"mt-5 flex flex-wrap gap-2",children:n.stack.map(r=>o.jsx(ot,{variant:"secondary",children:r},r))}),o.jsxs("a",{href:n.github,target:"_blank",rel:"noreferrer",className:"mt-6 inline-flex items-center gap-2 font-mono text-xs text-primary",children:["GitHub repository ",o.jsx(Ct,{className:"h-3.5 w-3.5"})]})]},n.period))})]})}),o.jsx("section",{className:"py-20",children:o.jsxs("div",{className:"container mx-auto grid gap-12 px-4 lg:grid-cols-[1fr_1fr]",children:[o.jsxs("div",{children:[o.jsx("p",{className:"eyebrow mb-8",children:t.skills}),o.jsx("div",{className:"grid gap-4 sm:grid-cols-2",children:QI.map(n=>o.jsxs("div",{className:"journal-card p-5",children:[o.jsx("h3",{children:n.title}),o.jsx("div",{className:"mt-4 flex flex-wrap gap-2",children:n.items.map(r=>o.jsx(ot,{variant:"secondary",children:r},r))})]},n.title))})]}),o.jsxs("div",{className:"grid gap-8 sm:grid-cols-2",children:[o.jsxs("div",{children:[o.jsx("p",{className:"eyebrow mb-8",children:t.awards}),o.jsx("div",{className:"space-y-3",children:GI.map(n=>o.jsxs("div",{className:"journal-card p-4",children:[o.jsx(l1,{className:"h-4 w-4 text-primary"}),o.jsx("p",{className:"mt-3 text-sm",children:n[e]}),o.jsx("p",{className:"mt-2 font-mono text-xs text-muted-foreground",children:n.year})]},`${n.year}-${n.en}`))})]}),o.jsxs("div",{children:[o.jsx("p",{className:"eyebrow mb-8",children:t.certificates}),o.jsx("div",{className:"space-y-3",children:KI.map(n=>o.jsxs("div",{className:"journal-card p-4",children:[o.jsx(g1,{className:"h-4 w-4 text-primary"}),o.jsx("p",{className:"mt-3 text-sm",children:n[e]}),o.jsx("p",{className:"mt-2 font-mono text-xs text-muted-foreground",children:n.year})]},n.en))})]})]})]})})]})},Ib=g.forwardRef(({className:e,...t},n)=>o.jsx("textarea",{className:pe("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",e),ref:n,...t}));Ib.displayName="Textarea";const Cg="https://formspree.io/f/xzdlzdwy",Sg={GitHub:Cr,LinkedIn:Nv,Facebook:k1,Instagram:I1,TikTok:q1,"X (Twitter)":X1,"Primary Email":Ai,"Secondary Email":Ai},XI={vi:{eyebrow:"04 / Liên hệ & phản hồi",title:"Gửi phản hồi, góp ý hoặc bắt đầu một cuộc trao đổi nghiêm túc.",description:"Nếu bạn thấy nội dung có điểm chưa chính xác, muốn góp ý cho blog, trao đổi dự án hoặc kết nối công việc, đây là nơi phù hợp nhất để liên hệ với tôi.",response:"Phản hồi ưu tiên",responseText:"Email là kênh tôi theo dõi kỹ nhất cho góp ý kỹ thuật, lỗi nội dung và trao đổi công việc.",direct:"Kênh trực tiếp",social:"Mạng xã hội & hồ sơ",formTitle:"Gửi phản hồi trực tiếp",formDesc:"Tin nhắn được gửi qua Formspree và chuyển thẳng đến email của tôi, không cần mở ứng dụng email trên máy của bạn.",name:"Tên của bạn",email:"Email liên hệ",subject:"Chủ đề",message:"Nội dung phản hồi",namePlaceholder:"Nguyễn Văn A",emailPlaceholder:"you@example.com",subjectPlaceholder:"Góp ý về bài viết hoặc website",messagePlaceholder:"Mô tả rõ vấn đề, đường dẫn liên quan, hoặc đề xuất cải thiện...",send:"Gửi phản hồi",sending:"Đang gửi...",required:"Vui lòng nhập email, chủ đề và nội dung phản hồi.",success:"Đã gửi phản hồi",successDesc:"Cảm ơn bạn. Phản hồi đã được gửi đến email của tôi.",failed:"Không thể gửi phản hồi",failedDesc:"Vui lòng thử lại sau hoặc dùng email trực tiếp ở bên trái.",privacy:"Nội dung được gửi qua Formspree để chuyển tiếp email; website không tự lưu phản hồi vào database.",availability:"Thời gian phản hồi phụ thuộc vào lịch cá nhân, nhưng các góp ý kỹ thuật rõ ràng luôn được ưu tiên."},en:{eyebrow:"04 / Contact & feedback",title:"Send feedback, report an issue, or start a focused conversation.",description:"If you notice inaccurate content, want to improve the blog, discuss a project, or connect professionally, this is the best place to reach me.",response:"Preferred response channel",responseText:"Email is the channel I review most carefully for technical feedback, content issues, and work conversations.",direct:"Direct channels",social:"Social profiles",formTitle:"Send direct feedback",formDesc:"Your message is sent through Formspree and delivered straight to my inbox without opening your email app.",name:"Your name",email:"Contact email",subject:"Subject",message:"Feedback",namePlaceholder:"Your name",emailPlaceholder:"you@example.com",subjectPlaceholder:"Feedback about an article or the website",messagePlaceholder:"Describe the issue, related link, or suggested improvement...",send:"Send feedback",sending:"Sending...",required:"Please enter your email, subject, and feedback message.",success:"Feedback sent",successDesc:"Thank you. Your message has been sent to my inbox.",failed:"Could not send feedback",failedDesc:"Please try again later or use the direct email links on the left.",privacy:"Messages are sent through Formspree for email forwarding; this website does not store feedback in its own database.",availability:"Response time depends on my schedule, but clear technical feedback is prioritized."}},JI=e=>e.replace("Primary ","").replace("Secondary ",""),ZI=()=>{const{language:e}=qe(),{toast:t}=Qs(),n=XI[e],[r,i]=g.useState(""),[a,s]=g.useState(""),[c,l]=g.useState(""),[h,u]=g.useState(""),[d,p]=g.useState(""),[y,x]=g.useState(!1),v=g.useMemo(()=>be.socialLinks.filter(m=>m.name.includes("Email")),[]),k=g.useMemo(()=>be.socialLinks.filter(m=>!m.name.includes("Email")),[]),f=async m=>{m.preventDefault();const b=a.trim(),w=c.trim(),T=h.trim();if(!b||!w||!T){t({variant:"warning",title:n.required});return}x(!0);try{const C=new FormData;if(C.append("name",r.trim()),C.append("email",b),C.append("_replyto",b),C.append("subject",w),C.append("message",T),C.append("page",window.location.href),C.append("_subject",`[Portfolio feedback] ${w}`),d.trim()&&C.append("website",d.trim()),!(await fetch(Cg,{method:"POST",body:C,headers:{Accept:"application/json"}})).ok)throw new Error("formspree_send_failed");i(""),s(""),l(""),u(""),p(""),t({variant:"success",title:n.success,description:n.successDesc})}catch{t({variant:"destructive",title:n.failed,description:n.failedDesc})}finally{x(!1)}};return o.jsx(Yn,{children:o.jsx("main",{className:"container mx-auto px-4 py-12",children:o.jsxs("section",{className:"grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start",children:[o.jsxs("div",{className:"space-y-8",children:[o.jsxs("div",{children:[o.jsx("p",{className:"eyebrow mb-4",children:n.eyebrow}),o.jsx("h1",{className:"max-w-3xl text-4xl font-bold leading-tight md:text-5xl",children:o.jsx("span",{className:"text-gradient",children:n.title})}),o.jsx("p",{className:"mt-5 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg",children:n.description})]}),o.jsx("div",{className:"rounded-lg border border-primary/25 bg-primary/[.06] p-5 shadow-sm",children:o.jsxs("div",{className:"flex items-start gap-3",children:[o.jsx("div",{className:"flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-primary/25 bg-background/70 text-primary",children:o.jsx(z1,{className:"h-5 w-5"})}),o.jsxs("div",{children:[o.jsx("h2",{className:"text-sm font-semibold",children:n.response}),o.jsx("p",{className:"mt-2 text-sm leading-6 text-muted-foreground",children:n.responseText})]})]})}),o.jsxs("div",{children:[o.jsxs("div",{className:"mb-3 flex items-center justify-between gap-3",children:[o.jsx("h2",{className:"font-mono text-xs uppercase tracking-[.18em] text-muted-foreground",children:n.direct}),o.jsx(ot,{variant:"outline",className:"rounded-md",children:"Email"})]}),o.jsx("div",{className:"grid gap-3 sm:grid-cols-2",children:v.map(m=>{const b=Sg[m.name]??Ai;return o.jsx("a",{href:m.url,className:"group rounded-lg border border-border/70 bg-background/75 p-4 transition-colors hover:border-primary/45 hover:bg-primary/[.04]",children:o.jsxs("div",{className:"flex items-center justify-between gap-3",children:[o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("span",{className:"flex h-9 w-9 items-center justify-center rounded-md border border-border/70 bg-muted/40 text-primary",children:o.jsx(b,{className:"h-4 w-4"})}),o.jsxs("span",{children:[o.jsx("span",{className:"block text-sm font-semibold",children:JI(m.name)}),o.jsx("span",{className:"mt-1 block text-xs text-muted-foreground",children:m.url.replace("mailto:","")})]})]}),o.jsx(Ct,{className:"h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary"})]})},m.name)})})]}),o.jsxs("div",{children:[o.jsx("h2",{className:"mb-3 font-mono text-xs uppercase tracking-[.18em] text-muted-foreground",children:n.social}),o.jsx("div",{className:"grid gap-3 sm:grid-cols-2",children:k.map(m=>{const b=Sg[m.name]??D1;return o.jsxs("a",{href:m.url,target:"_blank",rel:"noreferrer",className:"group flex items-center justify-between gap-3 rounded-lg border border-border/70 bg-background/70 px-4 py-3 text-sm transition-colors hover:border-primary/45 hover:bg-primary/[.04]",children:[o.jsxs("span",{className:"flex items-center gap-3",children:[o.jsx(b,{className:"h-4 w-4 text-primary"}),o.jsx("span",{className:"font-medium",children:m.name})]}),o.jsx(Ct,{className:"h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary"})]},m.name)})})]})]}),o.jsxs("section",{className:"rounded-lg border border-border/70 bg-background/80 p-5 shadow-[0_20px_60px_hsl(var(--foreground)/0.08)] backdrop-blur md:p-6",children:[o.jsxs("div",{className:"mb-6 flex items-start gap-3",children:[o.jsx("div",{className:"flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-primary/25 bg-primary/10 text-primary",children:o.jsx(jp,{className:"h-5 w-5"})}),o.jsxs("div",{children:[o.jsx("h2",{className:"text-xl font-semibold",children:n.formTitle}),o.jsx("p",{className:"mt-2 text-sm leading-6 text-muted-foreground",children:n.formDesc})]})]}),o.jsxs("form",{action:Cg,className:"space-y-4",method:"POST",onSubmit:f,children:[o.jsx("input",{"aria-hidden":"true",autoComplete:"off",className:"hidden",name:"website",tabIndex:-1,value:d,onChange:m=>p(m.target.value)}),o.jsxs("div",{className:"grid gap-4 sm:grid-cols-2",children:[o.jsxs("label",{className:"space-y-2",children:[o.jsx("span",{className:"text-sm font-medium",children:n.name}),o.jsx(Sr,{name:"name",value:r,onChange:m=>i(m.target.value),placeholder:n.namePlaceholder,maxLength:120})]}),o.jsxs("label",{className:"space-y-2",children:[o.jsx("span",{className:"text-sm font-medium",children:n.email}),o.jsx(Sr,{name:"email",type:"email",value:a,onChange:m=>s(m.target.value),placeholder:n.emailPlaceholder,maxLength:200,required:!0})]})]}),o.jsxs("label",{className:"block space-y-2",children:[o.jsx("span",{className:"text-sm font-medium",children:n.subject}),o.jsx(Sr,{name:"subject",value:c,onChange:m=>l(m.target.value),placeholder:n.subjectPlaceholder,maxLength:160,required:!0})]}),o.jsxs("label",{className:"block space-y-2",children:[o.jsx("span",{className:"text-sm font-medium",children:n.message}),o.jsx(Ib,{name:"message",value:h,onChange:m=>u(m.target.value),placeholder:n.messagePlaceholder,className:"min-h-44 resize-y",maxLength:5e3,required:!0})]}),o.jsxs(ne,{type:"submit",className:"w-full gap-2",disabled:y,children:[y?o.jsx(Iv,{className:"h-4 w-4 animate-spin"}):o.jsx(jp,{className:"h-4 w-4"}),y?n.sending:n.send]})]}),o.jsxs("div",{className:"mt-6 grid gap-3 border-t border-border/70 pt-5 text-xs leading-5 text-muted-foreground sm:grid-cols-2",children:[o.jsxs("p",{className:"flex gap-2",children:[o.jsx(mh,{className:"mt-0.5 h-3.5 w-3.5 shrink-0 text-primary"}),n.privacy]}),o.jsxs("p",{className:"flex gap-2",children:[o.jsx(mh,{className:"mt-0.5 h-3.5 w-3.5 shrink-0 text-primary"}),n.availability]})]})]})]})})})},e2=()=>{const{language:e}=qe(),t=At(),n=e==="vi",r={eyebrow:"HTTP / 404",title:n?"Trang này đã đi lạc khỏi bản đồ.":"This page drifted off the map.",description:n?"Đường dẫn bạn vừa mở không tồn tại hoặc đã được chuyển đi. Hãy quay về trang chính để tiếp tục khám phá.":"The route you opened does not exist or has moved. Head back home and keep exploring.",home:n?"Về trang chủ":"Back home",back:n?"Quay lại":"Go back",currentRoute:n?"Đường dẫn hiện tại":"Current route",signal:n?"Không tìm thấy tín hiệu":"No signal found",hint:n?"Gợi ý: kiểm tra lại URL hoặc dùng menu điều hướng.":"Tip: check the URL or use the navigation menu."};return g.useEffect(()=>{console.error("404 Error: User attempted to access non-existent route:",t.pathname)},[t.pathname]),o.jsxs("main",{className:"relative flex h-dvh min-h-[620px] overflow-hidden bg-background text-foreground",children:[o.jsx("div",{className:"page-grid pointer-events-none absolute inset-0 opacity-70"}),o.jsx("div",{className:"pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,hsl(var(--primary)/0.18),transparent_24rem),radial-gradient(circle_at_84%_72%,hsl(var(--accent)/0.14),transparent_24rem)]"}),o.jsx("div",{className:"pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background via-background/70 to-transparent"}),o.jsxs("div",{className:"container relative z-10 mx-auto grid h-full items-center gap-8 px-4 py-6 md:grid-cols-[0.95fr_1.05fr] md:px-8",children:[o.jsxs("section",{className:"mx-auto w-full max-w-xl",children:[o.jsxs("div",{className:"mb-5 inline-flex items-center gap-2 rounded-md border border-border/70 bg-card/70 px-3 py-2 font-mono text-[11px] font-semibold uppercase text-primary shadow-sm backdrop-blur",children:[o.jsx(ec,{className:"h-3.5 w-3.5"}),r.eyebrow]}),o.jsxs("h1",{className:"text-balance text-5xl font-bold leading-[0.95] sm:text-6xl lg:text-7xl",children:[o.jsx("span",{className:"block text-gradient",children:"404"}),o.jsx("span",{className:"mt-2 block",children:r.title})]}),o.jsx("p",{className:"mt-5 max-w-lg text-base leading-7 text-muted-foreground sm:text-lg",children:r.description}),o.jsxs("div",{className:"mt-7 flex flex-wrap gap-3",children:[o.jsx(ne,{asChild:!0,size:"lg",className:"shadow-[0_18px_40px_hsl(var(--primary)/0.18)]",children:o.jsxs(ke,{to:"/",children:[o.jsx(A1,{className:"h-4 w-4"}),r.home]})}),o.jsxs(ne,{size:"lg",variant:"outline",onClick:()=>window.history.back(),children:[o.jsx(ph,{className:"h-4 w-4"}),r.back]})]}),o.jsx("div",{className:"mt-7 rounded-md border border-border/70 bg-card/60 p-4 backdrop-blur",children:o.jsxs("div",{className:"flex items-start gap-3",children:[o.jsx(F1,{className:"mt-0.5 h-5 w-5 text-accent"}),o.jsxs("div",{className:"min-w-0",children:[o.jsx("p",{className:"font-mono text-[11px] uppercase text-muted-foreground",children:r.currentRoute}),o.jsx("p",{className:"mt-1 truncate font-mono text-sm text-foreground",children:t.pathname})]})]})})]}),o.jsxs("section",{className:"relative mx-auto hidden aspect-square w-full max-w-[540px] items-center justify-center md:flex",children:[o.jsx("div",{className:"absolute inset-8 rounded-full border border-primary/15"}),o.jsx("div",{className:"absolute inset-20 rounded-full border border-accent/20"}),o.jsx("div",{className:"absolute h-[72%] w-[72%] animate-[orbitSpin_28s_linear_infinite] rounded-full border border-dashed border-border/80"}),o.jsx("div",{className:"absolute left-[12%] top-[22%] rounded-md border border-border/70 bg-card/80 px-3 py-2 font-mono text-[10px] uppercase text-muted-foreground shadow-sm backdrop-blur",children:"route.scan()"}),o.jsx("div",{className:"absolute bottom-[18%] right-[8%] rounded-md border border-primary/20 bg-primary/10 px-3 py-2 font-mono text-[10px] uppercase text-primary shadow-sm backdrop-blur",children:"fallback.ready"}),o.jsxs("div",{className:"relative flex h-72 w-72 items-center justify-center rounded-full border border-border/80 bg-card/70 shadow-[0_32px_100px_hsl(var(--foreground)/0.14)] backdrop-blur-xl",children:[o.jsx("div",{className:"absolute inset-6 rounded-full border border-primary/20 bg-[radial-gradient(circle,hsl(var(--primary)/0.16),transparent_58%)]"}),o.jsx("div",{className:"absolute h-4 w-4 animate-[particleBlink_3s_ease-in-out_infinite] rounded-full bg-primary shadow-[0_0_30px_hsl(var(--primary)/0.65)]"}),o.jsxs("div",{className:"relative grid place-items-center text-center",children:[o.jsx(w1,{className:"mb-5 h-16 w-16 text-primary"}),o.jsx("p",{className:"font-mono text-xs uppercase tracking-[0.24em] text-muted-foreground",children:r.signal}),o.jsx("p",{className:"mt-3 max-w-44 text-sm leading-6 text-muted-foreground",children:r.hint})]})]})]})]})]})},cr=({children:e})=>{const t=tr();return o.jsx(Ve.div,{initial:t?{opacity:0}:"initial",animate:t?{opacity:1}:"animate",exit:t?{opacity:0}:"exit",variants:NP,children:e})},t2=()=>{const{language:e}=qe(),t=tr(),[n,r]=g.useState(0),[i,a]=g.useState(!1);g.useEffect(()=>{let l=0;const h=()=>{l=0;const d=window.scrollY||document.documentElement.scrollTop,p=document.documentElement.scrollHeight-window.innerHeight,y=p>0?Math.min(d/p,1):0;r(y),a(d>Math.min(520,window.innerHeight*.62))},u=()=>{l||(l=window.requestAnimationFrame(h))};return h(),window.addEventListener("scroll",u,{passive:!0}),window.addEventListener("resize",u),()=>{l&&window.cancelAnimationFrame(l),window.removeEventListener("scroll",u),window.removeEventListener("resize",u)}},[]);const s=e==="vi"?"Cuộn lên đầu trang":"Scroll to top",c=()=>{window.scrollTo({top:0,behavior:t?"auto":"smooth"})};return o.jsx(Ve.div,{className:"fixed bottom-[4.75rem] right-4 z-[60]",initial:!1,animate:i?{opacity:1,y:0,scale:1,pointerEvents:"auto"}:{opacity:0,y:14,scale:.92,pointerEvents:"none"},transition:{duration:t?0:.24,ease:[.22,1,.36,1]},children:o.jsxs(xy,{children:[o.jsx(ky,{asChild:!0,children:o.jsxs(ne,{type:"button",variant:"outline",size:"icon","aria-label":s,onClick:c,className:"group relative h-12 w-12 overflow-hidden rounded-full border-primary/35 bg-background/85 text-foreground shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/70 hover:bg-primary/10 hover:text-primary focus-visible:ring-primary/60",style:{backgroundImage:`conic-gradient(hsl(var(--primary)) ${n*360}deg, hsl(var(--border) / 0.32) 0deg)`},children:[o.jsx("span",{className:"absolute inset-[3px] rounded-full bg-background/94 shadow-inner"}),o.jsx("span",{className:"absolute inset-x-3 top-2 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-70"}),o.jsx("span",{className:"relative flex h-7 w-7 items-center justify-center rounded-full border border-primary/25 bg-primary/[.07] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-105",children:o.jsx(c1,{className:"h-4 w-4"})}),o.jsx("span",{className:"sr-only",children:s})]})}),o.jsx(Gu,{side:"left",className:"font-mono text-xs uppercase tracking-[.12em]",children:s})]})})},n2=new HS,r2=g.lazy(()=>Xf(()=>import("./Graduation-qoNkflTL.js"),__vite__mapDeps([0,1,2,3,4]))),i2=g.lazy(()=>Xf(()=>import("./GraduationQuestions-B2Pa0FnN.js"),__vite__mapDeps([5,1,2,3,4,6])));function a2(){const e=At(),t=e.pathname==="/graduation"||e.pathname.startsWith("/graduation/");return o.jsxs(bP,{attribute:"class",defaultTheme:"system",enableSystem:!0,storageKey:"haiit-theme",forcedTheme:t?"light":void 0,children:[o.jsx(CP,{}),o.jsx(rP,{children:o.jsx(WS,{client:n2,children:o.jsx(xS,{children:o.jsxs(eP,{children:[o.jsx(MT,{}),!t&&o.jsx(fP,{}),!t&&o.jsx(iP,{}),o.jsxs(Rb,{features:Lb,strict:!0,children:[!t&&o.jsx(t2,{}),o.jsx(Db,{mode:"wait",initial:!1,children:o.jsxs(Kk,{location:e,children:[o.jsx(zt,{path:"/",element:o.jsx(cr,{children:o.jsx(kA,{})})}),o.jsx(zt,{path:"/blog",element:o.jsx(cr,{children:o.jsx(jN,{})})}),o.jsx(zt,{path:"/blog/:id",element:o.jsx(cr,{children:o.jsx(BI,{})})}),o.jsx(zt,{path:"/projects",element:o.jsx(cr,{children:o.jsx(zI,{})})}),o.jsx(zt,{path:"/about",element:o.jsx(cr,{children:o.jsx(YI,{})})}),o.jsx(zt,{path:"/contact",element:o.jsx(cr,{children:o.jsx(ZI,{})})}),o.jsx(zt,{path:"/graduation",element:o.jsx(g.Suspense,{fallback:o.jsx("div",{className:"min-h-screen bg-[#f7f3ea]"}),children:o.jsx(r2,{})})}),o.jsx(zt,{path:"/graduation/questions",element:o.jsx(g.Suspense,{fallback:o.jsx("div",{className:"min-h-screen bg-[#f7f3ea]"}),children:o.jsx(i2,{})})}),o.jsx(zt,{path:"*",element:o.jsx(cr,{children:o.jsx(e2,{})})})]},e.pathname)})]})]})})})})]})}const o2=new URLSearchParams(window.location.search),Pg=o2.get("redirect");Pg&&window.history.replaceState(null,"",Pg);Uf(document.getElementById("root")).render(o.jsx(n0,{children:o.jsx(a2,{})}));export{Ct as A,b1 as C,vh as E,ke as L,jv as M,ec as S,J1 as V,Ai as a,Np as b,_ as c,$o as d,B1 as e,mh as f,jp as g,ph as h};
