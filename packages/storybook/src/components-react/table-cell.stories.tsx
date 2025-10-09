import {
  Table,
  TableBody,
  TableCell as TableCellComponent,
  type TableCellProps,
  TableRow,
} from '@rijkshuisstijl-community/components-react';
import { Meta, StoryObj } from '@storybook/react';
import usage from './table-cell-usage.md?raw';
import { mergeMarkdown } from '../../helpers/merge-markdown';
import readme from '../documentation/components/table-cell.md?raw';

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
  title: 'Table/Table Cell',
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
        // TODO: restructure this, but not until readme is correctly structurized in the Utrecht documentation source
        component: mergeMarkdown([readme, usage]),
      },
    },
    figma:
      'https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?node-id=1561-6448&t=texUKkpCqzgFVuch-0',
    github:
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/TableCell.tsx',
    nldesignsystem: 'https://www.nldesignsystem.nl/table/',
    componentOrigin:
      'Dit component is overgenomen van de Gemeente Utrecht, met HTML aanpassingen en styling van de Rijkshuisstijl Community.',
  },
} satisfies Meta<typeof TableCell>;

type Story = StoryObj<typeof TableCell>;

export const Default: Story = {
  args: {
    children: 'Label',
    alignCell: 'start',
  },
};
