import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{L as r,n as i}from"./index.esm-BxvOjgYZ.js";import{m as o}from"./merge-markdown-DQEtknEV.js";import"./index-BJzegUt9.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./clsx-B-dksMZM.js";const d=`<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community link list card component

De **LinkListCard** component biedt een manier om een **card** weer te geven met een heading en een collectie van links. Dit component accepteert twee verschillende props: \`headingLevel\`, \`heading\`

- **\`headingLevel\`** (\`number\`)
  Dit bepaalt het niveau van de heading, vergelijkbaar met HTML heading-tags

- **\`heading\`** (\`string\`)
  De tekst die weergegeven wordt binnen de heading.

## Anatomie

LinkListCard-component bestaat uit de volgende subcomponenten:

- \`Heading\` Voor de weergave van de heading op basis van het doorgegeven niveau.
- \`LinkList\` Een container die de links groepeert.
- \`LinkListLink\` Voor elke individuele link, inclusief een standaardicoon (of je eigen linkcomponenten).

Gebruik deze component om op een nette manier een kaart weer te geven met een overzicht van links en een heading.

## Usage

\`\`\`tsx
import { LinkListCard } from '@rijkshuisstijl-community/components-react';

<LinkListCard headingLevel={3} heading="Heading Text">
  {children}
</LinkListCard>;
\`\`\`

## Voorbeelden met verkeerde implementatie

- Geen heading meegegeven

\`\`\`jsx
<LinkListCard headingLevel={3}>
  <LinkListLink href="#">Link zonder heading</LinkListLink>
</LinkListCard>
\`\`\`

- Geen children meegegeven

\`\`\`jsx
<LinkListCard headingLevel={3} heading="Lege lijst" />
\`\`\`
`,h={title:"Rijkshuisstijl/Link List Card",id:"rijkshuisstijl-link-list-card",component:r,argTypes:{headingLevel:{description:"Link List Card heading level",control:{type:"select"},options:[1,2,3,4,5,6],table:{category:"Demo"}},heading:{description:"Heading Text - used in heading slot",type:{name:"string"},table:{category:"Demo"}}},parameters:{status:{type:"STABLE"},docs:{description:{component:o([d])}},figma:"https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?node-id=1195-4201&t=n1djYpmvDCKmAEUi-0",github:"https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/LinkListCard.tsx",componentOrigin:"Dit component is volledig ontwikkeld door de Rijkshuisstijl Community."}},e={args:{headingLevel:2,heading:"Heading",children:[n.jsx(i,{href:"#",children:"Link 1"},"link-1"),n.jsx(i,{href:"#",children:"Link 2"},"link-2"),n.jsx(i,{href:"#",children:"Link 3"},"link-3")]}};var t,s,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    headingLevel: 2,
    heading: 'Heading',
    children: [<LinkListLink href="#" key="link-1">
        Link 1
      </LinkListLink>, <LinkListLink href="#" key="link-2">
        Link 2
      </LinkListLink>, <LinkListLink href="#" key="link-3">
        Link 3
      </LinkListLink>]
  }
}`,...(a=(s=e.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const p=["Default"];export{e as Default,p as __namedExportsOrder,h as default};
