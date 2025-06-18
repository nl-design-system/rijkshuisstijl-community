import { DataSummary, DataSummaryItem } from '@rijkshuisstijl-community/components-react';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Rijkshuisstijl/DataSummaryItem',
  id: 'rhc-dataSummaryItem',
  component: DataSummaryItem,
  parameters: {
    status: { type: 'UNSTABLE' },
    componentOrigin: 'Dit component is ontwikkeld door de Rijkshuisstijl community.',
    github:
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/DataSummaryItem.tsx',
  },
  args: {
    itemKey: 'Beest van Bodmin',
    itemValue: 'Een grote katachtige die voorkomt op Bodmin Moor.',
    href: '#',
    actionLabel: 'Lees meer over het Beest van Bodmin',
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
      <DataSummaryItem {...args} />
    </DataSummary>
  ),
} satisfies Meta<typeof DataSummaryItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
