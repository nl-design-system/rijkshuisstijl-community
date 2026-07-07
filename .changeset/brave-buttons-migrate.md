---
'@rijkshuisstijl-community/button-react': major
'@rijkshuisstijl-community/button-css': major
'@rijkshuisstijl-community/components-react': major
'@rijkshuisstijl-community/components-css': major
'@rijkshuisstijl-community/file-input-react': patch
'@rijkshuisstijl-community/file-react': patch
---

Button gebruikt nu de NL Design System Button-candidate (`nl-button`) als basis in plaats van de Utrecht Button, met classname `nl-button` en `--nl-button-*` tokens. Nieuwe `purpose` prop (`primary`/`secondary`/`subtle`); `appearance` blijft werken maar is deprecated. De derde kleuroptie (primary in de themakleur, rest lintblauw) volgt met de themakoppeling in een latere release.

Breaking changes:

- `disabled` zet nu `aria-disabled="true"` in plaats van het HTML-attribuut, zodat de button focusbaar blijft; gebruik `htmlDisabled` voor het echte `disabled`-attribuut.
- Classname van `utrecht-button` naar `nl-button`; theming van `--utrecht-button-*` naar `--nl-button-*`.
- De `hint` prop gebruikt nu `positive`/`negative` in plaats van de Utrecht-waarden.
- De Utrecht-re-exports (`ButtonLink`, `PrimaryActionButton`, `SecondaryActionButton`, `SubtleButton`) zijn deprecated.
