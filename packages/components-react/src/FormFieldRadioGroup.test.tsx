import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { FormFieldRadio } from './FormFieldRadio';
import { FormFieldRadioGroup } from './FormFieldRadioGroup';

describe('FormFieldRadioGroup', () => {
  it('renders successfully with required props', () => {
    render(
      <FormFieldRadioGroup label="Test Radio Group">
        <FormFieldRadio label="Option 1" />
        <FormFieldRadio label="Option 2" />
      </FormFieldRadioGroup>,
    );
    expect(screen.getByText('Test Radio Group')).toBeInTheDocument();
    expect(screen.getByLabelText('Option 1')).toBeInTheDocument();
    expect(screen.getByLabelText('Option 2')).toBeInTheDocument();
  });

  it('renders with description', () => {
    render(
      <FormFieldRadioGroup description="This is a description" label="Test Radio Group">
        <FormFieldRadio label="Option 1" />
      </FormFieldRadioGroup>,
    );
    expect(screen.getByText('This is a description')).toBeInTheDocument();
  });

  it('renders with error message when invalid', () => {
    render(
      <FormFieldRadioGroup invalid errorMessage="This field is required" label="Test Radio Group">
        <FormFieldRadio label="Option 1" />
      </FormFieldRadioGroup>,
    );
    expect(screen.getByText('This field is required')).toBeInTheDocument();
  });

  it('applies the correct role when there are multiple radios', () => {
    const { container } = render(
      <FormFieldRadioGroup label="Test Radio Group">
        <FormFieldRadio label="Option 1" />
        <FormFieldRadio label="Option 2" />
      </FormFieldRadioGroup>,
    );
    expect(container.querySelector('[role="group"]')).toBeInTheDocument();
  });

  it('does not apply role when there is only one radio', () => {
    const { container } = render(
      <FormFieldRadioGroup label="Test Radio Group">
        <FormFieldRadio label="Option 1" />
      </FormFieldRadioGroup>,
    );
    expect(container.querySelector('[role="group"]')).not.toBeInTheDocument();
  });

  it('applies dir attribute to the component', () => {
    const { container } = render(
      <FormFieldRadioGroup dir="rtl" label="Test Radio Group">
        <FormFieldRadio label="Option 1" />
      </FormFieldRadioGroup>,
    );
    expect(container.querySelector('[dir="rtl"]')).toBeInTheDocument();
  });

  it('forwards ref to FormField component', () => {
    const ref = vi.fn();
    render(
      <FormFieldRadioGroup label="Test Radio Group" ref={ref}>
        <FormFieldRadio label="Option 1" />
      </FormFieldRadioGroup>,
    );
    expect(ref).not.toBeNull();
  });
});

afterEach(() => cleanup());
