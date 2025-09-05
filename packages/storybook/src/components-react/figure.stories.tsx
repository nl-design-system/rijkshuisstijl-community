import { Figure, FigureCaption, Image } from '@rijkshuisstijl-community/components-react';
import { Meta, StoryObj } from '@storybook/react';
import readme from './figure.md?raw';
import { mergeMarkdown } from '../../helpers/merge-markdown';

const meta = {
  title: 'Figure',
  id: 'rhc-figure',
  component: Figure,
  argTypes: {
    borderEndEndRadius: {
      type: { name: 'string', required: false },
      control: { type: 'range', min: 0, max: 80, step: 8 },
      description: 'Bottom right corner radius of the image in pixels',
      table: {
        category: 'Demo',
      },
    },
    borderEndStartRadius: {
      type: { name: 'string', required: false },
      control: { type: 'range', min: 0, max: 80, step: 8 },
      description: 'Bottom left corner radius of the image in pixels',
      table: {
        category: 'Demo',
      },
    },
    borderStartEndRadius: {
      type: { name: 'string', required: false },
      control: { type: 'range', min: 0, max: 80, step: 8 },
      description: 'Top right corner radius of the image in pixels',
      table: {
        category: 'Demo',
      },
    },
    borderStartStartRadius: {
      type: { name: 'string', required: false },
      control: { type: 'range', min: 0, max: 80, step: 8 },
      description: 'Top left corner radius of the image in pixels',
      table: {
        category: 'Demo',
      },
    },
  },
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
      <Image alt="Multicolored tulip field" height={763} src="/placeholder.jpg" width={640} />,
      <FigureCaption>{'Bijschrift (figcaption) van afbeelding.'}</FigureCaption>,
    ],
  },
};
