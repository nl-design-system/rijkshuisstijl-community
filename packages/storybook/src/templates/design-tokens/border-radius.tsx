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
import { BorderRadiusSample } from './BorderRadiusSample';
import { CopyDesignTokenButton } from './CopyDesignTokenButton';
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
                <Heading level={1}>Afrondingen</Heading>
                <Table className="utrecht-table--rhc-breakout-gutter">
                  <TableHeader>
                    <TableRow>
                      <TableHeaderCell>Voorbeeld</TableHeaderCell>
                      <TableHeaderCell>Design Token</TableHeaderCell>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {/* TODO: Sort border-radius values from small to large */}
                    {/* TODO: Probably reuse logic from github.com/nl-design-system/theme-wizard to compare `px` and `rem` values */}
                    {Object.entries(tokens['rhc']['border-radius'])
                      .sort(([, valueA], [, valueB]) => Number.parseFloat(`${valueA}`) - Number.parseFloat(`${valueB}`))
                      .map(([name, value]) => (
                        <TableRow key={name}>
                          <TableCell className="utrecht-table__cell--rhc-middle">
                            <BorderRadiusSample value={`${value}`} />
                          </TableCell>
                          <TableCell className="utrecht-table__cell--rhc-middle">
                            <CopyDesignTokenButton path={['rhc', 'border-radius', name]} />
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
                          <BorderRadiusSample value={value} />
                        </TableCell>
                        <TableCell className="utrecht-table__cell--rhc-middle">
                          <CopyDesignTokenButton path={['rhc', 'size', name]} />
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
