import PageContent from '@rijkshuisstijl-community/storybook/src/templates/handboek/huisstijl-vastleggen/themas/start-thema';
import '@rijkshuisstijl-community/storybook/src/templates/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Start-thema - Huisstijl vastleggen',
  description: 'Start-thema - Huisstijl vastleggen - Handboek Rijkshuisstijl Community',
};

const Page = () => {
  return <PageContent />;
};

export default Page;
