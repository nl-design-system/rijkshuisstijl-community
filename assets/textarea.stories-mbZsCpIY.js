import{j as Q}from"./iframe-Cp3JE31R.js";import{m as W}from"./mergeMarkdown-D-HVsqGJ.js";import{G as i}from"./index-CXtHJWLY.js";import"./preload-helper-Dp1pzeXC.js";const Y=`<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community Form field with text input

## Privacy

Gebruik \`spellcheck="false"\` voor velden die gevoelige informatie kunnen bevatten, zoals wachtwoorden en persoonsgegevens. Sommige browser extensions voor spellingcontrole sturen deze informatie naar externe servers.
`,re={title:"Text Area",id:"rhc-textarea",component:i,argTypes:{required:{description:"Required",control:"boolean",table:{category:"API",defaultValue:{summary:"false"}}},inputRequired:{description:"Input Required",control:"boolean",table:{category:"API",defaultValue:{summary:"false"}}},disabled:{description:"Disabled",control:"boolean",table:{category:"API",defaultValue:{summary:"false"}}},readOnly:{description:"Read-only",control:"boolean",table:{category:"API",defaultValue:{summary:"false"}}},invalid:{description:"Invalid",control:"boolean",table:{category:"API",defaultValue:{summary:"false"}}},name:{description:"Name",control:"text",table:{category:"API",defaultValue:{summary:""}}},defaultValue:{description:"Value",control:"text",table:{category:"API",defaultValue:{summary:""}}},value:{description:"Value",control:"text",table:{category:"API",defaultValue:{summary:""}}},placeholder:{description:"Placeholder",control:"text",table:{category:"API",defaultValue:{summary:""}}},minLength:{description:"Set the minimum length of the input text",control:"number",table:{category:"API",defaultValue:{summary:void 0}}},maxLength:{description:"Set the maximum length of the input text",control:"number",table:{category:"API",defaultValue:{summary:void 0}}},cols:{description:"Set the number of visible columns in a text area",control:"number",table:{category:"API",defaultValue:{summary:void 0}}},rows:{description:"Set the number of visible text lines for the control",control:"number",table:{category:"API",defaultValue:{summary:void 0}}},dir:{description:"Text direction",control:{type:"select"},options:[void 0,"auto","ltr","rtl"],table:{category:"DOM",defaultValue:{summary:""}}}},args:{disabled:!1,invalid:!1,name:"",defaultValue:"",value:"",required:!1,inputRequired:!1,readOnly:!1,placeholder:"",minLength:void 0,maxLength:void 0,dir:void 0,cols:void 0,rows:void 0},render:D=>{const{readOnly:T,disabled:C,id:G,invalid:F,name:B,required:E,inputRequired:M,defaultValue:N,value:z,placeholder:U,minLength:X,maxLength:_,dir:H,cols:J,rows:K}=D;return Q.jsx(i,{"aria-label":"textarea-label",cols:J||void 0,defaultValue:N||void 0,dir:H||void 0,disabled:C,id:G||void 0,inputRequired:M||void 0,invalid:F,maxLength:_||void 0,minLength:X||void 0,name:B||void 0,placeholder:U||void 0,readOnly:T||void 0,required:E,rows:K||void 0,value:z||void 0})},tags:["autodocs"],parameters:{status:{type:"STABLE"},docs:{description:{component:W([Y])}},figma:"https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?node-id=969-2047&node-type=CANVAS&t=VGu5hA1sXPDhCUwB-0",nldesignsystem:"https://www.nldesignsystem.nl/textarea/",componentOrigin:"Dit component is overgenomen van de Gemeente Utrecht, met styling van de Rijkshuisstijl Community.",github:"https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/Textarea.tsx"}},e={args:{name:"subject"}},a={args:{name:"subject",readOnly:!0,placeholder:"Read Only"}},r={args:{name:"subject",disabled:!0}},t={args:{name:"subject",required:!0}},o={args:{name:"subject",inputRequired:!0}},s={args:{name:"subject",invalid:!0}},n={args:{name:"subject",placeholder:"Placeholder"}},l={args:{name:"subject",placeholder:"الموضوع",dir:"rtl"}};var d,u,c;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    name: 'subject'
  }
}`,...(c=(u=e.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var m,p,g;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    readOnly: true,
    placeholder: 'Read Only'
  }
}`,...(g=(p=a.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var b,h,y;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    disabled: true
  }
}`,...(y=(h=r.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var f,v,x;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    required: true
  }
}`,...(x=(v=t.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var j,R,V;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    inputRequired: true
  }
}`,...(V=(R=o.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var I,P,A;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    invalid: true
  }
}`,...(A=(P=s.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};var q,w,S;n.parameters={...n.parameters,docs:{...(q=n.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    placeholder: 'Placeholder'
  }
}`,...(S=(w=n.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var O,L,k;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    placeholder: 'الموضوع',
    dir: 'rtl'
  }
}`,...(k=(L=l.parameters)==null?void 0:L.docs)==null?void 0:k.source}}};const te=["Default","ReadOnly","Disabled","Required","InputRequired","Invalid","Placeholder","RightToLeft"];export{e as Default,r as Disabled,o as InputRequired,s as Invalid,n as Placeholder,a as ReadOnly,t as Required,l as RightToLeft,te as __namedExportsOrder,re as default};
