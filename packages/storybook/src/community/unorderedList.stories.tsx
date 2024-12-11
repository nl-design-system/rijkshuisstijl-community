import { UnorderedList, UnorderedListItem } from '@rijkshuisstijl-community/components-react';
import { Meta, StoryObj } from '@storybook/react';
import readme from './unorderedList.md?raw';

const meta = {
  title: 'Rijkshuisstijl/Unordered List',
  id: 'rhc-unordered-list',
  component: UnorderedList,
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
} satisfies Meta<typeof UnorderedList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultUnorderedList: Story = {
  args: {
    children: [
      <UnorderedListItem key="li-1">List item 1</UnorderedListItem>,
      <UnorderedListItem key="li-2">List item 2</UnorderedListItem>,
      <UnorderedListItem key="li-3">List item 3</UnorderedListItem>,
    ],
  },
};

export const NestedUnorderedList: Story = {
  args: {
    children: [
      <UnorderedListItem key="li-4">List item 1</UnorderedListItem>,
      <UnorderedListItem key="li-5">
        List item 2
        <UnorderedList nested>
          <UnorderedListItem>Nested List item 1</UnorderedListItem>
          <UnorderedListItem>Nested List item 2</UnorderedListItem>
        </UnorderedList>
      </UnorderedListItem>,
      <UnorderedListItem key="li-6">List item 3</UnorderedListItem>,
    ],
  },
};
