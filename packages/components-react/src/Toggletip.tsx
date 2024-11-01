import clsx from 'clsx';
import { DetailsHTMLAttributes, ForwardedRef, forwardRef, PropsWithChildren, ReactNode } from 'react';
import { Alert } from './Alert';
import { Icon } from './icon/Icon';

export interface ToggletipProps extends DetailsHTMLAttributes<HTMLDetailsElement> {
  className?: string;
}

export const ToggletipButton = forwardRef(
  ({ children }: { children?: ReactNode }, ref: ForwardedRef<HTMLButtonElement>) => {
    return (
      <button className="rhc-toggletip__button" ref={ref}>
        <Icon className="rhc-toggletip__icon" icon="info" />
        {children}
      </button>
    );
  },
);
ToggletipButton.displayName = 'ToggletipButton';

export const ToggletipContent = forwardRef(
  ({ children }: { children: ReactNode }, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <div className="rhc-toggletip__content" ref={ref}>
        <Alert type="info">{children}</Alert>
      </div>
    );
  },
);
ToggletipContent.displayName = 'ToggletipContent';

export const Toggletip = forwardRef(
  ({ children, className, ...restProps }: PropsWithChildren<ToggletipProps>, ref: ForwardedRef<HTMLDetailsElement>) => {
    return (
      <details className={clsx('rhc-toggletip', className)} ref={ref} {...restProps}>
        <summary className="rhc-toggletip__summary">
          <ToggletipButton />
        </summary>
        <ToggletipContent>{children}</ToggletipContent>
      </details>
    );
  },
);

Toggletip.displayName = 'Toggletip';
