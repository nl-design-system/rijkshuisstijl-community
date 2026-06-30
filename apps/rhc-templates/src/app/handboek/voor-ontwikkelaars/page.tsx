import PageContent from '@rijkshuisstijl-community/storybook/src/templates/handboek/VoorOntwikkelaars';
import '@rijkshuisstijl-community/storybook/src/templates/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Voor ontwikkelaars',
  description: 'Voor ontwikkelaars - Handboek Rijkshuisstijl Community',
};

const Page = () => {
  return <PageContent />;
};

export default Page;
