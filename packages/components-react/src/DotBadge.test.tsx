import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { DotBadge } from './DotBadge';

describe('DotBadge', () => {
  it('renders without crashing', () => {
    render(<DotBadge aria-label={'test'} />);
    const dotBadge = screen.getByRole('status');
    expect(dotBadge).toBeInTheDocument();
  });
  it('applies correct aria-label', () => {
    render(<DotBadge aria-label={'test'} />);
    const dotBadge = screen.getByRole('status');
    expect(dotBadge).toHaveAttribute('aria-label', 'test');
  });
  it('applies correct role', () => {
    render(<DotBadge aria-label={'test'} role={'status'} />);
    const dotBadge = screen.getByRole('status');
    expect(dotBadge).toHaveAttribute('role', 'status');
  });
});
