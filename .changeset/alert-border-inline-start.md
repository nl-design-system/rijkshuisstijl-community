---
'@rijkshuisstijl-community/design-tokens': minor
'@rijkshuisstijl-community/alert-css': patch
---

Alert afgestemd op het Figma-ontwerp: een 4px accentrand aan alleen de inline-start-zijde in de statuskleur, met lichte tint-achtergrond, 24px padding en rechte hoeken. Hiervoor is een nieuwe `rhc.border-width.lg` (4px) toegevoegd en honoreert `.rhc-alert` de `alert.border-inline-start-width` zonder de generieke `border-width` te kapen.
