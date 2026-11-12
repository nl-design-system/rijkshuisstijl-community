---
'@rijkshuisstijl-community/navigation-bar-css': major
'@rijkshuisstijl-community/navigation-bar-react': major
---

# NavBar: `startItems` en `endItems`

De NavBar heeft nu alleen nog `startItems` en `endItems`. Je bepaalt zelf waar de identity, links en het megamenu staan. Het mobiele menu en het megamenu gebruiken de native Popover API; de NavBar heeft geen `useEffect` meer en rendert de items nog maar één keer.

## Migratie

- `identity={<NavBarIdentity … />}` → plaats `<NavBarIdentity>` in `startItems`. `NavBarIdentity` rendert nu een `<li>`.
- `items={[{ id, href, label }]}` → `startItems={<><NavBarItem id href label /></>}`.
- `megamenu={content}` → plaats `<NavBarMegaMenu>{content}</NavBarMegaMenu>` in `startItems` of `endItems`.
- Het root-element is nu een `<nav>` met `aria-label` (standaard `"Hoofdnavigatie"`) in plaats van een `<div>` met een verborgen `<h2>`. `className` komt nu op dit root-element.
- Nieuw: de prop `persistent` op `NavBarItem` en `NavBarIdentity` (standaard `true` voor de identity) houdt een item op smalle schermen zichtbaar in de balk.

## CSS

- Nieuw: `rhc-nav-bar__menu`, `rhc-nav-bar__list--start`, `rhc-nav-bar__list--end`, `rhc-nav-bar__toggle`, `rhc-nav-bar__item--persistent`, `rhc-nav-bar__megamenu-item`.
- Verwijderd: `rhc-nav-bar__slot`, `rhc-nav-bar__slots`, `rhc-nav-bar__slots--mobile-in-megamenu`, `rhc-nav-bar__slot-main`, `rhc-nav-bar__slot-main__btn-trigger`, `rhc-nav-bar__slot-megamenu`, `rhc-nav-bar__nav`, `rhc-nav-bar__shade` en `.rhc-page-header.is-navbar-main-open`.
