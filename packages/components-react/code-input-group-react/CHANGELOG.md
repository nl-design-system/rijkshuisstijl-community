# @rijkshuisstijl-community/code-input-group-react

## 1.0.2

### Patch Changes

- 38c6e39: Fix: de `/no-side-effects` entrypoints laden geen CSS meer. Componenten importeerden onderliggende componenten via hun standaard entrypoint, waardoor de bijbehorende CSS toch als side effect werd geladen — ook bij gebruik van `/no-side-effects`. Interne imports gebruiken nu `/no-side-effects`; de standaard entrypoints importeren de CSS van onderliggende componenten expliciet, zodat het bestaande gedrag daar ongewijzigd blijft.
- 89b2604: Fix security vulnerabilities identified by pnpm audit by upgrading vitest and @vitest/coverage-v8 from 4.1.8 to 4.1.10.
- Updated dependencies [38c6e39]
- Updated dependencies [89b2604]
  - @rijkshuisstijl-community/code-input-react@1.0.2
  - @rijkshuisstijl-community/fieldset-react@1.0.2

## 1.0.1

### Patch Changes

- e41c59f: update dependencies
- Updated dependencies [e41c59f]
  - @rijkshuisstijl-community/code-input-react@1.0.1
  - @rijkshuisstijl-community/fieldset-react@1.0.1

## 1.0.0

### Major Changes

- d47e1d2: We hebben individuele packages aangemaakt om meer controle te geven over dependency maintenance en versie beheer duidelijker per component te omschrijven.

### Patch Changes

- 02786d9: security patch
- Updated dependencies [02786d9]
- Updated dependencies [d47e1d2]
- Updated dependencies [f756388]
- Updated dependencies [0dbc2d1]
  - @rijkshuisstijl-community/code-input-react@1.0.0
  - @rijkshuisstijl-community/fieldset-react@1.0.0
  - @rijkshuisstijl-community/code-input-group-css@1.0.0
