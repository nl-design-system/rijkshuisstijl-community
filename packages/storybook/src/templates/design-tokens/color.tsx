'use client'; // TODO: move to lower level at which it is actually needed, instead of wrapping the whole file

import {
  Article,
  Heading,
  Link,
  Paragraph,
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
import { ColorSample } from '@utrecht/component-library-react';
import { CopyDesignTokenButton } from './CopyDesignTokenButton';
import { PageBodyContainer, PageBodyContent, PageBodyMain } from './PageBody';
import { navigation } from './navigation';
import SharedFooter from '../shared/footer';
import SharedHeader from '../shared/header';
import './index.css';

const colors: { label: string; path: string[]; tokens: { [index: string]: string } }[] = [
  {
    label: 'Lintblauw',
    path: ['rhc', 'color', 'lintblauw'],
    tokens: tokens['rhc']['color']['lintblauw'],
  },
  {
    label: 'Paars',
    path: ['rhc', 'color', 'paars'],
    tokens: tokens['rhc']['color']['paars'],
  },
  {
    label: 'Violet',
    path: ['rhc', 'color', 'violet'],
    tokens: tokens['rhc']['color']['violet'],
  },
  {
    label: 'Robijnrood',
    path: ['rhc', 'color', 'robijnrood'],
    tokens: tokens['rhc']['color']['robijnrood'],
  },
  {
    label: 'Roze',
    path: ['rhc', 'color', 'roze'],
    tokens: tokens['rhc']['color']['roze'],
  },
  {
    label: 'Rood',
    path: ['rhc', 'color', 'rood'],
    tokens: tokens['rhc']['color']['rood'],
  },
  {
    label: 'Oranje',
    path: ['rhc', 'color', 'oranje'],
    tokens: tokens['rhc']['color']['oranje'],
  },
  {
    label: 'Donkergeel',
    path: ['rhc', 'color', 'donkergeel'],
    tokens: tokens['rhc']['color']['donkergeel'],
  },
  {
    label: 'Geel',
    path: ['rhc', 'color', 'geel'],
    tokens: tokens['rhc']['color']['geel'],
  },
  {
    label: 'Donkerbruin',
    path: ['rhc', 'color', 'donkerbruin'],
    tokens: tokens['rhc']['color']['donkerbruin'],
  },
  {
    label: 'Bruin',
    path: ['rhc', 'color', 'bruin'],
    tokens: tokens['rhc']['color']['bruin'],
  },
  {
    label: 'Donkergroen',
    path: ['rhc', 'color', 'donkergroen'],
    tokens: tokens['rhc']['color']['donkergroen'],
  },
  {
    label: 'Groen',
    path: ['rhc', 'color', 'groen'],
    tokens: tokens['rhc']['color']['groen'],
  },
  {
    label: 'Mosgroen',
    path: ['rhc', 'color', 'mosgroen'],
    tokens: tokens['rhc']['color']['mosgroen'],
  },
  {
    label: 'Mintgroen',
    path: ['rhc', 'color', 'mintgroen'],
    tokens: tokens['rhc']['color']['mintgroen'],
  },
  {
    label: 'Donkerblauw',
    path: ['rhc', 'color', 'donkerblauw'],
    tokens: tokens['rhc']['color']['donkerblauw'],
  },
  {
    label: 'Hemelblauw',
    path: ['rhc', 'color', 'hemelblauw'],
    tokens: tokens['rhc']['color']['hemelblauw'],
  },
  {
    label: 'Lichtblauw',
    path: ['rhc', 'color', 'lichtblauw'],
    tokens: tokens['rhc']['color']['lichtblauw'],
  },
  {
    label: 'Cool Gray',
    path: ['rhc', 'color', 'cool-grey'],
    tokens: tokens['rhc']['color']['cool-grey'],
  },
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
                <Heading level={1}>Kleuren</Heading>
                <Paragraph>
                  Gebruik de design tokens als je de kleuren uit het design system nodig hebt. Lees meer bij{' '}
                  <Link href="#thema">Thema</Link> om te lezen je kleuren kunt gebruiken zonder de kleurcodes te
                  kopieëren.
                </Paragraph>
                {colors.map(({ label, tokens, path }) => (
                  <>
                    <Heading level={2}>{label}</Heading>
                    <Table className="utrecht-table--rhc-breakout-gutter">
                      <TableHeader>
                        <TableRow>
                          <TableHeaderCell>Voorbeeld</TableHeaderCell>
                          <TableHeaderCell>Design Token</TableHeaderCell>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {Object.entries(tokens).map(([name]) => (
                          <TableRow key={name}>
                            <TableCell className="utrecht-table__cell--rhc-fill utrecht-table__cell--rhc-color-sample">
                              <ColorSample
                                className="rhc-color-sample--table-cell"
                                color={`var(--${[...path, name].join('-')})`}
                              />
                            </TableCell>
                            <TableCell className="utrecht-table__cell--rhc-middle">
                              <CopyDesignTokenButton path={[...path, name]} />
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </>
                ))}
              </div>
            </Article>
          </PageBodyMain>
        </PageBodyContent>
      </PageBodyContainer>
      <SharedFooter />
    </>
  );
}
