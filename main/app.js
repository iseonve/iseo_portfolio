var Lb=Object.create;var M0=Object.defineProperty;var Ib=Object.getOwnPropertyDescriptor;var kb=Object.getOwnPropertyNames;var Nb=Object.getPrototypeOf,Db=Object.prototype.hasOwnProperty;var Xi=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var Ub=(t,e,n,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of kb(e))!Db.call(t,r)&&r!==n&&M0(t,r,{get:()=>e[r],enumerable:!(i=Ib(e,r))||i.enumerable});return t};var en=(t,e,n)=>(n=t!=null?Lb(Nb(t)):{},Ub(e||!t||!t.__esModule?M0(n,"default",{value:t,enumerable:!0}):n,t));var U0=Xi(tt=>{"use strict";var ya=Symbol.for("react.element"),Ob=Symbol.for("react.portal"),Fb=Symbol.for("react.fragment"),zb=Symbol.for("react.strict_mode"),Bb=Symbol.for("react.profiler"),Hb=Symbol.for("react.provider"),Vb=Symbol.for("react.context"),Gb=Symbol.for("react.forward_ref"),Wb=Symbol.for("react.suspense"),jb=Symbol.for("react.memo"),Xb=Symbol.for("react.lazy"),E0=Symbol.iterator;function qb(t){return t===null||typeof t!="object"?null:(t=E0&&t[E0]||t["@@iterator"],typeof t=="function"?t:null)}var C0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R0=Object.assign,P0={};function qs(t,e,n){this.props=t,this.context=e,this.refs=P0,this.updater=n||C0}qs.prototype.isReactComponent={};qs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};qs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function L0(){}L0.prototype=qs.prototype;function Xu(t,e,n){this.props=t,this.context=e,this.refs=P0,this.updater=n||C0}var qu=Xu.prototype=new L0;qu.constructor=Xu;R0(qu,qs.prototype);qu.isPureReactComponent=!0;var T0=Array.isArray,I0=Object.prototype.hasOwnProperty,Yu={current:null},k0={key:!0,ref:!0,__self:!0,__source:!0};function N0(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)I0.call(e,i)&&!k0.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ya,type:t,key:s,ref:o,props:r,_owner:Yu.current}}function Yb(t,e){return{$$typeof:ya,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function $u(t){return typeof t=="object"&&t!==null&&t.$$typeof===ya}function $b(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var A0=/\/+/g;function ju(t,e){return typeof t=="object"&&t!==null&&t.key!=null?$b(""+t.key):e.toString(36)}function Zl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ya:case Ob:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+ju(o,0):i,T0(r)?(n="",t!=null&&(n=t.replace(A0,"$&/")+"/"),Zl(r,e,n,"",function(c){return c})):r!=null&&($u(r)&&(r=Yb(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(A0,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",T0(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+ju(s,a);o+=Zl(s,e,n,l,r)}else if(l=qb(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+ju(s,a++),o+=Zl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Jl(t,e,n){if(t==null)return t;var i=[],r=0;return Zl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Jb(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var gn={current:null},Kl={transition:null},Zb={ReactCurrentDispatcher:gn,ReactCurrentBatchConfig:Kl,ReactCurrentOwner:Yu};function D0(){throw Error("act(...) is not supported in production builds of React.")}tt.Children={map:Jl,forEach:function(t,e,n){Jl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Jl(t,function(){e++}),e},toArray:function(t){return Jl(t,function(e){return e})||[]},only:function(t){if(!$u(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};tt.Component=qs;tt.Fragment=Fb;tt.Profiler=Bb;tt.PureComponent=Xu;tt.StrictMode=zb;tt.Suspense=Wb;tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Zb;tt.act=D0;tt.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=R0({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Yu.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)I0.call(e,l)&&!k0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:ya,type:t.type,key:r,ref:s,props:i,_owner:o}};tt.createContext=function(t){return t={$$typeof:Vb,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Hb,_context:t},t.Consumer=t};tt.createElement=N0;tt.createFactory=function(t){var e=N0.bind(null,t);return e.type=t,e};tt.createRef=function(){return{current:null}};tt.forwardRef=function(t){return{$$typeof:Gb,render:t}};tt.isValidElement=$u;tt.lazy=function(t){return{$$typeof:Xb,_payload:{_status:-1,_result:t},_init:Jb}};tt.memo=function(t,e){return{$$typeof:jb,type:t,compare:e===void 0?null:e}};tt.startTransition=function(t){var e=Kl.transition;Kl.transition={};try{t()}finally{Kl.transition=e}};tt.unstable_act=D0;tt.useCallback=function(t,e){return gn.current.useCallback(t,e)};tt.useContext=function(t){return gn.current.useContext(t)};tt.useDebugValue=function(){};tt.useDeferredValue=function(t){return gn.current.useDeferredValue(t)};tt.useEffect=function(t,e){return gn.current.useEffect(t,e)};tt.useId=function(){return gn.current.useId()};tt.useImperativeHandle=function(t,e,n){return gn.current.useImperativeHandle(t,e,n)};tt.useInsertionEffect=function(t,e){return gn.current.useInsertionEffect(t,e)};tt.useLayoutEffect=function(t,e){return gn.current.useLayoutEffect(t,e)};tt.useMemo=function(t,e){return gn.current.useMemo(t,e)};tt.useReducer=function(t,e,n){return gn.current.useReducer(t,e,n)};tt.useRef=function(t){return gn.current.useRef(t)};tt.useState=function(t){return gn.current.useState(t)};tt.useSyncExternalStore=function(t,e,n){return gn.current.useSyncExternalStore(t,e,n)};tt.useTransition=function(){return gn.current.useTransition()};tt.version="18.3.1"});var ss=Xi((wL,O0)=>{"use strict";O0.exports=U0()});var q0=Xi(pt=>{"use strict";function Qu(t,e){var n=t.length;t.push(e);e:for(;0<n;){var i=n-1>>>1,r=t[i];if(0<Ql(r,e))t[i]=e,t[n]=r,n=i;else break e}}function hi(t){return t.length===0?null:t[0]}function tc(t){if(t.length===0)return null;var e=t[0],n=t.pop();if(n!==e){t[0]=n;e:for(var i=0,r=t.length,s=r>>>1;i<s;){var o=2*(i+1)-1,a=t[o],l=o+1,c=t[l];if(0>Ql(a,n))l<r&&0>Ql(c,a)?(t[i]=c,t[l]=n,i=l):(t[i]=a,t[o]=n,i=o);else if(l<r&&0>Ql(c,n))t[i]=c,t[l]=n,i=l;else break e}}return e}function Ql(t,e){var n=t.sortIndex-e.sortIndex;return n!==0?n:t.id-e.id}typeof performance=="object"&&typeof performance.now=="function"?(F0=performance,pt.unstable_now=function(){return F0.now()}):(Ju=Date,z0=Ju.now(),pt.unstable_now=function(){return Ju.now()-z0});var F0,Ju,z0,ki=[],gr=[],Kb=1,$n=null,ln=3,nc=!1,os=!1,ba=!1,V0=typeof setTimeout=="function"?setTimeout:null,G0=typeof clearTimeout=="function"?clearTimeout:null,B0=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function eh(t){for(var e=hi(gr);e!==null;){if(e.callback===null)tc(gr);else if(e.startTime<=t)tc(gr),e.sortIndex=e.expirationTime,Qu(ki,e);else break;e=hi(gr)}}function th(t){if(ba=!1,eh(t),!os)if(hi(ki)!==null)os=!0,ih(nh);else{var e=hi(gr);e!==null&&rh(th,e.startTime-t)}}function nh(t,e){os=!1,ba&&(ba=!1,G0(wa),wa=-1),nc=!0;var n=ln;try{for(eh(e),$n=hi(ki);$n!==null&&(!($n.expirationTime>e)||t&&!X0());){var i=$n.callback;if(typeof i=="function"){$n.callback=null,ln=$n.priorityLevel;var r=i($n.expirationTime<=e);e=pt.unstable_now(),typeof r=="function"?$n.callback=r:$n===hi(ki)&&tc(ki),eh(e)}else tc(ki);$n=hi(ki)}if($n!==null)var s=!0;else{var o=hi(gr);o!==null&&rh(th,o.startTime-e),s=!1}return s}finally{$n=null,ln=n,nc=!1}}var ic=!1,ec=null,wa=-1,W0=5,j0=-1;function X0(){return!(pt.unstable_now()-j0<W0)}function Zu(){if(ec!==null){var t=pt.unstable_now();j0=t;var e=!0;try{e=ec(!0,t)}finally{e?_a():(ic=!1,ec=null)}}else ic=!1}var _a;typeof B0=="function"?_a=function(){B0(Zu)}:typeof MessageChannel<"u"?(Ku=new MessageChannel,H0=Ku.port2,Ku.port1.onmessage=Zu,_a=function(){H0.postMessage(null)}):_a=function(){V0(Zu,0)};var Ku,H0;function ih(t){ec=t,ic||(ic=!0,_a())}function rh(t,e){wa=V0(function(){t(pt.unstable_now())},e)}pt.unstable_IdlePriority=5;pt.unstable_ImmediatePriority=1;pt.unstable_LowPriority=4;pt.unstable_NormalPriority=3;pt.unstable_Profiling=null;pt.unstable_UserBlockingPriority=2;pt.unstable_cancelCallback=function(t){t.callback=null};pt.unstable_continueExecution=function(){os||nc||(os=!0,ih(nh))};pt.unstable_forceFrameRate=function(t){0>t||125<t?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W0=0<t?Math.floor(1e3/t):5};pt.unstable_getCurrentPriorityLevel=function(){return ln};pt.unstable_getFirstCallbackNode=function(){return hi(ki)};pt.unstable_next=function(t){switch(ln){case 1:case 2:case 3:var e=3;break;default:e=ln}var n=ln;ln=e;try{return t()}finally{ln=n}};pt.unstable_pauseExecution=function(){};pt.unstable_requestPaint=function(){};pt.unstable_runWithPriority=function(t,e){switch(t){case 1:case 2:case 3:case 4:case 5:break;default:t=3}var n=ln;ln=t;try{return e()}finally{ln=n}};pt.unstable_scheduleCallback=function(t,e,n){var i=pt.unstable_now();switch(typeof n=="object"&&n!==null?(n=n.delay,n=typeof n=="number"&&0<n?i+n:i):n=i,t){case 1:var r=-1;break;case 2:r=250;break;case 5:r=1073741823;break;case 4:r=1e4;break;default:r=5e3}return r=n+r,t={id:Kb++,callback:e,priorityLevel:t,startTime:n,expirationTime:r,sortIndex:-1},n>i?(t.sortIndex=n,Qu(gr,t),hi(ki)===null&&t===hi(gr)&&(ba?(G0(wa),wa=-1):ba=!0,rh(th,n-i))):(t.sortIndex=r,Qu(ki,t),os||nc||(os=!0,ih(nh))),t};pt.unstable_shouldYield=X0;pt.unstable_wrapCallback=function(t){var e=ln;return function(){var n=ln;ln=e;try{return t.apply(this,arguments)}finally{ln=n}}}});var $0=Xi((ML,Y0)=>{"use strict";Y0.exports=q0()});var Qx=Xi(zn=>{"use strict";var Qb=ss(),On=$0();function fe(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var nv=new Set,Wa={};function ys(t,e){mo(t,e),mo(t+"Capture",e)}function mo(t,e){for(Wa[t]=e,t=0;t<e.length;t++)nv.add(e[t])}var Ki=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ah=Object.prototype.hasOwnProperty,ew=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,J0={},Z0={};function tw(t){return Ah.call(Z0,t)?!0:Ah.call(J0,t)?!1:ew.test(t)?Z0[t]=!0:(J0[t]=!0,!1)}function nw(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function iw(t,e,n,i){if(e===null||typeof e>"u"||nw(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function yn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var rn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){rn[t]=new yn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];rn[e]=new yn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){rn[t]=new yn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){rn[t]=new yn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){rn[t]=new yn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){rn[t]=new yn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){rn[t]=new yn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){rn[t]=new yn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){rn[t]=new yn(t,5,!1,t.toLowerCase(),null,!1,!1)});var yp=/[\-:]([a-z])/g;function _p(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(yp,_p);rn[e]=new yn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(yp,_p);rn[e]=new yn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(yp,_p);rn[e]=new yn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){rn[t]=new yn(t,1,!1,t.toLowerCase(),null,!1,!1)});rn.xlinkHref=new yn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){rn[t]=new yn(t,1,!1,t.toLowerCase(),null,!0,!0)});function bp(t,e,n,i){var r=rn.hasOwnProperty(e)?rn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(iw(e,n,r,i)&&(n=null),i||r===null?tw(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var nr=Qb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,rc=Symbol.for("react.element"),Js=Symbol.for("react.portal"),Zs=Symbol.for("react.fragment"),wp=Symbol.for("react.strict_mode"),Ch=Symbol.for("react.profiler"),iv=Symbol.for("react.provider"),rv=Symbol.for("react.context"),Sp=Symbol.for("react.forward_ref"),Rh=Symbol.for("react.suspense"),Ph=Symbol.for("react.suspense_list"),Mp=Symbol.for("react.memo"),xr=Symbol.for("react.lazy");Symbol.for("react.scope");Symbol.for("react.debug_trace_mode");var sv=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden");Symbol.for("react.cache");Symbol.for("react.tracing_marker");var K0=Symbol.iterator;function Sa(t){return t===null||typeof t!="object"?null:(t=K0&&t[K0]||t["@@iterator"],typeof t=="function"?t:null)}var Et=Object.assign,sh;function La(t){if(sh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);sh=e&&e[1]||""}return`
`+sh+t}var oh=!1;function ah(t,e){if(!t||oh)return"";oh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{oh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?La(t):""}function rw(t){switch(t.tag){case 5:return La(t.type);case 16:return La("Lazy");case 13:return La("Suspense");case 19:return La("SuspenseList");case 0:case 2:case 15:return t=ah(t.type,!1),t;case 11:return t=ah(t.type.render,!1),t;case 1:return t=ah(t.type,!0),t;default:return""}}function Lh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Zs:return"Fragment";case Js:return"Portal";case Ch:return"Profiler";case wp:return"StrictMode";case Rh:return"Suspense";case Ph:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case rv:return(t.displayName||"Context")+".Consumer";case iv:return(t._context.displayName||"Context")+".Provider";case Sp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Mp:return e=t.displayName||null,e!==null?e:Lh(t.type)||"Memo";case xr:e=t._payload,t=t._init;try{return Lh(t(e))}catch{}}return null}function sw(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Lh(e);case 8:return e===wp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ir(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ov(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function ow(t){var e=ov(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function sc(t){t._valueTracker||(t._valueTracker=ow(t))}function av(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=ov(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function kc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ih(t,e){var n=e.checked;return Et({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Q0(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Ir(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function lv(t,e){e=e.checked,e!=null&&bp(t,"checked",e,!1)}function kh(t,e){lv(t,e);var n=Ir(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Nh(t,e.type,n):e.hasOwnProperty("defaultValue")&&Nh(t,e.type,Ir(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function eg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Nh(t,e,n){(e!=="number"||kc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ia=Array.isArray;function lo(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Ir(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Dh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(fe(91));return Et({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function tg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(fe(92));if(Ia(n)){if(1<n.length)throw Error(fe(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ir(n)}}function cv(t,e){var n=Ir(e.value),i=Ir(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function ng(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function dv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Uh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?dv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var oc,uv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(oc=oc||document.createElement("div"),oc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=oc.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ja(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Da={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},aw=["Webkit","ms","Moz","O"];Object.keys(Da).forEach(function(t){aw.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Da[e]=Da[t]})});function hv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Da.hasOwnProperty(t)&&Da[t]?(""+e).trim():e+"px"}function pv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=hv(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var lw=Et({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Oh(t,e){if(e){if(lw[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(fe(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(fe(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(fe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(fe(62))}}function Fh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zh=null;function Ep(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Bh=null,co=null,uo=null;function ig(t){if(t=cl(t)){if(typeof Bh!="function")throw Error(fe(280));var e=t.stateNode;e&&(e=ad(e),Bh(t.stateNode,t.type,e))}}function fv(t){co?uo?uo.push(t):uo=[t]:co=t}function mv(){if(co){var t=co,e=uo;if(uo=co=null,ig(t),e)for(t=0;t<e.length;t++)ig(e[t])}}function gv(t,e){return t(e)}function vv(){}var lh=!1;function xv(t,e,n){if(lh)return t(e,n);lh=!0;try{return gv(t,e,n)}finally{lh=!1,(co!==null||uo!==null)&&(vv(),mv())}}function Xa(t,e){var n=t.stateNode;if(n===null)return null;var i=ad(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(fe(231,e,typeof n));return n}var Hh=!1;if(Ki)try{Ys={},Object.defineProperty(Ys,"passive",{get:function(){Hh=!0}}),window.addEventListener("test",Ys,Ys),window.removeEventListener("test",Ys,Ys)}catch{Hh=!1}var Ys;function cw(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Ua=!1,Nc=null,Dc=!1,Vh=null,dw={onError:function(t){Ua=!0,Nc=t}};function uw(t,e,n,i,r,s,o,a,l){Ua=!1,Nc=null,cw.apply(dw,arguments)}function hw(t,e,n,i,r,s,o,a,l){if(uw.apply(this,arguments),Ua){if(Ua){var c=Nc;Ua=!1,Nc=null}else throw Error(fe(198));Dc||(Dc=!0,Vh=c)}}function _s(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function yv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function rg(t){if(_s(t)!==t)throw Error(fe(188))}function pw(t){var e=t.alternate;if(!e){if(e=_s(t),e===null)throw Error(fe(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return rg(r),t;if(s===i)return rg(r),e;s=s.sibling}throw Error(fe(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(fe(189))}}if(n.alternate!==i)throw Error(fe(190))}if(n.tag!==3)throw Error(fe(188));return n.stateNode.current===n?t:e}function _v(t){return t=pw(t),t!==null?bv(t):null}function bv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=bv(t);if(e!==null)return e;t=t.sibling}return null}var wv=On.unstable_scheduleCallback,sg=On.unstable_cancelCallback,fw=On.unstable_shouldYield,mw=On.unstable_requestPaint,Lt=On.unstable_now,gw=On.unstable_getCurrentPriorityLevel,Tp=On.unstable_ImmediatePriority,Sv=On.unstable_UserBlockingPriority,Uc=On.unstable_NormalPriority,vw=On.unstable_LowPriority,Mv=On.unstable_IdlePriority,id=null,Oi=null;function xw(t){if(Oi&&typeof Oi.onCommitFiberRoot=="function")try{Oi.onCommitFiberRoot(id,t,void 0,(t.current.flags&128)===128)}catch{}}var vi=Math.clz32?Math.clz32:bw,yw=Math.log,_w=Math.LN2;function bw(t){return t>>>=0,t===0?32:31-(yw(t)/_w|0)|0}var ac=64,lc=4194304;function ka(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Oc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=ka(a):(s&=o,s!==0&&(i=ka(s)))}else o=n&~r,o!==0?i=ka(o):s!==0&&(i=ka(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-vi(e),r=1<<n,i|=t[n],e&=~r;return i}function ww(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Sw(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-vi(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=ww(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Gh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ev(){var t=ac;return ac<<=1,!(ac&4194240)&&(ac=64),t}function ch(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function al(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-vi(e),t[e]=n}function Mw(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-vi(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Ap(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-vi(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var at=0;function Tv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Av,Cp,Cv,Rv,Pv,Wh=!1,cc=[],Mr=null,Er=null,Tr=null,qa=new Map,Ya=new Map,_r=[],Ew="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function og(t,e){switch(t){case"focusin":case"focusout":Mr=null;break;case"dragenter":case"dragleave":Er=null;break;case"mouseover":case"mouseout":Tr=null;break;case"pointerover":case"pointerout":qa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ya.delete(e.pointerId)}}function Ma(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=cl(e),e!==null&&Cp(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Tw(t,e,n,i,r){switch(e){case"focusin":return Mr=Ma(Mr,t,e,n,i,r),!0;case"dragenter":return Er=Ma(Er,t,e,n,i,r),!0;case"mouseover":return Tr=Ma(Tr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return qa.set(s,Ma(qa.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ya.set(s,Ma(Ya.get(s)||null,t,e,n,i,r)),!0}return!1}function Lv(t){var e=cs(t.target);if(e!==null){var n=_s(e);if(n!==null){if(e=n.tag,e===13){if(e=yv(n),e!==null){t.blockedOn=e,Pv(t.priority,function(){Cv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Sc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=jh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);zh=i,n.target.dispatchEvent(i),zh=null}else return e=cl(n),e!==null&&Cp(e),t.blockedOn=n,!1;e.shift()}return!0}function ag(t,e,n){Sc(t)&&n.delete(e)}function Aw(){Wh=!1,Mr!==null&&Sc(Mr)&&(Mr=null),Er!==null&&Sc(Er)&&(Er=null),Tr!==null&&Sc(Tr)&&(Tr=null),qa.forEach(ag),Ya.forEach(ag)}function Ea(t,e){t.blockedOn===e&&(t.blockedOn=null,Wh||(Wh=!0,On.unstable_scheduleCallback(On.unstable_NormalPriority,Aw)))}function $a(t){function e(r){return Ea(r,t)}if(0<cc.length){Ea(cc[0],t);for(var n=1;n<cc.length;n++){var i=cc[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Mr!==null&&Ea(Mr,t),Er!==null&&Ea(Er,t),Tr!==null&&Ea(Tr,t),qa.forEach(e),Ya.forEach(e),n=0;n<_r.length;n++)i=_r[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<_r.length&&(n=_r[0],n.blockedOn===null);)Lv(n),n.blockedOn===null&&_r.shift()}var ho=nr.ReactCurrentBatchConfig,Fc=!0;function Cw(t,e,n,i){var r=at,s=ho.transition;ho.transition=null;try{at=1,Rp(t,e,n,i)}finally{at=r,ho.transition=s}}function Rw(t,e,n,i){var r=at,s=ho.transition;ho.transition=null;try{at=4,Rp(t,e,n,i)}finally{at=r,ho.transition=s}}function Rp(t,e,n,i){if(Fc){var r=jh(t,e,n,i);if(r===null)gh(t,e,i,zc,n),og(t,i);else if(Tw(r,t,e,n,i))i.stopPropagation();else if(og(t,i),e&4&&-1<Ew.indexOf(t)){for(;r!==null;){var s=cl(r);if(s!==null&&Av(s),s=jh(t,e,n,i),s===null&&gh(t,e,i,zc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else gh(t,e,i,null,n)}}var zc=null;function jh(t,e,n,i){if(zc=null,t=Ep(i),t=cs(t),t!==null)if(e=_s(t),e===null)t=null;else if(n=e.tag,n===13){if(t=yv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return zc=t,null}function Iv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(gw()){case Tp:return 1;case Sv:return 4;case Uc:case vw:return 16;case Mv:return 536870912;default:return 16}default:return 16}}var wr=null,Pp=null,Mc=null;function kv(){if(Mc)return Mc;var t,e=Pp,n=e.length,i,r="value"in wr?wr.value:wr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Mc=r.slice(t,1<i?1-i:void 0)}function Ec(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function dc(){return!0}function lg(){return!1}function Fn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?dc:lg,this.isPropagationStopped=lg,this}return Et(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=dc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=dc)},persist:function(){},isPersistent:dc}),e}var wo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Lp=Fn(wo),ll=Et({},wo,{view:0,detail:0}),Pw=Fn(ll),dh,uh,Ta,rd=Et({},ll,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ip,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ta&&(Ta&&t.type==="mousemove"?(dh=t.screenX-Ta.screenX,uh=t.screenY-Ta.screenY):uh=dh=0,Ta=t),dh)},movementY:function(t){return"movementY"in t?t.movementY:uh}}),cg=Fn(rd),Lw=Et({},rd,{dataTransfer:0}),Iw=Fn(Lw),kw=Et({},ll,{relatedTarget:0}),hh=Fn(kw),Nw=Et({},wo,{animationName:0,elapsedTime:0,pseudoElement:0}),Dw=Fn(Nw),Uw=Et({},wo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ow=Fn(Uw),Fw=Et({},wo,{data:0}),dg=Fn(Fw),zw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Bw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vw(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Hw[t])?!!e[t]:!1}function Ip(){return Vw}var Gw=Et({},ll,{key:function(t){if(t.key){var e=zw[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ec(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Bw[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ip,charCode:function(t){return t.type==="keypress"?Ec(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ec(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ww=Fn(Gw),jw=Et({},rd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ug=Fn(jw),Xw=Et({},ll,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ip}),qw=Fn(Xw),Yw=Et({},wo,{propertyName:0,elapsedTime:0,pseudoElement:0}),$w=Fn(Yw),Jw=Et({},rd,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Zw=Fn(Jw),Kw=[9,13,27,32],kp=Ki&&"CompositionEvent"in window,Oa=null;Ki&&"documentMode"in document&&(Oa=document.documentMode);var Qw=Ki&&"TextEvent"in window&&!Oa,Nv=Ki&&(!kp||Oa&&8<Oa&&11>=Oa),hg=" ",pg=!1;function Dv(t,e){switch(t){case"keyup":return Kw.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Uv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ks=!1;function eS(t,e){switch(t){case"compositionend":return Uv(e);case"keypress":return e.which!==32?null:(pg=!0,hg);case"textInput":return t=e.data,t===hg&&pg?null:t;default:return null}}function tS(t,e){if(Ks)return t==="compositionend"||!kp&&Dv(t,e)?(t=kv(),Mc=Pp=wr=null,Ks=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Nv&&e.locale!=="ko"?null:e.data;default:return null}}var nS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!nS[t.type]:e==="textarea"}function Ov(t,e,n,i){fv(i),e=Bc(e,"onChange"),0<e.length&&(n=new Lp("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Fa=null,Ja=null;function iS(t){Yv(t,0)}function sd(t){var e=to(t);if(av(e))return t}function rS(t,e){if(t==="change")return e}var Fv=!1;Ki&&(Ki?(hc="oninput"in document,hc||(ph=document.createElement("div"),ph.setAttribute("oninput","return;"),hc=typeof ph.oninput=="function"),uc=hc):uc=!1,Fv=uc&&(!document.documentMode||9<document.documentMode));var uc,hc,ph;function mg(){Fa&&(Fa.detachEvent("onpropertychange",zv),Ja=Fa=null)}function zv(t){if(t.propertyName==="value"&&sd(Ja)){var e=[];Ov(e,Ja,t,Ep(t)),xv(iS,e)}}function sS(t,e,n){t==="focusin"?(mg(),Fa=e,Ja=n,Fa.attachEvent("onpropertychange",zv)):t==="focusout"&&mg()}function oS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return sd(Ja)}function aS(t,e){if(t==="click")return sd(e)}function lS(t,e){if(t==="input"||t==="change")return sd(e)}function cS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var yi=typeof Object.is=="function"?Object.is:cS;function Za(t,e){if(yi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Ah.call(e,r)||!yi(t[r],e[r]))return!1}return!0}function gg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function vg(t,e){var n=gg(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=gg(n)}}function Bv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Bv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Hv(){for(var t=window,e=kc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=kc(t.document)}return e}function Np(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function dS(t){var e=Hv(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Bv(n.ownerDocument.documentElement,n)){if(i!==null&&Np(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=vg(n,s);var o=vg(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var uS=Ki&&"documentMode"in document&&11>=document.documentMode,Qs=null,Xh=null,za=null,qh=!1;function xg(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;qh||Qs==null||Qs!==kc(i)||(i=Qs,"selectionStart"in i&&Np(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),za&&Za(za,i)||(za=i,i=Bc(Xh,"onSelect"),0<i.length&&(e=new Lp("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Qs)))}function pc(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var eo={animationend:pc("Animation","AnimationEnd"),animationiteration:pc("Animation","AnimationIteration"),animationstart:pc("Animation","AnimationStart"),transitionend:pc("Transition","TransitionEnd")},fh={},Vv={};Ki&&(Vv=document.createElement("div").style,"AnimationEvent"in window||(delete eo.animationend.animation,delete eo.animationiteration.animation,delete eo.animationstart.animation),"TransitionEvent"in window||delete eo.transitionend.transition);function od(t){if(fh[t])return fh[t];if(!eo[t])return t;var e=eo[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Vv)return fh[t]=e[n];return t}var Gv=od("animationend"),Wv=od("animationiteration"),jv=od("animationstart"),Xv=od("transitionend"),qv=new Map,yg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Nr(t,e){qv.set(t,e),ys(e,[t])}for(fc=0;fc<yg.length;fc++)mc=yg[fc],_g=mc.toLowerCase(),bg=mc[0].toUpperCase()+mc.slice(1),Nr(_g,"on"+bg);var mc,_g,bg,fc;Nr(Gv,"onAnimationEnd");Nr(Wv,"onAnimationIteration");Nr(jv,"onAnimationStart");Nr("dblclick","onDoubleClick");Nr("focusin","onFocus");Nr("focusout","onBlur");Nr(Xv,"onTransitionEnd");mo("onMouseEnter",["mouseout","mouseover"]);mo("onMouseLeave",["mouseout","mouseover"]);mo("onPointerEnter",["pointerout","pointerover"]);mo("onPointerLeave",["pointerout","pointerover"]);ys("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ys("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ys("onBeforeInput",["compositionend","keypress","textInput","paste"]);ys("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ys("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ys("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Na="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Na));function wg(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,hw(i,e,void 0,t),t.currentTarget=null}function Yv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;wg(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;wg(r,a,c),s=l}}}if(Dc)throw t=Vh,Dc=!1,Vh=null,t}function gt(t,e){var n=e[Kh];n===void 0&&(n=e[Kh]=new Set);var i=t+"__bubble";n.has(i)||($v(e,t,2,!1),n.add(i))}function mh(t,e,n){var i=0;e&&(i|=4),$v(n,t,i,e)}var gc="_reactListening"+Math.random().toString(36).slice(2);function Ka(t){if(!t[gc]){t[gc]=!0,nv.forEach(function(n){n!=="selectionchange"&&(hS.has(n)||mh(n,!1,t),mh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[gc]||(e[gc]=!0,mh("selectionchange",!1,e))}}function $v(t,e,n,i){switch(Iv(e)){case 1:var r=Cw;break;case 4:r=Rw;break;default:r=Rp}n=r.bind(null,e,n,t),r=void 0,!Hh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function gh(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=cs(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}xv(function(){var c=s,d=Ep(n),h=[];e:{var p=qv.get(t);if(p!==void 0){var f=Lp,g=t;switch(t){case"keypress":if(Ec(n)===0)break e;case"keydown":case"keyup":f=Ww;break;case"focusin":g="focus",f=hh;break;case"focusout":g="blur",f=hh;break;case"beforeblur":case"afterblur":f=hh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=cg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=Iw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=qw;break;case Gv:case Wv:case jv:f=Dw;break;case Xv:f=$w;break;case"scroll":f=Pw;break;case"wheel":f=Zw;break;case"copy":case"cut":case"paste":f=Ow;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=ug}var y=(e&4)!==0,m=!y&&t==="scroll",u=y?p!==null?p+"Capture":null:p;y=[];for(var x=c,v;x!==null;){v=x;var _=v.stateNode;if(v.tag===5&&_!==null&&(v=_,u!==null&&(_=Xa(x,u),_!=null&&y.push(Qa(x,_,v)))),m)break;x=x.return}0<y.length&&(p=new f(p,g,null,n,d),h.push({event:p,listeners:y}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",f=t==="mouseout"||t==="pointerout",p&&n!==zh&&(g=n.relatedTarget||n.fromElement)&&(cs(g)||g[Qi]))break e;if((f||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,f?(g=n.relatedTarget||n.toElement,f=c,g=g?cs(g):null,g!==null&&(m=_s(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(f=null,g=c),f!==g)){if(y=cg,_="onMouseLeave",u="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(y=ug,_="onPointerLeave",u="onPointerEnter",x="pointer"),m=f==null?p:to(f),v=g==null?p:to(g),p=new y(_,x+"leave",f,n,d),p.target=m,p.relatedTarget=v,_=null,cs(d)===c&&(y=new y(u,x+"enter",g,n,d),y.target=v,y.relatedTarget=m,_=y),m=_,f&&g)t:{for(y=f,u=g,x=0,v=y;v;v=$s(v))x++;for(v=0,_=u;_;_=$s(_))v++;for(;0<x-v;)y=$s(y),x--;for(;0<v-x;)u=$s(u),v--;for(;x--;){if(y===u||u!==null&&y===u.alternate)break t;y=$s(y),u=$s(u)}y=null}else y=null;f!==null&&Sg(h,p,f,y,!1),g!==null&&m!==null&&Sg(h,m,g,y,!0)}}e:{if(p=c?to(c):window,f=p.nodeName&&p.nodeName.toLowerCase(),f==="select"||f==="input"&&p.type==="file")var E=rS;else if(fg(p))if(Fv)E=lS;else{E=oS;var M=sS}else(f=p.nodeName)&&f.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(E=aS);if(E&&(E=E(t,c))){Ov(h,E,n,d);break e}M&&M(t,p,c),t==="focusout"&&(M=p._wrapperState)&&M.controlled&&p.type==="number"&&Nh(p,"number",p.value)}switch(M=c?to(c):window,t){case"focusin":(fg(M)||M.contentEditable==="true")&&(Qs=M,Xh=c,za=null);break;case"focusout":za=Xh=Qs=null;break;case"mousedown":qh=!0;break;case"contextmenu":case"mouseup":case"dragend":qh=!1,xg(h,n,d);break;case"selectionchange":if(uS)break;case"keydown":case"keyup":xg(h,n,d)}var T;if(kp)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Ks?Dv(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(Nv&&n.locale!=="ko"&&(Ks||R!=="onCompositionStart"?R==="onCompositionEnd"&&Ks&&(T=kv()):(wr=d,Pp="value"in wr?wr.value:wr.textContent,Ks=!0)),M=Bc(c,R),0<M.length&&(R=new dg(R,t,null,n,d),h.push({event:R,listeners:M}),T?R.data=T:(T=Uv(n),T!==null&&(R.data=T)))),(T=Qw?eS(t,n):tS(t,n))&&(c=Bc(c,"onBeforeInput"),0<c.length&&(d=new dg("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:c}),d.data=T))}Yv(h,e)})}function Qa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Bc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Xa(t,n),s!=null&&i.unshift(Qa(t,s,r)),s=Xa(t,e),s!=null&&i.push(Qa(t,s,r))),t=t.return}return i}function $s(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Sg(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Xa(n,s),l!=null&&o.unshift(Qa(n,l,a))):r||(l=Xa(n,s),l!=null&&o.push(Qa(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var pS=/\r\n?/g,fS=/\u0000|\uFFFD/g;function Mg(t){return(typeof t=="string"?t:""+t).replace(pS,`
`).replace(fS,"")}function vc(t,e,n){if(e=Mg(e),Mg(t)!==e&&n)throw Error(fe(425))}function Hc(){}var Yh=null,$h=null;function Jh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Zh=typeof setTimeout=="function"?setTimeout:void 0,mS=typeof clearTimeout=="function"?clearTimeout:void 0,Eg=typeof Promise=="function"?Promise:void 0,gS=typeof queueMicrotask=="function"?queueMicrotask:typeof Eg<"u"?function(t){return Eg.resolve(null).then(t).catch(vS)}:Zh;function vS(t){setTimeout(function(){throw t})}function vh(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),$a(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);$a(e)}function Ar(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Tg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var So=Math.random().toString(36).slice(2),Ui="__reactFiber$"+So,el="__reactProps$"+So,Qi="__reactContainer$"+So,Kh="__reactEvents$"+So,xS="__reactListeners$"+So,yS="__reactHandles$"+So;function cs(t){var e=t[Ui];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Qi]||n[Ui]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Tg(t);t!==null;){if(n=t[Ui])return n;t=Tg(t)}return e}t=n,n=t.parentNode}return null}function cl(t){return t=t[Ui]||t[Qi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function to(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(fe(33))}function ad(t){return t[el]||null}var Qh=[],no=-1;function Dr(t){return{current:t}}function vt(t){0>no||(t.current=Qh[no],Qh[no]=null,no--)}function ft(t,e){no++,Qh[no]=t.current,t.current=e}var kr={},hn=Dr(kr),Tn=Dr(!1),fs=kr;function go(t,e){var n=t.type.contextTypes;if(!n)return kr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function An(t){return t=t.childContextTypes,t!=null}function Vc(){vt(Tn),vt(hn)}function Ag(t,e,n){if(hn.current!==kr)throw Error(fe(168));ft(hn,e),ft(Tn,n)}function Jv(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(fe(108,sw(t)||"Unknown",r));return Et({},n,i)}function Gc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||kr,fs=hn.current,ft(hn,t),ft(Tn,Tn.current),!0}function Cg(t,e,n){var i=t.stateNode;if(!i)throw Error(fe(169));n?(t=Jv(t,e,fs),i.__reactInternalMemoizedMergedChildContext=t,vt(Tn),vt(hn),ft(hn,t)):vt(Tn),ft(Tn,n)}var Yi=null,ld=!1,xh=!1;function Zv(t){Yi===null?Yi=[t]:Yi.push(t)}function _S(t){ld=!0,Zv(t)}function Ur(){if(!xh&&Yi!==null){xh=!0;var t=0,e=at;try{var n=Yi;for(at=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Yi=null,ld=!1}catch(r){throw Yi!==null&&(Yi=Yi.slice(t+1)),wv(Tp,Ur),r}finally{at=e,xh=!1}}return null}var io=[],ro=0,Wc=null,jc=0,Jn=[],Zn=0,ms=null,$i=1,Ji="";function as(t,e){io[ro++]=jc,io[ro++]=Wc,Wc=t,jc=e}function Kv(t,e,n){Jn[Zn++]=$i,Jn[Zn++]=Ji,Jn[Zn++]=ms,ms=t;var i=$i;t=Ji;var r=32-vi(i)-1;i&=~(1<<r),n+=1;var s=32-vi(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,$i=1<<32-vi(e)+r|n<<r|i,Ji=s+t}else $i=1<<s|n<<r|i,Ji=t}function Dp(t){t.return!==null&&(as(t,1),Kv(t,1,0))}function Up(t){for(;t===Wc;)Wc=io[--ro],io[ro]=null,jc=io[--ro],io[ro]=null;for(;t===ms;)ms=Jn[--Zn],Jn[Zn]=null,Ji=Jn[--Zn],Jn[Zn]=null,$i=Jn[--Zn],Jn[Zn]=null}var Un=null,Dn=null,_t=!1,gi=null;function Qv(t,e){var n=Kn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Rg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Un=t,Dn=Ar(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Un=t,Dn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ms!==null?{id:$i,overflow:Ji}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Kn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Un=t,Dn=null,!0):!1;default:return!1}}function ep(t){return(t.mode&1)!==0&&(t.flags&128)===0}function tp(t){if(_t){var e=Dn;if(e){var n=e;if(!Rg(t,e)){if(ep(t))throw Error(fe(418));e=Ar(n.nextSibling);var i=Un;e&&Rg(t,e)?Qv(i,n):(t.flags=t.flags&-4097|2,_t=!1,Un=t)}}else{if(ep(t))throw Error(fe(418));t.flags=t.flags&-4097|2,_t=!1,Un=t}}}function Pg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Un=t}function xc(t){if(t!==Un)return!1;if(!_t)return Pg(t),_t=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Jh(t.type,t.memoizedProps)),e&&(e=Dn)){if(ep(t))throw ex(),Error(fe(418));for(;e;)Qv(t,e),e=Ar(e.nextSibling)}if(Pg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(fe(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Dn=Ar(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Dn=null}}else Dn=Un?Ar(t.stateNode.nextSibling):null;return!0}function ex(){for(var t=Dn;t;)t=Ar(t.nextSibling)}function vo(){Dn=Un=null,_t=!1}function Op(t){gi===null?gi=[t]:gi.push(t)}var bS=nr.ReactCurrentBatchConfig;function Aa(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(fe(309));var i=n.stateNode}if(!i)throw Error(fe(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(fe(284));if(!n._owner)throw Error(fe(290,t))}return t}function yc(t,e){throw t=Object.prototype.toString.call(e),Error(fe(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Lg(t){var e=t._init;return e(t._payload)}function tx(t){function e(u,x){if(t){var v=u.deletions;v===null?(u.deletions=[x],u.flags|=16):v.push(x)}}function n(u,x){if(!t)return null;for(;x!==null;)e(u,x),x=x.sibling;return null}function i(u,x){for(u=new Map;x!==null;)x.key!==null?u.set(x.key,x):u.set(x.index,x),x=x.sibling;return u}function r(u,x){return u=Lr(u,x),u.index=0,u.sibling=null,u}function s(u,x,v){return u.index=v,t?(v=u.alternate,v!==null?(v=v.index,v<x?(u.flags|=2,x):v):(u.flags|=2,x)):(u.flags|=1048576,x)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,x,v,_){return x===null||x.tag!==6?(x=Eh(v,u.mode,_),x.return=u,x):(x=r(x,v),x.return=u,x)}function l(u,x,v,_){var E=v.type;return E===Zs?d(u,x,v.props.children,_,v.key):x!==null&&(x.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===xr&&Lg(E)===x.type)?(_=r(x,v.props),_.ref=Aa(u,x,v),_.return=u,_):(_=Ic(v.type,v.key,v.props,null,u.mode,_),_.ref=Aa(u,x,v),_.return=u,_)}function c(u,x,v,_){return x===null||x.tag!==4||x.stateNode.containerInfo!==v.containerInfo||x.stateNode.implementation!==v.implementation?(x=Th(v,u.mode,_),x.return=u,x):(x=r(x,v.children||[]),x.return=u,x)}function d(u,x,v,_,E){return x===null||x.tag!==7?(x=ps(v,u.mode,_,E),x.return=u,x):(x=r(x,v),x.return=u,x)}function h(u,x,v){if(typeof x=="string"&&x!==""||typeof x=="number")return x=Eh(""+x,u.mode,v),x.return=u,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case rc:return v=Ic(x.type,x.key,x.props,null,u.mode,v),v.ref=Aa(u,null,x),v.return=u,v;case Js:return x=Th(x,u.mode,v),x.return=u,x;case xr:var _=x._init;return h(u,_(x._payload),v)}if(Ia(x)||Sa(x))return x=ps(x,u.mode,v,null),x.return=u,x;yc(u,x)}return null}function p(u,x,v,_){var E=x!==null?x.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return E!==null?null:a(u,x,""+v,_);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case rc:return v.key===E?l(u,x,v,_):null;case Js:return v.key===E?c(u,x,v,_):null;case xr:return E=v._init,p(u,x,E(v._payload),_)}if(Ia(v)||Sa(v))return E!==null?null:d(u,x,v,_,null);yc(u,v)}return null}function f(u,x,v,_,E){if(typeof _=="string"&&_!==""||typeof _=="number")return u=u.get(v)||null,a(x,u,""+_,E);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case rc:return u=u.get(_.key===null?v:_.key)||null,l(x,u,_,E);case Js:return u=u.get(_.key===null?v:_.key)||null,c(x,u,_,E);case xr:var M=_._init;return f(u,x,v,M(_._payload),E)}if(Ia(_)||Sa(_))return u=u.get(v)||null,d(x,u,_,E,null);yc(x,_)}return null}function g(u,x,v,_){for(var E=null,M=null,T=x,R=x=0,S=null;T!==null&&R<v.length;R++){T.index>R?(S=T,T=null):S=T.sibling;var A=p(u,T,v[R],_);if(A===null){T===null&&(T=S);break}t&&T&&A.alternate===null&&e(u,T),x=s(A,x,R),M===null?E=A:M.sibling=A,M=A,T=S}if(R===v.length)return n(u,T),_t&&as(u,R),E;if(T===null){for(;R<v.length;R++)T=h(u,v[R],_),T!==null&&(x=s(T,x,R),M===null?E=T:M.sibling=T,M=T);return _t&&as(u,R),E}for(T=i(u,T);R<v.length;R++)S=f(T,u,R,v[R],_),S!==null&&(t&&S.alternate!==null&&T.delete(S.key===null?R:S.key),x=s(S,x,R),M===null?E=S:M.sibling=S,M=S);return t&&T.forEach(function(P){return e(u,P)}),_t&&as(u,R),E}function y(u,x,v,_){var E=Sa(v);if(typeof E!="function")throw Error(fe(150));if(v=E.call(v),v==null)throw Error(fe(151));for(var M=E=null,T=x,R=x=0,S=null,A=v.next();T!==null&&!A.done;R++,A=v.next()){T.index>R?(S=T,T=null):S=T.sibling;var P=p(u,T,A.value,_);if(P===null){T===null&&(T=S);break}t&&T&&P.alternate===null&&e(u,T),x=s(P,x,R),M===null?E=P:M.sibling=P,M=P,T=S}if(A.done)return n(u,T),_t&&as(u,R),E;if(T===null){for(;!A.done;R++,A=v.next())A=h(u,A.value,_),A!==null&&(x=s(A,x,R),M===null?E=A:M.sibling=A,M=A);return _t&&as(u,R),E}for(T=i(u,T);!A.done;R++,A=v.next())A=f(T,u,R,A.value,_),A!==null&&(t&&A.alternate!==null&&T.delete(A.key===null?R:A.key),x=s(A,x,R),M===null?E=A:M.sibling=A,M=A);return t&&T.forEach(function(W){return e(u,W)}),_t&&as(u,R),E}function m(u,x,v,_){if(typeof v=="object"&&v!==null&&v.type===Zs&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case rc:e:{for(var E=v.key,M=x;M!==null;){if(M.key===E){if(E=v.type,E===Zs){if(M.tag===7){n(u,M.sibling),x=r(M,v.props.children),x.return=u,u=x;break e}}else if(M.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===xr&&Lg(E)===M.type){n(u,M.sibling),x=r(M,v.props),x.ref=Aa(u,M,v),x.return=u,u=x;break e}n(u,M);break}else e(u,M);M=M.sibling}v.type===Zs?(x=ps(v.props.children,u.mode,_,v.key),x.return=u,u=x):(_=Ic(v.type,v.key,v.props,null,u.mode,_),_.ref=Aa(u,x,v),_.return=u,u=_)}return o(u);case Js:e:{for(M=v.key;x!==null;){if(x.key===M)if(x.tag===4&&x.stateNode.containerInfo===v.containerInfo&&x.stateNode.implementation===v.implementation){n(u,x.sibling),x=r(x,v.children||[]),x.return=u,u=x;break e}else{n(u,x);break}else e(u,x);x=x.sibling}x=Th(v,u.mode,_),x.return=u,u=x}return o(u);case xr:return M=v._init,m(u,x,M(v._payload),_)}if(Ia(v))return g(u,x,v,_);if(Sa(v))return y(u,x,v,_);yc(u,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,x!==null&&x.tag===6?(n(u,x.sibling),x=r(x,v),x.return=u,u=x):(n(u,x),x=Eh(v,u.mode,_),x.return=u,u=x),o(u)):n(u,x)}return m}var xo=tx(!0),nx=tx(!1),Xc=Dr(null),qc=null,so=null,Fp=null;function zp(){Fp=so=qc=null}function Bp(t){var e=Xc.current;vt(Xc),t._currentValue=e}function np(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function po(t,e){qc=t,Fp=so=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(En=!0),t.firstContext=null)}function ei(t){var e=t._currentValue;if(Fp!==t)if(t={context:t,memoizedValue:e,next:null},so===null){if(qc===null)throw Error(fe(308));so=t,qc.dependencies={lanes:0,firstContext:t}}else so=so.next=t;return e}var ds=null;function Hp(t){ds===null?ds=[t]:ds.push(t)}function ix(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Hp(e)):(n.next=r.next,r.next=n),e.interleaved=n,er(t,i)}function er(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var yr=!1;function Vp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function rx(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Zi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Cr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,it&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,er(t,n)}return r=i.interleaved,r===null?(e.next=e,Hp(i)):(e.next=r.next,r.next=e),i.interleaved=e,er(t,n)}function Tc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Ap(t,n)}}function Ig(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Yc(t,e,n,i){var r=t.updateQueue;yr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,d=c=l=null,a=s;do{var p=a.lane,f=a.eventTime;if((i&p)===p){d!==null&&(d=d.next={eventTime:f,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,y=a;switch(p=e,f=n,y.tag){case 1:if(g=y.payload,typeof g=="function"){h=g.call(f,h,p);break e}h=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=y.payload,p=typeof g=="function"?g.call(f,h,p):g,p==null)break e;h=Et({},h,p);break e;case 2:yr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,p=r.effects,p===null?r.effects=[a]:p.push(a))}else f={eventTime:f,lane:p,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=f,l=h):d=d.next=f,o|=p;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;p=a,a=p.next,p.next=null,r.lastBaseUpdate=p,r.shared.pending=null}}while(!0);if(d===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);vs|=o,t.lanes=o,t.memoizedState=h}}function kg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(fe(191,r));r.call(i)}}}var dl={},Fi=Dr(dl),tl=Dr(dl),nl=Dr(dl);function us(t){if(t===dl)throw Error(fe(174));return t}function Gp(t,e){switch(ft(nl,e),ft(tl,t),ft(Fi,dl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Uh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Uh(e,t)}vt(Fi),ft(Fi,e)}function yo(){vt(Fi),vt(tl),vt(nl)}function sx(t){us(nl.current);var e=us(Fi.current),n=Uh(e,t.type);e!==n&&(ft(tl,t),ft(Fi,n))}function Wp(t){tl.current===t&&(vt(Fi),vt(tl))}var St=Dr(0);function $c(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var yh=[];function jp(){for(var t=0;t<yh.length;t++)yh[t]._workInProgressVersionPrimary=null;yh.length=0}var Ac=nr.ReactCurrentDispatcher,_h=nr.ReactCurrentBatchConfig,gs=0,Mt=null,Ot=null,jt=null,Jc=!1,Ba=!1,il=0,wS=0;function cn(){throw Error(fe(321))}function Xp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!yi(t[n],e[n]))return!1;return!0}function qp(t,e,n,i,r,s){if(gs=s,Mt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ac.current=t===null||t.memoizedState===null?TS:AS,t=n(i,r),Ba){s=0;do{if(Ba=!1,il=0,25<=s)throw Error(fe(301));s+=1,jt=Ot=null,e.updateQueue=null,Ac.current=CS,t=n(i,r)}while(Ba)}if(Ac.current=Zc,e=Ot!==null&&Ot.next!==null,gs=0,jt=Ot=Mt=null,Jc=!1,e)throw Error(fe(300));return t}function Yp(){var t=il!==0;return il=0,t}function Di(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return jt===null?Mt.memoizedState=jt=t:jt=jt.next=t,jt}function ti(){if(Ot===null){var t=Mt.alternate;t=t!==null?t.memoizedState:null}else t=Ot.next;var e=jt===null?Mt.memoizedState:jt.next;if(e!==null)jt=e,Ot=t;else{if(t===null)throw Error(fe(310));Ot=t,t={memoizedState:Ot.memoizedState,baseState:Ot.baseState,baseQueue:Ot.baseQueue,queue:Ot.queue,next:null},jt===null?Mt.memoizedState=jt=t:jt=jt.next=t}return jt}function rl(t,e){return typeof e=="function"?e(t):e}function bh(t){var e=ti(),n=e.queue;if(n===null)throw Error(fe(311));n.lastRenderedReducer=t;var i=Ot,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var d=c.lane;if((gs&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,Mt.lanes|=d,vs|=d}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,yi(i,e.memoizedState)||(En=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Mt.lanes|=s,vs|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function wh(t){var e=ti(),n=e.queue;if(n===null)throw Error(fe(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);yi(s,e.memoizedState)||(En=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function ox(){}function ax(t,e){var n=Mt,i=ti(),r=e(),s=!yi(i.memoizedState,r);if(s&&(i.memoizedState=r,En=!0),i=i.queue,$p(dx.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||jt!==null&&jt.memoizedState.tag&1){if(n.flags|=2048,sl(9,cx.bind(null,n,i,r,e),void 0,null),Xt===null)throw Error(fe(349));gs&30||lx(n,e,r)}return r}function lx(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Mt.updateQueue,e===null?(e={lastEffect:null,stores:null},Mt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function cx(t,e,n,i){e.value=n,e.getSnapshot=i,ux(e)&&hx(t)}function dx(t,e,n){return n(function(){ux(e)&&hx(t)})}function ux(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!yi(t,n)}catch{return!0}}function hx(t){var e=er(t,1);e!==null&&xi(e,t,1,-1)}function Ng(t){var e=Di();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:rl,lastRenderedState:t},e.queue=t,t=t.dispatch=ES.bind(null,Mt,t),[e.memoizedState,t]}function sl(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Mt.updateQueue,e===null?(e={lastEffect:null,stores:null},Mt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function px(){return ti().memoizedState}function Cc(t,e,n,i){var r=Di();Mt.flags|=t,r.memoizedState=sl(1|e,n,void 0,i===void 0?null:i)}function cd(t,e,n,i){var r=ti();i=i===void 0?null:i;var s=void 0;if(Ot!==null){var o=Ot.memoizedState;if(s=o.destroy,i!==null&&Xp(i,o.deps)){r.memoizedState=sl(e,n,s,i);return}}Mt.flags|=t,r.memoizedState=sl(1|e,n,s,i)}function Dg(t,e){return Cc(8390656,8,t,e)}function $p(t,e){return cd(2048,8,t,e)}function fx(t,e){return cd(4,2,t,e)}function mx(t,e){return cd(4,4,t,e)}function gx(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function vx(t,e,n){return n=n!=null?n.concat([t]):null,cd(4,4,gx.bind(null,e,t),n)}function Jp(){}function xx(t,e){var n=ti();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Xp(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function yx(t,e){var n=ti();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Xp(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function _x(t,e,n){return gs&21?(yi(n,e)||(n=Ev(),Mt.lanes|=n,vs|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,En=!0),t.memoizedState=n)}function SS(t,e){var n=at;at=n!==0&&4>n?n:4,t(!0);var i=_h.transition;_h.transition={};try{t(!1),e()}finally{at=n,_h.transition=i}}function bx(){return ti().memoizedState}function MS(t,e,n){var i=Pr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},wx(t))Sx(e,n);else if(n=ix(t,e,n,i),n!==null){var r=xn();xi(n,t,i,r),Mx(n,e,i)}}function ES(t,e,n){var i=Pr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(wx(t))Sx(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,yi(a,o)){var l=e.interleaved;l===null?(r.next=r,Hp(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=ix(t,e,r,i),n!==null&&(r=xn(),xi(n,t,i,r),Mx(n,e,i))}}function wx(t){var e=t.alternate;return t===Mt||e!==null&&e===Mt}function Sx(t,e){Ba=Jc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Mx(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Ap(t,n)}}var Zc={readContext:ei,useCallback:cn,useContext:cn,useEffect:cn,useImperativeHandle:cn,useInsertionEffect:cn,useLayoutEffect:cn,useMemo:cn,useReducer:cn,useRef:cn,useState:cn,useDebugValue:cn,useDeferredValue:cn,useTransition:cn,useMutableSource:cn,useSyncExternalStore:cn,useId:cn,unstable_isNewReconciler:!1},TS={readContext:ei,useCallback:function(t,e){return Di().memoizedState=[t,e===void 0?null:e],t},useContext:ei,useEffect:Dg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Cc(4194308,4,gx.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Cc(4194308,4,t,e)},useInsertionEffect:function(t,e){return Cc(4,2,t,e)},useMemo:function(t,e){var n=Di();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Di();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=MS.bind(null,Mt,t),[i.memoizedState,t]},useRef:function(t){var e=Di();return t={current:t},e.memoizedState=t},useState:Ng,useDebugValue:Jp,useDeferredValue:function(t){return Di().memoizedState=t},useTransition:function(){var t=Ng(!1),e=t[0];return t=SS.bind(null,t[1]),Di().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Mt,r=Di();if(_t){if(n===void 0)throw Error(fe(407));n=n()}else{if(n=e(),Xt===null)throw Error(fe(349));gs&30||lx(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Dg(dx.bind(null,i,s,t),[t]),i.flags|=2048,sl(9,cx.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Di(),e=Xt.identifierPrefix;if(_t){var n=Ji,i=$i;n=(i&~(1<<32-vi(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=il++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=wS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},AS={readContext:ei,useCallback:xx,useContext:ei,useEffect:$p,useImperativeHandle:vx,useInsertionEffect:fx,useLayoutEffect:mx,useMemo:yx,useReducer:bh,useRef:px,useState:function(){return bh(rl)},useDebugValue:Jp,useDeferredValue:function(t){var e=ti();return _x(e,Ot.memoizedState,t)},useTransition:function(){var t=bh(rl)[0],e=ti().memoizedState;return[t,e]},useMutableSource:ox,useSyncExternalStore:ax,useId:bx,unstable_isNewReconciler:!1},CS={readContext:ei,useCallback:xx,useContext:ei,useEffect:$p,useImperativeHandle:vx,useInsertionEffect:fx,useLayoutEffect:mx,useMemo:yx,useReducer:wh,useRef:px,useState:function(){return wh(rl)},useDebugValue:Jp,useDeferredValue:function(t){var e=ti();return Ot===null?e.memoizedState=t:_x(e,Ot.memoizedState,t)},useTransition:function(){var t=wh(rl)[0],e=ti().memoizedState;return[t,e]},useMutableSource:ox,useSyncExternalStore:ax,useId:bx,unstable_isNewReconciler:!1};function fi(t,e){if(t&&t.defaultProps){e=Et({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function ip(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Et({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var dd={isMounted:function(t){return(t=t._reactInternals)?_s(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=xn(),r=Pr(t),s=Zi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Cr(t,s,r),e!==null&&(xi(e,t,r,i),Tc(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=xn(),r=Pr(t),s=Zi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Cr(t,s,r),e!==null&&(xi(e,t,r,i),Tc(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=xn(),i=Pr(t),r=Zi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Cr(t,r,i),e!==null&&(xi(e,t,i,n),Tc(e,t,i))}};function Ug(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Za(n,i)||!Za(r,s):!0}function Ex(t,e,n){var i=!1,r=kr,s=e.contextType;return typeof s=="object"&&s!==null?s=ei(s):(r=An(e)?fs:hn.current,i=e.contextTypes,s=(i=i!=null)?go(t,r):kr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=dd,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Og(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&dd.enqueueReplaceState(e,e.state,null)}function rp(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Vp(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=ei(s):(s=An(e)?fs:hn.current,r.context=go(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(ip(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&dd.enqueueReplaceState(r,r.state,null),Yc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function _o(t,e){try{var n="",i=e;do n+=rw(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Sh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function sp(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var RS=typeof WeakMap=="function"?WeakMap:Map;function Tx(t,e,n){n=Zi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Qc||(Qc=!0,mp=i),sp(t,e)},n}function Ax(t,e,n){n=Zi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){sp(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){sp(t,e),typeof i!="function"&&(Rr===null?Rr=new Set([this]):Rr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Fg(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new RS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=GS.bind(null,t,e,n),e.then(t,t))}function zg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Bg(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Zi(-1,1),e.tag=2,Cr(n,e,1))),n.lanes|=1),t)}var PS=nr.ReactCurrentOwner,En=!1;function vn(t,e,n,i){e.child=t===null?nx(e,null,n,i):xo(e,t.child,n,i)}function Hg(t,e,n,i,r){n=n.render;var s=e.ref;return po(e,r),i=qp(t,e,n,i,s,r),n=Yp(),t!==null&&!En?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,tr(t,e,r)):(_t&&n&&Dp(e),e.flags|=1,vn(t,e,i,r),e.child)}function Vg(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!sf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Cx(t,e,s,i,r)):(t=Ic(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Za,n(o,i)&&t.ref===e.ref)return tr(t,e,r)}return e.flags|=1,t=Lr(s,i),t.ref=e.ref,t.return=e,e.child=t}function Cx(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Za(s,i)&&t.ref===e.ref)if(En=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(En=!0);else return e.lanes=t.lanes,tr(t,e,r)}return op(t,e,n,i,r)}function Rx(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ft(ao,Nn),Nn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ft(ao,Nn),Nn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ft(ao,Nn),Nn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ft(ao,Nn),Nn|=i;return vn(t,e,r,n),e.child}function Px(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function op(t,e,n,i,r){var s=An(n)?fs:hn.current;return s=go(e,s),po(e,r),n=qp(t,e,n,i,s,r),i=Yp(),t!==null&&!En?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,tr(t,e,r)):(_t&&i&&Dp(e),e.flags|=1,vn(t,e,n,r),e.child)}function Gg(t,e,n,i,r){if(An(n)){var s=!0;Gc(e)}else s=!1;if(po(e,r),e.stateNode===null)Rc(t,e),Ex(e,n,i),rp(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=ei(c):(c=An(n)?fs:hn.current,c=go(e,c));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Og(e,o,i,c),yr=!1;var p=e.memoizedState;o.state=p,Yc(e,i,o,r),l=e.memoizedState,a!==i||p!==l||Tn.current||yr?(typeof d=="function"&&(ip(e,n,d,i),l=e.memoizedState),(a=yr||Ug(e,n,a,i,p,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,rx(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:fi(e.type,a),o.props=c,h=e.pendingProps,p=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=ei(l):(l=An(n)?fs:hn.current,l=go(e,l));var f=n.getDerivedStateFromProps;(d=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||p!==l)&&Og(e,o,i,l),yr=!1,p=e.memoizedState,o.state=p,Yc(e,i,o,r);var g=e.memoizedState;a!==h||p!==g||Tn.current||yr?(typeof f=="function"&&(ip(e,n,f,i),g=e.memoizedState),(c=yr||Ug(e,n,c,i,p,g,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),i=!1)}return ap(t,e,n,i,s,r)}function ap(t,e,n,i,r,s){Px(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Cg(e,n,!1),tr(t,e,s);i=e.stateNode,PS.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=xo(e,t.child,null,s),e.child=xo(e,null,a,s)):vn(t,e,a,s),e.memoizedState=i.state,r&&Cg(e,n,!0),e.child}function Lx(t){var e=t.stateNode;e.pendingContext?Ag(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Ag(t,e.context,!1),Gp(t,e.containerInfo)}function Wg(t,e,n,i,r){return vo(),Op(r),e.flags|=256,vn(t,e,n,i),e.child}var lp={dehydrated:null,treeContext:null,retryLane:0};function cp(t){return{baseLanes:t,cachePool:null,transitions:null}}function Ix(t,e,n){var i=e.pendingProps,r=St.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ft(St,r&1),t===null)return tp(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=pd(o,i,0,null),t=ps(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=cp(n),e.memoizedState=lp,t):Zp(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return LS(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Lr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Lr(a,s):(s=ps(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?cp(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=lp,i}return s=t.child,t=s.sibling,i=Lr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Zp(t,e){return e=pd({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function _c(t,e,n,i){return i!==null&&Op(i),xo(e,t.child,null,n),t=Zp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function LS(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Sh(Error(fe(422))),_c(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=pd({mode:"visible",children:i.children},r,0,null),s=ps(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&xo(e,t.child,null,o),e.child.memoizedState=cp(o),e.memoizedState=lp,s);if(!(e.mode&1))return _c(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(fe(419)),i=Sh(s,i,void 0),_c(t,e,o,i)}if(a=(o&t.childLanes)!==0,En||a){if(i=Xt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,er(t,r),xi(i,t,r,-1))}return rf(),i=Sh(Error(fe(421))),_c(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=WS.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Dn=Ar(r.nextSibling),Un=e,_t=!0,gi=null,t!==null&&(Jn[Zn++]=$i,Jn[Zn++]=Ji,Jn[Zn++]=ms,$i=t.id,Ji=t.overflow,ms=e),e=Zp(e,i.children),e.flags|=4096,e)}function jg(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),np(t.return,e,n)}function Mh(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function kx(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(vn(t,e,i.children,n),i=St.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&jg(t,n,e);else if(t.tag===19)jg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ft(St,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&$c(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Mh(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&$c(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Mh(e,!0,n,null,s);break;case"together":Mh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Rc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function tr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),vs|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(fe(153));if(e.child!==null){for(t=e.child,n=Lr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Lr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function IS(t,e,n){switch(e.tag){case 3:Lx(e),vo();break;case 5:sx(e);break;case 1:An(e.type)&&Gc(e);break;case 4:Gp(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ft(Xc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ft(St,St.current&1),e.flags|=128,null):n&e.child.childLanes?Ix(t,e,n):(ft(St,St.current&1),t=tr(t,e,n),t!==null?t.sibling:null);ft(St,St.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return kx(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ft(St,St.current),i)break;return null;case 22:case 23:return e.lanes=0,Rx(t,e,n)}return tr(t,e,n)}var Nx,dp,Dx,Ux;Nx=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};dp=function(){};Dx=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,us(Fi.current);var s=null;switch(n){case"input":r=Ih(t,r),i=Ih(t,i),s=[];break;case"select":r=Et({},r,{value:void 0}),i=Et({},i,{value:void 0}),s=[];break;case"textarea":r=Dh(t,r),i=Dh(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Hc)}Oh(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Wa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r?.[c],i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Wa.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&gt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Ux=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ca(t,e){if(!_t)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function dn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function kS(t,e,n){var i=e.pendingProps;switch(Up(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dn(e),null;case 1:return An(e.type)&&Vc(),dn(e),null;case 3:return i=e.stateNode,yo(),vt(Tn),vt(hn),jp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(xc(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,gi!==null&&(xp(gi),gi=null))),dp(t,e),dn(e),null;case 5:Wp(e);var r=us(nl.current);if(n=e.type,t!==null&&e.stateNode!=null)Dx(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(fe(166));return dn(e),null}if(t=us(Fi.current),xc(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Ui]=e,i[el]=s,t=(e.mode&1)!==0,n){case"dialog":gt("cancel",i),gt("close",i);break;case"iframe":case"object":case"embed":gt("load",i);break;case"video":case"audio":for(r=0;r<Na.length;r++)gt(Na[r],i);break;case"source":gt("error",i);break;case"img":case"image":case"link":gt("error",i),gt("load",i);break;case"details":gt("toggle",i);break;case"input":Q0(i,s),gt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},gt("invalid",i);break;case"textarea":tg(i,s),gt("invalid",i)}Oh(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&vc(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&vc(i.textContent,a,t),r=["children",""+a]):Wa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&gt("scroll",i)}switch(n){case"input":sc(i),eg(i,s,!0);break;case"textarea":sc(i),ng(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Hc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=dv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Ui]=e,t[el]=i,Nx(t,e,!1,!1),e.stateNode=t;e:{switch(o=Fh(n,i),n){case"dialog":gt("cancel",t),gt("close",t),r=i;break;case"iframe":case"object":case"embed":gt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Na.length;r++)gt(Na[r],t);r=i;break;case"source":gt("error",t),r=i;break;case"img":case"image":case"link":gt("error",t),gt("load",t),r=i;break;case"details":gt("toggle",t),r=i;break;case"input":Q0(t,i),r=Ih(t,i),gt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Et({},i,{value:void 0}),gt("invalid",t);break;case"textarea":tg(t,i),r=Dh(t,i),gt("invalid",t);break;default:r=i}Oh(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?pv(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&uv(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ja(t,l):typeof l=="number"&&ja(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Wa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&gt("scroll",t):l!=null&&bp(t,s,l,o))}switch(n){case"input":sc(t),eg(t,i,!1);break;case"textarea":sc(t),ng(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Ir(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?lo(t,!!i.multiple,s,!1):i.defaultValue!=null&&lo(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Hc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return dn(e),null;case 6:if(t&&e.stateNode!=null)Ux(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(fe(166));if(n=us(nl.current),us(Fi.current),xc(e)){if(i=e.stateNode,n=e.memoizedProps,i[Ui]=e,(s=i.nodeValue!==n)&&(t=Un,t!==null))switch(t.tag){case 3:vc(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&vc(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Ui]=e,e.stateNode=i}return dn(e),null;case 13:if(vt(St),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(_t&&Dn!==null&&e.mode&1&&!(e.flags&128))ex(),vo(),e.flags|=98560,s=!1;else if(s=xc(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(fe(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(fe(317));s[Ui]=e}else vo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;dn(e),s=!1}else gi!==null&&(xp(gi),gi=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||St.current&1?Ft===0&&(Ft=3):rf())),e.updateQueue!==null&&(e.flags|=4),dn(e),null);case 4:return yo(),dp(t,e),t===null&&Ka(e.stateNode.containerInfo),dn(e),null;case 10:return Bp(e.type._context),dn(e),null;case 17:return An(e.type)&&Vc(),dn(e),null;case 19:if(vt(St),s=e.memoizedState,s===null)return dn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Ca(s,!1);else{if(Ft!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=$c(t),o!==null){for(e.flags|=128,Ca(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ft(St,St.current&1|2),e.child}t=t.sibling}s.tail!==null&&Lt()>bo&&(e.flags|=128,i=!0,Ca(s,!1),e.lanes=4194304)}else{if(!i)if(t=$c(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ca(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!_t)return dn(e),null}else 2*Lt()-s.renderingStartTime>bo&&n!==1073741824&&(e.flags|=128,i=!0,Ca(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Lt(),e.sibling=null,n=St.current,ft(St,i?n&1|2:n&1),e):(dn(e),null);case 22:case 23:return nf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Nn&1073741824&&(dn(e),e.subtreeFlags&6&&(e.flags|=8192)):dn(e),null;case 24:return null;case 25:return null}throw Error(fe(156,e.tag))}function NS(t,e){switch(Up(e),e.tag){case 1:return An(e.type)&&Vc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return yo(),vt(Tn),vt(hn),jp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Wp(e),null;case 13:if(vt(St),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(fe(340));vo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return vt(St),null;case 4:return yo(),null;case 10:return Bp(e.type._context),null;case 22:case 23:return nf(),null;case 24:return null;default:return null}}var bc=!1,un=!1,DS=typeof WeakSet=="function"?WeakSet:Set,ke=null;function oo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Ct(t,e,i)}else n.current=null}function up(t,e,n){try{n()}catch(i){Ct(t,e,i)}}var Xg=!1;function US(t,e){if(Yh=Fc,t=Hv(),Np(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,d=0,h=t,p=null;t:for(;;){for(var f;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(f=h.firstChild)!==null;)p=h,h=f;for(;;){if(h===t)break t;if(p===n&&++c===r&&(a=o),p===s&&++d===i&&(l=o),(f=h.nextSibling)!==null)break;h=p,p=h.parentNode}h=f}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for($h={focusedElem:t,selectionRange:n},Fc=!1,ke=e;ke!==null;)if(e=ke,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ke=t;else for(;ke!==null;){e=ke;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var y=g.memoizedProps,m=g.memoizedState,u=e.stateNode,x=u.getSnapshotBeforeUpdate(e.elementType===e.type?y:fi(e.type,y),m);u.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(fe(163))}}catch(_){Ct(e,e.return,_)}if(t=e.sibling,t!==null){t.return=e.return,ke=t;break}ke=e.return}return g=Xg,Xg=!1,g}function Ha(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&up(e,n,s)}r=r.next}while(r!==i)}}function ud(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function hp(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Ox(t){var e=t.alternate;e!==null&&(t.alternate=null,Ox(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ui],delete e[el],delete e[Kh],delete e[xS],delete e[yS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Fx(t){return t.tag===5||t.tag===3||t.tag===4}function qg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Fx(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function pp(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Hc));else if(i!==4&&(t=t.child,t!==null))for(pp(t,e,n),t=t.sibling;t!==null;)pp(t,e,n),t=t.sibling}function fp(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(fp(t,e,n),t=t.sibling;t!==null;)fp(t,e,n),t=t.sibling}var tn=null,mi=!1;function vr(t,e,n){for(n=n.child;n!==null;)zx(t,e,n),n=n.sibling}function zx(t,e,n){if(Oi&&typeof Oi.onCommitFiberUnmount=="function")try{Oi.onCommitFiberUnmount(id,n)}catch{}switch(n.tag){case 5:un||oo(n,e);case 6:var i=tn,r=mi;tn=null,vr(t,e,n),tn=i,mi=r,tn!==null&&(mi?(t=tn,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):tn.removeChild(n.stateNode));break;case 18:tn!==null&&(mi?(t=tn,n=n.stateNode,t.nodeType===8?vh(t.parentNode,n):t.nodeType===1&&vh(t,n),$a(t)):vh(tn,n.stateNode));break;case 4:i=tn,r=mi,tn=n.stateNode.containerInfo,mi=!0,vr(t,e,n),tn=i,mi=r;break;case 0:case 11:case 14:case 15:if(!un&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&up(n,e,o),r=r.next}while(r!==i)}vr(t,e,n);break;case 1:if(!un&&(oo(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Ct(n,e,a)}vr(t,e,n);break;case 21:vr(t,e,n);break;case 22:n.mode&1?(un=(i=un)||n.memoizedState!==null,vr(t,e,n),un=i):vr(t,e,n);break;default:vr(t,e,n)}}function Yg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new DS),e.forEach(function(i){var r=jS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function pi(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:tn=a.stateNode,mi=!1;break e;case 3:tn=a.stateNode.containerInfo,mi=!0;break e;case 4:tn=a.stateNode.containerInfo,mi=!0;break e}a=a.return}if(tn===null)throw Error(fe(160));zx(s,o,r),tn=null,mi=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Ct(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Bx(e,t),e=e.sibling}function Bx(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(pi(e,t),Ni(t),i&4){try{Ha(3,t,t.return),ud(3,t)}catch(y){Ct(t,t.return,y)}try{Ha(5,t,t.return)}catch(y){Ct(t,t.return,y)}}break;case 1:pi(e,t),Ni(t),i&512&&n!==null&&oo(n,n.return);break;case 5:if(pi(e,t),Ni(t),i&512&&n!==null&&oo(n,n.return),t.flags&32){var r=t.stateNode;try{ja(r,"")}catch(y){Ct(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&lv(r,s),Fh(a,o);var c=Fh(a,s);for(o=0;o<l.length;o+=2){var d=l[o],h=l[o+1];d==="style"?pv(r,h):d==="dangerouslySetInnerHTML"?uv(r,h):d==="children"?ja(r,h):bp(r,d,h,c)}switch(a){case"input":kh(r,s);break;case"textarea":cv(r,s);break;case"select":var p=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var f=s.value;f!=null?lo(r,!!s.multiple,f,!1):p!==!!s.multiple&&(s.defaultValue!=null?lo(r,!!s.multiple,s.defaultValue,!0):lo(r,!!s.multiple,s.multiple?[]:"",!1))}r[el]=s}catch(y){Ct(t,t.return,y)}}break;case 6:if(pi(e,t),Ni(t),i&4){if(t.stateNode===null)throw Error(fe(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){Ct(t,t.return,y)}}break;case 3:if(pi(e,t),Ni(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{$a(e.containerInfo)}catch(y){Ct(t,t.return,y)}break;case 4:pi(e,t),Ni(t);break;case 13:pi(e,t),Ni(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(ef=Lt())),i&4&&Yg(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(un=(c=un)||d,pi(e,t),un=c):pi(e,t),Ni(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(ke=t,d=t.child;d!==null;){for(h=ke=d;ke!==null;){switch(p=ke,f=p.child,p.tag){case 0:case 11:case 14:case 15:Ha(4,p,p.return);break;case 1:oo(p,p.return);var g=p.stateNode;if(typeof g.componentWillUnmount=="function"){i=p,n=p.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(y){Ct(i,n,y)}}break;case 5:oo(p,p.return);break;case 22:if(p.memoizedState!==null){Jg(h);continue}}f!==null?(f.return=p,ke=f):Jg(h)}d=d.sibling}e:for(d=null,h=t;;){if(h.tag===5){if(d===null){d=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=hv("display",o))}catch(y){Ct(t,t.return,y)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(y){Ct(t,t.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:pi(e,t),Ni(t),i&4&&Yg(t);break;case 21:break;default:pi(e,t),Ni(t)}}function Ni(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Fx(n)){var i=n;break e}n=n.return}throw Error(fe(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ja(r,""),i.flags&=-33);var s=qg(t);fp(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=qg(t);pp(t,a,o);break;default:throw Error(fe(161))}}catch(l){Ct(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function OS(t,e,n){ke=t,Hx(t,e,n)}function Hx(t,e,n){for(var i=(t.mode&1)!==0;ke!==null;){var r=ke,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||bc;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||un;a=bc;var c=un;if(bc=o,(un=l)&&!c)for(ke=r;ke!==null;)o=ke,l=o.child,o.tag===22&&o.memoizedState!==null?Zg(r):l!==null?(l.return=o,ke=l):Zg(r);for(;s!==null;)ke=s,Hx(s,e,n),s=s.sibling;ke=r,bc=a,un=c}$g(t,e,n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ke=s):$g(t,e,n)}}function $g(t){for(;ke!==null;){var e=ke;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:un||ud(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!un)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:fi(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&kg(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}kg(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&$a(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(fe(163))}un||e.flags&512&&hp(e)}catch(p){Ct(e,e.return,p)}}if(e===t){ke=null;break}if(n=e.sibling,n!==null){n.return=e.return,ke=n;break}ke=e.return}}function Jg(t){for(;ke!==null;){var e=ke;if(e===t){ke=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ke=n;break}ke=e.return}}function Zg(t){for(;ke!==null;){var e=ke;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ud(4,e)}catch(l){Ct(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Ct(e,r,l)}}var s=e.return;try{hp(e)}catch(l){Ct(e,s,l)}break;case 5:var o=e.return;try{hp(e)}catch(l){Ct(e,o,l)}}}catch(l){Ct(e,e.return,l)}if(e===t){ke=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ke=a;break}ke=e.return}}var FS=Math.ceil,Kc=nr.ReactCurrentDispatcher,Kp=nr.ReactCurrentOwner,Qn=nr.ReactCurrentBatchConfig,it=0,Xt=null,kt=null,nn=0,Nn=0,ao=Dr(0),Ft=0,ol=null,vs=0,hd=0,Qp=0,Va=null,Mn=null,ef=0,bo=1/0,qi=null,Qc=!1,mp=null,Rr=null,wc=!1,Sr=null,ed=0,Ga=0,gp=null,Pc=-1,Lc=0;function xn(){return it&6?Lt():Pc!==-1?Pc:Pc=Lt()}function Pr(t){return t.mode&1?it&2&&nn!==0?nn&-nn:bS.transition!==null?(Lc===0&&(Lc=Ev()),Lc):(t=at,t!==0||(t=window.event,t=t===void 0?16:Iv(t.type)),t):1}function xi(t,e,n,i){if(50<Ga)throw Ga=0,gp=null,Error(fe(185));al(t,n,i),(!(it&2)||t!==Xt)&&(t===Xt&&(!(it&2)&&(hd|=n),Ft===4&&br(t,nn)),Cn(t,i),n===1&&it===0&&!(e.mode&1)&&(bo=Lt()+500,ld&&Ur()))}function Cn(t,e){var n=t.callbackNode;Sw(t,e);var i=Oc(t,t===Xt?nn:0);if(i===0)n!==null&&sg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&sg(n),e===1)t.tag===0?_S(Kg.bind(null,t)):Zv(Kg.bind(null,t)),gS(function(){!(it&6)&&Ur()}),n=null;else{switch(Tv(i)){case 1:n=Tp;break;case 4:n=Sv;break;case 16:n=Uc;break;case 536870912:n=Mv;break;default:n=Uc}n=$x(n,Vx.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Vx(t,e){if(Pc=-1,Lc=0,it&6)throw Error(fe(327));var n=t.callbackNode;if(fo()&&t.callbackNode!==n)return null;var i=Oc(t,t===Xt?nn:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=td(t,i);else{e=i;var r=it;it|=2;var s=Wx();(Xt!==t||nn!==e)&&(qi=null,bo=Lt()+500,hs(t,e));do try{HS();break}catch(a){Gx(t,a)}while(!0);zp(),Kc.current=s,it=r,kt!==null?e=0:(Xt=null,nn=0,e=Ft)}if(e!==0){if(e===2&&(r=Gh(t),r!==0&&(i=r,e=vp(t,r))),e===1)throw n=ol,hs(t,0),br(t,i),Cn(t,Lt()),n;if(e===6)br(t,i);else{if(r=t.current.alternate,!(i&30)&&!zS(r)&&(e=td(t,i),e===2&&(s=Gh(t),s!==0&&(i=s,e=vp(t,s))),e===1))throw n=ol,hs(t,0),br(t,i),Cn(t,Lt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(fe(345));case 2:ls(t,Mn,qi);break;case 3:if(br(t,i),(i&130023424)===i&&(e=ef+500-Lt(),10<e)){if(Oc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){xn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Zh(ls.bind(null,t,Mn,qi),e);break}ls(t,Mn,qi);break;case 4:if(br(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-vi(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Lt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*FS(i/1960))-i,10<i){t.timeoutHandle=Zh(ls.bind(null,t,Mn,qi),i);break}ls(t,Mn,qi);break;case 5:ls(t,Mn,qi);break;default:throw Error(fe(329))}}}return Cn(t,Lt()),t.callbackNode===n?Vx.bind(null,t):null}function vp(t,e){var n=Va;return t.current.memoizedState.isDehydrated&&(hs(t,e).flags|=256),t=td(t,e),t!==2&&(e=Mn,Mn=n,e!==null&&xp(e)),t}function xp(t){Mn===null?Mn=t:Mn.push.apply(Mn,t)}function zS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!yi(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function br(t,e){for(e&=~Qp,e&=~hd,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-vi(e),i=1<<n;t[n]=-1,e&=~i}}function Kg(t){if(it&6)throw Error(fe(327));fo();var e=Oc(t,0);if(!(e&1))return Cn(t,Lt()),null;var n=td(t,e);if(t.tag!==0&&n===2){var i=Gh(t);i!==0&&(e=i,n=vp(t,i))}if(n===1)throw n=ol,hs(t,0),br(t,e),Cn(t,Lt()),n;if(n===6)throw Error(fe(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ls(t,Mn,qi),Cn(t,Lt()),null}function tf(t,e){var n=it;it|=1;try{return t(e)}finally{it=n,it===0&&(bo=Lt()+500,ld&&Ur())}}function xs(t){Sr!==null&&Sr.tag===0&&!(it&6)&&fo();var e=it;it|=1;var n=Qn.transition,i=at;try{if(Qn.transition=null,at=1,t)return t()}finally{at=i,Qn.transition=n,it=e,!(it&6)&&Ur()}}function nf(){Nn=ao.current,vt(ao)}function hs(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,mS(n)),kt!==null)for(n=kt.return;n!==null;){var i=n;switch(Up(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Vc();break;case 3:yo(),vt(Tn),vt(hn),jp();break;case 5:Wp(i);break;case 4:yo();break;case 13:vt(St);break;case 19:vt(St);break;case 10:Bp(i.type._context);break;case 22:case 23:nf()}n=n.return}if(Xt=t,kt=t=Lr(t.current,null),nn=Nn=e,Ft=0,ol=null,Qp=hd=vs=0,Mn=Va=null,ds!==null){for(e=0;e<ds.length;e++)if(n=ds[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}ds=null}return t}function Gx(t,e){do{var n=kt;try{if(zp(),Ac.current=Zc,Jc){for(var i=Mt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Jc=!1}if(gs=0,jt=Ot=Mt=null,Ba=!1,il=0,Kp.current=null,n===null||n.return===null){Ft=1,ol=e,kt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=nn,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var f=zg(o);if(f!==null){f.flags&=-257,Bg(f,o,a,s,e),f.mode&1&&Fg(s,c,e),e=f,l=c;var g=e.updateQueue;if(g===null){var y=new Set;y.add(l),e.updateQueue=y}else g.add(l);break e}else{if(!(e&1)){Fg(s,c,e),rf();break e}l=Error(fe(426))}}else if(_t&&a.mode&1){var m=zg(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Bg(m,o,a,s,e),Op(_o(l,a));break e}}s=l=_o(l,a),Ft!==4&&(Ft=2),Va===null?Va=[s]:Va.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=Tx(s,l,e);Ig(s,u);break e;case 1:a=l;var x=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof x.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Rr===null||!Rr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var _=Ax(s,a,e);Ig(s,_);break e}}s=s.return}while(s!==null)}Xx(n)}catch(E){e=E,kt===n&&n!==null&&(kt=n=n.return);continue}break}while(!0)}function Wx(){var t=Kc.current;return Kc.current=Zc,t===null?Zc:t}function rf(){(Ft===0||Ft===3||Ft===2)&&(Ft=4),Xt===null||!(vs&268435455)&&!(hd&268435455)||br(Xt,nn)}function td(t,e){var n=it;it|=2;var i=Wx();(Xt!==t||nn!==e)&&(qi=null,hs(t,e));do try{BS();break}catch(r){Gx(t,r)}while(!0);if(zp(),it=n,Kc.current=i,kt!==null)throw Error(fe(261));return Xt=null,nn=0,Ft}function BS(){for(;kt!==null;)jx(kt)}function HS(){for(;kt!==null&&!fw();)jx(kt)}function jx(t){var e=Yx(t.alternate,t,Nn);t.memoizedProps=t.pendingProps,e===null?Xx(t):kt=e,Kp.current=null}function Xx(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=NS(n,e),n!==null){n.flags&=32767,kt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ft=6,kt=null;return}}else if(n=kS(n,e,Nn),n!==null){kt=n;return}if(e=e.sibling,e!==null){kt=e;return}kt=e=t}while(e!==null);Ft===0&&(Ft=5)}function ls(t,e,n){var i=at,r=Qn.transition;try{Qn.transition=null,at=1,VS(t,e,n,i)}finally{Qn.transition=r,at=i}return null}function VS(t,e,n,i){do fo();while(Sr!==null);if(it&6)throw Error(fe(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(fe(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Mw(t,s),t===Xt&&(kt=Xt=null,nn=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||wc||(wc=!0,$x(Uc,function(){return fo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Qn.transition,Qn.transition=null;var o=at;at=1;var a=it;it|=4,Kp.current=null,US(t,n),Bx(n,t),dS($h),Fc=!!Yh,$h=Yh=null,t.current=n,OS(n,t,r),mw(),it=a,at=o,Qn.transition=s}else t.current=n;if(wc&&(wc=!1,Sr=t,ed=r),s=t.pendingLanes,s===0&&(Rr=null),xw(n.stateNode,i),Cn(t,Lt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Qc)throw Qc=!1,t=mp,mp=null,t;return ed&1&&t.tag!==0&&fo(),s=t.pendingLanes,s&1?t===gp?Ga++:(Ga=0,gp=t):Ga=0,Ur(),null}function fo(){if(Sr!==null){var t=Tv(ed),e=Qn.transition,n=at;try{if(Qn.transition=null,at=16>t?16:t,Sr===null)var i=!1;else{if(t=Sr,Sr=null,ed=0,it&6)throw Error(fe(331));var r=it;for(it|=4,ke=t.current;ke!==null;){var s=ke,o=s.child;if(ke.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(ke=c;ke!==null;){var d=ke;switch(d.tag){case 0:case 11:case 15:Ha(8,d,s)}var h=d.child;if(h!==null)h.return=d,ke=h;else for(;ke!==null;){d=ke;var p=d.sibling,f=d.return;if(Ox(d),d===c){ke=null;break}if(p!==null){p.return=f,ke=p;break}ke=f}}}var g=s.alternate;if(g!==null){var y=g.child;if(y!==null){g.child=null;do{var m=y.sibling;y.sibling=null,y=m}while(y!==null)}}ke=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,ke=o;else e:for(;ke!==null;){if(s=ke,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ha(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,ke=u;break e}ke=s.return}}var x=t.current;for(ke=x;ke!==null;){o=ke;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,ke=v;else e:for(o=x;ke!==null;){if(a=ke,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ud(9,a)}}catch(E){Ct(a,a.return,E)}if(a===o){ke=null;break e}var _=a.sibling;if(_!==null){_.return=a.return,ke=_;break e}ke=a.return}}if(it=r,Ur(),Oi&&typeof Oi.onPostCommitFiberRoot=="function")try{Oi.onPostCommitFiberRoot(id,t)}catch{}i=!0}return i}finally{at=n,Qn.transition=e}}return!1}function Qg(t,e,n){e=_o(n,e),e=Tx(t,e,1),t=Cr(t,e,1),e=xn(),t!==null&&(al(t,1,e),Cn(t,e))}function Ct(t,e,n){if(t.tag===3)Qg(t,t,n);else for(;e!==null;){if(e.tag===3){Qg(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Rr===null||!Rr.has(i))){t=_o(n,t),t=Ax(e,t,1),e=Cr(e,t,1),t=xn(),e!==null&&(al(e,1,t),Cn(e,t));break}}e=e.return}}function GS(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=xn(),t.pingedLanes|=t.suspendedLanes&n,Xt===t&&(nn&n)===n&&(Ft===4||Ft===3&&(nn&130023424)===nn&&500>Lt()-ef?hs(t,0):Qp|=n),Cn(t,e)}function qx(t,e){e===0&&(t.mode&1?(e=lc,lc<<=1,!(lc&130023424)&&(lc=4194304)):e=1);var n=xn();t=er(t,e),t!==null&&(al(t,e,n),Cn(t,n))}function WS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),qx(t,n)}function jS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(fe(314))}i!==null&&i.delete(e),qx(t,n)}var Yx;Yx=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Tn.current)En=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return En=!1,IS(t,e,n);En=!!(t.flags&131072)}else En=!1,_t&&e.flags&1048576&&Kv(e,jc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Rc(t,e),t=e.pendingProps;var r=go(e,hn.current);po(e,n),r=qp(null,e,i,t,r,n);var s=Yp();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,An(i)?(s=!0,Gc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Vp(e),r.updater=dd,e.stateNode=r,r._reactInternals=e,rp(e,i,t,n),e=ap(null,e,i,!0,s,n)):(e.tag=0,_t&&s&&Dp(e),vn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Rc(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=qS(i),t=fi(i,t),r){case 0:e=op(null,e,i,t,n);break e;case 1:e=Gg(null,e,i,t,n);break e;case 11:e=Hg(null,e,i,t,n);break e;case 14:e=Vg(null,e,i,fi(i.type,t),n);break e}throw Error(fe(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:fi(i,r),op(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:fi(i,r),Gg(t,e,i,r,n);case 3:e:{if(Lx(e),t===null)throw Error(fe(387));i=e.pendingProps,s=e.memoizedState,r=s.element,rx(t,e),Yc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=_o(Error(fe(423)),e),e=Wg(t,e,i,n,r);break e}else if(i!==r){r=_o(Error(fe(424)),e),e=Wg(t,e,i,n,r);break e}else for(Dn=Ar(e.stateNode.containerInfo.firstChild),Un=e,_t=!0,gi=null,n=nx(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(vo(),i===r){e=tr(t,e,n);break e}vn(t,e,i,n)}e=e.child}return e;case 5:return sx(e),t===null&&tp(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Jh(i,r)?o=null:s!==null&&Jh(i,s)&&(e.flags|=32),Px(t,e),vn(t,e,o,n),e.child;case 6:return t===null&&tp(e),null;case 13:return Ix(t,e,n);case 4:return Gp(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=xo(e,null,i,n):vn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:fi(i,r),Hg(t,e,i,r,n);case 7:return vn(t,e,e.pendingProps,n),e.child;case 8:return vn(t,e,e.pendingProps.children,n),e.child;case 12:return vn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ft(Xc,i._currentValue),i._currentValue=o,s!==null)if(yi(s.value,o)){if(s.children===r.children&&!Tn.current){e=tr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Zi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),np(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(fe(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),np(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}vn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,po(e,n),r=ei(r),i=i(r),e.flags|=1,vn(t,e,i,n),e.child;case 14:return i=e.type,r=fi(i,e.pendingProps),r=fi(i.type,r),Vg(t,e,i,r,n);case 15:return Cx(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:fi(i,r),Rc(t,e),e.tag=1,An(i)?(t=!0,Gc(e)):t=!1,po(e,n),Ex(e,i,r),rp(e,i,r,n),ap(null,e,i,!0,t,n);case 19:return kx(t,e,n);case 22:return Rx(t,e,n)}throw Error(fe(156,e.tag))};function $x(t,e){return wv(t,e)}function XS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kn(t,e,n,i){return new XS(t,e,n,i)}function sf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function qS(t){if(typeof t=="function")return sf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Sp)return 11;if(t===Mp)return 14}return 2}function Lr(t,e){var n=t.alternate;return n===null?(n=Kn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ic(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")sf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Zs:return ps(n.children,r,s,e);case wp:o=8,r|=8;break;case Ch:return t=Kn(12,n,e,r|2),t.elementType=Ch,t.lanes=s,t;case Rh:return t=Kn(13,n,e,r),t.elementType=Rh,t.lanes=s,t;case Ph:return t=Kn(19,n,e,r),t.elementType=Ph,t.lanes=s,t;case sv:return pd(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case iv:o=10;break e;case rv:o=9;break e;case Sp:o=11;break e;case Mp:o=14;break e;case xr:o=16,i=null;break e}throw Error(fe(130,t==null?t:typeof t,""))}return e=Kn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function ps(t,e,n,i){return t=Kn(7,t,i,e),t.lanes=n,t}function pd(t,e,n,i){return t=Kn(22,t,i,e),t.elementType=sv,t.lanes=n,t.stateNode={isHidden:!1},t}function Eh(t,e,n){return t=Kn(6,t,null,e),t.lanes=n,t}function Th(t,e,n){return e=Kn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function YS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ch(0),this.expirationTimes=ch(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ch(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function of(t,e,n,i,r,s,o,a,l){return t=new YS(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Kn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vp(s),t}function $S(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Js,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Jx(t){if(!t)return kr;t=t._reactInternals;e:{if(_s(t)!==t||t.tag!==1)throw Error(fe(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(An(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(fe(171))}if(t.tag===1){var n=t.type;if(An(n))return Jv(t,n,e)}return e}function Zx(t,e,n,i,r,s,o,a,l){return t=of(n,i,!0,t,r,s,o,a,l),t.context=Jx(null),n=t.current,i=xn(),r=Pr(n),s=Zi(i,r),s.callback=e??null,Cr(n,s,r),t.current.lanes=r,al(t,r,i),Cn(t,i),t}function fd(t,e,n,i){var r=e.current,s=xn(),o=Pr(r);return n=Jx(n),e.context===null?e.context=n:e.pendingContext=n,e=Zi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Cr(r,e,o),t!==null&&(xi(t,r,o,s),Tc(t,r,o)),o}function nd(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function ev(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function af(t,e){ev(t,e),(t=t.alternate)&&ev(t,e)}function JS(){return null}var Kx=typeof reportError=="function"?reportError:function(t){console.error(t)};function lf(t){this._internalRoot=t}md.prototype.render=lf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(fe(409));fd(t,e,null,null)};md.prototype.unmount=lf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;xs(function(){fd(null,t,null,null)}),e[Qi]=null}};function md(t){this._internalRoot=t}md.prototype.unstable_scheduleHydration=function(t){if(t){var e=Rv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<_r.length&&e!==0&&e<_r[n].priority;n++);_r.splice(n,0,t),n===0&&Lv(t)}};function cf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function gd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function tv(){}function ZS(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=nd(o);s.call(c)}}var o=Zx(e,i,t,0,null,!1,!1,"",tv);return t._reactRootContainer=o,t[Qi]=o.current,Ka(t.nodeType===8?t.parentNode:t),xs(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=nd(l);a.call(c)}}var l=of(t,0,!1,null,null,!1,!1,"",tv);return t._reactRootContainer=l,t[Qi]=l.current,Ka(t.nodeType===8?t.parentNode:t),xs(function(){fd(e,l,n,i)}),l}function vd(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=nd(o);a.call(l)}}fd(e,o,t,r)}else o=ZS(n,e,t,r,i);return nd(o)}Av=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ka(e.pendingLanes);n!==0&&(Ap(e,n|1),Cn(e,Lt()),!(it&6)&&(bo=Lt()+500,Ur()))}break;case 13:xs(function(){var i=er(t,1);if(i!==null){var r=xn();xi(i,t,1,r)}}),af(t,1)}};Cp=function(t){if(t.tag===13){var e=er(t,134217728);if(e!==null){var n=xn();xi(e,t,134217728,n)}af(t,134217728)}};Cv=function(t){if(t.tag===13){var e=Pr(t),n=er(t,e);if(n!==null){var i=xn();xi(n,t,e,i)}af(t,e)}};Rv=function(){return at};Pv=function(t,e){var n=at;try{return at=t,e()}finally{at=n}};Bh=function(t,e,n){switch(e){case"input":if(kh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=ad(i);if(!r)throw Error(fe(90));av(i),kh(i,r)}}}break;case"textarea":cv(t,n);break;case"select":e=n.value,e!=null&&lo(t,!!n.multiple,e,!1)}};gv=tf;vv=xs;var KS={usingClientEntryPoint:!1,Events:[cl,to,ad,fv,mv,tf]},Ra={findFiberByHostInstance:cs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},QS={bundleType:Ra.bundleType,version:Ra.version,rendererPackageName:Ra.rendererPackageName,rendererConfig:Ra.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:nr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=_v(t),t===null?null:t.stateNode},findFiberByHostInstance:Ra.findFiberByHostInstance||JS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"&&(Pa=__REACT_DEVTOOLS_GLOBAL_HOOK__,!Pa.isDisabled&&Pa.supportsFiber))try{id=Pa.inject(QS),Oi=Pa}catch{}var Pa;zn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=KS;zn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!cf(e))throw Error(fe(200));return $S(t,e,null,n)};zn.createRoot=function(t,e){if(!cf(t))throw Error(fe(299));var n=!1,i="",r=Kx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=of(t,1,!1,null,null,n,!1,i,r),t[Qi]=e.current,Ka(t.nodeType===8?t.parentNode:t),new lf(e)};zn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(fe(188)):(t=Object.keys(t).join(","),Error(fe(268,t)));return t=_v(e),t=t===null?null:t.stateNode,t};zn.flushSync=function(t){return xs(t)};zn.hydrate=function(t,e,n){if(!gd(e))throw Error(fe(200));return vd(null,t,e,!0,n)};zn.hydrateRoot=function(t,e,n){if(!cf(t))throw Error(fe(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Kx;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Zx(e,null,t,1,n??null,r,!1,s,o),t[Qi]=e.current,Ka(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new md(e)};zn.render=function(t,e,n){if(!gd(e))throw Error(fe(200));return vd(null,t,e,!1,n)};zn.unmountComponentAtNode=function(t){if(!gd(t))throw Error(fe(40));return t._reactRootContainer?(xs(function(){vd(null,null,t,!1,function(){t._reactRootContainer=null,t[Qi]=null})}),!0):!1};zn.unstable_batchedUpdates=tf;zn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!gd(n))throw Error(fe(200));if(t==null||t._reactInternals===void 0)throw Error(fe(38));return vd(t,e,n,!1,i)};zn.version="18.3.1-next-f1338f8080-20240426"});var ny=Xi((TL,ty)=>{"use strict";function ey(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ey)}catch(t){console.error(t)}}ey(),ty.exports=Qx()});var ry=Xi(df=>{"use strict";var iy=ny();df.createRoot=iy.createRoot,df.hydrateRoot=iy.hydrateRoot;var AL});var ab=Xi(Nu=>{"use strict";var uP=ss(),hP=Symbol.for("react.element"),pP=Symbol.for("react.fragment"),fP=Object.prototype.hasOwnProperty,mP=uP.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,gP={key:!0,ref:!0,__self:!0,__source:!0};function ob(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)fP.call(e,i)&&!gP.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:hP,type:t,key:s,ref:o,props:r,_owner:mP.current}}Nu.Fragment=pP;Nu.jsx=ob;Nu.jsxs=ob});var jn=Xi((MI,lb)=>{"use strict";lb.exports=ab()});var Ab=en(ry());var Wt=en(ss());var zm="160";var e2=0,sy=1,t2=2;var N1=1,n2=2,lr=3,Yr=0,Jt=1,mn=2;var Wr=0,Wo=1,oy=2,ay=3,ly=4,i2=5,Ts=100,r2=101,s2=102,cy=103,dy=104,o2=200,a2=201,l2=202,c2=203,Xf=204,qf=205,d2=206,u2=207,h2=208,p2=209,f2=210,m2=211,g2=212,v2=213,x2=214,y2=0,_2=1,b2=2,Wd=3,w2=4,S2=5,M2=6,E2=7,D1=0,T2=1,A2=2,jr=0,C2=1,R2=2,P2=3,Bm=4,L2=5,I2=6;var U1=300,qo=301,Yo=302,Yf=303,$f=304,fu=306,Jf=1e3,Si=1001,Zf=1002,bn=1003,uy=1004;var uf=1005;var ii=1006,k2=1007;var _l=1008;var Xr=1009,N2=1010,D2=1011,Hm=1012,O1=1013,Vr=1014,Gr=1015,bl=1016,F1=1017,z1=1018,Cs=1020,U2=1021,Mi=1023,O2=1024,F2=1025,Rs=1026,$o=1027,z2=1028,B1=1029,B2=1030,H1=1031,V1=1033,hf=33776,pf=33777,ff=33778,mf=33779,hy=35840,py=35841,fy=35842,my=35843,G1=36196,gy=37492,vy=37496,xy=37808,yy=37809,_y=37810,by=37811,wy=37812,Sy=37813,My=37814,Ey=37815,Ty=37816,Ay=37817,Cy=37818,Ry=37819,Py=37820,Ly=37821,gf=36492,Iy=36494,ky=36495,H2=36283,Ny=36284,Dy=36285,Uy=36286;var jd=2300,Xd=2301,vf=2302,Oy=2400,Fy=2401,zy=2402;var W1=3e3,Ps=3001,V2=3200,G2=3201,j1=0,W2=1,ri="",ot="srgb",ur="srgb-linear",Vm="display-p3",mu="display-p3-linear",qd="linear",xt="srgb",Yd="rec709",$d="p3";var Mo=7680;var By=519,j2=512,X2=513,q2=514,X1=515,Y2=516,$2=517,J2=518,Z2=519,Hy=35044;var Vy="300 es",Kf=1035,dr=2e3,Jd=2001,$r=class{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;let r=this._listeners[e];if(r!==void 0){let s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var xf=Math.PI/180,Qf=180/Math.PI;function ta(){let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(pn[t&255]+pn[t>>8&255]+pn[t>>16&255]+pn[t>>24&255]+"-"+pn[e&255]+pn[e>>8&255]+"-"+pn[e>>16&15|64]+pn[e>>24&255]+"-"+pn[n&63|128]+pn[n>>8&255]+"-"+pn[n>>16&255]+pn[n>>24&255]+pn[i&255]+pn[i>>8&255]+pn[i>>16&255]+pn[i>>24&255]).toLowerCase()}function Yt(t,e,n){return Math.max(e,Math.min(n,t))}function K2(t,e){return(t%e+e)%e}function yf(t,e,n){return(1-n)*t+n*e}function Gy(t){return(t&t-1)===0&&t!==0}function em(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function ul(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Rn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}var xe=class t{constructor(e=0,n=0){t.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(e)/n;return Math.acos(Yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){let i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Qe=class t{constructor(e,n,i,r,s,o,a,l,c){t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){let d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],d=i[4],h=i[7],p=i[2],f=i[5],g=i[8],y=r[0],m=r[3],u=r[6],x=r[1],v=r[4],_=r[7],E=r[2],M=r[5],T=r[8];return s[0]=o*y+a*x+l*E,s[3]=o*m+a*v+l*M,s[6]=o*u+a*_+l*T,s[1]=c*y+d*x+h*E,s[4]=c*m+d*v+h*M,s[7]=c*u+d*_+h*T,s[2]=p*y+f*x+g*E,s[5]=p*m+f*v+g*M,s[8]=p*u+f*_+g*T,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return n*o*d-n*a*c-i*s*d+i*a*l+r*s*c-r*o*l}invert(){let e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],h=d*o-a*c,p=a*l-d*s,f=c*s-o*l,g=n*h+i*p+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=h*y,e[1]=(r*c-d*i)*y,e[2]=(a*i-r*o)*y,e[3]=p*y,e[4]=(d*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=f*y,e[7]=(i*l-c*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e,n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(_f.makeScale(e,n)),this}rotate(e){return this.premultiply(_f.makeRotation(-e)),this}translate(e,n){return this.premultiply(_f.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){let n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},_f=new Qe;function q1(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function wl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Q2(){let t=wl("canvas");return t.style.display="block",t}var Wy={};function gl(t){t in Wy||(Wy[t]=!0,console.warn(t))}var jy=new Qe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Xy=new Qe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),xd={[ur]:{transfer:qd,primaries:Yd,toReference:t=>t,fromReference:t=>t},[ot]:{transfer:xt,primaries:Yd,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[mu]:{transfer:qd,primaries:$d,toReference:t=>t.applyMatrix3(Xy),fromReference:t=>t.applyMatrix3(jy)},[Vm]:{transfer:xt,primaries:$d,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Xy),fromReference:t=>t.applyMatrix3(jy).convertLinearToSRGB()}},eM=new Set([ur,mu]),ut={enabled:!0,_workingColorSpace:ur,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!eM.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;let i=xd[e].toReference,r=xd[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return xd[t].primaries},getTransfer:function(t){return t===ri?qd:xd[t].transfer}};function jo(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function bf(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}var Eo,Zd=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Eo===void 0&&(Eo=wl("canvas")),Eo.width=e.width,Eo.height=e.height;let i=Eo.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Eo}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let n=wl("canvas");n.width=e.width,n.height=e.height;let i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=jo(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){let n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(jo(n[i]/255)*255):n[i]=jo(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},tM=0,Kd=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:tM++}),this.uuid=ta(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(wf(r[o].image)):s.push(wf(r[o]))}else s=wf(r);i.url=s}return n||(e.images[this.uuid]=i),i}};function wf(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Zd.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var nM=0,Vn=class t extends $r{constructor(e=t.DEFAULT_IMAGE,n=t.DEFAULT_MAPPING,i=Si,r=Si,s=ii,o=_l,a=Mi,l=Xr,c=t.DEFAULT_ANISOTROPY,d=ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nM++}),this.uuid=ta(),this.name="",this.source=new Kd(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new xe(0,0),this.repeat=new xe(1,1),this.center=new xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(gl("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===Ps?ot:ri),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==U1)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Jf:e.x=e.x-Math.floor(e.x);break;case Si:e.x=e.x<0?0:1;break;case Zf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Jf:e.y=e.y-Math.floor(e.y);break;case Si:e.y=e.y<0?0:1;break;case Zf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return gl("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ot?Ps:W1}set encoding(e){gl("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Ps?ot:ri}};Vn.DEFAULT_IMAGE=null;Vn.DEFAULT_MAPPING=U1;Vn.DEFAULT_ANISOTROPY=1;var $t=class t{constructor(e=0,n=0,i=0,r=1){t.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s,l=e.elements,c=l[0],d=l[4],h=l[8],p=l[1],f=l[5],g=l[9],y=l[2],m=l[6],u=l[10];if(Math.abs(d-p)<.01&&Math.abs(h-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+p)<.1&&Math.abs(h+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let v=(c+1)/2,_=(f+1)/2,E=(u+1)/2,M=(d+p)/4,T=(h+y)/4,R=(g+m)/4;return v>_&&v>E?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=M/i,s=T/i):_>E?_<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(_),i=M/r,s=R/r):E<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),i=T/s,r=R/s),this.set(i,r,s,n),this}let x=Math.sqrt((m-g)*(m-g)+(h-y)*(h-y)+(p-d)*(p-d));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(h-y)/x,this.z=(p-d)/x,this.w=Math.acos((c+f+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},tm=class extends $r{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new $t(0,0,e,n),this.scissorTest=!1,this.viewport=new $t(0,0,e,n);let r={width:e,height:n,depth:1};i.encoding!==void 0&&(gl("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Ps?ot:ri),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ii,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Vn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let n=Object.assign({},e.texture.image);return this.texture.source=new Kd(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},hr=class extends tm{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}},Qd=class extends Vn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=bn,this.minFilter=bn,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var nm=class extends Vn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=bn,this.minFilter=bn,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Jr=class{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],d=i[r+2],h=i[r+3],p=s[o+0],f=s[o+1],g=s[o+2],y=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=d,e[n+3]=h;return}if(a===1){e[n+0]=p,e[n+1]=f,e[n+2]=g,e[n+3]=y;return}if(h!==y||l!==p||c!==f||d!==g){let m=1-a,u=l*p+c*f+d*g+h*y,x=u>=0?1:-1,v=1-u*u;if(v>Number.EPSILON){let E=Math.sqrt(v),M=Math.atan2(E,u*x);m=Math.sin(m*M)/E,a=Math.sin(a*M)/E}let _=a*x;if(l=l*m+p*_,c=c*m+f*_,d=d*m+g*_,h=h*m+y*_,m===1-a){let E=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=E,c*=E,d*=E,h*=E}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){let a=i[r],l=i[r+1],c=i[r+2],d=i[r+3],h=s[o],p=s[o+1],f=s[o+2],g=s[o+3];return e[n]=a*g+d*h+l*f-c*p,e[n+1]=l*g+d*p+c*h-a*f,e[n+2]=c*g+d*f+a*p-l*h,e[n+3]=d*g-a*h-l*p-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),d=a(r/2),h=a(s/2),p=l(i/2),f=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=p*d*h+c*f*g,this._y=c*f*h-p*d*g,this._z=c*d*g+p*f*h,this._w=c*d*h-p*f*g;break;case"YXZ":this._x=p*d*h+c*f*g,this._y=c*f*h-p*d*g,this._z=c*d*g-p*f*h,this._w=c*d*h+p*f*g;break;case"ZXY":this._x=p*d*h-c*f*g,this._y=c*f*h+p*d*g,this._z=c*d*g+p*f*h,this._w=c*d*h-p*f*g;break;case"ZYX":this._x=p*d*h-c*f*g,this._y=c*f*h+p*d*g,this._z=c*d*g-p*f*h,this._w=c*d*h+p*f*g;break;case"YZX":this._x=p*d*h+c*f*g,this._y=c*f*h+p*d*g,this._z=c*d*g-p*f*h,this._w=c*d*h-p*f*g;break;case"XZY":this._x=p*d*h-c*f*g,this._y=c*f*h-p*d*g,this._z=c*d*g+p*f*h,this._w=c*d*h+p*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){let i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],d=n[6],h=n[10],p=i+a+h;if(p>0){let f=.5/Math.sqrt(p+1);this._w=.25/f,this._x=(d-l)*f,this._y=(s-c)*f,this._z=(o-r)*f}else if(i>a&&i>h){let f=2*Math.sqrt(1+i-a-h);this._w=(d-l)/f,this._x=.25*f,this._y=(r+o)/f,this._z=(s+c)/f}else if(a>h){let f=2*Math.sqrt(1+a-i-h);this._w=(s-c)/f,this._x=(r+o)/f,this._y=.25*f,this._z=(l+d)/f}else{let f=2*Math.sqrt(1+h-i-a);this._w=(o-r)/f,this._x=(s+c)/f,this._y=(l+d)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Yt(this.dot(e),-1,1)))}rotateTowards(e,n){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){let i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+o*a+r*c-s*l,this._y=r*d+o*l+s*a-i*c,this._z=s*d+o*c+i*l-r*a,this._w=o*d-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);let i=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-n;return this._w=f*o+n*this._w,this._x=f*i+n*this._x,this._y=f*r+n*this._y,this._z=f*s+n*this._z,this.normalize(),this}let c=Math.sqrt(l),d=Math.atan2(c,a),h=Math.sin((1-n)*d)/c,p=Math.sin(n*d)/c;return this._w=o*h+this._w*p,this._x=i*h+this._x*p,this._y=r*h+this._y*p,this._z=s*h+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){let e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},z=class t{constructor(e=0,n=0,i=0){t.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(qy.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(qy.setFromAxisAngle(e,n))}applyMatrix3(e){let n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),d=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*c+o*h-a*d,this.y=i+l*d+a*c-s*h,this.z=r+l*h+s*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){let i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){let n=e.lengthSq();if(n===0)return this.set(0,0,0);let i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Sf.copy(this).projectOnVector(e),this.sub(Sf)}reflect(e){return this.sub(Sf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(e)/n;return Math.acos(Yt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){let r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){let n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){let n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Sf=new z,qy=new Jr,Ls=class{constructor(e=new z(1/0,1/0,1/0),n=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(_i.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(_i.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){let i=_i.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,_i):_i.fromBufferAttribute(s,o),_i.applyMatrix4(e.matrixWorld),this.expandByPoint(_i);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),yd.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),yd.copy(i.boundingBox)),yd.applyMatrix4(e.matrixWorld),this.union(yd)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,_i),_i.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(hl),_d.subVectors(this.max,hl),To.subVectors(e.a,hl),Ao.subVectors(e.b,hl),Co.subVectors(e.c,hl),Or.subVectors(Ao,To),Fr.subVectors(Co,Ao),bs.subVectors(To,Co);let n=[0,-Or.z,Or.y,0,-Fr.z,Fr.y,0,-bs.z,bs.y,Or.z,0,-Or.x,Fr.z,0,-Fr.x,bs.z,0,-bs.x,-Or.y,Or.x,0,-Fr.y,Fr.x,0,-bs.y,bs.x,0];return!Mf(n,To,Ao,Co,_d)||(n=[1,0,0,0,1,0,0,0,1],!Mf(n,To,Ao,Co,_d))?!1:(bd.crossVectors(Or,Fr),n=[bd.x,bd.y,bd.z],Mf(n,To,Ao,Co,_d))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_i).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_i).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ir[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ir[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ir[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ir[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ir[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ir[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ir[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ir[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ir),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},ir=[new z,new z,new z,new z,new z,new z,new z,new z],_i=new z,yd=new Ls,To=new z,Ao=new z,Co=new z,Or=new z,Fr=new z,bs=new z,hl=new z,_d=new z,bd=new z,ws=new z;function Mf(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){ws.fromArray(t,s);let a=r.x*Math.abs(ws.x)+r.y*Math.abs(ws.y)+r.z*Math.abs(ws.z),l=e.dot(ws),c=n.dot(ws),d=i.dot(ws);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}var iM=new Ls,pl=new z,Ef=new z,Sl=class{constructor(e=new z,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){let i=this.center;n!==void 0?i.copy(n):iM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){let i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;pl.subVectors(e,this.center);let n=pl.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(pl,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ef.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(pl.copy(e.center).add(Ef)),this.expandByPoint(pl.copy(e.center).sub(Ef))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},rr=new z,Tf=new z,wd=new z,zr=new z,Af=new z,Sd=new z,Cf=new z,im=class{constructor(e=new z,n=new z(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,rr)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let n=rr.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(rr.copy(this.origin).addScaledVector(this.direction,n),rr.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Tf.copy(e).add(n).multiplyScalar(.5),wd.copy(n).sub(e).normalize(),zr.copy(this.origin).sub(Tf);let s=e.distanceTo(n)*.5,o=-this.direction.dot(wd),a=zr.dot(this.direction),l=-zr.dot(wd),c=zr.lengthSq(),d=Math.abs(1-o*o),h,p,f,g;if(d>0)if(h=o*l-a,p=o*a-l,g=s*d,h>=0)if(p>=-g)if(p<=g){let y=1/d;h*=y,p*=y,f=h*(h+o*p+2*a)+p*(o*h+p+2*l)+c}else p=s,h=Math.max(0,-(o*p+a)),f=-h*h+p*(p+2*l)+c;else p=-s,h=Math.max(0,-(o*p+a)),f=-h*h+p*(p+2*l)+c;else p<=-g?(h=Math.max(0,-(-o*s+a)),p=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+p*(p+2*l)+c):p<=g?(h=0,p=Math.min(Math.max(-s,-l),s),f=p*(p+2*l)+c):(h=Math.max(0,-(o*s+a)),p=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+p*(p+2*l)+c);else p=o>0?-s:s,h=Math.max(0,-(o*p+a)),f=-h*h+p*(p+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Tf).addScaledVector(wd,p),f}intersectSphere(e,n){rr.subVectors(e.center,this.origin);let i=rr.dot(this.direction),r=rr.dot(rr)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){let i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){let n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l,c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,p=this.origin;return c>=0?(i=(e.min.x-p.x)*c,r=(e.max.x-p.x)*c):(i=(e.max.x-p.x)*c,r=(e.min.x-p.x)*c),d>=0?(s=(e.min.y-p.y)*d,o=(e.max.y-p.y)*d):(s=(e.max.y-p.y)*d,o=(e.min.y-p.y)*d),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-p.z)*h,l=(e.max.z-p.z)*h):(a=(e.max.z-p.z)*h,l=(e.min.z-p.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,rr)!==null}intersectTriangle(e,n,i,r,s){Af.subVectors(n,e),Sd.subVectors(i,e),Cf.crossVectors(Af,Sd);let o=this.direction.dot(Cf),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;zr.subVectors(this.origin,e);let l=a*this.direction.dot(Sd.crossVectors(zr,Sd));if(l<0)return null;let c=a*this.direction.dot(Af.cross(zr));if(c<0||l+c>o)return null;let d=-a*zr.dot(Cf);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},zt=class t{constructor(e,n,i,r,s,o,a,l,c,d,h,p,f,g,y,m){t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,d,h,p,f,g,y,m)}set(e,n,i,r,s,o,a,l,c,d,h,p,f,g,y,m){let u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=d,u[10]=h,u[14]=p,u[3]=f,u[7]=g,u[11]=y,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new t().fromArray(this.elements)}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){let n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){let n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){let n=this.elements,i=e.elements,r=1/Ro.setFromMatrixColumn(e,0).length(),s=1/Ro.setFromMatrixColumn(e,1).length(),o=1/Ro.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){let n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){let p=o*d,f=o*h,g=a*d,y=a*h;n[0]=l*d,n[4]=-l*h,n[8]=c,n[1]=f+g*c,n[5]=p-y*c,n[9]=-a*l,n[2]=y-p*c,n[6]=g+f*c,n[10]=o*l}else if(e.order==="YXZ"){let p=l*d,f=l*h,g=c*d,y=c*h;n[0]=p+y*a,n[4]=g*a-f,n[8]=o*c,n[1]=o*h,n[5]=o*d,n[9]=-a,n[2]=f*a-g,n[6]=y+p*a,n[10]=o*l}else if(e.order==="ZXY"){let p=l*d,f=l*h,g=c*d,y=c*h;n[0]=p-y*a,n[4]=-o*h,n[8]=g+f*a,n[1]=f+g*a,n[5]=o*d,n[9]=y-p*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){let p=o*d,f=o*h,g=a*d,y=a*h;n[0]=l*d,n[4]=g*c-f,n[8]=p*c+y,n[1]=l*h,n[5]=y*c+p,n[9]=f*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){let p=o*l,f=o*c,g=a*l,y=a*c;n[0]=l*d,n[4]=y-p*h,n[8]=g*h+f,n[1]=h,n[5]=o*d,n[9]=-a*d,n[2]=-c*d,n[6]=f*h+g,n[10]=p-y*h}else if(e.order==="XZY"){let p=o*l,f=o*c,g=a*l,y=a*c;n[0]=l*d,n[4]=-h,n[8]=c*d,n[1]=p*h+y,n[5]=o*d,n[9]=f*h-g,n[2]=g*h-f,n[6]=a*d,n[10]=y*h+p}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(rM,e,sM)}lookAt(e,n,i){let r=this.elements;return Bn.subVectors(e,n),Bn.lengthSq()===0&&(Bn.z=1),Bn.normalize(),Br.crossVectors(i,Bn),Br.lengthSq()===0&&(Math.abs(i.z)===1?Bn.x+=1e-4:Bn.z+=1e-4,Bn.normalize(),Br.crossVectors(i,Bn)),Br.normalize(),Md.crossVectors(Bn,Br),r[0]=Br.x,r[4]=Md.x,r[8]=Bn.x,r[1]=Br.y,r[5]=Md.y,r[9]=Bn.y,r[2]=Br.z,r[6]=Md.z,r[10]=Bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],d=i[1],h=i[5],p=i[9],f=i[13],g=i[2],y=i[6],m=i[10],u=i[14],x=i[3],v=i[7],_=i[11],E=i[15],M=r[0],T=r[4],R=r[8],S=r[12],A=r[1],P=r[5],W=r[9],X=r[13],L=r[2],D=r[6],O=r[10],F=r[14],G=r[3],ie=r[7],re=r[11],J=r[15];return s[0]=o*M+a*A+l*L+c*G,s[4]=o*T+a*P+l*D+c*ie,s[8]=o*R+a*W+l*O+c*re,s[12]=o*S+a*X+l*F+c*J,s[1]=d*M+h*A+p*L+f*G,s[5]=d*T+h*P+p*D+f*ie,s[9]=d*R+h*W+p*O+f*re,s[13]=d*S+h*X+p*F+f*J,s[2]=g*M+y*A+m*L+u*G,s[6]=g*T+y*P+m*D+u*ie,s[10]=g*R+y*W+m*O+u*re,s[14]=g*S+y*X+m*F+u*J,s[3]=x*M+v*A+_*L+E*G,s[7]=x*T+v*P+_*D+E*ie,s[11]=x*R+v*W+_*O+E*re,s[15]=x*S+v*X+_*F+E*J,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],h=e[6],p=e[10],f=e[14],g=e[3],y=e[7],m=e[11],u=e[15];return g*(+s*l*h-r*c*h-s*a*p+i*c*p+r*a*f-i*l*f)+y*(+n*l*f-n*c*p+s*o*p-r*o*f+r*c*d-s*l*d)+m*(+n*c*h-n*a*f-s*o*h+i*o*f+s*a*d-i*c*d)+u*(-r*a*d-n*l*h+n*a*p+r*o*h-i*o*p+i*l*d)}transpose(){let e=this.elements,n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){let e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],h=e[9],p=e[10],f=e[11],g=e[12],y=e[13],m=e[14],u=e[15],x=h*m*c-y*p*c+y*l*f-a*m*f-h*l*u+a*p*u,v=g*p*c-d*m*c-g*l*f+o*m*f+d*l*u-o*p*u,_=d*y*c-g*h*c+g*a*f-o*y*f-d*a*u+o*h*u,E=g*h*l-d*y*l-g*a*p+o*y*p+d*a*m-o*h*m,M=n*x+i*v+r*_+s*E;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/M;return e[0]=x*T,e[1]=(y*p*s-h*m*s-y*r*f+i*m*f+h*r*u-i*p*u)*T,e[2]=(a*m*s-y*l*s+y*r*c-i*m*c-a*r*u+i*l*u)*T,e[3]=(h*l*s-a*p*s-h*r*c+i*p*c+a*r*f-i*l*f)*T,e[4]=v*T,e[5]=(d*m*s-g*p*s+g*r*f-n*m*f-d*r*u+n*p*u)*T,e[6]=(g*l*s-o*m*s-g*r*c+n*m*c+o*r*u-n*l*u)*T,e[7]=(o*p*s-d*l*s+d*r*c-n*p*c-o*r*f+n*l*f)*T,e[8]=_*T,e[9]=(g*h*s-d*y*s-g*i*f+n*y*f+d*i*u-n*h*u)*T,e[10]=(o*y*s-g*a*s+g*i*c-n*y*c-o*i*u+n*a*u)*T,e[11]=(d*a*s-o*h*s-d*i*c+n*h*c+o*i*f-n*a*f)*T,e[12]=E*T,e[13]=(d*y*r-g*h*r+g*i*p-n*y*p-d*i*m+n*h*m)*T,e[14]=(g*a*r-o*y*r-g*i*l+n*y*l+o*i*m-n*a*m)*T,e[15]=(o*h*r-d*a*r+d*i*l-n*h*l-o*i*p+n*a*p)*T,this}scale(e){let n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){let n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){let i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,d=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,d*a+i,d*l-r*o,0,c*l-r*a,d*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){let r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,d=o+o,h=a+a,p=s*c,f=s*d,g=s*h,y=o*d,m=o*h,u=a*h,x=l*c,v=l*d,_=l*h,E=i.x,M=i.y,T=i.z;return r[0]=(1-(y+u))*E,r[1]=(f+_)*E,r[2]=(g-v)*E,r[3]=0,r[4]=(f-_)*M,r[5]=(1-(p+u))*M,r[6]=(m+x)*M,r[7]=0,r[8]=(g+v)*T,r[9]=(m-x)*T,r[10]=(1-(p+y))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){let r=this.elements,s=Ro.set(r[0],r[1],r[2]).length(),o=Ro.set(r[4],r[5],r[6]).length(),a=Ro.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],bi.copy(this);let c=1/s,d=1/o,h=1/a;return bi.elements[0]*=c,bi.elements[1]*=c,bi.elements[2]*=c,bi.elements[4]*=d,bi.elements[5]*=d,bi.elements[6]*=d,bi.elements[8]*=h,bi.elements[9]*=h,bi.elements[10]*=h,n.setFromRotationMatrix(bi),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=dr){let l=this.elements,c=2*s/(n-e),d=2*s/(i-r),h=(n+e)/(n-e),p=(i+r)/(i-r),f,g;if(a===dr)f=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Jd)f=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=dr){let l=this.elements,c=1/(n-e),d=1/(i-r),h=1/(o-s),p=(n+e)*c,f=(i+r)*d,g,y;if(a===dr)g=(o+s)*h,y=-2*h;else if(a===Jd)g=s*h,y=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}},Ro=new z,bi=new zt,rM=new z(0,0,0),sM=new z(1,1,1),Br=new z,Md=new z,Bn=new z,Yy=new zt,$y=new Jr,eu=class t{constructor(e=0,n=0,i=0,r=t.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){let r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],d=r[9],h=r[2],p=r[6],f=r[10];switch(n){case"XYZ":this._y=Math.asin(Yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Yt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Yt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Yt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(p,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Yy.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yy,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return $y.setFromEuler(this),this.setFromQuaternion($y,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};eu.DEFAULT_ORDER="XYZ";var tu=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},oM=0,Jy=new z,Po=new Jr,sr=new zt,Ed=new z,fl=new z,aM=new z,lM=new Jr,Zy=new z(1,0,0),Ky=new z(0,1,0),Qy=new z(0,0,1),cM={type:"added"},dM={type:"removed"},Pn=class t extends $r{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:oM++}),this.uuid=ta(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=t.DEFAULT_UP.clone();let e=new z,n=new eu,i=new Jr,r=new z(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new zt},normalMatrix:{value:new Qe}}),this.matrix=new zt,this.matrixWorld=new zt,this.matrixAutoUpdate=t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Po.setFromAxisAngle(e,n),this.quaternion.multiply(Po),this}rotateOnWorldAxis(e,n){return Po.setFromAxisAngle(e,n),this.quaternion.premultiply(Po),this}rotateX(e){return this.rotateOnAxis(Zy,e)}rotateY(e){return this.rotateOnAxis(Ky,e)}rotateZ(e){return this.rotateOnAxis(Qy,e)}translateOnAxis(e,n){return Jy.copy(e).applyQuaternion(this.quaternion),this.position.add(Jy.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Zy,e)}translateY(e){return this.translateOnAxis(Ky,e)}translateZ(e){return this.translateOnAxis(Qy,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(sr.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ed.copy(e):Ed.set(e,n,i);let r=this.parent;this.updateWorldMatrix(!0,!1),fl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?sr.lookAt(fl,Ed,this.up):sr.lookAt(Ed,fl,this.up),this.quaternion.setFromRotationMatrix(sr),r&&(sr.extractRotation(r.matrixWorld),Po.setFromRotationMatrix(sr),this.quaternion.premultiply(Po.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(cM)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(dM)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),sr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),sr.multiply(e.parent.matrixWorld)),e.applyMatrix4(sr),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){let o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fl,e,aM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fl,lM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);let n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){let n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let n=this.children;for(let i=0,r=n.length;i<r;i++){let s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){let i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++){let a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){let h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),h=o(e.shapes),p=o(e.skeletons),f=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),p.length>0&&(i.skeletons=p),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){let l=[];for(let c in a){let d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}};Pn.DEFAULT_UP=new z(0,1,0);Pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var wi=new z,or=new z,Rf=new z,ar=new z,Lo=new z,Io=new z,e1=new z,Pf=new z,Lf=new z,If=new z,Td=!1,Bo=class t{constructor(e=new z,n=new z,i=new z){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),wi.subVectors(e,n),r.cross(wi);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){wi.subVectors(r,n),or.subVectors(i,n),Rf.subVectors(e,n);let o=wi.dot(wi),a=wi.dot(or),l=wi.dot(Rf),c=or.dot(or),d=or.dot(Rf),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;let p=1/h,f=(c*l-a*d)*p,g=(o*d-a*l)*p;return s.set(1-f-g,g,f)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ar)===null?!1:ar.x>=0&&ar.y>=0&&ar.x+ar.y<=1}static getUV(e,n,i,r,s,o,a,l){return Td===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Td=!0),this.getInterpolation(e,n,i,r,s,o,a,l)}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,ar)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ar.x),l.addScaledVector(o,ar.y),l.addScaledVector(a,ar.z),l)}static isFrontFacing(e,n,i,r){return wi.subVectors(i,n),or.subVectors(e,n),wi.cross(or).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wi.subVectors(this.c,this.b),or.subVectors(this.a,this.b),wi.cross(or).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return t.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return Td===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Td=!0),t.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return t.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){let i=this.a,r=this.b,s=this.c,o,a;Lo.subVectors(r,i),Io.subVectors(s,i),Pf.subVectors(e,i);let l=Lo.dot(Pf),c=Io.dot(Pf);if(l<=0&&c<=0)return n.copy(i);Lf.subVectors(e,r);let d=Lo.dot(Lf),h=Io.dot(Lf);if(d>=0&&h<=d)return n.copy(r);let p=l*h-d*c;if(p<=0&&l>=0&&d<=0)return o=l/(l-d),n.copy(i).addScaledVector(Lo,o);If.subVectors(e,s);let f=Lo.dot(If),g=Io.dot(If);if(g>=0&&f<=g)return n.copy(s);let y=f*c-l*g;if(y<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(Io,a);let m=d*g-f*h;if(m<=0&&h-d>=0&&f-g>=0)return e1.subVectors(s,r),a=(h-d)/(h-d+(f-g)),n.copy(r).addScaledVector(e1,a);let u=1/(m+y+p);return o=y*u,a=p*u,n.copy(i).addScaledVector(Lo,o).addScaledVector(Io,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Y1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hr={h:0,s:0,l:0},Ad={h:0,s:0,l:0};function kf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}var Ge=class{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=ut.workingColorSpace){return this.r=e,this.g=n,this.b=i,ut.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=ut.workingColorSpace){if(e=K2(e,1),n=Yt(n,0,1),i=Yt(i,0,1),n===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=kf(o,s,e+1/3),this.g=kf(o,s,e),this.b=kf(o,s,e-1/3)}return ut.toWorkingColorSpace(this,r),this}setStyle(e,n=ot){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ot){let i=Y1[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=jo(e.r),this.g=jo(e.g),this.b=jo(e.b),this}copyLinearToSRGB(e){return this.r=bf(e.r),this.g=bf(e.g),this.b=bf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ot){return ut.fromWorkingColorSpace(fn.copy(this),e),Math.round(Yt(fn.r*255,0,255))*65536+Math.round(Yt(fn.g*255,0,255))*256+Math.round(Yt(fn.b*255,0,255))}getHexString(e=ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=ut.workingColorSpace){ut.fromWorkingColorSpace(fn.copy(this),n);let i=fn.r,r=fn.g,s=fn.b,o=Math.max(i,r,s),a=Math.min(i,r,s),l,c,d=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=d<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=ut.workingColorSpace){return ut.fromWorkingColorSpace(fn.copy(this),n),e.r=fn.r,e.g=fn.g,e.b=fn.b,e}getStyle(e=ot){ut.fromWorkingColorSpace(fn.copy(this),e);let n=fn.r,i=fn.g,r=fn.b;return e!==ot?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Hr),this.setHSL(Hr.h+e,Hr.s+n,Hr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Hr),e.getHSL(Ad);let i=yf(Hr.h,Ad.h,n),r=yf(Hr.s,Ad.s,n),s=yf(Hr.l,Ad.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},fn=new Ge;Ge.NAMES=Y1;var uM=0,Is=class extends $r{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uM++}),this.uuid=ta(),this.name="",this.type="Material",this.blending=Wo,this.side=Yr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xf,this.blendDst=qf,this.blendEquation=Ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=Wd,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=By,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Mo,this.stencilZFail=Mo,this.stencilZPass=Mo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let n in e){let i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}let r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){let n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Wo&&(i.blending=this.blending),this.side!==Yr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Xf&&(i.blendSrc=this.blendSrc),this.blendDst!==qf&&(i.blendDst=this.blendDst),this.blendEquation!==Ts&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Wd&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==By&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Mo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Mo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Mo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(n){let s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let n=e.clippingPlanes,i=null;if(n!==null){let r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},st=class extends Is{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=D1,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Nt=new z,Cd=new xe,Bt=class{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Hy,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Gr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Cd.fromBufferAttribute(this,n),Cd.applyMatrix3(e),this.setXY(n,Cd.x,Cd.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.applyMatrix3(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.applyMatrix4(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.applyNormalMatrix(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.transformDirection(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ul(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Rn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ul(n,this.array)),n}setX(e,n){return this.normalized&&(n=Rn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ul(n,this.array)),n}setY(e,n){return this.normalized&&(n=Rn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ul(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Rn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ul(n,this.array)),n}setW(e,n){return this.normalized&&(n=Rn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Rn(n,this.array),i=Rn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Rn(n,this.array),i=Rn(i,this.array),r=Rn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Rn(n,this.array),i=Rn(i,this.array),r=Rn(r,this.array),s=Rn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Hy&&(e.usage=this.usage),e}};var nu=class extends Bt{constructor(e,n,i){super(new Uint16Array(e),n,i)}};var iu=class extends Bt{constructor(e,n,i){super(new Uint32Array(e),n,i)}};var rt=class extends Bt{constructor(e,n,i){super(new Float32Array(e),n,i)}};var hM=0,ni=new zt,Nf=new Pn,ko=new z,Hn=new Ls,ml=new Ls,qt=new z,Ht=class t extends $r{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hM++}),this.uuid=ta(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(q1(e)?iu:nu)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Qe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ni.makeRotationFromQuaternion(e),this.applyMatrix4(ni),this}rotateX(e){return ni.makeRotationX(e),this.applyMatrix4(ni),this}rotateY(e){return ni.makeRotationY(e),this.applyMatrix4(ni),this}rotateZ(e){return ni.makeRotationZ(e),this.applyMatrix4(ni),this}translate(e,n,i){return ni.makeTranslation(e,n,i),this.applyMatrix4(ni),this}scale(e,n,i){return ni.makeScale(e,n,i),this.applyMatrix4(ni),this}lookAt(e){return Nf.lookAt(e),Nf.updateMatrix(),this.applyMatrix4(Nf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ko).negate(),this.translate(ko.x,ko.y,ko.z),this}setFromPoints(e){let n=[];for(let i=0,r=e.length;i<r;i++){let s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new rt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ls);let e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){let s=n[i];Hn.setFromBufferAttribute(s),this.morphTargetsRelative?(qt.addVectors(this.boundingBox.min,Hn.min),this.boundingBox.expandByPoint(qt),qt.addVectors(this.boundingBox.max,Hn.max),this.boundingBox.expandByPoint(qt)):(this.boundingBox.expandByPoint(Hn.min),this.boundingBox.expandByPoint(Hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sl);let e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new z,1/0);return}if(e){let i=this.boundingSphere.center;if(Hn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){let a=n[s];ml.setFromBufferAttribute(a),this.morphTargetsRelative?(qt.addVectors(Hn.min,ml.min),Hn.expandByPoint(qt),qt.addVectors(Hn.max,ml.max),Hn.expandByPoint(qt)):(Hn.expandByPoint(ml.min),Hn.expandByPoint(ml.max))}Hn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)qt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(qt));if(n)for(let s=0,o=n.length;s<o;s++){let a=n[s],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)qt.fromBufferAttribute(a,c),l&&(ko.fromBufferAttribute(e,c),qt.add(ko)),r=Math.max(r,i.distanceToSquared(qt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bt(new Float32Array(4*a),4));let l=this.getAttribute("tangent").array,c=[],d=[];for(let A=0;A<a;A++)c[A]=new z,d[A]=new z;let h=new z,p=new z,f=new z,g=new xe,y=new xe,m=new xe,u=new z,x=new z;function v(A,P,W){h.fromArray(r,A*3),p.fromArray(r,P*3),f.fromArray(r,W*3),g.fromArray(o,A*2),y.fromArray(o,P*2),m.fromArray(o,W*2),p.sub(h),f.sub(h),y.sub(g),m.sub(g);let X=1/(y.x*m.y-m.x*y.y);isFinite(X)&&(u.copy(p).multiplyScalar(m.y).addScaledVector(f,-y.y).multiplyScalar(X),x.copy(f).multiplyScalar(y.x).addScaledVector(p,-m.x).multiplyScalar(X),c[A].add(u),c[P].add(u),c[W].add(u),d[A].add(x),d[P].add(x),d[W].add(x))}let _=this.groups;_.length===0&&(_=[{start:0,count:i.length}]);for(let A=0,P=_.length;A<P;++A){let W=_[A],X=W.start,L=W.count;for(let D=X,O=X+L;D<O;D+=3)v(i[D+0],i[D+1],i[D+2])}let E=new z,M=new z,T=new z,R=new z;function S(A){T.fromArray(s,A*3),R.copy(T);let P=c[A];E.copy(P),E.sub(T.multiplyScalar(T.dot(P))).normalize(),M.crossVectors(R,P);let X=M.dot(d[A])<0?-1:1;l[A*4]=E.x,l[A*4+1]=E.y,l[A*4+2]=E.z,l[A*4+3]=X}for(let A=0,P=_.length;A<P;++A){let W=_[A],X=W.start,L=W.count;for(let D=X,O=X+L;D<O;D+=3)S(i[D+0]),S(i[D+1]),S(i[D+2])}}computeVertexNormals(){let e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Bt(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let p=0,f=i.count;p<f;p++)i.setXYZ(p,0,0,0);let r=new z,s=new z,o=new z,a=new z,l=new z,c=new z,d=new z,h=new z;if(e)for(let p=0,f=e.count;p<f;p+=3){let g=e.getX(p+0),y=e.getX(p+1),m=e.getX(p+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,m),d.subVectors(o,s),h.subVectors(r,s),d.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),a.add(d),l.add(d),c.add(d),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let p=0,f=n.count;p<f;p+=3)r.fromBufferAttribute(n,p+0),s.fromBufferAttribute(n,p+1),o.fromBufferAttribute(n,p+2),d.subVectors(o,s),h.subVectors(r,s),d.cross(h),i.setXYZ(p+0,d.x,d.y,d.z),i.setXYZ(p+1,d.x,d.y,d.z),i.setXYZ(p+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)qt.fromBufferAttribute(e,n),qt.normalize(),e.setXYZ(n,qt.x,qt.y,qt.z)}toNonIndexed(){function e(a,l){let c=a.array,d=a.itemSize,h=a.normalized,p=new c.constructor(l.length*d),f=0,g=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?f=l[y]*a.data.stride+a.offset:f=l[y]*d;for(let u=0;u<d;u++)p[g++]=c[f++]}return new Bt(p,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new t,i=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=e(l,i);n.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let d=0,h=c.length;d<h;d++){let p=c[d],f=e(p,i);l.push(f)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],d=[];for(let h=0,p=c.length;h<p;h++){let f=c[h];d.push(f.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(n));let r=e.attributes;for(let c in r){let d=r[c];this.setAttribute(c,d.clone(n))}let s=e.morphAttributes;for(let c in s){let d=[],h=s[c];for(let p=0,f=h.length;p<f;p++)d.push(h[p].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,d=o.length;c<d;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},t1=new zt,Ss=new im,Rd=new Sl,n1=new z,No=new z,Do=new z,Uo=new z,Df=new z,Pd=new z,Ld=new xe,Id=new xe,kd=new xe,i1=new z,r1=new z,s1=new z,Nd=new z,Dd=new z,Ne=class extends Pn{constructor(e=new Ht,n=new st){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){Pd.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let d=a[l],h=s[l];d!==0&&(Df.fromBufferAttribute(h,e),o?Pd.addScaledVector(Df,d):Pd.addScaledVector(Df.sub(n),d))}n.add(Pd)}return n}raycast(e,n){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Rd.copy(i.boundingSphere),Rd.applyMatrix4(s),Ss.copy(e.ray).recast(e.near),!(Rd.containsPoint(Ss.origin)===!1&&(Ss.intersectSphere(Rd,n1)===null||Ss.origin.distanceToSquared(n1)>(e.far-e.near)**2))&&(t1.copy(s).invert(),Ss.copy(e.ray).applyMatrix4(t1),!(i.boundingBox!==null&&Ss.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Ss)))}_computeIntersections(e,n,i){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,h=s.attributes.normal,p=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=p.length;g<y;g++){let m=p[g],u=o[m.materialIndex],x=Math.max(m.start,f.start),v=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let _=x,E=v;_<E;_+=3){let M=a.getX(_),T=a.getX(_+1),R=a.getX(_+2);r=Ud(this,u,e,i,c,d,h,M,T,R),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{let g=Math.max(0,f.start),y=Math.min(a.count,f.start+f.count);for(let m=g,u=y;m<u;m+=3){let x=a.getX(m),v=a.getX(m+1),_=a.getX(m+2);r=Ud(this,o,e,i,c,d,h,x,v,_),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,y=p.length;g<y;g++){let m=p[g],u=o[m.materialIndex],x=Math.max(m.start,f.start),v=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let _=x,E=v;_<E;_+=3){let M=_,T=_+1,R=_+2;r=Ud(this,u,e,i,c,d,h,M,T,R),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{let g=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let m=g,u=y;m<u;m+=3){let x=m,v=m+1,_=m+2;r=Ud(this,o,e,i,c,d,h,x,v,_),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}};function pM(t,e,n,i,r,s,o,a){let l;if(e.side===Jt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Yr,a),l===null)return null;Dd.copy(a),Dd.applyMatrix4(t.matrixWorld);let c=n.ray.origin.distanceTo(Dd);return c<n.near||c>n.far?null:{distance:c,point:Dd.clone(),object:t}}function Ud(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,No),t.getVertexPosition(l,Do),t.getVertexPosition(c,Uo);let d=pM(t,e,n,i,No,Do,Uo,Nd);if(d){r&&(Ld.fromBufferAttribute(r,a),Id.fromBufferAttribute(r,l),kd.fromBufferAttribute(r,c),d.uv=Bo.getInterpolation(Nd,No,Do,Uo,Ld,Id,kd,new xe)),s&&(Ld.fromBufferAttribute(s,a),Id.fromBufferAttribute(s,l),kd.fromBufferAttribute(s,c),d.uv1=Bo.getInterpolation(Nd,No,Do,Uo,Ld,Id,kd,new xe),d.uv2=d.uv1),o&&(i1.fromBufferAttribute(o,a),r1.fromBufferAttribute(o,l),s1.fromBufferAttribute(o,c),d.normal=Bo.getInterpolation(Nd,No,Do,Uo,i1,r1,s1,new z),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));let h={a,b:l,c,normal:new z,materialIndex:0};Bo.getNormal(No,Do,Uo,h.normal),d.face=h}return d}var ks=class t extends Ht{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],d=[],h=[],p=0,f=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new rt(c,3)),this.setAttribute("normal",new rt(d,3)),this.setAttribute("uv",new rt(h,2));function g(y,m,u,x,v,_,E,M,T,R,S){let A=_/T,P=E/R,W=_/2,X=E/2,L=M/2,D=T+1,O=R+1,F=0,G=0,ie=new z;for(let re=0;re<O;re++){let J=re*P-X;for(let de=0;de<D;de++){let Z=de*A-W;ie[y]=Z*x,ie[m]=J*v,ie[u]=L,c.push(ie.x,ie.y,ie.z),ie[y]=0,ie[m]=0,ie[u]=M>0?1:-1,d.push(ie.x,ie.y,ie.z),h.push(de/T),h.push(1-re/R),F+=1}}for(let re=0;re<R;re++)for(let J=0;J<T;J++){let de=p+J+D*re,Z=p+J+D*(re+1),ae=p+(J+1)+D*(re+1),we=p+(J+1)+D*re;l.push(de,Z,we),l.push(Z,ae,we),G+=6}a.addGroup(f,G,S),f+=G,p+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Jo(t){let e={};for(let n in t){e[n]={};for(let i in t[n]){let r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function _n(t){let e={};for(let n=0;n<t.length;n++){let i=Jo(t[n]);for(let r in i)e[r]=i[r]}return e}function fM(t){let e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function $1(t){return t.getRenderTarget()===null?t.outputColorSpace:ut.workingColorSpace}var mM={clone:Jo,merge:_n},gM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ei=class extends Is{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gM,this.fragmentShader=vM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Jo(e.uniforms),this.uniformsGroups=fM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}},ru=class extends Pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new zt,this.projectionMatrix=new zt,this.projectionMatrixInverse=new zt,this.coordinateSystem=dr}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},wn=class extends ru{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let n=.5*this.getFilmHeight()/e;this.fov=Qf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(xf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qf*2*Math.atan(Math.tan(xf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,n=e*Math.tan(xf*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}},Oo=-90,Fo=1,rm=class extends Pn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new wn(Oo,Fo,e,n);r.layers=this.layers,this.add(r);let s=new wn(Oo,Fo,e,n);s.layers=this.layers,this.add(s);let o=new wn(Oo,Fo,e,n);o.layers=this.layers,this.add(o);let a=new wn(Oo,Fo,e,n);a.layers=this.layers,this.add(a);let l=new wn(Oo,Fo,e,n);l.layers=this.layers,this.add(l);let c=new wn(Oo,Fo,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(let c of n)this.remove(c);if(e===dr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Jd)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,d]=this.children,h=e.getRenderTarget(),p=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(h,p,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},su=class extends Vn{constructor(e,n,i,r,s,o,a,l,c,d){e=e!==void 0?e:[],n=n!==void 0?n:qo,super(e,n,i,r,s,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},sm=class extends hr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(gl("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Ps?ot:ri),this.texture=new su(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ii}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ks(5,5,5),s=new Ei({name:"CubemapFromEquirect",uniforms:Jo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Jt,blending:Wr});s.uniforms.tEquirect.value=n;let o=new Ne(r,s),a=n.minFilter;return n.minFilter===_l&&(n.minFilter=ii),new rm(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}},Uf=new z,xM=new z,yM=new Qe,cr=class{constructor(e=new z(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){let r=Uf.subVectors(i,n).cross(xM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){let i=e.delta(Uf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){let i=n||yM.getNormalMatrix(e),r=this.coplanarPoint(Uf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ms=new Sl,Od=new z,Ml=class{constructor(e=new cr,n=new cr,i=new cr,r=new cr,s=new cr,o=new cr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=dr){let i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],d=r[5],h=r[6],p=r[7],f=r[8],g=r[9],y=r[10],m=r[11],u=r[12],x=r[13],v=r[14],_=r[15];if(i[0].setComponents(l-s,p-c,m-f,_-u).normalize(),i[1].setComponents(l+s,p+c,m+f,_+u).normalize(),i[2].setComponents(l+o,p+d,m+g,_+x).normalize(),i[3].setComponents(l-o,p-d,m-g,_-x).normalize(),i[4].setComponents(l-a,p-h,m-y,_-v).normalize(),n===dr)i[5].setComponents(l+a,p+h,m+y,_+v).normalize();else if(n===Jd)i[5].setComponents(a,h,y,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ms.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ms.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ms)}intersectsSprite(e){return Ms.center.set(0,0,0),Ms.radius=.7071067811865476,Ms.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ms)}intersectsSphere(e){let n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let n=this.planes;for(let i=0;i<6;i++){let r=n[i];if(Od.x=r.normal.x>0?e.max.x:e.min.x,Od.y=r.normal.y>0?e.max.y:e.min.y,Od.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Od)<0)return!1}return!0}containsPoint(e){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function J1(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function _M(t,e){let n=e.isWebGL2,i=new WeakMap;function r(c,d){let h=c.array,p=c.usage,f=h.byteLength,g=t.createBuffer();t.bindBuffer(d,g),t.bufferData(d,h,p),c.onUploadCallback();let y;if(h instanceof Float32Array)y=t.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)y=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=t.UNSIGNED_SHORT;else if(h instanceof Int16Array)y=t.SHORT;else if(h instanceof Uint32Array)y=t.UNSIGNED_INT;else if(h instanceof Int32Array)y=t.INT;else if(h instanceof Int8Array)y=t.BYTE;else if(h instanceof Uint8Array)y=t.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)y=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:y,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:f}}function s(c,d,h){let p=d.array,f=d._updateRange,g=d.updateRanges;if(t.bindBuffer(h,c),f.count===-1&&g.length===0&&t.bufferSubData(h,0,p),g.length!==0){for(let y=0,m=g.length;y<m;y++){let u=g[y];n?t.bufferSubData(h,u.start*p.BYTES_PER_ELEMENT,p,u.start,u.count):t.bufferSubData(h,u.start*p.BYTES_PER_ELEMENT,p.subarray(u.start,u.start+u.count))}d.clearUpdateRanges()}f.count!==-1&&(n?t.bufferSubData(h,f.offset*p.BYTES_PER_ELEMENT,p,f.offset,f.count):t.bufferSubData(h,f.offset*p.BYTES_PER_ELEMENT,p.subarray(f.offset,f.offset+f.count)),f.count=-1),d.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);let d=i.get(c);d&&(t.deleteBuffer(d.buffer),i.delete(c))}function l(c,d){if(c.isGLBufferAttribute){let p=i.get(c);(!p||p.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let h=i.get(c);if(h===void 0)i.set(c,r(c,d));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,c,d),h.version=c.version}}return{get:o,remove:a,update:l}}var It=class t extends Ht{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};let s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,d=l+1,h=e/a,p=n/l,f=[],g=[],y=[],m=[];for(let u=0;u<d;u++){let x=u*p-o;for(let v=0;v<c;v++){let _=v*h-s;g.push(_,-x,0),y.push(0,0,1),m.push(v/a),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let x=0;x<a;x++){let v=x+c*u,_=x+c*(u+1),E=x+1+c*(u+1),M=x+1+c*u;f.push(v,_,M),f.push(_,E,M)}this.setIndex(f),this.setAttribute("position",new rt(g,3)),this.setAttribute("normal",new rt(y,3)),this.setAttribute("uv",new rt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.widthSegments,e.heightSegments)}},bM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,SM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,MM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,EM=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,TM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,AM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,CM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,RM=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,PM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,LM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,IM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,NM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,DM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,UM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,OM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,FM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,BM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,HM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,VM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,GM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,WM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,jM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,XM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,qM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,YM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$M=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,JM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ZM="gl_FragColor = linearToOutputTexel( gl_FragColor );",KM=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,QM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,eE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,tE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,nE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,iE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,rE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,oE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,aE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,cE=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,dE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,uE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,fE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,mE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,_E=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,bE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,wE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,SE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ME=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,EE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,TE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,AE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,CE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,RE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,PE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,LE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,IE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,NE=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,DE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,UE=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,OE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,FE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,zE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,BE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,HE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,VE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,GE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,WE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,jE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,XE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,YE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$E=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,JE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ZE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,KE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,QE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,eT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,iT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,rT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,sT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,oT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,aT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,lT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,dT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,uT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,fT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,mT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,gT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,yT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,_T=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ST=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ET=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,AT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,CT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,RT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,PT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,LT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,kT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,NT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,DT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,OT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,zT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,HT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,VT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,GT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,jT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,$T=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,JT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ZT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,KT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,QT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ze={alphahash_fragment:bM,alphahash_pars_fragment:wM,alphamap_fragment:SM,alphamap_pars_fragment:MM,alphatest_fragment:EM,alphatest_pars_fragment:TM,aomap_fragment:AM,aomap_pars_fragment:CM,batching_pars_vertex:RM,batching_vertex:PM,begin_vertex:LM,beginnormal_vertex:IM,bsdfs:kM,iridescence_fragment:NM,bumpmap_pars_fragment:DM,clipping_planes_fragment:UM,clipping_planes_pars_fragment:OM,clipping_planes_pars_vertex:FM,clipping_planes_vertex:zM,color_fragment:BM,color_pars_fragment:HM,color_pars_vertex:VM,color_vertex:GM,common:WM,cube_uv_reflection_fragment:jM,defaultnormal_vertex:XM,displacementmap_pars_vertex:qM,displacementmap_vertex:YM,emissivemap_fragment:$M,emissivemap_pars_fragment:JM,colorspace_fragment:ZM,colorspace_pars_fragment:KM,envmap_fragment:QM,envmap_common_pars_fragment:eE,envmap_pars_fragment:tE,envmap_pars_vertex:nE,envmap_physical_pars_fragment:fE,envmap_vertex:iE,fog_vertex:rE,fog_pars_vertex:sE,fog_fragment:oE,fog_pars_fragment:aE,gradientmap_pars_fragment:lE,lightmap_fragment:cE,lightmap_pars_fragment:dE,lights_lambert_fragment:uE,lights_lambert_pars_fragment:hE,lights_pars_begin:pE,lights_toon_fragment:mE,lights_toon_pars_fragment:gE,lights_phong_fragment:vE,lights_phong_pars_fragment:xE,lights_physical_fragment:yE,lights_physical_pars_fragment:_E,lights_fragment_begin:bE,lights_fragment_maps:wE,lights_fragment_end:SE,logdepthbuf_fragment:ME,logdepthbuf_pars_fragment:EE,logdepthbuf_pars_vertex:TE,logdepthbuf_vertex:AE,map_fragment:CE,map_pars_fragment:RE,map_particle_fragment:PE,map_particle_pars_fragment:LE,metalnessmap_fragment:IE,metalnessmap_pars_fragment:kE,morphcolor_vertex:NE,morphnormal_vertex:DE,morphtarget_pars_vertex:UE,morphtarget_vertex:OE,normal_fragment_begin:FE,normal_fragment_maps:zE,normal_pars_fragment:BE,normal_pars_vertex:HE,normal_vertex:VE,normalmap_pars_fragment:GE,clearcoat_normal_fragment_begin:WE,clearcoat_normal_fragment_maps:jE,clearcoat_pars_fragment:XE,iridescence_pars_fragment:qE,opaque_fragment:YE,packing:$E,premultiplied_alpha_fragment:JE,project_vertex:ZE,dithering_fragment:KE,dithering_pars_fragment:QE,roughnessmap_fragment:eT,roughnessmap_pars_fragment:tT,shadowmap_pars_fragment:nT,shadowmap_pars_vertex:iT,shadowmap_vertex:rT,shadowmask_pars_fragment:sT,skinbase_vertex:oT,skinning_pars_vertex:aT,skinning_vertex:lT,skinnormal_vertex:cT,specularmap_fragment:dT,specularmap_pars_fragment:uT,tonemapping_fragment:hT,tonemapping_pars_fragment:pT,transmission_fragment:fT,transmission_pars_fragment:mT,uv_pars_fragment:gT,uv_pars_vertex:vT,uv_vertex:xT,worldpos_vertex:yT,background_vert:_T,background_frag:bT,backgroundCube_vert:wT,backgroundCube_frag:ST,cube_vert:MT,cube_frag:ET,depth_vert:TT,depth_frag:AT,distanceRGBA_vert:CT,distanceRGBA_frag:RT,equirect_vert:PT,equirect_frag:LT,linedashed_vert:IT,linedashed_frag:kT,meshbasic_vert:NT,meshbasic_frag:DT,meshlambert_vert:UT,meshlambert_frag:OT,meshmatcap_vert:FT,meshmatcap_frag:zT,meshnormal_vert:BT,meshnormal_frag:HT,meshphong_vert:VT,meshphong_frag:GT,meshphysical_vert:WT,meshphysical_frag:jT,meshtoon_vert:XT,meshtoon_frag:qT,points_vert:YT,points_frag:$T,shadow_vert:JT,shadow_frag:ZT,sprite_vert:KT,sprite_frag:QT},Te={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},zi={basic:{uniforms:_n([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:_n([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:_n([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:_n([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:_n([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:_n([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:_n([Te.points,Te.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:_n([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:_n([Te.common,Te.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:_n([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:_n([Te.sprite,Te.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:_n([Te.common,Te.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:_n([Te.lights,Te.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};zi.physical={uniforms:_n([zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};var Fd={r:0,b:0,g:0};function eA(t,e,n,i,r,s,o){let a=new Ge(0),l=s===!0?0:1,c,d,h=null,p=0,f=null;function g(m,u){let x=!1,v=u.isScene===!0?u.background:null;v&&v.isTexture&&(v=(u.backgroundBlurriness>0?n:e).get(v)),v===null?y(a,l):v&&v.isColor&&(y(v,1),x=!0);let _=t.xr.getEnvironmentBlendMode();_==="additive"?i.buffers.color.setClear(0,0,0,1,o):_==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||x)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),v&&(v.isCubeTexture||v.mapping===fu)?(d===void 0&&(d=new Ne(new ks(1,1,1),new Ei({name:"BackgroundCubeMaterial",uniforms:Jo(zi.backgroundCube.uniforms),vertexShader:zi.backgroundCube.vertexShader,fragmentShader:zi.backgroundCube.fragmentShader,side:Jt,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(E,M,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),d.material.uniforms.envMap.value=v,d.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,d.material.toneMapped=ut.getTransfer(v.colorSpace)!==xt,(h!==v||p!==v.version||f!==t.toneMapping)&&(d.material.needsUpdate=!0,h=v,p=v.version,f=t.toneMapping),d.layers.enableAll(),m.unshift(d,d.geometry,d.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Ne(new It(2,2),new Ei({name:"BackgroundMaterial",uniforms:Jo(zi.background.uniforms),vertexShader:zi.background.vertexShader,fragmentShader:zi.background.fragmentShader,side:Yr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=ut.getTransfer(v.colorSpace)!==xt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||p!==v.version||f!==t.toneMapping)&&(c.material.needsUpdate=!0,h=v,p=v.version,f=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function y(m,u){m.getRGB(Fd,$1(t)),i.buffers.color.setClear(Fd.r,Fd.g,Fd.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(m,u=1){a.set(m),l=u,y(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,y(a,l)},render:g}}function tA(t,e,n,i){let r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null),c=l,d=!1;function h(L,D,O,F,G){let ie=!1;if(o){let re=y(F,O,D);c!==re&&(c=re,f(c.object)),ie=u(L,F,O,G),ie&&x(L,F,O,G)}else{let re=D.wireframe===!0;(c.geometry!==F.id||c.program!==O.id||c.wireframe!==re)&&(c.geometry=F.id,c.program=O.id,c.wireframe=re,ie=!0)}G!==null&&n.update(G,t.ELEMENT_ARRAY_BUFFER),(ie||d)&&(d=!1,R(L,D,O,F),G!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(G).buffer))}function p(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function f(L){return i.isWebGL2?t.bindVertexArray(L):s.bindVertexArrayOES(L)}function g(L){return i.isWebGL2?t.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function y(L,D,O){let F=O.wireframe===!0,G=a[L.id];G===void 0&&(G={},a[L.id]=G);let ie=G[D.id];ie===void 0&&(ie={},G[D.id]=ie);let re=ie[F];return re===void 0&&(re=m(p()),ie[F]=re),re}function m(L){let D=[],O=[],F=[];for(let G=0;G<r;G++)D[G]=0,O[G]=0,F[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:O,attributeDivisors:F,object:L,attributes:{},index:null}}function u(L,D,O,F){let G=c.attributes,ie=D.attributes,re=0,J=O.getAttributes();for(let de in J)if(J[de].location>=0){let ae=G[de],we=ie[de];if(we===void 0&&(de==="instanceMatrix"&&L.instanceMatrix&&(we=L.instanceMatrix),de==="instanceColor"&&L.instanceColor&&(we=L.instanceColor)),ae===void 0||ae.attribute!==we||we&&ae.data!==we.data)return!0;re++}return c.attributesNum!==re||c.index!==F}function x(L,D,O,F){let G={},ie=D.attributes,re=0,J=O.getAttributes();for(let de in J)if(J[de].location>=0){let ae=ie[de];ae===void 0&&(de==="instanceMatrix"&&L.instanceMatrix&&(ae=L.instanceMatrix),de==="instanceColor"&&L.instanceColor&&(ae=L.instanceColor));let we={};we.attribute=ae,ae&&ae.data&&(we.data=ae.data),G[de]=we,re++}c.attributes=G,c.attributesNum=re,c.index=F}function v(){let L=c.newAttributes;for(let D=0,O=L.length;D<O;D++)L[D]=0}function _(L){E(L,0)}function E(L,D){let O=c.newAttributes,F=c.enabledAttributes,G=c.attributeDivisors;O[L]=1,F[L]===0&&(t.enableVertexAttribArray(L),F[L]=1),G[L]!==D&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,D),G[L]=D)}function M(){let L=c.newAttributes,D=c.enabledAttributes;for(let O=0,F=D.length;O<F;O++)D[O]!==L[O]&&(t.disableVertexAttribArray(O),D[O]=0)}function T(L,D,O,F,G,ie,re){re===!0?t.vertexAttribIPointer(L,D,O,G,ie):t.vertexAttribPointer(L,D,O,F,G,ie)}function R(L,D,O,F){if(i.isWebGL2===!1&&(L.isInstancedMesh||F.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();let G=F.attributes,ie=O.getAttributes(),re=D.defaultAttributeValues;for(let J in ie){let de=ie[J];if(de.location>=0){let Z=G[J];if(Z===void 0&&(J==="instanceMatrix"&&L.instanceMatrix&&(Z=L.instanceMatrix),J==="instanceColor"&&L.instanceColor&&(Z=L.instanceColor)),Z!==void 0){let ae=Z.normalized,we=Z.itemSize,Ie=n.get(Z);if(Ie===void 0)continue;let Re=Ie.buffer,Ue=Ie.type,Oe=Ie.bytesPerElement,Pe=i.isWebGL2===!0&&(Ue===t.INT||Ue===t.UNSIGNED_INT||Z.gpuType===O1);if(Z.isInterleavedBufferAttribute){let ze=Z.data,N=ze.stride,$=Z.offset;if(ze.isInstancedInterleavedBuffer){for(let B=0;B<de.locationSize;B++)E(de.location+B,ze.meshPerAttribute);L.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ze.meshPerAttribute*ze.count)}else for(let B=0;B<de.locationSize;B++)_(de.location+B);t.bindBuffer(t.ARRAY_BUFFER,Re);for(let B=0;B<de.locationSize;B++)T(de.location+B,we/de.locationSize,Ue,ae,N*Oe,($+we/de.locationSize*B)*Oe,Pe)}else{if(Z.isInstancedBufferAttribute){for(let ze=0;ze<de.locationSize;ze++)E(de.location+ze,Z.meshPerAttribute);L.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let ze=0;ze<de.locationSize;ze++)_(de.location+ze);t.bindBuffer(t.ARRAY_BUFFER,Re);for(let ze=0;ze<de.locationSize;ze++)T(de.location+ze,we/de.locationSize,Ue,ae,we*Oe,we/de.locationSize*ze*Oe,Pe)}}else if(re!==void 0){let ae=re[J];if(ae!==void 0)switch(ae.length){case 2:t.vertexAttrib2fv(de.location,ae);break;case 3:t.vertexAttrib3fv(de.location,ae);break;case 4:t.vertexAttrib4fv(de.location,ae);break;default:t.vertexAttrib1fv(de.location,ae)}}}}M()}function S(){W();for(let L in a){let D=a[L];for(let O in D){let F=D[O];for(let G in F)g(F[G].object),delete F[G];delete D[O]}delete a[L]}}function A(L){if(a[L.id]===void 0)return;let D=a[L.id];for(let O in D){let F=D[O];for(let G in F)g(F[G].object),delete F[G];delete D[O]}delete a[L.id]}function P(L){for(let D in a){let O=a[D];if(O[L.id]===void 0)continue;let F=O[L.id];for(let G in F)g(F[G].object),delete F[G];delete O[L.id]}}function W(){X(),d=!0,c!==l&&(c=l,f(c.object))}function X(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:W,resetDefaultState:X,dispose:S,releaseStatesOfGeometry:A,releaseStatesOfProgram:P,initAttributes:v,enableAttribute:_,disableUnusedAttributes:M}}function nA(t,e,n,i){let r=i.isWebGL2,s;function o(d){s=d}function a(d,h){t.drawArrays(s,d,h),n.update(h,s,1)}function l(d,h,p){if(p===0)return;let f,g;if(r)f=t,g="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[g](s,d,h,p),n.update(h,s,p)}function c(d,h,p){if(p===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<p;g++)this.render(d[g],h[g]);else{f.multiDrawArraysWEBGL(s,d,0,h,0,p);let g=0;for(let y=0;y<p;y++)g+=h[y];n.update(g,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function iA(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext",a=n.precision!==void 0?n.precision:"highp",l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);let c=o||e.has("WEBGL_draw_buffers"),d=n.logarithmicDepthBuffer===!0,h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),y=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),u=t.getParameter(t.MAX_VARYING_VECTORS),x=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),v=p>0,_=o||e.has("OES_texture_float"),E=v&&_,M=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:d,maxTextures:h,maxVertexTextures:p,maxTextureSize:f,maxCubemapSize:g,maxAttributes:y,maxVertexUniforms:m,maxVaryings:u,maxFragmentUniforms:x,vertexTextures:v,floatFragmentTextures:_,floatVertexTextures:E,maxSamples:M}}function rA(t){let e=this,n=null,i=0,r=!1,s=!1,o=new cr,a=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,p){let f=h.length!==0||p||i!==0||r;return r=p,i=h.length,f},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,p){n=d(h,p,0)},this.setState=function(h,p,f){let g=h.clippingPlanes,y=h.clipIntersection,m=h.clipShadows,u=t.get(h);if(!r||g===null||g.length===0||s&&!m)s?d(null):c();else{let x=s?0:i,v=x*4,_=u.clippingState||null;l.value=_,_=d(g,p,v,f);for(let E=0;E!==v;++E)_[E]=n[E];u.clippingState=_,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(h,p,f,g){let y=h!==null?h.length:0,m=null;if(y!==0){if(m=l.value,g!==!0||m===null){let u=f+y*4,x=p.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<u)&&(m=new Float32Array(u));for(let v=0,_=f;v!==y;++v,_+=4)o.copy(h[v]).applyMatrix4(x,a),o.normal.toArray(m,_),m[_+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function sA(t){let e=new WeakMap;function n(o,a){return a===Yf?o.mapping=qo:a===$f&&(o.mapping=Yo),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Yf||a===$f)if(e.has(o)){let l=e.get(o).texture;return n(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new sm(l.height/2);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}var ou=class extends ru{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}},Ho=4,o1=[.125,.215,.35,.446,.526,.582],As=20,Of=new ou,a1=new Ge,Ff=null,zf=0,Bf=0,Es=(1+Math.sqrt(5))/2,zo=1/Es,l1=[new z(1,1,1),new z(-1,1,1),new z(1,1,-1),new z(-1,1,-1),new z(0,Es,zo),new z(0,Es,-zo),new z(zo,0,Es),new z(-zo,0,Es),new z(Es,zo,0),new z(-Es,zo,0)],Zo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Ff=this._renderer.getRenderTarget(),zf=this._renderer.getActiveCubeFace(),Bf=this._renderer.getActiveMipmapLevel(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=u1(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=d1(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ff,zf,Bf),e.scissorTest=!1,zd(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===qo||e.mapping===Yo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ff=this._renderer.getRenderTarget(),zf=this._renderer.getActiveCubeFace(),Bf=this._renderer.getActiveMipmapLevel();let i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:ii,minFilter:ii,generateMipmaps:!1,type:bl,format:Mi,colorSpace:ur,depthBuffer:!1},r=c1(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=c1(e,n,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=oA(s)),this._blurMaterial=aA(s,e,n)}return r}_compileMaterial(e){let n=new Ne(this._lodPlanes[0],e);this._renderer.compile(n,Of)}_sceneToCubeUV(e,n,i,r){let a=new wn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,p=d.toneMapping;d.getClearColor(a1),d.toneMapping=jr,d.autoClear=!1;let f=new st({name:"PMREM.Background",side:Jt,depthWrite:!1,depthTest:!1}),g=new Ne(new ks,f),y=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,y=!0):(f.color.copy(a1),y=!0);for(let u=0;u<6;u++){let x=u%3;x===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):x===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));let v=this._cubeSize;zd(r,x*v,u>2?v:0,v,v),d.setRenderTarget(r),y&&d.render(g,a),d.render(e,a)}g.geometry.dispose(),g.material.dispose(),d.toneMapping=p,d.autoClear=h,e.background=m}_textureToCubeUV(e,n){let i=this._renderer,r=e.mapping===qo||e.mapping===Yo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=u1()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=d1());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ne(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let l=this._cubeSize;zd(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Of)}_applyPMREM(e){let n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){let s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=l1[(r-1)%l1.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let d=3,h=new Ne(this._lodPlanes[r],c),p=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*As-1),y=s/g,m=isFinite(s)?1+Math.floor(d*y):As;m>As&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${As}`);let u=[],x=0;for(let T=0;T<As;++T){let R=T/y,S=Math.exp(-R*R/2);u.push(S),T===0?x+=S:T<m&&(x+=2*S)}for(let T=0;T<u.length;T++)u[T]=u[T]/x;p.envMap.value=e.texture,p.samples.value=m,p.weights.value=u,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);let{_lodMax:v}=this;p.dTheta.value=g,p.mipInt.value=v-i;let _=this._sizeLods[r],E=3*_*(r>v-Ho?r-v+Ho:0),M=4*(this._cubeSize-_);zd(n,E,M,3*_,2*_),l.setRenderTarget(n),l.render(h,Of)}};function oA(t){let e=[],n=[],i=[],r=t,s=t-Ho+1+o1.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Ho?l=o1[o-t+Ho-1]:o===0&&(l=0),i.push(l);let c=1/(a-2),d=-c,h=1+c,p=[d,d,h,d,h,h,d,d,h,h,d,h],f=6,g=6,y=3,m=2,u=1,x=new Float32Array(y*g*f),v=new Float32Array(m*g*f),_=new Float32Array(u*g*f);for(let M=0;M<f;M++){let T=M%3*2/3-1,R=M>2?0:-1,S=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];x.set(S,y*g*M),v.set(p,m*g*M);let A=[M,M,M,M,M,M];_.set(A,u*g*M)}let E=new Ht;E.setAttribute("position",new Bt(x,y)),E.setAttribute("uv",new Bt(v,m)),E.setAttribute("faceIndex",new Bt(_,u)),e.push(E),r>Ho&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function c1(t,e,n){let i=new hr(t,e,n);return i.texture.mapping=fu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function zd(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function aA(t,e,n){let i=new Float32Array(As),r=new z(0,1,0);return new Ei({name:"SphericalGaussianBlur",defines:{n:As,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Gm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Wr,depthTest:!1,depthWrite:!1})}function d1(){return new Ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Wr,depthTest:!1,depthWrite:!1})}function u1(){return new Ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wr,depthTest:!1,depthWrite:!1})}function Gm(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function lA(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){let l=a.mapping,c=l===Yf||l===$f,d=l===qo||l===Yo;if(c||d)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return n===null&&(n=new Zo(t)),h=c?n.fromEquirectangular(a,h):n.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{let h=a.image;if(c&&h&&h.height>0||d&&h&&r(h)){n===null&&(n=new Zo(t));let p=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,p),a.addEventListener("dispose",s),p.texture}else return null}}}return a}function r(a){let l=0,c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function cA(t){let e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){let r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function dA(t,e,n,i){let r={},s=new WeakMap;function o(h){let p=h.target;p.index!==null&&e.remove(p.index);for(let g in p.attributes)e.remove(p.attributes[g]);for(let g in p.morphAttributes){let y=p.morphAttributes[g];for(let m=0,u=y.length;m<u;m++)e.remove(y[m])}p.removeEventListener("dispose",o),delete r[p.id];let f=s.get(p);f&&(e.remove(f),s.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,n.memory.geometries--}function a(h,p){return r[p.id]===!0||(p.addEventListener("dispose",o),r[p.id]=!0,n.memory.geometries++),p}function l(h){let p=h.attributes;for(let g in p)e.update(p[g],t.ARRAY_BUFFER);let f=h.morphAttributes;for(let g in f){let y=f[g];for(let m=0,u=y.length;m<u;m++)e.update(y[m],t.ARRAY_BUFFER)}}function c(h){let p=[],f=h.index,g=h.attributes.position,y=0;if(f!==null){let x=f.array;y=f.version;for(let v=0,_=x.length;v<_;v+=3){let E=x[v+0],M=x[v+1],T=x[v+2];p.push(E,M,M,T,T,E)}}else if(g!==void 0){let x=g.array;y=g.version;for(let v=0,_=x.length/3-1;v<_;v+=3){let E=v+0,M=v+1,T=v+2;p.push(E,M,M,T,T,E)}}else return;let m=new(q1(p)?iu:nu)(p,1);m.version=y;let u=s.get(h);u&&e.remove(u),s.set(h,m)}function d(h){let p=s.get(h);if(p){let f=h.index;f!==null&&p.version<f.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:d}}function uA(t,e,n,i){let r=i.isWebGL2,s;function o(f){s=f}let a,l;function c(f){a=f.type,l=f.bytesPerElement}function d(f,g){t.drawElements(s,g,a,f*l),n.update(g,s,1)}function h(f,g,y){if(y===0)return;let m,u;if(r)m=t,u="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[u](s,g,a,f*l,y),n.update(g,s,y)}function p(f,g,y){if(y===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<y;u++)this.render(f[u]/l,g[u]);else{m.multiDrawElementsWEBGL(s,g,0,a,f,0,y);let u=0;for(let x=0;x<y;x++)u+=g[x];n.update(u,s,1)}}this.setMode=o,this.setIndex=c,this.render=d,this.renderInstances=h,this.renderMultiDraw=p}function hA(t){let e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function pA(t,e){return t[0]-e[0]}function fA(t,e){return Math.abs(e[1])-Math.abs(t[1])}function mA(t,e,n){let i={},r=new Float32Array(8),s=new WeakMap,o=new $t,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,d,h){let p=c.morphTargetInfluences;if(e.isWebGL2===!0){let f=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=f!==void 0?f.length:0,y=s.get(d);if(y===void 0||y.count!==g){let L=function(){W.dispose(),s.delete(d),d.removeEventListener("dispose",L)};y!==void 0&&y.texture.dispose();let x=d.morphAttributes.position!==void 0,v=d.morphAttributes.normal!==void 0,_=d.morphAttributes.color!==void 0,E=d.morphAttributes.position||[],M=d.morphAttributes.normal||[],T=d.morphAttributes.color||[],R=0;x===!0&&(R=1),v===!0&&(R=2),_===!0&&(R=3);let S=d.attributes.position.count*R,A=1;S>e.maxTextureSize&&(A=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);let P=new Float32Array(S*A*4*g),W=new Qd(P,S,A,g);W.type=Gr,W.needsUpdate=!0;let X=R*4;for(let D=0;D<g;D++){let O=E[D],F=M[D],G=T[D],ie=S*A*4*D;for(let re=0;re<O.count;re++){let J=re*X;x===!0&&(o.fromBufferAttribute(O,re),P[ie+J+0]=o.x,P[ie+J+1]=o.y,P[ie+J+2]=o.z,P[ie+J+3]=0),v===!0&&(o.fromBufferAttribute(F,re),P[ie+J+4]=o.x,P[ie+J+5]=o.y,P[ie+J+6]=o.z,P[ie+J+7]=0),_===!0&&(o.fromBufferAttribute(G,re),P[ie+J+8]=o.x,P[ie+J+9]=o.y,P[ie+J+10]=o.z,P[ie+J+11]=G.itemSize===4?o.w:1)}}y={count:g,texture:W,size:new xe(S,A)},s.set(d,y),d.addEventListener("dispose",L)}let m=0;for(let x=0;x<p.length;x++)m+=p[x];let u=d.morphTargetsRelative?1:1-m;h.getUniforms().setValue(t,"morphTargetBaseInfluence",u),h.getUniforms().setValue(t,"morphTargetInfluences",p),h.getUniforms().setValue(t,"morphTargetsTexture",y.texture,n),h.getUniforms().setValue(t,"morphTargetsTextureSize",y.size)}else{let f=p===void 0?0:p.length,g=i[d.id];if(g===void 0||g.length!==f){g=[];for(let v=0;v<f;v++)g[v]=[v,0];i[d.id]=g}for(let v=0;v<f;v++){let _=g[v];_[0]=v,_[1]=p[v]}g.sort(fA);for(let v=0;v<8;v++)v<f&&g[v][1]?(a[v][0]=g[v][0],a[v][1]=g[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(pA);let y=d.morphAttributes.position,m=d.morphAttributes.normal,u=0;for(let v=0;v<8;v++){let _=a[v],E=_[0],M=_[1];E!==Number.MAX_SAFE_INTEGER&&M?(y&&d.getAttribute("morphTarget"+v)!==y[E]&&d.setAttribute("morphTarget"+v,y[E]),m&&d.getAttribute("morphNormal"+v)!==m[E]&&d.setAttribute("morphNormal"+v,m[E]),r[v]=M,u+=M):(y&&d.hasAttribute("morphTarget"+v)===!0&&d.deleteAttribute("morphTarget"+v),m&&d.hasAttribute("morphNormal"+v)===!0&&d.deleteAttribute("morphNormal"+v),r[v]=0)}let x=d.morphTargetsRelative?1:1-u;h.getUniforms().setValue(t,"morphTargetBaseInfluence",x),h.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function gA(t,e,n,i){let r=new WeakMap;function s(l){let c=i.render.frame,d=l.geometry,h=e.get(l,d);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){let p=l.skeleton;r.get(p)!==c&&(p.update(),r.set(p,c))}return h}function o(){r=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}var au=class extends Vn{constructor(e,n,i,r,s,o,a,l,c,d){if(d=d!==void 0?d:Rs,d!==Rs&&d!==$o)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===Rs&&(i=Vr),i===void 0&&d===$o&&(i=Cs),super(null,r,s,o,a,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:bn,this.minFilter=l!==void 0?l:bn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}},Z1=new Vn,K1=new au(1,1);K1.compareFunction=X1;var Q1=new Qd,e_=new nm,t_=new su,h1=[],p1=[],f1=new Float32Array(16),m1=new Float32Array(9),g1=new Float32Array(4);function na(t,e,n){let i=t[0];if(i<=0||i>0)return t;let r=e*n,s=h1[r];if(s===void 0&&(s=new Float32Array(r),h1[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Vt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Gt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function gu(t,e){let n=p1[e];n===void 0&&(n=new Int32Array(e),p1[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function vA(t,e){let n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function xA(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Vt(n,e))return;t.uniform2fv(this.addr,e),Gt(n,e)}}function yA(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Vt(n,e))return;t.uniform3fv(this.addr,e),Gt(n,e)}}function _A(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Vt(n,e))return;t.uniform4fv(this.addr,e),Gt(n,e)}}function bA(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Vt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Gt(n,e)}else{if(Vt(n,i))return;g1.set(i),t.uniformMatrix2fv(this.addr,!1,g1),Gt(n,i)}}function wA(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Vt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Gt(n,e)}else{if(Vt(n,i))return;m1.set(i),t.uniformMatrix3fv(this.addr,!1,m1),Gt(n,i)}}function SA(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Vt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Gt(n,e)}else{if(Vt(n,i))return;f1.set(i),t.uniformMatrix4fv(this.addr,!1,f1),Gt(n,i)}}function MA(t,e){let n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function EA(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Vt(n,e))return;t.uniform2iv(this.addr,e),Gt(n,e)}}function TA(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Vt(n,e))return;t.uniform3iv(this.addr,e),Gt(n,e)}}function AA(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Vt(n,e))return;t.uniform4iv(this.addr,e),Gt(n,e)}}function CA(t,e){let n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function RA(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Vt(n,e))return;t.uniform2uiv(this.addr,e),Gt(n,e)}}function PA(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Vt(n,e))return;t.uniform3uiv(this.addr,e),Gt(n,e)}}function LA(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Vt(n,e))return;t.uniform4uiv(this.addr,e),Gt(n,e)}}function IA(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s=this.type===t.SAMPLER_2D_SHADOW?K1:Z1;n.setTexture2D(e||s,r)}function kA(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||e_,r)}function NA(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||t_,r)}function DA(t,e,n){let i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Q1,r)}function UA(t){switch(t){case 5126:return vA;case 35664:return xA;case 35665:return yA;case 35666:return _A;case 35674:return bA;case 35675:return wA;case 35676:return SA;case 5124:case 35670:return MA;case 35667:case 35671:return EA;case 35668:case 35672:return TA;case 35669:case 35673:return AA;case 5125:return CA;case 36294:return RA;case 36295:return PA;case 36296:return LA;case 35678:case 36198:case 36298:case 36306:case 35682:return IA;case 35679:case 36299:case 36307:return kA;case 35680:case 36300:case 36308:case 36293:return NA;case 36289:case 36303:case 36311:case 36292:return DA}}function OA(t,e){t.uniform1fv(this.addr,e)}function FA(t,e){let n=na(e,this.size,2);t.uniform2fv(this.addr,n)}function zA(t,e){let n=na(e,this.size,3);t.uniform3fv(this.addr,n)}function BA(t,e){let n=na(e,this.size,4);t.uniform4fv(this.addr,n)}function HA(t,e){let n=na(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function VA(t,e){let n=na(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function GA(t,e){let n=na(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function WA(t,e){t.uniform1iv(this.addr,e)}function jA(t,e){t.uniform2iv(this.addr,e)}function XA(t,e){t.uniform3iv(this.addr,e)}function qA(t,e){t.uniform4iv(this.addr,e)}function YA(t,e){t.uniform1uiv(this.addr,e)}function $A(t,e){t.uniform2uiv(this.addr,e)}function JA(t,e){t.uniform3uiv(this.addr,e)}function ZA(t,e){t.uniform4uiv(this.addr,e)}function KA(t,e,n){let i=this.cache,r=e.length,s=gu(n,r);Vt(i,s)||(t.uniform1iv(this.addr,s),Gt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Z1,s[o])}function QA(t,e,n){let i=this.cache,r=e.length,s=gu(n,r);Vt(i,s)||(t.uniform1iv(this.addr,s),Gt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||e_,s[o])}function e3(t,e,n){let i=this.cache,r=e.length,s=gu(n,r);Vt(i,s)||(t.uniform1iv(this.addr,s),Gt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||t_,s[o])}function t3(t,e,n){let i=this.cache,r=e.length,s=gu(n,r);Vt(i,s)||(t.uniform1iv(this.addr,s),Gt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Q1,s[o])}function n3(t){switch(t){case 5126:return OA;case 35664:return FA;case 35665:return zA;case 35666:return BA;case 35674:return HA;case 35675:return VA;case 35676:return GA;case 5124:case 35670:return WA;case 35667:case 35671:return jA;case 35668:case 35672:return XA;case 35669:case 35673:return qA;case 5125:return YA;case 36294:return $A;case 36295:return JA;case 36296:return ZA;case 35678:case 36198:case 36298:case 36306:case 35682:return KA;case 35679:case 36299:case 36307:return QA;case 35680:case 36300:case 36308:case 36293:return e3;case 36289:case 36303:case 36311:case 36292:return t3}}var om=class{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=UA(n.type)}},am=class{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=n3(n.type)}},lm=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,n[a.id],i)}}},Hf=/(\w+)(\])?(\[|\.)?/g;function v1(t,e){t.seq.push(e),t.map[e.id]=e}function i3(t,e,n){let i=t.name,r=i.length;for(Hf.lastIndex=0;;){let s=Hf.exec(i),o=Hf.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){v1(n,c===void 0?new om(a,t,e):new am(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new lm(a),v1(n,h)),n=h}}}var Xo=class{constructor(e,n){this.seq=[],this.map={};let i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);i3(s,o,this)}}setValue(e,n,i,r){let s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){let r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){let a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){let i=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in n&&i.push(o)}return i}};function x1(t,e,n){let i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}var r3=37297,s3=0;function o3(t,e){let n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function a3(t){let e=ut.getPrimaries(ut.workingColorSpace),n=ut.getPrimaries(t),i;switch(e===n?i="":e===$d&&n===Yd?i="LinearDisplayP3ToLinearSRGB":e===Yd&&n===$d&&(i="LinearSRGBToLinearDisplayP3"),t){case ur:case mu:return[i,"LinearTransferOETF"];case ot:case Vm:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function y1(t,e,n){let i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+o3(t.getShaderSource(e),o)}else return r}function l3(t,e){let n=a3(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function c3(t,e){let n;switch(e){case C2:n="Linear";break;case R2:n="Reinhard";break;case P2:n="OptimizedCineon";break;case Bm:n="ACESFilmic";break;case I2:n="AgX";break;case L2:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function d3(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Vo).join(`
`)}function u3(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Vo).join(`
`)}function h3(t){let e=[];for(let n in t){let i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function p3(t,e){let n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=t.getActiveAttrib(e,r),o=s.name,a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Vo(t){return t!==""}function _1(t,e){let n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function b1(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var f3=/^[ \t]*#include +<([\w\d./]+)>/gm;function cm(t){return t.replace(f3,g3)}var m3=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function g3(t,e){let n=Ze[e];if(n===void 0){let i=m3.get(e);if(i!==void 0)n=Ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return cm(n)}var v3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function w1(t){return t.replace(v3,x3)}function x3(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function S1(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function y3(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===N1?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===n2?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===lr&&(e="SHADOWMAP_TYPE_VSM"),e}function _3(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case qo:case Yo:e="ENVMAP_TYPE_CUBE";break;case fu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function b3(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Yo:e="ENVMAP_MODE_REFRACTION";break}return e}function w3(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case D1:e="ENVMAP_BLENDING_MULTIPLY";break;case T2:e="ENVMAP_BLENDING_MIX";break;case A2:e="ENVMAP_BLENDING_ADD";break}return e}function S3(t){let e=t.envMapCubeUVHeight;if(e===null)return null;let n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function M3(t,e,n,i){let r=t.getContext(),s=n.defines,o=n.vertexShader,a=n.fragmentShader,l=y3(n),c=_3(n),d=b3(n),h=w3(n),p=S3(n),f=n.isWebGL2?"":d3(n),g=u3(n),y=h3(s),m=r.createProgram(),u,x,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(Vo).join(`
`),u.length>0&&(u+=`
`),x=[f,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y].filter(Vo).join(`
`),x.length>0&&(x+=`
`)):(u=[S1(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vo).join(`
`),x=[f,S1(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,y,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+h:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==jr?"#define TONE_MAPPING":"",n.toneMapping!==jr?Ze.tonemapping_pars_fragment:"",n.toneMapping!==jr?c3("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,l3("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Vo).join(`
`)),o=cm(o),o=_1(o,n),o=b1(o,n),a=cm(a),a=_1(a,n),a=b1(a,n),o=w1(o),a=w1(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,u=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,x=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===Vy?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Vy?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);let _=v+u+o,E=v+x+a,M=x1(r,r.VERTEX_SHADER,_),T=x1(r,r.FRAGMENT_SHADER,E);r.attachShader(m,M),r.attachShader(m,T),n.index0AttributeName!==void 0?r.bindAttribLocation(m,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function R(W){if(t.debug.checkShaderErrors){let X=r.getProgramInfoLog(m).trim(),L=r.getShaderInfoLog(M).trim(),D=r.getShaderInfoLog(T).trim(),O=!0,F=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(O=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,m,M,T);else{let G=y1(r,M,"vertex"),ie=y1(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Program Info Log: `+X+`
`+G+`
`+ie)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(L===""||D==="")&&(F=!1);F&&(W.diagnostics={runnable:O,programLog:X,vertexShader:{log:L,prefix:u},fragmentShader:{log:D,prefix:x}})}r.deleteShader(M),r.deleteShader(T),S=new Xo(r,m),A=p3(r,m)}let S;this.getUniforms=function(){return S===void 0&&R(this),S};let A;this.getAttributes=function(){return A===void 0&&R(this),A};let P=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=r.getProgramParameter(m,r3)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=s3++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=M,this.fragmentShader=T,this}var E3=0,dm=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let n=this.materialCache.get(e);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let n=this.materialCache,i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){let n=this.shaderCache,i=n.get(e);return i===void 0&&(i=new um(e),n.set(e,i)),i}},um=class{constructor(e){this.id=E3++,this.code=e,this.usedTimes=0}};function T3(t,e,n,i,r,s,o){let a=new tu,l=new dm,c=[],d=r.isWebGL2,h=r.logarithmicDepthBuffer,p=r.vertexTextures,f=r.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(S){return S===0?"uv":`uv${S}`}function m(S,A,P,W,X){let L=W.fog,D=X.geometry,O=S.isMeshStandardMaterial?W.environment:null,F=(S.isMeshStandardMaterial?n:e).get(S.envMap||O),G=F&&F.mapping===fu?F.image.height:null,ie=g[S.type];S.precision!==null&&(f=r.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));let re=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,J=re!==void 0?re.length:0,de=0;D.morphAttributes.position!==void 0&&(de=1),D.morphAttributes.normal!==void 0&&(de=2),D.morphAttributes.color!==void 0&&(de=3);let Z,ae,we,Ie;if(ie){let wt=zi[ie];Z=wt.vertexShader,ae=wt.fragmentShader}else Z=S.vertexShader,ae=S.fragmentShader,l.update(S),we=l.getVertexShaderID(S),Ie=l.getFragmentShaderID(S);let Re=t.getRenderTarget(),Ue=X.isInstancedMesh===!0,Oe=X.isBatchedMesh===!0,Pe=!!S.map,ze=!!S.matcap,N=!!F,$=!!S.aoMap,B=!!S.lightMap,se=!!S.bumpMap,H=!!S.normalMap,ge=!!S.displacementMap,le=!!S.emissiveMap,w=!!S.metalnessMap,b=!!S.roughnessMap,I=S.anisotropy>0,j=S.clearcoat>0,oe=S.iridescence>0,ee=S.sheen>0,_e=S.transmission>0,ue=I&&!!S.anisotropyMap,k=j&&!!S.clearcoatMap,q=j&&!!S.clearcoatNormalMap,he=j&&!!S.clearcoatRoughnessMap,te=oe&&!!S.iridescenceMap,be=oe&&!!S.iridescenceThicknessMap,Me=ee&&!!S.sheenColorMap,Ce=ee&&!!S.sheenRoughnessMap,Se=!!S.specularMap,ye=!!S.specularColorMap,Ee=!!S.specularIntensityMap,$e=_e&&!!S.transmissionMap,nt=_e&&!!S.thicknessMap,Be=!!S.gradientMap,pe=!!S.alphaMap,U=S.alphaTest>0,ve=!!S.alphaHash,me=!!S.extensions,De=!!D.attributes.uv1,Ae=!!D.attributes.uv2,He=!!D.attributes.uv3,et=jr;return S.toneMapped&&(Re===null||Re.isXRRenderTarget===!0)&&(et=t.toneMapping),{isWebGL2:d,shaderID:ie,shaderType:S.type,shaderName:S.name,vertexShader:Z,fragmentShader:ae,defines:S.defines,customVertexShaderID:we,customFragmentShaderID:Ie,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Oe,instancing:Ue,instancingColor:Ue&&X.instanceColor!==null,supportsVertexTextures:p,outputColorSpace:Re===null?t.outputColorSpace:Re.isXRRenderTarget===!0?Re.texture.colorSpace:ur,map:Pe,matcap:ze,envMap:N,envMapMode:N&&F.mapping,envMapCubeUVHeight:G,aoMap:$,lightMap:B,bumpMap:se,normalMap:H,displacementMap:p&&ge,emissiveMap:le,normalMapObjectSpace:H&&S.normalMapType===W2,normalMapTangentSpace:H&&S.normalMapType===j1,metalnessMap:w,roughnessMap:b,anisotropy:I,anisotropyMap:ue,clearcoat:j,clearcoatMap:k,clearcoatNormalMap:q,clearcoatRoughnessMap:he,iridescence:oe,iridescenceMap:te,iridescenceThicknessMap:be,sheen:ee,sheenColorMap:Me,sheenRoughnessMap:Ce,specularMap:Se,specularColorMap:ye,specularIntensityMap:Ee,transmission:_e,transmissionMap:$e,thicknessMap:nt,gradientMap:Be,opaque:S.transparent===!1&&S.blending===Wo,alphaMap:pe,alphaTest:U,alphaHash:ve,combine:S.combine,mapUv:Pe&&y(S.map.channel),aoMapUv:$&&y(S.aoMap.channel),lightMapUv:B&&y(S.lightMap.channel),bumpMapUv:se&&y(S.bumpMap.channel),normalMapUv:H&&y(S.normalMap.channel),displacementMapUv:ge&&y(S.displacementMap.channel),emissiveMapUv:le&&y(S.emissiveMap.channel),metalnessMapUv:w&&y(S.metalnessMap.channel),roughnessMapUv:b&&y(S.roughnessMap.channel),anisotropyMapUv:ue&&y(S.anisotropyMap.channel),clearcoatMapUv:k&&y(S.clearcoatMap.channel),clearcoatNormalMapUv:q&&y(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&y(S.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&y(S.iridescenceMap.channel),iridescenceThicknessMapUv:be&&y(S.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&y(S.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&y(S.sheenRoughnessMap.channel),specularMapUv:Se&&y(S.specularMap.channel),specularColorMapUv:ye&&y(S.specularColorMap.channel),specularIntensityMapUv:Ee&&y(S.specularIntensityMap.channel),transmissionMapUv:$e&&y(S.transmissionMap.channel),thicknessMapUv:nt&&y(S.thicknessMap.channel),alphaMapUv:pe&&y(S.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(H||I),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUv1s:De,vertexUv2s:Ae,vertexUv3s:He,pointsUvs:X.isPoints===!0&&!!D.attributes.uv&&(Pe||pe),fog:!!L,useFog:S.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:X.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:de,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:et,useLegacyLights:t._useLegacyLights,decodeVideoTexture:Pe&&S.map.isVideoTexture===!0&&ut.getTransfer(S.map.colorSpace)===xt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===mn,flipSided:S.side===Jt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:me&&S.extensions.derivatives===!0,extensionFragDepth:me&&S.extensions.fragDepth===!0,extensionDrawBuffers:me&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:me&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:me&&S.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:d||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function u(S){let A=[];if(S.shaderID?A.push(S.shaderID):(A.push(S.customVertexShaderID),A.push(S.customFragmentShaderID)),S.defines!==void 0)for(let P in S.defines)A.push(P),A.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(x(A,S),v(A,S),A.push(t.outputColorSpace)),A.push(S.customProgramCacheKey),A.join()}function x(S,A){S.push(A.precision),S.push(A.outputColorSpace),S.push(A.envMapMode),S.push(A.envMapCubeUVHeight),S.push(A.mapUv),S.push(A.alphaMapUv),S.push(A.lightMapUv),S.push(A.aoMapUv),S.push(A.bumpMapUv),S.push(A.normalMapUv),S.push(A.displacementMapUv),S.push(A.emissiveMapUv),S.push(A.metalnessMapUv),S.push(A.roughnessMapUv),S.push(A.anisotropyMapUv),S.push(A.clearcoatMapUv),S.push(A.clearcoatNormalMapUv),S.push(A.clearcoatRoughnessMapUv),S.push(A.iridescenceMapUv),S.push(A.iridescenceThicknessMapUv),S.push(A.sheenColorMapUv),S.push(A.sheenRoughnessMapUv),S.push(A.specularMapUv),S.push(A.specularColorMapUv),S.push(A.specularIntensityMapUv),S.push(A.transmissionMapUv),S.push(A.thicknessMapUv),S.push(A.combine),S.push(A.fogExp2),S.push(A.sizeAttenuation),S.push(A.morphTargetsCount),S.push(A.morphAttributeCount),S.push(A.numDirLights),S.push(A.numPointLights),S.push(A.numSpotLights),S.push(A.numSpotLightMaps),S.push(A.numHemiLights),S.push(A.numRectAreaLights),S.push(A.numDirLightShadows),S.push(A.numPointLightShadows),S.push(A.numSpotLightShadows),S.push(A.numSpotLightShadowsWithMaps),S.push(A.numLightProbes),S.push(A.shadowMapType),S.push(A.toneMapping),S.push(A.numClippingPlanes),S.push(A.numClipIntersection),S.push(A.depthPacking)}function v(S,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),A.alphaHash&&a.enable(18),A.batching&&a.enable(19),S.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.useLegacyLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function _(S){let A=g[S.type],P;if(A){let W=zi[A];P=mM.clone(W.uniforms)}else P=S.uniforms;return P}function E(S,A){let P;for(let W=0,X=c.length;W<X;W++){let L=c[W];if(L.cacheKey===A){P=L,++P.usedTimes;break}}return P===void 0&&(P=new M3(t,A,S,s),c.push(P)),P}function M(S){if(--S.usedTimes===0){let A=c.indexOf(S);c[A]=c[c.length-1],c.pop(),S.destroy()}}function T(S){l.remove(S)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:_,acquireProgram:E,releaseProgram:M,releaseShaderCache:T,programs:c,dispose:R}}function A3(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function C3(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function M1(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function E1(){let t=[],e=0,n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(h,p,f,g,y,m){let u=t[e];return u===void 0?(u={id:h.id,object:h,geometry:p,material:f,groupOrder:g,renderOrder:h.renderOrder,z:y,group:m},t[e]=u):(u.id=h.id,u.object=h,u.geometry=p,u.material=f,u.groupOrder=g,u.renderOrder=h.renderOrder,u.z=y,u.group=m),e++,u}function a(h,p,f,g,y,m){let u=o(h,p,f,g,y,m);f.transmission>0?i.push(u):f.transparent===!0?r.push(u):n.push(u)}function l(h,p,f,g,y,m){let u=o(h,p,f,g,y,m);f.transmission>0?i.unshift(u):f.transparent===!0?r.unshift(u):n.unshift(u)}function c(h,p){n.length>1&&n.sort(h||C3),i.length>1&&i.sort(p||M1),r.length>1&&r.sort(p||M1)}function d(){for(let h=e,p=t.length;h<p;h++){let f=t[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:d,sort:c}}function R3(){let t=new WeakMap;function e(i,r){let s=t.get(i),o;return s===void 0?(o=new E1,t.set(i,[o])):r>=s.length?(o=new E1,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function P3(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new z,color:new Ge};break;case"SpotLight":n={position:new z,direction:new z,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new z,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":n={direction:new z,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":n={color:new Ge,position:new z,halfWidth:new z,halfHeight:new z};break}return t[e.id]=n,n}}}function L3(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}var I3=0;function k3(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function N3(t,e){let n=new P3,i=L3(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new z);let s=new z,o=new zt,a=new zt;function l(d,h){let p=0,f=0,g=0;for(let W=0;W<9;W++)r.probe[W].set(0,0,0);let y=0,m=0,u=0,x=0,v=0,_=0,E=0,M=0,T=0,R=0,S=0;d.sort(k3);let A=h===!0?Math.PI:1;for(let W=0,X=d.length;W<X;W++){let L=d[W],D=L.color,O=L.intensity,F=L.distance,G=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)p+=D.r*O*A,f+=D.g*O*A,g+=D.b*O*A;else if(L.isLightProbe){for(let ie=0;ie<9;ie++)r.probe[ie].addScaledVector(L.sh.coefficients[ie],O);S++}else if(L.isDirectionalLight){let ie=n.get(L);if(ie.color.copy(L.color).multiplyScalar(L.intensity*A),L.castShadow){let re=L.shadow,J=i.get(L);J.shadowBias=re.bias,J.shadowNormalBias=re.normalBias,J.shadowRadius=re.radius,J.shadowMapSize=re.mapSize,r.directionalShadow[y]=J,r.directionalShadowMap[y]=G,r.directionalShadowMatrix[y]=L.shadow.matrix,_++}r.directional[y]=ie,y++}else if(L.isSpotLight){let ie=n.get(L);ie.position.setFromMatrixPosition(L.matrixWorld),ie.color.copy(D).multiplyScalar(O*A),ie.distance=F,ie.coneCos=Math.cos(L.angle),ie.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),ie.decay=L.decay,r.spot[u]=ie;let re=L.shadow;if(L.map&&(r.spotLightMap[T]=L.map,T++,re.updateMatrices(L),L.castShadow&&R++),r.spotLightMatrix[u]=re.matrix,L.castShadow){let J=i.get(L);J.shadowBias=re.bias,J.shadowNormalBias=re.normalBias,J.shadowRadius=re.radius,J.shadowMapSize=re.mapSize,r.spotShadow[u]=J,r.spotShadowMap[u]=G,M++}u++}else if(L.isRectAreaLight){let ie=n.get(L);ie.color.copy(D).multiplyScalar(O),ie.halfWidth.set(L.width*.5,0,0),ie.halfHeight.set(0,L.height*.5,0),r.rectArea[x]=ie,x++}else if(L.isPointLight){let ie=n.get(L);if(ie.color.copy(L.color).multiplyScalar(L.intensity*A),ie.distance=L.distance,ie.decay=L.decay,L.castShadow){let re=L.shadow,J=i.get(L);J.shadowBias=re.bias,J.shadowNormalBias=re.normalBias,J.shadowRadius=re.radius,J.shadowMapSize=re.mapSize,J.shadowCameraNear=re.camera.near,J.shadowCameraFar=re.camera.far,r.pointShadow[m]=J,r.pointShadowMap[m]=G,r.pointShadowMatrix[m]=L.shadow.matrix,E++}r.point[m]=ie,m++}else if(L.isHemisphereLight){let ie=n.get(L);ie.skyColor.copy(L.color).multiplyScalar(O*A),ie.groundColor.copy(L.groundColor).multiplyScalar(O*A),r.hemi[v]=ie,v++}}x>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Te.LTC_FLOAT_1,r.rectAreaLTC2=Te.LTC_FLOAT_2):(r.rectAreaLTC1=Te.LTC_HALF_1,r.rectAreaLTC2=Te.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Te.LTC_FLOAT_1,r.rectAreaLTC2=Te.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Te.LTC_HALF_1,r.rectAreaLTC2=Te.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=p,r.ambient[1]=f,r.ambient[2]=g;let P=r.hash;(P.directionalLength!==y||P.pointLength!==m||P.spotLength!==u||P.rectAreaLength!==x||P.hemiLength!==v||P.numDirectionalShadows!==_||P.numPointShadows!==E||P.numSpotShadows!==M||P.numSpotMaps!==T||P.numLightProbes!==S)&&(r.directional.length=y,r.spot.length=u,r.rectArea.length=x,r.point.length=m,r.hemi.length=v,r.directionalShadow.length=_,r.directionalShadowMap.length=_,r.pointShadow.length=E,r.pointShadowMap.length=E,r.spotShadow.length=M,r.spotShadowMap.length=M,r.directionalShadowMatrix.length=_,r.pointShadowMatrix.length=E,r.spotLightMatrix.length=M+T-R,r.spotLightMap.length=T,r.numSpotLightShadowsWithMaps=R,r.numLightProbes=S,P.directionalLength=y,P.pointLength=m,P.spotLength=u,P.rectAreaLength=x,P.hemiLength=v,P.numDirectionalShadows=_,P.numPointShadows=E,P.numSpotShadows=M,P.numSpotMaps=T,P.numLightProbes=S,r.version=I3++)}function c(d,h){let p=0,f=0,g=0,y=0,m=0,u=h.matrixWorldInverse;for(let x=0,v=d.length;x<v;x++){let _=d[x];if(_.isDirectionalLight){let E=r.directional[p];E.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(u),p++}else if(_.isSpotLight){let E=r.spot[g];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(u),E.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(u),g++}else if(_.isRectAreaLight){let E=r.rectArea[y];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(u),a.identity(),o.copy(_.matrixWorld),o.premultiply(u),a.extractRotation(o),E.halfWidth.set(_.width*.5,0,0),E.halfHeight.set(0,_.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),y++}else if(_.isPointLight){let E=r.point[f];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(u),f++}else if(_.isHemisphereLight){let E=r.hemi[m];E.direction.setFromMatrixPosition(_.matrixWorld),E.direction.transformDirection(u),m++}}}return{setup:l,setupView:c,state:r}}function T1(t,e){let n=new N3(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(h){i.push(h)}function a(h){r.push(h)}function l(h){n.setup(i,h)}function c(h){n.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function D3(t,e){let n=new WeakMap;function i(s,o=0){let a=n.get(s),l;return a===void 0?(l=new T1(t,e),n.set(s,[l])):o>=a.length?(l=new T1(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}var hm=class extends Is{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=V2,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},pm=class extends Is{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},U3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,O3=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function F3(t,e,n){let i=new Ml,r=new xe,s=new xe,o=new $t,a=new hm({depthPacking:G2}),l=new pm,c={},d=n.maxTextureSize,h={[Yr]:Jt,[Jt]:Yr,[mn]:mn},p=new Ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xe},radius:{value:4}},vertexShader:U3,fragmentShader:O3}),f=p.clone();f.defines.HORIZONTAL_PASS=1;let g=new Ht;g.setAttribute("position",new Bt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Ne(g,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=N1;let u=this.type;this.render=function(M,T,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;let S=t.getRenderTarget(),A=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),W=t.state;W.setBlending(Wr),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);let X=u!==lr&&this.type===lr,L=u===lr&&this.type!==lr;for(let D=0,O=M.length;D<O;D++){let F=M[D],G=F.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",F,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);let ie=G.getFrameExtents();if(r.multiply(ie),s.copy(G.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/ie.x),r.x=s.x*ie.x,G.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/ie.y),r.y=s.y*ie.y,G.mapSize.y=s.y)),G.map===null||X===!0||L===!0){let J=this.type!==lr?{minFilter:bn,magFilter:bn}:{};G.map!==null&&G.map.dispose(),G.map=new hr(r.x,r.y,J),G.map.texture.name=F.name+".shadowMap",G.camera.updateProjectionMatrix()}t.setRenderTarget(G.map),t.clear();let re=G.getViewportCount();for(let J=0;J<re;J++){let de=G.getViewport(J);o.set(s.x*de.x,s.y*de.y,s.x*de.z,s.y*de.w),W.viewport(o),G.updateMatrices(F,J),i=G.getFrustum(),_(T,R,G.camera,F,this.type)}G.isPointLightShadow!==!0&&this.type===lr&&x(G,R),G.needsUpdate=!1}u=this.type,m.needsUpdate=!1,t.setRenderTarget(S,A,P)};function x(M,T){let R=e.update(y);p.defines.VSM_SAMPLES!==M.blurSamples&&(p.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,p.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new hr(r.x,r.y)),p.uniforms.shadow_pass.value=M.map.texture,p.uniforms.resolution.value=M.mapSize,p.uniforms.radius.value=M.radius,t.setRenderTarget(M.mapPass),t.clear(),t.renderBufferDirect(T,null,R,p,y,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value=M.mapSize,f.uniforms.radius.value=M.radius,t.setRenderTarget(M.map),t.clear(),t.renderBufferDirect(T,null,R,f,y,null)}function v(M,T,R,S){let A=null,P=R.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(P!==void 0)A=P;else if(A=R.isPointLight===!0?l:a,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let W=A.uuid,X=T.uuid,L=c[W];L===void 0&&(L={},c[W]=L);let D=L[X];D===void 0&&(D=A.clone(),L[X]=D,T.addEventListener("dispose",E)),A=D}if(A.visible=T.visible,A.wireframe=T.wireframe,S===lr?A.side=T.shadowSide!==null?T.shadowSide:T.side:A.side=T.shadowSide!==null?T.shadowSide:h[T.side],A.alphaMap=T.alphaMap,A.alphaTest=T.alphaTest,A.map=T.map,A.clipShadows=T.clipShadows,A.clippingPlanes=T.clippingPlanes,A.clipIntersection=T.clipIntersection,A.displacementMap=T.displacementMap,A.displacementScale=T.displacementScale,A.displacementBias=T.displacementBias,A.wireframeLinewidth=T.wireframeLinewidth,A.linewidth=T.linewidth,R.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let W=t.properties.get(A);W.light=R}return A}function _(M,T,R,S,A){if(M.visible===!1)return;if(M.layers.test(T.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&A===lr)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,M.matrixWorld);let X=e.update(M),L=M.material;if(Array.isArray(L)){let D=X.groups;for(let O=0,F=D.length;O<F;O++){let G=D[O],ie=L[G.materialIndex];if(ie&&ie.visible){let re=v(M,ie,S,A);M.onBeforeShadow(t,M,T,R,X,re,G),t.renderBufferDirect(R,null,X,re,M,G),M.onAfterShadow(t,M,T,R,X,re,G)}}}else if(L.visible){let D=v(M,L,S,A);M.onBeforeShadow(t,M,T,R,X,D,null),t.renderBufferDirect(R,null,X,D,M,null),M.onAfterShadow(t,M,T,R,X,D,null)}}let W=M.children;for(let X=0,L=W.length;X<L;X++)_(W[X],T,R,S,A)}function E(M){M.target.removeEventListener("dispose",E);for(let R in c){let S=c[R],A=M.target.uuid;A in S&&(S[A].dispose(),delete S[A])}}}function z3(t,e,n){let i=n.isWebGL2;function r(){let U=!1,ve=new $t,me=null,De=new $t(0,0,0,0);return{setMask:function(Ae){me!==Ae&&!U&&(t.colorMask(Ae,Ae,Ae,Ae),me=Ae)},setLocked:function(Ae){U=Ae},setClear:function(Ae,He,et,ct,wt){wt===!0&&(Ae*=ct,He*=ct,et*=ct),ve.set(Ae,He,et,ct),De.equals(ve)===!1&&(t.clearColor(Ae,He,et,ct),De.copy(ve))},reset:function(){U=!1,me=null,De.set(-1,0,0,0)}}}function s(){let U=!1,ve=null,me=null,De=null;return{setTest:function(Ae){Ae?Oe(t.DEPTH_TEST):Pe(t.DEPTH_TEST)},setMask:function(Ae){ve!==Ae&&!U&&(t.depthMask(Ae),ve=Ae)},setFunc:function(Ae){if(me!==Ae){switch(Ae){case y2:t.depthFunc(t.NEVER);break;case _2:t.depthFunc(t.ALWAYS);break;case b2:t.depthFunc(t.LESS);break;case Wd:t.depthFunc(t.LEQUAL);break;case w2:t.depthFunc(t.EQUAL);break;case S2:t.depthFunc(t.GEQUAL);break;case M2:t.depthFunc(t.GREATER);break;case E2:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}me=Ae}},setLocked:function(Ae){U=Ae},setClear:function(Ae){De!==Ae&&(t.clearDepth(Ae),De=Ae)},reset:function(){U=!1,ve=null,me=null,De=null}}}function o(){let U=!1,ve=null,me=null,De=null,Ae=null,He=null,et=null,ct=null,wt=null;return{setTest:function(Je){U||(Je?Oe(t.STENCIL_TEST):Pe(t.STENCIL_TEST))},setMask:function(Je){ve!==Je&&!U&&(t.stencilMask(Je),ve=Je)},setFunc:function(Je,dt,on){(me!==Je||De!==dt||Ae!==on)&&(t.stencilFunc(Je,dt,on),me=Je,De=dt,Ae=on)},setOp:function(Je,dt,on){(He!==Je||et!==dt||ct!==on)&&(t.stencilOp(Je,dt,on),He=Je,et=dt,ct=on)},setLocked:function(Je){U=Je},setClear:function(Je){wt!==Je&&(t.clearStencil(Je),wt=Je)},reset:function(){U=!1,ve=null,me=null,De=null,Ae=null,He=null,et=null,ct=null,wt=null}}}let a=new r,l=new s,c=new o,d=new WeakMap,h=new WeakMap,p={},f={},g=new WeakMap,y=[],m=null,u=!1,x=null,v=null,_=null,E=null,M=null,T=null,R=null,S=new Ge(0,0,0),A=0,P=!1,W=null,X=null,L=null,D=null,O=null,F=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,ie=0,re=t.getParameter(t.VERSION);re.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(re)[1]),G=ie>=1):re.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),G=ie>=2);let J=null,de={},Z=t.getParameter(t.SCISSOR_BOX),ae=t.getParameter(t.VIEWPORT),we=new $t().fromArray(Z),Ie=new $t().fromArray(ae);function Re(U,ve,me,De){let Ae=new Uint8Array(4),He=t.createTexture();t.bindTexture(U,He),t.texParameteri(U,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(U,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let et=0;et<me;et++)i&&(U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY)?t.texImage3D(ve,0,t.RGBA,1,1,De,0,t.RGBA,t.UNSIGNED_BYTE,Ae):t.texImage2D(ve+et,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Ae);return He}let Ue={};Ue[t.TEXTURE_2D]=Re(t.TEXTURE_2D,t.TEXTURE_2D,1),Ue[t.TEXTURE_CUBE_MAP]=Re(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Ue[t.TEXTURE_2D_ARRAY]=Re(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Ue[t.TEXTURE_3D]=Re(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Oe(t.DEPTH_TEST),l.setFunc(Wd),le(!1),w(sy),Oe(t.CULL_FACE),H(Wr);function Oe(U){p[U]!==!0&&(t.enable(U),p[U]=!0)}function Pe(U){p[U]!==!1&&(t.disable(U),p[U]=!1)}function ze(U,ve){return f[U]!==ve?(t.bindFramebuffer(U,ve),f[U]=ve,i&&(U===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=ve),U===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=ve)),!0):!1}function N(U,ve){let me=y,De=!1;if(U)if(me=g.get(ve),me===void 0&&(me=[],g.set(ve,me)),U.isWebGLMultipleRenderTargets){let Ae=U.texture;if(me.length!==Ae.length||me[0]!==t.COLOR_ATTACHMENT0){for(let He=0,et=Ae.length;He<et;He++)me[He]=t.COLOR_ATTACHMENT0+He;me.length=Ae.length,De=!0}}else me[0]!==t.COLOR_ATTACHMENT0&&(me[0]=t.COLOR_ATTACHMENT0,De=!0);else me[0]!==t.BACK&&(me[0]=t.BACK,De=!0);De&&(n.isWebGL2?t.drawBuffers(me):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(me))}function $(U){return m!==U?(t.useProgram(U),m=U,!0):!1}let B={[Ts]:t.FUNC_ADD,[r2]:t.FUNC_SUBTRACT,[s2]:t.FUNC_REVERSE_SUBTRACT};if(i)B[cy]=t.MIN,B[dy]=t.MAX;else{let U=e.get("EXT_blend_minmax");U!==null&&(B[cy]=U.MIN_EXT,B[dy]=U.MAX_EXT)}let se={[o2]:t.ZERO,[a2]:t.ONE,[l2]:t.SRC_COLOR,[Xf]:t.SRC_ALPHA,[f2]:t.SRC_ALPHA_SATURATE,[h2]:t.DST_COLOR,[d2]:t.DST_ALPHA,[c2]:t.ONE_MINUS_SRC_COLOR,[qf]:t.ONE_MINUS_SRC_ALPHA,[p2]:t.ONE_MINUS_DST_COLOR,[u2]:t.ONE_MINUS_DST_ALPHA,[m2]:t.CONSTANT_COLOR,[g2]:t.ONE_MINUS_CONSTANT_COLOR,[v2]:t.CONSTANT_ALPHA,[x2]:t.ONE_MINUS_CONSTANT_ALPHA};function H(U,ve,me,De,Ae,He,et,ct,wt,Je){if(U===Wr){u===!0&&(Pe(t.BLEND),u=!1);return}if(u===!1&&(Oe(t.BLEND),u=!0),U!==i2){if(U!==x||Je!==P){if((v!==Ts||M!==Ts)&&(t.blendEquation(t.FUNC_ADD),v=Ts,M=Ts),Je)switch(U){case Wo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case oy:t.blendFunc(t.ONE,t.ONE);break;case ay:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case ly:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Wo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case oy:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case ay:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case ly:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}_=null,E=null,T=null,R=null,S.set(0,0,0),A=0,x=U,P=Je}return}Ae=Ae||ve,He=He||me,et=et||De,(ve!==v||Ae!==M)&&(t.blendEquationSeparate(B[ve],B[Ae]),v=ve,M=Ae),(me!==_||De!==E||He!==T||et!==R)&&(t.blendFuncSeparate(se[me],se[De],se[He],se[et]),_=me,E=De,T=He,R=et),(ct.equals(S)===!1||wt!==A)&&(t.blendColor(ct.r,ct.g,ct.b,wt),S.copy(ct),A=wt),x=U,P=!1}function ge(U,ve){U.side===mn?Pe(t.CULL_FACE):Oe(t.CULL_FACE);let me=U.side===Jt;ve&&(me=!me),le(me),U.blending===Wo&&U.transparent===!1?H(Wr):H(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),l.setFunc(U.depthFunc),l.setTest(U.depthTest),l.setMask(U.depthWrite),a.setMask(U.colorWrite);let De=U.stencilWrite;c.setTest(De),De&&(c.setMask(U.stencilWriteMask),c.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),c.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),I(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Oe(t.SAMPLE_ALPHA_TO_COVERAGE):Pe(t.SAMPLE_ALPHA_TO_COVERAGE)}function le(U){W!==U&&(U?t.frontFace(t.CW):t.frontFace(t.CCW),W=U)}function w(U){U!==e2?(Oe(t.CULL_FACE),U!==X&&(U===sy?t.cullFace(t.BACK):U===t2?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Pe(t.CULL_FACE),X=U}function b(U){U!==L&&(G&&t.lineWidth(U),L=U)}function I(U,ve,me){U?(Oe(t.POLYGON_OFFSET_FILL),(D!==ve||O!==me)&&(t.polygonOffset(ve,me),D=ve,O=me)):Pe(t.POLYGON_OFFSET_FILL)}function j(U){U?Oe(t.SCISSOR_TEST):Pe(t.SCISSOR_TEST)}function oe(U){U===void 0&&(U=t.TEXTURE0+F-1),J!==U&&(t.activeTexture(U),J=U)}function ee(U,ve,me){me===void 0&&(J===null?me=t.TEXTURE0+F-1:me=J);let De=de[me];De===void 0&&(De={type:void 0,texture:void 0},de[me]=De),(De.type!==U||De.texture!==ve)&&(J!==me&&(t.activeTexture(me),J=me),t.bindTexture(U,ve||Ue[U]),De.type=U,De.texture=ve)}function _e(){let U=de[J];U!==void 0&&U.type!==void 0&&(t.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function ue(){try{t.compressedTexImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function k(){try{t.compressedTexImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function q(){try{t.texSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function he(){try{t.texSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function te(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function be(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Me(){try{t.texStorage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ce(){try{t.texStorage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Se(){try{t.texImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ye(){try{t.texImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ee(U){we.equals(U)===!1&&(t.scissor(U.x,U.y,U.z,U.w),we.copy(U))}function $e(U){Ie.equals(U)===!1&&(t.viewport(U.x,U.y,U.z,U.w),Ie.copy(U))}function nt(U,ve){let me=h.get(ve);me===void 0&&(me=new WeakMap,h.set(ve,me));let De=me.get(U);De===void 0&&(De=t.getUniformBlockIndex(ve,U.name),me.set(U,De))}function Be(U,ve){let De=h.get(ve).get(U);d.get(ve)!==De&&(t.uniformBlockBinding(ve,De,U.__bindingPointIndex),d.set(ve,De))}function pe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),p={},J=null,de={},f={},g=new WeakMap,y=[],m=null,u=!1,x=null,v=null,_=null,E=null,M=null,T=null,R=null,S=new Ge(0,0,0),A=0,P=!1,W=null,X=null,L=null,D=null,O=null,we.set(0,0,t.canvas.width,t.canvas.height),Ie.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Oe,disable:Pe,bindFramebuffer:ze,drawBuffers:N,useProgram:$,setBlending:H,setMaterial:ge,setFlipSided:le,setCullFace:w,setLineWidth:b,setPolygonOffset:I,setScissorTest:j,activeTexture:oe,bindTexture:ee,unbindTexture:_e,compressedTexImage2D:ue,compressedTexImage3D:k,texImage2D:Se,texImage3D:ye,updateUBOMapping:nt,uniformBlockBinding:Be,texStorage2D:Me,texStorage3D:Ce,texSubImage2D:q,texSubImage3D:he,compressedTexSubImage2D:te,compressedTexSubImage3D:be,scissor:Ee,viewport:$e,reset:pe}}function B3(t,e,n,i,r,s,o){let a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new WeakMap,h,p=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,b){return f?new OffscreenCanvas(w,b):wl("canvas")}function y(w,b,I,j){let oe=1;if((w.width>j||w.height>j)&&(oe=j/Math.max(w.width,w.height)),oe<1||b===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){let ee=b?em:Math.floor,_e=ee(oe*w.width),ue=ee(oe*w.height);h===void 0&&(h=g(_e,ue));let k=I?g(_e,ue):h;return k.width=_e,k.height=ue,k.getContext("2d").drawImage(w,0,0,_e,ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+_e+"x"+ue+")."),k}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function m(w){return Gy(w.width)&&Gy(w.height)}function u(w){return a?!1:w.wrapS!==Si||w.wrapT!==Si||w.minFilter!==bn&&w.minFilter!==ii}function x(w,b){return w.generateMipmaps&&b&&w.minFilter!==bn&&w.minFilter!==ii}function v(w){t.generateMipmap(w)}function _(w,b,I,j,oe=!1){if(a===!1)return b;if(w!==null){if(t[w]!==void 0)return t[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ee=b;if(b===t.RED&&(I===t.FLOAT&&(ee=t.R32F),I===t.HALF_FLOAT&&(ee=t.R16F),I===t.UNSIGNED_BYTE&&(ee=t.R8)),b===t.RED_INTEGER&&(I===t.UNSIGNED_BYTE&&(ee=t.R8UI),I===t.UNSIGNED_SHORT&&(ee=t.R16UI),I===t.UNSIGNED_INT&&(ee=t.R32UI),I===t.BYTE&&(ee=t.R8I),I===t.SHORT&&(ee=t.R16I),I===t.INT&&(ee=t.R32I)),b===t.RG&&(I===t.FLOAT&&(ee=t.RG32F),I===t.HALF_FLOAT&&(ee=t.RG16F),I===t.UNSIGNED_BYTE&&(ee=t.RG8)),b===t.RGBA){let _e=oe?qd:ut.getTransfer(j);I===t.FLOAT&&(ee=t.RGBA32F),I===t.HALF_FLOAT&&(ee=t.RGBA16F),I===t.UNSIGNED_BYTE&&(ee=_e===xt?t.SRGB8_ALPHA8:t.RGBA8),I===t.UNSIGNED_SHORT_4_4_4_4&&(ee=t.RGBA4),I===t.UNSIGNED_SHORT_5_5_5_1&&(ee=t.RGB5_A1)}return(ee===t.R16F||ee===t.R32F||ee===t.RG16F||ee===t.RG32F||ee===t.RGBA16F||ee===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function E(w,b,I){return x(w,I)===!0||w.isFramebufferTexture&&w.minFilter!==bn&&w.minFilter!==ii?Math.log2(Math.max(b.width,b.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?b.mipmaps.length:1}function M(w){return w===bn||w===uy||w===uf?t.NEAREST:t.LINEAR}function T(w){let b=w.target;b.removeEventListener("dispose",T),S(b),b.isVideoTexture&&d.delete(b)}function R(w){let b=w.target;b.removeEventListener("dispose",R),P(b)}function S(w){let b=i.get(w);if(b.__webglInit===void 0)return;let I=w.source,j=p.get(I);if(j){let oe=j[b.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&A(w),Object.keys(j).length===0&&p.delete(I)}i.remove(w)}function A(w){let b=i.get(w);t.deleteTexture(b.__webglTexture);let I=w.source,j=p.get(I);delete j[b.__cacheKey],o.memory.textures--}function P(w){let b=w.texture,I=i.get(w),j=i.get(b);if(j.__webglTexture!==void 0&&(t.deleteTexture(j.__webglTexture),o.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(I.__webglFramebuffer[oe]))for(let ee=0;ee<I.__webglFramebuffer[oe].length;ee++)t.deleteFramebuffer(I.__webglFramebuffer[oe][ee]);else t.deleteFramebuffer(I.__webglFramebuffer[oe]);I.__webglDepthbuffer&&t.deleteRenderbuffer(I.__webglDepthbuffer[oe])}else{if(Array.isArray(I.__webglFramebuffer))for(let oe=0;oe<I.__webglFramebuffer.length;oe++)t.deleteFramebuffer(I.__webglFramebuffer[oe]);else t.deleteFramebuffer(I.__webglFramebuffer);if(I.__webglDepthbuffer&&t.deleteRenderbuffer(I.__webglDepthbuffer),I.__webglMultisampledFramebuffer&&t.deleteFramebuffer(I.__webglMultisampledFramebuffer),I.__webglColorRenderbuffer)for(let oe=0;oe<I.__webglColorRenderbuffer.length;oe++)I.__webglColorRenderbuffer[oe]&&t.deleteRenderbuffer(I.__webglColorRenderbuffer[oe]);I.__webglDepthRenderbuffer&&t.deleteRenderbuffer(I.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let oe=0,ee=b.length;oe<ee;oe++){let _e=i.get(b[oe]);_e.__webglTexture&&(t.deleteTexture(_e.__webglTexture),o.memory.textures--),i.remove(b[oe])}i.remove(b),i.remove(w)}let W=0;function X(){W=0}function L(){let w=W;return w>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),W+=1,w}function D(w){let b=[];return b.push(w.wrapS),b.push(w.wrapT),b.push(w.wrapR||0),b.push(w.magFilter),b.push(w.minFilter),b.push(w.anisotropy),b.push(w.internalFormat),b.push(w.format),b.push(w.type),b.push(w.generateMipmaps),b.push(w.premultiplyAlpha),b.push(w.flipY),b.push(w.unpackAlignment),b.push(w.colorSpace),b.join()}function O(w,b){let I=i.get(w);if(w.isVideoTexture&&ge(w),w.isRenderTargetTexture===!1&&w.version>0&&I.__version!==w.version){let j=w.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{we(I,w,b);return}}n.bindTexture(t.TEXTURE_2D,I.__webglTexture,t.TEXTURE0+b)}function F(w,b){let I=i.get(w);if(w.version>0&&I.__version!==w.version){we(I,w,b);return}n.bindTexture(t.TEXTURE_2D_ARRAY,I.__webglTexture,t.TEXTURE0+b)}function G(w,b){let I=i.get(w);if(w.version>0&&I.__version!==w.version){we(I,w,b);return}n.bindTexture(t.TEXTURE_3D,I.__webglTexture,t.TEXTURE0+b)}function ie(w,b){let I=i.get(w);if(w.version>0&&I.__version!==w.version){Ie(I,w,b);return}n.bindTexture(t.TEXTURE_CUBE_MAP,I.__webglTexture,t.TEXTURE0+b)}let re={[Jf]:t.REPEAT,[Si]:t.CLAMP_TO_EDGE,[Zf]:t.MIRRORED_REPEAT},J={[bn]:t.NEAREST,[uy]:t.NEAREST_MIPMAP_NEAREST,[uf]:t.NEAREST_MIPMAP_LINEAR,[ii]:t.LINEAR,[k2]:t.LINEAR_MIPMAP_NEAREST,[_l]:t.LINEAR_MIPMAP_LINEAR},de={[j2]:t.NEVER,[Z2]:t.ALWAYS,[X2]:t.LESS,[X1]:t.LEQUAL,[q2]:t.EQUAL,[J2]:t.GEQUAL,[Y2]:t.GREATER,[$2]:t.NOTEQUAL};function Z(w,b,I){if(I?(t.texParameteri(w,t.TEXTURE_WRAP_S,re[b.wrapS]),t.texParameteri(w,t.TEXTURE_WRAP_T,re[b.wrapT]),(w===t.TEXTURE_3D||w===t.TEXTURE_2D_ARRAY)&&t.texParameteri(w,t.TEXTURE_WRAP_R,re[b.wrapR]),t.texParameteri(w,t.TEXTURE_MAG_FILTER,J[b.magFilter]),t.texParameteri(w,t.TEXTURE_MIN_FILTER,J[b.minFilter])):(t.texParameteri(w,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(w,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(w===t.TEXTURE_3D||w===t.TEXTURE_2D_ARRAY)&&t.texParameteri(w,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(b.wrapS!==Si||b.wrapT!==Si)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(w,t.TEXTURE_MAG_FILTER,M(b.magFilter)),t.texParameteri(w,t.TEXTURE_MIN_FILTER,M(b.minFilter)),b.minFilter!==bn&&b.minFilter!==ii&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(t.texParameteri(w,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(w,t.TEXTURE_COMPARE_FUNC,de[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let j=e.get("EXT_texture_filter_anisotropic");if(b.magFilter===bn||b.minFilter!==uf&&b.minFilter!==_l||b.type===Gr&&e.has("OES_texture_float_linear")===!1||a===!1&&b.type===bl&&e.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||i.get(b).__currentAnisotropy)&&(t.texParameterf(w,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy)}}function ae(w,b){let I=!1;w.__webglInit===void 0&&(w.__webglInit=!0,b.addEventListener("dispose",T));let j=b.source,oe=p.get(j);oe===void 0&&(oe={},p.set(j,oe));let ee=D(b);if(ee!==w.__cacheKey){oe[ee]===void 0&&(oe[ee]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,I=!0),oe[ee].usedTimes++;let _e=oe[w.__cacheKey];_e!==void 0&&(oe[w.__cacheKey].usedTimes--,_e.usedTimes===0&&A(b)),w.__cacheKey=ee,w.__webglTexture=oe[ee].texture}return I}function we(w,b,I){let j=t.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(j=t.TEXTURE_2D_ARRAY),b.isData3DTexture&&(j=t.TEXTURE_3D);let oe=ae(w,b),ee=b.source;n.bindTexture(j,w.__webglTexture,t.TEXTURE0+I);let _e=i.get(ee);if(ee.version!==_e.__version||oe===!0){n.activeTexture(t.TEXTURE0+I);let ue=ut.getPrimaries(ut.workingColorSpace),k=b.colorSpace===ri?null:ut.getPrimaries(b.colorSpace),q=b.colorSpace===ri||ue===k?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,q);let he=u(b)&&m(b.image)===!1,te=y(b.image,he,!1,r.maxTextureSize);te=le(b,te);let be=m(te)||a,Me=s.convert(b.format,b.colorSpace),Ce=s.convert(b.type),Se=_(b.internalFormat,Me,Ce,b.colorSpace,b.isVideoTexture);Z(j,b,be);let ye,Ee=b.mipmaps,$e=a&&b.isVideoTexture!==!0&&Se!==G1,nt=_e.__version===void 0||oe===!0,Be=E(b,te,be);if(b.isDepthTexture)Se=t.DEPTH_COMPONENT,a?b.type===Gr?Se=t.DEPTH_COMPONENT32F:b.type===Vr?Se=t.DEPTH_COMPONENT24:b.type===Cs?Se=t.DEPTH24_STENCIL8:Se=t.DEPTH_COMPONENT16:b.type===Gr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===Rs&&Se===t.DEPTH_COMPONENT&&b.type!==Hm&&b.type!==Vr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=Vr,Ce=s.convert(b.type)),b.format===$o&&Se===t.DEPTH_COMPONENT&&(Se=t.DEPTH_STENCIL,b.type!==Cs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=Cs,Ce=s.convert(b.type))),nt&&($e?n.texStorage2D(t.TEXTURE_2D,1,Se,te.width,te.height):n.texImage2D(t.TEXTURE_2D,0,Se,te.width,te.height,0,Me,Ce,null));else if(b.isDataTexture)if(Ee.length>0&&be){$e&&nt&&n.texStorage2D(t.TEXTURE_2D,Be,Se,Ee[0].width,Ee[0].height);for(let pe=0,U=Ee.length;pe<U;pe++)ye=Ee[pe],$e?n.texSubImage2D(t.TEXTURE_2D,pe,0,0,ye.width,ye.height,Me,Ce,ye.data):n.texImage2D(t.TEXTURE_2D,pe,Se,ye.width,ye.height,0,Me,Ce,ye.data);b.generateMipmaps=!1}else $e?(nt&&n.texStorage2D(t.TEXTURE_2D,Be,Se,te.width,te.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,te.width,te.height,Me,Ce,te.data)):n.texImage2D(t.TEXTURE_2D,0,Se,te.width,te.height,0,Me,Ce,te.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){$e&&nt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Be,Se,Ee[0].width,Ee[0].height,te.depth);for(let pe=0,U=Ee.length;pe<U;pe++)ye=Ee[pe],b.format!==Mi?Me!==null?$e?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,pe,0,0,0,ye.width,ye.height,te.depth,Me,ye.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,pe,Se,ye.width,ye.height,te.depth,0,ye.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?n.texSubImage3D(t.TEXTURE_2D_ARRAY,pe,0,0,0,ye.width,ye.height,te.depth,Me,Ce,ye.data):n.texImage3D(t.TEXTURE_2D_ARRAY,pe,Se,ye.width,ye.height,te.depth,0,Me,Ce,ye.data)}else{$e&&nt&&n.texStorage2D(t.TEXTURE_2D,Be,Se,Ee[0].width,Ee[0].height);for(let pe=0,U=Ee.length;pe<U;pe++)ye=Ee[pe],b.format!==Mi?Me!==null?$e?n.compressedTexSubImage2D(t.TEXTURE_2D,pe,0,0,ye.width,ye.height,Me,ye.data):n.compressedTexImage2D(t.TEXTURE_2D,pe,Se,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?n.texSubImage2D(t.TEXTURE_2D,pe,0,0,ye.width,ye.height,Me,Ce,ye.data):n.texImage2D(t.TEXTURE_2D,pe,Se,ye.width,ye.height,0,Me,Ce,ye.data)}else if(b.isDataArrayTexture)$e?(nt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Be,Se,te.width,te.height,te.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,Me,Ce,te.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Se,te.width,te.height,te.depth,0,Me,Ce,te.data);else if(b.isData3DTexture)$e?(nt&&n.texStorage3D(t.TEXTURE_3D,Be,Se,te.width,te.height,te.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,Me,Ce,te.data)):n.texImage3D(t.TEXTURE_3D,0,Se,te.width,te.height,te.depth,0,Me,Ce,te.data);else if(b.isFramebufferTexture){if(nt)if($e)n.texStorage2D(t.TEXTURE_2D,Be,Se,te.width,te.height);else{let pe=te.width,U=te.height;for(let ve=0;ve<Be;ve++)n.texImage2D(t.TEXTURE_2D,ve,Se,pe,U,0,Me,Ce,null),pe>>=1,U>>=1}}else if(Ee.length>0&&be){$e&&nt&&n.texStorage2D(t.TEXTURE_2D,Be,Se,Ee[0].width,Ee[0].height);for(let pe=0,U=Ee.length;pe<U;pe++)ye=Ee[pe],$e?n.texSubImage2D(t.TEXTURE_2D,pe,0,0,Me,Ce,ye):n.texImage2D(t.TEXTURE_2D,pe,Se,Me,Ce,ye);b.generateMipmaps=!1}else $e?(nt&&n.texStorage2D(t.TEXTURE_2D,Be,Se,te.width,te.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Me,Ce,te)):n.texImage2D(t.TEXTURE_2D,0,Se,Me,Ce,te);x(b,be)&&v(j),_e.__version=ee.version,b.onUpdate&&b.onUpdate(b)}w.__version=b.version}function Ie(w,b,I){if(b.image.length!==6)return;let j=ae(w,b),oe=b.source;n.bindTexture(t.TEXTURE_CUBE_MAP,w.__webglTexture,t.TEXTURE0+I);let ee=i.get(oe);if(oe.version!==ee.__version||j===!0){n.activeTexture(t.TEXTURE0+I);let _e=ut.getPrimaries(ut.workingColorSpace),ue=b.colorSpace===ri?null:ut.getPrimaries(b.colorSpace),k=b.colorSpace===ri||_e===ue?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,k);let q=b.isCompressedTexture||b.image[0].isCompressedTexture,he=b.image[0]&&b.image[0].isDataTexture,te=[];for(let pe=0;pe<6;pe++)!q&&!he?te[pe]=y(b.image[pe],!1,!0,r.maxCubemapSize):te[pe]=he?b.image[pe].image:b.image[pe],te[pe]=le(b,te[pe]);let be=te[0],Me=m(be)||a,Ce=s.convert(b.format,b.colorSpace),Se=s.convert(b.type),ye=_(b.internalFormat,Ce,Se,b.colorSpace),Ee=a&&b.isVideoTexture!==!0,$e=ee.__version===void 0||j===!0,nt=E(b,be,Me);Z(t.TEXTURE_CUBE_MAP,b,Me);let Be;if(q){Ee&&$e&&n.texStorage2D(t.TEXTURE_CUBE_MAP,nt,ye,be.width,be.height);for(let pe=0;pe<6;pe++){Be=te[pe].mipmaps;for(let U=0;U<Be.length;U++){let ve=Be[U];b.format!==Mi?Ce!==null?Ee?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,U,0,0,ve.width,ve.height,Ce,ve.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,U,ye,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ee?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,U,0,0,ve.width,ve.height,Ce,Se,ve.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,U,ye,ve.width,ve.height,0,Ce,Se,ve.data)}}}else{Be=b.mipmaps,Ee&&$e&&(Be.length>0&&nt++,n.texStorage2D(t.TEXTURE_CUBE_MAP,nt,ye,te[0].width,te[0].height));for(let pe=0;pe<6;pe++)if(he){Ee?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,te[pe].width,te[pe].height,Ce,Se,te[pe].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ye,te[pe].width,te[pe].height,0,Ce,Se,te[pe].data);for(let U=0;U<Be.length;U++){let me=Be[U].image[pe].image;Ee?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,U+1,0,0,me.width,me.height,Ce,Se,me.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,U+1,ye,me.width,me.height,0,Ce,Se,me.data)}}else{Ee?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Ce,Se,te[pe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ye,Ce,Se,te[pe]);for(let U=0;U<Be.length;U++){let ve=Be[U];Ee?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,U+1,0,0,Ce,Se,ve.image[pe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,U+1,ye,Ce,Se,ve.image[pe])}}}x(b,Me)&&v(t.TEXTURE_CUBE_MAP),ee.__version=oe.version,b.onUpdate&&b.onUpdate(b)}w.__version=b.version}function Re(w,b,I,j,oe,ee){let _e=s.convert(I.format,I.colorSpace),ue=s.convert(I.type),k=_(I.internalFormat,_e,ue,I.colorSpace);if(!i.get(b).__hasExternalTextures){let he=Math.max(1,b.width>>ee),te=Math.max(1,b.height>>ee);oe===t.TEXTURE_3D||oe===t.TEXTURE_2D_ARRAY?n.texImage3D(oe,ee,k,he,te,b.depth,0,_e,ue,null):n.texImage2D(oe,ee,k,he,te,0,_e,ue,null)}n.bindFramebuffer(t.FRAMEBUFFER,w),H(b)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,j,oe,i.get(I).__webglTexture,0,se(b)):(oe===t.TEXTURE_2D||oe>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,j,oe,i.get(I).__webglTexture,ee),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ue(w,b,I){if(t.bindRenderbuffer(t.RENDERBUFFER,w),b.depthBuffer&&!b.stencilBuffer){let j=a===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(I||H(b)){let oe=b.depthTexture;oe&&oe.isDepthTexture&&(oe.type===Gr?j=t.DEPTH_COMPONENT32F:oe.type===Vr&&(j=t.DEPTH_COMPONENT24));let ee=se(b);H(b)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ee,j,b.width,b.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,ee,j,b.width,b.height)}else t.renderbufferStorage(t.RENDERBUFFER,j,b.width,b.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,w)}else if(b.depthBuffer&&b.stencilBuffer){let j=se(b);I&&H(b)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,j,t.DEPTH24_STENCIL8,b.width,b.height):H(b)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,j,t.DEPTH24_STENCIL8,b.width,b.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,w)}else{let j=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let oe=0;oe<j.length;oe++){let ee=j[oe],_e=s.convert(ee.format,ee.colorSpace),ue=s.convert(ee.type),k=_(ee.internalFormat,_e,ue,ee.colorSpace),q=se(b);I&&H(b)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,q,k,b.width,b.height):H(b)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,q,k,b.width,b.height):t.renderbufferStorage(t.RENDERBUFFER,k,b.width,b.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Oe(w,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,w),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),O(b.depthTexture,0);let j=i.get(b.depthTexture).__webglTexture,oe=se(b);if(b.depthTexture.format===Rs)H(b)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,j,0,oe):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,j,0);else if(b.depthTexture.format===$o)H(b)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,j,0,oe):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Pe(w){let b=i.get(w),I=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!b.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");Oe(b.__webglFramebuffer,w)}else if(I){b.__webglDepthbuffer=[];for(let j=0;j<6;j++)n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer[j]),b.__webglDepthbuffer[j]=t.createRenderbuffer(),Ue(b.__webglDepthbuffer[j],w,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=t.createRenderbuffer(),Ue(b.__webglDepthbuffer,w,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function ze(w,b,I){let j=i.get(w);b!==void 0&&Re(j.__webglFramebuffer,w,w.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),I!==void 0&&Pe(w)}function N(w){let b=w.texture,I=i.get(w),j=i.get(b);w.addEventListener("dispose",R),w.isWebGLMultipleRenderTargets!==!0&&(j.__webglTexture===void 0&&(j.__webglTexture=t.createTexture()),j.__version=b.version,o.memory.textures++);let oe=w.isWebGLCubeRenderTarget===!0,ee=w.isWebGLMultipleRenderTargets===!0,_e=m(w)||a;if(oe){I.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(a&&b.mipmaps&&b.mipmaps.length>0){I.__webglFramebuffer[ue]=[];for(let k=0;k<b.mipmaps.length;k++)I.__webglFramebuffer[ue][k]=t.createFramebuffer()}else I.__webglFramebuffer[ue]=t.createFramebuffer()}else{if(a&&b.mipmaps&&b.mipmaps.length>0){I.__webglFramebuffer=[];for(let ue=0;ue<b.mipmaps.length;ue++)I.__webglFramebuffer[ue]=t.createFramebuffer()}else I.__webglFramebuffer=t.createFramebuffer();if(ee)if(r.drawBuffers){let ue=w.texture;for(let k=0,q=ue.length;k<q;k++){let he=i.get(ue[k]);he.__webglTexture===void 0&&(he.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&w.samples>0&&H(w)===!1){let ue=ee?b:[b];I.__webglMultisampledFramebuffer=t.createFramebuffer(),I.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let k=0;k<ue.length;k++){let q=ue[k];I.__webglColorRenderbuffer[k]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,I.__webglColorRenderbuffer[k]);let he=s.convert(q.format,q.colorSpace),te=s.convert(q.type),be=_(q.internalFormat,he,te,q.colorSpace,w.isXRRenderTarget===!0),Me=se(w);t.renderbufferStorageMultisample(t.RENDERBUFFER,Me,be,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+k,t.RENDERBUFFER,I.__webglColorRenderbuffer[k])}t.bindRenderbuffer(t.RENDERBUFFER,null),w.depthBuffer&&(I.__webglDepthRenderbuffer=t.createRenderbuffer(),Ue(I.__webglDepthRenderbuffer,w,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(oe){n.bindTexture(t.TEXTURE_CUBE_MAP,j.__webglTexture),Z(t.TEXTURE_CUBE_MAP,b,_e);for(let ue=0;ue<6;ue++)if(a&&b.mipmaps&&b.mipmaps.length>0)for(let k=0;k<b.mipmaps.length;k++)Re(I.__webglFramebuffer[ue][k],w,b,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,k);else Re(I.__webglFramebuffer[ue],w,b,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);x(b,_e)&&v(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ee){let ue=w.texture;for(let k=0,q=ue.length;k<q;k++){let he=ue[k],te=i.get(he);n.bindTexture(t.TEXTURE_2D,te.__webglTexture),Z(t.TEXTURE_2D,he,_e),Re(I.__webglFramebuffer,w,he,t.COLOR_ATTACHMENT0+k,t.TEXTURE_2D,0),x(he,_e)&&v(t.TEXTURE_2D)}n.unbindTexture()}else{let ue=t.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(a?ue=w.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(ue,j.__webglTexture),Z(ue,b,_e),a&&b.mipmaps&&b.mipmaps.length>0)for(let k=0;k<b.mipmaps.length;k++)Re(I.__webglFramebuffer[k],w,b,t.COLOR_ATTACHMENT0,ue,k);else Re(I.__webglFramebuffer,w,b,t.COLOR_ATTACHMENT0,ue,0);x(b,_e)&&v(ue),n.unbindTexture()}w.depthBuffer&&Pe(w)}function $(w){let b=m(w)||a,I=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let j=0,oe=I.length;j<oe;j++){let ee=I[j];if(x(ee,b)){let _e=w.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,ue=i.get(ee).__webglTexture;n.bindTexture(_e,ue),v(_e),n.unbindTexture()}}}function B(w){if(a&&w.samples>0&&H(w)===!1){let b=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],I=w.width,j=w.height,oe=t.COLOR_BUFFER_BIT,ee=[],_e=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=i.get(w),k=w.isWebGLMultipleRenderTargets===!0;if(k)for(let q=0;q<b.length;q++)n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+q,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+q,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let q=0;q<b.length;q++){ee.push(t.COLOR_ATTACHMENT0+q),w.depthBuffer&&ee.push(_e);let he=ue.__ignoreDepthValues!==void 0?ue.__ignoreDepthValues:!1;if(he===!1&&(w.depthBuffer&&(oe|=t.DEPTH_BUFFER_BIT),w.stencilBuffer&&(oe|=t.STENCIL_BUFFER_BIT)),k&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ue.__webglColorRenderbuffer[q]),he===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[_e]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[_e])),k){let te=i.get(b[q]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,te,0)}t.blitFramebuffer(0,0,I,j,0,0,I,j,oe,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ee)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),k)for(let q=0;q<b.length;q++){n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+q,t.RENDERBUFFER,ue.__webglColorRenderbuffer[q]);let he=i.get(b[q]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+q,t.TEXTURE_2D,he,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}}function se(w){return Math.min(r.maxSamples,w.samples)}function H(w){let b=i.get(w);return a&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ge(w){let b=o.render.frame;d.get(w)!==b&&(d.set(w,b),w.update())}function le(w,b){let I=w.colorSpace,j=w.format,oe=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===Kf||I!==ur&&I!==ri&&(ut.getTransfer(I)===xt?a===!1?e.has("EXT_sRGB")===!0&&j===Mi?(w.format=Kf,w.minFilter=ii,w.generateMipmaps=!1):b=Zd.sRGBToLinear(b):(j!==Mi||oe!==Xr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),b}this.allocateTextureUnit=L,this.resetTextureUnits=X,this.setTexture2D=O,this.setTexture2DArray=F,this.setTexture3D=G,this.setTextureCube=ie,this.rebindTextures=ze,this.setupRenderTarget=N,this.updateRenderTargetMipmap=$,this.updateMultisampleRenderTarget=B,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=Re,this.useMultisampledRTT=H}function H3(t,e,n){let i=n.isWebGL2;function r(s,o=ri){let a,l=ut.getTransfer(o);if(s===Xr)return t.UNSIGNED_BYTE;if(s===F1)return t.UNSIGNED_SHORT_4_4_4_4;if(s===z1)return t.UNSIGNED_SHORT_5_5_5_1;if(s===N2)return t.BYTE;if(s===D2)return t.SHORT;if(s===Hm)return t.UNSIGNED_SHORT;if(s===O1)return t.INT;if(s===Vr)return t.UNSIGNED_INT;if(s===Gr)return t.FLOAT;if(s===bl)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===U2)return t.ALPHA;if(s===Mi)return t.RGBA;if(s===O2)return t.LUMINANCE;if(s===F2)return t.LUMINANCE_ALPHA;if(s===Rs)return t.DEPTH_COMPONENT;if(s===$o)return t.DEPTH_STENCIL;if(s===Kf)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===z2)return t.RED;if(s===B1)return t.RED_INTEGER;if(s===B2)return t.RG;if(s===H1)return t.RG_INTEGER;if(s===V1)return t.RGBA_INTEGER;if(s===hf||s===pf||s===ff||s===mf)if(l===xt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===hf)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===pf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ff)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===mf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===hf)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===pf)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ff)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===mf)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===hy||s===py||s===fy||s===my)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===hy)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===py)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===fy)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===my)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===G1)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===gy||s===vy)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===gy)return l===xt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===vy)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===xy||s===yy||s===_y||s===by||s===wy||s===Sy||s===My||s===Ey||s===Ty||s===Ay||s===Cy||s===Ry||s===Py||s===Ly)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===xy)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===yy)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===_y)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===by)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===wy)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Sy)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===My)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ey)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ty)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ay)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Cy)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Ry)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Py)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ly)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===gf||s===Iy||s===ky)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===gf)return l===xt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Iy)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===ky)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===H2||s===Ny||s===Dy||s===Uy)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===gf)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Ny)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Dy)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Uy)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Cs?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}var fm=class extends wn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},ht=class extends Pn{constructor(){super(),this.isGroup=!0,this.type="Group"}},V3={type:"move"},vl=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ht,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ht,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ht,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let n=this._hand;if(n)for(let i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let y of e.hand.values()){let m=n.getJointPose(y,i),u=this._getHandJoint(c,y);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}let d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],p=d.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&p>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(V3)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){let i=new ht;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}},mm=class extends $r{constructor(e,n){super();let i=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,d=null,h=null,p=null,f=null,g=null,y=n.getContextAttributes(),m=null,u=null,x=[],v=[],_=new xe,E=null,M=new wn;M.layers.enable(1),M.viewport=new $t;let T=new wn;T.layers.enable(2),T.viewport=new $t;let R=[M,T],S=new fm;S.layers.enable(1),S.layers.enable(2);let A=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ae=x[Z];return ae===void 0&&(ae=new vl,x[Z]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(Z){let ae=x[Z];return ae===void 0&&(ae=new vl,x[Z]=ae),ae.getGripSpace()},this.getHand=function(Z){let ae=x[Z];return ae===void 0&&(ae=new vl,x[Z]=ae),ae.getHandSpace()};function W(Z){let ae=v.indexOf(Z.inputSource);if(ae===-1)return;let we=x[ae];we!==void 0&&(we.update(Z.inputSource,Z.frame,c||o),we.dispatchEvent({type:Z.type,data:Z.inputSource}))}function X(){r.removeEventListener("select",W),r.removeEventListener("selectstart",W),r.removeEventListener("selectend",W),r.removeEventListener("squeeze",W),r.removeEventListener("squeezestart",W),r.removeEventListener("squeezeend",W),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",L);for(let Z=0;Z<x.length;Z++){let ae=v[Z];ae!==null&&(v[Z]=null,x[Z].disconnect(ae))}A=null,P=null,e.setRenderTarget(m),f=null,p=null,h=null,r=null,u=null,de.stop(),i.isPresenting=!1,e.setPixelRatio(E),e.setSize(_.width,_.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return p!==null?p:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",W),r.addEventListener("selectstart",W),r.addEventListener("selectend",W),r.addEventListener("squeeze",W),r.addEventListener("squeezestart",W),r.addEventListener("squeezeend",W),r.addEventListener("end",X),r.addEventListener("inputsourceschange",L),y.xrCompatible!==!0&&await n.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(_),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let ae={antialias:r.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,n,ae),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),u=new hr(f.framebufferWidth,f.framebufferHeight,{format:Mi,type:Xr,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let ae=null,we=null,Ie=null;y.depth&&(Ie=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ae=y.stencil?$o:Rs,we=y.stencil?Cs:Vr);let Re={colorFormat:n.RGBA8,depthFormat:Ie,scaleFactor:s};h=new XRWebGLBinding(r,n),p=h.createProjectionLayer(Re),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),u=new hr(p.textureWidth,p.textureHeight,{format:Mi,type:Xr,depthTexture:new au(p.textureWidth,p.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});let Ue=e.properties.get(u);Ue.__ignoreDepthValues=p.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),de.setContext(r),de.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function L(Z){for(let ae=0;ae<Z.removed.length;ae++){let we=Z.removed[ae],Ie=v.indexOf(we);Ie>=0&&(v[Ie]=null,x[Ie].disconnect(we))}for(let ae=0;ae<Z.added.length;ae++){let we=Z.added[ae],Ie=v.indexOf(we);if(Ie===-1){for(let Ue=0;Ue<x.length;Ue++)if(Ue>=v.length){v.push(we),Ie=Ue;break}else if(v[Ue]===null){v[Ue]=we,Ie=Ue;break}if(Ie===-1)break}let Re=x[Ie];Re&&Re.connect(we)}}let D=new z,O=new z;function F(Z,ae,we){D.setFromMatrixPosition(ae.matrixWorld),O.setFromMatrixPosition(we.matrixWorld);let Ie=D.distanceTo(O),Re=ae.projectionMatrix.elements,Ue=we.projectionMatrix.elements,Oe=Re[14]/(Re[10]-1),Pe=Re[14]/(Re[10]+1),ze=(Re[9]+1)/Re[5],N=(Re[9]-1)/Re[5],$=(Re[8]-1)/Re[0],B=(Ue[8]+1)/Ue[0],se=Oe*$,H=Oe*B,ge=Ie/(-$+B),le=ge*-$;ae.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(le),Z.translateZ(ge),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert();let w=Oe+ge,b=Pe+ge,I=se-le,j=H+(Ie-le),oe=ze*Pe/b*w,ee=N*Pe/b*w;Z.projectionMatrix.makePerspective(I,j,oe,ee,w,b),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}function G(Z,ae){ae===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ae.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;S.near=T.near=M.near=Z.near,S.far=T.far=M.far=Z.far,(A!==S.near||P!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),A=S.near,P=S.far);let ae=Z.parent,we=S.cameras;G(S,ae);for(let Ie=0;Ie<we.length;Ie++)G(we[Ie],ae);we.length===2?F(S,M,T):S.projectionMatrix.copy(M.projectionMatrix),ie(Z,S,ae)};function ie(Z,ae,we){we===null?Z.matrix.copy(ae.matrixWorld):(Z.matrix.copy(we.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ae.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ae.projectionMatrix),Z.projectionMatrixInverse.copy(ae.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Qf*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(p===null&&f===null))return l},this.setFoveation=function(Z){l=Z,p!==null&&(p.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)};let re=null;function J(Z,ae){if(d=ae.getViewerPose(c||o),g=ae,d!==null){let we=d.views;f!==null&&(e.setRenderTargetFramebuffer(u,f.framebuffer),e.setRenderTarget(u));let Ie=!1;we.length!==S.cameras.length&&(S.cameras.length=0,Ie=!0);for(let Re=0;Re<we.length;Re++){let Ue=we[Re],Oe=null;if(f!==null)Oe=f.getViewport(Ue);else{let ze=h.getViewSubImage(p,Ue);Oe=ze.viewport,Re===0&&(e.setRenderTargetTextures(u,ze.colorTexture,p.ignoreDepthValues?void 0:ze.depthStencilTexture),e.setRenderTarget(u))}let Pe=R[Re];Pe===void 0&&(Pe=new wn,Pe.layers.enable(Re),Pe.viewport=new $t,R[Re]=Pe),Pe.matrix.fromArray(Ue.transform.matrix),Pe.matrix.decompose(Pe.position,Pe.quaternion,Pe.scale),Pe.projectionMatrix.fromArray(Ue.projectionMatrix),Pe.projectionMatrixInverse.copy(Pe.projectionMatrix).invert(),Pe.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),Re===0&&(S.matrix.copy(Pe.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),Ie===!0&&S.cameras.push(Pe)}}for(let we=0;we<x.length;we++){let Ie=v[we],Re=x[we];Ie!==null&&Re!==void 0&&Re.update(Ie,ae,c||o)}re&&re(Z,ae),ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ae}),g=null}let de=new J1;de.setAnimationLoop(J),this.setAnimationLoop=function(Z){re=Z},this.dispose=function(){}}};function G3(t,e){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,$1(t)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,x,v,_){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),h(m,u)):u.isMeshPhongMaterial?(s(m,u),d(m,u)):u.isMeshStandardMaterial?(s(m,u),p(m,u),u.isMeshPhysicalMaterial&&f(m,u,_)):u.isMeshMatcapMaterial?(s(m,u),g(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),y(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?l(m,u,x,v):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===Jt&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===Jt&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);let x=e.get(u).envMap;if(x&&(m.envMap.value=x,m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap){m.lightMap.value=u.lightMap;let v=t._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=u.lightMapIntensity*v,n(u.lightMap,m.lightMapTransform)}u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,x,v){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*x,m.scale.value=v*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function d(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function h(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function p(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),e.get(u).envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function f(m,u,x){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Jt&&m.clearcoatNormalScale.value.negate())),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function y(m,u){let x=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function W3(t,e,n,i){let r={},s={},o=[],a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(x,v){let _=v.program;i.uniformBlockBinding(x,_)}function c(x,v){let _=r[x.id];_===void 0&&(g(x),_=d(x),r[x.id]=_,x.addEventListener("dispose",m));let E=v.program;i.updateUBOMapping(x,E);let M=e.render.frame;s[x.id]!==M&&(p(x),s[x.id]=M)}function d(x){let v=h();x.__bindingPointIndex=v;let _=t.createBuffer(),E=x.__size,M=x.usage;return t.bindBuffer(t.UNIFORM_BUFFER,_),t.bufferData(t.UNIFORM_BUFFER,E,M),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,_),_}function h(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(x){let v=r[x.id],_=x.uniforms,E=x.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let M=0,T=_.length;M<T;M++){let R=Array.isArray(_[M])?_[M]:[_[M]];for(let S=0,A=R.length;S<A;S++){let P=R[S];if(f(P,M,S,E)===!0){let W=P.__offset,X=Array.isArray(P.value)?P.value:[P.value],L=0;for(let D=0;D<X.length;D++){let O=X[D],F=y(O);typeof O=="number"||typeof O=="boolean"?(P.__data[0]=O,t.bufferSubData(t.UNIFORM_BUFFER,W+L,P.__data)):O.isMatrix3?(P.__data[0]=O.elements[0],P.__data[1]=O.elements[1],P.__data[2]=O.elements[2],P.__data[3]=0,P.__data[4]=O.elements[3],P.__data[5]=O.elements[4],P.__data[6]=O.elements[5],P.__data[7]=0,P.__data[8]=O.elements[6],P.__data[9]=O.elements[7],P.__data[10]=O.elements[8],P.__data[11]=0):(O.toArray(P.__data,L),L+=F.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,W,P.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function f(x,v,_,E){let M=x.value,T=v+"_"+_;if(E[T]===void 0)return typeof M=="number"||typeof M=="boolean"?E[T]=M:E[T]=M.clone(),!0;{let R=E[T];if(typeof M=="number"||typeof M=="boolean"){if(R!==M)return E[T]=M,!0}else if(R.equals(M)===!1)return R.copy(M),!0}return!1}function g(x){let v=x.uniforms,_=0,E=16;for(let T=0,R=v.length;T<R;T++){let S=Array.isArray(v[T])?v[T]:[v[T]];for(let A=0,P=S.length;A<P;A++){let W=S[A],X=Array.isArray(W.value)?W.value:[W.value];for(let L=0,D=X.length;L<D;L++){let O=X[L],F=y(O),G=_%E;G!==0&&E-G<F.boundary&&(_+=E-G),W.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=_,_+=F.storage}}}let M=_%E;return M>0&&(_+=E-M),x.__size=_,x.__cache={},this}function y(x){let v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function m(x){let v=x.target;v.removeEventListener("dispose",m);let _=o.indexOf(v.__bindingPointIndex);o.splice(_,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function u(){for(let x in r)t.deleteBuffer(r[x]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}var El=class{constructor(e={}){let{canvas:n=Q2(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let p;i!==null?p=i.getContextAttributes().alpha:p=o;let f=new Uint32Array(4),g=new Int32Array(4),y=null,m=null,u=[],x=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ot,this._useLegacyLights=!1,this.toneMapping=jr,this.toneMappingExposure=1;let v=this,_=!1,E=0,M=0,T=null,R=-1,S=null,A=new $t,P=new $t,W=null,X=new Ge(0),L=0,D=n.width,O=n.height,F=1,G=null,ie=null,re=new $t(0,0,D,O),J=new $t(0,0,D,O),de=!1,Z=new Ml,ae=!1,we=!1,Ie=null,Re=new zt,Ue=new xe,Oe=new z,Pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ze(){return T===null?F:1}let N=i;function $(C,V){for(let K=0;K<C.length;K++){let ne=C[K],Y=n.getContext(ne,V);if(Y!==null)return Y}return null}try{let C={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${zm}`),n.addEventListener("webglcontextlost",pe,!1),n.addEventListener("webglcontextrestored",U,!1),n.addEventListener("webglcontextcreationerror",ve,!1),N===null){let V=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&V.shift(),N=$(V,C),N===null)throw $(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&N instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let B,se,H,ge,le,w,b,I,j,oe,ee,_e,ue,k,q,he,te,be,Me,Ce,Se,ye,Ee,$e;function nt(){B=new cA(N),se=new iA(N,B,e),B.init(se),ye=new H3(N,B,se),H=new z3(N,B,se),ge=new hA(N),le=new A3,w=new B3(N,B,H,le,se,ye,ge),b=new sA(v),I=new lA(v),j=new _M(N,se),Ee=new tA(N,B,j,se),oe=new dA(N,j,ge,Ee),ee=new gA(N,oe,j,ge),Me=new mA(N,se,w),he=new rA(le),_e=new T3(v,b,I,B,se,Ee,he),ue=new G3(v,le),k=new R3,q=new D3(B,se),be=new eA(v,b,I,H,ee,p,l),te=new F3(v,ee,se),$e=new W3(N,ge,se,H),Ce=new nA(N,B,ge,se),Se=new uA(N,B,ge,se),ge.programs=_e.programs,v.capabilities=se,v.extensions=B,v.properties=le,v.renderLists=k,v.shadowMap=te,v.state=H,v.info=ge}nt();let Be=new mm(v,N);this.xr=Be,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let C=B.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=B.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(C){C!==void 0&&(F=C,this.setSize(D,O,!1))},this.getSize=function(C){return C.set(D,O)},this.setSize=function(C,V,K=!0){if(Be.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=C,O=V,n.width=Math.floor(C*F),n.height=Math.floor(V*F),K===!0&&(n.style.width=C+"px",n.style.height=V+"px"),this.setViewport(0,0,C,V)},this.getDrawingBufferSize=function(C){return C.set(D*F,O*F).floor()},this.setDrawingBufferSize=function(C,V,K){D=C,O=V,F=K,n.width=Math.floor(C*K),n.height=Math.floor(V*K),this.setViewport(0,0,C,V)},this.getCurrentViewport=function(C){return C.copy(A)},this.getViewport=function(C){return C.copy(re)},this.setViewport=function(C,V,K,ne){C.isVector4?re.set(C.x,C.y,C.z,C.w):re.set(C,V,K,ne),H.viewport(A.copy(re).multiplyScalar(F).floor())},this.getScissor=function(C){return C.copy(J)},this.setScissor=function(C,V,K,ne){C.isVector4?J.set(C.x,C.y,C.z,C.w):J.set(C,V,K,ne),H.scissor(P.copy(J).multiplyScalar(F).floor())},this.getScissorTest=function(){return de},this.setScissorTest=function(C){H.setScissorTest(de=C)},this.setOpaqueSort=function(C){G=C},this.setTransparentSort=function(C){ie=C},this.getClearColor=function(C){return C.copy(be.getClearColor())},this.setClearColor=function(){be.setClearColor.apply(be,arguments)},this.getClearAlpha=function(){return be.getClearAlpha()},this.setClearAlpha=function(){be.setClearAlpha.apply(be,arguments)},this.clear=function(C=!0,V=!0,K=!0){let ne=0;if(C){let Y=!1;if(T!==null){let Le=T.texture.format;Y=Le===V1||Le===H1||Le===B1}if(Y){let Le=T.texture.type,Fe=Le===Xr||Le===Vr||Le===Hm||Le===Cs||Le===F1||Le===z1,Ve=be.getClearColor(),je=be.getClearAlpha(),Ye=Ve.r,Xe=Ve.g,We=Ve.b;Fe?(f[0]=Ye,f[1]=Xe,f[2]=We,f[3]=je,N.clearBufferuiv(N.COLOR,0,f)):(g[0]=Ye,g[1]=Xe,g[2]=We,g[3]=je,N.clearBufferiv(N.COLOR,0,g))}else ne|=N.COLOR_BUFFER_BIT}V&&(ne|=N.DEPTH_BUFFER_BIT),K&&(ne|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",pe,!1),n.removeEventListener("webglcontextrestored",U,!1),n.removeEventListener("webglcontextcreationerror",ve,!1),k.dispose(),q.dispose(),le.dispose(),b.dispose(),I.dispose(),ee.dispose(),Ee.dispose(),$e.dispose(),_e.dispose(),Be.dispose(),Be.removeEventListener("sessionstart",wt),Be.removeEventListener("sessionend",Je),Ie&&(Ie.dispose(),Ie=null),dt.stop()};function pe(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function U(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;let C=ge.autoReset,V=te.enabled,K=te.autoUpdate,ne=te.needsUpdate,Y=te.type;nt(),ge.autoReset=C,te.enabled=V,te.autoUpdate=K,te.needsUpdate=ne,te.type=Y}function ve(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function me(C){let V=C.target;V.removeEventListener("dispose",me),De(V)}function De(C){Ae(C),le.remove(C)}function Ae(C){let V=le.get(C).programs;V!==void 0&&(V.forEach(function(K){_e.releaseProgram(K)}),C.isShaderMaterial&&_e.releaseShaderCache(C))}this.renderBufferDirect=function(C,V,K,ne,Y,Le){V===null&&(V=Pe);let Fe=Y.isMesh&&Y.matrixWorld.determinant()<0,Ve=di(C,V,K,ne,Y);H.setMaterial(ne,Fe);let je=K.index,Ye=1;if(ne.wireframe===!0){if(je=oe.getWireframeAttribute(K),je===void 0)return;Ye=2}let Xe=K.drawRange,We=K.attributes.position,Ke=Xe.start*Ye,Ut=(Xe.start+Xe.count)*Ye;Le!==null&&(Ke=Math.max(Ke,Le.start*Ye),Ut=Math.min(Ut,(Le.start+Le.count)*Ye)),je!==null?(Ke=Math.max(Ke,0),Ut=Math.min(Ut,je.count)):We!=null&&(Ke=Math.max(Ke,0),Ut=Math.min(Ut,We.count));let Pt=Ut-Ke;if(Pt<0||Pt===1/0)return;Ee.setup(Y,ne,Ve,K,je);let kn,mt=Ce;if(je!==null&&(kn=j.get(je),mt=Se,mt.setIndex(kn)),Y.isMesh)ne.wireframe===!0?(H.setLineWidth(ne.wireframeLinewidth*ze()),mt.setMode(N.LINES)):mt.setMode(N.TRIANGLES);else if(Y.isLine){let qe=ne.linewidth;qe===void 0&&(qe=1),H.setLineWidth(qe*ze()),Y.isLineSegments?mt.setMode(N.LINES):Y.isLineLoop?mt.setMode(N.LINE_LOOP):mt.setMode(N.LINE_STRIP)}else Y.isPoints?mt.setMode(N.POINTS):Y.isSprite&&mt.setMode(N.TRIANGLES);if(Y.isBatchedMesh)mt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else if(Y.isInstancedMesh)mt.renderInstances(Ke,Pt,Y.count);else if(K.isInstancedBufferGeometry){let qe=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Hu=Math.min(K.instanceCount,qe);mt.renderInstances(Ke,Pt,Hu)}else mt.render(Ke,Pt)};function He(C,V,K){C.transparent===!0&&C.side===mn&&C.forceSinglePass===!1?(C.side=Jt,C.needsUpdate=!0,Qt(C,V,K),C.side=Yr,C.needsUpdate=!0,Qt(C,V,K),C.side=mn):Qt(C,V,K)}this.compile=function(C,V,K=null){K===null&&(K=C),m=q.get(K),m.init(),x.push(m),K.traverseVisible(function(Y){Y.isLight&&Y.layers.test(V.layers)&&(m.pushLight(Y),Y.castShadow&&m.pushShadow(Y))}),C!==K&&C.traverseVisible(function(Y){Y.isLight&&Y.layers.test(V.layers)&&(m.pushLight(Y),Y.castShadow&&m.pushShadow(Y))}),m.setupLights(v._useLegacyLights);let ne=new Set;return C.traverse(function(Y){let Le=Y.material;if(Le)if(Array.isArray(Le))for(let Fe=0;Fe<Le.length;Fe++){let Ve=Le[Fe];He(Ve,K,Y),ne.add(Ve)}else He(Le,K,Y),ne.add(Le)}),x.pop(),m=null,ne},this.compileAsync=function(C,V,K=null){let ne=this.compile(C,V,K);return new Promise(Y=>{function Le(){if(ne.forEach(function(Fe){le.get(Fe).currentProgram.isReady()&&ne.delete(Fe)}),ne.size===0){Y(C);return}setTimeout(Le,10)}B.get("KHR_parallel_shader_compile")!==null?Le():setTimeout(Le,10)})};let et=null;function ct(C){et&&et(C)}function wt(){dt.stop()}function Je(){dt.start()}let dt=new J1;dt.setAnimationLoop(ct),typeof self<"u"&&dt.setContext(self),this.setAnimationLoop=function(C){et=C,Be.setAnimationLoop(C),C===null?dt.stop():dt.start()},Be.addEventListener("sessionstart",wt),Be.addEventListener("sessionend",Je),this.render=function(C,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Be.enabled===!0&&Be.isPresenting===!0&&(Be.cameraAutoUpdate===!0&&Be.updateCamera(V),V=Be.getCamera()),C.isScene===!0&&C.onBeforeRender(v,C,V,T),m=q.get(C,x.length),m.init(),x.push(m),Re.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),Z.setFromProjectionMatrix(Re),we=this.localClippingEnabled,ae=he.init(this.clippingPlanes,we),y=k.get(C,u.length),y.init(),u.push(y),on(C,V,0,v.sortObjects),y.finish(),v.sortObjects===!0&&y.sort(G,ie),this.info.render.frame++,ae===!0&&he.beginShadows();let K=m.state.shadowsArray;if(te.render(K,C,V),ae===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset(),be.render(y,C),m.setupLights(v._useLegacyLights),V.isArrayCamera){let ne=V.cameras;for(let Y=0,Le=ne.length;Y<Le;Y++){let Fe=ne[Y];ci(y,C,Fe,Fe.viewport)}}else ci(y,C,V);T!==null&&(w.updateMultisampleRenderTarget(T),w.updateRenderTargetMipmap(T)),C.isScene===!0&&C.onAfterRender(v,C,V),Ee.resetDefaultState(),R=-1,S=null,x.pop(),x.length>0?m=x[x.length-1]:m=null,u.pop(),u.length>0?y=u[u.length-1]:y=null};function on(C,V,K,ne){if(C.visible===!1)return;if(C.layers.test(V.layers)){if(C.isGroup)K=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(V);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Z.intersectsSprite(C)){ne&&Oe.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Re);let Fe=ee.update(C),Ve=C.material;Ve.visible&&y.push(C,Fe,Ve,K,Oe.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Z.intersectsObject(C))){let Fe=ee.update(C),Ve=C.material;if(ne&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Oe.copy(C.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),Oe.copy(Fe.boundingSphere.center)),Oe.applyMatrix4(C.matrixWorld).applyMatrix4(Re)),Array.isArray(Ve)){let je=Fe.groups;for(let Ye=0,Xe=je.length;Ye<Xe;Ye++){let We=je[Ye],Ke=Ve[We.materialIndex];Ke&&Ke.visible&&y.push(C,Fe,Ke,K,Oe.z,We)}}else Ve.visible&&y.push(C,Fe,Ve,K,Oe.z,null)}}let Le=C.children;for(let Fe=0,Ve=Le.length;Fe<Ve;Fe++)on(Le[Fe],V,K,ne)}function ci(C,V,K,ne){let Y=C.opaque,Le=C.transmissive,Fe=C.transparent;m.setupLightsView(K),ae===!0&&he.setGlobalState(v.clippingPlanes,K),Le.length>0&&Sn(Y,Le,V,K),ne&&H.viewport(A.copy(ne)),Y.length>0&&Li(Y,V,K),Le.length>0&&Li(Le,V,K),Fe.length>0&&Li(Fe,V,K),H.buffers.depth.setTest(!0),H.buffers.depth.setMask(!0),H.buffers.color.setMask(!0),H.setPolygonOffset(!1)}function Sn(C,V,K,ne){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;let Le=se.isWebGL2;Ie===null&&(Ie=new hr(1,1,{generateMipmaps:!0,type:B.has("EXT_color_buffer_half_float")?bl:Xr,minFilter:_l,samples:Le?4:0})),v.getDrawingBufferSize(Ue),Le?Ie.setSize(Ue.x,Ue.y):Ie.setSize(em(Ue.x),em(Ue.y));let Fe=v.getRenderTarget();v.setRenderTarget(Ie),v.getClearColor(X),L=v.getClearAlpha(),L<1&&v.setClearColor(16777215,.5),v.clear();let Ve=v.toneMapping;v.toneMapping=jr,Li(C,K,ne),w.updateMultisampleRenderTarget(Ie),w.updateRenderTargetMipmap(Ie);let je=!1;for(let Ye=0,Xe=V.length;Ye<Xe;Ye++){let We=V[Ye],Ke=We.object,Ut=We.geometry,Pt=We.material,kn=We.group;if(Pt.side===mn&&Ke.layers.test(ne.layers)){let mt=Pt.side;Pt.side=Jt,Pt.needsUpdate=!0,In(Ke,K,ne,Ut,Pt,kn),Pt.side=mt,Pt.needsUpdate=!0,je=!0}}je===!0&&(w.updateMultisampleRenderTarget(Ie),w.updateRenderTargetMipmap(Ie)),v.setRenderTarget(Fe),v.setClearColor(X,L),v.toneMapping=Ve}function Li(C,V,K){let ne=V.isScene===!0?V.overrideMaterial:null;for(let Y=0,Le=C.length;Y<Le;Y++){let Fe=C[Y],Ve=Fe.object,je=Fe.geometry,Ye=ne===null?Fe.material:ne,Xe=Fe.group;Ve.layers.test(K.layers)&&In(Ve,V,K,je,Ye,Xe)}}function In(C,V,K,ne,Y,Le){C.onBeforeRender(v,V,K,ne,Y,Le),C.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Y.onBeforeRender(v,V,K,ne,C,Le),Y.transparent===!0&&Y.side===mn&&Y.forceSinglePass===!1?(Y.side=Jt,Y.needsUpdate=!0,v.renderBufferDirect(K,V,ne,Y,C,Le),Y.side=Yr,Y.needsUpdate=!0,v.renderBufferDirect(K,V,ne,Y,C,Le),Y.side=mn):v.renderBufferDirect(K,V,ne,Y,C,Le),C.onAfterRender(v,V,K,ne,Y,Le)}function Qt(C,V,K){V.isScene!==!0&&(V=Pe);let ne=le.get(C),Y=m.state.lights,Le=m.state.shadowsArray,Fe=Y.state.version,Ve=_e.getParameters(C,Y.state,Le,V,K),je=_e.getProgramCacheKey(Ve),Ye=ne.programs;ne.environment=C.isMeshStandardMaterial?V.environment:null,ne.fog=V.fog,ne.envMap=(C.isMeshStandardMaterial?I:b).get(C.envMap||ne.environment),Ye===void 0&&(C.addEventListener("dispose",me),Ye=new Map,ne.programs=Ye);let Xe=Ye.get(je);if(Xe!==void 0){if(ne.currentProgram===Xe&&ne.lightsStateVersion===Fe)return qn(C,Ve),Xe}else Ve.uniforms=_e.getUniforms(C),C.onBuild(K,Ve,v),C.onBeforeCompile(Ve,v),Xe=_e.acquireProgram(Ve,je),Ye.set(je,Xe),ne.uniforms=Ve.uniforms;let We=ne.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(We.clippingPlanes=he.uniform),qn(C,Ve),ne.needsLights=mr(C),ne.lightsStateVersion=Fe,ne.needsLights&&(We.ambientLightColor.value=Y.state.ambient,We.lightProbe.value=Y.state.probe,We.directionalLights.value=Y.state.directional,We.directionalLightShadows.value=Y.state.directionalShadow,We.spotLights.value=Y.state.spot,We.spotLightShadows.value=Y.state.spotShadow,We.rectAreaLights.value=Y.state.rectArea,We.ltc_1.value=Y.state.rectAreaLTC1,We.ltc_2.value=Y.state.rectAreaLTC2,We.pointLights.value=Y.state.point,We.pointLightShadows.value=Y.state.pointShadow,We.hemisphereLights.value=Y.state.hemi,We.directionalShadowMap.value=Y.state.directionalShadowMap,We.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,We.spotShadowMap.value=Y.state.spotShadowMap,We.spotLightMatrix.value=Y.state.spotLightMatrix,We.spotLightMap.value=Y.state.spotLightMap,We.pointShadowMap.value=Y.state.pointShadowMap,We.pointShadowMatrix.value=Y.state.pointShadowMatrix),ne.currentProgram=Xe,ne.uniformsList=null,Xe}function Ii(C){if(C.uniformsList===null){let V=C.currentProgram.getUniforms();C.uniformsList=Xo.seqWithValue(V.seq,C.uniforms)}return C.uniformsList}function qn(C,V){let K=le.get(C);K.outputColorSpace=V.outputColorSpace,K.batching=V.batching,K.instancing=V.instancing,K.instancingColor=V.instancingColor,K.skinning=V.skinning,K.morphTargets=V.morphTargets,K.morphNormals=V.morphNormals,K.morphColors=V.morphColors,K.morphTargetsCount=V.morphTargetsCount,K.numClippingPlanes=V.numClippingPlanes,K.numIntersection=V.numClipIntersection,K.vertexAlphas=V.vertexAlphas,K.vertexTangents=V.vertexTangents,K.toneMapping=V.toneMapping}function di(C,V,K,ne,Y){V.isScene!==!0&&(V=Pe),w.resetTextureUnits();let Le=V.fog,Fe=ne.isMeshStandardMaterial?V.environment:null,Ve=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:ur,je=(ne.isMeshStandardMaterial?I:b).get(ne.envMap||Fe),Ye=ne.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Xe=!!K.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),We=!!K.morphAttributes.position,Ke=!!K.morphAttributes.normal,Ut=!!K.morphAttributes.color,Pt=jr;ne.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Pt=v.toneMapping);let kn=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,mt=kn!==void 0?kn.length:0,qe=le.get(ne),Hu=m.state.lights;if(ae===!0&&(we===!0||C!==S)){let Yn=C===S&&ne.id===R;he.setState(ne,C,Yn)}let At=!1;ne.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Hu.state.version||qe.outputColorSpace!==Ve||Y.isBatchedMesh&&qe.batching===!1||!Y.isBatchedMesh&&qe.batching===!0||Y.isInstancedMesh&&qe.instancing===!1||!Y.isInstancedMesh&&qe.instancing===!0||Y.isSkinnedMesh&&qe.skinning===!1||!Y.isSkinnedMesh&&qe.skinning===!0||Y.isInstancedMesh&&qe.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&qe.instancingColor===!1&&Y.instanceColor!==null||qe.envMap!==je||ne.fog===!0&&qe.fog!==Le||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==he.numPlanes||qe.numIntersection!==he.numIntersection)||qe.vertexAlphas!==Ye||qe.vertexTangents!==Xe||qe.morphTargets!==We||qe.morphNormals!==Ke||qe.morphColors!==Ut||qe.toneMapping!==Pt||se.isWebGL2===!0&&qe.morphTargetsCount!==mt)&&(At=!0):(At=!0,qe.__version=ne.version);let is=qe.currentProgram;At===!0&&(is=Qt(ne,V,Y));let w0=!1,xa=!1,Vu=!1,an=is.getUniforms(),rs=qe.uniforms;if(H.useProgram(is.program)&&(w0=!0,xa=!0,Vu=!0),ne.id!==R&&(R=ne.id,xa=!0),w0||S!==C){an.setValue(N,"projectionMatrix",C.projectionMatrix),an.setValue(N,"viewMatrix",C.matrixWorldInverse);let Yn=an.map.cameraPosition;Yn!==void 0&&Yn.setValue(N,Oe.setFromMatrixPosition(C.matrixWorld)),se.logarithmicDepthBuffer&&an.setValue(N,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&an.setValue(N,"isOrthographic",C.isOrthographicCamera===!0),S!==C&&(S=C,xa=!0,Vu=!0)}if(Y.isSkinnedMesh){an.setOptional(N,Y,"bindMatrix"),an.setOptional(N,Y,"bindMatrixInverse");let Yn=Y.skeleton;Yn&&(se.floatVertexTextures?(Yn.boneTexture===null&&Yn.computeBoneTexture(),an.setValue(N,"boneTexture",Yn.boneTexture,w)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Y.isBatchedMesh&&(an.setOptional(N,Y,"batchingTexture"),an.setValue(N,"batchingTexture",Y._matricesTexture,w));let Gu=K.morphAttributes;if((Gu.position!==void 0||Gu.normal!==void 0||Gu.color!==void 0&&se.isWebGL2===!0)&&Me.update(Y,K,is),(xa||qe.receiveShadow!==Y.receiveShadow)&&(qe.receiveShadow=Y.receiveShadow,an.setValue(N,"receiveShadow",Y.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(rs.envMap.value=je,rs.flipEnvMap.value=je.isCubeTexture&&je.isRenderTargetTexture===!1?-1:1),xa&&(an.setValue(N,"toneMappingExposure",v.toneMappingExposure),qe.needsLights&&ui(rs,Vu),Le&&ne.fog===!0&&ue.refreshFogUniforms(rs,Le),ue.refreshMaterialUniforms(rs,ne,F,O,Ie),Xo.upload(N,Ii(qe),rs,w)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Xo.upload(N,Ii(qe),rs,w),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&an.setValue(N,"center",Y.center),an.setValue(N,"modelViewMatrix",Y.modelViewMatrix),an.setValue(N,"normalMatrix",Y.normalMatrix),an.setValue(N,"modelMatrix",Y.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){let Yn=ne.uniformsGroups;for(let Wu=0,Pb=Yn.length;Wu<Pb;Wu++)if(se.isWebGL2){let S0=Yn[Wu];$e.update(S0,is),$e.bind(S0,is)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return is}function ui(C,V){C.ambientLightColor.needsUpdate=V,C.lightProbe.needsUpdate=V,C.directionalLights.needsUpdate=V,C.directionalLightShadows.needsUpdate=V,C.pointLights.needsUpdate=V,C.pointLightShadows.needsUpdate=V,C.spotLights.needsUpdate=V,C.spotLightShadows.needsUpdate=V,C.rectAreaLights.needsUpdate=V,C.hemisphereLights.needsUpdate=V}function mr(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(C,V,K){le.get(C.texture).__webglTexture=V,le.get(C.depthTexture).__webglTexture=K;let ne=le.get(C);ne.__hasExternalTextures=!0,ne.__hasExternalTextures&&(ne.__autoAllocateDepthBuffer=K===void 0,ne.__autoAllocateDepthBuffer||B.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ne.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,V){let K=le.get(C);K.__webglFramebuffer=V,K.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(C,V=0,K=0){T=C,E=V,M=K;let ne=!0,Y=null,Le=!1,Fe=!1;if(C){let je=le.get(C);je.__useDefaultFramebuffer!==void 0?(H.bindFramebuffer(N.FRAMEBUFFER,null),ne=!1):je.__webglFramebuffer===void 0?w.setupRenderTarget(C):je.__hasExternalTextures&&w.rebindTextures(C,le.get(C.texture).__webglTexture,le.get(C.depthTexture).__webglTexture);let Ye=C.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(Fe=!0);let Xe=le.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Xe[V])?Y=Xe[V][K]:Y=Xe[V],Le=!0):se.isWebGL2&&C.samples>0&&w.useMultisampledRTT(C)===!1?Y=le.get(C).__webglMultisampledFramebuffer:Array.isArray(Xe)?Y=Xe[K]:Y=Xe,A.copy(C.viewport),P.copy(C.scissor),W=C.scissorTest}else A.copy(re).multiplyScalar(F).floor(),P.copy(J).multiplyScalar(F).floor(),W=de;if(H.bindFramebuffer(N.FRAMEBUFFER,Y)&&se.drawBuffers&&ne&&H.drawBuffers(C,Y),H.viewport(A),H.scissor(P),H.setScissorTest(W),Le){let je=le.get(C.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+V,je.__webglTexture,K)}else if(Fe){let je=le.get(C.texture),Ye=V||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,je.__webglTexture,K||0,Ye)}R=-1},this.readRenderTargetPixels=function(C,V,K,ne,Y,Le,Fe){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=le.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Fe!==void 0&&(Ve=Ve[Fe]),Ve){H.bindFramebuffer(N.FRAMEBUFFER,Ve);try{let je=C.texture,Ye=je.format,Xe=je.type;if(Ye!==Mi&&ye.convert(Ye)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let We=Xe===bl&&(B.has("EXT_color_buffer_half_float")||se.isWebGL2&&B.has("EXT_color_buffer_float"));if(Xe!==Xr&&ye.convert(Xe)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Xe===Gr&&(se.isWebGL2||B.has("OES_texture_float")||B.has("WEBGL_color_buffer_float")))&&!We){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=C.width-ne&&K>=0&&K<=C.height-Y&&N.readPixels(V,K,ne,Y,ye.convert(Ye),ye.convert(Xe),Le)}finally{let je=T!==null?le.get(T).__webglFramebuffer:null;H.bindFramebuffer(N.FRAMEBUFFER,je)}}},this.copyFramebufferToTexture=function(C,V,K=0){let ne=Math.pow(2,-K),Y=Math.floor(V.image.width*ne),Le=Math.floor(V.image.height*ne);w.setTexture2D(V,0),N.copyTexSubImage2D(N.TEXTURE_2D,K,0,0,C.x,C.y,Y,Le),H.unbindTexture()},this.copyTextureToTexture=function(C,V,K,ne=0){let Y=V.image.width,Le=V.image.height,Fe=ye.convert(K.format),Ve=ye.convert(K.type);w.setTexture2D(K,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,K.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,K.unpackAlignment),V.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,ne,C.x,C.y,Y,Le,Fe,Ve,V.image.data):V.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,ne,C.x,C.y,V.mipmaps[0].width,V.mipmaps[0].height,Fe,V.mipmaps[0].data):N.texSubImage2D(N.TEXTURE_2D,ne,C.x,C.y,Fe,Ve,V.image),ne===0&&K.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),H.unbindTexture()},this.copyTextureToTexture3D=function(C,V,K,ne,Y=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Le=C.max.x-C.min.x+1,Fe=C.max.y-C.min.y+1,Ve=C.max.z-C.min.z+1,je=ye.convert(ne.format),Ye=ye.convert(ne.type),Xe;if(ne.isData3DTexture)w.setTexture3D(ne,0),Xe=N.TEXTURE_3D;else if(ne.isDataArrayTexture||ne.isCompressedArrayTexture)w.setTexture2DArray(ne,0),Xe=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,ne.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ne.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,ne.unpackAlignment);let We=N.getParameter(N.UNPACK_ROW_LENGTH),Ke=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Ut=N.getParameter(N.UNPACK_SKIP_PIXELS),Pt=N.getParameter(N.UNPACK_SKIP_ROWS),kn=N.getParameter(N.UNPACK_SKIP_IMAGES),mt=K.isCompressedTexture?K.mipmaps[Y]:K.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,mt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,mt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,C.min.x),N.pixelStorei(N.UNPACK_SKIP_ROWS,C.min.y),N.pixelStorei(N.UNPACK_SKIP_IMAGES,C.min.z),K.isDataTexture||K.isData3DTexture?N.texSubImage3D(Xe,Y,V.x,V.y,V.z,Le,Fe,Ve,je,Ye,mt.data):K.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),N.compressedTexSubImage3D(Xe,Y,V.x,V.y,V.z,Le,Fe,Ve,je,mt.data)):N.texSubImage3D(Xe,Y,V.x,V.y,V.z,Le,Fe,Ve,je,Ye,mt),N.pixelStorei(N.UNPACK_ROW_LENGTH,We),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ke),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ut),N.pixelStorei(N.UNPACK_SKIP_ROWS,Pt),N.pixelStorei(N.UNPACK_SKIP_IMAGES,kn),Y===0&&ne.generateMipmaps&&N.generateMipmap(Xe),H.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?w.setTextureCube(C,0):C.isData3DTexture?w.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?w.setTexture2DArray(C,0):w.setTexture2D(C,0),H.unbindTexture()},this.resetState=function(){E=0,M=0,T=null,H.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return dr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let n=this.getContext();n.drawingBufferColorSpace=e===Vm?"display-p3":"srgb",n.unpackColorSpace=ut.workingColorSpace===mu?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ot?Ps:W1}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Ps?ot:ur}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},gm=class extends El{};gm.prototype.isWebGL1Renderer=!0;var Tl=class extends Pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}};var Ln=class extends Vn{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},si=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){let i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){let n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){let n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let n=[],i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){let i=this.getLengths(),r=0,s=i.length,o;n?o=n:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);let d=i[r],p=i[r+1]-d,f=(o-d)/p;return(r+f)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new xe:new z);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){let i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){let i=new z,r=[],s=[],o=[],a=new z,l=new zt;for(let f=0;f<=e;f++){let g=f/e;r[f]=this.getTangentAt(g,new z)}s[0]=new z,o[0]=new z;let c=Number.MAX_VALUE,d=Math.abs(r[0].x),h=Math.abs(r[0].y),p=Math.abs(r[0].z);d<=c&&(c=d,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),p<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(r[f-1],r[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Yt(r[f-1].dot(r[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(r[f],s[f])}if(n===!0){let f=Math.acos(Yt(s[0].dot(s[e]),-1,1));f/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(f=-f);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],f*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Al=class extends si{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n){let i=n||new xe,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);let a=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let d=Math.cos(this.aRotation),h=Math.sin(this.aRotation),p=l-this.aX,f=c-this.aY;l=p*d-f*h+this.aX,c=p*h+f*d+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},vm=class extends Al{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Wm(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,d,h){let p=(o-s)/c-(a-s)/(c+d)+(a-o)/d,f=(a-o)/d-(l-o)/(d+h)+(l-a)/h;p*=d,f*=d,r(o,a,p,f)},calc:function(s){let o=s*s,a=o*s;return t+e*s+n*o+i*a}}}var Bd=new z,Vf=new Wm,Gf=new Wm,Wf=new Wm,xm=class extends si{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new z){let i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,d;this.closed||a>0?c=r[(a-1)%s]:(Bd.subVectors(r[0],r[1]).add(r[0]),c=Bd);let h=r[a%s],p=r[(a+1)%s];if(this.closed||a+2<s?d=r[(a+2)%s]:(Bd.subVectors(r[s-1],r[s-2]).add(r[s-1]),d=Bd),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(h),f),y=Math.pow(h.distanceToSquared(p),f),m=Math.pow(p.distanceToSquared(d),f);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),Vf.initNonuniformCatmullRom(c.x,h.x,p.x,d.x,g,y,m),Gf.initNonuniformCatmullRom(c.y,h.y,p.y,d.y,g,y,m),Wf.initNonuniformCatmullRom(c.z,h.z,p.z,d.z,g,y,m)}else this.curveType==="catmullrom"&&(Vf.initCatmullRom(c.x,h.x,p.x,d.x,this.tension),Gf.initCatmullRom(c.y,h.y,p.y,d.y,this.tension),Wf.initCatmullRom(c.z,h.z,p.z,d.z,this.tension));return i.set(Vf.calc(l),Gf.calc(l),Wf.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){let r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){let r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){let r=e.points[n];this.points.push(new z().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function A1(t,e,n,i,r){let s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function j3(t,e){let n=1-t;return n*n*e}function X3(t,e){return 2*(1-t)*t*e}function q3(t,e){return t*t*e}function xl(t,e,n,i){return j3(t,e)+X3(t,n)+q3(t,i)}function Y3(t,e){let n=1-t;return n*n*n*e}function $3(t,e){let n=1-t;return 3*n*n*t*e}function J3(t,e){return 3*(1-t)*t*t*e}function Z3(t,e){return t*t*t*e}function yl(t,e,n,i,r){return Y3(t,e)+$3(t,n)+J3(t,i)+Z3(t,r)}var lu=class extends si{constructor(e=new xe,n=new xe,i=new xe,r=new xe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new xe){let i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(yl(e,r.x,s.x,o.x,a.x),yl(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ym=class extends si{constructor(e=new z,n=new z,i=new z,r=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new z){let i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(yl(e,r.x,s.x,o.x,a.x),yl(e,r.y,s.y,o.y,a.y),yl(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},cu=class extends si{constructor(e=new xe,n=new xe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new xe){let i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new xe){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},_m=class extends si{constructor(e=new z,n=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new z){let i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new z){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},du=class extends si{constructor(e=new xe,n=new xe,i=new xe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new xe){let i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(xl(e,r.x,s.x,o.x),xl(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},bm=class extends si{constructor(e=new z,n=new z,i=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new z){let i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(xl(e,r.x,s.x,o.x),xl(e,r.y,s.y,o.y),xl(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ko=class extends si{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new xe){let i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],d=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return i.set(A1(a,l.x,c.x,d.x,h.x),A1(a,l.y,c.y,d.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){let r=e.points[n];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){let r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){let r=e.points[n];this.points.push(new xe().fromArray(r))}return this}},wm=Object.freeze({__proto__:null,ArcCurve:vm,CatmullRomCurve3:xm,CubicBezierCurve:lu,CubicBezierCurve3:ym,EllipseCurve:Al,LineCurve:cu,LineCurve3:_m,QuadraticBezierCurve:du,QuadraticBezierCurve3:bm,SplineCurve:Ko}),Sm=class extends si{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(n)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new wm[i](n,e))}return this}getPoint(e,n){let i=e*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=i){let o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,n)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],n=0;for(let i=0,r=this.curves.length;i<r;i++)n+=this.curves[i].getLength(),e.push(n);return this.cacheLengths=e,e}getSpacedPoints(e=40){let n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return this.autoClose&&n.push(n[0]),n}getPoints(e=12){let n=[],i;for(let r=0,s=this.curves;r<s.length;r++){let o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let d=l[c];i&&i.equals(d)||(n.push(d),i=d)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(e){super.copy(e),this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){let r=e.curves[n];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let n=0,i=this.curves.length;n<i;n++){let r=this.curves[n];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){let r=e.curves[n];this.curves.push(new wm[r.type]().fromJSON(r))}return this}},Zr=class extends Sm{constructor(e){super(),this.type="Path",this.currentPoint=new xe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let n=1,i=e.length;n<i;n++)this.lineTo(e[n].x,e[n].y);return this}moveTo(e,n){return this.currentPoint.set(e,n),this}lineTo(e,n){let i=new cu(this.currentPoint.clone(),new xe(e,n));return this.curves.push(i),this.currentPoint.set(e,n),this}quadraticCurveTo(e,n,i,r){let s=new du(this.currentPoint.clone(),new xe(e,n),new xe(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,n,i,r,s,o){let a=new lu(this.currentPoint.clone(),new xe(e,n),new xe(i,r),new xe(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){let n=[this.currentPoint.clone()].concat(e),i=new Ko(n);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,n,i,r,s,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,n+l,i,r,s,o),this}absarc(e,n,i,r,s,o){return this.absellipse(e,n,i,i,r,s,o),this}ellipse(e,n,i,r,s,o,a,l){let c=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(e+c,n+d,i,r,s,o,a,l),this}absellipse(e,n,i,r,s,o,a,l){let c=new Al(e,n,i,r,s,o,a,l);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let d=c.getPoint(1);return this.currentPoint.copy(d),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Cl=class t extends Ht{constructor(e=[new xe(0,-.5),new xe(.5,0),new xe(0,.5)],n=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:n,phiStart:i,phiLength:r},n=Math.floor(n),r=Yt(r,0,Math.PI*2);let s=[],o=[],a=[],l=[],c=[],d=1/n,h=new z,p=new xe,f=new z,g=new z,y=new z,m=0,u=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:m=e[x+1].x-e[x].x,u=e[x+1].y-e[x].y,f.x=u*1,f.y=-m,f.z=u*0,y.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(y.x,y.y,y.z);break;default:m=e[x+1].x-e[x].x,u=e[x+1].y-e[x].y,f.x=u*1,f.y=-m,f.z=u*0,g.copy(f),f.x+=y.x,f.y+=y.y,f.z+=y.z,f.normalize(),l.push(f.x,f.y,f.z),y.copy(g)}for(let x=0;x<=n;x++){let v=i+x*d*r,_=Math.sin(v),E=Math.cos(v);for(let M=0;M<=e.length-1;M++){h.x=e[M].x*_,h.y=e[M].y,h.z=e[M].x*E,o.push(h.x,h.y,h.z),p.x=x/n,p.y=M/(e.length-1),a.push(p.x,p.y);let T=l[3*M+0]*_,R=l[3*M+1],S=l[3*M+0]*E;c.push(T,R,S)}}for(let x=0;x<n;x++)for(let v=0;v<e.length-1;v++){let _=v+x*e.length,E=_,M=_+e.length,T=_+e.length+1,R=_+1;s.push(E,M,R),s.push(T,R,M)}this.setIndex(s),this.setAttribute("position",new rt(o,3)),this.setAttribute("uv",new rt(a,2)),this.setAttribute("normal",new rt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.points,e.segments,e.phiStart,e.phiLength)}};var Gn=class t extends Ht{constructor(e=1,n=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:r},n=Math.max(3,n);let s=[],o=[],a=[],l=[],c=new z,d=new xe;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,p=3;h<=n;h++,p+=3){let f=i+h/n*r;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),d.x=(o[p]/e+1)/2,d.y=(o[p+1]/e+1)/2,l.push(d.x,d.y)}for(let h=1;h<=n;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new rt(o,3)),this.setAttribute("normal",new rt(a,3)),this.setAttribute("uv",new rt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.radius,e.segments,e.thetaStart,e.thetaLength)}},uu=class t extends Ht{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;r=Math.floor(r),s=Math.floor(s);let d=[],h=[],p=[],f=[],g=0,y=[],m=i/2,u=0;x(),o===!1&&(e>0&&v(!0),n>0&&v(!1)),this.setIndex(d),this.setAttribute("position",new rt(h,3)),this.setAttribute("normal",new rt(p,3)),this.setAttribute("uv",new rt(f,2));function x(){let _=new z,E=new z,M=0,T=(n-e)/i;for(let R=0;R<=s;R++){let S=[],A=R/s,P=A*(n-e)+e;for(let W=0;W<=r;W++){let X=W/r,L=X*l+a,D=Math.sin(L),O=Math.cos(L);E.x=P*D,E.y=-A*i+m,E.z=P*O,h.push(E.x,E.y,E.z),_.set(D,T,O).normalize(),p.push(_.x,_.y,_.z),f.push(X,1-A),S.push(g++)}y.push(S)}for(let R=0;R<r;R++)for(let S=0;S<s;S++){let A=y[S][R],P=y[S+1][R],W=y[S+1][R+1],X=y[S][R+1];d.push(A,P,X),d.push(P,W,X),M+=6}c.addGroup(u,M,0),u+=M}function v(_){let E=g,M=new xe,T=new z,R=0,S=_===!0?e:n,A=_===!0?1:-1;for(let W=1;W<=r;W++)h.push(0,m*A,0),p.push(0,A,0),f.push(.5,.5),g++;let P=g;for(let W=0;W<=r;W++){let L=W/r*l+a,D=Math.cos(L),O=Math.sin(L);T.x=S*O,T.y=m*A,T.z=S*D,h.push(T.x,T.y,T.z),p.push(0,A,0),M.x=D*.5+.5,M.y=O*.5*A+.5,f.push(M.x,M.y),g++}for(let W=0;W<r;W++){let X=E+W,L=P+W;_===!0?d.push(L,L+1,X):d.push(L+1,L,X),R+=3}c.addGroup(u,R,_===!0?1:2),u+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Bi=class extends Zr{constructor(e){super(e),this.uuid=ta(),this.type="Shape",this.holes=[]}getPointsHoles(e){let n=[];for(let i=0,r=this.holes.length;i<r;i++)n[i]=this.holes[i].getPoints(e);return n}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){let r=e.holes[n];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let n=0,i=this.holes.length;n<i;n++){let r=this.holes[n];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){let r=e.holes[n];this.holes.push(new Zr().fromJSON(r))}return this}},K3={triangulate:function(t,e,n=2){let i=e&&e.length,r=i?e[0]*n:t.length,s=n_(t,0,r,n,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c,d,h,p,f;if(i&&(s=iC(t,e,s,n)),t.length>80*n){a=c=t[0],l=d=t[1];for(let g=n;g<r;g+=n)h=t[g],p=t[g+1],h<a&&(a=h),p<l&&(l=p),h>c&&(c=h),p>d&&(d=p);f=Math.max(c-a,d-l),f=f!==0?32767/f:0}return Rl(s,o,n,a,l,f,0),o}};function n_(t,e,n,i,r){let s,o;if(r===fC(t,e,n,i)>0)for(s=e;s<n;s+=i)o=C1(s,t[s],t[s+1],o);else for(s=n-i;s>=e;s-=i)o=C1(s,t[s],t[s+1],o);return o&&vu(o,o.next)&&(Ll(o),o=o.next),o}function Ns(t,e){if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(vu(n,n.next)||Tt(n.prev,n,n.next)===0)){if(Ll(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function Rl(t,e,n,i,r,s,o){if(!t)return;!o&&s&&lC(t,i,r,s);let a=t,l,c;for(;t.prev!==t.next;){if(l=t.prev,c=t.next,s?eC(t,i,r,s):Q3(t)){e.push(l.i/n|0),e.push(t.i/n|0),e.push(c.i/n|0),Ll(t),t=c.next,a=c.next;continue}if(t=c,t===a){o?o===1?(t=tC(Ns(t),e,n),Rl(t,e,n,i,r,s,2)):o===2&&nC(t,e,n,i,r,s):Rl(Ns(t),e,n,i,r,s,1);break}}}function Q3(t){let e=t.prev,n=t,i=t.next;if(Tt(e,n,i)>=0)return!1;let r=e.x,s=n.x,o=i.x,a=e.y,l=n.y,c=i.y,d=r<s?r<o?r:o:s<o?s:o,h=a<l?a<c?a:c:l<c?l:c,p=r>s?r>o?r:o:s>o?s:o,f=a>l?a>c?a:c:l>c?l:c,g=i.next;for(;g!==e;){if(g.x>=d&&g.x<=p&&g.y>=h&&g.y<=f&&Go(r,a,s,l,o,c,g.x,g.y)&&Tt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function eC(t,e,n,i){let r=t.prev,s=t,o=t.next;if(Tt(r,s,o)>=0)return!1;let a=r.x,l=s.x,c=o.x,d=r.y,h=s.y,p=o.y,f=a<l?a<c?a:c:l<c?l:c,g=d<h?d<p?d:p:h<p?h:p,y=a>l?a>c?a:c:l>c?l:c,m=d>h?d>p?d:p:h>p?h:p,u=Mm(f,g,e,n,i),x=Mm(y,m,e,n,i),v=t.prevZ,_=t.nextZ;for(;v&&v.z>=u&&_&&_.z<=x;){if(v.x>=f&&v.x<=y&&v.y>=g&&v.y<=m&&v!==r&&v!==o&&Go(a,d,l,h,c,p,v.x,v.y)&&Tt(v.prev,v,v.next)>=0||(v=v.prevZ,_.x>=f&&_.x<=y&&_.y>=g&&_.y<=m&&_!==r&&_!==o&&Go(a,d,l,h,c,p,_.x,_.y)&&Tt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;v&&v.z>=u;){if(v.x>=f&&v.x<=y&&v.y>=g&&v.y<=m&&v!==r&&v!==o&&Go(a,d,l,h,c,p,v.x,v.y)&&Tt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;_&&_.z<=x;){if(_.x>=f&&_.x<=y&&_.y>=g&&_.y<=m&&_!==r&&_!==o&&Go(a,d,l,h,c,p,_.x,_.y)&&Tt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function tC(t,e,n){let i=t;do{let r=i.prev,s=i.next.next;!vu(r,s)&&i_(r,i,i.next,s)&&Pl(r,s)&&Pl(s,r)&&(e.push(r.i/n|0),e.push(i.i/n|0),e.push(s.i/n|0),Ll(i),Ll(i.next),i=t=s),i=i.next}while(i!==t);return Ns(i)}function nC(t,e,n,i,r,s){let o=t;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&uC(o,a)){let l=r_(o,a);o=Ns(o,o.next),l=Ns(l,l.next),Rl(o,e,n,i,r,s,0),Rl(l,e,n,i,r,s,0);return}a=a.next}o=o.next}while(o!==t)}function iC(t,e,n,i){let r=[],s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*i,l=s<o-1?e[s+1]*i:t.length,c=n_(t,a,l,i,!1),c===c.next&&(c.steiner=!0),r.push(dC(c));for(r.sort(rC),s=0;s<r.length;s++)n=sC(r[s],n);return n}function rC(t,e){return t.x-e.x}function sC(t,e){let n=oC(t,e);if(!n)return e;let i=r_(n,t);return Ns(i,i.next),Ns(n,n.next)}function oC(t,e){let n=e,i=-1/0,r,s=t.x,o=t.y;do{if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){let p=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(p<=s&&p>i&&(i=p,r=n.x<n.next.x?n:n.next,p===s))return r}n=n.next}while(n!==e);if(!r)return null;let a=r,l=r.x,c=r.y,d=1/0,h;n=r;do s>=n.x&&n.x>=l&&s!==n.x&&Go(o<c?s:i,o,l,c,o<c?i:s,o,n.x,n.y)&&(h=Math.abs(o-n.y)/(s-n.x),Pl(n,t)&&(h<d||h===d&&(n.x>r.x||n.x===r.x&&aC(r,n)))&&(r=n,d=h)),n=n.next;while(n!==a);return r}function aC(t,e){return Tt(t.prev,t,e.prev)<0&&Tt(e.next,t,t.next)<0}function lC(t,e,n,i){let r=t;do r.z===0&&(r.z=Mm(r.x,r.y,e,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==t);r.prevZ.nextZ=null,r.prevZ=null,cC(r)}function cC(t){let e,n,i,r,s,o,a,l,c=1;do{for(n=t,t=null,s=null,o=0;n;){for(o++,i=n,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||n.z<=i.z)?(r=n,n=n.nextZ,a--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:t=r,r.prevZ=s,s=r;n=i}s.nextZ=null,c*=2}while(o>1);return t}function Mm(t,e,n,i,r){return t=(t-n)*r|0,e=(e-i)*r|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function dC(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function Go(t,e,n,i,r,s,o,a){return(r-o)*(e-a)>=(t-o)*(s-a)&&(t-o)*(i-a)>=(n-o)*(e-a)&&(n-o)*(s-a)>=(r-o)*(i-a)}function uC(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!hC(t,e)&&(Pl(t,e)&&Pl(e,t)&&pC(t,e)&&(Tt(t.prev,t,e.prev)||Tt(t,e.prev,e))||vu(t,e)&&Tt(t.prev,t,t.next)>0&&Tt(e.prev,e,e.next)>0)}function Tt(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function vu(t,e){return t.x===e.x&&t.y===e.y}function i_(t,e,n,i){let r=Vd(Tt(t,e,n)),s=Vd(Tt(t,e,i)),o=Vd(Tt(n,i,t)),a=Vd(Tt(n,i,e));return!!(r!==s&&o!==a||r===0&&Hd(t,n,e)||s===0&&Hd(t,i,e)||o===0&&Hd(n,t,i)||a===0&&Hd(n,e,i))}function Hd(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function Vd(t){return t>0?1:t<0?-1:0}function hC(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&i_(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function Pl(t,e){return Tt(t.prev,t,t.next)<0?Tt(t,e,t.next)>=0&&Tt(t,t.prev,e)>=0:Tt(t,e,t.prev)<0||Tt(t,t.next,e)<0}function pC(t,e){let n=t,i=!1,r=(t.x+e.x)/2,s=(t.y+e.y)/2;do n.y>s!=n.next.y>s&&n.next.y!==n.y&&r<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i}function r_(t,e){let n=new Em(t.i,t.x,t.y),i=new Em(e.i,e.x,e.y),r=t.next,s=e.prev;return t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function C1(t,e,n,i){let r=new Em(t,e,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Ll(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function Em(t,e,n){this.i=t,this.x=e,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function fC(t,e,n,i){let r=0;for(let s=e,o=n-i;s<n;s+=i)r+=(t[o]-t[s])*(t[s+1]+t[o+1]),o=s;return r}var qr=class t{static area(e){let n=e.length,i=0;for(let r=n-1,s=0;s<n;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return t.area(e)<0}static triangulateShape(e,n){let i=[],r=[],s=[];R1(e),P1(i,e);let o=e.length;n.forEach(R1);for(let l=0;l<n.length;l++)r.push(o),o+=n[l].length,P1(i,n[l]);let a=K3.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function R1(t){let e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function P1(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}var Qo=class t extends Ht{constructor(e=new Bi([new xe(.5,.5),new xe(-.5,.5),new xe(-.5,-.5),new xe(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:n},e=Array.isArray(e)?e:[e];let i=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){let c=e[a];o(c)}this.setAttribute("position",new rt(r,3)),this.setAttribute("uv",new rt(s,2)),this.computeVertexNormals();function o(a){let l=[],c=n.curveSegments!==void 0?n.curveSegments:12,d=n.steps!==void 0?n.steps:1,h=n.depth!==void 0?n.depth:1,p=n.bevelEnabled!==void 0?n.bevelEnabled:!0,f=n.bevelThickness!==void 0?n.bevelThickness:.2,g=n.bevelSize!==void 0?n.bevelSize:f-.1,y=n.bevelOffset!==void 0?n.bevelOffset:0,m=n.bevelSegments!==void 0?n.bevelSegments:3,u=n.extrudePath,x=n.UVGenerator!==void 0?n.UVGenerator:mC,v,_=!1,E,M,T,R;u&&(v=u.getSpacedPoints(d),_=!0,p=!1,E=u.computeFrenetFrames(d,!1),M=new z,T=new z,R=new z),p||(m=0,f=0,g=0,y=0);let S=a.extractPoints(c),A=S.shape,P=S.holes;if(!qr.isClockWise(A)){A=A.reverse();for(let N=0,$=P.length;N<$;N++){let B=P[N];qr.isClockWise(B)&&(P[N]=B.reverse())}}let X=qr.triangulateShape(A,P),L=A;for(let N=0,$=P.length;N<$;N++){let B=P[N];A=A.concat(B)}function D(N,$,B){return $||console.error("THREE.ExtrudeGeometry: vec does not exist"),N.clone().addScaledVector($,B)}let O=A.length,F=X.length;function G(N,$,B){let se,H,ge,le=N.x-$.x,w=N.y-$.y,b=B.x-N.x,I=B.y-N.y,j=le*le+w*w,oe=le*I-w*b;if(Math.abs(oe)>Number.EPSILON){let ee=Math.sqrt(j),_e=Math.sqrt(b*b+I*I),ue=$.x-w/ee,k=$.y+le/ee,q=B.x-I/_e,he=B.y+b/_e,te=((q-ue)*I-(he-k)*b)/(le*I-w*b);se=ue+le*te-N.x,H=k+w*te-N.y;let be=se*se+H*H;if(be<=2)return new xe(se,H);ge=Math.sqrt(be/2)}else{let ee=!1;le>Number.EPSILON?b>Number.EPSILON&&(ee=!0):le<-Number.EPSILON?b<-Number.EPSILON&&(ee=!0):Math.sign(w)===Math.sign(I)&&(ee=!0),ee?(se=-w,H=le,ge=Math.sqrt(j)):(se=le,H=w,ge=Math.sqrt(j/2))}return new xe(se/ge,H/ge)}let ie=[];for(let N=0,$=L.length,B=$-1,se=N+1;N<$;N++,B++,se++)B===$&&(B=0),se===$&&(se=0),ie[N]=G(L[N],L[B],L[se]);let re=[],J,de=ie.concat();for(let N=0,$=P.length;N<$;N++){let B=P[N];J=[];for(let se=0,H=B.length,ge=H-1,le=se+1;se<H;se++,ge++,le++)ge===H&&(ge=0),le===H&&(le=0),J[se]=G(B[se],B[ge],B[le]);re.push(J),de=de.concat(J)}for(let N=0;N<m;N++){let $=N/m,B=f*Math.cos($*Math.PI/2),se=g*Math.sin($*Math.PI/2)+y;for(let H=0,ge=L.length;H<ge;H++){let le=D(L[H],ie[H],se);Re(le.x,le.y,-B)}for(let H=0,ge=P.length;H<ge;H++){let le=P[H];J=re[H];for(let w=0,b=le.length;w<b;w++){let I=D(le[w],J[w],se);Re(I.x,I.y,-B)}}}let Z=g+y;for(let N=0;N<O;N++){let $=p?D(A[N],de[N],Z):A[N];_?(T.copy(E.normals[0]).multiplyScalar($.x),M.copy(E.binormals[0]).multiplyScalar($.y),R.copy(v[0]).add(T).add(M),Re(R.x,R.y,R.z)):Re($.x,$.y,0)}for(let N=1;N<=d;N++)for(let $=0;$<O;$++){let B=p?D(A[$],de[$],Z):A[$];_?(T.copy(E.normals[N]).multiplyScalar(B.x),M.copy(E.binormals[N]).multiplyScalar(B.y),R.copy(v[N]).add(T).add(M),Re(R.x,R.y,R.z)):Re(B.x,B.y,h/d*N)}for(let N=m-1;N>=0;N--){let $=N/m,B=f*Math.cos($*Math.PI/2),se=g*Math.sin($*Math.PI/2)+y;for(let H=0,ge=L.length;H<ge;H++){let le=D(L[H],ie[H],se);Re(le.x,le.y,h+B)}for(let H=0,ge=P.length;H<ge;H++){let le=P[H];J=re[H];for(let w=0,b=le.length;w<b;w++){let I=D(le[w],J[w],se);_?Re(I.x,I.y+v[d-1].y,v[d-1].x+B):Re(I.x,I.y,h+B)}}}ae(),we();function ae(){let N=r.length/3;if(p){let $=0,B=O*$;for(let se=0;se<F;se++){let H=X[se];Ue(H[2]+B,H[1]+B,H[0]+B)}$=d+m*2,B=O*$;for(let se=0;se<F;se++){let H=X[se];Ue(H[0]+B,H[1]+B,H[2]+B)}}else{for(let $=0;$<F;$++){let B=X[$];Ue(B[2],B[1],B[0])}for(let $=0;$<F;$++){let B=X[$];Ue(B[0]+O*d,B[1]+O*d,B[2]+O*d)}}i.addGroup(N,r.length/3-N,0)}function we(){let N=r.length/3,$=0;Ie(L,$),$+=L.length;for(let B=0,se=P.length;B<se;B++){let H=P[B];Ie(H,$),$+=H.length}i.addGroup(N,r.length/3-N,1)}function Ie(N,$){let B=N.length;for(;--B>=0;){let se=B,H=B-1;H<0&&(H=N.length-1);for(let ge=0,le=d+m*2;ge<le;ge++){let w=O*ge,b=O*(ge+1),I=$+se+w,j=$+H+w,oe=$+H+b,ee=$+se+b;Oe(I,j,oe,ee)}}}function Re(N,$,B){l.push(N),l.push($),l.push(B)}function Ue(N,$,B){Pe(N),Pe($),Pe(B);let se=r.length/3,H=x.generateTopUV(i,r,se-3,se-2,se-1);ze(H[0]),ze(H[1]),ze(H[2])}function Oe(N,$,B,se){Pe(N),Pe($),Pe(se),Pe($),Pe(B),Pe(se);let H=r.length/3,ge=x.generateSideWallUV(i,r,H-6,H-3,H-2,H-1);ze(ge[0]),ze(ge[1]),ze(ge[3]),ze(ge[1]),ze(ge[2]),ze(ge[3])}function Pe(N){r.push(l[N*3+0]),r.push(l[N*3+1]),r.push(l[N*3+2])}function ze(N){s.push(N.x),s.push(N.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),n=this.parameters.shapes,i=this.parameters.options;return gC(n,i,e)}static fromJSON(e,n){let i=[];for(let s=0,o=e.shapes.length;s<o;s++){let a=n[e.shapes[s]];i.push(a)}let r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new wm[r.type]().fromJSON(r)),new t(i,e.options)}},mC={generateTopUV:function(t,e,n,i,r){let s=e[n*3],o=e[n*3+1],a=e[i*3],l=e[i*3+1],c=e[r*3],d=e[r*3+1];return[new xe(s,o),new xe(a,l),new xe(c,d)]},generateSideWallUV:function(t,e,n,i,r,s){let o=e[n*3],a=e[n*3+1],l=e[n*3+2],c=e[i*3],d=e[i*3+1],h=e[i*3+2],p=e[r*3],f=e[r*3+1],g=e[r*3+2],y=e[s*3],m=e[s*3+1],u=e[s*3+2];return Math.abs(a-d)<Math.abs(o-c)?[new xe(o,1-l),new xe(c,1-h),new xe(p,1-g),new xe(y,1-u)]:[new xe(a,1-l),new xe(d,1-h),new xe(f,1-g),new xe(m,1-u)]}};function gC(t,e,n){if(n.shapes=[],Array.isArray(t))for(let i=0,r=t.length;i<r;i++){let s=t[i];n.shapes.push(s.uuid)}else n.shapes.push(t.uuid);return n.options=Object.assign({},e),e.extrudePath!==void 0&&(n.options.extrudePath=e.extrudePath.toJSON()),n}var Ds=class t extends Ht{constructor(e=.5,n=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);let a=[],l=[],c=[],d=[],h=e,p=(n-e)/r,f=new z,g=new xe;for(let y=0;y<=r;y++){for(let m=0;m<=i;m++){let u=s+m/i*o;f.x=h*Math.cos(u),f.y=h*Math.sin(u),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/n+1)/2,g.y=(f.y/n+1)/2,d.push(g.x,g.y)}h+=p}for(let y=0;y<r;y++){let m=y*(i+1);for(let u=0;u<i;u++){let x=u+m,v=x,_=x+i+1,E=x+i+2,M=x+1;a.push(v,_,M),a.push(_,E,M)}}this.setIndex(a),this.setAttribute("position",new rt(l,3)),this.setAttribute("normal",new rt(c,3)),this.setAttribute("uv",new rt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Il=class t extends Ht{constructor(e=new Bi([new xe(0,.5),new xe(-.5,-.5),new xe(.5,-.5)]),n=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:n};let i=[],r=[],s=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let d=0;d<e.length;d++)c(e[d]),this.addGroup(a,l,d),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new rt(r,3)),this.setAttribute("normal",new rt(s,3)),this.setAttribute("uv",new rt(o,2));function c(d){let h=r.length/3,p=d.extractPoints(n),f=p.shape,g=p.holes;qr.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,u=g.length;m<u;m++){let x=g[m];qr.isClockWise(x)===!0&&(g[m]=x.reverse())}let y=qr.triangulateShape(f,g);for(let m=0,u=g.length;m<u;m++){let x=g[m];f=f.concat(x)}for(let m=0,u=f.length;m<u;m++){let x=f[m];r.push(x.x,x.y,0),s.push(0,0,1),o.push(x.x,x.y)}for(let m=0,u=y.length;m<u;m++){let x=y[m],v=x[0]+h,_=x[1]+h,E=x[2]+h;i.push(v,_,E),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),n=this.parameters.shapes;return vC(n,e)}static fromJSON(e,n){let i=[];for(let r=0,s=e.shapes.length;r<s;r++){let o=n[e.shapes[r]];i.push(o)}return new t(i,e.curveSegments)}};function vC(t,e){if(e.shapes=[],Array.isArray(t))for(let n=0,i=t.length;n<i;n++){let r=t[n];e.shapes.push(r.uuid)}else e.shapes.push(t.uuid);return e}var Kr=class t extends Ht{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),c=0,d=[],h=new z,p=new z,f=[],g=[],y=[],m=[];for(let u=0;u<=i;u++){let x=[],v=u/i,_=0;u===0&&o===0?_=.5/n:u===i&&l===Math.PI&&(_=-.5/n);for(let E=0;E<=n;E++){let M=E/n;h.x=-e*Math.cos(r+M*s)*Math.sin(o+v*a),h.y=e*Math.cos(o+v*a),h.z=e*Math.sin(r+M*s)*Math.sin(o+v*a),g.push(h.x,h.y,h.z),p.copy(h).normalize(),y.push(p.x,p.y,p.z),m.push(M+_,1-v),x.push(c++)}d.push(x)}for(let u=0;u<i;u++)for(let x=0;x<n;x++){let v=d[u][x+1],_=d[u][x],E=d[u+1][x],M=d[u+1][x+1];(u!==0||o>0)&&f.push(v,_,M),(u!==i-1||l<Math.PI)&&f.push(_,E,M)}this.setIndex(f),this.setAttribute("position",new rt(g,3)),this.setAttribute("normal",new rt(y,3)),this.setAttribute("uv",new rt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var kl=class t extends Ht{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);let o=[],a=[],l=[],c=[],d=new z,h=new z,p=new z;for(let f=0;f<=i;f++)for(let g=0;g<=r;g++){let y=g/r*s,m=f/i*Math.PI*2;h.x=(e+n*Math.cos(m))*Math.cos(y),h.y=(e+n*Math.cos(m))*Math.sin(y),h.z=n*Math.sin(m),a.push(h.x,h.y,h.z),d.x=e*Math.cos(y),d.y=e*Math.sin(y),p.subVectors(h,d).normalize(),l.push(p.x,p.y,p.z),c.push(g/r),c.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=r;g++){let y=(r+1)*f+g-1,m=(r+1)*(f-1)+g-1,u=(r+1)*(f-1)+g,x=(r+1)*f+g;o.push(y,m,x),o.push(m,u,x)}this.setIndex(o),this.setAttribute("position",new rt(a,3)),this.setAttribute("normal",new rt(l,3)),this.setAttribute("uv",new rt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Us=class extends Is{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=j1,this.normalScale=new xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Wn=class extends Us{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new xe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Yt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ge(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ge(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ge(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function Gd(t,e,n){return!t||!n&&t.constructor===e?t:typeof e.BYTES_PER_ELEMENT=="number"?new e(t):Array.prototype.slice.call(t)}function xC(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}var ea=class{constructor(e,n,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let n=this.parameterPositions,i=this._cachedIndex,r=n[i],s=n[i-1];e:{t:{let o;n:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=n[++i],e<r)break t}o=n.length;break n}if(!(e>=s)){let a=n[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=n[--i-1],e>=s)break t}o=i,i=0;break n}break e}for(;i<o;){let a=i+o>>>1;e<n[a]?o=a:i=a+1}if(r=n[i],s=n[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let n=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)n[o]=i[s+o];return n}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Tm=class extends ea{constructor(e,n,i,r){super(e,n,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Oy,endingEnd:Oy}}intervalChanged_(e,n,i){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Fy:s=e,a=2*n-i;break;case zy:s=r.length-2,a=n+r[s]-r[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Fy:o=e,l=2*i-n;break;case zy:o=1,l=i+r[1]-r[0];break;default:o=e-1,l=n}let c=(i-n)*.5,d=this.valueSize;this._weightPrev=c/(n-a),this._weightNext=c/(l-i),this._offsetPrev=s*d,this._offsetNext=o*d}interpolate_(e,n,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,d=this._offsetPrev,h=this._offsetNext,p=this._weightPrev,f=this._weightNext,g=(i-n)/(r-n),y=g*g,m=y*g,u=-p*m+2*p*y-p*g,x=(1+p)*m+(-1.5-2*p)*y+(-.5+p)*g+1,v=(-1-f)*m+(1.5+f)*y+.5*g,_=f*m-f*y;for(let E=0;E!==a;++E)s[E]=u*o[d+E]+x*o[c+E]+v*o[l+E]+_*o[h+E];return s}},Am=class extends ea{constructor(e,n,i,r){super(e,n,i,r)}interpolate_(e,n,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,d=(i-n)/(r-n),h=1-d;for(let p=0;p!==a;++p)s[p]=o[c+p]*h+o[l+p]*d;return s}},Cm=class extends ea{constructor(e,n,i,r){super(e,n,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Ti=class{constructor(e,n,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Gd(n,this.TimeBufferType),this.values=Gd(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let n=e.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(e);else{i={name:e.name,times:Gd(e.times,Array),values:Gd(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Cm(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Am(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Tm(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let n;switch(e){case jd:n=this.InterpolantFactoryMethodDiscrete;break;case Xd:n=this.InterpolantFactoryMethodLinear;break;case vf:n=this.InterpolantFactoryMethodSmooth;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return jd;case this.InterpolantFactoryMethodLinear:return Xd;case this.InterpolantFactoryMethodSmooth:return vf}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let n=this.times;for(let i=0,r=n.length;i!==r;++i)n[i]+=e}return this}scale(e){if(e!==1){let n=this.times;for(let i=0,r=n.length;i!==r;++i)n[i]*=e}return this}trim(e,n){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>n;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&xC(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===vf,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],d=e[a+1];if(c!==d&&(a!==1||c!==e[0]))if(r)l=!0;else{let h=a*i,p=h-i,f=h+i;for(let g=0;g!==i;++g){let y=n[h+g];if(y!==n[p+g]||y!==n[f+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let h=a*i,p=o*i;for(let f=0;f!==i;++f)n[p+f]=n[h+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)n[l+c]=n[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=n.slice(0,o*i)):(this.times=e,this.values=n),this}clone(){let e=this.times.slice(),n=this.values.slice(),i=this.constructor,r=new i(this.name,e,n);return r.createInterpolant=this.createInterpolant,r}};Ti.prototype.TimeBufferType=Float32Array;Ti.prototype.ValueBufferType=Float32Array;Ti.prototype.DefaultInterpolation=Xd;var Os=class extends Ti{};Os.prototype.ValueTypeName="bool";Os.prototype.ValueBufferType=Array;Os.prototype.DefaultInterpolation=jd;Os.prototype.InterpolantFactoryMethodLinear=void 0;Os.prototype.InterpolantFactoryMethodSmooth=void 0;var Rm=class extends Ti{};Rm.prototype.ValueTypeName="color";var Pm=class extends Ti{};Pm.prototype.ValueTypeName="number";var Lm=class extends ea{constructor(e,n,i,r){super(e,n,i,r)}interpolate_(e,n,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-n)/(r-n),c=e*a;for(let d=c+a;c!==d;c+=4)Jr.slerpFlat(s,0,o,c-a,o,c,l);return s}},Nl=class extends Ti{InterpolantFactoryMethodLinear(e){return new Lm(this.times,this.values,this.getValueSize(),e)}};Nl.prototype.ValueTypeName="quaternion";Nl.prototype.DefaultInterpolation=Xd;Nl.prototype.InterpolantFactoryMethodSmooth=void 0;var Fs=class extends Ti{};Fs.prototype.ValueTypeName="string";Fs.prototype.ValueBufferType=Array;Fs.prototype.DefaultInterpolation=jd;Fs.prototype.InterpolantFactoryMethodLinear=void 0;Fs.prototype.InterpolantFactoryMethodSmooth=void 0;var Im=class extends Ti{};Im.prototype.ValueTypeName="vector";var L1={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}},km=class{constructor(e,n,i){let r=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(d){a++,s===!1&&r.onStart!==void 0&&r.onStart(d,o,a),s=!0},this.itemEnd=function(d){o++,r.onProgress!==void 0&&r.onProgress(d,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(d){r.onError!==void 0&&r.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,h){return c.push(d,h),this},this.removeHandler=function(d){let h=c.indexOf(d);return h!==-1&&c.splice(h,2),this},this.getHandler=function(d){for(let h=0,p=c.length;h<p;h+=2){let f=c[h],g=c[h+1];if(f.global&&(f.lastIndex=0),f.test(d))return g}return null}}},yC=new km,Dl=class{constructor(e){this.manager=e!==void 0?e:yC,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){let i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Dl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Nm=class extends Dl{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=L1.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0),o;let a=wl("img");function l(){d(),L1.add(e,this),n&&n(this),s.manager.itemEnd(e)}function c(h){d(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function d(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}};var hu=class extends Dl{constructor(e){super(e)}load(e,n,i,r){let s=new Vn,o=new Nm(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}},Dm=class extends Pn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}};var jf=new zt,I1=new z,k1=new z,Um=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xe(512,512),this.map=null,this.mapPass=null,this.matrix=new zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ml,this._frameExtents=new xe(1,1),this._viewportCount=1,this._viewports=[new $t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let n=this.camera,i=this.matrix;I1.setFromMatrixPosition(e.matrixWorld),n.position.copy(I1),k1.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(k1),n.updateMatrixWorld(),jf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jf),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(jf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Om=class extends Um{constructor(){super(new ou(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},pu=class extends Dm{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pn.DEFAULT_UP),this.updateMatrix(),this.target=new Pn,this.shadow=new Om}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var jm="\\[\\]\\.:\\/",_C=new RegExp("["+jm+"]","g"),Xm="[^"+jm+"]",bC="[^"+jm.replace("\\.","")+"]",wC=/((?:WC+[\/:])*)/.source.replace("WC",Xm),SC=/(WCOD+)?/.source.replace("WCOD",bC),MC=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Xm),EC=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Xm),TC=new RegExp("^"+wC+SC+MC+EC+"$"),AC=["material","materials","bones","map"],Fm=class{constructor(e,n,i){let r=i||bt.parseTrackName(n);this._targetGroup=e,this._bindings=e.subscribe_(n,r)}getValue(e,n){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,n)}setValue(e,n){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,n)}bind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].bind()}unbind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].unbind()}},bt=class t{constructor(e,n,i){this.path=n,this.parsedPath=i||t.parseTrackName(n),this.node=t.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,n,i){return e&&e.isAnimationObjectGroup?new t.Composite(e,n,i):new t(e,n,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(_C,"")}static parseTrackName(e){let n=TC.exec(e);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);AC.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,n){if(n===void 0||n===""||n==="."||n===-1||n===e.name||n===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(n);if(i!==void 0)return i}if(e.children){let i=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===n||a.uuid===n)return a;let l=i(a.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,n){e[n]=this.targetObject[this.propertyName]}_getValue_array(e,n){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[n++]=i[r]}_getValue_arrayElement(e,n){e[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,n){this.resolvedProperty.toArray(e,n)}_setValue_direct(e,n){this.targetObject[this.propertyName]=e[n]}_setValue_direct_setNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,n){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++]}_setValue_array_setNeedsUpdate(e,n){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,n){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,n){this.resolvedProperty[this.propertyIndex]=e[n]}_setValue_arrayElement_setNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,n){this.resolvedProperty.fromArray(e,n)}_setValue_fromArray_setNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,n){this.bind(),this.getValue(e,n)}_setValue_unbound(e,n){this.bind(),this.setValue(e,n)}bind(){let e=this.node,n=this.parsedPath,i=n.objectName,r=n.propertyName,s=n.propertyIndex;if(e||(e=t.findNode(this.rootNode,n.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===c){c=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[r];if(o===void 0){let c=n.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};bt.Composite=Fm;bt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};bt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};bt.prototype.GetterByBindingType=[bt.prototype._getValue_direct,bt.prototype._getValue_array,bt.prototype._getValue_arrayElement,bt.prototype._getValue_toArray];bt.prototype.SetterByBindingTypeAndVersioning=[[bt.prototype._setValue_direct,bt.prototype._setValue_direct_setNeedsUpdate,bt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_array,bt.prototype._setValue_array_setNeedsUpdate,bt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_arrayElement,bt.prototype._setValue_arrayElement_setNeedsUpdate,bt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_fromArray,bt.prototype._setValue_fromArray_setNeedsUpdate,bt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var RL=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zm}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zm);var xu="matte",oi={otpGlow:.62,otpTint:16777215,otpShade:.42,caseWhite:15987438,caseLidLine:9407880,usb:4145736,usbPlug:13027531,capsule:15521162,capsuleInside:16116416},Ol={hex:"#f0699f",rgb:[240,105,159]},Zt={hex:"#e5483d",rgb:"229, 72, 61",on:"#fff4f2",bg:"120, 28, 22",bgA:.16},Fl={button:[-.7,-.01],screen:[.17,.02,1.193,.53]},s_={y:-.24,w:.92,h:.6},qm={question:Ol.hex,bang:Ol.hex},Ul={green:{ink:"#2bff7e",glow:"rgba(30,255,120,.95)",bg:"#010603"},violet:{ink:"#bf94ff",glow:"rgba(150,70,255,1)",bg:"#030110"},signal:{ink:"#ff5a4d",glow:"rgba("+Zt.rgb+",.75)",bg:"#040101"},mint:{ink:"#8dffc0",glow:"rgba(125,255,178,.85)",bg:"#06150d"},ice:{ink:"#cfeeff",glow:"rgba(160,215,255,.9)",bg:"#07111a"},pink:{ink:"#f39ab8",glow:"rgba(255,120,165,.9)",bg:"#190b12"},red:{ink:"#ff4d3d",glow:"rgba(255,77,61,.85)",bg:"#010202"}},ia={otp:{no:"Project 01",kw:"PRIVACY",col:Ul.green,gap:.15,kwScale:1.1},earcase:{no:"Project 02",kw:"SENSE",col:Ul.violet,gap:.12,kwScale:1.18,noScale:1.24,neon:!0},card:{no:"Project 03",kw:"LOTTE",col:Ul.signal,kwScale:1.35,gap:.22,drop:.05}};var o_="data:image/webp;base64,UklGRt4FAABXRUJQVlA4INIFAACQUQCdASoVAgwBPpVKoEylt62lo1MI2vASiWlu+F+stS8VU23odLkemCQPjGY0PJQAs8VtHisUOPjm/ISrKjDoc17e3t7e3imNO/uHwKUU6REB9msCWFkYYoOpj4BzrpZ//qz9Wfqy0lgEfzAproiu2vrfCKm7OYXq9e/h2BerYFxyqZxnqLuXgVDdMs0pm0MuY7vnclHRSCPt8opZWNGuBG4eMsLjX5uKCIezwU3uw19/OAw4pMkVKW2qOrdOG66tpW6u4gfFonXBvBSc1MQPiyxYyr8XHpCf9B/26nr0I2QpNdDohV/WxXbi5vmMjQmfYYaksU2ska/6gO18bxyr54MZPXYuS+PXsQ3goW7pt7GaMADV0RaIUQCqdykNoBs+/rP/9vxtQMh+DWfgx4SIpTjNOhLn+N6GHVbzMr0IGE4t9RWQ9vZfKb5+LL0N9HK99IqZpXoxWmuuEmJlYGpJc/hHq/vj5IynD4iG5fkAJv75PNR5oJj5Z8o5rRHZuNDlXVxl/Y+9VtnjzXWxIRXmGBGWXt7LCJpBMSJoFLM1RCNiDUutUhquaozBmM9KbpaBd48WN1Ri0a61olVxlpV2x5H0dYsJNlSVypaKM39ZVbQZbeHsjiJgksyONa4E98KeH9b+poNB+RizBMMxmly1pG0uW3vuVLUWbfkffJJIQi7Q5klh93XL3qp0pVlXKJReLs+0sXUfsepqFlzIuWyvLec+j5ROpfkPeVWHq8SdwvJKT2mSXP+uVYGpJc1UH7/riygu37kO4YFCnKolyrA1JLn/XKr4y4xgQfUGnigDAjLP+4YU2xBp/C3uVdkmI1IoH/IJ7PjVzFRIl1nZVWfr2gbbFw+9JGKc/puS9PlkaTYKwj4AAP7rOPnbaWvqo9q+fOFyZ7KAy0GaJT8T8Cyg5fQbcbTaXPyr34vaVzukBgkKBg8nKCcYW1q6B3Zwr71Q7ZpjRFgR2SqeAY6DZTcsFFlvG3jwlaGafvqDokBIRvr7n9mvNm4xzcThqOlMsIgDwhbGSo2wy8yTObiAcebXOvl7aXOnSr3crPAQybIXq9Xk7rwppF6jArf1Yc0hXvPnc13lZQo0jK9w01jQK00exw/LYS61sLMahQRSLBBaiWkR7UPGUotXVdhHW41iwTatOgLTwsHXREjJsXja6VAEBbAgh4gOMg6r96htKOAv6m5ImGT0fuAvvnYDzzy9BfH6BAriJuiZsfA6bOTsMKMbEi20zsArDAjL8mPOgJTUniK1JXXc9J/Sid2beNK+sHZBvjQ6T2cpVV5jrD4tvedeLSPC8jOHhnmfv533C7oGqXo2ZBr5wHzqNWezZkYEzHcrDZOdIyro2livtQMHHIv/CUhzWD40mfGednwjyL0ExiJ18AISATXDiUHc6wCk94+5Gv5xNmiz6ktTuE5C4/qjoZM0y8uAwe54DAmnX01NR64ZVWhus5tS8f/rVgFx1BXF4h5pC2isfS5b7b6Q/YVfImfPNACKhsZq86z46r7gYGQBKQR+Rt3QneAA3k/PK0i8g1GMsi4/oxqPhcY52l+j35WxAwTW8kvfNGj1ihZ0enD2Wv8Gj9gboSaoXilLry953WJX84JqDxvpPfNwKQ6PDSYksF4hXuMSuAjYg8crpJrIpAa6dNyjya3EN2RZqfzMFJb39xBz9pkMkmQ7vmz6Sjgk3AwdqYYIEKbkmQVAAe3kWVDBgVd1DS5lx2EOiEfUDWgGt75LaU1WPh9ZeQUQLjhs4ASSEDoWxYRZ2NsjJRyptkjQbddd/uHGjp0Ah8fHeLppzX5bbhZgpJCaw7dzZXhgWUjceo6iVzmVJpABq06WOywoAd2fsJR+nsBTDqQomEeALjFvPR4JL46YXiFuxURLEm1PuiGWtBzLtsLfGVuASI3bTnMMmglpGvY1p3z2M5s21PWcNQeSSC1ZXkTtyUDBZwWQZ8zsVLSyDpJoZnWWXtN6T+uxoCTEVKEhQgAAAA==",zl={scale:.005294981,cx:288.9447,cy:147.7126,w:533,h:268,plain:[.4,.8],screen:[.27,.05,1.3,.47],thick:.245,edge:.2};var Bl=[-1.249,.213,-1.243,.278,-1.227,.34,-1.197,.397,-1.154,.445,-1.101,.482,-1.042,.507,-.98,.524,-.916,.539,-.854,.552,-.791,.565,-.728,.575,-.665,.583,-.601,.59,-.537,.595,-.473,.599,-.408,.601,-.344,.602,-.28,.602,-.216,.601,-.152,.599,-.088,.596,-.024,.591,.04,.586,.104,.579,.167,.571,.231,.562,.294,.553,.358,.543,.421,.531,.484,.519,.547,.506,.609,.491,.671,.475,.733,.457,.794,.437,.854,.414,.912,.387,.969,.357,1.023,.322,1.074,.283,1.121,.239,1.162,.189,1.197,.136,1.225,.077,1.243,.015,1.25,-.049,1.245,-.113,1.228,-.175,1.204,-.235,1.172,-.291,1.132,-.342,1.086,-.386,1.034,-.425,.979,-.457,.921,-.485,.861,-.508,.799,-.526,.737,-.542,.674,-.555,.611,-.567,.547,-.576,.483,-.584,.42,-.59,.356,-.595,.292,-.598,.228,-.601,.163,-.602,.099,-.602,.035,-.602,-.029,-.6,-.093,-.598,-.157,-.595,-.221,-.591,-.285,-.587,-.349,-.582,-.413,-.576,-.477,-.569,-.54,-.559,-.603,-.548,-.666,-.534,-.729,-.517,-.789,-.496,-.848,-.47,-.904,-.439,-.957,-.403,-1.007,-.361,-1.052,-.316,-1.094,-.266,-1.13,-.214,-1.163,-.158,-1.191,-.1,-1.214,-.04,-1.231,.021,-1.243,.084,-1.249,.148],Hl=[-1.106,.184,-1.119,.207,-1.125,.233,-1.124,.259,-1.117,.284,-1.105,.308,-1.089,.328,-1.07,.345,-1.049,.359,-1.026,.371,-1,.382,-.973,.391,-.947,.395,-.922,.391,-.901,.376,-.886,.353,-.883,.329,-.889,.304,-.903,.28,-.92,.258,-.937,.237,-.954,.218,-.972,.2,-.992,.184,-1.015,.168,-1.039,.157,-1.064,.154,-1.087,.164];var CC="AI PRIVACY",RC=1.1,ra=zl.thick,Vl=Math.min(zl.edge,zl.thick),PC={x:161.4,y:136,cover:47,fade:55},_u={ring:.19,face:.168,ringCol:4078134,faceCol:7893613,hiCol:8814714},Rt={screen:null,full:null,title:null,btn:null,btnFace:null,pulse:null,faceCol:new Ge(_u.faceCol),downCol:new Ge(3025704)};function LC(t,e,n,i){t.shadowBlur=0,t.fillStyle=i.bg,t.fillRect(0,0,e,n),t.textAlign="center",t.textBaseline="middle",t.fillStyle=i.ink,t.shadowColor=i.glow;let r=Math.round(n*.34),s=a=>"700 "+a+'px "JetBrains Mono", monospace',o=CC.split("").join("\u200A");for(t.font=s(r);r>12&&t.measureText(o).width>e*.84;)r-=2,t.font=s(r);t.shadowBlur=12,t.fillText(o,e/2,n/2+r*.04),t.shadowBlur=0,t.fillStyle="rgba(0,0,0,.16)";for(let a=0;a<n;a+=4)t.fillRect(0,a,e,1)}function IC(t,e,n){let i=new ht,r=520,s=Math.round(520*(n-.06)/(e-.06)),o=ia.otp;i.add(new Ne(t.ext(t.rr(e,n,Math.min(e,n)*.14),.02,.015,4),new st({color:131586})));let a=()=>{let f=document.createElement("canvas");f.width=r,f.height=s;let g=new Ln(f);return g.colorSpace=ot,g.anisotropy=4,{cv:f,t:g}},l=a(),c=a(),d=new st({map:l.t,toneMapped:!1}),h=new Ne(new It(e-.06,n-.06),d);h.position.z=.03,i.add(h),Rt.screen=d,Rt.full=l.t,Rt.title=c.t;function p(){Qr(l.cv.getContext("2d"),r,s,o,o.col),l.t.needsUpdate=!0,LC(c.cv.getContext("2d"),r,s,o.col),c.t.needsUpdate=!0}return p(),Hs(p),i}function kC(t){let{x:e,y:n,cover:i,fade:r}=PC,s=0,o=0,a=0,l=0;for(let h=0;h<Math.PI*2;h+=Math.PI/12){let p=t.getImageData(Math.round(e+Math.cos(h)*(r+4)),Math.round(n+Math.sin(h)*(r+4)),1,1).data;s+=p[0],o+=p[1],a+=p[2],l++}let c="rgb("+Math.round(s/l)+","+Math.round(o/l)+","+Math.round(a/l)+")",d=t.createRadialGradient(e,n,i,e,n,r);d.addColorStop(0,c),d.addColorStop(1,c.replace("rgb","rgba").replace(")",",0)")),t.fillStyle=d,t.beginPath(),t.arc(e,n,r,0,Math.PI*2),t.fill(),t.fillStyle=c,t.beginPath(),t.arc(e,n,i,0,Math.PI*2),t.fill()}function NC(t,e){let n=t.naturalWidth||t.width,i=t.naturalHeight||t.height,r=document.createElement("canvas");r.width=n,r.height=i;let s=r.getContext("2d",{willReadFrequently:!0});s.drawImage(t,0,0,n,i),kC(s),s.globalCompositeOperation="source-atop";let o=s.createLinearGradient(n*.1,0,n*.9,i);o.addColorStop(0,"rgba(255,255,255,"+(e*.28).toFixed(3)+")"),o.addColorStop(.45,"rgba(255,255,255,0)"),o.addColorStop(.6,"rgba(0,0,0,0)"),o.addColorStop(1,"rgba(30,24,18,"+(e*.55).toFixed(3)+")"),s.fillStyle=o,s.fillRect(0,0,n,i);let a=n/2;return s.save(),s.translate(a,i/2),s.scale(1,i/n),o=s.createRadialGradient(0,0,n*.3,0,0,n*.5),o.addColorStop(0,"rgba(0,0,0,0)"),o.addColorStop(.7,"rgba(20,16,12,"+(e*.18).toFixed(3)+")"),o.addColorStop(1,"rgba(20,16,12,"+(e*.6).toFixed(3)+")"),s.fillStyle=o,s.fillRect(-a,-a,n,n),s.restore(),o=s.createLinearGradient(0,0,0,i*.35),o.addColorStop(0,"rgba(255,255,255,"+(e*.22).toFixed(3)+")"),o.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=o,s.fillRect(0,0,n,i*.35),r}function DC(){let t=new ht,e=_u,n=Fl.button,i=a=>new st({color:a,toneMapped:!1});t.position.set(n[0],n[1],ra+.003),t.add(new Ne(new Gn(e.ring,128),i(e.ringCol)));let r=i(e.faceCol),s=new Ne(new Gn(e.face,128),r);s.position.z=.002,t.add(s);let o=new Ne(new Ds(e.face-.03,e.face-.006,128,1,Math.PI*.55,Math.PI*.6),i(e.hiCol));return o.position.z=.004,t.add(o),Rt.btn=t,Rt.btnFace=r,t}function UC(){let t=Fl.button,e=new st({color:2883454,transparent:!0,opacity:0,toneMapped:!1,depthWrite:!1}),n=new Ne(new Ds(_u.ring+.005,_u.ring+.045,96),e);return n.position.set(t[0],t[1],ra+.008),Rt.pulse=n,n}var c_=t=>t<0?0:t>1?1:t,a_=t=>(t=c_(t),t*t*(3-2*t)),yu=[[0,0,"full"],[.08,1,"title"],[.15,0,"title"],[.24,1,"title"],[.3,.4,"title"],[.37,1,"title"]],Bs="full",l_=0,Gl=null;function d_(){if(!Rt.screen)return;(!Gl||!Gl.isConnected)&&(Gl=document.querySelector(".cardsec .card"));let t=!!(Gl&&Gl.classList.contains("hit")),e=performance.now();Bs==="full"&&t?(Bs="play",l_=e):Bs!=="full"&&!t&&(Bs="full");let n=0,i=0,r=1,s="full";if(Bs==="play"){let a=(e-l_)/1e3/RC;n=a<.2?a_(a/.2):a<.35?1:1-a_((a-.35)/.2),i=a<.2?0:c_((a-.2)/.7);let l=a-.08;if(l>=0){for(let c=yu.length-1;c>=0;c--)if(l>=yu[c][0]){r=yu[c][1],s=yu[c][2];break}}a>1.1&&(Bs="title")}else Bs==="title"&&(s="title");if(Rt.btn){let a=Fl.button;Rt.btn.position.set(a[0],a[1],ra+.003-.04*n),Rt.btn.scale.setScalar(1-.18*n),Rt.btnFace.color.copy(Rt.faceCol).lerp(Rt.downCol,n)}Rt.pulse&&(Rt.pulse.material.opacity=i>0&&i<1?.85*(1-i):0,Rt.pulse.scale.setScalar(1+1.6*i));let o=s==="title"?Rt.title:Rt.full;Rt.screen.map!==o&&(Rt.screen.map=o,Rt.screen.needsUpdate=!0),Rt.screen.color.setScalar(r)}function OC(t,e,n,i){let r=ra-Vl;function s(P){let W=[],X=P.length/2;for(let L=0;L<X;L++){let D=(L+1)%X;W.push([P[2*L],P[2*L+1],P[2*D],P[2*D+1]])}return W}let o=s(t),a=s(e),l=o.concat(a);function c(P,W,X){let L=!1;for(let D=0;D<P.length;D++){let O=P[D];O[1]>X!=O[3]>X&&W<(O[2]-O[0])*(X-O[1])/(O[3]-O[1])+O[0]&&(L=!L)}return L}function d(P,W){let X=1e9,L=0,D=0;for(let O=0;O<l.length;O++){let F=l[O],G=F[2]-F[0],ie=F[3]-F[1],re=((P-F[0])*G+(W-F[1])*ie)/(G*G+ie*ie);re=re<0?0:re>1?1:re;let J=F[0]+re*G,de=F[1]+re*ie,Z=Math.hypot(P-J,W-de);Z<X&&(X=Z,L=J,D=de)}return[X,L,D]}let h=1e9,p=-1e9,f=1e9,g=-1e9;for(let P=0;P<t.length;P+=2)h=Math.min(h,t[P]),p=Math.max(p,t[P]),f=Math.min(f,t[P+1]),g=Math.max(g,t[P+1]);let y=400,m=(p-h)/(y-4),u=Math.ceil((g-f)/m)+4;h-=2*m,f-=2*m;let x=new Int32Array(y*u).fill(-1),v=[],_=[];for(let P=0;P<u;P++)for(let W=0;W<y;W++){let X=h+W*m,L=f+P*m,D,O=X,F=L,G=d(X,L);if(c(o,X,L)&&!c(a,X,L))if(G[0]<Vl){let J=G[0]/Vl*Math.PI/2,de=Vl*(1-Math.cos(J))/Math.max(G[0],1e-6);X=G[1]+(X-G[1])*de,L=G[2]+(L-G[2])*de,D=r+Vl*Math.sin(J)}else D=ra;else if(G[0]<m*1.5)X=O=G[1],L=F=G[2],D=r;else continue;x[P*y+W]=v.length/3,v.push(X,L,D);let re=n(O,F);_.push(re[0],re[1])}let E=v.length/3,M=[],T=[],R=[];for(let P=0;P<E;P++)M.push(v[3*P],v[3*P+1],v[3*P+2]),T.push(_[2*P],_[2*P+1]);for(let P=0;P<E;P++)M.push(v[3*P],v[3*P+1],-v[3*P+2]),T.push(i[0],i[1]);for(let P=0;P<u-1;P++)for(let W=0;W<y-1;W++){let X=x[P*y+W],L=x[P*y+W+1],D=x[(P+1)*y+W+1],O=x[(P+1)*y+W];X<0||L<0||D<0||O<0||R.push(X,L,D,X,D,O,E+X,E+D,E+L,E+X,E+O,E+D)}function S(P,W){let X=P.length/2,L=M.length/3,D=0;for(let F=0;F<X;F++){let G=(F+1)%X;D+=P[2*F]*P[2*G+1]-P[2*G]*P[2*F+1]}let O=D<0!=!!W;for(let F=0;F<X;F++)M.push(P[2*F],P[2*F+1],-r,P[2*F],P[2*F+1],r),T.push(i[0],i[1],i[0],i[1]);for(let F=0;F<X;F++){let G=L+2*F,ie=G+1,re=L+2*((F+1)%X),J=re+1;O?R.push(G,J,re,G,ie,J):R.push(G,re,J,G,J,ie)}}r>.001&&(S(t,!1),S(e,!0));let A=new Ht;return A.setAttribute("position",new Bt(new Float32Array(M),3)),A.setAttribute("uv",new Bt(new Float32Array(T),2)),A.setIndex(R),A.computeVertexNormals(),A}function u_(t,e){let n=new ht,i=zl,r=Fl.screen,s=OC(Bl,Hl,(f,g)=>[(f/i.scale+i.cx)/i.w,1-(i.cy-g/i.scale)/i.h],i.plain),o=new Wn({color:9209984,roughness:.9,metalness:0}),a=new Image;a.onload=()=>{let f=new Ln(NC(a,oi.otpShade));f.colorSpace=ot,f.anisotropy=8,f.flipY=!0,o.map=f,o.emissiveMap=f,o.emissive=new Ge(16777215),o.emissiveIntensity=oi.otpGlow,o.color.set(oi.otpTint),o.needsUpdate=!0},a.src=o_,n.add(new Ne(s,o));let l=[],c=[];for(let f=0;f<Bl.length;f+=2)l.push(new xe(Bl[f],Bl[f+1]));for(let f=0;f<Hl.length;f+=2)c.push(new xe(Hl[f],Hl[f+1]));let d=new Bi(l);d.holes.push(new Zr(c));let h=new Ne(new Qo(d,{depth:.008,bevelEnabled:!1,curveSegments:12}),new st({color:4143667}));h.position.z=-.004,h.scale.set(1.002,1.004,1),n.add(h),n.add(DC()),n.add(UC());let p=IC(t,r[2],r[3]);return p.position.set(r[0],r[1],ra-.024),n.add(p),n.rotation.z=-.34,e.wrap(n,.98)}function bu(t,e,n,i){let r=e-n,s=t.length/2,o=[];for(let E=0;E<s;E++){let M=(E+1)%s;o.push([t[2*E],t[2*E+1],t[2*M],t[2*M+1]])}function a(E,M){let T=!1;for(let R=0;R<o.length;R++){let S=o[R];S[1]>M!=S[3]>M&&E<(S[2]-S[0])*(M-S[1])/(S[3]-S[1])+S[0]&&(T=!T)}return T}function l(E,M){let T=1e9,R=0,S=0;for(let A=0;A<o.length;A++){let P=o[A],W=P[2]-P[0],X=P[3]-P[1],L=W*W+X*X,D=L>1e-12?((E-P[0])*W+(M-P[1])*X)/L:0;D=D<0?0:D>1?1:D;let O=P[0]+D*W,F=P[1]+D*X,G=Math.hypot(E-O,M-F);G<T&&(T=G,R=O,S=F)}return[T,R,S]}let c=1e9,d=-1e9,h=1e9,p=-1e9;for(let E=0;E<t.length;E+=2)c=Math.min(c,t[E]),d=Math.max(d,t[E]),h=Math.min(h,t[E+1]),p=Math.max(p,t[E+1]);let f=(d-c)/(i-4),g=Math.ceil((p-h)/f)+4;c-=2*f,h-=2*f;let y=new Int32Array(i*g).fill(-1),m=[];for(let E=0;E<g;E++)for(let M=0;M<i;M++){let T=c+M*f,R=h+E*f,S,A=l(T,R);if(a(T,R))if(A[0]<n){let P=A[0]/n*Math.PI/2,W=n*(1-Math.cos(P))/Math.max(A[0],1e-6);T=A[1]+(T-A[1])*W,R=A[2]+(R-A[2])*W,S=r+n*Math.sin(P)}else S=e;else if(A[0]<f*1.5)T=A[1],R=A[2],S=r;else continue;y[E*i+M]=m.length/3,m.push(T,R,S)}let u=m.length/3,x=[],v=[];for(let E=0;E<u;E++)x.push(m[3*E],m[3*E+1],m[3*E+2]);for(let E=0;E<u;E++)x.push(m[3*E],m[3*E+1],-m[3*E+2]);for(let E=0;E<g-1;E++)for(let M=0;M<i-1;M++){let T=y[E*i+M],R=y[E*i+M+1],S=y[(E+1)*i+M+1],A=y[(E+1)*i+M];T<0||R<0||S<0||A<0||v.push(T,R,S,T,S,A,u+T,u+S,u+R,u+T,u+A,u+S)}if(r>.001){let E=0;for(let R=0;R<s;R++){let S=(R+1)%s;E+=t[2*R]*t[2*S+1]-t[2*S]*t[2*R+1]}let M=x.length/3,T=E<0;for(let R=0;R<s;R++)x.push(t[2*R],t[2*R+1],-r,t[2*R],t[2*R+1],r);for(let R=0;R<s;R++){let S=M+2*R,A=S+1,P=M+2*((R+1)%s),W=P+1;T?v.push(S,W,P,S,A,W):v.push(S,P,W,S,W,A)}}let _=new Ht;return _.setAttribute("position",new Bt(new Float32Array(x),3)),_.setIndex(v),_.computeVertexNormals(),_}function wu(t,e,n,i,r,s){t.shadowBlur=0,t.fillStyle=i.bg,t.fillRect(0,0,e,n),t.textAlign="center",t.textBaseline="middle",t.fillStyle=i.ink,t.shadowColor=i.glow;let o=Math.round(n*.36),a=d=>"700 "+d+'px "JetBrains Mono", monospace',l=r.split("").join("\u200A");for(t.font=a(o);o>12&&t.measureText(l).width>e*.84;)o-=2,t.font=a(o);let c=n/2+o*.04;s&&(t.shadowBlur=22,t.fillText(l,e/2,c)),t.shadowBlur=s?8:12,t.fillText(l,e/2,c),t.shadowBlur=0,t.fillStyle="rgba(0,0,0,.16)";for(let d=0;d<n;d+=4)t.fillRect(0,d,e,1)}var FC="SENSE",zC=.35,sa=1.46,es=1.765,Hi=.7,Ym=.3,BC=.4,HC=.3,$m={h:.05,dark:.32,light:.6},VC=2.05,GC=.76,ts=.33,Su=.225,Jm=.93,Zm=.645,h_=.17,WC=16184818,jC=14277856,XC=4078907,qC=15329508,YC=15921646,$C=9276554,JC=12166524,ZC=.05,Mu=[[0,0,"full"],[.12,1,"title"],[.22,0,"title"],[.34,1,"title"],[.42,.4,"title"],[.52,1,"title"]],KC=[[1e-4,-.62],[.06,-.615],[.074,-.6],[.078,-.45],[.082,-.28],[.088,-.17],[.12,-.09],[.185,-.02],[.228,.07],[.238,.15],[.222,.23],[.175,.3],[.1,.345],[1e-4,.36]],QC=[{out:.42,up:.9,z:.34,rot:[-.35,-.95,.62],spin:1.6,bob:[1,.05],turn:[.42,.24]},{out:.62,up:.42,z:.08,rot:[.3,2.35,-.28],spin:-1.1,bob:[.65,.035],turn:[.3,.18]}],Km=0;function p_(t){Km=t}function eR(t){let i=document.createElement("canvas");i.width=512,i.height=32;let r=i.getContext("2d"),s=r.createImageData(512,32),o=s.data;for(let l=0;l<32;l++)for(let c=0;c<512;c++){let d=c/511,h=Math.pow(Math.sin(Math.PI*d),.6),p=(l+.5)/32,f=Math.exp(-Math.pow((p-.56)/.07,2))*$m.dark,g=Math.exp(-Math.pow((p-.4)/.06,2))*$m.light,y=(l*512+c)*4;f>=g*.5?(o[y]=70,o[y+1]=66,o[y+2]=60,o[y+3]=Math.round(255*f*h)):(o[y]=255,o[y+1]=255,o[y+2]=255,o[y+3]=Math.round(255*g*h))}r.putImageData(s,0,0);let a=new Ln(i);return a.colorSpace=ot,new Ne(new It(t,$m.h),new st({map:a,transparent:!0,depthWrite:!1}))}function f_(t,e){let n=new ht,i=Math.PI/2,r=es/2-HC*es,s=new Wn({color:WC,roughness:.4,metalness:0}),o=new Us({color:jC,metalness:1,roughness:.22}),a=new Us({color:16777215,roughness:.5,metalness:0,vertexColors:!0,side:mn}),l=new Us({color:qC,roughness:.85,metalness:0}),c=new st({color:XC}),d=[],h=BC;[[sa/2-h,es/2-h,0],[-sa/2+h,es/2-h,i],[-sa/2+h,-es/2+h,2*i],[sa/2-h,-es/2+h,3*i]].forEach($=>{for(let B=0;B<=18;B++){let se=$[2]+B/18*i;d.push($[0]+h*Math.cos(se),$[1]+h*Math.sin(se))}});function p($){let B=bu(d,Hi/2,Ym,220),se=B.attributes.position,H=B.attributes.normal;for(let b=0;b<se.count;b++){let I=se.getY(b);($?I<r:I>r)&&(se.setY(b,r),H.setXYZ(b,0,$?-1:1,0))}let ge=B.index.array,le=[],w=b=>Math.abs(se.getY(b)-r)<1e-6;for(let b=0;b<ge.length;b+=3)w(ge[b])&&w(ge[b+1])&&w(ge[b+2])||le.push(ge[b],ge[b+1],ge[b+2]);return B.setIndex(le),se.needsUpdate=!0,H.needsUpdate=!0,B}function f(){let $=new Bi,B=sa/2-.004,se=Hi/2-.004,H=Ym;return $.moveTo(-B+H,-se),$.lineTo(B-H,-se),$.absarc(B-H,-se+H,H,-i,0,!1),$.lineTo(B,se-H),$.absarc(B-H,se-H,H,0,i,!1),$.lineTo(-B+H,se),$.absarc(-B+H,se-H,H,i,2*i,!1),$.lineTo(-B,-se+H),$.absarc(-B+H,-se+H,H,2*i,3*i,!1),[-ts,ts].forEach(ge=>{let le=new Zr;le.absellipse(ge,0,Su,Su*Jm,0,Math.PI*2,!0,0),$.holes.push(le)}),new Il($,40)}function g($,B){let se=new Cl($.map(I=>new xe(I[0],-I[1])),56),H=se.attributes.position,ge=[],le=new Ge(YC),w=new Ge($C),b=new Ge;for(let I=0;I<H.count;I++){let j=Math.min(1,-H.getY(I)/B);b.copy(le).lerp(w,Math.pow(j,.8)),ge.push(b.r,b.g,b.b)}return se.setAttribute("color",new Bt(new Float32Array(ge),3)),se}let y=[],m=[];for(let $=0;$<=12;$++){let B=$/12*i*.82;y.push([.105+(Su-.105)*Math.cos(B),.25*Math.sin(B)/Math.sin(i*.82)])}y.push([.1,.3],[.096,.6],[.07,.64],[1e-4,Zm]);for(let $=0;$<=14;$++){let B=$/14*i;m.push([Math.max(1e-4,Su*Math.cos(B)),h_*Math.sin(B)])}n.add(new Ne(p(!1),s));let u=new Ne(f(),s);u.rotation.x=-i,u.position.y=r,n.add(u),[-ts,ts].forEach($=>{let B=new Ne(g(y,Zm),a);B.scale.set(1,1,Jm),B.position.set($,r+.001,0),n.add(B);let se=new Ne(new Gn(.035,20),new st({color:JC}));se.rotation.x=-i,se.position.set($,r-Zm+.005,0),n.add(se)});let x=eR(sa-2*Ym+.1);x.position.set(0,r,Hi/2+.003),n.add(x);let v=new ht;v.position.set(0,r,-Hi/2);let _=new Ne(p(!0),s);_.position.set(0,-r,Hi/2),v.add(_);let E=new Ne(f(),s);E.rotation.x=i,E.position.set(0,0,Hi/2),v.add(E),[-ts,ts].forEach($=>{let B=new Ne(g(m,h_),a);B.scale.set(1,-1,Jm),B.position.set($,-.001,Hi/2),v.add(B)}),n.add(v);let M=new Ne(t.ext(t.rr(.7,.11,.025),.02,.01,4),o);M.position.set(0,r,-Hi/2-.002),n.add(M);let T=new Ne(new Gn(.1,40),new st({color:14605527}));T.rotation.y=Math.PI,T.position.set(0,-.12,-Hi/2-.003),n.add(T);let R=new Ne(t.ext(t.rr(.3,.1,.05),.02,.008,3),o);R.rotation.x=i,R.position.set(0,-es/2-.002,0),n.add(R);let S=new Ne(new Il(t.rr(.25,.062,.031),12),new st({color:1776153}));S.rotation.x=i,S.position.set(0,-es/2-.022,0),n.add(S);let A=new Ko(KC.map($=>new xe($[0],$[1]))),P=new Cl(A.getPoints(90).map($=>new xe(Math.max(1e-4,$.x),$.y)),72);P.computeVertexNormals();function W($){let B=new ht,se=new Ne(P,s);se.scale.set(1,1,.86),B.add(se);let H=new ht;H.position.set(-$*.15,.1,.08),H.rotation.set(.15,-$*.95,0);let ge=new Ne(new Kr(.15,36,24),l);ge.scale.set(.95,.88,1.05),ge.position.z=.06,H.add(ge);let le=new Ne(new Gn(.068,28),c);le.scale.set(1.15,.9,1),le.position.z=.215,H.add(le),B.add(H);let w=new Ne(new Gn(.026,20),c);w.scale.set(1,1.7,1),w.position.set($*.2,.14,.09),w.rotation.y=$*1.05,B.add(w);let b=new Ne(new It(.012,.16),new st({color:13618632}));b.position.set(0,-.36,.071),B.add(b);let I=new Ne(new uu(.073,.066,.035,36),o);return I.scale.z=.86,I.position.set(0,-.6,0),B.add(I),B.scale.setScalar(GC),B}let X=r-.02,L=[-1,1].map($=>{let B=W($);return B.position.set($*ts,X,0),n.add(B),B}),D=s_,O=ia.earcase,F=O.col,G=400,ie=Math.round(400*(D.h-.06)/(D.w-.06)),re=new ht;re.add(new Ne(t.ext(t.rr(D.w,D.h,Math.min(D.w,D.h)*.14),.02,.015,4),t.gloss(460551,.35)));let J=()=>{let $=document.createElement("canvas");$.width=G,$.height=ie;let B=new Ln($);return B.colorSpace=ot,B.anisotropy=4,{cv:$,t:B}},de=J(),Z=J(),ae=new st({map:de.t,toneMapped:!1}),we=new Ne(new It(D.w-.06,D.h-.06),ae);we.position.z=.03,re.add(we),re.position.set(0,D.y,Hi/2-.02),n.add(re);function Ie(){Qr(de.cv.getContext("2d"),G,ie,O,F),de.t.needsUpdate=!0,wu(Z.cv.getContext("2d"),G,ie,F,FC,!!O.neon),Z.t.needsUpdate=!0}Ie(),Hs(Ie);let Re=$=>($=$<0?0:$>1?1:$,$*$*(3-2*$)),Ue=0,Oe=!1,Pe="full",ze=0,N=null;return function $(){requestAnimationFrame($),Oe||(Oe=!0,s.roughness=.4,s.specularIntensity=.55,s.envMapIntensity=.75,s.needsUpdate=!0,a.roughness=.5,a.envMapIntensity=.75,a.needsUpdate=!0,l.roughness=.85,l.envMapIntensity=.5,l.needsUpdate=!0,o.metalness=1,o.roughness=.22,o.envMapIntensity=1,o.needsUpdate=!0),Ue+=(Km-Ue)*ZC,Ue<5e-4&&Km===0&&(Ue=0);let B=Ue,se=performance.now()/1e3;v.rotation.x=-Re(B/.32)*VC,x.visible=B<.02,L.forEach((I,j)=>{let oe=j?1:-1,ee=QC[j],_e=j*2.7,ue=(B-.1-j*.08)/.82;ue=ue<0?0:ue>1?1:ue;let k=Re(ue),q=Math.sin(ue*Math.PI),he=Math.sin(se*ee.bob[0]+_e)*ee.bob[1]*k;I.position.x=oe*(ts+k*ee.out)+Math.sin(se*ee.turn[0]*.8+_e)*.025*k,I.position.y=X+k*ee.up+q*.16+he,I.position.z=k*ee.z,I.rotation.x=ee.rot[0]*k-q*.4+Math.sin(se*ee.turn[1]+_e)*.07*k,I.rotation.y=ee.rot[1]*k+q*ee.spin+Math.sin(se*ee.turn[0]+_e)*.2*k,I.rotation.z=ee.rot[2]*k+q*ee.spin*.4+Math.sin(se*ee.turn[1]*1.3+_e)*.06*k}),(!N||!N.isConnected)&&(N=document.querySelectorAll(".cardsec .card")[1]||null);let H=!!(N&&N.classList.contains("hit")),ge=performance.now();Pe==="full"&&H?(Pe="wait",ze=ge):Pe!=="full"&&!H&&(Pe="full");let le=1,w="full";if(Pe==="wait"){let I=(ge-ze)/1e3-zC;if(I>=0){for(let j=Mu.length-1;j>=0;j--)if(I>=Mu[j][0]){le=Mu[j][1],w=Mu[j][2];break}}I>.6&&(Pe="title")}else Pe==="title"&&(w="title");let b=w==="title"?Z.t:de.t;ae.map!==b&&(ae.map=b,ae.needsUpdate=!0),ae.color.setScalar(le)}(),e.wrap(n,1.14)}var tR="LOTTE WEB",m_=1.5,Wl=.66,nR=.035,Qm=.12,iR=.03,jl=-.52,e0=.44,Eu=.4,t0=.13,rR=1.4,Tu=1.22,Au=.4,n0=8,sR=.3;function g_(t,e){let n=new ht,i=new ht,r=Math.PI/2,s=nR,o=[],a=jl+m_;[[a-s,Wl/2-s,0],[jl+s,Wl/2-s,r],[jl+s,-Wl/2+s,2*r],[a-s,-Wl/2+s,3*r]].forEach(O=>{for(let F=0;F<=8;F++){let G=O[2]+F/8*r;o.push(O[0]+s*Math.cos(G),O[1]+s*Math.sin(G))}}),i.add(new Ne(bu(o,Qm,iR,420),t.gloss(oi.usb,.32)));let l=new ht,c=new st({color:2763047});l.add(new Ne(t.ext(t.rr(e0-.03,Eu-.03,.02),t0,.012,4),t.gloss(oi.usbPlug,.5))),[1,-1].forEach(O=>[-.1,.1].forEach(F=>{let G=new Ne(new It(.09,.09),c);G.position.set(F,.05,O*(t0/2+.014)),O<0&&(G.rotation.y=Math.PI),l.add(G)}));let d=new Ne(new It(e0-.07,t0-.03),c);d.rotation.x=-r,d.position.y=Eu/2+.001,l.add(d);let h=new Ne(new It(e0-.1,.05),new st({color:14210251}));h.rotation.x=-r,h.position.set(0,Eu/2+.002,-.02),l.add(h),l.rotation.z=r;let p=jl-Eu/2+.04;l.position.x=p,n.add(l);let f=ia.card,g=f.col,y=460,m=Math.round(460*(Au-.06)/(Tu-.06)),u=new ht;u.add(new Ne(t.ext(t.rr(Tu,Au,Math.min(Tu,Au)*.14),.02,.015,4),t.gloss(460551,.35)));let x=document.createElement("canvas");x.width=y,x.height=m;let v=new Ln(x);v.colorSpace=ot,v.anisotropy=4;let _=new st({map:v,toneMapped:!1}),E=new Ne(new It(Tu-.06,Au-.06),_);E.position.z=.03,u.add(E),u.position.set(jl+m_/2+.01,0,Qm-.004),i.add(u);let M="";function T(O){if(O===M)return;M=O;let F=x.getContext("2d");if(O==="title")wu(F,y,m,g,tR,!1);else if(O==="full")Qr(F,y,m,f,g);else{let G=parseInt(O.slice(3),10)||0;Qr(F,y,m,Object.assign({},f,{kw:"\u2588".repeat(G)+"\xB7".repeat(n0-G)}),g)}v.needsUpdate=!0}T("full"),Hs(()=>{let O=M;M="",T(O||"full")});let R=new st({color:new Ge(Zt.hex),transparent:!0,opacity:.25,toneMapped:!1}),S=new Ne(new Gn(.028,24),R);S.position.set(a-.09,Wl/2-.035,Qm+.002),i.add(S);let A=new Ne(new Gn(.07,24),new st({color:new Ge(Zt.hex),transparent:!0,opacity:0,toneMapped:!1,depthWrite:!1}));A.position.copy(S.position),A.position.z+=.001,i.add(A),n.add(i);let P=O=>O<0?0:O>1?1:O,W=O=>(O=P(O),O*O*(3-2*O)),X="idle",L=0,D=null;return function O(){requestAnimationFrame(O),(!D||!D.isConnected)&&(D=document.querySelectorAll(".cardsec .card")[2]||null);let F=!!(D&&D.classList.contains("hit")),G=performance.now(),ie=G/1e3;X==="idle"&&F?(X="play",L=G):X!=="idle"&&!F&&(X="idle",T("full"));let re=0,J=0,de=.25,Z=1,FL=0;if(X==="play"){let ae=(G-L)/1e3,fk=P(ae/1.1);FL=(fk<.5?4*fk*fk*fk:1-Math.pow(-2*fk+2,3)/2)*Math.PI*2;let we=ae-1.1;we>0&&we<.4&&(J=Math.sin(we/.4*Math.PI*2)*(1-we/.4)),ae<1.1?(T("full"),de=Math.sin(ie*30)>0?1:.25):ae<1.45?(T("title"),Z=Math.sin(ae*50)>0?1:.3,de=1):(T("title"),X="on")}X==="on"&&(T("title"),de=.45+.55*(.5+.5*Math.sin(ie*2.2))),_.color.setScalar(Z),n.rotation.x=FL,l.position.x=p,i.position.x=0,n.position.y=J*.05,R.opacity=de,A.material.opacity=Math.max(0,de-.3)*.5}(),e.wrap(n,rR)}var Vi=1,v_=.06,i0=.36,x_=.62,oR='"Doto", "JetBrains Mono", monospace',aR=.85,lR=.24,cR=.14,dR=.055,r0=0;function Vs(t){r0=t}function uR(){return new Ei({transparent:!0,depthWrite:!1,side:mn,vertexShader:"varying vec3 vN; varying vec3 vV; void main() { vec4 mv = modelViewMatrix * vec4(position, 1.0); vN = normalize(normalMatrix * normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix * mv; }",fragmentShader:"varying vec3 vN; varying vec3 vV; void main() { vec3 n = normalize(vN); float f = 1.0 - abs(dot(n, normalize(vV))); float a = 0.035 + 0.5 * pow(f, 2.6); if (gl_FrontFacing) a += 0.3 * pow(max(dot(n, normalize(vec3(-0.45, 0.6, 0.66))), 0.0), 60.0); gl_FragColor = vec4(1.0, 1.0, 1.0, a); }"})}function y_(t,e){let n=document.createElement("canvas");n.width=n.height=256;let i=new Ln(n);i.colorSpace=ot,i.anisotropy=4;function r(){let o=n.getContext("2d");o.clearRect(0,0,256,256),o.textAlign="center",o.textBaseline="middle",o.shadowColor="rgba(255,120,165,.9)",o.shadowBlur=12,o.fillStyle=e,o.font="900 230px "+oR,o.fillText(t,131,132),i.needsUpdate=!0}r(),document.fonts&&document.fonts.load&&document.fonts.load("900 60px Doto").then(r,()=>{});let s=new Ne(new It(x_,x_),new st({map:i,transparent:!0,toneMapped:!1,side:mn,depthWrite:!1}));return s.renderOrder=-1,s}function __(t,e){let n=new ht,i=Math.PI;n.add(new Ne(new Kr(Vi,72,36,0,i*2,i/2,i/2),t.gloss(oi.capsule,.28)));let r=new Ne(new Kr(Vi-v_,72,36,0,i*2,i/2,i/2),new Wn({color:oi.capsuleInside,roughness:.4,side:Jt}));n.add(r);let s=new Ne(new Ds(Vi-v_,Vi,96),t.gloss(oi.capsule,.28));s.rotation.x=-i/2,s.position.y=.001,n.add(s);let o=new Ne(new kl(Vi+.002,.022,16,96),t.gloss(oi.capsule,.28));o.rotation.x=i/2,o.position.y=-.03,n.add(o);let a=y_("?",qm.question),l=y_("!",qm.bang);a.position.y=i0,l.position.y=i0,l.visible=!1,n.add(a),n.add(l);let c=new ht;c.position.set(-Vi,0,0);let d=new Ne(new Kr(Vi,72,36,0,i*2,0,i/2),uR());d.position.set(Vi,0,0),c.add(d);let h=new Ne(new kl(Vi,.012,10,96),new st({color:16777215,transparent:!0,opacity:.4,depthWrite:!1}));h.rotation.x=i/2,h.position.set(Vi,.016,0),c.add(h),n.add(c),n.rotation.z=.2;let p=0;return function f(){requestAnimationFrame(f),!(Math.abs(r0-p)<.001)&&(p+=(r0-p)*dR,c.rotation.z=p*aR,n.position.set(p*cR,-p*lR,0),a.visible=p<.5,l.visible=p>=.5,l.position.y=i0+p*.3,l.scale.setScalar(1+p*.3))}(),e.wrap(n,1.12)}var b_=xu==="matte",w_='900 {px}px "Doto", "JetBrains Mono", monospace',hR='700 {px}px "JetBrains Mono", monospace',pR=.7,fR=.32;function mR(){if(document.getElementById("font-vt323"))return;let t=document.createElement("link");t.id="font-vt323",t.rel="stylesheet",t.href="https://fonts.googleapis.com/css2?family=VT323&display=swap",document.head.appendChild(t)}function Qr(t,e,n,i,r){t.shadowBlur=0,t.fillStyle=r.bg,t.fillRect(0,0,e,n),t.textAlign="center",t.textBaseline="middle",t.fillStyle=r.ink,t.shadowColor=r.glow;let s=i.noScale||1,o=!!i.neon,a=Math.round(n*fR*s);for(t.font=w_.replace("{px}",a);a>12&&t.measureText(i.no).width>e*Math.min(.9,pR*s);)a-=2,t.font=w_.replace("{px}",a);let l=Math.max(12,Math.round(n*.17*(i.kwScale||1))),c=a*.8,d=n*(i.gap===void 0?.2:i.gap),h=c+d+l,p=(n-h)/2+n*(i.drop||0),f=p+c/2,g=p+c+d+l/2,y=i.kw.split("").join("\u200A\u200A");o&&(t.shadowBlur=22,t.fillText(i.no,e/2,f)),t.shadowBlur=o?7:9,t.fillText(i.no,e/2,f),t.font=hR.replace("{px}",l),t.globalAlpha=o?1:.8,o&&(t.shadowBlur=16,t.fillText(y,e/2,g)),t.shadowBlur=4,t.fillText(y,e/2,g),t.globalAlpha=1,t.shadowBlur=0,t.fillStyle="rgba(0,0,0,.16)";for(let m=0;m<n;m+=4)t.fillRect(0,m,e,1)}function Hs(t){mR(),document.fonts&&document.fonts.load&&Promise.all([document.fonts.load("900 60px Doto"),document.fonts.load('700 20px "JetBrains Mono"')]).then(t,t),document.fonts&&document.fonts.ready&&document.fonts.ready.then(t,()=>{})}function gR(t,e,n,i,r,s){let o=new ht,a=s.col||Ul.pink;o.add(new Ne(t.ext(t.rr(e,n,Math.min(e,n)*.14),.02,.015,4),t.gloss(b_?460551:1512474,.35)));let l=document.createElement("canvas");l.width=i,l.height=r;let c=new Ln(l);c.colorSpace=ot,c.anisotropy=4;let d=new Ne(new It(e-.06,n-.06),new st({map:c,toneMapped:!1}));if(d.position.z=.03,o.add(d),!b_){let p=new Ne(new It(e-.02,n-.02),new Wn({color:16777215,transparent:!0,opacity:.05,roughness:.04,metalness:0,envMapIntensity:1.2,depthWrite:!1}));p.position.z=.036,o.add(p)}function h(){Qr(l.getContext("2d"),i,r,s,a),c.needsUpdate=!0}return h(),Hs(h),o}function vR(t,e){let n=new ht;return n.add(t),n.scale.setScalar(e),n}function S_(t){let e={screen:gR,wrap:vR};return{lock:u_(t,e),case:f_(t,e),folder:g_(t,e),box:__(t,e)}}function M_(t,e){var n=xu==="matte",i=new El({alpha:!0,antialias:!0});i.setPixelRatio(1),i.setSize(t,t,!1),i.setClearColor(0,0),i.toneMapping=Bm,i.toneMappingExposure=1.05;var r=new Tl;r.add(new Ne(new ks(24,24,24),new st({color:3815997,side:Jt})));function s(m,u,x,v,_,E,M){M=M||[1,1,1];var T=new Ne(new It(m,u),new st({color:new Ge(E*M[0],E*M[1],E*M[2]),side:mn}));T.position.set(x,v,_),T.lookAt(0,0,0),r.add(T)}s(12,7,0,10,3,7),s(6,9,-10,2,4,4),s(5,9,10,1,-3,3.4,[1,.42,.62]),s(6,4,-7,-8,2,1.6,[1,.5,.68]),s(9,4,0,-10,4,1),s(9,8,1,2,11,3.2);var o=new Zo(i),a=new Tl;a.environment=o.fromScene(r,.03).texture,o.dispose();var l=new wn(28,1,.1,50);l.position.set(0,0,8);var c=new pu(16777215,n?2.6:1.5);n?c.position.set(-4.5,6,5):c.position.set(-2.5,3.5,8),a.add(c);function d(m,u,x,v,_,E){v===void 0&&(v=_=E=x);var M=new Bi,T=-m/2,R=-u/2;return M.moveTo(T+E,R),M.lineTo(T+m-_,R),M.quadraticCurveTo(T+m,R,T+m,R+_),M.lineTo(T+m,R+u-v),M.quadraticCurveTo(T+m,R+u,T+m-v,R+u),M.lineTo(T+x,R+u),M.quadraticCurveTo(T,R+u,T,R+u-x),M.lineTo(T,R+E),M.quadraticCurveTo(T,R,T+E,R),M}function h(m,u,x,v){var _=new Qo(m,{depth:u,bevelEnabled:!0,bevelThickness:x,bevelSize:x,bevelSegments:v||10,curveSegments:48});return _.translate(0,0,-u/2),_}function p(m,u){return new Wn({color:m,roughness:u,metalness:0,clearcoat:1,clearcoatRoughness:.12,envMapIntensity:1})}var f=new hu;f.setCrossOrigin("anonymous");function g(m,u,x,v,_,E,M){for(var T=m.attributes.position,R=m.attributes.normal,S=m.attributes.uv,A=.93,P=0;P<T.count;P++){var W=.5+T.getX(P)/u*A,X=.5+T.getY(P)/x*A;R.getZ(P)<-.25&&(W=E[0],X=E[1]),S.setXY(P,_[0]+(_[2]-_[0])*W,_[1]+(_[3]-_[1])*X)}S.needsUpdate=!0;var L=new Wn({color:M,roughness:.3,metalness:0,clearcoat:.6,clearcoatRoughness:.18,envMapIntensity:.4});return f.load(v,function(D){D.colorSpace=ot,D.anisotropy=4,L.map=D,L.emissiveMap=D,L.emissive=new Ge(16777215),L.emissiveIntensity=.3,L.color.set(12171705),L.needsUpdate=!0}),new Ne(m,L)}var y=S_({rr:d,ext:h,gloss:p,photoBody:g,photos:e});return n&&Object.keys(y).forEach(function(m){y[m].traverse(function(u){var x=u.material;!x||!x.isMeshStandardMaterial||(x.metalness=0,x.clearcoat=0,x.transparent?(x.roughness=.7,x.envMapIntensity=.5,x.specularIntensity=.3):(x.roughness=1,x.specularIntensity=0,x.envMapIntensity=.5),x.needsUpdate=!0)})}),Object.keys(y).forEach(function(m){y[m].visible=!1,a.add(y[m])}),{draw:function(m,u,x){if(m==="lock")try{d_()}catch{}var v=y[m];v.rotation.set(u[0],u[1],u[2]),v.visible=!0,i.render(a,l),v.visible=!1,x.clearRect(0,0,t,t),x.drawImage(i.domElement,0,0)},dispose:function(){i.dispose()}}}var E_={lock:{A:[.2,.5,.64,570],Am:[.2,.26,.72],B:[.2,.76,.64,.396],Bm:[.25,.26,.92],blur:6,ob:2.5,E:[-.3,-.06],k:4,side:-1},case:{A:[.85,.62,.57,510],Am:[.76,.72,.6],B:[.8,.33,.57,.354],Bm:[.74,.76,.86],blur:3.2,ob:2.5,E:[-.1,-.06],k:4,side:1},folder:{A:[.64,.22,.48,430],Am:[.78,.22,.43],B:[.28,.24,.48,.299],Bm:[.76,.19,.6],blur:.8,ob:.8,E:[.1,-.06],k:4,side:-1},box:{A:[.43,.81,.32,280],Am:[.26,.76,.4],B:[.73,.77,.32,.194],Bm:[.26,.78,.52],blur:.4,ob:.6,E:[.3,-.06],k:4,side:1}},T_={lock:[0,0,.58],case:[0,0,.21],folder:[0,0,-.24],box:[.1,0,-.45]},Gs=.5,oa=.3,A_=.55,Xl={y:.56,size:.46,maxW:.3,splitX:.76},Cu={fit:.62,size:.24,pose:{lock:[.12,-.3,.02],case:[.14,.3,0],folder:[.14,.32,-.02],box:[.3,-.45,.04]}},Ru=[.82,.97],C_=[.88,.88,.88,.42],R_=[.5,.62,.5,.4],P_=[[.74,.5],[.26,.5],[.74,.5],[.2,.52]],Pu=[[.74,.5],[.26,.5],[.74,.5],[.5,.52]];var xR=en(ss());var lt=14,ql=7,yR=1,ca=86,_R=1.25,bR=.4,L_=.85,ai=305,I_=.3,wR=.07,k_=2.5,SR=.12,MR=.05,ER=.06,TR=.55,AR=.25,CR=900,RR=600,N_=.7,D_=.95,U_=.16,PR=750,O_=1e3,LR=.14,IR=.12,kR=.2,NR=.12,Lu=16,F_=1800,Gi=Ol.rgb,Iu={lock:[43,255,126],case:[154,75,255],folder:[205,74,60],box:Ol.rgb,none:[255,228,214]},DR=.32,z_=[".###.","#...#","....#","..##.","..#..",".....","..#.."],B_=["#","#","#","#","#",".","#"],UR=.045,OR=.07,aa=2.6,FR=.035,zR=.16,H_=9e3,la=90,BR=.05,Ai=t=>(t=t<0?0:t>1?1:t,t*t*(3-2*t)),V_=t=>(t=t<0?0:t>1?1:t,t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2),ku=(t,e,n)=>[t[0]+(e[0]-t[0])*n,t[1]+(e[1]-t[1])*n,t[2]+(e[2]-t[2])*n],ns=t=>Math.round(t[0])+","+Math.round(t[1])+","+Math.round(t[2]),HR=2*(ca*L_)*(ca*L_),G_=t=>t>=ai?0:(Math.pow(1/(1+t/ca*(t/ca)),_R)+bR*Math.exp(-(t*t)/HR))*(1-Ai(t/ai)),s0=!1;function W_(){if(s0)return()=>{};s0=!0;let t=window.matchMedia("(prefers-reduced-motion: reduce)").matches,e=document.documentElement,n=null,i=null,r=null,s=null,o=null,a=null,l=null,c=0,d=0,h=!1,p=0,f=0,g=0,y=0,m=0,u=0,x=-1,v=!1,_=0,E=0,M=!1,T=0,R=0,S=0,A="",P=0,W=-1e9,X=null,L=null,D=[],O=Iu.none.slice(),F=[],G=new WeakSet,ie=2*Lu*Lu,re=[];for(let w=0;w<=28;w++){let b=w/28,I=b*ai;re.push([b,G_(I),Ai(I/(ca*k_))])}let J=()=>v?"rgba(20,18,20,"+OR+")":"rgba(255,255,255,"+UR+")",de=(w,b,I,j)=>{let oe=aa*(j/ql);w.beginPath(),w.arc(b,I,oe,0,Math.PI*2),w.fill()},Z=()=>{if(!n)return;let w=Math.min(window.devicePixelRatio||1,2);p=window.innerWidth,f=window.innerHeight,i.width=Math.round(p*w),i.height=Math.round(f*w),r.setTransform(w,0,0,w,0,0),g=Math.ceil(p/lt)+1,y=Math.ceil(f/lt)+1,m=(p-(g-1)*lt)/2,u=(f-(y-1)*lt)/2,v=e.dataset.tone==="light",s=document.createElement("canvas"),s.width=i.width,s.height=i.height;let b=s.getContext("2d");b.setTransform(w,0,0,w,0,0),b.fillStyle=J(),b.beginPath();for(let j=0;j<g;j++)for(let oe=0;oe<y;oe++){let ee=m+j*lt,_e=u+oe*lt;b.moveTo(ee+aa,_e),b.arc(ee,_e,aa,0,Math.PI*2)}b.fill(),D=[];let I=Math.round(g*y*FR);for(let j=0;j<I;j++)D.push({x:m+Math.floor(Math.random()*g)*lt,y:u+Math.floor(Math.random()*y)*lt,p:Math.random()*Math.PI*2,s:4e-4+Math.random()*.0012,w:Math.random()<.18});X=null},ae=(w,b,I,j,oe)=>{t||F.push({x:w,y:b,max:I,a:j,t:performance.now(),col:oe})},we=w=>{if(!w)return null;let b=w.getBoundingClientRect();return b.width?{x:b.left+b.width/2,y:b.top+b.height/2}:null},Ie=()=>X||(X=we(n.querySelector(".glyphs"))||{x:p/2,y:f/2}),Re=()=>{let w=null,b=1/0;return n.querySelectorAll(".obj[data-obj]").forEach(I=>{let j=I.getBoundingClientRect();if(j.width<4)return;let oe=Math.hypot(j.left+j.width/2-T,j.top+j.height/2-R)-j.width*.3;oe<b&&(b=oe,w=I.dataset.obj)}),w&&b<Math.max(p,f)*DR&&Iu[w]?Iu[w]:Iu.none},Ue=(w,b,I,j)=>{if(j<=.004)return;let oe=w[0].length,ee=Math.round((b.x-m)/lt)-Math.floor(oe/2),_e=Math.round((b.y-u)/lt)-3;r.fillStyle="rgba("+ns(I)+","+Math.min(1,j).toFixed(3)+")";for(let ue=0;ue<7;ue++)for(let k=0;k<oe;k++)w[ue][k]==="#"&&de(r,m+(ee+k)*lt,u+(_e+ue)*lt,ql+3)},Oe=(w,b,I)=>{if(I<=.004)return;let j=r.createRadialGradient(w.x,w.y,0,w.x,w.y,b);j.addColorStop(0,"rgba("+ns(Gi)+","+I.toFixed(3)+")"),j.addColorStop(.45,"rgba("+ns(Gi)+","+(I*.35).toFixed(3)+")"),j.addColorStop(1,"rgba("+ns(Gi)+",0)"),r.fillStyle=j,r.fillRect(w.x-b,w.y-b,b*2,b*2)},Pe=(w,b)=>{if(b<=.004)return;Oe(w,40,.2*b);let I=Math.round((w.x-m)/lt),j=Math.round((w.y-u)/lt);for(let oe=I-2;oe<=I+2;oe++)for(let ee=j-2;ee<=j+2;ee++){let _e=m+oe*lt,ue=u+ee*lt,k=Math.hypot(_e-w.x,ue-w.y),q=1-k/(lt*2.2);q<=0||(r.fillStyle="rgba("+ns(Gi)+","+(b*q).toFixed(3)+")",de(r,_e,ue,ql))}},ze=w=>{M=!0,S<.02&&(T=w.clientX,R=w.clientY),_=w.clientX,E=w.clientY},N=()=>{M=!1},$=w=>{x>.5&&ae(w.clientX,w.clientY,Math.hypot(p,f)*.32,NR,O.slice())},B=()=>{let w=n.dataset.phase,b=performance.now();if(w!==A){if(w==="q"){X=null,W=b;let I=Ie();ae(I.x,I.y,Math.hypot(p,f)*.7,IR,Gi)}if(w==="bang"){let I=Ie();ae(I.x,I.y,Math.hypot(p,f)*.62,LR,Gi)}w==="flip"&&(L=we(n.querySelector(".nm .ii"))),w==="name"&&(L=we(n.querySelector(".nm .ii"))||L),A=w,P=b}},se=w=>{for(let b of w){let I=b.target;if(!(!I.classList||!I.classList.contains("ch")))if(I.classList.contains("on")){if(!G.has(I)){G.add(I);let j=we(I);j&&I.textContent.trim()&&ae(j.x,j.y,70,kR,Gi)}}else G.delete(I)}},H=w=>{let b=w%H_/H_*(f+la*2)-la,I=r.createLinearGradient(0,b-la,0,b+la);I.addColorStop(0,"rgba(255,255,255,0)"),I.addColorStop(.5,"rgba(255,255,255,"+BR+")"),I.addColorStop(1,"rgba(255,255,255,0)"),r.fillStyle=I,r.beginPath();let j=Math.max(0,Math.floor((b-la-u)/lt)),oe=Math.min(y-1,Math.ceil((b+la-u)/lt));for(let ee=0;ee<g;ee++)for(let _e=j;_e<=oe;_e++){let ue=m+ee*lt,k=u+_e*lt;r.moveTo(ue+aa,k),r.arc(ue,k,aa,0,Math.PI*2)}r.fill();for(let ee of D){let _e=Math.sin(w*ee.s+ee.p);if(_e<=.2)continue;let ue=zR*Ai((_e-.2)/.8);r.fillStyle=ee.w?"rgba("+ns(Gi)+","+(ue*.9).toFixed(3)+")":"rgba(255,236,226,"+ue.toFixed(3)+")",r.beginPath(),r.arc(ee.x,ee.y,aa,0,Math.PI*2),r.fill()}},ge=w=>{if(c=requestAnimationFrame(ge),document.hidden)return;let b=1-Ai(window.scrollY/(f*TR));if(b!==x&&(x=b,i.style.setProperty("--vis",b.toFixed(3)),i.style.opacity=b.toFixed(3)),x<=0){F.length=0;return}let I=t?1:SR;if(T+=(_-T)*I,R+=(E-R)*I,S+=((M?1:0)-S)*(t?1:MR),S>.005){let k=Re();for(let q=0;q<3;q++)O[q]+=(k[q]-O[q])*(t?1:ER)}let j=O,oe=ku(O,[255,255,255],AR);for(let k=F.length-1;k>=0;k--)w-F[k].t>F_&&F.splice(k,1);let ee=S>.005,_e=w-P,ue=t||A!=="q"&&A!=="reset"?1:Ai((w-W)/CR);if(r.clearRect(0,0,p,f),ee){let k=r.createRadialGradient(T,R,0,T,R,ai);re.forEach(([q,he,te])=>k.addColorStop(q,"rgba("+ns(ku(j,oe,te))+","+Math.min(1,wR*he*S).toFixed(4)+")")),r.fillStyle=k,r.fillRect(T-ai,R-ai,ai*2,ai*2)}if(ue>=1)r.drawImage(s,0,0,p,f),!t&&A==="objects"&&H(w);else{let k=Ie(),q=ue*Math.hypot(p,f)*.7;r.fillStyle=J();for(let he=0;he<g;he++)for(let te=0;te<y;te++){let be=m+he*lt,Me=u+te*lt;Math.hypot(be-k.x,Me-k.y)<q&&de(r,be,Me,ql)}}if(ee||F.length){let k=0,q=g-1,he=0,te=y-1;F.length||(k=Math.max(0,Math.floor((T-m-ai)/lt)),q=Math.min(g-1,Math.ceil((T-m+ai)/lt)),he=Math.max(0,Math.floor((R-u-ai)/lt)),te=Math.min(y-1,Math.ceil((R-u+ai)/lt)));let be=F.map(Me=>{let Ce=(w-Me.t)/F_;return{x:Me.x,y:Me.y,R:Me.max*(1-Math.pow(1-Ce,3)),a:Me.a*Math.pow(1-Ce,1.4),col:Me.col}});for(let Me=k;Me<=q;Me++)for(let Ce=he;Ce<=te;Ce++){let Se=m+Me*lt,ye=u+Ce*lt,Ee=0,$e=1e9;ee&&($e=Math.hypot(Se-T,ye-R),Ee=I_*G_($e)*S);let nt=0,Be=null;for(let me of be){let De=Math.hypot(Se-me.x,ye-me.y)-me.R;if(De>-3*Lu&&De<3*Lu){let Ae=me.a*Math.exp(-(De*De)/ie);Ae>nt&&(nt=Ae,Be=me.col)}}let pe=Ee+nt;if(pe<.003)continue;let U=Ee>=nt?ku(j,oe,Ai($e/(ca*k_))):ku(Be||j,[255,255,255],.2),ve=ql+yR*Math.min(1,Ee/I_);r.fillStyle="rgba("+ns(U)+","+Math.min(1,pe).toFixed(3)+")",de(r,Se,ye,ve)}}if(!t){let k=Ie(),q=v?[110,104,108]:[150,150,150];if(A==="q")Ue(z_,k,q,N_*Ai((w-W-RR)/500));else if(A==="bang"){let he=Ai(_e/250);Ue(z_,k,q,N_*(1-he)),Oe(k,90,U_*he),Ue(B_,k,Gi,D_*he)}else if(A==="flip"){let he=_e/PR,te=1-Ai(he/.55);Oe(k,90,U_*te),Ue(B_,k,Gi,D_*te),L&&Pe({x:k.x+(L.x-k.x)*V_(he),y:k.y+(L.y-k.y)*V_(he)},Ai(he/.3))}else A==="name"&&L&&_e<O_&&Pe(L,1-Ai(_e/O_))}},le=()=>{if(n=document.getElementById("stage"),!n){d=requestAnimationFrame(le);return}let w=n.querySelector(":scope > .dotfield");w&&w.remove(),i=document.createElement("canvas"),i.className="dotfield",i.setAttribute("aria-hidden","true"),n.insertBefore(i,n.firstChild),r=i.getContext("2d"),Z(),B(),o=new MutationObserver(B),o.observe(n,{attributes:!0,attributeFilter:["data-phase"]}),a=new MutationObserver(Z),a.observe(e,{attributes:!0,attributeFilter:["data-tone"]});let b=document.getElementById("ty");b&&(l=new MutationObserver(se),l.observe(b,{attributes:!0,attributeFilter:["class"],subtree:!0})),window.addEventListener("resize",Z),window.addEventListener("pointermove",ze,{passive:!0}),window.addEventListener("pointerdown",$,{passive:!0}),document.addEventListener("pointerleave",N),window.addEventListener("blur",N),h=!0,c=requestAnimationFrame(ge)};return le(),()=>{s0=!1,cancelAnimationFrame(c),cancelAnimationFrame(d),o&&o.disconnect(),a&&a.disconnect(),l&&l.disconnect(),h&&(window.removeEventListener("resize",Z),window.removeEventListener("pointermove",ze),window.removeEventListener("pointerdown",$),document.removeEventListener("pointerleave",N),window.removeEventListener("blur",N)),i&&i.remove()}}var j_="radial-gradient(ellipse 85% 80% at 50% 50%, #000 35%, transparent 100%)",o0="View project",VR={1:["#2bff7e","#0b0b0b","43, 255, 126"],2:["#9a4bff","#0b0b0b","154, 75, 255"],3:["#c4473a","#f7eeec","200, 60, 48"]},Kt="html:root:not([data-stack]) body .page .head.head.head:is(.c1, .c2, .c3)",GR=`
html body .card .stamp { display: none !important; }
html body .cardsec .card .cgo.off::before { content: "${o0}" !important; }
html body .sc.view .sc-dot { background: var(--scc, var(--px)) !important; box-shadow: 0 0 20px rgba(var(--scg, 240, 105, 159), .45) !important; }
html body .sc.view .sc-view { color: var(--sct, #171717) !important; text-shadow: none !important; }
html:root body .page .head.head:is(.c1, .c2, .c3) > .pjno.pjno { font-size: clamp(13px, 1.05vw, 16px) !important; letter-spacing: .01em !important; margin: 0 0 2.4vh !important; }
${Kt} h2.dm.dm { line-height: .92 !important; }
html:root:not([data-stack]) body .page .head.head.head.c3 h2.dm.dm > span > .dot { margin: 0 0 .2em !important; }

${Kt} .hmore { margin: 5vh 0 0 !important; gap: 0 !important; max-width: min(40vw, 640px) !important; }
${Kt} .hcols { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; gap: 0 2.6vw !important; align-items: start !important; }
${Kt} .hcols > div { display: block !important; grid-column: auto !important; }
${Kt} .hcols p.lab { display: flex !important; align-items: center; gap: 8px; margin: 0 0 12px !important; font: 400 11px/1 var(--mono) !important; letter-spacing: .14em !important; color: rgba(255,255,255,.5) !important; }
${Kt} .hcols p.lab b { font-weight: 400; }
${Kt} .hcols p:not(.lab) { display: block !important; margin: 0 !important; font-size: 15px !important; line-height: 1.6 !important; color: #f2f2f2 !important; max-width: none !important; word-break: keep-all; }
${Kt} .hcols .hdesc { margin: 10px 0 0; font-size: 13px; line-height: 1.7; color: rgba(255,255,255,.55); word-break: keep-all; }
${Kt} .hflow { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; margin: 4vh 0 0; }
${Kt} .hflow .st { font: 400 12px/1 var(--mono); color: rgba(255,255,255,.82); padding: 7px 11px 7px 10px; border: 1px solid rgba(255,255,255,.16); border-radius: 999px; white-space: nowrap; }
${Kt} .hflow .st b { color: var(--px); font-weight: 400; margin-right: 6px; }
${Kt} .hflow .ar { color: var(--px); font: 400 12px/1 var(--mono); opacity: .7; }
${Kt} .hstats { display: grid; gap: 0 1.6vw; width: 100%; margin: 4vh 0 0; padding: 2.4vh 0 0; border-top: 1px solid rgba(255,255,255,.12); }
${Kt} .hstats > div { margin: 0; min-width: 0; }
${Kt} .hstats dt { font: 500 clamp(20px, 1.9vw, 30px)/1 var(--mono); color: var(--px); letter-spacing: -.02em; margin: 0; white-space: nowrap; }
${Kt} .hstats dd { font-size: 12px; line-height: 1.45; color: rgba(255,255,255,.55); margin: 8px 0 0; word-break: keep-all; }
${Kt} .hsub, ${Kt} .hside { display: none !important; }
@media (max-width: 640px) {
  .page .head .hcols .hdesc { margin-top: 8px; font-size: 13px; line-height: 1.6; opacity: .7; }
  .page .head .hflow { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 20px; }
  .page .head .hflow .st { font: 400 11px/1 var(--mono); padding: 6px 9px; border: 1px solid rgba(255,255,255,.16); border-radius: 999px; }
  .page .head .hflow .st b { color: var(--px); font-weight: 400; margin-right: 5px; }
  .page .head .hflow .ar { color: var(--px); font-size: 11px; }
  .page .head .hstats { display: grid; grid-template-columns: repeat(2, 1fr) !important; gap: 14px; margin: 22px 0 0; padding-top: 14px; border-top: 1px solid rgba(255,255,255,.12); }
  .page .head .hstats dt { font: 500 22px/1 var(--mono); color: var(--px); }
  .page .head .hstats dd { font-size: 12px; margin: 6px 0 0; opacity: .6; }
}

html:root body .page .panel .ph[data-n] { display: none !important; }

html body .page .foot .gather { position: relative !important; }
.rcpt { position: absolute; right: max(4vw, calc(50% - 560px)); top: 50%; width: 236px; padding: 18px 18px 16px; box-sizing: border-box;
  background: #f3f1ec; color: #161616; font: 400 11px/1.55 var(--mono); letter-spacing: .02em; border-radius: 3px;
  box-shadow: 0 18px 40px rgba(0,0,0,.45); transform: translateY(-50%) rotate(4deg); transform-origin: 50% 0;
  opacity: 0; transition: opacity .6s ease, transform .9s cubic-bezier(.2,.9,.25,1.15); pointer-events: auto; z-index: 0; }
.rcpt.on { opacity: 1; transform: translateY(-50%) rotate(4deg); }
.rcpt:not(.on) { transform: translateY(-62%) rotate(-2deg); }
.rcpt::after { content: ""; position: absolute; left: 0; right: 0; bottom: -7px; height: 8px;
  background: linear-gradient(-45deg, transparent 5px, #f3f1ec 0) 0 0 / 10px 10px repeat-x, linear-gradient(45deg, transparent 5px, #f3f1ec 0) 0 0 / 10px 10px repeat-x; }
.rcpt .rh { display: flex; justify-content: space-between; text-transform: uppercase; letter-spacing: .1em; font-size: 10px; color: #666; }
.rcpt .rt { margin: 10px 0 2px; font-size: 15px; letter-spacing: 0; color: #111; }
.rcpt hr { border: 0; border-top: 1px dashed #b9b5ad; margin: 10px 0; }
.rcpt .ri { display: grid; grid-template-columns: 44px 1fr auto; gap: 0 6px; }
.rcpt .ri b { font-weight: 400; color: var(--rc, #111); }
.rcpt .ri span:last-child { color: #777; }
.rcpt .tot { display: flex; justify-content: space-between; font-size: 12px; color: #111; }
.rcpt .bar { height: 30px; margin: 12px 0 6px; background: repeating-linear-gradient(90deg, #161616 0 2px, transparent 2px 4px, #161616 4px 5px, transparent 5px 8px, #161616 8px 11px, transparent 11px 12px); }
.rcpt .bye { text-align: center; color: #666; font-size: 10px; letter-spacing: .08em; }
@media (max-width: 900px) { .rcpt { display: none; } }
`,WR=`
<div class="rh"><span>Receipt</span><span>No. 2027</span></div>
<div class="rt">Made by Iseo Kim</div>
<div class="rh"><span>UI/UX Designer</span><span>Seoul</span></div>
<hr>
<div class="ri" style="--rc:#1d9a52"><b>PJ.01</b><span>AI Privacy</span><span>2026</span></div>
<div class="ri" style="--rc:#7a3fd6"><b>PJ.02</b><span>SENSE</span><span>2026</span></div>
<div class="ri" style="--rc:#a33a2f"><b>PJ.03</b><span>Lotte Web</span><span>25\u201326</span></div>
<div class="ri" style="--rc:#d94f87"><b>!</b><span>Your project</span><span>Next</span></div>
<hr>
<div class="tot"><span>Total</span><span>3 + 1</span></div>
<div class="bar"></div>
<div class="bye">Thanks for your visit \u2014 let\u2019s talk</div>
`;function jR(){let t=0,e=()=>{let n=document.getElementById("gather");if(!n){t++<200&&requestAnimationFrame(e);return}if(n.querySelector(".rcpt"))return;let i=document.createElement("div");i.className="rcpt",i.setAttribute("aria-label","Receipt: projects made by Iseo Kim"),i.innerHTML=WR,n.appendChild(i),new IntersectionObserver(s=>s.forEach(o=>i.classList.toggle("on",o.isIntersecting)),{threshold:.7}).observe(n)};e()}function X_(){let t=document.getElementById("edots");if(t&&t.remove(),!document.getElementById("nostamp-css")){let l=document.createElement("style");l.id="nostamp-css",l.textContent=GR,document.head.appendChild(l)}let e=0,n=setInterval(()=>{let l=document.getElementById("nostamp-css");l&&l.parentNode&&l!==l.parentNode.lastElementChild&&l.parentNode.appendChild(l),++e>60&&clearInterval(n)},300),i=0,r=()=>{let l=document.querySelectorAll(".cardsec .card .cgo:not(.off) > span:first-child");l.forEach(c=>{c.textContent!==o0&&(c.textContent=o0)}),!l.length&&i++<200&&requestAnimationFrame(r)};r(),jR();try{W_()}catch(l){console.warn(l)}let s=0,o=()=>{let l=document.querySelector("#stage > canvas.dotfield");if(!l){s++<200&&requestAnimationFrame(o);return}let c=l.style;c.position="absolute",c.inset="0",c.width="100%",c.height="100%",c.zIndex="0",c.pointerEvents="none",c.webkitMask=j_,c.mask=j_};o();let a="";window.addEventListener("pointermove",l=>{let c=l.target&&l.target.closest?l.target.closest(".cardsec[data-pj]"):null,d=c?c.dataset.pj:"";if(d===a)return;a=d;let h=document.querySelector(".sc");if(!h)return;let p=VR[d];p?(h.style.setProperty("--scc",p[0]),h.style.setProperty("--sct",p[1]),h.style.setProperty("--scg",p[2])):(h.style.removeProperty("--scc"),h.style.removeProperty("--sct"),h.style.removeProperty("--scg"))},{passive:!0})}var fr={top:166,step:0,foot:0},XR=60,da={c1:{grey:5,ink:"#2bff7e"},c2:{grey:9,ink:"#9a4bff"},c3:{grey:13,ink:Zt.hex}},a0=t=>`color-mix(in srgb, var(--txt) ${t.grey}%, var(--canvas))`,qR=0,YR={h:46,col:100/3,slant:30,gap:10},Ws={close:[.1,.3],move:[.4,.2],open:[.6,.4]},q_="calc(100vh - "+(fr.top+fr.foot)+"px)",Y_="calc("+fr.top+"px + var(--n, 0) * "+fr.step+"px)",$_="3vh",$R=.8,JR=14,ZR=[["lock","PJ.01","AI Privacy","#2bff7e"],["case","PJ.02","SENSE","#9a4bff"],["folder","PJ.03","Lotte Web",Zt.hex],["box","!","Your turn","#f0699f"]],li="html:root body .page .foot",pr=li+" .talk.talk",l0=.86,c0=.14,J_=.2,KR=.17,QR=.2,Z_=.5,d0=t=>(t/Z_).toFixed(3)+"em",eP=`
${pr} { font-size: clamp(34px, 5.2vw, 92px) !important; line-height: 1 !important; }
${pr} a { display: inline-flex !important; align-items: center !important; gap: ${QR}em !important; box-sizing: border-box !important;
  height: ${(l0+2*c0).toFixed(3)}em !important; min-height: 0 !important; padding: 0 ${c0}em 0 ${KR}em !important;
  border: 1px solid rgba(255,255,255,.3) !important; border-radius: ${J_}em !important; line-height: 1 !important; }
${pr} a::before { margin: 0 !important; padding: 0 !important; }
${pr} a > *:not(.arr):not(.sr) { line-height: 1 !important; padding: 0 !important; margin: 0 !important; }
${pr} a .arr { display: grid !important; place-items: center !important; flex: none !important; box-sizing: border-box !important;
  font: 500 ${Z_}em/1 var(--sans) !important; width: ${d0(l0)} !important; height: ${d0(l0)} !important;
  border-radius: ${d0(Math.max(0,J_-c0))} !important; background: var(--px) !important; color: #141214 !important;
  margin: 0 !important; padding: 0 !important; box-shadow: none !important; rotate: none !important; transition: background .25s, color .25s !important; }
${pr} a:hover, ${pr} a:focus-visible { border-color: var(--px) !important; }
${pr} a:hover .arr, ${pr} a:focus-visible .arr { background: #141214 !important; color: var(--px) !important; rotate: none !important; }
`,tP="html:root:not([data-stack]) body .page .head.head.head:is(.c1, .c2, .c3)",nP=`
@media (min-width: 641px) { ${tP} { padding-top: 12vh !important; padding-bottom: 12vh !important; } }
html:root body .page .panel.panel { margin-top: 10vh !important; margin-bottom: 10vh !important; }
${li} { padding-top: 4vh !important; padding-bottom: 32px !important; }
${li} h2.dm.dm { margin-top: 6vh !important; }
${li} .fbar.fbar { margin-top: 5vh !important; }
`,iP=`
body { overflow-x: clip; }
.ov, .ovc { display: none !important; }
.page .head.c1 { --ink: ${da.c1.ink}; } .page .head.c2 { --ink: ${da.c2.ink}; } .page .head.c3 { --ink: ${da.c3.ink}; }
${li} .gather .rcpt { display: none !important; }
${li} .gather.gather { height: calc(.36 * var(--u)) !important; min-height: 220px; margin: ${$_} 0 0 !important; }
${li} .gather.gather::before { top: calc(50% + .02 * var(--u)) !important; width: calc(.7 * var(--u)) !important; height: calc(.05 * var(--u)) !important; }
${li} .live.live { margin-top: ${$_} !important; }
${li} .gather .glab { gap: 8px !important; font-size: 11px !important; color: var(--sub) !important; margin: 0 !important; translate: -50% 0 !important; }
${li} .gather .glab::before, ${li} .gather .glab::after { display: none !important; content: none !important; }
${li} .gather .glab b { color: var(--gc, var(--px)) !important; font-weight: 400 !important; }
${eP}
${nP}
@media (min-width: 641px) {
  :root[data-stack] .page .head, :root[data-stack] .page .head.c1, :root[data-stack] .page .head.c2, :root[data-stack] .page .head.c3 {
    position: sticky; top: ${Y_}; height: ${q_}; padding: 7vh 50vw 4vh 5vw; overflow: visible;
    background: var(--sheet); border: 0; border-radius: 0 12px 0 0; box-shadow: none;
  }
  :root[data-stack] .page .head.c1 { --n: 0; --sheet: ${a0(da.c1)}; margin-top: ${qR}vh; }
  :root[data-stack] .page .head.c2 { --n: 1; --sheet: ${a0(da.c2)}; margin-top: 46vh; }
  :root[data-stack] .page .head.c3 { --n: 2; --sheet: ${a0(da.c3)}; margin-top: 46vh; }
  :root[data-stack] .page .cardsec, :root[data-stack] .page .cardsec.c2 { position: sticky; top: ${Y_}; height: ${q_}; min-height: 0; margin-top: calc(${fr.top+fr.foot}px - 100vh); }
  :root[data-stack="d"] .page .head.c2, :root[data-stack="d"] .page .head.c3 { margin-top: calc(${YR.h}px + ${XR}vh); }
}
:root.measure .page .head, :root.measure .page .cardsec { position: relative !important; top: auto !important; }
`;function rP(){let t=0,e=()=>{let n=document.getElementById("gather");if(!n){t++<300&&requestAnimationFrame(e);return}if(n.querySelector(".glab"))return;let i=ZR.map(([r,s,o,a])=>{let l=document.createElement("span");return l.className="glab",l.setAttribute("aria-hidden","true"),l.style.setProperty("--gc",a),l.innerHTML="<b>"+s+"</b><span>"+o+"</span>",n.appendChild(l),{s:l,obj:r,key:""}});(function r(){requestAnimationFrame(r);let s=n.getBoundingClientRect();s.bottom<-200||s.top>window.innerHeight+200||i.forEach(o=>{let a=document.querySelector('#stage .obj[data-obj="'+o.obj+'"]');if(!a)return;let l=a.getBoundingClientRect();if(l.width<4)return;let c=l.left+l.width/2-s.left,d=l.top+l.height*$R+JR-s.top,h=c.toFixed(0)+","+d.toFixed(0);h!==o.key&&(o.key=h,o.s.style.setProperty("left",c.toFixed(1)+"px","important"),o.s.style.setProperty("top",d.toFixed(1)+"px","important"))})})()};e()}function K_(){if(!document.getElementById("stack-css")){let n=document.createElement("style");n.id="stack-css",n.textContent=iP,document.head.appendChild(n)}let t=document.documentElement;t.dataset.look="d",delete t.dataset.stack,Array.from(document.querySelectorAll(".cardsec")).forEach((n,i)=>n.style.setProperty("--n",String(i))),rP(),window.addEventListener("pointermove",n=>{if(!(n.target&&n.target.closest?n.target.closest('.cardsec[data-pj="3"]'):null))return;let r=document.querySelector(".sc");r&&(r.style.setProperty("--scc",Zt.hex),r.style.setProperty("--scg",Zt.rgb))},{passive:!0});let e=()=>{try{X_()}catch(n){console.warn(n)}};document.querySelector(".pbg")?e():setTimeout(e,600)}var Q_={lock:[.2,.76],case:[.8,.33],folder:[.28,.24],box:[.73,.77]},ua={lock:[0,0,.58],case:[0,0,.21],folder:[0,0,-.24],box:[.1,0,-.45]};var u0={lock:["PROJECT 01","AI Privacy Protection"],case:["PROJECT 02","SENSE"],folder:["PROJECT 03","Lotte Web Design"],box:["NEXT PROJECT","Coming soon"]},eb={lock:.38,case:.28,folder:.42,box:.46},tb=22;function h0(t,e,n){return[t[0]+0*e*n,t[1],t[2]]}var nb="https://cdn.jsdelivr.net/gh/iseonve/iseo_portfolio@main/img/",sP="PJ.0",ib=1.08,oP=[null,{s:1.15,l:.4,x:-.42,y:.55},{s:1.6,l:1,x:.12,y:-.55}],rb=[{s:1.15,l:.55},{s:.95,l:.3},{s:1.4,l:.85}],aP=[0,.12,.24,.36];function lP(t){return 1+2.2*Math.pow(t-1,3)+1.2*Math.pow(t-1,2)}function sb(t){var e=document.documentElement,n=!0,i=window.matchMedia("(prefers-reduced-motion: reduce)").matches,r=0,s=0,o=0,a=null,l=document.getElementById("cue"),c=t.querySelector(".id"),d=document.getElementById("ov"),h=document.getElementById("ty"),p=document.getElementById("ii"),f=[];h.textContent="","seo Kim".split("").forEach(function(k){var q=document.createElement("span");q.className="ch",q.textContent=k,h.appendChild(q),f.push(q)});function g(k){p.classList.remove("caret"),f.forEach(function(q,he){q.classList.toggle("on",!!k),q.classList.toggle("caret",!!k&&he===f.length-1)}),t.classList.toggle("typed",!!k)}var y=document.getElementById("load"),m=document.getElementById("cur"),u=document.getElementById("flash");function x(k){return new Promise(function(q){setTimeout(q,k)})}function v(k,q){return new Promise(function(he){var te=performance.now();(function be(Me){var Ce=Math.max(0,Math.min(1,(Me-te)/k));q(Ce<.5?2*Ce*Ce:1-Math.pow(-2*Ce+2,2)/2),Ce<1?requestAnimationFrame(be):he()})(te)})}var _=[0,0];function E(k,q){_=[k,q],m.style.transform="translate("+k+"px,"+q+"px)"}function M(k,q,he){var te=_[0],be=_[1],Me=(te+k)/2+120,Ce=Math.min(be,q)-80;return v(he,function(Se){var ye=1-Se;E(ye*ye*te+2*ye*Se*Me+Se*Se*k,ye*ye*be+2*ye*Se*Ce+Se*Se*q)})}function T(){var k=document.getElementById("glyphs").getBoundingClientRect(),q=p.getBoundingClientRect(),he=parseFloat(getComputedStyle(document.getElementById("bang")).fontSize),te=parseFloat(getComputedStyle(document.getElementById("nm")).fontSize);t.style.setProperty("--tx",(q.left+q.width/2-(k.left+k.width/2)).toFixed(1)+"px"),t.style.setProperty("--ty",(q.top+q.height/2-(k.top+k.height/2)).toFixed(1)+"px"),t.style.setProperty("--sc",(te/he).toFixed(3))}(function k(){if(n){o+=(s-o)*.06,Math.abs(s-o)<.3&&(o=s);var q=Math.round(o);y.textContent=q>=100?"100":("00"+q).slice(-3),y.classList.toggle("done",q>=100),requestAnimationFrame(k)}})();function R(k){e.classList.toggle("lock",k)}async function S(){var k=++r;if(g(!1),R(!0),window.scrollTo(0,0),c.style.transform="",c.style.opacity="",t.classList.remove("settled"),a=null,T(),m.classList.remove("on","click"),u.classList.remove("go"),i){g(!0),s=o=100,t.dataset.phase="objects",a=performance.now()-9e3,t.classList.add("settled"),R(!1);return}s=0,o=0,t.dataset.phase="reset",t.offsetWidth,t.dataset.phase="q";var q=t.getBoundingClientRect(),he=document.getElementById("glyphs").getBoundingClientRect(),te=he.left-q.left+he.width/2,be=he.top-q.top+he.height/2,Me=he.height;if(E(q.width+40,q.height*.8),s=30,await x(900),k===r&&(s=42,await x(450),k===r&&(E(q.width*.7,q.height*.72),m.classList.add("on"),s=58,await M(te-Me*.1,be-Me*.3,650),k===r))){s=84,m.classList.add("click"),t.dataset.phase="bang",u.offsetWidth,u.classList.add("go");var Ce=_.slice();if(await v(700,function(ye){E(Ce[0]+Me*.12*ye,Ce[1]+Me*.5*ye)}),k===r&&(m.classList.remove("click"),await x(250),k===r&&(m.classList.remove("on"),s=92,await x(350),k===r&&(t.dataset.phase="flip",await x(750),k===r&&(s=100,T(),t.dataset.phase="name",await x(950),k===r&&(p.classList.add("caret"),await x(320),k===r)))))){for(var Se=0;Se<f.length;Se++)if(p.classList.remove("caret"),Se&&f[Se-1].classList.remove("caret"),f[Se].classList.add("on","caret"),await x(f[Se].textContent===" "?60:85+Math.random()*70),k!==r)return;t.classList.add("typed"),await x(900),k===r&&(t.dataset.phase="objects",a=performance.now(),await x(2800),k===r&&(t.classList.add("settled"),R(!1)))}}}function A(){if(!(i||t.dataset.phase==="objects")){var k=++r;g(!0),s=o=100,m.classList.remove("on","click"),t.dataset.phase="objects",a=performance.now(),setTimeout(function(){k===r&&(t.classList.add("settled"),R(!1))},1700)}}window.addEventListener("wheel",A,{passive:!0}),window.addEventListener("touchmove",A,{passive:!0}),window.addEventListener("keydown",function(k){(k.key===" "||k.key==="Enter"||k.key==="ArrowDown"||k.key==="PageDown")&&A()}),document.getElementById("replay").addEventListener("click",S);var P=document.getElementById("tone");P.addEventListener("click",function(){var k=e.dataset.tone!=="light";k?e.dataset.tone="light":delete e.dataset.tone,P.textContent=k?"Dark ver.":"Light ver.",P.setAttribute("aria-pressed",String(k))});var W=0,X=0,L=0,D=0;window.addEventListener("pointermove",function(k){i||k.pointerType==="touch"||(W=k.clientX/window.innerWidth*2-1,X=k.clientY/window.innerHeight*2-1)});var O=0,F=0,G=0,ie=1,re=!1,J={head:[],slot:[],g:{x:0,y:0},ny:0},de=Array.prototype.slice.call(document.querySelectorAll(".head")),Z=Array.prototype.slice.call(document.querySelectorAll(".slot")),ae=document.getElementById("gather"),we=document.querySelector(".panel"),Ie=52,Re=70,Ue=[],Oe=Array.prototype.slice.call(document.querySelectorAll(".card")),Pe=Oe.map(function(k){var q=k.querySelector(".cbox"),he=k.querySelector(".cno");return q||(q=document.createElement("div"),q.className="cbox",k.insertBefore(q,k.firstChild),he&&q.appendChild(he)),q});function ze(){O=window.innerWidth,F=window.innerHeight,G=Math.min(O,F),re=O<=640;var k=window.scrollY;e.classList.add("measure"),J.head=de.map(function(te){var be=te.getBoundingClientRect();return be.top+k+be.height/2}),J.slot=Z.map(function(te){var be=te.getBoundingClientRect();return{x:be.left+be.width/2,y:be.top+k+be.height/2,h:be.height,ry:be.top+be.height/2,rr:be.top+be.height/2,so:-1}}),J.card=Oe.map(function(te,be){var Me=te.getBoundingClientRect(),Ce=J.slot[be];return{w:Me.width,h:Me.height,cx:Ce.x-Me.left,cy:Ce.y-k-Me.top}}),Ue=[];var q=ae.getBoundingClientRect();if(J.g={x:q.left+q.width/2,y:q.top+k+q.height/2},e.classList.remove("measure"),ie=t.querySelector(".obj").offsetWidth||1,k<1||!J.ny){var he=document.getElementById("nm").getBoundingClientRect();J.ny=he.height?he.top+he.height/2:F/2}T()}window.addEventListener("resize",ze),window.addEventListener("load",ze),document.fonts&&document.fonts.ready&&document.fonts.ready.then(ze),K_();var N=Array.prototype.slice.call(document.querySelectorAll("#looks button"));N.forEach(function(k){k.addEventListener("click",function(){var q=0,he=1e9;de.forEach(function(Me,Ce){var Se=Math.abs(Me.getBoundingClientRect().top);Se<he&&(he=Se,q=Ce)});var te=he<F*1.2,be=de[q].getBoundingClientRect().top;delete e.dataset.stack,k.dataset.look==="a"?delete e.dataset.look:k.dataset.look==="e"?(e.dataset.look="d",e.dataset.stack="1"):k.dataset.look==="f"?(e.dataset.look="d",e.dataset.stack="d"):e.dataset.look=k.dataset.look,N.forEach(function(Me){Me.setAttribute("aria-pressed",String(Me===k))}),ze(),te&&window.scrollTo(0,de[q].getBoundingClientRect().top+window.scrollY-be)})});var $={lock:[.04,-.22,.1],case:[.3,.12,-.06],folder:[.08,.3,-.42],box:[.3,-.5,.22]},B={lock:[.05,-.28,.03],case:[.1,.32,-.03],folder:[.1,.32,-.05],box:[.3,-.5,.08]};function se(k){return[k[0]*O,k[1]*F]}function H(k){return k<0?0:k>1?1:k}function ge(k){return k<.5?4*k*k*k:1-Math.pow(-2*k+2,3)/2}function le(k,q,he){return k+(q-k)*he}function w(k,q,he){return[le(k[0],q[0],he),le(k[1],q[1],he),le(k[2],q[2],he)]}function b(k){return rb[k]||rb[0]}var I=Ru[0];function j(k,q,he,te,be){var Me=E_[q],Ce=he/F,Se=re?Me.Am:Me.A,ye=re?Me.Bm:Me.B,Ee=[Se[0]*O,Se[1]*F,re?Se[2]*G:Math.min(Se[2]*G,Se[3])],$e=[ye[0]*O,ye[1]*F,re?ye[2]*G:Math.min(ye[2]*G,ye[3]*O)];if(!re){var nt=Q_[q];Ee[0]=nt[0]*O,Ee[1]=nt[1]*F}var Be=[(re?R_[k]:e.dataset.look==="d"?Xl.splitX:C_[k])*O,F*(re?.5:Xl.y),re?.9*G:Math.min(Xl.size*G,Xl.maxW*O)],pe=ge(H(Ce/Gs)),U=Me.k*.5,ve=le(Ee[0]+L*U*(1-pe),$e[0],pe),me=le(Ee[1]+D*U*(1-pe),$e[1],pe),De=le(Ee[2],$e[2],pe),Ae=0,He=le(1,re||k===3?I:1,pe),et=i?ua[q]:h0(ua[q],te,k),ct=w(et,(re?$:T_)[q],pe),wt=0,Je=ge(H((Ce-(re?Gs:oa))/A_));if(k===0)ve=le(ve,Be[0],Je),me=le(me,Be[1],Je),De=le(De,Be[2],Je),He=le(He,1,Je),wt=Je;else{ve+=($e[0]-O/2)*.5*Je,me-=Je*F*1.35;var dt=oP[k]||{s:1.35,l:.75,x:Me.side*.22,y:1.45},on=J.head[k]-he,ci=ge(H((dt.s*F-on)/(dt.l*F)));ci>0&&(ve=le(O/2+dt.x*O,Be[0],ci),me=le(dt.y*F,Be[1],ci),De=Be[2],He=1,wt=1)}wt>0&&(ct=w(ct,i?ua[q]:h0(ua[q],te,k),wt));var Sn=J.slot[k];if(Sn){var Li=Sn.ry,In=b(k),Qt=ge(H((In.s*F-Li)/(In.l*F))),Ii=Sn.so>=0;Ii&&k>0&&(Qt=Sn.sa),Qt>0&&(ve=le(ve,Sn.x,Qt),me=le(me,Sn.rr,Qt),De=le(De,Sn.h*1.32,Qt),ct=w(ct,B[q],Qt));var qn=Ii?Sn.so:ge(H((.42*F-Li)/(.3*F)));if(qn>0){var di=Ii?Sn.tq:se(Pu[k]);ve=le(ve,di[0],qn),me=le(me,di[1],qn),De*=1-qn}}var ui=J.g.y-he,mr=H((1.3*F-ui)/(.72*F)),C=ge(mr);if(mr>0){var V=Math.min(G,O*Cu.fit),K=J.g.x+Me.E[0]*V,ne=ui+Me.E[1]*V,Y=i?1:H((mr-aP[k])/.5);Y<=0?De=0:(ve=K,me=le(ne-.9*F,ne,lP(Y)),De=Cu.size*V,He=1,ct=Cu.pose[q])}return{x:ve,y:me,size:De,blur:Ae,br:He,rot:ct,p1:pe,q:Je,g:C}}var oe=null,ee=Math.round(640*Math.min(window.devicePixelRatio||1,1.5));try{oe=M_(ee,{lock:nb+"k_lock.webp",case:nb+"k_case.webp"})}catch{oe=null}var _e=[];t.querySelectorAll(".obj").forEach(function(k,q){var he=k.dataset.obj,te=k.querySelector("canvas");te.width=ee,te.height=ee,_e.push({el:k,n:he,ctx:te.getContext("2d"),cur:ua[he].slice(),d:q*.28,cb:-1,cbr:-1,cut:0})}),ze();function ue(k){if(n&&(requestAnimationFrame(ue),!document.hidden)){var q=window.scrollY,he=k/1e3,te=t.dataset.phase==="objects",be,Me=a===null?0:Math.max(0,(k-a)/1e3);I=e.dataset.tone==="light"?Ru[1]:Ru[0],L+=(W-L)*.05,D+=(X-D)*.05;for(var Ce=!!e.dataset.stack&&!re,Se=Ce&&e.dataset.stack==="d",ye=Ce&&!Se,Ee=0;Ee<J.slot.length;Ee++)if(ye){var $e=Z[Ee].getBoundingClientRect();J.slot[Ee].ry=J.slot[Ee].rr=$e.top+$e.height/2}else if(J.slot[Ee].ry=J.slot[Ee].y-q,J.slot[Ee].so=-1,Se){var nt=Z[Ee].getBoundingClientRect();J.slot[Ee].rr=nt.top+nt.height/2}else J.slot[Ee].rr=J.slot[Ee].ry;if(ye){var Be=[],pe=Math.min(J.slot.length,de.length,Oe.length);for(Ee=0;Ee<pe;Ee++)Be[Ee]=H(1-Math.max(0,de[Ee].getBoundingClientRect().top-(fr.top+fr.step*Ee))/F);for(Ee=0;Ee<pe;Ee++){var U=J.slot[Ee],ve=Oe[Ee].getBoundingClientRect();U.cr=ve,U.tq=[ve.left+Re/2,ve.top+Ie/2],U.so=Ee+1<pe?ge(H((Be[Ee+1]-Ws.close[0])/Ws.close[1])):0,U.tv=Ee?ge(H((Be[Ee]-Ws.move[0])/Ws.move[1])):1,U.sa=Ee?ge(H((Be[Ee]-Ws.open[0])/Ws.open[1])):-1}}for(var me=ge(H((1.3*F-(J.g.y-q))/(.72*F))),De=1,Ae=0;Ae<Oe.length;Ae++){var He=J.slot[Ae],et=J.card&&J.card[Ae];if(!(!He||!et)){var ct=b(Ae),wt=He.ry,Je=ge(H((ct.s*F-wt)/(ct.l*F))),dt=ge(H((.42*F-wt)/(.3*F))),on=He.x-et.cx,ci=He.rr-et.cy,Sn=Ie/2,Li=Re/2,In=H(Je*(1-dt)*ib),Qt=1,Ii=Ae,qn=1,di,ui;if(ye){if(He.so<0||!He.cr)continue;on=He.cr.left,ci=He.cr.top,et={w:He.cr.width,h:He.cr.height},dt=He.so,Ae&&(Je=He.sa),In=H(Je*(1-dt)*ib)}if((Ae>0&&De<1||dt>=1&&Ae<Oe.length-1)&&(Qt=0),dt>0){var mr=ye?He.tq:se(Pu[Ae]);di=mr[0],ui=mr[1],Ae===Oe.length-1&&(Qt=Math.min(1-me,1-dt))}else if(Ae===0)di=He.x,ui=He.rr;else{var C=ye?He.tv:Je>0?1:ge(H((1.15*F-(J.head[Ae]-q))/(.45*F))),V=ye?J.slot[Ae-1].tq:se(Pu[Ae-1]),K=ye?He.tq:se(P_[Ae]);di=le(V[0],K[0],C),ui=le(V[1],K[1],C),qn=Math.abs(Math.cos(C*Math.PI)),C<.5&&(Ii=Ae-1)}De=dt;var ne=[In.toFixed(3),di.toFixed(1),ui.toFixed(1),Qt.toFixed(2),qn.toFixed(3),Ii,Math.round(ci)].join();if(ne!==Ue[Ae]){Ue[Ae]=ne;var Y=Pe[Ae],Le=le(di-Li-on,0,In),Fe=le(ui-Sn-ci,0,In),Ve=le(di+Li-on,et.w,In),je=le(ui+Sn-ci,et.h,In);Oe[Ae].style.setProperty("--m",In.toFixed(3)),Y.style.inset=Fe.toFixed(1)+"px "+(et.w-Ve).toFixed(1)+"px "+(et.h-je).toFixed(1)+"px "+Le.toFixed(1)+"px",Y.style.opacity=Qt.toFixed(2),Y.style.transform=qn<1?"scaleX("+qn.toFixed(3)+")":"";var Ye=Y.firstChild,Xe=sP+(Ii+1);Ye&&Ye.textContent!==Xe&&(Ye.textContent=Xe)}}}for(var We=0;We<_e.length;We++){var Ke=_e[We];be=j(We,Ke.n,q,he,Me),Ke.el.style.transform="translate3d("+(be.x-ie/2).toFixed(1)+"px,"+(be.y-ie/2).toFixed(1)+"px,0) scale("+(be.size/ie).toFixed(4)+")";var Ut=0;if(Ce&&be.g<=0){var Pt=J.slot[We]?de[We+1]||we:de[0];Pt&&(Ut=H((be.y+be.size/2-Pt.getBoundingClientRect().top)/be.size))}Ut!==Ke.cut&&(Ke.cut=Ut,Ke.el.style.clipPath=Ut>0?"inset(0 0 "+(Ut*100).toFixed(1)+"% 0)":"");var kn=Math.round(be.br*100)/100;if(Ke.cb!==0&&(Ke.cb=0,Ke.el.style.setProperty("--cb","0px")),kn!==Ke.cbr&&(Ke.cbr=kn,Ke.el.style.setProperty("--cbr",kn)),!(!te||!oe)){for(var mt=i?1:.12,qe=0;qe<3;qe++)Ke.cur[qe]+=(be.rot[qe]-Ke.cur[qe])*mt;be.size<2||be.y<-be.size||be.y>F+be.size||oe.draw(Ke.n,Ke.cur,Ke.ctx)}}te&&q>1&&!re?(c.style.transform="translateY("+(-be.p1*F*.22).toFixed(1)+"px) scale("+(1-.2*be.p1).toFixed(4)+")",c.style.opacity=(1-H(be.p1*1.4)).toFixed(3)):te&&q>1?(c.style.transform="translateY("+(-be.q*F*.2).toFixed(1)+"px) scale("+(1+.08*be.p1).toFixed(4)+")",c.style.opacity=(1-be.q).toFixed(3)):c.style.transform&&(c.style.transform="",c.style.opacity=""),l.style.opacity=te?(1-H(q/F*3)).toFixed(2):"",d&&(d.style.opacity=te&&!re&&be?(H((be.p1-.55)/.45)*(1-H(be.q*7))).toFixed(2):"0")}}return requestAnimationFrame(ue),S(),function(){n=!1,r++,e.classList.remove("lock"),oe&&oe.dispose()}}var Dt="html:root body .page .panel.panel",cP=`
@media (min-width: 761px) {
  ${Dt} { position: relative !important; padding: 5vw 0 !important; }
  ${Dt} .pwrap.pwrap { position: static !important; }
  ${Dt} .pbig.pbig { position: static !important; margin: 3vw 0 0 !important; font-size: 9.8vw !important; line-height: .9 !important; text-align: center !important; letter-spacing: -.01em !important; }
  ${Dt} .pbig.pbig .pmid { position: static !important; display: block !important; }
  ${Dt} .pbig .pmid > span { display: inline-block !important; position: static !important; }
  ${Dt} .pbig .pmid .ph { position: absolute !important; display: block !important; margin: 0 !important; width: 12vw !important; height: 16vw !important; border-radius: .5vw !important; background-size: cover !important; z-index: 2; }
  ${Dt} .pbig .pmid .ph:first-child { left: 12vw !important; right: auto !important; top: 13vw !important; }
  ${Dt} .pbig .pmid .ph:last-child { left: 76vw !important; right: auto !important; top: 19vw !important; }

  ${Dt} .pbody.pbody { position: relative !important; display: block !important; height: 52vw !important; max-height: none !important; margin: 18vw 0 0 !important; }
  ${Dt} .pcols { position: absolute !important; inset: 0 !important; display: block !important; columns: auto !important; margin: 0 !important; width: auto !important; max-width: none !important; pointer-events: none; }
  ${Dt} .pcols p { position: absolute !important; top: 0 !important; z-index: 3; box-sizing: border-box !important; width: 31vw !important; max-width: none !important; margin: 0 !important; padding: 0 2vw !important;
    font: 400 max(13px, .9vw)/1.45 var(--sans) !important; letter-spacing: 0 !important; text-align: justify !important; text-align-last: left; text-transform: uppercase; word-break: keep-all; color: #141414 !important; }
  ${Dt} .pcols p:nth-child(1) { left: 19vw !important; }
  ${Dt} .pcols p:nth-child(2) { left: 50vw !important; }
  ${Dt} .pshots { position: absolute !important; inset: 0 !important; height: auto !important; display: block !important; }
  ${Dt} .pshots .ph { position: absolute !important; display: block !important; margin: 0 !important; border-radius: .5vw !important; background-size: cover !important; translate: none !important; rotate: none !important; }
  ${Dt} .pshots .ph:nth-child(1) { left: 61vw !important; top: 1.2vw !important; width: 16vw !important; height: 22vw !important; }
  ${Dt} .pshots .ph:nth-child(2) { left: 12vw !important; top: 8.6vw !important; width: 16vw !important; height: 22vw !important; }
  ${Dt} .pshots .ph:nth-child(3) { left: 38vw !important; top: 33.3vw !important; width: 12vw !important; height: 16vw !important; }
  ${Dt} .pshots .ph:nth-child(4) { left: 66vw !important; top: 33.3vw !important; width: 12vw !important; height: 16vw !important; }
  ${Dt} .pmore { margin-top: 3vw !important; }
}
`,dP=[.16,.08,.06,.06,.18,.08];try{if(!document.getElementById("about-layout-css")){let t=document.createElement("style");t.id="about-layout-css",t.textContent=cP,document.head.appendChild(t);let e=0,n=setInterval(()=>{t.parentNode&&t!==t.parentNode.lastElementChild&&t.parentNode.appendChild(t),++e>60&&clearInterval(n)},300);if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches){let r=[];(function s(){if(requestAnimationFrame(s),window.innerWidth<=760)return;(!r.length||!r[0].isConnected)&&(r=Array.from(document.querySelectorAll(".page .panel .pmid .ph, .page .panel .pshots .ph")));let o=window.innerHeight;r.forEach((a,l)=>{let c=a.getBoundingClientRect(),d=c.top+c.height/2-(a._dy||0);if(d<-o||d>2*o)return;let h=(o/2-d)*(dP[l]||.08);a._dy=h,a.style.transform="translate3d(0,"+h.toFixed(1)+"px,0)"})})()}}}catch{}var Du=en(jn()),Xn="https://iseonve.github.io/iseo_portfolio/",ha="https://cdn.jsdelivr.net/gh/iseonve/iseo_portfolio@main/img/cs01/",cb={after:ha+"dl/after.webp",manage:ha+"dl/after-z.webp",flow:ha+"dv/fc2b.webp",sketch:ha+"dv/sk01.webp",paper:ha+"dv/meet.webp",proto:ha+"dv/pt05.webp"},pa=Xn+"img/about/",js={talk:pa+"s1b.webp#55% 22%",test:pa+"s1a.webp#92% 14%",me:pa+"me.webp#20% 30%",notes:pa+"t1.webp#80% 36%",sketch:pa+"r1.webp#18% 34%",pause:pa+"s1b.webp#58% 18%"};function Ci({src:t}){if(!t)return(0,Du.jsx)("i",{className:"ph","data-n":"","data-id":"element-291","data-mp":"34jcn1xbh7091"});let[e,n]=t.split("#");return(0,Du.jsx)("i",{className:"ph",style:{backgroundImage:`url(${e})`,backgroundPosition:n||void 0,backgroundSize:"cover"},"data-id":"element-292","data-mp":"39hw8zxq2kc1e"})}function Wi({href:t,className:e,children:n}){return(0,Du.jsx)("a",{className:e,href:t,target:"_blank",rel:"noopener","data-id":"element-293","data-mp":"1y4bywdsozmd0",children:n})}var x0=en(ss());var p0=en(jn()),db={A:[".###.","#...#","#...#","#####","#...#","#...#","#...#"],B:["####.","#...#","#...#","####.","#...#","#...#","####."],C:[".###.","#...#","#....","#....","#....","#...#",".###."],D:["####.","#...#","#...#","#...#","#...#","#...#","####."],E:["#####","#....","#....","####.","#....","#....","#####"],F:["#####","#....","#....","####.","#....","#....","#...."],G:[".###.","#...#","#....","#.###","#...#","#...#",".####"],H:["#...#","#...#","#...#","#####","#...#","#...#","#...#"],I:["#####","..#..","..#..","..#..","..#..","..#..","#####"],J:["..###","...#.","...#.","...#.","...#.","#..#.",".##.."],K:["#...#","#..#.","#.#..","##...","#.#..","#..#.","#...#"],L:["#....","#....","#....","#....","#....","#....","#####"],M:["#...#","##.##","#.#.#","#.#.#","#...#","#...#","#...#"],N:["#...#","##..#","#.#.#","#.#.#","#..##","#...#","#...#"],O:[".###.","#...#","#...#","#...#","#...#","#...#",".###."],P:["####.","#...#","#...#","####.","#....","#....","#...."],Q:[".###.","#...#","#...#","#...#","#.#.#","#..#.",".##.#"],R:["####.","#...#","#...#","####.","#.#..","#..#.","#...#"],S:[".####","#....","#....",".###.","....#","....#","####."],T:["#####","..#..","..#..","..#..","..#..","..#..","..#.."],U:["#...#","#...#","#...#","#...#","#...#","#...#",".###."],V:["#...#","#...#","#...#","#...#","#...#",".#.#.","..#.."],W:["#...#","#...#","#...#","#.#.#","#.#.#","#.#.#",".#.#."],X:["#...#","#...#",".#.#.","..#..",".#.#.","#...#","#...#"],Y:["#...#","#...#",".#.#.","..#..","..#..","..#..","..#.."],Z:["#####","....#","...#.","..#..",".#...","#....","#####"],",":["..","..","..","..",".#",".#","#."],".":[".",".",".",".",".",".","#"],"'":["#","#",".",".",".",".","."],"!":["#","#","#","#","#",".","#"],"?":[".###.","#...#","....#","..##.","..#..",".....","..#.."],"-":["....","....","....","####","....","....","...."]," ":["...","...","...","...","...","...","..."]},fa=10,Uu=8.2,vP=.66;function sn({t,c:e="ink"}){let n=[],i=0;for(let o of t.toUpperCase()){let l=db[o==="\u2019"?"'":o]||db[" "];l.forEach((c,d)=>{for(let h=0;h<c.length;h++)c[h]==="#"&&n.push((0,p0.jsx)("rect",{x:(i+h)*fa,y:d*fa,width:Uu,height:Uu,"data-id":"element-149","data-mp":"3ascgb54p7bxq"},i+h+"-"+d))}),i+=l[0].length+1}let r=(i-1)*fa-(fa-Uu),s=7*fa-(fa-Uu);return(0,p0.jsx)("svg",{className:"dot dot-"+e,viewBox:`0 0 ${r} ${s}`,style:{width:r/s*vP+"em"},"aria-hidden":"true",focusable:"false","data-id":"element-150","data-mp":"3kip1mzkc794x",children:n})}var Q=en(jn()),xP={margin:"0 0 2.6vh",padding:0,font:"400 13px/1 var(--mono)",letterSpacing:".14em",textTransform:"none",color:"var(--px)",justifySelf:"start",textAlign:"left"};function f0({n:t}){return(0,Q.jsx)("p",{className:"pjno",style:xP,"data-id":"element-154","data-mp":"2j0ffwkttej28",children:"Project "+t})}function ma({mark:t,label:e,lead:n,desc:i}){return(0,Q.jsxs)("div",{"data-id":"element-155","data-mp":"m5jdxw3pgu3b",children:[(0,Q.jsxs)("p",{className:"lab","data-id":"element-156","data-mp":"h8sy99vtc0if",children:[(0,Q.jsx)("b",{"data-id":"element-157","data-mp":"h8au7r2wshzy",children:t}),e]}),(0,Q.jsx)("p",{"data-id":"element-158","data-mp":"ha42fat67aa2",children:n}),(0,Q.jsx)("div",{className:"hdesc","data-id":"element-159","data-mp":"h9lvnk8vtdnw",children:i})]})}function m0({steps:t}){return(0,Q.jsx)("div",{className:"hflow","data-id":"element-160","data-mp":"hhwva6jc6hms",children:t.map((e,n)=>(0,Q.jsxs)(x0.default.Fragment,{"data-id":"element-161","data-mp":"mfevn8jafoj6","data-mpi":n,children:[n>0&&(0,Q.jsx)("span",{className:"ar","aria-hidden":"true","data-id":"element-162","data-mp":"mcalluj55ykl",children:"\u2192"}),(0,Q.jsxs)("span",{className:"st","data-id":"element-163","data-mp":"7io2hh07j920",children:[(0,Q.jsx)("b",{"data-id":"element-164","data-mp":"7j7eyi73958n",children:String(n+1).padStart(2,"0")}),e]})]},e))})}function g0({items:t}){return(0,Q.jsx)("dl",{className:"hstats",style:{gridTemplateColumns:"repeat("+t.length+", minmax(0, 1fr))"},"data-id":"element-165","data-mp":"10739bg96ql29",children:t.map(e=>(0,Q.jsxs)("div",{"data-id":"element-166","data-mp":"1577liu328tmo",children:[(0,Q.jsx)("dt",{"data-id":"element-167","data-mp":"qg8jy30n75cl",children:e[0]}),(0,Q.jsx)("dd",{"data-id":"element-168","data-mp":"qgidg0kwbun1",children:e[1]})]},e[1]))})}function v0({no:t,title:e,meta:n,side:i,href:r,go:s}){let o=(0,Q.jsxs)(Q.Fragment,{children:[(0,Q.jsx)("div",{className:"cno","data-id":"element-169","data-mp":"1j3uxa2zo9ocn",children:t}),(0,Q.jsx)("div",{className:"slot","data-id":"element-170","data-mp":"1j2t9qz1gz9e1"}),(0,Q.jsx)("h3",{"data-id":"element-171","data-mp":"1nvcow0ft2cky",children:e}),(0,Q.jsx)("dl",{"data-id":"element-172","data-mp":"1nvw95nsxhd25",children:n.map(a=>(0,Q.jsxs)("div",{"data-id":"element-173","data-mp":"1nxpduxjzdn7i",children:[(0,Q.jsx)("dt",{"data-id":"element-174","data-mp":"1nxh3bcbbytzh",children:a[0]}),(0,Q.jsx)("dd",{"data-id":"element-175","data-mp":"1xrcu6f6zteoi",children:a[1]})]},a[0]))})]});return(0,Q.jsx)("section",{className:"cardsec"+(i?" "+i:""),"data-id":"element-176","data-mp":"1xpih1n1yqquz",children:r?(0,Q.jsxs)(Wi,{className:"card",href:r,"data-id":"element-177","data-mp":"1st1n2c831i9z",children:[o,(0,Q.jsxs)("span",{className:"cgo","data-id":"element-178","data-mp":"1oqoelg1yb69i",children:[(0,Q.jsx)("span",{"data-id":"element-179","data-mp":"1oq58qxpks8bu",children:s}),(0,Q.jsx)("span",{"data-id":"element-180","data-mp":"1opvcwthun6y8",children:"\u2197"})]})]}):(0,Q.jsxs)("article",{className:"card","data-id":"element-181","data-mp":"1osrfww8k0ltj",children:[o,(0,Q.jsx)("span",{className:"cgo off","data-id":"element-182","data-mp":"1jsmwaxccnaz3",children:(0,Q.jsx)("span",{"data-id":"element-183","data-mp":"1jr2258ty5u1r",children:s})})]})})}function ub(){let t=e=>{e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})};return(0,Q.jsxs)("div",{className:"page",id:"page","data-id":"element-184","data-mp":"1a0pgfdaebuu1",children:[(0,Q.jsx)("div",{className:"sp","data-id":"element-185","data-mp":"152nzaxwj65l7"}),(0,Q.jsx)("div",{className:"sp","data-id":"element-186","data-mp":"153qqz81ogc26"}),(0,Q.jsxs)("section",{className:"head c1","data-id":"element-187","data-mp":"150uu7n1kftfb",children:[(0,Q.jsx)(f0,{n:"01","data-id":"element-188","data-mp":"111vqg5rkm2pg"}),(0,Q.jsxs)("h2",{className:"dm","data-no":"PJ.01","aria-label":"Your data, your call","data-id":"element-189","data-mp":"112dj6sf0xysm",children:[(0,Q.jsx)("span",{"data-id":"element-190","data-mp":"w1zla375058b",children:(0,Q.jsx)(sn,{t:"Your","data-id":"element-191","data-mp":"w2sk8hzutqfw"})}),(0,Q.jsxs)("span",{"data-id":"element-192","data-mp":"w17r8wt6ufk5",children:[(0,Q.jsx)(sn,{t:"data,",c:"mute","data-id":"element-193","data-mp":"w0xy50cujsa8"}),(0,Q.jsx)(Ci,{src:cb.after,"data-id":"element-194","data-mp":"w1hewdqrgamo"}),(0,Q.jsx)(sn,{t:"your",c:"mute","data-id":"element-195","data-mp":"r367e9nxuc7m"})]}),(0,Q.jsx)("span",{"data-id":"element-196","data-mp":"r2wf2fff7syr",children:(0,Q.jsx)(sn,{t:"call",c:"ac","data-id":"element-197","data-mp":"r2wiyqijkd41"})})]}),(0,Q.jsxs)("div",{className:"hmore","data-id":"element-198","data-mp":"r596rkazdhp0",children:[(0,Q.jsxs)("div",{className:"hcols","data-id":"element-199","data-mp":"32qrsx0xkijgb",children:[(0,Q.jsx)(ma,{mark:"?",label:"Problem",lead:"\u201C\uC774\uAC70 \uADF8\uB0E5 \uBCF4\uB0B4\uB3C4 \uB418\uB098? \uB0B4 \uC774\uB984\uC774\uB791 \uBC88\uD638 \uB4E4\uC5B4\uAC14\uB294\uB370\u2026\u201D",desc:"\uB354 \uC815\uD655\uD55C \uB2F5\uC744 \uC5BB\uC73C\uB824\uACE0 \uAC1C\uC778\uC815\uBCF4\uAE4C\uC9C0 \uC801\uC9C0\uB9CC, AI\uB294 \uBB34\uC5C7\uC774 \uB4E4\uC5B4\uAC14\uACE0 \uC5B4\uB5BB\uAC8C \uC4F0\uC774\uB294\uC9C0 \uC54C\uB824 \uC8FC\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.","data-id":"element-200","data-mp":"32pq65z76w8ir"}),(0,Q.jsx)(ma,{mark:"!",label:"Solution",lead:"\uBCF4\uB0B4\uAE30 \uC804\uC5D0 \uAC1C\uC778\uC815\uBCF4\uB97C \uCC3E\uC544 \uBCF4\uC5EC \uC8FC\uACE0, \uCC98\uB9AC \uBC29\uBC95\uC740 \uD56D\uBAA9\uB9C8\uB2E4 \uC9C1\uC811 \uACE0\uB974\uAC8C \uD588\uC5B4\uC694.",desc:"\uADF8\uB300\uB85C \uB450\uAE30 \xB7 \uAC00\uB9AC\uAE30 \xB7 \uB2E4\uB978 \uC774\uB984\uC73C\uB85C \uBC14\uAFB8\uAE30. ChatGPT \uAE30\uB2A5 \uC81C\uC548, \uD654\uBA74 11\uAC1C\uC758 \uD504\uB85C\uD1A0\uD0C0\uC785.","data-id":"element-201","data-mp":"3copgrnbime8e"})]}),(0,Q.jsx)(m0,{steps:["\uCC3E\uAE30","\uACE0\uB974\uAE30","\uD655\uC778\uD558\uAE30"],"data-id":"element-202","data-mp":"3go6nek2ohhf5"}),(0,Q.jsx)(g0,{items:[["82%","\uB300\uD654\uAC00 \uBBFC\uAC10\uD558\uB2E4\uB294 ChatGPT \uC0AC\uC6A9\uC790"],["14/15","\uB3C4\uC6C0 \uC5C6\uC774\n\uACFC\uC5C5 \uC131\uACF5"],["3.4s","\uAC1C\uC778\uC815\uBCF4 \uD655\uC778 \uD3C9\uADE0 \uC2DC\uAC04"],["81","\uD3C9\uADE0 SUS \uC810\uC218"]],"data-id":"element-203","data-mp":"2k0tc9wfpfi12"})]})]}),(0,Q.jsx)("section",{className:"state","data-id":"element-204","data-mp":"2owqvqbm9l4i2",children:(0,Q.jsx)("p",{className:"ko","data-id":"element-205","data-mp":"2t06m4q7qq8mb",children:"AI \uC18D \uB0B4 \uAC1C\uC778\uC815\uBCF4, \uB0B4\uAC00 \uCEE8\uD2B8\uB864\uD569\uB2C8\uB2E4."})}),(0,Q.jsx)(v0,{no:"PJ.01",title:"AI Privacy Protection",href:Xn+"work-01.html",go:"View case",meta:[["Type","\uAE30\uB2A5 \uC81C\uC548 \xB7 \uCF58\uC149\uD2B8"],["Process","Double Diamond"],["Research","\uC778\uD130\uBDF0 4 \xB7 \uD14C\uC2A4\uD2B8 5"]],"data-id":"element-206","data-mp":"2syltj64zkzr3"}),(0,Q.jsxs)("section",{className:"head c2","data-id":"element-207","data-mp":"217g17bvic6cd",children:[(0,Q.jsx)(f0,{n:"02","data-id":"element-208","data-mp":"25am2s67od9ci"}),(0,Q.jsxs)("h2",{className:"dm","data-no":"PJ.02","aria-label":"When you can\u2019t leave","data-id":"element-209","data-mp":"25a2l8qlxsmz0",children:[(0,Q.jsx)("span",{"data-id":"element-210","data-mp":"1m694vu2b9rmm",children:(0,Q.jsx)(sn,{t:"When you","data-id":"element-211","data-mp":"1m5zew6h9nkgx"})}),(0,Q.jsxs)("span",{"data-id":"element-212","data-mp":"1m7k8ntvrazdq",children:[(0,Q.jsx)(Ci,{"data-id":"element-213","data-mp":"1m7ahw42w0o6z"}),(0,Q.jsx)(sn,{t:"can\u2019t",c:"mute","data-id":"element-214","data-mp":"1m7afjxff0c3t"})]}),(0,Q.jsx)("span",{"data-id":"element-215","data-mp":"1m465ijf9qm58",children:(0,Q.jsx)(sn,{t:"leave",c:"ac","data-id":"element-216","data-mp":"1m469euie36ai"})})]}),(0,Q.jsxs)("div",{className:"hmore","data-id":"element-217","data-mp":"1h8h4ebnlox6t",children:[(0,Q.jsxs)("div",{className:"hcols","data-id":"element-218","data-mp":"1h98ytj5goovi",children:[(0,Q.jsx)(ma,{mark:"?",label:"Problem",lead:"\u201C\uB108\uBB34 \uC2DC\uB044\uB7EC\uC6B4\uB370 \uB0B4\uB9B4 \uC218\uB3C4 \uC5C6\uC5B4. \uC9C0\uAE08 \uBB58 \uD574\uC57C \uD558\uC9C0?\u201D",desc:"\uD53C\uD558\uAE30 \uC5B4\uB824\uC6B4 \uC774\uB3D9 \uC911\uC5D0\uB294 \uD544\uC694\uD55C \uB300\uC751\uC744 \uBC14\uB85C \uC870\uC791\uD558\uAE30 \uC5B4\uB835\uACE0, \uB178\uC774\uC988 \uCE94\uC2AC\uB9C1 \uB4A4\uC5D0\uB3C4 \uBD88\uD3B8\uC774 \uB0A8\uC2B5\uB2C8\uB2E4.","data-id":"element-219","data-mp":"1vw26c28qoqd5"}),(0,Q.jsx)(ma,{mark:"!",label:"Solution",lead:"\uC774\uC5B4\uD3F0\xB7\uC6CC\uCE58\xB7\uC74C\uC131\uC73C\uB85C \uCD5C\uC18C\uD55C\uB9CC \uC870\uC791\uD574 \uCCAD\uAC01\xB7\uBA40\uBBF8 \uB300\uC751\uC744 \uC2DC\uC791\uD558\uB294 \uC774\uB3D9 \uC9C0\uC6D0 \uC11C\uBE44\uC2A4 SENSE.",desc:"\uBBF8\uB9AC \uB300\uBE44\uD558\uACE0, \uB0A8\uC740 \uBD88\uD3B8\uC740 \uC720\uC9C0 \xB7 \uCD94\uAC00 \uC870\uC808 \xB7 \uB418\uB3CC\uB9AC\uAE30\uB85C \uC774\uC5B4\uAC11\uB2C8\uB2E4. \uBC14\uAFB8\uAE30 \uC804\uC5D0\uB294 \uBA3C\uC800 \uBB3B\uC2B5\uB2C8\uB2E4.","data-id":"element-220","data-mp":"1r40ycsiltlsx"})]}),(0,Q.jsx)(m0,{steps:["\uC0AC\uC804 \uC900\uBE44","\uBE60\uB978 \uC2E4\uD589","\uAC10\uAC01\uBCC4 \uB300\uC751","\uD6A8\uACFC \uD655\uC778"],"data-id":"element-221","data-mp":"1zx46qmee78gp"}),(0,Q.jsx)(g0,{items:[["156","1\uCC28 \uCF54\uB4DC"],["17","Affinity Group"],["7","Theme"],["35","\uC544\uC774\uB514\uC5B4"]],"data-id":"element-222","data-mp":"2euwjj6sk1ir7"})]})]}),(0,Q.jsxs)("section",{className:"state c2","data-id":"element-223","data-mp":"29x4quak35sly",children:[(0,Q.jsx)(Ci,{"data-id":"element-224","data-mp":"29wv5j09zk9ml"}),(0,Q.jsx)("p",{className:"ko","data-id":"element-225","data-mp":"29u0gevg120mu",children:"\uD53C\uD560 \uC218 \uC5C6\uB294 \uC21C\uAC04\uC5D0\uB3C4, \uD560 \uC218 \uC788\uB294 \uB300\uC751\uC744 \uCC3E\uC2B5\uB2C8\uB2E4."})]}),(0,Q.jsx)(v0,{side:"c2",no:"PJ.02",title:"SENSE",href:Xn+"work-02.html",go:"View case",meta:[["Type","\uC774\uB3D9 \uC9C0\uC6D0 \uC11C\uBE44\uC2A4 \xB7 UX \uB9AC\uC11C\uCE58"],["Devices","\uC774\uC5B4\uD3F0 \xB7 \uC6CC\uCE58 \xB7 \uD3F0"],["Focus","\uCCAD\uAC01 \xB7 \uBA40\uBBF8"]],"data-id":"element-226","data-mp":"khyccw25j283"}),(0,Q.jsxs)("section",{className:"head c3","data-id":"element-227","data-mp":"2r55tcf9e2hni",children:[(0,Q.jsx)(f0,{n:"03","data-id":"element-228","data-mp":"2r67c75wnc8fs"}),(0,Q.jsxs)("h2",{className:"dm","data-no":"PJ.03","aria-label":"Live pages for Lotte","data-id":"element-229","data-mp":"2w4iodnaeyv16",children:[(0,Q.jsx)(Ci,{"data-id":"element-230","data-mp":"2w3pe4cc8xnea"}),(0,Q.jsxs)("span",{"data-id":"element-231","data-mp":"2w3pbs5orxbb4",children:[(0,Q.jsx)(sn,{t:"Live pages","data-id":"element-232","data-mp":"2w6lbnzk6ma27"}),(0,Q.jsx)(sn,{t:"for Lotte",c:"ac","data-id":"element-233","data-mp":"2hfm5ev6tjxls"})]})]}),(0,Q.jsxs)("div",{className:"hmore","data-id":"element-234","data-mp":"2het7mjpu8ifs",children:[(0,Q.jsxs)("div",{className:"hcols","data-id":"element-235","data-mp":"2hdi50n84pgq9",children:[(0,Q.jsx)(ma,{mark:"?",label:"Brief",lead:"\u201C\uC774\uBC88 \uC2DC\uC98C \uC774\uBCA4\uD2B8, \uB2E4\uC74C \uC8FC\uC5D0 \uC624\uD508\uD574\uC694.\u201D",desc:"\uB86F\uB370\uC6D4\uB4DC \uC5B4\uB4DC\uBCA4\uCC98\xB7\uC11C\uC6B8\uC2A4\uCE74\uC774\uC758 \uC2DC\uC98C \uC774\uBCA4\uD2B8\uC640 \uCE74\uB4DC\uC0AC \uC81C\uD734 \uD504\uB85C\uBAA8\uC158, \uB86F\uB370\uBB3C\uC0B0 \uC9C0\uC18D\uAC00\uB2A5\uACBD\uC601 \uC0AC\uC774\uD2B8\uB97C \uB9E1\uC558\uC2B5\uB2C8\uB2E4.","data-id":"element-236","data-mp":"2me5tb14z3jgs"}),(0,Q.jsx)(ma,{mark:"!",label:"What I did",lead:"\uC2E4\uC81C \uBC29\uBB38\uC790\uAC00 \uBCF4\uB294 \uD398\uC774\uC9C0\uB97C, \uC77C\uC815\uC5D0 \uB9DE\uCDB0 PC\uC640 \uBAA8\uBC14\uC77C \uB450 \uBC8C\uB85C \uB514\uC790\uC778\uD588\uC5B4\uC694.",desc:"\uD3EC\uCF13\uBAAC\xB7\uBA54\uC774\uD50C IP \uD398\uC2A4\uD2F0\uBC8C\uBD80\uD130 BC\xB7KT\xB7\uCE74\uCE74\uC624\uD398\uC774\xB7\uB86F\uB370\uCE74\uB4DC \uC81C\uD734, ESG \uC0AC\uC774\uD2B8 \uC815\uBCF4 \uAD6C\uC870\uAE4C\uC9C0.","data-id":"element-237","data-mp":"28dczyjqequf9"})]}),(0,Q.jsx)(m0,{steps:["\uC2DC\uC98C \uC774\uBCA4\uD2B8","\uC81C\uD734 \uD504\uB85C\uBAA8\uC158","ESG \uC0AC\uC774\uD2B8"],"data-id":"element-238","data-mp":"1yhs0otcq4897"}),(0,Q.jsx)(g0,{items:[["9","\uC774\uBCA4\uD2B8\xB7\uD504\uB85C\uBAA8\uC158 \uD398\uC774\uC9C0"],["43","ESG \uC0AC\uC774\uD2B8 \uD654\uBA74"],["2","PC \xB7 MO \uB450 \uBC8C\uC529"],["2025\u201326","\uC791\uC5C5 \uAE30\uAC04"]],"data-id":"element-239","data-mp":"23ftlbipssfms"})]})]}),(0,Q.jsx)("section",{className:"state","data-id":"element-240","data-mp":"3sw2rv8gsjei5",children:(0,Q.jsx)("p",{"data-id":"element-241","data-mp":"3svkolrvpo00q",children:"Live pages, made for real visitors."})}),(0,Q.jsx)(v0,{no:"PJ.03",title:"Lotte Web Design",go:"Coming soon",meta:[["Type","\uC6F9 \uB514\uC790\uC778 \xB7 PC / MO"],["Client","\uB86F\uB370\uC6D4\uB4DC \xB7 \uC11C\uC6B8\uC2A4\uCE74\uC774 \xB7 \uB86F\uB370\uBB3C\uC0B0"],["Pages","\uD504\uB85C\uBAA8\uC158 9 \xB7 ESG 43"]],"data-id":"element-242","data-mp":"1oq58dx528uu"}),(0,Q.jsxs)("section",{className:"panel",id:"about","data-id":"element-243","data-mp":"3rdm197hcn5xt",children:[(0,Q.jsxs)("div",{className:"pwrap","data-id":"element-244","data-mp":"3rct1wrkpzipp",children:[(0,Q.jsxs)("div",{className:"ptop","data-id":"element-245","data-mp":"3rfypg2dpacjb",children:[(0,Q.jsx)("span",{"data-id":"element-246","data-mp":"3me9badv6lir0",children:"About me"}),(0,Q.jsx)("span",{"data-id":"element-247","data-mp":"3mdpu4zdcuye1",children:"How I work"}),(0,Q.jsx)("s",{"data-id":"element-248","data-mp":"3mfaooozo6hbw",children:"Just pretty"})]}),(0,Q.jsxs)("h2",{className:"pbig","aria-label":"Hi, I'm Iseo","data-id":"element-249","data-mp":"3mgcclu1sayb1",children:[(0,Q.jsx)("span",{"data-id":"element-250","data-mp":"3hgpylie4te16",children:"Hi, I\u2019m"}),(0,Q.jsxs)("span",{className:"pmid","data-id":"element-251","data-mp":"3hhsopo3mrcg1",children:[(0,Q.jsx)(Ci,{src:js.talk,"data-id":"element-252","data-mp":"iyc32agkykvb"}),(0,Q.jsx)("span",{"data-id":"element-253","data-mp":"ix9ck3n66kfx",children:(0,Q.jsx)("span",{"data-id":"element-254","data-mp":"ix0vs0nxeuzg",children:"Iseo"})}),(0,Q.jsx)(Ci,{src:js.test,"data-id":"element-255","data-mp":"dyzdvj28l1pk"})]})]})]}),(0,Q.jsxs)("div",{className:"pbody","data-id":"element-256","data-mp":"e123i1zh8str",children:[(0,Q.jsxs)("div",{className:"pcols","data-id":"element-257","data-mp":"97hg13vifh8t",children:[(0,Q.jsx)("p",{"data-id":"element-258","data-mp":"96eoquu9zcsd",children:"\uC0AC\uC6A9\uC790\uAC00 \uBA48\uCD98 \uC21C\uAC04\uC744 \uB2E4\uC2DC \uC787\uB294 UI/UX \uB514\uC790\uC774\uB108 \uAE40\uC774\uC11C\uC785\uB2C8\uB2E4. \uC778\uD130\uBDF0\uB85C \uBA3C\uC800 \uB4E3\uACE0, \uD3EC\uC2A4\uD2B8\uC787\uC73C\uB85C \uC798\uAC8C \uB098\uB220 \uC0AC\uB78C\uB4E4\uC774 \uC5B4\uB514\uC11C \uB9C9\uD788\uB294\uC9C0 \uCC3E\uC2B5\uB2C8\uB2E4."}),(0,Q.jsx)("p",{"data-id":"element-259","data-mp":"48d3q4dah3e9",children:"\uC2DC\uC548\uC740 \uC5EC\uB7EC \uAC1C \uB9CC\uB4E4\uC5B4 \uBE44\uAD50\uD558\uACE0, \uC9C1\uC811 \uCF54\uB4DC\uB85C \uAD6C\uD604\uD574 \uAC1C\uBC1C\uC790\uC640 \uAC19\uC740 \uD654\uBA74\uC744 \uBCF4\uBA70 \uC774\uC57C\uAE30\uD569\uB2C8\uB2E4. \uC27C \uB54C\uB294 \uCE74\uD398\uC640 \uC0B0\uCC45, \uC5EC\uD589\uC744 \uC88B\uC544\uD574\uC694."})]}),(0,Q.jsxs)("div",{className:"pshots","data-id":"element-260","data-mp":"11plc6imfv7md",children:[(0,Q.jsx)(Ci,{src:js.me,"data-id":"element-261","data-mp":"11q4qlpcvrdvn"}),(0,Q.jsx)(Ci,{src:js.notes,"data-id":"element-262","data-mp":"wx1x1h83s4fg"}),(0,Q.jsx)(Ci,{src:js.sketch,"data-id":"element-263","data-mp":"wwious898uem"}),(0,Q.jsx)(Ci,{src:js.pause,"data-id":"element-264","data-mp":"ww0ih2rvozsz"})]})]}),(0,Q.jsx)(Wi,{className:"pmore",href:Xn+"about.html","data-id":"element-265","data-mp":"156psbe8esbpb",children:(0,Q.jsx)("span",{"data-id":"element-266","data-mp":"158ap7ai746qc",children:Array.from({length:10}).map((e,n)=>(0,Q.jsxs)(x0.default.Fragment,{"data-id":"element-267","data-mp":"1971c6osy67zq","data-mpi":n,children:["More about me \u2197 "," "]},n))})})]}),(0,Q.jsxs)("footer",{className:"foot","data-id":"element-268","data-mp":"1e5uq2ic5c10f",children:[(0,Q.jsxs)("div",{className:"ftop","data-id":"element-269","data-mp":"1e5kzasja1pto",children:[(0,Q.jsx)("span",{"data-id":"element-270","data-mp":"1j5phcmzu2sm0",children:"This portfolio is 24h open"}),(0,Q.jsx)(Wi,{href:Xn+"#works","data-id":"element-271","data-mp":"1j7k3u5qr6ss7",children:"Works"}),(0,Q.jsx)(Wi,{href:Xn+"about.html","data-id":"element-272","data-mp":"1o5bukwfnw8ut",children:"About"})]}),(0,Q.jsxs)("h2",{className:"dm","aria-label":"Thanks for your visit!","data-id":"element-273","data-mp":"1o4trbful0ude",children:[(0,Q.jsx)("span",{"data-id":"element-274","data-mp":"1s5vrq008jcgy",children:(0,Q.jsx)(sn,{t:"Thanks for","data-id":"element-275","data-mp":"1s5vu26npjok4"})}),(0,Q.jsxs)("span",{"data-id":"element-276","data-mp":"1s5471k86ez5g",children:[(0,Q.jsx)(sn,{t:"your",c:"mute","data-id":"element-277","data-mp":"1s4ug9ufb4nyp"}),(0,Q.jsx)(sn,{t:"visit!",c:"ac","data-id":"element-278","data-mp":"1s4az4fxhe3lq"})]})]}),(0,Q.jsx)("div",{className:"gather",id:"gather",style:{marginTop:"-4vh"},"data-id":"element-279","data-mp":"1wyf5oy2u49ma"}),(0,Q.jsxs)("p",{className:"live","data-id":"element-280","data-mp":"21x03kqum6h7k",children:[(0,Q.jsx)("i",{"aria-hidden":"true","data-id":"element-281","data-mp":"21vfbr8zopcde"}),"Online \xB7 Say hello"]}),(0,Q.jsx)("p",{className:"talk","data-id":"element-282","data-mp":"26vjtt3g8qf5q",children:(0,Q.jsxs)(Wi,{href:Xn+"#contact","data-id":"element-283","data-mp":"26w3bcj1zb1j8",children:[(0,Q.jsx)("span",{className:"sr","data-id":"element-284","data-mp":"26wuvmxq4lcu7",children:"Let\u2019s talk"}),(0,Q.jsx)(sn,{t:"Let's talk","data-id":"element-285","data-mp":"26tqkfge8tgu1"}),(0,Q.jsx)("span",{className:"arr","aria-hidden":"true","data-id":"element-286","data-mp":"2buel6ts9xc1g",children:"\u2197"})]})}),(0,Q.jsxs)("div",{className:"fbar","data-id":"element-287","data-mp":"2bsjzhd96hfwb",children:[(0,Q.jsx)("span",{"data-id":"element-288","data-mp":"2x5csptteig1v",children:"\xA9 2027 iseo Kim"}),(0,Q.jsx)("span",{"data-id":"element-289","data-mp":"2x4a2lo3wkhn0",children:"UI/UX Designer \xB7 Portfolio 2027"}),(0,Q.jsx)("a",{href:"#top",onClick:t,"data-id":"element-290","data-mp":"2s6ic8yiwp3kx",children:"Back to top \u2191"})]})]})]})}var yP=["lock","case","folder"];var _P=`
.card > .shot-flash { position: absolute; inset: 0; z-index: 4; pointer-events: none; background: #fff; opacity: 0; }
.card.hit > .shot-flash { animation: shotFlash 1s ease-out; }
@keyframes shotFlash { 0% { opacity: .6; } 100% { opacity: 0; } }
.card.hit .cbox { border-color: var(--px) !important; animation: shotGlow 2.4s ease-out; }
.card.hit .cbox::before, .card.hit .cbox::after { border-color: var(--px) !important; }
@keyframes shotGlow { 0% { box-shadow: 0 0 0 0 rgba(255,156,187,.9); } 40% { box-shadow: 0 0 46px 6px rgba(255,156,187,.5); } 100% { box-shadow: 0 0 0 0 rgba(255,156,187,0); } }
.card .stamp { display: none !important; }
.obj.zap canvas { animation: shotZap ${1.6}s ease-out; }
@keyframes shotZap { 0% { filter: brightness(1.9) drop-shadow(0 0 26px rgba(255,156,187,.95)); } 100% { filter: brightness(1) drop-shadow(0 0 0 rgba(255,156,187,0)); } }
html:root body .page .cardsec .card.hit > .shot-flash { animation-duration: 1s !important; }
html:root body .page .cardsec .card.hit .cbox { animation-duration: 2.4s !important; }
html:root body .obj.zap canvas { animation-duration: ${1.6}s !important; }
@media (prefers-reduced-motion: reduce) { .card.hit > .shot-flash, .obj.zap canvas, .card.hit .cbox { animation: none; } }
`;function Ou(){if(document.getElementById("shut-css"))return;let t=document.createElement("style");t.id="shut-css",t.textContent=_P,document.head.appendChild(t);let e=Array.prototype.slice.call(document.querySelectorAll(".cardsec .card"));e.forEach(i=>{let r=document.createElement("i");r.className="shot-flash",i.appendChild(r)});let n=e.map(()=>!1);(function i(){requestAnimationFrame(i),e.forEach((r,s)=>{let o=parseFloat(r.style.getPropertyValue("--m"))||0;if(o>=.95&&!n[s]){n[s]=!0,r.classList.remove("hit"),r.offsetWidth,r.classList.add("hit");let a=document.querySelector('.obj[data-obj="'+yP[s]+'"]');a&&(a.classList.remove("zap"),a.offsetWidth,a.classList.add("zap"),setTimeout(()=>a.classList.remove("zap"),1650))}else o<.5&&n[s]&&(n[s]=!1,r.classList.remove("hit"))})})()}var hb=(t,e,n,i)=>"radial-gradient(64% 80% at "+n+", rgba("+t+", "+e+"), rgba("+t+", "+(e*.35).toFixed(3)+") 45%, rgba("+t+", 0) 75%), radial-gradient(80% 70% at "+i+", rgba("+t+", "+(e*.35).toFixed(3)+"), rgba("+t+", 0) 70%)",bP="radial-gradient(64% 80% at 26% 52%, rgba(112, 82, 168, .22), rgba(112, 82, 168, .07) 45%, rgba(112, 82, 168, 0) 75%), radial-gradient(75% 55% at 70% 112%, rgba(196, 120, 104, .12), rgba(196, 120, 104, 0) 70%)",wP="radial-gradient(90% 70% at 50% 100%, #1b1211, transparent 75%), linear-gradient(180deg, #120d0c 0%, #150f0e 60%, #120c0b 100%)",SP={c:[hb("58, 128, 92",.22,"76% 56%","12% 108%"),bP,hb(Zt.bg,Zt.bgA,"50% 70%","50% 118%")],a:["#202020","#2a2a2a","#363636"],b:["#2b1414","#0f2219","#0e1a24"]},MP=[["off","Off"],["a","A"],["b","B"],["c","C"]],EP=[["c1","#2bff7e","43, 255, 126","#e3eee6","#71857a"],["c2","#9a4bff","154, 75, 255","#ebe5f5","#7f7592"],["c3",Zt.hex,Zt.rgb,"#f1e4e1","#8a6e69"]],Yl=':root[data-bg="c"]:not([data-stack]) .page',TP=EP.map(([t,e,n,i,r])=>`
${Yl} :is(.head, .cardsec).${t} { --txt: #f4f4f4; --sub: #e9e9e9; --dim: ${r}; --px: ${e}; --ac: ${e}; color: #f4f4f4; }
${Yl} .head.${t} :is(p, li, small, span, dd, dt) { color: #f4f4f4; }
${Yl} .head.${t} h2 { color: ${i} !important; }
${Yl} .cardsec.${t} .card .cbox { border-color: ${e} !important; }
${Yl} .cardsec.${t} .card .cgo { color: #f4f4f4 !important; border-color: ${e} !important; }
`).join(""),AP=`
.pbg { position: fixed; inset: 0; z-index: 0; pointer-events: none; }
.pbg i { position: absolute; inset: 0; opacity: 0; will-change: opacity; }
.bgswitch { position: fixed; z-index: 6; left: 18px; bottom: 56px; display: flex; gap: 2px; padding: 3px; border-radius: 99px;
  background: color-mix(in srgb, var(--txt) 8%, var(--canvas)); border: 1px solid color-mix(in srgb, var(--txt) 14%, transparent); }
.bgswitch span { align-self: center; padding: 0 6px 0 9px; color: var(--sub); font: 500 10px/1 var(--mono); letter-spacing: .12em; }
.bgswitch button { border: 0; border-radius: 99px; padding: 6px 11px; background: transparent; color: var(--sub); cursor: pointer; font: 500 10px/1 var(--mono); letter-spacing: .12em; text-transform: uppercase; }
.bgswitch button[aria-pressed="true"] { background: var(--px); color: #141214; }
@media (max-width: 640px) { .bgswitch { display: none; } }
${TP}
`;function pb(){if(document.getElementById("pbg-css"))return;let t=document.createElement("style");t.id="pbg-css",t.textContent=AP,document.head.appendChild(t);let e=Array.prototype.slice.call(document.querySelectorAll(".page .head")),n=document.querySelector(".page .panel"),i=document.documentElement;if(e.length<3)return;let r="c";try{r=localStorage.getItem("iseo-bg4")||"c"}catch{}let s=document.createElement("div");s.className="pbg",s.setAttribute("aria-hidden","true");let o=document.createElement("i");s.appendChild(o);let a=[0,1,2].map(()=>{let p=document.createElement("i");return s.appendChild(p),p});document.body.insertBefore(s,document.body.firstChild);let l=()=>{i.dataset.bg=r,o.style.background=r==="c"?wP:"none",a.forEach((p,f)=>{p.style.background=r==="off"?"none":SP[r][f]})};l();let c=document.createElement("div");c.className="bgswitch",c.setAttribute("role","group"),c.setAttribute("aria-label","Background"),c.innerHTML="<span>BG</span>",MP.forEach(([p,f])=>{let g=document.createElement("button");g.type="button",g.textContent=f,g.setAttribute("aria-pressed",String(p===r)),g.addEventListener("click",()=>{r=p,l();try{localStorage.setItem("iseo-bg4",p)}catch{}c.querySelectorAll("button").forEach(y=>y.setAttribute("aria-pressed",String(y===g)))}),c.appendChild(g)}),document.body.appendChild(c);let d=p=>p<0?0:p>1?1:p,h=p=>p*p*(3-2*p);(function p(){requestAnimationFrame(p);let f=window.innerHeight,g=y=>h(d((f*.8-y.getBoundingClientRect().top)/(f*.5)));o.style.opacity=(g(e[0])*(1-(n?g(n):0))).toFixed(3),a.forEach((y,m)=>{let u=e[m+1]||n,x=g(e[m])*(1-(u?g(u):0));y.style.opacity=x.toFixed(3)})})()}try{localStorage.removeItem("iseo-tabs5"),localStorage.removeItem("iseo-bg4")}catch{}var $l=[["1","#2bff7e","#e3eee6","#a3b8aa","#56685c","30, 255, 120","lock","Privacy","#0b0b0b"],["2","#9a4bff","#ebe5f5","#b3a8c6","#605873","150, 70, 255","case","SENSE","#0b0b0b"],["3",Zt.hex,"#f1e4e1","#c3a39d","#6a4e4a",Zt.rgb,"folder","Lotte",Zt.on]],Ri="html:root body .page .cardsec",CP=$l.map(([t,e,n,i,r,s,o,a,l])=>`
html body .ohit[data-pj="${t}"] .ol b { color: ${e} !important; text-shadow: 0 0 .4em rgba(${s}, .5), 0 2px 10px rgba(0, 0, 0, .7) !important; }
html body .ohit[data-pj="${t}"] .ol .ot { color: ${n} !important; }
html body .page .head.c${t} { --px: ${e}; --ac: ${e}; }
html body .page .head.c${t} svg.dot.dot-ink { color: ${n} !important; fill: ${n} !important; }
html body .page .head.c${t} svg.dot.dot-mute { color: ${r} !important; fill: ${r} !important; }
html body .page .head.c${t} svg.dot.dot-ac { color: ${e} !important; fill: ${e} !important; filter: drop-shadow(0 0 .12em rgba(${s}, .4)); }
html body .page .head.c${t} svg.dot rect { fill: currentColor !important; }
${Ri}[data-pj="${t}"] { --px: ${e}; --ac: ${e}; }
${Ri}[data-pj="${t}"] .card .cbox, ${Ri}[data-pj="${t}"] .card.hit .cbox { border-color: ${e} !important; }
${Ri}[data-pj="${t}"] .card.hit .cbox { animation-name: pjGlow${t} !important; }
@keyframes pjGlow${t} { 0% { box-shadow: 0 0 0 0 rgba(${s}, .8); } 40% { box-shadow: 0 0 40px 4px rgba(${s}, .35); } 100% { box-shadow: 0 0 0 0 rgba(${s}, 0); } }
${Ri}[data-pj="${t}"] .card > .shot-flash { background: radial-gradient(70% 60% at 50% 45%, rgba(${s}, .45), rgba(${s}, .14) 60%, rgba(${s}, 0)) !important; border-radius: 16px; }
${Ri}[data-pj="${t}"] .card.hit > .shot-flash { animation-name: pjFlash !important; animation-duration: .6s !important; }
html:root body .obj[data-obj="${o}"].zap canvas { animation-name: pjZap${t} !important; }
@keyframes pjZap${t} { 0% { filter: brightness(1.4) drop-shadow(0 0 24px rgba(${s}, .8)); } 100% { filter: brightness(1) drop-shadow(0 0 0 rgba(${s}, 0)); } }
${Ri}[data-pj="${t}"] .card .stamp { color: ${e} !important; border-color: ${e} !important; }
${Ri}[data-pj="${t}"] .card .cno { color: ${e} !important; }
${Ri}[data-pj="${t}"] .card .cgo { color: #f4f4f4 !important; border-color: ${e} !important; }
${Ri}[data-pj="${t}"] a.card:hover .cgo, ${Ri}[data-pj="${t}"] a.card:focus-visible .cgo { background: ${e} !important; border-color: ${e} !important; color: ${l} !important; }
html body .page .head.c${t} .hcols .lab b, html body .page .head.c${t} .hsub b { color: ${e} !important; }
`).join("")+`
@keyframes pjFlash { 0% { opacity: 1; } 100% { opacity: 0; } }
`,yt="html:root:not([data-stack]) body .page",RP=`
${yt} .head:is(.c1, .c2, .c3)::before, ${yt} .head:is(.c1, .c2, .c3)::after,
${yt} .head:is(.c1, .c2, .c3) h2.dm::before, ${yt} .head:is(.c1, .c2, .c3) h2.dm::after { content: none !important; display: none !important; }
@media (min-width: 641px) {
  ${yt} .head:is(.c1, .c2, .c3) { display: grid !important; align-content: center !important; justify-items: start !important; text-align: left !important;
    min-height: 100vh; box-sizing: border-box; padding: 14vh 54vw 10vh 6vw !important; gap: 0 !important; }
  ${yt} .head.c2 { padding: 14vh 6vw 10vh 54vw !important; }
  ${yt} .head h2.dm { font-size: clamp(44px, 5.4vw, 92px) !important; line-height: 1.02 !important; width: auto !important; max-width: none !important;
    white-space: nowrap !important; justify-self: start !important; text-align: left !important; margin: 0 !important; }
  ${yt} .head:is(.c1, .c2) h2.dm > span { display: contents !important; }
  ${yt} .head:is(.c1, .c2) h2.dm .dot { margin: 0 .3em 0 0 !important; }
  ${yt} .head:is(.c1, .c2) h2.dm .ph { display: block !important; width: 0 !important; height: .14em !important; margin: 0 !important; padding: 0 !important; border: 0 !important; background: none !important; }
  ${yt} .head:is(.c1, .c2) h2.dm .ph + .dot { margin-left: 0 !important; }
  ${yt} .head.c3 h2.dm .ph { display: none !important; }
  ${yt} .head.c3 h2.dm > span { display: block !important; }
  ${yt} .head.c3 h2.dm > span > .dot { display: block !important; margin: 0 0 .14em !important; }
  ${yt} .head .hmore { display: grid !important; width: 100% !important; max-width: 40vw !important; margin: 6vh 0 0 !important; gap: 3vh 0 !important;
    grid-template-columns: minmax(0, 1fr) !important; justify-items: start !important; text-align: left !important; }
  ${yt} .head .hsub { justify-self: start !important; text-align: left !important; margin: 0 !important; font-size: 13px !important; letter-spacing: .12em !important; text-transform: uppercase; }
  ${yt} .head .hcols { display: grid !important; width: 100% !important; margin: 0 !important; grid-template-columns: repeat(2, minmax(0, 1fr)) !important; gap: 0 3vw !important;
    justify-items: start !important; text-align: left !important; }
  ${yt} .head .hcols > div { grid-column: auto !important; text-align: left !important; }
  ${yt} .head .hcols p { font-size: 15px !important; line-height: 1.65 !important; max-width: 34ch; text-align: left !important; word-break: keep-all; }
  ${yt} .head .hcols p.lab { display: flex !important; justify-content: flex-start !important; margin: 0 0 10px !important; font-size: 12px !important; letter-spacing: .12em !important; text-transform: uppercase; }
  ${yt} .head.c2 .hside { display: none !important; }
  ${yt} .cardsec { justify-items: center !important; padding: 0 6vw 0 54vw !important; }
  ${yt} .cardsec.c2 { padding: 0 54vw 0 6vw !important; }
  ${yt} .head.c3 + .state + .cardsec { padding: 0 6vw 0 54vw !important; justify-items: center !important; align-items: center !important; }
  ${yt} .state { display: none !important; }
}
`,PP=`
.chrome.hd.hdc { align-items: center !important; }
.hdc .brand { gap: 0 !important; justify-content: center; }
.hdc .logo { font-size: 28px !important; line-height: 1 !important; }
.hdc .brand small { display: none !important; }
.hdc .spec, .hdc .hnow { grid-column: 2 !important; grid-row: 1 !important; justify-self: center !important; align-self: center !important; }
.hdc .hnow { display: inline-flex; align-items: center; gap: 10px; font: 400 12px/1 var(--mono); letter-spacing: .1em; text-transform: none !important; color: var(--sub);
  opacity: 0; transform: translateY(-4px); pointer-events: none; transition: opacity .4s ease, transform .4s ease; white-space: nowrap; }
.hdc .hnow *, .hdc .hnow b { text-transform: none !important; }
.hdc .hnow.on { opacity: 1; transform: none; }
.hdc .hnow i { width: 7px; height: 7px; border-radius: 50%; background: var(--hc, #fff); box-shadow: 0 0 6px var(--hc, #fff); transition: background .35s ease, box-shadow .35s ease; }
.hdc .hnow b { font-weight: 400; color: var(--txt); }
.hdc nav { display: flex !important; flex-direction: row !important; align-items: center !important; justify-self: end !important; gap: 28px !important; }
.hdc nav > a, .hdc .pj > button { position: relative !important; padding: 4px 0 !important; border-radius: 0 !important; background-color: transparent !important;
  font-size: 11px !important; letter-spacing: .14em !important; color: var(--sub) !important; transition: color .25s ease !important; }
.hdc .pj > button { padding-right: 16px !important; background-position: right center !important; }
.hdc nav > a::before, .hdc .pj > button::before { display: none !important; }
.hdc nav > a::after, .hdc .pj > button::after { content: "" !important; display: block !important; position: absolute !important; right: 0 !important; left: auto !important; bottom: -2px !important; top: auto !important;
  width: 0 !important; height: 1px !important; margin: 0 !important; opacity: 1 !important; background: currentColor !important; transition: width .3s cubic-bezier(.2, .8, .2, 1) !important; }
.hdc .pj > button::after { right: 16px !important; }
.hdc nav > a:hover, .hdc nav > a:focus-visible, .hdc .pj > button:hover, .hdc .pj > button:focus-visible, .hdc .pj.open > button,
.hdc nav > a.on, .hdc .pj > button.on, .hdc .pj > button.on sup { color: var(--txt) !important; background-color: transparent !important; outline: none; }
.hdc nav > a:hover::after, .hdc nav > a:focus-visible::after { width: 100% !important; }
.hdc .pj > button:hover::after, .hdc .pj > button:focus-visible::after, .hdc .pj.open > button::after { width: calc(100% - 16px) !important; }
@media (max-width: 720px) { .hdc .hnow { display: none; } .hdc nav { gap: 18px !important; } }
`,LP=`
.bgswitch, .ptswitch, .ptabs { display: none !important; }
${CP}
${RP}
${PP}
.page .foot { padding-top: 8vh !important; }
.page .foot h2.dm { font-size: clamp(48px, 8.2vw, 150px) !important; line-height: .9 !important; margin: 12vh 0 0 !important; position: relative; z-index: 1; }
.page .foot .gather { height: clamp(360px, 52vh, 600px) !important; margin: 10vh 0 6vh; }
.page .foot .live { margin-top: 8vh !important; }
.page .foot .talk { font-size: clamp(40px, 6.4vw, 112px) !important; position: relative; z-index: 1; }
@media (max-width: 640px) {
  .page .foot h2.dm { font-size: clamp(34px, 11vw, 60px) !important; margin-top: 8vh !important; }
  .page .foot .gather { height: 300px !important; margin: 6vh 0 4vh; }
}
`;function gb(){try{if(document.getElementById("hdpill-css"))return;let t=document.createElement("style");t.id="hdpill-css",t.textContent=LP,(document.head||document.documentElement).appendChild(t)}catch{}}function fb(t){let e=0;return t.forEach((n,i)=>{i<3&&(e++,n.dataset.pj!==String(i+1)&&(n.dataset.pj=String(i+1)))}),e>=3}var ji=null;function IP(){if(ji)return!0;let t=document.querySelector(".hdc");if(!t)return!1;ji=document.createElement("div"),ji.className="hnow",ji.setAttribute("aria-live","polite"),ji.innerHTML='<i></i><span><b></b> \xB7 <span class="hn"></span></span>',t.appendChild(ji);let e=ji.querySelector("b"),n=ji.querySelector(".hn"),i=document.documentElement,r="";return function s(){requestAnimationFrame(s);let o=Array.prototype.slice.call(document.querySelectorAll(".ptabs button")),a=o.findIndex(d=>d.classList.contains("now")),l=i.classList.contains("inproj")&&a>=0&&o[a].classList.contains("in"),c=l+":"+a;c!==r&&(r=c,ji.classList.toggle("on",l),a>=0&&$l[a]&&(e.textContent="Project 0"+$l[a][0],n.textContent=$l[a][7],ji.style.setProperty("--hc",$l[a][1])))}(),!0}var mb=!1;function vb(){try{let t=document.getElementById("hdpill-css");t&&t.parentNode&&t!==t.parentNode.lastElementChild&&t.parentNode.appendChild(t);let e=fb(document.querySelectorAll(".ohit:not(.cap)")),n=fb(document.querySelectorAll(".page .cardsec")),i=IP();return n&&!mb&&(mb=!0,requestAnimationFrame(()=>window.dispatchEvent(new Event("resize")))),e&&n&&i}catch{return!1}}try{gb();let t=0,e=setInterval(()=>{t++,(vb()&&t>20||t>120)&&clearInterval(e)},250)}catch{}function xb(){gb(),vb();try{pb()}catch{}}var kP=[{no:"PJ.01",n:"01",hd:"01 \xB7 Privacy",side:"Project 01",name:"AI Privacy",ink:"#ff4d3d"},{no:"PJ.02",n:"02",hd:"02 \xB7 Sensory",side:"Project 02",name:"Sensory Agent",ink:"#8dffc0"},{no:"PJ.03",n:"03",hd:"03 \xB7 Archive",side:"Project 03",name:"Earlier works",ink:"#cfeeff"}],ga=.5,y0=.7,NP=`
@media (min-width: 641px) {
  /* PJ.02 mirrored: card on the left, words on the right */
  :root:not([data-stack]) .page .head.c2 { padding-left: 50vw !important; padding-right: 5vw !important; text-align: right; justify-items: end; }
  :root:not([data-stack]) .page .head.c2 .hmore, :root:not([data-stack]) .page .head.c2 .hcols { justify-items: end; text-align: right; }
  :root:not([data-stack]) .page .head.c2 .lab { justify-content: flex-end; }
  :root:not([data-stack]) .page .cardsec.c2 { padding-left: 7vw !important; padding-right: 52vw !important; }
  /* PJ.03 centred: one big line on top, the card in the middle, the two text columns either side of it */
  :root:not([data-stack]) .page .head.c3 { padding: 19vh 5vw 8vh !important; align-content: space-between; justify-items: center; text-align: center; }
  :root:not([data-stack]) .page .head.c3 h2 { font-size: clamp(56px, 7vw, 124px) !important; justify-self: center; }
  :root:not([data-stack]) .page .head.c3 .hmore { width: 100%; max-width: none; }
  :root:not([data-stack]) .page .head.c3 .hsub { justify-self: start; text-align: left; }
  :root:not([data-stack]) .page .head.c3 .hcols { grid-template-columns: minmax(0, 1fr) 470px minmax(0, 1fr) !important; text-align: left; width: 100%; }
  :root:not([data-stack]) .page .head.c3 .hcols > :nth-child(2) { grid-column: 3; text-align: right; }
  :root:not([data-stack]) .page .head.c3 + .state + .cardsec { padding: 0 0 6vh !important; justify-items: center; align-items: end; }
  /* with the wide bar under the header, the titles start lower */
  :root[data-tabs="bar"]:not([data-stack]) .page .head:is(.c1, .c2) { padding-top: 180px !important; }
  :root[data-tabs="bar"]:not([data-stack]) .page .head.c3 { padding-top: 23vh !important; }
}

/* the header tidies up while the projects are on: no STATUS / LOCAL readout, no crop marks */
.hdc .spec, .stage .chrome.crop { transition: opacity .45s ease; }
:root.inproj .hdc .spec, :root.inproj .stage .chrome.crop { opacity: 0 !important; pointer-events: none; }

/* the tabs */
.ptabs { position: fixed; z-index: 6; pointer-events: none; display: flex; gap: 8px; transition: opacity .3s ease; }
.ptabs.off { opacity: 0; }
.ptabs[data-at="top"] { left: 5vw; top: 96px; flex-direction: row; }
.ptabs[data-at="side"] { left: 22px; top: 50%; translate: 0 -50%; flex-direction: column-reverse; gap: 26px; }
.ptabs[data-at="head"] { right: calc(var(--hr, 5vw) + 14px); top: var(--ht, 30px); height: var(--hh, 30px); align-items: center; flex-direction: row; gap: 22px; }
.ptabs[data-at="dock"] { left: 50%; bottom: 22px; translate: -50% 0; gap: 4px; padding: 5px; border-radius: 99px; pointer-events: auto; align-items: center;
  background: color-mix(in srgb, var(--txt) 8%, var(--canvas)); border: 1px solid color-mix(in srgb, var(--txt) 16%, transparent);
  box-shadow: 0 10px 30px rgba(0, 0, 0, .45); }
.ptabs[data-at="dock"]::before { content: "PJ"; padding: 0 10px 0 14px; color: var(--sub); font: 500 13px/1 var(--mono); letter-spacing: .16em; }
.ptabs button { display: flex; align-items: center; gap: 10px; padding: 9px 14px; border: 1px solid color-mix(in srgb, var(--txt) 14%, transparent);
  border-radius: 8px; background: color-mix(in srgb, var(--txt) 6%, var(--canvas)); color: var(--sub); cursor: pointer; pointer-events: none;
  font: 500 11px/1 var(--mono); letter-spacing: .12em; text-transform: uppercase; white-space: nowrap;
  opacity: 0; transform: translateY(10px) scale(.92); transition: opacity .3s ease, transform .3s ease, color .3s ease, border-color .3s ease; }
.ptabs button .psl, .ptabs button .phl, .ptabs button .pbl, .ptabs button .pic { display: none; }
.ptabs button::before { content: ""; flex: none; width: 6px; height: 6px; border-radius: 50%; background: color-mix(in srgb, var(--txt) 30%, transparent); transition: background .3s ease, box-shadow .3s ease, height .4s ease; }
.ptabs:not(.off) button.in { opacity: 1; pointer-events: auto; transform: none;
  transition: opacity ${y0}s ease ${ga}s, transform ${y0}s cubic-bezier(.2, 1.2, .3, 1) ${ga}s, color .3s ease, border-color .3s ease; }
.ptabs button.now, .ptabs button:hover, .ptabs button:focus-visible { color: var(--txt); border-color: color-mix(in srgb, var(--txt) 34%, transparent); outline: none; }
.ptabs button.now::before { background: var(--ink); box-shadow: 0 0 8px var(--ink); }

/* BAR: a wide segmented bar under the header; it slides in with PJ.01 (class "show"), segments light after their click */
.ptabs[data-at="bar"] { left: 5vw; right: calc(5vw + 14px); top: 92px; height: 58px; padding: 6px; gap: 0; border-radius: 16px; pointer-events: auto;
  display: grid; grid-template-columns: repeat(3, minmax(0, 1fr));
  background: color-mix(in srgb, var(--txt) 5%, var(--canvas)); border: 1px solid color-mix(in srgb, var(--txt) 16%, transparent);
  box-shadow: 0 14px 34px rgba(0, 0, 0, .4); opacity: 0; transform: translateY(-12px); transition: opacity .45s ease, transform .55s cubic-bezier(.2, .9, .3, 1); }
.ptabs[data-at="bar"].show { opacity: 1; transform: none; }
.ptabs[data-at="bar"] button { --pp: 0; position: relative; justify-content: center; gap: 14px; padding: 0 16px; height: 100%; border: 0; border-radius: 11px; background: transparent;
  font-size: 13px; letter-spacing: .06em; text-transform: none; color: color-mix(in srgb, var(--txt) 80%, transparent);
  opacity: .38; transform: none; pointer-events: auto; transition: opacity .6s ease, background .35s ease, color .35s ease; }
.ptabs[data-at="bar"] button + button { border-left: 1px solid color-mix(in srgb, var(--txt) 14%, transparent); border-radius: 0 11px 11px 0; }
.ptabs[data-at="bar"] button.now + button { border-left-color: transparent; }
.ptabs[data-at="bar"] button.in { opacity: 1; transition: opacity ${y0}s ease ${ga}s, background .35s ease, color .35s ease; }
.ptabs[data-at="bar"] button::before { display: none; }
.ptabs[data-at="bar"] button .ptl { display: none; }
.ptabs[data-at="bar"] button .pbl { display: inline; }
.ptabs[data-at="bar"] button .pic { display: grid; place-items: center; width: 26px; height: 26px; border-radius: 7px; flex: none;
  background: var(--ink); color: #141214; font: 700 10px/1 var(--mono); letter-spacing: 0;
  box-shadow: inset 0 -2px 0 rgba(0, 0, 0, .25), inset 0 1px 0 rgba(255, 255, 255, .35); }
.ptabs[data-at="bar"] button.now { background: color-mix(in srgb, var(--txt) 11%, transparent); color: var(--txt); border-radius: 11px; }
.ptabs[data-at="bar"] button::after { content: ""; position: absolute; left: 10px; bottom: 5px; height: 2px; border-radius: 2px;
  width: calc((100% - 20px) * var(--pp)); background: var(--ink); box-shadow: 0 0 6px var(--ink); opacity: 0; transition: opacity .3s ease; }
.ptabs[data-at="bar"] button.now::after { opacity: 1; }
.ptabs[data-at="bar"] button:not(.now):hover { background: color-mix(in srgb, var(--txt) 6%, transparent); color: var(--txt); }

/* DOCK: the same look as the small switches: dark pill, grey spaced mono labels, the current one a pink pill */
.ptabs[data-at="dock"] button { border: 0; border-radius: 99px; background: transparent; padding: 11px 0; max-width: 0; gap: 0; overflow: hidden;
  font: 500 13px/1 var(--mono); letter-spacing: .16em; color: var(--sub); transform: none;
  transition: max-width .6s cubic-bezier(.2, .9, .3, 1), padding .6s cubic-bezier(.2, .9, .3, 1), opacity .4s ease, background .35s ease, color .35s ease; }
.ptabs[data-at="dock"] button::before { display: none; }
.ptabs[data-at="dock"]:not(.off) button.in { max-width: 240px; padding: 11px 20px; transform: none;
  transition: max-width .7s cubic-bezier(.2, .9, .3, 1) ${ga}s, padding .7s cubic-bezier(.2, .9, .3, 1) ${ga}s, opacity .5s ease ${ga}s, background .35s ease, color .35s ease; }
.ptabs[data-at="dock"] button.now { background: var(--px); color: #141214; }
.ptabs[data-at="dock"] button:not(.now):hover { color: var(--txt); background: color-mix(in srgb, var(--txt) 8%, transparent); }
.ptabs[data-at="dock"] button .ptl { display: none; }
.ptabs[data-at="dock"] button .phl { display: inline; }
/* HEADER: short plain mono labels in the header, no boxes, each comes in from a little below; easy to read */
.ptabs[data-at="head"] button { border: 0; background: none; padding: 4px 0; gap: 9px; font-size: 12px; letter-spacing: .12em;
  color: color-mix(in srgb, var(--txt) 62%, transparent); transform: translateY(8px); }
.ptabs[data-at="head"] button.now { color: var(--txt); }
.ptabs[data-at="head"]:not(.off) button.in { transform: none; }
.ptabs[data-at="head"] button:not(.in) { position: absolute; }
.ptabs[data-at="head"] button .ptl { display: none; }
.ptabs[data-at="head"] button .phl { display: inline; }
/* SIDE: "\u2014 PROJECT 01" standing up along the left edge, no box; the dash is a short line before the words */
.ptabs[data-at="side"] button { writing-mode: vertical-rl; transform: rotate(180deg) translateY(-10px); padding: 2px 0; gap: 12px;
  border: 0; background: none; font-size: 11px; letter-spacing: .2em; }
.ptabs[data-at="side"]:not(.off) button.in { transform: rotate(180deg); }
.ptabs[data-at="side"] button .ptl { display: none; }
.ptabs[data-at="side"] button .psl { display: inline; }
.ptabs[data-at="side"] button::before { width: 1px; height: 16px; border-radius: 0; background: currentColor; box-shadow: none; }
.ptabs[data-at="side"] button.now::before { height: 40px; background: var(--ink); box-shadow: 0 0 6px var(--ink); }
/* the switch between the placements */
.ptswitch { position: fixed; z-index: 6; left: 18px; bottom: 18px; display: flex; gap: 2px; padding: 3px; border-radius: 99px;
  background: color-mix(in srgb, var(--txt) 8%, var(--canvas)); border: 1px solid color-mix(in srgb, var(--txt) 14%, transparent); }
.ptswitch button { border: 0; border-radius: 99px; padding: 6px 11px; background: transparent; color: var(--sub); cursor: pointer; font: 500 10px/1 var(--mono); letter-spacing: .12em; text-transform: uppercase; }
.ptswitch button[aria-pressed="true"] { background: var(--px); color: #141214; }
@media (max-width: 640px) { .ptabs, .ptswitch { display: none; } }
@media (prefers-reduced-motion: reduce) { .ptabs, .ptabs button { transition-duration: .01s !important; transition-delay: 0s !important; } }
`;function Fu(){if(document.getElementById("ptabs-css"))return;let t=document.createElement("style");t.id="ptabs-css",t.textContent=NP,document.head.appendChild(t);let e=Array.prototype.slice.call(document.querySelectorAll(".page .head")),n=Array.prototype.slice.call(document.querySelectorAll(".cardsec .card")),i=document.querySelector(".page .panel"),r=document.querySelector(".hdc .spec"),s=document.documentElement;if(!e.length)return;let o="dock";try{o=localStorage.getItem("iseo-tabs5")||"dock"}catch{}s.dataset.tabs=o;let a=()=>requestAnimationFrame(()=>window.dispatchEvent(new Event("resize")));a();try{xb()}catch(g){console.warn(g)}let l=document.createElement("nav");l.className="ptabs off",l.dataset.at=o,l.setAttribute("aria-label","Projects");let c=kP.map((g,y)=>{let m=document.createElement("button");return m.type="button",m.tabIndex=-1,m.style.setProperty("--ink",g.ink),m.innerHTML='<span class="pic">'+g.n+'</span><span class="ptl">'+g.no+" \xB7 "+g.name+'</span><span class="pbl">'+g.name+'</span><span class="phl">'+g.hd+'</span><span class="psl">'+g.side+"</span>",m.setAttribute("aria-label",g.no+" "+g.name),m.addEventListener("click",()=>p(y)),l.appendChild(m),m});document.body.appendChild(l);let d=()=>{if(!r)return;let g=r.getBoundingClientRect();l.style.setProperty("--hr",Math.max(0,window.innerWidth-g.right)+"px"),l.style.setProperty("--ht",g.top+"px"),l.style.setProperty("--hh",g.height+"px")};d(),window.addEventListener("resize",d);let h=document.createElement("div");h.className="ptswitch",h.setAttribute("role","group"),h.setAttribute("aria-label","Tabs placement"),[["dock","Dock"],["bar","Bar"],["head","Header"],["side","Side"],["top","Top"]].forEach(([g,y])=>{let m=document.createElement("button");m.type="button",m.textContent=y,m.setAttribute("aria-pressed",String(g===o)),m.addEventListener("click",()=>{o=g,l.dataset.at=g,s.dataset.tabs=g,d(),a();try{localStorage.setItem("iseo-tabs5",g)}catch{}h.querySelectorAll("button").forEach(u=>u.setAttribute("aria-pressed",String(u===m)))}),h.appendChild(m)}),document.body.appendChild(h);let p=g=>{let y=e[g];if(!y)return;let m=y.getBoundingClientRect();window.scrollTo({top:m.top+window.scrollY+m.height/2-window.innerHeight*.5,behavior:"smooth"})},f=e.map(()=>!1);(function g(){requestAnimationFrame(g);let y=window.innerHeight;e.forEach((v,_)=>{n[_]&&n[_].classList.contains("hit")&&(f[_]=!0),v.getBoundingClientRect().top>y*.65&&(f[_]=!1),c[_]&&(c[_].classList.toggle("in",f[_]),c[_].tabIndex=f[_]||o==="bar"?0:-1)});let m=i?i.getBoundingClientRect().top:1/0,u=e[0].getBoundingClientRect().top<=y*.7&&m>y*.3;s.classList.toggle("inproj",u),l.classList.toggle("show",u),l.classList.toggle("off",o!=="bar"&&(m<y*.3||!f.some(Boolean)));let x=0;e.forEach((v,_)=>{v.getBoundingClientRect().top<=y*.5&&(x=_)}),c.forEach((v,_)=>{v.classList.toggle("now",_===x),v.setAttribute("aria-current",_===x?"true":"false");let E=e[_].getBoundingClientRect().top-y*.5,M=e[_+1]||i,T=M?M.getBoundingClientRect().top-y*.5:E+y;v.style.setProperty("--pp",Math.max(0,Math.min(1,-E/Math.max(1,T-E))).toFixed(3))})})()}var ce=en(jn()),yb=["lock","case","folder","box"],DP={top:"Intro",ov:"Works",pj1:"PJ.01",pj2:"PJ.02",pj3:"PJ.03",about:"About",foot:"Hello"},UP=[{no:"01",name:"AI Privacy Protection",kind:"\uAE30\uB2A5 \uC81C\uC548 \xB7 \uCF58\uC149\uD2B8",href:Xn+"work-01.html"},{no:"02",name:"Sensory Load Agent",kind:"\uC6E8\uC5B4\uB7EC\uBE14 AI \xB7 UX \uB9AC\uC11C\uCE58",href:Xn+"work-02.html"},{no:"03",name:"Earlier works",kind:"Archive \xB7 Coming soon",head:2}],OP=[{c:"c1",no:"PJ.01",tag:"2026 \xB7 Concept",name:"AI Privacy Protection",stamp:"READY",meta:[["Type","\uAE30\uB2A5 \uC81C\uC548"],["Research","\uC778\uD130\uBDF0 4 \xB7 \uD14C\uC2A4\uD2B8 5"]]},{c:"c2",no:"PJ.02",tag:"2026 \xB7 Research",name:"Sensory Load Agent",stamp:"READY",meta:[["Type","\uC6E8\uC5B4\uB7EC\uBE14 AI"],["Devices","\uC6CC\uCE58 \xB7 \uC774\uC5B4\uD3F0 \xB7 \uD3F0"]]},{c:"c3 off",no:"PJ.03",tag:"Archive",name:"Earlier works",stamp:"SOON",meta:[["Status","Coming soon"],["Type","Archive"]]}];function FP(){let t=()=>{let i=new Date,r=s=>String(s).padStart(2,"0");return r(i.getHours())+":"+r(i.getMinutes())+":"+r(i.getSeconds())},[e,n]=(0,Wt.useState)(t);return(0,Wt.useEffect)(()=>{let i=window.setInterval(()=>n(t()),1e3);return()=>window.clearInterval(i)},[]),(0,ce.jsx)(ce.Fragment,{children:e})}var zP=Wt.default.memo(ub);function _0(){let t=(0,Wt.useRef)(null),e=(0,Wt.useRef)(!1),n=(0,Wt.useRef)(null),i=(0,Wt.useRef)(0),[r,s]=(0,Wt.useState)(!1),[o,a]=(0,Wt.useState)("top"),[l,c]=(0,Wt.useState)(0);(0,Wt.useEffect)(()=>{e.current||!t.current||(e.current=!0,sb(t.current))},[]),(0,Wt.useEffect)(()=>{let g=0,y=u=>{try{u()}catch(x){console.warn(x)}},m=()=>{if(!document.querySelector(".cardsec .card")||!document.querySelector(".page .head")){g=requestAnimationFrame(m);return}y(Ou),y(Fu)};return g=requestAnimationFrame(m),()=>cancelAnimationFrame(g)},[]),(0,Wt.useEffect)(()=>{let g=m=>{m.key==="Escape"&&s(!1)},y=m=>{n.current&&!n.current.contains(m.target)&&s(!1)};return document.addEventListener("keydown",g),document.addEventListener("pointerdown",y),()=>{document.removeEventListener("keydown",g),document.removeEventListener("pointerdown",y)}},[]),(0,Wt.useEffect)(()=>{let g=0,y=document.documentElement,m=()=>{g=0;let x=window.innerHeight,v=window.scrollY,_=document.documentElement.scrollHeight-x,E=v/x;c(_>0?Math.round(Math.min(1,v/_)*100):0);let M=document.querySelectorAll(".page .head"),T=[["pj1",M[0]],["pj2",M[1]],["pj3",M[2]],["about",document.querySelector(".page .panel")],["foot",document.querySelector(".page .foot")]],R=v<x*.35?"top":"ov";for(let[S,A]of T)A&&A.getBoundingClientRect().top<x*.55&&(R=S);a(R),y.classList.toggle("ovon",R==="ov"),y.classList.toggle("ovsnap",window.innerWidth>640&&E>Gs*.85&&E<oa+.1),y.classList.toggle("lblon",v<x*.12)},u=()=>{g||(g=requestAnimationFrame(m))};return window.addEventListener("scroll",u,{passive:!0}),window.addEventListener("resize",u),m(),()=>{window.removeEventListener("scroll",u),window.removeEventListener("resize",u),g&&cancelAnimationFrame(g)}},[]),(0,Wt.useEffect)(()=>{let g=0,y=()=>{g=requestAnimationFrame(y),!(window.scrollY>window.innerHeight*.4)&&document.querySelectorAll(".stage .obj").forEach(m=>{let u=m.dataset.obj||"",x=document.querySelector('.lbl[data-for="'+u+'"]');if(!x)return;let v=m.getBoundingClientRect(),_=v.left+v.width/2,E=v.top+v.height/2,M=_<window.innerWidth/2,T=v.width*(eb[u]||.3)+tb;x.classList.toggle("rev",!M),x.style.transform="translate("+(M?_+T:_-T).toFixed(1)+"px,"+E.toFixed(1)+"px) translate("+(M?"0":"-100%")+",-50%)"})};return g=requestAnimationFrame(y),()=>cancelAnimationFrame(g)},[]);let d=g=>{g.pointerType==="mouse"&&(window.clearTimeout(i.current),s(!0))},h=g=>{g.pointerType==="mouse"&&(i.current=window.setTimeout(()=>s(!1),180))},p=g=>{s(!1);let y=document.querySelectorAll(".head")[g];y&&window.scrollTo({top:y.getBoundingClientRect().top+window.scrollY-window.innerHeight*.12,behavior:"smooth"})},f=o==="about"?"about":o==="foot"?"contact":o==="top"?"":"project";return(0,ce.jsxs)(ce.Fragment,{children:[(0,ce.jsxs)("main",{className:"stage",id:"stage","data-phase":"q",ref:t,"data-id":"element-50","data-mp":"2phok7xtlq816",children:[(0,ce.jsx)("span",{className:"chrome crop tl","aria-hidden":"true","data-id":"element-51","data-mp":"33g4q5mjn3ui9"}),(0,ce.jsx)("span",{className:"chrome crop tr","aria-hidden":"true","data-id":"element-52","data-mp":"33el75o6ln5cs"}),(0,ce.jsx)("span",{className:"chrome crop bl","aria-hidden":"true","data-id":"element-53","data-mp":"2yjea2z7u4ywu"}),(0,ce.jsx)("span",{className:"chrome crop br","aria-hidden":"true","data-id":"element-54","data-mp":"3i3wezrvkg22g"}),(0,ce.jsxs)("header",{className:"chrome hd hdc"+(o!=="top"?" scrolled":""),"data-id":"element-55","data-mp":"3i1k05nl3u7tm",children:[(0,ce.jsxs)("div",{className:"brand","data-id":"element-56","data-mp":"3n1y69035b7p0",children:[(0,ce.jsxs)("a",{className:"logo",href:"#top","aria-label":"iseo Kim, back to top",onClick:g=>{g.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})},"data-id":"element-57","data-mp":"385gtc4fb5l0c",children:[(0,ce.jsx)("b",{"data-id":"element-58","data-mp":"3d2ywtfak380y",children:"i"}),"seo Kim"]}),(0,ce.jsx)("small",{"data-id":"element-59","data-mp":"3d6d0cquyhn9z",children:"Model IK-2027 \xB7 UI/UX"})]}),(0,ce.jsxs)("div",{className:"spec","data-id":"element-60","data-mp":"2zbkcn54wx0sb",children:[(0,ce.jsx)("small",{"data-id":"element-61","data-mp":"2zbajx9shgfix",children:"Status"}),(0,ce.jsxs)("b",{"data-id":"element-62","data-mp":"343lmyliishfp",children:[(0,ce.jsx)("i",{className:"led","aria-hidden":"true","data-id":"element-63","data-mp":"344dgzrwgy73v"}),"Online"]}),(0,ce.jsx)("small",{"data-id":"element-64","data-mp":"345yd3lyfly3u",children:"Section"}),(0,ce.jsx)("b",{"data-id":"element-65","data-mp":"2pez96o8jjxql",children:DP[o]}),(0,ce.jsx)("small",{"data-id":"element-66","data-mp":"2pg0ioo9wsc67",children:"Local"}),(0,ce.jsx)("b",{className:"clk","data-id":"element-67","data-mp":"2pginwaeju0q9",children:(0,ce.jsx)(FP,{"data-id":"element-68","data-mp":"2pcusf5pjn48w"})}),(0,ce.jsx)("small",{"data-id":"element-69","data-mp":"2ue22xcj2mhj9",children:"Rev."}),(0,ce.jsx)("b",{"data-id":"element-70","data-mp":"2udiv4on4x9iy",children:"03 / 2027"})]}),(0,ce.jsxs)("nav",{"aria-label":"Main","data-id":"element-71","data-mp":"2uek8izrmi83u",children:[(0,ce.jsxs)("div",{className:"pj"+(r?" open":""),ref:n,onPointerEnter:d,onPointerLeave:h,"data-id":"element-72","data-mp":"2ge9clibgi3bt",children:[(0,ce.jsxs)("button",{type:"button",className:"seg"+(f==="project"||r?" on":""),"aria-expanded":r,"aria-controls":"pj-sub",onClick:()=>s(g=>!g),"data-id":"element-73","data-mp":"2kge4ocm9arwc",children:[(0,ce.jsx)("sup",{"data-id":"element-74","data-mp":"30tautrq3xa0x",children:"03"}),"Project"]}),(0,ce.jsxs)("div",{className:"sub",id:"pj-sub","data-id":"element-75","data-mp":"2vvr3pr8b92rk",children:[(0,ce.jsxs)("div",{className:"sh","data-id":"element-76","data-mp":"2vx2dc7oft4ql",children:[(0,ce.jsx)("span",{"data-id":"element-77","data-mp":"2vug0bsis1x0z",children:"Projects \xB7 Rev.2026"}),(0,ce.jsx)("span",{"data-id":"element-78","data-mp":"2qwel5ioh2hus",children:"03"})]}),UP.map(g=>{let y=(0,ce.jsxs)(ce.Fragment,{children:[(0,ce.jsx)("span",{className:"cur","aria-hidden":"true","data-id":"element-79","data-mp":"2lxuxndu8cy0b",children:"\u25B8"}),(0,ce.jsx)("span",{className:"sn","data-id":"element-80","data-mp":"2hxks22aco9lz",children:g.no}),(0,ce.jsxs)("span",{className:"st","data-id":"element-81","data-mp":"2hycaebexsaub",children:[(0,ce.jsx)("b",{"data-id":"element-82","data-mp":"2d59gu3a5t1e4",children:g.name}),(0,ce.jsx)("small",{"data-id":"element-83","data-mp":"2d5j6fpral6ja",children:g.kind})]}),(0,ce.jsx)("span",{className:"sa","aria-hidden":"true","data-id":"element-84","data-mp":"2d3q2wjbz72fi",children:g.href?"\u2197":"\u2193"})]});return g.href?(0,ce.jsx)(Wi,{className:"si",href:g.href,"data-id":"element-85","data-mp":"238xzuzzmjndc",children:y},g.no):(0,ce.jsx)("button",{type:"button",className:"si off",tabIndex:r?0:-1,onClick:()=>p(g.head),"data-id":"element-86","data-mp":"1y80lyzlndfhn",children:y},g.no)})]})]}),(0,ce.jsx)(Wi,{className:"seg"+(f==="about"&&!r?" on":""),href:Xn+"about.html","data-id":"element-87","data-mp":"9qz44vg1fzqq",children:"About"}),(0,ce.jsx)(Wi,{className:"seg"+(f==="contact"&&!r?" on":""),href:Xn+"#contact","data-id":"element-88","data-mp":"dsc7myvnrquh",children:"Contact"})]})]}),(0,ce.jsxs)("div",{className:"chrome fb fbc","data-id":"element-89","data-mp":"nncl83gntz4o",children:[(0,ce.jsx)("span",{className:"cap","data-id":"element-90","data-mp":"nmba5yzn9cmy",children:"A collection of problems, unstuck"}),(0,ce.jsx)("span",{className:"grow","aria-hidden":"true","data-id":"element-91","data-mp":"3m7w1o045ldal"}),(0,ce.jsxs)("span",{className:"mid","aria-hidden":"true","data-id":"element-92","data-mp":"3r4utgc0ch85m",children:["Scroll \u2193 ",(0,ce.jsxs)("b",{"data-id":"element-93","data-mp":"3r5npahxrmd8z",children:[String(l).padStart(2,"0"),"%"]})]}),(0,ce.jsx)("button",{type:"button",id:"tone","aria-pressed":"false","data-id":"element-94","data-mp":"3w47d6nvx5z3z",children:"Light ver."}),(0,ce.jsx)("button",{type:"button",id:"replay","data-id":"element-95","data-mp":"4pjjh4hrvv8v",children:"\u21BA Replay"})]}),(0,ce.jsxs)("div",{className:"center","data-id":"element-96","data-mp":"4rmi2cwzqwp7",children:[(0,ce.jsxs)("div",{className:"mark","data-id":"element-97","data-mp":"33gbkrvddutd0",children:[(0,ce.jsxs)("div",{className:"glyphs",id:"glyphs","data-id":"element-98","data-mp":"33fa8jnkms0tp",children:[(0,ce.jsx)("span",{className:"glyph q","aria-hidden":"true","data-id":"element-99","data-mp":"38emt21o14vt4",children:"?"}),(0,ce.jsx)("span",{className:"glyph bang",id:"bang","aria-hidden":"true","data-id":"element-100","data-mp":"38ctl8j1ok5jj",children:"!"}),(0,ce.jsx)("div",{className:"flash",id:"flash","aria-hidden":"true","data-id":"element-101","data-mp":"2f6lprdy2f6xh"})]}),(0,ce.jsx)("div",{className:"load",id:"load","aria-hidden":"true","data-id":"element-102","data-mp":"2k4wyflcmjbe4",children:"000"})]}),(0,ce.jsxs)("div",{className:"id","data-id":"element-103","data-mp":"2p6cl1hug9pym",children:[(0,ce.jsxs)("h1",{className:"nm",id:"nm","aria-label":"iseo Kim","data-id":"element-104","data-mp":"2p62sbmi0t4p8",children:[(0,ce.jsx)("span",{className:"ii",id:"ii","data-id":"element-105","data-mp":"2u4xn7mt9ijpp",children:"i"}),(0,ce.jsx)("span",{id:"ty","data-id":"element-106","data-mp":"2u32x7u34w1er"})]}),(0,ce.jsxs)("p",{className:"tl","data-id":"element-107","data-mp":"2u21kzmadt8vg",children:["\uC0AC\uC6A9\uC790\uC758 ",(0,ce.jsx)("em",{"data-id":"element-108","data-mp":"1wh5o2nan98fh",children:"\uBB3C\uC74C\uD45C"}),"\uB97C ",(0,ce.jsx)("em",{"data-id":"element-109","data-mp":"1whf3xi1z5z7g",children:"\uB290\uB08C\uD45C"}),"\uB85C \uBC14\uAFB8\uB294 \uB514\uC790\uC774\uB108"]})]})]}),(0,ce.jsxs)("div",{className:"cur",id:"cur","aria-hidden":"true","data-id":"element-110","data-mp":"21fqczqkg45om",children:[(0,ce.jsx)("svg",{width:"22",height:"26",viewBox:"0 0 22 26","data-id":"element-111","data-mp":"21g8gn89ftm6k",children:(0,ce.jsx)("path",{d:"M1 1 L1 20 L6.2 15.3 L9.8 23.6 L13.3 22.1 L9.7 14 L16.8 14 Z",fill:"currentColor",style:{stroke:"var(--canvas)"},strokeWidth:"1.4",strokeLinejoin:"round","data-id":"element-112","data-mp":"26f3ad58y0v5g"})}),(0,ce.jsx)("i",{"data-id":"element-113","data-mp":"2b7cta1bn4uy8",children:"Iseo"})]}),yb.map(g=>(0,ce.jsx)("div",{className:"obj o-"+g,"data-obj":g,"aria-hidden":"true","data-id":"element-114","data-mp":"1dpmjic0z1mbc",children:(0,ce.jsx)("span",{className:"drift","data-id":"element-115","data-mp":"1io7dhtpmr9rc",children:(0,ce.jsx)("span",{className:"vis","data-id":"element-116","data-mp":"1inedrcp39kip",children:(0,ce.jsx)("canvas",{"data-id":"element-117","data-mp":"1imw9bss9vzzp"})})})},g)),yb.map(g=>(0,ce.jsxs)("span",{className:"chrome lbl","data-for":g,"aria-hidden":"true","data-id":"element-118","data-mp":"3vx61zrpjbvcx",children:[(0,ce.jsx)("b",{"data-id":"element-119","data-mp":"3ryf1dalv1vl2",children:u0[g][0]}),(0,ce.jsx)("span",{className:"lt","data-id":"element-120","data-mp":"3rw2o3ar1s9ec",children:u0[g][1]})]},g)),(0,ce.jsxs)("div",{className:"ov",id:"ov","aria-hidden":"true","data-id":"element-121","data-mp":"3mwzhvmzbzx4s",children:[(0,ce.jsxs)("h2",{"aria-label":"Selected works","data-id":"element-122","data-mp":"3i0itqss4tirp",children:[(0,ce.jsx)(sn,{t:"Selected","data-id":"element-123","data-mp":"3hz7o0nf4m0xy"}),(0,ce.jsx)(sn,{t:"works",c:"ac","data-id":"element-124","data-mp":"3i1tusku70cf4"})]}),(0,ce.jsxs)("div",{className:"ovros","data-id":"element-125","data-mp":"3d168udktmlrr",children:[(0,ce.jsxs)("div",{className:"ovro","data-id":"element-126","data-mp":"3d27j4fu0j48f",children:[(0,ce.jsx)("small",{"data-id":"element-127","data-mp":"3d2r1fxnkrumz",children:"Projects"}),(0,ce.jsx)("span",{className:"p","data-id":"element-128","data-mp":"389xzfhjhr0el",children:"03"})]}),(0,ce.jsxs)("div",{className:"ovro","data-id":"element-129","data-mp":"3894n811rjip2",children:[(0,ce.jsx)("small",{"data-id":"element-130","data-mp":"388mv9gm4vqmy",children:"Next"}),(0,ce.jsxs)("span",{"data-id":"element-131","data-mp":"38839fotd4i3n",children:[(0,ce.jsx)("i",{"data-id":"element-132","data-mp":"348cct4h5n7r7"}),"Click one, or keep scrolling"]})]})]}),OP.map(g=>(0,ce.jsxs)("div",{className:"ovc "+g.c,"data-id":"element-133","data-mp":"2z981o8ao6zy8",children:[(0,ce.jsxs)("div",{className:"ovin","data-id":"element-134","data-mp":"2zat1acbud92y",children:[(0,ce.jsxs)("div",{className:"ovstrip","data-id":"element-135","data-mp":"2ua59hofsgo7o",children:[(0,ce.jsx)("b",{"data-id":"element-136","data-mp":"2uaokel70ucc7",children:g.no}),(0,ce.jsx)("span",{"data-id":"element-137","data-mp":"2u93lykhl6992",children:g.tag})]}),(0,ce.jsx)("div",{className:"ovwin","data-id":"element-138","data-mp":"2uc9anymaz949"}),(0,ce.jsx)("h3",{"data-id":"element-139","data-mp":"2pasciav7e0rd",children:g.name}),(0,ce.jsx)("dl",{"data-id":"element-140","data-mp":"2pblllihmx2co",children:g.meta.map(y=>(0,ce.jsxs)("div",{"data-id":"element-141","data-mp":"2pd529a77dfez",children:[(0,ce.jsx)("dt",{"data-id":"element-142","data-mp":"2fng08uvqiwo3",children:y[0]}),(0,ce.jsx)("dd",{"data-id":"element-143","data-mp":"2fnpvawvmzu0n",children:y[1]})]},y[0]))})]}),(0,ce.jsx)("span",{className:"ovsl","data-id":"element-144","data-mp":"2fpj006mow460"}),(0,ce.jsx)("span",{className:"ovst","data-id":"element-145","data-mp":"2kn2ftaz1cp02",children:g.stamp})]},g.no))]}),(0,ce.jsx)("div",{className:"chrome cue",id:"cue","aria-hidden":"true","data-id":"element-146","data-mp":"26n9phgrf8asm",children:"Scroll \u2193"})]}),(0,ce.jsx)(zP,{"data-id":"element-147","data-mp":"2ao3cm7x1hlkg"})]})}var va=en(ss()),Pi=en(jn()),_b="https://iseonve.github.io/iseo_portfolio/",zu={"01":{no:"01",name:"AI Privacy Protection",kind:"\uAE30\uB2A5 \uC81C\uC548 \xB7 \uCF58\uC149\uD2B8",url:_b+"work-01.html"},"02":{no:"02",name:"Sensory Load Agent",kind:"\uC6E8\uC5B4\uB7EC\uBE14 AI \xB7 UX \uB9AC\uC11C\uCE58",url:_b+"work-02.html"},"03":{no:"03",name:"Earlier works",kind:"Archive",head:2}},bb=t=>{let e=t.querySelector(".ol b"),n=(e&&e.textContent||"").match(/0[1-3]/);return n?n[0]:null},wb=t=>t&&t.closest?t.closest(".ohit"):null,BP=t=>t&&t.closest?t.closest(".cardsec .card"):null;function Sb(){let t=(0,va.useRef)(null),[e,n]=(0,va.useState)(zu["01"]);return(0,va.useEffect)(()=>{let i=window.matchMedia("(hover: hover) and (pointer: fine)").matches,r=document.documentElement,s=_=>{let E=wb(_.target);if(!E)return;let M=zu[bb(E)];if(!M)return;if(_.preventDefault(),_.stopImmediatePropagation(),!i&&!E.classList.contains("show")){document.querySelectorAll(".ohit.show").forEach(R=>R.classList.remove("show")),E.classList.add("show");return}if(M.url){window.location.href=M.url;return}let T=document.querySelectorAll(".head")[M.head];T&&window.scrollTo({top:T.getBoundingClientRect().top+window.scrollY-window.innerHeight*.12,behavior:"smooth"})};if(window.addEventListener("click",s,!0),!i)return()=>window.removeEventListener("click",s,!0);r.classList.add("cc");let o=-200,a=-200,l=o,c=a,d=0,h=_=>_&&_.closest?_.closest("a, button, [role=button], summary, label"):null,p=_=>!!(_&&_.closest&&_.closest(".panel")),f=_=>{let E=t.current;if(!E)return;let M=wb(_),T=M?null:BP(_),R=M||T?null:h(_);if(E.classList.toggle("proj",!!M),E.classList.toggle("view",!!T),E.classList.toggle("link",!!R),E.classList.toggle("light",p(_)),E.classList.toggle("left",l>window.innerWidth-320),M){let S=bb(M);S&&zu[S]&&n(zu[S])}},g=_=>{l=_.clientX,c=_.clientY,t.current&&t.current.classList.add("on"),f(_.target)},y=()=>f(document.elementFromPoint(l,c)),m=()=>{t.current&&t.current.classList.remove("on")},u=()=>{let _=t.current;_&&(_.classList.add("down"),_.classList.remove("ring"),_.offsetWidth,_.classList.add("ring"))},x=()=>{t.current&&t.current.classList.remove("down")};window.addEventListener("pointermove",g,{passive:!0}),window.addEventListener("scroll",y,{passive:!0}),document.addEventListener("pointerleave",m),window.addEventListener("pointerdown",u),window.addEventListener("pointerup",x);let v=()=>{o+=(l-o)*.38,a+=(c-a)*.38,t.current&&(t.current.style.transform=`translate(${o.toFixed(1)}px, ${a.toFixed(1)}px)`),d=requestAnimationFrame(v)};return v(),()=>{r.classList.remove("cc"),window.removeEventListener("click",s,!0),window.removeEventListener("pointermove",g),window.removeEventListener("scroll",y),document.removeEventListener("pointerleave",m),window.removeEventListener("pointerdown",u),window.removeEventListener("pointerup",x),cancelAnimationFrame(d)}},[]),(0,Pi.jsxs)("div",{ref:t,className:"sc","aria-hidden":"true","data-id":"element-294","data-mp":"2h82csmhh0pp5",children:[(0,Pi.jsx)("span",{className:"sc-ring","data-id":"element-295","data-mp":"2h4oebpbxh0mz"}),(0,Pi.jsx)("span",{className:"sc-dot","data-id":"element-296","data-mp":"2c7odbstxqo2q"}),(0,Pi.jsx)("span",{className:"sc-view","data-id":"element-297","data-mp":"2c6mvn5iez3c1",children:"View"}),(0,Pi.jsxs)("span",{className:"sc-lab","data-id":"element-298","data-mp":"224j4r9940wus",children:[(0,Pi.jsxs)("b",{"data-id":"element-299","data-mp":"2252brux820u1",children:[(0,Pi.jsx)("em",{"data-id":"element-300","data-mp":"225c3po1tui2d",children:"PJ."}),e.no]}),(0,Pi.jsx)("i",{"data-id":"element-301","data-mp":"225u9pceakanh",children:e.name}),(0,Pi.jsx)("small",{"data-id":"element-302","data-mp":"221wp0mc2fb1h",children:e.kind})]})]})}var HP=[{obj:"lock",no:"01",name:"AI Privacy Protection",kind:"\uAE30\uB2A5 \uC81C\uC548 \xB7 \uCF58\uC149\uD2B8",y:.25},{obj:"case",no:"02",name:"SENSE",kind:"\uC774\uB3D9 \uC9C0\uC6D0 \uC11C\uBE44\uC2A4 \xB7 UX \uB9AC\uC11C\uCE58",y:.3},{obj:"folder",no:"03",name:"Lotte Web Design",kind:"\uC6F9 \uB514\uC790\uC778 \xB7 PC / MO",y:.25,side:.43,sideY:-.09},{obj:"box",next:!0,name:"Opening soon",y:-.12,upY:-1.55,upX:.9}],VP=.85,GP=.75;function Mb(){let t=document.getElementById("stage");if(!t||t.querySelector(".ohit"))return;let e=window.matchMedia("(prefers-reduced-motion: reduce)").matches,n=[];HP.forEach((s,o)=>{let a=t.querySelector('.obj[data-obj="'+s.obj+'"]');if(!a)return;let l=document.createElement("button");l.type="button",l.className="ohit"+(s.next?" cap":""),l.setAttribute("aria-label",s.next?"Next project, opening soon":"PJ."+s.no+" "+s.name+": go to this project");let c=document.createElement("span");c.className="ol";let d=document.createElement("b");if(s.next)d.textContent="NEXT PROJECT";else{let g=document.createElement("em");g.textContent="PJ.",d.appendChild(g),d.appendChild(document.createTextNode(s.no))}c.appendChild(d);let h=document.createElement("span");if(h.className="ot",h.textContent=s.name,c.appendChild(h),!s.next){let g=document.createElement("small");g.textContent=s.kind,c.appendChild(g)}l.appendChild(c),t.appendChild(l);let p=()=>{a.classList.add("hov"),s.next&&Vs(1)},f=()=>{a.classList.remove("hov"),s.next&&Vs(0)};l.addEventListener("pointerenter",p),l.addEventListener("pointerleave",f),l.addEventListener("focus",p),l.addEventListener("blur",f),l.addEventListener("click",()=>{if(s.next){Vs(1),l.classList.add("show");return}let g=document.querySelectorAll(".head")[o];g&&(window.scrollTo({top:g.getBoundingClientRect().top+window.scrollY-window.innerHeight*.12,behavior:e?"auto":"smooth"}),f(),l.blur())}),n.push({b:l,ol:c,obj:a,l:s,key:""})});let i=s=>s<0?0:s>1?1:s,r=s=>s<.5?4*s*s*s:1-Math.pow(-2*s+2,3)/2;(function s(){requestAnimationFrame(s);let o=window.innerWidth,a=window.innerHeight,l=o<=640,c=window.scrollY/a,h=t.dataset.phase==="objects"&&t.classList.contains("settled")?l?1-i(c*3):1-i((c-oa)*9):0,p=r(i(c/Gs));n.forEach(f=>{let g=f.obj.getBoundingClientRect(),y=g.width,m=g.left+y/2,u=g.top+y/2,x=y*(f.l.next?GP:VP),v=[h.toFixed(2),m.toFixed(0),u.toFixed(0),x.toFixed(0),l?1:0,p.toFixed(2),o].join();if(v===f.key)return;f.key=v;let _=f.b.style,E=f.l,M=!l&&E.side!==void 0,T=M?p:1;_.opacity=h.toFixed(2),_.pointerEvents=h>.5?"auto":"none",_.width=_.height=x.toFixed(1)+"px",_.transform="translate3d("+(m-x/2).toFixed(1)+"px,"+(u-x/2).toFixed(1)+"px,0)";let R=f.ol.offsetWidth/2+14,S,A;if(E.next){let P=m+y*.42+R;P+R<=o-14?(S=P,A=y*E.y):(S=m+y*E.upX,A=y*E.upY)}else{let P=m+y*(E.side||0)+R-14;S=M?P+(m-P)*T:m,A=y*(M?E.sideY+(E.y-E.sideY)*T:E.y)}_.setProperty("--ly",A.toFixed(1)+"px"),_.setProperty("--lx",(Math.max(R,Math.min(o-R,S))-m).toFixed(1)+"px"),h<=.5&&(f.obj.classList.remove("hov"),f.b.classList.remove("show"))})})()}function Eb(){Mb();let t=document.documentElement,e=Array.from(document.querySelectorAll(".card")),n=Array.from(document.querySelectorAll(".obj")),i=document.getElementById("gather"),r=[],s=!1,o="";e.forEach(a=>{if(a.querySelector(".stamp"))return;let l=document.createElement("span");l.className="stamp",l.textContent="DOCKED \u2713",l.setAttribute("aria-hidden","true"),a.appendChild(l)}),function a(){if(requestAnimationFrame(a),e.forEach((l,c)=>{let d=parseFloat(l.style.getPropertyValue("--m")||"0")||0;c===1&&p_(d);let h=d>.985;h!==r[c]&&(r[c]=h,l.classList.toggle("hit",h),n[c]&&n[c].classList.toggle("hit",h))}),i){let l=window.innerHeight,c=i.getBoundingClientRect(),d=(1.3*l-(c.top+c.height/2))/(.72*l);d=d<0?0:d>1?1:d;let h=d<.5?4*d*d*d:1-Math.pow(-2*d+2,3)/2,p=h>.9,f=h.toFixed(3);f!==o&&(o=f,t.style.setProperty("--pile",f)),p!==s&&(s=p,Vs(s?1:0))}}()}function Tb(){if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;let t=window.scrollY,e=!1,n=()=>document.documentElement.scrollHeight-window.innerHeight;function i(){let r=window.scrollY,s=t-r;if(Math.abs(s)<.6){e=!1;return}window.scrollTo(0,r+s*.11),requestAnimationFrame(i)}window.addEventListener("wheel",r=>{r.ctrlKey||document.documentElement.classList.contains("lock")||document.querySelector(".menu")||(r.preventDefault(),e||(t=window.scrollY),t=Math.max(0,Math.min(n(),t+r.deltaY*(r.deltaMode===1?32:1))),e||(e=!0,requestAnimationFrame(i)))},{passive:!1})}var Xs=en(jn()),Bu=document.createElement("link");Bu.rel="stylesheet";Bu.href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@300..500&display=swap";Bu.onload=()=>{document.fonts.ready.then(()=>window.dispatchEvent(new Event("resize")))};document.head.appendChild(Bu);(0,Ab.createRoot)(document.getElementById("root")).render((0,Xs.jsxs)(Xs.Fragment,{children:[(0,Xs.jsx)(_0,{"data-id":"element-152","data-mp":"1oeo6s7a9c3xf"}),(0,Xs.jsx)(Sb,{"data-id":"element-153","data-mp":"1oexyq0ev4l5r"})]}));try{Tb()}catch(t){console.warn(t)}var Cb=()=>document.documentElement.classList.toggle("deep",window.scrollY>window.innerHeight*1.2);window.addEventListener("scroll",Cb,{passive:!0});Cb();var b0=t=>{try{t()}catch(e){console.warn(e)}},Rb=()=>{if(!document.querySelector(".card")||!document.querySelector(".page .head")){requestAnimationFrame(Rb);return}b0(Eb),b0(Ou),b0(Fu)};Rb();
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.min.js:
  (**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.min.js:
  (**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.min.js:
  (**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
//# sourceMappingURL=index.js.map
