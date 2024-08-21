import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from '@rijkshuisstijl-community/components-react';
import { Meta, StoryObj } from '@storybook/react';
import readme from './table.md?raw';

const meta = {
  title: 'Rijkshuisstijl/Table',
  id: 'rijkshuisstijl-table',
  component: Table,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: readme,
      },
    },
  },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Tabel: Story = {
  args: {
    children: (
      <>
        <TableHeader>
          <TableRow>
            <TableHeaderCell scope="col">Label</TableHeaderCell>
            <TableHeaderCell scope="col">Label</TableHeaderCell>
            <TableHeaderCell scope="col">Label</TableHeaderCell>
            <TableHeaderCell scope="col">Label</TableHeaderCell>
          </TableRow>
        </TableHeader>

        <TableBody>
          <TableRow>
            <TableCell>Label</TableCell>
            <TableCell>Label</TableCell>
            <TableCell>Label</TableCell>
            <TableCell>Label</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Label</TableCell>
            <TableCell>Label</TableCell>
            <TableCell>Label</TableCell>
            <TableCell>Label</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Label</TableCell>
            <TableCell>Label</TableCell>
            <TableCell>Label</TableCell>
            <TableCell>Label</TableCell>
          </TableRow>
        </TableBody>
      </>
    ),
  },
};

export const WithCaption: Story = {
  args: {
    children: (
      <>
        <TableCaption>With Caption</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHeaderCell scope="col">Label</TableHeaderCell>
            <TableHeaderCell scope="col">Label</TableHeaderCell>
            <TableHeaderCell scope="col">Label</TableHeaderCell>
            <TableHeaderCell scope="col">Label</TableHeaderCell>
          </TableRow>
        </TableHeader>

        <TableBody>
          <TableRow>
            <TableCell>Label</TableCell>
            <TableCell>Label</TableCell>
            <TableCell>Label</TableCell>
            <TableCell>Label</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Label</TableCell>
            <TableCell>Label</TableCell>
            <TableCell>Label</TableCell>
            <TableCell>Label</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Label</TableCell>
            <TableCell>Label</TableCell>
            <TableCell>Label</TableCell>
            <TableCell>Label</TableCell>
          </TableRow>
        </TableBody>
      </>
    ),
  },
};

export const WithFooter: Story = {
  args: {
    children: (
      <>
        <TableCaption>With footer</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHeaderCell scope="col">Label</TableHeaderCell>
            <TableHeaderCell scope="col">Label</TableHeaderCell>
            <TableHeaderCell scope="col">Label</TableHeaderCell>
            <TableHeaderCell scope="col">Label</TableHeaderCell>
          </TableRow>
        </TableHeader>

        <TableBody>
          <TableRow>
            <TableCell>Label</TableCell>
            <TableCell>Label</TableCell>
            <TableCell>Label</TableCell>
            <TableCell>Label</TableCell>
          </TableRow>{' '}
          <TableRow>
            <TableCell>Label</TableCell>
            <TableCell>Label</TableCell>
            <TableCell>Label</TableCell>
            <TableCell>Label</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell>Label</TableCell>
            <TableCell>Label</TableCell>
            <TableCell>Label</TableCell>
            <TableCell>Label</TableCell>
          </TableRow>
        </TableFooter>
      </>
    ),
  },
};

export const StickyHeader: Story = {
  args: {
    children: (
      <>
        <TableCaption>Sticky header</TableCaption>
        <TableHeader sticky>
          <TableRow>
            <TableHeaderCell scope="col">Label</TableHeaderCell>
            <TableHeaderCell scope="col">Label</TableHeaderCell>
            <TableHeaderCell scope="col">Label</TableHeaderCell>
            <TableHeaderCell scope="col">Label</TableHeaderCell>
          </TableRow>
        </TableHeader>

        <TableBody>
          <TableRow>
            <TableCell>Label</TableCell>
            <TableCell>Label</TableCell>
            <TableCell>Label</TableCell>
            <TableCell>Label</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Label</TableCell>
            <TableCell>Label</TableCell>
            <TableCell>Label</TableCell>
            <TableCell>Label</TableCell>
          </TableRow>
        </TableBody>
      </>
    ),
  },
};
