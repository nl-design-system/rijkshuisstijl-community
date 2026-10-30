# @rijkshuisstijl-community/file-react

## 1.0.5

### Patch Changes

- ad84e31: Button gebruikt nu de NL Design System Button-candidate (`nl-button`) als basis in plaats van de Utrecht Button, met classname `nl-button` en `--nl-button-*` tokens. Nieuwe `purpose` prop (`primary`/`secondary`/`subtle`); `appearance` blijft werken maar is deprecated. De derde kleuroptie (primary in de themakleur, rest lintblauw) volgt met de themakoppeling in een latere release.
  
  Breaking changes:
  
  - `disabled` zet nu `aria-disabled="true"` in plaats van het HTML-attribuut, zodat de button focusbaar blijft; gebruik `htmlDisabled` voor het echte `disabled`-attribuut.
  - Classname van `utrecht-button` naar `nl-button`; theming van `--utrecht-button-*` naar `--nl-button-*`.
  - De `hint` prop gebruikt nu `positive`/`negative` in plaats van de Utrecht-waarden.
  - De Utrecht-re-exports (`ButtonLink`, `PrimaryActionButton`, `SecondaryActionButton`, `SubtleButton`) zijn deprecated.
- Updated dependencies [ad84e31]
  - @rijkshuisstijl-community/button-react@2.0.0

## 1.0.4

### Patch Changes

- Updated dependencies [3845c86]
  - @rijkshuisstijl-community/file-css@1.1.0
  - @rijkshuisstijl-community/paragraph-react@2.1.3
  - @rijkshuisstijl-community/button-react@1.1.4
  - @rijkshuisstijl-community/alert-react@3.1.4
  - @rijkshuisstijl-community/link-react@1.1.3

## 1.0.3

### Patch Changes

- 38c6e39: Fix: de `/no-side-effects` entrypoints laden geen CSS meer. Componenten importeerden onderliggende componenten via hun standaard entrypoint, waardoor de bijbehorende CSS toch als side effect werd geladen — ook bij gebruik van `/no-side-effects`. Interne imports gebruiken nu `/no-side-effects`; de standaard entrypoints importeren de CSS van onderliggende componenten expliciet, zodat het bestaande gedrag daar ongewijzigd blijft.
- 89b2604: Fix security vulnerabilities identified by pnpm audit by upgrading vitest and @vitest/coverage-v8 from 4.1.8 to 4.1.10.
- Updated dependencies [91d25ee]
- Updated dependencies [38c6e39]
- Updated dependencies [89b2604]
  - @rijkshuisstijl-community/link-react@1.1.2
  - @rijkshuisstijl-community/alert-react@3.1.3
  - @rijkshuisstijl-community/button-react@1.1.3
  - @rijkshuisstijl-community/paragraph-react@2.1.2
  - @rijkshuisstijl-community/icon-react@3.1.3

## 1.0.2

### Patch Changes

- Updated dependencies [b3db8e1]
  - @rijkshuisstijl-community/icon-react@3.1.2
  - @rijkshuisstijl-community/alert-react@3.1.2
  - @rijkshuisstijl-community/button-react@1.1.2

## 1.0.1

### Patch Changes

- e41c59f: update dependencies
- Updated dependencies [e41c59f]
  - @rijkshuisstijl-community/paragraph-react@2.1.1
  - @rijkshuisstijl-community/button-react@1.1.1
  - @rijkshuisstijl-community/alert-react@3.1.1
  - @rijkshuisstijl-community/icon-react@3.1.1
  - @rijkshuisstijl-community/link-react@1.1.1
  - @rijkshuisstijl-community/file-css@1.0.1

## 1.0.0

### Major Changes

- 83c1415: We hebben individuele packages aangemaakt om meer controle te geven over dependency maintenance en versie beheer duidelijker per component te omschrijven.

### Patch Changes

- 02786d9: security patch
- 6e04b8c: code formatting with prettier
- Updated dependencies [c414601]
- Updated dependencies [02786d9]
- Updated dependencies [6e04b8c]
- Updated dependencies [de35f24]
- Updated dependencies [c9e30de]
- Updated dependencies [83c1415]
  - @rijkshuisstijl-community/paragraph-react@2.1.0
  - @rijkshuisstijl-community/button-react@1.1.0
  - @rijkshuisstijl-community/alert-react@3.1.0
  - @rijkshuisstijl-community/icon-react@3.1.0
  - @rijkshuisstijl-community/link-react@1.1.0
  - @rijkshuisstijl-community/file-css@1.0.0
