<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community Nav Bar component

De Navigation Bar is de hoofdnavigatie van een pagina. De onderdelen, zoals `NavBarStart`, `NavBarItem` en `NavBarMegaMenu`, zijn losse exports. Zo werken ze zowel in client components als in React Server Components. De balk heeft twee kanten, `NavBarStart` en `NavBarEnd`. Wat je daarin plaatst bepaal je zelf.

## Anatomie

```tsx
<NavBar>
  <NavBarStart>
    <NavBarIdentity />
    <NavBarItem>
      <NavBarLink href="/">Home</NavBarLink>
    </NavBarItem>
    <NavBarMegaMenu>
      <NavBarMegaMenuTrigger target="onderwerpen">Kies een onderwerp of dienst</NavBarMegaMenuTrigger>
      <NavBarMegaMenuPanel id="onderwerpen">
        <NavBarMegaMenuTagline />
        <NavBarMegaMenuSeparator />
        <NavBarMegaMenuClose target="onderwerpen" />
      </NavBarMegaMenuPanel>
    </NavBarMegaMenu>
  </NavBarStart>
  <NavBarEnd>
    <NavBarItem>
      <NavBarLink href="/inloggen">Inloggen</NavBarLink>
    </NavBarItem>
  </NavBarEnd>
</NavBar>
```

- **`NavBarStart`**: items aan het begin van de balk.
- **`NavBarEnd`**: items aan het einde van de balk, bijvoorbeeld zoeken, inloggen of taalkeuze.
- **`NavBarIdentity`**: de naam of titel van de site, meestal als eerste item in `NavBarStart`.
- **`NavBarItem`**: een li die ook de inhoud kan behouden op de navbar op mobiel ipv in het menu.
- **`NavBarLink`**: een link.
- **`NavBarMegaMenu`**: een item met een `NavBarMegaMenuTrigger` die een `NavBarMegaMenuPanel` opent. Een `NavBarMegaMenuClose` in het paneel sluit het weer.
- **Menuknop**: op smalle schermen klappen de items in achter een menuknop. Die voegt `NavBar` zelf toe.

`NavBarStart` en `NavBarEnd` renderen een `<ul>`; de items renderen een `<li>`. Een eigen item, zoals de `LanguageNavigation`, zet je daarom in een `<NavBarItem>`.

### Smalle schermen

Op smalle schermen toont de balk alleen de identity en de menuknop. De menuknop opent een paneel met alle andere items. De inhoud van een `NavBarMegaMenu` staat daar direct in het paneel; de knop van het megamenu wordt dan niet getoond.

Wil je een item ook op smalle schermen in de balk houden, geef het dan de prop `persistOnSmallViewport`. `NavBarIdentity` is standaard `persistent`, dit kan verborgen worden door `hideOnSmallViewport`.

Het menu en het megamenu gebruiken de native Popover API. Ze sluiten via de `Escape`-toets of door ernaast te klikken, en de focus gaat terug naar de knop. Daarnaast sluiten ze als de toetsenbordfocus het paneel verlaat, zodat de focus nooit achter een open paneel verdwijnt.

## Gebruik

### Eenvoudig voorbeeld

```tsx
import { NavBar, NavBarStart, NavBarItem, NavBarLink } from '@rijkshuisstijl-community/components-react';

<NavBar>
  <NavBarStart>
    <NavBarItem>
      <NavBarLink href="/">Home</NavBarLink>
    </NavBarItem>
    <NavBarItem>
      <NavBarLink href="/nieuws">Nieuws</NavBarLink>
    </NavBarItem>
    <NavBarItem>
      <NavBarLink href="/contact">Contact</NavBarLink>
    </NavBarItem>
  </NavBarStart>
</NavBar>;
```

### Uitgebreid voorbeeld

Gebruik `NavBarIdentity` voor de sitenaam, `currentPage` voor de huidige pagina, en `NavBarEnd` voor extra items zoals zoeken of inloggen.

```tsx
import { Icon, NavBar, NavBarIdentity, NavBarItem, NavBarLink } from '@rijkshuisstijl-community/components-react';

<NavBar aria-label="Dataregister">
  <NavBarStart>
    <NavBarIdentity href="/">Dataregister</NavBarIdentity>
    <NavBarItem>
      <NavBarLink href="/">Home</NavBarLink>
    </NavBarItem>
    <NavBarItem>
      <NavBarLink href="/nieuws">Nieuws</NavBarLink>
    </NavBarItem>
  </NavBarStart>
  <NavBarEnd>
    <NavBarItem>
      <NavBarLink href="/zoeken" icon={<Icon icon="zoek" />}>
        Zoeken
      </NavBarLink>
    </NavBarItem>
  </NavBarEnd>
</NavBar>;
```

Gebruik een duidelijke `aria-label` die past bij de inhoud van elke balk, zeker als er meerdere balken op een pagina staan.

### Megamenu

Plaats een `NavBarMegaMenu` in `NavBarStart` of `NavBarEnd`, met daarin een `NavBarMegaMenuTrigger` en een `NavBarMegaMenuPanel`. Op brede schermen opent de Trigger het paneel onder de balk; op smalle schermen zijn de Trigger en de `NavBarMegaMenuClose` verborgen en staat de inhoud van het paneel direct in het menu van de balk.

De onderdelen gebruiken de native Popover API en vinden elkaar via een id, net als `popovertarget` in HTML. Geef het `NavBarMegaMenuPanel` een unieke `id` en geef dezelfde waarde als `target` aan de `NavBarMegaMenuTrigger` en de `NavBarMegaMenuClose`. Waar je de `NavBarMegaMenuClose` in het paneel plaatst bepaal je zelf.

De inhoud van het menu bepaal je zelf. `NavBarMegaMenuTagline` en `NavBarMegaMenuSeparator` zijn er voor de introductietekst, maar de kolommen en links styling je zelf, bijvoorbeeld met `rhc-grid` en `LinkList`:

```tsx
import { Heading, LinkList, LinkListLink, NavBar } from '@rijkshuisstijl-community/components-react';

<NavBar aria-label="Overheid.nl">
  <NavBarStart>
    <NavBarIdentity primary href="/">
      Overheid.nl
    </NavBarIdentity>
    <NavBarMegaMenu>
      <NavBarMegaMenuTrigger target="onderwerpen">Kies een onderwerp of dienst</NavBarMegaMenuTrigger>
      <NavBarMegaMenuPanel id="onderwerpen">
        <NavBarMegaMenuTagline>Ingang naar informatie en diensten van alle overheden</NavBarMegaMenuTagline>
        <NavBarMegaMenuSeparator />
        <div className="rhc-grid">
          <div className="rhc-grid__cell rhc-grid__cell-d-3">
            <Heading appearanceLevel={5} level={3}>
              Diensten van de overheid
            </Heading>
            <LinkList>
              <LinkListLink href="/">Dienstenoverzicht</LinkListLink>
            </LinkList>
          </div>
        </div>
        <NavBarMegaMenuClose target="onderwerpen" />
      </NavBarMegaMenuPanel>
    </NavBarMegaMenu>
  </NavBarStart>
</NavBar>;
```

## API Referentie

### NavBar

| Prop          | Type      | Default            | Beschrijving                                           |
| ------------- | --------- | ------------------ | ------------------------------------------------------ |
| `children`    | ReactNode | -                  | `NavBarStart` en/of `NavBarEnd`.                       |
| `aria-label`  | string    | `"Hoofdnavigatie"` | Toegankelijke naam van de navigatie.                   |
| `toggleLabel` | string    | `"Menu"`           | Toegankelijke naam van de menuknop op smalle schermen. |
| `className`   | string    | -                  | Extra CSS class names.                                 |

### NavBarStart / NavBarEnd

Renderen een `<ul>` en accepteren alle attributen van een `<ul>`.

| Prop        | Type      | Default | Beschrijving                                                    |
| ----------- | --------- | ------- | --------------------------------------------------------------- |
| `children`  | ReactNode | -       | `NavBarIdentity`, `NavBarItem`, `NavBarMegaMenu` of een `<li>`. |
| `className` | string    | -       | Extra CSS class names.                                          |

### NavBarItem

| Prop                     | Type    | Default | Beschrijving                                    |
| ------------------------ | ------- | ------- | ----------------------------------------------- |
| `persistOnSmallViewport` | boolean | `false` | Blijft op smalle schermen zichtbaar in de balk. |

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

### NavBarIdentity

| Prop                  | Type      | Default   | Beschrijving                            |
| --------------------- | --------- | --------- | --------------------------------------- |
| `href`                | string    | verplicht | De URL waar de identity naartoe linkt.  |
| `children`            | ReactNode | verplicht | De naam of titel van de site.           |
| `className`           | string    | -         | Extra CSS class names.                  |
| `primary`             | boolean   | -         | Primary variant voor de hoofd navigatie |
| `hideOnSmallViewport` | boolean   | `false`   | Wordt verborgen op smalle schermen.     |

### NavBarMegaMenu

Rendert een `<li>` en accepteert alle attributen van een `<li>`. Bevat de `Trigger` en het `Panel`.

### NavBarMegaMenuTrigger

| Prop       | Type      | Default   | Beschrijving                                                        |
| ---------- | --------- | --------- | ------------------------------------------------------------------- |
| `target`   | string    | verplicht | De `id` van het `NavBarMegaMenuPanel` dat opent.                    |
| `children` | ReactNode | -         | Tekst van de menuknop, bijvoorbeeld "Kies een onderwerp of dienst". |

### NavBarMegaMenuPanel

| Prop       | Type      | Default   | Beschrijving                                               |
| ---------- | --------- | --------- | ---------------------------------------------------------- |
| `id`       | string    | verplicht | Uniek id, waarnaar `target` van Trigger en Close verwijst. |
| `children` | ReactNode | -         | De inhoud van het megamenu.                                |

### NavBarMegaMenuClose

Een subtle `Button` die het paneel sluit. Alleen zichtbaar op brede schermen.

| Prop       | Type      | Default           | Beschrijving                                     |
| ---------- | --------- | ----------------- | ------------------------------------------------ |
| `target`   | string    | verplicht         | De `id` van het `NavBarMegaMenuPanel` dat sluit. |
| `children` | ReactNode | kruis + "Sluiten" | Inhoud van de knop.                              |

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
