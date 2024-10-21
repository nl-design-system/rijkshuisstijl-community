import { FormField, FormFieldTextareaProps, FormFieldTextarea as Textarea } from '@utrecht/component-library-react';
import clsx from 'clsx';
import { ForwardedRef, forwardRef, PropsWithChildren, useId } from 'react';

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

    return (
      <FormField invalid={invalid} ref={ref} type={'textarea'} {...restProps}>
        <div className="utrecht-form-field__input">
          <Textarea
            autoComplete={autoComplete}
            cols={cols}
            defaultValue={defaultValue}
            description={description}
            dir={inputDir || 'auto'}
            disabled={disabled}
            errorMessage={errorMessage}
            id={inputId}
            inputRef={inputRef}
            invalid={invalid}
            label={label}
            maxLength={maxLength}
            minLength={minLength}
            name={name}
            placeholder={placeholder}
            readOnly={readOnly}
            required={required}
            rows={rows}
            spellCheck={spellCheck}
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
          />
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

FormFieldTextarea.displayName = 'FormFieldTextarea';
