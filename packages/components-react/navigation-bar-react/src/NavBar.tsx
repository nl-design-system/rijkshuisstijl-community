/**
 * @license EUPL-1.2
 * Copyright (c) 2026 Community for NL Design System
 */

import { Heading, HeadingLevel } from '@rijkshuisstijl-community/heading-react/no-side-effects';
import { Icon, IconProps } from '@rijkshuisstijl-community/icon-react/no-side-effects';
import { LinkButton } from '@rijkshuisstijl-community/link-button-react/no-side-effects';
import { LinkList, LinkListLink } from '@rijkshuisstijl-community/link-list-react/no-side-effects';
import { Link } from '@rijkshuisstijl-community/link-react/no-side-effects';
import clsx from 'clsx';
import {
  CSSProperties,
  HTMLAttributes,
  PropsWithChildren,
  ReactElement,
  ReactNode,
  Ref,
  useEffect,
  useId,
  useState,
} from 'react';
import { NavBarMegaMenuClose, NavBarMegaMenuPanel, NavBarMegaMenuTrigger } from './MegaMenu';

export interface NavBarProps extends HTMLAttributes<HTMLDivElement> {
  identity?: ReactNode;
  items?: NavBarItemProps[];
  endItems?: ReactNode;
  megamenu?: ReactNode;
  ref?: Ref<HTMLDivElement>;
}

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
  subList?: NavbarSubListProps;
  iconOnly?: boolean;
  currentPage?: boolean;
  id: string;
  ref?: Ref<HTMLLIElement>;
  open?: boolean;
  contentId?: string;
}

interface NavbarSubListProps {
  sections: SectionProps[];
}

export interface SubNavBarProps extends HTMLAttributes<HTMLDivElement> {
  columns: NavBarLinkProps[][];
  ref?: Ref<HTMLDivElement>;
}

interface SectionProps {
  id: string;
  heading: ReactNode;
  headingAppearanceLevel?: HeadingLevel;
  headingLevel?: HeadingLevel;
  items: NavBarLinkProps[];
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
  subList,
  iconOnly = false,
  currentPage = false,
  open = false,
  contentId = '1',
  ...restProps
}: PropsWithChildren<NavBarItemProps>) => {
  const [isItemOpen, setIsItemOpen] = useState(open);

  return (
    <li className={clsx('rhc-nav-bar__item', isItemOpen && 'is-open', className)} ref={ref} {...restProps}>
      {subList ? (
        <LinkButton
          aria-controls={`rhc-nav-bar__item-dropdown-${contentId}`}
          aria-expanded={isItemOpen}
          onClick={() => setIsItemOpen((prev) => !prev)}
        >
          <Icon icon={isItemOpen ? 'chevron-up' : 'chevron-down'} />
          <span className={clsx('rhc-nav-bar__label', iconOnly && 'rhc-nav-bar__label--sr-only')}>{label}</span>
        </LinkButton>
      ) : (
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
      )}
      {subList && isItemOpen && (
        <div className="rhc-nav-bar__item-dropdown" id={`rhc-nav-bar__item-dropdown-${contentId}`}>
          {subList.sections.map(({ id, heading, headingLevel = 3, headingAppearanceLevel = 5, items }) => (
            <div className="rhc-nav-bar__item-dropdown-section" key={id}>
              <Heading
                appearanceLevel={headingAppearanceLevel}
                className="rhc-nav-bar__item-dropdown-section-title"
                level={headingLevel}
              >
                {heading}
              </Heading>
              <ul className="rhc-nav-bar__item-dropdown-section-list">
                {items.map(({ id, href, target, label }) => (
                  <li className="rhc-nav-bar__item-dropdown-section-item" key={id}>
                    <Link href={href} target={target}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
      {children}
    </li>
  );
};

NavBarItem.displayName = 'NavBarItem';

export const NavBar = ({
  ref,
  children,
  className,
  identity,
  items,
  endItems,
  megamenu,
  style,
  ...restProps
}: PropsWithChildren<NavBarProps>) => {
  const [isMegamenuOpen, setIsMegamenuOpen] = useState(false);
  const [isMainNavOpen, setIsMainNavOpen] = useState(false);
  const megamenuId = `rhc-nav-bar-megamenu-${useId().replaceAll(':', '')}`;
  const megamenuAnchorName = `--${megamenuId}-anchor`;

  // escape sluit het hoofdmenu; het megamenu sluit zichzelf via de native Popover API
  useEffect(() => {
    if (!isMainNavOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMainNavOpen(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    // eslint-disable-next-line consistent-return
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMainNavOpen]);

  // wanneer isMainNavOpen veranderd, toggled de 'open' class op de rhc-page-header (ivm z-index)
  useEffect(() => {
    const pageHeader = document.querySelector('.rhc-page-header');
    pageHeader?.classList.toggle('is-navbar-main-open', isMainNavOpen);
    return () => pageHeader?.classList.remove('is-navbar-main-open');
  }, [isMainNavOpen]);

  return (
    <div
      className="rhc-nav-bar"
      ref={ref}
      style={megamenu ? ({ anchorName: megamenuAnchorName, ...style } as CSSProperties) : style}
      {...restProps}
    >
      <h2 className="rhc-visually-hidden">Hoofd navigatie</h2>
      {identity}

      {megamenu ? (
        <div className="rhc-nav-bar__slot-megamenu">
          <ul className="rhc-nav-bar__list">
            <li className="rhc-nav-bar__item">
              <NavBarMegaMenuTrigger aria-expanded={isMegamenuOpen} id={megamenuId}>
                <Icon icon={isMegamenuOpen ? 'kruis' : 'menu'} />
                <span className={clsx('rhc-nav-bar__label', 'rhc-visually-hidden-mobile')}>
                  Kies een onderwerp of dienst
                </span>
              </NavBarMegaMenuTrigger>
            </li>
          </ul>
          {(items || endItems) && (
            <div className="rhc-nav-bar__slots">
              {items && (
                <div className="rhc-nav-bar__slot rhc-nav-bar__slot--primary">
                  <nav aria-label="primary-navigation" className={clsx('rhc-nav-bar__nav', className)}>
                    <ul className="rhc-nav-bar__list">
                      {items.map((item) => (
                        <NavBarItem key={item.id} {...item} />
                      ))}
                    </ul>
                  </nav>
                </div>
              )}
              {endItems && (
                <div className="rhc-nav-bar__slot rhc-nav-bar__slot--secondary">
                  <nav aria-label="secondary-navigation" className={clsx('rhc-nav-bar__nav', className)}>
                    <ul className="rhc-nav-bar__list">{endItems}</ul>
                  </nav>
                </div>
              )}
            </div>
          )}
          <NavBarMegaMenuPanel id={megamenuId} onOpenChange={setIsMegamenuOpen}>
            {megamenu}
            {(items || endItems) && (
              <div className="rhc-nav-bar__slots rhc-nav-bar__slots--mobile-in-megamenu">
                {items && (
                  <div className="rhc-nav-bar__slot rhc-nav-bar__slot--primary">
                    <nav aria-label="primary-navigation-mobile" className={clsx('rhc-nav-bar__nav', className)}>
                      <ul className="rhc-nav-bar__list">
                        {items.map((item) => (
                          <NavBarItem key={item.id} {...item} />
                        ))}
                      </ul>
                    </nav>
                  </div>
                )}
                {endItems && (
                  <div className="rhc-nav-bar__slot rhc-nav-bar__slot--secondary">
                    <nav aria-label="secondary-navigation-mobile" className={clsx('rhc-nav-bar__nav', className)}>
                      <ul className="rhc-nav-bar__list">{endItems}</ul>
                    </nav>
                  </div>
                )}
              </div>
            )}
            <NavBarMegaMenuClose id={megamenuId} />
          </NavBarMegaMenuPanel>
        </div>
      ) : (
        <div className={clsx('rhc-nav-bar__slot-main', { 'is-navbar-main-open': isMainNavOpen })}>
          <LinkButton
            aria-expanded={isMainNavOpen}
            className="rhc-nav-bar__slot-main__btn-trigger rhc-nav-bar__link"
            data-role="toggle"
            onClick={() => setIsMainNavOpen((prev) => !prev)}
          >
            <Icon icon={isMainNavOpen ? 'kruis' : 'menu'} />
          </LinkButton>
          <div className="rhc-nav-bar__slots">
            {items && (
              <div className="rhc-nav-bar__slot">
                <nav aria-label="primary-navigation-mobile" className={clsx('rhc-nav-bar__nav', className)}>
                  <ul className="rhc-nav-bar__list">
                    {items.map((item) => (
                      <NavBarItem key={item.id} {...item} />
                    ))}
                  </ul>
                </nav>
              </div>
            )}
            {endItems && (
              <div className="rhc-nav-bar__slot">
                <nav aria-label="secondary-navigation-mobile" className={clsx('rhc-nav-bar__nav', className)}>
                  <ul className="rhc-nav-bar__list">{endItems}</ul>
                </nav>
              </div>
            )}
          </div>
        </div>
      )}

      {children}
    </div>
  );
};

NavBar.displayName = 'NavBar';

export const SubNavBar = ({ ref, children, className, columns, ...restProps }: PropsWithChildren<SubNavBarProps>) => {
  return (
    <div className={clsx(className)} ref={ref} {...restProps}>
      <div className="rhc-sub-nav-bar__content">
        {columns.map((column: NavBarLinkProps[]) => (
          <div className="rhc-sub-nav-bar__list" key={column.map((item) => item.id).join('-')}>
            <LinkList>
              {column.map(({ id, href, target, label }) => (
                <LinkListLink href={href} icon={<Icon icon={'chevron-right'} />} key={id} target={target}>
                  {label}
                </LinkListLink>
              ))}
            </LinkList>
          </div>
        ))}
        {children}
      </div>
    </div>
  );
};

SubNavBar.displayName = 'SubNavBar';
