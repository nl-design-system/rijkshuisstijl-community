import { Article as UtrechtArticle, ArticleProps as UtrechtArticleProps } from '@utrecht/component-library-react';
import { ForwardedRef, forwardRef, PropsWithChildren } from 'react';

export const Article = forwardRef(
  (props: PropsWithChildren<UtrechtArticleProps>, ref: ForwardedRef<HTMLDivElement>) => {
    return <UtrechtArticle ref={ref} {...props}></UtrechtArticle>;
  },
);

Article.displayName = 'Article';
