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
import { hidePopoverOnFocusOut } from './hidePopoverOnFocusOut';

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

export const NavBarItem = ({
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

NavBarItem.displayName = 'NavBarItem';

export type NavBarListProps = ComponentPropsWithRef<'ul'>;

/** Items aan het begin van de balk. */
export const NavBarStart = ({ className, ...restProps }: NavBarListProps) => (
  <ul {...restProps} className={clsx('rhc-nav-bar__list', 'rhc-nav-bar__list--start', className)} />
);

NavBarStart.displayName = 'NavBarStart';

/** Items aan het einde van de balk. */
export const NavBarEnd = ({ className, ...restProps }: NavBarListProps) => (
  <ul {...restProps} className={clsx('rhc-nav-bar__list', 'rhc-nav-bar__list--end', className)} />
);

NavBarEnd.displayName = 'NavBarEnd';

export interface NavBarProps extends ComponentPropsWithRef<'nav'> {
  /** Toegankelijke naam van de menuknop op smalle schermen. */
  toggleLabel?: string;
}

/**
 * Losse named exports (`NavBar`, `NavBarStart`, `NavBarItem`, ...) werken zowel in
 * client components als in React Server Components.
 */
export const NavBar = ({
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
      <div className="rhc-nav-bar__menu" id={menuId} popover="auto" onBlur={hidePopoverOnFocusOut}>
        {/* Eerst in de DOM, zodat Tab na het openen de items in gaat; CSS zet hem achteraan. */}
        <LinkButton className="rhc-nav-bar__toggle rhc-nav-bar__link" popoverTarget={menuId}>
          <Icon className="rhc-nav-bar__toggle-icon-open" icon="menu" />
          <Icon className="rhc-nav-bar__toggle-icon-close" icon="kruis" />
          <span className="rhc-nav-bar__toggle-label">{toggleLabel}</span>
        </LinkButton>
        {children}
      </div>
    </nav>
  );
};

NavBar.displayName = 'NavBar';
