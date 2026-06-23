import { Heading, Icon, LinkList, LinkListLink } from '@rijkshuisstijl-community/components-react';
import PageLayoutTwoColumnSidenav from '../../PageLayoutTwoColumnSidenav';

export default function Page() {
  return (
    <PageLayoutTwoColumnSidenav>
      <div className="rhc-margin-block-end-wrapper">
        <Heading level={1}>Voor designers</Heading>
        <LinkList>
          <LinkListLink href="/handboek/voor-designers/introductie" icon={<Icon icon="chevron-right" />}>
            Introductie
          </LinkListLink>
          <LinkListLink href="/handboek/voor-designers/figma-changelog" icon={<Icon icon="chevron-right" />}>
            Figma changelog
          </LinkListLink>
        </LinkList>
      </div>
    </PageLayoutTwoColumnSidenav>
  );
}
