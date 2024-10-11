import clsx from 'clsx';
import { forwardRef, HTMLAttributes, ReactNode } from 'react';
import { Heading } from './Heading';
import { Paragraph } from './Paragraph';
import { Icon } from './icon/Icon';

export interface NavigationListItemProps extends HTMLAttributes<HTMLLIElement> {
  label: ReactNode;
  description: ReactNode;
  icon: ReactNode;
  href: string;
}

export const NavigationListItem = forwardRef<HTMLLIElement, NavigationListItemProps>(
  ({ label, href, description, icon, className, ...restProps }, ref) => {
    return (
      <li ref={ref} role="listitem" {...restProps}>
        <a className={clsx('rhc-navigation-list__item', className)} href={href} role={'link'}>
          {typeof icon === 'string' ? (
            <Icon className={clsx('rhc-navigation-list__item__start-icon')} icon={icon} />
          ) : (
            <Icon className={clsx('rhc-navigation-list__item__start-icon')}>{icon}</Icon>
          )}
          <span className={clsx('rhc-navigation-list__item-content')}>
            <Heading className={clsx('rhc-navigation-list__item__label')} level={3}>
              {label}
            </Heading>
            <Paragraph small className={'rhc-navigation-list__item__description'}>
              {description}
            </Paragraph>
            <Icon className={clsx('rhc-navigation-list__item__end-icon')} icon={'chevron-right'} />
          </span>
        </a>
      </li>
    );
  },
);

NavigationListItem.displayName = 'NavigationListItem';
