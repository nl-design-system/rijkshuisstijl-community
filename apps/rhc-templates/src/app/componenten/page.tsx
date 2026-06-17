import SharedHeader from '@rijkshuisstijl-community/storybook/src/templates/shared/header';
import SharedFooter from '@rijkshuisstijl-community/storybook/src/templates/shared/footer';
import { PageBody } from '@utrecht/page-body-react';
import {
  CardAsLink,
  DataBadgeButton,
  Heading,
  LinkList,
  LinkListLink,
  Paragraph,
} from '@rijkshuisstijl-community/components-react';
import type { Metadata } from 'next';

import components from './componenten';

export const metadata: Metadata = {
  title: 'Componenten',
  description: 'Lijst van alle beschikbare componenten, gepaard met statussen en handige links',
};

export default () => (
  <>
    <SharedHeader />
    <PageBody
      style={{
        paddingBlockEnd: 'var(--rhc-nav-bar-link-padding-block-end)',
        paddingBlockStart: 'var(--rhc-nav-bar-link-padding-block-start)',
        paddingInlineEnd: 'var(--rhc-nav-bar-link-padding-inline-end)',
        paddingInlineStart: 'var(--rhc-nav-bar-link-padding-inline-start)',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', rowGap: '12px' }}>
        {components.items.map((comp) => (
          <CardAsLink key={comp.content.title}>
            <Heading level={2}>{comp.content.title}</Heading>
            <Paragraph>Oorsprong: {comp.oorsprong}</Paragraph>
            <Paragraph>NL status: {comp['nL Status']}</Paragraph>
            <div style={{ display: 'flex', columnGap: '4px' }}>
              {comp.react == 'Available' && <DataBadgeButton>React</DataBadgeButton>}
              {comp.angular == 'Available' && <DataBadgeButton>Angular</DataBadgeButton>}
              {comp.twig == 'Available' && <DataBadgeButton>Twig</DataBadgeButton>}
              {comp['web component'] == 'Available' && <DataBadgeButton>Web component</DataBadgeButton>}
            </div>
            <LinkList>
              {comp['figma URL'] && <LinkListLink href={comp['figma URL']}>Design</LinkListLink>}
              {comp['rijkshuisstijl interpretatie discussie URL'] && (
                <LinkListLink href={comp['rijkshuisstijl interpretatie discussie URL']}>Designdiscussie</LinkListLink>
              )}
            </LinkList>
          </CardAsLink>
        ))}
      </div>
    </PageBody>
    <SharedFooter />
  </>
);
