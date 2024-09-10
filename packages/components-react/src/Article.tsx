import {
  Article as UtrechtArticle,
  ArticleProps as UtrechtArticleProps,
} from '@utrecht/component-library-react/dist/css-module';
import { ForwardedRef, forwardRef, PropsWithChildren } from 'react';

export const Article = forwardRef(
  ({ ...restProps }: PropsWithChildren<UtrechtArticleProps>, ref: ForwardedRef<HTMLDivElement>) => {
    return <UtrechtArticle ref={ref} {...restProps}></UtrechtArticle>;
  },
);

Article.displayName = 'Article';
