import {
  Table,
  TableHeader,
  TableHeaderCell as TableHeaderCellComponent,
  TableHeaderCellProps,
  TableRow,
} from '@rijkshuisstijl-community/components-react';
import { Meta, StoryObj } from '@storybook/react';
import readme from './table-header-cell.md?raw';
import { mergeMarkdown } from '../../helpers/merge-markdown';

const TableHeaderCell = ({ children, withSorting, alignCell, scope, ...restProps }: TableHeaderCellProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHeaderCellComponent {...restProps} alignCell={alignCell} scope={scope} withSorting={withSorting}>
            {children}
          </TableHeaderCellComponent>
        </TableRow>
      </TableHeader>
    </Table>
  );
};

const meta = {
  title: 'Table/Table Header Cell',
  id: 'rhc-table-header-cell',
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
    alignCell: {
      options: ['start', 'end', 'center'],
      control: { type: 'select' },
    },
  },
  render: (args) => <TableHeaderCell {...args} />,
  parameters: {
    status: {
      type: 'STABLE',
    },
    docs: {
      description: {
        // TODO: restructure this, but not until readme is correctly structurized in the Utrecht documentation source
        component: mergeMarkdown([readme]),
      },
    },
    figma:
      'https://www.figma.com/design/txFX5MGRf4O904dtIFcGTF/NLDS---Rijkshuisstijl---Bibliotheek?node-id=1561-6448&t=texUKkpCqzgFVuch-0',
    github:
      'https://github.com/nl-design-system/rijkshuisstijl-community/blob/main/packages/components-react/src/TableHeaderCell.tsx',
    nldesignsystem: 'https://www.nldesignsystem.nl/table/',
    componentOrigin:
      'Dit component is overgenomen van de Gemeente Utrecht, met HTML aanpassingen en styling van de Rijkshuisstijl Community.',
  },
} satisfies Meta<typeof TableHeaderCell>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Label',
    scope: 'col',
    withSorting: false,
    alignCell: 'start',
  },
};
