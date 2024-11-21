import clsx from 'clsx';
import { forwardRef, HTMLAttributes } from 'react';

export interface SideNavListProps extends HTMLAttributes<HTMLUListElement> {}

export const SideNavList = forwardRef<HTMLUListElement, SideNavListProps>(
  ({ className, children, ...restProps }, ref) => {
    return (
      <ul className={clsx('rhc-side-nav__list', className)} ref={ref} role="list" {...restProps}>
        {children}
      </ul>
    );
  },
);

SideNavList.displayName = 'SideNavList';
