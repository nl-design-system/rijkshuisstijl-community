import clsx from 'clsx';
import { HTMLAttributes, ReactNode, Ref } from 'react';
import { DotBadge } from './DotBadge';
import { Paragraph } from './Paragraph';
import { Icon } from './icon/Icon';

export interface MessageListItemProps extends HTMLAttributes<HTMLLIElement> {
  label: ReactNode;
  description: ReactNode;
  href: string;
  metaData?: ReactNode;
  withBadge?: {
    'aria-label': string;
    role?: string;
  };
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
);

MessageListItem.displayName = 'MessageListItem';
