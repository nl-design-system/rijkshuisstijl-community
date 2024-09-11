import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TableCell } from './TableCell';
describe('TableCell', () => {
  test('renders without crashing', () => {
    const { getByText } = render(<TableCell>Label</TableCell>);
    expect(getByText('Label')).toBeInTheDocument();
  });

  test('applies correct text alignment when align="end"', () => {
    const { container } = render(<TableCell alignCell="end">Aligned Right</TableCell>);
    expect(container.firstChild).toHaveStyle('text-align: end');
  });

  test('applies correct text alignment when align="center"', () => {
    const { container } = render(<TableCell alignCell="center">Aligned Center</TableCell>);
    expect(container.firstChild).toHaveStyle('text-align: center');
  });

  test('applies correct text alignment when align="left"', () => {
    const { container } = render(<TableCell alignCell="start">Aligned Left</TableCell>);
    expect(container.firstChild).toHaveStyle('text-align: start');
  });

  test('defaults to no specific text alignment if align is not provided', () => {
    const { container } = render(<TableCell>No Align Prop</TableCell>);
    expect(container.firstChild).not.toHaveStyle('text-align: end');
    expect(container.firstChild).not.toHaveStyle('text-align: center');
    expect(container.firstChild).not.toHaveStyle('text-align: start');
  });

  test('renders children correctly', () => {
    const { getByText } = render(<TableCell>Children</TableCell>);
    expect(getByText('Children')).toBeInTheDocument();
  });
});
