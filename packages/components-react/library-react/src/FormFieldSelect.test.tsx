import '@testing-library/jest-dom/vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import { FormFieldSelect } from '.';

describe('FormFieldSelect', () => {
  const defaultProps = {
    label: 'Test Label',
  };
  it('renders a visible element', () => {
    const { container } = render(<FormFieldSelect {...defaultProps} />);

    const formFieldSelect = container.querySelector(':only-child');

    expect(formFieldSelect).toBeInTheDocument();
    expect(formFieldSelect).toBeVisible();
  });

  it('sets required on the native select element', () => {
    render(<FormFieldSelect {...defaultProps} required />);

    expect(screen.getByRole('combobox')).toBeRequired();
  });

  it('does not set required on the native select element by default', () => {
    render(<FormFieldSelect {...defaultProps} />);

    expect(screen.getByRole('combobox')).not.toBeRequired();
  });

  it('points aria-describedby to the rendered description', () => {
    render(<FormFieldSelect {...defaultProps} description="Test Description" />);

    const select = screen.getByRole('combobox');
    const descriptionId = select.getAttribute('aria-describedby');

    expect(descriptionId).toBeTruthy();

    const description = document.querySelector(`[id="${descriptionId}"]`);

    expect(description).toBeInTheDocument();
    expect(description).toHaveTextContent('Test Description');
  });

  it('points aria-describedby to the rendered error message when invalid', () => {
    render(<FormFieldSelect {...defaultProps} invalid errorMessage="Test Error" />);

    const select = screen.getByRole('combobox');
    const errorMessageId = select.getAttribute('aria-describedby');

    expect(errorMessageId).toBeTruthy();

    const errorMessage = document.querySelector(`[id="${errorMessageId}"]`);

    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveTextContent('Test Error');
  });

  it('omits aria-describedby when invalid without an error message', () => {
    render(<FormFieldSelect {...defaultProps} invalid />);

    expect(screen.getByRole('combobox')).not.toHaveAttribute('aria-describedby');
  });
});

afterEach(() => cleanup());
