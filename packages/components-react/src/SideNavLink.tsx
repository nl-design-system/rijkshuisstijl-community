import clsx from 'clsx';
import { AnchorHTMLAttributes, forwardRef, ReactNode } from 'react';
import { Icon } from './icon/Icon';

export interface SideNavLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  current?: boolean;
  icon?: ReactNode;
}

export const SideNavLink = forwardRef<HTMLAnchorElement, SideNavLinkProps>((props, ref) => {
  return (
    <a
      aria-current={props.current || props['aria-current'] ? 'page' : undefined}
      role="link"
      {...props}
      className={clsx('rhc-side-nav__link', props.className)}
      ref={ref}
    >
      {props.icon && <Icon icon={props.icon}></Icon>}
      {props.children}
    </a>
  );
});

SideNavLink.displayName = 'SideNavLink';
