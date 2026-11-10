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

const Identity = (<NavBarIdentity href="/">Dataregister</NavBarIdentity>)

<NavBar endItems={endItems} identity={identity} items={items} />;
```

Een item kan ook een `subList` krijgen voor een uitklapgedeelte met secties. Een sectie heeft een `id`, een `heading` en `items`.

De classes `rhc-nav-bar__item--button-on-mobile--secondary` en `rhc-nav-bar__item--button-on-mobile--primary` tonen een item op smalle schermen als knop, in plaats van als link.

Gebruik een duidelijke `aria-label` die past bij de inhoud van elke balk.

### Megamenu

Geef `NavBar` een `megamenu` om de hoofdnavigatie te vervangen door een menuknop die een uitklapmenu opent. De menuknop, op basis van de native Popover API: geen eigen JavaScript nodig, en het paneel sluit ook via de `Escape`-toets of door ernaast te klikken. Na sluiten gaat de focus terug naar de menuknop.

De inhoud van het menu bepaal je zelf. `NavBarMegaMenuTagline` en `NavBarMegaMenuSeparator` zijn er voor de introductietekst, maar de kolommen en links styling je zelf, bijvoorbeeld met `rhc-grid` en `LinkList`:

```tsx
import {
  Heading,
  LinkList,
  LinkListLink,
  NavBar,
  NavBarIdentity,
  NavBarMegaMenuSeparator,
  NavBarMegaMenuTagline,
} from '@rijkshuisstijl-community/components-react';

const megamenu = (
  <>
    <NavBarMegaMenuTrigger>Kies een onderwerp of dienst</NavBarMegaMenuTrigger>
    <NavBarMegaMenuPanel>
      <NavBarMegaMenuTagline>Ingang naar informatie en diensten van alle overheden</NavBarMegaMenuTagline>
      <NavBarMegaMenuSeparator />
      <div className="rhc-grid">
        <div className="rhc-grid__cell rhc-grid__cell-d-3">
          <Heading appearanceLevel={5} className="rhc-nav-bar__megamenu-column-heading" level={3}>
            Diensten van de overheid
          </Heading>
          <LinkList className="rhc-nav-bar__megamenu__link-list">
            <LinkListLink className="rhc-nav-bar__megamenu-column-link" href="/">
              Dienstenoverzicht
            </LinkListLink>
          </LinkList>
        </div>
        <NavBarMegaMenuClose />
      </div>
    </NavBarMegaMenuPanel>
  </>
);

<NavBar identity={<NavBarIdentity href="/">Overheid.nl</NavBarIdentity>} megamenu={megamenu} />;
```

## API Referentie

### NavBar

| Prop        | Type              | Default | Beschrijving                                              |
| ----------- | ----------------- | ------- | --------------------------------------------------------- |
| `identity`  | ReactNode         | -       | Een NavBarIdentity, getoond aan het begin van de balk.    |
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

| Prop        | Type      | Default   | Beschrijving                            |
| ----------- | --------- | --------- | --------------------------------------- |
| `href`      | string    | verplicht | De URL waar de identity naartoe linkt.  |
| `children`  | ReactNode | verplicht | De naam of titel van de site.           |
| `className` | string    | -         | Extra CSS class names.                  |
| `primary`   | boolean   | -         | Primary variant voor de hoofd navigatie |

### NavBarMegaMenuTagline

Optionele introductietekst boven de inhoud van het megamenu.

| Prop        | Type      | Default | Beschrijving           |
| ----------- | --------- | ------- | ---------------------- |
| `children`  | ReactNode | -       | De introductietekst.   |
| `className` | string    | -       | Extra CSS class names. |

### NavBarMegaMenuSeparator

Scheidingslijn, bijvoorbeeld tussen de `NavBarMegaMenuTagline` en de rest van de inhoud.

| Prop        | Type   | Default | Beschrijving           |
| ----------- | ------ | ------- | ---------------------- |
| `className` | string | -       | Extra CSS class names. |
