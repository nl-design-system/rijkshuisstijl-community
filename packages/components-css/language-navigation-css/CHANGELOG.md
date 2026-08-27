# @rijkshuisstijl-community/language-navigation-css

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
