---
'@rijkshuisstijl-community/text-input-css': patch
---

De Text Input verdikt de border bij focus niet langer: de focus-outline is voortaan het enige focusmiddel en de aparte focus-border-width-regels zijn uit de CSS verwijderd. De custom property `--utrecht-textbox-focus-border-width` wordt daardoor niet meer door de component toegepast; het bijbehorende token `utrecht.textbox.focus.border-width` blijft in de deprecated-set staan voor referentie en Figma-pariteit.
