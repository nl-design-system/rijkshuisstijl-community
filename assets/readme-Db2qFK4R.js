import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-CgIrIXX2.js";import"./index-DH2CDp4C.js";import{M as o,e as m}from"./index-kOyDWikG.js";import"./index-BJzegUt9.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./preview-D_4gUTCy.js";import"./iframe-iE8ukiNO.js";import"./DocsRenderer-CFRXHY34-CibU9VBa.js";import"./react-18-WSCnJXIz.js";import"./index-jD2FfvU1.js";import"./index-Bw_1hv9w.js";import"./index-CXQShRbs.js";const r=`<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community Componenten - React

_Dit project wordt **niet** gesteund door het Ministerie van Algemene Zaken._

**Het toepassen van design-elementen uit dit project is strikt verboden voor organisaties die geen deel uitmaken van de
centrale overheid van Nederland.**

Deze package is onderdeel van het [Rijkshuisstijl Community](https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/README.md) project.

## Aan de slag met React-componenten

Om de React-componenten van de Rijkshuisstijl Community te gebruiken, installeer je het [components-react npm package](https://www.npmjs.com/package/@rijkshuisstijl-community/components-react).

De React-componenten hebben geen eigen styling. Om de Rijkshuisstijl aan je project toe te voegen, installeer je het [design-tokens npm package](https://www.npmjs.com/package/@rijkshuisstijl-community/design-tokens) en [component-css npm package](https://www.npmjs.com/package/@rijkshuisstijl-community/components-css).

> [!NOTE]  
> Let erop dat je beide de \`@rijkshuisstijl-community/design-tokens/dist/index.css\` importeert **en** de component een child is van een element waar de \`rhc-theme\` op is toegepast. Anders zie je de component zonder styling.

\`\`\`bash
npm install --save-dev @rijkshuisstijl-community/components-react @rijkshuisstijl-community/components-css @rijkshuisstijl-community/design-tokens
\`\`\`

Dit installeert de React-componenten, de design tokens en de styling. Om deze te gebruiken, importeer je ze in jouw app.

\`\`\`tsx
import '@rijkshuisstijl-community/design-tokens/dist/index.css'; // design tokens importeren
import '@rijkshuisstijl-community/components-css/dist/index.css'; // css importeren
import { Button } from '@rijkshuisstijl-community/components-react'; // React-component importeren

function App() {
  return (
    <div className="rhc-theme">
      {/* geef alle thema tokens mee aan child components voor styling */}
      <Button appearance="primary-action-button">Click Here!</Button>
    </div>
  );
}

export default App;
\`\`\`

> [!WARNING]  
> Sommige componenten gebruiken client-side functionaliteiten zoals de [useRef](https://react.dev/reference/react/useRef) hook, die alleen werken in Client
> Componenten. Voeg \`"use client"\` toe bovenaan het bestand om dit op te lossen. lees [hier](https://react.dev/reference/rsc/server-components) meer over server en client components in React.

### Thema toepassen

Voor de themas maken we gebruik van de volgende 2 packages: [design-tokens npm package](https://www.npmjs.com/package/@rijkshuisstijl-community/design-tokens) en [component-css npm package](https://www.npmjs.com/package/@rijkshuisstijl-community/components-css).

Dit pakket bevat de CSS-variabelen van het design systeem. Importeer het \`index.css\`-bestand uit de \`dist\` map van het
pakket, en omring het deel van je applicatie waar je het thema wilt toepassen met het Rijkshuisstijl-thema met de \`rhc-theme\` class.

#### Thema wijzigen

Om een ander thema toe te passen moet je het importeren van \`import '@rijkshuisstijl-community/design-tokens/dist/{thema}/index.css';\` en de class aanpassen naar het desbetreffende thema.
Zie het volgende voorbeeld om het uitvoerend-groen thema toe te passen:

\`\`\`tsx
import '@rijkshuisstijl-community/design-tokens/dist/uitvoerend-groen/index.css'; // design tokens importeren
import '@rijkshuisstijl-community/components-css/dist/index.css'; // css importeren
import { Button } from '@rijkshuisstijl-community/components-react'; // React-component importeren

function App() {
  return (
    <div className="uitvoerend-groen">
      {/* geef alle thema tokens mee aan child components voor styling */}
      <Button appearance="primary-action-button">Click Here!</Button>
    </div>
  );
}

export default App;
\`\`\`

Bekijk de [packages/font/README.md](https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/font/README.md) voor de meerdere manieren om de lettertypen te installeren voor jouw project.
`;function s(n){return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Rijkshuisstijl/README"}),`
`,e.jsx(m,{children:r})]})}function b(n={}){const{wrapper:t}={...i(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s()}export{b as default};
