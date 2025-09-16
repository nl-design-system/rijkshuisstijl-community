import{s as W}from"./index-DAAqoOwd.js";import{r as w}from"./index-BJzegUt9.js";import{m as E}from"./merge-markdown-DQEtknEV.js";import{r as L}from"./form-field-checkbox-option-BguDDN50.js";import"./_commonjsHelpers-D6-XlEtG.js";W.define();const G=({label:D,description:P,invalid:n,errorMessage:M,disabled:c,...V})=>w.createElement("rhc-form-checkbox-option",{label:D,description:P,invalid:n==null?void 0:n.toString(),disabled:c==null?void 0:c.toString(),errorMessage:M,...V}),_={title:"Form Field/Form Field Checkbox Option",id:"rhc-form-field-checkbox-option-web",component:G,argTypes:{label:{description:"The label of the form field",table:{control:"text",type:{summary:"string"},table:{category:"API",defaultValue:{summary:'"Select option"'}}}},description:{control:"text",description:"The description of the form field",table:{category:"API",defaultValue:{summary:""}}},invalid:{control:"boolean",description:"Adds an error message",table:{category:"API",defaultValue:{summary:"false"}}},errorMessage:{control:"text",description:"Adds an error message",table:{category:"API",defaultValue:{summary:""}}},disabled:{control:"boolean",description:"Disabled",table:{category:"API",defaultValue:{summary:"false"}}},name:{control:"text",description:"The name of the form field",table:{category:"API",defaultValue:{summary:"checkbox"}}},value:{control:"boolean",description:"The value of the form field",table:{category:"API",defaultValue:{summary:"checkbox"}}},dir:{description:"The direction of the input",table:{type:{summary:"string"},defaultValue:{summary:"auto"}}}},parameters:{status:{type:"STABLE"},docs:{description:{component:E([L])}},figma:"https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?node-id=1031-2917&node-type=canvas&t=HiNKOQhf1hQtLZrr-0",componentOrigin:"Dit component is overgenomen van de Gemeente Utrecht (daar heet het FormFieldCheckbox), met HTML aanpassingen en styling van de Rijkshuisstijl Community.",github:"https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/web-components/src/components/FormFieldCheckboxOption.tsx"}},e={args:{label:"Checkbox"}},r={args:{label:"Checkbox",disabled:!0}},a={args:{label:"Checkbox",invalid:!0}},t={args:{label:"Checkbox",invalid:!0,errorMessage:"This is an error message"}},s={args:{label:"Checkbox",description:"This is a description"}},o={args:{label:"Checkbox",description:"This is a description",status:"This is a status message"}},i={args:{label:"مربع الاختيار",description:"هذا هو الوصف",status:"هذه هي رسالة الحالة",dir:"rtl"}};var m,l,p;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Checkbox'
  }
} as StoryObj<typeof meta>`,...(p=(l=e.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var d,u,b;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'Checkbox',
    disabled: true
  }
} as StoryObj<typeof meta>`,...(b=(u=r.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var h,g,f;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: 'Checkbox',
    invalid: true
  }
} as StoryObj<typeof meta>`,...(f=(g=a.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var y,x,k;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'Checkbox',
    invalid: true,
    errorMessage: 'This is an error message'
  }
} as StoryObj<typeof meta>`,...(k=(x=t.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var S,C,T;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: 'Checkbox',
    description: 'This is a description'
  }
} as StoryObj<typeof meta>`,...(T=(C=s.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var j,O,I;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: 'Checkbox',
    description: 'This is a description',
    status: 'This is a status message'
  }
} as StoryObj<typeof meta>`,...(I=(O=o.parameters)==null?void 0:O.docs)==null?void 0:I.source}}};var F,v,A;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    label: 'مربع الاختيار',
    description: 'هذا هو الوصف',
    status: 'هذه هي رسالة الحالة',
    dir: 'rtl'
  }
} as StoryObj<typeof meta>`,...(A=(v=i.parameters)==null?void 0:v.docs)==null?void 0:A.source}}};const K=["Primary","Disabled","Invalid","WithErrorMessage","WithDescription","WithStatus","InputDir"];export{r as Disabled,i as InputDir,a as Invalid,e as Primary,s as WithDescription,t as WithErrorMessage,o as WithStatus,K as __namedExportsOrder,_ as default};
