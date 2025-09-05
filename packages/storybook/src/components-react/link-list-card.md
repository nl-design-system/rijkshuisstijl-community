<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community link list card component

De **LinkListCard** component biedt een manier om een **card** weer te geven met een heading en een collectie van links. Dit component accepteert twee verschillende props: `headingLevel`, `heading`

- **`headingLevel`** (`number`)
  Dit bepaalt het niveau van de heading, vergelijkbaar met HTML heading-tags

- **`heading`** (`string`)
  De tekst die weergegeven wordt binnen de heading.

## Anatomie

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

## Voorbeelden met verkeerde implementatie

- Geen heading meegegeven

```jsx
<LinkListCard headingLevel={3}>
  <LinkListLink href="#">Link zonder heading</LinkListLink>
</LinkListCard>
```

- Geen children meegegeven

```jsx
<LinkListCard headingLevel={3} heading="Lege lijst" />
```
