---
'@rijkshuisstijl-community/navigation-bar-react': major
'@rijkshuisstijl-community/navigation-bar-css': major
'@rijkshuisstijl-community/design-tokens': minor
---

Navigation Bar afgestemd op het Figma-ontwerp:

- Links krijgen een `current`-state (`aria-current="page"`), icon-start/icon-end en een per-state onderlijn; de hover-underline vervalt.
- Heading-als-link verwijderd (`headingItem` prop en `__heading` class).
- Tokens opgeschoond: `rhc.nav-bar.icon.*` en `padding-inline` vervallen, nieuwe `link.*`- en `link.current.*`-tokens.
