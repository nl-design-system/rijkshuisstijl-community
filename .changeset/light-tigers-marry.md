---
'@rijkshuisstijl-community/page-number-navigation-css': minor
'@rijkshuisstijl-community/language-navigation-css': minor
'@rijkshuisstijl-community/data-badge-button-css': minor
'@rijkshuisstijl-community/code-input-group-css': minor
'@rijkshuisstijl-community/navigation-list-css': minor
'@rijkshuisstijl-community/visually-hidden-css': minor
'@rijkshuisstijl-community/breadcrumb-nav-css': minor
'@rijkshuisstijl-community/checkbox-group-css': minor
'@rijkshuisstijl-community/link-list-card-css': minor
'@rijkshuisstijl-community/navigation-bar-css': minor
'@rijkshuisstijl-community/rounded-corner-css': minor
'@rijkshuisstijl-community/unordered-list-css': minor
'@rijkshuisstijl-community/action-group-css': minor
'@rijkshuisstijl-community/card-as-link-css': minor
'@rijkshuisstijl-community/message-list-css': minor
'@rijkshuisstijl-community/number-badge-css': minor
'@rijkshuisstijl-community/ordered-list-css': minor
'@rijkshuisstijl-community/link-button-css': minor
'@rijkshuisstijl-community/pre-heading-css': minor
'@rijkshuisstijl-community/radio-group-css': minor
'@rijkshuisstijl-community/blockquote-css': minor
'@rijkshuisstijl-community/code-input-css': minor
'@rijkshuisstijl-community/file-input-css': minor
'@rijkshuisstijl-community/text-input-css': minor
'@rijkshuisstijl-community/accordion-css': minor
'@rijkshuisstijl-community/link-list-css': minor
'@rijkshuisstijl-community/paragraph-css': minor
'@rijkshuisstijl-community/separator-css': minor
'@rijkshuisstijl-community/skip-link-css': minor
'@rijkshuisstijl-community/toggletip-css': minor
'@rijkshuisstijl-community/checkbox-css': minor
'@rijkshuisstijl-community/side-nav-css': minor
'@rijkshuisstijl-community/textarea-css': minor
'@rijkshuisstijl-community/article-css': minor
'@rijkshuisstijl-community/heading-css': minor
'@rijkshuisstijl-community/listbox-css': minor
'@rijkshuisstijl-community/button-css': minor
'@rijkshuisstijl-community/figure-css': minor
'@rijkshuisstijl-community/footer-css': minor
'@rijkshuisstijl-community/alert-css': minor
'@rijkshuisstijl-community/radio-css': minor
'@rijkshuisstijl-community/card-css': minor
'@rijkshuisstijl-community/file-css': minor
'@rijkshuisstijl-community/hero-css': minor
'@rijkshuisstijl-community/link-css': minor
'@rijkshuisstijl-community/logo-css': minor
---

Onderliggende CSS van community-components is nu direct meegebundeld in de `dist` om te voorkomen dat gebruikers half gestylede componenten te zien krijgen.
Voorheen exporteerden de CSS-packages alleen de ABC-specifieke klassen. Omdat deze bouwen op community-components, functioneerden ze niet zonder de onderliggende stijlen. De meeste stijlen zijn nu vanuit de `index` naar `@mixin`-structuren verplaatst (met wat tussentijdse boyscouting). Hierdoor worden afhankelijkheden automatisch meegeleverd; zo shipt de Accordion CSS nu bijvoorbeeld ook direct de vereiste Button CSS mee.
