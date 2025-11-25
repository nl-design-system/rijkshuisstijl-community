import { Figure, FigureCaption, Image } from '@rijkshuisstijl-community/components-react';
import { RoundedCorner } from '@rijkshuisstijl-community/components-react';
import { mergeMarkdown } from '@rijkshuisstijl-community/internal-tooling/markdownUtils';
import { Meta, StoryObj } from '@storybook/react-vite';
import readme from './figure.md?raw';

const meta = {
  title: 'Figure',
  id: 'rhc-figure',
  component: Figure,
  parameters: {
    status: {
      type: 'STABLE',
    },
    docs: {
      description: {
        // TODO: restructure this, but not until readme is correctly structurized in the Utrecht documentation source
        component: mergeMarkdown([readme]),
      },
    },
    github:
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/Figure.tsx',
    nldesignsystem: 'https://nldesignsystem.nl/figure',
    componentOrigin:
      'Dit component is overgenomen van de Gemeente Utrecht, met styling van de Rijkshuisstijl Community.',
  },
} as Meta<typeof Figure>;

export default meta;

export const DefaultFigure: StoryObj<typeof meta> = {
  args: {
    children: [
      <RoundedCorner position="start-end" size="md">
        <Image alt="Multicolored tulip field" height={763} src="/placeholder.jpg" width={640} />
      </RoundedCorner>,
      <FigureCaption>{'Bijschrift (figcaption) van afbeelding.'}</FigureCaption>,
    ],
  },
};
