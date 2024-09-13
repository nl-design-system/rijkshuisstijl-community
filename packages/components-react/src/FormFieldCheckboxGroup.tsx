import { FormField, FormFieldDescription, FormFieldProps, FormLabel } from '@utrecht/component-library-react';
import clsx from 'clsx';
import { Children, ForwardedRef, forwardRef, PropsWithChildren, ReactNode, useId } from 'react';
import { CheckboxGroup } from './CheckboxGroup';
import { FormFieldErrorMessage } from './FormFieldErrorMessage';

export interface FormFieldCheckboxGroupProps extends FormFieldProps {
  errorMessage?: string;
  status?: ReactNode;
  description?: ReactNode;
  input?: ReactNode;
  label?: ReactNode;
  inputRef?: ForwardedRef<HTMLDivElement>;
}
const hasManyChildren = (children: ReactNode) => {
  return Children.count(children) > 1;
};
export const FormFieldCheckboxGroup = forwardRef(
  (
    {
      label,
      description,
      errorMessage,
      status,
      invalid,
      children,
      inputRef,
      dir,
      ...restProps
    }: PropsWithChildren<FormFieldCheckboxGroupProps>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const id = useId();
    const descriptionId = useId();
    const statusId = useId();
    const errorMessageId = useId();

    return (
      <FormField
        dir={dir}
        invalid={invalid}
        type={hasManyChildren(children) ? 'group' : undefined}
        {...restProps}
        ref={ref}
      >
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
          <CheckboxGroup
            dir={dir}
            id={id}
            ref={inputRef}
            aria-describedby={
              clsx({
                [descriptionId]: description,
                [errorMessageId]: invalid,
                [statusId]: status,
              }) || undefined
            }
          >
            {children}
          </CheckboxGroup>
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

FormFieldCheckboxGroup.displayName = 'FormFieldCheckboxGroup';
