<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community hero component

## Beschrijving

Het doel van de `Hero` component is om direct de aandacht van gebruikers te trekken zodra ze een pagina bezoeken. Het bestaat uit een visueel opvallende content zoals een image met titel en korte beschrijving, waarmee snel duidelijk wordt wat de belangrijkste boodschap of het thema van een pagina is. Daarnaast kan het ook een call-to-action bevatten in de vorm van bijvoorbeeld links om de gebruikers door te verwijzen naar belangrijke content.

## Anatomie

De `Hero` component bestaat uit de volgende elementen:

- Section: de hoofdcontainer waarin de afbeelding en title + bijschrift of custom children worden geplaatst.
- Image: de afbeelding die binnen de Hero wordt weergegeven.
- HeadingGroup: een container die heading en subHeading bevat.
- Heading: een optionele heading voor de Hero.
- SubHeading (Paragraph): een optioneel bijschrift voor de Hero (verplicht als de hero een heading heeft).
- Children: mogelijkheid om custom children (zoals bijvoorbeeld een list) toe te voegen aan de hero.

## Voorbeelden met verkeerde implementatie

```tsx
// Het verkeerd toepassen van eigen elementen.
// Bijvoorbeeld: Een HTML heading element gebruiken in plaats van de Heading property van Hero.

<Hero
  imageAlt="Tulip field",
  imageSrc="/placeholder.jpg"
>
  <h1>Heading</h1>
</Hero>;
```

```tsx
// subHeading gebruiken zonder een heading.
// Zowel `heading` als `subHeading` zijn optioneel, maar als je een `subHeading` toevoegt,
// moet je ook een `heading` toevoegen. Een Hero component met alleen een `subHeading` is niet toegestaan.

<Hero imageAlt="Tulip field" imageSrc="/placeholder.jpg" subHeading="Subtext zonder heading" />
```

## Usage

- Voor standaard hero met een image en title + bijshrift:

```tsx
import { Hero } from '@rijkshuisstijl-community/components-react';

<Hero heading="Heading" imageAlt="Tulip field" imageSrc="/placeholder.jpg" subHeading="Subtext" />;
```

- Voor een hero met een custom call-to-action:

```tsx
import { Hero } from '@rijkshuisstijl-community/components-react';

<Hero imageAlt="Tulip field" imageSrc="/placeholder.jpg">
  <LinkListCard heading="Custom call-to-action" headingLevel={2}>
    <LinkListLink href="#">Link 1</LinkListLink>
    <LinkListLink href="#">Link 2</LinkListLink>
    <LinkListLink href="#">Link 3</LinkListLink>
  </LinkListCard>
</Hero>;
```
