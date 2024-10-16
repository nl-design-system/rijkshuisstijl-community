import { Hero, Keep } from '@rijkshuisstijl-community/components-react';
import { Meta, StoryObj } from '@storybook/react/*';

const meta = {
  title: 'Rijkshuisstijl/Keep',
  id: 'rhc-keep',
  component: Keep,
  argTypes: {
    keep: {
      control: { type: 'select' },
      options: ['topLeft', 'bottomLeft', 'topRight', 'bottomRight'],
    },
  },
} as Meta<typeof Keep>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    keep: 'left',
    children: [
      <Hero
        heading="Heading"
        imageAlt="Tullip field"
        imageSrc="https://raw.githubusercontent.com/nl-design-system/rijkshuisstijl-community/main/proprietary/assets/src/placeholder.jpg"
        subHeading="Subtext"
      />,
    ],
  },
};
