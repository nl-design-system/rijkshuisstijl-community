import{j as n,M as r,k as a}from"./iframe-CYk8V2d0.js";import{useMDXComponents as i}from"./index-DyRt8hUp.js";import"./preload-helper-Dp1pzeXC.js";const c=`# @rijkshuisstijl-community/web-components

## 3.0.0

### Major Changes

- b012c3e: Cleaned up the blockquote component and separated out the rounded corner from the component.
  The following tokens have been removed:
  - --utrecht-blockquote-border-block-end-width
  - --utrecht-blockquote-border-block-start-width
  - --utrecht-blockquote-border-end-end-radius
  - --utrecht-blockquote-border-end-start-radius
  - --utrecht-blockquote-border-inline-end-width
  - --utrecht-blockquote-border-start-end-radius
  - --utrecht-blockquote-border-start-start-radius
  - --utrecht-blockquote-caption-color
  - --utrecht-blockquote-caption-font-family
  - --utrecht-blockquote-caption-font-size
  - --utrecht-blockquote-caption-font-weight
  - --utrecht-blockquote-caption-line-height
  - --utrecht-blockquote-caption-padding-block-start
  - --utrecht-blockquote-content-font-family
  - --utrecht-blockquote-content-font-weight
  - --utrecht-blockquote-content-line-height

  Blue border variation:
  - --utrecht-blockquote-blue-corner-border-variation-border-block-end-width
  - --utrecht-blockquote-blue-corner-border-variation-border-color
  - --utrecht-blockquote-blue-corner-border-variation-border-end-end-radius
  - --utrecht-blockquote-blue-corner-border-variation-border-inline-end-width

  Pink background variation:
  - --utrecht-blockquote-pink-background-variation-background-color
  - --utrecht-blockquote-pink-background-variation-border-end-start-radius
  - --utrecht-blockquote-pink-background-variation-padding

  Pink corner border variation:
  - --utrecht-blockquote-pink-corner-border-variation-border-block-start-width
  - --utrecht-blockquote-pink-corner-border-variation-border-color
  - --utrecht-blockquote-pink-corner-border-variation-border-inline-start-width
  - --utrecht-blockquote-pink-corner-border-variation-border-start-start-radius
  - --utrecht-blockquote-pink-corner-border-variation-padding

  Pink left border variation:
  - --utrecht-blockquote-pink-left-border-variation-border-color
  - --utrecht-blockquote-pink-left-border-variation-border-inline-start-width
  - --utrecht-blockquote-pink-left-border-variation-padding-block-end
  - --utrecht-blockquote-pink-left-border-variation-padding-block-start
  - --utrecht-blockquote-pink-left-border-variation-padding-inline-end
  - --utrecht-blockquote-pink-left-border-variation-padding-inline-start

  The following tokens have been renamed:
  - --utrecht-blockquote-margin-block-end
  - --utrecht-blockquote-margin-block-start
  - --utrecht-blockquote-margin-inline-end
  - --utrecht-blockquote-margin-inline-start

  to:
  - --rhc-blockquote-margin-block-end
  - --rhc-blockquote-margin-block-start
  - --rhc-blockquote-margin-inline-end
  - --rhc-blockquote-margin-inline-start

## 2.0.0

### Major Changes

- 8e508f9: Removed the following tokens:
  Used but unnecessary:
  --utrecht-alert-heading-line-height
  --utrecht-alert-message-line-height

  Unused:
  --utrecht-alert-heading-font-family
  --utrecht-alert-heading-font-size
  --utrecht-alert-heading-font-weight

  Reworked the Alert react component to allow users to add content like heading and paragraph in the children instead of duplicating heading props in the alert directly.
  Added icon overwrite support in case you want a different icon on a specific alert type.

- 29bfdd5: Removed deprecated tokens for Accordion

## 1.2.1

### Patch Changes

- bf73b50: Fix hot reloading voor local development.
- 3d9999c: Update patch & minor dependencies

## 1.2.0

### Minor Changes

- 790ead0: Rename "Card" component to "Card as Link" component, to match definition of NL Design System "Card as Link" and in preparation of incoming "Card (not as Link)" component.

## 1.1.6

### Patch Changes

- 99dd213: Package Updates

## 1.1.5

### Patch Changes

- 9eeb7b7: Dependency updates (week 12)

## 1.1.4

### Patch Changes

- 90f6b1d: Dependency updates (week 11)

## 1.1.3

### Patch Changes

- 41ddbbb: Removed unused packages

## 1.1.2

### Patch Changes

- 1dc03fb: Wekelijkse package updates voor Rijkshuisstijl-componenten en design tokens (week 10)
- b9a4945: Added implementation documentation to package README.

## 1.1.1

### Patch Changes

- 723c927: Update the packages and libraries.

## 1.1.0

### Minor Changes

- 8562d81: JSX now auto supports custom elemenents

### Patch Changes

- 651160d: Removed deprecated global file

## 1.0.1

### Patch Changes

- ed83ac9: First full release
`;function o(e){return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"CHANGELOG"}),`
`,n.jsx(a,{children:c})]})}function b(e={}){const{wrapper:t}={...i(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(o,{...e})}):o()}export{b as default};
