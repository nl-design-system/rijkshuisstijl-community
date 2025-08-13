import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{w as p,x as o}from"./index.esm-DDxOyvNx.js";import{r as m}from"./action-group-M1KgbNZZ.js";import{m as d,r as l}from"./merge-markdown-566X0PcZ.js";import"./index-BJzegUt9.js";import"./_commonjsHelpers-D6-XlEtG.js";const b=`<!-- @license CC0-1.0 -->

# Button group

De _button group_ is een container voor een aantal buttons, of voor een losstaande button.

## Terminologie

- **button**: van het \`<button>\` HTML element, \`role="button"\` in ARIA.
- **group**: van \`role="group"\` in ARIA.

## Verticale variant

Voor smalle schermen bij plaatsing in smalle panelen (zoals een sidebar) is er een variant waar buttons onder elkaar staan, in plaats van naast elkaar. Gebruik deze variant niet wanneer er voldoende ruimte is voor de standaard variant. Je kunt bijvoorbeeld CSS media queries gebruiken om deze variant toe te passen voor kleine schermen.
`,j={title:"Rijkshuisstijl/ActionGroup",id:"rhc-action-group",component:p,argTypes:{direction:{description:"Layout of the action group",control:"select",options:["column","row"]}},tags:["autodocs"],parameters:{status:{type:"STABLE"},docs:{description:{component:d([l(b,"Button Group","Action Group"),m])}},nldesignsystem:"https://www.nldesignsystem.nl/action-group/",github:"https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/ActionGroup.tsx",figma:"https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?node-id=4626-10492&p=f&t=MHYw4lXBHCryrwek-0",componentOrigin:"Dit component is overgenomen van de Gemeente Utrecht (daar heeft het de naam ButtonGroup), met styling van de Rijkshuisstijl Community."}},n={args:{children:[e.jsx(o,{appearance:"primary-action-button",children:"Save and continue"},"primary-action-button"),e.jsx(o,{appearance:"secondary-action-button",children:"Back"},"secondary-action-button")]}},t={args:{direction:"column",children:[e.jsx(o,{appearance:"primary-action-button",children:"Save and continue"},"primary-action-button"),e.jsx(o,{appearance:"secondary-action-button",children:"Back"},"secondary-action-button")]},name:"Column"};var a,r,i;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(u=(c=t.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const w=["Row","Column"];export{t as Column,n as Row,w as __namedExportsOrder,j as default};
