<!-- @license CC0-1.0 -->

# Omschrijving

Dit package bevat de specifieke code voor het component. Als je alle rijkshuisstijl community componenten wil kijk dan naar [https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/library-react/README.md]. Voor verdere informatie over het inzet van de component kijk naar onze documentatie [https://rijkshuisstijl-community.vercel.app/?path=/docs/rhc-image--docs]

## Installatie

```bash
pnpm add @rijkshuisstijl-community/image-react
```

## Gebruik

Gebruik het alt attribuut voor een beschrijvende tekst.

Gebruik niet het title attribuut voor img. De afbeelding moet goed zichtbaar zijn, maar sommige browsers maken een tooltip met voor de tekst in het title attribuut. Een tooltip kan bijvoorbeeld een afbeelding van een QR-code onbruikbaar maken doordat de QR-code niet meer herkend wordt.

```tsx
import { Image } from '@rijkshuisstijl-community/image-react';

<Image src="/placeholder.jpg" alt="Multicolored tulip field" width={640} height={763} />;
```

## Testing

We bundelen de CSS direct mee met de componenten zodat je dit niet apart hoeft in te laden. Let wel op met unit tests die in de Node omgeving draaien: die ondersteunen niet altijd standaard `.css` files. Voor vitest moet je bijvoorbeeld `pool: 'vmThreads',` aanzetten in de config als je de volgende error tegenkomt: `TypeError: Unknown file extension ".css"`

## Rijkshuisstijl Community Componenten

**Direct aan de slag met [CSS](https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-css/library-css/README.md) | [React](https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/library-react/README.md) | [Web Components](https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/web-components/README.md) | [Twig](https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-twig/README.md)**
