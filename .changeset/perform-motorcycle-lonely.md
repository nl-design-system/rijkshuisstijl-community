---
"@rijkshuisstijl-community/design-tokens": major
---

### Breaking change

- De paragraph font tokens op de common-laag zijn hernoemd naar `body`, zodat ze breder toepasbaar zijn.
- De token `rhc.paragraph.small` is verwijderd.
- Verwijzingen naar `rhc.paragraph.small` zijn vervangen door `rhc.body.default`, wat betekent dat de `font-size` van componenten als `counterbadge`, `navigation-list` en `message-list` is gewijzigd van 18px naar 20px.
- `rhc.font-family.primary` value is aangepast, het font RijksoverheidSansWeb is eruit gehaald omdat dit een closed-source font is en wij Fira Sans gebruiken ter illustratie.
- `rhc.alert.color` value aangepast van `rhc.foreground.default` naar `rhc.foreground.on-light-color`

### Wat betekent dit voor jou?

Gebruik je `rhc.paragraph.small` of een van de hernoemde paragraph-tokens direct in je code? Dan moet je deze vervangen door de nieuwe `rhc.body.*` tokens.

Gebruik je alleen de componenten uit de component library, zonder custom tokens toe te passen? Dan hoef je niets aan te passen, maar let op: de `font-size` van sommige onderdelen is iets groter geworden.
