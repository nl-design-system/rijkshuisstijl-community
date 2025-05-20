import PageContent from '@rijkshuisstijl-community/storybook/src/templates/rich-text';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Rich Text',
  description: 'Rich Text template voor de Rijkshuisstijl Community',
};

export default function Page() {
  return <PageContent />;
}
