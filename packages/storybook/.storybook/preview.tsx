import '@nl-rvo/assets/fonts/index.css';
import '@rijkshuisstijl-community/design-tokens/dist/index.css';
import '@rijkshuisstijl-community/design-tokens/dist/uitvoerend-violet/index.css';
import '@rijkshuisstijl-community/design-tokens/dist/uitvoerend-mintgroen/index.css';
import '@rijkshuisstijl-community/design-tokens/dist/uitvoerend-violet-oud/index.css';
import '@rijkshuisstijl-community/design-tokens/dist/uitvoerend-paars/index.css';
import '@rijkshuisstijl-community/design-tokens/dist/uitvoerend-oranje/index.css';
import '@rijkshuisstijl-community/design-tokens/dist/uitvoerend-groen/index.css';
import '@rijkshuisstijl-community/design-tokens/dist/uitvoerend-hemelblauw/index.css';
import '@rijkshuisstijl-community/design-tokens/dist/koop/index.css';
import '@rijkshuisstijl-community/font/src/index.mjs';
import '@rijkshuisstijl-community/components-css/dist/index.css';
import { Paragraph } from '@rijkshuisstijl-community/components-react';
import { withThemeByClassName } from '@storybook/addon-themes';
import { Controls, Description, Primary, Stories, useOf } from '@storybook/addon-docs/blocks';
import { Preview } from '@storybook/react-vite';
import { PageLayout } from '@utrecht/page-layout-react';
import { Root } from '@utrecht/root-react';
import { Fragment } from 'react';
import { formatHtml } from '@rijkshuisstijl-community/internal-tooling/formatHtml';

const preview: Preview = {
  decorators: [
    (Story: any) => <div className="utrecht-document">{Story()}</div>,
    withThemeByClassName({
      themes: {
        RijkshuisstijlCommunity: 'rhc-theme (Standaard Thema)',
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
    html: {
      transform: formatHtml,
    },
    actions: {
      disable: true,
    },
    controls: { exclude: ['children'] },
    options: {
      storySort: {
        order: [
          'Rijkshuisstijl Community',
          ['README', '*', 'Icon Sets', 'Design Tokens', ['Standaard Thema']],
          'CSS Components',
          ['README', 'CHANGELOG'],
          'React Components',
          ['README', 'CHANGELOG'],
          'Web Components',
          ['README', 'CHANGELOG'],
          'Twig Components',
          ['README', 'CHANGELOG'],
          'React Templates',
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
      codePanel: true,
      canvas: {
        // Show code by default.
        // Stories without concise code snippets can hide the code at Story level.
        sourceState: 'shown',
      },
      source: {
        excludeDecorators: true,
      },
    },
  },
  tags: ['autodocs'],
};
export default preview;
