import { HTMLAttributes, PropsWithChildren, ReactNode, Ref } from 'react';

export interface DotBadgeProps extends HTMLAttributes<HTMLSpanElement> {
  label: ReactNode;
  ref?: Ref<HTMLSpanElement>;
}

export const DotBadge = ({
  children,
  label,
  role = 'status',
  ref,
  ...restpProps
}: PropsWithChildren<DotBadgeProps>) => {
  return (
    <span className="rhc-dot-badge" ref={ref} role={role || 'status'} {...restpProps}>
      <span className="rhc-dot-badge__sr-only" data-testid="rhc-dot-badge__sr-label">
        {label}
      </span>
      <svg fill="none" height="12" viewBox="0 0 12 12" width="12" xmlns="http://www.w3.org/2000/svg">
        <rect fill="currentColor" height="12" rx="6" width="12" />
      </svg>
      {children}
    </span>
  );
};

DotBadge.displayName = 'DotBadge';
