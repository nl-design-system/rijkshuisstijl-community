'use client';
import { PropsWithChildren } from 'react';
import '@nl-rvo/assets/fonts/index.css';
import '@rijkshuisstijl-community/design-tokens/dist/wetgevend/index.css';
import '@rijkshuisstijl-community/components-css/dist/index.css';
import '@rijkshuisstijl-community/font/src/index.mjs';
import '@rijkshuisstijl-community/storybook/src/templates/globals.css';
import Head from 'next/head';

export default function RootLayout({ children }: PropsWithChildren<{}>) {
  return (
    <html lang="nl">
      <Head>
        <title>Rijkshuisstijl demo - Index</title>
      </Head>
      <body>
        <div className="rhc-theme">{children}</div>;
      </body>
    </html>
  );
}
