import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as o}from"./index-CgIrIXX2.js";import"./index-BlkgSDVo.js";import{M as r,e as t,T as a}from"./index-DJDJKaW2.js";import"./index-BJzegUt9.js";import"./_commonjsHelpers-D6-XlEtG.js";import"./preview-BQP0yblK.js";import"./iframe-BOLMTp0Q.js";import"./DocsRenderer-CFRXHY34-DqvYOu-O.js";import"./react-18-WSCnJXIz.js";import"./index-jD2FfvU1.js";import"./index-Bw_1hv9w.js";import"./index-CXQShRbs.js";const l=`# @rijkshuisstijl-community/rivm-design-tokens

## 2.0.0

### Major Changes

- 158d711: Added 'Uitvoerend - Paars' Theme
  Deprecated @rijkshuisstijl-community/mijnoverheid-design-tokens
  Deprecated @rijkshuisstijl-community/logius-design-tokens
  Deprecated @rijkshuisstijl-community/digid-design-tokens
  Deprecated @rijkshuisstijl-community/rivm-design-tokens
  These themes are now found in: @rijkshuisstijl-community/design-tokens

## 1.0.0

### Patch Changes

- 1dc03fb: Wekelijkse package updates voor Rijkshuisstijl-componenten en design tokens (week 10)
`,d=`<!-- @license CC0-1.0 -->

# Design Tokens for the RIVM Design System

**Applying design elements from this project is strictly prohibited for organisations that are not part of the central Government of The Netherlands.**

This project is part of a community iniative to use [NL Design System](https://nldesignsystem.nl) components for projects that need to adhere to Rijkshuisstijl. Organisations from the central Government of the Netherlands (for example: [Belastingdienst](https://www.belastingdienst.nl/), [DUO](https://www.duo.nl), [Logius](http://logius.nl), [SVB](https://www.svb.nl/)), as well as those who are contracted by them to develop websites and apps, are able to collaborate via this project.

## License

This project contains both proprietary and free and open-source software licensed under the [European Union Public License (EUPL) v1.2](LICENSE.md).

### Logo and style guide

Copyright applies to the Rijkshuisstijl logo and Rijkhuisstijl brand identity. Use of logo and brand identity is strictly prohibited for any other use than developing websites and apps for the central Government of The Netherlands.

### Fonts

[Fonts used for the Rijkshuisstijl](https://www.rijkshuisstijl.nl/basiselementen/basiselementen-online/webfonts) are [designed specifcally for the central Government of The Netherlands](https://www.rijkshuisstijl.nl/basiselementen/documenten/verzamelingen-afbeeldingen/2014/06/01/achtergrondartikel-rijkshuisstijl-webfonts) and are not open source. Before applying the web fonts to your project, ensure you have permission from the Rijkshuisstijl. Until you have permission, use fallback fonts instead, such as the system fonts Arial, Verdana or Times New Roman.

## Permission

When you are developing a website for the central Government of the Netherlands, you request permission by [contacting the Ministry of General Affairs](https://www.rijkshuisstijl.nl/contact).

## Getting started

**This project is very much WORK IN PROGRESS and most parts are released as _alpha_ version. Always define the exact version you want to use, and test for breaking changes before upgrading to a newer alpha release.**

\`\`\`shell
npm install --save --save-exact @rijkshuisstijl-community/rivm-design-tokens
\`\`\`

Design tokens are design decisions for our design system, in this case maintained in JSON files, and distributed in various other code languages for easy reuse.

The design tokens in this package serve as single source of truth for the look and feel for our websites, apps and designs of new products and services.

## List of all design tokens

To find out what design tokens are available, browser through the \`.tokens.json\` files in the \`src/\` directory.

We currently don't have any additional documentation for every specific design token.

### Brand design tokens

Brand design tokens describe design choices regarding color and typography. We provide a limited choice of fonts and a limited color palette, please avoid choosing other fonts and colors.

### Common design tokens

Common design tokens are relevant to a wide range of components and situations. They help provide a consistent user experience. We provide design tokens for feedback colors (error, success, et cetera), the focus state, spacing, and so on. Components should reuse design tokens from the common layer where possible, to achieve a consistent look and feel.

### Component design tokens

Design decisions at a component level, to make components look a very specific way. They are applied by the component library of the design system.

## Files in this package

### \`dist/theme.css\`

Opt-in way to apply all the CSS variables to HTML elements with the \`rivm-theme\` class name:

\`\`\`html
<!doctype html>
<html class="rivm-theme">
  <!-- var(--rivm-color-zwart) works here...! -->
</html>
\`\`\`

This method is the preferred way to style the page.

### \`dist/root.css\`

Automatically applies all the CSS variables to HTML elements to the \`:root\` element:

\`\`\`html
<!doctype html>
<html>
  <!-- var(--rivm-color-zwart) works here...! -->
</html>
\`\`\`

This method should only be used in case there is no control over the HTML template and the \`rivm-theme\` class name cannot be included.

### \`dist/index.mjs\`

Use files from this package in JavaScript projects, for example in React Native or Storybook:

\`\`\`js
import { rivmButtonFontSize } from '@rijkshuisstijl-community/rivm-design-tokens/dist/index.mjs';
\`\`\`

### \`dist/_variables.scss\`

\`\`\`scss
@use '~@rijkshuisstijl-community/rivm-design-tokens/dist/variables';

button {
  font-size: $utrecht-button-font-size;
}
\`\`\`

SCSS variables are not the preferred way to style components, it is better to use CSS variables, because they can be configured differently in a specific context, whereas SCSS variables are given a fixed value at build-time.

However, SCSS variables could be very useful to re-use values where CSS variables cannot be used, like inside CSS media queries:

\`\`\`scss
@use '~@rijkshuisstijl-community/rivm-design-tokens/dist/variables';

@media (min-width: $rivm-viewport-scale-xl-width) {
  --rivm-heading-1-font-size: 3rem;
}
\`\`\`

SCSS variables are also useful in the process of incrementally migrating away from your a codebase that currently uses SCSS, such as a website built with [Bootstrap 4 components](https://getbootstrap.com/docs/4.6/getting-started/theming/), by already using the design tokens as single source of truth. For example:

\`\`\`scss
@use '../node_modules/bootstrap/scss/bootstrap';

$body-bg: $rivm-document-background-color;
$body-color: $rivm-document-color;
\`\`\`

## CSS variables

To use the design tokens in your site via CSS variables, first include the design token definitions in the \`<head>\` section of your HTML page:

\`\`\`html
<link rel="stylesheet" href="https://unpkg.com/@rijkshuisstijl-community/rivm-design-tokens/dist/theme.css" />
\`\`\`

Then add the \`rivm-theme\` class name to your page:

\`\`\`html
<html class="rivm-theme">
  ...
</html>
\`\`\`

Now the CSS variables will be available and you can use of all the design tokens:

\`\`\`css
.my-button {
  background-color: var(--rivm-color-red-50);
  color: var(--rivm-color-white);
}
\`\`\`

## SCSS variables

## Contributing

The design tokens are stored in JSON files so we can use the design token translation tool [Style Dictionary](https://amzn.github.io/style-dictionary/) to make them available in many code languages. We use \`.tokens.json\` as file extension for our design token definitions, to tell them apart from regular and unrelated \`.json\` files.
`;function i(n){return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Rijkshuisstijl Community/Design Tokens/RIVM Thema"}),`
`,e.jsx(t,{children:d}),`
`,e.jsx(a,{children:"Changelog"}),`
`,e.jsx(t,{children:l})]})}function S(n={}){const{wrapper:s}={...o(),...n.components};return s?e.jsx(s,{...n,children:e.jsx(i,{...n})}):i()}export{S as default};
