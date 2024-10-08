<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community link list card component

[NL design system](https://www.nldesignsystem.nl/alert/) | [Figma](https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?node-id=1195-4201&t=n1djYpmvDCKmAEUi-0) | [GitHub](https://github.com/nl-design-system/rijkshuisstijl-community/issues/472)

De **LinkListCard** component biedt een manier om een kaart weer te geven met een heading en een collectie van links. Dit component accepteert drie verschillende props: `headingLevel`, `headingText`, en `links`.

- **`headingLevel`** (`number`):
  Dit bepaalt het niveau van de heading, vergelijkbaar met HTML heading-tags

- **`headingText`** (`string`):
  De tekst die weergegeven wordt binnen de heading.

- **`links`** (`Array<{ href: string; body: string }>`):
  Een array van objecten die elk een link vertegenwoordigen. Elk object bevat twee eigenschappen:
  - `href`: de URL waar de link naar verwijst (type `string`).
  - `body`: de tekst die als inhoud van de link wordt weergegeven (type `string`).

Onder de motorkap bestaat de **LinkListCard** component uit de volgende subcomponenten:

- **`Heading`**: voor de weergave van de heading op basis van het doorgegeven niveau.
- **`LinkList`**: een container die de links groepeert.
- **`LinkListLink`**: voor elke individuele link, inclusief een standaard icoon.

Gebruik deze component om op een nette manier een kaart weer te geven met een overzicht van links en een heading.

## Usage

```tsx
import { LinkListCard } from '@rijkshuisstijl-community/components-react';

<LinkListCard
  headingLevel={3}
  heading="Heading"
  links={[
    { href: 'www.example.com', body: 'link 1' },
    { href: 'www.example.com', body: 'link 2' },
    { href: 'www.example.com', body: 'link 3' },
  ]}
/>;
```
