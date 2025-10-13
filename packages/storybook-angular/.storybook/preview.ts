import { componentWrapperDecorator, type Preview } from '@storybook/angular';
import { withThemeByClassName } from '@storybook/addon-themes';
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
        RijkshuisstijlCommunity: 'rhc-theme',
        'Uitvoerend - paars': 'uitvoerend-paars',
        'Uitvoerend - hemelblauw': 'uitvoerend-hemelblauw',
        'Uitvoerend - groen': 'uitvoerend-groen',
        'Uitvoerend - oranje': 'uitvoerend-oranje',
        'Uitvoerend - violet': 'uitvoerend-violet',
        'Uitvoerend - mintgroen': 'uitvoerend-mintgroen',
        'Uitvoerend - violet - oud': 'uitvoerend-violet-oud',
        KOOP: 'koop',
      },
      defaultTheme: 'RijkshuisstijlCommunity',
    }),
  ],
};

export default preview;
