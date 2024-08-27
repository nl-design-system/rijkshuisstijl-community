import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TableCell } from './TableCell';
describe('TableCell', () => {
  test('renders without crashing', () => {
    const { getByText } = render(<TableCell>Label</TableCell>);
    expect(getByText('Label')).toBeInTheDocument();
  });

  test('applies correct text alignment when align="right"', () => {
    const { container } = render(<TableCell align="right">Aligned Right</TableCell>);
    expect(container.firstChild).toHaveStyle('text-align: right');
  });

  test('applies correct text alignment when align="center"', () => {
    const { container } = render(<TableCell align="center">Aligned Center</TableCell>);
    expect(container.firstChild).toHaveStyle('text-align: center');
  });

  test('applies correct text alignment when align="left"', () => {
    const { container } = render(<TableCell align="left">Aligned Left</TableCell>);
    expect(container.firstChild).toHaveStyle('text-align: left');
  });

  test('defaults to no specific text alignment if align is not provided', () => {
    const { container } = render(<TableCell>No Align Prop</TableCell>);
    expect(container.firstChild).not.toHaveStyle('text-align: right');
    expect(container.firstChild).not.toHaveStyle('text-align: center');
    expect(container.firstChild).not.toHaveStyle('text-align: left');
  });

  test('renders children correctly', () => {
    const { getByText } = render(<TableCell>Children</TableCell>);
    expect(getByText('Children')).toBeInTheDocument();
  });
});
