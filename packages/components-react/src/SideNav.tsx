import clsx from 'clsx';
import { forwardRef, HTMLAttributes } from 'react';

export interface SideNavProps extends HTMLAttributes<HTMLElement> {}

export const SideNav = forwardRef<HTMLElement, SideNavProps>(({ className, children, ...restProps }, ref) => {
  return (
    <aside className={clsx('rhc-side-nav', className)} ref={ref} role="navigation" {...restProps}>
      {children}
    </aside>
  );
});

SideNav.displayName = 'SideNav';
