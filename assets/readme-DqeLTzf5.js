import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-CgIrIXX2.js";import"./index-BNvML3Cx.js";import{M as o,e as m}from"./index-GnmsG1EU.js";import"./index-BJzegUt9.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./preview-BXzAY9FI.js";import"./iframe-Cj-vX1En.js";import"./DocsRenderer-CFRXHY34-CaJ8xFsO.js";import"./react-18-WSCnJXIz.js";import"./index-jD2FfvU1.js";import"./index-Bw_1hv9w.js";import"./index-CXQShRbs.js";const r=`<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community Componenten - Web Components

_Dit project wordt **niet** gesteund door het Ministerie van Algemene Zaken._

**Het toepassen van design-elementen uit dit project is strikt verboden voor organisaties die geen deel uitmaken van de
centrale overheid van Nederland.**

Deze package is onderdeel van het [Rijkshuisstijl Community](https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/README.md) project.

## Aan de slag met Web Components

Om de componenten van de Rijkshuisstijl-community te gebruiken, installeer je het [web-components npm package](https://www.npmjs.com/package/@rijkshuisstijl-community/web-components).

De componenten hebben geen eigen styling. Om de Rijkshuisstijl aan je project toe te voegen, installeer je het [design-tokens npm package](https://www.npmjs.com/package/@rijkshuisstijl-community/design-tokens) en [component-css npm package](https://www.npmjs.com/package/@rijkshuisstijl-community/components-css).

> [!NOTE]  
> Let erop dat je beide de \`@rijkshuisstijl-community/design-tokens/dist/index.css\` importeert **en** de component een child is van een element waar de \`rhc-theme\` op is toegepast. Anders zie je de component zonder styling.

\`\`\`bash
npm install --save-dev @rijkshuisstijl-community/web-components @rijkshuisstijl-community/components-css @rijkshuisstijl-community/design-tokens
\`\`\`

Dit installeert de componenten, de design tokens en de styling. Om deze te gebruiken, importeer je ze in jouw app,
Vervolgens kun je de componenten in je HTML gebruiken:

\`\`\`html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>RHC web-components</title>
    <!-- componenten importeren -->
    <script type="module">
      import { ButtonWebComponent } from '@rijkshuisstijl-community/web-components';

      // NB: let op dat je hier elk te gebruiken component definieert
      customElements.define('rhc-button', ButtonWebComponent);
    <\/script>
    <!-- design tokens importeren -->
    <link
      rel="stylesheet"
      href="node_modules/@rijkshuisstijl-community/design-tokens/dist/uitvoerend-groen/index.css"
    />
    <!-- css importeren -->
    <link rel="stylesheet" href="node_modules/@rijkshuisstijl-community/components-css/dist/index.css" />
  </head>
  <body>
    <!--geef alle thema tokens mee aan child components voor styling-->
    <div class="rhc-theme">
      <rhc-button>Click Here!</rhc-button>
    </div>
  </body>
</html>
\`\`\`

### Thema toepassen

Voor de themas maken we gebruik van de volgende 2 packages: [design-tokens npm package](https://www.npmjs.com/package/@rijkshuisstijl-community/design-tokens) en [component-css npm package](https://www.npmjs.com/package/@rijkshuisstijl-community/components-css).

Dit pakket bevat de CSS-variabelen van het design systeem. Importeer het \`index.css\`-bestand uit de \`dist\` map van het
pakket, en omring het deel van je applicatie waar je het thema wilt toepassen met het Rijkshuisstijl-thema met de \`rhc-theme\` class.

#### Thema wijzigen

Om een ander thema toe te passen moet je het importeren van \`import '@rijkshuisstijl-community/design-tokens/dist/{thema}/index.css';\` en de class aanpassen naar het desbetreffende thema.
Zie het volgende voorbeeld om het uitvoerend-groen thema toe te passen:

\`\`\`html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>RHC web-components</title>
    <!-- componenten importeren -->
    <script type="module">
      import { ButtonWebComponent } from '@rijkshuisstijl-community/web-components';
      customElements.define('rhc-button', ButtonWebComponent);
    <\/script>
    <!-- design tokens importeren -->
    <link
      rel="stylesheet"
      href="node_modules/@rijkshuisstijl-community/design-tokens/dist/uitvoerend-groen/index.css"
    />
    <!-- css importeren -->
    <link rel="stylesheet" href="node_modules/@rijkshuisstijl-community/components-css/dist/index.css" />
  </head>
  <body>
    <!--geef alle thema tokens mee aan child components voor styling-->
    <div class="uitvoerend-groen">
      <rhc-button>Click Here!</rhc-button>
    </div>
  </body>
</html>
\`\`\`

Bekijk de [packages/font/README.md](https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/font/README.md) voor de meerdere manieren om de lettertypen te installeren voor jouw project.
`;function s(n){return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"README"}),`
`,e.jsx(m,{children:r})]})}function w(n={}){const{wrapper:t}={...i(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s()}export{w as default};
