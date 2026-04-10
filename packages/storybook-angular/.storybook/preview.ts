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
    componentWrapperDecorator((story) => `<div class="utrecht-document">${story}</div>`),
    withThemeByClassName({
      themes: {
        'Kern - Lintblauw': 'rhc-theme',
        'Uitvoerend - Groen': 'uitvoerend-groen',
        'Uitvoerend - Hemelblauw': 'uitvoerend-hemelblauw',
        'Uitvoerend - Oranje': 'uitvoerend-oranje',
        'Uitvoerend - Paars': 'uitvoerend-paars',
        'Uitvoerend - Robijn Rood': 'uitvoerend-robijnrood',
      },
      defaultTheme: 'Kern - Lintblauw',
    }),
  ],

  tags: ['autodocs'],
};

export default preview;
