import{j as W}from"./jsx-runtime-BoFrXSaA.js";import{o as i}from"./index.esm-C1RX3ACj.js";import"./index-WI1YhYyJ.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./objectWithoutProperties-BJfzkg-c.js";const Y=`<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community Form field with text input

[NL Design System](https://www.nldesignsystem.nl/textarea) | [Figma](https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?node-id=969-2047&node-type=CANVAS&t=VGu5hA1sXPDhCUwB-0)

## Privacy

Gebruik \`spellcheck="false"\` voor velden die gevoelige informatie kunnen bevatten, zoals wachtwoorden en persoonsgegevens. Sommige browser extensions voor spellingcontrole sturen deze informatie naar externe servers.
`,te={title:"Rijkshuisstijl/Textarea",id:"rhc-textarea",component:i,argTypes:{required:{description:"Required",control:"boolean",table:{category:"API",defaultValue:{summary:"false"}}},inputRequired:{description:"Input Required",control:"boolean",table:{category:"API",defaultValue:{summary:"false"}}},disabled:{description:"Disabled",control:"boolean",table:{category:"API",defaultValue:{summary:"false"}}},readOnly:{description:"Read-only",control:"boolean",table:{category:"API",defaultValue:{summary:"false"}}},invalid:{description:"Invalid",control:"boolean",table:{category:"API",defaultValue:{summary:"false"}}},name:{description:"Name",control:"text",table:{category:"API",defaultValue:{summary:""}}},defaultValue:{description:"Value",control:"text",table:{category:"API",defaultValue:{summary:""}}},value:{description:"Value",control:"text",table:{category:"API",defaultValue:{summary:""}}},placeholder:{description:"Placeholder",control:"text",table:{category:"API",defaultValue:{summary:""}}},minLength:{description:"Set the minimum length of the input text",control:"number",table:{category:"API",defaultValue:{summary:void 0}}},maxLength:{description:"Set the maximum length of the input text",control:"number",table:{category:"API",defaultValue:{summary:void 0}}},cols:{description:"Set the number of visible columns in a text area",control:"number",table:{category:"API",defaultValue:{summary:void 0}}},rows:{description:"Set the number of visible text lines for the control",control:"number",table:{category:"API",defaultValue:{summary:void 0}}},dir:{description:"Text direction",control:{type:"select"},options:{"":void 0,auto:"auto",ltr:"ltr",rtl:"rtl"},table:{category:"DOM",defaultValue:{summary:""}}}},args:{disabled:!1,invalid:!1,name:"",defaultValue:"",value:"",required:!1,inputRequired:!1,readOnly:!1,placeholder:"",minLength:void 0,maxLength:void 0,dir:void 0,label:void 0,cols:void 0,rows:void 0},render:T=>{const{readOnly:k,disabled:F,id:C,invalid:G,name:N,required:B,inputRequired:E,defaultValue:z,value:M,placeholder:X,minLength:_,maxLength:U,label:H,dir:J,cols:K,rows:Q}=T;return W.jsx(i,{cols:K||void 0,defaultValue:z||void 0,disabled:F,id:C||void 0,inputDir:J||void 0,inputRequired:E||void 0,invalid:G,label:H||void 0,maxLength:U||void 0,minLength:_||void 0,name:N||void 0,placeholder:X||void 0,readOnly:k||void 0,required:B,rows:Q||void 0,value:M||void 0})},tags:["autodocs"],parameters:{status:{type:"STABLE"},docs:{description:{component:Y}}}},e={args:{name:"subject"}},a={args:{name:"subject",readOnly:!0,placeholder:"Read Only"}},r={args:{name:"subject",disabled:!0}},t={args:{name:"subject",required:!0}},o={args:{name:"subject",inputRequired:!0}},s={args:{name:"subject",invalid:!0}},n={args:{name:"subject",placeholder:"Placeholder"}},l={args:{name:"subject",placeholder:"الموضوع",dir:"rtl"}};var d,u,c;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    name: 'subject'
  }
}`,...(c=(u=e.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var m,p,g;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    readOnly: true,
    placeholder: 'Read Only'
  }
}`,...(g=(p=a.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var b,y,f;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    disabled: true
  }
}`,...(f=(y=r.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var h,v,x;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    required: true
  }
}`,...(x=(v=t.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var j,R,V;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    inputRequired: true
  }
}`,...(V=(R=o.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var I,P,q;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    invalid: true
  }
}`,...(q=(P=s.parameters)==null?void 0:P.docs)==null?void 0:q.source}}};var A,S,w;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    placeholder: 'Placeholder'
  }
}`,...(w=(S=n.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var L,O,D;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    placeholder: 'الموضوع',
    dir: 'rtl'
  }
}`,...(D=(O=l.parameters)==null?void 0:O.docs)==null?void 0:D.source}}};const oe=["Default","ReadOnly","Disabled","Required","InputRequired","Invalid","Placeholder","RightToLeft"];export{e as Default,r as Disabled,o as InputRequired,s as Invalid,n as Placeholder,a as ReadOnly,t as Required,l as RightToLeft,oe as __namedExportsOrder,te as default};
