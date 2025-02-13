import{t as s,o as p}from"./index-CFcIL8SW.js";import{r as n}from"./index-DAIO8Scy.js";import{m as u}from"./merge-markdown-BtgmYwh_.js";import{r as d}from"./action-group-CPnBsn6C.js";import"./_commonjsHelpers-C932wzq6.js";s.define();p.define();const f={title:"Web Components/Action Group",id:"rhc-action-group-web",component:"rhc-action-group",argTypes:{direction:{description:"Layout of the action group",control:"select",options:["column","row"],table:{defaultValue:{summary:"row"}}}},tags:["autodocs"],parameters:{status:{type:"STABLE"},docs:{description:{component:u([d])}},componentOrigin:"Dit component is overgenomen van de Gemeente Utrecht (daar heeft het de naam ButtonGroup), met styling van de Rijkshuisstijl Community."}},e={args:{children:[n.createElement("rhc-button",{appearance:"primary-action-button",key:"primary-action-button"},"Save and continue"),n.createElement("rhc-button",{appearance:"secondary-action-button",key:"secondary-action-button"},"Back")],direction:"row"}},t={args:{direction:"column",children:[n.createElement("rhc-button",{appearance:"primary-action-button",key:"primary-action-button"},"Save and continue"),n.createElement("rhc-button",{appearance:"secondary-action-button",key:"secondary-action-button"},"Back")]},name:"Column"};var o,a,r;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
} as StoryObj<typeof meta>`,...(r=(a=e.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};var c,i,m;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
} as StoryObj<typeof meta>`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const k=["Default","Column"];export{t as Column,e as Default,k as __namedExportsOrder,f as default};
