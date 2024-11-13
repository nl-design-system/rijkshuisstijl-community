import clsx from 'clsx';
import { forwardRef, HTMLAttributes } from 'react';
import { DotBadge } from './DotBadge';
import { Paragraph } from './Paragraph';
import { Icon } from './icon/Icon';

export interface MessageListItemProps extends HTMLAttributes<HTMLLIElement> {
  label: string;
  description: string;
  href: string;
  metaData?: string;
  withBadge?: {
    'aria-label': string;
    role?: string;
  };
}

export const MessageListItem = forwardRef<HTMLLIElement, MessageListItemProps>(
  ({ label, description, href, metaData, className, withBadge, ...restProps }, ref) => (
    <li ref={ref} role={'listitem'} {...restProps}>
      <a className={clsx('rhc-message-list__item', className)} href={href} role={'link'}>
        <span className={'rhc-message-list__item-content'}>
          <Paragraph className={clsx('rhc-message-list__item__label')}>
            {withBadge && <DotBadge {...withBadge} />}
            {label}
          </Paragraph>
          <Paragraph appearance="small" className={'rhc-message-list__item__description'}>
            {description}
          </Paragraph>
          <Paragraph appearance="small" className={'rhc-message-list__item__meta-data'}>
            {metaData}
          </Paragraph>
          <Icon className={'rhc-message-list__item__end-icon'} icon={'chevron-right'} />
        </span>
      </a>
    </li>
  ),
);

MessageListItem.displayName = 'MessageListItem';
