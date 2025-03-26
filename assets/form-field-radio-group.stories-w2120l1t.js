import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{g as R,h as a}from"./index.esm-DXdSxwZF.js";import{r as x}from"./form-field-radio-group-mMY97Vk5.js";import{m as O}from"./merge-markdown-566X0PcZ.js";import"./index-F0AouRE7.js";import"./_commonjsHelpers-D6-XlEtG.js";const E={title:"Rijkshuisstijl/Form Field/Form Field Radio Group",id:"rhc-form-field-radio-group",component:R,argTypes:{label:{description:"The label of the form field",table:{type:{summary:"string"},defaultValue:{summary:'"Select option"'}}},children:{description:"The options of the select",table:{type:{summary:"ReactNode"},defaultValue:{summary:""}}},errorMessage:{description:"Adds an error message",table:{type:{summary:"string"},defaultValue:{summary:""}}},invalid:{description:"Adds an error message",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},description:{description:"The description of the form field",table:{type:{summary:"string"},defaultValue:{summary:""}}},dir:{description:"The direction of the input",table:{type:{summary:"string"},defaultValue:{summary:"auto"}}}},parameters:{status:{type:"UNSTABLE"},docs:{description:{component:O([x])}},figma:"https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?node-id=958-1925&node-type=canvas&t=HiNKOQhf1hQtLZrr-0",componentOrigin:"Dit component is volledig ontwikkeld door de Rijkshuisstijl Community."}},o={args:{label:"Select option",children:e.jsxs(e.Fragment,{children:[e.jsx(a,{label:"Option 1",name:"radio-demo",value:"option1"}),e.jsx(a,{label:"Option 2",name:"radio-demo",value:"option2"}),e.jsx(a,{label:"Option 3",name:"radio-demo",value:"option3"})]})}},r={args:{label:"Select option",children:e.jsxs(e.Fragment,{children:[e.jsx(a,{label:"Option 1",name:"radio-demo",value:"option1"}),e.jsx(a,{label:"Option 2",name:"radio-demo",value:"option2"}),e.jsx(a,{label:"Option 3",name:"radio-demo",value:"option3"})]}),errorMessage:"This is an error message",invalid:!0}},i={args:{...o.args,description:"This is a description"}},s={args:{...o.args,status:"This is a status"}},t={args:{label:"حدد خياراً",description:"هذا هو الوصف",status:e.jsx("span",{children:"هذه هي رسالة الحالة"}),children:e.jsxs(e.Fragment,{children:[e.jsx(a,{label:"خيار 1",name:"radio-demo",value:"option1"}),e.jsx(a,{label:"خيار 2",name:"radio-demo",value:"option2"}),e.jsx(a,{label:"خيار 3",name:"radio-demo",value:"option3"})]})}};var l,n,d;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    label: 'Select option',
    children: <>
        <FormFieldRadio label="Option 1" name="radio-demo" value="option1" />
        <FormFieldRadio label="Option 2" name="radio-demo" value="option2" />
        <FormFieldRadio label="Option 3" name="radio-demo" value="option3" />
      </>
  }
}`,...(d=(n=o.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};var m,p,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var c,g,h;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    description: 'This is a description'
  }
}`,...(h=(g=i.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var b,f,F;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    status: 'This is a status'
  }
}`,...(F=(f=s.parameters)==null?void 0:f.docs)==null?void 0:F.source}}};var v,y,j;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(j=(y=t.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};const L=["Default","Error","Description","Status","RightToLeft"];export{o as Default,i as Description,r as Error,t as RightToLeft,s as Status,L as __namedExportsOrder,E as default};
