import{N as ee}from"./index-S2R9WF3Z.js";import{r as re}from"./index-BJzegUt9.js";import{m as ae}from"./merge-markdown-DQEtknEV.js";import{r as te}from"./form-field-text-input-e2kIvPsm.js";import"./_commonjsHelpers-D6-XlEtG.js";ee.define();const oe=({label:Z,disabled:d,invalid:m,required:p,inputRequired:b,autoComplete:y,readOnly:g,minLength:f,maxLength:w,...$})=>re.createElement("rhc-form-textinput",{label:Z,required:p==null?void 0:p.toString(),inputrequired:b==null?void 0:b.toString(),autocomplete:y==null?void 0:y.toString(),readonly:g==null?void 0:g.toString(),minlength:f==null?void 0:f.toString(),maxlength:w==null?void 0:w.toString(),disabled:d==null?void 0:d.toString(),invalid:m==null?void 0:m.toString(),...$}),ie={title:"Web Components/Form Field/Form Field Text Input",id:"rhc-form-field-text-input-web",component:oe,argTypes:{required:{description:"Required",control:"boolean",table:{category:"API",defaultValue:{summary:"false"}}},inputRequired:{description:"Required (HTML validation)",control:"boolean",table:{category:"API",defaultValue:{summary:"false"}}},disabled:{description:"Disabled",control:"boolean",table:{category:"API",defaultValue:{summary:"false"}}},readOnly:{description:"Read-only",control:"boolean",table:{category:"API",defaultValue:{summary:"false"}}},invalid:{description:"Invalid",control:"boolean",table:{category:"API",defaultValue:{summary:"false"}}},name:{description:"Name",control:"text",table:{category:"API",defaultValue:{summary:""}}},defaultValue:{description:"Value",control:"text",table:{category:"API",defaultValue:{summary:""}}},value:{description:"Value",control:"text",table:{category:"API",defaultValue:{summary:""}}},placeholder:{description:"Placeholder",control:"text",table:{category:"API",defaultValue:{summary:""}}},label:{name:"label",type:{name:"string",required:!0},table:{defaultValue:{summary:""},category:"API"}},errorMessage:{name:"errorMessage",description:"Description for invalid input",type:{name:"string",required:!1},table:{defaultValue:{summary:""},category:"API"}},description:{description:"Description",type:{name:"string",required:!1},table:{category:"API",defaultValue:{summary:""}}},autoComplete:{description:"Autocomplete",control:"select",options:["","additional-name","address-level1","address-level2","address-level3","address-level4","address-line1","address-line2","address-line3","bday","bday-day","bday-month","bday-year","cc-additional-name","cc-csc","cc-exp","cc-exp-month","cc-exp-year","cc-family-name","cc-given-name","cc-name","cc-number","cc-type","country","country-name","current-password","email","family-name","fax","given-name","home","honorific-prefix","honorific-suffix","impp","language","mobile","name","new-password","nickname","one-time-code","organization","organization-title","pager","photo","postal-code","sex","street-address","tel","tel-area-code","tel-country-code","tel-extension","tel-local","tel-local-prefix","tel-local-suffix","tel-national","transaction-amount","transaction-currency","url","username","work"],table:{category:"API",defaultValue:{summary:""}}},minLength:{description:"Set the minimum length of the input text",control:"number",table:{category:"API",defaultValue:{summary:void 0}}},maxLength:{description:"Set the maximum length of the input text",control:"number",table:{category:"API",defaultValue:{summary:void 0}}},min:{control:"number",table:{category:"API",defaultValue:{summary:void 0}}},max:{control:"number",table:{category:"API",defaultValue:{summary:void 0}}},step:{control:"number",table:{category:"API",defaultValue:{summary:void 0}}},size:{control:"number",table:{category:"API",defaultValue:{summary:void 0}}},type:{description:"Type",control:"select",options:{"":null,email:"email",number:"number",password:"password",search:"search",tel:"tel",text:"text",url:"url"},table:{category:"API",defaultValue:{summary:""}}},dir:{description:"Text direction",control:{type:"select"},options:{"":void 0,auto:"auto",ltr:"ltr",rtl:"rtl"},table:{category:"DOM",defaultValue:{summary:""}}},inputDir:{description:"Text direction",control:{type:"select"},options:{"":void 0,auto:"auto",ltr:"ltr",rtl:"rtl"},table:{category:"API",defaultValue:{summary:""}}}},args:{description:"",disabled:!1,invalid:!1,errorMessage:"",label:"",name:"",defaultValue:"",value:"",required:!1,inputRequired:!1,type:void 0,autoComplete:"",readOnly:!1,dir:void 0,inputDir:void 0,placeholder:"",size:void 0},tags:["autodocs"],parameters:{status:{type:"STABLE"},docs:{description:{component:ae([te])}},componentOrigin:"Dit component is overgenomen van de Gemeente Utrecht (daar heeft het de naam FormFieldTextbox), met HTML aanpassingen en styling van de Rijkshuisstijl Community.",github:"https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/web-components/src/components/FormFieldTextInput.tsx"}},e={args:{name:"subject",label:"Onderwerp"}},r={args:{name:"subject",label:"Onderwerp",description:"Kort maar krachtig."}},a={args:{name:"subject",label:"Onderwerp",errorMessage:"Vul een onderwerp in.",invalid:!0}},t={args:{name:"subject",label:"Onderwerp",defaultValue:"Hello, World!",status:"13 van de 50 tekens gebruikt."}},o={args:{autoComplete:"current-password",name:"subject",label:"Wachtwoord",type:"password"}},s={args:{name:"subject",label:"Onderwerp",disabled:!0,defaultValue:"Hello, world!"}},n={args:{name:"subject",label:"Onderwerp",readOnly:!0,defaultValue:"Hello, world!"}},l={args:{name:"subject",label:"Onderwerp",required:!0}},c={args:{name:"subject",label:"Onderwerp",inputRequired:!0}},u={args:{name:"subject",label:"Onderwerp",placeholder:"Type some text..."}},i={args:{dir:"rtl",label:"رقم الجوال",type:"tel",autoComplete:"mobile tel-national",inputDir:"ltr"},name:"Left-to-right input"};var h,j,S;e.parameters={...e.parameters,docs:{...(h=e.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    label: 'Onderwerp'
  }
} as StoryObj<typeof meta>`,...(S=(j=e.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var O,V,x;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    label: 'Onderwerp',
    description: 'Kort maar krachtig.'
  }
} as StoryObj<typeof meta>`,...(x=(V=r.parameters)==null?void 0:V.docs)==null?void 0:x.source}}};var v,I,P;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    label: 'Onderwerp',
    errorMessage: 'Vul een onderwerp in.',
    invalid: true
  }
} as StoryObj<typeof meta>`,...(P=(I=a.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var A,D,T;t.parameters={...t.parameters,docs:{...(A=t.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    label: 'Onderwerp',
    defaultValue: 'Hello, World!',
    status: '13 van de 50 tekens gebruikt.'
  }
} as StoryObj<typeof meta>`,...(T=(D=t.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};var k,R,q;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    autoComplete: 'current-password',
    name: 'subject',
    label: 'Wachtwoord',
    type: 'password'
  }
} as StoryObj<typeof meta>`,...(q=(R=o.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};var M,F,H;s.parameters={...s.parameters,docs:{...(M=s.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    label: 'Onderwerp',
    disabled: true,
    defaultValue: 'Hello, world!'
  }
} as StoryObj<typeof meta>`,...(H=(F=s.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var E,W,z;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    label: 'Onderwerp',
    readOnly: true,
    defaultValue: 'Hello, world!'
  }
} as StoryObj<typeof meta>`,...(z=(W=n.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};var C,N,K;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    label: 'Onderwerp',
    required: true
  }
} as StoryObj<typeof meta>`,...(K=(N=l.parameters)==null?void 0:N.docs)==null?void 0:K.source}}};var _,B,G;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    label: 'Onderwerp',
    inputRequired: true
  }
} as StoryObj<typeof meta>`,...(G=(B=c.parameters)==null?void 0:B.docs)==null?void 0:G.source}}};var L,U,J;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    label: 'Onderwerp',
    placeholder: 'Type some text...'
  }
} as StoryObj<typeof meta>`,...(J=(U=u.parameters)==null?void 0:U.docs)==null?void 0:J.source}}};var Q,X,Y;i.parameters={...i.parameters,docs:{...(Q=i.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    dir: 'rtl',
    label: 'رقم الجوال',
    type: 'tel',
    autoComplete: 'mobile tel-national',
    inputDir: 'ltr'
  },
  name: 'Left-to-right input'
} as StoryObj<typeof meta>`,...(Y=(X=i.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const de=["Default","Description","ErrorMessage","Status","Password","Disabled","ReadOnly","Required","InputRequired","Placeholder","LeftToRightInput"];export{e as Default,r as Description,s as Disabled,a as ErrorMessage,c as InputRequired,i as LeftToRightInput,o as Password,u as Placeholder,n as ReadOnly,l as Required,t as Status,de as __namedExportsOrder,ie as default};
