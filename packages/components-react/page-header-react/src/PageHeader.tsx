/**
 * @license EUPL-1.2
 * Copyright (c) 2026 Community for NL Design System
 */

import { ReactNode } from 'react';

import '@rijkshuisstijl-community/page-header-css';

type PageHeaderProps = {
  children: ReactNode;
  className?: string;
};

export const PageHeader = ({ children, className, ...restProps }: PageHeaderProps) => (
  <header className={`rhc-page-header ${className}`} {...restProps}>
    {children}
  </header>
);

//export default PageHeader;
