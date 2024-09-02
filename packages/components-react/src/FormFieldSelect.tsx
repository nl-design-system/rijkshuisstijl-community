import {
  FormField,
  FormFieldDescription,
  FormLabel,
  Select,
  SelectOption,
  SelectProps,
} from '@utrecht/component-library-react';
import clsx from 'clsx';
import { ForwardedRef, forwardRef, PropsWithChildren, ReactNode, Ref, useId } from 'react';
import { FormFieldErrorMessage } from './FormFieldErrorMessage';

export interface FormFieldSelectProps extends SelectProps {
  errorMessage?: string;
  selectRef?: Ref<HTMLSelectElement>;
  status?: ReactNode;
  description?: ReactNode;
  input?: ReactNode;
  label?: ReactNode;
  type?: string;
  options?: string[];
  defaultValue?: string;
}

export const FormFieldSelect = forwardRef(
  (
    {
      label,
      description,
      disabled,
      errorMessage,
      selectRef,
      status,
      invalid,
      children,
      options,
      input,
      dir,
      ...restProps
    }: PropsWithChildren<FormFieldSelectProps>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const id = useId();
    const descriptionId = useId();
    const statusId = useId();
    const errorMessageId = useId();

    return (
      <FormField type={'select'} invalid={invalid} ref={ref} input={input} dir={dir}>
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
        <div className="utrecht-form-field__input">
          <Select
            className={clsx({
              'utrecht-select--html-select-rtl': dir === 'rtl',
            })}
            aria-describedby={
              clsx({
                [descriptionId]: description,
                [errorMessageId]: invalid,
                [statusId]: status,
              }) || undefined
            }
            id={id}
            disabled={disabled}
            ref={selectRef}
            dir={dir}
            invalid={invalid}
            {...restProps}
          >
            {options?.length
              ? options.map((option, index) => (
                  <SelectOption disabled={disabled} id={option + index} value={option} invalid={invalid} key={index}>
                    {option}
                  </SelectOption>
                ))
              : children}
          </Select>
        </div>
        {status && (
          <div className="utrecht-form-field__status" id={statusId}>
            {status}
          </div>
        )}
      </FormField>
    );
  },
);

FormFieldSelect.displayName = 'FormFieldSelect';
