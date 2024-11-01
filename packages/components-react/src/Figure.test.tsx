import '@testing-library/jest-dom';

import { render } from '@testing-library/react';
import { Figure } from '.';

describe('Figure', () => {
  it('renders a visible element', () => {
    const { container } = render(<Figure />);

    const figure = container.querySelector(':only-child');

    expect(figure).toBeInTheDocument();
    expect(figure).toBeVisible();
  });
});
