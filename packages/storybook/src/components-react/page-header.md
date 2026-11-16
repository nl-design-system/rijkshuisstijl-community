<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community Page Header component

Consistente plek bovenaan elke pagina, vaak met een logo, navigation bar en zoekfunctie, taal switch.

De component zelf voegt geen logo of navigatie toe: je geeft de inhoud mee als children, meestal een Logo en een of twee NavBar's.

## Anatomie

De Page Header bestaat uit de volgende onderdelen:

- **Header**: de `<header>` met de rhc-page-header-class, als buitenste wrapper.
- **Children**: de inhoud die je zelf meegeeft, bijvoorbeeld een `Logo` en een of meerdere `NavBar`'s.

## Gebruik

### Eenvoudig voorbeeld

```tsx
import { Logo, NavBar, NavBarIdentity, NavBarItem, PageHeader } from '@rijkshuisstijl-community/components-react';

const items = [
  <NavBarItem href="/" id="home" key="home" label="Home" />,
  <NavBarItem href="/" id="contact" key="contact" label="Contact" />,
];

<PageHeader>
  <div className="rhc-page-section">
    <div className="rhc-page-section__content">
      <Logo organisation="Organisatie" subtitle="Wat wij doen" />
      <NavBar
        identity={
          <NavBarIdentity primary href="/">
            Dataregister
          </NavBarIdentity>
        }
        items={items}
      />
    </div>
  </div>
</PageHeader>;
```

### Uitgebreid voorbeeld

Voor een pagina met een `megamenu` en een tweede navigatiebalk geef je meerdere `NavBar`'s mee als `children`.

```tsx
import {
  Icon,
  Logo,
  NavBar,
  NavBarIdentity,
  NavBarItem,
  NavBarMegaMenu,
  PageHeader,
} from '@rijkshuisstijl-community/components-react';

const itemsMain = [
  <NavBarItem href="/" id="data" key="data" label="Data" />,
  <NavBarItem href="/" id="impact" key="impact" label="Impact" />,
];

const megamenu = (
  <NavBarMegaMenu
    tagline="Ingang naar informatie en diensten van alle overheden"
    columns={[
      {
        id: 'col-1',
        heading: 'Diensten van de overheid',
        items: [{ id: 'mm-1', label: 'Dienstenoverzicht', href: '/' }],
      },
    ]}
  />
);

<PageHeader>
  <div className="rhc-page-section">
    <div className="rhc-page-section__content">
      <Logo organisation="Organisatie" subtitle="Wat wij doen">
        <Icon className="dutch-map" icon="nederland-map" />
      </Logo>
      <NavBar
        identity={
          <NavBarIdentity primary href="/">
            Overheid.nl
          </NavBarIdentity>
        }
        megamenu={megamenu}
      />
      <NavBar identity={<NavBarIdentity href="/">Dataregister</NavBarIdentity>} items={itemsMain} />
    </div>
  </div>
</PageHeader>;
```

Zie SharedHeaderOverheidNl in het header-footer -template voor een volledig voorbeeld.

## API Referentie

### PageHeader

| Prop        | Type      | Default   | Beschrijving             |
| ----------- | --------- | --------- | ------------------------ |
| `children`  | ReactNode | verplicht | De inhoud van de header. |
| `className` | string    | -         | Extra CSS class names    |
