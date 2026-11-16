<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community Nav Bar component

De Navigation Bar is de hoofdnavigatie van een pagina. Je geeft de links mee als `NavBarItem`-elementen en de component zet ze in de lijst. Voor een uitklapbaar menu met kolommen gebruik je de prop `megamenu`.

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
import { NavBar, NavBarItem } from '@rijkshuisstijl-community/components-react';

const items = [
  <NavBarItem href="/" id="home" key="home" label="Home" />,
  <NavBarItem href="/nieuws" id="nieuws" key="nieuws" label="Nieuws" />,
  <NavBarItem href="/contact" id="contact" key="contact" label="Contact" />,
];

<NavBar items={items} />;
```

### Uitgebreid voorbeeld

Gebruik `NavBarIdentity` voor de sitenaam en geef die mee via de prop `identity`. Gebruik `currentPage` voor de huidige pagina en `endItems` voor extra items zoals zoeken of inloggen.

```tsx
import { Icon, NavBar, NavBarIdentity, NavBarItem } from '@rijkshuisstijl-community/components-react';

const items = [
  <NavBarItem currentPage href="/" id="home" key="home" label="Home" />,
  <NavBarItem href="/nieuws" id="nieuws" key="nieuws" label="Nieuws" />,
];

const endItems = [<NavBarItem href="/zoeken" icon={<Icon icon="zoek" />} id="zoeken" key="zoeken" label="Zoeken" />];

const identity = <NavBarIdentity href="/">Dataregister</NavBarIdentity>;

<NavBar endItems={endItems} identity={identity} items={items} />;
```

Een item kan ook een `subList` of een `megamenu` krijgen voor een uitklapgedeelte met secties of kolommen. Een sectie of kolom heeft een `id`, een `heading` en `items`.

De classes `rhc-nav-bar__item--button-on-mobile--secondary` en `rhc-nav-bar__item--button-on-mobile--primary` tonen een item op smalle schermen als knop, in plaats van als link.

Gebruik een duidelijke `aria-label` die past bij de inhoud van elke balk.

## API Referentie

### NavBar

| Prop        | Type      | Default | Beschrijving                                             |
| ----------- | --------- | ------- | -------------------------------------------------------- |
| `identity`  | ReactNode | -       | Een NavBarIdentity, getoond aan het begin van de balk.   |
| `items`     | ReactNode | -       | `NavBarItem`-elementen in het hoofdgedeelte van de balk. |
| `endItems`  | ReactNode | -       | `NavBarItem`-elementen aan het einde van de balk.        |
| `megamenu`  | ReactNode | -       | Een `NavBarMegaMenu` dat opent via een menuknop.         |
| `className` | string    | -       | Extra CSS class names.                                   |

### NavBarItem

| Prop          | Type           | Default   | Beschrijving                                                  |
| ------------- | -------------- | --------- | ------------------------------------------------------------- |
| `id`          | string         | verplicht | Unieke id van het item.                                       |
| `label`       | ReactNode      | verplicht | De tekst van de link.                                         |
| `href`        | string         | verplicht | De url van de link.                                           |
| `icon`        | ReactElement   | -         | Icoon voor de tekst.                                          |
| `iconEnd`     | ReactElement   | -         | Icoon na de tekst.                                            |
| `iconOnly`    | boolean        | `false`   | Toont alleen het icoon; de tekst blijft voor schermlezers.    |
| `target`      | string         | -         | Waar de link opent, bijvoorbeeld `_blank`.                    |
| `currentPage` | boolean        | `false`   | Markeert de huidige pagina met `aria-current="page"`.         |
| `subList`     | `{ sections }` | -         | Uitklapgedeelte met secties.                                  |
| `contentId`   | string         | `1`       | Id voor de sublijst. Maak deze uniek bij meerdere sublijsten. |

### NavBarIdentity

| Prop        | Type      | Default   | Beschrijving                            |
| ----------- | --------- | --------- | --------------------------------------- |
| `href`      | string    | verplicht | De URL waar de identity naartoe linkt.  |
| `children`  | ReactNode | verplicht | De naam of titel van de site.           |
| `className` | string    | -         | Extra CSS class names.                  |
| `primary`   | boolean   | -         | Primary variant voor de hoofd navigatie |

### NavBarLink

| Prop        | Type         | Default   | Beschrijving                                               |
| ----------- | ------------ | --------- | ---------------------------------------------------------- |
| `href`      | string       | verplicht | De url van de link.                                        |
| `children`  | ReactNode    | verplicht | De tekst van de link.                                      |
| `current`   | boolean      | `false`   | Markeert de huidige pagina met `aria-current="page"`.      |
| `icon`      | ReactElement | -         | Icoon voor de tekst.                                       |
| `iconEnd`   | ReactElement | -         | Icoon na de tekst.                                         |
| `iconOnly`  | boolean      | `false`   | Toont alleen het icoon; de tekst blijft voor schermlezers. |
| `className` | string       | -         | Extra CSS class names.                                     |
| `target`    | string       | -         | Waar de link opent, bijvoorbeeld `_blank`.                 |
