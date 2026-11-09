/**
 * @license EUPL-1.2
 * Copyright (c) 2026 Community for NL Design System
 */

import { Link } from '@rijkshuisstijl-community/link-react/no-side-effects';
import clsx from 'clsx';
import { HTMLAttributes, PropsWithChildren } from 'react';

export interface NavBarIdentityProps extends HTMLAttributes<HTMLDivElement> {
  href: string;
  primary?: boolean;
}

export const NavBarIdentity = ({
  appearance,
  children,
  className,
  href,
  ...restProps
}: PropsWithChildren<NavBarIdentityProps>) => (
  <div
    className={clsx('rhc-nav-bar__identity', primary && `rhc-nav-bar__identity--primary`, className)}
    {...restProps}
  >
    <Link href={href}>{children}</Link>
  </div>
);

NavBarIdentity.displayName = 'NavBarIdentity';
