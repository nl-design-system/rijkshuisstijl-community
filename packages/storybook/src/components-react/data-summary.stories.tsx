import { DataSummary, DataSummaryItem, Icon } from '@rijkshuisstijl-community/components-react';
import { mergeMarkdown } from '@rijkshuisstijl-community/storybook-tooling/markdownUtils';
import { Meta, StoryObj } from '@storybook/react-vite';
import readme from './data-summary.md?raw';

const meta = {
  title: 'Data Summary',
  id: 'rhc-dataSummary',
  component: DataSummary,
  parameters: {
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
        <DataSummaryItem itemKey="Soort" itemValue="Reuzenpanda" />
        <DataSummaryItem href="#" itemKey="Rijk" itemValue="Animalia (Dieren)">
          Bekijk alle dieren
          <Icon icon="externe-link" />
        </DataSummaryItem>
        <DataSummaryItem itemKey="Klasse" itemValue="Mammalia (Zoogdieren)" />
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
        <DataSummaryItem itemKey="Soort" itemValue="Reuzenpanda" />
        <DataSummaryItem itemKey="Rijk" itemValue="Animalia (Dieren)" />
        <DataSummaryItem itemKey="Klasse" itemValue="Mammalia (Zoogdieren)" />
      </>,
    ],
  },
};

export const NoActionsColumn: Story = {
  args: {
    appearance: 'column',
    children: [
      <>
        <DataSummaryItem itemKey="Soort" itemValue="Reuzenpanda" />
        <DataSummaryItem itemKey="Rijk" itemValue="Animalia (Dieren)" />
        <DataSummaryItem itemKey="Klasse" itemValue="Mammalia (Zoogdieren)" />
      </>,
    ],
  },
};
