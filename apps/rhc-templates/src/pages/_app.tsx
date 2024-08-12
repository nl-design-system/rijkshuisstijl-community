'use client';

import type { AppProps } from 'next/app';
import Layout from '../components/layout';
import './globals.css';
import Head from 'next/head';

export default function RHCIndex({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Rijkshuisstijl demo - Index</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
