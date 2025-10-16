import{j as r}from"./iframe-DlkZjL_t.js";import{m as i}from"./mergeMarkdown-wst0O_Fj.js";import{w as o}from"./index-2d5bd_11.js";import{H as s}from"./Heading-D-UzQO6X.js";import"./preload-helper-Dp1pzeXC.js";const d=`<!-- @license CC0-1.0 -->

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
`,h={title:"Page Header",id:"rhc-page-header",component:o,args:{children:r.jsx(s,{level:2,children:"Header Area"})},parameters:{docs:{description:{component:i([d])}},componentOrigin:"Dit component is overgenomen van de Gemeente Utrecht, voor dit component zijn (nog) geen specifieke design tokens gedefinieerd.",github:"https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/PageHeader.tsx"}},e={};var n,a,t;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(t=(a=e.parameters)==null?void 0:a.docs)==null?void 0:t.source}}};const u=["Default"];export{e as Default,u as __namedExportsOrder,h as default};
