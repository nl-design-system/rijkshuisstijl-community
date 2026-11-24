# @rijkshuisstijl-community/language-navigation-css

## 1.2.0

### Minor Changes

- cf30b5d: Added new Page Header component

### Patch Changes

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
- f2893f4: Language navigation, hard coded font-size verwijderd.
  Onnodige inline-size van Language Navigation en Navigation-Bar verwijderd.

## 1.1.0

### Minor Changes

- 3845c86: Onderliggende CSS van community-components is nu direct meegebundeld in de `dist` om te voorkomen dat gebruikers half gestylede componenten te zien krijgen.
  Voorheen exporteerden de CSS-packages alleen de Rhc-specifieke klassen. Omdat deze bouwen op community-components, functioneerden ze niet zonder de onderliggende stijlen. De meeste stijlen zijn nu vanuit de `index` naar `@mixin`-structuren verplaatst (met wat tussentijdse boyscouting). Hierdoor worden afhankelijkheden automatisch meegeleverd; zo shipt de Accordion CSS nu bijvoorbeeld ook direct de vereiste Button CSS mee.

### Patch Changes

- Updated dependencies [3845c86]
  - @rijkshuisstijl-community/link-button-css@1.1.0
  - @rijkshuisstijl-community/link-css@1.2.0

## 1.0.2

### Patch Changes

- 89b2604: Add spacing between the label and icon in the language navigation trigger using 'rhc.link.column-gap'.
- 4412b0c: Refactor: Move self-written reset classes to a shared mixin and include in index.scss
- 89b2604: Fix security vulnerabilities identified by pnpm audit by upgrading vitest and @vitest/coverage-v8 from 4.1.8 to 4.1.10.
- bcee4ed: Remove the obsolete listbox workaround from the language navigation component.

## 1.0.1

### Patch Changes

- e41c59f: update dependencies

## 1.0.0

### Major Changes

- 1958cf3: We hebben individuele packages aangemaakt om meer controle te geven over dependency maintenance en versie beheer duidelijker per component te omschrijven.
