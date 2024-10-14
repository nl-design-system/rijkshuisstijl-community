import '@testing-library/jest-dom';

import { render } from '@testing-library/react';
import { TableHeaderCell } from './TableHeaderCell';

describe('TableHeaderCell', () => {
  test('renders without crashing', () => {
    const { getByText } = render(<TableHeaderCell>Label</TableHeaderCell>);
    expect(getByText('Label')).toBeInTheDocument();
  });

  test('applies correct text alignment when align="right"', () => {
    const { container } = render(<TableHeaderCell alignCell="end">Aligned Right</TableHeaderCell>);
    expect(container.firstChild).toHaveStyle('text-align: end');
  });

  test('applies correct text alignment when align="center"', () => {
    const { container } = render(<TableHeaderCell alignCell="center">Aligned Center</TableHeaderCell>);
    expect(container.firstChild).toHaveStyle('text-align: center');
  });

  test('applies correct text alignment when align="left"', () => {
    const { container } = render(<TableHeaderCell alignCell="start">Aligned Left</TableHeaderCell>);
    expect(container.firstChild).toHaveStyle('text-align: start');
  });

  test('renders Button with sorting icon when withSorting is true and aria-sort is "ascending"', () => {
    const { container, getByText } = render(
      <TableHeaderCell withSorting aria-sort="ascending">
        Sort Ascending
      </TableHeaderCell>,
    );
    expect(getByText('Sort Ascending')).toBeInTheDocument();
    expect(container.querySelector('svg')).toBeInTheDocument(); // Checks if the icon is rendered
  });

  test('renders Button with descending icon when aria-sort is "descending"', () => {
    const { container, getByText } = render(
      <TableHeaderCell withSorting aria-sort="descending">
        Sort Descending
      </TableHeaderCell>,
    );
    expect(getByText('Sort Descending')).toBeInTheDocument();
    expect(container.querySelector('svg')).toBeInTheDocument(); // Checks if the icon is rendered
  });

  test('renders Button with default sort icon when aria-sort is not "ascending" or "descending"', () => {
    const { container, getByText } = render(
      <TableHeaderCell withSorting aria-sort="other">
        Default Sort Icon
      </TableHeaderCell>,
    );
    expect(getByText('Default Sort Icon')).toBeInTheDocument();
    expect(container.querySelector('svg')).toBeInTheDocument(); // Checks if the icon is rendered
  });

  test('renders children correctly when withSorting is false', () => {
    const { getByText } = render(<TableHeaderCell withSorting={false}>No Sorting</TableHeaderCell>);
    expect(getByText('No Sorting')).toBeInTheDocument();
  });

  test('applies the correct className when scope is "row"', () => {
    const { container } = render(<TableHeaderCell scope="row">Row Scope</TableHeaderCell>);
    expect(container.firstChild).toHaveClass('utrecht-table__header--cell-row');
  });

  test('applies custom className correctly', () => {
    const { container } = render(<TableHeaderCell className="custom-class">Custom Class</TableHeaderCell>);
    expect(container.firstChild).toHaveClass('custom-class');
  });
});
