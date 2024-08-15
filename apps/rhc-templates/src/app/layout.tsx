'use client';
import { Document } from '@utrecht/component-library-react';
import { PropsWithChildren } from 'react';
import '@nl-rvo/assets/fonts/index.css';
import '@rijkshuisstijl-community/design-tokens/dist/index.css';
import '@rijkshuisstijl-community/components-css/index.scss';
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
        <div className="information">
          <div className="unstarted">Elemententen die nog helemaal geen styling hebben zijn met rood omgeven</div>
          <div className="unfinished">
            Elementen die al styling hebben maar die nog niet helemaal af zijn zijn met geel omgeven
          </div>
          <div>
            Elementen die niet met een kleur zijn omgeven zijn af, let op: dit betekent niet per se dat ze ook in
            storybook staan.
          </div>
          <Link href="/page">Page</Link>
          <br />
          <Link href="/form">Form</Link>
          <br />
          <Link href="/details">Details</Link>
          <br />
          <Link href="/collage">Collage</Link>
        </div>
        <RHCTheme>
          <Document>{children}</Document>
        </RHCTheme>
      </body>
    </html>
  );
}
