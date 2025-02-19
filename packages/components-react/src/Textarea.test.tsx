import '@testing-library/jest-dom/vitest';
import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { Textarea } from '.';

describe('Textarea', () => {
  it('renders a visible element', () => {
    const { container } = render(<Textarea />);

    const textarea = container.querySelector(':only-child');

    expect(textarea).toBeInTheDocument();
    expect(textarea).toBeVisible();
  });
});

afterEach(() => cleanup());
