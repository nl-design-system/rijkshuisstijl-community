import clsx from 'clsx';
import { forwardRef, HTMLAttributes, ReactNode } from 'react';
import { DotBadge } from './DotBadge';
import { Icon } from './Icon';
import { Paragraph } from './Paragraph';

export interface MessageListItemProps extends HTMLAttributes<HTMLLIElement> {
  label: ReactNode;
  description: ReactNode;
  href: string;
  metaData?: ReactNode;
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
