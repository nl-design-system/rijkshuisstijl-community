import{j as e}from"./jsx-runtime-8Jttx2DA.js";import{j as l,U as m}from"./index.esm-Dsfsjsjk.js";import{F as c}from"./index-DzH_UXgP.js";import{U as s}from"./index-B9EZEqMY.js";import"./index-BzhKaBtb.js";import"./_commonjsHelpers-CqkleIqs.js";/* empty css              */import"./clsx-B-dksMZM.js";import"./index-DYgQ_QFa.js";import"./objectWithoutProperties-BJfzkg-c.js";import"./index-BhpIufNd.js";const g=`# Rijkshuisstijl Community File Input component

Met de \`fileInput\` component kunnen gebruikers meerdere bestanden uploaden.

De component accepteert \`children\` en kan dus op verschillende manier worden gestyled.

Dit component heeft een callbackfunctie genaamd \`onFilesChange\`. Hiermee kan de parent component op de hoogte worden gesteld zodra er een nieuw bestand is toegevoegd.
`,I={title:"Rijkshuisstijl/FileInput",id:"rhc-fileInput",component:l,argTypes:{buttonAppearance:{control:{type:"select"},options:["primary-action-button","secondary-action-button","subtle-button"]}},parameters:{status:{type:"UNSTABLE"},docs:{description:{component:g}}}},n={args:{children:[],buttonText:"Bestanden kiezen",maxFileSizeInBytes:10485760,allowedFileTypes:".doc,.docx,.xlsx,.pdf,.zip,.jpg,.png,.bmp,.gif",fileSizeErrorMessage:"Dit bestand is groter dan 10 MB.",fileTypeErrorMessage:"Dit bestandstype wordt niet toegestaan."}},t={args:{children:[e.jsxs("div",{children:[e.jsx(c,{children:"Bestand toevoegen"}),e.jsxs(m,{children:[e.jsx(s,{children:"U kunt meerdere bestanden tegelijk toevoegen."}),e.jsx(s,{children:"Een bestand mag maximaal 10MB groot zijn."}),e.jsx(s,{children:"Toegestane bestandstypen: doc, docx, xslx, pdf, zip, jpg, png, bmp en gif."})]})]})],buttonText:"Bestanden kiezen",maxFileSizeInBytes:10485760,allowedFileTypes:".doc,.docx,.xlsx,.pdf,.zip,.jpg,.png,.bmp,.gif",fileSizeErrorMessage:"Dit bestand is groter dan 10 MB.",fileTypeErrorMessage:"Dit bestandstype wordt niet toegestaan."}};var r,o,i;n.parameters={...n.parameters,docs:{...(r=n.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    children: [],
    buttonText: 'Bestanden kiezen',
    maxFileSizeInBytes: 10_485_760,
    allowedFileTypes: '.doc,.docx,.xlsx,.pdf,.zip,.jpg,.png,.bmp,.gif',
    fileSizeErrorMessage: 'Dit bestand is groter dan 10 MB.',
    fileTypeErrorMessage: 'Dit bestandstype wordt niet toegestaan.'
  }
}`,...(i=(o=n.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var a,d,p;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    children: [<div>
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
}`,...(p=(d=t.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const L=["Default","MetCustomElementenLijst"];export{n as Default,t as MetCustomElementenLijst,L as __namedExportsOrder,I as default};
