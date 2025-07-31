import clsx from 'clsx';
import { HTMLAttributes, PropsWithChildren, ReactElement, ReactNode, Ref } from 'react';
import { ColumnLayout } from './ColumnLayout';
import { Heading, HeadingLevel } from './Heading';
import { Icon, IconProps } from './Icon';
import { Link } from './Link';
import { LinkList, LinkListLink } from './LinkList';

export interface NavBarProps extends HTMLAttributes<HTMLDivElement> {
  headingItem?: NavBarItemProps;
  items: NavBarItemProps[];
  endItems?: NavBarItemProps[];
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
  bold?: boolean;
  iconOnly?: boolean;
  id: string;
  ref?: Ref<HTMLLIElement>;
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
  bold = false,
  iconOnly = false,
  ...restProps
}: PropsWithChildren<NavBarItemProps>) => {
  return (
    <li className={clsx('rhc-nav-bar__item', className)} ref={ref} {...restProps}>
      <Link className={clsx('rhc-nav-bar__link', bold && 'rhc-nav-bar__link--bold')} href={href} target={target}>
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
                {items.map(({ id, href, target, label }) => (
                  <li className="rhc-nav-bar__sub-list-section-item" key={id}>
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
  items,
  endItems,
  ...restProps
}: PropsWithChildren<NavBarProps>) => {
  return (
    <div className="rhc-nav-bar__container">
      <nav className={clsx('rhc-nav-bar', className)} ref={ref} {...restProps}>
        <ul className="rhc-nav-bar__list">
          {headingItem && <NavBarItem className="rhc-nav-bar__heading" {...headingItem} />}
          {items.map((item) => (
            <NavBarItem key={item.id} {...item} />
          ))}
        </ul>
        {endItems && (
          <ul className="rhc-nav-bar__list rhc-nav-bar__list--end">
            {endItems.map((enditem) => (
              <NavBarItem key={enditem.id} {...enditem} />
            ))}
          </ul>
        )}
        {children}
      </nav>
    </div>
  );
};

NavBar.displayName = 'NavBar';

export const SubNavBar = ({ ref, children, className, columns, ...restProps }: PropsWithChildren<SubNavBarProps>) => {
  return (
    <div className={clsx('rhc-sub-nav-bar', className)} ref={ref} {...restProps}>
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
