---
'@rijkshuisstijl-community/design-tokens': minor
'@rijkshuisstijl-community/components-css': minor
'@rijkshuisstijl-community/components-react': minor
---

Drawer-tokens afgestemd op het ontwerp: header/body/footer-padding, `row-gap` en separator-borders onder `utrecht.drawer.*`; de slots leveren de padding, de drawer zelf niet meer. Een RHC-CSS-laag verzorgt nu de opmaak van `.utrecht-drawer__header/__body/__footer` op basis van die tokens, zodat de slotstructuur daadwerkelijk rendert. De drawer is een flex-kolom: header en footer blijven staan en de `.utrecht-drawer__body` is de scroll-container. Geef die body een `tabIndex` voor toetsenbord-scrollen; de `Drawer` zet zelf geen `tabIndex` meer op de root. De body-`row-gap` volgt het ontwerp met `rhc.space.lg` (12px) en de titel krijgt een optische bovenmarge van `rhc.space.md` (8px). Afgeronde hoeken lopen via de rounded-corner utility; alleen de bovenhoek aan de contentzijde wordt afgerond en `utrecht.drawer.border-radius` staat op `none`.
