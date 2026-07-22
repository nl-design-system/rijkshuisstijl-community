# @rijkshuisstijl-community/card-react

## 1.1.2

### Patch Changes

- 38c6e39: Fix: de `/no-side-effects` entrypoints laden geen CSS meer. Componenten importeerden onderliggende componenten via hun standaard entrypoint, waardoor de bijbehorende CSS toch als side effect werd geladen — ook bij gebruik van `/no-side-effects`. Interne imports gebruiken nu `/no-side-effects`; de standaard entrypoints importeren de CSS van onderliggende componenten expliciet, zodat het bestaande gedrag daar ongewijzigd blijft.
- 89b2604: Fix security vulnerabilities identified by pnpm audit by upgrading vitest and @vitest/coverage-v8 from 4.1.8 to 4.1.10.
- Updated dependencies [91d25ee]
- Updated dependencies [89b2604]
  - @rijkshuisstijl-community/link-react@1.1.2

## 1.1.1

### Patch Changes

- e41c59f: update dependencies
- Updated dependencies [e41c59f]
  - @rijkshuisstijl-community/link-react@1.1.1

## 1.1.0

### Minor Changes

- de35f24: Update README files
- c9e30de: Added an option to import the components separate from the css.

### Patch Changes

- c414601: Ensure package is published with provenance
- 02786d9: security patch
- Updated dependencies [c414601]
- Updated dependencies [02786d9]
- Updated dependencies [de35f24]
- Updated dependencies [c9e30de]
  - @rijkshuisstijl-community/link-react@1.1.0
  - @rijkshuisstijl-community/card-css@1.1.0

## 1.0.0

### Major Changes

- 35f5c52: We hebben individuele packages aangemaakt om meer controle te geven over dependency maintenance en versie beheer duidelijker per component te omschrijven.

### Patch Changes

- Updated dependencies [e9dae7c]
- Updated dependencies [35f5c52]
  - @rijkshuisstijl-community/link-react@1.0.1
  - @rijkshuisstijl-community/card-css@1.0.0
