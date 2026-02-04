import {
  type FormFieldProps,
  Select,
  SelectOption,
  type SelectOptionProps,
  SelectProps,
} from '@utrecht/component-library-react';
import clsx from 'clsx';
import { PropsWithChildren, ReactNode, Ref, useId } from 'react';
import { FormField } from './FormField';

export { SelectOption, type SelectOptionProps };

export interface FormFieldSelectProps
  extends Omit<FormFieldProps, 'onInput' | 'onBlur' | 'onFocus' | 'onChange'>,
    Pick<
      SelectProps,
      | 'value'
      | 'onInput'
      | 'onBlur'
      | 'onFocus'
      | 'onChange'
      | 'defaultValue'
      | 'disabled'
      | 'name'
      | 'invalid'
      | 'required'
    > {
  errorMessage?: string;
  selectRef?: Ref<HTMLSelectElement>;
  status?: ReactNode;
  description?: string;
  input?: ReactNode;
  label: ReactNode;
  options?: string[];
  ref?: Ref<HTMLDivElement>;
}

export const FormFieldSelect = ({
  ref,
  description,
  disabled,
  selectRef,
  status,
  invalid,
  input,
  children,
  options,
  dir,
  defaultValue,
  value,
  onChange,
  onInput,
  onBlur,
  onFocus,
  name,
  ...restProps
}: PropsWithChildren<FormFieldSelectProps>) => {
  const id = useId();
  const descriptionId = useId();
  const statusId = useId();
  const errorMessageId = useId();

  const inputComponent: ReactNode = (
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
        'rhc-select--html-select-rtl': dir === 'rtl',
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
  );

  return (
    <FormField
      description={description}
      descriptionId={descriptionId}
      dir={dir}
      errorMessageId={errorMessageId}
      id={id}
      input={input ?? inputComponent}
      invalid={invalid}
      ref={ref}
      status={status}
      statusId={statusId}
      {...restProps}
    />
  );
};

FormFieldSelect.displayName = 'FormFieldSelect';
