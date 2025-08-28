import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as s}from"./index-CgIrIXX2.js";import"./index-CDauuJ93.js";import{M as a,e as i,T as l}from"./index-QlHL3YDV.js";import"./index-BJzegUt9.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./preview-B4hjuZFc.js";import"./iframe-DvlJiT6n.js";import"./DocsRenderer-CFRXHY34-CFWAvMpn.js";import"./react-18-WSCnJXIz.js";import"./index-jD2FfvU1.js";import"./index-Bw_1hv9w.js";import"./index-CXQShRbs.js";const r=`# @rijkshuisstijl-community/font

## 1.1.1

### Patch Changes

- 3d9999c: Update patch & minor dependencies

## 1.1.0

### Minor Changes

- d914771: Added the option to import dist/index.css

## 1.0.1

### Patch Changes

- 1dc03fb: Wekelijkse package updates voor Rijkshuisstijl-componenten en design tokens (week 10)
- b9a4945: Moved implementation documentation from repository README to package README.

## 1.0.0

### Patch Changes

- ed83ac9: First full release
`,f=`<!-- @license CC0-1.0 -->

<!-- markdownlint-disable MD033 -->

# Rijkshuisstijl Community font

> <span lang="en">This is not the Rijkshuisstijl font, this is just a tribute.</span>
>
> — Tenacious B

Dit npm pakketje met fonts kun je gebruiken als alternatief op de officiële Rijkshuisstijl fonts, voor situaties waar je geen toestemming hebt om de officiële fonts te gebruiken.

- Alternatief voor **Rijkshuisstijl Web Sans**: wij gebruiken Fira Sans als een alternatief voor Rijkshuisstijl Web Sans.
- Alternatief voor **Rijkshuisstijl Web Serif**: er is nog geen goed alternatief gevonden voor Rijkshuisstijl Web Serif, daarom gebruiken we het sans-serif font Fira Sans ook als alternatief voor het serif font.

## Downloaden

Designers kunnen de font [Fira Sans downloaden via Fontsource](https://fontsource.org/fonts/fira-sans).

## Installatie

Installeer de font in Node.js projecten door het volgende commando in de terminal uit te voeren:

\`\`\`shell
npm install -D @rijkshuisstijl-community/font
\`\`\`

Gebruik in JavaScript frameworks zoals React en Angular de volgende code:

\`\`\`mjs
import '@rijkshuisstijl-community/font/src/index.mjs';
\`\`\`

Gebruik in SCSS de volgende code:

\`\`\`scss
@import '@rijkshuisstijl-community/font/src/index.scss';
\`\`\`

In plain HTML heb je twee opties. Als je een CDN gebruikt, dan kun je de CSS zo importeren:

\`\`\`html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@nl-design-system-candidate/code-block-css@1/dist/code-block.css"
/>
\`\`\`

Gebruik je geen CDN, dan kun je de CSS uit node_modules/ importeren:

\`\`\`html
<link rel="stylesheet" href="node_modules/@nl-design-system-candidate/code-block-css/dist/code-block.css" />
\`\`\`

## Op zoek naar de officiële lettertypes?

De officiële lettertypes kun je downloaden via [rijkshuisstijl.nl](https://www.rijkshuisstijl.nl/publiek/modules/product/DigitalStyleGuide/default/index.aspx?ItemId=6745), als je voldoende rechten hebt. Bijvoorbeeld als je bij de Rijksoverheid werkt en je ingelogd bent via Citrix.

### Fonts downloaden via de network tab van developer tools

Dat is niet de bedoeling. De officiële manier is om aan de font files te komen is via rijkshuisstijl.nl, via de eerdergenoemde link.

### Fonts opslaan GitHub

Dat is niet de bedoeling. Als je de officiële fonts opslaat in een publieke GitHub repository, dan kun je e-mails verwachten met een vriendelijk doch dwingend verzoek om ze er weer te verwijderen.

### De officiële lettertypes gebruiken

Heb je wel toestemming om de officiële lettertypes van [rijkshuisstijl.nl](https://www.rijkshuisstijl.nl/publiek/modules/product/DigitalStyleGuide/default/index.aspx?ItemId=6745) te gebruiken? Dan kun je deze in je applicatie gebruiken! Hiervoor moet je een aantal stappen doorlopen. De implementatie van deze stappen kan verschillen op basis van je ontwikkelomgeving.

#### Stap 1

De font files beschikbaar maken binnen jouw applicatie. In Javascript frameworks doe je dit meestal door de bestanden toe te voegen aan de \`public/\` map.

#### Stap 2

De custom fonts in de CSS registreren met de \`@font-face\` rule, bijvoorbeeld door dit toe te voegen aan \`index.css\`:

\`\`\`css
@font-face {
  font-family: 'RijksSans';
  src: url('/RijksSans.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'RijksSans';
  src: url('/RijksSans.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'RijksSans';
  src: url('/RijksSans.woff2') format('woff2');
  font-weight: 400;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: 'RijksSans';
  src: url('/RijksSans.woff2') format('woff2');
  font-weight: 700;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: 'RijksSansHead';
  src: url('/RijksSansHead.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'RijksSansHead';
  src: url('/RijksSansHead.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'RijksSansHead';
  src: url('/RijksSansHead.woff2') format('woff2');
  font-weight: 400;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: 'RijksSansHead';
  src: url('/RijksSansHead.woff2') format('woff2');
  font-weight: 700;
  font-style: italic;
  font-display: swap;
}
\`\`\`

#### Stap 3

Tenslotte moet je de juiste font-family koppelen aan de CSS variabelen die componenten ook gebruiken. Dit kan je doen door een eigen [thema](https://nldesignsystem.nl/handboek/developer/thema-maken) te maken met behulp van custom tokens die met behulp van een build-stap de variabelen overschrijven. Of door de CSS variabelen handmatig in te stellen. Hier nog een voorbeeld van custom tokens:

\`\`\`json
{
  "rhc": {
    "font-family": {
      "primary": {
        "value": "Sans",
        "type": "fontFamilies"
      },
      "secondary": {
        "value": "RijksoverheidSerifWeb",
        "type": "fontFamilies"
      }
    }
  }
  ...
}
\`\`\`
`;function o(e){return n.jsxs(n.Fragment,{children:[n.jsx(a,{title:"Rijkshuisstijl Community/Font"}),`
`,n.jsx(i,{children:f}),`
`,n.jsx(l,{children:"Changelog"}),`
`,n.jsx(i,{children:r})]})}function S(e={}){const{wrapper:t}={...s(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(o,{...e})}):o()}export{S as default};
