import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { FormFieldCheckboxGroup } from './FormFieldCheckboxGroup';
import { FormFieldCheckboxOption } from './FormFieldCheckboxOption';

describe('FormFieldCheckboxGroup', () => {
  it('renders successfully with required props', () => {
    render(
      <FormFieldCheckboxGroup label="Test Checkbox Group">
        <FormFieldCheckboxOption label="Option 1" />
        <FormFieldCheckboxOption label="Option 2" />
      </FormFieldCheckboxGroup>,
    );
    expect(screen.getByText('Test Checkbox Group')).toBeInTheDocument();
    expect(screen.getByLabelText('Option 1')).toBeInTheDocument();
    expect(screen.getByLabelText('Option 2')).toBeInTheDocument();
  });

  it('renders with description', () => {
    render(
      <FormFieldCheckboxGroup description="This is a description" label="Test Checkbox Group">
        <FormFieldCheckboxOption label="Option 1" />
      </FormFieldCheckboxGroup>,
    );
    expect(screen.getByText('This is a description')).toBeInTheDocument();
  });

  it('renders with error message when invalid', () => {
    render(
      <FormFieldCheckboxGroup invalid errorMessage="This field is required" label="Test Checkbox Group">
        <FormFieldCheckboxOption label="Option 1" />
      </FormFieldCheckboxGroup>,
    );
    expect(screen.getByText('This field is required')).toBeInTheDocument();
  });

  it('applies the correct role when there are multiple checkboxes', () => {
    const { container } = render(
      <FormFieldCheckboxGroup label="Test Checkbox Group">
        <FormFieldCheckboxOption label="Option 1" />
        <FormFieldCheckboxOption label="Option 2" />
      </FormFieldCheckboxGroup>,
    );
    expect(container.querySelector('[role="group"]')).toBeInTheDocument();
  });

  it('does not apply role when there is only one checkbox', () => {
    const { container } = render(
      <FormFieldCheckboxGroup label="Test Checkbox Group">
        <FormFieldCheckboxOption label="Option 1" />
      </FormFieldCheckboxGroup>,
    );
    expect(container.querySelector('[role="group"]')).not.toBeInTheDocument();
  });

  it('applies dir attribute to the component', () => {
    const { container } = render(
      <FormFieldCheckboxGroup dir="rtl" label="Test Checkbox Group">
        <FormFieldCheckboxOption label="Option 1" />
      </FormFieldCheckboxGroup>,
    );

    const renderedComponent = container.querySelector('div[dir="rtl"]');
    expect(renderedComponent).toBeInTheDocument();
  });

  it('forwards ref to FormField component', () => {
    const ref = vi.fn();
    render(
      <FormFieldCheckboxGroup label="Test Checkbox Group" ref={ref}>
        <FormFieldCheckboxOption label="Option 1" />
      </FormFieldCheckboxGroup>,
    );
    expect(ref).toHaveBeenCalled();
  });
});

afterEach(() => cleanup());
