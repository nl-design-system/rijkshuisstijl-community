import PageContent from '@rijkshuisstijl-community/storybook/src/templates/details';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Details',
  description: 'Details template voor de Rijkshuisstijl Community',
};

export default function Page() {
  return <PageContent />;
}
