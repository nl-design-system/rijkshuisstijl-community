<!-- @license CC0-1.0 -->

# Richtlijnen

- Plaatsing: De action group wordt meestal horizontaal weergegeven, maar kan ook verticaal worden weergegeven als er onvoldoende ruimte is (bijvoorbeeld op mobiele apparaten of in smalle vensters).
- Gebruik van knoppen: Wanneer een actie belangrijker is dan de andere, geef de belangrijkste actie een prominente stijl (bijvoorbeeld een primaire knop).
- ARIA-rol: De role="group" is van toepassing op de container, om aan te geven dat de acties samen horen. Elke individuele actie heeft de role="button" voor knoppen, of role="link" voor links.

## Zo moet het niet

Plaats geen ongepaste acties in een action group die geen gerelateerde acties zijn. Dit zou verwarring kunnen veroorzaken bij de gebruiker en de toegankelijkheid van de interface verminderen.

## Usage

```tsx
import { ActionGroup } from '@rijkshuisstijl-community/components-react';

<ActionGroup direction="row">
  <Button appearance="primary-action-button" key="primary-action-button">
    Save and continue
  </Button>
  <Button appearance="secondary-action-button" key="secondary-action-button">
    Back
  </Button>
</ActionGroup>;
```
