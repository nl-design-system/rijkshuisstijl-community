import { Figure, FigureCaption, Image } from '@rijkshuisstijl-community/components-react';
import { RoundedCorner } from '@rijkshuisstijl-community/components-react';
import { mergeMarkdown } from '@rijkshuisstijl-community/internal-tooling/markdownUtils';
import { Meta, StoryObj } from '@storybook/react-vite';
import readme from './figure.md?raw';

const meta = {
  title: 'Figure',
  id: 'rhc-figure',
  component: Figure,
  argTypes: {
    position: {
      control: { type: 'select' },
      options: ['start-start', 'start-end', 'end-start', 'end-end'],
    },
    size: {
      control: { type: 'select' },
      options: ['lg', 'md', 'sm'],
    },
  },
  parameters: {
    status: { type: 'STABLE' },
    docs: {
      description: {
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
    position: 'start-end',
    size: 'md',
  },
  render: ({ position, size }) => (
    <Figure>
      <RoundedCorner position={position} size={size}>
        <Image alt="Multicolored tulip field" height={763} src="/placeholder.jpg" width={640} />
      </RoundedCorner>

      <FigureCaption>Bijschrift (figcaption) van afbeelding.</FigureCaption>
    </Figure>
  ),
};
