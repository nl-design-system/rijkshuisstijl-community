'use client'; // TODO: move to lower level at which it is actually needed, instead of wrapping the whole file

import {
  Article,
  Heading,
  SideNav,
  SideNavItem,
  SideNavLink,
  SideNavList,
} from '@rijkshuisstijl-community/components-react';
import { PageBodyContainer, PageBodyContent, PageBodyMain } from './PageBody';
import { TokenGroupTable } from './TokenGroupTable';
import { navigation } from './navigation';
import SharedFooter from '../shared/footer';
import SharedHeader from '../shared/header';
import './index.css';

export default function Page() {
  return (
    <>
      <SharedHeader />
      <PageBodyContainer>
        <PageBodyContent layout="side-nav">
          <SideNav className="rhc-side-nav" heading="Submenu">
            <SideNavList>
              {navigation.map(({ href, label }) => (
                <SideNavItem key={href}>
                  <SideNavLink href={href}>{label}</SideNavLink>
                </SideNavItem>
              ))}
            </SideNavList>
          </SideNav>
          <PageBodyMain>
            <Article>
              <div className="rhc-margin-block-end-wrapper">
                <Heading level={1}>Afrondingen</Heading>
                <TokenGroupTable path="rhc.border-radius" />
                <TokenGroupTable path="basis.border-radius" />
              </div>
            </Article>
          </PageBodyMain>
        </PageBodyContent>
      </PageBodyContainer>
      <SharedFooter />
    </>
  );
}
