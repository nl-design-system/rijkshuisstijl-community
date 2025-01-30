import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{a as u}from"./index-BgNnmbb9.js";import{m}from"./merge-markdown-CQvfZ6M6.js";import{r as d}from"./action-group-BF58Y5s5.js";import{B as a}from"./index-DKyXVfeP.js";import"./_commonjsHelpers-C932wzq6.js";import"./index-C5EOLjWw.js";u.define();const j={title:"Web Components/Action Group",id:"rhc-action-group-web",component:"rhc-action-group",argTypes:{direction:{description:"Layout of the action group",control:"select",options:["column","row"],table:{defaultValue:{summary:"row"}}}},tags:["autodocs"],parameters:{status:{type:"STABLE"},docs:{description:{component:m([d])}},componentOrigin:"Dit component is overgenomen van de Gemeente Utrecht (daar heeft het de naam ButtonGroup), met styling van de Rijkshuisstijl Community."}},t={args:{children:[n.jsx(a,{appearance:"primary-action-button",children:"Save and continue"},"primary-action-button"),n.jsx(a,{appearance:"secondary-action-button",children:"Back"},"secondary-action-button")],direction:"row"}},o={args:{direction:"column",children:[n.jsx(a,{appearance:"primary-action-button",children:"Save and continue"},"primary-action-button"),n.jsx(a,{appearance:"secondary-action-button",children:"Back"},"secondary-action-button")]},name:"Column"};var e,r,c;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    children: [<Button appearance="primary-action-button" key="primary-action-button">
        Save and continue
      </Button>, <Button appearance="secondary-action-button" key="secondary-action-button">
        Back
      </Button>],
    direction: 'row'
  }
} as StoryObj<typeof meta>`,...(c=(r=t.parameters)==null?void 0:r.docs)==null?void 0:c.source}}};var i,s,p;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    direction: 'column',
    children: [<Button appearance="primary-action-button" key="primary-action-button">
        Save and continue
      </Button>, <Button appearance="secondary-action-button" key="secondary-action-button">
        Back
      </Button>]
  },
  name: 'Column'
} as StoryObj<typeof meta>`,...(p=(s=o.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const k=["Default","Column"];export{o as Column,t as Default,k as __namedExportsOrder,j as default};
