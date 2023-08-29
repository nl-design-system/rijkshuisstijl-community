import"../sb-preview/runtime.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function _(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function c(t){if(t.ep)return;t.ep=!0;const e=_(t);fetch(t.href,e)}})();const E="modulepreload",f=function(i,n){return new URL(i,n).href},d={},o=function(n,_,c){if(!_||_.length===0)return n();const t=document.getElementsByTagName("link");return Promise.all(_.map(e=>{if(e=f(e,c),e in d)return;d[e]=!0;const r=e.endsWith(".css"),m=r?'[rel="stylesheet"]':"";if(!!c)for(let l=t.length-1;l>=0;l--){const a=t[l];if(a.href===e&&(!r||a.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${m}`))return;const s=document.createElement("link");if(s.rel=r?"stylesheet":E,r||(s.as="script",s.crossOrigin=""),s.href=e,document.head.appendChild(s),r)return new Promise((l,a)=>{s.addEventListener("load",l),s.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>n()).catch(e=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=e,window.dispatchEvent(r),!r.defaultPrevented)throw e})},{createBrowserChannel:p}=__STORYBOOK_MODULE_CHANNELS__,{addons:R}=__STORYBOOK_MODULE_PREVIEW_API__,u=p({page:"preview"});R.setChannel(u);window.__STORYBOOK_ADDONS_CHANNEL__=u;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=u);const w={"./src/stencil.stories.tsx":async()=>o(()=>import("./stencil.stories-f229a774.js"),["./stencil.stories-f229a774.js","./jsx-runtime-9c4ae004.js","./index-1b03fe98.js","./README-d28cd70e.js"],import.meta.url),"./src/button.stories.tsx":async()=>o(()=>import("./button.stories-3bed0f0a.js"),["./button.stories-3bed0f0a.js","./jsx-runtime-9c4ae004.js","./index-1b03fe98.js","./chunk-S4VUQJ4A-c85f14bc.js","./index-24381b2d.js"],import.meta.url),"./src/bem.stories.tsx":async()=>o(()=>import("./bem.stories-2e1671d6.js"),["./bem.stories-2e1671d6.js","./jsx-runtime-9c4ae004.js","./index-1b03fe98.js","./README-d28cd70e.js","./bem.stories-ade294cc.css"],import.meta.url),"./src/documentation/notice.stories.mdx":async()=>o(()=>import("./notice.stories-f26a1125.js"),["./notice.stories-f26a1125.js","./chunk-S4VUQJ4A-c85f14bc.js","./index-1b03fe98.js","./index-24381b2d.js","./jsx-runtime-9c4ae004.js","./index-2ef8b458.js"],import.meta.url),"./src/documentation/license.stories.mdx":async()=>o(()=>import("./license.stories-cc56a3d6.js"),["./license.stories-cc56a3d6.js","./chunk-S4VUQJ4A-c85f14bc.js","./index-1b03fe98.js","./index-24381b2d.js","./jsx-runtime-9c4ae004.js","./index-2ef8b458.js"],import.meta.url),"./src/documentation/introduction.stories.mdx":async()=>o(()=>import("./introduction.stories-2a43c4cd.js"),["./introduction.stories-2a43c4cd.js","./chunk-S4VUQJ4A-c85f14bc.js","./index-1b03fe98.js","./index-24381b2d.js","./jsx-runtime-9c4ae004.js","./index-2ef8b458.js"],import.meta.url)};async function O(i){return w[i]()}O.__docgenInfo={description:"",methods:[],displayName:"importFn"};const{composeConfigs:P,PreviewWeb:T,ClientApi:S}=__STORYBOOK_MODULE_PREVIEW_API__,y=async()=>{const i=await Promise.all([o(()=>import("./config-0587ebbc.js"),["./config-0587ebbc.js","./index-1b03fe98.js","./index-24381b2d.js"],import.meta.url),o(()=>import("./preview-1728122e.js"),[],import.meta.url),o(()=>import("./preview-c60e8274.js"),["./preview-c60e8274.js","./jsx-runtime-9c4ae004.js","./index-1b03fe98.js","./preview-905c3905.css"],import.meta.url)]);return P(i)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new T;window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;window.__STORYBOOK_CLIENT_API__=window.__STORYBOOK_CLIENT_API__||new S({storyStore:window.__STORYBOOK_PREVIEW__.storyStore});window.__STORYBOOK_PREVIEW__.initialize({importFn:O,getProjectAnnotations:y});export{o as _};
//# sourceMappingURL=iframe-f280ca87.js.map
