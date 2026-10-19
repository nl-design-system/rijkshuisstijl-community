import PageContent from '@rijkshuisstijl-community/storybook/src/templates/componenten';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Componentenoverzicht',
  description:
    'Filter op zoekterm en framework om componenten uit de Rijkshuisstijl Community te vinden. Bekijk direct de component in Storybook door de link in het zoekresultaat te volgen.',
};

export default function Page() {
  return <PageContent />;
}
