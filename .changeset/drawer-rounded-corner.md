---
'@rijkshuisstijl-community/design-tokens': patch
---

Drawer-tokens afgestemd op het ontwerp. Header/body/footer-tokens toegevoegd onder `utrecht.drawer.*` (padding, `row-gap` en de separator-borders); de slots leveren de padding, de drawer zelf niet meer. Afgeronde hoeken lopen via de rounded-corner utility, dus `utrecht.drawer.border-radius` staat op `none`. Daarnaast zijn `max-inline-size`/`min-inline-size`/`max-block-size`/`min-block-size`, de drawer-marge en de separator-kleur (Mapped border-token) bijgewerkt.
