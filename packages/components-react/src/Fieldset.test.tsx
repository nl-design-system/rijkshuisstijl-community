import '@testing-library/jest-dom';

import { render } from '@testing-library/react';
import { Fieldset } from '.';

describe('Fieldset', () => {
  it('renders a visible element', () => {
    const { container } = render(<Fieldset />);

    const fieldset = container.querySelector(':only-child');

    expect(fieldset).toBeInTheDocument();
    expect(fieldset).toBeVisible();
  });
});
