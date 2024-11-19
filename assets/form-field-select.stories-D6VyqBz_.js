import{j as l}from"./jsx-runtime-BoFrXSaA.js";import{m as p}from"./index.esm-D3XFUNVC.js";import{S as d}from"./index-BRJiiL5B.js";import"./index-WI1YhYyJ.js";import"./_commonjsHelpers-Cpj98o6Y.js";/* empty css              */import"./clsx-B-dksMZM.js";import"./objectWithoutProperties-BJfzkg-c.js";import"./index-BT-LQZTI.js";import"./index-4OG3gP4k.js";import"./index-dmmt78Ij.js";const G=`# Rijkshuisstijl Community FormFieldTextarea component

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
`,ie={title:"Rijkshuisstijl/Form Field/Form Field Select",id:"rhc-form-field-select",component:p,argTypes:{label:{description:"The label of the form field",table:{type:{summary:"string"},defaultValue:{summary:'"Select option"'}}},disabled:{description:"Disables the form field",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},required:{description:"Makes the form field required",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},children:{description:"The options of the select",table:{type:{summary:"ReactNode"},defaultValue:{summary:""}}},options:{description:"The options of the select",table:{type:{summary:"string[]"},defaultValue:{summary:""}}},errorMessage:{description:"Adds an error message",table:{type:{summary:"string"},defaultValue:{summary:""}}},invalid:{description:"Adds an error message",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},name:{description:"The name of the form field",table:{type:{summary:"string"},defaultValue:{summary:""}}},description:{description:"The description of the form field",table:{type:{summary:"string"},defaultValue:{summary:""}}},defaultValue:{description:"The default value of the form field",table:{type:{summary:"string"},defaultValue:{summary:""}}},dir:{description:"The direction of the form field",control:{type:"select",options:["ltr","rtl"]}}},args:{label:"",name:"",description:"",errorMessage:"",required:!1,disabled:!1,invalid:!1,children:[],options:[],defaultValue:"",dir:""},render:U=>{const{dir:A,label:C,defaultValue:E,options:e,children:L,name:z,description:I,errorMessage:_,required:B,disabled:N,invalid:w}=U;return l.jsx(p,{defaultValue:E||void 0,description:I||void 0,dir:A||void 0,disabled:N||void 0,errorMessage:_||void 0,invalid:w||void 0,label:C||void 0,name:z||void 0,options:e||void 0,required:B||void 0,children:!(e!=null&&e.length)&&L})},tags:["autodocs"],parameters:{status:{type:"STABLE"},docs:{description:{component:G}}}},i={args:{label:"kies een optie",name:"select",errorMessage:"",required:!1,disabled:!1,invalid:!1,options:["optie 1","optie 2","optie 3"],defaultValue:"optie 2"}},t={args:{label:"kies een optie",name:"select",errorMessage:"",description:"",required:!1,disabled:!1,invalid:!1,children:[l.jsx(d,{id:"optie1",value:"optie 1",children:"optie 1"}),l.jsx(d,{id:"optie2",value:"optie 2",children:"optie 2"}),l.jsx(d,{id:"optie3",value:"optie 3",children:"optie 3"})]}},o={args:{label:"kies een optie",name:"select",description:"Dit is een beschrijving",errorMessage:"",required:!1,disabled:!1,invalid:!1,options:["optie 1","optie 2","optie 3"]}},s={args:{label:"kies een optie",name:"select",description:"",errorMessage:"",required:!0,disabled:!1,invalid:!1,options:["optie 1","optie 2","optie 3"]}},r={args:{label:"kies een optie",name:"select",description:"",errorMessage:"",required:!1,disabled:!0,invalid:!1,options:["optie 1","optie 2","optie 3"]}},a={args:{label:"kies een optie",name:"select",description:"",errorMessage:"U moet een optie kiezen",required:!1,disabled:!1,invalid:!0,options:["","optie 1","optie 2","optie 3"]}},n={args:{label:"حدد خياراً",name:"select",options:["خيار  1","خيار  2","خيار  3"],dir:"rtl"}};var c,m,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(m=i.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var f,g,b;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'kies een optie',
    name: 'select',
    errorMessage: '',
    description: '',
    required: false,
    disabled: false,
    invalid: false,
    children: [<SelectOption id="optie1" value="optie 1">
        optie 1
      </SelectOption>, <SelectOption id="optie2" value="optie 2">
        optie 2
      </SelectOption>, <SelectOption id="optie3" value="optie 3">
        optie 3
      </SelectOption>]
  }
}`,...(b=(g=t.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var v,h,y;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(y=(h=o.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var S,q,k;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(k=(q=s.parameters)==null?void 0:q.docs)==null?void 0:k.source}}};var M,j,F;r.parameters={...r.parameters,docs:{...(M=r.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(F=(j=r.parameters)==null?void 0:j.docs)==null?void 0:F.source}}};var V,O,T;a.parameters={...a.parameters,docs:{...(V=a.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(R=(D=n.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};const te=["Default","CustomOptions","Description","Required","Disabled","Invalid","RightToLeft"];export{t as CustomOptions,i as Default,o as Description,r as Disabled,a as Invalid,s as Required,n as RightToLeft,te as __namedExportsOrder,ie as default};
