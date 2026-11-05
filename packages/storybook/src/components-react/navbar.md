<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community Nav Bar component

De Navigation Bar is de hoofdnavigatie van een pagina. Je geeft de links als data mee en de component bouwt de lijst op. Voor een uitklapbaar menu met kolommen gebruik je de prop `megamenu`.

## Anatomie

De Navigation Bar bestaat uit de volgende onderdelen:

- **Identity**: de naam of titel van de site, aan het begin van de balk.
- **Items**: de links in het hoofdgedeelte van de balk.
- **End items**: optionele items aan het einde van de balk, bijvoorbeeld zoeken, inloggen of taalkeuze.
- **Sublijst**: een uitklapgedeelte bij een item, opgebouwd uit secties met een kop en links.
- **Megamenu**: een optioneel uitklapmenu met links in kolommen, dat opent via een menuknop.

Op smalle schermen klapt de balk in achter een menuknop.

## Gebruik

### Eenvoudig voorbeeld

```tsx
import { NavBar } from '@rijkshuisstijl-community/components-react';

const items = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'nieuws', label: 'Nieuws', href: '/nieuws' },
  { id: 'contact', label: 'Contact', href: '/contact' },
];

<NavBar items={items} />;
```

### Uitgebreid voorbeeld

Gebruik `NavBarIdentity` als child voor de sitenaam, `currentPage` voor de huidige pagina, en `endItems` voor extra items zoals zoeken of inloggen.

```tsx
import { Icon, NavBar, NavBarIdentity, NavBarItem } from '@rijkshuisstijl-community/components-react';

const items = [
  { id: 'home', label: 'Home', href: '/', currentPage: true },
  { id: 'nieuws', label: 'Nieuws', href: '/nieuws' },
];

const endItems = [<NavBarItem href="/zoeken" icon={<Icon icon="zoek" />} id="zoeken" key="zoeken" label="Zoeken" />];

<NavBar endItems={endItems} items={items}>
  <NavBarIdentity href="/">Dataregister</NavBarIdentity>
</NavBar>;
```

Een item kan ook een `subList` of een `megamenu` krijgen voor een uitklapgedeelte met secties of kolommen. Een sectie of kolom heeft een `id`, een `heading` en `items`.

De classes `rhc-nav-bar__item--button-on-mobile--secondary` en `rhc-nav-bar__item--button-on-mobile--primary` tonen een item op smalle schermen als knop, in plaats van als link.

Gebruik een duidelijke `aria-label` die past bij de inhoud van elke balk.

## API Referentie

### NavBar

| Prop        | Type              | Default | Beschrijving                                              |
| ----------- | ----------------- | ------- | --------------------------------------------------------- |
| `children`  | ReactNode         | -       | Een NavBarIdentity, getoond aan het begin van de balk.    |
| `items`     | NavBarItemProps[] | -       | De links in het hoofdgedeelte.                            |
| `endItems`  | ReactNode         | -       | `NavBarItem`-elementen aan het einde van de balk(`<ul>`). |
| `megamenu`  | ReactNode         | -       | Een `NavBarMegaMenu` dat opent via een menuknop.          |
| `className` | string            | -       | Extra CSS class names.                                    |

### NavBarItem

| Prop          | Type           | Default   | Beschrijving                                                  |
| ------------- | -------------- | --------- | ------------------------------------------------------------- |
| `id`          | string         | verplicht | Unieke id van het item.                                       |
| `label`       | ReactNode      | verplicht | De tekst van de link.                                         |
| `href`        | string         | verplicht | De url van de link.                                           |
| `icon`        | ReactElement   | -         | Icoon voor de tekst.                                          |
| `currentPage` | boolean        | `false`   | Markeert de huidige pagina met `aria-current="page"`.         |
| `subList`     | `{ sections }` | -         | Uitklapgedeelte met secties.                                  |
| `contentId`   | string         | `1`       | Id voor de sublijst. Maak deze uniek bij meerdere sublijsten. |

### NavBarIdentity

| Prop         | Type      | Default   | Beschrijving                           |
| ------------ | --------- | --------- | -------------------------------------- |
| `href`       | string    | verplicht | De URL waar de identity naartoe linkt. |
| `children`   | ReactNode | verplicht | De naam of titel van de site.          |
| `className`  | string    | -         | Extra CSS class names.                 |
| `appearance` | string    | -         | Variant, bijvoorbeeld `primary`.       |
