import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as a}from"./index-BysLjLkY.js";import"./index-vERh8ynN.js";import{M as i,e as d}from"./index-DwSsfx05.js";import"./index-DeTAkU8q.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./preview-Bb88tX-w.js";import"./iframe-DBq8ZR9u.js";import"./DocsRenderer-CFRXHY34-DQiF8F1j.js";import"./react-18-CnEToxBx.js";import"./index-CTPIcns_.js";import"./index-B-2rlRvl.js";import"./index-CXQShRbs.js";const r=`# @rijkshuisstijl-community/components-react

## 3.0.0

### Major Changes

- 923d857: Alleen NL link gebruiken

  - Zorgen dat RHC link alleen NL link gebruikt
    - NL link's \`disabled\` prop niet toestaan (altijd op \`false\` zetten) (angular versie ondersteunde dit toch al niet)
  - Documentatie aan Angular readme.md toegevoegd
  - Prop \`inline\` toegevoegd, die de standaard \`display: inline-flex\` terugzet naar \`display: inline\`
    - Storybookvoorbeeld toegevoegd
  - Ongebruike classname \`.nl-link--visted\` gefixt naar \`.nl-link--visited\`

### Minor Changes

- 08d4354: add expandable checkbox group

### Patch Changes

- fa98d0f: updated nav bar component to filter through any extra props provided and updated example website

## 2.1.0

### Minor Changes

- a1502a5: Update Utrecht dependencies

### Patch Changes

- 9e83410: Added "how to switch theme" instructions in the README.

## 2.0.0

### Major Changes

- 67ea521: - Expliciet defaultIconSet en flagIconSet exporteren in index.
  - Expliciet README, CHANGELOG en de ESM, CJS en TypeScript types definieren in \`exports\` van de package.json voor compatibiliteit met bundlers en tooling.

### Minor Changes

- f8f4bab: - Add DataDadgeButton
- 307a802: Added \`DataSummary\` component
- 790ead0: Rename "Card" component to "Card as Link" component, to match definition of NL Design System "Card as Link" and in preparation of incoming "Card (not as Link)" component.

### Patch Changes

- 3cc887a: Refactor Alert

## 1.2.0

### Minor Changes

- 0697b02: Allow empty alt attribute on Image component if presentation boolean is true
- 893b3e3: - Add optional \`target\` property to accompany \`href\` property in Card component.
  - Set \`href\` value of "Scroll back to top" in Footer component to \`#main\`.
  - When scrolling back to top in Footer component, set focus to link's \`href\` value, instead of keeping focus in the Footer.
  - Add optional \`target\` property to accompany \`href\` property in NavBar component.
- 8395a93: Update dependencies.

### Patch Changes

- 99dd213: Package Updates

## 1.1.0

### Minor Changes

- 292ceb3: Adjusted DOM order of \`card\` component to improve screen reader accessibility per WCAG guidelines, placing headings before images. Visual layout preserved using flex order.

### Patch Changes

- bb22959: Refined link list component, added docs and unit tests
- d33a0cf: Exported the Fieldset component from RHC, added Storybook stories, and documented best practices.
- d9043b4: Refined link-list-card component, added docs and unit tests
- bb41c62: Refined image component: image will not render if alt attribute is not added. Added docs to the component
- cc11bef: Exported the Figure component from RHC, added border-radius functionality, and documented best practices.
- 259bc52: Fixed ref issues in the file input component since updating to React 19. Re-added useRef.
- b505c9b: Update README to fix broken relative links to files in the repository.
- 9eeb7b7: Dependency updates (week 12)
- 9a2b88f: Updated Checkbox Group docs and added an example to the Collage template.

## 1.0.4

### Patch Changes

- 90f6b1d: Dependency updates (week 11)
- e4b0c15: Fixed image no longer being optional in default card variant and fixed wrong heading and metadata colors
- 76554a8: Added FormField Unit Tests
- 145d80d: The Link React component has been imported from the Candidate repository, upgrading its status from 'community' to 'candidate'.

## 1.0.3

### Patch Changes

- 63ef863: Refactored DataList to Form Summary.
  De reden is dat NL Design System de component Form Summary noemt ipv DataList en hierbij verwijst naar Utrecht's data-list. RHC blijft dit component gewoon importeren vanuit Utrecht maar vanaf nu export onder de naam Form Summary.
- 41ddbbb: Removed unused packages
- 4c2ca4b: Improved checkbox docs by importing the related docs from Utrecht and translating them to Dutch

## 1.0.2

### Patch Changes

- 1dc03fb: Wekelijkse package updates voor Rijkshuisstijl-componenten en design tokens (week 10)
- b9a4945: Moved implementation documentation from repository README to package README.

## 1.0.1

### Patch Changes

- 723c927: Update the packages and libraries.
- 66667f8: Link in card-footer should be wrapped in div instead of being preceded by empty div

## 1.0.0

### Patch Changes

- ed83ac9: First full release
- 0715283: Bug fix where the card footer render even if no \`linkLable\` or \`button\` props provided and fix \`metaData\` props in
  storybook to match the card component props \`metadata\`
`;function o(n){return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Rijkshuisstijl/CHANGELOG"}),`
`,e.jsx(d,{children:r})]})}function x(n={}){const{wrapper:t}={...a(),...n.components};return t?e.jsx(t,{...n,children:e.jsx(o,{...n})}):o()}export{x as default};
