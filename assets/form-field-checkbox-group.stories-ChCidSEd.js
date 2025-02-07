import{j as e}from"./jsx-runtime-CLpGMVip.js";import{j as y,d as o}from"./index.esm-Da36BAWm.js";import{m as j}from"./merge-markdown-BtgmYwh_.js";/* empty css              */import"./index-DqXW3Q7L.js";import"./objectWithoutProperties-CbCxjZzm.js";import"./index-DAIO8Scy.js";import"./_commonjsHelpers-C932wzq6.js";import"./index-Be-aV6DI.js";import"./clsx-B-dksMZM.js";import"./index-D5-rbeG3.js";const O=`# Rijkshuisstijl Community FormFieldCheckboxGroup component

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
`,N={title:"Rijkshuisstijl/Form Field/Form Field Checkbox Group",id:"rhc-form-field-checkbox-group",component:y,argTypes:{label:{description:"The label of the form field",table:{type:{summary:"string"},defaultValue:{summary:'"Select option"'}}},children:{description:"The options of the select",table:{type:{summary:"ReactNode"},defaultValue:{summary:""}}},errorMessage:{description:"Adds an error message",table:{type:{summary:"string"},defaultValue:{summary:""}}},invalid:{description:"Adds an error message",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},description:{description:"The description of the form field",table:{type:{summary:"string"},defaultValue:{summary:""}}},dir:{description:"The direction of the input",table:{type:{summary:"string"},defaultValue:{summary:"auto"}}}},parameters:{status:{type:"STABLE"},docs:{description:{component:j([O])}},figma:"(https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?node-id=958-1925&node-type=canvas&t=HiNKOQhf1hQtLZrr-0",componentOrigin:"Dit component is volledig ontwikkeld door de Rijkshuisstijl Community."}},r={args:{label:"Select option",children:[e.jsx(o,{label:"Checkbox 1"},"1"),e.jsx(o,{label:"Checkbox 2"},"2"),e.jsx(o,{label:"Checkbox 3"},"3")]}},s={args:{label:"Select option",children:[e.jsx(o,{invalid:!0,label:"Checkbox 1"},"1"),e.jsx(o,{invalid:!0,label:"Checkbox 2"},"2"),e.jsx(o,{invalid:!0,label:"Checkbox 3"},"3")],errorMessage:"This is an error message",invalid:!0}},i={args:{...r.args,description:"This is a description"}},t={args:{...r.args,status:"This is a status"}},a={args:{label:"حدد خياراً",description:"هذا هو الوصف",status:"هذه هي رسالة الحالة",children:[e.jsx(o,{label:"خيار 1"},"1"),e.jsx(o,{label:"خيار 2"},"2"),e.jsx(o,{label:"خيار 3"},"3")],dir:"rtl"}};var l,n,c;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    label: 'Select option',
    children: [<FormFieldCheckboxOption key="1" label="Checkbox 1" />, <FormFieldCheckboxOption key="2" label="Checkbox 2" />, <FormFieldCheckboxOption key="3" label="Checkbox 3" />]
  }
}`,...(c=(n=r.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var m,d,p;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Select option',
    children: [<FormFieldCheckboxOption invalid key="1" label="Checkbox 1" />, <FormFieldCheckboxOption invalid key="2" label="Checkbox 2" />, <FormFieldCheckboxOption invalid key="3" label="Checkbox 3" />],
    errorMessage: 'This is an error message',
    invalid: true
  }
}`,...(p=(d=s.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var u,h,b;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    description: 'This is a description'
  }
}`,...(b=(h=i.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var k,x,F;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    status: 'This is a status'
  }
}`,...(F=(x=t.parameters)==null?void 0:x.docs)==null?void 0:F.source}}};var g,C,f;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'حدد خياراً',
    description: 'هذا هو الوصف',
    status: 'هذه هي رسالة الحالة',
    children: [<FormFieldCheckboxOption key="1" label="خيار 1" />, <FormFieldCheckboxOption key="2" label="خيار 2" />, <FormFieldCheckboxOption key="3" label="خيار 3" />],
    dir: 'rtl'
  }
}`,...(f=(C=a.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};const Q=["Default","Error","Description","Status","RightToLeft"];export{r as Default,i as Description,s as Error,a as RightToLeft,t as Status,Q as __namedExportsOrder,N as default};
