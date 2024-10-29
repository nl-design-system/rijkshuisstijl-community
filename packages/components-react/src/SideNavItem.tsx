import clsx from 'clsx';
import { forwardRef, HTMLAttributes } from 'react';

export interface SideNavItemProps extends HTMLAttributes<HTMLLIElement> {}

export const SideNavItem = forwardRef<HTMLLIElement, SideNavItemProps>((props, ref) => {
  return (
    <li role="listitem" {...props} className={clsx('rhc-side-nav__item', props.className)} ref={ref}>
      {props.children}
    </li>
  );
});

SideNavItem.displayName = 'SideNavItem';
