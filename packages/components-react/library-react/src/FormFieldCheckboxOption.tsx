/**
 * @license EUPL-1.2
 * Copyright (c) 2026 Community for NL Design System
 */

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
  className,
  ...restProps
}: FormFieldCheckboxOptionProps) => {
  const id = useId();
  const descriptionId = useId();
  const errorMessageId = useId();

  return (
    <FormFieldCheckbox
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
      className={clsx(
        'utrecht-form-field__checkbox',
        'rhc-form-label--checkbox',
        'rhc-form-field-checkbox-option',
        'rhc-form-field',
        className,
      )}
      {...restProps}
    />
  );
};

FormFieldCheckboxOption.displayName = 'FormFieldCheckboxOption';
