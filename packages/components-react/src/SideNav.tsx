import clsx from 'clsx';
import { forwardRef, HTMLAttributes } from 'react';

export interface SideNavProps extends HTMLAttributes<HTMLElement> {}

export const SideNav = forwardRef<HTMLElement, SideNavProps>((props, ref) => {
  return (
    <aside role="navigation" {...props} className={clsx('rhc-side-nav', props.className)} ref={ref}>
      {props.children}
    </aside>
  );
});

SideNav.displayName = 'SideNav';
