import { OrderedList, OrderedListItem } from '@rijkshuisstijl-community/components-react';
import { Meta, StoryObj } from '@storybook/react';
import readme from './orderedList.md?raw';

const meta = {
  title: 'Rijkshuisstijl/Ordered List',
  id: 'rhc-ordered-list',
  component: OrderedList,
  args: {
    children: '',
  },
  parameters: {
    status: {
      type: 'STABLE',
    },
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof OrderedList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultOrderedList: Story = {
  args: {
    children: [
      <OrderedListItem key="li-1">Ordered List item 1</OrderedListItem>,
      <OrderedListItem key="li-2">Ordered List item 2</OrderedListItem>,
      <OrderedListItem key="li-3">Ordered List item 3</OrderedListItem>,
    ],
  },
};

export const NestedOrderedList: Story = {
  args: {
    children: [
      <OrderedListItem key="li-4">Ordered List item 1</OrderedListItem>,
      <OrderedListItem key="li-5">
        Ordered List item 2
        <OrderedList>
          <OrderedListItem>Order List item 2.1</OrderedListItem>
          <OrderedListItem>Order List item 2.2</OrderedListItem>
        </OrderedList>
      </OrderedListItem>,
      <OrderedListItem key="li-6">Ordered List item 3</OrderedListItem>,
    ],
  },
};
