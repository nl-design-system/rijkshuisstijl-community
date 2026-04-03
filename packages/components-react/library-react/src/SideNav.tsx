/**
 * @license EUPL-1.2
 * Copyright (c) 2026 Community for NL Design System
 */

import clsx from 'clsx';
import type { HTMLAttributes, ReactNode, Ref } from 'react';

export interface SideNavProps extends HTMLAttributes<HTMLElement> {
  heading?: ReactNode;
  headingId?: string;
  ref?: Ref<HTMLElement>;
}

export const SideNav = ({
  ref,
  className,
  children,
  heading,
  headingId = 'rhc-side-nav-heading',
  ...restProps
}: SideNavProps) => {
  return (
    <nav
      aria-labelledby={heading && headingId ? headingId : undefined}
      className={clsx('rhc-side-nav', className)}
      ref={ref}
      {...restProps}
    >
      {heading ? (
        <h2 aria-hidden="true" className="rhc-side-nav__heading" id={headingId}>
          {heading}
        </h2>
      ) : null}
      {children}
    </nav>
  );
};

SideNav.displayName = 'SideNav';
