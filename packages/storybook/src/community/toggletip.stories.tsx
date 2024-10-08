import { iconOptions, Toggletip } from '@rijkshuisstijl-community/components-react';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Rijkshuisstijl/Toggletip',
  id: 'rhc-toggletip',
  component: Toggletip,
  argTypes: {
    alertType: {
      description: 'Alert type',
      control: { type: 'select' },
      options: [undefined, 'info', 'warning', 'error', 'success'],
      table: {
        defaultValue: { summary: 'info' },
        type: { summary: 'string' },
      },
    },
    icon: {
      description: 'Toggletip icon',
      control: { type: 'select' },
      options: iconOptions,
      table: {
        defaultValue: { summary: 'info' },
        type: { summary: 'string' },
      },
    },
  },
  args: {
    children: 'Lorem ipsum dolor sit amet, consecteur ad * isicing elit, sed do eiusmod *',
    icon: 'info',
    alertType: 'info',
  },
} satisfies Meta<typeof Toggletip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
