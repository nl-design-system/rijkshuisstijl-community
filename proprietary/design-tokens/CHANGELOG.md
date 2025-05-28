# @rijkshuisstijl-community/design-tokens

## 2.0.0

### Major Changes

- 158d711: Added 'Uitvoerend - Paars' Theme
  Deprecated @rijkshuisstijl-community/mijnoverheid-design-tokens
  Deprecated @rijkshuisstijl-community/logius-design-tokens
  Deprecated @rijkshuisstijl-community/digid-design-tokens
  Deprecated @rijkshuisstijl-community/rivm-design-tokens
  These themes are now found in: @rijkshuisstijl-community/design-tokens
- 5209b0c: ### Nieuwe tokens

  - `rhc.color.foreground.on-light-color` toegevoegd
  - Rounded corner tokens toegevoegd
  - Nieuwe tokenset `components/blockquote` toegevoegd

  ### Hernoemingen en refactor

  - `rhc.color.foregrond.onEmphisis` hernoemd naar `rhc.color.foreground.on-dark-color`. (oude naam blijft tijdelijk beschikbaar om bugs te voorkomen)
  - `rhc.border-radius.keep` vervangen door de nieuwe rounded corner tokens
  - Tokenset `common/keep` hernoemd naar `common/keep-oud`
  - Tokenset `components/blockquote` verplaatst naar `components/blockquote-oud` (legacy totdat het component is geüpdatet)

  ### Overige

  - Stijl en design tokens voor het `blockquote` component geüpdatet

## 1.2.0

### Minor Changes

- 86c37f5: - Overwrites toegevoegd om thema’s te kunnen variëren. Toegevoegd is: responsiveness, extra primaire kleuren en de optie om niet af te wijken van de Rijkshuisstijl voorbeelden.
  - Default button stijling aangepast.

## 1.1.0

### Minor Changes

- e533251: Split up NL and Utrecht components into separate component properties for easier toggling in Token Studio

### Patch Changes

- 5925dd1: Added fallback so that the design tokens are usable with Utrecht based components

## 1.0.1

### Patch Changes

- b1da3ab: Dual focus outline, zwart met witte offset.
- 1dc03fb: Wekelijkse package updates voor Rijkshuisstijl-componenten en design tokens (week 10)

## 1.0.0

### Patch Changes

- ed83ac9: First full release
