import '@testing-library/jest-dom/vitest';
import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { Figure } from '.';

describe('Figure', () => {
  it('renders a visible element', () => {
    const { container } = render(<Figure />);

    const figure = container.querySelector(':only-child');

    expect(figure).toBeInTheDocument();
    expect(figure).toBeVisible();
  });
});

afterEach(() => cleanup());
