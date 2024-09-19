import clsx from 'clsx';
import { Children, ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren, ReactNode } from 'react';

const hasManyChildren = (children: ReactNode) => {
  return Children.count(children) > 1;
};

export interface CheckboxGroupProps extends HTMLAttributes<HTMLDivElement> {}

export const CheckboxGroup = forwardRef(
  ({ children, className, ...restProps }: PropsWithChildren<CheckboxGroupProps>, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <div
        className={clsx('rhc-checkbox-group', className)}
        ref={ref}
        role={hasManyChildren(children) ? 'group' : undefined}
        {...restProps}
      >
        {children}
      </div>
    );
  },
);

CheckboxGroup.displayName = 'CheckboxGroup';
