import PageContent from '@rijkshuisstijl-community/storybook/src/templates/collage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Collage',
  description: 'Collage template voor de Rijkshuisstijl Community',
};

export default function Page() {
  return <PageContent />;
}
