# @rijkshuisstijl-community/button-css

## 2.0.0

### Major Changes

- ad84e31: Button gebruikt nu de NL Design System Button-candidate (`nl-button`) als basis in plaats van de Utrecht Button, met classname `nl-button` en `--nl-button-*` tokens. Nieuwe `purpose` prop (`primary`/`secondary`/`subtle`); `appearance` blijft werken maar is deprecated. De derde kleuroptie (primary in de themakleur, rest lintblauw) volgt met de themakoppeling in een latere release.
  
  Breaking changes:
  
  - `disabled` zet nu `aria-disabled="true"` in plaats van het HTML-attribuut, zodat de button focusbaar blijft; gebruik `htmlDisabled` voor het echte `disabled`-attribuut.
  - Classname van `utrecht-button` naar `nl-button`; theming van `--utrecht-button-*` naar `--nl-button-*`.
  - De `hint` prop gebruikt nu `positive`/`negative` in plaats van de Utrecht-waarden.
  - De Utrecht-re-exports (`ButtonLink`, `PrimaryActionButton`, `SecondaryActionButton`, `SubtleButton`) zijn deprecated.

## 1.2.0

### Minor Changes

- 3845c86: Onderliggende CSS van community-components is nu direct meegebundeld in de `dist` om te voorkomen dat gebruikers half gestylede componenten te zien krijgen.
  Voorheen exporteerden de CSS-packages alleen de Rhc-specifieke klassen. Omdat deze bouwen op community-components, functioneerden ze niet zonder de onderliggende stijlen. De meeste stijlen zijn nu vanuit de `index` naar `@mixin`-structuren verplaatst (met wat tussentijdse boyscouting). Hierdoor worden afhankelijkheden automatisch meegeleverd; zo shipt de Accordion CSS nu bijvoorbeeld ook direct de vereiste Button CSS mee.

## 1.1.1

### Patch Changes

- 30c4a0e: fix(button,sidenav): uitlijning van icon gecentreerd ten opzichte van tekst

## 1.1.0

### Minor Changes

- de35f24: Update README files

### Patch Changes

- c414601: Ensure package is published with provenance

## 1.0.1

### Patch Changes

- e9dae7c: Updated broken links in the documentation

## 1.0.0

### Major Changes

- 609b8bd: We hebben individuele packages aangemaakt om meer controle te geven over dependency maintenance en versie beheer duidelijker per component te omschrijven.
