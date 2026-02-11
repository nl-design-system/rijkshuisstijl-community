/**
 * @license EUPL-1.2
 * Copyright (c) 2026 Community for NL Design System
 */

import clsx from 'clsx';
import { HTMLAttributes, Ref } from 'react';

export interface SideNavProps extends HTMLAttributes<HTMLElement> {
  ref?: Ref<HTMLElement>;
}

export const SideNav = ({ ref, className, children, ...restProps }: SideNavProps) => {
  return (
    <aside className={clsx('rhc-side-nav', className)} ref={ref} {...restProps}>
      {children}
    </aside>
  );
};

SideNav.displayName = 'SideNav';
