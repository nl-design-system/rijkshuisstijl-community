import '@testing-library/jest-dom';

import { render } from '@testing-library/react';
import { FormFieldRadioOption } from '.';

describe('FormFieldRadioOption', () => {
  it('renders a visible element', () => {
    const { container } = render(<FormFieldRadioOption />);

    const formFieldRadioOption = container.querySelector(':only-child');

    expect(formFieldRadioOption).toBeInTheDocument();
    expect(formFieldRadioOption).toBeVisible();
  });
});
