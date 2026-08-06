# @rijkshuisstijl-community/footer-react

## 1.0.3

### Patch Changes

- 38c6e39: Fix: de `/no-side-effects` entrypoints laden geen CSS meer. Componenten importeerden onderliggende componenten via hun standaard entrypoint, waardoor de bijbehorende CSS toch als side effect werd geladen — ook bij gebruik van `/no-side-effects`. Interne imports gebruiken nu `/no-side-effects`; de standaard entrypoints importeren de CSS van onderliggende componenten expliciet, zodat het bestaande gedrag daar ongewijzigd blijft.
- 89b2604: Fix security vulnerabilities identified by pnpm audit by upgrading vitest and @vitest/coverage-v8 from 4.1.8 to 4.1.10.
- Updated dependencies [91d25ee]
- Updated dependencies [89b2604]
  - @rijkshuisstijl-community/link-react@1.1.2
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
  - @rijkshuisstijl-community/heading-react@1.0.1
  - @rijkshuisstijl-community/icon-react@3.1.1
  - @rijkshuisstijl-community/link-react@1.1.1
  - @rijkshuisstijl-community/footer-css@1.0.1

## 1.0.0

### Major Changes

- e56376c: We hebben individuele packages aangemaakt om meer controle te geven over dependency maintenance en versie beheer duidelijker per component te omschrijven.

### Patch Changes

- 02786d9: security patch
- Updated dependencies [751ef52]
- Updated dependencies [c414601]
- Updated dependencies [786a5e5]
- Updated dependencies [02786d9]
- Updated dependencies [de35f24]
- Updated dependencies [c9e30de]
- Updated dependencies [e56376c]
  - @rijkshuisstijl-community/heading-react@1.0.0
  - @rijkshuisstijl-community/icon-react@3.1.0
  - @rijkshuisstijl-community/link-react@1.1.0
  - @rijkshuisstijl-community/column-layout-react@1.0.0
  - @rijkshuisstijl-community/footer-css@1.0.0
