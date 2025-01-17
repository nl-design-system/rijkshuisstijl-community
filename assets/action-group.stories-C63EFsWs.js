import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{m as p}from"./merge-markdown-CQvfZ6M6.js";import{B as m,c as e}from"./index-DoNj3aom.js";import"./_commonjsHelpers-C932wzq6.js";import"./index-C5EOLjWw.js";import"./clsx-B-dksMZM.js";const d=`<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community action group component

De action group is een container voor een aantal buttons, of voor een losstaande button.

## Terminologie

- **button**: van het \`<button>\` HTML element, \`role="button"\` in ARIA.
- **group**: van \`role=group\` in ARIA.

## Verticale variant

Voor smalle schermen bij plaatsing in smalle panelen (zoals een sidebar) is er een variant waar buttons onder elkaar staan, in plaats van naast elkaar. Gebruik deze variant niet wanneer er voldoende ruimte is voor de standaard variant. Je kunt bijvoorbeeld CSS media queries gebruiken om deze variant toe te passen voor kleine schermen.

## Usage

\`\`\`tsx
import { ActionGroup } from '@rijkshuisstijl-community/components-react';

<ActionGroup direction="row">
  <Button appearance="primary-action-button" key="primary-action-button">
    Save and continue
  </Button>
  <Button appearance="secondary-action-button" key="secondary-action-button">
    Back
  </Button>
</ActionGroup>;
\`\`\`
`,B={title:"Rijkshuisstijl/ActionGroup",id:"rhc-action-group",component:m,argTypes:{direction:{description:"Layout of the action group",control:"select",options:["column","row"]}},tags:["autodocs"],parameters:{status:{type:"STABLE"},docs:{description:{component:p([d])}},nldesignsystem:"https://www.nldesignsystem.nl/action-group/",github:"https://github.com/nl-design-system/rijkshuisstijl-community/issues/479",figma:"https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?node-id=4626-10492&p=f&t=MHYw4lXBHCryrwek-0",componentOrigin:"Dit component is overgenomen van de Gemeente Utrecht (daar heeft het de naam ButtonGroup), met styling van de Rijkshuisstijl Community."}},n={args:{children:[o.jsx(e,{appearance:"primary-action-button",children:"Save and continue"},"primary-action-button"),o.jsx(e,{appearance:"secondary-action-button",children:"Back"},"secondary-action-button")]}},t={args:{direction:"column",children:[o.jsx(e,{appearance:"primary-action-button",children:"Save and continue"},"primary-action-button"),o.jsx(e,{appearance:"secondary-action-button",children:"Back"},"secondary-action-button")]},name:"Column"};var a,r,i;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    children: [<Button appearance="primary-action-button" key="primary-action-button">
        Save and continue
      </Button>, <Button appearance="secondary-action-button" key="secondary-action-button">
        Back
      </Button>]
  }
}`,...(i=(r=n.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};var s,c,u;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    direction: 'column',
    children: [<Button appearance="primary-action-button" key="primary-action-button">
        Save and continue
      </Button>, <Button appearance="secondary-action-button" key="secondary-action-button">
        Back
      </Button>]
  },
  name: 'Column'
}`,...(u=(c=t.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const v=["Row","Column"];export{t as Column,n as Row,v as __namedExportsOrder,B as default};
