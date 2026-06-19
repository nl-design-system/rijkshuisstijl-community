import PageContent from '@rijkshuisstijl-community/storybook/src/templates/handboek/huisstijl-vastleggen/themas';
import '@rijkshuisstijl-community/storybook/src/templates/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Thema's - Huisstijl vastleggen",
  description: "Thema's - Huisstijl vastleggen - Handboek Rijkshuisstijl Community",
};

const Page = () => {
  return <PageContent />;
};

export default Page;
