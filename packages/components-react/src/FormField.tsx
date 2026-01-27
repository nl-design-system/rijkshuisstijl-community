import { type FormFieldProps, FormLabel, FormField as UtrechtFormField } from '@utrecht/component-library-react';
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
      description={description}
      dir={dir}
      invalid={invalid}
      label={labelComponent}
      ref={ref}
    >
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
