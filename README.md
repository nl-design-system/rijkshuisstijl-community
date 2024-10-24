<!-- @license CC0-1.0 -->

# Rijkshuisstijl Community Components

_This project is **not** endorsed by the Dutch Ministry of General Affairs._

**Applying design elements from this project is strictly prohibited for organisations that are not part of the central Government of The Netherlands.**

This project is part of a community initiative to use [NL Design System](https://nldesignsystem.nl) components for projects that need to adhere to Rijkshuisstijl. Organisations from the central Government of the Netherlands (for example: [Belastingdienst](https://www.belastingdienst.nl/), [DUO](https://www.duo.nl), [Logius](http://logius.nl), [SVB](https://www.svb.nl/)), as well as those who are contracted by them to develop websites and apps, are able to collaborate via this project.

## Before you start

### Node

Ensure that you have Node.js version **_18_** or higher installed.

To check your current Node version, open your terminal and run:

```bash
node --version
```

If your version is below 18, you can manage and switch between Node versions using **_Node Version Manager (nvm)_**. To install and set the correct Node version, follow these steps:

- If you don't have nvm installed, [install `nvm`](https://github.com/nvm-sh/nvm#install--update-script).

- Once `nvm` is installed, use it to install Node.js 18 (or higher) by running:

```bash
nvm install 18
```

- Set Node.js 18 as the active version for this project:

```bash
nvm use 18
```

### SCSS/SASS

The components are using scss, make sure your project is able to process scss files.

## Getting Started with React Components

To use the React components from the Rijkshuisstijl community, you'll need to install a package available in the [npm Registry](https://www.npmjs.com/package/@rijkshuisstijl-community/components-react).

```npm
npm install --save-dev @rijkshuisstijl-community/components-react
```

This will install the React components. To use these components, you can import them into your app.

```tsx
'use client'; // needed in some projects

import { Button } from '@rijkshuisstijl-community/components-react';

<Button>Click Here!</Button>;
```

Some components use the [useRef](https://react.dev/reference/react/useRef) hook, which only works in Client Components. To resolve this, add the `"use client"` directive at the top of the file.

### Applying the theme

The React components do not include styling on their own. To add the _Rijkshuisstijl_ theme to your project, you will need to install the [design-tokens npm package](https://www.npmjs.com/package/@rijkshuisstijl-community/design-tokens)

```npm
npm install --save-dev @rijkshuisstijl-community/design-tokens
```

This package includes the CSS variables created by the design system. To use them, import the `index.css` file located in the `dist` folder of the package, and wrap the part of the application where you want to apply the theme with the Rijkshuisstijl theme: `rhc-theme`. This can be a sub-part of your application or the root level, allowing your entire application to use the theme.

```tsx
import '@rijkshuisstijl-community/design-tokens/dist/index.css';

function App() {
  return (
    <div className="rhc-theme">
      <Button>Click Here!</Button>
    </div>
  );
}
```

## License

This project contains both proprietary and free and open-source software licensed under the [European Union Public License (EUPL) v1.2](LICENSE.md).

For information about proprietary assets in this repository, please carefully read the [NOTICE file](NOTICE.md).

### Logo and style guide

Copyright applies to the Rijkshuisstijl logo and Rijkshuisstijl brand identity. Use of logo and brand identity is strictly prohibited for any other use than developing websites and apps for the central Government of The Netherlands.

### Fonts

[Fonts used for the Rijkshuisstijl](https://www.rijkshuisstijl.nl/basiselementen/basiselementen-online/webfonts) are [designed specifcally for the central Government of The Netherlands](https://www.rijkshuisstijl.nl/basiselementen/documenten/verzamelingen-afbeeldingen/2014/06/01/achtergrondartikel-rijkshuisstijl-webfonts) and are not open source. Before applying the web fonts to your project, ensure you have permission from the Rijkshuisstijl. Until you have permission, use fallback fonts instead, such as the system fonts Arial, Verdana or Times New Roman.

### Open source variants

During development, you can use placeholder variants for assets that require a license, such as logos, fonts, and icons.

**_Fonts_**

```npm
npm install -D @rijkshuisstijl-community/font
```

```tsx
import '@rijkshuisstijl-community/font/src/index.mjs';
```

**_Logo_**

You can use the icon with id `nederland-map`

**_Icons_**

TODO

## Permission

When you are developing a website for the central Government of the Netherlands, you request permission by [contacting the Ministry of General Affairs](https://www.rijkshuisstijl.nl/contact).

## Code of Conduct

We pledge to act and interact in ways that contribute to an open, welcoming, diverse, inclusive, and healthy community. Read [our Code of Conduct](CODE_OF_CONDUCT.md) if you haven't already.

## Development

This project is based on the NL Design System template repository and can be used by the Rijksoverheid organisations that want to use NL Design System and collaborate on extra components a shared theme and storybook templates.

### NodeJS and pnpm

We use NodeJS for installing and managing our javascript packages. Check in your terminal with `node -v` if you have NodeJS installed. Otherwise install node [https://nodejs.org/en](https://nodejs.org/en) before you start.

NodeJS comes with `npm`. We will not use `npm` to install our packages, but `pnpm` instead. This is so we can ensure super stable package resolution. To get started make sure you have `pnpm` installed by checking with `pnpm -v`. If you do not see a version use `npm install -g pnpm` to install `pnpm` globally on your machine.

### Handy Commands

All commands are run from the root of the project, from a terminal:

| Command              | Action                                                                      |
| :------------------- | :-------------------------------------------------------------------------- |
| `pnpm install`       | Installs dependencies                                                       |
| `pnpm run storybook` | Starts local dev server at `localhost:6006` and a watcher for design tokens |
| `pnpm run build`     | Build your production site to `./dist/`                                     |
| `pnpm run lint`      | Run the linting scripts to ensure your code meets the project standards     |
| `pnpm run lint-fix`  | Run the linting scripts and automatically fix all possible errors           |

Best to be run from `packages/components-react` because then you get a more detailed view of how many test suites and tests are ran and which have passed:

| Command         | Action              |
| :-------------- | :------------------ |
| `pnpm run test` | Run all test suites |

### Packages

| Package                  | Purpose                                                                                                                                              |
| :----------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------- |
| `components-css`         | When no component exists in the NL Design System community, candidate of hall-of-fame a component can be added here for use by the community         |
| `components-react`       | Optionally when a CSS component exists but a React wrapper is missing, the React wrapper can be added here for use by the community                  |
| `design-tokens`          | The rijkshuisstijl themes are managed here for use in combination with themeless NL Design System. **Note** these should move to proprietary instead |
| `storybook`              | Extra components and page templates can be added as a story to document the existance and use of components and visual regression testing            |
| `web-components-stencil` | When a CSS component exists but a Web component wrapper is missing, the web-component wrapper can be added for use by the community                  |
| `web-components-react`   | When a web-component exists a React web-component wrapper can be added for convenience                                                               |

### Proprietary

Branding, fonts and other assets should often not be part of the EUPL license. By adding those in the `proprietary` packages they are legally excluded based on the LICENSE and NOTICE files. Each rijksoverheid organisation working with a NL Design System thema can add their theme as a package here.

## Links

- **_Found a bug or want to explore the source code?_** Visit our [GitHub repository](https://github.com/nl-design-system/rijkshuisstijl-community).

- **_Curious about what we’re working on?_** Check out our current progress on the [Sprint Board](https://github.com/orgs/nl-design-system/projects/59).

- **_Stay connected with the community!_** Join the [Code for NL Slack](https://praatmee.codefor.nl/), and participate in the `#nl-design-system` channel to see what others are working on and collaborate with the community.
