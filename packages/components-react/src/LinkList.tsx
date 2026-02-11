/**
 * @license EUPL-1.2
 * Copyright (c) 2026 Community for NL Design System
 */

import { LinkList as UtrechtLinkList } from '@utrecht/component-library-react';
import clsx from 'clsx';
import { ComponentProps } from 'react';

export { LinkListLink } from '@utrecht/component-library-react';
export type { LinkListLinkProps, LinkListProps } from '@utrecht/component-library-react';

export const LinkList = ({ className, ...restProps }: ComponentProps<typeof UtrechtLinkList>) => {
  return <UtrechtLinkList className={clsx('rhc-link-list', className)} {...restProps} />;
};

LinkList.displayName = 'LinkList';
