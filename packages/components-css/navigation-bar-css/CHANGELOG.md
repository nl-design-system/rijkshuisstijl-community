# @rijkshuisstijl-community/navigation-bar-css

## 1.2.0

### Minor Changes

- cf30b5d: Added new Page Header component
- 0a39303: # NavBarIdentity
  
  NavBarIdentity is nu een eigen component. De prop `identity` van NavBar bestaat niet meer.
  
  - Gebruik `<NavBarIdentity href="/">Naam</NavBarIdentity>` als child van NavBar.
  - De wrapper `rhc-nav-bar__slot-identity` is verwijderd. De styles zit nu op `rhc-nav-bar__identity`.
  - De `target` op de identity-link is verwijderd. De link opent nu in hetzelfde tabblad.

### Patch Changes

- Updated dependencies [cf30b5d]
  - @rijkshuisstijl-community/visually-hidden-css@1.2.0

## 1.1.0

### Minor Changes

- 3845c86: Onderliggende CSS van community-components is nu direct meegebundeld in de `dist` om te voorkomen dat gebruikers half gestylede componenten te zien krijgen.
  Voorheen exporteerden de CSS-packages alleen de Rhc-specifieke klassen. Omdat deze bouwen op community-components, functioneerden ze niet zonder de onderliggende stijlen. De meeste stijlen zijn nu vanuit de `index` naar `@mixin`-structuren verplaatst (met wat tussentijdse boyscouting). Hierdoor worden afhankelijkheden automatisch meegeleverd; zo shipt de Accordion CSS nu bijvoorbeeld ook direct de vereiste Button CSS mee.

### Patch Changes

- Updated dependencies [3845c86]
  - @rijkshuisstijl-community/heading-css@1.1.0
  - @rijkshuisstijl-community/link-css@1.2.0

## 1.0.0

### Major Changes

- 41b86ef: We hebben individuele packages aangemaakt om meer controle te geven over dependency maintenance en versie beheer duidelijker per component te omschrijven.
