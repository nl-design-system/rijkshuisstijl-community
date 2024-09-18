import { CheckboxProps, Checkbox as UtrechtCheckbox } from '@utrecht/component-library-react';
import { ForwardedRef, forwardRef, PropsWithChildren } from 'react';

export { type CheckboxProps };

export const Checkbox = forwardRef(
  ({ ...Props }: PropsWithChildren<CheckboxProps>, ref: ForwardedRef<HTMLInputElement>) => {
    return <UtrechtCheckbox ref={ref} {...Props} />;
  },
);
export { Checkbox, type CheckboxProps } from '@utrecht/component-library-react;

Checkbox.displayName = 'Checkbox';
