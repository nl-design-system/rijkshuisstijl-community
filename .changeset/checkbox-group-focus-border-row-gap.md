---
'@rijkshuisstijl-community/design-tokens': patch
'@rijkshuisstijl-community/checkbox-css': patch
---

Checkbox focus-rand versmald van 2px naar 1px (de zichtbare focusindicator is de outline, niet de border) en de ruimte tussen checkboxes in een groep verkleind van 16px naar 8px. Het vinkje en het streepje van een uitgeschakelde checkbox krijgen nu de juiste grijze kleur (icon/subtle, cool-grey.500) in plaats van respectievelijk een te donker grijs en een blauw streepje, conform de Figma-spec. De verouderde todo.-tokengroep voor de checkbox is opgeruimd (die dupliceerde de al bestaande checked/indeterminate hover-, active- en disabled-tokens).
