import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{g as R,h as o}from"./index.esm-BbJ3Y0PZ.js";import{r as x}from"./form-field-radio-group-mMY97Vk5.js";import{m as O}from"./merge-markdown-566X0PcZ.js";import"./index-DeTAkU8q.js";import"./_commonjsHelpers-D6-XlEtG.js";const E={title:"Rijkshuisstijl/Form Field/Form Field Radio Group",id:"rhc-form-field-radio-group",component:R,argTypes:{label:{description:"The label of the form field",table:{type:{summary:"string"},defaultValue:{summary:'"Select option"'}}},children:{description:"The options of the select",table:{type:{summary:"ReactNode"},defaultValue:{summary:""}}},errorMessage:{description:"Adds an error message",table:{type:{summary:"string"},defaultValue:{summary:""}}},invalid:{description:"Adds an error message",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},description:{description:"The description of the form field",table:{type:{summary:"string"},defaultValue:{summary:""}}},dir:{description:"The direction of the input",table:{type:{summary:"string"},defaultValue:{summary:"auto"}}}},parameters:{status:{type:"UNSTABLE"},docs:{description:{component:O([x])}},figma:"https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?node-id=958-1925&node-type=canvas&t=HiNKOQhf1hQtLZrr-0",componentOrigin:"Dit component is volledig ontwikkeld door de Rijkshuisstijl Community.",github:"https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/FormFieldRadioGroup.tsx"}},a={args:{label:"Select option",children:e.jsxs(e.Fragment,{children:[e.jsx(o,{label:"Option 1",name:"radio-demo",value:"option1"}),e.jsx(o,{label:"Option 2",name:"radio-demo",value:"option2"}),e.jsx(o,{label:"Option 3",name:"radio-demo",value:"option3"})]})}},r={args:{label:"Select option",children:e.jsxs(e.Fragment,{children:[e.jsx(o,{label:"Option 1",name:"radio-demo",value:"option1"}),e.jsx(o,{label:"Option 2",name:"radio-demo",value:"option2"}),e.jsx(o,{label:"Option 3",name:"radio-demo",value:"option3"})]}),errorMessage:"This is an error message",invalid:!0}},i={args:{...a.args,description:"This is a description"}},s={args:{...a.args,status:"This is a status"}},t={args:{label:"حدد خياراً",description:"هذا هو الوصف",status:e.jsx("span",{children:"هذه هي رسالة الحالة"}),children:e.jsxs(e.Fragment,{children:[e.jsx(o,{label:"خيار 1",name:"radio-demo",value:"option1"}),e.jsx(o,{label:"خيار 2",name:"radio-demo",value:"option2"}),e.jsx(o,{label:"خيار 3",name:"radio-demo",value:"option3"})]})}};var l,n,d;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    label: 'Select option',
    children: <>
        <FormFieldRadio label="Option 1" name="radio-demo" value="option1" />
        <FormFieldRadio label="Option 2" name="radio-demo" value="option2" />
        <FormFieldRadio label="Option 3" name="radio-demo" value="option3" />
      </>
  }
}`,...(d=(n=a.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};var m,p,c;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(c=(p=r.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var u,g,h;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    description: 'This is a description'
  }
}`,...(h=(g=i.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var b,F,f;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    status: 'This is a status'
  }
}`,...(f=(F=s.parameters)==null?void 0:F.docs)==null?void 0:f.source}}};var y,j,v;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(v=(j=t.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};const G=["Default","Error","Description","Status","RightToLeft"];export{a as Default,i as Description,r as Error,t as RightToLeft,s as Status,G as __namedExportsOrder,E as default};
