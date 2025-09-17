import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
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

  it('renders the description when provided', () => {
    render(<FormField {...defaultProps} description="Test Description" />);
    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });

  it('does not render error message when valid', () => {
    render(<FormField {...defaultProps} errorMessage="Error occurred" invalid={false} />);
    expect(screen.queryByText('Error occurred')).not.toBeInTheDocument();
  });

  it('renders error message when invalid', () => {
    render(<FormField {...defaultProps} invalid errorMessage="Error occurred" />);
    expect(screen.getByText('Error occurred')).toBeInTheDocument();
    expect(screen.getByText('Error occurred')).toBeInstanceOf(HTMLDivElement);
  });

  it('renders status message when provided', () => {
    render(<FormField {...defaultProps} status="Status Message" />);
    expect(screen.getByText('Status Message')).toBeInTheDocument();
  });

  it('renders the input element inside the form field', () => {
    render(<FormField {...defaultProps} />);
    expect(screen.getByTestId('form-input')).toBeInTheDocument();
  });

  it('renders children elements', () => {
    render(
      <FormField {...defaultProps}>
        <div data-testid="child-element" />
      </FormField>,
    );
    expect(screen.getByTestId('child-element')).toBeInTheDocument();
  });

  afterEach(() => cleanup());
});
