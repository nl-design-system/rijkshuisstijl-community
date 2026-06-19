import PageContent from '@rijkshuisstijl-community/storybook/src/templates/handboek';
import '@rijkshuisstijl-community/storybook/src/templates/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Handboek',
  description: 'Handboek template voor de Rijkshuisstijl Community',
};

const Page = () => {
  return <PageContent />;
};

export default Page;
