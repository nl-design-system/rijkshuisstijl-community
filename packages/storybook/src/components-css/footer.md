# Rijkshuisstijl Community Footer component

Dit component is volledig ontwikkeld door de Rijkshuisstijl Community.

## Beschrijving

De Footer component (CSS) biedt de basisstructuur voor de pagina-footer, opgebouwd met losse CSS classes op een gewoon `<footer>` element.

## Anatomie

De Footer bestaat uit de volgende onderdelen:

- **Primary**: het bovenste gedeelte van de footer, meestal gebruikt voor links in kolommen (bijvoorbeeld per categorie of onderwerp).
- **Separator**: een visuele scheidingslijn tussen het primary en secondary gedeelte.
- **Secondary**: het onderste gedeelte van de footer, meestal gebruikt voor juridische links zoals Privacy en Cookies.
- **Tagline**: een korte tekstregel, bijvoorbeeld "De Rijksoverheid. Voor Nederland", geplaatst boven de primary links.

De compacte variant laat het primary gedeelte weg en toont alleen de tagline en secondary links.

## Gebruik

### Eenvoudig voorbeeld

De minimale structuur, met alleen het secondary gedeelte.

```jsx
import '@rijkshuisstijl-community/footer-css/dist/index.css';
import { Link } from '@rijkshuisstijl-community/components-react';

const FooterNavbarLinks = () => (
  <div className="rhc-page-footer__navigation">
    <Link href="#">Privacy</Link>
    <Link href="#">Cookies en anti-spam</Link>
  </div>
);

<footer className="rhc-page-footer rhc-page-footer--compact rhc-page-section">
  <div className="rhc-page-footer__secondary rhc-page-section__content">
    <FooterNavbarLinks />
  </div>
</footer>;
```

### Uitgebreid voorbeeld

Gebruik in het primary gedeelte het `rhc-grid` grid-systeem als je de inhoud in kolommen wilt verdelen, bijvoorbeeld voor links per categorie.

```jsx
import '@rijkshuisstijl-community/footer-css/dist/index.css';
import '@rijkshuisstijl-community/section-css/dist/index.css';
import '@rijkshuisstijl-community/grid-css/dist/index.css';
import { Heading, Icon, Link, LinkList, LinkListLink, Separator } from '@rijkshuisstijl-community/components-react';

const linkList = ['Contact', 'Veelgestelde vragen', 'Over deze site', 'Werken bij'];

const FooterLinks = () => (
  <div className="rhc-grid__cell rhc-grid__cell-t-6 rhc-grid__cell-d-3">
    <Heading appearanceLevel={5} level={2}>
      Rijksoverheid.nl
    </Heading>
    <LinkList>
      {linkList.map((entry) => (
        <LinkListLink href="#" icon={<Icon icon="chevron-right" />} key={entry}>
          {entry}
        </LinkListLink>
      ))}
    </LinkList>
  </div>
);

const FooterNavbarLinks = () => (
  <div className="rhc-page-footer__navigation">
    <Link href="#">Privacy</Link>
    <Link href="#">Cookies en anti-spam</Link>
  </div>
);

<footer className="rhc-page-footer rhc-page-section">
  <div className="rhc-page-section__content">
    <div className="rhc-page-footer__primary">
      <div className="rhc-page-footer__tagline">De Rijksoverheid. Voor Nederland</div>
      <h2 className="rhc-visually-hidden">Footer heading</h2>
      <div className="rhc-grid">
        <FooterLinks />
      </div>
    </div>
    <div className="rhc-page-footer__separator">
      <Separator />
    </div>
    <div className="rhc-page-footer__secondary">
      <FooterNavbarLinks />
    </div>
  </div>
</footer>;
```
