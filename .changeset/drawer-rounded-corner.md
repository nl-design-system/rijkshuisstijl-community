---
'@rijkshuisstijl-community/design-tokens': minor
'@rijkshuisstijl-community/components-css': minor
'@rijkshuisstijl-community/components-react': minor
'@rijkshuisstijl-community/drawer-react': minor
---

Drawer-tokens afgestemd op het ontwerp: header/body/footer-padding, `row-gap` en separator-borders onder `utrecht.drawer.*`; de slots leveren de padding, de drawer zelf niet meer. Een RHC-CSS-laag verzorgt nu de opmaak van `.utrecht-drawer__header/__body/__footer` op basis van die tokens, zodat de slotstructuur daadwerkelijk rendert. De drawer is een flex-kolom: header en footer blijven staan en de `.utrecht-drawer__body` is de scroll-container. Geef die body een `tabIndex` voor toetsenbord-scrollen; de `Drawer` zet zelf geen `tabIndex` meer op de root. De body-`row-gap` volgt het ontwerp met `rhc.space.lg` (12px) en de titel krijgt een optische bovenmarge van `rhc.space.md` (8px). Afgeronde hoeken lopen via de rounded-corner utility; alleen de bovenhoek aan de contentzijde wordt afgerond en `utrecht.drawer.border-radius` staat op `none`.

De `Drawer` React-wrapper beheert de native `<dialog>` nu zelf op basis van `open` en `modal`: die sturen `showModal()` / `show()` / `close()` aan, omdat React het `open`-attribuut niet betrouwbaar met `showModal()` kan combineren (de drawer bleef anders niet-modaal en was niet te sluiten). `onClose` wordt op het native `close`-event gekoppeld, zodat sluiten via de sluitknop en via Escape de open-state van de parent bijwerkt. Een gesloten drawer is bovendien weer echt verborgen: `.utrecht-drawer:not([open])` krijgt `display: none`, want de onvoorwaardelijke `display: flex` overschreef de UA-regel `dialog:not([open]) { display: none }`.
