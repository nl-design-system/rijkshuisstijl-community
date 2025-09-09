import {
  FormFieldErrorMessage as UtrechtFormFieldErrorMessage,
  FormFieldErrorMessageProps as UtrechtFormFieldErrorMessageProps,
} from '@utrecht/component-library-react';
import { PropsWithChildren, Ref } from 'react';
import { Icon } from './Icon';

export interface FormFieldErrorMessageProps extends UtrechtFormFieldErrorMessageProps {
  ref?: Ref<HTMLDivElement>;
}

export const FormFieldErrorMessage = ({
  ref,
  children,
  ...restProps
}: PropsWithChildren<FormFieldErrorMessageProps>) => (
  <UtrechtFormFieldErrorMessage ref={ref} {...restProps}>
    <span className="utrecht-form-field-error-message--icon-container">
      <Icon className="utrecht-form-field-error-message--icon-container-icon" icon="alert-circle" /> {children}
    </span>
  </UtrechtFormFieldErrorMessage>
);

FormFieldErrorMessage.displayName = 'FormFieldErrorMessage';
