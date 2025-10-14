import{j as n}from"./iframe-CLJWzYSL.js";import{m as h}from"./merge-markdown-D8Eslh9D.js";import{L as e,j as g,C as p}from"./index-GfqW3cb2.js";import{I as i}from"./Icon-jj8y1g7G.js";import"./preload-helper-Dp1pzeXC.js";import"./IconCheck-NNwnFqFE.js";const u=`<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community link list component

Links met een pijl als voorloopteken worden gebruikt aan het einde van een tekst. Ze verwijzen naar gerelateerde informatie over het onderwerp wat er in de voorafgaande tekst is besproken.

Links zonder pijl als voorloopteken kunnen ook worden gebruikt, deze zijn vaak terug te vinden in footers.

## Anatomie

- \`Link:\` Een interactief element waarmee de gebruiker naar een andere locatie kan navigeren.
- \`Link List:\` Een lijst van meerdere links die samen worden gepresenteerd.
- \`Pijl-icoon:\` Een visueel element dat optioneel kan worden toegevoegd aan de links om aan te geven dat ze verwijzen naar aanvullende inhoud.

## Usage

- In dit voorbeeld worden drie links weergegeven, elk met een pijl-icoon (chevron-right). De links kunnen ook zonder iconen worden weergegeven door de icon prop weg te laten.

\`\`\`jsx
import { LinkList, LinkListLink, Icon } from '@rijkshuisstijl-community/components-react';

<LinkList>
  <LinkListLink href="#" icon={<Icon icon="chevron-right" />}>
    Learn about <i lang="fr">joi de vivre</i>, an essential foreign phrase!
  </LinkListLink>
  <LinkListLink href="#" icon={<Icon icon="chevron-right" />}>
    Link 2
  </LinkListLink>
  <LinkListLink href="#" icon={<Icon icon="chevron-right" />}>
    Link 3
  </LinkListLink>
</LinkList>;
\`\`\`

## Voorbeelden met verkeerde implementatie

- Link zonder \`href\` attribuut

\`\`\`jsx
<LinkList>
  <LinkListLink>Invalid Link without href</LinkListLink>
</LinkList>
\`\`\`

- Geen gebruik van LinkList voor de lijst

\`\`\`jsx
<LinkListLink href="#">Link 1</LinkListLink>
<LinkListLink href="#">Link 2</LinkListLink>
\`\`\`
`,s=({hasIcons:r=!0,...m})=>n.jsxs(g,{...m,children:[n.jsxs(e,{href:"#",icon:r?n.jsx(i,{icon:"chevron-right"}):void 0,children:["Learn about ",n.jsx("i",{lang:"fr",children:"joi de vivre"}),", an essential foreign phrase!"]}),n.jsx(e,{href:"#",icon:r?n.jsx(i,{icon:"chevron-right"}):void 0,children:"Link 2"}),n.jsx(e,{href:"#",icon:r?n.jsx(i,{icon:"chevron-right"}):void 0,children:"Link 3"})]}),b={title:"Link List",id:"rhc-link-list",component:s,args:{children:[n.jsxs(e,{href:"#",icon:n.jsx(i,{icon:"chevron-right"}),children:["Learn about ",n.jsx("i",{lang:"fr",children:"joi de vivre"}),", an essential foreign phrase!"]}),n.jsx(e,{href:"#",icon:n.jsx(i,{icon:"chevron-right"}),children:"Link 2"}),n.jsx(e,{href:"#",icon:n.jsx(i,{icon:"chevron-right"}),children:"Link 3"})]},argTypes:{hasIcons:{description:"Whether the links have an icon",type:{name:"boolean"},table:{category:"Demo"}}},parameters:{status:{type:"UNSTABLE"},docs:{description:{component:h([u])}},figma:"https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?node-id=15853-939&p=f&t=vEy2lEagbZuewco0-0",github:"https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/LinkList.tsx",nldesignsystem:"https://nldesignsystem.nl/link-list",componentOrigin:"Dit component is overgenomen van de Gemeente Utrecht, met styling van de Rijkshuisstijl Community."},render:s},o={},t={render:r=>n.jsx(p,{children:s(r)})};var a,c,L;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(L=(c=o.parameters)==null?void 0:c.docs)==null?void 0:L.source}}};var k,d,l;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => <ColumnLayout>{LinkListStory(args)}</ColumnLayout>
}`,...(l=(d=t.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const C=["Default","ColumnsLayout"];export{t as ColumnsLayout,o as Default,C as __namedExportsOrder,b as default};
