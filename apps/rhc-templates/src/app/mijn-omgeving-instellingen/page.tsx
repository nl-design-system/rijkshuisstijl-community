import PageContent from '@rijkshuisstijl-community/storybook/src/templates/mijn-omgeving-instellingen';
import '@rijkshuisstijl-community/storybook/src/templates/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mijn Omgeving Instellingen',
  description: 'Mijn Omgeving Instellingen template voor de Rijkshuisstijl Community',
};

const Page = () => {
  return <PageContent />;
};

export default Page;
