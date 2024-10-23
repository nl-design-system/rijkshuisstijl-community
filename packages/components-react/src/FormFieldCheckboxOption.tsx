import { FormFieldCheckbox, FormFieldCheckboxProps } from '@utrecht/component-library-react';
import clsx from 'clsx';
import { ForwardedRef, forwardRef, useId } from 'react';
import { Icon } from './icon/Icon';

export interface FormFieldCheckboxOptionProps extends FormFieldCheckboxProps {}

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
    const errorMessageId = useId();

    const errorMsg = () =>
      errorMessage && (
        <span className={'utrecht-form-field-error-message--icon-container'}>
          <Icon className={'utrecht-form-field-error-message--icon-container-icon'} icon={'alert-circle'}></Icon>{' '}
          {errorMessage}
        </span>
      );

    return (
      <FormFieldCheckbox
        className="utrecht-form-field__checkbox rhc-form-label--checkbox"
        defaultValue={defaultValue}
        description={description}
        disabled={disabled}
        errorMessage={errorMsg()}
        id={id}
        inputRef={inputRef}
        invalid={invalid}
        label={label}
        name={name}
        ref={ref}
        status={status}
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
        {...restProps}
      />
    );
  },
);

FormFieldCheckboxOption.displayName = 'FormFieldCheckboxOption';
