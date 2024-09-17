import {
  CheckboxProps,
  FormField,
  FormFieldDescription,
  FormFieldProps,
  FormLabel,
} from '@utrecht/component-library-react';
import clsx from 'clsx';
import { ForwardedRef, forwardRef, ReactNode, useId } from 'react';
import { Checkbox } from './Checkbox';
import { FormFieldErrorMessage } from './FormFieldErrorMessage';

export interface FormFieldCheckboxOptionProps
  extends Omit<FormFieldProps, 'onBlur' | 'onFocus' | 'onChange' | 'onInput'>,
    Pick<
      CheckboxProps,
      'name' | 'value' | 'disabled' | 'invalid' | 'onInput' | 'onBlur' | 'onFocus' | 'onChange' | 'defaultValue'
    > {
  label: ReactNode;
  description?: ReactNode;
  errorMessage?: ReactNode;
  inputRef?: ForwardedRef<HTMLInputElement>;
  status?: string;
}

export const FormFieldCheckboxOption = forwardRef(
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
      defaultValue,
      ...restProps
    }: FormFieldCheckboxOptionProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const id = useId();
    const descriptionId = useId();
    const statusId = useId();
    const errorMessageId = useId();
    return (
      <FormField className="rhc-form-field-checkbox" invalid={invalid} ref={ref} type="checkbox" {...restProps}>
        <div className="utrecht-form-field__input">
          <Checkbox
            defaultValue={defaultValue}
            disabled={disabled}
            id={id}
            invalid={invalid}
            name={name}
            ref={inputRef}
            value={value}
            aria-describedby={
              clsx({
                [descriptionId]: description,
                [errorMessageId]: invalid && errorMessage,
              }) || undefined
            }
            onBlur={onBlur}
            onChange={onChange}
            onFocus={onFocus}
            onInput={onInput}
          />
        </div>
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
        {status && (
          <div className="utrecht-form-field__status" id={statusId}>
            {status}
          </div>
        )}
      </FormField>
    );
  },
);

FormFieldCheckboxOption.displayName = 'FormFieldCheckboxOption';
