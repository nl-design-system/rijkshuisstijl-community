import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-CgIrIXX2.js";import"./index-Cv2uG9Ve.js";import{M as o,e as m}from"./index-C-7cc-Tw.js";import"./index-BJzegUt9.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./preview-CYfO-j4u.js";import"./iframe-Cn0TB8E1.js";import"./DocsRenderer-CFRXHY34-dVhzaXrw.js";import"./react-18-WSCnJXIz.js";import"./index-jD2FfvU1.js";import"./index-Bw_1hv9w.js";import"./index-CXQShRbs.js";const r=`<!-- @license CC0-1.0 -->

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

#### Thema wijzigen

Om een ander thema toe te passen moet je het importeren van \`import '@rijkshuisstijl-community/design-tokens/dist/{thema}/index.css';\` en de class aanpassen naar het desbetreffende thema.
Zie het volgende voorbeeld om het uitvoerend-groen thema toe te passen:

\`\`\`scss
@import '@rijkshuisstijl-community/design-tokens/dist/uitvoerend-groen/index.css'; // design tokens importeren
@import '@rijkshuisstijl-community/components-css/dist/index.css'; // css importeren
\`\`\`

Bekijk de [packages/font/README.md](https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/font/README.md) voor de meerdere manieren om de lettertypen te installeren voor jouw project.
`;function s(n){return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"README"}),`
`,e.jsx(m,{children:r})]})}function b(n={}){const{wrapper:t}={...i(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s()}export{b as default};
