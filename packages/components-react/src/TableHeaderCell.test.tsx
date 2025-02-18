import '@testing-library/jest-dom/vitest';
import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { TableHeaderCell } from './TableHeaderCell';

describe('TableHeaderCell', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<TableHeaderCell>Label</TableHeaderCell>);
    expect(getByText('Label')).toBeInTheDocument();
  });

  it('applies correct text alignment when align="right"', () => {
    const { container } = render(<TableHeaderCell alignCell="end">Aligned Right</TableHeaderCell>);
    expect(container.firstChild).toHaveStyle('text-align: end');
  });

  it('applies correct text alignment when align="center"', () => {
    const { container } = render(<TableHeaderCell alignCell="center">Aligned Center</TableHeaderCell>);
    expect(container.firstChild).toHaveStyle('text-align: center');
  });

  it('applies correct text alignment when align="left"', () => {
    const { container } = render(<TableHeaderCell alignCell="start">Aligned Left</TableHeaderCell>);
    expect(container.firstChild).toHaveStyle('text-align: start');
  });

  it('renders Button with sorting icon when withSorting is true and aria-sort is "ascending"', () => {
    const { container, getByText } = render(
      <TableHeaderCell withSorting aria-sort="ascending">
        Sort Ascending
      </TableHeaderCell>,
    );
    expect(getByText('Sort Ascending')).toBeInTheDocument();
    expect(container.querySelector('svg')).toBeInTheDocument(); // Checks if the icon is rendered
  });

  it('renders Button with descending icon when aria-sort is "descending"', () => {
    const { container, getByText } = render(
      <TableHeaderCell withSorting aria-sort="descending">
        Sort Descending
      </TableHeaderCell>,
    );
    expect(getByText('Sort Descending')).toBeInTheDocument();
    expect(container.querySelector('svg')).toBeInTheDocument(); // Checks if the icon is rendered
  });

  it('renders Button with default sort icon when aria-sort is not "ascending" or "descending"', () => {
    const { container, getByText } = render(
      <TableHeaderCell withSorting aria-sort="other">
        Default Sort Icon
      </TableHeaderCell>,
    );
    expect(getByText('Default Sort Icon')).toBeInTheDocument();
    expect(container.querySelector('svg')).toBeInTheDocument(); // Checks if the icon is rendered
  });

  it('renders children correctly when withSorting is false', () => {
    const { getByText } = render(<TableHeaderCell withSorting={false}>No Sorting</TableHeaderCell>);
    expect(getByText('No Sorting')).toBeInTheDocument();
  });

  it('applies the correct className when scope is "row"', () => {
    const { container } = render(<TableHeaderCell scope="row">Row Scope</TableHeaderCell>);
    expect(container.firstChild).toHaveClass('utrecht-table__header--cell-row');
  });

  it('applies custom className correctly', () => {
    const { container } = render(<TableHeaderCell className="custom-class">Custom Class</TableHeaderCell>);
    expect(container.firstChild).toHaveClass('custom-class');
  });
});

afterEach(() => cleanup());
