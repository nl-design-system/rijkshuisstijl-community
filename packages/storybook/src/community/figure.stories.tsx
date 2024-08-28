import { Figure, FigureCaption, Image } from '@rijkshuisstijl-community/components-react';
import { Args, Meta, StoryObj } from '@storybook/react/*';
import readme from './figure.md?raw';

const meta = {
  title: 'Rijkshuisstijl/Figure',
  id: 'rijkshuisstijl-figure',
  component: Figure,
  args: {
    children: <Image alt="Multicolored tulip field" height={763} src="./placeholder.jpg" width={640} />,
    caption: ['Bijschrift (figcaption) van afbeelding.'],
  },
  argTypes: {
    caption: {
      type: { name: 'string', required: true },
    },
  },
  render: ({ caption, children }: Args) => {
    return (
      <Figure>
        {children}
        <FigureCaption>{caption}</FigureCaption>
      </Figure>
    );
  },
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} as Meta<typeof Figure>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultFigure: Story = {};
