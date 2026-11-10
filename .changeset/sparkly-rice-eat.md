---
'@rijkshuisstijl-community/navigation-bar-css': minor
'@rijkshuisstijl-community/navigation-bar-react': minor
---

# NavBarIdentity

NavBarIdentity is nu een eigen component. De prop `identity` van NavBar bestaat niet meer.

- Gebruik `<NavBarIdentity href="/">Naam</NavBarIdentity>` als child van NavBar.
- De wrapper `rhc-nav-bar__slot-identity` is verwijderd. De styles zit nu op `rhc-nav-bar__identity`.
- De `target` op de identity-link is verwijderd. De link opent nu in hetzelfde tabblad.
