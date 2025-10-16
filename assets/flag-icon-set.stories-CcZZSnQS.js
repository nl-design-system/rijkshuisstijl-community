import{m as d}from"./mergeMarkdown-wst0O_Fj.js";import{j as o}from"./iframe-DlkZjL_t.js";/* empty css              */import{i as c}from"./icon-set-CzQduSDw.js";import{H as l}from"./Heading-D-UzQO6X.js";import{I as u,r as g}from"./Icon-CAF2NLzh.js";import"./preload-helper-Dp1pzeXC.js";import"./index-2d5bd_11.js";import"./IconCheck-CeKhN69x.js";g(c);function a(){const i=new Intl.DisplayNames(["nl"],{type:"region"}),m=Object.keys(c).sort((e,p)=>e.localeCompare(p));return o.jsx("div",{className:"rhc-icon-set",children:m.map(e=>o.jsxs("div",{className:"rhc-icon-set-item",children:[o.jsx(l,{appearanceLevel:5,level:1,children:i.of(e.substring(0,2).toUpperCase())}),o.jsx(u,{icon:e}),o.jsx("span",{children:e})]},e))})}a.__docgenInfo={description:"",methods:[],displayName:"IconSet"};const f=`# Rijkshuisstijl Community Flag Icon Set

Onderstaande iconen komen uit een losse icon set van de Rijkshuisstijl Commmunity. Voor gebruik moet deze set eerst geregistreerd worden. Zie ook de storybook pagina over de [Icon component](?path=/docs/rhc-icon--docs) en de [Standaard Icon set](?path=/docs/rhc-templates-default-icon-set--docs)

## Usage

\`\`\`tsx
import { Icon, flagIconSet as iconSet, registerIconSet } from '@rijkshuisstijl-community/components-react';

registerIconSet(iconSet);

<Icon icon="nl-flag" />;
\`\`\`
`,N={title:"Icon Sets/Flag Icon Set",id:"rhc-templates-flag-icon-set",component:a,parameters:{docs:{description:{component:d([f])}},status:{type:"UNSTABLE"}}},t={};var n,s,r;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(r=(s=t.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};const b=["Default"];export{t as Default,b as __namedExportsOrder,N as default};
