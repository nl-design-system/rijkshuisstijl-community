'use client';
import { Document } from '@utrecht/component-library-react';
import { PropsWithChildren } from 'react';
import '@nl-rvo/assets/fonts/index.css';
import '@rijkshuisstijl-community/design-tokens/dist/index.css';
import '@rijkshuisstijl-community/components-css/index.scss';
import { Logo } from '@rijkshuisstijl-community/components-react';
import { NavBar, NavList, NavListLinkButton, PageHeader } from '@utrecht/component-library-react/dist/css-module';
import './globals.css';
import Link from 'next/link';
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
                <div className="unfinished">
                  <Logo organisation="Rijkshuisstijl Community"></Logo>
                </div>
              </PageHeader>
            </div>
            <div className="unstarted rhc-background-color-lint-blauw">
              {/* wrong spacing, wrong background color, wrong text color, no way to add right aligning link */}
              <NavBar>
                <NavList>
                  <NavListLinkButton>
                    <Link href="/">Page</Link>
                  </NavListLinkButton>
                  <NavListLinkButton>
                    <Link href="/form">Form</Link>
                  </NavListLinkButton>
                  <NavListLinkButton>
                    <Link href="/details">Details</Link>
                  </NavListLinkButton>
                  <NavListLinkButton>
                    <Link href="/collage">Collage</Link>
                  </NavListLinkButton>
                </NavList>
              </NavBar>
            </div>
            <Document>{children}</Document>
          </main>
        </RHCTheme>
      </body>
    </html>
  );
}
