# @rijkshuisstijl-community/logo-css

## 1.2.0

### Minor Changes

- 6fe22ce: verplaats letter-spacing naar index.scss wegens :lang() filtering
- 3845c86: Onderliggende CSS van community-components is nu direct meegebundeld in de `dist` om te voorkomen dat gebruikers half gestylede componenten te zien krijgen.
  Voorheen exporteerden de CSS-packages alleen de Rhc-specifieke klassen. Omdat deze bouwen op community-components, functioneerden ze niet zonder de onderliggende stijlen. De meeste stijlen zijn nu vanuit de `index` naar `@mixin`-structuren verplaatst (met wat tussentijdse boyscouting). Hierdoor worden afhankelijkheden automatisch meegeleverd; zo shipt de Accordion CSS nu bijvoorbeeld ook direct de vereiste Button CSS mee.
- 683939c: Letterspacing toegevoegd voor het logo.
  - Nieuwe `letter-spacing.tight` (-0.4%) en `letter-spacing.normal` (0%) tokens gemaakt in de globale type-scale.
  - De logo `title` gebruikt nu `normal` (0%) en de logo `subtitle` gebruikt `tight` (-0.4%).

  ***

## 1.1.0

### Minor Changes

- 4b9bf3a: variant mogelijk zonder organisatie + variant mogelijk met hyperlink

## 1.0.0

### Major Changes

- 21112d5: We hebben individuele packages aangemaakt om meer controle te geven over dependency maintenance en versie beheer duidelijker per component te omschrijven.
