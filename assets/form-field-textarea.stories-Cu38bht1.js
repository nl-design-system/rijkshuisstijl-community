import{j as ce}from"./jsx-runtime-BlAj40OV.js";import{l as c}from"./index.esm-DhWvYNSe.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";/* empty css              */import"./index.esm-DcckL324.js";import"./objectWithoutProperties-BJfzkg-c.js";import"./extends-CF3RwP-h.js";const me=`# Rijkshuisstijl Community FormFieldTextarea component

## Form field met [Textarea](/docs/rijkshuisstijl-textarea--docs)

## Usage

\`\`\`jsx
import { FormFieldTextarea } from '@rijkshuisstijl/community-components';

<FormFieldTextarea
  label="Label"
  placeholder="Placeholder"
  description="Description"
  value="Value"
  onChange={onChange}
  error="Error"
  required
  disabled
  readOnly
  rows={5}
  cols={10}
/>;
\`\`\`
`,je={title:"Rijkshuisstijl/Form Field/Form Field Textarea",id:"rhc-form-field-textarea",component:c,argTypes:{required:{description:"Required",control:"boolean",table:{category:"API",defaultValue:{summary:"false"}}},inputRequired:{description:"Input Required",control:"boolean",table:{category:"API",defaultValue:{summary:"false"}}},disabled:{description:"Disabled",control:"boolean",table:{category:"API",defaultValue:{summary:"false"}}},readOnly:{description:"Read-only",control:"boolean",table:{category:"API",defaultValue:{summary:"false"}}},invalid:{description:"Invalid",control:"boolean",table:{category:"API",defaultValue:{summary:"false"}}},name:{description:"Name",control:"text",table:{category:"API",defaultValue:{summary:""}}},defaultValue:{description:"Value",control:"text",table:{category:"API",defaultValue:{summary:""}}},value:{description:"Value",control:"text",table:{category:"API",defaultValue:{summary:""}}},placeholder:{description:"Placeholder",control:"text",table:{category:"API",defaultValue:{summary:""}}},label:{name:"label",type:{name:"string",required:!0},table:{defaultValue:{summary:""},category:"API"}},errorMessage:{name:"errorMessage",description:"Description for invalid input",type:{name:"string",required:!1},table:{defaultValue:{summary:""},category:"API"}},description:{description:"Description",type:{name:"string",required:!1},table:{category:"API",defaultValue:{summary:""}}},minLength:{description:"Set the minimum length of the input text",control:"number",table:{category:"API",defaultValue:{summary:void 0}}},maxLength:{description:"Set the maximum length of the input text",control:"number",table:{category:"API",defaultValue:{summary:void 0}}},cols:{description:"Set the number of visible columns in a text area",control:"number",table:{category:"API",defaultValue:{summary:void 0}}},rows:{description:"Set the number of visible text lines for the control",control:"number",table:{category:"API",defaultValue:{summary:void 0}}},dir:{description:"Text direction",control:{type:"select"},options:{"":void 0,auto:"auto",ltr:"ltr",rtl:"rtl"},table:{category:"DOM",defaultValue:{summary:""}}}},args:{required:!1,inputRequired:!1,disabled:!1,readOnly:!1,invalid:!1,name:"",defaultValue:"",value:"",placeholder:"",label:"",errorMessage:"",description:"",minLength:void 0,maxLength:void 0,dir:void 0,cols:void 0,rows:void 0},render:G=>{const{required:J,inputRequired:K,disabled:Q,readOnly:W,id:X,invalid:Y,name:Z,defaultValue:$,value:ee,placeholder:re,label:ae,errorMessage:te,description:ne,minLength:se,maxLength:oe,dir:le,status:de,cols:ie,rows:ue}=G;return ce.jsx(c,{cols:ie||void 0,defaultValue:$||void 0,description:ne||void 0,dir:le||void 0,disabled:Q||void 0,errorMessage:te||void 0,id:X||void 0,inputRequired:K||void 0,invalid:Y||void 0,label:ae||void 0,maxLength:oe||void 0,minLength:se||void 0,name:Z||void 0,placeholder:re||void 0,readOnly:W||void 0,required:J||void 0,rows:ue||void 0,status:de||void 0,value:ee||void 0})},tags:["autodocs"],parameters:{docs:{description:{component:me}}}},e={args:{name:"subject",label:"Onderwerp"}},r={args:{name:"subject",label:"Onderwerp",description:"Beschrijving van het onderwerp"}},a={args:{name:"subject",label:"Onderwerp",errorMessage:"Onderwerp is verplicht",invalid:!0}},t={args:{name:"subject",label:"Onderwerp",defaultValue:"Hello world!",maxLength:50,status:"12 van de 50 tekens ingevuld"}},n={args:{name:"subject",label:"Onderwerp",placeholder:"Onderwerp"}},s={args:{name:"subject",label:"Onderwerp",value:"Onderwerp"}},o={args:{name:"subject",label:"الموضوع",dir:"rtl"}},l={args:{name:"subject",label:"Onderwerp",readOnly:!0,placeholder:"Read Only"}},d={args:{name:"subject",label:"Onderwerp",disabled:!0}},i={args:{name:"subject",label:"Onderwerp",required:!0}},u={args:{name:"subject",label:"Onderwerp",inputRequired:!0}};var m,p,b;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    label: 'Onderwerp'
  }
}`,...(b=(p=e.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var g,v,y;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    label: 'Onderwerp',
    description: 'Beschrijving van het onderwerp'
  }
}`,...(y=(v=r.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var f,h,O;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    label: 'Onderwerp',
    errorMessage: 'Onderwerp is verplicht',
    invalid: true
  }
}`,...(O=(h=a.parameters)==null?void 0:h.docs)==null?void 0:O.source}}};var j,w,x;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    label: 'Onderwerp',
    defaultValue: 'Hello world!',
    maxLength: 50,
    status: '12 van de 50 tekens ingevuld'
  }
}`,...(x=(w=t.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var V,q,R;n.parameters={...n.parameters,docs:{...(V=n.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    label: 'Onderwerp',
    placeholder: 'Onderwerp'
  }
}`,...(R=(q=n.parameters)==null?void 0:q.docs)==null?void 0:R.source}}};var I,P,S;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    label: 'Onderwerp',
    value: 'Onderwerp'
  }
}`,...(S=(P=s.parameters)==null?void 0:P.docs)==null?void 0:S.source}}};var A,F,L;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    label: 'الموضوع',
    dir: 'rtl'
  }
}`,...(L=(F=o.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var D,M,T;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    label: 'Onderwerp',
    readOnly: true,
    placeholder: 'Read Only'
  }
}`,...(T=(M=l.parameters)==null?void 0:M.docs)==null?void 0:T.source}}};var k,E,C;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    label: 'Onderwerp',
    disabled: true
  }
}`,...(C=(E=d.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};var B,H,_;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    label: 'Onderwerp',
    required: true
  }
}`,...(_=(H=i.parameters)==null?void 0:H.docs)==null?void 0:_.source}}};var N,U,z;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    label: 'Onderwerp',
    inputRequired: true
  }
}`,...(z=(U=u.parameters)==null?void 0:U.docs)==null?void 0:z.source}}};const we=["Default","Description","ErrorMessage","Status","Placeholder","Value","RightToLeft","ReadOnly","Disabled","Required","InputRequired"];export{e as Default,r as Description,d as Disabled,a as ErrorMessage,u as InputRequired,n as Placeholder,l as ReadOnly,i as Required,o as RightToLeft,t as Status,s as Value,we as __namedExportsOrder,je as default};
