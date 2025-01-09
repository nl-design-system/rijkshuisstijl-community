'use client';
import { PropsWithChildren } from 'react';
import '@nl-rvo/assets/fonts/index.css';
import '@rijkshuisstijl-community/design-tokens/dist/index.css';
import '@rijkshuisstijl-community/components-css/dist/index.css';
import '@rijkshuisstijl-community/font/src/index.mjs';
import '@rijkshuisstijl-community/storybook/src/templates/globals.css';
import { PageBody } from '@utrecht/page-body-react';
import { PageLayout } from '@utrecht/page-layout-react';
import { Root } from '@utrecht/root-react';
import Head from 'next/head';

export default function RootLayout({ children }: PropsWithChildren<{}>) {
  return (
    <Root>
      <Head>
        <title>Rijkshuisstijl demo - Index</title>
      </Head>
      <PageBody className="rhc-theme">
        <PageLayout>{children}</PageLayout>
      </PageBody>
    </Root>
  );
}
