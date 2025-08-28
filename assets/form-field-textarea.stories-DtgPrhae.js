import{s as ee}from"./index-D3vche7J.js";import{r as re}from"./index-BJzegUt9.js";import{m as ae}from"./merge-markdown-DQEtknEV.js";import{r as te}from"./form-field-textarea-BhZ3CkBk.js";import"./_commonjsHelpers-D6-XlEtG.js";ee.define();const se=({label:$,disabled:i,invalid:m,required:p,inputRequired:b,autoComplete:g,readOnly:y,minLength:f,maxLength:O,...C})=>re.createElement("rhc-form-textarea",{label:$,required:p==null?void 0:p.toString(),inputrequired:b==null?void 0:b.toString(),autocomplete:g==null?void 0:g.toString(),readonly:y==null?void 0:y.toString(),minlength:f==null?void 0:f.toString(),maxlength:O==null?void 0:O.toString(),disabled:i==null?void 0:i.toString(),invalid:m==null?void 0:m.toString(),...C}),de={title:"Web Components/Form Field/Form Field Textarea",id:"rhc-form-field-textarea-web",component:se,argTypes:{required:{description:"Required",control:"boolean",table:{category:"API",defaultValue:{summary:"false"}}},inputRequired:{description:"Input Required",control:"boolean",table:{category:"API",defaultValue:{summary:"false"}}},disabled:{description:"Disabled",control:"boolean",table:{category:"API",defaultValue:{summary:"false"}}},readOnly:{description:"Read-only",control:"boolean",table:{category:"API",defaultValue:{summary:"false"}}},invalid:{description:"Invalid",control:"boolean",table:{category:"API",defaultValue:{summary:"false"}}},name:{description:"Name",control:"text",table:{category:"API",defaultValue:{summary:""}}},defaultValue:{description:"Value",control:"text",table:{category:"API",defaultValue:{summary:""}}},value:{description:"Value",control:"text",table:{category:"API",defaultValue:{summary:""}}},placeholder:{description:"Placeholder",control:"text",table:{category:"API",defaultValue:{summary:""}}},label:{name:"label",type:{name:"string",required:!0},table:{defaultValue:{summary:""},category:"API"}},errorMessage:{name:"errorMessage",description:"Description for invalid input",type:{name:"string",required:!1},table:{defaultValue:{summary:""},category:"API"}},description:{description:"Description",type:{name:"string",required:!1},table:{category:"API",defaultValue:{summary:""}}},minLength:{description:"Set the minimum length of the input text",control:"number",table:{category:"API",defaultValue:{summary:void 0}}},maxLength:{description:"Set the maximum length of the input text",control:"number",table:{category:"API",defaultValue:{summary:void 0}}},cols:{description:"Set the number of visible columns in a text area",control:"number",table:{category:"API",defaultValue:{summary:void 0}}},rows:{description:"Set the number of visible text lines for the control",control:"number",table:{category:"API",defaultValue:{summary:void 0}}},dir:{description:"Text direction",control:{type:"select"},options:["","auto","ltr","rtl"],table:{category:"DOM",defaultValue:{summary:""}}}},args:{required:!1,inputRequired:!1,disabled:!1,readOnly:!1,invalid:!1,name:"",defaultValue:"",value:"",placeholder:"",label:"",errorMessage:"",description:"",minLength:void 0,maxLength:void 0,dir:void 0,cols:void 0,rows:void 0},tags:["autodocs"],parameters:{status:{type:"STABLE"},docs:{description:{component:ae([te])}},componentOrigin:"Dit component is overgenomen van de Gemeente Utrecht, met HTML aanpassingen en styling van de Rijkshuisstijl Community.",github:"https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/web-components/src/components/FormFieldTextarea.tsx"}},e={args:{name:"subject",label:"Onderwerp"}},r={args:{name:"subject",label:"Onderwerp",description:"Beschrijving van het onderwerp"}},a={args:{name:"subject",label:"Onderwerp",errorMessage:"Onderwerp is verplicht",invalid:!0}},t={args:{name:"subject",label:"Onderwerp",defaultValue:"Hello world!",maxLength:50,status:"12 van de 50 tekens ingevuld"}},s={args:{name:"subject",label:"Onderwerp",placeholder:"Onderwerp"}},o={args:{name:"subject",label:"Onderwerp",value:"Onderwerp"}},n={args:{name:"subject",label:"الموضوع",dir:"rtl"}},l={args:{name:"subject",label:"Onderwerp",readOnly:!0,placeholder:"Read Only"}},c={args:{name:"subject",label:"Onderwerp",disabled:!0}},u={args:{name:"subject",label:"Onderwerp",required:!0}},d={args:{name:"subject",label:"Onderwerp",inputRequired:!0}};var j,S,w;e.parameters={...e.parameters,docs:{...(j=e.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    label: 'Onderwerp'
  }
} as StoryObj<typeof meta>`,...(w=(S=e.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var h,v,V;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    label: 'Onderwerp',
    description: 'Beschrijving van het onderwerp'
  }
} as StoryObj<typeof meta>`,...(V=(v=r.parameters)==null?void 0:v.docs)==null?void 0:V.source}}};var x,I,P;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    label: 'Onderwerp',
    errorMessage: 'Onderwerp is verplicht',
    invalid: true
  }
} as StoryObj<typeof meta>`,...(P=(I=a.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var A,R,q;t.parameters={...t.parameters,docs:{...(A=t.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    label: 'Onderwerp',
    defaultValue: 'Hello world!',
    maxLength: 50,
    status: '12 van de 50 tekens ingevuld'
  }
} as StoryObj<typeof meta>`,...(q=(R=t.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};var D,M,T;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    label: 'Onderwerp',
    placeholder: 'Onderwerp'
  }
} as StoryObj<typeof meta>`,...(T=(M=s.parameters)==null?void 0:M.docs)==null?void 0:T.source}}};var k,E,F;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    label: 'Onderwerp',
    value: 'Onderwerp'
  }
} as StoryObj<typeof meta>`,...(F=(E=o.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var B,H,L;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    label: 'الموضوع',
    dir: 'rtl'
  }
} as StoryObj<typeof meta>`,...(L=(H=n.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var W,_,G;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    label: 'Onderwerp',
    readOnly: true,
    placeholder: 'Read Only'
  }
} as StoryObj<typeof meta>`,...(G=(_=l.parameters)==null?void 0:_.docs)==null?void 0:G.source}}};var N,U,z;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    label: 'Onderwerp',
    disabled: true
  }
} as StoryObj<typeof meta>`,...(z=(U=c.parameters)==null?void 0:U.docs)==null?void 0:z.source}}};var J,K,Q;u.parameters={...u.parameters,docs:{...(J=u.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    label: 'Onderwerp',
    required: true
  }
} as StoryObj<typeof meta>`,...(Q=(K=u.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Y,Z;d.parameters={...d.parameters,docs:{...(X=d.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    name: 'subject',
    label: 'Onderwerp',
    inputRequired: true
  }
} as StoryObj<typeof meta>`,...(Z=(Y=d.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};const ie=["Default","Description","ErrorMessage","Status","Placeholder","Value","RightToLeft","ReadOnly","Disabled","Required","InputRequired"];export{e as Default,r as Description,c as Disabled,a as ErrorMessage,d as InputRequired,s as Placeholder,l as ReadOnly,u as Required,n as RightToLeft,t as Status,o as Value,ie as __namedExportsOrder,de as default};
