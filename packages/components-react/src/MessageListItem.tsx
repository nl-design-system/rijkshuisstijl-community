import clsx from 'clsx';
import { forwardRef, HTMLAttributes } from 'react';
import { DotBadge } from './DotBadge';
import { Heading } from './Heading';
import { Paragraph } from './Paragraph';
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
        <span className={clsx('rhc-message-list__item__content')}>
          <Heading className={clsx('rhc-message-list__item__label')} level={5}>
            {restProps.withBadge && (
              <DotBadge aria-label={restProps.withBadge.ariaLabel} role={restProps.withBadge.role} />
            )}
            {label}
          </Heading>
          <Paragraph small className={'rhc-message-list__item__description'}>
            {description}
          </Paragraph>
          <Paragraph small className={'rhc-message-list__item__meta-data'}>
            {metaData}
          </Paragraph>
          <Icon className={clsx('rhc-message-list__item__end-icon')} icon={'chevron-right'} />
        </span>
      </a>
    </li>
  ),
);

MessageListItem.displayName = 'MessageListItem';
