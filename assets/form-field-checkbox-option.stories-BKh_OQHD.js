import{e as P}from"./index.esm-BHSYHCTf.js";/* empty css              */import"./index.esm-BO76dSMk.js";import"./objectWithoutProperties-BJfzkg-c.js";import"./index-WI1YhYyJ.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./jsx-runtime-BoFrXSaA.js";const j=`<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community FormFieldCheckbox component

[Figma](https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?node-id=1031-2917&node-type=canvas&t=HiNKOQhf1hQtLZrr-0)

## Usage

\`\`\`tsx
import { FormFieldCheckboxOption } from '@rijkshuisstijl-community/components-react';

<FormFieldCheckboxOption label="Checkbox" />;
\`\`\`
`,w={title:"Rijkshuisstijl/Form Field/Form Field Checkbox Option",id:"rhc-form-field-checkbox-option",component:P,argTypes:{label:{description:"The label of the form field",table:{control:"text",type:{summary:"string"},table:{category:"API",defaultValue:{summary:'"Select option"'}}}},description:{control:"text",description:"The description of the form field",table:{category:"API",defaultValue:{summary:""}}},invalid:{control:"boolean",description:"Adds an error message",table:{category:"API",defaultValue:{summary:"false"}}},errorMessage:{control:"text",description:"Adds an error message",table:{category:"API",defaultValue:{summary:""}}},disabled:{control:"boolean",description:"Disabled",table:{category:"API",defaultValue:{summary:"false"}}},name:{control:"text",description:"The name of the form field",table:{category:"API",defaultValue:{summary:"checkbox"}}},value:{control:"boolean",description:"The value of the form field",table:{category:"API",defaultValue:{summary:"checkbox"}}},dir:{description:"The direction of the input",table:{type:{summary:"string"},defaultValue:{summary:"auto"}}}},parameters:{status:{type:"STABLE"},docs:{description:{component:j}}}},e={args:{label:"Checkbox"}},r={args:{label:"Checkbox",disabled:!0}},s={args:{label:"Checkbox",invalid:!0}},a={args:{label:"Checkbox",invalid:!0,errorMessage:"This is an error message"}},o={args:{label:"Checkbox",description:"This is a description"}},t={args:{label:"Checkbox",description:"This is a description",status:"This is a status message"}},i={args:{label:"مربع الاختيار",description:"هذا هو الوصف",status:"هذه هي رسالة الحالة",dir:"rtl"}};var n,c,l;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    label: 'Checkbox'
  }
}`,...(l=(c=e.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var d,m,p;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'Checkbox',
    disabled: true
  }
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,b,h;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: 'Checkbox',
    invalid: true
  }
}`,...(h=(b=s.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var g,f,x;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Checkbox',
    invalid: true,
    errorMessage: 'This is an error message'
  }
}`,...(x=(f=a.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var k,y,C;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: 'Checkbox',
    description: 'This is a description'
  }
}`,...(C=(y=o.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var F,T,I;t.parameters={...t.parameters,docs:{...(F=t.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    label: 'Checkbox',
    description: 'This is a description',
    status: 'This is a status message'
  }
}`,...(I=(T=t.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};var S,v,A;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: 'مربع الاختيار',
    description: 'هذا هو الوصف',
    status: 'هذه هي رسالة الحالة',
    dir: 'rtl'
  }
}`,...(A=(v=i.parameters)==null?void 0:v.docs)==null?void 0:A.source}}};const L=["Primary","Disabled","Invalid","WithErrorMessage","WithDescription","WithStatus","InputDir"];export{r as Disabled,i as InputDir,s as Invalid,e as Primary,o as WithDescription,a as WithErrorMessage,t as WithStatus,L as __namedExportsOrder,w as default};
