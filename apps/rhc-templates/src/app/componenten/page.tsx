import PageContent from '@rijkshuisstijl-community/storybook/src/templates/componenten';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Componenten',
  description: 'Componenten template voor de Rijkshuisstijl Community',
};

export default function Page() {
  return <PageContent />;
}
