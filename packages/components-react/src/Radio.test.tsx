import '@testing-library/jest-dom/vitest';
import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { Radio } from '.';

describe('Radio', () => {
  it('renders a visible element', () => {
    const { container } = render(<Radio />);

    const radio = container.querySelector(':only-child');

    expect(radio).toBeInTheDocument();
    expect(radio).toBeVisible();
  });
});

afterEach(() => cleanup());
