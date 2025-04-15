<!-- @license CC0-1.0 -->

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

```shell
npm install -D @rijkshuisstijl-community/font
```

Gebruik in JavaScript frameworks zoals React en Angular de volgende code:

```mjs
import '@rijkshuisstijl-community/font/src/index.mjs';
```

Gebruik in SCSS de volgende code:

```scss
@import '@rijkshuisstijl-community/font/src/index.scss';
```

Het is ook mogelijk om de CSS te importeren:

```js
import '@rijkshuisstijl-community/font/dist/index.css';
```

## Op zoek naar de officiële lettertypes?

De officiële lettertypes kun je downloaden via [rijkshuisstijl.nl](https://www.rijkshuisstijl.nl/publiek/modules/product/DigitalStyleGuide/default/index.aspx?ItemId=6745), als je voldoende rechten hebt. Bijvoorbeeld als je bij de Rijksoverheid werkt en je ingelogd bent via Citrix.

### Fonts downloaden via de network tab van developer tools

Dat is niet de bedoeling. De officiële manier is om aan de font files te komen is via rijkshuisstijl.nl, via de eerdergenoemde link.

### Fonts opslaan GitHub

Dat is niet de bedoeling. Als je de officiële fonts opslaat in een publieke GitHub repository, dan kun je e-mails verwachten met een vriendelijk doch dwingend verzoek om ze er weer te verwijderen.

### De officiële lettertypes gebruiken

Heb je wel toestemming om de officiële lettertypes van [rijkshuisstijl.nl](https://www.rijkshuisstijl.nl/publiek/modules/product/DigitalStyleGuide/default/index.aspx?ItemId=6745) te gebruiken? Dan kun je deze in je applicatie gebruiken! Hiervoor moet je een aantal stappen doorlopen. De implementatie van deze stappen kan verschillen op basis van je ontwikkelomgeving.

#### Stap 1

De font files beschikbaar maken binnen jouw applicatie. In Javascript frameworks doe je dit meestal door de bestanden toe te voegen aan de `public/` map.

#### Stap 2

De custom fonts in de CSS registreren met de `@fontface` rule, bijvoorbeeld door dit toe te voegen aan `index.css`:

```css
@font-face {
  font-family: 'Sans';
  src: url('/RijksoverheidSansText-Regular_2_0.otf');
  font-weight: normal;
}

@font-face {
  font-family: 'Sans';
  src: url('/RijksoverheidSansText-Bold_2_0.otf');
  font-weight: bold;
}

@font-face {
  font-family: 'Sans Head';
  src: url('/RijksoverheidSansHeading-Regular_2_0.otf');
}
```

#### Stap 3

Tenslotte moet je de juiste font-family koppelen aan de CSS variabelen die componenten ook gebruiken. Dit kan je doen door een eigen [thema](https://nldesignsystem.nl/handboek/developer/thema-maken) te maken met behulp van custom tokens die met behulp van een build-stap de variabelen overschrijven. Of door de CSS variabelen handmatig in te stellen. Hier nog een voorbeeld van custom tokens:

```json
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
```

