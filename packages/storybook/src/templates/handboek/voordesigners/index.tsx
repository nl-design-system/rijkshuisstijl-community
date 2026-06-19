'use client'; // TODO: move to lower level at which it is actually needed, instead of wrapping the whole file

import { Article, Heading, LinkList, LinkListLink, Icon, SideNav } from '@rijkshuisstijl-community/components-react';
import { NavItems } from '../NavItems';
import { PageBodyContainer, PageBodyContent, PageBodyMain, PageBodySide } from '../PageBody';
import { navigation } from '../navigation';
import SharedFooter from '../../shared/footer';
import SharedHeader from '../../shared/header';
import '../index.css';

export default function Page() {
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
            <Article>
              <div className="rhc-margin-block-end-wrapper">
                <Heading level={1}>Voor designers</Heading>
                <LinkList>
                  <LinkListLink href="/handboek/voor-designers/introductie" icon={<Icon icon="chevron-right" />}>
                    Introductie
                  </LinkListLink>
                  <LinkListLink href="/handboek/voor-designers/figma-changelog" icon={<Icon icon="chevron-right" />}>
                    Figma changelog
                  </LinkListLink>
                </LinkList>
              </div>
            </Article>
          </PageBodyMain>
        </PageBodyContent>
      </PageBodyContainer>
      <SharedFooter />
    </>
  );
}
