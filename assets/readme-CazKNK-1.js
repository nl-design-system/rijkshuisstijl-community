import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-DKQj2TAN.js";import"./index-ByhtRKOe.js";import{c as o,e as m}from"./index-BVVbwzzM.js";import"./index-F0AouRE7.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./preview-DzCgV6wx.js";import"./iframe-B8TnmOwn.js";import"./DocsRenderer-CFRXHY34-CP9l8we1.js";import"./react-18-CgWIHopg.js";import"./index-BOv6M0Sq.js";import"./index-7AEHQTxF.js";import"./index-CXQShRbs.js";const r=`<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community Componenten - Web Components

_Dit project wordt **niet** gesteund door het Ministerie van Algemene Zaken._

**Het toepassen van design-elementen uit dit project is strikt verboden voor organisaties die geen deel uitmaken van de
centrale overheid van Nederland.**

Deze package is onderdeel van het [Rijkshuisstijl Community](https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/README.md) project.

## Aan de slag met Web Components

Om de Web Components van de Rijkshuisstijl-community te gebruiken, installeer je het [web-components npm package](https://www.npmjs.com/package/@rijkshuisstijl-community/web-components).

\`\`\`bash
npm install --save-dev @rijkshuisstijl-community/web-components
\`\`\`

Dit installeert de Web Components. Om deze componenten te gebruiken, importeer je ze in je project en plaats je ze in de HTML.

Importeer de Web Components in je project:

\`\`\`js
import '@rijkshuisstijl-community/web-components';
\`\`\`

Vervolgens kun je de componenten in je HTML gebruiken:

\`\`\`html
<rhc-button>Click Here!</rhc-button>
\`\`\`

### Thema toepassen

Om de Rijkshuisstijl aan je project toe te voegen, installeer je het [design-tokens npm package](https://www.npmjs.com/package/@rijkshuisstijl-community/design-tokens).

\`\`\`bash
npm install --save-dev @rijkshuisstijl-community/design-tokens
\`\`\`

Dit pakket bevat de CSS-variabelen van het design systeem. Importeer het \`index.css\`-bestand uit de \`dist\` map van het
pakket, en omring het deel van je applicatie waar je het thema wilt toepassen met de Rijkshuisstijl-thema: \`rhc-theme\`.

\`\`\`html
<link rel="stylesheet" href="node_modules/@rijkshuisstijl-community/design-tokens/dist/index.css" />
<link rel="stylesheet" href="node_modules/@rijkshuisstijl-community/components-css/dist/index.css" />

<div class="rhc-theme">
  <rhc-button>Click Here!</rhc-button>
</div>
\`\`\`

Bekijk de [packages/font/README.md](https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/font/README.md) voor de meerdere manieren om de lettertypen te installeren voor jouw project.
`;function s(n){return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Web Components/README"}),`
`,e.jsx(m,{children:r})]})}function w(n={}){const{wrapper:t}={...i(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s()}export{w as default};
