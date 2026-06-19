import PageContent from '@rijkshuisstijl-community/storybook/src/templates/handboek/VoorContentbeheerders';
import '@rijkshuisstijl-community/storybook/src/templates/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Voor contentbeheerders',
  description: 'Voor contentbeheerders - Handboek Rijkshuisstijl Community',
};

const Page = () => {
  return <PageContent />;
};

export default Page;
