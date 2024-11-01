import clsx from 'clsx';
import { forwardRef, HTMLAttributes } from 'react';

export interface MessageListProps extends HTMLAttributes<HTMLUListElement> {}

export const MessageList = forwardRef<HTMLUListElement, MessageListProps>((props, ref) => {
  return (
    <ul
      className={clsx('rhc-message-list rhc-message-list__item-container', props.className)}
      ref={ref}
      role="list"
      {...props}
    >
      {props.children}
    </ul>
  );
});

MessageList.displayName = 'MessageList';
