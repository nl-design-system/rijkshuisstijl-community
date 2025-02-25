import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as o}from"./index-CV3Y8eP2.js";import"./DocsRenderer-CFRXHY34-0zLyqgke.js";import{b as s,c as r}from"./index-CPxPfB3G.js";import"./index-C5EOLjWw.js";import"./_commonjsHelpers-C932wzq6.js";import"./iframe-s-gCJ-N4.js";import"./react-18-NzqQvNNr.js";import"./index-COgOdkeX.js";import"./index-CShDc-ih.js";import"./index-Cu4lwwaE.js";import"./index-CXQShRbs.js";const a=`<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community Componenten

_Dit project wordt **niet** gesteund door het Ministerie van Algemene Zaken._

**Het toepassen van design-elementen uit dit project is strikt verboden voor organisaties die geen deel uitmaken van de
centrale overheid van Nederland.**

Dit project maakt deel uit van een samenwerkingsverband om [NL Design System](https://nldesignsystem.nl)-componenten
te gebruiken voor projecten die moeten voldoen aan de Rijkshuisstijl. Organisaties van de centrale overheid van
Nederland (
bijvoorbeeld: [Belastingdienst](https://www.belastingdienst.nl/), [DUO](https://www.duo.nl), [Logius](http://logius.nl), [SVB](https://www.svb.nl/))
en degenen die door hen zijn ingehuurd voor het ontwikkelen van websites en apps, kunnen via dit project samenwerken.

## Voordat je begint

### Node

In dit project wordt Node.js versie **_22.13_** gebruikt. Dit project bevat een [.nvmrc](.nvmrc) bestand en helpt je met het
installeren van de juiste versie met behulp van \`nvm\`.

- Als je nvm nog niet hebt, [installeer \`nvm\`](https://github.com/nvm-sh/nvm#install--update-script).

Zodra je \`nvm\` hebt geïnstalleerd, run je het commando:

\`\`\`bash
nvm use
\`\`\`

Als je de juiste versie nog niet hebt, wordt gevraagd om deze te installeren door middel van \`nvm install\`. Als de
juiste versie al is geïnstalleerd, of nadat hij is geïnstalleerd, wordt hij ingesteld als de huidige versie.

### SCSS/SASS

De componenten gebruiken scss, zorg dat jouw project scss-bestanden kan verwerken.

## Aan de slag zonder framework

Binnenkort komen er componenten die te gebruiken zijn zonder een framework.

## Aan de slag met React-componenten

Om de React-componenten van de Rijkshuisstijl-community te gebruiken, installeer je het pakket dat beschikbaar in
de [npm Registry](https://www.npmjs.com/package/@rijkshuisstijl-community/components-react).

\`\`\`npm
npm install --save-dev @rijkshuisstijl-community/components-react
\`\`\`

Dit installeert de React-componenten. Om deze componenten te gebruiken, kun je ze importeren in jouw app.

\`\`\`tsx
'use client'; // Nodig in sommige projecten

import { Button } from '@rijkshuisstijl-community/components-react';

<Button>Click Here!</Button>;
\`\`\`

Sommige componenten gebruiken de [useRef](https://react.dev/reference/react/useRef) hook, die alleen werkt in Client
Componenten. Voeg \`"use client"\` toe bovenaan het bestand om dit op te lossen.

### Thema toepassen

De React-componenten hebben geen eigen styling. Om de Rijkshuisstijl aan je project toe te voegen, installeer je
het [design-tokens npm package](https://www.npmjs.com/package/@rijkshuisstijl-community/design-tokens)

\`\`\`npm
npm install --save-dev @rijkshuisstijl-community/design-tokens
\`\`\`

Dit pakket bevat de CSS-variabelen van het design systeem. Importeer het \`index.css\`-bestand uit de \`dist\` map van het
pakket, en omring het deel van je applicatie waar je het thema wilt toepassen met de Rijkshuisstijl-thema: \`rhc-theme\`.

\`\`\`tsx
import '@rijkshuisstijl-community/design-tokens/dist/index.css'; // design tokens importeren
import '@rijkshuisstijl-community/components-css/dist/index.css'; // css importeren

function App() {
  return (
    <div className="rhc-theme">
      <Button>Click Here!</Button>
    </div>
  );
}
\`\`\`

## Licentie

Dit project bevat zowel eigen als vrije en open-source software die wordt gelicentieerd onder
de [European Union Public License (EUPL) v1.2](LICENSE.md).

Lees de [NOTICE file](NOTICE.md) voor informatie over eigen assets in deze repository.

### Logo en stijlgids

Copyright geldt voor het Rijkshuisstijl-logo en merkidentiteit. Gebruik hiervan is strikt verboden, behalve voor het
ontwikkelen van websites en apps voor de Rijksoverheid.

### Fonts

[De lettertypen voor de Rijkshuisstijl](https://www.rijkshuisstijl.nl/basiselementen/basiselementen-online/webfonts)
zijn [speciaal ontworpen voor de Rijksoverheid](https://www.rijkshuisstijl.nl/basiselementen/documenten/verzamelingen-afbeeldingen/2014/06/01/achtergrondartikel-rijkshuisstijl-webfonts)
en zijn niet open source. Gebruik tot toestemming, systeemlettertypen zoals Arial, Verdana of Times New Roman of het @rijkshuisstijl-community/font.

#### Open source varianten

Gebruik tijdens ontwikkeling placeholder varianten voor assets die een licentie vereisen, zoals logo’s, lettertypen en
iconen.

**_Lettertypen_**

\`\`\`npm
npm install -D @rijkshuisstijl-community/font
\`\`\`

\`\`\`tsx
import '@rijkshuisstijl-community/font/src/index.mjs';
\`\`\`

**_Logo_**

Omdat buiten officiële Rijksoverheids-media het logo van de Rijksoverheid niet mag worden gebruik, wordt binnen dit project standaard het icoon met id \`nederland-map\` gebruiken, met een witte achtergrond.

**_Icons_**

Binnen dit project zijn de iconen standaard afkomstig uit de open source [Tabler Icons](https://tabler.io/icons) icon set of handmatig geïmplementeerd door contributors van de Rijkshuisstijl Community. Er kunnen eigen iconen worden toegevoegd aan de standaard icon set, zie hiervoor instructies op de [storybook pagina van de Icon component](https://rijkshuisstijl-community.vercel.app/?path=/docs/rhc-icon--docs).

## Toestemming

Wanneer je een website voor de Nederlandse overheid ontwikkelt, kun je toestemming aanvragen
door [contact op te nemen met het Ministerie van Algemene Zaken](https://www.rijkshuisstijl.nl/contact).

## Gedragscode

We beloven op een manier te handelen die bijdraagt aan een open, gastvrije, diverse, inclusieve en gezonde gemeenschap.
Lees
onze [gedragscode](https://github.com/nl-design-system/rijkshuisstijl-community/blob/feature/filter-by-tags/CODE_OF_CONDUCT.md)
als je dat nog niet hebt gedaan.

## Ontwikkeling

Dit project is gebaseerd op de NL Design System-template en kan worden gebruikt door Rijksoverheidsorganisaties die het
NL Design System willen gebruiken en willen samenwerken aan extra componenten, een gedeeld thema en storybook-sjablonen.

### NodeJS and pnpm

We gebruiken NodeJS om onze JavaScript-pakketten te beheren. Controleer in je terminal met \`node -v\` of je NodeJS hebt
geïnstalleerd. Installeer NodeJS anders via [nodejs.org](https://nodejs.org/en).

NodeJS bevat \`npm\`, maar we gebruiken \`pnpm\` voor stabiele pakketresolutie. Controleer of je \`pnpm\` hebt door \`pnpm -v\`
te typen. Installeer het met \`npm install -g pnpm\` als dat niet zo is.

### Handige commando's

Alle commando’s worden uitgevoerd vanuit de root van het project, in een terminal:

| Command              | Action                                                                        |
| :------------------- | :---------------------------------------------------------------------------- |
| \`pnpm install\`       | Installeert dependencies.                                                     |
| \`pnpm run storybook\` | Start de lokale ontwikkelserver op \`localhost:6006\`.                          |
| \`pnpm run build\`     | Bouw je productie-site naar \`./dist/\`.                                        |
| \`pnpm run lint\`      | Voert de lint-scripts uit om de code aan de projectstandaarden te voldoen.    |
| \`pnpm run lint-fix\`  | Voert lint-scripts uit en herstelt automatisch fouten mits die gevonden zijn. |

Vanuit\`packages/components-react\` krijg je een gedetailleerder overzicht van tests:

| Command         | Action                      |
| :-------------- | :-------------------------- |
| \`pnpm run test\` | Voert alle test suites uit. |

### Packages

| Package            | Purpose                                                                                                                                            |
| :----------------- | :------------------------------------------------------------------------------------------------------------------------------------------------- |
| \`components-css\`   | Hier kunnen CSS-componenten toegevoegd worden die nog niet bestaan in de NL Design System-community.                                               |
| \`components-react\` | Optioneel voor het toevoegen van een React-wrapper aan een CSS-component als die nog niet bestaat.                                                 |
| \`components-twig\`  | Optioneel voor het toevoegen van een Twig-wrapper aan een CSS-component als die nog niet bestaat.                                                  |
| \`design-tokens\`    | Hier worden de rijkshuisstijl-thema’s beheerd, voor gebruik met NL Design System zonder thema. Opmerking deze zouden naar proprietary moeten gaan. |
| \`storybook\`        | Extra componenten en pagina-sjablonen kunnen worden toegevoegd als story voor documentatie en visuele regressietesten.                             |

### Proprietary

Branding, lettertypen en andere assets moeten vaak niet deel uitmaken van de EUPL-licentie. Door deze in de
\`proprietary\` pakketten toe te voegen, worden ze juridisch uitgesloten op basis van de LICENSE en NOTICE-bestanden. Elke
Rijksoverheidsorganisatie die met een NL Design System-thema werkt, kan hier hun thema als pakket toevoegen.

### Wie werkt er aan dit project?

Dit project is een samenwerking tussen frontend-ontwikkelaars, ontwerpers en enthousiastelingen uit diverse velden
binnen de IT-sector en overheidsorganisaties.

## Links

- **_Bug gevonden of code bekijken?_** Bezoek
  onze [GitHub repository](https://github.com/nl-design-system/rijkshuisstijl-community).

- **_Benieuwd naar onze voortgang?_** Bekijk ons huidige werk op
  het [Sprint Board](https://github.com/orgs/nl-design-system/projects/59).

- **_Blijf in contact met de community!_** Word lid van de [Code for NL Slack](https://praatmee.codefor.nl/) en join het
  \`#nl-design-system\` kanaal om samen te werken met de community.
`;function i(n){return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Rijkshuisstijl Community/README"}),`
`,e.jsx(r,{children:a})]})}function w(n={}){const{wrapper:t}={...o(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(i,{...n})}):i()}export{w as default};
