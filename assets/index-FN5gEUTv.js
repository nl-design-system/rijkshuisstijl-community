import{a as S}from"./index-BBVzVmym.js";var y={exports:{}},t={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _;function R(){if(_)return t;_=1;var c=S();function d(r){var e="https://react.dev/errors/"+r;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+r+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(){}var i={d:{f,r:function(){throw Error(d(522))},D:f,C:f,L:f,m:f,X:f,S:f,M:f},p:0,findDOMNode:null},o=Symbol.for("react.portal");function O(r,e,n){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:u==null?null:""+u,children:r,containerInfo:e,implementation:n}}var a=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(r,e){if(r==="font")return"";if(typeof e=="string")return e==="use-credentials"?e:""}return t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,t.createPortal=function(r,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)throw Error(d(299));return O(r,e,null,n)},t.flushSync=function(r){var e=a.T,n=i.p;try{if(a.T=null,i.p=2,r)return r()}finally{a.T=e,i.p=n,i.d.f()}},t.preconnect=function(r,e){typeof r=="string"&&(e?(e=e.crossOrigin,e=typeof e=="string"?e==="use-credentials"?e:"":void 0):e=null,i.d.C(r,e))},t.prefetchDNS=function(r){typeof r=="string"&&i.d.D(r)},t.preinit=function(r,e){if(typeof r=="string"&&e&&typeof e.as=="string"){var n=e.as,u=g(n,e.crossOrigin),s=typeof e.integrity=="string"?e.integrity:void 0,l=typeof e.fetchPriority=="string"?e.fetchPriority:void 0;n==="style"?i.d.S(r,typeof e.precedence=="string"?e.precedence:void 0,{crossOrigin:u,integrity:s,fetchPriority:l}):n==="script"&&i.d.X(r,{crossOrigin:u,integrity:s,fetchPriority:l,nonce:typeof e.nonce=="string"?e.nonce:void 0})}},t.preinitModule=function(r,e){if(typeof r=="string")if(typeof e=="object"&&e!==null){if(e.as==null||e.as==="script"){var n=g(e.as,e.crossOrigin);i.d.M(r,{crossOrigin:n,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0})}}else e==null&&i.d.M(r)},t.preload=function(r,e){if(typeof r=="string"&&typeof e=="object"&&e!==null&&typeof e.as=="string"){var n=e.as,u=g(n,e.crossOrigin);i.d.L(r,n,{crossOrigin:u,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,type:typeof e.type=="string"?e.type:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0,referrerPolicy:typeof e.referrerPolicy=="string"?e.referrerPolicy:void 0,imageSrcSet:typeof e.imageSrcSet=="string"?e.imageSrcSet:void 0,imageSizes:typeof e.imageSizes=="string"?e.imageSizes:void 0,media:typeof e.media=="string"?e.media:void 0})}},t.preloadModule=function(r,e){if(typeof r=="string")if(e){var n=g(e.as,e.crossOrigin);i.d.m(r,{as:typeof e.as=="string"&&e.as!=="script"?e.as:void 0,crossOrigin:n,integrity:typeof e.integrity=="string"?e.integrity:void 0})}else i.d.m(r)},t.requestFormReset=function(r){i.d.r(r)},t.unstable_batchedUpdates=function(r,e){return r(e)},t.useFormState=function(r,e,n){return a.H.useFormState(r,e,n)},t.useFormStatus=function(){return a.H.useHostTransitionStatus()},t.version="19.0.0",t}var m;function E(){if(m)return y.exports;m=1;function c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)}catch(d){console.error(d)}}return c(),y.exports=R(),y.exports}export{E as r};
