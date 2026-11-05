/**
 * @license EUPL-1.2
 * Copyright (c) 2026 Community for NL Design System
 */

import { Link } from '@rijkshuisstijl-community/link-react/no-side-effects';
import clsx from 'clsx';
import { ReactNode } from 'react';

export interface NavBarIdentityProps {
  value: ReactNode;
  href: string;
  appearance?: string;
}

export const NavBarIdentity = ({ value, href, appearance }: NavBarIdentityProps) => (
  <div className={clsx('rhc-nav-bar__identity', appearance && `rhc-nav-bar__identity--${appearance}`)}>
    <Link href={href}>{value}</Link>
  </div>
);

NavBarIdentity.displayName = 'NavBarIdentity';
