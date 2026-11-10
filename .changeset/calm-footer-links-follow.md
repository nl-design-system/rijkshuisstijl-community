---
'@rijkshuisstijl-community/footer-css': patch
---

Footer links now get their color through the `--nl-link-*` and `--utrecht-link-*` variables instead of a direct `color`, so the links in the compact footer no longer turn white when the link CSS is loaded after the footer CSS. Hover, focus, active and visited links keep the footer color as well, and the vertical alignment of the footer navigation links no longer depends on the CSS load order.
