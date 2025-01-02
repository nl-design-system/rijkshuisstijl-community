import {
  FormFieldTextboxProps as FormFieldTextInputProps,
  FormFieldTextbox as TextInput,
} from '@utrecht/component-library-react';
import clsx from 'clsx';
import { ForwardedRef, forwardRef, PropsWithChildren, useId } from 'react';
import { Icon } from './icon/Icon';

export const FormFieldTextInput = forwardRef(
  (
    { invalid, errorMessage, description, status, children, ...restProps }: PropsWithChildren<FormFieldTextInputProps>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const inputId = useId();
    const descriptionId = useId();
    const statusId = useId();
    const errorMessageId = useId();

    const errorMsg = () =>
      errorMessage && (
        <span className={'utrecht-form-field-error-message--icon-container'}>
          <Icon className={'utrecht-form-field-error-message--icon-container-icon'} icon={'alert-circle'}></Icon>{' '}
          {errorMessage}
        </span>
      );

    return (
      <TextInput
        description={description}
        errorMessage={errorMsg()}
        id={inputId}
        invalid={invalid}
        ref={ref}
        status={status}
        aria-describedby={
          clsx({
            [descriptionId]: description,
            [errorMessageId]: invalid,
            [statusId]: status,
          }) || undefined
        }
        {...restProps}
      >
        {children}
      </TextInput>
    );
  },
);

FormFieldTextInput.displayName = 'FormFieldTextInput';