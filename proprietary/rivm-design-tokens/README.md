<!-- @license CC0-1.0 -->

# Design Tokens for the RIVM Design System

**This project is very much WORK IN PROGRESS and most parts are released as _alpha_ version. Always define the exact version you want to use, and test for breaking changes before upgrading to a newer alpha release.**

```shell
npm install --save --save-exact @rijkshuisstijl-community/rivm-design-tokens
```

Design tokens are design decisions for our design system, in this case maintained in JSON files, and distributed in various other code languages for easy reuse.

The design tokens in this package serve as single source of truth for the look and feel for our websites, apps and designs of new products and services.

## List of all design tokens

To find out what design tokens are available, browser through the `.tokens.json` files in the `src/` directory.

We currently don't have any additional documentation for every specific design token.

### Brand design tokens

Brand design tokens describe design choices regarding color and typography. We provide a limited choice of fonts and a limited color palette, please avoid choosing other fonts and colors.

### Common design tokens

Common design tokens are relevant to a wide range of components and situations. They help provide a consistent user experience. We provide design tokens for feedback colors (error, success, et cetera), the focus state, spacing, and so on. Components should reuse design tokens from the common layer where possible, to achieve a consistent look and feel.

### Component design tokens

Design decisions at a component level, to make components look a very specific way. They are applied by the component library of the design system.

## Files in this package

### `dist/theme.css`

Opt-in way to apply all the CSS variables to HTML elements with the `rivm-theme` class name:

```html
<!doctype html>
<html class="rivm-theme">
  <!-- var(--rivm-color-zwart) works here...! -->
</html>
```

This method is the preferred way to style the page.

### `dist/root.css`

Automatically applies all the CSS variables to HTML elements to the `:root` element:

```html
<!doctype html>
<html>
  <!-- var(--rivm-color-zwart) works here...! -->
</html>
```

This method should only be used in case there is no control over the HTML template and the `rivm-theme` class name cannot be included.

### `dist/index.mjs`

Use files from this package in JavaScript projects, for example in React Native or Storybook:

```js
import { rivmButtonFontSize } from "@rijkshuisstijl-community/rivm-design-tokens/dist/index.mjs";
```

### `dist/_variables.scss`

```scss
@import "~@rijkshuisstijl-community/rivm-design-tokens/dist/variables";

button {
  font-size: $utrecht-button-font-size;
}
```

SCSS variables are not the preferred way to style components, it is better to use CSS variables, because they can be configured differently in a specific context, whereas SCSS variables are given a fixed value at build-time.

However, SCSS variables could be very useful to re-use values where CSS variables cannot be used, like inside CSS media queries:

```scss
@import "~@rijkshuisstijl-community/rivm-design-tokens/dist/variables";

@media (min-width: $rivm-viewport-scale-xl-width) {
  --rivm-heading-1-font-size: 3rem;
}
```

SCSS variables are also useful in the process of incrementally migrating away from your a codebase that currently uses SCSS, such as a website built with [Bootstrap 4 components](https://getbootstrap.com/docs/4.6/getting-started/theming/), by already using the design tokens as single source of truth. For example:

```scss
@import "../node_modules/bootstrap/scss/bootstrap";

$body-bg: $rivm-document-background-color;
$body-color: $rivm-document-color;
```

## CSS variables

To use the design tokens in your site via CSS variables, first include the design token definitions in the `<head>` section of your HTML page:

```html
<link rel="stylesheet" href="https://unpkg.com/@rijkshuisstijl-community/rivm-design-tokens/dist/theme.css" />
```

Then add the `rivm-theme` class name to your page:

```html
<html class="rivm-theme">
  ...
</html>
```

Now the CSS variables will be available and you can use of all the design tokens:

```css
.my-button {
  background-color: var(--rivm-color-red-50);
  color: var(--rivm-color-white);
}
```

## SCSS variables

## Contributing

The design tokens are stored in JSON files so we can use the design token translation tool [Style Dictionary](https://amzn.github.io/style-dictionary/) to make them available in many code languages. We use `.tokens.json` as file extension for our design token definitions, to tell them apart from regular and unrelated `.json` files.

## License

Copyright (c) 2023 RIVM. All rights reserved.

The open source license does NOT apply to files in this directory.

**Applying design elements from this project is strictly prohibited for organisations that are not part of the central Government of The Netherlands.**

This project is part of a community iniative to use [NL Design System](https://designsystem.gebruikercentraal.nl) components for projects that need to adhere to Rijkshuisstijl. Organisations from the central Government of the Netherlands (for example: [RIVM](https://rivm.nl/), [Belastingdienst](https://www.belastingdienst.nl/), [DUO](https://www.duo.nl), [Logius](http://logius.nl), [SVB](https://www.svb.nl/)), as well as those who are contracted by them to develop websites and apps, are able to collaborate via this project.
