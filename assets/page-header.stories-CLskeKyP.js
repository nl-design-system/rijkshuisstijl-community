import{j as r}from"./jsx-runtime-CLpGMVip.js";import{H as i}from"./index.esm-Da36BAWm.js";import{m as o}from"./merge-markdown-BtgmYwh_.js";import{P as s}from"./index-DqXW3Q7L.js";/* empty css              */import"./clsx-B-dksMZM.js";import"./objectWithoutProperties-CbCxjZzm.js";import"./index-DAIO8Scy.js";import"./_commonjsHelpers-C932wzq6.js";import"./index-Be-aV6DI.js";import"./index-D5-rbeG3.js";const d=`<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community Page Header component

Dit is een Utrecht component met Rijkshuisstijl Community styling

[Utrecht Page Header](https://nl-design-system.github.io/utrecht/storybook/?path=/docs/react_react-page-header--docs)  
[NL Design System Page Header](https://nldesignsystem.nl/page-header)

De page header bevat vaak de volgende onderdelen:

- Logo (met link naar de homepage)
- Navigatie
- Zoekveld
- Kruimelpad-navigatie
- Eventueel een melding met een waarschuwing, bijvoorbeeld over een actuele storing.
- Cookie banner.

Het logo maakt duidelijk wie verantwoordelijk is voor de website en geeft daarmee belangrijke context voor de rest van de pagina.

## HTML

Gebruik het HTML \`<header>\` element, zodat het automatisch een \`banner\` landmark krijgt.

## Relevante WCAG eisen

- [WCAG eis 1.3.1](https://www.w3.org/TR/WCAG21/#info-and-relationships): plaats de header in een \`banner\` landmark, door het \`<header>\` element te gebruiken
- [WCAG eis 1.3.2](https://www.w3.org/TR/WCAG21/#meaningful-sequence): plaats de header aan het begin van pagina, maar na de _skip links_. Zo is het gelijk duidelijk wie verantwoordelijk is voor de pagina die er op volgt.

## Usage

\`\`\`tsx
import { Heading, PageHeader } from '@rijkshuisstijl-community/components-react';

<PageHeader>
    <Heading level={2}>Header Area</Heading>
<PageHeader/>
\`\`\`
`,w={title:"Rijkshuisstijl/PageHeader",id:"rhc-page-header",component:s,args:{children:r.jsx(i,{level:2,children:"Header Area"})},parameters:{docs:{description:{component:o([d])}},componentOrigin:"Dit component is overgenomen van de Gemeente Utrecht, voor dit component zijn (nog) geen specifieke design tokens gedefinieerd."}},e={};var n,a,t;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(t=(a=e.parameters)==null?void 0:a.docs)==null?void 0:t.source}}};const b=["Default"];export{e as Default,b as __namedExportsOrder,w as default};
