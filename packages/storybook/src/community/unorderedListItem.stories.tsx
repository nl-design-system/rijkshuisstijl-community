import { UnorderedListItem } from '@rijkshuisstijl-community/components-react';
import { Meta, StoryObj } from '@storybook/react/*';

const meta = {
  title: 'Rijkshuisstijl/Unordered List/Unordered Item',
  id: 'rijkshuisstijl-unorderedListItem',
  component: UnorderedListItem,
  args: {
    children: 'List item',
  },
} satisfies Meta<typeof UnorderedListItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultUnorderedListItem: Story = {};
