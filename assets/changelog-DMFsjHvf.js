import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as a}from"./index-DKQj2TAN.js";import"./index-BtHeqgGI.js";import{c as r,e as i}from"./index-Dv0tfdgE.js";import"./index-F0AouRE7.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./preview-CwuMY04B.js";import"./iframe-DWNQ2mGv.js";import"./DocsRenderer-CFRXHY34-pb6Id2lG.js";import"./react-18-CgWIHopg.js";import"./index-BOv6M0Sq.js";import"./index-7AEHQTxF.js";import"./index-CXQShRbs.js";const d=`# @rijkshuisstijl-community/components-react

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
`;function o(e){return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"Rijkshuisstijl/CHANGELOG"}),`
`,n.jsx(i,{children:d})]})}function y(e={}){const{wrapper:t}={...a(),...e.components};return t?n.jsx(t,{...e,children:n.jsx(o,{...e})}):o()}export{y as default};
