import{g as D,s as w}from"./index-VTlHfQi9.js";import{r as e}from"./iframe-CLJWzYSL.js";import{m as M}from"./merge-markdown-D8Eslh9D.js";import{r as V}from"./form-field-radio-group-Xot207P0.js";import"./preload-helper-Dp1pzeXC.js";D.define();w.define();const x=({label:S,description:T,errormessage:j,status:F,invalid:i,dir:R,...k})=>e.createElement("rhc-form-radio-group",{label:S,description:T,errormessage:j,status:F,dir:R,invalid:i==null?void 0:i.toString(),...k}),Q={title:"Form Field/Form Field Radio Group",id:"rhc-form-field-radio-group-web",component:x,argTypes:{label:{description:"The label of the form field",table:{type:{summary:"string"},defaultValue:{summary:'"Select option"'}}},children:{description:"The options of the select",table:{type:{summary:"ReactNode"},defaultValue:{summary:""}}},errorMessage:{description:"Adds an error message",table:{type:{summary:"string"},defaultValue:{summary:""}}},invalid:{description:"Adds an error message",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},description:{description:"The description of the form field",table:{type:{summary:"string"},defaultValue:{summary:""}}},dir:{description:"The direction of the input",table:{type:{summary:"string"},defaultValue:{summary:"auto"}}}},args:{dir:"",description:"",errorMessage:""},parameters:{status:{type:"UNSTABLE"},docs:{description:{component:M([V])}},figma:"https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?node-id=958-1925&node-type=canvas&t=HiNKOQhf1hQtLZrr-0",componentOrigin:"Dit component is volledig ontwikkeld door de Rijkshuisstijl Community.",github:"https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/web-components/src/components/FormFieldRadioGroup.tsx"}},r={args:{label:"Select option",children:[e.createElement("rhc-form-radio",{label:"Option 1",name:"radio-demo",value:"option1"}),e.createElement("rhc-form-radio",{label:"Option 2",name:"radio-demo",value:"option2"}),e.createElement("rhc-form-radio",{label:"Option 3",name:"radio-demo",value:"option3"})]}},a={args:{label:"Select option",children:[e.createElement("rhc-form-radio",{label:"Option 1",name:"radio-demo",value:"option1",invalid:"true"}),e.createElement("rhc-form-radio",{label:"Option 2",name:"radio-demo",value:"option2",invalid:"true"}),e.createElement("rhc-form-radio",{label:"Option 3",name:"radio-demo",value:"option3",invalid:"true"})],errorMessage:"This is an error message",invalid:!0}},o={args:{...r.args,description:"This is a description"}},t={args:{...r.args,status:"This is a status"}},n={args:{label:"حدد خياراً",description:"هذا هو الوصف",status:"هذه هي رسالة الحالة",children:[e.createElement("rhc-form-radio",{label:"خيار 1",name:"radio-demo",value:"option1"}),e.createElement("rhc-form-radio",{label:"خيار 2",name:"radio-demo",value:"option2"}),e.createElement("rhc-form-radio",{label:"خيار 3",name:"radio-demo",value:"option3"})]}};var s,m,l;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    label: 'Select option',
    children: [createElement('rhc-form-radio', {
      label: 'Option 1',
      name: 'radio-demo',
      value: 'option1'
    }), createElement('rhc-form-radio', {
      label: 'Option 2',
      name: 'radio-demo',
      value: 'option2'
    }), createElement('rhc-form-radio', {
      label: 'Option 3',
      name: 'radio-demo',
      value: 'option3'
    })]
  }
} as StoryObj<typeof meta>`,...(l=(m=r.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var d,c,p;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'Select option',
    children: [createElement('rhc-form-radio', {
      label: 'Option 1',
      name: 'radio-demo',
      value: 'option1',
      invalid: 'true'
    }), createElement('rhc-form-radio', {
      label: 'Option 2',
      name: 'radio-demo',
      value: 'option2',
      invalid: 'true'
    }), createElement('rhc-form-radio', {
      label: 'Option 3',
      name: 'radio-demo',
      value: 'option3',
      invalid: 'true'
    })],
    errorMessage: 'This is an error message',
    invalid: true
  }
} as StoryObj<typeof meta>`,...(p=(c=a.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var u,f,h;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    description: 'This is a description'
  }
} as StoryObj<typeof meta>`,...(h=(f=o.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var g,b,y;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    status: 'This is a status'
  }
} as StoryObj<typeof meta>`,...(y=(b=t.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var v,E,O;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: 'حدد خياراً',
    description: 'هذا هو الوصف',
    status: 'هذه هي رسالة الحالة',
    children: [createElement('rhc-form-radio', {
      label: 'خيار 1',
      name: 'radio-demo',
      value: 'option1'
    }), createElement('rhc-form-radio', {
      label: 'خيار 2',
      name: 'radio-demo',
      value: 'option2'
    }), createElement('rhc-form-radio', {
      label: 'خيار 3',
      name: 'radio-demo',
      value: 'option3'
    })]
  }
} as StoryObj<typeof meta>`,...(O=(E=n.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};const _=["Default","Error","Description","Status","RightToLeft"];export{r as Default,o as Description,a as Error,n as RightToLeft,t as Status,_ as __namedExportsOrder,Q as default};
