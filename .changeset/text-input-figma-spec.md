---
'@rijkshuisstijl-community/text-input-css': minor
---

De Text Input verdikt de border bij focus niet langer: de focus-outline is het enige focusmiddel, dus de aparte focus-border-width-regels zijn uit de CSS verwijderd. Het token `utrecht.textbox.focus.border-width` blijft voorlopig beschikbaar in de deprecated-set zodat bestaande afnemers tijd hebben om te migreren; de padding-inline blijft 12px, conform het actuele Figma-ontwerp.
