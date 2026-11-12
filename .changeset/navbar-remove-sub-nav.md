---
'@rijkshuisstijl-community/navigation-bar-css': major
'@rijkshuisstijl-community/navigation-bar-react': major
---

De subnavigatie is (voorlopig) uit de Navigation Bar verwijderd:

- `SubNavBar` en het type `SubNavBarProps` bestaan niet meer, net als de classes `rhc-sub-nav-bar` en `rhc-sub-nav-bar__content`.
- `NavBar.Item` heeft geen `subList`, `contentId` en `open` meer. Een item is nu altijd een link.
