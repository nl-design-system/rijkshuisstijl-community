import clsx from 'clsx';
import { forwardRef, HTMLAttributes, ReactNode } from 'react';
import { Heading } from './Heading';
import { LinkList } from './LinkList';

export interface LinkListCardProps extends HTMLAttributes<HTMLDivElement> {
  headingLevel: number;
  heading: ReactNode;
}

export const LinkListCard = forwardRef<HTMLDivElement, LinkListCardProps>(
  ({ children, className, headingLevel, heading }, ref) => {
    return (
      <div className={clsx('rhc-link-list-card', className)} ref={ref}>
        <Heading level={headingLevel}>{heading}</Heading>
        <LinkList>{children}</LinkList>
      </div>
    );
  },
);

LinkListCard.displayName = 'LinkListCard';
