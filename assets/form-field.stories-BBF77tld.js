import{j as e}from"./iframe-DjDDBvOj.js";import{m as v}from"./merge-markdown-BK17y5gr.js";import{F as s}from"./FormField-WatzD-p9.js";import{F as x}from"./FormFieldCheckboxGroup-K05uI_1R.js";import{F as a}from"./FormFieldCheckboxOption-lnDettK-.js";import{F as b}from"./FormFieldRadioGroup-C38gxvNy.js";import{F as o}from"./FormFieldRadio-BjfKoqIR.js";import"./preload-helper-Dp1pzeXC.js";import"./index-gh1d-vat.js";import"./CheckboxGroup-Bu1tBZcg.js";const f=`# Rijkshuisstijl Community FormField component

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
`,G={title:"Form Field/Form Field",id:"rhc-form-field",component:s,argTypes:{label:{description:"Label",control:"text",table:{category:"Demo",defaultValue:{summary:""}}},description:{description:"Description",control:"text",table:{category:"Demo",defaultValue:{summary:""}}},errorMessage:{description:"Error message",control:"text",table:{category:"Demo",defaultValue:{summary:""}},if:{arg:"invalid",eq:!0}},input:{description:"Input component",control:!1,table:{category:"Demo"}},status:{description:"Status message",control:"text",table:{category:"Demo",defaultValue:{summary:""}}},invalid:{description:"Invalid state",control:"boolean",table:{category:"Demo",defaultValue:{summary:"false"}}}},args:{label:"Onderwerp",description:"",errorMessage:"",status:"",invalid:!1},render:h=>e.jsx(s,{...h}),tags:["autodocs"],parameters:{status:{type:"STABLE"},docs:{description:{component:v([f])}},nldesignsystem:"https://nldesignsystem.nl/form-field",figma:"https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?node-id=958-1925&p=f",github:"https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/FormField.tsx",componentOrigin:"Dit component is overgenomen van de Gemeente Utrecht, met HTML aanpassingen en styling van de Rijkshuisstijl Community."}},r={args:{label:"Onderwerp",description:"Beschrijving van het onderwerp",input:e.jsxs(x,{children:[e.jsx(a,{label:"Checkbox 1"},"1"),e.jsx(a,{label:"Checkbox 2"},"2"),e.jsx(a,{label:"Checkbox 3"},"3")]}),statusId:"status",errorMessageId:"error",descriptionId:"description"}},t={args:{label:"Onderwerp",description:"Beschrijving van het onderwerp",input:e.jsxs(b,{children:[e.jsx(o,{label:"Option 1",name:"radio-demo",value:"option1"}),e.jsx(o,{label:"Option 2",name:"radio-demo",value:"option2"}),e.jsx(o,{label:"Option 3",name:"radio-demo",value:"option3"})]}),statusId:"status",errorMessageId:"error",descriptionId:"description"}},i={args:{label:"Onderwerp",input:e.jsxs(b,{children:[e.jsx(o,{label:"Option 1",name:"radio-demo",value:"option1"}),e.jsx(o,{label:"Option 2",name:"radio-demo",value:"option2"}),e.jsx(o,{label:"Option 3",name:"radio-demo",value:"option3"})]}),statusId:"status",errorMessageId:"error",descriptionId:"description",errorMessage:"Dit is een foutmelding",invalid:!0}};var n,d,l;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(c=(p=t.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var u,F,g;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(g=(F=i.parameters)==null?void 0:F.docs)==null?void 0:g.source}}};const B=["Default","WithRadioGroup","Invalid"];export{r as Default,i as Invalid,t as WithRadioGroup,B as __namedExportsOrder,G as default};
