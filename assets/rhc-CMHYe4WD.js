import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as a}from"./index-BysLjLkY.js";import"./index-BUlt1l0k.js";import{M as r,e as o,T as s}from"./index-D60TrEDf.js";import"./index-DeTAkU8q.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./preview-B0DrrnTO.js";import"./iframe-BrA09EPk.js";import"./DocsRenderer-CFRXHY34-VUcV-B46.js";import"./react-18-CnEToxBx.js";import"./index-CTPIcns_.js";import"./index-B-2rlRvl.js";import"./index-CXQShRbs.js";const d=`# @rijkshuisstijl-community/design-tokens

## 4.0.0

### Major Changes

- 84a8fc6: - Brand & common token update, type spacing, sizing, borderWidth, borderRadius omgezet naar dimension om toe te werken naar token formats W3C DTCG
  - Legacy token foreground.onEmphesis verwijderd
  - Ongebruikte component tokensets verwijderd, a la: Avatar, Backdrop, Drawer, Modal Dialog, Page Number Naviation, Tasklist, Toolbar Button

### Minor Changes

- f8f4bab: - Add design tokens for \`data-badge-button\`
- 860e977: - Thema van KOOP aangevuld met afwijkende link-stijling
- 790ead0: Rename "Card" component to "Card as Link" component, to match definition of NL Design System "Card as Link" and in preparation of incoming "Card (not as Link)" component.
- 4c1b34a: - Thema toegevoegd voor KOOP

### Patch Changes

- 73c28a1: - token update link
  - styling update link naar aanleiding van [de stijldiscussie](https://github.com/nl-design-system/rijkshuisstijl-community/discussions/1613)
  - token update link-list
  - token update + style wijziging skip-link
  - token update breadcrumb
- 6cbbac6: - Token update paragraph
  - Token update heading
  - Token update pre-heading
  - Token update heading-group
  - Token update ordered list
  - Token update unordered list
- 83f2985: Vervang niet bestaand Design Token type "borderStyle" met "other".
- 860e977: Link tokens bijgewerkt:

  - \`nl.link.text-decoration-color\` verwijderd zodat de underline meekleurt met de state kleur
  - \`nl.link.hover.text-decoration\` hernoemd naar \`nl.link.hover.text-decoration-line\` zodat de underline bij hover verdwijnt

- b29ea7b: - H6 design tokens toegevoegd
- 2f21f2c: - token update button
  - token update action-group
  - basis tokens toegevoegd, dit is alleen voor stijling binnen Figma
- 02ca6dc: - line-height van H4 en H5 aangepast van 125% naar 150% voor betere leesbaarheid
  - Tokenschrijfwijze voor nl-headings gewijzigd van . naar - (bijv. nl.heading-level-x → nl.heading.level-x)

## 3.0.0

### Major Changes

- 04beca8: Breaking changes: toevoeging en aanpassing van font-weight tokens op de common laag.

  - De paragraph font tokens op de common-laag zijn hernoemd naar \`body\`, zodat ze breder toepasbaar zijn.
  - De token \`rhc.paragraph.small\` is verwijderd.
  - Verwijzingen naar \`rhc.paragraph.small\` zijn vervangen door \`rhc.body.default\`, wat betekent dat de \`font-size\` van componenten als \`counterbadge\`, \`navigation-list\` en \`message-list\` is gewijzigd van 18px naar 20px.
  - \`rhc.font-family.primary\` value is aangepast, het font RijksoverheidSansWeb is eruit gehaald omdat dit een closed-source font is en wij Fira Sans gebruiken ter illustratie.
  - \`rhc.alert.color\` value aangepast van \`rhc.foreground.default\` naar \`rhc.foreground.on-light-color\`

  #### Wat betekent dit voor jou?

  Gebruik je \`rhc.paragraph.small\` of een van de hernoemde paragraph-tokens direct in je code? Dan moet je deze vervangen door de nieuwe \`rhc.body.*\` tokens.

  Gebruik je alleen de componenten uit de component library, zonder custom tokens toe te passen? Dan hoef je niets aan te passen, maar let op: de \`font-size\` van sommige onderdelen is iets groter geworden.

### Minor Changes

- 14334a4: Tokenset \`components/summary-list\` hernoemd naar \`component/data-summary\`.
- 76ebb9f: - Heading kleur aangepast van primary naar lintblauw.
  - Nieuwe overwrites toegevoegd voor footer- en navbar-stijlen, met de volgende opties:
    - Full color met lintblauwe achtergrond
    - Full color met primary achtergrond
    - Witte achtergrond met border in primary kleur
    - Witte achtergrond met border in lintblauwe kleur
- 04beca8: - Toegevoegd: \`rhc.font-weight.default\` en \`rhc.font-weight.strong\` op de common-laag, zodat deelidentiteiten eenvoudiger hun font-weight kunnen instellen.
  - Toegevoegd: tokenset met overwrites voor \`rhc.font-family.primary\` en \`rhc.font-weight.semibold\` om eenvoudig te kunnen wisselen van Fira Sans naar Rijks Sans.
  - Aangepast: \`rhc.font-weight.semibold\` gewijzigd van 550 naar 600, zodat deze correct werkt met Fira Sans in Figma.
  - Aangepast: paragraph-font-tokens op de common-laag hernoemd naar \`body\`, zodat ze breder toepasbaar zijn in componenten en content.
- c7034fd: Add "border-block-end-style" token to "data-summary" component.

### Patch Changes

- 724897b: Voeg tokenset toe voor \`cursor\` op de Button component.

## 2.0.0

### Major Changes

- 158d711: Added 'Uitvoerend - Paars' Theme
  Deprecated @rijkshuisstijl-community/mijnoverheid-design-tokens
  Deprecated @rijkshuisstijl-community/logius-design-tokens
  Deprecated @rijkshuisstijl-community/digid-design-tokens
  Deprecated @rijkshuisstijl-community/rivm-design-tokens
  These themes are now found in: @rijkshuisstijl-community/design-tokens
- 5209b0c: ### Nieuwe tokens

  - \`rhc.color.foreground.on-light-color\` toegevoegd
  - Rounded corner tokens toegevoegd
  - Nieuwe tokenset \`components/blockquote\` toegevoegd

  ### Hernoemingen en refactor

  - \`rhc.color.foregrond.onEmphisis\` hernoemd naar \`rhc.color.foreground.on-dark-color\`. (oude naam blijft tijdelijk beschikbaar om bugs te voorkomen)
  - \`rhc.border-radius.keep\` vervangen door de nieuwe rounded corner tokens
  - Tokenset \`common/keep\` hernoemd naar \`common/keep-oud\`
  - Tokenset \`components/blockquote\` verplaatst naar \`components/blockquote-oud\` (legacy totdat het component is geüpdatet)

  ### Overige

  - Stijl en design tokens voor het \`blockquote\` component geüpdatet

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
`;function i(n){return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Rijkshuisstijl Community/Design Tokens/Standaard Thema"}),`
`,e.jsx(o,{children:l}),`
`,e.jsx(s,{children:"Changelog"}),`
`,e.jsx(o,{children:d})]})}function T(n={}){const{wrapper:t}={...a(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i()}export{T as default};
