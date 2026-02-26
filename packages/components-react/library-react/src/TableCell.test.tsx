import '@testing-library/jest-dom/vitest';
import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { TableCell } from './TableCell';
import type { TableCellProps } from './TableCell';

const TableCellInTable = (props: TableCellProps) => (
  <table>
    <tbody>
      <tr>
        <TableCell {...props} />
      </tr>
    </tbody>
  </table>
);

describe('TableCell', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<TableCellInTable>Label</TableCellInTable>);
    expect(getByText('Label')).toBeInTheDocument();
  });

  it('applies correct text alignment when align="end"', () => {
    const { container } = render(<TableCellInTable alignCell="end">Aligned Right</TableCellInTable>);
    expect(container.querySelector('td')).toHaveStyle('text-align: end');
  });

  it('applies correct text alignment when align="center"', () => {
    const { container } = render(<TableCellInTable alignCell="center">Aligned Center</TableCellInTable>);
    expect(container.querySelector('td')).toHaveStyle('text-align: center');
  });

  it('applies correct text alignment when align="left"', () => {
    const { container } = render(<TableCellInTable alignCell="start">Aligned Left</TableCellInTable>);
    expect(container.querySelector('td')).toHaveStyle('text-align: start');
  });

  it('defaults to no specific text alignment if align is not provided', () => {
    const { container } = render(<TableCellInTable>No Align Prop</TableCellInTable>);
    expect(container.querySelector('td')).not.toHaveStyle('text-align: end');
    expect(container.querySelector('td')).not.toHaveStyle('text-align: center');
    expect(container.querySelector('td')).not.toHaveStyle('text-align: start');
  });

  it('renders children correctly', () => {
    const { getByText } = render(<TableCellInTable>Children</TableCellInTable>);
    expect(getByText('Children')).toBeInTheDocument();
  });
});

afterEach(() => cleanup());
