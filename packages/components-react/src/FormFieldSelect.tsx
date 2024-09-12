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
      <FormField dir={dir} input={input} invalid={invalid} ref={ref} type={'select'}>
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
            dir={dir}
            disabled={disabled}
            id={id}
            invalid={invalid}
            ref={selectRef}
            aria-describedby={
              clsx({
                [descriptionId]: description,
                [errorMessageId]: invalid,
                [statusId]: status,
              }) || undefined
            }
            className={clsx({
              'utrecht-select--html-select-rtl': dir === 'rtl',
            })}
            {...restProps}
          >
            {options?.length
              ? options.map((option, index) => (
                  <SelectOption disabled={disabled} id={option + index} invalid={invalid} key={index} value={option}>
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
