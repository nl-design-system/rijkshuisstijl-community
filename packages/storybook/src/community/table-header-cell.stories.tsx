import {
  Table,
  TableHeader,
  TableHeaderCell as TableHeaderCellComponent,
  TableHeaderCellProps,
  TableRow,
} from '@rijkshuisstijl-community/components-react';
import { Meta, StoryObj } from '@storybook/react';
import readme from './table-header-cell.md?raw';

const TableHeaderCell = ({ children, withSorting, align, scope, ...restProps }: TableHeaderCellProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHeaderCellComponent {...restProps} align={align} scope={scope} withSorting={withSorting}>
            {children}
          </TableHeaderCellComponent>
        </TableRow>
      </TableHeader>
    </Table>
  );
};

const meta = {
  title: 'Rijkshuisstijl/Table/Table Header Cell',
  id: 'rijkshuisstijl-table-header-cell',
  component: TableHeaderCell,
  tags: ['autodocs'],
  argTypes: {
    withSorting: {
      type: 'boolean',
    },
    'aria-sort': {
      options: ['ascending', 'descending', 'none'],
      control: { type: 'select' },
    },
    scope: {
      options: ['row', 'col'],
      control: { type: 'select' },
    },
    align: {
      options: ['left', 'right', 'center'],
      control: { type: 'select' },
    },
  },
  render: (args) => <TableHeaderCell {...args} />,
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof TableHeaderCell>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Label',
    scope: 'col',
    withSorting: false,
    align: 'left',
  },
};
