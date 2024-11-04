import '@testing-library/jest-dom';

import { render } from '@testing-library/react';
import { FormField } from '.';

describe('FormField', () => {
  it('renders a visible element', () => {
    const { container } = render(<FormField />);

    const formField = container.querySelector(':only-child');

    expect(formField).toBeInTheDocument();
    expect(formField).toBeVisible();
  });
});
