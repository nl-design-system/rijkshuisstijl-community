import {
  FormFieldTextbox as UtrechtFormFieldTextInput,
  FormFieldTextboxProps as UtrechtFormFieldTextInputProps,
} from '@utrecht/component-library-react';
import clsx from 'clsx';
import { PropsWithChildren, Ref, useId } from 'react';

export interface FormFieldTextInputProps extends UtrechtFormFieldTextInputProps {
  ref?: Ref<HTMLDivElement>;
}

export const FormFieldTextInput = ({
  ref,
  invalid,
  errorMessage,
  description,
  status,
  children,
  ...restProps
}: PropsWithChildren<FormFieldTextInputProps>) => {
  const inputId = useId();
  const descriptionId = useId();
  const statusId = useId();
  const errorMessageId = useId();

  return (
    <UtrechtFormFieldTextInput
      description={description}
      errorMessage={errorMessage}
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
    </UtrechtFormFieldTextInput>
  );
};

FormFieldTextInput.displayName = 'FormFieldTextInput';
