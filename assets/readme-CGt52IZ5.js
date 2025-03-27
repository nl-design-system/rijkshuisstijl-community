import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-DKQj2TAN.js";import"./index-CkPHbSBR.js";import{c as o,e as m}from"./index-C1Qv1cea.js";import"./index-F0AouRE7.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./preview-Hka6HMIa.js";import"./iframe-DhtfXHXg.js";import"./DocsRenderer-CFRXHY34-DqPfpPPr.js";import"./react-18-CgWIHopg.js";import"./index-BOv6M0Sq.js";import"./index-7AEHQTxF.js";import"./index-CXQShRbs.js";const r=`<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community Componenten - Twig

_Dit project wordt **niet** gesteund door het Ministerie van Algemene Zaken._

**Het toepassen van design-elementen uit dit project is strikt verboden voor organisaties die geen deel uitmaken van de
centrale overheid van Nederland.**

Deze package is onderdeel van het [Rijkshuisstijl Community](https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/README.md) project.

## Aan de slag met Twig-componenten

Om de Twig-componenten van de Rijkshuisstijl-community te gebruiken, installeer je het [components-twig npm package](https://www.npmjs.com/package/@rijkshuisstijl-community/components-twig).

\`\`\`bash
npm install --save-dev @rijkshuisstijl-community/components-twig
\`\`\`

Om deze componenten te gebruiken, kun je ze importeren in jouw omgeving met behulp van de \`@rhc\` namespace.

\`\`\`twig
{% "@rhc/OrderedListItem.twig %}
\`\`\`

### Thema toepassen

De Twig-componenten hebben geen eigen styling. Om de Rijkshuisstijl aan je project toe te voegen, installeer je het [design-tokens npm package](https://www.npmjs.com/package/@rijkshuisstijl-community/design-tokens) en het [components-css npm package](https://www.npmjs.com/package/@rijkshuisstijl-community/components-css).

\`\`\`bash
npm install --save-dev @rijkshuisstijl-community/design-tokens @rijkshuisstijl-community/components-css
\`\`\`

Dit pakket bevat de CSS-variabelen van het design systeem. Importeer het \`index.css\`-bestand uit de \`dist\` map van het
pakket, en omring het deel van je applicatie waar je het thema wilt toepassen met de Rijkshuisstijl-thema: \`rhc-theme\`.

\`\`\`scss
@import '@rijkshuisstijl-community/design-tokens/dist/index.css'; // design tokens importeren
@import '@rijkshuisstijl-community/components-css/dist/index.css'; // css importeren
\`\`\`

Bekijk de [packages/font/README.md](https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/font/README.md) voor de meerdere manieren om de lettertypen te installeren voor jouw project.
`;function i(n){return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Twig Components/README"}),`
`,e.jsx(m,{children:r})]})}function b(n={}){const{wrapper:t}={...s(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i()}export{b as default};
