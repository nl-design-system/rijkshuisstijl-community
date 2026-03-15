/**
 * TODO: Replace direct imports from `@utrecht/*-react` with `@rijkshuisstijl-community/components-react`
 * when `"use client"` issues are solved.
 */

import { PropsWithChildren } from 'react';
// import { Body, PageLayout, Root } from '@rijkshuisstijl-community/components-react';
import { Body } from '@utrecht/body-react';
import { Root } from '@utrecht/root-react';
import { PageLayout } from '@utrecht/page-layout-react';
import type { Metadata } from 'next';
import '../../../../proprietary/assets/src/font.css';
import '@nl-rvo/assets/fonts/index.css';
import '@rijkshuisstijl-community/design-tokens/dist/index.css';
import '@rijkshuisstijl-community/design-tokens/src/fluid.css';
import '@rijkshuisstijl-community/design-tokens/src/dark-mode.css';
import '@rijkshuisstijl-community/design-tokens/src/top-secret.css';
import '@rijkshuisstijl-community/components-css/dist/index.css';
import '@rijkshuisstijl-community/font/src/index.mjs';
import '@rijkshuisstijl-community/storybook/src/templates/globals.css';
import './layout.css';

export const metadata: Metadata = {
  title: {
    default: 'Rijkshuisstijl Community Design System | Rijkshuisstijl Community',
    template: '%s | Rijkshuisstijl Community',
  },
};

export default function RootLayout({ children }: PropsWithChildren<{}>) {
  return (
    <Root lang="nl" dir="ltr" className="rhc-theme rhc-theme--fluid rhc-theme--top-secret">
      <Body>
        <PageLayout>{children}</PageLayout>
      </Body>
    </Root>
  );
}
