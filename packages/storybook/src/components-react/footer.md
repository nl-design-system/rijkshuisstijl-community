# Rijkshuisstijl Community Footer component

Dit component is volledig ontwikkeld door de Rijkshuisstijl Community.

## Beschrijving

De Footer component biedt de basisstructuur voor de pagina-footer. Je vult twee slots met eigen content: `primary` voor het bovenste gedeelte (bijvoorbeeld links in kolommen) en `secondary` voor het onderste gedeelte (bijvoorbeeld juridische links zoals Privacy en Cookies).

## Gebruik

### Eenvoudig voorbeeld

De minimale manier om de Footer te gebruiken, met alleen `secondary`.

```jsx
import { Footer, Link } from '@rijkshuisstijl-community/components-react';

const FooterFooterLinks = () => (
  <div className="rhc-page-footer__navigation">
    <Link href="#">Privacy</Link>
    <Link href="#">Cookies en anti-spam</Link>
  </div>
);

<Footer secondary={<FooterFooterLinks />} />;
```

### Uitgebreid voorbeeld

Gebruik in `primary` het `rhc-grid` grid-systeem als je de inhoud in kolommen wilt verdelen, bijvoorbeeld voor links per categorie.

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

<Footer primary={<FooterLinks />} secondary={<FooterFooterLinks />} />;
```

`primary` is optioneel, `secondary` is verplicht.

## API Referentie

### Footer

| Prop        | Type      | Default   | Beschrijving                                     |
| ----------- | --------- | --------- | ------------------------------------------------ |
| `primary`   | ReactNode | -         | Inhoud voor het bovenste gedeelte van de footer. |
| `secondary` | ReactNode | verplicht | Inhoud voor het onderste gedeelte van de footer. |
| `className` | string    | -         | Extra CSS class names.                           |
