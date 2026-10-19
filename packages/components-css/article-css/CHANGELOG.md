# @rijkshuisstijl-community/article-css

## 2.2.0

### Minor Changes

- 3845c86: Onderliggende CSS van community-components is nu direct meegebundeld in de `dist` om te voorkomen dat gebruikers half gestylede componenten te zien krijgen.
  Voorheen exporteerden de CSS-packages alleen de Rhc-specifieke klassen. Omdat deze bouwen op community-components, functioneerden ze niet zonder de onderliggende stijlen. De meeste stijlen zijn nu vanuit de `index` naar `@mixin`-structuren verplaatst (met wat tussentijdse boyscouting). Hierdoor worden afhankelijkheden automatisch meegeleverd; zo shipt de Accordion CSS nu bijvoorbeeld ook direct de vereiste Button CSS mee.

## 2.1.0

### Minor Changes

- de35f24: Update README files

### Patch Changes

- c414601: Ensure package is published with provenance

## 2.0.1

### Patch Changes

- e9dae7c: Updated broken links in the documentation

## 2.0.0

### Major Changes

- 04d1cf1: We hebben individuele packages aangemaakt om meer controle te geven over dependency maintenance en versie beheer duidelijker per component te omschrijven.
