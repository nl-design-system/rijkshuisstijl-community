import {
  FormFieldTextarea as UtrechtFormFieldTextarea,
  FormFieldTextareaProps as UtrechtFormFieldTextareaProps,
} from '@utrecht/component-library-react';
import clsx from 'clsx';
import { Ref, useId } from 'react';
import { Icon } from './Icon';

export interface FormFieldTextareaProps extends UtrechtFormFieldTextareaProps {
  ref?: Ref<HTMLDivElement>;
}

export const FormFieldTextarea = ({
  ref,
  errorMessage,
  description,
  status,
  invalid,
  ...restProps
}: FormFieldTextareaProps) => {
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
    <UtrechtFormFieldTextarea
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
    />
  );
};

FormFieldTextarea.displayName = 'FormFieldTextarea';
