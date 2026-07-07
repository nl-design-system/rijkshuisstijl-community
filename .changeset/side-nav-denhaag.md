---
'@rijkshuisstijl-community/side-nav-react': major
'@rijkshuisstijl-community/design-tokens': minor
---

Side Navigation gebruikt nu het Den Haag-component (`@gemeente-denhaag/side-navigation`) in plaats van de eigen RHC-implementatie.

- React-API volgt Den Haag: composable `SideNav`/`SideNavList`/`SideNavItem`/`SideNavLink`; `icon` is een child-node, `current` markeert de pagina.
- Classnames van `rhc-side-nav*` naar `denhaag-side-navigation*`.
- Den Haag levert eigen CSS via JS-injectie: Side Navigation is React-only, geen apart CSS-package meer.
