---
'@rijkshuisstijl-community/components-css': major
---

Switch from `var(--rhc-size-*lint)` to `var(--rhc-space-*)` for spacing. For users of `@rijkshuisstijl-community/design-tokens` there is no visual change, because the design tokens have the same values.

This is a breaking change for users that have configured different values for `var(--rhc-size-*lint)` to `var(--rhc-space-*)` in their own theme, and have not configured the component tokens.

The design for the following components has changed, if you haven't configured the component tokens:

- The fallback for `var(--rhc-dot-badge-size)` is now `var(--rhc-space-lg)` instead of `var(--rhc-size-quarter-lint)`.

The design for the following component has changed (because there is no component token):

- Heading Group gap now is `var(--rhc-space-lg)` instead of `var(--rhc-size-quarter-lint)`.
