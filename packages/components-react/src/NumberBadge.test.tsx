import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import { NumberBadge } from './NumberBadge';

describe('numberBadge', () => {
  it('renders a visible element', () => {
    const { container } = render(<NumberBadge />);

    const numberBadge = container.querySelector(':only-child');

    expect(numberBadge).toBeInTheDocument();
    expect(numberBadge).toBeVisible();
  });
  it('renders a visible element with a number', () => {
    render(<NumberBadge data-testid="test-id">5</NumberBadge>);
    expect(screen.getByTestId('test-id').textContent).toBe('5');
  });
  it('render value en children', () => {
    render(
      <NumberBadge data-testid="test-id" value={'5555'}>
        5,555
      </NumberBadge>,
    );
    expect(screen.getByTestId('test-id').textContent).toBe('5,555');
    expect(screen.getByTestId('test-id').getAttribute('value')).toBe('5555');
  });
});
