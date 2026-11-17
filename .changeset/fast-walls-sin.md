---
'@rijkshuisstijl-community/navigation-bar-react': major
---

# NavBarLink

De link in de NavBar is nu een eigen component: `NavBarLink`. `NavBarItem` gebruikt deze component voor de link.

De prop `items` van `NavBar` is nu een `ReactNode` in plaats van een array met objecten. Geef de items mee als `NavBarItem`-elementen, net als `endItems`.

Het oude type `NavBarLinkProps` heet nu `NavBarLinkData`. De naam `NavBarLinkProps` hoort nu bij de nieuwe component `NavBarLink`.
