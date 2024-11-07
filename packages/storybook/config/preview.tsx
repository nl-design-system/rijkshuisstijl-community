import '@nl-rvo/assets/fonts/index.css';
import '@rijkshuisstijl-community/design-tokens/dist/wetgevend/index.css';
import '@rijkshuisstijl-community/design-tokens/dist/uitvoerend-violet/theme.css';
import '@rijkshuisstijl-community/design-tokens/dist/uitvoerend-mintgroen-anderfontweight-focus/theme.css';
import '@rijkshuisstijl-community/design-tokens/dist/uitvoerend-violet-oud/theme.css';
import '@rijkshuisstijl-community/digid-design-tokens/dist/theme.css';
import '@rijkshuisstijl-community/font/src/index.mjs';
import '@rijkshuisstijl-community/logius-design-tokens/dist/theme.css';
import '@rijkshuisstijl-community/mijnoverheid-design-tokens/dist/theme.css';
import '@rijkshuisstijl-community/rivm-design-tokens/dist/theme.css';
import '@rijkshuisstijl-community/components-css/dist/index.css';

import { withThemeByClassName } from '@storybook/addon-themes';
import { Preview } from '@storybook/react';
import { UtrechtDocument } from '@utrecht/web-component-library-react';

const preview: Preview = {
  decorators: [
    withThemeByClassName({
      themes: {
        RijkshuisstijlCommunity: 'wetgevend-theme',
        DigiD: 'digid-theme',
        MijnOverheid: 'mijnoverheid-theme',
        Logius: 'logius-theme',
        RIVM: 'rivm-theme',
        'Uitvoerend - violet': 'uitvoerend-violet-theme',
        'Uitvoerend - mintgroen -  ander fontweight - focus': 'uitvoerend-mintgroen-anderfontweight-focus-theme',
        'Uitvoerend - violet - oud': 'uitvoerend-violet-oud-theme',
      },
      defaultTheme: 'RijkshuisstijlCommunity',
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
    options: {
      panelPosition: 'right',
      storySort: {
        order: ['Rijkshuisstijl Community', ['README'], 'Componenten'],
      },
    },
    status: {
      statuses: {
        STABLE: {
          background: '#088008',
          color: '#ffffff',
          description:
            'Component is stabiel en kan worden gebruikt. Kleine iteraties zullen mogelijk nog plaatsvinden.',
        },
        UNSTABLE: {
          background: '#cc0000',
          color: '#ffffff',
          description: 'Component is nieuw en mogelijk instabiel. Kan gebruikt worden, maar kan nog fouten bevatten.',
        },
      },
    },
    docs: {
      source: {
        state: 'open',

        /*
            Uncomment the transformer to show underlying CSS and HTML
        */

        // transform(src: string, storyContext: StoryContext) {
        //   const render =
        //     typeof storyContext.component === 'function'
        //       ? storyContext.component
        //       : typeof storyContext.component?.render === 'function'
        //         ? storyContext.component?.render
        //         : null;

        //   if (render) {
        //     const srcString = renderToStaticMarkup(render(storyContext.args));

        //     return Prettify({ ugly: srcString });
        //   }
        //   return src;
        // },
      },
    },
  },
};

export default preview;
