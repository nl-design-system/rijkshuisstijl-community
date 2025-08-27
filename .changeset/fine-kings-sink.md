---
'@rijkshuisstijl-community/components-react': major
'@rijkshuisstijl-community/components-css': major
'@rijkshuisstijl-community/design-tokens': major
---

Removed the following tokens:
Used but unnecessary:
--utrecht-alert-heading-line-height
--utrecht-alert-message-line-height

Unused:
--utrecht-alert-heading-font-family
--utrecht-alert-heading-font-size
--utrecht-alert-heading-font-weight

Reworked the Alert react component to allow users to add content like heading and paragraph in the children instead of duplicating heading props in the alert directly.
Added icon overwrite support in case you want a different icon on a specific alert type.
