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
        DigiD: 'digid-theme',
        MijnOverheid: 'mijnoverheid-theme',
        Logius: 'logius-theme',
        RIVM: 'rivm-theme',
        'Uitvoerend - violet': 'uitvoerend-violet',
        'Uitvoerend - mintgroen -  ander fontweight - focus': 'uitvoerend-mintgroen-focus',
        'Uitvoerend - violet - oud': 'uitvoerend-violet-oud',
      },
      defaultTheme: 'RijkshuisstijlCommunity',
    }),
  ],
};

export default preview;
