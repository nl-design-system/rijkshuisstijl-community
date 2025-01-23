import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{n as d}from"./index.esm-BN3CyjH_.js";import{m as G}from"./merge-markdown-CQvfZ6M6.js";import{S as p}from"./index-BfH1V66g.js";/* empty css              */import"./clsx-B-dksMZM.js";import"./index-C5EOLjWw.js";import"./_commonjsHelpers-C932wzq6.js";import"./index-DKyXVfeP.js";import"./index-CgpWq_u8.js";const H=`# Rijkshuisstijl Community FormFieldTextarea component

## Usage

- Using \`options\` prop

\`\`\`jsx
import { FormFieldSelect } from '@rijkshuisstijl-community/components-react';

<FormFieldSelect
  label="Select option"
  name="select"
  description="Select option"
  errorMessage=""
  required={false}
  disabled={false}
  invalid={false}
  defaultValue=""
  options={['option 1', 'option 2', 'option 3']}
/>;
\`\`\`

- Using \`children\` prop (options are not required)

\`\`\`jsx
import { FormFieldSelect } from '@rijkshuisstijl-community/components-react';

<FormFieldSelect
  label="Select option"
  name="select"
  description="Select option"
  errorMessage=""
  required={false}
  disabled={false}
  invalid={false}
  defaultValue=""
>
  <SelectOption value="option 1" id="option1">
    option 1
  </SelectOption>
  <SelectOption value="option 2" id="option2">
    option 2
  </SelectOption>
  <SelectOption value="option 3" id="option3">
    option 3
  </SelectOption>
</FormFieldSelect>;
\`\`\`
`,ie={title:"Rijkshuisstijl/Form Field/Form Field Select",id:"rhc-form-field-select",component:d,argTypes:{label:{description:"The label of the form field",table:{type:{summary:"string"},defaultValue:{summary:'"Select option"'}}},disabled:{description:"Disables the form field",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},required:{description:"Makes the form field required",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},children:{description:"The options of the select",table:{type:{summary:"ReactNode"},defaultValue:{summary:""}}},options:{description:"The options of the select",table:{type:{summary:"string[]"},defaultValue:{summary:""}}},errorMessage:{description:"Adds an error message",table:{type:{summary:"string"},defaultValue:{summary:""}}},invalid:{description:"Adds an error message",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},name:{description:"The name of the form field",table:{type:{summary:"string"},defaultValue:{summary:""}}},description:{description:"The description of the form field",table:{type:{summary:"string"},defaultValue:{summary:""}}},defaultValue:{description:"The default value of the form field",table:{type:{summary:"string"},defaultValue:{summary:""}}},dir:{description:"The direction of the form field",options:["ltr","rtl"],control:{type:"select"}}},args:{label:"",name:"",description:"",errorMessage:"",required:!1,disabled:!1,invalid:!1,children:[],options:[],defaultValue:"",dir:""},render:U=>{const{dir:C,label:A,defaultValue:E,options:e,children:L,name:w,description:z,errorMessage:I,required:_,disabled:B,invalid:N}=U;return l.jsx(d,{defaultValue:E||void 0,description:z||void 0,dir:C||void 0,disabled:B||void 0,errorMessage:I||void 0,invalid:N||void 0,label:A||void 0,name:w||void 0,options:e||void 0,required:_||void 0,children:!(e!=null&&e.length)&&L})},tags:["autodocs"],parameters:{status:{type:"STABLE"},docs:{description:{component:G([H])}},componentOrigin:"Dit component is volledig ontwikkeld door de Rijkshuisstijl Community."}},i={args:{label:"kies een optie",name:"select",errorMessage:"",required:!1,disabled:!1,invalid:!1,options:["optie 1","optie 2","optie 3"],defaultValue:"optie 2"}},o={args:{label:"kies een optie",name:"select",errorMessage:"",description:"",required:!1,disabled:!1,invalid:!1,children:[l.jsx(p,{id:"optie1",value:"optie 1",children:"optie 1"},"option-1"),l.jsx(p,{id:"optie2",value:"optie 2",children:"optie 2"},"option-2"),l.jsx(p,{id:"optie3",value:"optie 3",children:"optie 3"},"option-3")]}},t={args:{label:"kies een optie",name:"select",description:"Dit is een beschrijving",errorMessage:"",required:!1,disabled:!1,invalid:!1,options:["optie 1","optie 2","optie 3"]}},s={args:{label:"kies een optie",name:"select",description:"",errorMessage:"",required:!0,disabled:!1,invalid:!1,options:["optie 1","optie 2","optie 3"]}},r={args:{label:"kies een optie",name:"select",description:"",errorMessage:"",required:!1,disabled:!0,invalid:!1,options:["optie 1","optie 2","optie 3"]}},a={args:{label:"kies een optie",name:"select",description:"",errorMessage:"U moet een optie kiezen",required:!1,disabled:!1,invalid:!0,options:["","optie 1","optie 2","optie 3"]}},n={args:{label:"حدد خياراً",name:"select",options:["خيار  1","خيار  2","خيار  3"],dir:"rtl"}};var c,m,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(m=i.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var f,g,b;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(b=(g=o.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var v,y,h;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(h=(y=t.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var S,k,q;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(q=(k=s.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};var j,M,F;r.parameters={...r.parameters,docs:{...(j=r.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(F=(M=r.parameters)==null?void 0:M.docs)==null?void 0:F.source}}};var V,O,T;a.parameters={...a.parameters,docs:{...(V=a.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(T=(O=a.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};var x,D,R;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'حدد خياراً',
    name: 'select',
    options: ['خيار  1', 'خيار  2', 'خيار  3'],
    dir: 'rtl'
  }
}`,...(R=(D=n.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};const oe=["Default","CustomOptions","Description","Required","Disabled","Invalid","RightToLeft"];export{o as CustomOptions,i as Default,t as Description,r as Disabled,a as Invalid,s as Required,n as RightToLeft,oe as __namedExportsOrder,ie as default};
