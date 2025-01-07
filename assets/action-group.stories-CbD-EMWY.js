import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{m}from"./merge-markdown-CQvfZ6M6.js";import{B as p,c as a}from"./index-DoNj3aom.js";import"./_commonjsHelpers-C932wzq6.js";import"./index-C5EOLjWw.js";import"./clsx-B-dksMZM.js";const d=`<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community action group component

De action group is een container voor een aantal buttons, of voor een losstaande button.

## Terminologie

- **button**: van het \`<button>\` HTML element, \`role="button"\` in ARIA.
- **group**: van \`role=group\` in ARIA.

## Verticale variant

Voor smalle schermen bij plaatsing in smalle panelen (zoals een sidebar) is er een variant waar buttons onder elkaar staan, in plaats van naast elkaar. Gebruik deze variant niet wanneer er voldoende ruimte is voor de standaard variant. Je kunt bijvoorbeeld CSS media queries gebruiken om deze variant toe te passen voor kleine schermen.
`,k={title:"Rijkshuisstijl/ActionGroup",id:"rhc-action-group",component:p,argTypes:{direction:{description:"Layout of the action group",control:"select",options:["column","row"]}},tags:["autodocs"],parameters:{status:{type:"STABLE"},docs:{description:{component:m([d])}},componentOrigin:"Dit component is overgenomen van de Gemeente Utrecht (daar heeft het de naam ButtonGroup), met styling van de Rijkshuisstijl Community."}},n={args:{children:[t.jsx(a,{appearance:"primary-action-button",children:"Save and continue"},"primary-action-button"),t.jsx(a,{appearance:"secondary-action-button",children:"Back"},"secondary-action-button")]},name:"Default"},e={args:{direction:"column",children:[t.jsx(a,{appearance:"primary-action-button",children:"Save and continue"},"primary-action-button"),t.jsx(a,{appearance:"secondary-action-button",children:"Back"},"secondary-action-button")]},name:"Column"};var o,r,i;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    children: [<Button appearance="primary-action-button" key="primary-action-button">
        Save and continue
      </Button>, <Button appearance="secondary-action-button" key="secondary-action-button">
        Back
      </Button>]
  },
  name: 'Default'
}`,...(i=(r=n.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};var c,s,u;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    direction: 'column',
    children: [<Button appearance="primary-action-button" key="primary-action-button">
        Save and continue
      </Button>, <Button appearance="secondary-action-button" key="secondary-action-button">
        Back
      </Button>]
  },
  name: 'Column'
}`,...(u=(s=e.parameters)==null?void 0:s.docs)==null?void 0:u.source}}};const B=["Default","Column"];export{e as Column,n as Default,B as __namedExportsOrder,k as default};
