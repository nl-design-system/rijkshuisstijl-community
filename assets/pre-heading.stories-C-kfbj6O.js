import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{m as p}from"./merge-markdown-DQEtknEV.js";import{V as g}from"./index-Br7sdzbe.js";import{H as c}from"./Heading-CljAu67s.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./objectWithoutProperties-CbCxjZzm.js";import"./index-BJzegUt9.js";import"./clsx-B-dksMZM.js";const a=({ref:o,children:s,heading:d,...m})=>n.jsxs("div",{className:"rhc-heading-container",...m,children:[d,n.jsx(g,{className:"rhc-pre-heading",ref:o,children:s})]});a.displayName="PreHeading";a.__docgenInfo={description:"",methods:[],displayName:"PreHeading",props:{heading:{required:!0,tsType:{name:"ReactElement",elements:[{name:"HeadingProps"}],raw:"ReactElement<HeadingProps>"},description:""},ref:{required:!1,tsType:{name:"Ref",elements:[{name:"HTMLParagraphElement"}],raw:"Ref<HTMLParagraphElement>"},description:""}},composes:["UtrechtPreHeadingProps"]};const l=`<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community pre-heading component

## Gebruik en toegankelijkheid van pre-headings

- Gebruik altijd maar één heading in combinatie met een pre-heading.
- Gebruik alleen een pre-heading als er content onder staat.
- Gebruikers van screenreaders gebruiken headings en pre-headings vaak om een indruk te krijgen van de structuur van een pagina.
- Gebruik pre-headings niet voor de opmaak maar alleen voor de tekstuele hiërarchie van de content.
- Beperk het aantal pre-headings op een pagina.

### De pre-heading component beschikt over property \`heading\`

**heading (verplicht)**
Dit verwijst naar het Heading component. Dit component is nodig om vervolgens de pre-heading visueel boven te tonen. In de HTML zal deze nog steeds onder de heading getoond zijn.

**children (verplicht)**
Dit verwijst naar het text component dat als child kan worden meegegeven aan de PreHeading. Dit is de text die visueel getoond gaat worden boven de heading.

## Usage

\`\`\`tsx
import { PreHeading } from '@rijkshuisstijl-community/components-react';

<PreHeading heading={<Heading level={1}>Introductie</Heading>}>Stap 1 van 8</PreHeading>;
\`\`\`

---
`,b={title:"Pre-heading",id:"rhc-pre-heading",component:a,argTypes:{},parameters:{status:{type:"UNSTABLE"},docs:{description:{component:p([l])}},componentOrigin:"Dit component is overgenomen van de Gemeente Utrecht, met HTML aanpassingen en styling van de Rijkshuisstijl Community.",github:"https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/PreHeading.tsx"}},e={name:"Default",args:{children:"Stap 1 van 8",heading:n.jsx(c,{level:2,children:"Introductie"})}};var i,r,t;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: 'Default',
  args: {
    children: 'Stap 1 van 8',
    heading: <Heading level={2}>Introductie</Heading>
  }
}`,...(t=(r=e.parameters)==null?void 0:r.docs)==null?void 0:t.source}}};const y=["Default"];export{e as Default,y as __namedExportsOrder,b as default};
