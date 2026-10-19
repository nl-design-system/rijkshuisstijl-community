# @rijkshuisstijl-community/link-list-css

## 1.2.0

### Minor Changes

- 3845c86: Onderliggende CSS van community-components is nu direct meegebundeld in de `dist` om te voorkomen dat gebruikers half gestylede componenten te zien krijgen.
  Voorheen exporteerden de CSS-packages alleen de Rhc-specifieke klassen. Omdat deze bouwen op community-components, functioneerden ze niet zonder de onderliggende stijlen. De meeste stijlen zijn nu vanuit de `index` naar `@mixin`-structuren verplaatst (met wat tussentijdse boyscouting). Hierdoor worden afhankelijkheden automatisch meegeleverd; zo shipt de Accordion CSS nu bijvoorbeeld ook direct de vereiste Button CSS mee.

### Patch Changes

- cb9bc2c: Minor changes and new aux components to support new footer design and implementation
- Updated dependencies [3845c86]
  - @rijkshuisstijl-community/link-css@1.2.0

## 1.1.0

### Minor Changes

- 455f91f: 3 laags versimpeld naar 2 (met \_\_link)

## 1.0.0

### Major Changes

- 317ebfd: We hebben individuele packages aangemaakt om meer controle te geven over dependency maintenance en versie beheer duidelijker per component te omschrijven.
