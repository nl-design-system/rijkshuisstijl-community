import {
  Link,
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
    children: [
      <TableHeader>
        <TableRow>
          <TableHeaderCell scope="col">Header</TableHeaderCell>
          <TableHeaderCell scope="col">Header</TableHeaderCell>
          <TableHeaderCell scope="col">Header</TableHeaderCell>
          <TableHeaderCell scope="col">Header</TableHeaderCell>
        </TableRow>
      </TableHeader>,

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
      </TableBody>,
    ],
  },
};

export const Caption: Story = {
  args: {
    children: [
      <TableCaption> Caption</TableCaption>,
      <TableHeader>
        <TableRow>
          <TableHeaderCell scope="col">Header</TableHeaderCell>
          <TableHeaderCell scope="col">Header</TableHeaderCell>
          <TableHeaderCell scope="col">Header</TableHeaderCell>
          <TableHeaderCell scope="col">Header</TableHeaderCell>
        </TableRow>
      </TableHeader>,

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
      </TableBody>,
    ],
  },
};

export const Footer: Story = {
  args: {
    children: [
      <TableCaption> footer</TableCaption>,
      <TableHeader>
        <TableRow>
          <TableHeaderCell scope="col">Header</TableHeaderCell>
          <TableHeaderCell scope="col">Header</TableHeaderCell>
          <TableHeaderCell scope="col">Header</TableHeaderCell>
        </TableRow>
      </TableHeader>,

      <TableBody>
        <TableRow>
          <TableCell>Label</TableCell>
          <TableCell>Label</TableCell>
          <TableCell>Label</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Label</TableCell>
          <TableCell>Label</TableCell>
          <TableCell>Label</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Label</TableCell>
          <TableCell>Label</TableCell>
          <TableCell>Label</TableCell>
        </TableRow>
      </TableBody>,
      <TableFooter>
        <TableRow>
          <TableCell>Footer</TableCell>
          <TableCell>Footer</TableCell>
          <TableCell>Footer</TableCell>
        </TableRow>
      </TableFooter>,
    ],
  },
};
export const Sorting: Story = {
  args: {
    children: [
      <TableCaption>Soorten</TableCaption>,
      <TableHeader>
        <TableRow>
          <TableHeaderCell withSorting aria-sort={'none'} scope="col">
            Header
          </TableHeaderCell>
          <TableHeaderCell scope="col">Header</TableHeaderCell>
          <TableHeaderCell scope="col">Header</TableHeaderCell>
          <TableHeaderCell scope="col">Header</TableHeaderCell>
        </TableRow>
      </TableHeader>,

      <TableBody>
        <TableRow>
          <TableHeaderCell scope={'row'}>Label-1</TableHeaderCell>
          <TableCell>Label</TableCell>
          <TableCell>Label</TableCell>
          <TableCell>Label</TableCell>
        </TableRow>
        <TableRow>
          <TableHeaderCell scope={'row'}>Label-2</TableHeaderCell>
          <TableCell>Label</TableCell>
          <TableCell>Label</TableCell>
          <TableCell>Label</TableCell>
        </TableRow>
        <TableRow>
          <TableHeaderCell scope={'row'}>Label-3</TableHeaderCell>
          <TableCell>Label</TableCell>
          <TableCell>Label</TableCell>
          <TableCell>Label</TableCell>
        </TableRow>
      </TableBody>,
      <TableFooter>
        <TableRow>
          <TableCell>Footer</TableCell>
          <TableCell>Footer</TableCell>
          <TableCell>Footer</TableCell>
          <TableCell>Footer</TableCell>
        </TableRow>
      </TableFooter>,
    ],
  },
};
export const SortingDescending: Story = {
  args: {
    children: [
      <TableCaption>Soorten Descending</TableCaption>,
      <TableHeader>
        <TableRow>
          <TableHeaderCell withSorting aria-sort={'descending'} scope="col">
            Header
          </TableHeaderCell>
          <TableHeaderCell scope="col">Header</TableHeaderCell>
          <TableHeaderCell scope="col">Header</TableHeaderCell>
          <TableHeaderCell scope="col">Header</TableHeaderCell>
        </TableRow>
      </TableHeader>,

      <TableBody>
        <TableRow>
          <TableHeaderCell scope={'row'}>Label-3</TableHeaderCell>
          <TableCell>Label</TableCell>
          <TableCell>Label</TableCell>
          <TableCell>Label</TableCell>
        </TableRow>
        <TableRow>
          <TableHeaderCell scope={'row'}>Label-2</TableHeaderCell>
          <TableCell>Label</TableCell>
          <TableCell>Label</TableCell>
          <TableCell>Label</TableCell>
        </TableRow>
        <TableRow>
          <TableHeaderCell scope={'row'}>Label-1</TableHeaderCell>
          <TableCell>Label</TableCell>
          <TableCell>Label</TableCell>
          <TableCell>Label</TableCell>
        </TableRow>
      </TableBody>,
      <TableFooter>
        <TableRow>
          <TableCell>Footer</TableCell>
          <TableCell>Footer</TableCell>
          <TableCell>Footer</TableCell>
          <TableCell>Footer</TableCell>
        </TableRow>
      </TableFooter>,
    ],
  },
};
export const SortingAscending: Story = {
  args: {
    children: (
      <>
        <TableCaption>Soorten Ascending</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHeaderCell withSorting aria-sort={'ascending'} scope="col">
              Header
            </TableHeaderCell>
            <TableHeaderCell scope="col">Header</TableHeaderCell>
            <TableHeaderCell scope="col">Header</TableHeaderCell>
            <TableHeaderCell scope="col">Header</TableHeaderCell>
          </TableRow>
        </TableHeader>

        <TableBody>
          <TableRow>
            <TableHeaderCell scope={'row'}>Label-1</TableHeaderCell>
            <TableCell>Label</TableCell>
            <TableCell>Label</TableCell>
            <TableCell>Label</TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell scope={'row'}>Label-2</TableHeaderCell>
            <TableCell>Label</TableCell>
            <TableCell>Label</TableCell>
            <TableCell>Label</TableCell>
          </TableRow>
          <TableRow>
            <TableHeaderCell scope={'row'}>Label-3</TableHeaderCell>
            <TableCell>Label</TableCell>
            <TableCell>Label</TableCell>
            <TableCell>Label</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell>Footer</TableCell>
            <TableCell>Footer</TableCell>
            <TableCell>Footer</TableCell>
            <TableCell>Footer</TableCell>
          </TableRow>
        </TableFooter>
      </>
    ),
  },
};

export const Alignment: Story = {
  args: {
    children: [
      <TableCaption>Alignment</TableCaption>,
      <TableHeader>
        <TableRow>
          <TableHeaderCell scope="col">Header</TableHeaderCell>
          <TableHeaderCell scope="col">Header</TableHeaderCell>
          <TableHeaderCell scope="col">Header</TableHeaderCell>
          <TableHeaderCell scope="col" align={'right'}>
            Header
          </TableHeaderCell>
        </TableRow>
      </TableHeader>,
      <TableBody>
        <TableRow>
          <TableCell>Label</TableCell>
          <TableCell>Label</TableCell>
          <TableCell>Label</TableCell>
          <TableCell align={'right'}>Label</TableCell>
        </TableRow>{' '}
        <TableRow>
          <TableCell>Label</TableCell>
          <TableCell>Label</TableCell>
          <TableCell>Label</TableCell>
          <TableCell align={'right'}>Label</TableCell>
        </TableRow>{' '}
        <TableRow>
          <TableCell>Label</TableCell>
          <TableCell>Label</TableCell>
          <TableCell>Label</TableCell>
          <TableCell align={'right'}>Label</TableCell>
        </TableRow>
      </TableBody>,
    ],
  },
};

export const Content: Story = {
  args: {
    children: [
      <TableCaption>Content</TableCaption>,
      <TableHeader>
        <TableRow>
          <TableHeaderCell scope="col">Header</TableHeaderCell>
          <TableHeaderCell scope="col">Header</TableHeaderCell>
          <TableHeaderCell scope="col">Header</TableHeaderCell>
          <TableHeaderCell scope="col">Header</TableHeaderCell>
        </TableRow>
      </TableHeader>,
      <TableBody>
        <TableRow>
          <TableCell>
            <Link href={'#'}>Label</Link>
          </TableCell>
          <TableCell>Label</TableCell>
          <TableCell>Label</TableCell>
          <TableCell>Label</TableCell>
        </TableRow>{' '}
        <TableRow>
          <TableCell>
            <Link href={'#'}>Label</Link>
          </TableCell>
          <TableCell>Label</TableCell>
          <TableCell>Label</TableCell>
          <TableCell>Label</TableCell>
        </TableRow>{' '}
        <TableRow>
          <TableCell>
            <Link href={'#'}>Label</Link>
          </TableCell>
          <TableCell>Label</TableCell>
          <TableCell>Label</TableCell>
          <TableCell>Label</TableCell>
        </TableRow>
      </TableBody>,
    ],
  },
};
