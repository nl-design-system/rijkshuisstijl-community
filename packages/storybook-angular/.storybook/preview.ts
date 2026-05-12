import { formatHtml } from '@rijkshuisstijl-community/storybook-tooling/formatHtml';
import { withThemeByClassName } from '@storybook/addon-themes';
import { componentWrapperDecorator, type Preview } from '@storybook/angular';
import OverviewPage from './overview.mdx';

const preview: Preview = {
  parameters: {
    html: {
      transform: formatHtml,
    },
    docs: {
      page: OverviewPage,
      source: {
        excludeDecorators: true,
      },
      codePanel: true,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        method: 'alphabetical',
        order: ['Angular Components', ['README', 'CHANGELOG'], 'Angular Templates'],
      },
    },
  },

  decorators: [
    componentWrapperDecorator((story) => `<div class="utrecht-root">${story}</div>`),
    withThemeByClassName({
      themes: {
        Lintblauw: 'lintblauw lintblauw--fluid',
        Groen: 'groen groen--fluid',
        Hemelblauw: 'hemelblauw hemelblauw--fluid',
        Oranje: 'oranje oranje--fluid',
        Paars: 'paars paars--fluid',
        Robijnrood: 'robijnrood robijnrood--fluid',

        'Lintblauw (information dense)': 'lintblauw-information-dense lintblauw--fluid',
        'Groen (information dense)': 'groen-information-dense groen--fluid',
        'Hemelblauw (information dense)': 'hemelblauw-information-dense hemelblauw--fluid',
        'Oranje (information dense)': 'oranje-information-dense oranje--fluid',
        'Paars (information dense)': 'paars-information-dense paars--fluid',
        'Robijnrood (information dense)': 'robijnrood-information-dense robijnrood--fluid',
      },
      defaultTheme: 'Lintblauw',
    }),
  ],

  tags: ['autodocs'],
};

export default preview;
