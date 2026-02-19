/**
 * @license EUPL-1.2
 * Copyright (c) 2026 Community for NL Design System
 */

import { Icon } from '@rijkshuisstijl-community/icon-react';
import { RHCIconID } from '@rijkshuisstijl-community/icon-react';
import clsx from 'clsx';
import { HTMLAttributes, ReactNode, Ref } from 'react';
import { Paragraph } from './Paragraph';

export interface NavigationListItemProps extends HTMLAttributes<HTMLLIElement> {
  label: ReactNode;
  description: ReactNode;
  icon: RHCIconID | ReactNode;
  iconEnd?: RHCIconID | ReactNode;
  href: string;
  ref?: Ref<HTMLLIElement>;
}

export const NavigationListItem = ({
  ref,
  label,
  href,
  description,
  icon,
  iconEnd = 'chevron-right',
  className,
  ...restProps
}: NavigationListItemProps) => {
  return (
    <li ref={ref} role="listitem" {...restProps}>
      <a className={clsx('rhc-navigation-list__item', className)} href={href} role={'link'}>
        {typeof icon === 'string' ? (
          <Icon className={'rhc-navigation-list__item__start-icon'} icon={icon as RHCIconID} />
        ) : (
          <Icon className={'rhc-navigation-list__item__start-icon'}>{icon}</Icon>
        )}
        <span className={'rhc-navigation-list__item-content'}>
          <Paragraph className={'rhc-navigation-list__item__label'}>{label}</Paragraph>
          <Paragraph className={'rhc-navigation-list__item__description'}>{description}</Paragraph>
          {typeof iconEnd === 'string' ? (
            <Icon className={'rhc-navigation-list__item__end-icon'} icon={iconEnd as RHCIconID} />
          ) : (
            <Icon className={'rhc-navigation-list__item__end-icon'}>{iconEnd}</Icon>
          )}
        </span>
      </a>
    </li>
  );
};

NavigationListItem.displayName = 'NavigationListItem';
