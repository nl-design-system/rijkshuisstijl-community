import {
  type FormFieldProps,
  Select,
  SelectOption,
  type SelectOptionProps,
  SelectProps,
} from '@utrecht/component-library-react';
import clsx from 'clsx';
import { ForwardedRef, forwardRef, PropsWithChildren, ReactNode, Ref, useId } from 'react';
import { FormField } from './FormField';

export { SelectOption, type SelectOptionProps };

export interface FormFieldSelectProps
  extends Omit<FormFieldProps, 'onInput' | 'onBlur' | 'onFocus' | 'onChange'>,
    Pick<
      SelectProps,
      'value' | 'onInput' | 'onBlur' | 'onFocus' | 'onChange' | 'defaultValue' | 'disabled' | 'name' | 'invalid'
    > {
  errorMessage?: string;
  selectRef?: Ref<HTMLSelectElement>;
  status?: ReactNode;
  description?: string;
  input?: ReactNode;
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
      <FormField
        description={description}
        dir={dir}
        errorMessage={errorMessage}
        id={id}
        input={input}
        invalid={invalid}
        label={label}
        ref={ref}
        type={'select'}
        {...restProps}
      >
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
