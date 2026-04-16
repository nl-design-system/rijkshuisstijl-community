/**
 * @license EUPL-1.2
 * Copyright (c) 2026 Community for NL Design System
 */

import { AriaRole, HTMLAttributes, PropsWithChildren, ReactNode, Ref } from 'react';

export interface DataBadgeProps extends HTMLAttributes<HTMLSpanElement> {
  label: ReactNode;
  role?: AriaRole;
  ref?: Ref<HTMLSpanElement>;
}

export const DataBadge = ({
  children,
  label,
  role = 'status',
  ref,
  ...restProps
}: PropsWithChildren<DataBadgeProps>) => {
  return (
    <span className="rhc-data-badge" ref={ref} role={role || 'status'} {...restProps}>
      <span className="rhc-data-badge__sr-only" data-testid="rhc-data-badge__sr-label">
        {label}
      </span>
      <svg fill="none" height="12" viewBox="0 0 12 12" width="12" xmlns="http://www.w3.org/2000/svg">
        <rect fill="currentColor" height="12" rx="6" width="12" />
      </svg>
      {children}
    </span>
  );
};

DataBadge.displayName = 'DataBadge';
