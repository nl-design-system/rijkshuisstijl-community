/**
+ * @license EUPL-1.2
+ * Copyright (c) 2026 Community for NL Design System
+ */

import { IconProps } from '@rijkshuisstijl-community/icon-react/no-side-effects';
import { Link, LinkProps } from '@rijkshuisstijl-community/link-react/no-side-effects';
import clsx from 'clsx';
import { PropsWithChildren, ReactElement } from 'react';

export interface NavBarLinkProps extends LinkProps {
  icon?: ReactElement<IconProps>;
  iconEnd?: ReactElement<IconProps>;
  iconOnly?: boolean;
  current?: boolean;
}

export const NavBarLink = ({
  children,
  className,
  current,
  icon,
  iconEnd,
  iconOnly = false,
  ...restProps
}: PropsWithChildren<NavBarLinkProps>) => (
  <Link aria-current={current ? 'page' : undefined} className={clsx('rhc-nav-bar__link', className)} {...restProps}>
    {icon}
    <span className={clsx('rhc-nav-bar__label', iconOnly && 'rhc-nav-bar__label--sr-only')}>{children}</span>
    {iconEnd}
  </Link>
);

NavBarLink.displayName = 'NavBarLink';
