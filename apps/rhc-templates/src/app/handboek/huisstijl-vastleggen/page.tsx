import PageContent from '@rijkshuisstijl-community/storybook/src/templates/handboek/huisstijl-vastleggen';
import '@rijkshuisstijl-community/storybook/src/templates/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Huisstijl vastleggen',
  description: 'Huisstijl vastleggen - Handboek Rijkshuisstijl Community',
};

const Page = () => {
  return <PageContent />;
};

export default Page;
