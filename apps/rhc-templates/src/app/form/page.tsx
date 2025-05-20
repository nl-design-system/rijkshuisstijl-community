import PageContent from '@rijkshuisstijl-community/storybook/src/templates/form';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Formulier',
  description: 'Formulier template voor de Rijkshuisstijl Community',
};

export default function Page() {
  return <PageContent />;
}
