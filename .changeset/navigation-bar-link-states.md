---
'@rijkshuisstijl-community/navigation-bar-react': major
'@rijkshuisstijl-community/navigation-bar-css': major
'@rijkshuisstijl-community/design-tokens': minor
---

Navigation Bar bijgewerkt naar het Figma-ontwerp. Links krijgen een `current`-state (`aria-current="page"` + `rhc-nav-bar__link--current`), icon-start en icon-end met `link.column-gap` ertussen, en een per-state onderlijn via `rhc.nav-bar.link.{hover,active,current}.border-color` + `rhc.nav-bar.link.border-block-end-width`; de hover-underline vervalt. Heading-als-link is verwijderd (de `headingItem`-prop, de `__heading`-class en het token `rhc.nav-bar.heading.font-weight`), en de tokens zijn opgeschoond: `rhc.nav-bar.icon.size`/`.color`/`.active.color` en `rhc.nav-bar.padding-inline` vervallen, de icon-grootte zit op `rhc.nav-bar.link.icon.size`, en er zijn nieuwe link-tokens voor `current.*`, `font-family`, `font-weight` en `line-height`.
