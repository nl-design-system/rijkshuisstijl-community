import { DataSummary, DataSummaryItem } from '@rijkshuisstijl-community/components-react';
import { Meta, StoryObj } from '@storybook/react';
import readme from './data-summary-item.md?raw';
import { mergeMarkdown } from '../../helpers/merge-markdown';

const meta = {
  title: 'Rijkshuisstijl/Data Summary Item',
  id: 'rhc-data-summary-item',
  component: DataSummaryItem,
  parameters: {
    status: { type: 'UNSTABLE' },
    componentOrigin: 'Dit component is volledig ontwikkeld door de Rijkshuisstijl Community.',
    github:
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/DataSummaryItem.tsx',
    docs: {
      description: {
        component: mergeMarkdown([readme]),
      },
    },
  },
  args: {
    itemKey: 'Soort',
    itemValue: 'Reuzenpanda',
    href: '#',
    target: '_self',
  },
  argTypes: {
    target: {
      control: 'select',
      options: ['_self', '_blank', '_parent', '_top', '_unfencedTop'],
    },
  },
  render: (args) => (
    <DataSummary appearance="column">
      <DataSummaryItem {...args}>Lees meer over de Reuzenpanda</DataSummaryItem>
    </DataSummary>
  ),
} satisfies Meta<typeof DataSummaryItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Row: Story = {
  render: (args) => (
    <DataSummary appearance="row">
      <DataSummaryItem {...args}>Lees meer over de Reuzenpanda</DataSummaryItem>
    </DataSummary>
  ),
};
