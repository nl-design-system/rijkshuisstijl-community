<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community Nav Bar component

De Navigation Bar is de hoofdnavigatie van een pagina. De balk heeft twee kanten: `startItems` en `endItems`. Wat je daarin plaatst bepaal je zelf: een `NavBarIdentity`, `NavBarItem`s, een `NavBarMegaMenu` of een eigen `<li>`.

## Anatomie

De Navigation Bar bestaat uit de volgende onderdelen:

- **Start items**: items aan het begin van de balk.
- **End items**: items aan het einde van de balk, bijvoorbeeld zoeken, inloggen of taalkeuze.
- **Identity**: de naam of titel van de site, meestal als eerste start item.
- **Sublijst**: een uitklapgedeelte bij een item, opgebouwd uit secties met een kop en links.
- **Megamenu**: een item met een menuknop die een uitklappaneel met links in kolommen opent.
- **Menuknop**: op smalle schermen klappen de items in achter een menuknop.

### Smalle schermen

Op smalle schermen toont de balk alleen de identity en de menuknop. De menuknop opent een paneel met alle andere items. De inhoud van een `NavBarMegaMenu` staat daar direct in het paneel; de knop van het megamenu wordt dan niet getoond.

Wil je een item ook op smalle schermen in de balk houden, geef het dan de prop `persistent`. `NavBarIdentity` is standaard `persistent`.

Het menu en het megamenu gebruiken de native Popover API. Er is geen eigen JavaScript nodig: ze sluiten via de `Escape`-toets of door ernaast te klikken, en de focus gaat terug naar de knop.

## Gebruik

### Eenvoudig voorbeeld

```tsx
import { NavBar, NavBarItem } from '@rijkshuisstijl-community/components-react';

<NavBar
  startItems={
    <>
      <NavBarItem href="/" id="home" label="Home" />
      <NavBarItem href="/nieuws" id="nieuws" label="Nieuws" />
      <NavBarItem href="/contact" id="contact" label="Contact" />
    </>
  }
/>;
```

### Uitgebreid voorbeeld

Gebruik `NavBarIdentity` voor de sitenaam, `currentPage` voor de huidige pagina, en `endItems` voor extra items zoals zoeken of inloggen.

```tsx
import { Icon, NavBar, NavBarIdentity, NavBarItem } from '@rijkshuisstijl-community/components-react';

<NavBar
  aria-label="Dataregister"
  startItems={
    <>
      <NavBarIdentity href="/">Dataregister</NavBarIdentity>
      <NavBarItem currentPage href="/" id="home" label="Home" />
      <NavBarItem href="/nieuws" id="nieuws" label="Nieuws" />
    </>
  }
  endItems={<NavBarItem href="/zoeken" icon={<Icon icon="zoek" />} id="zoeken" label="Zoeken" />}
/>;
```

Een item kan ook een `subList` krijgen voor een uitklapgedeelte met secties. Een sectie heeft een `id`, een `heading` en `items`.

De classes `rhc-nav-bar__item--button-on-mobile--secondary` en `rhc-nav-bar__item--button-on-mobile--primary` tonen een item op smalle schermen als knop, in plaats van als link.

Gebruik een duidelijke `aria-label` die past bij de inhoud van elke balk, zeker als er meerdere balken op een pagina staan.

### Megamenu

Plaats een `NavBarMegaMenu` in `startItems` of `endItems`. Op brede schermen opent de knop een paneel onder de balk; op smalle schermen staat de inhoud direct in het menu van de balk.

De inhoud van het menu bepaal je zelf. `NavBarMegaMenuTagline` en `NavBarMegaMenuSeparator` zijn er voor de introductietekst, maar de kolommen en links styling je zelf, bijvoorbeeld met `rhc-grid` en `LinkList`:

```tsx
import {
  Heading,
  LinkList,
  LinkListLink,
  NavBar,
  NavBarIdentity,
  NavBarMegaMenu,
  NavBarMegaMenuSeparator,
  NavBarMegaMenuTagline,
} from '@rijkshuisstijl-community/components-react';

<NavBar
  startItems={
    <>
      <NavBarIdentity primary href="/">
        Overheid.nl
      </NavBarIdentity>
      <NavBarMegaMenu label="Kies een onderwerp of dienst">
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
        </div>
      </NavBarMegaMenu>
    </>
  }
/>;
```

## API Referentie

### NavBar

| Prop          | Type      | Default            | Beschrijving                                           |
| ------------- | --------- | ------------------ | ------------------------------------------------------ |
| `startItems`  | ReactNode | -                  | `<li>`-elementen aan het begin van de balk.            |
| `endItems`    | ReactNode | -                  | `<li>`-elementen aan het einde van de balk.            |
| `aria-label`  | string    | `"Hoofdnavigatie"` | Toegankelijke naam van de navigatie.                   |
| `toggleLabel` | string    | `"Menu"`           | Toegankelijke naam van de menuknop op smalle schermen. |
| `className`   | string    | -                  | Extra CSS class names.                                 |

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
| `persistent`  | boolean        | `false`   | Blijft op smalle schermen zichtbaar in de balk.               |

### NavBarIdentity

| Prop         | Type      | Default   | Beschrijving                                    |
| ------------ | --------- | --------- | ----------------------------------------------- |
| `href`       | string    | verplicht | De URL waar de identity naartoe linkt.          |
| `children`   | ReactNode | verplicht | De naam of titel van de site.                   |
| `className`  | string    | -         | Extra CSS class names.                          |
| `primary`    | boolean   | -         | Primary variant voor de hoofd navigatie         |
| `persistent` | boolean   | `true`    | Blijft op smalle schermen zichtbaar in de balk. |

### NavBarMegaMenu

| Prop         | Type      | Default                          | Beschrijving                      |
| ------------ | --------- | -------------------------------- | --------------------------------- |
| `label`      | ReactNode | `"Kies een onderwerp of dienst"` | Tekst van de menuknop.            |
| `closeLabel` | string    | `"Sluit menu"`                   | Toegankelijke naam van sluitknop. |
| `children`   | ReactNode | -                                | De inhoud van het megamenu.       |

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
