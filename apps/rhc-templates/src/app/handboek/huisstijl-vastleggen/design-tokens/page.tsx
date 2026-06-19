import PageContent from '@rijkshuisstijl-community/storybook/src/templates/handboek/huisstijl-vastleggen/design-tokens';
import '@rijkshuisstijl-community/storybook/src/templates/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Design tokens - Huisstijl vastleggen',
  description: 'Design tokens - Huisstijl vastleggen - Handboek Rijkshuisstijl Community',
};

const Page = () => {
  return <PageContent />;
};

export default Page;
