import { forwardRef, HTMLAttributes } from 'react';
import { Heading } from './Heading';
import { LinkList } from './LinkList';

export interface LinkListCardProps extends HTMLAttributes<HTMLDivElement> {
  headingLevel: number;
  heading: string;
}

export const LinkListCard = forwardRef<HTMLDivElement, LinkListCardProps>(
  ({ children, headingLevel, heading }, ref) => {
    return (
      <div className="rhc-link-list__card" ref={ref}>
        <Heading level={headingLevel}>{heading}</Heading>
        <LinkList>{children}</LinkList>
      </div>
    );
  },
);

LinkListCard.displayName = 'LinkListCard';
