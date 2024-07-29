import '@nl-rvo/assets/fonts/index.css';
import '@rijkshuisstijl-community/design-tokens/dist/index.css';
import '@rijkshuisstijl-community/digid-design-tokens/dist/theme.css';
import '@rijkshuisstijl-community/font/src/index.scss';
import '@rijkshuisstijl-community/logius-design-tokens/dist/theme.css';
import '@rijkshuisstijl-community/mijnoverheid-design-tokens/dist/theme.css';
import '@rijkshuisstijl-community/rivm-design-tokens/dist/theme.css';
import { withThemeByClassName } from '@storybook/addon-themes';
import { Preview, StoryContext } from '@storybook/react';
import '@utrecht/component-library-css/dist/html.css';
import '@utrecht/component-library-css/dist/index.css';
import { UtrechtDocument } from '@utrecht/web-component-library-react';
import { renderToStaticMarkup } from 'react-dom/server';
import { Prettify } from './Prettify';

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
    options: { panelPosition: 'right' },
    status: {
      statuses: {
        PRODUCTION: {
          background: '#088008',
          color: '#ffffff',
          description:
            'Used in production in a variety of situations, well tested, stable APIs, mostly patches and minor releases.',
        },
        BETA: {
          background: '#3065ee',
          color: '#ffffff',
          description:
            'Used in production in a specific situation, evolving APIs based on feedback, breaking changes are still likely.',
        },
        ALPHA: {
          background: '#e0bc2e',
          color: '#000000',
          description:
            'Used in prototypes and in projects that are still in development, breaking changes occur frequently and are not communicated.',
        },
        'WORK IN PROGRESS': {
          background: '#cc0000',
          color: '#ffffff',
          description:
            'Do not use in production. Does not follow semantic versioning and any published packages are for internal use only.',
        },
      },
    },
    docs: {
      source: {
        transform(src: string, storyContext: StoryContext) {
          const render =
            typeof storyContext.component === 'function'
              ? storyContext.component
              : typeof storyContext.component?.render === 'function'
                ? storyContext.component?.render
                : null;

          if (render) {
            const srcString = renderToStaticMarkup(render(storyContext.args));

            return Prettify({ ugly: srcString });
          }
          return src;
        },
      },
    },
  },
};

export default preview;
