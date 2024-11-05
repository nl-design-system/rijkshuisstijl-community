import '@testing-library/jest-dom';

import { render } from '@testing-library/react';
import { FormField } from '.';

describe('FormField', () => {
  const defaultProps = {
    label: 'Test Label',
    input: <input data-testid="form-input" />,
    statusId: 'status-id',
    errorMessageId: 'error-message-id',
    descriptionId: 'description-id',
  };
  it('renders a visible element', () => {
    const { container } = render(<FormField {...defaultProps} />);

    const formField = container.querySelector(':only-child');

    expect(formField).toBeInTheDocument();
    expect(formField).toBeVisible();
  });
});
