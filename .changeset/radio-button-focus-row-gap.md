---
'@rijkshuisstijl-community/design-tokens': patch
---

De radio button volgt nu de Figma-spec voor focus en groepsafstand: de focus-rand gaat van 2px naar 1px (`utrecht.radio-button.focus.border-width` van `{rhc.border-width.md}` naar `{rhc.border-width.sm}`), omdat de focus-indicatie voortaan volledig van de focus-outline komt, en voor consistentie is `utrecht.radio-button.checked.focus.border-width` op dezelfde manier aangepast; het issue noemt alleen de basisvariant, maar de Figma-componentnodes bevestigen dat de control-border in álle states 1px blijft en de focusindicatie volledig van de outline-ring komt. Daarnaast is de ruimte tussen radio-opties in een groep verkleind van 16px naar 8px (`rhc.radio-group.row-gap` van `{rhc.space.xl}` naar `{rhc.space.md}`), zodat bij elkaar horende opties visueel als één groep ogen.
