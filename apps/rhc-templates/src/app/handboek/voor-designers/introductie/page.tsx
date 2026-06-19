import PageContent from '@rijkshuisstijl-community/storybook/src/templates/handboek/voordesigners/introductie';
import '@rijkshuisstijl-community/storybook/src/templates/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Introductie - Voor designers',
  description: 'Introductie - Voor designers - Handboek Rijkshuisstijl Community',
};

const Page = () => {
  return <PageContent />;
};

export default Page;
