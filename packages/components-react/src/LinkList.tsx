/**
 * @license EUPL-1.2
 * Copyright (c) 2025 Community for NL Design System
 */
import { LinkList, LinkListProps as UtrechtLinkList} from '@utrecht/component-library-react';
import clsx from 'clsx';

export type { LinkListProps } from '@utrecht/component-library-react';


export const LinkList =({className, ...restProps }: LinkListProps) => {
    return  <UtrechtLinkList className={clsx('rhc-link-list', className)}{...restProps}/>;
    };

LinkList.displayName = 'LinkList';