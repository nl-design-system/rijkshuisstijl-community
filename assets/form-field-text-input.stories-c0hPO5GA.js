import{j as m}from"./jsx-runtime-CLpGMVip.js";import{f as p}from"./index.esm-aHhU-aAC.js";import{m as be}from"./merge-markdown-BtgmYwh_.js";/* empty css              */import"./index-BLZjEvYy.js";import"./index-DAIO8Scy.js";import"./_commonjsHelpers-C932wzq6.js";import"./index-Be-aV6DI.js";import"./clsx-B-dksMZM.js";import"./index-D5-rbeG3.js";const fe=`<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community Form field with text input

## Form field met [Textbox](/docs/rijkshuisstijl-textbox--docs)

## Usage

\`\`\`jsx
import { FormFieldTextInput } from '@rijkshuisstijl/community-components';

<FormFieldTextInput
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
`,ve={title:"Rijkshuisstijl/Form Field/Form Field Text Input",id:"rhc-form-field-text-input",component:p,argTypes:{required:{description:"Required",control:"boolean",table:{category:"API",defaultValue:{summary:"false"}}},inputRequired:{description:"Required (HTML validation)",control:"boolean",table:{category:"API",defaultValue:{summary:"false"}}},disabled:{description:"Disabled",control:"boolean",table:{category:"API",defaultValue:{summary:"false"}}},readOnly:{description:"Read-only",control:"boolean",table:{category:"API",defaultValue:{summary:"false"}}},invalid:{description:"Invalid",control:"boolean",table:{category:"API",defaultValue:{summary:"false"}}},name:{description:"Name",control:"text",table:{category:"API",defaultValue:{summary:""}}},defaultValue:{description:"Value",control:"text",table:{category:"API",defaultValue:{summary:""}}},value:{description:"Value",control:"text",table:{category:"API",defaultValue:{summary:""}}},placeholder:{description:"Placeholder",control:"text",table:{category:"API",defaultValue:{summary:""}}},label:{name:"label",type:{name:"string",required:!0},table:{defaultValue:{summary:""},category:"API"}},errorMessage:{name:"errorMessage",description:"Description for invalid input",type:{name:"string",required:!1},table:{defaultValue:{summary:""},category:"API"}},description:{description:"Description",type:{name:"string",required:!1},table:{category:"API",defaultValue:{summary:""}}},autoComplete:{description:"Autocomplete",control:"select",options:["","additional-name","address-level1","address-level2","address-level3","address-level4","address-line1","address-line2","address-line3","bday","bday-day","bday-month","bday-year","cc-additional-name","cc-csc","cc-exp","cc-exp-month","cc-exp-year","cc-family-name","cc-given-name","cc-name","cc-number","cc-type","country","country-name","current-password","email","family-name","fax","given-name","home","honorific-prefix","honorific-suffix","impp","language","mobile","name","new-password","nickname","one-time-code","organization","organization-title","pager","photo","postal-code","sex","street-address","tel","tel-area-code","tel-country-code","tel-extension","tel-local","tel-local-prefix","tel-local-suffix","tel-national","transaction-amount","transaction-currency","url","username","work"],table:{category:"API",defaultValue:{summary:""}}},minLength:{description:"Set the minimum length of the input text",control:"number",table:{category:"API",defaultValue:{summary:void 0}}},maxLength:{description:"Set the maximum length of the input text",control:"number",table:{category:"API",defaultValue:{summary:void 0}}},min:{control:"number",table:{category:"API",defaultValue:{summary:void 0}}},max:{control:"number",table:{category:"API",defaultValue:{summary:void 0}}},step:{control:"number",table:{category:"API",defaultValue:{summary:void 0}}},size:{control:"number",table:{category:"API",defaultValue:{summary:void 0}}},type:{description:"Type",control:"select",options:{"":null,email:"email",number:"number",password:"password",search:"search",tel:"tel",text:"text",url:"url"},table:{category:"API",defaultValue:{summary:""}}},dir:{description:"Text direction",control:{type:"select"},options:{"":void 0,auto:"auto",ltr:"ltr",rtl:"rtl"},table:{category:"DOM",defaultValue:{summary:""}}},inputDir:{description:"Text direction",control:{type:"select"},options:{"":void 0,auto:"auto",ltr:"ltr",rtl:"rtl"},table:{category:"API",defaultValue:{summary:""}}}},args:{description:"",disabled:!1,invalid:!1,errorMessage:"",label:"",name:"",defaultValue:"",value:"",required:!1,inputRequired:!1,type:void 0,autoComplete:"",readOnly:!1,dir:void 0,inputDir:void 0,placeholder:"",size:void 0},render:e=>{const{description:N,disabled:J,id:Q,invalid:X,errorMessage:Y,status:Z,inputRequired:$,label:ee,name:re,required:ae,defaultValue:te,type:ne,autoComplete:oe,minLength:le,maxLength:se,readOnly:de,dir:ie,inputDir:ue,placeholder:ce,value:me,size:pe}=e;return m.jsx(p,{autoComplete:oe||void 0,defaultValue:te||void 0,description:N||void 0,dir:ie||void 0,disabled:J,errorMessage:Y||void 0,id:Q||void 0,inputDir:ue||void 0,inputRequired:$,invalid:X,label:ee||void 0,maxLength:se||void 0,minLength:le||void 0,name:re||void 0,placeholder:ce||void 0,readOnly:de||void 0,required:ae,size:pe||void 0,status:Z||void 0,type:ne||void 0,value:me||void 0})},tags:["autodocs"],parameters:{status:{type:"STABLE"},docs:{description:{component:be([fe])}},componentOrigin:"Dit component is overgenomen van de Gemeente Utrecht (daar heeft het de naam FormFieldTextbox), met HTML aanpassingen en styling van de Rijkshuisstijl Community."}},r={args:{name:"subject",label:"Onderwerp"}},a={args:{name:"subject",label:"Onderwerp",description:"Kort maar krachtig."}},t={args:{name:"subject",label:"Onderwerp",errorMessage:"Vul een onderwerp in.",invalid:!0}},n={args:{name:"subject",label:"Onderwerp",defaultValue:"Hello, World!",status:"13 van de 50 tekens gebruikt."}},o={args:{autoComplete:"current-password",name:"subject",label:"Wachtwoord",type:"password"},render:e=>m.jsxs("form",{children:[m.jsx("input",{hidden:!0,autoComplete:"username",type:"text"}),m.jsx(p,{autoComplete:e.autoComplete,label:e.label,name:e.name,type:e.type})]})},l={args:{name:"subject",label:"Onderwerp",disabled:!0,defaultValue:"Hello, world!"}},s={args:{name:"subject",label:"Onderwerp",readOnly:!0,defaultValue:"Hello, world!"}},d={args:{name:"subject",label:"Onderwerp",required:!0}},i={args:{name:"subject",label:"Onderwerp",inputRequired:!0}},u={args:{name:"subject",label:"Onderwerp",placeholder:"Type some text..."}},c={args:{dir:"rtl",label:"رقم الجوال",type:"tel",autoComplete:"mobile tel-national",inputDir:"ltr"},name:"Left-to-right input"};var b,f,g;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    label: 'Onderwerp'
  }
}`,...(g=(f=r.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var y,h,x;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    label: 'Onderwerp',
    description: 'Kort maar krachtig.'
  }
}`,...(x=(h=a.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var w,j,V;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    label: 'Onderwerp',
    errorMessage: 'Vul een onderwerp in.',
    invalid: true
  }
}`,...(V=(j=t.parameters)==null?void 0:j.docs)==null?void 0:V.source}}};var I,O,P;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    label: 'Onderwerp',
    defaultValue: 'Hello, World!',
    status: '13 van de 50 tekens gebruikt.'
  }
}`,...(P=(O=n.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var v,A,q;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    autoComplete: 'current-password',
    name: 'subject',
    label: 'Wachtwoord',
    type: 'password'
  },
  render: args => <form>
      <input hidden autoComplete="username" type="text" />
      <FormFieldTextInput autoComplete={args.autoComplete} label={args.label} name={args.name} type={args.type} />
    </form>
}`,...(q=(A=o.parameters)==null?void 0:A.docs)==null?void 0:q.source}}};var C,R,D;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    label: 'Onderwerp',
    disabled: true,
    defaultValue: 'Hello, world!'
  }
}`,...(D=(R=l.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};var T,F,S;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    label: 'Onderwerp',
    readOnly: true,
    defaultValue: 'Hello, world!'
  }
}`,...(S=(F=s.parameters)==null?void 0:F.docs)==null?void 0:S.source}}};var k,L,M;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    label: 'Onderwerp',
    required: true
  }
}`,...(M=(L=d.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var H,z,E;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    label: 'Onderwerp',
    inputRequired: true
  }
}`,...(E=(z=i.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};var W,K,U;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    label: 'Onderwerp',
    placeholder: 'Type some text...'
  }
}`,...(U=(K=u.parameters)==null?void 0:K.docs)==null?void 0:U.source}}};var _,B,G;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    dir: 'rtl',
    label: 'رقم الجوال',
    type: 'tel',
    autoComplete: 'mobile tel-national',
    inputDir: 'ltr'
  },
  name: 'Left-to-right input'
}`,...(G=(B=c.parameters)==null?void 0:B.docs)==null?void 0:G.source}}};const Ae=["Default","Description","ErrorMessage","Status","Password","Disabled","ReadOnly","Required","InputRequired","Placeholder","LeftToRightInput"];export{r as Default,a as Description,l as Disabled,t as ErrorMessage,i as InputRequired,c as LeftToRightInput,o as Password,u as Placeholder,s as ReadOnly,d as Required,n as Status,Ae as __namedExportsOrder,ve as default};
