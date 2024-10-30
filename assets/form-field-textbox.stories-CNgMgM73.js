import{j as pe}from"./jsx-runtime-BlAj40OV.js";import{e as c}from"./index.esm-OSDnnu3r.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";/* empty css              */import"./index.esm-DN4TXdWq.js";import"./objectWithoutProperties-BJfzkg-c.js";import"./extends-CF3RwP-h.js";const be=`<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community Form field with text input

## Form field met [Textbox](/docs/rijkshuisstijl-textbox--docs)

## Usage

\`\`\`jsx
import { FormFieldTextbox } from '@rijkshuisstijl/community-components';

<FormFieldTextbox
  label="Label"
  placeholder="Placeholder"
  description="Description"
  value="Value"
  onChange={onChange}
  error="Error"
  required
  disabled
  readOnly
/>;
\`\`\`
`,je={title:"Rijkshuisstijl/Form Field/Form Field Text Input",id:"rhc-form-field-text-input",component:c,argTypes:{required:{description:"Required",control:"boolean",table:{category:"API",defaultValue:{summary:"false"}}},inputRequired:{description:"Required (HTML validation)",control:"boolean",table:{category:"API",defaultValue:{summary:"false"}}},disabled:{description:"Disabled",control:"boolean",table:{category:"API",defaultValue:{summary:"false"}}},readOnly:{description:"Read-only",control:"boolean",table:{category:"API",defaultValue:{summary:"false"}}},invalid:{description:"Invalid",control:"boolean",table:{category:"API",defaultValue:{summary:"false"}}},name:{description:"Name",control:"text",table:{category:"API",defaultValue:{summary:""}}},defaultValue:{description:"Value",control:"text",table:{category:"API",defaultValue:{summary:""}}},value:{description:"Value",control:"text",table:{category:"API",defaultValue:{summary:""}}},placeholder:{description:"Placeholder",control:"text",table:{category:"API",defaultValue:{summary:""}}},label:{name:"label",type:{name:"string",required:!0},table:{defaultValue:{summary:""},category:"API"}},errorMessage:{name:"errorMessage",description:"Description for invalid input",type:{name:"string",required:!1},table:{defaultValue:{summary:""},category:"API"}},description:{description:"Description",type:{name:"string",required:!1},table:{category:"API",defaultValue:{summary:""}}},autoComplete:{description:"Autocomplete",control:"select",options:["","additional-name","address-level1","address-level2","address-level3","address-level4","address-line1","address-line2","address-line3","bday","bday-day","bday-month","bday-year","cc-additional-name","cc-csc","cc-exp","cc-exp-month","cc-exp-year","cc-family-name","cc-given-name","cc-name","cc-number","cc-type","country","country-name","current-password","email","family-name","fax","given-name","home","honorific-prefix","honorific-suffix","impp","language","mobile","name","new-password","nickname","one-time-code","organization","organization-title","pager","photo","postal-code","sex","street-address","tel","tel-area-code","tel-country-code","tel-extension","tel-local","tel-local-prefix","tel-local-suffix","tel-national","transaction-amount","transaction-currency","url","username","work"],table:{category:"API",defaultValue:{summary:""}}},minLength:{description:"Set the minimum length of the input text",control:"number",table:{category:"API",defaultValue:{summary:void 0}}},maxLength:{description:"Set the maximum length of the input text",control:"number",table:{category:"API",defaultValue:{summary:void 0}}},min:{control:"number",table:{category:"API",defaultValue:{summary:void 0}}},max:{control:"number",table:{category:"API",defaultValue:{summary:void 0}}},step:{control:"number",table:{category:"API",defaultValue:{summary:void 0}}},size:{control:"number",table:{category:"API",defaultValue:{summary:void 0}}},type:{description:"Type",control:"select",options:{"":null,email:"email",number:"number",password:"password",search:"search",tel:"tel",text:"text",url:"url"},table:{category:"API",defaultValue:{summary:""}}},dir:{description:"Text direction",control:{type:"select"},options:{"":void 0,auto:"auto",ltr:"ltr",rtl:"rtl"},table:{category:"DOM",defaultValue:{summary:""}}},inputDir:{description:"Text direction",control:{type:"select"},options:{"":void 0,auto:"auto",ltr:"ltr",rtl:"rtl"},table:{category:"API",defaultValue:{summary:""}}}},args:{description:"",disabled:!1,invalid:!1,errorMessage:"",label:"",name:"",defaultValue:"",value:"",required:!1,inputRequired:!1,type:void 0,autoComplete:"",readOnly:!1,dir:void 0,inputDir:void 0,placeholder:"",size:void 0},render:U=>{const{description:B,disabled:G,id:J,invalid:Q,errorMessage:X,status:Y,inputRequired:Z,label:$,name:ee,required:re,defaultValue:ae,type:te,autoComplete:oe,minLength:ne,maxLength:le,readOnly:se,dir:ie,inputDir:de,placeholder:ue,value:ce,size:me}=U;return pe.jsx(c,{autoComplete:oe||void 0,defaultValue:ae||void 0,description:B||void 0,dir:ie||void 0,disabled:G,errorMessage:X||void 0,id:J||void 0,inputDir:de||void 0,inputRequired:Z,invalid:Q,label:$||void 0,maxLength:le||void 0,minLength:ne||void 0,name:ee||void 0,placeholder:ue||void 0,readOnly:se||void 0,required:re,size:me||void 0,status:Y||void 0,type:te||void 0,value:ce||void 0})},tags:["autodocs"],parameters:{docs:{description:{component:be}}}},e={args:{name:"subject",label:"Onderwerp"}},r={args:{name:"subject",label:"Onderwerp",description:"Kort maar krachtig."}},a={args:{name:"subject",label:"Onderwerp",errorMessage:"Vul een onderwerp in.",invalid:!0}},t={args:{name:"subject",label:"Onderwerp",defaultValue:"Hello, World!",status:"13 van de 50 tekens gebruikt."}},o={args:{name:"subject",label:"Wachtwoord",type:"password",autoComplete:"current-password"}},n={args:{name:"subject",label:"Onderwerp",disabled:!0,defaultValue:"Hello, world!"}},l={args:{name:"subject",label:"Onderwerp",readOnly:!0,defaultValue:"Hello, world!"}},s={args:{name:"subject",label:"Onderwerp",required:!0}},i={args:{name:"subject",label:"Onderwerp",inputRequired:!0}},d={args:{name:"subject",label:"Onderwerp",placeholder:"Type some text..."}},u={args:{dir:"rtl",label:"رقم الجوال",type:"tel",autoComplete:"mobile tel-national",inputDir:"ltr"},name:"Left-to-right input"};var m,p,b;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    label: 'Onderwerp'
  }
}`,...(b=(p=e.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var g,y,f;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    label: 'Onderwerp',
    description: 'Kort maar krachtig.'
  }
}`,...(f=(y=r.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var v,h,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    label: 'Onderwerp',
    errorMessage: 'Vul een onderwerp in.',
    invalid: true
  }
}`,...(x=(h=a.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var w,V,j;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    label: 'Onderwerp',
    defaultValue: 'Hello, World!',
    status: '13 van de 50 tekens gebruikt.'
  }
}`,...(j=(V=t.parameters)==null?void 0:V.docs)==null?void 0:j.source}}};var O,I,P;o.parameters={...o.parameters,docs:{...(O=o.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    label: 'Wachtwoord',
    type: 'password',
    autoComplete: 'current-password'
  }
}`,...(P=(I=o.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var A,q,R;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    label: 'Onderwerp',
    disabled: true,
    defaultValue: 'Hello, world!'
  }
}`,...(R=(q=n.parameters)==null?void 0:q.docs)==null?void 0:R.source}}};var D,S,T;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    label: 'Onderwerp',
    readOnly: true,
    defaultValue: 'Hello, world!'
  }
}`,...(T=(S=l.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var C,k,F;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    label: 'Onderwerp',
    required: true
  }
}`,...(F=(k=s.parameters)==null?void 0:k.docs)==null?void 0:F.source}}};var L,M,H;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    label: 'Onderwerp',
    inputRequired: true
  }
}`,...(H=(M=i.parameters)==null?void 0:M.docs)==null?void 0:H.source}}};var z,E,W;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    label: 'Onderwerp',
    placeholder: 'Type some text...'
  }
}`,...(W=(E=d.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};var K,_,N;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    dir: 'rtl',
    label: 'رقم الجوال',
    type: 'tel',
    autoComplete: 'mobile tel-national',
    inputDir: 'ltr'
  },
  name: 'Left-to-right input'
}`,...(N=(_=u.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};const Oe=["Default","Description","ErrorMessage","Status","Password","Disabled","ReadOnly","Required","InputRequired","Placeholder","LeftToRightInput"];export{e as Default,r as Description,n as Disabled,a as ErrorMessage,i as InputRequired,u as LeftToRightInput,o as Password,d as Placeholder,l as ReadOnly,s as Required,t as Status,Oe as __namedExportsOrder,je as default};
