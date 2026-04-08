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
import { Code, Paragraph } from '@utrecht/component-library-react';
import { CopyDesignTokenButton } from './CopyDesignTokenButton';
import { PageBodyContainer, PageBodyContent, PageBodyMain } from './PageBody';
import { SpaceSample } from './SpaceSample';
import { navigation } from './navigation';
import SharedFooter from '../shared/footer';
import SharedHeader from '../shared/header';
import './index.css';

type SpacingTable = Array<{
  name: string;
  path: Array<string>;
}>;

const TableRows = ({ rows }: { rows: SpacingTable }) =>
  rows.map(({ name, path }) => (
    <TableRow key={name}>
      <TableCell className="utrecht-table__cell--rhc-middle">
        <SpaceSample value={`var(--${path.join('-')})`} />
      </TableCell>
      <TableCell className="utrecht-table__cell--rhc-middle">
        <CopyDesignTokenButton path={['rhc', 'space', name]} />
      </TableCell>
    </TableRow>
  ));

const tshirtSizesTable: SpacingTable = [
  { name: 'none', path: ['rhc', 'space', 'none'] },
  { name: '2xs', path: ['rhc', 'space', '2xs'] },
  { name: 'xs', path: ['rhc', 'space', 'xs'] },
  { name: 'sm', path: ['rhc', 'space', 'sm'] },
  { name: 'md', path: ['rhc', 'space', 'md'] },
  { name: 'lg', path: ['rhc', 'space', 'lg'] },
  { name: 'xl', path: ['rhc', 'space', 'xl'] },
  { name: '2xl', path: ['rhc', 'space', '2xl'] },
  { name: '3xl', path: ['rhc', 'space', '3xl'] },
  { name: '4xl', path: ['rhc', 'space', '4xl'] },
  { name: '5xl', path: ['rhc', 'space', '5xl'] },
];

const lintSizesTable: SpacingTable = [
  { name: 'quarter-lint', path: ['rhc', 'size', 'quarter-lint'] },
  { name: 'half-lint', path: ['rhc', 'size', 'half-lint'] },
  { name: 'lint', path: ['rhc', 'size', 'lint'] },
  { name: '2-lint', path: ['rhc', 'size', '2-lint'] },
  { name: '3-lint', path: ['rhc', 'size', '3-lint'] },
];

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
                    <TableRows rows={tshirtSizesTable} />
                    <TableRows rows={lintSizesTable} />
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
