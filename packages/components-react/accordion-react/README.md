<!-- @license CC0-1.0 -->

# Omschrijving

Dit package bevat de specifieke code voor het component. Als je alle rijkshuisstijl community componenten wil kijk dan naar [https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/README.md]. Voor verdere informatie over het inzet van de component kijk naar onze documentatie [https://rijkshuisstijl-community.vercel.app/?path=/docs/rhc-accordion--docs]

## Installatie

```bash
pnpm add @rijkshuisstijl-community/accordion-react
```

## Gebruik

```tsx
import { Accordion } from '@rijkshuisstijl-community/accordion-react';
<AccordionProvider
  sections={[
    {
      body: 'Antwoord 1',
      label: 'Vraag 1',
    },
    {
      body: 'Antwoord 2',
      label: 'Vraag 2',
    },
    {
      body: 'Antwoord 3',
      label: 'Vraag 3',
    },
  ]}
/>;
```

## Rijkshuisstijl Community Componenten

**Direct aan de slag met [CSS](https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-css/README.md) | [React](https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/README.md) | [Web Components](https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/web-components/README.md) | [Twig](https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-twig/README.md)**
