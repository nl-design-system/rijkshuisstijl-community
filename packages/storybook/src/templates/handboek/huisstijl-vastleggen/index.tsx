import { Heading, Icon, LinkList, LinkListLink } from '@rijkshuisstijl-community/components-react';
import PageLayoutTwoColumnSidenav from '../../PageLayoutTwoColumnSidenav';

export default function Page() {
  return (
    <PageLayoutTwoColumnSidenav>
      <div className="rhc-margin-block-end-wrapper">
        <Heading level={1}>Huisstijl vastleggen</Heading>
        <LinkList>
          <LinkListLink href="/handboek/huisstijl-vastleggen/introductie" icon={<Icon icon="chevron-right" />}>
            Introductie
          </LinkListLink>
          <LinkListLink href="/handboek/huisstijl-vastleggen/basis-tokens" icon={<Icon icon="chevron-right" />}>
            Basis tokens
          </LinkListLink>
          <LinkListLink href="/handboek/huisstijl-vastleggen/themas" icon={<Icon icon="chevron-right" />}>
            Themas
          </LinkListLink>
        </LinkList>
      </div>
    </PageLayoutTwoColumnSidenav>
  );
}
