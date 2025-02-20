import{j as l}from"./jsx-runtime-CLpGMVip.js";import{j as p,S as d}from"./index.esm-5Q5QRGti.js";import{r as G}from"./form-field-select-C5d5vjwy.js";import{m as H}from"./merge-markdown-BtgmYwh_.js";import"./index-DAIO8Scy.js";import"./_commonjsHelpers-C932wzq6.js";const Y={title:"Rijkshuisstijl/Form Field/Form Field Select",id:"rhc-form-field-select",component:p,argTypes:{label:{description:"The label of the form field",table:{type:{summary:"string"},defaultValue:{summary:'"Select option"'}}},disabled:{description:"Disables the form field",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},required:{description:"Makes the form field required",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},children:{description:"The options of the select",table:{type:{summary:"ReactNode"},defaultValue:{summary:""}}},options:{description:"The options of the select",table:{type:{summary:"string[]"},defaultValue:{summary:""}}},errorMessage:{description:"Adds an error message",table:{type:{summary:"string"},defaultValue:{summary:""}}},invalid:{description:"Adds an error message",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},name:{description:"The name of the form field",table:{type:{summary:"string"},defaultValue:{summary:""}}},description:{description:"The description of the form field",table:{type:{summary:"string"},defaultValue:{summary:""}}},defaultValue:{description:"The default value of the form field",table:{type:{summary:"string"},defaultValue:{summary:""}}},dir:{description:"The direction of the form field",options:["ltr","rtl"],control:{type:"select"}}},args:{label:"",name:"",description:"",errorMessage:"",required:!1,disabled:!1,invalid:!1,children:[],options:[],defaultValue:"",dir:""},render:A=>{const{dir:C,label:E,defaultValue:L,options:e,children:w,name:z,description:I,errorMessage:U,required:_,disabled:B,invalid:N}=A;return l.jsx(p,{defaultValue:L||void 0,description:I||void 0,dir:C||void 0,disabled:B||void 0,errorMessage:U||void 0,invalid:N||void 0,label:E||void 0,name:z||void 0,options:e||void 0,required:_||void 0,children:!(e!=null&&e.length)&&w})},tags:["autodocs"],parameters:{status:{type:"STABLE"},docs:{description:{component:H([G])}},componentOrigin:"Dit component is volledig ontwikkeld door de Rijkshuisstijl Community."}},i={args:{label:"kies een optie",name:"select",errorMessage:"",required:!1,disabled:!1,invalid:!1,options:["optie 1","optie 2","optie 3"],defaultValue:"optie 2"}},s={args:{label:"kies een optie",name:"select",errorMessage:"",description:"",required:!1,disabled:!1,invalid:!1,children:[l.jsx(d,{id:"optie1",value:"optie 1",children:"optie 1"},"option-1"),l.jsx(d,{id:"optie2",value:"optie 2",children:"optie 2"},"option-2"),l.jsx(d,{id:"optie3",value:"optie 3",children:"optie 3"},"option-3")]}},r={args:{label:"kies een optie",name:"select",description:"Dit is een beschrijving",errorMessage:"",required:!1,disabled:!1,invalid:!1,options:["optie 1","optie 2","optie 3"]}},a={args:{label:"kies een optie",name:"select",description:"",errorMessage:"",required:!0,disabled:!1,invalid:!1,options:["optie 1","optie 2","optie 3"]}},t={args:{label:"kies een optie",name:"select",description:"",errorMessage:"",required:!1,disabled:!0,invalid:!1,options:["optie 1","optie 2","optie 3"]}},o={args:{label:"kies een optie",name:"select",description:"",errorMessage:"U moet een optie kiezen",required:!1,disabled:!1,invalid:!0,options:["","optie 1","optie 2","optie 3"]}},n={args:{label:"حدد خياراً",name:"select",options:["خيار  1","خيار  2","خيار  3"],dir:"rtl"}};var c,u,m;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(m=(u=i.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var f,g,b;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'kies een optie',
    name: 'select',
    errorMessage: '',
    description: '',
    required: false,
    disabled: false,
    invalid: false,
    children: [<SelectOption id="optie1" key="option-1" value="optie 1">
        optie 1
      </SelectOption>, <SelectOption id="optie2" key="option-2" value="optie 2">
        optie 2
      </SelectOption>, <SelectOption id="optie3" key="option-3" value="optie 3">
        optie 3
      </SelectOption>]
  }
}`,...(b=(g=s.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var y,h,v;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(v=(h=r.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var k,q,S;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(S=(q=a.parameters)==null?void 0:q.docs)==null?void 0:S.source}}};var M,V,j;t.parameters={...t.parameters,docs:{...(M=t.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(j=(V=t.parameters)==null?void 0:V.docs)==null?void 0:j.source}}};var O,T,D;o.parameters={...o.parameters,docs:{...(O=o.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(D=(T=o.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var x,R,F;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'حدد خياراً',
    name: 'select',
    options: ['خيار  1', 'خيار  2', 'خيار  3'],
    dir: 'rtl'
  }
}`,...(F=(R=n.parameters)==null?void 0:R.docs)==null?void 0:F.source}}};const Z=["Default","CustomOptions","Description","Required","Disabled","Invalid","RightToLeft"];export{s as CustomOptions,i as Default,r as Description,t as Disabled,o as Invalid,a as Required,n as RightToLeft,Z as __namedExportsOrder,Y as default};
