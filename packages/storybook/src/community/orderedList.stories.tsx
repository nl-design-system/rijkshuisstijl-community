import { OrderedList, OrderedListItem } from '@rijkshuisstijl-community/components-react';
import { Meta, StoryObj } from '@storybook/react';
import readme from './orderedList.md?raw';

const meta = {
  title: 'Rijkshuisstijl/Ordered List',
  id: 'rijkshuisstijl-orderedList',
  component: OrderedList,
  args: {
    children: '',
  },
  parameters: {
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
      <OrderedListItem>Ordered List item 1</OrderedListItem>,
      <OrderedListItem>Ordered List item 2</OrderedListItem>,
      <OrderedListItem>Ordered List item 3</OrderedListItem>,
    ],
  },
};

export const NestedOrderedList: Story = {
  args: {
    children: [
      <OrderedListItem>Ordered List item 1</OrderedListItem>,
      <OrderedListItem>
        Ordered List item 2
        <OrderedList>
          <OrderedListItem>Order List item 2.1</OrderedListItem>
          <OrderedListItem>Order List item 2.2</OrderedListItem>
        </OrderedList>
      </OrderedListItem>,
      <OrderedListItem>Ordered List item 3</OrderedListItem>,
    ],
  },
};
