import '@nl-rvo/assets/fonts/index.css';
import '@rijkshuisstijl-community/design-tokens/dist/index.css';
import '@rijkshuisstijl-community/design-tokens/dist/uitvoerend-violet/index.css';
import '@rijkshuisstijl-community/design-tokens/dist/uitvoerend-mintgroen-focus/index.css';
import '@rijkshuisstijl-community/design-tokens/dist/uitvoerend-violet-oud/index.css';
import '@rijkshuisstijl-community/design-tokens/dist/cjib-theme/index.css';
import '@rijkshuisstijl-community/design-tokens/dist/digid-theme/index.css';
import '@rijkshuisstijl-community/design-tokens/dist/logius-theme/index.css';
import '@rijkshuisstijl-community/design-tokens/dist/mijnoverheid-theme/index.css';
import '@rijkshuisstijl-community/digid-design-tokens/dist/theme.css';
import '@rijkshuisstijl-community/font/src/index.mjs';
import '@rijkshuisstijl-community/logius-design-tokens/dist/theme.css';
import '@rijkshuisstijl-community/mijnoverheid-design-tokens/dist/theme.css';
import '@rijkshuisstijl-community/rivm-design-tokens/dist/theme.css';
import '@rijkshuisstijl-community/components-css/dist/index.css';
import { Paragraph } from '@rijkshuisstijl-community/components-react';
import { withThemeByClassName } from '@storybook/addon-themes';
import { Controls, Description, Primary, Stories, useOf } from '@storybook/blocks';
import { Preview } from '@storybook/react';
import { PageLayout } from '@utrecht/page-layout-react';
import { Root } from '@utrecht/root-react';
import { Fragment } from 'react';

const preview: Preview = {
  decorators: [
    withThemeByClassName({
      themes: {
        RijkshuisstijlCommunity: 'rhc-theme',
        'DigiD - oud': 'digid-theme-old',
        DigiD: 'digid-theme',
        'MijnOverheid - oud': 'mijnoverheid-theme-old',
        MijnOverheid: 'mijnoverheid-theme',
        'Logius - oud': 'logius-theme-old',
        Logius: 'logius-theme',
        'RIVM - oud en nog niet verplaatst': 'rivm-theme-old',
        CJIB: 'cjib-theme',
        'Uitvoerend - violet': 'uitvoerend-violet',
        'Uitvoerend - mintgroen -  ander fontweight - focus': 'uitvoerend-mintgroen-focus',
        'Uitvoerend - violet - oud': 'uitvoerend-violet-oud',
      },
      defaultTheme: 'RijkshuisstijlCommunity',
    }),
    (Story, options) => {
      return options.parameters['isPage'] ? (
        <Root Component="div">
          <PageLayout>{Story()}</PageLayout>
        </Root>
      ) : (
        Story()
      );
    },
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
        order: [
          'Rijkshuisstijl Community',
          ['README', '*', 'Icon Sets', 'Design Tokens', ['Standaard Thema']],
          'Rijkshuisstijl',
          ['README', 'CHANGELOG'],
          'Web Components',
          ['README', 'CHANGELOG'],
          'Twig Components',
          ['README', 'CHANGELOG'],
          'Templates',
        ],
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
            {!storyParameters?.isPage && <Stories />}
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
