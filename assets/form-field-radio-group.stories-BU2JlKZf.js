import{j as e}from"./iframe-Cp3JE31R.js";import{m as R}from"./mergeMarkdown-D-HVsqGJ.js";import{r as x}from"./form-field-radio-group-Xot207P0.js";import{F as O}from"./FormFieldRadioGroup-Xcdx4M3H.js";import{F as a}from"./FormFieldRadio-DD1oTsbm.js";import"./preload-helper-Dp1pzeXC.js";import"./FormField-C0jBlpoj.js";import"./index-CXtHJWLY.js";const L={title:"Form Field/Form Field Radio Group",id:"rhc-form-field-radio-group",component:O,argTypes:{label:{description:"The label of the form field",table:{type:{summary:"string"},defaultValue:{summary:'"Select option"'}}},children:{description:"The options of the select",table:{type:{summary:"ReactNode"},defaultValue:{summary:""}}},errorMessage:{description:"Adds an error message",table:{type:{summary:"string"},defaultValue:{summary:""}}},invalid:{description:"Adds an error message",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},description:{description:"The description of the form field",table:{type:{summary:"string"},defaultValue:{summary:""}}},dir:{description:"The direction of the input",table:{type:{summary:"string"},defaultValue:{summary:"auto"}}}},parameters:{status:{type:"UNSTABLE"},docs:{description:{component:R([x])}},figma:"https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?node-id=958-1925&node-type=canvas&t=HiNKOQhf1hQtLZrr-0",componentOrigin:"Dit component is volledig ontwikkeld door de Rijkshuisstijl Community.",github:"https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/FormFieldRadioGroup.tsx"}},o={args:{label:"Select option",children:e.jsxs(e.Fragment,{children:[e.jsx(a,{label:"Option 1",name:"radio-demo",value:"option1"}),e.jsx(a,{label:"Option 2",name:"radio-demo",value:"option2"}),e.jsx(a,{label:"Option 3",name:"radio-demo",value:"option3"})]})}},r={args:{label:"Select option",children:e.jsxs(e.Fragment,{children:[e.jsx(a,{inputInvalid:!0,label:"Option 1",name:"radio-demo",value:"option1"}),e.jsx(a,{inputInvalid:!0,label:"Option 2",name:"radio-demo",value:"option2"}),e.jsx(a,{inputInvalid:!0,label:"Option 3",name:"radio-demo",value:"option3"})]}),errorMessage:"This is an error message",invalid:!0}},i={args:{...o.args,description:"This is a description"}},t={args:{...o.args,status:"This is a status"}},s={args:{label:"حدد خياراً",description:"هذا هو الوصف",status:e.jsx("span",{children:"هذه هي رسالة الحالة"}),children:e.jsxs(e.Fragment,{children:[e.jsx(a,{label:"خيار 1",name:"radio-demo",value:"option1"}),e.jsx(a,{label:"خيار 2",name:"radio-demo",value:"option2"}),e.jsx(a,{label:"خيار 3",name:"radio-demo",value:"option3"})]})}};var n,l,d;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    label: 'Select option',
    children: <>
        <FormFieldRadio label="Option 1" name="radio-demo" value="option1" />
        <FormFieldRadio label="Option 2" name="radio-demo" value="option2" />
        <FormFieldRadio label="Option 3" name="radio-demo" value="option3" />
      </>
  }
}`,...(d=(l=o.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var m,p,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Select option',
    children: <>
        <FormFieldRadio inputInvalid label="Option 1" name="radio-demo" value="option1" />
        <FormFieldRadio inputInvalid label="Option 2" name="radio-demo" value="option2" />
        <FormFieldRadio inputInvalid label="Option 3" name="radio-demo" value="option3" />
      </>,
    errorMessage: 'This is an error message',
    invalid: true
  }
}`,...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var c,g,b;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    description: 'This is a description'
  }
}`,...(b=(g=i.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var h,F,f;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    status: 'This is a status'
  }
}`,...(f=(F=t.parameters)==null?void 0:F.docs)==null?void 0:f.source}}};var v,y,j;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(j=(y=s.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};const M=["Default","Invalid","Description","Status","RightToLeft"];export{o as Default,i as Description,r as Invalid,s as RightToLeft,t as Status,M as __namedExportsOrder,L as default};
