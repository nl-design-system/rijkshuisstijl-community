import '@testing-library/jest-dom';

import { render } from '@testing-library/react';
import { FormField } from '.';

describe('FormField', () => {
  const defaultProps = {
    label: 'Test Label',
    description: 'Test Description',
    errorMessage: 'Test Error Message',
    input: <input data-testid="form-input" />,
    status: 'Test Status',
    invalid: true,
    statusId: 'status-id',
    errorMessageId: 'error-message-id',
    descriptionId: 'description-id',
    id: 'test-id',
  };
  it('renders a visible element', () => {
    const { container } = render(<FormField {...defaultProps} />);

    const formField = container.querySelector(':only-child');

    expect(formField).toBeInTheDocument();
    expect(formField).toBeVisible();
  });
});
