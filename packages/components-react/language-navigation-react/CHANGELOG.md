# @rijkshuisstijl-community/language-navigation-react

## 2.0.0

### Major Changes

- ff5aa70: Use LanguageNavigation as the root compound component and expose 'Trigger','Content' and 'Item' as its subcomponents.

### Patch Changes

- 4412b0c: Refactor: Move self-written reset classes to a shared mixin and include in index.scss
- 38c6e39: Fix: de `/no-side-effects` entrypoints laden geen CSS meer. Componenten importeerden onderliggende componenten via hun standaard entrypoint, waardoor de bijbehorende CSS toch als side effect werd geladen — ook bij gebruik van `/no-side-effects`. Interne imports gebruiken nu `/no-side-effects`; de standaard entrypoints importeren de CSS van onderliggende componenten expliciet, zodat het bestaande gedrag daar ongewijzigd blijft.
- 89b2604: Fix security vulnerabilities identified by pnpm audit by upgrading vitest and @vitest/coverage-v8 from 4.1.8 to 4.1.10.
- bcee4ed: Remove the obsolete listbox workaround from the language navigation component.
- Updated dependencies [91d25ee]
- Updated dependencies [89b2604]
- Updated dependencies [4412b0c]
- Updated dependencies [89b2604]
- Updated dependencies [bcee4ed]
  - @rijkshuisstijl-community/link-react@1.1.2
  - @rijkshuisstijl-community/language-navigation-css@1.0.2
  - @rijkshuisstijl-community/link-button-react@1.0.2
  - @rijkshuisstijl-community/icon-react@3.1.3

## 1.0.2

### Patch Changes

- Updated dependencies [b3db8e1]
  - @rijkshuisstijl-community/icon-react@3.1.2

## 1.0.1

### Patch Changes

- e41c59f: update dependencies
- Updated dependencies [e41c59f]
  - @rijkshuisstijl-community/language-navigation-css@1.0.1
  - @rijkshuisstijl-community/link-button-react@1.0.1
  - @rijkshuisstijl-community/icon-react@3.1.1
  - @rijkshuisstijl-community/link-react@1.1.1

## 1.0.0

### Major Changes

- 1958cf3: We hebben individuele packages aangemaakt om meer controle te geven over dependency maintenance en versie beheer duidelijker per component te omschrijven.

### Patch Changes

- Updated dependencies [c414601]
- Updated dependencies [02786d9]
- Updated dependencies [52eeadc]
- Updated dependencies [1958cf3]
- Updated dependencies [de35f24]
- Updated dependencies [c9e30de]
  - @rijkshuisstijl-community/icon-react@3.1.0
  - @rijkshuisstijl-community/link-react@1.1.0
  - @rijkshuisstijl-community/link-button-react@1.0.0
  - @rijkshuisstijl-community/language-navigation-css@1.0.0
