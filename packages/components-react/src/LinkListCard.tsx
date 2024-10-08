import { RichText } from '@utrecht/component-library-react';
import { forwardRef, HTMLAttributes } from 'react';
import { Heading } from './Heading';
import { LinkList } from './LinkList';

export interface LinkListCardProps extends HTMLAttributes<HTMLDivElement> {
  headingLevel: number;
  heading: string;
  // links: Array<{ href: string; body: string }>;
}

export const LinkListCard = forwardRef<HTMLDivElement, LinkListCardProps>(
  ({ children, headingLevel, heading }, ref) => {
    return (
      <div className="rhc-link-list__card" ref={ref}>
        <RichText>
          <Heading level={headingLevel}>{heading}</Heading>
          <LinkList>
            {/* {links.map((linkObj) => (
          <LinkListLink key={linkObj.href} href={linkObj.href} icon={<Icon icon="chevron-right" />}>
            {linkObj.body}
          </LinkListLink>
        ))} */}
            {children}
          </LinkList>
        </RichText>
      </div>
    );
  },
);

LinkListCard.displayName = 'LinkListCard';

/*

import { Heading } from './Heading';
import { Icon } from './icon/Icon';
import { LinkList, LinkListLink } from './LinkList';

export interface LinkListCardProps {
  headingLevel: number;
  heading: string;
  links: Array<{ href: string; body: string }>;
}

export const LinkListCard = ({ headingLevel, heading, links }: LinkListCardProps) => {
  return (
    <div>
      <Heading level={headingLevel}>{heading}</Heading>
      <LinkList>
        {links.map((linkObj) => (
          <LinkListLink key={linkObj.href} href={linkObj.href} icon={<Icon icon="chevron-right" />}>
            {linkObj.body}
          </LinkListLink>
        ))}
      </LinkList>
    </div>
  );
};

LinkListCard.displayName = 'LinkListCard';
*/
