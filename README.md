<!-- @license CC0-1.0 -->

# Design Tokens for Rijkhuisstijl

_This project is **not** endorsed by the Dutch Ministry of General Affairs._

**Applying design elements from this project is strictly prohibited for organisations that are not part of the central Government of The Netherlands.**

This project is part of a community iniative to use [NL Design System](https://nldesignsystem.nl) components for projects that need to adhere to Rijkshuisstijl. Organisations from the central Government of the Netherlands (for example: [Belastingdienst](https://www.belastingdienst.nl/), [DUO](https://www.duo.nl), [Logius](http://logius.nl), [SVB](https://www.svb.nl/)), as well as those who are contracted by them to develop websites and apps, are able to collaborate via this project.

## License

This project contains both proprietary and free and open-source software licensed under the [European Union Public License (EUPL) v1.2](LICENSE.md).

For information about proprietary assets in this repository, please carefully read the [NOTICE file](NOTICE.md).

### Logo and style guide

Copyright applies to the Rijkshuisstijl logo and Rijkhuisstijl brand identity. Use of logo and brand identity is strictly prohibited for any other use than developing websites and apps for the central Government of The Netherlands.

### Fonts

[Fonts used for the Rijkshuisstijl](https://www.rijkshuisstijl.nl/basiselementen/basiselementen-online/webfonts) are [designed specifcally for the central Government of The Netherlands](https://www.rijkshuisstijl.nl/basiselementen/documenten/verzamelingen-afbeeldingen/2014/06/01/achtergrondartikel-rijkshuisstijl-webfonts) and are not open source. Before applying the web fonts to your project, ensure you have permission from the Rijkshuisstijl. Until you have permission, use fallback fonts instead, such as the system fonts Arial, Verdana or Times New Roman.

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
| `npm run lint`       | Run the linting scripts to ensure your code meets the project standards     |
| `npm run lint-fix`   | Run the linting scripts and automatically fix all possible errors           |

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
