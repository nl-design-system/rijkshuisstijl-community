'use client'; // TODO: move to lower level at which it is actually needed, instead of wrapping the whole file

import { Article, Heading, LinkListLink, Icon, SideNav } from '@rijkshuisstijl-community/components-react';
import { NavItems } from './NavItems';
import { PageBodyContainer, PageBodyContent, PageBodyMain, PageBodySide } from './PageBody';
import { navigation } from './navigation';
import SharedFooter from '../shared/footer';
import SharedHeader from '../shared/header';
import './index.css';
import { LinkList } from '@utrecht/component-library-react';

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
                <Heading level={1}>Handboek</Heading>
                {/* <Paragraph>Introductie paragraaf</Paragraph> */}
                <LinkList>
                  <LinkListLink href="/handboek/huisstijl-vastleggen" icon={<Icon icon="chevron-right" />}>
                    Huisstijl vastleggen
                  </LinkListLink>
                  <LinkListLink href="/handboek/voor-designers" icon={<Icon icon="chevron-right" />}>
                    Voor designers
                  </LinkListLink>
                  <LinkListLink href="/handboek/voor-ontwikkelaars" icon={<Icon icon="chevron-right" />}>
                    Voor ontwikkelaars
                  </LinkListLink>
                  <LinkListLink href="/handboek/voor-contentbeheerders" icon={<Icon icon="chevron-right" />}>
                    Voor contentbeheerders
                  </LinkListLink>
                  <LinkListLink href="/handboek/voor-projectleiders" icon={<Icon icon="chevron-right" />}>
                    Voor projectleiders
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
