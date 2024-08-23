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
    children: (
      <>
        <TableHeader>
          <TableRow>
            <TableHeaderCell scope="col">Header</TableHeaderCell>
            <TableHeaderCell scope="col">Header</TableHeaderCell>
            <TableHeaderCell scope="col">Header</TableHeaderCell>
            <TableHeaderCell scope="col">Header</TableHeaderCell>
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

export const Caption: Story = {
  args: {
    children: (
      <>
        <TableCaption> Caption</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHeaderCell scope="col">Header</TableHeaderCell>
            <TableHeaderCell scope="col">Header</TableHeaderCell>
            <TableHeaderCell scope="col">Header</TableHeaderCell>
            <TableHeaderCell scope="col">Header</TableHeaderCell>
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

export const Footer: Story = {
  args: {
    children: (
      <>
        <TableCaption> footer</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHeaderCell scope="col">Header</TableHeaderCell>
            <TableHeaderCell scope="col">Header</TableHeaderCell>
            <TableHeaderCell scope="col">Header</TableHeaderCell>
          </TableRow>
        </TableHeader>

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
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell>Footer</TableCell>
            <TableCell>Footer</TableCell>
            <TableCell>Footer</TableCell>
          </TableRow>
        </TableFooter>
      </>
    ),
  },
};
export const Sorting: Story = {
  args: {
    children: (
      <>
        <TableCaption>Soorten</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHeaderCell withSorting aria-sort={'none'} scope="col">
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
  parameters: {
    docs: {
      description: {
        story: `Voor screen reader gebruikers is het belangrijk dat je de kolom kunt vinden waarop gesorteerd is, en dat je makkelijk vanuit die kolom naar de vorige of volgende rij kunt gaan om snel de relevante rij te vinden. Wanneer je informatie zoekt op een bepaalde datum dan is het belangrijk dat je met één druk op de knop naar de volgende datum kunt gaan, daarna nog een keer, enzovoorts`,
      },
    },
  },
};
export const SortingDescending: Story = {
  args: {
    children: (
      <>
        <TableCaption>Soorten Descending</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHeaderCell withSorting aria-sort={'descending'} scope="col">
              Header
            </TableHeaderCell>
            <TableHeaderCell scope="col">Header</TableHeaderCell>
            <TableHeaderCell scope="col">Header</TableHeaderCell>
            <TableHeaderCell scope="col">Header</TableHeaderCell>
          </TableRow>
        </TableHeader>

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
  parameters: {
    docs: {
      description: {
        story: `\`aria-sort="descending"\` voor "aflopende volgorde", bijvoorbeeld namen van Z naar A, ontvangen berichten van nieuw naar oud, bedragen en aantallen van groot naar klein`,
      },
    },
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
  parameters: {
    docs: {
      description: {
        story: `\`aria-sort="ascending"\` voor "oplopende volgorde", bijvoorbeeld namen van A tot Z (namen), van bedragen en aantallen van klein naar groot, geplande activiteiten van eerdere naar latere datums`,
      },
    },
  },
};

export const Alignment: Story = {
  args: {
    children: (
      <>
        <TableCaption>Alignment</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHeaderCell scope="col">Header</TableHeaderCell>
            <TableHeaderCell scope="col">Header</TableHeaderCell>
            <TableHeaderCell scope="col">Header</TableHeaderCell>
            <TableHeaderCell scope="col" align={'right'}>
              Header
            </TableHeaderCell>
          </TableRow>
        </TableHeader>
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
        </TableBody>
      </>
    ),
  },
};

export const Content: Story = {
  args: {
    children: (
      <>
        <TableCaption>Content</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHeaderCell scope="col">Header</TableHeaderCell>
            <TableHeaderCell scope="col">Header</TableHeaderCell>
            <TableHeaderCell scope="col">Header</TableHeaderCell>
            <TableHeaderCell scope="col">Header</TableHeaderCell>
          </TableRow>
        </TableHeader>
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
        </TableBody>
      </>
    ),
  },
};
