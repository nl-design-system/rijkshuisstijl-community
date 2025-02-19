import '@testing-library/jest-dom/vitest';
import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { Image } from '.';

describe('Image', () => {
  it('renders a visible element', () => {
    const { container } = render(<Image />);

    const image = container.querySelector(':only-child');

    expect(image).toBeInTheDocument();
    expect(image).toBeVisible();
  });
});

afterEach(() => cleanup());
