import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { DotBadge } from './DotBadge';

describe('DotBadge', () => {
  it('renders without crashing', () => {
    render(<DotBadge label={'test'} />);
    const dotBadge = screen.getByRole('status');
    expect(dotBadge).toBeInTheDocument();
  });
  it('applies correct screen reader label', () => {
    render(<DotBadge label={'test'} />);
    const dotBadgeLabel = screen.getByTestId('rhc-dot-badge__sr-label');
    expect(dotBadgeLabel).toHaveTextContent('test');
  });
  it('applies correct role', () => {
    render(<DotBadge label={'test'} role={'status'} />);
    const dotBadge = screen.getByRole('status');
    expect(dotBadge).toHaveAttribute('role', 'status');
  });
});

afterEach(() => cleanup());
