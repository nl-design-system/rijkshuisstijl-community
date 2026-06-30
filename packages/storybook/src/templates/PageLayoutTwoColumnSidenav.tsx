'use client'; // TODO: move to lower level at which it is actually needed, instead of wrapping the whole file

import { Article, SideNav } from '@rijkshuisstijl-community/components-react';
import type { PropsWithChildren } from 'react';
import { NavItems } from './handboek/NavItems';
import { PageBodyContainer, PageBodyContent, PageBodyMain, PageBodySide } from './handboek/PageBody';
import './handboek/index.css';
import { navigation } from './handboek/navigation';
import SharedFooter from './shared/footer';
import SharedHeader from './shared/header';

export default function PageLayoutTwoColumnSidenav({ children }: Readonly<PropsWithChildren>) {
  return (
    <>
      <SharedHeader />
      <PageBodyContainer>
        <PageBodyContent layout="none">
          <PageBodySide>
            <SideNav className="rhc-side-nav" heading="Submenu">
              <NavItems items={navigation} />
            </SideNav>
          </PageBodySide>
          <PageBodyMain>
            <Article>{children}</Article>
          </PageBodyMain>
        </PageBodyContent>
      </PageBodyContainer>
      <SharedFooter />
    </>
  );
}
