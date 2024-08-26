import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TableCell } from './TableCell';

describe('TableCell', () => {
  test('renders without crashing', () => {
    const { getByText } = render(<TableCell>Test Cell</TableCell>);
    expect(getByText('Test Cell')).toBeInTheDocument();
  });

  test('applies right align className when align="right"', () => {
    const { container } = render(<TableCell align="right">Right Aligned</TableCell>);
    expect(container.firstChild).toHaveClass('utrecht-table__cell-align-right');
  });

  test('applies center align className when align="center"', () => {
    const { container } = render(<TableCell align="center">Center Aligned</TableCell>);
    expect(container.firstChild).toHaveClass('utrecht-table__cell-align-center');
  });

  test('does not apply alignment className when align is not provided', () => {
    const { container } = render(<TableCell>No Align</TableCell>);
    expect(container.firstChild).not.toHaveClass('utrecht-table__cell-align-right');
    expect(container.firstChild).not.toHaveClass('utrecht-table__cell-align-center');
  });

  test('applies custom className when provided', () => {
    const { container } = render(<TableCell className="custom-class">Custom Class</TableCell>);
    expect(container.firstChild).toHaveClass('custom-class');
  });
});
