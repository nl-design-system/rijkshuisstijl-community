import PageContent from '@rijkshuisstijl-community/storybook/src/templates/handboek/voordesigners/figma-changelog';
import '@rijkshuisstijl-community/storybook/src/templates/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Figma changelog - Voor designers',
  description: 'Figma changelog - Voor designers - Handboek Rijkshuisstijl Community',
};

const Page = () => {
  return <PageContent />;
};

export default Page;
