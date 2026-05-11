import TwigFigure from '@rijkshuisstijl-community/components-twig/src/Figure.twig';
import { mergeMarkdown } from '@rijkshuisstijl-community/storybook-tooling/markdownUtils';
import { Meta, StoryObj } from '@storybook/react-vite';
import readme from '../components-react/figure.md?raw';

const meta = {
  title: 'Figure',
  id: 'rhc-twig-figure',
  component: TwigFigure,
  parameters: {
    docs: {
      description: {
        // TODO: restructure this, but not until readme is correctly structurized in the Utrecht documentation source
        component: mergeMarkdown([readme]),
      },
    },
    github: 'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-twig/src/Figure.twig',
    nldesignsystem: 'https://nldesignsystem.nl/figure',
    componentOrigin: 'Dit component is overgenomen van de Gemeente Utrecht, met styling van de Rijkshuisstijl Community.',
  },
} as Meta<typeof TwigFigure>;

export default meta;

export const DefaultFigure: StoryObj<typeof meta> = {
  args: {
    
  },
};