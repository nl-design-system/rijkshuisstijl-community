---
'@rijkshuisstijl-community/design-tokens': minor
'@rijkshuisstijl-community/page-number-navigation-css': minor
'@rijkshuisstijl-community/page-number-navigation-react': minor
---

De Page Number Navigation volgt nu het rijkshuisstijl-ontwerp in plaats van de standaard Amsterdam-styling: paginanummers en de vorige/volgende-links krijgen de actiekleur, de actieve pagina een subtiele achtergrondkleur en elk onderdeel een klikdoel van 48 bij 48 pixels met een zichtbare focusrand. De styling wordt gestuurd door nieuwe `rhc.page-number-navigation` design tokens, de React-component zet daarvoor de classname `rhc-page-number-navigation` op het nav-element en het chevron-icoon kleurt voortaan mee met de linkkleur.
