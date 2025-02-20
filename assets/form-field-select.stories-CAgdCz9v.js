import{w as L}from"./index-DKiGiPj1.js";import{r as z}from"./index-DAIO8Scy.js";import{m as C}from"./merge-markdown-BtgmYwh_.js";import{r as I}from"./form-field-select-C5d5vjwy.js";import"./_commonjsHelpers-C932wzq6.js";L.define();const N=({label:j,description:D,disabled:i,status:O,invalid:n,options:R,dir:w,defaultvalue:E,value:F,name:x,...A})=>z.createElement("rhc-form-select",{label:j,description:D,status:O,options:JSON.stringify(R),dir:w,defaultvalue:E,value:F,name:x,disabled:i==null?void 0:i.toString(),invalid:n==null?void 0:n.toString(),...A}),G={title:"Web Components/Form Field/Form Field Select",id:"rhc-form-field-select-web",component:N,argTypes:{label:{description:"The label of the form field",table:{type:{summary:"string"},defaultValue:{summary:'"Select option"'}}},disabled:{description:"Disables the form field",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},children:{description:"The options of the select",table:{type:{summary:"ReactNode"},defaultValue:{summary:""}}},options:{description:"The options of the select",table:{type:{summary:"string[]"},defaultValue:{summary:""}}},errorMessage:{description:"Adds an error message",table:{type:{summary:"string"},defaultValue:{summary:""}}},invalid:{description:"Adds an error message",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},name:{description:"The name of the form field",table:{type:{summary:"string"},defaultValue:{summary:""}}},description:{description:"The description of the form field",table:{type:{summary:"string"},defaultValue:{summary:""}}},defaultValue:{description:"The default value of the form field",table:{type:{summary:"string"},defaultValue:{summary:""}}},dir:{description:"The direction of the form field",options:["ltr","rtl"],control:{type:"select"}}},args:{label:"",name:"",description:"",errorMessage:"",disabled:!1,invalid:!1,children:[],options:[],defaultValue:"",dir:""},tags:["autodocs"],parameters:{status:{type:"STABLE"},docs:{description:{component:C([I])}},componentOrigin:"Dit component is volledig ontwikkeld door de Rijkshuisstijl Community."}},e={args:{label:"kies een optie",name:"select",errorMessage:"",required:!1,disabled:!1,invalid:!1,options:["optie 1","optie 2","optie 3"],defaultValue:"optie 2"}},s={args:{label:"kies een optie",name:"select",description:"Dit is een beschrijving",errorMessage:"",required:!1,disabled:!1,invalid:!1,options:["optie 1","optie 2","optie 3"]}},r={args:{label:"kies een optie",name:"select",description:"",errorMessage:"",required:!0,disabled:!1,invalid:!1,options:["optie 1","optie 2","optie 3"]}},t={args:{label:"kies een optie",name:"select",description:"",errorMessage:"",required:!1,disabled:!0,invalid:!1,options:["optie 1","optie 2","optie 3"]}},a={args:{label:"kies een optie",name:"select",description:"",errorMessage:"U moet een optie kiezen",required:!1,disabled:!1,invalid:!0,options:["","optie 1","optie 2","optie 3"]}},o={args:{label:"حدد خياراً",name:"select",options:["خيار  1","خيار  2","خيار  3"],dir:"rtl"}};var l,p,d;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    label: 'kies een optie',
    name: 'select',
    errorMessage: '',
    required: false,
    disabled: false,
    invalid: false,
    options: ['optie 1', 'optie 2', 'optie 3'],
    defaultValue: 'optie 2'
  }
} as StoryObj<typeof meta>`,...(d=(p=e.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var m,c,u;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'kies een optie',
    name: 'select',
    description: 'Dit is een beschrijving',
    errorMessage: '',
    required: false,
    disabled: false,
    invalid: false,
    options: ['optie 1', 'optie 2', 'optie 3']
  }
} as StoryObj<typeof meta>`,...(u=(c=s.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var f,g,b;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'kies een optie',
    name: 'select',
    description: '',
    errorMessage: '',
    required: true,
    disabled: false,
    invalid: false,
    options: ['optie 1', 'optie 2', 'optie 3']
  }
} as StoryObj<typeof meta>`,...(b=(g=r.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var y,h,S;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'kies een optie',
    name: 'select',
    description: '',
    errorMessage: '',
    required: false,
    disabled: true,
    invalid: false,
    options: ['optie 1', 'optie 2', 'optie 3']
  }
} as StoryObj<typeof meta>`,...(S=(h=t.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var k,v,M;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: 'kies een optie',
    name: 'select',
    description: '',
    errorMessage: 'U moet een optie kiezen',
    required: false,
    disabled: false,
    invalid: true,
    options: ['', 'optie 1', 'optie 2', 'optie 3']
  }
} as StoryObj<typeof meta>`,...(M=(v=a.parameters)==null?void 0:v.docs)==null?void 0:M.source}}};var V,q,T;o.parameters={...o.parameters,docs:{...(V=o.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    label: 'حدد خياراً',
    name: 'select',
    options: ['خيار  1', 'خيار  2', 'خيار  3'],
    dir: 'rtl'
  }
} as StoryObj<typeof meta>`,...(T=(q=o.parameters)==null?void 0:q.docs)==null?void 0:T.source}}};const H=["Default","Description","Required","Disabled","Invalid","RightToLeft"];export{e as Default,s as Description,t as Disabled,a as Invalid,r as Required,o as RightToLeft,H as __namedExportsOrder,G as default};
