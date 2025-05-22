import { PropsWithChildren } from 'react';
import '@nl-rvo/assets/fonts/index.css';
import '@rijkshuisstijl-community/design-tokens/dist/index.css';
import '@rijkshuisstijl-community/components-css/dist/index.css';
import '@rijkshuisstijl-community/font/src/index.mjs';
import '@rijkshuisstijl-community/storybook/src/templates/globals.css';
import { PageLayout } from '@utrecht/page-layout-react';
import { Root } from '@utrecht/root-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Rijkshuisstijl Community',
    template: '%s | Rijkshuisstijl Community',
  },
};

export default function RootLayout({ children }: PropsWithChildren<{}>) {
  return (
    <Root lang="nl" dir="ltr">
      <body className="rhc-theme">
        <PageLayout>{children}</PageLayout>
      </body>
    </Root>
  );
}
