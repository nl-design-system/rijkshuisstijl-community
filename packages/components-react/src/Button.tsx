import clsx from 'clsx';
import { ForwardedRef, forwardRef, PropsWithChildren } from 'react';

export const Button = forwardRef(
  ({ children, className, ...restProps }: PropsWithChildren<any>, ref: ForwardedRef<HTMLButtonElement>) => {
    return (
      <button ref={ref} className={clsx('rhc-button', className)} type="button" {...restProps}>
        <span className="rhc-button__text">{children}</span>
      </button>
    );
  },
);

Button.displayName = 'Button';
