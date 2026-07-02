---
'@rijkshuisstijl-community/button-react': minor
'@rijkshuisstijl-community/button-css': minor
'@rijkshuisstijl-community/components-react': minor
'@rijkshuisstijl-community/components-css': minor
'@rijkshuisstijl-community/file-input-react': patch
'@rijkshuisstijl-community/file-react': patch
---

De Button gebruikt voortaan de Button candidate van NL Design System (nl-button) als basis in plaats van de Utrecht Button. De button krijgt daarmee de classname `nl-button`, wordt gestyled met de `--nl-button-*` design tokens en ondersteunt de drie kleuropties via de thema's (alle buttons lintblauw, alle buttons de themakleur, of primary in de themakleur en de rest lintblauw). Kies de variant met de nieuwe `purpose` property (`primary`, `secondary`, `subtle`); de bestaande `appearance` property blijft werken en wordt vertaald naar de overeenkomstige `purpose`, maar is deprecated. Let op: `disabled` zet nu `aria-disabled` zodat de button focusbaar blijft; gebruik `htmlDisabled` voor het HTML-attribuut `disabled`. De IconButton gebruikt de ingebouwde icon-only variant van nl-button en houdt het label toegankelijk. De re-exports van de Utrecht Button (`ButtonLink`, `PrimaryActionButton`, `SecondaryActionButton`, `SubtleButton`) blijven voorlopig beschikbaar maar zijn deprecated en verdwijnen in een volgende major versie.
