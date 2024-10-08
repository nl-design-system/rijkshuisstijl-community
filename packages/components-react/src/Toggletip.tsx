import clsx from 'clsx';
import { DetailsHTMLAttributes, ForwardedRef, forwardRef, PropsWithChildren, ReactNode } from 'react';
import { Alert, type AlertProps } from './Alert';
import { Icon } from './icon/Icon';
import { type RijkshuisstijlIconID } from './icon/IconTypes';

export interface ToggletipProps extends DetailsHTMLAttributes<HTMLDetailsElement> {
  className?: string;
  alertType?: AlertProps['type'];
  icon?: RijkshuisstijlIconID | ReactNode;
}

export const ToggletipButton = forwardRef(
  ({ icon }: { icon?: RijkshuisstijlIconID | ReactNode }, ref: ForwardedRef<HTMLButtonElement>) => {
    return (
      <button className="rhc-toggletip__button" ref={ref}>
        <Icon className="rhc-toggletip__icon" icon={icon ?? 'info'} />
      </button>
    );
  },
);
ToggletipButton.displayName = 'ToggletipButton';

export const ToggletipContent = forwardRef(
  (
    { alertType, children }: { alertType?: AlertProps['type']; children: ReactNode },
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <div className="rhc-toggletip__content" ref={ref}>
        <Alert type={alertType ?? 'info'}>{children}</Alert>
      </div>
    );
  },
);
ToggletipContent.displayName = 'ToggletipContent';

export const Toggletip = forwardRef(
  (
    { children, className, icon, alertType, ...restProps }: PropsWithChildren<ToggletipProps>,
    ref: ForwardedRef<HTMLDetailsElement>,
  ) => {
    return (
      <details className={clsx('rhc-toggletip', className)} ref={ref} {...restProps}>
        <summary className="rhc-toggletip__summary">
          <ToggletipButton icon={icon} />
        </summary>
        <ToggletipContent alertType={alertType}>{children}</ToggletipContent>
      </details>
    );
  },
);

Toggletip.displayName = 'Toggletip';
