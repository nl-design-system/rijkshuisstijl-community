import { FormFieldCheckbox, type FormFieldCheckboxProps } from '@utrecht/component-library-react';
import clsx from 'clsx';
import { Ref, useId } from 'react';
import { Icon } from './Icon';

export interface FormFieldCheckboxOptionProps extends FormFieldCheckboxProps {
  ref?: Ref<HTMLDivElement>;
}

export const FormFieldCheckboxOption = ({
  ref,
  description,
  invalid,
  errorMessage,
  ...restProps
}: FormFieldCheckboxOptionProps) => {
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
      description={description}
      errorMessage={errorMsg()}
      id={id}
      invalid={invalid}
      ref={ref}
      aria-describedby={
        clsx({
          [descriptionId]: description,
          [errorMessageId]: invalid && errorMessage,
        }) || undefined
      }
      {...restProps}
    />
  );
};

FormFieldCheckboxOption.displayName = 'FormFieldCheckboxOption';
