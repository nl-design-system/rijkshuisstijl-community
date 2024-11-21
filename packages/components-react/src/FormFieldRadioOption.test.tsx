import '@testing-library/jest-dom';

import { render } from '@testing-library/react';
import { FormFieldRadioOption } from '.';

describe('FormFieldRadioOption', () => {
  const defaultProps = {
    label: 'Test Label',
  };
  it('renders a visible element', () => {
    const { container } = render(<FormFieldRadioOption {...defaultProps} />);

    const formFieldRadioOption = container.querySelector(':only-child');

    expect(formFieldRadioOption).toBeInTheDocument();
    expect(formFieldRadioOption).toBeVisible();
  });
});
