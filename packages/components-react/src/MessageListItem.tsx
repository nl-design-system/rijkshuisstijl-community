import clsx from 'clsx';
import { forwardRef, HTMLAttributes } from 'react';
import { DotBadge } from './DotBadge';
import { Icon } from './icon/Icon';

export interface MessageListItemProps extends HTMLAttributes<HTMLLIElement> {
  label: string;
  description: string;
  href: string;
  metaData?: string;
  withBadge?: {
    ariaLabel: string;
    role?: string;
  };
}

export const MessageListItem = forwardRef<HTMLLIElement, MessageListItemProps>(
  ({ label, description, href, metaData, className, ...restProps }, ref) => (
    <li ref={ref} role={'listitem'} {...restProps}>
      <a className={clsx('rhc-message-list__item', className)} href={href} role={'link'}>
        <span className={clsx('rhc-message-list__item-content')}>
          <p className={clsx('rhc-message-list__item__label')}>
            {restProps.withBadge && (
              <DotBadge aria-label={restProps.withBadge.ariaLabel} role={restProps.withBadge.role} />
            )}
            {label}
          </p>
          <p className={'rhc-message-list__item__description'}>{description}</p>
          <p className={'rhc-message-list__item__meta-data'}>{metaData}</p>
          <Icon className={clsx('rhc-message-list__item__end-icon')} icon={'chevron-right'} />
        </span>
      </a>
    </li>
  ),
);

MessageListItem.displayName = 'MessageListItem';
