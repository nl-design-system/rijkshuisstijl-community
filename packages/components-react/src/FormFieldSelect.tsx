import {
  FormField,
  FormFieldDescription,
  type FormFieldProps,
  FormLabel,
  Select,
  SelectOption,
  type SelectOptionProps,
  SelectProps,
} from '@utrecht/component-library-react';
import clsx from 'clsx';
import { ForwardedRef, forwardRef, PropsWithChildren, ReactElement, Ref, useId } from 'react';
import { FormFieldErrorMessage } from './FormFieldErrorMessage';

export { SelectOption, type SelectOptionProps };

export interface FormFieldSelectProps
  extends Omit<FormFieldProps, 'onInput' | 'onBlur' | 'onFocus' | 'onChange'>,
    Pick<
      SelectProps,
      'value' | 'onInput' | 'onBlur' | 'onFocus' | 'onChange' | 'defaultValue' | 'disabled' | 'name' | 'invalid'
    > {
  errorMessage?: string;
  selectRef?: Ref<HTMLSelectElement>;
  status?: string;
  description?: string;
  input?: ReactElement;
  label?: string;
  options?: string[];
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
      defaultValue,
      value,
      onChange,
      onInput,
      onBlur,
      onFocus,
      name,
      ...restProps
    }: PropsWithChildren<FormFieldSelectProps>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const id = useId();
    const descriptionId = useId();
    const statusId = useId();
    const errorMessageId = useId();

    return (
      <FormField dir={dir} input={input} invalid={invalid} ref={ref} type={'select'} {...restProps}>
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
            defaultValue={defaultValue}
            dir={dir}
            disabled={disabled}
            id={id}
            invalid={invalid}
            name={name}
            ref={selectRef}
            value={value}
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
            onBlur={onBlur}
            onChange={onChange}
            onFocus={onFocus}
            onInput={onInput}
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
