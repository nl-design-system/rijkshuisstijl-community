import clsx from 'clsx';
import { forwardRef, HTMLAttributes } from 'react';

export interface SideNavItemProps extends HTMLAttributes<HTMLLIElement> {}

export const SideNavItem = forwardRef<HTMLLIElement, SideNavItemProps>(({ className, children, ...restProps }, ref) => {
  return (
    <li className={clsx('rhc-side-nav__item', className)} ref={ref} role="listitem" {...restProps}>
      {children}
    </li>
  );
});

SideNavItem.displayName = 'SideNavItem';
