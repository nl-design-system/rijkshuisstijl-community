import { Grid } from '@amsterdam/design-system-react';
import '@amsterdam/design-system-css/dist/index.css';
import clsx from 'clsx';
import { forwardRef } from 'react';
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react';
import './index.css';

export const PageBodyContainer = forwardRef(
  (
    { children, className, ...restProps }: PropsWithChildren<HTMLAttributes<HTMLDivElement>>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => (
    <div {...restProps} className={clsx('utrecht-page-body', className)} ref={ref}>
      {children}
    </div>
  ),
);

PageBodyContainer.displayName = 'PageBodyContainer';

export const PageBodyContent = ({ children }: PropsWithChildren<{ layout?: string } & HTMLAttributes<HTMLDivElement>>) => (
  <div className="utrecht-page-body__content">
    <Grid paddingVertical="x-large">{children}</Grid>
  </div>
);

export const PageBodySide = ({ children }: PropsWithChildren<{}>) => {
  return (
    <Grid.Cell
      className="_ams-item"
      span={{
        medium: 8,
        narrow: 4,
        wide: 3,
      }}
    >
      {children}
    </Grid.Cell>
  );
};

PageBodySide.displayName = 'PageBodySide';

export const PageBodyMain = ({ children }: PropsWithChildren<{}>) => {
  return (
    <Grid.Cell
      className="_ams-item"
      span={{
        medium: 8,
        narrow: 4,
        wide: 9,
      }}
    >
      <main className="utrecht-page-body__landmark" id="main" tabIndex={-1}>
        {children}
      </main>
    </Grid.Cell>
  );
};

PageBodyMain.displayName = 'PageBodyMain';

export const PageBodyAside = ({ children }: PropsWithChildren<{}>) => {
  return <aside className="utrecht-page-body__landmark">{children}</aside>;
};
PageBodyAside.displayName = 'PageBodyAside';

export const PageBodyNav = ({ children }: PropsWithChildren<{}>) => {
  return <nav className="utrecht-page-body__landmark">{children}</nav>;
};

PageBodyNav.displayName = 'PageBodyNav';
