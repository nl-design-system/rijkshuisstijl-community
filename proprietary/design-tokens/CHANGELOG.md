# @rijkshuisstijl-community/design-tokens

## 3.0.0

### Major Changes

- 04beca8: Breaking changes: toevoeging en aanpassing van font-weight tokens op de common laag.

  - De paragraph font tokens op de common-laag zijn hernoemd naar `body`, zodat ze breder toepasbaar zijn.
  - De token `rhc.paragraph.small` is verwijderd.
  - Verwijzingen naar `rhc.paragraph.small` zijn vervangen door `rhc.body.default`, wat betekent dat de `font-size` van componenten als `counterbadge`, `navigation-list` en `message-list` is gewijzigd van 18px naar 20px.
  - `rhc.font-family.primary` value is aangepast, het font RijksoverheidSansWeb is eruit gehaald omdat dit een closed-source font is en wij Fira Sans gebruiken ter illustratie.
  - `rhc.alert.color` value aangepast van `rhc.foreground.default` naar `rhc.foreground.on-light-color`

  #### Wat betekent dit voor jou?

  Gebruik je `rhc.paragraph.small` of een van de hernoemde paragraph-tokens direct in je code? Dan moet je deze vervangen door de nieuwe `rhc.body.*` tokens.

  Gebruik je alleen de componenten uit de component library, zonder custom tokens toe te passen? Dan hoef je niets aan te passen, maar let op: de `font-size` van sommige onderdelen is iets groter geworden.

### Minor Changes

- 14334a4: Tokenset `components/summary-list` hernoemd naar `component/data-summary`.
- 76ebb9f: - Heading kleur aangepast van primary naar lintblauw.
  - Nieuwe overwrites toegevoegd voor footer- en navbar-stijlen, met de volgende opties:
    - Full color met lintblauwe achtergrond
    - Full color met primary achtergrond
    - Witte achtergrond met border in primary kleur
    - Witte achtergrond met border in lintblauwe kleur
- 04beca8: - Toegevoegd: `rhc.font-weight.default` en `rhc.font-weight.strong` op de common-laag, zodat deelidentiteiten eenvoudiger hun font-weight kunnen instellen.
  - Toegevoegd: tokenset met overwrites voor `rhc.font-family.primary` en `rhc.font-weight.semibold` om eenvoudig te kunnen wisselen van Fira Sans naar Rijks Sans.
  - Aangepast: `rhc.font-weight.semibold` gewijzigd van 550 naar 600, zodat deze correct werkt met Fira Sans in Figma.
  - Aangepast: paragraph-font-tokens op de common-laag hernoemd naar `body`, zodat ze breder toepasbaar zijn in componenten en content.
- c7034fd: Add "border-block-end-style" token to "data-summary" component.

### Patch Changes

- 724897b: Voeg tokenset toe voor `cursor` op de Button component.

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
