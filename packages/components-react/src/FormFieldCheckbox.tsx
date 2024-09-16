import {
  CheckboxProps,
  FormField,
  FormFieldDescription,
  FormFieldProps,
  FormLabel,
} from '@utrecht/component-library-react';
import clsx from 'clsx';
import { ForwardedRef, forwardRef, useId } from 'react';
import { Checkbox } from './Checkbox';
import { FormFieldErrorMessage } from './FormFieldErrorMessage';

export interface FormFieldCheckboxProps
  extends Omit<FormFieldProps, 'onBlur' | 'onFocus' | 'onChange' | 'onInput'>,
    Pick<CheckboxProps, 'name' | 'value' | 'disabled' | 'invalid' | 'onInput' | 'onBlur' | 'onFocus' | 'onChange'> {
  label: string;
  description?: string;
  errorMessage?: string;
  inputRef?: ForwardedRef<HTMLInputElement>;
  status?: string;
}

export const FormFieldCheckbox = forwardRef(
  (
    {
      label,
      description,
      invalid,
      errorMessage,
      inputRef,
      status,
      disabled,
      name,
      value,
      onInput,
      onBlur,
      onFocus,
      onChange,
      ...restProps
    }: FormFieldCheckboxProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const id = useId();
    const descriptionId = useId();
    const statusId = useId();
    const errorMessageId = useId();
    return (
      <FormField className="rhc-form-field-checkbox" invalid={invalid} ref={ref} type="checkbox" {...restProps}>
        <div className="utrecht-form-field__label">
          <FormLabel className="rhc-form-label--checkbox" htmlFor={id}>
            {label}
          </FormLabel>
        </div>
        {description && (
          <FormFieldDescription className="utrecht-form-field__description" id={descriptionId}>
            {description}
          </FormFieldDescription>
        )}
        {invalid && errorMessage && (
          <FormFieldErrorMessage className="utrecht-form-field__error-message" id={errorMessageId}>
            {errorMessage}
          </FormFieldErrorMessage>
        )}
        <div className="utrecht-form-field__input">
          <Checkbox
            disabled={disabled}
            id={id}
            invalid={invalid}
            name={name}
            ref={inputRef}
            value={value}
            aria-describedby={
              clsx({
                [descriptionId]: description,
                [errorMessageId]: invalid,
                [statusId]: status,
              }) || undefined
            }
            onBlur={onBlur}
            onChange={onChange}
            onFocus={onFocus}
            onInput={onInput}
          />
        </div>
        {status && (
          <div className="utrecht-form-field__status" id={statusId}>
            {status}
          </div>
        )}
      </FormField>
    );
  },
);

FormFieldCheckbox.displayName = 'FormFieldCheckbox';
