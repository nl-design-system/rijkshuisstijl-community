import { Icon, iconOptions } from '@rijkshuisstijl-community/components-react';
import { Meta, StoryObj } from '@storybook/react/*';

const meta = {
  title: 'Rijkshuisstijl/Icon',
  id: 'rhc-icon',
  component: Icon,
  argTypes: {
    icon: {
      control: { type: 'select' },
      options: iconOptions,
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: 'home',
  },
};
