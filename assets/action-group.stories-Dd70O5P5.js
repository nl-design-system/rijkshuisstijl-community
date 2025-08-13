import{p as m,_ as p}from"./index-gpJdpThM.js";import{r as n}from"./index-BJzegUt9.js";import{m as u}from"./merge-markdown-566X0PcZ.js";import{r as d}from"./action-group-M1KgbNZZ.js";import"./_commonjsHelpers-D6-XlEtG.js";m.define();p.define();const k={title:"Web Components/Action Group",id:"rhc-action-group-web",component:"rhc-action-group",argTypes:{direction:{description:"Layout of the action group",control:"select",options:["column","row"],table:{defaultValue:{summary:"row"}}}},tags:["autodocs"],parameters:{status:{type:"STABLE"},docs:{description:{component:u([d])}},componentOrigin:"Dit component is overgenomen van de Gemeente Utrecht (daar heeft het de naam ButtonGroup), met styling van de Rijkshuisstijl Community.",github:"https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/web-components/src/components/ActionGroup.tsx"}},t={args:{children:[n.createElement("rhc-button",{appearance:"primary-action-button",key:"primary-action-button"},"Save and continue"),n.createElement("rhc-button",{appearance:"secondary-action-button",key:"secondary-action-button"},"Back")],direction:"row"}},e={args:{direction:"column",children:[n.createElement("rhc-button",{appearance:"primary-action-button",key:"primary-action-button"},"Save and continue"),n.createElement("rhc-button",{appearance:"secondary-action-button",key:"secondary-action-button"},"Back")]},name:"Column"};var o,a,r;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
} as StoryObj<typeof meta>`,...(r=(a=t.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};var c,i,s;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
} as StoryObj<typeof meta>`,...(s=(i=e.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const f=["Default","Column"];export{e as Column,t as Default,f as __namedExportsOrder,k as default};
