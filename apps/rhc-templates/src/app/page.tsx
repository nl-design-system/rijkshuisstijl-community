import PageContent from '@rijkshuisstijl-community/storybook/src/templates/homepage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  description: 'Homepage template voor de Rijkshuisstijl Community',
};

export default function Page() {
  return <PageContent />;
}
