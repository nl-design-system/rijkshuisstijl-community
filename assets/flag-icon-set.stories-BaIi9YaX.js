import{j as o}from"./jsx-runtime-D_zvdyIk.js";/* empty css              */import{i as c}from"./icon-set-CEqqac1X.js";import{H as d}from"./Heading-CljAu67s.js";import{I as l,r as u}from"./Icon-DaUz-GJB.js";import{m as g}from"./merge-markdown-DQEtknEV.js";import"./objectWithoutProperties-CbCxjZzm.js";import"./clsx-B-dksMZM.js";import"./index-BJzegUt9.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./index-DlGjRi2o.js";import"./IconCheck-BO4gZjWf.js";u(c);function i(){const a=new Intl.DisplayNames(["nl"],{type:"region"}),m=Object.keys(c).sort((e,p)=>e.localeCompare(p));return o.jsx("div",{className:"rhc-icon-set",children:m.map(e=>o.jsxs("div",{className:"rhc-icon-set-item",children:[o.jsx(d,{appearanceLevel:5,level:1,children:a.of(e.substring(0,2).toUpperCase())}),o.jsx(l,{icon:e}),o.jsx("span",{children:e})]},e))})}i.__docgenInfo={description:"",methods:[],displayName:"IconSet"};const f=`# Rijkshuisstijl Community Flag Icon Set

Onderstaande iconen komen uit een losse icon set van de Rijkshuisstijl Commmunity. Voor gebruik moet deze set eerst geregistreerd worden. Zie ook de storybook pagina over de [Icon component](?path=/docs/rhc-icon--docs) en de [Standaard Icon set](?path=/docs/rhc-templates-default-icon-set--docs)

## Usage

\`\`\`tsx
import { Icon, flagIconSet as iconSet, registerIconSet } from '@rijkshuisstijl-community/components-react';

registerIconSet(iconSet);

<Icon icon="nl-flag" />;
\`\`\`
`,w={title:"Icon Sets/Flag Icon Set",id:"rhc-templates-flag-icon-set",component:i,parameters:{docs:{description:{component:g([f])}},status:{type:"UNSTABLE"}}},t={};var n,s,r;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(r=(s=t.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};const E=["Default"];export{t as Default,E as __namedExportsOrder,w as default};
