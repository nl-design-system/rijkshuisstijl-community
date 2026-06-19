import PageContent from '@rijkshuisstijl-community/storybook/src/templates/handboek/huisstijl-vastleggen/basis-tokens/lettertypen';
import '@rijkshuisstijl-community/storybook/src/templates/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lettertypen - Basis tokens',
  description: 'Lettertypen - Basis tokens - Huisstijl vastleggen - Handboek Rijkshuisstijl Community',
};

const Page = () => {
  return <PageContent />;
};

export default Page;
