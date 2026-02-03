import { type FormFieldProps } from '@utrecht/component-library-react';
import clsx from 'clsx';
import { Children, PropsWithChildren, ReactNode, Ref, useId } from 'react';
import { FormField } from './FormField';
import { RadioGroup } from './RadioGroup';

export interface FormFieldRadioGroupProps extends FormFieldProps {
  errorMessage?: string;
  status?: ReactNode;
  description?: ReactNode;
  label?: ReactNode;
  ref?: Ref<HTMLDivElement>;
}

const hasManyChildren = (children: ReactNode) => {
  return Children.count(children) > 1;
};

export const FormFieldRadioGroup = ({
  ref,
  label,
  description,
  errorMessage,
  input,
  status,
  invalid,
  dir,
  children,
  ...restProps
}: PropsWithChildren<FormFieldRadioGroupProps>) => {
  const id = useId();
  const descriptionId = useId();
  const statusId = useId();
  const errorMessageId = useId();

  const inputComponent: ReactNode = (
    <div className="utrecht-form-field__input rhc-radio">
      <RadioGroup
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
      </RadioGroup>
    </div>
  );

  return (
    <FormField
      description={description}
      descriptionId={descriptionId}
      errorMessage={errorMessage}
      errorMessageId={errorMessageId}
      input={input ?? inputComponent}
      invalid={invalid}
      label={label}
      ref={ref}
      status={status}
      statusId={statusId}
      {...restProps}
    />
  );
};

FormFieldRadioGroup.displayName = 'FormFieldRadioGroup';
