import { componentWrapperDecorator, type Preview } from '@storybook/angular';
import OverviewPage from './overview.mdx';

const preview: Preview = {
  parameters: {
    docs: {
      page: OverviewPage,
      source: {
        excludeDecorators: true,
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [componentWrapperDecorator((story) => `<div class="rhc-theme">${story}</div>`)],
};

export default preview;
