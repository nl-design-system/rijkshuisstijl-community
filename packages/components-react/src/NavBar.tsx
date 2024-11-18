import { ColumnLayout } from '@utrecht/component-library-react';
import clsx from 'clsx';
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren, ReactElement } from 'react';
import { Heading } from './Heading';
import { Link } from './Link';
import { LinkList, LinkListLink } from './LinkList';
import { Icon, IconProps } from './icon/Icon';

export interface NavBarProps extends HTMLAttributes<HTMLDivElement> {
  headingItem?: NavBarItemProps;
  items: NavBarItemProps[];
  endItems?: NavBarItemProps[];
}

export interface NavBarLinkProps {
  id: string;
  label: string;
  href: string;
}

export interface NavBarItemProps extends NavBarLinkProps, HTMLAttributes<HTMLLIElement> {
  icon?: ReactElement<IconProps>;
  subList?: NavbarSubListProps;
  bold?: boolean;
  iconOnly?: boolean;
  id: string;
}

interface NavbarSubListProps {
  sections: SectionProps[];
}

export interface SubNavBarProps extends HTMLAttributes<HTMLDivElement> {
  columns: NavBarLinkProps[][];
}

interface SectionProps {
  id: string;
  heading: string;
  headingLevel?: 1 | 2 | 3 | 4 | 5;
  items: NavBarLinkProps[];
}

const NavBarItem = forwardRef(
  (
    {
      children,
      className,
      href,
      label,
      icon,
      subList,
      bold = false,
      iconOnly = false,
      ...restProps
    }: PropsWithChildren<NavBarItemProps>,
    ref: ForwardedRef<HTMLLIElement>,
  ) => {
    return (
      <li className={clsx('rhc-nav-bar__item', className)} ref={ref} {...restProps}>
        <Link className={clsx('rhc-nav-bar__link', bold && 'rhc-nav-bar__link--bold')} href={href}>
          {icon}
          <span className={clsx('rhc-nav-bar__label', iconOnly && 'rhc-nav-bar__lable--sr-only')}>{label}</span>
        </Link>
        {subList && (
          <div className="rhc-nav-bar__sub-list">
            {subList.sections.map(({ id, heading, headingLevel = 3, items }) => (
              <div className="rhc-nav-bar__sub-list-section" key={id}>
                <Heading className="rhc-nav-bar__sub-list-section-title" level={headingLevel}>
                  {heading}
                </Heading>
                <ul className="rhc-nav-bar__sub-list-section-list">
                  {items.map(({ id, href, label }) => (
                    <li className="rhc-nav-bar__sub-list-section-item" key={id}>
                      <Link href={href}>{label}</Link>
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
  },
);

NavBarItem.displayName = 'NavBarItem';

export const NavBar = forwardRef(
  (
    { children, className, headingItem, items, endItems, ...restProps }: PropsWithChildren<NavBarProps>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <div className="rhc-nav-bar__container">
        <nav className={clsx('rhc-nav-bar', className)} ref={ref} {...restProps}>
          <ul className="rhc-nav-bar__list">
            {headingItem && <NavBarItem className="rhc-nav-bar__heading" {...headingItem} />}
            {items.map(({ id, href, label, icon, subList }) => (
              <NavBarItem href={href} icon={icon} id={id} key={id} label={label} subList={subList} />
            ))}
          </ul>
          {endItems && (
            <ul className="rhc-nav-bar__list rhc-nav-bar__list--end">
              {endItems.map(({ id, href, label, icon, subList }) => (
                <NavBarItem href={href} icon={icon} id={id} key={id} label={label} subList={subList} />
              ))}
            </ul>
          )}
          {children}
        </nav>
      </div>
    );
  },
);

NavBar.displayName = 'NavBar';

export const SubNavBar = forwardRef(
  (
    { children, className, columns, ...restProps }: PropsWithChildren<SubNavBarProps>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    return (
      <div className={clsx('rhc-sub-nav-bar', className)} ref={ref} {...restProps}>
        <div className="rhc-sub-nav-bar__content">
          <ColumnLayout>
            {columns.map((column: NavBarLinkProps[], index: number) => (
              <div className="rhc-sub-nav-bar__list" key={index}>
                <LinkList>
                  {column.map(({ id, href, label }) => (
                    <LinkListLink href={href} icon={<Icon icon={'chevron-right'} />} key={id}>
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
  },
);

SubNavBar.displayName = 'SubNavBar';
