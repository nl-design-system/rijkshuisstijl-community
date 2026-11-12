---
'@rijkshuisstijl-community/design-tokens': patch
---

Point component tokens to basis tokens instead of `rhc` tokens, wherever the basis token resolves to exactly the same value in every theme, type scale, viewport and color mode. Resolved values do not change; generated CSS now references `--basis-*` custom properties instead of `--rhc-*`.

- border: `rhc.border-width.*` and `rhc.border-radius.*` → `basis.border-width.*` and `basis.border-radius.*`
- text: `rhc.text.font-family.*`, `font-weight.*`, `font-size.*` and `line-height.*` → `basis.text.*` (fluid font sizes keep working)
- focus: `rhc.focus.outline-offset` → `basis.focus.outline-offset`
- color: `rhc.color.foreground.*`, `rhc.color.bg-document`, `rhc.color.border.*` and `rhc.color.transparent` → `basis.color.default.*`, `basis.color.default-inverse.*`, `basis.color.action-1.*` and `basis.color.transparent`
- size: `rhc.size.page.md` → `basis.page.max-inline-size`, `rhc.size.pointer-target` → `basis.pointer-target.min-block-size` / `min-inline-size`
- space: `rhc.space.*` → `basis.space.{block,inline,row,column}.*`, chosen by the CSS property that uses it (fluid space keeps working)
