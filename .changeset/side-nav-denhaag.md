---
'@rijkshuisstijl-community/side-nav-react': major
'@rijkshuisstijl-community/design-tokens': minor
---

- Side Navigation gebruikt nu het Den Haag-component (`@gemeente-denhaag/side-navigation`) uit de NL Design System-bibliotheek, in plaats van de eigen RHC-implementatie. ClassNames wijzigen van `rhc-side-nav*` naar `denhaag-side-navigation*` en de React-API volgt nu Den Haag: composable `SideNav`/`SideNavList`/`SideNavItem`/`SideNavLink`/`SideNavLinkLabel`, waarbij de link-`icon` een child-node is (geen string-prop meer) en `current` de huidige pagina markeert.
- De `--denhaag-side-navigation-*` tokens (+ `--denhaag-focus-border`) worden via de Mapped-laag naar RHC-waarden gemapt zodat theming en dark mode blijven werken. Den Haag's CSS heeft geen fallbacks, dus alle verplichte tokens zijn gedefinieerd.
- Het `@rijkshuisstijl-community/side-nav-css`-package vervalt. Den Haag-componenten injecteren hun eigen CSS via JavaScript zodra de React-component wordt geïmporteerd, dus een aparte framework-agnostische CSS-package is niet nodig. Side Navigation is daarmee React-only.
