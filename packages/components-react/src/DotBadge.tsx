import { forwardRef, HTMLAttributes } from 'react';

export interface DotBadgeProps extends HTMLAttributes<HTMLDivElement> {
  'aria-label': string;
}

export const DotBadge = forwardRef<HTMLDivElement, DotBadgeProps>((props, ref) => {
  return (
    <div aria-live="polite" className="rhc-dot-badge" ref={ref} role={props.role || 'status'} {...props}>
      <svg fill="none" height="12" viewBox="0 0 12 12" width="12" xmlns="http://www.w3.org/2000/svg">
        <rect fill="#D52B1E" height="12" rx="6" width="12" />
      </svg>
    </div>
  );
});

DotBadge.displayName = 'DotBadge';
