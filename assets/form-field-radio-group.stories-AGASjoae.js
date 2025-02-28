import{x as k,f as w}from"./index-BHfBZ300.js";import{r as e}from"./index-raSRI-5R.js";import{m as x}from"./merge-markdown-BBBI8PmH.js";import{r as M}from"./form-field-radio-group-mMY97Vk5.js";import"./_commonjsHelpers-BosuxZz1.js";k.define();w.define();const V=({label:S,description:T,errormessage:j,status:D,invalid:i,dir:R,...F})=>e.createElement("rhc-form-radio-group",{label:S,description:T,errormessage:j,status:D,dir:R,invalid:i==null?void 0:i.toString(),...F}),C={title:"Web Components/Form Field/Form Field Radio Group",id:"rhc-form-field-radio-group-web",component:V,argTypes:{label:{description:"The label of the form field",table:{type:{summary:"string"},defaultValue:{summary:'"Select option"'}}},children:{description:"The options of the select",table:{type:{summary:"ReactNode"},defaultValue:{summary:""}}},errorMessage:{description:"Adds an error message",table:{type:{summary:"string"},defaultValue:{summary:""}}},invalid:{description:"Adds an error message",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},description:{description:"The description of the form field",table:{type:{summary:"string"},defaultValue:{summary:""}}},dir:{description:"The direction of the input",table:{type:{summary:"string"},defaultValue:{summary:"auto"}}}},args:{dir:"",description:"",errorMessage:""},parameters:{status:{type:"UNSTABLE"},docs:{description:{component:x([M])}},figma:"https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?node-id=958-1925&node-type=canvas&t=HiNKOQhf1hQtLZrr-0",componentOrigin:"Dit component is volledig ontwikkeld door de Rijkshuisstijl Community."}},r={args:{label:"Select option",children:[e.createElement("rhc-form-radio",{label:"Option 1",name:"radio-demo",value:"option1"}),e.createElement("rhc-form-radio",{label:"Option 2",name:"radio-demo",value:"option2"}),e.createElement("rhc-form-radio",{label:"Option 3",name:"radio-demo",value:"option3"})]}},a={args:{label:"Select option",children:[e.createElement("rhc-form-radio",{label:"Option 1",name:"radio-demo",value:"option1",invalid:"true"}),e.createElement("rhc-form-radio",{label:"Option 2",name:"radio-demo",value:"option2",invalid:"true"}),e.createElement("rhc-form-radio",{label:"Option 3",name:"radio-demo",value:"option3",invalid:"true"})],errorMessage:"This is an error message",invalid:!0}},o={args:{...r.args,description:"This is a description"}},t={args:{...r.args,status:"This is a status"}},n={args:{label:"حدد خياراً",description:"هذا هو الوصف",status:"هذه هي رسالة الحالة",children:[e.createElement("rhc-form-radio",{label:"خيار 1",name:"radio-demo",value:"option1"}),e.createElement("rhc-form-radio",{label:"خيار 2",name:"radio-demo",value:"option2"}),e.createElement("rhc-form-radio",{label:"خيار 3",name:"radio-demo",value:"option3"})]}};var s,m,l;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
} as StoryObj<typeof meta>`,...(h=(f=o.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var b,g,y;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    status: 'This is a status'
  }
} as StoryObj<typeof meta>`,...(y=(g=t.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var v,E,O;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
} as StoryObj<typeof meta>`,...(O=(E=n.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};const Q=["Default","Error","Description","Status","RightToLeft"];export{r as Default,o as Description,a as Error,n as RightToLeft,t as Status,Q as __namedExportsOrder,C as default};
