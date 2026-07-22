# @rijkshuisstijl-community/alert-react

## 3.1.3

### Patch Changes

- 38c6e39: Fix: de `/no-side-effects` entrypoints laden geen CSS meer. Componenten importeerden onderliggende componenten via hun standaard entrypoint, waardoor de bijbehorende CSS toch als side effect werd geladen — ook bij gebruik van `/no-side-effects`. Interne imports gebruiken nu `/no-side-effects`; de standaard entrypoints importeren de CSS van onderliggende componenten expliciet, zodat het bestaande gedrag daar ongewijzigd blijft.
- 89b2604: Fix security vulnerabilities identified by pnpm audit by upgrading vitest and @vitest/coverage-v8 from 4.1.8 to 4.1.10.
- Updated dependencies [89b2604]
  - @rijkshuisstijl-community/icon-react@3.1.3

## 3.1.2

### Patch Changes

- Updated dependencies [b3db8e1]
  - @rijkshuisstijl-community/icon-react@3.1.2

## 3.1.1

### Patch Changes

- e41c59f: update dependencies
- Updated dependencies [e41c59f]
  - @rijkshuisstijl-community/icon-react@3.1.1

## 3.1.0

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
  - @rijkshuisstijl-community/icon-react@3.1.0
  - @rijkshuisstijl-community/alert-css@4.1.0

## 3.0.3

### Patch Changes

- e9dae7c: Updated broken links in the documentation
- Updated dependencies [e9dae7c]
  - @rijkshuisstijl-community/icon-react@3.0.3
  - @rijkshuisstijl-community/alert-css@4.0.1

## 3.0.2

### Patch Changes

- 4127bdc: updated dependencies
- 4330c62: updated dependencies
- Updated dependencies [4127bdc]
- Updated dependencies [4330c62]
  - @rijkshuisstijl-community/icon-react@3.0.2

## 3.0.1

### Patch Changes

- c5985e2: Add further documentation for test environment errors
- Updated dependencies [c5985e2]
  - @rijkshuisstijl-community/icon-react@3.0.1

## 3.0.0

### Major Changes

- 3abfdb7: Added explicit module resolution to the packages

### Patch Changes

- Updated dependencies [3abfdb7]
  - @rijkshuisstijl-community/icon-react@3.0.0

## 2.0.0

### Major Changes

- f57d51a: We hebben individuele packages aangemaakt om meer controle te geven over dependency maintenance en versie beheer duidelijker per component te omschrijven.

### Patch Changes

- fdf0f57: Update build tooling dependencies (Babel, Rollup, Vite, TypeScript, and other devDependencies).
- Updated dependencies [f57d51a]
- Updated dependencies [fdf0f57]
  - @rijkshuisstijl-community/icon-react@2.0.0
  - @rijkshuisstijl-community/alert-css@4.0.0
