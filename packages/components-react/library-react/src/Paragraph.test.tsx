import '@testing-library/jest-dom/vitest';
import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { Paragraph } from '.';

describe('Paragraph', () => {
  it('renders a visible element', () => {
    const { container } = render(<Paragraph />);

    const paragraph = container.querySelector(':only-child');

    expect(paragraph).toBeInTheDocument();
    expect(paragraph).toBeVisible();
  });
});

afterEach(() => cleanup());
