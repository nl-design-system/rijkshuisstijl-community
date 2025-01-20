import clsx from 'clsx';
import { DetailsHTMLAttributes, ForwardedRef, forwardRef, PropsWithChildren, ReactNode } from 'react';
import { Alert } from './Alert';
import { Icon } from './icon/Icon';

export interface ToggletipProps extends DetailsHTMLAttributes<HTMLDetailsElement> {
  className?: string;
}

const ToggletipContent = forwardRef(({ children }: { children: ReactNode }, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <div className="rhc-toggletip__content" ref={ref}>
      <Alert textContent={children} type="info"></Alert>
    </div>
  );
});
ToggletipContent.displayName = 'ToggletipContent';

export const Toggletip = forwardRef(
  ({ children, className, ...restProps }: PropsWithChildren<ToggletipProps>, ref: ForwardedRef<HTMLDetailsElement>) => {
    return (
      <details className={clsx('rhc-toggletip', className)} ref={ref} {...restProps}>
        <summary aria-label="tooltip-content" className="rhc-toggletip__summary rhc-toggletip__button">
          <Icon className="rhc-toggletip__icon" icon="info" />
        </summary>
        <ToggletipContent>{children}</ToggletipContent>
      </details>
    );
  },
);

Toggletip.displayName = 'Toggletip';
