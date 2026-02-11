/**
 * @license EUPL-1.2
 * Copyright (c) 2026 Community for NL Design System
 */

import clsx from 'clsx';
import { HTMLAttributes, Ref } from 'react';

export interface MessageListProps extends HTMLAttributes<HTMLUListElement> {
  ref?: Ref<HTMLUListElement>;
}

export const MessageList = ({ ref, className, children, ...restProps }: MessageListProps) => {
  return (
    <ul
      className={clsx('rhc-message-list rhc-message-list__item-container', className)}
      ref={ref}
      role="list"
      {...restProps}
    >
      {children}
    </ul>
  );
};

MessageList.displayName = 'MessageList';
