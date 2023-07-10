import '@rijkshuisstijl-community/design-tokens/dist/index.css';
import '@rijkshuisstijl-community/font/src/index.scss';

import { defineCustomElements } from '@rijkshuisstijl-community/web-components-stencil/loader/index.js';
import { Preview } from '@storybook/react';
import { themes, ThemeProvider } from '@storybook/theming';

defineCustomElements();

const theme = themes.normal;
// Configure @etchteam/storybook-addon-status
const addonStatus = {
  status: {
    statuses: {
      PRODUCTION: {
        background: '#088008',
        color: '#ffffff',
        description:
          'Used in production in a variety of situations, well tested, stable APIs, mostly patches and minor releases.',
      },
      BETA: {
        background: '#3065ee',
        color: '#ffffff',
        description:
          'Used in production in a specific situation, evolving APIs based on feedback, breaking changes are still likely.',
      },
      ALPHA: {
        background: '#e0bc2e',
        color: '#000000',
        description:
          'Used in prototypes and in projects that are still in development, breaking changes occur frequently and are not communicated.',
      },
      'WORK IN PROGRESS': {
        background: '#cc0000',
        color: '#ffffff',
        description:
          'Do not use in production. Does not follow semantic versioning and any published packages are for internal use only.',
      },
    },
  },
};

const addonThemes = {
  clearable: true,
  themes: {
    default: 'Gemeente Utrecht',
    target: 'root',
    list: [
      { name: 'No style', class: 'no-style', color: '#000000' },
      { name: 'No design tokens', class: 'no-theme', color: '#CCCCCC' },
      { name: 'Gemeente Utrecht', class: 'utrecht-theme', color: '#CC0000' },
      { name: 'Gemeente Utrecht (dark mode)', class: 'utrecht-theme--color-scheme-dark', color: '#000000' },
    ],
  },
};

const previewTabs = {
  'storybookjs/notes/panel': { title: 'Documentation' },
  'storybook/docs/panel': { title: 'API' },
  canvas: { title: 'Design Tokens' },
};

const preview: Preview = {
  decorators: [(Story: any) => <div className="rhc-theme">{Story()}</div>],
  parameters: {
    previewTabs: {
      ...previewTabs,
    },
    ...addonStatus,
export const preview: Preview = {
  decorators: [
    // Enable `utrecht-document` component as backdrop
    // Enable `utrecht-theme` to configure the design tokens
    // Ensure old html templates will be rendered as react component
    (Story, storyContext) => {
      // Hack to make current args for a story available in the transformSource of the docs addon
      storyContext.parameters.args = storyContext.args;

      return (
        <ThemeProvider theme={theme}>
          <div>${Story()}</div>
        </ThemeProvider>
      );
    },
  ],
  parameters: {
    // Make the "Docs" tab the default, instead of the "Canvas" tab
    viewMode: 'docs',

    previewTabs: {
      ...previewTabs,
    },

    clearable: true,
    themes: {
      default: 'Gemeente Utrecht',
      target: 'root',
      list: [
        { name: 'No style', class: 'no-style', color: '#000000' },
        { name: 'No design tokens', class: 'no-theme', color: '#CCCCCC' },
        { name: 'Gemeente Utrecht', class: 'utrecht-theme', color: '#CC0000' },
        { name: 'Gemeente Utrecht (dark mode)', class: 'utrecht-theme--color-scheme-dark', color: '#000000' },
      ],
    },
    ...addonStatus,
    ...addonThemes,
    controls: { expanded: false },
    options: {
      panelPosition: 'right',
    },
  },
};

export default preview;
