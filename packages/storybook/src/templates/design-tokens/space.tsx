'use client'; // TODO: move to lower level at which it is actually needed, instead of wrapping the whole file

import {
  Article,
  Heading,
  SideNav,
  SideNavItem,
  SideNavLink,
  SideNavList,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from '@rijkshuisstijl-community/components-react';
import tokens from '@rijkshuisstijl-community/design-tokens/dist/index.tokens.json';
import { Code, Paragraph } from '@utrecht/component-library-react';
import { CopyDesignTokenButton } from './CopyDesignTokenButton';
import { PageBodyContainer, PageBodyContent, PageBodyMain } from './PageBody';
import { SpaceSample } from './SpaceSample';
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
          <SideNav className={'rhc-side-nav'}>
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
                <Heading level={1}>Ruimte</Heading>
                <Paragraph>
                  Gebruik deze tokens in CSS voor bijvoorbeeld <Code>padding</Code>, <Code>margin</Code> en{' '}
                  <Code>gap</Code>.
                </Paragraph>
                <Table className="utrecht-table--rhc-breakout-gutter">
                  <TableHeader>
                    <TableRow>
                      <TableHeaderCell>Voorbeeld</TableHeaderCell>
                      <TableHeaderCell>Design Token</TableHeaderCell>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {Object.entries(tokens['rhc']['space']).map(([name, value]) => (
                      <TableRow key={name}>
                        <TableCell className="utrecht-table__cell--rhc-middle">
                          <SpaceSample value={value} />
                        </TableCell>
                        <TableCell className="utrecht-table__cell--rhc-middle">
                          <CopyDesignTokenButton path={[...['rhc', 'space'], name]} />
                        </TableCell>
                      </TableRow>
                    ))}
                    {Object.entries([
                      tokens['rhc']['size']['quarter-lint'],
                      tokens['rhc']['size']['half-lint'],
                      tokens['rhc']['size']['lint'],
                      tokens['rhc']['size']['2-lint'],
                      tokens['rhc']['size']['3-lint'],
                    ]).map(([name, value]) => (
                      <TableRow key={name}>
                        <TableCell className="utrecht-table__cell--rhc-middle">
                          <SpaceSample value={value} />
                        </TableCell>
                        <TableCell className="utrecht-table__cell--rhc-middle">
                          <CopyDesignTokenButton path={[...['rhc', 'space'], name]} />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </Article>
          </PageBodyMain>
        </PageBodyContent>
      </PageBodyContainer>
      <SharedFooter />
    </>
  );
}
