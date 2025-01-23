import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{V as d,I as l}from"./index.esm-BN3CyjH_.js";import{i}from"./icon-set-CEqqac1X.js";import{P as u}from"./index-HknPImGV.js";/* empty css              */import{H as g}from"./index-BfH1V66g.js";import{m as h}from"./merge-markdown-CQvfZ6M6.js";/* empty css              */import"./clsx-B-dksMZM.js";import"./index-C5EOLjWw.js";import"./_commonjsHelpers-C932wzq6.js";import"./index-DKyXVfeP.js";import"./index-CgpWq_u8.js";d(i);function c(){const a=new Intl.DisplayNames(["nl"],{type:"region"}),m=Object.keys(i).sort((e,p)=>e.localeCompare(p));return o.jsx(u,{children:o.jsx("div",{className:"rhc-icon-set",children:m.map(e=>o.jsxs("div",{className:"rhc-icon-set-item",children:[o.jsx(g,{appearance:"utrecht-heading-5",level:1,children:a.of(e.substring(0,2).toUpperCase())}),o.jsx(l,{icon:e}),o.jsx("span",{children:e})]},e))})})}c.__docgenInfo={description:"",methods:[],displayName:"IconSet"};const f=`# Rijkshuisstijl Community Flag Icon Set

Onderstaande iconen komen uit een losse icon set van de Rijkshuisstijl Commmunity. Voor gebruik moet deze set eerst geregistreerd worden. Zie ook de storybook pagina over de [Icon component](?path=/docs/rhc-icon--docs) en de [Standaard Icon set](?path=/docs/rhc-templates-default-icon-set--docs)

## Usage

\`\`\`tsx
import { Icon, registerIconSet } from '@rijkshuisstijl-community/components-react';
import { iconSet } from '@rijkshuisstijl-community/components-react/src/icon-sets/flag-icons/icon-set';

registerIconSet(iconSet);

<Icon icon="nl-flag" />;
\`\`\`
`,O={title:"Icon Sets/Flag Icon Set",id:"rhc-templates-flag-icon-set",component:c,parameters:{docs:{description:{component:h([f])}},status:{type:"UNSTABLE"},isPage:!0}},t={};var s,n,r;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(r=(n=t.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const P=["Default"];export{t as Default,P as __namedExportsOrder,O as default};
