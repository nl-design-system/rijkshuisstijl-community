import clsx from 'clsx';
import { forwardRef, HTMLAttributes } from 'react';

export interface SideNavListProps extends HTMLAttributes<HTMLUListElement> {}

export const SideNavList = forwardRef<HTMLUListElement, SideNavListProps>((props, ref) => {
  return (
    <ul role="list" {...props} className={clsx('rhc-side-nav__list', props.className)} ref={ref}>
      {props.children}
    </ul>
  );
});

SideNavList.displayName = 'SideNavList';
