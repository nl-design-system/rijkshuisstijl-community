import '@nl-rvo/assets/fonts/index.css';
import '@rijkshuisstijl-community/design-tokens/dist/lintblauw/index.css';
import '@rijkshuisstijl-community/design-tokens/dist/robijnrood/index.css';
import '@rijkshuisstijl-community/design-tokens/dist/paars/index.css';
import '@rijkshuisstijl-community/design-tokens/dist/oranje/index.css';
import '@rijkshuisstijl-community/design-tokens/dist/groen/index.css';
import '@rijkshuisstijl-community/design-tokens/dist/hemelblauw/index.css';
import '@rijkshuisstijl-community/design-tokens/dist/lintblauw-information-dense/index.css';
import '@rijkshuisstijl-community/design-tokens/dist/robijnrood-information-dense/index.css';
import '@rijkshuisstijl-community/design-tokens/dist/paars-information-dense/index.css';
import '@rijkshuisstijl-community/design-tokens/dist/oranje-information-dense/index.css';
import '@rijkshuisstijl-community/design-tokens/dist/groen-information-dense/index.css';
import '@rijkshuisstijl-community/design-tokens/dist/hemelblauw-information-dense/index.css';
import '@rijkshuisstijl-community/font/src/index.mjs';
import '@rijkshuisstijl-community/components-css/dist/index.css';
import '@utrecht/color-sample-css/dist/index.css';
import { Body, PageLayout, Paragraph, Root } from '@rijkshuisstijl-community/components-react';
import { formatHtml } from '@rijkshuisstijl-community/storybook-tooling/formatHtml';
import { Controls, Description, Primary, Stories, useOf } from '@storybook/addon-docs/blocks';
import { withThemeByClassName } from '@storybook/addon-themes';
import { Preview } from '@storybook/react-vite';
import { Fragment } from 'react';
import { StoryRootDecorator } from './StoryRootDecorator';

const preview: Preview = {
  decorators: [
    withThemeByClassName({
      themes: {
        Lintblauw: 'lintblauw lintblauw--fluid',
        Groen: 'groen groen--fluid',
        Hemelblauw: 'hemelblauw hemelblauw--fluid',
        Oranje: 'oranje oranje--fluid',
        Paars: 'paars paars--fluid',
        Robijnrood: 'robijnrood robijnrood--fluid',

        'Lintblauw (information dense)': 'lintblauw-information-dense lintblauw--fluid',
        'Groen (information dense)': 'groen-information-dense groen--fluid',
        'Hemelblauw (information dense)': 'hemelblauw-information-dense hemelblauw--fluid',
        'Oranje (information dense)': 'oranje-information-dense oranje--fluid',
        'Paars (information dense)': 'paars-information-dense paars--fluid',
        'Robijnrood (information dense)': 'robijnrood-information-dense robijnrood--fluid',
      },
      defaultTheme: 'Lintblauw',
    }),
    (Story, options) => {
      return options.parameters['isPage'] ? (
        <Root Component="div">
          <Body Component="div">
            <PageLayout>{Story()}</PageLayout>
          </Body>
        </Root>
      ) : (
        <Root Component="div">{Story()}</Root>
      );
    },
    StoryRootDecorator,
  ],

  parameters: {
    a11y: { test: 'error' },
    html: {
      transform: formatHtml,
    },
    actions: {
      disable: true,
    },
    controls: { exclude: ['children', 'ref', 'className'] },
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
