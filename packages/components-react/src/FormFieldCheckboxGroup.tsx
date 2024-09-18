import { FormField, FormFieldDescription, FormFieldProps, FormLabel } from '@utrecht/component-library-react';
import clsx from 'clsx';
import { Children, ForwardedRef, forwardRef, PropsWithChildren, ReactNode, useId } from 'react';
import { CheckboxGroup } from './CheckboxGroup';
import { FormFieldErrorMessage } from './FormFieldErrorMessage';

export interface FormFieldCheckboxGroupProps extends FormFieldProps {
  errorMessage?: string;
  status?: ReactNode;
  description?: ReactNode;
  label?: ReactNode;
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
        ref={ref}
        type={hasManyChildren(children) ? 'group' : undefined}
        {...restProps}
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
            role={hasManyChildren(children) ? 'group' : undefined}
            aria-describedby={
              clsx({
                [descriptionId]: description,
                [errorMessageId]: invalid && errorMessage,
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
