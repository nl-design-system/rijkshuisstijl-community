---
'@rijkshuisstijl-community/side-nav-react': major
'@rijkshuisstijl-community/design-tokens': minor
---

Side Navigation gebruikt nu het Den Haag-component (`@gemeente-denhaag/side-navigation`) uit de NL Design System-bibliotheek in plaats van de eigen RHC-implementatie. De React-API volgt Den Haag: composable `SideNav`/`SideNavList`/`SideNavItem`/`SideNavLink`/`SideNavLinkLabel`, waarbij de link-`icon` een child-node is (geen string-prop meer) en `current` de huidige pagina markeert; classNames wijzigen van `rhc-side-nav*` naar `denhaag-side-navigation*`. Den Haag-componenten leveren hun eigen CSS via JavaScript-injectie zodra de React-component wordt geïmporteerd, dus Side Navigation is React-only en heeft geen apart CSS-package meer. De `--denhaag-side-navigation-*` tokens (+ `--denhaag-focus-border`) worden via de Mapped-laag naar RHC-waarden gemapt zodat theming en dark mode blijven werken.
