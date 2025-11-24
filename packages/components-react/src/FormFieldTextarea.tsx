import {
  FormFieldTextarea as UtrechtFormFieldTextarea,
  FormFieldTextareaProps as UtrechtFormFieldTextareaProps,
} from '@utrecht/component-library-react';
import clsx from 'clsx';
import { Ref, useId } from 'react';

export interface FormFieldTextareaProps extends UtrechtFormFieldTextareaProps {
  ref?: Ref<HTMLDivElement>;
}

export const FormFieldTextarea = ({ description, status, invalid, ...restProps }: FormFieldTextareaProps) => {
  const inputId = useId();
  const descriptionId = useId();
  const statusId = useId();
  const errorMessageId = useId();

  return (
    <UtrechtFormFieldTextarea
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

FormFieldTextarea.displayName = 'FormFieldTextarea';
