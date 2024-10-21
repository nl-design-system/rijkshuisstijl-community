import{j as _}from"./jsx-runtime-BlAj40OV.js";import{v as l}from"./index.esm-ByJjFMhT.js";import"./index-Cs7sjTYM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./objectWithoutProperties-BJfzkg-c.js";import"./extends-CF3RwP-h.js";const U=`<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community Form field with text input

[NL Design System](https://www.nldesignsystem.nl/textarea) | [Figma](https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?node-id=969-2047&node-type=CANVAS&t=VGu5hA1sXPDhCUwB-0)

## Privacy

Gebruik \`spellcheck="false"\` voor velden die gevoelige informatie kunnen bevatten, zoals wachtwoorden en persoonsgegevens. Sommige browser extensions voor spellingcontrole sturen deze informatie naar externe servers.
`,Z={title:"Rijkshuisstijl/Textarea",id:"rhc-textarea",component:l,argTypes:{required:{description:"Required",control:"boolean",table:{category:"API",defaultValue:{summary:"false"}}},disabled:{description:"Disabled",control:"boolean",table:{category:"API",defaultValue:{summary:"false"}}},readOnly:{description:"Read-only",control:"boolean",table:{category:"API",defaultValue:{summary:"false"}}},invalid:{description:"Invalid",control:"boolean",table:{category:"API",defaultValue:{summary:"false"}}},name:{description:"Name",control:"text",table:{category:"API",defaultValue:{summary:""}}},defaultValue:{description:"Value",control:"text",table:{category:"API",defaultValue:{summary:""}}},value:{description:"Value",control:"text",table:{category:"API",defaultValue:{summary:""}}},placeholder:{description:"Placeholder",control:"text",table:{category:"API",defaultValue:{summary:""}}},minLength:{description:"Set the minimum length of the input text",control:"number",table:{category:"API",defaultValue:{summary:void 0}}},maxLength:{description:"Set the maximum length of the input text",control:"number",table:{category:"API",defaultValue:{summary:void 0}}},cols:{description:"Set the number of visible columns in a text area",control:"number",table:{category:"API",defaultValue:{summary:void 0}}},rows:{description:"Set the number of visible text lines for the control",control:"number",table:{category:"API",defaultValue:{summary:void 0}}},dir:{description:"Text direction",control:{type:"select"},options:{"":void 0,auto:"auto",ltr:"ltr",rtl:"rtl"},table:{category:"DOM",defaultValue:{summary:""}}}},args:{disabled:!1,invalid:!1,name:"",defaultValue:"",value:"",required:!1,readOnly:!1,placeholder:"",minLength:void 0,maxLength:void 0,dir:void 0,cols:void 0,rows:void 0},render:O=>{const{readOnly:L,disabled:D,id:q,invalid:k,name:T,required:C,defaultValue:F,value:G,placeholder:N,minLength:z,maxLength:B,dir:E,cols:M,rows:X}=O;return _.jsx(l,{cols:M||void 0,defaultValue:F||void 0,dir:E||void 0,disabled:D,id:q||void 0,invalid:k,maxLength:B||void 0,minLength:z||void 0,name:T||void 0,placeholder:N||void 0,readOnly:L||void 0,required:C,rows:X||void 0,value:G||void 0})},tags:["autodocs"],parameters:{docs:{description:{component:U}}}},e={args:{name:"subject"}},a={args:{name:"subject",readOnly:!0,placeholder:"Read Only"}},r={args:{name:"subject",disabled:!0}},t={args:{name:"subject",required:!0}},o={args:{name:"subject",invalid:!0}},s={args:{name:"subject",placeholder:"Placeholder"}},n={args:{name:"subject",placeholder:"الموضوع",dir:"rtl"}};var i,d,c;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    name: 'subject'
  }
}`,...(c=(d=e.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var u,m,p;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    readOnly: true,
    placeholder: 'Read Only'
  }
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var g,b,h;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    disabled: true
  }
}`,...(h=(b=r.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var v,y,f;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    required: true
  }
}`,...(f=(y=t.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var x,j,V;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    invalid: true
  }
}`,...(V=(j=o.parameters)==null?void 0:j.docs)==null?void 0:V.source}}};var P,I,w;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    placeholder: 'Placeholder'
  }
}`,...(w=(I=s.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};var A,R,S;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    placeholder: 'الموضوع',
    dir: 'rtl'
  }
}`,...(S=(R=n.parameters)==null?void 0:R.docs)==null?void 0:S.source}}};const $=["Default","ReadOnly","Disabled","Required","Invalid","Placeholder","RightToLeft"];export{e as Default,r as Disabled,o as Invalid,s as Placeholder,a as ReadOnly,t as Required,n as RightToLeft,$ as __namedExportsOrder,Z as default};
