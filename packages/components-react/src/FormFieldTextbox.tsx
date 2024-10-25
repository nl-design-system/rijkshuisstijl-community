import { FormFieldTextboxProps, FormFieldTextbox as TextBox } from '@utrecht/component-library-react';
import clsx from 'clsx';
import { ForwardedRef, forwardRef, PropsWithChildren, useId } from 'react';
import { Icon } from './icon/Icon';

export const FormFieldTextbox = forwardRef(
  (
    { invalid, errorMessage, description, status, children, ...restProps }: PropsWithChildren<FormFieldTextboxProps>,
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
      <TextBox
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
      </TextBox>
    );
  },
);

FormFieldTextbox.displayName = 'FormFieldTextbox';
