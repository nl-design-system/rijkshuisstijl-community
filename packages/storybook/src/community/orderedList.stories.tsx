import { OrderedList, OrderedListItem } from '@rijkshuisstijl-community/components-react';
import { Meta, StoryObj } from '@storybook/react';
import readme from './orderedList.md?raw';

const meta = {
  title: 'Rijkshuisstijl/Ordered List',
  id: 'rijkshuisstijl-orderedList',
  component: OrderedList,
  args: {
    children: [
      <OrderedListItem>Ordered List item 1</OrderedListItem>,
      <OrderedListItem>Ordered List item 2</OrderedListItem>,
      <OrderedListItem>Ordered List item 3</OrderedListItem>,
    ],
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

export const DefaultOrderedList: Story = {};
