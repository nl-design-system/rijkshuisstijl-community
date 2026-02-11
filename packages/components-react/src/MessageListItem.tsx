/**
 * @license EUPL-1.2
 * Copyright (c) 2026 Community for NL Design System
 */

import clsx from 'clsx';
import { HTMLAttributes, ReactNode, Ref } from 'react';
import { DotBadge, DotBadgeProps } from './DotBadge';
import { Icon } from './Icon';
import { Paragraph } from './Paragraph';

export interface MessageListItemProps extends HTMLAttributes<HTMLLIElement> {
  label: ReactNode;
  description: ReactNode;
  href: string;
  metaData?: ReactNode;
  withBadge?: DotBadgeProps;
  ref?: Ref<HTMLLIElement>;
}

export const MessageListItem = ({
  ref,
  label,
  description,
  href,
  metaData,
  className,
  withBadge,
  ...restProps
}: MessageListItemProps) => (
  <li ref={ref} role={'listitem'} {...restProps}>
    <a className={clsx('rhc-message-list__item', className)} href={href} role={'link'}>
      <span className={'rhc-message-list__item-content'}>
        <Paragraph className={clsx('rhc-message-list__item__label')}>
          {withBadge && <DotBadge {...withBadge} />}
          {label}
        </Paragraph>
        <Paragraph className={'rhc-message-list__item__description'}>{description}</Paragraph>
        <Paragraph className={'rhc-message-list__item__meta-data'}>{metaData}</Paragraph>
        <Icon className={'rhc-message-list__item__end-icon'} icon={'chevron-right'} />
      </span>
    </a>
  </li>
);

MessageListItem.displayName = 'MessageListItem';
