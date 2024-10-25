import { FormFieldCheckbox, FormFieldCheckboxProps } from '@utrecht/component-library-react';
import clsx from 'clsx';
import { ForwardedRef, forwardRef, useId } from 'react';
import { Icon } from './icon/Icon';

export interface FormFieldCheckboxOptionProps extends FormFieldCheckboxProps {}

export const FormFieldCheckboxOption = forwardRef(
  (
    { description, invalid, errorMessage, status, defaultValue, ...restProps }: FormFieldCheckboxOptionProps,
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
        errorMessage={errorMsg()}
        id={id}
        invalid={invalid}
        ref={ref}
        status={status}
        aria-describedby={
          clsx({
            [descriptionId]: description,
            [errorMessageId]: invalid && errorMessage,
          }) || undefined
        }
        {...restProps}
      />
    );
  },
);

FormFieldCheckboxOption.displayName = 'FormFieldCheckboxOption';
