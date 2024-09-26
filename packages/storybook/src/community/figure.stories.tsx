import { Figure, FigureCaption, Image } from '@rijkshuisstijl-community/components-react';
import { Args, Meta, StoryObj } from '@storybook/react/*';
import readme from './figure.md?raw';

const ImageComponent = () => <Image alt="Multicolored tulip field" height={763} src="./placeholder.jpg" width={640} />;

const meta = {
  title: 'Rijkshuisstijl/Figure',
  id: 'rhc-figure',
  component: Figure,
  args: {
    image: ImageComponent(),
    caption: 'Bijschrift (figcaption) van afbeelding.',
  },
  argTypes: {
    caption: {
      type: { name: 'string', required: true },
    },
  },
  render: ({ caption, image }: Args) => {
    return (
      <Figure>
        {image}
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
