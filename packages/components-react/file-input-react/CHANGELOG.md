# @rijkshuisstijl-community/file-input-react

## 2.0.3

### Patch Changes

- 38c6e39: Fix: de `/no-side-effects` entrypoints laden geen CSS meer. Componenten importeerden onderliggende componenten via hun standaard entrypoint, waardoor de bijbehorende CSS toch als side effect werd geladen — ook bij gebruik van `/no-side-effects`. Interne imports gebruiken nu `/no-side-effects`; de standaard entrypoints importeren de CSS van onderliggende componenten expliciet, zodat het bestaande gedrag daar ongewijzigd blijft.
- 89b2604: Fix security vulnerabilities identified by pnpm audit by upgrading vitest and @vitest/coverage-v8 from 4.1.8 to 4.1.10.
- Updated dependencies [38c6e39]
- Updated dependencies [89b2604]
  - @rijkshuisstijl-community/button-react@1.1.3
  - @rijkshuisstijl-community/file-react@1.0.3
  - @rijkshuisstijl-community/paragraph-react@2.1.2

## 2.0.2

### Patch Changes

- @rijkshuisstijl-community/button-react@1.1.2
- @rijkshuisstijl-community/file-react@1.0.2

## 2.0.1

### Patch Changes

- e41c59f: update dependencies
- Updated dependencies [e41c59f]
  - @rijkshuisstijl-community/paragraph-react@2.1.1
  - @rijkshuisstijl-community/button-react@1.1.1
  - @rijkshuisstijl-community/file-react@1.0.1

## 2.0.0

### Major Changes

- c37bb2e: We hebben individuele packages aangemaakt om meer controle te geven over dependency maintenance en versie beheer duidelijker per component te omschrijven.

### Patch Changes

- 02786d9: security patch
- Updated dependencies [c414601]
- Updated dependencies [02786d9]
- Updated dependencies [6e04b8c]
- Updated dependencies [c37bb2e]
- Updated dependencies [de35f24]
- Updated dependencies [c9e30de]
- Updated dependencies [83c1415]
  - @rijkshuisstijl-community/paragraph-react@2.1.0
  - @rijkshuisstijl-community/button-react@1.1.0
  - @rijkshuisstijl-community/file-react@1.0.0
  - @rijkshuisstijl-community/file-input-css@1.0.0
