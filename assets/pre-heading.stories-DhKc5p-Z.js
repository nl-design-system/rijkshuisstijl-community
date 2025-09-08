import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{a4 as r,H as o}from"./index.esm-COnxOxZL.js";import{m as s}from"./merge-markdown-DQEtknEV.js";import"./index-BJzegUt9.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./clsx-B-dksMZM.js";const d=`<!-- @license CC0-1.0 -->

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
`,u={title:"Pre-heading",id:"rhc-pre-heading",component:r,argTypes:{},parameters:{status:{type:"UNSTABLE"},docs:{description:{component:s([d])}},componentOrigin:"Dit component is overgenomen van de Gemeente Utrecht, met HTML aanpassingen en styling van de Rijkshuisstijl Community.",github:"https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/PreHeading.tsx"}},e={name:"Default",args:{children:"Stap 1 van 8",heading:t.jsx(o,{level:2,children:"Introductie"})}};var n,a,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: 'Default',
  args: {
    children: 'Stap 1 van 8',
    heading: <Heading level={2}>Introductie</Heading>
  }
}`,...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const v=["Default"];export{e as Default,v as __namedExportsOrder,u as default};
