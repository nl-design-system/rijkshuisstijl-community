import clsx from 'clsx';
import { forwardRef, HTMLAttributes } from 'react';

export interface MessageListProps extends HTMLAttributes<HTMLUListElement> {}

export const MessageList = forwardRef<HTMLUListElement, MessageListProps>(
  ({ className, children, ...restProps }, ref) => {
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
  },
);

MessageList.displayName = 'MessageList';
