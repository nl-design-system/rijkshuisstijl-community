import '@testing-library/jest-dom';

import { render } from '@testing-library/react';
import { FormFieldRadio } from '.';

describe('FormFieldRadio', () => {
  const defaultProps = {
    label: 'Test Label',
  };
  it('renders a visible element', () => {
    const { container } = render(<FormFieldRadio {...defaultProps} />);

    const formFieldRadio = container.querySelector(':only-child');

    expect(formFieldRadio).toBeInTheDocument();
    expect(formFieldRadio).toBeVisible();
  });
});
