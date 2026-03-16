---
'@rijkshuisstijl-community/components-react': major
'@rijkshuisstijl-community/components-css': major
'@rijkshuisstijl-community/web-components': major
---

This is only breaking change for projects that use the Rijkshuisstijl Community components, but do not use the `@rijkshuisstijl-community/design-tokens` theme and misteriously do not yet use the common tokens.

When you use `@rijkshuisstijl-community/design-tokens` in combination with any of the following packages, everything will keep working.

- `@rijkshuisstijl-community/components-react`
- `@rijkshuisstijl-community/components-css`
- `@rijkshuisstijl-community/web-components`

Since components no longer have hardcoded fallback values for colors or dimensions, you will need to set the following required common design tokens:

- `rhc.border-radius.*`
- `rhc.border-width.*`
- `rhc.border-width.*`
- `rhc.color.*.*`
- `rhc.color.wit`
- `rhc.color.zwart`
- `rhc.space.*`
