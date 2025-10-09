import{d as O,b as D}from"./index-VTlHfQi9.js";import{r as e}from"./iframe-DjDDBvOj.js";import{m as w}from"./merge-markdown-BK17y5gr.js";import{r as R}from"./form-field-checkbox-group-DgHsiUXv.js";import"./preload-helper-Dp1pzeXC.js";O.define();D.define();const V=({label:C,description:S,errormessage:T,status:v,invalid:a,dir:j,...F})=>e.createElement("rhc-form-checkbox-group",{label:C,description:S,errormessage:T,status:v,dir:j,invalid:a==null?void 0:a.toString(),...F}),B={title:"Form Field/Form Field Checkbox Group",id:"rhc-form-field-checkbox-group-web",component:V,argTypes:{label:{description:"The label of the form field",table:{type:{summary:"string"},defaultValue:{summary:'"Select option"'}}},children:{description:"The options of the select",table:{type:{summary:"ReactNode"},defaultValue:{summary:""}}},errorMessage:{description:"Adds an error message",table:{type:{summary:"string"},defaultValue:{summary:""}}},invalid:{description:"Adds an error message",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},description:{description:"The description of the form field",table:{type:{summary:"string"},defaultValue:{summary:""}}},dir:{description:"The direction of the input",table:{type:{summary:"string"},defaultValue:{summary:"auto"}}}},parameters:{status:{type:"STABLE"},docs:{description:{component:w([R])}},figma:"(https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?node-id=958-1925&node-type=canvas&t=HiNKOQhf1hQtLZrr-0",componentOrigin:"Dit component is volledig ontwikkeld door de Rijkshuisstijl Community.",github:"https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/web-components/src/components/FormFieldCheckboxGroup.tsx"}},o={args:{label:"Select option",children:[e.createElement("rhc-form-checkbox-option",{key:"checkbox-1",label:"Checkbox 1"}),e.createElement("rhc-form-checkbox-option",{key:"checkbox-2",label:"Checkbox 2"}),e.createElement("rhc-form-checkbox-option",{key:"checkbox-3",label:"Checkbox 2"})]}},r={args:{label:"Select option",children:[e.createElement("rhc-form-checkbox-option",{key:"checkbox-4",label:"Checkbox 1",invalid:"true"}),e.createElement("rhc-form-checkbox-option",{key:"checkbox-5",label:"Checkbox 2",invalid:"true"}),e.createElement("rhc-form-checkbox-option",{key:"checkbox-6",label:"Checkbox 2",invalid:"true"})],errorMessage:"This is an error message",invalid:!0}},c={args:{...o.args,children:[e.createElement("rhc-form-checkbox-option",{key:"checkbox-7",label:"Checkbox 1"}),e.createElement("rhc-form-checkbox-option",{key:"checkbox-8",label:"Checkbox 2"}),e.createElement("rhc-form-checkbox-option",{key:"checkbox-9",label:"Checkbox 2"})],description:"This is a description"}},t={args:{...o.args,children:[e.createElement("rhc-form-checkbox-option",{key:"checkbox-10",label:"Checkbox 1"}),e.createElement("rhc-form-checkbox-option",{key:"checkbox-11",label:"Checkbox 2"}),e.createElement("rhc-form-checkbox-option",{key:"checkbox-12",label:"Checkbox 2"})],status:"This is a status"}},n={args:{label:"حدد خياراً",description:"هذا هو الوصف",status:"هذه هي رسالة الحالة",children:[e.createElement("rhc-form-checkbox-option",{key:"checkbox-13",label:"خيار 1",invalid:!0}),e.createElement("rhc-form-checkbox-option",{key:"checkbox-14",label:"خيار 2",invalid:!0}),e.createElement("rhc-form-checkbox-option",{key:"checkbox-15",label:"خيار 3",invalid:!0})],dir:"rtl"}};var s,l,i;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    label: 'Select option',
    children: [createElement('rhc-form-checkbox-option', {
      key: 'checkbox-1',
      label: 'Checkbox 1'
    }), createElement('rhc-form-checkbox-option', {
      key: 'checkbox-2',
      label: 'Checkbox 2'
    }), createElement('rhc-form-checkbox-option', {
      key: 'checkbox-3',
      label: 'Checkbox 2'
    })]
  }
} as StoryObj<typeof meta>`,...(i=(l=o.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var h,m,b;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: 'Select option',
    children: [createElement('rhc-form-checkbox-option', {
      key: 'checkbox-4',
      label: 'Checkbox 1',
      invalid: 'true'
    }), createElement('rhc-form-checkbox-option', {
      key: 'checkbox-5',
      label: 'Checkbox 2',
      invalid: 'true'
    }), createElement('rhc-form-checkbox-option', {
      key: 'checkbox-6',
      label: 'Checkbox 2',
      invalid: 'true'
    })],
    errorMessage: 'This is an error message',
    invalid: true
  }
} as StoryObj<typeof meta>`,...(b=(m=r.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var k,p,d;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    children: [createElement('rhc-form-checkbox-option', {
      key: 'checkbox-7',
      label: 'Checkbox 1'
    }), createElement('rhc-form-checkbox-option', {
      key: 'checkbox-8',
      label: 'Checkbox 2'
    }), createElement('rhc-form-checkbox-option', {
      key: 'checkbox-9',
      label: 'Checkbox 2'
    })],
    description: 'This is a description'
  }
} as StoryObj<typeof meta>`,...(d=(p=c.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var x,u,f;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    children: [createElement('rhc-form-checkbox-option', {
      key: 'checkbox-10',
      label: 'Checkbox 1'
    }), createElement('rhc-form-checkbox-option', {
      key: 'checkbox-11',
      label: 'Checkbox 2'
    }), createElement('rhc-form-checkbox-option', {
      key: 'checkbox-12',
      label: 'Checkbox 2'
    })],
    status: 'This is a status'
  }
} as StoryObj<typeof meta>`,...(f=(u=t.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var y,g,E;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'حدد خياراً',
    description: 'هذا هو الوصف',
    status: 'هذه هي رسالة الحالة',
    children: [createElement('rhc-form-checkbox-option', {
      key: 'checkbox-13',
      label: 'خيار 1',
      invalid: true
    }), createElement('rhc-form-checkbox-option', {
      key: 'checkbox-14',
      label: 'خيار 2',
      invalid: true
    }), createElement('rhc-form-checkbox-option', {
      key: 'checkbox-15',
      label: 'خيار 3',
      invalid: true
    })],
    dir: 'rtl'
  }
} as StoryObj<typeof meta>`,...(E=(g=n.parameters)==null?void 0:g.docs)==null?void 0:E.source}}};const Q=["Default","Error","Description","Status","RightToLeft"];export{o as Default,c as Description,r as Error,n as RightToLeft,t as Status,Q as __namedExportsOrder,B as default};
