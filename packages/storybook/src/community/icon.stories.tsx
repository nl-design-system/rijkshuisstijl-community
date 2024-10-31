import { Icon, iconOptions } from '@rijkshuisstijl-community/components-react';
import { Meta, StoryObj } from '@storybook/react/*';
import { IconBrandX } from '@tabler/icons-react';

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
  parameters: {
    status: {
      type: 'STABLE',
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

export const CustomIcon: Story = {
  args: {
    children: <IconBrandX />,
  },
};
