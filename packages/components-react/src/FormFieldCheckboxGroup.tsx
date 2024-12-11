import { type FormFieldProps } from '@utrecht/component-library-react';
import clsx from 'clsx';
import { Children, ForwardedRef, forwardRef, PropsWithChildren, ReactNode, useId } from 'react';
import { CheckboxGroup } from './CheckboxGroup';
import { FormField } from './FormField';

export interface FormFieldCheckboxGroupProps extends FormFieldProps {
  errorMessage?: string;
  status?: string;
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
      input,
      status,
      invalid,
      dir,
      children,
      ...restProps
    }: PropsWithChildren<FormFieldCheckboxGroupProps>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const id = useId();
    const descriptionId = useId();
    const statusId = useId();
    const errorMessageId = useId();

    const inputComponent: ReactNode = (
      <div className="utrecht-form-field__input">
        <CheckboxGroup
          dir={dir}
          id={id}
          role={hasManyChildren(children) ? 'group' : undefined}
          aria-describedby={
            clsx({
              [descriptionId]: description,
              [errorMessageId]: invalid && errorMessage,
              [statusId]: status,
            }) || undefined
          }
        >
          {children}
        </CheckboxGroup>
      </div>
    );

    return (
      <FormField
        description={description}
        descriptionId={descriptionId}
        dir={dir}
        errorMessage={errorMessage}
        errorMessageId={errorMessageId}
        id={id}
        invalid={invalid}
        label={label}
        ref={ref}
        status={status}
        statusId={statusId}
        {...restProps}
        input={input ?? inputComponent}
      />
    );
  },
);

FormFieldCheckboxGroup.displayName = 'FormFieldCheckboxGroup';
