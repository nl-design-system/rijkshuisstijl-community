/**
 * @license EUPL-1.2
 * Copyright (c) 2026 Community for NL Design System
 */

import { ColumnLayout } from '@rijkshuisstijl-community/column-layout-react/no-side-effects';
import { Heading, HeadingLevel } from '@rijkshuisstijl-community/heading-react/no-side-effects';
import { Icon, IconProps } from '@rijkshuisstijl-community/icon-react/no-side-effects';
import { LinkList, LinkListLink } from '@rijkshuisstijl-community/link-list-react/no-side-effects';
import { Link } from '@rijkshuisstijl-community/link-react/no-side-effects';
import { LinkButton } from '@rijkshuisstijl-community/link-button-react/no-side-effects';
import clsx from 'clsx';
import { HTMLAttributes, PropsWithChildren, ReactElement, ReactNode, Ref, useEffect, useState } from 'react';

export interface NavBarProps extends HTMLAttributes<HTMLDivElement> {
  headingItem?: NavBarItemProps;
  identity?: ReactNode;
  items?: NavBarItemProps[];
  endItems?: NavBarItemProps[];
  megamenu?: ReactNode;
  ref?: Ref<HTMLDivElement>;
}

export interface NavBarLinkProps {
  id: string;
  label: ReactNode;
  href: string;
  target?: string;
}

export interface NavBarItemProps extends NavBarLinkProps, HTMLAttributes<HTMLLIElement> {
  icon?: ReactElement<IconProps>;
  subList?: NavbarSubListProps;
  iconOnly?: boolean;
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

export interface NavBarMegaMenuColumnProps {
  id: string;
  heading: ReactNode;
  items: NavBarLinkProps[];
}

export interface NavBarMegaMenuProps extends HTMLAttributes<HTMLDivElement> {
  tagline?: ReactNode;
  columns: NavBarMegaMenuColumnProps[];
  ref?: Ref<HTMLDivElement>;
}

interface SectionProps {
  id: string;
  heading: ReactNode;
  headingLevel?: HeadingLevel;
  items: NavBarLinkProps[];
}

const NavBarItem = ({
  ref,
  children,
  className,
  href,
  target,
  label,
  icon,
  subList,
  iconOnly = false,
  open = false,
  contentId = '1',
  ...restProps
}: PropsWithChildren<NavBarItemProps>) => {
  const [isItemOpen, setIsItemOpen] = useState(open);

  return (
    <li className={clsx('rhc-nav-bar__item', isItemOpen && 'is-open', className)} ref={ref} {...restProps}>

      {/* todo: make linkButton meganism into a seperate re-useable component */}
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
        <Link className={clsx('rhc-nav-bar__link')} href={href} target={target}>
          {icon}
          <span className={clsx('rhc-nav-bar__label', iconOnly && 'rhc-nav-bar__label--sr-only')}>{label}</span>
        </Link>
      )}
      {subList && isItemOpen && (
        <div className="rhc-nav-bar__item-dropdown" id={`rhc-nav-bar__item-dropdown-${contentId}`}>
          {subList.sections.map(({ id, heading, headingLevel = 3, items }) => (
            <div className="rhc-nav-bar__item-dropdown-section" key={id}>
              <Heading className="rhc-nav-bar__item-dropdown-section-title" level={headingLevel}>
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
  headingItem,
  identity,
  items,
  endItems,
  megamenu,
  ...restProps
}: PropsWithChildren<NavBarProps>) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('is-megamenu-open', isOpen);
    return () => document.documentElement.classList.remove('is-megamenu-open');
  }, [isOpen]);

  return (
    <div className={clsx('rhc-nav-bar', isOpen && 'is-open')}>
      {identity && <div className="rhc-nav-bar__slot-identity">{identity}</div>}

      {megamenu ? (
        <div className={clsx('rhc-nav-bar__slot-megamenu', isOpen && 'is-megamenu-open')}>
          <LinkButton onClick={() => setIsOpen((prev) => !prev)}>
            <Icon icon="menu" />
            <span className="rhc-visually-hidden-mobile">Kies een onderwerp of dienst</span>
          </LinkButton>
          <div className="rhc-nav-bar__slots">
            {isOpen && <div className="rhc-nav-bar__megamenu">{megamenu}</div>}
            {items && (
              <div className="rhc-nav-bar__slot">
                <nav className={clsx('rhc-nav-bar__nav', className)} ref={ref} {...restProps}>
                  <ul className="rhc-nav-bar__list">
                    {items.map((item) => (
                      <NavBarItem {...item} />
                    ))}
                  </ul>
                </nav>
              </div>
            )}
            {endItems && (
              <div className="rhc-nav-bar__slot">
                <nav className={clsx('rhc-nav-bar__nav', className)} ref={ref} {...restProps}>
                  <ul className="rhc-nav-bar__list">
                    {endItems.map((enditem) => (
                      <NavBarItem {...enditem} />
                    ))}
                  </ul>
                </nav>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className={clsx('rhc-nav-bar__slot-main', isMobileMenuOpen && 'is-mobile-open')}>
          <LinkButton onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
            <Icon icon={isMobileMenuOpen ? 'chevron-up' : 'chevron-down'} />
          </LinkButton>
          <div className="rhc-nav-bar__slots">
            {items && (
              <div className="rhc-nav-bar__slot">
                <nav className={clsx('rhc-nav-bar__nav', className)} ref={ref} {...restProps}>
                  <ul className="rhc-nav-bar__list">
                    {items.map((item) => (
                      <NavBarItem {...item} />
                    ))}
                  </ul>
                </nav>
              </div>
            )}
            {endItems && (
              <div className="rhc-nav-bar__slot">
                <nav className={clsx('rhc-nav-bar__nav', className)} ref={ref} {...restProps}>
                  <ul className="rhc-nav-bar__list">
                    {endItems.map((enditem) => (
                      <NavBarItem {...enditem} />
                    ))}
                  </ul>
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


export const NavBarMegaMenu = ({
  ref,
  children,
  className,
  tagline,
  columns,
  ...restProps
}: PropsWithChildren<NavBarMegaMenuProps>) => {
  return (
    <div className={clsx('rhc-nav-bar__megamenu-content', className)} ref={ref} {...restProps}>
      {tagline && <p className="rhc-nav-bar__megamenu-tagline">{tagline}</p>}
      <div className="rhc-grid">
        {columns.map(({ id, heading, items }) => (
          <div className="rhc-grid__cell--cols-421" key={id}>
            <p className="rhc-nav-bar__megamenu-column-heading">{heading}</p>
            <LinkList>
              {items.map(({ id: itemId, href, target, label }) => (
                <LinkListLink href={href} key={itemId} target={target}>
                  {label}
                </LinkListLink>
              ))}
            </LinkList>
          </div>
        ))}
      </div>
      {children}
    </div>
  );
};

NavBarMegaMenu.displayName = 'NavBarMegaMenu';

export const SubNavBar = ({ ref, children, className, columns, ...restProps }: PropsWithChildren<SubNavBarProps>) => {
  return (
    <div className={clsx('', className)} ref={ref} {...restProps}>
      <div className="rhc-sub-nav-bar__content">
        <ColumnLayout>
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
        </ColumnLayout>
        {children}
      </div>
    </div>
  );
};

SubNavBar.displayName = 'SubNavBar';
