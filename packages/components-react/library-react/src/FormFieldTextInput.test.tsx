import '@testing-library/jest-dom/vitest';

import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { createRef } from 'react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { FormFieldTextInput } from './FormFieldTextInput';

describe('Form field with a textinput', () => {
  const defaultProps = {
    name: 'subject',
    label: 'Subject',
  };

  it('renders an HTML div element', () => {
    const { container } = render(<FormFieldTextInput {...defaultProps} />);

    const field = container.querySelector('div');

    expect(field).toBeInTheDocument();
  });

  it('renders a design system BEM class name: utrecht-form-field', () => {
    const { container } = render(<FormFieldTextInput {...defaultProps} />);

    const field = container.querySelector('div');

    expect(field).toHaveClass('utrecht-form-field');
  });

  it('displays as CSS block element (or equivalent)', () => {
    const { container } = render(<FormFieldTextInput {...defaultProps} />);

    const field = container.querySelector('div');

    expect(field).toBeVisible();
    expect(field).not.toHaveStyle({ display: 'inline' });
    expect(field).not.toHaveStyle({ display: 'inline-block' });
  });

  it('renders rich text content', () => {
    const { container } = render(
      <FormFieldTextInput {...defaultProps}>
        <hr />
      </FormFieldTextInput>,
    );

    const richText = container.querySelector('hr');

    expect(richText).toBeInTheDocument();
  });

  it('can be hidden', () => {
    const { container } = render(<FormFieldTextInput {...defaultProps} hidden />);

    const field = container.querySelector('div');

    expect(field).not.toBeVisible();
  });

  it('can have a custom class name', () => {
    const { container } = render(<FormFieldTextInput {...defaultProps} className="invalid" />);

    const field = container.querySelector('div');

    expect(field).toHaveClass('invalid');
  });

  it('can have a additional class name', () => {
    const { container } = render(<FormFieldTextInput {...defaultProps} className="large" />);

    const field = container.querySelector(':only-child');

    expect(field).toHaveClass('large');
    expect(field).toHaveClass('utrecht-form-field');
  });

  describe('label', () => {
    it('renders a design system BEM class name: utrecht-form-field__label', () => {
      const { container } = render(<FormFieldTextInput {...defaultProps} />);

      const field = container.querySelector('.utrecht-form-field__label');

      expect(field).toBeInTheDocument();
    });

    it('renders rich text content', () => {
      const { container } = render(
        <FormFieldTextInput
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

    it('is associated with the textbox', () => {
      render(<FormFieldTextInput {...defaultProps} />);

      const textbox = screen.getByRole('textbox', { name: 'Subject' });

      expect(textbox).toBeInTheDocument();
    });

    // As a workaround for testing focusing the textbox via the lable,
    // we need to check the implementation details instead of the behavior.
    it('is associated with the textbox using the `for` attribute', () => {
      const { container } = render(<FormFieldTextInput {...defaultProps} label="Subject" />);

      const textbox = container.querySelector('input[id]');
      const label = container.querySelector('label[for]');

      expect(textbox?.id).toBeTruthy();
      expect(textbox?.id).toBe(label?.getAttribute('for'));
    });
  });

  describe('description', () => {
    it('is not rendered by default', () => {
      const { container } = render(<FormFieldTextInput {...defaultProps} />);

      const field = container.querySelector('.utrecht-form-field__description');

      expect(field).not.toBeInTheDocument();
    });

    it('renders a design system BEM class name: utrecht-form-field__description', () => {
      const { container } = render(
        <FormFieldTextInput
          {...defaultProps}
          description="Lingua franca is a common language between groups of people."
        />,
      );

      const field = container.querySelector('.utrecht-form-field__description');

      expect(field).toBeInTheDocument();
    });

    it('renders rich text content', () => {
      const { container } = render(
        <FormFieldTextInput
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

    it('is associated with the textbox', () => {
      const description = 'Lingua franca is a common language between groups of people.';

      render(<FormFieldTextInput {...defaultProps} description={description} />);

      const textbox = screen.getByRole('textbox', { description });

      expect(textbox).toBeInTheDocument();
    });
  });

  describe('error message', () => {
    it('is not rendered by default', () => {
      const { container } = render(<FormFieldTextInput {...defaultProps} />);

      const field = container.querySelector('.utrecht-form-field__error-message');

      expect(field).not.toBeInTheDocument();
    });

    it('renders a design system BEM class name: utrecht-form-field__error-message', () => {
      const { container } = render(
        <FormFieldTextInput {...defaultProps} invalid errorMessage="Check this required field to continue." />,
      );

      const field = container.querySelector('.utrecht-form-field__error-message');

      expect(field).toBeInTheDocument();
    });

    it('renders rich text content', () => {
      const { container } = render(
        <FormFieldTextInput
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

    it('is associated with the textbox', () => {
      const errorMessage = 'Check this required field to continue.';

      render(<FormFieldTextInput {...defaultProps} invalid errorMessage={errorMessage} />);

      const textbox = screen.getByRole('textbox', { description: errorMessage });

      expect(textbox).toBeInTheDocument();
    });
  });

  describe('input', () => {
    it('renders a textbox role element', () => {
      render(<FormFieldTextInput {...defaultProps} />);

      const textbox = screen.getByRole('textbox');

      expect(textbox).toBeInTheDocument();
    });

    it('renders a design system BEM class name: utrecht-form-field__input', () => {
      const { container } = render(<FormFieldTextInput {...defaultProps} />);

      const field = container.querySelector('.utrecht-form-field__input');

      expect(field).toBeInTheDocument();
    });

    it('renders an HTML input type=text element', () => {
      const { container } = render(<FormFieldTextInput {...defaultProps} />);

      const textbox = container.querySelector('input[type="text"]');

      expect(textbox).toBeInTheDocument();
    });
  });

  describe('status', () => {
    it('is not rendered by default', () => {
      const { container } = render(<FormFieldTextInput {...defaultProps} />);

      const field = container.querySelector('.utrecht-form-field__status');

      expect(field).not.toBeInTheDocument();
    });

    it('renders a design system BEM class name: utrecht-form-field__status', () => {
      const { container } = render(<FormFieldTextInput {...defaultProps} status="Saving..." />);

      const field = container.querySelector('.utrecht-form-field__status');

      expect(field).toBeInTheDocument();
    });

    it('renders rich text content', () => {
      const { container } = render(
        <FormFieldTextInput
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

    it('is associated with the textbox', () => {
      const status = '40 characters remaining';

      render(<FormFieldTextInput {...defaultProps} status={status} />);

      const textbox = screen.getByRole('textbox', { description: status });

      expect(textbox).toBeInTheDocument();
    });
  });

  describe('change event', () => {
    it('can trigger a change event', async () => {
      const handleChange = vi.fn();

      render(<FormFieldTextInput {...defaultProps} onChange={handleChange} />);

      const textbox = screen.getByRole('textbox');

      expect(handleChange).not.toHaveBeenCalled();

      textbox?.focus();
      await userEvent.keyboard('Hello, world!');

      expect(handleChange).toHaveBeenCalled();
    });

    it('does not trigger a change event when disabled', async () => {
      const handleChange = vi.fn();

      render(<FormFieldTextInput {...defaultProps} disabled onChange={handleChange} />);

      const textbox = screen.getByRole('textbox');

      textbox?.focus();
      await userEvent.keyboard('Hello, world!');

      expect(handleChange).not.toHaveBeenCalled();
    });
  });

  describe('focus event', () => {
    it('can trigger a focus event', async () => {
      const handleFocus = vi.fn();

      render(<FormFieldTextInput {...defaultProps} onFocus={handleFocus} />);

      const textbox = screen.getByRole('textbox');

      expect(handleFocus).not.toHaveBeenCalled();

      textbox?.focus();

      expect(handleFocus).toHaveBeenCalled();
    });

    it('can trigger a focus event when read-only', async () => {
      const handleFocus = vi.fn();

      render(<FormFieldTextInput {...defaultProps} readOnly onFocus={handleFocus} />);

      const textbox = screen.getByRole('textbox');

      textbox?.focus();

      expect(handleFocus).toHaveBeenCalled();
    });

    it('does not trigger a focus event when disabled', async () => {
      const handleFocus = vi.fn();

      render(<FormFieldTextInput {...defaultProps} disabled onFocus={handleFocus} />);

      const textbox = screen.getByRole('textbox');

      textbox?.focus();

      expect(handleFocus).not.toHaveBeenCalled();
    });
  });

  describe('blur event', () => {
    it('can trigger a blur event', async () => {
      const handleBlur = vi.fn();

      render(<FormFieldTextInput {...defaultProps} onBlur={handleBlur} />);

      const textbox = screen.getByRole('textbox');

      expect(handleBlur).not.toHaveBeenCalled();

      textbox?.focus();
      textbox?.blur();

      expect(handleBlur).toHaveBeenCalled();
    });

    it('can trigger a blur event when read-only', async () => {
      const handleBlur = vi.fn();

      render(<FormFieldTextInput {...defaultProps} readOnly onBlur={handleBlur} />);

      const textbox = screen.getByRole('textbox');

      textbox?.focus();
      textbox?.blur();

      expect(handleBlur).toHaveBeenCalled();
    });

    it('does not trigger a blur event when disabled', async () => {
      const handleBlur = vi.fn();

      render(<FormFieldTextInput {...defaultProps} disabled onBlur={handleBlur} />);

      const textbox = screen.getByRole('textbox');

      textbox?.focus();
      textbox?.blur();

      expect(handleBlur).not.toHaveBeenCalled();
    });
  });

  describe('input event', () => {
    it('can trigger a input event', async () => {
      const handleInput = vi.fn();

      render(<FormFieldTextInput {...defaultProps} onInput={handleInput} />);

      const textbox = screen.getByRole('textbox');

      expect(handleInput).not.toHaveBeenCalled();

      textbox?.focus();
      await userEvent.keyboard('Hello, world!');

      expect(handleInput).toHaveBeenCalled();
    });

    it('does not trigger a input event when disabled', async () => {
      const handleInput = vi.fn();

      render(<FormFieldTextInput {...defaultProps} disabled onInput={handleInput} />);

      const textbox = screen.getByRole('textbox');

      textbox?.focus();
      await userEvent.keyboard('Hello, world!');

      expect(handleInput).not.toHaveBeenCalled();
    });
  });

  describe('invalid state', () => {
    it('renders a design system BEM modifier class name: utrecht-form-field--invalid', () => {
      const { container } = render(<FormFieldTextInput {...defaultProps} invalid />);

      const formField = container.querySelector('.utrecht-form-field');

      expect(formField).toHaveClass('utrecht-form-field--invalid');
    });

    it('renders a design system BEM modifier class name: utrecht-textbox--invalid', () => {
      const { container } = render(<FormFieldTextInput {...defaultProps} invalid />);

      const textbox = container.querySelector('.utrecht-textbox');

      expect(textbox).toHaveClass('utrecht-textbox--invalid');
    });

    it('is not invalid by default', () => {
      render(<FormFieldTextInput {...defaultProps} />);

      const textbox = screen.getByRole('textbox');

      expect(textbox).not.toBeInvalid();
    });

    it('omits non-essential invalid attributes when not invalid', () => {
      render(<FormFieldTextInput {...defaultProps} invalid={false} />);

      const textbox = screen.getByRole('textbox');

      expect(textbox).not.toHaveAttribute('aria-invalid');
    });

    it('can have an invalid state', () => {
      render(<FormFieldTextInput {...defaultProps} invalid />);

      const textbox = screen.getByRole('textbox');

      expect(textbox).toBeInvalid();
    });

    it('can have a invalid state in CSS based on pattern', () => {
      const { container } = render(<FormFieldTextInput {...defaultProps} defaultValue="test" pattern="[0-9]+" />);

      const textbox = container.querySelector(':invalid');

      expect(textbox).toBeInTheDocument();
    });

    it('can have a invalid state in CSS based on type=email', () => {
      const { container } = render(<FormFieldTextInput {...defaultProps} defaultValue="test" type="email" />);

      const textbox = container.querySelector(':invalid');

      expect(textbox).toBeInTheDocument();
    });

    it('can have a invalid state in CSS based on min', () => {
      const { container } = render(<FormFieldTextInput {...defaultProps} defaultValue="1" min="2" type="number" />);

      const textbox = container.querySelector(':invalid');

      expect(textbox).toBeInTheDocument();
    });

    it('can have a invalid state in CSS based on max', () => {
      const { container } = render(<FormFieldTextInput {...defaultProps} defaultValue="3" max="2" type="number" />);

      const textbox = container.querySelector(':invalid');

      expect(textbox).toBeInTheDocument();
    });

    it('can have a invalid state in CSS based on step', () => {
      const { container } = render(
        <FormFieldTextInput {...defaultProps} defaultValue="3" min="0" step="2" type="number" />,
      );

      const textbox = container.querySelector(':invalid');

      expect(textbox).toBeInTheDocument();
    });
  });

  describe('disabled state', () => {
    it('renders a design system BEM modifier class name: utrecht-textbox--disabled', () => {
      const { container } = render(<FormFieldTextInput {...defaultProps} disabled />);

      const textbox = container.querySelector('.utrecht-textbox');

      expect(textbox).toHaveClass('utrecht-textbox--disabled');
    });

    it('is not disabled by default', () => {
      render(<FormFieldTextInput {...defaultProps} />);

      const textbox = screen.getByRole('textbox');

      expect(textbox).not.toBeDisabled();
    });

    it('omits non-essential disabled attributes when not disabled', () => {
      render(<FormFieldTextInput {...defaultProps} disabled={false} />);

      const textbox = screen.getByRole('textbox');

      expect(textbox).not.toHaveAttribute('aria-disabled');

      expect(textbox).not.toHaveAttribute('disabled');
    });

    it('can have a disabled state', () => {
      render(<FormFieldTextInput {...defaultProps} disabled />);

      const textbox = screen.getByRole('textbox');

      expect(textbox).toBeDisabled();
    });

    it('can have a disabled state in CSS', () => {
      const { container } = render(<FormFieldTextInput {...defaultProps} disabled />);

      const textbox = container.querySelector(':disabled');

      expect(textbox).toBeInTheDocument();
    });
  });

  describe('required state', () => {
    it('renders a design system BEM modifier class name: utrecht-textbox--required', () => {
      const { container } = render(<FormFieldTextInput {...defaultProps} required />);

      const textbox = container.querySelector('.utrecht-textbox');

      expect(textbox).toHaveClass('utrecht-textbox--required');
    });

    it('is not required by default', () => {
      render(<FormFieldTextInput {...defaultProps} />);

      const textbox = screen.getByRole('textbox');

      expect(textbox).not.toBeRequired();
    });

    it('omits non-essential required attributes when not required', () => {
      render(<FormFieldTextInput {...defaultProps} required={false} />);

      const textbox = screen.getByRole('textbox');

      expect(textbox).not.toHaveAttribute('aria-required');

      expect(textbox).not.toHaveAttribute('required');
    });

    it('can have a required state', () => {
      render(<FormFieldTextInput {...defaultProps} required />);

      const textbox = screen.getByRole('textbox');

      expect(textbox).toBeRequired();
    });
  });

  describe('read-only state', () => {
    it('renders a design system BEM modifier class name: utrecht-textbox--readonly', () => {
      const { container } = render(<FormFieldTextInput {...defaultProps} readOnly />);

      const textbox = container.querySelector('.utrecht-textbox');

      expect(textbox).toHaveClass('utrecht-textbox--readonly');
    });

    it('omits non-essential disabled attributes when not read-only', () => {
      render(<FormFieldTextInput {...defaultProps} readOnly={false} />);

      const textbox = screen.getByRole('textbox');

      expect(textbox).not.toHaveAttribute('aria-readonly');
      expect(textbox).not.toHaveAttribute('readonly');
    });

    it('can have a read-only state in CSS', () => {
      const { container } = render(<FormFieldTextInput {...defaultProps} readOnly />);

      const textbox = container.querySelector(':read-only');

      expect(textbox).toBeInTheDocument();
    });
  });

  describe('minlength', () => {
    it('omits non-essential required attributes when not required', () => {
      render(<FormFieldTextInput {...defaultProps} />);

      const textbox = screen.getByRole('textbox');

      // avoid `minlength="0"`
      expect(textbox).not.toHaveAttribute('minlength');
    });

    it('can have a minlength', () => {
      render(<FormFieldTextInput {...defaultProps} minLength={1} />);

      const textbox = screen.getByRole('textbox');

      expect(textbox).toHaveAttribute('minlength');
    });
  });

  describe('maxlength', () => {
    it('omits non-essential required attributes when not required', () => {
      render(<FormFieldTextInput {...defaultProps} />);

      const textbox = screen.getByRole('textbox');

      expect(textbox).not.toHaveAttribute('maxlength');
    });

    it('can have a maxlength', () => {
      render(<FormFieldTextInput {...defaultProps} maxLength={1} />);

      const textbox = screen.getByRole('textbox');

      expect(textbox).toHaveAttribute('maxlength');
    });
  });

  describe('placeholder', () => {
    it('omits non-essential required attributes when not required', () => {
      render(<FormFieldTextInput {...defaultProps} />);

      const textbox = screen.getByRole('textbox');

      expect(textbox).not.toHaveAttribute('placeholder');
    });

    it('does not have a placeholder by default', () => {
      const { container } = render(<FormFieldTextInput {...defaultProps} />);

      const textbox = container.querySelector(':placeholder-shown');

      expect(textbox).not.toBeInTheDocument();
    });

    it('can have a placeholder', () => {
      const { container } = render(<FormFieldTextInput {...defaultProps} placeholder="Type some text..." />);

      const textbox = container.querySelector(':placeholder-shown');

      expect(textbox).toBeInTheDocument();
    });
  });

  describe('input text directionality', () => {
    it('renders bidirectional by default using `dir="auto"', () => {
      const { container } = render(<FormFieldTextInput {...defaultProps} />);

      const textbox = container.querySelector('input:only-child');

      expect(textbox).toHaveAttribute('dir', 'auto');
    });

    it('can render left-to-right', () => {
      const { container } = render(<FormFieldTextInput {...defaultProps} inputDir="ltr" />);

      const textbox = container.querySelector('input:only-child');

      expect(textbox).toHaveAttribute('dir', 'ltr');
    });

    it('can render right-to-left', () => {
      const { container } = render(<FormFieldTextInput {...defaultProps} inputDir="rtl" />);

      const textbox = container.querySelector('input:only-child');

      expect(textbox).toHaveAttribute('dir', 'rtl');
    });
  });

  describe('autocomplete', () => {
    it('is not rendered by default', () => {
      const { container } = render(<FormFieldTextInput {...defaultProps} />);

      const textbox = container.querySelector('input');

      expect(textbox).not.toHaveAttribute('autocomplete');
    });

    it('renders the autocomplete attribute on the input element', () => {
      const { container } = render(<FormFieldTextInput {...defaultProps} autoComplete="off" />);

      const textbox = container.querySelector('input');

      expect(textbox).toHaveAttribute('autocomplete', 'off');
    });
  });

  describe('type', () => {
    it('renders type="text" by default', () => {
      const { container } = render(<FormFieldTextInput {...defaultProps} />);

      const textbox = container.querySelector('input');

      expect(textbox).toHaveAttribute('type', 'text');
    });

    // "color", "file" and "range" might work too, but only textboxes are officially supported
    [
      'date',
      'datetime-local',
      'email',
      'month',
      'number',
      'password',
      'search',
      'tel',
      'text',
      'time',
      'url',
      'week',
    ].forEach((type) => {
      it(`can render type="${type}" on the input element`, () => {
        const { container } = render(<FormFieldTextInput {...defaultProps} type={type} />);

        const textbox = container.querySelector('input');

        expect(textbox).toHaveAttribute('type', type);
      });
    });
  });

  describe('name', () => {
    it('associates the input with a form', () => {
      const name = 'message';
      const { container } = render(
        <form>
          <FormFieldTextInput {...defaultProps} name={name} />
        </form>,
      );

      const form = container.querySelector('form');
      const textbox = container.querySelector('input');

      // TypeScript definitions don't yet support the named index
      expect(form?.elements[name as any]).toBe(textbox);
    });
  });

  it('supports ref in React', () => {
    const ref = createRef<HTMLDivElement>();

    const { container } = render(<FormFieldTextInput {...defaultProps} ref={ref} />);

    const div = container.querySelector('div');

    expect(ref.current).toBe(div);
  });

  it('supports ref for the form control in React', () => {
    const inputRef = createRef<HTMLInputElement>();

    const { container } = render(<FormFieldTextInput {...defaultProps} inputRef={inputRef} />);

    const div = container.querySelector('input');

    expect(inputRef.current).toBe(div);
  });
});

afterEach(() => cleanup());
