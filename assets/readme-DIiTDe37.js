import{j as e,M as i,k as o}from"./iframe-BzL4nLnW.js";import{useMDXComponents as m}from"./index-CghgpRHZ.js";import"./preload-helper-Dp1pzeXC.js";const a=`<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community Componenten - CSS

_Dit project wordt **niet** gesteund door het Ministerie van Algemene Zaken._

**Het toepassen van design-elementen uit dit project is strikt verboden voor organisaties die geen deel uitmaken van de
centrale overheid van Nederland.**

Deze package is onderdeel van het [Rijkshuisstijl Community](https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/README.md) project.

## Aan de slag met CSS-componenten

Om de CSS-componenten van de Rijkshuisstijl-community te gebruiken, installeer je het [components-css npm package](https://www.npmjs.com/package/@rijkshuisstijl-community/components-css).

\`\`\`bash
npm install --save-dev @rijkshuisstijl-community/components-css
\`\`\`

Dit installeert de CSS-componenten. Om deze componenten te gebruiken, moet je het thema toepassen in de volgende stap.

### Thema toepassen

Om de Rijkshuisstijl aan je project toe te voegen, installeer je het [design-tokens npm package](https://www.npmjs.com/package/@rijkshuisstijl-community/design-tokens).

\`\`\`bash
npm install --save-dev @rijkshuisstijl-community/design-tokens
\`\`\`

Dit pakket bevat de CSS-variabelen van het design systeem. Importeer het \`index.css\`-bestand uit de \`dist\` map van het
pakket, en omring het deel van je applicatie waar je het thema wilt toepassen met de Rijkshuisstijl-thema: \`rhc-theme\`.

\`\`\`scss
@import '@rijkshuisstijl-community/design-tokens/dist/index.css'; // design tokens importeren
@import '@rijkshuisstijl-community/components-css/dist/index.css'; // css importeren
\`\`\`

#### Thema wijzigen

Om een ander thema toe te passen moet je het importeren van \`import '@rijkshuisstijl-community/design-tokens/dist/{thema}/index.css';\` en de class aanpassen naar het desbetreffende thema.
Zie het volgende voorbeeld om het uitvoerend-groen thema toe te passen:

\`\`\`scss
@import '@rijkshuisstijl-community/design-tokens/dist/uitvoerend-groen/index.css'; // design tokens importeren
@import '@rijkshuisstijl-community/components-css/dist/index.css'; // css importeren
\`\`\`

Bekijk de [packages/font/README.md](https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/font/README.md) voor de meerdere manieren om de lettertypen te installeren voor jouw project.
`;function s(n){return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"README"}),`
`,e.jsx(o,{children:a})]})}function p(n={}){const{wrapper:t}={...m(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s()}export{p as default};
