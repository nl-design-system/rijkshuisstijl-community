import { withThemeByClassName } from '@storybook/addon-themes';
import { Preview } from '@storybook/react';
import { UtrechtDocument } from '@utrecht/web-component-library-react';
import '@utrecht/component-library-css/dist/index.css';
import '@utrecht/component-library-css/dist/html.css';
import '@rijkshuisstijl-community/design-tokens/dist/index.css';
import '@rijkshuisstijl-community/digid-design-tokens/dist/theme.css';
import '@rijkshuisstijl-community/logius-design-tokens/dist/theme.css';
import '@rijkshuisstijl-community/mijnoverheid-design-tokens/dist/theme.css';
import '@rijkshuisstijl-community/rivm-design-tokens/dist/theme.css';
import '@rijkshuisstijl-community/font/src/index.scss';
import '@nl-rvo/assets/fonts/index.css';

const preview: Preview = {
  decorators: [
    withThemeByClassName({
      themes: {
        RijkshuisstijlCommunity: 'rhc-theme',
        DigiD: 'digid-theme',
        MijnOverheid: 'mijnoverheid-theme',
        Logius: 'logius-theme',
        RIVM: 'rivm-theme',
      },
      defaultTheme: 'Logius',
    }),
    (Story: any) => <UtrechtDocument>{Story()}</UtrechtDocument>,
  ],
  parameters: {
    previewTabs: {
      'storybookjs/notes/panel': { title: 'Documentation' },
      'storybook/docs/panel': { title: 'API' },
      canvas: { title: 'Design Tokens' },
    },
    controls: { expanded: false },
    options: { panelPosition: 'right' },
  },
};

export default preview;
