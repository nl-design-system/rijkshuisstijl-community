import { addons } from 'storybook/manager-api';
import { defaultConfig } from 'storybook-addon-tag-badges';

addons.setConfig({
  tagBadges: [
    {
      tags: 'js',
      badge: {
        text: 'JS',
        style: {
          // JS logo colors
          backgroundColor: '#F0DB4F',
          color: '#323330',
        },
        tooltip: 'Dit component vereist JavaScript voor zijn interactieve functionaliteit',
      },
      display: {
        sidebar: ['component'],
        toolbar: true,
      },
    },
    ...defaultConfig,
  ],
});
