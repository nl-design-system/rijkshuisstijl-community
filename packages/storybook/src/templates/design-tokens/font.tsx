'use client'; // TODO: move to lower level at which it is actually needed, instead of wrapping the whole file
import {
  Article,
  Heading,
  Paragraph,
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
                <Heading level={1}>Lettertypes</Heading>
                <TokenGroupTable path="rhc.text.font-family" />
                <TokenGroupTable path="basis.text.font-family" />

                <Heading level={2}>Lettergrootte</Heading>
                <TokenGroupTable path="rhc.text.font-size" />
                <TokenGroupTable path="basis.text.font-size" />

                <Heading level={2}>Regelhoogte</Heading>
                <TokenGroupTable path="rhc.text.line-height" />
                <TokenGroupTable path="basis.text.line-height" />

                <Heading level={2}>Letterdikte</Heading>
                <Paragraph>
                  Er zijn veel font-weight waardes, en het effect kun je alleen goed zien wanneer je een variable font
                  gebruikt. De meeste lettertypes ondersteunen alleen 400 en 700, ofwel regular en bold.
                </Paragraph>
                <TokenGroupTable path="rhc.text.font-weight" />
                <TokenGroupTable path="basis.text.font-weight" />
              </div>
            </Article>
          </PageBodyMain>
        </PageBodyContent>
      </PageBodyContainer>
      <SharedFooter />
    </>
  );
}
