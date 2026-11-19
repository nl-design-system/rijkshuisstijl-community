---
'@rijkshuisstijl-community/navigation-bar-css': patch
'@rijkshuisstijl-community/navigation-bar-react': patch
---

The navigation bar menu and mega menu now have a fallback for browsers without CSS anchor positioning. The popovers are then positioned with `--rhc-nav-bar-fallback-*` custom properties, which the React components set from the position of the bar when a popover opens.
