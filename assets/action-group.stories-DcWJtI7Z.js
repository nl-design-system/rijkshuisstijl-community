import{j as a}from"./jsx-runtime-BoFrXSaA.js";import{B as p,d as t}from"./index.esm-BO76dSMk.js";import"./index-WI1YhYyJ.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./objectWithoutProperties-BJfzkg-c.js";const m=`<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community action group component

De action group is een container voor een aantal buttons, of voor een losstaande button.

## Terminologie

- **button**: van het \`<button>\` HTML element, \`role="button"\` in ARIA.
- **group**: van \`role=group\` in ARIA.

## Verticale variant

Voor smalle schermen bij plaatsing in smalle panelen (zoals een sidebar) is er een variant waar buttons onder elkaar staan, in plaats van naast elkaar. Gebruik deze variant niet wanneer er voldoende ruimte is voor de standaard variant. Je kunt bijvoorbeeld CSS media queries gebruiken om deze variant toe te passen voor kleine schermen.
`,B={title:"Rijkshuisstijl/ActionGroup",id:"rhc-action-group",component:p,argTypes:{direction:{description:"Layout of the action group",control:"select",options:["column","row"]}},tags:["autodocs"],parameters:{status:{type:"STABLE"},docs:{description:{component:m}}}},n={args:{children:[a.jsx(t,{appearance:"primary-action-button",children:"Save and continue"}),a.jsx(t,{appearance:"secondary-action-button",children:"Back"})]},name:"Default"},e={args:{direction:"column",children:[a.jsx(t,{appearance:"primary-action-button",children:"Save and continue"}),a.jsx(t,{appearance:"secondary-action-button",children:"Back"})]},name:"Column"};var o,r,i;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    children: [<Button appearance="primary-action-button">Save and continue</Button>, <Button appearance="secondary-action-button">Back</Button>]
  },
  name: 'Default'
}`,...(i=(r=n.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};var s,c,u;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    direction: 'column',
    children: [<Button appearance="primary-action-button">Save and continue</Button>, <Button appearance="secondary-action-button">Back</Button>]
  },
  name: 'Column'
}`,...(u=(c=e.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const h=["Default","Column"];export{e as Column,n as Default,h as __namedExportsOrder,B as default};
