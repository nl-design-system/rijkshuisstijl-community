---
'@rijkshuisstijl-community/components-css': major
---

In de `@rijkshuisstijl-community/design-tokens` package zijn de brand en common tokens van RHC zijn naast de basis tokens gelegd. Hieruit zijn aantal naamwijzigen gekomen om de tokens beter aan te laten sluiten. Een aantal componenten maken direct gebruik van common tokens, voor deze componenten is dit een breaking change:

- Article
- Card as Link
- Card
- Figure
- File Input
- Footer
- Form Field
- Form
- Link List
- Message List
- Navbar
- Navigation List
- Radio Group
- Table

Dit betreft de volgende token wijzigingen.

Subdued is gewijzigd in subtle:

- naam `--rhc-color-foreground-subdued` gewijzigd naar `--rhc-color-foreground-subtle`

Groepering 'text' is toegevoegd aan de font tokens:

- naam `--rhc-font-weight-bold` gewijzigd naar `--rhc-text-font-weight-bold`
- naam `--rhc-font-weight-regular` gewijzigd naar `--rhc-text-font-weight-regular`
- naam `--rhc-line-height-md` & `--rhc-line-height-body` gewijzigd naar `--rhc-text-line-height-md`
- naam `--rhc-font-family-primary` gewijzigd naar `--rhc-text-font-family-default`
- naam `--rhc-font-family-secondary` gewijzigd naar `--rhc-text-font-family-serif`

Font-size schaal is gewijzigd:

- naam `--rhc-font-size-heading-level-5` & `--rhc-font-size-body-default` gewijzigd naar `--rhc-text-font-size-md`
- naam `--rhc-font-size-heading-level-4` & `--rhc-font-size-body-intro` gewijzigd naar `--rhc-text-font-size-lg`

responsive schaal is gewijzigd:

- naam `--rhc-font-size-xs-desktop` gewijzigd naar `--rhc-text-font-size-max-md`
- naam `--rhc-font-size-xs-mobile` gewijzigd naar `--rhc-text-font-size-min-md`
- naam `--rhc-font-size-sm-desktop` gewijzigd naar `--rhc-text-font-size-max-lg`
- naam `--rhc-font-size-md-desktop` gewijzigd naar `--rhc-text-font-size-max-xl`

Andere naam-wijzigingen:

- naam `--rhc-color-canvas` gewijzigd naar `--rhc-color-bg-document`
- naam `--rhc-size-target` gewijzigd naar `--rhc-size-pointer-target`

Bekijk de changelog van `@rijkshuisstijl-community/design-tokens` voor de volledige lijst van gewijzigde tokens.
