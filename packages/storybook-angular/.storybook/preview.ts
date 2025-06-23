import { type Preview } from '@storybook/angular';
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
  },
  decorators: [
    withThemeByClassName({
      themes: {
        RijkshuisstijlCommunity: 'rhc-theme',
        'DigiD - oud': 'digid-theme-old',
        'MijnOverheid - oud': 'mijnoverheid-theme-old',
        'Logius - oud': 'logius-theme-old',
        'RIVM - oud en nog niet verplaatst': 'rivm-theme-old',
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
