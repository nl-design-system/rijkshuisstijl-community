# @rijkshuisstijl-community/footer-css

## 2.0.0

### Major Changes

- cb9bc2c: Implement new footer design

### Minor Changes

- 64b1fa5: Correct alignment, paddings on mobile, make headings an actual h3
- 3845c86: Onderliggende CSS van community-components is nu direct meegebundeld in de `dist` om te voorkomen dat gebruikers half gestylede componenten te zien krijgen.
  Voorheen exporteerden de CSS-packages alleen de Rhc-specifieke klassen. Omdat deze bouwen op community-components, functioneerden ze niet zonder de onderliggende stijlen. De meeste stijlen zijn nu vanuit de `index` naar `@mixin`-structuren verplaatst (met wat tussentijdse boyscouting). Hierdoor worden afhankelijkheden automatisch meegeleverd; zo shipt de Accordion CSS nu bijvoorbeeld ook direct de vereiste Button CSS mee.

### Patch Changes

- Updated dependencies [3845c86]
  - @rijkshuisstijl-community/paragraph-css@2.2.0
  - @rijkshuisstijl-community/heading-css@1.1.0

## 1.0.1

### Patch Changes

- e41c59f: update dependencies

## 1.0.0

### Major Changes

- e56376c: We hebben individuele packages aangemaakt om meer controle te geven over dependency maintenance en versie beheer duidelijker per component te omschrijven.
