---
'@rijkshuisstijl-community/components-angular': major
'@rijkshuisstijl-community/storybook-angular': major
'@rijkshuisstijl-community/components-react': major
'@rijkshuisstijl-community/components-css': major
---

Alleen NL link gebruiken

- Zorgen dat RHC link alleen NL link gebruikt
  - NL link's `disabled` prop niet toestaan (altijd op `false` zetten) (angular versie ondersteunde dit toch al niet)
- Documentatie aan Angular readme.md toegevoegd
- Prop `inline` toegevoegd, die de standaard `display: inline-flex` terugzet naar `display: inline`
  - Storybookvoorbeeld toegevoegd
- Ongebruike classname `.nl-link--visted` gefixt naar `.nl-link--visited`
