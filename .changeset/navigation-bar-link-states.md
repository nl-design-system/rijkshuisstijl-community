---
'@rijkshuisstijl-community/navigation-bar-react': major
'@rijkshuisstijl-community/navigation-bar-css': major
'@rijkshuisstijl-community/design-tokens': minor
---

- Navigation Bar bijgewerkt naar het Figma-ontwerp: `current`-state op de link (`aria-current="page"` + `rhc-nav-bar__link--current`), icon-start + icon-end met `link.column-gap` ertussen, hover-underline verwijderd, en een per-state onderlijn via `rhc.nav-bar.link.{hover,active,current}.border-color` + `rhc.nav-bar.link.border-block-end-width`.
- Heading-als-link verwijderd: de `headingItem`-prop, de `__heading`-class, het token `rhc.nav-bar.heading.font-weight` en de With Heading-story zijn weg.
- Ongebruikte tokens verwijderd (`rhc.nav-bar.icon.size`/`.color`/`.active.color`, `rhc.nav-bar.padding-inline`); de icon-grootte zit nu op `rhc.nav-bar.link.icon.size`. Nieuwe link-tokens toegevoegd: `current.*`, `font-family`, `font-weight`, `line-height`.
