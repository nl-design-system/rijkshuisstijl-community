import {
  Table,
  TableBody,
  TableCell as TableCellComponent,
  TableRow,
} from '@rijkshuisstijl-community/components-react';
import { Meta, StoryObj } from '@storybook/react';
import readme from './table-cell.md?raw';

const TableCell = ({ children, align, ...restProps }: any) => {
  return (
    <Table>
      <TableBody>
        <TableRow>
          <TableCellComponent align={align} {...restProps}>
            {children}
          </TableCellComponent>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default {
  title: 'Rijkshuisstijl/Table/Table Cell',
  component: TableCell,
  tags: ['autodocs'],
  argTypes: {
    align: {
      options: ['left', 'right', 'center'],
      control: { type: 'select' },
    },
  },
  render: (args) => <TableCell {...args} />,
  parameters: {
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
    align: 'left',
  },
};
