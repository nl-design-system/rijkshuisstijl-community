import { DataSummary, DataSummaryItem } from '@rijkshuisstijl-community/components-react';
import { Meta, StoryObj } from '@storybook/react';
import readme from './data-summary.md?raw';
import { mergeMarkdown } from '../../helpers/merge-markdown';

const meta = {
  title: 'Rijkshuisstijl/DataSummary',
  id: 'rhc-dataSummary',
  component: DataSummary,
  parameters: {
    status: { type: 'UNSTABLE' },
    componentOrigin: 'Dit component is volledig ontwikkeld door de Rijkshuisstijl Community.',
    github:
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/DataSummary.tsx',
    figma:
      'https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NL-Design-System----Bibliotheek---Rijkshuisstijl?node-id=1292-5261&t=RAE0WsEKAYTnA7gU-0',
    nldesignsystem: 'https://www.nldesignsystem.nl/data-summary/',
    docs: {
      description: {
        component: mergeMarkdown([readme]),
      },
    },
  },
  args: {
    appearance: 'column',
    children: [
      <>
        <DataSummaryItem actionLabel="Action" href="#" itemKey="Key" itemValue="Value" />
        <DataSummaryItem actionLabel="Action" href="#" itemKey="Key" itemValue="Value" />
        <DataSummaryItem actionLabel="Action" href="#" itemKey="Key" itemValue="Value" />
      </>,
    ],
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

export const Default: Story = {};

export const Rows: Story = {
  args: {
    appearance: 'row',
  },
};

export const NoActions: Story = {
  args: {
    appearance: 'row',
    children: [
      <>
        <DataSummaryItem itemKey="Key" itemValue="Value" />
        <DataSummaryItem itemKey="Key" itemValue="Value" />
        <DataSummaryItem itemKey="Key" itemValue="Value" />
      </>,
    ],
  },
};

export const NoActionsColumn: Story = {
  args: {
    appearance: 'column',
    children: [
      <>
        <DataSummaryItem itemKey="Key" itemValue="Value" />
        <DataSummaryItem itemKey="Key" itemValue="Value" />
        <DataSummaryItem itemKey="Key" itemValue="Value" />
      </>,
    ],
  },
};
