import clsx from 'clsx';
import { ReactNode, Ref, useId } from 'react';
import { FormField } from './FormField';
import { Radio, RadioProps } from './Radio';

export interface FormFieldRadioProps extends RadioProps {
  errorMessage?: string;
  radioRef?: Ref<HTMLInputElement>;
  status?: ReactNode;
  description?: ReactNode;
  input?: ReactNode;
  inputInvalid?: boolean;
  label: ReactNode;
  type?: string;
  defaultValue?: string;
  ref?: Ref<HTMLDivElement>;
}

export const FormFieldRadio = ({
  ref,
  label,
  description,
  errorMessage,
  radioRef,
  status,
  invalid,
  inputInvalid,
  input,
  dir,
  ...restProps
}: FormFieldRadioProps) => {
  const id = useId();
  const descriptionId = useId();
  const statusId = useId();
  const errorMessageId = useId();

  const inputComponent: ReactNode = (
    <div className="utrecht-form-field__input rhc-form-field-radio-option__input">
      <Radio
        dir={dir}
        id={id}
        invalid={inputInvalid || invalid}
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
      className="utrecht-form-field utrecht-form-field--radio rhc-radio "
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
};

FormFieldRadio.displayName = 'FormFieldRadio';
