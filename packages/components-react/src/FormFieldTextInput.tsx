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
  invalid,
  description,
  status,
  className,
  ...restProps
}: PropsWithChildren<FormFieldTextInputProps>) => {
  const inputId = useId();
  const descriptionId = useId();
  const statusId = useId();
  const errorMessageId = useId();

  return (
    <UtrechtFormFieldTextInput
      className={clsx('rhc-form-field', className)}
      description={description}
      id={inputId}
      invalid={invalid}
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

FormFieldTextInput.displayName = 'FormFieldTextInput';
