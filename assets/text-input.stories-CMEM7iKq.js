import{j as i}from"./jsx-runtime-CLpGMVip.js";import{K as m}from"./index.esm-BjcEwrCA.js";import{m as re}from"./merge-markdown-BtgmYwh_.js";/* empty css              */import"./index-DqXW3Q7L.js";import"./objectWithoutProperties-CbCxjZzm.js";import"./index-DAIO8Scy.js";import"./_commonjsHelpers-C932wzq6.js";import"./index-Be-aV6DI.js";import"./clsx-B-dksMZM.js";import"./index-D5-rbeG3.js";const oe=`<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community Text Input

## Terminologie

- textbox: \`role="textbox"\` in WAI-ARIA, Text box lemma op Wikipedia. HTML noemt het "text control" en text edit control". MDN noemt het "text field" en "text input".
- invalid: ...
- disabled: ...
- read-only: ...

## Privacy

Gebruik \`spellcheck="false"\` voor velden die gevoelige informatie kunnen bevatten, zoals wachtwoorden en persoonsgegevens. Sommige browser extensions voor spellingcontrole sturen deze informatie naar externe servers.
`,be={title:"Rijkshuisstijl/Text Input",id:"rhc-text-input",component:m,tags:["autodocs"],argTypes:{required:{description:"Required",control:"boolean",table:{category:"API",defaultValue:{summary:"false"}}},disabled:{description:"Disabled",control:"boolean",table:{category:"API",defaultValue:{summary:"false"}}},readOnly:{description:"Read-only",control:"boolean",table:{category:"API",defaultValue:{summary:"false"}}},invalid:{description:"Invalid",control:"boolean",table:{category:"API",defaultValue:{summary:"false"}}},name:{description:"Name",control:"text",table:{category:"API",defaultValue:{summary:""}}},defaultValue:{description:"Value",control:"text",table:{category:"API",defaultValue:{summary:""}}},value:{description:"Value",control:"text",table:{category:"API",defaultValue:{summary:""}}},placeholder:{description:"Placeholder",control:"text",table:{category:"API",defaultValue:{summary:""}}},autoComplete:{description:"Autocomplete",control:"select",options:["additional-name","address-level1","address-level2","address-level3","address-level4","address-line1","address-line2","address-line3","bday","bday-day","bday-month","bday-year","cc-additional-name","cc-csc","cc-exp","cc-exp-month","cc-exp-year","cc-family-name","cc-given-name","cc-name","cc-number","cc-type","country","country-name","current-password","email","family-name","fax","given-name","home","honorific-prefix","honorific-suffix","impp","language","mobile","name","new-password","nickname","one-time-code","organization","organization-title","pager","photo","postal-code","sex","street-address","tel","tel-area-code","tel-country-code","tel-extension","tel-local","tel-local-prefix","tel-local-suffix","tel-national","transaction-amount","transaction-currency","url","username","work"],table:{category:"API",defaultValue:{summary:""}}},step:{control:"number",table:{category:"API",defaultValue:{summary:void 0}}},size:{control:"number",table:{category:"API",defaultValue:{summary:void 0}}},type:{description:"Type",control:"select",options:[null,"email","number","password","search","tel","text","url"],table:{category:"API",defaultValue:{summary:""}}},dir:{description:"Text direction",control:{type:"select"},options:[void 0,"auto","ltr","rtl"],table:{category:"DOM",defaultValue:{summary:""}}},inputRequired:{description:"Input Required",control:"boolean",table:{category:"API",defaultValue:{summary:"false"}}},spellCheck:{description:"Spellcheck",control:"boolean",table:{category:"API",defaultValue:{summary:"false"}}},minLength:{description:"Set the minimum length of the input text",control:"number",table:{category:"API",defaultValue:{summary:void 0}}},maxLength:{description:"Set the maximum length of the input text",control:"number",table:{category:"API",defaultValue:{summary:void 0}}},min:{control:"number",table:{category:"API",defaultValue:{summary:void 0}}},max:{control:"number",table:{category:"API",defaultValue:{summary:void 0}}}},args:{name:"subject",required:!1,disabled:!1,readOnly:!1,invalid:!1,defaultValue:"",value:"",placeholder:"",autoComplete:"",step:void 0,size:void 0,type:void 0,dir:void 0,inputRequired:!1,spellCheck:!1,minLength:void 0,maxLength:void 0,min:void 0,max:void 0},parameters:{status:{type:"STABLE"},docs:{description:{component:re([oe])}},figma:"https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?node-id=859-981&node-type=CANVAS&t=VGu5hA1sXPDhCUwB-0",nldesignsystem:"https://www.nldesignsystem.nl/text-input/",componentOrigin:"Dit component is overgenomen van de Gemeente Utrecht (daar heet het Textbox), met styling van de Rijkshuisstijl Community."},render:e=>{const{name:M,required:N,disabled:B,readOnly:E,invalid:F,defaultValue:U,value:W,placeholder:X,autoComplete:_,step:K,size:J,type:Q,dir:Y,spellCheck:Z,inputRequired:$,minLength:ee,maxLength:te,min:ae,max:ne}=e;return i.jsx(m,{"aria-label":"text-input-label",autoComplete:_||void 0,defaultValue:U||void 0,dir:Y||void 0,disabled:B,inputRequired:$||void 0,invalid:F,max:ne||void 0,maxLength:te||void 0,min:ae||void 0,minLength:ee||void 0,name:M||void 0,placeholder:X||void 0,readOnly:E||void 0,required:N,size:J||void 0,spellCheck:Z,step:K||void 0,type:Q||void 0,value:W||void 0})}},t={args:{name:"subject"}},a={args:{name:"subject",required:!0}},n={args:{name:"subject",inputRequired:!0}},r={args:{name:"subject",disabled:!0,defaultValue:"Hello, world!"}},o={args:{name:"subject",readOnly:!0,defaultValue:"Hello, world!"}},s={args:{name:"subject",invalid:!0}},l={args:{name:"subject",placeholder:"Type some text..."}},d={args:{name:"subject",autoComplete:"current-password",type:"password"},render:e=>i.jsxs("form",{children:[i.jsx("input",{hidden:!0,autoComplete:"username",type:"text"}),i.jsx(m,{"aria-label":"text-input-label",autoComplete:e.autoComplete,name:e.name,type:e.type})]})},u={args:{dir:"rtl",type:"text",autoComplete:"username",placeholder:"اسم المستخدم"},name:"Left-to-right input"};var c,p,f;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    name: 'subject'
  }
}`,...(f=(p=t.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var y,g,b;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    required: true
  }
}`,...(b=(g=a.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var x,h,I;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    inputRequired: true
  }
}`,...(I=(h=n.parameters)==null?void 0:h.docs)==null?void 0:I.source}}};var j,V,v;r.parameters={...r.parameters,docs:{...(j=r.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    disabled: true,
    defaultValue: 'Hello, world!'
  }
}`,...(v=(V=r.parameters)==null?void 0:V.docs)==null?void 0:v.source}}};var A,C,w;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    readOnly: true,
    defaultValue: 'Hello, world!'
  }
}`,...(w=(C=o.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var R,P,q;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    invalid: true
  }
}`,...(q=(P=s.parameters)==null?void 0:P.docs)==null?void 0:q.source}}};var T,k,S;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    placeholder: 'Type some text...'
  }
}`,...(S=(k=l.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var L,O,D;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    autoComplete: 'current-password',
    type: 'password'
  },
  render: args => <form>
      <input hidden autoComplete="username" type="text" />
      <TextInput aria-label="text-input-label" autoComplete={args.autoComplete} name={args.name} type={args.type} />
    </form>
}`,...(D=(O=d.parameters)==null?void 0:O.docs)==null?void 0:D.source}}};var z,G,H;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    dir: 'rtl',
    type: 'text',
    autoComplete: 'username',
    placeholder: 'اسم المستخدم'
  },
  name: 'Left-to-right input'
}`,...(H=(G=u.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};const xe=["Default","Required","InputRequired","Disabled","ReadOnly","Invalid","Placeholder","AutoComplete","LeftToRightInput"];export{d as AutoComplete,t as Default,r as Disabled,n as InputRequired,s as Invalid,u as LeftToRightInput,l as Placeholder,o as ReadOnly,a as Required,xe as __namedExportsOrder,be as default};
