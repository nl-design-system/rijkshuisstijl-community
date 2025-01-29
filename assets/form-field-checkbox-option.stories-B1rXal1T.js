import{c as A}from"./index.esm-CRxS60Q0.js";import{m as D}from"./merge-markdown-CQvfZ6M6.js";/* empty css              */import"./index-BfH1V66g.js";import"./index-C5EOLjWw.js";import"./_commonjsHelpers-C932wzq6.js";import"./jsx-runtime-D_zvdyIk.js";import"./index-DKyXVfeP.js";import"./clsx-B-dksMZM.js";import"./index-CgpWq_u8.js";const P=`<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community FormFieldCheckbox component

## Usage

\`\`\`tsx
import { FormFieldCheckboxOption } from '@rijkshuisstijl-community/components-react';

<FormFieldCheckboxOption label="Checkbox" />;
\`\`\`
`,H={title:"Rijkshuisstijl/Form Field/Form Field Checkbox Option",id:"rhc-form-field-checkbox-option",component:A,argTypes:{label:{description:"The label of the form field",table:{control:"text",type:{summary:"string"},table:{category:"API",defaultValue:{summary:'"Select option"'}}}},description:{control:"text",description:"The description of the form field",table:{category:"API",defaultValue:{summary:""}}},invalid:{control:"boolean",description:"Adds an error message",table:{category:"API",defaultValue:{summary:"false"}}},errorMessage:{control:"text",description:"Adds an error message",table:{category:"API",defaultValue:{summary:""}}},disabled:{control:"boolean",description:"Disabled",table:{category:"API",defaultValue:{summary:"false"}}},name:{control:"text",description:"The name of the form field",table:{category:"API",defaultValue:{summary:"checkbox"}}},value:{control:"boolean",description:"The value of the form field",table:{category:"API",defaultValue:{summary:"checkbox"}}},dir:{description:"The direction of the input",table:{type:{summary:"string"},defaultValue:{summary:"auto"}}}},parameters:{status:{type:"STABLE"},docs:{description:{component:D([P])}},figma:"https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?node-id=1031-2917&node-type=canvas&t=HiNKOQhf1hQtLZrr-0",componentOrigin:"Dit component is overgenomen van de Gemeente Utrecht (daar heet het FormFieldCheckbox), met HTML aanpassingen en styling van de Rijkshuisstijl Community."}},e={args:{label:"Checkbox"}},r={args:{label:"Checkbox",disabled:!0}},s={args:{label:"Checkbox",invalid:!0}},a={args:{label:"Checkbox",invalid:!0,errorMessage:"This is an error message"}},o={args:{label:"Checkbox",description:"This is a description"}},t={args:{label:"Checkbox",description:"This is a description",status:"This is a status message"}},i={args:{label:"مربع الاختيار",description:"هذا هو الوصف",status:"هذه هي رسالة الحالة",dir:"rtl"}};var n,c,l;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    label: 'Checkbox'
  }
}`,...(l=(c=e.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var m,d,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Checkbox',
    disabled: true
  }
}`,...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var u,h,b;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: 'Checkbox',
    invalid: true
  }
}`,...(b=(h=s.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var g,f,x;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(C=(y=o.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var F,T,v;t.parameters={...t.parameters,docs:{...(F=t.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    label: 'Checkbox',
    description: 'This is a description',
    status: 'This is a status message'
  }
}`,...(v=(T=t.parameters)==null?void 0:T.docs)==null?void 0:v.source}}};var I,S,j;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    label: 'مربع الاختيار',
    description: 'هذا هو الوصف',
    status: 'هذه هي رسالة الحالة',
    dir: 'rtl'
  }
}`,...(j=(S=i.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};const N=["Primary","Disabled","Invalid","WithErrorMessage","WithDescription","WithStatus","InputDir"];export{r as Disabled,i as InputDir,s as Invalid,e as Primary,o as WithDescription,a as WithErrorMessage,t as WithStatus,N as __namedExportsOrder,H as default};
