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
} from '@rijkshuisstijl-community/components-react';
import { Fragment } from 'react/jsx-runtime';
import { PageBodyContainer, PageBodyContent, PageBodyMain } from './PageBody';
import { TokenGroupTable } from './TokenGroupTable';
import { navigation } from './navigation';
import SharedFooter from '../shared/footer';
import SharedHeader from '../shared/header';
import './index.css';

const colors: { label: string; path: string[] }[] = [
  {
    label: 'Lintblauw',
    path: ['rhc', 'color', 'lintblauw'],
  },
  {
    label: 'Paars',
    path: ['rhc', 'color', 'paars'],
  },
  {
    label: 'Violet',
    path: ['rhc', 'color', 'violet'],
  },
  {
    label: 'Robijnrood',
    path: ['rhc', 'color', 'robijnrood'],
  },
  {
    label: 'Roze',
    path: ['rhc', 'color', 'roze'],
  },
  {
    label: 'Rood',
    path: ['rhc', 'color', 'rood'],
  },
  {
    label: 'Oranje',
    path: ['rhc', 'color', 'oranje'],
  },
  {
    label: 'Donkergeel',
    path: ['rhc', 'color', 'donkergeel'],
  },
  {
    label: 'Geel',
    path: ['rhc', 'color', 'geel'],
  },
  {
    label: 'Donkerbruin',
    path: ['rhc', 'color', 'donkerbruin'],
  },
  {
    label: 'Bruin',
    path: ['rhc', 'color', 'bruin'],
  },
  {
    label: 'Donkergroen',
    path: ['rhc', 'color', 'donkergroen'],
  },
  {
    label: 'Groen',
    path: ['rhc', 'color', 'groen'],
  },
  {
    label: 'Mosgroen',
    path: ['rhc', 'color', 'mosgroen'],
  },
  {
    label: 'Mintgroen',
    path: ['rhc', 'color', 'mintgroen'],
  },
  {
    label: 'Donkerblauw',
    path: ['rhc', 'color', 'donkerblauw'],
  },
  {
    label: 'Hemelblauw',
    path: ['rhc', 'color', 'hemelblauw'],
  },
  {
    label: 'Lichtblauw',
    path: ['rhc', 'color', 'lichtblauw'],
  },
  {
    label: 'Cool Gray',
    path: ['rhc', 'color', 'cool-grey'],
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
                {colors.map(({ label, path }) => (
                  <Fragment key={path.join('.')}>
                    <Heading level={2}>{label}</Heading>
                    <TokenGroupTable path={path.join('.')} />
                  </Fragment>
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
