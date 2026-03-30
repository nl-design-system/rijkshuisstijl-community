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
                    {[
                      { name: '0', value: tokens['rhc']['space']['0'] },
                      { name: '25', value: tokens['rhc']['space']['25'] },
                      { name: '50', value: tokens['rhc']['space']['50'] },
                      { name: '100', value: tokens['rhc']['space']['100'] },
                      { name: '150', value: tokens['rhc']['space']['150'] },
                      { name: '200', value: tokens['rhc']['space']['200'] },
                      { name: '300', value: tokens['rhc']['space']['300'] },
                      { name: '400', value: tokens['rhc']['space']['400'] },
                      { name: '500', value: tokens['rhc']['space']['500'] },
                      { name: '600', value: tokens['rhc']['space']['600'] },
                      { name: '700', value: tokens['rhc']['space']['700'] },
                    ].map(({ name, value }) => (
                      <TableRow key={name}>
                        <TableCell className="utrecht-table__cell--rhc-middle">
                          <SpaceSample value={`${value}`} />
                        </TableCell>
                        <TableCell className="utrecht-table__cell--rhc-middle">
                          <CopyDesignTokenButton path={['rhc', 'space', name]} />
                        </TableCell>
                      </TableRow>
                    ))}
                    {[
                      { name: 'quarter-lint', value: tokens['rhc']['size']['quarter-lint'] },
                      { name: 'half-lint', value: tokens['rhc']['size']['half-lint'] },
                      { name: 'lint', value: tokens['rhc']['size']['lint'] },
                      { name: '2-lint', value: tokens['rhc']['size']['2-lint'] },
                      { name: '3-lint', value: tokens['rhc']['size']['3-lint'] },
                    ].map(({ name, value }) => (
                      <TableRow key={name}>
                        <TableCell className="utrecht-table__cell--rhc-middle">
                          <SpaceSample value={value} />
                        </TableCell>
                        <TableCell className="utrecht-table__cell--rhc-middle">
                          <CopyDesignTokenButton path={['rhc', 'space', name]} />
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
