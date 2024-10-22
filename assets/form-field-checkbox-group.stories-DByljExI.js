import{j as e}from"./jsx-runtime-BlAj40OV.js";import{j as y,d as r}from"./index.esm-B_plQxKZ.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";/* empty css              */import"./index.esm-ByJjFMhT.js";import"./objectWithoutProperties-BJfzkg-c.js";import"./extends-CF3RwP-h.js";const j=`# Rijkshuisstijl Community FormFieldCheckboxGroup component

Deze component is deel van [FormField](https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?node-id=958-1925&node-type=canvas&t=HiNKOQhf1hQtLZrr-0)

## FormFieldCheckboxGroup met [FormFieldCheckbox](/docs/rijkshuisstijl-form-field-checkbox--docs)

## Usage

\`\`\`jsx
import { FormFieldCheckboxGroup, FormFieldCheckbox } from '@rijkshuisstijl-community/components-react';

<FormFieldCheckboxGroup>
  <FormFieldCheckbox label="Checkbox 1" />
  <FormFieldCheckbox label="Checkbox 2" />
  <FormFieldCheckbox label="Checkbox 3" />
</FormFieldCheckboxGroup>;
\`\`\`
`,E={title:"Rijkshuisstijl/Form Field/Form Field Checkbox Group",id:"rhc-form-field-checkbox-group",component:y,argTypes:{label:{description:"The label of the form field",table:{type:{summary:"string"},defaultValue:{summary:'"Select option"'}}},children:{description:"The options of the select",table:{type:{summary:"ReactNode"},defaultValue:{summary:""}}},errorMessage:{description:"Adds an error message",table:{type:{summary:"string"},defaultValue:{summary:""}}},invalid:{description:"Adds an error message",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},description:{description:"The description of the form field",table:{type:{summary:"string"},defaultValue:{summary:""}}},dir:{description:"The direction of the input",table:{type:{summary:"string"},defaultValue:{summary:"auto"}}}},parameters:{docs:{description:{component:j}}}},o={args:{label:"Select option",children:[e.jsx(r,{label:"Checkbox 1"},"1"),e.jsx(r,{label:"Checkbox 2"},"2"),e.jsx(r,{label:"Checkbox 3"},"3")]}},s={args:{label:"Select option",children:[e.jsx(r,{invalid:!0,label:"Checkbox 1"},"1"),e.jsx(r,{invalid:!0,label:"Checkbox 2"},"2"),e.jsx(r,{invalid:!0,label:"Checkbox 3"},"3")],errorMessage:"This is an error message",invalid:!0}},a={args:{...o.args,description:"This is a description"}},i={args:{...o.args,status:"This is a status"}},t={args:{label:"حدد خياراً",description:"هذا هو الوصف",status:"هذه هي رسالة الحالة",children:[e.jsx(r,{label:"خيار 1"},"1"),e.jsx(r,{label:"خيار 2"},"2"),e.jsx(r,{label:"خيار 3"},"3")],dir:"rtl"}};var l,c,n;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    label: 'Select option',
    children: [<FormFieldCheckboxOption key="1" label="Checkbox 1" />, <FormFieldCheckboxOption key="2" label="Checkbox 2" />, <FormFieldCheckboxOption key="3" label="Checkbox 3" />]
  }
}`,...(n=(c=o.parameters)==null?void 0:c.docs)==null?void 0:n.source}}};var m,d,p;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Select option',
    children: [<FormFieldCheckboxOption invalid key="1" label="Checkbox 1" />, <FormFieldCheckboxOption invalid key="2" label="Checkbox 2" />, <FormFieldCheckboxOption invalid key="3" label="Checkbox 3" />],
    errorMessage: 'This is an error message',
    invalid: true
  }
}`,...(p=(d=s.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var b,u,h;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    description: 'This is a description'
  }
}`,...(h=(u=a.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var k,x,F;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    status: 'This is a status'
  }
}`,...(F=(x=i.parameters)==null?void 0:x.docs)==null?void 0:F.source}}};var C,g,f;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: 'حدد خياراً',
    description: 'هذا هو الوصف',
    status: 'هذه هي رسالة الحالة',
    children: [<FormFieldCheckboxOption key="1" label="خيار 1" />, <FormFieldCheckboxOption key="2" label="خيار 2" />, <FormFieldCheckboxOption key="3" label="خيار 3" />],
    dir: 'rtl'
  }
}`,...(f=(g=t.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const L=["Default","Error","Description","Status","RightToLeft"];export{o as Default,a as Description,s as Error,t as RightToLeft,i as Status,L as __namedExportsOrder,E as default};
