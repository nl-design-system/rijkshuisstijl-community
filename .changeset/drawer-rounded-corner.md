---
'@rijkshuisstijl-community/design-tokens': minor
'@rijkshuisstijl-community/components-css': minor
---

Drawer-tokens afgestemd op het ontwerp: header/body/footer-padding, `row-gap` en separator-borders onder `utrecht.drawer.*`; de slots leveren de padding, de drawer zelf niet meer. Een RHC-CSS-laag verzorgt nu de opmaak van `.utrecht-drawer__header/__body/__footer` op basis van die tokens, zodat de slotstructuur daadwerkelijk rendert. De body-`row-gap` volgt het ontwerp met `rhc.space.lg` (12px). Afgeronde hoeken lopen via de rounded-corner utility (alleen de bovenhoek die naar de content wijst; `utrecht.drawer.border-radius` staat daarom op `none`).
