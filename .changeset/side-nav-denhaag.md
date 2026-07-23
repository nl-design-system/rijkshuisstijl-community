---
'@rijkshuisstijl-community/side-nav-react': major
'@rijkshuisstijl-community/components-css': major
'@rijkshuisstijl-community/design-tokens': major
---

Side Navigation gebruikt nu het Gemeente Den Haag-component (`@gemeente-denhaag/side-navigation`) in plaats van de eigen Rijkshuisstijl-implementatie.

- React-API volgt Den Haag: composable `SideNav`/`SideNavList`/`SideNavItem`/`SideNavLink`; `icon` is een child-node en `current` markeert de actieve pagina.
- Classnames zijn `denhaag-side-navigation*` (voorheen `rhc-side-nav*`); de bijbehorende custom properties heten nu `--denhaag-side-navigation-*` (voorheen `--denhaag-sidenav-*`). Overrides op de oude namen werken niet meer.
- De CSS zit niet in het React-pakket. Laad `@gemeente-denhaag/side-navigation/index.css`, of gebruik `@rijkshuisstijl-community/components-css`: die bundelt de Den Haag-basis plus de Rijkshuisstijl box-states (lichte achtergrond op de actieve pagina, donkere achtergrond met witte tekst bij hover). Den Haag injecteert de CSS niet via JavaScript.
- Het aparte publieke pakket `@rijkshuisstijl-community/side-nav-css` is verwijderd.
