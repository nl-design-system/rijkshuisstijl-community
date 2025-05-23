import PageContent from '@rijkshuisstijl-community/storybook/src/templates/not-found';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pagina niet gevonden (404)',
  description: 'Pagina niet gevonden. Deze pagina bestaat (niet) meer.',
};

export default function Page() {
  return <PageContent />;
}
