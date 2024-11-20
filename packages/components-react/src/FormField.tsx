import { type FormFieldProps, FormLabel, FormField as UtrechtFormField } from '@utrecht/component-library-react';
import { ForwardedRef, forwardRef, PropsWithChildren, ReactNode } from 'react';
import { FormFieldErrorMessage } from './FormFieldErrorMessage';

export interface CustomFormFieldProps extends FormFieldProps {
  label: string;
  description?: string;
  errorMessage?: string;
  input: ReactNode;
  status?: ReactNode;
  invalid?: boolean;
  statusId: string;
  errorMessageId: string;
  descriptionId: string;
}

export const FormField = forwardRef(
  (
    {
      className,
      errorMessageId,
      statusId,
      invalid,
      input,
      description,
      label,
      status,
      id,
      errorMessage,
      ...restProps
    }: PropsWithChildren<CustomFormFieldProps>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const labelComponent = <FormLabel htmlFor={id}>{label}</FormLabel>;

    return (
      <UtrechtFormField className={className} description={description} id={id} label={labelComponent} ref={ref}>
        {invalid && errorMessage && <FormFieldErrorMessage id={errorMessageId}>{errorMessage}</FormFieldErrorMessage>}
        {input}
        {status && (
          <div className="utrecht-form-field__status" id={statusId}>
            {status}
          </div>
        )}
        {restProps.children}
      </UtrechtFormField>
    );
  },
);

FormField.displayName = 'FormField';
