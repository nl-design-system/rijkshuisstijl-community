import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{f as C,F as r}from"./index.esm-DwD2qEZi.js";import{r as j}from"./form-field-checkbox-group-DgHsiUXv.js";import{m as T}from"./merge-markdown-DQEtknEV.js";import"./index-BJzegUt9.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./clsx-B-dksMZM.js";const E={title:"Rijkshuisstijl/Form Field/Form Field Checkbox Group",id:"rhc-form-field-checkbox-group",component:C,argTypes:{label:{description:"The label of the form field",table:{type:{summary:"string"},defaultValue:{summary:'"Select option"'}}},children:{description:"The options of the select",table:{type:{summary:"ReactNode"},defaultValue:{summary:""}}},errorMessage:{description:"Adds an error message",table:{type:{summary:"string"},defaultValue:{summary:""}}},invalid:{description:"Adds an error message",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},description:{description:"The description of the form field",table:{type:{summary:"string"},defaultValue:{summary:""}}},dir:{description:"The direction of the input",table:{type:{summary:"string"},defaultValue:{summary:"auto"}}}},parameters:{status:{type:"STABLE"},docs:{description:{component:T([j])}},nldesignsystem:"https://nldesignsystem.nl/checkbox-group",figma:"https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?node-id=954-2226&p=f&t=W7gmQ0rB1py9AmaO-0",github:"https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/FormFieldCheckboxGroup.tsx",componentOrigin:"Dit component is volledig ontwikkeld door de Rijkshuisstijl Community."}},s={args:{label:"Select option",children:[e.jsx(r,{label:"Checkbox 1"},"1"),e.jsx(r,{label:"Checkbox 2"},"2"),e.jsx(r,{label:"Checkbox 3"},"3")]}},o={args:{label:"Select option",children:[e.jsx(r,{invalid:!0,label:"Checkbox 1"},"1"),e.jsx(r,{invalid:!0,label:"Checkbox 2"},"2"),e.jsx(r,{invalid:!0,label:"Checkbox 3"},"3")],errorMessage:"This is an error message",invalid:!0}},a={args:{...s.args,description:"This is a description"}},t={args:{...s.args,status:"This is a status"}},i={args:{label:"حدد خياراً",description:"هذا هو الوصف",status:"هذه هي رسالة الحالة",children:[e.jsx(r,{label:"خيار 1"},"1"),e.jsx(r,{label:"خيار 2"},"2"),e.jsx(r,{label:"خيار 3"},"3")],dir:"rtl"}};var l,c,n;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    label: 'Select option',
    children: [<FormFieldCheckboxOption key="1" label="Checkbox 1" />, <FormFieldCheckboxOption key="2" label="Checkbox 2" />, <FormFieldCheckboxOption key="3" label="Checkbox 3" />]
  }
}`,...(n=(c=s.parameters)==null?void 0:c.docs)==null?void 0:n.source}}};var m,d,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Select option',
    children: [<FormFieldCheckboxOption invalid key="1" label="Checkbox 1" />, <FormFieldCheckboxOption invalid key="2" label="Checkbox 2" />, <FormFieldCheckboxOption invalid key="3" label="Checkbox 3" />],
    errorMessage: 'This is an error message',
    invalid: true
  }
}`,...(p=(d=o.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var u,b,h;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    description: 'This is a description'
  }
}`,...(h=(b=a.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var g,k,x;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    status: 'This is a status'
  }
}`,...(x=(k=t.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var y,f,F;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'حدد خياراً',
    description: 'هذا هو الوصف',
    status: 'هذه هي رسالة الحالة',
    children: [<FormFieldCheckboxOption key="1" label="خيار 1" />, <FormFieldCheckboxOption key="2" label="خيار 2" />, <FormFieldCheckboxOption key="3" label="خيار 3" />],
    dir: 'rtl'
  }
}`,...(F=(f=i.parameters)==null?void 0:f.docs)==null?void 0:F.source}}};const G=["Default","Error","Description","Status","RightToLeft"];export{s as Default,a as Description,o as Error,i as RightToLeft,t as Status,G as __namedExportsOrder,E as default};
