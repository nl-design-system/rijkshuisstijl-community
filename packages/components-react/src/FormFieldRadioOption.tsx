import { FormField, FormFieldDescription, FormLabel } from '@utrecht/component-library-react';
import clsx from 'clsx';
import { ForwardedRef, forwardRef, PropsWithChildren, ReactNode, Ref, useId } from 'react';
import { FormFieldErrorMessage } from './FormFieldErrorMessage';
import { Radio, RadioProps } from './Radio';

export interface FormFieldRadioOptionProps extends RadioProps {
  errorMessage?: string;
  radioRef?: Ref<HTMLInputElement>;
  status?: ReactNode;
  description?: ReactNode;
  input?: ReactNode;
  label?: ReactNode;
  type?: string;
  defaultValue?: string;
}

export const FormFieldRadioOption = forwardRef(
  (
    {
      label,
      description,
      disabled,
      errorMessage,
      radioRef,
      status,
      invalid,
      input,
      dir,
      ...restProps
    }: PropsWithChildren<FormFieldRadioOptionProps>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const id = useId();
    const descriptionId = useId();
    const statusId = useId();
    const errorMessageId = useId();

    return (
      <FormField dir={dir} input={input} invalid={invalid} ref={ref} type={'radio'}>
        <div className="utrecht-form-field__input">
          <Radio
            dir={dir}
            disabled={disabled}
            id={id}
            invalid={invalid}
            ref={radioRef}
            aria-describedby={
              clsx({
                [descriptionId]: description,
                [errorMessageId]: invalid,
                [statusId]: status,
              }) || undefined
            }
            className={clsx(
              {
                'utrecht-radio-button--html-radio-button-rtl': dir === 'rtl',
              },
              'rhc-radio',
            )}
            {...restProps}
          ></Radio>
        </div>
        <div className="utrecht-form-field__label">
          <FormLabel htmlFor={id}>{label}</FormLabel>
        </div>
        {description && (
          <FormFieldDescription className="utrecht-form-field__description" id={descriptionId}>
            {description}
          </FormFieldDescription>
        )}
        {invalid && errorMessage && (
          <FormFieldErrorMessage className="utrecht-form-field__error-message" id={errorMessageId}>
            {errorMessage}
          </FormFieldErrorMessage>
        )}
        {status && (
          <div className="utrecht-form-field__status" id={statusId}>
            {status}
          </div>
        )}
      </FormField>
    );
  },
);

FormFieldRadioOption.displayName = 'FormFieldRadioOption';
