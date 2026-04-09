import '@nl-rvo/assets/fonts/index.css';
import '@rijkshuisstijl-community/design-tokens/dist/index.css';
import '@rijkshuisstijl-community/design-tokens/dist/uitvoerend-robijnrood/index.css';
import '@rijkshuisstijl-community/design-tokens/dist/uitvoerend-paars/index.css';
import '@rijkshuisstijl-community/design-tokens/dist/uitvoerend-oranje/index.css';
import '@rijkshuisstijl-community/design-tokens/dist/uitvoerend-groen/index.css';
import '@rijkshuisstijl-community/design-tokens/dist/uitvoerend-hemelblauw/index.css';
import '@rijkshuisstijl-community/design-tokens/dist/uitvoerend-lintblauw/index.css';
import '@rijkshuisstijl-community/design-tokens/src/fluid.css';
import '@rijkshuisstijl-community/design-tokens/src/fluid-font-size.css';
import '@rijkshuisstijl-community/design-tokens/src/fluid-space.css';
import '@rijkshuisstijl-community/font/src/index.mjs';
import '@rijkshuisstijl-community/components-css/dist/index.css';
import { Body, PageLayout, Paragraph, Root } from '@rijkshuisstijl-community/components-react';
import { formatHtml } from '@rijkshuisstijl-community/storybook-tooling/formatHtml';
import { Controls, Description, Primary, Stories } from '@storybook/addon-docs/blocks';
import { useOf } from '@storybook/addon-docs/blocks';
import { withThemeByClassName } from '@storybook/addon-themes';
import { Preview } from '@storybook/react-vite';
import { Document } from '@utrecht/component-library-react';
import { Fragment } from 'react';
import { StoryRootDecorator } from './StoryRootDecorator';

const themeModifiers = [
  'basis-layout-container',
  'basis-layout-container--fluid-font-size',
  'basis-layout-container--fluid-space',
].join(' ');

const preview: Preview = {
  decorators: [
    withThemeByClassName({
      themes: {
        'Kern - Lintblauw': `rhc-theme ${themeModifiers}`,
        'Uitvoerend - Groen': `uitvoerend-groen ${themeModifiers}`,
        'Uitvoerend - Hemelblauw': `uitvoerend-hemelblauw ${themeModifiers}`,
        'Uitvoerend - Lintblauw': `uitvoerend-lintblauw ${themeModifiers}`,
        'Uitvoerend - Oranje': `uitvoerend-oranje ${themeModifiers}`,
        'Uitvoerend - Paars': `uitvoerend-paars ${themeModifiers}`,
        'Uitvoerend - Robijn Rood': `uitvoerend-robijnrood ${themeModifiers}`,
      },
      defaultTheme: 'Kern - Lintblauw',
    }),
    (Story, options) => {
      return options.parameters['isPage'] ? (
        <Root Component="div">
          <Body Component="div">
            <PageLayout>{Story()}</PageLayout>
          </Body>
        </Root>
      ) : (
        <Document>{Story()}</Document>
      );
    },
    StoryRootDecorator,
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
        method: 'alphabetical',
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
