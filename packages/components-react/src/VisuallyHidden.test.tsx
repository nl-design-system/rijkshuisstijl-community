import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { VisuallyHidden } from '.';

describe('VisuallyHidden', () => {
  it('renders a visible element', () => {
    render(
      <VisuallyHidden>
        <span>This text is hidden</span>
      </VisuallyHidden>,
    );

    const visuallyHiddenSpan = screen.getByText('This text is hidden');

    expect(visuallyHiddenSpan).toBeInTheDocument();
  });
});

afterEach(() => cleanup());
