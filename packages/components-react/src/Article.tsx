/**
 * @license EUPL-1.2
 * Copyright (c) 2026 Community for NL Design System
 */

import { Article as UtrechtArticle } from '@utrecht/component-library-react'; 
import type { ArticleProps } from '@utrecht/component-library-react';
import clsx from 'clsx';

export type { ArticleProps } from '@utrecht/component-library-react'; 
export const Article = ({ className,  ...restProps } : ArticleProps ) => {
    return <UtrechtArticle className = {clsx('rhc-article', className )}{...restProps} />;
};

Article.displayName = 'Article';