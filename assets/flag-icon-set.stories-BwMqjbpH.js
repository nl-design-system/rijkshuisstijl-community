import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{H as p,I as l,r as u}from"./index.esm-BPdtCe4z.js";import{i as c}from"./icon-set-CEqqac1X.js";import{P as g}from"./index-HknPImGV.js";/* empty css              */import{m as f}from"./merge-markdown-BtgmYwh_.js";import"./index-C5EOLjWw.js";import"./_commonjsHelpers-C932wzq6.js";u(c);function i(){const a=new Intl.DisplayNames(["nl"],{type:"region"}),m=Object.keys(c).sort((e,d)=>e.localeCompare(d));return o.jsx(g,{children:o.jsx("div",{className:"rhc-icon-set",children:m.map(e=>o.jsxs("div",{className:"rhc-icon-set-item",children:[o.jsx(p,{appearanceLevel:5,level:1,children:a.of(e.substring(0,2).toUpperCase())}),o.jsx(l,{icon:e}),o.jsx("span",{children:e})]},e))})})}i.__docgenInfo={description:"",methods:[],displayName:"IconSet"};const h=`# Rijkshuisstijl Community Flag Icon Set

Onderstaande iconen komen uit een losse icon set van de Rijkshuisstijl Commmunity. Voor gebruik moet deze set eerst geregistreerd worden. Zie ook de storybook pagina over de [Icon component](?path=/docs/rhc-icon--docs) en de [Standaard Icon set](?path=/docs/rhc-templates-default-icon-set--docs)

## Usage

\`\`\`tsx
import { Icon, registerIconSet } from '@rijkshuisstijl-community/components-react';
import { iconSet } from '@rijkshuisstijl-community/components-react/src/icon-sets/flag-icons/icon-set';

registerIconSet(iconSet);

<Icon icon="nl-flag" />;
\`\`\`
`,N={title:"Icon Sets/Flag Icon Set",id:"rhc-templates-flag-icon-set",component:i,parameters:{docs:{description:{component:f([h])}},status:{type:"UNSTABLE"},isPage:!0}},t={};var s,n,r;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(r=(n=t.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const b=["Default"];export{t as Default,b as __namedExportsOrder,N as default};
