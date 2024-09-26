'use client';
import { Document } from '@utrecht/component-library-react';
import { PropsWithChildren } from 'react';
import '@nl-rvo/assets/fonts/index.css';
import '@rijkshuisstijl-community/design-tokens/dist/index.css';
import '@rijkshuisstijl-community/components-css/index.scss';
import { Logo, NavBar, PageHeader } from '@rijkshuisstijl-community/components-react';
import { DutchMapIcon } from '@rijkshuisstijl-community/components-react/src/icons';
import '@rijkshuisstijl-community/font/src/index.mjs';
import './globals.css';
import Head from 'next/head';

const RHCTheme = ({ children }: PropsWithChildren<{}>) => <div className="rhc-theme">{children}</div>;

export default function RootLayout({ children }: PropsWithChildren<{}>) {
  return (
    <html lang="nl">
      <Head>
        <title>Rijkshuisstijl demo - Index</title>
      </Head>
      <body>
        <RHCTheme>
          <main className="page">
            <div className="rhc-background-color-white">
              <PageHeader>
                <Logo organisation="Rijkshuisstijl Community">
                  <DutchMapIcon />
                </Logo>
              </PageHeader>
            </div>
            <div className="unstarted rhc-background-color-lint-blauw">
              <NavBar
                items={[
                  { href: '/', label: 'Page' },
                  { href: '/form', label: 'Form' },
                  { href: '/details', label: 'Details' },
                  { href: '/collage', label: 'Collage' },
                ]}
              ></NavBar>
            </div>
            <Document>{children}</Document>
          </main>
        </RHCTheme>
      </body>
    </html>
  );
}
