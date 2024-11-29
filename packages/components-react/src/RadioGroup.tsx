import clsx from 'clsx';
import { Children, ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren, ReactNode } from 'react';

const hasManyChildren = (children: ReactNode) => {
  return Children.count(children) > 1;
};

export interface RadioGroupProps extends HTMLAttributes<HTMLDivElement> {}

export const RadioGroup = forwardRef(
  ({ children, className, ...restProps }: PropsWithChildren<RadioGroupProps>, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <div
        className={clsx('rhc-radio-group', className)}
        ref={ref}
        role={hasManyChildren(children) ? 'group' : undefined}
        {...restProps}
      >
        {children}
      </div>
    );
  },
);

RadioGroup.displayName = 'RadioGroup';
