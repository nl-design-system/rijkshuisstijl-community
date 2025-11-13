---
'@rijkshuisstijl-community/design-tokens': major
---

De brand en common tokens van RHC zijn naast de basis tokens gelegd. Hieruit zijn aantal naamwijzigen gekomen om de tokens beter aan te laten sluiten. Maak je direct gebruik van common tokens? Dan is dit een breaking change.

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
