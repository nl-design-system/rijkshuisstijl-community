import{j as r}from"./jsx-runtime-BoFrXSaA.js";import{P as t}from"./index.esm-CrIQSLeP.js";import{H as o}from"./index-CBWbXZ7Z.js";import"./index-WI1YhYyJ.js";import"./_commonjsHelpers-Cpj98o6Y.js";/* empty css              */import"./clsx-B-dksMZM.js";import"./index-CmdtkvJm.js";import"./objectWithoutProperties-BJfzkg-c.js";import"./index-CnPPJwQN.js";const d=`<!-- @license CC0-1.0 -->

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
`,j={title:"Rijkshuisstijl/PreHeading",id:"rhc-pre-heading",component:t,argTypes:{},parameters:{status:{type:"UNSTABLE"},docs:{description:{component:d}}}},e={name:"Default",args:{children:"Stap 1 van 8",heading:r.jsx(o,{level:2,children:"Introductie"})}};var n,a,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: 'Default',
  args: {
    children: 'Stap 1 van 8',
    heading: <Heading level={2}>Introductie</Heading>
  }
}`,...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const H=["Default"];export{e as Default,H as __namedExportsOrder,j as default};
