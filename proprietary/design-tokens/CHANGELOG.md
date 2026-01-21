# @rijkshuisstijl-community/design-tokens

## 11.1.0

### Minor Changes

- f0a77eb: Added the following components:
  - link button (button styled as a link) (utrecht)
  - listbox (utrecht)
  - language navigation

  Tokens have been added for each of these components.
  The listbox and link button are reexported from utrecht with tokens styling from RHC.
  The Language Navigation is a new component built in the community

## 11.0.0

### Major Changes

- 378973a: Added licenses to Blockquote source code
- 13de6a7: Voor de Navigation List component zijn de design tokens gewijzigd en verwerkt in de CSS:
  - `rhc.navigation-list.icon.background-color` hernoemd naar `rhc.navigation-list.item.icon-start.background-color`.
  - `rhc.navigation-list.icon.border-radius` hernoemd naar `rhc.navigation-list.item.icon-start.border-radius`.
  - `rhc.navigation-list.icon.color` hernoemd naar `rhc.navigation-list.item.icon-start.color`.
  - `rhc.navigation-list.item.content.font-size` hernoemd naar `rhc.navigation-list.item.description.font-size`.
  - `rhc.navigation-list.item.heading.color` hernoemd naar `rhc.navigation-list.item.label.color`.
  - `rhc.navigation-list.item.icon.padding-block` hernoemd naar `rhc.navigation-list.item.icon-start.padding-block`.
  - `rhc.navigation-list.item.icon.padding-inline` hernoemd naar `rhc.navigation-list.item.icon-start.padding-inline`.
  - `rhc.navigation-list.item.icon.size` hernoemd naar `rhc.navigation-list.item.icon-start.size`.
  - `rhc.navigation-list.item.color` is verwijderd en `rhc.navigation-list.item.description.color` is toegevoegd zodat de color netjes op de description word ingesteld en niet elders overschreven word.
  - `rhc.navigation-list.item.description.line-height` is toegevoegd omdat we over het algemeen line-height instelbaar maken waar font-size instelbaar is.
  - `rhc.navigation-list.item.icon-end.color` is toegevoegd zodat icon color van end-icon niet meer via common token is gezet.

## 10.0.1

### Patch Changes

- f5942a6: Parent key is verwijderd uit figma.tokens.json. Deze key is nooit in gebruik geweest, dit heeft geen impact.
- e7b3d60: Add section about adding new token sets in documentation
- 5f77bfa: Added transformations on CSS-tokens to allow for calculations with references, power (^) and sanitize any `roundTo` in tokens

## 10.0.0

### Major Changes

- 093f3af: Update token format version to W3C DCTG, read more at https://docs.tokens.studio/convert-to-dtcg-format.
- 462686a: De brand en common tokens van RHC zijn naast de basis tokens gelegd. Hieruit zijn aantal naamwijzigen gekomen om de tokens beter aan te laten sluiten. Maak je direct gebruik van common tokens? Dan is dit een breaking change.

  Subdued is gewijzigd in subtle:
  - naam `rhc.color.foreground.subdued` gewijzigd naar `rhc.color.foreground.subtle`
  - naam `rhc.color.border.subdued` gewijzigd naar `rhc.color.border.subtle`

  Naamgeving feedback kleuren zijn aangepast:
  - naam `rhc.color.feedback.success.default` gewijzigd naar `rhc.color.positive.default`
  - naam `rhc.color.feedback.success.subdued` gewijzigd naar `rhc.color.positive.subtle`
  - naam `rhc.color.feedback.info.default` gewijzigd naar `rhc.color.info.default`
  - naam `rhc.color.feedback.info.subdued` gewijzigd naar `rhc.color.info.subtle`
  - naam `rhc.color.feedback.error.default` gewijzigd naar `rhc.color.negative.default`
  - naam `rhc.color.feedback.error.subdued` gewijzigd naar `rhc.color.negative.subtle`
  - naam `rhc.color.feedback.warning.default` gewijzigd naar `rhc.color.warning.default`
  - naam `rhc.color.feedback.warning.subdued` gewijzigd naar `rhc.color.warning.subtle`

  Groepering 'text' is toegevoegd aan de font tokens:
  - naam `rhc.font-weight.extra-bold` gewijzigd naar `rhc.text.font-weight.extra-bold`
  - naam `rhc.font-weight.bold` gewijzigd naar `rhc.text.font-weight.bold`
  - naam `rhc.font-weight.semi-bold` gewijzigd naar `rhc.text.font-weight.semi-bold`
  - naam `rhc.font-weight.regular` gewijzigd naar `rhc.text.font-weight.regular`
  - naam `rhc.font-weight.light` gewijzigd naar `rhc.text.font-weight.light`
  - naam `rhc.font-weight.default` gewijzigd naar `rhc.text.font-weight.default`
  - naam `rhc.font-weight.strong` gewijzigd naar `rhc.text.font-weight.strong`
  - naam `rhc.font-weight.thin` gewijzigd naar `rhc.text.font-weight.thin`
  - naam `rhc.line-height.sm` gewijzigd naar `rhc.text.line-height.sm`
  - naam `rhc.line-height.md` & `rhc.line-height.body` gewijzigd naar `rhc.text.line-height.md`
  - naam `rhc.font-family.primary` gewijzigd naar `rhc.text.font-family.default`
  - naam `rhc.font-family.secondary` gewijzigd naar `rhc.text.font-family.serif`

  Font-size schaal is gewijzigd:
  - naam `rhc.font-size.heading.level-5` & `rhc.font-size.body.default` gewijzigd naar `rhc.text.font-size.md`
  - naam `rhc.font-size.heading.level-4` & `rhc.font-size.body.intro` gewijzigd naar `rhc.text.font-size.lg`
  - naam `rhc.font-size.heading.level-3` gewijzigd naar `rhc.text.font-size.xl`
  - naam `rhc.font-size.heading.level-2` gewijzigd naar `rhc.text.font-size.2xl`
  - naam `rhc.font-size.heading.level-1` gewijzigd naar `rhc.text.font-size.3xl`

  responsive schaal is gewijzigd:
  - naam `rhc.font-size.xs.desktop` gewijzigd naar `rhc.text.font-size.max.md`
  - naam `rhc.font-size.xs.mobile` gewijzigd naar `rhc.text.font-size.min.md`
  - naam `rhc.font-size.sm.desktop` gewijzigd naar `rhc.text.font-size.max.lg`
  - naam `rhc.font-size.sm.mobile` gewijzigd naar `rhc.text.font-size.min.lg`
  - naam `rhc.font-size.md.desktop` gewijzigd naar `rhc.text.font-size.max.xl`
  - naam `rhc.font-size.md.mobile` gewijzigd naar `rhc.text.font-size.min.xl`
  - naam `rhc.font-size.lg.desktop` gewijzigd naar `rhc.text.font-size.max.2xl`
  - naam `rhc.font-size.lg.mobile` gewijzigd naar `rhc.text.font-size.min.2xl`
  - naam `rhc.font-size.xl.desktop` gewijzigd naar `rhc.text.font-size.max.3xl`
  - naam `rhc.font-size.xl.mobile` gewijzigd naar `rhc.text.font-size.min.3xl`

  Andere naam-wijzigingen:
  - naam `rhc.color.canvas` gewijzigd naar `rhc.color.bg-document`
  - naam `rhc.size.target` gewijzigd naar `rhc.size.pointer-target`

  Toegevoegde tokens:
  - `rhc.text.font-family.sans`

  Verwijderde tokens:
  - `rhc.font-size.xs.tablet`
  - `rhc.font-size.sm.tablet`
  - `rhc.font-size.md.tablet`
  - `rhc.font-size.lg.tablet`
  - `rhc.font-size.xl.tablet`

- b04f679: Thema's bijgewerkt
  - `body` en `root` zijn enabled.
  - Hover & active kleuren van buttons aangepast van lint-blauw naar de thema kleuren
  - Alle uitvoerende thema's hebben nu RijksSans als default font.
  - Thema's hernoemd volgens de naming convention `{type organisatie} - {naam primaire kleur}` bijvoorbeeld:
    - Kern - Lintblauw
    - Uitvoerend - Groen
    - Uitvoerend - Oranje
  - Verwijderd, deze thema’s waren voorbeelden en worden naar verwachting niet gebruikt:
    - Uitvoerend - violet
    - Uitvoerend - violet - oud
    - Uitvoerend - mintgroen
  - Nieuwe toevoeging:
    - Uitvoerend - Robijn Rood

  Overwrites tokensets bijgewerkt en opgeschoond
  - `type-scale` toegevoegd.
  - Accent kleuren verwijderd.
  - Oude rijkshuisstijl verwijderd.
  - Afwijkende button verwijderd.
  - Volgorde van de tokensets aangepast.

  Nieuwe token toegevoegd
  - Token `rhc.color.primary.active` is toegevoegd aan de common tokens.

- cd14679: De brand en common tokens van RHC zijn naast de basis tokens gelegd. Hieruit zijn aantal naamwijzigen gekomen om de tokens beter aan te laten sluiten. Maak je direct gebruik van common tokens? Dan is dit een breaking change.
  - `rhc.color.none` gewijzigd naar `rhc.color.transparant`
  - `rhc.color.focus.outline` gewijzigd naar `rhc.focus.outline-color`
  - `rhc.focus.inverse.outline-color` is toegevoegd
  - `rhc.size.icon.functional` gewijzigd naar `rhc.size.icon.md`
  - `rhc.border-radius.circle` gewijzigd naar `rhc.border-radius.round`
  - `rhc.border-width.default` gewijzigd naar `rhc.border-width.sm`
  - `rhc.border-width.m` gewijzigd naar `rhc.border-width.md`

- afe2d9c: **Token-structuur opgeschoond en hernoemd**
  - `utrecht/*` tokens hernoemd naar `component/*` of verplaatst naar `common/vendor`.
  - `component/rhc-icon-only` tokens verplaatst naar `components/button`.
  - Alle `*/font` mappen hernoemd naar `*/text`.
  - `overwrites/*` hernoemd naar `overrides/*`.
  - Verwijderd:
    - `utrecht/root`,
    - `utrecht/body`,
    - `components/form-field-label/todo`,
    - `overwrites/footer/*`,
    - `overwrites/nav-bar/*`.
  - Hernoemd:
    - `components/pagination/ams` → `components/page-number-navigation`,
    - `components/footer` → `components/page-footer`.

  **Accent-tokens verwijderd**
  Accent-tokens verwijderd omdat ze niet in gebruik zijn en de waardes organisatie specifiek:
  - `rhc.color.accent-1`,
  - `rhc.color.accent-2`.

  **Thema's aangepast**
  - Thema `KOOP` hernoemd naar `Uitvoerend – Lintblauw` voor meer generieke naamgeving.
  - Thema `Uitvoerend - Oranje` non-primary button uitvoering aangepast voor toegankelijkheid.

- 5b7a72c: Updated rounded corner common tokens to the following values:
  --rhc-rounded-corner-overflow
  --rhc-rounded-corner-sm-border-radius
  --rhc-rounded-corner-md-border-radius
  --rhc-rounded-corner-lg-border-radius
- afe2d9c: Koop thema hernoemd naar Uitvoerend lintblauw. Let op dat je de volgende import wijzeging moet doorvoeren als je de koop thema gebruikte:
  van: `@import "@rijkshuisstijl-community/design-tokens/dist/koop/index.css";`
  naar: `@import "@rijkshuisstijl-community/design-tokens/dist/uitvoerend-lintblauw/index.css";`

### Minor Changes

- 80fea49: - De volgende token is toegevoegd: `utrecht.icon.baseline.inset-block-start`
  - Design token utrecht.link-list.font-weight hernoemd naar utrecht.link-list.link.font-weight
- 3d1fbeb: standaard theme is nu hetzelfde als kern - lintblauw

### Patch Changes

- cd80794: Updated readme's to install dependencies for build instead of dev.
- 9a27826: radio button removed deprecated tokens
- 2062466: textarea tokens; deprecated verwijderd
- e536c65: A token classified as deprecated was not deprecated (field field) - still in use by form-field-radio-option
- 2f3f91c: figure; token en css cleanup
- 5961ac6: checkbox; check on deprecated tokens
- 17fe29e: select; removed deprecated tokens
- bbba719: added tokens for utrecht/root&body to support root font

## 9.0.0

### Major Changes

- 91a9ca7: Invalid FormFields now have a red border to the left of the FormField
- e486b7a: Koop specifieke link overwrite verwijderd zodat het gelijk loopt met het generieke thema.

### Patch Changes

- 10ec55a: Release package with npm provenance.
- 9c88f77: Cleaned up token naming convention

## 8.0.0

### Major Changes

- b012c3e: Cleaned up the blockquote component and separated out the rounded corner from the component.
  The following tokens have been removed:
  - --utrecht-blockquote-border-block-end-width
  - --utrecht-blockquote-border-block-start-width
  - --utrecht-blockquote-border-end-end-radius
  - --utrecht-blockquote-border-end-start-radius
  - --utrecht-blockquote-border-inline-end-width
  - --utrecht-blockquote-border-start-end-radius
  - --utrecht-blockquote-border-start-start-radius
  - --utrecht-blockquote-caption-color
  - --utrecht-blockquote-caption-font-family
  - --utrecht-blockquote-caption-font-size
  - --utrecht-blockquote-caption-font-weight
  - --utrecht-blockquote-caption-line-height
  - --utrecht-blockquote-caption-padding-block-start
  - --utrecht-blockquote-content-font-family
  - --utrecht-blockquote-content-font-weight
  - --utrecht-blockquote-content-line-height

  Blue border variation:
  - --utrecht-blockquote-blue-corner-border-variation-border-block-end-width
  - --utrecht-blockquote-blue-corner-border-variation-border-color
  - --utrecht-blockquote-blue-corner-border-variation-border-end-end-radius
  - --utrecht-blockquote-blue-corner-border-variation-border-inline-end-width

  Pink background variation:
  - --utrecht-blockquote-pink-background-variation-background-color
  - --utrecht-blockquote-pink-background-variation-border-end-start-radius
  - --utrecht-blockquote-pink-background-variation-padding

  Pink corner border variation:
  - --utrecht-blockquote-pink-corner-border-variation-border-block-start-width
  - --utrecht-blockquote-pink-corner-border-variation-border-color
  - --utrecht-blockquote-pink-corner-border-variation-border-inline-start-width
  - --utrecht-blockquote-pink-corner-border-variation-border-start-start-radius
  - --utrecht-blockquote-pink-corner-border-variation-padding

  Pink left border variation:
  - --utrecht-blockquote-pink-left-border-variation-border-color
  - --utrecht-blockquote-pink-left-border-variation-border-inline-start-width
  - --utrecht-blockquote-pink-left-border-variation-padding-block-end
  - --utrecht-blockquote-pink-left-border-variation-padding-block-start
  - --utrecht-blockquote-pink-left-border-variation-padding-inline-end
  - --utrecht-blockquote-pink-left-border-variation-padding-inline-start

  The following tokens have been renamed:
  - --utrecht-blockquote-margin-block-end
  - --utrecht-blockquote-margin-block-start
  - --utrecht-blockquote-margin-inline-end
  - --utrecht-blockquote-margin-inline-start

  to:
  - --rhc-blockquote-margin-block-end
  - --rhc-blockquote-margin-block-start
  - --rhc-blockquote-margin-inline-end
  - --rhc-blockquote-margin-inline-start

- aadf35e: Removed the icon from form field error message

### Minor Changes

- e8dc080: Added a token to control the navbar fontsize and set the default to 20px

### Patch Changes

- 1512988: Removed deprecated tokens for Form Field Description
- 063f846: Backdrop verwijderd als common token (incl. brandtoken ‘transparant 30’). Een backdrop is een component en daarom geen geldig common token.

## 7.0.0

### Major Changes

- 8e189de: Updated Action Group to new version from Utrecht
  - added column-stretch option for direction prop

### Minor Changes

- 884d990: Added Utrecht Drawer and fixed an A11y test bug: "Scrollable region must have keyboard access"

## 6.0.0

### Major Changes

- 8e508f9: Removed the following tokens:
  Used but unnecessary:
  --utrecht-alert-heading-line-height
  --utrecht-alert-message-line-height

  Unused:
  --utrecht-alert-heading-font-family
  --utrecht-alert-heading-font-size
  --utrecht-alert-heading-font-weight

  Reworked the Alert react component to allow users to add content like heading and paragraph in the children instead of duplicating heading props in the alert directly.
  Added icon overwrite support in case you want a different icon on a specific alert type.

- 29bfdd5: Removed deprecated tokens for Accordion
- 965c2a4: Removed deprecated tokens and much custom code for SkipLink
  - Kept only the box-shadow properties and moved those to rhc-\* namespace
  - Removed visibleOnFocus prop and class, assuming this is always the behaviour
  - Also cleaned the storybook, with just a default, rtl, and focused state
  - Added links in storybook

### Patch Changes

- 9b9a2a0: Remove deprecated tokens for Number Badge.

## 5.1.0

### Minor Changes

- 35dcda9: Add PageNumberNavigation component in rhc storybook

## 5.0.0

### Major Changes

- 0057047: chore: remove unused and deprecated Link tokens
  - Use NL link component as cleanly as possible.
  - Do not support NL `disabled` prop/state for Link.
  - Add support for Icon in Link.
  - Replace "utrecht" with "rhc" in markdown documentation for Link.

- f89c576: Removed the following tokens for unordered list as these are inherited from the document:
  --utrecht-unordered-list-color
  --utrecht-unordered-list-marker-border-color
  --utrecht-unordered-list-font-weight
  --utrecht-unordered-list-font-family

  Added the following token to control nested lists
  --rhc-unordered-list-nested-margin-inline-start

  Nested lists now have the same marker as root lists to have less going on

- f24efc1: Clear deprecated tokens for Breadcrumb

### Minor Changes

- 93b9259: Add new Card component for flexible card display

  **WHAT**: Added a new `Card` component alongside the existing `CardAsLink` component
  **WHY**: The existing `CardAsLink` was too restrictive for cases where cards don't need to be clickable links
  **HOW**: Import and use the new `Card` component for non-interactive card displays

### Patch Changes

- 2828f3e: chore: Remove unused deprecated paragraph token
- cd3758e: Cleaned up deprecated tokens for ordered list to be more in line with the base component used in Utrecht.
  Tokens that wont be applied to ordered list anymore:
  --utrecht-ordered-list-color
  --utrecht-ordered-list-font-weight
  --utrecht-ordered-list-margin-inline-start
- bf73b50: Fix hot reloading voor local development.
- 6b3a5aa: Remove fixed width from Card As Link component to delegate sizing to layout
- fe88675: Update heading dependency and removed unused tokens
- acca7a7: Removed unused deprecated tokens
- 04a4ec5: updated design tokens to be set on the common layer instead of component layer

## 4.1.0

### Minor Changes

- 08d4354: add expandable checkbox group

## 4.0.1

### Patch Changes

- 808f3c7: - Accordion token update
  - Accordion stijling gelijk getrokken met Figma design, blauwe border om de section.
- b54d387: - Alert component token update, nav nieuwe Figma
  - Blockquote component token update, nav nieuwe Figma
  - NumberBadge component tokens update, nav nieuwe Figma
  - Figure component token update, nav nieuwe Figma
- 36ab047: Fix: update forgotten tokenset applications
- a77a809: Removed unused tokens.
- 2ea003d: Tokenupdate nav nieuwe Figma van diverse formelementen: Checkbox, Form Field, Form field Description, Form Field Error Message, Form Field Label, Radio Butoon, Select, Text Area, Text Input

## 4.0.0

### Major Changes

- 84a8fc6: - Brand & common token update, type spacing, sizing, borderWidth, borderRadius omgezet naar dimension om toe te werken naar token formats W3C DTCG
  - Legacy token foreground.onEmphesis verwijderd
  - Ongebruikte component tokensets verwijderd, a la: Avatar, Backdrop, Drawer, Modal Dialog, Page Number Naviation, Tasklist, Toolbar Button

### Minor Changes

- f8f4bab: - Add design tokens for `data-badge-button`
- 860e977: - Thema van KOOP aangevuld met afwijkende link-stijling
- 790ead0: Rename "Card" component to "Card as Link" component, to match definition of NL Design System "Card as Link" and in preparation of incoming "Card (not as Link)" component.
- 4c1b34a: - Thema toegevoegd voor KOOP

### Patch Changes

- 73c28a1: - token update link
  - styling update link naar aanleiding van [de stijldiscussie](https://github.com/nl-design-system/rijkshuisstijl-community/discussions/1613)
  - token update link-list
  - token update + style wijziging skip-link
  - token update breadcrumb
- 6cbbac6: - Token update paragraph
  - Token update heading
  - Token update pre-heading
  - Token update heading-group
  - Token update ordered list
  - Token update unordered list
- 83f2985: Vervang niet bestaand Design Token type "borderStyle" met "other".
- 860e977: Link tokens bijgewerkt:
  - `nl.link.text-decoration-color` verwijderd zodat de underline meekleurt met de state kleur
  - `nl.link.hover.text-decoration` hernoemd naar `nl.link.hover.text-decoration-line` zodat de underline bij hover verdwijnt

- b29ea7b: - H6 design tokens toegevoegd
- 2f21f2c: - token update button
  - token update action-group
  - basis tokens toegevoegd, dit is alleen voor stijling binnen Figma
- 02ca6dc: - line-height van H4 en H5 aangepast van 125% naar 150% voor betere leesbaarheid
  - Tokenschrijfwijze voor nl-headings gewijzigd van . naar - (bijv. nl.heading-level-x → nl.heading.level-x)

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
