import { FormFieldTextareaProps, FormFieldTextarea as Textarea } from '@utrecht/component-library-react';
import clsx from 'clsx';
import { ForwardedRef, forwardRef, PropsWithChildren, useId } from 'react';
import { Icon } from './icon/Icon';

export { Textarea, type FormFieldTextareaProps };

export const FormFieldTextarea = forwardRef(
  (
    {
      autoComplete,
      cols,
      description,
      defaultValue,
      name,
      disabled,
      label,
      errorMessage,
      inputRef,
      inputDir,
      invalid,
      maxLength,
      minLength,
      placeholder,
      readOnly,
      required,
      inputRequired,
      rows,
      spellCheck,
      status,
      value,
      onChange,
      onFocus,
      onInput,
      onBlur,
      ...restProps
    }: PropsWithChildren<FormFieldTextareaProps>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const inputId = useId();
    const descriptionId = useId();
    const statusId = useId();
    const errorMessageId = useId();

    const errorMsg = () =>
      errorMessage && (
        <span className={'utrecht-form-field-error-message--icon-container'}>
          <Icon className={'utrecht-form-field-error-message--icon-container-icon'} icon={'alert-circle'}></Icon>{' '}
          {errorMessage}
        </span>
      );

    return (
      <Textarea
        autoComplete={autoComplete}
        cols={cols}
        defaultValue={defaultValue}
        description={description}
        disabled={disabled}
        errorMessage={errorMsg()}
        id={inputId}
        inputDir={inputDir || 'auto'}
        inputRef={inputRef}
        inputRequired={inputRequired}
        invalid={invalid}
        label={label}
        maxLength={maxLength}
        minLength={minLength}
        name={name}
        placeholder={placeholder}
        readOnly={readOnly}
        ref={ref}
        required={required}
        rows={rows}
        spellCheck={spellCheck}
        status={status}
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
      />
    );
  },
);

FormFieldTextarea.displayName = 'FormFieldTextarea';
