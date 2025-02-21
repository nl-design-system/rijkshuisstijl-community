import{j as s}from"./jsx-runtime-CLpGMVip.js";import{$ as k}from"./index.esm-D8C-XkPY.js";import{e as R,u as x,D as O,P as A,C as L,S}from"./index-CNQcb1jB.js";import{r as m}from"./index-DAIO8Scy.js";import{T as h}from"./twig-BFc-qTWi.js";import"./iframe-JeWdJ5ee.js";import"./index-1WZvJYgE.js";import"./_commonjsHelpers-C932wzq6.js";import"./index-YPx4gNoC.js";import"./index-Cu4lwwaE.js";import"./index-Brs1icLk.js";const{useParameter:C,addons:D,useEffect:P,useMemo:ae}=__STORYBOOK_MODULE_PREVIEW_API__,{deprecate:M}=__STORYBOOK_MODULE_CLIENT_LOGGER__;var N=Object.defineProperty,I=(e,n)=>{for(var r in n)N(e,r,{get:n[r],enumerable:!0})},l="themes",q=`storybook/${l}`,B="theme",g={},F={REGISTER_THEMES:`${q}/REGISTER_THEMES`},G={};I(G,{initializeThemeState:()=>y,pluckThemeFromContext:()=>v,useThemeParameters:()=>U});function v({globals:e}){return e[B]||""}function U(e){return M(R`The useThemeParameters function is deprecated. Please access parameters via the context directly instead e.g.
    - const { themeOverride } = context.parameters.themes ?? {};
    `),e?e.parameters[l]??g:C(l,g)}function y(e,n){D.getChannel().emit(F.REGISTER_THEMES,{defaultTheme:n,themes:e})}var H="html",b=e=>e.split(" ").filter(Boolean),$=({themes:e,defaultTheme:n,parentSelector:r=H})=>(y(Object.keys(e),n),(t,i)=>{let{themeOverride:o}=i.parameters[l]??{},a=v(i);return P(()=>{let d=o||a||n,u=document.querySelector(r);if(!u)return;Object.entries(e).filter(([p])=>p!==d).forEach(([p,_])=>{let f=b(_);f.length>0&&u.classList.remove(...f)});let c=b(e[d]);c.length>0&&u.classList.add(...c)},[o,a]),t()});function E(e){var n,r,t="";if(typeof e=="string"||typeof e=="number")t+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(n=0;n<i;n++)e[n]&&(r=E(e[n]))&&(t&&(t+=" "),t+=r)}else for(r in e)e[r]&&(t&&(t+=" "),t+=r);return t}function K(){for(var e,n,r=0,t="",i=arguments.length;r<i;r++)(e=arguments[r])&&(n=E(e))&&(t&&(t+=" "),t+=n);return t}const T=m.forwardRef(({children:e,className:n,...r},t)=>s.jsx("div",{...r,ref:t,className:K("utrecht-page-layout",n),children:e}));T.displayName="PageLayout";function w(e){var n,r,t="";if(typeof e=="string"||typeof e=="number")t+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(n=0;n<i;n++)e[n]&&(r=w(e[n]))&&(t&&(t+=" "),t+=r)}else for(r in e)e[r]&&(t&&(t+=" "),t+=r);return t}function Y(){for(var e,n,r=0,t="",i=arguments.length;r<i;r++)(e=arguments[r])&&(n=w(e))&&(t&&(t+=" "),t+=n);return t}const j=m.forwardRef(({children:e,className:n,Component:r="html",...t},i)=>s.jsx(r,{...t,ref:i,className:Y("utrecht-root",n),children:e}));j.displayName="Root";const z=`<!-- TODO: This is a dummy component created to setup support for nested Twig templates. It needs to be replaced with an official template -->
<li>{{ content }}</li>
`,V=`{#
A custom attributes function.

By default it will return an empty string, but if any attributes are available
they will be used to create the string with attributes.

Why do we need this function? Because we want the Twig templates in our
components to be as clean and Twig-native as possible without dependencies on
methods like those provided by drupal on the Attributes object. See:
https://www.drupal.org/docs/8/theming-drupal-8/using-attributes-in-templates#s-attributesmethods

Parameters:
- attributes
  An arrray with attributes as provided by Drupal.

Returns:
- A string with attributes and their values.
#}
{%- macro parse_attributes(attributes) -%}
  {%- set str = '' -%}
  {%- set boolean_attributes = [
    'allowfullscreen',
    'allowpaymentrequest',
    'async',
    'autofocus',
    'autoplay',
    'checked',
    'controls',
    'default',
    'disabled',
    'formnovalidate',
    'hidden',
    'ismap',
    'itemscope',
    'loop',
    'multiple',
    'muted',
    'nomodule',
    'novalidate',
    'open',
    'playsinline',
    'readonly',
    'required',
    'reversed',
    'selected',
    'truespeed'
  ] -%}
  {# Attributes is optional, so check if it exists. #}
  {%- for key, value in attributes -%}
    {%- if value is iterable -%}
      {%- set unique = [] -%}
      {%- for item in value -%}
        {%- if item not in unique -%}
          {%- set unique = unique|merge([item|trim]) -%}
        {%- endif -%}
      {%- endfor -%}
      {%- set joined = unique|join(' ') -%}
      {%- if joined != '' -%}
        {%- set str = str ~ ' ' ~ key ~ '="' ~ (joined|trim) ~ '"' -%}
      {%- endif -%}
    {%- elseif key in boolean_attributes -%}
      {%- set str = str ~ ' ' ~ key -%}
    {% else %}
      {%- set str = str ~ ' ' ~ key ~ '="' ~ value ~ '"' -%}
    {%- endif -%}
  {%- endfor -%}
  {#- Render the string raw (otherwise quotes will be escaped. -#}
  {{- str|raw -}}
{%- endmacro -%}
`,W=()=>{h.twig({id:"attributes.twig",data:V}),h.twig({id:"OrderedListItem.twig",data:z})};W();const le={decorators:[$({themes:{RijkshuisstijlCommunity:"rhc-theme",DigiD:"digid-theme",MijnOverheid:"mijnoverheid-theme",Logius:"logius-theme",RIVM:"rivm-theme","Uitvoerend - violet":"uitvoerend-violet","Uitvoerend - mintgroen -  ander fontweight - focus":"uitvoerend-mintgroen-focus","Uitvoerend - violet - oud":"uitvoerend-violet-oud"},defaultTheme:"RijkshuisstijlCommunity"}),(e,n)=>n.parameters.isPage?s.jsx(j,{Component:"div",children:s.jsx(T,{children:e()})}):e()],parameters:{previewTabs:{"storybookjs/notes/panel":{title:"Documentation"},"storybook/docs/panel":{title:"API"},canvas:{title:"Design Tokens"}},controls:{expanded:!1},options:{panelPosition:"right",storySort:{order:["Rijkshuisstijl Community",["README"],"Componenten"]}},status:{statuses:{STABLE:{background:"#088008",color:"#ffffff",description:"Component is stabiel en kan worden gebruikt. Kleine iteraties zullen mogelijk nog plaatsvinden."},UNSTABLE:{background:"#cc0000",color:"#ffffff",description:"Component is nieuw en mogelijk instabiel. Kan gebruikt worden, maar kan nog fouten bevatten."}}},docs:{page:()=>{var t,i;const e=(i=(t=x("story"))==null?void 0:t.story)==null?void 0:i.parameters,n={nldesignsystem:"NL Design System",figma:"Figma",github:"GitHub"},r=s.jsx(s.Fragment,{children:["nldesignsystem","figma","github"].filter(o=>e==null?void 0:e[o]).map((o,a)=>s.jsxs(m.Fragment,{children:[a>0&&" | ",s.jsx("a",{href:e[o],children:n[o]})]},o))});return s.jsxs(s.Fragment,{children:[r,(e==null?void 0:e.componentOrigin)&&s.jsx(k,{children:e.componentOrigin}),s.jsx(O,{}),s.jsx(A,{}),s.jsx(L,{}),!(e!=null&&e.isPage)&&s.jsx(S,{})]})},source:{state:"open"}}}};export{le as default};
