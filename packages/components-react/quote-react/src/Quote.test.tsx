import '@testing-library/jest-dom/vitest';
import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { Quote } from '.';

describe('Quote', () => {
  it('renders a visible element with the rhc class name', () => {
    const { container } = render(<Quote>Citaat</Quote>);

    const quote = container.firstElementChild;

    expect(quote).toBeInTheDocument();
    expect(quote).toBeVisible();
    expect(quote).toHaveClass('rhc-quote');
  });

  it('renders the heading when provided', () => {
    const { getByRole } = render(<Quote heading="Lintblauw">Citaat</Quote>);

    expect(getByRole('heading', { name: 'Lintblauw' })).toBeVisible();
  });

  it('renders the children as body content', () => {
    const { getByText } = render(<Quote>Citaattekst</Quote>);

    expect(getByText('Citaattekst')).toBeVisible();
  });

  it('merges a custom class name with the rhc class name', () => {
    const { container } = render(<Quote className="custom">Citaat</Quote>);

    const quote = container.firstElementChild;

    expect(quote).toHaveClass('rhc-quote', 'custom');
  });
});

afterEach(() => cleanup());
