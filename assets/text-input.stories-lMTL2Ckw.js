import{j as re}from"./jsx-runtime-BoFrXSaA.js";import{n as d}from"./index.esm-BO76dSMk.js";import"./index-WI1YhYyJ.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./objectWithoutProperties-BJfzkg-c.js";const oe=`<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community Text Input

[NL Design System](https://www.nldesignsystem.nl/text-input) | [Figma](https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?node-id=859-981&node-type=CANVAS&t=VGu5hA1sXPDhCUwB-0)

## Terminologie

- textbox: \`role="textbox"\` in WAI-ARIA, Text box lemma op Wikipedia. HTML noemt het "text control" en text edit control". MDN noemt het "text field" en "text input".
- invalid: ...
- disabled: ...
- read-only: ...

## Privacy

Gebruik \`spellcheck="false"\` voor velden die gevoelige informatie kunnen bevatten, zoals wachtwoorden en persoonsgegevens. Sommige browser extensions voor spellingcontrole sturen deze informatie naar externe servers.
`,ue={title:"Rijkshuisstijl/Text Input",id:"rhc-text-input",component:d,tags:["autodocs"],argTypes:{required:{description:"Required",control:"boolean",table:{category:"API",defaultValue:{summary:"false"}}},disabled:{description:"Disabled",control:"boolean",table:{category:"API",defaultValue:{summary:"false"}}},readOnly:{description:"Read-only",control:"boolean",table:{category:"API",defaultValue:{summary:"false"}}},invalid:{description:"Invalid",control:"boolean",table:{category:"API",defaultValue:{summary:"false"}}},name:{description:"Name",control:"text",table:{category:"API",defaultValue:{summary:""}}},defaultValue:{description:"Value",control:"text",table:{category:"API",defaultValue:{summary:""}}},value:{description:"Value",control:"text",table:{category:"API",defaultValue:{summary:""}}},placeholder:{description:"Placeholder",control:"text",table:{category:"API",defaultValue:{summary:""}}},autoComplete:{description:"Autocomplete",control:"select",options:["","additional-name","address-level1","address-level2","address-level3","address-level4","address-line1","address-line2","address-line3","bday","bday-day","bday-month","bday-year","cc-additional-name","cc-csc","cc-exp","cc-exp-month","cc-exp-year","cc-family-name","cc-given-name","cc-name","cc-number","cc-type","country","country-name","current-password","email","family-name","fax","given-name","home","honorific-prefix","honorific-suffix","impp","language","mobile","name","new-password","nickname","one-time-code","organization","organization-title","pager","photo","postal-code","sex","street-address","tel","tel-area-code","tel-country-code","tel-extension","tel-local","tel-local-prefix","tel-local-suffix","tel-national","transaction-amount","transaction-currency","url","username","work"],table:{category:"API",defaultValue:{summary:""}}},step:{control:"number",table:{category:"API",defaultValue:{summary:void 0}}},size:{control:"number",table:{category:"API",defaultValue:{summary:void 0}}},type:{description:"Type",control:"select",options:{"":null,email:"email",number:"number",password:"password",search:"search",tel:"tel",text:"text",url:"url"},table:{category:"API",defaultValue:{summary:""}}},dir:{description:"Text direction",control:{type:"select"},options:{"":void 0,auto:"auto",ltr:"ltr",rtl:"rtl"},table:{category:"DOM",defaultValue:{summary:""}}},inputRequired:{description:"Input Required",control:"boolean",table:{category:"API",defaultValue:{summary:"false"}}},spellCheck:{description:"Spellcheck",control:"boolean",table:{category:"API",defaultValue:{summary:"false"}}},minLength:{description:"Set the minimum length of the input text",control:"number",table:{category:"API",defaultValue:{summary:void 0}}},maxLength:{description:"Set the maximum length of the input text",control:"number",table:{category:"API",defaultValue:{summary:void 0}}},min:{control:"number",table:{category:"API",defaultValue:{summary:void 0}}},max:{control:"number",table:{category:"API",defaultValue:{summary:void 0}}}},args:{name:"subject",required:!1,disabled:!1,readOnly:!1,invalid:!1,defaultValue:"",value:"",placeholder:"",autoComplete:"",step:void 0,size:void 0,type:void 0,dir:void 0,inputRequired:!1,spellCheck:!1,minLength:void 0,maxLength:void 0,min:void 0,max:void 0},parameters:{status:{type:"STABLE"},docs:{description:{component:oe}}},render:H=>{const{name:N,required:F,disabled:G,readOnly:M,invalid:B,defaultValue:E,value:W,placeholder:X,autoComplete:_,step:U,size:J,type:K,dir:Q,spellCheck:Y,inputRequired:Z,minLength:$,maxLength:ee,min:ae,max:te}=H;return re.jsx(d,{autoComplete:_||void 0,defaultValue:E||void 0,dir:Q||void 0,disabled:G,inputRequired:Z||void 0,invalid:B,max:te||void 0,maxLength:ee||void 0,min:ae||void 0,minLength:$||void 0,name:N||void 0,placeholder:X||void 0,readOnly:M||void 0,required:F,size:J||void 0,spellCheck:Y,step:U||void 0,type:K||void 0,value:W||void 0})}},e={args:{name:"subject"}},a={args:{name:"subject",required:!0}},t={args:{name:"subject",inputRequired:!0}},r={args:{name:"subject",disabled:!0,defaultValue:"Hello, world!"}},o={args:{name:"subject",readOnly:!0,defaultValue:"Hello, world!"}},n={args:{name:"subject",invalid:!0}},s={args:{name:"subject",placeholder:"Type some text..."}},l={args:{name:"subject",autoComplete:"current-password",type:"password"}},i={args:{dir:"rtl",type:"text",autoComplete:"username",placeholder:"اسم المستخدم"},name:"Left-to-right input"};var u,c,m;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    name: 'subject'
  }
}`,...(m=(c=e.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,g,y;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    required: true
  }
}`,...(y=(g=a.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var b,f,v;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    inputRequired: true
  }
}`,...(v=(f=t.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var x,h,I;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    disabled: true,
    defaultValue: 'Hello, world!'
  }
}`,...(I=(h=r.parameters)==null?void 0:h.docs)==null?void 0:I.source}}};var V,A,j;o.parameters={...o.parameters,docs:{...(V=o.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    readOnly: true,
    defaultValue: 'Hello, world!'
  }
}`,...(j=(A=o.parameters)==null?void 0:A.docs)==null?void 0:j.source}}};var w,P,R;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    invalid: true
  }
}`,...(R=(P=n.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var C,q,S;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    placeholder: 'Type some text...'
  }
}`,...(S=(q=s.parameters)==null?void 0:q.docs)==null?void 0:S.source}}};var L,T,k;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    autoComplete: 'current-password',
    type: 'password'
  }
}`,...(k=(T=l.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var O,D,z;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    dir: 'rtl',
    type: 'text',
    autoComplete: 'username',
    placeholder: 'اسم المستخدم'
  },
  name: 'Left-to-right input'
}`,...(z=(D=i.parameters)==null?void 0:D.docs)==null?void 0:z.source}}};const ce=["Default","Required","InputRequired","Disabled","ReadOnly","Invalid","Placeholder","AutoComplete","LeftToRightInput"];export{l as AutoComplete,e as Default,r as Disabled,t as InputRequired,n as Invalid,i as LeftToRightInput,s as Placeholder,o as ReadOnly,a as Required,ce as __namedExportsOrder,ue as default};
