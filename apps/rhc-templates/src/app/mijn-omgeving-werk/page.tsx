import PageContent from '@rijkshuisstijl-community/storybook/src/templates/mijn-omgeving-werk';
import '@rijkshuisstijl-community/storybook/src/templates/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mijn Omgeving Werk',
  description: 'Mijn Omgeving Werk template voor de Rijkshuisstijl Community',
};

const Page = () => {
  return <PageContent />;
};

export default Page;
