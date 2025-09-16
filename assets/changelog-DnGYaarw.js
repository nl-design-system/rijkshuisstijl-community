import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as o}from"./index-CgIrIXX2.js";import"./index-Cv2uG9Ve.js";import{M as i,e as r}from"./index-C-7cc-Tw.js";import"./index-BJzegUt9.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./preview-CYfO-j4u.js";import"./iframe-Cn0TB8E1.js";import"./DocsRenderer-CFRXHY34-dVhzaXrw.js";import"./react-18-WSCnJXIz.js";import"./index-jD2FfvU1.js";import"./index-Bw_1hv9w.js";import"./index-CXQShRbs.js";const d=`# @rijkshuisstijl-community/web-components

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
`;function a(e){return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"CHANGELOG"}),`
`,n.jsx(r,{children:d})]})}function j(e={}){const{wrapper:t}={...o(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(a,{...e})}):a()}export{j as default};
