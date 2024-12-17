import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{o as y,F as o}from"./index.esm-CJKTT4hK.js";/* empty css              */import"./index-BclNPbce.js";import"./objectWithoutProperties-BJfzkg-c.js";import"./index-DuZrfDUH.js";import"./_commonjsHelpers-CqkleIqs.js";import"./clsx-B-dksMZM.js";import"./index-j0aIpYJF.js";import"./index-BlU3qzUC.js";const x=`<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community FormFieldRadioGroup component

Deze component is deel van [FormField](https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?node-id=958-1925&node-type=canvas&t=HiNKOQhf1hQtLZrr-0)

## FormFieldRadioGroup met [FormFieldRadio](/docs/rijkhuisstijl-form-field-radio--docs)

# Usage

\`\`\`jsx
import { FormFieldRadioGroup, FormFieldRadio } from '@rijkshuisstijl-community/components-react';

<FormFieldRadioGroup>
  <FormFieldRadio name="radio-group-name" label="Radio 1" />
  <FormFieldRadio name="radio-group-name" label="Radio 2" />
  <FormFieldRadio name="radio-group-name" label="Radio 3" />
</FormFieldRadioGroup>;
\`\`\`

Om ervoor te zorgen dat er maar een van de radio options wordt geselecteerd, moet de name property in elke radio option dezelfde waarde worden geven.
`,M={title:"Rijkshuisstijl/Form Field/Form Field Radio Group",id:"rhc-form-field-radio-group",component:y,argTypes:{label:{description:"The label of the form field",table:{type:{summary:"string"},defaultValue:{summary:'"Select option"'}}},children:{description:"The options of the select",table:{type:{summary:"ReactNode"},defaultValue:{summary:""}}},errorMessage:{description:"Adds an error message",table:{type:{summary:"string"},defaultValue:{summary:""}}},invalid:{description:"Adds an error message",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},description:{description:"The description of the form field",table:{type:{summary:"string"},defaultValue:{summary:""}}},dir:{description:"The direction of the input",table:{type:{summary:"string"},defaultValue:{summary:"auto"}}}},parameters:{status:{type:"UNSTABLE"},docs:{description:{component:x}}}},a={args:{label:"Select option",children:e.jsxs(e.Fragment,{children:[e.jsx(o,{label:"Option 1",name:"radio-demo",value:"option1"}),e.jsx(o,{label:"Option 2",name:"radio-demo",value:"option2"}),e.jsx(o,{label:"Option 3",name:"radio-demo",value:"option3"})]})}},r={args:{label:"Select option",children:e.jsxs(e.Fragment,{children:[e.jsx(o,{label:"Option 1",name:"radio-demo",value:"option1"}),e.jsx(o,{label:"Option 2",name:"radio-demo",value:"option2"}),e.jsx(o,{label:"Option 3",name:"radio-demo",value:"option3"})]}),errorMessage:"This is an error message",invalid:!0}},i={args:{...a.args,description:"This is a description"}},s={args:{...a.args,status:"This is a status"}},t={args:{label:"حدد خياراً",description:"هذا هو الوصف",status:e.jsx("span",{children:"هذه هي رسالة الحالة"}),children:e.jsxs(e.Fragment,{children:[e.jsx(o,{label:"خيار 1",name:"radio-demo",value:"option1"}),e.jsx(o,{label:"خيار 2",name:"radio-demo",value:"option2"}),e.jsx(o,{label:"خيار 3",name:"radio-demo",value:"option3"})]})}};var n,d,l;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    label: 'Select option',
    children: <>
        <FormFieldRadio label="Option 1" name="radio-demo" value="option1" />
        <FormFieldRadio label="Option 2" name="radio-demo" value="option2" />
        <FormFieldRadio label="Option 3" name="radio-demo" value="option3" />
      </>
  }
}`,...(l=(d=a.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var m,p,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Select option',
    children: <>
        <FormFieldRadio label="Option 1" name="radio-demo" value="option1" />
        <FormFieldRadio label="Option 2" name="radio-demo" value="option2" />
        <FormFieldRadio label="Option 3" name="radio-demo" value="option3" />
      </>,
    errorMessage: 'This is an error message',
    invalid: true
  }
}`,...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var c,F,g;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    description: 'This is a description'
  }
}`,...(g=(F=i.parameters)==null?void 0:F.docs)==null?void 0:g.source}}};var b,h,f;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    status: 'This is a status'
  }
}`,...(f=(h=s.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var R,j,v;t.parameters={...t.parameters,docs:{...(R=t.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    label: 'حدد خياراً',
    description: 'هذا هو الوصف',
    status: <span>هذه هي رسالة الحالة</span>,
    children: <>
        <FormFieldRadio label="خيار 1" name="radio-demo" value="option1" />
        <FormFieldRadio label="خيار 2" name="radio-demo" value="option2" />
        <FormFieldRadio label="خيار 3" name="radio-demo" value="option3" />
      </>
  }
}`,...(v=(j=t.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};const N=["Default","Error","Description","Status","RightToLeft"];export{a as Default,i as Description,r as Error,t as RightToLeft,s as Status,N as __namedExportsOrder,M as default};
