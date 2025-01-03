import '@nl-rvo/assets/fonts/index.css';
import '@rijkshuisstijl-community/design-tokens/dist/index.css';
import '@rijkshuisstijl-community/digid-design-tokens/dist/theme.css';
import '@rijkshuisstijl-community/font/src/index.mjs';
import '@rijkshuisstijl-community/logius-design-tokens/dist/theme.css';
import '@rijkshuisstijl-community/mijnoverheid-design-tokens/dist/theme.css';
import '@rijkshuisstijl-community/rivm-design-tokens/dist/theme.css';
import '@rijkshuisstijl-community/components-css/dist/index.css';
import { Paragraph } from '@rijkshuisstijl-community/components-react';
import { defineCustomElements } from '@rijkshuisstijl-community/web-components-stencil/loader/index';
import { withThemeByClassName } from '@storybook/addon-themes';
import { Controls, Description, Primary, Stories, useOf } from '@storybook/blocks';
import { Preview } from '@storybook/react';
import { defineCustomElements as defineUtrechtCustomElements } from '@utrecht/web-component-library-stencil/loader/index';
import { Fragment } from 'react';

// Initialize web components
defineCustomElements();
defineUtrechtCustomElements();

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
    (Story: any) => Story(),
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
      page: () => {
        const storyParameters: any = useOf<'story'>('story')?.story?.parameters;
        const parameterLabels = {
          nldesignsystem: 'NL Design System',
          figma: 'Figma',
          github: 'GitHub',
        };
        const links = (
          <>
            {['nldesignsystem', 'figma', 'github']
              .filter((parameterKey) => storyParameters?.[parameterKey])
              .map((parameterKey, index) => (
                <Fragment key={parameterKey}>
                  {index > 0 && ' | '}
                  <a href={storyParameters[parameterKey]}>
                    {parameterLabels[parameterKey as keyof typeof parameterLabels]}
                  </a>
                </Fragment>
              ))}
          </>
        );
        // Exclude `<Title>` because the title comes from the Markdown file
        return (
          <>
            {links}
            {storyParameters?.componentOrigin && <Paragraph>{storyParameters.componentOrigin}</Paragraph>}
            <Description />
            <Primary />
            <Controls />
            <Stories />
          </>
        );
      },
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
