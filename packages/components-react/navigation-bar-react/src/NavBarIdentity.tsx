/**
 * @license EUPL-1.2
 * Copyright (c) 2026 Community for NL Design System
 */

import { Link, LinkProps } from '@rijkshuisstijl-community/link-react/no-side-effects';
import clsx from 'clsx';
import { PropsWithChildren } from 'react';

export interface NavBarIdentityProps extends LinkProps {
  href: string;
  primary?: boolean;
}

export const NavBarIdentity = ({
  children,
  className,
  href,
  primary,
  ...restProps
}: PropsWithChildren<NavBarIdentityProps>) => (
  <div className={clsx('rhc-nav-bar-identity', primary && 'rhc-nav-bar-identity--primary')}>
    <Link className={clsx('rhc-nav-bar-identity__link', className)} href={href} {...restProps}>
      {children}
    </Link>
  </div>
);

NavBarIdentity.displayName = 'NavBarIdentity';
