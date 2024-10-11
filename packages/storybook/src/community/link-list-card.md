<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community link list card component

[NL design system](https://www.nldesignsystem.nl/alert/) | [Figma](https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?node-id=1195-4201&t=n1djYpmvDCKmAEUi-0) | [GitHub](https://github.com/nl-design-system/rijkshuisstijl-community/issues/472)

De **LinkListCard** component biedt een manier om een **card** weer te geven met een heading en een collectie van links. Dit component accepteert twee verschillende props: `headingLevel`, `headingText`

- **`headingLevel`** (`number`)
  Dit bepaalt het niveau van de heading, vergelijkbaar met HTML heading-tags

- **`headingText`** (`string`)
  De tekst die weergegeven wordt binnen de heading.

LinkListCard-component bestaat uit de volgende subcomponenten:

- `Heading` Voor de weergave van de heading op basis van het doorgegeven niveau.
- `LinkList` Een container die de links groepeert.
- `LinkListLink` Voor elke individuele link, inclusief een standaardicoon (of je eigen linkcomponenten).

Gebruik deze component om op een nette manier een kaart weer te geven met een overzicht van links en een heading.

## Usage

```tsx
import { LinkListCard } from '@rijkshuisstijl-community/components-react';

<LinkListCard headingLevel={3} heading="Heading Text">
  {children}
</LinkListCard>;
```