import { componentWrapperDecorator, type Preview } from '@storybook/angular';

const preview: Preview = {
  parameters: {
    docs: {
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
