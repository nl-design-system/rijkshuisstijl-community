import '@testing-library/jest-dom/vitest';
import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { Root } from '.';

describe('Root', () => {
  it('renders a visible element', () => {
    const { container } = render(<Root Component="div" />);

    const root = container.querySelector(':only-child');

    expect(root).toBeInTheDocument();
    expect(root).toBeVisible();
  });
});

afterEach(() => cleanup());
