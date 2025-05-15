import { OrderedList, OrderedListItem } from '@rijkshuisstijl-community/components-react';
import { Meta, StoryObj } from '@storybook/react';
import readme from './orderedList.md?raw';
import { mergeMarkdown } from '../../helpers/merge-markdown';

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
        // TODO: restructure this, but not until readme is correctly structurized in the Utrecht documentation source
        component: mergeMarkdown([readme]),
      },
    },
    componentOrigin:
      'Dit component is overgenomen van de Gemeente Utrecht, met styling van de Rijkshuisstijl Community.',
    // TODO: add NL Design System link and Figma link
    github:
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/OrderedList.tsx',
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
