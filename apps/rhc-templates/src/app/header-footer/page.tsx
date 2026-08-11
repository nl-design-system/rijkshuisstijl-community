import PageContent from '@rijkshuisstijl-community/storybook/src/templates/header-footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Header & Footer',
  description: 'Header & Footer template voor de Rijkshuisstijl Community',
};

export default function Page() {
  return <PageContent />;
}
