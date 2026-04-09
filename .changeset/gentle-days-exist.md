---
'@rijkshuisstijl-community/design-tokens': major
---

Rename the following tokens:

- Rename `rhc.space.0` to `rhc.space.none`
- Rename `rhc.space.25` to `rhc.space.xs`
- Rename `rhc.space.50` to `rhc.space.sm`
- Rename `rhc.space.100` to `rhc.space.md`
- Rename `rhc.space.150` to `rhc.space.lg`
- Rename `rhc.space.200` to `rhc.space.xl`
- Rename `rhc.space.300` to `rhc.space.2xl`
- Rename `rhc.space.400` to `rhc.space.3xl`
- Rename `rhc.space.500` to `rhc.space.4xl`
- Rename `rhc.space.600` to `rhc.space.5xl`

Remove the `rhc.space.700` token. You can replace it with `rhc.space.600` in most cases.

Add `rhc.space.2xs`.

Migrate with the following find/replace actions:

- Replace `var(--rhc-space-0)` with `var(--rhc-space-none)`
- Replace `var(--rhc-space-25)` with `var(--rhc-space-xs)`
- Replace `var(--rhc-space-50)` with `var(--rhc-space-sm)`
- Replace `var(--rhc-space-100)` with `var(--rhc-space-md)`
- Replace `var(--rhc-space-150)` with `var(--rhc-space-lg)`
- Replace `var(--rhc-space-200)` with `var(--rhc-space-xl)`
- Replace `var(--rhc-space-300)` with `var(--rhc-space-2xl)`
- Replace `var(--rhc-space-400)` with `var(--rhc-space-3xl)`
- Replace `var(--rhc-space-500)` with `var(--rhc-space-4xl)`
- Replace `var(--rhc-space-600)` with `var(--rhc-space-5xl)`
