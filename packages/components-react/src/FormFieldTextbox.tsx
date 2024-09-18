import {
  FormField,
  FormFieldDescription,
  FormFieldTextboxProps,
  FormLabel,
  Textbox,
} from '@utrecht/component-library-react';
import { type TextboxTypes } from '@utrecht/component-library-react/dist/Textbox';
import clsx from 'clsx';
import { ForwardedRef, forwardRef, PropsWithChildren, useId } from 'react';
import { FormFieldErrorMessage } from './FormFieldErrorMessage';

export const FormFieldTextbox = forwardRef(
  (
    {
      name,
      invalid,
      disabled,
      label,
      errorMessage,
      description,
      readOnly,
      status,
      autoComplete,
      list,
      min,
      max,
      minLength,
      maxLength,
      step,
      placeholder,
      pattern,
      required,
      inputRequired,
      inputDir,
      type,
      value,
      onChange,
      onInput,
      onFocus,
      onBlur,
      defaultValue,
      size,
      children,
      inputRef,
      ...props
    }: PropsWithChildren<FormFieldTextboxProps>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const inputId = useId();
    const descriptionId = useId();
    const statusId = useId();
    const errorMessageId = useId();

    return (
      <FormField invalid={invalid} ref={ref} {...props}>
        <div className="utrecht-form-field__label">
          <FormLabel htmlFor={inputId}>{label}</FormLabel>
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
          <Textbox
            autoComplete={autoComplete}
            defaultValue={defaultValue}
            dir={inputDir || 'auto'}
            disabled={disabled}
            id={inputId}
            inputRequired={inputRequired}
            invalid={invalid}
            list={list}
            max={max}
            maxLength={maxLength}
            min={min}
            minLength={minLength}
            name={name}
            pattern={pattern}
            placeholder={placeholder}
            readOnly={readOnly}
            ref={inputRef}
            required={required}
            size={size}
            step={step}
            type={(type as TextboxTypes) || 'text'}
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
        {children}
      </FormField>
    );
  },
);

FormFieldTextbox.displayName = 'FormFieldTextbox';
