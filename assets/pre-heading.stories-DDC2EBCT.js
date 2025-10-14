import{j as n}from"./iframe-CLJWzYSL.js";import{m}from"./merge-markdown-D8Eslh9D.js";import{V as p}from"./index-GfqW3cb2.js";import{H as c}from"./Heading-DtKKvk0f.js";import"./preload-helper-Dp1pzeXC.js";const a=({ref:s,children:o,heading:d,...g})=>n.jsxs("div",{className:"rhc-heading-container",...g,children:[d,n.jsx(p,{className:"rhc-pre-heading",ref:s,children:o})]});a.displayName="PreHeading";a.__docgenInfo={description:"",methods:[],displayName:"PreHeading",props:{heading:{required:!0,tsType:{name:"ReactElement",elements:[{name:"HeadingProps"}],raw:"ReactElement<HeadingProps>"},description:""},ref:{required:!1,tsType:{name:"Ref",elements:[{name:"HTMLParagraphElement"}],raw:"Ref<HTMLParagraphElement>"},description:""}},composes:["UtrechtPreHeadingProps"]};const h=`<!-- @license CC0-1.0 -->

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
`,j={title:"Pre-heading",id:"rhc-pre-heading",component:a,argTypes:{},parameters:{status:{type:"UNSTABLE"},docs:{description:{component:m([h])}},componentOrigin:"Dit component is overgenomen van de Gemeente Utrecht, met HTML aanpassingen en styling van de Rijkshuisstijl Community.",github:"https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/PreHeading.tsx"}},e={args:{children:"Stap 1 van 8",heading:n.jsx(c,{level:2,children:"Introductie"})}};var i,r,t;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    children: 'Stap 1 van 8',
    heading: <Heading level={2}>Introductie</Heading>
  }
}`,...(t=(r=e.parameters)==null?void 0:r.docs)==null?void 0:t.source}}};const P=["Default"];export{e as Default,P as __namedExportsOrder,j as default};
