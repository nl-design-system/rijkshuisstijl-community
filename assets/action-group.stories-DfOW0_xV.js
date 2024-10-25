import{j as a}from"./jsx-runtime-BlAj40OV.js";import{B as p,j as o}from"./index.esm-DcckL324.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./objectWithoutProperties-BJfzkg-c.js";import"./extends-CF3RwP-h.js";const m=`<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community action group component

De action group is een container voor een aantal buttons, of voor een losstaande button.

## Terminologie

- **button**: van het \`<button>\` HTML element, \`role="button"\` in ARIA.
- **group**: van \`role=group\` in ARIA.

## Verticale variant

Voor smalle schermen bij plaatsing in smalle panelen (zoals een sidebar) is er een variant waar buttons onder elkaar staan, in plaats van naast elkaar. Gebruik deze variant niet wanneer er voldoende ruimte is voor de standaard variant. Je kunt bijvoorbeeld CSS media queries gebruiken om deze variant toe te passen voor kleine schermen.
`,B={title:"Rijkshuisstijl/ActionGroup",id:"rhc-action-group",component:p,argTypes:{direction:{description:"Layout of the action group",control:"select",options:["column","row"]}},tags:["autodocs"],parameters:{docs:{description:{component:m}}}},n={args:{children:[a.jsx(o,{appearance:"primary-action-button",children:"Save and continue"}),a.jsx(o,{appearance:"secondary-action-button",children:"Back"})]},name:"Default"},e={args:{direction:"column",children:[a.jsx(o,{appearance:"primary-action-button",children:"Save and continue"}),a.jsx(o,{appearance:"secondary-action-button",children:"Back"})]},name:"Column"};var t,r,i;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    children: [<Button appearance="primary-action-button">Save and continue</Button>, <Button appearance="secondary-action-button">Back</Button>]
  },
  name: 'Default'
}`,...(i=(r=n.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};var c,s,u;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    direction: 'column',
    children: [<Button appearance="primary-action-button">Save and continue</Button>, <Button appearance="secondary-action-button">Back</Button>]
  },
  name: 'Column'
}`,...(u=(s=e.parameters)==null?void 0:s.docs)==null?void 0:u.source}}};const j=["Default","Column"];export{e as Column,n as Default,j as __namedExportsOrder,B as default};
