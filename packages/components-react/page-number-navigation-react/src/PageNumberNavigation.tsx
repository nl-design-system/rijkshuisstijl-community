/**
 * @license EUPL-1.2
 * Copyright (c) 2026 Community for NL Design System
 */

import { Pagination, type PaginationProps } from '@amsterdam/design-system-react';
import clsx from 'clsx';
import type { Ref } from 'react';

export interface PageNumberNavigationProps extends PaginationProps {
  ref?: Ref<HTMLElement>;
}

export const PageNumberNavigation = ({
  className,
  nextLabel = 'Volgende',
  previousLabel = 'Vorige',
  ...restProps
}: PageNumberNavigationProps) => {
  return (
    <Pagination
      className={clsx('rhc-page-number-navigation', className)}
      nextLabel={nextLabel}
      previousLabel={previousLabel}
      {...restProps}
    />
  );
};

PageNumberNavigation.displayName = 'PageNumberNavigation';
