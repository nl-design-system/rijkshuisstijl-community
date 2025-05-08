import '@testing-library/jest-dom/vitest';
import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { Image } from './Image';

describe('Image', () => {
  it('renders a visible element', () => {
    const { container } = render(<Image alt="Multicolored tulip field" src="/placeholder.jpg" />);

    const image = container.querySelector(':only-child');

    expect(image).toBeInTheDocument();
    expect(image).toBeVisible();
  });

  it("doesn't render the image if alt is not given", () => {
    const { container } = render(<Image alt="" src="/placeholder.jpg" />);

    const image = container.querySelector('img');

    expect(image).not.toBeInTheDocument();
  });
});

afterEach(() => cleanup());
