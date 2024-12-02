import{j as e}from"./jsx-runtime-8Jttx2DA.js";import{j as z,U as h}from"./index.esm-Tj8qSLCD.js";import{h as I,U as n,H as B,P as j,A as L}from"./index-CgFCBr0q.js";import"./index-BzhKaBtb.js";import"./_commonjsHelpers-CqkleIqs.js";/* empty css              */import"./clsx-B-dksMZM.js";import"./index-DYgQ_QFa.js";import"./objectWithoutProperties-BJfzkg-c.js";import"./index-BhpIufNd.js";const M=`# Rijkshuisstijl Community File Input component

Met de \`fileInput\` component kunnen gebruikers meerdere bestanden uploaden.

De component accepteert \`children\` en kan dus op verschillende manier worden gestyled.

Dit component heeft een callbackfunctie genaamd \`onFilesChange\`. Hiermee kan de parent component op de hoogte worden gesteld zodra er een nieuw bestand is toegevoegd.
`,P={title:"Rijkshuisstijl/FileInput",id:"rhc-fileInput",component:z,argTypes:{buttonAppearance:{control:{type:"select"},options:["primary-action-button","secondary-action-button","subtle-button"]}},parameters:{status:{type:"UNSTABLE"},docs:{description:{component:M}}}},t={args:{children:[],buttonText:"Bestanden kiezen",maxFileSizeInBytes:10485760,allowedFileTypes:".doc,.docx,.xlsx,.pdf,.zip,.jpg,.png,.bmp,.gif",fileSizeErrorMessage:"Dit bestand is groter dan 10 MB.",fileTypeErrorMessage:"Dit bestandstype wordt niet toegestaan."}},r={args:{children:[e.jsxs("div",{children:[e.jsx(I,{children:"Bestand toevoegen"}),e.jsxs(h,{children:[e.jsx(n,{children:"U kunt meerdere bestanden tegelijk toevoegen."}),e.jsx(n,{children:"Een bestand mag maximaal 10MB groot zijn."}),e.jsx(n,{children:"Toegestane bestandstypen: doc, docx, xslx, pdf, zip, jpg, png, bmp en gif."})]})]})],buttonText:"Bestanden kiezen",maxFileSizeInBytes:10485760,allowedFileTypes:".doc,.docx,.xlsx,.pdf,.zip,.jpg,.png,.bmp,.gif",fileSizeErrorMessage:"Dit bestand is groter dan 10 MB.",fileTypeErrorMessage:"Dit bestandstype wordt niet toegestaan."}},s={args:{children:[e.jsxs("div",{children:[e.jsx(B,{level:2,children:"Bestanden uploaden"}),e.jsx(j,{children:"Hier kan je meerdere bestanden uploaden. Bestanden mogen niet groter dan 10 MB zijn."}),e.jsx(L,{appearance:"",sections:[{label:"Bestandstypen die worden toegestaan.",body:[e.jsxs(h,{children:[e.jsx(n,{children:".doc"}),e.jsx(n,{children:".docx"}),e.jsx(n,{children:".xlsx"}),e.jsx(n,{children:".pdf"}),e.jsx(n,{children:".zip"}),e.jsx(n,{children:".jpg"}),e.jsx(n,{children:".png"}),e.jsx(n,{children:".bmp"}),e.jsx(n,{children:".gif"})]})]}]})]})],buttonText:"Bestanden kiezen",maxFileSizeInBytes:10485760,allowedFileTypes:".doc,.docx,.xlsx,.pdf,.zip,.jpg,.png,.bmp,.gif",fileSizeErrorMessage:"Dit bestand is groter dan 10 MB.",fileTypeErrorMessage:"Dit bestandstype wordt niet toegestaan."}},o={args:{children:[e.jsx(j,{children:"Dit component heeft een callbackfunctie genaamd 'onFilesChange'. Hiermee kan de parent component op de hoogte worden gesteld zodra er een nieuw bestand is toegevoegd. Zie de console voor de waarden."})],buttonText:"Bestanden kiezen",maxFileSizeInBytes:10485760,allowedFileTypes:".doc,.docx,.xlsx,.pdf,.zip,.jpg,.png,.bmp,.gif",fileSizeErrorMessage:"Dit bestand is groter dan 10 MB.",fileTypeErrorMessage:"Dit bestandstype wordt niet toegestaan.",onValueChange:y=>{console.log("Callback bestanden: ",y)}}};var d,a,i;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: [],
    buttonText: 'Bestanden kiezen',
    maxFileSizeInBytes: 10_485_760,
    allowedFileTypes: '.doc,.docx,.xlsx,.pdf,.zip,.jpg,.png,.bmp,.gif',
    fileSizeErrorMessage: 'Dit bestand is groter dan 10 MB.',
    fileTypeErrorMessage: 'Dit bestandstype wordt niet toegestaan.'
  }
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var p,l,c;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var g,m,x;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: [<div>
        <Heading level={2}>Bestanden uploaden</Heading>
        <Paragraph>Hier kan je meerdere bestanden uploaden. Bestanden mogen niet groter dan 10 MB zijn.</Paragraph>
        <AccordionProvider appearance="" sections={[{
        label: 'Bestandstypen die worden toegestaan.',
        body: [<UnorderedList>
                  <UnorderedListItem>.doc</UnorderedListItem>
                  <UnorderedListItem>.docx</UnorderedListItem>
                  <UnorderedListItem>.xlsx</UnorderedListItem>
                  <UnorderedListItem>.pdf</UnorderedListItem>
                  <UnorderedListItem>.zip</UnorderedListItem>
                  <UnorderedListItem>.jpg</UnorderedListItem>
                  <UnorderedListItem>.png</UnorderedListItem>
                  <UnorderedListItem>.bmp</UnorderedListItem>
                  <UnorderedListItem>.gif</UnorderedListItem>
                </UnorderedList>]
      }]} />
      </div>],
    buttonText: 'Bestanden kiezen',
    maxFileSizeInBytes: 10_485_760,
    allowedFileTypes: '.doc,.docx,.xlsx,.pdf,.zip,.jpg,.png,.bmp,.gif',
    fileSizeErrorMessage: 'Dit bestand is groter dan 10 MB.',
    fileTypeErrorMessage: 'Dit bestandstype wordt niet toegestaan.'
  }
}`,...(x=(m=s.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var b,u,f;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    children: [<Paragraph>
        Dit component heeft een callbackfunctie genaamd &apos;onFilesChange&apos;. Hiermee kan de parent component op de
        hoogte worden gesteld zodra er een nieuw bestand is toegevoegd. Zie de console voor de waarden.
      </Paragraph>],
    buttonText: 'Bestanden kiezen',
    maxFileSizeInBytes: 10_485_760,
    allowedFileTypes: '.doc,.docx,.xlsx,.pdf,.zip,.jpg,.png,.bmp,.gif',
    fileSizeErrorMessage: 'Dit bestand is groter dan 10 MB.',
    fileTypeErrorMessage: 'Dit bestandstype wordt niet toegestaan.',
    onValueChange: (files: File[]) => {
      console.log('Callback bestanden: ', files);
    }
  }
}`,...(f=(u=o.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const _=["Default","MetCustomElementenLijst","MetCustomElementenParagraafEnAccordion","MetCallback"];export{t as Default,o as MetCallback,r as MetCustomElementenLijst,s as MetCustomElementenParagraafEnAccordion,_ as __namedExportsOrder,P as default};