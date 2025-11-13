import { componentWrapperDecorator, type Preview } from '@storybook/angular';
import { withThemeByClassName } from '@storybook/addon-themes';
import OverviewPage from './overview.mdx';
import { formatHtml } from '@rijkshuisstijl-community/internal-tooling/formatHtml';

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
        order: ['Angular Components', ['README', 'CHANGELOG'], 'Angular Templates'],
      },
    },
  },

  decorators: [
    componentWrapperDecorator((story) => `<div class="utrecht-document">${story}</div>`),
    withThemeByClassName({
      themes: {
        'Kern - Lintblauw': 'rhc-theme',
        'Uitvoerend - paars': 'uitvoerend-paars',
        'Uitvoerend - hemelblauw': 'uitvoerend-hemelblauw',
        'Uitvoerend - groen': 'uitvoerend-groen',
        'Uitvoerend - oranje': 'uitvoerend-oranje',
        'Uitvoerend - robijn rood': 'uitvoerend-robijnrood',
        KOOP: 'koop',
      },
      defaultTheme: 'Kern - Lintblauw',
    }),
  ],

  tags: ['autodocs'],
};

export default preview;
