import PageContent from '@rijkshuisstijl-community/storybook/src/templates/voorbeelden';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Voorbeelden',
  description: "Voorbeeldpagina's voor de Rijkshuisstijl Community",
};

export default function Page() {
  return <PageContent />;
}
