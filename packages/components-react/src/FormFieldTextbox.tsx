import { FormFieldTextboxProps, FormFieldTextbox as TextBox } from '@utrecht/component-library-react';
import { type TextboxTypes } from '@utrecht/component-library-react/dist/Textbox';
import clsx from 'clsx';
import { ForwardedRef, forwardRef, PropsWithChildren, useId } from 'react';

export const FormFieldTextbox = forwardRef(
  (
    {
      name,
      invalid,
      disabled,
      label,
      errorMessage,
      description,
      readOnly,
      status,
      autoComplete,
      list,
      min,
      max,
      minLength,
      maxLength,
      step,
      placeholder,
      pattern,
      required,
      inputRequired,
      inputDir,
      type,
      value,
      onChange,
      onInput,
      onFocus,
      onBlur,
      defaultValue,
      size,
      children,
      inputRef,
      ...restProps
    }: PropsWithChildren<FormFieldTextboxProps>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const inputId = useId();
    const descriptionId = useId();
    const statusId = useId();
    const errorMessageId = useId();

    return (
      <TextBox
        autoComplete={autoComplete}
        defaultValue={defaultValue}
        description={description}
        dir={inputDir || 'auto'}
        disabled={disabled}
        errorMessage={errorMessage}
        id={inputId}
        inputRef={inputRef}
        inputRequired={inputRequired}
        invalid={invalid}
        label={label}
        list={list}
        max={max}
        maxLength={maxLength}
        min={min}
        minLength={minLength}
        name={name}
        pattern={pattern}
        placeholder={placeholder}
        readOnly={readOnly}
        ref={ref}
        required={required}
        size={size}
        step={step}
        type={(type as TextboxTypes) || 'text'}
        value={value}
        aria-describedby={
          clsx({
            [descriptionId]: description,
            [errorMessageId]: invalid,
            [statusId]: status,
          }) || undefined
        }
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
        onInput={onInput}
        {...restProps}
      >
        {children}
      </TextBox>
    );
  },
);

FormFieldTextbox.displayName = 'FormFieldTextbox';
