import { UnorderedList, UnorderedListItem } from '@rijkshuisstijl-community/components-react';
import { mergeMarkdown } from '@rijkshuisstijl-community/internal-tooling/markdownUtils';
import { Meta, StoryObj } from '@storybook/react-vite';
import readme from './unorderedList.md?raw';

const meta = {
  title: 'Unordered List',
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
        // TODO: restructure this, but not until readme is correctly structured in the Utrecht documentation source (including with usage and wcag documentation)
        component: mergeMarkdown([readme]),
      },
    },
    nldesignsystem: 'https://nldesignsystem.nl/unordered-list/',
    figma:
      'https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NL-Design-System----Bibliotheek---Rijkshuisstijl?node-id=828-920',
    componentOrigin:
      'Dit component is overgenomen van de Gemeente Utrecht, met HTML aanpassingen en styling van de Rijkshuisstijl Community.',
    github:
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/UnorderedList.tsx',
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
