/**
 * @license EUPL-1.2
 * Copyright (c) 2026 Community for NL Design System
 */

import { Icon, IconProps } from '@rijkshuisstijl-community/icon-react/no-side-effects';
import { LinkButton } from '@rijkshuisstijl-community/link-button-react/no-side-effects';
import { Link } from '@rijkshuisstijl-community/link-react/no-side-effects';
import clsx from 'clsx';
import {
  ComponentPropsWithRef,
  CSSProperties,
  HTMLAttributes,
  PropsWithChildren,
  ReactElement,
  ReactNode,
  Ref,
  useId,
} from 'react';
import { NavBarMegaMenu } from './MegaMenu';
import { NavBarIdentity } from './NavBarIdentity';

export interface NavBarProps extends ComponentPropsWithRef<'nav'> {
  /** Toegankelijke naam van de menuknop op smalle schermen. */
  toggleLabel?: string;
}

export type NavBarListProps = ComponentPropsWithRef<'ul'>;

export interface NavBarLinkProps {
  className?: string;
  id: string;
  label: ReactNode;
  href: string;
  target?: string;
}

export interface NavBarItemProps extends NavBarLinkProps, HTMLAttributes<HTMLLIElement> {
  icon?: ReactElement<IconProps>;
  iconEnd?: ReactElement<IconProps>;
  iconOnly?: boolean;
  currentPage?: boolean;
  id: string;
  ref?: Ref<HTMLLIElement>;
  /** Blijft op smalle schermen zichtbaar in de balk in plaats van in het menu. */
  persistent?: boolean;
}

const Item = ({
  ref,
  children,
  className,
  href,
  target,
  label,
  icon,
  iconEnd,
  iconOnly = false,
  currentPage = false,
  persistent = false,
  ...restProps
}: PropsWithChildren<NavBarItemProps>) => (
  <li
    ref={ref}
    {...restProps}
    className={clsx('rhc-nav-bar__item', persistent && 'rhc-nav-bar__item--persistent', className)}
  >
    <Link
      aria-current={currentPage ? 'page' : undefined}
      className={clsx('rhc-nav-bar__link')}
      href={href}
      target={target}
    >
      {icon}
      <span className={clsx('rhc-nav-bar__label', iconOnly && 'rhc-nav-bar__label--sr-only')}>{label}</span>
      {iconEnd}
    </Link>
    {children}
  </li>
);

Item.displayName = 'NavBar.Item';

/** Items aan het begin van de balk. */
const Start = ({ className, ...restProps }: NavBarListProps) => (
  <ul {...restProps} className={clsx('rhc-nav-bar__list', 'rhc-nav-bar__list--start', className)} />
);

Start.displayName = 'NavBar.Start';

/** Items aan het einde van de balk. */
const End = ({ className, ...restProps }: NavBarListProps) => (
  <ul {...restProps} className={clsx('rhc-nav-bar__list', 'rhc-nav-bar__list--end', className)} />
);

End.displayName = 'NavBar.End';

/**
 * De balk zelf is een popover. Gesloten wordt hij via CSS gewoon in de balk getoond;
 * op smalle schermen opent de menuknop hem als paneel in de top layer. Escape,
 * klikken buiten het paneel en focusherstel komen van de native Popover API.
 */
const Root = ({
  ref,
  children,
  className,
  toggleLabel = 'Menu',
  style,
  'aria-label': ariaLabel = 'Hoofdnavigatie',
  ...restProps
}: PropsWithChildren<NavBarProps>) => {
  const id = `rhc-nav-bar-${useId().replaceAll(':', '')}`;
  const menuId = `${id}-menu`;

  return (
    <nav
      aria-label={ariaLabel}
      className={clsx('rhc-nav-bar', className)}
      ref={ref}
      style={{ '--rhc-nav-bar-anchor': `--${id}`, ...style } as CSSProperties}
      {...restProps}
    >
      <div className="rhc-nav-bar__menu" id={menuId} popover="auto">
        {children}
        <LinkButton className="rhc-nav-bar__toggle rhc-nav-bar__link" popoverTarget={menuId}>
          <Icon className="rhc-nav-bar__toggle-icon-open" icon="menu" />
          <Icon className="rhc-nav-bar__toggle-icon-close" icon="kruis" />
          <span className="rhc-visually-hidden">{toggleLabel}</span>
        </LinkButton>
      </div>
    </nav>
  );
};

Root.displayName = 'NavBar';

export const NavBar = Object.assign(Root, {
  Start,
  End,
  Item,
  Identity: NavBarIdentity,
  MegaMenu: NavBarMegaMenu,
});
