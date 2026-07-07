---
'@rijkshuisstijl-community/design-tokens': minor
'@rijkshuisstijl-community/components-css': minor
'@rijkshuisstijl-community/components-react': patch
---

Form Field gedragsfixes en token-opschoning conform het ontwerp:

- `required` wordt nu doorgezet naar het native `<select>` en `aria-describedby` verwijst naar een bestaand id.
- Invalid-foutstreep verbreed van 2px naar 4px (gelijk aan de Alert) via de nieuwe `rhc.border-width.lg` token.
- Select focus-rand vervalt (focus-outline blijft); `utrecht.select.focus.border-width` en `utrecht.select.image-background-position` naar de deprecated-subset.
- Invalid-inspringing houdt velden even breed als velden zonder foutmelding.
