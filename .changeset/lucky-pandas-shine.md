---
'@rijkshuisstijl-community/design-tokens': minor
'@rijkshuisstijl-community/page-number-navigation-css': minor
'@rijkshuisstijl-community/page-number-navigation-react': minor
---

De Page Number Navigation volgt nu het rijkshuisstijl-ontwerp in plaats van de standaard Amsterdam-styling: paginanummers en de vorige/volgende-links krijgen de actiekleur, de actieve pagina een subtiele achtergrondkleur en elk onderdeel een klikdoel van 48 bij 48 pixels met een zichtbare focusrand. De actiekleur komt uit de nieuwe semantische tokens `rhc.color.foreground.action` en `rhc.color.foreground.action-hover`, die per thema in de primary-color sets zijn vastgelegd zodat de linkkleur in elk thema WCAG AA (4,5:1) op wit haalt; in het oranje thema (en het nog niet geactiveerde mintgroen) betekent dat een donkerdere tint dan primary.500. De styling wordt verder gestuurd door de bestaande `ams.pagination` tokens (linkkleur en padding) aangevuld met nieuwe `rhc.page-number-navigation` design tokens; de React-component zet daarvoor de classname `rhc-page-number-navigation` op het nav-element en het chevron-icoon kleurt voortaan mee met de linkkleur. Let op: de gewijzigde linkkleur en padding gelden via de tokens ook voor bestaand gebruik zonder de nieuwe classname, en de standaard vorige/volgende-labels beginnen nu met een hoofdletter (`Vorige`/`Volgende`).
