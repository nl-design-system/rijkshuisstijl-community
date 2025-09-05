<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community link list component

Links met een pijl als voorloopteken worden gebruikt aan het einde van een tekst. Ze verwijzen naar gerelateerde informatie over het onderwerp wat er in de voorafgaande tekst is besproken.

Links zonder pijl als voorloopteken kunnen ook worden gebruikt, deze zijn vaak terug te vinden in footers.

## Anatomie

- `Link:` Een interactief element waarmee de gebruiker naar een andere locatie kan navigeren.
- `Link List:` Een lijst van meerdere links die samen worden gepresenteerd.
- `Pijl-icoon:` Een visueel element dat optioneel kan worden toegevoegd aan de links om aan te geven dat ze verwijzen naar aanvullende inhoud.

## Usage

- In dit voorbeeld worden drie links weergegeven, elk met een pijl-icoon (chevron-right). De links kunnen ook zonder iconen worden weergegeven door de icon prop weg te laten.

```jsx
import { LinkList, LinkListLink, Icon } from '@rijkshuisstijl-community/components-react';

<LinkList>
  <LinkListLink href="#" icon={<Icon icon="chevron-right" />}>
    Learn about <i lang="fr">joi de vivre</i>, an essential foreign phrase!
  </LinkListLink>
  <LinkListLink href="#" icon={<Icon icon="chevron-right" />}>
    Link 2
  </LinkListLink>
  <LinkListLink href="#" icon={<Icon icon="chevron-right" />}>
    Link 3
  </LinkListLink>
</LinkList>;
```

## Voorbeelden met verkeerde implementatie

- Link zonder `href` attribuut

```jsx
<LinkList>
  <LinkListLink>Invalid Link without href</LinkListLink>
</LinkList>
```

- Geen gebruik van LinkList voor de lijst

```jsx
<LinkListLink href="#">Link 1</LinkListLink>
<LinkListLink href="#">Link 2</LinkListLink>
```
