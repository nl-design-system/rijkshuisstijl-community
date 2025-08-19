import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{q as c,H as p,I as l,r as u}from"./index.esm-B6n1CpzP.js";/* empty css              */import{m as g}from"./merge-markdown-DQEtknEV.js";import"./index-BJzegUt9.js";import"./_commonjsHelpers-D6-XlEtG.js";u(c);function a(){const i=new Intl.DisplayNames(["nl"],{type:"region"}),m=Object.keys(c).sort((e,d)=>e.localeCompare(d));return o.jsx("div",{className:"rhc-icon-set",children:m.map(e=>o.jsxs("div",{className:"rhc-icon-set-item",children:[o.jsx(p,{appearanceLevel:5,level:1,children:i.of(e.substring(0,2).toUpperCase())}),o.jsx(l,{icon:e}),o.jsx("span",{children:e})]},e))})}a.__docgenInfo={description:"",methods:[],displayName:"IconSet"};const h=`# Rijkshuisstijl Community Flag Icon Set

Onderstaande iconen komen uit een losse icon set van de Rijkshuisstijl Commmunity. Voor gebruik moet deze set eerst geregistreerd worden. Zie ook de storybook pagina over de [Icon component](?path=/docs/rhc-icon--docs) en de [Standaard Icon set](?path=/docs/rhc-templates-default-icon-set--docs)

## Usage

\`\`\`tsx
import { Icon, flagIconSet as iconSet, registerIconSet } from '@rijkshuisstijl-community/components-react';

registerIconSet(iconSet);

<Icon icon="nl-flag" />;
\`\`\`
`,x={title:"Rijkshuisstijl Community/Icon Sets/Flag Icon Set",id:"rhc-templates-flag-icon-set",component:a,parameters:{docs:{description:{component:g([h])}},status:{type:"UNSTABLE"}}},t={};var n,s,r;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(r=(s=t.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};const v=["Default"];export{t as Default,v as __namedExportsOrder,x as default};
