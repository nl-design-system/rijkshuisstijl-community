import '@testing-library/jest-dom/vitest';

import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createRef } from 'react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { FormFieldTextarea } from './FormFieldTextarea';

describe('Form field with a textarea', () => {
  const defaultProps = {
    name: 'subject',
    label: 'Subject',
  };

  it('renders an HTML div element', () => {
    const { container } = render(<FormFieldTextarea {...defaultProps} />);

    const field = container.querySelector('div');

    expect(field).toBeInTheDocument();
  });

  it('renders a design system BEM class name: utrecht-form-field', () => {
    const { container } = render(<FormFieldTextarea {...defaultProps} />);

    const field = container.querySelector('div');

    expect(field).toHaveClass('utrecht-form-field');
  });

  it('displays as CSS block element (or equivalent)', () => {
    const { container } = render(<FormFieldTextarea {...defaultProps} />);

    const field = container.querySelector('div');

    expect(field).toBeVisible();
    expect(field).not.toHaveStyle({ display: 'inline' });
    expect(field).not.toHaveStyle({ display: 'inline-block' });
  });

  it('renders rich text content', () => {
    const { container } = render(
      <FormFieldTextarea {...defaultProps}>
        <hr />
      </FormFieldTextarea>,
    );

    const richText = container.querySelector('hr');

    expect(richText).toBeInTheDocument();
  });

  it('can be hidden', () => {
    const { container } = render(<FormFieldTextarea {...defaultProps} hidden />);

    const field = container.querySelector('div');

    expect(field).not.toBeVisible();
  });

  it('can have a custom class name', () => {
    const { container } = render(<FormFieldTextarea {...defaultProps} className="invalid" />);

    const field = container.querySelector('div');

    expect(field).toHaveClass('invalid');
  });

  it('can have a additional class name', () => {
    const { container } = render(<FormFieldTextarea {...defaultProps} className="large" />);

    const field = container.querySelector(':only-child');

    expect(field).toHaveClass('large');
    expect(field).toHaveClass('utrecht-form-field');
  });

  describe('label', () => {
    it('renders a design system BEM class name: utrecht-form-field__label', () => {
      const { container } = render(<FormFieldTextarea {...defaultProps} />);

      const field = container.querySelector('.utrecht-form-field__label');

      expect(field).toBeInTheDocument();
    });

    it('renders rich text content', () => {
      const { container } = render(
        <FormFieldTextarea
          {...defaultProps}
          label={
            <>
              I can speak the <i lang="la">lingua franca</i>
            </>
          }
        />,
      );

      const richText = container.querySelector('i');

      expect(richText).toBeInTheDocument();
    });

    it('is associated with the textarea', () => {
      render(<FormFieldTextarea {...defaultProps} />);

      const textarea = screen.getByRole('textbox', { name: 'Subject' });

      expect(textarea).toBeInTheDocument();
    });

    // As a workaround for testing focusing the textarea via the lable,
    // we need to check the implementation details instead of the behavior.
    it('is associated with the textarea using the `for` attribute', () => {
      const { container } = render(<FormFieldTextarea {...defaultProps} label="Subject" />);

      const textarea = container.querySelector('textarea[id]');
      const label = container.querySelector('label[for]');

      expect(textarea?.id).toBeTruthy();
      expect(textarea?.id).toBe(label?.getAttribute('for'));
    });
  });

  describe('description', () => {
    it('is not rendered by default', () => {
      const { container } = render(<FormFieldTextarea {...defaultProps} />);

      const field = container.querySelector('.utrecht-form-field__description');

      expect(field).not.toBeInTheDocument();
    });

    it('renders a design system BEM class name: utrecht-form-field__description', () => {
      const { container } = render(
        <FormFieldTextarea
          {...defaultProps}
          description="Lingua franca is a common language between groups of people."
        />,
      );

      const field = container.querySelector('.utrecht-form-field__description');

      expect(field).toBeInTheDocument();
    });

    it('renders rich text content', () => {
      const { container } = render(
        <FormFieldTextarea
          {...defaultProps}
          description={
            <p>
              You are <strong>not</strong> required to agree.
            </p>
          }
        />,
      );

      const richText = container.querySelector('strong');

      expect(richText).toBeInTheDocument();
    });

    it('is associated with the textarea', () => {
      const description = 'Lingua franca is a common language between groups of people.';

      render(<FormFieldTextarea {...defaultProps} description={description} />);

      const textarea = screen.getByRole('textbox', { description });

      expect(textarea).toBeInTheDocument();
    });
  });

  describe('error message', () => {
    it('is not rendered by default', () => {
      const { container } = render(<FormFieldTextarea {...defaultProps} />);

      const field = container.querySelector('.utrecht-form-field__error-message');

      expect(field).not.toBeInTheDocument();
    });

    it('renders a design system BEM class name: utrecht-form-field__error-message', () => {
      const { container } = render(
        <FormFieldTextarea {...defaultProps} invalid errorMessage="Check this required field to continue." />,
      );

      const field = container.querySelector('.utrecht-form-field__error-message');

      expect(field).toBeInTheDocument();
    });

    it('renders rich text content', () => {
      const { container } = render(
        <FormFieldTextarea
          {...defaultProps}
          invalid
          errorMessage={
            <p>
              You <strong>required</strong> to agree.
            </p>
          }
        />,
      );

      const richText = container.querySelector('strong');

      expect(richText).toBeInTheDocument();
    });

    it('is associated with the textarea', () => {
      const errorMessage = 'Check this required field to continue.';

      render(<FormFieldTextarea {...defaultProps} invalid errorMessage={errorMessage} />);

      const textarea = screen.getByRole('textbox', { description: errorMessage });

      expect(textarea).toBeInTheDocument();
    });
  });

  describe('textarea', () => {
    it('renders a textarea role element', () => {
      render(<FormFieldTextarea {...defaultProps} />);

      const textarea = screen.getByRole('textbox');

      expect(textarea).toBeInTheDocument();
    });

    it('renders a design system BEM class name: utrecht-form-field__input', () => {
      const { container } = render(<FormFieldTextarea {...defaultProps} />);

      const field = container.querySelector('.utrecht-form-field__input');

      expect(field).toBeInTheDocument();
    });
  });

  describe('status', () => {
    it('is not rendered by default', () => {
      const { container } = render(<FormFieldTextarea {...defaultProps} />);

      const field = container.querySelector('.utrecht-form-field__status');

      expect(field).not.toBeInTheDocument();
    });

    it('renders a design system BEM class name: utrecht-form-field__status', () => {
      const { container } = render(<FormFieldTextarea {...defaultProps} status="Saving..." />);

      const field = container.querySelector('.utrecht-form-field__status');

      expect(field).toBeInTheDocument();
    });

    it('renders rich text content', () => {
      const { container } = render(
        <FormFieldTextarea
          {...defaultProps}
          status={
            <p>
              Saving <strong>failed</strong>. Please try again at a later time.
            </p>
          }
        />,
      );

      const richText = container.querySelector('strong');

      expect(richText).toBeInTheDocument();
    });

    it('is associated with the textarea', () => {
      const status = '40 characters remaining';

      render(<FormFieldTextarea {...defaultProps} status={status} />);

      const textarea = screen.getByRole('textbox', { description: status });

      expect(textarea).toBeInTheDocument();
    });
  });

  describe('change event', () => {
    it('can trigger a change event', async () => {
      const handleChange = vi.fn();

      render(<FormFieldTextarea {...defaultProps} onChange={handleChange} />);

      const textarea = screen.getByRole('textbox');

      expect(handleChange).not.toHaveBeenCalled();

      textarea?.focus();
      await userEvent.keyboard('Hello, world!');

      expect(handleChange).toHaveBeenCalled();
    });

    it('does not trigger a change event when disabled', async () => {
      const handleChange = vi.fn();

      render(<FormFieldTextarea {...defaultProps} disabled onChange={handleChange} />);

      const textarea = screen.getByRole('textbox');

      textarea?.focus();
      await userEvent.keyboard('Hello, world!');

      expect(handleChange).not.toHaveBeenCalled();
    });
  });

  describe('focus event', () => {
    it('can trigger a focus event', async () => {
      const handleFocus = vi.fn();

      render(<FormFieldTextarea {...defaultProps} onFocus={handleFocus} />);

      const textarea = screen.getByRole('textbox');

      expect(handleFocus).not.toHaveBeenCalled();

      textarea?.focus();

      expect(handleFocus).toHaveBeenCalled();
    });

    it('can trigger a focus event when read-only', async () => {
      const handleFocus = vi.fn();

      render(<FormFieldTextarea {...defaultProps} readOnly onFocus={handleFocus} />);

      const textarea = screen.getByRole('textbox');

      textarea?.focus();

      expect(handleFocus).toHaveBeenCalled();
    });

    it('does not trigger a focus event when disabled', async () => {
      const handleFocus = vi.fn();

      render(<FormFieldTextarea {...defaultProps} disabled onFocus={handleFocus} />);

      const textarea = screen.getByRole('textbox');

      textarea?.focus();

      expect(handleFocus).not.toHaveBeenCalled();
    });
  });

  describe('blur event', () => {
    it('can trigger a blur event', async () => {
      const handleBlur = vi.fn();

      render(<FormFieldTextarea {...defaultProps} onBlur={handleBlur} />);

      const textarea = screen.getByRole('textbox');

      expect(handleBlur).not.toHaveBeenCalled();

      textarea?.focus();
      textarea?.blur();

      expect(handleBlur).toHaveBeenCalled();
    });

    it('can trigger a blur event when read-only', async () => {
      const handleBlur = vi.fn();

      render(<FormFieldTextarea {...defaultProps} readOnly onBlur={handleBlur} />);

      const textarea = screen.getByRole('textbox');

      textarea?.focus();
      textarea?.blur();

      expect(handleBlur).toHaveBeenCalled();
    });

    it('does not trigger a blur event when disabled', async () => {
      const handleBlur = vi.fn();

      render(<FormFieldTextarea {...defaultProps} disabled onBlur={handleBlur} />);

      const textarea = screen.getByRole('textbox');

      textarea?.focus();
      textarea?.blur();

      expect(handleBlur).not.toHaveBeenCalled();
    });
  });

  describe('input event', () => {
    it('can trigger a input event', async () => {
      const handleInput = vi.fn();

      render(<FormFieldTextarea {...defaultProps} onInput={handleInput} />);

      const textarea = screen.getByRole('textbox');

      expect(handleInput).not.toHaveBeenCalled();

      textarea?.focus();
      await userEvent.keyboard('Hello, world!');

      expect(handleInput).toHaveBeenCalled();
    });

    it('does not trigger a input event when disabled', async () => {
      const handleInput = vi.fn();

      render(<FormFieldTextarea {...defaultProps} disabled onInput={handleInput} />);

      const textarea = screen.getByRole('textbox');

      textarea?.focus();
      await userEvent.keyboard('Hello, world!');

      expect(handleInput).not.toHaveBeenCalled();
    });
  });

  describe('invalid state', () => {
    it('renders a design system BEM modifier class name: utrecht-form-field--invalid', () => {
      const { container } = render(<FormFieldTextarea {...defaultProps} invalid />);

      const formField = container.querySelector('.utrecht-form-field');

      expect(formField).toHaveClass('utrecht-form-field--invalid');
    });

    it('renders a design system BEM modifier class name: utrecht-textarea--invalid', () => {
      const { container } = render(<FormFieldTextarea {...defaultProps} invalid />);

      const textarea = container.querySelector('.utrecht-textarea');

      expect(textarea).toHaveClass('utrecht-textarea--invalid');
    });

    it('is not invalid by default', () => {
      render(<FormFieldTextarea {...defaultProps} />);

      const textarea = screen.getByRole('textbox');

      expect(textarea).not.toBeInvalid();
    });

    it('omits non-essential invalid attributes when not invalid', () => {
      render(<FormFieldTextarea {...defaultProps} invalid={false} />);

      const textarea = screen.getByRole('textbox');

      expect(textarea).not.toHaveAttribute('aria-invalid');
    });

    it('can have an invalid state', () => {
      render(<FormFieldTextarea {...defaultProps} invalid />);

      const textarea = screen.getByRole('textbox');

      expect(textarea).toBeInvalid();
    });
  });

  describe('disabled state', () => {
    it('renders a design system BEM modifier class name: utrecht-textarea--disabled', () => {
      const { container } = render(<FormFieldTextarea {...defaultProps} disabled />);

      const textarea = container.querySelector('.utrecht-textarea');

      expect(textarea).toHaveClass('utrecht-textarea--disabled');
    });

    it('is not disabled by default', () => {
      render(<FormFieldTextarea {...defaultProps} />);

      const textarea = screen.getByRole('textbox');

      expect(textarea).not.toBeDisabled();
    });

    it('omits non-essential disabled attributes when not disabled', () => {
      render(<FormFieldTextarea {...defaultProps} disabled={false} />);

      const textarea = screen.getByRole('textbox');

      expect(textarea).not.toHaveAttribute('aria-disabled');

      expect(textarea).not.toHaveAttribute('disabled');
    });

    it('can have a disabled state', () => {
      render(<FormFieldTextarea {...defaultProps} disabled />);

      const textarea = screen.getByRole('textbox');

      expect(textarea).toBeDisabled();
    });

    it('can have a disabled state in CSS', () => {
      const { container } = render(<FormFieldTextarea {...defaultProps} disabled />);

      const textarea = container.querySelector(':disabled');

      expect(textarea).toBeInTheDocument();
    });
  });

  describe('required state', () => {
    it('renders a design system BEM modifier class name: utrecht-textarea--required', () => {
      const { container } = render(<FormFieldTextarea {...defaultProps} required />);

      const textarea = container.querySelector('.utrecht-textarea');

      expect(textarea).toHaveClass('utrecht-textarea--required');
    });

    it('is not required by default', () => {
      render(<FormFieldTextarea {...defaultProps} />);

      const textarea = screen.getByRole('textbox');

      expect(textarea).not.toBeRequired();
    });

    it('omits non-essential required attributes when not required', () => {
      render(<FormFieldTextarea {...defaultProps} required={false} />);

      const textarea = screen.getByRole('textbox');

      expect(textarea).not.toHaveAttribute('aria-required');

      expect(textarea).not.toHaveAttribute('required');
    });

    it('can have a required state', () => {
      render(<FormFieldTextarea {...defaultProps} required />);

      const textarea = screen.getByRole('textbox');

      expect(textarea).toBeRequired();
    });
  });

  describe('read-only state', () => {
    it('renders a design system BEM modifier class name: utrecht-textarea--readonly', () => {
      const { container } = render(<FormFieldTextarea {...defaultProps} readOnly />);

      const textarea = container.querySelector('.utrecht-textarea');

      expect(textarea).toHaveClass('utrecht-textarea--readonly');
    });

    it('omits non-essential disabled attributes when not read-only', () => {
      render(<FormFieldTextarea {...defaultProps} readOnly={false} />);

      const textarea = screen.getByRole('textbox');

      expect(textarea).not.toHaveAttribute('aria-readonly');
      expect(textarea).not.toHaveAttribute('readonly');
    });

    it('can have a read-only state in CSS', () => {
      const { container } = render(<FormFieldTextarea {...defaultProps} readOnly />);

      const textarea = container.querySelector(':read-only');

      expect(textarea).toBeInTheDocument();
    });
  });

  describe('minlength', () => {
    it('omits non-essential required attributes when not required', () => {
      render(<FormFieldTextarea {...defaultProps} />);

      const textarea = screen.getByRole('textbox');

      // avoid `minlength="0"`
      expect(textarea).not.toHaveAttribute('minlength');
    });

    it('can have a minlength', () => {
      render(<FormFieldTextarea {...defaultProps} minLength={1} />);

      const textarea = screen.getByRole('textbox');

      expect(textarea).toHaveAttribute('minlength');
    });
  });

  describe('maxlength', () => {
    it('omits non-essential required attributes when not required', () => {
      render(<FormFieldTextarea {...defaultProps} />);

      const textarea = screen.getByRole('textbox');

      expect(textarea).not.toHaveAttribute('maxlength');
    });

    it('can have a maxlength', () => {
      render(<FormFieldTextarea {...defaultProps} maxLength={1} />);

      const textarea = screen.getByRole('textbox');

      expect(textarea).toHaveAttribute('maxlength');
    });
  });

  describe('placeholder', () => {
    it('omits non-essential required attributes when not required', () => {
      render(<FormFieldTextarea {...defaultProps} />);
      const textarea = screen.getByRole('textbox');

      expect(textarea).not.toHaveAttribute('placeholder');
    });

    it('does not have a placeholder by default', () => {
      const { container } = render(<FormFieldTextarea {...defaultProps} />);

      const textarea = container.querySelector(':placeholder-shown');

      expect(textarea).not.toBeInTheDocument();
    });

    it('can have a placeholder', () => {
      const { container } = render(<FormFieldTextarea {...defaultProps} placeholder="Type some text..." />);

      const textarea = container.querySelector(':placeholder-shown');

      expect(textarea).toBeInTheDocument();
    });
  });

  describe('textarea text directionality', () => {
    it('renders bidirectional by default using `dir="auto"', () => {
      const { container } = render(<FormFieldTextarea {...defaultProps} />);

      const textarea = container.querySelector('textarea:only-child');

      expect(textarea).toHaveAttribute('dir', 'auto');
    });

    it('can render left-to-right', () => {
      const { container } = render(<FormFieldTextarea {...defaultProps} inputDir="ltr" />);

      const textarea = container.querySelector('textarea:only-child');

      expect(textarea).toHaveAttribute('dir', 'ltr');
    });

    it('can render right-to-left', () => {
      const { container } = render(<FormFieldTextarea {...defaultProps} inputDir="rtl" />);

      const textarea = container.querySelector('textarea:only-child');

      expect(textarea).toHaveAttribute('dir', 'rtl');
    });
  });

  describe('autocomplete', () => {
    it('is not rendered by default', () => {
      const { container } = render(<FormFieldTextarea {...defaultProps} />);

      const textarea = container.querySelector('textarea');

      expect(textarea).not.toHaveAttribute('autocomplete');
    });

    it('renders the autocomplete attribute on the textarea element', () => {
      const { container } = render(<FormFieldTextarea {...defaultProps} autoComplete="off" />);

      const textarea = container.querySelector('textarea');

      expect(textarea).toHaveAttribute('autocomplete', 'off');
    });
  });

  describe('name', () => {
    it('associates the textarea with a form', () => {
      const name = 'message';
      const { container } = render(
        <form>
          <FormFieldTextarea {...defaultProps} name={name} />
        </form>,
      );

      const form = container.querySelector('form');
      const textarea = container.querySelector('textarea');

      // TypeScript definitions don't yet support the named index
      expect(form?.elements[name as any]).toBe(textarea);
    });
  });

  it('supports ref in React', () => {
    const ref = createRef<HTMLDivElement>();

    const { container } = render(<FormFieldTextarea {...defaultProps} ref={ref} />);

    const div = container.querySelector('div');

    expect(ref.current).toBe(div);
  });

  it('supports ref for the form control in React', () => {
    const inputRef = createRef<HTMLTextAreaElement>();

    const { container } = render(<FormFieldTextarea {...defaultProps} inputRef={inputRef} />);

    const div = container.querySelector('textarea');

    expect(inputRef.current).toBe(div);
  });
});

afterEach(() => cleanup());
