import {
  FormFieldDescription,
  type FormFieldProps,
  FormLabel,
  FormField as UtrechtFormField,
} from '@utrecht/component-library-react';
import { ForwardedRef, forwardRef, PropsWithChildren, ReactElement } from 'react';
import { FormFieldErrorMessage } from './FormFieldErrorMessage';

export interface CustomFormFieldProps extends FormFieldProps {
  label: string;
  description?: string;
  errorMessage?: string;
  input: ReactElement;
  status?: ReactElement | string;
  invalid?: boolean;
  statusId: string;
  errorMessageId: string;
  descriptionId: string;
}

export const FormField = forwardRef(
  (
    {
      errorMessageId,
      statusId,
      descriptionId,
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
    const descriptionComponent = () => {
      return description && <FormFieldDescription id={descriptionId}>{description}</FormFieldDescription>;
    };

    const labelComponent = <FormLabel htmlFor={id}>{label}</FormLabel>;

    return (
      <UtrechtFormField description={descriptionComponent()} id={id} label={labelComponent} ref={ref}>
        {invalid && errorMessage && <FormFieldErrorMessage id={errorMessageId}>{errorMessage}</FormFieldErrorMessage>}
        {input && <div>{input}</div>}
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
