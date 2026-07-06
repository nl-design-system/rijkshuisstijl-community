---
'@rijkshuisstijl-community/design-tokens': minor
'@rijkshuisstijl-community/alert-css': patch
---

Voegt een `alert.border-inline-start-width`-token toe en laat `.rhc-alert` dit honoreren, zodat de Alert een accentrand aan alleen de inline-start-zijde kan tonen (zoals het ontwerp vraagt) zonder de generieke `border-width` te kapen. De waarde staat nu op 0; de breedte en de overige Alert-waarden (tint, accentkleur, padding, hoeken, icoongrootte, tekstkleur) komen uit Figma.
