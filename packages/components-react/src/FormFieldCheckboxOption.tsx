import { FormFieldCheckbox, type FormFieldCheckboxProps } from '@utrecht/component-library-react';
import clsx from 'clsx';
import { Ref, useId } from 'react';

export interface FormFieldCheckboxOptionProps extends FormFieldCheckboxProps {
  ref?: Ref<HTMLDivElement>;
}

export const FormFieldCheckboxOption = ({
  description,
  invalid,
  inputInvalid,
  errorMessage,
  ...restProps
}: FormFieldCheckboxOptionProps) => {
  const id = useId();
  const descriptionId = useId();
  const errorMessageId = useId();

  return (
    <FormFieldCheckbox
      className="utrecht-form-field__checkbox rhc-form-label--checkbox"
      description={description}
      errorMessage={errorMessage}
      id={id}
      inputInvalid={inputInvalid}
      invalid={invalid}
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
