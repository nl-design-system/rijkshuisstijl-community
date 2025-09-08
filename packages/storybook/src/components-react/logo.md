<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community logo component

Omdat buiten officiële Rijksoverheids-media het logo van de Rijksoverheid niet mag worden gebruik, wordt op deze pagina het icoon met id `nederland-map` gebruikt, met een witte achtergrond.

## Usage

Als je dit component gebruikt is het goed om met het volgende rekening te houden:

1. Dit component heeft van zichzelf niet het officiële logo van de Rijksoverheid, deze moet dus handmatig worden toegevoegd.
2. Dit component heeft van zichzelf niet de officiële kleuren van het lint van de Rijksoverheid, deze moeten via tokens worden ingesteld.

In de praktijk zal dat er dan zo uit zien:

### CSS

(als je tokens in CSS overschrijft)

```css
:root {
  /* Lint kleur */
  --logo-image-background-color: var(--rhc-color-lintblauw-500); /* #154273 */

  /* Embleem kleur */
  --logo-image-color: var(--rhc-color-wit); /* #FFFFFF */
}
```

### JSON

(als je tokens in JSON overschrijft)

```json
{
  "logo": {
    "image": {
      "background-color": "#154273",
      "color": "#fff"
    }
  }
}
```

### TSX/JSX

```tsx
import { Logo } from '@rijkshuisstijl-community/components-react';

<Logo
  organisation="Rijkshuisstijl-community"
  subtitle="Een community voor open source componenten"
>
  <img src="embleem.png">
</Logo>
```
