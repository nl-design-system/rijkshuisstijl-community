import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';
import { FormFieldCheckboxOption } from './FormFieldCheckboxOption';

describe('FormFieldCheckboxOption', () => {
  it('renders successfully with required props', () => {
    render(<FormFieldCheckboxOption label="Test Checkbox" />);
    expect(screen.getByLabelText('Test Checkbox')).toBeInTheDocument();
  });

  it('renders with description', () => {
    render(<FormFieldCheckboxOption description="This is a description" label="Test Checkbox" />);
    expect(screen.getByText('This is a description')).toBeInTheDocument();
  });

  it('renders with error message when invalid', () => {
    render(<FormFieldCheckboxOption invalid errorMessage="This field is required" label="Test Checkbox" />);
    expect(screen.getByText('This field is required')).toBeInTheDocument();
  });

  it('disables the checkbox when disabled prop is true', () => {
    render(<FormFieldCheckboxOption disabled label="Test Checkbox" />);
    expect(screen.getByLabelText('Test Checkbox')).toBeDisabled();
  });

  it('calls onChange when checkbox is clicked', () => {
    const handleChange = jest.fn();
    render(<FormFieldCheckboxOption label="Test Checkbox" onChange={handleChange} />);
    fireEvent.click(screen.getByLabelText('Test Checkbox'));
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('applies the correct value to the checkbox', () => {
    render(<FormFieldCheckboxOption label="Test Checkbox" value="test-value" />);
    expect(screen.getByLabelText('Test Checkbox')).toHaveAttribute('value', 'test-value');
  });

  it('sets the name attribute correctly', () => {
    render(<FormFieldCheckboxOption label="Test Checkbox" name="test-name" />);
    expect(screen.getByLabelText('Test Checkbox')).toHaveAttribute('name', 'test-name');
  });

  it('applies invalid state correctly', () => {
    render(<FormFieldCheckboxOption invalid label="Test Checkbox" />);
    expect(screen.getByLabelText('Test Checkbox')).toHaveAttribute('aria-invalid', 'true');
  });
});
