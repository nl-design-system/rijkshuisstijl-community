/**
 * @license EUPL-1.2
 * Copyright (c) 2026 Community for NL Design System
 */

import clsx from 'clsx';
import { AnchorHTMLAttributes, Ref } from 'react';
import { Icon } from './Icon';
import { RHCIconID } from './icon-sets/default-icons/RHCIconIDs';

export interface SideNavLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  current?: boolean;
  icon?: RHCIconID;
  ref?: Ref<HTMLAnchorElement>;
}

export const SideNavLink = ({
  ref,
  current,
  className,
  icon,
  children,
  'aria-current': ariaCurrent,
  ...restProps
}: SideNavLinkProps) => {
  return (
    <a
      aria-current={current || ariaCurrent ? 'page' : undefined}
      className={clsx('rhc-side-nav__link', className)}
      ref={ref}
      role="link"
      {...restProps}
    >
      {icon && <Icon icon={icon}></Icon>}
      {children}
    </a>
  );
};

SideNavLink.displayName = 'SideNavLink';
