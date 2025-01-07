import { HTMLAttributes, Ref } from 'react';

export interface DotBadgeProps extends HTMLAttributes<HTMLDivElement> {
  'aria-label': string;
  ref?: Ref<HTMLDivElement>;
  role?: string;
}

export const DotBadge = ({ ref, role, ...restProps }: DotBadgeProps) => {
  return (
    <span aria-live="polite" className="rhc-dot-badge" ref={ref} role={role || 'status'} {...restProps}>
      <svg fill="none" height="12" viewBox="0 0 12 12" width="12" xmlns="http://www.w3.org/2000/svg">
        <rect fill="#D52B1E" height="12" rx="6" width="12" />
      </svg>
    </span>
  );
};

DotBadge.displayName = 'DotBadge';
