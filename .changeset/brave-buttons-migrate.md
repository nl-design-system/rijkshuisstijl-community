---
'@rijkshuisstijl-community/button-react': major
'@rijkshuisstijl-community/button-css': major
'@rijkshuisstijl-community/components-react': major
'@rijkshuisstijl-community/components-css': major
'@rijkshuisstijl-community/file-input-react': patch
'@rijkshuisstijl-community/file-react': patch
---

De Button gebruikt voortaan de Button candidate van NL Design System (nl-button) als basis in plaats van de Utrecht Button. De button krijgt daarmee de classname `nl-button`, wordt gestyled met de `--nl-button-*` design tokens en ondersteunt de drie kleuropties via de thema's (alle buttons lintblauw, alle buttons de themakleur, of primary in de themakleur en de rest lintblauw). Kies de variant met de nieuwe `purpose` property (`primary`, `secondary`, `subtle`); de bestaande `appearance` property blijft werken en wordt vertaald naar de overeenkomstige `purpose`, maar is deprecated. De IconButton gebruikt de ingebouwde icon-only variant van nl-button en houdt het label toegankelijk. De re-exports van de Utrecht Button (`ButtonLink`, `PrimaryActionButton`, `SecondaryActionButton`, `SubtleButton`) blijven voorlopig beschikbaar maar zijn deprecated en verdwijnen in een volgende major versie.

Breaking changes, let op bij het bijwerken:

- `disabled` zet nu `aria-disabled="true"` in plaats van het HTML-attribuut `disabled`, zodat de button focusbaar blijft voor hulptechnologie. Een button met `disabled` en `type="submit"` verstuurt het formulier daardoor wel als je de klik niet zelf afvangt. Gebruik `htmlDisabled` als je het echte HTML-attribuut `disabled` nodig hebt.
- De classname wijzigt van `utrecht-button` naar `nl-button`; eigen CSS-selectors op `utrecht-button` moeten mee.
- Theming via custom properties wijzigt van `--utrecht-button-*` naar `--nl-button-*`.
- De `hint` property accepteert de waarden van de candidate (`positive`, `negative`) in plaats van de Utrecht-waarden.
