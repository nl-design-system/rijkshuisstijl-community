
<!-- @license CC0-1.0 -->

# Omschrijving

Dit package bevat de specifieke code voor het component. Als je alle rijkshuisstijl componenten wil kijk dan naar [https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/README.md]. Voor verdere informatie over het inzet van de component kijk naar onze documentatie [https://rijkshuisstijl-community.vercel.app/?path=/docs/rhc-icon--docs]

> [!NOTE] Dit component maakt gebruik van scss om duplicaat classes te voorkomen bij meerdere packages. Als je geen SCSS compiler hebt in je applicatie kijk dan naar  [(https://github.com/nl-design-system/rijkshuisstijl-community/tree/main/packages/components-react)].

# Installatie

``` bash
pnpm add @rijkshuisstijl-community/icon-react
```

# Gebruik

Dit component kan op verschillende manieren worden gebruikt. Hieronder staan de verschillende manieren beschreven, beginnend met de makkelijkste manier.

**Standaard is er de optie om een icon property mee te geven met dit component, wat staat voor een van de ondersteunde icon IDs uit de icon set van de Rijkshuisstijl Community.

```tsx
import { Icon } from '@rijkshuisstijl-community/icon-react';

<Icon icon="home" />

```

**Als tweede optie is het mogelijk om een SVG element/React Node mee te geven, dit hoeft dus geen icoon uit een icon set te zijn.

```tsx
import { Icon } from from '@rijkshuisstijl-community/icon-react';
import { IconBrandX } from '@tabler/icons-react';

<Icon><IconBrandX /></Icon>

# Rijkshuisstijl Community Componenten
 
**Direct aan de slag met [CSS](https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-css/README.md) | [React](https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/README.md) | [Web Components](https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/web-components/README.md) | [Twig](https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-twig/README.md)**

---
