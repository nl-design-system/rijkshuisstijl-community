import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { FormFieldCheckbox } from './FormFieldCheckbox';
import { FormFieldCheckboxGroup } from './FormFieldCheckboxGroup';

describe('FormFieldCheckboxGroup', () => {
  it('renders successfully with required props', () => {
    render(
      <FormFieldCheckboxGroup label="Test Checkbox Group">
        <FormFieldCheckbox label="Option 1" />
        <FormFieldCheckbox label="Option 2" />
      </FormFieldCheckboxGroup>,
    );
    expect(screen.getByText('Test Checkbox Group')).toBeInTheDocument();
    expect(screen.getByLabelText('Option 1')).toBeInTheDocument();
    expect(screen.getByLabelText('Option 2')).toBeInTheDocument();
  });

  it('renders with description', () => {
    render(
      <FormFieldCheckboxGroup description="This is a description" label="Test Checkbox Group">
        <FormFieldCheckbox label="Option 1" />
      </FormFieldCheckboxGroup>,
    );
    expect(screen.getByText('This is a description')).toBeInTheDocument();
  });

  it('renders with error message when invalid', () => {
    render(
      <FormFieldCheckboxGroup invalid errorMessage="This field is required" label="Test Checkbox Group">
        <FormFieldCheckbox label="Option 1" />
      </FormFieldCheckboxGroup>,
    );
    expect(screen.getByText('This field is required')).toBeInTheDocument();
  });

  it('applies the correct role when there are multiple checkboxes', () => {
    const { container } = render(
      <FormFieldCheckboxGroup label="Test Checkbox Group">
        <FormFieldCheckbox label="Option 1" />
        <FormFieldCheckbox label="Option 2" />
      </FormFieldCheckboxGroup>,
    );
    expect(container.querySelector('[role="group"]')).toBeInTheDocument();
  });

  it('does not apply role when there is only one checkbox', () => {
    const { container } = render(
      <FormFieldCheckboxGroup label="Test Checkbox Group">
        <FormFieldCheckbox label="Option 1" />
      </FormFieldCheckboxGroup>,
    );
    expect(container.querySelector('[role="group"]')).not.toBeInTheDocument();
  });

  it('applies dir attribute when provided', () => {
    const { container } = render(
      <FormFieldCheckboxGroup dir="rtl" label="Test Checkbox Group">
        <FormFieldCheckbox label="Option 1" />
      </FormFieldCheckboxGroup>,
    );
    expect(container.firstChild).toHaveAttribute('dir', 'rtl');
  });

  it('forwards ref to FormField component', () => {
    const ref = jest.fn();
    render(
      <FormFieldCheckboxGroup label="Test Checkbox Group" ref={ref}>
        <FormFieldCheckbox label="Option 1" />
      </FormFieldCheckboxGroup>,
    );
    expect(ref).toHaveBeenCalled();
  });
});
