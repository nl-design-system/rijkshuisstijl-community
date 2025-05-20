import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as o}from"./index-BysLjLkY.js";import"./index-BoFq5TE9.js";import{M as r,e as i,T as a}from"./index-BndYlYD1.js";import"./index-DeTAkU8q.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./preview-C7EL4hQs.js";import"./iframe-LEccppoI.js";import"./DocsRenderer-CFRXHY34-NRncq3eS.js";import"./react-18-CnEToxBx.js";import"./index-CTPIcns_.js";import"./index-B-2rlRvl.js";import"./index-CXQShRbs.js";const d=`# @rijkshuisstijl-community/design-tokens

## 1.2.0

### Minor Changes

- 86c37f5: - Overwrites toegevoegd om thema’s te kunnen variëren. Toegevoegd is: responsiveness, extra primaire kleuren en de optie om niet af te wijken van de Rijkshuisstijl voorbeelden.
  - Default button stijling aangepast.

## 1.1.0

### Minor Changes

- e533251: Split up NL and Utrecht components into separate component properties for easier toggling in Token Studio

### Patch Changes

- 5925dd1: Added fallback so that the design tokens are usable with Utrecht based components

## 1.0.1

### Patch Changes

- b1da3ab: Dual focus outline, zwart met witte offset.
- 1dc03fb: Wekelijkse package updates voor Rijkshuisstijl-componenten en design tokens (week 10)

## 1.0.0

### Patch Changes

- ed83ac9: First full release
`,l=`<!-- @license CC0-1.0 -->

# Rijkshuisstijl design tokens

_Dit project wordt **niet** gesteund door het Ministerie van Algemene Zaken._

**Het toepassen van design-elementen uit dit project is strikt verboden voor organisaties die geen deel uitmaken van de
centrale overheid van Nederland.**

Dit project maakt deel uit van een samenwerkingsverband om [NL Design System](https://nldesignsystem.nl)-componenten te gebruiken voor projecten die moeten voldoen aan de Rijkshuisstijl. Organisaties van de centrale overheid van
Nederland (bijvoorbeeld: [Belastingdienst](https://www.belastingdienst.nl/), [DUO](https://www.duo.nl), [Logius](http://logius.nl), [SVB](https://www.svb.nl/))
en degenen die door hen zijn ingehuurd voor het ontwikkelen van websites en apps, kunnen via dit project samenwerken.

# Tokens gebruiken in eigen project

Hieronder vind je instructies hoe je de standaard Rijkshuisstijl-community tokens in je project kan toepassen.

1. Installeer je het [design-tokens npm package](https://www.npmjs.com/package/@rijkshuisstijl-community/design-tokens).

   \`\`\`bash
   npm install --save-dev @rijkshuisstijl-community/design-tokens

   # En als je CSS classes wilt importeren
   npm install --save-dev @rijkshuisstijl-community/components-css
   \`\`\`

   Dit pakket bevat de CSS-variabelen van het design systeem. Importeer het \`index.css\`-bestand uit de \`dist\` map van het pakket, en omring het deel van je applicatie waar je het thema wilt toepassen. Het Rijkshuisstijl-thema is bijvoorbeeld: \`rhc-theme\`.

2. Pas het thema toe in je project, hieronder een voorbeeld in HTML

   \`\`\`html
   <!-- Als je het default Rijkshuisstijl community thema wilt gebruiken, gebruik .rhc-theme -->
   <link rel="stylesheet" href="node_modules/@rijkshuisstijl-community/design-tokens/dist/index.css" />
   <!-- Of als je een eigen thema wilt importeren, gebruik het thema naam als class name -->
   <link rel="stylesheet" href="@rijkshuisstijl-community/design-tokens/dist/<thema naam>/index.css" />
   <!-- Mogelijk wil je ook de CSS classes importeren als je Rijkshuijsstijl-community componenten gebruikt -->
   <link rel="stylesheet" href="node_modules/@rijkshuisstijl-community/components-css/dist/index.css" />

   <body class="rhc-theme">
       <button class="rhc-button">Click Here!</button>
     </div>
   </body>
   \`\`\`

# Nieuw thema toevoegen

Er zijn al verschillende bedrijfsthema's in de @rijkshuisstijl-community/design-tokens package waarvoor (gedeeltelijke) support is vanuit de Rijkshuisstijl-community. Hieronder volgt een uitleg hoe nog meer thema's kunnen worden toegevoegd

## Nieuwe thema tokens

1. Voeg de nieuwe tokens toe aan het [design tokens bestand](https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/proprietary/design-tokens/figma/figma.tokens.json). Mogelijk is het voor designers handiger om dit direct in Figma te doen. Zie hieronder in hoe je een thema direct in JSON toe kan voegen:

   \`\`\`json
   {
     // ...

     // Definieer specifieke set tokens die je wilt overschrijven met een duidelijke naam. Voeg indien nodig meerdere overwrites sets toe.
     "overwrites/primaire kleur/mintgroen": {
       // Geef aan welke tokens overschreven moeten worden
       "rhc": {
         "color": {
           "primary": {
             "50": {
               "value": "{rhc.color.mintgroen.50}",
               "type": "color"
             },
             "100": {
               "value": "{rhc.color.mintgroen.100}",
               "type": "color"
             },
             "200": {
               "value": "{rhc.color.mintgroen.200}",
               "type": "color"
             },
             "300": {
               "value": "{rhc.color.mintgroen.300}",
               "type": "color"
             },
             "400": {
               "value": "{rhc.color.mintgroen.400}",
               "type": "color"
             },
             "500": {
               "value": "{rhc.color.mintgroen.500}",
               "type": "color"
             },
             "hover": {
               "value": "{rhc.color.primary.500}",
               "type": "color",
               "$extensions": {
                 "studio.tokens": {
                   "modify": {
                     "type": "darken",
                     "value": "0.3",
                     "space": "lch"
                   }
                 }
               }
             }
           }
         }
       }
     },
     // Nog een overwrite
     "overwrites/border/geen border radius": {
       "rhc": {
         "border-radius": {
           "sm": {
             "value": "0",
             "type": "borderRadius"
           },
           "md": {
             "value": "0",
             "type": "borderRadius"
           },
           "lg": {
             "value": "0",
             "type": "borderRadius"
           }
         }
       }
     },
     // ...

     "$themes": [
       // ...
       {
         "id": "<thema ID>", // Wordt niet gebruikt door een build step, maar wel voor Figma
         "name": "<thema naam>", // Dit wordt ook de class name voor het thema
         "$figmaStyleReferences": {},
         "selectedTokenSets": {
           // Voeg eerst de sets toe die dit thema support
           "<token set 1>": "enabled",
           "<token set 2>": "enabled",
           "<etcetera...>": "enabled",
           // Voeg daarna de overwrites toe die je wilt toevoegen aan je thema
           "overwrites/primaire kleur/mintgroen": "enabled",
           "overwrites/border/geen border radius": "enabled"
         }
       }
     ]
   }
   \`\`\`

2. Voeg het nieuwe thema toe in de [storybook preview.tsx](https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/storybook/config/preview.tsx)

   \`\`\`tsx
   // ...
   // Voeg import toe
   import '@rijkshuisstijl-community/design-tokens/dist/<thema naam>/index.css';
   // ...

   const preview: Preview = {
     decorators: [
       withThemeByClassName({
         themes: {
           // Voeg thema toe in storybook thema dropdown
           '<Thema naam in dropdown>': '<thema naam>',
           // ...
         },
         // ...
       }),
       // ...
     ],
     // ...
   };
   export default preview;
   \`\`\`
`;function s(n){return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Rijkshuisstijl Community/Design Tokens/Standaard Thema"}),`
`,e.jsx(i,{children:l}),`
`,e.jsx(a,{children:"Changelog"}),`
`,e.jsx(i,{children:d})]})}function x(n={}){const{wrapper:t}={...o(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(s,{...n})}):s()}export{x as default};
