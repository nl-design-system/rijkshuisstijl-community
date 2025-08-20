---
'@rijkshuisstijl-community/components-react': major
'@rijkshuisstijl-community/design-tokens': major
'@rijkshuisstijl-community/components-css': major
---

Removed deprecated tokens and much custom code for SkipLink

- Kept only the box-shadow properties and moved those to rhc-\* namespace
- Removed visibleOnFocus prop and class, assuming this is always the behaviour
- Also cleaned the storybook, with just a default, rtl, and focused state
- Added links in storybook
