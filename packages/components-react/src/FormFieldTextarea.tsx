import {
  FormField,
  FormFieldDescription,
  FormFieldProps,
  FormLabel,
  Textarea,
  TextareaProps,
} from '@utrecht/component-library-react';
import clsx from 'clsx';
import { ForwardedRef, forwardRef, PropsWithChildren, ReactNode, Ref, useId } from 'react';
import { FormFieldErrorMessage } from './FormFieldErrorMessage';
export interface FormFieldTextareaProps
  extends Omit<FormFieldProps, 'onInput' | 'onBlur' | 'onFocus' | 'onChange'>,
    Pick<
      TextareaProps,
      | 'onInput'
      | 'onBlur'
      | 'onFocus'
      | 'onChange'
      | 'autoComplete'
      | 'cols'
      | 'defaultValue'
      | 'disabled'
      | 'invalid'
      | 'maxLength'
      | 'minLength'
      | 'name'
      | 'placeholder'
      | 'readOnly'
      | 'required'
      | 'rows'
      | 'value'
    > {
  errorMessage?: string;
  inputRef?: Ref<HTMLTextAreaElement>;
  inputDir?: 'auto' | 'ltr' | 'rtl';
  status?: ReactNode;
}

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
      <FormField type={'textarea'} invalid={invalid} ref={ref} {...restProps}>
        <div className="utrecht-form-field__label">
          <FormLabel htmlFor={inputId}>{label}</FormLabel>
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
          <Textarea
            aria-describedby={
              clsx({
                [descriptionId]: description,
                [errorMessageId]: invalid,
                [statusId]: status,
              }) || undefined
            }
            autoComplete={autoComplete}
            cols={cols}
            defaultValue={defaultValue}
            dir={inputDir || 'auto'}
            disabled={disabled}
            id={inputId}
            invalid={invalid}
            maxLength={maxLength}
            minLength={minLength}
            name={name}
            placeholder={placeholder}
            readOnly={readOnly}
            ref={inputRef}
            required={required}
            rows={rows}
            spellCheck={spellCheck}
            value={value}
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
