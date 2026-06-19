'use client'; // TODO: move to lower level at which it is actually needed, instead of wrapping the whole file

import { Article, Heading, SideNav } from '@rijkshuisstijl-community/components-react';
import { NavItems } from './NavItems';
import { PageBodyContainer, PageBodyContent, PageBodyMain } from './PageBody';
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
            <NavItems items={navigation} />
          </SideNav>
          <PageBodyMain>
            <Article>
              <div className="rhc-margin-block-end-wrapper">
                <Heading level={1}>Voor contentbeheerders</Heading>

              </div>
            </Article>
          </PageBodyMain>
        </PageBodyContent>
      </PageBodyContainer>
      <SharedFooter />
    </>
  );
}
