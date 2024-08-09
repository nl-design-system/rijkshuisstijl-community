import { UnorderedList, UnorderedListItem } from '@rijkshuisstijl-community/components-react';
import { Meta, StoryObj } from '@storybook/react';
import readme from './unorderedlist.md?raw';

const meta = {
  title: 'Rijkshuisstijl/Unordered List',
  id: 'rijkshuisstijl-unorderedList',
  component: UnorderedList,
  args: {
    children: [
      <UnorderedListItem>List item 1</UnorderedListItem>,
      <UnorderedListItem>List item 2</UnorderedListItem>,
      <UnorderedListItem>List item 3</UnorderedListItem>,
    ],
  },
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof UnorderedList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultUnorderedList: Story = {};
