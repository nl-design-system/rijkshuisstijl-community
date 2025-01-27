import '@testing-library/jest-dom';

import { render } from '@testing-library/react';
import { Heading } from '.';

describe('Heading', () => {
  it('renders a visible element', () => {
    const { container } = render(<Heading level={1} />);

    const heading = container.querySelector(':only-child');

    expect(heading).toBeInTheDocument();
    expect(heading).toBeVisible();
  });
});
