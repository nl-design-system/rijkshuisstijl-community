import '@testing-library/jest-dom';

import { render } from '@testing-library/react';
import { Radio } from '.';

describe('Radio', () => {
  it('renders a visible element', () => {
    const { container } = render(<Radio />);

    const radio = container.querySelector(':only-child');

    expect(radio).toBeInTheDocument();
    expect(radio).toBeVisible();
  });
});
