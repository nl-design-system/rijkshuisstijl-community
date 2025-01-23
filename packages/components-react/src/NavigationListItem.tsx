import { Paragraph } from '@utrecht/component-library-react';
import clsx from 'clsx';
import { forwardRef, HTMLAttributes, ReactNode } from 'react';
import { Icon } from './Icon';
import { RHCIconID } from './icon-sets/default-icons/RHCIconIDs';

export interface NavigationListItemProps extends HTMLAttributes<HTMLLIElement> {
  label: ReactNode;
  description: ReactNode;
  icon: RHCIconID | ReactNode;
  href: string;
}

export const NavigationListItem = forwardRef<HTMLLIElement, NavigationListItemProps>(
  ({ label, href, description, icon, className, ...restProps }, ref) => {
    return (
      <li ref={ref} role="listitem" {...restProps}>
        <a className={clsx('rhc-navigation-list__item', className)} href={href} role={'link'}>
          {typeof icon === 'string' ? (
            <Icon className={'rhc-navigation-list__item__start-icon'} icon={icon as RHCIconID} />
          ) : (
            <Icon className={'rhc-navigation-list__item__start-icon'}>{icon}</Icon>
          )}
          <span className={'rhc-navigation-list__item-content'}>
            <Paragraph appearance="small" className={'rhc-navigation-list__item__label'}>
              {label}
            </Paragraph>
            <Paragraph appearance="small" className={'rhc-navigation-list__item__description'}>
              {description}
            </Paragraph>
            <Icon className={'rhc-navigation-list__item__end-icon'} icon={'chevron-right'} />
          </span>
        </a>
      </li>
    );
  },
);

NavigationListItem.displayName = 'NavigationListItem';
