import { OrderedList, OrderedListItem } from '@rijkshuisstijl-community/components-react';
import { Meta, StoryObj } from '@storybook/react-vite';
import readme from './orderedListItem.md?raw';
import { mergeMarkdown } from '../../helpers/merge-markdown';

const meta = {
  title: 'Ordered List/Ordered List Item',
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
    docs: {
      description: {
        component: mergeMarkdown([readme]),
      },
    },
    status: {
      type: 'STABLE',
    },
    componentOrigin:
      'Dit component is overgenomen van de Gemeente Utrecht, met styling van de Rijkshuisstijl Community.',
    github:
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/OrderedList.tsx',
  },
} satisfies Meta<typeof OrderedListItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
