import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{k as l,U as m}from"./index.esm-CX03gi65.js";import{F as c}from"./index-CdeJ8Btr.js";import{U as s}from"./index-QEKeRpAx.js";/* empty css              */import"./clsx-B-dksMZM.js";import"./index-C5EOLjWw.js";import"./_commonjsHelpers-C932wzq6.js";import"./index-CgpWq_u8.js";const g=`# Rijkshuisstijl Community File Input component

Met de \`fileInput\` component kunnen gebruikers meerdere bestanden uploaden.

De component accepteert \`children\` en kan dus op verschillende manier worden gestyled.

Dit component heeft een callbackfunctie genaamd \`onFilesChange\`. Hiermee kan de parent component op de hoogte worden gesteld zodra er een nieuw bestand is toegevoegd.
`,B={title:"Rijkshuisstijl/FileInput",id:"rhc-fileInput",component:l,argTypes:{buttonAppearance:{control:{type:"select"},options:["primary-action-button","secondary-action-button","subtle-button"]}},parameters:{status:{type:"UNSTABLE"},docs:{description:{component:g}}}},t={args:{children:[],buttonText:"Bestanden kiezen",maxFileSizeInBytes:10485760,allowedFileTypes:".doc,.docx,.xlsx,.pdf,.zip,.jpg,.png,.bmp,.gif",fileSizeErrorMessage:"Dit bestand is groter dan 10 MB.",fileTypeErrorMessage:"Dit bestandstype wordt niet toegestaan."}},n={args:{children:[e.jsxs("div",{children:[e.jsx(c,{children:"Bestand toevoegen"}),e.jsxs(m,{children:[e.jsx(s,{children:"U kunt meerdere bestanden tegelijk toevoegen."}),e.jsx(s,{children:"Een bestand mag maximaal 10MB groot zijn."}),e.jsx(s,{children:"Toegestane bestandstypen: doc, docx, xslx, pdf, zip, jpg, png, bmp en gif."})]})]},"file-input-example-1")],buttonText:"Bestanden kiezen",maxFileSizeInBytes:10485760,allowedFileTypes:".doc,.docx,.xlsx,.pdf,.zip,.jpg,.png,.bmp,.gif",fileSizeErrorMessage:"Dit bestand is groter dan 10 MB.",fileTypeErrorMessage:"Dit bestandstype wordt niet toegestaan."}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    children: [],
    buttonText: 'Bestanden kiezen',
    maxFileSizeInBytes: 10_485_760,
    allowedFileTypes: '.doc,.docx,.xlsx,.pdf,.zip,.jpg,.png,.bmp,.gif',
    fileSizeErrorMessage: 'Dit bestand is groter dan 10 MB.',
    fileTypeErrorMessage: 'Dit bestandstype wordt niet toegestaan.'
  }
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var a,d,p;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    children: [<div key="file-input-example-1">
        <FormLabel>Bestand toevoegen</FormLabel>
        <UnorderedList>
          <UnorderedListItem>U kunt meerdere bestanden tegelijk toevoegen.</UnorderedListItem>
          <UnorderedListItem>Een bestand mag maximaal 10MB groot zijn.</UnorderedListItem>
          <UnorderedListItem>
            Toegestane bestandstypen: doc, docx, xslx, pdf, zip, jpg, png, bmp en gif.
          </UnorderedListItem>
        </UnorderedList>
      </div>],
    buttonText: 'Bestanden kiezen',
    maxFileSizeInBytes: 10_485_760,
    allowedFileTypes: '.doc,.docx,.xlsx,.pdf,.zip,.jpg,.png,.bmp,.gif',
    fileSizeErrorMessage: 'Dit bestand is groter dan 10 MB.',
    fileTypeErrorMessage: 'Dit bestandstype wordt niet toegestaan.'
  }
}`,...(p=(d=n.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const M=["Default","MetCustomElementenLijst"];export{t as Default,n as MetCustomElementenLijst,M as __namedExportsOrder,B as default};
