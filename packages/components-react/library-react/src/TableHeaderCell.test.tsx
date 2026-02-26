import '@testing-library/jest-dom/vitest';
import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { TableHeaderCell } from './TableHeaderCell';
import type { TableHeaderCellProps } from './TableHeaderCell';

const TableHeaderCellInTable = (props: TableHeaderCellProps) => (
  <table>
    <thead>
      <tr>
        <TableHeaderCell {...props} />
      </tr>
    </thead>
  </table>
);

describe('TableHeaderCell', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<TableHeaderCellInTable>Label</TableHeaderCellInTable>);
    expect(getByText('Label')).toBeInTheDocument();
  });

  it('applies correct text alignment when align="right"', () => {
    const { container } = render(<TableHeaderCellInTable alignCell="end">Aligned Right</TableHeaderCellInTable>);
    expect(container.querySelector('th')).toHaveStyle('text-align: end');
  });

  it('applies correct text alignment when align="center"', () => {
    const { container } = render(<TableHeaderCellInTable alignCell="center">Aligned Center</TableHeaderCellInTable>);
    expect(container.querySelector('th')).toHaveStyle('text-align: center');
  });

  it('applies correct text alignment when align="left"', () => {
    const { container } = render(<TableHeaderCellInTable alignCell="start">Aligned Left</TableHeaderCellInTable>);
    expect(container.querySelector('th')).toHaveStyle('text-align: start');
  });

  it('renders Button with sorting icon when withSorting is true and aria-sort is "ascending"', () => {
    const { container, getByText } = render(
      <TableHeaderCellInTable withSorting aria-sort="ascending">
        Sort Ascending
      </TableHeaderCellInTable>,
    );
    expect(getByText('Sort Ascending')).toBeInTheDocument();
    expect(container.querySelector('svg')).toBeInTheDocument(); // Checks if the icon is rendered
  });

  it('renders Button with descending icon when aria-sort is "descending"', () => {
    const { container, getByText } = render(
      <TableHeaderCellInTable withSorting aria-sort="descending">
        Sort Descending
      </TableHeaderCellInTable>,
    );
    expect(getByText('Sort Descending')).toBeInTheDocument();
    expect(container.querySelector('svg')).toBeInTheDocument(); // Checks if the icon is rendered
  });

  it('renders Button with default sort icon when aria-sort is not "ascending" or "descending"', () => {
    const { container, getByText } = render(
      <TableHeaderCellInTable withSorting aria-sort="other">
        Default Sort Icon
      </TableHeaderCellInTable>,
    );
    expect(getByText('Default Sort Icon')).toBeInTheDocument();
    expect(container.querySelector('svg')).toBeInTheDocument(); // Checks if the icon is rendered
  });

  it('renders children correctly when withSorting is false', () => {
    const { getByText } = render(<TableHeaderCellInTable withSorting={false}>No Sorting</TableHeaderCellInTable>);
    expect(getByText('No Sorting')).toBeInTheDocument();
  });

  it('applies the correct className when scope is "row"', () => {
    const { container } = render(<TableHeaderCellInTable scope="row">Row Scope</TableHeaderCellInTable>);
    expect(container.querySelector('th')).toHaveClass('utrecht-table__header--cell-row');
  });

  it('applies custom className correctly', () => {
    const { container } = render(
      <TableHeaderCellInTable className="custom-class">Custom Class</TableHeaderCellInTable>,
    );
    expect(container.querySelector('th')).toHaveClass('custom-class');
  });
});

afterEach(() => cleanup());
