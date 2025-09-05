import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{V as s,f as v,F as a,g as b,h as o}from"./index.esm-CjA6zvQd.js";import{m as x}from"./merge-markdown-DQEtknEV.js";import"./index-BJzegUt9.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./clsx-B-dksMZM.js";const j=`# Rijkshuisstijl Community FormField component

De \`FormField\` component is een wrapper voor invoervelden in formulieren. Het zorgt voor een consistente structuur met labels, beschrijvingen, foutmeldingen en statusberichten. Deze component is gebaseerd op de Utrecht component library

## Voorbeeld met verkeerde implementatie

- Het \`input\` element, evenals \`description\` en \`errorMessage\`, moeten als props worden meegegeven en niet als children.

\`\`\`jsx
// Fout: input wordt direct als child geplaatst
<FormField>
    <input />
</FormField>

// Correct: input wordt als prop meegegeven
<FormField input={<input />} />
\`\`\`
`,R={title:"Form Field/Form Field",id:"rhc-form-field",component:s,argTypes:{label:{description:"Label",control:"text",table:{category:"Demo",defaultValue:{summary:""}}},description:{description:"Description",control:"text",table:{category:"Demo",defaultValue:{summary:""}}},errorMessage:{description:"Error message",control:"text",table:{category:"Demo",defaultValue:{summary:""}},if:{arg:"invalid",eq:!0}},input:{description:"Input component",control:!1,table:{category:"Demo"}},status:{description:"Status message",control:"text",table:{category:"Demo",defaultValue:{summary:""}}},invalid:{description:"Invalid state",control:"boolean",table:{category:"Demo",defaultValue:{summary:"false"}}}},args:{label:"Onderwerp",description:"",errorMessage:"",status:"",invalid:!1},render:h=>e.jsx(s,{...h}),tags:["autodocs"],parameters:{status:{type:"STABLE"},docs:{description:{component:x([j])}},nldesignsystem:"https://nldesignsystem.nl/form-field",figma:"https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?node-id=958-1925&p=f",github:"https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/FormField.tsx",componentOrigin:"Dit component is overgenomen van de Gemeente Utrecht, met HTML aanpassingen en styling van de Rijkshuisstijl Community."}},r={args:{label:"Onderwerp",description:"Beschrijving van het onderwerp",input:e.jsxs(v,{children:[e.jsx(a,{label:"Checkbox 1"},"1"),e.jsx(a,{label:"Checkbox 2"},"2"),e.jsx(a,{label:"Checkbox 3"},"3")]}),statusId:"status",errorMessageId:"error",descriptionId:"description"}},t={args:{label:"Onderwerp",description:"Beschrijving van het onderwerp",input:e.jsxs(b,{children:[e.jsx(o,{label:"Option 1",name:"radio-demo",value:"option1"}),e.jsx(o,{label:"Option 2",name:"radio-demo",value:"option2"}),e.jsx(o,{label:"Option 3",name:"radio-demo",value:"option3"})]}),statusId:"status",errorMessageId:"error",descriptionId:"description"}},i={args:{label:"Onderwerp",input:e.jsxs(b,{children:[e.jsx(o,{label:"Option 1",name:"radio-demo",value:"option1"}),e.jsx(o,{label:"Option 2",name:"radio-demo",value:"option2"}),e.jsx(o,{label:"Option 3",name:"radio-demo",value:"option3"})]}),statusId:"status",errorMessageId:"error",descriptionId:"description",errorMessage:"Dit is een foutmelding",invalid:!0}};var n,d,l;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    label: 'Onderwerp',
    description: 'Beschrijving van het onderwerp',
    input: <FormFieldCheckboxGroup>
        <FormFieldCheckboxOption key="1" label="Checkbox 1" />
        <FormFieldCheckboxOption key="2" label="Checkbox 2" />
        <FormFieldCheckboxOption key="3" label="Checkbox 3" />
      </FormFieldCheckboxGroup>,
    statusId: 'status',
    errorMessageId: 'error',
    descriptionId: 'description'
  }
}`,...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var m,p,c;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Onderwerp',
    description: 'Beschrijving van het onderwerp',
    input: <FormFieldRadioGroup>
        <FormFieldRadio label="Option 1" name="radio-demo" value="option1" />
        <FormFieldRadio label="Option 2" name="radio-demo" value="option2" />
        <FormFieldRadio label="Option 3" name="radio-demo" value="option3" />
      </FormFieldRadioGroup>,
    statusId: 'status',
    errorMessageId: 'error',
    descriptionId: 'description'
  }
}`,...(c=(p=t.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var u,g,F;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: 'Onderwerp',
    input: <FormFieldRadioGroup>
        <FormFieldRadio label="Option 1" name="radio-demo" value="option1" />
        <FormFieldRadio label="Option 2" name="radio-demo" value="option2" />
        <FormFieldRadio label="Option 3" name="radio-demo" value="option3" />
      </FormFieldRadioGroup>,
    statusId: 'status',
    errorMessageId: 'error',
    descriptionId: 'description',
    errorMessage: 'Dit is een foutmelding',
    invalid: true
  }
}`,...(F=(g=i.parameters)==null?void 0:g.docs)==null?void 0:F.source}}};const C=["Default","WithRadioGroup","Invalid"];export{r as Default,i as Invalid,t as WithRadioGroup,C as __namedExportsOrder,R as default};
