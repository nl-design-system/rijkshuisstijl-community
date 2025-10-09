import{e as y,i as b}from"./index-VTlHfQi9.js";import{r as t}from"./iframe-DjDDBvOj.js";import{m as h,r as g}from"./merge-markdown-BK17y5gr.js";import{u as a}from"./action-group-CMdY362B.js";import"./preload-helper-Dp1pzeXC.js";y.define();b.define();const B={title:"Action Group",id:"rhc-action-group-web",component:"rhc-action-group",argTypes:{direction:{description:"Layout of the action group",control:"select",options:["column","row"],table:{defaultValue:{summary:"row"}}}},tags:["autodocs"],parameters:{status:{type:"STABLE"},docs:{description:{component:h([g(a,"Button Group","Action Group",!0).replace("Button Group","Action Group"),a])}},nldesignsystem:"https://www.nldesignsystem.nl/action-group/",github:"https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/ActionGroup.tsx",figma:"https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?node-id=4626-10492&p=f&t=MHYw4lXBHCryrwek-0",componentOrigin:"Dit component is overgenomen van de Gemeente Utrecht (daar heeft het de naam ButtonGroup), met styling van de Rijkshuisstijl Community."}},n={args:{children:[t.createElement("rhc-button",{appearance:"primary-action-button",key:"primary-action-button"},"Save and continue"),t.createElement("rhc-button",{appearance:"secondary-action-button",key:"secondary-action-button"},"Back")],direction:"row"}},e={args:{direction:"column",children:[t.createElement("rhc-button",{appearance:"primary-action-button",key:"primary-action-button"},"Save and continue"),t.createElement("rhc-button",{appearance:"secondary-action-button",key:"secondary-action-button"},"Back")]},name:"Column"},o={args:{direction:"column-stretch",children:[t.createElement("rhc-button",{appearance:"primary-action-button",key:"primary-action-button"},"Save and continue"),t.createElement("rhc-button",{appearance:"secondary-action-button",key:"secondary-action-button"},"Back")]},name:"Column"};var r,c,i;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    children: [createElement('rhc-button', {
      appearance: 'primary-action-button',
      key: 'primary-action-button'
    }, 'Save and continue'), createElement('rhc-button', {
      appearance: 'secondary-action-button',
      key: 'secondary-action-button'
    }, 'Back')],
    direction: 'row'
  }
} as StoryObj<typeof meta>`,...(i=(c=n.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var s,u,m;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    direction: 'column',
    children: [createElement('rhc-button', {
      appearance: 'primary-action-button',
      key: 'primary-action-button'
    }, 'Save and continue'), createElement('rhc-button', {
      appearance: 'secondary-action-button',
      key: 'secondary-action-button'
    }, 'Back')]
  },
  name: 'Column'
} as StoryObj<typeof meta>`,...(m=(u=e.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var p,d,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    direction: 'column-stretch',
    children: [createElement('rhc-button', {
      appearance: 'primary-action-button',
      key: 'primary-action-button'
    }, 'Save and continue'), createElement('rhc-button', {
      appearance: 'secondary-action-button',
      key: 'secondary-action-button'
    }, 'Back')]
  },
  name: 'Column'
} as StoryObj<typeof meta>`,...(l=(d=o.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const C=["Row","Column","ColumnStretch"];export{e as Column,o as ColumnStretch,n as Row,C as __namedExportsOrder,B as default};
