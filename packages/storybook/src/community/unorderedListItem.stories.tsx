import { UnorderedList, UnorderedListItem } from '@rijkshuisstijl-community/components-react';
import { Meta, StoryObj } from '@storybook/react/*';

const meta = {
  title: 'Rijkshuisstijl/Unordered List/Unordered Item',
  id: 'rhc-unorderedListItem',
  component: UnorderedListItem,
  decorators: [(Story) => <UnorderedList>{Story()}</UnorderedList>],
  args: {
    children: 'List item',
  },
} satisfies Meta<typeof UnorderedListItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultUnorderedListItem: Story = {};
