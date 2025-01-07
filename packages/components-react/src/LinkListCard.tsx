import clsx from 'clsx';
import { HTMLAttributes, ReactNode, Ref } from 'react';
import { Heading } from './Heading';
import { LinkList } from './LinkList';

export interface LinkListCardProps extends HTMLAttributes<HTMLDivElement> {
  headingLevel: number;
  heading: ReactNode;
  ref?: Ref<HTMLDivElement>;
}

export const LinkListCard = ({ ref, children, className, headingLevel, heading }: LinkListCardProps) => {
  return (
    <div className={clsx('rhc-link-list-card', className)} ref={ref}>
      <Heading level={headingLevel}>{heading}</Heading>
      <LinkList>{children}</LinkList>
    </div>
  );
};

LinkListCard.displayName = 'LinkListCard';
