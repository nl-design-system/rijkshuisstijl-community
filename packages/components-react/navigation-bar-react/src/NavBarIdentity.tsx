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
  /** Blijft op smalle schermen zichtbaar in de balk. Standaard `true`. */
  persistent?: boolean;
}

export const NavBarIdentity = ({
  children,
  className,
  href,
  primary,
  persistent = true,
  ...restProps
}: PropsWithChildren<NavBarIdentityProps>) => (
  <li
    className={clsx(
      'rhc-nav-bar__item',
      'rhc-nav-bar-identity',
      persistent && 'rhc-nav-bar__item--persistent',
      primary && 'rhc-nav-bar-identity--primary',
    )}
  >
    <Link className={clsx('rhc-nav-bar-identity__link', className)} href={href} {...restProps}>
      {children}
    </Link>
  </li>
);

NavBarIdentity.displayName = 'NavBar.Identity';
