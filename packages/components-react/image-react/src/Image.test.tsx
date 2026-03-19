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

  it("doesn't render the image if alt is not given and presentation is not true", () => {
    const { container } = render(<Image alt="" src="./placeholder.jpg" />);

    const image = container.querySelector('img');

    expect(image).not.toBeInTheDocument();
  });

  it('renders the image if alt is not given and presentation is true', () => {
    const { container } = render(<Image alt="" presentation={true} src="./placeholder.jpg" />);

    const image = container.querySelector('img');

    expect(image).toBeInTheDocument();
  });

  it('renders the image with an empty alt attribute if alt is not given and presentation is true', () => {
    const { container } = render(<Image alt="" presentation={true} src="./placeholder.jpg" />);

    const image = container.querySelector('img');

    expect(image).toHaveAttribute('alt', '');
  });

  it('renders the image with given alt attribute', () => {
    const { container } = render(<Image alt="Hello World" src="./placeholder.jpg" />);

    const image = container.querySelector('img');

    expect(image).toHaveAttribute('alt', 'Hello World');
  });
});

afterEach(() => cleanup());
