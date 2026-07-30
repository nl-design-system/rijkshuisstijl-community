---
'@rijkshuisstijl-community/components-react': patch
'@rijkshuisstijl-community/alert-react': patch
'@rijkshuisstijl-community/button-react': patch
'@rijkshuisstijl-community/card-as-link-react': patch
'@rijkshuisstijl-community/card-react': patch
'@rijkshuisstijl-community/code-input-group-react': patch
'@rijkshuisstijl-community/code-input-react': patch
'@rijkshuisstijl-community/data-summary-item-react': patch
'@rijkshuisstijl-community/file-input-react': patch
'@rijkshuisstijl-community/file-react': patch
'@rijkshuisstijl-community/footer-react': patch
'@rijkshuisstijl-community/hero-react': patch
'@rijkshuisstijl-community/language-navigation-react': patch
'@rijkshuisstijl-community/link-list-card-react': patch
'@rijkshuisstijl-community/message-list-item-react': patch
'@rijkshuisstijl-community/navigation-bar-react': patch
'@rijkshuisstijl-community/navigation-list-item-react': patch
'@rijkshuisstijl-community/pre-heading-react': patch
'@rijkshuisstijl-community/side-nav-link-react': patch
'@rijkshuisstijl-community/toggletip-react': patch
---

Fix: de `/no-side-effects` entrypoints laden geen CSS meer. Componenten importeerden onderliggende componenten via hun standaard entrypoint, waardoor de bijbehorende CSS toch als side effect werd geladen — ook bij gebruik van `/no-side-effects`. Interne imports gebruiken nu `/no-side-effects`; de standaard entrypoints importeren de CSS van onderliggende componenten expliciet, zodat het bestaande gedrag daar ongewijzigd blijft.
