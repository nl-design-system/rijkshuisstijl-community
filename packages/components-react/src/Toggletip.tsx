import clsx from 'clsx';
import { DetailsHTMLAttributes, PropsWithChildren, ReactNode, Ref } from 'react';
import { Alert } from './Alert';
import { Icon } from './icon/Icon';

export interface ToggletipProps extends DetailsHTMLAttributes<HTMLDetailsElement> {
  className?: string;
  ref?: Ref<HTMLDetailsElement>;
}

const ToggletipContent = ({ children, ref }: { children: ReactNode; ref?: Ref<HTMLDivElement> }) => {
  return (
    <div className="rhc-toggletip__content" ref={ref}>
      <Alert type="info">{children}</Alert>
    </div>
  );
};

ToggletipContent.displayName = 'ToggletipContent';

export const Toggletip = ({ ref, children, className, ...restProps }: PropsWithChildren<ToggletipProps>) => {
  return (
    <details className={clsx('rhc-toggletip', className)} ref={ref} {...restProps}>
      <summary aria-label="tooltip-content" className="rhc-toggletip__summary rhc-toggletip__button">
        <Icon className="rhc-toggletip__icon" icon="info" />
      </summary>
      <ToggletipContent>{children}</ToggletipContent>
    </details>
  );
};

Toggletip.displayName = 'Toggletip';
