import '@testing-library/jest-dom/vitest';
import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { Blockquote } from '.';

describe('Blockquote', () => {
  it('renders a visible element', () => {
    const { container } = render(<Blockquote>Citaat</Blockquote>);

    const blockquote = container.firstElementChild;

    expect(blockquote).toBeInTheDocument();
    expect(blockquote).toBeVisible();
  });

  it('renders the attribution', () => {
    const { getByText } = render(<Blockquote attribution="Pippi Langkous">Citaat</Blockquote>);

    expect(getByText('Pippi Langkous')).toBeVisible();
  });

  it('merges a custom class name with the rhc class name', () => {
    const { container } = render(<Blockquote className="rhc-rounded-corner">Citaat</Blockquote>);

    const blockquote = container.firstElementChild;

    expect(blockquote).toHaveClass('rhc-blockquote', 'rhc-rounded-corner');
  });
});

afterEach(() => cleanup());
