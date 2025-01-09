import clsx from 'clsx';
import { HTMLAttributes, Ref } from 'react';

export interface SideNavListProps extends HTMLAttributes<HTMLUListElement> {
  ref?: Ref<HTMLUListElement>;
}

export const SideNavList = ({ ref, className, children, ...restProps }: SideNavListProps) => {
  return (
    <ul className={clsx('rhc-side-nav__list', className)} ref={ref} role="list" {...restProps}>
      {children}
    </ul>
  );
};

SideNavList.displayName = 'SideNavList';
