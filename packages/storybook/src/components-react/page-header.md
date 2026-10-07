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
import { PageHeader } from '@rijkshuisstijl-community/components-react';

const items = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'contact', label: 'Contact', href: '/' },
];

<PageHeader>
  <div className="rhc-page-section">
    <div className="rhc-page-section__content">
      <Logo organisation="Organisatie" subtitle="Wat wij doen" />
      <NavBar identity={{ value: 'Dataregister', href: '/' }} items={items} />
    </div>
  </div>
</PageHeader>;
```

### Uitgebreid voorbeeld

Voor een pagina met een `megamenu` en een tweede navigatiebalk geeft je meerdere `NavBar`'s mee als `children`.

```tsx
import { Icon, Logo, NavBar, NavBarMegaMenu, PageHeader } from '@rijkshuisstijl-community/components-react';

const itemsMain = [
  { id: 'data', label: 'Data', href: '/' },
  { id: 'impact', label: 'Impact', href: '/' },
];

const megamenu = (
  <NavBarMegaMenu
    tagline="Ingang naar informatie en diensten van alle overheden"
    columns={[
      {
        id: 'col-1',
        heading: 'Diensten van de overheid',
        items: [{ id: 'mm-1', label: 'Diensten overzicht', href: '/' }],
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
      <NavBar identity={{ value: 'Overheid.nl', href: '/', appearance: 'primary' }} megamenu={megamenu} />
      <NavBar identity={{ value: 'Dataregister', href: '/' }} items={itemsMain} />
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
