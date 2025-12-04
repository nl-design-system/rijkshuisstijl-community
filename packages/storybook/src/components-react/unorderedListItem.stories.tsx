import { UnorderedList, UnorderedListItem } from '@rijkshuisstijl-community/components-react';
import { mergeMarkdown } from '@rijkshuisstijl-community/storybook-tooling/markdownUtils';
import { Meta, StoryObj } from '@storybook/react-vite';
import readme from './unorderedListItem.md?raw';

const meta = {
  title: 'Unordered List/Unordered List Item',
  id: 'rhc-unorderedListItem',
  component: UnorderedListItem,
  decorators: [(Story) => <UnorderedList>{Story()}</UnorderedList>],
  args: {
    children: 'List item',
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
    // TODO: add Figma, GitHub and NL DesignSystem links
    componentOrigin:
      'Dit component is overgenomen van de Gemeente Utrecht, met styling van de Rijkshuisstijl Community.',
    github:
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/UnorderedListItem.tsx',
  },
} satisfies Meta<typeof UnorderedListItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultUnorderedListItem: Story = {};
