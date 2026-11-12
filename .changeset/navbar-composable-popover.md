---
'@rijkshuisstijl-community/navigation-bar-react': major
'@rijkshuisstijl-community/navigation-bar-css': major
'@rijkshuisstijl-community/page-header-css': minor
'@rijkshuisstijl-community/language-navigation-css': patch
---

# Navigation Bar: samenstelbaar en op basis van de Popover API

De Navigation Bar is opnieuw opgezet. Je stelt de balk nu zelf samen uit losse onderdelen. Het mobiele menu en het megamenu gebruiken de native Popover API. Zo sluiten ze met `Escape`, door ernaast te klikken en als de toetsenbordfocus het paneel verlaat.

## Nieuwe opbouw

```tsx
<NavBar aria-label="Hoofdnavigatie">
  <NavBarStart>
    <NavBarIdentity href="/">Naam</NavBarIdentity>
    <NavBarItem href="/" id="home" label="Home" />
    <NavBarMegaMenu>
      <NavBarMegaMenuTrigger target="onderwerpen">Onderwerpen</NavBarMegaMenuTrigger>
      <NavBarMegaMenuPanel id="onderwerpen">
        <NavBarMegaMenuTagline>…</NavBarMegaMenuTagline>
        <NavBarMegaMenuSeparator />
        {/* eigen inhoud */}
        <NavBarMegaMenuClose target="onderwerpen" />
      </NavBarMegaMenuPanel>
    </NavBarMegaMenu>
  </NavBarStart>
  <NavBarEnd>
    <NavBarItem href="/contact" id="contact" label="Contact" />
  </NavBarEnd>
</NavBar>
```

- `NavBarStart` en `NavBarEnd` zijn de twee kanten van de balk.
- Op smalle schermen bundelt `NavBar` de items in een menu achter een menuknop. Met `persistent` blijft een item in de balk staan. `NavBarIdentity` is standaard `persistent`.
- Op smalle schermen staat de inhoud van een `NavBarMegaMenuPanel` direct in het menu.
- `NavBarMegaMenuTrigger` en `NavBarMegaMenuClose` vinden het paneel via `target`, dat gelijk is aan de `id` van het paneel.
- `toggleLabel` op `NavBar` geeft de menuknop zijn toegankelijke naam (standaard "Menu"). `aria-label` is standaard "Hoofdnavigatie".

## Page Header

`rhc-page-header` zet `--rhc-navigation-bar-menu-padding-inline` op de kantlijn van de page section. Zo lijnt het mobiele menu van de Navigation Bar daarbinnen uit.

## Language Navigation

De lijst van de Language Navigation valt niet meer onder gepositioneerde content die erna komt.
