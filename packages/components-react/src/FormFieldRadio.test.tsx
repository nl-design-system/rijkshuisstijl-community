import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import { FormFieldRadio } from '.';

describe('FormFieldRadio', () => {
  it('renders successfully with required props', () => {
    render(<FormFieldRadio label="Test Radio" />);
    expect(screen.getByLabelText('Test Radio')).toBeInTheDocument();
  });

  it('renders with description', () => {
    render(<FormFieldRadio description="This is a description" label="Test Radio" />);
    expect(screen.getByText('This is a description')).toBeInTheDocument();
  });

  it('renders with error message when invalid', () => {
    render(<FormFieldRadio invalid errorMessage="This field is required" label="Test Radio" />);
    expect(screen.getByText('This field is required')).toBeInTheDocument();
  });

  it('disables the radio when disabled prop is true', () => {
    render(<FormFieldRadio disabled label="Test Radio" />);
    expect(screen.getByLabelText('Test Radio')).toBeDisabled();
  });

  it('calls onChange when radio is clicked', () => {
    const handleChange = jest.fn();
    render(<FormFieldRadio label="Test Radio" onChange={handleChange} />);
    screen.getByLabelText('Test Radio').click();
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('applies the correct value to the radio', () => {
    render(<FormFieldRadio label="Test Radio" value="test-value" />);
    expect(screen.getByLabelText('Test Radio')).toHaveAttribute('value', 'test-value');
  });

  it('sets the name attribute correctly', () => {
    render(<FormFieldRadio label="Test Radio" name="test-name" />);
    expect(screen.getByLabelText('Test Radio')).toHaveAttribute('name', 'test-name');
  });

  it('applies invalid state correctly', () => {
    render(<FormFieldRadio invalid label="Test Radio" />);
    expect(screen.getByLabelText('Test Radio')).toHaveAttribute('aria-invalid', 'true');
  });
});
