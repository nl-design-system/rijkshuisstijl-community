import{r,j as e,c as T}from"./iframe-DJvW-n7q.js";import{m as ie}from"./mergeMarkdown-BplYUDBy.js";import{r as ae}from"./form-field-select-C5d5vjwy.js";import{t as oe,u as c}from"./index-D9jALIvX.js";import{F as ne}from"./FormField-Vw9l3avp.js";import"./preload-helper-Dp1pzeXC.js";const f=({ref:G,description:g,disabled:b,selectRef:J,status:y,invalid:s,input:K,children:Q,options:t,dir:m,defaultValue:W,value:X,onChange:Y,onInput:Z,onBlur:$,onFocus:ee,name:se,...te})=>{const h=r.useId(),v=r.useId(),k=r.useId(),q=r.useId(),re=e.jsx(oe,{defaultValue:W,dir:m,disabled:b,id:h,invalid:s,name:se,ref:J,value:X,"aria-describedby":T({[v]:g,[q]:s,[k]:y})||void 0,className:T({"utrecht-select--html-select-rtl":m==="rtl"}),onBlur:$,onChange:Y,onFocus:ee,onInput:Z,children:t!=null&&t.length?t.map((u,S)=>e.jsx(c,{disabled:b,id:u+S,invalid:s,value:u,children:u},S)):Q});return e.jsx(ne,{description:g,descriptionId:v,dir:m,errorMessageId:q,id:h,input:K??re,invalid:s,ref:G,status:y,statusId:k,...te})};f.displayName="FormFieldSelect";f.__docgenInfo={description:"",methods:[],displayName:"FormFieldSelect",props:{errorMessage:{required:!1,tsType:{name:"string"},description:""},selectRef:{required:!1,tsType:{name:"Ref",elements:[{name:"HTMLSelectElement"}],raw:"Ref<HTMLSelectElement>"},description:""},status:{required:!1,tsType:{name:"ReactNode"},description:""},description:{required:!1,tsType:{name:"string"},description:""},input:{required:!1,tsType:{name:"ReactNode"},description:""},label:{required:!0,tsType:{name:"ReactNode"},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},ref:{required:!1,tsType:{name:"Ref",elements:[{name:"HTMLDivElement"}],raw:"Ref<HTMLDivElement>"},description:""}},composes:["Omit","Pick"]};const fe={title:"Form Field/Form Field Select",id:"rhc-form-field-select",component:f,argTypes:{label:{description:"The label of the form field",table:{type:{summary:"string"},defaultValue:{summary:'"Select option"'}}},disabled:{description:"Disables the form field",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},required:{description:"Makes the form field required",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},children:{description:"The options of the select",table:{type:{summary:"ReactNode"},defaultValue:{summary:""}}},options:{description:"The options of the select",table:{type:{summary:"string[]"},defaultValue:{summary:""}}},errorMessage:{description:"Adds an error message",table:{type:{summary:"string"},defaultValue:{summary:""}}},invalid:{description:"Adds an error message",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},name:{description:"The name of the form field",table:{type:{summary:"string"},defaultValue:{summary:""}}},description:{description:"The description of the form field",table:{type:{summary:"string"},defaultValue:{summary:""}}},defaultValue:{description:"The default value of the form field",table:{type:{summary:"string"},defaultValue:{summary:""}}},dir:{description:"The direction of the form field",options:["ltr","rtl"],control:{type:"select"}}},args:{label:"",name:"",description:"",errorMessage:"",required:!1,disabled:!1,invalid:!1,children:[],options:[],defaultValue:"",dir:""},tags:["autodocs"],parameters:{status:{type:"STABLE"},docs:{description:{component:ie([ae])}},componentOrigin:"Dit component is volledig ontwikkeld door de Rijkshuisstijl Community.",github:"https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/FormFieldSelect.tsx"}},i={args:{label:"kies een optie",name:"select",errorMessage:"",required:!1,disabled:!1,invalid:!1,options:["optie 1","optie 2","optie 3"],defaultValue:"optie 2"}},a={args:{label:"kies een optie",name:"select",errorMessage:"",description:"",required:!1,disabled:!1,invalid:!1,children:[e.jsx(c,{id:"optie1",value:"optie 1",children:"optie 1"},"option-1"),e.jsx(c,{id:"optie2",value:"optie 2",children:"optie 2"},"option-2"),e.jsx(c,{id:"optie3",value:"optie 3",children:"optie 3"},"option-3")]}},o={args:{label:"kies een optie",name:"select",description:"Dit is een beschrijving",errorMessage:"",required:!1,disabled:!1,invalid:!1,options:["optie 1","optie 2","optie 3"]}},n={args:{label:"kies een optie",name:"select",description:"",errorMessage:"",required:!0,disabled:!1,invalid:!1,options:["optie 1","optie 2","optie 3"]}},l={args:{label:"kies een optie",name:"select",description:"",errorMessage:"",required:!1,disabled:!0,invalid:!1,options:["optie 1","optie 2","optie 3"]}},d={args:{label:"kies een optie",name:"select",description:"",errorMessage:"U moet een optie kiezen",required:!1,disabled:!1,invalid:!0,options:["","optie 1","optie 2","optie 3"]}},p={args:{label:"حدد خياراً",name:"select",options:["خيار  1","خيار  2","خيار  3"],dir:"rtl"}};var M,F,R;i.parameters={...i.parameters,docs:{...(M=i.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(R=(F=i.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};var j,V,x;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(x=(V=a.parameters)==null?void 0:V.docs)==null?void 0:x.source}}};var D,O,I;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(I=(O=o.parameters)==null?void 0:O.docs)==null?void 0:I.source}}};var E,L,N;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(N=(L=n.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var w,A,C;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(C=(A=l.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var H,_,z;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(z=(_=d.parameters)==null?void 0:_.docs)==null?void 0:z.source}}};var U,B,P;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    label: 'حدد خياراً',
    name: 'select',
    options: ['خيار  1', 'خيار  2', 'خيار  3'],
    dir: 'rtl'
  }
}`,...(P=(B=p.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};const ge=["Default","CustomOptions","Description","Required","Disabled","Invalid","RightToLeft"];export{a as CustomOptions,i as Default,o as Description,l as Disabled,d as Invalid,n as Required,p as RightToLeft,ge as __namedExportsOrder,fe as default};
