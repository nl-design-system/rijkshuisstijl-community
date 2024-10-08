import {
  FormFieldErrorMessage as UtrechtFormFieldErrorMessage,
  FormFieldErrorMessageProps as UtrechtFormFieldErrorMessageProps,
} from '@utrecht/component-library-react';
import { ForwardedRef, forwardRef, PropsWithChildren } from 'react';
import { Icon } from './icon/Icon';

export interface FormFieldErrorMessageProps extends UtrechtFormFieldErrorMessageProps {}

export const FormFieldErrorMessage = forwardRef(
  ({ children, ...restProps }: PropsWithChildren<FormFieldErrorMessageProps>, ref: ForwardedRef<HTMLDivElement>) => (
    <UtrechtFormFieldErrorMessage ref={ref} {...restProps}>
      <span className={'utrecht-form-field-error-message--icon-container'}>
        <Icon className={'utrecht-form-field-error-message--icon-container-icon'} icon={'alert-circle'}></Icon>{' '}
        {children}
      </span>
    </UtrechtFormFieldErrorMessage>
  ),
);

FormFieldErrorMessage.displayName = 'FormFieldErrorMessage';
