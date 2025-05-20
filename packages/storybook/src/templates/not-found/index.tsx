'use client'; // TODO: move to lower level at which it is actually needed, instead of wrapping the whole file

import { Article, Heading, Paragraph } from '@rijkshuisstijl-community/components-react';
import { PageBody } from '@utrecht/page-body-react';
import SharedFooter from '../shared/footer';
import SharedHeader from '../shared/header';
import SharedMainPageContent from '../shared/main-page-content';

export default function Page() {
  return (
    <>
      <SharedHeader />
      <PageBody className="rhc-templates-page">
        <SharedMainPageContent>
          <Article>
            <Heading level={1}>Pagina niet gevonden (404)</Heading>
            <Paragraph purpose="lead">Deze pagina bestaat (niet) meer.</Paragraph>
          </Article>
        </SharedMainPageContent>
      </PageBody>
      <SharedFooter />
    </>
  );
}
