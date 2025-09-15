import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{k as S,q as U,K as F}from"./index-Br7sdzbe.js";import{m as N}from"./merge-markdown-DQEtknEV.js";import{r as j}from"./index-BJzegUt9.js";import"./Button-C8B856yT.js";import{c as C}from"./clsx-B-dksMZM.js";import{A}from"./Alert-DV-Qs4c8.js";import{I as R}from"./Icon-DwW4mLi4.js";import{L as P}from"./Link-b8deH1hb.js";import{P as L}from"./paragraph-BPMh_CvG.js";import{U as O}from"./UnorderedList-C6bz7TMT.js";import"./objectWithoutProperties-CbCxjZzm.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./IconCheck-BO4gZjWf.js";const v=({file:r,onDelete:x,maxFileSizeInBytes:y,allowedFileTypes:b,fileSizeErrorMessage:d,fileTypeErrorMessage:h})=>{const c=n=>n.split("/")[1];let a=!1,i="";const o=n=>n.size<=y||(i=d,a=!0,!1),s=n=>b.trim().split(",").map(t=>t.trim()).includes(`.${c(n.type)}`)||(i=h,a=!0,!1),p=n=>{const l=n/1024,t=l/1024;return t>=1?`${t.toFixed(1)} MB`:`${l.toFixed(1)} KB`};return e.jsxs("div",{className:C("rhc-file",{"rhc-file--error":o(r)===!1||s(r)===!1}),children:[e.jsxs("div",{className:"rhc-file__inner-container",children:[e.jsxs("div",{className:"rhc-file__inner-container__sub",children:[e.jsx(P,{href:URL.createObjectURL(r),target:"_blank",children:e.jsx("span",{className:"rhc-file__name",children:r.name})}),e.jsxs("span",{className:"rhc-file__subtitle",children:["(",c(r.type),", ",p(r.size),")"]})]}),e.jsx("span",{children:e.jsxs(S,{appearance:"subtle-button",onClick:()=>x(r),children:[e.jsx(R,{icon:"verwijderen"}),"Verwijder"]})})]}),a&&e.jsx(A,{type:"error",children:e.jsx(L,{children:i})})]})};v.__docgenInfo={description:"",methods:[],displayName:"File",props:{file:{required:!0,tsType:{name:"File"},description:""},onDelete:{required:!0,tsType:{name:"any"},description:""},maxFileSizeInBytes:{required:!0,tsType:{name:"number"},description:""},allowedFileTypes:{required:!0,tsType:{name:"string"},description:""},fileSizeErrorMessage:{required:!0,tsType:{name:"string"},description:""},fileTypeErrorMessage:{required:!0,tsType:{name:"string"},description:""}}};const T=({ref:r,children:x,buttonText:y,maxFileSizeInBytes:b,allowedFileTypes:d,buttonAppearance:h,fileSizeErrorMessage:c,fileTypeErrorMessage:a,onValueChange:i,defaultFiles:o})=>{const[s,p]=j.useState([]),n=j.useRef(null),l=t=>{if(t){const m=[...s,...Array.from(t)];p(m),i&&i(m)}};return j.useEffect(()=>{o&&p(o)},[o]),e.jsxs("div",{className:"rhc-file-input",ref:r,children:[x,e.jsx("input",{multiple:!0,accept:d,ref:n,style:{display:"none"},type:"file",onChange:t=>{l(t.target.files)}}),e.jsxs("div",{className:"rhc-file-input__button-feedback-container",children:[e.jsx(S,{appearance:h??"secondary-action-button",onClick:()=>{var t;return(t=n==null?void 0:n.current)==null?void 0:t.click()},children:y}),s.length===0&&e.jsx(L,{className:"rhc-file-input__feedback",children:"Geen bestand gekozen"})]}),e.jsx("div",{className:"rhc-file-input__files-container",children:s.map(t=>e.jsx(v,{allowedFileTypes:d,file:t,fileSizeErrorMessage:c,fileTypeErrorMessage:a,maxFileSizeInBytes:b,onDelete:m=>p(s.filter(q=>q!==m))},s.indexOf(t)))})]})};T.displayName="FileInput";T.__docgenInfo={description:"",methods:[],displayName:"FileInput",props:{ref:{required:!0,tsType:{name:"Ref",elements:[{name:"HTMLInputElement"}],raw:"Ref<HTMLInputElement>"},description:""},buttonText:{required:!0,tsType:{name:"string"},description:""},buttonAppearance:{required:!1,tsType:{name:"ButtonProps['appearance']",raw:"ButtonProps['appearance']"},description:""},maxFileSizeInBytes:{required:!0,tsType:{name:"number"},description:""},allowedFileTypes:{required:!0,tsType:{name:"string"},description:""},fileSizeErrorMessage:{required:!0,tsType:{name:"string"},description:""},fileTypeErrorMessage:{required:!0,tsType:{name:"string"},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(callbackFiles: File[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"File"}],raw:"File[]"},name:"callbackFiles"}],return:{name:"void"}}},description:""},defaultFiles:{required:!1,tsType:{name:"Array",elements:[{name:"File"}],raw:"File[]"},description:""}},composes:["Omit"]};const $=`# Rijkshuisstijl Community File Input component

Met de \`fileInput\` component kunnen gebruikers meerdere bestanden uploaden.

De component accepteert \`children\` en kan dus op verschillende manier worden gestyled.

Dit component heeft een callbackfunctie genaamd \`onFilesChange\`. Hiermee kan de parent component op de hoogte worden gesteld zodra er een nieuw bestand is toegevoegd.
`,se={title:"File Input",id:"rhc-fileInput",component:T,argTypes:{buttonAppearance:{control:{type:"select"},options:["primary-action-button","secondary-action-button","subtle-button"]}},parameters:{status:{type:"UNSTABLE"},docs:{description:{component:N([$])}},componentOrigin:"Dit component is volledig ontwikkeld door de Rijkshuisstijl Community.",github:"https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/FileInput.tsx"}},u={args:{children:[],buttonText:"Bestanden kiezen",maxFileSizeInBytes:10485760,allowedFileTypes:".doc,.docx,.xlsx,.pdf,.zip,.jpg,.png,.bmp,.gif",fileSizeErrorMessage:"Dit bestand is groter dan 10 MB.",fileTypeErrorMessage:"Dit bestandstype wordt niet toegestaan."}},g={args:{children:[e.jsxs("div",{children:[e.jsx(U,{children:"Bestand toevoegen"}),e.jsxs(O,{children:[e.jsx(F,{children:"U kunt meerdere bestanden tegelijk toevoegen."}),e.jsx(F,{children:"Een bestand mag maximaal 10MB groot zijn."}),e.jsx(F,{children:"Toegestane bestandstypen: doc, docx, xslx, pdf, zip, jpg, png, bmp en gif."})]})]},"file-input-example-1")],buttonText:"Bestanden kiezen",maxFileSizeInBytes:10485760,allowedFileTypes:".doc,.docx,.xlsx,.pdf,.zip,.jpg,.png,.bmp,.gif",fileSizeErrorMessage:"Dit bestand is groter dan 10 MB.",fileTypeErrorMessage:"Dit bestandstype wordt niet toegestaan."}},f={args:{buttonText:"Bestanden kiezen",maxFileSizeInBytes:10485760,allowedFileTypes:".doc,.docx,.xlsx,.pdf,.zip,.jpg,.png,.bmp,.gif",fileSizeErrorMessage:"Dit bestand is groter dan 10 MB.",fileTypeErrorMessage:"Dit bestandstype wordt niet toegestaan.",defaultFiles:[new File(["Example content for PDF file"],"example.pdf",{type:"application/pdf"}),new File(["Example content for a text file"],"example.txt",{type:"text/plain"})]}};var k,z,M;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    children: [],
    buttonText: 'Bestanden kiezen',
    maxFileSizeInBytes: 10_485_760,
    allowedFileTypes: '.doc,.docx,.xlsx,.pdf,.zip,.jpg,.png,.bmp,.gif',
    fileSizeErrorMessage: 'Dit bestand is groter dan 10 MB.',
    fileTypeErrorMessage: 'Dit bestandstype wordt niet toegestaan.'
  }
}`,...(M=(z=u.parameters)==null?void 0:z.docs)==null?void 0:M.source}}};var B,E,I;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(I=(E=g.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var _,w,D;f.parameters={...f.parameters,docs:{...(_=f.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    buttonText: 'Bestanden kiezen',
    maxFileSizeInBytes: 10_485_760,
    allowedFileTypes: '.doc,.docx,.xlsx,.pdf,.zip,.jpg,.png,.bmp,.gif',
    fileSizeErrorMessage: 'Dit bestand is groter dan 10 MB.',
    fileTypeErrorMessage: 'Dit bestandstype wordt niet toegestaan.',
    defaultFiles: [new File(['Example content for PDF file'], 'example.pdf', {
      type: 'application/pdf'
    }), new File(['Example content for a text file'], 'example.txt', {
      type: 'text/plain'
    })]
  }
}`,...(D=(w=f.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};const ie=["Default","MetCustomElementenLijst","DefaultFiles"];export{u as Default,f as DefaultFiles,g as MetCustomElementenLijst,ie as __namedExportsOrder,se as default};
