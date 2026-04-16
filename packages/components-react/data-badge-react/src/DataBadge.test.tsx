import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { DataBadge } from './DataBadge';

describe('DataBadge', () => {
  it('renders without crashing', () => {
    render(<DataBadge label={'test'} />);
    const dataBadge = screen.getByRole('status');
    expect(dataBadge).toBeInTheDocument();
  });

  it('applies correct screen reader label', () => {
    render(<DataBadge label={'test'} />);
    const dataBadge = screen.getByTestId('rhc-data-badge__sr-label');
    expect(dataBadge).toHaveTextContent('test');
  });

  it('applies correct role', () => {
    render(<DataBadge label={'test'} role={'status'} />);
    const dataBadge = screen.getByRole('status');
    expect(dataBadge).toHaveAttribute('role', 'status');
  });
});

afterEach(() => cleanup());
