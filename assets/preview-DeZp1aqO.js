import{j as _}from"./jsx-runtime-BoFrXSaA.js";/* empty css              */import"./index-WI1YhYyJ.js";import{a as g}from"./index.esm-Cyx1e9Mw.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./objectWithoutProperties-BJfzkg-c.js";import"./index-BeNflsVP.js";import"./iframe-gD3jxLYF.js";import"../sb-preview/runtime.js";const{useParameter:k,addons:R,useEffect:j,useMemo:K}=__STORYBOOK_MODULE_PREVIEW_API__;var v=Object.defineProperty,S=(e,t)=>{for(var o in t)v(e,o,{get:t[o],enumerable:!0})},b={};S(b,{initializeThemeState:()=>p,pluckThemeFromContext:()=>c,useThemeParameters:()=>h});var E="themes",A=`storybook/${E}`,M="theme",y={},C={REGISTER_THEMES:`${A}/REGISTER_THEMES`};function c({globals:e}){return e[M]||""}function h(){return k(E,y)}function p(e,t){R.getChannel().emit(C.REGISTER_THEMES,{defaultTheme:t,themes:e})}var D="html",u=e=>e.split(" ").filter(Boolean),L=({themes:e,defaultTheme:t,parentSelector:o=D})=>(p(Object.keys(e),t),(d,f)=>{let{themeOverride:i}=h(),s=c(f);return j(()=>{let n=i||s||t,r=document.querySelector(o);if(!r)return;Object.entries(e).filter(([m])=>m!==n).forEach(([m,T])=>{let l=u(T);l.length>0&&r.classList.remove(...l)});let a=u(e[n]);a.length>0&&r.classList.add(...a)},[i,s,o]),d()});const U={decorators:[L({themes:{RijkshuisstijlCommunity:"rhc-theme",DigiD:"digid-theme",MijnOverheid:"mijnoverheid-theme",Logius:"logius-theme",RIVM:"rivm-theme"},defaultTheme:"RijkshuisstijlCommunity"}),e=>_.jsx(g,{children:e()})],parameters:{previewTabs:{"storybookjs/notes/panel":{title:"Documentation"},"storybook/docs/panel":{title:"API"},canvas:{title:"Design Tokens"}},controls:{expanded:!1},options:{panelPosition:"right",storySort:{order:["Rijkshuisstijl Community",["README"],"Componenten"]}},status:{statuses:{STABLE:{background:"#088008",color:"#ffffff",description:"Component is stabiel en kan worden gebruikt. Kleine iteraties zullen mogelijk nog plaatsvinden."},UNSTABLE:{background:"#cc0000",color:"#ffffff",description:"Component is nieuw en mogelijk instabiel. Kan gebruikt worden, maar kan nog fouten bevatten."}}},docs:{source:{state:"open"}}}};export{U as default};
