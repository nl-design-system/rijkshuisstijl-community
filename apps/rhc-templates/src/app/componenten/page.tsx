import React from 'react';
import SharedHeader from '@rijkshuisstijl-community/storybook/src/templates/shared/header';
import SharedFooter from '@rijkshuisstijl-community/storybook/src/templates/shared/footer';
import { PageBody } from '@utrecht/page-body-react';
import { DataBadgeButton, Heading } from '@rijkshuisstijl-community/components-react';
import type { Metadata } from 'next';

import components from './componenten';

export const metadata: Metadata = {
  title: 'Componenten',
  description: 'Lijst van alle beschikbare componenten, gepaard met statussen',
};

export default () => (
  <>
    <SharedHeader />
    <PageBody>
      {components.items.map((comp) => (
        <React.Fragment key={comp.content.title}>
          <Heading level={2}>{comp.content.title}</Heading>
          {comp.react == 'Available' && <DataBadgeButton>React</DataBadgeButton>}
          {comp.angular == 'Available' && <DataBadgeButton>Angular</DataBadgeButton>}
          {comp.twig == 'Available' && <DataBadgeButton>Twig</DataBadgeButton>}
          {comp['web component'] == 'Available' && <DataBadgeButton>Web component</DataBadgeButton>}
        </React.Fragment>
      ))}
    </PageBody>
    <SharedFooter />
  </>
);
