# Blockquote (outline) styling + new Quote component

Date: 2026-07-09
Branch: `feat/blockquote-quote-figma`
Figma: node `5941-84620` (blockquote outline), node `5941-84595` (quote filled)

## Context

Two Figma frames in the MinAZ / Rijkshuisstijl Uitbreiding file:

- Frame `5941-84620` (titled "Quote", instances named "Blockquote", Style=Outline): an
  outline quote with a 2px border on two adjacent sides, one 24px rounded corner
  (top-left / top-right / bottom-left variants), quote text + attribution.
- Frame `5941-84595` (titled "Blockquote", instances named "Previously blockquote"): a
  filled callout with a background tint, a 4px coloured left accent, a bold heading and
  body text.

Agreed mapping (confirmed with the user):

- The **outline** design is the target styling for the **existing `blockquote`** component.
- The **filled** design becomes a **new component named `quote`** (bg tint + left accent +
  heading + body; not a literal quotation, so it renders as a neutral `<div>`).
- Both use the **themeable `primary`** token layer, so they recolour per department theme.
  The three coloured examples in Figma are simply three themes.

Current state: `blockquote` exists on all four surfaces (css/react/twig/web-component) but is
visually bare (margins only, transparent border, no radius). `quote` does not exist.

## Token architecture (important)

Component CSS packages keep `src/tokens.json` empty (`{}`). Real values live centrally in
`proprietary/design-tokens/figma/figma.tokens.json` under `components/<name>` collections,
which regenerate per-theme CSS at `proprietary/design-tokens/dist/<theme>/index.css`.

Figma variable -> repo mapping used here:

| Figma variable                        | Repo DTCG ref             | CSS custom property                               |
| ------------------------------------- | ------------------------- | ------------------------------------------------- |
| `surface/primary/1` (bg tint)         | `{rhc.color.primary.50}`  | `--rhc-color-primary-50`                          |
| `surface/primary/default` (accent)    | `{rhc.color.primary.500}` | `--rhc-color-primary-500`                         |
| `border` / `text` (outline accent)    | `{rhc.color.primary.500}` | `--rhc-color-primary-500`                         |
| `text/on-primary-tint/body` (#0f172a) | dark foreground token     | `--rhc-color-foreground-default` (verify at impl) |
| `border-radius/0,5` (24px)            | `{rhc.size.half-lint}`    | matches `rhc-rounded-corner--size-sm`             |
| `responsive-spacing/1xl` (24px)       | `{rhc.space.2xl}`         | `--rhc-space-2xl`                                 |
| `responsive-spacing/2xl` (32px)       | `{rhc.space.3xl}`         | `--rhc-space-3xl`                                 |
| `copy-size/md` (20px)                 | `{rhc.text.font-size.md}` | `--rhc-text-font-size-md`                         |
| `heading-size/level-5` (24px)         | `{rhc.text.font-size.lg}` | `--rhc-text-font-size-lg`                         |

Match spacing by pixel value, not by the `Nxl` label (there is a one-step name offset).

## Part A: blockquote outline styling (opt-in, non-breaking)

Mirror the existing `hero` `borderRadiusCorner` pattern so a modifier-less blockquote is
unchanged (existing example pages keep rendering as today).

### React (`packages/components-react/blockquote-react/src/Blockquote.tsx`)

- Extend props with `borderRadiusCorner?: 'start-start' | 'start-end' | 'end-start' | 'end-end'`.
- When set, append `rhc-blockquote--border-radius-corner-<corner>` via `clsx`. Keep wrapping
  Utrecht; keep `attribution` pass-through.

### CSS (`packages/components-css/blockquote-css/src/{index,_mixin}.scss`)

- Add four corner-modifier mixins. Each modifier, using **logical properties**:
  - draws a 2px border (`--rhc-blockquote-border-width`, `--rhc-blockquote-border-color`) on
    the **two sides adjacent** to that corner:
    - `start-start` -> `border-block-start` + `border-inline-start`
    - `start-end` -> `border-block-start` + `border-inline-end`
    - `end-start` -> `border-block-end` + `border-inline-start`
    - `end-end` -> `border-block-end` + `border-inline-end`
  - rounds that corner with `border-<corner>-radius: var(--rhc-blockquote-border-radius)` (24px)
  - sets `row-gap` 12px and 32px padding (padding token already present)
  - tints quote + caption text with `--rhc-blockquote-color` (primary), scoped to the modifier.
- Default `.rhc-blockquote` keeps only its current margin rules.

### Twig (`packages/components-twig/src/Blockquote.twig`)

- Conditionally add `rhc-blockquote--border-radius-corner-<corner>` from a `borderRadiusCorner`
  variable. Web-component needs no change (passes props through).

### Tokens (`components/blockquote` in figma.tokens.json)

- Add `border-width` (2px), `border-color` -> `{rhc.color.primary.500}`, `border-radius` ->
  24px (`{rhc.size.half-lint}`), `row-gap` (12px), and a text `color` -> primary used only by
  the modifier. These do not change default appearance (no `border-style` without the modifier).

### Stories

- Add corner-variant stories (start-start / start-end / end-start) to the blockquote stories,
  matching the Figma frame.

## Part B: new `quote` component (all four surfaces)

Custom own-markup component in the `hero` / `data-summary` style.

### Packages to create

- `packages/components-css/quote-css/`: `package.json`
  (`@rijkshuisstijl-community/quote-css`, `build-css-package`, devDep `build-utils-css`),
  `src/index.scss`, `src/_mixin.scss`, `src/tokens.json` (`{}`), `README.md`, `CHANGELOG.md`.
- `packages/components-react/quote-react/`: `package.json` (dual `.` / `./no-side-effects`
  exports, `rhc:source` conditions, deps `quote-css` + `heading-react` + `paragraph-react`),
  `rollup.config.mjs` (delegates to `../library-react/rollup.config.mjs`),
  `tsconfig.json` / `tsconfig.dev.json` / `tsconfig.test.json`, `vite.config.ts`,
  `src/index.ts` (imports css, re-exports), `src/noSideEffects.ts`, `src/Quote.tsx`,
  `src/Quote.test.tsx`.

### React component (`Quote.tsx`)

```tsx
export interface QuoteProps extends HTMLAttributes<HTMLDivElement> {
  heading?: ReactNode;
  headingLevel?: HeadingLevel; // default 2
  headingAppearanceLevel?: HeadingLevel; // default = headingLevel
  ref?: Ref<HTMLDivElement>;
}
```

Renders `<div class="rhc-quote">` with an optional `<Heading class="rhc-quote__heading">`
and body children inside `.rhc-quote__content`. `displayName = 'Quote'`.

### CSS (`quote-css`)

- `.rhc-quote`: `--rhc-quote-background-color` -> `{rhc.color.primary.50}`; 4px inline-start
  accent (`--rhc-quote-border-inline-start-width`, `border-inline-start-style: solid`,
  `--rhc-quote-border-color` -> `{rhc.color.primary.500}`); 24px padding (`{rhc.space.2xl}`);
  `display: flex; flex-direction: column`; 8px `row-gap`; dark on-tint `color`.
- `.rhc-quote__heading`: bold `Heading/SM` (24px, weight strong, line-height 1.25).
- `.rhc-quote__content`: body paragraph styling.

### Twig + web-component

- `packages/components-twig/src/Quote.twig`.
- `packages/web-components/src/components/Quote.tsx` (`static tagName = 'rhc-quote'`).

### Tokens

- New `components/quote` collection in figma.tokens.json declaring `--rhc-quote-*`, mirroring
  `components/blockquote` / `components/card`. Regenerates into every theme's `index.css`.

## Part C: wiring, tests, verification

- Register:
  - `packages/components-css/library-css/index.scss` (`@use ... quote-css`) + `package.json` dep.
  - `packages/components-react/library-react/src/noSideEffects.ts` (`export * from
'@rijkshuisstijl-community/quote-react/no-side-effects'`) + `package.json` dep.
  - `packages/web-components/src/index.ts` (register `QuoteWebComponent`, add `rhc-quote` to
    `IntrinsicElements`).
  - Storybook: `quote.stories.tsx` (react canonical), `quote.md`, css `quote.stories.tsx`
    (`mergeCssMeta`), `quote-twig.stories.tsx`, `web-components/quote.stories.tsx`; add
    `quote-react` to `packages/storybook/package.json`.
- `pnpm install` so the new workspace packages link.
- Changesets: `.changeset/*.md` bumping `blockquote-css` (+ `-react` if the wrapper changes)
  and `quote-css` + `quote-react`, all `minor`.
- Tests: Vitest for `Quote` and the blockquote corner modifier; `tsc` typecheck the touched
  react packages; build the touched css + react packages; regenerate design tokens; visual
  check both components in Storybook.

## Non-goals

- No change to the default (modifier-less) blockquote appearance.
- No unrelated refactoring of existing components.
- No changes to other example pages.

## Open detail resolved

- The filled `quote` renders as a neutral `<div>` (not `<blockquote>`/`<figure>`) because it
  carries a heading + body, not a quotation. Revisit if semantics change.
