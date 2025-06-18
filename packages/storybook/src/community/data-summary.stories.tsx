import { DataSummary, DataSummaryItem } from '@rijkshuisstijl-community/components-react';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Rijkshuisstijl/DataSummary',
  id: 'rhc-dataSummary',
  component: DataSummary,
  parameters: {
    status: { type: 'UNSTABLE' },
    componentOrigin: 'Dit component is ontwikkeld door de Rijkshuisstijl community.',
    github:
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/DataSummary.tsx',
  },
  args: {
    children: '',
    appearance: 'column',
  },
  argTypes: {
    appearance: {
      control: 'select',
      options: ['column', 'row'],
    },
  },
  render: (args) => <DataSummary {...args} />,
} satisfies Meta<typeof DataSummary>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: [
      <>
        <DataSummaryItem actionLabel="Action" href="#" itemKey="Key" itemValue="Value" />
        <DataSummaryItem actionLabel="Action" href="#" itemKey="Key" itemValue="Value" />
        <DataSummaryItem actionLabel="Action" href="#" itemKey="Key" itemValue="Value" />
      </>,
    ],
  },
};
