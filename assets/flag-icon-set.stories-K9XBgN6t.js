import{j as o}from"./iframe-CQ-PXEy2.js";/* empty css              */import{i as c}from"./icon-set-D50orhjr.js";import{H as d}from"./Heading-BG4sxb5R.js";import{I as l,r as u}from"./Icon-BJhFuiau.js";import{m as g}from"./merge-markdown-B-adGrfz.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CWk9Vdbc.js";import"./IconCheck-DjqN3irr.js";u(c);function a(){const i=new Intl.DisplayNames(["nl"],{type:"region"}),m=Object.keys(c).sort((e,p)=>e.localeCompare(p));return o.jsx("div",{className:"rhc-icon-set",children:m.map(e=>o.jsxs("div",{className:"rhc-icon-set-item",children:[o.jsx(d,{appearanceLevel:5,level:1,children:i.of(e.substring(0,2).toUpperCase())}),o.jsx(l,{icon:e}),o.jsx("span",{children:e})]},e))})}a.__docgenInfo={description:"",methods:[],displayName:"IconSet"};const f=`# Rijkshuisstijl Community Flag Icon Set

Onderstaande iconen komen uit een losse icon set van de Rijkshuisstijl Commmunity. Voor gebruik moet deze set eerst geregistreerd worden. Zie ook de storybook pagina over de [Icon component](?path=/docs/rhc-icon--docs) en de [Standaard Icon set](?path=/docs/rhc-templates-default-icon-set--docs)

## Usage

\`\`\`tsx
import { Icon, flagIconSet as iconSet, registerIconSet } from '@rijkshuisstijl-community/components-react';

registerIconSet(iconSet);

<Icon icon="nl-flag" />;
\`\`\`
`,N={title:"Icon Sets/Flag Icon Set",id:"rhc-templates-flag-icon-set",component:a,parameters:{docs:{description:{component:g([f])}},status:{type:"UNSTABLE"}}},t={};var n,s,r;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(r=(s=t.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};const b=["Default"];export{t as Default,b as __namedExportsOrder,N as default};
