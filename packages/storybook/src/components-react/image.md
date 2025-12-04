<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community image component

## HTML

- Gebruik het `alt` attribuut voor een beschrijvende tekst.
- Gebruik niet het `title` attribuut voor `img`. De afbeelding moet goed zichtbaar zijn, maar sommige browsers maken een tooltip met voor de tekst in het `title` attribuut. Een tooltip kan bijvoorbeeld een afbeelding van een [QR-code](https://en.wikipedia.org/wiki/QR_code) onbruikbaar maken doordat de QR-code niet meer herkend wordt.

## Bibliografie

- [Using the HTML title attribute — Steve Faulkner](https://www.tpgi.com/using-the-html-title-attribute-updated/)

## Usage

```jsx
import { Image } from '@rijkshuisstijl-community/components-react';

<Image src="/placeholder.jpg" alt="Multicolored tulip field" width={640} height={763} />;
```

## Props

| Prop           | Type    | Beschrijving                                                                                                                        |
| -------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `src`          | string  | Verwijzing naar de afbeeldingsbron                                                                                                  |
| `alt`          | string  | (optioneel) Alternatieve tekst voor de afbeelding (verplicht voor toegankelijkheid indien `presentation` niet `true` is)            |
| `presentation` | boolean | (optioneel) De afbeelding is decoratief en bevat expliciet geen `alt` (verplicht voor toegankelijkheid indien `alt` niet gezet is ) |
| `width`        | number  | (optioneel) Breedte van de afbeelding                                                                                               |
| `height`       | number  | (optioneel) Hoogte van de afbeelding                                                                                                |
| `className`    | string  | (optioneel) Extra CSS-klasse(n) voor styling                                                                                        |

## Voorbeelden met verkeerde implementatie

- Geen `alt` attribuut opgegeven en geen `presentation` attribuut opgegeven

```jsx
<Image src="/placeholder.jpg" width={640} height={480} />
```
