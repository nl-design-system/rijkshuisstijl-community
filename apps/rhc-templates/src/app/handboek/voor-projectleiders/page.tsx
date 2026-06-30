import PageContent from '@rijkshuisstijl-community/storybook/src/templates/handboek/VoorProjectleiders';
import '@rijkshuisstijl-community/storybook/src/templates/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Voor projectleiders',
  description: 'Voor projectleiders - Handboek Rijkshuisstijl Community',
};

const Page = () => {
  return <PageContent />;
};

export default Page;
