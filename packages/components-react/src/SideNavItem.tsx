import clsx from 'clsx';
import { HTMLAttributes, Ref } from 'react';

export interface SideNavItemProps extends HTMLAttributes<HTMLLIElement> {
  ref?: Ref<HTMLLIElement>;
}

export const SideNavItem = ({ ref, className, children, ...restProps }: SideNavItemProps) => {
  return (
    <li className={clsx('rhc-side-nav__item', className)} ref={ref} role="listitem" {...restProps}>
      {children}
    </li>
  );
};

SideNavItem.displayName = 'SideNavItem';
