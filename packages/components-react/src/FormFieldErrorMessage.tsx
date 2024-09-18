import {
  FormFieldErrorMessage as UtrechtFormFieldErrorMessage,
  FormFieldErrorMessageProps as UtrechtFormFieldErrorMessageProps,
} from '@utrecht/component-library-react';
import { Icon as UtrechtIcon } from '@utrecht/component-library-react';
import { ForwardedRef, forwardRef, PropsWithChildren } from 'react';
import { ErrorIcon } from './icons';

export interface FormFieldErrorMessageProps extends UtrechtFormFieldErrorMessageProps {}

export const FormFieldErrorMessage = forwardRef(
  ({ children, ...restProps }: PropsWithChildren<FormFieldErrorMessageProps>, ref: ForwardedRef<HTMLDivElement>) => (
    <UtrechtFormFieldErrorMessage ref={ref} {...restProps}>
      <span className={'utrecht-form-field-error-message--icon-container'}>
        <UtrechtIcon className={'utrecht-form-field-error-message--icon-container-icon'}>
          <ErrorIcon />
        </UtrechtIcon>{' '}
        {children}
      </span>
    </UtrechtFormFieldErrorMessage>
  ),
);

FormFieldErrorMessage.displayName = 'FormFieldErrorMessage';
