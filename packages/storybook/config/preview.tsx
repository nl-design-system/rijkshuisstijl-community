import '@rijkshuisstijl-community/design-tokens/dist/index.css';
import '@rijkshuisstijl-community/font/src/index.scss';
import '@nl-rvo/assets/fonts/index.css';

import { Preview } from '@storybook/react';

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
    controls: { expanded: false },
    options: {
      panelPosition: 'right',
    },
  },
};

export default preview;
