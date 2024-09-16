import { CheckboxProps, Checkbox as UtrechtCheckbox } from '@utrecht/component-library-react';
import clsx from 'clsx';
import { ForwardedRef, forwardRef, PropsWithChildren, useId } from 'react';

export { type CheckboxProps };

export const Checkbox = forwardRef(
  (
    { id, className, name, value, invalid, ...restProps }: PropsWithChildren<CheckboxProps>,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    const checkboxId = id || useId();

    return (
      <UtrechtCheckbox
        className={clsx('utrecht-checkbox', className)}
        id={checkboxId}
        invalid={invalid}
        name={name}
        ref={ref}
        value={value}
        {...restProps}
      />
    );
  },
);

Checkbox.displayName = 'Checkbox';
