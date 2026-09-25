/**
 * @license EUPL-1.2
 * Copyright (c) 2026 Community for NL Design System
 */

import {
  FormFieldDescription,
  type FormFieldProps,
  FormLabel,
  FormField as UtrechtFormField,
} from '@utrecht/component-library-react';
import clsx from 'clsx';
import { PropsWithChildren, ReactNode, Ref } from 'react';
import { FormFieldErrorMessage } from './FormFieldErrorMessage';

export interface CustomFormFieldProps extends FormFieldProps {
  label: ReactNode;
  description?: ReactNode;
  errorMessage?: string;
  input: ReactNode;
  status?: ReactNode;
  invalid?: boolean;
  statusId: string;
  errorMessageId: string;
  descriptionId: string;
  ref?: Ref<HTMLDivElement>;
}

export const FormField = ({
  ref,
  className,
  errorMessageId,
  dir,
  statusId,
  invalid,
  input,
  description,
  descriptionId,
  label,
  status,
  id,
  errorMessage,
  children,
}: PropsWithChildren<CustomFormFieldProps>) => {
  const labelComponent = <FormLabel htmlFor={id}>{label}</FormLabel>;

  return (
    <UtrechtFormField
      className={clsx('rhc-form-field', className)}
      dir={dir}
      invalid={invalid}
      label={labelComponent}
      ref={ref}
    >
      {description && (
        <FormFieldDescription className="utrecht-form-field__description" id={descriptionId}>
          {description}
        </FormFieldDescription>
      )}
      {invalid && errorMessage && <FormFieldErrorMessage id={errorMessageId}>{errorMessage}</FormFieldErrorMessage>}
      {input}
      {status && (
        <div className="utrecht-form-field__status" id={statusId}>
          {status}
        </div>
      )}
      {children}
    </UtrechtFormField>
  );
};

FormField.displayName = 'FormField';
