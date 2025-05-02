import { componentWrapperDecorator, type Preview } from '@storybook/angular';
import { Controls, Description, Primary } from '@storybook/blocks';

const preview: Preview = {
  parameters: {
    docs: {
      page: () => {
        return (
          <>
            <Description />
            <Primary />
            <Controls />
          </>
        );
      },
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
