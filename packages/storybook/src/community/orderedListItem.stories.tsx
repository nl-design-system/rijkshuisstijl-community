import { OrderedList, OrderedListItem } from '@rijkshuisstijl-community/components-react';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Rijkshuisstijl/Ordered List/Ordered Item',
  id: 'rhc-ordered-list-item',
  component: OrderedListItem,
  decorators: [(Story) => <OrderedList>{Story()}</OrderedList>],
  args: {
    children: 'Ordered List item',
  },
  argTypes: {
    value: {
      type: { name: 'number', required: false },
      table: {
        category: 'HTML attribute',
      },
    },
  },
  parameters: {
    status: {
      type: 'STABLE',
    },
  },
} satisfies Meta<typeof OrderedListItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
