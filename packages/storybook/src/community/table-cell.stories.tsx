import {
  Table,
  TableBody,
  TableCell as TableCellComponent,
  type TableCellProps,
  TableRow,
} from '@rijkshuisstijl-community/components-react';
import { Meta, StoryObj } from '@storybook/react';
import readme from './table-cell.md?raw';

const TableCell = ({ children, alignCell, ...restProps }: TableCellProps) => {
  return (
    <Table>
      <TableBody>
        <TableRow>
          <TableCellComponent alignCell={alignCell} {...restProps}>
            {children}
          </TableCellComponent>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default {
  title: 'Rijkshuisstijl/Table/Table Cell',
  id: 'rhc-table-cell',
  component: TableCell,
  tags: ['autodocs'],
  argTypes: {
    alignCell: {
      options: ['start', 'end', 'center'],
      control: { type: 'select' },
    },
  },
  render: (args) => <TableCell {...args} />,
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
} satisfies Meta<typeof TableCell>;

type Story = StoryObj<typeof TableCell>;

export const Default: Story = {
  args: {
    children: 'Label',
    alignCell: 'start',
  },
};
