import PageContent from '@rijkshuisstijl-community/storybook/src/templates/mijn-omgeving-vervoer';
import '@rijkshuisstijl-community/storybook/src/templates/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mijn Omgeving Vervoer',
  description: 'Mijn Omgeving Vervoer template voor de Rijkshuisstijl Community',
};

const Page = () => {
  return <PageContent />;
};

export default Page;
