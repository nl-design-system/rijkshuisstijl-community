---
'@rijkshuisstijl-community/design-tokens': patch
---

De focus-rand van de checkbox is versmald van 2px naar 1px, omdat de zichtbare focusindicator voortaan de outline is en niet de border (issue #2628); voor visuele consistentie zijn ook de checked- en indeterminate-focusvarianten naar 1px gebracht; het issue noemt alleen de basisvariant, maar de Figma-componentnodes bevestigen dat de control-border in álle states 1px blijft en de focusindicatie volledig van de outline-ring komt. Daarnaast is de onderlinge ruimte tussen checkboxes in een groep verkleind van 16px naar 8px, conform de afgesproken waarde uit hetzelfde issue.
