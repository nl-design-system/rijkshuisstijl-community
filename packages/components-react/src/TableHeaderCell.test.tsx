import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TableHeaderCell } from './TableHeaderCell';

describe('TableHeaderCell', () => {
  test('renders without crashing', () => {
    const { getByText } = render(<TableHeaderCell>Header Cell</TableHeaderCell>);
    expect(getByText('Header Cell')).toBeInTheDocument();
  });

  test('applies correct className based on scope', () => {
    const { container } = render(<TableHeaderCell scope="row">Header Cell</TableHeaderCell>);
    expect(container.firstChild).toHaveClass('utrecht-table__header--cell-row');
  });

  test('applies correct alignment className when align="right"', () => {
    const { container } = render(<TableHeaderCell align="right">Header Cell</TableHeaderCell>);
    expect(container.firstChild).toHaveClass('utrecht-table__header--cell-align-right');
  });

  test('applies correct alignment className when align="center"', () => {
    const { container } = render(<TableHeaderCell align="center">Header Cell</TableHeaderCell>);
    expect(container.firstChild).toHaveClass('utrecht-table__header--cell-align-center');
  });

  test('renders sorting button with correct icon when withSorting is true and aria-sort is "ascending"', () => {
    const { container } = render(
      <TableHeaderCell withSorting aria-sort="ascending">
        Header Cell
      </TableHeaderCell>,
    );
    expect(container.querySelector('button')).toBeInTheDocument();
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  test('renders sorting button with correct icon when withSorting is true and aria-sort is "descending"', () => {
    const { container } = render(
      <TableHeaderCell withSorting aria-sort="descending">
        Header Cell
      </TableHeaderCell>,
    );
    expect(container.querySelector('button')).toBeInTheDocument();
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  test('renders sorting button with default sort icon when withSorting is true and aria-sort is not set', () => {
    const { container } = render(<TableHeaderCell withSorting>Header Cell</TableHeaderCell>);
    expect(container.querySelector('button')).toBeInTheDocument();
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  test('applies custom className when provided', () => {
    const { container } = render(<TableHeaderCell className="custom-class">Header Cell</TableHeaderCell>);
    expect(container.firstChild).toHaveClass('custom-class');
  });
});
