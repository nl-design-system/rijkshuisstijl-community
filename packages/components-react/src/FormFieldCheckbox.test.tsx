import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { FormFieldCheckbox } from './FormFieldCheckbox';

describe('FormFieldCheckbox', () => {
  it('renders successfully with required props', () => {
    render(<FormFieldCheckbox label="Test Checkbox" />);
    expect(screen.getByLabelText('Test Checkbox')).toBeInTheDocument();
  });

  it('renders with description', () => {
    render(<FormFieldCheckbox description="This is a description" label="Test Checkbox" />);
    expect(screen.getByText('This is a description')).toBeInTheDocument();
  });

  it('renders with error message when invalid', () => {
    render(<FormFieldCheckbox invalid errorMessage="This field is required" label="Test Checkbox" />);
    expect(screen.getByText('This field is required')).toBeInTheDocument();
  });

  it('disables the checkbox when disabled prop is true', () => {
    render(<FormFieldCheckbox disabled label="Test Checkbox" />);
    expect(screen.getByLabelText('Test Checkbox')).toBeDisabled();
  });

  it('calls onChange when checkbox is clicked', () => {
    const handleChange = jest.fn();
    render(<FormFieldCheckbox label="Test Checkbox" onChange={handleChange} />);
    fireEvent.click(screen.getByLabelText('Test Checkbox'));
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('applies the correct value to the checkbox', () => {
    render(<FormFieldCheckbox label="Test Checkbox" value="test-value" />);
    expect(screen.getByLabelText('Test Checkbox')).toHaveAttribute('value', 'test-value');
  });

  it('sets the name attribute correctly', () => {
    render(<FormFieldCheckbox label="Test Checkbox" name="test-name" />);
    expect(screen.getByLabelText('Test Checkbox')).toHaveAttribute('name', 'test-name');
  });

  it('applies invalid state correctly', () => {
    render(<FormFieldCheckbox invalid label="Test Checkbox" />);
    expect(screen.getByLabelText('Test Checkbox')).toHaveAttribute('aria-invalid', 'true');
  });
});
