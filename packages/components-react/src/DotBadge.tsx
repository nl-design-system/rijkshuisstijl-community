import { forwardRef, HTMLAttributes } from 'react';

export interface DotBadgeProps extends HTMLAttributes<HTMLDivElement> {
  'aria-label': string;
}

export const DotBadge = forwardRef<HTMLDivElement, DotBadgeProps>((props, ref) => {
  return (
    <div
      className="rhc-dot-badge"
      ref={ref}
      {...props}
      aria-label={props['aria-label']}
      aria-live="polite"
      role={props.role || 'status'}
    >
      <svg fill="none" height="12" viewBox="0 0 12 12" width="12" xmlns="http://www.w3.org/2000/svg">
        <rect fill="#D52B1E" height="12" rx="6" width="12" />
      </svg>
    </div>
  );
});

DotBadge.displayName = 'DotBadge';
