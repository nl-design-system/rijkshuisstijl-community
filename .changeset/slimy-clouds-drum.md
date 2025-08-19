---
'@rijkshuisstijl-community/components-react': major
'@rijkshuisstijl-community/design-tokens': major
'@rijkshuisstijl-community/components-css': major
---

Removed the following tokens for unordered list as these are inherited from the document:
--utrecht-unordered-list-color
--utrecht-unordered-list-marker-border-color
--utrecht-unordered-list-font-weight
--utrecht-unordered-list-font-family

Added the following token to control nested lists
--rhc-unordered-list-nested-margin-inline-start

Nested lists now have the same marker as root lists to have less going on
