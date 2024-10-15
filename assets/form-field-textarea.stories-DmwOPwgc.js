import{j as oe}from"./jsx-runtime-BlAj40OV.js";import{l as c}from"./index.esm-CuQfi3pY.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";/* empty css              */import"./index.esm-DuPKkrPI.js";import"./objectWithoutProperties-BJfzkg-c.js";import"./extends-CF3RwP-h.js";const le=`# Rijkshuisstijl Community FormFieldTextarea component

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
`,ve={title:"Rijkshuisstijl/Form Field/Form Field Textarea",id:"rhc-form-field-textarea",component:c,argTypes:{required:{description:"Required",control:"boolean",table:{category:"API",defaultValue:{summary:"false"}}},disabled:{description:"Disabled",control:"boolean",table:{category:"API",defaultValue:{summary:"false"}}},readOnly:{description:"Read-only",control:"boolean",table:{category:"API",defaultValue:{summary:"false"}}},invalid:{description:"Invalid",control:"boolean",table:{category:"API",defaultValue:{summary:"false"}}},name:{description:"Name",control:"text",table:{category:"API",defaultValue:{summary:""}}},defaultValue:{description:"Value",control:"text",table:{category:"API",defaultValue:{summary:""}}},value:{description:"Value",control:"text",table:{category:"API",defaultValue:{summary:""}}},placeholder:{description:"Placeholder",control:"text",table:{category:"API",defaultValue:{summary:""}}},label:{name:"label",type:{name:"string",required:!0},table:{defaultValue:{summary:""},category:"API"}},errorMessage:{name:"errorMessage",description:"Description for invalid input",type:{name:"string",required:!1},table:{defaultValue:{summary:""},category:"API"}},description:{description:"Description",type:{name:"string",required:!1},table:{category:"API",defaultValue:{summary:""}}},minLength:{description:"Set the minimum length of the input text",control:"number",table:{category:"API",defaultValue:{summary:void 0}}},maxLength:{description:"Set the maximum length of the input text",control:"number",table:{category:"API",defaultValue:{summary:void 0}}},cols:{description:"Set the number of visible columns in a text area",control:"number",table:{category:"API",defaultValue:{summary:void 0}}},rows:{description:"Set the number of visible text lines for the control",control:"number",table:{category:"API",defaultValue:{summary:void 0}}},dir:{description:"Text direction",control:{type:"select"},options:{"":void 0,auto:"auto",ltr:"ltr",rtl:"rtl"},table:{category:"DOM",defaultValue:{summary:""}}}},args:{required:!1,disabled:!1,readOnly:!1,invalid:!1,name:"",defaultValue:"",value:"",placeholder:"",label:"",errorMessage:"",description:"",minLength:void 0,maxLength:void 0,dir:void 0,cols:void 0,rows:void 0},render:_=>{const{required:N,disabled:U,readOnly:z,id:G,invalid:J,name:K,defaultValue:Q,value:W,placeholder:X,label:Y,errorMessage:Z,description:$,minLength:ee,maxLength:re,dir:ae,status:te,cols:ne,rows:se}=_;return oe.jsx(c,{cols:ne||void 0,defaultValue:Q||void 0,description:$||void 0,dir:ae||void 0,disabled:U||void 0,errorMessage:Z||void 0,id:G||void 0,invalid:J||void 0,label:Y||void 0,maxLength:re||void 0,minLength:ee||void 0,name:K||void 0,placeholder:X||void 0,readOnly:z||void 0,required:N||void 0,rows:se||void 0,status:te||void 0,value:W||void 0})},tags:["autodocs"],parameters:{docs:{description:{component:le}}}},e={args:{name:"subject",label:"Onderwerp"}},r={args:{name:"subject",label:"Onderwerp",description:"Beschrijving van het onderwerp"}},a={args:{name:"subject",label:"Onderwerp",errorMessage:"Onderwerp is verplicht",invalid:!0}},t={args:{name:"subject",label:"Onderwerp",defaultValue:"Hello world!",maxLength:50,status:"12 van de 50 tekens ingevuld"}},n={args:{name:"subject",label:"Onderwerp",placeholder:"Onderwerp"}},s={args:{name:"subject",label:"Onderwerp",value:"Onderwerp"}},o={args:{name:"subject",label:"الموضوع",dir:"rtl"}},l={args:{name:"subject",label:"Onderwerp",readOnly:!0,placeholder:"Read Only"}},d={args:{name:"subject",label:"Onderwerp",disabled:!0}},i={args:{name:"subject",label:"Onderwerp",required:!0}};var u,m,p;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    label: 'Onderwerp'
  }
}`,...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var b,g,v;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    label: 'Onderwerp',
    description: 'Beschrijving van het onderwerp'
  }
}`,...(v=(g=r.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var y,f,h;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    label: 'Onderwerp',
    errorMessage: 'Onderwerp is verplicht',
    invalid: true
  }
}`,...(h=(f=a.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var O,j,w;t.parameters={...t.parameters,docs:{...(O=t.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    label: 'Onderwerp',
    defaultValue: 'Hello world!',
    maxLength: 50,
    status: '12 van de 50 tekens ingevuld'
  }
}`,...(w=(j=t.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var x,V,P;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    label: 'Onderwerp',
    placeholder: 'Onderwerp'
  }
}`,...(P=(V=n.parameters)==null?void 0:V.docs)==null?void 0:P.source}}};var I,S,A;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    label: 'Onderwerp',
    value: 'Onderwerp'
  }
}`,...(A=(S=s.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};var q,F,L;o.parameters={...o.parameters,docs:{...(q=o.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    label: 'الموضوع',
    dir: 'rtl'
  }
}`,...(L=(F=o.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var R,D,M;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    label: 'Onderwerp',
    readOnly: true,
    placeholder: 'Read Only'
  }
}`,...(M=(D=l.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var T,k,E;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    label: 'Onderwerp',
    disabled: true
  }
}`,...(E=(k=d.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var C,B,H;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    label: 'Onderwerp',
    required: true
  }
}`,...(H=(B=i.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};const ye=["Default","Description","ErrorMessage","Status","Placeholder","Value","RightToLeft","ReadOnly","Disabled","Required"];export{e as Default,r as Description,d as Disabled,a as ErrorMessage,n as Placeholder,l as ReadOnly,i as Required,o as RightToLeft,t as Status,s as Value,ye as __namedExportsOrder,ve as default};
