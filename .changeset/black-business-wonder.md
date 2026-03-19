---
'@rijkshuisstijl-community/design-tokens': patch
---

- Verwijderd: rhc.line-height.icon.md
- Toegevoegd: rhc.icon.md.inset-block-start & rhc.icon.lg.inset-block-start

In Figma kan een fixed height van een instance (component) niet worden aangepast
met design tokens. Daarom zijn de inset-block-start tokens toegevoegd als
vervanging van de line-height tokens, zodat de responsive font-size in Figma (fluid in code) werkt.
