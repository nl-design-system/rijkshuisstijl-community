import '@testing-library/jest-dom';

import { render } from '@testing-library/react';
import { FormFieldSelect } from '.';

describe('FormFieldSelect', () => {
  it('renders a visible element', () => {
    const { container } = render(<FormFieldSelect />);

    const formFieldSelect = container.querySelector(':only-child');

    expect(formFieldSelect).toBeInTheDocument();
    expect(formFieldSelect).toBeVisible();
  });
});
