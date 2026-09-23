Dit component is volledig ontwikkeld door de Rijkshuisstijl Community.

# Rijkshuisstijl Community Footer component

## Beschrijving

De Footer component biedt de basisstructuur voor de pagina-footer volgens de Rijkshuisstijl. Je vult twee slots met eigen content: `slot1` voor het bovenste gedeelte (bijvoorbeeld links in kolommen) en `slot2` voor het onderste gedeelte (bijvoorbeeld juridische links zoals Privacy en Cookies).

## Gebruik

### Eenvoudig voorbeeld

De minimale manier om de Footer te gebruiken, met alleen `slot2`.

```jsx
import { Footer, Link } from '@rijkshuisstijl-community/components-react';

const FooterFooterLinks = () => (
  <div className="rhc-page-footer__navigation">
    <Link href="#">Privacy</Link>
    <Link href="#">Cookies en anti-spam</Link>
  </div>
);

<Footer slot2={<FooterFooterLinks />} />;
```

### Uitgebreid voorbeeld

Gebruik in `slot1` het `rhc-grid` grid-systeem als je de inhoud in kolommen wilt verdelen, bijvoorbeeld voor links per categorie.

```jsx
import { Footer, Heading, Link, LinkList, LinkListLink } from '@rijkshuisstijl-community/components-react';

const FooterLinks = () => (
  <div className="rhc-grid">
    <div className="rhc-grid__cell rhc-grid__cell-t-6 rhc-grid__cell-d-3">
      <Heading appearanceLevel={5} level={2}>
        Rijksoverheid.nl
      </Heading>
      <LinkList>
        <LinkListLink href="#">Contact</LinkListLink>
      </LinkList>
    </div>
  </div>
);

const FooterFooterLinks = () => (
  <div className="rhc-page-footer__navigation">
    <Link href="#">Privacy</Link>
    <Link href="#">Cookies en anti-spam</Link>
  </div>
);

<Footer slot1={<FooterLinks />} slot2={<FooterFooterLinks />} />;
```

`slot1` is optioneel, `slot2` is verplicht.

## API Referentie

### Footer

| Prop        | Type      | Default   | Beschrijving                                     |
| ----------- | --------- | --------- | ------------------------------------------------ |
| `slot1`     | ReactNode | -         | Inhoud voor het bovenste gedeelte van de footer. |
| `slot2`     | ReactNode | verplicht | Inhoud voor het onderste gedeelte van de footer. |
| `className` | string    | -         | Extra CSS class names.                           |
