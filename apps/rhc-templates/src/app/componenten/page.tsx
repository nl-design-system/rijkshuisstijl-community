import SharedHeader from '@rijkshuisstijl-community/storybook/src/templates/shared/header';
import SharedFooter from '@rijkshuisstijl-community/storybook/src/templates/shared/footer';
import { PageBody } from '@utrecht/page-body-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Componenten',
  description: 'Lijst van alle beschikbare componenten, gepaard met statussen',
};

export default () => (
  <>
    <SharedHeader />
    <PageBody>hai</PageBody>
    <SharedFooter />
  </>
);
