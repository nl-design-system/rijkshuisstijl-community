import PageContent from '@rijkshuisstijl-community/storybook/src/templates/mijn-omgeving-berichtenbox';
import '@rijkshuisstijl-community/storybook/src/templates/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Berichtenbox',
  description: 'Berichtenbox template voor de Rijkshuisstijl Community',
};

const Page = () => {
  return <PageContent />;
};

export default Page;
