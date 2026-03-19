<!-- @license CC0-1.0 -->

# Fluid Design in Design Tokens en CSS

Fluid design is responsive design, waarbij alles automatisch iets groter en leesbaarder wordt wanneer daar ruimte voor is. Met het Rijkshuisstijl Community Design System is het makkelijk om aan de slag te gaan met fluid design.

## Hoe werkt 't?

Je maakt twee ontwerpen: voor een klein schermformaat waarbij lettergroote en afmetingen niet meer kleiner moeten worden, en een groot schermformaat waarbij de tekst en witruimte het maximum heeft bereikt.

Schermformaten die je bijvoorbeeld kunt gebruiken zijn bijvoorbeeld 320px en 1280px, dat zijn resoluties die belangrijk zijn voor het testen van toegankelijkheid.

### Vergelijking met responsive design

Uit onderzoek blijkt dat websites op een oneindig aantal schermformaten worden bekeken. Responsive design met breakpoints voor 3 of 4 schermformaten, maakt in de praktijk dus meestal niet optimaal gebruik van de beschikbare ruimte.

Fluid design past zich automatisch aan op elke extra pixel beschikbare ruimte. Je kunt nog steeds breakpoints gebruiken, maar dat zal met fluid design in minder situaties nodig zijn.

## Aan de slag

Als je fluid design wilt gebruiken, dan moet je website daar geschikt voor zijn. Check daarom de CSS van de website. Maar ook de onderdelen van het design system moeten al geschikt zijn: je Design Tokens JSON en de CSS van componenten. Verderop lees je welke aanpassingen nodig zijn.

Om vervolgens gebruik te maken van alle opties van het Rijkshuisstijl Community-thema, heb je meer dan één `.css`-bestand nodig. Bijvoorbeeld, in je JavaScript framework:

```js
import '@rijkshuisstijl-community/design-tokens/dist/theme.css';
import '@rijkshuisstijl-community/design-tokens/src/fluid.css';
import '@rijkshuisstijl-community/design-tokens/src/fluid-font-size.css';
import '@rijkshuisstijl-community/design-tokens/src/fluid-space.css';
```

En in je HTML:

```html
<html lang="en" dir="ltr" class="rhc-theme rhc-theme--fluid">
  ...
</html>
```

De class names die je kunt gebruiken:

- `.rhc-theme--fluid` schakelt alle soorten fluid sizing tegelijk in.
- `.rhc-theme--fluid-font` schakelt fluid lettergrootte in.
- `.rhc-theme--fluid-space` schakelt fluid witruimte in — paddings, margins, enz.

De files die je kunt gebruiken:

- `@rijkshuisstijl-community/design-tokens/dist/theme.css` voor de design tokens. Hierin zitten al de design tokens voor de `min` en de `max` waarde voor fluid design.
- `@rijkshuisstijl-community/design-tokens/src/fluid.css` voor de basis van de fluid design. Gebruik deze altijd in combinatie met 1 of meerdere andere `fluid-*.css`-bestanden.
- `@rijkshuisstijl-community/design-tokens/src/fluid-font-size.css` voor fluid lettergroottes.
- `@rijkshuisstijl-community/design-tokens/src/fluid-space.css` voor fluid space.

## Voorbereiding voor fluid design

Vervang alle hardcoded kleuren, spaces en font-sizes door verwijzingen naar design tokens. In CSS moet je kleurwaarden vervangen door CSS-variabelen. In design tokens JSON moet je kleurwaarden vervangen door alias-tokens.

### Lettergroottes

Vervang alle hardcoded lettergroottes in je CSS door CSS-variabelen. Bijvoorbeeld:

- `font-size: 16px;` wordt `font-size: var(--rhc-font-size-md);`
- `font-size: 1.5rem;` wordt `font-size: var(--rhc-font-size-lg);`

### Witruimte

Vervang alle hardcoded witruimtes in je CSS door CSS-variabelen. Bijvoorbeeld:

- `margin-block-start: 16px;` wordt `font-size: var(--rhc-space-200);`
- `padding-inline-start: .5rem;` wordt `font-size: var(--rhc-space-100);`

Als je een witruimte tegenkomt die geen exact equivalent heeft in het ontwerpsysteem, heb je twee opties:

1. Beste keuze: bespreek met een ontwerper welk alternatief het beste is en maak die aanpassing.
2. Alternatief: gebruik een afgeleide waarde op basis van een design token. Bijvoorbeeld: `padding: 20px;` kan worden `padding: calc(1.25 * var(--rhc-space-200))`.

## Achtergrond van deze implementatie

### Viewport van de gebruiker opmeten

We gebruiken de aanpak die gebaseerd is op dit artikel: [Typecasting and Viewport Transitions in CSS With tan(atan2())
— CSS Tricks](https://css-tricks.com/typecasting-and-viewport-transitions-in-css-with-tanatan2/). De belangrijkste aanpassingen zijn om CSS Logical properties te gebruiken waar mogelijk, en je kunt de minimum en maximum schermformaten instellen in `px` waarden vanuit Design Tokens JSON.

### Design tokens opschalen

Allereerst moet je opgeven tussen welke minimum- en maximumviewport de groottes fluid moeten zijn.
Bij kleinere of grotere viewports blijven de groottes op de opgegeven minimum- en maximumwaarden.

Eerst geef je de minimumviewportgrootte op in `--basis-layout-container-min-inline-size`,
en de maximumviewportgrootte in `--basis-layout-container-max-inline-size`. Je kunt deze waarden
ook opgeven in Design Tokens JSON. Deze waarden moeten pixelwaarden zijn. Bijvoorbeeld:

```css
.example-theme {
  --basis-layout-container-min-inline-size 320px;
  --basis-layout-container-max-inline-size 1280px;
}
```

Als je afhankelijk bent van hardcoded waarden voor de minimum- en maximumviewport, kun je dit instellen bij de `:root`-elementselector. Maar om viewportgroottes uit design tokens te gebruiken, moet deze CSS worden toegepast op hetzelfde element als het thema.

Vervolgens genereert deze CSS een CSS-variabele waarmee je kunt vermenigvuldigen: `var(--basis-layout-container-scale)`.
Deze bevat een waarde tussen 0 en 1. 0 wanneer de viewport gelijk aan of kleiner is dan de minimumviewport,
1 wanneer deze groter dan of gelijk is aan de maximumviewport, of ergens daartussenin.

Als je een waarde wilt laten variëren tussen 16px en 48px, gebruik je de volgende berekening:

```css
--rhc-text-font-size-sm: calc(16px + (48px - 16px) * var(--basis-layout-container-scale));
```

Uiteraard kun je de exacte waarden in het bovenstaande voorbeeld vervangen door CSS-variabelen. Bijvoorbeeld:

```css
--rhc-text-font-size-sm: calc(
  var(--rhc-text-font-size-min-sm) + (var(--rhc-text-font-size-max-sm) - var(--rhc-text-font-size-min-sm)) *
    var(--basis-layout-container-scale)
);
```

### Vergelijking met alternatieven

[Utopia](https://utopia.fyi) is een veelgebruikte generator voor fluid CSS-variabelen. Je kunt Utopia zeker gebruiken in plaats van deze aanpak als je dat wil.

Voordelen van deze aanpak:

- Je kunt de minimum- en maximumviewportgroottes instellen vanuit Design Tokens JSON, zodat ontwerpers ze direct kunnen bewerken.
- Je kunt de viewportgroottes opgeven in `px` in plaats van _unitless values_.
- Er worden Logical CSS gebruikt wanneer de browser dit ondersteunt.
- Je kunt één of twee CSS-variabelen aanpassen om de hele schaal te wijzigen, zonder dat je de `clamp()`-berekeningen opnieuw hoeft te genereren.

Nadelen:

- De berekeningen zijn een stuk complexer bij inspectie in de ontwikkelaarstools.
- Je hebt extra CSS nodig, niet alleen de `clamp()`-waarde.
