import { Figure, FigureCaption, Image } from '@rijkshuisstijl-community/components-react';
import { Args, Meta, StoryObj } from '@storybook/react/*';
import { CSSProperties } from 'react';
import readme from './figure.md?raw';
import { mergeMarkdown } from '../../helpers/merge-markdown';

const meta = {
  title: 'Rijkshuisstijl/Figure',
  id: 'rhc-figure',
  component: Figure,
  args: {
    caption: 'Bijschrift (figcaption) van afbeelding.',
    imageSrc: './placeholder.jpg',
    borderEndEndRadius: 0,
    borderEndStartRadius: 0,
    borderStartEndRadius: 0,
    borderStartStartRadius: 0,
  },
  argTypes: {
    caption: {
      type: { name: 'string', required: true },
    },
    imageSrc: {
      type: { name: 'string' },
      description: 'Source of the demo image',
      table: {
        category: 'Demo',
      },
    },
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
  render: ({
    caption,
    imageSrc,
    borderEndEndRadius,
    borderEndStartRadius,
    borderStartEndRadius,
    borderStartStartRadius,
  }: Args) => {
    return (
      <Figure
        style={
          {
            '--utrecht-figure-img-border-end-end-radius': `${borderEndEndRadius}px`,
            '--utrecht-figure-img-border-end-start-radius': `${borderEndStartRadius}px`,
            '--utrecht-figure-img-border-start-end-radius': `${borderStartEndRadius}px`,
            '--utrecht-figure-img-border-start-start-radius': `${borderStartStartRadius}px`,
          } as unknown as CSSProperties
        }
      >
        <Image alt="Multicolored tulip field" height={763} src={imageSrc} width={640} />
        <FigureCaption>{caption}</FigureCaption>
      </Figure>
    );
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
    // TODO: add Figma, GitHub and NL DesignSystem links
    componentOrigin:
      'Dit component is overgenomen van de Gemeente Utrecht, met styling van de Rijkshuisstijl Community.',
  },
} as Meta<typeof Figure>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultFigure: Story = {};
