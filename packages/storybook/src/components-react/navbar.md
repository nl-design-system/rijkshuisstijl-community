<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community Nav Bar component

De Navigation Bar is de hoofdnavigatie van een pagina. Het is een compound component: alle onderdelen gebruik je via `NavBar`, zoals `NavBar.Start`, `NavBar.Item` en `NavBar.MegaMenu`. De balk heeft twee kanten, `NavBar.Start` en `NavBar.End`. Wat je daarin plaatst bepaal je zelf.

## Anatomie

```tsx
<NavBar>
  <NavBar.Start>
    <NavBar.Identity />
    <NavBar.Item />
    <NavBar.MegaMenu>
      <NavBar.MegaMenu.Trigger target="onderwerpen">Kies een onderwerp of dienst</NavBar.MegaMenu.Trigger>
      <NavBar.MegaMenu.Panel id="onderwerpen">
        <NavBar.MegaMenu.Tagline />
        <NavBar.MegaMenu.Separator />
        <NavBar.MegaMenu.Close target="onderwerpen" />
      </NavBar.MegaMenu.Panel>
    </NavBar.MegaMenu>
  </NavBar.Start>
  <NavBar.End>
    <NavBar.Item />
  </NavBar.End>
</NavBar>
```

- **`NavBar.Start`**: items aan het begin van de balk.
- **`NavBar.End`**: items aan het einde van de balk, bijvoorbeeld zoeken, inloggen of taalkeuze.
- **`NavBar.Identity`**: de naam of titel van de site, meestal als eerste item in `NavBar.Start`.
- **`NavBar.Item`**: een link, optioneel met een sublijst (een uitklapgedeelte met secties).
- **`NavBar.MegaMenu`**: een item met een `Trigger` die een `Panel` met links in kolommen opent. Een `Close` in het paneel sluit het weer.
- **Menuknop**: op smalle schermen klappen de items in achter een menuknop. Die voegt `NavBar` zelf toe.

`NavBar.Start` en `NavBar.End` renderen een `<ul>`; de items renderen een `<li>`. Een eigen item, zoals de `LanguageNavigation`, zet je daarom in een `<li>`.

### Smalle schermen

Op smalle schermen toont de balk alleen de identity en de menuknop. De menuknop opent een paneel met alle andere items. De inhoud van een `NavBar.MegaMenu` staat daar direct in het paneel; de knop van het megamenu wordt dan niet getoond.

Wil je een item ook op smalle schermen in de balk houden, geef het dan de prop `persistent`. `NavBar.Identity` is standaard `persistent`.

Het menu en het megamenu gebruiken de native Popover API. Er is geen eigen JavaScript nodig: ze sluiten via de `Escape`-toets of door ernaast te klikken, en de focus gaat terug naar de knop.

## Gebruik

### Eenvoudig voorbeeld

```tsx
import { NavBar } from '@rijkshuisstijl-community/components-react';

<NavBar>
  <NavBar.Start>
    <NavBar.Item href="/" id="home" label="Home" />
    <NavBar.Item href="/nieuws" id="nieuws" label="Nieuws" />
    <NavBar.Item href="/contact" id="contact" label="Contact" />
  </NavBar.Start>
</NavBar>;
```

### Uitgebreid voorbeeld

Gebruik `NavBar.Identity` voor de sitenaam, `currentPage` voor de huidige pagina, en `NavBar.End` voor extra items zoals zoeken of inloggen.

```tsx
import { Icon, NavBar } from '@rijkshuisstijl-community/components-react';

<NavBar aria-label="Dataregister">
  <NavBar.Start>
    <NavBar.Identity href="/">Dataregister</NavBar.Identity>
    <NavBar.Item currentPage href="/" id="home" label="Home" />
    <NavBar.Item href="/nieuws" id="nieuws" label="Nieuws" />
  </NavBar.Start>
  <NavBar.End>
    <NavBar.Item href="/zoeken" icon={<Icon icon="zoek" />} id="zoeken" label="Zoeken" />
  </NavBar.End>
</NavBar>;
```

Een item kan ook een `subList` krijgen voor een uitklapgedeelte met secties. Een sectie heeft een `id`, een `heading` en `items`.

De classes `rhc-nav-bar__item--button-on-mobile--secondary` en `rhc-nav-bar__item--button-on-mobile--primary` tonen een item op smalle schermen als knop, in plaats van als link.

Gebruik een duidelijke `aria-label` die past bij de inhoud van elke balk, zeker als er meerdere balken op een pagina staan.

### Megamenu

Plaats een `NavBar.MegaMenu` in `NavBar.Start` of `NavBar.End`, met daarin een `NavBar.MegaMenu.Trigger` en een `NavBar.MegaMenu.Panel`. Op brede schermen opent de Trigger het paneel onder de balk; op smalle schermen zijn de Trigger en de `NavBar.MegaMenu.Close` verborgen en staat de inhoud van het paneel direct in het menu van de balk.

De onderdelen werken zonder JavaScript via de native Popover API en vinden elkaar via een id, net als `popovertarget` in HTML. Geef het `Panel` een unieke `id` en geef dezelfde waarde als `target` aan de `Trigger` en de `Close`. Waar je de `Close` in het paneel plaatst bepaal je zelf.

De inhoud van het menu bepaal je zelf. `NavBar.MegaMenu.Tagline` en `NavBar.MegaMenu.Separator` zijn er voor de introductietekst, maar de kolommen en links styling je zelf, bijvoorbeeld met `rhc-grid` en `LinkList`:

```tsx
import { Heading, LinkList, LinkListLink, NavBar } from '@rijkshuisstijl-community/components-react';

<NavBar aria-label="Overheid.nl">
  <NavBar.Start>
    <NavBar.Identity primary href="/">
      Overheid.nl
    </NavBar.Identity>
    <NavBar.MegaMenu>
      <NavBar.MegaMenu.Trigger target="onderwerpen">Kies een onderwerp of dienst</NavBar.MegaMenu.Trigger>
      <NavBar.MegaMenu.Panel id="onderwerpen">
        <NavBar.MegaMenu.Tagline>Ingang naar informatie en diensten van alle overheden</NavBar.MegaMenu.Tagline>
        <NavBar.MegaMenu.Separator />
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

        <NavBar.MegaMenu.Close target="onderwerpen" />
      </NavBar.MegaMenu.Panel>
    </NavBar.MegaMenu>
  </NavBar.Start>
</NavBar>;
```

## API Referentie

### NavBar

| Prop          | Type      | Default            | Beschrijving                                           |
| ------------- | --------- | ------------------ | ------------------------------------------------------ |
| `children`    | ReactNode | -                  | `NavBar.Start` en/of `NavBar.End`.                     |
| `aria-label`  | string    | `"Hoofdnavigatie"` | Toegankelijke naam van de navigatie.                   |
| `toggleLabel` | string    | `"Menu"`           | Toegankelijke naam van de menuknop op smalle schermen. |
| `className`   | string    | -                  | Extra CSS class names.                                 |

### NavBar.Start / NavBar.End

Renderen een `<ul>` en accepteren alle attributen van een `<ul>`.

| Prop        | Type      | Default | Beschrijving                                                       |
| ----------- | --------- | ------- | ------------------------------------------------------------------ |
| `children`  | ReactNode | -       | `NavBar.Identity`, `NavBar.Item`, `NavBar.MegaMenu` of een `<li>`. |
| `className` | string    | -       | Extra CSS class names.                                             |

### NavBar.Item

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

### NavBar.Identity

| Prop         | Type      | Default   | Beschrijving                                    |
| ------------ | --------- | --------- | ----------------------------------------------- |
| `href`       | string    | verplicht | De URL waar de identity naartoe linkt.          |
| `children`   | ReactNode | verplicht | De naam of titel van de site.                   |
| `className`  | string    | -         | Extra CSS class names.                          |
| `primary`    | boolean   | -         | Primary variant voor de hoofd navigatie         |
| `persistent` | boolean   | `true`    | Blijft op smalle schermen zichtbaar in de balk. |

### NavBar.MegaMenu

Rendert een `<li>` en accepteert alle attributen van een `<li>`. Bevat de `Trigger` en het `Panel`.

### NavBar.MegaMenu.Trigger

| Prop       | Type      | Default   | Beschrijving                                                        |
| ---------- | --------- | --------- | ------------------------------------------------------------------- |
| `target`   | string    | verplicht | De `id` van het `NavBar.MegaMenu.Panel` dat opent.                  |
| `children` | ReactNode | -         | Tekst van de menuknop, bijvoorbeeld "Kies een onderwerp of dienst". |

### NavBar.MegaMenu.Panel

| Prop       | Type      | Default   | Beschrijving                                               |
| ---------- | --------- | --------- | ---------------------------------------------------------- |
| `id`       | string    | verplicht | Uniek id, waarnaar `target` van Trigger en Close verwijst. |
| `children` | ReactNode | -         | De inhoud van het megamenu.                                |

### NavBar.MegaMenu.Close

Een subtle `Button` die het paneel sluit. Alleen zichtbaar op brede schermen.

| Prop       | Type      | Default           | Beschrijving                                       |
| ---------- | --------- | ----------------- | -------------------------------------------------- |
| `target`   | string    | verplicht         | De `id` van het `NavBar.MegaMenu.Panel` dat sluit. |
| `children` | ReactNode | kruis + "Sluiten" | Inhoud van de knop.                                |

### NavBar.MegaMenu.Tagline

Optionele introductietekst boven de inhoud van het megamenu.

| Prop        | Type      | Default | Beschrijving           |
| ----------- | --------- | ------- | ---------------------- |
| `children`  | ReactNode | -       | De introductietekst.   |
| `className` | string    | -       | Extra CSS class names. |

### NavBar.MegaMenu.Separator

Scheidingslijn, bijvoorbeeld tussen de `NavBar.MegaMenu.Tagline` en de rest van de inhoud.

| Prop        | Type   | Default | Beschrijving           |
| ----------- | ------ | ------- | ---------------------- |
| `className` | string | -       | Extra CSS class names. |
