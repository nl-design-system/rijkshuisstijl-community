import clsx from 'clsx';
import { ForwardedRef, forwardRef, PropsWithChildren, ReactNode, Ref, useId } from 'react';
import { FormField } from './FormField';
import { Radio, RadioProps } from './Radio';

export interface FormFieldRadioOptionProps extends RadioProps {
  errorMessage?: string;
  radioRef?: Ref<HTMLInputElement>;
  status?: ReactNode;
  description?: ReactNode;
  input?: ReactNode;
  label: ReactNode;
  type?: string;
  defaultValue?: string;
}

export const FormFieldRadioOption = forwardRef(
  (
    {
      label,
      description,
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

    const inputComponent: ReactNode = (
      <div className="utrecht-form-field__input rhc-form-field-radio-option__input">
        <Radio
          dir={dir}
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
          className={clsx({
            'utrecht-radio-button--html-radio-button-rtl': dir === 'rtl',
          })}
          {...restProps}
        ></Radio>
      </div>
    );
    return (
      <FormField
        className="utrecht-form-field utrecht-form-field--radio"
        description={description}
        descriptionId={descriptionId}
        dir={dir}
        errorMessage={errorMessage}
        errorMessageId={errorMessageId}
        id={id}
        invalid={invalid}
        label={label}
        ref={ref}
        statusId={statusId}
        {...restProps}
        input={input ?? inputComponent}
      />
    );
  },
);

FormFieldRadioOption.displayName = 'FormFieldRadioOption';
