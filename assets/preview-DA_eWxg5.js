const{STORY_CHANGED:A,STORY_RENDERED:N,GLOBALS_UPDATED:T,FORCE_RE_RENDER:D,FORCE_REMOUNT:j,DOCS_RENDERED:k,UPDATE_GLOBALS:C}=__STORYBOOK_MODULE_CORE_EVENTS__,{addons:L,useMemo:B,useEffect:R}=__STORYBOOK_MODULE_PREVIEW_API__;var M="pseudo",P=["::-(webkit|moz|ms)-[a-z-]+","::part\\([^)]+\\)"],d={hover:"hover",active:"active",focusVisible:"focus-visible",focusWithin:"focus-within",focus:"focus",visited:"visited",link:"link",target:"target"},U=e=>e.indexOf("@")===0,q=e=>{if(U(e))return[e];let s=[],t=0,o=0,r="";for(let l=0,a=e.length;l<a;l++){let n=e[l];if(n==="(")t+=1;else if(n===")")t-=1;else if(n==="[")o+=1;else if(n==="]")o-=1;else if(n===","&&!t&&!o){s.push(r.trim()),r="";continue}r+=n}return s.push(r.trim()),s},O=Object.values(d),$=`:(${O.join("|")})`,E=new RegExp($),I=new RegExp($,"g"),_=new Set,g=e=>{_.has(e)||(console.warn(e),_.add(e))},f=(e,s)=>{let t=`(?<!(?:${P.join("|")})\\S*)`;return O.reduce((o,r)=>o.replace(new RegExp(`${t}:${r}`,"g"),`.pseudo-${r}${s?"-all":""}`),e)},S=(e,s,t)=>{let{states:o,withoutPseudoStates:r}=G(e);if(o.length===0&&!t)return e;let l=`${t??""}${o.map(a=>`.pseudo-${a}-all`).join("")}`;return r=r.replace(":host-context(*)","").trimStart(),r.startsWith(":host-context(")?r.replace(new RegExp("(?<=:host-context\\(\\S+)\\)"),`)${l}`):s?`:host(${l}) ${r}`:`${l} ${r}`},G=e=>{let s=new Set,t=e.replace(I,(o,r)=>(s.add(r),"")).replaceAll(new RegExp("(?<!is)\\(\\)","g"),"(*)").replace(new RegExp("(?<=[\\s(]),\\s+|(,\\s+)+(?=\\))","g"),"")||"*";return{states:Array.from(s),withoutPseudoStates:t}},y=(e,s)=>[...e.matchAll(/:not\(([^)]+)\)/g)].reduce((t,o)=>{let r=o[0],l=o[1],a=W(l,s);return t.replace(r,a)},e),W=(e,s)=>{let t=[];for(let o of e.split(/,\s*/))t.push(S(o,s));return`:not(${t.join(", ")})`},Y=({cssText:e,selectorText:s},t)=>e.replace(s,q(s).flatMap(o=>{if(o.includes(".pseudo-"))return[];let r=[o];if(!E.test(o))return r;let l=f(o);l!==o&&r.push(l);let a="";if(o.startsWith(":host(")){let n=o.match(/^:host\((\S+)\)\s+(.+)$/);if(n&&E.test(n[2])){let c=n[1],i=n[2];c=f(c,!0),i=y(i,!0),a=S(i,!0,c)}else a=f(o,!0)}else{let n=y(o,t);a=S(n,t)}return r.push(a),r}).join(", ")),F=(e,s=!1)=>{try{let t=v(e,1e3,s);return t>=1e3&&g("Reached maximum of 1000 pseudo selectors per sheet, skipping the rest."),t>0}catch(t){return String(t).includes("cssRules")?g(`Can't access cssRules, likely due to CORS restrictions: ${e.href}`):console.error(t,e.href),!1}},v=(e,s,t)=>{let o=0,r=-1;for(let l of e.cssRules){r++;let a=0;if(l.__processed)a=l.__pseudoStatesRewrittenCount;else{if("cssRules"in l&&l.cssRules.length)a=v(l,s-o,t);else{if(!("selectorText"in l))continue;let n=l;if(E.test(n.selectorText)){let c=Y(n,t);e.deleteRule(r),e.insertRule(c,r),a=1}}l.__processed=!0,l.__pseudoStatesRewrittenCount=a}if(o+=a,o>=s)break}return o},u=L.getChannel(),p=new Set,x=(e,s)=>{Object.values(d).forEach(t=>{e.classList.remove(`pseudo-${t}`),e.classList.remove(`pseudo-${t}-all`)}),s.forEach(t=>e.classList.add(t))};function m(e,s){let t=[];return e.querySelectorAll("*").forEach(o=>{o.shadowRoot&&t.push(...m(o.shadowRoot,s))}),t.push(...e.querySelectorAll(s).values()),t}var K=(e,s={})=>{let t=new Map([[e,new Set]]),o=(r,l)=>t.set(r,new Set([...t.get(r)||[],l]));Object.entries(s||{}).forEach(([r,l])=>{typeof l=="boolean"?l&&o(e,`${r}-all`):typeof l=="string"?m(e,l).forEach(a=>o(a,r)):Array.isArray(l)&&l.forEach(a=>m(e,a).forEach(n=>o(n,r)))}),t.forEach((r,l)=>{let a=new Set;r.forEach(n=>{let c=n.replace("-all","");d[n]?a.add(`pseudo-${d[n]}`):d[c]&&a.add(`pseudo-${d[c]}-all`)}),x(l,a)})},b=e=>{let s=new Set;e.className.split(" ").filter(t=>t.match(/^pseudo-(.(?!-all))+$/)).forEach(t=>s.add(t));for(let t=e.parentNode;t;){if(t instanceof ShadowRoot){t=t.host;continue}if(t instanceof Element){let o=t;o.className&&o.className.split(" ").filter(r=>r.match(/^pseudo-.+-all$/)!==null).forEach(r=>s.add(r))}t=t.parentNode}x(e,s)},w=e=>{let{rootSelector:s,...t}=e||{};return t},V=(e={},s={})=>e!==null&&s!==null&&Object.keys(e).length===Object.keys(s).length&&Object.keys(e).every(t=>JSON.stringify(e[t])===JSON.stringify(s[t])),z=(e,{viewMode:s,parameters:t,id:o,globals:r})=>{let{pseudo:l}=t,{pseudo:a}=r,{rootSelector:n}=l||{},c=B(()=>n?document.querySelector(n):s==="docs"?document.getElementById(`story--${o}`):document.getElementById("storybook-root")||document.getElementById("root"),[n,s,o]);return R(()=>{let i=w(l);s==="story"&&!V(i,a)&&u.emit(C,{globals:{pseudo:i}})},[l,s]),R(()=>{if(!c)return;let i=setTimeout(()=>{K(c,a||w(l)),p.forEach(b)},0);return()=>clearTimeout(i)},[c,a,l]),e()},h=e=>{var t;let s=Array.from(e?e.styleSheets:document.styleSheets);(t=e==null?void 0:e.adoptedStyleSheets)!=null&&t.length&&(s=e.adoptedStyleSheets),s.forEach(o=>F(o,!!e)),e&&p&&p.add(e.host)};u.on(A,()=>p.clear());u.on(N,()=>h());u.on(T,()=>h());u.on(D,()=>h());u.on(j,()=>h());u.on(k,()=>h());Element.prototype.attachShadow&&(Element.prototype._attachShadow=Element.prototype.attachShadow,Element.prototype.attachShadow=function(e){let s=this._attachShadow({...e,mode:"open"});return requestAnimationFrame(()=>{h(s),p.has(s.host)&&b(s.host)}),s});var J=[z],H={[M]:!1};export{J as decorators,H as initialGlobals};
