# @rijkshuisstijl-community/navigation-bar-react

## 2.0.0

### Major Changes

- ad0ee52: # NavBarLink
  
  De link in de NavBar is nu een eigen component: `NavBarLink`. `NavBarItem` gebruikt deze component voor de link.
  
  De prop `items` van `NavBar` is nu een `ReactNode` in plaats van een array met objecten. Geef de items mee als `NavBarItem`-elementen, net als `endItems`.
  
  Het oude type `NavBarLinkProps` heet nu `NavBarLinkData`. De naam `NavBarLinkProps` hoort nu bij de nieuwe component `NavBarLink`.
- 47932f6: # Navigation Bar: samenstelbaar en op basis van de Popover API
  
  De Navigation Bar is opnieuw opgezet. Je stelt de balk nu zelf samen uit losse onderdelen. Het mobiele menu en het megamenu gebruiken de native Popover API. Zo sluiten ze met `Escape`, door ernaast te klikken en als de toetsenbordfocus het paneel verlaat.
  
  ## Nieuwe opbouw
  
  ```tsx
  <NavBar aria-label="Hoofdnavigatie">
    <NavBarStart>
      <NavBarIdentity href="/">Naam</NavBarIdentity>
      <NavBarItem>
        <NavBarLink href="/" >Home</NavbarLink>
      </NavBarItem>
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
      <NavBarItem>
        <NavBarLink href="/contact">Contact</NavBarLink>
      </NavBarItem>
    </NavBarEnd>
  </NavBar>
  ```
  
  - `NavBarStart` en `NavBarEnd` zijn de twee kanten van de balk.
  - Op smalle schermen bundelt `NavBar` de items in een menu achter een menuknop. Met `persistOnSmallViewport` blijft een item in de balk staan. `NavBarIdentity` is standaard `persistent`, dit kan verborgen worden door `hideOnSmallViewport`.
  - Op smalle schermen staat de inhoud van een `NavBarMegaMenuPanel` direct in het menu.
  - `NavBarMegaMenuTrigger` en `NavBarMegaMenuClose` vinden het paneel via `target`, dat gelijk is aan de `id` van het paneel.
  - `toggleLabel` op `NavBar` geeft de menuknop zijn toegankelijke naam (standaard "Menu"). `aria-label` is standaard "Hoofdnavigatie".
  
  ## Page Header
  
  `rhc-page-header` zet `--rhc-navigation-bar-menu-padding-inline` op de kantlijn van de page section. Zo lijnt het mobiele menu van de Navigation Bar daarbinnen uit.
  
  ## Language Navigation
  
  De lijst van de Language Navigation valt niet meer onder gepositioneerde content die erna komt.

### Minor Changes

- cf30b5d: Added new Page Header component

### Patch Changes

- Updated dependencies [ad84e31]
- Updated dependencies [47932f6]
- Updated dependencies [cf30b5d]
  - @rijkshuisstijl-community/button-react@2.0.0
  - @rijkshuisstijl-community/navigation-bar-css@2.0.0

## 1.0.4

### Patch Changes

- Updated dependencies [3845c86]
  - @rijkshuisstijl-community/navigation-bar-css@1.1.0
  - @rijkshuisstijl-community/link-list-react@1.1.1
  - @rijkshuisstijl-community/heading-react@1.0.3
  - @rijkshuisstijl-community/link-react@1.1.3

## 1.0.3

### Patch Changes

- 38c6e39: Fix: de `/no-side-effects` entrypoints laden geen CSS meer. Componenten importeerden onderliggende componenten via hun standaard entrypoint, waardoor de bijbehorende CSS toch als side effect werd geladen — ook bij gebruik van `/no-side-effects`. Interne imports gebruiken nu `/no-side-effects`; de standaard entrypoints importeren de CSS van onderliggende componenten expliciet, zodat het bestaande gedrag daar ongewijzigd blijft.
- 89b2604: Fix security vulnerabilities identified by pnpm audit by upgrading vitest and @vitest/coverage-v8 from 4.1.8 to 4.1.10.
- Updated dependencies [91d25ee]
- Updated dependencies [455f91f]
- Updated dependencies [89b2604]
  - @rijkshuisstijl-community/link-react@1.1.2
  - @rijkshuisstijl-community/link-list-react@1.1.0
  - @rijkshuisstijl-community/column-layout-react@1.0.2
  - @rijkshuisstijl-community/heading-react@1.0.2
  - @rijkshuisstijl-community/icon-react@3.1.3

## 1.0.2

### Patch Changes

- Updated dependencies [b3db8e1]
  - @rijkshuisstijl-community/icon-react@3.1.2

## 1.0.1

### Patch Changes

- e41c59f: update dependencies
- Updated dependencies [e41c59f]
  - @rijkshuisstijl-community/column-layout-react@1.0.1
  - @rijkshuisstijl-community/link-list-react@1.0.1
  - @rijkshuisstijl-community/heading-react@1.0.1
  - @rijkshuisstijl-community/icon-react@3.1.1
  - @rijkshuisstijl-community/link-react@1.1.1

## 1.0.0

### Major Changes

- 41b86ef: We hebben individuele packages aangemaakt om meer controle te geven over dependency maintenance en versie beheer duidelijker per component te omschrijven.

### Patch Changes

- Updated dependencies [751ef52]
- Updated dependencies [c414601]
- Updated dependencies [786a5e5]
- Updated dependencies [02786d9]
- Updated dependencies [317ebfd]
- Updated dependencies [de35f24]
- Updated dependencies [41b86ef]
- Updated dependencies [c9e30de]
  - @rijkshuisstijl-community/heading-react@1.0.0
  - @rijkshuisstijl-community/icon-react@3.1.0
  - @rijkshuisstijl-community/link-react@1.1.0
  - @rijkshuisstijl-community/column-layout-react@1.0.0
  - @rijkshuisstijl-community/link-list-react@1.0.0
  - @rijkshuisstijl-community/navigation-bar-css@1.0.0
