import '@testing-library/jest-dom';

import { render } from '@testing-library/react';
import { Image } from '.';

describe('Image', () => {
  it('renders a visible element', () => {
    const { container } = render(<Image />);

    const image = container.querySelector(':only-child');

    expect(image).toBeInTheDocument();
    expect(image).toBeVisible();
  });
});
