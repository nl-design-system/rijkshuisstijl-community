---
'@rijkshuisstijl-community/design-tokens': major
'@rijkshuisstijl-community/components-css': major
---

De design tokens zijn gewijzigd, en deze wijzigingen zijn verwerkt in de CSS:

- `rhc.navigation-list.icon.background-color` hernoemd naar `rhc.navigation-list.item.icon-start.background-color`.
- `rhc.navigation-list.icon.border-radius` hernoemd naar `rhc.navigation-list.item.icon-start.border-radius`.
- `rhc.navigation-list.icon.color` hernoemd naar `rhc.navigation-list.item.icon-start.color`.
- `rhc.navigation-list.item.content.font-size` hernoemd naar `rhc.navigation-list.item.description.font-size`.
- `rhc.navigation-list.item.heading.color` hernoemd naar `rhc.navigation-list.item.label.color`.
- `rhc.navigation-list.item.icon.padding-block` hernoemd naar `rhc.navigation-list.item.icon-start.padding-block`.
- `rhc.navigation-list.item.icon.padding-inline` hernoemd naar `rhc.navigation-list.item.icon-start.padding-inline`.
- `rhc.navigation-list.item.icon.size` hernoemd naar `rhc.navigation-list.item.icon-start.size`.
- `rhc.navigation-list.item.color` is verwijderd en `rhc.navigation-list.item.description.color` is toegevoegd zodat de color netjes op de description word ingesteld en niet elders overschreven word.
- `rhc.navigation-list.item.description.line-height` is toegevoegd omdat we over het algemeen line-height instelbaar maken waar font-size instelbaar is.
- `rhc.navigation-list.item.icon-end.color` is toegevoegd zodat icon color van end-icon niet meer via common token is gezet.
