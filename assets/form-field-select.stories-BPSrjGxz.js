import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{r as te}from"./form-field-select-C5d5vjwy.js";import{m as ae}from"./merge-markdown-DQEtknEV.js";import{u as oe,v as g}from"./index-DlGjRi2o.js";import{c as x}from"./clsx-B-dksMZM.js";import{r as n}from"./index-BJzegUt9.js";import{F as ne}from"./FormField-RfkBY8xq.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./objectWithoutProperties-CbCxjZzm.js";const b=({ref:y,description:a,disabled:o,selectRef:h,status:e,invalid:i,input:v,children:q,options:r,dir:t,defaultValue:k,value:M,onChange:Y,onInput:Z,onBlur:$,onFocus:ee,name:se,...ie})=>{const T=n.useId(),V=n.useId(),j=n.useId(),F=n.useId(),re=s.jsx(oe,{defaultValue:k,dir:t,disabled:o,id:T,invalid:i,name:se,ref:h,value:M,"aria-describedby":x({[V]:a,[F]:i,[j]:e})||void 0,className:x({"utrecht-select--html-select-rtl":t==="rtl"}),onBlur:$,onChange:Y,onFocus:ee,onInput:Z,children:r!=null&&r.length?r.map((S,R)=>s.jsx(g,{disabled:o,id:S+R,invalid:i,value:S,children:S},R)):q});return s.jsx(ne,{description:a,descriptionId:V,dir:t,errorMessageId:F,id:T,input:v??re,invalid:i,ref:y,status:e,statusId:j,...ie})};b.displayName="FormFieldSelect";b.__docgenInfo={description:"",methods:[],displayName:"FormFieldSelect",props:{errorMessage:{required:!1,tsType:{name:"string"},description:""},selectRef:{required:!1,tsType:{name:"Ref",elements:[{name:"HTMLSelectElement"}],raw:"Ref<HTMLSelectElement>"},description:""},status:{required:!1,tsType:{name:"ReactNode"},description:""},description:{required:!1,tsType:{name:"string"},description:""},input:{required:!1,tsType:{name:"ReactNode"},description:""},label:{required:!0,tsType:{name:"ReactNode"},description:""},options:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},ref:{required:!1,tsType:{name:"Ref",elements:[{name:"HTMLDivElement"}],raw:"Ref<HTMLDivElement>"},description:""}},composes:["Omit","Pick"]};const ye={title:"Form Field/Form Field Select",id:"rhc-form-field-select",component:b,argTypes:{label:{description:"The label of the form field",table:{type:{summary:"string"},defaultValue:{summary:'"Select option"'}}},disabled:{description:"Disables the form field",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},required:{description:"Makes the form field required",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},children:{description:"The options of the select",table:{type:{summary:"ReactNode"},defaultValue:{summary:""}}},options:{description:"The options of the select",table:{type:{summary:"string[]"},defaultValue:{summary:""}}},errorMessage:{description:"Adds an error message",table:{type:{summary:"string"},defaultValue:{summary:""}}},invalid:{description:"Adds an error message",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},name:{description:"The name of the form field",table:{type:{summary:"string"},defaultValue:{summary:""}}},description:{description:"The description of the form field",table:{type:{summary:"string"},defaultValue:{summary:""}}},defaultValue:{description:"The default value of the form field",table:{type:{summary:"string"},defaultValue:{summary:""}}},dir:{description:"The direction of the form field",options:["ltr","rtl"],control:{type:"select"}}},args:{label:"",name:"",description:"",errorMessage:"",required:!1,disabled:!1,invalid:!1,children:[],options:[],defaultValue:"",dir:""},render:y=>{const{dir:a,label:o,defaultValue:h,options:e,children:i,name:v,description:q,errorMessage:r,required:t,disabled:k,invalid:M}=y;return s.jsx(b,{defaultValue:h||void 0,description:q||void 0,dir:a||void 0,disabled:k||void 0,errorMessage:r||void 0,invalid:M||void 0,label:o||void 0,name:v||void 0,options:e||void 0,required:t||void 0,children:!(e!=null&&e.length)&&i})},tags:["autodocs"],parameters:{status:{type:"STABLE"},docs:{description:{component:ae([te])}},componentOrigin:"Dit component is volledig ontwikkeld door de Rijkshuisstijl Community.",github:"https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/FormFieldSelect.tsx"}},l={args:{label:"kies een optie",name:"select",errorMessage:"",required:!1,disabled:!1,invalid:!1,options:["optie 1","optie 2","optie 3"],defaultValue:"optie 2"}},d={args:{label:"kies een optie",name:"select",errorMessage:"",description:"",required:!1,disabled:!1,invalid:!1,children:[s.jsx(g,{id:"optie1",value:"optie 1",children:"optie 1"},"option-1"),s.jsx(g,{id:"optie2",value:"optie 2",children:"optie 2"},"option-2"),s.jsx(g,{id:"optie3",value:"optie 3",children:"optie 3"},"option-3")]}},p={args:{label:"kies een optie",name:"select",description:"Dit is een beschrijving",errorMessage:"",required:!1,disabled:!1,invalid:!1,options:["optie 1","optie 2","optie 3"]}},c={args:{label:"kies een optie",name:"select",description:"",errorMessage:"",required:!0,disabled:!1,invalid:!1,options:["optie 1","optie 2","optie 3"]}},m={args:{label:"kies een optie",name:"select",description:"",errorMessage:"",required:!1,disabled:!0,invalid:!1,options:["optie 1","optie 2","optie 3"]}},u={args:{label:"kies een optie",name:"select",description:"",errorMessage:"U moet een optie kiezen",required:!1,disabled:!1,invalid:!0,options:["","optie 1","optie 2","optie 3"]}},f={args:{label:"حدد خياراً",name:"select",options:["خيار  1","خيار  2","خيار  3"],dir:"rtl"}};var D,O,I;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(I=(O=l.parameters)==null?void 0:O.docs)==null?void 0:I.source}}};var E,L,N;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(N=(L=d.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var w,A,C;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(C=(A=p.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var H,_,z;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(z=(_=c.parameters)==null?void 0:_.docs)==null?void 0:z.source}}};var U,B,P;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(P=(B=m.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};var G,J,K;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(K=(J=u.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,W,X;f.parameters={...f.parameters,docs:{...(Q=f.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    label: 'حدد خياراً',
    name: 'select',
    options: ['خيار  1', 'خيار  2', 'خيار  3'],
    dir: 'rtl'
  }
}`,...(X=(W=f.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};const he=["Default","CustomOptions","Description","Required","Disabled","Invalid","RightToLeft"];export{d as CustomOptions,l as Default,p as Description,m as Disabled,u as Invalid,c as Required,f as RightToLeft,he as __namedExportsOrder,ye as default};
