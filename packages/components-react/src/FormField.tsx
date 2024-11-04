import {
  FormFieldDescription,
  type FormFieldProps,
  FormLabel,
  FormField as UtrechtFormField,
} from '@utrecht/component-library-react';
import { ForwardedRef, forwardRef, PropsWithChildren, ReactNode } from 'react';
import { FormFieldErrorMessage } from './FormFieldErrorMessage';

export interface CustomFormFieldProps extends FormFieldProps {
  label?: ReactNode;
  description?: ReactNode;
  errorMessage?: string;
}

export const FormField = forwardRef(
  (
    { description, id, invalid, errorMessage, label, ...restProps }: PropsWithChildren<FormFieldProps>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <UtrechtFormField id={id} ref={ref} {...restProps}>
        <div className="utrecht-form-field__label">
          <FormLabel htmlFor={id}>{label}</FormLabel>
        </div>
        {description && <FormFieldDescription>{description}</FormFieldDescription>}
        {invalid && errorMessage && <FormFieldErrorMessage>{errorMessage}</FormFieldErrorMessage>}
        {restProps.children}
      </UtrechtFormField>
    );
  },
);

FormField.displayName = 'FormField';
