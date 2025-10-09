import{j as n}from"./iframe-DjDDBvOj.js";import{u as b}from"./action-group-CMdY362B.js";import{r as y,m as g}from"./merge-markdown-BK17y5gr.js";import{p as h,n as t}from"./index-gh1d-vat.js";import"./Button-D8lFC10e.js";import"./preload-helper-Dp1pzeXC.js";import"./Icon-D7yLIZTh.js";import"./IconCheck-CmixPAhC.js";const k=`<!-- @license CC0-1.0 -->

# Button group

De _button group_ is een container voor een aantal buttons, of voor een losstaande button.

## Terminologie

- **button**: van het \`<button>\` HTML element, \`role="button"\` in ARIA.
- **group**: van \`role="group"\` in ARIA.

## Verticale variant

Voor smalle schermen bij plaatsing in smalle panelen (zoals een sidebar) is er een variant waar buttons onder elkaar staan, in plaats van naast elkaar. Gebruik deze variant niet wanneer er voldoende ruimte is voor de standaard variant. Je kunt bijvoorbeeld CSS media queries gebruiken om deze variant toe te passen voor kleine schermen.
`,G={title:"Action Group",id:"rhc-action-group",component:h,argTypes:{direction:{description:"Layout of the action group",control:"select",options:["column","row","column-stretch"]}},tags:["autodocs"],parameters:{status:{type:"STABLE"},docs:{description:{component:y(g([k,b]),!0).replace("Button Group","Action Group").replace("Button group","Action group").replace("button group","action group")}},nldesignsystem:"https://www.nldesignsystem.nl/action-group/",github:"https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/ActionGroup.tsx",figma:"https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?node-id=4626-10492&p=f&t=MHYw4lXBHCryrwek-0",componentOrigin:"Dit component is overgenomen van de Gemeente Utrecht (daar heeft het de naam ButtonGroup), met styling van de Rijkshuisstijl Community."}},e={args:{children:[n.jsx(t,{appearance:"primary-action-button",children:"Save and continue"},"primary-action-button"),n.jsx(t,{appearance:"secondary-action-button",children:"Back"},"secondary-action-button")]}},o={args:{direction:"column",children:[n.jsx(t,{appearance:"primary-action-button",children:"Save and continue"},"primary-action-button"),n.jsx(t,{appearance:"secondary-action-button",children:"Back"},"secondary-action-button")]}},a={args:{direction:"column-stretch",children:[n.jsx(t,{appearance:"primary-action-button",children:"Save and continue"},"primary-action-button"),n.jsx(t,{appearance:"secondary-action-button",children:"Back"},"secondary-action-button")]}};var r,c,i;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    children: [<Button appearance="primary-action-button" key="primary-action-button">
        Save and continue
      </Button>, <Button appearance="secondary-action-button" key="secondary-action-button">
        Back
      </Button>]
  }
}`,...(i=(c=e.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var s,u,p;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    direction: 'column',
    children: [<Button appearance="primary-action-button" key="primary-action-button">
        Save and continue
      </Button>, <Button appearance="secondary-action-button" key="secondary-action-button">
        Back
      </Button>]
  }
}`,...(p=(u=o.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var m,d,l;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    direction: 'column-stretch',
    children: [<Button appearance="primary-action-button" key="primary-action-button">
        Save and continue
      </Button>, <Button appearance="secondary-action-button" key="secondary-action-button">
        Back
      </Button>]
  }
}`,...(l=(d=a.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const C=["Row","Column","ColumnStretch"];export{o as Column,a as ColumnStretch,e as Row,C as __namedExportsOrder,G as default};
