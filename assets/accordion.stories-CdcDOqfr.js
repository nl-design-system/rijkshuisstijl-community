import{j as J}from"./jsx-runtime-D_zvdyIk.js";import{r as Ot}from"./README-DTmsIE8e.js";import{t as jt,s as Q,_ as Et,p as yt,m as _t}from"./index-BfH1V66g.js";import{e as H,r as Rt}from"./index-C5EOLjWw.js";import"./index-C19XUJDJ.js";import{d as Pt}from"./index-Ddn0M8K9.js";import{m as Lt}from"./merge-markdown-CQvfZ6M6.js";import"./index-DKyXVfeP.js";import"./clsx-B-dksMZM.js";import"./_commonjsHelpers-C932wzq6.js";import"./index-COgOdkeX.js";import"./iframe-DETBPdK9.js";import"../sb-preview/runtime.js";function Ct(r,t){if(!(r instanceof t))throw new TypeError("Cannot call a class as a function")}function rt(r,t){for(var o=0;o<t.length;o++){var i=t[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,jt(i.key),i)}}function Dt(r,t,o){return t&&rt(r.prototype,t),o&&rt(r,o),Object.defineProperty(r,"prototype",{writable:!1}),r}function kt(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function At(r,t){if(t&&(Q(t)=="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return kt(r)}function F(r){return F=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},F(r)}function X(r,t){return X=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,i){return o.__proto__=i,o},X(r,t)}function St(r,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(t&&t.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),Object.defineProperty(r,"prototype",{writable:!1}),t&&X(r,t)}var Y={exports:{}},Z={exports:{}},nt;function Tt(){return nt||(nt=1,function(r){function t(o){"@babel/helpers - typeof";return r.exports=t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},r.exports.__esModule=!0,r.exports.default=r.exports,t(o)}r.exports=t,r.exports.__esModule=!0,r.exports.default=r.exports}(Z)),Z.exports}var ot;function qt(){return ot||(ot=1,function(r){var t=Tt().default;function o(){r.exports=o=function(){return f},r.exports.__esModule=!0,r.exports.default=r.exports;var i,f={},l=Object.prototype,h=l.hasOwnProperty,m=Object.defineProperty||function(a,e,n){a[e]=n.value},w=typeof Symbol=="function"?Symbol:{},y=w.iterator||"@@iterator",p=w.asyncIterator||"@@asyncIterator",_=w.toStringTag||"@@toStringTag";function x(a,e,n){return Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),a[e]}try{x({},"")}catch{x=function(n,c,u){return n[c]=u}}function S(a,e,n,c){var u=e&&e.prototype instanceof A?e:A,s=Object.create(u.prototype),d=new $(c||[]);return m(s,"_invoke",{value:wt(a,n,d)}),s}function C(a,e,n){try{return{type:"normal",arg:a.call(e,n)}}catch(c){return{type:"throw",arg:c}}}f.wrap=S;var T="suspendedStart",G="suspendedYield",D="executing",O="completed",g={};function A(){}function j(){}function R(){}var U={};x(U,y,function(){return this});var V=Object.getPrototypeOf,q=V&&V(V(K([])));q&&q!==l&&h.call(q,y)&&(U=q);var k=R.prototype=A.prototype=Object.create(U);function tt(a){["next","throw","return"].forEach(function(e){x(a,e,function(n){return this._invoke(e,n)})})}function M(a,e){function n(u,s,d,v){var b=C(a[u],a,s);if(b.type!=="throw"){var P=b.arg,E=P.value;return E&&t(E)=="object"&&h.call(E,"__await")?e.resolve(E.__await).then(function(L){n("next",L,d,v)},function(L){n("throw",L,d,v)}):e.resolve(E).then(function(L){P.value=L,d(P)},function(L){return n("throw",L,d,v)})}v(b.arg)}var c;m(this,"_invoke",{value:function(s,d){function v(){return new e(function(b,P){n(s,d,b,P)})}return c=c?c.then(v,v):v()}})}function wt(a,e,n){var c=T;return function(u,s){if(c===D)throw Error("Generator is already running");if(c===O){if(u==="throw")throw s;return{value:i,done:!0}}for(n.method=u,n.arg=s;;){var d=n.delegate;if(d){var v=et(d,n);if(v){if(v===g)continue;return v}}if(n.method==="next")n.sent=n._sent=n.arg;else if(n.method==="throw"){if(c===T)throw c=O,n.arg;n.dispatchException(n.arg)}else n.method==="return"&&n.abrupt("return",n.arg);c=D;var b=C(a,e,n);if(b.type==="normal"){if(c=n.done?O:G,b.arg===g)continue;return{value:b.arg,done:n.done}}b.type==="throw"&&(c=O,n.method="throw",n.arg=b.arg)}}}function et(a,e){var n=e.method,c=a.iterator[n];if(c===i)return e.delegate=null,n==="throw"&&a.iterator.return&&(e.method="return",e.arg=i,et(a,e),e.method==="throw")||n!=="return"&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var u=C(c,a.iterator,e.arg);if(u.type==="throw")return e.method="throw",e.arg=u.arg,e.delegate=null,g;var s=u.arg;return s?s.done?(e[a.resultName]=s.value,e.next=a.nextLoc,e.method!=="return"&&(e.method="next",e.arg=i),e.delegate=null,g):s:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,g)}function xt(a){var e={tryLoc:a[0]};1 in a&&(e.catchLoc=a[1]),2 in a&&(e.finallyLoc=a[2],e.afterLoc=a[3]),this.tryEntries.push(e)}function B(a){var e=a.completion||{};e.type="normal",delete e.arg,a.completion=e}function $(a){this.tryEntries=[{tryLoc:"root"}],a.forEach(xt,this),this.reset(!0)}function K(a){if(a||a===""){var e=a[y];if(e)return e.call(a);if(typeof a.next=="function")return a;if(!isNaN(a.length)){var n=-1,c=function u(){for(;++n<a.length;)if(h.call(a,n))return u.value=a[n],u.done=!1,u;return u.value=i,u.done=!0,u};return c.next=c}}throw new TypeError(t(a)+" is not iterable")}return j.prototype=R,m(k,"constructor",{value:R,configurable:!0}),m(R,"constructor",{value:j,configurable:!0}),j.displayName=x(R,_,"GeneratorFunction"),f.isGeneratorFunction=function(a){var e=typeof a=="function"&&a.constructor;return!!e&&(e===j||(e.displayName||e.name)==="GeneratorFunction")},f.mark=function(a){return Object.setPrototypeOf?Object.setPrototypeOf(a,R):(a.__proto__=R,x(a,_,"GeneratorFunction")),a.prototype=Object.create(k),a},f.awrap=function(a){return{__await:a}},tt(M.prototype),x(M.prototype,p,function(){return this}),f.AsyncIterator=M,f.async=function(a,e,n,c,u){u===void 0&&(u=Promise);var s=new M(S(a,e,n,c),u);return f.isGeneratorFunction(e)?s:s.next().then(function(d){return d.done?d.value:s.next()})},tt(k),x(k,_,"Generator"),x(k,y,function(){return this}),x(k,"toString",function(){return"[object Generator]"}),f.keys=function(a){var e=Object(a),n=[];for(var c in e)n.push(c);return n.reverse(),function u(){for(;n.length;){var s=n.pop();if(s in e)return u.value=s,u.done=!1,u}return u.done=!0,u}},f.values=K,$.prototype={constructor:$,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=i,this.done=!1,this.delegate=null,this.method="next",this.arg=i,this.tryEntries.forEach(B),!e)for(var n in this)n.charAt(0)==="t"&&h.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=i)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if(e.type==="throw")throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function c(P,E){return d.type="throw",d.arg=e,n.next=P,E&&(n.method="next",n.arg=i),!!E}for(var u=this.tryEntries.length-1;u>=0;--u){var s=this.tryEntries[u],d=s.completion;if(s.tryLoc==="root")return c("end");if(s.tryLoc<=this.prev){var v=h.call(s,"catchLoc"),b=h.call(s,"finallyLoc");if(v&&b){if(this.prev<s.catchLoc)return c(s.catchLoc,!0);if(this.prev<s.finallyLoc)return c(s.finallyLoc)}else if(v){if(this.prev<s.catchLoc)return c(s.catchLoc,!0)}else{if(!b)throw Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return c(s.finallyLoc)}}}},abrupt:function(e,n){for(var c=this.tryEntries.length-1;c>=0;--c){var u=this.tryEntries[c];if(u.tryLoc<=this.prev&&h.call(u,"finallyLoc")&&this.prev<u.finallyLoc){var s=u;break}}s&&(e==="break"||e==="continue")&&s.tryLoc<=n&&n<=s.finallyLoc&&(s=null);var d=s?s.completion:{};return d.type=e,d.arg=n,s?(this.method="next",this.next=s.finallyLoc,g):this.complete(d)},complete:function(e,n){if(e.type==="throw")throw e.arg;return e.type==="break"||e.type==="continue"?this.next=e.arg:e.type==="return"?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):e.type==="normal"&&n&&(this.next=n),g},finish:function(e){for(var n=this.tryEntries.length-1;n>=0;--n){var c=this.tryEntries[n];if(c.finallyLoc===e)return this.complete(c.completion,c.afterLoc),B(c),g}},catch:function(e){for(var n=this.tryEntries.length-1;n>=0;--n){var c=this.tryEntries[n];if(c.tryLoc===e){var u=c.completion;if(u.type==="throw"){var s=u.arg;B(c)}return s}}throw Error("illegal catch attempt")},delegateYield:function(e,n,c){return this.delegate={iterator:K(e),resultName:n,nextLoc:c},this.method==="next"&&(this.arg=i),g}},f}r.exports=o,r.exports.__esModule=!0,r.exports.default=r.exports}(Y)),Y.exports}var W,it;function Mt(){if(it)return W;it=1;var r=qt()();W=r;try{regeneratorRuntime=r}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}return W}Mt();var It=function(t){return t.toLowerCase().split("-").map(function(o){return o.charAt(0).toUpperCase()+o.slice(1)}).join("")},vt=function(t){return t.replace(/([A-Z])/g,function(o){return"-".concat(o[0].toLowerCase())})},Nt=function(t,o){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(t instanceof Element){var f=Ft(t.classList,o,i);f!==""&&(t.className=f),Object.keys(o).forEach(function(l){if(!(l==="children"||l==="style"||l==="ref"||l==="class"||l==="className"||l==="forwardedRef"))if(l.indexOf("on")===0&&l[2]===l[2].toUpperCase()){var h=l.substring(2),m=h[0].toLowerCase()+h.substring(1);gt(m)||Ut(t,m,o[l])}else{t[l]=o[l];var w=Q(o[l]);w==="string"&&t.setAttribute(vt(l),o[l])}})}},Ft=function(t,o,i){var f=o.className||o.class,l=i.className||i.class,h=z(t),m=z(f?f.split(" "):[]),w=z(l?l.split(" "):[]),y=[];return h.forEach(function(p){m.has(p)?(y.push(p),m.delete(p)):w.has(p)||y.push(p)}),m.forEach(function(p){return y.push(p)}),y.join(" ")},Gt=function(t){switch(t){case"doubleclick":return"dblclick"}return t};/**
 * Checks if an event is supported in the current execution environment.
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */var gt=function(t){if(typeof document>"u")return!0;var o="on"+Gt(t),i=o in document;if(!i){var f=document.createElement("div");f.setAttribute(o,"return;"),i=typeof f[o]=="function"}return i},Ut=function(t,o,i){var f=t.__events||(t.__events={}),l=f[o];l&&t.removeEventListener(o,l),t.addEventListener(o,f[o]=function(m){i&&i.call(this,m)})},z=function(t){var o=new Map;return t.forEach(function(i){return o.set(i,i)}),o};function at(r,t){var o=Object.keys(r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(r);t&&(i=i.filter(function(f){return Object.getOwnPropertyDescriptor(r,f).enumerable})),o.push.apply(o,i)}return o}function ct(r){for(var t=1;t<arguments.length;t++){var o=arguments[t]!=null?arguments[t]:{};t%2?at(Object(o),!0).forEach(function(i){yt(r,i,o[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):at(Object(o)).forEach(function(i){Object.defineProperty(r,i,Object.getOwnPropertyDescriptor(o,i))})}return r}var Vt=function(t,o){typeof t=="function"?t(o):t!=null&&(t.current=o)},Bt=function(){for(var t=arguments.length,o=new Array(t),i=0;i<t;i++)o[i]=arguments[i];return function(f){o.forEach(function(l){Vt(l,f)})}},$t=function(t,o){var i=function(l,h){return H.createElement(t,ct(ct({},l),{},{forwardedRef:h}))};return i.displayName=o,H.forwardRef(i)},Kt=["children","forwardedRef","style","className","ref"];function st(r,t){var o=Object.keys(r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(r);t&&(i=i.filter(function(f){return Object.getOwnPropertyDescriptor(r,f).enumerable})),o.push.apply(o,i)}return o}function ut(r){for(var t=1;t<arguments.length;t++){var o=arguments[t]!=null?arguments[t]:{};t%2?st(Object(o),!0).forEach(function(i){yt(r,i,o[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):st(Object(o)).forEach(function(i){Object.defineProperty(r,i,Object.getOwnPropertyDescriptor(o,i))})}return r}function Yt(r,t,o){return t=F(t),At(r,bt()?Reflect.construct(t,o||[],F(r).constructor):t.apply(r,o))}function bt(){try{var r=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(bt=function(){return!!r})()}var Zt=function(t,o,i,f){var l=It(t),h=function(m){function w(y){var p;return Ct(this,w),p=Yt(this,w,[y]),p.setComponentElRef=function(_){p.componentEl=_},p}return St(w,m),Dt(w,[{key:"componentDidMount",value:function(){this.componentDidUpdate(this.props)}},{key:"componentDidUpdate",value:function(p){Nt(this.componentEl,this.props,p)}},{key:"render",value:function(){var p=this.props,_=p.children,x=p.forwardedRef,S=p.style;p.className,p.ref;var C=Et(p,Kt),T=Object.keys(C).reduce(function(D,O){var g=C[O];if(O.indexOf("on")===0&&O[2]===O[2].toUpperCase()){var A=O.substring(2).toLowerCase();typeof document<"u"&&gt(A)&&(D[O]=g)}else{var j=Q(g);(j==="string"||j==="boolean"||j==="number")&&(D[vt(O)]=g)}return D},{}),G=ut(ut({},T),{},{ref:Bt(x,this.setComponentElRef),style:S});return Rt.createElement(t,G,_)}}],[{key:"displayName",get:function(){return l}}])}(H.Component);return $t(h,l)};Pt();var Wt=Zt("utrecht-icon-chevron-down");const zt=`# Usage

\`\`\`tsx
import { AccordionProvider } from '@rijkshuisstijl-community/components/react';

<AccordionProvider
  sections={[
    {
      body: 'Antwoord 1',
      label: 'Vraag 1',
    },
    {
      body: 'Antwoord 2',
      label: 'Vraag 2',
    },
    {
      body: 'Antwoord 3',
      label: 'Vraag 3',
    },
  ]}
/>;
\`\`\`
`,Ht=({expanded:r,label:t,body:o,appearance:i,icon:f,sections:l})=>J.jsx(_t,{appearance:i,icon:f,sections:l||[{expanded:r,label:t,body:o}]}),pe={title:"Rijkshuisstijl/Accordion",id:"rhc-accordion",args:{label:"",body:"",expandedAccordion:!1,appearance:"",icon:void 0},argTypes:{label:{name:"label",type:{name:"string",required:!0},table:{defaultValue:{summary:""},category:"API"}},body:{name:"body",type:{name:"string",required:!0},table:{defaultValue:{summary:""},category:"API"}},expandedAccordion:{name:"expandedAccordion",type:{name:"boolean",required:!1},table:{defaultValue:{summary:""},category:"API"}},appearance:{description:"Appearance",control:{type:"select"},options:["","utrecht"]},icon:{name:"icon",description:"Icon at the start",control:{type:"select"},options:["",null,"utrecht-icon-chevron-down"],mapping:{"":void 0,null:null,"utrecht-icon-chevron-down":J.jsx(Wt,{})}}},parameters:{tokensPrefix:"utrecht-accordion",status:{type:"STABLE"},docs:{description:{component:Lt([Ot,zt])}},github:"https://github.com/nl-design-system/rijkshuisstijl-community/issues/456",figma:"https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?node-id=1261-4784&p=f&t=SHnEVcZMmxKnZVS8-0",nldesignsystem:"https://www.nldesignsystem.nl/accordion/",componentOrigin:"Dit component is overgenomen van de Gemeente Utrecht, met styling van de Rijkshuisstijl Community."},render:Ht},Xt={label:'ما هو "لوريم إيبسوم" ؟',body:' المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف. خمسة قرون من الزمن لم تقضي على هذا النص، بل انه حتى صار مستخدماً وبشكله الأصلي في الطباعة والتنضيد الإلكتروني. انتشر بشكل كبير في ستينيّات هذا القرن مع إصدار رقائق "ليتراسيت" (Letraset) البلاستيكية تحوي مقاطع من هذا النص، وعاد لينتشر مرة أخرى مؤخراَ مع ظهور برامج النشر الإلكتروني مثل "ألدوس بايج مايكر" (Aldus PageMaker) والتي حوت أيضاً على نسخ من نص لوريم إيبسوم.'},Jt=[{label:"Lorem ipsum 1",body:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
      laborum.`,expanded:!0},{label:"Lorem ipsum 2",body:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
      laborum.`,expanded:!0},{label:"Lorem ipsum 3",body:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
      laborum.`,expanded:!0}],I={args:{sections:Jt}},N={args:Xt,decorators:[r=>J.jsx("div",{dir:"rtl",lang:"ar",children:r()})],name:"Right-to-left"};var lt,ft,pt;I.parameters={...I.parameters,docs:{...(lt=I.parameters)==null?void 0:lt.docs,source:{originalSource:`{
  args: {
    sections: accordionData
  }
}`,...(pt=(ft=I.parameters)==null?void 0:ft.docs)==null?void 0:pt.source}}};var dt,ht,mt;N.parameters={...N.parameters,docs:{...(dt=N.parameters)==null?void 0:dt.docs,source:{originalSource:`{
  args: accordionDefaultDataAR,
  decorators: [Story => <div dir="rtl" lang="ar">
        {Story()}
      </div>],
  name: 'Right-to-left'
}`,...(mt=(ht=N.parameters)==null?void 0:ht.docs)==null?void 0:mt.source}}};const de=["Default","RTL"];export{I as Default,N as RTL,de as __namedExportsOrder,pe as default};