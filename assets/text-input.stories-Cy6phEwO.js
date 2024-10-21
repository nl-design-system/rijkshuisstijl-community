import{j as $}from"./jsx-runtime-BlAj40OV.js";import{u as i}from"./index.esm-ByJjFMhT.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./objectWithoutProperties-BJfzkg-c.js";import"./extends-CF3RwP-h.js";const ee=`<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community Text Input

[NL Design System](https://www.nldesignsystem.nl/text-input) | [Figma](https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?node-id=859-981&node-type=CANVAS&t=VGu5hA1sXPDhCUwB-0)

## Terminologie

- textbox: \`role="textbox"\` in WAI-ARIA, Text box lemma op Wikipedia. HTML noemt het "text control" en text edit control". MDN noemt het "text field" en "text input".
- invalid: ...
- disabled: ...
- read-only: ...

## Privacy

Gebruik \`spellcheck="false"\` voor velden die gevoelige informatie kunnen bevatten, zoals wachtwoorden en persoonsgegevens. Sommige browser extensions voor spellingcontrole sturen deze informatie naar externe servers.
`,se={title:"Rijkshuisstijl/Text Input",id:"rhc-text-input",component:i,tags:["autodocs"],argTypes:{required:{description:"Required",control:"boolean",table:{category:"API",defaultValue:{summary:"false"}}},disabled:{description:"Disabled",control:"boolean",table:{category:"API",defaultValue:{summary:"false"}}},readOnly:{description:"Read-only",control:"boolean",table:{category:"API",defaultValue:{summary:"false"}}},invalid:{description:"Invalid",control:"boolean",table:{category:"API",defaultValue:{summary:"false"}}},name:{description:"Name",control:"text",table:{category:"API",defaultValue:{summary:""}}},defaultValue:{description:"Value",control:"text",table:{category:"API",defaultValue:{summary:""}}},value:{description:"Value",control:"text",table:{category:"API",defaultValue:{summary:""}}},placeholder:{description:"Placeholder",control:"text",table:{category:"API",defaultValue:{summary:""}}},autoComplete:{description:"Autocomplete",control:"select",options:["","additional-name","address-level1","address-level2","address-level3","address-level4","address-line1","address-line2","address-line3","bday","bday-day","bday-month","bday-year","cc-additional-name","cc-csc","cc-exp","cc-exp-month","cc-exp-year","cc-family-name","cc-given-name","cc-name","cc-number","cc-type","country","country-name","current-password","email","family-name","fax","given-name","home","honorific-prefix","honorific-suffix","impp","language","mobile","name","new-password","nickname","one-time-code","organization","organization-title","pager","photo","postal-code","sex","street-address","tel","tel-area-code","tel-country-code","tel-extension","tel-local","tel-local-prefix","tel-local-suffix","tel-national","transaction-amount","transaction-currency","url","username","work"],table:{category:"API",defaultValue:{summary:""}}},step:{control:"number",table:{category:"API",defaultValue:{summary:void 0}}},size:{control:"number",table:{category:"API",defaultValue:{summary:void 0}}},type:{description:"Type",control:"select",options:{"":null,email:"email",number:"number",password:"password",search:"search",tel:"tel",text:"text",url:"url"},table:{category:"API",defaultValue:{summary:""}}},dir:{description:"Text direction",control:{type:"select"},options:{"":void 0,auto:"auto",ltr:"ltr",rtl:"rtl"},table:{category:"DOM",defaultValue:{summary:""}}},inputRequired:{description:"Required (HTML validation)",control:"boolean",table:{category:"API",defaultValue:{summary:"false"}}},spellCheck:{description:"Spellcheck",control:"boolean",table:{category:"API",defaultValue:{summary:"false"}}},minLength:{description:"Set the minimum length of the input text",control:"number",table:{category:"API",defaultValue:{summary:void 0}}},maxLength:{description:"Set the maximum length of the input text",control:"number",table:{category:"API",defaultValue:{summary:void 0}}},min:{control:"number",table:{category:"API",defaultValue:{summary:void 0}}},max:{control:"number",table:{category:"API",defaultValue:{summary:void 0}}}},args:{name:"subject",required:!1,disabled:!1,readOnly:!1,invalid:!1,defaultValue:"",value:"",placeholder:"",autoComplete:"",step:void 0,size:void 0,type:void 0,dir:void 0,inputRequired:!1,spellCheck:!1,minLength:void 0,maxLength:void 0,min:void 0,max:void 0},parameters:{docs:{description:{component:ee}}},render:q=>{const{name:O,required:D,disabled:z,readOnly:H,invalid:M,defaultValue:N,value:F,placeholder:G,autoComplete:B,step:E,size:W,type:X,dir:_,spellCheck:U,inputRequired:J,minLength:K,maxLength:Q,min:Y,max:Z}=q;return $.jsx(i,{autoComplete:B||void 0,defaultValue:N||void 0,dir:_||void 0,disabled:z,inputRequired:J,invalid:M,max:Z||void 0,maxLength:Q||void 0,min:Y||void 0,minLength:K||void 0,name:O||void 0,placeholder:G||void 0,readOnly:H||void 0,required:D,size:W||void 0,spellCheck:U,step:E||void 0,type:X||void 0,value:F||void 0})}},e={args:{name:"subject"}},a={args:{name:"subject",required:!0}},t={args:{name:"subject",disabled:!0,defaultValue:"Hello, world!"}},r={args:{name:"subject",readOnly:!0,defaultValue:"Hello, world!"}},o={args:{name:"subject",invalid:!0}},n={args:{name:"subject",placeholder:"Type some text..."}},l={args:{name:"subject",autoComplete:"current-password",type:"password"}},s={args:{dir:"rtl",type:"text",autoComplete:"username",placeholder:"اسم المستخدم"},name:"Left-to-right input"};var d,c,u;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    name: 'subject'
  }
}`,...(u=(c=e.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var m,p,y;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    required: true
  }
}`,...(y=(p=a.parameters)==null?void 0:p.docs)==null?void 0:y.source}}};var g,b,f;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    disabled: true,
    defaultValue: 'Hello, world!'
  }
}`,...(f=(b=t.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var v,x,h;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    readOnly: true,
    defaultValue: 'Hello, world!'
  }
}`,...(h=(x=r.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var V,I,A;o.parameters={...o.parameters,docs:{...(V=o.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    invalid: true
  }
}`,...(A=(I=o.parameters)==null?void 0:I.docs)==null?void 0:A.source}}};var j,w,P;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    placeholder: 'Type some text...'
  }
}`,...(P=(w=n.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};var C,R,L;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    autoComplete: 'current-password',
    type: 'password'
  }
}`,...(L=(R=l.parameters)==null?void 0:R.docs)==null?void 0:L.source}}};var S,T,k;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    dir: 'rtl',
    type: 'text',
    autoComplete: 'username',
    placeholder: 'اسم المستخدم'
  },
  name: 'Left-to-right input'
}`,...(k=(T=s.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};const ie=["Default","Required","Disabled","ReadOnly","Invalid","Placeholder","AutoComplete","LeftToRightInput"];export{l as AutoComplete,e as Default,t as Disabled,o as Invalid,s as LeftToRightInput,n as Placeholder,r as ReadOnly,a as Required,ie as __namedExportsOrder,se as default};
