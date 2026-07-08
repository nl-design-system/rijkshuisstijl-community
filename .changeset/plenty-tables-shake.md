---
'@rijkshuisstijl-community/footer-css': major
'@rijkshuisstijl-community/footer-react': major
'@rijkshuisstijl-community/components-angular': major
'@rijkshuisstijl-community/design-tokens': major
---

Page Footer afgestemd op de nieuwe richtlijn:

- Tagline is een los tekstelement (geen Heading), cursief en volle breedte boven de secties; nieuwe `rhc.page-footer.tagline.*` en `rhc.page-footer.layout.row-gap` tokens.
- Secties vullen op desktop de content-breedte via een verruimde `rhc.page-footer.column-width`; ruimte tussen links per sectie via `rhc.page-footer.link-list.row-gap`.
- Scheidingslijn loopt gelijk met de content (subtiele lint-tint) en subfooter-links staan horizontaal; instelbaar via `rhc.page-footer.subfooter.*`.
- Outlined variant verwijderd: `background` prop (React), `background` en `appearanceLevel` inputs (Angular) en `rhc.page-footer.outlined.*` tokens vervallen.
- Footer-kop wordt visueel verborgen via `.rhc-page-footer__heading` in plaats van het `hidden`-attribuut.
- `backtotop` prop is deprecated.
